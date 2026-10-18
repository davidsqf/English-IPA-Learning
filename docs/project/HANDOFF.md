# Development handoff

Updated 2026-10-18, Asia/Singapore. Read `AGENTS.md` and the Git workflow first.

## Confirmed scope

A concise British English IPA explorer for Chinese-speaking beginners: learn each symbol through contextual pronunciation and compare similar sounds. No quizzes, review schedules, scores, accounts, learning records, microphone or analytics. Preserve functional labels and short cues; do not restore marketing introductions.

The owner accepted this version and explicitly requested full audio coverage, removal of WIP labels, dark mode, thorough testing, a push to `English-IPA-Learning`, and public hosting. This supersedes the original local-only restriction. The destination was verified as the owner's empty public repository `davidsqf/English-IPA-Learning`; GitHub Pages is the selected host.

## Release implementation

Vite 8 + vanilla TypeScript, semantic HTML/CSS and static JSON. Node 24 recommended, minimum 22.12. All 44 symbols have contextual examples from 37 bundled human recordings, shared where appropriate. All audio ships in `public/audio/` and `dist/`; no middleware or runtime source fetch is needed. MP3 supports broad browser compatibility. The build verifies file integrity and complete coverage before bundling.

The explorer has group filters, IPA/English/Chinese search and highlighted targets. Eleven comparison presets support individual and ordered sequential playback, including the genuine three-symbol `/e æ aɪ/` group. Custom mode lets a learner choose any two distinct symbols with native selects. One shared Audio instance stops on replacement/navigation and recovers from loading failures; normal speed is the only playback speed. Each selected symbol shows six word/IPA/gloss examples and dictionary links, while each tile retains one preview word. All Chinese cues and preset tips have `cueSourceIds` linked to named references; the editorial rationale is in `docs/research/pronunciation-cue-review.md`. The sources view includes per-file attribution and licence links.

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
| `src/audio.ts` | Single audio player, ordered sequences, interruption and error states |
| `src/theme.ts` | System and persisted theme preference |
| `src/style.css` | Light/dark palette, responsive layout and accessible focus |
| `content/audio.json` | Exact sources, licences, transformations and checksums |
| `public/audio/` | All 37 distributed recordings |
| `scripts/verify-audio.mjs` | Complete coverage and shipped-file integrity gate |
| `tests/library.test.ts` | Inventory, mapping, comparison and search invariants |
| `.github/workflows/pages.yml` | Test/build CI and Pages deployment |
| `docs/project/verification.md` | Actual release verification evidence and limits |

## Git and publication

Current enhancement branch: `work/comparisons-six-examples`, intended integration to `main` by fast-forward after validation. Previous release `b5c055d` and verification commit `f05531e` were deployed successfully. This enhancement updates the existing public site after checks; use Git for the actual commit and the verification report for current evidence. The release workflow publishes pushes to main; pull requests run tests/build without deployment. Do not force push or change the public audience without authorization.

Public URL: https://davidsqf.github.io/English-IPA-Learning/
Repository: https://github.com/davidsqf/English-IPA-Learning

Consult the verification report for actual publication evidence. No project-wide source-code licence was selected; preserve each audio file's CC BY or CC BY-SA terms. Keep private recordings, `.local/`, dependencies, generated output and credentials out of Git.
