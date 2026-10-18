# Learning and interface design

Scope: Chinese-speaking English beginners; British English first. Learner age, study frequency, and prior English vocabulary are unknown. Recommendations below are design decisions to validate, not source-proven optimal settings.

## Learning outcomes

The learner should be able to recognize common English dictionary symbols, distinguish selected sound contrasts by listening, use a word transcription to attempt pronunciation, and locate stress in familiar words. The goal is intelligibility and independent dictionary use. Recognizing symbols does not establish accurate speech production.

Use **听一听 → 看口型 → 试着读 → 辨一辨 → 过后再练** as the core loop. Retrieval and distributed practice have broad educational support [Dunlosky, S19](sources.md#s19--learning-science). Our proposed five-minute lessons, small groups, and review intervals are product hypotheses; that source does not validate those exact choices for IPA.

## Curriculum

| Stage | Content | Activity and completion evidence |
| --- | --- | --- |
| 0. Orientation | 音标 represents sounds; spelling can mislead; how `/ /`, `ː`, and `ˈ` work | Replay one word and identify its displayed target sound |
| 1. First contrast | `/ɪ iː/`, vocabulary preview for ship/sheep and sit/seat | Hear one of two familiar words, choose, get feedback, retry later |
| 2. Common vowels | `/e æ ʌ ɒ ʊ uː/`, introduced in small groups | Match symbols to words, then listen without showing the answer |
| 3. Voicing and airflow | `/p b t d k ɡ f v s z/` | Compare paired sounds in words; notice airflow without treating voicing as the only cue |
| 4. Other consonants | `/θ ð ʃ ʒ tʃ dʒ m n ŋ h l r j w/` | Articulation guidance, word playback, selected contrasts |
| 5. Remaining vowels | `/ɑː ɔː ɜː ə/`, stressed versus unstressed syllables | Find schwa in a familiar word and compare stress patterns |
| 6. Diphthongs | `/eɪ aɪ ɔɪ əʊ aʊ/`, then `/ɪə eə/` and recognition of variable `/ʊə/` | Listen to the movement in a whole word; learn accepted variants |
| 7. Read and review | Word stress, weak `/i/`, simple phrases and weak forms | Read a new familiar-word transcription, then listen and self-compare |

This is a recommended sequence. The complete 44-entry reference can be browsed from the beginning. Stage 1 is the first vertical slice; inventory completeness is not a reason to postpone trying it with a learner.

Candidate contrasts such as `/l r/`, `/v w/`, and `/n ŋ/` may matter to some Chinese-speaking learners. Choose priorities from an optional short listening check, not from assumptions that all Chinese languages, dialects, or individuals share the same difficulty.

## Information architecture

Use four primary destinations: **开始学习**, **音标表**, **辨音练习**, **复习**. Put **学习说明与来源** in a secondary position. Keep accent status visible. Avoid a dashboard of decorative scores, badges, or complex settings before the first exercise.

Visual thesis: a calm bilingual learning desk with large, sharply rendered IPA symbols, generous spacing, and a single blue action color.

Content plan: immediate lesson action; one sound or contrast as the main workspace; short guidance and words below; a clear next step. This is a learning application, so a promotional hero image is unnecessary.

Interaction thesis: a visible playing state; a quick, focus-preserving transition from answer to feedback; and a restrained progress transition. Respect reduced-motion preferences. Never use animation as the sole indication of playback or correctness.

## Wireframes

Lesson workspace on a larger screen:

```text
IPA 入门     开始学习  音标表  辨音练习  复习      英式参考发音

第一课 · 听出两个不同的元音                       1 / 4

             /ɪ/                     /iː/
          [播放发音]               [播放发音]
          ship · 船                sheep · 绵羊

一句中文提示，配一个可展开的口型说明。
[播放对比]                                      [开始辨音]
```

Exercise state:

```text
听到的是哪个词？    [重播]
先熟悉两个词的意思；正式播放后不显示答案文字。

[ship · 船]                         [sheep · 绵羊]

提交后：你选了 …；参考答案是 …；并列播放两个词。
给出一个具体提示。                           [下一题]
```

Show a sample introduction before the scored exercise; during the question do not expose the answer through transcript, alt text, filename, DOM label, or symbol highlighting. A neutral accessible label such as “播放本题音频” works for the player. Offer a separate text-supported practice mode for learners who cannot use an audio-only task; do not count it as auditory discrimination. Show the transcript after submission or reveal.

On mobile, stack the two controls without hiding replay. Preserve reading order, large touch targets, and a visible next action. Use one page scroll rather than nested small scroll areas. The reference chart may use a responsive list on narrow screens; do not shrink a full international matrix into unreadable tiles.

## Feedback and review

- Describe the sound difference with a helpful cue; avoid only “wrong” or a red cross.
- Separate vocabulary unfamiliarity from listening errors. Preview word meanings and make pronunciation practice possible without a vocabulary test.
- Use an initial small practice block, then mix in earlier material. Propose reviews after approximately 1, 3, and 7 days; make these adjustable and describe them as a starting heuristic.
- Call progress **已练习 / 需要复习**, not **发音已掌握**. A few correct choices do not validate speaking accuracy.
- Store attempts by contrast, content version, audio identity, and date. Require success across separate visits before reducing review frequency. A later production study may choose actual thresholds.
- Optional recording/self-playback comes after basic listening works. Local speech recognition is not an authoritative phonetic grader.

## Accessibility and readability

Target WCAG 2.2 AA as an implementation goal [W3C, S20](sources.md#s20--accessibility-standard), with a separate audit before claiming compliance. Use native buttons, keyboard access, visible focus, useful page titles, and Chinese/English language attributes. Do not depend on color alone; preserve 4.5:1 normal-text contrast and 3:1 for relevant non-text boundaries. Avoid autoplay and timing pressure.

Choose at least 44×44 CSS-pixel primary controls as a project comfort target. WCAG 2.2 AA's target-size minimum is 24×24 with defined exceptions; 44×44 is a stronger project target, not the AA minimum. Check 200% text enlargement and reflow at 320 CSS pixels. Provide text descriptions of articulation and captions for any future explanatory video.

Use a Chinese system sans-serif for interface copy and a locally bundled, appropriately licensed IPA font candidate such as Charis for symbols [S21](sources.md#s21--ipa-font). Check `ɪ ʊ ɒ ɜː θ ð ŋ ʃ ʒ ɡ ɹ ˈ ˌ` and combining marks in actual browser rendering. Symbols must remain selectable Unicode text, not decorative images.

## Local behavior

The core lesson should run with the network disconnected after installation when served locally. Package reviewed media locally; external reference links can require internet access and must say so. Local storage can keep progress, with export/import and a clear reset confirmation. Browser data can be lost, so it is not a substitute for an export. Installation, package updates, and opening online references are separate from offline lesson use.

No service worker is needed for the first localhost version. Add installable/offline caching later only if the owner wants it and versioned cache updates are tested.
