'use strict';

/**
 * Weekly Delight — recipe catalog, volume thirty-nine.
 * One hundred dinners and lunches: Japanese, Thai, Indian, Mexican, Caribbean,
 * Middle Eastern, Mediterranean and European suppers, American casseroles and
 * skillets, and weeknight chicken, pork, beef, lamb, fish and vegetable
 * mains. They are the variations on familiar dishes that cooks in the USA,
 * Canada, Australia, the UK and New Zealand look for by name; no search-volume
 * data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: American 27, Italian 16, British 8, Japanese 7, Middle Eastern 6, Indian 5, French 4, Mexican 4, Greek 3, Moroccan 3, Spanish 3, German 2, Persian 2, Australian 1, Canadian 1, Caribbean 1, Chinese 1, Korean 1, Malaysian 1, Russian 1, Thai 1, Turkish 1, Vietnamese 1.
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
  c('katsu-sando', 'Katsu Sando', 'Japanese', 'Lunch', 'Medium', 20, 10, 2, 0, 0, [], ['new'], 'katsu sando'),
  c('beef-udon', 'Beef Udon', 'Japanese', 'Dinner', 'Easy', 10, 15, 2, 0, 0, ['Dairy-Free'], ['new'], 'beef udon'),
  c('tempura-prawns', 'Tempura Prawns', 'Japanese', 'Appetizers', 'Medium', 15, 8, 4, 0, 0, ['Dairy-Free'], ['new'], 'tempura prawns'),
  c('salmon-teriyaki', 'Salmon Teriyaki', 'Japanese', 'Quick Meals', 'Easy', 5, 12, 2, 0, 0, ['Dairy-Free'], ['new'], 'salmon teriyaki'),
  c('miso-glazed-salmon', 'Miso Glazed Salmon', 'Japanese', 'Quick Meals', 'Easy', 10, 12, 2, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'miso glazed salmon'),
  c('chirashi-bowl', 'Chirashi Bowl', 'Japanese', 'Lunch', 'Medium', 25, 12, 2, 0, 0, ['Dairy-Free'], ['new'], 'chirashi bowl'),
  c('drunken-noodles', 'Drunken Noodles', 'Thai', 'Quick Meals', 'Easy', 10, 10, 2, 0, 0, ['Dairy-Free'], ['new'], 'drunken noodles'),
  c('vietnamese-caramel-pork', 'Vietnamese Caramel Pork', 'Vietnamese', 'Dinner', 'Medium', 15, 60, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'vietnamese caramel pork'),
  c('mee-goreng', 'Mee Goreng', 'Malaysian', 'Quick Meals', 'Easy', 10, 10, 2, 0, 0, ['Dairy-Free'], ['new'], 'mee goreng'),
  c('steamed-fish-with-ginger', 'Steamed Fish with Ginger', 'Chinese', 'Dinner', 'Easy', 10, 12, 2, 0, 0, ['Dairy-Free'], ['new'], 'steamed fish with ginger'),
  c('beef-madras', 'Beef Madras', 'Indian', 'Dinner', 'Medium', 20, 90, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'beef madras'),
  c('chicken-tikka-skewers', 'Chicken Tikka Skewers', 'Indian', 'Dinner', 'Easy', 20, 12, 4, 0, 0, ['Gluten-Free'], ['new'], 'chicken tikka skewers'),
  c('cheese-enchiladas', 'Cheese Enchiladas', 'Mexican', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'cheese enchiladas'),
  c('roti-with-chicken-curry', 'Roti with Chicken Curry', 'Caribbean', 'Dinner', 'Medium', 30, 40, 4, 0, 0, ['Dairy-Free'], ['new'], 'roti with chicken curry'),
  c('kebab-wraps', 'Kebab Wraps', 'Middle Eastern', 'Dinner', 'Easy', 20, 12, 4, 0, 0, [], ['new'], 'kebab wraps'),
  c('chorizo-and-potatoes', 'Chorizo and Potatoes', 'Spanish', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'chorizo and potatoes'),
  c('salmon-fish-cakes', 'Salmon Fish Cakes', 'British', 'Dinner', 'Easy', 20, 12, 4, 0, 0, [], ['new'], 'salmon fish cakes'),
  c('cheeseburger-casserole', 'Cheeseburger Casserole', 'American', 'Dinner', 'Easy', 15, 30, 6, 0, 0, [], ['new'], 'cheeseburger casserole'),
  c('enchilada-casserole', 'Enchilada Casserole', 'American', 'Dinner', 'Easy', 15, 30, 6, 0, 0, [], ['new'], 'enchilada casserole'),
  c('chicken-broccoli-rice-casserole', 'Chicken Broccoli Rice Casserole', 'American', 'Dinner', 'Easy', 15, 40, 6, 0, 0, [], ['new'], 'chicken broccoli rice casserole'),
  c('poppy-seed-chicken', 'Poppy Seed Chicken', 'American', 'Dinner', 'Easy', 15, 35, 6, 0, 0, [], ['new'], 'poppy seed chicken'),
  c('million-dollar-spaghetti', 'Million Dollar Spaghetti', 'American', 'Dinner', 'Easy', 15, 35, 8, 0, 0, [], ['new'], 'million dollar spaghetti'),
  c('chicken-parmesan-sub', 'Chicken Parmesan Sub', 'American', 'Lunch', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'chicken parmesan sub'),
  c('fried-chicken-sandwich', 'Fried Chicken Sandwich', 'American', 'Lunch', 'Medium', 20, 12, 4, 0, 0, [], ['new'], 'fried chicken sandwich'),
  c('mediterranean-bowl', 'Mediterranean Bowl', 'Greek', 'Healthy', 'Easy', 20, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'mediterranean bowl'),
  c('coconut-chicken', 'Coconut Chicken', 'American', 'Dinner', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'coconut chicken'),
  c('hawaiian-chicken', 'Hawaiian Chicken', 'American', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'hawaiian chicken'),
  c('tuscan-chicken', 'Tuscan Chicken', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'tuscan chicken'),
  c('rosemary-chicken', 'Rosemary Chicken', 'British', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'rosemary chicken'),
  c('pulled-pork-tacos', 'Pulled Pork Tacos', 'Mexican', 'Dinner', 'Easy', 10, 10, 6, 0, 0, [], ['new'], 'pulled pork tacos'),
  c('gammon-steak', 'Gammon Steak', 'British', 'Quick Meals', 'Easy', 5, 12, 2, 0, 0, ['Gluten-Free'], ['new'], 'gammon steak'),
  c('bacon-mac-and-cheese', 'Bacon Mac and Cheese', 'American', 'Dinner', 'Easy', 10, 25, 6, 0, 0, [], ['new'], 'bacon mac and cheese'),
  c('beef-kebabs', 'Beef Kebabs', 'Middle Eastern', 'Dinner', 'Easy', 20, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'beef kebabs'),
  c('lamb-stew', 'Lamb Stew', 'British', 'Dinner', 'Medium', 20, 120, 6, 0, 0, ['Dairy-Free'], ['new'], 'lamb stew'),
  c('lamb-meatballs', 'Lamb Meatballs', 'Middle Eastern', 'Dinner', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'lamb meatballs'),
  c('lemon-butter-salmon', 'Lemon Butter Salmon', 'American', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'lemon butter salmon'),
  c('cajun-salmon', 'Cajun Salmon', 'American', 'Quick Meals', 'Easy', 5, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'cajun salmon'),
  c('haddock-chowder', 'Haddock Chowder', 'British', 'Dinner', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'haddock chowder'),
  c('trout-almondine', 'Trout Almondine', 'French', 'Dinner', 'Medium', 10, 12, 2, 0, 0, ['Vegetarian'], ['new'], 'trout almondine'),
  c('prawn-curry', 'Prawn Curry', 'Indian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'prawn curry'),
  c('prawn-linguine', 'Prawn Linguine', 'Italian', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'prawn linguine'),
  c('mussels-marinara', 'Mussels Marinara', 'Italian', 'Dinner', 'Easy', 10, 15, 2, 0, 0, [], ['new'], 'mussels marinara'),
  c('seafood-paella', 'Seafood Paella', 'Spanish', 'Dinner', 'Medium', 20, 35, 6, 0, 0, ['Dairy-Free'], ['new'], 'seafood paella'),
  c('vegetable-curry', 'Vegetable Curry', 'Indian', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'vegetable curry'),
  c('spinach-lasagna', 'Spinach Lasagna', 'Italian', 'Dinner', 'Medium', 25, 45, 6, 0, 0, [], ['new'], 'spinach lasagna'),
  c('eggplant-curry', 'Eggplant Curry', 'Indian', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'eggplant curry'),
  c('pumpkin-gnocchi', 'Pumpkin Gnocchi', 'Italian', 'Dinner', 'Medium', 30, 10, 4, 0, 0, [], ['new'], 'pumpkin gnocchi'),
  c('honey-sriracha-salmon-bites', 'Honey Sriracha Salmon Bites', 'American', 'Appetizers', 'Easy', 10, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'honey sriracha salmon bites'),
  c('cheesy-ranch-chicken', 'Cheesy Ranch Chicken', 'American', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Gluten-Free'], ['new'], 'cheesy ranch chicken'),
  c('chicken-bacon-avocado-salad', 'Chicken Bacon Avocado Salad', 'American', 'Lunch', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'chicken bacon avocado salad'),
  c('honey-lime-chicken-tacos', 'Honey Lime Chicken Tacos', 'Mexican', 'Dinner', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'honey lime chicken tacos'),
  c('slow-roasted-pork-shoulder', 'Slow Roasted Pork Shoulder', 'British', 'Dinner', 'Medium', 15, 240, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'slow roasted pork shoulder'),
  c('maple-glazed-pork-chops', 'Maple Glazed Pork Chops', 'Canadian', 'Dinner', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'maple glazed pork chops'),
  c('apple-cider-pork-tenderloin', 'Apple Cider Pork Tenderloin', 'American', 'Dinner', 'Medium', 15, 30, 4, 0, 0, [], ['new'], 'apple cider pork tenderloin'),
  c('crispy-pork-belly-bites', 'Crispy Pork Belly Bites', 'American', 'Appetizers', 'Medium', 15, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'crispy pork belly bites'),
  c('steak-and-potato-skillet', 'Steak and Potato Skillet', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'steak and potato skillet'),
  c('greek-beef-pitas', 'Greek Beef Pitas', 'Greek', 'Dinner', 'Easy', 15, 10, 4, 0, 0, [], ['new'], 'greek beef pitas'),
  c('korean-beef-lettuce-wraps', 'Korean Beef Lettuce Wraps', 'Korean', 'Quick Meals', 'Easy', 10, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'korean beef lettuce wraps'),
  c('teriyaki-beef-skewers', 'Teriyaki Beef Skewers', 'Japanese', 'Dinner', 'Easy', 20, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'teriyaki beef skewers'),
  c('honey-garlic-shrimp-stir-fry', 'Honey Garlic Shrimp Stir Fry', 'American', 'Quick Meals', 'Easy', 10, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'honey garlic shrimp stir fry'),
  c('lemon-garlic-shrimp-pasta', 'Lemon Garlic Shrimp Pasta', 'American', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'lemon garlic shrimp pasta'),
  c('sweet-chilli-prawns', 'Sweet Chilli Prawns', 'Australian', 'Quick Meals', 'Easy', 10, 8, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'sweet chilli prawns'),
  c('creamy-tuscan-shrimp', 'Creamy Tuscan Shrimp', 'Italian', 'Quick Meals', 'Easy', 10, 12, 4, 0, 0, [], ['new'], 'creamy tuscan shrimp'),
  c('crispy-fish-tacos-with-slaw', 'Crispy Fish Tacos with Slaw', 'Mexican', 'Dinner', 'Medium', 20, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'crispy fish tacos with slaw'),
  c('one-pan-chicken-and-rice', 'One Pan Chicken and Rice', 'American', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Dairy-Free'], ['new'], 'one pan chicken and rice'),
  c('one-pan-sausage-and-potatoes', 'One Pan Sausage and Potatoes', 'British', 'Dinner', 'Easy', 10, 35, 4, 0, 0, [], ['new'], 'one pan sausage and potatoes'),
  c('one-pot-lasagne-soup', 'One Pot Lasagne Soup', 'Italian', 'Dinner', 'Easy', 10, 30, 6, 0, 0, [], ['new'], 'one pot lasagne soup'),
  c('one-pot-jambalaya', 'One Pot Jambalaya', 'American', 'Dinner', 'Easy', 15, 35, 6, 0, 0, [], ['new'], 'one pot jambalaya'),
  c('spinach-stuffed-chicken', 'Spinach Stuffed Chicken', 'American', 'Dinner', 'Medium', 20, 30, 4, 0, 0, ['Gluten-Free'], ['new'], 'spinach stuffed chicken'),
  c('caprese-chicken', 'Caprese Chicken', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'caprese chicken'),
  c('bbq-chicken-pizza', 'BBQ Chicken Pizza', 'American', 'Dinner', 'Medium', 20, 15, 4, 0, 0, [], ['new'], 'bbq chicken pizza'),
  c('meat-lovers-pizza', 'Meat Lovers Pizza', 'American', 'Dinner', 'Medium', 20, 15, 4, 0, 0, [], ['new'], 'meat lovers pizza'),
  c('white-pizza', 'White Pizza', 'Italian', 'Dinner', 'Medium', 20, 15, 4, 0, 0, [], ['new'], 'white pizza'),
  c('sausage-and-broccoli-rabe-pasta', 'Sausage and Broccoli Rabe Pasta', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'sausage and broccoli rabe pasta'),
  c('four-cheese-pasta-bake', 'Four Cheese Pasta Bake', 'Italian', 'Dinner', 'Easy', 10, 25, 6, 0, 0, [], ['new'], 'four cheese pasta bake'),
  c('chicken-carbonara', 'Chicken Carbonara', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'chicken carbonara'),
  c('creamy-pesto-gnocchi', 'Creamy Pesto Gnocchi', 'Italian', 'Quick Meals', 'Easy', 5, 12, 4, 0, 0, ['Gluten-Free'], ['new'], 'creamy pesto gnocchi'),
  c('tahini-chicken', 'Tahini Chicken', 'Middle Eastern', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'tahini chicken'),
  c('zaatar-chicken', 'Za\'atar Chicken', 'Middle Eastern', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'za\'atar chicken'),
  c('moroccan-meatballs', 'Moroccan Meatballs', 'Moroccan', 'Dinner', 'Medium', 20, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'moroccan meatballs'),
  c('moroccan-chickpea-stew', 'Moroccan Chickpea Stew', 'Moroccan', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'moroccan chickpea stew'),
  c('chermoula-fish', 'Chermoula Fish', 'Moroccan', 'Dinner', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'chermoula fish'),
  c('lebanese-lentil-soup', 'Lebanese Lentil Soup', 'Middle Eastern', 'Lunch', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'lebanese lentil soup'),
  c('persian-chicken', 'Persian Chicken', 'Persian', 'Dinner', 'Medium', 15, 50, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'persian chicken'),
  c('persian-meatballs', 'Persian Meatballs', 'Persian', 'Dinner', 'Medium', 20, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'persian meatballs'),
  c('turkish-meatballs', 'Turkish Meatballs', 'Turkish', 'Dinner', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'turkish meatballs'),
  c('greek-lamb-stew', 'Greek Lamb Stew', 'Greek', 'Dinner', 'Medium', 20, 120, 6, 0, 0, ['Gluten-Free'], ['new'], 'greek lamb stew'),
  c('italian-sausage-soup', 'Italian Sausage Soup', 'Italian', 'Lunch', 'Easy', 10, 30, 6, 0, 0, [], ['new'], 'italian sausage soup'),
  c('tuscan-white-bean-salad', 'Tuscan White Bean Salad', 'Italian', 'Lunch', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'tuscan white bean salad'),
  c('spanish-garlic-soup', 'Spanish Garlic Soup', 'Spanish', 'Lunch', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'spanish garlic soup'),
  c('french-onion-chicken', 'French Onion Chicken', 'French', 'Dinner', 'Medium', 15, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'french onion chicken'),
  c('french-lentils', 'French Lentils', 'French', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'french lentils'),
  c('german-meatballs', 'German Meatballs', 'German', 'Dinner', 'Medium', 20, 25, 4, 0, 0, [], ['new'], 'german meatballs'),
  c('german-red-cabbage', 'German Red Cabbage', 'German', 'Dinner', 'Easy', 15, 60, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'german red cabbage'),
  c('hamburger-helper-style-pasta', 'Hamburger Helper Style Pasta', 'American', 'Quick Meals', 'Easy', 5, 20, 4, 0, 0, [], ['new'], 'hamburger helper style pasta'),
  c('beef-and-mushroom-stroganoff-bake', 'Beef and Mushroom Stroganoff Bake', 'Russian', 'Dinner', 'Easy', 15, 35, 4, 0, 0, [], ['new'], 'beef and mushroom stroganoff bake'),
  c('chicken-with-mushroom-sauce', 'Chicken with Mushroom Sauce', 'French', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'chicken with mushroom sauce'),
  c('chicken-thighs-with-potatoes', 'Chicken Thighs with Potatoes', 'British', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'chicken thighs with potatoes'),
  c('brown-sugar-glazed-ham-steaks', 'Brown Sugar Glazed Ham Steaks', 'American', 'Quick Meals', 'Easy', 5, 12, 4, 0, 0, [], ['new'], 'brown sugar glazed ham steaks'),
  c('penne-arrabbiata-bake', 'Penne Arrabbiata Bake', 'Italian', 'Dinner', 'Easy', 10, 30, 6, 0, 0, [], ['new'], 'penne arrabbiata bake')
];
