# App screenshots

Place the eBud mobile app screenshots in this folder. They are displayed inside
the phone mockups on the landing page (hero + "A complete workflow in one app").

If a file is missing, the `PhoneMockup` component falls back to a clean CSS
placeholder, so the page never shows a broken image.

## Localized files

Screenshots are **per language**. The active UI locale selects the suffix, so
each screen needs one file per supported language: `-en`, `-ua` (Ukrainian) and
`-cr` (Croatian). The path is built by `screenSrc(base, locale)` in
`src/i18n/config.ts` as `/screens/<base>-<locale>.png`.

| Base name         | Used for                                 | Files                                                       |
| ----------------- | ---------------------------------------- | ---------------------------------------------------------- |
| `projects`        | Projects overview                        | `projects-en.png`, `projects-ua.png`, `projects-cr.png`            |
| `participants`    | Team & roles (participants)              | `participants-en.png`, `participants-ua.png`, `participants-cr.png` |
| `works`           | Works                                    | `works-en.png`, `works-ua.png`, `works-cr.png`                      |
| `analytics`       | Analytics dashboard                      | `analytics-en.png`, `analytics-ua.png`, `analytics-cr.png`          |
| `work-photos`     | Photo proof                              | `work-photos-en.png`, `work-photos-ua.png`, `work-photos-cr.png`    |
| `project-details` | Project details                          | `project-details-en.png`, `project-details-ua.png`, `project-details-cr.png` |
| `landing-reference` | Original design reference (not rendered) | `landing-reference.png`                                  |

> The `works-*` screenshots are not present yet, so that card shows the CSS
> placeholder in every language until they are added.

## Recommended format

- Portrait phone screenshots, roughly **9:19.5** aspect ratio.
- PNG, ~1080px wide is plenty.
- Content aligned to the top (the frame crops with `object-top`).

To swap a screenshot, just replace the file with the same name — no code change
needed. To add a new language, add its locale in `src/i18n` and drop in the
matching `<base>-<locale>.png` files.
