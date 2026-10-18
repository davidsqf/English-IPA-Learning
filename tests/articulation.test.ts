import {test} from 'node:test';
import assert from 'node:assert/strict';
import {symbols} from '../src/library.ts';
import {articulations,getArticulation,articulationView,lessonBody} from '../src/articulation.ts';
import data from '../content/articulation.json' with {type:'json'};

test('all 44 British targets have real teacher demonstrations and placement teaching',()=>{
  assert.equal(data.schemaVersion,3); assert.equal(articulations.length,44);
  assert.deepEqual(new Set(articulations.map(a=>a.symbolId)),new Set(symbols.map(s=>s.id)));
  let lessons=0;
  for(const symbol of symbols){
    const a=getArticulation(symbol.id);assert.equal(a.ipa,symbol.ipa);
    if(symbol.group==='consonant'){
      assert.equal(a.lessons.length,2);assert.equal(a.lessons[0].sourceId,'bbc-sounds');assert.equal(a.lessons[1].purpose,'placement-explanation');
    }else{assert.equal(a.lessons.length,1);assert.equal(a.lessons[0].sourceId,'emma-vowels');assert.equal(a.lessons[0].purpose,'demonstration-and-placement');}
    for(const l of a.lessons){
      const source=data.sources[l.sourceId as keyof typeof data.sources];
      assert.ok(l.targets.includes(a.ipa));assert.ok(l.startSeconds>=0&&l.endSeconds>l.startSeconds&&l.endSeconds<=source.durationSeconds);
      assert.equal(source.use,'official-youtube-embed');assert.equal(source.embedAllowed,true);assert.equal(source.permissionUrl,'https://www.youtube.com/t/terms');assert.ok(l.placementSummary);lessons++;
    }
  }
  assert.equal(lessons,68);assert.throws(()=>getArticulation('unknown'),/Missing articulation/);assert.ok(!('poses'in data));
});
test('critical places and traditional vowel variants resolve to the correct published chapters',()=>{
  const find=(ipa:string)=>articulations.find(a=>a.ipa===ipa)!;
  for(const [ipa,start,end]of [['t',92,154],['d',92,154],['k',154,205],['ɡ',154,205],['θ',225,338],['ð',225,338],['s',338,444],['ʃ',444,538],['tʃ',113,199],['dʒ',265,363],['ŋ',269,365]] as const){
    const l=find(ipa).lessons[1];assert.equal(l.startSeconds,start,ipa);assert.equal(l.endSeconds,end,ipa);
  }
  assert.match(find('r').lessons[1].placementSummary,/ɹ/);
  for(const ipa of ['ɪə','eə','ʊə'])assert.match(find(ipa).variantNote,/传统.*变体/);
  assert.equal(find('ʊə').lessons[0].startSeconds,1190);assert.equal(find('ʊə').lessons[0].endSeconds,1268);
});
test('views load no remote player before activation and expose the correct creator/range/replay links',()=>{
  for(const a of articulations){
    const html=articulationView(a.symbolId,'test');assert.match(html,/真人发音讲解/);assert.match(html,/data-load/);assert.match(html,/YouTube · 需联网/);
    assert.doesNotMatch(html,/<iframe|<video|<img|<script|MRI|超声|NaN|undefined/);
    assert.equal((html.match(/data-lesson-mode=/g)??[]).length,a.lessons.length>1?2:0);
    for(let i=0;i<a.lessons.length;i++){
      const body=lessonBody(a,i,'test'),l=a.lessons[i],s=data.sources[l.sourceId as keyof typeof data.sources];
      assert.ok(body.includes(s.videoId));assert.ok(body.includes(`t=${l.startSeconds}s`));assert.ok(body.includes(s.creator));assert.match(body,/data-replay hidden/);assert.doesNotMatch(body,/CC-BY|原始预览图/);
    }
  }
});
