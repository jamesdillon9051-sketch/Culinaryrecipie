'use strict';

/**
 * Volume fifty-nine, fourth part: the last pizza and breads, pasta and risotto,
 * baked pasta, cakes and cold desserts, Italian drinks and the first German
 * dish. Waits of an hour or more are declared as rest. Nutrition is estimated
 * by npm run calc.
 */

module.exports = {
  'pizza-quattro-formaggi': {
    d: 'A white pizza with mozzarella, Gorgonzola, Fontina and Parmesan on a dough risen for 2 hours, baked for 8 minutes.',
    meta: 'Pizza quattro formaggi, white pizza with four Italian cheeses, baked for 8 minutes at 250C. Two servings, ready in 28 minutes plus rising.',
    kw: ['pizza quattro formaggi', 'four cheese pizza', 'italian four cheese pizza', 'pizza bianca with gorgonzola', 'quattro formaggi pizza recipe'],
    why: 'A table of two, a hot oven and four cheeses: Sunday supper does not need more. Pizza quattro formaggi is a white pizza, with no tomato sauce, so the cheeses are the only flavour and each has to earn its place.\n\nChoose cheeses that melt in different ways: mozzarella for stretch, Fontina for creaminess, Gorgonzola for sharpness and Parmesan for salt. **Use less Gorgonzola than you think**, because a few crumbs flavour the whole pizza and a lot of it overpowers the rest. Tear or grate each cheese small and scatter them evenly, leaving the rim bare.\n\nA light brush of olive oil over the dough stops it drying out under a white topping. Bake on a hot tray at 250C for 8 minutes, until the cheeses have bubbled and spotted brown. Take it out the moment the rim is blistered. A drizzle of honey and a few walnuts on top are good with the blue cheese, and black pepper completes it.',
    ing: [
      '200 g strong bread flour',
      '130 ml lukewarm water',
      '1 tsp salt',
      '2 g instant yeast',
      '1 tbsp olive oil',
      '100 g mozzarella, torn',
      '60 g Fontina, grated',
      '40 g Gorgonzola, crumbled',
      '20 g grated Parmesan',
      '1/4 tsp black pepper'
    ],
    st: [
      'Mix the flour, water, salt and yeast and knead for 8 minutes until smooth. Cover and leave for 2 hours until doubled.',
      'Heat the oven with a baking tray inside to 250C.',
      'Stretch the dough to 28 cm and brush with the oil.',
      'Scatter the mozzarella, Fontina, Gorgonzola and Parmesan evenly, leaving the rim bare.',
      'Bake for 8 minutes until bubbling and spotted brown. Season with the pepper.'
    ],
    tips: [
      'Go easy on the Gorgonzola.',
      'Leave the rim clear of cheese.',
      'Take the pizza out as soon as the rim blisters.'
    ],
    pair: ['Rocket salad', 'Dry white wine', 'Honey and walnuts'],
    store: 'Best fresh.',
    rest: [120, 'Rising'],
    nut: [699, 36, 51, 39, 3, 6, 2640]
  },

  'focaccia-di-recco': {
    d: 'A paper thin Ligurian flatbread stuffed with soft stracchino cheese and baked for 20 minutes until crisp and blistered.',
    meta: 'Focaccia di Recco, paper thin Ligurian flatbread filled with soft cheese, baked for 20 minutes. Six servings, ready in 1 hour.',
    kw: ['focaccia di recco', 'recco cheese focaccia', 'ligurian cheese flatbread', 'stracchino focaccia', 'focaccia di recco recipe'],
    why: 'Roll it thinner than you think is sensible. That is the whole skill in focaccia di Recco, a Ligurian flatbread made of two almost transparent sheets of dough with soft cheese between them, and the thinness is what makes it crisp.\n\nThe dough has only flour, water, oil and salt, and no yeast. Knead it well, so it is smooth and stretchy, and rest it for 30 minutes under a bowl. **Stretch each half over the back of your hands** until you can see through it, then lay it over an oiled tray so it hangs over the edge. Dot with spoonfuls of stracchino, leaving gaps, and cover with the second sheet.\n\nPress the edges together, trim the overhang with a rolling pin pressed over the rim, and pinch a few holes in the top so steam can escape. Brush with oil, sprinkle with salt and bake at 250C for 20 minutes, until blistered and gold in patches. Serve at once, cut in wedges, while the cheese still runs.',
    ing: [
      '300 g plain flour',
      '140 ml lukewarm water',
      '4 tbsp olive oil',
      '1 tsp salt',
      '300 g stracchino or other soft cheese',
      '1 tsp flaky salt'
    ],
    st: [
      'Mix the flour, water, 2 tablespoons of the oil and the salt and knead for 8 minutes until smooth. Divide in two and rest for 30 minutes.',
      'Heat the oven to 250C. Oil a 30 cm round tin.',
      'Stretch one piece of dough very thin and lay it in the tin, letting it hang over the edge. Dot with the cheese.',
      'Stretch the second piece very thin and lay it over the top. Press the edges, roll a rolling pin over the rim to trim, and pinch holes in the top.',
      'Brush with the remaining oil, sprinkle with the flaky salt and bake for 20 minutes until blistered and golden.'
    ],
    tips: [
      'Stretch the dough until you can see through it.',
      'Pinch holes so steam can escape.',
      'Serve at once, while the cheese is runny.'
    ],
    pair: ['Dry white wine', 'Cured ham', 'Green salad'],
    store: 'Best fresh.',
    nut: [410, 14, 39, 22, 2, 1, 1040]
  },

  'focaccia-pugliese': {
    d: 'A thick, soft focaccia topped with cherry tomatoes, olives and oregano, risen for 90 minutes and baked for 30 minutes.',
    meta: 'Focaccia pugliese, thick soft focaccia with cherry tomatoes, olives and oregano, baked for 30 minutes. Eight servings, ready in 55 minutes plus rising.',
    kw: ['focaccia pugliese', 'puglia focaccia', 'tomato and olive focaccia', 'thick italian focaccia', 'focaccia pugliese recipe'],
    why: 'Oil is the secret. Focaccia pugliese is a thick, soft bread baked in a pool of olive oil, and the oil is not decoration: it fries the base to a golden crunch while the top stays tender.\n\nThe dough is wet and sticky, so mix it with a spoon and do not add flour. **Be generous with the oil in the tin**, at least 4 tablespoons, and oil your hands to stop the dough sticking. Press it out gently and leave it for 90 minutes, until puffy and doubled. When it is ready, it jiggles like a jelly when you shake the tin.\n\nDimple the surface with your fingertips right to the bottom, press in halved cherry tomatoes and olives, and sprinkle with oregano and flaky salt. Bake at 220C for 30 minutes until deep golden. Slide it onto a rack to cool, so the base does not steam and go soft. It is eaten warm, or the next day, split and filled.',
    ing: [
      '500 g strong bread flour',
      '400 ml lukewarm water',
      '7 g instant yeast',
      '10 g salt',
      '6 tbsp olive oil',
      '250 g cherry tomatoes, halved',
      '60 g black olives',
      '2 tsp dried oregano',
      '1 tsp flaky salt'
    ],
    st: [
      'Stir the flour, water, yeast and salt with a spoon to a sticky dough, with 2 tablespoons of the oil.',
      'Pour 3 tablespoons of the oil into a 30 x 40 cm tin. Tip the dough in, turn it to coat and press out with oiled fingers.',
      'Cover and leave to rise for 90 minutes until puffy.',
      'Heat the oven to 220C. Dimple the dough, press in the tomatoes and olives and scatter with the oregano and flaky salt. Drizzle with the remaining oil.',
      'Bake for 30 minutes until deep golden. Cool on a rack.'
    ],
    tips: [
      'Use plenty of oil in the tin.',
      'Do not add flour to the sticky dough.',
      'Cool on a rack so the base stays crisp.'
    ],
    pair: ['Mozzarella', 'Cured ham', 'Green salad'],
    store: 'Keeps for 2 days wrapped. Freeze for 2 months.',
    rest: [90, 'Rising'],
    nut: [273, 6, 33, 13, 3, 4, 1210]
  },

  'bruschetta-al-pomodoro': {
    d: 'Slices of grilled bread rubbed with garlic and topped with chopped tomatoes, basil and olive oil, ready in 15 minutes.',
    meta: 'Bruschetta al pomodoro, grilled bread rubbed with garlic and topped with tomatoes and basil, cooked for 5 minutes. Four servings, ready in 15 minutes.',
    kw: ['bruschetta al pomodoro', 'tomato bruschetta', 'italian tomato bruschetta', 'bruschetta with basil and garlic', 'classic bruschetta recipe'],
    why: 'Most home bruschetta goes soggy before it reaches the table, and the fix is to keep the tomatoes and the bread apart until the last minute. Bruschetta al pomodoro is grilled bread rubbed with garlic and topped with ripe tomatoes, basil and good olive oil, and the bread has to stay crisp.\n\nChop the tomatoes and salt them in a sieve for 10 minutes so the excess water drains away. **Spoon the tomato on only at the table**, once the bread is on the plate. Toast thick slices of country bread over a grill or in a hot pan until they are marked and crisp, then rub one side with a cut clove of garlic. The rough crust grates the garlic into the bread.\n\nStir the drained tomatoes with torn basil, a little salt and a generous pour of olive oil, and spoon them onto the bread. Serve at once. Tomatoes at room temperature taste far sweeter than cold ones, so keep them out of the fridge.',
    ing: [
      '500 g ripe tomatoes, chopped',
      '8 slices country bread, 2 cm thick',
      '2 garlic cloves, halved',
      '8 g basil leaves, torn',
      '4 tbsp extra virgin olive oil',
      '1/2 tsp salt',
      '1/4 tsp black pepper'
    ],
    st: [
      'Put the tomatoes in a sieve with half the salt and leave for 10 minutes to drain.',
      'Grill the bread for 2 minutes on each side until crisp and marked.',
      'Rub one side of each slice with the cut garlic.',
      'Stir the tomatoes with the basil, remaining salt, pepper and 3 tablespoons of the oil.',
      'Spoon onto the bread, drizzle with the last of the oil and serve at once.'
    ],
    tips: [
      'Drain the tomatoes before topping.',
      'Add the topping at the last moment.',
      'Never keep the tomatoes in the fridge.'
    ],
    pair: ['Dry white wine', 'Prosecco', 'Olives'],
    store: 'Best fresh. The tomato mixture keeps for 1 hour.',
    nut: [312, 7, 35, 16, 3, 6, 600]
  },

  'carciofi-ripieni': {
    d: 'Whole artichokes stuffed with breadcrumbs, garlic, parsley and Parmesan and braised in olive oil and wine for 45 minutes.',
    meta: 'Carciofi ripieni, artichokes stuffed with breadcrumbs, garlic and Parmesan, cooked for 45 minutes. Four servings, ready in 1 hour 10 minutes.',
    kw: ['carciofi ripieni', 'italian stuffed artichokes', 'artichokes stuffed with breadcrumbs', 'braised stuffed artichokes', 'carciofi ripieni recipe'],
    why: 'Most stuffed artichokes are tough and stringy, and the fix is to trim them harder than feels right. Carciofi ripieni are whole artichokes filled with a breadcrumb stuffing and braised until tender, and the work is in the preparation, not the cooking.\n\nPull off the tough outer leaves, cut off the top third of each artichoke and trim the stalk. Rub every cut surface with lemon straight away, since artichokes turn brown within minutes. **Open the leaves and scoop out the choke**, the hairy centre, with a teaspoon. Mix the breadcrumbs with garlic, parsley, grated Parmesan and olive oil and press it between the leaves and into the centre.\n\nStand the artichokes snugly in a pan with the stalks pointing up and add white wine, water and oil to come a third of the way up. Cover and braise gently for 45 minutes. A knife should slide into the base easily. Eat by pulling off the leaves, one at a time, scraping the soft flesh with your teeth.',
    ing: [
      '1.2 kg globe artichokes',
      '1 lemon, halved',
      '100 g dry breadcrumbs',
      '3 garlic cloves, crushed',
      '4 tbsp chopped parsley',
      '50 g grated Parmesan',
      '5 tbsp olive oil',
      '150 ml dry white wine',
      '150 ml water',
      '1/2 tsp salt'
    ],
    st: [
      'Trim the artichokes: pull off the tough outer leaves, cut off the top third and trim the stalks. Rub with the lemon. Scoop out the chokes.',
      'Mix the breadcrumbs, garlic, parsley, Parmesan, 2 tablespoons of the oil and the salt.',
      'Press the stuffing between the leaves and into the centres.',
      'Stand the artichokes snugly in a pan, pour in the wine, water and the rest of the oil.',
      'Cover and cook gently for 45 minutes, until the base is tender when pierced.'
    ],
    tips: [
      'Rub the cut surfaces with lemon at once.',
      'Scoop out the hairy choke.',
      'Pack the pan snugly so they stay upright.'
    ],
    pair: ['Crusty bread', 'Dry white wine', 'Lemon wedges'],
    store: 'Keeps for 2 days in the fridge. Serve warm or at room temperature.',
    nut: [486, 18, 54, 22, 18, 5, 940]
  },

  'lasagne-bianche': {
    d: 'White lasagne layered with béchamel, Parmesan, ham and mushrooms and baked for 45 minutes at 190C.',
    meta: 'Lasagne bianche, white lasagne with béchamel, ham, mushrooms and Parmesan, baked for 45 minutes. Six servings, ready in 1 hour 15 minutes.',
    kw: ['lasagne bianche', 'white lasagne', 'lasagne with bechamel and ham', 'lasagne without tomato', 'ham and mushroom lasagne'],
    why: 'Does lasagne need tomato? Not when the béchamel does the work. Lasagne bianche, white lasagne, replaces the meat ragù with a creamy sauce, ham and mushrooms, and the dish is lighter in colour and in flavour.\n\nThe béchamel is the heart of it, so make it with care: melt the butter, stir in the flour for a minute, then add warm milk a little at a time, whisking, and simmer for 8 minutes with nutmeg. **Keep it slightly looser than you think it should be**, because the pasta sheets absorb liquid as they bake. Fry the mushrooms in a dry pan until they have given up their water, then add the ham.\n\nLayer sauce, pasta, mushrooms and ham, and Parmesan, ending with sauce and cheese. Use dried sheets that need no pre-cooking, and make sure each is covered with sauce, as bare edges bake hard. Bake at 190C for 45 minutes, until bubbling and golden, and rest for 10 minutes before cutting.',
    ing: [
      '250 g dried lasagne sheets',
      '80 g butter',
      '80 g plain flour',
      '1 litre whole milk',
      '1/4 tsp ground nutmeg',
      '1 tsp salt',
      '400 g mushrooms, sliced',
      '200 g cooked ham, diced',
      '100 g grated Parmesan',
      '1 tbsp olive oil'
    ],
    st: [
      'Heat the oven to 190C. Melt the butter, stir in the flour for 1 minute, then whisk in the milk a little at a time. Simmer for 8 minutes with the nutmeg and salt.',
      'Fry the mushrooms in the oil in a dry wide pan for 8 minutes. Add the ham.',
      'Spread a layer of sauce in a baking dish. Add a layer of pasta, then mushrooms and ham, sauce and Parmesan. Repeat to make 4 layers.',
      'Finish with sauce and the remaining Parmesan and bake for 45 minutes until golden and bubbling.',
      'Rest for 10 minutes before cutting.'
    ],
    tips: [
      'Keep the béchamel slightly loose.',
      'Cover the pasta sheets completely with sauce.',
      'Rest the lasagne before cutting.'
    ],
    pair: ['Green salad', 'Dry white wine', 'Garlic bread'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [550, 27, 52, 26, 2, 11, 1120]
  },

  'cannelloni-ricotta-e-spinaci': {
    d: 'Pasta tubes filled with ricotta and spinach, covered in tomato sauce and béchamel and baked for 40 minutes.',
    meta: 'Cannelloni ricotta e spinaci, pasta tubes filled with ricotta and spinach in tomato sauce, baked for 40 minutes. Six servings, ready in 1 hour 10 minutes.',
    kw: ['cannelloni ricotta e spinaci', 'spinach and ricotta cannelloni', 'baked cannelloni', 'cannelloni in tomato sauce', 'ricotta stuffed cannelloni'],
    why: 'Pipe the filling, do not spoon it. That is the quickest way to fill cannelloni without snapping the tubes. Cannelloni ricotta e spinaci is a baked pasta dish of dried tubes stuffed with ricotta and spinach, and it can be assembled a day before.\n\nWilt the spinach, squeeze it hard and chop it. Mix with ricotta, Parmesan, egg and nutmeg. **Spoon the filling into a freezer bag, snip off a corner and pipe it into the tubes**, which is cleaner and faster. Do not pre-cook the tubes, since they soften in the sauce while they bake.\n\nSpread a layer of tomato sauce in the dish, lay the filled tubes in a single layer, and cover them with more sauce and a thin béchamel or a layer of mozzarella. Every tube must be covered, or it bakes hard. Cover with foil and bake at 190C for 30 minutes, then uncover for 10 minutes more to brown. Rest for 10 minutes before serving.',
    ing: [
      '250 g dried cannelloni tubes',
      '500 g baby spinach',
      '500 g ricotta',
      '60 g grated Parmesan',
      '1 egg',
      '1/4 tsp ground nutmeg',
      '1 tsp salt',
      '700 g tomato passata',
      '150 g mozzarella, grated',
      '1 tbsp olive oil'
    ],
    st: [
      'Heat the oven to 190C. Wilt the spinach in a covered pan for 3 minutes. Cool, squeeze dry and chop.',
      'Mix the spinach with the ricotta, Parmesan, egg, nutmeg and salt. Spoon into a bag and snip a corner.',
      'Spread a third of the passata in a baking dish and brush with the oil. Pipe the filling into the tubes and lay them in the dish.',
      'Cover with the remaining passata, making sure no tube is bare, and scatter with the mozzarella.',
      'Cover with foil and bake for 30 minutes. Uncover and bake for 10 minutes more. Rest for 10 minutes.'
    ],
    tips: [
      'Pipe the filling in with a bag.',
      'Cover every tube with sauce.',
      'Rest the dish before serving.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Red wine'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [504, 29, 43, 24, 5, 7, 960]
  },

  'conchiglioni-ripieni': {
    d: 'Large pasta shells filled with ricotta, mozzarella and herbs and baked in tomato sauce for 40 minutes.',
    meta: 'Conchiglioni ripieni, large pasta shells stuffed with ricotta and mozzarella, baked for 40 minutes. Six servings, ready in 1 hour 5 minutes.',
    kw: ['conchiglioni ripieni', 'stuffed pasta shells', 'ricotta stuffed pasta shells', 'baked jumbo shells', 'conchiglioni ripieni recipe'],
    why: 'Conchiglioni means big shells, and the name is also the method: each large shell is a little bowl waiting for a filling. They are boiled until nearly done, filled, packed into a dish with tomato sauce and baked.\n\nBoil the shells for 2 minutes less than the packet says, and lay them upside down on a tray to drain. Some will tear, so cook extra. The filling is ricotta, mozzarella, Parmesan, parsley and an egg, seasoned well with salt and pepper, as ricotta is mild. **Fill each shell generously but do not pack it**, since the filling swells slightly in the oven.\n\nSpread tomato sauce over the base of a baking dish, set the shells in snugly, open side up, and spoon more sauce around and over them. Cover with foil and bake at 190C for 30 minutes, then uncover and bake for 10 minutes more, until bubbling. Rest for 5 minutes so the sauce settles before serving.',
    ing: [
      '250 g jumbo pasta shells',
      '500 g ricotta',
      '150 g mozzarella, grated',
      '50 g grated Parmesan',
      '1 egg',
      '3 tbsp chopped parsley',
      '1/2 tsp salt',
      '1/2 tsp black pepper',
      '700 g tomato passata'
    ],
    st: [
      'Heat the oven to 190C. Boil the shells in salted water for 2 minutes less than the packet says. Drain and lay out to cool.',
      'Mix the ricotta, half the mozzarella, the Parmesan, egg, parsley, salt and pepper.',
      'Spread a third of the passata in a baking dish. Fill each shell with the mixture and set it in the dish.',
      'Spoon over the remaining passata, scatter with the remaining mozzarella and cover with foil.',
      'Bake for 30 minutes, uncover and bake for 10 minutes more. Rest for 5 minutes.'
    ],
    tips: [
      'Boil a few extra shells in case some tear.',
      'Do not pack the filling too tightly.',
      'Cover with foil for the first 30 minutes.'
    ],
    pair: ['Green salad', 'Garlic bread', 'Red wine'],
    store: 'Keeps for 3 days in the fridge. Freeze for 2 months.',
    nut: [444, 26, 40, 20, 3, 7, 670]
  },

  'spaghetti-al-limone': {
    d: 'Spaghetti in a sharp, creamy sauce of lemon juice and zest, butter and Parmesan, ready in 20 minutes.',
    meta: 'Spaghetti al limone, spaghetti in a sharp creamy lemon, butter and Parmesan sauce, cooked for 15 minutes. Four servings, ready in 20 minutes.',
    kw: ['spaghetti al limone', 'lemon spaghetti', 'italian lemon pasta', 'spaghetti with lemon and parmesan', 'creamy lemon pasta without cream'],
    why: 'Why does a lemon sauce split? Because the juice meets hot cream or butter too fast. Spaghetti al limone is a sauce of lemon and Parmesan with no cream at all, and it stays smooth because it is built in the right order.\n\nGrate the zest first, then squeeze the juice. Melt the butter in a wide pan with the zest, add a ladle of starchy pasta water and let it bubble. **Add the lemon juice and the cheese off the heat**, a little at a time, tossing, so the starch and fat blend into a cream instead of separating. The more you toss, the glossier it gets.\n\nBoil the spaghetti until a minute short of done and finish it in the pan with the sauce for a minute, adding water if it tightens. Finish with black pepper and extra Parmesan. Taste for sharpness: a little more juice if it is flat, a little more butter if it is too acidic. Serve at once.',
    ing: [
      '400 g spaghetti',
      '60 g butter',
      '2 lemons, zest and 4 tbsp juice',
      '80 g grated Parmesan',
      '1/2 tsp black pepper',
      '1 tsp salt'
    ],
    st: [
      'Boil the spaghetti in salted water until 1 minute short of done. Keep 250 ml of the water.',
      'Melt the butter in a wide pan with the lemon zest, add 100 ml of the pasta water and bubble for 1 minute.',
      'Add the spaghetti and toss for 1 minute.',
      'Take off the heat and add the lemon juice and most of the Parmesan, tossing, with more water until creamy.',
      'Serve with the pepper and the remaining Parmesan.'
    ],
    tips: [
      'Add the juice and cheese off the heat.',
      'Toss constantly so the sauce turns creamy.',
      'Use pasta water to loosen the sauce.'
    ],
    pair: ['Green salad', 'Dry white wine', 'Grilled prawns'],
    store: 'Best fresh.',
    nut: [576, 21, 78, 20, 4, 4, 900]
  },

  'tagliolini-al-tartufo': {
    d: 'Fresh egg tagliolini tossed in butter and Parmesan with shaved black truffle, rolled and cut by hand in 35 minutes.',
    meta: 'Tagliolini al tartufo, fresh egg tagliolini in butter and Parmesan with shaved black truffle, cooked for 3 minutes. Four servings, ready in 53 minutes.',
    kw: ['tagliolini al tartufo', 'truffle tagliolini', 'tagliolini with black truffle and butter', 'fresh egg pasta with truffle', 'italian truffle pasta'],
    why: 'A dinner for four on a night that matters, and one where a few shavings of truffle do more than a long list of ingredients. Tagliolini al tartufo is thin egg pasta with butter, Parmesan and black truffle, and almost nothing else.\n\nMake the dough from flour and whole eggs, kneaded for 8 minutes until it feels like silk. Rest it for 20 minutes, roll it thin and cut it into ribbons 2 mm wide. **Cook the pasta for no more than 3 minutes**, because fresh tagliolini are done as soon as they float. Drain, keeping a cup of the water.\n\nMelt the butter in a wide pan, add the pasta and a splash of the water and toss until the sauce is glossy. Plate it, scatter with the Parmesan, and shave the truffle over the top at the table, because its scent fades with heat. If you cannot find fresh truffle, a spoonful of truffle butter stirred into the sauce gives some of the flavour.',
    ing: [
      '300 g plain flour',
      '3 eggs',
      '1 tsp salt',
      '80 g butter',
      '40 g grated Parmesan',
      '20 g fresh black truffle, shaved'
    ],
    st: [
      'Mix the flour, eggs and salt to a dough and knead for 8 minutes. Wrap and rest for 20 minutes.',
      'Roll the dough thin, fold the sheet loosely and cut into 2 mm ribbons. Toss with flour into nests.',
      'Boil the tagliolini in a large pan of salted water for 3 minutes. Keep a cup of the water.',
      'Melt the butter in a wide pan, add the pasta and a splash of the water and toss for 1 minute.',
      'Plate, scatter with the Parmesan and shave the truffle over the top.'
    ],
    tips: [
      'Cook fresh pasta for 3 minutes at most.',
      'Shave the truffle at the table.',
      'Use pasta water to make the sauce glossy.'
    ],
    pair: ['Dry white wine', 'Green salad', 'Roast veal'],
    store: 'Best fresh. Uncooked nests freeze for 1 month.',
    nut: [503, 16, 58, 23, 2, 1, 790]
  },

  'penne-al-gorgonzola': {
    d: 'Penne in a quick sauce of Gorgonzola melted into cream with walnuts, ready in 20 minutes.',
    meta: 'Penne al gorgonzola, penne in a quick Gorgonzola cream sauce with walnuts, cooked for 15 minutes. Four servings, ready in 20 minutes.',
    kw: ['penne al gorgonzola', 'gorgonzola pasta', 'penne with gorgonzola cream sauce', 'blue cheese pasta with walnuts', 'creamy gorgonzola penne'],
    why: 'This is what to cook on the first cold evening, when you want something rich in a hurry. Penne al gorgonzola is a quick pasta where a blue cheese melts into cream, and the sauce takes less time than the pasta.\n\nUse the soft, creamy kind of Gorgonzola, called dolce, which melts evenly, and crumble it into the pan over a low heat. **Do not let the cream boil**, because boiling splits it and leaves an oily slick. Stir until the cheese has gone, which takes about 3 minutes, and add a splash of pasta water to loosen it.\n\nBoil the penne until just tender, drain it and toss it in the sauce. Scatter with toasted walnuts for crunch, which also cuts the richness, and finish with black pepper. A handful of rocket or a few fresh pear slices on the side make a sharp contrast. Serve at once, as the sauce thickens fast.',
    ing: [
      '400 g penne',
      '200 g Gorgonzola dolce, crumbled',
      '200 ml double cream',
      '1 tbsp butter',
      '40 g walnuts, toasted and chopped',
      '1/2 tsp black pepper'
    ],
    st: [
      'Boil the penne in salted water until just tender. Keep 100 ml of the water, then drain.',
      'Melt the butter and cream in a wide pan over low heat. Add the Gorgonzola and stir for 3 minutes until melted.',
      'Toss in the penne with a splash of the water for 1 minute.',
      'Scatter with the walnuts and pepper and serve at once.'
    ],
    tips: [
      'Keep the cream below a boil.',
      'Use the soft dolce Gorgonzola.',
      'Toast the walnuts for crunch.'
    ],
    pair: ['Rocket salad', 'Sliced pear', 'Dry white wine'],
    store: 'Best fresh.',
    nut: [807, 26, 79, 43, 4, 5, 720]
  },

  'rigatoni-allamatriciana': {
    d: 'Rigatoni in a sauce of crisp guanciale, tomato, chilli and pecorino, ready in 35 minutes.',
    meta: 'Rigatoni all\'amatriciana, rigatoni with guanciale, tomato, chilli and pecorino, cooked for 25 minutes. Four servings, ready in 35 minutes.',
    kw: ['rigatoni all amatriciana', 'amatriciana sauce', 'pasta with guanciale and tomato', 'amatriciana rigatoni', 'rigatoni amatriciana recipe'],
    why: 'Most home versions come out greasy or flat, and the fix is to render the pork slowly and use the right tomatoes. Rigatoni all\'amatriciana takes its name from the town of Amatrice, and it is a sauce of cured pork cheek, tomato, chilli and pecorino that needs patience at the start.\n\nCut the guanciale into strips and fry it in a dry pan over a low heat for 10 minutes, until the fat runs clear and the meat is crisp at the edges. **Lift out the meat and keep the fat**, then add a splash of white wine and the tomatoes to the pan. Simmer for 12 minutes until the sauce is thick and glossy. Add the chilli to taste.\n\nBoil the rigatoni until a minute short of done and finish it in the sauce with a little of the water. Return the guanciale, add the pecorino and toss. Pancetta is the nearest substitute if you cannot find guanciale, but use less of it, as it is leaner.',
    ing: [
      '400 g rigatoni',
      '150 g guanciale, cut in strips',
      '60 ml dry white wine',
      '400 g tinned whole tomatoes, crushed',
      '1/2 tsp chilli flakes',
      '60 g grated pecorino',
      '1/2 tsp black pepper'
    ],
    st: [
      'Fry the guanciale in a dry wide pan over low heat for 10 minutes until crisp. Lift out and keep.',
      'Add the wine and boil for 1 minute, then add the tomatoes and chilli.',
      'Simmer for 12 minutes until thick.',
      'Boil the rigatoni in salted water until 1 minute short of done. Keep 100 ml of the water, then drain.',
      'Toss the rigatoni in the sauce with the water, guanciale and half the pecorino. Serve with the rest and the pepper.'
    ],
    tips: [
      'Render the guanciale slowly for crisp meat.',
      'Use good tinned tomatoes.',
      'Add pecorino off the heat.'
    ],
    pair: ['Green salad', 'Red wine', 'Crusty bread'],
    store: 'Keeps for 2 days in the fridge. Reheat with a splash of water.',
    nut: [696, 22, 80, 32, 5, 6, 920]
  },

  'risotto-allo-zafferano': {
    d: 'Creamy risotto coloured and scented with saffron, finished with butter and Parmesan, in 40 minutes.',
    meta: 'Risotto allo zafferano, creamy saffron risotto with butter and Parmesan, cooked for 30 minutes. Four servings, ready in 40 minutes.',
    kw: ['risotto allo zafferano', 'saffron risotto', 'risotto alla milanese', 'creamy saffron rice', 'saffron risotto with parmesan'],
    why: 'Risotto allo zafferano is a golden rice, and the colour is the first thing to go right. A pinch of saffron threads, steeped in a little warm stock, gives a yellow that spreads through the whole pan, and a flavour that is faintly honeyed.\n\nSteep the saffron in 100 ml of hot stock for 10 minutes before you start. Soften the onion in butter, toast the rice for 2 minutes, add the wine, then add the stock a ladle at a time, stirring. **Add the saffron stock for the last 5 minutes**, so the aroma stays strong and does not cook away. The rice takes about 18 minutes in all, and is done when it is creamy but still has a core of bite.\n\nTake the pan off the heat, beat in cold butter and the Parmesan and cover for 2 minutes. The texture should be loose enough to spread slowly across a plate. It is served on its own, or with braised veal shank, and a spoonful of marrow on top is the classic Milanese finish.',
    ing: [
      '320 g arborio rice',
      '1.2 litres chicken or vegetable stock, hot',
      '0.3 g saffron threads',
      '60 g butter',
      '1 onion, finely chopped',
      '100 ml dry white wine',
      '60 g grated Parmesan',
      '1/2 tsp salt'
    ],
    st: [
      'Steep the saffron in 100 ml of the hot stock for 10 minutes.',
      'Melt half the butter and soften the onion for 5 minutes. Add the rice and stir for 2 minutes.',
      'Add the wine and stir until absorbed. Add the stock a ladle at a time, stirring, for 18 minutes, adding the saffron stock for the last 5 minutes.',
      'Off the heat, beat in the remaining butter and the Parmesan. Cover and rest for 2 minutes.',
      'Taste for salt and serve at once.'
    ],
    tips: [
      'Steep the saffron before you begin.',
      'Add the saffron late to keep its scent.',
      'Beat in cold butter off the heat.'
    ],
    pair: ['Braised veal', 'Dry white wine', 'Green salad'],
    store: 'Best fresh. Leftovers can be fried into rice cakes.',
    nut: [498, 15, 69, 18, 2, 1, 1520]
  },

  'uova-in-purgatorio': {
    d: 'Eggs poached in a spicy tomato sauce with garlic and chilli, served with bread, ready in 25 minutes.',
    meta: 'Uova in purgatorio, eggs poached in a spicy tomato and chilli sauce, cooked for 15 minutes. Four servings, ready in 25 minutes.',
    kw: ['uova in purgatorio', 'eggs in purgatory', 'italian eggs in spicy tomato sauce', 'poached eggs in tomato sauce', 'eggs in purgatory recipe'],
    why: 'This is what to make on a cold morning, or a night when the fridge holds eggs and a tin of tomatoes. Uova in purgatorio, eggs in purgatory, is a pan of spicy tomato sauce with eggs set into it, and the name refers to the eggs sitting in the red, hot sauce.\n\nStart the sauce well: soften garlic and chilli in olive oil, add the tomatoes and simmer for 8 minutes until thick, since a thin sauce spreads and the eggs slide about. **Make wells in the sauce with the back of a spoon** and crack an egg into each one. Cover the pan so the tops cook in steam.\n\nThe eggs are done in 4 to 6 minutes. The whites should be set and the yolks still soft. If you like firm yolks, leave them 2 minutes longer. Scatter with parsley and Parmesan and serve straight from the pan with plenty of bread to mop up the sauce. A little more chilli goes well if you like the heat.',
    ing: [
      '3 tbsp olive oil',
      '3 garlic cloves, sliced',
      '1 tsp chilli flakes',
      '800 g tinned chopped tomatoes',
      '1/2 tsp salt',
      '8 eggs',
      '3 tbsp chopped parsley',
      '30 g grated Parmesan',
      '8 slices crusty bread'
    ],
    st: [
      'Warm the oil with the garlic and chilli in a wide pan over low heat for 2 minutes.',
      'Add the tomatoes and salt and simmer for 8 minutes until thick.',
      'Make 8 wells in the sauce with a spoon and crack an egg into each.',
      'Cover and cook for 5 minutes until the whites are set and the yolks are soft.',
      'Scatter with the parsley and Parmesan and serve with the bread.'
    ],
    tips: [
      'Thicken the sauce first so the eggs hold.',
      'Cover the pan to set the whites.',
      'Add more chilli to taste.'
    ],
    pair: ['Crusty bread', 'Green salad', 'Cured sausage'],
    store: 'Best fresh. The sauce keeps for 3 days without the eggs.',
    nut: [464, 23, 39, 24, 4, 9, 840]
  },

  'torta-di-carote': {
    d: 'A moist Italian carrot cake with ground almonds and lemon zest, baked for 45 minutes at 180C and dusted with icing sugar.',
    meta: 'Torta di carote, moist Italian carrot and almond cake with lemon, baked for 45 minutes at 180C. Ten servings, ready in 1 hour 5 minutes.',
    kw: ['torta di carote', 'italian carrot cake', 'carrot and almond cake', 'torta di carote e mandorle', 'carrot cake with lemon'],
    why: 'A cake for a table of ten, made with no butter and almost no flour. Torta di carote is the Italian carrot cake, which is lighter and plainer than the English kind, with no cream cheese frosting and a crumb held together by ground almonds.\n\nGrate the carrots on the fine side so they melt into the batter and do not leave strings. Whisk the egg yolks with the sugar until pale and thick, and stir in the carrots, almonds, flour and lemon zest. **Beat the egg whites separately and fold them in last**, since they lift the cake without any raising agent. If you stir hard, the batter goes flat.\n\nBake in a lined 24 cm tin at 180C for about 45 minutes, until it is golden and springs back when touched. Cool in the tin for 15 minutes, turn out and dust with icing sugar. The cake keeps moist for days, and the flavour of the carrot grows stronger on the second day.',
    ing: [
      '300 g carrots, finely grated',
      '4 eggs, separated',
      '200 g caster sugar',
      '200 g ground almonds',
      '50 g plain flour',
      '1 tsp baking powder',
      '1 lemon, zest',
      '1 pinch salt',
      '1 tbsp icing sugar'
    ],
    st: [
      'Heat the oven to 180C and line a 24 cm tin.',
      'Whisk the yolks and sugar for 5 minutes until thick. Stir in the carrots, almonds, flour, baking powder and zest.',
      'Whisk the whites with the salt to stiff peaks. Fold into the batter in two goes.',
      'Pour into the tin and bake for 45 minutes until golden and springy.',
      'Cool in the tin for 15 minutes, turn out and dust with the icing sugar.'
    ],
    tips: [
      'Grate the carrots finely.',
      'Fold in the whites gently.',
      'Cool in the tin before turning out.'
    ],
    pair: ['Coffee', 'Whipped cream', 'Fresh orange'],
    store: 'Keeps for 4 days in a tin. Freeze for 2 months.',
    nut: [272, 8, 33, 12, 4, 24, 110]
  },

  'torta-al-mascarpone': {
    d: 'A soft, creamy Italian cake made with mascarpone, eggs and lemon, baked for 45 minutes at 170C.',
    meta: 'Torta al mascarpone, soft Italian cake with mascarpone and lemon, baked for 45 minutes at 170C. Ten servings, ready in 1 hour 10 minutes.',
    kw: ['torta al mascarpone', 'italian mascarpone cake', 'mascarpone and lemon cake', 'soft cake with mascarpone', 'torta al mascarpone recipe'],
    why: 'Mascarpone is a cream cheese made from cream, and it is why this cake is so soft. Torta al mascarpone is an Italian cake where the cheese replaces most of the butter, and the crumb is tender, rich and slightly moist, like a cross between a sponge and a cheesecake.\n\nBring the mascarpone and eggs to room temperature before you begin, because cold ingredients split the batter and make it heavy. Beat the eggs with the sugar until thick and pale, then fold in the mascarpone, lemon zest and vanilla. **Fold in the flour last, with a spatula**, until you cannot see any streaks, and no longer. Overmixing toughens the crumb.\n\nBake in a lined 24 cm tin at 170C for about 45 minutes, until golden and the centre is just set. It will sink a little as it cools, which is normal. Leave it in the tin for 20 minutes before turning it out. Serve with fresh berries and a dusting of icing sugar.',
    ing: [
      '250 g mascarpone',
      '4 eggs',
      '160 g caster sugar',
      '1 lemon, zest',
      '1 tsp vanilla extract',
      '200 g plain flour',
      '2 tsp baking powder',
      '1 pinch salt',
      '200 g strawberries, to serve',
      '1 tbsp icing sugar'
    ],
    st: [
      'Heat the oven to 170C and line a 24 cm tin.',
      'Beat the eggs and sugar for 6 minutes until thick and pale.',
      'Fold in the mascarpone, zest and vanilla.',
      'Sift over the flour, baking powder and salt and fold until just combined.',
      'Pour into the tin and bake for 45 minutes until golden and just set. Cool in the tin for 20 minutes.',
      'Dust with the icing sugar and serve with the strawberries.'
    ],
    tips: [
      'Use room temperature ingredients.',
      'Fold in the flour last and stop when it is mixed.',
      'It will sink a little as it cools.'
    ],
    pair: ['Fresh berries', 'Coffee', 'Sweet wine'],
    store: 'Keeps for 3 days in the fridge.',
    nut: [285, 6, 36, 13, 1, 20, 150]
  },

  'torta-di-castagne': {
    d: 'A dark, moist cake of chestnut purée, chocolate, eggs and butter baked for 40 minutes at 170C.',
    meta: 'Torta di castagne, dark moist cake of chestnut purée and chocolate, baked for 40 minutes at 170C. Ten servings, ready in 1 hour.',
    kw: ['torta di castagne', 'italian chestnut cake', 'chestnut and chocolate cake', 'chestnut puree cake', 'torta di castagne recipe'],
    why: 'A cake for ten people on a cold afternoon, made with a tin of chestnut purée and no flour at all. Torta di castagne is a dark, dense, moist Italian cake, and the chestnuts give it a sweetness and a texture that nuts alone cannot.\n\nUse unsweetened chestnut purée if you can find it, or sweetened and cut the sugar to match. Beat it with softened butter until smooth, then add the egg yolks one at a time and the melted chocolate. **Whisk the whites separately to soft peaks** and fold them in, in two goes, since they are the only raising in a cake without flour. Stir the first third in firmly to loosen the heavy batter, then fold in the rest very gently.\n\nBake in a lined 22 cm tin at 170C for about 40 minutes, until the top is set and a skewer comes out with a few moist crumbs. The cake is fragile while warm, so cool it completely in the tin. Dust with cocoa and serve in small slices with cream.',
    ing: [
      '400 g unsweetened chestnut purée',
      '100 g butter, softened',
      '120 g caster sugar',
      '4 eggs, separated',
      '150 g dark chocolate, melted',
      '1 tsp vanilla extract',
      '1 pinch salt',
      '1 tbsp cocoa powder',
      '150 ml double cream, to serve'
    ],
    st: [
      'Heat the oven to 170C and line a 22 cm tin.',
      'Beat the chestnut purée, butter and sugar until smooth. Beat in the yolks one at a time, then the chocolate and vanilla.',
      'Whisk the whites and salt to soft peaks. Stir a third into the batter, then fold in the rest gently.',
      'Pour into the tin and bake for 40 minutes until set.',
      'Cool completely in the tin. Dust with the cocoa and serve with the cream.'
    ],
    tips: [
      'Beat the purée until smooth.',
      'Stir in a third of the whites firmly, then fold the rest.',
      'Cool completely before turning out.'
    ],
    pair: ['Whipped cream', 'Espresso', 'Dessert wine'],
    store: 'Keeps for 4 days in the fridge.',
    nut: [369, 5, 40, 21, 5, 24, 50]
  },

  'tiramisu-alle-fragole': {
    d: 'A no cook Italian dessert of sponge fingers dipped in orange juice, layered with mascarpone cream and strawberries and chilled for 6 hours.',
    meta: 'Tiramisu alle fragole, strawberry tiramisu with mascarpone cream and sponge fingers, no cooking. Eight servings, ready in 30 minutes plus chilling.',
    kw: ['tiramisu alle fragole', 'strawberry tiramisu', 'italian strawberry dessert', 'tiramisu with strawberries and mascarpone', 'no bake strawberry tiramisu'],
    why: 'Dip the biscuits for one second only. That is the advice that decides whether a tiramisu is light or a puddle, and it applies to the strawberry version just as it does to the coffee one. Tiramisu alle fragole swaps the coffee for orange juice and puts sliced strawberries between the layers.\n\nWhisk the mascarpone with the sugar and cream until it holds soft peaks. **Do not beat it hard**, as mascarpone turns grainy and then curdles if overworked. Hull the strawberries and slice them thin, saving a few whole ones for the top. Dip the sponge fingers in the orange juice, flip them over, and lay them side by side in the dish.\n\nSpread half the cream over the biscuits, cover with a layer of sliced strawberries, then repeat with the rest. Cover and chill for at least 6 hours so the biscuits soften into a sponge and the layers set. Decorate with the whole strawberries and a few mint leaves before serving, since they bleed if left on too long.',
    ing: [
      '500 g mascarpone',
      '200 ml double cream',
      '80 g icing sugar',
      '1 tsp vanilla extract',
      '300 g sponge fingers',
      '150 ml orange juice',
      '600 g strawberries, hulled',
      '6 g mint leaves'
    ],
    st: [
      'Whisk the mascarpone, cream, icing sugar and vanilla to soft peaks. Do not overbeat.',
      'Slice most of the strawberries, keeping 8 whole.',
      'Dip half the sponge fingers in the orange juice for 1 second each and lay them in a 24 x 20 cm dish.',
      'Spread half the cream over, cover with half the sliced strawberries, and repeat with the remaining biscuits, cream and strawberries.',
      'Cover and chill for 6 hours.',
      'Top with the whole strawberries and mint just before serving.'
    ],
    tips: [
      'Dip the biscuits for only a second.',
      'Do not overwhip the mascarpone.',
      'Add the strawberry topping just before serving.'
    ],
    pair: ['Prosecco', 'Fresh mint', 'Coffee'],
    store: 'Keeps for 2 days in the fridge.',
    rest: [360, 'Chilling'],
    nut: [574, 8, 50, 38, 2, 34, 100]
  },

  'panna-cotta-ai-frutti-di-bosco': {
    d: 'A wobbling vanilla cream set with gelatine in glasses and topped with a sauce of mixed berries, chilled for 4 hours.',
    meta: 'Panna cotta ai frutti di bosco, vanilla panna cotta with a mixed berry sauce, cooked for 5 minutes. Six servings, ready in 20 minutes plus chilling.',
    kw: ['panna cotta ai frutti di bosco', 'panna cotta with berries', 'italian panna cotta with berry sauce', 'vanilla panna cotta', 'mixed berry panna cotta'],
    why: 'Panna cotta means cooked cream, and it is the least cooked of all the cooked desserts: five minutes at the hob, then the fridge does the rest. The aim is a cream that wobbles when you shake the glass but holds its shape on the spoon.\n\nThe gelatine is where the trouble starts. Too much and the panna cotta is rubbery, too little and it collapses. Use 1 leaf for every 100 ml of liquid, as a guide. Soak the leaves in cold water for 5 minutes until soft, squeeze them out and stir them into the hot cream. **Take the cream off the heat before adding the gelatine**, because boiling weakens its setting power.\n\nPour into six glasses and chill for at least 4 hours. The berry sauce is just berries and sugar, softened for 3 minutes in a pan until they release their juice, then cooled. Spoon it over each panna cotta just before serving. A few fresh berries on top make it look finished.',
    ing: [
      '500 ml double cream',
      '200 ml whole milk',
      '70 g caster sugar',
      '1 tsp vanilla extract',
      '10 g gelatine leaves',
      '300 g mixed frozen or fresh berries',
      '40 g caster sugar, for the sauce'
    ],
    st: [
      'Soak the gelatine leaves in cold water for 5 minutes.',
      'Heat the cream, milk and 70 g sugar in a pan, stirring, until just steaming. Do not boil.',
      'Off the heat, squeeze the gelatine and stir it in with the vanilla until dissolved.',
      'Pour into 6 glasses and chill for 4 hours.',
      'Heat the berries and 40 g sugar in a pan for 3 minutes until juicy. Cool and spoon over the panna cotta.'
    ],
    tips: [
      'Take the cream off the heat before adding the gelatine.',
      'Measure the gelatine carefully.',
      'Add the sauce just before serving.'
    ],
    pair: ['Fresh berries', 'Biscotti', 'Prosecco'],
    store: 'Keeps for 3 days in the fridge, covered.',
    rest: [240, 'Chilling'],
    nut: [402, 5, 28, 30, 2, 27, 40]
  },

  'crespelle': {
    d: 'Thin Italian pancakes rolled around a filling of ricotta and jam, baked for 15 minutes and dusted with sugar.',
    meta: 'Crespelle, thin Italian pancakes rolled with ricotta and jam, baked until warm, cooked for 15 minutes. Six servings, ready in 45 minutes.',
    kw: ['crespelle', 'italian crepes', 'crespelle with ricotta and jam', 'italian pancakes filled with ricotta', 'crespelle recipe'],
    why: 'A table for six on a Sunday, and a dish that can be made ahead: crespelle are the Italian crêpes, thin and pale, and they are rolled around a filling and warmed through. The sweet version here uses ricotta and jam, and the savoury kind uses spinach and cheese.\n\nThe batter is flour, eggs, milk and a little melted butter, whisked smooth and left to rest for 15 minutes so the flour swells. **Pour in just enough to coat the pan** and swirl it, because thick crespelle are rubbery. A non stick pan, lightly buttered for the first one only, is best. They are ready to turn when the edges lift and the surface is dry.\n\nMix the ricotta with a little sugar and lemon zest, spread each crespella with jam and a spoonful of ricotta, and roll. Set them in a buttered dish and bake at 180C for 15 minutes until warm. Dust with icing sugar. The batter keeps overnight in the fridge, which makes the whole dish easier.',
    ing: [
      '200 g plain flour',
      '3 eggs',
      '500 ml whole milk',
      '30 g butter, melted',
      '1 pinch salt',
      '250 g ricotta',
      '40 g caster sugar',
      '1 lemon, zest',
      '150 g strawberry jam',
      '1 tbsp icing sugar'
    ],
    st: [
      'Whisk the flour, eggs, milk, butter and salt to a smooth batter. Rest for 15 minutes.',
      'Heat a non stick pan, pour in a thin layer of batter and swirl. Cook for 1 minute until the edges lift, flip and cook for 30 seconds. Repeat to make 12.',
      'Heat the oven to 180C. Mix the ricotta, sugar and lemon zest.',
      'Spread each crespella with jam, add a spoonful of ricotta and roll up. Lay in a buttered dish.',
      'Bake for 15 minutes until warm. Dust with the icing sugar.'
    ],
    tips: [
      'Rest the batter so the crespelle are tender.',
      'Pour in only enough batter to coat the pan.',
      'Make the batter the night before if you like.'
    ],
    pair: ['Coffee', 'Fresh berries', 'Whipped cream'],
    store: 'Keeps for 2 days in the fridge. The unfilled crespelle freeze for 2 months.',
    nut: [419, 14, 57, 15, 1, 28, 140]
  },

  'bomboloni-al-forno': {
    d: 'Soft baked Italian doughnuts of enriched dough risen for 90 minutes, baked for 20 minutes and rolled in sugar, with a custard filling.',
    meta: 'Bomboloni al forno, soft baked Italian doughnuts filled with custard, baked for 20 minutes at 180C. Twelve servings, ready in 1 hour plus rising.',
    kw: ['bomboloni al forno', 'baked italian doughnuts', 'baked bomboloni with custard', 'oven baked filled doughnuts', 'bomboloni al forno recipe'],
    why: 'A lighter way to eat a doughnut: the bomboloni are baked, not fried, and the result is a soft, bready bun that you roll in sugar and fill with custard. They are less greasy than the fried kind and need no pan of hot oil.\n\nThe dough is enriched with eggs, butter and milk, and it is sticky. Knead it for 10 minutes until it is smooth and stretchy, and leave it for 90 minutes to rise. **Shape the dough into tight balls**, tucking the edges underneath, because a loose ball spreads sideways in the oven. Let them rise for another 30 minutes on a tray.\n\nBrush with melted butter before baking at 180C for 20 minutes, until deep gold, and brush again as they come out, then roll them in caster sugar. The butter makes the sugar stick. Cool for 10 minutes, then pipe in the custard through a hole made with a skewer. Eat them the same day, as baked doughnuts go stale quickly.',
    ing: [
      '500 g strong bread flour',
      '70 g caster sugar',
      '7 g instant yeast',
      '1 tsp salt',
      '2 eggs',
      '230 ml lukewarm milk',
      '70 g butter, softened',
      '40 g butter, melted',
      '80 g caster sugar, for rolling',
      '300 g ready made custard'
    ],
    st: [
      'Mix the flour, sugar, yeast and salt. Add the eggs, milk and softened butter and knead for 10 minutes until smooth.',
      'Cover and leave to rise for 90 minutes until doubled.',
      'Divide into 12 balls, tuck the edges under and set them on lined trays. Leave to rise for 30 minutes.',
      'Heat the oven to 180C. Brush with half the melted butter and bake for 20 minutes until deep gold.',
      'Brush with the remaining butter and roll in the sugar.',
      'Cool for 10 minutes, make a hole in each with a skewer and pipe in the custard.'
    ],
    tips: [
      'Shape the balls tightly.',
      'Brush with butter so the sugar sticks.',
      'Eat on the day they are baked.'
    ],
    pair: ['Cappuccino', 'Hot chocolate', 'Espresso'],
    store: 'Best the day they are made.',
    rest: [120, 'Rising'],
    nut: [279, 7, 38, 11, 1, 19, 440]
  },

  'limoncello': {
    d: 'An Italian lemon liqueur made by steeping lemon zest in neutral spirit for 4 days and mixing it with a cooled sugar syrup.',
    meta: 'Limoncello, Italian lemon liqueur made by steeping lemon zest in spirit, cooked for 5 minutes. Ten servings, ready in 20 minutes plus steeping.',
    kw: ['limoncello', 'homemade limoncello', 'italian lemon liqueur', 'limoncello recipe', 'lemon zest liqueur'],
    why: 'A bottle of limoncello is a gift for a table of ten, and almost no work: a peel, a wait, a syrup. It is an Italian lemon liqueur, made at home along the coast, and it is served very cold after a meal in small glasses.\n\nUse unwaxed lemons, scrubbed, and peel them thinly with a vegetable peeler, taking only the yellow zest. **Leave behind every trace of white pith**, because it makes the liqueur bitter. Steep the zest in neutral spirit in a covered jar for 4 days, shaking once a day. The spirit turns a bright yellow as the oils leach out.\n\nThen make a syrup from sugar and water, boiled for 5 minutes and cooled completely, and stir it into the strained spirit. Bottle it and chill it in the freezer for at least 4 hours before serving. The alcohol keeps it from freezing hard. It improves with a week or two in the bottle, and keeps for a year.',
    ing: [
      '10 unwaxed lemons',
      '500 ml neutral spirit, 95 per cent or vodka',
      '500 g caster sugar',
      '700 ml water'
    ],
    st: [
      'Scrub the lemons and peel off the zest in thin strips, leaving the pith. Put the zest in a large jar and add the spirit. Seal.',
      'Leave to steep for 4 days, shaking once a day.',
      'Boil the sugar and water for 5 minutes, stirring, until dissolved. Cool completely.',
      'Strain the spirit into the cooled syrup, stir and pour into bottles.',
      'Chill in the freezer for at least 4 hours before serving.'
    ],
    tips: [
      'Take only the yellow zest, with no pith.',
      'Cool the syrup fully before mixing.',
      'Serve it very cold in small glasses.'
    ],
    pair: ['Biscotti', 'Lemon sorbet', 'Fresh fruit'],
    store: 'Keeps for 1 year in a cool, dark place or the freezer.',
    rest: [6000, 'Steeping'],
    nut: [224, 1, 55, 0, 2, 52, 5]
  },

  'spritz-veneziano': {
    d: 'An orange coloured aperitivo of Prosecco, bitter liqueur and soda over ice with an orange slice, made in 5 minutes.',
    meta: 'Spritz Veneziano, Venetian aperitivo of Prosecco, bitter liqueur and soda over ice, no cooking. Two servings, ready in 5 minutes.',
    kw: ['spritz veneziano', 'venetian spritz', 'aperol spritz recipe', 'prosecco and bitter orange aperitivo', 'italian spritz cocktail'],
    why: 'The name Spritz Veneziano points to Venice, and the drink is the aperitivo of the north east of Italy, a bitter, bubbly orange cocktail served before dinner. It takes five minutes and the ratio is easy to remember: 3, 2, 1.\n\nThat is three parts Prosecco, two parts bitter orange liqueur and a splash of soda water. Build it in a large wine glass over plenty of ice, because ice that is too little melts quickly and dilutes the drink. **Pour the Prosecco first, then the liqueur**, then add the soda last and stir once. This keeps the bubbles and stops the colour sinking.\n\nGarnish with a slice of orange, and a green olive in the traditional Venetian style. The drink should be served very cold and drunk soon, before the ice melts. A dry Prosecco gives the best balance, since the liqueur is already sweet. Serve with olives, crisps or small sandwiches.',
    ing: [
      '180 ml dry Prosecco',
      '120 ml bitter orange liqueur',
      '60 ml soda water',
      '300 g ice cubes',
      '2 orange slices',
      '2 green olives'
    ],
    st: [
      'Fill two large wine glasses with ice.',
      'Pour in the Prosecco, then the bitter orange liqueur.',
      'Top with the soda water and stir once, gently.',
      'Garnish each with an orange slice and an olive.'
    ],
    tips: [
      'Use plenty of ice.',
      'Pour the Prosecco before the liqueur.',
      'Serve at once, before the ice melts.'
    ],
    pair: ['Olives', 'Crisps', 'Tramezzini', 'Salted nuts'],
    store: 'Serve immediately.',
    nut: [145, 1, 33, 1, 3, 28, 70]
  },

  'bicerin': {
    d: 'A Turin drink of hot chocolate, espresso and cream in layers, served in a small glass, ready in 10 minutes.',
    meta: 'Bicerin, Turin drink of hot chocolate, espresso and cream served in layers, cooked for 5 minutes. Two servings, ready in 10 minutes.',
    kw: ['bicerin', 'turin bicerin', 'chocolate and coffee layered drink', 'italian hot chocolate with espresso', 'bicerin recipe'],
    why: 'Keep the layers separate and do not stir. That is how bicerin is drunk in Turin, from a small glass with three layers: dark chocolate at the base, espresso in the middle and lightly whipped cream floating on top. You sip through the cream, and the three flavours meet in the mouth.\n\nThe chocolate is made thick, almost a pudding, from milk, dark chocolate and a little sugar, stirred over low heat until it coats the spoon. **Pour the espresso over the back of a spoon** so it lands gently on the chocolate and does not mix with it. The cream is whipped only until it thickens, so it floats rather than sinks.\n\nBuild the layers in a heatproof glass in the order chocolate, coffee, cream, and serve at once. Do not stir before you drink. A square of the same dark chocolate on the side is a good match. The drink is served hot, and it is sweet enough for a small glass to last through a long chat.',
    ing: [
      '250 ml whole milk',
      '80 g dark chocolate, chopped',
      '2 tsp caster sugar',
      '60 ml hot espresso',
      '100 ml double cream, lightly whipped'
    ],
    st: [
      'Warm the milk, chocolate and sugar in a pan over low heat for 4 minutes, whisking, until thick and smooth.',
      'Divide between 2 small heatproof glasses, filling a third of each.',
      'Pour the espresso gently over the back of a spoon so it floats on the chocolate.',
      'Spoon the cream over the top. Serve without stirring.'
    ],
    tips: [
      'Do not stir the layers together.',
      'Pour over the back of a spoon.',
      'Whip the cream only lightly so it floats.'
    ],
    pair: ['Dark chocolate', 'Biscotti', 'Water'],
    store: 'Serve at once.',
    nut: [496, 7, 36, 36, 4, 31, 70]
  },

  'schweinebraten': {
    d: 'A German roast pork shoulder with a crackled rind, roasted for 2 hours on onions with dark beer and caraway.',
    meta: 'Schweinebraten, German roast pork with a crisp crackling, onions and dark beer gravy, roasted for 2 hours. Six servings, ready in 2 hours 20 minutes.',
    kw: ['schweinebraten', 'german pork roast', 'bavarian roast pork with crackling', 'roast pork with beer gravy', 'schweinebraten recipe'],
    why: 'Keep the heat low. That is most of the recipe, and the part people skip. Schweinebraten is the Bavarian Sunday roast, a piece of pork shoulder with the rind on, cooked slowly so the meat is tender and the rind finishes as crisp crackling.\n\nScore the rind in a diamond pattern with a sharp knife, cutting through the skin but not into the meat, and rub salt and caraway into the cuts. Set the pork on a bed of onions, carrots and celery in a tin, and pour in dark beer and stock around, not over, the rind. **Keep the rind dry**, because wet skin cannot crisp. Roast at 160C for 1 hour 45 minutes.\n\nTurn the oven up to 230C for the last 15 minutes, until the rind has blistered and crackles. Rest the meat for 20 minutes, covered loosely. Meanwhile strain the juices and vegetables into a pan, thicken with a little cornflour and simmer for 5 minutes. Slice and serve with dumplings or potatoes, red cabbage and the dark gravy.',
    ing: [
      '1.8 kg pork shoulder, rind on',
      '1 tbsp caraway seeds',
      '1 tbsp salt',
      '2 onions, quartered',
      '2 carrots, in chunks',
      '2 celery sticks, in chunks',
      '4 garlic cloves',
      '330 ml dark beer',
      '300 ml beef stock',
      '1 tbsp cornflour'
    ],
    st: [
      'Heat the oven to 160C. Score the rind in a diamond pattern and rub with the salt and caraway.',
      'Set the onions, carrots, celery and garlic in a tin and pour in the beer and stock. Put the pork on top, rind up and dry.',
      'Roast for 1 hour 45 minutes.',
      'Turn the oven to 230C and roast for 15 minutes until the rind is crackling. Rest for 20 minutes.',
      'Strain the juices into a pan, stir in the cornflour mixed with a little water and simmer for 5 minutes. Slice the pork and serve with the gravy.'
    ],
    tips: [
      'Keep the rind dry so it crisps.',
      'Finish at a high heat for the crackling.',
      'Rest the pork before carving.'
    ],
    pair: ['Potato dumplings', 'Red cabbage', 'Dark beer', 'Mustard'],
    store: 'Keeps for 3 days in the fridge. Reheat the crackling in a hot oven.',
    nut: [642, 56, 10, 42, 2, 3, 1560]
  }
};
