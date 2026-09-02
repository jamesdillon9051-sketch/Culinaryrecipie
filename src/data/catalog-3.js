/**
 * CulinaryVault — recipe catalog, volume three.
 *
 * Another 200 widely-searched dishes, with no overlap against ./catalog.js or
 * ./catalog-2.js. Same row shape; the build concatenates all three files and
 * validates that every slug is unique and has matching detail content.
 *
 * This volume leans on the cuisines the first two under-served — Persian,
 * Lebanese, Georgian, Taiwanese, the Nordics, the Alps, the Low Countries and
 * the Andes — rather than adding more of what is already well covered.
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
  /* ---------------------------------------------------------- Italian (9) */
  c('ragu-napoletano', 'Ragù Napoletano', 'Italian', 'Dinner', 'Medium', 25, 240, 8, 4.8, 1422, [], ['editors'], 'Ragu napoletano'),
  c('pasta-e-fagioli', 'Pasta e Fagioli', 'Italian', 'Dinner', 'Easy', 15, 45, 6, 4.7, 1866, ['Vegetarian'], [], 'Pasta e fagioli'),
  c('vitello-tonnato', 'Vitello Tonnato', 'Italian', 'Appetizers', 'Medium', 30, 90, 6, 4.6, 844, ['Gluten-Free'], [], 'Vitello tonnato'),
  c('focaccia-genovese', 'Focaccia Genovese', 'Italian', 'Baking', 'Easy', 25, 25, 12, 4.9, 3288, ['Vegan'], ['trending'], 'Focaccia'),
  c('gnocchi-alla-sorrentina', 'Gnocchi alla Sorrentina', 'Italian', 'Dinner', 'Medium', 40, 30, 4, 4.8, 2011, ['Vegetarian'], [], 'Gnocchi sorrentina'),
  c('pasta-alla-gricia', 'Pasta alla Gricia', 'Italian', 'Quick Meals', 'Easy', 5, 20, 4, 4.7, 1288, [], [], 'Pasta alla gricia'),
  c('caponata', 'Sicilian Caponata', 'Italian', 'Appetizers', 'Easy', 20, 40, 6, 4.7, 1144, ['Vegan', 'Gluten-Free'], [], 'Caponata'),
  c('zeppole', 'Zeppole', 'Italian', 'Desserts', 'Medium', 25, 20, 16, 4.7, 966, ['Vegetarian'], [], 'Zeppole'),
  c('panettone', 'Panettone', 'Italian', 'Baking', 'Hard', 60, 50, 12, 4.6, 1422, ['Vegetarian'], [], 'Panettone'),

  /* ----------------------------------------------------------- French (9) */
  c('duck-confit', 'Duck Confit', 'French', 'Dinner', 'Medium', 30, 150, 4, 4.8, 1788, ['Gluten-Free'], [], 'Confit de canard'),
  c('soupe-au-pistou', 'Soupe au Pistou', 'French', 'Dinner', 'Easy', 25, 45, 6, 4.7, 1188, ['Vegetarian'], [], 'Soupe au pistou'),
  c('coquilles-saint-jacques', 'Coquilles Saint-Jacques', 'French', 'Appetizers', 'Medium', 25, 20, 4, 4.7, 922, ['Gluten-Free'], [], 'Coquilles saint jacques'),
  c('salade-lyonnaise', 'Salade Lyonnaise', 'French', 'Lunch', 'Easy', 15, 10, 4, 4.6, 788, [], [], 'Salade lyonnaise'),
  c('canele', 'Canelés de Bordeaux', 'French', 'Baking', 'Hard', 30, 60, 12, 4.7, 1322, ['Vegetarian'], [], 'Caneles bordeaux'),
  c('gateau-basque', 'Gâteau Basque', 'French', 'Desserts', 'Medium', 35, 45, 10, 4.6, 744, ['Vegetarian'], [], 'Gateau basque'),

  /* --------------------------------------------------------- Japanese (8) */
  c('katsu-curry', 'Katsu Curry', 'Japanese', 'Dinner', 'Medium', 25, 40, 4, 4.9, 4288, [], ['trending'], 'Katsu curry'),
  c('miso-ramen', 'Miso Ramen', 'Japanese', 'Dinner', 'Hard', 40, 90, 4, 4.8, 3122, [], ['editors'], 'Miso ramen'),
  c('unagi-don', 'Unagi Don', 'Japanese', 'Dinner', 'Medium', 15, 20, 2, 4.7, 1044, ['Dairy-Free'], [], 'Unagi don eel rice'),
  c('nikujaga', 'Nikujaga', 'Japanese', 'Dinner', 'Easy', 15, 35, 4, 4.6, 866, ['Dairy-Free'], [], 'Nikujaga'),
  c('gyudon', 'Gyudon', 'Japanese', 'Quick Meals', 'Easy', 10, 15, 4, 4.7, 1866, ['Dairy-Free'], [], 'Gyudon beef bowl'),
  c('yakisoba', 'Yakisoba', 'Japanese', 'Quick Meals', 'Easy', 15, 12, 4, 4.7, 2144, ['Dairy-Free'], [], 'Yakisoba'),
  c('castella', 'Castella Cake', 'Japanese', 'Baking', 'Medium', 25, 50, 10, 4.7, 1188, ['Vegetarian'], [], 'Castella cake'),

  /* ---------------------------------------------------------- Chinese (8) */
  c('mapo-eggplant', 'Mapo Eggplant', 'Chinese', 'Dinner', 'Easy', 15, 20, 4, 4.7, 1322, ['Vegan'], [], 'Mapo eggplant'),
  c('scallion-pancakes', 'Scallion Pancakes', 'Chinese', 'Appetizers', 'Medium', 40, 20, 6, 4.8, 2211, ['Vegan'], [], 'Scallion pancake'),
  c('beef-chow-fun', 'Beef Chow Fun', 'Chinese', 'Dinner', 'Medium', 20, 12, 4, 4.7, 1644, ['Dairy-Free'], [], 'Beef chow fun'),
  c('lion-head-meatballs', "Lion's Head Meatballs", 'Chinese', 'Dinner', 'Medium', 25, 60, 6, 4.6, 788, ['Dairy-Free'], [], 'Shizitou pork meatballs'),
  c('egg-tarts', 'Hong Kong Egg Tarts', 'Chinese', 'Desserts', 'Medium', 40, 25, 12, 4.8, 2044, ['Vegetarian'], [], 'Hong kong egg tart'),
  c('wonton-noodle-soup', 'Wonton Noodle Soup', 'Chinese', 'Lunch', 'Medium', 35, 20, 4, 4.8, 2311, ['Dairy-Free'], [], 'Wonton noodle soup'),

  /* ----------------------------------------------------------- Indian (9) */
  c('lamb-rogan-josh', 'Lamb Rogan Josh', 'Indian', 'Dinner', 'Medium', 25, 90, 6, 4.8, 2866, ['Gluten-Free'], ['editors'], 'Rogan josh'),
  c('dal-makhani', 'Dal Makhani', 'Indian', 'Dinner', 'Medium', 20, 120, 6, 4.9, 3644, ['Vegetarian', 'Gluten-Free'], ['trending'], 'Dal makhani'),
  c('hyderabadi-biryani', 'Hyderabadi Biryani', 'Indian', 'Dinner', 'Hard', 60, 60, 8, 4.9, 4122, ['Gluten-Free'], [], 'Hyderabadi biryani'),
  c('vada-pav', 'Vada Pav', 'Indian', 'Quick Meals', 'Easy', 25, 20, 6, 4.7, 1866, ['Vegetarian'], [], 'Vada pav'),
  c('masala-chai', 'Masala Chai', 'Indian', 'Drinks', 'Easy', 5, 10, 4, 4.8, 3122, ['Vegetarian', 'Gluten-Free'], [], 'Masala chai'),
  c('misal-pav', 'Misal Pav', 'Indian', 'Appetizers', 'Medium', 30, 45, 6, 4.7, 1866, ['Vegetarian', 'Vegan'], ['trending'], 'Misal pav'),
  c('naan', 'Garlic Naan', 'Indian', 'Baking', 'Easy', 90, 10, 8, 4.8, 3011, ['Vegetarian'], [], 'Naan bread'),

  /* ---------------------------------------------------------- Mexican (8) */
  c('enchiladas-verdes', 'Enchiladas Verdes', 'Mexican', 'Dinner', 'Easy', 25, 25, 4, 4.8, 2644, ['Gluten-Free'], [], 'Enchiladas verdes'),
  c('aguachile', 'Aguachile', 'Mexican', 'Appetizers', 'Easy', 20, 0, 4, 4.7, 1044, ['Gluten-Free', 'Dairy-Free'], [], 'Aguachile'),
  c('horchata', 'Horchata', 'Mexican', 'Drinks', 'Easy', 15, 0, 6, 4.7, 1788, ['Vegan', 'Gluten-Free'], [], 'Horchata'),

  /* --------------------------------------------------------- American (16) */
  c('pulled-pork', 'Carolina Pulled Pork', 'American', 'Dinner', 'Medium', 25, 360, 10, 4.9, 4122, ['Gluten-Free'], ['editors'], 'Pulled pork'),
  c('brisket', 'Texas Smoked Brisket', 'American', 'Dinner', 'Hard', 30, 600, 12, 4.9, 3644, ['Gluten-Free'], [], 'Smoked brisket'),
  c('cioppino', 'Cioppino', 'American', 'Dinner', 'Medium', 25, 40, 6, 4.8, 1866, ['Dairy-Free'], [], 'Cioppino'),
  c('sloppy-joes', 'Sloppy Joes', 'American', 'Quick Meals', 'Easy', 10, 25, 6, 4.6, 1866, [], [], 'Sloppy joe sandwich'),
  c('corn-dogs', 'Corn Dogs', 'American', 'Quick Meals', 'Easy', 15, 15, 8, 4.6, 1544, [], [], 'Corn dog'),
  c('philly-soft-pretzel', 'Philadelphia Soft Pretzels', 'American', 'Baking', 'Medium', 90, 15, 8, 4.7, 1322, ['Vegetarian'], [], 'Soft pretzel'),
  c('boston-cream-pie', 'Boston Cream Pie', 'American', 'Desserts', 'Medium', 40, 30, 10, 4.7, 1644, ['Vegetarian'], [], 'Boston cream pie'),

  /* ---------------------------------------------------------- British (6) */
  c('steak-and-ale-pie', 'Steak and Ale Pie', 'British', 'Dinner', 'Medium', 35, 150, 6, 4.8, 2144, [], [], 'Steak and ale pie'),
  c('trifle', 'English Trifle', 'British', 'Desserts', 'Easy', 40, 0, 10, 4.7, 1544, ['Vegetarian'], [], 'Trifle'),
  c('crumpets', 'Crumpets', 'British', 'Baking', 'Medium', 90, 15, 10, 4.7, 1322, ['Vegetarian'], [], 'Crumpets'),
  c('ploughmans-lunch', "Ploughman's Lunch", 'British', 'Lunch', 'Easy', 15, 0, 2, 4.5, 644, ['Vegetarian'], [], 'Ploughmans lunch'),

  /* ------------------------------------------------------------ Irish (4) */
  c('irish-stew', 'Irish Stew', 'Irish', 'Dinner', 'Easy', 20, 120, 6, 4.8, 2144, ['Gluten-Free'], ['editors'], 'Irish stew'),
  c('soda-bread', 'Irish Soda Bread', 'Irish', 'Baking', 'Easy', 10, 45, 10, 4.8, 2388, ['Vegetarian'], [], 'Irish soda bread'),
  c('colcannon', 'Colcannon', 'Irish', 'Dinner', 'Easy', 15, 25, 6, 4.7, 1044, ['Vegetarian', 'Gluten-Free'], [], 'Colcannon'),
  c('boxty', 'Boxty', 'Irish', 'Breakfast', 'Easy', 20, 15, 4, 4.6, 744, ['Vegetarian'], [], 'Boxty potato pancake'),

  /* --------------------------------------------------------- Scottish (3) */
  c('cullen-skink', 'Cullen Skink', 'Scottish', 'Lunch', 'Easy', 15, 30, 4, 4.7, 866, ['Gluten-Free'], [], 'Cullen skink'),
  c('haggis-neeps-tatties', 'Haggis, Neeps and Tatties', 'Scottish', 'Dinner', 'Easy', 15, 60, 4, 4.6, 1188, [], [], 'Haggis neeps tatties'),
  c('cranachan', 'Cranachan', 'Scottish', 'Desserts', 'Easy', 20, 5, 4, 4.7, 944, ['Vegetarian', 'Gluten-Free'], [], 'Cranachan'),

  /* ------------------------------------------------------------ Welsh (2) */
  c('cawl', 'Welsh Cawl', 'Welsh', 'Dinner', 'Easy', 25, 120, 6, 4.6, 622, ['Gluten-Free'], [], 'Cawl cymreig lamb broth'),
  c('bara-brith', 'Bara Brith', 'Welsh', 'Baking', 'Easy', 20, 75, 10, 4.6, 588, ['Vegetarian'], [], 'Bara brith'),

  /* ----------------------------------------------------------- German (4) */
  c('schnitzel', 'German Pork Schnitzel', 'German', 'Dinner', 'Easy', 20, 10, 4, 4.9, 4288, [], ['trending'], 'Wiener schnitzel'),
  c('bratwurst', 'Bratwurst with Sauerkraut', 'German', 'Dinner', 'Easy', 10, 25, 4, 4.7, 1544, ['Gluten-Free'], [], 'Bratwurst sauerkraut'),
  c('pretzel-brezel', 'Bavarian Brezel', 'German', 'Baking', 'Medium', 90, 15, 8, 4.7, 1422, ['Vegan'], [], 'Bavarian pretzel'),

  /* --------------------------------------------------------- Austrian (3) */
  c('apple-strudel', 'Apple Strudel', 'Austrian', 'Desserts', 'Medium', 40, 45, 8, 4.8, 2388, ['Vegetarian'], [], 'Apfelstrudel'),
  c('sachertorte', 'Sachertorte', 'Austrian', 'Desserts', 'Hard', 45, 50, 12, 4.8, 1866, ['Vegetarian'], [], 'Sachertorte'),
  c('kaiserschmarrn', 'Kaiserschmarrn', 'Austrian', 'Desserts', 'Easy', 15, 20, 4, 4.7, 1144, ['Vegetarian'], [], 'Kaiserschmarrn'),

  /* ------------------------------------------------------------ Swiss (3) */
  c('cheese-fondue', 'Cheese Fondue', 'Swiss', 'Dinner', 'Easy', 15, 20, 4, 4.8, 2644, ['Vegetarian'], ['trending'], 'Cheese fondue'),
  c('rosti', 'Rösti', 'Swiss', 'Breakfast', 'Easy', 20, 25, 4, 4.7, 1322, ['Vegetarian', 'Gluten-Free'], [], 'Rosti'),
  c('raclette', 'Raclette', 'Swiss', 'Dinner', 'Easy', 20, 15, 4, 4.7, 1044, ['Vegetarian', 'Gluten-Free'], [], 'Raclette'),

  /* ----------------------------------------------------------- Belgian (3) */
  c('belgian-waffles', 'Belgian Waffles', 'Belgian', 'Breakfast', 'Easy', 20, 20, 6, 4.8, 3288, ['Vegetarian'], [], 'Belgian waffles'),
  c('carbonnade-flamande', 'Carbonnade Flamande', 'Belgian', 'Dinner', 'Medium', 25, 150, 6, 4.8, 1422, [], [], 'Carbonnade flamande'),
  c('belgian-frites', 'Belgian Frites', 'Belgian', 'Appetizers', 'Medium', 20, 25, 4, 4.8, 2144, ['Vegan', 'Gluten-Free'], [], 'Belgian frites'),

  /* ------------------------------------------------------------ Dutch (3) */
  c('stroopwafel', 'Stroopwafels', 'Dutch', 'Desserts', 'Hard', 45, 25, 12, 4.7, 1644, ['Vegetarian'], [], 'Stroopwafel'),
  c('bitterballen', 'Bitterballen', 'Dutch', 'Appetizers', 'Medium', 40, 20, 20, 4.7, 1044, [], [], 'Bitterballen'),
  c('poffertjes', 'Poffertjes', 'Dutch', 'Desserts', 'Easy', 60, 15, 6, 4.6, 866, ['Vegetarian'], [], 'Poffertjes'),

  /* ----------------------------------------------------------- Danish (3) */
  c('smorrebrod', 'Smørrebrød', 'Danish', 'Lunch', 'Easy', 25, 0, 4, 4.7, 1188, [], [], 'Smorrebrod'),
  c('danish-pastry', 'Danish Pastries', 'Danish', 'Baking', 'Hard', 120, 25, 12, 4.8, 2011, ['Vegetarian'], [], 'Danish pastry'),
  c('frikadeller', 'Frikadeller', 'Danish', 'Dinner', 'Easy', 20, 20, 4, 4.6, 788, [], [], 'Frikadeller'),

  /* -------------------------------------------------------- Norwegian (2) */
  c('norwegian-fish-soup', 'Norwegian Fish Soup', 'Norwegian', 'Dinner', 'Easy', 20, 30, 4, 4.6, 644, ['Gluten-Free'], [], 'Norwegian fish soup'),
  c('krumkake', 'Krumkake', 'Norwegian', 'Desserts', 'Medium', 25, 20, 20, 4.6, 522, ['Vegetarian'], [], 'Krumkake'),

  /* ---------------------------------------------------------- Finnish (2) */
  c('karelian-pies', 'Karelian Pies', 'Finnish', 'Baking', 'Medium', 45, 25, 16, 4.6, 588, ['Vegetarian'], [], 'Karelian pie'),
  c('salmon-soup-lohikeitto', 'Lohikeitto', 'Finnish', 'Dinner', 'Easy', 15, 25, 4, 4.7, 944, ['Gluten-Free'], [], 'Lohikeitto salmon soup'),

  /* ---------------------------------------------------------- Swedish (3) */
  c('prinsesstarta', 'Prinsesstårta', 'Swedish', 'Desserts', 'Hard', 60, 30, 12, 4.7, 1044, ['Vegetarian'], [], 'Princess cake'),
  c('toast-skagen', 'Toast Skagen', 'Swedish', 'Appetizers', 'Easy', 15, 5, 4, 4.7, 744, [], [], 'Toast skagen'),

  /* ----------------------------------------------------------- Polish (3) */
  c('bigos', 'Bigos', 'Polish', 'Dinner', 'Medium', 30, 150, 8, 4.6, 866, ['Gluten-Free'], [], 'Bigos'),
  c('zurek', 'Żurek', 'Polish', 'Lunch', 'Medium', 20, 45, 6, 4.6, 644, [], [], 'Zurek soup'),

  /* ------------------------------------------------------------ Czech (2) */
  c('svickova', 'Svíčková', 'Czech', 'Dinner', 'Medium', 30, 120, 6, 4.7, 788, [], [], 'Svickova'),
  c('trdelnik', 'Trdelník', 'Czech', 'Desserts', 'Medium', 90, 20, 8, 4.6, 966, ['Vegetarian'], [], 'Trdelnik'),

  /* ---------------------------------------------------------- Russian (3) */
  c('pelmeni', 'Pelmeni', 'Russian', 'Dinner', 'Medium', 60, 15, 6, 4.7, 1188, [], [], 'Pelmeni'),

  /* -------------------------------------------------------- Hungarian (2) */
  c('chicken-paprikash', 'Chicken Paprikash', 'Hungarian', 'Dinner', 'Easy', 15, 45, 4, 4.8, 1866, ['Gluten-Free'], [], 'Chicken paprikash'),
  c('langos', 'Lángos', 'Hungarian', 'Quick Meals', 'Easy', 75, 15, 6, 4.7, 1144, ['Vegetarian'], [], 'Langos'),

  /* --------------------------------------------------------- Romanian (2) */
  c('sarmale', 'Sarmale', 'Romanian', 'Dinner', 'Medium', 45, 150, 8, 4.7, 744, [], [], 'Sarmale'),
  c('mici', 'Mici', 'Romanian', 'Dinner', 'Easy', 30, 15, 6, 4.6, 588, ['Gluten-Free', 'Dairy-Free'], [], 'Mititei grill romanian'),

  /* --------------------------------------------------------- Georgian (3) */
  c('khachapuri', 'Adjaruli Khachapuri', 'Georgian', 'Baking', 'Medium', 90, 20, 4, 4.9, 2644, ['Vegetarian'], ['trending'], 'Khachapuri'),
  c('khinkali', 'Khinkali', 'Georgian', 'Dinner', 'Hard', 60, 15, 6, 4.8, 1322, [], [], 'Khinkali'),
  c('lobio', 'Lobio', 'Georgian', 'Dinner', 'Easy', 15, 60, 6, 4.6, 522, ['Vegan', 'Gluten-Free'], [], 'Lobio georgian beans'),

  /* ----------------------------------------------------------- Greek (4) */
  c('greek-lemon-potatoes', 'Greek Lemon Potatoes', 'Greek', 'Dinner', 'Easy', 15, 70, 6, 4.8, 2144, ['Vegan', 'Gluten-Free'], [], 'Greek lemon potatoes'),
  c('dolmades', 'Dolmades', 'Greek', 'Appetizers', 'Medium', 45, 45, 8, 4.6, 1044, ['Vegan', 'Gluten-Free'], [], 'Dolmades'),
  c('greek-yogurt-honey', 'Greek Yoghurt with Honey and Walnuts', 'Greek', 'Breakfast', 'Easy', 5, 0, 2, 4.7, 1422, ['Vegetarian', 'Gluten-Free'], [], 'Greek yogurt honey walnuts'),

  /* --------------------------------------------------------- Turkish (4) */
  c('iskender-kebab', 'İskender Kebab', 'Turkish', 'Dinner', 'Medium', 30, 25, 4, 4.8, 1644, [], [], 'Iskender kebab'),
  c('turkish-lentil-soup', 'Turkish Lentil Soup', 'Turkish', 'Lunch', 'Easy', 15, 35, 6, 4.8, 2144, ['Vegan', 'Gluten-Free'], [], 'Mercimek corbasi'),
  c('kunefe', 'Künefe', 'Turkish', 'Desserts', 'Medium', 20, 25, 6, 4.8, 1322, ['Vegetarian'], [], 'Kunefe'),

  /* -------------------------------------------------------- Lebanese (5) */
  c('shish-taouk', 'Shish Taouk', 'Lebanese', 'Dinner', 'Easy', 20, 15, 4, 4.8, 2011, ['Gluten-Free'], [], 'Shish taouk'),
  c('moutabal', 'Moutabal', 'Lebanese', 'Appetizers', 'Easy', 15, 25, 6, 4.7, 1144, ['Vegan', 'Gluten-Free'], [], 'Moutabal baba ganoush'),
  c('maamoul', 'Maamoul', 'Lebanese', 'Desserts', 'Medium', 50, 20, 20, 4.6, 866, ['Vegetarian'], [], 'Maamoul'),

  /* --------------------------------------------------------- Persian (5) */
  c('ghormeh-sabzi', 'Ghormeh Sabzi', 'Persian', 'Dinner', 'Medium', 30, 150, 6, 4.8, 1544, ['Gluten-Free'], ['editors'], 'Ghormeh sabzi'),
  c('fesenjan', 'Fesenjan', 'Persian', 'Dinner', 'Medium', 25, 120, 6, 4.7, 1044, ['Gluten-Free'], [], 'Fesenjan'),
  c('tahdig', 'Tahdig', 'Persian', 'Dinner', 'Medium', 20, 60, 6, 4.8, 1866, ['Vegetarian', 'Gluten-Free'], ['trending'], 'Tahdig persian rice'),
  c('joojeh-kabab', 'Joojeh Kabab', 'Persian', 'Dinner', 'Easy', 25, 20, 4, 4.8, 1322, ['Gluten-Free'], [], 'Joojeh kabab'),
  c('ash-reshteh', 'Ash Reshteh', 'Persian', 'Lunch', 'Medium', 30, 75, 6, 4.7, 788, ['Vegetarian'], [], 'Ash reshteh'),

  /* -------------------------------------------------------- Israeli (3) */
  c('sabich', 'Sabich', 'Israeli', 'Lunch', 'Easy', 25, 15, 4, 4.7, 1188, ['Vegetarian'], [], 'Sabich sandwich'),
  c('malabi', 'Malabi', 'Israeli', 'Desserts', 'Easy', 15, 10, 4, 4.6, 744, ['Vegetarian', 'Gluten-Free'], [], 'Malabi'),
  c('israeli-couscous-salad', 'Israeli Couscous Salad', 'Israeli', 'Healthy', 'Easy', 15, 15, 4, 4.6, 966, ['Vegan'], [], 'Israeli couscous salad'),

  /* -------------------------------------------------- Middle Eastern (3) */
  c('musakhan', 'Musakhan', 'Middle Eastern', 'Dinner', 'Medium', 25, 60, 6, 4.7, 866, [], [], 'Musakhan'),
  c('harees', 'Harees', 'Middle Eastern', 'Dinner', 'Easy', 20, 180, 6, 4.5, 488, ['Dairy-Free'], [], 'Harees'),
  c('knafeh-nabulsi', 'Knafeh Nabulsi', 'Middle Eastern', 'Desserts', 'Medium', 25, 30, 8, 4.8, 1544, ['Vegetarian'], [], 'Knafeh'),

  /* -------------------------------------------------------- Moroccan (4) */
  c('chicken-tagine-olives', 'Chicken Tagine with Olives', 'Moroccan', 'Dinner', 'Medium', 25, 75, 6, 4.8, 2144, ['Gluten-Free'], ['editors'], 'Chicken tagine olives'),
  c('msemen', 'Msemen', 'Moroccan', 'Breakfast', 'Medium', 60, 20, 8, 4.7, 866, ['Vegan'], [], 'Msemen'),
  c('moroccan-mint-tea', 'Moroccan Mint Tea', 'Moroccan', 'Drinks', 'Easy', 5, 10, 4, 4.8, 1866, ['Vegan', 'Gluten-Free'], [], 'Moroccan mint tea'),

  /* -------------------------------------------------------- Egyptian (2) */
  c('molokhia', 'Molokhia', 'Egyptian', 'Dinner', 'Easy', 15, 40, 6, 4.6, 622, ['Gluten-Free'], [], 'Mulukhiyah soup bowl'),

  /* -------------------------------------------------------- Tunisian (2) */
  c('brik', 'Tunisian Brik', 'Tunisian', 'Appetizers', 'Easy', 20, 10, 4, 4.6, 588, [], [], 'Tunisian brik'),
  c('shakshuka-tunisian', 'Merguez Shakshuka', 'Tunisian', 'Breakfast', 'Easy', 15, 25, 4, 4.7, 1144, ['Gluten-Free'], [], 'Merguez shakshuka'),

  /* --------------------------------------------------------- Spanish (5) */
  c('croquetas', 'Jamón Croquetas', 'Spanish', 'Appetizers', 'Medium', 40, 20, 20, 4.8, 1866, [], [], 'Croquetas'),
  c('crema-catalana', 'Crema Catalana', 'Spanish', 'Desserts', 'Medium', 20, 25, 6, 4.7, 1144, ['Vegetarian', 'Gluten-Free'], [], 'Crema catalana'),

  /* ------------------------------------------------------ Portuguese (3) */
  c('francesinha', 'Francesinha', 'Portuguese', 'Dinner', 'Medium', 25, 30, 2, 4.7, 1044, [], [], 'Francesinha'),
  c('arroz-de-marisco', 'Arroz de Marisco', 'Portuguese', 'Dinner', 'Medium', 25, 40, 6, 4.7, 866, ['Dairy-Free'], [], 'Arroz de marisco'),
  c('bifana', 'Bifana', 'Portuguese', 'Quick Meals', 'Easy', 15, 15, 4, 4.7, 1188, [], [], 'Bifana'),

  /* ------------------------------------------------------------ Thai (4) */

  /* ------------------------------------------------------ Vietnamese (3) */
  c('ca-kho-to', 'Cá Kho Tộ', 'Vietnamese', 'Dinner', 'Medium', 20, 45, 4, 4.7, 866, ['Dairy-Free'], [], 'Vietnamese caramelised fish clay pot'),

  /* ----------------------------------------------------------- Korean (4) */

  /* -------------------------------------------------------- Taiwanese (4) */
  c('beef-noodle-soup', 'Taiwanese Beef Noodle Soup', 'Taiwanese', 'Dinner', 'Medium', 30, 150, 6, 4.9, 2866, ['Dairy-Free'], ['editors'], 'Taiwanese beef noodle soup'),
  c('lu-rou-fan', 'Lu Rou Fan', 'Taiwanese', 'Dinner', 'Easy', 20, 75, 4, 4.8, 1866, ['Dairy-Free'], [], 'Lu rou fan'),
  c('popcorn-chicken-taiwanese', 'Taiwanese Popcorn Chicken', 'Taiwanese', 'Appetizers', 'Medium', 30, 15, 4, 4.8, 2144, ['Dairy-Free'], [], 'Taiwanese salt pepper fried chicken plate'),
  c('pineapple-cake', 'Pineapple Cake', 'Taiwanese', 'Baking', 'Medium', 45, 30, 16, 4.7, 1044, ['Vegetarian'], [], 'Taiwanese pineapple cake'),

  /* ------------------------------------------------------- Pakistani (4) */
  c('nihari', 'Nihari', 'Pakistani', 'Dinner', 'Medium', 30, 240, 8, 4.8, 1644, ['Dairy-Free'], [], 'Nihari'),
  c('haleem', 'Haleem', 'Pakistani', 'Dinner', 'Hard', 45, 210, 8, 4.7, 1188, ['Dairy-Free'], [], 'Haleem'),
  c('seekh-kebab', 'Seekh Kebab', 'Pakistani', 'Appetizers', 'Easy', 25, 15, 6, 4.8, 2011, ['Gluten-Free', 'Dairy-Free'], [], 'Seekh kebab'),
  c('chapli-kebab', 'Chapli Kebab', 'Pakistani', 'Dinner', 'Easy', 25, 15, 6, 4.7, 966, ['Gluten-Free', 'Dairy-Free'], [], 'Chapli kebab'),

  /* ------------------------------------------------------- Sri Lankan (3) */
  c('sri-lankan-fish-curry', 'Sri Lankan Fish Curry', 'Sri Lankan', 'Dinner', 'Easy', 20, 30, 4, 4.7, 866, ['Gluten-Free', 'Dairy-Free'], [], 'Sri lankan fish curry'),
  c('hoppers', 'Egg Hoppers', 'Sri Lankan', 'Breakfast', 'Medium', 30, 20, 6, 4.7, 1044, ['Gluten-Free'], [], 'Egg hoppers'),
  c('kottu-roti', 'Kottu Roti', 'Sri Lankan', 'Dinner', 'Medium', 25, 20, 4, 4.8, 1322, ['Dairy-Free'], [], 'Kottu roti'),

  /* ------------------------------------------------------ Indonesian (3) */
  c('soto-ayam', 'Soto Ayam', 'Indonesian', 'Lunch', 'Medium', 25, 45, 6, 4.7, 1044, ['Gluten-Free', 'Dairy-Free'], [], 'Soto ayam'),
  c('martabak', 'Martabak Manis', 'Indonesian', 'Desserts', 'Medium', 90, 20, 8, 4.7, 1188, ['Vegetarian'], [], 'Martabak manis'),
  c('sambal-goreng', 'Sambal Goreng Tempeh', 'Indonesian', 'Dinner', 'Easy', 15, 20, 4, 4.6, 744, ['Vegan'], [], 'Sambal goreng tempe'),

  /* -------------------------------------------------------- Malaysian (3) */
  c('nasi-lemak', 'Nasi Lemak', 'Malaysian', 'Breakfast', 'Medium', 30, 40, 4, 4.9, 2644, ['Gluten-Free'], ['trending'], 'Nasi lemak'),
  c('roti-canai', 'Roti Canai', 'Malaysian', 'Breakfast', 'Hard', 120, 20, 6, 4.8, 1866, ['Vegan'], [], 'Roti canai flatbread dhal plate'),
  c('ayam-masak-merah', 'Ayam Masak Merah', 'Malaysian', 'Dinner', 'Medium', 25, 45, 4, 4.6, 744, ['Gluten-Free', 'Dairy-Free'], [], 'Ayam masak merah'),

  /* --------------------------------------------------------- Filipino (4) */
  c('sinigang', 'Sinigang na Baboy', 'Filipino', 'Dinner', 'Easy', 20, 60, 6, 4.8, 1644, ['Gluten-Free', 'Dairy-Free'], [], 'Sinigang soup bowl tamarind'),
  c('lechon-kawali', 'Lechon Kawali', 'Filipino', 'Dinner', 'Medium', 20, 90, 6, 4.8, 1322, ['Gluten-Free', 'Dairy-Free'], [], 'Lechon kawali'),
  c('pancit-canton', 'Pancit Canton', 'Filipino', 'Dinner', 'Easy', 25, 20, 6, 4.7, 1188, ['Dairy-Free'], [], 'Pancit canton'),
  c('halo-halo', 'Halo-Halo', 'Filipino', 'Desserts', 'Easy', 25, 0, 4, 4.7, 1544, ['Vegetarian', 'Gluten-Free'], [], 'Halo halo shaved ice dessert glass'),

  /* ----------------------------------------------------------- Cuban (3) */
  c('ropa-vieja', 'Ropa Vieja', 'Cuban', 'Dinner', 'Medium', 25, 150, 6, 4.8, 1866, ['Gluten-Free', 'Dairy-Free'], [], 'Ropa vieja'),

  /* ------------------------------------------------------ Colombian (3) */
  c('bandeja-paisa', 'Bandeja Paisa', 'Colombian', 'Dinner', 'Medium', 30, 90, 4, 4.7, 1044, ['Gluten-Free'], [], 'Bandeja paisa'),
  c('ajiaco', 'Ajiaco', 'Colombian', 'Dinner', 'Easy', 25, 60, 6, 4.7, 866, ['Gluten-Free'], [], 'Ajiaco bogotano chicken soup'),
  c('empanadas-colombianas', 'Colombian Empanadas', 'Colombian', 'Appetizers', 'Medium', 45, 20, 12, 4.8, 1544, ['Gluten-Free'], [], 'Colombian empanadas'),

  /* ------------------------------------------------------- Peruvian (3) */
  c('causa-limena', 'Causa Limeña', 'Peruvian', 'Appetizers', 'Medium', 40, 25, 6, 4.7, 866, ['Gluten-Free'], [], 'Causa limena'),
  c('pisco-sour', 'Pisco Sour', 'Peruvian', 'Drinks', 'Easy', 5, 0, 1, 4.8, 2144, ['Gluten-Free'], [], 'Pisco sour'),

  /* ------------------------------------------------------ Argentinian (3) */
  c('provoleta', 'Provoleta', 'Argentinian', 'Appetizers', 'Easy', 10, 10, 4, 4.7, 1188, ['Vegetarian', 'Gluten-Free'], [], 'Provoleta'),
  c('milanesa', 'Milanesa Napolitana', 'Argentinian', 'Dinner', 'Easy', 20, 20, 4, 4.8, 1866, [], [], 'Milanesa napolitana'),
  c('dulce-de-leche', 'Dulce de Leche', 'Argentinian', 'Desserts', 'Easy', 5, 180, 12, 4.8, 2388, ['Vegetarian', 'Gluten-Free'], [], 'Dulce de leche caramel jar spoon'),

  /* --------------------------------------------------------- Chilean (2) */
  c('pastel-de-choclo', 'Pastel de Choclo', 'Chilean', 'Dinner', 'Medium', 35, 60, 6, 4.6, 622, ['Gluten-Free'], [], 'Pastel de choclo'),
  c('completo', 'Completo Italiano', 'Chilean', 'Quick Meals', 'Easy', 15, 10, 4, 4.6, 744, [], [], 'Completo chileno'),

  /* -------------------------------------------------------- Brazilian (3) */
  c('coxinha', 'Coxinha', 'Brazilian', 'Appetizers', 'Hard', 50, 25, 16, 4.8, 1644, [], [], 'Coxinha'),
  c('caipirinha', 'Caipirinha', 'Brazilian', 'Drinks', 'Easy', 5, 0, 1, 4.8, 2644, ['Vegan', 'Gluten-Free'], [], 'Caipirinha'),

  /* ------------------------------------------------------- Jamaican (3) */
  c('rice-and-peas', 'Rice and Peas', 'Jamaican', 'Dinner', 'Easy', 15, 45, 6, 4.8, 1866, ['Vegan', 'Gluten-Free'], [], 'Jamaican rice and peas kidney beans'),
  c('jamaican-patty', 'Jamaican Beef Patty', 'Jamaican', 'Quick Meals', 'Medium', 45, 30, 8, 4.8, 1544, ['Dairy-Free'], [], 'Jamaican beef patty pastry'),

  /* --------------------------------------------------- Trinidadian (2) */
  c('doubles', 'Trinidadian Doubles', 'Trinidadian', 'Breakfast', 'Medium', 90, 20, 8, 4.7, 866, ['Vegan'], [], 'Doubles bara channa curry Trinidad'),
  c('callaloo', 'Callaloo', 'Trinidadian', 'Lunch', 'Easy', 20, 35, 6, 4.6, 588, ['Vegan', 'Gluten-Free'], [], 'Callaloo'),

  /* ---------------------------------------------------------- Nigerian (2) */
  c('moin-moin', 'Moin Moin', 'Nigerian', 'Lunch', 'Medium', 30, 45, 6, 4.6, 744, ['Vegan', 'Gluten-Free'], [], 'Moi moi bean pudding Nigerian'),
  c('pepper-soup', 'Nigerian Pepper Soup', 'Nigerian', 'Dinner', 'Easy', 20, 45, 6, 4.7, 966, ['Gluten-Free', 'Dairy-Free'], [], 'Nigerian goat pepper soup bowl'),

  /* ---------------------------------------------------------- Ghanaian (2) */
  c('waakye', 'Waakye', 'Ghanaian', 'Lunch', 'Easy', 20, 60, 6, 4.6, 622, ['Vegan', 'Gluten-Free'], [], 'Waakye'),
  c('kelewele', 'Kelewele', 'Ghanaian', 'Appetizers', 'Easy', 15, 15, 4, 4.7, 788, ['Vegan', 'Gluten-Free'], [], 'Kelewele'),

  /* --------------------------------------------------------- Kenyan (2) */
  c('nyama-choma', 'Nyama Choma', 'Kenyan', 'Dinner', 'Easy', 20, 60, 6, 4.7, 866, ['Gluten-Free', 'Dairy-Free'], [], 'Nyama choma grilled goat meat plate'),
  c('ugali-sukuma', 'Ugali and Sukuma Wiki', 'Kenyan', 'Dinner', 'Easy', 15, 25, 4, 4.6, 644, ['Vegan', 'Gluten-Free'], [], 'Ugali sukuma wiki'),

  /* ---------------------------------------------------- South African (2) */
  c('bunny-chow', 'Bunny Chow', 'South African', 'Lunch', 'Medium', 25, 60, 4, 4.7, 1044, ['Dairy-Free'], [], 'Bunny chow'),
  c('malva-pudding', 'Malva Pudding', 'South African', 'Desserts', 'Easy', 15, 45, 8, 4.7, 966, ['Vegetarian'], [], 'Malva pudding'),

  /* ------------------------------------------------------ Australian (3) */
  c('lamingtons', 'Lamingtons', 'Australian', 'Baking', 'Medium', 40, 30, 16, 4.7, 1322, ['Vegetarian'], [], 'Lamingtons'),
  c('pavlova', 'Pavlova', 'Australian', 'Desserts', 'Medium', 25, 90, 8, 4.8, 2644, ['Vegetarian', 'Gluten-Free'], ['trending'], 'Pavlova meringue cream strawberries'),
  c('anzac-biscuits', 'Anzac Biscuits', 'Australian', 'Baking', 'Easy', 15, 18, 20, 4.7, 1544, ['Vegetarian'], [], 'Anzac biscuits'),

  /* -------------------------------------------------------- Hawaiian (2) */
  c('kalua-pork', 'Kalua Pork', 'Hawaiian', 'Dinner', 'Easy', 15, 300, 8, 4.8, 1322, ['Gluten-Free', 'Dairy-Free'], [], 'Kalua pig shredded pork Hawaiian'),
  c('loco-moco', 'Loco Moco', 'Hawaiian', 'Breakfast', 'Easy', 15, 20, 4, 4.7, 1188, [], [], 'Loco moco'),

  /* --------------------------------------------------- International (10) */
  c('breakfast-hash', 'Breakfast Hash', 'International', 'Breakfast', 'Easy', 15, 30, 4, 4.7, 2288, ['Vegetarian', 'Gluten-Free'], ['trending'], 'Corned beef hash skillet eggs'),
  c('ribollita', 'Ribollita', 'Italian', 'Lunch', 'Easy', 25, 60, 6, 4.7, 1422, ['Vegan'], [], 'Ribollita'),
  c('buddha-bowl', 'Roasted Vegetable Buddha Bowl', 'International', 'Healthy', 'Easy', 20, 30, 2, 4.7, 1866, ['Vegan', 'Gluten-Free'], [], 'Roasted vegetable grain bowl'),
  c('affogato', 'Affogato', 'International', 'Desserts', 'Easy', 5, 0, 2, 4.8, 1644, ['Vegetarian', 'Gluten-Free'], [], 'Affogato'),
  c('smoothie-bowl', 'Berry Smoothie Bowl', 'International', 'Breakfast', 'Easy', 10, 0, 2, 4.6, 1322, ['Vegan', 'Gluten-Free'], [], 'Smoothie bowl granola berries'),
  c('cold-brew-coffee', 'Cold Brew Coffee', 'International', 'Drinks', 'Easy', 10, 0, 4, 4.7, 1866, ['Vegan', 'Gluten-Free'], [], 'Cold brew iced coffee glass'),

  /* ------------------------------------- filling out the thinner sections */
  c('chicken-milanese', 'Chicken Milanese', 'Italian', 'Dinner', 'Easy', 15, 15, 4, 4.7, 1644, [], [], 'Chicken milanese'),
  c('pasta-puttanesca', 'Pasta Puttanesca', 'Italian', 'Quick Meals', 'Easy', 10, 20, 4, 4.8, 2388, ['Dairy-Free'], [], 'Pasta puttanesca'),
  c('pots-de-creme', 'Pots de Crème', 'French', 'Desserts', 'Easy', 15, 10, 6, 4.7, 1188, ['Vegetarian', 'Gluten-Free'], [], 'Pots de creme chocolate'),
  c('salade-de-chevre-chaud', 'Salade de Chèvre Chaud', 'French', 'Lunch', 'Easy', 15, 8, 4, 4.6, 866, ['Vegetarian'], [], 'Salade chevre chaud'),
  c('shogayaki', 'Pork Shogayaki', 'Japanese', 'Quick Meals', 'Easy', 15, 10, 4, 4.7, 1322, ['Dairy-Free'], [], 'Shogayaki ginger pork'),
  c('kakuni', 'Buta no Kakuni', 'Japanese', 'Dinner', 'Medium', 20, 150, 4, 4.7, 966, ['Dairy-Free'], [], 'Buta no kakuni'),
  c('shui-zhu-fish', 'Shui Zhu Fish', 'Chinese', 'Dinner', 'Medium', 25, 20, 4, 4.7, 1044, ['Dairy-Free'], [], 'Sichuan boiled fish chilli oil bowl'),
  c('turnip-cake', 'Lo Bak Go', 'Chinese', 'Appetizers', 'Medium', 30, 60, 8, 4.6, 788, ['Dairy-Free'], [], 'Turnip cake lo bak go'),
  c('bhindi-masala', 'Bhindi Masala', 'Indian', 'Dinner', 'Easy', 15, 25, 4, 4.7, 1322, ['Vegan', 'Gluten-Free'], [], 'Bhindi masala okra curry bowl'),
  c('shahi-paneer', 'Shahi Paneer', 'Indian', 'Dinner', 'Medium', 20, 30, 4, 4.7, 1544, ['Vegetarian', 'Gluten-Free'], [], 'Shahi paneer curry cubes'),
  c('barbacoa', 'Beef Barbacoa', 'Mexican', 'Dinner', 'Medium', 25, 210, 8, 4.8, 2011, ['Gluten-Free', 'Dairy-Free'], [], 'Barbacoa'),
  c('tostadas', 'Tinga Tostadas', 'Mexican', 'Quick Meals', 'Easy', 20, 25, 4, 4.7, 1188, ['Gluten-Free'], [], 'Tinga tostadas'),
  c('biscuits-buttermilk', 'Buttermilk Biscuits', 'American', 'Baking', 'Easy', 20, 15, 10, 4.8, 2644, ['Vegetarian'], [], 'Buttermilk biscuits'),
  c('chicken-and-waffles', 'Chicken and Waffles', 'American', 'Breakfast', 'Medium', 30, 25, 4, 4.8, 2144, [], [], 'Chicken and waffles'),
  c('crab-cakes', 'Maryland Crab Cakes', 'American', 'Appetizers', 'Easy', 20, 12, 4, 4.8, 1866, [], [], 'Crab cakes'),
  c('bread-pudding', 'Bread and Butter Pudding', 'British', 'Desserts', 'Easy', 20, 45, 6, 4.7, 1422, ['Vegetarian'], [], 'Bread and butter pudding'),
  c('scotch-eggs', 'Scotch Eggs', 'British', 'Appetizers', 'Medium', 30, 20, 6, 4.7, 1644, [], [], 'Scotch eggs')
];
