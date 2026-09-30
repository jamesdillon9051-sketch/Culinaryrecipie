# Weekly Delight: working instructions

This file is read at the start of every session. Follow it without being reminded. "The owner" is the person who runs the site.

## 1. What this repository is

A static, dependency-free Node (18+) site, weeklydelight.com, of about 2,400 recipes.

- `src/build.js` renders every page into the **repository root**. That output is committed, so a change to data or a template shows up as a large diff of generated files. Nothing is fetched at build time.
- Recipes are JavaScript modules, not database rows (section 3).
- Hosting is static (Netlify, Vercel or GitHub Pages; see README.md).

```
src/build.js        the build; loadRecipes() joins catalogue + details + rewrites
src/data/           recipes, images.json, reviews.json, content-dates.json
src/lib/            rules and helpers: voice, layouts, rewrites, rewrite-check, seo, faq, substitutions…
src/templates/      page templates (recipe-page.js is the recipe page)
tools/              audits, the backup tool, the rewrite pipeline and its tests
README.md           long-form docs; its counts are derived from the data (tools/sync-readme.js)
```

## 2. Commands

| Command | What it does |
| --- | --- |
| `npm run build` | Regenerate the site into the repo root. |
| `npm run check` | Post-build audit: links, headings, JSON-LD, FAQ markup, README counts, **and** the data audits below. Must pass before any commit. |
| `npm run timing` `nutrition` `diet` `keywords` `seo` `duplicates` | The individual audits `check` runs. A failure names the recipe and the claim. Fix the recipe, not the audit. |
| `npm run voice` | Measure how repetitive the prose is; `-- --flagged`, `-- --slug a,b`, `-- --strict` (what `check` runs). |
| `npm run dedupe` | Grade candidate dish names against the catalogue (section 5). |
| `npm run backup` | Snapshot `src/data` to `backups/` with a sha256 manifest (`-- --verify`, `-- --restore [--prune]`, `-- --list`). |
| `npm run humanize` | The batch rewrite pipeline (section 6). |
| `npm run selftest` | Tests for the voice rules, layouts, overlay, validator and pipeline. No key, no network. Run it after touching any of them. |
| `npm run readme` | Re-derive the counts in README.md. `check` fails if they are stale. |

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
- `dietTags`: Vegetarian, Vegan, Gluten-Free and Dairy-Free are checked against the ingredient list by `npm run diet`. The build adds derived tags (High-Protein, Low-Carb…) itself.
- `badges`: `'new'` for a new volume.

**Detail**: `src/data/details/` (volume 1) and `src/data/details2/` … `details31/`. Each file is `module.exports = { 'slug': { … } }` with these fields:

| Field | What | Notes |
| --- | --- | --- |
| `d` | The lede under the title; also the JSON-LD description and card text | Plain, factual, 60 to 260 characters. Times it mentions are checked against the row. |
| `meta` | The search-result description | About 90 to 150 characters. The build clamps at 158 and pads to 140–160. |
| `kw` | 4 to 6 search phrases, the first is the primary | Every phrase must be *true* of the recipe: "30 minute" only if prep + cook is 30 or less, "freezer" only if the storage note says so. `npm run keywords` checks. |
| `why` | The explanation: what the dish is and why the method works | For a new recipe 150 to 260 words in 2 to 4 paragraphs (blank line between). `**bold**` allowed, at most 3 spans. |
| `ing` | Ingredient lines, metric first | A line starting `# ` is a group label. |
| `st` | Method steps | Times in the steps must agree with prep, cook and `rest` (`npm run timing`). |
| `tips` | 2 to 5 practical tips | `**bold**` allowed, at most 2 spans across all tips. |
| `pair` | 2 to 6 short serving suggestions | |
| `store` | The storage note | Shelf lives are the recipe's own and are not invented. |
| `nut` | `[kcal, protein g, carbs g, fat g, fibre g, sugar g, sodium mg]` per serving | Seven values. Calories must match the macros (`npm run nutrition`). |
| `rest` | Optional `[minutes, 'Label']` for unattended waiting (proving, chilling) | Required whenever the method describes an hour or more of waiting. |
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

Fixed in every layout: `id="method"` on the method heading, `id="faq"`, `id="why-title"` when there is a why heading, the recipe name in the method heading, and the ingredients card.

<!-- layouts:end -->

A recipe can also carry its own headings (`headings: { tips: 'A quick note on the butter' }`), which win over the pool. Per-recipe headings should be specific to the dish. The method heading always keeps the dish's name, so its wording comes from the pool.

### 4.3 Honesty rules

The site is read by people and by Google's quality systems, and both penalise the same thing: claims the site cannot back. These must not come back once removed.

- **No invented experience.** No first-person narration or testing claims in recipe prose. Recipes drafted by an AI session have not been cooked by anyone, so nothing in their text may say or imply that they were.
- **No invented ratings.** Ratings and review counts come from readers or from nowhere.
- **No new history.** Do not add a date, chef, region or named person that is not already in the recipe. When unsure, soften ("is said to have been") or leave it out.
- **Only the recipe's own numbers.** Temperatures, weights, shelf lives and times are the recipe's. A "check early" time in advice may be any time shorter than one the recipe states.
- **No invented publication history.** Never backdate, spread, randomise or otherwise fabricate `datePublished` or any publication timestamp, and do not build tooling that does. Section 7 says what the site publishes today and why it needs a decision.

## 5. Adding a volume

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

New recipes show a gradient placeholder until an image is added (README.md, images section).

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

- **`dateModified`** (Recipe JSON-LD, sitemap `lastmod`) is honest: it comes from the content-date register and moves only when a recipe's content changes.
- **`datePublished`** (Recipe JSON-LD, `article:published_time`, the RSS and Pinterest `pubDate`, and the `z` field of `search-index.json` that the "newest" sort uses) is **synthetic**. `loadRecipes()` in `src/build.js` derives it from a recipe's position in the catalogue, counted back from 2026-07-01, which spreads the recipes across April 2013 to June 2026. This repository's first commit is 2026-09-09 and its whole history is three weeks. Unless the site was live somewhere else before that, those dates are not real publication dates.
- **Do not extend this.** No spreading, randomising or backdating of publication dates or timestamps, in the build or in any tool. Replacing the synthetic dates is the owner's decision (section 8).

## 8. Open decisions for the owner

Found while writing these rules. None has been changed.

1. **Synthetic `datePublished`** (section 7). Options: (a) real first-seen dates taken from git history (`git log --diff-filter=A`), which are true and will show the recipes arriving in volumes; (b) drop `datePublished` from the schema and feeds and keep only the honest `dateModified`; (c) leave it. For new recipes going forward, a real publication schedule (release a few a week, each with its real date) is the honest way to get a natural-looking history.
2. **Testing claims on the site itself.** `src/templates/pages.js` (the About page: "cooked in an ordinary kitchen", "None of this replaces actually cooking the thing, which I still do for every recipe here", the "Tested recipes" counters) and the byline on every recipe page in `src/templates/recipe-page.js` ("Written and tested by …") say each recipe was cooked and tested by the named author. That is not true of recipes an AI session drafted, and it is the kind of claim Google's misrepresentation policies and its quality raters look for. Recommended: reword to what is true (checked by scripts; written with AI assistance and edited by the owner; nutrition estimated). It is the owner's public identity, so it is the owner's call.
