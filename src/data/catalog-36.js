'use strict';

/**
 * Weekly Delight — recipe catalog, volume thirty-six.
 * One hundred more budget dishes that take little effort: breakfasts and
 * sandwiches, cheap sides, potato dishes, dips and snacks, breads, buns and
 * quick bakes, simple puddings and two drinks. They are familiar dishes that
 * people in the USA, Canada, Australia, the UK and New Zealand look for by
 * name; no search-volume data was used to pick or rank them.
 *
 * "Budget" here means what the ingredient list is made of, and no price is
 * printed anywhere, because the site cannot check what anything costs.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, and then read by hand.
 *
 * Spread: American 49, British 27, Australian 11, Mexican 3, New Zealand 3, Spanish 2, Canadian 1, French 1, German 1, Middle Eastern 1, Scottish 1.
 *
 * Unrated, for the reason given in catalog-4.js.
 *
 * c(slug, title, cuisine, category, difficulty, prepMin, cookMin, servings,
 *   rating, reviews, dietTags, badges, imageQuery?)
 */

function c(slug, title, cuisine, category, difficulty, prep, cook, servings, rating, reviews, tags, badges, imageQuery) {
  return {
    slug, title, cuisine, category, difficulty, prep, cook, servings, rating, reviews,
    tags: tags || [],
    badges: badges || [],
    imageQuery: imageQuery || title
  };
}

