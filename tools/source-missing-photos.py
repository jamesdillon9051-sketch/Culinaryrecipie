#!/usr/bin/env python3
"""Resumable licensed-photo search for every recipe currently without a hero.

Search never publishes. Stage downloads into the work directory only. Review
the image, recipe and attribution before adopting anything in images.json.
Uses the existing repository licence gate; no paid APIs or generated images.
"""
import argparse
import concurrent.futures
import csv
import datetime
import hashlib
import io
import json
from pathlib import Path
import re
import subprocess
import sys
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
from PIL import Image, ImageDraw, ImageFont
import fetch_images as F

ROOT = Path(__file__).resolve().parents[1]
API = 'https://commons.wikimedia.org/w/api.php'
UA = 'WeeklyDelightPhotoReview/1.0 (https://weeklydelight.com/contact/; licensed photograph sourcing)'
LOCK = threading.Lock()
NEXT = 0.0
PAUSE = 0.0
STOP = threading.Event()


def load(file, fallback=None):
    return json.loads(Path(file).read_text()) if Path(file).exists() else fallback


def save(file, data):
    file = Path(file)
    file.parent.mkdir(parents=True, exist_ok=True)
    temp = file.with_suffix('.tmp')
    temp.write_text(json.dumps(data, ensure_ascii=False, indent=1) + '\n')
    temp.replace(file)


def pace():
    global NEXT
    with LOCK:
        due = max(time.monotonic(), NEXT, PAUSE)
        NEXT = due + .7  # maximum ~1.4 requests/s, across both workers
    time.sleep(max(0, due - time.monotonic()))


def request(url, binary=False):
    global PAUSE
    errors = []
    for attempt in range(3):
        if STOP.is_set():
            return None, ['Environment transport unavailable; request not attempted']
        pace()
        try:
            req = urllib.request.Request(url, headers={'User-Agent': UA})
            with urllib.request.urlopen(req, timeout=25) as response:
                body = response.read(6_000_001)
                if len(body) > 6_000_000:
                    return None, ['File exceeds 6 MB download budget']
                if binary:
                    return body, []
                data = json.loads(body)
                if data.get('error'):
                    code = data['error'].get('code')
                    if code in ('maxlag', 'cirrussearch-too-busy-error'):
                        with LOCK:
                            PAUSE = max(PAUSE, time.monotonic() + 10)
                        errors.append('MediaWiki maxlag')
                        continue
                    return None, ['MediaWiki: ' + str(data['error'])]
                return data, []
        except urllib.error.HTTPError as e:
            body = e.read(500).decode(errors='replace')
            errors.append(f'HTTP {e.code}: {body[:250]}')
            if 'envoy://cloudflare_https_tunnel/' in body:
                STOP.set()
                return None, errors
            if e.code in (429, 502, 503, 504):
                delay = e.headers.get('Retry-After', '')
                try:
                    delay = min(120, max(10, float(delay)))
                except ValueError:
                    delay = 10 * (attempt + 1)
                with LOCK:
                    PAUSE = max(PAUSE, time.monotonic() + delay)
                continue
            return None, errors
        except Exception as e:
            errors.append(type(e).__name__ + ': ' + str(e))
            time.sleep(2 * (attempt + 1))
    return None, errors


def inventory():
    code = "const v=require('./src/data/volumes');process.stdout.write(JSON.stringify(v.catalog()))"
    rows = json.loads(subprocess.check_output(['node', '-e', code], cwd=ROOT))
    images = load(ROOT / 'src/data/images.json', {})
    aliases = load(ROOT / 'src/data/image-queries.json', {})
    rejects = F.rejected_pages()
    used = {e[k].get('page') for e in images.values() if e for k in ('hero', 'process') if e.get(k)}
    export = ROOT / 'docs/crawl-audit-2026-10-20/search-console/Table.csv'
    # The supplied subset is only a queue priority, never an indexing claim or
    # a requirement for sourcing the rest of the catalogue.
    gsc = {r['URL'] for r in csv.DictReader(export.open())} if export.exists() else set()
    missing = [{**r, 'aliases': aliases.get(r['slug'], []),
                'in_export': 'https://weeklydelight.com/recipes/' + r['slug'] + '/' in gsc}
               for r in rows if not (images.get(r['slug']) or {}).get('hero')]
    missing.sort(key=lambda r: (not r['in_export'], r['slug']))
    return missing, rejects, used


