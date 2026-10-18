import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
const manifest = JSON.parse(await readFile(new URL('../content/audio.json', import.meta.url), 'utf8'));
const library = JSON.parse(await readFile(new URL('../content/symbol-library.json', import.meta.url), 'utf8'));
const ids = new Set(manifest.assets.map(a => a.id));
if (library.symbols.length !== 44 || library.symbols.some(s => !ids.has(s.sampleId))) throw new Error('Every symbol must reference a bundled recording.');
for (const symbol of library.symbols) for (const example of symbol.examples) {
  if (example.sampleId !== null && !ids.has(example.sampleId)) throw new Error(`Missing example recording: ${example.word}`);
  if (!/^[a-z]+$/.test(example.word)) throw new Error(`Only ordinary English words may use device speech: ${example.word}`);
  if (example.sampleId && !manifest.assets.find(a => a.id === example.sampleId).transcript.split(' ').includes(example.word)) throw new Error(`Wrong example recording: ${example.word}`);
}
const directory = new URL('../public/audio/', import.meta.url);
for (const asset of manifest.assets) {
  if (!/^[a-z-]+\.mp3$/.test(asset.localFilename) || asset.path !== `audio/${asset.localFilename}`) throw new Error(`Invalid asset path: ${asset.id}`);
  const bytes = await readFile(new URL(asset.localFilename, directory));
  if (createHash('sha256').update(bytes).digest('hex') !== asset.sha256) throw new Error(`Audio checksum mismatch: ${asset.id}`);
  if (!asset.creator || !asset.licenseUrl.startsWith('https://creativecommons.org/') || !asset.sourcePageUrl.startsWith('https://commons.wikimedia.org/')) throw new Error(`Missing provenance: ${asset.id}`);
}
if ((await readdir(directory)).filter(name => name !== 'README.md').length !== manifest.assets.length) throw new Error('Unlisted file in public/audio.');
console.log(`Verified ${manifest.assets.length} bundled recordings covering all ${library.symbols.length} symbols.`);
