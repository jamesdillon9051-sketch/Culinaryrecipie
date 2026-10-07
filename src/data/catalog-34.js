/**
 * Weekly Delight — recipe catalog, volume thirty-four.
 * One hundred protein-rich dishes cooked with a kidney-friendly plate in mind:
 * egg whites, chicken, turkey, pork loin and lean beef, white fish, salmon,
 * shrimp and tofu, seasoned with herbs, citrus and spices instead of salt, and
 * built on the vegetables, fruit and refined grains that renal diets lean on
 * for their low potassium and phosphorus. They are familiar dishes that people
 * look for by name; no search-volume data was used to pick or rank them.
 *
 * Every recipe carries the Kidney-Friendly tag, and says "kidney-friendly" and
 * never "safe". It means a serving stays under fixed limits for sodium,
 * potassium and phosphorus, which the page prints, and that nothing on the
 * ingredient list is a cured meat, a salt substitute or a phosphate-heavy
 * ingredient. It is not advice: how much protein, potassium or phosphorus
 * a person with kidney disease needs depends on the stage, on their blood
 * results and on whether they are on dialysis, and protein is the clearest
 * case, since it is restricted at some stages and raised at others. Every page
 * sends the reader to their kidney care team. src/lib/health.js holds the
 * rules and `npm run health` fails the build for any recipe that carries the
 * tag and breaks one.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, and then read by hand. The tool refused two: a
 * lemon and oregano chicken (the Greek chicken traybake targets the same
 * search) and pork meatballs (the Danish frikadeller), which became chicken and
 * green bean stir-fry and pan-seared trout.
 *
 * This file is generated from the verified list rather than typed out from it,
 * and `npm run check` fails if two recipes are the same dish.
 *
 * Spread: American 56, Chinese 22, Mexican 6, French 5, Italian 4, British 1, Canadian 1, Hawaiian 1, Japanese 1, Middle Eastern 1, Spanish 1, Vietnamese 1.
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
  c('egg-white-frittata-with-peppers-and-onions', 'Egg White Frittata with Peppers and Onions', 'American', 'Breakfast', 'Easy', 10, 20, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'frittata'),
  c('egg-white-bites', 'Egg White Bites', 'American', 'Breakfast', 'Easy', 10, 20, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'egg white bites'),
  c('apple-cinnamon-egg-white-pancakes', 'Apple Cinnamon Egg White Pancakes', 'American', 'Breakfast', 'Easy', 10, 15, 2, 0, 0, ['Vegetarian', 'Kidney-Friendly'], ['new'], 'apple pancakes'),
  c('egg-white-french-toast', 'Egg White French Toast', 'American', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian', 'Kidney-Friendly'], ['new'], 'french toast'),
  c('egg-white-breakfast-tacos', 'Egg White Breakfast Tacos', 'Mexican', 'Breakfast', 'Easy', 10, 8, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'breakfast tacos'),
  c('egg-white-fried-rice', 'Egg White Fried Rice', 'Chinese', 'Quick Meals', 'Easy', 10, 10, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Kidney-Friendly'], ['new'], 'egg fried rice'),
  c('herbed-egg-white-scramble', 'Herbed Egg White Scramble', 'American', 'Breakfast', 'Easy', 5, 6, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'scrambled egg whites'),
  c('egg-white-oatmeal', 'Egg White Oatmeal', 'American', 'Breakfast', 'Easy', 3, 8, 2, 0, 0, ['Vegetarian', 'Kidney-Friendly'], ['new'], 'oatmeal'),
  c('egg-white-wraps', 'Egg White Wraps', 'American', 'Lunch', 'Easy', 10, 10, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'egg white wrap'),
  c('egg-white-quesadilla', 'Egg White Quesadilla', 'Mexican', 'Lunch', 'Easy', 10, 8, 2, 0, 0, ['Vegetarian', 'Kidney-Friendly'], ['new'], 'quesadilla'),
  c('cinnamon-egg-white-waffles', 'Cinnamon Egg White Waffles', 'American', 'Breakfast', 'Easy', 10, 15, 2, 0, 0, ['Vegetarian', 'Kidney-Friendly'], ['new'], 'waffles'),
  c('egg-white-crepes', 'Egg White Crepes', 'French', 'Breakfast', 'Easy', 10, 15, 2, 0, 0, ['Vegetarian', 'Kidney-Friendly'], ['new'], 'crepes'),
  c('egg-and-cabbage-stir-fry', 'Egg and Cabbage Stir-Fry', 'Chinese', 'Quick Meals', 'Easy', 10, 10, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Kidney-Friendly'], ['new'], 'egg and cabbage stir fry'),
  c('egg-white-english-muffin-sandwich', 'Egg White English Muffin Sandwich', 'American', 'Breakfast', 'Easy', 5, 8, 2, 0, 0, ['Vegetarian', 'Kidney-Friendly'], ['new'], 'egg sandwich english muffin'),
  c('egg-white-burrito-bowl', 'Egg White Burrito Bowl', 'Mexican', 'Lunch', 'Easy', 10, 12, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'burrito bowl'),
  c('maple-balsamic-chicken', 'Maple-Balsamic Chicken', 'Canadian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'balsamic chicken'),
  c('garlic-herb-chicken-skewers', 'Garlic Herb Chicken Skewers', 'American', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'chicken skewers'),
  c('pineapple-chicken-skewers', 'Pineapple Chicken Skewers', 'Hawaiian', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'pineapple chicken skewers'),
  c('chicken-and-pepper-stir-fry', 'Chicken and Pepper Stir-Fry', 'Chinese', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'chicken pepper stir fry'),
  c('chicken-and-cabbage-stir-fry', 'Chicken and Cabbage Stir-Fry', 'Chinese', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'chicken cabbage stir fry'),
  c('apple-cranberry-chicken-salad', 'Apple Cranberry Chicken Salad', 'American', 'Lunch', 'Easy', 15, 0, 4, 0, 0, ['Gluten-Free', 'Kidney-Friendly'], ['new'], 'chicken salad apple'),
  c('herbed-chicken-meatballs', 'Herbed Chicken Meatballs', 'American', 'Dinner', 'Easy', 20, 20, 4, 0, 0, ['Kidney-Friendly'], ['new'], 'chicken meatballs'),
  c('chicken-burgers', 'Chicken Burgers', 'American', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Kidney-Friendly'], ['new'], 'chicken burger'),
  c('chicken-fried-rice', 'Chicken Fried Rice', 'Chinese', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'chicken fried rice'),
  c('chicken-and-noodle-skillet', 'Chicken and Noodle Skillet', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'chicken noodle skillet'),
  c('lemon-chicken-cutlets', 'Lemon Chicken Cutlets', 'Italian', 'Dinner', 'Easy', 10, 12, 4, 0, 0, ['Kidney-Friendly'], ['new'], 'chicken cutlets'),
  c('apple-sage-chicken', 'Apple Sage Chicken', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'apple chicken'),
  c('chicken-cucumber-cups', 'Chicken Cucumber Cups', 'American', 'Appetizers', 'Easy', 15, 0, 4, 0, 0, ['Gluten-Free', 'Kidney-Friendly'], ['new'], 'chicken salad cucumber'),
  c('grilled-chicken-with-pineapple-salsa', 'Grilled Chicken with Pineapple Salsa', 'Mexican', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'chicken pineapple salsa'),
  c('chicken-and-green-bean-stir-fry', 'Chicken and Green Bean Stir-Fry', 'Chinese', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'chicken green beans'),
  c('tarragon-mustard-chicken', 'Tarragon Mustard Chicken', 'French', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Gluten-Free', 'Kidney-Friendly'], ['new'], 'mustard chicken'),
  c('ginger-scallion-chicken', 'Ginger Scallion Chicken', 'Chinese', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'ginger scallion chicken'),
  c('lemongrass-chicken', 'Lemongrass Chicken', 'Vietnamese', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'lemongrass chicken'),
  c('smoked-paprika-chicken', 'Smoked Paprika Chicken', 'Spanish', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'paprika chicken'),
  c('chicken-and-rice-bake', 'Chicken and Rice Bake', 'American', 'Dinner', 'Easy', 15, 45, 6, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'chicken and rice casserole'),
  c('chicken-kofta', 'Chicken Kofta', 'Middle Eastern', 'Dinner', 'Medium', 20, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'chicken kofta'),
  c('chicken-congee', 'Chicken Congee', 'Chinese', 'Dinner', 'Easy', 10, 60, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'chicken congee'),
  c('apple-stuffed-chicken-breast', 'Apple Stuffed Chicken Breast', 'American', 'Dinner', 'Medium', 20, 30, 4, 0, 0, ['Gluten-Free', 'Kidney-Friendly'], ['new'], 'stuffed chicken breast'),
  c('garlic-chicken-pasta', 'Garlic Chicken Pasta', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'chicken pasta'),
  c('chicken-rice-noodle-stir-fry', 'Chicken Rice Noodle Stir-Fry', 'Chinese', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'chicken rice noodles'),
  c('chicken-stew', 'Chicken Stew', 'American', 'Dinner', 'Easy', 15, 60, 6, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'chicken stew'),
  c('ginger-chicken-soup', 'Ginger Chicken Soup', 'Chinese', 'Lunch', 'Easy', 10, 35, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'ginger chicken soup'),
  c('chicken-fajita-rice-bowls', 'Chicken Fajita Rice Bowls', 'Mexican', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'chicken fajita bowl'),
  c('apple-chicken-sausage', 'Apple Chicken Sausage', 'American', 'Breakfast', 'Easy', 15, 12, 6, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'chicken sausage patties'),
  c('onion-turkey-burgers', 'Onion Turkey Burgers', 'American', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Kidney-Friendly'], ['new'], 'turkey burger'),
  c('turkey-and-noodles', 'Turkey and Noodles', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'turkey and noodles'),
  c('lemon-turkey-cutlets', 'Lemon Turkey Cutlets', 'Italian', 'Dinner', 'Easy', 10, 12, 4, 0, 0, ['Kidney-Friendly'], ['new'], 'turkey cutlets'),
  c('turkey-rice-skillet', 'Turkey Rice Skillet', 'American', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'turkey and rice skillet'),
  c('turkey-stir-fry-with-peppers', 'Turkey Stir-Fry with Peppers', 'Chinese', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'turkey stir fry'),
  c('turkey-vegetable-soup', 'Turkey Vegetable Soup', 'American', 'Lunch', 'Easy', 15, 35, 6, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'turkey vegetable soup'),
  c('roasted-turkey-tenderloin', 'Roasted Turkey Tenderloin', 'American', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'turkey tenderloin'),
  c('turkey-apple-wraps', 'Turkey Apple Wraps', 'American', 'Lunch', 'Easy', 10, 0, 2, 0, 0, ['Kidney-Friendly'], ['new'], 'turkey wrap'),
  c('turkey-taco-rice-bowls', 'Turkey Taco Rice Bowls', 'Mexican', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'taco rice bowl'),
  c('cranberry-turkey-cutlets', 'Cranberry Turkey Cutlets', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Kidney-Friendly'], ['new'], 'turkey cutlets cranberry'),
  c('pork-chops-with-apples-and-onions', 'Pork Chops with Apples and Onions', 'American', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'pork chops apples'),
  c('herb-roasted-pork-loin', 'Herb-Roasted Pork Loin', 'American', 'Dinner', 'Easy', 10, 55, 6, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'roast pork loin'),
  c('pork-and-pineapple-skewers', 'Pork and Pineapple Skewers', 'American', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'pork pineapple skewers'),
  c('honey-mustard-pork-chops', 'Honey Mustard Pork Chops', 'American', 'Dinner', 'Easy', 10, 18, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'pork chops'),
  c('garlic-pork-stir-fry', 'Garlic Pork Stir-Fry', 'Chinese', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'pork stir fry'),
  c('pork-tenderloin-with-pears', 'Pork Tenderloin with Pears', 'American', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'pork tenderloin pears'),
  c('pork-fried-rice', 'Pork Fried Rice', 'Chinese', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'pork fried rice'),
  c('pork-chop-suey', 'Pork Chop Suey', 'Chinese', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'chop suey'),
  c('beef-and-rice-skillet', 'Beef and Rice Skillet', 'American', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'beef and rice skillet'),
  c('garlic-beef-stir-fry', 'Garlic Beef Stir-Fry', 'Chinese', 'Dinner', 'Easy', 15, 10, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'beef stir fry'),
  c('beef-and-cabbage-stew', 'Beef and Cabbage Stew', 'American', 'Dinner', 'Easy', 15, 100, 6, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'beef and cabbage stew'),
  c('hamburger-steak-with-onion-gravy', 'Hamburger Steak with Onion Gravy', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Kidney-Friendly'], ['new'], 'hamburger steak'),
  c('herb-burgers', 'Herb Burgers', 'American', 'Dinner', 'Easy', 10, 12, 4, 0, 0, ['Kidney-Friendly'], ['new'], 'hamburger'),
  c('beef-fried-rice', 'Beef Fried Rice', 'Chinese', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'beef fried rice'),
  c('citrus-salmon', 'Citrus Salmon', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'orange salmon'),
  c('honey-spice-rubbed-salmon', 'Honey Spice Rubbed Salmon', 'American', 'Dinner', 'Easy', 5, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'spice rubbed salmon'),
  c('salmon-skewers', 'Salmon Skewers', 'American', 'Dinner', 'Easy', 15, 8, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'salmon skewers'),
  c('salmon-and-rice-bowls', 'Salmon and Rice Bowls', 'American', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'salmon rice bowl'),
  c('lemon-pepper-tilapia', 'Lemon Pepper Tilapia', 'American', 'Dinner', 'Easy', 5, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'baked tilapia'),
  c('garlic-herb-shrimp-skewers', 'Garlic Herb Shrimp Skewers', 'American', 'Dinner', 'Easy', 15, 6, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'shrimp skewers'),
  c('pineapple-shrimp-skewers', 'Pineapple Shrimp Skewers', 'American', 'Dinner', 'Easy', 15, 6, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'pineapple shrimp skewers'),
  c('shrimp-fried-rice', 'Shrimp Fried Rice', 'Chinese', 'Dinner', 'Easy', 15, 10, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'shrimp fried rice'),
  c('shrimp-and-rice-skillet', 'Shrimp and Rice Skillet', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'shrimp and rice'),
  c('shrimp-and-pepper-stir-fry', 'Shrimp and Pepper Stir-Fry', 'Chinese', 'Dinner', 'Easy', 10, 8, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'shrimp pepper stir fry'),
  c('shrimp-lettuce-cups', 'Shrimp Lettuce Cups', 'American', 'Appetizers', 'Easy', 15, 8, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'shrimp lettuce wraps'),
  c('tuna-patties', 'Tuna Patties', 'American', 'Dinner', 'Easy', 15, 10, 4, 0, 0, ['Kidney-Friendly'], ['new'], 'tuna patties'),
  c('tuna-cucumber-boats', 'Tuna Cucumber Boats', 'American', 'Appetizers', 'Easy', 10, 0, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'tuna cucumber'),
  c('tuna-pasta-salad', 'Tuna Pasta Salad', 'American', 'Lunch', 'Easy', 15, 10, 4, 0, 0, ['Dairy-Free', 'Kidney-Friendly'], ['new'], 'tuna pasta salad'),
  c('flounder-with-lemon-butter', 'Flounder with Lemon Butter', 'American', 'Dinner', 'Easy', 5, 10, 4, 0, 0, ['Gluten-Free', 'Kidney-Friendly'], ['new'], 'flounder fillet'),
  c('flounder-francese', 'Flounder Francese', 'Italian', 'Dinner', 'Medium', 10, 12, 4, 0, 0, ['Kidney-Friendly'], ['new'], 'flounder francese'),
  c('baked-haddock-with-herbs', 'Baked Haddock with Herbs', 'British', 'Dinner', 'Easy', 5, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'baked haddock'),
  c('oven-baked-catfish', 'Oven-Baked Catfish', 'American', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Kidney-Friendly'], ['new'], 'baked catfish'),
  c('poached-cod-with-lemon-and-parsley', 'Poached Cod with Lemon and Parsley', 'American', 'Dinner', 'Easy', 5, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'poached cod'),
  c('homemade-fish-sticks', 'Homemade Fish Sticks', 'American', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Kidney-Friendly'], ['new'], 'fish sticks'),
  c('sole-with-herbs', 'Sole with Herbs', 'French', 'Dinner', 'Easy', 5, 8, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'sole fillet'),
  c('sole-with-grapes', 'Sole with Grapes', 'French', 'Dinner', 'Medium', 10, 15, 4, 0, 0, ['Gluten-Free', 'Kidney-Friendly'], ['new'], 'sole veronique'),
  c('cod-en-papillote', 'Cod en Papillote', 'French', 'Dinner', 'Medium', 15, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'fish en papillote'),
  c('snapper-with-herbs', 'Snapper with Herbs', 'American', 'Dinner', 'Easy', 5, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'baked snapper'),
  c('herb-crusted-cod', 'Herb-Crusted Cod', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Kidney-Friendly'], ['new'], 'baked cod'),
  c('pan-seared-trout', 'Pan-Seared Trout', 'American', 'Dinner', 'Easy', 5, 10, 2, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'pan fried trout'),
  c('tilapia-foil-packets', 'Tilapia Foil Packets', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Kidney-Friendly'], ['new'], 'tilapia in foil'),
  c('sesame-greens-with-tofu', 'Sesame Greens with Tofu', 'Chinese', 'Dinner', 'Easy', 15, 12, 3, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Kidney-Friendly'], ['new'], 'tofu stir fry'),
  c('baked-tofu-with-garlic-and-ginger', 'Baked Tofu with Garlic and Ginger', 'Chinese', 'Dinner', 'Easy', 15, 30, 3, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Kidney-Friendly'], ['new'], 'baked tofu'),
  c('tofu-and-cabbage-stir-fry', 'Tofu and Cabbage Stir-Fry', 'Chinese', 'Dinner', 'Easy', 15, 12, 3, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Kidney-Friendly'], ['new'], 'tofu cabbage stir fry'),
  c('tofu-pineapple-stir-fry', 'Tofu Pineapple Stir-Fry', 'Chinese', 'Dinner', 'Easy', 15, 12, 3, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Kidney-Friendly'], ['new'], 'tofu pineapple stir fry'),
  c('tofu-rice-bowls', 'Tofu Rice Bowls', 'Japanese', 'Dinner', 'Easy', 10, 15, 3, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Kidney-Friendly'], ['new'], 'tofu rice bowl')
];
