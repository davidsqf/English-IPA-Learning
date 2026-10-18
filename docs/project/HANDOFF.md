# Development handoff

Updated 2026-10-18, Asia/Singapore. Read `AGENTS.md` and the Git workflow first.

## Confirmed scope

A concise British English IPA explorer for Chinese-speaking beginners: learn each symbol through contextual pronunciation and compare similar sounds. No quizzes, review schedules, scores, accounts, learning records, microphone or analytics. Preserve functional labels and short cues; do not restore marketing introductions.

The owner accepted this version and explicitly requested full audio coverage, removal of WIP labels, dark mode, thorough testing, a push to `English-IPA-Learning`, and public hosting. This supersedes the original local-only restriction. The destination was verified as the owner's empty public repository `davidsqf/English-IPA-Learning`; GitHub Pages is the selected host.

## Published articulation media (v1.4)

Current task: `work/published-articulation-media`, planned integration into `main` by fast-forward after verification. The owner rejected made-up mouth animation and requested proper published images/video segments. This supersedes the v1.3 original SVG approach, retained only in Git history.

All 44 symbols now have authentic **whole** MRI or ultrasound + lip-camera recordings, original published posters and native manual playback in the explorer and comparison panels. 20 vowel-word clips are from the Southampton, England speaker in Dynamic Dialects; 22 consonant demonstrations are by Janet Beck in Seeing Speech; the two affricates use adult London STAR clips *cheap* and *hedged*. Each player exposes its original source, speaker, creators and reuse licence. The manifest includes exact URLs, hashes, bytes, metadata, target context and accent/variant notes. The generated anatomy/poses/interpolation have been removed.

The complete original media are copied unchanged under the publishers' explicit CC BY-NC-ND 4.0 terms. Preserve non-commercial, attribution and no-adaptation conditions and the additional ban on AI training, machine learning and automated transformation without prior written permission. Do not trim/reencode, trace, regenerate or synthesize these resources. No commercial rights or code licence were selected. See `THIRD_PARTY.md` and `docs/research/articulation-visuals.md` for the full source audit and all-44 matrix.

Videos remain paused on the original poster until activated, support native seeking/fullscreen, and pause when replaced/backgrounded. Video and word audio stop one another; comparison panels cannot play multiple clips together. /r/ maps to [ɹ], /ə/ uses *later*'s final vowel, traditional /ɪə eə ʊə/ carry honest regional/modern-variant labels. Neither imaging method directly shows airflow; clips are not time-aligned with the separate example recordings. Independent expert phonetics review is not claimed.

Local verification: 16 tests, all 37 recording hashes, all 88 new video/poster hashes, TypeScript and production build pass. FFmpeg fully decoded all 44 clips with no errors. Both Chrome/Pixel and WebKit/iPhone profiles loaded/played decoded frames, sought to the end, and received native `ended` for all 44; original posters and source mappings resolved. Both passed all eleven comparison mappings, video/video and video/word cancellation, and eight width/theme combinations without horizontal overflow. These are desktop-hosted browser profiles, not physical-device tests. All 264 word controls, native British speech/human recordings, QR, IME/theme/keyboard, failure/recovery and playback lifecycle checks also pass in both engines. Final MRI 2 files are 320×320 originals (copyright University of Strathclyde, 2022); no earlier MRI 1 or tongue-only consonant ultrasound files are shipped. Publication is pending; consult the verification report for the final deployment/asset audit.

## Release implementation

Vite 8 + vanilla TypeScript, semantic HTML/CSS and static JSON. Node 24 recommended, minimum 22.12. All 44 symbols have contextual examples from 37 bundled human recordings, shared where appropriate. All 37 human recordings ship in `public/audio/` and `dist/`; no middleware or runtime recording-source fetch is needed. Additional example-word reading uses the device/browser speech service, whose voice availability and network requirements vary. MP3 supports broad browser compatibility. The build verifies file integrity and complete coverage before bundling.

The explorer has group filters, IPA/English/Chinese search and highlighted targets. Eleven comparison presets support individual and ordered sequential playback, including the genuine three-symbol `/e æ aɪ/` group. Custom mode lets a learner choose any two distinct symbols with native selects. One shared playback controller coordinates a single Audio instance with device word speech, stops both on replacement/navigation and recovers from loading failures; normal speed is the only playback speed. Each selected symbol shows six word/IPA/gloss examples, individual speaker buttons and dictionary links, while each tile retains one preview word. Seventy example occurrences reuse the existing human recordings with accurate word/phrase labels; 194 use explicitly available British (`en-GB`) synthesized word speech. Prefer a local British voice; never silently fall back to a different accent. Missing voices produce a truthful message with a dictionary route. Speech is supplementary word reading, never an isolated IPA reference. Button labels/titles, status and the sources view identify synthesis. Eleven preset choices are wrapping buttons at every width; only the custom selectors use dropdowns. All Chinese cues and preset tips have `cueSourceIds` linked to named references; the editorial rationale is in `docs/research/pronunciation-cue-review.md`. The sources view includes per-file attribution and licence links. Footer “手机打开” shows a static, independently decoded QR for the public URL and a PNG download; retain its four-module white quiet zone and exact destination.

