#!/usr/bin/env python3
"""Takes photographs supplied by hand and puts them on the site.

Drop a file named after the recipe's slug into tools/_incoming/ — any common
format, any size — and this crops it to the site's 4:3 frame, writes the webp
and jpg at the right widths, computes the blur placeholder and average colour,
and records it in images.json. The recipe stops showing a gradient and starts
showing the photograph.

    python3 tools/adopt_images.py --credit "Photographer Name" --licence CC0
    python3 tools/adopt_images.py --dry-run

Credit matters and is not optional in the way it looks. Every image on this
site is listed in images-attribution.md with its licence, because for anything
CC BY the credit line is a condition of use rather than a courtesy. So a
supplied photograph needs to say where it came from:

    --licence "own"     you took it, no attribution needed
    --licence CC0       public domain
    --licence "CC BY 4.0" --credit "Name" --source-url https://...

The slug must match a recipe. Run with no photographs present and it lists the
slugs still waiting, which is the same list as MISSING-IMAGES.txt.
"""

import argparse, json, os, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fetch_images as F

ROOT = F.ROOT
INCOMING = os.path.join(ROOT, "tools", "_incoming")
MANIFEST = F.MANIFEST
ACCEPTS = (".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff", ".bmp", ".heic")


def catalog_slugs():
    rows = json.loads(subprocess.check_output(
        ["node", "-e",
         "process.stdout.write(JSON.stringify(require('%s').catalog()))"
         % os.path.join(ROOT, "src", "data", "volumes.js")]).decode())
    return {r["slug"]: r["title"] for r in rows}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--credit", default="Unknown")
    ap.add_argument("--licence", default="own")
    ap.add_argument("--source-url", default="")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    os.makedirs(INCOMING, exist_ok=True)
    titles = catalog_slugs()
    manifest = json.load(open(MANIFEST)) if os.path.exists(MANIFEST) else {}

    files = [f for f in sorted(os.listdir(INCOMING))
             if os.path.splitext(f)[1].lower() in ACCEPTS]
    if not files:
        waiting = [s for s in titles if not (manifest.get(s) or {}).get("hero")]
        print(f"nothing in {INCOMING}")
        print(f"{len(waiting)} recipes are still without a photograph — see MISSING-IMAGES.txt")
        return

    # A licence the gate would refuse from an archive is refused here too. The
    # site's promise about what it publishes does not depend on who supplied it.
    licence = args.licence.strip()
    if licence.lower() != "own" and not F.OK_LICENCE.match(licence):
        sys.exit(f"licence {licence!r} is not one this site can publish.\n"
                 f"CC0, public domain, CC BY and CC BY-SA are accepted. "
                 f"NonCommercial and NoDerivatives are not, because the site "
                 f"carries advertising and every image is resized.")

    done, skipped = 0, []
    for name in files:
        slug = os.path.splitext(name)[0].lower()
        if slug not in titles:
            skipped.append(f"{name}: no recipe has the slug {slug!r}")
            continue
        if (manifest.get(slug) or {}).get("hero"):
            skipped.append(f"{name}: {slug} already has a photograph")
            continue
        raw = open(os.path.join(INCOMING, name), "rb").read()
        if args.dry_run:
            print(f"  would adopt {slug:32s} {titles[slug]}")
            done += 1
            continue
        meta = F.process(raw, slug, "", F.HERO_W)
        if not meta:
            skipped.append(f"{name}: could not be processed — under 400 px wide, "
                           f"monochrome, or not a readable image")
            continue
        meta.update({
            "title": titles[slug],
            "author": args.credit,
            "licence": "Own work" if licence.lower() == "own" else licence,
            "licence_url": "",
            "page": args.source_url,
            "source": "Supplied",
            "file": slug,
        })
        manifest[slug] = {"hero": meta, "process": None}
        print(f"  adopted {slug:32s} {titles[slug]}")
        done += 1

    if not args.dry_run and done:
        json.dump(manifest, open(MANIFEST, "w"), indent=1)

    for line in skipped:
        print(f"  skipped {line}")
    print(f"\n{'would adopt' if args.dry_run else 'adopted'} {done}, skipped {len(skipped)}")
    if done and not args.dry_run:
        print("now run:  node tools/make-attribution.js && node src/build.js && node tools/check.js")


if __name__ == "__main__":
    main()
