import data from '../content/articulation.json' with { type: 'json' };

export const articulations = data.entries;
export type Articulation = typeof articulations[number];
const esc = (text: string) => text.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
export function getArticulation(id: string): Articulation {
  const entry = articulations.find(entry => entry.symbolId === id);
  if (!entry) throw new Error(`Missing articulation: ${id}`);
  return entry;
}
export function articulationView(id: string, uid: string): string {
  const entry = getArticulation(id);
  const source = data.sources[entry.sourceId as keyof typeof data.sources];
  return `<figure class="articulation-figure" data-articulation="${esc(id)}">
    <div class="articulation-heading"><h2 id="${uid}-title">舌位与口形</h2><span>${esc(entry.modality)}</span></div>
    <video controls playsinline preload="none" poster="${esc(entry.poster)}" aria-labelledby="${uid}-title ${uid}-caption" aria-describedby="${uid}-context" disablepictureinpicture>
      <source src="${esc(entry.path)}" type="video/mp4">请使用支持视频的浏览器。</video>
    <figcaption id="${uid}-caption">${esc(entry.label)}</figcaption>
    <p class="articulation-context" id="${uid}-context">${esc(entry.context)}${entry.variantNote ? ` ${esc(entry.variantNote)}` : ''}</p>
    <p class="articulation-error" role="status" hidden>视频暂不可用。<a href="${esc(entry.sourcePageUrl)}" target="_blank" rel="noreferrer">打开原始来源 ↗</a></p>
    <details class="articulation-sources"><summary>视频来源与署名</summary>
      <p><a href="${esc(entry.sourcePageUrl)}" target="_blank" rel="noreferrer">${esc(source.title)} · 原始视频 ↗</a><br>${esc(source.creators)} · ${esc(entry.institution)} · ${esc(entry.speaker)}</p>
      <p><a href="${esc(source.licenseUrl)}" target="_blank" rel="noreferrer">${esc(source.licenseId)}</a> · 完整原片与原始预览图，未剪辑或改绘。仅限非商业使用。</p>
    </details></figure>`;
}
export function pauseArticulations(root: ParentNode): void {
  root.querySelectorAll<HTMLVideoElement>('video').forEach(video => video.pause());
}
export function bindArticulations(root: ParentNode, onPlay: () => void = () => {}): () => void {
  const videos = [...root.querySelectorAll<HTMLVideoElement>('[data-articulation] video')];
  const cleanups: (() => void)[] = [];
  for (const video of videos) {
    const status = video.closest('figure')!.querySelector<HTMLParagraphElement>('.articulation-error')!;
    const start = () => {
      onPlay();
      videos.forEach(other => { if (other !== video) other.pause(); });
      status.hidden = true;
    };
    const failure = () => { status.hidden = false; };
    video.addEventListener('play', start); video.addEventListener('error', failure);
    // Source-element errors do not bubble to the video in every browser.
    const source = video.querySelector('source')!;
    source.addEventListener('error', failure);
    cleanups.push(() => {
      video.pause(); video.removeEventListener('play', start); video.removeEventListener('error', failure); source.removeEventListener('error', failure);
      video.removeAttribute('src'); source.removeAttribute('src'); video.load();
    });
  }
  const hide = () => { if (document.hidden) videos.forEach(video => video.pause()); };
  document.addEventListener('visibilitychange', hide);
  return () => { cleanups.forEach(cleanup => cleanup()); document.removeEventListener('visibilitychange', hide); };
}
