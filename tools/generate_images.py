#!/usr/bin/env python3
"""Draws an illustration of a dish for the recipes no archive has a photograph of.

After six passes the archives are exhausted: what is left is either genuinely
unphotographed under a licence this site can use, or photographed only as
something else with the same name. This fills those gaps with a generated
picture instead of a gradient card.

    python3 tools/generate_images.py --dry-run          print the prompts only
    python3 tools/generate_images.py                    every recipe without one
    python3 tools/generate_images.py --slugs a,b,c      named recipes only
    python3 tools/generate_images.py --shard 0/3        one worker of three

An illustration is not a photograph and the site must not blur the two. So:

  * the entry is marked source "AI illustration", which is what the credit line
    under the picture says and what images-attribution.md lists it as;
  * src/data/stats.js counts illustrations separately from photographs, so no
    page can say "1,209 photographs" on the strength of these;
  * tools/check.js fails the build if an illustration is credited as a
    photograph, or if one reaches the site without being declared here.

Results are staged in images-pending.json rather than published, and go through
tools/review_images.py like everything else. A generator will draw a confident
picture of the wrong dish as readily as a right one, and it cannot be told from
the file — only from looking.

The prompt is built from the recipe's own title and description, so it cannot
drift from what the page says the dish is. Changing the recipe changes the
prompt.
"""

import argparse, json, os, re, sys, time, urllib.error, urllib.parse, urllib.request, subprocess

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fetch_images as F

ROOT = F.ROOT
PENDING = os.path.join(ROOT, "src", "data", "images-pending.json")
MANIFEST = F.MANIFEST

ENDPOINT = "https://image.pollinations.ai/prompt/"
GEN_W, GEN_H = 1024, 768          # generated large, cropped to the site's 4:3
MODEL = "sana"
TIMEOUT = 180

# What every plate should look like, so 174 pictures read as one collection
# rather than 174 different stock styles.
STYLE = ("food photography, natural window light from the side, shallow depth "
         "of field, plain rustic table, no text, no words, no lettering, "
         "no watermark, no hands, no people")

# The description carries sentences about provenance and technique that mean
# nothing to a generator and crowd out the part that describes the plate.
NOT_VISUAL = re.compile(
    r"\b(recipe|traditionally|originally|invented|named after|version|"
    r"the dish that|it is served|as often as|and it is|which is why|"
    r"nobody|everyone|should be|must be)\b", re.I)


def log(msg):
    print(msg, flush=True)


def recipes():
    """Catalogue rows joined to their detail record, for title and description."""
    rows = json.loads(subprocess.check_output(
        ["node", "-e",
         "const {catalog}=require('%s');"
         "const {loadRecipes}=require('%s');"
         "const d=Object.fromEntries(loadRecipes().map(r=>[r.slug,r]));"
         "process.stdout.write(JSON.stringify(catalog().map(r=>{"
         "const x=d[r.slug]||{};"
         "return {slug:r.slug,title:r.title,cuisine:r.cuisine,category:r.category,"
         "d:x.description||'',"
         "ing:(x.ingredients||[]).slice(0,40)};"
         "})))"
         % (os.path.join(ROOT, "src", "data", "volumes.js"),
            os.path.join(ROOT, "src", "build.js"))]).decode())
    return rows


def visual_clause(description):
    """The part of the description that describes the plate.

    Keeps the sentences about what the food looks like and drops the ones about
    where it comes from, which a generator renders as nothing useful and which
    push the real description past the length the model reads.
    """
    out = []
    for sentence in re.split(r"(?<=[.!?])\s+", description or ""):
        s = sentence.strip()
        if not s or NOT_VISUAL.search(s):
            continue
        out.append(s.rstrip("."))
        if sum(len(x) for x in out) > 180:
            break
    return ", ".join(out)


