# Weekly Delight: working instructions

This file is read at the start of every session. Follow it without being reminded. "The owner" is the person who runs the site.

## 1. What this repository is

A static, dependency-free Node (18+) site, weeklydelight.com, of about 2,700 recipes.

- `src/build.js` renders every page into the **repository root**. That output is committed, so a change to data or a template shows up as a large diff of generated files. Nothing is fetched at build time.
- Recipes are JavaScript modules, not database rows (section 3).
- Hosting is static (Netlify, Vercel or GitHub Pages; see README.md).

```
src/build.js        the build; loadRecipes() joins catalogue + details + rewrites
src/data/           recipes, images.json, reviews.json, content-dates.json
src/lib/            rules and helpers: voice, layouts, rewrites, rewrite-check, seo, faq, substitutions, health…
src/templates/      page templates (recipe-page.js is the recipe page)
tools/              audits, the backup tool, the rewrite pipeline and its tests, the nutrition calculator and its food table
README.md           long-form docs; its counts are derived from the data (tools/sync-readme.js)
```

## 2. Commands

| Command | What it does |
| --- | --- |
| `npm run build` | Regenerate the site into the repo root. |
| `npm run check` | Post-build audit: links, headings, JSON-LD, FAQ markup, README counts, **and** the data audits below. Must pass before any commit. |
| `npm run timing` `nutrition` `diet` `keywords` `seo` `duplicates` `health` | The individual audits `check` runs. A failure names the recipe and the claim. Fix the recipe, not the audit. |
| `npm run calc` | Work out `nut` (and `kp`) from the ingredient list: `-- --volume N`, `-- --slug a,b --lines`, `-- --volume N --write` (section 9). |
| `npm run voice` | Measure how repetitive the prose is; `-- --flagged`, `-- --slug a,b`, `-- --strict` (what `check` runs). |
| `npm run dedupe` | Grade candidate dish names against the catalogue (section 5). |
| `npm run backup` | Snapshot `src/data` to `backups/` with a sha256 manifest (`-- --verify`, `-- --restore [--prune]`, `-- --list`). |
| `npm run humanize` | The batch rewrite pipeline (section 6). |
| `npm run selftest` | Tests for the voice rules, layouts, overlay, validator and pipeline. No key, no network. Run it after touching any of them. |
| `npm run readme` | Re-derive the counts in README.md. `check` fails if they are stale. |
| `npm run missing` | Rewrite `MISSING-IMAGES.txt` from the data: every recipe with no picture at all (an AI illustration counts as a picture), by cuisine. |
| `node tools/diet-audit.js --conditional` | List every diet label that holds only with a swap the recipe offers, and the method steps that name only the non-compliant side. |
| `node tools/robots-check.js --verbose` | What `robots.txt` allows and blocks for each crawler (part of `check`). |
| `node tools/private-paths-check.js [--url https://weeklydelight.com]` | That `.htaccess` refuses the source and working files and still serves the site; with `--url`, against the live host (part of `check`, offline). |
| `node tools/published-dates.js --dry-run` | Re-derive `src/data/published-dates.json` from git history (section 7). Only ever run to repair the register. |

Before any commit: `npm run build && npm run check`.

## 3. How a recipe is stored

A recipe is a catalogue **row** plus a **detail** record, joined by slug.

**Row**: `src/data/catalog.js`, `catalog-2.js` … `catalog-31.js`. Each is `module.exports = [c(…), …]` with its own copy of the helper:

```js
c(slug, title, cuisine, category, difficulty, prepMin, cookMin, servings, rating, reviews, dietTags, badges, imageQuery?)
```

