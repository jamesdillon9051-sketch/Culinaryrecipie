'use strict';

/**
 * Weekly Delight — recipe catalog, volume forty-five.
 * One hundred slow cooker dishes, sides, salads, sandwiches, drinks, breakfasts, vegetable mains, pasta and sauces, with a few more fish and puddings.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: American 9, Italian 2, British 1, French 1, Greek 1, Hungarian 1, Thai 1, Turkish 1.
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
  c('roasted-squash-and-apple-soup', 'Roasted Squash and Apple Soup', 'British', 'Healthy', 'Easy', 15, 45, 4, 0, 0, ['Vegetarian'], ['new'], 'roasted squash and apple soup'),
  c('stracciatella', 'Stracciatella', 'Italian', 'Quick Meals', 'Easy', 5, 10, 4, 0, 0, [], ['new'], 'stracciatella'),
  c('hungarian-mushroom-soup', 'Hungarian Mushroom Soup', 'Hungarian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'hungarian mushroom soup'),
  c('tom-yum-soup', 'Tom Yum Soup', 'Thai', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'tom yum soup'),
  c('dolma', 'Dolma', 'Greek', 'Appetizers', 'Medium', 45, 50, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'dolma'),
  c('kofte-with-yoghurt', 'Kofte with Yoghurt', 'Turkish', 'Dinner', 'Easy', 20, 12, 4, 0, 0, [], ['new'], 'kofte with yoghurt'),
  c('air-fryer-zucchini-fries', 'Air Fryer Zucchini Fries', 'American', 'Appetizers', 'Easy', 15, 12, 4, 0, 0, [], ['new'], 'air fryer zucchini fries'),
  c('slow-cooker-pork-chops', 'Slow Cooker Pork Chops', 'American', 'Dinner', 'Easy', 10, 240, 4, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker pork chops'),
  c('slow-cooker-lasagne', 'Slow Cooker Lasagne', 'Italian', 'Dinner', 'Medium', 30, 240, 8, 0, 0, [], ['new'], 'slow cooker lasagne'),
  c('slow-cooker-chilli-con-carne', 'Slow Cooker Chilli con Carne', 'American', 'Dinner', 'Easy', 15, 300, 6, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker chilli con carne'),
  c('slow-cooker-beef-bourguignon', 'Slow Cooker Beef Bourguignon', 'French', 'Dinner', 'Medium', 30, 360, 6, 0, 0, [], ['new'], 'slow cooker beef bourguignon'),
  c('slow-cooker-honey-garlic-chicken', 'Slow Cooker Honey Garlic Chicken', 'American', 'Dinner', 'Easy', 10, 240, 4, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker honey garlic chicken'),
  c('slow-cooker-macaroni-and-cheese', 'Slow Cooker Macaroni and Cheese', 'American', 'Dinner', 'Easy', 15, 120, 8, 0, 0, ['Vegetarian'], ['new'], 'slow cooker macaroni and cheese'),
  c('slow-cooker-mashed-potatoes', 'Slow Cooker Mashed Potatoes', 'American', 'Dinner', 'Easy', 15, 240, 8, 0, 0, [], ['new'], 'slow cooker mashed potatoes'),
  c('slow-cooker-apple-crisp', 'Slow Cooker Apple Crisp', 'American', 'Desserts', 'Easy', 15, 180, 6, 0, 0, ['Vegetarian'], ['new'], 'slow cooker apple crisp'),
  c('sheet-pan-salmon-and-broccoli', 'Sheet Pan Salmon and Broccoli', 'American', 'Quick Meals', 'Easy', 10, 18, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'sheet pan salmon and broccoli'),
  c('sheet-pan-shrimp-boil', 'Sheet Pan Shrimp Boil', 'American', 'Dinner', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'sheet pan shrimp boil')
];
