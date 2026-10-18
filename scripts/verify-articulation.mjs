import { readFile } from 'node:fs/promises';
const json = async name => JSON.parse(await readFile(new URL(`../content/${name}.json`, import.meta.url), 'utf8'));
const [library, visuals, refs] = await Promise.all(['symbol-library', 'articulation', 'pronunciation-sources'].map(json));
const byId = new Map(visuals.entries.map(e => [e.symbolId, e]));
if (byId.size !== 44 || visuals.entries.length !== 44 || library.symbols.length !== 44) throw new Error('Articulation must cover exactly all 44 symbols.');
for (const symbol of library.symbols) {
  const entry = byId.get(symbol.id);
  if (!entry || entry.ipa !== symbol.ipa || !entry.lipCue || !entry.tongueCue || !entry.movementCue || !entry.sourceNotes || entry.sourceIds.length < 2) throw new Error(`Incomplete visual or sourcing: ${symbol.id}`);
  for (const id of entry.sourceIds) if (!refs.sources[id]?.url.startsWith('https://')) throw new Error(`Missing articulation reference: ${id}`);
  if (entry.phases.length < 2 || entry.initialPhase >= entry.phases.length) throw new Error(`Missing movement: ${symbol.id}`);
  for (const phase of entry.phases) {
    const pose = visuals.poses[phase.poseId];
    if (!pose || pose.tongue.length !== 6 || pose.lips.length !== 2 || ![...pose.tongue,...pose.lips].every(Number.isFinite)) throw new Error(`Invalid drawing coordinates: ${symbol.id}`);
    if (phase.airflow === 'nasal' && (phase.velum !== 'lowered' || phase.contact === 'none')) throw new Error(`Invalid nasal route: ${symbol.id}`);
  }
}
console.log('Verified 44 source-linked mouth/tongue visuals and their complete movement phases.');
