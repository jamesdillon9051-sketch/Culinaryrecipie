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
 * Spread: American 25.
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
  c('vermont-maple-cream-pie', 'Vermont Maple Cream Pie', 'American', 'Desserts', 'Medium', 25, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'vermont maple cream pie')
];
