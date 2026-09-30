/**
 * Weekly Delight — recipe catalog, volume thirty.
 * One hundred dishes, the fourth fifth of the five hundred added in volumes
 * twenty-seven to thirty-one from the most searched recipes in the United
 * States, the United Kingdom, Canada, Australia and New Zealand: Southern,
 * Cajun and Tex-Mex suppers, steakhouse classics, Maritime Canadian stews, New
 * Zealand sausage and mince dinners, the sauces and dressings people make from
 * scratch, baking from the lunchbox and the church hall, diner pies and
 * Christmas sweets, and a dozen classic cocktails.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, and then read by hand. Names that were the same
 * dish as a page that exists were left out, and so were cut, pan and flavour
 * variants of one: mee goreng is the mie goreng already on the site, a chicken
 * parma is the chicken parmigiana, a corn casserole is a corn pudding, salmon
 * cakes are cod cakes, sweet tea is iced tea, teriyaki salmon is chicken
 * teriyaki with a different fish, a lemon icebox pie is a key lime pie with
 * another fruit, bourbon balls are rum balls with another spirit and crempog
 * are buttermilk pancakes. More than fifty names in the first drafts of this
 * list went that way and were replaced by dishes the site did not have.
 *
 * This file is generated from the verified list rather than typed out from it,
 * and `npm run check` fails if two recipes are the same dish.
 *
 * Spread: American 50, British 13, Canadian 8, French 5, Mexican 3, New
 * Zealand 3, Australian 2, Chinese 2, Indian 2, International 2, Italian 2,
 * Cuban 1, Finnish 1, German 1, Greek 1, Irish 1, Swedish 1, Turkish 1,
 * Ukrainian 1.
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
  c('brunswick-stew', 'Brunswick Stew', 'American', 'Dinner', 'Easy', 25, 105, 6, 0, 0, ['Dairy-Free'], ['new'], 'A deep bowl of thick, tomato-red Brunswick stew with shredded chicken and pork, sweetcorn, butter beans and potato, with a square of cornbread beside it'),
  c('carne-guisada', 'Carne Guisada', 'Mexican', 'Dinner', 'Easy', 20, 110, 6, 0, 0, ['Dairy-Free'], ['new'], 'A skillet of Tex-Mex carne guisada, tender beef in a thick, brown, cumin-scented gravy, with warm flour tortillas and rice alongside'),
  c('dirty-rice', 'Dirty Rice', 'American', 'Dinner', 'Easy', 20, 40, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A pan of Louisiana dirty rice, speckled dark brown with minced pork and chicken liver, green pepper and celery, topped with sliced spring onions and parsley'),
  c('lobster-newburg', 'Lobster Newburg', 'American', 'Dinner', 'Medium', 15, 12, 4, 0, 0, [], ['new'], 'Chunks of pink lobster meat in a glossy, pale gold cream and sherry sauce, spooned over buttered toast points and sprinkled with chives'),
  c('seafood-gumbo', 'Seafood Gumbo', 'American', 'Dinner', 'Hard', 30, 100, 8, 0, 0, ['Dairy-Free'], ['new'], 'A bowl of dark, glossy seafood gumbo with prawns, crab and okra, ladled over white rice and sprinkled with spring onions and parsley'),
  c('santa-maria-tri-tip', 'Santa Maria Tri-Tip', 'American', 'Dinner', 'Medium', 15, 40, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A sliced Santa Maria tri-tip roast with a dark, peppery crust and a pink centre, on a board with fresh salsa'),
  c('steak-oscar', 'Steak Oscar', 'American', 'Dinner', 'Medium', 15, 20, 2, 0, 0, [], ['new'], 'A seared fillet steak topped with crossed asparagus spears, lumps of white crab meat and glossy hollandaise sauce, on a warm plate'),
  c('chicken-fricassee', 'Chicken Fricassee', 'French', 'Dinner', 'Medium', 20, 65, 4, 0, 0, [], ['new'], 'A shallow pot of pale chicken fricassee with pearl onions and mushrooms in a creamy white sauce, sprinkled with chopped parsley'),
  c('chicken-marbella', 'Chicken Marbella', 'American', 'Dinner', 'Easy', 15, 50, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A platter of golden chicken thighs and drumsticks with prunes, green olives and capers in a glossy brown sauce, scattered with parsley'),
  c('southern-green-beans', 'Southern Green Beans', 'American', 'Dinner', 'Easy', 15, 60, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A bowl of soft, slow-cooked Southern green beans with smoky bacon and onion, glistening in their savoury cooking liquid'),
  c('squash-casserole', 'Squash Casserole', 'American', 'Dinner', 'Easy', 20, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'A golden squash casserole in a baking dish, topped with a crisp layer of buttery cracker crumbs and melted cheddar, with a spoon lifting out a portion'),
  c('hasselback-potatoes', 'Hasselback Potatoes', 'Swedish', 'Dinner', 'Easy', 15, 65, 4, 0, 0, ['Vegetarian'], ['new'], 'Four hasselback potatoes fanned open, golden and crisp at the edges, with a dusting of breadcrumbs and thyme'),
  c('turkey-curry', 'Turkey Curry', 'British', 'Dinner', 'Easy', 15, 35, 4, 0, 0, ['Dairy-Free'], ['new'], 'A bowl of golden turkey curry with diced turkey in a thick tomato and onion sauce, on white rice with coriander leaves'),
  c('lobster-thermidor', 'Lobster Thermidor', 'French', 'Dinner', 'Medium', 30, 20, 2, 0, 0, [], ['new'], 'Two lobster halves filled with lobster meat in a creamy mustard and tarragon sauce, glazed golden under the grill, on a plate with lemon'),
  c('salmon-en-croute', 'Salmon en Croûte', 'British', 'Dinner', 'Medium', 35, 40, 6, 0, 0, [], ['new'], 'A golden salmon en croûte on a board, sliced to show pink salmon, green spinach and herby cream cheese under crisp puff pastry'),
  c('hakka-chilli-chicken', 'Hakka Chilli Chicken', 'Indian', 'Dinner', 'Medium', 25, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'A wok of glossy Hakka chilli chicken, crisp battered chicken tossed with green pepper, onion, green chillies and spring onion in a dark soy sauce'),
  c('chicken-fricot', 'Chicken Fricot', 'Canadian', 'Dinner', 'Easy', 20, 65, 6, 0, 0, ['Dairy-Free'], ['new'], 'A bowl of Acadian chicken fricot with shreds of chicken, chunks of potato and carrot and a savoury broth, with a sprig of summer savory'),
  c('hodge-podge', 'Hodge Podge', 'Canadian', 'Dinner', 'Easy', 20, 30, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A bowl of Nova Scotia hodge podge with baby potatoes, carrots, green and yellow beans and peas in a creamy buttery broth, with parsley'),
  c('stifado', 'Stifado', 'Greek', 'Dinner', 'Medium', 25, 150, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A shallow pot of Greek stifado, tender chunks of beef and whole small onions in a glossy dark red sauce with a cinnamon stick and bay leaves'),
  c('devilled-sausages', 'Devilled Sausages', 'New Zealand', 'Dinner', 'Easy', 10, 35, 4, 0, 0, ['Dairy-Free'], ['new'], 'A pan of plump devilled sausages in a glossy brown-red sauce with softened onion, served beside mashed potato and green peas'),
  c('savoury-mince', 'Savoury Mince', 'New Zealand', 'Dinner', 'Easy', 15, 45, 4, 0, 0, ['Dairy-Free'], ['new'], 'A plate of rich brown savoury mince with peas and carrot, piled on thick slices of buttered toast and sprinkled with parsley'),
  c('beijing-beef', 'Beijing Beef', 'Chinese', 'Dinner', 'Medium', 25, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'A plate of crispy Beijing beef strips glossed with sweet and tangy red sauce, tossed with red and green pepper, onion and toasted sesame seeds'),
  c('surf-and-turf', 'Surf and Turf', 'American', 'Dinner', 'Medium', 20, 25, 2, 0, 0, ['Gluten-Free'], ['new'], 'A plate with a seared ribeye steak and a grilled lobster tail glossy with garlic butter, with lemon wedges and parsley'),
  c('baked-feta-pasta', 'Baked Feta Pasta', 'Finnish', 'Dinner', 'Easy', 10, 40, 4, 0, 0, ['Vegetarian'], ['new'], 'A bowl of pasta tossed with a creamy blistered tomato and feta sauce, topped with fresh basil and black pepper'),
  c('chicken-tacos', 'Chicken Tacos', 'Mexican', 'Quick Meals', 'Easy', 15, 15, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Three chicken tacos in warm corn tortillas, filled with chopped seasoned chicken, onion, coriander and avocado, with lime wedges'),
  c('creamy-tuscan-salmon', 'Creamy Tuscan Salmon', 'American', 'Dinner', 'Easy', 10, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'A pan-seared salmon fillet in a creamy garlic sauce with sun-dried tomatoes and wilted spinach, with a few basil leaves'),
  c('italian-beef-sandwich', 'Italian Beef Sandwich', 'American', 'Lunch', 'Easy', 20, 195, 8, 0, 0, [], ['new'], 'A Chicago Italian beef sandwich on a crusty roll, piled with thin slices of juicy roast beef, dripping with jus and topped with hot giardiniera'),
  c('beef-on-weck', 'Beef on Weck', 'American', 'Lunch', 'Medium', 20, 130, 8, 0, 0, [], ['new'], 'A beef on weck sandwich, thin slices of rare roast beef piled on a salt and caraway-crusted roll, with a pot of horseradish and jus beside it'),
  c('ham-salad', 'Ham Salad', 'American', 'Lunch', 'Easy', 15, 0, 6, 0, 0, ['Dairy-Free'], ['new'], 'A bowl of pink, finely chopped ham salad with celery and pickle relish, with a sandwich of it on white bread beside'),
  c('tomato-sandwich', 'Tomato Sandwich', 'American', 'Quick Meals', 'Easy', 10, 0, 2, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'A tomato sandwich cut in half on a plate, with thick slices of red tomato, mayonnaise and black pepper between soft white bread'),
  c('stuffed-pepper-soup', 'Stuffed Pepper Soup', 'American', 'Lunch', 'Easy', 15, 45, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A bowl of stuffed pepper soup with beef mince, rice, chunks of red and green pepper and tomato in a rich broth, sprinkled with parsley'),
  c('portobello-burger', 'Portobello Burger', 'American', 'Lunch', 'Easy', 15, 12, 4, 0, 0, ['Vegetarian'], ['new'], 'A portobello mushroom burger on a toasted brioche bun with melted Swiss cheese, roasted red pepper and rocket, on a board'),
  c('stuffed-acorn-squash', 'Stuffed Acorn Squash', 'American', 'Healthy', 'Easy', 20, 65, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'Two halves of roasted acorn squash filled with quinoa, cranberries, pecans, apple and sage, on a tray with fresh herbs'),
  c('cauliflower-pizza-crust', 'Cauliflower Pizza Crust', 'American', 'Healthy', 'Medium', 25, 40, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A round golden cauliflower-crust pizza with melted mozzarella, tomato sauce and fresh basil, one slice lifted to show the firm base'),
  c('cocktail-sauce', 'Cocktail Sauce', 'American', 'Quick Meals', 'Easy', 5, 0, 8, 0, 0, ['Dairy-Free'], ['new'], 'A small bowl of red cocktail sauce with a pale fleck of horseradish, beside a glass of chilled prawns and lemon wedges'),
  c('tartar-sauce', 'Tartar Sauce', 'American', 'Quick Meals', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A small white bowl of creamy tartar sauce flecked with chopped gherkin, capers and green herbs, beside golden fried fish and a lemon wedge'),
  c('balsamic-vinaigrette', 'Balsamic Vinaigrette', 'American', 'Quick Meals', 'Easy', 5, 0, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A glass jar of glossy dark balsamic vinaigrette beside a green salad with tomato and red onion, with a spoon of dressing lifted over it'),
  c('honey-mustard-dressing', 'Honey Mustard Dressing', 'American', 'Quick Meals', 'Easy', 5, 0, 6, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A jar of creamy honey mustard dressing with a spoon, beside chicken tenders and a green salad with cucumber and tomato'),
  c('battered-sausage', 'Battered Sausage', 'British', 'Lunch', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'Four golden battered sausages, crisp and blistered, on paper with a pile of chips, a spoon of mushy peas and a wedge of lemon'),
  c('gozleme', 'Gözleme', 'Turkish', 'Lunch', 'Medium', 30, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'A folded golden gözleme cut into pieces on a board, showing a filling of spinach and white feta, with a lemon wedge'),
  c('prawn-and-avocado-salad', 'Prawn and Avocado Salad', 'Australian', 'Lunch', 'Easy', 15, 0, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A bowl of prawn and avocado salad with pink prawns, creamy avocado, cucumber, tomato and cos lettuce, dressed with lime and olive oil'),
  c('piadina', 'Piadina', 'Italian', 'Lunch', 'Medium', 20, 15, 4, 0, 0, [], ['new'], 'A folded piadina filled with prosciutto, soft white cheese and rocket, with a second flatbread beside it showing blistered brown spots'),
  c('cauliflower-soup', 'Cauliflower Soup', 'British', 'Lunch', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A bowl of smooth, pale cream cauliflower soup with a swirl of olive oil, chopped chives and a few crisp roasted florets on top'),
  c('all-butter-pie-crust', 'All-Butter Pie Crust', 'American', 'Baking', 'Medium', 20, 30, 8, 0, 0, ['Vegetarian'], ['new'], 'A golden blind-baked all-butter pie crust in a fluted tin, with a crimped edge and a flaky, layered texture'),
  c('flour-tortillas', 'Flour Tortillas', 'Mexican', 'Baking', 'Easy', 20, 15, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'A stack of soft flour tortillas with brown blisters, one folded over, beside a bowl of salsa on a cloth'),
  c('no-bake-cookies', 'No-Bake Cookies', 'American', 'Baking', 'Easy', 10, 5, 24, 0, 0, ['Vegetarian'], ['new'], 'A tray of chocolate peanut butter no-bake cookies with oat flecks, set on baking parchment in shiny, uneven mounds'),
  c('strawberry-cake', 'Strawberry Cake', 'American', 'Baking', 'Medium', 35, 40, 12, 0, 0, ['Vegetarian'], ['new'], 'A two-layer pink strawberry cake with strawberry buttercream swirls and fresh halved strawberries on top, with one slice cut out'),
  c('cookie-cake', 'Cookie Cake', 'American', 'Baking', 'Easy', 15, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'A giant round chocolate chip cookie cake in a tin, golden and soft, with piped white buttercream border and a message in the middle'),
  c('oatmeal-cream-pies', 'Oatmeal Cream Pies', 'American', 'Baking', 'Medium', 30, 12, 12, 0, 0, ['Vegetarian'], ['new'], 'A stack of soft oatmeal cream pies, two round spiced oatmeal cookies sandwiching a thick white marshmallow filling'),
  c('rugelach', 'Rugelach', 'International', 'Baking', 'Medium', 40, 25, 24, 0, 0, ['Vegetarian'], ['new'], 'A tray of golden rugelach crescents with a shiny egg-washed top and a dusting of cinnamon sugar, with a filling of jam and walnuts peeking out'),
  c('boston-brown-bread', 'Boston Brown Bread', 'American', 'Baking', 'Medium', 15, 150, 10, 0, 0, ['Vegetarian'], ['new'], 'A steamed loaf of dark Boston brown bread, sliced to show a dense moist crumb dotted with raisins, with a smear of cream cheese'),
  c('homemade-granola-bars', 'Homemade Granola Bars', 'American', 'Baking', 'Easy', 15, 25, 12, 0, 0, ['Vegetarian', 'Dairy-Free'], ['new'], 'A stack of chewy homemade granola bars cut in squares, studded with oats, almonds, seeds and dried cranberries, on a wire rack'),
  c('dream-bars', 'Dream Bars', 'Canadian', 'Baking', 'Medium', 20, 35, 16, 0, 0, ['Vegetarian'], ['new'], 'A tray of dream bars cut in squares, with a golden shortbread base and a chewy brown sugar, coconut and walnut topping'),
  c('pampushky', 'Pampushky (Ukrainian Garlic Buns)', 'Ukrainian', 'Baking', 'Medium', 30, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'A basket of golden Ukrainian pampushky buns, glossy from a garlic and dill oil, beside a bowl of red borscht'),
  c('zwieback', 'Zwieback (Mennonite Buns)', 'Canadian', 'Baking', 'Medium', 40, 18, 16, 0, 0, ['Vegetarian'], ['new'], 'A batch of round Mennonite zwieback buns, each a small ball of dough sitting on a larger one, golden brown on a tray'),
  c('tofu-scramble', 'Tofu Scramble', 'American', 'Breakfast', 'Easy', 10, 12, 3, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'A pan of golden tofu scramble with crumbled tofu, red pepper, spinach and chives, with slices of toast and avocado beside it'),
  c('egg-in-a-hole', 'Egg in a Hole', 'American', 'Breakfast', 'Easy', 5, 8, 2, 0, 0, ['Vegetarian'], ['new'], 'Two slices of golden buttery fried bread each with a hole in the centre and a runny-yolked fried egg set in it, on a plate with the round cut-outs beside'),
  c('hokey-pokey-biscuits', 'Hokey Pokey Biscuits', 'New Zealand', 'Baking', 'Easy', 20, 15, 24, 0, 0, ['Vegetarian'], ['new'], 'A wire rack of golden hokey pokey biscuits with fork marks on top, crisp and honeycomb-coloured, with a few crumbs scattered around'),
  c('lemon-poppy-seed-muffins', 'Lemon Poppy Seed Muffins', 'American', 'Baking', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'A tray of domed lemon poppy seed muffins with a thin white lemon glaze, one broken open to show the pale, tender crumb speckled with poppy seeds'),
  c('devils-food-cake', 'Devil\'s Food Cake', 'American', 'Baking', 'Medium', 35, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'A dark, moist two-layer devil\'s food cake covered in swirls of glossy chocolate fudge frosting, with a slice cut to show the deep brown crumb'),
  c('brandy-snaps', 'Brandy Snaps', 'British', 'Baking', 'Hard', 20, 25, 20, 0, 0, ['Vegetarian'], ['new'], 'A group of golden lacy brandy snap tubes on a wire rack, a couple filled with whipped cream at the ends, with the wooden spoon used to roll them'),
  c('nettle-soup', 'Nettle Soup', 'British', 'Lunch', 'Easy', 15, 25, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A bowl of bright green nettle soup with a swirl of cream and a scatter of chives, with a wooden spoon and a slice of bread beside'),
  c('stottie-cake', 'Stottie Cake', 'British', 'Baking', 'Medium', 25, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'A large flat round stottie cake, golden brown with a dusting of flour, split open and filled with ham and pease pudding, on a board'),
  c('hermits', 'Hermits', 'Canadian', 'Baking', 'Easy', 20, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'A plate of chewy Maritime hermit cookies with a cracked, brown surface, studded with raisins and walnuts, beside a mug of tea'),
  c('portzelky', 'Portzelky (New Year\'s Cookies)', 'Canadian', 'Baking', 'Medium', 30, 20, 24, 0, 0, ['Vegetarian'], ['new'], 'A plate of golden portzelky, round fried dough balls rolled in cinnamon sugar and studded with raisins, some torn open to show the soft crumb'),
  c('apple-dumplings', 'Apple Dumplings', 'American', 'Desserts', 'Medium', 30, 45, 6, 0, 0, ['Vegetarian'], ['new'], 'A baking dish of golden apple dumplings, each a whole apple wrapped in pastry and sitting in a glossy cinnamon caramel sauce'),
  c('cake-pops', 'Cake Pops', 'American', 'Desserts', 'Medium', 40, 25, 24, 0, 0, ['Vegetarian'], ['new'], 'A stand of cake pops on sticks, each a smooth ball of cake dipped in shiny pink and white chocolate and finished with rainbow sprinkles'),
  c('coconut-cream-pie', 'Coconut Cream Pie', 'American', 'Desserts', 'Medium', 30, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'A slice of coconut cream pie on a plate, with a biscuit crumb crust, a thick coconut custard filling, whipped cream and toasted coconut flakes'),
  c('lebkuchen', 'Lebkuchen', 'German', 'Holiday Specials', 'Medium', 30, 15, 24, 0, 0, ['Vegetarian'], ['new'], 'A plate of round glazed lebkuchen, dark brown spiced honey cookies with a white sugar glaze and a bowl of nuts beside'),
  c('salted-caramel-sauce', 'Salted Caramel Sauce', 'American', 'Desserts', 'Easy', 5, 12, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A jar of glossy amber salted caramel sauce with a spoon dripping ribbons, beside a scoop of vanilla ice cream and a few flakes of sea salt'),
  c('sour-cream-raisin-pie', 'Sour Cream Raisin Pie', 'Canadian', 'Desserts', 'Medium', 30, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'A slice of sour cream raisin pie with a tall golden meringue top and a creamy, raisin-studded custard filling in a pastry crust'),
  c('rum-balls', 'Rum Balls', 'Australian', 'Desserts', 'Easy', 30, 0, 30, 0, 0, ['Vegetarian'], ['new'], 'A plate of round chocolate rum balls rolled in desiccated coconut and chocolate sprinkles, arranged on a Christmas plate'),
  c('chocolate-ganache', 'Chocolate Ganache', 'French', 'Desserts', 'Easy', 10, 5, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A glossy pool of dark chocolate ganache being poured over a chocolate cake, with the smooth, shiny sauce running slowly down the sides'),
  c('baked-alaska', 'Baked Alaska', 'American', 'Desserts', 'Medium', 40, 5, 8, 0, 0, ['Vegetarian'], ['new'], 'A whole baked Alaska on a plate, a tall dome of toasted golden meringue peaks over a sponge base, with one slice cut to show the ice cream inside'),
  c('watergate-salad', 'Watergate Salad', 'American', 'Desserts', 'Easy', 10, 0, 8, 0, 0, [], ['new'], 'A glass bowl of pale green Watergate salad, a fluffy mix of pistachio pudding, pineapple, marshmallows and pecans with whipped cream'),
  c('mississippi-mud-pie', 'Mississippi Mud Pie', 'American', 'Desserts', 'Medium', 30, 40, 10, 0, 0, ['Vegetarian'], ['new'], 'A slice of Mississippi mud pie showing a dark chocolate cookie crust, a fudgy chocolate pecan filling and a swirl of whipped cream with chocolate shavings'),
  c('english-toffee', 'English Toffee', 'British', 'Holiday Specials', 'Medium', 10, 25, 24, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Shards of golden English toffee coated in dark chocolate and chopped toasted almonds, stacked on a plate and broken in pieces'),
  c('divinity', 'Divinity', 'American', 'Holiday Specials', 'Hard', 20, 15, 30, 0, 0, ['Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A plate of white, cloud-like divinity candies swirled into peaks, each topped with a pecan half, on a piece of baking parchment'),
  c('clotted-cream', 'Clotted Cream', 'British', 'Desserts', 'Easy', 5, 720, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A bowl of thick, pale golden clotted cream with a crust on top, beside a split scone with strawberry jam'),
  c('hot-chocolate-bombs', 'Hot Chocolate Bombs', 'American', 'Holiday Specials', 'Medium', 40, 5, 6, 0, 0, [], ['new'], 'A hollow chocolate sphere in a mug with hot milk being poured over it, melting to reveal cocoa powder and mini marshmallows'),
  c('candied-bacon', 'Candied Bacon', 'American', 'Appetizers', 'Easy', 10, 30, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A tray of glossy, deep mahogany candied bacon strips with cracked black pepper, cooling on a wire rack'),
  c('clams-casino', 'Clams Casino', 'American', 'Appetizers', 'Medium', 30, 20, 6, 0, 0, [], ['new'], 'Littleneck clams on the half shell on a bed of coarse salt, each topped with a golden crumb of bacon, red pepper, garlic and parsley'),
  c('fried-green-tomatoes', 'Fried Green Tomatoes', 'American', 'Appetizers', 'Easy', 20, 12, 4, 0, 0, ['Vegetarian'], ['new'], 'A plate of golden crisp fried green tomato slices with a cornmeal crust, served with a bowl of creamy dipping sauce and a lemon wedge'),
  c('chicken-liver-pate', 'Chicken Liver Pâté', 'British', 'Appetizers', 'Medium', 20, 12, 8, 0, 0, ['Gluten-Free'], ['new'], 'A ramekin of smooth pale chicken liver pâté sealed with a layer of butter and a thyme sprig, with toasted brioche and chutney beside it'),
  c('mango-chutney', 'Mango Chutney', 'Indian', 'Appetizers', 'Easy', 20, 45, 20, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A jar of glossy golden mango chutney with chunks of mango, raisins and mustard seeds, beside poppadoms on a plate'),
  c('bang-bang-shrimp', 'Bang Bang Shrimp', 'American', 'Appetizers', 'Easy', 15, 10, 4, 0, 0, ['Dairy-Free'], ['new'], 'A bowl of crispy fried shrimp tossed in creamy orange-red bang bang sauce, scattered with sliced spring onions and sesame seeds'),
  c('prawn-toast', 'Prawn Toast', 'Chinese', 'Appetizers', 'Medium', 20, 15, 6, 0, 0, ['Dairy-Free'], ['new'], 'Golden triangles of sesame prawn toast on a plate, crisp and glistening, with a small dish of sweet chilli dipping sauce'),
  c('salmon-candy', 'Salmon Candy', 'Canadian', 'Appetizers', 'Medium', 15, 120, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Strips of glossy, deep amber salmon candy with a sticky maple glaze on a wire rack, cut into finger-length pieces'),
  c('pumpkin-spice-latte', 'Pumpkin Spice Latte', 'American', 'Drinks', 'Easy', 5, 8, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A mug of pumpkin spice latte topped with whipped cream and a dusting of cinnamon, beside a small pumpkin and a cinnamon stick'),
  c('sidecar', 'Sidecar', 'French', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A Sidecar cocktail in a chilled coupe glass with a sugared rim and a twist of orange peel, pale golden and shining'),
  c('gimlet', 'Gimlet', 'British', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A Gimlet cocktail in a chilled coupe glass, pale and slightly cloudy, with a thin lime wheel floating on top'),
  c('cuba-libre', 'Cuba Libre', 'Cuban', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A tall Cuba Libre in a highball glass with ice, dark cola, a lime wedge and a straw'),
  c('dark-and-stormy', 'Dark and Stormy', 'International', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A Dark and Stormy in a tall glass, with ginger beer below and a dark rum floating on top in a cloudy layer, with a lime wedge'),
  c('kir-royale', 'Kir Royale', 'French', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A tall champagne flute of Kir Royale, sparkling wine tinted deep ruby at the base by blackcurrant liqueur, with bubbles rising'),
  c('grasshopper', 'Grasshopper', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A pale green Grasshopper cocktail in a chilled coupe glass, creamy and smooth, with a sprinkle of dark chocolate shavings on top'),
  c('brandy-alexander', 'Brandy Alexander', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A creamy, pale brown Brandy Alexander in a chilled coupe glass with a dusting of freshly grated nutmeg on top'),
  c('bramble', 'Bramble', 'British', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A Bramble cocktail in a rocks glass of crushed ice, gin and lemon with a dark blackberry liqueur drizzled through, garnished with blackberries and lemon'),
  c('hugo-spritz', 'Hugo Spritz', 'Italian', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A large wine glass of Hugo Spritz with ice, pale gold prosecco, fresh mint leaves and a lime wedge, with bubbles rising'),
  c('pornstar-martini', 'Pornstar Martini', 'British', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A Pornstar Martini in a coupe glass topped with a floating half passion fruit, beside a small glass of chilled prosecco'),
  c('irish-cream', 'Irish Cream', 'Irish', 'Drinks', 'Easy', 10, 0, 14, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A glass bottle of creamy pale brown homemade Irish cream liqueur with a small glass of it poured over ice and a dusting of cocoa')
];
