import { readFile, readdir } from 'node:fs/promises';
const json = async name => JSON.parse(await readFile(new URL(`../content/${name}.json`, import.meta.url), 'utf8'));
const [library, media] = await Promise.all(['symbol-library', 'articulation'].map(json));
const byId = new Map(media.entries.map(e => [e.symbolId,e]));
if(media.schemaVersion!==3 || byId.size!==44 || media.entries.length!==44 || 'poses' in media) throw new Error('Teaching videos must cover all 44 symbols without fabricated anatomy.');
const channels = new Set(['UCHaHD477h-FeBbVh9Sh7syA','UCNfm92h83W2i2ijc5Xwp_IA','UCD7ttge27UvBGXzTMQr2Zqg']);
for(const source of Object.values(media.sources)) {
  if(!/^[\w-]{11}$/.test(source.videoId) || !channels.has(source.channelId) || !source.embedAllowed || source.use!=='official-youtube-embed' || source.url!==`https://www.youtube.com/watch?v=${source.videoId}` || source.permissionUrl!=='https://www.youtube.com/t/terms' || !source.referenceUrl.startsWith('https://') || !source.creator || !source.title || source.durationSeconds<=0) throw new Error(`Incomplete creator/player provenance: ${source.videoId}`);
}
let count=0;
for(const symbol of library.symbols) {
  const entry=byId.get(symbol.id);
  if(!entry || entry.ipa!==symbol.ipa || !entry.lessons.length || 'path' in entry || 'poster' in entry) throw new Error(`Missing teaching lesson: ${symbol.id}`);
  if(symbol.group==='consonant' && (entry.lessons.length!==2 || entry.lessons[0].sourceId!=='bbc-sounds' || entry.lessons[1].purpose!=='placement-explanation')) throw new Error(`Need clear British demonstration AND placement explanation: ${symbol.id}`);
  if(symbol.group!=='consonant' && (entry.lessons.length!==1 || entry.lessons[0].sourceId!=='emma-vowels' || entry.lessons[0].purpose!=='demonstration-and-placement')) throw new Error(`Need British vowel teaching: ${symbol.id}`);
  for(const lesson of entry.lessons) {
    const source=media.sources[lesson.sourceId];
    if(!source || !Number.isInteger(lesson.startSeconds) || !Number.isInteger(lesson.endSeconds) || lesson.startSeconds<0 || lesson.endSeconds<=lesson.startSeconds || lesson.endSeconds>source.durationSeconds || !lesson.targets.includes(entry.ipa) || !lesson.label || !lesson.placementSummary || lesson.rangeBasis!=='creator-chapters') throw new Error(`Invalid teaching range: ${symbol.id}`);
    count++;
  }
}
const oldFiles=await readdir(new URL('../public/articulation/',import.meta.url)).catch(error=>{if(error.code==='ENOENT')return [];throw error});
if(oldFiles.length) throw new Error('Do not ship the replaced MRI/ultrasound assets.');
console.log(`Verified all 44 symbols, ${count} creator chapter ranges, explicit placement coverage and official embed provenance.`);
