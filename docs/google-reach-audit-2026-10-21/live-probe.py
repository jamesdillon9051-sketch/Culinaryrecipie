import sys,json,pathlib,random,collections,concurrent.futures,threading,time,urllib.request,urllib.error,hashlib,gzip,datetime
import argparse
cli=argparse.ArgumentParser(description='Read-only stratified audit: two workers, max two request starts per second, bounded retries.')
cli.add_argument('--root',type=pathlib.Path,default=pathlib.Path(__file__).resolve().parents[2])
cli.add_argument('--out',type=pathlib.Path,required=True)
args=cli.parse_args();ROOT=args.root.resolve();OUT=args.out.resolve();OUT.mkdir(parents=True,exist_ok=True);sys.path.insert(0,str(ROOT/'tools'))
from crawl_static import parse_html,summary
m=json.loads((OUT/'manifest.json').read_text());routes=m['routes'];by={r['route']:r for r in routes};rng=random.Random(20261021)
selected=['/','/recipes/','/search/','/about/','/contact/','/site-directory/','/image-credits/','/categories/','/cuisines/','/ingredients/']
selected+=['/recipes/'+s+'/' for s in ['baked-peaches-with-cinnamon','leche-flan','trenette-al-pesto','edible-cookie-dough','cookie-dough-bites','cookie-dough-bars','aioli','margherita-pizza','lasagna-bolognese','macarons','aguachile','miso-ramen','makdous','betengan-mekhalel','giardiniera'] if '/recipes/'+s+'/' in by]
for typ in sorted(set(r['type'] for r in routes)):
 pool=[r['route'] for r in routes if r['type']==typ and r['route'] not in selected]
 selected+=rng.sample(pool,min(12 if typ=='recipe' else 4,len(pool)))
for key in ['classic','bistro','magazine','minimal','modern','editorial']:
 pool=[r for r in routes if r.get('layout')==key]
 if pool:selected.append(pool[0]['route'])
selected += [r['route'] for r in routes if r.get('untimed')][:3]
selected += [r['route'] for r in routes if r['type']=='recipe' and not r.get('image')][:3]
selected += ['/cuisines/bolivian/','/cuisines/uruguayan/','/categories/baking/italian/','/categories/dinner/italian/','/ingredients/chicken/']
targets=[('https://weeklydelight.com'+s,'page') for s in selected]
targets += [('https://weeklydelight.com/'+f.name,'xml') for f in ROOT.glob('sitemap*.xml')]
targets += [('https://weeklydelight.com/robots.txt','robots')]
for path in ['/','/recipes/baked-peaches-with-cinnamon/','/categories/baking/italian/']:
 for host in ['http://weeklydelight.com','http://www.weeklydelight.com','https://www.weeklydelight.com']:
  targets.append((host+path,'redirect'))
for path in ['/recipes/baked-peaches-with-cinnamon','/recipes/baked-peaches-with-cinnamon/index.html','/no-such-page-owner-audit-20261021/','/recipes/no-such-recipe-owner-audit-20261021/','/favourites/','/404.html','/contact/success/']:
 targets.append(('https://weeklydelight.com'+path,'probe'))
photos=json.loads((ROOT/'docs/recipe-photos-2026-10-20/selected.json').read_text())
# Selection file is a list of independently reviewed recipe photographs.
for r in photos:
 s=r['slug'];targets.append(('https://weeklydelight.com/assets/img/recipes/'+s+'.webp','image'))
for s in ['leche-flan','baked-peaches-with-cinnamon','trenette-al-pesto','lasagna-bolognese']:
 targets.append(('https://weeklydelight.com/assets/img/recipes/'+s+'.jpg','image'))
targets=list(dict.fromkeys(targets));(OUT/'live-targets.json').write_text(json.dumps(targets,indent=2)+'\n');lock=threading.Lock();next_start=0
class Redirects(urllib.request.HTTPRedirectHandler):
 def __init__(self):super().__init__();self.chain=[]
 def redirect_request(self,req,fp,code,msg,headers,newurl):
  pace();self.chain.append({'status':code,'from':req.full_url,'to':newurl});return super().redirect_request(req,fp,code,msg,headers,newurl)
def pace():
 global next_start
 with lock:
  due=max(time.monotonic(),next_start);next_start=due+.5
 time.sleep(max(0,due-time.monotonic()))
def fetch(target):
 url,kind=target;previous=[]
 for attempt in range(3):
  pace();red=Redirects();req=urllib.request.Request(url,method='HEAD' if kind=='image' else 'GET',headers={'User-Agent':'WeeklyDelight-OwnerAudit/1.1 (read-only technical review)','Accept-Encoding':'gzip'})
  try:
   start=time.monotonic()
   try:r=urllib.request.build_opener(red).open(req,timeout=35)
   except urllib.error.HTTPError as e:r=e
   with r:
    data=r.read(3000000);headers={k.lower():v for k,v in r.headers.items()};body=gzip.decompress(data) if headers.get('content-encoding')=='gzip' else data
    result={'url':url,'kind':kind,'status':r.code,'final_url':r.url,'redirects':red.chain,'content_type':headers.get('content-type'),'x_robots_tag':r.headers.get_all('X-Robots-Tag',[]),'content_encoding':headers.get('content-encoding'),'cache_control':headers.get('cache-control'),'server':headers.get('server'),'seconds':round(time.monotonic()-start,3),'checked_at':datetime.datetime.now(datetime.timezone.utc).isoformat(),'attempts':attempt+1,'previous':previous,'transfer_bytes':len(data),'decoded_bytes':len(body)}
    if kind=='image':result['content_length']=headers.get('content-length')
    if body:
     result['sha256']=hashlib.sha256(body).hexdigest();filename=hashlib.sha256(url.encode()).hexdigest()[:20]+('.html' if kind in ['page','probe','redirect'] else '.txt');(OUT/'live-html').mkdir(exist_ok=True);(OUT/'live-html'/filename).write_bytes(body);result['body_file']='live-html/'+filename
     if kind in ['page','probe','redirect']:result.update(summary(parse_html(body.decode('utf-8',errors='replace'))))
     local=ROOT/('/'.join(urllib.parse.urlsplit(r.url).path.split('/')[1:]) or 'index.html')
     if local.is_dir():local=local/'index.html'
     result['matches_repository']=local.is_file() and local.read_bytes()==body
    if r.code not in [429,500,502,503,504] or attempt==2:return result
    previous.append({'status':r.code});time.sleep(min(30,max(5,int(headers.get('retry-after','5')))))
  except Exception as e:
   previous.append({'transport_error':type(e).__name__+': '+str(e)})
   if attempt<2:time.sleep(3*(attempt+1))
 return {'url':url,'kind':kind,'status':None,'previous':previous}
print('targets',len(targets),collections.Counter(t[1] for t in targets),flush=True)
with (OUT/'live.jsonl').open('w') as f,concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
 for i,row in enumerate(pool.map(fetch,targets),1):
  f.write(json.dumps(row,ensure_ascii=False)+'\n');f.flush()
  if i%25==0 or row.get('status') not in [200,404]:print(i,row['status'],row['url'],flush=True)
