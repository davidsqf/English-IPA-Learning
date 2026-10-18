# IPA 音标入门 · English IPA Learning

A concise British English pronunciation website for Chinese-speaking beginners.

**[打开网站 · Open the website](https://davidsqf.github.io/English-IPA-Learning/)**

Explore a symbol, listen to its example, and compare similar sounds. All recordings are included in the repository—there is no separate audio download or API key.

## Features

- 44 traditional British English reference symbols: 12 monophthongs, 8 diphthongs and 24 consonants.
- Source-linked Chinese pronunciation guidance and six example words per symbol, each with a voice button and highlighted target sounds. Tiles keep a single preview word.
- Clear real-teacher videos for all 44 symbols, with British mouth demonstrations, explicit tongue/lip-placement teaching and source credits.
- 37 bundled human recordings covering all 44 entries; examples shared by several symbols are intentional.
- Eleven directly visible recommended comparison choices, including the three-symbol `/e æ aɪ/` group, plus manual comparison of any two distinct symbols. Individual and sequential playback use normal speed.
- Light and dark themes, system preference detection and a remembered theme choice.
- Search by IPA, any of the six English examples or Chinese; touch-friendly layouts, native mobile selectors, Chinese IME support and keyboard-accessible controls.

Each symbol keeps its bundled human recording. Every example has a speaker button and a dictionary pronunciation link; additional word reading uses the device’s British synthesized voice. Recordings demonstrate **whole words or phrases**, rather than isolated phonemes. British accents vary: `/r/` is the usual dictionary notation for the English approximant; traditional `/ʊə/` is illustrated with *during*, and many speakers use alternative realizations. The traditional 44-entry inventory is a teaching convention, not the complete international IPA.

## Run locally

Use **Node.js 24** (minimum 22.12):

```sh
npm ci
npm run dev
```

Open the address printed in the terminal, normally `http://127.0.0.1:5173/`. On macOS, you can also double-click **Start IPA.command**. Keep its terminal open while using the website. Once dependencies are installed, the local interface and bundled word recordings work offline; teaching videos require internet/YouTube access. Device word speech needs an available British English voice; some voices and all reference links require a connection.

## Check and build

```sh
npm test
npm run build
npm run preview
```

The build verifies every audio file against its recorded SHA-256 and requires complete recordings and teacher demonstration/placement coverage for all 44 symbols. Preview normally runs at `http://127.0.0.1:4173/`. The generated `dist/` directory is a complete static website, including audio. Serve it over HTTP. Relative URLs support GitHub project Pages and other subdirectories.

`npm run samples` verifies the already bundled recordings; it does not download anything.

## Publication

The [Test and publish workflow](.github/workflows/pages.yml) tests and builds changes. Pushes to `main` publish to GitHub Pages; pull requests run the checks without deployment. The repository's Pages publishing source is GitHub Actions.

## Project map

| Path | Purpose |
| --- | --- |
| `src/` | Interface, search, shared audio player and theme controls |
| `content/symbol-library.json` | Symbols, Chinese cues, examples and sound mappings |
| `content/comparisons.json` | Two- and three-symbol presets with source-linked tips |
| `content/pronunciation-sources.json` | Named references for the Chinese pronunciation guidance |
| `content/articulation.json` | Creator teaching videos, British targets, chapter ranges and embedding provenance |
| `src/articulation.ts`, `src/teaching-player.ts` | Click-to-load teacher modes, bounded replay, playback coordination and official player API |
| `content/audio.json` | Per-file sources, authors, licences, transformations and checksums |
| `public/audio/` | All 37 shipped MP3 recordings |
| `tests/` | Inventory, search, comparison and audio integrity checks |
| `docs/research/` | Source research and comparative study of eight IPA websites |
| `docs/project/` | Decisions, handoff and actual verification evidence |

“IPA dir” means this repository root. Agents must read [AGENTS.md](AGENTS.md), the [Git workflow](docs/workflow/git-workflow.md), and the [handoff](docs/project/HANDOFF.md) before editing. The product focuses on pronunciation and comparisons; it has no quizzes, review schedules, learning records, accounts, microphone access or analytics. Only the theme preference is stored locally.

## Credits and rights

Association Shtooka / Judith Franck recordings: **[CC BY 3.0 US](https://creativecommons.org/licenses/by/3.0/us/)**. TaxRebate's *during*: **[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)**. See [THIRD_PARTY.md](THIRD_PARTY.md) and the per-file manifest for credits and conversion details. Authors and reference publishers do not endorse this project.

The owner accepted this release; no independent expert phonetics review is claimed. Original research drafts remain preserved for provenance. No project-wide source-code licence has been selected; third-party audio retains its stated licences.

## Word buttons and phone access

Every one of the six examples has a speaker button. Existing human recordings remain the symbol and comparison reference; other words use the device's British English synthesized voice. Enable an English (United Kingdom) voice in the device's speech settings if prompted. Voice availability and pronunciation vary by device; dictionary links remain available. No non-British voice is silently substituted.

All eleven recommended comparisons appear directly as buttons, including on phones. The footer **手机打开** shows the website QR and a PNG download. Printable assets: `public/website-qr.svg` and `public/website-qr.png`. To regenerate after changing the public address, run `scripts/generate-qr.py` using Python with ReportLab and Pillow, then independently decode the result to verify its exact URL.

## Mouth and tongue teaching

Each symbol has **真人发音讲解**. Vowels use Pronunciation with Emma's British vowel lesson. Consonants provide **口形示范** (BBC Learning English) and **舌位讲解** (Billie English), so learners can see a real mouth and learn where the tongue/lips go. Chinese pronunciation hints remain above the videos. Click to play the selected chapter, use **重播本节** to replay that range, or open the original on YouTube. Player captions/fullscreen are available as provided by the creator.

Teaching videos stream through the original creator-enabled player and require internet/YouTube access. No external player is loaded before a click; videos, thumbnails and subtitles are not copied or rehosted. Starting word audio pauses the lesson, and starting a lesson stops other playback. Navigation, mode/selection changes and backgrounding cancel/pause it. If loading fails, retry or use the original creator link. Existing word recordings remain local and independent of video availability.

The [source audit and all-44 mapping](docs/research/articulation-visuals.md) records 68 creator chapter ranges across seven original videos, including traditional British vowel variants. The old MRI/ultrasound assets and invented animations are removed from the current runtime. [THIRD_PARTY.md](THIRD_PARTY.md) records provider permissions and attribution; no project-wide code licence is selected.
