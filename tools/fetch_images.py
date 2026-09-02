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
    # Things that are not a photograph of the dish. Terms that also occur
    # inside ordinary food words are anchored: "flower" must not match
    # "cauliflower", and a four-digit archival year must not match the
    # middle of a camera timestamp like 20220503_122449.
    r"(logo|map|diagram|chart|\bsign\b|poster|stamp|coin|packaging|label|\bbox\b|menu|"
    r"portrait|statue|monument|building|shop ?front|storefront|cartoon|drawing|"
    r"painting|illustration|coat of arms|flag of|stereograph|postcard|engraving|"
    r"lithograph|dennis collection|collection\.|archive|museum|advertisement|"
    r"cookbook|book cover|page from|title page|nasa|patent|"
    # An archival date, standalone and old enough to mean a historical scan.
    r"\b1[0-8][0-9]{2}\b|\b19[0-5][0-9]\b|"
    # Product shots, clip art and brand assets look like food in a search
    # result and never look like a recipe photograph.
    r"\bpng\b|sticker|clip ?art|\brender\b|mockup|frozen [a-z]+ (pie|meal|dinner)|"
    r"mcdonald|burger king|m&m|\bkfc\b|captain d|monster energy|\bsubway\b|"
    r"nestl|kellogg|heinz|campbell|swanson|chees[e]?cake factory|"
    r"machine|maquina|m\u00e1quina|f\u00e1brica|premiere|conference|wordcamp|"
    r"ciclo|visita|embajador|ambassador|recalled|"
    # Places and living things, anchored so they cannot match inside a
    # longer food word.
    r"sunset|sunrise|\bburr\b|\blimbo\b|sculpture|tourist|"
    r"\bwoman\b|\bman\b|\bpeople\b|crowd|festival|parade|restaurant exterior|"
    r"market stall|\bbird\b|\btree\b|\bpine\b|\bflower\b|\bplant\b|\bleaf\b|"
    r"insect|butterfly|worm|larva|caterpillar|\bgarden\b|landscape|church|"
    r"temple|\bstation\b|"
    r"\bstreet\b|\bbridge\b|castle|\bpark\b|\bmall\b|shopping|airport|hotel lobby)", re.I)
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


# Wikimedia's API rate-limits this environment's shared egress IP, so requests
# to it are paced rather than burst. The gap widens on every 429 and narrows
# again after a run of clean responses, which keeps the whole catalogue
# reachable without needing a fixed guess at the limit.
_last_call = {}
_gap = {}
# The ceiling is deliberately low: a host that refuses at an 8-second pace
# is limiting the IP rather than the rate, and every extra step of
# escalation is time spent being refused more slowly.
MIN_GAP, MAX_GAP = 1.0, 8.0
BENCH_SECONDS = 600
BENCH_AFTER = 6
_clean_streak = {}
_fail_streak = {}
_benched_until = {}


def host_of(url):
    return urllib.parse.urlsplit(url).hostname or ""


def throttle(host):
    """Hold the per-host request gap, sleeping out whatever is left of it."""
    gap = _gap.get(host, MIN_GAP)
    waited = time.time() - _last_call.get(host, 0)
    if waited < gap:
        time.sleep(gap - waited)
    _last_call[host] = time.time()


def throttled(url):
    host = host_of(url)
    return benched(host) or _gap.get(host, MIN_GAP) > MIN_GAP * 4


def slow_down(host):
    _gap[host] = min(MAX_GAP, max(MIN_GAP, _gap.get(host, MIN_GAP)) * 1.8)
    _clean_streak[host] = 0
    _fail_streak[host] = _fail_streak.get(host, 0) + 1
    # Once pacing has hit the ceiling, each further attempt costs a full gap of
    # sleep to be refused again, so bench on the next failure rather than
    # spending another five refusals to reach the same conclusion.
    at_ceiling = _gap[host] >= MAX_GAP and _fail_streak[host] >= 2
    if (_fail_streak[host] >= BENCH_AFTER or at_ceiling) and not benched(host):
        # A short burst of 429s means the limit is on the IP, not the pace.
        # Waiting the gap out per request just spends minutes to be refused
        # again, so stop asking this host for a while.
        _benched_until[host] = time.time() + BENCH_SECONDS
        log(f"    · {host} is rate limiting this IP; benched for {BENCH_SECONDS // 60} minutes")
    elif not benched(host):
        log(f"    · {host} rate limited; pacing at {_gap[host]:.0f}s between calls")


