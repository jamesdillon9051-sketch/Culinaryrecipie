#!/usr/bin/env python3
"""Read-only production probe. Four workers, globally paced, bounded retries.

python3 tools/crawl-live.py --out /tmp/crawl-live.jsonl
Resume by giving the same output file. No cookies or credentials are sent.
Only GET pages/XML/text and HEAD declared images; never submit forms.
"""
import argparse
import concurrent.futures
import datetime
import gzip
import hashlib
import json
import os
from pathlib import Path
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
import re

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = 'https://weeklydelight.com'
NS = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
LOCK = threading.Lock()
NEXT = 0
PAUSE = 0
STOP = threading.Event()


def pace():
    global NEXT
    with LOCK:
        due = max(time.monotonic(), NEXT, PAUSE)
        NEXT = due + .20  # at most five new requests/second across every worker
    time.sleep(max(0, due - time.monotonic()))


class Redirects(urllib.request.HTTPRedirectHandler):
    def __init__(self):
        super().__init__()
        self.chain = []

    def redirect_request(self, req, fp, code, msg, headers, newurl):
        pace()
        self.chain.append({'url': req.full_url, 'status': code, 'to': newurl})
        return super().redirect_request(req, fp, code, msg, headers, newurl)


def fetch(target):
    global PAUSE
    url, kind = target
    method = 'HEAD' if kind == 'image' else 'GET'
    failures = []
    for attempt in range(3):
        if STOP.is_set():
            return {'url': url, 'kind': kind, 'status': None,
                    'transport_error': 'Unverified: audit stopped after outbound proxy transport failure'}
        pace()
        redirects = Redirects()
        opener = urllib.request.build_opener(redirects)
        req = urllib.request.Request(url, method=method, headers={
            'User-Agent': 'WeeklyDelight-OwnerAudit/1.0 (read-only technical review)',
            'Accept-Encoding': 'gzip',
        })
        try:
            try:
                response = opener.open(req, timeout=30)
            except urllib.error.HTTPError as e:
                response = e
            with response as r:
                status = r.code
                headers = {k.lower(): v for k, v in r.headers.items()}
                body = r.read(3_000_001) if method == 'GET' else b''
                if headers.get('content-encoding') == 'gzip':
                    body = gzip.decompress(body)
                result = {'url': url, 'kind': kind, 'method': method, 'status': status,
                          'final_url': r.url, 'redirects': redirects.chain,
                          'checked_at': datetime.datetime.now(datetime.timezone.utc).isoformat(),
                          'content_type': headers.get('content-type', ''),
                          'x_robots_tag': r.headers.get_all('X-Robots-Tag', []),
                          'attempts': attempt + 1, 'prior_errors': failures}
                if body:
                    result['bytes'] = len(body)
                    result['sha256'] = hashlib.sha256(body).hexdigest()
                    html = body.decode('utf-8', errors='replace')
                    if status == 503 and 'envoy://cloudflare_https_tunnel/' in html:
                        # This is the environment's transport, not an origin HTTP finding.
                        # Stop immediately rather than hammer thousands of queued targets.
                        result['transport_error'] = html.strip()
                        STOP.set()
                        return result
                    if kind == 'page' or kind == 'probe':
                        # This module is also used by the offline audit.
                        from crawl_static import parse_html, summary
                        result.update(summary(parse_html(html)))
                    else:
                        result['body'] = html
                if status in (429, 500, 502, 503, 504):
                    failures.append(str(status))
                    delay = headers.get('retry-after', '')
                    try:
                        delay = min(300, max(10, float(delay)))
                    except ValueError:
                        delay = 10 * (attempt + 1)
                    with LOCK:
                        PAUSE = max(PAUSE, time.monotonic() + delay)
                    if attempt < 2:
                        continue
                if status == 405 and method == 'HEAD':
                    method = 'GET'
                    continue
                return result
        except Exception as e:
            failures.append(type(e).__name__ + ': ' + str(e))
            if attempt < 2:
                time.sleep(2 * (attempt + 1))
    return {'url': url, 'kind': kind, 'status': None, 'errors': failures,
            'checked_at': datetime.datetime.now(datetime.timezone.utc).isoformat()}


def targets():
    pages = []
    images = set()
    for file in sorted(ROOT.glob('sitemap-[0-9]*.xml')):
        root = ET.parse(file).getroot()
        pages.extend(x.text for x in root.findall('s:url/s:loc', NS))
        images.update(x.text for x in root.findall('.//{http://www.google.com/schemas/sitemap-image/1.1}loc'))
    # Every declared local recipe image plus the organization logo and social image.
    images.update([ORIGIN + '/assets/img/icon-192.png', ORIGIN + '/assets/img/og-default.jpg'])
    plumbing = [ORIGIN + '/' + f.name for f in ROOT.glob('sitemap*.xml')]
    plumbing.append(ORIGIN + '/robots.txt')
    probes = []
    for route in ['/', '/recipes/baked-peaches-with-cinnamon/', '/categories/baking/italian/']:
        for origin in ['http://weeklydelight.com', 'http://www.weeklydelight.com', 'https://www.weeklydelight.com']:
            probes.append(origin + route)
    probes += [ORIGIN + p for p in ['/recipes/baked-peaches-with-cinnamon',
               '/recipes/baked-peaches-with-cinnamon/index.html', '/no-such-page-owner-audit-20261020/',
               '/recipes/no-such-recipe-owner-audit-20261020/', '/favourites/', '/404.html',
               '/contact/_pages/sent.html', '/contact/success/', '/contact/not-sent/']]
    return list(dict.fromkeys([(x, 'plumbing') for x in plumbing] +
                             [(x, 'probe') for x in probes] + [(x, 'page') for x in pages] +
                             [(x, 'image') for x in sorted(images)]))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--out', required=True)
    parser.add_argument('--workers', type=int, default=4, choices=range(1, 5))
    parser.add_argument('--pages-only', action='store_true')
    parser.add_argument('--images-from', help='declared-images.csv produced by the full static audit')
    args = parser.parse_args()
    output = Path(args.out)
    output.parent.mkdir(parents=True, exist_ok=True)
    done = set()
    if output.exists():
        for line in output.read_text().splitlines():
            r = json.loads(line)
            if r.get('status') in (200, 404) and not r.get('transport_error'):
                done.add((r['url'], r['kind']))
    requested = targets()
    if args.images_from:
        import csv
        requested.extend((r['URL'], 'image') for r in csv.DictReader(open(args.images_from)))
        requested = list(dict.fromkeys(requested))
    pending = [x for x in requested if x not in done and (not args.pages_only or x[1] != 'image')]
    print(f'{len(pending)} pending; {len(done)} already recorded; workers={args.workers}, max 5 requests/s', flush=True)
    with output.open('a') as f, concurrent.futures.ThreadPoolExecutor(max_workers=args.workers) as pool:
        for i, result in enumerate(pool.map(fetch, pending), 1):
            f.write(json.dumps(result, ensure_ascii=False) + '\n')
            f.flush()
            if result.get('status') not in (200, 404) or i % 100 == 0:
                if result.get('transport_error') and result.get('status') is None:
                    continue
                print(f'{i}/{len(pending)} {result.get("status")} {result["url"]}', flush=True)


if __name__ == '__main__':
    main()
