/**
 * Converts a given noun into its possessive form based on the specified locale.
 * 
 * @param {string} noun - The noun to convert to possessive form.
 * @param {string} locale - The locale code (e.g., 'en', 'es', 'fr').
 * @returns {string} - The possessive form of the noun.
 * @throws {Error} If the locale is unsupported.
 */
export function possessive(noun: string, locale: string): string {
  switch (locale.toLowerCase().substr(0, 2)) {
    case "en": // English
      return `${noun}’s`;
    case "es": // Spanish
      return `de ${noun}`;
    case "fr": // French
      return noun.match(/^[aeiou]/i) ? `d’${noun}` : `de ${noun}`;
    case "de": // German
      return noun.match(/[sßxz]$/i) ? `${noun}’` : `${noun}s`;
    case "pt": // Portuguese
      return `de ${noun}`;
    case "it": // Italian
      return `di ${noun}`;
    case "ru": // Russian
      return `${noun}’s`;
    case "hi": // Hindi (transliterated)
      return `${noun} का`; // Masculine, for feminine it could be "की" based on context
    case "ar": // Arabic
      return `ل ${noun}`; // "ل" (li) meaning "belonging to"
    case "zh": // Mandarin Chinese
      return `${noun}的`; // 的 (de) is used for possession
    case "ja": // Japanese
      return `${noun}の`; // の (no) is used for possession
    case "ko": // Korean
      return `${noun}의`; // 의 (ui) is used for possession
    case "tr": // Turkish
      return noun.match(/[aeıioöuü]$/i) ? `${noun}’nın` : `${noun}’ın`; // Suffix rules vary based on vowel harmony
    case "nl": // Dutch
      return noun.match(/[sßxz]$/i) ? `${noun}’` : `${noun}s`;
    default:
      throw new Error(`Unsupported locale ${locale}, use one of: en, es, fr, de, pt, it, ru, hi, ar, zh, ja, ko, tr, nl`);
  } 
}