def query_for(row):
    # A caption may say "gooseberry and elderflower fool" rather than the exact
    # phrase "gooseberry fool". Try the title's meaningful words together,
    # without dropping named ingredients or cooking methods. Visual review
    # still decides whether a broader description actually matches the recipe.
    # Do not add Boolean grouping parentheses: the live archive treated those
    # as literal search text, including a zero-result known-positive Oatcakes
    # control. Aliases are covered by the separate article/category pass.
    terms = [t for t in re.findall(r"[\w'-]+", row['title']) if len(t) > 1 and
             t.casefold() not in {'with', 'and', 'the', 'of', 'in', 'an', 'to', 'on', 'for'}]
    return ' '.join(terms) + ' filetype:bitmap'


def search_one(row, rejects, used, params_override=None, data_override=None):
    params = {'action':'query','format':'json','generator':'search','gsrsearch':query_for(row),
              'gsrnamespace':6,'gsrlimit':20,'prop':'imageinfo',
              'iiprop':'url|extmetadata|size|sha1|mime','iiurlwidth':1000,'maxlag':5}
    params = params_override or params
    url = API + '?' + urllib.parse.urlencode(params)
    data, errors = request(url) if data_override is None else (data_override, [])
    base = {'slug':row['slug'],'title':row['title'],'cuisine':row['cuisine'],'tags':row['tags'],
            'image_query':row.get('imageQuery'),'aliases':row.get('aliases'),
            'in_supplied_export':row['in_export'],'search_url':url,'archive_query':query_for(row),
            'checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),
            'candidates':[], 'filter_counts':{}, 'errors':[]}
    if data is None:
        return {**base,'status':'unverified_search','errors':errors}
    filtered = {}
    def skip(reason):
        filtered[reason] = filtered.get(reason, 0) + 1
    pages = (data.get('query') or {}).get('pages', {})
    for p in sorted(pages.values(), key=lambda p:p.get('index', 99)):
        info = (p.get('imageinfo') or [{}])[0]
        meta = info.get('extmetadata', {})
        clean = lambda key: F.strip_html(meta.get(key, {}).get('value', ''))
        title = re.sub(r'^File:|\.[^.]+$', '', p.get('title', ''))
        licence = clean('LicenseShortName')
        if not F.OK_LICENCE.match(licence):
            skip('licence_not_compatible');continue
        page = info.get('descriptionurl', '')
        if page in used or page in rejects.get(row['slug'], set()):
            skip('already_used_or_previously_rejected');continue
        if info.get('mime') not in ('image/jpeg','image/png','image/webp'):
            skip('not_supported_photo_format');continue
        if info.get('width', 0)<500 or info.get('height', 0)<380:
            skip('too_small');continue
        description = clean('ImageDescription')
        bad = F.BAD_TOKENS.search(title)
        # "Butterfly" alone also names an insect; butterfly cupcakes are an
        # actual dish. Keep that explicit food context instead of silently
        # discarding its real photographs through the broad legacy filter.
        food_butterfly = bad and bad.group(0).casefold() == 'butterfly' and re.search(r'butterfly\s+(?:cup)?cakes?', title, re.I)
        if (bad and not food_butterfly) or re.search(r'\b(?:AI[- ]generated|artificial intelligence|Midjourney|DALL[- ]?E|Stable Diffusion)\b', description, re.I):
            skip('not_a_prepared_dish_photo');continue
        if F.contradicts_diet(title + ' ' + description[:500], row['title'], row['tags']):
            skip('diet_conflict_in_metadata');continue
        author = F.clean_author(clean('Artist'))
        if F.NEEDS_CREDIT.search(licence) and (not author or author.lower() in ('unknown','own work','self')):
            skip('required_author_not_verified');continue
        download = info.get('thumburl') or (info.get('url') if info.get('size', 0)<=6_000_000 else None)
        if not download or urllib.parse.urlsplit(download).hostname not in ('upload.wikimedia.org', 'thumb.wikimedia.org'):
            skip('no_usable_archive_download');continue
        candidate = {'title':title,'url':download,'page':page,'author':author or 'Unknown',
                     'licence':licence,'licence_url':clean('LicenseUrl'),'source':'Wikimedia Commons',
                     'description':description[:1200],'original_url':info.get('url'),
                     'original_width':info.get('width'),'original_height':info.get('height'),
                     'original_sha1':info.get('sha1'),'commons_filename':p.get('title'),
                     'metadata_notes':clean('Restrictions'),
                     'score':F.relevance(title,row['title'])}
        base['candidates'].append(candidate)
    base['candidates'].sort(key=lambda x:-x['score'])
    base['candidates'] = base['candidates'][:4]
    base['filter_counts'] = filtered
    base['raw_result_count'] = len(pages)
    base['status'] = 'candidates_need_visual_review' if base['candidates'] else 'no_eligible_candidate_in_search'
    return base


