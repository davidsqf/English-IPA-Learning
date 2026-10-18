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
