#!/usr/bin/env python3
"""Search several public photo libraries; record leads without publishing images.

No API key or login. Every lead still needs an individual source/licence check,
real-photography provenance, full-size dish/diet/crop review and duplicate check.
The existing publisher and processing guards are unchanged.

python tools/source-online-photos.py --work /tmp/online-photo-review [--limit 25]
"""
import argparse
import concurrent.futures
import datetime
import hashlib
from html import unescape
from html.parser import HTMLParser
import importlib.util
import json
from pathlib import Path
import re
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
import fetch_images as F

ROOT = Path(__file__).resolve().parents[1]
UA = 'WeeklyDelightPhotoReview/2.0 (https://weeklydelight.com/contact/; licensed photography review)'
PROVIDERS = ('pexels', 'pixabay', 'stocksnap', 'pxhere')
REAL_ONLY = re.compile(r'\b(?:ai[- ]?generated|generative|midjourney|stable diffusion|dall[- ]?e|'
                       r'3d[- ]?render|rendering|computer[- ]generated|cgi|digital art|illustration)\b', re.I)


def photo_key(page):
    """A changed title or trailing slash must not disguise a reused photo ID."""
    url = urllib.parse.urlsplit(page)
    host = (url.hostname or '').removeprefix('www.').lower()
    patterns = {'pexels.com': r'-(\d+)/?$', 'pixabay.com': r'-(\d+)/?$',
                'pxhere.com': r'/photo/(\d+)/?$', 'stocksnap.io': r'-([A-Z0-9]{10})/?$',
                'kaboompics.com': r'/photo/(\d+)(?:/[^/]+)?/?$',
                'stockvault.net': r'/photo/(\d+)(?:/[^/]+)?/?$',
                'rawpixel.com': r'/image/(\d+)(?:/[^/]+)?/?$'}
    match = re.search(patterns.get(host, r'(?!)'), url.path)
    return host + ':' + match[1] if match else host + urllib.parse.unquote(url.path).rstrip('/')


