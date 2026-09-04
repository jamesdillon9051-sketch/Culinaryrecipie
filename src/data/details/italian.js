/**
 * Recipe detail records, keyed by catalog slug.
 *
 *  d     — editorial description (2–3 sentences, primary keyword used naturally)
 *  meta  — SEO meta description, kept under 160 characters
 *  kw    — target keywords for <meta name="keywords"> and Recipe schema
 *  why   — "Why This Recipe Works": the cooking science behind the method
 *  ing   — ingredients; a line beginning with "# " starts a new sub-group
 *  st    — numbered method steps
 *  tips  — chef's tips
 *  pair  — pairing suggestions (wine, sides, dessert)
 *  store — storage & reheating guidance
 *  nut   — [calories, protein g, carbs g, fat g, fibre g, sugar g, sodium mg] per serving
 *  rest  — optional [minutes, label] for unattended waiting the method requires
 *          (proving, chilling, marinating). Kept out of prep and cook, which
 *          are hands-on time, but added to what the page and schema promise.
 *          tools/timing-audit.js checks it against the method text.
 */

module.exports = {
  'margherita-pizza': {
    rest: [1560, 'chilling'],
    d: 'The Neapolitan original: a blistered, cloud-edged crust under nothing more than San Marzano tomatoes, milky fior di latte and torn basil. This Margherita pizza recipe coaxes pizzeria char out of a standard home oven using a screaming-hot steel and a slow, cold-fermented dough.',
    meta: 'Authentic Margherita pizza with a blistered 24-hour dough, San Marzano sauce and fior di latte — pizzeria results from a home oven.',
    kw: ['margherita pizza recipe', 'neapolitan pizza dough', 'homemade pizza', 'san marzano pizza sauce'],
    why: 'A long, cold ferment lets enzymes break starch into simple sugars, which is what gives the cornicione its leopard-spotted char in only 8 minutes. Hydrating the dough to 65% keeps the crumb open and light, while an uncooked tomato sauce stays bright instead of stewing into sweetness under the heat.',
    ing: [
      '# For the dough',
      '500 g 00 flour, plus extra for shaping',
      '325 ml cool water',
      '10 g fine sea salt',
      '2 g instant dried yeast',
      '# For the topping',
      '400 g tinned San Marzano tomatoes',
      '1 tsp fine sea salt',
      '250 g fior di latte or low-moisture mozzarella, torn and drained',
      '30 g Parmigiano-Reggiano, finely grated',
      '2 tbsp extra-virgin olive oil',
      '1 handful fresh basil leaves'
    ],
    st: [
      'Whisk the flour and yeast in a large bowl. Add the water and mix with your hand until no dry flour remains, then rest the shaggy dough for 20 minutes so the flour fully hydrates.',
      'Add the salt and knead in the bowl for 5 minutes, folding the dough over itself until it turns smooth and elastic. Cover and leave at room temperature for 2 hours.',
      'Divide into four 200 g balls, tucking the edges underneath to build surface tension. Space them in a lidded container and refrigerate for 24 to 72 hours — flavour and blistering improve every day.',
      'Take the dough out 2 hours before baking. Meanwhile, slide a baking steel or heavy stone onto the upper-middle shelf and heat the oven to its maximum, at least 250°C / 480°F, for a full hour.',
      'Crush the tomatoes by hand with the salt, leaving them rough. Do not blend — a smooth sauce turns watery on the crust.',
      'Stretch one ball on a well-floured surface, pressing from the centre outward and leaving a 2 cm rim untouched. Let gravity do the last of the stretching over your knuckles.',
      'Slide onto a floured peel. Spread 3 tablespoons of sauce, scatter a quarter of the mozzarella and Parmigiano, and drizzle with olive oil.',
      'Launch onto the steel and bake for 6 to 8 minutes, until the rim is puffed and spotted and the cheese is bubbling. Switch to the grill for the final 60 seconds if the top needs colour.',
      'Finish with fresh basil and a thread of olive oil, then slice and eat immediately while the base is still crisp.'
    ],
    tips: [
      'Drain torn mozzarella on kitchen paper for 20 minutes; the water it sheds is the single biggest cause of a soggy centre.',
      'No baking steel? An upturned heavy baking sheet preheated for an hour is a close second.',
      'Weigh your water. Pizza dough lives or dies on hydration percentage, and cups are hopelessly imprecise.'
    ],
    pair: ['A chilled Aglianico or a light Chianti cuts the mozzarella richness', 'Start with a simple rocket salad dressed in lemon and olive oil', 'Finish with affogato for a five-minute dessert'],
    store: 'Dough balls keep in the fridge for 3 days or freeze for 3 months — defrost overnight in the fridge. Cooked slices refrigerate for 3 days; reheat in a dry skillet over medium heat for 3 minutes with a lid on, which re-crisps the base while melting the cheese. Never microwave.',
    nut: [612, 26, 78, 21, 4, 6, 1180]
  },

  'spaghetti-carbonara': {
    d: 'Real Roman carbonara has no cream in it — just eggs, Pecorino, guanciale and black pepper emulsified into a glossy sauce by the pasta water. Master the off-heat technique here and you will never scramble it again.',
    meta: 'Authentic Roman spaghetti carbonara with guanciale, Pecorino and egg yolks. No cream, no scrambling — a silky sauce in 20 minutes.',
    kw: ['spaghetti carbonara recipe', 'authentic carbonara', 'carbonara without cream', 'roman pasta'],
    why: 'Egg yolk proteins set at around 70°C, so the pan must come off the heat before the eggs go in. Starchy pasta water is the insurance policy: its suspended starch molecules physically block the proteins from linking into curds, holding the sauce in a stable emulsion.',
    ing: [
      '400 g dried spaghetti',
      '150 g guanciale, cut into 1 cm lardons',
      '4 large egg yolks',
      '1 large whole egg',
      '80 g Pecorino Romano, finely grated, plus extra to serve',
      '2 tsp black peppercorns, coarsely cracked',
      '1 tbsp fine sea salt, for the pasta water'
    ],
    st: [
      'Bring 4 litres of water to the boil and salt it — less heavily than usual, since Pecorino and guanciale both bring plenty of salt.',
      'Put the guanciale in a cold, wide pan and set it over medium-low heat. Rendering slowly from cold gives you crisp cubes and a pool of clear fat instead of scorched edges. This takes 8 to 10 minutes.',
      'Toast the cracked pepper in a dry corner of the pan for 30 seconds, until fragrant. Remove the pan from the heat.',
      'Whisk the yolks, whole egg and Pecorino in a bowl until it forms a thick, sandy paste with no lumps.',
      'Cook the spaghetti until 1 minute short of al dente, then reserve 300 ml of the cloudy cooking water.',
      'Temper the egg mixture by whisking in 60 ml of the hot pasta water in a thin stream — this warms the eggs gently so they will not seize later.',
      'Drop the drained spaghetti into the pan of guanciale and fat, off the heat, and toss vigorously for 30 seconds to coat every strand.',
      'Pour in the egg mixture and toss continuously, adding splashes of pasta water until the sauce turns glossy and clings. If the pan has cooled too much, return it to the lowest heat for no more than 20 seconds at a time.',
      'Serve at once in warmed bowls with more Pecorino and a heavy crack of pepper.'
    ],
    tips: [
      'If your sauce does scramble, tip everything into a blender with 50 ml of pasta water and blitz — it rescues about eight times out of ten.',
      'Pancetta is an acceptable substitute; smoked bacon is not, as the smoke bulldozes the Pecorino.',
      'Warm your serving bowls. Cold ceramic drops the sauce temperature fast enough to make it grainy.'
    ],
    pair: ['A crisp Frascati or Verdicchio mirrors the Roman tradition', 'Serve with nothing but bread — carbonara wants no competition', 'Follow with sliced oranges in olive oil and sea salt'],
    store: 'Carbonara is a strictly à la minute dish and does not keep well; the emulsion breaks and the eggs firm up on chilling. If you must, refrigerate for 1 day and reheat in a pan over very low heat with a splash of water, tossing constantly.',
    nut: [688, 32, 74, 29, 3, 3, 940]
  },

  'lasagna-bolognese': {
    d: 'A proper lasagne alla Bolognese is a study in patience: a three-hour ragù, a nutmeg-scented besciamella and paper-thin egg pasta layered until the whole thing slices like a terrine. This is the version worth clearing a Sunday for.',
    meta: 'Classic lasagna Bolognese with a slow three-hour ragù, silky besciamella and egg pasta layers. The definitive Sunday bake.',
    kw: ['lasagna bolognese recipe', 'authentic lasagne', 'ragu bolognese', 'homemade lasagna'],
    why: 'Milk added early to the ragù does two jobs: its calcium tenderises the meat proteins, and its lactose feeds a deep Maillard browning that plain tomato cannot produce. Thin layers matter more than many layers — six sheets of pasta with restrained filling set into clean slices, while thick ones slide apart.',
    ing: [
      '# For the ragù',
      '300 g beef chuck, minced coarsely',
      '200 g pork shoulder, minced coarsely',
      '80 g pancetta, finely chopped',
      '1 medium onion, finely diced',
      '1 medium carrot, finely diced',
      '2 celery sticks, finely diced',
      '200 ml dry white wine',
      '300 ml whole milk',
      '400 g tinned plum tomatoes, crushed',
      '2 tbsp tomato purée',
      '2 tbsp olive oil',
      '1 tsp fine sea salt',
      '# For the besciamella',
      '80 g unsalted butter',
      '80 g plain flour',
      '1 l whole milk, warmed',
      '0.25 tsp freshly grated nutmeg',
      '1 tsp fine sea salt',
      '# To assemble',
      '400 g fresh egg lasagne sheets',
      '150 g Parmigiano-Reggiano, grated'
    ],
    st: [
      'Warm the olive oil in a heavy casserole and cook the pancetta over medium heat for 4 minutes. Add the onion, carrot and celery and sweat gently for 12 minutes until soft and sweet but not coloured.',
      'Raise the heat, add both minces and break them up. Cook for 10 minutes without stirring too often, letting the meat catch and brown on the base of the pan — that fond is the backbone of the sauce.',
      'Pour in the wine and scrape the base clean. Simmer until almost dry, about 5 minutes.',
      'Add the milk and simmer gently until it has been almost entirely absorbed, roughly 20 minutes. This step is what separates a Bolognese from a bolognese-flavoured mince.',
      'Stir in the tomato purée, crushed tomatoes and salt. Half-cover and cook at a bare blip for 2.5 to 3 hours, stirring every 20 minutes and adding a splash of water if it tightens too far.',
      'For the besciamella, melt the butter, whisk in the flour and cook for 2 minutes until it smells biscuity. Add the warm milk in four additions, whisking smooth between each, then simmer for 5 minutes until it coats a spoon. Season with nutmeg and salt.',
      'Heat the oven to 190°C / 375°F. Spread a thin film of ragù in a 30 x 20 cm dish, then build six layers: pasta, ragù, besciamella, a dusting of Parmigiano. Keep each layer thin.',
      'Finish with besciamella and a generous blanket of Parmigiano. Bake for 40 minutes, until the top is bronzed and the edges bubble.',
      'Rest for at least 20 minutes before cutting. Lasagne straight from the oven will not hold a slice.'
    ],
    tips: [
      'Mince the meat coarsely, or chop it by hand — supermarket fine mince turns pasty over three hours of cooking.',
      'Make the ragù a day ahead. It is measurably better after a night in the fridge.',
      'Wipe the inside rim of the dish before baking so the edges brown evenly instead of burning.'
    ],
    pair: ['Sangiovese or Barbera has the acidity to cut through the besciamella', 'A sharp radicchio salad with balsamic resets the palate', 'Panna cotta keeps dessert light after such a rich main'],
    store: 'Refrigerate for up to 4 days or freeze whole or in portions for 3 months. Reheat covered at 160°C / 320°F for 25 minutes from chilled, or 50 minutes from frozen, removing the foil for the last 10 minutes to re-crisp the top.',
    nut: [742, 41, 52, 39, 4, 12, 1090]
  },

  'fettuccine-alfredo': {
    d: 'Before the cream and the garlic crept in, Alfredo was three ingredients: pasta, butter and Parmigiano, whipped together into a sauce by nothing but starch and vigorous tossing. It takes fifteen minutes and tastes like a restaurant dish.',
    meta: 'Authentic fettuccine Alfredo made with only butter, Parmigiano and pasta water — no cream, no flour, ready in 15 minutes.',
    kw: ['fettuccine alfredo recipe', 'alfredo without cream', 'butter parmesan pasta', 'easy italian pasta'],
    why: 'Parmigiano-Reggiano is roughly 30% fat and 30% protein; melted into starchy water below 65°C it forms a natural emulsion that behaves exactly like cream. Push it hotter and the proteins tighten and the fat splits out, which is why the pan comes off the heat first.',
    ing: [
      '400 g fresh fettuccine',
      '120 g unsalted butter, cut into cubes and softened',
      '180 g Parmigiano-Reggiano, very finely grated',
      '0.5 tsp white pepper, freshly ground',
      '1 tbsp fine sea salt, for the pasta water'
    ],
    st: [
      'Bring 3 litres of water to a rolling boil with the salt. Fresh fettuccine cooks in 2 to 3 minutes, so have everything ready first.',
      'Put half the butter in a wide, warmed serving bowl and let it begin to soften.',
      'Cook the fettuccine until barely al dente, then lift it directly into the bowl with tongs, carrying plenty of clinging water with it. Reserve 300 ml of pasta water.',
      'Add the remaining butter and toss hard until it melts and coats the strands.',
      'Add the Parmigiano in three handfuls, tossing furiously and adding splashes of hot pasta water between each. The sauce should turn from grainy to glossy in about 90 seconds.',
      'Season with white pepper, adjust with more pasta water until it flows like double cream, and serve at once.'
    ],
    tips: [
      'Grate the cheese on the finest holes — a microplane, not a box grater. Coarse shreds refuse to emulsify.',
      'Use a bowl, not a hot pan. Residual pan heat is the number one cause of a broken, oily Alfredo.',
      'Buy real Parmigiano-Reggiano with the rind stamp. Pre-grated cheese contains anti-caking cellulose that makes the sauce grainy.'
    ],
    pair: ['An unoaked Chardonnay or Soave stands up without competing', 'Add blanched asparagus or peas for colour and bite', 'A bitter espresso afterwards is the traditional Roman full stop'],
    store: 'Best eaten immediately. Leftovers keep 2 days refrigerated; revive in a pan over low heat with 3 tablespoons of milk or water per portion, stirring constantly until it loosens.',
    nut: [724, 28, 68, 39, 3, 3, 880]
  },

  'cacio-e-pepe': {
    d: 'Two ingredients, one technique, endless opportunity to get it wrong. This cacio e pepe recipe uses a Pecorino slurry made off the heat, the trick Roman trattorias rely on to guarantee a creamy sauce instead of a stringy clump.',
    meta: 'Foolproof cacio e pepe with a Pecorino slurry technique that guarantees a creamy, clump-free Roman sauce in 15 minutes.',
    kw: ['cacio e pepe recipe', 'roman pasta', 'pecorino pasta', 'two ingredient pasta'],
    why: 'Pecorino Romano is high in casein, which clumps aggressively above 70°C. Making a cool paste with a little pasta water first coats each cheese particle in starch, so it disperses instead of seizing when it meets the hot pasta.',
    ing: [
      '200 g tonnarelli or spaghetti',
      '120 g Pecorino Romano, very finely grated',
      '2 tsp black peppercorns, coarsely cracked',
      '2 tsp fine sea salt, for the pasta water'
    ],
    st: [
      'Cook the pasta in just 1.5 litres of lightly salted water — the smaller volume makes the water far starchier, which is your emulsifier.',
      'While it cooks, toast the cracked pepper in a dry pan over medium heat for 45 seconds until it smells sharp and floral. Set aside.',
      'Put the Pecorino in a bowl. Add 3 tablespoons of pasta water that has cooled for a minute and stir into a smooth, thick paste, adding more water a teaspoon at a time.',
      'Drain the pasta 1 minute early, reserving 250 ml of water, and toss it in the pepper pan off the heat for 30 seconds to cool slightly.',
      'Add the Pecorino paste and toss hard, loosening with pasta water until the sauce turns creamy and coats each strand.',
      'Serve immediately with an extra grinding of pepper.'
    ],
    tips: [
      'Cracked peppercorns, not pre-ground pepper. The volatile oils that make this dish sing evaporate within days of grinding.',
      'Let the pasta water cool for 60 seconds before mixing the paste — boiling water will curdle the cheese on contact.',
      'Some Pecorino is fiercely salty. Taste before salting the pasta water.'
    ],
    pair: ['A cold Frascati Superiore is the Roman default', 'Serve with puntarelle or a chicory salad in anchovy dressing', 'Finish with a shot of espresso'],
    store: 'Does not keep — the emulsion breaks within hours. Make only what you will eat.',
    nut: [552, 26, 66, 20, 3, 2, 1020]
  },

  "penne-all-arrabbiata": {
    d: 'Angry pasta, and rightly so: garlic bloomed slowly in olive oil, dried chilli, and tomatoes cooked hard enough to concentrate. This arrabbiata recipe is naturally vegan, takes twenty minutes, and tastes like considerably more effort.',
    meta: 'Fiery penne all\'arrabbiata with slow-bloomed garlic and dried chilli. Naturally vegan, on the table in 20 minutes.',
    kw: ['penne arrabbiata recipe', 'spicy tomato pasta', 'vegan italian pasta', 'quick pasta recipe'],
    why: 'Capsaicin and the aromatics in garlic are fat-soluble, not water-soluble, so blooming both in cool oil before the tomatoes go in extracts far more flavour than adding them to a simmering sauce. Cooking the tomatoes at a hard simmer drives off water and concentrates glutamates, which is why a 20-minute sauce can taste long-cooked.',
    ing: [
      '400 g penne rigate',
      '6 garlic cloves, thinly sliced',
      '2 dried peperoncini, crumbled, or 1 tsp chilli flakes',
      '80 ml extra-virgin olive oil',
      '800 g tinned plum tomatoes, crushed by hand',
      '1 tsp fine sea salt',
      '1 small bunch flat-leaf parsley, chopped'
    ],
    st: [
      'Put the olive oil, sliced garlic and crumbled chilli in a cold wide pan. Set over medium-low heat and let it come up slowly, about 5 minutes, until the garlic is pale gold and the oil is fragrant. Do not let it brown.',
      'Add the crushed tomatoes and salt. Raise the heat and cook at a lively simmer for 15 minutes, stirring occasionally, until the sauce darkens and the oil separates at the edges.',
      'Meanwhile cook the penne in well-salted water until 2 minutes short of the packet time. Reserve 200 ml of pasta water.',
      'Tip the drained penne into the sauce and cook together for the final 2 minutes, tossing and adding pasta water so the sauce clings and finishes cooking into the pasta.',
      'Stir through the parsley off the heat and serve. Arrabbiata traditionally takes no cheese.'
    ],
    tips: [
      'Crush the tomatoes with your hands rather than blending — texture is half of what makes this dish feel rustic.',
      'Cold-start the garlic. Dropping it into hot oil burns the edges before the centre gives up its flavour.',
      'Adjust the heat with a second peperoncino at the end rather than at the start; long cooking mutes chilli aroma.'
    ],
    pair: ['A young Montepulciano d\'Abruzzo handles the chilli', 'Serve with garlicky sautéed broccoli rabe', 'Cool it down with lemon sorbet'],
    store: 'The sauce keeps 5 days refrigerated and freezes for 3 months, improving with a night\'s rest. Dressed pasta keeps 2 days; reheat with a splash of water in a covered pan over low heat.',
    nut: [498, 13, 74, 18, 6, 9, 620]
  },

  'risotto-alla-milanese': {
    d: 'The saffron risotto that Milan built its reputation on: bone-marrow rich, sunset gold, and finished with a violent beating of cold butter and Parmigiano that makes it ripple across the plate. Naturally gluten-free and quietly luxurious.',
    meta: 'Golden saffron risotto alla Milanese with the classic mantecatura finish for a rippling, restaurant-style texture.',
    kw: ['risotto alla milanese recipe', 'saffron risotto', 'italian risotto', 'gluten free risotto'],
    why: 'Carnaroli rice releases amylopectin starch gradually when agitated in hot liquid, and it is that starch — not cream — that makes risotto creamy. The final mantecatura, beating in ice-cold butter off the heat, emulsifies fat into the starch and gives the dish its signature wave, or all\'onda.',
    ing: [
      '320 g Carnaroli rice',
      '1.2 l chicken or vegetable stock, kept at a bare simmer',
      '1 small onion, very finely diced',
      '120 ml dry white wine',
      '0.5 tsp saffron threads',
      '90 g cold unsalted butter, cubed',
      '80 g Parmigiano-Reggiano, grated',
      '2 tbsp olive oil',
      '1 tsp fine sea salt'
    ],
    st: [
      'Steep the saffron in 60 ml of the hot stock and set aside — a 20-minute soak extracts far more colour and aroma than adding threads directly.',
      'Sweat the onion in the olive oil and 20 g of the butter over low heat for 8 minutes, until translucent and completely without colour.',
      'Add the rice and toast for 2 to 3 minutes, stirring, until the grains turn glassy at the edges with an opaque white centre. This tostatura sets the grain so it holds its bite.',
      'Pour in the wine and stir until fully absorbed.',
      'Add hot stock a ladleful at a time, stirring often and waiting until each addition is nearly absorbed before adding the next. Keep the pan at a steady, gentle bubble for 16 to 18 minutes.',
      'At the 15-minute mark, stir in the saffron infusion. The rice should be al dente with a slight chalk at the very centre and the mixture loose enough to spread slowly.',
      'Take the pan off the heat. Add the remaining cold butter and the Parmigiano and beat hard with a wooden spoon for a full minute — this is the mantecatura and it is not optional.',
      'Rest for 1 minute, adjust with a last splash of stock, then serve on warm flat plates and tap the base so the risotto spreads into a wave.'
    ],
    tips: [
      'Cold butter, hot rice. The temperature difference is what makes the emulsion tight rather than greasy.',
      'Never rinse risotto rice; you would be washing away the exact starch you are trying to release.',
      'If your risotto stands stiffly on the plate, it is too dry. It should settle slowly like lava.'
    ],
    pair: ['A Franciacorta or Gavi has the acid to lift the butter', 'Traditionally served alongside osso buco', 'Follow with sliced fennel and orange'],
    store: 'Keeps 3 days refrigerated but loses its wave. Best repurposed: shape cold risotto into arancini, or reheat in a pan with extra stock, stirring until loose again.',
    nut: [604, 15, 72, 27, 2, 3, 940]
  },

  'osso-buco': {
    d: 'Cross-cut veal shanks braised until the meat collapses and the marrow turns to butter, finished with a raw hit of gremolata that cuts straight through the richness. Serve it over saffron risotto for the full Milanese experience.',
    meta: 'Slow-braised osso buco alla Milanese with fall-apart veal shanks, silky marrow and a bright lemon gremolata finish.',
    kw: ['osso buco recipe', 'veal shank braise', 'italian braised veal', 'gremolata'],
    why: 'Veal shank is dense with collagen, which needs three things to become gelatine: moisture, time, and a temperature held between 80 and 90°C. Tying each shank keeps it from unravelling as that connective tissue lets go, and the gremolata is added raw at the end because lemon zest oils and raw garlic volatilise within minutes of heat.',
    ing: [
      '# For the braise',
      '4 veal shanks, 4 cm thick, tied around the circumference',
      '60 g plain flour, for dusting',
      '3 tbsp olive oil',
      '40 g unsalted butter',
      '1 medium onion, finely diced',
      '1 medium carrot, finely diced',
      '2 celery sticks, finely diced',
      '250 ml dry white wine',
      '400 ml veal or chicken stock',
      '200 g tinned tomatoes, crushed',
      '2 bay leaves',
      '1.5 tsp fine sea salt',
      '# For the gremolata',
      '1 lemon, zest only, finely grated',
      '2 garlic cloves, minced',
      '1 small bunch flat-leaf parsley, finely chopped'
    ],
    st: [
      'Pat the shanks bone dry and season all over. Dust lightly with flour and shake off the excess — a thin coat browns; a thick one gums up the sauce.',
      'Heat the oil in a heavy casserole and brown the shanks hard on both sides, 4 minutes a side, working in batches so the pan never crowds. Set aside.',
      'Lower the heat, add the butter and soften the onion, carrot and celery for 10 minutes until sweet.',
      'Pour in the wine, scrape up every brown scrap from the base, and reduce by half.',
      'Return the shanks in a single layer. Add the tomatoes, stock, bay and salt — the liquid should come two-thirds of the way up the meat, no further.',
      'Cover and cook at 160°C / 320°F for 2 hours, turning the shanks at the halfway point, until a fork slides in with no resistance.',
      'Lift the shanks out and keep warm. If the sauce is thin, reduce it hard on the hob for 5 to 10 minutes until it coats a spoon.',
      'Mix the gremolata ingredients just before serving. Spoon sauce over the shanks and scatter the gremolata generously on top.'
    ],
    tips: [
      'Ask the butcher for centre-cut shanks with a wide marrow bone — the marrow is the best part and diners will dig for it.',
      'Serve a small spoon alongside so guests can scoop the marrow out of the bone.',
      'Make it a day ahead. The sauce sets, the flavours marry, and it reheats beautifully.'
    ],
    pair: ['Barolo or Barbaresco is the classic Piedmont match', 'Risotto alla Milanese is the canonical side', 'Panna cotta with a bitter orange sauce to finish'],
    store: 'Refrigerate in the sauce for up to 4 days or freeze for 3 months. Reheat gently, covered, at 150°C / 300°F for 30 minutes; boiling will make the meat stringy.',
    nut: [688, 58, 21, 38, 3, 7, 1120]
  },

  'chicken-parmigiana': {
    d: 'Shatteringly crisp breaded cutlets under a thin blanket of sauce and mozzarella, grilled just long enough to melt without steaming the crust. The trick is baking the cheese on top rather than drowning the chicken.',
    meta: 'Crispy chicken parmigiana that stays crunchy under the cheese — the restaurant technique of saucing lightly and grilling fast.',
    kw: ['chicken parmigiana recipe', 'chicken parmesan', 'breaded chicken cutlet', 'italian american chicken'],
    why: 'Sogginess comes from steam trapped between sauce and crust. Saucing only the centre of the cutlet leaves a crisp rim, and finishing under a hot grill for 3 minutes melts the mozzarella before moisture can migrate down into the breadcrumbs.',
    ing: [
      '4 chicken breasts, butterflied and pounded to 1 cm',
      '100 g plain flour',
      '2 large eggs, beaten',
      '120 g panko breadcrumbs',
      '40 g Parmigiano-Reggiano, grated, plus extra to finish',
      '1 tsp dried oregano',
      '400 ml simple tomato sauce, warmed',
      '200 g low-moisture mozzarella, torn',
      '150 ml olive oil, for frying',
      '1.5 tsp fine sea salt',
      '1 handful fresh basil leaves'
    ],
    st: [
      'Season the pounded cutlets on both sides and leave for 10 minutes so the salt can penetrate.',
      'Set up three trays: flour, beaten egg, and panko mixed with the Parmigiano and oregano.',
      'Coat each cutlet in flour, shaking off the excess, then egg, letting the surplus drip away, then press firmly into the panko on both sides. Rest the breaded cutlets on a rack for 10 minutes to set the crust.',
      'Heat the olive oil in a wide pan to 175°C / 350°F. Fry two cutlets at a time for 3 minutes per side until deep gold, then drain on a rack — never on paper, which steams the underside soft.',
      'Heat the grill to high. Arrange the cutlets on a baking sheet and spoon 3 tablespoons of warm sauce down the centre of each, leaving a crisp border exposed.',
      'Top with torn mozzarella and a dusting of Parmigiano. Grill 12 cm from the element for 3 to 4 minutes until the cheese blisters and browns in spots.',
      'Finish with fresh basil and serve immediately.'
    ],
    tips: [
      'Pound to an even 1 cm. Uneven cutlets either dry out at the thin end or stay raw at the thick one.',
      'Rest the breaded cutlets before frying — it glues the crumb on so it does not slide off in the pan.',
      'Grate your own mozzarella from a block. Pre-shredded cheese has starch on it that browns unevenly.'
    ],
    pair: ['Chianti Classico or a Sangiovese blend', 'Spaghetti with garlic and oil, or a simple rocket salad', 'Tiramisu for a full Italian-American spread'],
    store: 'Refrigerate for 3 days. Reheat in a 190°C / 375°F oven on a rack for 12 minutes to bring the crust back; the microwave will ruin it.',
    nut: [706, 62, 38, 36, 3, 7, 1240]
  },

  'potato-gnocchi': {
    d: 'Pillowy potato gnocchi that float rather than sink, dressed in nothing more than nut-brown butter and crisped sage. The whole recipe hinges on using floury baked potatoes and the least flour you can get away with.',
    meta: 'Light, pillowy potato gnocchi with brown butter and sage. The baked-potato method that keeps them from turning gluey.',
    kw: ['potato gnocchi recipe', 'homemade gnocchi', 'brown butter sage sauce', 'italian dumplings'],
    why: 'Boiled potatoes absorb water, which forces you to add more flour, which develops gluten and makes gnocchi chewy. Baking the potatoes in their skins drives moisture out instead, so a small amount of flour is enough to bind — and less flour means lighter dumplings.',
    ing: [
      '# For the gnocchi',
      '1 kg floury potatoes, such as Maris Piper or Russet',
      '180 g plain flour, plus extra for dusting',
      '1 large egg yolk',
      '1.5 tsp fine sea salt',
      '0.25 tsp freshly grated nutmeg',
      '# For the sauce',
      '120 g unsalted butter',
      '20 fresh sage leaves',
      '60 g Parmigiano-Reggiano, grated',
      '1 pinch black pepper'
    ],
    st: [
      'Bake the potatoes whole, unwrapped, at 200°C / 400°F for 60 to 75 minutes until completely tender. Do not boil them.',
      'Halve them the moment they come out and scoop the flesh straight into a ricer while still steaming hot, pressing it onto a clean work surface in a loose, fluffy layer. Let the steam escape for 5 minutes.',
      'Scatter over the flour, salt and nutmeg, then drizzle on the egg yolk. Fold and press with a bench scraper just until a soft dough comes together — 30 seconds, no kneading.',
      'Cut the dough into six pieces. Roll each into a 2 cm rope on a floured surface and cut into 2 cm pillows.',
      'Roll each pillow down the back of a fork or a gnocchi board to make ridges, which hold the sauce. Lay them on a floured tray.',
      'Melt the butter in a wide pan over medium heat. Let it foam, subside and turn hazelnut brown, about 4 minutes, then add the sage and fry for 30 seconds until crisp. Take off the heat.',
      'Boil the gnocchi in well-salted water in two batches. They are done 30 seconds after they float, roughly 90 seconds total.',
      'Lift them straight into the sage butter with a slotted spoon along with a splash of cooking water, toss to coat, and serve with Parmigiano and black pepper.'
    ],
    tips: [
      'Test one gnocco before shaping the whole batch. If it disintegrates, work in another 20 g of flour.',
      'The dough should feel tacky, not smooth. Smooth dough means too much flour and heavy gnocchi.',
      'Uncooked gnocchi freeze perfectly on the tray, then bag them — cook from frozen, adding 30 seconds.'
    ],
    pair: ['A light Pinot Grigio or Dolcetto', 'Roasted butternut squash or wilted spinach on the side', 'Affogato for dessert'],
    store: 'Cooked gnocchi keep 2 days refrigerated; pan-fry them in butter rather than reboiling. Raw gnocchi freeze for 2 months.',
    nut: [612, 15, 72, 30, 5, 3, 780]
  },

  'pesto-genovese': {
    d: 'Genoese pesto made the traditional way, with basil bruised rather than blitzed, so the sauce stays emerald green instead of turning army drab. Seven ingredients, ten minutes, and a flavour that shop-bought jars cannot touch.',
    meta: 'Authentic pesto alla Genovese with basil, pine nuts and two cheeses — the technique that keeps it vivid green, not brown.',
    kw: ['pesto genovese recipe', 'homemade basil pesto', 'authentic italian pesto', 'pesto pasta'],
    why: 'Basil browns through oxidation driven by an enzyme called polyphenol oxidase, which a food processor\'s blade heat and aeration activate. Blanching the leaves for five seconds denatures that enzyme, and a mortar\'s crushing action releases oils without whipping air into the sauce.',
    ing: [
      '80 g fresh basil leaves, from young plants',
      '30 g pine nuts',
      '1 garlic clove, peeled and green germ removed',
      '50 g Parmigiano-Reggiano, grated',
      '25 g Pecorino Sardo, grated',
      '120 ml extra-virgin olive oil, mild and fruity',
      '0.5 tsp coarse sea salt',
      '400 g trofie or linguine'
    ],
    st: [
      'Blanch the basil leaves for 5 seconds in boiling water, then plunge into iced water. Drain and squeeze dry in a tea towel. This locks in the colour.',
      'Toast the pine nuts in a dry pan for 3 minutes until barely golden, then cool completely.',
      'In a mortar, pound the garlic with the coarse salt into a paste — the salt crystals act as an abrasive.',
      'Add the basil a handful at a time, grinding with a circular motion against the sides rather than pounding straight down.',
      'Work in the pine nuts until the paste is creamy, then the two cheeses.',
      'Drizzle in the olive oil slowly, stirring with the pestle rather than grinding, until the sauce is loose and glossy.',
      'Cook the pasta, reserving 150 ml of water. Toss the pasta with the pesto off the heat, loosening with pasta water — never heat pesto directly or it will turn bitter and dull.'
    ],
    tips: [
      'If you use a food processor, chill the bowl and blade first and pulse in short bursts to limit heat.',
      'Traditional Ligurian pesto pasta includes boiled potato cubes and green beans cooked in the pasta water. Try it once.',
      'Cover stored pesto with a 5 mm film of olive oil to seal it from air.'
    ],
    pair: ['Vermentino from Liguria is the local pairing', 'Serve with green beans and waxy potatoes tossed through', 'Lemon granita to finish'],
    store: 'Refrigerate under a layer of oil for 5 days, or freeze in ice-cube trays for 6 months. Add the cheese after thawing if freezing for best texture.',
    nut: [668, 20, 70, 35, 4, 3, 640]
  },

  'minestrone-soup': {
    d: 'A big, generous vegetable soup built on a slow soffritto and thickened by the beans themselves rather than cream. Naturally vegan, endlessly adaptable, and better on the second day.',
    meta: 'Hearty Italian minestrone soup with a slow soffritto base, cannellini beans and seasonal vegetables. Naturally vegan.',
    kw: ['minestrone soup recipe', 'italian vegetable soup', 'vegan soup', 'healthy soup recipe'],
    why: 'Mashing a cupful of the cannellini beans and stirring them back in releases starch that thickens the broth to a velvety body without a drop of dairy. Adding the vegetables in stages — hard roots first, greens last — means every one is cooked correctly rather than uniformly overcooked.',
    ing: [
      '3 tbsp extra-virgin olive oil, plus more to serve',
      '1 medium onion, diced',
      '2 carrots, diced',
      '2 celery sticks, diced',
      '3 garlic cloves, sliced',
      '1 tbsp tomato purée',
      '400 g tinned plum tomatoes, crushed',
      '1.5 l vegetable stock',
      '1 Parmesan rind, optional',
      '2 potatoes, cut into 1.5 cm cubes',
      '150 g green beans, cut into 3 cm lengths',
      '1 courgette, diced',
      '480 g tinned cannellini beans, drained',
      '100 g small pasta such as ditalini',
      '80 g cavolo nero, shredded',
      '1.5 tsp fine sea salt',
      '1 small bunch basil, torn'
    ],
    st: [
      'Warm the olive oil in a large pot and sweat the onion, carrot and celery over low heat for 12 to 15 minutes until completely soft and sweet. This soffritto is the flavour base — rushing it costs you the whole dish.',
      'Add the garlic and tomato purée and cook for 2 minutes until the purée darkens to brick red.',
      'Add the crushed tomatoes, stock, salt and the Parmesan rind if using. Bring to a simmer.',
      'Add the potatoes and cook for 10 minutes, then the green beans and courgette for a further 8.',
      'Mash a quarter of the cannellini beans with a fork and stir them in along with the whole ones.',
      'Add the pasta and cook for the time on the packet, adding the cavolo nero for the last 4 minutes.',
      'Remove the rind, stir through the basil, and rest off the heat for 10 minutes before serving with a hard drizzle of good olive oil.'
    ],
    tips: [
      'Save your Parmesan rinds in the freezer. Each one adds a savoury depth that stock alone cannot.',
      'Cook the pasta separately if you plan on leftovers, or it will swell and drink the broth overnight.',
      'Swap in whatever is seasonal — this soup was invented to use up the garden.'
    ],
    pair: ['A light Verdicchio or simply water', 'Grilled sourdough rubbed with garlic', 'Fresh fruit and a wedge of Pecorino'],
    store: 'Refrigerate 4 days, freeze 3 months without the pasta. Thin with a splash of stock when reheating, as the beans continue to thicken it.',
    nut: [346, 14, 52, 10, 11, 9, 880]
  },

  'caprese-salad': {
    d: 'Three ingredients in the colours of the Italian flag, which means there is nowhere to hide. Ripe tomatoes at room temperature, milky buffalo mozzarella and peppery olive oil are all this needs — the technique is entirely in the shopping.',
    meta: 'Classic Caprese salad with buffalo mozzarella, ripe tomatoes and basil. Five minutes, three ingredients, done properly.',
    kw: ['caprese salad recipe', 'tomato mozzarella salad', 'italian salad', 'low carb salad'],
    why: 'Cold dulls the volatile aroma compounds in tomatoes and firms the fat in mozzarella into a squeaky texture. Bringing both to room temperature for 30 minutes roughly doubles the perceived flavour, and salting the tomatoes ten minutes ahead draws out juice that becomes part of the dressing.',
    ing: [
      '4 large ripe tomatoes, at room temperature',
      '250 g buffalo mozzarella, at room temperature',
      '1 large handful fresh basil leaves',
      '4 tbsp extra-virgin olive oil, peppery and green',
      '0.75 tsp flaky sea salt',
      '0.25 tsp black pepper, coarsely ground'
    ],
    st: [
      'Take the tomatoes and mozzarella out of the fridge 30 minutes ahead. This single step matters more than everything else combined.',
      'Slice the tomatoes 1 cm thick, lay them on the serving plate and season with half the flaky salt. Leave for 10 minutes to draw out their juices.',
      'Tear the mozzarella into rough pieces rather than slicing it — torn edges hold dressing and look far better than neat discs.',
      'Arrange the mozzarella among the tomatoes and tuck whole basil leaves throughout. Never chop basil for caprese; the cut edges blacken within minutes.',
      'Drizzle generously with olive oil, finish with the remaining salt and the black pepper, and serve within 15 minutes.'
    ],
    tips: [
      'Never refrigerate a tomato. Below 12°C the enzymes that create its aroma shut down permanently.',
      'Skip the balsamic. In Campania it is considered an intrusion, and its sweetness masks a good tomato.',
      'If your tomatoes are less than perfect, a pinch of sugar with the salt will help them along.'
    ],
    pair: ['A chilled Falanghina or Greco di Tufo', 'Serve with warm focaccia to mop the plate', 'Follow with grilled fish'],
    store: 'Assemble to order. Cut tomatoes and torn mozzarella both deteriorate quickly; leftovers are best blitzed into a cold soup.',
    nut: [328, 16, 9, 26, 2, 6, 620]
  },

  'bruschetta': {
    d: 'Charred bread rubbed hard with raw garlic, doused in olive oil, and piled with tomatoes that have been salted just long enough to concentrate. The Italian original is a lesson in how few ingredients a great appetiser needs.',
    meta: 'Authentic tomato bruschetta with garlic-rubbed grilled bread and salted tomatoes. The classic Italian appetiser in 20 minutes.',
    kw: ['bruschetta recipe', 'tomato bruschetta', 'italian appetizer', 'garlic bread topping'],
    why: 'Salting diced tomatoes and draining them for 15 minutes pulls out watery liquid that would otherwise turn the toast to mush, while concentrating the sugars and acids left behind. The bread must be grilled hard enough to form a rough, abrasive surface — that texture is what shreds the raw garlic clove into the crust.',
    ing: [
      '6 thick slices country sourdough',
      '500 g ripe tomatoes, deseeded and diced',
      '2 garlic cloves, halved',
      '5 tbsp extra-virgin olive oil',
      '1 tsp flaky sea salt',
      '12 fresh basil leaves, torn',
      '0.25 tsp black pepper'
    ],
    st: [
      'Toss the diced tomatoes with half the salt in a sieve set over a bowl and leave to drain for 15 minutes.',
      'Grill or char the bread over a hot griddle, or under a grill, for 2 minutes a side until well marked and dry to the touch.',
      'While the toast is still hot, rub each slice firmly with a cut garlic clove — the rough surface acts like a grater.',
      'Drizzle each slice with olive oil and let it soak in for a minute.',
      'Toss the drained tomatoes with the basil, remaining salt, pepper and the rest of the olive oil.',
      'Spoon on top just before serving. Bruschetta waits for no one — assemble it at the table if you can.'
    ],
    tips: [
      'Save the drained tomato juice and drink it, or use it to dress a salad. It is intensely flavoured.',
      'A stale-ish loaf grills better than a fresh one, holding structure under the topping.',
      'Use the best olive oil you own here — it is a raw ingredient, not a cooking fat.'
    ],
    pair: ['Prosecco or a dry Frascati', 'Serve alongside olives and cured meats as part of an antipasto', 'Follow with pasta al pomodoro'],
    store: 'The tomato topping keeps 2 days refrigerated and is excellent on pasta. Toast fresh bread each time; pre-assembled bruschetta goes soggy within 20 minutes.',
    nut: [268, 6, 32, 13, 3, 5, 560]
  },

  'arancini': {
    rest: [270, 'chilling'],
    d: 'Sicilian rice balls with a molten mozzarella and ragù heart, breadcrumbed and fried until they shatter. Traditionally made from leftover risotto, they are the finest argument for cooking too much rice on purpose.',
    meta: 'Crispy Sicilian arancini with a molten mozzarella and ragù centre — the classic street-food rice balls, made from scratch.',
    kw: ['arancini recipe', 'sicilian rice balls', 'fried risotto balls', 'italian street food'],
    why: 'Risotto must be fridge-cold before shaping: as it chills, the amylopectin retrogrades and the rice sets firm enough to hold a sphere under frying. A double crumb — flour, egg, then breadcrumbs — creates a moisture-proof shell so the cheese melts inside while the crust stays crisp.',
    ing: [
      '# For the rice',
      '300 g Arborio rice',
      '1 l chicken stock, hot',
      '1 small onion, finely diced',
      '0.25 tsp saffron threads',
      '60 g Parmigiano-Reggiano, grated',
      '40 g unsalted butter',
      '2 tbsp olive oil',
      '1 tsp fine sea salt',
      '# For the filling and coating',
      '150 g beef ragù, thick and cold',
      '120 g low-moisture mozzarella, cut into 1 cm cubes',
      '60 g frozen peas, blanched',
      '100 g plain flour',
      '3 large eggs, beaten',
      '200 g fine dried breadcrumbs',
      '1 l sunflower oil, for deep-frying'
    ],
    st: [
      'Make a firm risotto: sweat the onion in the oil, toast the rice for 2 minutes, then add hot stock a ladle at a time with the saffron until the rice is just cooked and quite dry, about 16 minutes. Beat in the butter, Parmigiano and salt.',
      'Spread the rice on a tray, cover, and refrigerate for at least 4 hours or overnight. It must be completely cold and stiff.',
      'Take a heaped tablespoon of rice, flatten it in your damp palm, and press a hollow in the centre. Fill with a teaspoon of ragù, a mozzarella cube and a few peas.',
      'Add more rice on top and roll gently into a smooth ball or the traditional cone shape, about 80 g each. Seal any cracks with wet fingers.',
      'Roll each ball in flour, then beaten egg, then breadcrumbs, pressing firmly. For extra insurance, repeat the egg and crumb.',
      'Chill the coated arancini for 30 minutes to set the crust.',
      'Heat the oil to 175°C / 350°F. Fry three or four at a time for 4 to 5 minutes, turning, until deep golden brown all over.',
      'Drain on a rack and rest for 3 minutes before eating — the centre is molten and will scald.'
    ],
    tips: [
      'Keep a bowl of water beside you and wet your hands often; the rice will not stick.',
      'If a ball cracks in the oil the cheese escapes. When in doubt, double-crumb it.',
      'Test the oil with a pinch of breadcrumbs: they should sizzle steadily, not violently.'
    ],
    pair: ['A cold Sicilian Grillo or a light beer', 'Serve with a bowl of warm marinara for dipping', 'Follow with a bitter leaf salad'],
    store: 'Shaped uncooked arancini freeze for 2 months — fry from frozen at 165°C / 330°F for 7 minutes. Cooked ones reheat in an oven at 190°C / 375°F for 12 minutes.',
    nut: [486, 18, 54, 21, 3, 3, 780]
  },

  'focaccia': {
    rest: [750, 'chilling'],
    d: 'A high-hydration focaccia with a crackling, olive-oil-fried base and a crumb full of irregular holes, dimpled with rosemary and flaky salt. The overnight fridge rise does all the work while you sleep.',
    meta: 'No-knead rosemary focaccia with a crisp olive-oil base and open, airy crumb. An overnight cold rise does the work for you.',
    kw: ['focaccia recipe', 'no knead focaccia', 'italian bread', 'rosemary focaccia'],
    why: 'At 80% hydration the dough is too slack to knead, so time replaces mechanical work: over a long cold ferment, gluten strands align on their own and yeast produces the organic acids that give focaccia its flavour. The generous oil in the tin effectively shallow-fries the base, creating a crust no dry tin can match.',
    ing: [
      '500 g strong white bread flour',
      '400 ml lukewarm water',
      '10 g fine sea salt',
      '7 g instant dried yeast',
      '2 tsp honey or sugar',
      '80 ml extra-virgin olive oil',
      '3 sprigs fresh rosemary, leaves picked',
      '1 tsp flaky sea salt'
    ],
    st: [
      'Whisk the flour, salt and yeast in a large bowl. Stir the honey into the water, pour it in, and mix with a spatula until no dry flour remains. The dough will be wet and shaggy — this is correct.',
      'Cover and leave at room temperature for 30 minutes, then perform four sets of stretch-and-folds 30 minutes apart: wet your hand, lift one side of the dough up and fold it over, rotating the bowl each time.',
      'Cover tightly and refrigerate for 12 to 24 hours. The dough will roughly double and fill with bubbles.',
      'Pour 40 ml of the olive oil into a 30 x 20 cm tin and spread it up the sides. Tip the dough in without deflating it and turn once to coat.',
      'Let it come to room temperature and relax for 2 to 3 hours, until puffy and jiggly and nearly filling the tin.',
      'Heat the oven to 220°C / 430°F. Oil your fingers with the remaining oil and press straight down through the dough to the base, making deep dimples all over.',
      'Scatter with rosemary and flaky salt. Bake for 22 to 25 minutes until deep golden and the base sounds hollow.',
      'Lift out of the tin onto a rack immediately so the base stays crisp. Serve warm.'
    ],
    tips: [
      'Do not skimp on the oil in the tin. It is what fries the base into that signature crust.',
      'Press the dimples all the way to the bottom of the tin — timid dimples close up and the bread bakes flat and dense.',
      'A tablespoon of the oil warmed with garlic and brushed on after baking takes it to another level.'
    ],
    pair: ['Serve with a plate of prosciutto and a glass of Vermentino', 'Split it for sandwiches with mortadella and stracciatella', 'Excellent alongside minestrone'],
    store: 'Best on the day it is baked. Keeps 2 days in a paper bag; refresh in a 200°C / 400°F oven for 5 minutes. Freezes well sliced for 2 months.',
    nut: [312, 8, 46, 11, 2, 2, 620]
  },

  'tiramisu': {
    rest: [360, 'chilling'],
    d: 'The Venetian classic, built on a properly cooked zabaglione so it sets firm without gelatine and carries no raw-egg worry. Espresso-soaked savoiardi, mascarpone cream and a heavy dusting of cocoa — no baking required.',
    meta: 'Authentic tiramisu with cooked zabaglione, espresso-soaked savoiardi and mascarpone cream. No gelatine, no raw eggs.',
    kw: ['tiramisu recipe', 'authentic italian tiramisu', 'no bake dessert', 'mascarpone dessert'],
    why: 'Whisking the yolks and sugar over simmering water to 75°C pasteurises them and, crucially, denatures the proteins so they trap air permanently — the resulting zabaglione sets the cream without any gelatine. Dipping the savoiardi for exactly one second per side hydrates the surface while leaving a dry core that softens overnight into the ideal texture.',
    ing: [
      '4 large egg yolks',
      '100 g caster sugar',
      '60 ml dry Marsala wine',
      '500 g mascarpone, at room temperature',
      '250 ml double cream, cold',
      '300 ml strong espresso, cooled',
      '2 tbsp dark rum, optional',
      '24 savoiardi (Italian ladyfingers)',
      '3 tbsp unsweetened cocoa powder',
      '30 g dark chocolate, for shaving'
    ],
    st: [
      'Set a heatproof bowl over a pan of barely simmering water, making sure it does not touch the surface. Whisk the yolks, sugar and Marsala constantly for 8 to 10 minutes until thick, pale and ribbon-forming, reaching 75°C on a thermometer.',
      'Take the bowl off the heat and keep whisking for 2 minutes as it cools slightly. Then cool completely over an ice bath, about 10 minutes.',
      'Loosen the mascarpone with a spatula until smooth, then fold the cooled zabaglione into it in three additions.',
      'Whip the cold double cream to soft peaks and fold it in gently — you want to keep the air you worked so hard for.',
      'Combine the espresso and rum in a shallow dish. Dip each savoiardo for one second per side. Any longer and it will collapse.',
      'Line a 25 x 18 cm dish with a single layer of dipped biscuits, spread over half the cream, then repeat.',
      'Smooth the top, cover and refrigerate for at least 6 hours, ideally overnight. This rest is not optional — the biscuits need time to soften through.',
      'Dust heavily with cocoa through a fine sieve just before serving and finish with chocolate shavings.'
    ],
    tips: [
      'Room-temperature mascarpone folds smoothly; cold mascarpone splits into lumps that no amount of beating will fix.',
      'Dust the cocoa at the last moment. Applied early it absorbs moisture and turns patchy and dark.',
      'For a child-friendly version, use strong decaf coffee and replace the Marsala with an extra tablespoon of espresso.'
    ],
    pair: ['A glass of Vin Santo or the same Marsala used in the cream', 'Serve with a short, bitter espresso', 'Follows any rich pasta beautifully'],
    store: 'Refrigerate for up to 3 days, covered — it improves on day two. Freezes for 1 month; thaw overnight in the fridge and re-dust with cocoa before serving.',
    nut: [524, 9, 38, 36, 1, 28, 110]
  },

  'panna-cotta': {
    rest: [240, 'chilling'],
    d: 'A vanilla panna cotta set at the exact edge of collapse, so it wobbles under a spoon and melts on the tongue. Five ingredients, fifteen minutes of work, and the most elegant thing you can put in front of guests.',
    meta: 'Silky vanilla panna cotta with the perfect wobble — a five-ingredient Italian dessert that takes 15 minutes to make.',
    kw: ['panna cotta recipe', 'vanilla panna cotta', 'italian dessert', 'gluten free dessert'],
    why: 'The ratio of gelatine to cream is everything: 2 g of gelatine per 250 ml sets a cream that just holds its shape and dissolves instantly on the tongue, while the usual 4 g makes a firm, rubbery pudding. Blooming the gelatine in cold water first fully hydrates the strands so they dissolve evenly without leaving a grainy set.',
    ing: [
      '500 ml double cream',
      '250 ml whole milk',
      '90 g caster sugar',
      '1 vanilla pod, split and seeds scraped',
      '6 g leaf gelatine, about 3 sheets',
      '1 pinch fine sea salt',
      '250 g mixed berries, to serve',
      '1 tbsp caster sugar, for the berries'
    ],
    st: [
      'Soak the gelatine leaves in a bowl of cold water for 5 minutes until floppy.',
      'Put the cream, milk, sugar, salt and the vanilla pod and seeds in a pan. Warm over medium-low heat, stirring, until the sugar dissolves and the mixture steams — about 70°C. Do not let it boil, which would drive off the vanilla aromatics.',
      'Take off the heat and let it infuse for 10 minutes, then remove the pod.',
      'Squeeze the gelatine dry and whisk it into the warm cream until completely dissolved.',
      'Pass through a fine sieve into a jug — this catches any undissolved gelatine and guarantees a flawless texture.',
      'Pour into six moulds or glasses. Cool to room temperature, then refrigerate for at least 4 hours until just set.',
      'Toss the berries with a tablespoon of sugar and let them macerate for 20 minutes to draw out a syrup.',
      'To unmould, dip each mould in hot water for 3 seconds and invert onto a plate. Spoon the berries alongside.'
    ],
    tips: [
      'Serve in the glass if you are nervous — the wobble is easier to achieve when you do not need it to stand up.',
      'Powdered gelatine works: use 5 g and bloom it in 3 tablespoons of cold water for 5 minutes.',
      'Infuse the cream with coffee beans, citrus peel or a bay leaf for a subtle variation.'
    ],
    pair: ['Moscato d\'Asti or a late-harvest Riesling', 'A crisp almond biscotti for contrast', 'Follows osso buco or risotto perfectly'],
    store: 'Refrigerate, covered, for up to 3 days. Do not freeze — gelatine sets weep on thawing and the texture is lost.',
    nut: [398, 5, 24, 32, 1, 23, 70]
  }
};