def leads(work):
    """Batch exact Wikipedia title/redirect lookups, then Commons metadata.
    This avoids hundreds of expensive full-text archive searches while keeping
    every missing recipe represented, including titles with no article match.
    """
    rows, rejects, used = inventory()
    save(work/'missing-at-start.json',rows)
    names={}
    for row in rows:
        aliases=row.get('aliases') or []
        if isinstance(aliases,str):aliases=[aliases]
        literal=[row['title'],row['title'][:1]+row['title'][1:].lower()]+aliases[:2]
        names[row['slug']]=list(dict.fromkeys(n.replace('_',' ') for n in literal if isinstance(n,str) and len(n)<110))
    all_names=list(dict.fromkeys(n for ns in names.values() for n in ns))
    cached=load(work/'wiki-title-lookups.json',{})
    todo=[n for n in all_names if n not in cached or cached[n].get('error')]
    print(f'{len(rows)} missing recipes, {len(all_names)} literal/alias title lookups; {len(todo)} pending',flush=True)
    for start in range(0,len(todo),45):
        batch=todo[start:start+45]
        params={'action':'query','format':'json','titles':'|'.join(batch),'redirects':1,
                'prop':'pageimages|categories|pageprops','piprop':'name|original','cllimit':30,'clshow':'!hidden','maxlag':5}
        url='https://en.wikipedia.org/w/api.php?'+urllib.parse.urlencode(params)
        data,errors=request(url)
        if data is None:
            for n in batch:cached[n]={'error':errors,'lookup_url':url}
        else:
            query=data.get('query',{});mapping={x['from']:x['to'] for x in query.get('normalized',[])+query.get('redirects',[])}
            pages={p['title']:p for p in query.get('pages',{}).values()}
            for n in batch:
                resolved=n;visited=set()
                while resolved in mapping and resolved not in visited:
                    visited.add(resolved);resolved=mapping[resolved]
                page=pages.get(resolved,{})
                categories=' '.join(c['title'] for c in page.get('categories',[]))
                foodish=bool(re.search(r'food|dish|cuisin|dessert|sauce|soup|cake|bread|pastr|sandwich|beverage|drink|cocktail|stew|salad|snack|pie|cookie|candy|confection|rice|noodle|meat|sausage|egg|cheese|breakfast|dip|dumpling|casserole|pasta|pizza|muffin|biscuit|fudge|jelly|ice cream|chili|fried|baked|roast|coffee|tea|liqueur|spirit|wine|beer|milk|culinary',categories,re.I))
                cached[n]={'resolved_title':page.get('title'),'file':page.get('pageimage') if foodish else None,
                           'categories':categories,'foodish':foodish,'lookup_url':url}
        save(work/'wiki-title-lookups.json',cached)
        print(f'Title batch {min(start+45,len(todo))}/{len(todo)}',flush=True)
        if STOP.is_set():break
    filenames=sorted({x['file'].replace('_',' ') for x in cached.values() if x.get('file')})
    metadata=load(work/'commons-file-lookups.json',{})
    pending=[n for n in filenames if n not in metadata or metadata[n].get('error') or
             not (metadata[n].get('imageinfo') or [{}])[0].get('mime')]
    print(f'{len(filenames)} article image filenames, {len(pending)} metadata lookups pending',flush=True)
    for start in range(0,len(pending),40):
        batch=pending[start:start+40]
        params={'action':'query','format':'json','titles':'|'.join('File:'+n for n in batch),
                'prop':'imageinfo','iiprop':'url|extmetadata|size|sha1|mime','iiurlwidth':1000,'maxlag':5}
        url=API+'?'+urllib.parse.urlencode(params)
        data,errors=request(url)
        if data is None:
            for n in batch:metadata[n]={'error':errors,'lookup_url':url}
        else:
            for page in data.get('query',{}).get('pages',{}).values():
                metadata[page['title'].removeprefix('File:')]={**page,'lookup_url':url}
        save(work/'commons-file-lookups.json',metadata)
        print(f'Metadata batch {min(start+40,len(pending))}/{len(pending)}',flush=True)
        if STOP.is_set():break
    results={}
    for row in rows:
        files=list(dict.fromkeys(cached[n]['file'].replace('_',' ') for n in names[row['slug']] if cached.get(n,{}).get('file')))
        pages={str(i):metadata[n] for i,n in enumerate(files) if n in metadata and not metadata[n].get('error')}
        params={'action':'query','format':'json','titles':'|'.join('File:'+n for n in files),'prop':'imageinfo','iiprop':'url|extmetadata|size|mime','iiurlwidth':1000}
        r=search_one(row,rejects,used,params_override=params,data_override={'query':{'pages':pages}})
        r['method']='Exact/alias Wikipedia article and redirect lookup, then Commons file metadata'
        r['looked_up_titles']=names[row['slug']]
        errors=[cached.get(n,{}).get('error') for n in names[row['slug']] if cached.get(n,{}).get('error')]
        if not pages and errors:
            r['status']='unverified_search';r['errors']=errors
        elif not files:
            r['status']='no_article_photo_found_in_title_lookup'
        results[row['slug']]=r
    save(work/'lead-search.json',results)
    # Stage reads a unified candidate file; preserve the first text-search evidence.
    original=load(work/'search.json',{})
    if original and not (work/'search-initial.json').exists():save(work/'search-initial.json',original)
    for slug,row in results.items():
        old=original.get(slug,{})
        seen=set()
        row['candidates']=[c for c in row['candidates']+old.get('candidates',[]) if not (c['page'] in seen or seen.add(c['page']))]
        if row['candidates']:row['status']='candidates_need_visual_review'
    save(work/'search.json',results)
    print(f'Lead lookup complete: {len(results)} recipes, {sum(bool(x["candidates"]) for x in results.values())} with candidates',flush=True)


