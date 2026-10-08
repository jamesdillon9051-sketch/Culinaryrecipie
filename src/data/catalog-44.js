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
 * Spread: American 28, British 22, Italian 11, French 6, Indian 6, Chinese 5, Mexican 4, Greek 3, Middle Eastern 3, Irish 2, Japanese 2, Argentinian 1, Filipino 1, Hungarian 1, Korean 1, Scottish 1, Spanish 1, Thai 1, Vietnamese 1.
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
  c('fish-pie-with-cheddar-mash', 'Fish Pie with Cheddar Mash', 'British', 'Dinner', 'Medium', 25, 40, 6, 0, 0, [], ['new'], 'fish pie with cheddar mash'),
  c('fish-and-chips-with-mushy-peas', 'Fish and Chips with Mushy Peas', 'British', 'Dinner', 'Medium', 30, 30, 4, 0, 0, [], ['new'], 'fish and chips with mushy peas'),
  c('sea-bass-with-lemon-butter', 'Sea Bass with Lemon Butter', 'French', 'Dinner', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'sea bass with lemon butter'),
  c('sea-bream-with-fennel', 'Sea Bream with Fennel', 'Italian', 'Dinner', 'Easy', 10, 25, 2, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'sea bream with fennel'),
  c('monkfish-curry', 'Monkfish Curry', 'Indian', 'Dinner', 'Medium', 15, 25, 4, 0, 0, [], ['new'], 'monkfish curry'),
  c('mackerel-with-gooseberry-sauce', 'Mackerel with Gooseberry Sauce', 'British', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'mackerel with gooseberry sauce'),
  c('prawn-risotto', 'Prawn Risotto', 'Italian', 'Dinner', 'Medium', 10, 30, 4, 0, 0, [], ['new'], 'prawn risotto'),
  c('prawn-skewers-with-chimichurri', 'Prawn Skewers with Chimichurri', 'Argentinian', 'Appetizers', 'Easy', 15, 6, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'prawn skewers with chimichurri'),
  c('crab-cakes-with-remoulade', 'Crab Cakes with Remoulade', 'American', 'Appetizers', 'Medium', 25, 10, 6, 0, 0, [], ['new'], 'crab cakes with remoulade'),
  c('crab-bisque', 'Crab Bisque', 'American', 'Dinner', 'Medium', 20, 35, 4, 0, 0, [], ['new'], 'crab bisque'),
  c('lobster-mac-and-cheese', 'Lobster Mac and Cheese', 'American', 'Dinner', 'Medium', 20, 30, 6, 0, 0, [], ['new'], 'lobster mac and cheese'),
  c('scallop-risotto', 'Scallop Risotto', 'Italian', 'Dinner', 'Medium', 10, 35, 4, 0, 0, [], ['new'], 'scallop risotto'),
  c('clam-chowder-bread-bowls', 'Clam Chowder Bread Bowls', 'American', 'Dinner', 'Medium', 20, 40, 4, 0, 0, [], ['new'], 'clam chowder bread bowls'),
  c('mussels-in-cider', 'Mussels in Cider', 'French', 'Dinner', 'Easy', 10, 12, 4, 0, 0, ['Gluten-Free'], ['new'], 'mussels in cider'),
  c('lemon-drizzle-traybake', 'Lemon Drizzle Traybake', 'British', 'Baking', 'Easy', 15, 35, 16, 0, 0, ['Vegetarian'], ['new'], 'lemon drizzle traybake'),
  c('victoria-sandwich-cupcakes', 'Victoria Sandwich Cupcakes', 'British', 'Baking', 'Easy', 20, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'victoria sandwich cupcakes'),
  c('coffee-and-walnut-cupcakes', 'Coffee and Walnut Cupcakes', 'British', 'Baking', 'Easy', 20, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'coffee and walnut cupcakes'),
  c('red-velvet-whoopie-pies', 'Red Velvet Whoopie Pies', 'American', 'Baking', 'Medium', 30, 12, 12, 0, 0, ['Vegetarian'], ['new'], 'red velvet whoopie pies'),
  c('apple-pie-cookies', 'Apple Pie Cookies', 'American', 'Baking', 'Medium', 30, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'apple pie cookies'),
  c('raspberry-ripple-cheesecake', 'Raspberry Ripple Cheesecake', 'British', 'Desserts', 'Medium', 30, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'raspberry ripple cheesecake'),
  c('key-lime-bars', 'Key Lime Bars', 'American', 'Desserts', 'Easy', 15, 20, 16, 0, 0, [], ['new'], 'key lime bars'),
  c('banoffee-cupcakes', 'Banoffee Cupcakes', 'British', 'Baking', 'Medium', 30, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'banoffee cupcakes'),
  c('sticky-toffee-cupcakes', 'Sticky Toffee Cupcakes', 'British', 'Baking', 'Medium', 30, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'sticky toffee cupcakes'),
  c('peanut-butter-blondies', 'Peanut Butter Blondies', 'American', 'Baking', 'Easy', 15, 25, 16, 0, 0, ['Vegetarian'], ['new'], 'peanut butter blondies'),
  c('lemon-blueberry-muffins', 'Lemon Blueberry Muffins', 'American', 'Baking', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'lemon blueberry muffins'),
  c('cranberry-orange-muffins', 'Cranberry Orange Muffins', 'American', 'Baking', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'cranberry orange muffins'),
  c('irish-brown-bread', 'Irish Brown Bread', 'Irish', 'Baking', 'Easy', 10, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'irish brown bread'),
  c('treacle-bread', 'Treacle Bread', 'Irish', 'Baking', 'Easy', 10, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'treacle bread'),
  c('jalapeno-cornbread', 'Jalapeno Cornbread', 'American', 'Baking', 'Easy', 10, 25, 9, 0, 0, ['Vegetarian'], ['new'], 'jalapeno cornbread'),
  c('honey-wheat-bread', 'Honey Wheat Bread', 'American', 'Baking', 'Medium', 30, 35, 10, 0, 0, ['Vegetarian'], ['new'], 'honey wheat bread'),
  c('everything-bagel-dip', 'Everything Bagel Dip', 'American', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian'], ['new'], 'everything bagel dip'),
  c('cinnamon-raisin-bagels', 'Cinnamon Raisin Bagels', 'American', 'Baking', 'Hard', 45, 25, 8, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'cinnamon raisin bagels'),
  c('iced-buns', 'Iced Buns', 'British', 'Baking', 'Medium', 40, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'iced buns'),
  c('bakewell-slices', 'Bakewell Slices', 'British', 'Baking', 'Medium', 30, 35, 12, 0, 0, ['Vegetarian'], ['new'], 'bakewell slices'),
  c('syrup-sponge-pudding', 'Syrup Sponge Pudding', 'British', 'Desserts', 'Medium', 20, 90, 6, 0, 0, ['Vegetarian'], ['new'], 'syrup sponge pudding'),
  c('panettone-french-toast', 'Panettone French Toast', 'Italian', 'Breakfast', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'panettone french toast'),
  c('shortbread-stars', 'Shortbread Stars', 'Scottish', 'Baking', 'Easy', 15, 20, 16, 0, 0, ['Vegetarian'], ['new'], 'shortbread stars'),
  c('candy-apples', 'Candy Apples', 'American', 'Desserts', 'Medium', 15, 10, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'candy apples'),
  c('marshmallow-fluff-fudge', 'Marshmallow Fluff Fudge', 'American', 'Desserts', 'Easy', 10, 10, 24, 0, 0, ['Gluten-Free'], ['new'], 'marshmallow fluff fudge'),
  c('oreo-truffles', 'Oreo Truffles', 'American', 'Desserts', 'Easy', 25, 5, 24, 0, 0, ['Vegetarian'], ['new'], 'oreo truffles'),
  c('cookie-butter-bars', 'Cookie Butter Bars', 'American', 'Baking', 'Easy', 15, 25, 16, 0, 0, ['Vegetarian'], ['new'], 'cookie butter bars'),
  c('panna-cotta-with-berries', 'Panna Cotta with Berries', 'Italian', 'Desserts', 'Medium', 15, 10, 6, 0, 0, ['Gluten-Free'], ['new'], 'panna cotta with berries'),
  c('zabaglione', 'Zabaglione', 'Italian', 'Desserts', 'Medium', 5, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'zabaglione'),
  c('sfogliatelle', 'Sfogliatelle', 'Italian', 'Baking', 'Medium', 45, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'sfogliatelle'),
  c('churros-with-chocolate-sauce', 'Churros with Chocolate Sauce', 'Spanish', 'Desserts', 'Medium', 20, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'churros with chocolate sauce'),
  c('brioche-buns', 'Brioche Buns', 'French', 'Baking', 'Hard', 45, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'brioche buns'),
  c('matcha-cheesecake', 'Matcha Cheesecake', 'Japanese', 'Desserts', 'Medium', 25, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'matcha cheesecake'),
  c('leche-flan', 'Leche Flan', 'Filipino', 'Desserts', 'Medium', 20, 50, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'leche flan'),
  c('cream-of-chicken-soup', 'Cream of Chicken Soup', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'cream of chicken soup'),
  c('cream-of-tomato-soup-with-basil', 'Cream of Tomato Soup with Basil', 'British', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'cream of tomato soup with basil')
];
