#!/usr/bin/env python3
"""
Read the curated picture sources in full, for recipes the ordinary chain gave up on.

Why this exists. tools/fetch_images.py asks the text searches first and stops as soon as
it holds two candidates. For a dish with a great many snapshots in the archives that means
the two places where a person decided what a picture shows are never reached: the
photographs in the English Wikipedia article for the dish, and the Commons category filed
under its name. Three refused Flickr snapshots ended the search for English muffins, whose
Commons category holds thirty-six files. This reads both in full, and can take one deeper
page from Openverse (twenty results of any shape, the most an anonymous caller is given).

Nothing here publishes a picture until a person has looked at it. The steps, each of them
resumable, and the files they keep (in .wide/, which is git-ignored):

  search   find candidates for the slugs in a text file          -> candidates-<tag>.json
  stage    download and resize them, one file per candidate      -> files/<slug>--<n>.jpg/.webp
  sheets   contact sheets of what is waiting, with the facts     -> sheets/sheet-NN.png
  apply    record verdicts: KEEP publishes, REJECT is remembered -> src/data/images.json,
                                                                    src/data/image-rejects.json

    python3 tools/wide_search.py search --only slugs.txt            # Wikipedia + Commons
    python3 tools/wide_search.py search --only slugs.txt --openverse --tag ov --budget 150
    python3 tools/wide_search.py stage  [--keep 4]
    python3 tools/wide_search.py sheets                             # then LOOK at every sheet
    python3 tools/wide_search.py apply  verdicts.txt

A verdict file has one or more lines of either kind (a key is <slug>--<n>, as the sheets print it):

    KEEP="english-muffins--2,fish-pie--1"
    REJECT="english-muffins--1=a branded pack; english-muffins--3=a breakfast plate with one muffin"

A KEEP replaces a labelled drawing or a gradient card; it refuses to replace a photograph. The
other candidates for that slug are dropped, and a REJECT records the archive page in
image-rejects.json so that no search offers it again. Judging at the size of a contact sheet
is not enough: look again at the ones that were kept, at 640 pixels or more across, before
committing. Roughly two candidates in three are the wrong picture (a place or a person with
the dish's name, a branded pack, a different dish), and the same photograph can stand
in for many dishes: every cocktail article lists one gin and tonic.

Real photographs only, under the licences tools/fetch_images.py already enforces. Nothing is
generated.
"""

import argparse
import glob
import json
import os
import re
import subprocess
import sys
import time
import urllib.parse
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, HERE)
import fetch_images as fi                      # noqa: E402  (the licence gate, the downloader, the resizer)

WORK = os.path.join(ROOT, ".wide")
COMMONS = "https://commons.wikimedia.org/w/api.php?"
WIKI = "https://en.wikipedia.org/w/api.php?"

# One dropped connection must not bench Wikimedia for the rest of a long run, and a tunnel
# that closes mid-exchange must not hold a worker for minutes.
fi.DEAD_AFTER = 6

# Article categories that say the article is about something to eat or drink. An article on a
# person or a place with the dish's name has none of these, and is skipped.
FOODISH = re.compile(
    r"(dish|food|cuisine|dessert|sauce|soup|cake|bread|pastr|sandwich|beverage|drink|cocktail|stew|"
    r"salad|snack|\bpie\b|\bpies\b|cookie|candy|confection|bean|rice|noodle|meat|sausage|egg|cheese|"
    r"breakfast|dip\b|dumpling|casserole|pasta|pizza|muffin|biscuit|fudge|jelly|ice cream|chili|"
    r"fried|baked|roast|coffee|\btea\b|liqueur|spirit|wine|beer)", re.I)
# Files in an article that are furniture, not food.
SKIP_FILE = re.compile(
    r"(flag|icon|symbol|commons-logo|wiki|logo|map\b|diagram|chart|sign\b|portrait|statue|coat of "
    r"arms|stamp|poster|banner|button|ambox|question|edit-|crystal)", re.I)


