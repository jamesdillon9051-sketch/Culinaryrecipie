#!/usr/bin/env python3
"""Replace hero photographs that are of the wrong dish.

The general fetcher scores a candidate on how well its title matches the
query, which lets a near-miss through: "Almond & jam focaccia" on a rosemary
focaccia, "Chicken Vindaloo" on a lamb one, "Cheese burger - Archipelagos
Gyros" on gyros. Every one of those shares the dish word.

So each target here names not only what the title must contain but what it
must not. A candidate that mentions the wrong protein, the wrong flavour or
the wrong preparation is rejected however well it scores, and a slug keeps its
existing photograph unless a replacement actually passes.

  python3 tools/replace_images.py [slug ...]
"""
import json, os, re, sys, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import fetch_images as F

# slug -> (queries, must contain one of, must contain none of[, must contain all of])
TARGETS = {
    'focaccia': (['Focaccia rosemary', 'Focaccia genovese bread', 'Rosemary focaccia'],
                 ['focaccia'], ['almond', 'jam', 'sweet', 'chocolate', 'grape', 'schiacciata', 'sandwich']),
    'chicken-enchiladas': (['Chicken enchiladas', 'Enchiladas verdes', 'Enchiladas rojas'],
                 ['enchilada'], ['birria', 'beef', 'barbacoa', 'shrimp']),
    'lamb-vindaloo': (['Vindaloo curry', 'Lamb vindaloo', 'Goan pork curry'],
                 ['vindaloo'], ['chicken', 'prawn', 'paneer', 'vegetable']),
    'masala-dosa': (['Masala dosa with chutney', 'Masala dosa and sambar', 'Dosa with potato filling'],
                 ['dosa'], ['chicken', 'egg', 'mutton', 'paneer', 'pizza', 'rava', 'plain']),
    'egg-fried-rice': (['Egg fried rice', 'Fried rice with egg', 'Chinese egg fried rice wok'],
                 ['fried rice'], ['curry', 'tofu', 'pork', 'chicken', 'shrimp', 'prawn', 'pineapple', 'kimchi', 'beef', 'tray', 'thai']),
    'beef-and-broccoli': (['Beef in oyster sauce with broccoli', 'Broccoli beef Chinese takeout', 'Beef and broccoli stir-fry wok'],
                 ['beef'], ['ground', 'minced', 'green bean', 'soup', 'tray', 'meal', 'lunch', 'cafeteria', 'roasted', 'salad', 'rice,', 'soy sauce'], ['broccoli']),
    'gyros': (['Gyros pita', 'Pork gyros plate', 'Greek gyros'],
                 ['gyro'], ['burger', 'chicken', 'kebab shop', 'restaurant']),
    'larb-gai': (['Larb gai', 'Laab chicken Thai', 'Thai minced chicken salad'],
                 ['larb', 'laab', 'laap', 'lahb'], ['duck', 'pork', 'beef', 'moo', 'fish']),
    'classic-omelette': (['Omelette plain egg', 'Omelette nature French', 'Rolled egg omelette plate'],
                 ['omelet'], ['ihop', 'diner', 'mushroom', 'cheese', 'ham', 'denver', 'western', 'prawn', 'feta', 'spanish', 'tortilla', 'frittata', 'loaded', 'stuffed', 'bacon', 'rice', 'noodle']),
    'pecan-pie': (['Pecan pie', 'Pecan pie slice'],
                 ['pecan'], ['apple', 'chocolate', 'bourbon', 'pumpkin', 'sweet potato']),
    'vanilla-cupcakes': (['Vanilla cupcake', 'Cupcakes with vanilla buttercream'],
                 ['cupcake'], ['chocolate', 'red velvet', 'engagement', 'carrot', 'lemon', 'pink']),
    'yakisoba': (['Yakisoba noodles', 'Yakisoba pork', 'Japanese yakisoba'],
                 ['yakisoba'], ['chicken', 'pan', 'bread', 'sandwich', 'instant', 'cup']),
    'hyderabadi-biryani': (['Mutton biryani', 'Lamb biryani', 'Hyderabadi dum biryani'],
                 ['biryani'], ['chicken', 'veg', 'egg', 'fish', 'prawn', 'paneer']),
    'snickerdoodles': (['Snickerdoodle cookies', 'Cinnamon sugar cookies'],
                 ['snickerdoodle'], ['gochujang', 'pepper', 'chocolate', 'pumpkin']),
    'kibbeh': (['Kibbeh bil sanieh', 'Baked kibbeh tray', 'Kibbeh Lebanese'],
                 ['kibbe'], ['fried', 'nayyeh', 'raw', 'ball', 'croquette']),
    'fasolada': (['Fasolada', 'Greek fasolada bean soup', 'Fasolatha white bean soup'],
                 ['fasolada', 'fasolatha'], ['sausage', 'pasta', 'italian', 'veggie', 'green bean']),
    'gnocchi-alla-sorrentina': (['Gnocchi alla sorrentina', 'Gnocchi baked tomato mozzarella'],
                 ['sorrentina'], ['gluten', 'pesto', 'sage', 'butter']),
    'refried-beans': (['Frijoles refritos', 'Refried beans bowl', 'Refried pinto beans'],
                 ['refried', 'refrito'], ['taco', 'burrito', 'salad', 'textured', 'avocado', 'sausage', 'plate', 'nachos', 'tostada']),
    'fried-plantain': (['Platano maduro frito', 'Sweet fried plantain slices', 'Maduros plantain dish'],
                 ['plantain', 'platano', 'maduro'], ['crisp', 'chip', 'packet', 'bag', 'shop', 'market', 'tostone', 'chicken', 'rice', 'beans', 'green', 'tree', 'bunch', 'aborrajado', 'fritter', 'batter']),
    'savoury-cottage-cheese-bowl': (['Cottage cheese with vegetables', 'Cottage cheese bowl'],
                 ['cottage cheese'], ['rice cake', 'cake', 'pancake', 'toast']),
    'spring-rolls': (['Fried spring rolls', 'Chinese spring rolls plate', 'Crispy spring rolls'],
                 ['spring roll'], ['bowl', 'noodle', 'bun cha', 'summer roll', 'rice paper', 'salad']),
    'hash-browns': (['Hash browns', 'Hash brown potatoes'],
                 ['hash brown'], ['waffle', 'bacon', 'breakfast', 'burger', 'casserole']),
    'danish-pastry': (['Danish pastry custard', 'Wienerbrod Danish pastry', 'Danish pastries bakery tray'],
                 ['danish pastry', 'wienerbr'], ['forst', 'forest', 'bird', 'church', 'street', 'cherry', 'pistachio', 'cinnamon']),
# Catalogue volume eight.
    'angel-food-cake': (['Angel food cake slice plate', 'Angel food cake with strawberries and cream', 'Angel food cake served dessert'],
                 ['angel food', 'angelfood'], ['pan', 'tin', 'mould', 'mold', 'box', 'battenberg', 'mix', 'batter', 'oven', 'raw', 'unbaked']),
    'pumpkin-bread': (['Pumpkin bread loaf', 'Pumpkin spice bread slice', 'Pumpkin loaf cake'],
                 ['pumpkin'], ['seed', 'soup', 'pie', 'farmhouse', 'sunflower', 'bag', 'packet', 'field', 'patch', 'carved']),
    'coffee-cake': (['Cinnamon streusel coffee cake', 'Crumb cake streusel', 'Coffee cake cinnamon'],
                 ['coffee cake', 'crumb cake', 'streusel'], ['plum', 'apple', 'cherry', 'rhubarb', 'blueberry', 'cup of coffee']),
    'sugar-cookies': (['Sugar cookies decorated', 'Iced sugar cookies', 'Royal icing cookies'],
                 ['sugar cookie'], ['gingerbread', 'chocolate', 'bread', 'cake']),
    'blondies': (['Blondies in a pan', 'Butterscotch blondie squares', 'Blondie bars cut'],
                 ['blondie'], ['brownie', 'hair', 'woman', 'peach', 'danish', 'pastry', 'ease']),
    'lemon-bars': (['Lemon bars', 'Lemon squares dessert', 'Lemon slice icing sugar'],
                 ['lemon bar', 'lemon square', 'lemon slice'], ['cake', 'tart', 'meringue', 'drizzle', 'bar counter', 'soap']),
    'magic-cookie-bars': (['Seven layer bars dessert', 'Magic bars coconut chocolate', 'Congo bars condensed milk'],
                 ['seven layer', 'magic bar', 'magic cookie', 'hello dolly'], ['salad', 'dip', 'cake', 'nachos']),
    'marble-cake': (['Marmorkuchen marble cake', 'Marble cake slice', 'Marble bundt cake'],
                 ['marble', 'marmor'], ['stone', 'floor', 'statue', 'quarry', 'countertop', 'slab of']),
    'pound-cake': (['Homemade pound cake loaf', 'Quatre quarts gateau', 'Pound cake baked loaf'],
                 ['pound cake', 'quatre-quarts', 'quatre quarts'], ['ice cream', 'coin', 'package', 'packaged', 'wrapper', 'plastic', 'net wt', 'brand', 'sara lee', 'entenmann']),
    'zucchini-bread': (['Zucchini bread loaf sliced', 'Courgette cake loaf', 'Zucchini quick bread'],
                 ['zucchini bread', 'courgette bread', 'zucchini loaf', 'courgette loaf'], ['chocolate', 'fritter', 'noodle', 'soup', 'raw', 'plant', 'garden']),
    'peach-cobbler': (['Peach cobbler in a baking dish', 'Peach cobbler with ice cream', 'Homemade peach cobbler dessert'],
                 ['cobbler'], ['shoe', 'apple', 'blackberry', 'blueberry', 'cherry', 'sliced peaches', 'jar', 'ben ', 'beinn', 'mountain', 'hill', 'loch', 'summit', 'munro', 'arrochar', 'visible']),
    'fruit-tart': (['French fruit tart', 'Tarte aux fruits patisserie', 'Fruit tart pastry cream'],
                 ['fruit tart', 'tarte aux fruits'], ['tartlet', 'apple tart', 'lemon tart', 'cheesecake', 'pizza']),
    'garlic-focaccia': (['Focaccia bread baked tray', 'Focaccia rosemary garlic herbs', 'Italian focaccia bread'],
                 ['focaccia'], ['almond', 'jam', 'sweet', 'sandwich', 'panino', 'pizza', 'schiacciata', 'genovese']),
}


