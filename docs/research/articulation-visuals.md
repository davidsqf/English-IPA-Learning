# Mouth and tongue visual design

Task: give every one of the 44 existing British English symbols a mouth/tongue picture and a demonstrable movement sequence, with credible sources. Preserve the concise explorer, per-word playback and comparison features.

## Visual and interaction plan

- **Visual thesis:** original, uncluttered anatomical schematics on the existing warm surface; blue identifies the tongue, explicit arrows identify airflow and movement.
- **Content plan:** place front-view lips beside a side-section of the mouth in the selected-symbol workspace; show the same visual inside comparison panels. Short phase labels and a source disclosure supply the secondary detail. No marketing hero, new lesson/quiz flow or decorative cards.
- **Interaction thesis:** a finite, user-triggered articulation replay; manual previous/next phase controls for close inspection and reduced motion; smoothly interpolate the tongue and lip positions only when motion is permitted. Stop animations on navigation and replacement. A meaningful still remains without animation.

## Scope and fidelity

These are original teaching schematics, not MRI measurements, traced publisher illustrations or anatomically calibrated reconstructions. Positions encode relative place, height, lip opening/rounding and constriction. Do not imply that every British speaker has an identical tongue contour. Preserve the existing traditional learner-dictionary vowel inventory and label the modern variants of centring diphthongs. English dictionary `/r/` depicts the approximant [ɹ], not a trill. Frontal lip shape alone cannot explain tongue gestures; a lateral-airflow inset is needed for /l/. Nasals require an oral closure and an open nasal route. /h/ requires a glottal indication, not an invented oral constriction.

## Reference review

Sources were inspected on 2026-10-18. No third-party videos, diagrams or other media are copied into the site.