class Anchors(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.items = []
        self.current = None

    def handle_starttag(self, tag, attributes):
        a = dict(attributes)
        if tag == 'a':
            self.current = {'attributes': a, 'images': [], 'text': ''}
        elif tag == 'img' and self.current is not None:
            self.current['images'].append(a)

    def handle_data(self, data):
        if self.current is not None:
            self.current['text'] += data

    def handle_endtag(self, tag):
        if tag == 'a' and self.current is not None:
            self.items.append(self.current)
            self.current = None


def structured(html):
    out = []
    for raw in re.findall(r'<script\b[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', html, re.S):
        try:
            data = json.loads(raw)
        except ValueError:
            continue
        out.extend(data if isinstance(data, list) else data.get('@graph', [data]))
    return out


def parse_search(provider, html):
    """Extract photo records only, excluding sponsored/premium search widgets."""
    if provider == 'pexels':
        match = re.search(r'<script\b[^>]*id="__NEXT_DATA__"[^>]*>(.*?)</script>', html, re.S)
        if not match:
            raise ValueError('Missing public photo data; search unverified')
        props = json.loads(match[1])['props']['pageProps']
        records = props.get('initialData', {}).get('data')
        if not isinstance(records, list):
            raise ValueError('Missing photo list; search unverified')
        out = []
        for r in records:
            a = r.get('attributes', {})
            if r.get('type') != 'photo' or a.get('status') != 'approved' or not a.get('published'):
                continue
            user = a.get('user') or {}
            author = ' '.join(str(user.get(k) or '') for k in ['first_name', 'last_name']).strip()
            photo_id = str(a.get('id', ''))
            if not re.fullmatch(r'\d+', photo_id):
                continue
            page = f'https://www.pexels.com/photo/{a["slug"]}-{photo_id}/'
            image = (a.get('image') or {}).get('large', '')
            if urllib.parse.urlsplit(image).hostname != 'images.pexels.com':
                continue
            out.append({'page': page, 'title': a.get('title') or a.get('description') or '',
                'description': a.get('description') or '', 'tags': [t['name'] for t in a.get('tags', []) if t.get('name')],
                'author': author or user.get('username') or 'Unknown', 'url': image,
                'original_width': a.get('width'), 'original_height': a.get('height'),
                'source': 'Pexels', 'licence': 'Pexels License', 'licence_url': 'https://www.pexels.com/license/',
                'published_at': a.get('publish_at'), 'source_photo_id': photo_id})
        return out
    if provider == 'pixabay':
        # These individual ImageObjects describe free Pixabay assets, not the
        # Getty/iStock sponsored ads elsewhere in the search document.
        rows = []
        for item in structured(html):
            if item.get('@type') != 'ImageObject':
                continue
            page = urllib.parse.urljoin('https://pixabay.com', item.get('acquireLicensePage', ''))
            image = item.get('contentUrl', '')
            if not re.fullmatch(r'https://pixabay\.com/photos/[^/]+-\d+/', page):
                continue
            if urllib.parse.urlsplit(image).hostname != 'cdn.pixabay.com':
                continue
            rows.append({'page': page, 'title': item.get('name', ''), 'description': item.get('description', ''),
                'tags': [], 'author': 'Unknown', 'url': image, 'source': 'Pixabay',
                'licence': 'Pixabay Content License', 'licence_url': 'https://pixabay.com/service/license-summary/'})
        if not rows and not re.search(r'no (?:photos|results|images)(?: found)?|0 (?:photos|images)', html, re.I):
            raise ValueError('No recognised photo records or explicit no-result notice; search unverified')
        return rows
    parser = Anchors()
    parser.feed(html)
    rows = []
    for item in parser.items:
        a = item['attributes']
        href = a.get('href', '')
        if not item['images']:
            continue
        im = item['images'][0]
        if provider == 'stocksnap':
            if 'photo-grid-preview' not in a.get('class', '') or not re.fullmatch(r'/photo/[^/]+-[A-Z0-9]{10}', href):
                continue
            page = 'https://stocksnap.io' + href
            source = 'StockSnap'
        elif provider == 'pxhere':
            if 'current-item-photo' not in a.get('class', '') or not re.fullmatch(r'/en/photo/\d+', href):
                continue
            page = 'https://pxhere.com' + href
            source = 'PxHere'
        else:
            raise ValueError('Unknown provider')
        image = im.get('data-src') or im.get('src') or ''
        filename = urllib.parse.unquote(urllib.parse.urlsplit(image).path.rsplit('/', 1)[-1])
        caption = ' '.join([im.get('alt', ''), im.get('title', ''), filename.replace('_', ' ').replace('-', ' ')])
        rows.append({'page': page, 'title': im.get('alt', ''), 'description': caption,
            'tags': [], 'author': 'Unknown', 'url': image, 'source': source,
            'licence': 'CC0 1.0', 'licence_url': 'https://creativecommons.org/publicdomain/zero/1.0/'})
    if not rows and not re.search(r'no (?:photos|results|images)|0 (?:photos|images)|No Results', html, re.I):
        raise ValueError('No recognised photos or explicit no-result notice; search unverified')
    return rows


def select_leads(rows, recipe, used):
    out = []
    seen = set()
    for r in rows:
        key = photo_key(r['page'])
        if key in used or key in seen:
            continue
        seen.add(key)
        caption = ' '.join([r['title'], r['description'], ' '.join(r.get('tags', []))])
        if REAL_ONLY.search(caption) or F.BAD_TOKENS.search(r['title']):
            continue
        if F.contradicts_diet(caption, recipe['title'], recipe['tags']):
            continue
        score = max(F.relevance(caption, q) for q in [recipe['title']] + (recipe.get('aliases') or []) if q)
        if score < .6:
            continue
        out.append({**r, 'score': score, 'metadata_status': 'Candidate only; individual licence/provenance and visual review required'})
    return sorted(out, key=lambda r: -r['score'])[:5]


def query_url(provider, query):
    q = urllib.parse.quote(query, safe='')
    return {'pexels': f'https://www.pexels.com/search/{q}/',
            'pixabay': f'https://pixabay.com/photos/search/{q}/',
            'stocksnap': f'https://stocksnap.io/search/{q}',
            'pxhere': 'https://pxhere.com/en/photos?' + urllib.parse.urlencode({'q': query})}[provider]


def fetch(url):
    errors = []
    for attempt in range(2):
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA})
            with urllib.request.urlopen(req, timeout=25) as response:
                raw = response.read(4_000_001)
                if len(raw) > 4_000_000:
                    return None, ['Response exceeded 4 MB budget'], False
                html = raw.decode('utf-8', errors='replace')
                if any(s in html.lower() for s in ['just a moment...', 'verify you are human', 'cf-chl-']):
                    return None, ['Public page returned an access challenge; stopped'], True
                return html, errors, False
        except urllib.error.HTTPError as e:
            errors.append(f'HTTP {e.code}')
            if e.code in (401, 403):
                return None, errors, True
            if e.code in (429, 500, 502, 503, 504) and attempt == 0:
                try:
                    pause = min(60, max(10, int(e.headers.get('Retry-After', '10'))))
                except ValueError:
                    pause = 10
                time.sleep(pause)
                continue
            return None, errors, e.code == 429
        except Exception as e:
            errors.append(type(e).__name__ + ': ' + str(e))
            if attempt == 0:
                time.sleep(2)
    return None, errors, False


