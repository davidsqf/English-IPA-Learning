# Study of established IPA learning websites

Research date: 2026-10-18. Intended learner: a Chinese-speaking beginner learning English, British pronunciation first.

## Method and meaning of “popular”

This is a qualitative study of eight established, readily discoverable web resources. Selection combines major educational publishers/institutions, the IPA Association's own resource ecosystem, and specialist chart/conversion tools. No comparable independent traffic data were obtained, so this is **not a ranked list by visitors or market share**. Institutional prominence and specialist relevance are selection signals, not proof of usage or learning effectiveness.

Evidence consists of retrieved public page text, documented controls, and publisher feature descriptions. The source register records access failures and dynamic-page limitations. No accounts were created; audio, mobile layouts, performance, keyboard behavior, paid features, and learning outcomes were not tested. “Not observed” below means absent from the inspected surface, not proven absent from the entire service. Evaluations and adaptation proposals are our design judgments.

## Comparison

| Resource | Main job and observed approach | Fit for our beginner | What to adapt | Limitation / evidence boundary |
| --- | --- | --- | --- | --- |
| [Official IPA interactive chart](https://www.internationalphoneticassociation.org/IPAcharts/IPA_charts_TI/IPA_charts_TI.html) | International chart; descriptions, transcription, languages, multiple credited sound demonstrations | Strong authority for symbols; broader than English needs | Keep exact symbol identities and reveal technical details on demand | Dynamic content partly rendered; no guided English path or review loop observed [S02–S03] |
| [ipachart.com](https://www.ipachart.com/) | Direct symbol-to-sound exploration across international vowels/consonants | Immediate reference access; many sounds outside English | Obvious replay action and explicit context caveats | Explains that its plosives are unaspirated; these must not be presented as interchangeable with every English word context [S14] |
| [EnglishClub phonemic chart](https://www.englishclub.com/pronunciation/phonemic-chart-ia.php) | British RP chart with symbol and example-word listening; layout explanation | Closest scope match for a compact English reference | Pair a symbol with a concrete word; explain meaningful groupings | Embedded widget not tested; advertising/navigation appear around the lesson surface [S15] |
| [Cambridge Dictionary pronunciation](https://dictionary.cambridge.org/us/pronunciation/) | UK/US word reference with human speech and IPA; indexed sheep page also segments sounds | Strong verification source when a learner meets an unfamiliar word | Accent labels next to audio and word-level sound breakdown | Portal and entries returned 403 on direct open; observations rely on publisher/indexed text. No sequenced beginner course observed on these pages [S08–S10] |
| [BBC Learning English pronunciation](https://feeds.bbci.co.uk/learningenglish/english/features/pronunciation/) | Sound videos plus a separate connected-speech workshop | Useful modelling and a route beyond single sounds | A brief demonstration followed immediately by doing a task | Page is an extensive episode archive with repeated old/new listings; beginner sequencing must be supplied by our app. Videos were not played [S07] |
| [British Council TeachingEnglish](https://www.teachingenglish.org.uk/teaching-resources/teaching-secondary/teaching-tools/phonemic-chart-english-teachers) | Teacher chart, printable materials, and classroom pronunciation activities | Useful pedagogical material; teacher-facing prose needs adaptation | Turn suggested contrast activities into short independent exercises | Current page has inconsistent count cues; cross-check the inventory rather than copying it [S05] |
| [phonemicchart.com](https://www.phonemicchart.com/) | Symbol keyboard with UK/US vowel options, hints, and copy output | Helpful after a learner can recognize some symbols | Contextual IPA input and example hints in later reading activities | Uses legacy ligatures/ASCII length notation in its displayed chart; normalize our data. No integrated spaced review observed [S16] |
| [toPhonetics](https://tophonetics.com/) | Text conversion, UK/US choices, weak forms, and aligned text | Useful later for reading phrases; too many choices for the first task | Keep original word and transcription adjacent; expose weak forms later | Browser speech synthesis is described; it is not a curated human recording library. Contextual variants need checking [S17] |

### Relevant companion, outside the eight-website count

[British Council Sounds Right](https://learnenglish.britishcouncil.org/apps/learnenglish-sounds-right) is a mobile app described on a website. Its documented sound → three example words pattern is a useful interaction reference [S06]. It was not installed, and no claim is made about its current app accessibility or offline behavior. Iowa Sounds of Speech is an additional articulation reference with an American-English focus, discussed in the audio study [S18].

## What the comparison means for this project

### 1. Put learning before reference density

The chart tools help a learner retrieve an answer. They leave room for a product that decides what to try next. Our opening screen should offer **开始第一课** and **查看音标表**, with the lesson as the primary action. First teach `/ɪ/` versus `/iː/`, using a matched speaker and vocabulary preview. Reveal the full chart when requested. This is our proposed differentiation, not proof that competitors lack courses elsewhere.

### 2. Integrate the whole practice loop

A symbol button alone does not show whether the learner can distinguish two sounds. Follow a short demonstration with a listening choice, explanatory feedback, and a later recheck. Log which contrast needs review rather than counting chart taps as mastery. Reference tools, video lessons, and transcription utilities each offer pieces of that loop; our app should connect them in one calm workspace.

### 3. Make Chinese guidance useful without substituting Chinese sounds

Use original, short articulation guidance in Chinese, a visible mouth diagram where helpful, and English examples with brief meanings. Do not label IPA sounds with Chinese-character homophones. No systematic Chinese beginner evaluation was conducted on these sites; the bilingual approach is a project choice based on the confirmed audience.

### 4. Keep accent and audio identity visible

Use one default teaching model, with “英式参考发音” next to playback. Do not import a chart's generic phone audio and call it British dictionary audio. Later, add American comparison as a deliberate toggle with separate data and recordings, not as mixed clips inside a British lesson.

### 5. Borrow interactions, author the product

Reuse the ideas of tap-to-hear, contextual words, and aligned text. Write original teaching copy, draw original diagrams, and use documented recordings. No inspected site's page layout, widget code, dictionary collection, or paid content is part of the starter repository.

## Priority decisions

| Decision | MVP choice | Reason |
| --- | --- | --- |
| First screen | A short lesson and optional chart | Gives a novice a next action |
| Sound reference | Filtered English inventory, expandable details | Keeps international IPA available as a reference without overwhelming the first task |
| Audio | Reviewed, locally packaged clips with credits | Reliable local playback and traceable source identity |
| Practice | Listen → choose → feedback → revisit | Makes recognition observable |
| Transcription conversion | Defer | Adds contextual uncertainty before basic recognition is secure |
| Pronunciation scoring | Defer | Speech recognition output would not establish phonetic accuracy |
| Progress | Local review queue and export | Fits a personal local site without account infrastructure |

## Validate before expanding

With 3–5 actual beginners, observe whether they can start without instructions, replay a sound, understand why an answer was wrong, and return to a review item. Include a phone-size layout and keyboard-only session. Ask whether the Chinese guidance clarifies mouth position. Measure immediate recognition and a delayed recheck; do not equate satisfaction or a replay count with learning. This is a proposed study and has not been run.
