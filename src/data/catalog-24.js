/**
 * Weekly Delight — recipe catalog, volume twenty-four.
 * A hundred dishes from the parts of the world the catalogue reached least:
 * South America, the Caribbean, Africa, Persia and the Caucasus, Central and
 * South Asia, Southeast Asia, Korea, Japan, Taiwan, Poland, Hungary, Portugal,
 * the Balkans, Iceland and Lithuania.
 *
 * Every dish was tried against the 1,709 recipes already published, with
 * tools/dedupe-candidates.js, before any of it was written. 613 dishes were
 * tried, and 592 of them were new. In volume twenty-three nearly a fifth of the
 * dishes tried were already published, and here only 10 were: leche de tigre is
 * in the ceviche, niter kibbeh is in the doro wat, payasam is the kheer, nước
 * chấm is in the bún chả, and vol-au-vent is the bouchée à la reine. Eleven
 * more shared a word with a published recipe and were read by hand. Arepa de
 * choclo is a sweet-corn griddle cake and not the arepas already here, so it is
 * in; the rest were left out.
 *
 * One dish was written and then dropped. Chai tow kway is the steamed, chilled
 * and fried radish cake that the site already has as lo bak go, so bak kut teh
 * took its place.
 *
 * This file is generated from the verified list rather than typed out from it,
 * and `npm run check` fails if two recipes are the same dish.
 *
 * Spread: Indian 7, Puerto Rican 5, Brazilian 4, Nigerian 4, Persian 4,
 * Peruvian 4, Afghan 3, Balkan 3, Bangladeshi 3, Burmese 3, Cambodian 3,
 * Filipino 3, Icelandic 3, Indonesian 3, Lithuanian 3, Nepalese 3, Senegalese
 * 3, Argentinian 2, Colombian 2, Cuban 2, Georgian 2, Ghanaian 2, Jamaican 2,
 * Japanese 2, Korean 2, Malaysian 2, Mexican 2, Moroccan 2, Polish 2, South
 * African 2, Turkish 2, Chilean 1, Ethiopian 1, Hungarian 1, Kenyan 1,
 * Pakistani 1, Portuguese 1, Singaporean 1, Sri Lankan 1, Taiwanese 1, Thai
 * 1, Vietnamese 1.
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
  c('pollo-a-la-brasa', 'Pollo a la Brasa', 'Peruvian', 'Dinner', 'Medium', 20, 80, 4, 0, 0, ['Dairy-Free'], ['new'], 'Pollo a la brasa Peruvian roast chicken golden skin cut up with green aji sauce and fries'),
  c('tallarines-verdes', 'Tallarines Verdes', 'Peruvian', 'Dinner', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'Tallarines verdes Peruvian green spaghetti creamy basil spinach sauce queso fresco plate'),
  c('chicha-morada', 'Chicha Morada', 'Peruvian', 'Drinks', 'Easy', 15, 45, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Chicha morada deep purple Peruvian drink in a jug with ice diced apple and pineapple cinnamon sticks'),
  c('tacu-tacu', 'Tacu Tacu', 'Peruvian', 'Dinner', 'Medium', 20, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Tacu tacu crisp Peruvian rice and bean cake topped with fried egg and salsa criolla onions'),
  c('picanha', 'Picanha', 'Brazilian', 'Dinner', 'Easy', 20, 35, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Picanha grilled sliced rump cap with crisp fat cap rare pink centre vinagrete on a board'),
  c('farofa', 'Farofa', 'Brazilian', 'Dinner', 'Easy', 10, 15, 6, 0, 0, [], ['new'], 'Farofa toasted cassava flour with crisp bacon egg and parsley golden crumbs in a bowl'),
  c('bolo-de-cenoura', 'Bolo de Cenoura', 'Brazilian', 'Baking', 'Easy', 20, 40, 12, 0, 0, ['Vegetarian'], ['new'], 'Bolo de cenoura Brazilian carrot cake bright orange sponge with glossy chocolate glaze slice'),
  c('quindim', 'Quindim', 'Brazilian', 'Desserts', 'Medium', 25, 45, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Quindim golden glossy Brazilian coconut egg yolk custards turned out shiny yellow with coconut on top'),
  c('choripan', 'Choripán', 'Argentinian', 'Lunch', 'Easy', 20, 25, 4, 0, 0, [], ['new'], 'Choripan grilled chorizo split in a crusty roll with fresh green chimichurri Argentine street food'),
  c('medialunas', 'Medialunas', 'Argentinian', 'Baking', 'Hard', 60, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'Medialunas Argentine crescent rolls glossy sugar glazed golden layered croissant like breakfast'),
  c('arepa-de-choclo', 'Arepa de Choclo', 'Colombian', 'Breakfast', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Arepa de choclo Colombian sweet corn pancake griddled golden folded with melted cheese'),
  c('sancocho-de-gallina', 'Sancocho de Gallina', 'Colombian', 'Dinner', 'Medium', 30, 100, 6, 0, 0, [], ['new'], 'Sancocho de gallina Colombian chicken soup with green plantain yuca potato corn on the cob in a bowl'),
  c('empanadas-de-pino', 'Empanadas de Pino', 'Chilean', 'Lunch', 'Medium', 60, 60, 8, 0, 0, [], ['new'], 'Empanadas de pino large Chilean baked empanada beef onion filling cut open showing egg olive raisin'),
  c('picadillo', 'Picadillo', 'Cuban', 'Dinner', 'Easy', 15, 35, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Cuban picadillo savoury minced beef with olives raisins capers and tomato served over white rice'),
  c('moros-y-cristianos', 'Moros y Cristianos', 'Cuban', 'Dinner', 'Easy', 15, 40, 6, 0, 0, [], ['new'], 'Moros y cristianos Cuban black beans and white rice cooked together speckled in a pot with bacon'),
  c('pernil', 'Pernil', 'Puerto Rican', 'Dinner', 'Medium', 30, 285, 10, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Pernil Puerto Rican roast pork shoulder with crackling skin pulled and sliced garlic oregano adobo'),
  c('mofongo', 'Mofongo', 'Puerto Rican', 'Dinner', 'Medium', 20, 25, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Mofongo mashed fried green plantain dome with garlic and pork crackling served with warm broth'),
  c('arroz-con-gandules', 'Arroz con Gandules', 'Puerto Rican', 'Dinner', 'Medium', 20, 50, 6, 0, 0, [], ['new'], 'Arroz con gandules Puerto Rican rice and pigeon peas golden with olives sofrito in a pot'),
  c('tostones', 'Tostones', 'Puerto Rican', 'Appetizers', 'Easy', 10, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Tostones twice fried green plantain discs golden crisp salted with garlic mojo dipping sauce'),
  c('coquito', 'Coquito', 'Puerto Rican', 'Drinks', 'Easy', 10, 0, 12, 0, 0, [], ['new'], 'Coquito Puerto Rican coconut eggnog creamy chilled drink in small glasses cinnamon stick'),
  c('jamaican-oxtail-stew', 'Jamaican Oxtail Stew', 'Jamaican', 'Dinner', 'Medium', 20, 220, 4, 0, 0, [], ['new'], 'Jamaican oxtail stew rich dark braise with butter beans carrots and thyme served with rice and peas'),
  c('escovitch-fish', 'Escovitch Fish', 'Jamaican', 'Dinner', 'Medium', 30, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'Escovitch fish crisp fried whole snapper covered with pickled onion carrot and peppers Jamaican'),
  c('chiles-en-nogada', 'Chiles en Nogada', 'Mexican', 'Holiday Specials', 'Hard', 90, 60, 6, 0, 0, [], ['new'], 'Chiles en nogada poblano stuffed with fruity picadillo covered in white walnut sauce pomegranate seeds parsley'),
  c('pan-de-muerto', 'Pan de Muerto', 'Mexican', 'Baking', 'Medium', 40, 30, 8, 0, 0, ['Vegetarian'], ['new'], 'Pan de muerto round sweet bread with bone shaped strips on top brushed with butter rolled in sugar'),
  c('akara', 'Akara', 'Nigerian', 'Breakfast', 'Medium', 30, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Akara Nigerian black eyed pea fritters golden brown deep fried balls in a basket with pepper sauce'),
  c('efo-riro', 'Efo Riro', 'Nigerian', 'Dinner', 'Medium', 25, 65, 6, 0, 0, ['Dairy-Free'], ['new'], 'Efo riro Nigerian spinach stew rich red pepper base with beef smoked fish palm oil served with pounded yam'),
  c('chin-chin', 'Chin Chin', 'Nigerian', 'Appetizers', 'Medium', 40, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'Chin chin crunchy golden Nigerian fried dough cubes in a bowl snack'),
  c('nigerian-meat-pie', 'Nigerian Meat Pie', 'Nigerian', 'Lunch', 'Medium', 60, 50, 8, 0, 0, [], ['new'], 'Nigerian meat pie golden hand pies filled with curried beef potato and carrot cut open flaky pastry'),
  c('red-red', 'Red Red', 'Ghanaian', 'Dinner', 'Easy', 20, 60, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Red red Ghanaian black eyed pea stew in palm oil tomato with fried ripe plantain slices on the side'),
  c('shito', 'Shito', 'Ghanaian', 'Appetizers', 'Medium', 20, 45, 24, 0, 0, [], ['new'], 'Shito Ghanaian black pepper sauce dark oily chilli sauce in a jar with a spoon'),
  c('beef-tibs', 'Beef Tibs', 'Ethiopian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Gluten-Free'], ['new'], 'Ethiopian beef tibs seared cubes of beef with onion tomato green chilli and rosemary served with injera'),
  c('sosaties', 'Sosaties', 'South African', 'Dinner', 'Medium', 30, 25, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Sosaties Cape Malay lamb skewers marinated in curry apricot and onion grilled with dried apricots'),
  c('koeksisters', 'Koeksisters', 'South African', 'Desserts', 'Hard', 60, 40, 24, 0, 0, ['Vegetarian'], ['new'], 'Koeksisters plaited golden fried dough soaked in ice cold syrup glossy South African sweet twists on a rack'),
  c('bastilla', 'Bastilla', 'Moroccan', 'Dinner', 'Hard', 60, 110, 8, 0, 0, [], ['new'], 'Bastilla Moroccan chicken pie golden layered crisp pastry dusted icing sugar cinnamon lattice slice showing filling'),
  c('baghrir', 'Baghrir', 'Moroccan', 'Breakfast', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'Baghrir Moroccan thousand hole pancakes full of tiny holes served with honey and melted butter stacked'),
  c('thieboudienne', 'Thieboudienne', 'Senegalese', 'Dinner', 'Hard', 50, 90, 6, 0, 0, ['Dairy-Free'], ['new'], 'Thieboudienne Senegalese fish and rice stuffed fish steaks cassava carrot cabbage on red rice platter'),
  c('poulet-yassa', 'Poulet Yassa', 'Senegalese', 'Dinner', 'Easy', 20, 55, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Poulet yassa Senegalese chicken in a tangy lemon mustard onion sauce with olives served over rice'),
  c('mafe', 'Mafé', 'Senegalese', 'Dinner', 'Easy', 20, 115, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Mafe West African peanut stew with beef sweet potato carrot and cabbage in a rich orange sauce with rice'),
  c('githeri', 'Githeri', 'Kenyan', 'Dinner', 'Easy', 15, 50, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Githeri Kenyan maize and bean stew with potato carrot and tomato in a bowl garnished with coriander'),
  c('zereshk-polo-ba-morgh', 'Zereshk Polo ba Morgh', 'Persian', 'Dinner', 'Medium', 30, 90, 6, 0, 0, ['Gluten-Free'], ['new'], 'Zereshk polo ba morgh Persian saffron rice with barberries and pistachios and saffron chicken on a platter'),
  c('khoresh-gheimeh', 'Khoresh Gheimeh', 'Persian', 'Dinner', 'Medium', 20, 120, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Khoresh gheimeh Persian lamb and yellow split pea stew with dried lime topped with crisp fried potato'),
  c('persian-love-cake', 'Persian Love Cake', 'Persian', 'Baking', 'Medium', 25, 40, 12, 0, 0, ['Vegetarian'], ['new'], 'Persian love cake moist golden almond cake with rose water glaze pistachios and dried rose petals slice'),
  c('faloodeh', 'Faloodeh', 'Persian', 'Desserts', 'Medium', 20, 15, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Faloodeh Persian frozen rice noodle rose sorbet scooped with lime juice pistachios in a glass'),
  c('satsivi', 'Satsivi', 'Georgian', 'Dinner', 'Medium', 30, 60, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Satsivi Georgian cold chicken in creamy walnut sauce with pomegranate seeds and coriander on a plate'),
  c('badrijani-nigvzit', 'Badrijani Nigvzit', 'Georgian', 'Appetizers', 'Medium', 30, 20, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Badrijani nigvzit Georgian aubergine rolls filled with walnut paste topped with pomegranate seeds'),
  c('simit', 'Simit', 'Turkish', 'Baking', 'Medium', 30, 25, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Simit Turkish sesame bread rings golden crusted with sesame seeds on a tray Istanbul street bread'),
  c('cilbir', 'Çılbır', 'Turkish', 'Breakfast', 'Easy', 10, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'Cilbir Turkish poached eggs on garlic yoghurt with red chilli butter and dried mint in a bowl'),
  c('kabuli-pulao', 'Kabuli Pulao', 'Afghan', 'Dinner', 'Medium', 40, 120, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Kabuli pulao Afghan lamb and rice with caramelised carrots raisins and almonds heaped on a platter'),
  c('bolani', 'Bolani', 'Afghan', 'Lunch', 'Medium', 40, 25, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Bolani Afghan stuffed flatbread crisp golden half moons filled with potato and spring onion cut in triangles'),
  c('borani-banjan', 'Borani Banjan', 'Afghan', 'Appetizers', 'Medium', 20, 40, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Borani banjan Afghan fried aubergine in tomato sauce topped with garlic mint yoghurt on a platter'),
  c('kathi-roll', 'Kathi Roll', 'Indian', 'Lunch', 'Medium', 40, 40, 4, 0, 0, [], ['new'], 'Kathi roll Kolkata street food chicken tikka in egg coated paratha with onions and green chutney wrapped in paper'),
  c('dum-aloo', 'Dum Aloo', 'Indian', 'Dinner', 'Medium', 20, 45, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Dum aloo baby potatoes in a rich red spiced yoghurt gravy with coriander in a copper bowl'),
  c('sarson-da-saag', 'Sarson da Saag with Makki di Roti', 'Indian', 'Dinner', 'Medium', 40, 70, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Sarson da saag Punjabi mustard greens with white butter and makki di roti maize flatbread on a tray'),
  c('dal-baati-churma', 'Dal Baati Churma', 'Indian', 'Dinner', 'Hard', 60, 80, 6, 0, 0, ['Vegetarian'], ['new'], 'Dal baati churma Rajasthani baked wheat balls crushed in ghee with mixed lentil dal and sweet churma on a thali'),
  c('kadhi-pakora', 'Kadhi Pakora', 'Indian', 'Dinner', 'Medium', 30, 60, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Kadhi pakora Punjabi yoghurt curry with gram flour onion fritters and a red chilli tadka served with rice'),
  c('lemon-rice', 'Lemon Rice', 'Indian', 'Lunch', 'Easy', 10, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Lemon rice bright yellow South Indian rice with peanuts curry leaves mustard seeds and coriander in a bowl'),
  c('mishti-doi', 'Mishti Doi', 'Indian', 'Desserts', 'Medium', 15, 35, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Mishti doi Bengali sweet yoghurt set in small clay pots caramel coloured with a spoon'),
  c('halwa-puri', 'Halwa Puri', 'Pakistani', 'Breakfast', 'Hard', 60, 60, 8, 0, 0, ['Vegetarian'], ['new'], 'Halwa puri Pakistani breakfast puffed fried puri with sooji halwa and chickpea curry on a plate'),
  c('shorshe-ilish', 'Shorshe Ilish', 'Bangladeshi', 'Dinner', 'Medium', 20, 15, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Shorshe ilish Bengali fish steaks in pungent yellow mustard gravy with green chillies served with rice'),
  c('chotpoti', 'Chotpoti', 'Bangladeshi', 'Appetizers', 'Easy', 20, 35, 4, 0, 0, ['Vegetarian'], ['new'], 'Chotpoti Bangladeshi street food chickpea and potato chaat topped with egg onion chilli coriander and crushed crisps'),
  c('bhapa-pitha', 'Bhapa Pitha', 'Bangladeshi', 'Desserts', 'Medium', 30, 30, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Bhapa pitha Bangladeshi steamed rice flour cakes filled with coconut and jaggery on a plate'),
  c('dal-bhat', 'Dal Bhat', 'Nepalese', 'Dinner', 'Medium', 30, 60, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Dal bhat Nepali meal of rice lentil soup vegetable curry and tomato pickle on a steel thali'),
  c('sel-roti', 'Sel Roti', 'Nepalese', 'Breakfast', 'Medium', 15, 30, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Sel roti Nepali ring shaped rice flour doughnuts golden fried lightly sweet with cardamom on a plate'),
  c('thukpa', 'Thukpa', 'Nepalese', 'Dinner', 'Easy', 20, 35, 4, 0, 0, [], ['new'], 'Thukpa Himalayan noodle soup with chicken cabbage carrot and spinach in a steaming bowl with lime'),
  c('watalappan', 'Watalappan', 'Sri Lankan', 'Desserts', 'Medium', 20, 45, 6, 0, 0, ['Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Watalappan Sri Lankan steamed coconut custard with jaggery cardamom nutmeg and cashews in a dish'),
  c('mie-goreng', 'Mie Goreng', 'Indonesian', 'Quick Meals', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'Mie goreng Indonesian fried noodles with chicken prawns egg and pak choi in a wok topped with crispy fried shallots'),
  c('bakso', 'Bakso', 'Indonesian', 'Dinner', 'Medium', 40, 70, 4, 0, 0, ['Dairy-Free'], ['new'], 'Bakso Indonesian beef meatball soup with noodles tofu boiled egg fried shallots and celery leaves in a white bowl'),
  c('opor-ayam', 'Opor Ayam', 'Indonesian', 'Dinner', 'Medium', 25, 55, 5, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Opor ayam Javanese chicken in pale coconut sauce with lemongrass galangal and bay leaves served with rice'),
  c('teh-tarik', 'Teh Tarik', 'Malaysian', 'Drinks', 'Easy', 3, 7, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Teh tarik Malaysian pulled milk tea being poured between two glasses with a thick froth'),
  c('assam-laksa', 'Assam Laksa', 'Malaysian', 'Dinner', 'Medium', 40, 55, 4, 0, 0, ['Dairy-Free'], ['new'], 'Assam laksa Penang sour fish noodle soup with thick rice noodles pineapple cucumber mint and prawn paste in a bowl'),
  c('bak-kut-teh', 'Bak Kut Teh', 'Singaporean', 'Dinner', 'Easy', 15, 120, 4, 0, 0, ['Dairy-Free'], ['new'], 'Bak kut teh Singapore peppery pork rib soup with whole garlic cloves and tofu puffs in a bowl with rice and chillies in soy sauce'),
  c('tinola', 'Tinola', 'Filipino', 'Dinner', 'Easy', 15, 50, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Tinola Filipino chicken ginger soup with green papaya and chilli leaves in a clear broth in a bowl'),
  c('kaldereta', 'Kaldereta', 'Filipino', 'Dinner', 'Medium', 25, 150, 5, 0, 0, [], ['new'], 'Kaldereta Filipino beef stew in rich tomato sauce with potatoes carrots red and green peppers and olives in a pot'),
  c('bistek-tagalog', 'Bistek Tagalog', 'Filipino', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'Bistek Tagalog Filipino beef steak with soft onion rings in soy and citrus sauce served with rice on a plate'),
  c('gai-yang', 'Gai Yang', 'Thai', 'Dinner', 'Medium', 30, 50, 5, 0, 0, ['Dairy-Free'], ['new'], 'Gai yang Thai grilled chicken with crisp golden skin cut into pieces with a red dipping sauce and lime'),
  c('bo-luc-lac', 'Bò Lúc Lắc', 'Vietnamese', 'Dinner', 'Easy', 20, 10, 4, 0, 0, [], ['new'], 'Bo luc lac Vietnamese shaking beef cubes seared in a wok on a watercress and tomato salad with lime pepper dip'),
  c('mohinga', 'Mohinga', 'Burmese', 'Breakfast', 'Medium', 30, 55, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Mohinga Burmese fish noodle soup with rice vermicelli golden chickpea broth boiled egg coriander and crispy onions'),
  c('laphet-thoke', 'Laphet Thoke', 'Burmese', 'Lunch', 'Easy', 25, 5, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Laphet thoke Burmese tea leaf salad with shredded cabbage tomato peanuts fried garlic sesame and crunchy beans'),
  c('ohn-no-khao-swe', 'Ohn No Khao Swè', 'Burmese', 'Dinner', 'Medium', 20, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'Ohn no khao swe Burmese coconut chicken noodle soup with egg noodles boiled egg shallots coriander and lime'),
  c('fish-amok', 'Fish Amok', 'Cambodian', 'Dinner', 'Medium', 30, 30, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Fish amok Cambodian steamed fish curry in coconut custard with lemongrass and kaffir lime in banana leaf cups'),
  c('kuy-teav', 'Kuy Teav', 'Cambodian', 'Breakfast', 'Medium', 30, 150, 6, 0, 0, ['Dairy-Free'], ['new'], 'Kuy teav Cambodian pork noodle soup with rice noodles minced pork prawns bean sprouts herbs and fried garlic in a clear broth'),
  c('nom-banh-chok', 'Nom Banh Chok', 'Cambodian', 'Breakfast', 'Medium', 40, 50, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Nom banh chok Khmer rice noodles with green fish gravy topped with cucumber green beans bean sprouts and herbs'),
  c('jeyuk-bokkeum', 'Jeyuk Bokkeum', 'Korean', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Jeyuk bokkeum Korean spicy pork stir-fry with onions and green chilli glossy red sauce with rice and lettuce leaves'),
  c('yukgaejang', 'Yukgaejang', 'Korean', 'Dinner', 'Medium', 20, 100, 4, 0, 0, ['Dairy-Free'], ['new'], 'Yukgaejang Korean spicy beef soup with shredded brisket bean sprouts spring onions glass noodles and egg in a red broth'),
  c('oden', 'Oden', 'Japanese', 'Dinner', 'Medium', 25, 75, 4, 0, 0, ['Dairy-Free'], ['new'], 'Oden Japanese winter hot pot of daikon boiled eggs fish cakes konnyaku and tofu in a light dashi broth with mustard'),
  c('chicken-nanban', 'Chicken Nanban', 'Japanese', 'Dinner', 'Medium', 20, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'Chicken nanban Japanese fried chicken in sweet sour soy vinegar sauce topped with egg tartar sauce on shredded cabbage'),
  c('oyster-omelette', 'Taiwanese Oyster Omelette', 'Taiwanese', 'Quick Meals', 'Easy', 10, 10, 2, 0, 0, ['Dairy-Free'], ['new'], 'Taiwanese oyster omelette with small oysters chewy starch batter egg and greens topped with sweet red sauce on a plate'),
  c('rosol', 'Rosół', 'Polish', 'Dinner', 'Easy', 20, 150, 6, 0, 0, ['Dairy-Free'], ['new'], 'Rosol Polish chicken soup clear golden broth with carrots thin egg noodles and parsley in a white bowl'),
  c('kapusniak', 'Kapuśniak', 'Polish', 'Dinner', 'Easy', 20, 75, 6, 0, 0, ['Dairy-Free'], ['new'], 'Kapusniak Polish sauerkraut soup with smoked pork ribs sausage potatoes and carrots in a rustic bowl with rye bread'),
  c('rakott-krumpli', 'Rakott Krumpli', 'Hungarian', 'Dinner', 'Easy', 30, 75, 6, 0, 0, ['Gluten-Free'], ['new'], 'Rakott krumpli Hungarian layered potato bake with sliced eggs smoked sausage and sour cream golden on top in a dish'),
  c('bacalhau-com-natas', 'Bacalhau com Natas', 'Portuguese', 'Dinner', 'Medium', 40, 70, 6, 0, 0, [], ['new'], 'Bacalhau com natas Portuguese salt cod baked with potatoes onions and creamy bechamel golden on top in a baking dish'),
  c('ajvar', 'Ajvar', 'Balkan', 'Appetizers', 'Medium', 25, 90, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Ajvar Balkan roasted red pepper and aubergine relish in a glass jar with bread and white cheese'),
  c('strukli', 'Štrukli', 'Balkan', 'Dinner', 'Hard', 50, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'Strukli Croatian baked cheese pastry rolls in a golden sour cream sauce in a baking dish'),
  c('prebranac', 'Prebranac', 'Balkan', 'Dinner', 'Easy', 20, 150, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Prebranac Serbian baked white beans with slow cooked onions paprika and bay in a clay dish crisp on top'),
  c('kjotsupa', 'Kjötsúpa', 'Icelandic', 'Dinner', 'Easy', 25, 95, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Kjotsupa Icelandic lamb soup with lamb on the bone swede carrots potatoes and rice in a deep bowl with parsley'),
  c('plokkfiskur', 'Plokkfiskur', 'Icelandic', 'Dinner', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'Plokkfiskur Icelandic fish stew of flaked white fish and potatoes in creamy sauce with chives and dark rye bread'),
  c('kleinur', 'Kleinur', 'Icelandic', 'Desserts', 'Medium', 30, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'Kleinur Icelandic twisted doughnuts golden fried knotted pastries on a plate with a cup of coffee'),
  c('cepelinai', 'Cepelinai', 'Lithuanian', 'Dinner', 'Hard', 60, 75, 6, 0, 0, ['Gluten-Free'], ['new'], 'Cepelinai Lithuanian zeppelin potato dumplings stuffed with pork served with sour cream and bacon sauce and dill'),
  c('saltibarsciai', 'Šaltibarščiai', 'Lithuanian', 'Lunch', 'Easy', 20, 60, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Saltibarsciai Lithuanian cold beetroot soup bright pink with kefir cucumber dill halved egg and hot potatoes'),
  c('kugelis', 'Kugelis', 'Lithuanian', 'Dinner', 'Medium', 30, 90, 6, 0, 0, ['Gluten-Free'], ['new'], 'Kugelis Lithuanian baked potato pudding with bacon and onion dark golden and crisp on top served with sour cream')
];
