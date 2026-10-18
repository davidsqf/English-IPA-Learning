# Content drafts and data contract

These UTF-8 JSON files are a development seed, **not a reviewed publication corpus**. They contain original selections and short Chinese glosses, reference links, and explicitly marked checks. No dictionary definitions, publisher example sentences, or media have been imported.

| File | Contents | Current state |
| --- | --- | --- |
| `seeds/en-gb-phonemes.json` | 44 reference entries: 12 monophthongs, 8 traditional diphthongs, 24 consonants | Editorial drafts; some example strings source-checked; all human phonetics review pending |
| `seeds/minimal-pairs.json` | 12 candidate word pairs, with contrast IDs, draft transcriptions, and Chinese meanings | All need individual entry checks, familiarity review, and paired audio |
| `seeds/audio-candidates.json` | Four specific Commons file candidates and licence/creator metadata | File-description checks only; no downloaded media or listening approval |

## Field meanings

- `schemaVersion`: currently 1; change it when a future runtime schema needs a migration.
- `accentModel`: `en-GB-dictionary-nonrhotic-v1`, an editorial convention rather than an assertion about every British speaker.
- `id`: stable ASCII identifier; references use IDs, never display strings as keys.
- `ipa`: actual Unicode without enclosing slashes in data. Render slashes for phonemic transcriptions, brackets for phonetic references as appropriate.
- `sourceIds` / `sourceId`: stable IDs in `docs/research/sources.md`.
- `suggestedReferenceUrl`: a proposed dictionary lookup, **not proof the page was retrieved**.
- `checkedSourceIds` and `textCheck`: narrow source-string verification; they do not indicate a human phonetic or teaching-quality review. A symbol-guide check covers that guide's example, not an independent entry/audio audit.
- `cefr: null`: not checked. Do not infer A1 from a short word or from this beginner project's scope.
- `audioId` / `isolatedAudioId: null`: no approved recording assigned. Never populate by guessing a remote filename or using text-to-speech as an invisible fallback.
- `editorialStatus: draft`, `phoneticsReview: pending`: not ready to advertise as reviewed teaching content.
- `localPath: null`, `downloaded: false`: metadata only. Do not treat a source-page URL as an audio endpoint.
- `assessmentReady` / `approvedForLesson`: explicitly false until content and audio checks are complete.

The 44 entries are the traditional teaching set; variants and the special status of `/ʊə/` are documented in the research. The same word can illustrate more than one sound, so repeated words across entries are intentional. Tokenize IPA through explicit sound IDs/tokens, not string character splitting; long vowels and affricates contain multiple code points.

## Promotion into runtime content

During development, introduce a separate reviewed runtime corpus rather than changing all draft flags in bulk. Include only reviewed entries in scored practice. A prototype may display draft reference entries if it clearly marks their status; it must never claim that missing or unreviewed audio is verified.

Each approved audio record should eventually include the actual transcript, speaker and accent information, phonetic target, licence and attribution, source/revision URL, original and processed checksums, local asset path, changes, and who performed listening/phonetics review with a date. Persist the original stimulus identity in practice attempts so changed recordings do not silently inherit old results.

References for a minimal pair should cover both word senses and actual model pronunciations. Vary tokens or speakers in later assessment to reduce memorization of one clip. Phrase stimuli such as “a ship” must not be mapped directly to a bare-word `audioId` without a separate phrase record and matching exercise wording.

## Released runtime corpus

`symbol-library.json` contains the owner-accepted 44-entry runtime corpus. `audio.json` (schema 2) contains 37 bundled contextual recordings for all 44 symbols, with per-file attribution, licence, original SHA-1, acquired SHA-256, shipped SHA-256, source URL, transformations and actual review facts. The original seed files above remain historical drafts.

All audio is in `public/audio/`, is included in static builds, and requires no separate download. Original Ogg files were converted to MP3 for compatibility; existing Wikimedia MP3 derivatives were copied unchanged. No independent expert phonetics review is claimed. The owner's explicit acceptance and publication authorization supersede the earlier local-only release boundary.

The traditional `/ʊə/` entry uses *during* with British dictionary notation `/ˈdjʊərɪŋ/`; the source is TaxRebate's UK recording on Commons, linked from Wiktionary's pronunciation section. The cue notes contemporary variants. The Celestianpower *poor* candidate was rejected: its Commons file is also the target of the *pore* redirect, so it is unsuitable evidence for a distinct `/ʊə/`.

## Six-example and comparison extension

Runtime symbol schema 2 adds exactly six `examples` with `word`, broad British `ipa`, original `gloss` and dictionary `referenceUrl`. The first example matches the existing `word` preview and bundled primary recording. No local audio is implied by a dictionary lookup link. Search includes all six examples.

`comparisons.json` stores eleven recommended groups as ordered `symbolIds` arrays (two or three entries), with original contrast tips and `cueSourceIds`. Custom comparisons are runtime selections of two distinct symbols. `pronunciation-sources.json` resolves all Chinese cue source IDs; read the corresponding research review for source boundaries and pronunciation variants. The original speed controls have been removed; audio media are unchanged.

## Per-word voice controls (runtime symbol schema 3)

Each of the 264 example entries now includes `sampleId: string | null`. A non-null ID references one of the existing 37 human recordings, retaining its actual word/phrase transcript. There are 70 recorded example occurrences and 194 device-speech occurrences (177 distinct example words overall). A null ID explicitly selects **ordinary-word reading** by the browser/OS speech service, with the existing example `word` as input and an available `en-GB` voice. It never means an absent bundled audio file and must never feed the IPA string to speech synthesis.

Human recordings remain the reference for all 44 symbols and comparison sequences. Device speech is labelled as synthesized in button names/titles, playback status and the sources view; its realization can differ from the traditional broad transcription, particularly `/ʊə/`. Prefer a local British voice, require an explicit British language tag, retain natural rate/pitch, cancel on replacement/navigation, and report missing/failed voices honestly with the dictionary link available. Device voices depend on browser/OS installation and may require a network connection. No synthesized audio files or proprietary dictionary recordings are distributed.

Implementation references: [MDN getVoices](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices), [utterance lifecycle](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance), and [cancellation](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/cancel), inspected 2026-10-18. See project decision D013.

## Articulation visuals (schema 1)

`articulation.json` supplies exactly one entry per existing symbol ID (44 entries, 120 explicit phases). Each has original Chinese `lipCue`, `tongueCue`, `movementCue`, any `variantNote`, specific `sourceIds` and `sourceNotes`, an `initialPhase`, and two/three phases. Each phase references one of 35 original `poses` and independently declares `airflow`, `contact`, `voiced` and `velum`. Geometry tuples encode tongue back/body/tip x/y and frontal lip width/opening. The side view faces right: larger x means further forward. Coordinates are original relative design choices, not measurements or traces of the source figures.

Preserve specific oral closures, nasal routing and lowered velum, lateral airflow, the glottal focus for /h/, approximant [ɹ], and one-syllable diphthong directions. Do not infer a universal tongue shape, fixed /h/ oral posture, exact animation-to-audio timing or independent expert review. Some paired consonants intentionally share oral geometry and differ in voicing. Traditional centring diphthongs, modern /uː/ fronting and clear/dark /l/ are explicitly scoped in variant notes.

`src/articulation.ts` renders original, labelled inline SVG and finite animation. Each figure has a meaningful initial still; manual steps and reduced motion work without animated transitions. The build gate `scripts/verify-articulation.mjs` and articulation tests require complete coverage, valid local poses and source references. See [the source review and 44-entry matrix](../docs/research/articulation-visuals.md).
