/**
 * Weekly Delight — recipe catalog, volume two.
 *
 * The next 200 most-searched dishes worldwide, with no overlap against
 * ./catalog.js. Same row shape; the build concatenates both files and
 * validates that every slug is unique and has matching detail content.
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
  /* ---------------------------------------------------------- Italian (16) */
  c('spaghetti-aglio-e-olio', 'Spaghetti Aglio e Olio', 'Italian', 'Quick Meals', 'Easy', 5, 15, 4, 4.8, 3120, ['Vegan', 'Dairy-Free'], ['trending'], 'Spaghetti aglio e olio'),
  c('bucatini-all-amatriciana', "Bucatini all'Amatriciana", 'Italian', 'Dinner', 'Easy', 10, 25, 4, 4.8, 1966, [], [], 'Bucatini amatriciana'),
  c('pasta-alla-norma', 'Pasta alla Norma', 'Italian', 'Dinner', 'Easy', 20, 30, 4, 4.7, 1544, ['Vegetarian'], [], 'Pasta alla norma'),
  c('melanzane-alla-parmigiana', 'Melanzane alla Parmigiana', 'Italian', 'Dinner', 'Medium', 30, 60, 6, 4.8, 2133, ['Vegetarian'], ['editors'], 'Parmigiana di melanzane'),
  c('saltimbocca-alla-romana', 'Saltimbocca alla Romana', 'Italian', 'Dinner', 'Easy', 10, 12, 4, 4.7, 1044, [], [], 'Saltimbocca'),
  c('spaghetti-alle-vongole', 'Spaghetti alle Vongole', 'Italian', 'Dinner', 'Medium', 15, 15, 4, 4.8, 1877, ['Dairy-Free'], [], 'Spaghetti alle vongole'),
  c('orecchiette-cime-di-rapa', 'Orecchiette con Cime di Rapa', 'Italian', 'Dinner', 'Easy', 15, 20, 4, 4.6, 966, ['Dairy-Free'], [], 'Orecchiette cime di rapa'),
  c('panzanella', 'Tuscan Panzanella', 'Italian', 'Healthy', 'Easy', 20, 0, 4, 4.7, 1244, ['Vegan', 'Dairy-Free'], [], 'Panzanella salad'),
  c('creamy-polenta', 'Creamy Parmesan Polenta', 'Italian', 'Dinner', 'Easy', 5, 40, 6, 4.6, 1122, ['Vegetarian', 'Gluten-Free'], [], 'Polenta'),
  c('cannoli', 'Sicilian Cannoli', 'Italian', 'Desserts', 'Hard', 45, 20, 12, 4.8, 2411, ['Vegetarian'], ['trending'], 'Cannoli'),
  c('tiramisu-gelato', 'Vanilla Gelato', 'Italian', 'Desserts', 'Medium', 25, 15, 8, 4.8, 2688, ['Vegetarian', 'Gluten-Free'], [], 'Gelato'),
  c('biscotti', 'Almond Biscotti', 'Italian', 'Baking', 'Easy', 20, 45, 24, 4.7, 1866, ['Vegetarian'], [], 'Biscotti'),
  c('torta-caprese', 'Torta Caprese', 'Italian', 'Desserts', 'Medium', 20, 40, 10, 4.7, 1188, ['Vegetarian', 'Gluten-Free'], [], 'Torta caprese chocolate cake'),

  /* ----------------------------------------------------------- French (14) */
  c('croque-monsieur', 'Croque Monsieur', 'French', 'Lunch', 'Easy', 10, 15, 2, 4.8, 2544, [], ['trending'], 'Croque monsieur'),
  c('gratin-dauphinois', 'Gratin Dauphinois', 'French', 'Dinner', 'Easy', 20, 75, 6, 4.8, 2277, ['Vegetarian', 'Gluten-Free'], [], 'Gratin dauphinois'),
  c('blanquette-de-veau', 'Blanquette de Veau', 'French', 'Dinner', 'Medium', 25, 105, 6, 4.7, 1044, [], [], 'Blanquette de veau'),
  c('moules-marinieres', 'Moules Marinières', 'French', 'Dinner', 'Easy', 15, 15, 4, 4.8, 1966, ['Gluten-Free'], [], 'Moules marinieres'),
  c('tartiflette', 'Tartiflette', 'French', 'Dinner', 'Easy', 20, 45, 6, 4.8, 1622, ['Gluten-Free'], [], 'Tartiflette'),
  c('pissaladiere', 'Pissaladière', 'French', 'Appetizers', 'Medium', 30, 40, 8, 4.6, 866, ['Dairy-Free'], [], 'Pissaladiere'),
  c('pot-au-feu', 'Pot-au-Feu', 'French', 'Dinner', 'Easy', 25, 180, 6, 4.6, 944, ['Gluten-Free', 'Dairy-Free'], [], 'Pot au feu'),
  c('sole-meuniere', 'Sole Meunière', 'French', 'Dinner', 'Easy', 10, 10, 2, 4.7, 1122, [], [], 'Sole meuniere'),
  c('crepes-suzette', 'Crêpes Suzette', 'French', 'Desserts', 'Medium', 25, 20, 4, 4.7, 1755, ['Vegetarian'], [], 'Crepes suzette'),
  c('profiteroles', 'Profiteroles', 'French', 'Desserts', 'Medium', 35, 30, 8, 4.8, 2044, ['Vegetarian'], [], 'Profiteroles'),
  c('mille-feuille', 'Mille-Feuille', 'French', 'Desserts', 'Hard', 50, 35, 8, 4.7, 1344, ['Vegetarian'], [], 'Mille feuille'),
  c('clafoutis', 'Cherry Clafoutis', 'French', 'Desserts', 'Easy', 15, 40, 6, 4.7, 1466, ['Vegetarian'], [], 'Clafoutis'),
  c('brioche', 'Brioche Loaf', 'French', 'Baking', 'Medium', 40, 35, 10, 4.8, 2166, ['Vegetarian'], [], 'Brioche loaf bread sliced'),
  c('madeleines', 'Madeleines', 'French', 'Baking', 'Easy', 20, 12, 24, 4.7, 1877, ['Vegetarian'], [], 'Madeleine cakes'),

  /* --------------------------------------------------------- Japanese (12) */
  c('chicken-karaage', 'Chicken Karaage', 'Japanese', 'Appetizers', 'Easy', 20, 15, 4, 4.9, 3411, ['Dairy-Free'], ['trending'], 'Karaage fried chicken'),
  c('oyakodon', 'Oyakodon', 'Japanese', 'Quick Meals', 'Easy', 10, 15, 2, 4.8, 2044, ['Dairy-Free'], [], 'Oyakodon'),
  c('omurice', 'Omurice', 'Japanese', 'Lunch', 'Medium', 15, 20, 2, 4.7, 1622, [], [], 'Omurice'),
  c('takoyaki', 'Takoyaki', 'Japanese', 'Appetizers', 'Medium', 25, 25, 4, 4.6, 1244, ['Dairy-Free'], [], 'Takoyaki'),
  c('zaru-soba', 'Zaru Soba', 'Japanese', 'Lunch', 'Easy', 10, 8, 2, 4.6, 1122, ['Vegan', 'Dairy-Free'], [], 'Zaru soba'),
  c('sukiyaki', 'Sukiyaki', 'Japanese', 'Dinner', 'Easy', 20, 20, 4, 4.8, 1466, ['Dairy-Free'], [], 'Sukiyaki'),
  c('agedashi-tofu', 'Agedashi Tofu', 'Japanese', 'Appetizers', 'Easy', 15, 12, 4, 4.6, 966, ['Vegetarian', 'Dairy-Free'], [], 'Agedashi tofu'),
  c('chawanmushi', 'Chawanmushi', 'Japanese', 'Appetizers', 'Medium', 15, 20, 4, 4.6, 744, ['Dairy-Free'], [], 'Chawanmushi'),
  c('tamagoyaki', 'Tamagoyaki', 'Japanese', 'Breakfast', 'Medium', 5, 10, 2, 4.7, 1533, ['Dairy-Free'], [], 'Tamagoyaki'),
  c('dorayaki', 'Dorayaki', 'Japanese', 'Desserts', 'Easy', 20, 20, 8, 4.7, 1188, ['Vegetarian'], [], 'Dorayaki'),
  c('mochi', 'Strawberry Daifuku Mochi', 'Japanese', 'Desserts', 'Medium', 30, 10, 8, 4.8, 2277, ['Vegan', 'Gluten-Free', 'Dairy-Free'], ['trending'], 'Daifuku mochi'),
  c('japanese-milk-bread', 'Japanese Milk Bread (Shokupan)', 'Japanese', 'Baking', 'Medium', 40, 35, 10, 4.9, 3044, ['Vegetarian'], ['editors'], 'Shokupan milk bread'),

  /* ---------------------------------------------------------- Chinese (12) */
  c('orange-chicken', 'Orange Chicken', 'Chinese', 'Dinner', 'Medium', 25, 20, 4, 4.8, 3866, ['Dairy-Free'], ['trending'], 'Orange chicken'),
  c('sesame-chicken', 'Sesame Chicken', 'Chinese', 'Dinner', 'Medium', 25, 20, 4, 4.7, 2544, ['Dairy-Free'], [], 'Sesame chicken'),
  c('hong-shao-rou', 'Red-Braised Pork Belly', 'Chinese', 'Dinner', 'Easy', 15, 90, 6, 4.8, 1877, ['Dairy-Free'], [], 'Hong shao rou braised pork'),
  c('twice-cooked-pork', 'Twice-Cooked Pork', 'Chinese', 'Dinner', 'Medium', 20, 25, 4, 4.7, 1244, ['Dairy-Free'], [], 'Twice cooked pork'),
  c('xiao-long-bao', 'Xiao Long Bao', 'Chinese', 'Appetizers', 'Hard', 90, 15, 6, 4.8, 2133, ['Dairy-Free'], ['editors'], 'Xiao long bao soup dumplings'),
  c('char-siu-bao', 'Char Siu Bao', 'Chinese', 'Appetizers', 'Medium', 60, 20, 8, 4.7, 1622, [], [], 'Char siu bao'),
  c('lo-mein', 'Chicken Lo Mein', 'Chinese', 'Quick Meals', 'Easy', 15, 12, 4, 4.7, 2411, ['Dairy-Free'], [], 'Lo mein noodles'),
  c('singapore-noodles', 'Singapore Noodles', 'Chinese', 'Quick Meals', 'Easy', 20, 12, 4, 4.7, 1755, ['Dairy-Free'], [], 'Singapore noodles'),
  c('cumin-lamb', 'Xinjiang Cumin Lamb', 'Chinese', 'Dinner', 'Easy', 20, 12, 4, 4.8, 1344, ['Dairy-Free'], [], 'Cumin lamb'),
  c('tomato-egg-stir-fry', 'Tomato and Egg Stir-Fry', 'Chinese', 'Quick Meals', 'Easy', 8, 10, 2, 4.8, 2688, ['Vegetarian', 'Dairy-Free'], ['trending'], 'Tomato egg stir fry'),
  c('salt-and-pepper-squid', 'Salt and Pepper Squid', 'Chinese', 'Appetizers', 'Medium', 20, 10, 4, 4.7, 1533, ['Dairy-Free'], [], 'Salt and pepper squid'),
  c('congee', 'Century Egg Congee', 'Chinese', 'Breakfast', 'Easy', 10, 75, 4, 4.6, 1188, ['Dairy-Free'], [], 'Congee rice porridge'),

  /* ----------------------------------------------------------- Indian (14) */
  c('paneer-tikka', 'Paneer Tikka', 'Indian', 'Appetizers', 'Easy', 25, 20, 4, 4.8, 2955, ['Vegetarian', 'Gluten-Free'], ['trending'], 'Paneer tikka'),
  c('chicken-korma', 'Chicken Korma', 'Indian', 'Dinner', 'Medium', 20, 45, 4, 4.8, 3122, ['Gluten-Free'], [], 'Chicken korma'),
  c('malai-kofta', 'Malai Kofta', 'Indian', 'Dinner', 'Medium', 35, 30, 4, 4.7, 1622, ['Vegetarian'], [], 'Malai kofta'),
  c('baingan-bharta', 'Baingan Bharta', 'Indian', 'Healthy', 'Easy', 20, 35, 4, 4.7, 1344, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Baingan bharta'),
  c('rajma', 'Rajma Masala', 'Indian', 'Healthy', 'Easy', 15, 45, 4, 4.7, 1466, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Rajma kidney bean curry'),
  c('pav-bhaji', 'Pav Bhaji', 'Indian', 'Lunch', 'Easy', 20, 35, 4, 4.8, 2411, ['Vegetarian'], [], 'Pav bhaji'),
  c('chole-bhature', 'Chole Bhature', 'Indian', 'Lunch', 'Medium', 30, 40, 4, 4.8, 2044, ['Vegetarian'], [], 'Chole bhature'),
  c('idli-sambar', 'Idli Sambar', 'Indian', 'Breakfast', 'Medium', 25, 40, 6, 4.7, 1866, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Idli sambar'),
  c('keema-matar', 'Keema Matar', 'Indian', 'Dinner', 'Easy', 15, 35, 4, 4.7, 1188, ['Gluten-Free'], [], 'Keema matar mince peas curry'),
  c('kerala-fish-curry', 'Kerala Fish Curry', 'Indian', 'Dinner', 'Easy', 20, 25, 4, 4.7, 1044, ['Gluten-Free', 'Dairy-Free'], [], 'Kerala fish curry'),
  c('chapati', 'Chapati (Roti)', 'Indian', 'Baking', 'Easy', 20, 15, 8, 4.7, 2277, ['Vegan', 'Vegetarian', 'Dairy-Free'], [], 'Chapati roti flatbread'),
  c('kheer', 'Rice Kheer', 'Indian', 'Desserts', 'Easy', 10, 45, 6, 4.7, 1533, ['Vegetarian', 'Gluten-Free'], [], 'Kheer rice pudding'),
  c('jalebi', 'Jalebi', 'Indian', 'Desserts', 'Medium', 20, 25, 8, 4.7, 1622, ['Vegetarian'], [], 'Jalebi'),
  c('aloo-paratha', 'Aloo Paratha', 'Indian', 'Breakfast', 'Medium', 30, 20, 6, 4.8, 2544, ['Vegetarian'], ['trending'], 'Aloo paratha'),

  /* ---------------------------------------------------------- Mexican (12) */
  c('birria-tacos', 'Birria Tacos', 'Mexican', 'Dinner', 'Medium', 30, 180, 6, 4.9, 4522, ['Gluten-Free'], ['editors', 'trending'], 'Birria tacos'),
  c('chilaquiles', 'Chilaquiles Verdes', 'Mexican', 'Breakfast', 'Easy', 15, 20, 4, 4.8, 2688, [], ['trending'], 'Chilaquiles'),
  c('mission-burrito', 'Mission-Style Burrito', 'Mexican', 'Lunch', 'Easy', 25, 20, 4, 4.7, 2411, [], [], 'Burrito'),
  c('nachos', 'Loaded Nachos', 'Mexican', 'Appetizers', 'Easy', 15, 15, 6, 4.7, 3044, ['Vegetarian'], [], 'Nachos'),
  c('cochinita-pibil', 'Cochinita Pibil', 'Mexican', 'Dinner', 'Medium', 25, 210, 8, 4.8, 1466, ['Gluten-Free', 'Dairy-Free'], [], 'Cochinita pibil'),
  c('queso-fundido', 'Queso Fundido', 'Mexican', 'Appetizers', 'Easy', 10, 15, 6, 4.7, 1622, ['Gluten-Free'], [], 'Melted cheese skillet chorizo tortillas'),
  c('sopes', 'Sopes', 'Mexican', 'Appetizers', 'Medium', 30, 20, 8, 4.6, 966, ['Vegetarian'], [], 'Sopes mexican'),
  c('mexican-rice', 'Mexican Red Rice', 'Mexican', 'Quick Meals', 'Easy', 10, 25, 6, 4.7, 2133, ['Gluten-Free', 'Dairy-Free'], [], 'Arroz rojo mexicano plate'),
  c('refried-beans', 'Refried Beans', 'Mexican', 'Quick Meals', 'Easy', 10, 25, 6, 4.7, 1877, ['Vegetarian', 'Gluten-Free'], [], 'Refried beans'),
  c('flan-napolitano', 'Flan Napolitano', 'Mexican', 'Desserts', 'Medium', 20, 60, 8, 4.8, 2544, ['Vegetarian', 'Gluten-Free'], [], 'Flan caramel custard'),
  c('tres-leches-cake', 'Tres Leches Cake', 'Mexican', 'Desserts', 'Easy', 25, 35, 12, 4.9, 3411, ['Vegetarian'], ['trending'], 'Tres leches cake'),
  c('michelada', 'Michelada', 'Mexican', 'Drinks', 'Easy', 5, 0, 1, 4.6, 1244, ['Vegan', 'Dairy-Free'], [], 'Michelada'),

  /* --------------------------------------------------------- American (30) */
  c('chicken-pot-pie', 'Chicken Pot Pie', 'American', 'Dinner', 'Medium', 30, 45, 6, 4.8, 3244, [], ['editors'], 'Chicken pot pie pastry crust'),
  c('beef-stew', 'Hearty Beef Stew', 'American', 'Dinner', 'Easy', 25, 150, 6, 4.8, 3866, ['Dairy-Free'], [], 'Beef stew'),
  c('jambalaya', 'Louisiana Jambalaya', 'American', 'Dinner', 'Easy', 20, 45, 6, 4.8, 2411, ['Gluten-Free', 'Dairy-Free'], [], 'Jambalaya'),
  c('gumbo', 'Chicken and Sausage Gumbo', 'American', 'Dinner', 'Medium', 25, 90, 8, 4.8, 2133, ['Dairy-Free'], ['editors'], 'Gumbo'),
  c('shrimp-and-grits', 'Shrimp and Grits', 'American', 'Dinner', 'Easy', 15, 25, 4, 4.8, 2277, ['Gluten-Free'], [], 'Shrimp and grits'),
  c('chicken-fried-steak', 'Chicken Fried Steak', 'American', 'Dinner', 'Medium', 20, 20, 4, 4.7, 1866, [], [], 'Chicken fried steak'),
  c('lobster-roll', 'Maine Lobster Roll', 'American', 'Lunch', 'Easy', 20, 10, 4, 4.8, 1966, [], ['trending'], 'Lobster roll'),
  c('reuben-sandwich', 'Reuben Sandwich', 'American', 'Lunch', 'Easy', 10, 10, 2, 4.8, 2044, [], [], 'Reuben sandwich'),
  c('blt-sandwich', 'The Perfect BLT', 'American', 'Lunch', 'Easy', 10, 10, 2, 4.7, 2411, [], [], 'BLT sandwich'),
  c('tuna-melt', 'Tuna Melt', 'American', 'Quick Meals', 'Easy', 10, 8, 2, 4.6, 1622, [], [], 'Tuna melt sandwich'),
  c('deviled-eggs', 'Deviled Eggs', 'American', 'Appetizers', 'Easy', 20, 10, 12, 4.7, 2688, ['Gluten-Free'], [], 'Deviled eggs'),
  c('buffalo-chicken-dip', 'Buffalo Chicken Dip', 'American', 'Appetizers', 'Easy', 10, 25, 8, 4.8, 3122, ['Gluten-Free'], ['trending'], 'Buffalo chicken dip'),
  c('onion-rings', 'Beer-Battered Onion Rings', 'American', 'Appetizers', 'Easy', 15, 15, 4, 4.7, 1877, ['Vegetarian'], [], 'Battered onion rings deep fried'),
  c('mozzarella-sticks', 'Mozzarella Sticks', 'American', 'Appetizers', 'Easy', 25, 10, 6, 4.7, 2133, ['Vegetarian'], [], 'Mozzarella sticks'),
  c('creamy-coleslaw', 'Creamy Coleslaw', 'American', 'Healthy', 'Easy', 15, 0, 8, 4.6, 1755, ['Vegetarian', 'Gluten-Free'], [], 'Coleslaw'),
  c('classic-potato-salad', 'Classic Potato Salad', 'American', 'Lunch', 'Easy', 20, 20, 8, 4.7, 2044, ['Vegetarian', 'Gluten-Free'], [], 'Potato salad bowl mayonnaise'),
  c('boston-baked-beans', 'Boston Baked Beans', 'American', 'Lunch', 'Easy', 15, 240, 8, 4.6, 1122, ['Dairy-Free'], [], 'Baked beans'),
  c('classic-omelette', 'Three-Egg Omelette', 'American', 'Breakfast', 'Medium', 5, 5, 1, 4.8, 3411, ['Vegetarian', 'Gluten-Free'], [], 'Omelette'),
  c('hash-browns', 'Crispy Hash Browns', 'American', 'Breakfast', 'Easy', 15, 15, 4, 4.8, 2955, ['Vegetarian', 'Gluten-Free'], [], 'Hash browns'),
  c('biscuits-and-gravy', 'Biscuits and Sausage Gravy', 'American', 'Breakfast', 'Medium', 20, 25, 6, 4.8, 2544, [], [], 'Biscuits and gravy'),
  c('cinnamon-sugar-donuts', 'Cinnamon Sugar Doughnuts', 'American', 'Baking', 'Medium', 40, 15, 12, 4.8, 2811, ['Vegetarian'], ['trending'], 'Doughnuts'),
  c('bagels', 'New York Bagels', 'American', 'Baking', 'Medium', 45, 25, 8, 4.8, 2411, ['Vegan', 'Dairy-Free'], [], 'Bagels'),
  c('cornbread', 'Skillet Cornbread', 'American', 'Baking', 'Easy', 10, 25, 8, 4.7, 2277, ['Vegetarian'], [], 'Cornbread'),
  c('snickerdoodles', 'Snickerdoodles', 'American', 'Baking', 'Easy', 20, 12, 24, 4.8, 2688, ['Vegetarian'], [], 'Snickerdoodle cookies'),
  c('peanut-butter-cookies', 'Peanut Butter Cookies', 'American', 'Baking', 'Easy', 15, 12, 24, 4.7, 2544, ['Vegetarian'], [], 'Peanut butter cookies'),
  c('pecan-pie', 'Pecan Pie', 'American', 'Desserts', 'Medium', 25, 55, 8, 4.8, 2411, ['Vegetarian'], [], 'Pecan pie'),
  c('lemon-meringue-pie', 'Lemon Meringue Pie', 'American', 'Desserts', 'Hard', 35, 45, 8, 4.7, 2133, ['Vegetarian'], [], 'Lemon meringue pie'),
  c('smores', "S'mores", 'American', 'Desserts', 'Easy', 5, 5, 4, 4.7, 1877, ['Vegetarian'], [], 'Smores'),
  c('vanilla-cupcakes', 'Vanilla Cupcakes', 'American', 'Baking', 'Easy', 20, 20, 12, 4.8, 3044, ['Vegetarian'], [], 'Vanilla cupcake buttercream frosting'),
  c('chocolate-milkshake', 'Chocolate Milkshake', 'American', 'Drinks', 'Easy', 5, 5, 2, 4.7, 1966, ['Vegetarian', 'Gluten-Free'], [], 'Chocolate milkshake whipped cream straw'),

  /* ---------------------------------------------------------- British (10) */
  c('toad-in-the-hole', 'Toad in the Hole', 'British', 'Dinner', 'Easy', 15, 40, 4, 4.7, 1622, [], [], 'Sausages baked in Yorkshire pudding batter'),
  c('cottage-pie', 'Cottage Pie', 'British', 'Dinner', 'Easy', 25, 50, 6, 4.8, 2277, [], [], 'Cottage pie'),
  c('cornish-pasty', 'Cornish Pasty', 'British', 'Lunch', 'Medium', 35, 50, 6, 4.7, 1466, [], [], 'Cornish pasty'),
  c('roast-beef-yorkshire', 'Roast Beef and Yorkshire Puddings', 'British', 'Holiday Specials', 'Medium', 25, 90, 6, 4.9, 2688, [], ['editors'], 'Roast beef yorkshire pudding'),
  c('welsh-rarebit', 'Welsh Rarebit', 'British', 'Quick Meals', 'Easy', 10, 10, 2, 4.6, 1044, ['Vegetarian'], [], 'Welsh rarebit'),
  c('eton-mess', 'Eton Mess', 'British', 'Desserts', 'Easy', 15, 75, 4, 4.8, 1877, ['Vegetarian', 'Gluten-Free'], [], 'Eton mess'),
  c('victoria-sponge', 'Victoria Sponge', 'British', 'Baking', 'Easy', 20, 25, 10, 4.8, 2411, ['Vegetarian'], [], 'Victoria sponge cake'),
  c('bakewell-tart', 'Bakewell Tart', 'British', 'Baking', 'Medium', 30, 40, 8, 4.7, 1533, ['Vegetarian'], [], 'Bakewell tart'),
  c('lemon-drizzle-cake', 'Lemon Drizzle Cake', 'British', 'Baking', 'Easy', 15, 45, 10, 4.8, 2544, ['Vegetarian'], ['trending'], 'Lemon drizzle cake'),
  c('shortbread', 'Scottish Shortbread', 'British', 'Baking', 'Easy', 15, 35, 16, 4.7, 1966, ['Vegetarian'], [], 'Shortbread biscuits'),

  /* ------------------------------------------------------------ Greek (6) */
  c('pastitsio', 'Pastitsio', 'Greek', 'Dinner', 'Medium', 35, 60, 8, 4.7, 1344, [], [], 'Pastitsio'),
  c('keftedes', 'Greek Keftedes', 'Greek', 'Appetizers', 'Easy', 20, 15, 4, 4.7, 1122, [], [], 'Greek meatballs in tomato sauce'),
  c('saganaki', 'Saganaki', 'Greek', 'Appetizers', 'Easy', 5, 8, 2, 4.7, 966, ['Vegetarian'], [], 'Saganaki fried cheese'),
  c('fasolada', 'Fasolada', 'Greek', 'Healthy', 'Easy', 15, 75, 6, 4.6, 744, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Fasolada bean soup'),
  c('galaktoboureko', 'Galaktoboureko', 'Greek', 'Desserts', 'Medium', 30, 50, 12, 4.7, 1044, ['Vegetarian'], [], 'Galaktoboureko'),
  c('loukoumades', 'Loukoumades', 'Greek', 'Desserts', 'Medium', 25, 20, 6, 4.7, 1188, ['Vegetarian'], [], 'Loukoumades honey doughnuts'),

  /* --------------------------------------------------- Middle Eastern (8) */
  c('mujadara', 'Mujadara', 'Middle Eastern', 'Healthy', 'Easy', 15, 45, 4, 4.7, 1344, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Mujadara lentils rice fried onion'),
  c('maqluba', 'Maqluba', 'Middle Eastern', 'Dinner', 'Medium', 30, 60, 6, 4.7, 1122, ['Dairy-Free'], [], 'Maqluba'),
  c('kibbeh', 'Baked Kibbeh', 'Middle Eastern', 'Dinner', 'Medium', 35, 45, 6, 4.6, 866, ['Dairy-Free'], [], 'Kibbeh'),
  c('labneh', "Labneh with Za'atar", 'Middle Eastern', 'Appetizers', 'Easy', 10, 0, 6, 4.7, 1466, ['Vegetarian', 'Gluten-Free'], [], 'Labneh'),
  c('manakish-zaatar', "Manakish Za'atar", 'Middle Eastern', 'Breakfast', 'Medium', 30, 12, 6, 4.7, 1188, ['Vegan', 'Dairy-Free'], [], 'Manakish zaatar'),
  c('basbousa', 'Basbousa', 'Middle Eastern', 'Desserts', 'Easy', 15, 40, 12, 4.7, 1044, ['Vegetarian'], [], 'Basbousa semolina cake'),
  c('lamb-mandi', 'Lamb Mandi', 'Middle Eastern', 'Holiday Specials', 'Medium', 30, 180, 8, 4.7, 966, ['Gluten-Free'], [], 'Mandi rice lamb'),

  /* --------------------------------------------------------- Turkish (4) */
  c('imam-bayildi', 'Imam Bayildi', 'Turkish', 'Healthy', 'Easy', 25, 50, 4, 4.7, 966, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Imam bayildi'),
  c('turkish-pide', 'Turkish Pide', 'Turkish', 'Baking', 'Medium', 40, 15, 4, 4.7, 1122, [], [], 'Pide turkish'),
  c('borek', 'Cheese Börek', 'Turkish', 'Appetizers', 'Medium', 30, 40, 8, 4.7, 1244, ['Vegetarian'], [], 'Su boregi cheese filo pastry tray'),
  c('turkish-delight', 'Turkish Delight', 'Turkish', 'Desserts', 'Medium', 25, 60, 24, 4.6, 1466, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Turkish delight lokum'),

  /* ------------------------------------------- Spanish & Portuguese (8) */
  c('salmorejo', 'Salmorejo', 'Spanish', 'Healthy', 'Easy', 15, 0, 4, 4.7, 1122, ['Vegetarian'], [], 'Salmorejo'),
  c('pan-con-tomate', 'Pan con Tomate', 'Spanish', 'Appetizers', 'Easy', 8, 4, 4, 4.7, 1533, ['Vegan', 'Dairy-Free'], [], 'Pan con tomate'),
  c('pulpo-a-la-gallega', 'Pulpo a la Gallega', 'Spanish', 'Appetizers', 'Medium', 15, 60, 4, 4.7, 966, ['Gluten-Free', 'Dairy-Free'], [], 'Pulpo a la gallega'),
  c('fabada-asturiana', 'Fabada Asturiana', 'Spanish', 'Dinner', 'Easy', 20, 150, 6, 4.7, 844, ['Gluten-Free', 'Dairy-Free'], [], 'Fabada asturiana bean stew bowl'),
  c('pastel-de-nata', 'Pastéis de Nata', 'Portuguese', 'Desserts', 'Medium', 30, 25, 12, 4.9, 3244, ['Vegetarian'], ['editors', 'trending'], 'Pastel de nata'),
  c('caldo-verde', 'Caldo Verde', 'Portuguese', 'Healthy', 'Easy', 15, 35, 6, 4.7, 1122, ['Gluten-Free', 'Dairy-Free'], [], 'Caldo verde'),
  c('bacalhau-a-bras', 'Bacalhau à Brás', 'Portuguese', 'Dinner', 'Easy', 20, 25, 4, 4.7, 966, ['Gluten-Free', 'Dairy-Free'], [], 'Bacalhau a bras salt cod potato egg'),
  c('piri-piri-chicken', 'Piri Piri Chicken', 'Portuguese', 'Dinner', 'Easy', 20, 45, 4, 4.8, 2411, ['Gluten-Free', 'Dairy-Free'], ['trending'], 'Piri piri chicken'),

  /* ------------------------------------------------------------- Thai (6) */
  c('khao-soi', 'Khao Soi', 'Thai', 'Dinner', 'Medium', 20, 35, 4, 4.8, 1877, ['Dairy-Free'], ['trending'], 'Khao soi'),
  c('larb-gai', 'Larb Gai', 'Thai', 'Healthy', 'Easy', 15, 12, 4, 4.7, 1466, ['Gluten-Free', 'Dairy-Free'], [], 'Larb gai'),
  c('thai-red-curry', 'Thai Red Curry', 'Thai', 'Dinner', 'Easy', 15, 25, 4, 4.8, 2688, ['Gluten-Free', 'Dairy-Free'], [], 'Thai red curry'),
  c('pad-see-ew', 'Pad See Ew', 'Thai', 'Quick Meals', 'Easy', 15, 12, 2, 4.7, 1966, ['Dairy-Free'], [], 'Pad see ew'),
  c('thai-iced-tea', 'Thai Iced Tea', 'Thai', 'Drinks', 'Easy', 5, 5, 2, 4.7, 1622, ['Vegetarian', 'Gluten-Free'], [], 'Thai iced tea'),

  /* ------------------------------------------------------- Vietnamese (4) */
  c('bun-bo-hue', 'Bún Bò Huế', 'Vietnamese', 'Dinner', 'Hard', 30, 180, 6, 4.8, 1244, ['Dairy-Free'], [], 'Bun bo hue'),
  c('com-tam', 'Cơm Tấm', 'Vietnamese', 'Dinner', 'Medium', 25, 25, 4, 4.7, 1122, ['Dairy-Free'], [], 'Com tam broken rice'),
  c('cha-gio', 'Chả Giò', 'Vietnamese', 'Appetizers', 'Medium', 35, 15, 6, 4.8, 1466, ['Dairy-Free'], [], 'Cha gio fried spring rolls'),

  /* ----------------------------------------------------------- Korean (7) */
  c('kimbap', 'Kimbap', 'Korean', 'Lunch', 'Medium', 35, 20, 4, 4.8, 2133, ['Dairy-Free'], ['trending'], 'Kimbap'),
  c('sundubu-jjigae', 'Sundubu Jjigae', 'Korean', 'Dinner', 'Easy', 10, 20, 2, 4.8, 1877, ['Dairy-Free'], [], 'Sundubu jjigae'),
  c('galbi', 'Galbi (Korean Short Ribs)', 'Korean', 'Dinner', 'Easy', 20, 15, 4, 4.8, 2044, ['Dairy-Free'], [], 'Galbi short ribs'),
  c('haemul-pajeon', 'Haemul Pajeon', 'Korean', 'Appetizers', 'Easy', 15, 15, 4, 4.7, 1344, ['Dairy-Free'], [], 'Haemul pajeon'),
  c('samgyetang', 'Samgyetang', 'Korean', 'Healthy', 'Easy', 20, 75, 2, 4.7, 966, ['Gluten-Free', 'Dairy-Free'], [], 'Samgyetang ginseng chicken soup'),
  c('dakgalbi', 'Dakgalbi', 'Korean', 'Dinner', 'Easy', 20, 20, 4, 4.7, 1466, ['Dairy-Free'], [], 'Dakgalbi'),
  c('naengmyeon', 'Mul Naengmyeon', 'Korean', 'Healthy', 'Medium', 20, 15, 2, 4.6, 1044, ['Dairy-Free'], [], 'Naengmyeon cold noodles'),

  /* -------------------------------------------------- Southeast Asia (8) */
  c('nasi-goreng', 'Nasi Goreng', 'Indonesian', 'Quick Meals', 'Easy', 15, 12, 4, 4.8, 2411, ['Dairy-Free'], [], 'Nasi goreng'),
  c('beef-rendang', 'Beef Rendang', 'Indonesian', 'Dinner', 'Medium', 25, 180, 6, 4.9, 2688, ['Gluten-Free', 'Dairy-Free'], ['editors'], 'Beef rendang'),
  c('chicken-satay', 'Chicken Satay', 'Indonesian', 'Appetizers', 'Easy', 25, 15, 4, 4.8, 2955, ['Gluten-Free', 'Dairy-Free'], ['trending'], 'Chicken satay'),
  c('gado-gado', 'Gado-Gado', 'Indonesian', 'Healthy', 'Easy', 25, 15, 4, 4.6, 1122, ['Gluten-Free', 'Dairy-Free'], [], 'Gado gado'),
  c('laksa', 'Curry Laksa', 'Malaysian', 'Dinner', 'Medium', 25, 30, 4, 4.8, 2133, ['Dairy-Free'], [], 'Laksa'),
  c('char-kway-teow', 'Char Kway Teow', 'Malaysian', 'Quick Meals', 'Medium', 20, 12, 2, 4.7, 1533, ['Dairy-Free'], [], 'Char kway teow'),
  c('hainanese-chicken-rice', 'Hainanese Chicken Rice', 'Singaporean', 'Dinner', 'Medium', 25, 60, 4, 4.8, 2277, ['Dairy-Free'], ['editors'], 'Hainanese chicken rice'),
  c('chicken-adobo', 'Chicken Adobo', 'Filipino', 'Dinner', 'Easy', 15, 45, 4, 4.8, 2544, ['Dairy-Free'], ['trending'], 'Chicken adobo'),

  /* ---------------------------------------------------- Latin America (8) */
  c('arepas', 'Arepas', 'Venezuelan', 'Breakfast', 'Easy', 15, 20, 6, 4.7, 1877, ['Gluten-Free'], [], 'Arepas'),
  c('pupusas', 'Pupusas', 'Salvadoran', 'Lunch', 'Medium', 25, 20, 6, 4.7, 1344, ['Vegetarian', 'Gluten-Free'], [], 'Pupusas'),
  c('chimichurri-steak', 'Chimichurri Steak', 'Argentinian', 'Dinner', 'Easy', 15, 15, 4, 4.8, 2688, ['Gluten-Free', 'Dairy-Free'], ['trending'], 'Chimichurri steak'),
  c('lomo-saltado', 'Lomo Saltado', 'Peruvian', 'Dinner', 'Easy', 20, 20, 4, 4.8, 1966, ['Dairy-Free'], [], 'Lomo saltado'),
  c('aji-de-gallina', 'Ají de Gallina', 'Peruvian', 'Dinner', 'Medium', 20, 35, 4, 4.7, 1044, [], [], 'Aji de gallina'),
  c('moqueca', 'Moqueca Baiana', 'Brazilian', 'Dinner', 'Easy', 20, 30, 4, 4.8, 1466, ['Gluten-Free', 'Dairy-Free'], [], 'Moqueca'),
  c('pao-de-queijo', 'Pão de Queijo', 'Brazilian', 'Baking', 'Easy', 15, 25, 16, 4.8, 2277, ['Vegetarian', 'Gluten-Free'], [], 'Pao de queijo cheese bread rolls'),
  c('alfajores', 'Alfajores', 'Argentinian', 'Desserts', 'Medium', 30, 12, 16, 4.8, 1877, ['Vegetarian'], [], 'Alfajores'),

  /* ------------------------------------- Central, Eastern Europe & Nordic (8) */
  c('chicken-kiev', 'Chicken Kiev', 'Ukrainian', 'Dinner', 'Medium', 30, 25, 4, 4.8, 2044, [], [], 'Chicken kiev'),
  c('blini', 'Blini with Soured Cream', 'Russian', 'Breakfast', 'Easy', 15, 20, 6, 4.6, 1122, ['Vegetarian'], [], 'Blini pancakes'),
  c('olivier-salad', 'Olivier Salad', 'Russian', 'Holiday Specials', 'Easy', 30, 20, 8, 4.6, 1244, ['Vegetarian', 'Gluten-Free'], [], 'Olivier salad'),
  c('golabki', 'Gołąbki', 'Polish', 'Dinner', 'Medium', 35, 75, 6, 4.7, 1044, ['Gluten-Free', 'Dairy-Free'], [], 'Golabki cabbage rolls'),
  c('spaetzle', 'Käsespätzle', 'German', 'Dinner', 'Easy', 20, 20, 4, 4.7, 1533, ['Vegetarian'], [], 'Kasespatzle'),
  c('sauerbraten', 'Sauerbraten', 'German', 'Holiday Specials', 'Medium', 30, 180, 6, 4.7, 966, ['Dairy-Free'], [], 'Sauerbraten'),
  c('gravlax', 'Gravlax', 'Swedish', 'Appetizers', 'Easy', 20, 0, 8, 4.7, 1122, ['Gluten-Free', 'Dairy-Free'], [], 'Gravlax'),
  c('kanelbullar', 'Kanelbullar', 'Swedish', 'Baking', 'Medium', 40, 15, 12, 4.8, 2133, ['Vegetarian'], ['trending'], 'Kanelbullar cinnamon buns'),

  /* --------------------------------------------- Africa & Caribbean (8) */
  c('jollof-rice', 'Jollof Rice', 'Nigerian', 'Dinner', 'Easy', 20, 50, 6, 4.9, 3411, ['Gluten-Free'], ['editors', 'trending'], 'Jollof rice'),
  c('egusi-soup', 'Egusi Soup', 'Nigerian', 'Dinner', 'Medium', 20, 50, 6, 4.7, 1466, ['Gluten-Free', 'Dairy-Free'], [], 'Egusi soup'),
  c('suya', 'Beef Suya', 'Nigerian', 'Appetizers', 'Easy', 20, 12, 4, 4.8, 1622, ['Gluten-Free', 'Dairy-Free'], [], 'Suya'),
  c('doro-wat', 'Doro Wat', 'Ethiopian', 'Dinner', 'Medium', 25, 90, 6, 4.8, 1344, ['Gluten-Free'], [], 'Doro wat'),
  c('bobotie', 'Bobotie', 'South African', 'Dinner', 'Easy', 25, 50, 6, 4.7, 966, [], [], 'Bobotie'),
  c('jamaican-curry-goat', 'Jamaican Curry Goat', 'Jamaican', 'Dinner', 'Easy', 25, 150, 6, 4.8, 1877, ['Gluten-Free', 'Dairy-Free'], [], 'Curry goat'),
  c('ackee-and-saltfish', 'Ackee and Saltfish', 'Jamaican', 'Breakfast', 'Easy', 20, 20, 4, 4.7, 1244, ['Gluten-Free', 'Dairy-Free'], [], 'Ackee and saltfish'),
  c('fried-plantain', 'Fried Sweet Plantain', 'Jamaican', 'Quick Meals', 'Easy', 5, 10, 4, 4.7, 1755, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Fried plantain'),

  /* ------------------------------------------ International & drinks (11) */
  c('poke-bowl', 'Ahi Poke Bowl', 'International', 'Healthy', 'Easy', 20, 0, 2, 4.8, 2544, ['Dairy-Free'], ['trending'], 'Poke bowl raw tuna rice'),
  c('acai-bowl', 'Açaí Bowl', 'International', 'Breakfast', 'Easy', 10, 0, 2, 4.7, 2133, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Acai bowl'),
  c('chia-pudding', 'Chia Pudding', 'International', 'Healthy', 'Easy', 8, 0, 2, 4.6, 1622, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Chia pudding'),
  c('granola', 'Maple Pecan Granola', 'International', 'Breakfast', 'Easy', 10, 35, 12, 4.8, 2277, ['Dairy-Free', 'Vegetarian'], [], 'Granola'),
  c('quinoa-salad', 'Lemon Herb Quinoa Salad', 'International', 'Healthy', 'Easy', 15, 15, 4, 4.7, 1877, ['Gluten-Free', 'Vegetarian'], [], 'Quinoa salad'),
  c('lentil-soup', 'Spiced Red Lentil Soup', 'International', 'Healthy', 'Easy', 10, 35, 4, 4.8, 2411, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Lentil soup'),
  c('negroni', 'Negroni', 'International', 'Drinks', 'Easy', 5, 0, 1, 4.8, 2133, ['Vegan', 'Gluten-Free'], [], 'Negroni cocktail'),
  c('pina-colada', 'Piña Colada', 'International', 'Drinks', 'Easy', 5, 0, 2, 4.7, 2044, ['Vegetarian', 'Gluten-Free'], [], 'Pina colada'),
  c('bloody-mary', 'Bloody Mary', 'International', 'Drinks', 'Easy', 8, 0, 1, 4.6, 1622, ['Vegan', 'Dairy-Free'], [], 'Bloody mary cocktail'),
  c('bubble-tea', 'Brown Sugar Bubble Tea', 'International', 'Drinks', 'Medium', 15, 25, 2, 4.8, 2955, ['Vegetarian'], ['trending'], 'Bubble tea boba'),
  c('mulled-wine', 'Mulled Wine', 'International', 'Drinks', 'Easy', 5, 20, 6, 4.7, 1533, ['Vegan', 'Gluten-Free'], [], 'Mulled wine')
];
