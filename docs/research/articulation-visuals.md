# Published articulation media — v1.4

Updated 2026-10-18. The owner's request to replace the custom mouth animation with actual published pictures/videos supersedes the v1.3 original SVG approach (retained in Git history). No invented anatomy, interpolated poses, drawn airflow, generated pictures or synthetic movement remains in the runtime.

## Selected resources and actual inspection

- [Dynamic Dialects](https://www.dynamicdialects.ac.uk/): University of Glasgow-led accent resource, Lawson, Stuart-Smith, Scobbie and Nakai (2018). Its [accent chart](https://www.dynamicdialects.ac.uk/accent-chart/) supplies 20 **whole-word** videos from the Southampton, England speaker (male, 18–24; speaker 5). The original recordings combine synchronized ultrasound tongue imaging, lip-camera video and audio. Each vowel is mapped by the publisher's lexical-set word, rather than substituting generic cardinal vowels for English targets.
- [Seeing Speech IPA charts](https://www.seeingspeech.ac.uk/ipa-charts/): Lawson, Stuart-Smith, Scobbie and Nakai (2018), University of Glasgow. 22 original **MRI 2** demonstrations by phonetician Janet Beck, selected using the publisher's actual sound controls. These are international phonetic demonstrations in vowel contexts, not a claim that all British speakers have exactly this anatomy or accent. English dictionary /r/ maps specifically to approximant [ɹ], never trill [r].
- [STAR Non-disordered Speech Database](https://www.seeingspeech.ac.uk/speechstar/speech-database/): Lawson, Cleland and Stuart-Smith (2023), University of Glasgow. Two adult London videos (SS speaker 25, male, 25): *cheap* for onset /tʃ/ and *hedged* for /dʒ/ in coda position, followed by /d/. The source records the targets as the single-character ligatures ʧ/ʤ. These are actual whole-word examples, not isolated affricates or edited fragments. No speech-disorder or child recordings are used.

The newer MRI 2 material was recorded in 2022–2023 at 6.25 fps according to the chart page and has higher image resolution than MRI 1. The selected original players credit **University of Strathclyde, 2022**, with speaker Janet Beck. That recording credit is retained visibly in each player, alongside the Seeing Speech website citation. Audio (including any publisher-provided overdubbing) is the exact supplied original; no soundtrack change is made here. The source resolution/frame rate are preserved without enhancement or interpolation.

All three sites and original player metadata were inspected in a normal browser on 2026-10-18. Each media URL and poster URL was obtained from the **opened original player**, not inferred from filenames. Files were copied byte-for-byte through the browser's ordinary published download path. No access controls were bypassed. Direct command-line requests returned 403; the normal public browser and its published players worked. Provider citation links and exact asset URLs are preserved in `content/articulation.json`.

## Rights and selection boundaries

Each publisher's homepage explicitly licenses the work under [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/): unchanged non-commercial redistribution with credit. Each also prohibits AI training, machine learning and automated transformation without written permission. This personal educational website uses **complete unmodified MP4s and the original published posters**. No trimming, transcoding, lip/tongue alteration, image tracing, generated animation, source-image extraction, speed change, or synthesized video is performed. Attribution and the licence appear under every player and in `THIRD_PARTY.md`; hashes and original URLs are recorded for every file. Commercial use or adapted material would require a separate rights basis. No source-code licence or publisher endorsement is implied.

Pronunciation with Emma's [British phonemic chart](https://pronunciationwithemma.com/phonemic-chart/) was investigated as a potential full-inventory face-video resource. It exposes per-symbol MP4 links, but no redistribution licence was established, so none of those clips, images, word lists or explanation text is copied. BBC pronunciation material was considered, but was unnecessary once explicitly licensed real tongue/lip recordings covered all 44 targets. Availability of an MP4 alone was not treated as permission.

## Pedagogical limits

For the 20 Dynamic Dialects vowels and two STAR affricates, ultrasound shows the tongue surface in a midsagittal slice and the camera inset shows the lips. For the other 22 consonants, Seeing Speech MRI 2 shows the vocal tract, lips and tongue profile together. MRI was selected after visual inspection established that the chart’s ultrasound-only clips did not include a lip camera. Neither modality directly shows airflow or vocal-fold vibration. The publisher's palate guide, where present, is retained in the original footage. Learners should use the Chinese guidance and primary word reference alongside the video.

These videos preserve the actual speaker and full context. They are not time-aligned with the site's separate primary example recordings; starting either kind of playback stops the other. Native controls permit normal-speed play/pause/seeking and fullscreen. Original posters remain visible without autoplay. Files are shipped locally, so no external iframe, provider analytics, third-party player dependency is used. The local HTTP-server version needs no internet connection for media; the public site still needs to fetch its own hosted video/poster assets.

The traditional 44-symbol dictionary inventory is preserved. Southampton vowels are a specific southern English accent, not a universal RP standard. Traditional /ɪə eə ʊə/ entries are mapped to NEAR/SQUARE/CURE words; the visible note explicitly says the recording may exhibit contemporary monophthongal or other regional variants. They are **not** presented as measured canonical endpoint movements. /uː/ fronting and the final weak vowel of *later* are also labelled. The recorded target mapping is based on publisher lexical-set/phone labels and technical inspection; no independent expert phonetic audit is claimed.

## Complete source matrix

Every row below resolves to one distinct original video and original poster. Exact URLs, SHA-256, byte counts, duration, resolution, codecs, speaker, context and licence are in the schema-2 manifest. `scripts/verify-articulation.mjs` checks coverage, rights/provenance and file integrity before every build.

| Symbol | Recording/context | Source | Duration | Original player |
| --- | --- | --- | --- | --- |
| /iː/ | fleece | Dynamic Dialects | 3.48s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_FLEECE&name=fleece) |
| /ɪ/ | kit | Dynamic Dialects | 5.67s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_KIT&name=kit) |
| /e/ | dress | Dynamic Dialects | 5.67s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_DRESS&name=dress) |
| /æ/ | trap | Dynamic Dialects | 4.32s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_TRAP&name=trap) |
| /ɑː/ | palm | Dynamic Dialects | 3.62s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_PALM&name=palm) |
| /ɒ/ | lot | Dynamic Dialects | 5.71s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_LOT&name=lot) |
| /ɔː/ | thought | Dynamic Dialects | 7.11s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_THOUGHT&name=thought) |
| /ʊ/ | foot | Dynamic Dialects | 5.67s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_FOOT&name=foot) |
| /uː/ | goose | Dynamic Dialects | 5.62s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_GOOSE&name=goose) |
| /ʌ/ | strut | Dynamic Dialects | 5.85s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_STRUT&name=strut) |
| /ɜː/ | nurse | Dynamic Dialects | 5.71s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_NURSE&name=nurse) |
| /ə/ | later | Dynamic Dialects | 7.06s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_LATER&name=later) |
| /eɪ/ | face | Dynamic Dialects | 5.48s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_FACE&name=face) |
| /aɪ/ | price | Dynamic Dialects | 5.29s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_PRICE&name=price) |
| /ɔɪ/ | choice | Dynamic Dialects | 3.95s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_CHOICE&name=choice) |
| /əʊ/ | goat | Dynamic Dialects | 5.20s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_GOAT&name=goat) |
| /aʊ/ | mouth | Dynamic Dialects | 4.37s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_MOUTH&name=mouth) |
| /ɪə/ | near | Dynamic Dialects | 6.32s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_NEAR&name=near) |
| /eə/ | square | Dynamic Dialects | 5.06s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_SQUARE&name=square) |
| /ʊə/ | cure | Dynamic Dialects | 3.67s | [Source](https://dynamicdialects.ac.uk/accent-chart/#speaker=5&id=Southampton_YM_CURE&name=cure) |
| /p/ | Janet Beck, MRI 2 | Seeing Speech | 8.66s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=112) |
| /b/ | Janet Beck, MRI 2 | Seeing Speech | 7.60s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=98) |
| /t/ | Janet Beck, MRI 2 | Seeing Speech | 7.85s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=116) |
| /d/ | Janet Beck, MRI 2 | Seeing Speech | 6.60s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=100) |
| /k/ | Janet Beck, MRI 2 | Seeing Speech | 4.95s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=107) |
| /ɡ/ | Janet Beck, MRI 2 | Seeing Speech | 6.30s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=609) |
| /f/ | Janet Beck, MRI 2 | Seeing Speech | 7.60s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=102) |
| /v/ | Janet Beck, MRI 2 | Seeing Speech | 6.80s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=118) |
| /θ/ | Janet Beck, MRI 2 | Seeing Speech | 7.30s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=952) |
| /ð/ | Janet Beck, MRI 2 | Seeing Speech | 6.80s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=240) |
| /s/ | Janet Beck, MRI 2 | Seeing Speech | 8.28s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=115) |
| /z/ | Janet Beck, MRI 2 | Seeing Speech | 6.50s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=122) |
| /ʃ/ | Janet Beck, MRI 2 | Seeing Speech | 7.00s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=643) |
| /ʒ/ | Janet Beck, MRI 2 | Seeing Speech | 6.30s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=658) |
| /h/ | Janet Beck, MRI 2 | Seeing Speech | 7.60s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=104) |
| /tʃ/ | cheap | STAR — Non-disordered Speech Database | 2.90s | [Source](https://seeingspeech.ac.uk/speechstar/speech-database/#location=528) |
| /dʒ/ | hedged | STAR — Non-disordered Speech Database | 2.70s | [Source](https://seeingspeech.ac.uk/speechstar/speech-database/#location=539) |
| /m/ | Janet Beck, MRI 2 | Seeing Speech | 7.47s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=109) |
| /n/ | Janet Beck, MRI 2 | Seeing Speech | 7.60s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=110) |
| /ŋ/ | Janet Beck, MRI 2 | Seeing Speech | 5.00s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=331) |
| /l/ | Janet Beck, MRI 2 | Seeing Speech | 6.20s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=108) |
| /r/ | Janet Beck, MRI 2 [ɹ] | Seeing Speech | 6.57s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=633) |
| /j/ | Janet Beck, MRI 2 | Seeing Speech | 7.08s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=1&datatype=4&speaker=1#location=106) |
| /w/ | Janet Beck, MRI 2 | Seeing Speech | 7.00s | [Source](https://seeingspeech.ac.uk/ipa-charts/?chart=3&datatype=4&speaker=1#location=119) |
