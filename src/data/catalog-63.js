'use strict';

/**
 * Weekly Delight — recipe catalog, volume sixty-three.
 * One hundred more well-known dishes for readers in the USA, Canada, Australia,
 * the UK and New Zealand: regional American classics, British and Scottish
 * favourites, Canadian and Australian staples, basic sauces and doughs, and the
 * dishes from elsewhere that are cooked and ordered in those five countries.
 * No search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 * The site already holds most of the very best-known dishes, so a name that
 * was already here was left out rather than published twice.
 *
 * Spread: American 33, Italian 8, British 7, Japanese 6, French 4, Indian 4, Chinese 4, Mexican 4, Canadian 2, Scottish 2, Australian 2, Filipino 2, Jamaican 2, Swedish 2, Greek 2, Malaysian 2, New Zealand 2, Hawaiian 1, Cuban 1, Nigerian 1, Russian 1, Swiss 1, Dutch 1, Portuguese 1, Korean 1, Singaporean 1, Indonesian 1, Cambodian 1, Jewish 1.
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
  c('salt-potatoes', 'Salt Potatoes', 'American', 'Dinner', 'Easy', 5, 25, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'salt potatoes'),
  c('hot-fudge-sundae', 'Hot Fudge Sundae', 'American', 'Desserts', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'hot fudge sundae'),
  c('huli-huli-chicken', 'Huli Huli Chicken', 'Hawaiian', 'Dinner', 'Medium', 15, 45, 6, 0, 0, ['Dairy-Free'], ['new'], 'huli huli chicken'),
  c('mojo-pork', 'Mojo Pork', 'Cuban', 'Dinner', 'Medium', 15, 180, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'mojo pork'),
  c('walking-tacos', 'Walking Tacos', 'American', 'Quick Meals', 'Easy', 10, 15, 6, 0, 0, ['Gluten-Free'], ['new'], 'walking tacos'),
  c('sweet-and-sour-meatballs', 'Sweet and Sour Meatballs', 'American', 'Appetizers', 'Easy', 15, 25, 8, 0, 0, ['Dairy-Free'], ['new'], 'sweet and sour meatballs'),
  c('chopped-cheese-sandwich', 'Chopped Cheese Sandwich', 'American', 'Quick Meals', 'Easy', 5, 15, 2, 0, 0, [], ['new'], 'chopped cheese sandwich'),
  c('clam-cakes', 'Clam Cakes', 'American', 'Appetizers', 'Medium', 15, 15, 6, 0, 0, [], ['new'], 'clam cakes'),
  c('rhode-island-clam-chowder', 'Rhode Island Clam Chowder', 'American', 'Dinner', 'Medium', 15, 35, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'rhode island clam chowder'),
  c('stuffies', 'Stuffies', 'American', 'Appetizers', 'Medium', 30, 41, 6, 0, 0, [], ['new'], 'stuffies'),
  c('spiedies', 'Spiedies', 'American', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'spiedies'),
  c('horseshoe-sandwich', 'Horseshoe Sandwich', 'American', 'Lunch', 'Medium', 20, 25, 4, 0, 0, [], ['new'], 'horseshoe sandwich'),
  c('maxwell-street-polish', 'Maxwell Street Polish', 'American', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'maxwell street polish'),
  c('hatch-chile-cheeseburger', 'Hatch Chile Cheeseburger', 'American', 'Dinner', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'hatch chile cheeseburger'),
  c('anadama-bread', 'Anadama Bread', 'American', 'Baking', 'Medium', 30, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'anadama bread'),
  c('pretzel-buns', 'Pretzel Buns', 'American', 'Baking', 'Hard', 30, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'pretzel buns'),
  c('classic-hollandaise', 'Classic Hollandaise', 'French', 'Quick Meals', 'Medium', 5, 10, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'classic hollandaise'),
  c('compound-butter', 'Compound Butter', 'French', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'compound butter'),
  c('homemade-ricotta', 'Homemade Ricotta', 'Italian', 'Lunch', 'Easy', 5, 15, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'homemade ricotta'),
  c('homemade-ghee', 'Homemade Ghee', 'Indian', 'Quick Meals', 'Easy', 5, 25, 20, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'homemade ghee'),
  c('shortcrust-pastry', 'Shortcrust Pastry', 'British', 'Baking', 'Easy', 15, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'shortcrust pastry'),
  c('fresh-egg-pasta', 'Fresh Egg Pasta', 'Italian', 'Dinner', 'Medium', 30, 3, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'fresh egg pasta'),
  c('hoisin-sauce', 'Hoisin Sauce', 'Chinese', 'Quick Meals', 'Easy', 5, 10, 12, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'hoisin sauce'),
  c('moo-shu-pork', 'Moo Shu Pork', 'Chinese', 'Dinner', 'Medium', 20, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'moo shu pork'),
  c('kung-pao-shrimp', 'Kung Pao Shrimp', 'Chinese', 'Quick Meals', 'Easy', 15, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'kung pao shrimp'),
  c('szechuan-beef', 'Szechuan Beef', 'Chinese', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'szechuan beef'),
  c('caesar-cocktail', 'Caesar Cocktail', 'Canadian', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Dairy-Free'], ['new'], 'caesar cocktail'),
  c('leek-and-potato-pie', 'Leek and Potato Pie', 'British', 'Dinner', 'Medium', 25, 64, 6, 0, 0, ['Vegetarian'], ['new'], 'leek and potato pie'),
  c('broiled-lobster-tail', 'Broiled Lobster Tail', 'American', 'Dinner', 'Medium', 10, 10, 2, 0, 0, ['Gluten-Free'], ['new'], 'broiled lobster tail'),
  c('mussels-in-white-wine', 'Mussels in White Wine', 'French', 'Dinner', 'Easy', 10, 10, 2, 0, 0, [], ['new'], 'mussels in white wine'),
  c('honey-garlic-ribs', 'Honey Garlic Ribs', 'Canadian', 'Dinner', 'Easy', 15, 140, 6, 0, 0, ['Dairy-Free'], ['new'], 'honey garlic ribs'),
  c('chateaubriand', 'Chateaubriand', 'French', 'Dinner', 'Medium', 10, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'chateaubriand'),
  c('chicken-and-broccoli-bake', 'Chicken and Broccoli Bake', 'American', 'Dinner', 'Easy', 15, 35, 4, 0, 0, [], ['new'], 'chicken and broccoli bake'),
  c('apple-walnut-salad', 'Apple Walnut Salad', 'American', 'Healthy', 'Easy', 10, 3, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'apple walnut salad'),
  c('arbroath-smokie', 'Arbroath Smokie', 'Scottish', 'Dinner', 'Easy', 5, 10, 2, 0, 0, [], ['new'], 'arbroath smokie'),
  c('gala-pie', 'Gala Pie', 'British', 'Appetizers', 'Hard', 45, 120, 10, 0, 0, ['Dairy-Free'], ['new'], 'gala pie'),
  c('skirlie', 'Skirlie', 'Scottish', 'Dinner', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'skirlie'),
  c('singin-hinnies', 'Singin\' Hinnies', 'British', 'Baking', 'Easy', 15, 20, 8, 0, 0, [], ['new'], 'singin\' hinnies'),
  c('spam-fritters', 'Spam Fritters', 'British', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'spam fritters'),
  c('dagwood-dog', 'Dagwood Dog', 'Australian', 'Quick Meals', 'Easy', 15, 15, 6, 0, 0, [], ['new'], 'dagwood dog'),
  c('bulalo', 'Bulalo', 'Filipino', 'Dinner', 'Easy', 10, 186, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'bulalo'),
  c('caldereta', 'Caldereta', 'Filipino', 'Dinner', 'Medium', 20, 133, 6, 0, 0, [], ['new'], 'caldereta'),
  c('bammy', 'Bammy', 'Jamaican', 'Baking', 'Medium', 15, 10, 8, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'], ['new'], 'bammy'),
  c('coconut-drops', 'Coconut Drops', 'Jamaican', 'Desserts', 'Easy', 10, 30, 20, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'], ['new'], 'coconut drops'),
  c('fufu', 'Fufu', 'Nigerian', 'Dinner', 'Easy', 5, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'fufu'),
  c('solyanka', 'Solyanka', 'Russian', 'Dinner', 'Medium', 20, 40, 6, 0, 0, [], ['new'], 'solyanka'),
  c('zurcher-geschnetzeltes', 'Zürcher Geschnetzeltes', 'Swiss', 'Dinner', 'Medium', 15, 20, 4, 0, 0, [], ['new'], 'zürcher geschnetzeltes'),
  c('frikandel', 'Frikandel', 'Dutch', 'Dinner', 'Medium', 20, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'frikandel'),
  c('swedish-pancakes', 'Swedish Pancakes', 'Swedish', 'Breakfast', 'Easy', 5, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'swedish pancakes'),
  c('christmas-rice-porridge', 'Christmas Rice Porridge', 'Swedish', 'Holiday Specials', 'Easy', 5, 45, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'christmas rice porridge'),
  c('dakos', 'Dakos', 'Greek', 'Appetizers', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian'], ['new'], 'dakos'),
  c('fava', 'Fava', 'Greek', 'Appetizers', 'Easy', 10, 45, 6, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'], ['new'], 'fava'),
  c('piri-piri-sauce', 'Piri Piri Sauce', 'Portuguese', 'Quick Meals', 'Easy', 10, 10, 8, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'], ['new'], 'piri piri sauce'),
  c('shabu-shabu', 'Shabu Shabu', 'Japanese', 'Dinner', 'Easy', 20, 18, 4, 0, 0, ['Dairy-Free'], ['new'], 'shabu shabu'),
  c('taiyaki', 'Taiyaki', 'Japanese', 'Desserts', 'Medium', 15, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'taiyaki'),
  c('hamburg-steak', 'Hamburg Steak', 'Japanese', 'Dinner', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'hamburg steak'),
  c('napolitan-spaghetti', 'Napolitan Spaghetti', 'Japanese', 'Quick Meals', 'Easy', 5, 24, 4, 0, 0, ['Dairy-Free'], ['new'], 'napolitan spaghetti'),
  c('curry-udon', 'Curry Udon', 'Japanese', 'Quick Meals', 'Easy', 10, 20, 2, 0, 0, ['Dairy-Free'], ['new'], 'curry udon'),
  c('kakigori', 'Kakigori', 'Japanese', 'Desserts', 'Easy', 10, 5, 4, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'], ['new'], 'kakigori'),
  c('bingsu', 'Bingsu', 'Korean', 'Desserts', 'Easy', 10, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'bingsu'),
  c('popiah', 'Popiah', 'Singaporean', 'Dinner', 'Medium', 30, 30, 8, 0, 0, ['Dairy-Free'], ['new'], 'popiah'),
  c('rojak', 'Rojak', 'Malaysian', 'Appetizers', 'Easy', 20, 5, 4, 0, 0, ['Dairy-Free'], ['new'], 'rojak'),
  c('ikan-bakar', 'Ikan Bakar', 'Indonesian', 'Dinner', 'Easy', 15, 15, 2, 0, 0, ['Dairy-Free'], ['new'], 'ikan bakar'),
  c('lok-lak', 'Lok Lak', 'Cambodian', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'lok lak'),
  c('kulcha', 'Kulcha', 'Indian', 'Baking', 'Medium', 20, 18, 6, 0, 0, ['Vegetarian'], ['new'], 'kulcha'),
  c('bhatura', 'Bhatura', 'Indian', 'Dinner', 'Medium', 20, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'bhatura'),
  c('mee-rebus', 'Mee Rebus', 'Malaysian', 'Dinner', 'Medium', 20, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'mee rebus'),
  c('methi-chicken', 'Methi Chicken', 'Indian', 'Dinner', 'Easy', 15, 45, 4, 0, 0, ['Gluten-Free'], ['new'], 'methi chicken'),
  c('mandelbrot', 'Mandelbrot', 'Jewish', 'Baking', 'Medium', 20, 45, 24, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'mandelbrot'),
  c('spice-cake', 'Spice Cake', 'American', 'Baking', 'Easy', 20, 35, 12, 0, 0, ['Vegetarian'], ['new'], 'spice cake'),
  c('raisin-bread', 'Raisin Bread', 'American', 'Baking', 'Medium', 30, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'raisin bread'),
  c('crostoli', 'Crostoli', 'Italian', 'Desserts', 'Medium', 20, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'crostoli'),
  c('ricotta-pie', 'Ricotta Pie', 'Italian', 'Desserts', 'Medium', 20, 55, 10, 0, 0, ['Vegetarian'], ['new'], 'ricotta pie'),
  c('sauteed-broccoli-rabe', 'Sautéed Broccoli Rabe', 'Italian', 'Quick Meals', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'], ['new'], 'sautéed broccoli rabe'),
  c('chicken-rollatini', 'Chicken Rollatini', 'Italian', 'Dinner', 'Medium', 25, 35, 4, 0, 0, [], ['new'], 'chicken rollatini'),
  c('baked-mostaccioli', 'Baked Mostaccioli', 'Italian', 'Dinner', 'Easy', 15, 60, 8, 0, 0, [], ['new'], 'baked mostaccioli'),
  c('pepperoni-pizza', 'Pepperoni Pizza', 'American', 'Dinner', 'Medium', 20, 15, 4, 0, 0, [], ['new'], 'pepperoni pizza'),
  c('supreme-pizza', 'Supreme Pizza', 'American', 'Dinner', 'Medium', 25, 15, 4, 0, 0, [], ['new'], 'supreme pizza'),
  c('sicilian-pizza', 'Sicilian Pizza', 'Italian', 'Dinner', 'Medium', 20, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'sicilian pizza'),
  c('taco-pizza', 'Taco Pizza', 'American', 'Dinner', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'taco pizza'),
  c('enchilada-pie', 'Enchilada Pie', 'Mexican', 'Dinner', 'Easy', 15, 35, 6, 0, 0, [], ['new'], 'enchilada pie'),
  c('taco-bake', 'Taco Bake', 'American', 'Dinner', 'Easy', 15, 33, 6, 0, 0, [], ['new'], 'taco bake'),
  c('calabacitas', 'Calabacitas', 'Mexican', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'calabacitas'),
  c('pollo-asado', 'Pollo Asado', 'Mexican', 'Dinner', 'Easy', 15, 45, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pollo asado'),
  c('western-omelette', 'Western Omelette', 'American', 'Breakfast', 'Easy', 10, 10, 2, 0, 0, ['Gluten-Free'], ['new'], 'western omelette'),
  c('blueberry-pancakes', 'Blueberry Pancakes', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'blueberry pancakes'),
  c('oatmeal-pancakes', 'Oatmeal Pancakes', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'oatmeal pancakes'),
  c('eggnog-french-toast', 'Eggnog French Toast', 'American', 'Holiday Specials', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'eggnog french toast'),
  c('farina-porridge', 'Farina Porridge', 'American', 'Breakfast', 'Easy', 2, 8, 2, 0, 0, ['Vegetarian'], ['new'], 'farina porridge'),
  c('little-smokies', 'Little Smokies', 'American', 'Appetizers', 'Easy', 5, 25, 12, 0, 0, ['Dairy-Free'], ['new'], 'little smokies'),
  c('taco-dip', 'Taco Dip', 'American', 'Appetizers', 'Easy', 15, 0, 12, 0, 0, [], ['new'], 'taco dip'),
  c('shrimp-dip', 'Shrimp Dip', 'American', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, [], ['new'], 'shrimp dip'),
  c('orange-fluff', 'Orange Fluff', 'American', 'Desserts', 'Easy', 10, 0, 8, 0, 0, [], ['new'], 'orange fluff'),
  c('cake-doughnuts', 'Cake Doughnuts', 'American', 'Desserts', 'Medium', 25, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'cake doughnuts'),
  c('grilled-nopales', 'Grilled Nopales', 'Mexican', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'], ['new'], 'grilled nopales'),
  c('muesli-slice', 'Muesli Slice', 'Australian', 'Baking', 'Easy', 15, 20, 16, 0, 0, ['Vegetarian'], ['new'], 'muesli slice'),
  c('kiwi-onion-dip', 'Kiwi Onion Dip', 'New Zealand', 'Appetizers', 'Easy', 10, 10, 10, 0, 0, ['Vegetarian'], ['new'], 'kiwi onion dip'),
  c('kumara-chips', 'Kumara Chips', 'New Zealand', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'], ['new'], 'kumara chips'),
  c('strawberry-fool', 'Strawberry Fool', 'British', 'Desserts', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'strawberry fool'),
  c('peppermint-creams', 'Peppermint Creams', 'British', 'Desserts', 'Easy', 25, 0, 30, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'peppermint creams'),
];
