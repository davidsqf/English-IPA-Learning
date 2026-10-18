# v1.1 enhancement verification

Date: 2026-10-18. Branch: `work/comparisons-six-examples`. The earlier release report is preserved below as historical evidence; its 0.8× speed checks describe the previous version, not the current product.

## Current checks

- `npm test`: six passing tests. Coverage includes 44 unique symbols, all 264 examples (six distinct words per symbol), target-containing transcriptions, one-word preview consistency, source-ID resolution, unchanged audio SHA-256, eleven valid presets and the exact three-symbol `/e æ aɪ/` group. Custom-pair validation checks all **1,892 distinct ordered pairs**, rejects duplicate/unknown selections, and search covers additional examples.
- `npm run build`: complete audio/integrity gate, TypeScript and Vite build pass. No new media or external runtime dependency was added. All playback is fixed at rate 1; speed UI and its state/styles were removed.
- **iPhone 15 / WebKit 26.6** and **Pixel 7 / installed Chrome** emulation: every one of the 44 tiles has exactly one preview word and opens exactly six word examples with matching highlights and source links. Both engines pass all eleven presets and 86 custom selector changes (43 choices on each side). The opposite selected symbol is disabled using its native HTML option property; all distinct combinations are covered separately by the data-level validation.
- In both engines, the three-way comparison plays **bed → a cat → a bike** to actual ended events, using one Audio instance at rate 1. A custom `/θ ð/` pair plays both recordings. Replacing the preset or navigating interrupts the remaining sequence. Touch-triggered playback also completes.
- Both themes checked at widths **320, 360, 390, 412, 844 and 1440** in each engine, including a landscape-sized viewport. Symbol, triple and custom comparison surfaces do not overflow horizontally. Mobile controls use native selects and the search text is 16px. Fifteen visible comparison controls meet at least 44×44 CSS-pixel hit areas; the custom selects measure 48px high in both engines.
- Visual review found Safari's original closed select was too compact despite `min-height`. Explicit height and custom closed-control appearance fixed this while preserving the native picker. Final mobile and desktop screenshots were inspected.
- Chinese composition events preserve the original input while composing and correctly commit “绵羊”; additional-word search, exact IPA search, keyboard operation and theme persistence pass in both engines.
- Normal browser runs report no failed requests or uncaught errors. A computed contrast check covers the three views in both themes in each engine; every checked text element passes its applicable contrast threshold. Results are recorded with QA artifacts.

QA scripts, full results and screenshots remain ignored in `.local/` and `output/playwright/`. This is real WebKit/Chromium execution with phone profiles and touch events, **not a claim of physical iPhone/Android testing**. Chinese guidance was checked against named articulation/notation sources; see [the editorial review](../research/pronunciation-cue-review.md). Source checks do not claim an independent expert evaluation of recorded speech. Existing local audio remains one recorded example per symbol; the six word examples include dictionary pronunciation links.

## Publication

