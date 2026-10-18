# Beginner British English teaching videos — v1.5

Updated 2026-10-18. The owner found the MRI clips too difficult for beginners and requested clear British English teaching videos showing a real person's mouth and explaining tongue placement. This supersedes the imaging implementation and its schema-2 manifest, preserved in Git history. The current runtime has no MRI, ultrasound or fabricated mouth/tongue imagery.

## Design and selection

Visual thesis: preserve the calm existing blue/cream workspace, with one useful real-teacher video as the visual focus. Content plan: selected symbol and Chinese cue → relevant teacher chapter → six example words, with original source details collapsed. Interaction thesis: learner-triggered playback, a clear choice between mouth demonstration and placement where needed, and prompt cancellation/replay. No promotional hero, quiz/review, decorative movement or additional learning workflow is introduced.

A sound model and a tongue-placement explanation are different teaching needs. The selected vowel lesson combines both. For consonants, the BBC supplies a clear British mouth model and a separate explicit placement lesson explains the tongue/lip/teeth actions; both choices remain beside the player. The old MRI images and the three-minute Emma consonant sound-list were not treated as adequate placement teaching. Emma's long accent masterclass was inspected as a candidate, but many initial consonant sections simply model words, so those sections were not substituted for the explicit explanations.

## Selected primary resources

