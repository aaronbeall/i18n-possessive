
# i18n-possessive

Convert a noun into its possessive form in any of the supported languages, such as `John` to `John's` (English) or `Bella` to `de Bella` (French). 
  
Given a noun `{name}` language support and rules are as follows:

-  **English:**  `{name}’s` always (the old rule about not adding `’s` if the name ends in `s` is outdated).
-  **Spanish:**  `de {name}` always.
-  **French:**  `de {name}` or `d’{name}`, the latter for names beginning with a vowel.
-  **German:**  `{name}s` or `{name}’`, the latter for names ending in `[sßxz]`.
-  **Japanese:**  `{name}の` always.

# Examples

```ts
import { possessive } from "i18n-possessive";

possessive("John", "en"));     // John's
possessive("Sebastián", "es"); // de Sebastián
possessive("Bella", "fr");     // de Bella
possessive("Adalene", "fr");   // d’Adalene
possessive("Leon", "de");      // Leons
possessive("Niklas", "de");    // Niklas’
possessive("はると", "ja");     // はるとの
```

Thanks to [Scott from the Slack team](https://medium.com/@ssandler_35379/hi-aaron-1c7a2c11aa2d) for the guidance!