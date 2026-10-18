/** Only the creator's official YouTube player streams the lesson; media are never copied. */
export interface LessonRange { videoId: string; startSeconds: number; endSeconds: number }
export interface TeachingPlayer {
  pauseVideo(): void;
  loadVideoById(range: { videoId: string; startSeconds: number; endSeconds: number }): void;
  getIframe(): HTMLIFrameElement;
  destroy(): void;
}
interface PlayerEvent { target: TeachingPlayer; data: number }
interface YouTubeAPI {
  Player: new (id: string, options: {
    videoId: string; host: string; width: string; height: string;
    playerVars: Record<string, string | number>;
    events: {
      onReady: (event: PlayerEvent) => void;
      onStateChange: (event: PlayerEvent) => void;
      onError: (event: PlayerEvent) => void;
      onAutoplayBlocked: (event: PlayerEvent) => void;
    };
  }) => TeachingPlayer;
}
declare global {
  interface Window { YT?: YouTubeAPI; onYouTubeIframeAPIReady?: () => void }
}
let pendingAPI: Promise<YouTubeAPI> | undefined;
export function loadYouTube(): Promise<YouTubeAPI> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (pendingAPI) return pendingAPI;
  pendingAPI = new Promise<YouTubeAPI>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api'; script.async = true;
    const previous = window.onYouTubeIframeAPIReady;
    const restore = () => { if (window.onYouTubeIframeAPIReady === ready) window.onYouTubeIframeAPIReady = previous; };
    const fail = () => { clearTimeout(timeout); restore(); script.remove(); reject(new Error('YouTube player unavailable')); };
    const ready = () => {
      clearTimeout(timeout); restore(); previous?.();
      if (window.YT?.Player) resolve(window.YT); else fail();
    };
    const timeout = setTimeout(fail, 15000);
    window.onYouTubeIframeAPIReady = ready; script.onerror = fail;
    document.head.append(script);
  }).catch(error => { pendingAPI = undefined; throw error; });
  return pendingAPI;
}
export function createTeachingPlayer(api: YouTubeAPI, id: string, range: LessonRange, handlers: {
  ready: (player: TeachingPlayer) => void;
  state: (state: number) => void;
  error: (code: number) => void;
  blocked: () => void;
}): TeachingPlayer {
  return new api.Player(id, {
    videoId: range.videoId, host: 'https://www.youtube-nocookie.com', width: '100%', height: '100%',
    playerVars: {
      start: range.startSeconds, end: range.endSeconds, autoplay: 1, playsinline: 1,
      controls: 1, enablejsapi: 1, origin: window.location.origin,
      cc_load_policy: 1, cc_lang_pref: 'en', hl: 'zh-Hans', rel: 0,
    },
    events: {
      onReady: event => handlers.ready(event.target),
      onStateChange: event => handlers.state(event.data),
      onError: event => handlers.error(event.data),
      onAutoplayBlocked: () => handlers.blocked(),
    },
  });
}
