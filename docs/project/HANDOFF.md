# Development handoff

Updated 2026-10-18, Asia/Singapore. Read `AGENTS.md` and the Git workflow first.

## Current scope — owner-confirmed

The website's primary job is **learning the pronunciation of each symbol and comparing similar symbols**. The owner explicitly excluded quiz and review features during implementation. Do not reintroduce assessments, grades, practice schedules, progress tracking, or learning records unless requested later. Earlier research proposals involving those features are historical exploration, not the current spec. The owner also requested a clean, concise interface: no slogans or introductory paragraphs. Preserve the compact functional titles and short pronunciation guidance.

Audience remains Chinese-speaking beginners, English IPA, British English first. The accent model remains a non-rhotic British learner-dictionary convention; the app does not claim every British accent is identical.

## Implemented version

The app uses Vite 8, vanilla TypeScript, semantic HTML/CSS, and static JSON. Node 22.12+ is required; Node 24 is recommended and recorded in `.nvmrc`. The host's default Node was 18, so verification used the existing bundled Node 24 runtime. The Mac launcher detects a suitable runtime, including that installed bundle, without changing global settings.

- Default view: 44-symbol explorer with group filters, Unicode/English/Chinese search, a selected-symbol explanation, highlighted target in the transcription, and contextual playback where available.
- Comparison view: ten curated contrast groups, two sound panels, individual playback and sequential playback, plus Chinese guidance about what differs.
- Source view: word-versus-phrase explanation, per-file attribution, review status, reference links, and local setup help.
- Natural-speed default and pitch-preserving 0.8× playback; one shared Audio instance; playback stops on navigation or replacement.
- No quiz, review feature, localStorage use, account, microphone, telemetry, cloud API, or synthesized speech.

## Run locally

Double-click `Start IPA.command` in Finder, or with supported Node:

```sh
npm ci
npm run samples
npm run dev
```

The normal dev address is `http://127.0.0.1:5173/`. For the built app, run `npm run build` then `npm run preview`; normal address `http://127.0.0.1:4173/`. Stop previous servers before reusing their ports; strict-port behavior avoids silently opening a different address.

## Audio and content boundaries

`content/symbol-library.json` contains 44 draft display entries. Forty-three have mappings to contextual candidates; `/ʊə/` has no suitable candidate and explains its traditional/variable status. All 36 distinct source recordings from Association Shtooka / Judith Franck are now downloaded locally and passed checksum, decoding, and browser playback checks; some examples serve several sounds. These technical checks do not constitute pronunciation approval.

`content/local-preview-audio.json` records exact source pages and download URLs, licence, original-source SHA-1, acquired-file SHA-256 when available, format, changes, and review states. Media are original Ogg or Wikimedia-supplied MP3 derivatives. No local stretching, trimming, or synthesis was used. All human pronunciation reviews remain pending; no draft flags have been silently promoted.

Candidate files live in ignored `.local/audio/`, never `public/` or `dist/`. Vite dev/preview middleware serves only allowlisted files and returns an actual-availability list. The UI marks missing files; it never presents a dead player as verified audio. Both views work without network access once local samples are prepared. External source links require internet.

Wikimedia original-file requests encountered HTTP 429; advertised MP3 streaming derivatives were discovered via its `videoinfo` API. Acquisition was slowed to respect rate limits and resumed from verified existing files. Keep source formats and checksum records accurate if more samples are added. `npm run samples` is resumable; do not repeatedly hammer a rate-limited source.

A copied build or generic static host intentionally has no candidate audio. Publication requires an approved corpus, reviewed teaching mappings, and a deliberate release change. There is no remote, deployment, or project-wide source licence yet.

## Key files

| File | Responsibility |
| --- | --- |
| `src/main.ts` | Explorer, comparison, source views, and UI events |
| `src/library.ts` | Corpus access, search/filtering, comparison definitions |
| `src/audio.ts` | Single audio player, interruption, speed and error states |
| `src/style.css` | Responsive layout, focus styles, reduced motion |
| `vite.config.ts` | Local-only media allowlist and actual availability endpoint |
| `scripts/download-samples.mjs` | Candidate download with integrity verification |
| `tests/library.test.ts` | Inventory, mapping, transcription-target and review-state invariants |
| `docs/project/verification.md` | Actual checks and remaining limits |

## Git and continuation

Implementation branch: `work/first-listening-lesson` (created before the owner narrowed the scope). Intended integration target: `main`, by fast-forward after checks. Read Git for the actual current branch and commit. Preserve research and original seed files. Use the checkout lock and explicit-path staging protocol.

Next priorities are content quality, not additional features: complete expert review of the Chinese articulation cues and selected recordings; consider adding genuinely isolated British sound demonstrations where rights and quality permit; supply an appropriate `/ʊə/` reference or keep its limitation explicit; test with actual beginners. Do not label contextual audio as isolated sounds or imply technical decode/playback checks establish pronunciation accuracy.
