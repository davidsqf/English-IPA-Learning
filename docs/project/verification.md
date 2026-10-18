# Verification — 2026-10-18

Environment: macOS, Node 24.19.0, Vite 8.3.4, TypeScript 5.9.3. Browser verification used an isolated Chrome session through Playwright against the built local preview.

## Automated checks

- `npm run build`: type check and production build passed.
- `npm test`: three tests passed, covering the 44-entry inventory, audio references and review-state invariants, and exact-versus-exploratory IPA search.
- All 36 acquired candidate files match their recorded SHA-256 checksums: six Ogg originals and thirty Wikimedia-supplied MP3 transcodes. Full-file ffmpeg decoding succeeded during acquisition.
- `npm run samples` rechecked/skipped all 36 existing files without network acquisition. Download retry/spacing code passed syntax checks; rate-limited live acquisition was completed separately and source states are recorded in the manifest.
- Mac launcher shell syntax passed. The host's default Node 18 is unsupported; the launcher selects the existing bundled Node 24 when necessary. No global runtime configuration was changed.
- Candidate media are absent from `public/` and `dist/`; local media and browser artifacts are ignored by Git.
- Removed introductory copy, quiz/review code, and progress-storage code are absent from runtime files.

## Browser behavior

- Selected all 44 entries and checked the selected symbol and highlighted target segment.
- All 43 contextual mappings have available playback controls; all 36 distinct recordings played to their actual ended event. `/ʊə/` shows an explicit unavailable state.
- Group filters returned 12/8/24/44 items. Search worked with slashed exact IPA, ASCII length alias, English, Chinese, and a no-results case. Repeated example words across several symbols are intentional.
- Natural speed and 0.8× playback completed. Sequential comparison played exactly two clips; replacement playback left only one active control.
- All ten contrast selectors rendered two sound panels and their guidance. Opening a symbol from a comparison preserved the correct selected entry.
- Source credits disclosed all 36 file links; setup details and return navigation worked.
- Keyboard Enter selected a symbol and started playback; visible focus was inspected.
- Blocking all non-local requests did not affect local playback, and the complete playback pass made zero external requests.
- Aborted audio requests produced a clear recoverable error with no stuck playing control. An empty availability response produced source links and unavailable states instead of dead play buttons.
- Mobile selection changed and restored its contrast pair. The sequential playback action fits within the initial 390×844 viewport. No horizontal overflow was found at 390 or 320 pixels; a narrower desktop-equivalent layout was also checked with reduced motion.
- The complete final symbol/playback pass reported no uncaught page errors.

## Visual checks

Inspected symbol explorer and comparison screens on desktop and mobile, including selected symbols, highlighted transcriptions, playback states, keyboard focus, and unavailable/error states. Removed slogans and long introductions are absent. Mobile uses a compact contrast selector with audio controls above the paired panels. No clipping, overlapping controls, or horizontal overflow was found in the inspected states.

Local screenshots are under ignored `output/playwright/`, including `final-desktop.png`, `final-full.png`, `final-mobile.png`, `final-comparison.png`, and `final-comparison-mobile.png`. They are verification artifacts, not website dependencies.

## Limits

These checks establish technical behavior, not pronunciation validity. No competent human phonetics review, real-beginner study, full accessibility conformance audit, Safari/Firefox playback audit, or isolated-sound corpus validation was performed. Recordings remain clearly labelled local candidates; Chinese articulation cues and transcriptions remain drafts. The website is not deployed and has no GitHub remote.
