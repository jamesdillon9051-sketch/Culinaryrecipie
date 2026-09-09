#!/usr/bin/env python3
"""Removes any photograph that image-rejects.json names.

Rejections are recorded while the fetcher is still running, so an image can be
refused in the list and already sitting on disk from the run that found it —
which is how two rejected pictures reached a commit once. This reconciles the
two: anything whose recorded page appears in the reject list is deleted, its
manifest entry emptied, and the recipe falls back to its gradient placeholder.

The entry is emptied rather than marked skip:true. skip is for a dish the
archives genuinely have nothing for; these have only had one candidate refused,
and the next run should look again — it will now decline that exact file.

    python3 tools/purge_rejects.py           delete them
    python3 tools/purge_rejects.py --dry-run list what would go
"""

import argparse, json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MANIFEST = os.path.join(ROOT, "src", "data", "images.json")
REJECTS = os.path.join(ROOT, "src", "data", "image-rejects.json")
IMG_DIR = os.path.join(ROOT, "src", "assets", "img", "recipes")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    manifest = json.load(open(MANIFEST))
    raw = json.load(open(REJECTS))
    rejects = {slug: {e["page"] for e in entries if e.get("page")}
               for slug, entries in raw.items() if not slug.startswith("_")}

    purged, files = [], []
    for slug, bad_pages in rejects.items():
        entry = manifest.get(slug) or {}
        # Both slots are checked: a rejected file can be the process shot as
        # easily as the hero, and leaving it behind ships it on the page.
        hit = any((entry.get(kind) or {}).get("page") in bad_pages
                  for kind in ("hero", "process"))
        if not hit:
            continue
        purged.append(slug)
        for suffix in ("", "-process"):
            for ext in ("jpg", "webp"):
                path = os.path.join(IMG_DIR, f"{slug}{suffix}.{ext}")
                if os.path.exists(path):
                    files.append(path)
        if not args.dry_run:
            manifest[slug] = {"hero": None, "process": None}
            for path in files[-4:]:
                if os.path.exists(path):
                    os.remove(path)

    if not args.dry_run and purged:
        json.dump(manifest, open(MANIFEST, "w"), indent=1)

    verb = "would purge" if args.dry_run else "purged"
    for slug in purged:
        print(f"  {verb} {slug}")
    print(f"{verb}: {len(purged)} recipe(s), {len(files)} file(s)")
    if purged and not args.dry_run:
        print("run: node tools/make-attribution.js && node src/build.js && node tools/check.js")


if __name__ == "__main__":
    main()
