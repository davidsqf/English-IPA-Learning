import {filterSymbols} from '../src/library.ts';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
// Validate corpus invariants independently of browser rendering.
const library=JSON.parse(readFileSync(new URL('../content/symbol-library.json',import.meta.url),'utf8'));
const audio=JSON.parse(readFileSync(new URL('../content/local-preview-audio.json',import.meta.url),'utf8'));
test('traditional inventory has unique IDs and the intended group boundaries',()=>{
 assert.equal(library.symbols.length,44);assert.equal(new Set(library.symbols.map((s:any)=>s.id)).size,44);
 for(const [group,count] of [['monophthong',12],['diphthong',8],['consonant',24]])assert.equal(library.symbols.filter((s:any)=>s.group===group).length,count);
});
test('every contextual recording reference exists and retains pending release status',()=>{
 const ids=new Set(audio.assets.map((a:any)=>a.id));
 assert.equal(library.symbols.filter((s:any)=>s.sampleId).length,43);
 for(const s of library.symbols){assert.ok(s.wordIpa.includes(s.ipa));if(s.sampleId)assert.ok(ids.has(s.sampleId));assert.equal(s.phoneticsReview,'pending-human');}
 for(const a of audio.assets){assert.match(a.sha256,/^[a-f0-9]{64}$/);assert.match(a.sourceSha1,/^[a-f0-9]{40}$/);assert.match(a.previewPath,/^\/local-samples\/[a-z-]+\.(ogg|mp3)$/);assert.equal(a.approvedForRelease,false);assert.equal(a.licenseId,'CC-BY-3.0-US');}
});

test('slashed IPA searches are exact while unwrapped queries remain exploratory',()=>{assert.equal(filterSymbols('all','/ɪ/').length,1);assert.ok(filterSymbols('all','ɪ').length>1);assert.equal(filterSymbols('all','i:')[0].ipa,'iː');assert.equal(filterSymbols('all','绵羊')[0].word,'sheep');assert.equal(filterSymbols('consonant','sheep')[0].ipa,'ʃ');});
