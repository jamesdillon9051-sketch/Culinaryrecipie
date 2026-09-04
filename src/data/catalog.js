/**
 * CulinaryVault — master recipe catalog.
 *
 * One row per recipe. Rich content (ingredients, method, tips, nutrition) lives
 * in ./details/*.js, keyed by slug, and is merged at build time by src/build.js.
 *
 * c(slug, title, cuisine, category, difficulty, prepMin, cookMin, servings,
 *   rating, reviews, dietTags, badges, imageQuery?)
 *
 * badges: 'editors' (Editor's Picks) | 'trending' (Trending Now) | 'new' (Latest)
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
  /* ---------------------------------------------------------- Italian (18) */
  c('margherita-pizza', 'Margherita Pizza', 'Italian', 'Dinner', 'Medium', 90, 12, 4, 4.9, 4820, ['Vegetarian'], ['editors', 'trending'], 'Pizza Margherita'),
  c('spaghetti-carbonara', 'Spaghetti Carbonara', 'Italian', 'Dinner', 'Medium', 10, 20, 4, 4.9, 5210, [], ['editors', 'trending'], 'Spaghetti alla Carbonara'),
  c('lasagna-bolognese', 'Lasagna Bolognese', 'Italian', 'Dinner', 'Hard', 45, 150, 8, 4.8, 3944, [], ['editors'], 'Lasagne alla Bolognese'),
  c('fettuccine-alfredo', 'Fettuccine Alfredo', 'Italian', 'Dinner', 'Easy', 10, 15, 4, 4.7, 2860, ['Vegetarian'], [], 'Fettuccine Alfredo pasta'),
  c('cacio-e-pepe', 'Cacio e Pepe', 'Italian', 'Quick Meals', 'Medium', 5, 15, 2, 4.8, 2110, ['Vegetarian'], ['trending'], 'Cacio e pepe pasta'),
  c('penne-all-arrabbiata', "Penne all'Arrabbiata", 'Italian', 'Quick Meals', 'Easy', 10, 20, 4, 4.7, 1682, ['Vegan', 'Dairy-Free'], [], 'Penne all arrabbiata'),
  c('risotto-alla-milanese', 'Risotto alla Milanese', 'Italian', 'Dinner', 'Medium', 10, 30, 4, 4.7, 1408, ['Vegetarian', 'Gluten-Free'], [], 'Risotto alla milanese saffron'),
  c('osso-buco', 'Osso Buco alla Milanese', 'Italian', 'Dinner', 'Hard', 25, 120, 4, 4.8, 962, [], [], 'Ossobuco veal'),
  c('chicken-parmigiana', 'Chicken Parmigiana', 'Italian', 'Dinner', 'Medium', 20, 35, 4, 4.8, 3315, [], ['trending'], 'Chicken parmigiana'),
  c('potato-gnocchi', 'Potato Gnocchi with Sage Butter', 'Italian', 'Dinner', 'Medium', 45, 15, 4, 4.7, 1544, ['Vegetarian'], [], 'Potato gnocchi'),
  c('pesto-genovese', 'Pesto alla Genovese', 'Italian', 'Quick Meals', 'Easy', 15, 10, 4, 4.8, 2277, ['Vegetarian'], [], 'Pesto alla genovese basil'),
  c('minestrone-soup', 'Minestrone Soup', 'Italian', 'Healthy', 'Easy', 20, 40, 6, 4.6, 1290, ['Vegan', 'Dairy-Free'], [], 'Minestrone soup'),
  c('caprese-salad', 'Caprese Salad', 'Italian', 'Appetizers', 'Easy', 10, 0, 4, 4.7, 1855, ['Vegetarian', 'Gluten-Free', 'Low-Carb'], [], 'Insalata caprese'),
  c('bruschetta', 'Tomato Bruschetta', 'Italian', 'Appetizers', 'Easy', 15, 5, 6, 4.7, 2044, ['Vegan', 'Dairy-Free'], [], 'Bruschetta tomato'),
  c('arancini', 'Sicilian Arancini', 'Italian', 'Appetizers', 'Hard', 40, 25, 6, 4.6, 878, [], [], 'Arancini rice balls'),
  c('focaccia', 'Rosemary Focaccia', 'Italian', 'Baking', 'Medium', 25, 25, 8, 4.8, 2530, ['Vegan', 'Dairy-Free'], ['new'], 'Focaccia bread rosemary'),
  c('tiramisu', 'Classic Tiramisu', 'Italian', 'Desserts', 'Medium', 30, 0, 8, 4.9, 6120, ['Vegetarian'], ['editors', 'trending'], 'Tiramisu'),
  c('panna-cotta', 'Vanilla Panna Cotta', 'Italian', 'Desserts', 'Easy', 15, 5, 6, 4.7, 1466, ['Vegetarian', 'Gluten-Free'], [], 'Panna cotta'),

  /* ----------------------------------------------------------- French (16) */
  c('beef-bourguignon', 'Beef Bourguignon', 'French', 'Dinner', 'Hard', 30, 180, 6, 4.9, 3402, [], ['editors'], 'Beef bourguignon'),
  c('coq-au-vin', 'Coq au Vin', 'French', 'Dinner', 'Hard', 30, 90, 6, 4.8, 1733, [], [], 'Coq au vin'),
  c('french-onion-soup', 'French Onion Soup', 'French', 'Dinner', 'Medium', 15, 75, 4, 4.8, 2941, ['Vegetarian'], ['trending'], 'French onion soup gratinee'),
  c('ratatouille', 'Provençal Ratatouille', 'French', 'Healthy', 'Easy', 25, 45, 6, 4.7, 2288, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Ratatouille'),
  c('bouillabaisse', 'Marseille Bouillabaisse', 'French', 'Dinner', 'Hard', 30, 60, 6, 4.6, 741, ['Dairy-Free'], [], 'Bouillabaisse'),
  c('cassoulet', 'Cassoulet de Toulouse', 'French', 'Dinner', 'Hard', 40, 180, 8, 4.6, 612, [], [], 'Cassoulet'),
  c('steak-frites', 'Steak Frites', 'French', 'Dinner', 'Medium', 20, 25, 2, 4.8, 2166, ['Gluten-Free'], [], 'Steak frites'),
  c('quiche-lorraine', 'Quiche Lorraine', 'French', 'Lunch', 'Medium', 25, 45, 6, 4.8, 2417, [], [], 'Quiche lorraine'),
  c('salade-nicoise', 'Salade Niçoise', 'French', 'Lunch', 'Easy', 25, 15, 4, 4.6, 1188, ['Gluten-Free', 'Dairy-Free'], [], 'Salade nicoise'),
  c('croissants', 'Butter Croissants', 'French', 'Baking', 'Hard', 180, 20, 8, 4.8, 3260, ['Vegetarian'], ['editors'], 'Croissant'),
  c('baguette', 'French Baguette', 'French', 'Baking', 'Hard', 40, 25, 3, 4.7, 1902, ['Vegan', 'Dairy-Free'], [], 'Baguette bread'),
  c('eclairs', 'Chocolate Éclairs', 'French', 'Desserts', 'Hard', 45, 35, 12, 4.7, 1355, ['Vegetarian'], [], 'Chocolate eclair'),
  c('macarons', 'French Macarons', 'French', 'Desserts', 'Hard', 60, 15, 24, 4.6, 2803, ['Vegetarian', 'Gluten-Free'], ['trending'], 'Macaron'),
  c('creme-brulee', 'Crème Brûlée', 'French', 'Desserts', 'Medium', 20, 40, 6, 4.9, 3688, ['Vegetarian', 'Gluten-Free'], ['editors'], 'Creme brulee'),
  c('chocolate-souffle', 'Chocolate Soufflé', 'French', 'Desserts', 'Hard', 25, 15, 4, 4.7, 1244, ['Vegetarian'], [], 'Chocolate souffle'),
  c('tarte-tatin', 'Apple Tarte Tatin', 'French', 'Desserts', 'Medium', 30, 45, 8, 4.8, 1611, ['Vegetarian'], [], 'Tarte tatin'),

  /* --------------------------------------------------------- Japanese (12) */
  c('tonkotsu-ramen', 'Tonkotsu Ramen', 'Japanese', 'Dinner', 'Hard', 45, 480, 4, 4.9, 4177, [], ['editors', 'trending'], 'Tonkotsu ramen'),
  c('chicken-katsu-curry', 'Chicken Katsu Curry', 'Japanese', 'Dinner', 'Medium', 25, 30, 4, 4.8, 3520, [], ['trending'], 'Katsu curry'),
  c('chicken-teriyaki', 'Chicken Teriyaki', 'Japanese', 'Quick Meals', 'Easy', 10, 15, 4, 4.7, 2965, ['Dairy-Free'], [], 'Chicken teriyaki'),
  c('gyoza', 'Pork Gyoza', 'Japanese', 'Appetizers', 'Medium', 40, 15, 6, 4.8, 2411, ['Dairy-Free'], [], 'Gyoza dumplings'),
  c('tempura', 'Crispy Vegetable Tempura', 'Japanese', 'Appetizers', 'Medium', 20, 20, 4, 4.6, 1477, ['Dairy-Free'], [], 'Tempura'),
  c('yakitori', 'Yakitori Chicken Skewers', 'Japanese', 'Appetizers', 'Easy', 20, 15, 4, 4.7, 1355, ['Dairy-Free'], [], 'Yakitori'),
  c('okonomiyaki', 'Osaka Okonomiyaki', 'Japanese', 'Dinner', 'Medium', 20, 20, 4, 4.6, 1042, ['Dairy-Free'], [], 'Okonomiyaki'),
  c('miso-soup', 'Miso Soup', 'Japanese', 'Healthy', 'Easy', 5, 10, 4, 4.6, 1780, ['Vegan', 'Dairy-Free', 'Low-Carb'], [], 'Miso soup'),
  c('udon-noodle-soup', 'Kake Udon Noodle Soup', 'Japanese', 'Lunch', 'Easy', 10, 15, 2, 4.6, 1128, ['Dairy-Free'], [], 'Udon noodle soup'),
  c('california-roll', 'California Roll', 'Japanese', 'Lunch', 'Medium', 40, 20, 4, 4.6, 2033, ['Dairy-Free'], [], 'California roll sushi'),
  c('japanese-cheesecake', 'Japanese Cotton Cheesecake', 'Japanese', 'Desserts', 'Hard', 30, 70, 8, 4.7, 2570, ['Vegetarian'], ['new'], 'Japanese cheesecake'),
  c('matcha-latte', 'Iced Matcha Latte', 'Japanese', 'Drinks', 'Easy', 5, 0, 1, 4.7, 1966, ['Vegetarian', 'Gluten-Free'], ['trending'], 'Matcha latte'),

  /* ---------------------------------------------------------- Mexican (14) */
  c('tacos-al-pastor', 'Tacos al Pastor', 'Mexican', 'Dinner', 'Medium', 30, 40, 6, 4.9, 3877, ['Dairy-Free'], ['editors', 'trending'], 'Tacos al pastor'),
  c('chicken-enchiladas', 'Chicken Enchiladas Rojas', 'Mexican', 'Dinner', 'Medium', 25, 35, 6, 4.8, 3204, ['Gluten-Free'], [], 'Enchiladas'),
  c('carnitas', 'Slow-Braised Carnitas', 'Mexican', 'Dinner', 'Easy', 20, 180, 8, 4.9, 2688, ['Gluten-Free', 'Dairy-Free'], [], 'Carnitas pork'),
  c('fish-tacos', 'Baja Fish Tacos', 'Mexican', 'Quick Meals', 'Easy', 20, 15, 4, 4.7, 2140, [], [], 'Fish tacos'),
  c('quesadillas', 'Cheese Quesadillas', 'Mexican', 'Quick Meals', 'Easy', 10, 10, 2, 4.5, 1622, ['Vegetarian'], [], 'Quesadilla'),
  c('huevos-rancheros', 'Huevos Rancheros', 'Mexican', 'Breakfast', 'Easy', 10, 20, 2, 4.7, 1493, ['Vegetarian', 'Gluten-Free'], [], 'Huevos rancheros'),
  c('chili-con-carne', 'Chili con Carne', 'Mexican', 'Dinner', 'Easy', 20, 90, 6, 4.7, 2911, ['Gluten-Free', 'Dairy-Free'], [], 'Chili con carne'),
  c('pozole-rojo', 'Pozole Rojo', 'Mexican', 'Dinner', 'Medium', 30, 150, 8, 4.7, 934, ['Gluten-Free', 'Dairy-Free'], [], 'Pozole rojo'),
  c('mole-poblano', 'Mole Poblano', 'Mexican', 'Holiday Specials', 'Hard', 45, 120, 8, 4.7, 726, ['Dairy-Free'], [], 'Mole poblano'),
  c('tamales', 'Pork Tamales', 'Mexican', 'Holiday Specials', 'Hard', 60, 90, 12, 4.7, 1188, ['Gluten-Free'], [], 'Tamales'),
  c('guacamole', 'Authentic Guacamole', 'Mexican', 'Appetizers', 'Easy', 10, 0, 6, 4.9, 4301, ['Vegan', 'Gluten-Free', 'Dairy-Free', 'Keto'], ['trending'], 'Guacamole'),
  c('elote', 'Elote — Mexican Street Corn', 'Mexican', 'Appetizers', 'Easy', 10, 15, 4, 4.8, 1877, ['Vegetarian', 'Gluten-Free'], [], 'Elote mexican street corn'),
  c('churros', 'Cinnamon Churros', 'Mexican', 'Desserts', 'Medium', 20, 20, 6, 4.8, 3066, ['Vegetarian'], [], 'Churros'),
  c('classic-margarita', 'Classic Margarita', 'Mexican', 'Drinks', 'Easy', 5, 0, 1, 4.8, 2455, ['Vegan', 'Gluten-Free'], [], 'Margarita cocktail'),

  /* ----------------------------------------------------------- Indian (16) */
  c('chicken-tikka-masala', 'Chicken Tikka Masala', 'Indian', 'Dinner', 'Medium', 25, 35, 4, 4.9, 5643, ['Gluten-Free'], ['editors', 'trending'], 'Chicken tikka masala'),
  c('butter-chicken', 'Butter Chicken (Murgh Makhani)', 'Indian', 'Dinner', 'Medium', 25, 40, 4, 4.9, 4988, ['Gluten-Free'], ['trending'], 'Butter chicken'),
  c('rogan-josh', 'Kashmiri Rogan Josh', 'Indian', 'Dinner', 'Medium', 25, 90, 6, 4.7, 1322, ['Gluten-Free'], [], 'Rogan josh'),
  c('lamb-vindaloo', 'Goan Lamb Vindaloo', 'Indian', 'Dinner', 'Medium', 30, 90, 6, 4.7, 1106, ['Gluten-Free', 'Dairy-Free'], [], 'Vindaloo curry'),
  c('chicken-biryani', 'Hyderabadi Chicken Biryani', 'Indian', 'Dinner', 'Hard', 45, 60, 6, 4.9, 4522, ['Gluten-Free'], ['editors'], 'Chicken biryani'),
  c('palak-paneer', 'Palak Paneer', 'Indian', 'Dinner', 'Easy', 15, 25, 4, 4.8, 2733, ['Vegetarian', 'Gluten-Free'], [], 'Palak paneer'),
  c('chana-masala', 'Chana Masala', 'Indian', 'Healthy', 'Easy', 15, 30, 4, 4.7, 2166, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Chana masala chickpea curry'),
  c('dal-tadka', 'Dal Tadka', 'Indian', 'Healthy', 'Easy', 10, 35, 4, 4.8, 1955, ['Vegetarian', 'Gluten-Free'], [], 'Dal tadka lentils'),
  c('aloo-gobi', 'Aloo Gobi', 'Indian', 'Healthy', 'Easy', 15, 30, 4, 4.6, 1477, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Aloo gobi'),
  c('masala-dosa', 'Masala Dosa', 'Indian', 'Breakfast', 'Hard', 30, 30, 6, 4.7, 1833, ['Vegetarian', 'Gluten-Free'], [], 'Masala dosa'),
  c('samosas', 'Punjabi Samosas', 'Indian', 'Appetizers', 'Medium', 40, 25, 8, 4.8, 3122, ['Vegan', 'Dairy-Free'], [], 'Samosa'),
  c('vegetable-pakoras', 'Vegetable Pakoras', 'Indian', 'Appetizers', 'Easy', 15, 15, 4, 4.6, 1244, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Pakora'),
  c('tandoori-chicken', 'Tandoori Chicken', 'Indian', 'Dinner', 'Easy', 20, 35, 4, 4.8, 2411, ['Gluten-Free', 'Low-Carb'], [], 'Tandoori chicken'),
  c('garlic-naan', 'Garlic Butter Naan', 'Indian', 'Baking', 'Medium', 90, 10, 8, 4.8, 3055, ['Vegetarian'], [], 'Naan bread'),
  c('gulab-jamun', 'Gulab Jamun', 'Indian', 'Desserts', 'Medium', 20, 25, 8, 4.7, 1688, ['Vegetarian'], [], 'Gulab jamun'),
  c('mango-lassi', 'Mango Lassi', 'Indian', 'Drinks', 'Easy', 5, 0, 2, 4.8, 2277, ['Vegetarian', 'Gluten-Free'], [], 'Mango lassi'),

  /* ---------------------------------------------------------- Chinese (14) */
  c('kung-pao-chicken', 'Kung Pao Chicken', 'Chinese', 'Dinner', 'Medium', 20, 15, 4, 4.8, 3411, ['Dairy-Free'], ['trending'], 'Kung pao chicken'),
  c('sweet-and-sour-pork', 'Sweet and Sour Pork', 'Chinese', 'Dinner', 'Medium', 25, 20, 4, 4.7, 2588, ['Dairy-Free'], [], 'Sweet and sour pork'),
  c('mapo-tofu', 'Mapo Tofu', 'Chinese', 'Dinner', 'Easy', 15, 15, 4, 4.8, 2044, ['Dairy-Free'], [], 'Mapo tofu'),
  c('general-tsos-chicken', "General Tso's Chicken", 'Chinese', 'Dinner', 'Medium', 25, 20, 4, 4.7, 2966, ['Dairy-Free'], [], 'General Tso chicken'),
  c('beef-and-broccoli', 'Beef and Broccoli', 'Chinese', 'Quick Meals', 'Easy', 15, 12, 4, 4.7, 3120, ['Dairy-Free'], [], 'Beef and broccoli'),
  c('egg-fried-rice', 'Egg Fried Rice', 'Chinese', 'Quick Meals', 'Easy', 10, 10, 4, 4.8, 4188, ['Vegetarian', 'Dairy-Free'], ['trending'], 'Egg fried rice'),
  c('chow-mein', 'Chicken Chow Mein', 'Chinese', 'Quick Meals', 'Easy', 15, 15, 4, 4.6, 2311, ['Dairy-Free'], [], 'Chow mein'),
  c('dan-dan-noodles', 'Dan Dan Noodles', 'Chinese', 'Dinner', 'Medium', 15, 15, 4, 4.8, 1622, ['Dairy-Free'], [], 'Dan dan noodles'),
  c('peking-duck', 'Peking Duck', 'Chinese', 'Holiday Specials', 'Hard', 60, 90, 6, 4.8, 1044, ['Dairy-Free'], ['editors'], 'Peking duck'),
  c('char-siu', 'Char Siu Pork', 'Chinese', 'Dinner', 'Easy', 20, 40, 6, 4.8, 1866, ['Dairy-Free'], [], 'Char siu'),
  c('pork-dumplings', 'Steamed Pork Dumplings', 'Chinese', 'Appetizers', 'Medium', 45, 15, 6, 4.8, 3477, ['Dairy-Free'], [], 'Jiaozi dumplings'),
  c('spring-rolls', 'Crispy Spring Rolls', 'Chinese', 'Appetizers', 'Medium', 30, 15, 6, 4.7, 2199, ['Vegan', 'Dairy-Free'], [], 'Spring rolls'),
  c('wonton-soup', 'Wonton Soup', 'Chinese', 'Lunch', 'Medium', 30, 15, 4, 4.7, 1755, ['Dairy-Free'], [], 'Wonton soup'),
  c('hot-and-sour-soup', 'Hot and Sour Soup', 'Chinese', 'Lunch', 'Easy', 15, 20, 4, 4.6, 1533, ['Vegetarian', 'Dairy-Free'], [], 'Hot and sour soup'),

  /* --------------------------------------------------------- American (34) */
  c('classic-cheeseburger', 'Classic Smash Cheeseburger', 'American', 'Dinner', 'Easy', 15, 10, 4, 4.9, 5811, [], ['editors', 'trending'], 'Cheeseburger'),
  c('bbq-baby-back-ribs', 'BBQ Baby Back Ribs', 'American', 'Dinner', 'Medium', 20, 180, 4, 4.9, 3244, ['Gluten-Free', 'Dairy-Free'], [], 'Baby back ribs barbecue'),
  c('buffalo-wings', 'Buffalo Wings', 'American', 'Appetizers', 'Easy', 15, 45, 4, 4.8, 4022, ['Gluten-Free'], ['trending'], 'Buffalo wings'),
  c('southern-fried-chicken', 'Southern Fried Chicken', 'American', 'Dinner', 'Medium', 30, 25, 6, 4.9, 3866, [], ['editors'], 'Fried chicken'),
  c('mac-and-cheese', 'Baked Mac and Cheese', 'American', 'Dinner', 'Easy', 15, 30, 6, 4.8, 4655, ['Vegetarian'], ['trending'], 'Macaroni and cheese'),
  c('meatloaf', 'Classic Meatloaf', 'American', 'Dinner', 'Easy', 15, 60, 6, 4.6, 2133, [], [], 'Meatloaf'),
  c('philly-cheesesteak', 'Philly Cheesesteak', 'American', 'Lunch', 'Easy', 15, 15, 4, 4.8, 2977, [], [], 'Philly cheesesteak'),
  c('pulled-pork-sandwich', 'Pulled Pork Sandwiches', 'American', 'Lunch', 'Easy', 20, 420, 8, 4.8, 2544, ['Dairy-Free'], [], 'Pulled pork sandwich'),
  c('grilled-cheese-sandwich', 'Skillet Grilled Cheese', 'American', 'Quick Meals', 'Easy', 5, 8, 2, 4.7, 3188, ['Vegetarian'], [], 'Grilled cheese sandwich'),
  c('new-england-clam-chowder', 'New England Clam Chowder', 'American', 'Lunch', 'Medium', 20, 35, 6, 4.7, 1622, [], [], 'Clam chowder'),
  c('chicken-noodle-soup', 'Chicken Noodle Soup', 'American', 'Healthy', 'Easy', 15, 40, 6, 4.8, 3411, ['Dairy-Free'], [], 'Chicken noodle soup'),
  c('creamy-tomato-soup', 'Creamy Tomato Soup', 'American', 'Healthy', 'Easy', 10, 30, 4, 4.7, 2288, ['Vegetarian', 'Gluten-Free'], [], 'Tomato soup'),
  c('caesar-salad', 'Caesar Salad', 'American', 'Lunch', 'Easy', 20, 10, 4, 4.8, 3755, [], [], 'Caesar salad'),
  c('cobb-salad', 'Cobb Salad', 'American', 'Healthy', 'Easy', 25, 15, 4, 4.7, 1866, ['Gluten-Free', 'Low-Carb', 'Keto'], [], 'Cobb salad'),
  c('buttermilk-pancakes', 'Fluffy Buttermilk Pancakes', 'American', 'Breakfast', 'Easy', 10, 15, 4, 4.9, 6244, ['Vegetarian'], ['editors', 'trending'], 'Pancakes'),
  c('eggs-benedict', 'Eggs Benedict', 'American', 'Breakfast', 'Hard', 20, 15, 2, 4.8, 2955, [], [], 'Eggs benedict'),
  c('french-toast', 'Brioche French Toast', 'American', 'Breakfast', 'Easy', 10, 15, 4, 4.8, 3477, ['Vegetarian'], [], 'French toast'),
  c('classic-waffles', 'Crisp Belgian-Style Waffles', 'American', 'Breakfast', 'Easy', 10, 20, 4, 4.8, 2811, ['Vegetarian'], [], 'Waffles'),
  c('breakfast-burrito', 'Loaded Breakfast Burrito', 'American', 'Breakfast', 'Easy', 15, 15, 4, 4.7, 2044, [], [], 'Breakfast burrito'),
  c('banana-bread', 'One-Bowl Banana Bread', 'American', 'Baking', 'Easy', 15, 60, 10, 4.9, 5288, ['Vegetarian'], ['trending'], 'Banana bread'),
  c('blueberry-muffins', 'Bakery-Style Blueberry Muffins', 'American', 'Baking', 'Easy', 15, 25, 12, 4.8, 3166, ['Vegetarian'], [], 'Blueberry muffins'),
  c('chocolate-chip-cookies', 'Brown Butter Chocolate Chip Cookies', 'American', 'Baking', 'Easy', 20, 12, 24, 4.9, 7422, ['Vegetarian'], ['editors', 'trending'], 'Chocolate chip cookies'),
  c('cinnamon-rolls', 'Overnight Cinnamon Rolls', 'American', 'Baking', 'Medium', 40, 25, 12, 4.9, 4166, ['Vegetarian'], ['editors'], 'Cinnamon rolls'),
  c('sourdough-bread', 'Artisan Sourdough Bread', 'American', 'Baking', 'Hard', 60, 45, 8, 4.8, 3922, ['Vegan', 'Dairy-Free'], ['new'], 'Sourdough bread'),
  c('fudgy-brownies', 'Fudgy Cocoa Brownies', 'American', 'Desserts', 'Easy', 15, 25, 16, 4.9, 5644, ['Vegetarian'], ['trending'], 'Brownies'),
  c('new-york-cheesecake', 'New York Cheesecake', 'American', 'Desserts', 'Medium', 30, 75, 12, 4.9, 4877, ['Vegetarian'], ['editors'], 'New York cheesecake'),
  c('apple-pie', 'Deep-Dish Apple Pie', 'American', 'Desserts', 'Medium', 45, 60, 8, 4.9, 4122, ['Vegetarian'], [], 'Apple pie'),
  c('key-lime-pie', 'Key Lime Pie', 'American', 'Desserts', 'Easy', 20, 15, 8, 4.8, 2166, ['Vegetarian'], [], 'Key lime pie'),
  c('red-velvet-cake', 'Red Velvet Cake', 'American', 'Desserts', 'Medium', 30, 30, 12, 4.7, 3011, ['Vegetarian'], [], 'Red velvet cake'),
  c('carrot-cake', 'Spiced Carrot Cake', 'American', 'Desserts', 'Easy', 25, 40, 12, 4.8, 2755, ['Vegetarian'], [], 'Carrot cake'),
  c('chocolate-lava-cake', 'Molten Chocolate Lava Cake', 'American', 'Desserts', 'Easy', 15, 13, 4, 4.9, 3866, ['Vegetarian'], ['trending'], 'Chocolate lava cake'),
  c('roast-turkey', 'Herb-Butter Roast Turkey', 'American', 'Holiday Specials', 'Medium', 40, 210, 12, 4.8, 2411, ['Gluten-Free'], [], 'Roast turkey'),
  c('pumpkin-pie', 'Classic Pumpkin Pie', 'American', 'Holiday Specials', 'Easy', 25, 55, 8, 4.8, 2688, ['Vegetarian'], [], 'Pumpkin pie'),
  c('gingerbread-cookies', 'Gingerbread Cookies', 'American', 'Holiday Specials', 'Easy', 30, 12, 24, 4.7, 2199, ['Vegetarian'], [], 'Gingerbread cookies'),

  /* ------------------------------------------------------------ Greek (8) */
  c('greek-salad', 'Horiatiki Greek Salad', 'Greek', 'Healthy', 'Easy', 15, 0, 4, 4.8, 2966, ['Vegetarian', 'Gluten-Free', 'Low-Carb'], [], 'Greek salad'),
  c('moussaka', 'Moussaka', 'Greek', 'Dinner', 'Hard', 40, 75, 8, 4.8, 1877, [], ['editors'], 'Moussaka'),
  c('chicken-souvlaki', 'Chicken Souvlaki', 'Greek', 'Dinner', 'Easy', 20, 15, 4, 4.8, 2544, ['Gluten-Free', 'Dairy-Free'], [], 'Souvlaki'),
  c('gyros', 'Pork Gyros', 'Greek', 'Lunch', 'Medium', 25, 30, 4, 4.7, 2133, [], [], 'Gyros'),
  c('spanakopita', 'Spanakopita', 'Greek', 'Appetizers', 'Medium', 30, 45, 8, 4.7, 1466, ['Vegetarian'], [], 'Spanakopita'),
  c('tzatziki', 'Tzatziki', 'Greek', 'Appetizers', 'Easy', 15, 0, 6, 4.8, 2277, ['Vegetarian', 'Gluten-Free', 'Low-Carb'], [], 'Tzatziki'),
  c('avgolemono-soup', 'Avgolemono Soup', 'Greek', 'Healthy', 'Easy', 10, 25, 4, 4.7, 1122, ['Gluten-Free', 'Dairy-Free'], [], 'Avgolemono soup'),
  c('baklava', 'Pistachio Baklava', 'Greek', 'Desserts', 'Medium', 40, 50, 24, 4.8, 2811, ['Vegetarian'], [], 'Baklava'),

  /* ------------------------------------------------------------- Thai (9) */
  c('pad-thai', 'Pad Thai', 'Thai', 'Dinner', 'Medium', 20, 15, 4, 4.9, 4966, ['Dairy-Free'], ['editors', 'trending'], 'Pad thai'),
  c('thai-green-curry', 'Thai Green Curry', 'Thai', 'Dinner', 'Easy', 15, 25, 4, 4.8, 3244, ['Gluten-Free', 'Dairy-Free'], ['trending'], 'Thai green curry'),
  c('massaman-curry', 'Massaman Beef Curry', 'Thai', 'Dinner', 'Medium', 20, 90, 6, 4.8, 1622, ['Gluten-Free', 'Dairy-Free'], [], 'Massaman curry'),
  c('pad-kra-pao', 'Pad Kra Pao (Thai Basil Chicken)', 'Thai', 'Quick Meals', 'Easy', 10, 10, 2, 4.8, 2411, ['Dairy-Free'], [], 'Pad kra pao thai basil'),
  c('tom-yum-goong', 'Tom Yum Goong', 'Thai', 'Healthy', 'Easy', 15, 20, 4, 4.8, 2166, ['Gluten-Free', 'Dairy-Free', 'Low-Carb'], [], 'Tom yum goong soup'),
  c('tom-kha-gai', 'Tom Kha Gai', 'Thai', 'Healthy', 'Easy', 15, 20, 4, 4.7, 1755, ['Gluten-Free', 'Dairy-Free'], [], 'Tom kha gai'),
  c('som-tam', 'Som Tam (Green Papaya Salad)', 'Thai', 'Healthy', 'Easy', 20, 0, 4, 4.7, 1344, ['Gluten-Free', 'Dairy-Free'], [], 'Som tam papaya salad'),
  c('thai-fried-rice', 'Thai Pineapple Fried Rice', 'Thai', 'Quick Meals', 'Easy', 15, 12, 4, 4.6, 1588, ['Vegetarian', 'Dairy-Free'], [], 'Thai fried rice'),
  c('mango-sticky-rice', 'Mango Sticky Rice', 'Thai', 'Desserts', 'Easy', 15, 25, 4, 4.9, 3122, ['Vegan', 'Gluten-Free', 'Dairy-Free'], ['trending'], 'Mango sticky rice'),

  /* -------------------------------------------------- Middle Eastern (9) */
  c('hummus', 'Silky Hummus', 'Middle Eastern', 'Appetizers', 'Easy', 15, 40, 6, 4.9, 4522, ['Vegan', 'Gluten-Free', 'Dairy-Free'], ['editors'], 'Hummus'),
  c('falafel', 'Crispy Falafel', 'Middle Eastern', 'Lunch', 'Medium', 25, 15, 6, 4.8, 3011, ['Vegan', 'Dairy-Free'], ['trending'], 'Falafel'),
  c('chicken-shawarma', 'Chicken Shawarma', 'Middle Eastern', 'Dinner', 'Easy', 20, 35, 6, 4.9, 3688, [], ['editors'], 'Chicken shawarma'),
  c('baba-ganoush', 'Baba Ganoush', 'Middle Eastern', 'Appetizers', 'Easy', 15, 45, 6, 4.7, 1533, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Baba ganoush'),
  c('tabbouleh', 'Tabbouleh', 'Middle Eastern', 'Healthy', 'Easy', 25, 0, 6, 4.7, 1688, ['Vegan', 'Dairy-Free'], [], 'Tabbouleh salad'),
  c('fattoush', 'Fattoush Salad', 'Middle Eastern', 'Healthy', 'Easy', 20, 10, 4, 4.6, 1188, ['Vegan', 'Dairy-Free'], [], 'Fattoush'),
  c('lamb-kofta-kebabs', 'Lamb Kofta Kebabs', 'Middle Eastern', 'Dinner', 'Easy', 20, 15, 4, 4.8, 1966, ['Gluten-Free', 'Dairy-Free', 'Low-Carb'], [], 'Kofta kebab'),
  c('shakshuka', 'Shakshuka', 'Middle Eastern', 'Breakfast', 'Easy', 10, 25, 4, 4.9, 4188, ['Vegetarian', 'Gluten-Free'], ['trending'], 'Shakshuka'),
  c('knafeh', 'Knafeh', 'Middle Eastern', 'Desserts', 'Medium', 25, 40, 12, 4.7, 1244, ['Vegetarian'], [], 'Knafeh dessert'),

  /* ---------------------------------------------------------- Spanish (6) */
  c('paella-valenciana', 'Paella Valenciana', 'Spanish', 'Dinner', 'Medium', 25, 45, 6, 4.8, 3411, ['Gluten-Free', 'Dairy-Free'], ['editors'], 'Paella'),
  c('gazpacho', 'Andalusian Gazpacho', 'Spanish', 'Healthy', 'Easy', 20, 0, 4, 4.7, 1877, ['Vegan', 'Dairy-Free'], [], 'Gazpacho'),
  c('patatas-bravas', 'Patatas Bravas', 'Spanish', 'Appetizers', 'Easy', 15, 30, 4, 4.7, 2044, ['Vegan', 'Dairy-Free'], [], 'Patatas bravas'),
  c('tortilla-espanola', 'Tortilla Española', 'Spanish', 'Lunch', 'Medium', 15, 35, 6, 4.8, 2311, ['Vegetarian', 'Gluten-Free'], [], 'Tortilla espanola'),
  c('gambas-al-ajillo', 'Gambas al Ajillo', 'Spanish', 'Appetizers', 'Easy', 10, 10, 4, 4.8, 1755, ['Gluten-Free', 'Dairy-Free', 'Keto'], [], 'Gambas al ajillo'),
  c('sangria', 'Red Wine Sangria', 'Spanish', 'Drinks', 'Easy', 15, 0, 6, 4.7, 2133, ['Vegan', 'Gluten-Free'], [], 'Sangria'),

  /* ----------------------------------------------------------- Korean (7) */
  c('bibimbap', 'Bibimbap', 'Korean', 'Dinner', 'Medium', 35, 20, 4, 4.8, 3122, ['Dairy-Free'], ['trending'], 'Bibimbap'),
  c('korean-fried-chicken', 'Korean Fried Chicken', 'Korean', 'Dinner', 'Medium', 25, 25, 4, 4.9, 3866, ['Dairy-Free'], ['editors'], 'Korean fried chicken'),
  c('bulgogi', 'Beef Bulgogi', 'Korean', 'Dinner', 'Easy', 20, 10, 4, 4.8, 2966, ['Dairy-Free'], [], 'Bulgogi'),
  c('japchae', 'Japchae', 'Korean', 'Dinner', 'Medium', 25, 15, 6, 4.7, 1622, ['Vegan', 'Dairy-Free'], [], 'Japchae'),
  c('tteokbokki', 'Tteokbokki', 'Korean', 'Quick Meals', 'Easy', 10, 15, 2, 4.7, 2044, ['Vegetarian', 'Dairy-Free'], ['trending'], 'Tteokbokki'),
  c('kimchi', 'Napa Cabbage Kimchi', 'Korean', 'Appetizers', 'Medium', 60, 0, 12, 4.8, 2277, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Kimchi'),
  c('kimchi-jjigae', 'Kimchi Jjigae', 'Korean', 'Healthy', 'Easy', 10, 25, 4, 4.7, 1466, ['Dairy-Free'], [], 'Kimchi jjigae stew'),

  /* ------------------------------------------------------- Vietnamese (5) */
  c('pho-bo', 'Phở Bò (Beef Noodle Soup)', 'Vietnamese', 'Dinner', 'Hard', 30, 240, 6, 4.9, 3477, ['Dairy-Free'], ['editors', 'trending'], 'Pho bo noodle soup'),
  c('banh-mi', 'Bánh Mì', 'Vietnamese', 'Lunch', 'Easy', 25, 10, 4, 4.8, 2411, ['Dairy-Free'], [], 'Banh mi'),
  c('goi-cuon', 'Gỏi Cuốn (Fresh Spring Rolls)', 'Vietnamese', 'Appetizers', 'Easy', 30, 5, 6, 4.8, 2166, ['Gluten-Free', 'Dairy-Free'], [], 'Goi cuon spring rolls'),
  c('bun-cha', 'Bún Chả', 'Vietnamese', 'Dinner', 'Medium', 30, 20, 4, 4.8, 1344, ['Dairy-Free'], [], 'Bun cha'),
  c('vietnamese-iced-coffee', 'Cà Phê Sữa Đá', 'Vietnamese', 'Drinks', 'Easy', 5, 5, 1, 4.8, 1877, ['Vegetarian', 'Gluten-Free'], [], 'Vietnamese iced coffee'),

  /* ---------------------------------------------------------- British (7) */
  c('fish-and-chips', 'Beer-Battered Fish and Chips', 'British', 'Dinner', 'Medium', 25, 25, 4, 4.8, 3244, ['Dairy-Free'], ['trending'], 'Fish and chips'),
  c('shepherds-pie', "Shepherd's Pie", 'British', 'Dinner', 'Easy', 25, 50, 6, 4.8, 2955, [], [], 'Shepherds pie'),
  c('beef-wellington', 'Beef Wellington', 'British', 'Holiday Specials', 'Hard', 60, 45, 6, 4.8, 1622, [], ['editors'], 'Beef wellington'),
  c('full-english-breakfast', 'Full English Breakfast', 'British', 'Breakfast', 'Easy', 15, 25, 2, 4.7, 2133, [], [], 'Full english breakfast'),
  c('bangers-and-mash', 'Bangers and Mash with Onion Gravy', 'British', 'Dinner', 'Easy', 15, 35, 4, 4.7, 1466, [], [], 'Bangers and mash'),
  c('english-scones', 'English Scones', 'British', 'Baking', 'Easy', 15, 15, 8, 4.8, 2588, ['Vegetarian'], [], 'Scones cream tea'),
  c('sticky-toffee-pudding', 'Sticky Toffee Pudding', 'British', 'Desserts', 'Easy', 20, 35, 8, 4.9, 2411, ['Vegetarian'], ['editors'], 'Sticky toffee pudding'),

  /* ----------------------------------------------------------- German (4) */
  c('pork-schnitzel', 'Pork Schnitzel', 'German', 'Dinner', 'Easy', 20, 10, 4, 4.8, 2277, [], [], 'Schnitzel'),
  c('soft-pretzels', 'Bavarian Soft Pretzels', 'German', 'Baking', 'Medium', 40, 15, 8, 4.8, 2044, ['Vegetarian'], [], 'Pretzel bavarian'),
  c('black-forest-cake', 'Black Forest Cake', 'German', 'Desserts', 'Hard', 45, 35, 12, 4.7, 1755, ['Vegetarian'], [], 'Black forest cake'),
  c('german-potato-salad', 'Warm German Potato Salad', 'German', 'Lunch', 'Easy', 15, 25, 6, 4.6, 1188, ['Gluten-Free', 'Dairy-Free'], [], 'German potato salad'),

  /* -------------------------------------------- Central & Eastern Europe (5) */
  c('borscht', 'Ukrainian Borscht', 'Ukrainian', 'Healthy', 'Medium', 25, 60, 6, 4.7, 1533, ['Vegetarian', 'Gluten-Free'], [], 'Borscht'),
  c('beef-stroganoff', 'Beef Stroganoff', 'Russian', 'Dinner', 'Easy', 15, 25, 4, 4.8, 3011, [], ['trending'], 'Beef stroganoff'),
  c('pierogi', 'Potato and Cheese Pierogi', 'Polish', 'Dinner', 'Medium', 45, 20, 6, 4.8, 1877, ['Vegetarian'], [], 'Pierogi'),
  c('hungarian-goulash', 'Hungarian Goulash', 'Hungarian', 'Dinner', 'Easy', 20, 120, 6, 4.8, 2044, ['Gluten-Free', 'Dairy-Free'], [], 'Goulash'),
  c('swedish-meatballs', 'Swedish Meatballs', 'Swedish', 'Dinner', 'Easy', 20, 25, 4, 4.8, 2688, [], [], 'Swedish meatballs'),

  /* -------------------------------------- Latin America & Caribbean (5) */
  c('feijoada', 'Feijoada Brasileira', 'Brazilian', 'Holiday Specials', 'Medium', 30, 150, 8, 4.7, 1244, ['Gluten-Free', 'Dairy-Free'], [], 'Feijoada'),
  c('ceviche', 'Peruvian Ceviche', 'Peruvian', 'Appetizers', 'Easy', 25, 0, 4, 4.8, 1966, ['Gluten-Free', 'Dairy-Free', 'Low-Carb', 'Keto'], ['trending'], 'Ceviche'),
  c('beef-empanadas', 'Beef Empanadas', 'Argentinian', 'Appetizers', 'Medium', 40, 25, 12, 4.8, 2133, [], [], 'Empanadas'),
  c('jerk-chicken', 'Jamaican Jerk Chicken', 'Jamaican', 'Dinner', 'Easy', 20, 45, 4, 4.8, 2411, ['Dairy-Free'], ['trending'], 'Jerk chicken'),
  c('cuban-sandwich', 'Cuban Sandwich', 'Cuban', 'Lunch', 'Easy', 15, 10, 4, 4.7, 1622, [], [], 'Cuban sandwich'),

  /* ----------------------------------------------------- North Africa (3) */
  c('moroccan-chicken-tagine', 'Moroccan Chicken Tagine', 'Moroccan', 'Dinner', 'Easy', 25, 60, 6, 4.8, 2277, ['Gluten-Free', 'Dairy-Free'], ['editors'], 'Chicken tagine'),
  c('harira', 'Harira Soup', 'Moroccan', 'Healthy', 'Easy', 20, 60, 6, 4.6, 966, ['Vegan', 'Dairy-Free'], [], 'Harira soup'),
  c('koshari', 'Egyptian Koshari', 'Egyptian', 'Healthy', 'Medium', 25, 45, 6, 4.7, 1122, ['Vegan', 'Dairy-Free'], [], 'Koshari'),

  /* --------------------------------------------------------- Turkish (3) */
  c('menemen', 'Menemen', 'Turkish', 'Breakfast', 'Easy', 10, 15, 2, 4.7, 1466, ['Vegetarian', 'Gluten-Free', 'Low-Carb'], [], 'Menemen turkish eggs'),
  c('lahmacun', 'Lahmacun', 'Turkish', 'Baking', 'Medium', 40, 10, 6, 4.7, 1188, ['Dairy-Free'], [], 'Lahmacun'),
  c('turkish-coffee', 'Turkish Coffee', 'Turkish', 'Drinks', 'Easy', 5, 5, 2, 4.7, 1044, ['Vegan', 'Gluten-Free', 'Dairy-Free'], [], 'Turkish coffee'),

  /* ---------------------------------------------- International staples (5) */
  c('mojito', 'Classic Mojito', 'Cuban', 'Drinks', 'Easy', 5, 0, 1, 4.8, 2544, ['Vegan', 'Gluten-Free'], [], 'Mojito cocktail'),
  c('espresso-martini', 'Espresso Martini', 'International', 'Drinks', 'Easy', 5, 0, 1, 4.8, 2811, ['Vegan', 'Gluten-Free'], ['trending'], 'Espresso martini'),
  c('hot-chocolate', 'French-Style Hot Chocolate', 'International', 'Drinks', 'Easy', 5, 10, 2, 4.8, 1966, ['Vegetarian', 'Gluten-Free'], [], 'Hot chocolate'),
  c('avocado-toast', 'Ultimate Avocado Toast', 'International', 'Breakfast', 'Easy', 8, 4, 2, 4.7, 3244, ['Vegan', 'Dairy-Free'], ['trending'], 'Avocado toast'),
  c('overnight-oats', 'Overnight Oats', 'International', 'Healthy', 'Easy', 10, 0, 2, 4.7, 2955, ['Vegetarian'], ['new'], 'Overnight oats')
];
