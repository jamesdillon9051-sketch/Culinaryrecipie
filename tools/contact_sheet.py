#!/usr/bin/env python3
"""Builds labelled contact sheets of sourced hero images so they can be checked
by eye against the dish they claim to show.

The fetcher scores a candidate on how well its title matches the query, and a
title can match while the photograph shows something else entirely — a band
called The Lancashire Hotpots, a sports car called a Tuscan, a plate of the
right cuisine but the wrong dish. Nothing in the pipeline can catch that. Only
looking can, so this makes looking cheap: one PNG per batch, each cell captioned
with the slug, so a wrong image can be named and replaced.

    python3 tools/contact_sheet.py                 every recipe missing a check
    python3 tools/contact_sheet.py --volumes 12-18 only those catalogue volumes
    python3 tools/contact_sheet.py --slugs a,b,c   named slugs only

Writes to the scratch directory given by --out (default tools/_sheets).
"""

import argparse, json, os, subprocess, sys
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "src", "assets", "img", "recipes")
MANIFEST = os.path.join(ROOT, "src", "data", "images.json")

COLS, ROWS = 6, 5           # 30 per sheet — large enough to judge, small enough to load
CELL_W, CELL_H = 320, 240
LABEL_H = 34
PAD = 6
BG = (24, 24, 27)
FG = (240, 240, 245)


def font(size):
    for path in ("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
                 "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"):
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def catalog():
    out = subprocess.check_output(
        ["node", "-e",
         "process.stdout.write(JSON.stringify(require('%s').catalog()))"
         % os.path.join(ROOT, "src", "data", "volumes.js")])
    return json.loads(out.decode())


def volume_slugs(spec):
    """--volumes 12-18 or --volumes 16,17 -> the slugs those catalogues hold."""
    wanted = set()
    for part in spec.split(","):
        if "-" in part:
            lo, hi = (int(x) for x in part.split("-"))
            wanted.update(range(lo, hi + 1))
        else:
            wanted.add(int(part))
    slugs = []
    for n in sorted(wanted):
        name = "catalog.js" if n == 1 else f"catalog-{n}.js"
        path = os.path.join(ROOT, "src", "data", name)
        if not os.path.exists(path):
            continue
        rows = json.loads(subprocess.check_output(
            ["node", "-e",
             "process.stdout.write(JSON.stringify(require('%s')))" % path]).decode())
        slugs += [r["slug"] for r in rows]
    return slugs


def cell(draw, sheet, box, slug, jpg, small, tiny):
    x, y = box
    if os.path.exists(jpg):
        try:
            im = Image.open(jpg).convert("RGB")
            im.thumbnail((CELL_W, CELL_H - LABEL_H))
            sheet.paste(im, (x + (CELL_W - im.width) // 2, y))
        except Exception as exc:                     # a truncated file, say
            draw.text((x + 6, y + 40), f"unreadable\n{exc}"[:60], font=tiny, fill=(255, 120, 120))
    else:
        draw.text((x + 6, y + 40), "no file on disk", font=small, fill=(255, 120, 120))
    draw.text((x + 4, y + CELL_H - LABEL_H + 6), slug[:34], font=small, fill=FG)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--volumes")
    ap.add_argument("--slugs")
    ap.add_argument("--out", default=os.path.join(ROOT, "tools", "_sheets"))
    # Images awaiting review live in a staging manifest, so they can be looked
    # at before anything publishes them.
    ap.add_argument("--manifest", default=MANIFEST)
    args = ap.parse_args()

    manifest = json.load(open(args.manifest))
    titles = {r["slug"]: r["title"] for r in catalog()}

    if args.slugs:
        slugs = [s.strip() for s in args.slugs.split(",") if s.strip()]
    elif args.volumes:
        slugs = volume_slugs(args.volumes)
    else:
        slugs = list(titles)

    # Only recipes that actually have a hero on disk are worth looking at.
    slugs = [s for s in slugs if (manifest.get(s) or {}).get("hero")]
    if not slugs:
        print("nothing to sheet — no heroes recorded for those slugs")
        return

    os.makedirs(args.out, exist_ok=True)
    small, tiny = font(15), font(12)
    per = COLS * ROWS
    written = []

    for page in range((len(slugs) + per - 1) // per):
        batch = slugs[page * per:(page + 1) * per]
        sheet = Image.new("RGB",
                          (COLS * (CELL_W + PAD) + PAD, ROWS * (CELL_H + PAD) + PAD + 26), BG)
        draw = ImageDraw.Draw(sheet)
        draw.text((PAD, 6),
                  f"sheet {page + 1} — {batch[0]} … {batch[-1]}  ({len(batch)} images)",
                  font=small, fill=(150, 150, 160))
        for i, slug in enumerate(batch):
            col, row = i % COLS, i // COLS
            box = (PAD + col * (CELL_W + PAD), 26 + PAD + row * (CELL_H + PAD))
            cell(draw, sheet, box, slug, os.path.join(IMG_DIR, slug + ".jpg"), small, tiny)
        path = os.path.join(args.out, f"sheet-{page + 1:02d}.png")
        sheet.save(path, optimize=True)
        written.append(path)
        print(f"wrote {path}  ({len(batch)} images)")

    print(f"\n{len(slugs)} images across {len(written)} sheets")


if __name__ == "__main__":
    main()
