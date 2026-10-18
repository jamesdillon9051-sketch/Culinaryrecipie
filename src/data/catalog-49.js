'use strict';

/**
 * Weekly Delight — recipe catalog, volume forty-nine.
 * One hundred more of the dishes people in the USA, Canada, Australia, the UK and New Zealand look for by name.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: Chinese 17, Indonesian 14, Malaysian 10, Middle Eastern 7, Filipino 5, Japanese 5, Vietnamese 5, Moroccan 4, Persian 4, Sri Lankan 4, Thai 4, Turkish 4, Bangladeshi 3, Singaporean 3, Korean 2, Pakistani 2, Russian 2, Afghan 1, Egyptian 1, Georgian 1, Israeli 1, Nepalese 1.
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
  c('lemon-tahini-dressing', 'Lemon Tahini Dressing', 'Middle Eastern', 'Healthy', 'Easy', 5, 0, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'lemon tahini dressing'),
  c('sesame-ginger-dressing', 'Sesame Ginger Dressing', 'Japanese', 'Healthy', 'Easy', 5, 0, 6, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'sesame ginger dressing'),
  c('miso-dressing', 'Miso Dressing', 'Japanese', 'Healthy', 'Easy', 5, 0, 6, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'miso dressing'),
  c('lamb-karahi', 'Lamb Karahi', 'Pakistani', 'Dinner', 'Medium', 20, 60, 4, 0, 0, ['Gluten-Free'], ['new'], 'lamb karahi'),
  c('hong-kong-chow-mein', 'Hong Kong Chow Mein', 'Chinese', 'Dinner', 'Medium', 20, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'hong kong chow mein'),
  c('salt-and-pepper-chicken-wings', 'Salt and Pepper Chicken Wings', 'Chinese', 'Appetizers', 'Medium', 15, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'salt and pepper chicken wings'),
  c('sweet-and-sour-prawns', 'Sweet and Sour Prawns', 'Chinese', 'Dinner', 'Medium', 20, 15, 4, 0, 0, [], ['new'], 'sweet and sour prawns'),
  c('honey-chilli-chicken', 'Honey Chilli Chicken', 'Chinese', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'honey chilli chicken'),
  c('beef-in-oyster-sauce', 'Beef in Oyster Sauce', 'Chinese', 'Dinner', 'Easy', 15, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'beef in oyster sauce'),
  c('steamed-chicken-with-mushrooms', 'Steamed Chicken with Mushrooms', 'Chinese', 'Healthy', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'steamed chicken with mushrooms'),
  c('lap-cheong-fried-rice', 'Lap Cheong Fried Rice', 'Chinese', 'Quick Meals', 'Easy', 10, 10, 4, 0, 0, [], ['new'], 'lap cheong fried rice'),
  c('yuxiang-aubergine', 'Yuxiang Aubergine', 'Chinese', 'Dinner', 'Medium', 15, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'yuxiang aubergine'),
  c('sichuan-boiled-beef', 'Sichuan Boiled Beef', 'Chinese', 'Dinner', 'Medium', 25, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'sichuan boiled beef'),
  c('chongqing-chicken', 'Chongqing Chicken', 'Chinese', 'Dinner', 'Medium', 20, 20, 4, 0, 0, [], ['new'], 'chongqing chicken'),
  c('shanghai-fried-noodles', 'Shanghai Fried Noodles', 'Chinese', 'Quick Meals', 'Easy', 15, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'shanghai fried noodles'),
  c('tea-smoked-duck', 'Tea Smoked Duck', 'Chinese', 'Dinner', 'Hard', 30, 90, 4, 0, 0, ['Dairy-Free'], ['new'], 'tea smoked duck'),
  c('xinjiang-lamb-skewers', 'Xinjiang Lamb Skewers', 'Chinese', 'Appetizers', 'Medium', 25, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'xinjiang lamb skewers'),
  c('roujiamo', 'Roujiamo', 'Chinese', 'Lunch', 'Medium', 30, 150, 6, 0, 0, [], ['new'], 'roujiamo'),
  c('jungle-curry', 'Jungle Curry', 'Thai', 'Dinner', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'jungle curry'),
  c('gaeng-som', 'Gaeng Som', 'Thai', 'Dinner', 'Medium', 20, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'gaeng som'),
  c('khao-kai-jeow', 'Khao Kai Jeow', 'Thai', 'Quick Meals', 'Easy', 5, 5, 2, 0, 0, ['Dairy-Free'], ['new'], 'khao kai jeow'),
  c('thai-boat-noodles', 'Thai Boat Noodles', 'Thai', 'Dinner', 'Hard', 30, 130, 6, 0, 0, [], ['new'], 'thai boat noodles'),
  c('vietnamese-vermicelli-bowl', 'Vietnamese Vermicelli Bowl', 'Vietnamese', 'Lunch', 'Medium', 30, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'vietnamese vermicelli bowl'),
  c('com-ga', 'Com Ga', 'Vietnamese', 'Dinner', 'Medium', 20, 55, 4, 0, 0, [], ['new'], 'com ga'),
  c('hu-tieu', 'Hu Tieu', 'Vietnamese', 'Lunch', 'Medium', 25, 60, 4, 0, 0, ['Dairy-Free'], ['new'], 'hu tieu'),
  c('mi-quang', 'Mi Quang', 'Vietnamese', 'Lunch', 'Medium', 25, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'mi quang'),
  c('che-chuoi', 'Che Chuoi', 'Vietnamese', 'Desserts', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'che chuoi'),
  c('curry-mee', 'Curry Mee', 'Malaysian', 'Lunch', 'Medium', 25, 30, 4, 0, 0, [], ['new'], 'curry mee'),
  c('kari-ayam', 'Kari Ayam', 'Malaysian', 'Dinner', 'Easy', 15, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'kari ayam'),
  c('sambal-udang', 'Sambal Udang', 'Malaysian', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'sambal udang'),
  c('telur-sambal', 'Telur Sambal', 'Malaysian', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'telur sambal'),
  c('chai-tow-kway', 'Chai Tow Kway', 'Singaporean', 'Breakfast', 'Hard', 30, 75, 6, 0, 0, ['Dairy-Free'], ['new'], 'chai tow kway'),
  c('sambal-terasi', 'Sambal Terasi', 'Indonesian', 'Appetizers', 'Easy', 10, 10, 8, 0, 0, ['Dairy-Free'], ['new'], 'sambal terasi'),
  c('pancit-bihon', 'Pancit Bihon', 'Filipino', 'Dinner', 'Easy', 20, 20, 6, 0, 0, ['Dairy-Free'], ['new'], 'pancit bihon'),
  c('longganisa', 'Longganisa', 'Filipino', 'Breakfast', 'Medium', 20, 25, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'longganisa'),
  c('tocino', 'Tocino', 'Filipino', 'Breakfast', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'tocino'),
  c('turon', 'Turon', 'Filipino', 'Desserts', 'Easy', 15, 10, 8, 0, 0, ['Vegetarian', 'Vegan'], ['new'], 'turon'),
  c('sinangag', 'Sinangag', 'Filipino', 'Quick Meals', 'Easy', 5, 10, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'sinangag'),
  c('samgyeopsal', 'Samgyeopsal', 'Korean', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'samgyeopsal'),
  c('sigeumchi-namul', 'Sigeumchi Namul', 'Korean', 'Healthy', 'Easy', 10, 5, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'sigeumchi namul'),
  c('tamago-sando', 'Tamago Sando', 'Japanese', 'Lunch', 'Easy', 15, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'tamago sando'),
  c('spicy-tuna-roll', 'Spicy Tuna Roll', 'Japanese', 'Lunch', 'Medium', 30, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'spicy tuna roll'),
  c('japanese-ginger-dressing', 'Japanese Ginger Dressing', 'Japanese', 'Healthy', 'Easy', 10, 0, 6, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'japanese ginger dressing'),
  c('shuwa', 'Shuwa', 'Middle Eastern', 'Dinner', 'Hard', 30, 240, 8, 0, 0, ['Dairy-Free'], ['new'], 'shuwa'),
  c('chicken-machboos', 'Chicken Machboos', 'Middle Eastern', 'Dinner', 'Medium', 20, 50, 6, 0, 0, [], ['new'], 'chicken machboos'),
  c('luqaimat', 'Luqaimat', 'Middle Eastern', 'Desserts', 'Medium', 15, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'luqaimat'),
  c('fatta', 'Fatta', 'Egyptian', 'Dinner', 'Medium', 20, 120, 6, 0, 0, [], ['new'], 'fatta'),
  c('beef-tagine-with-prunes', 'Beef Tagine with Prunes', 'Moroccan', 'Dinner', 'Medium', 20, 120, 6, 0, 0, [], ['new'], 'beef tagine with prunes'),
  c('seven-vegetable-couscous', 'Seven-Vegetable Couscous', 'Moroccan', 'Dinner', 'Medium', 30, 60, 6, 0, 0, [], ['new'], 'seven-vegetable couscous'),
  c('bissara', 'Bissara', 'Moroccan', 'Healthy', 'Easy', 10, 50, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'bissara'),
  c('moroccan-orange-salad', 'Moroccan Orange Salad', 'Moroccan', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'moroccan orange salad'),
  c('chakhchoukha', 'Chakhchoukha', 'Middle Eastern', 'Dinner', 'Hard', 30, 60, 6, 0, 0, [], ['new'], 'chakhchoukha'),
  c('bazin', 'Bazin', 'Middle Eastern', 'Dinner', 'Medium', 20, 60, 6, 0, 0, [], ['new'], 'bazin'),
  c('ezogelin-soup', 'Ezogelin Soup', 'Turkish', 'Healthy', 'Easy', 10, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'ezogelin soup'),
  c('yayla-soup', 'Yayla Soup', 'Turkish', 'Healthy', 'Easy', 10, 30, 4, 0, 0, [], ['new'], 'yayla soup'),
  c('coban-salatasi', 'Coban Salatasi', 'Turkish', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'coban salatasi'),
  c('turkish-tea', 'Turkish Tea', 'Turkish', 'Drinks', 'Easy', 2, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'turkish tea'),
  c('azerbaijani-plov', 'Azerbaijani Plov', 'Georgian', 'Dinner', 'Hard', 30, 90, 6, 0, 0, [], ['new'], 'azerbaijani plov'),
  c('uzbek-plov', 'Uzbek Plov', 'Russian', 'Dinner', 'Medium', 25, 75, 6, 0, 0, ['Gluten-Free'], ['new'], 'uzbek plov'),
  c('beshbarmak', 'Beshbarmak', 'Russian', 'Dinner', 'Hard', 40, 130, 6, 0, 0, ['Dairy-Free'], ['new'], 'beshbarmak'),
  c('kabab-koobideh', 'Kabab Koobideh', 'Persian', 'Dinner', 'Medium', 25, 12, 4, 0, 0, ['Gluten-Free'], ['new'], 'kabab koobideh'),
  c('baghali-polo', 'Baghali Polo', 'Persian', 'Dinner', 'Medium', 20, 50, 6, 0, 0, ['Vegetarian'], ['new'], 'baghali polo'),
  c('mirza-ghasemi', 'Mirza Ghasemi', 'Persian', 'Appetizers', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'mirza ghasemi'),
  c('bastani-sonnati', 'Bastani Sonnati', 'Persian', 'Desserts', 'Medium', 20, 10, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'bastani sonnati'),
  c('mantu', 'Mantu', 'Afghan', 'Dinner', 'Hard', 60, 70, 6, 0, 0, [], ['new'], 'mantu'),
  c('gola-kabab', 'Gola Kabab', 'Pakistani', 'Appetizers', 'Medium', 20, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'gola kabab'),
  c('beef-bhuna', 'Beef Bhuna', 'Bangladeshi', 'Dinner', 'Medium', 20, 90, 4, 0, 0, [], ['new'], 'beef bhuna'),
  c('chingri-malai-curry', 'Chingri Malai Curry', 'Bangladeshi', 'Dinner', 'Medium', 20, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'chingri malai curry'),
  c('kacchi-biryani', 'Kacchi Biryani', 'Bangladeshi', 'Dinner', 'Hard', 40, 95, 8, 0, 0, ['Gluten-Free'], ['new'], 'kacchi biryani'),
  c('sri-lankan-chicken-curry', 'Sri Lankan Chicken Curry', 'Sri Lankan', 'Dinner', 'Easy', 15, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'sri lankan chicken curry'),
  c('sri-lankan-black-pork-curry', 'Sri Lankan Black Pork Curry', 'Sri Lankan', 'Dinner', 'Medium', 20, 90, 6, 0, 0, ['Dairy-Free'], ['new'], 'sri lankan black pork curry'),
  c('lamprais', 'Lamprais', 'Sri Lankan', 'Dinner', 'Hard', 60, 90, 6, 0, 0, [], ['new'], 'lamprais'),
  c('wattalapam', 'Wattalapam', 'Sri Lankan', 'Desserts', 'Medium', 15, 40, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'wattalapam'),
  c('chicken-choila', 'Chicken Choila', 'Nepalese', 'Appetizers', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'chicken choila'),
  c('israeli-bourekas', 'Israeli Bourekas', 'Israeli', 'Appetizers', 'Medium', 40, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'israeli bourekas'),
  c('instant-pot-chicken-congee', 'Instant Pot Chicken Congee', 'Chinese', 'Breakfast', 'Easy', 10, 40, 4, 0, 0, [], ['new'], 'instant pot chicken congee'),
  c('salted-egg-yolk-chicken', 'Salted Egg Yolk Chicken', 'Chinese', 'Dinner', 'Medium', 20, 20, 4, 0, 0, [], ['new'], 'salted egg yolk chicken'),
  c('salted-egg-prawns', 'Salted Egg Prawns', 'Chinese', 'Dinner', 'Medium', 15, 10, 4, 0, 0, [], ['new'], 'salted egg prawns'),
  c('black-pepper-crab', 'Black Pepper Crab', 'Singaporean', 'Dinner', 'Medium', 25, 20, 4, 0, 0, [], ['new'], 'black pepper crab'),
  c('singapore-chilli-prawns', 'Singapore Chilli Prawns', 'Singaporean', 'Dinner', 'Medium', 15, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'singapore chilli prawns'),
  c('roti-john', 'Roti John', 'Malaysian', 'Lunch', 'Easy', 15, 10, 2, 0, 0, [], ['new'], 'roti john'),
  c('murtabak', 'Murtabak', 'Malaysian', 'Lunch', 'Medium', 35, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'murtabak'),
  c('nasi-kandar', 'Nasi Kandar', 'Malaysian', 'Dinner', 'Medium', 25, 50, 4, 0, 0, ['Gluten-Free'], ['new'], 'nasi kandar'),
  c('nasi-kuning', 'Nasi Kuning', 'Indonesian', 'Dinner', 'Medium', 15, 35, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'nasi kuning'),
  c('nasi-uduk', 'Nasi Uduk', 'Indonesian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'nasi uduk'),
  c('indonesian-rawon', 'Indonesian Rawon', 'Indonesian', 'Dinner', 'Medium', 30, 140, 6, 0, 0, [], ['new'], 'indonesian rawon'),
  c('indonesian-gudeg', 'Indonesian Gudeg', 'Indonesian', 'Dinner', 'Medium', 30, 150, 6, 0, 0, [], ['new'], 'indonesian gudeg'),
  c('sate-padang', 'Sate Padang', 'Indonesian', 'Dinner', 'Medium', 30, 110, 4, 0, 0, [], ['new'], 'sate padang'),
  c('indonesian-klepon', 'Indonesian Klepon', 'Indonesian', 'Desserts', 'Medium', 30, 15, 20, 0, 0, ['Vegetarian', 'Vegan'], ['new'], 'indonesian klepon'),
  c('cendol', 'Cendol', 'Indonesian', 'Drinks', 'Medium', 15, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'cendol'),
  c('pisang-goreng', 'Pisang Goreng', 'Indonesian', 'Desserts', 'Easy', 10, 10, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'pisang goreng'),
  c('indonesian-bubur-ayam', 'Indonesian Bubur Ayam', 'Indonesian', 'Breakfast', 'Easy', 15, 60, 4, 0, 0, [], ['new'], 'indonesian bubur ayam'),
  c('onde-onde', 'Onde-Onde', 'Malaysian', 'Desserts', 'Medium', 30, 15, 20, 0, 0, ['Vegetarian', 'Vegan'], ['new'], 'onde-onde'),
  c('apam-balik', 'Apam Balik', 'Malaysian', 'Desserts', 'Medium', 15, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'apam balik'),
  c('ayam-percik', 'Ayam Percik', 'Malaysian', 'Dinner', 'Medium', 25, 30, 4, 0, 0, [], ['new'], 'ayam percik'),
  c('mie-ayam', 'Mie Ayam', 'Indonesian', 'Lunch', 'Easy', 15, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'mie ayam'),
  c('siomay', 'Siomay', 'Indonesian', 'Appetizers', 'Medium', 35, 40, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'siomay'),
  c('perkedel', 'Perkedel', 'Indonesian', 'Appetizers', 'Easy', 20, 15, 6, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'perkedel'),
  c('balinese-sambal-matah', 'Balinese Sambal Matah', 'Indonesian', 'Appetizers', 'Easy', 10, 0, 6, 0, 0, ['Dairy-Free'], ['new'], 'balinese sambal matah'),
  c('zhoug', 'Zhoug', 'Middle Eastern', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian'], ['new'], 'zhoug')
];
