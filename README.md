# IPA 音标入门 · English IPA Learning

A concise British English pronunciation website for Chinese-speaking beginners.

**[打开网站 · Open the website](https://davidsqf.github.io/English-IPA-Learning/)**

Explore a symbol, listen to its example, and compare similar sounds. All recordings are included in the repository—there is no separate audio download or API key.

## Features

- 44 traditional British English reference symbols: 12 monophthongs, 8 diphthongs and 24 consonants.
- Original Chinese pronunciation guidance, familiar example words and highlighted target sounds.
- 37 bundled human recordings covering all 44 entries; examples shared by several symbols are intentional.
- Ten sound comparisons, individual and sequential playback, natural and pitch-preserving 0.8× speed.
- Light and dark themes, system preference detection and a remembered theme choice.
- Search by IPA, English or Chinese; responsive layouts and keyboard-accessible controls.

Recordings demonstrate **whole words or phrases**, rather than isolated phonemes. British accents vary: `/r/` is the usual dictionary notation for the English approximant; traditional `/ʊə/` is illustrated with *during*, and many speakers use alternative realizations. The traditional 44-entry inventory is a teaching convention, not the complete international IPA.

## Run locally

Use **Node.js 24** (minimum 22.12):

```sh
npm ci
npm run dev
```

Open the address printed in the terminal, normally `http://127.0.0.1:5173/`. On macOS, you can also double-click **Start IPA.command**. Keep its terminal open while using the website. Once dependencies are installed, local use works without internet. Reference links require a connection.

## Check and build

```sh
npm test
npm run build
npm run preview
```

The build verifies every audio file against its recorded SHA-256 and fails if any symbol lacks a recording. Preview normally runs at `http://127.0.0.1:4173/`. The generated `dist/` directory is a complete static website, including audio. Serve it over HTTP. Relative URLs support GitHub project Pages and other subdirectories.

`npm run samples` verifies the already bundled recordings; it does not download anything.

## Publication

The [Test and publish workflow](.github/workflows/pages.yml) tests and builds changes. Pushes to `main` publish to GitHub Pages; pull requests run the checks without deployment. The repository's Pages publishing source is GitHub Actions.

## Project map

| Path | Purpose |
| --- | --- |
| `src/` | Interface, search, shared audio player and theme controls |
| `content/symbol-library.json` | Symbols, Chinese cues, examples and sound mappings |
| `content/audio.json` | Per-file sources, authors, licences, transformations and checksums |
| `public/audio/` | All 37 shipped MP3 recordings |
| `tests/` | Inventory, search, comparison and audio integrity checks |
| `docs/research/` | Source research and comparative study of eight IPA websites |
| `docs/project/` | Decisions, handoff and actual verification evidence |

“IPA dir” means this repository root. Agents must read [AGENTS.md](AGENTS.md), the [Git workflow](docs/workflow/git-workflow.md), and the [handoff](docs/project/HANDOFF.md) before editing. The product focuses on pronunciation and comparisons; it has no quizzes, review schedules, learning records, accounts, microphone access or analytics. Only the theme preference is stored locally.

## Credits and rights

Association Shtooka / Judith Franck recordings: **[CC BY 3.0 US](https://creativecommons.org/licenses/by/3.0/us/)**. TaxRebate's *during*: **[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)**. See [THIRD_PARTY.md](THIRD_PARTY.md) and the per-file manifest for credits and conversion details. Authors and reference publishers do not endorse this project.

The owner accepted this release; no independent expert phonetics review is claimed. Original research drafts remain preserved for provenance. No project-wide source-code licence has been selected; third-party audio retains its stated licences.
