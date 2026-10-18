# Agent instructions for IPA dir

These rules apply to this entire repository. “IPA dir” is the root containing this file. The owner is the sole maintainer; different ChatGPT Work and Codex sessions share responsibility through files and Git, not assumed chat memory.

## Read at the beginning of every session

Read this file, `docs/workflow/git-workflow.md`, `docs/project/HANDOFF.md`, and `docs/project/decisions.md`. Before content or UI work, read the relevant research and `content/README.md`.

Inspect the actual repository root, current branch, working-tree status, and recent commits. State what task you are carrying out. Preserve existing work and follow higher-priority user instructions.

## Git and ownership

- Use short-lived `work/<topic>` branches from clean `main`; integrate completed local tasks with fast-forward merges when possible. The initial research bootstrap is the sole setup exception and may be committed directly to `main`.
- Only one writing session may use a checkout at a time. Check and acquire the ignored `.agent-session.lock/` directory as described in the workflow. Use separate worktrees if the owner authorizes simultaneous work.
- Never switch branches, merge, or clean up while unrelated changes are present. Do not stage, commit, stash, reset, or discard another session's work.
- Review the diff and stage explicit paths. Make focused local commits for completed authorized work, using the configured Git identity. Never invent an identity or change global Git settings.
- Never rewrite shared history, force-push, delete work, or publish without authorization. A request to build locally does not authorize a GitHub push or deployment. Do not create a remote until its target is supplied or verified with the owner.
- Maintain the handoff in the same task commit. Report the branch, commit, checks, and remaining work. Never claim a check passed unless it ran.

## Product and content

**Current owner-confirmed scope:** symbol pronunciation exploration and similar-sound comparisons. Do not add quizzes, assessment, review schedules, progress tracking, or learning records unless the owner requests them later. Earlier research suggestions for those features are superseded. Keep visible copy concise: functional labels, symbols, playback and short pronunciation guidance. Do not add promotional slogans or explanatory introductions.

- Preserve the requested six words per selected symbol and one word per preview tile, the three-symbol `/e æ aɪ/` preset, and manual comparison of two distinct symbols. Playback is normal speed only; do not restore 0.8× controls. Keep every Chinese pronunciation tip linked to its actual reference sources.

- Confirmed scope: English IPA, Chinese-speaking beginners, British English first. Use original Simplified Chinese explanations and English examples. Learner age is unknown; keep the initial tone neutral and age-flexible.
- Preserve accent, transcription convention, source, review status, and audio type in content data. `/r/` as a dictionary convention is not the IPA trill `[r]`. Do not mix generic cardinal-vowel demonstrations with accent-specific English targets without labels.
- “44 sounds” is a traditional teaching inventory, not the size of the international alphabet or a universal English sound count. Do not add `/tr dr ts dz/` as four independent core English phonemes just to reach “48”.
- Preserve research seeds as historical drafts. The owner accepted the runtime corpus for release; source checks and technical playback tests must not be described as independent human phonetics review.
- Bundle only assets with documented reuse permission and recorded quality checks. The owner accepted the first release and explicitly authorized GitHub publication; preserve actual review facts without claiming independent expert review. A playable URL is not a reuse licence. Record per-file attribution and modifications in `THIRD_PARTY.md` and the audio manifest before distribution.
- Author original explanations and short example sentences. Use authentic published pictures/videos for articulation; never fabricate or regenerate mouth/tongue anatomy. Link to publisher references; do not bulk-copy dictionary entries or audio. Do not scrape competitor datasets as a shortcut.
- Use real Unicode IPA, accessible controls, no autoplay, and one active playback controller for recordings and word speech. Every example word has its own voice button. Preserve bundled human recordings as the symbol/comparison reference; other ordinary words may use clearly identified device speech with an explicitly available `en-GB` voice. Never silently substitute another accent or use spelling-to-speech for isolated IPA symbols as the authoritative model. Handle missing/failed device voices with a truthful message and the existing dictionary link.
- Current owner-confirmed visual requirement: clear British English teaching videos with a real person's mouth movements and understandable tongue/lip placement explanations for all 44 symbols. The MRI/ultrasound implementation is superseded because it is too abstract for beginners. Do not restore medical imaging, invented mouth anatomy, generated animation, or a mere repeated-word model in place of the explanation.
- `content/articulation.json` schema 3 maps each target to exact creator-published YouTube chapter ranges. Vowels combine teacher demonstration and placement; consonants pair BBC British mouth demonstrations with explicit place-of-articulation teaching. Keep both functional modes and preserve /r/ as [ɹ] and traditional-diphthong variation notes. Source IDs, creator/channel IDs, targets, range bounds and reuse basis must remain traceable. Review actual teaching content and rendered playback; a valid video ID or green data test alone cannot establish suitability or availability.
- Use only the creator-enabled official YouTube player, preserving its controls, branding, ads and captions. No video, thumbnail or soundtrack is downloaded, rehosted, altered, synthesized or passed through a proxy. This embed permission does not grant a redistribution licence. Teaching videos require internet/YouTube access; keep the bundled human word references available independently. Do not add accounts, a paid API or video-dependent gating of word playback.
- Load external player code and frames only after the learner activates a lesson. Preserve one active player across video/word speech, natural speed, replay of the selected range, cancellation during asynchronous loading, cleanup on replacement/navigation/backgrounding and honest blocked/failed-player recovery with a direct creator link. Keep original source attribution accessible, both themes readable and the embedded viewport at least 200×200 on phones. Do not hide publisher controls or fabricate captions.
- Show all eleven recommended comparison choices as wrapping buttons at every screen width; do not replace them with a dropdown. Keep the custom two-symbol native selectors. The website QR must encode the exact public URL and retain its white quiet zone in both themes.

## Implementation and completion

- Begin with a small, local, static application. No account, analytics, cloud service, or paid API is required for the MVP. Introduce dependencies only when they serve a clear need; commit the chosen lockfile and runtime requirements when code exists.
- Keep private recordings, secrets, dependencies, and generated build output out of Git. Do not edit the parent's synced project files or create another nested repository inside this one.
- Verify changes proportionally. Documentation work needs link/data/diff checks; application work needs relevant build and behavior checks, including actual audio playback when audio changes.
- Preserve uncertainty in research. Distinguish inspected page features, publisher descriptions, design recommendations, and untested behavior.
- Apply the end-of-session procedure in the workflow, update the handoff, and release only your own session lock. If interrupted, leave enough state for the next agent to resume safely.
