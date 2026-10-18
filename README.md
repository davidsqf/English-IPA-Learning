# IPA 入门 · 听见每一点不同

A local website for Chinese-speaking beginners to explore British English pronunciation. **“IPA dir” means this repository root, `ipa-learning/`.**

The first version focuses on **learning symbols and comparing similar sounds**. It has no quizzes, review schedules, scores, accounts, or progress tracking.

## Open the website

On this Mac, double-click **`Start IPA.command`** in Finder. It selects a supported Node runtime, prepares dependencies if necessary, and opens the local website. Keep its terminal window open while learning; close it to stop the server. If port 5173 is already occupied, stop the previous IPA server first.

For a terminal-based start, use Node.js **22.12 or newer** (24 recommended):

```sh
npm ci
npm run samples
npm run dev
```

Open the printed local address, normally `http://127.0.0.1:5173/`. Installation and the first recording download require internet access. After setup, the app works with internet disconnected while its local server is running.

The download script skips existing checksum-matching files. A first full download may take several minutes because requests are spaced to respect the public source. If the source rate-limits a download, keep the already downloaded files, wait, and run it again. Missing audio is explicitly marked in the UI; it is never replaced with synthesized speech.

## What is included

- **44 traditional British reference entries**, grouped into vowels, diphthongs, and consonants, with searchable examples and original Chinese pronunciation guidance.
- **Ten similar-sound comparisons**, including `/ɪ iː/`, `/ʊ uː/`, `/e æ/`, `/θ ð/`, and `/l r/`.
- Contextual word/phrase playback, one active player, natural and pitch-preserving 0.8× speed, and sequential comparison playback.
- Responsive layouts, keyboard-accessible controls, source links, and explicit unavailable-audio states.

Recordings are **whole words or phrases, not isolated phoneme demonstrations**. The target sound is highlighted in the word transcription. There are 36 distinct candidate recordings covering 43 entries; the variable traditional `/ʊə/` entry has no suitable candidate and is clearly labelled.

**This is a local trial.** Chinese cues, word transcriptions, and recordings still need expert pronunciation review. Licensing metadata and technical playback checks are not that review.

## Build and check

```sh
npm test
npm run build
npm run preview
```

The preview address is normally `http://127.0.0.1:4173/`. `dev` and `preview` serve candidate audio from ignored `.local/audio/` using an exact file allowlist. **Candidate audio is excluded from `public/`, `dist/`, and Git.** A generic static server or a copied `dist/` folder will display audio as unavailable. An approved, redistributable audio corpus is needed before deployment.

## Continue with Codex

Read [AGENTS.md](AGENTS.md), the [Git workflow](docs/workflow/git-workflow.md), and the [development handoff](docs/project/HANDOFF.md). Use the existing folder rather than creating another repository. The original [research](docs/research/README.md) and [eight-site study](docs/research/website-study.md) remain available; their earlier quiz/review proposals are superseded by the owner's narrower scope.

| Path | Purpose |
| --- | --- |
| `src/` | Symbol exploration, comparisons, and the shared audio player |
| `content/symbol-library.json` | Draft display corpus and contextual sound mappings |
| `content/local-preview-audio.json` | Per-file credits, licensing, acquisition checks, and pending review |
| `content/seeds/` | Preserved research-stage drafts |
| `scripts/download-samples.mjs` | Reproducible local candidate download |
| `docs/project/` | Current scope, decisions, handoff, and verification |
| `docs/research/` | Original sourced research and website comparison |
| `THIRD_PARTY.md` | Asset and dependency notices |

There is no GitHub remote or deployment. Keep this standalone repository separate from the parent Education Team project's synced `sources/` folder. A future session needs explicit filesystem access to this existing directory; a chat transcript alone does not provide file access.