# ----------------------------------------------------------------------------- state
def paths(work):
    os.makedirs(os.path.join(work, "files"), exist_ok=True)
    return {
        "files": os.path.join(work, "files"),
        "pending": os.path.join(work, "pending.json"),
        "state": os.path.join(work, "state.json"),
        "sheets": os.path.join(work, "sheets"),
    }


def load(path, default):
    return json.load(open(path)) if os.path.exists(path) else default


def save(path, data):
    json.dump(data, open(path, "w"), indent=1, sort_keys=True)


def published_pages(manifest):
    out = set()
    for entry in manifest.values():
        for kind in ("hero", "process"):
            rec = (entry or {}).get(kind)
            if rec and rec.get("page"):
                out.add(rec["page"])
    return out


def is_drawing(hero):
    return "illustration" in ((hero or {}).get("licence") or "").lower()


def catalogue():
    out = subprocess.check_output(
        ["node", "-e", "process.stdout.write(JSON.stringify(require('%s').catalog()))"
         % os.path.join(ROOT, "src", "data", "volumes.js")])
    return json.loads(out.decode())


# ----------------------------------------------------------------------------- search
def candidate_from_page(page, name, tags, note, score):
    info = (page.get("imageinfo") or [None])[0]
    if not info:
        return None
    meta = info.get("extmetadata", {}) or {}
    lic = fi.strip_html(meta.get("LicenseShortName", {}).get("value", ""))
    if not fi.OK_LICENCE.match(lic):
        return None
    title = re.sub(r"^File:|\.\w+$", "", page.get("title", ""))
    if fi.BAD_TOKENS.search(title) or fi.contradicts_diet(title, name, tags):
        return None
    w, h = info.get("width", 0), info.get("height", 0)
    if w < 500 or h < 380:
        return None
    if info.get("mime") and info["mime"] not in ("image/jpeg", "image/png", "image/webp"):
        return None
    src = info.get("thumburl")
    if not src:
        if info.get("size", 0) > 4_000_000:
            return None
        src = info.get("url", "")
    if not src:
        return None
    return {
        "title": title, "note": note, "url": src.split("?")[0], "page": info.get("descriptionurl", ""),
        "author": fi.strip_html(meta.get("Artist", {}).get("value", "")) or "Unknown",
        "licence": lic,
        "licence_url": fi.strip_html(meta.get("LicenseUrl", {}).get("value", ""))
        or "https://creativecommons.org/publicdomain/zero/1.0/",
        "source": "Wikimedia Commons", "w": w, "h": h, "score": score,
    }


def commons_info(titles, name, tags, note, score):
    out = []
    for i in range(0, len(titles), 40):
        params = {"action": "query", "format": "json", "titles": "|".join(titles[i:i + 40]),
                  "prop": "imageinfo", "iiprop": "url|extmetadata|size|mime", "iiurlwidth": str(fi.HERO_W)}
        data = fi.http_json(COMMONS + urllib.parse.urlencode(params), tries=4)
        for page in ((data or {}).get("query", {}).get("pages", {}) or {}).values():
            if "missing" in page:
                continue
            c = candidate_from_page(page, name, tags, note, score)
            if c:
                out.append(c)
    return out


def category_files(cat, name, tags, note, score, pages=1):
    out, cont = [], {}
    for _ in range(pages):
        params = {"action": "query", "format": "json", "generator": "categorymembers",
                  "gcmtitle": "Category:" + cat, "gcmtype": "file", "gcmlimit": "50",
                  "prop": "imageinfo", "iiprop": "url|extmetadata|size|mime",
                  "iiurlwidth": str(fi.HERO_W), **cont}
        data = fi.http_json(COMMONS + urllib.parse.urlencode(params), tries=4)
        if not data:
            break
        for page in (data.get("query", {}).get("pages", {}) or {}).values():
            c = candidate_from_page(page, name, tags, note, score)
            if c:
                out.append(c)
        cont = {k: v for k, v in (data.get("continue") or {}).items() if k == "gcmcontinue"}
        if not cont:
            break
    return out


