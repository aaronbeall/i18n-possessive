
# i18n-possessive

Convert a noun into its possessive form in any of the supported languages, such as `John` to `John’s` (English) or `Bella` to `de Bella` (French). 
  
Given a noun `{name}`, the language support is as follows:

| Language          | Locale Code | Possessive Rule |
|------------------|------------|----------------|
| **English**      | `en`       | Adds `’s` to the noun. |
| **Spanish**      | `es`       | Uses `de` before the noun (e.g., "el libro de Juan"). |
| **French**       | `fr`       | Uses `d’` if the noun starts with a vowel, otherwise `de` (e.g., "le livre d’Anne", "le livre de Marc"). |
| **German**       | `de`       | Adds `’` if the noun ends in `s/ß/x/z`, otherwise adds `s`. |
| **Portuguese**   | `pt`       | Uses `de` before the noun. |
| **Italian**      | `it`       | Uses `di` before the noun. |
| **Russian**      | `ru`       | Uses `’s` (basic handling, may need improvement). |
| **Hindi**        | `hi`       | Uses `का` (masculine) or `की` (feminine, contextual). |
| **Arabic**       | `ar`       | Uses `ل` before the noun to indicate possession (e.g., "كتاب ل علي" for "Ali’s book"). |
| **Mandarin Chinese** | `zh` | Uses `的` after the noun (e.g., "张的书" for "Zhang’s book"). |
| **Japanese**     | `ja`       | Uses `の` after the noun (e.g., "田中の本" for "Tanaka’s book"). |
| **Korean**       | `ko`       | Uses `의` after the noun (e.g., "철수의 책" for "Chulsoo’s book"). |
| **Turkish**      | `tr`       | Uses `nın` or `ın` based on vowel harmony. |
| **Dutch**        | `nl`       | Adds `’` if the noun ends in `s/ß/x/z`, otherwise adds `s`. |

# Examples

```ts
import { possessive } from "i18n-possessive";

possessive("John", "en"));     // John’s
possessive("Sebastián", "es"); // de Sebastián
possessive("Bella", "fr");     // de Bella
possessive("Adalene", "fr");   // d’Adalene
possessive("Leon", "de");      // Leons
possessive("Niklas", "de");    // Niklas’
possessive("はると", "ja");     // はるとの
```

Thanks to [Scott from the Slack team](https://medium.com/@ssandler_35379/hi-aaron-1c7a2c11aa2d) for the guidance!