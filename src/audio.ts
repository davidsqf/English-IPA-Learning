import { samples } from './library.ts';

export class LocalPlayer {
  private player = new Audio();
  private serial = 0;
  private activeButton: HTMLButtonElement | null = null;
  private timeout: ReturnType<typeof setTimeout> | undefined;
  rate = 1;
  onStatus: (message: string) => void = () => {};
  stop() {
    this.serial++;
    clearTimeout(this.timeout);
    this.player.pause();
    this.player.onended = null;
    this.player.onerror = null;
    this.player.onplaying = null;
    this.player.removeAttribute('src');
    this.activeButton?.removeAttribute('data-playing');
    this.activeButton?.setAttribute('aria-pressed', 'false');
    this.activeButton = null;
  }
  setRate(rate: number) { this.rate = rate; this.player.playbackRate = rate; }
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
      this.player.playbackRate = this.rate;
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
