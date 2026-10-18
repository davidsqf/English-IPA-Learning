# IPA content policy and teaching inventory

## Scope and notation

IPA is an international system for representing speech sounds. An English phonemic teaching chart selects symbols for a particular language and accent model; it is not the entire international alphabet. The [IPA Association](https://www.internationalphoneticassociation.org/node/1061) maintains the official chart [S01]. Its annual copyright year should not be confused with a newly revised sound inventory.

Use broad phonemic `/ /` for the learning model and `[ ]` when discussing particular phonetic realizations. This distinction lets us explain why actual speech can vary without changing every dictionary transcription. Teach it in plain Chinese before introducing technical detail: “斜线中的写法帮助你认出词的发音；方括号可记录更具体的读法。”

The chosen convention is a **non-rhotic British learner-dictionary model**, labelled `en-GB-dictionary-nonrhotic-v1`. This is an editorial convention, not a geographically precise claim about a whole country. A recording's speaker metadata must be checked separately.

## Traditional 44-entry reference

Use the following as the planned reference inventory; the structured draft is in `content/seeds/en-gb-phonemes.json`.

| Group | Entries |
| --- | --- |
| 12 monophthongs | `/iː ɪ e æ ɑː ɒ ɔː ʊ uː ʌ ɜː ə/` |
| 8 traditional diphthongs | `/eɪ aɪ ɔɪ əʊ aʊ ɪə eə ʊə/` |
| 24 consonants | `/p b t d k ɡ f v θ ð s z ʃ ʒ h tʃ dʒ m n ŋ l r j w/` |

The traditional count varies with analysis and accent; especially `/ʊə/` is variable. The [Oxford guide](https://www.oxfordlearnersdictionaries.com/about/pronunciation_english.html) documents dictionary symbols and several variants [S11]. It is our convention reference, not a mandate to make every speaker match an old chart.

Treat `/ʊə/` as a traditional reference entry introduced later, with variants explicitly acknowledged. Do not make one pronunciation of a variable word the only correct audio answer. Do not promote `/tr dr ts dz/` to independent core phonemes to match a “48 sounds” worksheet; consonant clusters can be a later unit.

## Editorial rules that prevent misleading lessons

1. **A vowel contrast is not merely a duration slider.** Explain changes in vowel quality and articulation as well as length. Extending `/ɪ/` does not automatically produce an appropriate English `/iː/`.
2. **Dictionary `/e/` is a convention.** Do not teach the cardinal `[e]` audio as the precise target for every British DRESS vowel. Different broad transcription traditions use different symbols.
3. **Dictionary `/r/` does not mean a trill.** Explain that English typically uses an approximant such as `[ɹ]` in this model. Do not connect the ordinary English r entry to a rolled `[r]` clip on an international chart.
4. **Non-rhotic words need context.** A written r may be absent in a word spoken alone and appear before a following vowel. Phrase and citation-form audio can therefore differ legitimately.
5. **Schwa and stress matter.** Do not pronounce every spelling vowel as a full stressed vowel. Explain primary `ˈ` and secondary `ˌ` stress before extending to longer words. Use IPA `ː`, not the ASCII colon, in canonical data.
6. **Weak `/i/` is worth explaining later.** An unstressed final vowel in a word such as happy is not a reason to silently add a new strong-vowel contrast to the traditional 44 chart. Recognize syllabic consonants when reading dictionary variants.
7. **Consonant demonstrations need labels.** A stop may be demonstrated with surrounding vowels or a release; that does not make the extra vowel part of the consonant. Generic IPA charts are phonetic references, not ready-made English phonics lessons [S02, S14].
8. **Chinese support is explanatory.** Do not use Chinese characters or pinyin as supposedly exact sound replacements. Explain lips, tongue, airflow, and voicing in simple language, with an original diagram where useful.
9. **Normalize typography without destroying meaning.** Store canonical `ɡ`, `tʃ`, `dʒ`, and `ː`. Search may accept ordinary `g`, legacy affricate ligatures, and `:` aliases, but do not replace symbols indiscriminately. IPA tokens can contain several Unicode code points.
10. **Keep data granular.** Separate phoneme IDs, IPA display, accent model, example-word pronunciation, individual sound tokens, and audio type. Never derive phonemes by splitting a Unicode string into individual characters.

## Review and publication

Source checks establish what a reference reports. They do not verify that a chosen clip realizes the intended target, that a translation is useful, or that an articulation cue is accurate. Keep independent flags for text verification, human phonetics review, and audio quality review.

Before a lesson is presented as reviewed content, verify each word's British sense and pronunciation against a named dictionary entry; listen to its paired recording; check any variants; and have a competent pronunciation reviewer check the Chinese cue and sound mapping. Keep rejected alternatives in review notes, not in the active question bank.

The starter data contains original candidate selections and draft transcriptions. Only explicitly indicated checks have been performed. No exact CEFR levels are assigned without a sense-specific source check. Some examples needed to show a rare sound are less familiar than beginner vocabulary; preview them rather than implying an A1 list.