def subcategories(cat, limit=6):
    params = {"action": "query", "format": "json", "list": "categorymembers",
              "cmtitle": "Category:" + cat, "cmtype": "subcat", "cmlimit": str(limit)}
    data = fi.http_json(COMMONS + urllib.parse.urlencode(params), tries=4)
    return [m["title"][len("Category:"):]
            for m in ((data or {}).get("query", {}).get("categorymembers", []) or [])]


def existing_categories(names):
    """Which of these Commons category names exist and hold anything, in one request."""
    names = list(dict.fromkeys(names))[:40]
    if not names:
        return []
    params = {"action": "query", "format": "json", "prop": "categoryinfo",
              "titles": "|".join("Category:" + n for n in names)}
    data = fi.http_json(COMMONS + urllib.parse.urlencode(params), tries=4)
    out = []
    for page in ((data or {}).get("query", {}).get("pages", {}) or {}).values():
        if "missing" in page:
            continue
        info = page.get("categoryinfo") or {}
        if info.get("files", 0) > 0 or info.get("subcats", 0) > 0:
            out.append((page["title"][len("Category:"):], info.get("files", 0), info.get("subcats", 0)))
    return out


def article_images(title, name, tags):
    """Every photograph in the English article that Commons holds, if the article is about food.
    One request names the article's images, its categories and its lead image."""
    params = {"action": "query", "format": "json", "redirects": "1", "titles": title,
              "prop": "images|categories|pageimages", "piprop": "name", "imlimit": "60", "cllimit": "60"}
    data = fi.http_json(WIKI + urllib.parse.urlencode(params), tries=4)
    for page in ((data or {}).get("query", {}).get("pages", {}) or {}).values():
        if "missing" in page:
            return [], None
        cats = " ".join(c.get("title", "") for c in page.get("categories", []) or [])
        if not FOODISH.search(cats) and not FOODISH.search(page.get("title", "")):
            return [], page.get("title")
        lead = page.get("pageimage") or ""
        files = []
        if lead and re.search(r"\.jpe?g$", lead, re.I) and not SKIP_FILE.search(lead):
            files.append("File:" + lead.replace("_", " "))
        for im in page.get("images", []) or []:
            t = im.get("title", "")
            if re.search(r"\.jpe?g$", t, re.I) and not SKIP_FILE.search(t) and t not in files:
                files.append(t)
        got = commons_info(files, name, tags, "in the " + page.get("title", "") + " article", 1.0)
        lead_title = re.sub(r"\.\w+$", "", lead.replace("_", " "))
        for c in got:
            if lead and c["title"] == lead_title:
                c["score"] = 1.2
                c["note"] = "lead image of the " + page.get("title", "") + " article"
        return got, page.get("title")
    return [], None


def singular_plural(q):
    low = q.lower()
    if low.endswith("ies"):
        return [q, q[:-3] + "y"]
    if low.endswith("s") and not low.endswith("ss"):
        return [q, q[:-1]]
    return [q, q + "s"]


