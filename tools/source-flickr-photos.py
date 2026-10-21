#!/usr/bin/env python3
"""Read-only, resumable search of Flickr's public commercial/adaptable photos.

No API key, account or publication. Parse only public photo model metadata,
never bootstrap configuration. Search filters do not replace per-photo licence
and full-size recipe/diet/crop review before adoption. Uses existing processing
and licence gates; no image generation or weakening of existing checks.

python tools/source-flickr-photos.py --work /tmp/flickr-review [--limit 20]
"""
import argparse
import concurrent.futures
import datetime
import gzip
import hashlib
import importlib.util
import json
from pathlib import Path
import re
import sys
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
import fetch_images as F

ROOT=Path(__file__).resolve().parents[1]
UA='WeeklyDelightPhotoReview/1.1 (https://weeklydelight.com/contact/; licensed photograph sourcing)'
# Flickr numeric IDs for commercial/adaptable CC licences. Selection is always
# rechecked against the public photo page, including its linked licence deed.
LICENCES={4:('CC BY 2.0','https://creativecommons.org/licenses/by/2.0/'),
          5:('CC BY-SA 2.0','https://creativecommons.org/licenses/by-sa/2.0/'),
          9:('CC0 1.0','https://creativecommons.org/publicdomain/zero/1.0/'),
          10:('Public domain','https://creativecommons.org/publicdomain/mark/1.0/'),
          11:('CC BY 4.0','https://creativecommons.org/licenses/by/4.0/'),
          12:('CC BY-SA 4.0','https://creativecommons.org/licenses/by-sa/4.0/')}
LOCK=threading.Lock();NEXT=0;PAUSE=0;STOP=threading.Event()

def pace():
    global NEXT
    with LOCK:
        due=max(time.monotonic(),NEXT,PAUSE);NEXT=due+1.05
    time.sleep(max(0,due-time.monotonic()))

def request(url):
    global PAUSE
    errors=[]
    for attempt in range(3):
        if STOP.is_set():return None,['Search stopped after access challenge; not attempted']
        pace()
        try:
            req=urllib.request.Request(url,headers={'User-Agent':UA,'Accept-Encoding':'gzip'})
            with urllib.request.urlopen(req,timeout=30) as r:
                body=r.read(2_500_001)
                if len(body)>2_500_000:return None,['Response exceeds 2.5 MB budget']
                if r.headers.get('content-encoding')=='gzip':body=gzip.decompress(body)
                return body.decode('utf-8'),[]
        except urllib.error.HTTPError as e:
            errors.append(f'HTTP {e.code}')
            if e.code in (401,403):STOP.set();return None,errors
            if e.code in (429,500,502,503,504):
                try:delay=min(60,max(10,int(e.headers.get('Retry-After','10'))))
                except ValueError:delay=10
                with LOCK:PAUSE=max(PAUSE,time.monotonic()+delay)
                continue
            return None,errors
        except Exception as e:
            errors.append(type(e).__name__+': '+str(e));time.sleep(2*(attempt+1))
    return None,errors

def photo_models(html):
    """Extract only the public photo records from the embedded model export."""
    marker=re.search(r'\bmodelExport:\s*',html)
    if not marker:raise ValueError('No public photo-model export; search not verified')
    value=json.JSONDecoder().raw_decode(html[marker.end():])[0]
    main=value.get('main',{})
    if 'search-photos-lite-models' in main and not main['search-photos-lite-models']:
        raise ValueError('Empty search model: public search response does not verify zero results')
    found={}
    def walk(v):
        if isinstance(v,dict):
            if v.get('_flickrModelRegistry') in ('photo-lite-models','photo-models') and isinstance(v.get('license'),int) and re.fullmatch(r'\d+',str(v.get('id',''))):
                found[v['id']]=v
            for child in v.values():walk(child)
        elif isinstance(v,list):
            for child in v:walk(child)
    walk(value)
    return list(found.values())