def categories(work):
    """Batch category existence lookup, then bounded files from real categories.
    Records empty/missing categories separately from failed requests. Full-text
    search being unavailable never becomes evidence that no photo exists.
    """
    rows,rejects,used=inventory()
    wiki=load(work/'wiki-title-lookups.json',{})
    names={}
    for row in rows:
        aliases=row.get('aliases') or []
        if isinstance(aliases,str):aliases=[aliases]
        base=[row['title'],row['title'][:1]+row['title'][1:].lower()]+aliases[:2]
        base += [wiki[n]['resolved_title'] for n in list(base) if n in wiki and wiki[n].get('foodish') and wiki[n].get('resolved_title')]
        names[row['slug']]=list(dict.fromkeys('Category:'+n.replace('_',' ') for n in base if isinstance(n,str) and len(n)<110))
    all_names=list(dict.fromkeys(n for ns in names.values() for n in ns))
    cached=load(work/'category-existence.json',{})
    pending=[n for n in all_names if n not in cached or cached[n].get('error')]
    print(f'{len(rows)} recipes; {len(pending)} category title lookups pending',flush=True)
    for start in range(0,len(pending),45):
        batch=pending[start:start+45]
        params={'action':'query','format':'json','titles':'|'.join(batch),'prop':'categoryinfo','redirects':1,'maxlag':5}
        url=API+'?'+urllib.parse.urlencode(params);data,errors=request(url)
        if data is None:
            for n in batch:cached[n]={'error':errors}
        else:
            q=data.get('query',{});mapping={x['from']:x['to'] for x in q.get('normalized',[])+q.get('redirects',[])}
            pages={p['title']:p for p in q.get('pages',{}).values()}
            for n in batch:
                resolved=n;seen=set()
                while resolved in mapping and resolved not in seen:seen.add(resolved);resolved=mapping[resolved]
                page=pages.get(resolved,{})
                cached[n]={'resolved_title':resolved,'info':page.get('categoryinfo',{}),'lookup_url':url}
        save(work/'category-existence.json',cached)
        if start%225==0:print(f'Category existence {min(start+45,len(pending))}/{len(pending)}',flush=True)
        if STOP.is_set():break
    existing=sorted({x['resolved_title'] for x in cached.values() if x.get('info',{}).get('files',0)>0})
    files=load(work/'category-files.json',{})
    pending=[n for n in existing if n not in files or files[n].get('error')]
    print(f'{len(existing)} nonempty file categories; {len(pending)} bounded category requests pending',flush=True)
    for i,cat in enumerate(pending,1):
        params={'action':'query','format':'json','generator':'categorymembers','gcmtitle':cat,'gcmtype':'file',
                'gcmlimit':30,'prop':'imageinfo','iiprop':'url|extmetadata|size|sha1|mime','iiurlwidth':1000,'maxlag':5}
        url=API+'?'+urllib.parse.urlencode(params);data,errors=request(url)
        files[cat]={'data':data,'error':errors,'lookup_url':url}
        save(work/'category-files.json',files)
        print(f'Category files {i}/{len(pending)} {cat}',flush=True)
        if STOP.is_set():break
    results=load(work/'search.json',{})
    for row in rows:
        candidates=[];counts={};lookups=[];errors=[]
        for name in names[row['slug']]:
            cat=cached.get(name,{}).get('resolved_title',name)
            if cat not in files:continue
            record=files[cat];lookups.append(record['lookup_url'])
            if record.get('error'):errors.extend(record['error']);continue
            params={'action':'query','format':'json','generator':'categorymembers','gcmtitle':cat,'gcmtype':'file','gcmlimit':30}
            parsed=search_one(row,rejects,used,params_override=params,data_override=record['data'])
            candidates.extend(parsed['candidates'])
            for k,v in parsed['filter_counts'].items():counts[k]=counts.get(k,0)+v
        record=results.get(row['slug'],{'slug':row['slug'],'title':row['title'],'candidates':[]})
        seen=set();all_candidates=candidates+record['candidates']
        all_candidates.sort(key=lambda c:-c.get('score',0))
        record['candidates']=[c for c in all_candidates if not(c['page'] in seen or seen.add(c['page']))][:4]
        record['category_titles_checked']=names[row['slug']]
        record['category_requests']=lookups;record['category_filter_counts']=counts
        record['category_errors']=errors
        if record['candidates']:record['status']='candidates_need_visual_review'
        results[row['slug']]=record
    save(work/'search.json',results)
    print(f'Category lookup complete; {sum(bool(x["candidates"]) for x in results.values())} recipes with candidates',flush=True)


