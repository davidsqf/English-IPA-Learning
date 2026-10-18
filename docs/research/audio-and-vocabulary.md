# Audio and vocabulary supply plan

## Two separate questions

For every source ask: **Is it a credible pronunciation reference?** and **May this exact material be packaged and later distributed?** A free playback button answers neither question by itself. This repository currently contains links and metadata only, not downloaded third-party media.

## Reference and reuse matrix

| Source | Best use | Current project treatment |
| --- | --- | --- |
| [Official IPA interactive chart](https://www.internationalphoneticassociation.org/IPAcharts/IPA_charts_TI/IPA_charts_TI.html) | International symbols and phonetician demonstrations | Reference link. The interactive chart's advertised terms and individual recording rights need separate checking [S02–S03] |
| [Cambridge pronunciation](https://dictionary.cambridge.org/us/pronunciation/) | Human UK/US whole-word comparison | Reference link; no permission established to package recordings. Publisher's indexed API FAQ describes negotiated offline use [S08, S13] |
| [Oxford pronunciation guide](https://www.oxfordlearnersdictionaries.com/about/pronunciation_english.html) | Check dictionary conventions and variants | Reference; no wholesale entry/audio import [S11] |
| [BBC pronunciation](https://feeds.bbci.co.uk/learningenglish/english/features/pronunciation/) | British sound demonstrations and connected-speech lesson ideas | Link out; no video or audio downloads in the project [S07] |
| [Iowa Sounds of Speech](https://soundsofspeech.uiowa.edu/index.php) | Articulation visualization | Secondary reference with American-English scope; no copied animations or British relabelling [S18] |
| [Wikimedia Commons](https://commons.wikimedia.org/wiki/General_phonetics) | Discover per-file openly licensed phonetic recordings | Check each file's description, creator, licence version, and phonetic suitability; four candidates below |
| New commissioned/owner-supplied recordings | Consistent speaker and matched British word pairs | Recommended long-term supply if the owner arranges a suitable speaker and documented rights. None commissioned or recorded |
| Browser or generated speech | Optional clearly labelled supplementary reading | Not the authority for isolated IPA or the first discrimination assessment |

## Four concrete candidates

The machine-readable manifest is `content/seeds/audio-candidates.json`. File descriptions and licences were inspected; the actual sounds have **not been auditioned**, their download endpoints have not been tested, and there are no local files.

| ID | Content | Creator and stated licence | Intended role / remaining check |
| --- | --- | --- | --- |
| `a-ship-london` | “a ship”, speaker described as from London | Association Shtooka, Judith Franck; [CC BY 3.0 US](https://creativecommons.org/licenses/by/3.0/us/) | [File page](https://commons.wikimedia.org/wiki/File:En-uk-a_ship.ogg). Candidate phrase contrast; check speech, level, timing, and exact transcript [S22] |
| `a-sheep-london` | “a sheep”, same described speaker | Association Shtooka, Judith Franck; CC BY 3.0 US | [File page](https://commons.wikimedia.org/wiki/File:En-uk-a_sheep.ogg). Match against preceding phrase; do not label as the isolated word “sheep” [S23] |
| `phone-i-generic` | Isolated `[i]` reference | Denelson83; choose offered [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) option | [File page](https://commons.wikimedia.org/wiki/File:Close_front_unrounded_vowel.ogg). Generic phonetic reference; not confirmed British `/iː/` target [S24] |
| `phone-ih-generic` | Isolated `[ɪ]` reference | Denelson83; same CC BY-SA 3.0 option | [File page](https://commons.wikimedia.org/wiki/File:Near-close_near-front_unrounded_vowel.ogg). Same limitation; no inference of speaker accent [S25] |

The matched London phrases are a promising starting point because speaker identity is held constant in the metadata. This is a sourcing hypothesis, not an acoustic quality verdict. If used as the first exercise, label the stimuli “a ship / a sheep”, preview the article, and do not pretend the clips are word-only. If their clarity or model fit is poor, obtain different reviewed material; do not silently substitute generic vowel audio.

## Acquisition and review procedure

1. Open the exact file-description page again, record its permanent revision link if available, and confirm creator, terms, transcript, and any permission qualifications. Select a specific licence if options are offered.
2. Download only selected authorized assets during development, recording original URL, original filename, acquisition date, checksum, and local path. Preserve an unmodified original outside processed runtime assets.
3. Listen to the full clip. Verify accent/model fit, intended word or phrase, clean onset/offset, absence of a spoken letter name, and absence of added schwa when an isolated consonant was expected. Ask a competent pronunciation reviewer to approve the mapping.
4. Review paired stimuli together: same speaker where possible, consistent sound level, no obvious timing/noise cue that reveals the answer, and the intended phonological contrast. Add multiple reviewed tokens/speakers later to check generalization rather than clip memorization.
5. If processing is permitted, document trimming, normalization, format conversion, and the resulting checksum. For share-alike material, preserve the selected licence for adaptations and record changes. Do not infer that all app code automatically shares an audio file's licence.
6. Update the manifest and `THIRD_PARTY.md` before the clip enters a releasable lesson. Keep pending candidates separate from approved runtime assets. Respect unresolved permissions by using a reference link.

Keep audio at natural speed by default. A 0.8× replay can be an option after listening QA, with pitch preservation enabled where supported [MDN, S27](sources.md#s27--audio-playback-behavior). It is a transformed playback aid, not a fresh native slow recording. Never generate a new vowel by slowing, stretching, or pitch-shifting a different vowel.

## Vocabulary selection

Prioritize familiar, concrete words with one relevant meaning, clear British pronunciation, and a target that is easy to identify. Use original short Chinese glosses and original example sentences. Check frequency and learner level as a second filter using [Oxford's vocabulary rationale](https://www.oxfordlearnersdictionaries.com/about/wordlists/oxford3000-5000) [S12]; do not bulk-import a proprietary word list or assign its levels without checking the exact entry/sense.

The seed contains one candidate word for each of 44 sounds, plus twelve candidate minimal pairs. These are an editorial starting point, not a CEFR-certified corpus. Store word-level sources as entry links and distinguish “suggested reference” from “checked entry”. A phoneme symbol guide is not a substitute for checking the chosen word's actual recording.

Avoid spelling-based traps in the first lesson, rare words merely to create a symmetrical chart, ambiguous senses, and word pairs that differ in several phonemes. Later lessons can show that one spelling has several sounds and that a sound has several spellings.

Pairs in `minimal-pairs.json` include vowel contrasts, voicing contrasts, and selected consonant contrasts. They are strictly minimal under the proposed broad transcriptions, but their pedagogical priority, word familiarity, and audio realization still require review. Avoid mixing accents that merge a proposed contrast.

For a word such as “vision”, a longer or less basic example may be necessary to show `/ʒ/`. Explain its meaning and teach it as a sound example, not as evidence that all chart words are beginner-level. For `/ʊə/`, allow reference variants and exclude variable items from forced single-answer listening tests unless the actual stimuli and question make the distinction fair.
