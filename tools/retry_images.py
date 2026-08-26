#!/usr/bin/env python3
"""Second pass: re-attempt the recipes the main run could not source, using
alternative search terms. Same strict CC0/public-domain licence rule applies."""
import json, os, sys, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fetch_images as F

ALT = {
    'lasagna-bolognese':   ['Lasagne', 'Lasagna'],
    'fettuccine-alfredo':  ['Fettuccine', 'Tagliatelle pasta'],
    'risotto-alla-milanese': ['Risotto', 'Saffron risotto'],
    'osso-buco':           ['Ossobuco', 'Veal shank'],
    'arancini':            ['Arancino', 'Arancini'],
    'focaccia':            ['Focaccia', 'Focaccia genovese'],
    'chocolate-souffle':   ['Souffle', 'Chocolate dessert ramekin'],
    'dal-tadka':           ['Dal', 'Lentil curry'],
    'mapo-tofu':           ['Mapo doufu', 'Tofu sichuan'],
    'bbq-baby-back-ribs':  ['Spare ribs', 'Pork ribs'],
    'avgolemono-soup':     ['Avgolemono', 'Greek lemon soup'],
    'pad-kra-pao':         ['Pad kaphrao', 'Thai basil pork rice'],
    'cuban-sandwich':      ['Cubano sandwich', 'Sandwich cubano'],
    'menemen':             ['Menemen', 'Turkish scrambled eggs'],
}

manifest = json.load(open(F.MANIFEST))
catalog = {r['slug']: r for r in json.loads(__import__('subprocess').check_output(
    ["node", "-e", "process.stdout.write(JSON.stringify(require('%s')))" %
     os.path.join(F.ROOT, "src", "data", "catalog.js")]).decode())}
order = list(catalog)

for slug, queries in ALT.items():
    if manifest.get(slug, {}).get('hero'):
        continue
    want_process = order.index(slug) % 2 == 0
    pool = []
    for q in queries:
        pool += F.gather(q)
        if len(pool) >= 3:
            break
    if not pool:
        F.log(f"{slug}: still nothing — gradient placeholder")
        continue
    entry = manifest.get(slug) or {"hero": None, "process": None}
    slots = [("", F.HERO_W)] + ([("-process", F.PROCESS_W)] if want_process else [])
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
            F.log(f"{slug}{suffix}: {cand['licence']} — {cand['title'][:50]}")
            break
    manifest[slug] = entry
    json.dump(manifest, open(F.MANIFEST, "w"), indent=1)

have = sum(1 for v in manifest.values() if v.get("hero"))
F.log(f"RETRY DONE — heroes {have}/200")
