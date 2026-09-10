#!/usr/bin/env python3
"""Records the verdict on staged photographs: publish the good, refuse the rest.

Images fetched from the archives wait in images-pending.json until a person has
looked at them, because the failure that matters cannot be scored — "Nahir
Besara" is a footballer, "Torly Linden" is an avatar, "Old fashioned Sobia" is a
heating stove, and each of those scored a clean match against a recipe here.

    python3 tools/review_images.py --keep slug,slug,slug
    python3 tools/review_images.py --reject "slug=why it is wrong; slug=why"

Kept entries move from the pending manifest into images.json and appear on the
site. Rejected ones have their archive page recorded in image-rejects.json with
the reason, their files deleted, and their pending entry dropped — so the next
run looks again and declines that exact file.
"""

import argparse, json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MANIFEST = os.path.join(ROOT, "src", "data", "images.json")
PENDING = os.path.join(ROOT, "src", "data", "images-pending.json")
REJECTS = os.path.join(ROOT, "src", "data", "image-rejects.json")
IMG_DIR = os.path.join(ROOT, "src", "assets", "img", "recipes")


def load(path, default):
    return json.load(open(path)) if os.path.exists(path) else default


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--keep", default="")
    ap.add_argument("--reject", default="")
    args = ap.parse_args()

    manifest = load(MANIFEST, {})
    pending = load(PENDING, {})
    rejects = load(REJECTS, {})

    kept, refused, missing = [], [], []

    for slug in [s.strip() for s in args.keep.split(",") if s.strip()]:
        entry = pending.pop(slug, None)
        if not entry:
            missing.append(slug)
            continue
        manifest[slug] = entry
        kept.append(slug)

    # Clauses split on ";" and pairs on "=", so a reason containing either
    # silently becomes a slug that does not exist. That happened once and was
    # only caught because the tool prints what it could not find; a reason
    # without an "=" is now rejected loudly instead.
    for clause in [c.strip() for c in args.reject.split(";") if c.strip()]:
        if "=" not in clause:
            sys.exit(f"reject clause has no slug=reason form: {clause!r}\n"
                     f"a ';' inside a reason splits it — rephrase without one")
        slug, _, why = clause.partition("=")
        slug, why = slug.strip(), why.strip() or "not the dish"
        entry = pending.pop(slug, None)
        if not entry:
            missing.append(slug)
            continue
        for kind in ("hero", "process"):
            data = entry.get(kind)
            if not data:
                continue
            if data.get("page"):
                rejects.setdefault(slug, []).append({"page": data["page"], "why": why})
            elif data.get("prompt"):
                # A drawing has no source page, so this was recording nothing
                # for one — and a refused drawing came straight back, because
                # generate_images.py picks up any recipe without a hero and the
                # same prompt and seed produce the same file. Forty-two of one
                # run's forty-six were byte-identical redraws of images already
                # refused. Recording the prompt gives the generator something
                # to check, and says what was asked for as well as what was
                # wrong with the answer.
                rejects.setdefault(slug, []).append(
                    {"illustration": True, "model": data.get("model", ""),
                     "prompt": data["prompt"], "why": why})
        # Refuse only what was actually being reviewed.
        #
        # This used to clear both kinds and delete both files whatever the
        # pending entry held, which is destructive whenever a recipe has one
        # published shot and another under review: refusing a hero candidate
        # for tofu-edamame-stir-fry deleted the CC BY-SA process photograph
        # that had been on the site for months, manifest record and files
        # alike, and nothing said so. Rare enough to survive several runs —
        # it needs a slug with a published process shot and no hero — and
        # silent when it happens, because a missing image looks exactly like
        # a recipe that never had one.
        published = manifest.get(slug) or {}
        kinds = [k for k in ("hero", "process") if entry.get(k)]
        manifest[slug] = {k: (None if k in kinds else published.get(k))
                          for k in ("hero", "process")}
        for kind in kinds:
            suffix = "" if kind == "hero" else "-process"
            for ext in ("jpg", "webp"):
                path = os.path.join(IMG_DIR, f"{slug}{suffix}.{ext}")
                if os.path.exists(path):
                    os.remove(path)
        refused.append(slug)

    json.dump(manifest, open(MANIFEST, "w"), indent=1)
    json.dump(pending, open(PENDING, "w"), indent=1, sort_keys=True)
    json.dump(rejects, open(REJECTS, "w"), indent=2)

    print(f"published {len(kept)}, refused {len(refused)}, still pending {len(pending)}")
    if missing:
        print(f"not in the pending manifest: {', '.join(missing)}")


if __name__ == "__main__":
    main()
