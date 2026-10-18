import data from '../content/articulation.json' with { type: 'json' };
import { loadYouTube, createTeachingPlayer } from './teaching-player.ts';
import type { TeachingPlayer } from './teaching-player.ts';

export const articulations = data.entries;
export const articulationSources = data.sources;
export type Articulation = typeof articulations[number];
const esc = (text: string) => text.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
export function getArticulation(id: string): Articulation {
  const entry = articulations.find(entry => entry.symbolId === id);
  if (!entry) throw new Error(`Missing articulation: ${id}`);
  return entry;
}
const time = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
export function lessonBody(entry: Articulation, index: number, uid: string): string {
  const lesson = entry.lessons[index];
  const source = data.sources[lesson.sourceId as keyof typeof data.sources];
  const url = `https://www.youtube.com/watch?v=${source.videoId}&t=${lesson.startSeconds}s`;
  return `<div class="teaching-stage" data-stage>
      <button class="lesson-launch" data-load aria-label="播放 /${esc(entry.ipa)}/ 的${esc(lesson.label)}"><span aria-hidden="true">▶</span><span>播放${esc(lesson.label)}</span><small>YouTube · 需联网</small></button>
    </div>
    <figcaption id="${uid}-caption">${esc(source.creator)} · ${esc(lesson.label)}</figcaption>
    ${entry.variantNote ? `<p class="articulation-context">${esc(entry.variantNote)}</p>` : ''}
    <div class="teaching-actions"><button class="lesson-replay" data-replay hidden aria-label="重播 /${esc(entry.ipa)}/ 的本节讲解">重播本节</button><a href="${url}" target="_blank" rel="noreferrer">在 YouTube 观看 ↗</a></div>
    <p class="lesson-status" role="status" hidden></p>
    <details class="articulation-sources"><summary>视频来源</summary><p><a href="${esc(source.url)}" target="_blank" rel="noreferrer">${esc(source.title)} ↗</a><br>${esc(source.creator)} · ${time(lesson.startSeconds)}–${time(lesson.endSeconds)}</p><p>通过原作者的 YouTube 播放器观看，未下载或修改视频。可全屏观看；字幕以原视频为准。</p></details>`;
}
export function articulationView(id: string, uid: string): string {
  const entry = getArticulation(id);
  return `<figure class="articulation-figure" data-articulation="${esc(id)}" data-uid="${uid}" data-lesson-state="idle">
    <div class="articulation-heading"><h2 id="${uid}-title">真人发音讲解</h2></div>
    ${entry.lessons.length > 1 ? `<div class="lesson-modes" aria-label="视频内容">${entry.lessons.map((lesson,index)=>`<button data-lesson-mode="${index}" aria-pressed="${index === 0}" aria-controls="${uid}-content">${esc(lesson.label)}</button>`).join('')}</div>` : ''}
    <div id="${uid}-content" data-lesson-content>${lessonBody(entry,0,uid)}</div></figure>`;
}
interface Controller { figure: HTMLElement; pause: () => void; dispose: () => void }
const controllers = new Set<Controller>();
export function pauseArticulations(root: ParentNode & Node): void {
  controllers.forEach(controller => { if (root.contains(controller.figure)) controller.pause(); });
}
export function bindArticulations(root: ParentNode & Node, onPlay: () => void = () => {}): () => void {
  const mounted: Controller[] = [];
  root.querySelectorAll<HTMLElement>('[data-articulation]').forEach(figure => {
    const entry = getArticulation(figure.dataset.articulation!), uid = figure.dataset.uid!;
    const content = figure.querySelector<HTMLElement>('[data-lesson-content]')!;
    let index = 0, epoch = 0, disposed = false, loading = false;
    let player: TeachingPlayer | undefined;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const report = (message: string) => {
      const status = content.querySelector<HTMLElement>('.lesson-status')!;
      status.textContent = message; status.hidden = !message;
    };
    const paint = () => { content.innerHTML = lessonBody(entry,index,uid); figure.dataset.lessonState = 'idle'; figure.removeAttribute('aria-busy'); };
    const reset = () => { epoch++; clearTimeout(timeout); loading = false; player?.destroy(); player = undefined; };
    const pause = () => {
      if (loading) { reset(); paint(); }
      else player?.pauseVideo();
    };
    const takePlayback = () => {
      controllers.forEach(other => { if (other.figure !== figure) other.pause(); });
      onPlay();
    };
    const start = async () => {
      takePlayback();
      const lesson = entry.lessons[index];
      const source = data.sources[lesson.sourceId as keyof typeof data.sources];
      const range = { videoId: source.videoId, startSeconds: lesson.startSeconds, endSeconds: lesson.endSeconds };
      if (player && !loading) { report(''); player.loadVideoById(range); return; }
      reset(); const request = epoch; loading = true;
      figure.dataset.lessonState = 'loading'; figure.setAttribute('aria-busy','true');
      const launch = content.querySelector<HTMLButtonElement>('[data-load]')!;
      launch.disabled = true; launch.querySelector('span:last-of-type')!.textContent = '正在载入…';
      const valid = () => !disposed && request === epoch && figure.isConnected;
      const fail = () => { if (valid()) { reset(); paint(); figure.dataset.lessonState = 'error'; report('视频暂不可用，可重试或在 YouTube 观看。'); } };
      try {
        const api = await loadYouTube();
        if (!valid()) return;
        const slot = content.querySelector<HTMLElement>('[data-stage]')!;
        const playerId = `${uid}-youtube-${request}`;
        slot.innerHTML = `<div id="${playerId}"></div>`;
        timeout = setTimeout(fail,18000);
        player = createTeachingPlayer(api,playerId,range,{
          ready: readyPlayer => {
            if (!valid()) { readyPlayer.destroy(); return; }
            clearTimeout(timeout); loading = false; figure.removeAttribute('aria-busy');
            const iframe = readyPlayer.getIframe();
            iframe.title = `/${entry.ipa}/ · ${source.creator} · ${lesson.label}`;
            iframe.referrerPolicy = 'strict-origin-when-cross-origin';
            content.querySelector<HTMLButtonElement>('[data-replay]')!.hidden = false;
            figure.dataset.lessonState = 'ready'; report('');
          },
          state: state => {
            if (!valid()) return;
            if (state === 1) {
              if (document.hidden) { player?.pauseVideo(); return; }
              takePlayback(); figure.dataset.lessonState = 'playing'; report('');
            } else if (state === 2) figure.dataset.lessonState = 'paused';
            else if (state === 0) figure.dataset.lessonState = 'ended';
          },
          error: () => fail(),
          blocked: () => { if (valid()) report('请点击视频中的播放键。'); },
        });
      } catch { fail(); }
    };
    const click = (event: Event) => {
      const button = (event.target as Element).closest<HTMLButtonElement>('button');
      if (!button || !figure.contains(button)) return;
      if (button.hasAttribute('data-load') || button.hasAttribute('data-replay')) void start();
      else if (button.dataset.lessonMode !== undefined) {
        const next = Number(button.dataset.lessonMode);
        if (!Number.isInteger(next) || !entry.lessons[next] || next === index) return;
        reset(); index = next; paint();
        figure.querySelectorAll<HTMLButtonElement>('[data-lesson-mode]').forEach(mode => mode.setAttribute('aria-pressed',String(Number(mode.dataset.lessonMode) === index)));
      }
    };
    figure.addEventListener('click',click);
    const controller = { figure, pause, dispose: () => { disposed = true; reset(); figure.removeEventListener('click',click); controllers.delete(controller); } };
    controllers.add(controller); mounted.push(controller);
  });
  const hide = () => { if (document.hidden) mounted.forEach(controller=>controller.pause()); };
  document.addEventListener('visibilitychange',hide);
  return () => { mounted.forEach(controller=>controller.dispose()); document.removeEventListener('visibilitychange',hide); };
}
