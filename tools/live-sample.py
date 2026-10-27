#!/usr/bin/env python3
"""Read-only sample of the live site against the local build. One request at a time.

    python3 tools/live-sample.py                      # 6 of each page type, 1.2 s apart
    python3 tools/live-sample.py --per-type 3 --gap 2 --paths /,/collections/
    python3 tools/live-sample.py --json out.json

For each sampled URL it records the status code, redirects, the canonical, the
robots meta and X-Robots-Tag, how many Recipe entities the page declares (in
JSON-LD and in microdata), whether the declared Recipe has the properties
Google lists as required or recommended, and whether the live HTML is byte-for-
byte the file the local build wrote. It also checks the host-level redirects
(http, www, no trailing slash, index.html) and that a missing page answers 404.

It never submits a form, sends no cookies, waits between requests, backs off on
429/5xx and stops after repeated transport failures. A match against the local
build only means the live file is the committed one; it says nothing about
whether Google has crawled or indexed the page.
"""
import argparse
import hashlib
import json
import random
import re
import sys
import time
import urllib.error
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = 'https://weeklydelight.com'
NS = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
UA = 'WeeklyDelight-live-sample/1.0 (+https://weeklydelight.com/about/)'
RECIPE_REQUIRED = ['name', 'image']
RECIPE_RECOMMENDED = ['author', 'datePublished', 'description', 'prepTime', 'cookTime', 'recipeYield',
                      'recipeCategory', 'recipeCuisine', 'recipeIngredient', 'recipeInstructions', 'keywords']


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        return None


OPENER = urllib.request.build_opener(NoRedirect)


def get(url, gap, method='GET'):
    """One request, no redirects followed. Returns (status, headers, body)."""
    for attempt in range(4):
        time.sleep(gap * (2 ** attempt if attempt else 1))
        req = urllib.request.Request(url, method=method, headers={'User-Agent': UA, 'Accept-Encoding': 'identity'})
        try:
            with OPENER.open(req, timeout=30) as res:
                return res.status, dict(res.headers), res.read() if method == 'GET' else b''
        except urllib.error.HTTPError as err:
            if err.code in (429, 500, 502, 503, 504) and attempt < 3:
                continue
            return err.code, dict(err.headers or {}), err.read() if method == 'GET' else b''
        except Exception as err:  # transport failure: retry, then report unverified
            if attempt == 3:
                return None, {'error': str(err)}, b''
    return None, {}, b''


def local_file(path):
    rel = path.lstrip('/')
    f = ROOT / (rel + 'index.html' if rel.endswith('/') or not rel else rel)
    return f if f.exists() else None


def schema_report(html):
    blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S)
    recipes, parse_errors = [], 0
    for block in blocks:
        try:
            data = json.loads(block)
        except ValueError:
            parse_errors += 1
            continue
        for node in data if isinstance(data, list) else data.get('@graph', [data]) if isinstance(data, dict) else []:
            if isinstance(node, dict) and node.get('@type') == 'Recipe':
                recipes.append(node)
    microdata = len(re.findall(r'itemtype="https?://schema\.org/Recipe"', html))
    missing_required = sorted({k for r in recipes for k in RECIPE_REQUIRED if not r.get(k)})
    missing_recommended = sorted({k for r in recipes for k in RECIPE_RECOMMENDED if not r.get(k)})
    return {'jsonld_blocks': len(blocks), 'jsonld_parse_errors': parse_errors, 'recipe_jsonld': len(recipes),
            'recipe_microdata': microdata, 'recipe_missing_required': missing_required,
            'recipe_missing_recommended': missing_recommended}


