/**
 * Weekly Delight — recipe catalog, volume twenty.
 * A hundred more of the most-searched dishes the site did not have.
 *
 * With 1,309 recipes already published, the shortlist was mostly duplicates:
 * of 226 famous dishes tried against the catalogue, 123 were already here.
 * Nearly every French, Italian and American classic tested came back one —
 * cassoulet, tarte tatin, madeleines, osso buco, cannoli, chicken kiev,
 * chicken paprikash, peach cobbler, pound cake, salade nicoise.
 *
 * So this volume goes where the catalogue was thinnest against real demand:
 * the national cuisines sitting on three to eight entries apiece. Pakistan,
 * Sri Lanka, the Philippines, Malaysia, Peru, Ethiopia, Ghana, Georgia, the
 * Nordic countries. Plus the Indian sweets and street chaat, which
 * seventy-six Indian entries had almost entirely skipped, and the Indian
 * drinks — thandai, aam panna, jaljeera, filter coffee — which had none.
 *
 * This file is generated from the verified-available list rather than typed
 * out from it. Volume nineteen was typed, and nine rows went in that the
 * duplicate check had already flagged. A list that has been checked should be
 * used, not retyped.
 *
 * Spread: Indian 20, American 7, Mexican 6, Filipino 4, Polish 4, German 4, Russian 3, Korean 3, Japanese 3, Thai 3, Vietnamese 3, Chinese 3, Pakistani 2, Sri Lankan 2, Malaysian 2, Peruvian 2, Jamaican 2, Ethiopian 2, Belgian 2, Lebanese 2, Irish 2, Indonesian 1, Moroccan 1, Persian 1, Brazilian 1, Nigerian 1, South African 1, Kenyan 1, International 1, Czech 1, Austrian 1, Dutch 1, Swedish 1, Middle Eastern 1, Egyptian 1, Scottish 1, Ukrainian 1, Hungarian 1, Georgian 1, Israeli 1.
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
  c('chicken-karahi', 'Chicken Karahi', 'Pakistani', 'Dinner', 'Medium', 20, 35, 4, 0, 0, ['Gluten-Free'], ['new'], 'Chicken karahi wok tomato ginger julienne'),
  c('aloo-keema', 'Aloo Keema', 'Pakistani', 'Dinner', 'Easy', 15, 35, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Aloo keema mince potato curry coriander'),
  c('pol-sambol', 'Pol Sambol', 'Sri Lankan', 'Appetizers', 'Easy', 15, 0, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Pol sambol coconut chilli lime red'),
  c('dhal-curry', 'Sri Lankan Dhal Curry', 'Sri Lankan', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Sri lankan dhal curry coconut turmeric'),
  c('kare-kare', 'Kare-Kare', 'Filipino', 'Dinner', 'Hard', 30, 150, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Kare kare oxtail peanut stew bagoong'),
  c('lumpia', 'Lumpiang Shanghai', 'Filipino', 'Appetizers', 'Medium', 30, 20, 6, 0, 0, ['Dairy-Free'], ['new'], 'Lumpia shanghai thin spring rolls dipping sauce'),
  c('chicken-inasal', 'Chicken Inasal', 'Filipino', 'Dinner', 'Medium', 25, 25, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Chicken inasal annatto grilled quarter'),
  c('sisig', 'Sisig', 'Filipino', 'Appetizers', 'Medium', 25, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'Sisig sizzling chopped pork plate egg'),
  c('ayam-goreng', 'Ayam Goreng', 'Indonesian', 'Dinner', 'Medium', 20, 30, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Ayam goreng indonesian fried chicken crumbs'),
  c('beef-satay', 'Beef Satay', 'Malaysian', 'Appetizers', 'Medium', 25, 20, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Beef satay skewers peanut sauce cucumber'),
  c('hokkien-mee', 'Hokkien Mee', 'Malaysian', 'Dinner', 'Medium', 20, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Hokkien mee dark thick noodles prawns'),
  c('ghoriba', 'Ghoriba', 'Moroccan', 'Desserts', 'Easy', 20, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'Ghoriba cracked almond biscuits icing sugar'),
  c('kookoo-sabzi', 'Kookoo Sabzi', 'Persian', 'Lunch', 'Easy', 20, 35, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Kookoo sabzi green herb frittata wedge'),
  c('placki-ziemniaczane', 'Placki Ziemniaczane', 'Polish', 'Breakfast', 'Easy', 20, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'Potato pancakes crisp soured cream'),
  c('makowiec', 'Makowiec', 'Polish', 'Baking', 'Hard', 40, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'Makowiec poppy seed roll spiral slice'),
  c('stroganoff-sauce', 'Stroganoff Sauce', 'Russian', 'Dinner', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'Stroganoff mushroom soured cream sauce pan'),
  c('syrniki', 'Syrniki', 'Russian', 'Breakfast', 'Easy', 20, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Syrniki curd cheese pancakes soured cream jam'),
  c('brigadeiro', 'Brigadeiro', 'Brazilian', 'Desserts', 'Easy', 10, 20, 20, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Brigadeiro chocolate truffles sprinkles'),
  c('papa-a-la-huancaina', 'Papa a la Huancaína', 'Peruvian', 'Appetizers', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Papa a la huancaina potato yellow sauce egg'),
  c('anticuchos', 'Anticuchos', 'Peruvian', 'Appetizers', 'Medium', 20, 15, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Anticuchos beef heart skewers aji panca'),
  c('jerk-pork', 'Jerk Pork', 'Jamaican', 'Dinner', 'Medium', 25, 60, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Jerk pork charred scotch bonnet marinade'),
  c('jamaican-patties', 'Jamaican Beef Patties', 'Jamaican', 'Lunch', 'Hard', 40, 30, 8, 0, 0, ['Dairy-Free'], ['new'], 'Jamaican beef patty golden turmeric pastry'),
  c('puff-puff', 'Puff Puff', 'Nigerian', 'Desserts', 'Easy', 20, 20, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Puff puff round fried dough balls sugar'),
  c('shiro-wat', 'Shiro Wat', 'Ethiopian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Shiro wat chickpea flour stew injera'),
  c('misir-wat', 'Misir Wat', 'Ethiopian', 'Dinner', 'Easy', 15, 40, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Misir wat red lentil stew berbere'),
  c('milk-tart', 'Milk Tart', 'South African', 'Desserts', 'Easy', 25, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'Milk tart melktert cinnamon dusted slice'),
  c('mandazi', 'Mandazi', 'Kenyan', 'Desserts', 'Easy', 25, 20, 10, 0, 0, ['Vegetarian'], ['new'], 'Mandazi triangular fried dough cardamom'),
  c('baleadas', 'Baleadas', 'International', 'Breakfast', 'Easy', 15, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Baleadas folded flour tortilla beans cream'),
  c('knedliky', 'Czech Dumplings', 'Czech', 'Dinner', 'Medium', 25, 30, 6, 0, 0, ['Vegetarian'], ['new'], 'Czech bread dumplings sliced gravy'),
  c('tafelspitz', 'Tafelspitz', 'Austrian', 'Dinner', 'Easy', 20, 150, 6, 0, 0, ['Gluten-Free'], ['new'], 'Tafelspitz boiled beef broth root vegetables'),
  c('moules-mariniere', 'Moules Marinière', 'Belgian', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'Moules mariniere mussels white wine parsley pot'),
  c('stoofvlees', 'Stoofvlees', 'Belgian', 'Dinner', 'Easy', 25, 150, 6, 0, 0, ['Dairy-Free'], ['new'], 'Stoofvlees flemish beef beer stew dark'),
  c('stamppot', 'Stamppot', 'Dutch', 'Dinner', 'Easy', 20, 30, 4, 0, 0, [], ['new'], 'Stamppot mashed potato kale sausage well'),
  c('raggmunk', 'Raggmunk', 'Swedish', 'Dinner', 'Easy', 20, 20, 4, 0, 0, [], ['new'], 'Raggmunk potato pancakes bacon lingonberry'),
  c('mansaf', 'Mansaf', 'Middle Eastern', 'Dinner', 'Hard', 30, 120, 6, 0, 0, ['Gluten-Free'], ['new'], 'Mansaf lamb jameed yoghurt rice almonds'),
  c('sfiha', 'Sfiha', 'Lebanese', 'Appetizers', 'Medium', 30, 20, 6, 0, 0, ['Dairy-Free'], ['new'], 'Sfiha open lamb meat pies baalbek'),
  c('fattet-hummus', 'Fattet Hummus', 'Lebanese', 'Breakfast', 'Easy', 20, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Fattet hummus chickpeas yoghurt pine nuts bread'),
  c('shorbat-adas', 'Shorbat Adas', 'Egyptian', 'Lunch', 'Easy', 10, 35, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Shorbat adas yellow lentil soup lemon cumin'),
  c('tteok-galbi', 'Tteok Galbi', 'Korean', 'Dinner', 'Medium', 25, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'Tteok galbi minced short rib patties glaze'),
  c('dubu-jorim', 'Dubu Jorim', 'Korean', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Dubu jorim braised tofu soy chilli spring onion'),
  c('ojingeo-bokkeum', 'Ojingeo Bokkeum', 'Korean', 'Dinner', 'Easy', 20, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'Ojingeo bokkeum spicy stir fried squid'),
  c('zosui', 'Zosui', 'Japanese', 'Lunch', 'Easy', 10, 20, 2, 0, 0, ['Dairy-Free'], ['new'], 'Zosui rice soup egg spring onion earthenware'),
  c('katsudon', 'Katsudon', 'Japanese', 'Dinner', 'Medium', 20, 20, 2, 0, 0, ['Dairy-Free'], ['new'], 'Katsudon pork cutlet egg rice bowl'),
  c('hiyayakko', 'Hiyayakko', 'Japanese', 'Appetizers', 'Easy', 10, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Hiyayakko chilled tofu ginger bonito spring onion'),
  c('khai-jiao', 'Khai Jiao', 'Thai', 'Breakfast', 'Easy', 5, 8, 2, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Khai jiao puffed thai omelette rice chilli sauce'),
  c('pad-prik-king', 'Pad Prik King', 'Thai', 'Dinner', 'Easy', 15, 15, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Pad prik king dry red curry green beans'),
  c('khanom-krok', 'Khanom Krok', 'Thai', 'Desserts', 'Medium', 20, 25, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Khanom krok coconut pancakes half spheres'),
  c('banh-cuon', 'Bánh Cuốn', 'Vietnamese', 'Breakfast', 'Hard', 30, 30, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Banh cuon steamed rice rolls pork fried shallot'),
  c('bun-rieu', 'Bún Riêu', 'Vietnamese', 'Lunch', 'Medium', 25, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'Bun rieu crab tomato noodle soup'),
  c('goi-ga', 'Gỏi Gà', 'Vietnamese', 'Lunch', 'Easy', 25, 15, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Goi ga vietnamese chicken cabbage salad'),
  c('paneer-tikka-masala', 'Paneer Tikka Masala', 'Indian', 'Dinner', 'Medium', 25, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Paneer tikka masala charred cubes gravy'),
  c('dal-palak', 'Dal Palak', 'Indian', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Dal palak spinach lentils tempering'),
  c('veg-kolhapuri', 'Veg Kolhapuri', 'Indian', 'Dinner', 'Medium', 25, 30, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Veg kolhapuri dark red spicy mixed vegetables'),
  c('tawa-pulao', 'Tawa Pulao', 'Indian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Tawa pulao mumbai street rice pav bhaji masala'),
  c('masala-pav', 'Masala Pav', 'Indian', 'Appetizers', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Masala pav buttery griddled rolls spiced onion'),
  c('dabeli', 'Dabeli', 'Indian', 'Appetizers', 'Medium', 25, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'Dabeli kutchi potato pav pomegranate sev'),
  c('samosa-chaat', 'Samosa Chaat', 'Indian', 'Appetizers', 'Easy', 15, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'Samosa chaat crushed samosa chole chutneys'),
  c('aloo-chaat', 'Aloo Chaat', 'Indian', 'Appetizers', 'Easy', 15, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Aloo chaat fried potato cubes chaat masala'),
  c('dahi-vada', 'Dahi Vada', 'Indian', 'Appetizers', 'Medium', 30, 20, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Dahi vada lentil dumplings yoghurt chutneys'),
  c('rasgulla', 'Rasgulla', 'Indian', 'Desserts', 'Hard', 30, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'Rasgulla white spongy balls syrup bowl'),
  c('mysore-pak', 'Mysore Pak', 'Indian', 'Desserts', 'Medium', 15, 30, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Mysore pak porous gram flour ghee fudge'),
  c('kaju-katli', 'Kaju Katli', 'Indian', 'Desserts', 'Medium', 20, 25, 16, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Kaju katli cashew diamonds silver leaf'),
  c('besan-ladoo', 'Besan Ladoo', 'Indian', 'Desserts', 'Easy', 15, 25, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Besan ladoo roasted gram flour balls'),
  c('malpua', 'Malpua', 'Indian', 'Desserts', 'Medium', 20, 25, 6, 0, 0, ['Vegetarian'], ['new'], 'Malpua fried pancakes soaked syrup rabri'),
  c('thandai', 'Thandai', 'Indian', 'Drinks', 'Easy', 20, 10, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Thandai spiced almond milk saffron glass'),
  c('aam-panna', 'Aam Panna', 'Indian', 'Drinks', 'Easy', 15, 20, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Aam panna raw mango green drink mint'),
  c('jaljeera', 'Jaljeera', 'Indian', 'Drinks', 'Easy', 15, 2, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Jaljeera cumin mint cooler boondi glass'),
  c('chaas', 'Chaas', 'Indian', 'Drinks', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Chaas spiced buttermilk cumin curry leaf'),
  c('filter-coffee', 'South Indian Filter Coffee', 'Indian', 'Drinks', 'Easy', 10, 10, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Filter coffee frothy davara tumbler pour'),
  c('bombay-sandwich', 'Bombay Sandwich', 'Indian', 'Breakfast', 'Easy', 15, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'Bombay sandwich green chutney layers sev'),
  c('lanzhou-beef-noodles', 'Lanzhou Beef Noodle Soup', 'Chinese', 'Dinner', 'Hard', 30, 120, 4, 0, 0, ['Dairy-Free'], ['new'], 'Lanzhou beef noodle soup clear broth radish'),
  c('pineapple-bun', 'Pineapple Bun', 'Chinese', 'Baking', 'Hard', 40, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'Pineapple bun bo lo bao crackled topping'),
  c('hong-kong-milk-tea', 'Hong Kong Milk Tea', 'Chinese', 'Drinks', 'Easy', 10, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'Hong kong milk tea silk stocking evaporated milk'),
  c('chili-cheese-fries', 'Chili Cheese Fries', 'American', 'Appetizers', 'Easy', 15, 30, 4, 0, 0, [], ['new'], 'Chili cheese fries loaded chips melted cheese'),
  c('po-boy', 'Shrimp Po Boy', 'American', 'Lunch', 'Medium', 25, 15, 4, 0, 0, [], ['new'], 'Shrimp po boy fried prawns baguette remoulade'),
  c('french-dip', 'French Dip', 'American', 'Lunch', 'Easy', 20, 25, 4, 0, 0, [], ['new'], 'French dip beef roll au jus dipping'),
  c('patty-melt', 'Patty Melt', 'American', 'Dinner', 'Easy', 15, 20, 2, 0, 0, [], ['new'], 'Patty melt rye onions swiss griddled burger'),
  c('grits', 'Cheesy Grits', 'American', 'Breakfast', 'Easy', 5, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Cheesy grits creamy bowl butter pool'),
  c('corned-beef-hash', 'Corned Beef Hash', 'American', 'Breakfast', 'Easy', 15, 25, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Corned beef hash crisp skillet fried egg'),
  c('monkey-bread', 'Monkey Bread', 'American', 'Baking', 'Medium', 30, 35, 10, 0, 0, ['Vegetarian'], ['new'], 'Monkey bread pull apart caramel ring'),
  c('tattie-scones', 'Tattie Scones', 'Scottish', 'Breakfast', 'Easy', 20, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'Tattie scones triangular potato farls griddle'),
  c('barmbrack', 'Barmbrack', 'Irish', 'Baking', 'Easy', 20, 60, 10, 0, 0, ['Vegetarian'], ['new'], 'Barmbrack irish fruit loaf slice butter'),
  c('dublin-coddle', 'Dublin Coddle', 'Irish', 'Dinner', 'Easy', 20, 90, 4, 0, 0, ['Dairy-Free'], ['new'], 'Dublin coddle sausage bacon potato broth'),
  c('rouladen', 'Rouladen', 'German', 'Dinner', 'Medium', 30, 120, 4, 0, 0, ['Dairy-Free'], ['new'], 'Rouladen rolled beef bacon pickle gravy'),
  c('kartoffelsalat', 'German Potato Salad', 'German', 'Lunch', 'Easy', 20, 25, 6, 0, 0, ['Dairy-Free'], ['new'], 'German potato salad warm bacon vinegar'),
  c('black-forest-gateau', 'Black Forest Gateau', 'German', 'Desserts', 'Hard', 40, 35, 10, 0, 0, ['Vegetarian'], ['new'], 'Black forest gateau cherries cream chocolate'),
  c('obatzda', 'Obatzda', 'German', 'Appetizers', 'Easy', 15, 0, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Obatzda bavarian cheese spread pretzel radish'),
  c('pierogi-ruskie', 'Pierogi Ruskie', 'Polish', 'Dinner', 'Hard', 45, 20, 6, 0, 0, ['Vegetarian'], ['new'], 'Pierogi ruskie potato cheese dumplings onion'),
  c('sernik', 'Sernik', 'Polish', 'Desserts', 'Medium', 30, 60, 10, 0, 0, ['Vegetarian'], ['new'], 'Sernik polish baked cheesecake slice'),
  c('medovik', 'Medovik', 'Russian', 'Desserts', 'Hard', 45, 40, 12, 0, 0, ['Vegetarian'], ['new'], 'Medovik honey cake thin layers slice'),
  c('varenyky', 'Varenyky', 'Ukrainian', 'Dinner', 'Hard', 45, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Varenyky cherry dumplings soured cream'),
  c('dobos-torte', 'Dobos Torte', 'Hungarian', 'Desserts', 'Hard', 50, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'Dobos torte caramel topped layered slice'),
  c('pkhali', 'Pkhali', 'Georgian', 'Appetizers', 'Easy', 25, 15, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Pkhali walnut vegetable pate pomegranate'),
  c('jachnun', 'Jachnun', 'Israeli', 'Breakfast', 'Hard', 40, 180, 6, 0, 0, ['Vegetarian'], ['new'], 'Jachnun rolled yemenite pastry egg tomato'),
  c('sopa-de-tortilla', 'Sopa de Tortilla', 'Mexican', 'Lunch', 'Easy', 20, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'Sopa de tortilla strips avocado crema'),
  c('camarones-a-la-diabla', 'Camarones a la Diabla', 'Mexican', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Camarones a la diabla prawns red chilli sauce'),
  c('esquites', 'Esquites', 'Mexican', 'Appetizers', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Esquites corn cup mayonnaise cheese chilli'),
  c('paletas', 'Paletas', 'Mexican', 'Desserts', 'Easy', 15, 0, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Paletas fruit ice lollies mango chilli'),
  c('conchas', 'Conchas', 'Mexican', 'Baking', 'Hard', 40, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'Conchas shell patterned sweet bread rolls'),
  c('gorditas', 'Gorditas', 'Mexican', 'Dinner', 'Medium', 25, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Gorditas split corn cakes stuffed filling')
];
