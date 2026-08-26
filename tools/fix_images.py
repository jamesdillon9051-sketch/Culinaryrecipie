#!/usr/bin/env python3
"""Targeted third pass: replace known-bad matches and fill remaining gaps.
Each entry names the search terms AND a required substring that must appear in
the candidate's title, so a coincidental word match cannot slip through."""
import json, os, subprocess, sys, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fetch_images as F

# slug -> (queries, required substrings — at least one must appear in the title)
TARGETS = {
    'dal-tadka':          (['Dal fry', 'Toor dal', 'Indian lentil curry'], ['dal', 'lentil']),
    'menemen':            (['Menemen food', 'Turkish breakfast eggs', 'Shakshuka eggs tomato'], ['menemen', 'egg']),
    'bbq-baby-back-ribs': (['Barbecue ribs', 'Pork ribs food', 'Spare ribs barbecue'], ['rib']),
    'chocolate-souffle':  (['Chocolate fondant', 'Chocolate lava cake', 'Chocolate dessert ramekin'], ['chocolat', 'fondant']),
    'avgolemono-soup':    (['Greek chicken soup', 'Lemon rice soup', 'Chicken rice soup'], ['soup', 'soupa']),
    'cuban-sandwich':     (['Cubano sandwich', 'Ham and cheese sandwich', 'Pressed sandwich'], ['sandwich', 'cubano']),
}
BAD = {'dal-tadka', 'menemen', 'bbq-baby-back-ribs', 'chocolate-souffle'}

manifest = json.load(open(F.MANIFEST))
catalog = json.loads(subprocess.check_output(
    ["node", "-e", "process.stdout.write(JSON.stringify(require('%s')))" %
     os.path.join(F.ROOT, "src", "data", "catalog.js")]).decode())
order = [r['slug'] for r in catalog]

for slug in BAD:                       # discard the bad matches and their files
    for suffix in ('', '-process'):
        for ext in ('.webp', '.jpg'):
            p = os.path.join(F.IMG_DIR, slug + suffix + ext)
            if os.path.exists(p):
                os.remove(p)
    manifest[slug] = {"hero": None, "process": None}

for slug, (queries, required) in TARGETS.items():
    if manifest.get(slug, {}).get('hero'):
        continue
    pool = []
    for q in queries:
        for cand in F.gather(q):
            if any(r in cand['title'].lower() for r in required):
                pool.append(cand)
        if len(pool) >= 3:
            break
    if not pool:
        F.log(f"{slug}: no valid match — gradient placeholder")
        continue
    entry = {"hero": None, "process": None}
    slots = [("", F.HERO_W)] + ([("-process", F.PROCESS_W)] if order.index(slug) % 2 == 0 else [])
    for suffix, width in slots:
        for cand in list(pool):
            pool.remove(cand)
            raw = F.http_bytes(cand["url"])
            time.sleep(0.3)
            if not raw or len(raw) < 8000:
                continue
            meta = F.process(raw, slug, suffix, width)
            if not meta:
                continue
            meta.update({k: cand[k] for k in
                         ("title", "author", "licence", "licence_url", "page", "source")})
            meta["file"] = slug + suffix
            entry["hero" if suffix == "" else "process"] = meta
            F.log(f"{slug}{suffix}: {cand['licence']} — {cand['title'][:55]}")
            break
    manifest[slug] = entry
    json.dump(manifest, open(F.MANIFEST, "w"), indent=1)

json.dump(manifest, open(F.MANIFEST, "w"), indent=1)
have = sum(1 for v in manifest.values() if v.get("hero"))
F.log(f"FIX DONE — heroes {have}/200")
