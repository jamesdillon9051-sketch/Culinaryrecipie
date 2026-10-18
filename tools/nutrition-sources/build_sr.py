import csv, json, sys
import os
D=sys.argv[1].rstrip('/')+'/'  # the unzipped FoodData_Central_sr_legacy_food_csv_2018-04 folder
OUT=sys.argv[2] if len(sys.argv)>2 else 'sr.json'
NUT={'1003':'p','1004':'f','1005':'c','1008':'kcal','1018':'alc','1079':'fibre','1091':'ph','1092':'k','1093':'na','2000':'sugar'}
foods={}
with open(D+'food.csv',newline='',encoding='utf-8') as fh:
    for r in csv.DictReader(fh):
        foods[r['fdc_id']]={'id':int(r['fdc_id']),'desc':r['description'],'cat':r['food_category_id'],'n':{},'portions':[]}
cats={}
with open(D+'food_category.csv',newline='',encoding='utf-8') as fh:
    for r in csv.DictReader(fh): cats[r['id']]=r['description']
ndb={}
with open(D+'sr_legacy_food.csv',newline='',encoding='utf-8') as fh:
    for r in csv.DictReader(fh): ndb[r['fdc_id']]=int(r['NDB_number'])
with open(D+'food_nutrient.csv',newline='',encoding='utf-8') as fh:
    for r in csv.DictReader(fh):
        k=NUT.get(r['nutrient_id'])
        if k and r['fdc_id'] in foods: foods[r['fdc_id']]['n'][k]=float(r['amount'])
with open(D+'food_portion.csv',newline='',encoding='utf-8') as fh:
    for r in csv.DictReader(fh):
        f=foods.get(r['fdc_id'])
        if f and r['gram_weight']:
            f['portions'].append({'amt':float(r['amount'] or 1),'desc':(r['portion_description'] or r['modifier'] or '').strip(),'g':float(r['gram_weight'])})
out=[]
for k,f in foods.items():
    if k not in ndb: continue
    f['ndb']=ndb[k]; f['cat']=cats.get(f['cat'],f['cat']); out.append(f)
json.dump(out,open(OUT,'w'),separators=(',',':'))
print(len(out), sum(1 for f in out if 'k' in f['n']), sum(1 for f in out if 'alc' in f['n']))
