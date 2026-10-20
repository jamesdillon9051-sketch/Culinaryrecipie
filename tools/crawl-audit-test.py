#!/usr/bin/env python3
"""Focused regressions for confirmed markup and crawl-directive defects."""
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from crawl_static import parse_html, summary

spec = importlib.util.spec_from_file_location('audit', Path(__file__).with_name('crawl-audit.py'))
audit = importlib.util.module_from_spec(spec)
spec.loader.exec_module(audit)


class CrawlChecks(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.old_root = audit.ROOT
        audit.ROOT = Path(self.temp.name)
        (audit.ROOT / 'recipes/example').mkdir(parents=True)
        self.expected = dict(type='recipe', title='Example', description='Real description', ingredients=['100 g flour'],
                             steps=['Bake until cooked.'], servings=2, prepTime='PT10M', cookTime='PT20M',
                             elapsedTime='PT30M', untimed=None, datePublished='2026-10-01', dateModified='2026-10-20')
        self.schema = {'@context': 'https://schema.org', '@type': 'Recipe',
                       'name': 'Example', 'description': 'Real description', 'recipeIngredient': ['100 g flour'],
                       'recipeInstructions': [{'@type': 'HowToStep', 'text': 'Bake until cooked.'}],
                       'recipeYield': '2 servings', 'prepTime': 'PT10M', 'cookTime': 'PT20M', 'totalTime': 'PT30M',
                       'author': {'@type': 'Person', 'name': 'Existing author', 'url': 'https://weeklydelight.com/about/'},
                       'datePublished': '2026-10-01', 'dateModified': '2026-10-20'}

    def tearDown(self):
        audit.ROOT = self.old_root
        self.temp.cleanup()

    def run_page(self, extra='', robots='index, follow', canonical='https://weeklydelight.com/recipes/example/', visible=None):
        text = visible or ('Example Real description Existing author 100 g flour Bake until cooked. ' + 'Useful recipe content. ' * 30)
        html = f'<html><head><title>Example</title><link rel="canonical" href="{canonical}"><meta name="robots" content="{robots}"><script type="application/ld+json">{json.dumps(self.schema)}</script></head><body><h1>Example</h1>{text}{extra}</body></html>'
        (audit.ROOT / 'recipes/example/index.html').write_text(html)
        return audit.inspect('/recipes/example/', self.expected)['errors']

    def test_one_coherent_recipe_passes(self):
        self.assertEqual([], self.run_page())

    def test_incomplete_microdata_duplicate_fails(self):
        self.assertTrue(any('declarations: 2' in e for e in self.run_page('<article itemscope itemtype="https://schema.org/Recipe"><h2 itemprop="name">Example</h2></article>')))

    def test_rdfa_duplicate_fails(self):
        self.assertTrue(any('declarations: 2' in e for e in self.run_page('<div vocab="https://schema.org/" typeof="Recipe">Example</div>')))

    def test_graph_and_array_types_count(self):
        s = summary(parse_html('<script type="application/ld+json">{"@graph":[{"@type":["Thing","Recipe"]},{"@type":"BreadcrumbList"}]}</script>'))
        self.assertEqual(1, s['recipe_jsonld'])

    def test_noindex_googlebot_fails_even_with_index(self):
        self.assertIn('noindex on intended indexable page', self.run_page('<meta name="googlebot" content="noindex">'))

    def test_none_directive_fails(self):
        self.assertIn('noindex on intended indexable page', self.run_page(robots='none'))

    def test_nonpreferred_canonical_fails(self):
        self.assertIn('missing, duplicate or noncanonical canonical', self.run_page(canonical='https://www.weeklydelight.com/recipes/example/'))

    def test_missing_canonical_fails(self):
        self.assertIn('missing, duplicate or noncanonical canonical', self.run_page(canonical=''))

    def test_untimed_total_fails(self):
        self.expected['untimed'] = ['cooling completely']
        self.assertIn('totalTime claims complete duration despite required untimed stage', self.run_page())

    def test_untimed_omission_passes(self):
        self.expected['untimed'] = ['cooling completely']
        del self.schema['totalTime']
        self.assertEqual([], self.run_page())

    def test_absent_complete_total_fails(self):
        del self.schema['totalTime']
        self.assertIn('schema/source mismatch: totalTime', self.run_page())

    def test_invisible_instructions_fail(self):
        self.assertIn('schema text absent from visible HTML: instructions', self.run_page(visible='Example Real description Existing author 100 g flour ' + 'Other useful prose. ' * 30))

    def test_inline_punctuation_is_not_a_mismatch(self):
        self.assertEqual([], self.run_page(visible='Example Real description Existing author 100 g flour <strong>Bake</strong> until cooked. ' + 'Useful prose. ' * 30))

    def test_missing_html_fails(self):
        self.assertEqual(['missing generated HTML'], audit.inspect('/not-built/', {'type':'other'})['errors'])

    def test_breadcrumb_is_not_a_recipe(self):
        self.assertEqual([], self.run_page('<script type="application/ld+json">{"@type":"BreadcrumbList","itemListElement":[]}</script>'))

    def test_nonexistent_step_anchor_fails(self):
        self.schema['recipeInstructions'][0]['url'] = 'https://weeklydelight.com/recipes/example/#step-1'
        self.assertIn('structured instruction URL has no matching HTML target', self.run_page())

    def test_real_step_anchor_passes(self):
        self.schema['recipeInstructions'][0]['url'] = 'https://weeklydelight.com/recipes/example/#step-1'
        self.assertEqual([], self.run_page('<span id="step-1"></span>'))

    def test_invisible_collection_item_fails(self):
        listing = {'@type':'CollectionPage','mainEntity':{'@type':'ItemList','itemListElement':[{'@type':'ListItem','url':'https://weeklydelight.com/recipes/not-visible/'}]}}
        self.assertIn('CollectionPage declares an item absent from ordinary HTML links', self.run_page('<script type="application/ld+json">' + json.dumps(listing) + '</script>'))

    def test_visible_collection_item_passes(self):
        listing = {'@type':'CollectionPage','mainEntity':{'@type':'ItemList','itemListElement':[{'@type':'ListItem','url':'https://weeklydelight.com/recipes/visible/'}]}}
        self.assertEqual([], self.run_page('<a href="/recipes/visible/">Visible recipe</a><script type="application/ld+json">' + json.dumps(listing) + '</script>'))


if __name__ == '__main__':
    unittest.main()
