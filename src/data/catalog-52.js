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
 * Spread: American 50.
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
  c('glazed-baked-ham', 'Glazed Baked Ham', 'American', 'Holiday Specials', 'Easy', 15, 150, 12, 0, 0, ['Dairy-Free'], ['new'], 'glazed baked ham')
];
