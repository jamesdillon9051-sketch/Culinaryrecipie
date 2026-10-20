#!/usr/bin/env python3
"""Regression for the confirmed Commons grouped-query false-zero defect."""
import importlib.util
from pathlib import Path
spec=importlib.util.spec_from_file_location('photo_sources',Path(__file__).with_name('source-missing-photos.py'))
S=importlib.util.module_from_spec(spec);spec.loader.exec_module(S)
assert S.query_for({'title':'Oatcakes'})=='Oatcakes filetype:bitmap'
assert S.query_for({'title':'Gooseberry Fool'})=='Gooseberry Fool filetype:bitmap'
assert S.query_for({'title':'Cod in Parsley Sauce'})=='Cod Parsley Sauce filetype:bitmap'
assert S.query_for({'title':'Lemon & Poppy-Seed Cake'})=='Lemon Poppy-Seed Cake filetype:bitmap'
for title in ['Oatcakes','Gooseberry Fool','Chicken (Lemon)','Fish or Chips']:
    query=S.query_for({'title':title})
    assert not any(char in query for char in '()"'),query
    assert ' OR ' not in query,query
    assert query.endswith(' filetype:bitmap'),query
print('16 photo-sourcing checks passed (offline; live archive controls are separate evidence)')
