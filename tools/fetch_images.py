#!/usr/bin/env python3
"""
CulinaryVault image pipeline.

Sources one hero image (and, for every other recipe, a second "process shot")
per recipe from Wikimedia Commons and Openverse, restricted to *unrestricted*
licences only: CC0 and public domain. Nothing under a share-alike or
attribution-required licence is ever downloaded.

Output:
  src/assets/img/recipes/<slug>.webp / .jpg          hero
  src/assets/img/recipes/<slug>-process.webp / .jpg  optional secondary shot
  src/data/images.json                               manifest + attribution + LQIP

Safe to re-run: work already on disk and recorded in the manifest is skipped.
"""

import io, json, os, re, subprocess, sys, time, urllib.parse, urllib.request
from PIL import Image, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "src", "assets", "img", "recipes")
MANIFEST = os.path.join(ROOT, "src", "data", "images.json")
UA = "CulinaryVaultBot/1.0 (static recipe site build; contact: hello@culinaryvault.example)"

HERO_W, PROCESS_W = 800, 640
WEBP_Q, JPEG_Q = 68, 70

# Licences we accept. Anything else is rejected outright.
OK_LICENCE = re.compile(r"^(cc0|public domain|pdm|no restrictions)", re.I)
BAD_TOKENS = re.compile(
    r"(logo|map|diagram|chart|sign|poster|stamp|coin|packaging|label|box|menu|"
    r"portrait|statue|monument|building|shop ?front|storefront|cartoon|drawing|"
    r"painting|illustration|coat of arms|flag of|stereograph|postcard|engraving|"
    r"lithograph|dennis collection|collection\.|archive|museum|advertisement|"
    r"cookbook|book cover|page from|title page|1[0-9]{3}|nasa|patent|"
    r"woman|man |people|crowd|festival|parade|restaurant exterior|market stall)", re.I)
STOP = set("""a an and the of with in on for to from at by de la le les el il alla all
au aux con e y style classic authentic homemade best easy quick ultimate crispy
fluffy silky creamy warm iced fresh baked roast roasted slow one bowl skillet deep
dish overnight brown butter bakery molten smash beer battered herb""".split())


def log(msg):
    print(msg, flush=True)


def _require_http(url):
    """urllib.request.urlopen honours file:// and ftp://. API responses decide
    these URLs, so only http(s) is ever followed."""
    if not isinstance(url, str) or not url.lower().startswith(("http://", "https://")):
        raise ValueError("refusing non-http(s) URL: %r" % (url,))
    return url


def http_json(url, tries=4):
    _require_http(url)
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
            with urllib.request.urlopen(req, timeout=45) as r:
                return json.loads(r.read().decode("utf-8"))
        except Exception as e:
            if i == tries - 1:
                log(f"    ! json failed: {e}")
                return None
            time.sleep(2 ** i)
    return None


def http_bytes(url, tries=3):
    _require_http(url)
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=90) as r:
                return r.read()
        except Exception as e:
            if i == tries - 1:
                log(f"    ! download failed: {e}")
                return None
            time.sleep(2 ** i)
    return None


def strip_html(s):
    s = re.sub(r"<[^>]+>", "", s or "")
    return re.sub(r"\s+", " ", s).strip()


def tokens(s):
    return {t for t in re.split(r"[^a-z0-9]+", (s or "").lower()) if len(t) > 2 and t not in STOP}


def relevance(candidate_title, query):
    """Fraction of the query's distinctive words present in the file title."""
    q, c = tokens(query), tokens(candidate_title)
    if not q:
        return 0.0
    hits = sum(1 for t in q if t in c or any(t in w or w in t for w in c))
    return hits / len(q)


# --------------------------------------------------------------- providers