- [Pronunciation with Emma: British vowels](https://www.youtube.com/watch?v=jUHuHVysCxs), published 2024-06-07, verified creator channel `UCNfm92h83W2i2ijc5Xwp_IA`. Twenty targets follow the original description's phoneme chapters. The creator identifies RP/Modern RP with English regional contrasts. Real face/mouth teaching, explanatory language and English captions are available. Non-core /i/ and triphthongs are excluded; traditional /ɪə eə ʊə/ and the /əʊ/ contrast are explicitly labelled.
- [BBC Learning English: all 44 sounds](https://www.youtube.com/watch?v=QxQUapA-2w4), official verified channel `UCHaHD477h-FeBbVh9Sh7syA`. The creator's description provides exact chapters for all sounds. The 24 consonant chapters are the British real-mouth demonstration option. Caption availability differs from the other resources; the app does not promise captions where the original has none.
- [Billie English: plosive placement](https://billie-english.com/2024/06/21/place-of-articulation-for-plosives-in-english/): /p b/ lips, /t d/ tongue-to-alveolar-ridge, /k ɡ/ tongue back/soft palate. The 2024 lesson shows the teacher on camera and provides original chapters for the three pairs. The primary page explicitly describes their formation.
- [Billie English: fricative placement](https://billie-english.com/2024/07/05/place-of-articulation-for-fricatives-in-english/): teeth/lip, dental, alveolar, postalveolar and glottal positions. The five original sections cover all nine targets. The website's postalveolar paragraph contains a /s z/ typo; the selected targets remain /ʃ ʒ/ according to the actual section heading and original video. This typo is not copied into the site's Chinese guidance.
- [Billie English: nasal placement](https://billie-english.com/2024/07/30/understanding-the-articulation-of-english-nasal-consonants/): original sections for /m/, /n/ and /ŋ/, with actual articulation demonstrations and nasal/oral distinction. The primary page has a /p t/ typo in a bilabial-plosive aside; the website's existing reviewed cues continue to use correct /p b/ bilabials. The selected clips concern the actual nasal targets, not that mistaken aside.
- [Billie English: affricates](https://billie-english.com/2024/01/22/the-2-affricate-sounds-t%CA%83-d%CA%92/): select the two original “How … is formed” chapters, not only example-word or minimal-pair/test sections. These show the teacher alongside explanatory material. The separate BBC view supplies a larger mouth demonstration, and fullscreen is available.
- [Billie English: approximants](https://billie-english.com/2024/01/22/approximant-sounds-r-l-w-j/): separate /w j r l/ formation chapters, ending before the creator's minimal-pair/test sections. /r/ is the English approximant [ɹ]; /l/ makes tongue contact with lateral airflow. The [publisher's British 44-sound chart](https://billie-english.com/wp-content/uploads/2024/01/english-pronunciation-cheat-sheet.pdf) and British-chart discussions establish the teaching inventory. No American flap or rolled /r/ is substituted.

The two older Billie lessons use a presenter inset alongside instructional text. Their placement teaching is useful, while the BBC mode provides a clearer/larger mouth image. The new 2024 place-of-articulation lessons show the teacher prominently. All sources are actual published lessons, not generated anatomy, AI presenters or edited/copied clips. Original Chinese cues and licensed human word recordings remain independent. Technical/source inspection is not independent expert phonetic certification.

## Player, rights and privacy

The [YouTube Terms](https://www.youtube.com/t/terms) permit showing videos through its embeddable player. All seven original watch pages identify the expected creators/channels and report `playableInEmbed: true` on the inspection date. This permits the official embedding mechanism; it is not a Creative Commons licence or permission to download/rehost their media. No video, audio track, thumbnail or caption file is downloaded or modified. The player retains provider/creator controls, branding, advertising, captions and external links. No proxy, signature extraction or restriction bypass is used.

The implementation follows the official [IFrame API](https://developers.google.com/youtube/iframe_api_reference) and [player parameters](https://developers.google.com/youtube/player_parameters): creator video ID, integer start/end chapter bounds, origin, playsinline, captions as provided, and normal playback. Player size stays at least 200×200. The privacy-enhanced player and API are loaded only after a learner clicks. Initial local UI testing confirms zero remote requests/frames before activation and actual decoded/advancing 854×480 teacher frames after activation. Loading failure or autoplay restrictions have truthful messages and the canonical creator link. Word playback does not depend on YouTube.

Teaching now requires internet/YouTube access; the local word recordings still work independently. Availability, regional restrictions, ads and caption tracks are controlled by the provider. A valid manifest or API `onReady` alone is not proof of actual footage playback: final verification must inspect real frames, time advancement, original chapter selection, range ending/replay and cancellation in browser engines. Exact outcomes belong in `docs/project/verification.md`.

## All-44 target matrix

Every target has a real-mouth demonstration and an explicit placement lesson. Vowels combine both in one range; consonants expose two functional modes. The integer endpoints below come from the original creators' chapter lists, and the end is the following chapter boundary. No downloaded clip is trimmed or transformed.

| Target | Real-mouth lesson | Placement lesson |
| --- | --- | --- |
| /iː/ | [Pronunciation with Emma 2:40–3:44](https://www.youtube.com/watch?v=jUHuHVysCxs&t=160s) | 同一段含口形与发音提示 |
| /ɪ/ | [Pronunciation with Emma 3:44–4:42](https://www.youtube.com/watch?v=jUHuHVysCxs&t=224s) | 同一段含口形与发音提示 |
| /e/ | [Pronunciation with Emma 9:17–9:42](https://www.youtube.com/watch?v=jUHuHVysCxs&t=557s) | 同一段含口形与发音提示 |
| /æ/ | [Pronunciation with Emma 11:52–12:43](https://www.youtube.com/watch?v=jUHuHVysCxs&t=712s) | 同一段含口形与发音提示 |
| /ɑː/ | [Pronunciation with Emma 13:49–14:48](https://www.youtube.com/watch?v=jUHuHVysCxs&t=829s) | 同一段含口形与发音提示 |
| /ɒ/ | [Pronunciation with Emma 14:48–15:06](https://www.youtube.com/watch?v=jUHuHVysCxs&t=888s) | 同一段含口形与发音提示 |
| /ɔː/ | [Pronunciation with Emma 11:06–11:52](https://www.youtube.com/watch?v=jUHuHVysCxs&t=666s) | 同一段含口形与发音提示 |
| /ʊ/ | [Pronunciation with Emma 6:41–7:56](https://www.youtube.com/watch?v=jUHuHVysCxs&t=401s) | 同一段含口形与发音提示 |
| /uː/ | [Pronunciation with Emma 7:56–9:17](https://www.youtube.com/watch?v=jUHuHVysCxs&t=476s) | 同一段含口形与发音提示 |
| /ʌ/ | [Pronunciation with Emma 12:43–13:49](https://www.youtube.com/watch?v=jUHuHVysCxs&t=763s) | 同一段含口形与发音提示 |
| /ɜː/ | [Pronunciation with Emma 10:30–11:06](https://www.youtube.com/watch?v=jUHuHVysCxs&t=630s) | 同一段含口形与发音提示 |
| /ə/ | [Pronunciation with Emma 9:42–10:30](https://www.youtube.com/watch?v=jUHuHVysCxs&t=582s) | 同一段含口形与发音提示 |
| /eɪ/ | [Pronunciation with Emma 15:30–15:50](https://www.youtube.com/watch?v=jUHuHVysCxs&t=930s) | 同一段含口形与发音提示 |
| /aɪ/ | [Pronunciation with Emma 15:50–16:07](https://www.youtube.com/watch?v=jUHuHVysCxs&t=950s) | 同一段含口形与发音提示 |
| /ɔɪ/ | [Pronunciation with Emma 16:07–16:34](https://www.youtube.com/watch?v=jUHuHVysCxs&t=967s) | 同一段含口形与发音提示 |
| /əʊ/ | [Pronunciation with Emma 17:00–18:33](https://www.youtube.com/watch?v=jUHuHVysCxs&t=1020s) | 同一段含口形与发音提示 |
| /aʊ/ | [Pronunciation with Emma 16:34–17:00](https://www.youtube.com/watch?v=jUHuHVysCxs&t=994s) | 同一段含口形与发音提示 |
| /ɪə/ | [Pronunciation with Emma 18:33–18:53](https://www.youtube.com/watch?v=jUHuHVysCxs&t=1113s) | 同一段含口形与发音提示 |
| /eə/ | [Pronunciation with Emma 18:53–19:50](https://www.youtube.com/watch?v=jUHuHVysCxs&t=1133s) | 同一段含口形与发音提示 |
| /ʊə/ | [Pronunciation with Emma 19:50–21:08](https://www.youtube.com/watch?v=jUHuHVysCxs&t=1190s) | 同一段含口形与发音提示 |
| /p/ | [BBC Learning English 28:43–31:00](https://www.youtube.com/watch?v=QxQUapA-2w4&t=1723s) | [Billie English 0:00–1:32](https://www.youtube.com/watch?v=uSWIxmNY1nM&t=0s) |
| /b/ | [BBC Learning English 31:00–33:14](https://www.youtube.com/watch?v=QxQUapA-2w4&t=1860s) | [Billie English 0:00–1:32](https://www.youtube.com/watch?v=uSWIxmNY1nM&t=0s) |
| /t/ | [BBC Learning English 33:14–35:24](https://www.youtube.com/watch?v=QxQUapA-2w4&t=1994s) | [Billie English 1:32–2:34](https://www.youtube.com/watch?v=uSWIxmNY1nM&t=92s) |
| /d/ | [BBC Learning English 35:24–37:29](https://www.youtube.com/watch?v=QxQUapA-2w4&t=2124s) | [Billie English 1:32–2:34](https://www.youtube.com/watch?v=uSWIxmNY1nM&t=92s) |
| /k/ | [BBC Learning English 40:59–42:59](https://www.youtube.com/watch?v=QxQUapA-2w4&t=2459s) | [Billie English 2:34–3:25](https://www.youtube.com/watch?v=uSWIxmNY1nM&t=154s) |
| /ɡ/ | [BBC Learning English 42:59–44:44](https://www.youtube.com/watch?v=QxQUapA-2w4&t=2579s) | [Billie English 2:34–3:25](https://www.youtube.com/watch?v=uSWIxmNY1nM&t=154s) |
| /f/ | [BBC Learning English 44:44–46:20](https://www.youtube.com/watch?v=QxQUapA-2w4&t=2684s) | [Billie English 1:18–3:45](https://www.youtube.com/watch?v=kF4uH0vWmt8&t=78s) |
| /v/ | [BBC Learning English 46:20–49:30](https://www.youtube.com/watch?v=QxQUapA-2w4&t=2780s) | [Billie English 1:18–3:45](https://www.youtube.com/watch?v=kF4uH0vWmt8&t=78s) |
| /θ/ | [BBC Learning English 49:30–50:41](https://www.youtube.com/watch?v=QxQUapA-2w4&t=2970s) | [Billie English 3:45–5:38](https://www.youtube.com/watch?v=kF4uH0vWmt8&t=225s) |
| /ð/ | [BBC Learning English 50:41–51:53](https://www.youtube.com/watch?v=QxQUapA-2w4&t=3041s) | [Billie English 3:45–5:38](https://www.youtube.com/watch?v=kF4uH0vWmt8&t=225s) |
| /s/ | [BBC Learning English 51:53–53:29](https://www.youtube.com/watch?v=QxQUapA-2w4&t=3113s) | [Billie English 5:38–7:24](https://www.youtube.com/watch?v=kF4uH0vWmt8&t=338s) |
| /z/ | [BBC Learning English 53:29–55:05](https://www.youtube.com/watch?v=QxQUapA-2w4&t=3209s) | [Billie English 5:38–7:24](https://www.youtube.com/watch?v=kF4uH0vWmt8&t=338s) |
| /ʃ/ | [BBC Learning English 55:05–57:42](https://www.youtube.com/watch?v=QxQUapA-2w4&t=3305s) | [Billie English 7:24–8:58](https://www.youtube.com/watch?v=kF4uH0vWmt8&t=444s) |
| /ʒ/ | [BBC Learning English 57:42–58:26](https://www.youtube.com/watch?v=QxQUapA-2w4&t=3462s) | [Billie English 7:24–8:58](https://www.youtube.com/watch?v=kF4uH0vWmt8&t=444s) |
| /h/ | [BBC Learning English 64:39–65:45](https://www.youtube.com/watch?v=QxQUapA-2w4&t=3879s) | [Billie English 10:31–11:58](https://www.youtube.com/watch?v=kF4uH0vWmt8&t=631s) |
| /tʃ/ | [BBC Learning English 37:29–39:14](https://www.youtube.com/watch?v=QxQUapA-2w4&t=2249s) | [Billie English 1:53–3:19](https://www.youtube.com/watch?v=S0tk49Ml1lc&t=113s) |
| /dʒ/ | [BBC Learning English 39:14–40:59](https://www.youtube.com/watch?v=QxQUapA-2w4&t=2354s) | [Billie English 4:25–6:03](https://www.youtube.com/watch?v=S0tk49Ml1lc&t=265s) |
| /m/ | [BBC Learning English 58:26–60:25](https://www.youtube.com/watch?v=QxQUapA-2w4&t=3506s) | [Billie English 2:00–3:21](https://www.youtube.com/watch?v=cSJhREF63ss&t=120s) |
| /n/ | [BBC Learning English 60:25–62:30](https://www.youtube.com/watch?v=QxQUapA-2w4&t=3625s) | [Billie English 3:21–4:29](https://www.youtube.com/watch?v=cSJhREF63ss&t=201s) |
| /ŋ/ | [BBC Learning English 62:30–64:39](https://www.youtube.com/watch?v=QxQUapA-2w4&t=3750s) | [Billie English 4:29–6:05](https://www.youtube.com/watch?v=cSJhREF63ss&t=269s) |
| /l/ | [BBC Learning English 65:45–69:20](https://www.youtube.com/watch?v=QxQUapA-2w4&t=3945s) | [Billie English 11:10–15:35](https://www.youtube.com/watch?v=b7eJdwWyg0E&t=670s) |
| /r/ | [BBC Learning English 69:20–72:47](https://www.youtube.com/watch?v=QxQUapA-2w4&t=4160s) | [Billie English 8:17–11:10](https://www.youtube.com/watch?v=b7eJdwWyg0E&t=497s) |
| /j/ | [BBC Learning English 74:50–75:43](https://www.youtube.com/watch?v=QxQUapA-2w4&t=4490s) | [Billie English 5:53–8:17](https://www.youtube.com/watch?v=b7eJdwWyg0E&t=353s) |
| /w/ | [BBC Learning English 72:47–74:50](https://www.youtube.com/watch?v=QxQUapA-2w4&t=4367s) | [Billie English 3:33–5:53](https://www.youtube.com/watch?v=b7eJdwWyg0E&t=213s) |
