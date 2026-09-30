/**
 * Weekly Delight — recipe catalog, volume twenty-nine.
 * One hundred dishes, the third fifth of the five hundred added in volumes
 * twenty-seven to thirty-one from the most searched recipes in the United
 * States, the United Kingdom, Canada, Australia and New Zealand: American
 * suppers, diner desserts and party food, British bakes and game, Canadian and
 * Australian classics, a dozen cocktails and soft drinks, and the baking that
 * people look up by name.
 *
 * Every name was tried against the recipes already published, with
 * tools/dedupe-candidates.js, and then read by hand. Names that were the same
 * dish as a page that exists were left out, and so were cut, pan and flavour
 * variants of one: chicken cacciatore is the hunter's chicken, Swiss steak was
 * already on the site, a lobster mac and cheese is a baked mac and cheese, a
 * butter chicken poutine is a poutine, breakfast tacos are tacos, chicken balls
 * are sweet and sour chicken, dry garlic ribs are salt and pepper ribs,
 * pikelets are drop scones and a passionfruit slice is a lemon slice with a
 * different fruit. Twenty-nine names in the first draft of this list went that
 * way and were replaced by dishes the site did not have.
 *
 * This file is generated from the verified list rather than typed out from it,
 * and `npm run check` fails if two recipes are the same dish.
 *
 * Spread: American 56, British 19, Australian 6, Canadian 4, Italian 3,
 * Mexican 3, French 2, Chinese 1, Greek 1, International 1, Moroccan 1, New
 * Zealand 1, Thai 1, Welsh 1.
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
  c('beef-tips-and-gravy', 'Beef Tips and Gravy', 'American', 'Dinner', 'Easy', 15, 60, 4, 0, 0, [], ['new'], 'A skillet of tender beef tips with mushrooms and onions in glossy brown gravy, spooned over mashed potatoes with parsley'),
  c('bourbon-chicken', 'Bourbon Chicken', 'American', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'Glossy pieces of caramelised chicken thigh in a dark soy and brown sugar glaze, on white rice with sliced spring onions'),
  c('calzone', 'Calzone', 'Italian', 'Dinner', 'Medium', 30, 20, 4, 0, 0, [], ['new'], 'A golden folded calzone cut open to show melting mozzarella, ricotta and ham, beside a small bowl of marinara for dipping'),
  c('chicken-a-la-king', 'Chicken à la King', 'American', 'Dinner', 'Easy', 15, 25, 4, 0, 0, [], ['new'], 'Creamed chicken with mushrooms, red pepper and peas in a pale sherry sauce, spooned over slices of buttered toast'),
  c('chicken-divan', 'Chicken Divan', 'American', 'Dinner', 'Medium', 20, 45, 4, 0, 0, [], ['new'], 'A baking dish of sliced chicken and bright green broccoli under a golden, bubbling cheese and breadcrumb crust'),
  c('chicken-pasta-bake', 'Chicken Pasta Bake', 'British', 'Dinner', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'A ceramic dish of penne baked in a creamy tomato sauce with chicken, peppers and bubbling golden mozzarella'),
  c('chinese-lemon-chicken', 'Chinese Lemon Chicken', 'Chinese', 'Dinner', 'Medium', 20, 20, 4, 0, 0, ['Dairy-Free'], ['new'], 'Crisp golden pieces of fried chicken coated in a glossy yellow lemon sauce, served on rice with lemon slices'),
  c('cornish-game-hens', 'Cornish Game Hens', 'American', 'Dinner', 'Medium', 20, 55, 4, 0, 0, ['Gluten-Free'], ['new'], 'Four whole roast Cornish game hens with crisp golden skin on a bed of onion, with lemon halves and thyme in the tin'),
  c('crayfish-mornay', 'Crayfish Mornay', 'New Zealand', 'Dinner', 'Medium', 25, 30, 4, 0, 0, [], ['new'], 'A shell of cooked crayfish tail meat in golden, bubbling cheese sauce with a browned breadcrumb top, served with lemon and salad'),
  c('creamed-corn', 'Creamed Corn', 'American', 'Dinner', 'Easy', 10, 25, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A white serving bowl of thick, glossy creamed corn with whole golden kernels, flecked with black pepper and thyme'),
  c('duck-a-lorange', 'Duck à l\'Orange', 'French', 'Dinner', 'Medium', 20, 35, 4, 0, 0, ['Gluten-Free'], ['new'], 'Sliced pink duck breast with crisp golden skin, glossy orange sauce and fresh orange segments on a warm white plate'),
  c('fish-and-brewis', 'Fish and Brewis', 'Canadian', 'Dinner', 'Medium', 20, 40, 4, 0, 0, [], ['new'], 'A plate of flaked salt cod and softened hard bread with boiled potatoes, topped with golden fried salt pork scrunchions'),
  c('fried-clams', 'Fried Clams', 'American', 'Dinner', 'Medium', 20, 10, 4, 0, 0, [], ['new'], 'A paper-lined basket of golden fried clams with a bowl of tartare sauce and lemon wedges on a picnic table'),
  c('herb-crusted-rack-of-lamb', 'Herb-Crusted Rack of Lamb', 'British', 'Dinner', 'Medium', 20, 25, 4, 0, 0, [], ['new'], 'Two roast racks of lamb with a green herb and mustard crust, carved into pink cutlets and arranged on a board with rosemary'),
  c('homemade-ravioli', 'Homemade Ravioli', 'Italian', 'Dinner', 'Medium', 75, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'Freshly made square ravioli filled with ricotta and spinach, tossed in brown butter with crisp sage leaves on a white plate'),
  c('kangaroo-steak', 'Kangaroo Steak', 'Australian', 'Dinner', 'Medium', 10, 12, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Sliced rare kangaroo fillet with a dark seared crust, in a glossy red wine and berry sauce with rosemary on a warm plate'),
  c('lamb-tagine', 'Lamb Tagine', 'Moroccan', 'Dinner', 'Medium', 25, 150, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A ceramic tagine of tender lamb in a rich spiced sauce with dried apricots, toasted almonds and fresh coriander'),
  c('mixed-grill', 'Mixed Grill', 'British', 'Dinner', 'Easy', 15, 30, 4, 0, 0, [], ['new'], 'A loaded plate of grilled lamb chops, sausages, bacon, mushrooms and tomatoes with a fried egg and chips'),
  c('pan-fried-walleye', 'Pan-Fried Walleye', 'Canadian', 'Dinner', 'Easy', 10, 12, 4, 0, 0, [], ['new'], 'Two golden pan-fried walleye fillets with a crisp coating, lemon butter and parsley on a plate with boiled potatoes'),
  c('pasta-primavera', 'Pasta Primavera', 'American', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Vegetarian'], ['new'], 'A bowl of linguine tossed with asparagus, peas, courgette and cherry tomatoes in a light Parmesan cream sauce with basil'),
  c('pheasant-casserole', 'Pheasant Casserole', 'British', 'Dinner', 'Medium', 20, 105, 4, 0, 0, [], ['new'], 'A cast-iron casserole of jointed pheasant with bacon, shallots, mushrooms and apple in a dark cider gravy with thyme'),
  c('prawn-cutlets', 'Prawn Cutlets', 'Australian', 'Dinner', 'Medium', 30, 10, 4, 0, 0, [], ['new'], 'Golden crumbed prawn cutlets with their tails on, fanned on a plate with lemon wedges, tartare sauce and a green salad'),
  c('scalloped-potatoes-and-ham', 'Scalloped Potatoes and Ham', 'American', 'Dinner', 'Easy', 25, 90, 6, 0, 0, [], ['new'], 'A baking dish of creamy scalloped potatoes with diced ham, bubbling with golden cheddar crust at the edges'),
  c('smothered-chicken', 'Smothered Chicken', 'American', 'Dinner', 'Medium', 20, 60, 4, 0, 0, [], ['new'], 'Golden fried chicken thighs smothered in a rich onion and pepper gravy in a cast-iron skillet, served over white rice'),
  c('somerset-pork-with-cider', 'Somerset Pork with Cider', 'British', 'Dinner', 'Medium', 15, 40, 4, 0, 0, ['Gluten-Free'], ['new'], 'Golden pork chops in a creamy cider and mustard sauce with softened apple slices and onions, garnished with thyme'),
  c('steak-kabobs', 'Steak Kabobs', 'American', 'Dinner', 'Easy', 25, 12, 4, 0, 0, ['Dairy-Free'], ['new'], 'Grilled skewers of charred steak cubes with red pepper, red onion and mushrooms on a platter with lemon and herbs'),
  c('anglesey-eggs', 'Anglesey Eggs', 'Welsh', 'Lunch', 'Easy', 25, 45, 4, 0, 0, ['Vegetarian'], ['new'], 'A baking dish of halved boiled eggs on leek and potato mash under a golden, bubbling cheese sauce'),
  c('bbq-sauce', 'BBQ Sauce', 'American', 'Quick Meals', 'Easy', 5, 20, 8, 0, 0, ['Dairy-Free'], ['new'], 'A glass jar of thick, glossy, dark red homemade barbecue sauce with a brush and a plate of ribs behind it'),
  c('black-bean-burgers', 'Black Bean Burgers', 'American', 'Lunch', 'Easy', 20, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'A black bean burger patty with a crisp seared crust in a toasted bun with lettuce, tomato, sliced avocado and pickles'),
  c('bone-broth', 'Bone Broth', 'International', 'Healthy', 'Easy', 15, 765, 8, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A ladle lifting golden, clear bone broth from a large stockpot, with roasted bones, carrot and parsley alongside'),
  c('cheeseburger-soup', 'Cheeseburger Soup', 'American', 'Lunch', 'Easy', 20, 40, 6, 0, 0, [], ['new'], 'A bowl of creamy cheeseburger soup with ground beef, potato and melted cheddar, topped with pickles, tomato and crisp bacon'),
  c('cilantro-lime-rice', 'Cilantro Lime Rice', 'Mexican', 'Quick Meals', 'Easy', 5, 20, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A bowl of fluffy white rice flecked with chopped fresh coriander and lime zest, with lime wedges on the side'),
  c('curried-egg-sandwich', 'Curried Egg Sandwich', 'Australian', 'Lunch', 'Easy', 10, 10, 4, 0, 0, ['Vegetarian'], ['new'], 'A stack of soft white bread sandwiches filled with yellow curried egg salad and crisp lettuce, cut into triangles on a plate'),
  c('fried-bologna-sandwich', 'Fried Bologna Sandwich', 'American', 'Lunch', 'Easy', 5, 8, 2, 0, 0, [], ['new'], 'A fried bologna sandwich with browned, blistered slices and melted American cheese on toasted white bread with mustard'),
  c('greek-chicken-bowls', 'Greek Chicken Bowls', 'Greek', 'Healthy', 'Easy', 25, 25, 4, 0, 0, ['Gluten-Free'], ['new'], 'A bowl of quinoa topped with sliced lemon-oregano chicken, cucumber, tomato, olives, feta and creamy tzatziki'),
  c('manhattan-clam-chowder', 'Manhattan Clam Chowder', 'American', 'Lunch', 'Easy', 20, 40, 6, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'A bowl of red Manhattan clam chowder with clams, potato, carrot and celery in a tomato broth, with parsley on top'),
  c('peanut-butter-and-jelly-sandwich', 'Peanut Butter and Jelly Sandwich', 'American', 'Lunch', 'Easy', 5, 0, 2, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Two peanut butter and jelly sandwiches on soft white bread cut into triangles, with grape jelly oozing from the edge'),
  c('seven-layer-salad', 'Seven Layer Salad', 'American', 'Lunch', 'Easy', 25, 10, 8, 0, 0, [], ['new'], 'A tall glass bowl of seven-layer salad showing bands of lettuce, celery, red onion, peas, creamy dressing, cheddar and crumbled bacon'),
  c('spaghetti-squash', 'Spaghetti Squash', 'American', 'Healthy', 'Easy', 10, 45, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Roasted spaghetti squash halves with the golden strands forked into a bowl, tossed with garlic, Parmesan and parsley'),
  c('special-burger-sauce', 'Special Burger Sauce', 'American', 'Quick Meals', 'Easy', 5, 0, 8, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A small jar of pale pink, creamy special burger sauce next to a cheeseburger with lettuce, pickles and a bun'),
  c('strawberry-spinach-salad', 'Strawberry Spinach Salad', 'American', 'Lunch', 'Easy', 15, 3, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A bowl of baby spinach with sliced strawberries, red onion, toasted pecans and crumbled feta, dressed with poppy seed vinaigrette'),
  c('three-bean-salad', 'Three Bean Salad', 'American', 'Lunch', 'Easy', 15, 5, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A glass bowl of three bean salad with green beans, red kidney beans and chickpeas in a glossy vinaigrette with onion and parsley'),
  c('watermelon-salad', 'Watermelon Salad', 'American', 'Healthy', 'Easy', 15, 0, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A platter of cubed red watermelon with crumbled white feta, torn mint, thin red onion and a drizzle of olive oil and lime'),
  c('bath-buns', 'Bath Buns', 'British', 'Baking', 'Medium', 35, 18, 12, 0, 0, ['Vegetarian'], ['new'], 'A tray of golden Bath buns studded with sultanas and topped with crunchy crushed sugar, one split and buttered'),
  c('black-and-white-cookies', 'Black and White Cookies', 'American', 'Baking', 'Medium', 30, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'Large round black and white cookies with a glossy half vanilla, half chocolate icing arranged on a cooling rack'),
  c('buttercream-frosting', 'Buttercream Frosting', 'American', 'Baking', 'Easy', 10, 0, 12, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A bowl of pale, fluffy vanilla buttercream with a spatula and a swirl piped onto a cupcake'),
  c('chocolate-babka', 'Chocolate Babka', 'American', 'Baking', 'Medium', 60, 45, 20, 0, 0, ['Vegetarian'], ['new'], 'A sliced chocolate babka loaf showing swirled layers of dark chocolate filling in a glossy brioche-like dough'),
  c('coconut-cake', 'Coconut Cake', 'American', 'Baking', 'Medium', 40, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'A tall white two-layer coconut cake covered in cream cheese frosting and shredded coconut, with a slice cut to show the crumb'),
  c('coconut-macaroons', 'Coconut Macaroons', 'British', 'Baking', 'Easy', 15, 15, 12, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Golden domed coconut macaroons on baking paper, with the bases dipped in dark chocolate'),
  c('cranberry-orange-bread', 'Cranberry Orange Bread', 'American', 'Baking', 'Easy', 15, 60, 10, 0, 0, ['Vegetarian'], ['new'], 'A sliced loaf of cranberry orange bread with red berries showing in the crumb and a white orange glaze on top'),
  c('cream-horns', 'Cream Horns', 'British', 'Baking', 'Medium', 40, 18, 8, 0, 0, ['Vegetarian'], ['new'], 'Eight flaky golden puff pastry cream horns filled with whipped cream and raspberry jam, dusted with icing sugar on a plate'),
  c('funnel-cake', 'Funnel Cake', 'American', 'Desserts', 'Medium', 10, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'A golden funnel cake of crisp, lacy overlapping batter ribbons dusted with icing sugar on a paper plate'),
  c('german-chocolate-cake', 'German Chocolate Cake', 'American', 'Baking', 'Medium', 45, 45, 12, 0, 0, ['Vegetarian'], ['new'], 'A three-layer chocolate cake with a thick golden coconut and pecan frosting between the layers and on top'),
  c('grasmere-gingerbread', 'Grasmere Gingerbread', 'British', 'Baking', 'Easy', 15, 25, 16, 0, 0, ['Vegetarian'], ['new'], 'A tray of golden Grasmere gingerbread cut into squares, crumbly on top and chewy underneath, with a crystallised ginger piece'),
  c('hawaiian-sweet-rolls', 'Hawaiian Sweet Rolls', 'American', 'Baking', 'Medium', 30, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'A tray of golden, soft Hawaiian sweet rolls baked together and pulled apart, brushed with melted butter'),
  c('italian-cream-cake', 'Italian Cream Cake', 'American', 'Baking', 'Medium', 45, 28, 12, 0, 0, ['Vegetarian'], ['new'], 'A three-layer Italian cream cake with cream cheese frosting, coconut and chopped pecans on top, cut to show a tender crumb'),
  c('jaffa-cakes', 'Jaffa Cakes', 'British', 'Baking', 'Medium', 45, 10, 12, 0, 0, [], ['new'], 'Twelve homemade Jaffa cakes with a glossy dark chocolate top scored with a fork, one split to show the orange jelly and sponge'),
  c('kolaches', 'Kolaches', 'American', 'Baking', 'Medium', 40, 18, 12, 0, 0, ['Vegetarian'], ['new'], 'A tray of golden Texas kolaches, soft yeast rolls with indented centres filled with cream cheese and apricot jam'),
  c('montreal-bagels', 'Montreal Bagels', 'Canadian', 'Baking', 'Medium', 40, 30, 12, 0, 0, ['Vegetarian'], ['new'], 'A wooden board of golden Montreal-style sesame bagels with large holes, one halved and spread with cream cheese'),
  c('morning-glory-muffins', 'Morning Glory Muffins', 'American', 'Baking', 'Easy', 20, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'A basket of golden morning glory muffins with domed tops, one broken open to show grated carrot, raisins and coconut'),
  c('pepperoni-rolls', 'Pepperoni Rolls', 'American', 'Baking', 'Medium', 30, 22, 12, 0, 0, [], ['new'], 'Golden soft bread rolls split open to show a stick of pepperoni and melted mozzarella running through the centre'),
  c('poached-eggs-on-toast', 'Poached Eggs on Toast', 'British', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, ['Vegetarian'], ['new'], 'Two poached eggs with glossy runny yolks on thick buttered toast, seasoned with black pepper and chives'),
  c('pumpkin-roll', 'Pumpkin Roll', 'American', 'Baking', 'Medium', 25, 14, 10, 0, 0, ['Vegetarian'], ['new'], 'A sliced pumpkin roll showing a spiral of spiced orange sponge and white cream cheese filling, dusted with icing sugar'),
  c('shrewsbury-biscuits', 'Shrewsbury Biscuits', 'British', 'Baking', 'Easy', 50, 12, 24, 0, 0, ['Vegetarian'], ['new'], 'A stack of round, crisp, golden Shrewsbury biscuits with fluted edges and a sprinkling of sugar on a cooling rack'),
  c('yogurt-parfait', 'Yogurt Parfait', 'American', 'Breakfast', 'Easy', 10, 0, 2, 0, 0, ['Vegetarian'], ['new'], 'Two tall glasses of layered Greek yoghurt, crunchy granola and fresh strawberries, blueberries and raspberries, with a mint leaf'),
  c('ambrosia-salad', 'Ambrosia Salad', 'American', 'Desserts', 'Easy', 15, 0, 8, 0, 0, [], ['new'], 'A glass bowl of pale ambrosia salad with mandarin segments, pineapple, coconut and mini marshmallows in a creamy dressing'),
  c('arctic-roll', 'Arctic Roll', 'British', 'Desserts', 'Medium', 40, 10, 8, 0, 0, ['Vegetarian'], ['new'], 'A sliced arctic roll with a spiral of pale sponge and raspberry jam around a core of vanilla ice cream, on a plate'),
  c('banana-cream-pie', 'Banana Cream Pie', 'American', 'Desserts', 'Medium', 25, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'A slice of banana cream pie with a biscuit crust, layers of banana and vanilla custard, whipped cream and chocolate shavings'),
  c('butterscotch-pudding', 'Butterscotch Pudding', 'American', 'Desserts', 'Medium', 10, 20, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Glass cups of glossy butterscotch pudding topped with whipped cream and flaky sea salt'),
  c('chocolate-covered-strawberries', 'Chocolate-Covered Strawberries', 'American', 'Desserts', 'Easy', 20, 5, 10, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A tray of glossy dark chocolate-covered strawberries with stems, some drizzled with white chocolate, on baking paper'),
  c('cornflake-tart', 'Cornflake Tart', 'British', 'Desserts', 'Medium', 50, 40, 8, 0, 0, ['Vegetarian'], ['new'], 'A golden cornflake tart in a shortcrust case with a crisp, glossy syrup topping, one slice cut to show a layer of raspberry jam'),
  c('ice-cream-christmas-pudding', 'Ice Cream Christmas Pudding', 'Australian', 'Holiday Specials', 'Medium', 30, 0, 10, 0, 0, ['Vegetarian'], ['new'], 'A frozen ice cream Christmas pudding studded with fruit and chocolate, decorated with fresh cherries and a sprig of holly on a plate'),
  c('ice-cream-sandwiches', 'Ice Cream Sandwiches', 'American', 'Desserts', 'Easy', 25, 11, 8, 0, 0, ['Vegetarian'], ['new'], 'Homemade ice cream sandwiches with soft chocolate chip cookies and vanilla ice cream, with the edges rolled in mini chocolate chips'),
  c('italian-wedding-cookies', 'Italian Wedding Cookies', 'Italian', 'Holiday Specials', 'Easy', 25, 15, 30, 0, 0, ['Vegetarian'], ['new'], 'A plate of round Italian wedding cookies thickly coated in icing sugar like snowballs, with a few cookies broken open'),
  c('nut-roast', 'Nut Roast', 'British', 'Holiday Specials', 'Medium', 30, 60, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'A golden sliced nut roast with a speckled interior of chopped nuts, chestnuts and cranberries, on a board with sage and thyme'),
  c('pineapple-fritters', 'Pineapple Fritters', 'Australian', 'Desserts', 'Easy', 15, 12, 4, 0, 0, ['Vegetarian'], ['new'], 'Golden battered pineapple fritters rolled in cinnamon sugar on a paper-lined plate, with a scoop of vanilla ice cream'),
  c('pumpkin-cheesecake', 'Pumpkin Cheesecake', 'American', 'Holiday Specials', 'Medium', 30, 80, 12, 0, 0, ['Vegetarian'], ['new'], 'A slice of creamy pumpkin cheesecake with a biscuit crust and a smooth orange filling, topped with whipped cream and a dusting of cinnamon'),
  c('puppy-chow', 'Puppy Chow', 'American', 'Desserts', 'Easy', 15, 3, 12, 0, 0, ['Vegetarian'], ['new'], 'A big bowl of puppy chow, square cereal pieces coated in chocolate and peanut butter and dusted thickly with icing sugar'),
  c('rhubarb-custard-pie', 'Rhubarb Custard Pie', 'Canadian', 'Desserts', 'Medium', 40, 60, 8, 0, 0, ['Vegetarian'], ['new'], 'A slice of rhubarb custard pie showing pink rhubarb pieces in a set golden custard inside a flaky crust'),
  c('sussex-pond-pudding', 'Sussex Pond Pudding', 'British', 'Desserts', 'Medium', 30, 240, 6, 0, 0, [], ['new'], 'A steamed suet pudding cut open to show a whole soft lemon in a pool of golden buttery syrup on a deep plate'),
  c('baked-brie', 'Baked Brie', 'French', 'Appetizers', 'Easy', 15, 28, 8, 0, 0, ['Vegetarian'], ['new'], 'A golden puff pastry wrapped baked Brie cut open to show molten cheese, with raspberry jam, crackers and apple slices'),
  c('candied-pecans', 'Candied Pecans', 'American', 'Appetizers', 'Easy', 10, 45, 12, 0, 0, ['Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'A bowl of glossy, cinnamon-sugar candied pecan halves with a crisp coating, beside a salad and a cheese board'),
  c('chex-mix', 'Chex Mix', 'American', 'Appetizers', 'Easy', 10, 60, 16, 0, 0, [], ['new'], 'A large bowl of homemade Chex Mix with square cereal pieces, pretzel sticks and mixed nuts in a golden seasoned coating'),
  c('fried-mushrooms', 'Fried Mushrooms', 'American', 'Appetizers', 'Easy', 15, 15, 4, 0, 0, [], ['new'], 'A plate of golden breaded fried button mushrooms with a small bowl of ranch dip and lemon wedges'),
  c('ham-hock-terrine', 'Ham Hock Terrine', 'British', 'Appetizers', 'Medium', 30, 200, 8, 0, 0, [], ['new'], 'A slice of ham hock terrine showing flaked pink ham in clear jelly with parsley and gherkins, served with piccalilli and toast'),
  c('homemade-potato-crisps', 'Homemade Potato Crisps', 'British', 'Appetizers', 'Medium', 45, 15, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A wire basket of thin golden salt and vinegar potato crisps, still glistening, with a scatter of sea salt'),
  c('hot-lemon-and-honey', 'Hot Lemon and Honey', 'British', 'Drinks', 'Easy', 3, 3, 1, 0, 0, ['Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A glass mug of steaming hot lemon and honey with a lemon slice and a cinnamon stick on a wooden table'),
  c('lemon-lime-and-bitters', 'Lemon, Lime and Bitters', 'Australian', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A tall glass of pale pink lemon, lime and bitters over ice, with a lemon wheel and lime wedge'),
  c('long-island-iced-tea', 'Long Island Iced Tea', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A tall highball glass of Long Island iced tea the colour of strong tea, with ice and a lemon wedge'),
  c('mai-tai', 'Mai Tai', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A Mai Tai in a double old-fashioned glass over crushed ice, garnished with a spent lime shell and a large sprig of mint'),
  c('mimosa', 'Mimosa', 'American', 'Drinks', 'Easy', 3, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A Champagne flute of a pale orange mimosa with fine bubbles and a twist of orange peel, on a brunch table'),
  c('paloma', 'Paloma', 'Mexican', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A tall Paloma cocktail with a salted rim, pink grapefruit juice and ice, with a wedge of grapefruit'),
  c('popcorn-shrimp', 'Popcorn Shrimp', 'American', 'Appetizers', 'Easy', 20, 10, 4, 0, 0, [], ['new'], 'A basket of golden crispy popcorn shrimp with a bowl of cocktail sauce and lemon wedges'),
  c('shirley-temple', 'Shirley Temple', 'American', 'Drinks', 'Easy', 3, 0, 1, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A tall glass of ginger ale with grenadine sinking to the bottom in a red sunset, ice and two maraschino cherries'),
  c('shrimp-remoulade', 'Shrimp Remoulade', 'American', 'Appetizers', 'Easy', 20, 5, 6, 0, 0, ['Dairy-Free'], ['new'], 'A plate of chilled boiled shrimp coated in a pale orange Creole remoulade sauce on shredded lettuce with lemon wedges'),
  c('thai-fish-cakes', 'Thai Fish Cakes', 'Thai', 'Appetizers', 'Medium', 25, 10, 4, 0, 0, ['Dairy-Free', 'Gluten-Free'], ['new'], 'Golden Thai fish cakes on a plate with cucumber slices, sweet chilli sauce and fresh coriander'),
  c('vanilla-latte', 'Vanilla Latte', 'American', 'Drinks', 'Easy', 5, 5, 1, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A large glass mug of vanilla latte with a layer of silky milk foam, a dusting of cinnamon and a shot of espresso showing at the edge'),
  c('watermelon-agua-fresca', 'Watermelon Agua Fresca', 'Mexican', 'Drinks', 'Easy', 10, 0, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free', 'Gluten-Free'], ['new'], 'A tall glass jug of pink watermelon agua fresca with ice, lime wheels and fresh mint, beside a cut watermelon'),
  c('white-russian', 'White Russian', 'American', 'Drinks', 'Easy', 3, 0, 1, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'A White Russian in a short glass over ice, with cream swirling into dark coffee liqueur and vodka'),
  c('zucchini-fries', 'Zucchini Fries', 'American', 'Appetizers', 'Easy', 20, 22, 4, 0, 0, ['Vegetarian'], ['new'], 'A tray of crisp golden baked zucchini fries coated in Parmesan breadcrumbs, with a small bowl of marinara dipping sauce')
];
