'use strict';

/**
 * Volume forty-two — frozen desserts, brownies and vegan bakes.
 *
 * No-churn ice creams and fruit sorbets, a strawberry cream roll, vegan
 * cakes, cookies and cheesecake, brownies made with courgette, avocado,
 * black beans and chickpeas, and two dessert sauces. Times are the recipe's
 * own; freezing and chilling are declared as rest. Nutrition is estimated
 * from the ingredient list by npm run calc.
 */

module.exports = {
  'strawberry-cream-roll': {
    d: 'A light whisked sponge rolled around whipped cream and sliced strawberries.',
    meta: 'Strawberry cream roll: a light whisked sponge rolled around whipped cream and strawberries. Ten slices, baked for 12 minutes.',
    kw: ['strawberry cream roll', 'strawberry roll cake', 'strawberries and cream sponge roll', 'strawberry swiss roll', 'strawberry cream sponge roll'],
    why: 'The first sign it is right is the smell of warm vanilla sponge: eggs, sugar and flour, nothing more. The sponge is very thin, which is what lets it bend.\n\nWhisk the eggs and sugar for 8 minutes until they are pale, thick and leave a ribbon on the surface. Whisking is the only raising agent here. **Fold in the flour with a large metal spoon, in two goes.** A whisk or a wooden spoon knocks out the air that you have just spent 8 minutes putting in.\n\nSpread the batter into a lined 23 by 33 cm tin and bake at 190°C for 12 minutes, until golden and springy. If your oven runs hot, check at 9 minutes. Turn it out onto a clean tea towel dusted with sugar and roll the towel and sponge together while hot.\n\nWhen cold, unroll, spread with the whipped cream, scatter with sliced strawberries and roll again, without the towel. Chill for 30 minutes before slicing with a serrated knife.',
    ing: [
      '4 eggs, about 200 g',
      '100 g caster sugar',
      '100 g plain flour',
      '1 tsp vanilla extract',
      '2 tbsp caster sugar for the towel',
      '250 ml double cream',
      '2 tbsp icing sugar',
      '200 g strawberries, hulled and sliced'
    ],
    st: [
      'Heat the oven to 190°C and line a 23 by 33 cm tin. Whisk the eggs, 100 g sugar and vanilla for 8 minutes until pale and thick.',
      'Fold in the flour in two goes. Spread in the tin and bake for 12 minutes until golden and springy.',
      'Turn onto a tea towel dusted with the 2 tbsp sugar, roll up with the towel and cool.',
      'Whip the cream with the icing sugar. Unroll the sponge, spread with the cream, scatter over the strawberries and roll up. Chill for 30 minutes.'
    ],
    tips: [
      'Whisk until the mixture leaves a ribbon.',
      'Fold with a metal spoon.',
      'If your oven runs hot, check at 9 minutes.',
      'Slice with a serrated knife.'
    ],
    pair: ['Hot tea', 'Fresh strawberries', 'Sparkling wine', 'Strong coffee'],
    store: 'Keeps in the fridge for 2 days.',
    nut: [215, 4, 25, 11, 1, 17, 30]
  },

  'strawberry-ice-cream': {
    d: 'A no-churn ice cream of whipped cream, condensed milk and mashed strawberries, frozen until scoopable.',
    meta: 'Strawberry ice cream: a no-churn ice cream of whipped cream, condensed milk and strawberries. Eight servings, frozen for 6 hours.',
    kw: ['strawberry ice cream', 'no churn strawberry ice cream', 'homemade strawberry ice cream', 'strawberry ice cream without a machine', 'easy strawberry ice cream'],
    why: 'Mash the strawberries with sugar and leave them for a few minutes. That is the quick tip for this ice cream, and it makes the fruit taste of more.\n\nThere is no machine and no custard. Whipped cream supplies the air that a churn would, and condensed milk supplies the sweetness and keeps the ice cream soft when frozen. **Whip the cream to stiff peaks before anything else goes in.** Soft cream collapses when the fruit is folded in, and the ice cream freezes to a solid block.\n\nCrush the strawberries to a rough puree and drain off a little of the juice, since too much liquid freezes into ice crystals. Fold the puree and the condensed milk gently into the cream, keeping as much air in as you can.\n\nSpoon into a loaf tin, cover and freeze for 6 hours. Take it out of the freezer 10 minutes before scooping. The ice cream is soft and creamy, not rock hard, and keeps for a month.',
    ing: [
      '400 ml double cream',
      '200 g sweetened condensed milk',
      '300 g strawberries, hulled',
      '2 tbsp caster sugar',
      '1 tsp vanilla extract'
    ],
    st: [
      'Mash the strawberries with the sugar and leave for 10 minutes. Drain off a little of the juice.',
      'Whip the cream with the vanilla until stiff peaks form.',
      'Fold the condensed milk and strawberries gently into the cream.',
      'Spoon into a loaf tin, cover and freeze for 6 hours.'
    ],
    tips: [
      'Whip the cream until stiff.',
      'Drain some of the juice.',
      'Fold gently.',
      'Take out of the freezer 10 minutes before scooping.'
    ],
    pair: ['Wafers', 'Fresh strawberries', 'Brownies', 'Waffles'],
    store: 'Keeps in the freezer for 1 month.',
    rest: [360, 'Freezing'],
    nut: [276, 3, 21, 20, 1, 20, 50]
  },

  'chocolate-ice-cream': {
    d: 'A no-churn ice cream of whipped cream, condensed milk, cocoa and melted dark chocolate, frozen until scoopable.',
    meta: 'Chocolate ice cream: a no-churn ice cream with cocoa and dark chocolate. Eight servings, cooked for 5 minutes and frozen for 6 hours.',
    kw: ['chocolate ice cream', 'no churn chocolate ice cream', 'homemade chocolate ice cream', 'chocolate ice cream without a machine', 'rich chocolate ice cream'],
    why: 'Chocolate, cream, condensed milk: four ingredients that you probably have, and an ice cream with no machine and no custard. It is a recipe for anyone who has never made ice cream.\n\nThe chocolate has to be melted and cooled before it goes near the cream. Warm chocolate melts the whipped cream, and the air that makes the ice cream soft is gone. **Cool the chocolate until it is barely warm to the touch.** That takes about 10 minutes after melting.\n\nWhisk the cocoa into the condensed milk until smooth, then stir in the cooled chocolate. Whip the cream to stiff peaks in a separate bowl and fold the two together in three parts, gently, so that the cream keeps its volume.\n\nSpoon into a tin, level the top, cover and freeze for 6 hours. Let it stand for 10 minutes at room temperature before scooping. The cocoa gives a bitter edge that stops the ice cream from being too sweet.',
    ing: [
      '400 ml double cream',
      '200 g sweetened condensed milk',
      '40 g cocoa powder',
      '100 g dark chocolate, chopped',
      '1 tsp vanilla extract',
      '1 pinch salt'
    ],
    st: [
      'Melt the chocolate gently for 5 minutes and cool until barely warm.',
      'Whisk the cocoa, condensed milk, vanilla and salt until smooth. Stir in the cooled chocolate.',
      'Whip the cream to stiff peaks. Fold in the chocolate mixture in three parts.',
      'Spoon into a loaf tin, level the top, cover and freeze for 6 hours.'
    ],
    tips: [
      'Cool the chocolate first.',
      'Whip the cream to stiff peaks.',
      'Fold gently.',
      'Let it soften slightly before scooping.'
    ],
    pair: ['Wafers', 'Fresh raspberries', 'Brownies', 'Salted caramel sauce'],
    store: 'Keeps in the freezer for 1 month.',
    rest: [360, 'Freezing'],
    nut: [349, 5, 26, 25, 3, 21, 70]
  },

  'mango-sorbet': {
    d: 'Frozen mango blended with sugar and lime juice into a smooth sorbet.',
    meta: 'Mango sorbet: frozen mango blended with sugar and lime juice. Six servings, frozen for 1 hour.',
    kw: ['mango sorbet', 'easy mango sorbet', 'homemade mango sorbet', 'three ingredient mango sorbet', 'mango sorbet without a machine'],
    why: 'The mango does everything. A mango has so much fibre and sugar that, once frozen and blended, it turns into a sorbet with no need for a machine or a syrup.\n\nUse frozen chunks straight from the freezer bag. Fresh mango needs to be cut up and frozen for at least 4 hours first, so frozen is quicker. Allow the chunks to stand for 5 minutes before blending, until the edges look slightly wet. **Blend in short bursts and push the fruit down with a spoon.** The mixture is thick, and the blades can spin without catching.\n\nAdd the sugar and lime juice and blend until smooth and creamy. The lime is what keeps the flavour bright and stops the mango from tasting flat.\n\nServe it straight from the blender as a soft-serve, or spoon it into a tin and freeze for 1 hour for a firmer scoop. If it is too hard, let it stand for 5 minutes. A splash of coconut milk makes it creamier.',
    ing: [
      '600 g frozen mango chunks',
      '60 g caster sugar',
      '2 tbsp lime juice',
      '50 ml cold water'
    ],
    st: [
      'Let the mango chunks stand for 5 minutes at room temperature.',
      'Blend the mango, sugar, lime juice and water in short bursts, pushing the fruit down, until smooth.',
      'Serve at once as soft-serve, or spoon into a tin and freeze for 1 hour for a firmer scoop.'
    ],
    tips: [
      'Let the mango thaw slightly.',
      'Blend in short bursts.',
      'Add lime to keep the flavour bright.',
      'Freeze for an hour for a firmer sorbet.'
    ],
    pair: ['Fresh berries', 'Coconut wafers', 'Lime wedges', 'Sparkling wine'],
    store: 'Best the same day. Keeps in the freezer for 1 week; let it soften before scooping.',
    nut: [104, 1, 25, 0, 2, 24, 5]
  },

  'lemon-sorbet': {
    d: 'A sharp, smooth sorbet of lemon juice and zest in a sugar syrup, stirred as it freezes.',
    meta: 'Lemon sorbet: a sharp, smooth sorbet of lemon juice and zest in a sugar syrup. Six servings, frozen for 5 hours.',
    kw: ['lemon sorbet', 'homemade lemon sorbet', 'italian lemon sorbet', 'lemon sorbet without a machine', 'easy lemon sorbet'],
    why: 'It is a palate cleanser, a dessert and a summer treat, and it is one of the few recipes where there is no cream to hide behind. The lemon has to taste of lemon.\n\nThe syrup is sugar and water, warmed until the sugar has dissolved, about 5 minutes, then cooled completely. A warm syrup freezes slowly and forms large crystals. **Add the zest and juice only when the syrup is cold.** Heat dulls the fresh scent of lemon.\n\nPour the mixture into a shallow container and freeze. The shallow depth lets it freeze quickly. Every hour for the first 3 hours, break up the crystals with a fork and stir the ice to the middle. This is the step that gives a smooth texture, in place of a machine.\n\nAfter 5 hours the sorbet should be firm and fine-grained. Scoop it into chilled glasses and serve with a sprig of mint. If it is too hard, let it stand for 5 minutes. A spoonful of vodka in the syrup keeps it softer, but is not necessary.',
    ing: [
      '200 g caster sugar',
      '300 ml water',
      '4 lemons, zest of 2 and juice of 4, about 200 ml'
    ],
    st: [
      'Warm the sugar and water in a pan over low heat for 5 minutes, stirring until dissolved. Cool completely.',
      'Stir in the lemon zest and juice. Pour into a shallow freezer container.',
      'Freeze for 5 hours, breaking up the crystals with a fork and stirring every hour for the first 3 hours.',
      'Scoop into chilled glasses.'
    ],
    tips: [
      'Cool the syrup first.',
      'Stir the ice every hour.',
      'Use a shallow container.',
      'Serve in chilled glasses.'
    ],
    pair: ['Fresh mint', 'Shortbread', 'Sparkling wine', 'Fresh berries'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [300, 'Freezing'],
    nut: [144, 0, 36, 0, 1, 34, 5]
  },

  'sweet-potato-biscuits': {
    d: 'Soft, fluffy biscuits made with mashed sweet potato, buttermilk and a little brown sugar.',
    meta: 'Sweet potato biscuits: soft, fluffy biscuits made with mashed sweet potato and buttermilk. Makes twelve, baked for 18 minutes.',
    kw: ['sweet potato biscuits', 'southern sweet potato biscuits', 'fluffy sweet potato biscuits', 'sweet potato biscuits with buttermilk', 'homemade sweet potato biscuits'],
    why: 'Fold, do not knead. That is the single most useful instruction for any biscuit, and sweet potato makes it more important, because the dough is stickier than usual.\n\nMash the cooked sweet potato until completely smooth and let it cool. Warm potato melts the butter and the biscuits are heavy. Rub cold butter into the flour until it looks like coarse crumbs, then stir in the potato and buttermilk. **Use just enough buttermilk to bring the dough together.** The potato adds moisture, so you may not need it all.\n\nTurn the dough onto a floured surface and pat it out to 3 cm thick. Fold it in half, pat it flat again, and repeat once. These folds make layers. Cut with a floured cutter, pressing straight down, with no twisting.\n\nBake close together on a tray at 220°C for 18 minutes. If your oven runs hot, check at 14 minutes. Brush with melted butter as they come out and eat while warm.',
    ing: [
      '250 g plain flour',
      '1 tbsp baking powder',
      '1 tbsp soft light brown sugar',
      '1/2 tsp salt',
      '100 g cold butter, cubed',
      '200 g cooked sweet potato, mashed and cooled',
      '80 ml buttermilk',
      '20 g butter, melted, for brushing'
    ],
    st: [
      'Heat the oven to 220°C and line a tray. Mix the flour, baking powder, brown sugar and salt, then rub in the cold butter until crumbly.',
      'Stir in the sweet potato and enough buttermilk to make a soft dough.',
      'Pat out to 3 cm thick on a floured surface, fold in half, pat flat and fold once more. Cut 12 rounds with a 6 cm cutter.',
      'Set close together on the tray and bake for 18 minutes until golden. Brush with the melted butter.'
    ],
    tips: [
      'Cool the mashed potato.',
      'Do not knead the dough.',
      'If your oven runs hot, check at 14 minutes.',
      'Cut straight down.'
    ],
    pair: ['Butter', 'Honey', 'Fried chicken', 'Hot coffee'],
    store: 'Best on the day. Keeps in a tin for 2 days and reheats in a 160°C oven for 6 minutes.',
    nut: [168, 3, 21, 8, 1, 2, 250]
  },

  'traybake-brownies': {
    d: 'A large tray of fudgy chocolate brownies, cut into twenty squares.',
    meta: 'Traybake brownies: a large tray of fudgy chocolate brownies, baked for 30 minutes. Twenty squares.',
    kw: ['traybake brownies', 'chocolate traybake brownies', 'fudgy brownies for a crowd', 'large tray brownies', 'british traybake brownies'],
    why: 'Most home versions come out as chocolate cake, and the fix is to underbake them. A brownie is done when it still looks slightly wet in the middle, because it carries on setting as it cools.\n\nThis is a bigger recipe than most, for a shallow 23 by 33 cm tin, so it feeds a party or a school fete. The method is the usual one: melt the butter and chocolate, beat in the sugar and eggs, fold in the flour and cocoa. **Beat the eggs and sugar for a full 3 minutes.** That is what gives the shiny, papery crust that people look for.\n\nSpread the batter evenly, since a tray bake cooks fast at the edges and slowly in the middle. Bake at 175°C for 30 minutes. If your oven runs hot, check at 24 minutes. The edge should be set and the middle should still wobble very slightly.\n\nCool completely in the tin, ideally for 2 hours, and cut into 20 with a hot knife. Cold brownies slice cleanly and warm ones smear.',
    ing: [
      '250 g butter',
      '250 g dark chocolate',
      '300 g caster sugar',
      '4 eggs, about 200 g',
      '150 g plain flour',
      '40 g cocoa powder',
      '1/2 tsp salt',
      '100 g chocolate chips'
    ],
    st: [
      'Heat the oven to 175°C and line a 23 by 33 cm tin. Melt the butter and chocolate together and cool for 5 minutes.',
      'Beat the sugar and eggs for 3 minutes until pale and thick. Fold in the chocolate mixture.',
      'Fold in the flour, cocoa, salt and chocolate chips. Spread evenly in the tin.',
      'Bake for 30 minutes until the edge is set and the middle still wobbles slightly. Cool completely, then cut into 20.'
    ],
    tips: [
      'Beat the eggs and sugar well.',
      'Underbake slightly.',
      'If your oven runs hot, check at 24 minutes.',
      'Cut with a hot knife.'
    ],
    pair: ['Vanilla ice cream', 'Cold milk', 'Hot coffee', 'Fresh raspberries'],
    store: 'Keeps in an airtight tin for 5 days.',
    nut: [280, 3, 31, 16, 2, 21, 80]
  },

  'vegan-brownies': {
    d: 'Fudgy dark chocolate brownies made without eggs or dairy, using ground flaxseed and oil.',
    meta: 'Vegan brownies: fudgy dark chocolate brownies made without eggs or dairy. Sixteen pieces, baked for 30 minutes.',
    kw: ['vegan brownies', 'easy vegan brownies', 'fudgy vegan brownies', 'egg free dairy free brownies', 'vegan chocolate brownies'],
    why: 'Mix the flax first. That is the quick tip, and the thing that makes brownies work without eggs.\n\nGround flaxseed, stirred with water and left for 5 minutes, turns into a thick gel that binds the batter in much the same way as an egg. Stir it well and wait until it is as slimy as raw egg white. **Do not skip the wait.** If the gel is thin, the brownies crumble when cut.\n\nThe rest is simple. Oil gives the fudgy texture that butter usually does, and plant milk loosens the batter. Use a good dark chocolate that is dairy-free, since many brands contain milk fat. The batter will be thick, closer to a dough than a pour, so spread it into a lined 20 cm tin with a spatula.\n\nBake at 175°C for 30 minutes. If your oven runs hot, check at 24 minutes. The top will be cracked and the middle slightly soft. Cool completely before cutting, since vegan brownies firm up a great deal as they cool.',
    ing: [
      '2 tbsp ground flaxseed',
      '6 tbsp water',
      '150 g plain flour',
      '40 g cocoa powder',
      '200 g caster sugar',
      '1/2 tsp baking powder',
      '1/2 tsp salt',
      '100 ml sunflower oil',
      '60 ml oat milk',
      '1 tsp vanilla extract',
      '100 g dairy-free dark chocolate chips'
    ],
    st: [
      'Stir the flaxseed with the water and leave for 5 minutes until gelled. Heat the oven to 175°C and line a 20 cm square tin.',
      'Mix the flour, cocoa, sugar, baking powder and salt.',
      'Add the flax gel, oil, oat milk and vanilla and stir to a thick batter. Fold in the chocolate chips.',
      'Spread in the tin and bake for 30 minutes. Cool completely before cutting into 16.'
    ],
    tips: [
      'Let the flax gel fully.',
      'Use dairy-free chocolate.',
      'If your oven runs hot, check at 24 minutes.',
      'Cool before cutting.'
    ],
    pair: ['Oat milk', 'Coconut ice cream', 'Hot coffee', 'Fresh raspberries'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [189, 2, 25, 9, 2, 16, 90]
  },

  'vegan-cheesecake': {
    d: 'A no-bake cheesecake of cashews, coconut cream and lemon on a date and almond base, set in the freezer.',
    meta: 'Vegan cheesecake: a no-bake cashew and coconut cheesecake on a date and almond base. Ten slices, frozen for 4 hours.',
    kw: ['vegan cheesecake', 'no bake vegan cheesecake', 'vegan cashew cheesecake', 'cashew cheesecake', 'vegan lemon cheesecake'],
    why: 'Cashews, coconut, lemon, maple: four ingredients that, with a blender, make something that looks and slices like cheesecake. The cashews are what give the creamy body.\n\nSoak the cashews in boiling water for 30 minutes first. Soft cashews blend to a smooth cream, while hard ones leave a gritty texture that no amount of blending will fix. Drain them well before they go in the blender. **Blend for a full 3 minutes, scraping down.** That is the difference between a silky filling and a grainy one.\n\nThe base is dates and almonds, pressed together in a food processor until they clump. Press it into the tin with the back of a spoon. Melted coconut oil in the filling is what sets it solid in the freezer.\n\nPour the filling over the base and freeze for 4 hours, until firm. Take it out for 20 minutes before cutting. Serve with fresh berries, and keep the leftovers in the freezer.',
    ing: [
      '150 g almonds',
      '150 g pitted dates',
      '300 g cashews',
      '150 ml coconut cream',
      '60 ml lemon juice',
      '80 ml maple syrup',
      '60 g coconut oil, melted',
      '1 tsp vanilla extract',
      '200 g fresh berries'
    ],
    st: [
      'Cover the cashews with boiling water and soak for 30 minutes. Drain well.',
      'Process the almonds and dates until they clump. Press into the base of a lined 20 cm springform tin.',
      'Blend the cashews, coconut cream, lemon juice, maple syrup, coconut oil and vanilla for 3 minutes until completely smooth.',
      'Pour over the base and freeze for 4 hours. Stand for 20 minutes before cutting and top with the berries.'
    ],
    tips: [
      'Soak the cashews in boiling water.',
      'Blend until silky.',
      'Press the base down firmly.',
      'Let it thaw for 20 minutes before cutting.'
    ],
    pair: ['Fresh berries', 'Coconut yoghurt', 'Hot coffee', 'Mint tea'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [240, 'Freezing'],
    nut: [455, 10, 34, 31, 5, 21, 10]
  },

  'vegan-chocolate-cake': {
    d: 'A moist, dark chocolate cake made without eggs or dairy, using oat milk, oil and a splash of vinegar.',
    meta: 'Vegan chocolate cake: a moist, dark chocolate cake with oat milk and oil. Twelve slices, baked for 35 minutes.',
    kw: ['vegan chocolate cake', 'easy vegan chocolate cake', 'chocolate cake with oat milk', 'egg free chocolate cake', 'moist vegan chocolate cake'],
    why: 'The first sign it is ready is the smell: hot cocoa and sugar. It is a one-bowl cake, and the whole method fits in four steps.\n\nThe vinegar is the secret to the rise. It reacts with the bicarbonate of soda in the batter and makes bubbles that lift the cake without eggs. Stir it into the milk last, just before the wet goes into the dry, so that the reaction happens in the oven. **Work quickly once the vinegar is in.** The fizz fades after a few minutes.\n\nOil gives a moist crumb that stays soft for days, and oat milk gives a neutral flavour that lets the cocoa show. Sift the cocoa to remove lumps, since cocoa does not dissolve easily once it clumps.\n\nPour into two lined 18 cm tins, or one deeper tin, and bake at 175°C for 35 minutes. If your oven runs hot, check at 28 minutes. Cool completely before icing or dusting.',
    ing: [
      '300 g plain flour',
      '50 g cocoa powder',
      '250 g caster sugar',
      '1 1/2 tsp bicarbonate of soda',
      '1 tsp baking powder',
      '1/2 tsp salt',
      '300 ml oat milk',
      '100 ml sunflower oil',
      '1 tbsp white wine vinegar',
      '1 tsp vanilla extract'
    ],
    st: [
      'Heat the oven to 175°C and line two 18 cm tins. Sift the flour, cocoa, sugar, bicarbonate, baking powder and salt into a bowl.',
      'Stir the vinegar into the oat milk, then add it with the oil and vanilla to the dry mixture. Whisk quickly until smooth.',
      'Divide between the tins and bake for 35 minutes until a skewer comes out clean.',
      'Cool completely in the tins before turning out.'
    ],
    tips: [
      'Sift the cocoa.',
      'Add the vinegar last.',
      'If your oven runs hot, check at 28 minutes.',
      'Cool before icing.'
    ],
    pair: ['Coconut cream', 'Fresh raspberries', 'Hot coffee', 'Oat milk'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [273, 4, 44, 9, 2, 22, 310]
  },

  'vegan-cookies': {
    d: 'Chewy cookies made with dairy-free butter, oat milk and dark chocolate chips, with no egg.',
    meta: 'Vegan cookies: chewy dairy-free chocolate chip cookies with no egg. Makes eighteen, baked for 12 minutes.',
    kw: ['vegan cookies', 'vegan chocolate chip cookies', 'easy vegan cookies', 'egg free dairy free cookies', 'chewy vegan cookies'],
    why: 'Most vegan cookies come out cakey or dry, and the fix is brown sugar and a short bake. Brown sugar holds moisture and gives the chew that an egg would add.\n\nCream the dairy-free butter with the sugars for 2 minutes until the mixture is light, then stir in the oat milk and vanilla. The oat milk takes the place of the egg, and it is only a few spoonfuls. **Add the flour all at once and stop mixing as soon as it vanishes.** Overmixing develops gluten and gives tough cookies.\n\nFold in the chocolate chips, using a brand without milk powder, and roll the dough into 18 balls. Set them well apart on lined trays and flatten slightly.\n\nBake at 180°C for 12 minutes, until the edges are golden and the centres still look soft. If your oven runs hot, check at 9 minutes. They firm up on the tray, so leave them for 5 minutes before moving them.',
    ing: [
      '100 g dairy-free butter, softened',
      '120 g soft light brown sugar',
      '50 g caster sugar',
      '60 ml oat milk',
      '1 tsp vanilla extract',
      '200 g plain flour',
      '1/2 tsp bicarbonate of soda',
      '1/4 tsp salt',
      '120 g dairy-free dark chocolate chips'
    ],
    st: [
      'Heat the oven to 180°C and line two trays. Beat the dairy-free butter with the sugars for 2 minutes. Stir in the oat milk and vanilla.',
      'Add the flour, bicarbonate and salt and stir just until combined. Fold in the chocolate chips.',
      'Roll into 18 balls, set them 5 cm apart and flatten slightly.',
      'Bake for 12 minutes until the edges are golden. Cool on the tray for 5 minutes.'
    ],
    tips: [
      'Use brown sugar for chew.',
      'Do not overmix.',
      'If your oven runs hot, check at 9 minutes.',
      'Leave them to firm up on the tray.'
    ],
    pair: ['Oat milk', 'Coconut ice cream', 'Hot coffee', 'Hot tea'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [159, 2, 22, 7, 1, 13, 70]
  },

  'zucchini-chocolate-cake': {
    d: 'A moist chocolate cake made with grated zucchini and dotted with chocolate chips.',
    meta: 'Zucchini chocolate cake: a moist chocolate cake made with grated zucchini and chocolate chips. Twelve slices, baked for 45 minutes.',
    kw: ['zucchini chocolate cake', 'chocolate zucchini cake', 'courgette chocolate cake', 'moist zucchini chocolate cake', 'chocolate cake with zucchini'],
    why: 'It looks like a chocolate cake and tastes like one, and the zucchini disappears into the crumb. This is the cake for people who have too many courgettes from the garden.\n\nGrate the zucchini finely and squeeze it dry in a clean tea towel. The vegetable is mostly water, and wet zucchini makes a heavy, gummy cake. **Squeeze until the towel feels damp, not wet.** What stays behind keeps the cake moist for days without making it soggy.\n\nWhisk the oil, sugar and eggs until pale, add the buttermilk, then the zucchini. Fold in the dry ingredients and the chocolate chips. The batter is thick, so spoon it into a lined 23 cm tin and level it.\n\nBake at 175°C for 45 minutes. If your oven runs hot, check at 36 minutes. A skewer should come out clean or with a few damp crumbs. Cool in the tin and serve plain or with a simple chocolate glaze.',
    ing: [
      '250 g zucchini, finely grated',
      '300 g plain flour',
      '50 g cocoa powder',
      '1 tsp bicarbonate of soda',
      '1 tsp baking powder',
      '1/2 tsp salt',
      '250 g caster sugar',
      '120 ml sunflower oil',
      '2 eggs, about 100 g',
      '120 ml buttermilk',
      '80 g chocolate chips'
    ],
    st: [
      'Heat the oven to 175°C and line a 23 cm round tin. Squeeze the grated zucchini dry in a tea towel.',
      'Whisk the sugar, oil and eggs until pale. Stir in the buttermilk and zucchini.',
      'Fold in the flour, cocoa, bicarbonate, baking powder and salt, then the chocolate chips. Pour into the tin.',
      'Bake for 45 minutes until a skewer comes out clean. Cool in the tin.'
    ],
    tips: [
      'Squeeze the zucchini dry.',
      'Grate it finely.',
      'If your oven runs hot, check at 36 minutes.',
      'Cool before cutting.'
    ],
    pair: ['Whipped cream', 'Vanilla ice cream', 'Hot coffee', 'Cold milk'],
    store: 'Keeps in an airtight tin for 4 days.',
    nut: [299, 5, 45, 11, 3, 22, 270]
  },

  'avocado-brownies': {
    d: 'Fudgy brownies made with mashed avocado in place of most of the butter.',
    meta: 'Avocado brownies: fudgy brownies made with mashed avocado and dark chocolate. Sixteen pieces, baked for 28 minutes.',
    kw: ['avocado brownies', 'fudgy avocado brownies', 'chocolate avocado brownies', 'brownies made with avocado', 'avocado chocolate brownies'],
    why: 'Autumn is when avocados come into their best, and so, oddly, is this brownie. The fruit takes the place of butter and gives a dense, silky, fudgy crumb.\n\nUse avocados that are properly ripe and dark, so that the flesh mashes to a smooth cream with no stringy bits. Blend them with the melted chocolate in a food processor for a full minute. **Any lumps of avocado will show as green flecks.** Blend until nothing is left to see.\n\nBeat in the sugar and eggs, then fold in the flour and cocoa. The batter is thicker than usual brownie batter, and should be spread into the tin with a spatula. A brownie that is much stiffer than this will bake dry.\n\nBake at 175°C for 28 minutes. If your oven runs hot, check at 22 minutes. The top should be set and the middle soft. Cool completely and chill for an hour. The avocado gives a faint green tinge to the crumb but no taste.',
    ing: [
      '2 ripe avocados, about 300 g flesh',
      '150 g dark chocolate',
      '150 g caster sugar',
      '2 eggs, about 100 g',
      '60 g plain flour',
      '30 g cocoa powder',
      '1 tsp vanilla extract',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the oven to 175°C and line a 20 cm square tin. Melt the chocolate and cool for 5 minutes.',
      'Blend the avocado flesh and melted chocolate in a food processor for 1 minute until completely smooth.',
      'Beat in the sugar, eggs and vanilla, then fold in the flour, cocoa and salt. Spread in the tin.',
      'Bake for 28 minutes. Cool completely, chill for 1 hour and cut into 16.'
    ],
    tips: [
      'Use very ripe avocados.',
      'Blend until no flecks remain.',
      'If your oven runs hot, check at 22 minutes.',
      'Chill before cutting.'
    ],
    pair: ['Cold milk', 'Fresh raspberries', 'Hot coffee', 'Vanilla ice cream'],
    store: 'Keeps in the fridge for 3 days.',
    rest: [60, 'Chilling'],
    nut: [155, 2, 21, 7, 3, 14, 50]
  },

  'black-bean-brownies': {
    d: 'Dense, fudgy brownies made from blended black beans, cocoa and dark chocolate chips.',
    meta: 'Black bean brownies: dense, fudgy brownies made from blended black beans and cocoa. Sixteen pieces, baked for 28 minutes.',
    kw: ['black bean brownies', 'fudgy black bean brownies', 'brownies made with black beans', 'flourless black bean brownies', 'black bean chocolate brownies'],
    why: 'The first sign it is ready is the smell, and it is only chocolate. The beans are in the batter and nothing about the finished brownie suggests them.\n\nDrain and rinse a tin of black beans, then blend them with the eggs, oil and sugar until the mixture is perfectly smooth. **Blend for longer than you think is needed.** Any piece of bean skin that survives will show in the crumb as a dark speck, and the texture will be coarse.\n\nStir in the cocoa and baking powder, and fold in the chocolate chips. The batter is thick and shiny and looks very like brownie batter. Spread it into a lined 20 cm tin and scatter a few extra chips over the top.\n\nBake at 175°C for 28 minutes. If your oven runs hot, check at 22 minutes. They will look slightly underdone, and that is correct, since the beans keep the middle soft. Cool completely in the tin and chill for 1 hour before cutting.',
    ing: [
      '240 g drained tinned black beans',
      '3 eggs, about 150 g',
      '80 ml sunflower oil',
      '150 g caster sugar',
      '40 g cocoa powder',
      '1 tsp baking powder',
      '1 tsp vanilla extract',
      '100 g chocolate chips'
    ],
    st: [
      'Heat the oven to 175°C and line a 20 cm square tin. Rinse and drain the black beans.',
      'Blend the beans, eggs, oil, sugar and vanilla for 2 minutes until perfectly smooth.',
      'Stir in the cocoa and baking powder, then fold in 80 g of the chocolate chips. Spread in the tin and scatter with the remaining chips.',
      'Bake for 28 minutes. Cool completely, chill for 1 hour and cut into 16.'
    ],
    tips: [
      'Rinse the beans well.',
      'Blend until completely smooth.',
      'If your oven runs hot, check at 22 minutes.',
      'Chill before cutting.'
    ],
    pair: ['Cold milk', 'Vanilla ice cream', 'Hot coffee', 'Fresh raspberries'],
    store: 'Keeps in the fridge for 4 days.',
    rest: [60, 'Chilling'],
    nut: [126, 3, 15, 6, 2, 10, 90]
  },

  'chickpea-brownies': {
    d: 'Soft, fudgy brownies made with blended chickpeas, peanut butter, cocoa and maple syrup.',
    meta: 'Chickpea brownies: soft, fudgy brownies made with blended chickpeas, peanut butter and cocoa. Sixteen pieces, baked for 28 minutes.',
    kw: ['chickpea brownies', 'fudgy chickpea brownies', 'brownies made with chickpeas', 'peanut butter chickpea brownies', 'chickpea chocolate brownies'],
    why: 'It is a brownie for a gathering where someone has asked what is in it, and someone else has said they would rather not know. The chickpeas supply the body, and the peanut butter hides any beany note.\n\nRinse the chickpeas well, to wash off the liquid they were packed in, and drain them thoroughly. Blend them with the peanut butter, maple syrup and eggs for 2 minutes until the mixture is as smooth as cake batter. **Taste the batter before baking.** If you can taste chickpea, blend for another minute and add a spoonful of cocoa.\n\nStir in the cocoa and baking powder and fold in most of the chocolate chips. Spread in a lined 20 cm tin and press the last chips into the top.\n\nBake at 175°C for 28 minutes. If your oven runs hot, check at 22 minutes. The surface should be dry and the centre just set. Cool in the tin for 30 minutes and chill before cutting, as these brownies firm up considerably.',
    ing: [
      '240 g drained tinned chickpeas',
      '100 g smooth peanut butter',
      '100 g maple syrup',
      '2 eggs, about 100 g',
      '30 g cocoa powder',
      '1 tsp baking powder',
      '1 tsp vanilla extract',
      '80 g chocolate chips'
    ],
    st: [
      'Heat the oven to 175°C and line a 20 cm square tin. Rinse and drain the chickpeas.',
      'Blend the chickpeas, peanut butter, maple syrup, eggs and vanilla for 2 minutes until smooth.',
      'Stir in the cocoa and baking powder, then fold in 50 g of the chocolate chips. Spread in the tin and press the remaining chips into the top.',
      'Bake for 28 minutes. Cool for 30 minutes, chill and cut into 16.'
    ],
    tips: [
      'Rinse and drain the chickpeas.',
      'Blend until perfectly smooth.',
      'If your oven runs hot, check at 22 minutes.',
      'Chill before cutting.'
    ],
    pair: ['Cold milk', 'Banana slices', 'Hot coffee', 'Vanilla ice cream'],
    store: 'Keeps in the fridge for 4 days.',
    nut: [105, 4, 11, 5, 2, 5, 90]
  },

  'creme-anglaise': {
    d: 'A pouring custard of milk, egg yolks, sugar and vanilla, cooked gently until it coats a spoon.',
    meta: 'Creme anglaise: a pouring custard of milk, egg yolks, sugar and vanilla. Eight servings, cooked for 10 minutes.',
    kw: ['creme anglaise', 'classic creme anglaise', 'vanilla custard sauce', 'homemade creme anglaise', 'french pouring custard'],
    why: 'Is it a custard or scrambled egg? That is the whole question, and the answer is a matter of heat and patience.\n\nWarm the milk with the vanilla until steaming, then whisk it slowly into the yolks and sugar. This is called tempering, and it raises the temperature of the eggs gradually so that they do not scramble. **Stir constantly over low heat.** The sauce thickens at about 82°C, and above 85°C the eggs begin to curdle.\n\nCook for about 8 minutes, stirring in a figure of eight, until the sauce coats the back of a wooden spoon and a finger drawn across it leaves a clean line. Take it off the heat at once and pour it through a sieve into a cold jug, to stop the cooking.\n\nIf the sauce starts to curdle, plunge the pan base into cold water and whisk hard. Serve warm over a pudding or cold with fruit. Cover the surface with cling film to prevent a skin.',
    ing: [
      '500 ml milk',
      '2 tsp vanilla extract',
      '6 egg yolks, about 120 g',
      '80 g caster sugar',
      '1 pinch salt'
    ],
    st: [
      'Warm the milk with the vanilla in a pan over medium heat for 3 minutes until steaming.',
      'Whisk the egg yolks, sugar and salt in a bowl until pale. Pour in the hot milk in a thin stream, whisking.',
      'Return to the pan and cook over low heat for 8 minutes, stirring constantly, until the sauce coats the back of a spoon.',
      'Strain into a cold jug at once. Serve warm or cold.'
    ],
    tips: [
      'Stir all the time.',
      'Keep the heat low.',
      'Strain at once to stop the cooking.',
      'Cover the surface to prevent a skin.'
    ],
    pair: ['Apple crumble', 'Chocolate cake', 'Poached pears', 'Fresh berries'],
    store: 'Keeps in the fridge for 3 days.',
    nut: [130, 5, 14, 6, 0, 13, 50]
  },

  'sticky-toffee-sauce': {
    d: 'A thick toffee sauce of butter, dark brown sugar, cream and treacle, simmered until glossy.',
    meta: 'Sticky toffee sauce: a thick sauce of butter, dark brown sugar, cream and treacle. Eight servings, cooked for 10 minutes.',
    kw: ['sticky toffee sauce', 'homemade sticky toffee sauce', 'toffee sauce for puddings', 'british toffee sauce', 'dark toffee sauce with treacle'],
    why: 'Short, sharp and sweet: that is a toffee sauce. It is made in a single pan, in ten minutes, and it turns any plain pudding into something to remember.\n\nMelt the butter with the sugar and treacle over medium heat. The sugar must dissolve fully before the cream goes in, or the sauce is gritty. **Do not stir once it begins to bubble.** Swirl the pan instead, since stirring encourages crystals to form on the side of the pan and the sauce turns grainy.\n\nSimmer for 4 minutes, until it has deepened in colour and thickened slightly. Take it off the heat and pour in the cream, standing back, as it will spit. Whisk until smooth, then return to the heat for 2 minutes to reach a pouring consistency.\n\nPour warm over sticky toffee pudding, ice cream or sliced banana. Cooled sauce will firm up in the fridge and can be warmed gently with a spoonful of water. If your hob runs hot, lower the heat as soon as the bubbles appear.',
    ing: [
      '100 g butter',
      '150 g dark brown sugar',
      '2 tbsp black treacle',
      '150 ml double cream',
      '1 pinch salt'
    ],
    st: [
      'Melt the butter with the sugar, treacle and salt in a pan over medium heat, stirring until the sugar has dissolved.',
      'Bring to a bubble and simmer for 4 minutes without stirring, swirling the pan.',
      'Off the heat, pour in the cream and whisk until smooth. Simmer for 2 minutes more.',
      'Serve warm.'
    ],
    tips: [
      'Dissolve the sugar fully.',
      'Swirl instead of stirring once bubbling.',
      'If your hob runs hot, lower the heat.',
      'Stand back when adding the cream.'
    ],
    pair: ['Sticky toffee pudding', 'Vanilla ice cream', 'Sliced banana', 'Apple cake'],
    store: 'Keeps in the fridge for 2 weeks. Warm gently before serving.',
    nut: [245, 1, 22, 17, 0, 21, 40]
  }
};
