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
 * Spread: American 40, Italian 10, British 8, Mexican 2, Chinese 1, French 1, Indian 1.
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
  c('gluten-free-carrot-cake', 'Gluten-Free Carrot Cake', 'British', 'Baking', 'Medium', 25, 40, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free carrot cake'),
  c('gluten-free-chicken-nuggets', 'Gluten-Free Chicken Nuggets', 'American', 'Dinner', 'Easy', 20, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'gluten-free chicken nuggets'),
  c('gluten-free-cinnamon-rolls', 'Gluten-Free Cinnamon Rolls', 'American', 'Baking', 'Hard', 30, 25, 9, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free cinnamon rolls'),
  c('gluten-free-crackers', 'Gluten-Free Crackers', 'American', 'Appetizers', 'Easy', 15, 20, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'gluten-free crackers'),
  c('gluten-free-crepes', 'Gluten-Free Crepes', 'French', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free crepes'),
  c('gluten-free-dumplings', 'Gluten-Free Dumplings', 'American', 'Dinner', 'Medium', 20, 20, 6, 0, 0, ['Gluten-Free'], ['new'], 'gluten-free dumplings'),
  c('gluten-free-fried-chicken', 'Gluten-Free Fried Chicken', 'American', 'Dinner', 'Medium', 20, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'gluten-free fried chicken'),
  c('gluten-free-gnocchi', 'Gluten-Free Gnocchi', 'Italian', 'Dinner', 'Medium', 30, 30, 4, 0, 0, ['Gluten-Free'], ['new'], 'gluten-free gnocchi'),
  c('gluten-free-gravy', 'Gluten-Free Gravy', 'British', 'Dinner', 'Easy', 5, 10, 6, 0, 0, ['Gluten-Free'], ['new'], 'gluten-free gravy'),
  c('gluten-free-lasagna', 'Gluten-Free Lasagna', 'Italian', 'Dinner', 'Medium', 30, 50, 8, 0, 0, ['Gluten-Free'], ['new'], 'gluten-free lasagna'),
  c('gluten-free-mac-and-cheese', 'Gluten-Free Mac and Cheese', 'American', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free mac and cheese'),
  c('gluten-free-meatballs', 'Gluten-Free Meatballs', 'Italian', 'Dinner', 'Easy', 20, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'gluten-free meatballs'),
  c('gluten-free-meatloaf', 'Gluten-Free Meatloaf', 'American', 'Dinner', 'Easy', 15, 55, 6, 0, 0, ['Gluten-Free'], ['new'], 'gluten-free meatloaf'),
  c('gluten-free-muffins', 'Gluten-Free Muffins', 'American', 'Breakfast', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free muffins'),
  c('gluten-free-naan', 'Gluten-Free Naan', 'Indian', 'Dinner', 'Medium', 20, 12, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free naan'),
  c('gluten-free-pancakes', 'Gluten-Free Pancakes', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free pancakes'),
  c('gluten-free-pasta-salad', 'Gluten-Free Pasta Salad', 'Italian', 'Lunch', 'Easy', 15, 12, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free pasta salad'),
  c('gluten-free-pie-crust', 'Gluten-Free Pie Crust', 'American', 'Baking', 'Medium', 20, 20, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free pie crust'),
  c('gluten-free-pizza-dough', 'Gluten-Free Pizza Dough', 'Italian', 'Dinner', 'Medium', 15, 20, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free pizza dough'),
  c('gluten-free-sandwich-bread', 'Gluten-Free Sandwich Bread', 'American', 'Baking', 'Medium', 15, 50, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free sandwich bread'),
  c('gluten-free-scones', 'Gluten-Free Scones', 'British', 'Baking', 'Easy', 15, 18, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free scones'),
  c('gluten-free-stuffing', 'Gluten-Free Stuffing', 'American', 'Holiday Specials', 'Easy', 20, 40, 8, 0, 0, ['Gluten-Free'], ['new'], 'gluten-free stuffing'),
  c('gluten-free-tortillas', 'Gluten-Free Tortillas', 'Mexican', 'Dinner', 'Medium', 20, 15, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'gluten-free tortillas'),
  c('gluten-free-waffles', 'Gluten-Free Waffles', 'American', 'Breakfast', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free waffles'),
  c('gluten-free-yorkshire-puddings', 'Gluten-Free Yorkshire Puddings', 'British', 'Dinner', 'Medium', 10, 25, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gluten-free yorkshire puddings'),
  c('high-protein-breakfast-burrito', 'High-Protein Breakfast Burrito', 'American', 'Breakfast', 'Easy', 15, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'high-protein breakfast burrito'),
  c('high-protein-chili', 'High-Protein Chili', 'American', 'Healthy', 'Easy', 15, 40, 6, 0, 0, ['Dairy-Free'], ['new'], 'high-protein chili'),
  c('high-protein-meal-prep-bowls', 'High-Protein Meal Prep Bowls', 'American', 'Healthy', 'Easy', 20, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'high-protein meal prep bowls'),
  c('high-protein-overnight-oats', 'High-Protein Overnight Oats', 'American', 'Breakfast', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian'], ['new'], 'high-protein overnight oats'),
  c('high-protein-pancakes', 'High-Protein Pancakes', 'American', 'Breakfast', 'Easy', 10, 15, 3, 0, 0, ['Vegetarian'], ['new'], 'high-protein pancakes'),
  c('high-protein-pasta', 'High-Protein Pasta', 'Italian', 'Healthy', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'high-protein pasta'),
  c('high-protein-waffles', 'High-Protein Waffles', 'American', 'Breakfast', 'Easy', 10, 15, 3, 0, 0, ['Vegetarian'], ['new'], 'high-protein waffles'),
  c('low-carb-breakfast-casserole', 'Low-Carb Breakfast Casserole', 'American', 'Breakfast', 'Easy', 15, 40, 8, 0, 0, [], ['new'], 'low-carb breakfast casserole'),
  c('low-carb-chicken-casserole', 'Low-Carb Chicken Casserole', 'American', 'Dinner', 'Easy', 15, 35, 6, 0, 0, [], ['new'], 'low-carb chicken casserole'),
  c('low-carb-chicken-parmesan', 'Low-Carb Chicken Parmesan', 'Italian', 'Dinner', 'Medium', 20, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'low-carb chicken parmesan'),
  c('low-carb-chili', 'Low-Carb Chili', 'American', 'Dinner', 'Easy', 15, 40, 6, 0, 0, ['Dairy-Free'], ['new'], 'low-carb chili'),
  c('low-carb-egg-muffins', 'Low-Carb Egg Muffins', 'American', 'Breakfast', 'Easy', 10, 20, 6, 0, 0, [], ['new'], 'low-carb egg muffins'),
  c('low-carb-granola', 'Low-Carb Granola', 'American', 'Breakfast', 'Easy', 10, 25, 10, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'low-carb granola'),
  c('low-carb-meatballs', 'Low-Carb Meatballs', 'Italian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'low-carb meatballs')
];
