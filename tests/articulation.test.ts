import { test } from 'node:test';
import assert from 'node:assert/strict';
import { symbols, pronunciationSources } from '../src/library.ts';
import { articulations, getArticulation, phasePose, interpolatePose, articulationSvg } from '../src/articulation.ts';
const entry = (ipa: string) => articulations.find(a => a.ipa === ipa)!;

test('all 44 symbols have their own complete, sourced lip/tongue movement sequence', () => {
  assert.equal(articulations.length, 44);
  assert.deepEqual(new Set(articulations.map(a => a.symbolId)), new Set(symbols.map(s => s.id)));
  for (const symbol of symbols) {
    const a = getArticulation(symbol.id);
    assert.equal(a.ipa, symbol.ipa);
    assert.ok(a.lipCue && a.tongueCue && a.movementCue && a.sourceNotes, symbol.id);
    assert.ok(a.sourceIds.length >= 2, symbol.id);
    assert.ok(a.sourceIds.some(id => ['roach-articulators', 'cambridge-english', 'phonetics-overview', 'seeing-speech'].includes(id)));
    for (const id of a.sourceIds) assert.ok(id in pronunciationSources, id);
    assert.ok(a.phases.length >= 2 && a.phases.length <= 3, symbol.id);
    assert.ok(a.initialPhase >= 0 && a.initialPhase < a.phases.length);
    for (const phase of a.phases) {
      const pose = phasePose(phase);
      assert.equal(pose.tongue.length, 6); assert.equal(pose.lips.length, 2);
      assert.ok([...pose.tongue, ...pose.lips].every(Number.isFinite));
      assert.ok(pose.lips[0] >= 15 && pose.lips[0] <= 60 && pose.lips[1] >= 0 && pose.lips[1] <= 35);
      const svg = articulationSvg(a, phase, pose, 'test');
      assert.doesNotMatch(svg, /NaN|undefined|Infinity/);
      assert.equal((svg.match(/role="img"/g) ?? []).length, 2);
      assert.match(svg, /嘴唇/); assert.match(svg, /舌/);
    }
  }
  assert.throws(() => getArticulation('unknown'), /Missing articulation/);
});
test('front vowel height, back vowel position and British rounding contrasts remain distinct', () => {
  const pose = (ipa: string) => phasePose(entry(ipa).phases[1]);
  const heights = ['iː', 'ɪ', 'e', 'æ'].map(ipa => pose(ipa).tongue[3]);
  assert.deepEqual([...heights].sort((a,b) => a-b), heights);
  assert.equal(new Set(heights).size, 4);
  assert.ok(pose('ɑː').tongue[2] < pose('æ').tongue[2]);
  assert.ok(pose('uː').tongue[3] < pose('ʊ').tongue[3]);
  for (const ipa of ['ɒ','ɔː','ʊ','uː']) assert.equal(pose(ipa).lipShape, 'rounded', ipa);
  for (const ipa of ['iː','ɪ','e','æ','ɑː','ʌ','ɜː','ə']) assert.notEqual(pose(ipa).lipShape, 'rounded', ipa);
});
test('the eight British diphthongs move between the correct schematic endpoint families', () => {
  const endpoints: Record<string, string[]> = {'eɪ':['dress','kit'],'aɪ':['open-a','kit'],'ɔɪ':['thought','kit'],'əʊ':['schwa','foot'],'aʊ':['open-a','foot'],'ɪə':['kit','schwa'],'eə':['dress','schwa'],'ʊə':['foot','schwa']};
  assert.equal(articulations.filter(a => a.kind === 'diphthong').length, 8);
  for (const [ipa, [start,end]] of Object.entries(endpoints)) {
    const a = entry(ipa); assert.equal(a.phases[0].poseId, start); assert.equal(a.phases.at(-1)!.poseId, end);
    assert.notDeepEqual(phasePose(a.phases[0]).tongue, phasePose(a.phases.at(-1)!).tongue);
    const still = articulationSvg(a, a.phases[0], phasePose(a.phases[0]), 'diphthong');
    assert.match(still, /art-trajectory/); assert.match(still, /舌位滑动/);
    assert.ok(a.phases.every(p => p.voiced && p.airflow === 'oral' && p.contact === 'none'));
  }
  for (const ipa of ['ɪə','eə','ʊə']) assert.match(entry(ipa).variantNote, /传统.*现代/);
});
test('stop and fricative pairs share oral articulation while correctly contrasting voicing', () => {
  const pairs = [['p','b','bilabial'],['t','d','alveolar'],['k','ɡ','velar'],['f','v','labiodental'],['θ','ð','dental'],['s','z','alveolar'],['ʃ','ʒ','postalveolar']];
  for (const [left,right,place] of pairs) {
    const a = entry(left), b = entry(right), ap = a.phases[1], bp = b.phases[1];
    assert.equal(ap.contact, place); assert.equal(bp.contact, place);
    assert.equal(ap.poseId, bp.poseId); assert.equal(ap.voiced, false); assert.equal(bp.voiced, true);
    if (a.kind === 'stop') {
      assert.equal(ap.airflow, 'none'); assert.equal(a.phases.at(-1)!.airflow, 'burst');
    } else assert.equal(ap.airflow, 'friction');
  }
});
test('nasals, laterals and glottal h show the correct airflow route instead of a generic mouth arrow', () => {
  for (const [ipa,place] of [['m','bilabial'],['n','alveolar'],['ŋ','velar']]) {
    const a = entry(ipa), p = a.phases[1];
    assert.equal(p.contact, place); assert.equal(p.velum, 'lowered'); assert.equal(p.airflow, 'nasal'); assert.equal(p.voiced, true);
    const svg = articulationSvg(a,p,phasePose(p),'nasal'); assert.match(svg,/鼻腔气流/);
  }
  const l = entry('l').phases.at(-1)!; assert.equal(l.contact,'alveolar'); assert.equal(l.airflow,'lateral');
  assert.match(articulationSvg(entry('l'),l,phasePose(l),'lateral'),/舌两侧气流/);
  const h = entry('h').phases[1]; assert.equal(h.contact,'glottal'); assert.equal(h.voiced,false); assert.equal(h.airflow,'oral');
  assert.match(entry('h').variantNote,/随元音/);
});
test('affricates release into friction; English r and glides never become oral stops or trills', () => {
  for (const ipa of ['tʃ','dʒ']) {
    const a=entry(ipa); assert.equal(a.phases[0].contact,'postalveolar'); assert.equal(a.phases[0].airflow,'none'); assert.equal(a.phases[1].airflow,'friction');
  }
  const r=entry('r'); assert.equal(r.kind,'approximant'); assert.ok(r.phases.every(p=>p.contact==='none')); assert.match(r.variantNote,/ɹ/);
  for (const ipa of ['j','w']) {
    const a=entry(ipa); assert.equal(a.kind,'glide'); assert.ok(a.phases.every(p=>p.contact==='none'));
    assert.notEqual(a.phases[0].poseId,a.phases.at(-1)!.poseId);
  }
  const j=phasePose(entry('j').phases[0]), w=phasePose(entry('w').phases[0]);
  assert.ok(w.lips[0]<j.lips[0]); assert.ok(w.tongue[2]<j.tongue[2]);
});
test('interpolated tongue/lip paths stay finite and preserve exact endpoint poses', () => {
  for (const a of articulations) for (let i=1;i<a.phases.length;i++) {
    const start=phasePose(a.phases[i-1]), end=phasePose(a.phases[i]);
    assert.deepEqual(interpolatePose(start,end,0),start); assert.deepEqual(interpolatePose(start,end,1),end);
    const mid=interpolatePose(start,end,.5);
    assert.ok([...mid.tongue,...mid.lips].every(Number.isFinite));
  }
});