def key_ingredients(items, limit=5):
    """The few ingredients that decide what the plate looks like.

    A generator given "Bread Sauce" alone draws bread. Given the onion, cloves
    and milk as well it draws the sauce. Quantities and the store-cupboard
    items every recipe carries are dropped, because they describe none of it.
    """
    skip = re.compile(r"\b(salt|pepper|water|oil|butter|sugar|flour|"
                      r"to taste|for frying|for greasing|plus extra)\b", re.I)
    out = []
    for item in items:
        text = item if isinstance(item, str) else (item.get("item") or item.get("name") or "")
        # Group headings are carried in the same list, marked with a leading
        # "#". "For the meringue" is not an ingredient and draws nothing.
        if text.lstrip().startswith("#"):
            continue
        # Strip the quantity, which is everything up to the first letter-word
        # that is not a unit, and any bracketed aside.
        text = re.sub(r"\([^)]*\)", "", text)
        text = re.sub(r"^[\d\s./¼½¾⅓⅔⅛-]*", "", text)
        text = re.sub(r"^(g|kg|ml|l|tsp|tbsp|cups?|cloves?|large|small|medium|"
                      r"whole|fresh|ground|of)\b\s*", "", text, flags=re.I)
        text = text.split(",")[0].strip().rstrip(".")
        if not text or skip.search(text) or len(text) > 28:
            continue
        if text.lower() in {t.lower() for t in out}:
            continue
        out.append(text)
        if len(out) >= limit:
            break
    return out


def prompt_for(rec):
    """Describe the plate first and name the dish afterwards.

    Leading with the name is what fails. The generator reads "Bread Sauce" as
    bread and draws a roll; "Mont-Blanc" as the mountain; "Ka'ak bil Simsim" as
    nothing at all. Leading with what the food looks like and letting the name
    follow as a label fixed the first of those outright and most of the third,
    measured on five dishes before this was turned on the whole list.

    So the description the recipe already carries goes first, then the
    ingredients that decide the colour and shape, and the title last.
    """
    bits = []
    clause = visual_clause(rec.get("d"))
    if clause:
        bits.append(clause)
    ing = key_ingredients(rec.get("ing") or [])
    if ing:
        bits.append("made with " + ", ".join(ing))
    bits.append(f"a {rec['cuisine']} dish called {rec['title']}")
    bits.append(STYLE)
    return ", ".join(bits)


def refused_illustrations():
    """Slugs whose drawing has already been looked at and refused.

    Without this the generator redraws them: it selects any recipe without a
    hero, a refusal puts the recipe back to exactly that, and the same prompt
    and seed return the same picture. One run spent forty-two of its
    forty-six drawings reproducing images that had already been rejected.

    A refusal is not permanent — the dish is still undrawn, and a different
    seed is a real second attempt — so --retry ignores this, and moves the
    seed on so that the attempt is actually different.
    """
    path = os.path.join(ROOT, "src", "data", "image-rejects.json")
    if not os.path.exists(path):
        return {}
    raw = json.load(open(path))
    return {slug: [e for e in entries if e.get("illustration")]
            for slug, entries in raw.items()
            if not slug.startswith("_")
            and any(e.get("illustration") for e in entries)}


