import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const json = async name => JSON.parse(await readFile(new URL(`../content/${name}.json`, import.meta.url), 'utf8'));
const [library, media] = await Promise.all(['symbol-library', 'articulation'].map(json));
const byId = new Map(media.entries.map(e => [e.symbolId, e]));
if (media.schemaVersion !== 2 || byId.size !== 44 || media.entries.length !== 44 || library.symbols.length !== 44 || 'poses' in media) throw new Error('Published media must cover exactly all 44 symbols without generated anatomy.');
const expected = new Set();
for (const symbol of library.symbols) {
  const entry = byId.get(symbol.id), source = media.sources[entry?.sourceId];
  if (!entry || entry.ipa !== symbol.ipa || !entry.context || !entry.label || !entry.speaker || !source || entry.modifications !== 'none') throw new Error(`Incomplete media provenance: ${symbol.id}`);
  if (source.licenseId !== 'CC-BY-NC-ND-4.0' || !source.licensePageUrl.startsWith('https://') || !source.creators) throw new Error(`Missing reuse basis: ${symbol.id}`);
  if (entry.sourceId === 'seeing-speech' && (entry.modality !== 'MRI 2 实拍' || !entry.sourceUrl.includes('/recording/MRI2_') || !entry.sourcePageUrl.includes('datatype=4') || !entry.institution.includes('Strathclyde'))) throw new Error(`Incorrect MRI provenance: ${symbol.id}`);
  for (const [field, hashKey, bytesKey] of [['path','sha256','bytes'],['poster','posterSha256','posterBytes']]) {
    const path = entry[field];
    if (!/^articulation\/[a-z0-9-]+\.(mp4|png|jpeg)$/.test(path) || expected.has(path)) throw new Error(`Invalid or duplicate asset: ${path}`);
    expected.add(path);
    const bytes = await readFile(new URL(`../public/${path}`, import.meta.url));
    if (bytes.length !== entry[bytesKey] || createHash('sha256').update(bytes).digest('hex') !== entry[hashKey]) throw new Error(`Asset differs from verified original: ${path}`);
    if (field === 'path' && bytes.subarray(4,8).toString() !== 'ftyp') throw new Error(`Not an MP4: ${path}`);
  }
  if (!entry.sourceUrl.startsWith('https://') || !entry.posterUrl.startsWith('https://') || !entry.sourcePageUrl.startsWith('https://') || entry.durationSeconds <= 0 || entry.width <= 0 || entry.height <= 0) throw new Error(`Incomplete original: ${symbol.id}`);
}
const files = await readdir(new URL('../public/articulation/', import.meta.url));
if (files.some(file => !expected.has(`articulation/${file}`))) throw new Error('Unregistered articulation asset.');
console.log('Verified 44 published video/poster pairs, source/rights records and original-file integrity.');