def search(work, limit):
    rows, rejects, used = inventory()
    save(work / 'missing-at-start.json', rows)
    existing = load(work / 'search.json', {})
    pending = [r for r in rows if not existing.get(r['slug'], {}).get('fulltext_completed') or
               existing.get(r['slug'], {}).get('archive_query') != query_for(r)]
    if limit:
        pending = pending[:limit]
    print(f'{len(rows)} missing; {len(pending)} queries pending; 2 workers, max ~1.4 requests/s',flush=True)
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
        jobs = {pool.submit(search_one,r,rejects,used):r for r in pending}
        for n, future in enumerate(concurrent.futures.as_completed(jobs),1):
            record = future.result()
            previous = existing.get(record['slug'], {})
            seen = set()
            previous_candidates = (previous.get('candidates', []) if
                                   previous.get('archive_query') == record['archive_query'] else [])
            candidates = sorted(previous_candidates + record['candidates'],
                                key=lambda c: -c.get('score', 0))
            candidates = [c for c in candidates if not
                          (c['page'] in seen or seen.add(c['page']))][:4]
            existing[record['slug']] = {**previous, **record,
                'candidates': candidates,
                'fulltext_completed': not record.get('errors')}
            if candidates:
                existing[record['slug']]['status'] = 'candidates_need_visual_review'
            save(work / 'search.json', existing)
            if n%25==0 or record['candidates']:
                print(f'{n}/{len(pending)} {record["slug"]}: {len(record["candidates"])} candidates',flush=True)
    print('Search complete',flush=True)


