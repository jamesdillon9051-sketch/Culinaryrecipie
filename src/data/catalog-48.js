'use strict';

/**
 * Weekly Delight — recipe catalog, volume forty-eight.
 * One hundred more of the dishes people in the USA, Canada, Australia, the UK and New Zealand look for by name.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: Indian 100.
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
  c('prawn-bhuna', 'Prawn Bhuna', 'Indian', 'Dinner', 'Medium', 15, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'prawn bhuna'),
  c('keema-naan', 'Keema Naan', 'Indian', 'Baking', 'Hard', 40, 25, 6, 0, 0, [], ['new'], 'keema naan'),
  c('butter-chicken-pizza', 'Butter Chicken Pizza', 'Indian', 'Dinner', 'Medium', 30, 25, 4, 0, 0, [], ['new'], 'butter chicken pizza'),
  c('chicken-xacuti', 'Chicken Xacuti', 'Indian', 'Dinner', 'Hard', 30, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'chicken xacuti'),
  c('chicken-kolhapuri', 'Chicken Kolhapuri', 'Indian', 'Dinner', 'Medium', 20, 35, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'chicken kolhapuri'),
  c('chicken-handi', 'Chicken Handi', 'Indian', 'Dinner', 'Medium', 20, 35, 4, 0, 0, ['Gluten-Free'], ['new'], 'chicken handi'),
  c('chicken-changezi', 'Chicken Changezi', 'Indian', 'Dinner', 'Medium', 20, 35, 4, 0, 0, ['Gluten-Free'], ['new'], 'chicken changezi'),
  c('chicken-malai-tikka', 'Chicken Malai Tikka', 'Indian', 'Appetizers', 'Medium', 20, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'chicken malai tikka'),
  c('chicken-reshmi-kebab', 'Chicken Reshmi Kebab', 'Indian', 'Appetizers', 'Medium', 20, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'chicken reshmi kebab'),
  c('chicken-pakora', 'Chicken Pakora', 'Indian', 'Appetizers', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'chicken pakora'),
  c('chicken-pulao', 'Chicken Pulao', 'Indian', 'Dinner', 'Medium', 20, 35, 4, 0, 0, ['Dairy-Free'], ['new'], 'chicken pulao'),
  c('kerala-chicken-curry', 'Kerala Chicken Curry', 'Indian', 'Dinner', 'Medium', 20, 40, 4, 0, 0, [], ['new'], 'kerala chicken curry'),
  c('chicken-ghee-roast', 'Chicken Ghee Roast', 'Indian', 'Dinner', 'Medium', 20, 35, 4, 0, 0, ['Gluten-Free'], ['new'], 'chicken ghee roast'),
  c('chicken-sukka', 'Chicken Sukka', 'Indian', 'Dinner', 'Medium', 20, 30, 4, 0, 0, ['Gluten-Free'], ['new'], 'chicken sukka'),
  c('chicken-cafreal', 'Chicken Cafreal', 'Indian', 'Dinner', 'Medium', 20, 30, 4, 0, 0, [], ['new'], 'chicken cafreal'),
  c('chicken-rezala', 'Chicken Rezala', 'Indian', 'Dinner', 'Medium', 20, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'chicken rezala'),
  c('lamb-keema', 'Lamb Keema', 'Indian', 'Dinner', 'Easy', 15, 35, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'lamb keema'),
  c('lamb-korma', 'Lamb Korma', 'Indian', 'Dinner', 'Medium', 20, 75, 4, 0, 0, ['Gluten-Free'], ['new'], 'lamb korma'),
  c('lamb-dopiaza', 'Lamb Dopiaza', 'Indian', 'Dinner', 'Medium', 20, 80, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'lamb dopiaza'),
  c('lamb-pasanda', 'Lamb Pasanda', 'Indian', 'Dinner', 'Medium', 25, 75, 4, 0, 0, [], ['new'], 'lamb pasanda'),
  c('lamb-shami-kebab', 'Lamb Shami Kebab', 'Indian', 'Appetizers', 'Medium', 30, 60, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'lamb shami kebab'),
  c('tandoori-lamb-chops', 'Tandoori Lamb Chops', 'Indian', 'Dinner', 'Medium', 20, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'tandoori lamb chops'),
  c('mutton-biryani', 'Mutton Biryani', 'Indian', 'Dinner', 'Hard', 40, 90, 6, 0, 0, ['Gluten-Free'], ['new'], 'mutton biryani'),
  c('kerala-beef-curry', 'Kerala Beef Curry', 'Indian', 'Dinner', 'Medium', 20, 90, 4, 0, 0, [], ['new'], 'kerala beef curry'),
  c('beef-ularthiyathu', 'Beef Ularthiyathu', 'Indian', 'Dinner', 'Medium', 20, 90, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'beef ularthiyathu'),
  c('beef-vindaloo', 'Beef Vindaloo', 'Indian', 'Dinner', 'Medium', 25, 100, 6, 0, 0, ['Dairy-Free'], ['new'], 'beef vindaloo'),
  c('goan-fish-curry', 'Goan Fish Curry', 'Indian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'goan fish curry'),
  c('fish-moilee', 'Fish Moilee', 'Indian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'fish moilee'),
  c('fish-pakora', 'Fish Pakora', 'Indian', 'Appetizers', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'fish pakora'),
  c('fish-amritsari', 'Fish Amritsari', 'Indian', 'Appetizers', 'Medium', 20, 15, 4, 0, 0, [], ['new'], 'fish amritsari'),
  c('prawn-balchao', 'Prawn Balchao', 'Indian', 'Dinner', 'Medium', 20, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'prawn balchao'),
  c('crab-masala', 'Crab Masala', 'Indian', 'Dinner', 'Medium', 25, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'crab masala'),
  c('paneer-do-pyaza', 'Paneer Do Pyaza', 'Indian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'paneer do pyaza'),
  c('paneer-jalfrezi', 'Paneer Jalfrezi', 'Indian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'paneer jalfrezi'),
  c('paneer-pakora', 'Paneer Pakora', 'Indian', 'Appetizers', 'Easy', 15, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'paneer pakora'),
  c('paneer-kofta', 'Paneer Kofta', 'Indian', 'Dinner', 'Medium', 30, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'paneer kofta'),
  c('kala-chana', 'Kala Chana', 'Indian', 'Healthy', 'Easy', 10, 70, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'kala chana'),
  c('aloo-baingan', 'Aloo Baingan', 'Indian', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free'], ['new'], 'aloo baingan'),
  c('aloo-palak', 'Aloo Palak', 'Indian', 'Quick Meals', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'aloo palak'),
  c('sev-puri', 'Sev Puri', 'Indian', 'Appetizers', 'Medium', 30, 10, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'sev puri'),
  c('dahi-puri', 'Dahi Puri', 'Indian', 'Appetizers', 'Medium', 25, 5, 4, 0, 0, ['Vegetarian'], ['new'], 'dahi puri'),
  c('papdi-chaat', 'Papdi Chaat', 'Indian', 'Appetizers', 'Easy', 20, 5, 4, 0, 0, ['Vegetarian'], ['new'], 'papdi chaat'),
  c('moong-dal-kachori', 'Moong Dal Kachori', 'Indian', 'Appetizers', 'Hard', 40, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'moong dal kachori'),
  c('khandvi', 'Khandvi', 'Indian', 'Appetizers', 'Hard', 20, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'khandvi'),
  c('methi-thepla', 'Methi Thepla', 'Indian', 'Breakfast', 'Medium', 25, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'methi thepla'),
  c('undhiyu', 'Undhiyu', 'Indian', 'Dinner', 'Hard', 40, 45, 6, 0, 0, ['Vegetarian'], ['new'], 'undhiyu'),
  c('handvo', 'Handvo', 'Indian', 'Baking', 'Medium', 25, 45, 6, 0, 0, ['Vegetarian'], ['new'], 'handvo'),
  c('rava-dosa', 'Rava Dosa', 'Indian', 'Breakfast', 'Medium', 40, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'rava dosa'),
  c('avial', 'Avial', 'Indian', 'Dinner', 'Easy', 20, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'avial'),
  c('kerala-parotta', 'Kerala Parotta', 'Indian', 'Baking', 'Hard', 40, 25, 6, 0, 0, ['Vegetarian'], ['new'], 'kerala parotta'),
  c('kerala-appam', 'Kerala Appam', 'Indian', 'Breakfast', 'Medium', 20, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'kerala appam'),
  c('kerala-puttu', 'Kerala Puttu', 'Indian', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'kerala puttu'),
  c('idiyappam', 'Idiyappam', 'Indian', 'Breakfast', 'Medium', 15, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'idiyappam'),
  c('kerala-prawn-roast', 'Kerala Prawn Roast', 'Indian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'kerala prawn roast'),
  c('raw-mango-curry', 'Raw Mango Curry', 'Indian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'raw mango curry'),
  c('mint-chutney', 'Mint Chutney', 'Indian', 'Appetizers', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'mint chutney'),
  c('tamarind-chutney', 'Tamarind Chutney', 'Indian', 'Appetizers', 'Easy', 5, 20, 10, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'tamarind chutney'),
  c('boondi-raita', 'Boondi Raita', 'Indian', 'Appetizers', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'boondi raita'),
  c('milk-barfi', 'Milk Barfi', 'Indian', 'Desserts', 'Medium', 10, 25, 16, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'milk barfi'),
  c('bengali-sandesh', 'Bengali Sandesh', 'Indian', 'Desserts', 'Medium', 15, 15, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'bengali sandesh'),
  c('rava-kesari', 'Rava Kesari', 'Indian', 'Desserts', 'Easy', 5, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'rava kesari'),
  c('kashmiri-chai', 'Kashmiri Chai', 'Indian', 'Drinks', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'kashmiri chai'),
  c('sol-kadhi', 'Sol Kadhi', 'Indian', 'Drinks', 'Easy', 10, 5, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'sol kadhi'),
  c('badam-milk', 'Badam Milk', 'Indian', 'Drinks', 'Easy', 5, 10, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'badam milk'),
  c('tender-coconut-pudding', 'Tender Coconut Pudding', 'Indian', 'Desserts', 'Medium', 15, 10, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'tender coconut pudding'),
  c('slow-cooker-chicken-tikka-masala', 'Slow Cooker Chicken Tikka Masala', 'Indian', 'Dinner', 'Easy', 15, 240, 4, 0, 0, ['Gluten-Free'], ['new'], 'slow cooker chicken tikka masala'),
  c('instant-pot-butter-chicken', 'Instant Pot Butter Chicken', 'Indian', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'instant pot butter chicken'),
  c('instant-pot-dal', 'Instant Pot Dal', 'Indian', 'Healthy', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'instant pot dal'),
  c('instant-pot-chana-masala', 'Instant Pot Chana Masala', 'Indian', 'Healthy', 'Easy', 10, 60, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'instant pot chana masala'),
  c('sheet-pan-chicken-tikka', 'Sheet Pan Chicken Tikka', 'Indian', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'sheet pan chicken tikka'),
  c('lime-pickle', 'Lime Pickle', 'Indian', 'Appetizers', 'Medium', 30, 15, 20, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'lime pickle'),
  c('mango-pickle', 'Mango Pickle', 'Indian', 'Appetizers', 'Medium', 30, 10, 20, 0, 0, ['Vegetarian', 'Vegan'], ['new'], 'mango pickle'),
  c('aam-ras', 'Aam Ras', 'Indian', 'Desserts', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'aam ras'),
  c('pesarattu', 'Pesarattu', 'Indian', 'Breakfast', 'Medium', 10, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'pesarattu'),
  c('kootu', 'Kootu', 'Indian', 'Healthy', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'kootu'),
  c('thoran', 'Thoran', 'Indian', 'Healthy', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'thoran'),
  c('olan', 'Olan', 'Indian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'olan'),
  c('erissery', 'Erissery', 'Indian', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian', 'Vegan'], ['new'], 'erissery'),
  c('meen-pollichathu', 'Meen Pollichathu', 'Indian', 'Dinner', 'Medium', 25, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'meen pollichathu'),
  c('baingan-masala', 'Baingan Masala', 'Indian', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free'], ['new'], 'baingan masala'),
  c('bharwa-baingan', 'Bharwa Baingan', 'Indian', 'Dinner', 'Medium', 25, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'bharwa baingan'),
  c('bhindi-fry', 'Bhindi Fry', 'Indian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'bhindi fry'),
  c('paneer-paratha', 'Paneer Paratha', 'Indian', 'Breakfast', 'Medium', 30, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'paneer paratha'),
  c('methi-paratha', 'Methi Paratha', 'Indian', 'Breakfast', 'Medium', 25, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'methi paratha'),
  c('lachha-paratha', 'Lachha Paratha', 'Indian', 'Baking', 'Medium', 30, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'lachha paratha'),
  c('makki-di-roti', 'Makki di Roti', 'Indian', 'Baking', 'Medium', 20, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'makki di roti'),
  c('sindhi-kadhi', 'Sindhi Kadhi', 'Indian', 'Dinner', 'Medium', 20, 35, 4, 0, 0, ['Vegetarian', 'Vegan'], ['new'], 'sindhi kadhi'),
  c('gatte-ki-sabzi', 'Gatte ki Sabzi', 'Indian', 'Dinner', 'Medium', 30, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'gatte ki sabzi'),
  c('laal-maas', 'Laal Maas', 'Indian', 'Dinner', 'Hard', 25, 100, 4, 0, 0, ['Gluten-Free'], ['new'], 'laal maas'),
  c('pyaaz-kachori', 'Pyaaz Kachori', 'Indian', 'Appetizers', 'Hard', 45, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'pyaaz kachori'),
  c('mirchi-vada', 'Mirchi Vada', 'Indian', 'Appetizers', 'Medium', 30, 20, 6, 0, 0, ['Vegetarian', 'Vegan'], ['new'], 'mirchi vada'),
  c('rabri', 'Rabri', 'Indian', 'Desserts', 'Medium', 5, 60, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'rabri'),
  c('moong-dal-halwa', 'Moong Dal Halwa', 'Indian', 'Desserts', 'Medium', 15, 45, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'moong dal halwa'),
  c('motichoor-ladoo', 'Motichoor Ladoo', 'Indian', 'Desserts', 'Hard', 40, 50, 16, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'motichoor ladoo'),
  c('coconut-ladoo', 'Coconut Ladoo', 'Indian', 'Desserts', 'Easy', 5, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'coconut ladoo'),
  c('basundi', 'Basundi', 'Indian', 'Desserts', 'Medium', 5, 60, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'basundi'),
  c('puran-poli', 'Puran Poli', 'Indian', 'Desserts', 'Hard', 45, 50, 8, 0, 0, ['Vegetarian'], ['new'], 'puran poli'),
  c('modak', 'Modak', 'Indian', 'Desserts', 'Hard', 40, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'modak'),
  c('chakli', 'Chakli', 'Indian', 'Appetizers', 'Hard', 40, 25, 20, 0, 0, ['Vegetarian'], ['new'], 'chakli'),
  c('murukku', 'Murukku', 'Indian', 'Appetizers', 'Hard', 35, 25, 20, 0, 0, ['Vegetarian'], ['new'], 'murukku')
];
