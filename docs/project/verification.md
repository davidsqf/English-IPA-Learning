# v1.3 articulation visual verification

Date: 2026-10-18, Asia/Singapore. Task branch: `work/articulation-visuals`. Earlier reports below are historical; their feature counts and limitations describe their respective versions.

## Objective coverage

The owner requested a picture or animation showing mouth shape, tongue and movement for **each symbol**, with credible sources. The existing inventory has 44 symbols. Runtime data supplies exactly 44 entries and 120 explicit phases; each is rendered as original frontal lip and sagittal tongue illustrations in the explorer and comparison panels, with an initially meaningful still, a finite animation and numbered manual phases. Every figure exposes its own source links and notes. The source review/matrix maps all 44 entries to Cambridge phonetics references and, where appropriate, Glasgow Seeing Speech and contemporary British-variation guidance.

## Evidence

- `npm test`: **20 passing tests**, including seven articulation tests. They require exact 44-symbol coverage, valid source IDs/cues/phases, real finite coordinates, distinct vowel height/frontness/rounding, eight correct diphthong endpoint families, oral articulation versus voicing contrasts, nasal/lateral/glottal airflow distinctions, affricate release into friction and English approximant [ɹ]. Existing audio, example, comparison, search and speech lifecycle checks still pass.
- `npm run build`: original 37-recording SHA-256/coverage gate plus the new **44-articulation** integrity/source gate, TypeScript and Vite pass. All graphics are local inline SVG, with no new runtime dependency or externally loaded image/video. Original source PDFs and QA galleries remain ignored and are not part of the distributed site.
- In both **WebKit 26.6 / iPhone 15 profile** and **installed Chrome / Pixel 7 profile**, all **44 selected symbols** render two labelled SVG views, six existing voice buttons and at least two actual source links. All **120 manual phases** render finite SVG paths and exactly one selected step. No SVG syntax errors or uncaught errors remain. Early SVG path-number separators were fixed before these passing checks; a private gallery favicon 404 was also corrected and is not an app defect.
- Every one of the **44 full animations completes in each engine** (88 complete plays), with multiple distinct sampled path/lip geometries and the correct final phase. Both engines resolve every marker ID, map all eleven presets to the correct two/three diagrams, and cancel motion when document visibility is simulated as hidden. Pause, manual steps, selection/navigation cancellation, and reduced-motion static stepping also pass. This is actual browser execution, not just a data assertion.
- Explorer diagrams, accessible SVG names, source disclosures and control sizes pass at **320, 390, 412, 768, 1024 and 1440 CSS pixels**, in both themes, in both engines, using two representative complex entries (24 cases per engine). Comparison diagrams pass twelve width/theme cases per engine, including triple and custom panels. No horizontal overflow; tested articulation controls meet 44×44 CSS pixels.
- All 44 default articulation diagrams were rendered in contact sheets and visually inspected. Additional phone/desktop screenshots check /ɪ/, /k/, /l/, /ŋ/, /aɪ/ and the three-vowel comparison. Source anatomy, British RP vowel and diphthong diagrams were inspected from the publisher PDF, not inferred from filenames. SVG tongue text initially measured **4.26:1** against its dark-mode tongue fill; the corrected text colour measures **5.61:1**. The diphthong movement label was moved clear of the tongue/jaw outline after screenshot review. Motion is pedagogical and not measured or synchronized to the recordings.
- The complete existing 264 word-control mapping/dispatch check, eleven flat choices, QR disclosure, real recorded playback and native British word speech were rerun in Chrome after adding the figures. No regression or uncaught errors were reported. Safari also completes native British word speech and human recorded playback, cancels an active animation when reduced motion is enabled, and restores the figure after a simulated persisted pageshow. Final tongue-label contrast is 6.01:1 in light mode and 5.61:1 in dark mode.

QA scripts/screenshots and private source-inspection files are ignored in `.local/` and `output/playwright/`. Browser profiles use macOS engines and host voices; this is **not physical phone testing, a clinical model, an independent expert phonetics review or a beginner usability study**. Figures are original schematic illustrations, not reproduced publisher/university media. British variation and source boundaries remain explicit, including modern /uː/, traditional centring diphthongs, [ɹ], and clear/dark /l/.

