'use strict';

/**
 * Weekly Delight — recipe catalog, volume fifty-one.
 * One hundred more of the dishes people in the USA, Canada, Australia, the UK and New Zealand look for by name.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: Mexican 22, Caribbean 13, Pacific 12, American 11, Jamaican 9, Trinidadian 5, Brazilian 3, Cuban 3, New Zealand 3, Puerto Rican 3, Australian 2, Colombian 2, Ecuadorian 2, Hawaiian 2, Peruvian 2, Venezuelan 2, Argentinian 1, Bolivian 1, Canadian 1, Uruguayan 1.
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
  c('enchiladas-suizas', 'Enchiladas Suizas', 'Mexican', 'Dinner', 'Medium', 30, 30, 4, 0, 0, [], ['new'], 'enchiladas suizas'),
  c('huevos-a-la-mexicana', 'Huevos a la Mexicana', 'Mexican', 'Breakfast', 'Easy', 10, 10, 2, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'huevos a la mexicana'),
  c('machaca-con-huevo', 'Machaca con Huevo', 'Mexican', 'Breakfast', 'Easy', 10, 10, 2, 0, 0, ['Dairy-Free'], ['new'], 'machaca con huevo'),
  c('chile-colorado', 'Chile Colorado', 'Mexican', 'Dinner', 'Medium', 25, 120, 6, 0, 0, ['Dairy-Free'], ['new'], 'chile colorado'),
  c('mole-verde', 'Mole Verde', 'Mexican', 'Dinner', 'Hard', 40, 60, 6, 0, 0, [], ['new'], 'mole verde'),
  c('chicken-tamales', 'Chicken Tamales', 'Mexican', 'Dinner', 'Hard', 90, 90, 12, 0, 0, ['Dairy-Free'], ['new'], 'chicken tamales'),
  c('sweet-tamales', 'Sweet Tamales', 'Mexican', 'Desserts', 'Hard', 60, 75, 12, 0, 0, ['Gluten-Free'], ['new'], 'sweet tamales'),
  c('tlayudas', 'Tlayudas', 'Mexican', 'Dinner', 'Medium', 20, 15, 2, 0, 0, [], ['new'], 'tlayudas'),
  c('quesadillas-de-flor-de-calabaza', 'Quesadillas de Flor de Calabaza', 'Mexican', 'Quick Meals', 'Easy', 15, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'quesadillas de flor de calabaza'),
  c('frijoles-de-la-olla', 'Frijoles de la Olla', 'Mexican', 'Healthy', 'Easy', 10, 120, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'frijoles de la olla'),
  c('salsa-roja', 'Salsa Roja', 'Mexican', 'Appetizers', 'Easy', 10, 15, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'salsa roja'),
  c('mexican-hot-chocolate', 'Mexican Hot Chocolate', 'Mexican', 'Drinks', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'mexican hot chocolate'),
  c('causa-rellena', 'Causa Rellena', 'Peruvian', 'Appetizers', 'Medium', 40, 20, 6, 0, 0, ['Dairy-Free'], ['new'], 'causa rellena'),
  c('arroz-chaufa', 'Arroz Chaufa', 'Peruvian', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'arroz chaufa'),
  c('aborrajados', 'Aborrajados', 'Colombian', 'Appetizers', 'Medium', 20, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'aborrajados'),
  c('colombian-bunuelos', 'Colombian Bunuelos', 'Colombian', 'Appetizers', 'Medium', 15, 20, 20, 0, 0, ['Vegetarian'], ['new'], 'colombian bunuelos'),
  c('reina-pepiada-arepas', 'Reina Pepiada Arepas', 'Venezuelan', 'Lunch', 'Medium', 25, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'reina pepiada arepas'),
  c('tequenos', 'Tequenos', 'Venezuelan', 'Appetizers', 'Medium', 35, 10, 20, 0, 0, ['Vegetarian'], ['new'], 'tequenos'),
  c('locro-de-papa', 'Locro de Papa', 'Ecuadorian', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'locro de papa'),
  c('encebollado', 'Encebollado', 'Ecuadorian', 'Dinner', 'Medium', 20, 35, 4, 0, 0, ['Gluten-Free'], ['new'], 'encebollado'),
  c('saltenas', 'Saltenas', 'Bolivian', 'Baking', 'Hard', 60, 60, 10, 0, 0, [], ['new'], 'saltenas'),
  c('argentine-asado', 'Argentine Asado', 'Argentinian', 'Dinner', 'Medium', 20, 150, 8, 0, 0, [], ['new'], 'argentine asado'),
  c('chivito', 'Chivito', 'Uruguayan', 'Lunch', 'Medium', 20, 15, 2, 0, 0, [], ['new'], 'chivito'),
  c('vatapa', 'Vatapa', 'Brazilian', 'Dinner', 'Medium', 25, 35, 6, 0, 0, [], ['new'], 'vatapa'),
  c('lechon-asado', 'Lechon Asado', 'Cuban', 'Dinner', 'Medium', 20, 240, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'lechon asado'),
  c('yuca-con-mojo', 'Yuca con Mojo', 'Cuban', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'yuca con mojo'),
  c('cuban-flan', 'Cuban Flan', 'Cuban', 'Desserts', 'Medium', 20, 60, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'cuban flan'),
  c('puerto-rican-pasteles', 'Puerto Rican Pasteles', 'Puerto Rican', 'Dinner', 'Hard', 90, 100, 12, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'puerto rican pasteles'),
  c('puerto-rican-alcapurrias', 'Puerto Rican Alcapurrias', 'Puerto Rican', 'Appetizers', 'Hard', 60, 10, 12, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'puerto rican alcapurrias'),
  c('puerto-rican-tembleque', 'Puerto Rican Tembleque', 'Puerto Rican', 'Desserts', 'Easy', 10, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'puerto rican tembleque'),
  c('la-bandera-dominicana', 'La Bandera Dominicana', 'Caribbean', 'Dinner', 'Medium', 25, 60, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'la bandera dominicana'),
  c('dominican-mangu', 'Dominican Mangu', 'Caribbean', 'Breakfast', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'dominican mangu'),
  c('haitian-griot', 'Haitian Griot', 'Caribbean', 'Dinner', 'Medium', 20, 75, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'haitian griot'),
  c('haitian-pikliz', 'Haitian Pikliz', 'Caribbean', 'Appetizers', 'Easy', 15, 0, 10, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'haitian pikliz'),
  c('diri-ak-djon-djon', 'Diri ak Djon Djon', 'Caribbean', 'Dinner', 'Medium', 15, 45, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'diri ak djon djon'),
  c('jamaican-curry-chicken', 'Jamaican Curry Chicken', 'Jamaican', 'Dinner', 'Easy', 20, 45, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'jamaican curry chicken'),
  c('jamaican-brown-stew-chicken', 'Jamaican Brown Stew Chicken', 'Jamaican', 'Dinner', 'Easy', 20, 50, 4, 0, 0, ['Dairy-Free'], ['new'], 'jamaican brown stew chicken'),
  c('jamaican-festival', 'Jamaican Festival', 'Jamaican', 'Baking', 'Easy', 20, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'jamaican festival'),
  c('jamaican-fry-dumplings', 'Jamaican Fry Dumplings', 'Jamaican', 'Baking', 'Easy', 15, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'jamaican fry dumplings'),
  c('jamaican-bun-and-cheese', 'Jamaican Bun and Cheese', 'Jamaican', 'Baking', 'Medium', 30, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'jamaican bun and cheese'),
  c('jamaican-rum-cake', 'Jamaican Rum Cake', 'Jamaican', 'Desserts', 'Medium', 25, 60, 12, 0, 0, ['Vegetarian'], ['new'], 'jamaican rum cake'),
  c('gungo-peas-soup', 'Gungo Peas Soup', 'Jamaican', 'Dinner', 'Easy', 15, 60, 6, 0, 0, ['Dairy-Free'], ['new'], 'gungo peas soup'),
  c('jamaican-pepper-pot-soup', 'Jamaican Pepper Pot Soup', 'Jamaican', 'Dinner', 'Medium', 20, 60, 6, 0, 0, ['Gluten-Free'], ['new'], 'jamaican pepper pot soup'),
  c('jamaican-red-pea-soup', 'Jamaican Red Pea Soup', 'Jamaican', 'Dinner', 'Easy', 20, 90, 6, 0, 0, [], ['new'], 'jamaican red pea soup'),
  c('dhalpuri-roti', 'Dhalpuri Roti', 'Trinidadian', 'Baking', 'Hard', 40, 25, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'dhalpuri roti'),
  c('trinidadian-pelau', 'Trinidadian Pelau', 'Trinidadian', 'Dinner', 'Easy', 15, 45, 6, 0, 0, [], ['new'], 'trinidadian pelau'),
  c('trinidadian-curry-duck', 'Trinidadian Curry Duck', 'Trinidadian', 'Dinner', 'Medium', 20, 75, 6, 0, 0, ['Gluten-Free'], ['new'], 'trinidadian curry duck'),
  c('aloo-pie', 'Aloo Pie', 'Trinidadian', 'Appetizers', 'Medium', 30, 15, 8, 0, 0, ['Vegetarian', 'Vegan'], ['new'], 'aloo pie'),
  c('bake-and-shark', 'Bake and Shark', 'Trinidadian', 'Lunch', 'Medium', 30, 15, 4, 0, 0, [], ['new'], 'bake and shark'),
  c('cou-cou-with-flying-fish', 'Cou-Cou with Flying Fish', 'Caribbean', 'Dinner', 'Medium', 20, 35, 4, 0, 0, ['Gluten-Free'], ['new'], 'cou-cou with flying fish'),
  c('bajan-macaroni-pie', 'Bajan Macaroni Pie', 'Caribbean', 'Dinner', 'Easy', 15, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'bajan macaroni pie'),
  c('bajan-fish-cakes', 'Bajan Fish Cakes', 'Caribbean', 'Appetizers', 'Easy', 20, 15, 6, 0, 0, ['Dairy-Free'], ['new'], 'bajan fish cakes'),
  c('guyanese-pepperpot', 'Guyanese Pepperpot', 'Caribbean', 'Dinner', 'Medium', 25, 180, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'guyanese pepperpot'),
  c('metemgee', 'Metemgee', 'Caribbean', 'Dinner', 'Medium', 25, 60, 6, 0, 0, ['Vegetarian'], ['new'], 'metemgee'),
  c('conch-fritters', 'Conch Fritters', 'Caribbean', 'Appetizers', 'Medium', 20, 15, 6, 0, 0, [], ['new'], 'conch fritters'),
  c('caribbean-coconut-rice', 'Caribbean Coconut Rice', 'Caribbean', 'Dinner', 'Easy', 5, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'caribbean coconut rice'),
  c('caribbean-rum-punch', 'Caribbean Rum Punch', 'Caribbean', 'Drinks', 'Easy', 5, 0, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'caribbean rum punch'),
  c('samoan-palusami', 'Samoan Palusami', 'Pacific', 'Dinner', 'Medium', 30, 60, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'samoan palusami'),
  c('samoan-pani-popo', 'Samoan Pani Popo', 'Pacific', 'Baking', 'Medium', 25, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'samoan pani popo'),
  c('samoan-chop-suey', 'Samoan Chop Suey', 'Pacific', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'samoan chop suey'),
  c('samoan-panikeke', 'Samoan Panikeke', 'Pacific', 'Desserts', 'Easy', 10, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'samoan panikeke'),
  c('samoan-koko-alaisa', 'Samoan Koko Alaisa', 'Pacific', 'Breakfast', 'Easy', 5, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'samoan koko alaisa'),
  c('tongan-lu-pulu', 'Tongan Lu Pulu', 'Pacific', 'Dinner', 'Medium', 30, 90, 6, 0, 0, [], ['new'], 'tongan lu pulu'),
  c('tongan-otai', 'Tongan Otai', 'Pacific', 'Drinks', 'Easy', 15, 0, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'tongan otai'),
  c('fijian-kokoda', 'Fijian Kokoda', 'Pacific', 'Appetizers', 'Easy', 20, 0, 4, 0, 0, ['Gluten-Free'], ['new'], 'fijian kokoda'),
  c('fijian-rourou', 'Fijian Rourou', 'Pacific', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'fijian rourou'),
  c('fijian-lovo', 'Fijian Lovo', 'Pacific', 'Dinner', 'Hard', 30, 120, 8, 0, 0, [], ['new'], 'fijian lovo'),
  c('fijian-curry', 'Fijian Curry', 'Pacific', 'Dinner', 'Easy', 15, 35, 4, 0, 0, ['Gluten-Free'], ['new'], 'fijian curry'),
  c('cook-islands-ika-mata', 'Cook Islands Ika Mata', 'Pacific', 'Appetizers', 'Easy', 20, 0, 4, 0, 0, ['Gluten-Free'], ['new'], 'cook islands ika mata'),
  c('hawaiian-lau-lau', 'Hawaiian Lau Lau', 'Hawaiian', 'Dinner', 'Hard', 40, 240, 6, 0, 0, ['Gluten-Free'], ['new'], 'hawaiian lau lau'),
  c('hawaiian-mac-salad', 'Hawaiian Mac Salad', 'Hawaiian', 'Lunch', 'Easy', 15, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'hawaiian mac salad'),
  c('l-p-cake', 'L&P Cake', 'New Zealand', 'Baking', 'Easy', 20, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'l&p cake'),
  c('barbecued-prawns', 'Barbecued Prawns', 'Australian', 'Dinner', 'Easy', 15, 8, 4, 0, 0, [], ['new'], 'barbecued prawns'),
  c('newfoundland-fish-cakes', 'Newfoundland Fish Cakes', 'Canadian', 'Dinner', 'Easy', 25, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'newfoundland fish cakes'),
  c('cajun-boudin', 'Cajun Boudin', 'American', 'Dinner', 'Hard', 40, 60, 8, 0, 0, [], ['new'], 'cajun boudin'),
  c('creole-okra-and-tomatoes', 'Creole Okra and Tomatoes', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'creole okra and tomatoes'),
  c('southern-tomato-pie', 'Southern Tomato Pie', 'American', 'Lunch', 'Medium', 30, 35, 6, 0, 0, ['Vegetarian'], ['new'], 'southern tomato pie'),
  c('kentucky-burgoo', 'Kentucky Burgoo', 'American', 'Dinner', 'Medium', 40, 240, 10, 0, 0, ['Dairy-Free'], ['new'], 'kentucky burgoo'),
  c('pickled-okra', 'Pickled Okra', 'American', 'Appetizers', 'Easy', 20, 10, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'pickled okra'),
  c('pickled-peaches', 'Pickled Peaches', 'American', 'Appetizers', 'Easy', 30, 15, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'pickled peaches'),
  c('watermelon-rind-pickles', 'Watermelon Rind Pickles', 'American', 'Appetizers', 'Medium', 40, 30, 10, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'watermelon rind pickles'),
  c('frogmore-stew', 'Frogmore Stew', 'American', 'Dinner', 'Easy', 15, 30, 6, 0, 0, [], ['new'], 'frogmore stew'),
  c('charleston-red-rice', 'Charleston Red Rice', 'American', 'Dinner', 'Easy', 15, 45, 6, 0, 0, [], ['new'], 'charleston red rice'),
  c('louisiana-crawfish-pie', 'Louisiana Crawfish Pie', 'American', 'Dinner', 'Medium', 30, 40, 6, 0, 0, [], ['new'], 'louisiana crawfish pie'),
  c('champurrado', 'Champurrado', 'Mexican', 'Drinks', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'champurrado'),
  c('atole', 'Atole', 'Mexican', 'Drinks', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'atole'),
  c('mexican-chocolate-cake', 'Mexican Chocolate Cake', 'Mexican', 'Desserts', 'Medium', 25, 35, 12, 0, 0, ['Vegetarian'], ['new'], 'mexican chocolate cake'),
  c('capirotada', 'Capirotada', 'Mexican', 'Desserts', 'Medium', 20, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'capirotada'),
  c('flan-de-coco', 'Flan de Coco', 'Mexican', 'Desserts', 'Medium', 20, 60, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'flan de coco'),
  c('cajeta', 'Cajeta', 'Mexican', 'Desserts', 'Medium', 10, 90, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'cajeta'),
  c('bunuelos-mexicanos', 'Buñuelos Mexicanos', 'Mexican', 'Desserts', 'Medium', 25, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'buñuelos mexicanos'),
  c('tres-leches-cupcakes', 'Tres Leches Cupcakes', 'Mexican', 'Desserts', 'Medium', 25, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'tres leches cupcakes'),
  c('pudim-de-leite', 'Pudim de Leite', 'Brazilian', 'Desserts', 'Medium', 15, 60, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'pudim de leite'),
  c('romeu-e-julieta', 'Romeu e Julieta', 'Brazilian', 'Desserts', 'Easy', 5, 0, 4, 0, 0, ['Vegetarian'], ['new'], 'romeu e julieta'),
  c('huevos-divorciados', 'Huevos Divorciados', 'Mexican', 'Breakfast', 'Easy', 15, 15, 2, 0, 0, ['Vegetarian'], ['new'], 'huevos divorciados'),
  c('steak-and-cheese-pie', 'Steak and Cheese Pie', 'Australian', 'Dinner', 'Medium', 30, 45, 6, 0, 0, [], ['new'], 'steak and cheese pie'),
  c('green-lipped-mussels', 'Green Lipped Mussels', 'New Zealand', 'Dinner', 'Easy', 10, 10, 4, 0, 0, ['Gluten-Free'], ['new'], 'green lipped mussels'),
  c('chilli-mussels', 'Chilli Mussels', 'New Zealand', 'Dinner', 'Easy', 10, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'chilli mussels'),
  c('salsa-macha', 'Salsa Macha', 'Mexican', 'Appetizers', 'Easy', 10, 15, 10, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'salsa macha')
];