def rank_key(c, query):
    words = fi.tokens(query)
    title = fi.fold(c["title"])
    overlap = sum(1 for w in words if w in title)
    s = c["score"]
    s += 1.0 if overlap >= max(1, len(words) // 2) else 0
    s += 0.3 if c["w"] >= 1000 else 0
    s += 0.3 if 1.15 <= c["w"] / max(1, c["h"]) <= 1.9 else 0
    s += 0.2 if not fi.NEEDS_CREDIT.match(c["licence"] or "") else 0
    return -s


def curated_candidates(rec, alts, refused, used, keep):
    slug, title, tags = rec["slug"], (rec.get("title") or "").strip(), rec.get("tags") or ()
    queries = []
    for q in [title] + list(alts.get(slug) or []):
        q = q.strip()
        if q and len(q.split()) <= 6 and q.lower() not in [x.lower() for x in queries]:
            queries.append(q)
    queries = queries[:2]
    pool, notes, names = {}, [], []
    for q in queries:
        got, art = article_images(q, q, tags)
        if art:
            notes.append(f'article "{art}" ({len(got)})')
        for c in got:
            pool.setdefault(c["page"], c)
        for base in fi.category_names(q):
            names.append(base)
            names.extend(singular_plural(base)[1:])
    for cat, nfiles, nsubs in existing_categories(names):
        notes.append(f"Category:{cat} ({nfiles} files, {nsubs} subcats)")
        files = category_files(cat, title or slug, tags, f"filed under Category:{cat}", 0.8,
                               pages=2 if nfiles > 50 else 1) if nfiles else []
        for c in files:
            pool.setdefault(c["page"], c)
        if nsubs and len(files) < 8:
            for sub in subcategories(cat):
                more = category_files(sub, title or slug, tags, f"filed under Category:{sub}", 0.6)
                if more:
                    notes.append(f"Category:{sub} ({len(more)})")
                for c in more:
                    pool.setdefault(c["page"], c)
    cands = [c for p, c in pool.items() if p and p not in refused and p not in used]
    cands.sort(key=lambda c: rank_key(c, title or slug))
    return cands[:keep], notes


def openverse_candidates(rec, refused, used, keep):
    """One request, twenty results of any shape, for the recipe's own title."""
    slug, title = rec["slug"], (rec.get("title") or rec["slug"]).strip()
    params = {"q": title, "license": "cc0,pdm,by,by-sa", "page_size": 20, "mature": "false"}
    url = "https://api.openverse.org/v1/images/?" + urllib.parse.urlencode(params)
    data = None
    for _ in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": fi.UA, "Accept": "application/json"})
            with urllib.request.urlopen(req, timeout=25) as r:
                data = json.loads(r.read().decode())
            break
        except urllib.error.HTTPError as e:
            if e.code != 429:
                fi.log(f"    ! HTTP {e.code}")
                break
            wait = fi.retry_after(e.headers) or 30
            fi.log(f"    · rate limited, waiting {wait:.0f}s")
            time.sleep(min(wait, 90))
        except Exception as e:                                  # a dropped tunnel, a timeout
            fi.log(f"    ! {type(e).__name__}: {e}")
            time.sleep(3)
    time.sleep(3.2)                                            # twenty requests a minute at most
    out = []
    for r in (data or {}).get("results", []):
        t = r.get("title") or ""
        if fi.BAD_TOKENS.search(t) or (r.get("source") or "").lower() in fi.EXCLUDED_SOURCES:
            continue
        lic, lic_url = fi.openverse_licence(r)
        if not lic or not fi.OK_LICENCE.match(lic):
            continue
        page = r.get("foreign_landing_url") or ""
        w, h = r.get("width") or 0, r.get("height") or 0
        if page in refused or page in used or w < 500 or h < 380:
            continue
        if fi.contradicts_diet(t, title, rec.get("tags") or ()) or not fi.shares_dish_word(t, title):
            continue
        score = (fi.relevance(t, title) + (0.3 if w >= 1000 else 0)
                 + (0.3 if 1.15 <= w / max(1, h) <= 1.9 else 0)
                 + (0.2 if lic.startswith(("CC0", "Public")) else 0))
        out.append({"title": t, "url": r.get("url", ""), "page": page,
                    "author": r.get("creator") or "Unknown", "licence": lic, "licence_url": lic_url,
                    "source": (r.get("source") or "Openverse").title(), "w": w, "h": h, "score": score,
                    "note": "Openverse, one page of 20 results"})
    out.sort(key=lambda c: -c["score"])
    return out[:keep], [f"{len(out)} usable of {len((data or {}).get('results', []))}"]


def cmd_search(args):
    only = {ln.strip() for ln in open(args.only) if ln.strip() and not ln.startswith("#")}
    out_path = os.path.join(args.work, f"candidates-{args.tag}.json")
    shard, shards = (int(x) for x in args.shard.split("/"))
    os.makedirs(args.work, exist_ok=True)
    rows = [r for r in catalogue() if r["slug"] in only]
    unknown = only - {r["slug"] for r in rows}
    if unknown:
        sys.exit("not in the catalogue: " + ", ".join(sorted(unknown)))
    alts = fi.alt_queries()
    refused = fi.rejected_pages()
    manifest = load(args.manifest, {})
    used = published_pages(manifest)
    result = load(out_path, {})
    spent = 0
    for idx, rec in enumerate(rows):
        if shards > 1 and idx % shards != shard:
            continue
        slug = rec["slug"]
        hero = (manifest.get(slug) or {}).get("hero")
        if slug in result or (hero and not is_drawing(hero)):
            continue
        if args.openverse and spent >= args.budget:
            fi.log(f"budget of {args.budget} requests spent; stopping")
            break
        fi.log(f"[{idx + 1:3d}/{len(rows)}] {slug}  <- {rec.get('title')}")
        fi._dead.clear()
        if args.openverse:
            cands, notes = openverse_candidates(rec, refused.get(slug, set()), used, args.keep)
            spent += 1
        else:
            cands, notes = curated_candidates(rec, alts, refused.get(slug, set()), used, args.keep)
        fi.log(f"    {len(cands)} candidates; " + "; ".join(notes[:6]))
        result[slug] = cands
        save(out_path, result)
    fi.log("DONE")


# ----------------------------------------------------------------------------- stage
def cmd_stage(args):
    p = paths(args.work)
    fi.IMG_DIR = p["files"]
    pending = load(p["pending"], {})
    state = load(p["state"], {"n": {}, "seen": [], "reviewed": []})
    seen = {tuple(x) for x in state["seen"]}
    manifest = load(args.manifest, {})
    refused_all = fi.rejected_pages()
    files = args.files or sorted(glob.glob(os.path.join(args.work, "candidates-*.json")))
    slugs = {}
    for f in files:
        for slug, cands in json.load(open(f)).items():
            slugs.setdefault(slug, []).extend(cands)
    for slug, cands in sorted(slugs.items()):
        hero = (manifest.get(slug) or {}).get("hero")
        if hero and not is_drawing(hero):
            continue
        refused = refused_all.get(slug, set())
        staged = 0
        for c in cands:
            if staged >= args.keep:
                break
            if c["page"] in refused or (slug, c["page"]) in seen:
                continue
            seen.add((slug, c["page"]))
            small = fi.thumb_of_original(c["url"])
            if small:
                raw = fi.http_bytes(c["url"], tries=1, patient=False) or fi.http_bytes(small) or fi.http_bytes(c["url"])
            else:
                raw = fi.http_bytes(c["url"])
            time.sleep(0.5)
            if not raw or len(raw) < 8000:
                fi.log(f"    {slug}: could not fetch {c['title'][:40]}")
                continue
            n = state["n"].get(slug, 0) + 1
            key = f"{slug}--{n}"
            meta = fi.process(raw, key, "", fi.HERO_W)
            if not meta:
                continue
            state["n"][slug] = n
            meta.update({k: c[k] for k in ("title", "author", "licence", "licence_url", "page", "source")})
            meta["author"] = fi.clean_author(meta.get("author"))
            meta["file"] = key
            pending[key] = {"hero": meta, "process": None, "slug": slug, "note": c.get("note", "")}
            staged += 1
            fi.log(f"    ok {key:36s} {c['licence']:11s} {c['title'][:50]}")
        state["seen"] = sorted(list(x) for x in seen)
        save(p["pending"], pending)
        save(p["state"], state)
    fi.log(f"DONE: {len(pending)} candidates waiting to be looked at")


# ----------------------------------------------------------------------------- sheets
def cmd_sheets(args):
    p = paths(args.work)
    pending = load(p["pending"], {})
    keys = sorted((k for k in pending if os.path.exists(os.path.join(p["files"], k + ".jpg"))),
                  key=lambda k: (k.rpartition("--")[0], int(k.rpartition("--")[2])))
    if not keys:
        print("nothing waiting")
        return
    os.makedirs(p["sheets"], exist_ok=True)
    for old in glob.glob(os.path.join(p["sheets"], "*.png")):
        os.remove(old)
    subprocess.check_call([sys.executable, os.path.join(HERE, "contact_sheet.py"),
                           "--manifest", p["pending"], "--img-dir", p["files"], "--slugs", ",".join(keys),
                           "--out", p["sheets"], "--cols", "4", "--rows", "3",
                           "--cell-w", "480", "--cell-h", "380"], stdout=subprocess.DEVNULL)
    desc = {r["slug"]: "" for r in catalogue()}
    try:
        rows = json.loads(subprocess.check_output(
            ["node", "-e", "const v=require('%s/src/data/volumes');const d=v.details({rewrites:false});"
             "process.stdout.write(JSON.stringify(v.catalog().map(r=>({slug:r.slug,d:(d[r.slug]||{}).d||''}))))" % ROOT]
        ).decode())
        desc = {r["slug"]: r["d"] for r in rows}
    except Exception:
        pass
    last = None
    for i, k in enumerate(keys, 1):
        e = pending[k]
        h = e["hero"]
        if e["slug"] != last:
            print(f"-- {e['slug']}: {desc.get(e['slug'], '')[:170]}")
            last = e["slug"]
        print(f"  {i:3d}. {k:34s} | {h.get('licence', '')[:11]:11s} | {h.get('title', '')[:60]} | {e.get('note', '')[:40]}")
    print(f"\n{len(keys)} candidates on sheets in {p['sheets']} (12 to a sheet, in the order printed)")


# ----------------------------------------------------------------------------- apply
def cmd_apply(args):
    """Validate every verdict first; only then touch a file. A bad line must not leave
    pictures half moved, so nothing is copied, deleted or written until all of it checks out."""
    p = paths(args.work)
    keep, reject = [], []
    for f in args.verdicts:
        txt = open(f).read()
        for m in re.finditer(r'^KEEP\d*="([^"]*)"', txt, re.M):
            keep += [s.strip() for s in m.group(1).split(",") if s.strip()]
        for m in re.finditer(r'^REJECT\d*="([^"]*)"', txt, re.M):
            reject += [c.strip() for c in m.group(1).split(";") if c.strip()]
    pending = load(p["pending"], {})
    state = load(p["state"], {"n": {}, "seen": [], "reviewed": []})
    manifest = load(args.manifest, {})
    rejects = load(args.rejects, {})

    # ---- 1. check everything; no side effects yet
    refusals, problems, missing = [], [], []
    for clause in reject:
        key, eq, why = clause.partition("=")
        key, why = key.strip(), why.strip()
        if not eq:
            problems.append(f"a REJECT needs key=reason, and the reason cannot contain a semicolon: {clause!r}")
            continue
        if key not in pending:
            missing.append(key)
            continue
        refusals.append((key, why or "not the dish"))
    refused_keys = {k for k, _ in refusals}
    for key in keep:
        e = pending.get(key)
        if not e:
            missing.append(key)
            continue
        if key in refused_keys:
            problems.append(f"{key} is in both the KEEP and the REJECT list")
        cur = (manifest.get(e["slug"]) or {}).get("hero")
        if cur and not is_drawing(cur):
            problems.append(f"{e['slug']}: a photograph is already published, refusing to replace it")
        for ext in ("jpg", "webp"):
            if not os.path.exists(os.path.join(p["files"], f"{key}.{ext}")):
                problems.append(f"{key}: the candidate's {ext} file is missing")
    slugs_kept = [pending[k]["slug"] for k in keep if k in pending]
    if len(slugs_kept) != len(set(slugs_kept)):
        problems.append("two KEEPs for the same recipe: " + ", ".join(
            sorted({s for s in slugs_kept if slugs_kept.count(s) > 1})))
    if problems:
        sys.exit("nothing was changed.\n  " + "\n  ".join(problems))

    # ---- 2. refusals first, so a page named in both lists is remembered as refused
    published, refused = [], []

    def drop_files(key):
        for ext in ("jpg", "webp"):
            f = os.path.join(p["files"], f"{key}.{ext}")
            if os.path.exists(f) and not args.dry_run:
                os.remove(f)

    for key, why in refusals:
        e = pending.pop(key)
        if e["hero"].get("page"):
            rejects.setdefault(e["slug"], []).append({"page": e["hero"]["page"], "why": why})
        drop_files(key)
        state["reviewed"].append(key)
        refused.append(key)
    for key in keep:
        e = pending.get(key)
        if not e:
            continue
        slug = e["slug"]
        if not args.dry_run:
            for ext in ("jpg", "webp"):
                with open(os.path.join(p["files"], f"{key}.{ext}"), "rb") as src, \
                        open(os.path.join(args.img_dir, f"{slug}.{ext}"), "wb") as dst:
                    dst.write(src.read())
        hero = dict(e["hero"])
        hero["file"] = slug
        manifest[slug] = {"hero": hero, "process": (manifest.get(slug) or {}).get("process")}
        for other in [k for k, v in pending.items() if v["slug"] == slug and k != key]:
            pending.pop(other)
            drop_files(other)
            state["reviewed"].append(other)
        pending.pop(key)
        drop_files(key)
        state["reviewed"].append(key)
        published.append(key)
    if not args.dry_run:
        json.dump(manifest, open(args.manifest, "w"), indent=1)
        json.dump(rejects, open(args.rejects, "w"), indent=2)
        save(p["pending"], pending)
        save(p["state"], state)
    prefix = "would have " if args.dry_run else ""
    print(f"{prefix}published {len(published)}, refused {len(refused)}, still waiting {len(pending)}")
    if missing:
        print("not waiting:", ", ".join(sorted(set(missing))))


# ----------------------------------------------------------------------------- main
def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--work", default=WORK, help="where candidates and state are kept (default .wide/)")
    ap.add_argument("--manifest", default=os.path.join(ROOT, "src", "data", "images.json"))
    ap.add_argument("--rejects", default=os.path.join(ROOT, "src", "data", "image-rejects.json"))
    ap.add_argument("--img-dir", default=os.path.join(ROOT, "src", "assets", "img", "recipes"))
    sub = ap.add_subparsers(dest="cmd", required=True)

    s = sub.add_parser("search", help="find candidates for the slugs in a text file")
    s.add_argument("--only", required=True, help="a text file with one slug per line")
    s.add_argument("--tag", default="curated", help="names the candidates file: candidates-<tag>.json")
    s.add_argument("--shard", default="0/1", help="k/n: this worker takes every nth recipe")
    s.add_argument("--keep", type=int, default=6, help="candidates kept per recipe")
    s.add_argument("--openverse", action="store_true", help="one deeper Openverse page instead of the curated sources")
    s.add_argument("--budget", type=int, default=150, help="Openverse requests to spend (200 a day anonymously)")
    s.set_defaults(fn=cmd_search)

    s = sub.add_parser("stage", help="download and resize the candidates found")
    s.add_argument("files", nargs="*", help="candidate files (default: every .wide/candidates-*.json)")
    s.add_argument("--keep", type=int, default=4, help="candidates staged per recipe")
    s.set_defaults(fn=cmd_stage)

    s = sub.add_parser("sheets", help="contact sheets of every candidate waiting")
    s.set_defaults(fn=cmd_sheets)

    s = sub.add_parser("apply", help="publish what was kept and remember what was refused")
    s.add_argument("verdicts", nargs="+")
    s.add_argument("--dry-run", action="store_true")
    s.set_defaults(fn=cmd_apply)

    args = ap.parse_args()
    args.work = os.path.abspath(args.work)
    os.makedirs(args.work, exist_ok=True)
    fi.IMG_DIR = os.path.join(args.work, "files")
    args.fn(args)


if __name__ == "__main__":
    main()