def benched(host):
    until = _benched_until.get(host)
    if until is None:
        return False
    if time.time() < until:
        return True
    # The bench has expired. Come back at full speed rather than at the
    # ceiling pace that got us benched, or the first probe alone costs a
    # 45-second sleep before it can learn anything.
    del _benched_until[host]
    _gap[host] = MIN_GAP
    _fail_streak[host] = 0
    return False


def speed_up(host):
    _benched_until.pop(host, None)
    _fail_streak[host] = 0
    _clean_streak[host] = _clean_streak.get(host, 0) + 1
    if _clean_streak[host] >= 10 and _gap.get(host, MIN_GAP) > MIN_GAP:
        _gap[host] = max(MIN_GAP, _gap[host] / 1.4)
        _clean_streak[host] = 0


def http_json(url, tries=4):
    """A 429 widens this host's pacing gap and waits it out, rather than
    hammering: the limit is per-IP and only time makes it go away."""
    _require_http(url)
    host = host_of(url)
    if benched(host):
        return None
    for i in range(tries):
        throttle(host)
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
            with urllib.request.urlopen(req, timeout=45) as r:
                data = json.loads(r.read().decode("utf-8"))
            speed_up(host)
            return data
        except urllib.error.HTTPError as e:
            if e.code == 429:
                slow_down(host)
                if benched(host):
                    return None
                time.sleep(_gap.get(host, MIN_GAP))
                continue
            if i == tries - 1:
                log(f"    ! json failed: {e}")
                return None
            time.sleep(2 ** i)
        except Exception as e:
            if i == tries - 1:
                log(f"    ! json failed: {e}")
                return None
            time.sleep(2 ** i)
    log("    ! json failed: still rate limited after retries")
    return None


DOWNLOAD_UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
               "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36")


def http_bytes(url, tries=3):
    _require_http(url)
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={
                "User-Agent": DOWNLOAD_UA,
                "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
            })
            with urllib.request.urlopen(req, timeout=90) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            if e.code == 429:
                slow_down(host_of(url))
                if benched(host_of(url)):
                    return None
                time.sleep(_gap.get(host_of(url), MIN_GAP))
            if i == tries - 1:
                log(f"    ! download failed: {e}")
                return None
            time.sleep(2 ** i)
        except Exception as e:
            if i == tries - 1:
                log(f"    ! download failed: {e}")
                return None
            time.sleep(2 ** i)
    return None


def strip_html(s):
    s = re.sub(r"<[^>]+>", "", s or "")
    return re.sub(r"\s+", " ", s).strip()


WEAK = set("""japanese chinese korean thai indian french italian mexican greek turkish
spanish portuguese german swedish russian polish british american vietnamese
malaysian indonesian brazilian nigerian ethiopian jamaican peruvian argentinian
white black red green yellow brown golden dark light sweet sour spicy hot cold
small large whole half fresh dried new old traditional national street home
food dishes meal plate bowls cooking cooked recipe recipes""".split())


def tokens(s):
    return {t for t in re.split(r"[^a-z0-9]+", (s or "").lower()) if len(t) > 2 and t not in STOP}


def strong(s):
    """Tokens that actually identify a dish, with nationalities, colours and
    generic food words stripped out."""
    return tokens(s) - WEAK


def relevance(candidate_title, query):
    """Fraction of the query's distinctive words present in the file title."""
    q, c = tokens(query), tokens(candidate_title)
    if not q:
        return 0.0
    hits = sum(1 for t in q if t in c or any(t in w or w in t for w in c))
    return hits / len(q)


# --------------------------------------------------------------- providers

def commons_candidates(query, extra=""):
    # Openverse indexes most of Commons and is not rate limiting us, so a
    # benched Commons is a slow way to learn nothing new.
    if benched("commons.wikimedia.org"):
        return []
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
            "strong": bool(strong(title) & strong(query)) or not strong(query),
        })
    return out


def openverse_candidates(query, wide=True):
    params = {"q": query, "license": "cc0,pdm", "page_size": 12, "mature": "false"}
    if wide:
        params["aspect_ratio"] = "wide"
    url = "https://api.openverse.org/v1/images/?" + urllib.parse.urlencode(params)
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
            "strong": bool(strong(title) & strong(query)) or not strong(query),
        })
    return out