- [Peter Roach, English Phonetics and Phonology, 4th edition, Cambridge excerpt](https://assets.cambridge.org/97805217/17403/excerpt/9780521717403_excerpt.pdf), §§2.1–2.3, printed pp. 8–14. Inspected the anatomy figure, the /iː æ/ tongue profiles, the short-vowel positions and descriptions. Supports speech organs, velum position, lip posture and relative tongue dimensions. Our silhouettes, control points and layout are original and are not traced from these figures.
- [Barber, Beal and Shaw, The English Language, Cambridge excerpt](https://assets.cambridge.org/97810092/28626/excerpt/9781009228626_excerpt.pdf), printed pp. 2–10. Inspected RP vowel and diphthong figures (not the adjacent General American figures), consonant manner descriptions, nasal/lateral airflow and RP approximant /r/. Main source for the traditional British dictionary model and gestures. The numeric SVG positions are our schematic design, not coordinates extracted from the charts.
- [University of Glasgow, Seeing Speech IPA chart](https://www.seeingspeech.ac.uk/ipa-charts/), Lawson, Stuart-Smith, Scobbie and Nakai (2018). A university resource showing articulation through MRI, ultrasound and animation; classification/real-imaging reference and link for further inspection. Generic IPA demonstrations do not define an exact English allophone. The English /r/ reference is **[ɹ] in the approximant row**, never [r] in the trill row. No university media is downloaded or embedded.
- [Cambridge, Phonetics Overview](https://www.cambridge.org/gb/files/1413/8018/5069/PhoneticsOverview.pdf), §2. General consonant place/manner, affricates and laterals. Its American-English vowel examples are deliberately not used as the British vowel model.
- [Pronunciation Studio, Monophthongs](https://pronunciationstudio.com/lessons/monophthongs-1-13/), centre-vowel discussion, supports modern British /uː/ fronting; our high /uː/ pose allows a more central location and explicitly notes variation.
- [Joseph Hudson, Diphthongs](https://pronunciationstudio.com/pronunciation-guide-diphthong-vowel-sounds/), supports one-syllable glides and modern /ɪə eə ʊə/ variants. The UI retains the existing traditional Oxford-style symbols and labels their scope.

These are original Chinese summaries of articulatory facts, not reproduced publisher definitions or drawings. Sources support the principles; they do not endorse our website or certify our animation accuracy. This is editorial source checking, not independent expert or clinical review.

## Drawing and movement conventions

- The side view faces **right**: tongue front = right, tongue back = left. The frontal inset displays lip posture. All views remain meaningful as stills; playback is user-triggered and finite.
- A filled blue target marks closure. Fricative targets use an open ring for the narrow gap. Stops close and release; affricates close and release into friction. The tongue is not incorrectly treated as the active closing organ for /p b m f v/.
- For /m n ŋ/, the mouth route stays blocked while the lowered velum opens the nasal route. No oral airflow arrow is drawn through that closure.
- For /l/, the frontal inset depicts a central contact with channels at the sides; the sagittal midline does not carry a false through-tongue airflow arrow. A clear word-initial [l] is shown; dark [ɫ] is noted.
- /h/ has a glottal focus and an unobstructed oral passage. Its pictured oral shape follows the existing example **hat**; the text explains that this changes with the next vowel.
- /r/ shows one approximant configuration without contact/trilling. /j/ and /w/ show high onset configurations sliding into the next vowel in **yes** and **window** respectively; those endpoints are examples, not universal fixed endpoints.
- Vowels show relative tongue/lip posture; their initial preparation and subsequent steady phase must not imply repetitive tongue flapping. /ɜː ə/ are both central: stress/duration/relaxation matter, not a fictitious large place change. /uː/ is explicitly variable/fronted in modern British speech.
- Diphthongs display a continuous direction toward the second position within **one syllable**; endpoint shapes are pedagogical directions, not a requirement to utter two full vowels. Traditional centring diphthongs carry a modern-variation note.
- No timing, anatomy dimensions, articulator coordinates or animation-to-audio alignment is claimed to be measured. Geometry is original schematic code. Source files are inline SVG and local JSON, so the visuals need no network, external embedding or additional runtime dependency.
- Both explorer and preset/custom comparison panels show the symbol's visual. Reduced-motion mode uses manual phase changes with no animated transition; pause, navigation, replacement and backgrounding cancel motion.

## Symbol-by-symbol mapping

The runtime manifest is `content/articulation.json`; every symbol has lip, tongue, movement, phase and specific source-reference notes.

| Symbol | Kind / place | Movement phases | Source notes |
| --- | --- | --- | --- |

| /iː/ | vowel / 前高 | 准备 → 保持 | Roach §§2.1–2.3, pp. 8–14; Barber et al., Fig. 1.4a and RP vowel description, pp. 3–5, 10. Modern /uː/ fronting: Pronunciation Studio, Monophthongs, centre vowels. |
| /ɪ/ | vowel / 近前、近高 | 准备 → 保持 | Roach §§2.1–2.3, pp. 8–14; Barber et al., Fig. 1.4a and RP vowel description, pp. 3–5, 10. Modern /uː/ fronting: Pronunciation Studio, Monophthongs, centre vowels. |
| /e/ | vowel / 前中 | 准备 → 保持 | Roach §§2.1–2.3, pp. 8–14; Barber et al., Fig. 1.4a and RP vowel description, pp. 3–5, 10. Modern /uː/ fronting: Pronunciation Studio, Monophthongs, centre vowels. |
| /æ/ | vowel / 前低 | 准备 → 保持 | Roach §§2.1–2.3, pp. 8–14; Barber et al., Fig. 1.4a and RP vowel description, pp. 3–5, 10. Modern /uː/ fronting: Pronunciation Studio, Monophthongs, centre vowels. |
| /ɑː/ | vowel / 后低 | 准备 → 保持 | Roach §§2.1–2.3, pp. 8–14; Barber et al., Fig. 1.4a and RP vowel description, pp. 3–5, 10. Modern /uː/ fronting: Pronunciation Studio, Monophthongs, centre vowels. |
| /ɒ/ | vowel / 后低 | 准备 → 保持 | Roach §§2.1–2.3, pp. 8–14; Barber et al., Fig. 1.4a and RP vowel description, pp. 3–5, 10. Modern /uː/ fronting: Pronunciation Studio, Monophthongs, centre vowels. |
| /ɔː/ | vowel / 后中 | 准备 → 保持 | Roach §§2.1–2.3, pp. 8–14; Barber et al., Fig. 1.4a and RP vowel description, pp. 3–5, 10. Modern /uː/ fronting: Pronunciation Studio, Monophthongs, centre vowels. |
| /ʊ/ | vowel / 近后、近高 | 准备 → 保持 | Roach §§2.1–2.3, pp. 8–14; Barber et al., Fig. 1.4a and RP vowel description, pp. 3–5, 10. Modern /uː/ fronting: Pronunciation Studio, Monophthongs, centre vowels. |
| /uː/ | vowel / 高 | 准备 → 保持 | Roach §§2.1–2.3, pp. 8–14; Barber et al., Fig. 1.4a and RP vowel description, pp. 3–5, 10. Modern /uː/ fronting: Pronunciation Studio, Monophthongs, centre vowels. |
| /ʌ/ | vowel / 中央偏低 | 准备 → 保持 | Roach §§2.1–2.3, pp. 8–14; Barber et al., Fig. 1.4a and RP vowel description, pp. 3–5, 10. Modern /uː/ fronting: Pronunciation Studio, Monophthongs, centre vowels. |
| /ɜː/ | vowel / 中央中 | 准备 → 保持 | Roach §§2.1–2.3, pp. 8–14; Barber et al., Fig. 1.4a and RP vowel description, pp. 3–5, 10. Modern /uː/ fronting: Pronunciation Studio, Monophthongs, centre vowels. |
| /ə/ | vowel / 中央中 | 准备 → 保持 | Roach §§2.1–2.3, pp. 8–14; Barber et al., Fig. 1.4a and RP vowel description, pp. 3–5, 10. Modern /uː/ fronting: Pronunciation Studio, Monophthongs, centre vowels. |
| /eɪ/ | diphthong / 滑动 | 起音 → 滑动 → 滑向 | Barber et al., diphthong movement/one syllable and RP glide figure, pp. 5–6, 9; Hudson, corresponding diphthong section and centring-vowel variants. |
| /aɪ/ | diphthong / 滑动 | 起音 → 滑动 → 滑向 | Barber et al., diphthong movement/one syllable and RP glide figure, pp. 5–6, 9; Hudson, corresponding diphthong section and centring-vowel variants. |
| /ɔɪ/ | diphthong / 滑动 | 起音 → 滑动 → 滑向 | Barber et al., diphthong movement/one syllable and RP glide figure, pp. 5–6, 9; Hudson, corresponding diphthong section and centring-vowel variants. |
| /əʊ/ | diphthong / 滑动 | 起音 → 滑动 → 滑向 | Barber et al., diphthong movement/one syllable and RP glide figure, pp. 5–6, 9; Hudson, corresponding diphthong section and centring-vowel variants. |
| /aʊ/ | diphthong / 滑动 | 起音 → 滑动 → 滑向 | Barber et al., diphthong movement/one syllable and RP glide figure, pp. 5–6, 9; Hudson, corresponding diphthong section and centring-vowel variants. |
| /ɪə/ | diphthong / 滑动 | 起音 → 滑动 → 滑向 | Barber et al., diphthong movement/one syllable and RP glide figure, pp. 5–6, 9; Hudson, corresponding diphthong section and centring-vowel variants. |
| /eə/ | diphthong / 滑动 | 起音 → 滑动 → 滑向 | Barber et al., diphthong movement/one syllable and RP glide figure, pp. 5–6, 9; Hudson, corresponding diphthong section and centring-vowel variants. |
| /ʊə/ | diphthong / 滑动 | 起音 → 滑动 → 滑向 | Barber et al., diphthong movement/one syllable and RP glide figure, pp. 5–6, 9; Hudson, corresponding diphthong section and centring-vowel variants. |
| /p/ | stop / 双唇 | 准备 → 闭塞 → 释放 | Roach §2.1 articulators, pp. 8–10; Barber et al., stops and voicing, pp. 2, 6–7; Seeing Speech plosive row at matching place. Voicing here is schematic; actual voicing/aspiration depends on context. |
| /b/ | stop / 双唇 | 准备 → 闭塞 → 释放 | Roach §2.1 articulators, pp. 8–10; Barber et al., stops and voicing, pp. 2, 6–7; Seeing Speech plosive row at matching place. Voicing here is schematic; actual voicing/aspiration depends on context. |
| /t/ | stop / 齿龈 | 准备 → 闭塞 → 释放 | Roach §2.1 articulators, pp. 8–10; Barber et al., stops and voicing, pp. 2, 6–7; Seeing Speech plosive row at matching place. Voicing here is schematic; actual voicing/aspiration depends on context. |
| /d/ | stop / 齿龈 | 准备 → 闭塞 → 释放 | Roach §2.1 articulators, pp. 8–10; Barber et al., stops and voicing, pp. 2, 6–7; Seeing Speech plosive row at matching place. Voicing here is schematic; actual voicing/aspiration depends on context. |
| /k/ | stop / 软腭 | 准备 → 闭塞 → 释放 | Roach §2.1 articulators, pp. 8–10; Barber et al., stops and voicing, pp. 2, 6–7; Seeing Speech plosive row at matching place. Voicing here is schematic; actual voicing/aspiration depends on context. |
| /ɡ/ | stop / 软腭 | 准备 → 闭塞 → 释放 | Roach §2.1 articulators, pp. 8–10; Barber et al., stops and voicing, pp. 2, 6–7; Seeing Speech plosive row at matching place. Voicing here is schematic; actual voicing/aspiration depends on context. |
| /f/ | fricative / 唇齿 | 准备 → 留缝 → 送气 | Roach §2.1 dental/labiodental/alveolar anatomy, pp. 9–10; Barber et al., English fricatives, pp. 6–7; Seeing Speech corresponding place and fricative row. |
| /v/ | fricative / 唇齿 | 准备 → 留缝 → 送气 | Roach §2.1 dental/labiodental/alveolar anatomy, pp. 9–10; Barber et al., English fricatives, pp. 6–7; Seeing Speech corresponding place and fricative row. |
| /θ/ | fricative / 齿间／上齿 | 准备 → 留缝 → 送气 | Roach §2.1 dental/labiodental/alveolar anatomy, pp. 9–10; Barber et al., English fricatives, pp. 6–7; Seeing Speech corresponding place and fricative row. |
| /ð/ | fricative / 齿间／上齿 | 准备 → 留缝 → 送气 | Roach §2.1 dental/labiodental/alveolar anatomy, pp. 9–10; Barber et al., English fricatives, pp. 6–7; Seeing Speech corresponding place and fricative row. |
| /s/ | fricative / 齿龈 | 准备 → 留缝 → 送气 | Roach §2.1 dental/labiodental/alveolar anatomy, pp. 9–10; Barber et al., English fricatives, pp. 6–7; Seeing Speech corresponding place and fricative row. |
| /z/ | fricative / 齿龈 | 准备 → 留缝 → 送气 | Roach §2.1 dental/labiodental/alveolar anatomy, pp. 9–10; Barber et al., English fricatives, pp. 6–7; Seeing Speech corresponding place and fricative row. |
| /ʃ/ | fricative / 齿龈后 | 准备 → 留缝 → 送气 | Roach §2.1 dental/labiodental/alveolar anatomy, pp. 9–10; Barber et al., English fricatives, pp. 6–7; Seeing Speech corresponding place and fricative row. |
| /ʒ/ | fricative / 齿龈后 | 准备 → 留缝 → 送气 | Roach §2.1 dental/labiodental/alveolar anatomy, pp. 9–10; Barber et al., English fricatives, pp. 6–7; Seeing Speech corresponding place and fricative row. |
| /h/ | fricative / 声门 | 准备 → 送气 → 保持 | Barber et al., /h/ friction at the glottis and unobstructed oral passage, p. 7; Seeing Speech glottal fricative [h]. |
| /tʃ/ | affricate / 齿龈后 | 闭塞 → 留缝 → 摩擦释放 | Barber et al., affricated stop release, p. 7; Cambridge Phonetics Overview §2.2 affricates, pp. 10–11. |
| /dʒ/ | affricate / 齿龈后 | 闭塞 → 留缝 → 摩擦释放 | Barber et al., affricated stop release, p. 7; Cambridge Phonetics Overview §2.2 affricates, pp. 10–11. |
| /m/ | nasal / 双唇 | 口腔闭塞 → 鼻腔送气 → 保持鼻音 | Roach §2.1 velum and nasal passage, pp. 9–10; Barber et al., nasal oral closures matching /b d ɡ/ and open nasal passage, p. 7; Seeing Speech nasal row. |
| /n/ | nasal / 齿龈 | 口腔闭塞 → 鼻腔送气 → 保持鼻音 | Roach §2.1 velum and nasal passage, pp. 9–10; Barber et al., nasal oral closures matching /b d ɡ/ and open nasal passage, p. 7; Seeing Speech nasal row. |
| /ŋ/ | nasal / 软腭 | 口腔闭塞 → 鼻腔送气 → 保持鼻音 | Roach §2.1 velum and nasal passage, pp. 9–10; Barber et al., nasal oral closures matching /b d ɡ/ and open nasal passage, p. 7; Seeing Speech nasal row. |
| /l/ | lateral / 齿龈 | 准备 → 舌尖接触 → 两侧送气 | Barber et al., lateral airflow on one/both sides, p. 7; Cambridge Phonetics Overview, laterals, p. 11; Seeing Speech lateral approximant [l]. |
| /r/ | approximant / 齿龈后附近 | 准备 → 靠近上腭 → 保持空隙 | Barber et al., RP approximant r without contact, p. 7; Seeing Speech approximant [ɹ], not trill [r]. |
| /j/ | glide / 硬腭 | 起音 → 滑动 → 进入元音 | Roach §2.1 palatal /j/, p. 9; Barber et al., semivowels/glides, pp. 5–6, 8. |
| /w/ | glide / 双唇＋软腭附近 | 起音 → 滑动 → 进入元音 | Roach §2.1 palatal /j/, p. 9; Barber et al., semivowels/glides, pp. 5–6, 8. |
