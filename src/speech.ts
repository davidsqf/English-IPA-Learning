/** Word reading only. IPA symbols always use the bundled human reference recordings. */
export function britishVoice(voices: readonly SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  const british = voices.filter(voice => /^en-gb(?:-|$)/i.test(voice.lang.replaceAll('_', '-')));
  return british.find(voice => voice.localService) ?? british[0];
}
