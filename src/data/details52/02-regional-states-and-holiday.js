'use strict';

/**
 * Volume fifty-two — American regional classics, barbecue, bakes and
 * everyday cooking, second part.
 *
 * Twenty-five dishes by state and region: Pennsylvania chicken corn soup,
 * Maryland crab soup and Smith Island cake, Virginia ham biscuits, beer
 * brats, cherry cobbler, Wisconsin butter burgers, Kentucky Derby pie,
 * Oklahoma onion burgers, Arkansas possum pie, Colorado green chili, Arizona
 * cheese crisp, Navajo fry bread, a California burrito, marionberry pie,
 * Florida grouper sandwiches, Appalachian soup beans and stack cake, Ozark
 * pudding, two Amish bakes, and the holiday turkey brine, ham glaze, glazed
 * ham and cranberry brie bites. Waits of an hour or more are declared as
 * rest. Nutrition is estimated by npm run calc.
 */

module.exports = {
  'pennsylvania-dutch-chicken-corn-soup': {
    d: 'A golden chicken soup with sweetcorn, carrot and celery, thickened with small egg and flour dumplings called rivels.',
    meta: 'Pennsylvania Dutch chicken corn soup: golden chicken soup with sweetcorn, carrot and celery, thickened with small rivel dumplings. Six servings, cooked for 60 minutes.',
    kw: ['pennsylvania dutch chicken corn soup', 'chicken corn soup with rivels', 'chicken corn soup recipe', 'pennsylvania chicken corn soup', 'chicken corn soup with egg dumplings'],
    why: 'Rivels are the whole point. These are tiny, ragged crumbs of dough made by rubbing flour and egg between the fingers, and they drop into the simmering broth to cook in minutes, thickening the soup and giving it a homely, chewy texture that noodles cannot match. Without them it is only a chicken and corn soup.\n\nThe soup starts with bone-in chicken thighs simmered in water with onion and celery, which builds a stock as the meat cooks. Lift the chicken out, shred it and return it to the pot with carrots and sweetcorn. The corn gives sweetness and bright colour. A pinch of turmeric, if you have it, deepens the yellow.\n\n**Rub the rivel dough between your fingertips** so the pieces are no bigger than peas, and scatter them over the surface in a thin stream while stirring. They cook for about 5 minutes. Finish with chopped parsley and a few slices of hard-boiled egg, and season well with salt and pepper.',
    ing: [
      '800 g bone-in chicken thighs',
      '2 litres water',
      '1 onion, chopped',
      '2 celery sticks, sliced',
      '2 carrots, about 200 g, sliced',
      '300 g sweetcorn kernels',
      '1/4 tsp ground turmeric',
      '2 tsp salt',
      '1/2 tsp ground black pepper',
      '2 hard-boiled eggs, chopped',
      '2 tbsp chopped fresh parsley',
      '# Rivels',
      '100 g plain flour',
      '1 egg',
      '1 tbsp milk'
    ],
    st: [
      'Put the chicken, water, onion, celery, salt and pepper in a large pot. Bring to a boil, skim, then simmer for 30 minutes.',
      'Lift out the chicken, remove the skin and bones and shred the meat. Return the meat to the pot with the carrots, corn and turmeric and simmer for 15 minutes.',
      'Rub the flour, egg and milk together with your fingertips into pea-sized crumbs.',
      'Sprinkle the rivels into the simmering soup, stirring, and cook for 5 minutes. Stir in the eggs and parsley and serve.'
    ],
    tips: [
      'Keep the rivels small so they cook through.',
      'Stir the soup as the rivels go in so they do not clump.',
      'Add a splash of water if the soup thickens too much on standing.'
    ],
    pair: ['Crusty bread', 'Saltine crackers', 'Pickled beetroot', 'Green salad'],
    store: 'Keeps in the fridge for 3 days. Thin with water when reheating.',
    nut: [444, 29, 28, 24, 3, 4, 970]
  },

  'maryland-crab-soup': {
    d: 'A tomato-based vegetable soup with lump crab, potatoes, corn and green beans, seasoned with Old Bay.',
    meta: 'Maryland crab soup: a tomato-based vegetable soup with lump crab, potatoes, corn and green beans, seasoned with Old Bay. Six servings, cooked for 60 minutes.',
    kw: ['maryland crab soup', 'maryland crab soup recipe', 'tomato crab soup with vegetables', 'crab soup with old bay', 'vegetable crab soup'],
    why: 'Add the crab last. Maryland crab soup is first a vegetable soup, a tomato and beef stock base with potatoes, carrots, corn and beans, and only then does the crab go in. Crab meat is delicate and cooks in a few minutes, so it needs only to be warmed through, not simmered.\n\nThe soup gets its character from Old Bay seasoning, a blend of celery salt, paprika and pepper made for crab. A tablespoon gives the broth a gentle, peppery warmth that is entirely different from a Mediterranean tomato soup. The vegetables go in by hardness, potatoes and carrots first, then corn and beans.\n\n**Fold the crab in gently at the end** and keep the heat low so the lumps stay whole. Taste and add salt only now, as Old Bay and the stock are both salty. It is better after a rest of 10 minutes off the heat. Ladle into warm bowls with crackers on the side.',
    ing: [
      '1 litre beef stock',
      '400 g tinned chopped tomatoes',
      '1 onion, chopped',
      '2 celery sticks, sliced',
      '2 carrots, about 200 g, diced',
      '300 g potatoes, peeled and diced',
      '150 g sweetcorn kernels',
      '100 g green beans, cut into 2 cm lengths',
      '100 g lima beans',
      '1 tbsp seafood seasoning',
      '1 bay leaf',
      '300 g lump crab meat',
      '1 tbsp Worcestershire sauce'
    ],
    st: [
      'Put the stock, tomatoes, onion, celery, carrots, potatoes, seafood seasoning and bay leaf in a large pot. Bring to a boil and simmer for 25 minutes.',
      'Add the sweetcorn, green beans and lima beans and simmer for 20 minutes more until all the vegetables are tender.',
      'Stir in the Worcestershire sauce. Fold in the crab meat and warm through gently for 5 minutes without boiling.',
      'Remove the bay leaf, taste for salt and serve hot.'
    ],
    tips: [
      'Pick over the crab for any pieces of shell.',
      'Do not boil the soup after the crab goes in.',
      'Use more stock for a thinner soup, less for a thicker one.'
    ],
    pair: ['Saltine crackers', 'Crusty bread', 'Cornbread', 'Green salad'],
    store: 'Keeps in the fridge for 2 days. Reheat gently.',
    nut: [186, 15, 27, 2, 5, 6, 1170]
  },

  'smith-island-cake': {
    d: 'Six thin yellow cake layers sandwiched with a cooked chocolate fudge frosting that soaks into the sponge.',
    meta: 'Smith Island cake: six thin yellow cake layers sandwiched with a cooked chocolate fudge frosting that soaks into the sponge. Twelve servings, cooked for 30 minutes.',
    kw: ['smith island cake', 'smith island cake recipe', 'maryland layer cake with fudge frosting', 'thin layer chocolate cake', 'smith island cake with cooked frosting'],
    why: 'Count the layers. A Smith Island cake is made from many thin layers of yellow sponge, here six, each spread with a cooked fudge frosting that is poured on warm and soaks slightly into the cake. The result is tall and striped, and every forkful has more frosting than a conventional cake would give you.\n\nThe sponge is a basic butter cake, made in one bowl, and baked in thin layers. It does best in 20 cm tins, with 120 g of batter in each; weigh it to keep the layers even. The layers bake in 10 minutes and need no more than a light golden colour. Overbaking makes them dry and brittle.\n\n**Make the frosting while the layers cool** and keep it warm. It is sugar, cocoa, butter and evaporated milk, boiled for a few minutes and beaten smooth. Spread it thinly between the layers while it is still pourable, then pile on the rest. It sets as it cools to a fudgy finish that holds the cake together.',
    ing: [
      '300 g plain flour',
      '300 g caster sugar',
      '2 tsp baking powder',
      '1/2 tsp salt',
      '170 g butter, softened',
      '4 eggs',
      '240 ml milk',
      '2 tsp vanilla extract',
      '# Fudge frosting',
      '400 g caster sugar',
      '40 g unsweetened cocoa powder',
      '100 g butter',
      '200 ml evaporated milk',
      '1 tsp vanilla extract'
    ],
    st: [
      'Heat the oven to 180°C. Grease and line three 20 cm tins. Beat the butter and 300 g sugar until pale. Beat in the eggs one at a time, then the vanilla.',
      'Mix the flour, baking powder and salt. Fold into the butter mixture alternately with the milk until smooth. Divide the batter into six equal portions.',
      'Bake three layers at a time, in the tins, for 10 minutes each until pale gold. Cool on racks, then bake the remaining batter in the same way.',
      'For the frosting, boil the 400 g sugar, cocoa, butter and evaporated milk in a saucepan for 5 minutes, stirring. Take off the heat, stir in the vanilla and beat until smooth and spreadable.',
      'Stack the layers, spreading each with frosting while it is warm, and finish with the remaining frosting on top and around the sides. Leave to set.'
    ],
    tips: [
      'Weigh the batter so that the layers come out the same thickness.',
      'Keep the frosting warm and spread it fast; it thickens as it cools.',
      'Cut the cake with a hot, wet knife for neat slices.'
    ],
    pair: ['Cold milk', 'Black coffee', 'Vanilla ice cream', 'Fresh strawberries'],
    store: 'Keeps in an airtight container for 3 days.',
    nut: [563, 7, 82, 23, 2, 61, 230]
  },

  'virginia-ham-biscuits': {
    d: 'Small, tender buttermilk-style biscuits split and filled with thin slices of salty Virginia ham and a little mustard butter.',
    meta: 'Virginia ham biscuits: small, tender biscuits split and filled with thin slices of salty ham and a little mustard butter. Twelve servings, cooked for 15 minutes.',
    kw: ['virginia ham biscuits', 'ham biscuits recipe', 'southern ham biscuits', 'small biscuits with ham and mustard butter', 'ham biscuits for a party'],
    why: 'The smell of hot biscuits is the first thing you notice, butter and flour browning in a hot oven. Virginia ham biscuits are a Southern party food, small enough to eat in two bites and filled with ham that is thin, salty and rich. They appear on buffet tables at weddings, holidays and open houses.\n\nThe biscuits have to be tender, and the secret is cold butter and a light hand. Cut the butter into the flour until it forms pea-sized pieces, then add the milk all at once and stir until the dough just comes together. It should look rough. Pat it out, fold it twice, cut it into rounds and bake at once.\n\n**Do not twist the cutter** as you press it down, because that seals the edges and stops the biscuits rising. Split them while still warm, spread with mustard butter and fill with the ham. The saltiness of the ham is balanced by the butter, and the biscuit is soft enough to give way at a bite.',
    ing: [
      '300 g plain flour',
      '1 tbsp baking powder',
      '1/2 tsp salt',
      '100 g cold butter, diced',
      '200 ml milk',
      '200 g thinly sliced cooked ham',
      '# Mustard butter',
      '50 g butter, softened',
      '1 tbsp Dijon mustard'
    ],
    st: [
      'Heat the oven to 220°C. Mix the flour, baking powder and salt. Rub in the cold butter until the mixture looks like coarse crumbs.',
      'Add the milk and stir until just combined. Turn onto a floured surface, pat to 2 cm thick and fold in half twice.',
      'Pat out again to 2 cm and cut 12 rounds with a 5 cm cutter, pressing straight down. Bake on a lined tray for 15 minutes until golden.',
      'Mix the softened butter and mustard. Split the warm biscuits, spread with mustard butter and fill with ham.'
    ],
    tips: [
      'Keep the butter cold until the moment it goes in the oven.',
      'Handle the dough as little as possible.',
      'Warm the ham slightly if you can, since it tastes better.'
    ],
    pair: ['Pickles', 'Fruit salad', 'Deviled eggs', 'Hot coffee'],
    store: 'Best eaten warm. Unfilled biscuits keep for 1 day in an airtight tin.',
    nut: [212, 6, 20, 12, 1, 1, 460]
  },

  'beer-brats': {
    d: 'Bratwurst simmered in beer and onions, then browned in a pan and served in buns with mustard and the softened onions.',
    meta: 'Beer brats: bratwurst simmered in beer and onions, then browned in a pan and served in buns with mustard. Six servings, cooked for 30 minutes.',
    kw: ['beer brats', 'beer bratwurst', 'beer brats recipe', 'bratwurst simmered in beer', 'brats with beer and onions'],
    why: 'Most beer brats split and dry out, and the fix is to simmer them, not boil them. A hard boil makes the casings burst, and the fat and juices run into the beer. Held just under a simmer, the sausages cook through gently, taking on the malt and onion flavour of the liquid as they do.\n\nThe onions go into the same pan, sliced thickly, with a little butter. As the beer heats, they soften and sweeten. Use a lager or a pale ale; very hoppy beers turn bitter when reduced. Brown the brats only after simmering, in a dry pan or on a grill, until the skins blister and darken, which takes about 10 minutes.\n\n**Serve them in soft buns** with plenty of the beer-soaked onions and strong mustard. The sausage is the star, but the onions are what everyone remembers. Do not prick the skins at any stage; that lets the juices out.',
    ing: [
      '700 g bratwurst, 6 sausages',
      '330 ml lager',
      '2 onions, thickly sliced',
      '20 g butter',
      '6 bread rolls, about 300 g',
      '4 tbsp strong mustard',
      '1/2 tsp ground black pepper'
    ],
    st: [
      'Melt the butter in a wide pan. Cook the onions for 5 minutes until starting to soften.',
      'Add the beer and the bratwurst. Bring just to a simmer, cover and cook for 15 minutes, turning once.',
      'Lift out the sausages. Boil the liquid uncovered for 3 minutes until it reduces and the onions are glossy. Season with pepper.',
      'Brown the sausages in a hot dry pan for 7 minutes, turning, until the skins are dark. Serve in the rolls with the onions and mustard.'
    ],
    tips: [
      'Do not prick the sausages.',
      'Keep the beer at a simmer, never a rolling boil.',
      'Toast the rolls in the pan for a minute for extra texture.'
    ],
    pair: ['Sauerkraut', 'Potato salad', 'Coleslaw', 'Cold lager'],
    store: 'Keeps in the fridge for 3 days. Reheat in a pan.',
    nut: [517, 21, 34, 33, 3, 5, 1290]
  },

  'cherry-cobbler': {
    d: 'A bubbling cherry filling under a golden drop-biscuit topping, baked until the fruit juices ooze up around the edges.',
    meta: 'Cherry cobbler: a bubbling cherry filling under a golden drop-biscuit topping. Eight servings, cooked for 40 minutes.',
    kw: ['cherry cobbler', 'cherry cobbler recipe', 'easy cherry cobbler with biscuit topping', 'fresh cherry cobbler', 'cherry cobbler with drop biscuits'],
    why: 'Why does a cobbler topping sometimes stay doughy underneath? Because the fruit is cold when the dough lands on top of it. Heat the cherries first, until they are steaming, and the underside of the biscuit starts to cook at once instead of sinking into the juices.\n\nThe filling is simple: cherries, sugar, cornflour, lemon juice and a drop of almond extract. Almond is the natural partner of cherries and reinforces their flavour without being obvious. The cornflour thickens the juices so they bubble into a syrup rather than running thin. Use pitted cherries, fresh or frozen.\n\nThe topping is a drop biscuit dough, made in a few minutes with cold butter. **Spoon it over in rough mounds**, leaving gaps so the fruit shows through and the steam can escape. A sprinkle of sugar on top gives a crisp crust. Bake until the top is deep gold and the juices bubble around the edges, then let it stand for 10 minutes.',
    ing: [
      '800 g pitted cherries',
      '100 g caster sugar',
      '2 tbsp cornflour',
      '1 tbsp lemon juice',
      '1/2 tsp almond extract',
      '# Topping',
      '180 g plain flour',
      '50 g caster sugar',
      '2 tsp baking powder',
      '1/4 tsp salt',
      '80 g cold butter, diced',
      '120 ml milk',
      '1 tbsp caster sugar, for sprinkling'
    ],
    st: [
      'Heat the oven to 190°C. Toss the cherries with 100 g sugar, the cornflour, lemon juice and almond extract. Heat in a pan for 5 minutes until steaming, then pour into a 23 cm baking dish.',
      'Mix the flour, 50 g sugar, baking powder and salt. Rub in the butter until it looks like coarse crumbs.',
      'Stir in the milk to a soft dough. Drop spoonfuls over the hot fruit and sprinkle with the 1 tbsp sugar.',
      'Bake for 35 minutes until the topping is golden and the juices bubble. Stand for 10 minutes.'
    ],
    tips: [
      'Heat the fruit before adding the topping.',
      'Leave gaps between the mounds so steam can escape.',
      'Stand a baking tray under the dish to catch any bubbling over.'
    ],
    pair: ['Vanilla ice cream', 'Double cream', 'Custard', 'Hot coffee'],
    store: 'Keeps in the fridge for 3 days. Reheat in a warm oven.',
    nut: [321, 4, 56, 9, 3, 34, 200]
  },

  'wisconsin-butter-burgers': {
    d: 'Beef burgers cooked on a hot pan with a little butter, served in toasted buns with more butter and soft sautéed onions.',
    meta: 'Wisconsin butter burgers: beef burgers cooked with butter, served in butter-toasted buns with soft onions. Four servings, cooked for 15 minutes.',
    kw: ['wisconsin butter burgers', 'butter burger', 'butter burger recipe', 'wisconsin style butter burger', 'beef burgers with butter toasted buns'],
    why: 'Butter on a burger sounds like too much, and then you taste it. The butter burger is a Wisconsin tradition, and it works because butter does three jobs: it toasts the bun to a golden crunch, it sweetens the onions as they soften, and it melts into the beef so each bite is rich without being heavy.\n\nStart with mince that is 20 per cent fat, shaped into loose balls and pressed thin in the pan. Season them only at the moment they hit the heat, or the salt draws moisture out of the meat. Use a hot, heavy frying pan and cook them for 2 to 3 minutes a side.\n\n**Toast the buns in the same pan**, cut side down, with a knob of butter, until they are golden. Put a small pat of butter on each patty as it rests. Pile the onions on top, which have been cooking slowly in butter until sweet, and add pickle slices and a smear of mustard. It is an everyday burger, and a very good one.',
    ing: [
      '600 g beef mince, 20 per cent fat',
      '60 g butter',
      '2 onions, about 300 g, thinly sliced',
      '4 burger buns, about 240 g',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '30 g dill pickle slices',
      '2 tbsp yellow mustard'
    ],
    st: [
      'Melt 20 g of the butter in a pan and cook the onions over medium heat for 8 minutes until soft and golden. Keep warm.',
      'Divide the beef into 4 balls. Heat a heavy pan until very hot and press each ball flat. Season with salt and pepper and cook for 3 minutes on each side.',
      'Split the buns and toast them cut side down in 20 g of the butter for 1 minute until golden.',
      'Top each burger with 5 g of the remaining butter, the onions, pickles and mustard, and serve in the buns.'
    ],
    tips: [
      'Do not overwork the meat; handle it lightly.',
      'Season the patties just as they go in the pan.',
      'Rest the burgers for a minute before building them.'
    ],
    pair: ['Chips', 'Coleslaw', 'Milkshake', 'Onion rings'],
    store: 'Best eaten straight away.',
    nut: [625, 35, 38, 37, 3, 8, 1170]
  },

  'kentucky-derby-pie': {
    d: 'A pie of chocolate chips and walnuts in a rich, gooey filling of eggs, butter and sugar, with a splash of bourbon.',
    meta: 'Kentucky Derby pie: a pie of chocolate chips and walnuts in a rich, gooey filling of eggs, butter and sugar with a splash of bourbon. Eight servings, cooked for 45 minutes.',
    kw: ['kentucky derby pie', 'derby pie recipe', 'chocolate walnut pie with bourbon', 'kentucky chocolate nut pie', 'chocolate and walnut pie'],
    why: 'It is a pecan pie with chocolate and walnuts, and a spoonful of bourbon in the filling. That is a fair summary, and the closer comparison is to a brownie baked in a pastry shell: a rich, sweet filling with a crackly top and a gooey middle, packed with chunks of chocolate and nut.\n\nThe filling is easy. Melted butter, sugar, eggs, a little flour and vanilla are whisked together, then the walnuts and chocolate chips are stirred in. Bourbon is optional, but a tablespoon brings an oaky warmth that cuts the sugar. Do not overbeat the eggs; you want a smooth batter, not a foamy one.\n\n**Bake until the top is set and cracked**, with just a slight wobble in the centre. It will firm up as it cools. Let the pie cool for at least an hour before slicing, or the filling will run. Serve a small slice, warm or at room temperature, with whipped cream or vanilla ice cream, as it is very rich.',
    ing: [
      '320 g ready-made shortcrust pastry',
      '75 g butter, melted and cooled',
      '150 g caster sugar',
      '2 eggs',
      '30 g plain flour',
      '1 tbsp bourbon',
      '1 tsp vanilla extract',
      '1/4 tsp salt',
      '150 g dark chocolate chips',
      '100 g walnuts, roughly chopped'
    ],
    st: [
      'Heat the oven to 175°C. Roll out the pastry and line a 23 cm pie dish. Prick the base and chill while you make the filling.',
      'Whisk the melted butter, sugar, eggs, flour, bourbon, vanilla and salt until smooth.',
      'Scatter the chocolate and walnuts over the pastry and pour the filling over.',
      'Bake for 45 minutes until the top is set and cracked. Cool for at least 1 hour before cutting.'
    ],
    tips: [
      'Cool the melted butter so it does not scramble the eggs.',
      'Cover the edge with foil if it browns too quickly.',
      'Slice with a hot knife for clean edges.'
    ],
    pair: ['Whipped cream', 'Vanilla ice cream', 'Black coffee', 'Fresh raspberries'],
    store: 'Keeps in the fridge for 3 days. Serve at room temperature.',
    nut: [542, 7, 52, 34, 3, 29, 330],
    rest: [60, 'Cooling']
  },

  'oklahoma-onion-burger': {
    d: 'Small balls of beef pressed into a mound of paper-thin onions on a hot griddle, so the onions cook into the patty.',
    meta: 'Oklahoma onion burger: small balls of beef pressed into a mound of paper-thin onions on a hot griddle. Four servings, cooked for 10 minutes.',
    kw: ['oklahoma onion burger', 'onion burger', 'onion burger recipe', 'smashed onion burger', 'burgers pressed into thin sliced onions'],
    why: 'Beef, onions and a hot pan: that is all it is. The onion burger is an Oklahoma original, and the cook pushes a ball of mince into a heap of thinly sliced onions on the griddle, so the onions stick to the meat and cook in its fat. As they soften and brown they turn sweet and savoury at once.\n\nThe onions must be sliced very thin, almost translucent, ideally on a mandoline. Thick slices will not cook in the 3 minutes the burger takes. Use a large yellow onion, and pile it up loose, about 75 g per burger. The mince should be shaped into balls and pressed hard with a spatula as soon as they hit the pan.\n\n**Flip the burger when the edges are lacy and brown** and the onions have darkened. Cook the other side for another minute, and serve in a soft bun with mustard and pickles. The thin patty and the cooked onions give a sweet, almost caramelised flavour you cannot get from a thicker burger.',
    ing: [
      '400 g beef mince, 20 per cent fat',
      '2 large onions, about 300 g, sliced paper-thin',
      '4 burger buns, about 240 g',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '1 tbsp vegetable oil',
      '30 g dill pickle slices',
      '2 tbsp yellow mustard'
    ],
    st: [
      'Divide the beef into 4 loose balls. Pile the onions into 4 mounds.',
      'Heat the oil in a heavy frying pan or griddle until very hot. Place a ball of beef on top of each mound of onion and press down very hard with a spatula to flatten. Season with salt and pepper.',
      'Cook for 3 minutes until the edges are brown and lacy. Flip and cook for 2 minutes more.',
      'Toast the buns lightly in the pan, then build the burgers with pickles and mustard.'
    ],
    tips: [
      'Slice the onions as thinly as you can.',
      'Press the meat hard in the first seconds; it will not spread later.',
      'Use a very hot pan so the onions brown rather than steam.'
    ],
    pair: ['Chips', 'Coleslaw', 'Milkshake', 'Pickles'],
    store: 'Best eaten straight away.',
    nut: [445, 26, 38, 21, 3, 8, 1130]
  },

  'arkansas-possum-pie': {
    d: 'A layered pie with a pecan shortbread base, a cream cheese layer, chocolate pudding and whipped cream.',
    meta: 'Arkansas possum pie: a layered pie with a pecan shortbread base, a cream cheese layer, chocolate pudding and whipped cream. Ten servings, chilled for 4 hours.',
    kw: ['arkansas possum pie', 'possum pie recipe', 'layered chocolate pecan pie', 'pecan crust chocolate cream pie', 'possum pie with cream cheese layer'],
    why: 'A Sunday dish for a table of ten, and better after a night in the fridge. Possum pie is a layered dessert from the American South, with four layers stacked in one dish: a buttery pecan shortbread crust, a sweet cream cheese filling, a chocolate pudding and a crown of whipped cream.\n\nThe crust is rubbed together from flour, butter, sugar and chopped pecans and baked until just golden. Cool it completely before adding anything, or the cream cheese layer will slump. The cream cheese is beaten with icing sugar until fluffy, then spread thinly. The chocolate layer is a homemade pudding, cooked on the hob until thick.\n\n**Cool the pudding to lukewarm** before spreading it over the cream cheese, so it does not melt the layer below. Then chill the pie for at least 4 hours before topping with whipped cream and a scatter of chopped pecans. Each slice should show the layers clearly, and the contrast of crunchy, creamy and silky is the point.',
    ing: [
      '150 g plain flour',
      '100 g butter, softened',
      '2 tbsp caster sugar',
      '60 g pecans, finely chopped',
      '# Cream cheese layer',
      '250 g cream cheese, softened',
      '100 g icing sugar',
      '# Chocolate layer',
      '60 g caster sugar',
      '30 g cornflour',
      '20 g unsweetened cocoa powder',
      '500 ml whole milk',
      '2 egg yolks',
      '1 tsp vanilla extract',
      '# Topping',
      '200 ml double cream',
      '1 tbsp icing sugar',
      '30 g pecans, chopped'
    ],
    st: [
      'Heat the oven to 175°C. Rub the flour, butter, caster sugar and 60 g pecans into a dough and press into a 23 cm pie dish. Bake for 12 minutes until golden. Cool completely.',
      'Beat the cream cheese and 100 g icing sugar until smooth and spread over the cooled crust.',
      'Whisk the 60 g sugar, cornflour and cocoa with the milk and egg yolks in a pan. Cook over medium heat, whisking, for 8 minutes until thick. Stir in the vanilla and cool to lukewarm. Spread over the cream cheese layer.',
      'Chill for 4 hours. Whip the cream with the 1 tbsp icing sugar, spread on top and scatter with the chopped pecans.'
    ],
    tips: [
      'Cool each layer before adding the next.',
      'Whisk the pudding constantly so it does not catch.',
      'Dip a knife in hot water to cut tidy slices.'
    ],
    pair: ['Hot coffee', 'Cold milk', 'Fresh strawberries', 'Vanilla ice cream'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [489, 8, 40, 33, 2, 24, 120],
    rest: [240, 'Chilling']
  },

  'colorado-green-chili': {
    d: 'A thick pork stew of green chillies, tomatillos, onion and garlic, simmered until the meat is tender and the sauce coats a spoon.',
    meta: 'Colorado green chili: a thick pork stew of green chillies, tomatillos, onion and garlic, simmered until tender. Six servings, cooked for 90 minutes.',
    kw: ['colorado green chili', 'green chili pork stew', 'colorado green chili recipe', 'pork green chile stew', 'green chilli with tomatillos'],
    why: 'This is what to make in the first cold week of autumn, when a pot on the stove starts to feel like the point of the evening. Colorado green chili is a pork stew rather than a bean-and-beef chilli con carne, thick with green chillies and tomatillos, and eaten with a flour tortilla to mop up the sauce.\n\nThe pork is cubed shoulder, which has enough fat to stay tender through 90 minutes of simmering. Brown it well first, since the browned crust gives the green sauce a savoury base. Onion and garlic follow, then flour, which thickens the stew, and then chicken stock, tomatillos and green chillies. Cumin and oregano round out the flavour.\n\n**Simmer with the lid slightly ajar** so the sauce reduces and thickens. The finished chili should be somewhere between a soup and a stew. Taste for salt and for heat at the end, adding fresh chilli if you want more. Serve in bowls with warm tortillas, a squeeze of lime and chopped coriander.',
    ing: [
      '800 g pork shoulder, cut into 3 cm cubes',
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '4 garlic cloves, crushed',
      '2 tbsp plain flour',
      '750 ml chicken stock',
      '400 g tinned green chillies, drained and chopped',
      '300 g tomatillos, chopped',
      '2 tsp ground cumin',
      '1 tsp dried oregano',
      '1 tsp salt',
      '2 tbsp chopped fresh coriander',
      '1 lime'
    ],
    st: [
      'Heat the oil in a heavy pot and brown the pork in batches for 8 minutes. Lift out.',
      'Cook the onion in the same pot for 5 minutes. Add the garlic, flour, cumin and oregano and cook for 1 minute.',
      'Pour in the stock, scraping up the browned bits. Add the pork, green chillies, tomatillos and salt.',
      'Bring to a boil, then simmer with the lid slightly ajar for 75 minutes, stirring now and then, until the pork is tender and the sauce is thick. Stir in the coriander and a squeeze of lime.'
    ],
    tips: [
      'Brown the pork in batches so it sears, not steams.',
      'Stir from the bottom as the sauce thickens.',
      'Add water if the stew gets too thick.'
    ],
    pair: ['Flour tortillas', 'Steamed rice', 'Sour cream', 'Grated cheese'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 3 months.',
    nut: [397, 28, 15, 25, 3, 6, 890]
  },

  'arizona-cheese-crisp': {
    d: 'A large flour tortilla topped with melted Monterey Jack and green chillies, crisped until bubbling and golden.',
    meta: 'Arizona cheese crisp: a large flour tortilla topped with melted Monterey Jack and green chillies, crisped until bubbling and golden. Two servings, cooked for 8 minutes.',
    kw: ['arizona cheese crisp', 'cheese crisp recipe', 'cheese crisp with green chiles', 'crisp tortilla with melted cheese', 'arizona cheese crisp tortilla'],
    why: 'Flour tortilla, cheese, a hot oven. Four minutes is enough to turn a large soft tortilla into a crisp, golden disc with a bubbling topping, which is the snack called a cheese crisp in Arizona. It is not quite a pizza and not quite a quesadilla, and it takes less time than either.\n\nThe tortilla gets a brush of oil on one side and goes in the oven on its own for a few minutes, which firms it up. Then it gets the cheese, usually Monterey Jack or a mild cheddar, and a spoonful of chopped green chillies. A second stint in the oven melts the cheese and browns the edges.\n\n**Watch it closely in the final minutes.** The edges can go from golden to burnt very fast, and the cheese should be bubbling and just speckled with brown, not dark. Cut the crisp into wedges with a pizza cutter while it is hot. Serve with salsa for dipping and a squeeze of lime.',
    ing: [
      '2 large flour tortillas, about 100 g',
      '2 tsp vegetable oil',
      '150 g Monterey Jack, grated',
      '40 g tinned green chillies, drained and chopped',
      '1/4 tsp ground cumin',
      '4 tbsp salsa'
    ],
    st: [
      'Heat the oven to 230°C. Brush one side of each tortilla with the oil and put them oiled side up on a baking tray. Bake for 3 minutes.',
      'Scatter with the cheese, green chillies and cumin. Bake for 5 minutes until the cheese is bubbling and the edges are golden.',
      'Cut into wedges with a pizza cutter and serve with the salsa.'
    ],
    tips: [
      'Use a thin tortilla; thick ones stay chewy.',
      'Press the cheese to the edges so they crisp too.',
      'Serve hot, as it softens as it cools.'
    ],
    pair: ['Salsa', 'Guacamole', 'Sour cream', 'Lime wedges'],
    store: 'Best eaten straight away.',
    nut: [487, 23, 29, 31, 2, 4, 1000]
  },

  'navajo-fry-bread': {
    d: 'Rounds of yeast-free dough stretched thin and fried in hot oil until puffed and golden, crisp at the edges and soft in the centre.',
    meta: 'Navajo fry bread: rounds of yeast-free dough stretched thin and fried until puffed and golden, crisp at the edges and soft inside. Six servings, cooked for 15 minutes.',
    kw: ['navajo fry bread', 'fry bread recipe', 'indian fry bread', 'fry bread with baking powder', 'puffy fried dough bread'],
    why: 'Do not over-knead the dough. Fry bread is a simple mix of flour, baking powder, salt and water, and the longer you work it, the tougher it gets. Mix it until it just comes together into a soft, slightly sticky ball, then let it rest under a cloth for 30 minutes. That rest makes the dough easy to stretch and tender when cooked.\n\nDivide it into 6 pieces and pat or stretch each one into a round about 15 cm across, thinner in the middle than at the edge. Poke a small hole in the centre of each, which helps it cook evenly and stops it ballooning. The oil needs to be hot, about 180°C, so the dough puffs and browns quickly without soaking up fat.\n\n**Fry for about 1 to 2 minutes a side**, turning once, until deep gold with a few dark blisters. Drain on paper. Serve it hot as bread, with honey or powdered sugar, or as the base for toppings such as chilli, beans, cheese and lettuce.',
    ing: [
      '300 g plain flour',
      '2 tsp baking powder',
      '1 tsp salt',
      '180 ml warm water',
      '300 ml vegetable oil, for frying'
    ],
    st: [
      'Mix the flour, baking powder and salt. Stir in the warm water to a soft dough. Knead for 1 minute only, then cover and rest for 30 minutes.',
      'Divide into 6 pieces. Pat or stretch each into a round about 15 cm across, with a small hole in the centre.',
      'Heat the oil to 180°C in a wide, deep pan. Fry the rounds one at a time for 2 minutes on each side until puffed and golden.',
      'Drain on kitchen paper and serve hot.'
    ],
    tips: [
      'Rest the dough so it stretches without springing back.',
      'Keep the oil at 180°C; cooler oil makes greasy bread.',
      'Fry one round at a time so the oil temperature stays up.'
    ],
    pair: ['Honey', 'Chilli', 'Beans and cheese', 'Powdered sugar'],
    store: 'Best eaten hot, on the day it is made.',
    nut: [595, 5, 38, 47, 2, 0, 560]
  },

  'california-burrito': {
    d: 'A large flour tortilla filled with grilled steak, chips, melted cheese, guacamole and sour cream, as made in San Diego.',
    meta: 'California burrito: a large flour tortilla filled with grilled steak, chips, melted cheese, guacamole and sour cream. Four servings, cooked for 15 minutes.',
    kw: ['california burrito', 'california burrito recipe', 'carne asada fries burrito', 'steak and fries burrito', 'san diego california burrito'],
    why: 'Steak, chips, cheese, guacamole and sour cream: five things in one tortilla, and one of them is fries. The California burrito is a San Diego invention that puts carne asada, the salsa and the chips of a loaded fries plate into a hand-held wrapper, and the contrast of crisp potato against soft meat and cool avocado is what makes it work.\n\nThe steak is seasoned with lime juice, garlic and cumin and seared in a very hot pan for a few minutes a side. Rest it, then slice it thinly across the grain. The fries can be baked from frozen while the steak cooks. Guacamole is a mashed avocado with lime and salt, and a quick pico de gallo of tomato, onion and coriander adds freshness.\n\n**Warm the tortillas before filling** so they fold without cracking. Layer the fries first, then the steak, cheese while the fries are still hot to melt it, and finally the guacamole, pico and sour cream. Fold in the sides and roll tightly. Eat at once, or the chips soften.',
    ing: [
      '400 g rump steak',
      '1 tbsp lime juice',
      '2 garlic cloves, crushed',
      '1 tsp ground cumin',
      '1/2 tsp salt',
      '1 tbsp vegetable oil',
      '400 g frozen straight-cut fries',
      '4 large flour tortillas, about 240 g',
      '100 g Monterey Jack, grated',
      '80 g sour cream',
      '# Guacamole',
      '1 avocado, about 150 g',
      '1 tbsp lime juice',
      '1/4 tsp salt',
      '# Pico de gallo',
      '1 tomato, about 125 g, diced',
      '1/4 onion, about 40 g, finely diced',
      '2 tbsp chopped fresh coriander'
    ],
    st: [
      'Heat the oven to 220°C and bake the fries for 15 minutes. Rub the steak with the lime juice, garlic, cumin and salt.',
      'Heat the oil in a frying pan over high heat and cook the steak for 3 minutes on each side. Rest for 5 minutes, then slice thinly.',
      'Mash the avocado with the lime juice and salt. Mix the tomato, onion and coriander.',
      'Warm the tortillas in a dry pan. Fill each with fries, steak, cheese, guacamole, pico de gallo and sour cream. Roll tightly and serve.'
    ],
    tips: [
      'Slice the steak against the grain.',
      'Put the cheese on the hot fries so it melts.',
      'Do not overfill the tortillas; they will not close.'
    ],
    pair: ['Salsa', 'Lime wedges', 'Cold beer', 'Refried beans'],
    store: 'Best eaten straight away.',
    nut: [790, 37, 66, 42, 8, 5, 1340]
  },

  'marionberry-pie': {
    d: 'A double-crust pie of juicy marionberries, a trailing blackberry from Oregon, with a thick, glossy filling.',
    meta: 'Marionberry pie: a double-crust pie of juicy marionberries with a thick, glossy filling. Eight servings, cooled for 2 hours, cooked for 50 minutes.',
    kw: ['marionberry pie', 'oregon marionberry pie', 'marionberry pie recipe', 'marionberry pie with double crust', 'berry pie with marionberries'],
    why: 'What is a marionberry, and does it matter in a pie? It does. Marionberries are a type of blackberry, grown in Oregon, that are sweeter, more aromatic and less seedy than ordinary blackberries, with a deep wine-like flavour. If you cannot find them, blackberries are the nearest substitute, and the recipe is the same.\n\nThe filling is just fruit, sugar, cornflour and a little lemon juice. Berries release a lot of liquid as they cook, so the cornflour is essential: it turns the juices into a thick, glossy sauce that holds when the pie is cut. Toss the fruit gently, because crushed berries make the filling muddy.\n\n**Bake the pie on a hot tray** so the base browns, and cover the edge with foil if it darkens too soon. The filling should be bubbling through the vents when it comes out. Then comes the hard part: waiting for it to cool for 2 hours, which lets the filling set. A warm pie is a runny pie.',
    ing: [
      '500 g ready-made shortcrust pastry',
      '700 g marionberries or blackberries',
      '150 g caster sugar',
      '40 g cornflour',
      '1 tbsp lemon juice',
      '1/4 tsp salt',
      '1 egg, beaten',
      '1 tbsp caster sugar, for sprinkling'
    ],
    st: [
      'Heat the oven to 200°C with a baking tray inside. Roll out half the pastry and line a 23 cm pie dish.',
      'Toss the berries gently with the 150 g sugar, cornflour, lemon juice and salt. Pile into the pastry case.',
      'Roll out the remaining pastry for a lid. Lay it over the top, seal the edge and cut a few vents. Brush with egg and sprinkle with the 1 tbsp sugar.',
      'Bake on the hot tray for 50 minutes until deep golden and bubbling. Cool for 2 hours before cutting.'
    ],
    tips: [
      'Handle the berries gently to keep them whole.',
      'Use a tray under the pie to catch any drips.',
      'Do not cut the pie until it has cooled, or the filling will run.'
    ],
    pair: ['Vanilla ice cream', 'Whipped cream', 'Black coffee', 'Cream'],
    store: 'Keeps at room temperature for 1 day and in the fridge for 3 days.',
    nut: [430, 6, 61, 18, 6, 26, 460],
    rest: [120, 'Cooling to set']
  },

  'florida-grouper-sandwich': {
    d: 'A thick fillet of grouper seared in a spicy rub, served in a toasted bun with lettuce, tomato and lemon mayonnaise.',
    meta: 'Florida grouper sandwich: a thick fillet of grouper seared in a spicy rub, served in a toasted bun with lettuce and tomato. Four servings, cooked for 10 minutes.',
    kw: ['florida grouper sandwich', 'grouper sandwich', 'blackened grouper sandwich', 'grouper sandwich recipe', 'pan seared grouper sandwich'],
    why: 'What do you look for when choosing grouper for a sandwich? A thick, firm, white fillet with no strong smell. Grouper is a sweet, mild fish with large flakes that hold together when seared, which is what makes it the favourite on the Florida coast. If you cannot find it, cod, haddock or another firm white fish works as well.\n\nThe fish is coated in a rub of paprika, garlic powder, onion powder, thyme, cayenne and salt, and seared in a hot pan with a little oil. The spices darken into a crust and the inside stays moist. A few minutes a side is all it needs, since a thick fillet cooks quickly.\n\n**Do not move the fish until it has formed a crust**, about 4 minutes on the first side. It will release from the pan on its own. Serve the fillets in toasted buns, with a lemon mayonnaise made from mayonnaise, lemon juice and a pinch of salt, plus crisp lettuce and sliced tomato.',
    ing: [
      '600 g grouper fillets, cut into 4 pieces',
      '2 tsp paprika',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '1 tsp dried thyme',
      '1/2 tsp cayenne pepper',
      '1 tsp salt',
      '2 tbsp vegetable oil',
      '4 burger buns, about 240 g',
      '4 lettuce leaves',
      '1 tomato, about 125 g, sliced',
      '# Lemon mayonnaise',
      '4 tbsp mayonnaise',
      '1 tbsp lemon juice'
    ],
    st: [
      'Mix the paprika, garlic powder, onion powder, thyme, cayenne and salt. Pat the fish dry and coat it all over with the mix.',
      'Stir the mayonnaise and lemon juice together.',
      'Heat the oil in a heavy frying pan over medium-high heat. Cook the fish for 4 minutes on the first side without moving it, then turn and cook for 3 minutes more.',
      'Toast the buns lightly. Spread with the lemon mayonnaise and fill with lettuce, tomato and the fish.'
    ],
    tips: [
      'Pat the fish dry before coating, or the crust will not form.',
      'Open a window; the spices smoke in a hot pan.',
      'Check the thickest fillet is opaque to the centre.'
    ],
    pair: ['Chips', 'Coleslaw', 'Lemon wedges', 'Cold beer'],
    store: 'Best eaten straight away.',
    nut: [457, 33, 34, 21, 3, 5, 1060]
  },

  'appalachian-soup-beans': {
    d: 'Pinto beans simmered with a smoked ham hock and onion until soft and creamy, served with cornbread and raw onion.',
    meta: 'Appalachian soup beans: pinto beans simmered with a smoked ham hock and onion until soft and creamy, served with cornbread. Six servings, cooked for 120 minutes.',
    kw: ['appalachian soup beans', 'soup beans and cornbread', 'pinto beans with ham hock', 'appalachian pinto beans', 'soup beans recipe'],
    why: 'A pot of soup beans is a staple of the Appalachian table, and it feeds a family for pennies. Pinto beans simmered slowly with a ham hock and nothing else make a broth that is rich, smoky and slightly creamy, and the beans are served in bowls with a wedge of cornbread to crumble in.\n\nThe method asks very little. Rinse the beans, put them in a pot with the ham hock, onion and water, and bring them to a simmer. Salt goes in only near the end, as it can toughen the skins if added early. A steady, gentle simmer, with the lid slightly ajar, will cook them in about two hours.\n\n**Mash a few beans against the side of the pot** toward the end to thicken the broth to a creamy texture. Pull the meat from the hock, discard the bone and fat, and return the meat to the pot. Serve with raw chopped onion, a splash of vinegar or hot sauce, and cornbread. Leftovers are, if anything, better the next day.',
    ing: [
      '500 g dried pinto beans, rinsed',
      '400 g smoked ham hock',
      '1 onion, chopped',
      '2 litres water',
      '1 bay leaf',
      '1 tsp salt',
      '1/2 tsp ground black pepper',
      '1 onion, finely chopped, to serve',
      '2 tbsp cider vinegar, to serve'
    ],
    st: [
      'Put the beans, ham hock, chopped onion, bay leaf and water in a large pot. Bring to a boil, skim off the foam, then reduce to a gentle simmer.',
      'Cook with the lid slightly ajar for 100 minutes, topping up with hot water if needed, until the beans are soft.',
      'Add the salt and pepper. Mash a few beans against the side of the pot and simmer for 15 minutes more.',
      'Lift out the hock, shred the meat and return it to the pot. Remove the bay leaf. Serve with the raw onion and vinegar.'
    ],
    tips: [
      'Add the salt late; early salt can toughen the skins.',
      'Top up with hot water, not cold, if the pot gets dry.',
      'Check a bean for tenderness before adding salt.'
    ],
    pair: ['Cornbread', 'Raw onion', 'Fried potatoes', 'Collard greens'],
    store: 'Keeps in the fridge for 5 days and freezes for up to 3 months.',
    nut: [416, 32, 54, 8, 13, 3, 1070]
  },

  'appalachian-stack-cake': {
    d: 'Thin layers of spiced molasses cake sandwiched with a cinnamon dried apple filling and left to stand until soft and moist.',
    meta: 'Appalachian stack cake: thin layers of spiced molasses cake sandwiched with a cinnamon dried apple filling, left to stand overnight. Twelve servings, standing 8 hours.',
    kw: ['appalachian stack cake', 'stack cake recipe', 'apple stack cake', 'dried apple stack cake', 'molasses layer cake with apple filling'],
    why: 'Make the cake a day ahead. A stack cake is dry and firm when it comes out of the oven, and it becomes a cake only after it has stood. The thin, cookie-like layers slowly soak up the moisture of the spiced apple filling between them, softening into something tender and sticky. Eaten at once, it is a pile of biscuits.\n\nThe layers are made from a stiff dough of flour, brown sugar, molasses, butter, egg and buttermilk, spiced with ginger and cinnamon. Roll it thin, about 5 mm, and bake it in rounds. The filling is dried apples, simmered with sugar and warm spices until they turn soft, then mashed to a thick, spreadable purée.\n\n**Spread the filling while it is still warm**, so it sinks into the layers. Stack the cake as you go and press down gently. Wrap the finished cake and leave it for 8 hours. Slice thinly, because it is dense and sweet, and serve with coffee or tea.',
    ing: [
      '500 g plain flour',
      '150 g dark brown sugar',
      '100 g butter, softened',
      '150 ml molasses',
      '2 eggs',
      '120 ml buttermilk',
      '1 tsp bicarbonate of soda',
      '2 tsp ground ginger',
      '1 tsp ground cinnamon',
      '1/2 tsp salt',
      '# Apple filling',
      '400 g dried apples',
      '600 ml water',
      '100 g dark brown sugar',
      '2 tsp ground cinnamon',
      '1/2 tsp ground allspice'
    ],
    st: [
      'Simmer the dried apples with the water, 100 g sugar, cinnamon and allspice for 25 minutes until soft and thick. Mash roughly and keep warm.',
      'Heat the oven to 180°C. Beat the butter, 150 g sugar and molasses until smooth. Beat in the eggs and buttermilk.',
      'Mix the flour, bicarbonate of soda, ginger, cinnamon and salt and stir in to a stiff dough. Divide into 6 pieces and roll each into a 23 cm round about 5 mm thick.',
      'Bake the rounds on lined trays, three at a time, for 10 minutes each batch until firm. Cool.',
      'Stack the layers, spreading the warm filling between each. Wrap the cake well and leave to stand for 8 hours before slicing thinly.'
    ],
    tips: [
      'Roll the dough evenly so that the layers bake alike.',
      'Spread the filling to the edges.',
      'Cut the cake with a serrated knife.'
    ],
    pair: ['Hot coffee', 'Black tea', 'Warm milk', 'Whipped cream'],
    store: 'Keeps in an airtight container for 1 week; it improves over the first few days.',
    nut: [364, 6, 67, 8, 2, 34, 240],
    rest: [480, 'Standing']
  },

  'ozark-pudding': {
    d: 'A baked pudding of apple and pecans in a light egg batter, crisp on top and soft underneath.',
    meta: 'Ozark pudding: a baked pudding of apple and pecans in a light egg batter, crisp on top and soft underneath. Six servings, cooked for 35 minutes.',
    kw: ['ozark pudding', 'ozark pudding recipe', 'apple and pecan pudding', 'baked apple pecan dessert', 'ozark apple pudding'],
    why: 'Use one egg only. That is the unusual thing about Ozark pudding, and it is why the result is so light. The batter is a thin mix of egg, sugar, a little flour and baking powder, with so little flour that the dessert is mostly apple and nuts bound together by the egg. It puffs in the oven, then falls into a soft, chewy layer under a crackling top.\n\nThe apple is cut small, into 1 cm dice, and the pecans are chopped roughly. Both go into the batter at the end and are folded in by hand. Peel the apple, but leave it uncooked until it bakes, as it stays slightly firm that way and gives a sharper contrast to the sweet batter.\n\n**Bake it in a small dish** so the pudding is deep enough to stay moist. It comes out puffed, golden and cracked, and it settles as it cools. Serve it warm, in squares, with whipped cream or ice cream. It is a modest dessert that tastes as if it needed more effort.',
    ing: [
      '1 egg',
      '100 g caster sugar',
      '30 g plain flour',
      '1 tsp baking powder',
      '1/4 tsp salt',
      '1 tsp vanilla extract',
      '1 apple, about 150 g, peeled and diced',
      '60 g pecans, roughly chopped',
      '150 ml double cream, whipped, to serve'
    ],
    st: [
      'Heat the oven to 175°C. Grease a 20 cm square baking dish.',
      'Beat the egg and sugar until pale and thick. Fold in the flour, baking powder, salt and vanilla.',
      'Fold in the apple and pecans and pour into the dish.',
      'Bake for 35 minutes until puffed, golden and crisp on top. Cool for 10 minutes, cut into squares and serve warm with the whipped cream.'
    ],
    tips: [
      'Dice the apple small so it cooks through.',
      'Fold the batter gently to keep it light.',
      'Serve soon after baking, when the top is at its crispest.'
    ],
    pair: ['Whipped cream', 'Vanilla ice cream', 'Hot coffee', 'Caramel sauce'],
    store: 'Best eaten warm. Keeps in the fridge for 2 days.',
    nut: [269, 3, 26, 17, 2, 20, 200]
  },

  'amish-friendship-bread': {
    d: 'A sweet cinnamon loaf made with a fermented batter starter, moist, tender and rolled in cinnamon sugar.',
    meta: 'Amish friendship bread: a sweet cinnamon loaf made with a fermented batter starter, moist and tender, with a cinnamon sugar crust. Ten servings, cooked for 45 minutes.',
    kw: ['amish friendship bread', 'friendship bread recipe', 'cinnamon friendship bread', 'amish friendship bread with starter', 'sweet cinnamon quick bread'],
    why: 'It is a cake that is called a bread, and a loaf that is shared. Amish friendship bread is baked from a sweet starter of flour, sugar and milk that is passed from friend to friend in a bag, each recipient feeding it and sharing a portion. The starter is the ingredient to find; the rest is a store cupboard cake.\n\nThe bread uses 250 g of starter that has gone through its feeding cycle and is bubbly and sweet-sour. This gives the loaf a tender, slightly tangy crumb, similar to a cake made with buttermilk. Oil keeps it moist for days, and a dusting of cinnamon sugar in the tin makes a crackling crust.\n\n**Coat the greased tin with cinnamon sugar** before the batter goes in, and sprinkle more on top. Bake until a skewer comes out clean and the top is deep golden. Cool in the tin for 10 minutes before turning out. It slices best the next day, but is hard to resist while warm.',
    ing: [
      '250 g fed sweet sourdough-style starter',
      '250 g plain flour',
      '150 g caster sugar',
      '2 eggs',
      '100 ml vegetable oil',
      '100 ml milk',
      '1 tsp baking powder',
      '1/2 tsp bicarbonate of soda',
      '1 tsp vanilla extract',
      '2 tsp ground cinnamon',
      '1/2 tsp salt',
      '# Cinnamon sugar',
      '2 tbsp caster sugar',
      '1 tsp ground cinnamon'
    ],
    st: [
      'Heat the oven to 175°C. Grease a 900 g loaf tin and dust with half the cinnamon sugar.',
      'Beat the starter, eggs, oil, milk and vanilla in a large bowl.',
      'Mix the flour, 150 g sugar, baking powder, bicarbonate of soda, 2 tsp cinnamon and salt. Fold into the wet mixture until just combined.',
      'Pour into the tin and sprinkle with the rest of the cinnamon sugar. Bake for 45 minutes until a skewer comes out clean. Cool in the tin for 10 minutes.'
    ],
    tips: [
      'Use a starter that is bubbly and has been fed.',
      'Do not overmix the batter, or the crumb turns tough.',
      'Cover the loaf loosely with foil if the top darkens too fast.'
    ],
    pair: ['Butter', 'Hot tea', 'Cream cheese', 'Fresh fruit'],
    store: 'Keeps in an airtight tin for 3 days and freezes for up to 3 months.',
    nut: [332, 6, 50, 12, 2, 19, 370]
  },

  'amish-oatmeal-pie': {
    d: 'A sweet, chewy pie of oats, coconut, eggs and brown sugar in a pastry shell, set into a custard-like filling.',
    meta: 'Amish oatmeal pie: a sweet, chewy pie of oats, coconut, eggs and brown sugar in a pastry shell. Eight servings, cooked for 40 minutes.',
    kw: ['amish oatmeal pie', 'oatmeal pie recipe', 'oatmeal pie', 'oatmeal pie with coconut', 'pecan pie style oatmeal pie'],
    why: 'What does an oatmeal pie taste like? A pecan pie, but chewier. The oats float to the top as the pie bakes and make a crisp, golden layer, while the filling below stays soft and sticky, built on eggs, brown sugar, butter and golden syrup. The flavour is sweet, toasty and slightly caramelised.\n\nThe filling is mixed in one bowl. Melted butter is whisked with the sugar, syrup, eggs, vanilla and cinnamon, then rolled oats and desiccated coconut are stirred in. There are no nuts, which makes it a good stand-in for pecan pie when pecans are expensive or an allergy is involved. It is sweet, so slices should be thin.\n\n**Bake in the middle of the oven** at 175°C until the top is dark gold and the filling barely trembles. The pie will firm up as it cools, so leave it for at least an hour before slicing. Serve at room temperature, with lightly whipped cream to cut the sweetness.',
    ing: [
      '320 g ready-made shortcrust pastry',
      '60 g butter, melted',
      '150 g dark brown sugar',
      '120 ml golden syrup',
      '3 eggs',
      '1 tsp vanilla extract',
      '1/2 tsp ground cinnamon',
      '1/4 tsp salt',
      '100 g rolled oats',
      '40 g desiccated coconut'
    ],
    st: [
      'Heat the oven to 175°C. Roll out the pastry and line a 23 cm pie dish. Prick the base.',
      'Whisk the butter, sugar, golden syrup, eggs, vanilla, cinnamon and salt until smooth.',
      'Stir in the oats and coconut and pour into the pastry case.',
      'Bake for 40 minutes until the top is deep golden and the filling is just set. Cool for at least 1 hour before slicing.'
    ],
    tips: [
      'Cover the pastry edge with foil if it browns too fast.',
      'Use rolled oats, not instant, for the best texture.',
      'Let the pie cool fully so it slices cleanly.'
    ],
    pair: ['Whipped cream', 'Vanilla ice cream', 'Hot coffee', 'Cold milk'],
    store: 'Keeps at room temperature for 1 day and in the fridge for 3 days.',
    nut: [463, 7, 57, 23, 3, 31, 360],
    rest: [60, 'Cooling']
  },

  'turkey-brine': {
    d: 'A salt and brown sugar brine with bay, peppercorns, orange and herbs, for keeping a whole turkey moist.',
    meta: 'Turkey brine: a salt and brown sugar brine with bay, peppercorns, orange and herbs for a whole turkey. Twelve servings, brined for 12 hours.',
    kw: ['turkey brine', 'turkey brine recipe', 'wet brine for turkey', 'thanksgiving turkey brine', 'brine with orange and herbs for turkey'],
    why: 'Brine the bird the day before. Salt in the water is drawn into the meat by osmosis, where it changes the proteins so they hold more moisture during cooking. A brined turkey is noticeably juicier and better seasoned all the way through, which matters most for the lean breast.\n\nThis brine is salt, brown sugar and water, with aromatics: bay leaves, black peppercorns, thyme, garlic and orange. The sugar helps the skin brown and balances the salt. Simmer part of the water with the salt and sugar to dissolve them, then add cold water and ice so that the brine is chilled before the turkey goes in. Warm brine is a food-safety risk.\n\n**Keep the turkey fully submerged and cold** throughout, either in a large food-safe bucket or a brining bag in the fridge. Brine for 12 hours. Rinse the turkey well afterwards and pat it dry, then rest it uncovered in the fridge for a few hours so the skin dries and crisps. Skip any added salt in the stuffing and the gravy.',
    ing: [
      '4 litres cold water, plus 1 litre for dissolving',
      '200 g fine salt',
      '100 g dark brown sugar',
      '4 bay leaves',
      '10 g black peppercorns',
      '6 sprigs fresh thyme',
      '1 head of garlic, halved crossways',
      '2 oranges, quartered',
      '1 turkey, about 5 kg'
    ],
    st: [
      'Heat 1 litre of the water with the salt, sugar, bay leaves, peppercorns, thyme, garlic and oranges until the salt and sugar dissolve, about 10 minutes.',
      'Pour into a large food-safe container and add the 4 litres of cold water. Cool completely, adding ice if needed.',
      'Lower the turkey into the brine so that it is fully covered. Cover and leave in the fridge for 12 hours.',
      'Lift out the turkey, rinse well inside and out and pat dry. Roast as you normally would, using no extra salt.'
    ],
    tips: [
      'Never put the turkey into warm brine.',
      'Weigh down the bird with a plate if it floats.',
      'Rinse and dry the bird thoroughly so the skin crisps.'
    ],
    pair: ['Roast potatoes', 'Cranberry sauce', 'Stuffing', 'Gravy'],
    store: 'Use the brine once only and discard it after the turkey is out.',
    nut: [501, 67, 11, 21, 1, 10, 6780],
    rest: [720, 'Brining']
  },

  'brown-sugar-ham-glaze': {
    d: 'A sticky glaze of brown sugar, Dijon mustard, honey and orange juice with cloves, brushed over a ham as it bakes.',
    meta: 'Brown sugar ham glaze: a sticky glaze of brown sugar, Dijon mustard, honey and orange juice with cloves, for brushing over a ham. Twelve servings, cooked for 10 minutes.',
    kw: ['brown sugar ham glaze', 'ham glaze recipe', 'brown sugar and mustard ham glaze', 'honey mustard ham glaze', 'glaze for baked ham'],
    why: 'It looks like a pancake syrup and cooks like a caramel, and it is the sticky finish on a holiday ham. Brown sugar is the base, as it dissolves smoothly and melts into a glossy lacquer, and the other ingredients are chosen to keep it from tasting only sweet: mustard for bite, orange juice for acid, and honey for body.\n\nThe cooking is brief. Everything goes into a small pan and simmers for about 10 minutes, until the glaze is syrupy enough to coat the back of a spoon. A pinch of ground cloves, or whole cloves taken out afterwards, gives the traditional ham flavour. If the glaze gets too thick, add a spoonful of orange juice.\n\n**Brush it on in the last 30 minutes of the ham\'s cooking**, not at the start, or the sugar will burn before the meat is warm. Apply two or three coats, 10 minutes apart. The surface should turn deep mahogany and sticky. Any leftover glaze can be served warm alongside the sliced ham.',
    ing: [
      '150 g dark brown sugar',
      '3 tbsp Dijon mustard',
      '3 tbsp honey',
      '100 ml orange juice',
      '3 tbsp cider vinegar',
      '1 g cloves'
    ],
    st: [
      'Put the sugar, mustard, honey, orange juice, vinegar and cloves in a small saucepan.',
      'Stir over low heat until the sugar dissolves, then simmer for 10 minutes until syrupy.',
      'Remove the cloves. Brush the glaze over the ham as it bakes.'
    ],
    tips: [
      'Keep the heat low so the sugar does not burn.',
      'Thin with a splash of orange juice if it thickens too much.',
      'Brush on at the end of cooking, not at the start.'
    ],
    pair: ['Baked ham', 'Roast pork', 'Baked sweet potato', 'Green beans'],
    store: 'Keeps in a jar in the fridge for 2 weeks.',
    nut: [72, 0, 18, 0, 0, 17, 80]
  },

  'cranberry-brie-bites': {
    d: 'Crisp mini filo shells filled with warm brie, cranberry sauce and a pecan, ready as a quick holiday starter.',
    meta: 'Cranberry brie bites: crisp mini filo shells filled with warm brie, cranberry sauce and a pecan. Twelve servings, cooked for 15 minutes.',
    kw: ['cranberry brie bites', 'brie and cranberry bites', 'cranberry brie bites recipe', 'cranberry brie filo bites', 'brie cranberry appetisers'],
    why: 'The common way this goes wrong is a soggy shell, and the fix is to bake the filo cups first. Filled straight from the pack, they soak up the cheese and the sauce and turn chewy. A few minutes empty in the oven dry them and give you a crisp base that stays crunchy under the filling.\n\nBrie is the right cheese for the job: it melts quickly into a creamy centre, and its rind is mild enough to eat. Cut it into small cubes, about 1 cm, so one cube fits in each shell. A teaspoon of cranberry sauce adds sharp sweetness, which cuts through the richness of the cheese, and a pecan half on top gives crunch.\n\n**Bake until the brie is soft and just starting to ooze.** That takes about 8 minutes at 190°C. Finish with a sprig of fresh rosemary or thyme for a bit of colour. Serve them warm, on a platter, within minutes of leaving the oven, because they lose their crispness as they cool.',
    ing: [
      '60 g mini filo pastry shells',
      '150 g brie, cut into 1 cm cubes',
      '120 g cranberry sauce',
      '30 g pecan halves',
      '1 tbsp fresh rosemary leaves, chopped'
    ],
    st: [
      'Heat the oven to 190°C. Put the filo shells on a baking tray and bake for 4 minutes until lightly crisp.',
      'Put a cube of brie in each shell, followed by a teaspoon of cranberry sauce and a pecan half.',
      'Bake for 8 minutes until the brie has softened. Scatter with the rosemary and serve warm.'
    ],
    tips: [
      'Do not overfill the shells; the cheese spreads as it melts.',
      'Use cranberry sauce with whole berries for the best texture.',
      'Serve soon after baking.'
    ],
    pair: ['Sparkling wine', 'Cheese board', 'Mulled wine', 'Roast nuts'],
    store: 'Best eaten warm. Fill the shells just before baking.',
    nut: [85, 3, 7, 5, 0, 4, 100]
  },

  'glazed-baked-ham': {
    d: 'A bone-in cured ham baked slowly, scored and brushed with a brown sugar and mustard glaze until sticky and deep gold.',
    meta: 'Glazed baked ham: a bone-in cured ham baked slowly, scored and brushed with a brown sugar and mustard glaze. Twelve servings, cooked for 150 minutes.',
    kw: ['glazed baked ham', 'baked ham with brown sugar glaze', 'holiday baked ham', 'glazed ham recipe', 'ham with mustard and brown sugar glaze'],
    why: 'This is what to make for the Easter or Christmas table, when you need a joint that feeds twelve and looks the part. A baked ham is mostly a matter of warming a cured joint through without drying it out, then finishing it with a sticky glaze. Almost all the work is waiting.\n\nStart with a bone-in cured ham of about 3 kg. Remove any packaging, stand it in a roasting tin with a little water in the base, and cover the whole tin with foil. The steam keeps the meat moist as it heats through. After 2 hours, uncover, score the fat in a diamond pattern, and stud the intersections with cloves if you like.\n\n**Glaze the ham in the last 30 minutes** with two or three coats, brushing generously each time. The sugar caramelises into a dark, glossy crust. Rest the ham for 20 minutes before carving, which allows the juices to settle. Carve it into thin slices across the grain.',
    ing: [
      '3 kg cured bone-in ham',
      '200 ml water',
      '100 g dark brown sugar',
      '2 tbsp Dijon mustard',
      '2 tbsp honey',
      '100 ml orange juice',
      '1 g cloves'
    ],
    st: [
      'Heat the oven to 160°C. Put the ham in a roasting tin with the water, cover tightly with foil and cook for 2 hours.',
      'Mix the sugar, mustard, honey and orange juice. Remove the foil and score the fat in a diamond pattern, pressing a clove into each intersection.',
      'Brush with a third of the glaze and cook uncovered for 10 minutes. Repeat twice more, for 30 minutes in all, until deep golden and sticky.',
      'Rest for 20 minutes, then carve into thin slices.'
    ],
    tips: [
      'Cover the tin tightly for the first 2 hours.',
      'Do not apply the glaze early; the sugar will burn.',
      'Use the pan juices as a base for gravy.'
    ],
    pair: ['Roast potatoes', 'Green beans', 'Mustard', 'Pineapple'],
    store: 'Keeps in the fridge for 4 days and freezes for up to 2 months.',
    nut: [342, 48, 15, 10, 0, 12, 3050]
  }
};
