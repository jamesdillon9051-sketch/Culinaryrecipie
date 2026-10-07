/**
 * Weekly Delight — recipe catalog, volume thirty-two.
 * One hundred dishes for readers who count carbohydrate or want steadier
 * blood sugar: breakfasts and soups, salads and bowls, chicken, meat and fish
 * dinners, vegetable dishes and snacks, and a few desserts and breads made
 * without added sugar. They are familiar dishes that people look for by name;
 * no search-volume data was used to pick or rank them.
 *
 * Every recipe carries the Diabetes-Friendly tag. It is a statement about
 * numbers and not about people: no sugar, honey, syrup or sweetened sauce in
 * the ingredient list, carbohydrate per serving under a fixed limit, enough
 * fibre where there is a lot of carbohydrate, and a sodium ceiling.
 * src/lib/health.js holds the exact rules, the recipe page prints them beside
 * the figures, and `npm run health` fails the build for any recipe that
 * carries the tag and breaks one. How a meal affects a particular reader
 * depends on their medication, their portion and the rest of their day, and
 * each page says so.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, and then read by hand. The tool refused two:
 * "Egg Roll in a Bowl" (it counts "bowl" as filler, which leaves the egg
 * rolls that are already here, so the dish is the Egg Roll Skillet) and an
 * antipasto salad (the Italian chopped salad targets the same search).
 *
 * This file is generated from the verified list rather than typed out from it,
 * and `npm run check` fails if two recipes are the same dish.
 *
 * Spread: American 67, Italian 11, Mexican 7, Chinese 3, Greek 3, Indian 3, French 2, Japanese 2, British 1, Indonesian 1.
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
  c('almond-flour-pancakes', 'Almond Flour Pancakes', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'almond flour pancakes'),
  c('chaffles', 'Chaffles', 'American', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'chaffle'),
  c('steel-cut-oats-with-berries-and-walnuts', 'Steel-Cut Oats with Berries and Walnuts', 'American', 'Breakfast', 'Easy', 5, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Diabetes-Friendly'], ['new'], 'steel cut oats'),
  c('savory-oatmeal-with-egg-and-spinach', 'Savory Oatmeal with Egg and Spinach', 'American', 'Breakfast', 'Easy', 5, 15, 2, 0, 0, ['Vegetarian', 'Diabetes-Friendly'], ['new'], 'savory oatmeal egg'),
  c('sheet-pan-eggs', 'Sheet Pan Eggs', 'American', 'Breakfast', 'Easy', 10, 18, 6, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'sheet pan eggs'),
  c('denver-omelet', 'Denver Omelet', 'American', 'Breakfast', 'Easy', 10, 10, 2, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'Denver omelette'),
  c('egg-stuffed-bell-peppers', 'Egg-Stuffed Bell Peppers', 'American', 'Breakfast', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'egg stuffed bell peppers'),
  c('cauliflower-hash-browns', 'Cauliflower Hash Browns', 'American', 'Breakfast', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'cauliflower hash browns'),
  c('spinach-and-feta-breakfast-wrap', 'Spinach and Feta Breakfast Wrap', 'American', 'Breakfast', 'Easy', 10, 8, 2, 0, 0, ['Vegetarian', 'Diabetes-Friendly'], ['new'], 'spinach feta egg wrap'),
  c('greek-yogurt-pancakes', 'Greek Yogurt Pancakes', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Diabetes-Friendly'], ['new'], 'yogurt pancakes'),
  c('whole-wheat-pancakes', 'Whole Wheat Pancakes', 'American', 'Breakfast', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Diabetes-Friendly'], ['new'], 'whole wheat pancakes'),
  c('moong-dal-chilla', 'Moong Dal Chilla', 'Indian', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'moong dal chilla'),
  c('flaxseed-muffins', 'Flaxseed Muffins', 'American', 'Baking', 'Easy', 10, 20, 6, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'flaxseed muffins'),
  c('cream-of-broccoli-soup', 'Cream of Broccoli Soup', 'American', 'Lunch', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'cream of broccoli soup'),
  c('chicken-vegetable-soup', 'Chicken Vegetable Soup', 'American', 'Lunch', 'Easy', 15, 35, 6, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'chicken vegetable soup'),
  c('beef-vegetable-soup', 'Beef Vegetable Soup', 'American', 'Lunch', 'Easy', 15, 70, 6, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'vegetable beef soup'),
  c('zucchini-soup', 'Zucchini Soup', 'American', 'Lunch', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'zucchini soup'),
  c('creamy-spinach-soup', 'Creamy Spinach Soup', 'American', 'Lunch', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'spinach soup'),
  c('asparagus-soup', 'Asparagus Soup', 'French', 'Lunch', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'asparagus soup'),
  c('chicken-pot-pie-soup', 'Chicken Pot Pie Soup', 'American', 'Dinner', 'Easy', 15, 30, 6, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'chicken pot pie soup'),
  c('chopped-mexican-salad-with-lime', 'Chopped Mexican Salad with Lime', 'Mexican', 'Lunch', 'Easy', 20, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'Mexican chopped salad'),
  c('chef-salad', 'Chef Salad', 'American', 'Lunch', 'Easy', 15, 10, 2, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'chef salad'),
  c('shrimp-louie-salad', 'Shrimp Louie Salad', 'American', 'Lunch', 'Easy', 15, 12, 2, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'shrimp louie salad'),
  c('steak-salad', 'Steak Salad', 'American', 'Dinner', 'Easy', 15, 10, 2, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'steak salad'),
  c('southwest-chicken-salad', 'Southwest Chicken Salad', 'American', 'Lunch', 'Easy', 15, 12, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'southwest chicken salad'),
  c('creamy-cucumber-dill-salad', 'Creamy Cucumber Dill Salad', 'American', 'Lunch', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'creamy cucumber salad'),
  c('cucumber-avocado-salad', 'Cucumber Avocado Salad', 'American', 'Lunch', 'Easy', 10, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'cucumber avocado salad'),
  c('broccoli-slaw-salad', 'Broccoli Slaw Salad', 'American', 'Lunch', 'Easy', 15, 0, 6, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'broccoli slaw'),
  c('tuna-stuffed-avocados', 'Tuna-Stuffed Avocados', 'American', 'Lunch', 'Easy', 15, 0, 2, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'tuna stuffed avocado'),
  c('crab-stuffed-avocados', 'Crab-Stuffed Avocados', 'American', 'Lunch', 'Easy', 15, 0, 2, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'crab stuffed avocado'),
  c('egg-roll-skillet', 'Egg Roll Skillet', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free', 'Diabetes-Friendly'], ['new'], 'egg roll in a bowl'),
  c('marinated-vegetable-salad', 'Marinated Vegetable Salad', 'American', 'Lunch', 'Easy', 20, 5, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'marinated vegetable salad'),
  c('black-bean-and-quinoa-bowl', 'Black Bean and Quinoa Bowl', 'Mexican', 'Lunch', 'Easy', 15, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'black bean quinoa bowl'),
  c('mushroom-swiss-burger-bowls', 'Mushroom Swiss Burger Bowls', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'mushroom swiss burger'),
  c('lettuce-wrap-burgers', 'Lettuce Wrap Burgers', 'American', 'Dinner', 'Easy', 10, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'lettuce wrapped burger'),
  c('balsamic-chicken-with-mushrooms', 'Balsamic Chicken with Mushrooms', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'balsamic chicken mushrooms'),
  c('parmesan-crusted-chicken', 'Parmesan-Crusted Chicken', 'American', 'Dinner', 'Easy', 10, 22, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'parmesan crusted chicken'),
  c('spinach-and-feta-stuffed-chicken-breast', 'Spinach and Feta Stuffed Chicken Breast', 'Greek', 'Dinner', 'Medium', 20, 30, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'stuffed chicken breast'),
  c('cilantro-lime-chicken', 'Cilantro Lime Chicken', 'Mexican', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'cilantro lime chicken'),
  c('chicken-florentine', 'Chicken Florentine', 'Italian', 'Dinner', 'Medium', 10, 25, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'chicken florentine'),
  c('chicken-francese', 'Chicken Francese', 'Italian', 'Dinner', 'Medium', 15, 20, 4, 0, 0, ['Diabetes-Friendly'], ['new'], 'chicken francese'),
  c('slow-cooker-salsa-chicken', 'Slow Cooker Salsa Chicken', 'Mexican', 'Dinner', 'Easy', 5, 360, 6, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'salsa chicken'),
  c('chicken-and-broccoli-stir-fry', 'Chicken and Broccoli Stir-Fry', 'Chinese', 'Quick Meals', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Diabetes-Friendly'], ['new'], 'chicken and broccoli'),
  c('pesto-chicken-bake', 'Pesto Chicken Bake', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'pesto chicken'),
  c('bruschetta-chicken', 'Bruschetta Chicken', 'Italian', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'bruschetta chicken'),
  c('chicken-saag', 'Chicken Saag', 'Indian', 'Dinner', 'Medium', 15, 35, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'chicken saag'),
  c('spinach-artichoke-chicken', 'Spinach Artichoke Chicken', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'spinach artichoke chicken'),
  c('slow-cooker-chicken-chili-verde', 'Slow Cooker Chicken Chili Verde', 'Mexican', 'Dinner', 'Easy', 15, 360, 6, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'chicken chile verde'),
  c('turkey-meatloaf', 'Turkey Meatloaf', 'American', 'Dinner', 'Easy', 15, 50, 6, 0, 0, ['Diabetes-Friendly'], ['new'], 'turkey meatloaf'),
  c('pepper-steak', 'Pepper Steak', 'American', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Diabetes-Friendly'], ['new'], 'pepper steak'),
  c('sausage-and-cabbage-skillet', 'Sausage and Cabbage Skillet', 'American', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'sausage and cabbage'),
  c('pork-medallions-with-mustard-sauce', 'Pork Medallions with Mustard Sauce', 'French', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'pork medallions'),
  c('beef-and-green-bean-stir-fry', 'Beef and Green Bean Stir-Fry', 'Chinese', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Diabetes-Friendly'], ['new'], 'beef and green beans'),
  c('cauliflower-shepherds-pie', 'Cauliflower Shepherd\'s Pie', 'British', 'Dinner', 'Medium', 25, 45, 6, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'cauliflower shepherd\'s pie'),
  c('steak-with-garlic-mushroom-sauce', 'Steak with Garlic Mushroom Sauce', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'steak with mushrooms'),
  c('baked-lemon-dill-salmon', 'Baked Lemon Dill Salmon', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'baked salmon dill'),
  c('salmon-foil-packets', 'Salmon Foil Packets', 'American', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'salmon in foil'),
  c('lemon-grilled-fish-with-asparagus', 'Lemon Grilled Fish with Asparagus', 'American', 'Dinner', 'Easy', 10, 12, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'grilled fish asparagus'),
  c('shrimp-and-asparagus-skillet', 'Shrimp and Asparagus Skillet', 'American', 'Quick Meals', 'Easy', 10, 10, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'shrimp and asparagus'),
  c('poached-salmon-with-cucumber-dill-sauce', 'Poached Salmon with Cucumber Dill Sauce', 'American', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'poached salmon'),
  c('tuna-steaks-with-avocado-salsa', 'Tuna Steaks with Avocado Salsa', 'American', 'Dinner', 'Easy', 15, 6, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'seared tuna steak'),
  c('cod-with-tomatoes-and-olives', 'Cod with Tomatoes and Olives', 'Greek', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'baked cod tomatoes olives'),
  c('halibut-with-lemon-caper-sauce', 'Halibut with Lemon Caper Sauce', 'Italian', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'halibut lemon caper'),
  c('cauliflower-mac-and-cheese', 'Cauliflower Mac and Cheese', 'American', 'Dinner', 'Easy', 15, 30, 6, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'cauliflower mac and cheese'),
  c('cauliflower-risotto', 'Cauliflower Risotto', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'cauliflower risotto'),
  c('zucchini-noodles-with-pesto', 'Zucchini Noodles with Pesto', 'Italian', 'Quick Meals', 'Easy', 10, 5, 2, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'zucchini noodles pesto'),
  c('eggplant-pizzas', 'Eggplant Pizzas', 'Italian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'eggplant pizza'),
  c('cheesy-cauliflower-casserole', 'Cheesy Cauliflower Casserole', 'American', 'Dinner', 'Easy', 15, 30, 6, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'cauliflower casserole'),
  c('roasted-asparagus-with-parmesan', 'Roasted Asparagus with Parmesan', 'American', 'Healthy', 'Easy', 5, 12, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'roasted asparagus'),
  c('garlic-sauteed-spinach', 'Garlic Sautéed Spinach', 'American', 'Healthy', 'Easy', 5, 6, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'sauteed spinach'),
  c('stuffed-portobello-mushrooms', 'Stuffed Portobello Mushrooms', 'American', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'stuffed portobello mushrooms'),
  c('garlic-roasted-green-beans', 'Garlic Roasted Green Beans', 'American', 'Healthy', 'Easy', 5, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'roasted green beans'),
  c('shirataki-noodle-stir-fry', 'Shirataki Noodle Stir-Fry', 'Japanese', 'Dinner', 'Easy', 10, 10, 2, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Diabetes-Friendly'], ['new'], 'shirataki noodles'),
  c('barley-risotto-with-mushrooms', 'Barley Risotto with Mushrooms', 'Italian', 'Dinner', 'Medium', 15, 45, 4, 0, 0, ['Vegetarian', 'Diabetes-Friendly'], ['new'], 'barley risotto'),
  c('baked-tofu-cubes', 'Baked Tofu Cubes', 'Chinese', 'Healthy', 'Easy', 10, 30, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Diabetes-Friendly'], ['new'], 'baked tofu'),
  c('tempeh-stir-fry', 'Tempeh Stir-Fry', 'Indonesian', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Diabetes-Friendly'], ['new'], 'tempeh stir fry'),
  c('greek-eggplant-salad', 'Greek Eggplant Salad', 'Greek', 'Appetizers', 'Easy', 15, 25, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'melitzanosalata'),
  c('sprouted-moong-salad', 'Sprouted Moong Salad', 'Indian', 'Lunch', 'Easy', 15, 5, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'sprouted moong salad'),
  c('kale-chips', 'Kale Chips', 'American', 'Appetizers', 'Easy', 10, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'kale chips'),
  c('parmesan-crisps', 'Parmesan Crisps', 'American', 'Appetizers', 'Easy', 5, 8, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'parmesan crisps'),
  c('spiced-roasted-almonds', 'Spiced Roasted Almonds', 'American', 'Appetizers', 'Easy', 5, 20, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'roasted almonds'),
  c('cucumber-smoked-salmon-bites', 'Cucumber Smoked Salmon Bites', 'American', 'Appetizers', 'Easy', 15, 0, 6, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'cucumber smoked salmon'),
  c('turkey-roll-ups', 'Turkey Roll-Ups', 'American', 'Appetizers', 'Easy', 10, 0, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'turkey roll ups'),
  c('edamame-with-sea-salt', 'Edamame with Sea Salt', 'Japanese', 'Appetizers', 'Easy', 2, 5, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'edamame'),
  c('greek-yogurt-ranch-dip', 'Greek Yogurt Ranch Dip', 'American', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'ranch dip'),
  c('pepper-nachos', 'Pepper Nachos', 'Mexican', 'Appetizers', 'Easy', 10, 12, 4, 0, 0, ['Gluten-Free', 'Diabetes-Friendly'], ['new'], 'mini pepper nachos'),
  c('zucchini-pizza-bites', 'Zucchini Pizza Bites', 'Italian', 'Appetizers', 'Easy', 10, 12, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'zucchini pizza bites'),
  c('baked-zucchini-chips', 'Baked Zucchini Chips', 'American', 'Appetizers', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'zucchini chips'),
  c('cauliflower-tater-tots', 'Cauliflower Tater Tots', 'American', 'Appetizers', 'Medium', 20, 25, 6, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'cauliflower tots'),
  c('sugar-free-cheesecake', 'Sugar-Free Cheesecake', 'American', 'Desserts', 'Medium', 25, 55, 12, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'cheesecake'),
  c('chocolate-avocado-mousse', 'Chocolate Avocado Mousse', 'American', 'Desserts', 'Easy', 10, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'chocolate avocado mousse'),
  c('chocolate-mug-cake', 'Chocolate Mug Cake', 'American', 'Desserts', 'Easy', 3, 2, 1, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'chocolate mug cake'),
  c('almond-flour-chocolate-chip-cookies', 'Almond Flour Chocolate Chip Cookies', 'American', 'Baking', 'Easy', 15, 12, 12, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'almond flour cookies'),
  c('frozen-yogurt-bark', 'Frozen Yogurt Bark', 'American', 'Desserts', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'frozen yogurt bark'),
  c('almond-flour-bread', 'Almond Flour Bread', 'American', 'Baking', 'Medium', 10, 40, 12, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'almond flour bread'),
  c('crustless-pumpkin-pie', 'Crustless Pumpkin Pie', 'American', 'Desserts', 'Easy', 10, 45, 8, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'pumpkin pie'),
  c('sugar-free-chocolate-pudding', 'Sugar-Free Chocolate Pudding', 'American', 'Desserts', 'Easy', 5, 10, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'chocolate pudding'),
  c('almond-flour-tortillas', 'Almond Flour Tortillas', 'Mexican', 'Baking', 'Medium', 15, 10, 8, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'almond flour tortillas'),
  c('fathead-pizza', 'Fathead Pizza', 'American', 'Dinner', 'Medium', 15, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'fathead pizza'),
  c('sugar-free-raspberry-lemonade', 'Sugar-Free Raspberry Lemonade', 'American', 'Drinks', 'Easy', 10, 0, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Diabetes-Friendly'], ['new'], 'raspberry lemonade')
];