- `category`: Dinner, Quick Meals, Healthy, Appetizers, Baking, Desserts, Lunch, Drinks, Breakfast or Holiday Specials. **Quick Meals must be 30 minutes or less of prep + cook, or the build fails.**
- `difficulty`: Easy, Medium or Hard.
- `rating`, `reviews`: an ordering weight only. New volumes write `0, 0`. A star rating is shown only if `src/data/reviews.json` holds a real review for that recipe, and that file is empty on purpose.
- `dietTags`: Vegetarian, Vegan, Gluten-Free and Dairy-Free are judged against the ingredient list by `src/lib/diet-conditions.js` (`npm run diet`). A tag holds *clean* (nothing breaks it), *conditional* (a line offers the way out: "honey or sugar", "parmesan, to serve", a PDO cheese, ordinary oats, an unspecified stock cube) or is *contradicted* (the build's check fails). A conditional tag shows as "Vegan option" with the condition printed ("Vegan when made with sugar rather than honey.") and is left out of the Recipe JSON-LD. If the method names only the forbidden side ("stir the honey into the water"), reword the step so it names the alternative too ("the honey (or sugar)", "bread (optional)"); `node tools/diet-audit.js --conditional` lists any that do. The directory filters and the search index (`f` as written, `h` with a swap) keep the two apart: a diet filter lists only recipes that qualify as written unless the reader ticks "Include recipes that qualify only with a swap". A conditional cheese means a cheese made without animal rennet, which Parmigiano-Reggiano, Grana Padano and Pecorino Romano never are. The build adds derived tags (High-Protein, Low-Carb…) itself. Diabetes-Friendly, Weight-Loss Friendly and Kidney-Friendly are withdrawn (section 9) and fail the build if used.
- `badges`: `'new'` for a new volume.

**Detail**: `src/data/details/` (volume 1) and `src/data/details2/` … `details31/`. Each file is `module.exports = { 'slug': { … } }` with these fields:

| Field | What | Notes |
| --- | --- | --- |
| `d` | The lede under the title; also the JSON-LD description and card text | Plain, factual, 60 to 260 characters. Times it mentions are checked against the row. |
| `meta` | The search-result description | About 90 to 150 characters. The build clamps at 158 and pads to 140–160. |
| `kw` | 4 to 6 search phrases, the first is the primary | Every phrase must be *true* of the recipe: "30 minute" only if the whole recipe, waiting included, takes 30 or less; "freezer" only if the storage note says so. `npm run keywords` checks. These are the only phrases published in the Recipe JSON-LD `keywords` and the keywords meta tag; the generated long tail feeds the site's own search only. |
| `why` | The explanation: what the dish is and why the method works | For a new recipe 150 to 260 words in 2 to 4 paragraphs (blank line between). `**bold**` allowed, at most 3 spans. |
| `ing` | Ingredient lines, metric first | A line starting `# ` is a group label. |
| `st` | Method steps | Times in the steps must agree with prep, cook and `rest` (`npm run timing`). |
| `tips` | 2 to 5 practical tips | `**bold**` allowed, at most 2 spans across all tips. |
| `pair` | 2 to 6 short serving suggestions | |
| `store` | The storage note | Shelf lives are the recipe's own and are not invented. |
| `nut` | Legacy: `[kcal, protein g, carbs g, fat g, fibre g, sugar g, sodium mg]` | Optional, and **not printed**. The page's figures are computed from `ing` on every build (section 9); a figure typed here has no effect. |
| `kp` | Optional; its presence asks for `[potassium mg, phosphorus mg]` to be printed | The values printed are computed, like the rest, and marked "(est.)". |
| `rest` | Optional `[minutes, 'Label']` for unattended waiting (proving, chilling) | The build reads the waiting from the method itself (`src/lib/timing.js`, as a floor and a ceiling: "12 to 24 hours", "overnight"). `rest` is optional; when given, its minutes must equal the detected floor (`npm run timing`). Every time a reader sees (cards, titles, descriptions, keywords, `totalTime`) is the elapsed time, waiting included. A `meta` that says "ready in N minutes" must name the wait ("plus rising"). |
| `layout`, `headings` | Optional, see section 4.2 | Usually written only by the rewrite pipeline. |

Volumes are found by name (`catalog-N.js` + `detailsN/`) and sorted numerically by `src/data/volumes.js`. Nothing else needs registering.

**Rewrites**: `src/data/rewrites/*.json`, written only by `tools/humanize.js` (section 6) and laid over the detail records when the catalogue loads. The detail files themselves are never edited by the pipeline.

**Content dates**: `src/data/content-dates.json` is the register behind every page's `dateModified` and the sitemap's `lastmod`. The build writes it, and it moves a date only when that recipe's content really changes. Do not edit it by hand. If a build changed it for recipes whose content you did not change, something is wrong, so find out why before committing.

## 4. Writing a recipe (new, or rewritten)

### 4.1 Voice

The rules below are generated from `src/lib/voice.js`, the same module `tools/voice-audit.js` and the rewrite validator use. Change the rules there, then run `node tools/voice-audit.js --sync-claude-md`. `npm run check` fails if this section is out of date, and fails on any banned phrase or first-person claim in any recipe.

<!-- voice-rules:begin -->

#### Banned phrases (errors)

Never use these, or their inflections, anywhere in recipe prose:

- elevate / elevated (as in "elevate your dish")
- "symphony of flavors"
- "delve into"
- "game-changer"
- "a testament to"
- "culinary journey" and its cousins
- "nestled" (the instruction "nestle the fish in" is fine)
- "tapestry", "kaleidoscope"
- "unlock the flavour"
- "embark on"
- "let's dive in", "dive into"
- "look no further"
- "whether you're a beginner or…"
- "in today's fast-paced world"
- "it's no secret that"
- "say goodbye to"
- "next level"
- "a must-try"
- "mouthwatering"
- "melt in your mouth"
- "burst of flavour", "explosion of flavour"
- "flavours dance on your tongue"
- "a feast for the senses"
- "a labour of love"
- "a hug in a bowl"
- "to die for"
- "crowd-pleaser"
- "perfect for any occasion", "the perfect combination"
- "the secret ingredient"
- "is sure to impress", "you'll love"
- "you won't believe"
- "the whole family will love"
- "take your taste buds on a journey"
- "tantalising"
- blog-post filler: "in conclusion", "without further ado"
- "foodie", "yummy", "delish"

#### Discouraged words (warnings)

Allowed, but the first to appear when nobody is choosing:

- "the ultimate", "best ever"
- "effortlessly", "seamlessly"
- "heavenly", "irresistible", "decadent"
- "foolproof" (promises what it cannot check)
- "incredibly", "absolutely", "truly"

#### First-person and testing claims (errors)

Not allowed in recipe prose:

- "I", "I've", "I'd"
- "my", "myself"
- "me" ("let me", "trust me")
- "we", "our"
- "kitchen-tested", "tested and approved"

#### Hooks: how a recipe may open

Each recipe is assigned one from its slug (`hookFor(slug)` in `src/lib/voice.js`). No two recipes may share the same first four words.

| id | opening | example |
| --- | --- | --- |
| `sensory` | Open on something the cook will see, hear, smell or feel: one concrete detail, not a pile of adjectives. | "The first sign it is ready is the smell: butter turning from yellow to nut brown." |
| `quick-tip` | Open with the single most useful instruction for this dish, stated plainly as advice to the cook. | "Salt the aubergine first and leave it for half an hour; everything else in the recipe depends on that." |
| `seasonal` | Open with the time of year, the weather or the occasion the dish belongs to. Only when it genuinely does. | "This is what to make in the first cold week, when turning the oven on starts to feel like a treat." |
| `ingredient-first` | Skip the preamble. Open on the few ingredients and what they become. | "Flour, butter, sugar, an egg: four things you already own, and about forty minutes." |
| `problem-first` | Open with the common way this dish goes wrong and the one change that stops it. | "Most home versions come out watery, and the fix is to cook the onions for longer than feels reasonable." |
| `origin-fact` | Open with one well-established fact about the name or origin that is already stated in the recipe. Never add one. | "Biscotti means "twice cooked", and that is the whole method." |
| `occasion` | Open with when this gets made and who it feeds. | "A Sunday dish for a table of six, and better on Monday." |
| `comparison` | Open by setting it beside its nearest relative and saying what is different. | "It looks like a pancake and cooks like an omelette, which is why the pan has to be hotter than you expect." |
| `short-sharp` | Open with a declarative sentence of eight words or fewer, then let the next one run longer. | "Keep the heat low. That is most of the recipe, and the part people skip." |
| `question` | Open with the question a cook would actually ask about this dish, then answer it. | "Why does bread dough have to rest before it goes in the oven?" |

#### Writing rules

1. Write to the cook in the second person, in British English (flavour, colour, aubergine, hob) with metric measures first.
2. Give practical, specific advice a cook can act on: what it should look, sound or smell like at each stage, how to tell it is going wrong, and what to do then. Advice is about the dish and the equipment, never about the writer.
3. Never claim personal experience or testing. No "I", "my", "we", "our", no "kitchen-tested", no "the first time I made this". The honest form of the same idea is second person: "If your oven runs hot, check at 12 minutes."
4. Use only numbers that are already in the recipe (times, temperatures, weights, servings). A "check early" time may be any number lower than the stated time.
5. Add no new claims about history, origin, dates or named people. A fact already in the recipe may be kept, reworded or softened, never sharpened.
6. Vary sentence length on purpose: at least one sentence of eight words or fewer in every paragraph, and some of twenty or more. Do not open two sentences in a row with the same word.
7. Split the long "why" text into two or three paragraphs of different lengths. One paragraph of 200 words is a wall.
8. Bold only what a hurried cook must not miss: a warning, a number, a cue. At most three bold spans in the "why" text and two across the tips, each one to six words. Never bold the recipe name or its search keywords.
9. No more than two em dashes per hundred words, and fewer is better. No exclamation marks. No "not just X but Y" constructions.
10. Tips may number two to five. Start each one differently: a verb, a condition ("If…"), a consequence, a number. Not three "Do not"s.
11. Headings are optional and conversational, two to eight words ("A quick note on the butter", "Don't make this mistake"). Keep the recipe name in the method heading.

<!-- voice-rules:end -->

How the two kinds of "practical advice" differ, since it is the easiest rule to get wrong:

- Fine: *"If your oven runs hot, check at 12 minutes."* *"The dough will look shaggy at first; keep kneading."* *"Drain the mozzarella on kitchen paper; the water it sheds is the usual cause of a soggy centre."* These are true of ovens, dough and mozzarella in general, so nobody has to have cooked this dish to say them.
- Not fine: *"The first time I made this I burned the base."* *"In my kitchen it takes 12 minutes."* *"Kitchen-tested."* Those claim an experience no one had.

### 4.2 Layouts

Every recipe page is assembled from a layout (`src/lib/layouts.js`): an order for the sections, a style for the ones that can be shown more than one way, and a pool of heading wordings. The ingredients card and the byline, reviews and related blocks are the same on every page.

<!-- layouts:begin -->

There are 6 layouts (`src/lib/layouts.js`). A recipe gets one from its slug unless its record names one with `layout: '<id>'`. For a new recipe, leave `layout` out: the slug picks, evenly across the catalogue.

| id | name | section order (→) | why | tips | serve |
| --- | --- | --- | --- | --- | --- |
| `classic` | Classic | why → method → tips → swaps → diet → serve → store → faq → nutrition | panel | list | list |
| `cook-first` | Straight to the stove | method → tips → swaps → diet → why → serve → store → faq → nutrition | plain | numbered | line |
| `mistakes-first` | Read this first | tips → method → why → store → swaps → diet → serve → faq → nutrition | plain | notes | list |
| `make-ahead` | Plan it, then cook it | store → method → tips → why → serve → swaps → diet → faq → nutrition | plain | list | line |
| `table-led` | What goes on the table | why → serve → method → tips → swaps → diet → store → faq → nutrition | panel | notes | list |
| `questions-led` | Answers first | why → faq → method → tips → swaps → diet → serve → store → nutrition | lead | list | line |

- **Classic** (`classic`): Why it works, then the method, then the extras. The order readers expect.
- **Straight to the stove** (`cook-first`): The method leads; watch-points follow it; the background comes after the cooking.
- **Read this first** (`mistakes-first`): The pitfalls come before the method; the explanation and the storage come straight after it.
- **Plan it, then cook it** (`make-ahead`): Keeping and making ahead come first, then the method; the background comes after the cooking.
- **What goes on the table** (`table-led`): What to serve it with comes before the method, so the meal is planned first.
- **Answers first** (`questions-led`): The common questions are answered up front, before the method.

`why` is `panel` (tinted box, drop cap), `plain` (ordinary section) or `lead` (no heading, the text just runs on). `tips` is `list`, `numbered` or `notes` (each tip a short paragraph). `serve` is `list` or `line` (suggestions on one line).

Fixed in every layout: `id="method"` on the method heading, `id="why-title"` when there is a why heading, the recipe name in the method heading, and the ingredients card. The FAQ section (`id="faq"`) appears only where `src/lib/faq.js` has something to ask that the page does not already say in one place (the waiting, and the sauce questions on carbonara, alfredo and cacio e pepe); a heading over one restated fact is filler, so most recipes have none.

<!-- layouts:end -->

A recipe can also carry its own headings (`headings: { tips: 'A quick note on the butter' }`), which win over the pool. Per-recipe headings should be specific to the dish. The method heading always keeps the dish's name, so its wording comes from the pool.

### 4.3 Honesty rules

The site is read by people and by Google's quality systems, and both penalise the same thing: claims the site cannot back. These must not come back once removed.

- **No invented experience.** No first-person narration or testing claims in recipe prose. Recipes drafted by an AI session have not been cooked by anyone, so nothing in their text may say or imply that they were.
- **No invented ratings.** Ratings and review counts come from readers or from nowhere.
- **No invented popularity.** The catalogue's `rating` and `reviews` only order the lists, and the site keeps no analytics of what readers cook, save or print. A list may be in an order; it may not say readers chose it. No "ranked by what readers cook most", "Trending", "Top rated" or "Most popular" while `src/data/reviews.json` is empty, and `npm run check` fails on them.
- **No new history.** Do not add a date, chef, region or named person that is not already in the recipe. When unsure, soften ("is said to have been") or leave it out.
- **Only the recipe's own numbers.** Temperatures, weights, shelf lives and times are the recipe's. A "check early" time in advice may be any time shorter than one the recipe states.
- **No health promises and no suitability labels.** Never write "safe for diabetics", "kidney-safe", "lowers blood sugar", "burns fat", "detox" or "cures", in any recipe or heading, and do not label a recipe as suiting a condition (diabetes, kidney disease) or an outcome (weight loss): the three labels that did were withdrawn (section 9). Search phrases may state numbers the page prints ("under 400 calories", "no added salt"). `npm run health` fails on the promises it can recognise and on a withdrawn label; the rest is on you.
- **Diet labels with their conditions.** A label that holds only with a swap says so on the page, and the structured data leaves it out (section 3, `dietTags`). Do not "fix" a contradicted tag by adding an alternative the recipe does not really offer.
- **Only claims the page can keep.** A description, keyword or title that promises a time must hold with the waiting included; the nutrition note says whether the figures were calculated or estimated.
- **No invented publication history.** Never backdate, spread, randomise or otherwise fabricate `datePublished` or any publication timestamp, and do not build tooling that does. Section 7 says what the site publishes today and why it needs a decision.

## 5. Adding a volume

**Standing instruction from the owner: always add the most searched, most famous recipes from the internet for the USA, Canada, Australia, the UK and New Zealand.** When the owner asks for new recipes or a new volume without naming a theme, that is the brief: pick the dishes people in those five countries search for most, grade them against the catalogue (steps 1 and 2 below) so nothing is published twice, and add only the ones that are new. Where a request names a theme (diabetes, weight loss and so on), keep the theme and still choose the best-known dishes of those five countries within it.

1. **Names first.** Put candidate dishes one per line in a text file (`Title`, or `Title | primary search phrase`). Grade them: `node tools/dedupe-candidates.js names.txt --new`. Write the catalogue rows *from that output*, not retyped from it.
2. **Never publish the same dish twice.** The tool misses synonyms and spelling variants (a seafood boil is the shrimp boil with crab; wassail is the mulled cider; baked oats are the baked oatmeal), so also read each new title against the existing ones by eye. Once the volume is written, run `node tools/dedupe-candidates.js --volume N` and `npm run duplicates`.
3. **Ordinary pages.** Every recipe is a normal `/recipes/<slug>/` page in the catalogue. Never build separate per-country or per-cuisine pages for new recipes; the cuisine and category pages already list them.
4. **Write** `src/data/catalog-N.js` and `src/data/detailsN/*.js` (several files by category is fine), following sections 3 and 4. Leave `layout` out: the slug picks one.
5. **Give each recipe the opening it is assigned.** The hook is fixed by the slug so variety is built in:
   `node -e "const v=require('./src/lib/voice');for(const s of process.argv.slice(1))console.log(s,v.hookFor(s).id)" slug-a slug-b`
   If the assigned hook genuinely does not fit the dish, use the nearest one that does. No two recipes may share the same first four words of `why`.
6. `npm run build`, then `npm run check`. If an audit fails, fix the recipe.
7. `npm run readme` (and build again if it changed anything), then commit.
8. **Keep previous recipes untouched** when adding a volume. Changes to existing recipes go through section 6, or a deliberate commit of their own.

New recipes show a gradient placeholder until an image is added (README.md, images section). **Real photographs only: the owner has said they want real images, not AI-generated ones, so do not generate or publish illustrations for new recipes, and leave a recipe on its gradient card when no correct photograph exists.** (`tools/generate_images.py` drew the older labelled illustrations and is not to be run for new volumes.) Photographs come from `tools/fetch_images.py` and are staged and looked at before `tools/review_images.py` publishes them; a wrong picture is worse than none. Look at each one against the recipe's diet label as well as the dish, at full size and with the credit line the page will print: withdraw a photograph of raw ingredients, one that shows meat or shellfish on a Vegetarian or Vegan recipe, dairy on a Dairy-Free or Vegan one, or wheat noodles, pasta or a breadcrumb coating on a Gluten-Free one, and one whose credit line says so (the README section on volumes 32 to 34 lists the fourteen withdrawn there and, for the photographs kept, what differs from each recipe). `tools/review_images.py --reject` only acts on staged entries, so to withdraw a published photograph, copy its `images.json` entry into a temporary file as `{"slug": {"hero": <entry>, "process": null}}` and pass that with `--pending`. A CC BY or CC BY-SA photograph must name its author (read the file's description page, not the archive's empty field), and `npm run check` fails if it does not. `fetch_images.py --img-dir` and `contact_sheet.py --img-dir` keep candidate files apart from the ones the site is using. For a recipe the chain gave up on, `tools/wide_search.py` reads the Wikipedia article's photographs and the Commons category for the dish in full, or with `--files` runs the Commons file search by name, which finds what the chain's own search returned nothing for while Commons was rate limiting (its header says how to run it): `search`, `stage`, `sheets`, then look at every sheet, then `apply` a verdict file. It publishes nothing until a person has looked, and about two candidates in three are still the wrong picture. One archive page is never the picture of two different dishes (`fetch_images.py` will hand the same one to every recipe whose name it matches best): `npm run check` fails on it, with a short list in `tools/check.js` of recipes that are the same dish under two names.

## 6. Rewriting existing recipes (`tools/humanize.js`)

Measured on the 2,415 recipes (`npm run voice`): there are no banned phrases and no first-person claims. What is repetitive is structural: every `why` was a single paragraph, most had no short sentence, every recipe had exactly three tips, and all pages carried the same nine headings (the layouts now fix the last one). The pipeline targets those.

```bash
npm run backup                                              # snapshot src/data (humanize also does this itself)
node tools/humanize.js --dry-run --price-in X --price-out Y # the exact prompt, and a rough cost (dollars per million tokens)
node tools/humanize.js --mock --limit 40                    # the whole pipeline with a stand-in model, no key; output is not for publishing
ANTHROPIC_API_KEY=… node tools/humanize.js --model <id> --limit 40   # one real batch; read the diff before going on
ANTHROPIC_API_KEY=… node tools/humanize.js --model <id>              # everything not yet done; resumable
```

- **Choose the model** with `--model` or `HUMANIZE_MODEL`; there is no default, because the choice sets the cost. **Do not run a real pass over the catalogue without the owner's key and go-ahead: it spends money.**
- **Selection**: `--select all` (default), `--select flagged` (what `npm run voice` flags), or `--select slug,slug`. `--redo`, `--retry-rejected`, `--limit`, `--offset`.
- **Batches** of 30 to 50 (`--batch-size`, default 40), requests in flight `--concurrency` (default 4). One API call per recipe; the batch is the unit that is saved and reported.
- **Output** goes to `src/data/rewrites/r-<run>-<batch>.json`, one small file per batch. Nothing in the detail files changes, and the pipeline never touches dates. To undo everything: delete those files, or `node tools/backup.js --restore --prune`.
- **What changes**: `d`, `why` (as 2 to 4 paragraphs), `tips` (2 to 5), `store`, and headings for the tips, serving and storage sections (and the why section where the layout shows one). **What never changes**: ingredients, method, times, nutrition, tags, images, dates.
- **What a rewrite must pass** (`src/lib/rewrite-check.js`) or it is left as it was and recorded in `.humanize/rejected.json`: every quantity, year and proper noun already in the recipe; no diet claim or storage method added or dropped; the voice rules above; a varied rhythm; bold only on what matters; an opening no other recipe has; headings not already worn out across the site; no sentence lifted from another recipe. A rejected answer is sent back with the list of problems, twice at most.
- **After the run** the repo's own timing, keyword, diet and voice audits read the merged catalogue, and any rewrite they reject is taken back out.
- **Rate limits and failures**: `Retry-After` is honoured and pauses every worker; concurrency halves on a 429 or 529 and recovers after a run of successes; 5xx and network errors back off exponentially with jitter; a bad key, a missing model or an empty balance stop the run; eight failures in a row stop it. Everything accepted is on disk after each batch, so a stopped run resumes where it stopped. Ctrl-C finishes the requests in flight and keeps what was accepted.
- **Logs**: `logs/humanize-<run>.jsonl` (every event) and `logs/humanize-errors.jsonl` (errors and rejections). Both, and `backups/` and `.humanize/`, are git-ignored.
- **Review before committing**: `git diff --stat`, read a sample of `src/data/rewrites/*.json`, then `npm run build && npm run check`. A rewritten recipe gets a real new `lastmod` from the content-date register, which is correct.

What the pipeline cannot do is make prose sound experienced. It removes the tells and varies the shape. It does not add what a cook who had made the dish would know, and it must not pretend to.

The "Common Substitutions" and FAQ blocks on each page are generated from the recipe's own data (`src/lib/substitutions.js`, `src/lib/faq.js`) and are templated by design: that is what keeps them true. If they should read less alike, vary the wording inside those generators and keep the grounding. Do not hand them to a model.

## 7. Dates

- **`dateModified`** (Recipe JSON-LD, sitemap `lastmod`) is honest: it comes from the content-date register (`src/data/content-dates.json`) and moves only when a recipe's content changes.
- **`datePublished`** (Recipe JSON-LD, `article:published_time`, the RSS and Pinterest `pubDate`, and the `z` field of `search-index.json` that the "newest" sort uses) comes from `src/data/published-dates.json`: the day each page first appeared in this repository's history, derived once from git by `tools/published-dates.js`. A new recipe gets the date of the build that first publishes it, and the date never moves after that. It used to be synthetic (counted back from 2026-07-01 across 2013 to 2026); that was replaced in October 2026.
- **Do not edit either register by hand**, and do not spread, randomise or backdate publication dates in any tool. If the site was live somewhere else before September 2026 and the owner can show when, that is the only reason to change a published date.

## 8. Open decisions for the owner

The October 2026 audit settled the two decisions that used to be here: the synthetic `datePublished` was replaced with git-recorded first-seen dates (section 7), and the About page and recipe byline no longer say every recipe was cooked and tested (they say the recipes are written with AI assistance and checked by script). Still the owner's to decide:

1. **The byline and About wording.** The new text is a proposal for the owner's public identity; adjust it, keeping it true.
2. **Health labels.** Withdrawn pending review by a registered dietitian (section 9). Reinstating any of them is the owner's call, after that review.
3. **Contact form.** `contact/send.php` needs a config file outside `public_html` naming the inbox (see `tools/contact-config.example.php` and README, "Deploying"). Until it exists the form says, truthfully, that nothing was sent.
4. **What gets deployed.** The whole repository is in the web root; `.htaccess` refuses the private paths, but deploying only the built site is the real fix (README, "Deploying").
5. **"No Added Sugar".** The derived tag and filter keep that name; it resembles a regulated claim in some markets. Rename, keep, or drop it.
6. **Search Console and analytics.** Any claim about traffic or indexing needs the owner's exports (Performance, Pages, Crawl stats); none were available to the audit.

## 9. Health labels (withdrawn) and the nutrition calculator

Volumes 32 to 34 carried three hand-written tags, **Diabetes-Friendly**, **Weight-Loss Friendly** and **Kidney-Friendly**, each held to numeric limits in `src/lib/health.js`. They were **withdrawn in October 2026**. Each named a condition or an outcome rather than the dish, which makes it a claim that the dish suits a person; the potassium and phosphorus figures behind the kidney label come from a food table written for this site; and no dietitian has reviewed any of it. A disclaimer beside such a label does not substitute for that review.

- No recipe carries them, `DIET_TAGS` does not offer them as filters, the Recipe JSON-LD no longer emits `DiabeticDiet` (nor `LowCalorieDiet`, `LowFatDiet` or `LowSaltDiet`, which were thresholds of the site's own), and `npm run health` fails if one comes back. The limits stay in `src/lib/health.js`, unused, so a reviewer can see exactly what the labels stood for.
- Their search phrases were replaced with the numbers the pages print ("… under 400 calories", "high protein …"); the "no added sugar …" and "no added salt …" phrases that also replaced them were removed in October 2026 as regulated wording. `npm run keywords` checks each against the record.
- `npm run health` now holds: no withdrawn label; no outcome promise in any recipe; volumes 32 to 34 still read in full. The volume-34 protein brief is reported, not enforced: with USDA figures some fish come out leaner.

**How the nutrition figures are made (October 2026)**

The build runs `tools/nutrition-calc.js` on every recipe's `ing` and prints only what it computes. The food table (`tools/nutrition-foods.js`) is overlaid by `tools/nutrition-sources.json`, which records for every food a status: `usda` (an SR Legacy entry named by NDB number; USDA FoodData Central, April 2018, public domain), `proxy` (the nearest named SR entry, e.g. dry breadcrumbs for panko), `zero`, `generic` (an unnamed "spice") or `unverified` (the old hand-written figure, no source). Per-item weights ("2 onions") count as sourced only when an SR portion confirms them. Every recipe gets a tier:

- **1, calculated**: every line read, at most 5% of the energy from unsourced foods or weights, and no assumption that moves the sum. Only these go into the Recipe JSON-LD, decide High-Protein, Low-Carb and Keto, and may feed a snippet or a search phrase with a number.
- **2, approximate**: readable, but the page names what it rests on (marinade counted in full, bone-in weights, a drained tin at full weight, an unquantified ingredient, unsourced foods, alcohol in a cooked dish).
- **3, none**: unreadable lines, deep-frying (the oil taken up is unknowable), or mostly unsourced. No figures, no schema.

Prose may quote a nutrition number only on a tier-1 recipe and only if it matches (2 g, 15 kcal); `npm run nutrition` fails otherwise. Search phrases state numbers ("under 400 calories", "high protein" at 30 g) and never regulated wording ("low fat", "light", "no added salt", "no added sugar", "high fibre"); `npm run keywords` refuses those outright.

**Writing a recipe whose nutrition should be calculated**

1. Write `ing` in the shape the calculator reads: `<quantity> <unit> <food>[, preparation]`, metric first, an amount on every line except pepper, one food per line, and weights in grams. A tin may be written "1 tin (400 g) chopped tomatoes"; a drained tin is counted at the stated weight, so give the drained weight in grams if you know it. Say "unsalted stock" if it is, and give the salt as a measure. `npm run calc -- --slug <slug> --lines` shows how each line was read, its source status and the tier.
2. Do not type `nut`. If a food is missing, add it to `tools/nutrition-foods.js` with its SR Legacy NDB number recorded in `tools/nutrition-sources.json` (status `usda`), or as `unverified` if there is no SR entry. Never invent a figure to lift a recipe's tier.
3. Where a recipe is sweetened with erythritol or another sweetener that is not absorbed, the table counts it as no carbohydrate and the recipe says so beside its figures.
4. The "No Added Sugar" tag is derived from ingredient names, including compound foods that contain sugar (ketchup, biscuits, mirin…). Whether to keep that wording, which resembles a regulated labelling claim in the UK, EU and Australia, is the owner's decision (section 8).
5. Nothing in the prose may promise an outcome (section 4.3).
