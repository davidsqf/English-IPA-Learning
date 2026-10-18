# v1.6 real frontal mouth photograph verification

Date: 2026-10-18, Asia/Singapore. Task branch: `work/front-mouth-photos`. Reports below describe earlier versions.

## Requirement and source evidence

The owner requests a **real front-camera mouth image for every symbol alongside the existing YouTube segment**, excluding ultrasound. There are **44 unique local JPEGs** mapped to the unchanged 44-symbol British inventory. They are full camera frames from the UCL MaFI British B1 word recordings, with a CSS mouth enlargement and a link to each full photograph. The existing 68 creator teaching ranges remain intact in both exploration and comparisons.

The [source review and all-44 matrix](../research/front-mouth-photos.md), manifest and `THIRD_PARTY.md` record the repository's explicit still-frame teaching permission under CC BY 4.0, named authors, British B1 speaker context and published photo consent. Source-word/member, timestamp/frame index, original-video hash/CRC and distributed JPEG hash/size/dimensions are traceable. No generated mouth, ultrasound/MRI, American corpus or YouTube screenshot is used. Only selected ZIP members were acquired and checked against their archive-directory CRC; the entire archive is not claimed as hash-verified.

Seven candidate frames per source word were visually inspected, followed by all 44 selected crops. Four early consonant frames were moved to clearer active positions during visual review and inspected again. This is a contextual word-photo selection, not a claim that a still can reveal every internal tongue position/voicing distinction, the whole course of a diphthong or an independently certified isolated phoneme. Those limits, exact word context and existing traditional vowel variation remain explicit.

## Local evidence

- **18 tests pass**. Photo tests cover all 44 mappings, British B1 provenance, safe local-image HTML, accessible full-frame links and attribution, in addition to retained teaching/corpus/comparison/search/speech tests.
- All 44 shipped JPEG hashes also match a separate extraction by explicit source-frame index, verifying the recorded timestamps/frame provenance.
- Build passes the **44-photo SHA-256/byte/JPEG-dimension gate**, original 37 recording hashes, unchanged all-44/68 creator-video coverage/provenance, TypeScript and Vite. No dependency was added. Source JPEGs retain their actual 1280×720 or 1920×1080 sizes; the crop uses proportional reference coordinates. `git diff --check` passes.
- Chrome/Pixel 7 and WebKit/iPhone 15 profiles each select **all 44 entries** and decode the correct photograph with matching native dimensions, source-word alt text, full-photo URL and per-image word/time/CC BY credit. All eleven preset groups map to the expected two/three photos; custom /ʃ θ/ selection also passes. Each engine actually opens and closes an intact full-frame image in its own new tab.
- Both engines pass **14 width/theme combinations** (320/390/412/768/844/1024/1440 × light/dark), covering the explorer, triple comparison and custom pair, with no horizontal overflow or clipped mouth viewport. Phone screenshots and the complete selected-photo galleries were visually inspected. All images stay local and no external requests/frames occur before lesson activation.
- Existing-feature regression passes in both engines: **264 word controls** (70 recorded occurrences / 194 strict British device-speech requests), all eleven flat choices/custom pairs, responsive QR, actual host British Daniel speech for *cake/rain/name*, a human recording and the triple recording sequence. Thirteen real video integration checks pass per engine: load-on-click, keyboard mode switching, bounded replay, word/video interruption, exclusive three-panel playback, background pause, navigation/pagehide cleanup, SDK failure/retry and pending-load cancellation. Existing video/word controllers are unchanged by this task.

These are macOS-hosted browser profiles, not physical phones or independent expert phonetics review. The local photo assets work without YouTube; teaching videos retain their internet/provider/advertising limitations. Public verification is recorded below.

## Public release audit

