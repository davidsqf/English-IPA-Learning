import { defineConfig, type Plugin } from 'vite';
import { createReadStream, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import audio from './content/local-preview-audio.json' with { type: 'json' };

function localSamples(): Plugin {
  // An exact manifest allowlist; pending audio is never copied into public/ or dist/.
  const files = new Map(audio.assets.map(a=>[a.previewPath,a.localFilename]));
  const middleware = (req: any, res: any, next: () => void) => {
    const url=(req.url ?? '').split('?')[0];
    if(url==='/local-samples/status.json'){res.setHeader('Content-Type','application/json');res.setHeader('Cache-Control','no-store');return res.end(JSON.stringify({available:audio.assets.filter(a=>existsSync(resolve('.local/audio',a.localFilename))).map(a=>a.id)}));}
    const name = files.get(url);
    if (!name) return next();
    const path = resolve('.local/audio', name);
    if (!existsSync(path)) { res.statusCode=404; return res.end('Local preview sample unavailable. Run npm run samples.'); }
    res.setHeader('Content-Type',name.endsWith('.mp3')?'audio/mpeg':'audio/ogg');
    res.setHeader('Cache-Control','no-store');
    createReadStream(path).on('error',()=>res.destroy()).pipe(res);
  };
  return {name:'local-preview-samples', configureServer(s){s.middlewares.use(middleware);}, configurePreviewServer(s){s.middlewares.use(middleware);}};
}
export default defineConfig({plugins:[localSamples()],server:{strictPort:true},preview:{strictPort:true}});
