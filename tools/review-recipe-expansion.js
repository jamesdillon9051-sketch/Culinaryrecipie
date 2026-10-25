#!/usr/bin/env node
'use strict';
/* A research screen, never a publisher or a verdict that two methods differ. */
const fs = require('fs');
const assert = require('node:assert/strict');
const dedupe = require('../src/lib/dedupe');
function screen(row, index) {
  if (/^(video|collection|premium|recipes|cookbook|contact us|read more)$/i.test(row.title)
      || /cookbook|recipe books|sponsorship|client recipes|play dough|\d+ toppings/i.test(row.title)) {
    return { status: 'not-a-recipe-lead', matches: [] };
  }
  const title = row.title.replace(/^App only /i, '').replace(/\s*\. This is a premium piece.*$/i, '')
    .replace(/^Family meals:\s*/i, '').replace(/\s+recipe$/i, '').trim();
  const forms = [title, title.replace(/\s*\([^)]*\)/g, '').trim(),
    ...Array.from(title.matchAll(/\(([^)]+)\)/g), m => m[1])];
  const results = forms.map(value => dedupe.classify({ title: value }, index));
  const duplicate = results.find(value => value.grade === 'duplicate');
  if (duplicate) return { status: 'existing-dish-or-alias', matches: duplicate.matches };
  const mine = new Set(dedupe.coreWords(title));
  const embedded = index.rows.filter(r => r.core.size >= 2 && [...r.core].every(w => mine.has(w)));
  if (embedded.length) return { status: 'same-dish-review-required', matches: embedded.map(r => ({slug:r.slug,title:r.title,reason:'Existing dish name embedded in longer title'})) };
  const review = results.find(value => value.grade === 'review');
  return review ? { status:'same-dish-review-required',matches:review.matches }
    : { status:'unapproved-lead',matches:[],note:'Names alone cannot approve novelty, cooking instructions or search demand.' };
}
if (require.main === module) {
  if (process.argv.includes('--selftest')) {
    const index = dedupe.buildIndex([{slug:'pad-see-ew',title:'Pad See Ew'},
      {slug:'shepherds-pie',title:"Shepherd's Pie"},{slug:'chicken-shawarma',title:'Chicken Shawarma'}]);
    for (const title of ['Pad See Ew (Thai Stir Fried Noodles)','Chicken Shawarma (Middle Eastern)']) {
      assert.equal(screen({title},index).status,'existing-dish-or-alias',title);
    }
    assert.equal(screen({title:"No-fuss shepherd's pie"},index).status,'same-dish-review-required');
    for (const title of ['video','Free Recipe Books','11 toppings for Hanukkah latkes']) assert.equal(screen({title},index).status,'not-a-recipe-lead');
    assert.equal(screen({title:'Cowboy Pie'},index).status,'unapproved-lead');
    console.log('Expansion screen: 7 regressions passed; no automatic approval or publication.');
  } else {
    const volumes = require('../src/data/volumes');
    const details = volumes.details();
    const index = dedupe.buildIndex(volumes.catalog().map(r => ({...r,kw:details[r.slug]?.kw||[]})));
    const input = process.argv[2];
    if (!input) throw new Error('Usage: node tools/review-recipe-expansion.js leads.json, or --selftest');
    const rows = JSON.parse(fs.readFileSync(input,'utf8'));
    process.stdout.write(JSON.stringify(rows.map(row => ({...row,screen:screen(row,index)})),null,2)+'\n');
  }
}
module.exports = { screen };