def commons_candidates(query, extra=""):
    params = {
        "action": "query", "format": "json", "generator": "search",
        "gsrsearch": f'{query} {extra} filetype:bitmap haslicense:unrestricted'.strip(),
        "gsrnamespace": "6", "gsrlimit": "10",
        "prop": "imageinfo", "iiprop": "url|extmetadata|size", "iiurlwidth": str(HERO_W),
    }
    data = http_json("https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params))
    out = []
    if not data:
        return out
    for page in (data.get("query", {}).get("pages", {}) or {}).values():
        info = (page.get("imageinfo") or [None])[0]
        if not info:
            continue
        meta = info.get("extmetadata", {}) or {}
        lic = strip_html(meta.get("LicenseShortName", {}).get("value", ""))
        if not OK_LICENCE.match(lic):
            continue
        title = re.sub(r"^File:|\.\w+$", "", page.get("title", ""))
        if BAD_TOKENS.search(title):
            continue
        if info.get("width", 0) < 500 or info.get("height", 0) < 380:
            continue
        out.append({
            "title": title,
            "url": (info.get("thumburl") or info.get("url", "")).split("?")[0],
            "page": info.get("descriptionurl", ""),
            "author": strip_html(meta.get("Artist", {}).get("value", "")) or "Unknown",
            "licence": lic,
            "licence_url": strip_html(meta.get("LicenseUrl", {}).get("value", ""))
                           or "https://creativecommons.org/publicdomain/zero/1.0/",
            "source": "Wikimedia Commons",
            "score": relevance(title, query),
        })
    return out


def openverse_candidates(query):
    url = ("https://api.openverse.org/v1/images/?"
           + urllib.parse.urlencode({"q": query, "license": "cc0,pdm", "page_size": 8,
                                     "mature": "false", "aspect_ratio": "wide"}))
    data = http_json(url, tries=2)
    out = []
    if not data:
        return out
    for r in data.get("results", []):
        title = r.get("title") or query
        if BAD_TOKENS.search(title):
            continue
        lic = (r.get("license") or "").upper()
        if lic not in ("CC0", "PDM"):
            continue
        out.append({
            "title": title,
            "url": r.get("url", ""),
            "page": r.get("foreign_landing_url", ""),
            "author": r.get("creator") or "Unknown",
            "licence": "CC0 1.0" if lic == "CC0" else "Public Domain Mark 1.0",
            "licence_url": r.get("license_url") or "https://creativecommons.org/publicdomain/zero/1.0/",
            "source": (r.get("source") or "Openverse").title(),
            "score": relevance(title, query),
        })
    return out


def gather(query):
    seen, pool = set(), []
    for cands in (commons_candidates(query),
                  commons_candidates(query, "food"),
                  openverse_candidates(query)):
        for c in cands:
            key = c["url"]
            if not isinstance(key, str) or not key.lower().startswith(("http://", "https://")):
                continue
            if key and key not in seen and c["score"] >= 0.5:
                seen.add(key)
                pool.append(c)
        time.sleep(0.45)
        if len(pool) >= 4:
            break
    pool.sort(key=lambda c: -c["score"])
    return pool


# ------------------------------------------------------------- processing

def process(raw, slug, suffix, width):
    """Write webp + jpg, return metadata (dimensions, average colour, LQIP)."""
    try:
        im = Image.open(io.BytesIO(raw))
        im.draft("RGB", (width * 2, width * 2))
        im = im.convert("RGB")
    except Exception as e:
        log(f"    ! decode failed: {e}")
        return None
    if im.width < 400:
        return None

    # Crop to a 4:3 editorial frame, then resize.
    target = 4 / 3
    ratio = im.width / im.height
    if ratio > target:
        new_w = int(im.height * target)
        left = (im.width - new_w) // 2
        im = im.crop((left, 0, left + new_w, im.height))
    elif ratio < target:
        new_h = int(im.width / target)
        top = int((im.height - new_h) * 0.4)
        im = im.crop((0, top, im.width, top + new_h))
    im = im.resize((width, int(width / target)), Image.LANCZOS)

    base = os.path.join(IMG_DIR, slug + suffix)
    im.save(base + ".webp", "WEBP", quality=WEBP_Q, method=5)
    im.save(base + ".jpg", "JPEG", quality=JPEG_Q, optimize=True, progressive=True)

    tiny = im.resize((16, 12), Image.LANCZOS).filter(ImageFilter.GaussianBlur(0.6))
    buf = io.BytesIO()
    tiny.save(buf, "JPEG", quality=40)
    import base64
    lqip = "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()
    px = im.resize((1, 1), Image.LANCZOS).getpixel((0, 0))
    # Nudge toward the warm brand ground so placeholders never read as grey mud.
    colour = "#%02x%02x%02x" % tuple(min(255, int(v * 0.82 + 34)) for v in px)
    return {"w": im.width, "h": im.height, "lqip": lqip, "color": colour}


def main():
    os.makedirs(IMG_DIR, exist_ok=True)
    catalog = json.loads(subprocess.check_output(
        ["node", "-e", "process.stdout.write(JSON.stringify(require('%s')))"
         % os.path.join(ROOT, "src", "data", "catalog.js")]).decode())

    manifest = {}
    if os.path.exists(MANIFEST):
        manifest = json.load(open(MANIFEST))

    for idx, rec in enumerate(catalog):
        slug, query = rec["slug"], rec["imageQuery"]
        want_process = idx % 2 == 0          # a process shot for 50% of recipes
        entry = manifest.get(slug)
        if entry and entry.get("hero") and (not want_process or entry.get("process")):
            continue

        log(f"[{idx + 1:3d}/200] {slug}  <- {query}")
        pool = gather(query)
        if not pool:
            log("    · no unrestricted image found — gradient placeholder will be used")
            manifest[slug] = {"hero": None, "process": None}
            json.dump(manifest, open(MANIFEST, "w"), indent=1)
            continue

        entry = {"hero": None, "process": None}
        slots = [("", HERO_W)] + ([("-process", PROCESS_W)] if want_process else [])
        for (suffix, width) in slots:
            for cand in list(pool):
                pool.remove(cand)
                raw = http_bytes(cand["url"])
                time.sleep(0.3)
                if not raw or len(raw) < 8000:
                    continue
                meta = process(raw, slug, suffix, width)
                if not meta:
                    continue
                meta.update({k: cand[k] for k in
                             ("title", "author", "licence", "licence_url", "page", "source")})
                meta["file"] = slug + suffix
                entry["hero" if suffix == "" else "process"] = meta
                log(f"    ok {suffix or 'hero':8s} {cand['licence']:12s} {cand['title'][:52]}")
                break
        manifest[slug] = entry
        json.dump(manifest, open(MANIFEST, "w"), indent=1)

    have = sum(1 for v in manifest.values() if v.get("hero"))
    proc = sum(1 for v in manifest.values() if v.get("process"))
    log(f"\nDONE — heroes {have}/200, process shots {proc}")


if __name__ == "__main__":
    main()
