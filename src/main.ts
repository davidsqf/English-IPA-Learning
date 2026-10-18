import './style.css';
import { syncTheme, toggleTheme } from './theme.ts';
import audio from '../content/audio.json';
import { LocalPlayer } from './audio.ts';
import { symbols, groups, samples, comparisons, filterSymbols, getSymbol, getComparison, comparisonSymbols, validCustomPair, pronunciationSources } from './library.ts';
import type { SymbolEntry, SourceId } from './library.ts';

const app = document.querySelector<HTMLDivElement>('#app')!;
const player = new LocalPlayer();
const soundIcon = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m11 5-5 4H3v6h3l5 4V5Zm4 3c2 2 2 6 0 8m3-11c4 4 4 10 0 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
let page: 'symbols' | 'compare' | 'sources' = 'symbols';
let selected = 'vowel-kit';
let preset = 'kit-fleece';
let comparisonMode: 'preset' | 'custom' = 'preset';
let customPair = ['vowel-kit', 'vowel-fleece'];
let filter = 'all';
let query = '';
const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
function markedIpa(transcription: string, target: string) {
  const at = transcription.indexOf(target);
  return at < 0 ? esc(transcription) : `${esc(transcription.slice(0, at))}<mark>${esc(target)}</mark>${esc(transcription.slice(at + target.length))}`;
}
function sourceLinks(ids: readonly string[]) {
  return `<details class="cue-sources"><summary>发音依据</summary><ul>${[...new Set(ids)].map(id => {
    const source = pronunciationSources[id as SourceId];
    return `<li><a href="${esc(source.url)}" target="_blank" rel="noreferrer">${esc(source.title)} ↗</a></li>`;
  }).join('')}</ul></details>`;
}
function listen(symbol: SymbolEntry, id: string) {
  const recording = samples.get(symbol.sampleId);
  return recording ? `<button class="listen" id="${id}" data-play="${recording.id}" aria-pressed="false">${soundIcon}<span>听${recording.type === 'phrase' ? '短语' : '例词'} · <span lang="en">${esc(recording.transcript)}</span></span></button>` : '';
}
function shell(content: string) {
  return `<div class="layout"><aside class="sidebar"><a class="brand" href="#symbols" aria-label="IPA 入门首页"><span class="brand-mark">ɪ</span><span>IPA<span class="brand-sub">音标入门</span></span></a><nav aria-label="主导航">${([['symbols', '音标探索', '01'], ['compare', '相似音对比', '02']] as const).map(([id, label, num]) => `<button class="nav-link ${page === id ? 'active' : ''}" data-nav="${id}" ${page === id ? 'aria-current="page"' : ''}><span class="nav-num">${num}</span>${label}${page === id ? '<span class="nav-dot"></span>' : ''}</button>`).join('')}</nav><div class="sidebar-bottom"><button class="source-link" data-nav="sources">来源与说明 ↗</button></div></aside><div class="workspace"><header class="topbar"><span>英语发音 <span class="breadcrumb">/</span> ${page === 'symbols' ? '音标探索' : page === 'compare' ? '相似音对比' : '来源与说明'}</span><div class="topbar-actions"><span class="accent-tag"><span></span>英式参考发音</span><button id="theme-toggle" class="theme-toggle" data-theme-toggle aria-label="切换深色模式" aria-pressed="false"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 14a8 8 0 0 1-10-10A8 8 0 1 0 20 14Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg></button></div></header><main id="main" tabindex="-1">${content}</main><footer class="footer"><span>IPA 音标入门</span><button data-nav="sources">录音来源 ↗</button></footer></div></div><div class="audio-status" id="audio-status" role="status" aria-live="polite"></div>`;
}
function explorer() {
  const symbol = getSymbol(selected);
  const shown = filterSymbols(filter, query);
  return `<h1 id="view-title" class="compact-title" tabindex="-1">音标</h1>
    <section class="selected-sound" aria-label="当前音标">
      <div class="selected-symbol"><span class="tiny-label">${groups.find(g => g.id === symbol.group)?.label}</span><div class="big-ipa" lang="en">/${symbol.ipa}/</div></div>
      <div class="selected-description"><p class="articulation">${esc(symbol.cue)}</p>
        <div class="examples-heading"><h2>例词</h2>${listen(symbol, 'selected-play')}</div>
        <ul class="example-words" aria-label="六个例词">${symbol.examples.map(example => `<li class="example-word"><div><a href="${esc(example.referenceUrl)}" target="_blank" rel="noreferrer"><span lang="en">${esc(example.word)}</span> <span aria-hidden="true">↗</span><span class="sr-only">词典发音（新窗口）</span></a><span class="example-gloss">${esc(example.gloss)}</span></div><span class="word-ipa" lang="en">/${markedIpa(example.ipa, symbol.ipa)}/</span></li>`).join('')}</ul>
        ${sourceLinks(symbol.cueSourceIds)}
      </div>
    </section>
    <div class="library-toolbar"><div class="filters" aria-label="音标分类">${groups.map(group => `<button id="filter-${group.id}" data-filter="${group.id}" aria-pressed="${filter === group.id}">${group.label}<span>${group.count}</span></button>`).join('')}</div><label class="search-label"><span class="sr-only">搜索音标、英文例词或中文词义</span><input id="search" type="search" enterkeyhint="search" autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="搜索音标或例词…" value="${esc(query)}" /></label></div>
    <div class="sound-grid" aria-label="选择音标">${shown.map(s => `<button class="sound-tile ${s.id === selected ? 'selected' : ''}" id="tile-${s.id}" data-symbol="${s.id}" aria-pressed="${s.id === selected}"><span class="tile-ipa" lang="en">${s.ipa}</span><small lang="en">${s.word}</small></button>`).join('')}</div><p class="result-count" role="status">${shown.length ? '' : '没有找到匹配的音标或例词。'}</p>`;
}
function soundPanel(symbol: SymbolEntry, index: number) {
  return `<section class="sound-panel" aria-label="比较音标 /${symbol.ipa}/"><div class="sound-top"><span class="tiny-label">${symbol.group === 'consonant' ? '辅音' : '元音'}</span><button class="symbol-link" data-open-symbol="${symbol.id}" aria-label="查看 /${symbol.ipa}/ 的六个例词">查看例词 ↗</button></div><div class="big-ipa" lang="en">/${symbol.ipa}/</div><div class="detail-word"><span class="word" lang="en">${symbol.word}</span><span>${symbol.gloss}</span><span class="word-ipa" lang="en">/${markedIpa(symbol.wordIpa, symbol.ipa)}/</span></div>${listen(symbol, `compare-play-${index}`)}<p class="sound-cue">${esc(symbol.cue)}</p></section>`;
}
function customSelect(index: number) {
  const other = customPair[1 - index];
  return `<label class="symbol-select">${index === 0 ? '第一个音标' : '第二个音标'}<select id="custom-${index}" data-custom="${index}">${groups.slice(1).map(group => `<optgroup label="${group.label}">${symbols.filter(s => s.group === group.id).map(s => `<option value="${s.id}" ${customPair[index] === s.id ? 'selected' : ''} ${other === s.id ? 'disabled' : ''}>/${s.ipa}/ · ${s.word}</option>`).join('')}</optgroup>`).join('')}</select></label>`;
}
function activeSymbols() { return comparisonSymbols(comparisonMode === 'custom' ? customPair : getComparison(preset).symbolIds); }
function comparison() {
  const chosen = activeSymbols();
  const current = getComparison(preset);
  const ids = comparisonMode === 'custom' ? chosen.flatMap(s => s.cueSourceIds) : current.cueSourceIds;
  return `<h1 id="view-title" class="compact-title" tabindex="-1">相似音对比</h1>
    <div class="comparison-modes" aria-label="对比方式"><button id="mode-preset" data-mode="preset" aria-pressed="${comparisonMode === 'preset'}">推荐组合</button><button id="mode-custom" data-mode="custom" aria-pressed="${comparisonMode === 'custom'}">自选两个音标</button></div>
    ${comparisonMode === 'preset' ? `<label class="preset-select">选择组合<select id="comparison-select">${comparisons.map(c => `<option value="${c.id}" ${preset === c.id ? 'selected' : ''}>${c.symbolIds.map(id => `/${getSymbol(id).ipa}/`).join(' ↔ ')}</option>`).join('')}</select></label>` : `<div class="custom-selectors">${customSelect(0)}${customSelect(1)}</div>`}
    <div class="comparison-toolbar"><button class="primary" id="play-comparison" aria-pressed="false">${soundIcon}依次播放${chosen.length === 3 ? '三个' : '两个'}例词</button></div>
    <div class="sound-pair ${chosen.length === 3 ? 'triple' : ''}" data-comparison-size="${chosen.length}">${chosen.map(soundPanel).join('')}</div>
    ${comparisonMode === 'preset' ? `<div class="tip"><h2>${esc(current.title)}</h2><p>${esc(current.cue)}</p></div>` : ''}
    ${sourceLinks(ids)}`;
}
function sources() {
  return `<h1 id="view-title" class="compact-title" tabindex="-1">来源与说明</h1><section class="prose"><h2>发音提示</h2><p>中文提示依据下列资料整理，采用英式学习词典注音；口音及词典写法可能有变体。每个音标下可查看对应依据。</p><ul>${Object.values(pronunciationSources).map(source => `<li><a href="${esc(source.url)}" target="_blank" rel="noreferrer">${esc(source.title)} ↗</a></li>`).join('')}</ul><h2>例词与录音</h2><p>每个音标有六个例词，点击词语可查词典发音。页面播放按钮使用已收录的真人词语或短语录音，均按原速播放。蓝色标出目标音。</p><details><summary>录音来源与署名（${audio.assets.length} 项）</summary><ul>${audio.assets.map(a => `<li><a href="${esc(a.sourcePageUrl)}" target="_blank" rel="noreferrer"><span lang="en">${esc(a.transcript)}</span> ↗</a> · ${esc(a.creator)} · <a href="${esc(a.licenseUrl)}" target="_blank" rel="noreferrer">${esc(a.licenseId)}</a></li>`).join('')}</ul><p>保留原 MP3，或由 Ogg 转为 MP3；未裁剪、合成或调整音高。录音作者不为本站背书。</p></details></section>`;
}
function render(focus = false) {
  const focused = (document.activeElement as HTMLElement)?.id;
  const caret = document.activeElement instanceof HTMLInputElement ? document.activeElement.selectionStart : null;
  player.stop();
  app.innerHTML = shell(page === 'symbols' ? explorer() : page === 'compare' ? comparison() : sources());
  bind();
  if (focus) { document.querySelector<HTMLElement>('#view-title')?.focus(); window.scrollTo({ top: 0, behavior: 'instant' }); }
  else if (focused) {
    const element = document.getElementById(focused); element?.focus();
    if (element instanceof HTMLInputElement && element.type === 'search') element.setSelectionRange(caret, caret);
  }
}
function openSymbol(id: string) {
  selected = id; page = 'symbols'; render(true);
}
function bind() {
  syncTheme();
  app.querySelector<HTMLButtonElement>('[data-theme-toggle]')!.onclick = toggleTheme;
  app.querySelector('.brand')?.addEventListener('click', event => { event.preventDefault(); page = 'symbols'; render(true); });
  app.querySelectorAll<HTMLButtonElement>('[data-nav]').forEach(button => button.onclick = () => { page = button.dataset.nav as typeof page; render(true); });
  app.querySelectorAll<HTMLButtonElement>('[data-play]').forEach(button => button.onclick = () => { void player.play(button.dataset.play!, button); });
  app.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach(button => button.onclick = () => { filter = button.dataset.filter!; render(); });
  const search = app.querySelector<HTMLInputElement>('#search');
  let composing = false;
  search?.addEventListener('compositionstart', () => { composing = true; });
  search?.addEventListener('compositionend', () => { composing = false; query = search.value; render(); });
  search?.addEventListener('input', event => {
    if (composing || (event as InputEvent).isComposing) return;
    query = search!.value; render();
  });
  app.querySelectorAll<HTMLButtonElement>('[data-symbol]').forEach(button => button.onclick = () => {
    selected = button.dataset.symbol!; render();
    if (window.innerWidth < 761) document.querySelector('.selected-sound')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  });
  app.querySelectorAll<HTMLButtonElement>('[data-open-symbol]').forEach(button => button.onclick = () => openSymbol(button.dataset.openSymbol!));
  app.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach(button => button.onclick = () => { comparisonMode = button.dataset.mode as typeof comparisonMode; render(); });
  app.querySelector<HTMLSelectElement>('#comparison-select')?.addEventListener('change', event => { preset = (event.target as HTMLSelectElement).value; render(); });
  app.querySelectorAll<HTMLSelectElement>('[data-custom]').forEach(select => select.onchange = () => {
    const index = Number(select.dataset.custom); const next = [...customPair]; next[index] = select.value;
    if (validCustomPair(next[0], next[1])) customPair = next;
    render();
  });
  app.querySelector<HTMLButtonElement>('#play-comparison')?.addEventListener('click', event => { player.playSequence(activeSymbols().map(symbol => symbol.sampleId), event.currentTarget as HTMLButtonElement); });
}
let statusTimer: ReturnType<typeof setTimeout>;
player.onStatus = message => {
  const element = document.getElementById('audio-status'); if (!element) return;
  clearTimeout(statusTimer); element.textContent = message; element.classList.add('visible');
  if (message.startsWith('播放完毕')) statusTimer = setTimeout(() => element.classList.remove('visible'), 3500);
};
window.addEventListener('pagehide', () => player.stop());
render();
