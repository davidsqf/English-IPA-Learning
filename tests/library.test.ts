import { filterSymbols, comparisons, symbols, samples, groups, validCustomPair, comparisonSymbols, pronunciationSources } from '../src/library.ts';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

test('traditional inventory has unique IDs and the intended group boundaries', () => {
  assert.equal(symbols.length, 44);
  assert.equal(new Set(symbols.map(s => s.id)).size, 44);
  assert.equal(new Set(symbols.map(s => s.ipa)).size, 44);
  for (const group of groups.slice(1)) assert.equal(symbols.filter(s => s.group === group.id).length, group.count);
});
test('every symbol maps to a bundled contextual recording and highlights its target', () => {
  for (const symbol of symbols) {
    assert.ok(symbol.wordIpa.includes(symbol.ipa), symbol.id);
    const recording = samples.get(symbol.sampleId!);
    assert.ok(recording, symbol.id);
    assert.ok(recording.transcript.split(' ').includes(symbol.word), symbol.id);
  }
  for (const recording of samples.values()) {
    const bytes = readFileSync(new URL(`../public/${recording.path}`, import.meta.url));
    assert.equal(createHash('sha256').update(bytes).digest('hex'), recording.sha256, recording.id);
    assert.ok(recording.creator && recording.licenseId && recording.sourcePageUrl);
    assert.match(recording.sourceSha1, /^[a-f0-9]{40}$/);
  }
});
test('presets include the genuine three-symbol comparison and have complete sources', () => {
  assert.equal(comparisons.length, 11);
  assert.equal(new Set(comparisons.map(c => c.id)).size, 11);
  assert.deepEqual(comparisons.find(c => c.id === 'dress-trap-price')!.symbolIds, ['vowel-dress', 'vowel-trap', 'vowel-price']);
  for (const comparison of comparisons) {
    assert.ok([2, 3].includes(comparison.symbolIds.length));
    assert.equal(new Set(comparison.symbolIds).size, comparison.symbolIds.length);
    for (const symbol of comparisonSymbols(comparison.symbolIds)) assert.ok(samples.has(symbol.sampleId));
    for (const id of comparison.cueSourceIds) assert.ok(id in pronunciationSources);
  }
});
test('all 44 symbols expose six distinct matching examples and traceable pronunciation tips', () => {
  for (const symbol of symbols) {
    assert.equal(symbol.examples.length, 6, symbol.id);
    assert.equal(new Set(symbol.examples.map(e => e.word)).size, 6, symbol.id);
    assert.equal(symbol.examples[0].word, symbol.word);
    assert.equal(symbol.examples[0].ipa, symbol.wordIpa);
    for (const example of symbol.examples) {
      assert.ok(example.ipa.includes(symbol.ipa), `${symbol.ipa}: ${example.word}`);
      if (example.sampleId) {
        const recording = samples.get(example.sampleId)!;
        assert.ok(recording?.transcript.split(' ').includes(example.word), example.word);
      } else {
        assert.equal(example.sampleId, null);
        assert.match(example.word, /^[a-z]+$/); // Speech input must be a word, never an IPA symbol.
      }
      assert.ok(example.gloss && example.referenceUrl.startsWith('https://dictionary.cambridge.org/pronunciation/english/'));
    }
    assert.ok(symbol.cueSourceIds.length > 0);
    for (const id of symbol.cueSourceIds) assert.ok(id in pronunciationSources);
  }
});
test('custom comparisons accept every distinct ordered pair and reject invalid selections', () => {
  let pairs = 0;
  for (const left of symbols) for (const right of symbols) {
    assert.equal(validCustomPair(left.id, right.id), left.id !== right.id);
    if (left.id !== right.id) pairs++;
  }
  assert.equal(pairs, 1892);
  assert.equal(validCustomPair('unknown', symbols[0].id), false);
  assert.throws(() => comparisonSymbols(['unknown']), /Unknown symbol/);
});
test('search supports exact IPA, colon aliases, words, Chinese and empty results', () => {
  assert.equal(filterSymbols('all', '/ɪ/').length, 1);
  assert.ok(filterSymbols('all', 'ɪ').length > 1);
  assert.equal(filterSymbols('all', 'i:')[0].ipa, 'iː');
  assert.equal(filterSymbols('all', ' 绵羊 ')[0].word, 'sheep');
  assert.equal(filterSymbols('all', 'cake')[0].ipa, 'eɪ');
  assert.equal(filterSymbols('consonant', 'SHEEP')[0].ipa, 'ʃ');
  assert.equal(filterSymbols('all', 'unfindable').length, 0);
  assert.equal(filterSymbols('monophthong', '/t/').length, 0);
});
