#!/usr/bin/env python3
"""Generate the brand marks: SVG favicon, PWA icons and the default OG card.
Run once; the output is committed as source under src/assets/img/."""
import os
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "src", "assets", "img")
os.makedirs(OUT, exist_ok=True)

TERRACOTTA = (184, 73, 44)
BRASS = (176, 134, 47)
CREAM = (251, 247, 240)
CHARCOAL = (36, 31, 27)

FAVICON = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="CulinaryVault">
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
draw.text((190, 88), "CULINARYVAULT", font=font(34), fill=(216, 171, 70))
draw.text((80, 220), "The world's 200 most", font=font(74), fill=CREAM)
draw.text((80, 310), "famous recipes", font=font(74), fill=CREAM)
draw.text((80, 430), "Tested, explained and written down properly.", font=font(32, bold=False), fill=(214, 199, 180))
draw.line([80, 500, 300, 500], fill=(184, 73, 44), width=6)
draw.text((80, 528), "29 cuisines  ·  Cook mode  ·  Adjustable servings", font=font(27, bold=False), fill=(178, 162, 145))
og.save(os.path.join(OUT, "og-default.jpg"), "JPEG", quality=88, optimize=True)

print("wrote:", ", ".join(sorted(f for f in os.listdir(OUT) if not os.path.isdir(os.path.join(OUT, f)))))
