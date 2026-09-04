/** American savoury & breakfast recipe details. See ./italian.js for the field schema. */

module.exports = {
  'classic-cheeseburger': {
    d: 'A smash burger with lace-edged, deeply browned patties, American cheese melted to the edges and a soft toasted bun. Thin patties, a screaming-hot surface and no fiddling — that is the entire method.',
    meta: 'The perfect smash cheeseburger with lacy browned edges and melted American cheese. Ten minutes, four rules.',
    kw: ['smash burger recipe', 'classic cheeseburger', 'best burger recipe', 'homemade burger'],
    why: 'Smashing a loose ball of beef onto a hot surface maximises contact area, and the Maillard reaction that follows produces hundreds of flavour compounds in under two minutes. Salting only after smashing matters: salt applied to raw mince dissolves the proteins and turns the texture springy and sausage-like.',
    ing: [
      '600 g beef mince, 20% fat, loosely formed into 6 balls',
      '6 slices American cheese',
      '4 soft brioche or potato buns',
      '40 g unsalted butter, softened',
      '1.5 tsp flaky sea salt',
      '1 tsp black pepper, coarsely ground',
      '1 small white onion, very thinly sliced',
      '8 dill pickle slices',
      '4 tbsp mayonnaise',
      '2 tbsp yellow mustard',
      '2 tbsp tomato ketchup',
      '1 tbsp neutral oil'
    ],
    st: [
      'Form the mince into loose balls without compressing them. Handle as little as possible — a tightly packed ball becomes a dense patty.',
      'Mix the mayonnaise, mustard and ketchup into a burger sauce and set aside.',
      'Butter the cut sides of the buns and toast them face down in a dry pan for 60 to 90 seconds until golden. Set aside.',
      'Heat a heavy cast-iron skillet or flat griddle over the highest heat for 5 minutes, until a drop of water skitters and vanishes instantly. Add the oil.',
      'Place two balls in the pan and immediately smash each flat with a stiff spatula, pressing hard for a full 10 seconds until about 1 cm thick.',
      'Season generously with salt and pepper and leave completely untouched for 90 seconds, until a dark brown crust forms and the edges go lacy.',
      'Scrape under the patty with a sharp-edged spatula, taking all the crust with it, and flip. Lay a slice of cheese on top and cook 45 seconds more.',
      'Stack two patties per bun. Build the burger as: bottom bun, sauce, onion, pickles, patties, top bun.',
      'Press gently, rest 60 seconds so the cheese sets slightly, and serve immediately.'
    ],
    tips: [
      'Fat content is not negotiable. Lean mince makes a dry burger no technique can rescue.',
      'Use a stiff metal spatula, not a flexible one — you need to scrape the crust off the pan, not slide under the meat.',
      'Two thin patties beat one thick one: double the crust for the same amount of beef.'
    ],
    pair: ['A cold lager or a bold Zinfandel', 'Serve with fries and a dill pickle spear', 'Finish with a milkshake'],
    store: 'Burgers are an immediate dish. Raw formed balls keep 1 day refrigerated. Cooked patties keep 2 days and are best chopped into a hash.',
    nut: [742, 42, 38, 46, 2, 8, 1280]
  },

  'bbq-baby-back-ribs': {
    d: 'Oven-baked ribs with a dry rub, a low three-hour cook and a final glaze under the grill. No smoker needed, and the meat pulls cleanly from the bone without falling apart into mush.',
    meta: 'Tender oven-baked BBQ baby back ribs with a spice rub and sticky glaze. No smoker needed, no boiling, no mush.',
    kw: ['bbq ribs recipe', 'baby back ribs oven', 'dry rub ribs', 'sticky bbq glaze'],
    why: 'Ribs need a long stretch between 70 and 95°C for collagen to melt into gelatine, which is why a three-hour low bake produces tender meat where a fast roast produces leather. Removing the papery membrane from the bone side lets both the rub and the rendered fat penetrate, instead of being sealed out.',
    ing: [
      '# For the ribs and rub',
      '2 racks baby back ribs, about 1.5 kg total',
      '3 tbsp light brown sugar',
      '1 tbsp smoked paprika',
      '2 tsp fine sea salt',
      '2 tsp garlic powder',
      '2 tsp onion powder',
      '1 tsp mustard powder',
      '1 tsp black pepper',
      '0.5 tsp cayenne pepper',
      '1 tbsp yellow mustard, for binding',
      '# For the glaze',
      '200 ml tomato ketchup',
      '3 tbsp cider vinegar',
      '3 tbsp molasses or dark treacle',
      '2 tbsp light brown sugar',
      '1 tbsp Worcestershire sauce',
      '1 tsp smoked paprika',
      '0.5 tsp fine sea salt'
    ],
    st: [
      'Turn the racks bone-side up. Slide a knife under the silvery membrane at one end, grip it with kitchen paper and peel it off in one sheet.',
      'Rub the racks all over with the yellow mustard — it adds no flavour but glues the rub in place.',
      'Mix the rub ingredients and coat both sides heavily, pressing it in. Rest at room temperature for 30 minutes, or refrigerate overnight.',
      'Wrap each rack tightly in a double layer of foil and set on a baking tray.',
      'Bake at 140°C / 285°F for 2.5 hours, until a toothpick slides between the bones with almost no resistance.',
      'Meanwhile simmer all the glaze ingredients together for 10 minutes until thick and glossy.',
      'Unwrap the ribs, pour off the liquid, and brush generously with glaze.',
      'Grill or bake at 220°C / 430°F for 8 to 12 minutes, brushing with more glaze every 4 minutes, until sticky and charred at the edges.',
      'Rest for 10 minutes, then slice between the bones and serve with the remaining glaze.'
    ],
    tips: [
      'Do not boil ribs. It leaches flavour into water you then throw away.',
      'The bend test tells you when they are ready: lift a rack with tongs and it should bow deeply and crack on the surface.',
      'Save the rendered liquid from the foil, skim it, and stir a few spoonfuls into the glaze.'
    ],
    pair: ['A cold lager or a bourbon on ice', 'Serve with coleslaw, cornbread and pickles', 'Finish with key lime pie'],
    store: 'Refrigerate 4 days, freeze 3 months. Reheat wrapped in foil at 150°C / 300°F for 25 minutes, then re-glaze under the grill.',
    nut: [812, 52, 42, 48, 2, 34, 1620]
  },

  'buffalo-wings': {
    rest: [240, 'chilling'],
    d: 'The Anchor Bar original, baked rather than fried using a baking powder trick that makes the skin crackle like it came out of a fryer, then tossed in a butter-emulsified hot sauce.',
    meta: 'Crispy baked buffalo wings with the baking powder trick — fried-level crunch, no deep fryer, plus a real butter hot sauce.',
    kw: ['buffalo wings recipe', 'crispy baked wings', 'hot wing sauce', 'gluten free appetizer'],
    why: 'Baking powder raises the skin\'s pH, which speeds up the Maillard reaction and helps break down proteins into smaller strands that dry and crisp. Combined with a slow start at low heat to render the fat, it gets baked wings genuinely close to deep-fried.',
    ing: [
      '# For the wings',
      '1.2 kg chicken wings, split into flats and drumettes',
      '1 tbsp baking powder, aluminium-free',
      '1.5 tsp fine sea salt',
      '1 tsp garlic powder',
      '0.5 tsp black pepper',
      '# For the buffalo sauce',
      '120 ml Frank\'s RedHot or similar cayenne pepper sauce',
      '80 g unsalted butter, cubed',
      '1 tbsp cider vinegar',
      '1 tsp Worcestershire sauce',
      '0.5 tsp garlic powder',
      '# To serve',
      '150 ml blue cheese dressing',
      '4 celery sticks, cut into batons',
      '2 carrots, cut into batons'
    ],
    st: [
      'Pat the wings extremely dry with kitchen paper — this takes longer than you think and matters more than anything else.',
      'Toss them with the baking powder, salt, garlic powder and pepper until evenly and lightly coated.',
      'Arrange on a rack set over a foil-lined tray, skin side up, with space between each piece. Refrigerate uncovered for at least 4 hours, or overnight, to dry the skin further.',
      'Bake at 120°C / 250°F on a low shelf for 30 minutes. This renders the fat without colouring.',
      'Move to the upper shelf, raise the heat to 220°C / 430°F, and bake a further 40 to 45 minutes, turning once, until deep golden and blistered.',
      'Meanwhile, warm the hot sauce, vinegar, Worcestershire and garlic powder in a pan. Take off the heat and whisk in the cold butter a cube at a time to make a glossy, emulsified sauce.',
      'Tip the hot wings into a large bowl, pour over the sauce, and toss for 30 seconds until every piece is coated.',
      'Serve immediately with blue cheese dressing and celery and carrot sticks.'
    ],
    tips: [
      'Use aluminium-free baking powder. The regular kind leaves a metallic aftertaste.',
      'Never add cold sauce to hot wings without emulsifying the butter first, or it will split into an oily mess.',
      'The overnight fridge dry is the single biggest upgrade to the texture.'
    ],
    pair: ['A cold lager, ideally something light and fizzy', 'Serve with celery, blue cheese and plenty of napkins', 'Finish with brownies'],
    store: 'Refrigerate 3 days undressed. Re-crisp at 200°C / 390°F for 10 minutes and sauce fresh — sauced wings go soft within an hour.',
    nut: [612, 44, 6, 46, 1, 2, 1680]
  },

  'southern-fried-chicken': {
    rest: [240, 'chilling'],
    d: 'Buttermilk-brined chicken in a craggy, well-seasoned crust, fried in a cast-iron skillet. The double dredge and a rest before frying are what give it those shattering ridges.',
    meta: 'Southern fried chicken with a buttermilk brine and craggy double-dredged crust. Cast-iron method, properly seasoned.',
    kw: ['fried chicken recipe', 'southern fried chicken', 'buttermilk fried chicken', 'crispy chicken'],
    why: 'Buttermilk brine works through both salt and acid: the salt helps the muscle retain water while the lactic acid gently loosens the proteins, so the meat stays juicy through frying. Dampening the flour with a spoonful of buttermilk creates shaggy clumps that fry into the ridged, craggy crust that defines Southern chicken.',
    ing: [
      '# For the brine',
      '1.5 kg chicken pieces, bone in, skin on',
      '600 ml buttermilk',
      '2 tbsp fine sea salt',
      '1 tbsp hot sauce',
      '1 tsp black pepper',
      '# For the dredge',
      '350 g plain flour',
      '3 tbsp cornflour',
      '1 tbsp fine sea salt',
      '2 tsp garlic powder',
      '2 tsp onion powder',
      '2 tsp sweet paprika',
      '1 tsp black pepper',
      '1 tsp cayenne pepper',
      '1 tsp dried thyme',
      '# For frying',
      '1.5 l groundnut oil, or 500 g lard'
    ],
    st: [
      'Submerge the chicken in the buttermilk with the salt, hot sauce and pepper. Refrigerate 4 to 24 hours.',
      'Whisk all the dredge ingredients together in a wide bowl. Drizzle in 3 tablespoons of the brine buttermilk and rub it through with your fingers until the flour is speckled with small clumps.',
      'Lift each piece of chicken from the brine, letting the excess drip off, and press it firmly into the flour, packing it on. Shake off the loose flour only.',
      'For a heavier crust, dip it back into the buttermilk and dredge a second time.',
      'Rest the coated pieces on a rack for 20 minutes. The coating will turn from powdery to pasty, which is exactly what you want — it will not fall off in the oil.',
      'Heat the oil in a deep cast-iron skillet to 175°C / 350°F, filling it no more than halfway.',
      'Fry in batches of three or four, skin side down first, for 8 to 10 minutes, then turn and fry 8 to 10 minutes more. Keep the oil between 160 and 175°C throughout.',
      'Check with a thermometer: breasts are done at 74°C, thighs and drumsticks at 79°C where they are best.',
      'Drain on a rack, season immediately with a pinch of salt, and rest 10 minutes before serving.'
    ],
    tips: [
      'A rack, never paper towels. Paper traps steam and softens the bottom crust within a minute.',
      'Fry dark meat and white meat separately; they finish at different times.',
      'The oil will drop about 20°C when the chicken goes in. Start it slightly hotter than your target.'
    ],
    pair: ['A cold lager, sweet tea, or sparkling wine', 'Serve with coleslaw, biscuits and hot sauce', 'Finish with peach cobbler'],
    store: 'Refrigerate 3 days. Reheat on a rack at 190°C / 375°F for 12 minutes. It is also excellent cold, which is the point of a picnic.',
    nut: [688, 48, 38, 38, 2, 4, 1420]
  },

  'mac-and-cheese': {
    d: 'A baked macaroni cheese with a proper béchamel, three cheeses and a buttered breadcrumb top. Evaporated milk and a little mustard keep the sauce silky instead of grainy.',
    meta: 'Ultra-creamy baked mac and cheese with three cheeses and a crunchy breadcrumb top. The no-grain sauce technique.',
    kw: ['mac and cheese recipe', 'baked macaroni cheese', 'creamy cheese sauce', 'comfort food'],
    why: 'Cheese sauces break when heat causes the casein proteins to clump and squeeze out fat. Adding cheese off the heat, in handfuls, and using evaporated milk — whose proteins are already partly denatured and act as emulsifiers — keeps the sauce smooth even after baking.',
    ing: [
      '# For the pasta and sauce',
      '400 g macaroni',
      '60 g unsalted butter',
      '50 g plain flour',
      '600 ml whole milk, warmed',
      '200 ml evaporated milk',
      '250 g mature cheddar, grated',
      '150 g Gruyère, grated',
      '60 g Parmesan, grated',
      '1.5 tsp English mustard',
      '0.5 tsp sweet paprika',
      '0.25 tsp freshly grated nutmeg',
      '1.5 tsp fine sea salt',
      '0.5 tsp white pepper',
      '# For the topping',
      '80 g panko breadcrumbs',
      '30 g unsalted butter, melted',
      '40 g Parmesan, grated',
      '0.5 tsp smoked paprika'
    ],
    st: [
      'Cook the macaroni in well-salted water for 2 minutes less than the packet says. It will finish cooking in the oven. Drain and toss with a little oil.',
      'Melt the butter in a large pan, whisk in the flour, and cook over medium-low heat for 2 minutes until it smells biscuity but stays pale.',
      'Add the warm milk in four additions, whisking smooth between each, then the evaporated milk. Simmer for 5 minutes, whisking, until it thickly coats a spoon.',
      'Take the pan off the heat entirely. Stir in the mustard, paprika, nutmeg, salt and pepper.',
      'Add the cheddar and Gruyère a handful at a time, stirring until each is fully melted before adding more. Off the heat is not optional — this is where sauces split.',
      'Fold the pasta through the sauce. It should look slightly too loose; the pasta will drink it in the oven.',
      'Tip into a buttered baking dish. Mix the panko, melted butter, Parmesan and smoked paprika and scatter over the top.',
      'Bake at 190°C / 375°F for 22 to 25 minutes until bubbling at the edges and deep golden on top.',
      'Rest 10 minutes before serving so the sauce sets enough to spoon cleanly.'
    ],
    tips: [
      'Grate your own cheese. Pre-grated is dusted with cellulose that makes sauces gritty.',
      'Mature cheddar for flavour, Gruyère for melt. Using only cheddar gives you a greasier, less stable sauce.',
      'For a stovetop version, skip the baking and serve straight from the pan while loose.'
    ],
    pair: ['A crisp cider or an oaked Chardonnay', 'Serve with a sharp green salad to cut the richness', 'Finish with apple pie'],
    store: 'Refrigerate 4 days, freeze 3 months. Reheat covered at 170°C / 340°F with a splash of milk stirred through to loosen.',
    nut: [768, 34, 62, 42, 3, 10, 1180]
  },

  'meatloaf': {
    d: 'A meatloaf that slices cleanly and stays moist, built on a panade and free-formed on a tray rather than steamed in a tin. The tangy glaze goes on in two coats.',
    meta: 'Classic American meatloaf with a milk-bread panade and tangy two-coat glaze. Moist, sliceable, never dense.',
    kw: ['meatloaf recipe', 'classic american meatloaf', 'meatloaf glaze', 'comfort food dinner'],
    why: 'A panade — bread soaked in milk — works because its starches trap water and its milk proteins physically get between the meat proteins, preventing them from binding into a tight, bouncy mass. Free-forming the loaf on a tray lets fat drain and all four sides brown, where a loaf tin steams it in its own liquid.',
    ing: [
      '# For the loaf',
      '500 g beef mince, 15% fat',
      '400 g pork mince',
      '80 g fresh white breadcrumbs',
      '120 ml whole milk',
      '1 onion, finely diced',
      '2 celery sticks, finely diced',
      '3 garlic cloves, minced',
      '2 large eggs, beaten',
      '2 tbsp Worcestershire sauce',
      '2 tbsp tomato purée',
      '2 tsp fine sea salt',
      '1 tsp black pepper',
      '1 tsp dried thyme',
      '1 tbsp olive oil',
      '1 small bunch parsley, chopped',
      '# For the glaze',
      '150 ml tomato ketchup',
      '2 tbsp light brown sugar',
      '1 tbsp cider vinegar',
      '1 tsp English mustard'
    ],
    st: [
      'Soak the breadcrumbs in the milk for 10 minutes until completely saturated and pulpy.',
      'Sweat the onion, celery and garlic in the olive oil for 8 minutes until soft, then cool completely. Adding warm vegetables to raw meat starts cooking it prematurely.',
      'Combine the minces, soaked breadcrumbs, cooled vegetables, eggs, Worcestershire sauce, tomato purée, salt, pepper, thyme and parsley.',
      'Mix with your hands for no more than 60 seconds — just until combined. Overworking makes meatloaf rubbery.',
      'Shape into a 25 x 12 cm loaf on a foil-lined tray, doming the top slightly so fat runs off.',
      'Whisk the glaze ingredients together and brush half over the loaf.',
      'Bake at 180°C / 355°F for 40 minutes, then brush with the remaining glaze and bake a further 20 to 25 minutes, until the centre reaches 70°C.',
      'Rest for 15 minutes before slicing. Cutting it hot will crumble every slice.'
    ],
    tips: [
      'Fry a teaspoon of the mixture and taste it before shaping — it is the only way to check the seasoning.',
      'Two coats of glaze: one at the start that bakes in, one late that stays sticky.',
      'Leftover meatloaf sandwiches on white bread with extra glaze are arguably the point of making it.'
    ],
    pair: ['A medium-bodied Merlot or a brown ale', 'Serve with mashed potato and green beans', 'Finish with apple pie'],
    store: 'Refrigerate 4 days, freeze 3 months whole or in slices. Reheat slices in a covered pan with a spoonful of stock.',
    nut: [542, 38, 22, 34, 2, 12, 1180]
  },

  'philly-cheesesteak': {
    d: 'Thinly shaved ribeye, sweated onions and melted cheese crammed into a soft hoagie roll. The debate over Cheez Whiz versus provolone will never be settled; both are given here.',
    meta: 'Authentic Philly cheesesteak with shaved ribeye, sweated onions and melted cheese in a soft hoagie roll. 30 minutes.',
    kw: ['philly cheesesteak recipe', 'cheesesteak sandwich', 'shaved ribeye sandwich', 'american sandwich'],
    why: 'Half-freezing the ribeye lets you shave it into paper-thin sheets that cook in seconds, so the meat never has time to toughen. Chopping it on the griddle as it cooks — rather than before — keeps the pieces irregular, which traps cheese and onion in every bite.',
    ing: [
      '700 g ribeye steak, half-frozen for 45 minutes',
      '2 large onions, thinly sliced',
      '2 tbsp neutral oil',
      '30 g unsalted butter',
      '1.5 tsp fine sea salt',
      '1 tsp black pepper',
      '8 slices provolone cheese, or 200 g Cheez Whiz',
      '4 hoagie or sub rolls, split',
      '1 green pepper, sliced, optional',
      '150 g mushrooms, sliced, optional'
    ],
    st: [
      'Shave the half-frozen ribeye against the grain as thinly as you possibly can — under 2 mm. A very sharp knife and cold meat are the only requirements.',
      'Heat a large flat griddle or heavy skillet over medium-high. Add the oil and cook the onions with half the salt for 10 to 12 minutes until soft and lightly caramelised. Push them to one side.',
      'If using peppers and mushrooms, cook them alongside for 5 minutes and push aside too.',
      'Raise the heat to high, add the butter and spread the shaved beef across the hot surface in a thin layer. Season with the remaining salt and pepper.',
      'Cook for 60 seconds without moving, then begin chopping and turning the meat with two spatulas for another 90 seconds, until just browned. Do not overcook it.',
      'Combine the meat and onions, divide into four portions on the griddle, and lay two slices of provolone over each.',
      'Set a split roll face down over each portion for 30 seconds so the steam softens the bread and melts the cheese.',
      'Slide a spatula under each pile, flip the whole thing into the roll in one motion, and serve immediately.'
    ],
    tips: [
      'A soft roll is essential. A crusty baguette shreds the roof of your mouth and fights the filling.',
      'For the Whiz version, warm it gently and pour it over the meat in the roll rather than melting it on the griddle.',
      'Ask the butcher to shave the ribeye on a slicer if you have the option.'
    ],
    pair: ['A cold lager', 'Serve with fries or a bag of crisps, as in Philadelphia', 'Finish with a black-and-white cookie'],
    store: 'Assemble to order. Cooked meat and onions keep 2 days refrigerated; reheat hard in a hot pan.',
    nut: [812, 48, 52, 46, 3, 8, 1520]
  },

  'pulled-pork-sandwich': {
    d: 'Pork shoulder rubbed, slow-roasted for seven hours until it shreds under a fork, tossed in a vinegar sauce and piled onto a soft bun with slaw. Almost entirely hands-off.',
    meta: 'Slow-roasted pulled pork sandwiches with a spice rub and Carolina vinegar sauce. Seven hands-off hours in the oven.',
    kw: ['pulled pork recipe', 'slow roast pork shoulder', 'carolina vinegar sauce', 'bbq sandwich'],
    why: 'Pork shoulder holds a great deal of collagen and intramuscular fat, and both need hours between 75 and 95°C to transform — collagen into gelatine, fat into moisture. The stall, when the meat sits at 70°C for an hour or more as surface evaporation cools it, is normal; the answer is patience, not more heat.',
    ing: [
      '# For the pork and rub',
      '2.5 kg bone-in pork shoulder',
      '3 tbsp light brown sugar',
      '2 tbsp smoked paprika',
      '1 tbsp fine sea salt',
      '2 tsp black pepper',
      '2 tsp garlic powder',
      '2 tsp mustard powder',
      '1 tsp cayenne pepper',
      '1 tsp ground cumin',
      '# For the vinegar sauce',
      '250 ml cider vinegar',
      '3 tbsp tomato ketchup',
      '2 tbsp light brown sugar',
      '1 tsp chilli flakes',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# To serve',
      '8 soft burger buns',
      '400 g coleslaw',
      '16 dill pickle slices'
    ],
    st: [
      'Pat the pork dry and score the fat cap in a diamond pattern, cutting into the fat but not the meat.',
      'Mix the rub and massage it into every surface, working it into the scores. Refrigerate uncovered overnight if you can.',
      'Take the pork out 2 hours before cooking. Set it fat side up on a rack over a roasting tin with 300 ml of water in the bottom.',
      'Roast at 150°C / 300°F for 6 to 7 hours. Do not open the oven for the first 4 hours.',
      'The pork is ready when a probe slides in like warm butter and the internal temperature reaches 95°C. If it stalls around 70°C, that is expected — keep going.',
      'Rest, loosely tented, for 45 minutes. This is a long rest and it matters; the gelatine needs to set.',
      'Meanwhile simmer the vinegar sauce ingredients together for 5 minutes.',
      'Pull the pork apart with two forks, discarding the bone and any hard gristle, and chop through the crisp bark so it distributes.',
      'Toss with enough vinegar sauce to moisten, then pile onto buns with coleslaw and pickles.'
    ],
    tips: [
      'Bone-in gives you more flavour and a built-in doneness indicator — the bone should pull out clean.',
      'Do not discard the bark. Those dark crusty edges are the best part; chop them through the whole batch.',
      'Sauce is added after pulling, not before roasting, so the bark stays crisp.'
    ],
    pair: ['A cold lager or a bourbon', 'Serve with coleslaw, cornbread and pickles', 'Finish with banana pudding'],
    store: 'Refrigerate 4 days, freeze 3 months in its juices. Reheat covered with a splash of stock at 150°C / 300°F for 25 minutes.',
    nut: [648, 46, 44, 30, 3, 14, 1420]
  },

  'grilled-cheese-sandwich': {
    d: 'Mayonnaise on the outside instead of butter, two cheeses for flavour and melt, and eight minutes over patient medium-low heat. It is the small details that make this version different.',
    meta: 'The ultimate grilled cheese with a mayo-crusted exterior and a two-cheese blend. Eight minutes, golden and gooey.',
    kw: ['grilled cheese recipe', 'best grilled cheese sandwich', 'cheese toastie', 'quick lunch'],
    why: 'Mayonnaise browns better than butter because it contains egg proteins and oil but far less water, so it starts browning immediately instead of first boiling off moisture — and it never burns the way butter\'s milk solids do. Cooking over medium-low gives the cheese time to melt through before the bread darkens.',
    ing: [
      '4 slices good white sourdough or country bread, 1.5 cm thick',
      '100 g mature cheddar, grated',
      '80 g Gruyère or Monterey Jack, grated',
      '3 tbsp mayonnaise',
      '1 tsp Dijon mustard',
      '20 g unsalted butter',
      '0.25 tsp flaky sea salt',
      '0.25 tsp black pepper'
    ],
    st: [
      'Mix the two cheeses together with the pepper. Using two cheeses gives you both flavour and a proper stretch.',
      'Spread mayonnaise thinly and evenly over one side of each slice, right to the crusts.',
      'Spread the Dijon on the unmayonnaised side of two slices.',
      'Pile the cheese onto the mustard side and close the sandwiches, mayonnaise facing out.',
      'Melt the butter in a heavy pan over medium-low heat — the butter is for flavour in the pan, the mayonnaise for the crust.',
      'Cook the sandwiches for 4 minutes on the first side, pressing gently with a spatula, until deep golden.',
      'Flip and cook 3 to 4 minutes more. If the bread is browning before the cheese melts, lower the heat and cover the pan for a minute.',
      'Rest for 60 seconds, sprinkle with flaky salt, then cut on the diagonal — it genuinely tastes better that way.'
    ],
    tips: [
      'Grate the cheese rather than slicing it. Grated cheese melts in a third of the time.',
      'Medium-low heat and patience. A rushed grilled cheese is brown outside and solid inside.',
      'Add thin apple slices, caramelised onion or a smear of chutney, but never so much that the cheese cannot bind it.'
    ],
    pair: ['Creamy tomato soup, obviously', 'A cold lager or a glass of milk', 'Follow with something green'],
    store: 'Eat immediately. Nothing about a grilled cheese survives storage.',
    nut: [586, 24, 38, 38, 2, 4, 980]
  },

  'new-england-clam-chowder': {
    d: 'A proper white chowder — thickened with potato starch and a light roux rather than a bucket of cream — with sweet clams, salt pork and a slick of butter on top. Thick enough to hold a cracker upright.',
    meta: 'Classic New England clam chowder with salt pork, tender clams and potatoes. Creamy, not gluey, in under an hour.',
    kw: ['clam chowder recipe', 'new england chowder', 'creamy seafood soup', 'american soup'],
    why: 'Clams toughen within a minute of boiling, so they are cooked separately, chopped and returned only at the very end. Floury potatoes release starch into the broth as they simmer, doing much of the thickening naturally, which is why this needs only a small amount of roux.',
    ing: [
      '1.5 kg fresh clams, scrubbed, or 400 g tinned chopped clams with juice',
      '250 ml dry white wine',
      '120 g salt pork or streaky bacon, diced',
      '40 g unsalted butter, plus extra to serve',
      '1 large onion, diced',
      '2 celery sticks, diced',
      '3 tbsp plain flour',
      '600 g floury potatoes, cut into 1.5 cm cubes',
      '500 ml whole milk',
      '250 ml double cream',
      '2 bay leaves',
      '2 sprigs fresh thyme',
      '1 tsp fine sea salt',
      '0.5 tsp white pepper',
      '1 small bunch chives, snipped',
      '8 saltine crackers, to serve'
    ],
    st: [
      'If using fresh clams, bring the wine to a boil in a large pot, add the clams, cover, and steam for 4 to 6 minutes until they open. Discard any that stay shut.',
      'Lift out the clams, pull the meat from the shells and chop it coarsely. Strain the cooking liquid through muslin to remove grit and reserve it — you need about 500 ml, topped up with water if short.',
      'Render the salt pork in the rinsed pot over medium heat for 8 minutes until crisp. Lift out and reserve.',
      'Add the butter, onion and celery to the fat and sweat for 8 minutes until soft and translucent, without colouring.',
      'Stir in the flour and cook 2 minutes, then gradually whisk in the reserved clam liquid.',
      'Add the potatoes, bay and thyme, and simmer gently for 15 minutes until the potatoes are tender and beginning to break at the edges.',
      'Crush a few potato cubes against the side of the pot to thicken the chowder naturally.',
      'Add the milk and cream and warm through without boiling, then season with salt and white pepper.',
      'Stir in the chopped clams and the crisp pork and heat for 2 minutes only. Serve with a knob of butter melting on top, chives and crackers.'
    ],
    tips: [
      'Strain the clam liquid through muslin. There is always sand, and one gritty spoonful ruins the bowl.',
      'Never boil the chowder once the dairy is in — it will curdle and split.',
      'Chowder is better on the second day, once the potato starch has fully hydrated.'
    ],
    pair: ['A crisp Muscadet or a cold lager', 'Serve with oyster crackers and a green salad', 'Finish with apple pie'],
    store: 'Refrigerate 3 days. Reheat gently below a simmer. Do not freeze — the potatoes go grainy and the dairy separates.',
    nut: [612, 28, 42, 36, 4, 9, 1280]
  },

  'chicken-noodle-soup': {
    d: 'Built from a whole chicken so the broth carries real body, with the noodles cooked separately so they never turn to porridge. The soup people actually make when someone is ill.',
    meta: 'Restorative chicken noodle soup built from a whole bird for real body, with noodles cooked separately so they stay firm.',
    kw: ['chicken noodle soup recipe', 'homemade chicken soup', 'healing soup', 'chicken broth'],
    why: 'Simmering a whole chicken — bones, skin and all — extracts collagen that gives the broth a body no stock cube can match, and holding it just below a simmer keeps the liquid clear by not agitating the proteins into cloudiness. Cooking noodles separately prevents their starch from thickening the broth and stops them bloating overnight.',
    ing: [
      '1 whole chicken, 1.6 kg',
      '2 onions, halved',
      '3 carrots, 1 halved and 2 sliced',
      '3 celery sticks, 1 halved and 2 sliced',
      '1 head garlic, halved crosswise',
      '2 bay leaves',
      '6 black peppercorns',
      '1 small bunch parsley, stalks and leaves separated',
      '3 sprigs fresh thyme',
      '2.5 l cold water',
      '2.5 tsp fine sea salt',
      '200 g egg noodles',
      '1 tbsp lemon juice',
      '1 small bunch dill, chopped'
    ],
    st: [
      'Put the whole chicken in a large pot with the halved onions, halved carrot and celery, garlic, bay, peppercorns, parsley stalks and thyme. Cover with the cold water.',
      'Bring slowly to a bare simmer over medium-low heat, skimming the grey foam off the surface for the first 10 minutes. Starting from cold water and never boiling is what keeps the broth clear.',
      'Simmer, barely bubbling and uncovered, for 75 minutes.',
      'Lift the chicken out and let it cool enough to handle. Strain the broth through a fine sieve and skim the fat, reserving 2 tablespoons of it.',
      'Pull the meat from the bones in bite-sized pieces, discarding skin and bones.',
      'Return the broth to the pot with the reserved chicken fat. Add the sliced carrot and celery and simmer 10 minutes until just tender.',
      'Cook the noodles separately in salted water until al dente, then drain.',
      'Add the chicken meat and salt to the broth and warm through. Finish with lemon juice, chopped parsley leaves and dill.',
      'Divide the noodles between bowls and ladle the soup over.'
    ],
    tips: [
      'Never let the broth boil. A rolling boil emulsifies the fat and turns it permanently cloudy.',
      'The lemon juice at the end is what makes the soup taste bright rather than flat.',
      'Freeze the picked-over carcass and make a second, lighter broth from it.'
    ],
    pair: ['Nothing, or a cup of tea', 'Serve with crusty bread and butter', 'Follow with something simple'],
    store: 'Broth and chicken keep 4 days refrigerated and freeze 3 months. Always store noodles separately.',
    nut: [386, 34, 32, 12, 3, 5, 1120]
  },

  'creamy-tomato-soup': {
    d: 'Roasting the tomatoes first concentrates them into something far deeper than a stovetop soup, and a splash of cream at the end rounds off the acidity. Made for dunking grilled cheese.',
    meta: 'Velvety roasted tomato soup with deep caramelised flavour and a swirl of cream. Ready in 40 minutes, naturally gluten-free.',
    kw: ['tomato soup recipe', 'roasted tomato soup', 'creamy tomato soup', 'easy soup recipe'],
    why: 'Roasting drives off water and caramelises the tomatoes\' sugars, which is why a roasted soup tastes concentrated and sweet where a simmered one tastes thin and sharp. A pinch of bicarbonate of soda neutralises some of the acidity, letting the cream go in without any risk of splitting.',
    ing: [
      '1.2 kg ripe tomatoes, halved',
      '1 red pepper, quartered',
      '1 large onion, cut into wedges',
      '6 garlic cloves, unpeeled',
      '4 tbsp olive oil',
      '1 tsp caster sugar',
      '1.5 tsp fine sea salt',
      '1 tsp dried oregano',
      '600 ml vegetable stock',
      '0.25 tsp bicarbonate of soda',
      '120 ml double cream',
      '1 small bunch basil',
      '0.5 tsp black pepper',
      '2 tbsp extra-virgin olive oil, to serve'
    ],
    st: [
      'Toss the tomatoes, pepper, onion and unpeeled garlic with the olive oil, sugar, salt and oregano, and spread cut-side up on a large tray.',
      'Roast at 200°C / 390°F for 35 to 40 minutes, until the edges are blackened in places and the tomatoes have collapsed.',
      'Squeeze the garlic out of its skins and scrape everything, including every sticky bit from the tray, into a pot.',
      'Add the stock, bring to a simmer and cook 10 minutes.',
      'Stir in the bicarbonate of soda — it will foam briefly — and simmer 2 minutes. This softens the acidity.',
      'Blend until completely smooth, then pass through a sieve if you want a truly velvety texture.',
      'Return to low heat, stir in the cream and most of the basil, and warm through without boiling.',
      'Season with black pepper, then serve with a drizzle of extra-virgin olive oil and the remaining basil torn over.'
    ],
    tips: [
      'Out of season, use two 400 g tins of good plum tomatoes and roast them the same way — it works remarkably well.',
      'Do not skip scraping the tray. The caramelised residue is where the depth lives.',
      'For a vegan version, replace the cream with 3 tablespoons of cashew butter blended in.'
    ],
    pair: ['A glass of red or, traditionally, none at all', 'Serve with grilled cheese for dunking', 'Follow with a green salad'],
    store: 'Refrigerate 4 days, freeze 3 months without the cream, adding it fresh on reheating.',
    nut: [268, 5, 24, 18, 5, 15, 880]
  },

  'caesar-salad': {
    d: 'The original Tijuana Caesar: whole romaine leaves, a dressing built on egg yolk, anchovy and garlic, and croutons fried in olive oil. No chicken, no bacon, no bottled dressing.',
    meta: 'Authentic Caesar salad with a from-scratch anchovy and egg yolk dressing and olive-oil croutons. The 1924 original.',
    kw: ['caesar salad recipe', 'homemade caesar dressing', 'anchovy dressing', 'classic salad'],
    why: 'The dressing is a mayonnaise: egg yolk lecithin emulsifies the oil into a stable cream, and adding the oil drop by drop at the start is what keeps it from splitting. Anchovy provides glutamates that read as savoury depth rather than fishiness, which is why the dressing tastes rich rather than of anchovy.',
    ing: [
      '# For the dressing',
      '2 large egg yolks',
      '6 anchovy fillets in oil',
      '2 garlic cloves',
      '1.5 tbsp lemon juice',
      '1 tsp Dijon mustard',
      '1 tsp Worcestershire sauce',
      '150 ml mild olive oil',
      '40 g Parmesan, finely grated',
      '0.5 tsp black pepper',
      '# For the salad',
      '3 romaine hearts, leaves separated',
      '200 g country bread, torn into 3 cm pieces',
      '4 tbsp olive oil',
      '1 garlic clove, halved',
      '60 g Parmesan, shaved',
      '0.5 tsp flaky sea salt'
    ],
    st: [
      'Toss the torn bread with the olive oil and a pinch of salt and bake at 190°C / 375°F for 12 to 14 minutes, turning once, until golden but still slightly chewy in the middle.',
      'Rub the hot croutons with the cut garlic clove while they are still warm and set aside.',
      'Pound the anchovies and garlic to a paste in a mortar, or mince them very finely.',
      'Whisk the egg yolks with the anchovy paste, mustard, Worcestershire sauce and lemon juice.',
      'Add the olive oil literally a few drops at a time at first, whisking constantly, until the mixture thickens and holds. Then add the rest in a slow, steady stream.',
      'Whisk in the grated Parmesan and black pepper. The dressing should be thick enough to coat a leaf and cling.',
      'Wash and dry the romaine leaves thoroughly — a wet leaf will not hold dressing.',
      'Toss the whole leaves with the dressing in a large bowl, using your hands so every leaf is coated inside and out.',
      'Pile onto plates, scatter with croutons and shaved Parmesan, and finish with flaky salt and more pepper.'
    ],
    tips: [
      'Use whole or halved leaves rather than shredded lettuce. The original was eaten with fingers.',
      'If the dressing splits, whisk a fresh yolk in a clean bowl and add the split mixture to it drop by drop.',
      'Concerned about raw egg? Use pasteurised yolks, or coddle the eggs for 60 seconds in boiling water first.'
    ],
    pair: ['A crisp Sauvignon Blanc or Chablis', 'Serve as a starter, or add grilled chicken for a main', 'Follow with grilled fish'],
    store: 'The dressing keeps 3 days refrigerated. Croutons keep 2 days in an airtight tin. Dress the leaves only at the moment of serving.',
    nut: [486, 14, 22, 40, 3, 3, 1080]
  },

  'cobb-salad': {
    d: 'A composed salad from the Brown Derby in Hollywood: neat rows of chicken, bacon, avocado, egg, tomato and blue cheese over chopped leaves, with a sharp red wine vinaigrette. A genuinely satisfying main-course salad.',
    meta: 'Classic Cobb salad in neat rows — chicken, bacon, avocado, egg and blue cheese with a red wine vinaigrette. Keto-friendly.',
    kw: ['cobb salad recipe', 'american chopped salad', 'keto salad', 'main course salad'],
    why: 'Arranging the ingredients in rows rather than tossing them lets each element keep its own texture and lets the eater control the ratio in every forkful. Everything is chopped to a similar small dice so a single fork can pick up all seven components at once, which was Robert Cobb\'s original point.',
    ing: [
      '# For the salad',
      '2 chicken breasts, poached or grilled, diced',
      '6 rashers streaky bacon',
      '4 large eggs',
      '2 ripe avocados, diced',
      '250 g cherry tomatoes, halved',
      '120 g Roquefort or other blue cheese, crumbled',
      '2 romaine hearts, finely chopped',
      '100 g watercress, chopped',
      '4 spring onions, sliced',
      '# For the vinaigrette',
      '3 tbsp red wine vinegar',
      '1 tsp Dijon mustard',
      '1 garlic clove, minced',
      '0.5 tsp Worcestershire sauce',
      '120 ml extra-virgin olive oil',
      '0.75 tsp fine sea salt',
      '0.5 tsp black pepper'
    ],
    st: [
      'Lower the eggs into boiling water and cook for 9 minutes for a firm but not chalky yolk. Cool in iced water, peel and chop.',
      'Cook the bacon in a dry pan over medium heat until crisp, 8 to 10 minutes, then drain and chop.',
      'Whisk or shake the vinaigrette ingredients together until emulsified.',
      'Toss the chopped romaine and watercress with 3 tablespoons of the vinaigrette and spread across a large, wide platter.',
      'Arrange the chicken, bacon, egg, avocado, tomato and blue cheese in neat parallel rows across the leaves.',
      'Scatter the spring onions over the top and grind on plenty of black pepper.',
      'Bring the remaining vinaigrette to the table and let everyone dress and toss their own portion.'
    ],
    tips: [
      'Dice everything to roughly the same size — about 1 cm — so a single forkful carries all of it.',
      'Toss the avocado in a little of the vinaigrette immediately to stop it browning.',
      'Poached chicken is more tender than grilled here, and it soaks up the dressing better.'
    ],
    pair: ['A dry rosé or a Chardonnay', 'Serve with crusty bread', 'Follow with fresh berries'],
    store: 'Components keep separately for 2 days. Assemble and dress at the last minute; a dressed Cobb wilts within 30 minutes.',
    nut: [648, 42, 16, 48, 8, 6, 1180]
  },

  'buttermilk-pancakes': {
    d: 'Tall, tender pancakes with a tangy edge and a golden, even surface. The lumps in the batter are not a mistake — they are the whole point.',
    meta: 'Fluffy buttermilk pancakes that rise tall and stay tender. The lumpy-batter rule and resting trick explained.',
    kw: ['buttermilk pancakes recipe', 'fluffy pancakes', 'american pancakes', 'easy breakfast'],
    why: 'Buttermilk\'s acid reacts with bicarbonate of soda to produce carbon dioxide instantly, which is why the batter is rested only briefly and cooked soon after mixing. Lumps matter because they represent unmixed flour: over-mixing develops gluten and turns pancakes tough and flat.',
    ing: [
      '280 g plain flour',
      '2 tbsp caster sugar',
      '2 tsp baking powder',
      '1 tsp bicarbonate of soda',
      '0.75 tsp fine sea salt',
      '480 ml buttermilk',
      '2 large eggs',
      '60 g unsalted butter, melted and cooled, plus extra for the pan',
      '1 tsp vanilla extract',
      '4 tbsp maple syrup, to serve',
      '200 g mixed berries, to serve'
    ],
    st: [
      'Whisk the flour, sugar, baking powder, bicarbonate of soda and salt together thoroughly in a large bowl.',
      'In a separate jug, whisk the buttermilk, eggs, melted butter and vanilla.',
      'Pour the wet into the dry and fold with a spatula for no more than 10 to 12 strokes. Stop while the batter is still visibly lumpy with streaks of dry flour.',
      'Rest the batter for 10 minutes. It will thicken and you will see bubbles rise to the surface.',
      'Heat a heavy non-stick pan or griddle over medium-low. Melt a little butter and wipe most of it away with kitchen paper.',
      'Ladle 80 ml of batter per pancake, spacing them well. Cook for 2 to 3 minutes until bubbles appear across the surface and the edges look dry and matte.',
      'Flip once and cook 90 seconds to 2 minutes more. Only ever flip a pancake once.',
      'Keep the cooked pancakes warm in a 90°C oven on a rack — not stacked on a plate, which steams them soft.',
      'Serve in a tall stack with butter, warm maple syrup and berries.'
    ],
    tips: [
      'No buttermilk? Stir 1 tablespoon of lemon juice into 480 ml of milk and leave 10 minutes.',
      'Medium-low heat is the difference between evenly golden and scorched-outside, raw-inside.',
      'The first pancake is always the test pancake. Accept this and adjust the heat.'
    ],
    pair: ['Strong coffee or a glass of cold milk', 'Serve with crisp bacon for the sweet-salty combination', 'Follow with fresh fruit'],
    store: 'Cooked pancakes freeze beautifully, layered with baking paper, for 2 months. Reheat in a toaster or at 180°C / 355°F for 6 minutes.',
    nut: [486, 14, 68, 18, 3, 22, 880]
  },

  'eggs-benedict': {
    d: 'Poached eggs and ham on a toasted muffin under a blanket of hollandaise. The sauce is the whole game, and the blender method makes it nearly foolproof.',
    meta: 'Eggs Benedict with foolproof blender hollandaise and perfectly poached eggs. The brunch classic, demystified.',
    kw: ['eggs benedict recipe', 'hollandaise sauce', 'poached eggs', 'brunch recipe'],
    why: 'Hollandaise is an emulsion of butter in egg yolk, stabilised by lecithin, and it splits when the butter goes in too fast or the mixture exceeds about 65°C. A blender solves both problems: it shears the butter into tiny droplets and the yolks are warmed only by the butter itself, never by direct heat.',
    ing: [
      '# For the hollandaise',
      '3 large egg yolks',
      '180 g unsalted butter, melted and hot',
      '1 tbsp lemon juice',
      '1 tsp white wine vinegar',
      '0.5 tsp fine sea salt',
      '1 pinch cayenne pepper',
      '# For the benedict',
      '4 large eggs, very fresh',
      '2 English muffins, split',
      '4 slices good ham or back bacon',
      '1 tbsp white wine vinegar, for poaching',
      '20 g unsalted butter, for the muffins',
      '1 small bunch chives, snipped'
    ],
    st: [
      'Melt the butter until hot and foaming — it needs to be around 90°C to cook the yolks as it goes in.',
      'Blend the egg yolks, lemon juice, vinegar, salt and cayenne on high for 20 seconds until pale.',
      'With the blender running, pour the hot butter in a very thin, steady stream through the lid opening. It should take 45 to 60 seconds and the sauce will thicken visibly.',
      'Taste and adjust with lemon and salt, then transfer to a bowl and keep somewhere warm, not hot — a thermos works well.',
      'Bring a wide pan of water to a bare simmer, about 85°C, and add the vinegar. Never let it boil.',
      'Crack each egg into a fine sieve first, letting the loose watery white drain away — this is the secret to neat poached eggs.',
      'Slide the eggs into the water, one at a time, and poach for 3 minutes for a runny yolk. Lift out with a slotted spoon onto kitchen paper.',
      'Toast and butter the muffin halves and warm the ham in a dry pan for a minute a side.',
      'Build each muffin with ham, a poached egg and a generous spoonful of hollandaise. Finish with chives and a pinch of cayenne.'
    ],
    tips: [
      'Sieving the eggs before poaching is the single trick that separates neat from ragged.',
      'If the hollandaise splits, blend a fresh yolk with a teaspoon of hot water and drizzle the broken sauce into it.',
      'Poach the eggs up to a day ahead and hold them in cold water; reheat for 45 seconds in hot water to serve.'
    ],
    pair: ['A glass of Champagne, or a Bloody Mary', 'Serve with roasted tomatoes and wilted spinach', 'Follow with fresh fruit'],
    store: 'Hollandaise does not store well — it separates when chilled and cannot be safely reheated. Make it fresh.',
    nut: [742, 28, 30, 60, 2, 3, 1420]
  },

  'french-toast': {
    d: 'Thick brioche soaked long enough to reach the centre, cooked slowly so the custard sets rather than scrambles. It is a bread pudding you can make in ten minutes.',
    meta: 'Custardy brioche French toast with a caramelised crust. The soaking and low-heat method for a set, never soggy, centre.',
    kw: ['french toast recipe', 'brioche french toast', 'best french toast', 'weekend breakfast'],
    why: 'The custard needs time to penetrate the crumb, which is why day-old bread — drier and more absorbent — works better than fresh. Cooking over medium-low heat lets the interior custard reach its setting temperature of around 80°C before the sugars on the surface burn.',
    ing: [
      '8 slices brioche or challah, 2.5 cm thick, ideally a day old',
      '4 large eggs',
      '250 ml whole milk',
      '80 ml double cream',
      '3 tbsp caster sugar',
      '2 tsp vanilla extract',
      '1 tsp ground cinnamon',
      '0.25 tsp freshly grated nutmeg',
      '0.5 tsp fine sea salt',
      '50 g unsalted butter',
      '4 tbsp maple syrup, to serve',
      '2 tbsp icing sugar, to serve',
      '200 g strawberries, sliced'
    ],
    st: [
      'Whisk the eggs, milk, cream, sugar, vanilla, cinnamon, nutmeg and salt in a wide shallow dish until completely smooth with no streaks of white.',
      'Lay the bread slices in the custard and soak for 45 seconds a side for day-old brioche, or 20 seconds for fresh. The slice should feel heavy but not collapse.',
      'Lift each slice out and let the excess drip back for a couple of seconds.',
      'Melt a knob of the butter in a heavy pan over medium-low heat.',
      'Cook two slices at a time for 3 to 4 minutes per side, until deep golden and puffed, with a firm centre when pressed.',
      'Wipe the pan between batches so the milk solids do not burn, and add fresh butter each time.',
      'Keep cooked slices warm on a rack in a low oven rather than stacking them.',
      'Serve dusted with icing sugar, with warm maple syrup and strawberries.'
    ],
    tips: [
      'Stale bread is genuinely better. If yours is fresh, dry the slices in a 150°C oven for 10 minutes first.',
      'Whisk the custard until absolutely smooth — any unbroken white will set into a rubbery streak.',
      'Medium-low heat. High heat gives you a burnt outside and a raw, wet middle every time.'
    ],
    pair: ['Strong coffee or a mimosa', 'Serve with crisp bacon and fresh berries', 'Follow with nothing — this is enough'],
    store: 'Refrigerate 2 days. Reheat at 180°C / 355°F for 8 minutes on a rack. Cooked slices also freeze for 1 month.',
    nut: [542, 16, 58, 27, 2, 26, 620]
  },

  'classic-waffles': {
    d: 'Waffles with a crisp, deeply grooved shell and a light, almost hollow interior. Cornflour and whipped egg whites do the work that a plain batter cannot.',
    meta: 'Crisp Belgian-style waffles with a shatter-crisp shell and airy interior, thanks to cornflour and whipped egg whites.',
    kw: ['waffle recipe', 'belgian waffles', 'crispy waffles', 'breakfast recipe'],
    why: 'Replacing part of the flour with cornflour lowers the batter\'s protein content, so less gluten forms and the shell fries crisper. Folding in separately whipped whites adds air that expands into steam, hollowing the interior and giving the contrast between crisp outside and light inside.',
    ing: [
      '200 g plain flour',
      '60 g cornflour',
      '2 tbsp caster sugar',
      '2 tsp baking powder',
      '0.75 tsp fine sea salt',
      '360 ml buttermilk',
      '3 large eggs, separated',
      '90 g unsalted butter, melted',
      '2 tsp vanilla extract',
      '2 tbsp caster sugar, for the whites',
      '4 tbsp maple syrup, to serve',
      '200 g mixed berries, to serve'
    ],
    st: [
      'Heat the waffle iron thoroughly — it should be at full temperature before the first waffle goes in.',
      'Whisk the flour, cornflour, sugar, baking powder and salt together.',
      'In a jug, whisk the buttermilk, egg yolks, melted butter and vanilla.',
      'Fold the wet into the dry until only just combined; a few lumps are fine.',
      'Whisk the egg whites to soft peaks, then add the 2 tablespoons of sugar and whisk to firm, glossy peaks.',
      'Fold the whites into the batter in two additions with a light hand, keeping as much air as possible.',
      'Brush the iron lightly with oil and ladle in enough batter to cover about three-quarters of the surface — it will spread.',
      'Cook for 4 to 5 minutes, until the steam slows dramatically and the waffle is deep golden and releases easily.',
      'Move straight to a rack in a 100°C oven rather than stacking, so the shell stays crisp. Serve with syrup and berries.'
    ],
    tips: [
      'Never stack waffles. Trapped steam turns a crisp waffle limp in under a minute.',
      'The iron is ready when the steam stops billowing — resist opening it before then, which tears the waffle.',
      'Leftover waffles toast beautifully from frozen, which makes a double batch worth making.'
    ],
    pair: ['Coffee, or a glass of cold milk', 'Serve with fried chicken for the classic Southern pairing', 'Finish with fresh fruit'],
    store: 'Freeze on a tray then bag for 2 months. Reheat directly in a toaster from frozen.',
    nut: [512, 14, 62, 24, 2, 16, 820]
  },

  'breakfast-burrito': {
    d: 'Soft scrambled eggs, crisp potatoes, sausage and cheese rolled tight in a griddled tortilla. Built properly it holds together in one hand and reheats brilliantly, which is the whole point.',
    meta: 'Loaded breakfast burrito with soft scrambled eggs, crisp potatoes and cheese, griddled to seal. Freezer-friendly.',
    kw: ['breakfast burrito recipe', 'egg burrito', 'make ahead breakfast', 'american breakfast'],
    why: 'The eggs are deliberately under-scrambled because they finish cooking from residual heat inside the wrapped burrito — fully cooked eggs turn rubbery by the time you eat it. Griddling the sealed burrito seam-side down welds the tortilla shut and keeps the whole thing intact.',
    ing: [
      '4 large flour tortillas, 25 cm',
      '8 large eggs',
      '3 tbsp double cream',
      '400 g potatoes, cut into 1 cm cubes',
      '250 g breakfast sausage meat or chorizo',
      '150 g mature cheddar, grated',
      '3 tbsp neutral oil',
      '30 g unsalted butter',
      '1 tsp smoked paprika',
      '1 tsp fine sea salt',
      '0.5 tsp black pepper',
      '1 avocado, sliced',
      '150 ml salsa',
      '4 spring onions, sliced'
    ],
    st: [
      'Parboil the potato cubes in salted water for 5 minutes, drain, and steam-dry for 5 minutes.',
      'Fry them in the oil over medium-high heat for 10 to 12 minutes, turning occasionally, until crisp and golden. Season with the paprika and half the salt. Set aside.',
      'Brown the sausage meat in the same pan for 6 minutes, breaking it up, then set aside with the potatoes.',
      'Whisk the eggs with the cream and remaining salt. Melt the butter in a non-stick pan over low heat.',
      'Add the eggs and stir slowly and constantly with a spatula for 3 to 4 minutes, pulling the curds from the edges inward. Take them off the heat while they still look slightly wet and loose.',
      'Warm the tortillas in a dry pan for 15 seconds a side so they become pliable.',
      'Build in a line just below the centre: cheese first (it melts and glues everything), then potatoes, sausage, eggs, avocado and spring onion.',
      'Fold the sides in, then roll from the bottom, tucking tightly as you go.',
      'Griddle the burritos seam-side down in a dry hot pan for 90 seconds a side until golden and sealed. Serve with salsa.'
    ],
    tips: [
      'Cheese goes on the tortilla first. It melts into a layer that stops the tortilla going soggy.',
      'Do not overfill. Two-thirds of what you think will fit is what will actually roll.',
      'Wrap in foil and freeze for up to 2 months — reheat from frozen at 180°C for 25 minutes.'
    ],
    pair: ['Strong coffee or fresh orange juice', 'Serve with hot sauce and extra salsa', 'Follow with fruit'],
    store: 'Refrigerate 3 days wrapped in foil, or freeze 2 months. Reheat wrapped at 180°C / 355°F for 20 minutes, then unwrap and griddle to re-crisp.',
    nut: [812, 38, 62, 46, 6, 5, 1620]
  },

  'roast-turkey': {
    rest: [1480, 'chilling'],
    d: 'A dry-brined, herb-buttered turkey that comes out with crisp skin and breast meat that is actually juicy. Spatchcocking is optional but it cuts the cooking time nearly in half.',
    meta: 'Herb-butter roast turkey with a 24-hour dry brine for juicy breast meat and crisp skin. The reliable holiday method.',
    kw: ['roast turkey recipe', 'thanksgiving turkey', 'dry brine turkey', 'christmas dinner'],
    why: 'A dry brine draws moisture out of the skin, where it evaporates, and simultaneously dissolves salt into the meat, which alters the proteins so they hold water during roasting. The result is drier skin that crisps and moister meat — the opposite of what a wet brine achieves.',
    ing: [
      '1 whole turkey, 5.5 kg',
      '4 tbsp fine sea salt',
      '2 tbsp light brown sugar',
      '1 tbsp black pepper',
      '# For the herb butter',
      '200 g unsalted butter, softened',
      '4 garlic cloves, grated',
      '2 tbsp fresh thyme leaves',
      '2 tbsp fresh sage, chopped',
      '1 tbsp fresh rosemary, chopped',
      '1 lemon, zested',
      '1 tsp black pepper',
      '# For the tin',
      '2 onions, quartered',
      '3 carrots, halved',
      '3 celery sticks, halved',
      '1 lemon, halved',
      '500 ml chicken stock'
    ],
    st: [
      'Mix the salt, sugar and pepper. Pat the turkey completely dry and rub the mixture all over, including inside the cavity and under the wings.',
      'Set the bird on a rack over a tray and refrigerate uncovered for 24 to 48 hours. The skin will look dry and slightly translucent — that is exactly right.',
      'Take the turkey out 2 hours before roasting. Do not rinse it.',
      'Mash the butter with the garlic, herbs, lemon zest and pepper.',
      'Loosen the skin over the breast and thighs with your fingers and push two-thirds of the herb butter underneath, spreading it into an even layer. Rub the rest over the outside.',
      'Scatter the vegetables and lemon halves in a large roasting tin, pour in the stock, and set the turkey on top on a rack.',
      'Roast at 220°C / 430°F for 30 minutes to set the skin, then reduce to 165°C / 330°F.',
      'Continue roasting for about 2 to 2.5 hours, basting every 45 minutes, until the thickest part of the thigh reads 74°C and the breast 68°C.',
      'Tent loosely with foil if the skin browns too fast. Rest the turkey, uncovered, for a full 40 minutes before carving — the temperature will rise a few more degrees and the juices will redistribute.'
    ],
    tips: [
      'Buy a thermometer. Roasting a turkey by time alone is the single most common cause of dry turkey.',
      'Do not stuff the cavity; stuffing slows the heat and forces you to overcook the breast. Bake it separately.',
      'The resting period is not wasted time — use it to make gravy from the tin juices.'
    ],
    pair: ['A Pinot Noir or a dry Riesling', 'Serve with stuffing, roast potatoes, greens and cranberry sauce', 'Finish with pumpkin pie'],
    store: 'Refrigerate 4 days, freeze 3 months. Reheat slices in a covered dish with a little stock at 150°C / 300°F for 20 minutes.',
    nut: [568, 68, 6, 30, 1, 3, 1420]
  }
};
