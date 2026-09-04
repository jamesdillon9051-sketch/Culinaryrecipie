/**
 * Weekly Delight — recipe catalog, volume eight.
 *
 * Twenty-two baking recipes, filling the gaps in a fifty-recipe baking brief
 * the site already answered twenty-eight times over: it had brown butter
 * chocolate chip cookies, fudgy brownies, shortbread, macarons, a Victoria
 * sponge, a New York cheesecake and a sourdough loaf, but no plain sugar
 * cookie, no chocolate cake, and nothing between a blondie and a lemon bar.
 *
 * The overlaps that look like duplicates are not. The site already has a
 * rosemary focaccia and a focaccia genovese; garlic focaccia is a third
 * because the garlic is confited and folded through rather than scattered on
 * top, which is a different dough. Pound cake, marble cake and bundt cake
 * share a family and diverge on ratio, method and tin: 1:1:1:1 creamed by
 * weight, a two-batter swirl, and a sour cream batter baked in a shape that
 * changes how it bakes.
 *
 * Unrated, for the reason given in catalog-4.js: the ratings elsewhere on the
 * site are seeded, and inventing more of them would be a poor answer to having
 * documented that.
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
  /* Cookies and bars */
  c('oatmeal-raisin-cookies', 'Oatmeal Raisin Cookies', 'American', 'Baking', 'Easy', 20, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'Oatmeal raisin cookies'),
  c('sugar-cookies', 'Cut-Out Sugar Cookies', 'American', 'Baking', 'Easy', 30, 22, 30, 0, 0, ['Vegetarian'], ['new'], 'Sugar cookies iced'),
  c('blondies', 'Brown Butter Blondies', 'American', 'Baking', 'Easy', 20, 25, 16, 0, 0, ['Vegetarian'], ['new'], 'Blondies tray bake'),
  c('lemon-bars', 'Lemon Bars', 'American', 'Baking', 'Medium', 25, 45, 16, 0, 0, ['Vegetarian'], ['new'], 'Lemon bars icing sugar'),
  c('magic-cookie-bars', 'Magic Cookie Bars', 'American', 'Baking', 'Easy', 15, 28, 16, 0, 0, ['Vegetarian'], ['new'], 'Seven layer magic cookie bars'),

  /* Cakes and cupcakes */
  c('chocolate-cake', 'Classic Chocolate Layer Cake', 'American', 'Desserts', 'Medium', 35, 32, 12, 0, 0, ['Vegetarian'], ['new'], 'Chocolate layer cake slice'),
  c('vanilla-sponge-cake', 'Vanilla Sponge Cake', 'British', 'Baking', 'Easy', 25, 28, 10, 0, 0, ['Vegetarian'], ['new'], 'Vanilla sponge cake'),
  c('angel-food-cake', 'Angel Food Cake', 'American', 'Desserts', 'Medium', 30, 40, 12, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Angel food cake'),
  c('chocolate-cupcakes', 'Chocolate Cupcakes', 'American', 'Baking', 'Easy', 25, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'Chocolate cupcakes buttercream'),
  c('marble-cake', 'Marble Cake', 'German', 'Baking', 'Easy', 30, 55, 12, 0, 0, ['Vegetarian'], ['new'], 'Marble cake slice marmorkuchen'),
  c('pound-cake', 'Pound Cake', 'British', 'Baking', 'Easy', 25, 65, 10, 0, 0, ['Vegetarian'], ['new'], 'Pound cake loaf'),
  c('bundt-cake', 'Sour Cream Bundt Cake', 'American', 'Baking', 'Easy', 25, 60, 14, 0, 0, ['Vegetarian'], ['new'], 'Bundt cake glaze'),
  c('basque-cheesecake', 'Burnt Basque Cheesecake', 'Spanish', 'Desserts', 'Easy', 20, 50, 10, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Basque burnt cheesecake'),

  /* Quick breads, muffins and breakfast bakes */
  c('chocolate-chip-muffins', 'Chocolate Chip Muffins', 'American', 'Breakfast', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'Chocolate chip muffins'),
  c('zucchini-bread', 'Courgette Bread', 'American', 'Baking', 'Easy', 20, 60, 10, 0, 0, ['Vegetarian'], ['new'], 'Zucchini bread loaf sliced'),
  c('pumpkin-bread', 'Pumpkin Bread', 'American', 'Baking', 'Easy', 20, 75, 10, 0, 0, ['Vegetarian'], ['new'], 'Pumpkin bread loaf'),
  c('coffee-cake', 'Cinnamon Streusel Coffee Cake', 'American', 'Breakfast', 'Easy', 25, 45, 12, 0, 0, ['Vegetarian'], ['new'], 'Coffee cake streusel'),

  /* Pies, tarts and cobblers */
  c('apple-crisp', 'Apple Crisp', 'American', 'Desserts', 'Easy', 25, 50, 8, 0, 0, ['Vegetarian'], ['new'], 'Apple crisp baking dish'),
  c('peach-cobbler', 'Peach Cobbler', 'American', 'Desserts', 'Easy', 25, 50, 8, 0, 0, ['Vegetarian'], ['new'], 'Peach cobbler dish'),
  c('fruit-tart', 'French Fruit Tart', 'French', 'Desserts', 'Hard', 60, 42, 10, 0, 0, ['Vegetarian'], ['new'], 'French fruit tart pastry cream'),

  /* Yeasted breads */
  c('garlic-focaccia', 'Garlic Confit Focaccia', 'Italian', 'Baking', 'Medium', 35, 65, 12, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Garlic focaccia bread'),
  c('challah', 'Challah', 'Israeli', 'Baking', 'Medium', 40, 30, 12, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'Challah braided bread')
];
