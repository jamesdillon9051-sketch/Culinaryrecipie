import importlib.util,json,re,sys,datetime,concurrent.futures,urllib.parse
from pathlib import Path
sys.path.insert(0,'REPO_ROOT/tools')
def load(name,file):
    spec=importlib.util.spec_from_file_location(name,file);m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m);return m
FL=load('fl','REPO_ROOT/tools/source-flickr-photos.py')
S=load('sm','REPO_ROOT/tools/source-missing-photos.py')
SP=Path(sys.argv[1]);work=SP/'flickr2'
MOD=re.compile(r"^(?:slow[- ]cooker|crock[- ]?pot|instant pot|air[- ]fryer|one[- ](?:pot|pan)|sheet[- ]pan|easy|quick|simple|classic|homemade|best|perfect|healthy|skillet|stovetop|oven[- ]baked|\d+[- ](?:minute|ingredient)s?)\s+",re.I)
def alt_titles(t):
    out=[]
    a=t
    while True:
        b=MOD.sub('',a)
        if b==a:break
        a=b
    if a!=t and len(a.split())>=1:out.append(a)
    for x in [t,a]:
        m=re.split(r'\s+(?:with|and|in|on)\s+',x,1)
        if len(m)==2 and len(m[0].split())>=2:out.append(m[0])
    # keep order, drop dups and the original
    seen=set([t.lower()]);res=[]
    for x in out:
        if x.lower() not in seen:seen.add(x.lower());res.append(x)
    return res[:2]
rows,rejects,used=S.inventory()
prev=json.load(open(SP/'flickr/search.json'))
seenpages={c['page'] for r in prev.values() for c in r.get('candidates',[])}|{c['page'] for c in json.load(open(SP/'flickr/staged.json')).values()}
old=S.load(work/'search.json',{})
jobs=[]
for r in rows:
    for i,a in enumerate(alt_titles(r['title'])):
        key=r['slug']+'#'+str(i)
        if key in old:continue
        jobs.append((key,r,a))
print(len(rows),'missing;',len(jobs),'alternative-title searches pending',flush=True)
def run(job):
    key,r,a=job
    row=dict(r);al=row.get('aliases') or [];al=[al] if isinstance(al,str) else list(al)
    row['aliases']=al+[r['title']];row['title']=a
    res=FL.search_one(row,used|seenpages)
    res['query_title']=a;res['original_title']=r['title'];res['slug']=r['slug']
    return key,res
ctl=0
with concurrent.futures.ThreadPoolExecutor(max_workers=2) as pool:
    for start in range(0,len(jobs),50):
        url='https://www.flickr.com/search/?'+urllib.parse.urlencode({'text':'Beef Ragu','license':','.join(map(str,FL.LICENCES))})
        html,err=FL.request(url)
        try:
            if html is None or not FL.photo_models(html):raise ValueError('control failed')
        except ValueError as e:
            print('positive control failed; stopping',err,flush=True);break
        for i,(key,res) in enumerate(pool.map(run,jobs[start:start+50]),start+1):
            res['candidates']=[c for c in res['candidates'] if c['page'] not in rejects.get(res['slug'],set())]
            old[key]=res;S.save(work/'search.json',old)
            if res['candidates']:print(f'{i}/{len(jobs)} {key} [{res["query_title"]}]: {len(res["candidates"])}',flush=True)
        if FL.STOP.is_set():print('stopped: access challenge',flush=True);break
print('Finished',flush=True)
