import data from '../content/mouth-photos.json' with { type: 'json' };

export const mouthPhotos = data.entries;
export const mouthPhotoSource = data.source;
const esc = (text: string) => text.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
export function getMouthPhoto(id: string) {
  const photo = mouthPhotos.find(entry => entry.symbolId === id);
  if (!photo) throw new Error(`Missing front mouth photo: ${id}`);
  return photo;
}
export function mouthPhotoView(id: string, uid: string): string {
  const photo = getMouthPhoto(id);
  const url = `${import.meta.env?.BASE_URL ?? './'}${photo.path}`;
  return `<figure class="mouth-photo" data-mouth-photo="${esc(id)}" aria-labelledby="${uid}-photo-title">
    <h2 id="${uid}-photo-title">正面口形</h2>
    <a class="mouth-photo-window" href="${url}" target="_blank" rel="noreferrer" aria-label="查看 /${esc(photo.ipa)}/ 的完整正面照片"><img src="${url}" width="${photo.width}" height="${photo.height}" alt="英国说话者读 ${esc(photo.word)} 时 /${esc(photo.ipa)}/ 的正面口形" loading="lazy" decoding="async" /></a>
    <figcaption>词中口形 · UCL MaFI</figcaption>
    <details class="mouth-photo-source"><summary>图片来源</summary><p><a href="${esc(data.source.url)}" target="_blank" rel="noreferrer">${esc(data.source.title)} ↗</a> · ${esc(data.source.creator)} · <a href="${esc(data.source.licenseUrl)}" target="_blank" rel="noreferrer">${esc(data.source.licenseId)}</a></p><p><span lang="en">${esc(photo.word)}</span> · ${photo.timeSeconds.toFixed(2)} 秒。由原始英国英语录像提取静帧，未修饰口形；页面放大口部，点击可看完整照片。照片不能显示声带振动或口内全部舌位，完整发音见下方视频。</p></details>
  </figure>`;
}
