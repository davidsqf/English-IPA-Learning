# Git workflow for one owner and multiple LLM sessions

Adopted: 2026-10-18. This protocol is intentionally small: one stable branch, one branch per task, explicit handoffs, and one writer per checkout. The same rules apply regardless of the agent's product mode.

## 1. Repository boundaries

`IPA dir` means this standalone repository, initially named `ipa-learning`. Run Git commands inside it and verify `git rev-parse --show-toplevel` before making changes. Do not initialize Git in the parent Education Team mirror, and never add its `sources/` files to this repository. Preserve hidden `.git` when relocating the project. If the destination session cannot access the folder, stop claiming local writes and provide a patch for an agent that can.

Use `main` for completed, reviewed local work. There is no `develop` branch. Use `work/<short-topic>` for each development or research task, for example `work/first-listening-lesson`. For an incomplete checkpoint, use a clearly named WIP commit on the task branch and leave it unmerged. No PR is required for local-only work.

## 2. Begin a session

Read the instructions and handoff, then inspect:

```sh
git rev-parse --show-toplevel
git status --short --branch
git log -5 --oneline
git remote -v
```

Acquire a checkout-level courtesy lock by atomically creating `.agent-session.lock/` with `mkdir`. Record the chat/session identifier, task, branch, start time with timezone, and intended checkout path in `.agent-session.lock/owner.md`. This directory is ignored. Creating it must fail if another session already owns it; do not overwrite it. Check a pre-existing lock before writing any tracked file.

The lock coordinates cooperative agents; it is not a Git or operating-system enforcement mechanism. A timestamp alone never proves a lock is stale. If another writer is active, remain read-only in this checkout. If it is abandoned, obtain evidence from the owner or the recorded session before removing the stale lock. Release your own lock when handing back the checkout, even when the task is incomplete; the handoff preserves the unfinished state.

If the working tree is dirty, identify whose changes they are. Resume only changes clearly belonging to this task and documented in the handoff. Leave unfamiliar changes intact and explain any conflict. Do not automatically stash them or create a commit containing them. Inspection and independent read-only research can continue.

With a clean checkout, switch to `main`, then create a branch:

```sh
git switch main
git switch -c work/first-listening-lesson
```

Use a fresh topic name if that branch already exists unless intentionally resuming it. Do not switch a checkout another chat is editing. If parallel work is explicitly requested, use separate Git worktrees and branches, record their ownership, and nominate one session to integrate; `.gitignore`d local locks do not coordinate separate worktrees or clones.

## 3. Make and validate changes

Keep a task small enough to describe in one sentence. Add or update the decision log only for meaningful decisions, and update the handoff with current state, relevant files, verification results, and next steps. Put research under `docs/research`, source data under `content`, and approved redistributable media under `public`.

Review `git diff`, run checks appropriate to the task, and run `git diff --check`. Stage explicit paths, inspect `git diff --cached`, and inspect `git status --short`. Avoid `git add .` or `git add -A`, which can capture another task's files or private assets. Use the existing configured identity. If missing, finish the files and ask the owner to provide an identity; do not fabricate author details.

Commit messages use `type: concise result`, with optional scopes, such as:

- `docs: record IPA research and development handoff`
- `feat(audio): add single-player replay controls`
- `fix(content): correct the UK transcription of a word`

Suggested types: `docs`, `feat`, `fix`, `refactor`, `chore`. Separate unrelated changes. Local commits for the requested work are allowed by this repository protocol; remote publication requires its own authorization. Do not use `--amend` after a commit may have been shared; a follow-up commit is the safe default.

## 4. Finish local work

For a completed, checked task with a clean working tree:

```sh
git switch main
git merge --ff-only work/first-listening-lesson
git status --short --branch
git log -1 --oneline
```

If `--ff-only` fails, inspect the divergence. Do not force or reset. Normally preserve both histories with a regular merge on an integration branch, resolve conflicts only in understood files, rerun affected checks, and integrate the reviewed result. Rebasing is optional only for a clean, unshared branch entirely owned by this task; never rewrite another session's commits.

Leave a completed task on `main` by default. A finished branch can remain for traceability; delete it only when requested or under an explicitly agreed cleanup task. Do not merge incomplete work just to achieve a clean status.

The final message identifies the delivered result, branch and short commit hash, checks, and any material limitation. Update `docs/project/HANDOFF.md` in the task commit with the state and planned integration target; obtain the actual hash from Git afterward rather than making a self-referential hash in that same file. Release only your own lock. If work remains, leave the branch and files intact and document them.

## 5. Later: first GitHub push

The owner has expressed an intention to push later, not an instruction to publish now. When authorized, verify the exact GitHub owner/repository and chosen visibility. Prefer a genuinely empty remote for the first push. Check its refs and existing `origin` first. Never overwrite an existing remote or unrelated history.

For an empty, verified repository, set `origin` to the owner's supplied URL and push `main` with upstream tracking. Do not put real credentials in commands, docs, or remote URLs. If the remote was initialized with a README or other files, fetch and reconcile deliberately; do not force-push or automatically merge unrelated histories.

Once `origin` exists, before a fresh task: fetch, inspect `main` versus `origin/main`, and fast-forward local `main` if possible. Do not pull into a dirty working tree. Divergence requires inspection and reconciliation, not a reset. A push that is rejected requires another fetch and review, not `--force`.

For future solo GitHub work, keep the same local branch protocol. Push completed branches and open PRs only when requested or covered by the owner's standing instruction. CI and branch protection can be added when the application exists. Before any publication, inspect tracked files for private recordings, environment files, and incomplete asset attribution. No project-wide open-source licence is selected yet; do not add one without the owner's choice. Third-party assets retain their own terms.

## 6. Recovery and backup

Use `git status`, `git log`, and `git reflog` to inspect recovery options. Prefer a new recovery branch and `git revert` for an unwanted committed change. Do not use destructive cleanup, `reset --hard`, force checkout, or force push as a routine fix. If recovery could overwrite uncommitted work, explain the concrete impact and obtain authorization first.

A Git commit does not back up untracked or ignored files, and local history does not protect against loss of the device. Until a remote exists, the owner can keep an external copy of the complete repository. Keep any private recordings in a separately chosen private backup; never silently publish them through Git.
