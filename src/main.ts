import './style.css';
import { syncTheme, toggleTheme } from './theme.ts';
import audio from '../content/audio.json';
import { LocalPlayer } from './audio.ts';
import { symbols, groups, samples, comparisons, filterSymbols, getSymbol } from './library.ts';
import type { SymbolEntry } from './library.ts';

const app=document.querySelector<HTMLDivElement>('#app')!;
const player=new LocalPlayer();
const icons={sound:'<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m11 5-5 4H3v6h3l5 4V5Zm4 3c2 2 2 6 0 8m3-11c4 4 4 10 0 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',arrow:'<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>'};
let page:'symbols'|'compare'|'sources'='symbols';
let selected='vowel-kit';
let pair='kit-fleece';
let filter='all';
let query='';
const esc=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
function markedWord(s:SymbolEntry){
  const at=s.wordIpa.indexOf(s.ipa);
  return at<0?esc(s.wordIpa):`${esc(s.wordIpa.slice(0,at))}<mark>${esc(s.ipa)}</mark>${esc(s.wordIpa.slice(at+s.ipa.length))}`;
}
function listen(s:SymbolEntry,id:string){
  const a=s.sampleId?samples.get(s.sampleId):null;
  return a?`<button class="listen" id="${id}" data-play="${a.id}" aria-pressed="false">${icons.sound}<span>听${a.type==='phrase'?'短语':'例词'} · <span lang="en">${esc(a.transcript)}</span></span></button>`:'';
}
function speed(){return `<div class="speed-control" aria-label="播放速度"><span>播放速度</span>${[1,0.8].map(r=>`<button id="speed-${r}" data-rate="${r}" aria-pressed="${player.rate===r}">${r===1?'原速':'0.8×'}</button>`).join('')}</div>`;}
function shell(content:string){return `<div class="layout"><aside class="sidebar"><a class="brand" href="#symbols" aria-label="IPA 入门首页"><span class="brand-mark">ɪ</span><span>IPA<span class="brand-sub">音标入门</span></span></a><nav aria-label="主导航">${([['symbols','音标探索','01'],['compare','相似音对比','02']] as const).map(([id,label,num])=>`<button class="nav-link ${page===id?'active':''}" data-nav="${id}" ${page===id?'aria-current="page"':''}><span class="nav-num">${num}</span>${label}${page===id?'<span class="nav-dot"></span>':''}</button>`).join('')}</nav><div class="sidebar-bottom"><button class="source-link" data-nav="sources">来源与说明 ↗</button></div></aside><div class="workspace"><header class="topbar"><span>英语发音 <span class="breadcrumb">/</span> ${page==='symbols'?'音标探索':page==='compare'?'相似音对比':'来源与说明'}</span><div class="topbar-actions"><span class="accent-tag"><span></span>英式参考发音</span><button id="theme-toggle" class="theme-toggle" data-theme-toggle aria-label="切换深色模式" aria-pressed="false"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 14a8 8 0 0 1-10-10A8 8 0 1 0 20 14Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg></button></div></header><main id="main" tabindex="-1">${content}</main><footer class="footer"><span>IPA 音标入门</span><button data-nav="sources">录音来源 ↗</button></footer></div></div><div class="audio-status" id="audio-status" role="status" aria-live="polite"></div>`;}
function explorer(){
 const s=getSymbol(selected);const a=s.sampleId?samples.get(s.sampleId):null;const shown=filterSymbols(filter,query);
 return `<h1 id="view-title" class="compact-title" tabindex="-1">音标</h1>
 <section class="selected-sound" aria-label="当前音标"><div class="selected-symbol"><span class="tiny-label">${groups.find(g=>g.id===s.group)?.label}</span><div class="big-ipa" lang="en">/${s.ipa}/</div></div><div class="selected-description"><div class="detail-word"><h2 lang="en">${s.word}</h2><span>${s.gloss}</span><span class="word-ipa" lang="en">/${markedWord(s)}/</span></div><p class="articulation">${s.cue}</p><div class="sample-controls">${listen(s,'selected-play')}${speed()}</div><p class="recording-note">${a?`${a.type==='phrase'?'短语录音':'例词录音'} · 蓝色为目标音`:'这个传统音标的实际读法有变体，请结合词典说明学习。'}</p></div></section>
 <div class="library-toolbar"><div class="filters" aria-label="音标分类">${groups.map(g=>`<button id="filter-${g.id}" data-filter="${g.id}" aria-pressed="${filter===g.id}">${g.label}<span>${g.count}</span></button>`).join('')}</div><label class="search-label"><span class="sr-only">搜索音标、英文例词或中文词义</span><input id="search" type="search" placeholder="搜索音标或例词…" value="${esc(query)}" /></label></div>
 <div class="sound-grid" aria-label="选择音标">${shown.map(p=>`<button class="sound-tile ${p.id===selected?'selected':''}" id="tile-${p.id}" data-symbol="${p.id}" aria-pressed="${p.id===selected}"><span class="tile-ipa" lang="en">${p.ipa}</span><small lang="en">${p.word}</small></button>`).join('')}</div><p class="result-count" role="status">${shown.length?'':'没有找到匹配的音标或例词。'}</p>
`;
}
function pairPanel(s:SymbolEntry,side:string){return `<section class="sound-panel ${side}"><div class="sound-top"><span class="tiny-label">${s.group==='consonant'?'辅音':'元音'}</span><button class="symbol-link" data-open-symbol="${s.id}" aria-label="查看 /${s.ipa}/ 的发音说明">查看音标 ↗</button></div><div class="big-ipa" lang="en">/${s.ipa}/</div><div class="detail-word"><span class="word" lang="en">${s.word}</span><span>${s.gloss}</span><span class="word-ipa" lang="en">/${markedWord(s)}/</span></div>${listen(s,`pair-${side}`)}<p class="sound-cue">${s.cue}</p></section>`;}
function comparison(){const c=comparisons.find(c=>c.id===pair)!;const left=getSymbol(c.left),right=getSymbol(c.right);return `<h1 id="view-title" class="compact-title" tabindex="-1">相似音对比</h1><div class="pair-selector" aria-label="选择一组相似音">${comparisons.map(c=>`<button id="pair-${c.id}" data-pair="${c.id}" aria-pressed="${pair===c.id}" lang="en">/${getSymbol(c.left).ipa}/ <span>↔</span> /${getSymbol(c.right).ipa}/</button>`).join('')}</div><label class="mobile-pair-selector">选择一组相似音<select id="pair-select">${comparisons.map(c=>`<option value="${c.id}" ${pair===c.id?'selected':''}>/${getSymbol(c.left).ipa}/ ↔ /${getSymbol(c.right).ipa}/</option>`).join('')}</select></label><div class="comparison-toolbar"><button class="primary" id="play-pair" >${icons.sound} 依次播放两个例词</button>${speed()}</div><div class="sound-pair">${pairPanel(left,'left')}${pairPanel(right,'right')}</div><div class="tip"><h2>${c.title}</h2><p>${c.cue}</p><p class="subtle">例词中可能还有其他发音差别。</p></div>`;}
function sources(){return `<h1 id="view-title" class="compact-title" tabindex="-1">来源与说明</h1><section class="prose"><h2>录音</h2><p>录音为完整词或短语，蓝色标出目标音。英式口音和词典注音可能存在变体。</p><details><summary>录音来源与署名（${audio.assets.length} 项）</summary><ul>${audio.assets.map(a=>`<li><a href="${esc(a.sourcePageUrl)}" target="_blank" rel="noreferrer"><span lang="en">${esc(a.transcript)}</span> ↗</a> · ${esc(a.creator)} · <a href="${esc(a.licenseUrl)}" target="_blank" rel="noreferrer">${esc(a.licenseId)}</a></li>`).join('')}</ul><p>保留原 MP3，或由 Ogg 转为 MP3；未裁剪、合成或调整音高。录音作者不为本站背书。</p></details><h2>参考资料</h2><ul><li><a href="https://www.internationalphoneticassociation.org/node/1061" target="_blank" rel="noreferrer">国际语音协会 · IPA 音标表 ↗</a></li><li><a href="https://www.oxfordlearnersdictionaries.com/about/english/pronunciation_english" target="_blank" rel="noreferrer">Oxford · 英式词典发音符号 ↗</a></li></ul></section>`;}
function render(focus=false){
 const focused=(document.activeElement as HTMLElement)?.id;
 const caret=document.activeElement instanceof HTMLInputElement?document.activeElement.selectionStart:null;
 player.stop();app.innerHTML=shell(page==='symbols'?explorer():page==='compare'?comparison():sources());bind();
 if(focus){document.querySelector<HTMLElement>('#view-title')?.focus();window.scrollTo({top:0,behavior:'instant'});}
 else if(focused){const el=document.getElementById(focused);el?.focus();if(el instanceof HTMLInputElement&&el.type==='search')el.setSelectionRange(caret,caret);}
}
function bind(){
 syncTheme();
 app.querySelector<HTMLButtonElement>('[data-theme-toggle]')!.onclick=toggleTheme;
 app.querySelector('.brand')?.addEventListener('click',e=>{e.preventDefault();page='symbols';render(true);});
 app.querySelectorAll<HTMLButtonElement>('[data-nav]').forEach(b=>b.onclick=()=>{page=b.dataset.nav as typeof page;render(true);});
 app.querySelectorAll<HTMLButtonElement>('[data-play]').forEach(b=>b.onclick=()=>player.play(b.dataset.play!,b));
 app.querySelectorAll<HTMLButtonElement>('[data-rate]').forEach(b=>b.onclick=()=>{player.setRate(Number(b.dataset.rate));app.querySelectorAll('[data-rate]').forEach(el=>el.setAttribute('aria-pressed',String((el as HTMLElement).dataset.rate===b.dataset.rate)));});
 app.querySelectorAll<HTMLButtonElement>('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter!;render();});
 app.querySelector<HTMLInputElement>('#search')?.addEventListener('input',e=>{query=(e.target as HTMLInputElement).value;render();});
 app.querySelectorAll<HTMLButtonElement>('[data-symbol]').forEach(b=>b.onclick=()=>{selected=b.dataset.symbol!;render();if(window.innerWidth<761)document.querySelector('.selected-sound')?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});});
 app.querySelectorAll<HTMLButtonElement>('[data-pair]').forEach(b=>b.onclick=()=>{pair=b.dataset.pair!;render();});
 app.querySelectorAll<HTMLButtonElement>('[data-open-symbol]').forEach(b=>b.onclick=()=>{selected=b.dataset.openSymbol!;page='symbols';render(true);});
 app.querySelector<HTMLSelectElement>('#pair-select')?.addEventListener('change',e=>{pair=(e.target as HTMLSelectElement).value;render();});
 app.querySelector('#play-pair')?.addEventListener('click',e=>{const c=comparisons.find(c=>c.id===pair)!;const left=getSymbol(c.left),right=getSymbol(c.right);if(!left.sampleId||!right.sampleId)return;const b=e.currentTarget as HTMLButtonElement;player.play(left.sampleId,b,()=>player.play(right.sampleId!,b));});
}
let statusTimer:ReturnType<typeof setTimeout>;
player.onStatus=message=>{const el=document.getElementById('audio-status');if(!el)return;clearTimeout(statusTimer);el.textContent=message;el.classList.add('visible');if(message.startsWith('播放完毕'))statusTimer=setTimeout(()=>el.classList.remove('visible'),3500);};
window.addEventListener('pagehide',()=>player.stop());
render();