def candidates(models,row,used):
    used={page.rstrip('/') for page in used}
    result=[];reasons={}
    def skip(reason):reasons[reason]=reasons.get(reason,0)+1
    for p in models:
        if p['license'] not in LICENCES:skip('licence_not_commercial_and_adaptable');continue
        title=F.strip_html(p.get('title') or '')
        description=F.strip_html(p.get('description') or '')
        text=title+' '+description
        if not text.strip():skip('no_caption_to_verify_dish');continue
        if F.BAD_TOKENS.search(title):skip('not_a_prepared_dish_title');continue
        if re.search(r'\b(?:AI[- ]generated|artificial intelligence|Midjourney|DALL[- ]?E|Stable Diffusion)\b',text,re.I):skip('generated_image_metadata');continue
        if F.contradicts_diet(text[:1200],row['title'],row['tags']):skip('diet_conflict_in_caption');continue
        owner=p.get('ownerNsid')
        if not owner or not re.fullmatch(r'[\w@-]+',owner):skip('unverified_owner');continue
        page=f"https://www.flickr.com/photos/{owner}/{p['id']}/"
        if page.rstrip('/') in used:skip('already_used_source');continue
        author=p.get('realname') or p.get('username')
        if not author or str(author).casefold() in ['unknown','own work','self']:skip('missing_author');continue
        licence,licence_url=LICENCES[p['license']]
        if not F.OK_LICENCE.match(licence):skip('existing_licence_gate');continue
        sizes=[]
        for val in p.get('sizes',{}).get('data',{}).values():
            size=val.get('data',{});url=size.get('url') or size.get('displayUrl') or ''
            if url.startswith('//'):url='https:'+url
            host=urllib.parse.urlsplit(url).hostname or ''
            if host!='live.staticflickr.com' and not re.fullmatch(r'farm\d+\.staticflickr\.com',host):continue
            if size.get('width',0)>=500 and size.get('height',0)>=380:sizes.append({**size,'url':url})
        if not sizes:skip('no_suitable_published_resolution');continue
        bounded=[s for s in sizes if max(s['width'],s['height'])<=1600]
        chosen=max(bounded or sizes,key=lambda s:s['width']*s['height'])
        aliases=row.get('aliases') or [];aliases=[aliases] if isinstance(aliases,str) else aliases
        score=max(F.relevance(text,q) for q in [row['title']]+aliases if q)
        if score<.6:skip('low_caption_relevance');continue
        result.append({'title':title or row['title']+' (captioned photograph)','description':description[:1800],
            'author':author,'author_url':f'https://www.flickr.com/people/{owner}/','page':page,'source':'Flickr',
            'licence':licence,'licence_url':licence_url,'flickr_license_id':p['license'],'flickr_id':p['id'],
            'url':chosen['url'],'original_url':chosen['url'],'original_width':chosen['width'],
            'original_height':chosen['height'],'score':score,'metadata_status':'search metadata; individual photo page review required'})
    result.sort(key=lambda c:-c['score'])
    return result[:5],reasons

def search_one(row,used):
    url='https://www.flickr.com/search/?'+urllib.parse.urlencode({'text':row['title'],'license':','.join(map(str,LICENCES))})
    html,errors=request(url)
    base={'slug':row['slug'],'title':row['title'],'cuisine':row['cuisine'],'tags':row['tags'],'in_supplied_export':row['in_export'],'search_url':url,'checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'errors':errors,'candidates':[]}
    if html is None:return {**base,'status':'unverified_search'}
    try:
        models=photo_models(html);photos,filters=candidates(models,row,used)
        return {**base,'status':'candidates_need_visual_review' if photos else 'no_eligible_candidate_in_bounded_search','candidates':photos,'raw_result_count':len(models),'filter_counts':filters}
    except (ValueError,KeyError,TypeError) as e:return {**base,'status':'unverified_search','errors':[str(e)]}

def main():
    parser=argparse.ArgumentParser(description=__doc__);parser.add_argument('--work',type=Path,required=True);parser.add_argument('--limit',type=int);args=parser.parse_args();args.work.mkdir(parents=True,exist_ok=True)
    spec=importlib.util.spec_from_file_location('sources',Path(__file__).with_name('source-missing-photos.py'));S=importlib.util.module_from_spec(spec);spec.loader.exec_module(S)
    rows,rejects,used=S.inventory();S.save(args.work/'missing-at-start.json',rows);old=S.load(args.work/'search.json',{})
    pending=[r for r in rows if r['slug'] not in old or old[r['slug']].get('status')=='unverified_search']
    if args.limit:pending=pending[:args.limit]
    print(f'{len(rows)} missing; {len(pending)} Flickr searches pending; two workers, <1 request/s overall',flush=True)
    # Bound submissions so a failed known-positive control stops later batches.
    controls=[]
    with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
        for start in range(0,len(pending),50):
            control_url='https://www.flickr.com/search/?'+urllib.parse.urlencode({'text':'Beef Ragu','license':','.join(map(str,LICENCES))})
            html,errors=request(control_url)
            try:
                if html is None:raise ValueError('Known-positive control unavailable')
                models=photo_models(html)
                if not models:raise ValueError('Known-positive control has no public photos')
                controls.append({'url':control_url,'raw_photos':len(models),'before_query':start+1,'checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat()})
                S.save(args.work/'search-controls.json',controls)
            except ValueError as e:
                S.save(args.work/'failed-positive-control.json',{'url':control_url,'errors':errors+[str(e)],'checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat()})
                print('Search unavailable: positive control failed; no further catalogue requests',flush=True);break
            for i,result in enumerate(pool.map(lambda r:search_one(r,used),pending[start:start+50]),start+1):
                result['candidates']=[c for c in result['candidates'] if c['page'] not in rejects.get(result['slug'],set())]
                old[result['slug']]=result;S.save(args.work/'search.json',old)
                if i%25==0 or result['candidates']:print(f'{i}/{len(pending)} {result["slug"]}: {len(result["candidates"])} candidates',flush=True)
            if STOP.is_set():print('Access challenge: stopped without retrying other queries',flush=True);break
    print('Finished; search results are not publication approval',flush=True)

if __name__=='__main__':main()
