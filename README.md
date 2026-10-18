# IPA Learning · 英语音标入门

**“IPA dir” means this repository root, `ipa-learning/`.** This is a standalone local Git repository for one owner working with LLM agents. It can later be moved or pushed to GitHub as a complete folder, including its hidden `.git` directory.

Status: research and development handoff, 18 October 2026. **There is no runnable website yet.** No third-party audio, fonts, or chart images have been downloaded.

The owner confirmed **English IPA for Chinese-speaking beginners, British English first**. The first teaching model is a non-rhotic British dictionary convention; it is not a claim that every British accent sounds alike.

## Start here

1. Agents must read [AGENTS.md](AGENTS.md) and [Git workflow](docs/workflow/git-workflow.md).
2. Continue from [development handoff](docs/project/HANDOFF.md).
3. Read the [research index](docs/research/README.md), including the [website comparison](docs/research/website-study.md).
4. Inspect [starter content and its review rules](content/README.md).

## Repository map

| Path | Purpose |
| --- | --- |
| `AGENTS.md` | Mandatory agent rules and session protocol |
| `docs/workflow/` | Local Git, handoff, recovery, and future GitHub protocol |
| `docs/project/` | Decisions, current state, and ordered development work |
| `docs/research/` | Teaching design, IPA conventions, audio/vocabulary sourcing, competitor study, sources |
| `content/seeds/` | 44 sound entries, 12 minimal pairs, and four audio candidates; drafts with explicit review status |
| `public/audio/` | Future approved audio assets; currently instructions only |
| `THIRD_PARTY.md` | Asset provenance and distribution status |

All paths inside the repository are relative so the project remains portable. Keep this repository separate from the parent ChatGPT project's synced `sources/` folder. That folder and the parent's instructions are read-only reference material.

## Working in another session

Give the next local agent access to **this existing folder**, then ask it to read `AGENTS.md` and `docs/project/HANDOFF.md`. A chat transcript alone is not file access. A session without local filesystem access should return a patch or files for a local agent to integrate, rather than claim it changed this repository.

The repository currently has no GitHub remote. Adding a remote and pushing are later steps using the owner's chosen repository. Git history is local version control; an external backup requires a separate copy or a future remote.
