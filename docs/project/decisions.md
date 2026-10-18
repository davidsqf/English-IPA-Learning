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

## D011 — Accepted release, complete bundled audio and public hosting (2026-10-18)

The owner accepted the current version, requested removal of trial/WIP labels, complete downloaded samples, dark mode, thorough testing, a push to `English-IPA-Learning`, and public hosting. The exact destination `davidsqf/English-IPA-Learning` was verified as an empty public repository. Use GitHub Pages with a tested static build; pushes to main deploy through GitHub Actions. This supersedes D007/D009's earlier local-only restrictions. It does not create a claim of independent professional review.

All 44 entries have contextual recordings, drawn from 37 shipped MP3 files. Thirty-six Shtooka/Judith Franck files retain CC BY 3.0 US; the additional TaxRebate *during* retains CC BY-SA 4.0. Ogg-to-MP3 conversions are recorded. No synthesized speech is used. Browser-local storage is used only for theme preference, superseding the earlier blanket description of no localStorage.

## D012 — Multi-symbol comparisons, six words and mobile use (2026-10-18)

The owner requested a genuine three-symbol `/e æ aɪ/` comparison, manual selection of two symbols, credible sourced Chinese guidance, removal of 0.8× speed, six words per selected symbol with one preview word, and iOS/Android friendliness. Comparison data now uses ordered `symbolIds` arrays, rather than hard-coded left/right fields. The custom mode requires two distinct valid IDs and disables the other selected symbol in each native select. Eleven presets include the three-way group.

Each symbol has six text examples with broad British transcriptions, original glosses and dictionary pronunciation links. The existing recorded primary example remains; no unrecorded word is given a misleading local speaker control. All playback is at natural speed. Every Chinese cue and preset tip points to named references, with an editorial review explaining variation and rejected source wording. Touch targets, 16px mobile search, native selectors, safe areas, pinch zoom and composition-event handling support phone use. Browser-engine emulation is reported separately from physical-device testing.

## D013 — Every-word playback, flat comparisons and QR (2026-10-18)

The owner requested a voice button for every example, all default comparison choices visible without a dropdown, and a QR linking to the public site. Each selected symbol now has six individual speaker buttons. Existing licensed human recordings serve 70 example occurrences; the other 194 use the device/browser's explicitly available British (`en-GB`) synthesized word voice. This is supplementary word reading, not a synthesized isolated IPA model or a claim of dictionary-recording reuse. All 44 primary human references and comparison sequences are preserved. Missing British voices show an actionable message instead of silently choosing another accent. Sources and accessible playback labels distinguish synthesized speech. No speech files, keys, paid API or new runtime dependency are introduced.

Targeted Commons metadata and the original Shtooka/Judith Franck archive were investigated. The 625-recording archive has 93 of the 177 words after accounting for articles and infinitives, so it cannot provide complete coverage of the existing six-word lists. Experimental acquisitions remain ignored in `.local/` and are not added to the runtime corpus. Additional dictionary media were not copied. This extends D011/D012's earlier all-recorded playback behavior; it does not reclassify device speech as a human pronunciation reference.

Eleven ordered comparison choices are wrapping, accessible pressed-state buttons on desktop and phones. The custom native two-symbol selectors remain. A small footer “手机打开” disclosure shows an exportable black-on-white QR encoding exactly `https://davidsqf.github.io/English-IPA-Learning/`. Static SVG/PNG assets include a four-module quiet zone; authoring uses ReportLab/Pillow and independent ZXing decoding verifies the destination. No remote QR service or tracking redirect is used.

## D014 — Sourced articulation pictures and movement for every symbol (2026-10-18)

The owner requested a picture or animation showing mouth shape, tongue and movement for **each symbol**, with credible references. All 44 symbols now have original SVG frontal lip views and sagittal tongue views in the explorer and comparison panels. The separate runtime manifest holds 35 schematic poses and 120 source-linked phases. Original silhouettes and control points encode relative articulation; they are not traced publisher figures, measured MRI, a unique anatomy for all British speakers, or independently expert-certified models.

Roach's Cambridge articulation/short-vowel excerpt and Barber/Beal/Shaw's Cambridge RP descriptions/figures provide the principal British reference. Glasgow Seeing Speech supplies the university articulator-imaging resource and IPA place/manner reference; Cambridge's Phonetics Overview is used for general consonants, not its American vowel model. Pronunciation Studio supports modern /uː/ fronting and centring-diphthong variants. Every figure exposes its specific references; the research document contains a 44-symbol matrix. /r/ maps to approximant [ɹ], nasals keep oral closure with a nasal route, /l/ displays lateral airflow, and /h/ avoids fictitious oral constriction. Traditional /ɪə eə ʊə/ variants remain explicit.

A meaningful static target is shown initially. Motion is a finite, user-triggered schematic gesture with pause and numbered steps; reduced motion advances static phases. Navigation, selection changes and backgrounding cancel motion. Diphthongs also retain a directional tongue arrow in the still. The diagrams need no network, new runtime library or third-party embedded media. Existing audio is unchanged and is not advertised as time-aligned to the visual animation. The build now requires complete visual coverage in addition to the existing recording integrity gate.

## D015 — Replace invented anatomy with authentic published media (2026-10-18)

The owner explicitly requested proper pictures/video segments from online resources and rejected made-up mouth movement animation. This supersedes D014's original SVG implementation and the old preservation rule in AGENTS.md. All 44 symbols now use whole published MRI or ultrasound + lip-camera video, original published posters and native manual playback, without generated geometry, interpolated poses or fabricated airflow.

20 vowel lexical-set examples are from the Southampton speaker in Dynamic Dialects, 22 consonants from Janet Beck's Seeing Speech MRI chart, and two affricates from the adult London STAR non-disordered database (*cheap*, *hedged*). Labels distinguish whole words, vowel contexts, actual regional accents and traditional centring-diphthong variants. The internal tongue/lip visualization is actual published MRI/ultrasound footage, not merely an offsite link. Each player includes source, speaker, creator and licence credit. Unmodified files are shipped for reliable local/GitHub Pages playback.

The explicit CC BY-NC-ND 4.0 declarations permit unchanged non-commercial redistribution; the publishers additionally prohibit AI training, machine learning and automated transformation without written consent. No clip/image alteration, trimming, reencoding, tracing or AI transformation is performed. Whole original media were selected through the actual public players and copied unchanged. Emma's public MP4s were excluded because a redistribution licence was not established. The schema-2 manifest and build gate require complete all-44 provenance and asset integrity; existing pronunciation buttons, eleven flat presets, custom comparisons, six examples, themes and QR remain.
