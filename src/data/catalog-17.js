/**
 * Weekly Delight — recipe catalog, volume seventeen. British and Irish.
 *
 * Fifty-six were already published across British, Scottish, Welsh and Irish,
 * and they are the export version: fish and chips, the full English, beef
 * Wellington, the Victoria sponge, haggis. What was missing is the domestic
 * cooking those dishes came out of.
 *
 * So the weight here is on three things English-language collections
 * consistently skip. The steamed puddings, savoury and sweet, which are the
 * only genuinely native British cooking technique and have nearly vanished
 * from the shops. The offal and the cheap cuts — kidneys, liver, oxtail,
 * faggots — that fed the country until the 1960s. And the preserving: the
 * piccalilli, the pickled onions, the soused herring, without which none of
 * the cold meat and cheese makes any sense.
 *
 * The Victorian savoury course is here too, which is a genuinely strange and
 * genuinely British idea: something small, hot and salty served after the
 * pudding rather than before the soup.
 *
 * Checked against the other 1,078 first: fish and chips, shepherd's pie,
 * cottage pie, the Cornish pasty, steak and ale pie, toad in the hole, Welsh
 * rarebit, cullen skink, Eton mess, sticky toffee pudding, trifle, bakewell
 * tart, shortbread, crumpets, scones, cranachan, colcannon, boxty, soda bread
 * and bara brith were already published and are not repeated.
 *
 * Sixteen soups, savouries and preserves; eighteen mains; fourteen vegetables
 * and sides; eighteen puddings and tea-table baking.
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
  /* Soups, savouries and preserves */
  c('potted-shrimps', 'Potted Shrimps', 'British', 'Appetizers', 'Easy', 20, 10, 6, 0, 0, ['Gluten-Free'], ['new'], 'Potted shrimps morecambe bay spiced butter'),
  c('devils-on-horseback', 'Devils on Horseback', 'British', 'Appetizers', 'Easy', 15, 15, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Devils on horseback bacon wrapped prunes'),
  c('angels-on-horseback', 'Angels on Horseback', 'British', 'Appetizers', 'Easy', 15, 10, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Angels on horseback bacon wrapped oysters'),
  c('scotch-broth', 'Scotch Broth', 'Scottish', 'Lunch', 'Easy', 20, 120, 6, 0, 0, ['Dairy-Free'], ['new'], 'Scotch broth lamb barley vegetable soup'),
  c('london-particular', 'London Particular', 'British', 'Lunch', 'Easy', 20, 90, 6, 0, 0, ['Dairy-Free'], ['new'], 'London particular pea and ham soup thick'),
  c('leek-and-potato-soup', 'Leek and Potato Soup', 'British', 'Lunch', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Leek and potato soup creamy bowl chives'),
  c('mulligatawny', 'Mulligatawny Soup', 'British', 'Lunch', 'Medium', 25, 60, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Mulligatawny soup anglo indian curried chicken'),
  c('oxtail-soup', 'Oxtail Soup', 'British', 'Dinner', 'Easy', 25, 240, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Oxtail soup dark rich british bowl'),
  c('scotch-woodcock', 'Scotch Woodcock', 'British', 'Appetizers', 'Easy', 10, 10, 4, 0, 0, [], ['new'], 'Scotch woodcock anchovy scrambled egg toast'),
  c('jellied-eels', 'Jellied Eels', 'British', 'Appetizers', 'Medium', 25, 45, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Jellied eels london east end bowl'),
  c('pork-pie', 'Melton Mowbray Pork Pie', 'British', 'Baking', 'Hard', 60, 105, 8, 0, 0, ['Dairy-Free'], ['new'], 'Melton mowbray pork pie hot water crust jelly'),
  c('sausage-rolls', 'Sausage Rolls', 'British', 'Baking', 'Easy', 25, 30, 8, 0, 0, [], ['new'], 'Sausage rolls puff pastry golden tray'),
  c('piccalilli', 'Piccalilli', 'British', 'Appetizers', 'Easy', 30, 20, 12, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Piccalilli yellow mustard pickle jar cauliflower'),
  c('pickled-onions', 'Pickled Onions', 'British', 'Appetizers', 'Easy', 30, 10, 12, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Pickled onions malt vinegar jar pub'),
  c('cumberland-sauce', 'Cumberland Sauce', 'British', 'Appetizers', 'Easy', 10, 20, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Cumberland sauce redcurrant port orange zest'),
  c('cockles-and-laverbread', 'Cockles and Laverbread', 'Welsh', 'Breakfast', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Cockles laverbread bacon welsh breakfast plate'),

  /* Mains */
  c('lancashire-hotpot', 'Lancashire Hotpot', 'British', 'Dinner', 'Easy', 30, 150, 6, 0, 0, ['Gluten-Free'], ['new'], 'Lancashire hotpot lamb sliced potato topping'),
  c('steak-and-kidney-pudding', 'Steak and Kidney Pudding', 'British', 'Dinner', 'Hard', 40, 240, 6, 0, 0, [], ['new'], 'Steak and kidney pudding steamed suet basin'),
  c('liver-and-bacon', 'Liver and Bacon with Onion Gravy', 'British', 'Dinner', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'Liver and bacon onion gravy mashed potato'),
  c('faggots-and-peas', 'Faggots and Peas', 'British', 'Dinner', 'Medium', 35, 60, 6, 0, 0, [], ['new'], 'Faggots and peas black country onion gravy'),
  c('devilled-kidneys', 'Devilled Kidneys', 'British', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'Devilled kidneys mustard cayenne breakfast toast'),
  c('beef-stew-and-dumplings', 'Beef Stew and Dumplings', 'British', 'Dinner', 'Easy', 30, 180, 6, 0, 0, [], ['new'], 'Beef stew and dumplings suet casserole'),
  c('roast-lamb-mint-sauce', 'Roast Lamb with Mint Sauce', 'British', 'Dinner', 'Medium', 25, 90, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Roast leg of lamb mint sauce sunday lunch'),
  c('roast-pork-crackling', 'Roast Pork with Crackling', 'British', 'Dinner', 'Medium', 25, 150, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Roast pork loin crackling apple sauce'),
  c('gammon-parsley-sauce', 'Gammon with Parsley Sauce', 'British', 'Dinner', 'Easy', 20, 120, 6, 0, 0, [], ['new'], 'Boiled gammon parsley sauce plate'),
  c('stargazy-pie', 'Stargazy Pie', 'British', 'Dinner', 'Hard', 45, 45, 6, 0, 0, [], ['new'], 'Stargazy pie cornish pilchard heads pastry'),
  c('fish-pie', 'Fish Pie', 'British', 'Dinner', 'Medium', 30, 45, 6, 0, 0, [], ['new'], 'Fish pie mashed potato topping browned'),
  c('grilled-kippers', 'Grilled Kippers', 'British', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, ['Gluten-Free'], ['new'], 'Grilled kippers butter lemon breakfast plate'),
  c('soused-herring', 'Soused Herring', 'British', 'Appetizers', 'Easy', 25, 20, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Soused herring rolled vinegar onion bay'),
  c('dressed-crab', 'Dressed Crab', 'British', 'Appetizers', 'Medium', 40, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'Dressed crab in its shell brown white meat'),
  c('devilled-whitebait', 'Devilled Whitebait', 'British', 'Appetizers', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Devilled whitebait fried cayenne lemon'),
  c('chicken-and-leek-pie', 'Chicken and Leek Pie', 'British', 'Dinner', 'Medium', 35, 60, 6, 0, 0, [], ['new'], 'Chicken and leek pie golden pastry lid'),
  c('rabbit-pie', 'Rabbit Pie', 'British', 'Dinner', 'Medium', 40, 120, 6, 0, 0, [], ['new'], 'Rabbit pie country pastry bacon cider'),
  c('stovies', 'Stovies', 'Scottish', 'Dinner', 'Easy', 20, 60, 4, 0, 0, ['Gluten-Free'], ['new'], 'Stovies scottish potatoes beef dripping onion'),

  /* Vegetables, sides and suppers */
  c('bubble-and-squeak', 'Bubble and Squeak', 'British', 'Breakfast', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Bubble and squeak fried potato cabbage cake'),
  c('mushy-peas', 'Mushy Peas', 'British', 'Dinner', 'Easy', 10, 60, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Mushy peas marrowfat green chip shop'),
  c('braised-red-cabbage', 'Braised Red Cabbage', 'British', 'Dinner', 'Easy', 20, 75, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Braised red cabbage apple vinegar christmas'),
  c('honey-roast-parsnips', 'Honey Roast Parsnips', 'British', 'Dinner', 'Easy', 15, 45, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Honey roast parsnips caramelised thyme tray'),
  c('pease-pudding', 'Pease Pudding', 'British', 'Dinner', 'Easy', 15, 120, 8, 0, 0, ['Gluten-Free'], ['new'], 'Pease pudding split peas geordie ham'),
  c('rumbledethumps', 'Rumbledethumps', 'Scottish', 'Dinner', 'Easy', 20, 30, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Rumbledethumps scottish potato cabbage cheese bake'),
  c('champ', 'Champ', 'Irish', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Champ irish mashed potato spring onion butter well'),
  c('pan-haggerty', 'Pan Haggerty', 'British', 'Dinner', 'Easy', 20, 45, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Pan haggerty northumberland potato onion cheese pan'),
  c('laverbread-and-bacon', 'Laverbread with Bacon', 'Welsh', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Laverbread bacon oatmeal welsh breakfast'),
  c('stuffed-marrow', 'Stuffed Marrow', 'British', 'Dinner', 'Easy', 25, 60, 4, 0, 0, [], ['new'], 'Stuffed marrow minced beef baked allotment'),
  c('watercress-soup', 'Watercress Soup', 'British', 'Lunch', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Watercress soup vivid green cream swirl'),
  c('potted-cheese', 'Potted Cheese', 'British', 'Appetizers', 'Easy', 15, 0, 6, 0, 0, ['Vegetarian'], ['new'], 'Potted cheese pot butter seal mace port'),
  c('coronation-chicken', 'Coronation Chicken', 'British', 'Lunch', 'Easy', 25, 20, 6, 0, 0, ['Gluten-Free'], ['new'], 'Coronation chicken curried mayonnaise apricot almonds'),
  c('cucumber-sandwiches', 'Cucumber Sandwiches', 'British', 'Lunch', 'Easy', 20, 0, 4, 0, 0, ['Vegetarian'], ['new'], 'Cucumber sandwiches crusts off afternoon tea'),

  /* Puddings and the tea table */
  c('spotted-dick', 'Spotted Dick', 'British', 'Desserts', 'Medium', 20, 120, 6, 0, 0, ['Vegetarian'], ['new'], 'Spotted dick steamed suet pudding currants custard'),
  c('treacle-sponge', 'Treacle Sponge Pudding', 'British', 'Desserts', 'Easy', 20, 120, 6, 0, 0, ['Vegetarian'], ['new'], 'Treacle sponge pudding golden syrup steamed'),
  c('jam-roly-poly', 'Jam Roly-Poly', 'British', 'Desserts', 'Easy', 20, 105, 6, 0, 0, ['Vegetarian'], ['new'], 'Jam roly poly rolled suet pudding slice custard'),
  c('treacle-tart', 'Treacle Tart', 'British', 'Baking', 'Medium', 30, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'Treacle tart lattice golden syrup breadcrumbs'),
  c('apple-crumble', 'Apple Crumble', 'British', 'Desserts', 'Easy', 20, 45, 6, 0, 0, ['Vegetarian'], ['new'], 'Apple crumble golden topping dish custard'),
  c('rhubarb-fool', 'Rhubarb Fool', 'British', 'Desserts', 'Easy', 15, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Rhubarb fool pink cream glass ripple'),
  c('summer-pudding', 'Summer Pudding', 'British', 'Desserts', 'Easy', 25, 10, 6, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Summer pudding turned out crimson berries'),
  c('queen-of-puddings', 'Queen of Puddings', 'British', 'Desserts', 'Medium', 25, 50, 6, 0, 0, ['Vegetarian'], ['new'], 'Queen of puddings meringue jam custard breadcrumb'),
  c('chelsea-buns', 'Chelsea Buns', 'British', 'Baking', 'Medium', 30, 25, 9, 0, 0, ['Vegetarian'], ['new'], 'Chelsea buns spiral currants sticky glaze tray'),
  c('rice-pudding', 'Baked Rice Pudding', 'British', 'Desserts', 'Easy', 10, 120, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Baked rice pudding nutmeg brown skin dish'),
  c('syllabub', 'Syllabub', 'British', 'Desserts', 'Easy', 15, 0, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Syllabub whipped cream sherry lemon glass'),
  c('banoffee-pie', 'Banoffee Pie', 'British', 'Desserts', 'Medium', 30, 30, 8, 0, 0, ['Vegetarian'], ['new'], 'Banoffee pie banana toffee cream chocolate'),
  c('custard-tart', 'Custard Tart', 'British', 'Baking', 'Medium', 35, 50, 8, 0, 0, ['Vegetarian'], ['new'], 'Custard tart nutmeg set pastry slice'),
  c('lemon-posset', 'Lemon Posset', 'British', 'Desserts', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Lemon posset set cream glass berries'),
  c('welsh-cakes', 'Welsh Cakes', 'Welsh', 'Baking', 'Easy', 20, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'Welsh cakes bakestone griddle currants sugar'),
  c('eccles-cakes', 'Eccles Cakes', 'British', 'Baking', 'Medium', 30, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'Eccles cakes flaky pastry currants sugar top'),
  c('parkin', 'Yorkshire Parkin', 'British', 'Baking', 'Easy', 20, 60, 12, 0, 0, ['Vegetarian'], ['new'], 'Yorkshire parkin oatmeal treacle ginger cake'),
  c('dundee-cake', 'Dundee Cake', 'Scottish', 'Baking', 'Medium', 30, 120, 12, 0, 0, ['Vegetarian'], ['new'], 'Dundee cake blanched almond rings top fruit')
];