def acceptable(title, must, avoid, required=()):
    low = title.lower()
    if not any(m in low for m in must):
        return False
    if not all(r in low for r in required):
        return False
    return not any(re.search(r'\b' + re.escape(a), low) for a in avoid)


def main():
    wanted = sys.argv[1:] or list(TARGETS)
    manifest = json.load(open(F.MANIFEST))
    replaced, kept = [], []

    for slug in wanted:
        if slug not in TARGETS:
            F.log(f"{slug}: not a target"); continue
        spec = TARGETS[slug]
        queries, must, avoid = spec[0], spec[1], spec[2]
        required = spec[3] if len(spec) > 3 else ()
        before = (manifest.get(slug) or {}).get('hero') or {}
        F.log(f"\n{slug}  (currently: {before.get('title', 'none')[:60]})")

        pool = []
        # Both licence filters, as the general fetcher does: the unrestricted
        # index is small, and OK_LICENCE still gates whatever the wider one
        # returns, so nothing unusable gets through either way.
        searches = [(q, lic) for q in queries for lic in F.LICENCE_FILTERS]
        for query, lic in searches:
            for cand in F.commons_candidates(query, licence_filter=lic):
                if acceptable(cand['title'], must, avoid, required) and cand['url'] not in {c['url'] for c in pool}:
                    pool.append(cand)
            time.sleep(0.4)
        pool.sort(key=lambda c: -c['score'])
        if not pool:
            F.log("    · nothing acceptable found — keeping the existing photograph")
            kept.append(slug)
            continue

        for cand in pool[:6]:
            raw = F.http_bytes(cand['url'])
            time.sleep(0.6)
            if not raw or len(raw) < 8000:
                continue
            meta = F.process(raw, slug, "", F.HERO_W)
            if not meta:
                continue
            meta.update({k: cand[k] for k in
                         ("title", "author", "licence", "licence_url", "page", "source")})
            meta["file"] = slug
            entry = manifest.setdefault(slug, {"hero": None, "process": None})
            entry["hero"] = meta
            json.dump(manifest, open(F.MANIFEST, "w"), indent=1)
            F.log(f"    ok {cand['licence']:12s} {cand['title'][:60]}")
            replaced.append(slug)
            break
        else:
            F.log("    · candidates found but none downloadable — keeping the existing photograph")
            kept.append(slug)

    F.log(f"\nDONE — replaced {len(replaced)}, kept {len(kept)}")
    if kept:
        F.log("still wrong: " + ", ".join(kept))


if __name__ == "__main__":
    main()
