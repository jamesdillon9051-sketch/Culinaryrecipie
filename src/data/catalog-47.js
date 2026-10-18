'use strict';

/**
 * Weekly Delight — recipe catalog, volume forty-seven.
 * One hundred more budget dishes from the world's everyday kitchens: potatoes, pulses, dumplings, flatbreads, simple bakes and puddings, all on cheap ingredients.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: Indian 15, Italian 14, American 11, New Zealand 5, Greek 4, Turkish 4, Balkan 3, Chinese 3, Nigerian 3, Persian 3, Polish 3, South African 3, Egyptian 2, Ethiopian 2, French 2, German 2, Hungarian 2, Kenyan 2, Lebanese 2, Russian 2, Sri Lankan 2, Afghan 1, Australian 1, Bangladeshi 1, Canadian 1, Czech 1, Korean 1, Moroccan 1, Nepalese 1, Pakistani 1, Romanian 1, Ukrainian 1.
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
  c('green-bean-stir-fry', 'Green Bean Stir Fry', 'Chinese', 'Quick Meals', 'Easy', 5, 8, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'green bean stir fry'),
  c('sweet-potato-curry', 'Sweet Potato Curry', 'Indian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'sweet potato curry'),
  c('pumpkin-pancakes', 'Pumpkin Pancakes', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'pumpkin pancakes'),
  c('aloo-tikki', 'Aloo Tikki', 'Indian', 'Appetizers', 'Easy', 15, 15, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'aloo tikki'),
  c('aloo-matar', 'Aloo Matar', 'Indian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'aloo matar'),
  c('aloo-methi', 'Aloo Methi', 'Indian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'aloo methi'),
  c('dahi-aloo', 'Dahi Aloo', 'Indian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'dahi aloo'),
  c('bread-pakora', 'Bread Pakora', 'Indian', 'Appetizers', 'Easy', 10, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'bread pakora'),
  c('cabbage-poriyal', 'Cabbage Poriyal', 'Indian', 'Dinner', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'cabbage poriyal'),
  c('beans-poriyal', 'Beans Poriyal', 'Indian', 'Dinner', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'beans poriyal'),
  c('pongal', 'Pongal', 'Indian', 'Breakfast', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'pongal'),
  c('tamarind-rice', 'Tamarind Rice', 'Indian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'tamarind rice'),
  c('lauki-sabzi', 'Lauki Sabzi', 'Indian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'lauki sabzi'),
  c('kaddu-ki-sabzi', 'Kaddu Ki Sabzi', 'Indian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'kaddu ki sabzi'),
  c('gobi-paratha', 'Gobi Paratha', 'Indian', 'Breakfast', 'Medium', 25, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'gobi paratha'),
  c('bisi-bele-bath', 'Bisi Bele Bath', 'Indian', 'Dinner', 'Medium', 15, 35, 4, 0, 0, ['Vegetarian'], ['new'], 'bisi bele bath'),
  c('nigerian-fried-rice', 'Nigerian Fried Rice', 'Nigerian', 'Dinner', 'Easy', 15, 30, 6, 0, 0, ['Dairy-Free'], ['new'], 'nigerian fried rice'),
  c('plantain-and-beans', 'Plantain and Beans', 'Nigerian', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'plantain and beans'),
  c('fried-yam', 'Fried Yam', 'Nigerian', 'Dinner', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'fried yam'),
  c('atkilt-wat', 'Atkilt Wat', 'Ethiopian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free'], ['new'], 'atkilt wat'),
  c('kik-alicha', 'Kik Alicha', 'Ethiopian', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'kik alicha'),
  c('mchuzi-wa-maharage', 'Mchuzi wa Maharage', 'Kenyan', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'mchuzi wa maharage'),
  c('mukimo', 'Mukimo', 'Kenyan', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'mukimo'),
  c('vetkoek', 'Vetkoek', 'South African', 'Baking', 'Medium', 20, 15, 8, 0, 0, ['Dairy-Free'], ['new'], 'vetkoek'),
  c('mielie-bread', 'Mielie Bread', 'South African', 'Baking', 'Easy', 10, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'mielie bread'),
  c('frikkadels', 'Frikkadels', 'South African', 'Dinner', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'frikkadels'),
  c('moroccan-eggs', 'Moroccan Eggs', 'Moroccan', 'Breakfast', 'Easy', 10, 15, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'moroccan eggs'),
  c('egyptian-rice-with-vermicelli', 'Egyptian Rice with Vermicelli', 'Egyptian', 'Dinner', 'Easy', 5, 25, 4, 0, 0, [], ['new'], 'egyptian rice with vermicelli'),
  c('egyptian-bean-sandwich', 'Egyptian Bean Sandwich', 'Egyptian', 'Lunch', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'egyptian bean sandwich'),
  c('lebanese-cabbage-salad', 'Lebanese Cabbage Salad', 'Lebanese', 'Healthy', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'lebanese cabbage salad'),
  c('lebanese-garlic-potatoes', 'Lebanese Garlic Potatoes', 'Lebanese', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'lebanese garlic potatoes'),
  c('iranian-eggs-and-tomatoes', 'Iranian Eggs and Tomatoes', 'Persian', 'Breakfast', 'Easy', 5, 15, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'iranian eggs and tomatoes'),
  c('kookoo-sibzamini', 'Kookoo Sibzamini', 'Persian', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'kookoo sibzamini'),
  c('persian-lentil-rice', 'Persian Lentil Rice', 'Persian', 'Dinner', 'Easy', 10, 45, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'persian lentil rice'),
  c('turkish-bulgur-pilaf', 'Turkish Bulgur Pilaf', 'Turkish', 'Dinner', 'Easy', 5, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'turkish bulgur pilaf'),
  c('kuru-fasulye', 'Kuru Fasulye', 'Turkish', 'Dinner', 'Easy', 10, 60, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'kuru fasulye'),
  c('mucver', 'Mucver', 'Turkish', 'Appetizers', 'Easy', 15, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'mucver'),
  c('red-lentil-kofte', 'Red Lentil Kofte', 'Turkish', 'Appetizers', 'Easy', 20, 25, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'red lentil kofte'),
  c('greek-fried-potatoes', 'Greek Fried Potatoes', 'Greek', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'greek fried potatoes'),
  c('spanakorizo', 'Spanakorizo', 'Greek', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'spanakorizo'),
  c('fasolakia', 'Fasolakia', 'Greek', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'fasolakia'),
  c('revithada', 'Revithada', 'Greek', 'Dinner', 'Easy', 10, 60, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'revithada'),
  c('pasta-e-lenticchie', 'Pasta e Lenticchie', 'Italian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'pasta e lenticchie'),
  c('pasta-e-patate', 'Pasta e Patate', 'Italian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, [], ['new'], 'pasta e patate'),
  c('pasta-e-piselli', 'Pasta e Piselli', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'pasta e piselli'),
  c('spaghetti-with-breadcrumbs', 'Spaghetti with Breadcrumbs', 'Italian', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'spaghetti with breadcrumbs'),
  c('pasta-al-limone', 'Pasta al Limone', 'Italian', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, [], ['new'], 'pasta al limone'),
  c('pasta-burro-e-salvia', 'Pasta Burro e Salvia', 'Italian', 'Quick Meals', 'Easy', 3, 12, 2, 0, 0, [], ['new'], 'pasta burro e salvia'),
  c('pasta-with-cauliflower', 'Pasta with Cauliflower', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'pasta with cauliflower'),
  c('pasta-with-chickpeas', 'Pasta with Chickpeas', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'pasta with chickpeas'),
  c('pasta-with-sausage-and-peppers', 'Pasta with Sausage and Peppers', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'pasta with sausage and peppers'),
  c('pasta-with-cabbage', 'Pasta with Cabbage', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'pasta with cabbage'),
  c('fried-polenta', 'Fried Polenta', 'Italian', 'Appetizers', 'Easy', 5, 20, 6, 0, 0, ['Gluten-Free'], ['new'], 'fried polenta'),
  c('ricotta-gnocchi', 'Ricotta Gnocchi', 'Italian', 'Dinner', 'Medium', 20, 10, 4, 0, 0, [], ['new'], 'ricotta gnocchi'),
  c('fettunta', 'Fettunta', 'Italian', 'Appetizers', 'Easy', 5, 5, 4, 0, 0, ['Vegetarian'], ['new'], 'fettunta'),
  c('pommes-persillade', 'Pommes Persillade', 'French', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'pommes persillade'),
  c('oeufs-en-cocotte', 'Oeufs en Cocotte', 'French', 'Breakfast', 'Easy', 5, 12, 2, 0, 0, ['Vegetarian'], ['new'], 'oeufs en cocotte'),
  c('bratkartoffeln', 'Bratkartoffeln', 'German', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'bratkartoffeln'),
  c('kaesespaetzle', 'Kaesespaetzle', 'German', 'Dinner', 'Medium', 20, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'kaesespaetzle'),
  c('hungarian-potato-paprikash', 'Hungarian Potato Paprikash', 'Hungarian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, [], ['new'], 'hungarian potato paprikash'),
  c('nokedli', 'Nokedli', 'Hungarian', 'Dinner', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'nokedli'),
  c('polish-cucumber-salad', 'Polish Cucumber Salad', 'Polish', 'Healthy', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'polish cucumber salad'),
  c('kopytka', 'Kopytka', 'Polish', 'Dinner', 'Medium', 20, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'kopytka'),
  c('barszcz', 'Barszcz', 'Polish', 'Dinner', 'Easy', 15, 45, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'barszcz'),
  c('bramboracky', 'Bramboracky', 'Czech', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'bramboracky'),
  c('vinegret', 'Vinegret', 'Russian', 'Healthy', 'Easy', 20, 35, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'vinegret'),
  c('draniki', 'Draniki', 'Ukrainian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'draniki'),
  c('buckwheat-with-mushrooms', 'Buckwheat with Mushrooms', 'Russian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'buckwheat with mushrooms'),
  c('fasole-batuta', 'Fasole Batuta', 'Romanian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'fasole batuta'),
  c('shopska-salad', 'Shopska Salad', 'Balkan', 'Healthy', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'shopska salad'),
  c('tarator', 'Tarator', 'Balkan', 'Healthy', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'tarator'),
  c('pasulj', 'Pasulj', 'Balkan', 'Dinner', 'Easy', 10, 75, 6, 0, 0, [], ['new'], 'pasulj'),
  c('bangladeshi-khichuri', 'Bangladeshi Khichuri', 'Bangladeshi', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'bangladeshi khichuri'),
  c('bengali-aloo-posto', 'Bengali Aloo Posto', 'Indian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'bengali aloo posto'),
  c('sri-lankan-pol-roti', 'Sri Lankan Pol Roti', 'Sri Lankan', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'sri lankan pol roti'),
  c('sri-lankan-egg-curry', 'Sri Lankan Egg Curry', 'Sri Lankan', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'sri lankan egg curry'),
  c('pakistani-daal-chawal', 'Pakistani Daal Chawal', 'Pakistani', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'pakistani daal chawal'),
  c('afghan-dal', 'Afghan Dal', 'Afghan', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'afghan dal'),
  c('nepali-aloo-tama', 'Nepali Aloo Tama', 'Nepalese', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'nepali aloo tama'),
  c('australian-cheese-and-vegemite-scrolls', 'Australian Cheese and Vegemite Scrolls', 'Australian', 'Baking', 'Easy', 20, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'australian cheese and vegemite scrolls'),
  c('new-zealand-mince-and-cheese-pie', 'New Zealand Mince and Cheese Pie', 'New Zealand', 'Dinner', 'Medium', 30, 65, 6, 0, 0, [], ['new'], 'new zealand mince and cheese pie'),
  c('new-zealand-anzac-biscuits', 'New Zealand Anzac Biscuits', 'New Zealand', 'Baking', 'Easy', 10, 15, 16, 0, 0, ['Vegetarian'], ['new'], 'new zealand anzac biscuits'),
  c('new-zealand-corn-fritters', 'New Zealand Corn Fritters', 'New Zealand', 'Lunch', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'new zealand corn fritters'),
  c('new-zealand-boil-up', 'New Zealand Boil Up', 'New Zealand', 'Dinner', 'Easy', 15, 90, 6, 0, 0, ['Dairy-Free'], ['new'], 'new zealand boil up'),
  c('new-zealand-kiwi-burger', 'New Zealand Kiwi Burger', 'New Zealand', 'Dinner', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'new zealand kiwi burger'),
  c('canadian-maple-baked-beans', 'Canadian Maple Baked Beans', 'Canadian', 'Dinner', 'Easy', 15, 90, 8, 0, 0, ['Dairy-Free'], ['new'], 'canadian maple baked beans'),
  c('sloppy-joe-casserole', 'Sloppy Joe Casserole', 'American', 'Dinner', 'Easy', 10, 30, 6, 0, 0, [], ['new'], 'sloppy joe casserole'),
  c('meatloaf-muffins', 'Meatloaf Muffins', 'American', 'Dinner', 'Easy', 15, 25, 6, 0, 0, [], ['new'], 'meatloaf muffins'),
  c('loaded-baked-potato-soup', 'Loaded Baked Potato Soup', 'American', 'Dinner', 'Easy', 10, 30, 6, 0, 0, [], ['new'], 'loaded baked potato soup'),
  c('johnny-cakes', 'Johnny Cakes', 'American', 'Breakfast', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'johnny cakes'),
  c('ants-on-a-log', 'Ants on a Log', 'American', 'Appetizers', 'Easy', 5, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'ants on a log'),
  c('applesauce-cake', 'Applesauce Cake', 'American', 'Baking', 'Easy', 15, 40, 10, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'applesauce cake'),
  c('depression-cake', 'Depression Cake', 'American', 'Baking', 'Easy', 10, 35, 9, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'depression cake'),
  c('dump-cake', 'Dump Cake', 'American', 'Desserts', 'Easy', 10, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'dump cake'),
  c('fruit-cobbler', 'Fruit Cobbler', 'American', 'Desserts', 'Easy', 15, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'fruit cobbler'),
  c('hand-pies', 'Hand Pies', 'American', 'Baking', 'Medium', 30, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'hand pies'),
  c('hot-and-sour-potato-strips', 'Hot and Sour Potato Strips', 'Chinese', 'Quick Meals', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'hot and sour potato strips'),
  c('sichuan-cucumber-salad', 'Sichuan Cucumber Salad', 'Chinese', 'Healthy', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'sichuan cucumber salad'),
  c('gamja-jorim', 'Gamja Jorim', 'Korean', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'gamja jorim'),
  c('pasta-ai-broccoli', 'Pasta ai Broccoli', 'Italian', 'Dinner', 'Easy', 5, 20, 4, 0, 0, [], ['new'], 'pasta ai broccoli')
];
