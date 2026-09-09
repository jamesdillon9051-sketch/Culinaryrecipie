'use strict';

/**
 * Volume twelve — the mains.
 *
 * Eighteen dishes built on four techniques that recur across the whole cuisine:
 * a tray baked with potatoes under the meat, a pot of yakhne stewed until the
 * fat rises, a vegetable hollowed and stuffed, and rice cooked in the broth of
 * whatever is going on top of it.
 */

module.exports = {
  'kafta-bil-sanieh': {
    d: 'Spiced lamb pressed flat into a tray, layered with potato and tomato and baked in one dish. The weeknight answer to a family of six, and the reason every Lebanese kitchen owns a round tray.',
    meta: 'Spiced lamb kafta pressed into a tray under sliced potato and tomato, baked in one dish until the edges catch.',
    kw: ['kafta bil sanieh', 'lebanese kafta tray bake', 'kafta recipe', 'baked kafta potatoes', 'lamb tray bake'],
    why: 'The potatoes are parboiled and the kafta is not, and both facts are about finishing together. Raw potato slices need longer than the meat can survive, so eight minutes in boiling water evens them out. The kafta is pressed thin and scored into portions before baking, which does two things: it lets the tomato juices run down into the meat rather than sitting on top, and it means the whole tray comes out in neat pieces instead of one collapsing slab.',
    ing: [
      '# For the kafta',
      '800 g lamb mince, 20 per cent fat',
      '1 large onion, grated and squeezed dry',
      '60 g flat-leaf parsley, very finely chopped',
      '2 tsp ground allspice',
      '1 tsp ground cinnamon',
      '2 tsp fine sea salt',
      '0.75 tsp black pepper',
      '# For the tray',
      '800 g waxy potatoes, sliced 5 mm thick',
      '4 tomatoes, sliced 5 mm thick',
      '1 onion, sliced into rings',
      '3 tbsp olive oil',
      '# For the sauce',
      '3 tbsp tomato purée',
      '300 ml hot water',
      '1 tbsp pomegranate molasses',
      '0.75 tsp fine sea salt'
    ],
    st: [
      'Heat the oven to 200°C / 400°F. Boil the potato slices 8 minutes until barely yielding, then drain well.',
      'Work the lamb, grated onion, parsley, allspice, cinnamon, salt and pepper together until it turns slightly sticky — a minute of proper mixing, which is what stops it crumbling.',
      'Press the mixture into an even 1.5 cm layer across the base of a 30 cm round or equivalent roasting tray.',
      'Score it into six wedges with a knife, cutting right down to the tray.',
      'Layer the potato, tomato and onion rings over the top and drizzle with the olive oil.',
      'Whisk the tomato purée, hot water, molasses and salt and pour it evenly over everything.',
      'Bake 45 minutes, until the potatoes are tender, the top has browned at the edges and most of the liquid has gone. Rest 10 minutes before cutting along the scored lines.'
    ],
    tips: [
      'Parboil the potatoes or they will still be hard when the meat is done.',
      'Mix the kafta until it goes sticky. That is the binding.',
      'Score before baking, not after.'
    ],
    pair: ['Plain rice', 'A bowl of yogurt', 'Pickled turnips'],
    store: 'Refrigerated for 3 days. Reheat covered at 180°C for 20 minutes. It freezes for 2 months.',
    nut: [520, 28, 34, 30, 5, 7, 780]
  },

  'kibbeh-bil-sanieh': {
    d: 'Two layers of bulgur and lamb around a middle of spiced mince and pine nuts, scored into diamonds and baked. The tray version of kibbeh, and by some distance the easier one.',
    meta: 'Two layers of bulgur and lamb sandwiching spiced mince and pine nuts, scored into diamonds and baked until dark.',
    kw: ['kibbeh bil sanieh', 'baked kibbeh', 'kibbeh tray recipe', 'lebanese baked kibbeh', 'bulgur lamb bake'],
    why: 'Scoring the diamonds before baking is not decoration. The top layer is dense and would otherwise trap steam underneath and go soggy; cutting through to the filling lets it escape and lets the butter poured over the top run down into the cuts, which is how the edges of each diamond get crisp. Dip the knife in cold water between cuts or it drags. And the bulgur must be squeezed genuinely dry — wet bulgur bakes to a paste.',
    ing: [
      '# For the shell',
      '350 g fine bulgur wheat',
      '500 g lean lamb, minced twice',
      '1 onion, grated',
      '2 tsp ground allspice',
      '1 tsp ground cinnamon',
      '2 tsp fine sea salt',
      '0.5 tsp black pepper',
      '5 tbsp ice water',
      '# For the filling',
      '400 g lamb mince',
      '2 onions, finely chopped',
      '70 g pine nuts',
      '3 tbsp olive oil',
      '2 tsp ground allspice',
      '1.5 tsp fine sea salt',
      '2 tbsp pomegranate molasses',
      '# To finish',
      '60 g butter, melted, or 4 tbsp olive oil'
    ],
    st: [
      'Soak the bulgur in cold water 15 minutes, drain, and squeeze it dry in handfuls until no more water comes out.',
      'Toast the pine nuts in the oil until gold and lift out. Fry the onions 8 minutes, add the mince and cook 12 minutes until the pan is dry, then stir in the allspice, salt and molasses. Return the nuts and set aside to cool.',
      'Work the bulgur, twice-minced lamb, grated onion, spices, salt and pepper with the ice water into a smooth, cohesive paste.',
      'Heat the oven to 200°C / 400°F and oil a 30 cm round tray. Press half the shell mixture into the base in an even layer, using wet hands.',
      'Spread the cooled filling over it, right to the edges.',
      'Flatten the remaining shell mixture between wet palms into patties and lay them over the filling, smoothing the joins with a wet hand until it is one continuous sheet.',
      'Score deep diamonds through to the filling with a wet knife. Pour the melted butter evenly over the top.',
      'Bake 45 minutes until deep brown and pulling from the sides of the tray. Rest 10 minutes before serving.'
    ],
    tips: [
      'Squeeze the bulgur properly dry or it bakes to paste.',
      'Score right through to the filling, and wet the knife between cuts.',
      'Wet hands for every stage of the shell.'
    ],
    pair: ['Plain yogurt', 'A tomato and cucumber salad', 'Pickled chillies'],
    store: 'Refrigerated for 4 days. Reheat at 190°C for 15 minutes. It freezes baked or unbaked for 3 months.',
    nut: [545, 30, 38, 30, 6, 5, 720]
  },

  'kibbeh-labaniyeh': {
    d: 'Kibbeh balls poached in a stabilised yogurt sauce with garlic and dried mint. Warm, sour, and completely unlike the fried version despite starting the same way.',
    meta: 'Kibbeh balls poached in a stabilised yogurt sauce finished with garlic and dried mint, served over rice.',
    kw: ['kibbeh labaniyeh', 'kibbeh in yogurt', 'lebanese yogurt sauce', 'labaniyeh recipe', 'yogurt kibbeh'],
    why: 'Yogurt splits the moment it boils unless it is stabilised, and the fix is cornflour plus constant stirring in one direction until it comes to a simmer. Stir the other way, or stop stirring, and the proteins clump. Once it has simmered for a couple of minutes it is stable and can be left alone. The kibbeh balls go in only after that point — dropped into a still-fragile sauce they would need stirring around and break the emulsion you have just built.',
    ing: [
      '# For the kibbeh',
      '250 g fine bulgur wheat',
      '350 g lean lamb, minced twice',
      '1 small onion, grated',
      '1.5 tsp ground allspice',
      '1.5 tsp fine sea salt',
      '3 tbsp ice water',
      '# For the yogurt sauce',
      '1 kg full-fat plain yogurt',
      '1 egg white',
      '2 tbsp cornflour',
      '200 ml water',
      '1.25 tsp fine sea salt',
      '# To finish',
      '5 garlic cloves, crushed',
      '2 tbsp dried mint',
      '2 tbsp olive oil'
    ],
    st: [
      'Soak the bulgur 15 minutes, drain and squeeze dry. Work it with the lamb, onion, allspice, salt and ice water to a smooth paste.',
      'Roll into walnut-sized balls with wet hands, sealing any cracks. Set aside.',
      'Whisk the yogurt, egg white, cornflour, water and salt in a heavy pan until completely smooth with no lumps of cornflour.',
      'Set over medium heat and stir constantly in one direction with a wooden spoon until it comes to a gentle simmer. This takes about 10 minutes and you must not stop.',
      'Simmer 3 minutes more, still stirring. The sauce is now stable and will not split.',
      'Lower the kibbeh balls in one at a time and simmer very gently 20 minutes, moving the pan rather than stirring, until they are cooked through.',
      'Fry the garlic in the oil for 40 seconds, take off the heat, stir in the dried mint, and pour the lot over the pan. Serve with rice.'
    ],
    tips: [
      'Stir in one direction, without stopping, until it simmers.',
      'The cornflour and egg white are what stop it splitting. Do not omit them.',
      'Move the pan instead of stirring once the kibbeh are in.'
    ],
    pair: ['Plain rice', 'Toasted flatbread', 'A cucumber salad'],
    store: 'Refrigerated for 3 days. Rewarm gently over low heat, stirring; it will not survive a hard boil. Do not freeze.',
    nut: [485, 32, 41, 21, 4, 12, 690]
  },

  'shish-barak': {
    d: 'Tiny meat dumplings pinched into rings and cooked in the same garlic-and-mint yogurt. Fiddly enough that it is a dish for a day when several people are in the kitchen.',
    meta: 'Small lamb dumplings pinched into rings, baked until they colour, then finished in a garlic and dried mint yogurt sauce.',
    kw: ['shish barak', 'lebanese dumplings', 'shish barak recipe', 'meat dumplings yogurt', 'yogurt dumpling stew'],
    why: 'The dumplings are baked before they go into the sauce, which is the step most recipes skip and the one that makes the dish. Raw dumplings simmered in yogurt release flour and grey meat juices into the sauce and go slack; twelve minutes in a hot oven sets the pastry, browns the meat and means they hold their shape and their bite. The ring shape matters too — joining the two corners of the half-moon gives a thicker seam that survives the simmer.',
    ing: [
      '# For the dough',
      '300 g plain flour',
      '150 ml warm water',
      '2 tbsp olive oil',
      '0.75 tsp fine sea salt',
      '# For the filling',
      '300 g lamb mince',
      '1 onion, very finely chopped',
      '1.5 tsp ground allspice',
      '1 tsp fine sea salt',
      '2 tbsp pine nuts, chopped',
      '# For the sauce',
      '1 kg full-fat plain yogurt',
      '1 egg white',
      '2 tbsp cornflour',
      '250 ml water',
      '1.25 tsp fine sea salt',
      '# To finish',
      '5 garlic cloves, crushed',
      '2 tbsp dried mint',
      '2 tbsp olive oil'
    ],
    st: [
      'Knead the flour, water, oil and salt to a firm smooth dough, 8 minutes. Cover and leave while you make the filling.',
      'Mix the raw lamb with the onion, allspice, salt and pine nuts.',
      'Heat the oven to 200°C / 400°F. Roll the dough as thin as you can and cut 5 cm rounds.',
      'Put a scant half-teaspoon of filling on each, fold to a half-moon and pinch shut, then bring the two corners together and pinch them into a ring.',
      'Bake the dumplings on lined trays 12 minutes, until firm and lightly coloured. They do not need to be cooked through.',
      'Whisk the yogurt, egg white, cornflour, water and salt smooth, then stir constantly in one direction over medium heat for 10 minutes until it simmers. Simmer 3 minutes more.',
      'Add the dumplings and cook gently 12 minutes, moving the pan rather than stirring.',
      'Fry the garlic in the oil 40 seconds, stir in the dried mint off the heat, and pour over. Serve immediately.'
    ],
    tips: [
      'Bake the dumplings first. It is what keeps the sauce clean.',
      'Pinch the corners into a ring — the seam holds better.',
      'One direction, constant stirring, until the yogurt simmers.'
    ],
    pair: ['Plain rice', 'A radish and mint salad', 'Flatbread'],
    store: 'Refrigerated for 2 days; rewarm over low heat without boiling. The baked dumplings freeze for 2 months.',
    nut: [520, 30, 48, 22, 3, 13, 730]
  },

  'sayadieh': {
    d: 'Fish poached, set aside, and its stock used to cook rice under a mountain of onions taken almost to black. Tripoli and Sidon both claim it and both cook it darker than you expect.',
    meta: 'White fish poached and set aside while its stock cooks rice under deeply caramelised onions, served with tahini sauce.',
    kw: ['sayadieh', 'lebanese fish rice', 'sayadieh recipe', 'caramelised onion fish rice', 'fisherman rice'],
    why: 'The colour of this dish comes entirely from onions cooked far past where instinct says stop — not golden, but genuinely dark brown, almost at the point of bitterness. That is where the near-black colour and the deep sweetness of the rice come from, and undercooked onions give you a pale, bland pilaf. The fish comes out of the stock before the rice goes in, because twenty-five minutes of simmering would shred it; it is returned only at the end, to warm through.',
    ing: [
      '1 kg firm white fish fillets, such as cod or hake, skin on',
      '2 tsp ground cumin',
      '1.5 tsp fine sea salt',
      '3 tbsp olive oil',
      '# For the onions and rice',
      '4 large onions, sliced thinly',
      '5 tbsp olive oil',
      '400 g basmati rice, rinsed and drained',
      '1 tsp ground cumin',
      '0.5 tsp ground cinnamon',
      '0.25 tsp ground allspice',
      '1.25 tsp fine sea salt',
      '900 ml water',
      '# To finish',
      '60 g flaked almonds, toasted',
      '30 g pine nuts, toasted',
      'Lemon wedges'
    ],
    st: [
      'Rub the fish with the cumin and salt. Sear skin-side down in 3 tbsp oil for 3 minutes, turn and cook 2 minutes more, then lift out and set aside. It will finish later.',
      'In the same pan, cook the onions in 5 tbsp oil over medium heat for 30 minutes, stirring often, until they collapse and go a deep brown. Do not stop at golden.',
      'Lift out a third of the onions for the top and keep them somewhere warm.',
      'Add the water to the pan with the remaining onions and the cumin, cinnamon, allspice and salt. Bring to the boil and scrape the base clean.',
      'Stir in the rice, bring back to the boil, then cover and cook on the lowest heat 18 minutes without lifting the lid.',
      'Lay the fish on top of the rice, replace the lid and leave off the heat 7 minutes to steam through.',
      'Pile onto a platter, scatter with the reserved onions, almonds and pine nuts, and serve with lemon.'
    ],
    tips: [
      'Take the onions to dark brown. Golden is not far enough.',
      'The fish leaves the pan before the rice goes in.',
      'Do not lift the lid during the 18 minutes.'
    ],
    pair: ['Tahini sauce', 'A sharp green salad', 'Pickled chillies'],
    store: 'Refrigerated for 2 days. Reheat covered at 170°C for 20 minutes. Do not freeze — the fish goes woolly.',
    nut: [610, 38, 62, 22, 4, 8, 690]
  },

  'samke-harra': {
    d: 'Whole fish under a tahini, chilli and coriander sauce, from Tripoli. The sauce is loosened with the fish stock and goes on at the very end so it never splits.',
    meta: 'Whole baked fish under a Tripoli sauce of tahini, chilli, coriander and walnut, loosened with stock and added at the end.',
    kw: ['samke harra', 'lebanese spicy fish', 'samke harra recipe', 'tahini fish sauce', 'tripoli fish'],
    why: 'Tahini splits when it is heated hard, so the sauce is built off the heat and spooned over fish that is already cooked. Every version that bakes the fish under the sauce ends up with an oily, separated layer and a dish that looks broken. Loosening it with the fish’s own cooking juices rather than plain water is what ties the two together, and the coriander goes in raw at the last second so it stays green instead of turning khaki.',
    ing: [
      '1.5 kg whole sea bass or bream, scaled and gutted',
      '2 tbsp olive oil',
      '1.5 tsp fine sea salt',
      '1 lemon, sliced',
      '# For the sauce',
      '200 g tahini',
      '5 tbsp lemon juice',
      '6 garlic cloves, crushed',
      '2 red chillies, finely chopped',
      '60 g walnuts, chopped',
      '50 g coriander leaves, chopped',
      '1 tsp ground coriander',
      '1 tsp fine sea salt',
      '150 ml warm water, or fish juices',
      '# To finish',
      '2 tbsp olive oil',
      '2 tbsp pine nuts, toasted'
    ],
    st: [
      'Heat the oven to 200°C / 400°F. Slash the fish three times on each side, rub with oil and salt and fill the cavity with lemon slices.',
      'Bake on a lined tray 35 to 40 minutes, until the flesh at the thickest point pulls cleanly from the bone. Tip the tray and reserve the juices.',
      'Whisk the tahini with the lemon juice — it will seize and stiffen, which is normal.',
      'Loosen it with the warm fish juices, adding a spoonful at a time, until it pours like double cream.',
      'Fry the garlic and chillies in 2 tbsp oil for 1 minute, no more, and stir them into the sauce off the heat.',
      'Stir in the walnuts, ground coriander, salt and most of the fresh coriander.',
      'Spoon the sauce generously over the warm fish, scatter with pine nuts and the last of the coriander, and serve.'
    ],
    tips: [
      'The sauce never goes in the oven. Heat splits tahini.',
      'Loosen with the fish juices, not water.',
      'Fresh coriander in last, off the heat, or it goes drab.'
    ],
    pair: ['Plain rice', 'Flatbread', 'A tomato salad'],
    store: 'Refrigerated for 2 days. The sauce thickens; loosen with lemon and water. Do not freeze.',
    nut: [590, 45, 18, 39, 5, 3, 780]
  },

  'sfiha-baalbakieh': {
    d: 'Small open-topped meat pies from Baalbek, the meat sharp with pomegranate molasses and tomato. Open, not sealed, and baked hot and fast so the topping stays juicy.',
    meta: 'Small open-topped Baalbek meat pies, the lamb sharpened with pomegranate molasses and tomato and baked hot and fast.',
    kw: ['sfiha', 'sfiha baalbakieh', 'lebanese meat pies', 'sfiha recipe', 'open lamb pies'],
    why: 'The topping goes on raw and cooks in the same eight minutes as the dough, which is why the oven has to be as hot as it will go — a slow bake dries the meat to gravel before the base has coloured. Grating the onion and squeezing it dry matters for the same reason: onion water pooling on top steams the meat instead of roasting it. And the molasses is not optional seasoning; it is the sourness that defines Baalbek sfiha against every other version.',
    ing: [
      '# For the dough',
      '400 g plain flour',
      '7 g fast-action dried yeast',
      '1 tsp caster sugar',
      '1 tsp fine sea salt',
      '3 tbsp olive oil',
      '240 ml warm water',
      '# For the topping',
      '500 g lamb mince',
      '2 onions, grated and squeezed dry',
      '3 tomatoes, deseeded and very finely diced',
      '3 tbsp pomegranate molasses',
      '2 tbsp tomato purée',
      '1.5 tsp ground allspice',
      '0.5 tsp Aleppo pepper',
      '1.5 tsp fine sea salt',
      '2 tbsp tahini'
    ],
    st: [
      'Mix the flour, yeast, sugar and salt, work in the oil and water, and knead 8 minutes to a soft dough. Cover and leave 60 minutes, until doubled.',
      'Mix all the topping ingredients together thoroughly. It should be thick enough to sit on dough without running.',
      'Heat the oven to its maximum, at least 250°C / 480°F, with a heavy tray inside.',
      'Divide the dough into 24 pieces and flatten each into a 9 cm disc on a lined tray, leaving a slight rim.',
      'Spread a heaped tablespoon of the meat over each disc, right to the edge, in a thin even layer.',
      'Bake on the preheated tray 8 to 10 minutes, until the bases are crisp and the meat has just lost its raw colour. They should still look juicy.',
      'Serve hot with lemon and yogurt.'
    ],
    rest: [60, 'the dough rising'],
    tips: [
      'The oven must be at its maximum. A slow bake dries the meat.',
      'Squeeze the onion dry or the topping steams.',
      'Spread the meat thin. A thick layer will not cook in time.'
    ],
    pair: ['Plain yogurt', 'Lemon wedges', 'Pickled turnips'],
    store: 'Refrigerated for 3 days; reheat 6 minutes at 220°C. They freeze baked for 2 months.',
    nut: [265, 13, 27, 12, 2, 4, 480]
  },

  'arayes': {
    d: 'Pitta stuffed with raw spiced lamb and grilled until the bread crisps and the fat from the meat soaks into it. Fifteen minutes, and better than that sounds.',
    meta: 'Pitta bread stuffed with raw spiced lamb and grilled hard so the fat renders into the bread and crisps it from inside.',
    kw: ['arayes', 'lebanese stuffed pita', 'arayes recipe', 'grilled meat pita', 'kafta arayes'],
    why: 'Everything good about arayes comes from the meat being raw when it goes in. It renders as it cooks and the fat has nowhere to go except into the bread, which fries from the inside — that is the whole trick, and pre-cooking the lamb loses it entirely. Use lamb with real fat in it, spread the layer thin so it cooks through in the time the bread takes to crisp, and press the whole thing under a weight so the two surfaces are in contact.',
    ing: [
      '400 g lamb mince, 20 per cent fat',
      '1 small onion, grated and squeezed dry',
      '30 g flat-leaf parsley, finely chopped',
      '1 tomato, deseeded and finely diced',
      '1.5 tsp ground allspice',
      '0.5 tsp ground cinnamon',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '1 tbsp pomegranate molasses',
      '# To assemble',
      '4 large round pitta breads',
      '2 tbsp olive oil',
      '# To serve',
      'Lemon wedges',
      'Toum'
    ],
    st: [
      'Mix the lamb with the onion, parsley, tomato, spices, salt, pepper and molasses. Work it for a minute until it holds together.',
      'Split each pitta around the edge into two discs but leave one side joined, like a book.',
      'Spread a quarter of the raw meat inside each in a thin, even layer no more than 5 mm thick, right to the edges. Press closed.',
      'Brush both outside faces with olive oil.',
      'Heat a heavy frying pan or griddle over medium heat. Cook the arayes two at a time with a weight on top — another pan works — for 6 minutes.',
      'Turn and cook 6 to 7 minutes more, until both faces are deep gold and crisp and the meat is cooked through at the centre.',
      'Cut into wedges and serve immediately with lemon and toum.'
    ],
    tips: [
      'The meat goes in raw. Cooking it first wastes the whole idea.',
      'Spread it thin — 5 mm, no more.',
      'Weight the top so the bread and meat stay in contact.'
    ],
    pair: ['Toum', 'A tomato and mint salad', 'Pickled chillies'],
    store: 'Best immediately. Refrigerated for 2 days; re-crisp in a dry pan rather than a microwave.',
    nut: [545, 27, 46, 28, 3, 5, 890]
  },

  'riz-a-djaj': {
    d: 'Chicken poached with whole spices, its broth used for the rice, the meat pulled and piled back on top with toasted nuts. The dish that appears whenever there are guests.',
    meta: 'Chicken poached with whole spices, the broth used to cook spiced rice with lamb mince, finished with toasted nuts.',
    kw: ['riz a djaj', 'lebanese chicken rice', 'riz a djaj recipe', 'hashweh rice', 'spiced rice nuts chicken'],
    why: 'The broth is the point of poaching the chicken rather than roasting it, and it should be made with whole spices rather than ground — cinnamon sticks, bay and cardamom pods give a clean perfumed stock, where ground spice makes it cloudy and slightly gritty. Toast the nuts separately in butter and add them at the table, not in the pot: nuts stirred through rice and left to sit go soft, and the contrast between the crisp nut and the soft rice is half of what this dish is.',
    ing: [
      '# For the chicken and broth',
      '1.6 kg whole chicken',
      '2 cinnamon sticks',
      '6 cardamom pods, bruised',
      '3 bay leaves',
      '1 onion, halved',
      '1 tbsp black peppercorns',
      '2 tsp fine sea salt',
      '2 litres water',
      '# For the rice',
      '400 g basmati rice, rinsed and drained',
      '300 g lamb mince',
      '3 tbsp butter, or 3 tbsp olive oil',
      '1.5 tsp ground allspice',
      '0.5 tsp ground cinnamon',
      '1.25 tsp fine sea salt',
      '# To finish',
      '60 g flaked almonds',
      '50 g pine nuts',
      '2 tbsp butter, or 2 tbsp olive oil',
      '20 g flat-leaf parsley, chopped'
    ],
    st: [
      'Put the chicken in a large pot with the whole spices, onion, peppercorns, salt and water. Bring to a bare simmer and skim the grey foam off the top.',
      'Poach very gently 45 minutes, until the leg pulls away easily. Lift the chicken out and strain the broth, keeping 750 ml.',
      'Brown the lamb mince in the butter over high heat for 8 minutes, until it is properly coloured rather than grey, then stir in the allspice, cinnamon and salt.',
      'Add the rice and turn it in the buttery mince for 2 minutes until every grain is coated.',
      'Pour in the 750 ml of hot broth, bring to the boil, then cover and cook on the lowest heat 15 minutes.',
      'Meanwhile pull the chicken meat off the bone in large pieces, discarding skin and bone. Toast the almonds and pine nuts in the 2 tbsp butter until gold.',
      'Rest the rice off the heat, covered, for 8 minutes. Fork it through, pile it on a platter with the chicken over the top, and scatter with the hot nuts and parsley.'
    ],
    tips: [
      'Whole spices in the broth, not ground. Ground makes it cloudy.',
      'Brown the mince properly — grey mince gives a flat dish.',
      'Nuts at the table, so they stay crisp.'
    ],
    pair: ['Plain yogurt', 'A cucumber and mint salad', 'Pickled turnips'],
    store: 'Refrigerated for 3 days. Reheat covered with a splash of broth. The rice freezes for 2 months; toast fresh nuts.',
    nut: [640, 41, 56, 26, 3, 3, 720]
  },

  'djaj-mhammar': {
    d: 'Chicken and potatoes roasted hard in lemon, garlic and olive oil until the edges blacken. Four ingredients doing all the work, which means the oven has to be doing its share.',
    meta: 'Chicken and potatoes roasted hard in lemon, garlic and olive oil until the skin blisters and the potato edges blacken.',
    kw: ['djaj mhammar', 'lebanese roast chicken', 'chicken potatoes lemon garlic', 'djaj mhammar recipe', 'roast chicken sumac'],
    why: 'A tray this simple lives or dies on how crowded it is. Chicken and potatoes packed together release steam that has nowhere to go, and everything poaches in its own liquid — pale skin, soft potatoes, no dish. Use the largest tray you own and leave a finger of space around each piece. The lemon goes on in two stages: juice at the start, which cooks down into the potatoes, and fresh juice at the end, which does not taste cooked at all.',
    ing: [
      '1.5 kg chicken thighs and drumsticks, skin on',
      '1 kg waxy potatoes, cut into large wedges',
      '10 garlic cloves, peeled and left whole',
      '6 tbsp olive oil',
      '5 tbsp lemon juice',
      '2 tsp fine sea salt',
      '1 tsp black pepper',
      '1 tbsp sumac',
      '1 tsp dried oregano',
      '150 ml water',
      '# To finish',
      '2 tbsp lemon juice',
      '1 tsp sumac',
      '20 g flat-leaf parsley, chopped'
    ],
    st: [
      'Heat the oven to 220°C / 425°F.',
      'Toss the chicken, potatoes and garlic with the oil, 5 tbsp lemon juice, salt, pepper, sumac and oregano until everything is thoroughly coated.',
      'Spread over your largest roasting tray in a single layer, skin-side up, with space around each piece. Use two trays rather than crowd one.',
      'Pour the water into the corner of the tray, not over the chicken — it keeps the base from burning without wetting the skin.',
      'Roast 40 minutes without touching it.',
      'Turn the potatoes only, leaving the chicken alone, and roast a further 25 minutes until the skin is blistered and dark and the potato edges have caught.',
      'Squeeze over the fresh lemon juice, scatter with sumac and parsley, and rest 5 minutes before serving.'
    ],
    tips: [
      'Do not crowd the tray. Two trays beat one full one.',
      'Water in the corner, never over the skin.',
      'Fresh lemon at the end as well as the start.'
    ],
    pair: ['Toum', 'A green salad', 'Flatbread'],
    store: 'Refrigerated for 3 days. Reheat at 200°C for 15 minutes to bring the skin back. It freezes for 2 months.',
    nut: [615, 38, 42, 32, 5, 3, 830]
  },

  'bamia-bi-lahme': {
    d: 'Okra and lamb stewed in tomato with a lot of coriander and garlic. Cooked long enough that the okra gives up entirely, which is when it stops being slimy.',
    meta: 'Okra and lamb stewed slowly in tomato with coriander and garlic, cooked long enough that the okra loses its slipperiness.',
    kw: ['bamia', 'okra lamb stew', 'bamia bi lahme', 'lebanese okra stew', 'okra tomato stew'],
    why: 'Okra is slippery because cutting it releases mucilage, so the answer is not to cut it — leave the pods whole, trim the cone of the stem without breaking into the seed chamber, and it never gets the chance. The second defence is acid and time: tomato and a long simmer break the mucilage down completely. Anything under an hour leaves it in that unhappy middle where it is neither firm nor properly collapsed.',
    ing: [
      '600 g lamb shoulder, cut into 3 cm cubes',
      '700 g small okra, stems trimmed but pods left whole',
      '2 onions, chopped',
      '4 tbsp olive oil',
      '8 garlic cloves, crushed',
      '50 g coriander leaves and stems, chopped',
      '400 g tin chopped tomatoes',
      '2 tbsp tomato purée',
      '1 tbsp pomegranate molasses',
      '1.5 tsp ground coriander',
      '0.5 tsp ground allspice',
      '1.75 tsp fine sea salt',
      '0.5 tsp black pepper',
      '600 ml water',
      '# To finish',
      'Lemon wedges'
    ],
    st: [
      'Trim the okra by paring the stem cone away without cutting into the pod. Keep them whole.',
      'Brown the lamb hard in 2 tbsp oil, in two batches so the pan stays hot, about 8 minutes total. Lift out.',
      'Soften the onions in the remaining oil 8 minutes, add the garlic and half the fresh coriander and cook 2 minutes.',
      'Stir in the tomato purée and cook it out 2 minutes, then return the lamb with the tomatoes, molasses, ground coriander, allspice, salt, pepper and water.',
      'Simmer covered 50 minutes, until the lamb is beginning to yield.',
      'Add the okra whole, pushing it under the liquid, and simmer uncovered a further 40 minutes. Do not stir hard — shake the pan instead.',
      'The okra should be completely soft and the sauce glossy and reduced. Stir in the rest of the coriander and serve with rice and lemon.'
    ],
    tips: [
      'Leave the pods whole. Cutting them is what makes okra slimy.',
      'An hour and a half total, not less. Half-cooked okra is the worst version.',
      'Shake the pan rather than stirring once the okra is in.'
    ],
    pair: ['Plain rice', 'Flatbread', 'Pickled chillies'],
    store: 'Refrigerated for 4 days and better the next day. It freezes for 3 months.',
    nut: [430, 27, 24, 26, 7, 9, 760]
  },

  'fasolia-bi-lahme': {
    d: 'White beans and lamb stewed with tomato and a great deal of garlic and coriander. The everyday winter pot, eaten over rice.',
    meta: 'White beans and lamb stewed with tomato, garlic and coriander until the beans are creamy and the sauce has thickened.',
    kw: ['fasolia', 'white bean lamb stew', 'fasolia bi lahme', 'lebanese bean stew', 'yakhne fasolia'],
    why: 'Salt goes in late. Beans cooked in salted liquid from the start keep tough skins however long they simmer, because salt firms the pectin in the skin before the inside softens — so the pot is seasoned once the beans are already tender, and they come out creamy instead of chalky. The lamb goes in first and gets a head start, since shoulder needs longer than a soaked bean does and the two want to arrive at the same moment.',
    ing: [
      '600 g lamb shoulder, cut into 3 cm cubes',
      '2 x 400 g tins white beans, drained, or 250 g dried beans soaked overnight',
      '2 onions, chopped',
      '4 tbsp olive oil',
      '8 garlic cloves, crushed',
      '40 g coriander leaves and stems, chopped',
      '400 g tin chopped tomatoes',
      '2 tbsp tomato purée',
      '1 tsp ground coriander',
      '0.5 tsp ground allspice',
      '1.75 tsp fine sea salt',
      '0.5 tsp black pepper',
      '700 ml water',
      '# To finish',
      'Lemon wedges'
    ],
    st: [
      'Brown the lamb in 2 tbsp oil over high heat in two batches, about 8 minutes, until properly coloured. Lift out.',
      'Soften the onions in the rest of the oil 8 minutes, then add the garlic and half the coriander and cook 2 minutes.',
      'Stir in the tomato purée and cook 2 minutes until it darkens.',
      'Return the lamb with the tomatoes, ground coriander, allspice, pepper and water. Simmer covered 60 minutes.',
      'Add the beans and simmer a further 30 minutes, uncovered for the last 10 so the sauce reduces.',
      'Only now stir in the salt. Taste and adjust.',
      'Finish with the remaining fresh coriander and serve over rice with lemon.'
    ],
    tips: [
      'Salt at the end. Early salt keeps bean skins tough.',
      'The lamb needs an hour before the beans join it.',
      'Uncover at the end to thicken the sauce rather than adding flour.'
    ],
    pair: ['Plain rice', 'Flatbread', 'A raw onion and sumac salad'],
    store: 'Refrigerated for 4 days, better on day two. It freezes for 3 months.',
    nut: [470, 32, 34, 22, 9, 6, 720]
  },

  'sheikh-el-mahshi': {
    d: 'Aubergines split, stuffed with lamb and pine nuts, and baked in tomato. The name means "the chief of stuffed things", which tells you where it sits at the table.',
    meta: 'Aubergines split and stuffed with spiced lamb and pine nuts, then baked in a light tomato sauce until collapsing.',
    kw: ['sheikh el mahshi', 'stuffed aubergine lamb', 'sheikh el mahshi recipe', 'lebanese stuffed eggplant', 'baked stuffed aubergine'],
    why: 'The aubergines are roasted before they are stuffed, not after, and that is what separates this from every soggy stuffed-vegetable dish. Roasting drives off water and collapses the flesh into something silky, so the shell is soft enough to eat with a spoon and will not weep into the sauce. Stuffing them raw means an hour in the oven fighting the aubergine’s water content, and a sauce that turns thin and grey by the time the shell is tender.',
    ing: [
      '6 medium aubergines',
      '4 tbsp olive oil',
      '1 tsp fine sea salt',
      '# For the filling',
      '500 g lamb mince',
      '2 onions, finely chopped',
      '60 g pine nuts',
      '3 tbsp olive oil',
      '2 tsp ground allspice',
      '0.5 tsp ground cinnamon',
      '1.5 tsp fine sea salt',
      '# For the sauce',
      '400 g tin chopped tomatoes',
      '2 tbsp tomato purée',
      '1 tbsp pomegranate molasses',
      '300 ml water',
      '0.75 tsp fine sea salt'
    ],
    st: [
      'Heat the oven to 220°C / 425°F. Halve the aubergines lengthways, score the cut faces in a diamond, rub with 4 tbsp oil and the salt, and roast cut-side down 25 minutes until slumped and browned.',
      'Toast the pine nuts in 3 tbsp oil until gold and lift out. Fry the onions 8 minutes, add the lamb and cook 12 minutes until browned and dry.',
      'Stir in the allspice, cinnamon and salt, then return the pine nuts.',
      'Turn the aubergines cut-side up and press the middle of each down with a spoon to make a hollow, without tearing the skin.',
      'Whisk the tomatoes, purée, molasses, water and salt and pour into a baking dish. Sit the aubergines in it.',
      'Heap the filling into the hollows, pressing it down gently.',
      'Lower the oven to 190°C / 375°F and bake 25 minutes, spooning sauce over twice, until the sauce has thickened around them. Rest 10 minutes.'
    ],
    tips: [
      'Roast the aubergines first. Stuffing them raw gives you a watery dish.',
      'Cook the mince until the pan is dry.',
      'Rest before serving — it firms up and cuts cleanly.'
    ],
    pair: ['Plain rice', 'Yogurt', 'Flatbread'],
    store: 'Refrigerated for 3 days. Reheat covered at 180°C for 20 minutes. It freezes for 2 months.',
    nut: [455, 24, 26, 29, 9, 12, 690]
  },

  'koussa-mahshi': {
    d: 'Small courgettes cored and filled with rice and lamb, cooked upright in tomato. Coring them without going through the end is a knack, and there is a tool for it.',
    meta: 'Small courgettes cored and filled with rice and lamb, packed upright and simmered in a light tomato broth.',
    kw: ['koussa mahshi', 'stuffed courgette', 'lebanese stuffed zucchini', 'koussa recipe', 'rice stuffed courgettes'],
    why: 'The filling is two-thirds full and never more, because the rice inside is raw and will roughly double. Packed tight, the courgette splits along its side and empties into the pot. The other rule is the pot itself: they stand upright, shoulder to shoulder, so they hold each other up and cook evenly in liquid that only just covers them — laid flat they roll, cook unevenly and the filling falls out of the open end.',
    ing: [
      '12 small pale courgettes, about 12 cm long',
      '# For the filling',
      '250 g short-grain rice, rinsed',
      '350 g lamb mince',
      '2 tbsp butter, softened, or 2 tbsp olive oil',
      '1.5 tsp ground allspice',
      '0.5 tsp ground cinnamon',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# For the pot',
      '400 g tin chopped tomatoes',
      '2 tbsp tomato purée',
      '1 tbsp dried mint',
      '3 garlic cloves, crushed',
      '1 tsp fine sea salt',
      '700 ml water',
      '2 tbsp lemon juice'
    ],
    st: [
      'Cut the stem end off each courgette and core it with an apple corer or a narrow vegetable corer, leaving a 5 mm wall and stopping short of the far end. Do not pierce the base.',
      'Mix the rice, lamb, butter, allspice, cinnamon, salt and pepper. The filling stays raw.',
      'Fill each courgette two-thirds full, tapping it on the board to settle the filling. Leave a clear centimetre at the open end.',
      'Stand them upright and packed tight in a heavy pot that just fits them.',
      'Whisk the tomatoes, purée, dried mint, garlic, salt and water and pour it in until it comes just below the open ends.',
      'Bring to a simmer, cover, and cook on low heat 50 to 55 minutes, until the rice is tender and the courgette gives to a spoon.',
      'Add the lemon juice, leave off the heat 10 minutes, and serve with the broth spooned over.'
    ],
    tips: [
      'Two-thirds full. Rice doubles and will split the shell.',
      'Stand them upright so they support each other.',
      'Do not pierce the closed end when coring.'
    ],
    pair: ['Plain yogurt', 'Flatbread', 'A tomato salad'],
    store: 'Refrigerated for 3 days. Reheat gently in the broth. They freeze cooked for 2 months.',
    nut: [415, 22, 44, 17, 4, 8, 700]
  },

  'malfouf-mahshi': {
    d: 'Cabbage leaves rolled tight around rice and lamb, packed in layers with garlic and dried mint. The winter cousin of stuffed vine leaves and, made properly, better.',
    meta: 'Cabbage leaves rolled around rice and lamb, packed in layers with garlic and dried mint and simmered under a weight.',
    kw: ['malfouf mahshi', 'stuffed cabbage rolls', 'lebanese cabbage rolls', 'malfouf recipe', 'rice lamb cabbage'],
    why: 'Blanching the cabbage is a matter of seconds rather than minutes. The leaf needs to be pliable enough to roll and no softer — overcooked leaves tear as you roll them and disintegrate in the pot. Take the whole head, drop it in boiling water, and peel the leaves off one at a time as they loosen, returning the head to the water between each. Pare the thick rib flat with a knife instead of cutting it out, so the roll has no hole in it.',
    ing: [
      '1 large white cabbage',
      '# For the filling',
      '250 g short-grain rice, rinsed',
      '400 g lamb mince',
      '2 tbsp butter, softened, or 2 tbsp olive oil',
      '1.5 tsp ground allspice',
      '0.5 tsp ground cinnamon',
      '1.75 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# For the pot',
      '10 garlic cloves, peeled',
      '2 tbsp dried mint',
      '4 tbsp lemon juice',
      '2 tbsp olive oil',
      '1 tsp fine sea salt',
      '800 ml water'
    ],
    st: [
      'Core the cabbage. Lower the whole head into a large pan of boiling water and peel off the leaves one by one as they soften, about 30 seconds each. Do not let them go floppy.',
      'Pare the thick central rib of each leaf flat with a knife rather than cutting it out, then halve the larger leaves.',
      'Mix the rice, lamb, butter, allspice, cinnamon, salt and pepper. The filling stays raw.',
      'Put a finger of filling along the base of each leaf, fold the sides in and roll up firmly. Rice expands, so keep them slim.',
      'Line a heavy pot with torn outer leaves. Pack the rolls seam-side down in tight layers, tucking whole garlic cloves between them as you go.',
      'Mix the dried mint, lemon, oil, salt and water and pour over. Weigh the rolls down with a heatproof plate.',
      'Bring to a simmer, cover, and cook gently 60 minutes, until the rice is tender and the cabbage is soft. Rest 15 minutes off the heat before lifting them out.'
    ],
    tips: [
      'Thirty seconds a leaf. Overcooked leaves tear.',
      'Pare the rib flat rather than cutting a notch out of the leaf.',
      'Weight them or they unroll.'
    ],
    pair: ['Plain yogurt', 'Lemon wedges', 'Flatbread'],
    store: 'Refrigerated for 4 days. They freeze cooked for 3 months and reheat in their own liquid.',
    nut: [400, 21, 42, 17, 5, 6, 780]
  },

  'yakhnet-batata': {
    d: 'Potato and lamb stewed in tomato with coriander and garlic until the potatoes start to break and thicken the pot themselves. The plainest yakhne and the most eaten.',
    meta: 'Potatoes and lamb stewed in tomato with garlic and coriander until the potatoes break down and thicken the broth.',
    kw: ['yakhnet batata', 'potato lamb stew', 'lebanese potato stew', 'yakhne recipe', 'lamb tomato potato stew'],
    why: 'The potatoes are the thickener, so a floury variety is essential and a waxy one gives you soup with lumps in it. Cut them large — 4 cm — because you want the outsides to fray and dissolve while the centres stay whole, and small dice simply disappear. The coriander stalks go in early with the garlic and the leaves go in at the end, which gets you both the deep base note and the fresh top note from one bunch.',
    ing: [
      '600 g lamb shoulder, cut into 3 cm cubes',
      '900 g floury potatoes, cut into 4 cm chunks',
      '2 onions, chopped',
      '4 tbsp olive oil',
      '8 garlic cloves, crushed',
      '40 g coriander, stalks and leaves separated and chopped',
      '400 g tin chopped tomatoes',
      '2 tbsp tomato purée',
      '1 tsp ground coriander',
      '0.5 tsp ground allspice',
      '1.75 tsp fine sea salt',
      '0.5 tsp black pepper',
      '800 ml water',
      '# To finish',
      'Lemon wedges'
    ],
    st: [
      'Brown the lamb in 2 tbsp oil in two batches over high heat, 8 minutes total. Lift out.',
      'Soften the onions in the remaining oil 8 minutes, then add the garlic and the chopped coriander stalks and cook 2 minutes.',
      'Stir in the tomato purée and cook it out 2 minutes.',
      'Return the lamb with the tomatoes, ground coriander, allspice, salt, pepper and water. Simmer covered 45 minutes.',
      'Add the potatoes and simmer uncovered 20 minutes more, until they are tender and their edges have started to fray into the broth.',
      'Crush two or three chunks against the side of the pan to thicken it further.',
      'Stir in the coriander leaves and serve over rice with lemon.'
    ],
    tips: [
      'Floury potatoes. Waxy ones will not thicken the pot.',
      'Cut them large so the edges fray but the middles hold.',
      'Stalks early, leaves late — one bunch, two jobs.'
    ],
    pair: ['Plain rice', 'Flatbread', 'Pickled turnips'],
    store: 'Refrigerated for 4 days and thicker the next day. It freezes for 3 months.',
    nut: [455, 28, 38, 21, 5, 6, 740]
  },

  'freekeh-djaj': {
    d: 'Green wheat, harvested young and roasted over fire, cooked like a pilaf under poached chicken. It tastes of smoke before it tastes of anything else.',
    meta: 'Smoky green freekeh cooked pilaf-style in chicken broth with allspice, topped with poached chicken and toasted nuts.',
    kw: ['freekeh', 'freekeh chicken', 'freekeh recipe', 'lebanese green wheat', 'smoked wheat pilaf'],
    why: 'Freekeh must be rinsed and picked over before it is cooked, because it is a fire-roasted field grain and it genuinely does arrive with grit and chaff in it. It also takes far more liquid and far longer than rice — around forty minutes and twice the water — so it cannot be substituted into a rice method and treated the same way. Cracked freekeh cooks in half the time of whole; check which you have bought, because the difference is the dish.',
    ing: [
      '# For the chicken and broth',
      '6 chicken thighs, bone in and skin on',
      '1 onion, halved',
      '2 cinnamon sticks',
      '5 cardamom pods, bruised',
      '2 bay leaves',
      '1.5 tsp fine sea salt',
      '1.4 litres water',
      '# For the freekeh',
      '350 g whole freekeh, rinsed and picked over',
      '1 onion, finely chopped',
      '3 tbsp olive oil',
      '1.5 tsp ground allspice',
      '0.5 tsp ground cinnamon',
      '1.25 tsp fine sea salt',
      '# To finish',
      '50 g flaked almonds',
      '40 g pine nuts',
      '2 tbsp butter, or 2 tbsp olive oil',
      '20 g flat-leaf parsley, chopped',
      'Lemon wedges'
    ],
    st: [
      'Simmer the chicken with the onion, whole spices, bay and salt in the water for 30 minutes, skimming the foam. Lift the chicken out and strain the broth, keeping 900 ml.',
      'Rinse the freekeh in several changes of water, picking out any grit and chaff, and drain.',
      'Soften the chopped onion in the oil for 8 minutes, then stir in the allspice and cinnamon.',
      'Add the freekeh and turn it in the oil for 2 minutes.',
      'Pour in the 900 ml of hot broth, add the salt, bring to the boil, then cover and cook on low heat 40 minutes, until the grains are tender but still chewy and the liquid is gone.',
      'Meanwhile grill the chicken thighs skin-side up for 8 minutes until the skin crisps, and toast the nuts in the butter until gold.',
      'Rest the freekeh covered for 10 minutes, fork it through, and serve with the chicken on top, scattered with nuts, parsley and lemon.'
    ],
    tips: [
      'Rinse and pick it over. Freekeh really does carry grit.',
      'Check whether yours is whole or cracked — the times are very different.',
      'Grill the poached skin at the end or it stays flabby.'
    ],
    pair: ['Plain yogurt', 'A tomato and onion salad', 'Pickled chillies'],
    store: 'Refrigerated for 3 days. Reheat covered with a splash of broth. It freezes for 2 months.',
    nut: [625, 42, 58, 24, 9, 4, 710]
  },

  'kousa-bil-laban': {
    d: 'Stuffed courgettes finished in the garlic and mint yogurt rather than tomato. Milder than the tomato version and, in most Lebanese households, the one people actually prefer.',
    meta: 'Courgettes stuffed with rice and lamb, simmered and then finished in a stabilised garlic and dried mint yogurt sauce.',
    kw: ['kousa bil laban', 'courgette yogurt sauce', 'stuffed courgette yogurt', 'kousa recipe', 'lebanese yogurt courgettes'],
    why: 'The courgettes are cooked in water first and only meet the yogurt at the end, which is the opposite of what looks efficient and is the reason it works. Starch leaching out of raw rice will thin and dull a yogurt sauce over an hour of simmering; cooked separately, the sauce stays thick and white and the courgettes arrive already tender. The yogurt still needs stabilising with cornflour and one-directional stirring, exactly as for kibbeh labaniyeh.',
    ing: [
      '12 small pale courgettes, about 12 cm long',
      '# For the filling',
      '250 g short-grain rice, rinsed',
      '350 g lamb mince',
      '2 tbsp butter, softened, or 2 tbsp olive oil',
      '1.5 tsp ground allspice',
      '1.5 tsp fine sea salt',
      '0.5 tsp black pepper',
      '# For the sauce',
      '1 kg full-fat plain yogurt',
      '1 egg white',
      '2 tbsp cornflour',
      '200 ml water',
      '1.25 tsp fine sea salt',
      '# To finish',
      '6 garlic cloves, crushed',
      '2 tbsp dried mint',
      '2 tbsp olive oil'
    ],
    st: [
      'Core the courgettes, leaving a 5 mm wall and a closed base.',
      'Mix the rice, lamb, butter, allspice, salt and pepper, and fill each courgette two-thirds full.',
      'Stand them upright in a pot, cover with salted water, and simmer gently 30 minutes until the rice is tender. Lift them out carefully and keep warm. Discard the water.',
      'Whisk the yogurt, egg white, cornflour, water and salt smooth in the dry pot.',
      'Stir constantly in one direction over medium heat for 10 minutes until it reaches a simmer, then simmer 3 minutes more.',
      'Lower the courgettes back in and warm through for 8 minutes, moving the pot rather than stirring.',
      'Fry the garlic in the oil 40 seconds, stir in the dried mint off the heat, pour over, and serve with rice.'
    ],
    tips: [
      'Cook the courgettes in water first. Rice starch ruins the yogurt.',
      'One direction, no stopping, until it simmers.',
      'Dried mint, not fresh — fresh goes black in the sauce.'
    ],
    pair: ['Plain rice', 'Flatbread', 'A radish salad'],
    store: 'Refrigerated for 3 days. Rewarm over low heat without boiling. Do not freeze — the sauce separates.',
    nut: [430, 25, 45, 16, 4, 11, 720]
  }
};
