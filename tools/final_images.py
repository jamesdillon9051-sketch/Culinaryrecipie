#!/usr/bin/env python3
"""Final image QA: promote good secondary shots where the hero was wrong, and
re-search the last few with stricter validation."""
import json, os, shutil, sys, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fetch_images as F

m = json.load(open(F.MANIFEST))

def promote(slug):
    """Use the (correct) process shot as the hero and drop the bad hero."""
    e = m[slug]
    if not e.get('process'):
        return False
    for ext in ('.webp', '.jpg'):
        src = os.path.join(F.IMG_DIR, slug + '-process' + ext)
        dst = os.path.join(F.IMG_DIR, slug + ext)
        if os.path.exists(src):
            shutil.move(src, dst)
    e['hero'] = dict(e['process'], file=slug)
    e['process'] = None
    F.log(f"{slug}: promoted secondary shot to hero — {e['hero']['title'][:50]}")
    return True

promote('menemen')            # hero was a WWI soldier's portrait; process shot was correct
promote('chocolate-souffle')  # hero was a vintage chocolate advert; process shot was correct

RESEARCH = {
    'avgolemono-soup': (['Avgolemono', 'Greek egg lemon soup', 'Chicken and rice soup bowl'],
                        lambda t: ('avgolemono' in t) or ('soup' in t and 'fish' not in t and 'platter' not in t)),
    'dal-tadka':       (['Dal makhani', 'Dal curry bowl', 'Indian dal food'],
                        lambda t: 'dal' in t and 'supermarkt' not in t and 'supermarket' not in t),
}

for slug, (queries, ok) in RESEARCH.items():
    cur = m.get(slug, {}).get('hero')
    if cur and ok(cur['title'].lower()):
        continue
    found = None
    for q in queries:
        for cand in F.gather(q):
            if ok(cand['title'].lower()):
                raw = F.http_bytes(cand['url'])
                time.sleep(1.5)
                if not raw or len(raw) < 8000:
                    continue
                meta = F.process(raw, slug, '', F.HERO_W)
                if meta:
                    meta.update({k: cand[k] for k in
                                 ("title", "author", "licence", "licence_url", "page", "source")})
                    meta['file'] = slug
                    found = meta
                    break
        if found:
            break
        time.sleep(1.5)
    if found:
        m[slug]['hero'] = found
        F.log(f"{slug}: replaced — {found['licence']} — {found['title'][:50]}")
    else:
        for ext in ('.webp', '.jpg'):
            p = os.path.join(F.IMG_DIR, slug + ext)
            if os.path.exists(p):
                os.remove(p)
        m[slug] = {"hero": None, "process": m.get(slug, {}).get('process')}
        F.log(f"{slug}: no acceptable match — using gradient placeholder")

json.dump(m, open(F.MANIFEST, 'w'), indent=1)
F.log("heroes %d/200, process %d" % (sum(1 for v in m.values() if v.get('hero')),
                                     sum(1 for v in m.values() if v.get('process'))))
