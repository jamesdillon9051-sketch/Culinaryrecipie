'use strict';

/**
 * Weekly Delight — recipe catalog, volume forty-three.
 * One hundred mains and sides: chicken, beef, pork, lamb, fish and seafood dinners, pies, pasta bakes, sandwiches, wings, potatoes, gravies and sauces.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: American 32, British 20, Italian 13, Chinese 5, French 4, Filipino 3, Jewish 3, Mexican 3, Middle Eastern 3, Greek 2, Indian 2, Japanese 2, Spanish 2, Malaysian 1, New Zealand 1, Polish 1, Portuguese 1, Russian 1, Thai 1.
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
  c('prawn-noodle-soup', 'Prawn Noodle Soup', 'Chinese', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'prawn noodle soup'),
  c('almond-crusted-chicken', 'Almond Crusted Chicken', 'American', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'almond crusted chicken'),
  c('bacon-wrapped-chicken', 'Bacon Wrapped Chicken', 'American', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'bacon wrapped chicken'),
  c('baked-salmon-with-asparagus', 'Baked Salmon with Asparagus', 'American', 'Quick Meals', 'Easy', 5, 15, 2, 0, 0, ['Gluten-Free'], ['new'], 'baked salmon with asparagus'),
  c('beef-brisket-sandwich', 'Beef Brisket Sandwich', 'American', 'Lunch', 'Medium', 20, 180, 8, 0, 0, [], ['new'], 'beef brisket sandwich'),
  c('beef-noodle-stir-fry', 'Beef Noodle Stir Fry', 'Chinese', 'Quick Meals', 'Easy', 15, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'beef noodle stir fry'),
  c('beef-ragu', 'Beef Ragu', 'Italian', 'Dinner', 'Medium', 20, 150, 6, 0, 0, [], ['new'], 'beef ragu'),
  c('beef-shawarma', 'Beef Shawarma', 'Middle Eastern', 'Dinner', 'Medium', 20, 15, 4, 0, 0, [], ['new'], 'beef shawarma'),
  c('beef-and-mushroom-pie', 'Beef and Mushroom Pie', 'British', 'Dinner', 'Medium', 40, 130, 6, 0, 0, [], ['new'], 'beef and mushroom pie'),
  c('beef-and-onion-pie', 'Beef and Onion Pie', 'British', 'Dinner', 'Medium', 30, 120, 6, 0, 0, [], ['new'], 'beef and onion pie'),
  c('blackened-catfish', 'Blackened Catfish', 'American', 'Dinner', 'Easy', 10, 8, 4, 0, 0, ['Gluten-Free'], ['new'], 'blackened catfish'),
  c('boneless-wings', 'Boneless Wings', 'American', 'Appetizers', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'boneless wings'),
  c('boulangere-potatoes', 'Boulangere Potatoes', 'French', 'Dinner', 'Medium', 20, 60, 6, 0, 0, [], ['new'], 'boulangere potatoes'),
  c('brisket-tacos', 'Brisket Tacos', 'Mexican', 'Dinner', 'Medium', 20, 180, 8, 0, 0, ['Dairy-Free'], ['new'], 'brisket tacos'),
  c('broccoli-pasta-bake', 'Broccoli Pasta Bake', 'British', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'broccoli pasta bake'),
  c('butter-chicken-pie', 'Butter Chicken Pie', 'New Zealand', 'Dinner', 'Medium', 35, 35, 6, 0, 0, [], ['new'], 'butter chicken pie'),
  c('cheese-tortellini-with-pesto', 'Cheese Tortellini with Pesto', 'Italian', 'Quick Meals', 'Easy', 5, 8, 4, 0, 0, [], ['new'], 'cheese tortellini with pesto'),
  c('cheeseburger-pie', 'Cheeseburger Pie', 'American', 'Dinner', 'Easy', 20, 30, 6, 0, 0, [], ['new'], 'cheeseburger pie'),
  c('cheesy-chicken-bake', 'Cheesy Chicken Bake', 'American', 'Dinner', 'Easy', 15, 30, 4, 0, 0, [], ['new'], 'cheesy chicken bake'),
  c('cheesy-pasta-bake', 'Cheesy Pasta Bake', 'British', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'cheesy pasta bake'),
  c('chicken-roulade', 'Chicken Roulade', 'Italian', 'Dinner', 'Medium', 25, 35, 4, 0, 0, ['Gluten-Free'], ['new'], 'chicken roulade'),
  c('chicken-sausage-pasta', 'Chicken Sausage Pasta', 'Italian', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'chicken sausage pasta'),
  c('chicken-stroganoff', 'Chicken Stroganoff', 'Russian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'chicken stroganoff'),
  c('chicken-vindaloo', 'Chicken Vindaloo', 'Indian', 'Dinner', 'Medium', 20, 40, 4, 0, 0, ['Dairy-Free'], ['new'], 'chicken vindaloo'),
  c('chinese-chicken-and-broccoli', 'Chinese Chicken and Broccoli', 'Chinese', 'Quick Meals', 'Easy', 10, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'chinese chicken and broccoli'),
  c('cod-in-parsley-sauce', 'Cod in Parsley Sauce', 'British', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'cod in parsley sauce'),
  c('corned-beef-with-parsley-sauce', 'Corned Beef with Parsley Sauce', 'British', 'Dinner', 'Medium', 10, 120, 6, 0, 0, [], ['new'], 'corned beef with parsley sauce'),
  c('cornflake-chicken', 'Cornflake Chicken', 'American', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'cornflake chicken'),
  c('creamed-leeks', 'Creamed Leeks', 'British', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'creamed leeks'),
  c('duck-fat-roast-potatoes', 'Duck Fat Roast Potatoes', 'British', 'Dinner', 'Medium', 15, 60, 6, 0, 0, [], ['new'], 'duck fat roast potatoes'),
  c('egg-noodles-with-butter', 'Egg Noodles with Butter', 'American', 'Quick Meals', 'Easy', 3, 7, 2, 0, 0, ['Vegetarian'], ['new'], 'egg noodles with butter'),
  c('filipino-spaghetti', 'Filipino Spaghetti', 'Filipino', 'Dinner', 'Easy', 15, 25, 6, 0, 0, [], ['new'], 'filipino spaghetti'),
  c('focaccia-pizza', 'Focaccia Pizza', 'Italian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'focaccia pizza'),
  c('garlic-butter-pasta', 'Garlic Butter Pasta', 'Italian', 'Quick Meals', 'Easy', 5, 12, 4, 0, 0, [], ['new'], 'garlic butter pasta'),
  c('gnocchi-bake', 'Gnocchi Bake', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'gnocchi bake'),
  c('greek-lemon-chicken', 'Greek Lemon Chicken', 'Greek', 'Dinner', 'Easy', 15, 50, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'greek lemon chicken'),
  c('harissa-roasted-carrots', 'Harissa Roasted Carrots', 'Middle Eastern', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'harissa roasted carrots'),
  c('healthy-chicken-stir-fry', 'Healthy Chicken Stir Fry', 'Chinese', 'Healthy', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'healthy chicken stir fry'),
  c('ham-and-cheese-toastie', 'Ham and Cheese Toastie', 'British', 'Quick Meals', 'Easy', 5, 8, 2, 0, 0, [], ['new'], 'ham and cheese toastie'),
  c('honey-soy-salmon', 'Honey Soy Salmon', 'American', 'Quick Meals', 'Easy', 5, 12, 2, 0, 0, ['Dairy-Free'], ['new'], 'honey soy salmon'),
  c('honey-sriracha-wings', 'Honey Sriracha Wings', 'American', 'Appetizers', 'Easy', 10, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'honey sriracha wings'),
  c('jacket-potato-with-cheese', 'Jacket Potato with Cheese', 'British', 'Lunch', 'Easy', 5, 70, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'jacket potato with cheese'),
  c('lamb-saag', 'Lamb Saag', 'Indian', 'Dinner', 'Medium', 20, 50, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'lamb saag'),
  c('lemon-garlic-roast-chicken-thighs', 'Lemon Garlic Roast Chicken Thighs', 'American', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'lemon garlic roast chicken thighs'),
  c('lemon-herb-cod', 'Lemon Herb Cod', 'American', 'Quick Meals', 'Easy', 5, 15, 2, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'lemon herb cod'),
  c('linguine-with-clams', 'Linguine with Clams', 'Italian', 'Dinner', 'Medium', 15, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'linguine with clams'),
  c('minted-peas', 'Minted Peas', 'British', 'Dinner', 'Easy', 3, 7, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'minted peas'),
  c('mornay-sauce', 'Mornay Sauce', 'French', 'Dinner', 'Medium', 5, 12, 6, 0, 0, [], ['new'], 'mornay sauce'),
  c('mussels-with-chorizo', 'Mussels with Chorizo', 'Spanish', 'Dinner', 'Easy', 10, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'mussels with chorizo'),
  c('one-pot-beef-and-rice', 'One Pot Beef and Rice', 'American', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'one pot beef and rice'),
  c('oven-fried-chicken', 'Oven Fried Chicken', 'American', 'Dinner', 'Easy', 15, 45, 4, 0, 0, [], ['new'], 'oven fried chicken'),
  c('parmesan-crusted-cod', 'Parmesan Crusted Cod', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'parmesan crusted cod'),
  c('parmesan-roasted-carrots', 'Parmesan Roasted Carrots', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'parmesan roasted carrots'),
  c('pecan-crusted-salmon', 'Pecan Crusted Salmon', 'American', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'pecan crusted salmon'),
  c('perogies-with-onions', 'Perogies with Onions', 'Polish', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'perogies with onions'),
  c('philly-chicken-sandwich', 'Philly Chicken Sandwich', 'American', 'Lunch', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'philly chicken sandwich'),
  c('piri-piri-prawns', 'Piri Piri Prawns', 'Portuguese', 'Appetizers', 'Easy', 10, 6, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'piri piri prawns'),
  c('ploughmans-sandwich', 'Ploughmans Sandwich', 'British', 'Lunch', 'Easy', 10, 0, 2, 0, 0, ['Vegetarian'], ['new'], 'ploughmans sandwich'),
  c('po-boy-sandwich', 'Po Boy Sandwich', 'American', 'Lunch', 'Medium', 20, 10, 4, 0, 0, [], ['new'], 'po boy sandwich'),
  c('pork-adobo', 'Pork Adobo', 'Filipino', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'pork adobo'),
  c('pork-ribs-in-the-oven', 'Pork Ribs in the Oven', 'American', 'Dinner', 'Easy', 10, 150, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pork ribs in the oven'),
  c('pork-souvlaki', 'Pork Souvlaki', 'Greek', 'Dinner', 'Easy', 20, 12, 4, 0, 0, [], ['new'], 'pork souvlaki'),
  c('pork-and-apple-casserole', 'Pork and Apple Casserole', 'British', 'Dinner', 'Easy', 20, 90, 6, 0, 0, ['Dairy-Free'], ['new'], 'pork and apple casserole'),
  c('potato-kugel', 'Potato Kugel', 'Jewish', 'Dinner', 'Medium', 20, 75, 8, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'potato kugel'),
  c('noodle-kugel', 'Noodle Kugel', 'Jewish', 'Dinner', 'Easy', 15, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'noodle kugel'),
  c('prawn-laksa', 'Prawn Laksa', 'Malaysian', 'Dinner', 'Medium', 15, 20, 4, 0, 0, [], ['new'], 'prawn laksa'),
  c('prawn-pasta', 'Prawn Pasta', 'Italian', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'prawn pasta'),
  c('pumpkin-and-sage-pasta', 'Pumpkin and Sage Pasta', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'pumpkin and sage pasta'),
  c('ranch-chicken-wraps', 'Ranch Chicken Wraps', 'American', 'Lunch', 'Easy', 15, 10, 4, 0, 0, [], ['new'], 'ranch chicken wraps'),
  c('red-wine-gravy', 'Red Wine Gravy', 'British', 'Dinner', 'Easy', 5, 15, 6, 0, 0, [], ['new'], 'red wine gravy'),
  c('rice-pilaf', 'Rice Pilaf', 'Middle Eastern', 'Dinner', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'rice pilaf'),
  c('romesco-sauce', 'Romesco Sauce', 'Spanish', 'Dinner', 'Medium', 15, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'romesco sauce'),
  c('salmon-fillet-with-dill-sauce', 'Salmon Fillet with Dill Sauce', 'British', 'Dinner', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'salmon fillet with dill sauce'),
  c('sausage-and-cheese-pasta', 'Sausage and Cheese Pasta', 'American', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, [], ['new'], 'sausage and cheese pasta'),
  c('scallops-with-pea-puree', 'Scallops with Pea Puree', 'British', 'Dinner', 'Medium', 15, 12, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'scallops with pea puree'),
  c('seafood-stew', 'Seafood Stew', 'Italian', 'Dinner', 'Medium', 20, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'seafood stew'),
  c('slow-cooked-lamb-shoulder', 'Slow Cooked Lamb Shoulder', 'British', 'Dinner', 'Easy', 15, 240, 6, 0, 0, ['Dairy-Free'], ['new'], 'slow cooked lamb shoulder'),
  c('steak-fried-rice', 'Steak Fried Rice', 'Chinese', 'Quick Meals', 'Easy', 10, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'steak fried rice'),
  c('steak-tacos', 'Steak Tacos', 'Mexican', 'Dinner', 'Easy', 20, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'steak tacos'),
  c('sticky-chicken-wings', 'Sticky Chicken Wings', 'American', 'Appetizers', 'Easy', 10, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'sticky chicken wings'),
  c('sun-dried-tomato-pesto', 'Sun Dried Tomato Pesto', 'Italian', 'Dinner', 'Easy', 10, 0, 6, 0, 0, [], ['new'], 'sun dried tomato pesto'),
  c('sriracha-mayo', 'Sriracha Mayo', 'American', 'Appetizers', 'Easy', 5, 0, 8, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'sriracha mayo'),
  c('chipotle-mayo', 'Chipotle Mayo', 'Mexican', 'Appetizers', 'Easy', 5, 0, 8, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'chipotle mayo'),
  c('lemon-vinaigrette', 'Lemon Vinaigrette', 'French', 'Healthy', 'Easy', 5, 0, 6, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'lemon vinaigrette'),
  c('sweet-potato-mash', 'Sweet Potato Mash', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'sweet potato mash'),
  c('teriyaki-meatballs', 'Teriyaki Meatballs', 'Japanese', 'Dinner', 'Easy', 20, 20, 4, 0, 0, [], ['new'], 'teriyaki meatballs'),
  c('texas-chili', 'Texas Chili', 'American', 'Dinner', 'Medium', 20, 120, 8, 0, 0, ['Dairy-Free'], ['new'], 'texas chili'),
  c('thai-peanut-noodles', 'Thai Peanut Noodles', 'Thai', 'Quick Meals', 'Easy', 10, 8, 4, 0, 0, ['Vegetarian'], ['new'], 'thai peanut noodles'),
  c('trout-with-almonds', 'Trout with Almonds', 'French', 'Dinner', 'Easy', 10, 15, 2, 0, 0, ['Vegetarian'], ['new'], 'trout with almonds'),
  c('tuna-fishcakes', 'Tuna Fishcakes', 'British', 'Dinner', 'Easy', 20, 12, 4, 0, 0, [], ['new'], 'tuna fishcakes'),
  c('turkey-pot-pie', 'Turkey Pot Pie', 'American', 'Dinner', 'Medium', 30, 50, 6, 0, 0, [], ['new'], 'turkey pot pie'),
  c('turkey-club-wrap', 'Turkey Club Wrap', 'American', 'Lunch', 'Easy', 10, 0, 2, 0, 0, ['Dairy-Free'], ['new'], 'turkey club wrap'),
  c('veggie-pasta-bake', 'Veggie Pasta Bake', 'British', 'Dinner', 'Easy', 15, 30, 4, 0, 0, [], ['new'], 'veggie pasta bake'),
  c('soy-sauce-eggs', 'Soy Sauce Eggs', 'Japanese', 'Appetizers', 'Easy', 5, 8, 6, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'soy sauce eggs'),
  c('arroz-caldo', 'Arroz Caldo', 'Filipino', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Dairy-Free'], ['new'], 'arroz caldo'),
  c('black-eyed-peas-with-ham', 'Black Eyed Peas with Ham', 'American', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'black eyed peas with ham'),
  c('meatball-pasta-bake', 'Meatball Pasta Bake', 'Italian', 'Dinner', 'Easy', 20, 35, 6, 0, 0, [], ['new'], 'meatball pasta bake'),
  c('lemon-pepper-salmon', 'Lemon Pepper Salmon', 'American', 'Quick Meals', 'Easy', 5, 12, 2, 0, 0, ['Gluten-Free'], ['new'], 'lemon pepper salmon'),
  c('brisket-with-onions', 'Brisket with Onions', 'Jewish', 'Dinner', 'Medium', 20, 210, 8, 0, 0, ['Dairy-Free'], ['new'], 'brisket with onions'),
  c('cumberland-sausage-ring', 'Cumberland Sausage Ring', 'British', 'Dinner', 'Easy', 15, 35, 6, 0, 0, [], ['new'], 'cumberland sausage ring')
];
