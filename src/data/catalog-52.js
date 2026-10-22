'use strict';

/**
 * Weekly Delight — recipe catalog, volume fifty-two.
 * One hundred more of the dishes people in the USA, Canada, Australia, the UK and New Zealand look for by name.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: American 98, Spanish 2.
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
  c('apple-pandowdy', 'Apple Pandowdy', 'American', 'Desserts', 'Medium', 25, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'apple pandowdy'),
  c('sourdough-discard-crackers', 'Sourdough Discard Crackers', 'American', 'Baking', 'Easy', 15, 20, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'sourdough discard crackers'),
  c('barbecue-rub', 'Barbecue Rub', 'American', 'Dinner', 'Easy', 5, 0, 12, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'barbecue rub'),
  c('comeback-sauce', 'Comeback Sauce', 'American', 'Appetizers', 'Easy', 5, 0, 8, 0, 0, ['Dairy-Free'], ['new'], 'comeback sauce'),
  c('fry-sauce', 'Fry Sauce', 'American', 'Appetizers', 'Easy', 5, 0, 8, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'fry sauce'),
  c('kale-salad-with-lemon', 'Kale Salad with Lemon', 'American', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Gluten-Free'], ['new'], 'kale salad with lemon'),
  c('cranberry-pecan-salad', 'Cranberry Pecan Salad', 'American', 'Lunch', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian'], ['new'], 'cranberry pecan salad'),
  c('apple-cabbage-slaw', 'Apple Cabbage Slaw', 'American', 'Lunch', 'Easy', 15, 0, 6, 0, 0, ['Vegetarian'], ['new'], 'apple cabbage slaw'),
  c('chicken-salad-sandwich-with-cranberries', 'Chicken Salad Sandwich with Cranberries', 'American', 'Lunch', 'Easy', 15, 0, 4, 0, 0, [], ['new'], 'chicken salad sandwich with cranberries'),
  c('peanut-butter-and-banana-sandwich', 'Peanut Butter and Banana Sandwich', 'American', 'Quick Meals', 'Easy', 5, 3, 1, 0, 0, ['Vegetarian'], ['new'], 'peanut butter and banana sandwich'),
  c('honey-garlic-wings', 'Honey Garlic Wings', 'American', 'Appetizers', 'Easy', 10, 40, 4, 0, 0, [], ['new'], 'honey garlic wings'),
  c('chicken-scampi', 'Chicken Scampi', 'American', 'Dinner', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'chicken scampi'),
  c('broccoli-cheddar-chicken', 'Broccoli Cheddar Chicken', 'American', 'Dinner', 'Easy', 15, 30, 4, 0, 0, [], ['new'], 'broccoli cheddar chicken'),
  c('tex-mex-migas', 'Tex-Mex Migas', 'American', 'Breakfast', 'Easy', 10, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'tex-mex migas'),
  c('texas-beef-ribs', 'Texas Beef Ribs', 'American', 'Dinner', 'Medium', 20, 300, 8, 0, 0, ['Dairy-Free'], ['new'], 'texas beef ribs'),
  c('texas-toast', 'Texas Toast', 'American', 'Appetizers', 'Easy', 5, 10, 6, 0, 0, [], ['new'], 'texas toast'),
  c('kansas-city-barbecue-sauce', 'Kansas City Barbecue Sauce', 'American', 'Dinner', 'Easy', 10, 30, 12, 0, 0, ['Dairy-Free'], ['new'], 'kansas city barbecue sauce'),
  c('memphis-dry-rub-ribs', 'Memphis Dry Rub Ribs', 'American', 'Dinner', 'Medium', 20, 180, 6, 0, 0, ['Dairy-Free'], ['new'], 'memphis dry rub ribs'),
  c('carolina-mustard-sauce', 'Carolina Mustard Sauce', 'American', 'Dinner', 'Easy', 5, 10, 10, 0, 0, [], ['new'], 'carolina mustard sauce'),
  c('alabama-white-sauce-chicken', 'Alabama White Sauce Chicken', 'American', 'Dinner', 'Easy', 15, 45, 6, 0, 0, ['Dairy-Free'], ['new'], 'alabama white sauce chicken'),
  c('st-louis-ribs', 'St Louis Ribs', 'American', 'Dinner', 'Medium', 20, 180, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'st louis ribs'),
  c('new-york-style-pizza', 'New York Style Pizza', 'American', 'Dinner', 'Hard', 30, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'new york style pizza'),
  c('new-england-boiled-dinner', 'New England Boiled Dinner', 'American', 'Dinner', 'Easy', 20, 180, 6, 0, 0, ['Dairy-Free'], ['new'], 'new england boiled dinner'),
  c('maine-lobster-stew', 'Maine Lobster Stew', 'American', 'Dinner', 'Medium', 20, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'maine lobster stew'),
  c('vermont-maple-cream-pie', 'Vermont Maple Cream Pie', 'American', 'Desserts', 'Medium', 25, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'vermont maple cream pie'),
  c('pennsylvania-dutch-chicken-corn-soup', 'Pennsylvania Dutch Chicken Corn Soup', 'American', 'Dinner', 'Easy', 20, 60, 6, 0, 0, [], ['new'], 'pennsylvania dutch chicken corn soup'),
  c('maryland-crab-soup', 'Maryland Crab Soup', 'American', 'Dinner', 'Easy', 20, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'maryland crab soup'),
  c('smith-island-cake', 'Smith Island Cake', 'American', 'Desserts', 'Hard', 60, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'smith island cake'),
  c('virginia-ham-biscuits', 'Virginia Ham Biscuits', 'American', 'Appetizers', 'Medium', 25, 15, 12, 0, 0, [], ['new'], 'virginia ham biscuits'),
  c('beer-brats', 'Beer Brats', 'American', 'Dinner', 'Easy', 10, 30, 6, 0, 0, [], ['new'], 'beer brats'),
  c('cherry-cobbler', 'Cherry Cobbler', 'American', 'Desserts', 'Easy', 20, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'cherry cobbler'),
  c('wisconsin-butter-burgers', 'Wisconsin Butter Burgers', 'American', 'Dinner', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'wisconsin butter burgers'),
  c('kentucky-derby-pie', 'Kentucky Derby Pie', 'American', 'Desserts', 'Medium', 20, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'kentucky derby pie'),
  c('oklahoma-onion-burger', 'Oklahoma Onion Burger', 'American', 'Dinner', 'Easy', 15, 10, 4, 0, 0, [], ['new'], 'oklahoma onion burger'),
  c('arkansas-possum-pie', 'Arkansas Possum Pie', 'American', 'Desserts', 'Medium', 35, 20, 10, 0, 0, ['Vegetarian'], ['new'], 'arkansas possum pie'),
  c('colorado-green-chili', 'Colorado Green Chili', 'American', 'Dinner', 'Medium', 25, 90, 6, 0, 0, ['Dairy-Free'], ['new'], 'colorado green chili'),
  c('arizona-cheese-crisp', 'Arizona Cheese Crisp', 'American', 'Quick Meals', 'Easy', 5, 8, 2, 0, 0, ['Vegetarian'], ['new'], 'arizona cheese crisp'),
  c('navajo-fry-bread', 'Navajo Fry Bread', 'American', 'Baking', 'Medium', 15, 15, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'navajo fry bread'),
  c('california-burrito', 'California Burrito', 'American', 'Lunch', 'Easy', 20, 15, 4, 0, 0, [], ['new'], 'california burrito'),
  c('marionberry-pie', 'Marionberry Pie', 'American', 'Desserts', 'Medium', 30, 50, 8, 0, 0, ['Vegetarian'], ['new'], 'marionberry pie'),
  c('florida-grouper-sandwich', 'Florida Grouper Sandwich', 'American', 'Lunch', 'Easy', 15, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'florida grouper sandwich'),
  c('appalachian-soup-beans', 'Appalachian Soup Beans', 'American', 'Dinner', 'Easy', 15, 120, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'appalachian soup beans'),
  c('appalachian-stack-cake', 'Appalachian Stack Cake', 'American', 'Desserts', 'Hard', 60, 45, 12, 0, 0, ['Vegetarian'], ['new'], 'appalachian stack cake'),
  c('ozark-pudding', 'Ozark Pudding', 'American', 'Desserts', 'Easy', 20, 35, 6, 0, 0, ['Vegetarian'], ['new'], 'ozark pudding'),
  c('amish-friendship-bread', 'Amish Friendship Bread', 'American', 'Baking', 'Medium', 20, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'amish friendship bread'),
  c('amish-oatmeal-pie', 'Amish Oatmeal Pie', 'American', 'Desserts', 'Easy', 20, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'amish oatmeal pie'),
  c('turkey-brine', 'Turkey Brine', 'American', 'Holiday Specials', 'Easy', 15, 10, 12, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'turkey brine'),
  c('brown-sugar-ham-glaze', 'Brown Sugar Ham Glaze', 'American', 'Holiday Specials', 'Easy', 5, 10, 12, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'brown sugar ham glaze'),
  c('cranberry-brie-bites', 'Cranberry Brie Bites', 'American', 'Holiday Specials', 'Easy', 15, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'cranberry brie bites'),
  c('glazed-baked-ham', 'Glazed Baked Ham', 'American', 'Holiday Specials', 'Easy', 15, 150, 12, 0, 0, ['Dairy-Free'], ['new'], 'glazed baked ham'),
  c('witch-finger-cookies', 'Witch Finger Cookies', 'American', 'Holiday Specials', 'Medium', 30, 15, 24, 0, 0, ['Vegetarian'], ['new'], 'witch finger cookies'),
  c('popcorn-balls', 'Popcorn Balls', 'American', 'Holiday Specials', 'Easy', 15, 10, 10, 0, 0, ['Gluten-Free'], ['new'], 'popcorn balls'),
  c('pizza-dip', 'Pizza Dip', 'American', 'Appetizers', 'Easy', 10, 25, 8, 0, 0, [], ['new'], 'pizza dip'),
  c('fruit-jello-salad', 'Fruit Jello Salad', 'American', 'Desserts', 'Easy', 15, 0, 8, 0, 0, ['Gluten-Free'], ['new'], 'fruit jello salad'),
  c('southern-chow-chow', 'Southern Chow Chow', 'American', 'Appetizers', 'Easy', 30, 15, 10, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'southern chow chow'),
  c('appalachian-fried-apple-pies', 'Appalachian Fried Apple Pies', 'American', 'Desserts', 'Medium', 40, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'appalachian fried apple pies'),
  c('switchel', 'Switchel', 'American', 'Drinks', 'Easy', 5, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'switchel'),
  c('roscon-de-reyes', 'Roscón de Reyes', 'Spanish', 'Holiday Specials', 'Hard', 50, 30, 10, 0, 0, ['Vegetarian'], ['new'], 'roscón de reyes'),
  c('air-fryer-potato-wedges', 'Air Fryer Potato Wedges', 'American', 'Quick Meals', 'Easy', 5, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'air fryer potato wedges'),
  c('air-fryer-corn-ribs', 'Air Fryer Corn Ribs', 'American', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'air fryer corn ribs'),
  c('slow-cooker-pulled-beef', 'Slow Cooker Pulled Beef', 'American', 'Dinner', 'Easy', 10, 480, 8, 0, 0, [], ['new'], 'slow cooker pulled beef'),
  c('slow-cooker-honey-mustard-chicken', 'Slow Cooker Honey Mustard Chicken', 'American', 'Dinner', 'Easy', 10, 240, 4, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker honey mustard chicken'),
  c('slow-cooker-split-pea-soup', 'Slow Cooker Split Pea Soup', 'American', 'Dinner', 'Easy', 10, 360, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'slow cooker split pea soup'),
  c('slow-cooker-apple-butter', 'Slow Cooker Apple Butter', 'American', 'Appetizers', 'Easy', 20, 600, 16, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'slow cooker apple butter'),
  c('slow-cooker-oatmeal', 'Slow Cooker Oatmeal', 'American', 'Breakfast', 'Easy', 5, 420, 4, 0, 0, ['Vegetarian'], ['new'], 'slow cooker oatmeal'),
  c('slow-cooker-sticky-ribs', 'Slow Cooker Sticky Ribs', 'American', 'Dinner', 'Easy', 10, 360, 4, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker sticky ribs'),
  c('slow-cooker-stuffed-peppers', 'Slow Cooker Stuffed Peppers', 'American', 'Dinner', 'Easy', 20, 240, 4, 0, 0, ['Gluten-Free'], ['new'], 'slow cooker stuffed peppers'),
  c('instant-pot-yogurt', 'Instant Pot Yogurt', 'American', 'Breakfast', 'Medium', 10, 480, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'instant pot yogurt'),
  c('instant-pot-egg-bites', 'Instant Pot Egg Bites', 'American', 'Breakfast', 'Easy', 10, 10, 4, 0, 0, [], ['new'], 'instant pot egg bites'),
  c('cast-iron-cornbread', 'Cast Iron Cornbread', 'American', 'Baking', 'Easy', 10, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'cast iron cornbread'),
  c('cast-iron-pizza', 'Cast Iron Pizza', 'American', 'Dinner', 'Medium', 20, 20, 4, 0, 0, [], ['new'], 'cast iron pizza'),
  c('cast-iron-steak', 'Cast Iron Steak', 'American', 'Quick Meals', 'Easy', 5, 10, 2, 0, 0, ['Gluten-Free'], ['new'], 'cast iron steak'),
  c('cast-iron-skillet-cookie', 'Cast Iron Skillet Cookie', 'American', 'Desserts', 'Easy', 10, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'cast iron skillet cookie'),
  c('dutch-oven-chicken', 'Dutch Oven Chicken', 'American', 'Dinner', 'Easy', 15, 75, 4, 0, 0, [], ['new'], 'dutch oven chicken'),
  c('pull-apart-cheese-bread', 'Pull-Apart Cheese Bread', 'American', 'Baking', 'Medium', 25, 30, 8, 0, 0, [], ['new'], 'pull-apart cheese bread'),
  c('cheese-twists', 'Cheese Twists', 'American', 'Appetizers', 'Easy', 10, 15, 12, 0, 0, [], ['new'], 'cheese twists'),
  c('pumpkin-cream-cheese-muffins', 'Pumpkin Cream Cheese Muffins', 'American', 'Baking', 'Easy', 20, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'pumpkin cream cheese muffins'),
  c('blueberry-streusel-muffins', 'Blueberry Streusel Muffins', 'American', 'Baking', 'Easy', 15, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'blueberry streusel muffins'),
  c('bagel-bites', 'Bagel Bites', 'American', 'Appetizers', 'Easy', 10, 12, 12, 0, 0, [], ['new'], 'bagel bites'),
  c('sourdough-pizza-crust', 'Sourdough Pizza Crust', 'American', 'Dinner', 'Medium', 20, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'sourdough pizza crust'),
  c('sourdough-cinnamon-rolls', 'Sourdough Cinnamon Rolls', 'American', 'Baking', 'Hard', 45, 30, 10, 0, 0, ['Vegetarian'], ['new'], 'sourdough cinnamon rolls'),
  c('sourdough-brownies', 'Sourdough Brownies', 'American', 'Desserts', 'Easy', 15, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'sourdough brownies'),
  c('sourdough-waffles', 'Sourdough Waffles', 'American', 'Breakfast', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'sourdough waffles'),
  c('cottage-cheese-toast', 'Cottage Cheese Toast', 'American', 'Quick Meals', 'Easy', 5, 5, 2, 0, 0, ['Vegetarian'], ['new'], 'cottage cheese toast'),
  c('biscuits-and-gravy-casserole', 'Biscuits and Gravy Casserole', 'American', 'Breakfast', 'Easy', 20, 40, 8, 0, 0, [], ['new'], 'biscuits and gravy casserole'),
  c('chicken-francoise', 'Chicken Françoise', 'American', 'Dinner', 'Medium', 20, 25, 4, 0, 0, [], ['new'], 'chicken françoise'),
  c('chicken-vesuvio', 'Chicken Vesuvio', 'American', 'Dinner', 'Medium', 20, 50, 4, 0, 0, [], ['new'], 'chicken vesuvio'),
  c('chicken-murphy', 'Chicken Murphy', 'American', 'Dinner', 'Medium', 20, 45, 4, 0, 0, [], ['new'], 'chicken murphy'),
  c('scalloped-corn', 'Scalloped Corn', 'American', 'Dinner', 'Easy', 10, 45, 6, 0, 0, ['Vegetarian'], ['new'], 'scalloped corn'),
  c('reuben-casserole', 'Reuben Casserole', 'American', 'Dinner', 'Easy', 15, 40, 6, 0, 0, [], ['new'], 'reuben casserole'),
  c('sonoran-hot-dog', 'Sonoran Hot Dog', 'American', 'Lunch', 'Easy', 15, 10, 4, 0, 0, [], ['new'], 'sonoran hot dog'),
  c('jucy-lucy', 'Jucy Lucy', 'American', 'Dinner', 'Medium', 20, 12, 4, 0, 0, [], ['new'], 'jucy lucy'),
  c('bacon-wrapped-meatloaf', 'Bacon Wrapped Meatloaf', 'American', 'Dinner', 'Easy', 20, 60, 6, 0, 0, [], ['new'], 'bacon wrapped meatloaf'),
  c('pizza-casserole', 'Pizza Casserole', 'American', 'Dinner', 'Easy', 15, 35, 6, 0, 0, [], ['new'], 'pizza casserole'),
  c('crown-roast-of-pork', 'Crown Roast of Pork', 'American', 'Holiday Specials', 'Hard', 30, 120, 8, 0, 0, [], ['new'], 'crown roast of pork'),
  c('membrillo', 'Membrillo', 'Spanish', 'Desserts', 'Medium', 20, 120, 16, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'membrillo'),
  c('pan-gravy', 'Pan Gravy', 'American', 'Dinner', 'Easy', 5, 10, 6, 0, 0, [], ['new'], 'pan gravy'),
  c('red-eye-gravy', 'Red Eye Gravy', 'American', 'Breakfast', 'Easy', 5, 10, 4, 0, 0, ['Gluten-Free'], ['new'], 'red eye gravy'),
  c('cocktail-meatballs', 'Cocktail Meatballs', 'American', 'Appetizers', 'Easy', 20, 30, 10, 0, 0, [], ['new'], 'cocktail meatballs'),
  c('bacon-wrapped-scallops', 'Bacon Wrapped Scallops', 'American', 'Appetizers', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'bacon wrapped scallops')
];
