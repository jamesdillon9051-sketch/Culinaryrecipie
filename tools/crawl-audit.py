#!/usr/bin/env python3
"""Catalogue-wide generated-output audit. Stdlib only; never edits content.

node tools/crawl-manifest.js > /tmp/crawl-manifest.json
python3 tools/crawl-audit.py --manifest /tmp/crawl-manifest.json --out /tmp/static.json
Optionally --gsc-table FILE --gsc-metadata FILE. A missing export means unknown status.
"""
import argparse
import collections
import csv
import datetime
import json
from pathlib import Path
import re
import urllib.parse
import urllib.robotparser
import xml.etree.ElementTree as ET
from crawl_static import parse_html, summary, is_recipe

ROOT = Path(__file__).resolve().parents[1]
ORIGIN = 'https://weeklydelight.com'
NS = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}


def normalized(text):
    # Inline emphasis and units may be split into different text nodes.
    # Joining inline text nodes can insert spaces beside emphasized punctuation;
    # compare the complete characters, retaining every word and punctuation mark.
    return re.sub(r'\s+', '', str(text).replace('*', ''))


def html_file(route):
    route = urllib.parse.urlsplit(route).path
    return ROOT / (route.lstrip('/') + 'index.html' if route.endswith('/') else route.lstrip('/'))


