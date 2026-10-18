# Development handoff

Updated 2026-10-18, Asia/Singapore. Read `AGENTS.md` and the Git workflow first.

## Confirmed scope

A concise British English IPA explorer for Chinese-speaking beginners: learn each symbol through contextual pronunciation and compare similar sounds. No quizzes, review schedules, scores, accounts, learning records, microphone or analytics. Preserve functional labels and short cues; do not restore marketing introductions.

The owner accepted this version and explicitly requested full audio coverage, removal of WIP labels, dark mode, thorough testing, a push to `English-IPA-Learning`, and public hosting. This supersedes the original local-only restriction. The destination was verified as the owner's empty public repository `davidsqf/English-IPA-Learning`; GitHub Pages is the selected host.

## Articulation visuals (v1.3)

Completed task: `work/articulation-visuals`, fast-forwarded into `main`. Feature commit `9d4cd31` was pushed and deployed successfully through GitHub workflow `39104165853`. The owner requested a picture or animation of mouth shape, tongue and movement for **every symbol**, with credible references.

All 44 symbols now have original SVG lip/front and tongue/side illustrations, in both the explorer and two/three-symbol comparisons. `content/articulation.json` holds 35 original schematic poses and 120 explicit phases, with per-entry lip/tongue/movement cues, source IDs, source-page notes and variants. The side view faces right. Nasals show an open nasal route with oral closure, /l/ shows lateral airflow, /h/ has a glottal focus, and /r/ depicts approximant [ɹ]. Diphthongs have a directional tongue arrow plus continuous interpolation. The figures show relative teaching positions, not traced publisher images, measured MRI, clinical precision or identical anatomy across British speakers.

Visuals are initially still, have finite play/pause and numbered phases, and switch to manual static steps for reduced motion. Dispose motion when switching/navigating and when the page becomes hidden; restore bindings after bfcache restoration. References appear under **图示依据**. The source review and all 44 mappings are in `docs/research/articulation-visuals.md`. These graphics need no network, new runtime dependency or third-party media embedding. Existing audio is unchanged and not represented as time-aligned with the schematic motion.

Current verification: 20 unit/content tests, the recording integrity gate, the new 44-visual coverage gate and TypeScript/Vite build pass. All 120 phases and all 44 full animations were exercised in both WebKit/iPhone and Chrome/Android profiles; manual source links, finite motion/pause, reduced motion, comparison mapping and responsive layouts were checked. Source-based visual review is distinct from an independent expert phonetics assessment. On the public site, both engines verify all 44 figures, all 120 manual phases, source disclosures, all eleven preset mappings, all 44 final published animations per engine, human and synthesized playback, and the QR. No uncaught errors or failed requests are reported. Hosted JavaScript/CSS SHA-256 match the verified local build exactly. See the current verification report for exact evidence and limits. The requested articulation feature is complete; no required feature work remains.

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
| `src/articulation.ts` | Original SVG front/side diagrams, movement, manual phases and cleanup |
| `content/articulation.json` | All 44 sourced articulation entries and 120 phases |
| `scripts/verify-articulation.mjs`, `tests/articulation.test.ts` | Complete visual/source coverage and physiology/geometry invariants |
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
