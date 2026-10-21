#!/usr/bin/env python3
"""Guard against false empty results and accidental adoption of paid ad images."""
import importlib.util,json
from pathlib import Path
spec=importlib.util.spec_from_file_location('K',Path(__file__).with_name('source-flickr-photos.py'));K=importlib.util.module_from_spec(spec);spec.loader.exec_module(K)
def html(main):return '<script>modelExport: '+json.dumps({'main':main})+'</script>'
photo={'_flickrModelRegistry':'photo-lite-models','id':'123','license':4,'ownerNsid':'456@N00','realname':'Named photographer','title':'Cajun salmon','sizes':{'data':{'l':{'data':{'url':'//live.staticflickr.com/1/123_secret_b.jpg','width':1024,'height':768}}}}}
main={'search-photos-lite-models':[{'data':{'photos':{'data':{'_data':[{'data':photo}]}}}}],'photo-lite-models':[{'data':'~0'}],'getty-search-models':[{'data':{'images':[{'id':'999','url':'https://media.istockphoto.com/example.jpg'}]}}]}
assert K.photo_models(html(main))==[photo]
for bad in [html({'search-photos-lite-models':[],'photo-lite-models':[],'getty-search-models':[{'images':['paid ad']}] }),'<html>Access challenge</html>']:
 try:K.photo_models(bad)
 except ValueError:pass
 else:raise AssertionError('Unverified response was mistaken for a successful empty search')
row={'title':'Cajun Salmon','tags':['Dairy-Free']};rows,reasons=K.candidates([photo],row,set());assert len(rows)==1 and rows[0]['licence']=='CC BY 2.0';assert rows[0]['url'].startswith('https://live.staticflickr.com/')
for changes in [{'license':2},{'realname':None,'username':None},{'sizes':{'data':{'l':{'data':{'url':'https://media.istockphoto.com/paid.jpg','width':1024,'height':768}}}}}]:
 assert K.candidates([{**photo,**changes}],row,set())[0]==[]
assert K.candidates([photo],row,{rows[0]['page']})[0]==[]
assert K.candidates([photo],row,{rows[0]['page'].rstrip('/')})[0]==[]
print('Flickr sourcing: public photo extraction, false-empty rejection, paid-ad exclusion, licence, credit and download-host guards pass')
