import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { setTimeout as pause } from 'node:timers/promises';

const manifest=JSON.parse(await readFile(new URL('../content/local-preview-audio.json',import.meta.url),'utf8'));
await mkdir('.local/audio',{recursive:true});
for(const asset of manifest.assets){
  const path=`.local/audio/${asset.localFilename}`;
  const algorithm=asset.sha256?'sha256':'sha1';
  const expected=asset.sha256??asset.sourceSha1;
  try {
    const existing=await readFile(path);
    if(createHash(algorithm).update(existing).digest('hex')===expected){
      console.log(`Already available: ${asset.transcript}`);continue;
    }
  } catch { /* Missing files are acquired below; existing candidates stay intact. */ }
  let response;
  for(let attempt=0;attempt<4;attempt++){
    response=await fetch(asset.downloadUrl,{signal:AbortSignal.timeout(30000)});
    if(response.status!==429)break;
    const retry=response.headers.get('retry-after');
    const seconds=retry&&Number.isFinite(Number(retry))?Number(retry):retry?(Date.parse(retry)-Date.now())/1000:30;
    const wait=Number.isFinite(seconds)?Math.max(20,seconds):30;
    console.log(`Source is busy; waiting ${Math.ceil(wait)} seconds before retrying ${asset.transcript}.`);
    await response.body?.cancel();
    await pause(wait*1000);
  }
  if(!response?.ok)throw new Error(`Download failed (${response?.status}): ${asset.transcript}. Existing files were kept; run this command again later.`);
  const bytes=Buffer.from(await response.arrayBuffer());
  if(createHash(algorithm).update(bytes).digest('hex')!==expected)throw new Error(`Source changed: ${asset.id}. Review the new recording before changing its checksum.`);
  await writeFile(path,bytes);
  console.log(`Saved local candidate: ${asset.transcript}`);
  // Keep first-time acquisition gentle on the public media service.
  await pause(20000);
}
console.log('Credits: Association Shtooka, Judith Franck / CC BY 3.0 US. Human pronunciation review remains pending.');
