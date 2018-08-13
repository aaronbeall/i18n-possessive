"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function possessive(noun, locale) {
    // Translation rules based on: https://medium.com/@ssandler_35379/hi-aaron-1c7a2c11aa2d
    switch (locale.toLowerCase().substr(0, 2)) {
        case "en":
            return noun + "\u2019s";
        case "es":
            return "de " + noun;
        case "fr":
            return noun.match(/^[aeiou]/i) ? "d\u2019" + noun : "de " + noun;
        case "de":
            return noun.match(/[sßxz]$/i) ? noun + "\u2019" : noun + "s";
        case "ja":
            return noun + "\u306E";
        default:
            throw new Error("Unsupported locale " + locale + ", use one of: en, es, fr, de, ja");
    }
}
exports.possessive = possessive;
//# sourceMappingURL=possessive.js.map