def inspect(route, expected):
    file = html_file(route)
    if not file.is_file():
        row = summary(parse_html(''))
        row.update(url=ORIGIN + route, file=str(file.relative_to(ROOT)),
                   errors=['missing generated HTML'], warnings=[], links=[], declared_images=[], ids=[])
        return row
    raw = file.read_text()
    p = parse_html(raw)
    row = summary(p)
    row.update(url=ORIGIN + route, file=str(file.relative_to(ROOT)), errors=[], warnings=[])
    error = row['errors'].append
    if p.canonicals != [ORIGIN + route]:
        error('missing, duplicate or noncanonical canonical')
    tokens = re.split(r'[\s,]+', ' '.join(x['content'].lower() for x in p.robots))
    if any(x in tokens for x in ('noindex', 'none')):
        error('noindex on intended indexable page')
    if 'nofollow' in tokens:
        error('nofollow on intended indexable page')
    if not p.title or not p.h1:
        error('missing title/H1 identity')
    if row['visible_chars'] < 250 or row['challenge']:
        error('thin, empty or challenge template')
    if p.json_errors:
        error('invalid JSON-LD')
    recipes = [e for e in p.schema if is_recipe(e.get('@type', ''))]
    anchors = {urllib.parse.urljoin(row['url'], href).split('#')[0] for href, _ in p.links}
    for entity in p.schema:
        listing = entity.get('mainEntity') if entity.get('@type') == 'CollectionPage' else None
        if isinstance(listing, dict) and listing.get('@type') == 'ItemList':
            for item in listing.get('itemListElement', []):
                target = item.get('url') or item.get('item')
                if isinstance(target, dict):
                    target = target.get('url') or target.get('@id')
                if isinstance(target, str) and urllib.parse.urljoin(row['url'], target).split('#')[0] not in anchors:
                    error('CollectionPage declares an item absent from ordinary HTML links')
                    break
    if expected['type'] == 'recipe':
        count = row['recipe_jsonld'] + row['recipe_microdata'] + row['recipe_rdfa']
        if count != 1 or len(recipes) != 1:
            error(f'primary Recipe declarations: {count} (JSON-LD {len(recipes)}, microdata {row["recipe_microdata"]}, RDFa {row["recipe_rdfa"]})')
        if len(recipes) == 1:
            r = recipes[0]
            for field, value in [('name', expected['title']), ('description', expected['description']),
                                 ('recipeIngredient', expected['ingredients']), ('recipeYield', f'{expected["servings"]} servings'),
                                 ('prepTime', expected['prepTime']), ('cookTime', expected['cookTime'])]:
                if r.get(field) != value:
                    error('schema/source mismatch: ' + field)
            steps = [s.get('text') for s in r.get('recipeInstructions', [])]
            if steps != expected['steps']:
                error('schema/source mismatch: instructions')
            for step in r.get('recipeInstructions', []):
                if step.get('url'):
                    url = urllib.parse.urlsplit(step['url'])
                    if urllib.parse.urlunsplit((url.scheme, url.netloc, url.path, url.query, '')) != row['url'] or not url.fragment or url.fragment not in p.ids:
                        error('structured instruction URL has no matching HTML target')
                        break
            visible = normalized(' '.join(p.text))
            # HTML inline markup must not change the actual ingredient or step text.
            for field, values in [('ingredients', expected['ingredients']), ('instructions', steps), ('title', [expected['title']])]:
                if any(normalized(x) not in visible for x in values):
                    error('schema text absent from visible HTML: ' + field)
            author = r.get('author') or {}
            if not author.get('name') or normalized(author['name']) not in visible or not author.get('url'):
                error('schema author absent from visible HTML or profile URL')
            if expected['untimed']:
                if r.get('totalTime'):
                    error('totalTime claims complete duration despite required untimed stage')
            elif r.get('totalTime') != expected['elapsedTime']:
                error('schema/source mismatch: totalTime')
            if not r.get('recipeIngredient') or not steps:
                error('empty recipe content')
            if not r.get('image'):
                row['warnings'].append('No Recipe image; image creation outside scope')
            for image in (r.get('image') if isinstance(r.get('image'), list) else [r.get('image')]):
                if not image:
                    continue
                url = image if isinstance(image, str) else image.get('url', image.get('contentUrl', ''))
                parsed = urllib.parse.urlsplit(url)
                if not expected.get('image') or url != ORIGIN + expected['image'] or not (ROOT / parsed.path.lstrip('/')).is_file():
                    error('declared Recipe image is missing or does not match this recipe source')
            for field in ('dateModified', 'datePublished'):
                if r.get(field) != expected[field]:
                    error('schema/source mismatch: ' + field)
            if r.get('aggregateRating') and not r.get('review'):
                row['warnings'].append('Rating requires published review evidence')
    elif row['recipe_jsonld'] or row['recipe_microdata'] or row['recipe_rdfa']:
        error('unexpected primary Recipe on nonrecipe page')
    if expected.get('recipeCount') is not None:
        links = {urllib.parse.urljoin(row['url'], href).split('#')[0] for href, rel in p.links if 'nofollow' not in rel.split()}
        count = sum('/recipes/' in u and u != ORIGIN + '/recipes/' for u in links)
        row['linked_recipe_count'] = count
        if count < expected['recipeCount']:
            error('category omits ordinary HTML links to some listed recipes')
        if expected['recipeCount'] < 6:
            row['warnings'].append(f'Small collection: {expected["recipeCount"]} recipes; manual usefulness review')
    row['links'] = p.links
    row['declared_images'] = p.images
    row['ids'] = sorted(p.ids)
    return row