Feature commit **`c1922529e05968e481b612f017a1a824ab2c4284`** was fast-forwarded to `main`, pushed to the authorized repository and deployed by successful [workflow 39124461424](https://github.com/davidsqf/English-IPA-Learning/actions/runs/39124461424).

On the public website, Chrome/Pixel and WebKit/iPhone each decode **all 44 final photographs** with correct dimensions, alt/word mapping, word/time/licence source disclosures and working full-frame image links. All eleven comparison mappings/custom pair, 14 photo layout/theme sets per engine, zero pre-activation external requests, all 264 word controls, real British speech/human recording/triple sequence, QR and 13 teacher-video lifecycle/recovery checks pass again. No uncaught application exceptions were reported.

A separate HTTP audit retrieves **85 public assets**: all 44 photographs, all 37 recordings, both QR files and the compiled JavaScript/CSS. Every request succeeds and every SHA-256 matches the final local manifest/build; the public HTML references the matching bundle names. This establishes that the tested real photos, rather than placeholders or stale files, are delivered. The final documentation/agent-rule clarification changes no application file or image.

The full requested state is verified: a real frontal mouth picture for every symbol alongside its retained YouTube teaching segment, with credible source/permission and no ultrasound or generated anatomy. The recorded word-photo context and limits of frontal stills remain explicit.

---

# v1.5 beginner British teacher-video verification

Date: 2026-10-18, Asia/Singapore. Task branch: `work/british-teaching-videos`. Earlier reports below describe superseded releases.

## Requirement and source audit

The owner rejected MRI as too difficult and asked for clearer British English teaching videos showing a real person's mouth movements and explaining tongue placement. All **44 existing symbols** now have real-teacher demonstration and placement coverage: 20 vowels in Pronunciation with Emma's British vowel lesson, and 24 consonants with separate BBC **口形示范** and Billie English **舌位讲解** modes. The manifest contains **68 original chapter ranges across seven videos**. No phoneme, quiz or review workflow was added.

The [source audit](../research/articulation-visuals.md) records the original creator/channel identities, published chapter lists, placement content, traditional vowel variants, /r/ → [ɹ] and source limitations. All seven creator watch pages reported embedding enabled. Original teacher footage for all 68 mapped ranges was inspected in rendered screenshot galleries: Emma's real mouth/face; BBC frontal/side close-ups; Billie's prominent 2024 presenter and two older presenter-inset placement lessons. The latter retain the separate large-mouth BBC mode. This is source/technical inspection, not independent expert phonetics review, full-length listening or a beginner usability study.

Only official creator-enabled YouTube embedding is used, under the provider's embedding terms. No video, soundtrack, thumbnail or subtitle file is downloaded, modified or rehosted. All 88 superseded MRI/ultrasound files are removed from the current build; their historic licence records remain in Git. Videos require internet/YouTube access; bundled word recordings remain independent.

## Local verification

- **16 tests pass**, including exact all-44 demonstration/placement coverage, critical chapter mappings, traditional variants, source identity/permission, click-to-load HTML and existing word/corpus/comparison/search/speech lifecycle tests.
- `npm run build` passes all **37 human recording hashes**, all-44 / 68-range provenance and coverage, TypeScript and the production build. No runtime dependency was added. `git diff --check` passes.
- Installed Chrome/Pixel 7 and WebKit/iPhone 15 profiles exercise **all 68 lesson choices each**: the expected creator ID and published start/end, actual decoded frames with nonzero dimensions, advancing native content time and section stopping. Sixty-six chapter boundaries emit the official ended state in both engines. At two whole-file endings (/h/ placement and BBC /j/), the source ends at 717.6 / 4542.501 seconds while the published integer bounds round upward: the native provider flags differ between engines. Targeted checks verify the final decoded frame/time stops and remains frozen rather than advancing beyond the lesson; these are recorded distinctly, not claimed as native `ended` events in WebKit.
- Both engines exercise all **264 word controls**: 70 correctly mapped human-recording occurrences and 194 explicitly British (`en-GB`) speech requests at normal speed. Actual *cake*, *rain*, *name* speech emits start/end with host British Daniel; a bundled human recording and the three-symbol sequence finish. All eleven flat choices, custom pairs, responsive QR disclosure, Chinese IME, exact IPA/additional-word search, keyboard mode selection and persisted theme pass.
- Teacher layout checks cover **56 cases per engine**: 320/390/412/768/844/1024/1440 CSS pixels × both themes × two explorer entries/two comparison configurations. No horizontal overflow remains and the video area stays at least 200×200. A Safari aspect-ratio minimum-size overflow was found and fixed with explicit width/min-width constraints; narrow desktop comparison columns now stack. Source disclosures and two-mode controls remain readable. Phone screenshots were visually inspected.

Both engines also pass 13 integration checks: no remote player requests before a click, keyboard mode replacement, selected-range replay, recorded/synthesized word interruption, teacher playback cancelling device speech, simulated background pause, exclusive three-panel playback, comparison-sequence interruption, navigation cleanup, deliberately blocked SDK recovery with independent word playback, cancellation while the SDK is held pending, and pagehide cleanup. No uncaught application exceptions were reported. The public release audit follows below. Desktop-hosted mobile profiles use host voices; they are not physical phone tests. YouTube may display ads, consent prompts, unavailable captions or regional restrictions; provider diagnostics are separate from application exceptions. A truthful retry/original-creator route remains available.

## Public release audit

Feature commit **`76bd5aa0e76d8cec1b977045c1cff6625e6cb79f`** was fast-forwarded to `main`, pushed to the authorized repository and deployed successfully by [GitHub workflow 39110976922](https://github.com/davidsqf/English-IPA-Learning/actions/runs/39110976922). The public HTML references the final compiled filenames; an HTTP audit fetches **41 public assets** (JavaScript/CSS, all 37 bundled word recordings and both QR files) and every SHA-256 matches the final local build. The PNG QR independently decodes with ZXing to exactly `https://davidsqf.github.io/English-IPA-Learning/`.

On the public site, Chrome/Pixel and WebKit/iPhone each pass all **68 lesson choices** with actual decoded/advancing teacher footage, exact creator/range selection and stopped chapter/file endings. The first Safari run passes 67; its /b/ placement attempt encounters a preroll ad and times out. A targeted retry waits for actual content (including the provider's normal Skip control when offered), explicitly rejects the ad state, and confirms correct Billie footage, advancing time and the 92-second chapter stop. The 67+1 results are retained distinctly rather than claiming an uninterrupted perfect initial run.

Both public engines also pass the 13 lifecycle/recovery checks and the complete **264 word-control** / eleven flat-choice / custom-pair / QR regression, including three real British speech completions, a human recording and triple sequence. Phone views of both BBC mouth demonstration and Billie placement teaching are inspected in light/dark mode at 390×844; actual teacher content fits a 296×200 player without overflow. Advertising remains the original provider's behavior and is not removed or bypassed.

The requested replacement is complete for all 44 symbols. These browser checks establish source mapping, actual playback and existing-feature preservation; they do not establish physical-device results, independent phonetics certification or future YouTube availability. The release-audit follow-up changes documentation only; its app/media hashes remain identical.

---

# v1.4 published articulation media verification

Date: 2026-10-18, Asia/Singapore. Task branch: `work/published-articulation-media`. Earlier reports below are historical and describe the previous original SVG implementation and earlier features.

The owner's request is to replace fabricated mouth movement with proper published pictures/videos while preserving all 44 symbols. Runtime geometry, poses and interpolated SVG motion are removed. There are 44 distinct original MP4s and 44 original published PNG/JPEG posters. Exact source-player links, original asset URLs, speaker/accent, target context, licence, SHA-256, bytes, duration, resolution and codecs are recorded in `content/articulation.json`. The source review and all-44 matrix are in `docs/research/articulation-visuals.md`.

## Local evidence

- `npm test`: **16 tests pass**. Coverage includes complete/distinct authentic media mapping, exact vowel lexical-set contexts, /r/ → [ɹ], affricate whole-word contexts, accessible native controls/no autoplay, attribution and absence of invented anatomy, plus existing corpus/comparison/search/British speech lifecycle tests.
- `npm run build`: original recording integrity (37 assets / all 44 symbols), published media integrity (44 video/poster pairs), TypeScript and Vite production build pass. Manifest records `modifications: none` and the explicit non-commercial/no-adaptation reuse basis.
- **All 44 complete MP4s decoded by FFmpeg without errors**, video + audio, 263.47 seconds total. 42 clips have H.264/AAC, two STAR clips have H.264/MP3; both browser engines successfully decoded those two clips too. No transcoding/edits were made.
- Installed Chrome with Pixel 7 profile and WebKit with iPhone 15 profile: **all 44** selections loaded their mapped media, displayed decodable frames with nonzero video dimensions, advanced native playback, sought near the end and emitted native `ended`. All 44 original posters loaded and all source disclosures matched the manifest per engine. This tests playback/seeking, not uninterrupted full-length human listening or expert phonetic certification.
- Both engines preserve six example words per symbol and all eleven flat preset groups with the correct two/three media entries. Starting the second video pauses the first; starting a word pauses video; starting video clears the word player's active state. Eight comparison width/theme combinations per engine (320/390/844/1440 × light/dark) have no horizontal overflow.
- No uncaught page errors or failed application/media requests in either all-44 run. WebKit emits native media-control icon/placard diagnostics from its browser-internal blob UI; these are distinguished from application exceptions/network errors. Real video frames, audio/video codecs and native playback nevertheless pass. Desktop-hosted mobile profiles are not physical iPhone/Android tests.

Both engines also pass selection disposal, simulated background pause, deliberate media-request failure with a visible original-source link, recovery after reselecting, no external internet dependency for the local HTTP-server media, and source-credit navigation. Three representative clips (vowel + both affricates) play **unmuted at volume 1 from start through natural `ended`** per engine; the all-44 tests cover decoded-frame advancement and seeking. Final MRI 2 footage has 320×320 native dimensions for all 22 consonants; no old 90-pixel MRI 1 files or tongue-only ultrasound clips are shipped. A sampled /r/ MRI 2 frame and original affricate/poster views were visually inspected.

Existing-feature regression in both engines: all **264 word controls** resolve to the correct human recording (70 occurrences) or strict `en-GB` word speech (194); three real synthesized words (*cake, rain, name*) each emit native start/end with British Daniel and no error, a human recording and the triple sequence complete, all eleven flat presets/custom selectors work, and the QR disclosure fits the viewport. Ten comparison width/theme cases per engine (320/390/412/768/1440 × light/dark) pass. Chinese IME composition, exact IPA/extra-word search, keyboard custom mode and persisted theme also pass. The final explorer checks additionally cover MRI, ultrasound and affricate views across 320/390/844/1024/1440 in both themes, preserving the desktop symbol-column alignment.

## Published release audit

Feature commit **`19a5d6778478aa42c4597ec3f1f9c588c329f42a`** was fast-forwarded to `main`, pushed to the existing authorized repository and deployed successfully by [GitHub workflow 39107190630](https://github.com/davidsqf/English-IPA-Learning/actions/runs/39107190630). The initial transfer returned HTTP 400; retrying the same fast-forward push with per-command HTTP/1.1 and a 50 MiB request buffer succeeded without rewriting history or changing global configuration.

On the [public website](https://davidsqf.github.io/English-IPA-Learning/), both Chrome/Pixel and WebKit/iPhone profiles exercise **all 44 real videos**: correct original video/poster mapping, visible decoded frames, native time advancement, seeking and native `ended`, all 44 original source disclosures, six word controls per symbol, all eleven flat comparison mappings, video/video and video/word interruption and eight comparison width/theme cases per engine. Both report zero uncaught application exceptions. Chrome reports no failed media requests; WebKit reports four expected client-side `cancelled` range requests while sources are disposed/replaced, with all 44 playback cases nevertheless successful. These are not server/media failures and are retained distinctly in the raw QA results rather than described as zero cancellation diagnostics.

A separate HTTP audit fetches **92 published assets**: all 44 complete MP4s, all 44 original PNG/JPEG posters, both QR assets and compiled JavaScript/CSS. Every response succeeds and its SHA-256 exactly matches the final local manifest/build; public HTML references the matching compiled filenames. No third-party media service is required for playback. This proves the public media are the checked original files, with no missing clip or stale original-animation bundle. The later release-audit documentation update does not change the app or assets.

The requested replacement is complete: all 44 entries use real published MRI/ultrasound video and original posters, in explorer and comparisons, with the fabricated anatomy/animation removed and actual source/rights/variation labels visible. Preserve non-commercial/no-adaptation terms and the documented distinction between technical/source checks and independent expert phonetic review.

---

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

## Completion audit

| Requirement | Current evidence |
| --- | --- |
| Every existing symbol | Exact 44-ID match between the runtime library and articulation manifest; all 44 rendered on the live site in both engines. |
| Mouth shape and tongue | Separate labelled frontal-lip and sagittal-tongue SVGs; all 44 default diagrams visually reviewed, and every phase exercised. |
| Movement | 120 manual phases; all 44 final public animations finish in each engine with changing geometry; pause and reduced-motion stepping pass. |
| Credible reference | Each entry has named source IDs and specific source notes; the 44-row research matrix records inspected Cambridge/Glasgow references and British-variation boundaries. |
| Working delivered site | CI/build pass, live bundle hashes match, all comparison mappings and existing playback/QR regressions pass; work preserved in Git and the handoff. |

## Publication

Feature commit `9d4cd319ef4945355f58a8a6e608e32242571b6d` was fast-forwarded into main and pushed. [GitHub workflow 39104165853](https://github.com/davidsqf/English-IPA-Learning/actions/runs/39104165853) passed clean installation, all 20 tests, both data/integrity gates, type checking, build and Pages deployment.

On the live [website](https://davidsqf.github.io/English-IPA-Learning/), **both Chrome/Pixel and WebKit/iPhone profiles** verify all 44 front/side figures, all 120 manually selected phases and their source disclosures, six word buttons per symbol, all eleven two/three-symbol comparison mappings and unique SVG identifiers. Each also completes recorded playback, British device speech for cake and the QR disclosure. A final all-symbol live audit then plays **all 44 animations to completion in each engine** (88 final published plays), with at least two distinct sampled path/lip configurations for every symbol, resolved marker IDs, all eleven comparison mappings and successful background cancellation. Both report **zero uncaught page errors, zero console errors and zero failed requests**.

The live JavaScript `index-DxuX-zJF.js` and stylesheet `index-Y4l4fCgt.css` return HTTP 200 and exactly match the SHA-256 of the locally verified build. The live assets match the final checked local build, and the subsequent all-symbol public motion audit directly verifies every animation in the final published version. No private source PDFs, audit galleries or QA scripts appear in the distributed build. Final documentation updates only record the verification; they do not alter the app or media. Read Git for the latest documentation commit.

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
