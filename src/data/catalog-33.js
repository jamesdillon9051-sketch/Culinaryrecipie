/**
 * Weekly Delight — recipe catalog, volume thirty-three.
 * One hundred dishes for readers cooking to a calorie budget: soups and salads
 * that fill a bowl for little, lettuce wraps and tacos, lean chicken, turkey
 * and fish dinners, vegetable sides, oven and air-fryer cooking in place of the
 * deep fryer, and a few snacks and frozen sweets that stay small. They are
 * familiar dishes that people look for by name; no search-volume data was used
 * to pick or rank them.
 *
 * Every recipe carries the Weight-Loss Friendly tag. It describes the plate and
 * promises nothing about a person's weight: a serving under a fixed calorie
 * limit that still carries protein or fibre to keep it filling. How much
 * anyone loses depends on the whole of what they eat, not on one dish.
 * src/lib/health.js holds the rules, the recipe page prints the figures they
 * are read from, and `npm run health` fails the build for any recipe that
 * carries the tag and breaks one.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, and then read by hand. The tool refused three: a
 * tomato and cucumber salad (the Egyptian salata baladi), cinnamon baked
 * apples (the baked cinnamon apples already here) and lemon ricotta pancakes
 * (the ricotta pancakes).
 *
 * This file is generated from the verified list rather than typed out from it,
 * and `npm run check` fails if two recipes are the same dish.
 *
 * Spread: American 67, Italian 13, Mexican 12, Japanese 2, Middle Eastern 2, Chinese 1, French 1, Greek 1, Thai 1.
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
  c('veggie-egg-white-omelet', 'Veggie Egg White Omelet', 'American', 'Breakfast', 'Easy', 10, 6, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'egg white omelette'),
  c('egg-white-breakfast-wrap', 'Egg White Breakfast Wrap', 'American', 'Breakfast', 'Easy', 5, 8, 2, 0, 0, ['Vegetarian', 'Weight-Loss Friendly'], ['new'], 'egg white wrap'),
  c('asparagus-frittata', 'Asparagus Frittata', 'Italian', 'Breakfast', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'asparagus frittata'),
  c('banana-oat-breakfast-cookies', 'Banana Oat Breakfast Cookies', 'American', 'Breakfast', 'Easy', 10, 15, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Weight-Loss Friendly'], ['new'], 'banana oat cookies'),
  c('sweet-potato-toast', 'Sweet Potato Toast', 'American', 'Breakfast', 'Easy', 5, 15, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'sweet potato toast'),
  c('cottage-cheese-flatbread', 'Cottage Cheese Flatbread', 'American', 'Lunch', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Weight-Loss Friendly'], ['new'], 'cottage cheese flatbread'),
  c('black-bean-breakfast-tostadas', 'Black Bean Breakfast Tostadas', 'Mexican', 'Breakfast', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian', 'Weight-Loss Friendly'], ['new'], 'breakfast tostada'),
  c('peanut-butter-banana-toast', 'Peanut Butter Banana Toast', 'American', 'Breakfast', 'Easy', 5, 3, 2, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Weight-Loss Friendly'], ['new'], 'banana peanut butter toast'),
  c('big-batch-vegetable-soup', 'Big Batch Vegetable Soup', 'American', 'Lunch', 'Easy', 15, 35, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'vegetable soup'),
  c('turkey-meatball-soup', 'Turkey Meatball Soup', 'Italian', 'Lunch', 'Medium', 25, 30, 6, 0, 0, ['Dairy-Free', 'Weight-Loss Friendly'], ['new'], 'meatball soup'),
  c('sopa-de-lima', 'Sopa de Lima', 'Mexican', 'Lunch', 'Medium', 15, 30, 6, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'sopa de lima'),
  c('carrot-ginger-soup', 'Carrot Ginger Soup', 'American', 'Lunch', 'Easy', 10, 30, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'carrot ginger soup'),
  c('spinach-and-white-bean-soup', 'Spinach and White Bean Soup', 'Italian', 'Lunch', 'Easy', 10, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'white bean spinach soup'),
  c('chicken-fajita-soup', 'Chicken Fajita Soup', 'Mexican', 'Dinner', 'Easy', 15, 30, 6, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'chicken fajita soup'),
  c('broccoli-spinach-soup', 'Broccoli Spinach Soup', 'American', 'Lunch', 'Easy', 10, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'broccoli soup'),
  c('hearty-chicken-and-kale-soup', 'Hearty Chicken and Kale Soup', 'American', 'Dinner', 'Easy', 15, 35, 6, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'chicken kale soup'),
  c('egg-roll-soup', 'Egg Roll Soup', 'American', 'Dinner', 'Easy', 10, 20, 6, 0, 0, ['Dairy-Free', 'Weight-Loss Friendly'], ['new'], 'egg roll soup'),
  c('escarole-and-bean-soup', 'Escarole and Bean Soup', 'Italian', 'Lunch', 'Easy', 10, 30, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'escarole and beans'),
  c('caldo-de-pollo', 'Caldo de Pollo', 'Mexican', 'Dinner', 'Easy', 15, 50, 6, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'caldo de pollo'),
  c('chilled-cucumber-soup', 'Chilled Cucumber Soup', 'American', 'Lunch', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'cold cucumber soup'),
  c('chinese-chicken-salad', 'Chinese Chicken Salad', 'Chinese', 'Lunch', 'Easy', 20, 10, 4, 0, 0, ['Dairy-Free', 'Weight-Loss Friendly'], ['new'], 'Chinese chicken salad'),
  c('shaved-brussels-sprout-salad', 'Shaved Brussels Sprout Salad', 'American', 'Lunch', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'brussels sprout salad'),
  c('lemon-arugula-salad-with-parmesan', 'Lemon Arugula Salad with Parmesan', 'Italian', 'Healthy', 'Easy', 5, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'arugula parmesan salad'),
  c('shrimp-and-cucumber-salad', 'Shrimp and Cucumber Salad', 'American', 'Lunch', 'Easy', 15, 5, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'shrimp cucumber salad'),
  c('citrus-fennel-salad', 'Citrus Fennel Salad', 'Italian', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'orange fennel salad'),
  c('zucchini-ribbon-salad', 'Zucchini Ribbon Salad', 'Italian', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'zucchini ribbon salad'),
  c('kale-and-apple-salad', 'Kale and Apple Salad', 'American', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'kale apple salad'),
  c('rainbow-slaw', 'Rainbow Slaw', 'American', 'Healthy', 'Easy', 15, 0, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'rainbow slaw'),
  c('salmon-salad-with-dill-and-cucumber', 'Salmon Salad with Dill and Cucumber', 'American', 'Lunch', 'Easy', 15, 0, 2, 0, 0, ['Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'salmon salad'),
  c('thai-cucumber-salad', 'Thai Cucumber Salad', 'Thai', 'Healthy', 'Easy', 10, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'Thai cucumber salad'),
  c('carrot-raisin-salad', 'Carrot Raisin Salad', 'American', 'Healthy', 'Easy', 10, 0, 6, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'carrot raisin salad'),
  c('grapefruit-avocado-salad', 'Grapefruit Avocado Salad', 'American', 'Healthy', 'Easy', 10, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'grapefruit avocado salad'),
  c('sunomono', 'Sunomono', 'Japanese', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Weight-Loss Friendly'], ['new'], 'sunomono'),
  c('edamame-salad', 'Edamame Salad', 'American', 'Healthy', 'Easy', 15, 5, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Weight-Loss Friendly'], ['new'], 'edamame salad'),
  c('cucumber-noodle-salad', 'Cucumber Noodle Salad', 'American', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Weight-Loss Friendly'], ['new'], 'cucumber noodle salad'),
  c('turkey-taco-lettuce-wraps', 'Turkey Taco Lettuce Wraps', 'Mexican', 'Quick Meals', 'Easy', 10, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'lettuce wrap tacos'),
  c('buffalo-chicken-lettuce-wraps', 'Buffalo Chicken Lettuce Wraps', 'American', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'buffalo chicken lettuce wraps'),
  c('hummus-veggie-wrap', 'Hummus Veggie Wrap', 'Middle Eastern', 'Lunch', 'Easy', 10, 0, 2, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Weight-Loss Friendly'], ['new'], 'hummus veggie wrap'),
  c('turkey-avocado-wrap', 'Turkey Avocado Wrap', 'American', 'Lunch', 'Easy', 10, 0, 2, 0, 0, ['Dairy-Free', 'Weight-Loss Friendly'], ['new'], 'turkey avocado wrap'),
  c('collard-green-wraps', 'Collard Green Wraps', 'American', 'Lunch', 'Easy', 15, 3, 4, 0, 0, ['Dairy-Free', 'Weight-Loss Friendly'], ['new'], 'collard wraps'),
  c('portobello-pizzas', 'Portobello Pizzas', 'Italian', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'portobello pizza'),
  c('turkey-zucchini-boats', 'Turkey Zucchini Boats', 'American', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'zucchini boats'),
  c('stuffed-sweet-potatoes', 'Stuffed Sweet Potatoes', 'American', 'Dinner', 'Easy', 10, 55, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'stuffed sweet potato'),
  c('portobello-tacos', 'Portobello Tacos', 'Mexican', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'portobello tacos'),
  c('roasted-cauliflower-tacos', 'Roasted Cauliflower Tacos', 'Mexican', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'cauliflower tacos'),
  c('shrimp-taco-bowls', 'Shrimp Taco Bowls', 'Mexican', 'Dinner', 'Easy', 15, 10, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'shrimp taco bowl'),
  c('greek-chicken-pitas', 'Greek Chicken Pitas', 'Greek', 'Lunch', 'Easy', 15, 12, 4, 0, 0, ['Weight-Loss Friendly'], ['new'], 'chicken pita'),
  c('turkey-pinwheels', 'Turkey Pinwheels', 'American', 'Appetizers', 'Easy', 10, 0, 6, 0, 0, ['Weight-Loss Friendly'], ['new'], 'turkey pinwheels'),
  c('mushroom-lettuce-cups', 'Mushroom Lettuce Cups', 'American', 'Appetizers', 'Easy', 10, 10, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'mushroom lettuce cups'),
  c('coctel-de-camarones', 'Coctel de Camarones', 'Mexican', 'Lunch', 'Easy', 20, 5, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'coctel de camarones'),
  c('tuna-stuffed-tomatoes', 'Tuna Stuffed Tomatoes', 'American', 'Lunch', 'Easy', 15, 0, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'tuna stuffed tomatoes'),
  c('baked-turkey-meatballs', 'Baked Turkey Meatballs', 'Italian', 'Dinner', 'Easy', 15, 20, 6, 0, 0, ['Weight-Loss Friendly'], ['new'], 'turkey meatballs'),
  c('turkey-sausage-and-vegetable-skillet', 'Turkey Sausage and Vegetable Skillet', 'American', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'sausage and vegetable skillet'),
  c('cajun-chicken-and-cabbage-skillet', 'Cajun Chicken and Cabbage Skillet', 'American', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'chicken and cabbage'),
  c('shrimp-foil-packets', 'Shrimp Foil Packets', 'American', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'shrimp foil packet'),
  c('tuna-burgers', 'Tuna Burgers', 'American', 'Dinner', 'Easy', 15, 8, 4, 0, 0, ['Weight-Loss Friendly'], ['new'], 'tuna burger'),
  c('sheet-pan-salmon-and-asparagus', 'Sheet Pan Salmon and Asparagus', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'salmon asparagus'),
  c('air-fryer-cod', 'Air Fryer Cod', 'American', 'Dinner', 'Easy', 5, 10, 4, 0, 0, ['Weight-Loss Friendly'], ['new'], 'cod fillet'),
  c('air-fryer-cauliflower', 'Air Fryer Cauliflower', 'American', 'Healthy', 'Easy', 10, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'roasted cauliflower'),
  c('air-fryer-asparagus', 'Air Fryer Asparagus', 'American', 'Healthy', 'Easy', 5, 8, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'roasted asparagus'),
  c('instant-pot-chicken-breast', 'Instant Pot Chicken Breast', 'American', 'Dinner', 'Easy', 5, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'chicken breast'),
  c('grilled-vegetable-skewers', 'Grilled Vegetable Skewers', 'American', 'Healthy', 'Easy', 20, 12, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'vegetable skewers'),
  c('mexican-cauliflower-rice-bowls', 'Mexican Cauliflower Rice Bowls', 'Mexican', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'cauliflower rice bowl'),
  c('cabbage-roll-skillet', 'Cabbage Roll Skillet', 'American', 'Dinner', 'Easy', 15, 30, 6, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'unstuffed cabbage roll'),
  c('eggplant-lasagna-roll-ups', 'Eggplant Lasagna Roll-Ups', 'Italian', 'Dinner', 'Medium', 25, 35, 6, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'eggplant rollatini'),
  c('baked-tilapia-with-tomatoes', 'Baked Tilapia with Tomatoes', 'American', 'Dinner', 'Easy', 10, 18, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'baked tilapia'),
  c('honey-lime-chicken-skewers', 'Honey Lime Chicken Skewers', 'American', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'chicken skewers'),
  c('chickpea-veggie-burgers', 'Chickpea Veggie Burgers', 'American', 'Dinner', 'Medium', 20, 20, 4, 0, 0, ['Vegetarian', 'Weight-Loss Friendly'], ['new'], 'chickpea burger'),
  c('poached-chicken-breast', 'Poached Chicken Breast', 'American', 'Healthy', 'Easy', 5, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'poached chicken'),
  c('philly-cheesesteak-stuffed-peppers', 'Philly Cheesesteak Stuffed Peppers', 'American', 'Dinner', 'Medium', 20, 35, 4, 0, 0, ['Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'cheesesteak stuffed peppers'),
  c('miso-cod', 'Miso Cod', 'Japanese', 'Dinner', 'Easy', 10, 12, 4, 0, 0, ['Dairy-Free', 'Weight-Loss Friendly'], ['new'], 'miso cod'),
  c('chipotle-lime-chicken', 'Chipotle Lime Chicken', 'Mexican', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'chipotle chicken'),
  c('chili-lime-shrimp', 'Chili Lime Shrimp', 'Mexican', 'Quick Meals', 'Easy', 10, 6, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'chili lime shrimp'),
  c('air-fryer-tofu', 'Air Fryer Tofu', 'American', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Weight-Loss Friendly'], ['new'], 'crispy tofu'),
  c('air-fryer-scallops', 'Air Fryer Scallops', 'American', 'Dinner', 'Easy', 5, 8, 4, 0, 0, ['Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'scallops'),
  c('air-fryer-tilapia', 'Air Fryer Tilapia', 'American', 'Dinner', 'Easy', 5, 10, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'tilapia fillet'),
  c('spaghetti-squash-primavera', 'Spaghetti Squash Primavera', 'Italian', 'Dinner', 'Easy', 15, 45, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'spaghetti squash'),
  c('sheet-pan-chicken-and-brussels-sprouts', 'Sheet Pan Chicken and Brussels Sprouts', 'American', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'chicken and brussels sprouts'),
  c('sauteed-kale-with-garlic', 'Sautéed Kale with Garlic', 'American', 'Healthy', 'Easy', 5, 8, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'sauteed kale'),
  c('lemon-roasted-broccoli', 'Lemon Roasted Broccoli', 'American', 'Healthy', 'Easy', 5, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'roasted broccoli'),
  c('cumin-roasted-carrots', 'Cumin Roasted Carrots', 'American', 'Healthy', 'Easy', 5, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'roasted carrots'),
  c('balsamic-roasted-mushrooms', 'Balsamic Roasted Mushrooms', 'American', 'Healthy', 'Easy', 5, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'roasted mushrooms'),
  c('roasted-tomatoes-with-herbs', 'Roasted Tomatoes with Herbs', 'Italian', 'Healthy', 'Easy', 10, 40, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'roasted tomatoes'),
  c('grilled-zucchini', 'Grilled Zucchini', 'American', 'Healthy', 'Easy', 5, 8, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'grilled zucchini'),
  c('roasted-delicata-squash', 'Roasted Delicata Squash', 'American', 'Healthy', 'Easy', 10, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'roasted delicata squash'),
  c('roasted-cabbage-wedges', 'Roasted Cabbage Wedges', 'American', 'Healthy', 'Easy', 5, 30, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'roasted cabbage'),
  c('air-fryer-green-beans', 'Air Fryer Green Beans', 'American', 'Healthy', 'Easy', 5, 10, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'green beans'),
  c('air-fryer-mushrooms', 'Air Fryer Mushrooms', 'American', 'Healthy', 'Easy', 5, 12, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'roasted mushrooms'),
  c('cottage-cheese-ranch-dip', 'Cottage Cheese Ranch Dip', 'American', 'Appetizers', 'Easy', 5, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'ranch dip'),
  c('baked-apple-chips', 'Baked Apple Chips', 'American', 'Appetizers', 'Easy', 10, 90, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'apple chips'),
  c('frozen-yogurt-pops', 'Frozen Yogurt Pops', 'American', 'Desserts', 'Easy', 10, 0, 6, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'yogurt popsicle'),
  c('air-popped-popcorn', 'Air-Popped Popcorn', 'American', 'Appetizers', 'Easy', 2, 5, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'popcorn'),
  c('cucumber-hummus-bites', 'Cucumber Hummus Bites', 'Middle Eastern', 'Appetizers', 'Easy', 10, 0, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'cucumber hummus'),
  c('zucchini-roll-ups', 'Zucchini Roll-Ups', 'Italian', 'Appetizers', 'Medium', 20, 20, 6, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'zucchini rolls'),
  c('cottage-cheese-ice-cream', 'Cottage Cheese Ice Cream', 'American', 'Desserts', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'cottage cheese ice cream'),
  c('strawberry-sorbet', 'Strawberry Sorbet', 'American', 'Desserts', 'Easy', 5, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'strawberry sorbet'),
  c('poached-pears', 'Poached Pears', 'French', 'Desserts', 'Easy', 10, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'poached pears'),
  c('frozen-chocolate-banana-bites', 'Frozen Chocolate Banana Bites', 'American', 'Desserts', 'Easy', 10, 3, 8, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'chocolate covered banana'),
  c('baked-peaches-with-cinnamon', 'Baked Peaches with Cinnamon', 'American', 'Desserts', 'Easy', 5, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'baked peaches'),
  c('grilled-pineapple', 'Grilled Pineapple', 'American', 'Desserts', 'Easy', 5, 8, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free', 'Weight-Loss Friendly'], ['new'], 'grilled pineapple')
];
