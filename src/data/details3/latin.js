/** Cuban, Colombian, Peruvian, Argentinian, Chilean and Brazilian recipe details,
    volume three. See ../details2/italian.js for the schema. */

module.exports = {
  'ropa-vieja': {
    d: 'Flank steak simmered until it shreds, then stewed in a sofrito of peppers, onions, olives and cumin until the sauce clings to every strand.',
    meta: 'Ropa vieja — Cuban shredded flank steak stewed in a pepper, onion, olive and cumin sofrito.',
    kw: ['ropa vieja recipe', 'cuban shredded beef', 'flank steak stew', 'beef with peppers and olives'],
    why: 'The beef is cooked twice — boiled until it shreds, then stewed in the sofrito — because shredded meat absorbs a sauce in a way a braised joint never can. Reserving some of the cooking broth and using it as the stewing liquid keeps the beef flavour in the dish instead of pouring it down the sink.',
    ing: [
      '1.2 kg flank or skirt steak',
      '# For the first cook',
      '2 litres water',
      '1 onion, halved',
      '2 bay leaves',
      '1 carrot',
      '1 tbsp fine sea salt',
      '# For the sofrito',
      '5 tbsp olive oil',
      '2 onions, sliced',
      '2 red peppers, sliced',
      '1 green pepper, sliced',
      '6 garlic cloves, sliced',
      '2 tbsp tomato purée',
      '400 g tin chopped tomatoes',
      '150 ml dry white wine',
      '2 tsp ground cumin',
      '1 tsp dried oregano',
      '1 tsp sweet paprika',
      '2 bay leaves',
      '120 g green olives, sliced',
      '2 tbsp capers',
      '1 1/2 tsp fine sea salt',
      '# To serve',
      'White rice, black beans, fried plantain'
    ],
    st: [
      'Put the steak in a pot with the water, onion, bay, carrot and salt. Bring to a boil, skim, then simmer 90 minutes until it pulls apart easily.',
      'Lift the meat out and cool slightly. Strain the broth and keep 400 ml.',
      'Shred the beef along the grain into long strands with two forks — the dish is named "old clothes" for a reason.',
      'Heat the olive oil in a wide pan and cook the onions and peppers over medium heat for 15 minutes until soft and sweet.',
      'Add the garlic for 1 minute, then the tomato purée, cumin, oregano and paprika, and cook 2 minutes.',
      'Pour in the wine and let it reduce by half.',
      'Add the tomatoes, bay, the reserved broth and the salt, and simmer 15 minutes.',
      'Fold the shredded beef through and simmer, uncovered, for 25 minutes, until the sauce has thickened and coats the strands rather than pooling.',
      'Stir in the olives and capers and cook 5 minutes more.',
      'Taste, remove the bay, and serve with rice, black beans and plantain.'
    ],
    tips: [
      'Shred along the grain into long strands, not into crumbs.',
      'Keep the boiling broth — it is the base of the sauce.',
      'Simmer uncovered at the end until the sauce clings. Wet ropa vieja is under-cooked.'
    ],
    pair: ['White rice and black beans', 'Fried sweet plantain', 'A mojito'],
    store: 'Refrigerate up to 4 days, better on day two, and freeze 3 months.',
    nut: [608, 24, 20, 48, 4, 8, 1320]
  },

  'bandeja-paisa': {
    rest: [480, 'soaking'],
    d: 'The Antioquian platter: beans, rice, chicharrón, chorizo, minced beef, a fried egg, plantain, avocado and an arepa, all on one plate.',
    meta: 'Bandeja paisa — Colombian platter of beans, rice, chicharrón, chorizo, beef, egg, plantain and arepa.',
    kw: ['bandeja paisa recipe', 'colombian platter', 'frijoles paisas', 'chicharron and beans'],
    why: 'The beans are the anchor and they need a hogao — a slow-cooked tomato and spring onion sofrito — stirred in near the end rather than at the start, so their sweetness stays bright against the long-cooked beans. Everything else is timed backwards from the egg, which has to be the last thing cooked.',
    ing: [
      '# For the beans',
      '400 g cargamanto or borlotti beans, soaked overnight',
      '1 carrot, whole',
      '200 g pork belly or hock',
      '1 plantain, grated, optional but traditional',
      '2 tsp fine sea salt',
      '# For the hogao',
      '3 tbsp oil',
      '6 spring onions, chopped',
      '4 tomatoes, chopped',
      '3 garlic cloves, minced',
      '1 tsp ground cumin',
      '# For the plate',
      '400 g beef mince',
      '4 chorizo sausages',
      '400 g pork belly, scored, for chicharrón',
      '4 eggs',
      '2 ripe plantains, sliced diagonally',
      '400 g cooked white rice',
      '4 arepas',
      '2 avocados, sliced',
      'Lime wedges'
    ],
    st: [
      'Drain the beans and simmer them with the whole carrot and the pork belly in fresh water for 90 minutes, until tender. Keep them saucy, topping up with hot water.',
      'For the hogao, cook the spring onions in the oil for 5 minutes, add the garlic and cumin for 1 minute, then the tomatoes, and cook 15 minutes to a thick sauce.',
      'Stir half the hogao and the grated plantain into the beans and cook 20 minutes more, then season.',
      'For the chicharrón, put the scored pork belly in a dry heavy pan with 100 ml water, cover, and cook 30 minutes. Uncover and fry in its own fat for 15 minutes, turning, until puffed and crisp.',
      'Fry the chorizo until browned and cooked through.',
      'Cook the beef mince with the rest of the hogao for 10 minutes until browned and saucy.',
      'Fry the plantain slices in oil for 2 minutes a side until golden and caramelised.',
      'Warm the arepas on a griddle.',
      'Fry the eggs last, in hot oil, so the whites are crisp at the edges and the yolks runny.',
      'Build each plate: a mound of rice, a bowl or pool of beans, the chicharrón, chorizo, mince, plantain, egg on top, with an arepa, avocado and lime at the side.'
    ],
    tips: [
      'Hogao goes into the beans late, not at the start.',
      'Start the chicharrón with water in the pan — it renders before it fries.',
      'Eggs last. Everything else can be kept warm.'
    ],
    pair: ['Aguapanela or a cold beer', 'Aji picante', 'Lime wedges'],
    store: 'The beans keep 4 days and freeze 3 months. Cook the fried components fresh.',
    nut: [1420, 82, 108, 72, 18, 16, 2280]
  },

  'ajiaco': {
    d: 'Bogotá chicken and potato soup, thickened by three kinds of potato breaking down at different rates, with guascas, corn, cream and capers.',
    meta: 'Ajiaco — Bogotá chicken and potato soup with guascas, corn, cream and capers.',
    kw: ['ajiaco recipe', 'colombian chicken soup', 'ajiaco bogotano', 'guascas soup'],
    why: 'Three potato varieties are not fussiness: the small yellow criollas dissolve completely and thicken the soup, the sabanera holds its shape, and the pastusa sits in between. Guascas is the herb that makes ajiaco taste like ajiaco and there is no real substitute — it is worth ordering.',
    ing: [
      '1 chicken, about 1.5 kg, or 6 chicken breasts on the bone',
      '2.5 litres water',
      '2 spring onions, whole',
      '1 bunch coriander stalks',
      '2 tsp fine sea salt',
      '# For the potatoes',
      '600 g small yellow potatoes (papa criolla), peeled',
      '500 g waxy potatoes, sliced 5 mm thick',
      '500 g floury potatoes, in chunks',
      '# For the soup',
      '3 corn on the cob, cut into thick rounds',
      '4 tbsp dried guascas',
      '1 onion, chopped',
      '3 garlic cloves',
      '# To serve',
      '200 ml double cream',
      '4 tbsp capers',
      '2 avocados, sliced',
      'White rice'
    ],
    st: [
      'Simmer the chicken in the water with the spring onions, coriander stalks, onion, garlic and salt for 40 minutes.',
      'Lift the chicken out, cool slightly, and shred the meat. Return the bones to the pot for another 20 minutes, then strain the broth.',
      'Bring the broth back to a simmer and add the yellow criolla potatoes and the floury potatoes.',
      'Cook 25 minutes, stirring occasionally — the criollas should dissolve completely and the floury ones should start to break down, thickening the soup.',
      'Add the waxy potato slices and the corn and cook 15 minutes, until the slices are tender but still holding.',
      'Stir in the guascas, rubbing it between your palms as it goes in, and simmer 10 minutes.',
      'Return the shredded chicken and warm through. The soup should be thick enough to hold a spoon upright for a moment.',
      'Taste and season.',
      'Serve in deep bowls with a piece of corn in each, and cream, capers and avocado spooned in at the table.'
    ],
    tips: [
      'Three potatoes, three jobs. Using one variety gives a thin soup.',
      'Guascas is the flavour. Order it rather than substituting.',
      'Cream and capers go in at the table, not the pot.'
    ],
    pair: ['White rice', 'Avocado and capers', 'A cold beer'],
    store: 'Refrigerate up to 3 days; it thickens considerably. Loosen with broth when reheating.',
    nut: [778, 28, 72, 42, 8, 8, 1320]
  },

  'empanadas-colombianas': {
    d: 'Corn dough shells filled with potato and shredded beef, deep fried until the outside is crackly and deep yellow, eaten with ají and lime.',
    meta: 'Colombian empanadas — corn dough shells filled with potato and beef, deep fried until crackly.',
    kw: ['colombian empanadas recipe', 'corn dough empanadas', 'empanadas de carne', 'fried corn empanadas'],
    why: 'The masarepa dough is stiffer and drier than a wheat pastry, so it is rolled between plastic sheets rather than on a floured surface — flour would only make it crack. Sealing them by pressing with a plate or a bowl rim gives a clean, tight edge, and any gap means oil gets in and the empanada bursts.',
    ing: [
      '# For the dough',
      '300 g yellow masarepa (pre-cooked corn flour)',
      '450 ml warm water',
      '1 tsp ground achiote or turmeric, for colour',
      '1 tsp fine sea salt',
      '1 tbsp oil',
      '# For the filling',
      '400 g beef skirt or chuck, boiled and shredded',
      '500 g floury potatoes, boiled and roughly mashed',
      '4 spring onions, chopped',
      '2 tomatoes, chopped',
      '3 garlic cloves, minced',
      '1 tsp ground cumin',
      '1 tsp ground achiote',
      '3 tbsp oil',
      '1 1/2 tsp fine sea salt',
      '150 ml of the beef cooking broth',
      '# For frying and serving',
      '1 litre neutral oil',
      'Ají picante and lime wedges'
    ],
    st: [
      'For the filling, cook the spring onions, tomatoes and garlic in the oil for 10 minutes to a thick sofrito. Add the cumin and achiote for 1 minute.',
      'Stir in the shredded beef, the mashed potato, the salt and enough broth to make the mixture moist but not wet. Cool completely.',
      'Mix the masarepa, achiote and salt, then add the warm water and oil and knead 3 minutes to a smooth, soft dough. Rest 10 minutes covered — it will stiffen.',
      'If it cracks when you press it, work in a little more water. It should be pliable, like plasticine.',
      'Roll walnut-sized balls and flatten each between two sheets of plastic to a 12 cm disc, about 3 mm thick.',
      'Peel back the top sheet, put a heaped tablespoon of cold filling on one half, and use the bottom sheet to fold the dough over into a half moon.',
      'Press the edge closed with the rim of a bowl or plate, which trims and seals in one movement.',
      'Check every empanada for cracks and patch them with a little wet dough.',
      'Heat the oil to 180C and fry four at a time for 4 to 5 minutes, turning once, until deep golden and blistered.',
      'Drain on a rack and serve hot with ají and lime.'
    ],
    tips: [
      'Roll between plastic sheets, never on flour.',
      'Cold filling, always. Warm filling steams the dough open.',
      'Patch any crack before frying or it will burst in the oil.'
    ],
    pair: ['Ají picante', 'Lime wedges', 'A cold beer'],
    store: 'Freeze uncooked on trays for 2 months and fry from frozen, adding 2 minutes.',
    nut: [242, 12, 26, 8, 2, 1, 480]
  },

  'causa-limena': {
    rest: [180, 'chilling'],
    d: 'Cold layers of yellow potato mashed with lime and ají amarillo, packed around a chicken or crab filling and turned out like a terrine.',
    meta: 'Causa limeña — cold layered Peruvian potato terrine with ají amarillo, lime and a chicken filling.',
    kw: ['causa limena recipe', 'peruvian potato terrine', 'aji amarillo potato', 'cold layered potato dish'],
    why: 'The potato is mashed while hot but seasoned and worked until it is smooth and slightly elastic, then chilled — that structure is what lets it be sliced. Ají amarillo paste and lime go in generously because the dish is served cold, and cold food needs more seasoning than hot food to taste the same.',
    ing: [
      '1 kg yellow waxy potatoes, such as Charlotte',
      '4 tbsp ají amarillo paste',
      'Juice of 3 limes',
      '5 tbsp vegetable oil',
      '2 tsp fine sea salt',
      '# For the filling',
      '400 g cooked chicken, shredded, or 300 g white crab meat',
      '6 tbsp mayonnaise',
      '2 spring onions, finely chopped',
      '1 celery stick, finely chopped',
      'Juice of 1/2 lime',
      'Salt and white pepper',
      '# For layering and finishing',
      '2 avocados, sliced',
      '2 hard boiled eggs, sliced',
      '12 black olives',
      'Coriander leaves',
      'Extra mayonnaise, for piping'
    ],
    st: [
      'Boil the potatoes whole in their skins for 20 to 25 minutes until completely tender. Drain and peel while still hot.',
      'Pass them through a ricer into a bowl while hot — cold potato will not take the seasoning smoothly.',
      'Work in the ají amarillo paste, lime juice, oil and salt, kneading with your hands for 3 minutes until the mash is smooth, dense and slightly elastic. Taste: it should be sharp and clearly spiced.',
      'Cool the potato completely, covered.',
      'Mix the chicken or crab with the mayonnaise, spring onion, celery, lime, salt and white pepper.',
      'Line a loaf tin or a ring mould with cling film.',
      'Press in a third of the potato in an even layer, then half the filling, then avocado slices.',
      'Add another third of potato, the rest of the filling, and finish with the last of the potato, pressing each layer flat.',
      'Cover and refrigerate at least 3 hours, ideally overnight.',
      'Turn out, peel off the film, and decorate with egg slices, olives, piped mayonnaise and coriander. Serve cold.'
    ],
    tips: [
      'Rice the potatoes hot, season hot, chill after. Order matters.',
      'Season harder than seems right. Cold mutes everything.',
      'Overnight in the fridge gives clean slices.'
    ],
    pair: ['A pisco sour', 'Salsa criolla', 'Choclo corn'],
    store: 'Refrigerate up to 2 days, wrapped. Do not freeze.',
    nut: [412, 26, 32, 16, 4, 3, 880]
  },

  'pisco-sour': {
    d: 'Pisco, lime, sugar syrup and egg white shaken hard twice, poured over a fine foam and finished with three drops of Angostura.',
    meta: 'Pisco sour — pisco, lime, syrup and egg white double shaken to a thick foam, with Angostura bitters.',
    kw: ['pisco sour recipe', 'peruvian cocktail', 'egg white sour', 'classic pisco drink'],
    why: 'The dry shake — shaking without ice first — is what emulsifies the egg white into a stable foam; adding ice at the start chills the protein before it can be whipped and the head collapses in a minute. Peruvian pisco is unaged and aromatic, and swapping in a barrel-aged spirit changes the drink completely.',
    ing: [
      '60 ml Peruvian pisco, ideally quebranta or acholado',
      '25 ml fresh lime juice',
      '20 ml sugar syrup, made 1:1',
      '1 egg white, about 25 ml',
      '3 dashes Angostura bitters',
      'Ice, for shaking'
    ],
    st: [
      'Chill a coupe glass in the freezer.',
      'Put the pisco, lime juice, sugar syrup and egg white into a shaker with no ice.',
      'Seal and shake hard for 15 seconds. This is the dry shake, and it is what builds the foam.',
      'Open the shaker, fill it with ice, seal again and shake hard for another 15 seconds until the outside is frosted.',
      'Double strain through a fine sieve into the chilled coupe.',
      'Let it settle for 20 seconds so the foam separates cleanly from the liquid.',
      'Drop three dashes of Angostura onto the foam, and drag a cocktail stick through them for a pattern if you like.',
      'Serve immediately, while the head is still tight.'
    ],
    tips: [
      'Dry shake first, always. Ice first gives you a thin, short-lived head.',
      'Double strain so no ice shards break the foam.',
      'Fresh lime only. Bottled juice makes the drink taste flat and sweet.'
    ],
    pair: ['Causa limeña', 'Ceviche', 'Salted nuts'],
    store: 'Make to order. Sugar syrup keeps a month refrigerated.',
    nut: [186, 0, 14, 3, 0, 13, 25]
  },

  'provoleta': {
    d: 'A thick disc of provolone cooked in a cast iron pan until the bottom is a crust and the middle is molten, scattered with oregano and chilli.',
    meta: 'Provoleta — a disc of provolone grilled in cast iron until crusted outside and molten inside.',
    kw: ['provoleta recipe', 'argentinian grilled cheese', 'provolone asado', 'cast iron cheese'],
    why: 'Provolone hilado, the aged Argentinian type, has a low enough moisture content to brown rather than collapse into a puddle — a young provolone dolce will simply melt and run. Drying the cut surface in the fridge for an hour is what lets the crust form before the middle goes.',
    ing: [
      '400 g aged provolone, in one disc 2.5 cm thick',
      '1 tbsp dried oregano',
      '1 tsp chilli flakes',
      '2 tbsp olive oil',
      '1 tsp coarse black pepper',
      '# To serve',
      'Crusty bread',
      'Chimichurri',
      'Lemon wedges'
    ],
    st: [
      'Sit the provolone disc uncovered on a rack in the fridge for 1 hour so the surfaces dry.',
      'Press the oregano and chilli flakes onto both faces of the disc.',
      'Heat a cast iron pan or small skillet over high heat until it is genuinely hot — a drop of water should vanish instantly.',
      'Add the olive oil, then lay the cheese in. It should sizzle at once.',
      'Cook 3 to 4 minutes without moving it, until a dark crust has formed underneath. Lift an edge with a palette knife to check.',
      'Turn it carefully in one movement, using two spatulas.',
      'Cook 2 to 3 minutes more, until the second side crusts and the centre begins to bulge and wobble.',
      'Grind the black pepper over and take the pan straight to the table.',
      'Eat immediately, scooping it onto bread with chimichurri and a squeeze of lemon.'
    ],
    tips: [
      'Aged provolone only. The soft kind runs straight out of the pan.',
      'Dry the surfaces in the fridge first.',
      'Serve in the pan. Off the heat it sets within three or four minutes.'
    ],
    pair: ['Chimichurri and crusty bread', 'A Malbec', 'Grilled meat to follow'],
    store: 'Eat immediately. Uncooked provolone keeps 2 weeks wrapped in the fridge.',
    nut: [486, 38, 4, 32, 0, 2, 1240]
  },

  'milanesa': {
    d: 'A breaded beef cutlet topped with ham, tomato sauce and melted cheese — Buenos Aires by way of Milan, and eaten with chips.',
    meta: 'Milanesa napolitana — breaded beef cutlet topped with ham, tomato sauce and melted cheese.',
    kw: ['milanesa napolitana recipe', 'argentinian breaded steak', 'milanesa a caballo', 'beef cutlet with cheese'],
    why: 'The cutlet is fried first and topped after, then finished under the grill only long enough to melt the cheese — build it raw and the crumb goes soft under the sauce. Beating the beef to an even 5 mm means it cooks in the three minutes the crust takes to colour.',
    ing: [
      '4 beef topside or sirloin steaks, about 150 g each',
      '2 eggs, beaten with 2 crushed garlic cloves and 2 tbsp chopped parsley',
      '150 g fine dried breadcrumbs',
      '80 g plain flour',
      '1 1/2 tsp fine sea salt',
      '1/2 tsp black pepper',
      '200 ml neutral oil, for frying',
      '# For the topping',
      '300 ml tomato sauce, thick',
      '4 slices cooked ham',
      '200 g mozzarella, sliced',
      '1 tsp dried oregano',
      '# To serve',
      'Chips and lemon wedges'
    ],
    st: [
      'Beat each steak between cling film to an even 5 mm. Season both sides with the salt and pepper.',
      'Leave the steaks in the garlic and parsley egg for 30 minutes, or overnight in the fridge — this is the Argentinian step that seasons the meat itself.',
      'Set out flour and breadcrumbs in separate dishes.',
      'Lift a steak from the egg, dredge it in flour, back into the egg, then press it firmly into the breadcrumbs on both sides.',
      'Rest the coated cutlets on a rack for 15 minutes so the crumb bonds.',
      'Heat the oil in a wide pan to about 175C — it should be 5 mm deep.',
      'Fry each cutlet for 2 to 3 minutes a side until deep golden. Drain on a rack and salt lightly.',
      'Sit them on a baking tray. Spoon tomato sauce over each, lay a slice of ham on, then the mozzarella, and scatter with oregano.',
      'Grill under a hot grill for 3 to 4 minutes until the cheese is melted and blistered.',
      'Serve immediately with chips and lemon.'
    ],
    tips: [
      'Marinate in the garlic egg. It is what makes a milanesa taste Argentinian.',
      'Fry first, top after, grill briefly. Never bake it all together.',
      'Rest the coated cutlets 15 minutes before frying.'
    ],
    pair: ['Chips and a fried egg on top', 'A green salad', 'A Malbec'],
    store: 'Plain fried milanesas keep 3 days refrigerated and recrisp at 200C fan. Top to order.',
    nut: [812, 44, 48, 54, 3, 8, 1620]
  },

  'dulce-de-leche': {
    d: 'Milk and sugar cooked down slowly with a pinch of bicarbonate of soda until it caramelises to a thick, amber spread.',
    meta: 'Dulce de leche — milk and sugar cooked down slowly to a thick amber caramel spread.',
    kw: ['dulce de leche recipe', 'homemade caramel spread', 'milk caramel', 'argentinian dulce'],
    why: 'The bicarbonate of soda raises the pH, which speeds up the Maillard browning and gives the deep colour that sugar caramelisation alone would not — without it you get sweetened condensed milk, not dulce de leche. It has to be stirred more and more often as it thickens, because the sugar catches instantly once the water is gone.',
    ing: [
      '2 litres whole milk',
      '500 g caster sugar',
      '1/2 tsp bicarbonate of soda',
      '1 vanilla pod, split, or 2 tsp vanilla extract',
      '1/4 tsp fine sea salt'
    ],
    st: [
      'Put the milk, sugar, vanilla and salt in a wide, heavy pan — wide matters, because evaporation is the whole process.',
      'Warm gently, stirring, until the sugar has dissolved completely.',
      'Take the pan off the heat and stir in the bicarbonate of soda. It will foam up substantially, which is why the pan needs headroom.',
      'Return to a very low heat and simmer, uncovered, stirring every 10 minutes for the first hour.',
      'After an hour it will have reduced by about half and turned pale gold. Stir every 5 minutes now.',
      'After 90 minutes it will be noticeably thicker and amber. Stir constantly from here, scraping the base and corners.',
      'It is done at about 2 to 2 1/2 hours, when it coats the back of a spoon thickly and a line drawn through it on the spoon holds. It thickens a great deal more as it cools, so stop earlier than feels right.',
      'Strain into a clean jar to catch any bits that have caught, and remove the vanilla pod.',
      'Cool completely before using.'
    ],
    tips: [
      'A wide pan. A narrow one takes twice as long.',
      'Stop while it still looks slightly loose. It sets firm when cold.',
      'Constant stirring in the last half hour, or it will catch and taste burnt.'
    ],
    pair: ['Alfajores', 'Spread on toast', 'Stirred into coffee'],
    store: 'Refrigerate in a sealed jar for 4 weeks. It does not need to be frozen.',
    nut: [286, 6, 54, 6, 0, 54, 120]
  },

  'pastel-de-choclo': {
    d: 'A beef and chicken filling under a thick layer of ground fresh corn and basil, baked in earthenware and sprinkled with sugar so the top caramelises.',
    meta: 'Pastel de choclo — Chilean beef and chicken bake under a ground corn and basil topping.',
    kw: ['pastel de choclo recipe', 'chilean corn pie', 'corn and beef bake', 'pino filling'],
    why: 'The corn topping is cooked on the hob with milk and basil before it goes on, so it sets to a firm, sliceable layer rather than staying wet — raw ground corn spread over the filling will separate in the oven. The dusting of sugar on top is a Chilean habit that makes a lacquered, slightly bitter crust against the sweet corn.',
    ing: [
      '# For the pino filling',
      '600 g beef mince or finely chopped chuck',
      '3 onions, finely chopped',
      '3 tbsp oil',
      '1 tbsp ground cumin',
      '1 tbsp sweet paprika',
      '1 tsp dried oregano',
      '1 1/2 tsp fine sea salt',
      '150 ml beef stock',
      '2 tbsp plain flour',
      '# For the layers',
      '4 chicken thighs, cooked and shredded',
      '4 hard boiled eggs, sliced',
      '100 g black olives',
      '80 g raisins',
      '# For the corn topping',
      '1.2 kg sweetcorn kernels, fresh or frozen',
      '300 ml whole milk',
      '1 large handful of basil leaves',
      '50 g butter',
      '1 1/2 tsp fine sea salt',
      '# To finish',
      '4 tbsp caster sugar'
    ],
    st: [
      'Cook the onions in the oil over medium-low heat for 20 minutes until completely soft and sweet.',
      'Add the beef and brown it well, then the cumin, paprika, oregano and salt.',
      'Sprinkle over the flour, stir for 2 minutes, then add the stock and simmer 10 minutes to a thick, saucy mixture. Cool.',
      'For the topping, blend the corn with the milk and basil to a coarse purée — not completely smooth.',
      'Pour it into a wide pan with the butter and salt and cook over medium heat, stirring constantly, for 12 to 15 minutes until it thickens noticeably and pulls from the sides of the pan.',
      'Spread the pino filling in the base of a large earthenware dish or six individual ones.',
      'Lay the shredded chicken over it, then the egg slices, olives and raisins.',
      'Spoon the hot corn mixture over the top and smooth it flat, right to the edges.',
      'Sprinkle the sugar evenly over the surface.',
      'Bake at 200C fan for 30 to 35 minutes, until the top is set and browned in patches. Rest 10 minutes before serving.'
    ],
    tips: [
      'Cook the corn topping on the hob first. Raw corn separates in the oven.',
      'Twenty minutes on the onions for the pino. It is the base of the flavour.',
      'The sugar on top is not optional — it makes the crust.'
    ],
    pair: ['A tomato and onion salad', 'A Chilean Carmenère', 'Pebre on the side'],
    store: 'Refrigerate up to 3 days and reheat at 190C fan. It freezes 2 months, assembled and unbaked.',
    nut: [826, 34, 78, 42, 8, 24, 1420]
  },

  'completo': {
    d: 'A hot dog buried under diced tomato, mashed avocado and a mountain of mayonnaise. Chile\'s national street food, and eaten with both hands.',
    meta: 'Completo italiano — Chilean hot dog with diced tomato, mashed avocado and mayonnaise.',
    kw: ['completo italiano recipe', 'chilean hot dog', 'avocado hot dog', 'street food chile'],
    why: 'It is called italiano because the three toppings are the colours of the Italian flag, which means the proportions matter: equal, thick layers of each, not a scatter. Mashing the avocado with lemon and salt rather than slicing it is what lets it sit in a band without sliding off.',
    ing: [
      '4 large frankfurters or vienesas',
      '4 soft hot dog rolls',
      '# For the tomato',
      '3 ripe tomatoes, deseeded and finely diced',
      '1/2 tsp fine sea salt',
      '# For the avocado',
      '3 ripe avocados',
      'Juice of 1 lemon',
      '1/2 tsp fine sea salt',
      '2 tbsp olive oil',
      '# To finish',
      '200 g thick mayonnaise',
      'Sauerkraut, optional',
      'American mustard and ají chileno, optional'
    ],
    st: [
      'Dice the tomatoes small, salt them lightly, and leave them in a sieve for 10 minutes so they drain. Wet tomato ruins the roll.',
      'Mash the avocados with the lemon juice, salt and olive oil until smooth but not puréed. Press cling film onto the surface until needed.',
      'Warm the sausages in barely simmering water for 6 to 8 minutes. Do not boil them — the skins split.',
      'Steam or warm the rolls until soft. A completo roll should be soft, not toasted.',
      'Split each roll along the top, not the side, so it forms a channel.',
      'Sit a sausage in each and, if using, add a line of sauerkraut alongside it.',
      'Spoon a thick, even band of drained tomato down one side of the sausage.',
      'Add an equally thick band of mashed avocado down the other side.',
      'Finish with a heavy stripe of mayonnaise down the middle, from end to end.',
      'Eat immediately, leaning forward, with plenty of napkins.'
    ],
    tips: [
      'Drain the tomato. It is the difference between a completo and a soggy roll.',
      'Mash the avocado rather than slicing it, so it stays put.',
      'Equal bands of all three. That is what makes it an italiano.'
    ],
    pair: ['A cold Chilean lager', 'Ají chileno', 'Fanschop'],
    store: 'Assemble to order. The avocado and tomato keep a few hours only.',
    nut: [602, 62, 48, 18, 8, 8, 1620]
  },

  'coxinha': {
    d: 'Shredded chicken and cream cheese wrapped in a dough made from chicken stock and flour, shaped like a teardrop, crumbed and fried.',
    meta: 'Coxinha — Brazilian teardrop croquettes of shredded chicken and cream cheese in a stock dough, fried.',
    kw: ['coxinha recipe', 'brazilian chicken croquettes', 'coxinha de frango', 'brazilian snack'],
    why: 'The dough is made by cooking flour into hot chicken stock like a choux, which gelatinises the starch so it can be moulded warm without cracking — a cold dough will split every time you shape one. The teardrop shape is traditional because it imitates a chicken drumstick, which is what coxinha means.',
    ing: [
      '# For the filling',
      '500 g chicken breast or thigh',
      '1 litre chicken stock',
      '1 onion, finely chopped',
      '3 garlic cloves, minced',
      '2 tbsp olive oil',
      '2 tomatoes, chopped',
      '2 tbsp chopped parsley',
      '150 g cream cheese (requeijão)',
      '1 tsp fine sea salt',
      '# For the dough',
      '700 ml of the chicken cooking stock',
      '50 g butter',
      '450 g plain flour',
      '1 tsp fine sea salt',
      '# For coating and frying',
      '3 eggs, beaten',
      '300 g fine dried breadcrumbs',
      '1.5 litres neutral oil'
    ],
    st: [
      'Poach the chicken in the stock for 20 minutes, then lift it out and shred finely. Keep 700 ml of the stock.',
      'Cook the onion in the olive oil for 8 minutes, add the garlic for 1 minute, then the tomatoes and cook 8 minutes to a thick sofrito.',
      'Stir in the shredded chicken, parsley and salt, then take off the heat and fold through the cream cheese. Cool completely.',
      'For the dough, bring the 700 ml stock and the butter to a boil in a wide pan with the salt.',
      'Tip in all the flour at once and beat hard with a wooden spoon. It will come together into a ball within a minute.',
      'Keep cooking and beating for 4 minutes over low heat, until the dough is smooth and pulls cleanly from the pan.',
      'Turn out onto a worktop and knead it while warm, for 3 minutes, until completely smooth. Work in batches if it is too hot to handle.',
      'Take a golf ball of dough, flatten it into a disc in your palm, put a spoonful of cold filling in the middle and close the dough around it.',
      'Roll it into a ball, then pinch and pull one end into a point so it looks like a teardrop.',
      'Roll each in beaten egg, then breadcrumbs, and chill 30 minutes.',
      'Fry at 180C, six at a time, for 3 to 4 minutes until deep golden. Drain on a rack and eat warm.'
    ],
    tips: [
      'Shape the dough while it is warm. Cold dough cracks.',
      'Cold filling in warm dough, never the other way round.',
      'Chill the crumbed coxinhas before frying so they hold their shape.'
    ],
    pair: ['A cold Brazilian lager', 'Hot sauce', 'A caipirinha'],
    store: 'Freeze crumbed and uncooked for 2 months; fry from frozen at 170C for 6 minutes.',
    nut: [212, 10, 22, 9, 1, 1, 420]
  },

  'caipirinha': {
    d: 'Lime muddled with sugar in the glass, filled with cachaça and crushed ice, and stirred until the outside frosts. Brazil in three ingredients.',
    meta: 'Caipirinha — lime muddled with sugar, topped with cachaça and crushed ice and stirred until frosted.',
    kw: ['caipirinha recipe', 'brazilian cocktail', 'cachaca lime drink', 'classic caipirinha'],
    why: 'The lime is muddled with sugar rather than juiced, so the sugar crystals scrape oil out of the peel — that oil is most of the aroma. Muddling too hard crushes the white pith and turns the drink bitter, which is why the technique is a press and twist, not a pounding.',
    ing: [
      '1 lime, at room temperature',
      '2 tsp caster sugar, or to taste',
      '60 ml cachaça',
      'Crushed ice, to fill'
    ],
    st: [
      'Roll the lime firmly on the worktop under your palm to loosen the juice.',
      'Cut off both ends, stand it up, and cut it into quarters lengthways. Cut away the white core from each quarter — it is the bitter part.',
      'Put the lime pieces in a heavy tumbler and add the sugar.',
      'Muddle with a press and a twist, six or seven times, just until the sugar dissolves in the juice and the peels have released their oil. Do not pound it.',
      'Fill the glass to the top with crushed ice.',
      'Pour the cachaça over.',
      'Stir hard with a bar spoon for 15 seconds, lifting from the bottom, until the outside of the glass frosts.',
      'Top with a little more crushed ice and serve with a short straw.'
    ],
    tips: [
      'Cut out the white core. It is where the bitterness lives.',
      'Press and twist, do not pound. Six or seven presses is enough.',
      'Crushed ice, not cubes. It dilutes at the right speed for this drink.'
    ],
    pair: ['Coxinha or pão de queijo', 'Grilled meat', 'Salted cashews'],
    store: 'Make to order. Nothing about a caipirinha keeps.',
    nut: [186, 0, 14, 0, 1, 12, 4]
  }
};
