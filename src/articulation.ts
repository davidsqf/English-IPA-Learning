import data from '../content/articulation.json' with { type: 'json' };
import { pronunciationSources } from './library.ts';
import type { SourceId } from './library.ts';

export const articulations = data.entries;
export const articulationPoses = data.poses;
export type Articulation = typeof articulations[number];
export type Phase = Articulation['phases'][number];
export type Pose = { tongue: number[]; lips: number[]; lipShape: string };
const esc = (text: string) => text.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
export function getArticulation(id: string): Articulation {
  const entry = articulations.find(entry => entry.symbolId === id);
  if (!entry) throw new Error(`Missing articulation: ${id}`);
  return entry;
}
export function phasePose(phase: Phase): Pose {
  const pose = articulationPoses[phase.poseId as keyof typeof articulationPoses];
  if (!pose) throw new Error(`Missing articulation pose: ${phase.poseId}`);
  return pose;
}
export function interpolatePose(start: Pose, end: Pose, fraction: number): Pose {
  const amount = Math.max(0, Math.min(1, fraction));
  const mix = (left: number[], right: number[]) => left.map((value, i) => value + (right[i] - value) * amount);
  return { tongue: mix(start.tongue, end.tongue), lips: mix(start.lips, end.lips), lipShape: amount < .5 ? start.lipShape : end.lipShape };
}
export function tonguePath(pose: Pose) {
  const [bx, by, mx, my, tx, ty] = pose.tongue;
  return `M111 218 C85 199 89 169 ${bx} ${by} Q${bx + 13} ${by - 8} ${mx} ${my} Q${mx + 25} ${my} ${tx} ${ty} Q${tx + 4} ${ty + 26} 161 201 Q138 217 111 218Z`;
}
function lips(pose: Pose) {
  const [rx, opening] = pose.lips;
  const ry = Math.max(7, opening + 7), cx = 82, cy = 125;
  const outline = `M${cx - rx - 6} ${cy} Q${cx - rx / 2} ${cy - ry} ${cx} ${cy - ry * .65} Q${cx + rx / 2} ${cy - ry} ${cx + rx + 6} ${cy} Q${cx + rx / 2} ${cy + ry * 1.3} ${cx} ${cy + ry} Q${cx - rx / 2} ${cy + ry * 1.3} ${cx - rx - 6} ${cy}Z`;
  const teeth = pose.lipShape === 'labiodental' ? `<path d="M49 119H115V130Q82 136 49 130Z" class="art-teeth"/><path d="M47 134Q82 118 117 134" class="art-outline"/><path d="M66 130H98" class="art-focus"/>` : '';
  const dental = pose.lipShape === 'dental' ? `<path d="M50 114H114V124H50Z" class="art-teeth"/><path d="M62 137Q82 118 102 137Q82 147 62 137Z" class="art-tongue"/>` : '';
  return `<path d="${outline}" class="art-lips"/>${opening < .8 ? `<path d="M${cx - rx} 125Q82 128 ${cx + rx} 125" class="art-outline"/>` : `<ellipse cx="82" cy="125" rx="${rx}" ry="${opening}" class="art-mouth"/>`}${teeth}${dental}`;
}
const contactPoint: Record<string, number[]> = { bilabial: [268, 122], labiodental: [250, 128], dental: [250, 128], alveolar: [231, 103], postalveolar: [219, 98], velar: [120, 102], glottal: [103, 223] };
function airflow(pose: Pose, phase: Phase, uid: string, entry: Articulation) {
  const nasal = phase.airflow === 'nasal', lateral = phase.airflow === 'lateral';
  if (phase.airflow === 'none') return '';
  if (lateral) return ''; // Lateral airflow is shown in the frontal inset, not through the midline section.
  const [,, mx, my] = pose.tongue;
  const airHeight = (my + 92) / 2;
  const mouthY = phase.contact === 'labiodental' ? 130 : 122 + Math.max(4, pose.lips[1] * .7);
  const path = nasal ? 'M96 220C78 169 79 110 99 80Q153 47 211 73Q252 77 285 93' : `M96 220C77 175 88 120 128 112Q${mx - 10} ${airHeight} ${mx} ${airHeight}Q225 ${airHeight} 238 128Q246 129 260 129L293 ${mouthY}`;
  const burst = phase.airflow === 'burst' ? `<path d="M282 ${mouthY - 15}l15 -7M285 ${mouthY + 15}l15 7" class="art-air"/>` : '';
  const noise = phase.airflow === 'friction' ? `<path d="M279 ${mouthY - 9}l4 6 4 -6 4 6 4 -6" class="art-air"/>` : '';
  return `<g transform="translate(190 0)"><path d="${path}" class="art-air" marker-end="url(#${uid}-arrow)"/>${burst}${noise}<text x="${nasal ? 270 : 286}" y="${nasal ? 55 : mouthY + 27}" class="art-label" text-anchor="middle">${nasal ? '鼻腔气流' : entry.kind === 'stop' ? '释放' : '气流'}</text></g>`;
}
/** The coordinates are original relative teaching geometry, not measured speaker anatomy. */
export function articulationSvg(entry: Articulation, phase: Phase, pose: Pose, uid: string): string {
  const [, opening] = pose.lips;
  const lowerLip = pose.lipShape === 'closed' ? 122 : phase.contact === 'labiodental' ? 136 : 128 + opening * .65;
  const lowerTeeth = 139 + opening * .5;
  const point = phase.contact === 'velar' && phase.velum === 'lowered' ? [133, 99] : contactPoint[phase.contact];
  const isClosure = phase.airflow === 'none' || entry.kind === 'nasal' || entry.kind === 'lateral';
  const contact = point ? `<circle cx="${point[0]}" cy="${point[1]}" r="${isClosure ? 5 : 8}" class="${isClosure ? 'art-contact' : 'art-gap'}"/>` : '';
  const label = phase.contact === 'glottal' ? '声门送气' : phase.voiced ? '声带通常振动' : '声带不振动';
  const title = `/${entry.ipa}/ 发音示意：${phase.label}。${entry.lipCue}${entry.tongueCue}${entry.movementCue}`;
  const startPose = phasePose(entry.phases[0]), endPose = phasePose(entry.phases.at(-1)!);
  const trajectory = entry.kind === 'diphthong' ? `<path d="M${startPose.tongue[2]} ${startPose.tongue[3]}L${endPose.tongue[2]} ${endPose.tongue[3]}" class="art-trajectory" marker-end="url(#${uid}-tongue-arrow)"/><text x="280" y="195" class="art-tongue-label" text-anchor="middle">舌位滑动</text>` : '';
  const frontFlow = phase.airflow === 'lateral' ? `<path d="M57 132Q35 149 27 165M107 132Q129 149 137 165" class="art-air" marker-end="url(#${uid}-front-arrow)"/>` : '';
  const frontTongue = entry.kind === 'lateral' && phase.contact === 'alveolar' ? '<path d="M53 109H111V119H53Z" class="art-teeth"/><path d="M67 141Q68 124 76 117H88Q96 124 97 141Z" class="art-tongue"/>' : '';
  return `<div class="articulation-views"><div class="articulation-front-view"><span>嘴唇正面</span><svg viewBox="0 65 170 155" role="img" aria-labelledby="${uid}-front-title" xmlns="http://www.w3.org/2000/svg"><title id="${uid}-front-title">/${entry.ipa}/ 嘴唇：${esc(entry.lipCue)}</title><defs><marker id="${uid}-front-arrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto"><path d="M0 0L6 3L0 6" class="art-arrowhead"/></marker></defs>${lips(pose)}${frontTongue}${frontFlow}<text x="82" y="195" text-anchor="middle" class="art-label">${phase.airflow === 'lateral' ? '舌两侧气流' : pose.lipShape === 'rounded' ? '收圆' : pose.lipShape === 'closed' ? '闭合' : pose.lipShape === 'labiodental' ? '上齿 · 下唇' : pose.lipShape === 'dental' ? '舌尖 · 上齿' : pose.lipShape === 'spread' ? '稍展开' : '自然开口'}</text></svg></div><div class="articulation-side-view"><span>舌位侧面 · 脸朝右</span><svg viewBox="236 25 272 240" role="img" aria-labelledby="${uid}-title ${uid}-desc" xmlns="http://www.w3.org/2000/svg">
    <title id="${uid}-title">${esc(title)}</title><desc id="${uid}-desc">正面图显示嘴唇，侧面图显示舌位，脸朝右。蓝色表示舌或发音部位；灰绿色虚线箭头表示气流。${entry.kind === 'diphthong' ? '蓝色箭头表示舌位滑动。' : ''}${phase.velum === 'lowered' ? '软腭下降，鼻腔通道打开。' : '软腭抬起，鼻腔通道关闭。'}${esc(entry.variantNote)}</desc>
    <defs><marker id="${uid}-arrow" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0 0L6 3L0 6" class="art-arrowhead"/></marker><marker id="${uid}-tongue-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" class="art-tongue-arrowhead"/></marker></defs>
    <g transform="translate(190 0)">
      <path d="M76 45Q174 10 235 47L247 67Q253 86 279 94L272 106L257 109Q258 119 272 122M269 ${lowerLip}Q273 ${lowerLip + 8} 258 ${lowerLip + 16}Q253 194 187 211L178 249M76 45Q48 104 66 171L76 249" class="art-head"/>
      <path d="M85 102Q130 58 209 78L258 99" class="art-anatomy"/>
      <path d="M249 115Q242 104 231 103Q226 93 198 92Q163 82 135 95" class="art-palate"/>
      <path d="${phase.velum === 'lowered' ? 'M135 95Q118 111 125 135' : 'M135 95Q113 105 89 102'}" class="art-velum"/>
      <path d="M88 105Q77 159 99 220L107 249" class="art-anatomy"/>
      <path d="M246 113L254 115L251 127L246 126Z" class="art-teeth"/>
      <path d="M245 ${lowerTeeth}L252 ${lowerTeeth}L253 ${lowerTeeth + 12}L245 ${lowerTeeth + 13}Z" class="art-teeth"/>
      <path d="${tonguePath(pose)}" class="art-tongue"/>${trajectory}
      <path d="M254 117Q259 122 272 122M272 ${lowerLip}Q257 ${lowerLip + 3} 252 ${phase.contact === 'labiodental' ? 126 : lowerLip + 6}" class="art-lip-section"/>
      ${contact}
      <path d="M103 72L${phase.velum === 'lowered' ? '124 119' : '113 101'}M160 70L176 85M220 78L231 99" class="art-leader"/><text x="88" y="57" class="art-label" text-anchor="middle">软腭</text><text x="152" y="64" class="art-label" text-anchor="middle">上腭</text><text x="226" y="71" class="art-label" text-anchor="middle">齿龈</text>
      <text x="177" y="188" class="art-tongue-label">舌</text>
      <path d="M88 224h29" class="art-glottis ${phase.voiced ? 'art-voiced' : ''}"/>
      ${phase.voiced ? '<path d="M82 218q-5 6 0 12m41 -12q5 6 0 12" class="art-vibration"/>' : ''}
      <text x="139" y="241" class="art-label">${label}</text>
    </g>${airflow(pose, phase, uid, entry)}
  </svg></div></div>`;
}
export function articulationView(symbolId: string, instance: string): string {
  const entry = getArticulation(symbolId), phase = entry.phases[entry.initialPhase];
  return `<figure class="articulation-figure" data-articulation="${entry.symbolId}" data-instance="${instance}" aria-labelledby="${instance}-heading">
    <div class="articulation-heading"><h2 id="${instance}-heading">口形与舌位</h2><span>原创示意</span></div>
    <div class="articulation-drawing">${articulationSvg(entry, phase, phasePose(phase), instance)}</div>
    <div class="articulation-controls"><button class="articulation-play" data-art-play aria-pressed="false" aria-label="播放 /${entry.ipa}/ 的发音动作">▷ 播放动作</button><div class="articulation-steps" role="group" aria-label="/${entry.ipa}/ 动作步骤">${entry.phases.map((p, i) => `<button data-art-phase="${i}" aria-pressed="${i === entry.initialPhase}" aria-label="第 ${i + 1} 步：${p.label}"><span>${i + 1}</span>${p.label}</button>`).join('')}</div></div>
    <figcaption><p class="articulation-movement">${esc(entry.movementCue)}</p><dl class="articulation-cues"><div><dt>唇</dt><dd>${esc(entry.lipCue)}</dd></div><div><dt>舌</dt><dd>${esc(entry.tongueCue)}</dd></div></dl>${entry.variantNote ? `<p class="articulation-variant">${esc(entry.variantNote)}</p>` : ''}
    <details class="articulation-sources"><summary>图示依据</summary><ul>${entry.sourceIds.map(id => {
      const source = pronunciationSources[id as SourceId];
      return `<li><a href="${esc(source.url)}" target="_blank" rel="noreferrer">${esc(source.title)} ↗</a></li>`;
    }).join('')}</ul><p>根据发音原理绘制的示意，不是医学影像。${esc(entry.sourceNotes)}</p></details></figcaption>
  </figure>`;
}
export function bindArticulations(root: HTMLElement): () => void {
  const cleanups: (() => void)[] = [];
  root.querySelectorAll<HTMLElement>('[data-articulation]').forEach(figure => {
    const entry = getArticulation(figure.dataset.articulation!);
    const drawing = figure.querySelector<HTMLElement>('.articulation-drawing')!;
    const play = figure.querySelector<HTMLButtonElement>('[data-art-play]')!;
    const steps = [...figure.querySelectorAll<HTMLButtonElement>('[data-art-phase]')];
    let current = entry.initialPhase, handle = 0, running = false;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const setLabel = () => {
      play.textContent = running ? 'Ⅱ 暂停' : reduced.matches ? '下一步 →' : '▷ 播放动作';
      play.setAttribute('aria-label', `${running ? '暂停' : reduced.matches ? '逐步查看' : '播放'} /${entry.ipa}/ 的发音动作`);
      play.setAttribute('aria-pressed', String(running));
    };
    const stop = () => { cancelAnimationFrame(handle); running = false; delete figure.dataset.animating; setLabel(); };
    const paint = (index: number, pose = phasePose(entry.phases[index])) => {
      current = index; figure.dataset.phase = String(index);
      drawing.innerHTML = articulationSvg(entry, entry.phases[index], pose, figure.dataset.instance!);
      steps.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
    };
    steps.forEach((button, index) => button.onclick = () => { stop(); paint(index); });
    play.onclick = () => {
      if (running) { stop(); paint(current); return; }
      if (reduced.matches) { paint((current + 1) % entry.phases.length); return; }
      running = true; figure.dataset.animating = 'true'; setLabel(); paint(0);
      const started = performance.now(), duration = 350 + 1000 * (entry.phases.length - 1) + 650;
      let lastPaint = -Infinity;
      const tick = (now: number) => {
        if (!figure.isConnected) { stop(); return; }
        if (now - started >= duration) { paint(entry.phases.length - 1); stop(); return; }
        if (now - lastPaint >= 32) {
          const position = Math.max(0, Math.min(entry.phases.length - 1, (now - started - 350) / 1000));
          const left = Math.floor(position), right = Math.min(entry.phases.length - 1, left + 1), fraction = position - left;
          paint(fraction < .5 ? left : right, interpolatePose(phasePose(entry.phases[left]), phasePose(entry.phases[right]), fraction));
          lastPaint = now;
        }
        handle = requestAnimationFrame(tick);
      };
      handle = requestAnimationFrame(tick);
    };
    const motionChange = () => { stop(); paint(current); };
    const hide = () => { if (document.hidden) { stop(); paint(current); } };
    reduced.addEventListener('change', motionChange); document.addEventListener('visibilitychange', hide);
    figure.dataset.phase = String(current); setLabel();
    cleanups.push(() => { stop(); reduced.removeEventListener('change', motionChange); document.removeEventListener('visibilitychange', hide); });
  });
  return () => cleanups.forEach(cleanup => cleanup());
}