module.exports = [
  c('egg-butty', 'Egg Butty', 'British', 'Breakfast', 'Easy', 5, 8, 1, 0, 0, ['Vegetarian'], ['new'], 'egg butty'),
  c('eggy-bread', 'Eggy Bread', 'British', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'eggy bread'),
  c('snag-in-bread', 'Snag in Bread', 'Australian', 'Lunch', 'Easy', 5, 12, 4, 0, 0, [], ['new'], 'snag in bread'),
  c('porridge-with-brown-sugar', 'Porridge with Brown Sugar', 'Scottish', 'Breakfast', 'Easy', 2, 8, 2, 0, 0, ['Vegetarian'], ['new'], 'porridge with brown sugar'),
  c('fried-cornmeal-mush', 'Fried Cornmeal Mush', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'fried cornmeal mush'),
  c('leftover-mashed-potato-cakes', 'Leftover Mashed Potato Cakes', 'British', 'Breakfast', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'leftover mashed potato cakes'),
  c('oatmeal-bars', 'Oatmeal Bars', 'American', 'Breakfast', 'Easy', 10, 25, 9, 0, 0, ['Vegetarian'], ['new'], 'oatmeal bars'),
  c('breakfast-cookies', 'Breakfast Cookies', 'American', 'Breakfast', 'Easy', 10, 15, 12, 0, 0, ['Vegetarian', 'Vegan'], ['new'], 'breakfast cookies'),
  c('breakfast-quesadilla', 'Breakfast Quesadilla', 'Mexican', 'Breakfast', 'Easy', 5, 8, 2, 0, 0, ['Vegetarian'], ['new'], 'breakfast quesadilla'),
  c('breakfast-pizza', 'Breakfast Pizza', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'breakfast pizza'),
  c('cheese-omelette', 'Cheese Omelette', 'American', 'Breakfast', 'Easy', 3, 5, 1, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'cheese omelette'),
  c('mushroom-omelette', 'Mushroom Omelette', 'British', 'Breakfast', 'Easy', 5, 10, 1, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'mushroom omelette'),
  c('spanish-omelette', 'Spanish Omelette', 'Spanish', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'spanish omelette'),
  c('apple-cinnamon-oatmeal', 'Apple Cinnamon Oatmeal', 'American', 'Breakfast', 'Easy', 3, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'apple cinnamon oatmeal'),
  c('sausage-egg-and-cheese-muffin', 'Sausage Egg and Cheese Muffin', 'American', 'Breakfast', 'Easy', 5, 12, 2, 0, 0, [], ['new'], 'sausage egg and cheese muffin'),
  c('milk-toast', 'Milk Toast', 'American', 'Breakfast', 'Easy', 2, 8, 1, 0, 0, ['Vegetarian'], ['new'], 'milk toast'),
  c('banana-toast', 'Banana Toast', 'American', 'Breakfast', 'Easy', 3, 4, 1, 0, 0, ['Vegetarian'], ['new'], 'banana toast'),
  c('cinnamon-toast', 'Cinnamon Toast', 'American', 'Breakfast', 'Easy', 3, 5, 2, 0, 0, ['Vegetarian'], ['new'], 'cinnamon toast'),
  c('tomato-toast', 'Tomato Toast', 'Spanish', 'Breakfast', 'Easy', 5, 3, 2, 0, 0, ['Vegetarian'], ['new'], 'tomato toast'),
  c('spaghetti-on-toast', 'Spaghetti on Toast', 'Australian', 'Breakfast', 'Easy', 2, 5, 2, 0, 0, ['Vegetarian'], ['new'], 'spaghetti on toast'),
  c('potato-pancakes-with-applesauce', 'Potato Pancakes with Applesauce', 'American', 'Breakfast', 'Easy', 15, 15, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'potato pancakes with applesauce'),
  c('pikelets', 'Pikelets', 'New Zealand', 'Breakfast', 'Easy', 10, 10, 16, 0, 0, ['Vegetarian'], ['new'], 'pikelets'),
  c('fried-egg-sandwich', 'Fried Egg Sandwich', 'American', 'Lunch', 'Easy', 3, 6, 1, 0, 0, ['Vegetarian'], ['new'], 'fried egg sandwich'),
  c('egg-and-cheese-toastie', 'Egg and Cheese Toastie', 'British', 'Lunch', 'Easy', 5, 8, 1, 0, 0, ['Vegetarian'], ['new'], 'egg and cheese toastie'),
  c('beans-and-cheese-toastie', 'Beans and Cheese Toastie', 'British', 'Lunch', 'Easy', 5, 6, 1, 0, 0, ['Vegetarian'], ['new'], 'beans and cheese toastie'),
  c('tuna-toastie', 'Tuna Toastie', 'Australian', 'Lunch', 'Easy', 5, 6, 2, 0, 0, [], ['new'], 'tuna toastie'),
  c('sausage-sandwich', 'Sausage Sandwich', 'British', 'Lunch', 'Easy', 5, 15, 2, 0, 0, [], ['new'], 'sausage sandwich'),
  c('egg-mayo', 'Egg Mayo', 'British', 'Lunch', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'egg mayo'),
  c('cheese-and-pickle-sandwich', 'Cheese and Pickle Sandwich', 'British', 'Lunch', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian'], ['new'], 'cheese and pickle sandwich'),
  c('ham-and-cheese-sandwich', 'Ham and Cheese Sandwich', 'American', 'Lunch', 'Easy', 5, 0, 1, 0, 0, [], ['new'], 'ham and cheese sandwich'),
  c('bean-wraps', 'Bean Wraps', 'Mexican', 'Lunch', 'Easy', 8, 5, 4, 0, 0, ['Vegetarian'], ['new'], 'bean wraps'),
  c('tuna-wraps', 'Tuna Wraps', 'American', 'Lunch', 'Easy', 8, 0, 2, 0, 0, ['Dairy-Free'], ['new'], 'tuna wraps'),
  c('pizza-toast', 'Pizza Toast', 'Australian', 'Lunch', 'Easy', 5, 8, 2, 0, 0, [], ['new'], 'pizza toast'),
  c('gravy-fries', 'Gravy Fries', 'Canadian', 'Appetizers', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'gravy fries'),
  c('curry-fries', 'Curry Fries', 'British', 'Appetizers', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'curry fries'),
  c('garlic-parmesan-fries', 'Garlic Parmesan Fries', 'American', 'Appetizers', 'Easy', 10, 30, 4, 0, 0, ['Gluten-Free'], ['new'], 'garlic parmesan fries'),
  c('potato-skins', 'Potato Skins', 'American', 'Appetizers', 'Easy', 15, 50, 4, 0, 0, ['Gluten-Free'], ['new'], 'potato skins'),
  c('potato-croquettes', 'Potato Croquettes', 'British', 'Appetizers', 'Medium', 30, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'potato croquettes'),
  c('potato-gratin', 'Potato Gratin', 'French', 'Dinner', 'Easy', 15, 60, 6, 0, 0, ['Vegetarian'], ['new'], 'potato gratin'),
  c('potato-dumplings', 'Potato Dumplings', 'German', 'Dinner', 'Medium', 30, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'potato dumplings'),
  c('stuffed-onions', 'Stuffed Onions', 'British', 'Dinner', 'Medium', 25, 50, 4, 0, 0, [], ['new'], 'stuffed onions'),
  c('roasted-potatoes-and-onions', 'Roasted Potatoes and Onions', 'American', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'roasted potatoes and onions'),
  c('roasted-sweet-potatoes', 'Roasted Sweet Potatoes', 'American', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'roasted sweet potatoes'),
  c('roasted-parsnips', 'Roasted Parsnips', 'British', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'roasted parsnips'),
  c('honey-roasted-carrots', 'Honey Roasted Carrots', 'British', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'honey roasted carrots'),
  c('kumara-fries', 'Kumara Fries', 'New Zealand', 'Appetizers', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'kumara fries'),
  c('potato-wedges', 'Potato Wedges', 'Australian', 'Appetizers', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian'], ['new'], 'potato wedges'),
  c('buttered-peas', 'Buttered Peas', 'British', 'Dinner', 'Easy', 2, 6, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'buttered peas'),
  c('fried-cabbage', 'Fried Cabbage', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'fried cabbage'),
  c('cheesy-potato-bake', 'Cheesy Potato Bake', 'American', 'Dinner', 'Easy', 15, 60, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'cheesy potato bake'),
  c('loaded-baked-potatoes', 'Loaded Baked Potatoes', 'American', 'Dinner', 'Easy', 10, 60, 4, 0, 0, [], ['new'], 'loaded baked potatoes'),
  c('jacket-potato-with-baked-beans', 'Jacket Potato with Baked Beans', 'British', 'Dinner', 'Easy', 5, 60, 2, 0, 0, ['Vegetarian'], ['new'], 'jacket potato with baked beans'),
  c('nachos-with-cheese-sauce', 'Nachos with Cheese Sauce', 'American', 'Appetizers', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'nachos with cheese sauce'),
  c('cheese-dip', 'Cheese Dip', 'American', 'Appetizers', 'Easy', 5, 10, 6, 0, 0, ['Vegetarian'], ['new'], 'cheese dip'),
  c('bean-dip', 'Bean Dip', 'Mexican', 'Appetizers', 'Easy', 5, 10, 6, 0, 0, [], ['new'], 'bean dip'),
  c('honey-mustard-sausages', 'Honey Mustard Sausages', 'Australian', 'Appetizers', 'Easy', 5, 20, 8, 0, 0, [], ['new'], 'honey mustard sausages'),
  c('honey-garlic-meatballs', 'Honey Garlic Meatballs', 'American', 'Appetizers', 'Easy', 20, 25, 6, 0, 0, [], ['new'], 'honey garlic meatballs'),
  c('honey-butter-biscuits', 'Honey Butter Biscuits', 'American', 'Baking', 'Easy', 15, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'honey butter biscuits'),
  c('honey-cornbread', 'Honey Cornbread', 'American', 'Baking', 'Easy', 10, 25, 9, 0, 0, ['Vegetarian'], ['new'], 'honey cornbread'),
  c('cornbread-muffins', 'Cornbread Muffins', 'American', 'Baking', 'Easy', 10, 18, 12, 0, 0, ['Vegetarian'], ['new'], 'cornbread muffins'),
  c('cornbread-casserole', 'Cornbread Casserole', 'American', 'Dinner', 'Easy', 10, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'cornbread casserole'),
  c('cornbread-stuffing', 'Cornbread Stuffing', 'American', 'Dinner', 'Easy', 20, 40, 8, 0, 0, [], ['new'], 'cornbread stuffing'),
  c('cheese-biscuits', 'Cheese Biscuits', 'American', 'Baking', 'Easy', 15, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'cheese biscuits'),
  c('cheese-muffins', 'Cheese Muffins', 'New Zealand', 'Baking', 'Easy', 10, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'cheese muffins'),
  c('pizza-bread', 'Pizza Bread', 'American', 'Lunch', 'Easy', 5, 12, 4, 0, 0, ['Vegetarian'], ['new'], 'pizza bread'),
  c('french-bread-pizza', 'French Bread Pizza', 'American', 'Lunch', 'Easy', 10, 12, 4, 0, 0, [], ['new'], 'french bread pizza'),
  c('cheesy-breadsticks', 'Cheesy Breadsticks', 'American', 'Baking', 'Easy', 10, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'cheesy breadsticks'),
  c('pita-pizza', 'Pita Pizza', 'American', 'Quick Meals', 'Easy', 5, 8, 2, 0, 0, ['Vegetarian'], ['new'], 'pita pizza'),
  c('bagel-pizza', 'Bagel Pizza', 'American', 'Quick Meals', 'Easy', 5, 8, 2, 0, 0, [], ['new'], 'bagel pizza'),
  c('pizza-pockets', 'Pizza Pockets', 'American', 'Lunch', 'Medium', 20, 18, 6, 0, 0, [], ['new'], 'pizza pockets'),
  c('potato-bread', 'Potato Bread', 'British', 'Baking', 'Medium', 30, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'potato bread'),
  c('potato-farls', 'Potato Farls', 'British', 'Baking', 'Easy', 15, 10, 8, 0, 0, ['Vegetarian'], ['new'], 'potato farls'),
  c('bread-rolls', 'Bread Rolls', 'British', 'Baking', 'Medium', 25, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'bread rolls'),
  c('milk-bread', 'Milk Bread', 'American', 'Baking', 'Medium', 30, 35, 10, 0, 0, ['Vegetarian'], ['new'], 'milk bread'),
  c('white-bread', 'White Bread', 'British', 'Baking', 'Medium', 25, 35, 12, 0, 0, ['Vegetarian'], ['new'], 'white bread'),
  c('flatbread', 'Flatbread', 'Middle Eastern', 'Baking', 'Easy', 10, 12, 8, 0, 0, ['Vegetarian'], ['new'], 'flatbread'),
  c('garlic-butter-rolls', 'Garlic Butter Rolls', 'American', 'Baking', 'Medium', 25, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'garlic butter rolls'),
  c('hamburger-buns', 'Hamburger Buns', 'American', 'Baking', 'Medium', 30, 18, 8, 0, 0, ['Vegetarian'], ['new'], 'hamburger buns'),
  c('vegemite-scrolls', 'Vegemite Scrolls', 'Australian', 'Baking', 'Medium', 25, 22, 8, 0, 0, ['Vegetarian'], ['new'], 'vegemite scrolls'),
  c('sticky-date-pudding', 'Sticky Date Pudding', 'Australian', 'Desserts', 'Easy', 15, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'sticky date pudding'),
  c('milo-slice', 'Milo Slice', 'Australian', 'Desserts', 'Easy', 15, 0, 16, 0, 0, ['Vegetarian'], ['new'], 'milo slice'),
  c('apple-slab-pie', 'Apple Slab Pie', 'American', 'Desserts', 'Medium', 30, 40, 12, 0, 0, ['Vegetarian'], ['new'], 'apple slab pie'),
  c('pear-crumble', 'Pear Crumble', 'British', 'Desserts', 'Easy', 15, 35, 6, 0, 0, ['Vegetarian'], ['new'], 'pear crumble'),
  c('berry-crumble', 'Berry Crumble', 'British', 'Desserts', 'Easy', 10, 35, 6, 0, 0, ['Vegetarian'], ['new'], 'berry crumble'),
  c('chocolate-pudding', 'Chocolate Pudding', 'American', 'Desserts', 'Easy', 5, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'chocolate pudding'),
  c('chocolate-oat-bars', 'Chocolate Oat Bars', 'American', 'Desserts', 'Easy', 10, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'chocolate oat bars'),
  c('vanilla-pudding', 'Vanilla Pudding', 'American', 'Desserts', 'Easy', 5, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'vanilla pudding'),
  c('rice-pudding-with-raisins', 'Rice Pudding with Raisins', 'British', 'Desserts', 'Easy', 5, 90, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'rice pudding with raisins'),
  c('sago-pudding', 'Sago Pudding', 'British', 'Desserts', 'Easy', 5, 40, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'sago pudding'),
  c('peanut-butter-balls', 'Peanut Butter Balls', 'American', 'Desserts', 'Easy', 15, 0, 16, 0, 0, ['Vegetarian'], ['new'], 'peanut butter balls'),
  c('peanut-butter-oat-bars', 'Peanut Butter Oat Bars', 'American', 'Desserts', 'Easy', 10, 0, 12, 0, 0, ['Vegetarian'], ['new'], 'peanut butter oat bars'),
  c('oatmeal-cake', 'Oatmeal Cake', 'American', 'Baking', 'Easy', 15, 35, 12, 0, 0, ['Vegetarian'], ['new'], 'oatmeal cake'),
  c('banana-fritters', 'Banana Fritters', 'American', 'Desserts', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'banana fritters'),
  c('pumpkin-fritters', 'Pumpkin Fritters', 'Australian', 'Appetizers', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'pumpkin fritters'),
  c('banana-smoothie', 'Banana Smoothie', 'American', 'Drinks', 'Easy', 3, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'banana smoothie'),
  c('banana-milkshake', 'Banana Milkshake', 'American', 'Drinks', 'Easy', 3, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'banana milkshake'),
  c('baked-bean-pasta', 'Baked Bean Pasta', 'Australian', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, [], ['new'], 'baked bean pasta'),
  c('cheese-and-onion-pasty', 'Cheese and Onion Pasty', 'British', 'Baking', 'Medium', 25, 35, 4, 0, 0, ['Vegetarian'], ['new'], 'cheese and onion pasty'),
  c('butter-bean-stew', 'Butter Bean Stew', 'British', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian'], ['new'], 'butter bean stew'),
  c('coronation-chickpea-sandwich', 'Coronation Chickpea Sandwich', 'British', 'Lunch', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian'], ['new'], 'coronation chickpea sandwich')
];
