'use strict';

/**
 * Weekly Delight — recipe catalog, volume forty-five.
 * One hundred slow cooker dishes, sides, salads, sandwiches, drinks, breakfasts, vegetable mains, pasta and sauces, with a few more fish and puddings.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: American 33, Italian 22, British 14, French 5, Japanese 4, Australian 3, Greek 3, Mexican 3, Filipino 2, Indian 2, Spanish 2, African 1, Chinese 1, Hungarian 1, Malaysian 1, Middle Eastern 1, Thai 1, Turkish 1.
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
  c('roasted-squash-and-apple-soup', 'Roasted Squash and Apple Soup', 'British', 'Healthy', 'Easy', 15, 45, 4, 0, 0, ['Vegetarian'], ['new'], 'roasted squash and apple soup'),
  c('stracciatella', 'Stracciatella', 'Italian', 'Quick Meals', 'Easy', 5, 10, 4, 0, 0, [], ['new'], 'stracciatella'),
  c('hungarian-mushroom-soup', 'Hungarian Mushroom Soup', 'Hungarian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'hungarian mushroom soup'),
  c('tom-yum-soup', 'Tom Yum Soup', 'Thai', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'tom yum soup'),
  c('dolma', 'Dolma', 'Greek', 'Appetizers', 'Medium', 45, 50, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'dolma'),
  c('kofte-with-yoghurt', 'Kofte with Yoghurt', 'Turkish', 'Dinner', 'Easy', 20, 12, 4, 0, 0, [], ['new'], 'kofte with yoghurt'),
  c('air-fryer-zucchini-fries', 'Air Fryer Zucchini Fries', 'American', 'Appetizers', 'Easy', 15, 12, 4, 0, 0, [], ['new'], 'air fryer zucchini fries'),
  c('slow-cooker-pork-chops', 'Slow Cooker Pork Chops', 'American', 'Dinner', 'Easy', 10, 240, 4, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker pork chops'),
  c('slow-cooker-lasagne', 'Slow Cooker Lasagne', 'Italian', 'Dinner', 'Medium', 30, 240, 8, 0, 0, [], ['new'], 'slow cooker lasagne'),
  c('slow-cooker-chilli-con-carne', 'Slow Cooker Chilli con Carne', 'American', 'Dinner', 'Easy', 15, 300, 6, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker chilli con carne'),
  c('slow-cooker-beef-bourguignon', 'Slow Cooker Beef Bourguignon', 'French', 'Dinner', 'Medium', 30, 360, 6, 0, 0, [], ['new'], 'slow cooker beef bourguignon'),
  c('slow-cooker-honey-garlic-chicken', 'Slow Cooker Honey Garlic Chicken', 'American', 'Dinner', 'Easy', 10, 240, 4, 0, 0, ['Dairy-Free'], ['new'], 'slow cooker honey garlic chicken'),
  c('slow-cooker-macaroni-and-cheese', 'Slow Cooker Macaroni and Cheese', 'American', 'Dinner', 'Easy', 15, 120, 8, 0, 0, ['Vegetarian'], ['new'], 'slow cooker macaroni and cheese'),
  c('slow-cooker-mashed-potatoes', 'Slow Cooker Mashed Potatoes', 'American', 'Dinner', 'Easy', 15, 240, 8, 0, 0, [], ['new'], 'slow cooker mashed potatoes'),
  c('slow-cooker-apple-crisp', 'Slow Cooker Apple Crisp', 'American', 'Desserts', 'Easy', 15, 180, 6, 0, 0, ['Vegetarian'], ['new'], 'slow cooker apple crisp'),
  c('sheet-pan-salmon-and-broccoli', 'Sheet Pan Salmon and Broccoli', 'American', 'Quick Meals', 'Easy', 10, 18, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'sheet pan salmon and broccoli'),
  c('sheet-pan-shrimp-boil', 'Sheet Pan Shrimp Boil', 'American', 'Dinner', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'sheet pan shrimp boil'),
  c('one-pan-sausage-pasta', 'One Pan Sausage Pasta', 'British', 'Quick Meals', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'one pan sausage pasta'),
  c('one-pan-mexican-rice', 'One Pan Mexican Rice', 'Mexican', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'one pan mexican rice'),
  c('bacon-lettuce-and-tomato-sandwich', 'Bacon Lettuce and Tomato Sandwich', 'American', 'Lunch', 'Easy', 10, 10, 2, 0, 0, [], ['new'], 'bacon lettuce and tomato sandwich'),
  c('loaded-sweet-potatoes', 'Loaded Sweet Potatoes', 'American', 'Dinner', 'Easy', 10, 50, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'loaded sweet potatoes'),
  c('disco-fries', 'Disco Fries', 'American', 'Appetizers', 'Easy', 10, 35, 4, 0, 0, [], ['new'], 'disco fries'),
  c('curly-fries', 'Curly Fries', 'American', 'Appetizers', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'curly fries'),
  c('waffle-fries', 'Waffle Fries', 'American', 'Appetizers', 'Easy', 5, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'waffle fries'),
  c('nicoise-salad', 'Nicoise Salad', 'French', 'Lunch', 'Easy', 20, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'nicoise salad'),
  c('spinach-salad-with-warm-bacon', 'Spinach Salad with Warm Bacon', 'American', 'Lunch', 'Easy', 10, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'spinach salad with warm bacon'),
  c('roasted-beet-salad-with-goat-cheese', 'Roasted Beet Salad with Goat Cheese', 'American', 'Healthy', 'Easy', 15, 50, 4, 0, 0, ['Vegetarian'], ['new'], 'roasted beet salad with goat cheese'),
  c('rice-salad', 'Rice Salad', 'Italian', 'Lunch', 'Easy', 15, 15, 6, 0, 0, ['Dairy-Free'], ['new'], 'rice salad'),
  c('protein-smoothie', 'Protein Smoothie', 'American', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian'], ['new'], 'protein smoothie'),
  c('oat-milk-latte', 'Oat Milk Latte', 'American', 'Drinks', 'Easy', 3, 3, 1, 0, 0, ['Vegetarian'], ['new'], 'oat milk latte'),
  c('watermelon-juice', 'Watermelon Juice', 'Mexican', 'Drinks', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'watermelon juice'),
  c('strawberry-daiquiri-mocktail', 'Strawberry Daiquiri Mocktail', 'American', 'Drinks', 'Easy', 5, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'strawberry daiquiri mocktail'),
  c('breakfast-sandwiches', 'Breakfast Sandwiches', 'American', 'Breakfast', 'Easy', 10, 10, 4, 0, 0, [], ['new'], 'breakfast sandwiches'),
  c('eggs-sardou', 'Eggs Sardou', 'American', 'Breakfast', 'Hard', 20, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'eggs sardou'),
  c('devilled-eggs', 'Devilled Eggs', 'British', 'Appetizers', 'Easy', 15, 12, 12, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'devilled eggs'),
  c('frittata-with-spinach', 'Frittata with Spinach', 'Italian', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'frittata with spinach'),
  c('cheese-on-toast-with-chutney', 'Cheese on Toast with Chutney', 'British', 'Quick Meals', 'Easy', 5, 5, 2, 0, 0, [], ['new'], 'cheese on toast with chutney'),
  c('banana-bread-french-toast', 'Banana Bread French Toast', 'American', 'Breakfast', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'banana bread french toast'),
  c('fruit-salad-with-honey-lime', 'Fruit Salad with Honey Lime', 'Australian', 'Healthy', 'Easy', 15, 0, 6, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'fruit salad with honey lime'),
  c('shepherds-pie-with-cheesy-mash', 'Shepherd\'s Pie with Cheesy Mash', 'British', 'Dinner', 'Easy', 20, 60, 6, 0, 0, [], ['new'], 'shepherd\'s pie with cheesy mash'),
  c('roast-lamb-dinner', 'Roast Lamb Dinner', 'British', 'Holiday Specials', 'Medium', 30, 150, 6, 0, 0, [], ['new'], 'roast lamb dinner'),
  c('stuffing-balls', 'Stuffing Balls', 'British', 'Holiday Specials', 'Easy', 20, 25, 12, 0, 0, [], ['new'], 'stuffing balls'),
  c('buttered-carrots', 'Buttered Carrots', 'British', 'Dinner', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'buttered carrots'),
  c('corn-on-the-cob-with-chilli-butter', 'Corn on the Cob with Chilli Butter', 'Mexican', 'Dinner', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'corn on the cob with chilli butter'),
  c('grilled-corn-salad', 'Grilled Corn Salad', 'American', 'Lunch', 'Easy', 15, 10, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'grilled corn salad'),
  c('roasted-courgettes', 'Roasted Courgettes', 'Italian', 'Healthy', 'Easy', 10, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'roasted courgettes'),
  c('bbq-pulled-pork-nachos', 'BBQ Pulled Pork Nachos', 'American', 'Appetizers', 'Easy', 15, 15, 6, 0, 0, [], ['new'], 'bbq pulled pork nachos'),
  c('bbq-meatballs', 'BBQ Meatballs', 'American', 'Appetizers', 'Easy', 20, 30, 8, 0, 0, [], ['new'], 'bbq meatballs'),
  c('bbq-baked-beans', 'BBQ Baked Beans', 'American', 'Dinner', 'Easy', 10, 60, 8, 0, 0, ['Dairy-Free'], ['new'], 'bbq baked beans'),
  c('bbq-chicken-drumsticks', 'BBQ Chicken Drumsticks', 'American', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'bbq chicken drumsticks'),
  c('bbq-salmon', 'BBQ Salmon', 'Australian', 'Dinner', 'Easy', 10, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'bbq salmon'),
  c('grilled-halloumi-skewers', 'Grilled Halloumi Skewers', 'Greek', 'Appetizers', 'Easy', 15, 8, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'grilled halloumi skewers'),
  c('grilled-romaine-salad', 'Grilled Romaine Salad', 'American', 'Lunch', 'Easy', 10, 6, 4, 0, 0, [], ['new'], 'grilled romaine salad'),
  c('grilled-vegetable-platter', 'Grilled Vegetable Platter', 'Italian', 'Healthy', 'Easy', 20, 12, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'grilled vegetable platter'),
  c('grilled-garlic-prawns', 'Grilled Garlic Prawns', 'Australian', 'Appetizers', 'Easy', 10, 6, 4, 0, 0, [], ['new'], 'grilled garlic prawns'),
  c('veggie-chilli', 'Veggie Chilli', 'American', 'Dinner', 'Easy', 15, 40, 6, 0, 0, ['Dairy-Free'], ['new'], 'veggie chilli'),
  c('vegetarian-lasagne', 'Vegetarian Lasagne', 'Italian', 'Dinner', 'Medium', 30, 60, 8, 0, 0, [], ['new'], 'vegetarian lasagne'),
  c('vegetable-tagine', 'Vegetable Tagine', 'Middle Eastern', 'Dinner', 'Easy', 20, 45, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'vegetable tagine'),
  c('vegetable-paella', 'Vegetable Paella', 'Spanish', 'Dinner', 'Medium', 20, 40, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'vegetable paella'),
  c('vegetable-samosas', 'Vegetable Samosas', 'Indian', 'Appetizers', 'Medium', 40, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'vegetable samosas'),
  c('mushroom-bourguignon', 'Mushroom Bourguignon', 'French', 'Dinner', 'Medium', 20, 50, 4, 0, 0, ['Vegetarian', 'Vegan'], ['new'], 'mushroom bourguignon'),
  c('chickpea-tikka-masala', 'Chickpea Tikka Masala', 'Indian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'chickpea tikka masala'),
  c('teriyaki-tofu', 'Teriyaki Tofu', 'Japanese', 'Quick Meals', 'Easy', 10, 12, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'teriyaki tofu'),
  c('crispy-tofu-bites', 'Crispy Tofu Bites', 'Japanese', 'Appetizers', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'crispy tofu bites'),
  c('baked-feta-tomatoes', 'Baked Feta Tomatoes', 'Greek', 'Appetizers', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'baked feta tomatoes'),
  c('pasta-arrabbiata', 'Pasta Arrabbiata', 'Italian', 'Quick Meals', 'Easy', 5, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'pasta arrabbiata'),
  c('pasta-allamatriciana', 'Pasta all\'Amatriciana', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'pasta all\'amatriciana'),
  c('linguine-al-limone', 'Linguine al Limone', 'Italian', 'Quick Meals', 'Easy', 5, 15, 4, 0, 0, [], ['new'], 'linguine al limone'),
  c('rigatoni-alla-vodka', 'Rigatoni alla Vodka', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'rigatoni alla vodka'),
  c('orecchiette-with-sausage', 'Orecchiette with Sausage', 'Italian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, [], ['new'], 'orecchiette with sausage'),
  c('cannelloni', 'Cannelloni', 'Italian', 'Dinner', 'Medium', 30, 40, 6, 0, 0, [], ['new'], 'cannelloni'),
  c('lasagne-rolls', 'Lasagne Rolls', 'Italian', 'Dinner', 'Medium', 30, 35, 6, 0, 0, [], ['new'], 'lasagne rolls'),
  c('gnocchi-with-gorgonzola', 'Gnocchi with Gorgonzola', 'Italian', 'Quick Meals', 'Easy', 5, 12, 4, 0, 0, ['Vegetarian'], ['new'], 'gnocchi with gorgonzola'),
  c('polenta-with-mushrooms', 'Polenta with Mushrooms', 'Italian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, [], ['new'], 'polenta with mushrooms'),
  c('crostini-with-ricotta', 'Crostini with Ricotta', 'Italian', 'Appetizers', 'Easy', 10, 8, 8, 0, 0, ['Vegetarian'], ['new'], 'crostini with ricotta'),
  c('antipasto-platter', 'Antipasto Platter', 'Italian', 'Appetizers', 'Easy', 20, 0, 8, 0, 0, [], ['new'], 'antipasto platter'),
  c('pizza-bianca', 'Pizza Bianca', 'Italian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'pizza bianca'),
  c('deviled-ham-sandwiches', 'Deviled Ham Sandwiches', 'American', 'Lunch', 'Easy', 10, 0, 4, 0, 0, [], ['new'], 'deviled ham sandwiches'),
  c('pinwheel-sandwiches', 'Pinwheel Sandwiches', 'American', 'Appetizers', 'Easy', 15, 0, 12, 0, 0, [], ['new'], 'pinwheel sandwiches'),
  c('smoked-salmon-pate', 'Smoked Salmon Pate', 'British', 'Appetizers', 'Easy', 10, 0, 6, 0, 0, [], ['new'], 'smoked salmon pate'),
  c('fish-goujons', 'Fish Goujons', 'British', 'Dinner', 'Easy', 15, 10, 4, 0, 0, [], ['new'], 'fish goujons'),
  c('chicken-goujons', 'Chicken Goujons', 'British', 'Dinner', 'Easy', 15, 12, 4, 0, 0, [], ['new'], 'chicken goujons'),
  c('bechamel-sauce', 'Bechamel Sauce', 'French', 'Dinner', 'Easy', 5, 10, 6, 0, 0, ['Vegetarian'], ['new'], 'bechamel sauce'),
  c('chocolate-sauce', 'Chocolate Sauce', 'American', 'Desserts', 'Easy', 5, 8, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'chocolate sauce'),
  c('raspberry-coulis', 'Raspberry Coulis', 'French', 'Desserts', 'Easy', 5, 8, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'raspberry coulis'),
  c('quick-pickled-carrots', 'Quick Pickled Carrots', 'American', 'Healthy', 'Easy', 10, 5, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'quick pickled carrots'),
  c('cheesy-leek-bake', 'Cheesy Leek Bake', 'British', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'cheesy leek bake'),
  c('beetroot-risotto', 'Beetroot Risotto', 'Italian', 'Dinner', 'Medium', 10, 35, 4, 0, 0, [], ['new'], 'beetroot risotto'),
  c('pesto-chicken-traybake', 'Pesto Chicken Traybake', 'Italian', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'pesto chicken traybake'),
  c('garlic-mushroom-chicken', 'Garlic Mushroom Chicken', 'British', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'garlic mushroom chicken'),
  c('calamari-rings', 'Calamari Rings', 'Spanish', 'Appetizers', 'Easy', 15, 6, 4, 0, 0, ['Dairy-Free'], ['new'], 'calamari rings'),
  c('chicken-afritada', 'Chicken Afritada', 'Filipino', 'Dinner', 'Easy', 15, 35, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'chicken afritada'),
  c('mango-pudding', 'Mango Pudding', 'Chinese', 'Desserts', 'Easy', 15, 5, 6, 0, 0, ['Gluten-Free'], ['new'], 'mango pudding'),
  c('pandan-cake', 'Pandan Cake', 'Malaysian', 'Baking', 'Medium', 30, 35, 10, 0, 0, ['Vegetarian'], ['new'], 'pandan cake'),
  c('trout-pate', 'Trout Pate', 'British', 'Appetizers', 'Easy', 15, 10, 6, 0, 0, ['Vegetarian'], ['new'], 'trout pate'),
  c('squid-ink-pasta', 'Squid Ink Pasta', 'Italian', 'Dinner', 'Medium', 15, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'squid ink pasta'),
  c('beef-yakiniku', 'Beef Yakiniku', 'Japanese', 'Dinner', 'Easy', 15, 6, 4, 0, 0, ['Dairy-Free'], ['new'], 'beef yakiniku'),
  c('peanut-soup', 'Peanut Soup', 'African', 'Dinner', 'Easy', 15, 35, 4, 0, 0, [], ['new'], 'peanut soup'),
  c('ube-cupcakes', 'Ube Cupcakes', 'Filipino', 'Baking', 'Medium', 30, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'ube cupcakes'),
  c('shirataki-noodle-bowls', 'Shirataki Noodle Bowls', 'Japanese', 'Healthy', 'Easy', 10, 10, 2, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'shirataki noodle bowls')
];
