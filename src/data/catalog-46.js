'use strict';

/**
 * Weekly Delight — recipe catalog, volume forty-six.
 * One hundred budget dishes that need only a pan and a hob: soups, eggs, breakfasts, lentil, bean and vegetable dishes, and easy pasta, built on cheap staples.
 * They are the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: American 20, British 20, Indian 13, Italian 9, Chinese 6, Filipino 4, Greek 4, Czech 3, German 2, Mexican 2, Middle Eastern 2, Moroccan 2, Spanish 2, African 1, French 1, Indonesian 1, International 1, Irish 1, Korean 1, Persian 1, Portuguese 1, Romanian 1, South African 1, Thai 1.
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
  c('lentil-and-carrot-soup', 'Lentil and Carrot Soup', 'British', 'Healthy', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'lentil and carrot soup'),
  c('red-lentil-and-tomato-soup', 'Red Lentil and Tomato Soup', 'British', 'Healthy', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'red lentil and tomato soup'),
  c('cabbage-and-potato-soup', 'Cabbage and Potato Soup', 'Irish', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'cabbage and potato soup'),
  c('tomato-and-egg-soup', 'Tomato and Egg Soup', 'Chinese', 'Quick Meals', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'tomato and egg soup'),
  c('roast-tomato-soup', 'Roast Tomato Soup', 'British', 'Lunch', 'Easy', 10, 45, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'roast tomato soup'),
  c('greek-lentil-soup', 'Greek Lentil Soup', 'Greek', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'greek lentil soup'),
  c('moroccan-chickpea-soup', 'Moroccan Chickpea Soup', 'Moroccan', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'moroccan chickpea soup'),
  c('czech-potato-soup', 'Czech Potato Soup', 'Czech', 'Dinner', 'Easy', 15, 35, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'czech potato soup'),
  c('german-potato-soup', 'German Potato Soup', 'German', 'Dinner', 'Easy', 15, 35, 4, 0, 0, ['Dairy-Free'], ['new'], 'german potato soup'),
  c('romanian-bean-soup', 'Romanian Bean Soup', 'Romanian', 'Dinner', 'Easy', 10, 45, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'romanian bean soup'),
  c('zuppa-di-fagioli', 'Zuppa di Fagioli', 'Italian', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'zuppa di fagioli'),
  c('acquacotta', 'Acquacotta', 'Italian', 'Dinner', 'Easy', 10, 30, 4, 0, 0, [], ['new'], 'acquacotta'),
  c('pastina-in-brodo', 'Pastina in Brodo', 'Italian', 'Quick Meals', 'Easy', 5, 10, 2, 0, 0, [], ['new'], 'pastina in brodo'),
  c('persian-barley-soup', 'Persian Barley Soup', 'Persian', 'Dinner', 'Easy', 15, 60, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'persian barley soup'),
  c('sausage-and-bean-stew', 'Sausage and Bean Stew', 'British', 'Dinner', 'Easy', 10, 35, 4, 0, 0, [], ['new'], 'sausage and bean stew'),
  c('kulajda', 'Kulajda', 'Czech', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian'], ['new'], 'kulajda'),
  c('czech-garlic-soup', 'Czech Garlic Soup', 'Czech', 'Dinner', 'Easy', 5, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'czech garlic soup'),
  c('sayur-lodeh', 'Sayur Lodeh', 'Indonesian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'sayur lodeh'),
  c('ginisang-munggo', 'Ginisang Munggo', 'Filipino', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'ginisang munggo'),
  c('egg-muffin-cups', 'Egg Muffin Cups', 'American', 'Breakfast', 'Easy', 10, 20, 6, 0, 0, ['Gluten-Free'], ['new'], 'egg muffin cups'),
  c('parsi-akuri', 'Parsi Akuri', 'Indian', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'parsi akuri'),
  c('tortang-talong', 'Tortang Talong', 'Filipino', 'Quick Meals', 'Easy', 10, 10, 2, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'tortang talong'),
  c('tortang-giniling', 'Tortang Giniling', 'Filipino', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'tortang giniling'),
  c('egg-adobo', 'Egg Adobo', 'Filipino', 'Dinner', 'Easy', 5, 20, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'egg adobo'),
  c('egg-fried-noodles', 'Egg Fried Noodles', 'Chinese', 'Quick Meals', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'egg fried noodles'),
  c('egg-tacos', 'Egg Tacos', 'Mexican', 'Breakfast', 'Easy', 5, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'egg tacos'),
  c('egg-tostadas', 'Egg Tostadas', 'Mexican', 'Breakfast', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'egg tostadas'),
  c('kerala-egg-roast', 'Kerala Egg Roast', 'Indian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'kerala egg roast'),
  c('egg-pulao', 'Egg Pulao', 'Indian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'egg pulao'),
  c('chinese-steamed-eggs', 'Chinese Steamed Eggs', 'Chinese', 'Quick Meals', 'Easy', 5, 12, 2, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'chinese steamed eggs'),
  c('gyeran-mari', 'Gyeran Mari', 'Korean', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'gyeran mari'),
  c('thai-basil-fried-egg', 'Thai Basil Fried Egg', 'Thai', 'Quick Meals', 'Easy', 2, 5, 2, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'thai basil fried egg'),
  c('strapatsada', 'Strapatsada', 'Greek', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'strapatsada'),
  c('chipsi-mayai', 'Chipsi Mayai', 'African', 'Dinner', 'Easy', 10, 20, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'chipsi mayai'),
  c('bread-omelette', 'Bread Omelette', 'Indian', 'Breakfast', 'Easy', 5, 8, 2, 0, 0, ['Vegetarian'], ['new'], 'bread omelette'),
  c('masala-toast', 'Masala Toast', 'Indian', 'Breakfast', 'Easy', 10, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'masala toast'),
  c('savoury-french-toast', 'Savoury French Toast', 'British', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'savoury french toast'),
  c('breakfast-fried-rice', 'Breakfast Fried Rice', 'American', 'Breakfast', 'Easy', 10, 10, 2, 0, 0, ['Dairy-Free'], ['new'], 'breakfast fried rice'),
  c('sweet-potato-hash', 'Sweet Potato Hash', 'American', 'Breakfast', 'Easy', 10, 20, 2, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'sweet potato hash'),
  c('griessbrei', 'Griessbrei', 'German', 'Breakfast', 'Easy', 5, 15, 3, 0, 0, ['Vegetarian'], ['new'], 'griessbrei'),
  c('sheera', 'Sheera', 'Indian', 'Desserts', 'Easy', 5, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'sheera'),
  c('gobi-matar', 'Gobi Matar', 'Indian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'gobi matar'),
  c('lentil-fritters', 'Lentil Fritters', 'Middle Eastern', 'Appetizers', 'Easy', 15, 15, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'lentil fritters'),
  c('chickpea-tomato-stew', 'Chickpea Tomato Stew', 'Middle Eastern', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'chickpea tomato stew'),
  c('jeera-aloo', 'Jeera Aloo', 'Indian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'jeera aloo'),
  c('masoor-dal', 'Masoor Dal', 'Indian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'masoor dal'),
  c('tomato-rice', 'Tomato Rice', 'Indian', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'tomato rice'),
  c('curd-rice', 'Curd Rice', 'Indian', 'Lunch', 'Easy', 10, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'curd rice'),
  c('besan-chilla', 'Besan Chilla', 'Indian', 'Breakfast', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'besan chilla'),
  c('cabbage-stir-fry-with-garlic', 'Cabbage Stir Fry with Garlic', 'Chinese', 'Quick Meals', 'Easy', 5, 8, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'cabbage stir fry with garlic'),
  c('cabbage-fritters', 'Cabbage Fritters', 'International', 'Appetizers', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'cabbage fritters'),
  c('carrot-salad-with-lemon', 'Carrot Salad with Lemon', 'Moroccan', 'Healthy', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'carrot salad with lemon'),
  c('carrot-fritters', 'Carrot Fritters', 'British', 'Appetizers', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'carrot fritters'),
  c('roast-carrots-with-cumin', 'Roast Carrots with Cumin', 'British', 'Dinner', 'Easy', 5, 35, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'roast carrots with cumin'),
  c('roast-cabbage-wedges', 'Roast Cabbage Wedges', 'British', 'Dinner', 'Easy', 5, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'roast cabbage wedges'),
  c('roast-cauliflower-with-garlic', 'Roast Cauliflower with Garlic', 'British', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'roast cauliflower with garlic'),
  c('cauliflower-fritters', 'Cauliflower Fritters', 'American', 'Appetizers', 'Easy', 15, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'cauliflower fritters'),
  c('potato-salad-with-mustard-dressing', 'Potato Salad with Mustard Dressing', 'American', 'Lunch', 'Easy', 15, 20, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'potato salad with mustard dressing'),
  c('cheesy-jacket-potatoes', 'Cheesy Jacket Potatoes', 'British', 'Dinner', 'Easy', 5, 60, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'cheesy jacket potatoes'),
  c('tortilla-pizza', 'Tortilla Pizza', 'American', 'Quick Meals', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'tortilla pizza'),
  c('naan-pizza', 'Naan Pizza', 'American', 'Quick Meals', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'naan pizza'),
  c('pizza-dough-without-yeast', 'Pizza Dough Without Yeast', 'Italian', 'Baking', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'pizza dough without yeast'),
  c('three-ingredient-peanut-butter-cookies', 'Three Ingredient Peanut Butter Cookies', 'American', 'Baking', 'Easy', 5, 12, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'three ingredient peanut butter cookies'),
  c('stewed-apples', 'Stewed Apples', 'British', 'Desserts', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'stewed apples'),
  c('pasta-with-tomato-and-basil', 'Pasta with Tomato and Basil', 'Italian', 'Quick Meals', 'Easy', 5, 20, 4, 0, 0, [], ['new'], 'pasta with tomato and basil'),
  c('pasta-with-peas-and-bacon', 'Pasta with Peas and Bacon', 'Italian', 'Quick Meals', 'Easy', 5, 20, 4, 0, 0, [], ['new'], 'pasta with peas and bacon'),
  c('pasta-frittata', 'Pasta Frittata', 'Italian', 'Lunch', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'pasta frittata'),
  c('canned-salmon-cakes', 'Canned Salmon Cakes', 'American', 'Quick Meals', 'Easy', 10, 10, 4, 0, 0, [], ['new'], 'canned salmon cakes'),
  c('mince-and-potatoes', 'Mince and Potatoes', 'British', 'Dinner', 'Easy', 10, 30, 4, 0, 0, ['Dairy-Free'], ['new'], 'mince and potatoes'),
  c('homemade-burger-patties', 'Homemade Burger Patties', 'American', 'Dinner', 'Easy', 10, 10, 4, 0, 0, [], ['new'], 'homemade burger patties'),
  c('chicken-drumsticks-roasted', 'Chicken Drumsticks Roasted', 'British', 'Dinner', 'Easy', 5, 40, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'chicken drumsticks roasted'),
  c('chicken-tray-bake', 'Chicken Tray Bake', 'British', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Gluten-Free'], ['new'], 'chicken tray bake'),
  c('baked-beans-from-scratch', 'Baked Beans from Scratch', 'British', 'Lunch', 'Easy', 10, 40, 6, 0, 0, ['Dairy-Free'], ['new'], 'baked beans from scratch'),
  c('vegetable-fritters', 'Vegetable Fritters', 'British', 'Appetizers', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'vegetable fritters'),
  c('gigantes-plaki', 'Gigantes Plaki', 'Greek', 'Dinner', 'Easy', 10, 60, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'gigantes plaki'),
  c('briam', 'Briam', 'Greek', 'Dinner', 'Easy', 15, 60, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'briam'),
  c('lentejas', 'Lentejas', 'Spanish', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'lentejas'),
  c('pisto', 'Pisto', 'Spanish', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'pisto'),
  c('arroz-doce', 'Arroz Doce', 'Portuguese', 'Desserts', 'Easy', 5, 40, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'arroz doce'),
  c('bok-choy-with-garlic', 'Bok Choy with Garlic', 'Chinese', 'Quick Meals', 'Easy', 5, 5, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'bok choy with garlic'),
  c('eggplant-with-garlic-sauce', 'Eggplant with Garlic Sauce', 'Chinese', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'eggplant with garlic sauce'),
  c('boerewors-roll', 'Boerewors Roll', 'South African', 'Dinner', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'boerewors roll'),
  c('roast-vegetables', 'Roast Vegetables', 'British', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian', 'Vegan', 'Gluten-Free'], ['new'], 'roast vegetables'),
  c('roast-beetroot', 'Roast Beetroot', 'British', 'Healthy', 'Easy', 10, 50, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'roast beetroot'),
  c('taco-pasta', 'Taco Pasta', 'American', 'Dinner', 'Easy', 10, 25, 6, 0, 0, [], ['new'], 'taco pasta'),
  c('beef-and-pasta-skillet', 'Beef and Pasta Skillet', 'American', 'Dinner', 'Easy', 10, 25, 6, 0, 0, [], ['new'], 'beef and pasta skillet'),
  c('peas-pulao', 'Peas Pulao', 'Indian', 'Dinner', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'peas pulao'),
  c('tomato-salad', 'Tomato Salad', 'Italian', 'Healthy', 'Easy', 10, 0, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'tomato salad'),
  c('onion-chutney', 'Onion Chutney', 'British', 'Appetizers', 'Easy', 10, 40, 8, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'onion chutney'),
  c('applesauce', 'Applesauce', 'American', 'Desserts', 'Easy', 10, 20, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'applesauce'),
  c('frozen-banana-pops', 'Frozen Banana Pops', 'American', 'Desserts', 'Easy', 10, 0, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'frozen banana pops'),
  c('vanilla-mug-cake', 'Vanilla Mug Cake', 'American', 'Desserts', 'Easy', 3, 2, 1, 0, 0, ['Vegetarian'], ['new'], 'vanilla mug cake'),
  c('fairy-cakes', 'Fairy Cakes', 'British', 'Baking', 'Easy', 15, 18, 12, 0, 0, ['Vegetarian'], ['new'], 'fairy cakes'),
  c('pizza-muffins', 'Pizza Muffins', 'American', 'Lunch', 'Easy', 10, 20, 12, 0, 0, [], ['new'], 'pizza muffins'),
  c('pizza-pinwheels', 'Pizza Pinwheels', 'American', 'Appetizers', 'Easy', 15, 18, 12, 0, 0, [], ['new'], 'pizza pinwheels'),
  c('spinach-pinwheels', 'Spinach Pinwheels', 'American', 'Appetizers', 'Easy', 15, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'spinach pinwheels'),
  c('herb-butter', 'Herb Butter', 'French', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'herb butter'),
  c('tomato-sauce', 'Tomato Sauce', 'Italian', 'Dinner', 'Easy', 5, 30, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'tomato sauce'),
  c('lentil-sloppy-joes', 'Lentil Sloppy Joes', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'lentil sloppy joes')
];
