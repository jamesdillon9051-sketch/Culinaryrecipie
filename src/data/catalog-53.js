'use strict';

/**
 * Weekly Delight — recipe catalog, volume fifty-three.
 * One hundred more of the dishes people in the USA, Canada, Australia, the UK and New Zealand look for by name.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: American 38, British 11, Italian 10, Mexican 9, Chinese 6, Japanese 5, Greek 3, Indian 3, French 2, Korean 2, Polish 2, Argentinian 1, Filipino 1, Hungarian 1, Irish 1, Middle Eastern 1, Russian 1, Spanish 1, Thai 1, Vietnamese 1.
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
  c('air-fryer-banana-bread', 'Air Fryer Banana Bread', 'American', 'Baking', 'Easy', 10, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'air fryer banana bread'),
  c('air-fryer-brownies', 'Air Fryer Brownies', 'American', 'Desserts', 'Easy', 10, 20, 9, 0, 0, ['Vegetarian'], ['new'], 'air fryer brownies'),
  c('air-fryer-burgers', 'Air Fryer Burgers', 'American', 'Dinner', 'Easy', 10, 12, 4, 0, 0, [], ['new'], 'air fryer burgers'),
  c('air-fryer-chicken-nuggets', 'Air Fryer Chicken Nuggets', 'American', 'Dinner', 'Easy', 20, 12, 4, 0, 0, [], ['new'], 'air fryer chicken nuggets'),
  c('air-fryer-cinnamon-rolls', 'Air Fryer Cinnamon Rolls', 'American', 'Baking', 'Medium', 20, 12, 6, 0, 0, ['Vegetarian'], ['new'], 'air fryer cinnamon rolls'),
  c('air-fryer-cookies', 'Air Fryer Cookies', 'American', 'Desserts', 'Easy', 10, 10, 12, 0, 0, ['Vegetarian'], ['new'], 'air fryer cookies'),
  c('air-fryer-crab-cakes', 'Air Fryer Crab Cakes', 'American', 'Appetizers', 'Medium', 20, 10, 4, 0, 0, [], ['new'], 'air fryer crab cakes'),
  c('air-fryer-drumsticks', 'Air Fryer Drumsticks', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'air fryer drumsticks'),
  c('air-fryer-dumplings', 'Air Fryer Dumplings', 'Chinese', 'Appetizers', 'Easy', 10, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'air fryer dumplings'),
  c('air-fryer-eggplant', 'Air Fryer Eggplant', 'Greek', 'Dinner', 'Easy', 10, 15, 3, 0, 0, ['Gluten-Free'], ['new'], 'air fryer eggplant'),
  c('air-fryer-empanadas', 'Air Fryer Empanadas', 'Argentinian', 'Appetizers', 'Medium', 30, 12, 8, 0, 0, [], ['new'], 'air fryer empanadas'),
  c('air-fryer-falafel', 'Air Fryer Falafel', 'Middle Eastern', 'Appetizers', 'Medium', 20, 12, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'air fryer falafel'),
  c('air-fryer-fish-tacos', 'Air Fryer Fish Tacos', 'Mexican', 'Dinner', 'Easy', 15, 10, 4, 0, 0, [], ['new'], 'air fryer fish tacos'),
  c('air-fryer-fish-and-chips', 'Air Fryer Fish and Chips', 'British', 'Dinner', 'Medium', 20, 20, 2, 0, 0, [], ['new'], 'air fryer fish and chips'),
  c('air-fryer-fried-chicken', 'Air Fryer Fried Chicken', 'American', 'Dinner', 'Medium', 20, 25, 4, 0, 0, [], ['new'], 'air fryer fried chicken'),
  c('air-fryer-grilled-cheese', 'Air Fryer Grilled Cheese', 'American', 'Lunch', 'Easy', 5, 8, 2, 0, 0, ['Vegetarian'], ['new'], 'air fryer grilled cheese'),
  c('air-fryer-gyoza', 'Air Fryer Gyoza', 'Japanese', 'Appetizers', 'Easy', 10, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'air fryer gyoza'),
  c('air-fryer-lamb-chops', 'Air Fryer Lamb Chops', 'British', 'Dinner', 'Easy', 10, 10, 2, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'air fryer lamb chops'),
  c('air-fryer-pierogies', 'Air Fryer Pierogies', 'Polish', 'Appetizers', 'Easy', 10, 12, 4, 0, 0, ['Vegetarian'], ['new'], 'air fryer pierogies'),
  c('air-fryer-pizza-rolls', 'Air Fryer Pizza Rolls', 'American', 'Appetizers', 'Easy', 15, 10, 6, 0, 0, [], ['new'], 'air fryer pizza rolls'),
  c('air-fryer-popcorn-chicken', 'Air Fryer Popcorn Chicken', 'American', 'Appetizers', 'Easy', 20, 10, 4, 0, 0, [], ['new'], 'air fryer popcorn chicken'),
  c('air-fryer-pork-belly', 'Air Fryer Pork Belly', 'British', 'Dinner', 'Medium', 10, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'air fryer pork belly'),
  c('air-fryer-quesadilla', 'Air Fryer Quesadilla', 'Mexican', 'Quick Meals', 'Easy', 5, 8, 2, 0, 0, [], ['new'], 'air fryer quesadilla'),
  c('air-fryer-spring-rolls', 'Air Fryer Spring Rolls', 'Chinese', 'Appetizers', 'Medium', 25, 12, 6, 0, 0, ['Vegetarian', 'Vegan'], ['new'], 'air fryer spring rolls'),
  c('air-fryer-stuffed-peppers', 'Air Fryer Stuffed Peppers', 'American', 'Dinner', 'Easy', 20, 35, 4, 0, 0, ['Gluten-Free'], ['new'], 'air fryer stuffed peppers'),
  c('air-fryer-tater-tots', 'Air Fryer Tater Tots', 'American', 'Appetizers', 'Easy', 2, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'air fryer tater tots'),
  c('air-fryer-turkey-breast', 'Air Fryer Turkey Breast', 'American', 'Dinner', 'Medium', 10, 50, 6, 0, 0, ['Gluten-Free'], ['new'], 'air fryer turkey breast'),
  c('air-fryer-zucchini-chips', 'Air Fryer Zucchini Chips', 'American', 'Appetizers', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'air fryer zucchini chips'),
  c('instant-pot-baked-beans', 'Instant Pot Baked Beans', 'American', 'Dinner', 'Easy', 15, 50, 8, 0, 0, ['Dairy-Free'], ['new'], 'instant pot baked beans'),
  c('instant-pot-beans-and-ham', 'Instant Pot Beans and Ham', 'American', 'Dinner', 'Easy', 10, 60, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'instant pot beans and ham'),
  c('instant-pot-beef-bourguignon', 'Instant Pot Beef Bourguignon', 'French', 'Dinner', 'Medium', 25, 45, 6, 0, 0, [], ['new'], 'instant pot beef bourguignon'),
  c('instant-pot-beef-brisket', 'Instant Pot Beef Brisket', 'American', 'Dinner', 'Medium', 15, 90, 8, 0, 0, ['Dairy-Free'], ['new'], 'instant pot beef brisket'),
  c('instant-pot-beef-curry', 'Instant Pot Beef Curry', 'Indian', 'Dinner', 'Easy', 15, 35, 4, 0, 0, ['Gluten-Free'], ['new'], 'instant pot beef curry'),
  c('instant-pot-beef-stroganoff', 'Instant Pot Beef Stroganoff', 'Russian', 'Dinner', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'instant pot beef stroganoff'),
  c('instant-pot-beef-and-broccoli', 'Instant Pot Beef and Broccoli', 'Chinese', 'Dinner', 'Easy', 15, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'instant pot beef and broccoli'),
  c('instant-pot-biryani', 'Instant Pot Biryani', 'Indian', 'Dinner', 'Medium', 20, 25, 6, 0, 0, ['Gluten-Free'], ['new'], 'instant pot biryani'),
  c('instant-pot-cabbage-rolls', 'Instant Pot Cabbage Rolls', 'Polish', 'Dinner', 'Medium', 30, 25, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'instant pot cabbage rolls'),
  c('instant-pot-carnitas', 'Instant Pot Carnitas', 'Mexican', 'Dinner', 'Easy', 15, 60, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'instant pot carnitas'),
  c('instant-pot-chicken-adobo', 'Instant Pot Chicken Adobo', 'Filipino', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'instant pot chicken adobo'),
  c('instant-pot-chicken-cacciatore', 'Instant Pot Chicken Cacciatore', 'Italian', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'instant pot chicken cacciatore'),
  c('instant-pot-chicken-fajitas', 'Instant Pot Chicken Fajitas', 'Mexican', 'Dinner', 'Easy', 10, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'instant pot chicken fajitas'),
  c('instant-pot-chicken-tikka-masala', 'Instant Pot Chicken Tikka Masala', 'Indian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'instant pot chicken tikka masala'),
  c('instant-pot-corned-beef-and-cabbage', 'Instant Pot Corned Beef and Cabbage', 'Irish', 'Dinner', 'Easy', 10, 95, 6, 0, 0, [], ['new'], 'instant pot corned beef and cabbage'),
  c('instant-pot-fajita-pasta', 'Instant Pot Fajita Pasta', 'Mexican', 'Dinner', 'Easy', 10, 10, 4, 0, 0, [], ['new'], 'instant pot fajita pasta'),
  c('instant-pot-general-tso-chicken', 'Instant Pot General Tso Chicken', 'Chinese', 'Dinner', 'Medium', 15, 15, 4, 0, 0, [], ['new'], 'instant pot general tso chicken'),
  c('instant-pot-goulash', 'Instant Pot Goulash', 'Hungarian', 'Dinner', 'Easy', 10, 25, 6, 0, 0, [], ['new'], 'instant pot goulash'),
  c('instant-pot-gumbo', 'Instant Pot Gumbo', 'American', 'Dinner', 'Medium', 25, 30, 6, 0, 0, [], ['new'], 'instant pot gumbo'),
  c('instant-pot-korean-beef', 'Instant Pot Korean Beef', 'Korean', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'instant pot korean beef'),
  c('instant-pot-lamb-shanks', 'Instant Pot Lamb Shanks', 'British', 'Dinner', 'Medium', 15, 100, 4, 0, 0, ['Dairy-Free'], ['new'], 'instant pot lamb shanks'),
  c('instant-pot-meatballs', 'Instant Pot Meatballs', 'Italian', 'Dinner', 'Easy', 20, 15, 4, 0, 0, [], ['new'], 'instant pot meatballs'),
  c('instant-pot-minestrone', 'Instant Pot Minestrone', 'Italian', 'Dinner', 'Easy', 15, 15, 6, 0, 0, [], ['new'], 'instant pot minestrone'),
  c('instant-pot-mongolian-beef', 'Instant Pot Mongolian Beef', 'Chinese', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'instant pot mongolian beef'),
  c('instant-pot-orange-chicken', 'Instant Pot Orange Chicken', 'Chinese', 'Dinner', 'Medium', 15, 20, 4, 0, 0, [], ['new'], 'instant pot orange chicken'),
  c('instant-pot-osso-buco', 'Instant Pot Osso Buco', 'Italian', 'Dinner', 'Hard', 25, 50, 4, 0, 0, ['Dairy-Free'], ['new'], 'instant pot osso buco'),
  c('instant-pot-pad-thai', 'Instant Pot Pad Thai', 'Thai', 'Dinner', 'Medium', 15, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'instant pot pad thai'),
  c('instant-pot-pho', 'Instant Pot Pho', 'Vietnamese', 'Dinner', 'Medium', 15, 40, 4, 0, 0, ['Dairy-Free'], ['new'], 'instant pot pho'),
  c('instant-pot-ramen', 'Instant Pot Ramen', 'Japanese', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'instant pot ramen'),
  c('instant-pot-salmon', 'Instant Pot Salmon', 'American', 'Quick Meals', 'Easy', 5, 10, 2, 0, 0, ['Gluten-Free'], ['new'], 'instant pot salmon'),
  c('instant-pot-shrimp-scampi', 'Instant Pot Shrimp Scampi', 'Italian', 'Quick Meals', 'Easy', 10, 10, 4, 0, 0, [], ['new'], 'instant pot shrimp scampi'),
  c('instant-pot-stuffed-peppers', 'Instant Pot Stuffed Peppers', 'American', 'Dinner', 'Easy', 20, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'instant pot stuffed peppers'),
  c('instant-pot-taco-soup', 'Instant Pot Taco Soup', 'Mexican', 'Dinner', 'Easy', 10, 25, 6, 0, 0, [], ['new'], 'instant pot taco soup'),
  c('instant-pot-teriyaki-chicken', 'Instant Pot Teriyaki Chicken', 'Japanese', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'instant pot teriyaki chicken'),
  c('instant-pot-white-chicken-chili', 'Instant Pot White Chicken Chili', 'American', 'Dinner', 'Easy', 15, 25, 6, 0, 0, [], ['new'], 'instant pot white chicken chili'),
  c('instant-pot-whole-chicken', 'Instant Pot Whole Chicken', 'American', 'Dinner', 'Easy', 10, 55, 6, 0, 0, ['Dairy-Free'], ['new'], 'instant pot whole chicken'),
  c('baked-chicken-legs', 'Baked Chicken Legs', 'American', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'baked chicken legs'),
  c('baked-halibut', 'Baked Halibut', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'baked halibut'),
  c('baked-penne', 'Baked Penne', 'Italian', 'Dinner', 'Easy', 20, 50, 6, 0, 0, [], ['new'], 'baked penne'),
  c('baked-pork-chops', 'Baked Pork Chops', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'baked pork chops'),
  c('baked-rigatoni', 'Baked Rigatoni', 'Italian', 'Dinner', 'Easy', 20, 78, 6, 0, 0, [], ['new'], 'baked rigatoni'),
  c('baked-sea-bass', 'Baked Sea Bass', 'British', 'Dinner', 'Easy', 10, 20, 2, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'baked sea bass'),
  c('baked-trout', 'Baked Trout', 'British', 'Dinner', 'Easy', 10, 20, 2, 0, 0, ['Gluten-Free'], ['new'], 'baked trout'),
  c('battered-fish', 'Battered Fish', 'British', 'Dinner', 'Medium', 15, 15, 4, 0, 0, [], ['new'], 'battered fish'),
  c('beef-casserole', 'Beef Casserole', 'British', 'Dinner', 'Easy', 20, 120, 6, 0, 0, ['Dairy-Free'], ['new'], 'beef casserole'),
  c('beef-nachos', 'Beef Nachos', 'Mexican', 'Appetizers', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'beef nachos'),
  c('beef-ramen', 'Beef Ramen', 'Japanese', 'Dinner', 'Easy', 10, 20, 2, 0, 0, ['Dairy-Free'], ['new'], 'beef ramen'),
  c('blackened-shrimp', 'Blackened Shrimp', 'American', 'Quick Meals', 'Easy', 10, 6, 4, 0, 0, ['Gluten-Free'], ['new'], 'blackened shrimp'),
  c('breakfast-skillet', 'Breakfast Skillet', 'American', 'Breakfast', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'breakfast skillet'),
  c('cabbage-casserole', 'Cabbage Casserole', 'American', 'Dinner', 'Easy', 15, 60, 6, 0, 0, [], ['new'], 'cabbage casserole'),
  c('cabbage-steaks', 'Cabbage Steaks', 'American', 'Healthy', 'Easy', 5, 30, 4, 0, 0, ['Gluten-Free'], ['new'], 'cabbage steaks'),
  c('chicken-lasagna', 'Chicken Lasagna', 'Italian', 'Dinner', 'Medium', 30, 45, 8, 0, 0, [], ['new'], 'chicken lasagna'),
  c('chicken-nachos', 'Chicken Nachos', 'Mexican', 'Appetizers', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'chicken nachos'),
  c('chicken-ramen', 'Chicken Ramen', 'Japanese', 'Dinner', 'Easy', 10, 20, 2, 0, 0, ['Dairy-Free'], ['new'], 'chicken ramen'),
  c('chicken-thighs-in-oven', 'Chicken Thighs in Oven', 'American', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Dairy-Free'], ['new'], 'chicken thighs in oven'),
  c('chicken-tostadas', 'Chicken Tostadas', 'Mexican', 'Dinner', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'chicken tostadas'),
  c('chicken-wellington', 'Chicken Wellington', 'British', 'Dinner', 'Hard', 40, 35, 4, 0, 0, [], ['new'], 'chicken wellington'),
  c('chicken-with-40-cloves-of-garlic', 'Chicken with 40 Cloves of Garlic', 'French', 'Dinner', 'Medium', 20, 90, 4, 0, 0, [], ['new'], 'chicken with 40 cloves of garlic'),
  c('chorizo-and-potato-stew', 'Chorizo and Potato Stew', 'Spanish', 'Dinner', 'Easy', 15, 35, 4, 0, 0, ['Dairy-Free'], ['new'], 'chorizo and potato stew'),
  c('cod-in-garlic-butter', 'Cod in Garlic Butter', 'American', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'cod in garlic butter'),
  c('crab-mac-and-cheese', 'Crab Mac and Cheese', 'American', 'Dinner', 'Medium', 20, 25, 6, 0, 0, [], ['new'], 'crab mac and cheese'),
  c('dak-galbi', 'Dak Galbi', 'Korean', 'Dinner', 'Medium', 20, 15, 4, 0, 0, [], ['new'], 'dak galbi'),
  c('eggplant-lasagna', 'Eggplant Lasagna', 'Italian', 'Dinner', 'Medium', 30, 70, 6, 0, 0, ['Gluten-Free'], ['new'], 'eggplant lasagna'),
  c('fettuccine-with-mushrooms', 'Fettuccine with Mushrooms', 'Italian', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'fettuccine with mushrooms'),
  c('fried-oysters', 'Fried Oysters', 'American', 'Appetizers', 'Medium', 15, 6, 4, 0, 0, ['Dairy-Free'], ['new'], 'fried oysters'),
  c('gammon-and-pineapple', 'Gammon and Pineapple', 'British', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'gammon and pineapple'),
  c('garlic-butter-salmon', 'Garlic Butter Salmon', 'American', 'Quick Meals', 'Easy', 5, 12, 4, 0, 0, ['Gluten-Free'], ['new'], 'garlic butter salmon'),
  c('glazed-parsnips', 'Glazed Parsnips', 'British', 'Dinner', 'Easy', 10, 30, 6, 0, 0, ['Vegetarian'], ['new'], 'glazed parsnips'),
  c('grilled-chicken-sandwich', 'Grilled Chicken Sandwich', 'American', 'Lunch', 'Easy', 15, 12, 4, 0, 0, [], ['new'], 'grilled chicken sandwich'),
  c('grilled-octopus', 'Grilled Octopus', 'Greek', 'Dinner', 'Hard', 20, 60, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'grilled octopus'),
  c('grilled-sea-bass', 'Grilled Sea Bass', 'Greek', 'Dinner', 'Easy', 10, 10, 2, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'grilled sea bass')
];
