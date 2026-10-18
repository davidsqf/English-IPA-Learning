# Development handoff

Updated: 2026-10-18, Asia/Singapore. Read `AGENTS.md` first.

## Current state

This repository contains the project workflow, research, eight-site comparison, and draft content. It is the requested preparatory handoff. **There is no website code, package manifest, installed dependency, running server, or bundled third-party media.**

Bootstrap integration target: `main`. Use Git itself for the actual latest commit hash. No GitHub remote exists. Do not initialize another repository, publish, or scaffold over the research files.

Confirmed audience: Chinese-speaking beginners, English IPA, British English first. The phrase “IPA dir” means this repository root. The next local agent must have access to this existing folder; chat memory or a cloud-only workspace does not automatically include local files.

## Read next

1. `docs/workflow/git-workflow.md` and `docs/project/decisions.md`.
2. `docs/research/website-study.md` and `docs/research/learning-design.md`.
3. `docs/research/ipa-content.md`, `audio-and-vocabulary.md`, and `sources.md`.
4. `content/README.md`, the three JSON seed files, and `THIRD_PARTY.md`.

## Ready to use versus pending

| Item | Ready now | Still needed |
| --- | --- | --- |
| Git protocol | Branches, session ownership, local commits, recovery, future GitHub flow | Follow it in each session |
| Product direction | Bilingual British-first learning loop and proposed screens | Validate with real beginners |
| Website study | Eight inspected or publisher-described web resources; explicit access limits | Interactive/browser and learner testing if deeper competitive validation is wanted |
| Inventory | 44 identified traditional reference entries and candidate words | Per-entry verification, original articulation cues, human review |
| Minimal pairs | 12 draft contrasts with proposed transcriptions and glosses | Dictionary/sense checks, learner vocabulary preview, suitable matched recordings |
| Audio | Four file-specific metadata/licence candidates | Obtain permitted local copies, audition, review model fit and attribution, or source replacements |

All audio IDs in lesson seeds are deliberately null. All human phonetics reviews are pending. Do not invent completed reviews to unblock a release.

## Suggested implementation sequence

### Milestone 1 — One complete listening lesson

1. Acquire the checkout lock and create `work/first-listening-lesson` from clean `main`.
2. Inspect the available runtime; use a supported Node version and the official [Vite guide](https://vite.dev/guide/) when selecting packages [S26]. A vanilla TypeScript static app is the default. Preserve all existing files; scaffold in a temporary folder and copy only intended application files, or install manually.
3. Establish `dev`, `build`, and `preview` scripts, record the runtime requirement, and commit a single package-manager lockfile. Prefer npm unless existing project evidence suggests otherwise.
4. Prepare `/ɪ/` versus `/iː/` with original Chinese explanations, vocabulary preview, replay, and clear feedback. Use placeholder-disabled audio controls until recordings are actually approved; do not call this a completed listening lesson while audio is missing.
5. Review the matched “a ship / a sheep” candidates as phrase stimuli, or arrange suitable word recordings. If recordings need a human review unavailable to the agent, complete the application flow and provide a concrete review queue; leave the lesson labelled pending rather than misrepresenting it as validated.
6. Implement one active audio player, replay/error states, and local progress. At this stage a few curated questions are enough; avoid a broad transcription converter.

Acceptance: the learner can enter the lesson, hear distinct reviewed stimuli, choose an answer without an answer leak, see an explanation and transcript afterward, replay both options, and finish. Keyboard operation, narrow-screen layout, no autoplay, and network-disconnected local use work. Missing/failed audio has a clear recoverable state. Content cannot silently use a generic phone as a British word target.

### Milestone 2 — English reference and first curriculum

Add all 44 reference entries with real Unicode and consistent convention labels. Develop lessons in the proposed order. Add reviewed words gradually; keep draft entries visibly distinct. Search by symbol or English word. The traditional variable `/ʊə/` entry and dictionary `/r/` need explicit explanations. Add an optional original mouth diagram only when its anatomy and cue are reviewed.

Acceptance: every released entry has checked text, review provenance, and either approved audio or an honest explicit unavailable state. All active media credits are complete and accessible in the app.

### Milestone 3 — Review and resilience

Add a simple versioned local review queue, adjustable starting intervals, export/import, and reset confirmation. Store stimulus/content identities in attempts. Separate practice completion from claims of speaking accuracy. Consider record-and-compare only after basic playback works; use local private storage and deliberate user controls.

Acceptance: progress survives reload, export/import round-trips, old-format handling is explicit, and a content update does not silently misinterpret old attempts. No account, analytics, remote API, or microphone access is necessary for basic use.

### Milestone 4 — Owner-requested GitHub publication

When requested, verify the owner's chosen GitHub repository and visibility. Inspect actual history, tracked files, source-code licence choice, and media notices. Add CI for the application checks that actually exist. Follow the workflow; do not force-push or assume a GitHub Pages deployment is wanted just because the source is on GitHub.

## Verification expectations

Bootstrap checks completed on 2026-10-18: all local file and heading links across 14 Markdown documents resolve; the three JSON files parse; the 44 entries have unique IDs and the intended 12/8/24 grouping; all twelve proposed pairs differ in exactly the specified single phoneme under their draft transcriptions; all 27 source IDs and content references resolve; and all four audio candidates retain explicit pending states. The ignore rules cover local locks, environment files, private recordings, and dependencies. These structural checks do not establish linguistic accuracy or audio quality. Git whitespace and repository-integrity results are reported by the delivering chat after staging/commit. No website build or audio listening test was run in this research-only state.

For application commits, run the build/type checks and meaningful behavior checks: choosing/retrying a question, audio interruptions and failures, progress persistence/export, and keyboard flow. Visually inspect a phone-width and desktop view. Listen to the real selected audio. Write automated tests for state/logic with failure risk; do not write tests that merely mirror documentation or CSS.

## Open choices that do not block scaffolding

Learner age, exact Chinese language preference, preferred visual tone, desired review frequency, and audio supply budget are not confirmed. Defaults: neutral all-age styling, Simplified Chinese, short sessions, and existing permissibly reusable sources if they pass review. No paid service or recording commission has been authorized. The owner can revise these defaults later.

## Suggested next-session request

> Continue in this existing IPA dir. Read AGENTS.md and docs/project/HANDOFF.md, follow the Git workflow, and implement Milestone 1 as a local website. Preserve the research. Keep draft content and pending audio reviews explicit, and report what is playable and what still requires review.
