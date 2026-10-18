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
