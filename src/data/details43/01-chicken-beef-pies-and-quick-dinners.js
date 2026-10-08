'use strict';

/**
 * Volume forty-three — chicken, beef, pies and quick dinners, first part.
 *
 * A noodle soup, two chicken dinners, salmon and catfish, brisket two ways,
 * a stir fry, a ragu and a shawarma, two beef pies, boneless wings and
 * potatoes, a broccoli pasta bake, a New Zealand butter chicken pie and a
 * quick tortellini. Times are the recipe's own; ovens differ, so each
 * method says when to check early. Nutrition is estimated from the
 * ingredient list by npm run calc.
 */

module.exports = {
  'prawn-noodle-soup': {
    d: 'Egg noodles, prawns and pak choi in a ginger and garlic broth finished with soy sauce and sesame oil.',
    meta: 'Prawn noodle soup: egg noodles, prawns and pak choi in a ginger and garlic broth. Four servings, cooked for 15 minutes.',
    kw: ['prawn noodle soup', 'easy prawn noodle soup', 'chinese prawn noodle soup', 'prawn and pak choi noodle soup', 'prawn noodle soup with ginger'],
    why: 'Do prawns really need to be cooked for so little time? Yes, and the whole recipe is built around that. Two to three minutes in a simmering broth turns them from grey to pink and leaves them tender. Five minutes makes them rubber.\n\nThe broth does the real work. Simmer the stock with the ginger, garlic and soy for 8 minutes before anything else goes in, so that the flavours are blended. **Cook the noodles in a separate pan.** Their starch clouds a clear broth, and egg noodles continue to soften if they stand in hot liquid.\n\nAdd the pak choi stems to the broth first, and the leaves with the prawns, since the stems need about 2 minutes longer. The prawns go in last and need only 3 minutes. They are done when they curl into a loose C and are pink all over.\n\nDivide the noodles between four bowls, ladle over the hot broth, and finish with a drizzle of sesame oil and sliced spring onion. Eat immediately. If your hob runs hot, keep the broth at a gentle simmer.',
    ing: [
      '1 litre chicken stock',
      '20 g fresh ginger, sliced',
      '2 cloves garlic, sliced',
      '2 tbsp soy sauce',
      '250 g egg noodles',
      '300 g raw peeled prawns',
      '150 g pak choi, sliced',
      '2 spring onions, about 30 g, sliced',
      '1 tsp sesame oil'
    ],
    st: [
      'Simmer the stock with the ginger, garlic and soy sauce for 8 minutes.',
      'Meanwhile boil the noodles in a separate pan for 3 minutes and drain.',
      'Add the pak choi stems to the broth for 2 minutes, then the leaves and prawns for 3 minutes until the prawns are pink.',
      'Divide the noodles between four bowls, ladle over the soup and finish with the sesame oil and spring onions.'
    ],
    tips: [
      'Do not overcook the prawns.',
      'Cook the noodles separately.',
      'If your hob runs hot, keep a gentle simmer.',
      'Serve at once.'
    ],
    pair: ['Chilli oil', 'Lime wedges', 'Green tea', 'Steamed dumplings'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day; store the noodles separately.',
    nut: [357, 28, 50, 5, 3, 3, 1420]
  },

  'almond-crusted-chicken': {
    d: 'Chicken breasts brushed with Dijon mustard and coated in crushed almonds, baked until golden and crunchy.',
    meta: 'Almond crusted chicken: chicken breasts brushed with Dijon and coated in crushed almonds, baked for 25 minutes. Four servings.',
    kw: ['almond crusted chicken', 'baked almond crusted chicken', 'almond crusted chicken breast', 'chicken with almond crust', 'dijon almond crusted chicken'],
    why: 'Most home versions come out with the crust sliding off in the oven, and the fix is the mustard. A thin layer of Dijon acts as a glue and also seasons the meat.\n\nCrush the flaked almonds roughly in a bag, so that some pieces are coarse and some are fine. Whole flakes slide off, and powder turns pasty. Dip the chicken in flour first, shaking off the excess, then in beaten egg mixed with the mustard, then press into the nuts. **Press hard with the flat of your hand.** The nuts need to stick to every surface.\n\nSet the chicken on a rack over a tray, rather than directly on it, so that the base crisps as well. Bake at 200°C for 25 minutes. If your oven runs hot, check at 20 minutes. The almonds will turn golden, and a knife into the thickest part should show no pink.\n\nRest for 5 minutes before serving, so the juices settle. Serve with a squeeze of lemon and a green salad.',
    ing: [
      '4 chicken breasts, about 600 g',
      '100 g flaked almonds, crushed',
      '40 g plain flour',
      '2 eggs, about 100 g',
      '2 tbsp Dijon mustard',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Heat the oven to 200°C and set a rack over a tray. Season the chicken with the salt and pepper.',
      'Put the flour on one plate, the eggs beaten with the mustard in a bowl, and the crushed almonds on another plate.',
      'Dip each breast in flour, then egg, then press firmly into the almonds.',
      'Set on the rack and bake for 25 minutes until golden and no pink remains. Rest for 5 minutes and serve with the lemon.'
    ],
    tips: [
      'Use Dijon as the glue.',
      'Press the nuts on hard.',
      'If your oven runs hot, check at 20 minutes.',
      'Bake on a rack.'
    ],
    pair: ['Green salad', 'Roast potatoes', 'Green beans', 'Dry white wine'],
    store: 'Keeps in the fridge for 2 days. Reheat in a hot oven to keep the crust.',
    nut: [416, 44, 15, 20, 4, 2, 540]
  },

  'bacon-wrapped-chicken': {
    d: 'Chicken breasts rubbed with paprika and garlic and wrapped in streaky bacon, roasted until the bacon is crisp.',
    meta: 'Bacon wrapped chicken: chicken breasts rubbed with paprika and wrapped in streaky bacon, roasted for 30 minutes. Four servings.',
    kw: ['bacon wrapped chicken', 'bacon wrapped chicken breast', 'oven baked bacon wrapped chicken', 'roasted bacon wrapped chicken', 'bacon wrapped chicken with paprika'],
    why: 'The bacon is the juice. Wrapped around a lean breast, it bastes the meat as the fat renders, and keeps it from drying out. That is the occasion for this dish: a plain breast that needs help.\n\nPat the chicken dry and rub it with the paprika, garlic powder and pepper. Do not add salt, since the bacon is salty already. Wrap each breast in 2 rashers, overlapping them slightly and tucking the ends underneath. **Set the chicken seam-side down.** The weight keeps the bacon in place, and no cocktail sticks are needed.\n\nA short blast of high heat crisps the bacon, so roast at 200°C for 30 minutes, on a rack over a tray so the fat drains. If your oven runs hot, check at 24 minutes. The chicken is done when no pink remains and the juices run clear.\n\nFor extra crunch, finish under a hot grill for 2 minutes. Let it rest for 5 minutes. Serve with the pan juices spooned over, and with something green to cut the richness.',
    ing: [
      '4 chicken breasts, about 600 g',
      '8 rashers streaky bacon, about 160 g',
      '1 tsp smoked paprika',
      '1 tsp garlic powder',
      '1/2 tsp black pepper',
      '1 tbsp olive oil'
    ],
    st: [
      'Heat the oven to 200°C and set a rack over a tray. Pat the chicken dry and rub with the paprika, garlic powder and pepper.',
      'Wrap each breast in 2 rashers of bacon, overlapping them and tucking the ends underneath. Set seam-side down on the rack and brush with the oil.',
      'Roast for 30 minutes until the bacon is crisp and the chicken has no pink inside.',
      'Rest for 5 minutes before serving.'
    ],
    tips: [
      'Do not add salt.',
      'Set the chicken seam-side down.',
      'If your oven runs hot, check at 24 minutes.',
      'Rest before slicing.'
    ],
    pair: ['Green beans', 'Mashed potato', 'Roasted vegetables', 'Dry white wine'],
    store: 'Keeps in the fridge for 3 days. Reheat in a hot oven.',
    nut: [276, 41, 1, 12, 0, 0, 670]
  },

  'baked-salmon-with-asparagus': {
    d: 'Salmon fillets and asparagus baked together on one tray with garlic butter, lemon and dill.',
    meta: 'Baked salmon with asparagus: salmon fillets and asparagus baked together with garlic butter and lemon. Two servings, baked for 15 minutes.',
    kw: ['baked salmon with asparagus', 'salmon and asparagus bake', 'sheet pan salmon with asparagus', 'easy baked salmon with asparagus', 'lemon garlic salmon with asparagus'],
    why: 'Quick tip: put the asparagus in first. Salmon needs about 12 minutes and asparagus about the same, but thick spears need a head start of 3 minutes.\n\nSnap the woody ends off the spears, toss them with oil and salt, and put them on the tray at 200°C for 3 minutes. Then add the salmon, skin-side down, and spoon the garlic butter over the fish. **Do not overcook the salmon.** It is done when it flakes at the edge but is still slightly translucent in the centre, which takes about 12 minutes for a thick fillet.\n\nIf your oven runs hot, check at 10 minutes. The fish keeps cooking as it rests, and a fully opaque fillet will be dry by the time it reaches the table.\n\nSqueeze lemon over everything as it comes out and scatter with dill. The garlic butter pools on the tray and makes its own sauce, so spoon it over the plates. Serve with rice or boiled new potatoes for a full meal in 20 minutes.',
    ing: [
      '2 salmon fillets, about 300 g',
      '300 g asparagus, trimmed',
      '1 tbsp olive oil',
      '20 g butter, melted',
      '2 cloves garlic, crushed',
      '1 lemon, half juiced and half cut into wedges',
      '1 tbsp chopped dill',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 200°C. Toss the asparagus with the oil and salt on a tray and roast for 3 minutes.',
      'Mix the melted butter, garlic and lemon juice. Add the salmon skin-side down to the tray and spoon the garlic butter over it.',
      'Roast for 12 minutes until the salmon flakes at the edge but is still slightly translucent in the middle.',
      'Scatter with the dill and serve with the lemon wedges and tray juices.'
    ],
    tips: [
      'Give the asparagus a head start.',
      'Do not overcook the salmon.',
      'If your oven runs hot, check at 10 minutes.',
      'Spoon the tray juices over.'
    ],
    pair: ['New potatoes', 'Rice', 'Green salad', 'Dry white wine'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day.',
    nut: [491, 34, 10, 35, 4, 4, 660]
  },

  'beef-brisket-sandwich': {
    d: 'Beef brisket rubbed with paprika and braised for three hours until it pulls apart, piled into buns with barbecue sauce and pickles.',
    meta: 'Beef brisket sandwich: brisket rubbed with paprika and braised for 3 hours, piled into buns with barbecue sauce. Eight servings.',
    kw: ['beef brisket sandwich', 'slow braised brisket sandwich', 'pulled beef brisket sandwich', 'brisket sandwich with barbecue sauce', 'oven braised brisket sandwich'],
    why: 'Most home versions come out tough, and the fix is time and a cover. Brisket is a hard-working muscle, full of connective tissue, and only a long, moist cook turns it into something you can pull apart with a fork.\n\nRub the beef with the salt, paprika, garlic powder and pepper and brown it on all sides in a hot pan, about 8 minutes. The browning gives flavour that no amount of braising can add later. Set it in a heavy, lidded pot with the onion, stock and vinegar. **Keep the lid on and the temperature low.** At 150°C the connective tissue melts slowly, and the meat is tender after 3 hours.\n\nIf your oven runs hot, check at 2 hours 30 minutes. The brisket is done when a fork twists in it with no resistance. Rest it for 20 minutes in the liquid.\n\nShred the meat, discarding the big pieces of fat, and moisten it with a few spoonfuls of the braising juices and the barbecue sauce. Pile into toasted buns with pickles.',
    ing: [
      '1.2 kg beef brisket',
      '2 tsp salt',
      '2 tsp smoked paprika',
      '1 tsp garlic powder',
      '1 tsp black pepper',
      '1 tbsp sunflower oil',
      '1 onion, about 150 g, sliced',
      '300 ml beef stock',
      '2 tbsp cider vinegar',
      '150 g barbecue sauce',
      '8 burger buns, about 400 g',
      '80 g dill pickle slices'
    ],
    st: [
      'Heat the oven to 150°C. Rub the brisket with the salt, paprika, garlic powder and pepper. Brown it on all sides in the oil in a heavy pot for 8 minutes.',
      'Add the onion, stock and vinegar, cover with a tight lid and braise for 3 hours until a fork twists in it easily.',
      'Rest the brisket in its liquid for 20 minutes, then shred, discarding the large pieces of fat.',
      'Moisten with a few spoonfuls of the braising juices and the barbecue sauce. Pile into toasted buns with the pickles.'
    ],
    tips: [
      'Brown the meat first.',
      'Keep the lid on.',
      'If your oven runs hot, check at 2 hours 30 minutes.',
      'Rest it in its juices.'
    ],
    pair: ['Coleslaw', 'Oven chips', 'Cold beer', 'Baked beans'],
    store: 'Keeps in the fridge for 4 days. Reheat gently in its juices.',
    nut: [538, 32, 35, 30, 2, 10, 1360]
  },

  'beef-noodle-stir-fry': {
    d: 'Thin strips of sirloin stir-fried with egg noodles, red pepper and broccoli in a soy and oyster sauce.',
    meta: 'Beef noodle stir fry: sirloin, egg noodles, red pepper and broccoli in a soy and oyster sauce. Four servings, cooked for 10 minutes.',
    kw: ['beef noodle stir fry', 'beef and noodle stir fry', 'quick beef noodle stir fry', 'beef stir fry with egg noodles', 'beef noodle stir fry with broccoli'],
    why: 'A stir fry is a timing problem: ten minutes of cooking, and everything has to be sliced and waiting beside the hob. Once the pan is hot there is no time to chop.\n\nSlice the beef across the grain, as thinly as you can, and toss it with a teaspoon of cornflour. The cornflour gives the meat a silky coat and helps it brown. Soak the noodles in boiling water according to the packet and drain. **Heat the pan until it smokes before the beef goes in.** A cool pan makes the meat release water and boil.\n\nCook the beef in two batches for 1 minute each and lift it out. Add the pepper and broccoli to the pan, with a splash of water, for 3 minutes, then the garlic. Return the beef and add the noodles with the sauce, and toss for 2 minutes.\n\nServe at once. If your hob runs hot, work faster, not slower. The noodles should be glossy and coated, with no sauce pooling at the bottom.',
    ing: [
      '400 g sirloin steak, thinly sliced',
      '1 tsp cornflour',
      '250 g egg noodles',
      '2 tbsp sunflower oil',
      '1 red pepper, about 150 g, sliced',
      '150 g broccoli florets',
      '2 cloves garlic, sliced',
      '3 tbsp soy sauce',
      '1 tbsp oyster sauce'
    ],
    st: [
      'Toss the beef with the cornflour. Soak the noodles in boiling water for 4 minutes and drain.',
      'Heat a wok or large pan until smoking. Stir-fry the beef in the oil in two batches for 1 minute each and lift out.',
      'Stir-fry the pepper and broccoli with a splash of water for 3 minutes, adding the garlic for the last 30 seconds.',
      'Return the beef, add the noodles, soy sauce and oyster sauce and toss for 2 minutes. Serve at once.'
    ],
    tips: [
      'Slice the beef thin, across the grain.',
      'Get the pan very hot.',
      'Cook the beef in batches.',
      'Have everything ready before you start.'
    ],
    pair: ['Chilli oil', 'Pickled ginger', 'Green tea', 'Steamed greens'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day.',
    nut: [498, 32, 52, 18, 4, 4, 840]
  },

  'beef-ragu': {
    d: 'Beef shin slowly simmered with red wine, tomatoes, carrot and celery until it falls into shreds, served over pappardelle.',
    meta: 'Beef ragu: beef shin simmered with red wine, tomatoes and vegetables until it shreds, over pappardelle. Six servings, cooked for 2 hours 30 minutes.',
    kw: ['beef ragu', 'slow cooked beef ragu', 'beef ragu with pappardelle', 'italian beef ragu', 'shredded beef ragu'],
    why: 'Quick tip: cut the meat in big pieces. A ragu is made to be shredded, and large chunks hold together through the long cook and break apart at the end.\n\nBrown the beef in batches in a hot pan, for about 8 minutes in all, until it is deeply coloured. Do not crowd it, or the meat steams and goes grey. Soften the onion, carrot and celery in the same pan for 8 minutes, add the garlic and tomato puree, and pour in the wine. **Scrape up everything that has stuck to the pan.** That is where most of the flavour is.\n\nAdd the tomatoes, stock, bay leaf and beef and bring to a simmer. Cover, with the lid slightly ajar, and cook over very low heat for 2 hours, until the beef falls apart. If your hob runs hot, use a heat diffuser or the oven at 150°C.\n\nShred the beef in the sauce with two forks. Boil the pappardelle for 7 minutes, drain, and toss with the ragu and a splash of the pasta water. Serve with parmesan.',
    ing: [
      '750 g beef shin, cut into 5 cm pieces',
      '2 tbsp olive oil',
      '1 onion, about 150 g, finely chopped',
      '1 carrot, about 100 g, finely chopped',
      '1 stick celery, about 80 g, finely chopped',
      '3 cloves garlic, crushed',
      '2 tbsp tomato puree',
      '150 ml red wine',
      '800 g tinned chopped tomatoes',
      '300 ml beef stock',
      '1 bay leaf',
      '450 g pappardelle',
      '40 g parmesan, grated'
    ],
    st: [
      'Brown the beef in the oil in batches for 8 minutes in all and lift out. Soften the onion, carrot and celery in the pan for 8 minutes.',
      'Add the garlic and tomato puree for 1 minute, then the wine, scraping up the pan.',
      'Add the tomatoes, stock, bay leaf and beef. Cover with the lid ajar and simmer very gently for 2 hours until the beef falls apart.',
      'Shred the beef in the sauce. Boil the pappardelle for 7 minutes, drain and toss with the ragu. Serve with the parmesan.'
    ],
    tips: [
      'Cut the meat in big pieces.',
      'Scrape up the browned bits.',
      'If your hob runs hot, use the oven at 150°C.',
      'Add a splash of pasta water.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Red wine', 'Parmesan'],
    store: 'Keeps in the fridge for 4 days. The ragu tastes better the next day.',
    nut: [644, 39, 68, 24, 5, 8, 390]
  },

  'beef-shawarma': {
    d: 'Thin slices of sirloin marinated in lemon, cumin, turmeric and garlic, seared and rolled in flatbread with garlic yoghurt.',
    meta: 'Beef shawarma: sirloin marinated in lemon, cumin and turmeric, seared and rolled in flatbread with garlic yoghurt. Four servings, cooked for 15 minutes.',
    kw: ['beef shawarma', 'homemade beef shawarma', 'beef shawarma wraps', 'beef shawarma with garlic yoghurt', 'beef shawarma recipe'],
    why: 'Quick tip: slice the beef thin, against the grain. A real shawarma is carved from a rotating stack of meat, and this home version copies the effect by cutting the steak into thin strips.\n\nMix the marinade of lemon juice, oil, cumin, paprika, turmeric, cinnamon and garlic, and toss the beef through it for at least 30 minutes. The lemon tenderises, and the spices cling to the thin slices. **Do not marinate for more than a few hours.** The acid starts to cook the meat and turns it mealy.\n\nSear the beef in a very hot pan, in two batches, for about 2 minutes each, until the edges are brown and slightly crisp. A crowded pan makes the meat grey and watery. If your pan runs hot, lower the heat slightly after the first batch.\n\nWarm the flatbreads in a dry pan, spread with the garlic yoghurt and tahini, and pile on the beef with tomato, cucumber and pickles. Roll tightly and eat at once.',
    ing: [
      '600 g beef sirloin, thinly sliced',
      '2 tbsp lemon juice',
      '2 tbsp olive oil',
      '2 tsp ground cumin',
      '1 tsp smoked paprika',
      '1 tsp ground turmeric',
      '1/2 tsp ground cinnamon',
      '3 cloves garlic, crushed',
      '1 tsp salt',
      '4 flatbreads, about 280 g',
      '100 g Greek yoghurt',
      '1 tbsp tahini',
      '1 tomato, about 120 g, sliced',
      '1/2 cucumber, about 100 g, sliced',
      '40 g pickled vegetables'
    ],
    st: [
      'Mix the lemon juice, 1 tbsp of the oil, the cumin, paprika, turmeric, cinnamon, half the garlic and the salt. Toss the beef in it and marinate for 30 minutes.',
      'Stir the yoghurt with the tahini and remaining garlic.',
      'Heat the remaining oil in a very hot pan. Sear the beef in two batches for 2 minutes each until brown at the edges.',
      'Warm the flatbreads, spread with the garlic yoghurt, add the beef, tomato, cucumber and pickles and roll up.'
    ],
    tips: [
      'Slice the beef thin.',
      'Do not marinate for too long.',
      'Sear in batches.',
      'If your pan runs hot, lower the heat after the first batch.'
    ],
    pair: ['Pickled turnips', 'Hummus', 'Mint tea', 'Garlic sauce'],
    store: 'Best eaten at once. The cooked beef keeps in the fridge for 2 days.',
    nut: [573, 42, 45, 25, 3, 7, 1120]
  },

  'beef-and-mushroom-pie': {
    d: 'Slow-braised beef and mushrooms in a thick gravy under a puff pastry lid.',
    meta: 'Beef and mushroom pie: slow-braised beef and mushrooms in a thick gravy under puff pastry. Six servings, cooked for 2 hours 10 minutes.',
    kw: ['beef and mushroom pie', 'steak and mushroom pie', 'british beef and mushroom pie', 'homemade beef and mushroom pie', 'beef and mushroom pie with puff pastry'],
    why: 'Quick tip: let the filling go cold before the pastry goes on. A warm filling melts the butter in puff pastry from underneath, and the lid slumps instead of rising.\n\nBrown the beef in batches, then soften the onion and mushrooms in the same pan. Stir in the flour, then the stock, tomato puree and Worcestershire sauce, and simmer for 90 minutes with the lid on. **Stir in the mushrooms for the last 30 minutes.** They release their juice and add flavour, but go to rags if cooked for the full time.\n\nThe gravy should be thick enough to coat a spoon, since the pastry will not soak up any liquid. If it is thin, simmer uncovered for 10 minutes. Cool completely, ideally overnight.\n\nFill a pie dish with the beef, cover with the pastry and trim the edge. Brush with egg and cut a steam hole. Bake at 200°C for 40 minutes, until deep gold. If your oven runs hot, check at 32 minutes. Rest for 10 minutes before cutting.',
    ing: [
      '800 g stewing beef, diced',
      '2 tbsp sunflower oil',
      '1 onion, about 150 g, chopped',
      '300 g mushrooms, quartered',
      '2 tbsp plain flour',
      '400 ml beef stock',
      '2 tbsp tomato puree',
      '1 tbsp Worcestershire sauce',
      '1 tbsp thyme leaves',
      '320 g ready-rolled puff pastry',
      '1 egg, beaten',
      '1 tsp salt'
    ],
    st: [
      'Brown the beef in the oil in batches and set aside. Soften the onion in the pan for 5 minutes.',
      'Stir in the flour, then the stock, tomato puree, Worcestershire sauce, thyme, salt and beef. Cover and simmer for 60 minutes.',
      'Add the mushrooms and simmer for 30 minutes more, uncovered for the last 10 if the gravy is thin. Cool completely.',
      'Heat the oven to 200°C. Fill a 1.5 litre pie dish, cover with the pastry, trim, brush with egg and cut a steam hole.',
      'Bake for 40 minutes until deep gold. Rest for 10 minutes.'
    ],
    tips: [
      'Cool the filling before topping.',
      'Add the mushrooms late.',
      'If your oven runs hot, check at 32 minutes.',
      'Thicken the gravy well.'
    ],
    pair: ['Mashed potato', 'Peas', 'Gravy', 'Brown ale'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 25 minutes.',
    nut: [496, 34, 27, 28, 2, 4, 1060]
  },

  'beef-and-onion-pie': {
    d: 'Beef braised with plenty of sweet onions and mustard in a shortcrust-lined pie dish with a pastry lid.',
    meta: 'Beef and onion pie: beef braised with sweet onions and mustard in shortcrust. Six servings, cooked for 2 hours.',
    kw: ['beef and onion pie', 'british beef and onion pie', 'traditional beef and onion pie', 'homemade beef and onion pie', 'beef and onion pie with shortcrust'],
    why: 'Onions are the ingredient, and three of them is not too many. They cook down in the gravy until sweet and sticky, and give the pie its depth.\n\nSlice the onions thinly, and cook them in a covered pan with a little oil for 20 minutes before the beef goes in, until they are soft and golden. **Add them to the pot and let them dissolve.** They thicken the gravy as they go, so very little flour is needed.\n\nBrown the beef, stir in the flour and mustard, pour in the stock and simmer, covered, for 80 minutes, until the beef is tender and the sauce is thick. Cool the filling completely.\n\nLine a pie dish with two-thirds of the shortcrust, fill it, and cover with the rest. Press the edges together, brush with egg and cut a steam hole. Bake at 200°C for 40 minutes on a hot tray, so the base crisps. If your oven runs hot, check at 32 minutes. Serve with mash.',
    ing: [
      '800 g stewing beef, diced',
      '3 onions, about 450 g, thinly sliced',
      '3 tbsp sunflower oil',
      '2 tbsp plain flour',
      '1 tbsp English mustard',
      '400 ml beef stock',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '500 g ready-made shortcrust pastry',
      '1 egg, beaten'
    ],
    st: [
      'Cook the onions in 1 tbsp of the oil in a covered pan over low heat for 20 minutes until soft and golden. Set aside.',
      'Brown the beef in the remaining oil in batches. Stir in the flour and mustard, then the stock, salt, pepper and onions.',
      'Cover and simmer for 80 minutes until the beef is tender and the sauce is thick. Cool completely.',
      'Heat the oven to 200°C with a tray inside. Line a pie dish with two-thirds of the pastry, fill, cover with the rest and seal. Brush with egg and cut a steam hole.',
      'Bake on the hot tray for 40 minutes until deep gold.'
    ],
    tips: [
      'Cook the onions slowly first.',
      'Cool the filling.',
      'If your oven runs hot, check at 32 minutes.',
      'Bake on a preheated tray.'
    ],
    pair: ['Mashed potato', 'Peas', 'Gravy', 'Pickled onions'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 25 minutes.',
    nut: [684, 35, 46, 40, 3, 5, 1230]
  },

  'blackened-catfish': {
    d: 'Catfish fillets coated in a paprika, cayenne and thyme spice mix and seared in a very hot pan until dark and crusty.',
    meta: 'Blackened catfish: catfish fillets coated in a paprika and cayenne spice mix and seared in a hot pan. Four servings, cooked for 8 minutes.',
    kw: ['blackened catfish', 'cajun blackened catfish', 'pan blackened catfish', 'blackened catfish fillets', 'easy blackened catfish'],
    why: 'The first sign it is going right is the smoke, which is normal. Blackening is a cooking method, not a burning one, and it needs a very hot pan and an open window.\n\nBlackened does not mean burnt. The dark crust is a coating of spices that cooks onto the surface of the fish. Mix the paprika, cayenne, thyme, garlic powder, onion powder, salt and pepper and press the mixture onto both sides of each fillet. Dip each fillet in melted butter first, so that the spices stick. **Use a cast-iron pan if you have one.** It holds a heat that thin pans cannot, and the crust forms in seconds.\n\nHeat the pan until it smokes, then lay in the fillets and cook for 4 minutes on each side. The fish should be opaque and flake easily, and the crust should be dark, not black. If your pan runs hot, lower the heat slightly for the second side.\n\nServe straight away with lemon wedges, rice and a green vegetable. Open the windows and turn on the extractor fan.',
    ing: [
      '4 catfish fillets, about 600 g',
      '30 g butter, melted',
      '2 tsp smoked paprika',
      '1/2 tsp cayenne pepper',
      '1 tsp dried thyme',
      '1 tsp garlic powder',
      '1 tsp onion powder',
      '1 tsp salt',
      '1/2 tsp black pepper',
      '1 lemon, cut into wedges'
    ],
    st: [
      'Mix the paprika, cayenne, thyme, garlic powder, onion powder, salt and pepper on a plate.',
      'Dip each fillet in the melted butter, then press the spice mix onto both sides.',
      'Heat a cast-iron pan until smoking. Cook the fillets for 4 minutes on each side until dark and the fish flakes.',
      'Serve at once with the lemon wedges.'
    ],
    tips: [
      'Open the windows.',
      'Dip in butter before the spices.',
      'If your pan runs hot, lower the heat for the second side.',
      'Use a cast-iron pan.'
    ],
    pair: ['Rice', 'Coleslaw', 'Green beans', 'Cold lager'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day.',
    nut: [215, 25, 4, 11, 1, 1, 670]
  },

  'boneless-wings': {
    d: 'Breaded chicken breast pieces baked until crisp and tossed in hot sauce and butter, served with ranch.',
    meta: 'Boneless wings: breaded chicken breast pieces baked until crisp and tossed in hot sauce and butter. Four servings, cooked for 25 minutes.',
    kw: ['boneless wings', 'baked boneless wings', 'boneless buffalo wings', 'crispy baked boneless chicken wings', 'homemade boneless wings'],
    why: 'Compare it with a real wing and the difference is the work: there is no bone to gnaw and no skin to crisp. The crust has to do everything, so it must be thick and dry.\n\nCut the chicken breast into 3 cm pieces, about the size of a large walnut. Dip them in seasoned flour, then egg, then panko, pressing the crumbs on. **Use panko, not fine breadcrumbs.** The coarse flakes make a crust that stays crisp even after saucing.\n\nBake on a rack over a tray at 220°C for 20 minutes, turning once, until golden and cooked through. A rack lets air reach the underside, so the base crisps. If your oven runs hot, check at 16 minutes. Cut one open to be sure that no pink remains.\n\nWarm the hot sauce and butter until smooth, toss the hot pieces in it, and return to the oven for 5 minutes so that the coating sets. Serve with ranch for dipping and plenty of napkins.',
    ing: [
      '700 g chicken breast, cut into 3 cm pieces',
      '60 g plain flour',
      '1 tsp paprika',
      '1 tsp garlic powder',
      '1/2 tsp salt',
      '1 egg, about 50 g',
      '80 g panko breadcrumbs',
      '100 ml hot sauce',
      '30 g butter',
      '100 g ranch dressing'
    ],
    st: [
      'Heat the oven to 220°C and set a rack over a tray. Mix the flour with the paprika, garlic powder and salt.',
      'Dip the chicken in the flour, then the beaten egg, then the panko, pressing on.',
      'Bake on the rack for 20 minutes, turning once, until golden and cooked through.',
      'Warm the hot sauce and butter until smooth. Toss the chicken in it and bake for 5 minutes more. Serve with the ranch.'
    ],
    tips: [
      'Use panko.',
      'Bake on a rack.',
      'If your oven runs hot, check at 16 minutes.',
      'Cut one open to check it is cooked.'
    ],
    pair: ['Ranch dressing', 'Celery sticks', 'Oven chips', 'Cold lager'],
    store: 'Best eaten at once. Keeps in the fridge for 2 days and reheats in a hot oven.',
    nut: [480, 45, 30, 20, 2, 2, 1150]
  },

  'boulangere-potatoes': {
    d: 'Thinly sliced potatoes and onions baked in chicken stock with thyme and butter until soft and golden on top.',
    meta: 'Boulangere potatoes: thinly sliced potatoes and onions baked in chicken stock with thyme. Six servings, baked for 60 minutes.',
    kw: ['boulangere potatoes', 'french boulangere potatoes', 'potatoes boulangere', 'boulangere potatoes with stock', 'sliced potatoes baked in stock'],
    why: 'Where does the name come from? The baker, or boulangère: villagers once sent their dishes to the baker to be cooked in the bread oven as it cooled. The dish is the same as a gratin, with stock in place of cream.\n\nThe result is lighter, with a savoury, almost roasted flavour, and the potatoes keep their shape better. Slice them 3 mm thick, and do not rinse them, as the starch thickens the stock. **Layer the potatoes and onions in alternate overlapping rows.** The onions sweeten as they cook and flavour the stock.\n\nPour the hot stock down the side of the dish, until it comes about two-thirds of the way up the potatoes. Dot with butter, scatter with thyme and cover with foil. Bake at 180°C for 40 minutes, then uncover and bake for 20 minutes more.\n\nThe top should be golden and crisp at the edges, and a knife should slide through the layers with no resistance. If your oven runs hot, check at 50 minutes in all. Rest for 5 minutes before serving.',
    ing: [
      '1 kg potatoes, peeled and sliced 3 mm thick',
      '2 onions, about 300 g, thinly sliced',
      '500 ml chicken stock, hot',
      '30 g butter',
      '2 sprigs thyme, about 2 g leaves',
      '1/2 tsp salt',
      '1/2 tsp black pepper'
    ],
    st: [
      'Heat the oven to 180°C and butter a 2 litre baking dish. Layer the potatoes and onions in overlapping rows, seasoning with the salt and pepper.',
      'Pour in the hot stock until it comes two-thirds of the way up. Dot with the butter and scatter with the thyme.',
      'Cover with foil and bake for 40 minutes.',
      'Uncover and bake for 20 minutes more until the top is golden. Rest for 5 minutes.'
    ],
    tips: [
      'Slice the potatoes evenly.',
      'Do not rinse the starch off.',
      'If your oven runs hot, check at 50 minutes in all.',
      'Use hot stock.'
    ],
    pair: ['Roast chicken', 'Roast lamb', 'Green beans', 'Red wine'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 20 minutes.',
    nut: [192, 5, 34, 4, 5, 3, 480]
  },

  'brisket-tacos': {
    d: 'Beef brisket braised with chilli powder, cumin and lime until tender, shredded into warm corn tortillas with onion and coriander.',
    meta: 'Brisket tacos: brisket braised with chilli, cumin and lime and shredded into corn tortillas. Eight servings, cooked for 3 hours.',
    kw: ['brisket tacos', 'shredded brisket tacos', 'slow cooked brisket tacos', 'beef brisket tacos with lime', 'oven braised brisket tacos'],
    why: 'Autumn is the season for it, with the oven on and the house smelling of chilli and cumin. Brisket is a tough cut, and tacos are the best way to eat it: shredded, juicy, and piled into soft tortillas.\n\nRub the meat with the chilli powder, cumin, oregano and salt and sear it in a hot pan for 8 minutes. The crust that forms adds a roasted flavour that is hard to get in any other way. Set the brisket on the onion and garlic in a heavy pot and add the stock and lime juice. **Cover tightly with foil under the lid.** The steam must stay in the pot, or the meat dries out.\n\nBraise at 160°C for 3 hours, until a fork pulls the meat apart. If your oven runs hot, check at 2 hours 30 minutes. Shred with two forks and return the meat to the juices for 10 minutes so that it soaks them up.\n\nWarm the tortillas in a dry pan until pliable and pile the beef onto them with chopped onion, coriander and a squeeze of lime. Serve with salsa and sliced radishes.',
    ing: [
      '1 kg beef brisket',
      '2 tbsp chilli powder',
      '1 tsp ground cumin',
      '1 tsp dried oregano',
      '2 tsp salt',
      '1 tbsp sunflower oil',
      '1 onion, about 150 g, sliced',
      '4 cloves garlic, crushed',
      '250 ml beef stock',
      '3 tbsp lime juice',
      '12 corn tortillas, about 360 g',
      '1/2 white onion, about 60 g, finely chopped',
      '15 g fresh coriander, chopped',
      '2 limes, cut into wedges'
    ],
    st: [
      'Heat the oven to 160°C. Rub the brisket with the chilli powder, cumin, oregano and salt and sear in the oil for 8 minutes.',
      'Set the brisket on the sliced onion and garlic in a heavy pot. Add the stock and lime juice, cover tightly and braise for 3 hours.',
      'Shred the meat with two forks and return it to the juices for 10 minutes.',
      'Warm the tortillas and fill with the beef, chopped onion, coriander and lime wedges.'
    ],
    tips: [
      'Sear the meat well.',
      'Cover the pot tightly.',
      'If your oven runs hot, check at 2 hours 30 minutes.',
      'Soak the shredded meat in the juices.'
    ],
    pair: ['Salsa', 'Sliced radishes', 'Refried beans', 'Cold lager'],
    store: 'Keeps in the fridge for 4 days. Reheat gently in the juices.',
    nut: [433, 26, 26, 25, 4, 2, 820]
  },

  'broccoli-pasta-bake': {
    d: 'Penne and broccoli in a mustardy cheddar sauce, topped with breadcrumbs and baked until golden.',
    meta: 'Broccoli pasta bake: penne and broccoli in a mustardy cheddar sauce with a breadcrumb topping. Four servings, cooked for 25 minutes.',
    kw: ['broccoli pasta bake', 'cheesy broccoli pasta bake', 'broccoli and cheese pasta bake', 'baked broccoli pasta', 'broccoli penne bake'],
    why: 'Compare it with a macaroni cheese and the difference is the broccoli: it adds colour, a little bitterness and a way of making the dish feel less heavy. The sauce is the same cheese sauce, made the same way.\n\nCook the penne for 8 minutes, and drop the broccoli florets into the same pan for the last 3 minutes, so that both are drained together. Both cook again in the oven, so stop while the pasta is a little too firm. **Drain the broccoli well.** Wet florets thin the sauce.\n\nMake the sauce by melting the butter, stirring in the flour for 1 minute, and adding the milk a splash at a time, stirring until smooth and thick. Take it off the heat, add three-quarters of the cheddar and the mustard, and stir until melted.\n\nFold the pasta and broccoli into the sauce and tip into a baking dish. Scatter over the remaining cheese and the breadcrumbs. Bake at 200°C for 15 minutes, until the top is golden and the edges bubble. If your oven runs hot, check at 12 minutes.',
    ing: [
      '300 g penne',
      '350 g broccoli florets',
      '30 g butter',
      '30 g plain flour',
      '500 ml milk',
      '150 g mature cheddar, grated',
      '1 tsp English mustard',
      '40 g breadcrumbs',
      '1/2 tsp salt'
    ],
    st: [
      'Heat the oven to 200°C. Boil the penne for 8 minutes, adding the broccoli for the last 3 minutes. Drain well.',
      'Melt the butter, stir in the flour for 1 minute, then add the milk gradually and stir for 5 minutes until thick. Off the heat, stir in 110 g of the cheddar, the mustard and salt.',
      'Fold the pasta and broccoli into the sauce and tip into a baking dish.',
      'Scatter with the remaining cheese and the breadcrumbs and bake for 15 minutes until golden.'
    ],
    tips: [
      'Drain the broccoli well.',
      'Stop the pasta while still firm.',
      'If your oven runs hot, check at 12 minutes.',
      'Add the mustard for depth.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Tomato salad', 'Cold lemonade'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 15 minutes.',
    nut: [665, 28, 82, 25, 5, 11, 710]
  },

  'butter-chicken-pie': {
    d: 'Chicken thigh in a creamy tomato and garam masala sauce under a puff pastry lid.',
    meta: 'Butter chicken pie: chicken thigh in a creamy tomato and garam masala sauce under puff pastry. Six servings, cooked for 35 minutes.',
    kw: ['butter chicken pie', 'new zealand butter chicken pie', 'butter chicken pie with puff pastry', 'creamy butter chicken pie', 'indian style chicken pie'],
    why: 'Why do New Zealand bakeries sell butter chicken pies? Because the combination is hard to argue with: a mild, creamy curry, inside a pastry crust that you can hold in one hand. In autumn, with the first cold nights, it is the pie to go for.\n\nThe filling is a quick butter chicken. Soften the onion in butter, add the garlic, ginger and spices for 2 minutes, then stir in the passata and chicken. Simmer for 15 minutes, until the chicken is cooked through and the sauce has thickened, and add the cream at the end. **Make the sauce thick, thicker than you would eat with rice.** Thin sauce makes the pastry soggy.\n\nCool the filling for 15 minutes, spoon it into a pie dish and cover with the pastry. Press the edge, brush with egg and cut a steam hole.\n\nBake at 200°C for 20 minutes, until the pastry has risen and turned deep gold. If your oven runs hot, check at 16 minutes. Serve with rice or a green salad, and some mango chutney on the side.',
    ing: [
      '600 g boneless chicken thighs, diced',
      '2 tbsp butter, about 30 g',
      '1 onion, about 150 g, finely chopped',
      '3 cloves garlic, crushed',
      '20 g fresh ginger, grated',
      '2 tbsp garam masala',
      '1 tsp smoked paprika',
      '200 g passata',
      '150 ml double cream',
      '1/2 tsp salt',
      '320 g ready-rolled puff pastry',
      '1 egg, beaten'
    ],
    st: [
      'Heat the oven to 200°C. Soften the onion in the butter for 5 minutes, then add the garlic, ginger, garam masala and paprika for 2 minutes.',
      'Add the passata, chicken and salt and simmer for 15 minutes until the chicken is cooked and the sauce is thick. Stir in the cream and cool for 15 minutes.',
      'Spoon into a 1.5 litre pie dish, cover with the pastry, press the edge, brush with egg and cut a steam hole.',
      'Bake for 20 minutes until risen and deep gold.'
    ],
    tips: [
      'Make the sauce thick.',
      'Cool the filling before the pastry goes on.',
      'If your oven runs hot, check at 16 minutes.',
      'Add the cream at the end.'
    ],
    pair: ['Basmati rice', 'Mango chutney', 'Green salad', 'Cold lager'],
    store: 'Keeps in the fridge for 3 days. Reheat in a 180°C oven for 20 minutes.',
    nut: [492, 25, 26, 32, 3, 5, 660]
  },

  'cheese-tortellini-with-pesto': {
    d: 'Fresh cheese tortellini tossed with basil pesto, cherry tomatoes and parmesan.',
    meta: 'Cheese tortellini with pesto: fresh cheese tortellini tossed with basil pesto, cherry tomatoes and parmesan. Four servings, cooked for 8 minutes.',
    kw: ['cheese tortellini with pesto', 'tortellini with pesto and tomatoes', 'easy tortellini with pesto', 'tortellini with basil pesto', 'fresh tortellini with pesto'],
    why: 'It is the easiest dinner on a night when there is no time to think. A packet of fresh tortellini cooks in 4 minutes, and the sauce is a jar of pesto and some cherry tomatoes.\n\nBring a large pan of salted water to a gentle boil, since a hard boil breaks the delicate parcels. Add the tortellini and cook for 4 minutes, until they float and the filling is hot. **Save a mugful of the cooking water before draining.** The starch in it loosens the pesto into a silky coat.\n\nWhile the pasta cooks, halve the tomatoes and warm them in a pan with a splash of oil for 2 minutes, until they begin to burst. Drain the tortellini and tip them into the pan, then add the pesto and a splash of the pasta water.\n\nToss gently, taking care not to tear the pasta, and scatter with parmesan and pine nuts. Serve at once, since the pesto darkens as it stands.',
    ing: [
      '500 g fresh cheese tortellini',
      '4 tbsp green pesto, about 60 g',
      '150 g cherry tomatoes, halved',
      '1 tbsp olive oil',
      '40 g parmesan, grated',
      '20 g pine nuts'
    ],
    st: [
      'Boil the tortellini in a large pan of salted water for 4 minutes. Save a mugful of the water and drain.',
      'Warm the tomatoes in the oil in a wide pan for 2 minutes until beginning to burst.',
      'Add the tortellini, pesto and a splash of the pasta water and toss gently.',
      'Scatter with the parmesan and pine nuts and serve at once.'
    ],
    tips: [
      'Boil gently.',
      'Save some pasta water.',
      'Toss gently.',
      'Serve straight away.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Dry white wine', 'Rocket'],
    store: 'Best eaten at once. Keeps in the fridge for 1 day.',
    nut: [568, 20, 59, 28, 3, 5, 1020]
  }
};