def sample_paths(per_type, seed):
    """Sitemap URLs grouped by page type, read from the local build (the same files the host serves)."""
    random.seed(seed)
    groups = {}
    for f in sorted(ROOT.glob('sitemap-[0-9]*.xml')):
        for loc in ET.parse(f).getroot().findall('s:url/s:loc', NS):
            path = loc.text.replace(ORIGIN, '')
            kind = path.strip('/').split('/')[0] or 'home'
            groups.setdefault(kind, []).append(path)
    picked = []
    for kind, paths in sorted(groups.items()):
        picked += random.sample(paths, min(per_type, len(paths)))
    return picked


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--per-type', type=int, default=6)
    ap.add_argument('--gap', type=float, default=1.2, help='seconds between requests (minimum 1)')
    ap.add_argument('--seed', type=int, default=20261027)
    ap.add_argument('--paths', help='comma-separated extra paths to include')
    ap.add_argument('--json', help='write the full report here')
    args = ap.parse_args()
    gap = max(1.0, args.gap)

    report = {'host': [], 'pages': []}
    host_cases = [
        ('http://weeklydelight.com/', 'https://weeklydelight.com/'),
        ('https://www.weeklydelight.com/', 'https://weeklydelight.com/'),
        ('https://weeklydelight.com/recipes', 'https://weeklydelight.com/recipes/'),
        ('https://weeklydelight.com/about/index.html', 'https://weeklydelight.com/about/'),
    ]
    for url, want in host_cases:
        status, headers, _ = get(url, gap, 'HEAD')
        loc = headers.get('Location') or headers.get('location')
        ok = status == 301 and loc in (want, want.replace('https://weeklydelight.com', 'https://www.weeklydelight.com'))
        report['host'].append({'url': url, 'status': status, 'location': loc, 'ok': ok})
    status, _, _ = get(ORIGIN + '/no-such-page-' + str(args.seed) + '/', gap)
    report['host'].append({'url': '/no-such-page/', 'status': status, 'ok': status == 404})
    status, _, body = get(ORIGIN + '/robots.txt', gap)
    report['host'].append({'url': '/robots.txt', 'status': status,
                           'ok': status == 200 and b'Sitemap: https://weeklydelight.com/sitemap-index.xml' in body})
    status, _, body = get(ORIGIN + '/sitemap-index.xml', gap)
    local = (ROOT / 'sitemap-index.xml').read_bytes()
    report['host'].append({'url': '/sitemap-index.xml', 'status': status, 'ok': status == 200,
                           'matches_build': body == local})

    paths = sample_paths(args.per_type, args.seed)
    if args.paths:
        paths = [p.strip() for p in args.paths.split(',') if p.strip()] + paths
    for path in paths:
        status, headers, body = get(ORIGIN + path, gap)
        html = body.decode('utf-8', 'replace')
        lf = local_file(path)
        row = {
            'path': path, 'status': status,
            'location': headers.get('Location') or headers.get('location'),
            'x_robots_tag': headers.get('X-Robots-Tag') or headers.get('x-robots-tag'),
            'cache': headers.get('x-hcdn-cache-status'),
            'canonical': (re.search(r'<link rel="canonical" href="([^"]+)"', html) or [None, None])[1],
            'robots_meta': (re.search(r'<meta name="robots" content="([^"]+)"', html) or [None, None])[1],
            'matches_build': bool(lf) and hashlib.sha256(body).hexdigest() == hashlib.sha256(lf.read_bytes()).hexdigest(),
            'in_local_build': bool(lf),
        }
        row['canonical_ok'] = row['canonical'] == ORIGIN + path
        row.update(schema_report(html))
        report['pages'].append(row)
        flag = 'ok' if status == 200 and row['canonical_ok'] and row['recipe_jsonld'] <= 1 and not row['recipe_microdata'] else 'CHECK'
        print(f"{status} {flag:5} build={'same' if row['matches_build'] else 'DIFF'} recipeLD={row['recipe_jsonld']} "
              f"robots={row['robots_meta'] or '-'} {path}", flush=True)

    bad_host = [h for h in report['host'] if not h['ok']]
    for h in report['host']:
        print(f"host {'ok ' if h['ok'] else 'BAD'} {h['status']} {h['url']} -> {h.get('location') or ''}")
    pages = report['pages']
    summary = {
        'sampled': len(pages),
        'status_200': sum(p['status'] == 200 for p in pages),
        'unverified': sum(p['status'] is None for p in pages),
        'canonical_ok': sum(p['canonical_ok'] for p in pages),
        'matches_build': sum(p['matches_build'] for p in pages),
        'recipe_pages_with_one_jsonld': sum(p['recipe_jsonld'] == 1 for p in pages if p['path'].startswith('/recipes/') and p['path'] != '/recipes/'),
        'recipe_microdata_pages': sum(bool(p['recipe_microdata']) for p in pages),
        'pages_missing_required_recipe_props': sum(bool(p['recipe_missing_required']) for p in pages),
        'noindex_pages': [p['path'] for p in pages if p['robots_meta'] and 'noindex' in p['robots_meta']],
        'host_checks_failed': len(bad_host),
    }
    report['summary'] = summary
    print(json.dumps(summary, indent=2))
    if args.json:
        Path(args.json).write_text(json.dumps(report, indent=2))
    return 0 if not bad_host and summary['status_200'] == len(pages) else 1


if __name__ == '__main__':
    sys.exit(main())
