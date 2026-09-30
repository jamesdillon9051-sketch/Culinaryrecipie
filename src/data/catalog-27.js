/**
 * Weekly Delight — recipe catalog, volume twenty-seven.
 * One hundred dishes, the first fifth of the five hundred added in volumes
 * twenty-seven to thirty-one from the most searched recipes in the United
 * States, the United Kingdom, Canada, Australia and New Zealand: American
 * mains, soups, sides and snacks, British and Irish bakes and puddings, Chinese
 * takeaway favourites, Canadian and Ukrainian prairie dishes, Australian
 * slices and pies, New Zealand baking and preserves, and the cocktails and hot
 * drinks people look up by name.
 *
 * About 3,300 candidate names were tried against the 1,915 recipes already
 * published, with tools/dedupe-candidates.js, and then read by hand. A third
 * were already on the site under the same name or another. Many of the rest
 * were the same dish under a different name (pikelets are drop scones, sticky
 * date pudding is sticky toffee pudding, a chicken schnitzel is a chicken
 * Milanese) or a cut, a pan or an appliance variant of a page that exists, and
 * they were left out. The five hundred that stayed are dishes the site did not
 * have.
 *
 * This file is generated from the verified list rather than typed out from it,
 * and `npm run check` fails if two recipes are the same dish.
 *
 * Spread: American 43, British 12, Canadian 10, Australian 5, Chinese 4,
 * International 4, French 3, Irish 3, New Zealand 3, Mexican 2, Scottish 2,
 * Ukrainian 2, Hawaiian 1, Italian 1, Japanese 1, Korean 1, Singaporean 1,
 * Thai 1, Turkish 1.
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
  c('baked-spaghetti', 'Baked Spaghetti', 'American', 'Dinner', 'Easy', 25, 55, 8, 0, 0, [], ['new'], 'A deep dish of baked spaghetti with a bubbling golden crust of melted mozzarella and cheddar, one square lifted out to show the layers of pasta, meat sauce and cream cheese'),
  c('blackened-chicken', 'Blackened Chicken', 'American', 'Dinner', 'Easy', 10, 12, 4, 0, 0, ['Gluten-Free'], ['new'], 'Sliced blackened chicken breast with a dark, spice-crusted surface and juicy white meat inside, on a plate with lemon wedges and chopped parsley'),
  c('burnt-ends', 'Burnt Ends', 'American', 'Dinner', 'Medium', 20, 330, 8, 0, 0, [], ['new'], 'A tray of glossy, dark-crusted cubes of burnt ends brisket in sticky barbecue glaze, with a few pieces on a fork'),
  c('chicken-and-biscuits', 'Chicken and Biscuits', 'American', 'Dinner', 'Medium', 20, 55, 6, 0, 0, [], ['new'], 'Two split buttermilk biscuits in a shallow bowl under a creamy gravy of shredded chicken, carrots and peas, with black pepper and thyme on top'),
  c('country-style-ribs', 'Country-Style Ribs', 'American', 'Dinner', 'Easy', 15, 165, 6, 0, 0, ['Dairy-Free'], ['new'], 'A baking dish of meaty boneless country-style pork ribs glazed in dark barbecue sauce, with sliced onion and a brush on the side'),
  c('filet-mignon', 'Filet Mignon', 'American', 'Dinner', 'Medium', 10, 15, 4, 0, 0, ['Gluten-Free'], ['new'], 'A thick seared filet mignon steak sliced open to show a rosy medium-rare centre, with a pat of melted herb butter and a sprig of thyme on a dark plate'),
  c('galbi-jjim', 'Galbi Jjim', 'Korean', 'Dinner', 'Medium', 30, 130, 6, 0, 0, ['Dairy-Free'], ['new'], 'A shallow pot of glossy soy-braised Korean short ribs with carrots, daikon and shiitake mushrooms, garnished with sesame seeds and sliced spring onion'),
  c('king-ranch-chicken-casserole', 'King Ranch Chicken Casserole', 'American', 'Dinner', 'Easy', 25, 40, 8, 0, 0, [], ['new'], 'A baking dish of King Ranch chicken casserole with layers of corn tortillas, shredded chicken and melted cheddar, one portion lifted out on a spatula'),
  c('maque-choux', 'Maque Choux', 'American', 'Dinner', 'Easy', 20, 25, 6, 0, 0, ['Gluten-Free'], ['new'], 'A skillet of golden maque choux, fresh sweetcorn kernels cooked with peppers, onion and tomato in a creamy sauce, with chopped green onions on top'),
  c('porcupine-meatballs', 'Porcupine Meatballs', 'American', 'Dinner', 'Easy', 20, 60, 6, 0, 0, [], ['new'], 'A skillet of round beef meatballs studded with rice grains, simmered in a rich tomato sauce and sprinkled with chopped parsley'),
  c('shrimp-creole', 'Shrimp Creole', 'American', 'Dinner', 'Medium', 20, 40, 4, 0, 0, ['Dairy-Free'], ['new'], 'A bowl of white rice topped with shrimp in a thick red Creole tomato sauce with peppers, celery and parsley'),
  c('steak-au-poivre', 'Steak au Poivre', 'French', 'Dinner', 'Medium', 10, 20, 4, 0, 0, [], ['new'], 'A pan-seared steak crusted with coarsely crushed black peppercorns, topped with a glossy cream and brandy sauce and served on a warm plate'),
  c('stuffed-pork-chops', 'Stuffed Pork Chops', 'American', 'Dinner', 'Medium', 25, 45, 4, 0, 0, [], ['new'], 'Four thick pork chops sliced open to show a sage, apple and bread stuffing inside, on a plate with green beans'),
  c('bacon-and-cabbage', 'Bacon and Cabbage', 'Irish', 'Dinner', 'Easy', 15, 120, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A platter of sliced boiled bacon with wedges of green cabbage and boiled potatoes in their skins, with a pot of mustard on the side'),
  c('chicken-chasseur', 'Chicken Chasseur', 'French', 'Dinner', 'Medium', 15, 55, 4, 0, 0, [], ['new'], 'A casserole dish of browned chicken thighs in a tomato and mushroom sauce with white wine, tarragon and chopped parsley'),
  c('clapshot', 'Clapshot', 'Scottish', 'Dinner', 'Easy', 15, 30, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A mound of orange-flecked mashed potato and swede with a knob of melting butter and chopped chives on a plate beside haggis'),
  c('lamb-bhuna', 'Lamb Bhuna', 'British', 'Dinner', 'Medium', 20, 100, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A dish of thick, dark lamb bhuna curry with tender lamb pieces in a clinging spiced tomato and onion sauce, topped with coriander and slices of green chilli'),
  c('meat-and-potato-pie', 'Meat and Potato Pie', 'British', 'Dinner', 'Medium', 40, 130, 8, 0, 0, [], ['new'], 'A golden shortcrust meat and potato pie in a pie dish with a slice cut out to show chunks of beef and potato in thick brown gravy'),
  c('salmon-fishcakes', 'Salmon Fishcakes', 'British', 'Dinner', 'Medium', 35, 30, 4, 0, 0, [], ['new'], 'Four golden breadcrumb-coated salmon fishcakes on a plate with lemon wedges, a dollop of tartare sauce and a handful of watercress'),
  c('arctic-char', 'Arctic Char', 'Canadian', 'Dinner', 'Easy', 10, 12, 4, 0, 0, ['Gluten-Free'], ['new'], 'A skin-on pan-seared Arctic char fillet with a crisp skin and pink flesh, topped with lemon butter and fresh dill on a white plate'),
  c('cipaille', 'Cipaille', 'Canadian', 'Dinner', 'Hard', 60, 210, 10, 0, 0, [], ['new'], 'A deep round pie with a golden pastry crust cut into a wedge to show layers of meat, potato and onion, on a plate beside the whole pie'),
  c('jiggs-dinner', 'Jiggs Dinner', 'Canadian', 'Dinner', 'Easy', 30, 190, 8, 0, 0, [], ['new'], 'A platter of sliced corned beef with boiled cabbage, carrots, turnip and potatoes, and a bowl of yellow pease pudding on the side'),
  c('rappie-pie', 'Rappie Pie', 'Canadian', 'Dinner', 'Hard', 60, 170, 8, 0, 0, [], ['new'], 'A baked Acadian rappie pie in a dish, with a dark crisp crust and a slice served showing a soft, gelatinous potato layer with chicken'),
  c('doner-kebab', 'Doner Kebab', 'Turkish', 'Dinner', 'Medium', 30, 60, 6, 0, 0, [], ['new'], 'A warm flatbread wrapped around thin slices of crisp-edged spiced doner meat with lettuce, tomato, red onion and garlic yoghurt sauce'),
  c('mongolian-lamb', 'Mongolian Lamb', 'Chinese', 'Dinner', 'Easy', 25, 8, 4, 0, 0, ['Dairy-Free'], ['new'], 'A wok of glossy Mongolian lamb with thin slices of browned lamb in a dark sweet-savoury sauce with spring onions and ginger'),
  c('yaki-udon', 'Yaki Udon', 'Japanese', 'Dinner', 'Easy', 15, 12, 3, 0, 0, ['Dairy-Free'], ['new'], 'A pan of stir-fried thick udon noodles with pork, cabbage, carrots and shiitake in a dark soy glaze, topped with bonito flakes and spring onion'),
  c('beef-burritos', 'Beef Burritos', 'Mexican', 'Lunch', 'Easy', 20, 25, 6, 0, 0, [], ['new'], 'Two beef burritos cut in half on a plate to show ground beef, rice, beans and melted cheese, with a bowl of salsa and sour cream beside them'),
  c('blue-cheese-dressing', 'Blue Cheese Dressing', 'American', 'Quick Meals', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A small white bowl of thick blue cheese dressing with crumbled blue cheese and chives on top, beside a plate of buffalo wings and celery sticks'),
  c('chicken-burrito-bowl', 'Chicken Burrito Bowl', 'Mexican', 'Lunch', 'Easy', 25, 20, 4, 0, 0, [], ['new'], 'A burrito bowl with lime-marinated chicken, rice, black beans, corn salsa, guacamole, lettuce and cheese arranged in sections in a wide bowl'),
  c('chickpea-salad', 'Chickpea Salad', 'International', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A large bowl of chickpea salad with cucumber, cherry tomatoes, red onion, olives and parsley, dressed with olive oil and lemon'),
  c('crunchwrap', 'Crunchwrap', 'American', 'Lunch', 'Medium', 25, 20, 4, 0, 0, [], ['new'], 'A folded, pleated crunchwrap toasted golden brown, cut in half to show layers of beef, melted cheese, a crisp tostada, lettuce and tomato'),
  c('italian-sub', 'Italian Sub', 'American', 'Lunch', 'Easy', 15, 0, 4, 0, 0, [], ['new'], 'A long Italian sub sandwich split to show layers of salami, ham, provolone, lettuce, tomato, red onion and pepperoncini, on a crusty roll'),
  c('one-pot-pasta', 'One-Pot Pasta', 'American', 'Quick Meals', 'Easy', 10, 15, 4, 0, 0, [], ['new'], 'A large pot of one-pot spaghetti in a glossy tomato sauce with halved cherry tomatoes, sliced onion and whole basil leaves'),
  c('roasted-chickpeas', 'Roasted Chickpeas', 'International', 'Healthy', 'Easy', 10, 35, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A baking tray of crisp golden roasted chickpeas dusted with smoked paprika and spices, with a handful in a small bowl'),
  c('roasted-red-pepper-soup', 'Roasted Red Pepper Soup', 'International', 'Lunch', 'Easy', 15, 50, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A bowl of smooth, bright red roasted red pepper soup with a swirl of olive oil, black pepper and torn basil, beside a slice of crusty bread'),
  c('taco-salad', 'Taco Salad', 'American', 'Lunch', 'Easy', 20, 12, 4, 0, 0, [], ['new'], 'A big bowl of taco salad with seasoned ground beef, romaine lettuce, black beans, corn, tomatoes, cheddar, avocado and crushed tortilla chips, with a creamy salsa dressing'),
  c('turkey-chili', 'Turkey Chili', 'American', 'Healthy', 'Medium', 15, 55, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A bowl of turkey chili with kidney and black beans in a thick red tomato sauce, topped with sliced spring onion and chopped coriander'),
  c('wedge-salad', 'Wedge Salad', 'American', 'Lunch', 'Easy', 15, 8, 4, 0, 0, ['Gluten-Free'], ['new'], 'Four iceberg lettuce wedges each topped with creamy blue cheese dressing, crisp bacon, halved cherry tomatoes and chives on a white platter'),
  c('chicken-and-sweetcorn-soup', 'Chicken and Sweetcorn Soup', 'Chinese', 'Lunch', 'Easy', 10, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'A white bowl of golden chicken and sweetcorn soup with ribbons of egg, flecks of chicken and sliced spring onion on top'),
  c('prawn-mayo-sandwich', 'Prawn Mayo Sandwich', 'British', 'Lunch', 'Easy', 10, 0, 2, 0, 0, [], ['new'], 'A prawn mayonnaise sandwich cut into triangles on soft white bread, with pink prawns in creamy mayonnaise and a lettuce leaf, on a plate'),
  c('white-sauce', 'White Sauce', 'British', 'Quick Meals', 'Easy', 5, 12, 6, 0, 0, ['Vegetarian'], ['new'], 'A saucepan of smooth, pale, glossy white sauce with a whisk resting in it and a pinch of nutmeg on top'),
  c('indian-tacos', 'Indian Tacos', 'Canadian', 'Lunch', 'Medium', 30, 30, 6, 0, 0, [], ['new'], 'A round of puffy golden fry bread topped with seasoned beef, beans, lettuce, tomato, cheddar and sour cream, on a plate'),
  c('sauteed-fiddleheads', 'Sautéed Fiddleheads', 'Canadian', 'Healthy', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A shallow bowl of bright green curled fiddlehead ferns sautéed in butter with garlic and lemon zest'),
  c('thai-beef-salad', 'Thai Beef Salad', 'Thai', 'Lunch', 'Medium', 20, 10, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A platter of sliced medium-rare steak over crisp lettuce, cucumber, cherry tomatoes, red onion, mint and coriander with a lime, chilli and fish sauce dressing and crushed peanuts'),
  c('blueberry-scones', 'Blueberry Scones', 'American', 'Baking', 'Easy', 20, 22, 8, 0, 0, ['Vegetarian'], ['new'], 'A tray of golden triangular blueberry scones with purple blueberries bursting through and a sprinkle of coarse sugar on top, one broken open to show the tender crumb'),
  c('breakfast-sausage', 'Breakfast Sausage', 'American', 'Breakfast', 'Easy', 10, 10, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Four browned breakfast sausage patties on a plate next to a fried egg and toast, with flecks of sage visible in the meat'),
  c('ciabatta', 'Ciabatta', 'Italian', 'Baking', 'Medium', 30, 25, 8, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Two long, flat, flour-dusted ciabatta loaves with an open, irregular crumb visible where one has been torn open'),
  c('english-muffins', 'English Muffins', 'American', 'Baking', 'Medium', 30, 28, 8, 0, 0, ['Vegetarian'], ['new'], 'A stack of griddled English muffins with one split open to show the craggy nooks and crannies, spread with melting butter'),
  c('homemade-pop-tarts', 'Homemade Pop-Tarts', 'American', 'Baking', 'Medium', 40, 25, 8, 0, 0, ['Vegetarian'], ['new'], 'A tray of iced homemade toaster pastry rectangles with pink icing and rainbow sprinkles, one broken to show the strawberry jam filling'),
  c('johnnycakes', 'Johnnycakes', 'American', 'Breakfast', 'Easy', 10, 20, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A stack of thin, golden-edged Rhode Island johnnycakes with butter melting on top and a jug of maple syrup'),
  c('malasadas', 'Malasadas', 'Hawaiian', 'Baking', 'Medium', 30, 20, 12, 0, 0, ['Vegetarian'], ['new'], 'A plate of golden fried Hawaiian malasadas rolled in granulated sugar, one torn open to show the soft, airy inside'),
  c('pecan-sandies', 'Pecan Sandies', 'American', 'Baking', 'Easy', 20, 25, 24, 0, 0, ['Vegetarian'], ['new'], 'A plate of round pecan sandies cookies rolled in icing sugar, with chopped pecans visible in the crumbly, buttery dough'),
  c('pumpkin-muffins', 'Pumpkin Muffins', 'American', 'Baking', 'Easy', 15, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'A tray of domed pumpkin muffins with cracked golden tops and a scattering of pumpkin seeds, one split to show the moist orange crumb'),
  c('thumbprint-cookies', 'Thumbprint Cookies', 'American', 'Baking', 'Easy', 25, 15, 24, 0, 0, ['Vegetarian'], ['new'], 'A plate of buttery thumbprint cookies rolled in chopped nuts, each with a small well filled with red raspberry jam'),
  c('butterfly-cakes', 'Butterfly Cakes', 'British', 'Baking', 'Easy', 25, 18, 12, 0, 0, ['Vegetarian'], ['new'], 'A plate of twelve small butterfly cakes, each with a pair of cake wings set into a swirl of buttercream and a dusting of icing sugar'),
  c('eggs-royale', 'Eggs Royale', 'British', 'Breakfast', 'Medium', 15, 15, 4, 0, 0, [], ['new'], 'Toasted English muffins topped with smoked salmon, two poached eggs each and glossy hollandaise sauce, sprinkled with chives, on a white plate'),
  c('empire-biscuits', 'Empire Biscuits', 'Scottish', 'Baking', 'Medium', 30, 15, 10, 0, 0, ['Vegetarian'], ['new'], 'A plate of round Scottish Empire biscuits, two shortbread biscuits sandwiched with raspberry jam and topped with white icing and a glacé cherry'),
  c('irish-apple-cake', 'Irish Apple Cake', 'Irish', 'Baking', 'Easy', 25, 55, 8, 0, 0, ['Vegetarian'], ['new'], 'A wedge of Irish apple cake with a golden crumbly top and a layer of soft cooked apple slices in the middle, served with custard'),
  c('rock-cakes', 'Rock Cakes', 'British', 'Baking', 'Easy', 15, 18, 10, 0, 0, ['Vegetarian'], ['new'], 'A tray of golden, craggy rock cakes with sultanas and currants visible on the rough surface, dusted with sugar'),
  c('swiss-roll', 'Swiss Roll', 'British', 'Baking', 'Medium', 25, 12, 8, 0, 0, ['Vegetarian'], ['new'], 'A sliced Swiss roll with a light golden sponge spiralling around a layer of raspberry jam, dusted with caster sugar on a plate'),
  c('maple-oatmeal-cookies', 'Maple Oatmeal Cookies', 'Canadian', 'Baking', 'Easy', 15, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'A stack of chewy oatmeal cookies with a thin maple glaze and chopped pecans on top, beside a small bottle of maple syrup'),
  c('nalysnyky', 'Nalysnyky', 'Ukrainian', 'Breakfast', 'Medium', 20, 35, 6, 0, 0, ['Vegetarian'], ['new'], 'A plate of golden folded Ukrainian nalysnyky crepes, one cut open to show a sweet farmer\'s cheese filling, with sour cream and jam beside them'),
  c('pyrizhky', 'Pyrizhky', 'Ukrainian', 'Baking', 'Medium', 40, 22, 12, 0, 0, ['Vegetarian'], ['new'], 'A tray of golden baked Ukrainian pyrizhky buns with a glossy egg-washed top, one torn open to show a potato and cheese filling'),
  c('apple-tea-cake', 'Apple Tea Cake', 'Australian', 'Baking', 'Easy', 20, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'A round apple tea cake with overlapping slices of apple on a golden buttery top, dusted with cinnamon sugar, one wedge cut out on a plate'),
  c('mars-bar-slice', 'Mars Bar Slice', 'Australian', 'Baking', 'Easy', 15, 5, 16, 0, 0, ['Vegetarian'], ['new'], 'Squares of Mars Bar slice with a chewy caramel and puffed rice base and a thick layer of glossy milk chocolate on top, stacked on a plate'),
  c('tim-tam-slice', 'Tim Tam Slice', 'Australian', 'Baking', 'Easy', 20, 3, 16, 0, 0, ['Vegetarian'], ['new'], 'Neat squares of dark, fudgy Tim Tam slice with a glossy chocolate topping and a sprinkle of crushed biscuit, on a board'),
  c('paraoa-parai', 'Pāraoa Parai', 'New Zealand', 'Baking', 'Easy', 15, 15, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'A plate of golden puffed Māori fried bread pillows, some torn open to show the soft, steamy inside, with butter and jam'),
  c('blackberry-cobbler', 'Blackberry Cobbler', 'American', 'Desserts', 'Easy', 15, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'A baking dish of blackberry cobbler with a golden, craggy biscuit topping and purple juice bubbling up around it, with a scoop of vanilla ice cream melting on a serving'),
  c('caramel-corn', 'Caramel Corn', 'American', 'Desserts', 'Medium', 10, 60, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A large baking tray of glossy, deep golden caramel corn in crunchy clusters, with a handful in a paper bag'),
  c('flag-cake', 'Flag Cake', 'American', 'Holiday Specials', 'Easy', 30, 30, 15, 0, 0, ['Vegetarian'], ['new'], 'A rectangular white sheet cake decorated as an American flag, with rows of sliced strawberries for the stripes and a square of blueberries for the stars'),
  c('homemade-vanilla-ice-cream', 'Homemade Vanilla Ice Cream', 'American', 'Desserts', 'Medium', 20, 15, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Three scoops of pale cream homemade vanilla ice cream flecked with vanilla seeds in a glass bowl, with a wafer cone and a vanilla pod beside it'),
  c('peanut-butter-fudge', 'Peanut Butter Fudge', 'American', 'Desserts', 'Easy', 10, 10, 36, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Neat squares of creamy pale-brown peanut butter fudge stacked on a plate, with a piece broken in half to show the smooth, dense texture'),
  c('peppermint-bark', 'Peppermint Bark', 'American', 'Holiday Specials', 'Easy', 15, 5, 20, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Broken pieces of two-layer peppermint bark with dark chocolate on the bottom and white chocolate with crushed red and white candy cane pieces on top, on a plate'),
  c('strawberry-rhubarb-pie', 'Strawberry Rhubarb Pie', 'American', 'Desserts', 'Medium', 45, 70, 8, 0, 0, ['Vegetarian'], ['new'], 'A golden lattice-topped strawberry rhubarb pie with red jammy filling bubbling through the gaps, with a slice cut and lifted on a plate'),
  c('smoked-turkey', 'Smoked Turkey', 'American', 'Holiday Specials', 'Hard', 30, 210, 12, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'A whole smoked turkey with deep mahogany skin on a carving board, one side carved to show juicy pink-tinged slices of white meat'),
  c('bakewell-pudding', 'Bakewell Pudding', 'British', 'Desserts', 'Medium', 30, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'A golden Bakewell pudding in a tart tin with a slice cut out, showing a layer of red jam under a set almond custard and a flaky pastry base'),
  c('fifteens', 'Fifteens', 'Irish', 'Desserts', 'Easy', 20, 0, 15, 0, 0, [], ['new'], 'A slice of Fifteens rolled in desiccated coconut, showing pieces of white marshmallow and red glacé cherry in the biscuit mixture, on a plate'),
  c('figgy-duff', 'Figgy Duff', 'Canadian', 'Desserts', 'Medium', 20, 130, 8, 0, 0, ['Vegetarian'], ['new'], 'A steamed dark raisin pudding turned out of its basin onto a plate and sliced, with a jug of warm molasses sauce being poured over it'),
  c('maple-glazed-ham', 'Maple Glazed Ham', 'Canadian', 'Holiday Specials', 'Easy', 15, 150, 12, 0, 0, ['Dairy-Free'], ['new'], 'A whole baked ham with a glossy, deep amber maple glaze, studded with cloves and partly carved on a platter'),
  c('jelly-slice', 'Jelly Slice', 'Australian', 'Desserts', 'Easy', 25, 5, 16, 0, 0, [], ['new'], 'Squares of pink jelly slice on a plate, each with a crumbly biscuit base, a creamy raspberry jelly filling and a shredded coconut topping'),
  c('kiwifruit-cheesecake', 'Kiwifruit Cheesecake', 'New Zealand', 'Desserts', 'Medium', 30, 5, 10, 0, 0, [], ['new'], 'A pale no-bake cheesecake on a biscuit base topped with overlapping slices of bright green kiwifruit and a glossy apricot glaze, with a slice removed'),
  c('cheese-ball', 'Cheese Ball', 'American', 'Appetizers', 'Easy', 20, 0, 12, 0, 0, [], ['new'], 'A round cheese ball rolled in chopped pecans on a wooden board, with a knife, crackers and celery sticks around it'),
  c('french-75', 'French 75', 'French', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A champagne flute of pale gold French 75 cocktail with a long spiral lemon twist, bubbles rising, on a marble bar'),
  c('french-onion-dip', 'French Onion Dip', 'American', 'Appetizers', 'Easy', 15, 45, 10, 0, 0, [], ['new'], 'A bowl of creamy French onion dip flecked with golden caramelised onions and chives, with potato chips and vegetable sticks around it'),
  c('grape-jelly-meatballs', 'Grape Jelly Meatballs', 'American', 'Appetizers', 'Easy', 20, 35, 12, 0, 0, [], ['new'], 'A slow-cooker style bowl of glossy dark cocktail meatballs in a sweet grape jelly and chili sauce, each with a toothpick, on a party table'),
  c('kettle-corn', 'Kettle Corn', 'American', 'Appetizers', 'Easy', 5, 8, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A large bowl of sweet and salty kettle corn, glossy, lightly golden popcorn with a fine sugar coating'),
  c('mocha', 'Mocha', 'American', 'Drinks', 'Easy', 5, 5, 2, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Two mugs of mocha, a milky brown drink with a cap of cream and a dusting of cocoa powder, with a chocolate square beside them'),
  c('sausage-balls', 'Sausage Balls', 'American', 'Appetizers', 'Easy', 15, 20, 12, 0, 0, [], ['new'], 'A tray of golden brown sausage balls with melted cheddar showing at the surface, one broken in half to show the sausage and cheese inside'),
  c('sazerac', 'Sazerac', 'American', 'Drinks', 'Medium', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A short glass of amber Sazerac cocktail with a twist of lemon peel, on a dark bar top, with a bottle of bitters beside it'),
  c('tequila-sunrise', 'Tequila Sunrise', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A tall highball glass of tequila sunrise with red grenadine at the bottom fading through orange to yellow at the top, with an orange slice and a cherry'),
  c('apple-chutney', 'Apple Chutney', 'British', 'Appetizers', 'Easy', 30, 65, 30, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Three jars of dark golden apple chutney with sultanas, one open with a spoon, beside a wedge of cheddar and a slice of bread'),
  c('black-velvet', 'Black Velvet', 'British', 'Drinks', 'Easy', 3, 0, 1, 0, 0, ['Dairy-Free'], ['new'], 'A tall glass of black velvet, dark stout floating in a layer above pale gold sparkling wine, with a creamy tan head'),
  c('crispy-seaweed', 'Crispy Seaweed', 'Chinese', 'Appetizers', 'Easy', 15, 10, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A bowl of crisp, wispy dark green crispy seaweed sprinkled with sugar and salt, beside a plate of Chinese takeaway dishes'),
  c('homemade-almond-milk', 'Homemade Almond Milk', 'International', 'Drinks', 'Easy', 15, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A glass jug of creamy white homemade almond milk with a glass beside it, a bowl of raw almonds and a nut milk bag on a wooden counter'),
  c('marshmallow-hot-chocolate', 'Marshmallow Hot Chocolate', 'American', 'Drinks', 'Easy', 5, 8, 2, 0, 0, ['Gluten-Free'], ['new'], 'Two mugs of rich hot chocolate topped with melting marshmallows and a dusting of cocoa powder, on a wooden table beside a bag of marshmallows'),
  c('salt-and-chilli-chips', 'Salt and Chilli Chips', 'Chinese', 'Appetizers', 'Medium', 25, 35, 4, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A wok of golden thick-cut salt and chilli chips tossed with sliced red and green chillies, spring onion, garlic and green pepper'),
  c('singapore-sling', 'Singapore Sling', 'Singaporean', 'Drinks', 'Medium', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A tall curved glass of rosy pink Singapore Sling with ice, a slice of pineapple and a red cherry on a cocktail pick'),
  c('rye-and-ginger', 'Rye and Ginger', 'Canadian', 'Drinks', 'Easy', 2, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A tall highball glass of rye and ginger ale over ice with a lime wedge, on a wooden bar with a bottle of Canadian whisky behind it'),
  c('oysters-kilpatrick', 'Oysters Kilpatrick', 'Australian', 'Appetizers', 'Easy', 15, 8, 4, 0, 0, ['Dairy-Free'], ['new'], 'A platter of grilled oysters on the half shell topped with crisp bacon pieces and a glossy Worcestershire sauce, with lemon wedges'),
  c('tamarillo-chutney', 'Tamarillo Chutney', 'New Zealand', 'Appetizers', 'Easy', 30, 70, 30, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A jar of glossy dark red tamarillo chutney with a spoon, beside a plate of cheese, crackers and sliced cold meat')
];