Mobile layouts use readable controls, touch targets, safe-area spacing and 16px search to avoid focus zoom on iOS. Chinese composition events are preserved. Both Safari/WebKit and Android/Chrome profiles are checked; do not claim physical-device testing without doing it.

Dark mode follows the system until a preference is selected with the top-right toggle. `localStorage` holds only that theme choice. Storage failure falls back to a working in-memory preference. A head script avoids a light flash for dark-mode visitors.

The traditional British dictionary model is non-rhotic, with normal dictionary `/r/` notation for the English approximant. `/ʊə/` uses *during* and explains modern variation. Do not present contextual recordings as isolated phonemes or claim all British accents use identical realizations. The owner accepted release; independent human expert phonetics review has not been performed or claimed. Original seed drafts remain preserved historical research.

## Run and verify

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

The Mac launcher `Start IPA.command` selects a suitable installed Node runtime and opens the site. No audio download is needed. `npm run samples` verifies shipped recordings; it does not fetch them. Local setup needs internet for initial dependencies, then the local site runs offline. Serve generated files over HTTP.

## Key files

| File | Responsibility |
| --- | --- |
| `src/main.ts` | Explorer, comparison, source views and UI events |
| `src/library.ts` | Corpus access, six-word search, comparison lookup and custom-pair validation |
| `content/comparisons.json` | Ordered two/three-symbol presets and sourced contrast tips |
| `content/pronunciation-sources.json` | References backing Chinese articulation guidance |
| `src/articulation.ts` | Published video/poster viewer, playback coordination and cleanup |
| `content/articulation.json` | 44 authentic video/poster mappings, original URLs, rights and hashes |
| `scripts/verify-articulation.mjs`, `tests/articulation.test.ts` | All-44 published media coverage, provenance and original-file integrity |
| `src/audio.ts` | Shared recording/speech controller, sequences, cancellation and recovery |
| `src/speech.ts` | Strict British device-voice selection; local voice preference |
| `public/website-qr.svg`, `public/website-qr.png` | Scannable website QR and printable/downloadable image |
| `scripts/generate-qr.py` | Optional QR authoring with ReportLab/Pillow, not runtime dependencies |
| `src/theme.ts` | System and persisted theme preference |
| `src/style.css` | Light/dark palette, responsive layout and accessible focus |
| `content/audio.json` | Exact sources, licences, transformations and checksums |
| `public/audio/` | All 37 distributed recordings |
| `scripts/verify-audio.mjs` | Complete coverage and shipped-file integrity gate |
| `tests/library.test.ts`, `tests/audio.test.ts` | Corpus, mappings, comparison/search and speech lifecycle invariants |
| `.github/workflows/pages.yml` | Test/build CI and Pages deployment |
| `docs/project/verification.md` | Actual release verification evidence and limits |

## Git and publication

Previous completed task branch: `work/word-audio-flat-comparisons`, integrated into `main` by fast-forward. Feature commit `2c5a40b` was pushed and deployed successfully through workflow `39099826503`. Local checks: 13 tests, integrity/type/build gates, all 264 word controls, 11 flat choices, 20 layout/theme combinations, native British speech, recorded playback, cancellation/retry, and independently decoded QR. WebKit/iPhone and Chrome/Android profiles both pass; these are macOS-hosted browser profiles using the host voice, not physical mobile tests. Both engines also passed all 264 word controls, eleven choices, recorded/synthesized native playback and responsive QR on the public site; both public QR files match the local hashes and the PNG independently decodes to the exact public URL. Consult the verification report and Git for the latest documentation commit. That earlier word/QR task is complete; the current articulation work is described above. Device voice availability and synthesis variants are the documented limitation. Read Git for the latest documentation commit and the verification report for detailed evidence. The release workflow publishes pushes to main; pull requests run tests/build without deployment. Do not force push or change the public audience without authorization.

Public URL: https://davidsqf.github.io/English-IPA-Learning/
Repository: https://github.com/davidsqf/English-IPA-Learning

Consult the verification report for actual publication evidence. No project-wide source-code licence was selected; preserve each audio file's CC BY or CC BY-SA terms. Keep private recordings, `.local/`, dependencies, generated output and credentials out of Git.
