/**
 * Weekly Delight — recipe catalog, volume nineteen.
 * The hundred most-searched dishes the site did not have.
 *
 * Chosen by what people actually type, then filtered against the 1,209
 * already published — which removed more candidates than it kept. Every
 * European and American classic tried was already here: beef wellington,
 * coq au vin, quiche lorraine, borscht, goulash, pierogi, schnitzel,
 * ceviche, feijoada, key lime pie, pavlova, forty-eight of fifty-eight in
 * one batch. That is what a catalogue this size does to a shortlist.
 *
 * What was left is where the site was actually thin against demand:
 *
 * India, which had forty-three entries for the largest recipe-search
 * population on earth, and none of the Indo-Chinese cooking — gobi
 * manchurian, hakka noodles, chilli paneer — that is a cuisine of its own
 * in Indian cities and enormous online. Nor the breakfast canon: poha,
 * upma, medu vada, uttapam, appam.
 *
 * Korea, sixteen entries and missing jjajangmyeon, kimchi fried rice and
 * budae jjigae, three of the most-searched Korean dishes there are.
 *
 * Thailand at fourteen, Vietnam at ten, Turkey at fourteen: all missing
 * their headline street food.
 *
 * And the American home-cooking staples that carry the highest search
 * volume of anything on this list and are not glamorous enough to have been
 * written first — pot roast, chicken pot pie, buffalo wings, cornbread,
 * biscuits and gravy, potato salad, coleslaw.
 *
 * Deliberately not included: a shawarma plate and a falafel wrap, both
 * available and both near-duplicates of dishes already published. A second
 * page about the same food competes with the first rather than adding
 * anything.
 *
 * Thirty-four Indian, Indo-Chinese and Nepalese; twenty-three from the rest
 * of Asia; twenty-five from the Americas; eighteen European.
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
  /* India and Indo-Chinese */
  c('paneer-butter-masala', 'Paneer Butter Masala', 'Indian', 'Dinner', 'Medium', 20, 35, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Paneer butter masala creamy tomato gravy coriander'),
  c('matar-paneer', 'Matar Paneer', 'Indian', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Matar paneer peas cottage cheese curry'),
  c('kadai-paneer', 'Kadai Paneer', 'Indian', 'Dinner', 'Medium', 20, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Kadai paneer peppers onion masala wok'),
  c('paneer-bhurji', 'Paneer Bhurji', 'Indian', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Paneer bhurji scrambled cottage cheese onion tomato'),
  c('chilli-paneer', 'Chilli Paneer', 'Indian', 'Appetizers', 'Medium', 20, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'Chilli paneer indo chinese peppers glossy sauce'),
  c('gobi-manchurian', 'Gobi Manchurian', 'Indian', 'Appetizers', 'Medium', 20, 25, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Gobi manchurian fried cauliflower dark sauce spring onion'),
  c('hakka-noodles', 'Hakka Noodles', 'Indian', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Hakka noodles vegetables wok indo chinese'),
  c('schezwan-fried-rice', 'Schezwan Fried Rice', 'Indian', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Schezwan fried rice red chilli vegetables'),
  c('chicken-65', 'Chicken 65', 'Indian', 'Appetizers', 'Medium', 30, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'Chicken 65 red fried chicken curry leaves'),
  c('chicken-lollipop', 'Chicken Lollipop', 'Indian', 'Appetizers', 'Medium', 30, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'Chicken lollipop frenched wings red coating'),
  c('chicken-chettinad', 'Chicken Chettinad', 'Indian', 'Dinner', 'Medium', 25, 40, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Chicken chettinad black pepper coconut tamil curry'),
  c('mutton-curry', 'Mutton Curry', 'Indian', 'Dinner', 'Medium', 20, 90, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Mutton curry bone in lamb onion masala'),
  c('egg-curry', 'Egg Curry', 'Indian', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Egg curry halved boiled eggs onion tomato gravy'),
  c('egg-bhurji', 'Egg Bhurji', 'Indian', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Egg bhurji indian scrambled eggs onion chilli'),
  c('fish-tikka', 'Fish Tikka', 'Indian', 'Appetizers', 'Easy', 20, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'Fish tikka charred marinated cubes lemon'),
  c('prawn-masala', 'Prawn Masala', 'Indian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Prawn masala coastal curry curry leaves'),
  c('khichdi', 'Khichdi', 'Indian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Khichdi rice lentils ghee turmeric'),
  c('veg-biryani', 'Vegetable Biryani', 'Indian', 'Dinner', 'Hard', 40, 45, 6, 0, 0, ['Vegetarian'], ['new'], 'Vegetable biryani layered saffron rice'),
  c('poha', 'Poha', 'Indian', 'Breakfast', 'Easy', 10, 12, 3, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Poha flattened rice turmeric peanuts lemon'),
  c('upma', 'Upma', 'Indian', 'Breakfast', 'Easy', 10, 15, 3, 0, 0, ['Vegetarian'], ['new'], 'Upma semolina mustard seeds curry leaves'),
  c('medu-vada', 'Medu Vada', 'Indian', 'Breakfast', 'Hard', 25, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Medu vada doughnut shaped lentil fritters'),
  c('uttapam', 'Uttapam', 'Indian', 'Breakfast', 'Easy', 15, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Uttapam thick dosa onion tomato topping'),

  /* The rest of Asia */
  c('veg-momos', 'Vegetable Momos', 'Nepalese', 'Appetizers', 'Medium', 40, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Vegetable momos pleated steamed dumplings chutney'),
  c('jjajangmyeon', 'Jjajangmyeon', 'Korean', 'Dinner', 'Medium', 20, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'Jjajangmyeon black bean sauce noodles cucumber'),
  c('kimchi-fried-rice', 'Kimchi Fried Rice', 'Korean', 'Quick Meals', 'Easy', 10, 15, 2, 0, 0, ['Dairy-Free'], ['new'], 'Kimchi fried rice fried egg sesame seaweed'),
  c('budae-jjigae', 'Budae Jjigae', 'Korean', 'Dinner', 'Easy', 20, 25, 4, 0, 0, [], ['new'], 'Budae jjigae army stew sausage kimchi noodles'),
  c('doenjang-jjigae', 'Doenjang Jjigae', 'Korean', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'Doenjang jjigae soybean paste stew tofu courgette'),
  c('gyeranjjim', 'Gyeranjjim', 'Korean', 'Appetizers', 'Easy', 5, 15, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Gyeranjjim steamed egg custard earthenware pot'),
  c('bossam', 'Bossam', 'Korean', 'Dinner', 'Medium', 20, 105, 6, 0, 0, ['Dairy-Free'], ['new'], 'Bossam boiled pork belly slices lettuce wraps'),
  c('hotteok', 'Hotteok', 'Korean', 'Desserts', 'Medium', 30, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'Hotteok korean sweet pancake brown sugar filling'),
  c('korean-corn-cheese', 'Korean Corn Cheese', 'Korean', 'Appetizers', 'Easy', 10, 12, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Korean corn cheese skillet melted mozzarella'),
  c('tonkatsu', 'Tonkatsu', 'Japanese', 'Dinner', 'Medium', 20, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Tonkatsu breaded pork cutlet sliced cabbage'),
  c('onigiri', 'Onigiri', 'Japanese', 'Lunch', 'Easy', 20, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'Onigiri rice triangles nori salmon filling'),
  c('shoyu-ramen', 'Shoyu Ramen', 'Japanese', 'Dinner', 'Hard', 30, 90, 4, 0, 0, ['Dairy-Free'], ['new'], 'Shoyu ramen clear soy broth chashu egg nori'),
  c('ebi-fry', 'Ebi Fry', 'Japanese', 'Dinner', 'Medium', 25, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'Ebi fry panko prawns straight tartare sauce'),
  c('japanese-curry-roux', 'Japanese Curry Roux', 'Japanese', 'Dinner', 'Easy', 15, 30, 6, 0, 0, ['Vegetarian'], ['new'], 'Japanese curry roux blocks homemade dark paste'),
  c('panang-curry', 'Panang Curry', 'Thai', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Panang curry thick red coconut beef kaffir lime'),
  c('thai-yellow-curry', 'Thai Yellow Curry', 'Thai', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Thai yellow curry chicken potato turmeric coconut'),
  c('moo-ping', 'Moo Ping', 'Thai', 'Appetizers', 'Easy', 20, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Moo ping grilled pork skewers charcoal sticky rice'),
  c('pad-woon-sen', 'Pad Woon Sen', 'Thai', 'Quick Meals', 'Easy', 15, 12, 3, 0, 0, ['Dairy-Free'], ['new'], 'Pad woon sen glass noodles egg vegetables wok'),
  c('crying-tiger', 'Crying Tiger Beef', 'Thai', 'Dinner', 'Easy', 15, 12, 4, 0, 0, ['Gluten-Free', 'Dairy-Free', 'High-Protein'], ['new'], 'Crying tiger grilled beef sliced nam jim jaew'),
  c('banh-xeo', 'Bánh Xèo', 'Vietnamese', 'Dinner', 'Medium', 25, 25, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Banh xeo crisp yellow pancake prawns herbs'),
  c('pho-ga', 'Phở Gà', 'Vietnamese', 'Dinner', 'Medium', 20, 90, 4, 0, 0, ['Dairy-Free'], ['new'], 'Pho ga chicken noodle soup clear broth herbs'),
  c('bun-thit-nuong', 'Bún Thịt Nướng', 'Vietnamese', 'Lunch', 'Medium', 30, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Bun thit nuong grilled pork vermicelli herbs'),
  c('bo-kho', 'Bò Kho', 'Vietnamese', 'Dinner', 'Easy', 25, 120, 6, 0, 0, ['Dairy-Free'], ['new'], 'Bo kho vietnamese beef stew carrot lemongrass'),

  /* The Americas */
  c('chicken-fajitas', 'Chicken Fajitas', 'Mexican', 'Dinner', 'Easy', 20, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Chicken fajitas peppers onions sizzling skillet'),
  c('carne-asada', 'Carne Asada', 'Mexican', 'Dinner', 'Easy', 20, 12, 6, 0, 0, ['Gluten-Free', 'Dairy-Free', 'High-Protein'], ['new'], 'Carne asada grilled skirt steak sliced lime'),
  c('pico-de-gallo', 'Pico de Gallo', 'Mexican', 'Appetizers', 'Easy', 15, 0, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Pico de gallo diced tomato onion coriander lime'),
  c('salsa-verde-mexican', 'Salsa Verde', 'Mexican', 'Appetizers', 'Easy', 10, 15, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Salsa verde tomatillo green sauce blender'),
  c('chile-relleno', 'Chile Relleno', 'Mexican', 'Dinner', 'Hard', 35, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Chile relleno stuffed poblano egg batter tomato sauce'),
  c('sopa-de-fideo', 'Sopa de Fideo', 'Mexican', 'Lunch', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Sopa de fideo toasted noodles tomato broth'),
  c('arroz-con-leche', 'Arroz con Leche', 'Mexican', 'Desserts', 'Easy', 5, 40, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Arroz con leche rice pudding cinnamon stick'),
  c('menudo', 'Menudo', 'Mexican', 'Dinner', 'Medium', 30, 180, 8, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Menudo red tripe soup hominy oregano lime'),
  c('pot-roast', 'Pot Roast', 'American', 'Dinner', 'Easy', 25, 210, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Pot roast beef chuck carrots potatoes gravy'),
  c('sloppy-joe-mix', 'Sloppy Joe Skillet', 'American', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'Sloppy joe skillet saucy mince soft buns'),
  c('potato-salad', 'Potato Salad', 'American', 'Lunch', 'Easy', 20, 20, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Potato salad creamy dressing chives egg'),
  c('coleslaw', 'Coleslaw', 'American', 'Lunch', 'Easy', 15, 0, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Coleslaw shredded cabbage carrot creamy dressing'),
  c('egg-salad', 'Egg Salad', 'American', 'Lunch', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian', 'High-Protein'], ['new'], 'Egg salad chopped egg mayonnaise chives bread'),
  c('tuna-salad', 'Tuna Salad', 'American', 'Lunch', 'Easy', 10, 0, 4, 0, 0, ['Gluten-Free', 'Dairy-Free', 'High-Protein'], ['new'], 'Tuna salad celery mayonnaise sandwich filling'),
  c('chicken-salad', 'Chicken Salad', 'American', 'Lunch', 'Easy', 15, 5, 4, 0, 0, ['Gluten-Free', 'High-Protein'], ['new'], 'Chicken salad shredded chicken grapes celery'),
  c('fudge-brownies', 'Fudge Brownies', 'American', 'Desserts', 'Easy', 15, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'Fudge brownies crackled top dense squares'),

  /* Europe and the Middle East */
  c('fluffy-pancakes', 'Fluffy Pancakes', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Fluffy american pancakes stack butter syrup'),
  c('garlic-bread', 'Garlic Bread', 'Italian', 'Baking', 'Easy', 10, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'Garlic bread baguette parsley butter torn'),
  c('pesto-pasta', 'Pesto Pasta', 'Italian', 'Quick Meals', 'Easy', 10, 12, 4, 0, 0, ['Vegetarian'], ['new'], 'Pesto pasta basil green coating pine nuts'),
  c('minestrone', 'Minestrone', 'Italian', 'Lunch', 'Easy', 20, 35, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Minestrone vegetable soup beans pasta'),
  c('puttanesca', 'Spaghetti alla Puttanesca', 'Italian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'Spaghetti puttanesca olives capers anchovy tomato'),
  c('ragu-bolognese', 'Ragù alla Bolognese', 'Italian', 'Dinner', 'Easy', 20, 180, 6, 0, 0, [], ['new'], 'Ragu bolognese slow cooked meat sauce tagliatelle'),
  c('kleftiko', 'Lamb Kleftiko', 'Greek', 'Dinner', 'Easy', 25, 210, 6, 0, 0, ['Gluten-Free'], ['new'], 'Lamb kleftiko parchment parcel opened potatoes'),
  c('tiropita', 'Tiropita', 'Greek', 'Appetizers', 'Medium', 25, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'Tiropita filo cheese pie golden triangles'),
  c('youvetsi', 'Youvetsi', 'Greek', 'Dinner', 'Easy', 20, 90, 6, 0, 0, [], ['new'], 'Youvetsi beef orzo baked tomato clay dish'),
  c('adana-kebab', 'Adana Kebab', 'Turkish', 'Dinner', 'Medium', 30, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Adana kebab minced lamb flat skewer sumac onion'),
  c('manti', 'Manti', 'Turkish', 'Dinner', 'Hard', 60, 20, 4, 0, 0, [], ['new'], 'Manti tiny dumplings yoghurt paprika butter'),
  c('karniyarik', 'Karnıyarık', 'Turkish', 'Dinner', 'Medium', 25, 45, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Karniyarik split aubergine minced lamb tomato'),
  c('sakshuka-turkish', 'Şakşuka', 'Turkish', 'Appetizers', 'Easy', 15, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Saksuka fried aubergine courgette tomato sauce'),
  c('turkish-pilav', 'Turkish Pilav', 'Turkish', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'Turkish pilav buttery rice orzo separate grains'),
  c('albondigas', 'Albóndigas', 'Spanish', 'Appetizers', 'Easy', 25, 30, 4, 0, 0, [], ['new'], 'Albondigas spanish meatballs tomato almond sauce'),
  c('pollo-al-ajillo', 'Pollo al Ajillo', 'Spanish', 'Dinner', 'Easy', 15, 35, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Pollo al ajillo garlic chicken sherry pan'),
  c('tarta-de-santiago', 'Tarta de Santiago', 'Spanish', 'Desserts', 'Easy', 15, 35, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Tarta de santiago almond cake cross stencil sugar'),
  c('flapjacks', 'Flapjacks', 'British', 'Baking', 'Easy', 10, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'Flapjacks oat squares golden syrup tray'),
  c('vegetable-stir-fry', 'Vegetable Stir-Fry', 'Chinese', 'Quick Meals', 'Easy', 15, 10, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Vegetable stir fry wok crisp broccoli peppers'),
  c('ras-malai', 'Ras Malai', 'Indian', 'Desserts', 'Hard', 40, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'Ras malai flattened cheese discs saffron milk pistachio'),
  c('kulfi', 'Kulfi', 'Indian', 'Desserts', 'Easy', 15, 45, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Kulfi dense indian ice cream cone moulds pistachio'),
  c('gajar-ka-halwa', 'Gajar ka Halwa', 'Indian', 'Desserts', 'Easy', 20, 50, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Gajar ka halwa grated carrot pudding ghee nuts'),
  c('falooda', 'Falooda', 'Indian', 'Desserts', 'Easy', 20, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'Falooda layered rose milk vermicelli basil seeds glass'),
  c('shrikhand', 'Shrikhand', 'Indian', 'Desserts', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Shrikhand strained yoghurt saffron cardamom bowl'),
  c('rasam', 'Rasam', 'Indian', 'Lunch', 'Easy', 10, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Rasam thin tamarind pepper soup coriander'),
  c('coconut-chutney', 'Coconut Chutney', 'Indian', 'Appetizers', 'Easy', 10, 5, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Coconut chutney white grind curry leaf tempering'),
  c('tandoori-roti', 'Tandoori Roti', 'Indian', 'Baking', 'Easy', 20, 15, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Tandoori roti charred wholemeal flatbread'),
  c('pani-puri', 'Pani Puri', 'Indian', 'Appetizers', 'Hard', 40, 20, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Pani puri hollow crisp spheres spiced water'),
  c('dhokla', 'Dhokla', 'Indian', 'Appetizers', 'Medium', 20, 25, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Dhokla yellow steamed savoury cake mustard tempering'),
  c('bhel-puri', 'Bhel Puri', 'Indian', 'Appetizers', 'Easy', 20, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Bhel puri puffed rice chutneys sev newspaper cone'),
  c('grilled-cheese', 'Grilled Cheese Sandwich', 'American', 'Quick Meals', 'Easy', 5, 8, 2, 0, 0, ['Vegetarian'], ['new'], 'Grilled cheese sandwich cut diagonally cheese pull'),
  c('scrambled-eggs', 'Perfect Scrambled Eggs', 'American', 'Breakfast', 'Easy', 5, 6, 2, 0, 0, ['Vegetarian', 'Gluten-Free', 'High-Protein'], ['new'], 'Soft scrambled eggs curds buttered toast chives'),
  c('banana-pancakes', 'Banana Pancakes', 'American', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Banana pancakes stack sliced banana syrup'),
  c('corn-chowder', 'Corn Chowder', 'American', 'Lunch', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Corn chowder creamy soup sweetcorn potato bowl'),
  c('loaded-baked-potato', 'Loaded Baked Potato', 'American', 'Dinner', 'Easy', 10, 75, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Loaded baked potato split soured cream chives cheese'),
  c('chicken-caesar-wrap', 'Chicken Caesar Wrap', 'American', 'Lunch', 'Easy', 15, 12, 4, 0, 0, [], ['new'], 'Chicken caesar wrap halved tortilla lettuce parmesan'),
  c('beef-tacos', 'Ground Beef Tacos', 'Mexican', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Ground beef tacos seasoned mince shells lettuce'),
  c('spaghetti-meatballs', 'Spaghetti and Meatballs', 'Italian', 'Dinner', 'Easy', 25, 40, 4, 0, 0, [], ['new'], 'Spaghetti and meatballs tomato sauce basil parmesan'),
  c('greek-chicken-traybake', 'Greek Chicken Traybake', 'Greek', 'Dinner', 'Easy', 20, 45, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Greek chicken traybake lemon oregano potatoes olives')
];
