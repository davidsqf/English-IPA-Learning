# Real frontal mouth photographs for all 44 symbols

Accessed and selected 2026-10-18. This extends the existing British teacher-video lessons; it does not replace them.

## Selection and reuse evidence

The [UCL MaFI repository](https://osf.io/mna8j/) contains the British B1 speech recordings used here. Its [public metadata](https://api.osf.io/v2/nodes/mna8j/) explicitly states that video stimuli and still frames are shared under CC BY 4.0 and permits still-frame reproduction in teaching materials with attribution. The [linked licence record](https://api.osf.io/v2/licenses/563c1cf88c5e4a3877f9e96a/) identifies CC-By Attribution 4.0 International. The permission statement, URLs and access date are preserved in the manifest; this is not an inference from a working media URL or from the article's licence alone.

[Krason, Zhang, Man & Vigliocco's paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC11289175/) identifies the B1–B3 speaker as a native British actress, describes frontal speech-word recordings, and records consent to publish photographs. The researchers are at University College London. Use B1 rather than the American A1/A2 files. Research stimuli provide authentic contextual mouth images; they are not an independently reviewed teaching chart of isolated phonemes. The existing British teacher lessons remain the full pronunciation model.

## Acquisition and images

The [B1 archive metadata](https://api.osf.io/v2/files/65d3414f6d0cb805e61a96df/) identifies `B1.zip`, 2,558,462,546 bytes, original SHA-256 `d68ca5e040c2314f8beb5413c3e60f60eed54edf9f2872f1dce2ec42a7c7b1f0`. Only 40 chosen MP4 ZIP members were fetched through normal public byte-range requests and verified against their ZIP-directory CRC values. The complete archive was not downloaded or claimed to be hash-verified. Per-acquired-video SHA-256 values are recorded separately.

Forty-four selected frames retain the full original 1280×720 or 1920×1080 camera composition, exported to JPEG with FFmpeg `-ss TIME -frames:v 1 -q:v 2`. No image generation, inpainting, anatomy editing, skin retouching, colour adjustment, ultrasound or MRI is used. The page uses a proportional CSS viewport equivalent to x=660, y=640, width=600, height=400 on a 1920×1080 reference frame to enlarge the mouth, while linking to the full JPEG. The manifest records exact word/member, timestamp and 25-fps frame index, CRC, source-video hash, shipped-image hash/bytes and the presentation crop. Source recordings stay in ignored working material; only the chosen 4.35 MB of stills are distributed.

Seven candidate frames per source word were inspected in contact sheets before choosing the target interval; additional intermediate frames were exported where needed. The photographed lip/jaw configuration is real, rather than a pose interpolated from a drawing. Some distinctions are not visible from the front, particularly voicing and hidden tongue gestures; contextual surrounding sounds also affect the lips. A single diphthong frame represents one part of the word, not its whole movement. /ʊə/ uses the traditional dictionary category in *purely*, alongside the existing contemporary-variation notice and teacher lesson. No claim of independent human phonetics certification is made.

## Interface

Visual thesis: preserve the calm blue/cream workspace with one clear photographic mouth view. Content order: symbol/Chinese cue → **正面口形** photo → unchanged teacher lesson → existing six word examples. Interaction: tap the photograph to view its full frame; open **图片来源** for word/time/authors/licence. No additional learning workflow, marketing introduction, quiz or review is introduced. Photos load locally; external YouTube code still waits for an explicit lesson click.

## Considered alternatives

- [icSpeech mouth positions](https://icspeech.com/mouth-positions.html) has frontal viseme photos, but follows an American inventory, and its [copyright notice](https://icspeech.com/copyright-notice.html) prohibits storing/transmitting content on another website without written permission. Not copied or hotlinked.
- Seeing Speech/Dynamic Dialects are credible articulatory resources, but their ultrasound/MRI/composite views do not satisfy the owner's requested plain frontal photograph. Not restored.
- Paid classroom mouth-card previews, unattributed reposts and generic face photos do not establish permission or the correct phonetic moment. Not substituted.
- Historical scanned lip photographs have older notation, coverage and quality constraints; they were not needed once an explicitly reusable British corpus was found.

## Selected all-44 mapping

The source file is `stimuli_B1/WORD.mp4` within B1.zip. Every row resolves to its own local image and exact provenance in `content/mouth-photos.json`.

| Symbol | Source word | Frame time | Frame index |
| --- | --- | --- | --- |
| /iː/ | see | 0.52 s | 13 |
| /ɪ/ | big | 0.60 s | 15 |
| /e/ | pen | 0.48 s | 12 |
| /æ/ | hand | 0.56 s | 14 |
| /ɑː/ | car | 0.88 s | 22 |
| /ɒ/ | hot | 0.64 s | 16 |
| /ɔː/ | door | 0.68 s | 17 |
| /ʊ/ | book | 0.88 s | 22 |
| /uː/ | blue | 1.04 s | 26 |
| /ʌ/ | love | 0.44 s | 11 |
| /ɜː/ | bird | 0.80 s | 20 |
| /ə/ | away | 0.32 s | 8 |
| /eɪ/ | day | 0.80 s | 20 |
| /aɪ/ | time | 0.52 s | 13 |
| /ɔɪ/ | boy | 0.44 s | 11 |
| /əʊ/ | home | 0.56 s | 14 |
| /aʊ/ | cow | 0.60 s | 15 |
| /ɪə/ | hear | 0.60 s | 15 |
| /eə/ | hair | 0.56 s | 14 |
| /ʊə/ | purely | 0.76 s | 19 |
| /p/ | pen | 0.24 s | 6 |
| /b/ | baby | 0.48 s | 12 |
| /t/ | time | 0.16 s | 4 |
| /d/ | dog | 0.52 s | 13 |
| /k/ | key | 0.32 s | 8 |
| /ɡ/ | good | 0.28 s | 7 |
| /f/ | fan | 0.52 s | 13 |
| /v/ | very | 0.44 s | 11 |
| /θ/ | think | 0.44 s | 11 |
| /ð/ | there | 0.32 s | 8 |
| /s/ | see | 0.32 s | 8 |
| /z/ | easy | 0.96 s | 24 |
| /ʃ/ | show | 0.52 s | 13 |
| /ʒ/ | decision | 0.64 s | 16 |
| /h/ | hot | 0.48 s | 12 |
| /tʃ/ | cheap | 0.68 s | 17 |
| /dʒ/ | just | 0.60 s | 15 |
| /m/ | mouth | 0.48 s | 12 |
| /n/ | name | 0.32 s | 8 |
| /ŋ/ | long | 0.88 s | 22 |
| /l/ | look | 0.68 s | 17 |
| /r/ | red | 0.24 s | 6 |
| /j/ | year | 0.16 s | 4 |
| /w/ | water | 0.56 s | 14 |

## Verification boundary

Data gates verify exact symbol coverage and shipped-file integrity; they cannot prove photo authenticity or suitability by themselves. Source sequences, all 44 selected images, actual browser rendering/decoding, comparison mappings, both themes, small-screen crops and retained video/word behavior must also be inspected. Actual outcomes are recorded in `docs/project/verification.md`.
