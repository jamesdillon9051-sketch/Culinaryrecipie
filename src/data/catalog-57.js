'use strict';

/**
 * Weekly Delight — recipe catalog, volume fifty-seven.
 * One hundred more of the dishes people in the USA, Canada, Australia, the UK and New Zealand look for by name.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: American 16, British 5, Italian 2, Chinese 1, Mexican 1.
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
  c('3-ingredient-biscuits', '3 Ingredient Biscuits', 'American', 'Baking', 'Easy', 10, 15, 8, 0, 0, ['Vegetarian'], ['new'], '3 ingredient biscuits'),
  c('3-ingredient-mac-and-cheese', '3 Ingredient Mac and Cheese', 'American', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian'], ['new'], '3 ingredient mac and cheese'),
  c('3-ingredient-pancakes', '3 Ingredient Pancakes', 'American', 'Breakfast', 'Easy', 5, 10, 4, 0, 0, ['Vegetarian'], ['new'], '3 ingredient pancakes'),
  c('3-ingredient-pizza-dough', '3 Ingredient Pizza Dough', 'Italian', 'Dinner', 'Easy', 10, 15, 2, 0, 0, ['Vegetarian'], ['new'], '3 ingredient pizza dough'),
  c('dairy-free-chocolate-cake', 'Dairy-Free Chocolate Cake', 'American', 'Baking', 'Medium', 25, 30, 12, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'dairy-free chocolate cake'),
  c('dairy-free-banana-bread', 'Dairy-Free Banana Bread', 'American', 'Baking', 'Easy', 15, 55, 10, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'dairy-free banana bread'),
  c('dairy-free-mac-and-cheese', 'Dairy-Free Mac and Cheese', 'American', 'Dinner', 'Medium', 15, 20, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'dairy-free mac and cheese'),
  c('dairy-free-mashed-potatoes', 'Dairy-Free Mashed Potatoes', 'American', 'Dinner', 'Easy', 10, 20, 6, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'dairy-free mashed potatoes'),
  c('dairy-free-pancakes', 'Dairy-Free Pancakes', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'dairy-free pancakes'),
  c('dairy-free-ranch-dressing', 'Dairy-Free Ranch Dressing', 'American', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'dairy-free ranch dressing'),
  c('dairy-free-cream-of-mushroom-soup', 'Dairy-Free Cream of Mushroom Soup', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'dairy-free cream of mushroom soup'),
  c('dairy-free-scones', 'Dairy-Free Scones', 'British', 'Baking', 'Easy', 15, 18, 8, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'dairy-free scones'),
  c('freezer-biscuits', 'Freezer Biscuits', 'American', 'Baking', 'Easy', 15, 18, 12, 0, 0, ['Vegetarian'], ['new'], 'freezer biscuits'),
  c('freezer-dumplings', 'Freezer Dumplings', 'Chinese', 'Dinner', 'Medium', 45, 10, 6, 0, 0, ['Dairy-Free'], ['new'], 'freezer dumplings'),
  c('freezer-enchiladas', 'Freezer Enchiladas', 'Mexican', 'Dinner', 'Medium', 30, 75, 8, 0, 0, [], ['new'], 'freezer enchiladas'),
  c('freezer-lasagna', 'Freezer Lasagna', 'Italian', 'Dinner', 'Medium', 40, 45, 8, 0, 0, [], ['new'], 'freezer lasagna'),
  c('freezer-mac-and-cheese', 'Freezer Mac and Cheese', 'American', 'Dinner', 'Easy', 20, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'freezer mac and cheese'),
  c('freezer-muffins', 'Freezer Muffins', 'American', 'Breakfast', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'freezer muffins'),
  c('freezer-pot-pie', 'Freezer Pot Pie', 'American', 'Dinner', 'Medium', 30, 40, 6, 0, 0, [], ['new'], 'freezer pot pie'),
  c('gluten-free-apple-crumble', 'Gluten-Free Apple Crumble', 'British', 'Desserts', 'Easy', 20, 40, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free apple crumble'),
  c('gluten-free-banana-bread', 'Gluten-Free Banana Bread', 'American', 'Baking', 'Easy', 15, 55, 10, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free banana bread'),
  c('gluten-free-beer-battered-fish', 'Gluten-Free Beer Battered Fish', 'British', 'Dinner', 'Medium', 15, 12, 4, 0, 0, ['Gluten-Free'], ['new'], 'gluten-free beer battered fish'),
  c('gluten-free-biscuits', 'Gluten-Free Biscuits', 'American', 'Baking', 'Medium', 15, 16, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free biscuits'),
  c('gluten-free-bread', 'Gluten-Free Bread', 'British', 'Baking', 'Medium', 15, 50, 12, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'gluten-free bread'),
  c('gluten-free-carrot-cake', 'Gluten-Free Carrot Cake', 'British', 'Baking', 'Medium', 25, 40, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free carrot cake')
];