Feature commit `18f5bf29f3ec5e58e5ce0f0204805fadd95834e5` was pushed to main. [GitHub workflow 39097005099](https://github.com/davidsqf/English-IPA-Learning/actions/runs/39097005099) passed clean installation, tests, build and Pages deployment.

On the public [website](https://davidsqf.github.io/English-IPA-Learning/), both WebKit/iPhone and Chrome/Android profiles checked all 44 symbol selections for six words and the single preview word. Both confirmed `/e æ aɪ/` plays **bed → a cat → a bike**, custom `/e æ/` plays both words, rate is 1, source links are exposed, and mobile content does not overflow. Both reported zero failed requests and zero uncaught errors. GitHub main matched the local feature commit. Audio files are unchanged from the prior verified release. No site audience or source-code licence was changed. Final documentation updates do not alter the application or media.

---

# Release verification

Date: 2026-10-18, Asia/Singapore. Runtime: Node 24.19.0; browser: installed Google Chrome driven by Playwright CLI. Tests exercise the built static website, not only the development server.

## Automated checks completed

- `npm test`: four tests pass. Coverage includes 44 unique symbols and group boundaries (12/8/24); every symbol's target transcription and recording reference; shipped-file SHA-256; all ten comparisons' two distinct playable entries; exact/unwrapped IPA, colon aliases, English/Chinese search and empty results.
- `npm run build`: audio coverage/integrity gate, TypeScript and Vite build pass. All 37 MP3 files are included in `dist/audio/`.
- Missing-file and corruption probes both fail the audio gate as intended; originals restored afterward and the full build rerun successfully.
- All 37 complete MP3 files decode with ffmpeg without errors.
- `git diff --check`: passes before release commit.

## Browser behavior completed

- Individual playback checks exercise all 44 symbols (22 on the local preview, 22 on a plain static server under `/English-IPA-Learning/`); actual media playback reaches `ended`, with correct highlighted targets and no missing-audio controls.
- All ten sequential comparisons play both recordings to completion (20 ended events). The mobile comparison selector works for all ten choices; “查看音标” returns to the selected sound.
- One Audio instance is created. 0.8× playback uses `preservesPitch = true`. Replacement, selection changes and navigation cancel current playback. Simulated network failure clears active controls and the next retry plays normally.
- Four group filters and five representative search cases pass through normal UI interactions.
- Both themes and all three views checked at 320, 390, 768 and 1440 pixel widths: 24 combinations, no horizontal overflow. Screenshots reviewed for desktop explorer and mobile explorer/comparison.
- Theme toggling works by keyboard and persists across reload. Fresh visitors follow system dark/light changes. A browser context with blocked storage still loads and toggles normally.
- A computed text-contrast check covers visible direct text in all three views in both themes. One light-mode selected category count initially measured 4.39:1; it now inherits the selected foreground colour and all checked text passes the relevant 4.5:1 or 3:1 threshold. This check does not constitute a complete accessibility audit.
- No trial marks, missing-download prompts or removed promotional headings appear in any view. The normal UI test reports no uncaught browser errors or external runtime requests. Deliberately aborted audio requests are confined to the recovery test.

Browser evidence and QA scripts are retained in ignored `.local/` and `output/playwright/`. Public-host checks are recorded below. Do not infer expert review from technical checks.

## Publication checks

GitHub authentication and the target `davidsqf/English-IPA-Learning` were verified; it was an empty public repository before the first push. GitHub Pages was enabled with the `workflow` build type and public audience. The release workflow runs clean installation, tests, audio verification, type checking, build and artifact deployment. Release commit `b5c055d26905f7b904096974e9f418eb0de0aae9` was pushed to main. [Workflow run 39094160464](https://github.com/davidsqf/English-IPA-Learning/actions/runs/39094160464) completed successfully: clean `npm ci`, tests, build, artifact upload and Pages deploy all passed.

The public [website](https://davidsqf.github.io/English-IPA-Learning/) returned HTTP 200 without authentication. All 37 hosted MP3 files were fetched and matched their manifest SHA-256 checksums. Live Chrome checks confirmed 44 symbols, completed individual playback for `/ɪ/`, `/ʊə/` and `/ʒ/`, a sequential comparison, persisted theme toggling, and the mobile comparison selector. No failed requests or uncaught errors were reported. GitHub's Pages settings confirmed public visibility, workflow builds and enforced HTTPS. Local main and origin/main matched after publication.

These final documentation updates do not change application or media files.

## Scope of evidence

Recorded speech is contextual word/phrase audio, not isolated phonemes. Source metadata and conventional British dictionary mappings were checked, including the additional UK *during* recording for traditional `/ʊə/`. No independent expert phonetics review, real beginner study, physical mobile-device test or Safari/Firefox session is claimed. Responsive and browser-storage cases use separate Chrome contexts. Original seed drafts are historical research and are not the runtime release status.
