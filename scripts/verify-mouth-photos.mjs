import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const root=new URL('../',import.meta.url);
const [library,data]=await Promise.all(['symbol-library','mouth-photos'].map(async name=>JSON.parse(await readFile(new URL(`content/${name}.json`,root),'utf8'))));
if(data.schemaVersion!==1||data.entries.length!==44||new Set(data.entries.map(e=>e.symbolId)).size!==44)throw Error('Front-view photographs must cover all 44 symbols.');
const source=data.source;
if(source.id!=='ucl-mafi-b1'||source.view!=='frontal-camera'||source.licenseId!=='CC BY 4.0'||source.licenseUrl!=='https://creativecommons.org/licenses/by/4.0/'||source.url!=='https://osf.io/mna8j/'||!source.permissionStatement.includes('still frames')||source.archiveName!=='B1.zip')throw Error('Missing real British photo provenance or reuse permission.');
function dimensions(bytes){
 let pos=2;
 while(pos<bytes.length-8){
  if(bytes[pos++]!==255)throw Error('Invalid JPEG marker');
  while(bytes[pos]===255)pos++;
  const marker=bytes[pos++],length=bytes.readUInt16BE(pos);
  if(marker===192||marker===194)return {height:bytes.readUInt16BE(pos+3),width:bytes.readUInt16BE(pos+5)};
  pos+=length;
 }
 throw Error('Missing JPEG dimensions');
}
const expected=new Set();
for(const s of library.symbols){
 const p=data.entries.find(e=>e.symbolId===s.id);
 if(!p||p.ipa!==s.ipa||p.sourceId!==source.id||p.sourceMember!==`stimuli_B1/${p.word}.mp4`||p.path!==`mouth-photos/${s.id}.jpg`||!p.wordReferenceUrl.startsWith('https://dictionary.cambridge.org/pronunciation/english/')||!((p.width===1920&&p.height===1080)||(p.width===1280&&p.height===720))||!Number.isInteger(p.frameIndex)||p.timeSeconds<0||p.timeSeconds>=p.sourceDurationSeconds||Math.abs(p.timeSeconds*25-p.frameIndex)>.001||!/^[a-f0-9]{64}$/.test(p.sourceVideoSha256)||!/^[a-f0-9]{8}$/.test(p.sourceCRC32))throw Error('Invalid photo/word/frame mapping: '+s.id);
 const bytes=await readFile(new URL('public/'+p.path,root));
 if(bytes.length!==p.bytes||createHash('sha256').update(bytes).digest('hex')!==p.sha256||bytes[0]!==255||bytes[1]!==216||bytes.at(-2)!==255||bytes.at(-1)!==217)throw Error('Missing or changed frontal photograph: '+s.id);
 const size=dimensions(bytes);if(size.width!==p.width||size.height!==p.height)throw Error('Incorrect JPEG dimensions: '+s.id);
 expected.add(p.path.split('/').at(-1));
}
const actual=await readdir(new URL('public/mouth-photos/',root));
if(actual.length!==expected.size||actual.some(f=>!expected.has(f)))throw Error('Unexpected files in shipped photographs.');
console.log('Verified 44 frontal mouth photographs, per-file integrity, British source words/frames and CC BY 4.0 provenance.');