def fetch(prompt, seed):
    url = (ENDPOINT + urllib.parse.quote(prompt, safe="")
           + f"?width={GEN_W}&height={GEN_H}&nologo=true&model={MODEL}&seed={seed}")
    req = urllib.request.Request(url, headers={"User-Agent": F.UA})
    with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
        if r.status != 200:
            return None
        return r.read()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--slugs", default="")
    ap.add_argument("--shard", default="")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--pending", default=PENDING)
    ap.add_argument("--seed", type=int, default=11)
    ap.add_argument("--retry", action="store_true",
                    help="redraw dishes whose drawing was refused, with a moved-on seed")
    ap.add_argument("--pace", type=float, default=3.0,
                    help="seconds to wait between drawings, to stay under the rate limit")
    args = ap.parse_args()

    manifest = json.load(open(MANIFEST)) if os.path.exists(MANIFEST) else {}
    rows = recipes()
    refusals = refused_illustrations()

    if args.slugs:
        want = {s.strip() for s in args.slugs.split(",") if s.strip()}
        rows = [r for r in rows if r["slug"] in want]
    else:
        # Already published, or already drawn and waiting to be looked at.
        # Without the second test a restart redraws everything staged so far,
        # which on a rate-limited endpoint is an hour of work thrown away.
        staged = json.load(open(args.pending)) if os.path.exists(args.pending) else {}
        everywhere = json.load(open(PENDING)) if os.path.exists(PENDING) else {}
        refused = refusals
        rows = [r for r in rows
                if not (manifest.get(r["slug"]) or {}).get("hero")
                and not (staged.get(r["slug"]) or {}).get("hero")
                and not (everywhere.get(r["slug"]) or {}).get("hero")
                and (args.retry or r["slug"] not in refused)]

    if args.shard:
        k, n = (int(x) for x in args.shard.split("/"))
        rows = [r for i, r in enumerate(rows) if i % n == k]

    log(f"{len(rows)} recipes to illustrate")

    if args.dry_run:
        for r in rows:
            log(f"\n{r['slug']}\n  {prompt_for(r)}")
        return

    pending = json.load(open(args.pending)) if os.path.exists(args.pending) else {}
    done, failed = 0, []

    for i, rec in enumerate(rows, 1):
        slug = rec["slug"]
        prompt = prompt_for(rec)
        log(f"[{i}/{len(rows)}] {slug}")
        # The endpoint rate-limits hard and then drops the connection. Three
        # quick tries were not enough: the first run lost all three workers
        # to a 429 followed by a RemoteDisconnected. Back off properly, treat
        # a refusal as something to wait out rather than retry into, and let
        # nothing thrown here end the run — a slug that cannot be drawn is a
        # slug to skip, not a reason to stop.
        # A retry has to be a different request, or it returns the file it
        # returned last time — which is how one run spent 42 of its 46
        # drawings reproducing rejects. The shift counts this dish's own
        # refusals, so a second retry differs from the first as well as from
        # the original, rather than every retry landing on one spare seed.
        seed = args.seed + 100 * len(refusals.get(slug) or ())
        raw = None
        for attempt in range(5):
            try:
                raw = fetch(prompt, seed + attempt)
                if raw:
                    break
                wait = 0
            except urllib.error.HTTPError as e:
                log(f"    ! HTTP {e.code}")
                wait = 60 if e.code == 429 else 5 * (attempt + 1)
            except Exception as e:
                log(f"    ! {type(e).__name__}: {e}")
                wait = 10 * (attempt + 1)
            if attempt < 4:
                time.sleep(wait or 5)
        if not raw:
            log("    · gave up")
            failed.append(slug)
            continue

        try:
            meta = F.process(raw, slug, "", F.HERO_W)
        except Exception as e:
            log(f"    ! could not process: {type(e).__name__}: {e}")
            meta = None
        if not meta:
            log("    ! unusable once processed")
            failed.append(slug)
            continue

        meta.update({
            "title": rec["title"],
            # Nothing here is a person, and the credit line must not invent one.
            "author": "",
            "licence": "AI illustration",
            "licence_url": "",
            "page": "",
            "source": "AI illustration",
            "file": slug,
            "prompt": prompt,
            "model": MODEL,
        })
        pending[slug] = {"hero": meta, "process": None}
        json.dump(pending, open(args.pending, "w"), indent=1, sort_keys=True)
        done += 1
        time.sleep(args.pace)

    log(f"\nillustrated {done}, failed {len(failed)}")
    if failed:
        log("failed: " + ", ".join(failed))
    log(f"staged in {os.path.relpath(args.pending, ROOT)} — review before publishing:"
        f"\n  python3 tools/contact_sheet.py --slugs ...\n  python3 tools/review_images.py --keep ...")


if __name__ == "__main__":
    main()
