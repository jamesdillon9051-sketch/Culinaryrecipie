'use strict';

/**
 * Weekly Delight — recipe catalog, volume forty.
 * One hundred pies, tarts, pasties and pastries, cakes, cheesecakes, muffins,
 * biscuits and slices from Britain, Australia, New Zealand and America, with
 * party snacks, wings, a few sides and soups, and two drinks. They are
 * the variations that cooks in the USA, Canada, Australia, the UK and New
 * Zealand look for by name; no search-volume data was used to pick or rank them.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, then compared by hand with the closest existing
 * recipes, and the dishes that were the same under another name were dropped.
 *
 * Spread: American 45, British 22, French 11, Australian 9, Italian 6, German 1, Irish 1, Middle Eastern 1, New Zealand 1, Polish 1, South African 1, Spanish 1.
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
  c('lemon-pasta', 'Lemon Pasta', 'Italian', 'Quick Meals', 'Easy', 5, 12, 4, 0, 0, [], ['new'], 'lemon pasta'),
  c('veggie-pizza', 'Veggie Pizza', 'American', 'Dinner', 'Easy', 20, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'veggie pizza'),
  c('polish-meatballs', 'Polish Meatballs', 'Polish', 'Dinner', 'Medium', 20, 35, 4, 0, 0, [], ['new'], 'polish meatballs'),
  c('beef-meatballs', 'Beef Meatballs', 'American', 'Dinner', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'beef meatballs'),
  c('crab-linguine', 'Crab Linguine', 'Italian', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'crab linguine'),
  c('chicken-and-avocado-wrap', 'Chicken and Avocado Wrap', 'American', 'Lunch', 'Easy', 10, 0, 2, 0, 0, ['Dairy-Free'], ['new'], 'chicken and avocado wrap'),
  c('beetroot-and-goat-cheese-salad', 'Beetroot and Goat Cheese Salad', 'British', 'Lunch', 'Easy', 15, 50, 4, 0, 0, ['Vegetarian'], ['new'], 'beetroot and goat cheese salad'),
  c('pear-and-walnut-salad', 'Pear and Walnut Salad', 'American', 'Healthy', 'Easy', 10, 3, 4, 0, 0, ['Vegetarian'], ['new'], 'pear and walnut salad'),
  c('steak-and-cheese-pasty', 'Steak and Cheese Pasty', 'Australian', 'Dinner', 'Medium', 30, 40, 4, 0, 0, [], ['new'], 'steak and cheese pasty'),
  c('chicken-and-chorizo-pie', 'Chicken and Chorizo Pie', 'British', 'Dinner', 'Medium', 30, 40, 6, 0, 0, [], ['new'], 'chicken and chorizo pie'),
  c('pork-and-apple-pie', 'Pork and Apple Pie', 'British', 'Dinner', 'Medium', 35, 45, 6, 0, 0, [], ['new'], 'pork and apple pie'),
  c('ham-and-egg-pie', 'Ham and Egg Pie', 'British', 'Dinner', 'Medium', 30, 40, 6, 0, 0, [], ['new'], 'ham and egg pie'),
  c('beef-pasties', 'Beef Pasties', 'British', 'Dinner', 'Medium', 35, 45, 6, 0, 0, [], ['new'], 'beef pasties'),
  c('tomato-tart', 'Tomato Tart', 'French', 'Lunch', 'Easy', 15, 30, 6, 0, 0, ['Vegetarian'], ['new'], 'tomato tart'),
  c('onion-tart', 'Onion Tart', 'French', 'Lunch', 'Medium', 20, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'onion tart'),
  c('goat-cheese-tart', 'Goat Cheese Tart', 'French', 'Lunch', 'Easy', 15, 30, 6, 0, 0, ['Vegetarian'], ['new'], 'goat cheese tart'),
  c('asparagus-tart', 'Asparagus Tart', 'British', 'Lunch', 'Easy', 15, 30, 6, 0, 0, [], ['new'], 'asparagus tart'),
  c('mushroom-tart', 'Mushroom Tart', 'French', 'Lunch', 'Easy', 15, 35, 6, 0, 0, ['Vegetarian'], ['new'], 'mushroom tart'),
  c('mini-quiches', 'Mini Quiches', 'French', 'Appetizers', 'Medium', 25, 20, 12, 0, 0, [], ['new'], 'mini quiches'),
  c('halloumi-fries', 'Halloumi Fries', 'Middle Eastern', 'Appetizers', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'halloumi fries'),
  c('halloumi-burgers', 'Halloumi Burgers', 'British', 'Lunch', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'halloumi burgers'),
  c('welsh-cheese-and-leek-pie', 'Welsh Cheese and Leek Pie', 'British', 'Dinner', 'Medium', 30, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'welsh cheese and leek pie'),
  c('game-pie', 'Game Pie', 'British', 'Dinner', 'Hard', 40, 120, 8, 0, 0, [], ['new'], 'game pie'),
  c('vegetable-pasties', 'Vegetable Pasties', 'British', 'Dinner', 'Medium', 35, 45, 6, 0, 0, ['Vegetarian'], ['new'], 'vegetable pasties'),
  c('egg-and-bacon-tart', 'Egg and Bacon Tart', 'British', 'Lunch', 'Easy', 20, 35, 6, 0, 0, [], ['new'], 'egg and bacon tart'),
  c('irish-potato-cakes', 'Irish Potato Cakes', 'Irish', 'Breakfast', 'Easy', 15, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'irish potato cakes'),
  c('potato-cakes', 'Potato Cakes', 'Australian', 'Appetizers', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'potato cakes'),
  c('spaghetti-toasties', 'Spaghetti Toasties', 'Australian', 'Lunch', 'Easy', 5, 6, 2, 0, 0, ['Vegetarian'], ['new'], 'spaghetti toasties'),
  c('tomato-soup-with-grilled-cheese', 'Tomato Soup with Grilled Cheese', 'American', 'Lunch', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'tomato soup with grilled cheese'),
  c('cheese-and-ham-croissant', 'Cheese and Ham Croissant', 'French', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, [], ['new'], 'cheese and ham croissant'),
  c('almond-croissant', 'Almond Croissant', 'French', 'Baking', 'Medium', 10, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'almond croissant'),
  c('cream-cheese-danish', 'Cream Cheese Danish', 'American', 'Baking', 'Medium', 20, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'cream cheese danish'),
  c('apple-danish', 'Apple Danish', 'American', 'Baking', 'Medium', 25, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'apple danish'),
  c('orange-rolls', 'Orange Rolls', 'American', 'Baking', 'Medium', 30, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'orange rolls'),
  c('fruit-scones', 'Fruit Scones', 'British', 'Baking', 'Easy', 15, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'fruit scones'),
  c('herb-focaccia', 'Herb Focaccia', 'Italian', 'Baking', 'Medium', 20, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'herb focaccia'),
  c('garlic-pull-apart-bread', 'Garlic Pull Apart Bread', 'American', 'Appetizers', 'Easy', 15, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'garlic pull apart bread'),
  c('sausage-pull-apart', 'Sausage Pull Apart', 'American', 'Appetizers', 'Easy', 15, 25, 8, 0, 0, [], ['new'], 'sausage pull apart'),
  c('pizza-pull-apart', 'Pizza Pull Apart', 'American', 'Appetizers', 'Easy', 15, 25, 8, 0, 0, [], ['new'], 'pizza pull apart'),
  c('pretzel-bites', 'Pretzel Bites', 'American', 'Appetizers', 'Medium', 25, 8, 6, 0, 0, ['Vegetarian'], ['new'], 'pretzel bites'),
  c('bacon-cheeseburger-bites', 'Bacon Cheeseburger Bites', 'American', 'Appetizers', 'Easy', 15, 18, 12, 0, 0, [], ['new'], 'bacon cheeseburger bites'),
  c('cocktail-sausages', 'Cocktail Sausages', 'British', 'Appetizers', 'Easy', 5, 20, 8, 0, 0, [], ['new'], 'cocktail sausages'),
  c('teriyaki-wings', 'Teriyaki Wings', 'American', 'Appetizers', 'Easy', 10, 40, 4, 0, 0, ['Dairy-Free'], ['new'], 'teriyaki wings'),
  c('garlic-parmesan-chicken-wings', 'Garlic Parmesan Chicken Wings', 'American', 'Appetizers', 'Easy', 10, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'garlic parmesan chicken wings'),
  c('hot-honey-chicken', 'Hot Honey Chicken', 'American', 'Dinner', 'Medium', 20, 25, 4, 0, 0, [], ['new'], 'hot honey chicken'),
  c('lemon-chicken-bites', 'Lemon Chicken Bites', 'American', 'Appetizers', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'lemon chicken bites'),
  c('apple-muffins', 'Apple Muffins', 'American', 'Baking', 'Easy', 15, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'apple muffins'),
  c('berry-muffins', 'Berry Muffins', 'American', 'Baking', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'berry muffins'),
  c('carrot-muffins', 'Carrot Muffins', 'American', 'Baking', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'carrot muffins'),
  c('raspberry-muffins', 'Raspberry Muffins', 'American', 'Baking', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'raspberry muffins'),
  c('peach-muffins', 'Peach Muffins', 'American', 'Baking', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'peach muffins'),
  c('carrot-cake-cupcakes', 'Carrot Cake Cupcakes', 'American', 'Baking', 'Medium', 20, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'carrot cake cupcakes'),
  c('lemon-cupcakes', 'Lemon Cupcakes', 'American', 'Baking', 'Medium', 20, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'lemon cupcakes'),
  c('cookies-and-cream-cupcakes', 'Cookies and Cream Cupcakes', 'American', 'Baking', 'Medium', 25, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'cookies and cream cupcakes'),
  c('tea-loaf', 'Tea Loaf', 'British', 'Baking', 'Easy', 15, 60, 10, 0, 0, ['Vegetarian'], ['new'], 'tea loaf'),
  c('cherry-cake', 'Cherry Cake', 'British', 'Baking', 'Medium', 20, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'cherry cake'),
  c('passionfruit-cake', 'Passionfruit Cake', 'Australian', 'Baking', 'Medium', 20, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'passionfruit cake'),
  c('raspberry-cake', 'Raspberry Cake', 'British', 'Baking', 'Medium', 20, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'raspberry cake'),
  c('mango-cake', 'Mango Cake', 'Australian', 'Baking', 'Medium', 20, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'mango cake'),
  c('fig-cake', 'Fig Cake', 'Italian', 'Baking', 'Medium', 20, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'fig cake'),
  c('honey-cake', 'Honey Cake', 'American', 'Baking', 'Medium', 20, 50, 10, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'honey cake'),
  c('italian-lemon-cake', 'Italian Lemon Cake', 'Italian', 'Baking', 'Easy', 15, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'italian lemon cake'),
  c('german-apple-cake', 'German Apple Cake', 'German', 'Baking', 'Easy', 20, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'german apple cake'),
  c('gingerbread-cake', 'Gingerbread Cake', 'British', 'Baking', 'Easy', 15, 45, 12, 0, 0, ['Vegetarian'], ['new'], 'gingerbread cake'),
  c('milo-cake', 'Milo Cake', 'Australian', 'Baking', 'Easy', 15, 35, 12, 0, 0, ['Vegetarian'], ['new'], 'milo cake'),
  c('chocolate-peanut-butter-cake', 'Chocolate Peanut Butter Cake', 'American', 'Baking', 'Medium', 25, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'chocolate peanut butter cake'),
  c('chocolate-mint-cake', 'Chocolate Mint Cake', 'American', 'Baking', 'Medium', 25, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'chocolate mint cake'),
  c('mud-cake', 'Mud Cake', 'Australian', 'Baking', 'Medium', 20, 60, 12, 0, 0, ['Vegetarian'], ['new'], 'mud cake'),
  c('ice-cream-cake', 'Ice Cream Cake', 'American', 'Desserts', 'Easy', 20, 0, 10, 0, 0, ['Vegetarian'], ['new'], 'ice cream cake'),
  c('ice-box-cake', 'Ice Box Cake', 'American', 'Desserts', 'Easy', 20, 0, 10, 0, 0, ['Vegetarian'], ['new'], 'ice box cake'),
  c('lemon-cheesecake', 'Lemon Cheesecake', 'American', 'Desserts', 'Medium', 25, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'lemon cheesecake'),
  c('strawberry-cheesecake', 'Strawberry Cheesecake', 'American', 'Desserts', 'Medium', 25, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'strawberry cheesecake'),
  c('chocolate-cheesecake', 'Chocolate Cheesecake', 'American', 'Desserts', 'Medium', 25, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'chocolate cheesecake'),
  c('caramel-cheesecake', 'Caramel Cheesecake', 'American', 'Desserts', 'Medium', 25, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'caramel cheesecake'),
  c('blueberry-cheesecake', 'Blueberry Cheesecake', 'American', 'Desserts', 'Medium', 25, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'blueberry cheesecake'),
  c('blueberry-cobbler', 'Blueberry Cobbler', 'American', 'Desserts', 'Easy', 15, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'blueberry cobbler'),
  c('caramel-apples', 'Caramel Apples', 'American', 'Desserts', 'Easy', 10, 5, 6, 0, 0, ['Vegetarian'], ['new'], 'caramel apples'),
  c('pineapple-lumps-slice', 'Pineapple Lumps Slice', 'New Zealand', 'Desserts', 'Easy', 20, 0, 16, 0, 0, ['Vegetarian'], ['new'], 'pineapple lumps slice'),
  c('apple-slice', 'Apple Slice', 'Australian', 'Baking', 'Easy', 20, 35, 16, 0, 0, ['Vegetarian'], ['new'], 'apple slice'),
  c('caramel-slice-bars', 'Caramel Slice Bars', 'Australian', 'Desserts', 'Medium', 25, 20, 16, 0, 0, ['Vegetarian'], ['new'], 'caramel slice bars'),
  c('chocolate-chip-cookie-bars', 'Chocolate Chip Cookie Bars', 'American', 'Baking', 'Easy', 15, 25, 16, 0, 0, ['Vegetarian'], ['new'], 'chocolate chip cookie bars'),
  c('peanut-butter-chocolate-bars', 'Peanut Butter Chocolate Bars', 'American', 'Desserts', 'Easy', 15, 5, 16, 0, 0, ['Vegetarian'], ['new'], 'peanut butter chocolate bars'),
  c('double-chocolate-cookies', 'Double Chocolate Cookies', 'American', 'Baking', 'Easy', 15, 12, 20, 0, 0, ['Vegetarian'], ['new'], 'double chocolate cookies'),
  c('lemon-cookies', 'Lemon Cookies', 'American', 'Baking', 'Easy', 15, 12, 20, 0, 0, ['Vegetarian'], ['new'], 'lemon cookies'),
  c('pistachio-shortbread', 'Pistachio Shortbread', 'British', 'Baking', 'Easy', 15, 20, 16, 0, 0, ['Vegetarian'], ['new'], 'pistachio shortbread'),
  c('jammy-dodgers', 'Jammy Dodgers', 'British', 'Baking', 'Medium', 30, 12, 16, 0, 0, ['Vegetarian'], ['new'], 'jammy dodgers'),
  c('oat-biscuits', 'Oat Biscuits', 'British', 'Baking', 'Easy', 10, 15, 16, 0, 0, ['Vegetarian'], ['new'], 'oat biscuits'),
  c('meringues', 'Meringues', 'French', 'Desserts', 'Medium', 15, 90, 12, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'meringues'),
  c('soft-boiled-eggs', 'Soft Boiled Eggs', 'British', 'Breakfast', 'Easy', 2, 6, 2, 0, 0, ['Vegetarian'], ['new'], 'soft boiled eggs'),
  c('peanut-butter-smoothie', 'Peanut Butter Smoothie', 'American', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'peanut butter smoothie'),
  c('strawberry-lemonade', 'Strawberry Lemonade', 'American', 'Drinks', 'Easy', 10, 0, 6, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'strawberry lemonade'),
  c('biltong', 'Biltong', 'South African', 'Appetizers', 'Medium', 20, 240, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'biltong'),
  c('bacon-wrapped-dates', 'Bacon Wrapped Dates', 'Spanish', 'Appetizers', 'Easy', 10, 15, 8, 0, 0, ['Dairy-Free'], ['new'], 'bacon wrapped dates'),
  c('potatoes-au-gratin', 'Potatoes Au Gratin', 'French', 'Dinner', 'Medium', 20, 60, 6, 0, 0, ['Vegetarian'], ['new'], 'potatoes au gratin'),
  c('duchess-potatoes', 'Duchess Potatoes', 'French', 'Dinner', 'Medium', 25, 35, 6, 0, 0, ['Vegetarian'], ['new'], 'duchess potatoes'),
  c('crispy-smashed-potatoes', 'Crispy Smashed Potatoes', 'American', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'crispy smashed potatoes'),
  c('mashed-cauliflower', 'Mashed Cauliflower', 'American', 'Healthy', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'mashed cauliflower'),
  c('ratatouille-bake', 'Ratatouille Bake', 'French', 'Dinner', 'Easy', 20, 50, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free', 'Gluten-Free'], ['new'], 'ratatouille bake'),
  c('tuscan-bean-soup', 'Tuscan Bean Soup', 'Italian', 'Lunch', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian', 'Vegan', 'Dairy-Free'], ['new'], 'tuscan bean soup'),
  c('ham-and-cheese-quiche', 'Ham and Cheese Quiche', 'British', 'Dinner', 'Medium', 25, 40, 6, 0, 0, [], ['new'], 'ham and cheese quiche')
];