def save(path, data):
    temp = path.with_suffix('.tmp')
    temp.write_text(json.dumps(data, indent=1, ensure_ascii=False) + '\n')
    temp.replace(path)


def search_provider(provider, recipes, used, work):
    result_path = work / (provider + '-search.json')
    results = json.loads(result_path.read_text()) if result_path.exists() else {}
    controls = []
    pending = [r for r in recipes if r['slug'] not in results or results[r['slug']]['status'] == 'unverified_search']
    next_request = 0
    def get(url):
        nonlocal next_request
        time.sleep(max(0, next_request - time.monotonic()))
        data = fetch(url)
        next_request = time.monotonic() + 1.05
        return data
    for i, recipe in enumerate(pending):
        if i % 100 == 0:
            url = query_url(provider, 'pancakes')
            html, errors, blocked = get(url)
            try:
                photos = parse_search(provider, html) if html else []
                if not photos:
                    raise ValueError('Known-positive pancakes control has no public photos')
                controls.append({'url': url, 'before_query': i+1, 'photos': len(photos),
                                 'checked_at': datetime.datetime.now(datetime.timezone.utc).isoformat()})
                save(work / (provider + '-controls.json'), controls)
            except (ValueError, KeyError, TypeError) as e:
                save(work / (provider + '-stopped.json'), {'url': url, 'errors': errors + [str(e)],
                    'pending_not_attempted': len(pending)-i, 'access_challenge': blocked})
                print(provider, 'control unavailable; stopped', flush=True)
                break
        url = query_url(provider, recipe['title'])
        html, errors, blocked = get(url)
        row = {'slug': recipe['slug'], 'title': recipe['title'], 'query_url': url,
               'checked_at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
               'errors': errors, 'candidates': [], 'status': 'unverified_search'}
        if html:
            try:
                photos = parse_search(provider, html)
                row.update(raw_photos=len(photos), candidates=select_leads(photos, recipe, used),
                           page_sha256=hashlib.sha256(html.encode()).hexdigest())
                row['status'] = 'candidates_need_review' if row['candidates'] else 'no_eligible_candidate_in_bounded_search'
            except (ValueError, KeyError, TypeError) as e:
                row['errors'].append(str(e))
        results[recipe['slug']] = row
        save(result_path, results)
        if i % 25 == 0 or row['candidates']:
            print(provider, f'{i+1}/{len(pending)}', recipe['slug'], len(row['candidates']), row['status'], flush=True)
        if blocked:
            save(work / (provider + '-stopped.json'), {'url': url, 'errors': errors,
                'pending_not_attempted': len(pending)-i-1, 'access_challenge': True})
            print(provider, 'access challenge; stopped without bypass', flush=True)
            break


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--work', type=Path, required=True)
    ap.add_argument('--limit', type=int)
    ap.add_argument('--providers', nargs='+', choices=PROVIDERS, default=PROVIDERS)
    args = ap.parse_args()
    args.work.mkdir(parents=True, exist_ok=True)
    spec = importlib.util.spec_from_file_location('S', ROOT / 'tools/source-missing-photos.py')
    sources = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(sources)
    recipes, rejects, used_pages = sources.inventory()
    if args.limit:
        recipes = recipes[:args.limit]
    save(args.work / 'inventory.json', recipes)
    used = {photo_key(page) for page in used_pages}
    print(len(recipes), 'recipes;', ', '.join(args.providers), 'public searches; no photo publication', flush=True)
    with concurrent.futures.ThreadPoolExecutor(max_workers=len(args.providers)) as pool:
        futures = [pool.submit(search_provider, provider, recipes, used, args.work) for provider in args.providers]
        for future in futures:
            future.result()


if __name__ == '__main__':
    main()
