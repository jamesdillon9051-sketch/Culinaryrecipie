#!/usr/bin/env python3
"""Offline regressions for public photo leads: paid widgets and false zeroes."""
import importlib.util
import json
from pathlib import Path

spec = importlib.util.spec_from_file_location('online', Path(__file__).with_name('source-online-photos.py'))
S = importlib.util.module_from_spec(spec)
spec.loader.exec_module(S)

assert S.photo_key('https://www.pexels.com/photo/old-title-123/') == S.photo_key('https://pexels.com/photo/new-title-123')
assert S.photo_key('https://pixabay.com/photos/a-456/') == S.photo_key('https://pixabay.com/photos/b-456')
assert S.photo_key('https://stocksnap.io/photo/cake-ABCDEF1234') != S.photo_key('https://stocksnap.io/photo/cake-ABCDEF1235')
assert S.photo_key('https://kaboompics.com/photo/123/cookies') == S.photo_key('https://kaboompics.com/photo/123/new-caption/')
assert S.photo_key('https://www.stockvault.net/photo/123/cookies') == S.photo_key('https://stockvault.net/photo/123/new-caption/')

def ld(row):
    return '<script type="application/ld+json">' + json.dumps(row) + '</script>'

free = {'@type': 'ImageObject', 'name': 'Pancakes', 'contentUrl': 'https://cdn.pixabay.com/photo/example.jpg',
        'acquireLicensePage': 'https://pixabay.com/photos/pancakes-123/'}
paid = {**free, 'contentUrl': 'https://media.istockphoto.com/paid.jpg'}
assert len(S.parse_search('pixabay', ld([free, paid]))) == 1
assert S.parse_search('pixabay', '<main>No photos found</main>') == []
try:
    S.parse_search('pixabay', '<main class="media_list"></main>')
    raise AssertionError('A loading shell must not be counted as zero photos')
except ValueError:
    pass

recipe = {'title': 'Pancakes', 'tags': [], 'aliases': []}
lead = {**S.parse_search('pixabay', ld(free))[0], 'description': '', 'tags': []}
assert S.select_leads([{**lead, 'title': 'AI-generated pancakes'}], recipe, set()) == []
assert S.select_leads([{**lead, 'description': '3d render of pancakes'}], recipe, set()) == []
assert S.select_leads([lead], recipe, {S.photo_key(lead['page'])}) == []
assert len(S.select_leads([lead], recipe, set())) == 1
assert S.F.OK_LICENCE.match('Kaboompics Standard License')
for licence in ['Kaboompics Editorial Use Only License', 'Kaboompics License', 'Unreviewed Stock License',
                'Kaboompics Standard License NonCommercial', 'CC BY-SA-NC', 'CC BY-ND']:
    assert not S.F.OK_LICENCE.match(licence), licence
print('Public-source and licence-gate regressions passed (offline; not visual approval)')