## Publication

Local implementation and checks complete; deployment and final live verification follow the feature commit.

---

# v1.2 word playback, comparisons and QR verification

Date: 2026-10-18, Asia/Singapore. Branch: `work/word-audio-flat-comparisons`. Earlier reports below describe earlier releases and are preserved as historical evidence.

## Current checks

- `npm test`: 13 tests pass, including seven new word-speech tests for explicit British voice selection, preference for local voices, asynchronous voice discovery, late callback cancellation, absent British voices, absent speech API, navigation, errors/retry and load timeout. Normal completion must not call `cancel()`: doing so caused WebKit to emit a spurious canceled error after the end event; the implementation and regression check address that actual finding. Existing corpus, recording integrity and comparison checks still pass.
- `npm run build`: all 37 unchanged bundled human MP3 files pass integrity and complete primary-symbol coverage, all example recording mappings are validated, and TypeScript/Vite pass. The additional word readings use the device/browser speech API, not newly distributed audio or an external app dependency.
- Both **WebKit 26.6 / iPhone 15 profile** and **installed Chrome / Pixel 7 profile** inspect all **264 speaker controls**. All 70 recorded occurrences reference the matching actual transcript. All 194 other occurrences dispatch exactly the example word, never IPA, with an available `en-GB` voice and rate 1. These complete dispatch-mapping checks instrument the speech call; they are separate from the following native playback checks.
- Both engines produce native speech **start and end events** for **cake, rain and name**, using host macOS's local Daniel (`en-GB`) voice, without speech errors. Recorded primary playback and the three-word comparison also complete. Real playback can interrupt speech and vice versa without overlap. Navigation cancels playback; a simulated US-only voice list produces the intended missing-British-voice message and clears the active control, and restoring a British voice allows retry. No uncaught page errors are reported.
- All **11 recommended choices remain directly visible as buttons**. Each selects its correct two/three panels and one pressed choice. Native custom selectors still produce two distinct-symbol panels.
- Comparison surfaces and the QR disclosure pass **320, 390, 412, 768 and 1440 CSS-pixel widths in both themes in both engines** (20 layout combinations overall). No horizontal overflow, hidden preset buttons, clipped QR panels or undersized word controls; speaker buttons are at least 44×44. Phone and desktop screenshots were inspected. The QR disclosure is keyboard-operable.
- A computed text-contrast check of all three views in light/dark mode passes its applicable thresholds in Chrome; screenshots were also inspected. This is not a complete accessibility audit.
- `public/website-qr.png` (328px, four-module quiet zone, M correction) and both engines’ rendered QR screenshots independently decode with **ZXing-C++ 3.1.1** to exactly `https://davidsqf.github.io/English-IPA-Learning/`. The SVG is shown with a white background even in dark mode and a PNG download is available.

Browser QA scripts, logs, source-acquisition experiments and screenshots remain ignored in `.local/` and `output/playwright/`. Tests use actual engines on macOS with emulated phone viewports/touch input; **physical phones and their installed voices have not been tested**. Voice availability, synthesis quality and some pronunciations vary by device/browser. No independent expert phonetics review is claimed. All 44 primary human reference recordings remain available regardless of device voice installation.

## Publication

Feature commit `2c5a40b021931a2eac0a9389108059ff674e4a30` was fast-forwarded into `main` and pushed. [Workflow 39099826503](https://github.com/davidsqf/English-IPA-Learning/actions/runs/39099826503) passed clean installation, all 13 tests, integrity/type/build checks and Pages deployment.

On the public [website](https://davidsqf.github.io/English-IPA-Learning/), both WebKit/iPhone and Chrome/Android browser profiles pass the same 264 word-button dispatch/mapping checks, all eleven flat choices, custom panels, triple recorded sequence, ten layout/theme cases per engine, QR disclosure, native Daniel speech start/end for cake/rain/name, and recorded primary playback. Both report zero uncaught page errors and no native speech errors. The public SVG/PNG both return HTTP 200 and exactly match local SHA-256; ZXing independently decodes the public PNG to the correct URL. Recordings remain unchanged from the earlier checked release.

Final documentation updates record these completed checks without changing the app or media. Read Git for the current documentation commit.

---

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
