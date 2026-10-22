#!/usr/bin/env python3
"""Adopt reviewed, licence-verified staged photographs into src/data/images.json.

Reference copy of the snippet used for the Flickr and Commons rounds (21 Oct 2026).
Not a reviewed repository tool. It only adopts keys that a person has looked at and
listed in a text file; it never approves anything itself.

  python3 adopt_reviewed_photos.py STAGED.json ACCEPTED_KEYS.txt "Flickr"|"Wikimedia Commons"

Run from the repository root. Then: npm run build; node tools/make-attribution.js;
npm run missing; npm run readme; npm run build (second build must change nothing);
npm run check; node tools/ads-unchanged.js --against <ref>.
"""
import json, sys
sys.path.insert(0, 'tools')
import fetch_images as F

staged = json.load(open(sys.argv[1]))
keys = sorted(set(open(sys.argv[2]).read().split()))
source = sys.argv[3]
man = json.load(open(F.MANIFEST))
used = {(v.get('hero') or {}).get('page', '').rstrip('/') for v in man.values()}
adopted = 0
for k in keys:
    c = staged[k]
    slug = k.split('--')[0]
    # never replace an existing hero, and never use one archive page for two recipes
    if (man.get(slug) or {}).get('hero') or c['page'].rstrip('/') in used:
        print('skipped', k)
        continue
    meta = F.process(open(c['path'], 'rb').read(), slug, '', F.HERO_W)
    if meta is None:  # the image gate refused it (for example monochrome); do not bypass
        print('refused by image gate', k)
        continue
    meta.update({'title': c['title'] or c['recipe_title'], 'author': c['author'],
                 'licence': c['licence'], 'licence_url': c['licence_url'],
                 'page': c['page'].rstrip('/'), 'source': source, 'file': slug})
    man[slug] = {'hero': meta, 'process': None}
    used.add(c['page'].rstrip('/'))
    adopted += 1
json.dump(man, open(F.MANIFEST, 'w'), indent=1)
print('adopted', adopted)
