import data from '../content/symbol-library.json' with { type: 'json' };
import audio from '../content/audio.json' with { type: 'json' };
export const symbols = data.symbols;
export type SymbolEntry = typeof symbols[number];
export const samples = new Map(audio.assets.map(a => [a.id, a]));
export const groups = [{id:'all',label:'全部',count:44},{id:'monophthong',label:'单元音',count:12},{id:'diphthong',label:'双元音',count:8},{id:'consonant',label:'辅音',count:24}];
export const comparisons = [
  {id:'kit-fleece',left:'vowel-kit',right:'vowel-fleece',title:'放松与较高的舌位',cue:'不只是「短」和「长」。/ɪ/ 的舌位比 /iː/ 略低，嘴部较放松。先留意音色，再留意时长。'},
  {id:'foot-goose',left:'vowel-foot',right:'vowel-goose',title:'圆唇元音，也有不同',cue:'/ʊ/ 比较放松；/uː/ 的舌位通常更高。不要只把同一个声音拉长。'},
  {id:'dress-trap',left:'vowel-dress',right:'vowel-trap',title:'嘴张开多少？',cue:'从 /e/ 到 /æ/，嘴张得更开、舌前部更低。这里用不同例词展示目标音，不是整词的最小对立。'},
  {id:'trap-strut',left:'vowel-trap',right:'vowel-strut',title:'靠前，还是居中？',cue:'/æ/ 的舌位偏前，/ʌ/ 更居中。比较 cat 与 cup 中着色的目标元音。'},
  {id:'lot-thought',left:'vowel-lot',right:'vowel-thought',title:'后元音的音色差别',cue:'留意 /ɒ/ 和 /ɔː/ 的开口与圆唇程度。例词不同，请集中听目标元音。'},
  {id:'s-sh',left:'consonant-s',right:'consonant-sh',title:'气流经过的位置',cue:'/s/ 的舌位更靠前；/ʃ/ 在齿龈后方，双唇可稍圆。不要把它们换成汉语拼音。'},
  {id:'theta-eth',left:'consonant-theta',right:'consonant-eth',title:'相近部位，不同清浊',cue:'两者都让气流通过齿间附近。/ð/ 通常有声带振动；/θ/ 通常没有。留意 tooth 词尾和 there 词首。'},
  {id:'l-r',left:'consonant-l',right:'consonant-r',title:'舌尖的接触不同',cue:'/l/ 的舌尖接触上齿龈；英语 /r/ 通常不这样接触，也不是颤音。'},
  {id:'v-w',left:'consonant-v',right:'consonant-w',title:'下唇与上齿，还是圆唇？',cue:'/v/ 用上齿轻触下唇；/w/ 从双唇收圆开始。两者的嘴部动作不同。'},
  {id:'ch-jh',left:'consonant-ch',right:'consonant-jh',title:'一组塞擦音',cue:'先阻住气流，再释放并摩擦。/dʒ/ 通常有声带振动；/tʃ/ 通常没有。'},
];
export function filterSymbols(group: string, query: string): SymbolEntry[] {
  const search=query.trim().replaceAll('/','').replaceAll(':','ː').toLowerCase();
  const exact=/^\/.*\/$/.test(query.trim());
  return symbols.filter(s=>(group==='all'||s.group===group)&&(!search||(exact?s.ipa===search:`${s.ipa} ${s.word} ${s.gloss}`.toLowerCase().includes(search))));
}
export function getSymbol(id: string): SymbolEntry { return symbols.find(s=>s.id===id) ?? symbols[1]; }
