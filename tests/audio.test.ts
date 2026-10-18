import { test } from 'node:test';
import assert from 'node:assert/strict';
import { britishVoice } from '../src/speech.ts';
import { LocalPlayer } from '../src/audio.ts';

const gb = { name: 'British local', lang: 'en-GB', localService: true } as SpeechSynthesisVoice;
const us = { name: 'American local', lang: 'en-US', localService: true } as SpeechSynthesisVoice;
test('word speech selects an explicit British voice, prefers local voices, and never substitutes US English', () => {
  const remote = { ...gb, name: 'British remote', localService: false } as SpeechSynthesisVoice;
  assert.equal(britishVoice([us]), undefined);
  assert.equal(britishVoice([us, remote, gb]), gb);
  assert.equal(britishVoice([remote]), remote);
  assert.equal(britishVoice([{ ...gb, lang: 'en_GB' } as SpeechSynthesisVoice])?.lang, 'en_GB');
  assert.equal(britishVoice([{ ...gb, lang: 'en-GBR' } as SpeechSynthesisVoice]), undefined);
});
function environment(voices: SpeechSynthesisVoice[] = [gb]) {
  class Speech extends EventTarget {
    voices = voices;
    calls: FakeUtterance[] = [];
    cancelled = 0;
    getVoices() { return this.voices; }
    speak(utterance: FakeUtterance) { this.calls.push(utterance); }
    cancel() { this.cancelled++; }
  }
  class FakeUtterance {
    lang = ''; rate = 0; pitch = 0; volume = 0; voice = null;
    onstart: (() => void) | null = null;
    onend: (() => void) | null = null;
    onerror: (() => void) | null = null;
    text: string;
    constructor(text: string) { this.text = text; }
  }
  class FakeAudio {
    onended = null; onerror = null; onplaying = null;
    pause() {} removeAttribute() {}
  }
  const synth = new Speech();
  Object.assign(globalThis, { window: { speechSynthesis: synth }, Audio: FakeAudio, SpeechSynthesisUtterance: FakeUtterance });
  const player = new LocalPlayer();
  const messages: string[] = []; player.onStatus = message => messages.push(message);
  const button = () => {
    const attributes: Record<string, string> = {};
    return { dataset: {} as Record<string,string>, setAttribute(k: string,v: string) { attributes[k] = v; }, removeAttribute(k: string) { delete attributes[k]; if (k === 'data-playing') delete this.dataset.playing; }, attributes };
  };
  return { synth, player, messages, button };
}
test('word playback waits for a British voice, then resets after real lifecycle events', t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { player, synth, messages, button } = environment([]); const control = button();
  player.speakWord('cake', control as unknown as HTMLButtonElement);
  assert.equal(synth.calls.length, 0);
  synth.voices = [us, gb]; synth.dispatchEvent(new Event('voiceschanged'));
  assert.equal(synth.calls.length, 1);
  const spoken = synth.calls[0];
  assert.deepEqual([spoken.text, spoken.lang, spoken.rate, spoken.pitch], ['cake', 'en-GB', 1, 1]);
  assert.equal(spoken.voice, gb);
  spoken.onstart!(); assert.match(messages.at(-1)!, /合成语音/);
  t.mock.timers.tick(11000); assert.equal(control.attributes['aria-pressed'], 'true');
  spoken.onend!(); assert.equal(control.attributes['aria-pressed'], 'false');
  assert.equal(synth.cancelled, 0, 'completed speech must not be cancelled (WebKit)');
  assert.match(messages.at(-1)!, /播放完毕/);
});
test('rapid replacement cancels the previous word and ignores its late callbacks', t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { player, synth, button } = environment(); const first = button(); const second = button();
  player.speakWord('cake', first as unknown as HTMLButtonElement); const ended = synth.calls[0].onend!;
  player.speakWord('rain', second as unknown as HTMLButtonElement);
  assert.equal(synth.cancelled, 1); assert.equal(first.attributes['aria-pressed'], 'false');
  ended(); assert.equal(second.attributes['aria-pressed'], 'true'); assert.equal(synth.cancelled, 1);
  player.stop(); assert.equal(synth.cancelled, 2); assert.equal(second.attributes['aria-pressed'], 'false');
});
test('missing British voices reports an actionable failure without playing a different accent', t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { player, synth, messages, button } = environment([us]); const control = button();
  player.speakWord('cake', control as unknown as HTMLButtonElement);
  t.mock.timers.tick(2501);
  assert.equal(synth.calls.length, 0); assert.equal(control.attributes['aria-pressed'], 'false');
  assert.match(messages.at(-1)!, /设备暂无英式语音/);
  synth.voices = [gb]; synth.dispatchEvent(new Event('voiceschanged')); assert.equal(synth.calls.length, 0);
});
test('navigation while waiting prevents delayed speech; voice errors allow retry', t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { player, synth, messages, button } = environment([]); const control = button();
  player.speakWord('cake', control as unknown as HTMLButtonElement); player.stop();
  synth.voices = [gb]; synth.dispatchEvent(new Event('voiceschanged')); assert.equal(synth.calls.length, 0);
  player.speakWord('cake', control as unknown as HTMLButtonElement); synth.calls[0].onerror!();
  assert.equal(control.attributes['aria-pressed'], 'false'); assert.match(messages.at(-1)!, /暂不可用/);
  player.speakWord('rain', control as unknown as HTMLButtonElement); assert.equal(synth.calls.length, 2); player.stop();
});
test('speech that never starts times out and releases the active control', t => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const { player, synth, messages, button } = environment(); const control = button();
  player.speakWord('cake', control as unknown as HTMLButtonElement); t.mock.timers.tick(10001);
  assert.equal(synth.cancelled, 1); assert.equal(control.attributes['aria-pressed'], 'false'); assert.match(messages.at(-1)!, /未能开始/);
});
test('browsers without speech synthesis retain an actionable dictionary route', () => {
  const { player, messages, button } = environment();
  delete (window as unknown as { speechSynthesis?: unknown }).speechSynthesis;
  player.speakWord('cake', button() as unknown as HTMLButtonElement);
  assert.match(messages.at(-1)!, /不支持语音.*词典发音/);
});
