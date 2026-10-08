'use strict';

/**
 * Weekly Delight — recipe catalog, volume thirty-seven.
 * One hundred b2 dishes that take little effort: mince and sausage dinners,
 * cheap cuts and tinned fish, chicken thighs and whole birds, pies and bakes,
 * noodle and rice suppers, and vegetable curries, soups and stews. They are
 * familiar dishes that people in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * The method is in the title because that is how these dishes are searched
 * for. Cooking times are the ones the recipe's own method gives; an appliance
 * differs in power and size, and each page says to check early.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, and then read by hand.
 *
 * Spread: American 54, British 22, Australian 7, Italian 7, Mexican 4, Indian 3, Chinese 1, Middle Eastern 1, New Zealand 1.
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
  c('air-fryer-meatballs', 'Air Fryer Meatballs', 'American', 'Dinner', 'Easy', 15, 12, 4, 0, 0, [], ['new'], 'air fryer meatballs'),
  c('air-fryer-steak', 'Air Fryer Steak', 'American', 'Dinner', 'Easy', 5, 10, 2, 0, 0, ['Gluten-Free'], ['new'], 'air fryer steak'),
  c('air-fryer-potatoes', 'Air Fryer Potatoes', 'American', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'air fryer potatoes'),
  c('air-fryer-onion-rings', 'Air Fryer Onion Rings', 'American', 'Appetizers', 'Medium', 15, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'air fryer onion rings'),
  c('air-fryer-fish-fingers', 'Air Fryer Fish Fingers', 'British', 'Quick Meals', 'Easy', 5, 12, 4, 0, 0, [], ['new'], 'air fryer fish fingers'),
  c('air-fryer-sausages', 'Air Fryer Sausages', 'British', 'Quick Meals', 'Easy', 2, 12, 4, 0, 0, [], ['new'], 'air fryer sausages'),
  c('air-fryer-roast-chicken', 'Air Fryer Roast Chicken', 'British', 'Dinner', 'Easy', 10, 55, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'air fryer roast chicken'),
  c('air-fryer-corn-on-the-cob', 'Air Fryer Corn on the Cob', 'American', 'Dinner', 'Easy', 5, 12, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'air fryer corn on the cob'),
  c('air-fryer-halloumi', 'Air Fryer Halloumi', 'Middle Eastern', 'Appetizers', 'Easy', 5, 8, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'air fryer halloumi'),
  c('air-fryer-chickpeas', 'Air Fryer Chickpeas', 'American', 'Appetizers', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'air fryer chickpeas'),
  c('air-fryer-samosas', 'Air Fryer Samosas', 'Indian', 'Appetizers', 'Medium', 30, 12, 8, 0, 0, ['Vegetarian'], ['new'], 'air fryer samosas'),
  c('air-fryer-donuts', 'Air Fryer Donuts', 'American', 'Desserts', 'Medium', 15, 8, 8, 0, 0, ['Vegetarian'], ['new'], 'air fryer donuts'),
  c('air-fryer-apple-chips', 'Air Fryer Apple Chips', 'American', 'Appetizers', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'air fryer apple chips'),
  c('air-fryer-garlic-bread', 'Air Fryer Garlic Bread', 'American', 'Appetizers', 'Easy', 5, 8, 4, 0, 0, ['Vegetarian'], ['new'], 'air fryer garlic bread'),
  c('air-fryer-jacket-potato', 'Air Fryer Jacket Potato', 'British', 'Dinner', 'Easy', 5, 40, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'air fryer jacket potato'),
  c('air-fryer-hash-browns', 'Air Fryer Hash Browns', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'air fryer hash browns'),
  c('air-fryer-mozzarella-sticks', 'Air Fryer Mozzarella Sticks', 'American', 'Appetizers', 'Medium', 15, 8, 4, 0, 0, ['Vegetarian'], ['new'], 'air fryer mozzarella sticks'),
  c('instant-pot-chili', 'Instant Pot Chili', 'American', 'Dinner', 'Easy', 15, 25, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'instant pot chili'),
  c('instant-pot-mac-and-cheese', 'Instant Pot Mac and Cheese', 'American', 'Quick Meals', 'Easy', 5, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'instant pot mac and cheese'),
  c('instant-pot-rice', 'Instant Pot Rice', 'American', 'Quick Meals', 'Easy', 5, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'instant pot rice'),
  c('instant-pot-chicken-soup', 'Instant Pot Chicken Soup', 'American', 'Lunch', 'Easy', 15, 25, 6, 0, 0, ['Dairy-Free'], ['new'], 'instant pot chicken soup'),
  c('instant-pot-pulled-pork', 'Instant Pot Pulled Pork', 'American', 'Dinner', 'Easy', 15, 90, 8, 0, 0, [], ['new'], 'instant pot pulled pork'),
  c('instant-pot-ribs', 'Instant Pot Ribs', 'American', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'instant pot ribs'),
  c('instant-pot-lentil-soup', 'Instant Pot Lentil Soup', 'American', 'Lunch', 'Easy', 10, 25, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'instant pot lentil soup'),
  c('instant-pot-mashed-potatoes', 'Instant Pot Mashed Potatoes', 'American', 'Dinner', 'Easy', 10, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'instant pot mashed potatoes'),
  c('instant-pot-beef-stew', 'Instant Pot Beef Stew', 'American', 'Dinner', 'Easy', 20, 40, 6, 0, 0, ['Dairy-Free'], ['new'], 'instant pot beef stew'),
  c('instant-pot-hard-boiled-eggs', 'Instant Pot Hard Boiled Eggs', 'American', 'Breakfast', 'Easy', 2, 12, 6, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'instant pot hard boiled eggs'),
  c('instant-pot-risotto', 'Instant Pot Risotto', 'Italian', 'Dinner', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'instant pot risotto'),
  c('instant-pot-chicken-curry', 'Instant Pot Chicken Curry', 'Indian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'instant pot chicken curry'),
  c('instant-pot-black-beans', 'Instant Pot Black Beans', 'Mexican', 'Dinner', 'Easy', 10, 35, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'instant pot black beans'),
  c('instant-pot-oatmeal', 'Instant Pot Oatmeal', 'American', 'Breakfast', 'Easy', 2, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'instant pot oatmeal'),
  c('instant-pot-cheesecake', 'Instant Pot Cheesecake', 'American', 'Desserts', 'Medium', 20, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'instant pot cheesecake'),
  c('instant-pot-bolognese', 'Instant Pot Bolognese', 'Italian', 'Dinner', 'Easy', 15, 25, 6, 0, 0, ['Dairy-Free'], ['new'], 'instant pot bolognese'),
  c('instant-pot-chicken-thighs', 'Instant Pot Chicken Thighs', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'instant pot chicken thighs'),
  c('instant-pot-split-pea-soup', 'Instant Pot Split Pea Soup', 'American', 'Lunch', 'Easy', 10, 30, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'instant pot split pea soup'),
  c('slow-cooker-beef-stew', 'Slow Cooker Beef Stew', 'American', 'Dinner', 'Easy', 20, 480, 6, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker beef stew'),
  c('slow-cooker-chicken-soup', 'Slow Cooker Chicken Soup', 'American', 'Lunch', 'Easy', 15, 360, 6, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker chicken soup'),
  c('slow-cooker-chili', 'Slow Cooker Chili', 'American', 'Dinner', 'Easy', 15, 360, 6, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker chili'),
  c('slow-cooker-lamb-shanks', 'Slow Cooker Lamb Shanks', 'British', 'Dinner', 'Easy', 15, 480, 4, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker lamb shanks'),
  c('slow-cooker-bolognese', 'Slow Cooker Bolognese', 'Italian', 'Dinner', 'Easy', 15, 360, 6, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker bolognese'),
  c('slow-cooker-beef-curry', 'Slow Cooker Beef Curry', 'British', 'Dinner', 'Easy', 15, 420, 4, 0, 0, ['Gluten-Free'], ['new'], 'slow cooker beef curry'),
  c('slow-cooker-lentil-soup', 'Slow Cooker Lentil Soup', 'American', 'Lunch', 'Easy', 10, 360, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'slow cooker lentil soup'),
  c('slow-cooker-baked-potatoes', 'Slow Cooker Baked Potatoes', 'American', 'Dinner', 'Easy', 5, 360, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'slow cooker baked potatoes'),
  c('slow-cooker-mac-and-cheese', 'Slow Cooker Mac and Cheese', 'American', 'Dinner', 'Easy', 10, 150, 6, 0, 0, ['Vegetarian'], ['new'], 'slow cooker mac and cheese'),
  c('slow-cooker-meatballs', 'Slow Cooker Meatballs', 'American', 'Dinner', 'Easy', 20, 240, 6, 0, 0, [], ['new'], 'slow cooker meatballs'),
  c('slow-cooker-ham', 'Slow Cooker Ham', 'American', 'Dinner', 'Easy', 10, 300, 10, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker ham'),
  c('slow-cooker-porridge', 'Slow Cooker Porridge', 'British', 'Breakfast', 'Easy', 5, 480, 4, 0, 0, ['Vegetarian'], ['new'], 'slow cooker porridge'),
  c('slow-cooker-apple-crumble', 'Slow Cooker Apple Crumble', 'British', 'Desserts', 'Easy', 15, 180, 6, 0, 0, ['Vegetarian'], ['new'], 'slow cooker apple crumble'),
  c('slow-cooker-chicken-curry', 'Slow Cooker Chicken Curry', 'Indian', 'Dinner', 'Easy', 15, 360, 4, 0, 0, [], ['new'], 'slow cooker chicken curry'),
  c('slow-cooker-sausage-casserole', 'Slow Cooker Sausage Casserole', 'British', 'Dinner', 'Easy', 15, 240, 4, 0, 0, [], ['new'], 'slow cooker sausage casserole'),
  c('slow-cooker-minestrone', 'Slow Cooker Minestrone', 'Italian', 'Lunch', 'Easy', 15, 300, 6, 0, 0, [], ['new'], 'slow cooker minestrone'),
  c('slow-cooker-chicken-tacos', 'Slow Cooker Chicken Tacos', 'Mexican', 'Dinner', 'Easy', 10, 360, 6, 0, 0, [], ['new'], 'slow cooker chicken tacos'),
  c('slow-cooker-pea-and-ham-soup', 'Slow Cooker Pea and Ham Soup', 'Australian', 'Lunch', 'Easy', 10, 420, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'slow cooker pea and ham soup'),
  c('slow-cooker-corned-beef', 'Slow Cooker Corned Beef', 'New Zealand', 'Dinner', 'Easy', 10, 480, 6, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker corned beef'),
  c('slow-cooker-pork-ribs', 'Slow Cooker Pork Ribs', 'American', 'Dinner', 'Easy', 10, 360, 4, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker pork ribs'),
  c('slow-cooker-bean-soup', 'Slow Cooker Bean Soup', 'American', 'Lunch', 'Easy', 10, 420, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'slow cooker bean soup'),
  c('sheet-pan-chicken-and-potatoes', 'Sheet Pan Chicken and Potatoes', 'American', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'sheet pan chicken and potatoes'),
  c('sheet-pan-sausage-and-vegetables', 'Sheet Pan Sausage and Vegetables', 'American', 'Dinner', 'Easy', 10, 35, 4, 0, 0, [], ['new'], 'sheet pan sausage and vegetables'),
  c('sheet-pan-fajitas', 'Sheet Pan Fajitas', 'Mexican', 'Dinner', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'sheet pan fajitas'),
  c('sheet-pan-nachos', 'Sheet Pan Nachos', 'Mexican', 'Appetizers', 'Easy', 10, 12, 4, 0, 0, ['Vegetarian'], ['new'], 'sheet pan nachos'),
  c('sheet-pan-pancakes', 'Sheet Pan Pancakes', 'American', 'Breakfast', 'Easy', 10, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'sheet pan pancakes'),
  c('sheet-pan-meatballs', 'Sheet Pan Meatballs', 'Italian', 'Dinner', 'Easy', 20, 20, 4, 0, 0, [], ['new'], 'sheet pan meatballs'),
  c('sheet-pan-gnocchi', 'Sheet Pan Gnocchi', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'sheet pan gnocchi'),
  c('sheet-pan-pizza', 'Sheet Pan Pizza', 'American', 'Dinner', 'Medium', 20, 20, 6, 0, 0, [], ['new'], 'sheet pan pizza'),
  c('grilled-salmon', 'Grilled Salmon', 'American', 'Dinner', 'Easy', 5, 12, 4, 0, 0, ['Gluten-Free'], ['new'], 'grilled salmon'),
  c('grilled-chicken-breast', 'Grilled Chicken Breast', 'American', 'Dinner', 'Easy', 5, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'grilled chicken breast'),
  c('grilled-steak', 'Grilled Steak', 'American', 'Dinner', 'Easy', 5, 10, 2, 0, 0, ['Gluten-Free'], ['new'], 'grilled steak'),
  c('grilled-pork-chops', 'Grilled Pork Chops', 'American', 'Dinner', 'Easy', 10, 14, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'grilled pork chops'),
  c('grilled-sausages', 'Grilled Sausages', 'British', 'Quick Meals', 'Easy', 2, 15, 4, 0, 0, [], ['new'], 'grilled sausages'),
  c('grilled-lamb-chops', 'Grilled Lamb Chops', 'Australian', 'Dinner', 'Easy', 5, 10, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'grilled lamb chops'),
  c('grilled-burgers', 'Grilled Burgers', 'American', 'Dinner', 'Easy', 15, 12, 4, 0, 0, [], ['new'], 'grilled burgers'),
  c('grilled-hot-dogs', 'Grilled Hot Dogs', 'American', 'Quick Meals', 'Easy', 2, 8, 4, 0, 0, [], ['new'], 'grilled hot dogs'),
  c('grilled-peaches', 'Grilled Peaches', 'American', 'Desserts', 'Easy', 5, 8, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'grilled peaches'),
  c('bbq-pork', 'BBQ Pork', 'American', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'bbq pork'),
  c('bbq-beef-brisket', 'BBQ Beef Brisket', 'American', 'Dinner', 'Medium', 20, 240, 8, 0, 0, ['Dairy-Free'], ['new'], 'bbq beef brisket'),
  c('bbq-prawns', 'BBQ Prawns', 'Australian', 'Dinner', 'Easy', 10, 8, 4, 0, 0, ['Gluten-Free'], ['new'], 'bbq prawns'),
  c('bbq-corn', 'BBQ Corn', 'American', 'Dinner', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'bbq corn'),
  c('bbq-lamb', 'BBQ Lamb', 'Australian', 'Dinner', 'Easy', 15, 40, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'bbq lamb'),
  c('fish-burgers', 'Fish Burgers', 'British', 'Dinner', 'Easy', 15, 10, 4, 0, 0, [], ['new'], 'fish burgers'),
  c('lamb-burgers', 'Lamb Burgers', 'British', 'Dinner', 'Easy', 15, 12, 4, 0, 0, [], ['new'], 'lamb burgers'),
  c('pork-burgers', 'Pork Burgers', 'American', 'Dinner', 'Easy', 15, 12, 4, 0, 0, [], ['new'], 'pork burgers'),
  c('mushroom-burgers', 'Mushroom Burgers', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'mushroom burgers'),
  c('beetroot-burger', 'Beetroot Burger', 'Australian', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Vegetarian'], ['new'], 'beetroot burger'),
  c('beef-and-guinness-pie', 'Beef and Guinness Pie', 'British', 'Dinner', 'Medium', 30, 150, 6, 0, 0, [], ['new'], 'beef and guinness pie'),
  c('party-pies', 'Party Pies', 'Australian', 'Appetizers', 'Medium', 40, 25, 12, 0, 0, [], ['new'], 'party pies'),
  c('steak-and-kidney-pie', 'Steak and Kidney Pie', 'British', 'Dinner', 'Medium', 30, 150, 6, 0, 0, [], ['new'], 'steak and kidney pie'),
  c('cheese-and-potato-pie', 'Cheese and Potato Pie', 'British', 'Dinner', 'Medium', 30, 45, 6, 0, 0, ['Vegetarian'], ['new'], 'cheese and potato pie'),
  c('cheese-and-egg-pie', 'Cheese and Egg Pie', 'British', 'Dinner', 'Medium', 25, 40, 6, 0, 0, [], ['new'], 'cheese and egg pie'),
  c('sunday-roast-beef', 'Sunday Roast Beef', 'British', 'Dinner', 'Medium', 20, 90, 6, 0, 0, ['Dairy-Free'], ['new'], 'sunday roast beef'),
  c('roast-chicken-legs', 'Roast Chicken Legs', 'British', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'roast chicken legs'),
  c('country-fried-chicken', 'Country Fried Chicken', 'American', 'Dinner', 'Medium', 20, 25, 4, 0, 0, [], ['new'], 'country fried chicken'),
  c('lamb-cutlets-with-mint-sauce', 'Lamb Cutlets with Mint Sauce', 'British', 'Dinner', 'Easy', 10, 10, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'lamb cutlets with mint sauce'),
  c('lamb-shanks', 'Lamb Shanks', 'British', 'Dinner', 'Medium', 20, 150, 4, 0, 0, ['Dairy-Free'], ['new'], 'lamb shanks'),
  c('beef-chow-mein', 'Beef Chow Mein', 'Chinese', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'beef chow mein'),
  c('tuna-casserole-with-peas', 'Tuna Casserole with Peas', 'American', 'Dinner', 'Easy', 15, 35, 4, 0, 0, [], ['new'], 'tuna casserole with peas'),
  c('pumpkin-risotto', 'Pumpkin Risotto', 'Italian', 'Dinner', 'Medium', 10, 30, 4, 0, 0, [], ['new'], 'pumpkin risotto'),
  c('cheese-grits', 'Cheese Grits', 'American', 'Breakfast', 'Easy', 5, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'cheese grits'),
  c('potato-bake-with-cream', 'Potato Bake with Cream', 'Australian', 'Dinner', 'Easy', 15, 60, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'potato bake with cream'),
  c('black-pudding-hash', 'Black Pudding Hash', 'British', 'Breakfast', 'Easy', 10, 20, 2, 0, 0, ['Dairy-Free'], ['new'], 'black pudding hash'),
  c('yorkshire-pudding-wraps', 'Yorkshire Pudding Wraps', 'British', 'Dinner', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'yorkshire pudding wraps')
];
