import data from '../content/symbol-library.json' with { type: 'json' };
import audio from '../content/audio.json' with { type: 'json' };
import comparisonData from '../content/comparisons.json' with { type: 'json' };
import sourceData from '../content/pronunciation-sources.json' with { type: 'json' };
export const symbols = data.symbols;
export type SymbolEntry = typeof symbols[number];
export const samples = new Map(audio.assets.map(a => [a.id, a]));
export const groups = [{id:'all',label:'全部',count:44},{id:'monophthong',label:'单元音',count:12},{id:'diphthong',label:'双元音',count:8},{id:'consonant',label:'辅音',count:24}];
export const comparisons = comparisonData.comparisons;
export type Comparison = typeof comparisons[number];
export const pronunciationSources = sourceData.sources;
export type SourceId = keyof typeof pronunciationSources;
export function getComparison(id: string): Comparison { return comparisons.find(c => c.id === id) ?? comparisons[0]; }
export function comparisonSymbols(ids: string[]): SymbolEntry[] {
  return ids.map(id => { const symbol = symbols.find(s => s.id === id); if (!symbol) throw new Error(`Unknown symbol: ${id}`); return symbol; });
}
export function validCustomPair(left: string, right: string): boolean {
  return left !== right && [left, right].every(id => symbols.some(symbol => symbol.id === id));
}

export function filterSymbols(group: string, query: string): SymbolEntry[] {
  const search=query.trim().replaceAll('/','').replaceAll(':','ː').toLowerCase();
  const exact=/^\/.*\/$/.test(query.trim());
  return symbols.filter(s=>(group==='all'||s.group===group)&&(!search||(exact?s.ipa===search:`${s.ipa} ${s.examples.map(e => `${e.word} ${e.gloss}`).join(' ')}`.toLowerCase().includes(search))));
}
export function getSymbol(id: string): SymbolEntry { return symbols.find(s=>s.id===id) ?? symbols[1]; }
