/**
 * Weekly Delight — recipe catalog, volume eighteen. Chinese.
 *
 * Forty-three Chinese recipes were already published and almost all of them
 * are the Anglo-American takeaway menu: kung pao, sweet and sour, general
 * Tso's, chow mein, orange chicken. Several of those dishes do not exist in
 * China at all.
 *
 * China has eight recognised regional cuisines and this volume tries to give
 * each of them something. Cantonese dim sum, which is a whole discipline of
 * its own and had two entries out of forty-three. The Sichuan cold dishes and
 * the Shaanxi hand-pulled noodles. The Hunanese use of fresh and pickled
 * chillies as against Sichuan's dried ones. The Jiangnan red-braising of
 * Hangzhou and Shanghai. The Hakka salt-baking. The Xinjiang cooking of the
 * north-west, which is closer to Central Asia than to Guangzhou.
 *
 * Chilli oil and XO sauce are here because a great many of the others depend
 * on them and the bought versions are a poor substitute.
 *
 * Checked against the other 1,144 first: kung pao chicken, mapo tofu, Peking
 * duck, char siu, xiao long bao, char siu bao, hong shao rou, twice-cooked
 * pork, dan dan noodles, wonton soup, hot and sour soup, congee, scallion
 * pancakes, lion's head meatballs, egg tarts, turnip cake, shui zhu fish,
 * beef chow fun and Singapore noodles were already published and are not
 * repeated. Hainanese chicken rice is published under Singaporean.
 *
 * Seventeen dim sum, cold dishes and street food; eighteen mains; fifteen
 * vegetables, noodles and rice; fifteen soups, breads, sauces and sweets.
 *
 * This volume completes the four hundred.
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
  /* Dim sum, cold dishes and street food */
  c('har-gow', 'Har Gow', 'Chinese', 'Appetizers', 'Hard', 60, 10, 6, 0, 0, ['Dairy-Free'], ['new'], 'Har gow crystal shrimp dumplings pleated steamer'),
  c('siu-mai', 'Siu Mai', 'Chinese', 'Appetizers', 'Medium', 40, 12, 6, 0, 0, ['Dairy-Free'], ['new'], 'Siu mai pork prawn open dumplings steamer'),
  c('cheung-fun', 'Cheung Fun', 'Chinese', 'Appetizers', 'Hard', 30, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'Cheung fun rice noodle rolls soy sauce'),
  c('lo-mai-gai', 'Lo Mai Gai', 'Chinese', 'Lunch', 'Medium', 40, 45, 6, 0, 0, ['Dairy-Free'], ['new'], 'Lo mai gai sticky rice lotus leaf parcel'),
  c('chicken-feet-black-bean', 'Chicken Feet in Black Bean Sauce', 'Chinese', 'Appetizers', 'Hard', 30, 150, 6, 0, 0, ['Dairy-Free'], ['new'], 'Phoenix claws chicken feet black bean dim sum'),
  c('nai-wong-bao', 'Nai Wong Bao', 'Chinese', 'Baking', 'Medium', 40, 15, 10, 0, 0, ['Vegetarian'], ['new'], 'Nai wong bao steamed custard buns split'),
  c('sheng-jian-bao', 'Sheng Jian Bao', 'Chinese', 'Appetizers', 'Hard', 60, 20, 6, 0, 0, ['Dairy-Free'], ['new'], 'Sheng jian bao pan fried pork buns crisp base'),
  c('jianbing', 'Jianbing', 'Chinese', 'Breakfast', 'Medium', 20, 15, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Jianbing beijing street crepe egg cracker'),
  c('rou-jia-mo', 'Rou Jia Mo', 'Chinese', 'Lunch', 'Medium', 40, 150, 6, 0, 0, ['Dairy-Free'], ['new'], 'Rou jia mo xian chopped pork flatbread'),
  c('liangpi', 'Liangpi', 'Chinese', 'Lunch', 'Hard', 40, 30, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Liangpi cold skin noodles chilli oil sesame'),
  c('smashed-cucumber', 'Smashed Cucumber Salad', 'Chinese', 'Appetizers', 'Easy', 15, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Pai huang gua smashed cucumber garlic vinegar'),
  c('bang-bang-chicken', 'Bang Bang Chicken', 'Chinese', 'Appetizers', 'Easy', 20, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'Bang bang chicken shredded sesame chilli sauce'),
  c('pidan-tofu', 'Century Egg with Cold Tofu', 'Chinese', 'Appetizers', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Pidan tofu century egg silken cold dish'),
  c('drunken-chicken', 'Drunken Chicken', 'Chinese', 'Appetizers', 'Medium', 25, 35, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Drunken chicken shaoxing wine cold sliced'),
  c('spicy-wontons', 'Red Oil Wontons', 'Chinese', 'Appetizers', 'Medium', 40, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'Hong you chao shou red oil wontons sichuan'),
  c('tea-eggs', 'Marbled Tea Eggs', 'Chinese', 'Appetizers', 'Easy', 10, 70, 8, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Marbled tea eggs cracked shell soy star anise'),
  c('youtiao', 'Youtiao', 'Chinese', 'Breakfast', 'Medium', 25, 20, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Youtiao chinese fried dough sticks soy milk'),

  /* Mains */
  c('dongpo-rou', 'Dongpo Rou', 'Chinese', 'Dinner', 'Medium', 30, 180, 6, 0, 0, ['Dairy-Free'], ['new'], 'Dongpo rou braised pork belly square hangzhou'),
  c('yuxiang-rousi', 'Yuxiang Rousi', 'Chinese', 'Dinner', 'Medium', 30, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'Yuxiang rousi fish fragrant shredded pork'),
  c('zhajiangmian', 'Zhajiangmian', 'Chinese', 'Dinner', 'Easy', 20, 35, 4, 0, 0, ['Dairy-Free'], ['new'], 'Zhajiangmian beijing noodles fried bean sauce'),
  c('la-zi-ji', 'La Zi Ji', 'Chinese', 'Dinner', 'Medium', 30, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'La zi ji chongqing chicken dried chillies'),
  c('duo-jiao-yu-tou', 'Duo Jiao Yu Tou', 'Chinese', 'Dinner', 'Medium', 25, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'Duo jiao yu tou hunan fish head chopped chilli'),
  c('beggars-chicken', 'Beggar\'s Chicken', 'Chinese', 'Dinner', 'Hard', 50, 180, 6, 0, 0, ['Dairy-Free'], ['new'], 'Beggars chicken clay wrapped lotus leaf hangzhou'),
  c('white-cut-chicken', 'White Cut Chicken', 'Chinese', 'Dinner', 'Medium', 20, 45, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Bai qie ji white cut chicken ginger scallion oil'),
  c('soy-sauce-chicken', 'Soy Sauce Chicken', 'Chinese', 'Dinner', 'Medium', 20, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'See yau gai soy sauce chicken glossy cantonese'),
  c('three-cup-chicken', 'Three Cup Chicken', 'Taiwanese', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'San bei ji three cup chicken basil clay pot'),
  c('salt-baked-chicken', 'Salt Baked Chicken', 'Chinese', 'Dinner', 'Hard', 30, 90, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Hakka salt baked chicken coarse salt crust'),
  c('da-pan-ji', 'Da Pan Ji', 'Chinese', 'Dinner', 'Medium', 30, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'Da pan ji xinjiang big plate chicken potato noodles'),
  c('braised-beef-brisket', 'Braised Beef Brisket', 'Chinese', 'Dinner', 'Easy', 25, 180, 6, 0, 0, ['Dairy-Free'], ['new'], 'Cantonese braised beef brisket daikon clay pot'),
  c('sweet-sour-spare-ribs', 'Sweet and Sour Spare Ribs', 'Chinese', 'Dinner', 'Medium', 20, 60, 4, 0, 0, ['Dairy-Free'], ['new'], 'Tang cu pai gu shanghai sweet sour ribs glossy'),
  c('steamed-ribs-black-bean', 'Steamed Ribs with Black Bean', 'Chinese', 'Dinner', 'Easy', 25, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'Steamed pork ribs black bean garlic dim sum'),
  c('siu-yuk', 'Siu Yuk', 'Chinese', 'Dinner', 'Hard', 30, 90, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Siu yuk crispy roast pork belly bubbled skin'),
  c('mei-cai-kou-rou', 'Mei Cai Kou Rou', 'Chinese', 'Dinner', 'Hard', 40, 150, 6, 0, 0, ['Dairy-Free'], ['new'], 'Mei cai kou rou hakka pork preserved mustard greens'),
  c('crab-ginger-scallion', 'Ginger and Scallion Crab', 'Chinese', 'Dinner', 'Medium', 30, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'Ginger scallion crab cantonese wok whole crab'),
  c('steamed-whole-fish', 'Steamed Whole Fish', 'Chinese', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Cantonese steamed whole fish ginger scallion hot oil'),

  /* Vegetables, noodles and rice */
  c('dry-fried-green-beans', 'Dry-Fried Green Beans', 'Chinese', 'Dinner', 'Medium', 15, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'Gan bian si ji dou blistered green beans pork'),
  c('di-san-xian', 'Di San Xian', 'Chinese', 'Dinner', 'Easy', 20, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Di san xian potato aubergine pepper dongbei'),
  c('stir-fried-water-spinach', 'Stir-Fried Water Spinach', 'Chinese', 'Dinner', 'Easy', 10, 5, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Kong xin cai water spinach fermented bean curd wok'),
  c('choy-sum-oyster-sauce', 'Choy Sum in Oyster Sauce', 'Chinese', 'Dinner', 'Easy', 10, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'Choy sum blanched oyster sauce green stems'),
  c('home-style-tofu', 'Home-Style Tofu', 'Chinese', 'Dinner', 'Medium', 20, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'Jia chang dou fu home style braised tofu triangles'),
  c('yong-tau-foo', 'Yong Tau Foo', 'Chinese', 'Dinner', 'Medium', 40, 30, 6, 0, 0, ['Dairy-Free'], ['new'], 'Hakka yong tau foo stuffed tofu peppers'),
  c('hot-dry-noodles', 'Hot Dry Noodles', 'Chinese', 'Lunch', 'Easy', 15, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Re gan mian wuhan hot dry noodles sesame paste'),
  c('biang-biang-noodles', 'Biang Biang Noodles', 'Chinese', 'Lunch', 'Hard', 40, 10, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Biang biang noodles wide hand pulled chilli oil'),
  c('yangzhou-fried-rice', 'Yangzhou Fried Rice', 'Chinese', 'Dinner', 'Easy', 20, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Yangzhou fried rice prawns char siu peas egg'),
  c('claypot-rice', 'Claypot Rice', 'Chinese', 'Dinner', 'Medium', 25, 35, 4, 0, 0, ['Dairy-Free'], ['new'], 'Bo zai fan claypot rice sausage crisp crust'),
  c('zongzi', 'Zongzi', 'Chinese', 'Lunch', 'Hard', 60, 240, 10, 0, 0, ['Dairy-Free'], ['new'], 'Zongzi bamboo leaf sticky rice parcels string'),
  c('vinegar-cabbage', 'Vinegar Cabbage', 'Chinese', 'Dinner', 'Easy', 10, 10, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Cu liu bai cai hand torn cabbage vinegar wok'),
  c('lotus-root-stir-fry', 'Stir-Fried Lotus Root', 'Chinese', 'Dinner', 'Easy', 15, 10, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Stir fried lotus root slices celery wok crisp'),
  c('wood-ear-salad', 'Wood Ear Salad', 'Chinese', 'Appetizers', 'Easy', 15, 5, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Liang ban mu er wood ear mushroom cold salad'),
  c('hot-and-sour-potato', 'Hot and Sour Potato Slivers', 'Chinese', 'Dinner', 'Easy', 15, 8, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Suan la tu dou si shredded potato chilli vinegar'),

  /* Soups, breads, sauces and sweets */
  c('west-lake-beef-soup', 'West Lake Beef Soup', 'Chinese', 'Lunch', 'Easy', 20, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'West lake beef soup thick coriander egg white'),
  c('egg-drop-soup', 'Egg Drop Soup', 'Chinese', 'Lunch', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Egg drop soup ribbons sweetcorn spring onion'),
  c('winter-melon-soup', 'Winter Melon Soup', 'Chinese', 'Lunch', 'Easy', 20, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'Winter melon soup pork ribs dried shrimp clear'),
  c('lotus-root-rib-soup', 'Lotus Root and Pork Rib Soup', 'Chinese', 'Lunch', 'Easy', 20, 120, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Lotus root pork rib soup wuhan clay pot'),
  c('mantou', 'Mantou', 'Chinese', 'Baking', 'Medium', 25, 20, 12, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Mantou steamed white buns smooth basket'),
  c('shao-bing', 'Shao Bing', 'Chinese', 'Baking', 'Medium', 35, 20, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Shao bing sesame layered flatbread northern china'),
  c('chilli-oil', 'Sichuan Chilli Oil', 'Chinese', 'Appetizers', 'Easy', 15, 15, 12, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Sichuan chilli oil jar red sediment spices'),
  c('xo-sauce', 'XO Sauce', 'Chinese', 'Appetizers', 'Medium', 40, 40, 12, 0, 0, ['Dairy-Free'], ['new'], 'XO sauce dried scallop shrimp chilli jar'),
  c('tangyuan', 'Tangyuan', 'Chinese', 'Desserts', 'Medium', 40, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'Tangyuan glutinous rice balls black sesame bowl'),
  c('red-bean-soup', 'Red Bean Soup', 'Chinese', 'Desserts', 'Easy', 10, 90, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Hong dou tang red bean soup tangerine peel'),
  c('mango-pomelo-sago', 'Mango Pomelo Sago', 'Chinese', 'Desserts', 'Easy', 25, 15, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Mango pomelo sago hong kong dessert glass'),
  c('eight-treasure-rice', 'Eight Treasure Rice', 'Chinese', 'Desserts', 'Medium', 35, 60, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Ba bao fan eight treasure rice candied fruit dome'),
  c('sesame-balls', 'Sesame Balls', 'Chinese', 'Desserts', 'Medium', 30, 20, 12, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Jian dui sesame balls red bean hollow fried'),
  c('almond-tofu', 'Almond Tofu', 'Chinese', 'Desserts', 'Easy', 15, 10, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Xing ren dou fu almond tofu set cubes fruit'),
  c('hong-kong-egg-waffle', 'Hong Kong Egg Waffle', 'Chinese', 'Desserts', 'Medium', 20, 25, 6, 0, 0, ['Vegetarian'], ['new'], 'Gai daan jai hong kong egg waffle bubble street')
];
