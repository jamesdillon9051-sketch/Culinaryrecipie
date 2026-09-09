'use strict';

/**
 * Volume twelve — bread, sweets and one drink.
 *
 * Three breads that between them cover the whole Lebanese day: the pocket
 * bread every meal is eaten with, the sesame purse sold on Beirut street
 * corners, and the flat village loaf. Then the sweets, which divide almost
 * cleanly into two families — milk thickened with starch, and semolina — plus
 * jallab, which is a drink but eaten with a spoon by the end.
 */

module.exports = {
  'khubz-arabi': {
    d: 'The pocket bread. Two minutes in a very hot oven, where steam trapped inside blows the loaf apart into two leaves — which is either thrilling or an anticlimax, with very little in between.',
    meta: 'Lebanese pocket bread baked two minutes on a searing stone, where trapped steam blows each loaf into two thin leaves.',
    kw: ['khubz arabi', 'lebanese pita bread', 'pocket bread recipe', 'homemade pita', 'arabic flatbread'],
    why: 'The pocket is made by steam, and steam needs two things: enough water in the dough and enough heat to flash it. A dry dough will not puff whatever you do, and an oven under 250°C gives the water time to escape gently through the surface instead of lifting it. The stone or heavy tray must be preheated for a full half hour — laying dough on a merely warm surface is the single most common reason a batch comes out flat. Roll evenly, too: a thin patch bakes through and vents before the loaf can inflate.',
    ing: [
      '500 g strong white flour',
      '7 g fast-action dried yeast',
      '1.5 tsp fine sea salt',
      '1 tsp caster sugar',
      '2 tbsp olive oil',
      '320 ml warm water'
    ],
    st: [
      'Mix the flour, yeast, salt and sugar. Add the oil and water and bring together into a soft, slightly tacky dough.',
      'Knead 10 minutes until smooth and elastic. It should stay soft — resist adding flour.',
      'Cover and leave in a warm place 90 minutes, until doubled in size.',
      'Put a baking stone or heavy upturned tray on the top shelf and heat the oven to its maximum, at least 250°C / 480°F, for a full 30 minutes.',
      'Divide the dough into 8 and roll each into a ball. Rest them 10 minutes under a cloth, then roll each into a 5 mm disc of even thickness.',
      'Slide two at a time onto the hot stone. They will balloon within 90 seconds.',
      'Bake 2 to 3 minutes in total, until fully inflated and barely coloured. Wrap the baked loaves in a cloth immediately — this softens them as they cool.'
    ],
    rest: [90, 'the dough rising'],
    tips: [
      'Preheat the stone for the full 30 minutes. This is why breads fail to puff.',
      'Keep the dough soft. Extra flour kills the pocket.',
      'Wrap them in a cloth straight from the oven or they go crisp.'
    ],
    pair: ['Hummus Beiruti', 'Muhammara', 'Any of the mezze'],
    store: 'Two days in a sealed bag at room temperature. They freeze for 3 months and toast from frozen.',
    nut: [245, 7, 48, 3, 2, 1, 300]
  },

  'kaak-bil-simsim': {
    d: 'The handbag-shaped sesame bread sold from glass carts on Beirut pavements, split and filled with za’atar or cheese. Crisp outside, hollow, and almost impossible to buy anywhere else.',
    meta: 'Beirut street bread shaped into a sesame-crusted purse, baked hot so it stays crisp outside and hollow within.',
    kw: ["ka'ak", 'kaak bil simsim', 'lebanese sesame bread', 'beirut street bread', 'sesame purse bread'],
    why: 'The sesame has to be pressed into a wet surface or it falls off the moment the bread cools — brushing with a thin flour-and-water slurry rather than egg gives a better grip and keeps the crust matt rather than shiny. The distinctive purse shape is not decoration either: the thick ring at one end and the thin flat panel at the other bake at different rates, so you get a crisp handle and a soft, hollow body from one loaf.',
    ing: [
      '500 g strong white flour',
      '7 g fast-action dried yeast',
      '2 tbsp caster sugar',
      '1.5 tsp fine sea salt',
      '3 tbsp olive oil',
      '300 ml warm water',
      '# To finish',
      '2 tbsp plain flour',
      '4 tbsp water',
      '80 g sesame seeds'
    ],
    st: [
      'Mix the flour, yeast, sugar and salt, add the oil and warm water, and knead 10 minutes to a smooth soft dough.',
      'Cover and prove 75 minutes, until doubled.',
      'Heat the oven to 230°C / 450°F with a heavy tray inside.',
      'Divide into 6. Roll each into an oval about 20 cm long, then use your fingers to open a hole near one end and stretch it into a ring, leaving the rest as a flat panel — a handbag with a handle.',
      'Whisk the 2 tbsp flour with the 4 tbsp water to a thin slurry and brush it over the tops.',
      'Press each one face-down into a plate of sesame seeds so they stick in a thick, even layer.',
      'Bake on the hot tray 18 to 20 minutes, until deep gold and hollow-sounding. Cool on a rack so the base does not soften.'
    ],
    rest: [75, 'the dough rising'],
    tips: [
      'A flour-and-water slurry grips sesame better than egg does.',
      'Press the bread into the seeds rather than sprinkling them on.',
      'Cool on a rack, or the base steams itself soft.'
    ],
    pair: ["Za'atar and olive oil", 'Halloumi', 'Sweet tea'],
    store: 'Best on the day. Two days in a paper bag; refresh 4 minutes at 200°C. It freezes for 2 months.',
    nut: [320, 9, 54, 8, 3, 4, 340]
  },

  'talami': {
    d: 'A soft flat village loaf, dimpled with the fingers and baked with olive oil and a scatter of sesame. Larger and thicker than khubz, and it does not puff.',
    meta: 'A soft dimpled village flatbread baked with olive oil and sesame, thicker than pocket bread and deliberately not puffed.',
    kw: ['talami', 'lebanese village bread', 'talami bread recipe', 'flat olive oil bread', 'dimpled flatbread'],
    why: 'Dimpling is what stops this becoming a pita. Pressing your fingertips deep into the risen dough collapses the large bubbles and gives the steam somewhere to escape, so the loaf bakes flat and soft rather than inflating into a hollow shell. The oil pools in those dimples and half-fries the top as it bakes, which is where the texture comes from. A hot oven and a short bake keep it pale and pliable — this is a bread for tearing, not for crunch.',
    ing: [
      '500 g plain flour',
      '7 g fast-action dried yeast',
      '1 tbsp caster sugar',
      '1.5 tsp fine sea salt',
      '5 tbsp olive oil',
      '320 ml warm water',
      '# To finish',
      '3 tbsp olive oil',
      '2 tbsp sesame seeds',
      '0.5 tsp flaky sea salt'
    ],
    st: [
      'Mix the flour, yeast, sugar and salt, work in 5 tbsp oil and the water, and knead 8 minutes to a soft dough.',
      'Cover and prove 75 minutes, until doubled.',
      'Heat the oven to 240°C / 465°F.',
      'Divide the dough into 6 and press each out on an oiled tray into a rough 18 cm round about 1.5 cm thick. Do not use a rolling pin.',
      'Press your fingertips deep into each round all over, right down to the tray, making dimples that stay.',
      'Drizzle with the finishing oil so it settles in the dimples, then scatter with sesame and flaky salt.',
      'Bake 15 minutes, until set and only lightly coloured. Stack them under a cloth as they come out so they stay soft.'
    ],
    rest: [75, 'the dough rising'],
    tips: [
      'Dimple deeply and right down to the tray, or it puffs like a pita.',
      'Hands, not a rolling pin.',
      'Stack under a cloth to keep them pliable.'
    ],
    pair: ['Labneh', 'Shanklish salad', 'Olives'],
    store: 'Two days wrapped. Warm briefly before serving. It freezes for 2 months.',
    nut: [290, 8, 50, 6, 2, 2, 320]
  },

  'mouhalabieh': {
    d: 'Milk set with cornflour, perfumed with rose and orange blossom, and scattered with pistachio. Barely sweet, eaten cold, and the whole thing takes fifteen minutes.',
    meta: 'A cold milk pudding set with cornflour and perfumed with rose and orange blossom water, finished with pistachio.',
    kw: ['mouhalabieh', 'lebanese milk pudding', 'muhallabia recipe', 'rose water pudding', 'middle eastern milk dessert'],
    why: 'Cornflour needs to boil to set — a pudding that only reaches a simmer will thicken in the pan and then slump in the fridge, because the starch granules never fully burst. Let it bubble for two proper minutes, stirring hard. The flower waters go in off the heat: both are volatile and boiling them away leaves you with sweet milk and nothing else. Add them cautiously, too, as brands vary enormously in strength and too much tastes of soap.',
    ing: [
      '1 litre whole milk',
      '70 g cornflour',
      '110 g caster sugar',
      '1 tbsp rose water',
      '1 tbsp orange blossom water',
      '# To finish',
      '40 g pistachios, chopped',
      '1 tbsp dried rose petals',
      '2 tbsp honey'
    ],
    st: [
      'Whisk the cornflour into 200 ml of the cold milk until completely smooth with no lumps.',
      'Heat the remaining 800 ml milk with the sugar until steaming but not boiling.',
      'Pour the cornflour slurry into the hot milk in a steady stream, whisking constantly.',
      'Bring to the boil over medium heat, stirring without stopping. Once it bubbles, keep it there for 2 full minutes — it will thicken sharply.',
      'Take off the heat and stir in the rose water and orange blossom water. Taste, and add more only a few drops at a time.',
      'Pour into six glasses or a shallow dish and press cling film onto the surface if you dislike a skin.',
      'Chill at least 180 minutes, until set and completely cold. Serve scattered with pistachios, rose petals and a thread of honey.'
    ],
    rest: [180, 'chilling until set'],
    tips: [
      'It must actually boil for two minutes, or it will not set.',
      'Flower waters off the heat. Boiling drives them off.',
      'Add the rose water cautiously — strengths vary wildly.'
    ],
    pair: ['Arabic coffee', 'Fresh dates', 'Sweet tea'],
    store: 'Refrigerated for 3 days, covered. It does not freeze — the starch weeps on thawing.',
    nut: [215, 6, 30, 8, 0, 24, 70]
  },

  'layali-lubnan': {
    d: 'Lebanese nights: a semolina layer, a thick cream layer, syrup and nuts. Assembled in a dish and cut into squares, and every layer is a different texture.',
    meta: 'Layered semolina pudding topped with thick ashta cream, orange blossom syrup and pistachios, cut into squares.',
    kw: ['layali lubnan', 'lebanese nights dessert', 'semolina cream dessert', 'layali lubnan recipe', 'ashta semolina'],
    why: 'The semolina layer has to be completely cold and firm before the cream goes on, or the two bleed into each other and you lose the stripe that gives the dish its name. That means the base is made first and chilled properly. The syrup goes on at the table rather than in the fridge — poured early it soaks down through both layers and turns the semolina to sludge, where poured at the last moment it sits on top and stays distinct.',
    ing: [
      '# For the semolina layer',
      '1 litre whole milk',
      '150 g fine semolina',
      '100 g caster sugar',
      '1 tbsp orange blossom water',
      '# For the cream layer',
      '400 ml double cream',
      '200 g thick Greek yogurt',
      '2 tbsp icing sugar',
      '1 tsp rose water',
      '# For the syrup',
      '150 g caster sugar',
      '80 ml water',
      '1 tbsp lemon juice',
      '1 tbsp orange blossom water',
      '# To finish',
      '60 g pistachios, chopped'
    ],
    st: [
      'Heat the milk and sugar for the base until steaming, then rain in the semolina in a thin stream, whisking hard.',
      'Cook over medium heat, stirring constantly, 8 to 10 minutes until it is thick enough to hold the trail of the whisk.',
      'Stir in the orange blossom water, pour into a 20 x 30 cm dish, smooth the top and cool, then chill at least 180 minutes, until firm and completely cold.',
      'Boil the syrup sugar, water and lemon for 6 minutes to a light syrup, take off the heat, stir in the orange blossom water and cool.',
      'Whip the cream to soft peaks, then fold in the yogurt, icing sugar and rose water. Do not overwhip — it should be spoonable, not stiff.',
      'Spread the cream over the cold semolina in an even layer and return to the fridge for 30 minutes.',
      'Cut into squares, scatter thickly with pistachios and pour the syrup over at the table.'
    ],
    rest: [180, 'chilling the semolina layer'],
    tips: [
      'The base must be cold and firm before the cream goes on.',
      'Syrup at the table, never in the fridge.',
      'Fold the yogurt in — all cream is too rich and too loose.'
    ],
    pair: ['Arabic coffee', 'Mint tea', 'Fresh figs'],
    store: 'Refrigerated for 3 days without the syrup. Do not freeze.',
    nut: [340, 7, 48, 13, 1, 33, 90]
  },

  'atayef-asafiri': {
    d: 'Little pancakes cooked on one side only, folded round thick cream and left open at one end so the pistachio shows. Made in enormous quantities in Ramadan.',
    meta: 'Small one-sided pancakes folded around thick ashta cream, left open at one end and dipped in pistachio.',
    kw: ['atayef', 'atayef asafiri', 'lebanese pancakes cream', 'qatayef recipe', 'ramadan dessert'],
    why: 'Cooking on one side only is the entire method. The top surface must stay wet and full of open pores, because those pores are what the two halves seal against when you pinch them shut — flip the pancake and the surface sets smooth, nothing sticks, and the cream falls out. Cook until the top has gone from wet to matt and is covered in burst bubbles, then lift it straight off. And fold them while warm; a cold atayef cracks along the seam.',
    ing: [
      '# For the batter',
      '200 g plain flour',
      '30 g fine semolina',
      '1 tbsp caster sugar',
      '1 tsp baking powder',
      '7 g fast-action dried yeast',
      '0.25 tsp fine sea salt',
      '450 ml warm water',
      '# For the cream',
      '400 ml double cream',
      '150 g ricotta',
      '2 tbsp icing sugar',
      '1 tbsp orange blossom water',
      '# For the syrup',
      '150 g caster sugar',
      '80 ml water',
      '1 tbsp lemon juice',
      '1 tsp rose water',
      '# To finish',
      '80 g pistachios, finely chopped'
    ],
    st: [
      'Blend all the batter ingredients until completely smooth and the consistency of single cream. Leave 30 minutes until the surface is covered in bubbles.',
      'Boil the syrup sugar, water and lemon for 6 minutes, stir in the rose water off the heat, and cool completely.',
      'Whip the cream to soft peaks and fold in the ricotta, icing sugar and orange blossom water.',
      'Heat a non-stick pan over medium heat with no fat at all. Drop tablespoons of batter to make 8 cm discs.',
      'Cook on one side only, 60 to 90 seconds, until the top has lost all its shine and is covered in open holes. Do not turn them.',
      'Lift onto a cloth and cover. While still warm, fold each in half and pinch the seam from the point to about two-thirds along, leaving one end open.',
      'Pipe or spoon cream into the open end and dip that end in chopped pistachios. Serve with the cold syrup alongside.'
    ],
    tips: [
      'One side only. A turned pancake will not seal.',
      'Wait for the top to go matt and holey before lifting.',
      'Fold while warm — cold ones crack.'
    ],
    pair: ['Arabic coffee', 'Mint tea', 'Fresh dates'],
    store: 'Assemble on the day. The unfilled pancakes keep 2 days refrigerated and freeze for a month.',
    nut: [285, 6, 42, 10, 1, 24, 110]
  },

  'halawet-el-jibn': {
    d: 'A stretchy semolina and cheese dough rolled around cream and soaked in syrup. Somewhere between a pastry and a sweet — it behaves like mozzarella and tastes like a pudding.',
    meta: 'A stretchy semolina and cheese dough rolled thin around ashta cream, cut into fingers and served in orange blossom syrup.',
    kw: ['halawet el jibn', 'lebanese cheese rolls', 'halawet el jibn recipe', 'sweet cheese dessert', 'semolina cheese dough'],
    why: 'The dough has to be worked while it is genuinely hot — the cheese has to be at the point where it stretches like melted mozzarella, because that stretch is what lets you roll it thin without tearing. It stiffens as it cools and becomes unworkable within a couple of minutes, so it is spread on a syrup-brushed surface immediately and rolled straight away. Use a low-moisture cheese: anything wet gives a dough that will not come together at all.',
    ing: [
      '# For the dough',
      '250 ml water',
      '150 g caster sugar',
      '150 g fine semolina',
      '400 g low-moisture mozzarella or akkawi, grated',
      '1 tbsp rose water',
      '# For the cream',
      '300 ml double cream',
      '150 g ricotta',
      '2 tbsp icing sugar',
      '1 tbsp orange blossom water',
      '# For the syrup',
      '200 g caster sugar',
      '120 ml water',
      '1 tbsp lemon juice',
      '1 tbsp orange blossom water',
      '# To finish',
      '60 g pistachios, chopped',
      '2 tbsp dried rose petals'
    ],
    st: [
      'Boil the syrup sugar, water and lemon 7 minutes, stir in the orange blossom water off the heat and cool. Whip the cream with the ricotta, icing sugar and orange blossom water and chill.',
      'For the dough, bring the 250 ml water and 150 g sugar to the boil, then whisk in the semolina and cook 3 minutes, stirring, until thick.',
      'Add the grated cheese and stir over low heat until it melts completely and the mixture becomes one smooth, stretchy mass that pulls away from the pan, about 5 minutes.',
      'Stir in the rose water. Working immediately while it is hot, tip it onto a work surface brushed generously with cold syrup.',
      'Press and stretch it with an oiled spatula or roller into a rectangle about 3 mm thick. Work fast, before it stiffens.',
      'Spread the cream in a line down one long edge and roll up, then cut into 5 cm fingers.',
      'Arrange in a dish, spoon over some syrup, and scatter with pistachios and rose petals. Chill 30 minutes before serving.'
    ],
    tips: [
      'Work while it is hot. It becomes unrollable in about two minutes.',
      'Low-moisture cheese only. Wet cheese will not form a dough.',
      'Brush the surface with syrup, not flour, so nothing sticks.'
    ],
    pair: ['Arabic coffee', 'Mint tea', 'Fresh berries'],
    store: 'Refrigerated for 2 days; the dough firms up, so bring to cool room temperature. Do not freeze.',
    nut: [375, 11, 52, 13, 1, 34, 380]
  },

  'znoud-el-sit': {
    d: "Filo fingers filled with thick cream, fried and dropped straight into cold syrup. The name means \"the lady's upper arms\", which tells you the shape they are aiming for.",
    meta: 'Filo fingers rolled around thick ashta cream, fried until blistered and dropped straight into cold orange blossom syrup.',
    kw: ['znoud el sit', 'lebanese cream fingers', 'znoud el sit recipe', 'filo cream rolls', 'fried filo dessert'],
    why: 'Hot pastry into cold syrup, never the other way round. The temperature difference makes the pastry take up exactly a coating of syrup and then stop, so it stays crisp; if the syrup is warm the filo drinks it up and collapses into something soggy within a minute. So the syrup is made first and chilled properly. The cream also needs to be thick enough to hold a shape when rolled — a loose filling squeezes out of both ends in the pan and burns in the oil.',
    ing: [
      '# For the syrup',
      '250 g caster sugar',
      '150 ml water',
      '1 tbsp lemon juice',
      '1 tbsp orange blossom water',
      '# For the cream',
      '400 ml double cream',
      '3 tbsp cornflour',
      '2 tbsp caster sugar',
      '1 tbsp rose water',
      '# To assemble',
      '10 sheets filo pastry',
      '2 tbsp plain flour mixed with 2 tbsp water, for sealing',
      '# To fry',
      '800 ml sunflower oil',
      '# To finish',
      '50 g pistachios, chopped'
    ],
    st: [
      'Boil the sugar, water and lemon 8 minutes to a syrup that coats a spoon. Stir in the orange blossom water off the heat and chill until properly cold.',
      'Whisk the cornflour into a little of the cream until smooth, then heat the rest with the sugar. Add the slurry and cook, stirring, until very thick — about 4 minutes. Stir in the rose water, cool and chill.',
      'Cut each filo sheet into two rectangles, keeping the stack under a damp cloth.',
      'Pipe a finger of cold cream across the short edge, fold both long sides in, and roll up tightly. Seal the flap with flour paste.',
      'Heat the oil to 180°C. Fry four at a time, 2 to 3 minutes, turning, until blistered and pale gold.',
      'Lift straight from the oil into the cold syrup for 30 seconds, turning once.',
      'Lift out onto a rack, scatter with pistachios and serve warm.'
    ],
    tips: [
      'Hot pastry, cold syrup. The other way round makes them soggy.',
      'Thirty seconds in the syrup, no longer.',
      'The cream must be properly set or it escapes into the oil.'
    ],
    pair: ['Arabic coffee', 'Mint tea', 'A bowl of fresh fruit'],
    store: 'Best within the hour. Refrigerated for 2 days, though the pastry softens. Do not freeze filled.',
    nut: [395, 6, 45, 21, 1, 27, 180]
  },

  'sfouf': {
    d: 'A yellow semolina cake coloured and flavoured with turmeric, made with oil rather than butter and no eggs at all. Cut into diamonds and eaten with tea.',
    meta: 'A yellow turmeric and semolina cake made with oil rather than butter and no eggs, cut into diamonds and eaten with tea.',
    kw: ['sfouf', 'lebanese turmeric cake', 'sfouf recipe', 'semolina turmeric cake', 'vegan lebanese cake'],
    why: 'Turmeric here is a flavour, not just a colour — an earthy, slightly bitter note that stops an otherwise very sweet cake becoming cloying. Use a full tablespoon and do not be tempted to cut it. The texture comes from semolina rather than flour, and semolina needs a rest in the liquid before baking so it hydrates; skip that and the crumb is gritty. Tahini brushed round the tin instead of butter is traditional and genuinely works better, giving a nutty edge to the crust.',
    ing: [
      '300 g fine semolina',
      '150 g plain flour',
      '250 g caster sugar',
      '1 tbsp ground turmeric',
      '2 tsp baking powder',
      '0.5 tsp fine sea salt',
      '350 ml whole-milk alternative or water',
      '180 ml sunflower oil',
      '1 tbsp tahini, for the tin',
      '# To finish',
      '3 tbsp pine nuts',
      '2 tbsp sesame seeds'
    ],
    st: [
      'Brush a 23 cm square tin generously with the tahini, including the corners.',
      'Whisk the semolina, flour, sugar, turmeric, baking powder and salt together thoroughly so the turmeric is evenly distributed.',
      'Stir in the liquid and the oil and mix to a loose, pourable batter.',
      'Leave it to stand 15 minutes so the semolina hydrates. It will thicken noticeably.',
      'Heat the oven to 180°C / 350°F. Pour the batter into the tin and scatter the pine nuts and sesame seeds evenly over the top.',
      'Bake 35 minutes, until risen, deep yellow and a skewer comes out clean.',
      'Cool 15 minutes in the tin, then cut into diamonds and lift out.'
    ],
    tips: [
      'A full tablespoon of turmeric. Less makes it sweet and flat.',
      'Rest the batter 15 minutes or the crumb stays gritty.',
      'Tahini in the tin, not butter — it flavours the crust.'
    ],
    pair: ['Sweet mint tea', 'Arabic coffee', 'Fresh apricots'],
    store: 'An airtight tin for 5 days; it stays moist because of the oil. It freezes for 2 months.',
    nut: [310, 5, 45, 12, 2, 22, 180]
  },

  'meghli': {
    d: 'A dark spiced rice pudding made to celebrate a birth, soaked in caraway, anise and cinnamon and buried under soaked nuts. Served cold, and not sweet in the way you expect.',
    meta: 'A dark spiced rice pudding of caraway, anise and cinnamon, chilled and buried under soaked nuts and coconut.',
    kw: ['meghli', 'lebanese spiced pudding', 'meghli recipe', 'caraway rice pudding', 'birth celebration dessert'],
    why: 'The spices are the dish, and they have to simmer for a full forty-five minutes to move from raw and dusty to smooth and rounded — a shorter cook leaves caraway tasting like a seed rather than a spice. The nuts are soaked overnight rather than toasted, which sounds wrong and is not: soaking swells them and makes them soft and milky, which is the traditional contrast against the dense spiced pudding underneath.',
    ing: [
      '150 g ground rice',
      '250 g caster sugar',
      '2 tbsp ground caraway',
      '1.5 tbsp ground anise',
      '1 tbsp ground cinnamon',
      '0.25 tsp ground nutmeg',
      '1.5 litres water',
      '# To finish',
      '60 g walnut halves',
      '60 g blanched almonds',
      '50 g pine nuts',
      '40 g desiccated coconut'
    ],
    st: [
      'Soak the walnuts, almonds and pine nuts in cold water in separate bowls for at least 480 minutes, or overnight.',
      'Whisk the ground rice, sugar and all the spices with 500 ml of the water until completely smooth and lump-free.',
      'Stir in the remaining litre of water and bring to the boil over medium heat, whisking continuously.',
      'Once it boils, lower the heat and cook 45 minutes, stirring every few minutes, until it is thick, glossy and very dark brown.',
      'Pour into small glasses or bowls and leave to cool to room temperature, then chill until cold and set.',
      'Drain the soaked nuts and pat them dry.',
      'Cover the surface of each glass thickly with coconut, then pile the soaked nuts on top and serve cold.'
    ],
    rest: [480, 'soaking the nuts'],
    tips: [
      'A full 45 minutes of simmering. Undercooked spices taste raw.',
      'Soak the nuts, do not toast them. Soft and milky is the point.',
      'Whisk continuously as it comes to the boil or it catches.'
    ],
    pair: ['Arabic coffee', 'Sweet tea', 'Fresh dates'],
    store: 'Refrigerated for 4 days; add the nuts and coconut only when serving. Do not freeze.',
    nut: [245, 4, 44, 6, 3, 26, 15]
  },

  'jallab': {
    d: 'Date and grape molasses loosened with rose water and iced, then floated with soaked pine nuts and raisins. Sold on every corner in summer and eaten as much as drunk.',
    meta: 'Date and grape molasses loosened with rose water over crushed ice, floated with soaked pine nuts and raisins.',
    kw: ['jallab', 'lebanese date drink', 'jallab recipe', 'date molasses drink', 'middle eastern summer drink'],
    why: 'The pine nuts must be soaked, and for longer than seems necessary. Dropped in dry they sink, stay hard and taste of nothing; after a few hours in cold water they swell, soften and float on the surface, which is where they belong and how the drink is recognised. Build it over ice rather than chilling it in advance too — jallab should be poured cold onto crushed ice so it stays layered for a moment before anyone stirs it.',
    ing: [
      '6 tbsp date molasses',
      '2 tbsp grape molasses',
      '1 tbsp rose water',
      '1 tsp orange blossom water',
      '700 ml cold water',
      '# To finish',
      '4 tbsp pine nuts',
      '3 tbsp golden raisins',
      'Crushed ice'
    ],
    st: [
      'Put the pine nuts and raisins in a bowl of cold water and leave them to swell for at least 3 hours. The nuts should float and give when pressed.',
      'Whisk the date molasses, grape molasses, rose water and orange blossom water together until smooth.',
      'Add the cold water and whisk again. Taste — it should be sweet but distinctly savoury underneath, not like a cordial.',
      'Adjust with more water if it is too intense, or a little more date molasses if it is thin.',
      'Fill four tall glasses with crushed ice and pour the jallab over.',
      'Drain the soaked nuts and raisins and spoon them over the top, where they will float.',
      'Serve with a long spoon as well as a straw.'
    ],
    rest: [180, 'soaking the pine nuts'],
    tips: [
      'Soak the pine nuts for hours. Dry ones sink and stay hard.',
      'Pour over ice rather than pre-chilling.',
      'Taste before serving — molasses brands vary a lot in sweetness.'
    ],
    pair: ['Ka\'ak bil simsim', 'Salted pistachios', 'A hot afternoon'],
    store: 'The base mix keeps refrigerated for a week. Soak the nuts fresh on the day.',
    nut: [195, 2, 42, 3, 2, 38, 25]
  }
};
