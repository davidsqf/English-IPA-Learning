# Project decisions

## D001 — Separate local repository (2026-10-18)

The alias “IPA dir” identifies the standalone `ipa-learning` repository. It sits outside the Education Team mirror's synced reference folder. It uses `main`, short-lived task branches, one writer per checkout, and a tracked handoff. The setup commit is local; GitHub destination and visibility have not been supplied.

## D002 — Audience and accent (2026-10-18)

**Owner-confirmed:** English IPA for Chinese-speaking beginners, British English first. Initial editorial convention: non-rhotic British learner-dictionary notation. This does not define all British accents or invalidate other English models. The draft uses Simplified Chinese support; age and individual needs remain unknown.

## D003 — Deliver research before development (2026-10-18)

The present task creates the project and development handoff, not the website implementation. Include a comparative study of established IPA sites, sourced IPA/content design, vocabulary drafts, and concrete audio candidates. Keep access limitations and unfinished review visible.

## D004 — Learn through short practice (2026-10-18)

Recommended product direction: a small guided lesson, optional full English sound reference, listening feedback, and local review. Traditional 44-entry reference coverage is planned, while the first implementation should complete a two-vowel lesson. The owner has not requested a full international-phonetics course.

## D005 — Traceable speech supply (2026-10-18)

Use source-linked dictionary references for checking. Prefer documented, reviewed local recordings for lesson playback. Generic international-phone samples and English word/phrase targets remain separate. Four Commons candidates are metadata-checked, with listening review pending. No scraping or media acquisition is part of this research delivery.

## D006 — Small static architecture (2026-10-18)

Recommended default: Vite with vanilla TypeScript, static JSON content, semantic HTML/CSS, and local progress. This is a reversible implementation recommendation. No dependencies or runtime have been installed. Reassess if actual interaction complexity warrants a framework; no backend or paid API is needed for the MVP.

## D007 — Later publication (2026-10-18)

The owner intends a later GitHub push. No remote, public repository, deployment, or project-wide licence is created in this task. When publication is requested, verify the destination and visibility, reconcile any existing history, and retain per-asset terms.

## D008 — Symbol exploration and comparisons only (2026-10-18)

**Owner correction during implementation:** remove quiz and review features. Focus the product on each symbol's pronunciation and comparisons between similar symbols. The completed UI has an explorer, ten comparison groups, and sources. No assessment, progress storage, or review schedule remains. Earlier proposals for those features are superseded.

## D009 — Contextual local preview audio (2026-10-18)

Use 36 specifically sourced Shtooka/Judith Franck recordings as local-only word/phrase candidates for 43 entries. Keep `/ʊə/` explicitly without a suitable recording. Candidate files remain ignored and excluded from distribution builds; the app and manifest state human phonetic review is pending. An availability endpoint prevents missing files from presenting as working audio. Original Ogg files or the source's MP3 transcodes retain individual attribution and checksum provenance. Rate-limited acquisition is resumable and must respect the provider.

## D010 — Concise learning surface (2026-10-18)

**Owner correction:** remove promotional introductory text and unnecessary explanatory copy. The visible main views use short functional titles, symbol/word displays, playback controls, and concise articulation/comparison guidance. Put detailed provenance and setup instructions behind the sources destination and disclosure controls. Do not restore slogans, introductory paragraphs, or decorative onboarding.