def shorten(query):
    """Openverse matches whole phrases, so a four-word dish name often returns
    nothing while its two distinctive words return plenty."""
    words = [w for w in re.split(r"[^A-Za-z0-9\']+", query) if len(w) > 2 and w.lower() not in STOP]
    return " ".join(words[:2]) if len(words) > 2 else ""


def gather(query):
    seen, pool = set(), []
    brief = shorten(query)
    attempts = [openverse_candidates(query),
                openverse_candidates(query, wide=False)]
    if brief:
        attempts.append(openverse_candidates(brief))
    attempts += [commons_candidates(query), commons_candidates(query, "food")]
    for cands in attempts:
        for c in cands:
            key = c["url"]
            if not isinstance(key, str) or not key.lower().startswith(("http://", "https://")):
                continue
            # A score alone is not enough: a title can hit the threshold on
            # nationality and colour words while showing something else
            # entirely, so at least one dish-identifying word must match too.
            if key and key not in seen and c["score"] >= 0.5 and c.get("strong"):
                seen.add(key)
                pool.append(c)
        if len(pool) >= 4:
            break
    # Wikimedia serves most of Openverse's results but is rate limiting this
    # IP, so a candidate hosted there costs a 45-second wait. Prefer an
    # equally relevant image from a host that will answer immediately, and
    # fall back to the throttled one only when it is the only match.
    def rank(c):
        return (-round(c["score"], 2), 1 if throttled(c["url"]) else 0)

    pool.sort(key=rank)
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


def alt_queries():
    """Some dishes are only catalogued under an English description, or under a
    romanisation the archives do not use. A slug can name fallback queries here,
    tried in order when the catalogue's own query finds nothing."""
    path = os.path.join(ROOT, "src", "data", "image-queries.json")
    return json.load(open(path)) if os.path.exists(path) else {}


def main():
    os.makedirs(IMG_DIR, exist_ok=True)
    alts = alt_queries()
    catalog = json.loads(subprocess.check_output(
        ["node", "-e",
         "process.stdout.write(JSON.stringify(["
         "...require('%s'), ...require('%s'), ...require('%s')]))"
         % (os.path.join(ROOT, "src", "data", "catalog.js"),
            os.path.join(ROOT, "src", "data", "catalog-2.js"),
            os.path.join(ROOT, "src", "data", "catalog-3.js"))]).decode())

    manifest = {}
    if os.path.exists(MANIFEST):
        manifest = json.load(open(MANIFEST))

    for idx, rec in enumerate(catalog):
        slug, query = rec["slug"], rec["imageQuery"]
        want_process = idx % 2 == 0          # a process shot for 50% of recipes
        entry = manifest.get(slug)
        if entry and entry.get("skip"):
            # Deliberately left on the gradient placeholder: the archives have
            # nothing for this dish that is both correctly licensed and
            # actually a picture of it. A wrong photo is worse than none.
            continue
        if entry and entry.get("hero"):
            # Already sourced. Never re-fetch: heroes are hand-checked and a
            # later search can return a worse match for the same dish. The
            # optional process shot is not worth risking that.
            continue

        log(f"[{idx + 1:3d}/{len(catalog)}] {slug}  <- {query}")
        pool = gather(query)
        for fallback in alts.get(slug, []):
            if pool:
                break
            log(f"    · retrying as \"{fallback}\"")
            pool = gather(fallback)
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
                if throttled(cand["url"]) and any(not throttled(c["url"]) for c in pool):
                    continue          # a faster candidate is still waiting
                raw = http_bytes(cand["url"])
                time.sleep(0.6)
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
        if not entry["hero"]:
            # Candidates were found but none could be downloaded — usually the
            # file host refusing. Say so, rather than leaving a silent gap: a
            # later run will retry this slug because the hero is still missing.
            log("    · candidates found but none downloadable — will retry on the next run")
        manifest[slug] = entry
        json.dump(manifest, open(MANIFEST, "w"), indent=1)

    have = sum(1 for v in manifest.values() if v.get("hero"))
    proc = sum(1 for v in manifest.values() if v.get("process"))
    log(f"\nDONE — heroes {have}/{len(catalog)}, process shots {proc}")


if __name__ == "__main__":
    main()
