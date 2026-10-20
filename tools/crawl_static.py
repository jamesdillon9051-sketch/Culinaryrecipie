"""Small stdlib HTML reader shared by catalogue and read-only HTTP audits."""
import json
import re
from html.parser import HTMLParser


def entities(value):
    if isinstance(value, list):
        for v in value:
            yield from entities(v)
    elif isinstance(value, dict):
        if '@type' in value:
            yield value
        for key, v in value.items():
            if key != '@type':
                yield from entities(v)


class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.canonicals, self.robots, self.links = [], [], []
        self.schema, self.json_errors, self.micro, self.rdfa = [], [], [], []
        self.title, self.h1, self.text, self.images = [], [], [], []
        self.stack, self.current_script, self.script_text = [], None, []
        self.ids = set()

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'script':
            self.current_script = a.get('type', '').lower()
            self.script_text = []
        if tag == 'link' and 'canonical' in a.get('rel', '').split():
            self.canonicals.append(a.get('href', ''))
        if tag == 'meta' and (a.get('name', '').lower() in ('robots', 'googlebot', 'googlebot-news') or a.get('http-equiv', '').lower() == 'x-robots-tag'):
            self.robots.append({'name': a.get('name', a.get('http-equiv')), 'content': a.get('content', '')})
        if tag == 'a' and a.get('href'):
            self.links.append((a['href'], a.get('rel', '')))
        if a.get('itemtype'):
            self.micro.extend(a['itemtype'].split())
        if a.get('typeof'):
            self.rdfa.extend(a['typeof'].split())
        if tag == 'img' and a.get('src'):
            self.images.append(a['src'])
        if tag in ('img', 'source') and a.get('srcset'):
            self.images.extend(part.strip().split()[0] for part in a['srcset'].split(',') if part.strip())
        if a.get('id'):
            self.ids.add(a['id'])
        if tag not in ('area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'):
            self.stack.append(tag)

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        self.handle_endtag(tag)

    def handle_endtag(self, tag):
        if tag == 'script':
            if self.current_script == 'application/ld+json':
                try:
                    self.schema.extend(entities(json.loads(''.join(self.script_text))))
                except ValueError as e:
                    self.json_errors.append(str(e))
            self.current_script = None
            self.script_text = []
        if tag in self.stack:
            self.stack = self.stack[:len(self.stack) - 1 - self.stack[::-1].index(tag)]

    def handle_data(self, data):
        if self.current_script is not None:
            self.script_text.append(data)
            return
        if 'style' in self.stack:
            return
        text = re.sub(r'\s+', ' ', data).strip()
        if not text:
            return
        if 'title' in self.stack:
            self.title.append(text)
        if 'h1' in self.stack:
            self.h1.append(text)
        if 'body' in self.stack:
            self.text.append(text)


def parse_html(html):
    page = Page()
    page.feed(html)
    return page


def is_recipe(t):
    return any(x.rstrip('/').split('/')[-1].split(':')[-1] == 'Recipe' for x in ([t] if isinstance(t, str) else t))


def summary(page):
    recipes = [e for e in page.schema if is_recipe(e.get('@type', ''))]
    return {'canonicals': page.canonicals, 'meta_robots': page.robots,
            'title': ' '.join(page.title), 'h1': ' '.join(page.h1),
            'visible_chars': len(' '.join(page.text)),
            'recipe_jsonld': len(recipes),
            'recipe_microdata': sum(is_recipe(t) for t in page.micro),
            'recipe_rdfa': sum(is_recipe(t) for t in page.rdfa),
            'json_errors': page.json_errors,
            'recipe_fields': [{k: e.get(k) for k in ('name', 'image', 'prepTime', 'cookTime', 'totalTime', 'recipeYield', 'author')}
                              for e in recipes],
            'challenge': any(w in ' '.join(page.title).lower() for w in
                             ('just a moment', 'access denied', 'verify you are human', 'sign in'))}
