#!/usr/bin/env python3
"""Join source/static/live/GSC evidence, without labelling eligibility as indexing.

python3 tools/crawl-report.py --artifacts DIR --out docs/crawl-audit-2026-10-20
"""
import argparse
import collections
import csv
import hashlib
import importlib.util
import json
from pathlib import Path
import urllib.parse
from crawl_static import parse_html, summary
spec = importlib.util.spec_from_file_location('crawl_live', Path(__file__).with_name('crawl-live.py'))
live_tool = importlib.util.module_from_spec(spec)
spec.loader.exec_module(live_tool)
targets, ROOT, ORIGIN = live_tool.targets, live_tool.ROOT, live_tool.ORIGIN


def write_csv(file, rows):
    with file.open('w', newline='', encoding='utf-8') as out:
        writer = csv.DictWriter(out, fieldnames=list(rows[0]), lineterminator='\n')
        writer.writeheader()
        writer.writerows(rows)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--artifacts', required=True)
    parser.add_argument('--out', required=True)
    args = parser.parse_args()
    source = Path(args.artifacts)
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    before = json.loads((source / 'static-before.json').read_text())
    after = json.loads((source / 'static-after.json').read_text())
    manifest = json.loads((source / 'manifest-after.json').read_text())
    expected = {r['url']: r for r in manifest['routes']}
    static = {r['url']: r for r in after['pages']}
    raw = [json.loads(line) for line in (source / 'live.jsonl').read_text().splitlines()]
    direct = {r['url']: r for r in raw}
    # A followed redirect's final HTTP 200 is also evidence for its destination.
    good = {r.get('final_url', r['url']): r for r in raw if r.get('status') == 200 and r.get('kind') != 'plumbing'}
    supplied = after['search_console']
    queue_file = ROOT / 'docs/release-2026-10-uncertainties/codex-review-findings.json'
    content_queue = collections.defaultdict(list)
    if queue_file.exists():
        for item in json.loads(queue_file.read_text())['records']:
            content_queue[item['url']].append(item['id'])
    urls = set(expected) | set(after['alternate_link_targets']) | set(supplied)
    urls.update(r['url'] for r in raw if r['kind'] != 'image')
    helper = {ORIGIN + '/' + f.replace('index.html', ''): f for f in after['generated_nonindexable_or_helper_files']}
    urls.update(helper)
    rows = []
    for url in sorted(urls):
        r = good.get(url) or direct.get(url)
        s = static.get(url)
        e = expected.get(url)
        g = supplied.get(url)
        unresolved = []
        http = 'Unverified: not reached before outbound proxy transport failed'
        if r:
            if r.get('status') == 503 and r.get('bytes') == 215:
                http = 'Unverified: environment proxy transport failure (503), not an origin result'
            elif r.get('transport_error'):
                http = 'Unverified: ' + r['transport_error']
            else:
                chain = '; '.join(str(d['status']) + ' -> ' + d['to'] for d in r.get('redirects', []))
                http = (chain + '; ' if chain else '') + str(r.get('status')) + ' ' + r.get('final_url', url)
        verified = bool(r and r.get('status') == 200 and not r.get('transport_error'))
        page_type = e['type'] if e else ('utility/helper' if url in helper else
                    'alternate/filter' if url in after['alternate_link_targets'] else
                    'sitemap/robots' if r and r['kind'] == 'plumbing' else
                    'redirect' if r and r.get('redirects') else 'missing-page probe/other')
        canonical = '; '.join(s['canonicals']) if s else '; '.join((r or {}).get('canonicals', []))
        indexability = 'Review output: allowed, indexable; no restrictive meta directives' if s else 'Not an intended indexable catalogue URL'
        if s:
            if s['errors']:
                indexability = 'Review output errors: ' + '; '.join(s['errors'])
            indexability += '; live: ' + ('robots allowed, no restrictive meta/X-Robots-Tag' if verified else 'not verified')
            if not verified:
                unresolved.append('Production HTTP/headers/body still require verification')
        if url in helper:
            parsed = summary(parse_html((ROOT / helper[url]).read_text()))
            canonical = '; '.join(parsed['canonicals'])
            indexability = 'Generated helper/utility: ' + '; '.join(x['content'] for x in parsed['meta_robots']) + '; excluded from sitemap'
        if url in after['alternate_link_targets']:
            canonical = ORIGIN + '/recipes/'
            indexability = 'Intentional filter URL; robots.txt blocks parameter crawling; base directory canonical'
        structured = 'No primary Recipe expected'
        action = 'Audited; no shared defect found'
        if e and e['type'] == 'recipe':
            structured = 'Review: one JSON-LD Recipe; no microdata/RDFa Recipe; real step targets'
            if verified:
                structured += f'; live: JSON-LD={r.get("recipe_jsonld")}, microdata={r.get("recipe_microdata")}, RDFa={r.get("recipe_rdfa")}'
            else:
                structured += '; live unverified; baseline generated output had duplicate Recipe and missing step targets'
            action = 'Shared template: remove incomplete microdata Recipe; add instruction anchors; meaningful modification date'
            if e.get('untimed'):
                action += '; omit unsupported totalTime; retain prepTime/cookTime'
                unresolved.append('Required stage duration remains untimed; Claude needs evidence before adding a total')
            unresolved.extend(s['warnings'])
            if verified and r.get('recipe_microdata'):
                unresolved.append('Production still has old duplicate Recipe; reviewed fix not deployed')
            if content_queue.get(url):
                unresolved.append('Claude content review remains open; see content_review_ids and shared handoff')
        elif s:
            unresolved.extend(s['warnings'])
            if e['route'] == '/search/':
                structured = 'Review: removed CollectionPage ItemList for browser-only results; breadcrumbs preserved'
                action = 'Shared directory template no longer declares recipes absent from original HTML'
        if url in after['alternate_link_targets']:
            action = 'Preserved working filter; ordinary canonical directory remains crawlable'
        if r and r.get('redirects'):
            action += '; redirect path/destination verified'
        status = (g['issue'] + '; validation=' + g.get('Status', '') + '; last crawl unavailable (export sentinel 1970-01-01)') if g else 'Unknown: not in supplied 1000-URL export'
        if not e and not g:
            status = 'Not supplied'
        rows.append({'URL': url, 'page_type': page_type, 'supplied_search_console_status': status,
                     'HTTP_result': http, 'canonical': canonical,
                     'robots_indexability_result': indexability,
                     'sitemap_membership': '; '.join(s['sitemaps']) if s else 'No',
                     'internal_link_reachability': f'Homepage depth {s["depth"]}; {s["inbound_pages"]} inbound pages' if s else
                         f'Linked from {len(after["alternate_link_targets"][url])} pages' if url in after['alternate_link_targets'] else 'Outside intended catalogue graph',
                     'structured_data_issues': structured, 'action_taken': action,
                     'remaining_issue': '; '.join(unresolved) or 'No further static technical issue found; Google indexing status unknown',
                     'live_checked_at': (r or {}).get('checked_at', ''),
                     'content_review_ids': '; '.join(content_queue[url]),
                     'live_canonical': '; '.join((r or {}).get('canonicals', [])),
                     'live_x_robots_tag': '; '.join((r or {}).get('x_robots_tag', []))})
    write_csv(out / 'url-audit.csv', rows)
    image_rows = []
    for url in sorted(set(after['declared_image_urls']) | {u for u, k in targets() if k == 'image'}):
        file = ROOT / urllib.parse.urlsplit(url).path.lstrip('/')
        image_rows.append({'URL': url, 'local_file_exists': file.is_file(), 'local_bytes': file.stat().st_size if file.exists() else '',
                           'HTTP_result': 'Unverified: proxy failed before declared-image HEAD phase',
                           'remaining_issue': 'Verify live image HTTP 200 and image Content-Type after network access is restored'})
    write_csv(out / 'declared-images.csv', image_rows)
    missing = [{'URL': url, 'source_file': e['detailFile'], 'issue': 'No declared Recipe image; no image invented; creation outside scope'}
               for url, e in expected.items() if e['type'] == 'recipe' and not e['image']]
    write_csv(out / 'missing-images.csv', missing)
    result = {'base_commit': '40a2386f0f0b75eeac0ec54570f619b07f1f2a66',
              'branch': 'fix/sitewide-crawl-indexing-review',
              'before': before['counts'], 'after': after['counts'],
              'sitemaps': after['sitemaps'], 'csv_rows': len(rows),
              'noncatalogue_types': dict(collections.Counter(r['page_type'] for r in rows if r['URL'] not in expected)),
              'live': {'catalogue_200_verified': len(set(expected) & set(good)),
                       'catalogue_unverified': len(set(expected) - set(good)),
                       'export_urls_200_verified': len(set(supplied) & set(good)),
                       'raw_requests_recorded': len(raw),
                       'raw_result_counts': {str(k): v for k, v in collections.Counter((r['kind'], r.get('status')) for r in raw).items()},
                       'first_recorded_at': raw[0].get('checked_at'), 'last_recorded_at': raw[-1].get('checked_at')},
              'declared_images_local': len(image_rows), 'missing_image_recipes': len(missing),
              'gsc_omitted_of_reported_2982': 2982 - len(supplied),
              'source_hashes': {p.name: hashlib.sha256(p.read_bytes()).hexdigest() for p in source.glob('*.json*')},
              'notes': ['No URL labelled indexed; export is an exclusion subset with Pending validation.',
                        'Local checks are not Google Rich Results Test or live deployment proof.',
                        'No production merge or deployment.']}
    (out / 'summary.json').write_text(json.dumps(result, indent=2) + '\n')
    print(json.dumps({k: result[k] for k in ('csv_rows', 'live', 'declared_images_local', 'missing_image_recipes')}, indent=2))


if __name__ == '__main__':
    main()
