# Development handoff

Updated 2026-10-18, Asia/Singapore. Read `AGENTS.md` and the Git workflow first.

## Confirmed scope

A concise British English IPA explorer for Chinese-speaking beginners: learn each symbol through contextual pronunciation and compare similar sounds. No quizzes, review schedules, scores, accounts, learning records, microphone or analytics. Preserve functional labels and short cues; do not restore marketing introductions.

The owner accepted this version and explicitly requested full audio coverage, removal of WIP labels, dark mode, thorough testing, a push to `English-IPA-Learning`, and public hosting. This supersedes the original local-only restriction. The destination was verified as the owner's empty public repository `davidsqf/English-IPA-Learning`; GitHub Pages is the selected host.

## Beginner teacher videos (v1.5)

Feature branch `work/british-teaching-videos` was fast-forwarded into `main` as **`76bd5aa0e76d8cec1b977045c1cff6625e6cb79f`**, pushed and deployed by successful [workflow 39110976922](https://github.com/davidsqf/English-IPA-Learning/actions/runs/39110976922). Release-audit branch `work/teacher-video-release-audit` records the completed checks and is integrated by fast-forward. The owner found MRI too difficult and requested clearer British English teaching videos with a real person's mouth movements and tongue-placement explanations. This supersedes the v1.4 MRI/ultrasound runtime and the v1.3 invented schematics; both are retained only in Git history.

`content/articulation.json` schema 3 maps all 44 symbols to 68 original creator chapter ranges across seven videos. Twenty vowels use Pronunciation with Emma's British RP/Modern RP vowel teaching. Consonants pair BBC British **口形示范** with Billie English **舌位讲解**, because a sound model alone does not explain placement. The two functional modes remain visible; Chinese cues, six words, all 264 word buttons, eleven flat comparisons, custom pairs, themes and QR are preserved. No quiz or review is added.

The teaching player is loaded after a learner clicks; no external script/frame/image is requested beforehand. Original videos stream through the creator-enabled privacy-enhanced YouTube player with branding/controls/ads/captions intact. No video, soundtrack, thumbnail or caption file is downloaded, altered or rehosted. Internet/YouTube access is now required for teaching, while bundled human word references remain independent. See `THIRD_PARTY.md` and `docs/research/articulation-visuals.md` for exact attribution, chapter mappings, quality limits and provider permissions. The 88 old imaging assets are removed from the current build; their historical licences remain in Git history. No code licence is added.

`src/teaching-player.ts` owns official API loading and range parameters. `src/articulation.ts` owns source/mode rendering, cancellation while loading, one active lesson, word/video coordination, error/blocked recovery, replay, source links and navigation/background cleanup. Do not restore native-video/MRI checks as if they verify teaching videos. `scripts/verify-articulation.mjs` gates all-44 demonstration and explicit placement coverage, official creator identity and valid creator chapter ranges. Availability/suitability still require actual browser checks.

Completed local checks: 16 tests, all 37 human recording hashes, schema-3 coverage/provenance, TypeScript and production build pass. Chrome/Pixel and WebKit/iPhone profiles each exercise all 68 teaching ranges with decoded/advancing footage and section stopping, 13 lifecycle/recovery checks, all 264 word controls, actual British speech/human recordings, eleven flat presets/custom pairs, QR, Chinese IME, keyboard/search/theme persistence and 56 teacher-layout cases. All 68 source views and representative phone layouts were visually inspected. Safari width overflow was found and fixed; narrow desktop comparison columns stack to retain the official player minimum. Whole-file ending flags differ for two provider sections; targeted checks prove time freezes at the actual file end. These are host browser profiles, not physical phones or independent expert review. See the verification report for exact evidence. Public release checks are complete in both engines: all 68 teaching choices, all 264 word controls, eleven presets/custom pairs, QR and 13 lifecycle/recovery checks. One Safari preroll caused an initial /b/ placement timeout; a targeted normal-player retry verifies actual content and the chapter ending. All 41 public app/audio/QR assets match the local SHA-256 values, and ZXing independently decodes the QR to the exact website URL. The goal is achieved; consult the verification report and Git for the latest documentation commit.

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

The Mac launcher `Start IPA.command` selects a suitable installed Node runtime and opens the site. No audio download is needed. `npm run samples` verifies shipped recordings; it does not fetch them. Local setup needs internet for initial dependencies, then the local interface and word recordings work offline, while teaching videos require internet/YouTube access. Serve generated files over HTTP.

## Key files

| File | Responsibility |
| --- | --- |
| `src/main.ts` | Explorer, comparison, source views and UI events |
| `src/library.ts` | Corpus access, six-word search, comparison lookup and custom-pair validation |
| `content/comparisons.json` | Ordered two/three-symbol presets and sourced contrast tips |
| `content/pronunciation-sources.json` | References backing Chinese articulation guidance |
| `src/teaching-player.ts` | Official privacy-enhanced YouTube API and player parameters |
| `src/articulation.ts` | Teacher modes, click-to-load playback, range replay, cancellation and source links |
| `content/articulation.json` | 44 targets, 68 creator chapter ranges, placement targets and embed provenance |
| `scripts/verify-articulation.mjs`, `tests/articulation.test.ts` | All-44 real-teacher/placement coverage, creator identity and chapter bounds |
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
