/**
 * Weekly Delight — recipe catalog, volume twenty-three.
 * A hundred dishes from Canada, Australia, New Zealand and the regions of the
 * United States that the site did not have.
 *
 * Every dish was tried against the 1,609 recipes already published, with
 * tools/dedupe-candidates.js, before any of it was written. 437 dishes were
 * tried, and 78 turned out to be published already: Boston cream pie, poutine,
 * lamingtons, key lime pie, the Reuben, the tuna melt, chicken fried steak,
 * shrimp and grits, eggs Benedict and a good many more. Of the 359 that were
 * not, these hundred are the ones searched for most and clearest about what
 * they are.
 *
 * The word rules cannot see everything a person sees at once, so a fair number
 * were left out on reading: vanilla slice is the custard slice already here,
 * caramel slice is millionaire's shortbread, pikelets are drop scones, kūmara
 * chips are sweet potato fries, an apple slice is an apple crumble bar, and
 * sugar cream pie and buttermilk pie are cousins of the sugar pie and chess
 * pie in this volume. Rainbow cake is not Australian, and a lamb shank in New
 * Zealand is still a lamb shank.
 *
 * This file is generated from the verified list rather than typed out from it,
 * and `npm run check` fails if two recipes are the same dish.
 *
 * Spread: American 35, Australian 34, Canadian 20, New Zealand 10, French 1.
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
  c('montreal-smoked-meat-sandwich', 'Montreal Smoked Meat Sandwich', 'Canadian', 'Lunch', 'Hard', 30, 360, 8, 0, 0, [], ['new'], 'Montreal smoked meat sandwich hand sliced brisket rye bread yellow mustard dill pickle deli'),
  c('peameal-bacon-sandwich', 'Peameal Bacon Sandwich', 'Canadian', 'Breakfast', 'Medium', 20, 15, 6, 0, 0, [], ['new'], 'Peameal bacon sandwich cornmeal crusted back bacon slices kaiser roll mustard'),
  c('beavertails', 'Beavertails', 'Canadian', 'Desserts', 'Medium', 25, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'Beavertails Canadian fried dough pastry stretched oval cinnamon sugar lemon wedge'),
  c('date-squares', 'Date Squares', 'Canadian', 'Baking', 'Easy', 25, 40, 16, 0, 0, ['Vegetarian'], ['new'], 'Date squares oat crumble layered sticky date filling cut squares parchment'),
  c('pouding-chomeur', 'Pouding Chômeur', 'Canadian', 'Desserts', 'Easy', 15, 45, 6, 0, 0, ['Vegetarian'], ['new'], 'Pouding chomeur Quebec maple pudding cake golden baked in maple cream sauce square dish'),
  c('sugar-pie', 'Sugar Pie', 'Canadian', 'Desserts', 'Medium', 30, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'Sugar pie tarte au sucre Quebec maple brown sugar cream filling golden slice'),
  c('toutons', 'Toutons', 'Canadian', 'Breakfast', 'Easy', 20, 20, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Toutons Newfoundland fried bread dough golden puffy rounds molasses drizzle plate'),
  c('halifax-donair', 'Halifax Donair', 'Canadian', 'Dinner', 'Medium', 25, 75, 6, 0, 0, [], ['new'], 'Halifax donair spiced beef sliced pita tomato onion sweet garlic sauce wrapped'),
  c('bumbleberry-pie', 'Bumbleberry Pie', 'Canadian', 'Desserts', 'Medium', 40, 60, 8, 0, 0, ['Vegetarian'], ['new'], 'Bumbleberry pie double crust mixed berries rhubarb apple slice purple juices lattice'),
  c('cedar-plank-salmon', 'Cedar Plank Salmon', 'Canadian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, ['Gluten-Free', 'Dairy-Free'], ['new'], 'Cedar plank salmon fillet on grill glazed brown sugar Dijon lemon dill charred plank'),
  c('cretons', 'Cretons', 'Canadian', 'Breakfast', 'Easy', 10, 50, 12, 0, 0, [], ['new'], 'Cretons Quebec pork spread in a bowl toast slice mustard pickles breakfast'),
  c('ukrainian-cabbage-rolls', 'Ukrainian Cabbage Rolls', 'Canadian', 'Dinner', 'Medium', 45, 105, 6, 0, 0, [], ['new'], 'Ukrainian cabbage rolls holubtsi baked in tomato sauce sour cream dill casserole'),
  c('flapper-pie', 'Flapper Pie', 'Canadian', 'Desserts', 'Medium', 30, 35, 8, 0, 0, ['Vegetarian'], ['new'], 'Flapper pie graham cracker crust vanilla custard toasted meringue slice on plate'),
  c('wild-rice-soup', 'Wild Rice Soup', 'Canadian', 'Lunch', 'Easy', 20, 60, 6, 0, 0, [], ['new'], 'Wild rice soup creamy chicken carrot celery bowl thyme dark wild rice grains'),
  c('bannock', 'Bannock', 'Canadian', 'Baking', 'Easy', 10, 20, 6, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Bannock Canadian pan fried bread golden wedges cast iron pan jam'),
  c('bloody-caesar', 'Bloody Caesar', 'Canadian', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Dairy-Free'], ['new'], 'Bloody Caesar cocktail tall glass celery salt rim celery stick pickled bean lime'),
  c('hawaiian-pizza', 'Hawaiian Pizza', 'Canadian', 'Dinner', 'Easy', 25, 12, 4, 0, 0, [], ['new'], 'Hawaiian pizza ham pineapple chunks melted mozzarella blistered crust homemade'),
  c('ginger-beef', 'Ginger Beef', 'Canadian', 'Dinner', 'Medium', 25, 20, 4, 0, 0, [], ['new'], 'Ginger beef Calgary crispy beef strips glossy sweet ginger sauce carrot sesame seeds rice'),
  c('maple-glazed-carrots', 'Maple Glazed Carrots', 'Canadian', 'Dinner', 'Easy', 10, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Maple glazed carrots skillet shiny glaze thyme leaves butter orange coins'),
  c('maple-taffy', 'Maple Taffy', 'Canadian', 'Desserts', 'Medium', 5, 10, 8, 0, 0, ['Vegan', 'Vegetarian', 'Gluten-Free', 'Dairy-Free'], ['new'], 'Maple taffy tire d erable hot maple syrup poured on snow rolled on wooden stick'),
  c('vegemite-toast', 'Vegemite Toast', 'Australian', 'Breakfast', 'Easy', 5, 3, 2, 0, 0, ['Vegetarian'], ['new'], 'Vegemite toast fingers buttered hot toast thin dark spread cup of tea'),
  c('fairy-bread', 'Fairy Bread', 'Australian', 'Desserts', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian'], ['new'], 'Fairy bread triangles white bread butter rainbow hundreds and thousands sprinkles party plate'),
  c('cheesymite-scrolls', 'Cheesymite Scrolls', 'Australian', 'Baking', 'Medium', 30, 25, 12, 0, 0, ['Vegetarian'], ['new'], 'Cheesymite scrolls Vegemite cheese baked spiral bread rolls golden melted cheddar tray'),
  c('sausage-sizzle', 'Sausage Sizzle', 'Australian', 'Lunch', 'Easy', 10, 25, 6, 0, 0, [], ['new'], 'Sausage sizzle snag in white bread fried onions tomato sauce barbecue plate'),
  c('steak-sandwich', 'Steak Sandwich', 'Australian', 'Lunch', 'Medium', 15, 30, 4, 0, 0, [], ['new'], 'Australian steak sandwich sliced sirloin caramelised onion rocket tomato Turkish bread'),
  c('aussie-burger', 'Aussie Burger', 'Australian', 'Dinner', 'Medium', 25, 25, 4, 0, 0, [], ['new'], 'Aussie burger with the lot beef patty fried egg bacon beetroot pineapple cheese bun'),
  c('tuna-mornay', 'Tuna Mornay', 'Australian', 'Dinner', 'Easy', 15, 40, 4, 0, 0, [], ['new'], 'Tuna mornay pasta bake cheese sauce peas golden breadcrumb topping baking dish'),
  c('zucchini-slice', 'Zucchini Slice', 'Australian', 'Lunch', 'Easy', 20, 40, 8, 0, 0, [], ['new'], 'Zucchini slice baked squares grated zucchini bacon cheese golden top tin'),
  c('bacon-and-egg-roll', 'Bacon and Egg Roll', 'Australian', 'Breakfast', 'Easy', 5, 10, 2, 0, 0, [], ['new'], 'Bacon and egg roll crusty white roll crisp bacon fried egg sauce cafe breakfast'),
  c('rissoles', 'Rissoles', 'Australian', 'Dinner', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'Rissoles beef mince patties pan fried golden gravy mashed potato peas plate'),
  c('pumpkin-scones', 'Pumpkin Scones', 'Australian', 'Baking', 'Easy', 20, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'Pumpkin scones golden orange tops split with butter Queensland baked tray'),
  c('potato-scallops', 'Potato Scallops', 'Australian', 'Appetizers', 'Medium', 20, 25, 4, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Potato scallops battered fried potato slices golden crisp chip shop paper salt'),
  c('dim-sim', 'Dim Sim', 'Australian', 'Lunch', 'Medium', 40, 15, 6, 0, 0, [], ['new'], 'Australian dim sim pork cabbage dumplings steamed bamboo basket soy chilli sauce'),
  c('mince-on-toast', 'Mince on Toast', 'Australian', 'Dinner', 'Easy', 10, 35, 4, 0, 0, [], ['new'], 'Savoury mince on toast beef mince gravy peas grated cheese buttered toast plate'),
  c('lemonade-scones', 'Lemonade Scones', 'Australian', 'Baking', 'Easy', 10, 15, 8, 0, 0, ['Vegetarian'], ['new'], 'Lemonade scones three ingredient tall golden split jam whipped cream plate'),
  c('chicken-salt', 'Chicken Salt', 'Australian', 'Appetizers', 'Easy', 5, 0, 24, 0, 0, [], ['new'], 'Chicken salt seasoning in a small bowl yellow orange fine salt mix for hot chips'),
  c('cream-buns', 'Cream Buns', 'Australian', 'Baking', 'Medium', 40, 18, 12, 0, 0, ['Vegetarian'], ['new'], 'Australian cream buns soft glazed pink icing split jam whipped cream bakery tray'),
  c('pie-floater', 'Pie Floater', 'Australian', 'Dinner', 'Easy', 15, 75, 4, 0, 0, [], ['new'], 'Pie floater meat pie floating in thick green pea soup tomato sauce bowl Adelaide'),
  c('tim-tam-cheesecake', 'Tim Tam Cheesecake', 'Australian', 'Desserts', 'Easy', 30, 0, 12, 0, 0, ['Vegetarian'], ['new'], 'Tim Tam cheesecake no bake chocolate biscuit crust creamy chocolate filling halved biscuits on top'),
  c('jam-drops', 'Jam Drops', 'Australian', 'Baking', 'Easy', 25, 15, 24, 0, 0, ['Vegetarian'], ['new'], 'Jam drops biscuits soft butter cookies raspberry jam centre cooling rack tin'),
  c('golden-syrup-dumplings', 'Golden Syrup Dumplings', 'Australian', 'Desserts', 'Easy', 10, 25, 4, 0, 0, ['Vegetarian'], ['new'], 'Golden syrup dumplings cooked in a pan of dark caramel syrup served with cream'),
  c('peach-melba', 'Peach Melba', 'French', 'Desserts', 'Medium', 20, 15, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Peach Melba poached peach halves vanilla ice cream raspberry sauce flaked almonds glass'),
  c('hedgehog-slice', 'Hedgehog Slice', 'Australian', 'Desserts', 'Easy', 20, 5, 16, 0, 0, ['Vegetarian'], ['new'], 'Hedgehog slice chocolate biscuit crumb walnuts coconut chocolate topping squares tin'),
  c('neenish-tarts', 'Neenish Tarts', 'Australian', 'Baking', 'Medium', 50, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'Neenish tarts two tone icing half chocolate half white small tarts vanilla cream jam tray'),
  c('lemon-slice', 'Lemon Slice', 'Australian', 'Desserts', 'Easy', 25, 0, 16, 0, 0, ['Vegetarian'], ['new'], 'Lemon slice no bake biscuit coconut condensed milk base lemon icing cut squares'),
  c('lemon-delicious-pudding', 'Lemon Delicious Pudding', 'Australian', 'Desserts', 'Medium', 25, 45, 6, 0, 0, ['Vegetarian'], ['new'], 'Lemon delicious pudding golden sponge top lemon custard sauce underneath baking dish spoon'),
  c('self-saucing-chocolate-pudding', 'Self-Saucing Chocolate Pudding', 'Australian', 'Desserts', 'Easy', 15, 40, 6, 0, 0, ['Vegetarian'], ['new'], 'Self saucing chocolate pudding baked chocolate sponge with glossy sauce underneath dish spoon'),
  c('honey-joys', 'Honey Joys', 'Australian', 'Baking', 'Easy', 10, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'Honey joys cornflakes honey butter baked in paper patty cases golden crunchy party'),
  c('chocolate-crackles', 'Chocolate Crackles', 'Australian', 'Desserts', 'Easy', 15, 3, 24, 0, 0, ['Vegan', 'Vegetarian', 'Dairy-Free'], ['new'], 'Chocolate crackles puffed rice chocolate coconut in paper cases party tray'),
  c('macadamia-nut-cookies', 'Macadamia Nut Cookies', 'Australian', 'Baking', 'Easy', 20, 24, 20, 0, 0, ['Vegetarian'], ['new'], 'Macadamia nut cookies white chocolate chunks chewy golden cookies on baking tray'),
  c('coconut-slice', 'Coconut Slice', 'Australian', 'Baking', 'Easy', 25, 40, 16, 0, 0, ['Vegetarian'], ['new'], 'Coconut slice shortbread base raspberry jam coconut topping pink icing cut squares'),
  c('boiled-fruit-cake', 'Boiled Fruit Cake', 'Australian', 'Baking', 'Easy', 15, 90, 12, 0, 0, ['Vegetarian'], ['new'], 'Boiled fruit cake dense dark fruit cake sliced round tin sultanas raisins currants'),
  c('cinnamon-teacake', 'Cinnamon Teacake', 'Australian', 'Baking', 'Easy', 15, 30, 8, 0, 0, ['Vegetarian'], ['new'], 'Cinnamon teacake round butter cake brushed with butter dusted cinnamon sugar slice'),
  c('chocolate-ripple-cake', 'Chocolate Ripple Cake', 'Australian', 'Desserts', 'Easy', 30, 0, 10, 0, 0, ['Vegetarian'], ['new'], 'Chocolate ripple cake log of chocolate wafer biscuits whipped cream grated chocolate slice'),
  c('melting-moments', 'Melting Moments', 'Australian', 'Baking', 'Medium', 30, 15, 12, 0, 0, ['Vegetarian'], ['new'], 'Melting moments biscuits sandwiched passionfruit buttercream cornflour shortbread pairs plate'),
  c('lolly-cake', 'Lolly Cake', 'New Zealand', 'Desserts', 'Easy', 25, 0, 16, 0, 0, [], ['new'], 'Lolly cake sliced log rolled in coconut pink and white marshmallow pieces malt biscuit'),
  c('louise-cake', 'Louise Cake', 'New Zealand', 'Baking', 'Medium', 30, 35, 16, 0, 0, ['Vegetarian'], ['new'], 'Louise cake raspberry jam layer coconut meringue topping golden squares tray'),
  c('ginger-crunch', 'Ginger Crunch', 'New Zealand', 'Baking', 'Easy', 15, 25, 16, 0, 0, ['Vegetarian'], ['new'], 'Ginger crunch squares crisp ginger shortbread base pale ginger icing cut in a tin'),
  c('boil-up', 'Boil-Up', 'New Zealand', 'Dinner', 'Easy', 20, 90, 6, 0, 0, [], ['new'], 'Boil up Maori pork bones broth potatoes kumara doughboys watercress large bowl'),
  c('mussel-fritters', 'Mussel Fritters', 'New Zealand', 'Lunch', 'Medium', 20, 20, 4, 0, 0, [], ['new'], 'Mussel fritters green lipped mussels golden fried batter lemon wedge sweet chilli sauce'),
  c('feijoa-cake', 'Feijoa Cake', 'New Zealand', 'Baking', 'Easy', 25, 45, 10, 0, 0, ['Vegetarian'], ['new'], 'Feijoa cake golden round cake with pieces of green feijoa fruit cinnamon sugar top slice'),
  c('kumara-gnocchi', 'Kūmara Gnocchi', 'New Zealand', 'Dinner', 'Medium', 30, 60, 4, 0, 0, ['Vegetarian'], ['new'], 'Kumara gnocchi orange sweet potato dumplings brown butter sage leaves parmesan bowl'),
  c('corn-fritters', 'Corn Fritters', 'New Zealand', 'Breakfast', 'Easy', 15, 15, 4, 0, 0, ['Vegetarian'], ['new'], 'Corn fritters golden sweetcorn spring onion stacked with sour cream sweet chilli sauce cafe'),
  c('belgian-biscuits', 'Belgian Biscuits', 'New Zealand', 'Baking', 'Medium', 45, 12, 12, 0, 0, ['Vegetarian'], ['new'], 'Belgian biscuits spiced biscuit sandwiches raspberry jam pink icing glace cherry on top tin'),
  c('date-loaf', 'Date Loaf', 'New Zealand', 'Baking', 'Easy', 20, 50, 10, 0, 0, ['Vegetarian'], ['new'], 'Date loaf sliced dark sticky crumb walnuts loaf tin buttered slice cup of tea'),
  c('cincinnati-chili', 'Cincinnati Chili', 'American', 'Dinner', 'Easy', 15, 105, 6, 0, 0, [], ['new'], 'Cincinnati chili three way spaghetti chili sauce mountain of shredded cheddar oyster crackers'),
  c('chicago-deep-dish-pizza', 'Chicago Deep Dish Pizza', 'American', 'Dinner', 'Medium', 30, 40, 6, 0, 0, [], ['new'], 'Chicago deep dish pizza slice lifted from pan thick golden crust layers of mozzarella sausage chunky tomato'),
  c('detroit-style-pizza', 'Detroit Style Pizza', 'American', 'Dinner', 'Medium', 30, 20, 4, 0, 0, [], ['new'], 'Detroit style pizza rectangular thick crispy caramelised cheese edges stripes of tomato sauce on top'),
  c('chicago-hot-dog', 'Chicago Hot Dog', 'American', 'Lunch', 'Easy', 10, 10, 4, 0, 0, [], ['new'], 'Chicago hot dog poppy seed bun yellow mustard neon green relish tomato wedges pickle spear sport peppers'),
  c('juicy-lucy', 'Juicy Lucy', 'American', 'Dinner', 'Medium', 20, 12, 4, 0, 0, [], ['new'], 'Juicy Lucy burger cut open molten cheese stuffed inside beef patty toasted bun pickles'),
  c('hot-brown', 'Hot Brown', 'American', 'Dinner', 'Medium', 20, 25, 4, 0, 0, [], ['new'], 'Hot Brown open faced turkey sandwich toast Mornay sauce bacon tomato broiled golden bubbling'),
  c('frito-pie', 'Frito Pie', 'American', 'Dinner', 'Easy', 15, 45, 4, 0, 0, [], ['new'], 'Frito pie corn chips topped with beef and pinto bean chili grated cheddar chopped onion in a bowl'),
  c('egg-foo-young', 'Egg Foo Young', 'American', 'Dinner', 'Easy', 15, 20, 4, 0, 0, [], ['new'], 'Egg foo young golden egg patties bean sprouts shrimp brown gravy spring onion plate rice'),
  c('muffuletta', 'Muffuletta', 'American', 'Lunch', 'Easy', 25, 0, 6, 0, 0, [], ['new'], 'Muffuletta sandwich round sesame loaf layered salami ham provolone olive salad cut wedges'),
  c('red-beans-and-rice', 'Red Beans and Rice', 'American', 'Dinner', 'Easy', 25, 165, 6, 0, 0, [], ['new'], 'Red beans and rice creamy kidney beans andouille sausage ham over white rice hot sauce scallions'),
  c('shrimp-boil', 'Shrimp Boil', 'American', 'Dinner', 'Easy', 15, 30, 6, 0, 0, [], ['new'], 'Shrimp boil spread on newspaper shell on shrimp corn on the cob baby potatoes smoked sausage lemon Old Bay'),
  c('hoppin-john', 'Hoppin\' John', 'American', 'Dinner', 'Easy', 15, 65, 6, 0, 0, [], ['new'], 'Hoppin John black eyed peas rice smoked bacon in a bowl scallions hot sauce Southern New Year'),
  c('steamed-clams', 'Steamed Clams', 'American', 'Dinner', 'Easy', 40, 10, 4, 0, 0, [], ['new'], 'Steamed clams opened shells in a bowl with melted butter lemon wedges and broth cup New England'),
  c('succotash', 'Succotash', 'American', 'Dinner', 'Easy', 15, 20, 6, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Succotash lima beans sweetcorn diced red pepper butter skillet parsley side dish bowl'),
  c('corn-pudding', 'Corn Pudding', 'American', 'Dinner', 'Easy', 15, 50, 6, 0, 0, ['Vegetarian'], ['new'], 'Corn pudding baked golden custardy sweetcorn casserole in a baking dish spoon scooped'),
  c('spoonbread', 'Spoonbread', 'American', 'Dinner', 'Medium', 20, 50, 6, 0, 0, ['Vegetarian'], ['new'], 'Spoonbread puffed golden souffle style cornmeal pudding in a baking dish spooned with butter'),
  c('pimento-cheese', 'Pimento Cheese', 'American', 'Appetizers', 'Easy', 10, 0, 8, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Pimento cheese spread in a bowl with crackers celery sticks sharp cheddar pimentos on white bread'),
  c('toasted-ravioli', 'Toasted Ravioli', 'American', 'Appetizers', 'Medium', 25, 20, 6, 0, 0, [], ['new'], 'Toasted ravioli breaded fried golden squares parmesan dusted marinara dipping sauce St Louis'),
  c('oysters-rockefeller', 'Oysters Rockefeller', 'American', 'Appetizers', 'Medium', 30, 15, 4, 0, 0, [], ['new'], 'Oysters Rockefeller on the half shell baked with spinach butter herbs breadcrumb topping bed of rock salt lemon'),
  c('fried-pickles', 'Fried Pickles', 'American', 'Appetizers', 'Easy', 20, 15, 6, 0, 0, ['Vegetarian'], ['new'], 'Fried pickles golden crisp coated dill pickle chips in a basket with ranch dip'),
  c('stuffed-mushrooms', 'Stuffed Mushrooms', 'American', 'Appetizers', 'Easy', 20, 25, 6, 0, 0, ['Vegetarian'], ['new'], 'Stuffed mushrooms baked golden cream cheese parmesan herb filling on a tray parsley'),
  c('jalapeno-poppers', 'Jalapeño Poppers', 'American', 'Appetizers', 'Easy', 25, 25, 6, 0, 0, ['Vegetarian'], ['new'], 'Jalapeno poppers halved peppers stuffed cream cheese cheddar crisp panko topping baked'),
  c('beignets', 'Beignets', 'American', 'Desserts', 'Medium', 25, 20, 8, 0, 0, ['Vegetarian'], ['new'], 'Beignets New Orleans puffed golden fried squares thick blanket of powdered sugar plate'),
  c('indian-pudding', 'Indian Pudding', 'American', 'Desserts', 'Easy', 15, 135, 6, 0, 0, ['Vegetarian'], ['new'], 'Indian pudding New England baked cornmeal molasses pudding dark spiced in a bowl with vanilla ice cream'),
  c('apple-brown-betty', 'Apple Brown Betty', 'American', 'Desserts', 'Easy', 20, 45, 6, 0, 0, ['Vegetarian'], ['new'], 'Apple brown betty baked layers of spiced apple slices buttered breadcrumbs in a dish with cream'),
  c('shoofly-pie', 'Shoofly Pie', 'American', 'Desserts', 'Medium', 35, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'Shoofly pie Pennsylvania Dutch molasses pie with brown sugar crumb topping dark filling slice'),
  c('sweet-potato-pie', 'Sweet Potato Pie', 'American', 'Holiday Specials', 'Medium', 40, 115, 8, 0, 0, ['Vegetarian'], ['new'], 'Sweet potato pie smooth orange spiced custard filling in golden pastry crust slice on plate'),
  c('chess-pie', 'Chess Pie', 'American', 'Desserts', 'Medium', 35, 45, 8, 0, 0, ['Vegetarian'], ['new'], 'Chess pie southern golden set custard pie with slightly crisp crackled top slice in pastry'),
  c('hummingbird-cake', 'Hummingbird Cake', 'American', 'Baking', 'Medium', 40, 35, 12, 0, 0, ['Vegetarian'], ['new'], 'Hummingbird cake two layer banana pineapple pecan cake thick cream cheese frosting toasted pecans slice'),
  c('banana-split', 'Banana Split', 'American', 'Desserts', 'Easy', 15, 5, 4, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Banana split split banana three scoops vanilla chocolate strawberry ice cream chocolate sauce whipped cream cherry'),
  c('root-beer-float', 'Root Beer Float', 'American', 'Drinks', 'Easy', 3, 0, 1, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Root beer float tall glass vanilla ice cream scoops foaming dark root beer straw long spoon'),
  c('bananas-foster', 'Bananas Foster', 'American', 'Desserts', 'Medium', 10, 8, 4, 0, 0, ['Vegetarian'], ['new'], 'Bananas Foster flambe bananas in caramel rum sauce spooned over vanilla ice cream flames pan'),
  c('mint-julep', 'Mint Julep', 'American', 'Drinks', 'Easy', 5, 0, 1, 0, 0, ['Dairy-Free'], ['new'], 'Mint julep silver julep cup frosted crushed ice bourbon mint sprig short straw Kentucky Derby'),
  c('gooey-butter-cake', 'Gooey Butter Cake', 'American', 'Baking', 'Easy', 20, 40, 16, 0, 0, ['Vegetarian'], ['new'], 'Gooey butter cake St Louis golden squares dusted icing sugar soft cream cheese gooey layer tin'),
  c('pralines', 'Pralines', 'American', 'Desserts', 'Medium', 5, 15, 16, 0, 0, ['Vegetarian', 'Gluten-Free'], ['new'], 'Pralines New Orleans creamy pecan pralines on parchment paper soft caramel candy discs')
];