def stage(work, limit, candidates_per_recipe=2):
    records = load(work / 'search.json', {})
    staged = load(work / 'staged.json', {})
    files = work / 'files'
    files.mkdir(parents=True, exist_ok=True)
    done = 0
    for slug, row in records.items():
        for i,c in enumerate(row['candidates'][:candidates_per_recipe],1):
            # Candidate order can change after another source is queried. Keys
            # identify the actual source page, never a mutable ranking position.
            key = f'{slug}--{hashlib.sha256(c["page"].encode()).hexdigest()[:8]}'
            if any(v.get('slug')==slug and v.get('page')==c['page'] and v.get('downloaded') for v in staged.values()):
                continue
            if limit and done>=limit:
                save(work/'staged.json',staged);return
            # The same false-positive file can occur under several recipes.
            # Reuse identical archive bytes without making another request;
            # this does not imply approval for either recipe.
            cached = next((v for v in staged.values() if v.get('downloaded') and
                           c.get('original_sha1') and
                           v.get('original_sha1') == c['original_sha1'] and
                           v.get('url') == c['url'] and Path(v['path']).is_file()), None)
            body, errors = ((Path(cached['path']).read_bytes(), []) if cached else
                            request(c['url'], binary=True))
            entry = {**c,'slug':slug,'recipe_title':row['title'],'key':key,'download_errors':errors}
            if body:
                try:
                    im = Image.open(io.BytesIO(body));im.load()
                    if im.width<500 or im.height<380:
                        raise ValueError('download smaller than required')
                    # Raw archive bytes are retained for full-size visual review.
                    dest=files/(key+'.'+('png' if im.format=='PNG' else 'webp' if im.format=='WEBP' else 'jpg'))
                    dest.write_bytes(body)
                    entry.update(downloaded=True,path=str(dest),download_sha256=hashlib.sha256(body).hexdigest(),
                                 downloaded_width=im.width,downloaded_height=im.height)
                    print('Staged '+key,flush=True)
                except Exception as e:entry.update(downloaded=False,download_errors=[str(e)])
            else:entry['downloaded']=False
            staged[key]=entry;done+=1
            save(work/'staged.json',staged)


def sheets(work):
    rows=[x for x in load(work/'staged.json',{}).values() if x.get('downloaded')]
    directory=work/'sheets';directory.mkdir(exist_ok=True)
    font_path='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
    font=ImageFont.truetype(font_path,13)
    for n,start in enumerate(range(0,len(rows),20),1):
        subset=rows[start:start+20];sheet=Image.new('RGB',(1200,5*245),'#ffffff');draw=ImageDraw.Draw(sheet)
        for k,row in enumerate(subset):
            x=(k%4)*300;y=(k//4)*245
            im=Image.open(row['path']).convert('RGB');im.thumbnail((290,175));sheet.paste(im,(x+(300-im.width)//2,y))
            draw.text((x+5,y+178),row['key'][:40],fill='black',font=font)
            draw.text((x+5,y+198),row['licence'][:30]+' | '+row['author'][:20],fill='black',font=font)
            draw.text((x+5,y+218),row['title'][:39],fill='black',font=font)
        sheet.save(directory/f'sheet-{n:03d}.jpg',quality=90)
    print(f'{len(rows)} downloaded candidates, {n if rows else 0} contact sheets')


def main():
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('command',choices=['search','leads','categories','stage','sheets'])
    p.add_argument('--work',required=True)
    p.add_argument('--limit',type=int)
    p.add_argument('--candidates-per-recipe',type=int,choices=range(1,5),default=2)
    a=p.parse_args();work=Path(a.work);work.mkdir(parents=True,exist_ok=True)
    if a.command=='search':search(work,a.limit)
    elif a.command=='leads':leads(work)
    elif a.command=='categories':categories(work)
    elif a.command=='stage':stage(work,a.limit,a.candidates_per_recipe)
    else:sheets(work)


if __name__=='__main__':main()
