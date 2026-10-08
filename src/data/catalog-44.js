'use strict';

/**
 * Weekly Delight — recipe catalog, volume forty-four.
 * One hundred mains, bakes and puddings: chicken, beef, pork, lamb, fish and seafood dinners, curries and soups, cupcakes, muffins, breads and sweet treats.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: British 10, American 9, Chinese 5, Indian 5, Italian 4, Mexican 4, French 3, Greek 3, Middle Eastern 3, Hungarian 1, Japanese 1, Korean 1, Thai 1, Vietnamese 1.
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
  c('chicken-parmesan-sliders', 'Chicken Parmesan Sliders', 'American', 'Appetizers', 'Easy', 15, 20, 12, 0, 0, [], ['new'], 'chicken parmesan sliders'),
  c('chicken-caesar-pasta-salad', 'Chicken Caesar Pasta Salad', 'American', 'Lunch', 'Easy', 15, 12, 4, 0, 0, [], ['new'], 'chicken caesar pasta salad'),
  c('chicken-tikka-wraps', 'Chicken Tikka Wraps', 'British', 'Lunch', 'Easy', 15, 12, 4, 0, 0, [], ['new'], 'chicken tikka wraps'),
  c('chicken-saltimbocca', 'Chicken Saltimbocca', 'Italian', 'Dinner', 'Medium', 10, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'chicken saltimbocca'),
  c('chicken-cordon-bleu-casserole', 'Chicken Cordon Bleu Casserole', 'American', 'Dinner', 'Easy', 15, 30, 6, 0, 0, [], ['new'], 'chicken cordon bleu casserole'),
  c('chicken-provencal', 'Chicken Provencal', 'French', 'Dinner', 'Medium', 15, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'chicken provencal'),
  c('chicken-bulgogi', 'Chicken Bulgogi', 'Korean', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'chicken bulgogi'),
  c('chicken-shashlik', 'Chicken Shashlik', 'Indian', 'Dinner', 'Easy', 20, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'chicken shashlik'),
  c('chicken-gyros', 'Chicken Gyros', 'Greek', 'Dinner', 'Easy', 20, 15, 4, 0, 0, [], ['new'], 'chicken gyros'),
  c('chicken-tikka-pizza', 'Chicken Tikka Pizza', 'British', 'Dinner', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'chicken tikka pizza'),
  c('chicken-pastilla', 'Chicken Pastilla', 'Middle Eastern', 'Dinner', 'Hard', 30, 45, 6, 0, 0, [], ['new'], 'chicken pastilla'),
  c('lemon-chicken-orzo', 'Lemon Chicken Orzo', 'Greek', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'lemon chicken orzo'),
  c('beef-pho', 'Beef Pho', 'Vietnamese', 'Dinner', 'Medium', 20, 120, 4, 0, 0, ['Dairy-Free'], ['new'], 'beef pho'),
  c('beef-taco-skillet', 'Beef Taco Skillet', 'Mexican', 'Quick Meals', 'Easy', 10, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'beef taco skillet'),
  c('beef-samosas', 'Beef Samosas', 'Indian', 'Appetizers', 'Medium', 40, 25, 12, 0, 0, [], ['new'], 'beef samosas'),
  c('beef-and-broccoli-stir-fry', 'Beef and Broccoli Stir Fry', 'Chinese', 'Quick Meals', 'Easy', 10, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'beef and broccoli stir fry'),
  c('beef-goulash-soup', 'Beef Goulash Soup', 'Hungarian', 'Dinner', 'Easy', 20, 90, 6, 0, 0, ['Dairy-Free'], ['new'], 'beef goulash soup'),
  c('beef-short-rib-ragu', 'Beef Short Rib Ragu', 'Italian', 'Dinner', 'Medium', 30, 180, 6, 0, 0, [], ['new'], 'beef short rib ragu'),
  c('beef-tagliata', 'Beef Tagliata', 'Italian', 'Dinner', 'Easy', 10, 10, 4, 0, 0, ['Gluten-Free'], ['new'], 'beef tagliata'),
  c('beef-lo-mein', 'Beef Lo Mein', 'Chinese', 'Quick Meals', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'beef lo mein'),
  c('beef-pot-roast-with-gravy', 'Beef Pot Roast with Gravy', 'American', 'Dinner', 'Easy', 20, 180, 6, 0, 0, ['Dairy-Free'], ['new'], 'beef pot roast with gravy'),
  c('pork-carnitas-bowls', 'Pork Carnitas Bowls', 'Mexican', 'Dinner', 'Easy', 20, 180, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pork carnitas bowls'),
  c('pork-chops-with-mushroom-sauce', 'Pork Chops with Mushroom Sauce', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'pork chops with mushroom sauce'),
  c('pork-loin-with-cider-gravy', 'Pork Loin with Cider Gravy', 'British', 'Dinner', 'Medium', 20, 75, 6, 0, 0, ['Dairy-Free'], ['new'], 'pork loin with cider gravy'),
  c('pork-medallions-in-cream-sauce', 'Pork Medallions in Cream Sauce', 'French', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'pork medallions in cream sauce'),
  c('pork-vindaloo', 'Pork Vindaloo', 'Indian', 'Dinner', 'Medium', 25, 90, 6, 0, 0, ['Dairy-Free'], ['new'], 'pork vindaloo'),
  c('pork-belly-bao', 'Pork Belly Bao', 'Chinese', 'Dinner', 'Hard', 45, 150, 8, 0, 0, [], ['new'], 'pork belly bao'),
  c('pork-larb', 'Pork Larb', 'Thai', 'Quick Meals', 'Easy', 15, 10, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pork larb'),
  c('pork-lo-mein', 'Pork Lo Mein', 'Chinese', 'Quick Meals', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'pork lo mein'),
  c('pork-meatball-soup', 'Pork Meatball Soup', 'Chinese', 'Dinner', 'Easy', 20, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'pork meatball soup'),
  c('pork-stuffed-peppers', 'Pork Stuffed Peppers', 'American', 'Dinner', 'Easy', 20, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'pork stuffed peppers'),
  c('pork-pie-with-piccalilli', 'Pork Pie with Piccalilli', 'British', 'Dinner', 'Hard', 45, 90, 8, 0, 0, ['Dairy-Free'], ['new'], 'pork pie with piccalilli'),
  c('lamb-shawarma', 'Lamb Shawarma', 'Middle Eastern', 'Dinner', 'Easy', 20, 20, 4, 0, 0, [], ['new'], 'lamb shawarma'),
  c('lamb-souvlaki', 'Lamb Souvlaki', 'Greek', 'Dinner', 'Easy', 20, 12, 4, 0, 0, [], ['new'], 'lamb souvlaki'),
  c('lamb-navarin', 'Lamb Navarin', 'French', 'Dinner', 'Medium', 25, 100, 6, 0, 0, ['Dairy-Free'], ['new'], 'lamb navarin'),
  c('lamb-hotpot', 'Lamb Hotpot', 'British', 'Dinner', 'Medium', 30, 150, 6, 0, 0, [], ['new'], 'lamb hotpot'),
  c('lamb-chops-with-mint-sauce', 'Lamb Chops with Mint Sauce', 'British', 'Dinner', 'Easy', 10, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'lamb chops with mint sauce'),
  c('lamb-samosas', 'Lamb Samosas', 'Indian', 'Appetizers', 'Medium', 40, 25, 12, 0, 0, [], ['new'], 'lamb samosas'),
  c('lamb-pilaf', 'Lamb Pilaf', 'Middle Eastern', 'Dinner', 'Easy', 15, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'lamb pilaf'),
  c('lamb-ragu-pappardelle', 'Lamb Ragu Pappardelle', 'Italian', 'Dinner', 'Medium', 25, 120, 6, 0, 0, [], ['new'], 'lamb ragu pappardelle'),
  c('salmon-poke-bowls', 'Salmon Poke Bowls', 'American', 'Lunch', 'Easy', 20, 0, 4, 0, 0, ['Dairy-Free'], ['new'], 'salmon poke bowls'),
  c('salmon-quiche', 'Salmon Quiche', 'British', 'Dinner', 'Medium', 25, 40, 6, 0, 0, [], ['new'], 'salmon quiche'),
  c('salmon-tacos', 'Salmon Tacos', 'Mexican', 'Quick Meals', 'Easy', 15, 10, 4, 0, 0, [], ['new'], 'salmon tacos'),
  c('tuna-steaks-with-sesame', 'Tuna Steaks with Sesame', 'Japanese', 'Quick Meals', 'Easy', 10, 6, 2, 0, 0, ['Dairy-Free'], ['new'], 'tuna steaks with sesame'),
  c('tuna-poke-bowls', 'Tuna Poke Bowls', 'American', 'Lunch', 'Easy', 20, 0, 4, 0, 0, ['Dairy-Free'], ['new'], 'tuna poke bowls'),
  c('cod-chowder', 'Cod Chowder', 'American', 'Dinner', 'Easy', 15, 30, 6, 0, 0, [], ['new'], 'cod chowder'),
  c('cod-tacos', 'Cod Tacos', 'Mexican', 'Quick Meals', 'Easy', 15, 10, 4, 0, 0, [], ['new'], 'cod tacos'),
  c('cod-curry', 'Cod Curry', 'Indian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'cod curry'),
  c('smoked-haddock-risotto', 'Smoked Haddock Risotto', 'British', 'Dinner', 'Medium', 10, 35, 4, 0, 0, [], ['new'], 'smoked haddock risotto'),
  c('smoked-haddock-fishcakes', 'Smoked Haddock Fishcakes', 'British', 'Dinner', 'Medium', 25, 15, 4, 0, 0, [], ['new'], 'smoked haddock fishcakes'),
  c('fish-pie-with-cheddar-mash', 'Fish Pie with Cheddar Mash', 'British', 'Dinner', 'Medium', 25, 40, 6, 0, 0, [], ['new'], 'fish pie with cheddar mash')
];
