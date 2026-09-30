/**
 * Weekly Delight — recipe catalog, volume twenty-eight.
 * One hundred dishes, the second fifth of the five hundred added in volumes
 * twenty-seven to thirty-one from the most searched recipes in the United
 * States, the United Kingdom, Canada, Australia and New Zealand: American
 * dinners and party food, the Chinese takeaway and the British curry house,
 * Canadian shellfish and prairie casseroles, Australian and New Zealand bakes,
 * and the cocktails and hot drinks people look up by name.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, and then read by hand. Names that were the same
 * dish as a page that exists were left out, and so were cut, pan and protein
 * variants of one: kiwi burger is the Aussie burger, bacon-wrapped little
 * smokies are pigs in blankets, prawn tempura is the tempura page, a lasagna
 * roll-up is a manicotti, pizza sauce is marinara, chicken lettuce wraps are
 * san choy bow and tea buns are scones. Nineteen names in the first draft of
 * this list went that way and were replaced by dishes the site did not have.
 *
 * This file is generated from the verified list rather than typed out from it,
 * and `npm run check` fails if two recipes are the same dish.
 *
 * Spread: American 50, British 14, Canadian 7, Chinese 7, Australian 5,
 * Italian 5, French 2, Indian 2, International 2, German 1, Greek 1, New
 * Zealand 1, Scottish 1, Ukrainian 1, Welsh 1.
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
  c('beef-and-noodles', 'Beef and Noodles', 'American', 'Dinner', 'Medium', 20, 150, 6, 0, 0, [], ['new'], 'A deep bowl of beef and wide egg noodles in thick brown gravy, spooned over mashed potatoes with chopped parsley'),
  c('blackened-salmon', 'Blackened Salmon', 'American', 'Dinner', 'Easy', 10, 8, 4, 0, 0, ['Gluten-Free'], ['new'], 'Four blackened salmon fillets with a dark spice crust and a bright pink centre, on a plate with lemon wedges and parsley'),
  c('butternut-squash-risotto', 'Butternut Squash Risotto', 'Italian', 'Dinner', 'Medium', 25, 55, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A shallow bowl of orange butternut squash risotto with cubes of roasted squash, shaved Parmesan and sage leaves'),
  c('chicken-bacon-ranch-pasta', 'Chicken Bacon Ranch Pasta', 'American', 'Dinner', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'A skillet of penne in a creamy ranch sauce with browned chicken pieces, crisp bacon, cherry tomatoes and spring onions'),
  c('crack-chicken', 'Crack Chicken', 'American', 'Dinner', 'Easy', 10, 200, 6, 0, 0, [], ['new'], 'A slow cooker of shredded chicken in a creamy sauce with melted cheddar, crisp bacon and sliced spring onions'),
  c('fried-catfish', 'Fried Catfish', 'American', 'Dinner', 'Medium', 20, 20, 4, 0, 0, [], ['new'], 'Golden cornmeal-crusted catfish fillets on a wire rack with lemon wedges, a small bowl of tartar sauce and a pile of hush puppies'),
  c('green-chile-stew', 'Green Chile Stew', 'American', 'Dinner', 'Medium', 25, 90, 6, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'A bowl of New Mexico green chile stew with pork, potatoes and roasted green chiles in a light broth, with coriander and a warm tortilla'),
  c('new-england-clambake', 'New England Clambake', 'American', 'Dinner', 'Medium', 30, 40, 4, 0, 0, [], ['new'], 'A large platter of a New England clambake with red lobsters, open clams and mussels, corn on the cob, potatoes and sausage'),
  c('american-goulash', 'American Goulash', 'American', 'Dinner', 'Easy', 15, 35, 6, 0, 0, ['Dairy-Free'], ['new'], 'A large pot of American goulash with elbow macaroni, ground beef and tomatoes in a red sauce, topped with chopped parsley'),
  c('shrimp-etouffee', 'Shrimp Étouffée', 'American', 'Dinner', 'Medium', 25, 50, 4, 0, 0, [], ['new'], 'A bowl of shrimp étouffée, pink shrimp in a thick russet-brown sauce over white rice, with sliced spring onions and parsley'),
  c('steak-diane', 'Steak Diane', 'American', 'Dinner', 'Medium', 10, 15, 4, 0, 0, [], ['new'], 'A sliced fillet steak with a glossy brown mushroom and mustard sauce, chives scattered over, on a warm white plate'),
  c('swiss-steak', 'Swiss Steak', 'American', 'Dinner', 'Easy', 20, 115, 6, 0, 0, ['Dairy-Free'], ['new'], 'Braised beef steaks in a rich tomato gravy with onions and peppers, served over mashed potatoes on a white plate'),
  c('baked-chicken-drumsticks', 'Baked Chicken Drumsticks', 'American', 'Dinner', 'Easy', 10, 45, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'A tray of golden baked chicken drumsticks with crisp seasoned skin on a wire rack, with lemon wedges'),
  c('beef-in-black-bean-sauce', 'Beef in Black Bean Sauce', 'Chinese', 'Dinner', 'Easy', 20, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'Sliced beef stir-fried with green pepper, onion and fermented black beans in a glossy dark sauce, on a bed of rice'),
  c('chicken-dopiaza', 'Chicken Dopiaza', 'British', 'Dinner', 'Medium', 25, 45, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A dish of chicken dopiaza, chicken in a golden tomato and onion sauce with chunks of onion and red pepper, with fresh coriander'),
  c('chicken-with-cashew-nuts', 'Chicken with Cashew Nuts', 'Chinese', 'Dinner', 'Easy', 20, 15, 4, 0, 0, ['Dairy-Free'], ['new'], 'A plate of stir-fried chicken with golden cashew nuts, peppers and water chestnuts in a glossy brown sauce, on rice'),
  c('crispy-aromatic-duck', 'Crispy Aromatic Duck', 'Chinese', 'Dinner', 'Medium', 25, 150, 4, 0, 0, ['Dairy-Free'], ['new'], 'Shredded crispy aromatic duck on a plate with warm Chinese pancakes, hoisin sauce, cucumber matchsticks and spring onion strips'),
  c('lamb-kofta-curry', 'Lamb Kofta Curry', 'Indian', 'Dinner', 'Medium', 30, 45, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A pan of lamb meatball curry with tender koftas in a red-gold tomato and onion sauce, garnished with coriander, beside basmati rice'),
  c('chicken-cacciatore', 'Chicken Cacciatore', 'Italian', 'Dinner', 'Easy', 20, 70, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'A wide pan of chicken cacciatore, bone-in thighs braised in a chunky tomato sauce with peppers, mushrooms and black olives'),
  c('scouse', 'Scouse', 'British', 'Dinner', 'Easy', 25, 150, 6, 0, 0, ['Dairy-Free'], ['new'], 'A bowl of Liverpool scouse, a thick beef and potato stew with carrots, beside a pot of pickled red cabbage and a slice of crusty bread'),
  c('boiled-lobster', 'Boiled Lobster', 'Canadian', 'Dinner', 'Easy', 10, 25, 2, 0, 0, ['Gluten-Free'], ['new'], 'Two bright red boiled lobsters on a tray with a bowl of melted butter, lemon wedges and a nutcracker, in a Maritime kitchen'),
  c('dungeness-crab', 'Dungeness Crab', 'Canadian', 'Dinner', 'Easy', 15, 20, 2, 0, 0, ['Gluten-Free'], ['new'], 'A cooked Dungeness crab cracked open on a tray with a bowl of lemon garlic butter, lemon wedges and a pair of crackers'),
  c('wild-rice-casserole', 'Wild Rice Casserole', 'Canadian', 'Dinner', 'Easy', 20, 90, 6, 0, 0, [], ['new'], 'A baking dish of wild rice casserole with chicken, mushrooms and melted cheddar under a golden breadcrumb topping'),
  c('honey-prawns', 'Honey Prawns', 'Chinese', 'Dinner', 'Medium', 20, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'Golden battered king prawns glazed in a shiny honey sauce and scattered with sesame seeds and spring onion, beside steamed rice'),
  c('seafood-risotto', 'Seafood Risotto', 'Italian', 'Dinner', 'Medium', 25, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'A shallow bowl of creamy seafood risotto with pink prawns, squid rings and mussels in their shells, with lemon and parsley'),
  c('apricot-chicken', 'Apricot Chicken', 'New Zealand', 'Dinner', 'Easy', 10, 55, 4, 0, 0, ['Dairy-Free'], ['new'], 'A baking dish of glossy apricot chicken thighs with halved apricots in a sticky orange sauce, with rice and peas beside it'),
  c('banana-ice-cream', 'Banana Ice Cream', 'American', 'Healthy', 'Easy', 10, 0, 2, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A bowl of pale, creamy banana ice cream in two scoops with a swirl top, a spoon and a few banana slices beside it'),
  c('beer-cheese-soup', 'Beer Cheese Soup', 'American', 'Lunch', 'Medium', 15, 30, 4, 0, 0, [], ['new'], 'A bowl of thick, golden beer cheese soup topped with chives and croutons, with a glass of pale ale beside it'),
  c('chicken-gnocchi-soup', 'Chicken Gnocchi Soup', 'American', 'Lunch', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'A bowl of creamy chicken and gnocchi soup with shredded chicken, spinach, carrots and Parmesan'),
  c('garlic-noodles', 'Garlic Noodles', 'Chinese', 'Quick Meals', 'Easy', 10, 15, 3, 0, 0, [], ['new'], 'A bowl of glossy garlic noodles with grated Parmesan, sliced spring onions and sesame seeds, twirled on a fork'),
  c('energy-balls', 'Energy Balls', 'International', 'Healthy', 'Easy', 15, 0, 12, 0, 0, ['Vegetarian'], ['new'], 'A plate of round energy balls rolled in coconut, with oats, dates and chocolate chips visible in the cut ones'),
  c('italian-wedding-soup', 'Italian Wedding Soup', 'Italian', 'Lunch', 'Medium', 30, 40, 6, 0, 0, [], ['new'], 'A bowl of Italian wedding soup with small browned meatballs, tiny pasta, carrots and greens in a clear golden broth, with Parmesan'),
  c('waldorf-salad', 'Waldorf Salad', 'American', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A bowl of Waldorf salad with diced red apples, celery, grapes and walnuts in a creamy dressing on lettuce leaves'),
  c('salmon-burgers', 'Salmon Burgers', 'American', 'Lunch', 'Easy', 20, 10, 4, 0, 0, [], ['new'], 'A salmon burger in a toasted bun with lettuce, tomato, red onion and caper mayonnaise, with a second patty on a plate beside it'),
  c('tortellini-soup', 'Tortellini Soup', 'American', 'Lunch', 'Easy', 10, 30, 4, 0, 0, [], ['new'], 'A bowl of tortellini soup with Italian sausage, cheese tortellini, carrots and spinach in a tomato broth, with basil and Parmesan'),
  c('vegetarian-chili', 'Vegetarian Chili', 'American', 'Healthy', 'Easy', 15, 45, 6, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A large bowl of thick red vegetarian chili with kidney, black and pinto beans, sweetcorn and peppers, topped with avocado and coriander'),
  c('zuppa-toscana', 'Zuppa Toscana', 'American', 'Lunch', 'Easy', 15, 35, 6, 0, 0, [], ['new'], 'A bowl of zuppa Toscana with Italian sausage, sliced potatoes, crisp bacon and dark green kale in a creamy broth'),
  c('currywurst', 'Currywurst', 'German', 'Lunch', 'Easy', 10, 25, 4, 0, 0, ['Dairy-Free'], ['new'], 'A paper tray of sliced currywurst sausage under a thick red curry ketchup sauce dusted with curry powder, with a bread roll'),
  c('steak-bake', 'Steak Bake', 'British', 'Lunch', 'Medium', 30, 80, 4, 0, 0, [], ['new'], 'Four golden puff pastry steak bakes with slashed tops, one broken open to show a filling of tender beef in thick gravy'),
  c('chiko-roll', 'Chiko Roll', 'Australian', 'Lunch', 'Medium', 45, 35, 6, 0, 0, ['Dairy-Free'], ['new'], 'Golden deep-fried Chiko Rolls, thick crisp cylinders, one cut open to show beef, cabbage and barley, with a bottle of tomato sauce'),
  c('monte-cristo', 'Monte Cristo', 'American', 'Lunch', 'Medium', 15, 15, 2, 0, 0, [], ['new'], 'A golden Monte Cristo sandwich cut in half with layers of ham, turkey and melted Swiss cheese, dusted with icing sugar, with a dish of raspberry jam'),
  c('coney-dogs', 'Coney Dogs', 'American', 'Lunch', 'Easy', 15, 55, 4, 0, 0, ['Dairy-Free'], ['new'], 'Two hot dogs in steamed buns topped with a dark meaty coney sauce, yellow mustard and chopped white onion on a paper tray'),
  c('hot-chicken-sandwich', 'Hot Chicken Sandwich', 'Canadian', 'Lunch', 'Easy', 10, 20, 4, 0, 0, [], ['new'], 'A plate of open-faced hot chicken sandwiches, white bread topped with sliced chicken and brown gravy, with green peas and chips'),
  c('chicken-chop-suey', 'Chicken Chop Suey', 'Chinese', 'Quick Meals', 'Easy', 15, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'A dish of chicken chop suey with sliced chicken, celery, carrot, mushrooms, mangetout and bean sprouts in a light glossy sauce, with rice'),
  c('bran-muffins', 'Bran Muffins', 'American', 'Baking', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'A batch of domed bran muffins in paper cases, one broken open to show raisins, with a dish of butter beside them'),
  c('cinnamon-swirl-bread', 'Cinnamon Swirl Bread', 'American', 'Baking', 'Medium', 40, 40, 12, 0, 0, ['Vegetarian'], ['new'], 'A sliced loaf of cinnamon swirl bread showing a spiral of brown sugar and cinnamon through soft white crumb'),
  c('funfetti-cake', 'Funfetti Cake', 'American', 'Baking', 'Easy', 30, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'A tall two-layer white cake with buttercream and rainbow sprinkles, one slice cut to show the colourful speckles inside'),
  c('homemade-sandwich-bread', 'Homemade Sandwich Bread', 'American', 'Baking', 'Medium', 30, 35, 12, 0, 0, ['Vegetarian'], ['new'], 'A tall golden loaf of homemade sandwich bread with two slices cut, showing a soft, even, white crumb'),
  c('monster-cookies', 'Monster Cookies', 'American', 'Baking', 'Easy', 15, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'A stack of big, thick monster cookies studded with colourful candies, chocolate chips and oats, on a wire rack'),
  c('pecan-sticky-buns', 'Pecan Sticky Buns', 'American', 'Baking', 'Medium', 45, 35, 12, 0, 0, ['Vegetarian'], ['new'], 'A tray of pecan sticky buns turned out, glossy with dark caramel and topped with toasted pecans, one bun pulled to show the swirl'),
  c('scotcheroos', 'Scotcheroos', 'American', 'Baking', 'Easy', 15, 10, 24, 0, 0, ['Vegetarian'], ['new'], 'A tray of scotcheroos cut into squares, with a chocolate and butterscotch topping over a peanut butter crisped rice base'),
  c('pineapple-upside-down-cake', 'Pineapple Upside-Down Cake', 'American', 'Baking', 'Medium', 25, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'A pineapple upside-down cake on a plate, with glossy caramelised pineapple rings and glacé cherries on top of golden sponge'),
  c('texas-sheet-cake', 'Texas Sheet Cake', 'American', 'Baking', 'Easy', 25, 30, 24, 0, 0, ['Vegetarian'], ['new'], 'A tray of Texas sheet cake with a shiny fudgy chocolate pecan icing, cut into squares, one lifted to show the moist crumb'),
  c('beer-bread', 'Beer Bread', 'American', 'Baking', 'Easy', 10, 50, 10, 0, 0, [], ['new'], 'A golden loaf of beer bread with a cracked, buttery top, sliced, with a bottle of lager beside it'),
  c('aberdeen-butteries', 'Aberdeen Butteries', 'Scottish', 'Baking', 'Medium', 45, 20, 12, 0, 0, [], ['new'], 'A tray of golden, flaky Aberdeen butteries, flat round rolls with a crisp layered crust, one torn open with butter'),
  c('fondant-fancies', 'Fondant Fancies', 'British', 'Baking', 'Hard', 60, 35, 16, 0, 0, ['Vegetarian'], ['new'], 'A plate of colourful fondant fancies in pink, yellow and lilac with piped chocolate lines, one cut to show jam and buttercream in the sponge'),
  c('omelette-arnold-bennett', 'Omelette Arnold Bennett', 'British', 'Breakfast', 'Medium', 15, 20, 2, 0, 0, [], ['new'], 'A golden omelette Arnold Bennett with a bubbling browned top of smoked haddock, cream and Parmesan, sprinkled with chives'),
  c('rough-puff-pastry', 'Rough Puff Pastry', 'British', 'Baking', 'Medium', 30, 0, 8, 0, 0, ['Vegetarian'], ['new'], 'A block of rough puff pastry dough on a floured board, with a rolling pin and streaks of butter visible in the folded layers'),
  c('teisen-lap', 'Teisen Lap', 'Welsh', 'Baking', 'Easy', 20, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'Squares of teisen lap, a moist Welsh fruit cake with a golden top and sultanas, on a plate with a pat of butter'),
  c('molasses-bread', 'Molasses Bread', 'Canadian', 'Baking', 'Medium', 30, 40, 12, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'A loaf of dark molasses bread with an oat-sprinkled crust, sliced to show a moist, brown, wholemeal crumb, beside a knife and butter'),
  c('beaver-tails', 'Beaver Tails', 'Canadian', 'Baking', 'Medium', 30, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'Golden fried Beaver Tails, flat oval pastries with a blistered surface, dusted with cinnamon sugar with a lemon wedge'),
  c('cherry-ripe-slice', 'Cherry Ripe Slice', 'Australian', 'Baking', 'Easy', 20, 5, 20, 0, 0, ['Vegetarian'], ['new'], 'Squares of cherry ripe slice with a dark chocolate top and a pink coconut and glacé cherry base, one lifted to show the layers'),
  c('orange-and-almond-cake', 'Orange and Almond Cake', 'Australian', 'Baking', 'Medium', 20, 150, 12, 0, 0, ['Gluten-Free', 'Vegetarian'], ['new'], 'A round orange and almond cake dusted with icing sugar, with a slice cut to show a dense, moist, golden crumb, and a bowl of yoghurt'),
  c('weet-bix-slice', 'Weet-Bix Slice', 'Australian', 'Baking', 'Easy', 15, 20, 16, 0, 0, ['Vegetarian'], ['new'], 'Squares of Weet-Bix slice with a chocolate icing and a sprinkling of coconut, one lifted to show a chewy, crumbly base'),
  c('hobnobs', 'Hobnobs', 'British', 'Baking', 'Easy', 15, 14, 20, 0, 0, ['Vegetarian'], ['new'], 'A plate of golden homemade oat biscuits, some coated on one side in dark chocolate, with a cup of tea'),
  c('chocolate-orange-cake', 'Chocolate Orange Cake', 'British', 'Baking', 'Medium', 30, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'A two-layer chocolate orange cake covered in glossy dark chocolate ganache and orange zest curls, with one slice cut to show marmalade'),
  c('buckeyes', 'Buckeyes', 'American', 'Desserts', 'Easy', 45, 5, 36, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A plate of round peanut butter buckeye candies dipped in glossy dark chocolate, each with a circle of peanut butter showing on top'),
  c('candied-yams', 'Candied Yams', 'American', 'Holiday Specials', 'Easy', 20, 60, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A baking dish of glossy candied yams, thick orange slices of sweet potato in a shiny brown sugar syrup, sprinkled with cinnamon'),
  c('chocolate-truffles', 'Chocolate Truffles', 'French', 'Desserts', 'Medium', 30, 5, 30, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A plate of round dark chocolate truffles rolled in cocoa powder, one cut open to show a soft, glossy centre'),
  c('green-beans-almondine', 'Green Beans Almondine', 'French', 'Holiday Specials', 'Easy', 10, 15, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A serving dish of bright green beans tossed with golden butter, toasted flaked almonds and lemon'),
  c('hot-fudge-sauce', 'Hot Fudge Sauce', 'American', 'Desserts', 'Easy', 5, 10, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A jug of thick, glossy hot fudge sauce being poured over a scoop of vanilla ice cream in a glass dish'),
  c('peanut-butter-pie', 'Peanut Butter Pie', 'American', 'Desserts', 'Medium', 30, 5, 10, 0, 0, ['Vegetarian'], ['new'], 'A slice of no-bake peanut butter pie on a plate, with a dark chocolate cookie crust, a fluffy peanut butter filling and drizzled chocolate'),
  c('pork-and-sauerkraut', 'Pork and Sauerkraut', 'American', 'Holiday Specials', 'Easy', 15, 180, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A sliced braised pork shoulder on a platter over tender sauerkraut with apples and caraway, with mashed potatoes beside it'),
  c('tapioca-pudding', 'Tapioca Pudding', 'American', 'Desserts', 'Easy', 10, 30, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Glasses of creamy tapioca pudding with translucent pearls, dusted with cinnamon and topped with a few raspberries'),
  c('blancmange', 'Blancmange', 'British', 'Desserts', 'Easy', 10, 10, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A turned-out white blancmange in a fluted mould on a plate, with raspberry jam spooned around it and fresh raspberries'),
  c('chestnut-stuffing', 'Chestnut Stuffing', 'British', 'Holiday Specials', 'Easy', 20, 50, 8, 0, 0, [], ['new'], 'A golden baked dish of chestnut and sausage meat stuffing with fresh herbs, with a serving spoon lifting out a portion'),
  c('gypsy-tart', 'Gypsy Tart', 'British', 'Desserts', 'Easy', 20, 30, 8, 0, 0, ['Vegetarian'], ['new'], 'A slice of gypsy tart on a plate, with a pale golden shortcrust base and a light, frothy caramel-brown muscovado filling'),
  c('partridgeberry-pie', 'Partridgeberry Pie', 'Canadian', 'Desserts', 'Medium', 30, 50, 8, 0, 0, ['Vegetarian'], ['new'], 'A double-crust partridgeberry pie with a golden lattice-slashed top and deep red berry juices bubbling at the edge, with a slice cut'),
  c('paska', 'Paska', 'Ukrainian', 'Holiday Specials', 'Hard', 60, 50, 12, 0, 0, ['Vegetarian'], ['new'], 'Two tall, domed, glossy golden loaves of paska Easter bread with braided crosses on top, iced and sprinkled with colourful sprinkles'),
  c('mango-cheesecake', 'Mango Cheesecake', 'Australian', 'Desserts', 'Medium', 30, 5, 10, 0, 0, [], ['new'], 'A no-bake mango cheesecake with a pale golden mango filling on a biscuit base, topped with fresh mango slices and passionfruit pulp'),
  c('amaretto-sour', 'Amaretto Sour', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A rocks glass of amaretto sour with a pale foamy top, a lemon slice and a cocktail cherry on a bar'),
  c('cheeseburger-sliders', 'Cheeseburger Sliders', 'American', 'Appetizers', 'Easy', 20, 25, 12, 0, 0, [], ['new'], 'A tray of baked cheeseburger sliders on soft Hawaiian rolls with a buttery seeded top, cut into squares and topped with pickles'),
  c('fried-calamari', 'Fried Calamari', 'Italian', 'Appetizers', 'Medium', 20, 15, 4, 0, 0, [], ['new'], 'A plate of golden crisp fried calamari rings and tentacles with lemon wedges and a bowl of warm marinara sauce'),
  c('ham-and-cheese-pinwheels', 'Ham and Cheese Pinwheels', 'American', 'Appetizers', 'Easy', 20, 0, 12, 0, 0, [], ['new'], 'A platter of ham and cheese pinwheels, spirals of tortilla with cream cheese, ham and Swiss cheese, with toothpicks and a bowl of mustard'),
  c('lemon-drop', 'Lemon Drop', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A chilled martini glass of pale yellow lemon drop with a sugared rim and a twist of lemon peel'),
  c('lemon-pepper-wings', 'Lemon Pepper Wings', 'American', 'Appetizers', 'Easy', 10, 55, 6, 0, 0, ['Gluten-Free'], ['new'], 'A plate of crisp golden chicken wings glazed in lemon pepper butter with lemon wedges and a cup of ranch dip'),
  c('orange-julius', 'Orange Julius', 'American', 'Drinks', 'Easy', 5, 0, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Two tall glasses of frothy pale orange Orange Julius with a creamy foam top and a slice of orange on the rim'),
  c('seven-layer-dip', 'Seven Layer Dip', 'American', 'Appetizers', 'Easy', 25, 0, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A glass dish of seven layer dip with beans, guacamole, sour cream, salsa, cheese, olives and spring onions, with tortilla chips beside it'),
  c('sex-on-the-beach', 'Sex on the Beach', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A tall highball glass of a pink and orange layered Sex on the Beach cocktail with an orange slice and a cherry'),
  c('tom-collins', 'Tom Collins', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A tall Collins glass of Tom Collins, pale and fizzy with ice, a lemon wheel and a cocktail cherry'),
  c('blue-lagoon', 'Blue Lagoon', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A tall glass of bright electric-blue Blue Lagoon cocktail with ice, a lemon slice and a cherry on a sunny bar'),
  c('branston-style-pickle', 'Branston-Style Pickle', 'British', 'Appetizers', 'Easy', 45, 70, 30, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'A jar of dark brown chunky Branston-style pickle beside a wedge of mature cheddar and a slice of crusty bread'),
  c('cucumber-raita', 'Cucumber Raita', 'Indian', 'Appetizers', 'Easy', 10, 0, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A bowl of cool cucumber raita, thick white yoghurt with grated cucumber and mint, dusted with paprika, beside a plate of curry'),
  c('homemade-ginger-beer', 'Homemade Ginger Beer', 'British', 'Drinks', 'Easy', 15, 15, 10, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A tall glass of cloudy golden ginger beer over ice with a lime wedge and sprig of mint, beside a jug of ginger syrup'),
  c('painkiller', 'Painkiller', 'International', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A tall glass of creamy golden Painkiller cocktail over crushed ice, dusted with fresh nutmeg, with an orange wedge and pineapple leaf'),
  c('salt-and-pepper-ribs', 'Salt and Pepper Ribs', 'Chinese', 'Appetizers', 'Medium', 20, 50, 6, 0, 0, ['Dairy-Free'], ['new'], 'A plate of crisp golden salt and pepper ribs tossed with sliced red chillies, garlic and spring onion, with a small dish of extra pepper salt'),
  c('snowball-cocktail', 'Snowball Cocktail', 'British', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A short glass of a creamy pale yellow Snowball cocktail with ice, a fizzy top and a red cherry on a pick'),
  c('greek-frappe', 'Greek Frappé', 'Greek', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A tall glass of Greek frappé, iced coffee with a thick tan foam on top, with a straw, condensation on the glass and a sunny café table'),
  c('hot-crab-dip', 'Hot Crab Dip', 'American', 'Appetizers', 'Easy', 15, 25, 10, 0, 0, [], ['new'], 'A ceramic dish of bubbling golden hot crab dip with a browned cheese top, with crackers and toasted baguette slices beside it'),
  c('hurricane-cocktail', 'Hurricane Cocktail', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A curvy hurricane glass of a deep red-orange Hurricane cocktail full of ice, with an orange slice and a cherry, on a New Orleans balcony')
];
