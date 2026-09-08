#!/usr/bin/env python3
"""Generate the brand marks: SVG favicon, PWA icons and the default OG card.
Run once; the output is committed as source under src/assets/img/."""
import json
import os
import subprocess
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "src", "assets", "img")
os.makedirs(OUT, exist_ok=True)


def site_facts():
    """The brand and the two counts the OG card puts in writing.

    Read out of the same modules the site renders from rather than typed in
    here. The card is the one asset nothing regenerates on a build, so a number
    hardcoded in it goes stale silently — this one said "CULINARYVAULT" and
    "the world's 400 most famous recipes" on a site called Weekly Delight with
    809 of them, and it was the social preview for 34 pages.
    """
    expr = (
        "const {SITE}=require('./src/templates/layout');"
        "const {recipeCount}=require('./src/data/stats');"
        "const {CUISINES}=require('./src/lib/util');"
        "process.stdout.write(JSON.stringify({"
        "name:SITE.name,recipes:recipeCount,cuisines:Object.keys(CUISINES).length}))"
    )
    return json.loads(subprocess.check_output(["node", "-e", expr], cwd=ROOT).decode())


_facts = site_facts()
BRAND = _facts["name"]
RECIPE_COUNT = _facts["recipes"]
CUISINE_COUNT = _facts["cuisines"]


def wrap(text, fnt, max_width):
    """Greedy word wrap measured in the font the line is drawn in."""
    lines, line = [], ""
    for word in text.split():
        trial = f"{line} {word}".strip()
        if line and fnt.getbbox(trial)[2] > max_width:
            lines.append(line)
            line = word
        else:
            line = trial
    if line:
        lines.append(line)
    return lines

TERRACOTTA = (184, 73, 44)
BRASS = (176, 134, 47)
CREAM = (251, 247, 240)
CHARCOAL = (36, 31, 27)

FAVICON = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Weekly Delight">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#b8492c"/>
      <stop offset="1" stop-color="#b0862f"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="16" fill="url(#g)"/>
  <path d="M20 44h24v5H20z" fill="#fbf7f0"/>
  <path d="M22 42V32a10 10 0 0 1-2-19.7A8 8 0 0 1 32 9a8 8 0 0 1 12 3.3A10 10 0 0 1 42 32v10z"
        fill="none" stroke="#fbf7f0" stroke-width="3.4" stroke-linejoin="round"/>
</svg>
"""
open(os.path.join(OUT, "favicon.svg"), "w").write(FAVICON)


def gradient(size, a, b, diagonal=True):
    img = Image.new("RGB", size)
    px = img.load()
    w, h = size
    for y in range(h):
        for x in range(w):
            t = ((x / w) * 0.6 + (y / h) * 0.4) if diagonal else (y / h)
            px[x, y] = tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))
    return img


def rounded(img, radius):
    mask = Image.new("L", img.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, img.size[0] - 1, img.size[1] - 1], radius, fill=255)
    out = Image.new("RGBA", img.size, (0, 0, 0, 0))
    out.paste(img, (0, 0), mask)
    return out


def font(size, bold=True):
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for path in candidates:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def chef_hat(draw, cx, cy, scale, colour):
    """Chef's toque: three puffs over a crown, with a separate band below."""
    r = 26 * scale
    # crown puffs
    draw.ellipse([cx - r * 1.65, cy - r * 1.55, cx - r * 0.15, cy - r * 0.05], fill=colour)
    draw.ellipse([cx + r * 0.15, cy - r * 1.55, cx + r * 1.65, cy - r * 0.05], fill=colour)
    draw.ellipse([cx - r * 0.95, cy - r * 2.00, cx + r * 0.95, cy - r * 0.20], fill=colour)
    # crown body
    draw.rectangle([cx - r * 1.35, cy - r * 0.80, cx + r * 1.35, cy + r * 0.55], fill=colour)
    # band, offset so the join reads as a seam rather than a blob
    draw.rounded_rectangle([cx - r * 1.55, cy + r * 0.72, cx + r * 1.55, cy + r * 1.55],
                           radius=r * 0.22, fill=colour)


# ---- PWA icons -------------------------------------------------------------
for size in (192, 512):
    base = gradient((size, size), TERRACOTTA, BRASS)
    icon = rounded(base, int(size * 0.22))
    draw = ImageDraw.Draw(icon)
    chef_hat(draw, size // 2, int(size * 0.46), size / 190, CREAM)
    icon.save(os.path.join(OUT, f"icon-{size}.png"))

# ---- Default Open Graph card ----------------------------------------------
og = gradient((1200, 630), (30, 22, 17), (92, 41, 26))
draw = ImageDraw.Draw(og)
# warm glow top-left
glow = Image.new("RGB", (1200, 630), (0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse([-300, -360, 800, 560], fill=(168, 82, 46))
glow = glow.filter(ImageFilter.GaussianBlur(150))
og = Image.blend(og, glow, 0.42)
draw = ImageDraw.Draw(og)

chef_hat(draw, 110, 120, 0.9, (216, 171, 70))
draw.text((190, 88), BRAND.upper(), font=font(34), fill=(216, 171, 70))

# The headline is wrapped rather than split by hand. It used to be two literal
# lines, which is how it came to read "The world's 400 most famous recipes" on
# a site that had grown to 809 — the number could not change without someone
# also re-deciding where the line broke. Measuring it means the count can grow
# a digit and the card still lays out.
HEADLINE_W = 1040
y = 220
for line in wrap(f"The world's {RECIPE_COUNT} most famous recipes", font(74), HEADLINE_W):
    draw.text((80, y), line, font=font(74), fill=CREAM)
    y += 90

draw.text((80, 430), "Tested, explained and written down properly.", font=font(32, bold=False), fill=(214, 199, 180))
draw.line([80, 500, 300, 500], fill=(184, 73, 44), width=6)
draw.text((80, 528), f"{CUISINE_COUNT} cuisines  ·  Cook mode  ·  Adjustable servings",
          font=font(27, bold=False), fill=(178, 162, 145))
og.save(os.path.join(OUT, "og-default.jpg"), "JPEG", quality=88, optimize=True)

# What the card says, in a form something can check. The image itself is the
# only place these numbers appear, and nothing can read them back out of a
# JPEG — so they are written down beside it and tools/check.js compares them
# against the live values. That is what turns "the card is stale" from
# something a person has to notice into a failing build.
json.dump({"brand": BRAND, "recipes": RECIPE_COUNT, "cuisines": CUISINE_COUNT},
          open(os.path.join(ROOT, "src", "data", "og-default.json"), "w"), indent=1)

print("wrote:", ", ".join(sorted(f for f in os.listdir(OUT) if not os.path.isdir(os.path.join(OUT, f)))))
