"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts a given noun into its possessive form based on the specified locale.
 *
 * @param {string} noun - The noun to convert to possessive form.
 * @param {string} locale - The locale code (e.g., 'en', 'es', 'fr').
 * @returns {string} - The possessive form of the noun.
 * @throws {Error} If the locale is unsupported.
 */
function possessive(noun, locale) {
    switch (locale.toLowerCase().substr(0, 2)) {
        case "en": // English
            return noun + "\u2019s";
        case "es": // Spanish
            return "de " + noun;
        case "fr": // French
            return noun.match(/^[aeiou]/i) ? "d\u2019" + noun : "de " + noun;
        case "de": // German
            return noun.match(/[sßxz]$/i) ? noun + "\u2019" : noun + "s";
        case "pt": // Portuguese
            return "de " + noun;
        case "it": // Italian
            return "di " + noun;
        case "ru": // Russian
            return noun + "\u2019s";
        case "hi": // Hindi (transliterated)
            return noun + " \u0915\u093E"; // Masculine, for feminine it could be "की" based on context
        case "ar": // Arabic
            return "\u0644 " + noun; // "ل" (li) meaning "belonging to"
        case "zh": // Mandarin Chinese
            return noun + "\u7684"; // 的 (de) is used for possession
        case "ja": // Japanese
            return noun + "\u306E"; // の (no) is used for possession
        case "ko": // Korean
            return noun + "\uC758"; // 의 (ui) is used for possession
        case "tr": // Turkish
            return noun.match(/[aeıioöuü]$/i) ? noun + "\u2019n\u0131n" : noun + "\u2019\u0131n"; // Suffix rules vary based on vowel harmony
        case "nl": // Dutch
            return noun.match(/[sßxz]$/i) ? noun + "\u2019" : noun + "s";
        default:
            throw new Error("Unsupported locale " + locale + ", use one of: en, es, fr, de, pt, it, ru, hi, ar, zh, ja, ko, tr, nl");
    }
}
exports.possessive = possessive;
//# sourceMappingURL=possessive.js.map