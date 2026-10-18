import { samples } from './library.ts';
import { britishVoice } from './speech.ts';

export class LocalPlayer {
  private player = new Audio();
  private serial = 0;
  private activeButton: HTMLButtonElement | null = null;
  private timeout: ReturnType<typeof setTimeout> | undefined;
  private utterance: SpeechSynthesisUtterance | null = null;
  private clearVoiceWait: (() => void) | undefined;
  constructor() {
    // Some browsers load their voice list asynchronously on first access.
    window.speechSynthesis?.getVoices();
  }
  onStatus: (message: string) => void = () => {};
  stop() {
    this.serial++;
    clearTimeout(this.timeout);
    this.clearVoiceWait?.();
    this.clearVoiceWait = undefined;
    if (this.utterance) {
      this.utterance.onstart = this.utterance.onend = this.utterance.onerror = null;
      this.utterance = null;
      window.speechSynthesis.cancel();
    }
    this.player.pause();
    this.player.onended = null;
    this.player.onerror = null;
    this.player.onplaying = null;
    this.player.removeAttribute('src');
    this.activeButton?.removeAttribute('data-playing');
    this.activeButton?.setAttribute('aria-pressed', 'false');
    this.activeButton = null;
  }
  speakWord(word: string, button: HTMLButtonElement) {
    this.stop();
    if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
      this.onStatus('此浏览器不支持语音，请点击词语听词典发音。'); return;
    }
    const synth = window.speechSynthesis;
    const serial = this.serial;
    this.activeButton = button;
    button.dataset.playing = 'true'; button.setAttribute('aria-pressed', 'true');
    this.onStatus('正在载入英式合成语音…');
    const start = () => {
      if (serial !== this.serial) return;
      const voice = britishVoice(synth.getVoices());
      if (!voice) return;
      this.clearVoiceWait?.(); this.clearVoiceWait = undefined;
      clearTimeout(this.timeout);
      const speech = new SpeechSynthesisUtterance(word);
      this.utterance = speech; // Keep a strong reference for WebKit's speech lifecycle.
      speech.lang = 'en-GB'; speech.voice = voice; speech.rate = 1; speech.pitch = 1; speech.volume = 1;
      speech.onstart = () => {
        if (serial !== this.serial) return;
        clearTimeout(this.timeout); this.onStatus('正在播放 · 英式合成语音');
      };
      speech.onend = () => {
        if (serial !== this.serial) return;
        // Cancelling a completed utterance makes WebKit emit a spurious canceled error.
        this.utterance = null; this.stop(); this.onStatus('播放完毕，可以重播。');
      };
      speech.onerror = () => { if (serial === this.serial) { this.stop(); this.onStatus('设备语音暂不可用，请重试或点击词语听词典发音。'); } };
      this.timeout = setTimeout(() => {
        if (serial === this.serial) { this.stop(); this.onStatus('设备语音未能开始，请重试或点击词语听词典发音。'); }
      }, 10000);
      try { synth.speak(speech); }
      catch { if (serial === this.serial) { this.stop(); this.onStatus('设备语音暂不可用，请点击词语听词典发音。'); } }
    };
    synth.addEventListener('voiceschanged', start);
    this.clearVoiceWait = () => synth.removeEventListener('voiceschanged', start);
    this.timeout = setTimeout(() => {
      if (serial === this.serial) { this.stop(); this.onStatus('设备暂无英式语音，请启用英语（英国）语音，或点击词语听词典发音。'); }
    }, 2500);
    start();
  }
  playSequence(ids: string[], button: HTMLButtonElement) {
    const next = (index: number) => { if (index < ids.length) void this.play(ids[index], button, () => next(index + 1)); };
    next(0);
  }
  async play(id: string, button: HTMLButtonElement, ended: () => void = () => {}) {
    this.stop();
    const source = samples.get(id);
    if (!source) { this.onStatus('录音未能载入，请刷新页面重试。'); return; }
    const serial = this.serial;
    this.activeButton = button;
    button.dataset.playing = 'true';
    button.setAttribute('aria-pressed', 'true');
    this.onStatus('正在载入录音…');
    try {
      this.player.src = new URL(source.path, new URL(import.meta.env.BASE_URL, window.location.href)).href;
      this.player.playbackRate = 1;
      this.player.preservesPitch = true;
      this.player.onplaying = () => { if (serial !== this.serial) return; clearTimeout(this.timeout); this.onStatus('正在播放 · 英式例词示例'); };
      this.player.onended = () => { if (serial !== this.serial) return; this.stop(); this.onStatus('播放完毕，可以重播。'); ended(); };
      this.player.onerror = () => { if (serial === this.serial) { this.stop(); this.onStatus('录音暂不可用，请重试。'); } };
      this.timeout = setTimeout(() => { if (serial === this.serial) { this.stop(); this.onStatus('录音载入超时，请重试。'); } }, 10000);
      await this.player.play();
    } catch {
      if (serial !== this.serial) return;
      this.stop(); this.onStatus('录音未能播放，请重试。');
    }
  }
}
