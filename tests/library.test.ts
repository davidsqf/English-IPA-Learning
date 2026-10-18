import { filterSymbols, comparisons, symbols, samples, groups } from '../src/library.ts';
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
test('each of ten comparisons has two distinct playable targets', () => {
  assert.equal(comparisons.length, 10);
  assert.equal(new Set(comparisons.map(c => c.id)).size, 10);
  for (const comparison of comparisons) {
    assert.notEqual(comparison.left, comparison.right);
    for (const id of [comparison.left, comparison.right]) assert.ok(samples.has(symbols.find(s => s.id === id)!.sampleId!));
  }
});
test('search supports exact IPA, colon aliases, words, Chinese and empty results', () => {
  assert.equal(filterSymbols('all', '/ɪ/').length, 1);
  assert.ok(filterSymbols('all', 'ɪ').length > 1);
  assert.equal(filterSymbols('all', 'i:')[0].ipa, 'iː');
  assert.equal(filterSymbols('all', ' 绵羊 ')[0].word, 'sheep');
  assert.equal(filterSymbols('consonant', 'SHEEP')[0].ipa, 'ʃ');
  assert.equal(filterSymbols('all', 'unfindable').length, 0);
  assert.equal(filterSymbols('monophthong', '/t/').length, 0);
});
