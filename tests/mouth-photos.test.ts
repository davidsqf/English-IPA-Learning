import {test} from 'node:test';
import assert from 'node:assert/strict';
import {symbols} from '../src/library.ts';
import {mouthPhotos,mouthPhotoSource,getMouthPhoto,mouthPhotoView} from '../src/mouth-photos.ts';

test('every British symbol has a real, traceable front-view word photograph',()=>{
 assert.deepEqual(new Set(mouthPhotos.map(p=>p.symbolId)),new Set(symbols.map(s=>s.id)));
 assert.equal(mouthPhotoSource.view,'frontal-camera');assert.equal(mouthPhotoSource.licenseId,'CC BY 4.0');
 for(const s of symbols){const p=getMouthPhoto(s.id);assert.equal(p.ipa,s.ipa);assert.match(p.sourceMember,/^stimuli_B1\/.+\.mp4$/);assert.ok(p.timeSeconds<p.sourceDurationSeconds);assert.ok(Math.abs(p.frameIndex-p.timeSeconds*25)<.001);}
 assert.throws(()=>getMouthPhoto('unknown'),/Missing front mouth photo/);
});
test('frontal photos are local, accessible, credited and linked to their full frame',()=>{
 for(const p of mouthPhotos){const html=mouthPhotoView(p.symbolId,'photo');assert.equal((html.match(/<img /g)??[]).length,1);assert.ok(html.includes(`src="./${p.path}"`));assert.ok(html.includes(`href="./${p.path}"`));assert.ok(html.includes(p.word));assert.match(html,/正面口形/);assert.match(html,/CC BY 4.0/);assert.match(html,/未修饰口形/);assert.doesNotMatch(html,/<iframe|<video|<svg|<script|<img[^>]+src="https?:|undefined|NaN/);}
});
