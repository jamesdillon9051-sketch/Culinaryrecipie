'use strict';

/**
 * Weekly Delight — recipe catalog, volume fifty-four.
 * One hundred more of the dishes people in the USA, Canada, Australia, the UK and New Zealand look for by name.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: American 44, Italian 18, British 10, Indian 5, Japanese 5, Mexican 4, Greek 3, Chinese 2, French 2, Australian 1, Caribbean 1, Irish 1, Jamaican 1, Polish 1, Russian 1, Spanish 1.
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
  c('guinness-beef-stew', 'Guinness Beef Stew', 'Irish', 'Dinner', 'Easy', 20, 150, 6, 0, 0, ['Dairy-Free'], ['new'], 'guinness beef stew'),
  c('haddock-and-chips', 'Haddock and Chips', 'British', 'Dinner', 'Medium', 25, 25, 4, 0, 0, [], ['new'], 'haddock and chips'),
  c('honey-lemon-chicken', 'Honey Lemon Chicken', 'American', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'honey lemon chicken'),
  c('jerk-chicken-wings', 'Jerk Chicken Wings', 'Jamaican', 'Appetizers', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'jerk chicken wings'),
  c('leg-of-lamb', 'Leg of Lamb', 'British', 'Dinner', 'Medium', 20, 105, 8, 0, 0, ['Dairy-Free'], ['new'], 'leg of lamb'),
  c('lemon-roast-chicken', 'Lemon Roast Chicken', 'British', 'Dinner', 'Easy', 15, 90, 6, 0, 0, [], ['new'], 'lemon roast chicken'),
  c('one-pot-beans-and-rice', 'One Pot Beans and Rice', 'Caribbean', 'Dinner', 'Easy', 10, 35, 4, 0, 0, [], ['new'], 'one pot beans and rice'),
  c('one-pot-black-bean-soup', 'One Pot Black Bean Soup', 'Mexican', 'Dinner', 'Easy', 10, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'one pot black bean soup'),
  c('one-pot-breakfast', 'One Pot Breakfast', 'American', 'Breakfast', 'Easy', 10, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'one pot breakfast'),
  c('one-pot-cabbage-roll-soup', 'One Pot Cabbage Roll Soup', 'Polish', 'Dinner', 'Easy', 15, 40, 6, 0, 0, ['Dairy-Free'], ['new'], 'one pot cabbage roll soup'),
  c('one-pot-fried-rice', 'One Pot Fried Rice', 'Chinese', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'one pot fried rice'),
  c('one-pot-garlic-parmesan-chicken', 'One Pot Garlic Parmesan Chicken', 'Italian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, [], ['new'], 'one pot garlic parmesan chicken'),
  c('one-pot-gnocchi', 'One Pot Gnocchi', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'one pot gnocchi'),
  c('one-pot-lentil-curry', 'One Pot Lentil Curry', 'Indian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'one pot lentil curry'),
  c('one-pot-paella', 'One Pot Paella', 'Spanish', 'Dinner', 'Medium', 15, 35, 4, 0, 0, ['Dairy-Free'], ['new'], 'one pot paella'),
  c('one-pot-quinoa-chili', 'One Pot Quinoa Chili', 'American', 'Healthy', 'Easy', 10, 30, 6, 0, 0, ['Dairy-Free'], ['new'], 'one pot quinoa chili'),
  c('one-pot-ramen', 'One Pot Ramen', 'Japanese', 'Quick Meals', 'Easy', 5, 15, 2, 0, 0, ['Dairy-Free'], ['new'], 'one pot ramen'),
  c('one-pot-ratatouille', 'One Pot Ratatouille', 'French', 'Dinner', 'Easy', 15, 40, 4, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free'], ['new'], 'one pot ratatouille'),
  c('orzo-with-feta', 'Orzo with Feta', 'Greek', 'Lunch', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'orzo with feta'),
  c('pan-fried-pork-chops', 'Pan Fried Pork Chops', 'American', 'Dinner', 'Easy', 5, 12, 4, 0, 0, ['Gluten-Free'], ['new'], 'pan fried pork chops'),
  c('pea-salad', 'Pea Salad', 'American', 'Lunch', 'Easy', 15, 0, 6, 0, 0, [], ['new'], 'pea salad'),
  c('pork-katsu', 'Pork Katsu', 'Japanese', 'Dinner', 'Medium', 20, 10, 4, 0, 0, [], ['new'], 'pork katsu'),
  c('bbq-chicken-sandwich', 'BBQ Chicken Sandwich', 'American', 'Lunch', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'bbq chicken sandwich'),
  c('rack-of-lamb', 'Rack of Lamb', 'British', 'Dinner', 'Medium', 15, 25, 4, 0, 0, [], ['new'], 'rack of lamb'),
  c('rainbow-trout', 'Rainbow Trout', 'American', 'Dinner', 'Easy', 10, 10, 2, 0, 0, ['Gluten-Free'], ['new'], 'rainbow trout'),
  c('salmon-salad', 'Salmon Salad', 'American', 'Lunch', 'Easy', 10, 12, 2, 0, 0, ['Dairy-Free'], ['new'], 'salmon salad'),
  c('sausage-egg-bake', 'Sausage Egg Bake', 'American', 'Breakfast', 'Easy', 15, 35, 6, 0, 0, [], ['new'], 'sausage egg bake'),
  c('sausage-stuffing', 'Sausage Stuffing', 'American', 'Holiday Specials', 'Easy', 20, 70, 8, 0, 0, [], ['new'], 'sausage stuffing'),
  c('sausage-and-mash', 'Sausage and Mash', 'British', 'Dinner', 'Easy', 15, 45, 4, 0, 0, [], ['new'], 'sausage and mash'),
  c('seafood-linguine', 'Seafood Linguine', 'Italian', 'Dinner', 'Medium', 15, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'seafood linguine'),
  c('seafood-pasta', 'Seafood Pasta', 'Italian', 'Dinner', 'Medium', 15, 20, 4, 0, 0, [], ['new'], 'seafood pasta'),
  c('sheet-pan-breakfast-hash', 'Sheet Pan Breakfast Hash', 'American', 'Breakfast', 'Easy', 15, 30, 4, 0, 0, [], ['new'], 'sheet pan breakfast hash'),
  c('sheet-pan-chicken-parmesan', 'Sheet Pan Chicken Parmesan', 'Italian', 'Dinner', 'Easy', 20, 25, 4, 0, 0, [], ['new'], 'sheet pan chicken parmesan'),
  c('sheet-pan-cod-and-vegetables', 'Sheet Pan Cod and Vegetables', 'American', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'sheet pan cod and vegetables'),
  c('sheet-pan-fish-tacos', 'Sheet Pan Fish Tacos', 'Mexican', 'Dinner', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'sheet pan fish tacos'),
  c('sheet-pan-honey-mustard-chicken', 'Sheet Pan Honey Mustard Chicken', 'American', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Dairy-Free'], ['new'], 'sheet pan honey mustard chicken'),
  c('sheet-pan-lemon-chicken', 'Sheet Pan Lemon Chicken', 'American', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'sheet pan lemon chicken'),
  c('sheet-pan-pork-chops', 'Sheet Pan Pork Chops', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'sheet pan pork chops'),
  c('sheet-pan-quesadillas', 'Sheet Pan Quesadillas', 'Mexican', 'Dinner', 'Easy', 10, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'sheet pan quesadillas'),
  c('sheet-pan-roast-chicken', 'Sheet Pan Roast Chicken', 'British', 'Dinner', 'Easy', 15, 45, 6, 0, 0, ['Gluten-Free'], ['new'], 'sheet pan roast chicken'),
  c('sheet-pan-steak-and-vegetables', 'Sheet Pan Steak and Vegetables', 'American', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'sheet pan steak and vegetables'),
  c('sheet-pan-teriyaki-chicken', 'Sheet Pan Teriyaki Chicken', 'Japanese', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'sheet pan teriyaki chicken'),
  c('shrimp-alfredo', 'Shrimp Alfredo', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'shrimp alfredo'),
  c('shrimp-fettuccine', 'Shrimp Fettuccine', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'shrimp fettuccine'),
  c('slow-cooker-baked-beans', 'Slow Cooker Baked Beans', 'American', 'Dinner', 'Easy', 15, 480, 10, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker baked beans'),
  c('slow-cooker-beef-brisket', 'Slow Cooker Beef Brisket', 'American', 'Dinner', 'Easy', 15, 480, 8, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker beef brisket'),
  c('slow-cooker-beef-chili-mac', 'Slow Cooker Beef Chili Mac', 'American', 'Dinner', 'Easy', 15, 300, 6, 0, 0, [], ['new'], 'slow cooker beef chili mac'),
  c('slow-cooker-beef-stroganoff', 'Slow Cooker Beef Stroganoff', 'Russian', 'Dinner', 'Easy', 20, 360, 6, 0, 0, [], ['new'], 'slow cooker beef stroganoff'),
  c('slow-cooker-butter-chicken', 'Slow Cooker Butter Chicken', 'Indian', 'Dinner', 'Easy', 15, 300, 6, 0, 0, ['Gluten-Free'], ['new'], 'slow cooker butter chicken'),
  c('slow-cooker-chicken-cacciatore', 'Slow Cooker Chicken Cacciatore', 'Italian', 'Dinner', 'Easy', 15, 300, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'slow cooker chicken cacciatore'),
  c('slow-cooker-chicken-and-dumplings', 'Slow Cooker Chicken and Dumplings', 'American', 'Dinner', 'Medium', 20, 300, 6, 0, 0, [], ['new'], 'slow cooker chicken and dumplings'),
  c('slow-cooker-cottage-pie', 'Slow Cooker Cottage Pie', 'British', 'Dinner', 'Easy', 25, 300, 6, 0, 0, [], ['new'], 'slow cooker cottage pie'),
  c('slow-cooker-dal', 'Slow Cooker Dal', 'Indian', 'Dinner', 'Easy', 10, 360, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'slow cooker dal'),
  c('slow-cooker-egg-casserole', 'Slow Cooker Egg Casserole', 'American', 'Breakfast', 'Easy', 20, 240, 8, 0, 0, [], ['new'], 'slow cooker egg casserole'),
  c('slow-cooker-french-onion-soup', 'Slow Cooker French Onion Soup', 'French', 'Dinner', 'Easy', 20, 480, 6, 0, 0, [], ['new'], 'slow cooker french onion soup'),
  c('slow-cooker-hash-brown-casserole', 'Slow Cooker Hash Brown Casserole', 'American', 'Dinner', 'Easy', 10, 250, 8, 0, 0, [], ['new'], 'slow cooker hash brown casserole'),
  c('slow-cooker-jambalaya', 'Slow Cooker Jambalaya', 'American', 'Dinner', 'Medium', 20, 240, 6, 0, 0, [], ['new'], 'slow cooker jambalaya'),
  c('slow-cooker-lamb-curry', 'Slow Cooker Lamb Curry', 'Indian', 'Dinner', 'Easy', 20, 360, 6, 0, 0, ['Gluten-Free'], ['new'], 'slow cooker lamb curry'),
  c('slow-cooker-lasagna', 'Slow Cooker Lasagna', 'Italian', 'Dinner', 'Medium', 30, 240, 8, 0, 0, [], ['new'], 'slow cooker lasagna'),
  c('slow-cooker-pasta', 'Slow Cooker Pasta', 'Italian', 'Dinner', 'Easy', 10, 180, 6, 0, 0, [], ['new'], 'slow cooker pasta'),
  c('slow-cooker-pork-carnitas', 'Slow Cooker Pork Carnitas', 'Mexican', 'Dinner', 'Easy', 15, 480, 8, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker pork carnitas'),
  c('slow-cooker-pulled-pork', 'Slow Cooker Pulled Pork', 'American', 'Dinner', 'Easy', 15, 480, 10, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker pulled pork'),
  c('slow-cooker-risotto', 'Slow Cooker Risotto', 'Italian', 'Dinner', 'Easy', 15, 150, 4, 0, 0, [], ['new'], 'slow cooker risotto'),
  c('slow-cooker-salmon', 'Slow Cooker Salmon', 'American', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker salmon'),
  c('slow-cooker-short-ribs', 'Slow Cooker Short Ribs', 'American', 'Dinner', 'Easy', 20, 480, 4, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker short ribs'),
  c('slow-cooker-stuffing', 'Slow Cooker Stuffing', 'American', 'Holiday Specials', 'Easy', 20, 240, 10, 0, 0, [], ['new'], 'slow cooker stuffing'),
  c('slow-cooker-turkey-breast', 'Slow Cooker Turkey Breast', 'American', 'Holiday Specials', 'Easy', 15, 300, 8, 0, 0, [], ['new'], 'slow cooker turkey breast'),
  c('slow-cooker-whole-chicken', 'Slow Cooker Whole Chicken', 'American', 'Dinner', 'Easy', 10, 300, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'slow cooker whole chicken'),
  c('smoked-salmon-dip', 'Smoked Salmon Dip', 'American', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, [], ['new'], 'smoked salmon dip'),
  c('southern-mac-and-cheese', 'Southern Mac and Cheese', 'American', 'Dinner', 'Medium', 20, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'southern mac and cheese'),
  c('spaghetti-pomodoro', 'Spaghetti Pomodoro', 'Italian', 'Quick Meals', 'Easy', 5, 20, 4, 0, 0, [], ['new'], 'spaghetti pomodoro'),
  c('spaghetti-alla-norma', 'Spaghetti alla Norma', 'Italian', 'Dinner', 'Medium', 20, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'spaghetti alla norma'),
  c('spare-ribs', 'Spare Ribs', 'American', 'Dinner', 'Medium', 15, 150, 4, 0, 0, ['Dairy-Free'], ['new'], 'spare ribs'),
  c('spatchcock-chicken', 'Spatchcock Chicken', 'British', 'Dinner', 'Medium', 20, 50, 4, 0, 0, ['Gluten-Free'], ['new'], 'spatchcock chicken'),
  c('stovetop-mac-and-cheese', 'Stovetop Mac and Cheese', 'American', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'stovetop mac and cheese'),
  c('stuffed-grape-leaves', 'Stuffed Grape Leaves', 'Greek', 'Appetizers', 'Hard', 45, 65, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'stuffed grape leaves'),
  c('stuffed-jalapenos', 'Stuffed Jalapenos', 'American', 'Appetizers', 'Easy', 20, 20, 6, 0, 0, [], ['new'], 'stuffed jalapenos'),
  c('stuffed-zucchini-boats', 'Stuffed Zucchini Boats', 'Italian', 'Dinner', 'Easy', 20, 30, 4, 0, 0, [], ['new'], 'stuffed zucchini boats'),
  c('sweet-corn-soup', 'Sweet Corn Soup', 'Chinese', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'sweet corn soup'),
  c('turkey-casserole', 'Turkey Casserole', 'American', 'Dinner', 'Easy', 15, 35, 6, 0, 0, [], ['new'], 'turkey casserole'),
  c('turkey-tetrazzini', 'Turkey Tetrazzini', 'American', 'Dinner', 'Medium', 20, 30, 6, 0, 0, [], ['new'], 'turkey tetrazzini'),
  c('udon-noodles', 'Udon Noodles', 'Japanese', 'Quick Meals', 'Easy', 10, 15, 2, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'udon noodles'),
  c('veal-parmesan', 'Veal Parmesan', 'Italian', 'Dinner', 'Medium', 25, 20, 4, 0, 0, [], ['new'], 'veal parmesan'),
  c('white-bean-chili', 'White Bean Chili', 'American', 'Dinner', 'Easy', 15, 30, 6, 0, 0, ['Vegetarian'], ['new'], 'white bean chili'),
  c('white-lasagna', 'White Lasagna', 'Italian', 'Dinner', 'Medium', 30, 45, 8, 0, 0, [], ['new'], 'white lasagna'),
  c('orzo-soup', 'Orzo Soup', 'Greek', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'orzo soup'),
  c('chicken-and-ham-pie', 'Chicken and Ham Pie', 'British', 'Dinner', 'Medium', 30, 70, 6, 0, 0, [], ['new'], 'chicken and ham pie'),
  c('eggplant-rollatini', 'Eggplant Rollatini', 'Italian', 'Dinner', 'Medium', 30, 30, 4, 0, 0, ['Gluten-Free'], ['new'], 'eggplant rollatini'),
  c('pan-fried-barramundi', 'Pan Fried Barramundi', 'Australian', 'Dinner', 'Easy', 5, 8, 2, 0, 0, ['Gluten-Free'], ['new'], 'pan fried barramundi'),
  c('sushi-rolls', 'Sushi Rolls', 'Japanese', 'Appetizers', 'Medium', 40, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'sushi rolls'),
  c('5-ingredient-chicken-casserole', '5 Ingredient Chicken Casserole', 'American', 'Dinner', 'Easy', 10, 40, 4, 0, 0, [], ['new'], '5 ingredient chicken casserole'),
  c('5-ingredient-chili', '5 Ingredient Chili', 'American', 'Dinner', 'Easy', 5, 35, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], '5 ingredient chili'),
  c('5-ingredient-lasagna', '5 Ingredient Lasagna', 'Italian', 'Dinner', 'Easy', 15, 40, 6, 0, 0, [], ['new'], '5 ingredient lasagna'),
  c('5-ingredient-soup', '5 Ingredient Soup', 'American', 'Quick Meals', 'Easy', 5, 20, 4, 0, 0, ['Vegetarian'], ['new'], '5 ingredient soup'),
  c('beef-meal-prep-bowls', 'Beef Meal Prep Bowls', 'American', 'Healthy', 'Easy', 15, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'beef meal prep bowls'),
  c('chicken-meal-prep-bowls', 'Chicken Meal Prep Bowls', 'American', 'Healthy', 'Easy', 15, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'chicken meal prep bowls'),
  c('freezer-chili', 'Freezer Chili', 'American', 'Dinner', 'Easy', 15, 40, 8, 0, 0, ['Dairy-Free'], ['new'], 'freezer chili'),
  c('freezer-curry', 'Freezer Curry', 'Indian', 'Dinner', 'Easy', 15, 35, 6, 0, 0, ['Gluten-Free'], ['new'], 'freezer curry'),
  c('freezer-stew', 'Freezer Stew', 'British', 'Dinner', 'Easy', 20, 120, 6, 0, 0, ['Dairy-Free'], ['new'], 'freezer stew'),
  c('shrimp-meal-prep-bowls', 'Shrimp Meal Prep Bowls', 'American', 'Healthy', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'shrimp meal prep bowls')
];
