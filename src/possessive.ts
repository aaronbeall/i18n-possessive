export function possessive(noun: string, locale: string): string {
    // Translation rules based on: https://medium.com/@ssandler_35379/hi-aaron-1c7a2c11aa2d
    switch (locale.substr(0, 2)) {
      case "en":
        return `${noun}’s`;
      case "es":
        return `de ${noun}`;
      case "fr":
        return noun.match(/^[aeiou]/i) ? `d’${noun}` : `de ${noun}`;
      case "de":
        return noun.match(/[sßxz]$/i) ? `${noun}’` : `${noun}s`;
      case "ja":
        return `${noun}の`;
      default:
        throw new Error(`Unsupported locale ${locale}, use one of: en, es, fr, de, ja`);
    } 
}