/**
 * Weekly Delight — recipe catalog, volume twenty-six.
 * Thirty-two dishes from a list of 252 of the most searched recipe names,
 * added only where the site had no recipe for them: Mexican and Latin American
 * dinners, American roasts and one-pan mains, quick fish and shrimp, a few
 * sides and muffins, and the smoothies and classic cocktails.
 *
 * Every name was tried against the 1,883 recipes already published, with
 * tools/dedupe-candidates.js. 182 were already recipes on the site, under the
 * same name or another, and 5 appear twice in the list. The other 65, 44 that
 * passed the word rules and 21 that shared a word with a published recipe,
 * were read by hand, and 30 were new. The remaining 35 were the same dish
 * under another name (carnitas is the slow-braised carnitas, cold brew is the
 * cold brew coffee, oatmeal is the porridge, tikka masala is the chicken tikka
 * masala) or a variant of a dish already here, such as a cut, a sauce or a
 * slow-cooker version, and they were left out. Two of the 182, chicken curry
 * and chocolate muffins, were read again, because the page that matched each
 * was a different dish (a butter chicken, a vanilla muffin with chips), and an
 * Indian chicken curry and double chocolate muffins were added.
 *
 * This file is generated from the verified list rather than typed out from it,
 * and `npm run check` fails if two recipes are the same dish.
 *
 * Spread: American 17, Mexican 7, International 4, Cuban 2, Chinese 1,
 * Indian 1.
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
  c('chilaquiles-rojos', 'Chilaquiles Rojos', 'Mexican', 'Breakfast', 'Medium', 15, 35, 4, 0, 0, ['Gluten-Free'], ['new'], 'Chilaquiles rojos in a wide skillet, crisp tortilla wedges coated in red guajillo salsa, topped with fried eggs, crema, queso fresco, red onion, avocado and coriander'),
  c('chicken-flautas', 'Chicken Flautas', 'Mexican', 'Dinner', 'Medium', 25, 20, 4, 0, 0, [], ['new'], 'Golden chicken flautas on a plate, long crisp rolled corn tortillas topped with shredded lettuce, crema, crumbled queso fresco and salsa verde, with guacamole on the side'),
  c('caldo-de-res', 'Caldo de Res', 'Mexican', 'Dinner', 'Easy', 25, 180, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'A deep bowl of caldo de res with bone-in beef shank, corn on the cob, carrots, potatoes, chayote and cabbage in a clear broth, with lime wedges, coriander and tortillas beside it'),
  c('beef-fajitas', 'Beef Fajitas', 'Mexican', 'Dinner', 'Easy', 15, 18, 4, 0, 0, [], ['new'], 'Sizzling beef fajitas in a cast iron pan with sliced skirt steak, charred peppers and onions, with warm flour tortillas, soured cream, guacamole and lime wedges on the side'),
  c('chimichangas', 'Chimichangas', 'Mexican', 'Dinner', 'Medium', 25, 35, 6, 0, 0, [], ['new'], 'Golden fried chimichangas on a plate, crisp flour tortilla parcels cut open to show seasoned beef, beans and melted cheese, with soured cream, guacamole and salsa'),
  c('pork-chile-verde', 'Pork Chile Verde', 'Mexican', 'Dinner', 'Medium', 25, 150, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'A bowl of pork chile verde, tender cubes of pork in a thick green tomatillo and poblano sauce, with coriander on top, warm tortillas and rice beside it'),
  c('pozole-verde', 'Pozole Verde', 'Mexican', 'Dinner', 'Medium', 25, 150, 8, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'A bowl of pozole verde, pork and white hominy in a green pumpkin seed and tomatillo broth, topped with radish, cabbage, avocado and lime'),
  c('arroz-con-pollo', 'Arroz con Pollo', 'Cuban', 'Dinner', 'Medium', 20, 55, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'A wide pot of arroz con pollo with golden yellow rice, browned chicken thighs, peas, green olives and strips of red pepper, with coriander and lime on top'),
  c('mississippi-pot-roast', 'Mississippi Pot Roast', 'American', 'Dinner', 'Easy', 15, 480, 8, 0, 0, [], ['new'], 'Shredded Mississippi pot roast in a bowl with rich brown juices, melted butter and pepperoncini peppers, beside a scoop of mashed potatoes'),
  c('cheeseburger-macaroni', 'Cheeseburger Macaroni', 'American', 'Dinner', 'Easy', 10, 30, 6, 0, 0, [], ['new'], 'A skillet of cheeseburger macaroni with browned beef, elbow pasta and a glossy cheddar sauce, topped with sliced dill pickles and chives'),
  c('crispy-baked-chicken-thighs', 'Crispy Baked Chicken Thighs', 'American', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Crispy baked chicken thighs on a wire rack with deep golden blistered skin, next to lemon wedges and chopped parsley'),
  c('braised-beef-short-ribs', 'Braised Beef Short Ribs', 'American', 'Dinner', 'Medium', 20, 230, 4, 0, 0, [], ['new'], 'Braised beef short ribs on a bed of creamy polenta, glossy dark red wine sauce spooned over, sprinkled with chopped parsley'),
  c('roast-beef-tenderloin', 'Roast Beef Tenderloin', 'American', 'Dinner', 'Medium', 25, 40, 8, 0, 0, [], ['new'], 'Sliced roast beef tenderloin on a wooden board, rosy pink in the middle with a herb and garlic crust, with a bowl of horseradish cream'),
  c('honey-garlic-glazed-salmon', 'Honey Garlic Glazed Salmon', 'American', 'Quick Meals', 'Easy', 10, 12, 4, 0, 0, [], ['new'], 'Skillet honey garlic glazed salmon fillets with crisp skin and a sticky glossy glaze, sprinkled with sliced spring onions and sesame seeds'),
  c('pan-seared-tilapia', 'Pan-Seared Tilapia', 'American', 'Quick Meals', 'Easy', 10, 14, 4, 0, 0, [], ['new'], 'Golden pan-seared tilapia fillets on a plate, spooned with a lemon, garlic and caper butter and sprinkled with chopped parsley'),
  c('shrimp-stir-fry', 'Shrimp Stir-Fry', 'Chinese', 'Quick Meals', 'Easy', 15, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'Shrimp stir-fry in a wok with pink seared shrimp, broccoli, snap peas, red pepper and carrot in a glossy brown garlic and ginger sauce, with a bowl of rice beside it'),
  c('indian-chicken-curry', 'Indian Chicken Curry', 'Indian', 'Dinner', 'Easy', 15, 45, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'A bowl of Indian chicken curry with tender chicken thighs in a rich orange-brown onion and tomato sauce, sprinkled with chopped coriander, with basmati rice and chapatis'),
  c('hashbrown-casserole', 'Hashbrown Casserole', 'American', 'Dinner', 'Easy', 15, 55, 8, 0, 0, [], ['new'], 'A baking dish of hashbrown casserole with a golden crunchy cornflake topping, bubbling cheddar and sour cream sauce, one scoop lifted out'),
  c('garlic-mashed-potatoes', 'Garlic Mashed Potatoes', 'American', 'Dinner', 'Easy', 10, 25, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A bowl of creamy garlic mashed potatoes with a pool of melted butter and chopped chives, a wooden spoon resting in the potatoes'),
  c('sweet-potato-fries', 'Sweet Potato Fries', 'American', 'Appetizers', 'Easy', 35, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Oven baked sweet potato fries on a baking tray, orange sticks with crisp browned edges, dusted with paprika, next to a bowl of lime and coriander yoghurt dip'),
  c('fruit-salad', 'Fruit Salad', 'International', 'Healthy', 'Easy', 20, 0, 6, 0, 0, ['Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A large glass bowl of fresh fruit salad with strawberries, blueberries, grapes, pineapple chunks, kiwi and orange segments, glistening with honey lime dressing and mint'),
  c('double-chocolate-muffins', 'Double Chocolate Muffins', 'American', 'Baking', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'Domed double chocolate muffins in paper cases on a wire rack, deep cocoa brown with chocolate chips melting through, one broken open to show the moist crumb'),
  c('fruit-smoothie', 'Fruit Smoothie', 'International', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Two tall glasses of thick pink fruit smoothie with frozen strawberries, mango and a banana beside them, on a kitchen counter'),
  c('green-smoothie', 'Green Smoothie', 'International', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Two glasses of bright green smoothie with spinach leaves, a banana, frozen pineapple, a lime and a piece of fresh ginger on a wooden board'),
  c('protein-shake', 'Protein Shake', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegetarian'], ['new'], 'A tall glass of thick chocolate peanut butter protein shake with a banana, rolled oats and a jar of peanut butter beside it'),
  c('iced-tea', 'Iced Tea', 'American', 'Drinks', 'Easy', 5, 5, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A tall jug and glasses of clear amber iced tea with ice cubes, lemon slices and sprigs of fresh mint on a table outdoors'),
  c('whiskey-sour', 'Whiskey Sour', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A whiskey sour in a rocks glass over ice, amber with a pale foamy top, garnished with an orange slice and a cocktail cherry'),
  c('moscow-mule', 'Moscow Mule', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A Moscow mule in a copper mug packed with ice, garnished with a lime wedge and a sprig of mint, beside a bottle of ginger beer'),
  c('cosmopolitan', 'Cosmopolitan', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A pale pink cosmopolitan in a chilled martini glass with a twist of orange peel on the rim, on a bar counter'),
  c('daiquiri', 'Daiquiri', 'Cuban', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A classic daiquiri in a chilled coupe glass, pale and frothy, with a lime wheel floating on the surface and a shaker beside it'),
  c('manhattan', 'Manhattan', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A Manhattan in a chilled coupe glass, deep amber with a single dark red cocktail cherry, next to a bottle of bitters'),
  c('martini', 'Martini', 'International', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A martini in a frosted glass, crystal clear, with a twist of lemon peel and a green olive on a pick beside it')
];