def audit(manifest, gsc_table=None, gsc_metadata=None):
    expected = {r['url']: r for r in manifest['routes']}
    rows = {url: inspect(r['route'], r) for url, r in expected.items()}
    robot = urllib.robotparser.RobotFileParser()
    robot.parse((ROOT / 'robots.txt').read_text().splitlines())
    index_errors = []
    members = collections.defaultdict(list)
    image_urls = set()
    child_counts = {}
    index = ET.parse(ROOT / 'sitemap-index.xml').getroot()
    if index.tag != '{' + NS['s'] + '}sitemapindex':
        index_errors.append('sitemap-index.xml is not a sitemap index')
    if (ROOT / 'sitemap.xml').read_bytes() != (ROOT / 'sitemap-index.xml').read_bytes():
        index_errors.append('legacy sitemap.xml alias differs from canonical index')
    children = [x.text for x in index.findall('s:sitemap/s:loc', NS)]
    if len(children) != len(set(children)):
        index_errors.append('duplicate child sitemap references')
    for child in children:
        if not child.startswith(ORIGIN + '/'):
            index_errors.append('nonpreferred sitemap: ' + child)
            continue
        xml = ET.parse(ROOT / urllib.parse.urlsplit(child).path.lstrip('/')).getroot()
        entries = xml.findall('s:url', NS)
        child_counts[child] = len(entries)
        lastmods = []
        for item in entries:
            loc = item.findtext('s:loc', namespaces=NS)
            lastmod = item.findtext('s:lastmod', namespaces=NS)
            try:
                if datetime.date.fromisoformat(lastmod) > datetime.date.today():
                    raise ValueError('future date')
            except (ValueError, TypeError):
                index_errors.append('invalid/future lastmod: ' + str(loc))
            lastmods.append(lastmod)
            members[loc].append(child)
            image_urls.update(x.text for x in item.findall('.//{http://www.google.com/schemas/sitemap-image/1.1}loc'))
        declared = next((x.findtext('s:lastmod', namespaces=NS) for x in index.findall('s:sitemap', NS)
                         if x.findtext('s:loc', namespaces=NS) == child), None)
        if declared != max(lastmods):
            index_errors.append('index lastmod differs from latest child entry: ' + child)
    extras = sorted(set(members) - set(expected))
    missing = sorted(set(expected) - set(members))
    duplicates = sorted(u for u, v in members.items() if len(v) != 1)
    graph, bad_links, alternates, missing_images = {}, [], collections.defaultdict(set), set()
    declared_images = set(image_urls)
    for url, row in rows.items():
        row['type'] = expected[url]['type']
        row['sitemaps'] = members.get(url, [])
        row['robots_allowed'] = robot.can_fetch('Googlebot', url)
        if not row['robots_allowed']:
            row['errors'].append('robots.txt blocks Googlebot')
        graph[url] = set()
        for href, rel in row.pop('links'):
            resolved = urllib.parse.urljoin(url, href)
            parsed = urllib.parse.urlsplit(resolved)
            if parsed.scheme not in ('http', 'https') or parsed.hostname not in ('weeklydelight.com', 'www.weeklydelight.com'):
                continue
            clean = urllib.parse.urlunsplit((parsed.scheme, parsed.netloc, parsed.path, parsed.query, ''))
            if 'nofollow' in rel.split():
                continue
            if clean in expected:
                graph[url].add(clean)
            else:
                route = parsed.path
                file = html_file(route)
                if parsed.query or parsed.scheme != 'https' or parsed.hostname != 'weeklydelight.com' or route.endswith('/index.html'):
                    alternates[clean].add(url)
                elif not file.is_file():
                    bad_links.append({'from': url, 'href': href, 'target': clean})
        for image in row.pop('declared_images'):
            parsed = urllib.parse.urlsplit(urllib.parse.urljoin(url, image))
            if parsed.hostname == 'weeklydelight.com':
                declared_images.add(ORIGIN + parsed.path)
                if not (ROOT / parsed.path.lstrip('/')).is_file():
                    missing_images.add(ORIGIN + parsed.path)
    depth = {ORIGIN + '/': 0}
    queue = collections.deque(depth)
    while queue:
        parent = queue.popleft()
        for dest in graph.get(parent, []):
            if dest not in depth:
                depth[dest] = depth[parent] + 1
                queue.append(dest)
    incoming = collections.Counter(dest for dests in graph.values() for dest in dests)
    for url, row in rows.items():
        row['depth'] = depth.get(url)
        row['inbound_pages'] = incoming[url]
        row.pop('ids', None)
        if url not in depth:
            row['errors'].append('unreachable from homepage ordinary HTML links')
    identities = collections.defaultdict(list)
    for url, row in rows.items():
        identities[row.get('title')].append(url)
    for title, urls in identities.items():
        if len(urls) > 1:
            for url in urls:
                rows[url]['errors'].append('duplicate page title identity: ' + str(title))
    generated = set()
    for area in ['recipes', 'categories', 'cuisines', 'ingredients', 'about', 'privacy', 'contact', 'search', 'favourites', 'site-directory']:
        generated.update(f.relative_to(ROOT).as_posix() for f in (ROOT / area).rglob('*.html'))
    generated.update(['index.html', '404.html'])
    intended_files = {r.get('file') for r in rows.values()}
    gsc = {}
    if gsc_table:
        export = list(csv.DictReader(Path(gsc_table).open(encoding='utf-8-sig')))
        metadata = dict(csv.reader(Path(gsc_metadata).open(encoding='utf-8-sig'))) if gsc_metadata else {}
        for r in export:
            gsc[r['URL']] = {**r, 'issue': metadata.get('Issue', 'not supplied'),
                             'last_crawl_available': r.get('Last crawled') not in ('1970-01-01', '', None)}
    return {'source': {k: v for k, v in manifest.items() if k != 'routes'},
            'counts': {'expected': len(expected), 'types': dict(collections.Counter(r['type'] for r in expected.values())),
                       'generated_nonad_html': len(generated), 'sitemap_entries': sum(map(len, members.values())),
                       'sitemap_unique': len(members), 'ordinary_anchor_reachable': len(depth),
                       'unique_followable_edges': sum(map(len, graph.values())),
                       'unique_titles': len(identities), 'unique_h1s': len({p.get('h1') for p in rows.values()}),
                       'gsc_rows': len(gsc), 'gsc_types': dict(collections.Counter(expected.get(u, {}).get('type', 'outside catalogue') for u in gsc)),
                       'declared_sitemap_images': len(image_urls),
                       'error_pages': sum(bool(r['errors']) for r in rows.values()),
                       'errors': dict(collections.Counter(e for r in rows.values() for e in r['errors'])),
                       'max_depth': max(depth.values()), 'depth_distribution': dict(collections.Counter(depth.values()))},
            'sitemaps': {'children': child_counts, 'errors': index_errors, 'extras': extras, 'missing': missing, 'duplicates': duplicates},
            'generated_nonindexable_or_helper_files': sorted(generated - intended_files),
            'broken_links': bad_links, 'alternate_link_targets': {u: sorted(s) for u, s in sorted(alternates.items())},
            'missing_declared_image_files': sorted(missing_images), 'search_console': gsc,
            'declared_image_urls': sorted(declared_images),
            'gsc_outside_catalogue': sorted(set(gsc) - set(expected)), 'pages': list(rows.values())}


def main():
    global ROOT
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument('--manifest', required=True)
    p.add_argument('--out', required=True)
    p.add_argument('--gsc-table')
    p.add_argument('--gsc-metadata')
    p.add_argument('--strict', action='store_true')
    p.add_argument('--root', default=str(ROOT), help='generated-output root (can be a clean baseline export)')
    args = p.parse_args()
    ROOT = Path(args.root).resolve()
    result = audit(json.loads(Path(args.manifest).read_text()), args.gsc_table, args.gsc_metadata)
    Path(args.out).parent.mkdir(parents=True, exist_ok=True)
    Path(args.out).write_text(json.dumps(result, ensure_ascii=False, indent=2) + '\n')
    print(json.dumps({k: v for k, v in result.items() if k not in ('pages', 'search_console', 'alternate_link_targets', 'declared_image_urls')}, ensure_ascii=False, indent=2))
    if args.strict and (result['counts']['error_pages'] or result['broken_links'] or result['sitemaps']['errors'] or
                       result['sitemaps']['extras'] or result['sitemaps']['missing'] or result['sitemaps']['duplicates'] or
                       result['missing_declared_image_files']):
        raise SystemExit(1)


if __name__ == '__main__':
    main()
