import { test } from 'node:test';
import assert from 'node:assert/strict';
import { symbols } from '../src/library.ts';
import { articulations, getArticulation, articulationView } from '../src/articulation.ts';
import data from '../content/articulation.json' with { type: 'json' };

test('all 44 symbols resolve to distinct published MRI/ultrasound recordings and original posters', () => {
  assert.equal(articulations.length,44);
  assert.equal(new Set(articulations.map(a=>a.path)).size,44);
  assert.deepEqual(new Set(articulations.map(a=>a.symbolId)),new Set(symbols.map(s=>s.id)));
  for (const symbol of symbols) {
    const a=getArticulation(symbol.id); assert.equal(a.ipa,symbol.ipa);
    const source=data.sources[a.sourceId as keyof typeof data.sources];
    assert.equal(source.licenseId,'CC-BY-NC-ND-4.0'); assert.equal(a.modifications,'none');
    assert.match(a.sha256,/^[a-f0-9]{64}$/); assert.match(a.posterSha256,/^[a-f0-9]{64}$/);
    assert.ok(a.sourcePageUrl && a.sourceUrl && a.posterUrl && a.context && a.speaker);
    if(a.sourceId==='seeing-speech'){assert.equal(a.modality,'MRI 2 实拍');assert.match(a.sourcePageUrl,/datatype=4/);}else assert.equal(a.modality,'超声实拍');
  }
  assert.throws(()=>getArticulation('unknown'),/Missing articulation/);
});
test('British vowel examples use the matching lexical sets, with regional/variant labels', () => {
  const words:Record<string,string>={'iː':'fleece','ɪ':'kit','e':'dress','æ':'trap','ɑː':'palm','ɒ':'lot','ɔː':'thought','ʊ':'foot','uː':'goose','ʌ':'strut','ɜː':'nurse','ə':'later','eɪ':'face','aɪ':'price','ɔɪ':'choice','əʊ':'goat','aʊ':'mouth','ɪə':'near','eə':'square','ʊə':'cure'};
  for(const [ipa,word] of Object.entries(words)){
    const a=articulations.find(a=>a.ipa===ipa)!; assert.equal(a.word,word); assert.equal(a.sourceId,'dynamic-dialects'); assert.match(a.label,/南安普敦/);
  }
  for(const ipa of ['ɪə','eə','ʊə']) assert.match(articulations.find(a=>a.ipa===ipa)!.variantNote,/传统.*变体/);
  assert.match(articulations.find(a=>a.ipa==='r')!.context,/ɹ/);
  assert.equal(articulations.find(a=>a.ipa==='tʃ')!.word,'cheap');
  assert.equal(articulations.find(a=>a.ipa==='dʒ')!.word,'hedged');
});
test('view exposes actual video, original still, attribution and accessible manual controls without generated anatomy', () => {
  for(const a of articulations){
    const html=articulationView(a.symbolId,'test');
    assert.match(html,/<video controls playsinline preload="none"/); assert.match(html,/<source src="articulation\//);
    assert.ok(html.includes(a.poster)); assert.ok(html.includes(a.sourcePageUrl.replaceAll('&','&amp;')));
    assert.match(html,/CC-BY-NC-ND-4.0/); assert.match(html,/未剪辑或改绘/);
    assert.doesNotMatch(html,/<svg|autoplay|articulation-steps|NaN|undefined/);
  }
  assert.ok(!('poses' in data));
});
