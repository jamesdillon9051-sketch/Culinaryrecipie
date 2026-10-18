'use strict';

/**
 * Volume fifty-six — no-bake desserts, ice creams, mug cakes and special-diet
 * sweets, first part.
 *
 * Twenty-five dishes: chocolate pots, a chocolate smoothie, coffee and mint
 * chocolate chip ice cream, blackberry and raspberry sorbet, fantasy fudge,
 * Italian ice, microwave rice pudding, four mug dishes (cheesecake, cornbread,
 * mac and cheese, omelette), no bake banana pudding, cheesecakes, energy
 * bites, Oreo dessert and trifle, no churn ice cream, an Oreo cheesecake,
 * penuche, popsicles, salted caramel ice cream and saltine toffee. Waits of
 * an hour or more are declared as rest. Nutrition is estimated by npm run
 * calc.
 */

module.exports = {
  'chocolate-pots': {
    d: 'Dark chocolate and cream whisked into silky pots de creme, poured into ramekins and chilled until set.',
    meta: 'Chocolate pots with dark chocolate and cream, chilled for 4 hours. Six servings, ready in 4 hours 25 minutes.',
    kw: ['chocolate pots', 'chocolate pots de creme', 'dark chocolate pots', 'chocolate pots with cream', 'silky chocolate pots'],
    why: 'Chocolate pots are the simplest dessert that ever looked impressive: dark chocolate melted into hot cream, a little egg yolk to set it, and a few hours in the fridge. The result is a smooth, dense, glossy custard that is closer to a truffle than a pudding, and a small ramekin is plenty.\n\nChoose the chocolate with care, since it is the main flavour. A bar with 70 per cent cocoa solids gives a deep, slightly bitter taste that balances the cream. Chop it finely so that it melts quickly and evenly in the hot liquid. Larger pieces can stay lumpy and leave the pots grainy.\n\n**Pour the hot cream over the chocolate and wait before stirring.** Leave it alone for two minutes so the heat reaches the centre of each piece, then stir in slow circles from the middle outwards until completely smooth. Whisking vigorously introduces air bubbles that dull the surface. A pinch of salt sharpens the flavour.\n\nAdd the egg yolks gently, one at a time, while the mixture is still warm but not hot, otherwise they scramble. Pour the mix into six small cups and chill for at least 4 hours. Take them out of the fridge 15 minutes before serving, and top with a spoonful of cream, a few raspberries or a sprinkle of sea salt.',
    ing: [
      '200 g dark chocolate, 70 per cent cocoa, finely chopped',
      '300 ml double cream',
      '100 ml whole milk',
      '3 egg yolks',
      '1 tbsp caster sugar',
      '1 tsp vanilla extract',
      '1/4 tsp salt',
      '100 g raspberries, to serve'
    ],
    st: [
      'Put the chocolate in a large heatproof bowl.',
      'Heat the cream and milk in a pan until it just begins to steam. Pour over the chocolate and leave for 2 minutes, then stir slowly until smooth.',
      'Whisk the egg yolks, sugar, vanilla and salt in a small bowl. Stir into the chocolate mixture until glossy.',
      'Pour into 6 small ramekins and tap gently to level.',
      'Chill for at least 4 hours until set. Serve with the raspberries.'
    ],
    tips: [
      'Chop the chocolate finely.',
      'Stir slowly to avoid air bubbles.',
      'Take the pots out 15 minutes before serving.'
    ],
    pair: ['Fresh raspberries', 'Whipped cream', 'Shortbread', 'Espresso'],
    store: 'Keeps in the fridge for 3 days, covered.',
    rest: [240, 'Chilling'],
    nut: [424, 7, 27, 32, 4, 21, 160]
  },

  'chocolate-smoothie': {
    d: 'A thick, cold smoothie of banana, cocoa, peanut butter and milk, blended in 5 minutes with ice.',
    meta: 'Chocolate smoothie with banana, cocoa and peanut butter, blended in 5 minutes. Two servings, ready in 5 minutes.',
    kw: ['chocolate smoothie', 'chocolate banana smoothie', 'chocolate peanut butter smoothie', 'cocoa smoothie with banana', 'thick chocolate smoothie'],
    why: 'Freeze the banana. This is the whole difference between a thin, milky drink and a thick, spoonable one that tastes like a milkshake. A banana sliced and frozen overnight blends into a creamy, ice-cream-like base without the need for any added ice, and it brings its own sweetness, so the drink needs little extra sugar.\n\nThe chocolate comes from cocoa powder, which has more flavour than chocolate syrup and none of the added sugar. Use unsweetened cocoa and add a spoonful of honey or maple syrup if the banana is not ripe enough. A pinch of salt makes the chocolate taste richer, in the way it does in a brownie, and a few drops of vanilla extract round out the flavour.\n\n**Add the liquid first.** Pour the milk into the blender before the frozen fruit, so that the blades turn freely and do not stall. Start on low and increase the speed gradually, stopping to scrape down the sides once. It takes about a minute to turn from lumpy to velvety.\n\nA spoonful of peanut butter makes it richer and more filling, and gives it a protein boost that carries you through to lunch. Pour into tall glasses and drink straight away, because it separates and thins as it warms.',
    ing: [
      '2 bananas, sliced and frozen, about 240 g',
      '250 ml cold milk',
      '2 tbsp unsweetened cocoa powder',
      '2 tbsp smooth peanut butter',
      '1 tbsp honey',
      '1/2 tsp vanilla extract',
      '1 pinch salt',
      '60 g ice'
    ],
    st: [
      'Pour the milk into a blender.',
      'Add the frozen banana slices, cocoa, peanut butter, honey, vanilla, salt and ice.',
      'Blend on low for 20 seconds, then on high for 1 minute until completely smooth.',
      'Taste and add a little more honey if needed.',
      'Pour into 2 glasses and serve at once.'
    ],
    tips: [
      'Freeze the bananas overnight.',
      'Put the liquid in the blender first.',
      'Drink it straight away.'
    ],
    pair: ['Granola', 'Toast', 'Fresh berries', 'Oat bar'],
    store: 'Best fresh. Keeps in the fridge for 1 day but separates.',
    nut: [357, 11, 49, 13, 6, 31, 140]
  },

  'coffee-ice-cream': {
    d: 'A rich custard ice cream infused with coffee beans, chilled for 4 hours, churned and frozen until scoopable.',
    meta: 'Coffee ice cream from a custard base infused with coffee beans, chilled and churned. Eight servings, ready in 9 hours 15 minutes, chilling included.',
    kw: ['coffee ice cream', 'homemade coffee ice cream', 'custard coffee ice cream', 'coffee bean ice cream', 'coffee ice cream recipe'],
    why: 'The first sign of a good coffee ice cream is its colour: a warm, pale tan, like milky coffee. The flavour comes from whole coffee beans steeped in hot cream, an old pastry-chef trick that gives a smooth, round taste without the bitterness of ground coffee. Instant coffee tastes thin by comparison.\n\nUse medium roast beans, lightly crushed to release their oils. Bring the cream and milk to a simmer, stir in the beans, cover the pan and leave for 30 minutes. The beans flavour the liquid as it cools. Strain through a fine sieve, pressing on the beans to extract every drop, and make up any lost volume with a splash of cream.\n\n**Temper the yolks slowly.** Whisk the yolks and sugar until pale, then pour a ladle of hot cream onto them while whisking, then another, before returning everything to the pan. Cook over low heat, stirring constantly with a spatula, until the custard coats the back of a spoon and reaches 80C. Any hotter and the eggs scramble.\n\nChill the custard for at least 4 hours, until completely cold, and churn it according to your machine until it looks like soft-serve. Transfer to a container, press baking paper on the surface and freeze for 4 hours until firm. Take it out of the freezer for 10 minutes before scooping.',
    ing: [
      '300 ml double cream',
      '300 ml whole milk',
      '40 g whole coffee beans, lightly crushed',
      '5 egg yolks',
      '120 g caster sugar',
      '1 tsp vanilla extract',
      '1/4 tsp salt'
    ],
    st: [
      'Heat the cream, milk and coffee beans to a simmer. Cover, turn off the heat and steep for 30 minutes. Strain, pressing on the beans.',
      'Whisk the egg yolks, sugar and salt until pale. Reheat the cream to steaming, then whisk a ladle into the yolks, then a second, and tip back into the pan.',
      'Cook over low heat, stirring, until the custard coats the back of a spoon and reaches 80C. Stir in the vanilla.',
      'Strain into a bowl and chill for 4 hours until completely cold.',
      'Churn in an ice cream machine until thick. Freeze in a lidded container for 4 hours.'
    ],
    tips: [
      'Steep the beans, do not boil them.',
      'Cook the custard to 80C and no further.',
      'Chill the base completely before churning.'
    ],
    pair: ['Chocolate brownies', 'Biscotti', 'Espresso', 'Caramel sauce'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [510, 'Chilling and freezing'],
    nut: [249, 6, 18, 17, 0, 18, 140]
  },

  'blackberry-sorbet': {
    untimed: ['cooling completely'],
    d: 'Fresh blackberries pureed with sugar syrup and lemon, strained of seeds, then churned and frozen for a deep purple sorbet.',
    meta: 'Blackberry sorbet with sugar syrup and lemon, strained and frozen for 4 hours. Six servings, ready in 4 hours 20 minutes.',
    kw: ['blackberry sorbet', 'fresh blackberry sorbet', 'homemade blackberry sorbet', 'blackberry sorbet with lemon', 'dairy free blackberry sorbet'],
    why: 'Blackberries ripen in late summer and early autumn, and a sorbet is one of the best ways to use a glut. The fruit has a deep, dark flavour, sharp and wine-like, and it freezes into a vivid purple scoop that is dairy-free and has nothing to hide behind. Quality of fruit is everything.\n\nStrain the puree. Blackberry seeds are small, hard and gritty, and they ruin the texture of an otherwise smooth sorbet. Blend the berries with a sugar syrup and lemon juice, then push the puree through a fine sieve with the back of a spoon, discarding the seeds. It takes five minutes of effort and the result is worth it.\n\n**Use a cooled sugar syrup.** Simmer equal weights of sugar and water for 2 minutes until clear, then let it cool completely. Sugar does more than sweeten a sorbet: it lowers the freezing point, so the mixture stays scoopable instead of freezing into a solid block of ice. Too little and the sorbet is rock hard; too much and it never sets.\n\nChill the strained mixture for 1 hour before churning, and freeze for at least 3 hours in a container. Without a machine, freeze in a shallow tray and beat with a fork every 45 minutes. Let it soften at room temperature for 5 minutes before scooping.',
    ing: [
      '500 g blackberries',
      '120 g caster sugar',
      '120 ml water',
      '2 tbsp lemon juice',
      '1 tbsp crème de cassis or water',
      '1 pinch salt'
    ],
    st: [
      'Simmer the sugar and water for 2 minutes until clear. Cool completely.',
      'Blend the blackberries, syrup, lemon juice, cassis and salt until smooth.',
      'Push the puree through a fine sieve, pressing with a spoon, and discard the seeds.',
      'Chill for 1 hour, then churn in an ice cream machine until thick.',
      'Freeze in a lidded container for 3 hours. Soften for 5 minutes before scooping.'
    ],
    tips: [
      'Sieve out the seeds for a smooth texture.',
      'Cool the syrup before blending.',
      'Do not reduce the sugar too much.'
    ],
    pair: ['Shortbread', 'Fresh berries', 'Lemon cake', 'Sparkling wine'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [240, 'Chilling and freezing'],
    nut: [120, 1, 29, 0, 4, 24, 30]
  },

  'fantasy-fudge': {
    d: 'A classic marshmallow fudge with chocolate chips, boiled for 4 minutes and set in a tin for 2 hours.',
    meta: 'Fantasy fudge with chocolate chips and marshmallow cream, boiled for 10 minutes and chilled. 36 squares, ready in 2 hours 20 minutes.',
    kw: ['fantasy fudge', 'marshmallow fudge', 'classic chocolate fudge', 'creamy chocolate marshmallow fudge', 'christmas fudge'],
    why: 'Fantasy Fudge was printed on the back of a jar of marshmallow cream in the 1970s and became an American Christmas fixture for decades. The recipe is a sugar syrup boiled with butter and evaporated milk, then poured over chocolate chips and marshmallow cream. It makes a smooth, rich, creamy fudge that sets without a sugar thermometer.\n\nThe only part that needs care is the boil. Stir the sugar, butter and evaporated milk constantly over medium heat until the mixture comes to a full rolling boil, which means a boil that does not stop when you stir it. Then keep it boiling for exactly 4 minutes, stirring all the while. Too short and the fudge never sets; too long and it turns grainy and hard.\n\n**Use a heavy-based pan with high sides.** The mixture bubbles up dramatically, and a thin pan can scorch the sugar on the bottom. Scrape the sides down with a wet pastry brush if sugar crystals form, which can cause the fudge to crystallise and go gritty.\n\nOff the heat, stir in the chocolate chips and marshmallow cream until smooth and glossy, then pour into a lined tin immediately. It starts to set within minutes. Chill for 2 hours and cut into squares with a sharp, oiled knife. Chopped walnuts are optional.',
    ing: [
      '300 g caster sugar',
      '150 ml evaporated milk',
      '60 g butter',
      '1/4 tsp salt',
      '300 g dark chocolate chips',
      '200 g marshmallow cream',
      '1 tsp vanilla extract'
    ],
    st: [
      'Line a 20 cm square tin with baking paper.',
      'Stir the sugar, evaporated milk, butter and salt in a heavy pan over medium heat until it comes to a rolling boil.',
      'Boil for exactly 4 minutes, stirring constantly.',
      'Off the heat, stir in the chocolate chips, marshmallow cream and vanilla until smooth and glossy.',
      'Pour into the tin and chill for 2 hours. Cut into 36 squares.'
    ],
    tips: [
      'Time the boil exactly: 4 minutes.',
      'Use a heavy pan with high sides.',
      'Oil the knife for clean cuts.'
    ],
    pair: ['Hot chocolate', 'Coffee', 'Hot tea', 'Walnuts'],
    store: 'Keeps in an airtight container for 2 weeks.',
    rest: [120, 'Chilling'],
    nut: [121, 1, 18, 5, 1, 16, 30]
  },

  'italian-ice': {
    untimed: ['cooling completely'],
    d: 'A smooth, intensely lemon-flavoured Italian ice made from fresh juice and sugar syrup, frozen and scraped every 45 minutes.',
    meta: 'Italian ice with lemon juice and sugar syrup, frozen for 4 hours. Six servings, ready in 4 hours 20 minutes.',
    kw: ['italian ice', 'lemon italian ice', 'homemade italian ice', 'granita style italian ice', 'italian ice recipe'],
    why: 'On a hot afternoon in New Jersey or Philadelphia, a paper cup of Italian ice is the answer to the heat: a smooth, cold, sweet scoop of crushed frozen fruit. It is not the same as a snow cone, whose ice is shaved and flavoured with syrup afterwards, nor a sorbet, which is churned and smooth. Italian ice is somewhere between them, with a finer, denser texture than a granita.\n\nThe base is a simple syrup, a cup of water with a cup of sugar, simmered for 2 minutes and cooled. Lemon juice, freshly squeezed and strained, goes in with the zest of the peel for aromatic oil. Fruit ices follow the same formula, replacing the lemon with strawberry, cherry or mango puree, so the recipe is endlessly adaptable.\n\n**Freeze it in a shallow container and rake it with a fork.** Every 45 minutes, scrape the freezing edges into the middle, breaking up the crystals. After about four hours you will have a bowl of fine, fluffy ice. Without raking, the mixture freezes in a solid block. For a smoother result, blend the frozen chunks in a food processor until slushy.\n\nServe immediately, because Italian ice melts fast. A little fresh mint or a squeeze of lime on top makes it taste even cooler.',
    ing: [
      '200 g caster sugar',
      '500 ml water',
      '200 ml fresh lemon juice, about 5 lemons',
      '2 lemons, zested',
      '1 pinch salt',
      '1 tbsp fresh mint, chopped'
    ],
    st: [
      'Simmer the sugar and 250 ml of the water for 2 minutes until clear. Cool completely.',
      'Stir in the remaining water, lemon juice, zest and salt. Taste: it should be sweet and tart.',
      'Pour into a shallow container.',
      'Freeze for 4 hours in total, scraping the frozen edges into the middle with a fork every 45 minutes until fine and fluffy.',
      'Serve at once, scattered with the mint.'
    ],
    tips: [
      'Rake the ice every 45 minutes.',
      'Serve right away.',
      'Taste the mixture before freezing: it will taste less sweet when frozen.'
    ],
    pair: ['Fresh berries', 'Sparkling water', 'Shortbread', 'Fresh mint'],
    store: 'Best the day it is made. Keeps in the freezer for 1 week but hardens.',
    rest: [240, 'Freezing'],
    nut: [148, 0, 37, 0, 1, 35, 30]
  },

  'microwave-rice-pudding': {
    d: 'Pudding rice, milk, sugar and nutmeg cooked in the microwave in stages for 15 minutes into a creamy, spoonable rice pudding.',
    meta: 'Microwave rice pudding with pudding rice, milk and nutmeg, cooked for 15 minutes. Four servings, ready in 20 minutes.',
    kw: ['microwave rice pudding', 'quick rice pudding', 'creamy rice pudding', 'rice pudding in the microwave', 'rice pudding with nutmeg'],
    why: 'A rice pudding without the hour at the hob is a useful thing. The microwave cooks pudding rice in milk in about 15 minutes, with no scorching and no constant stirring, though it needs three short breaks to stir and a large bowl to prevent boiling over. The result is creamy, comforting and tastes of childhood.\n\nUse pudding rice, also called round-grain or short-grain rice. Its high starch content is what makes the pudding thick and creamy. Long grain rice stays separate and gives a watery result. Use full-fat milk for richness, and do not rinse the rice, since the surface starch is wanted here.\n\n**Use a bowl at least three times the volume of the milk.** Milk froths and rises as it heats and boils over very quickly, covering the microwave with a sticky film. A deep casserole dish or large glass bowl is ideal. Cook at medium power, not high, which brings the milk to a gentle simmer without the surge.\n\nStir every 5 minutes, scraping the base, and the pudding will thicken as the grains soften. It will look too loose at the end but thickens further as it cools and the rice absorbs the last of the liquid. Finish with a grating of nutmeg and a spoon of jam or a knob of butter.',
    ing: [
      '100 g pudding rice',
      '600 ml whole milk',
      '3 tbsp caster sugar',
      '15 g butter',
      '1/4 tsp ground nutmeg',
      '1 tsp vanilla extract',
      '4 tbsp strawberry jam, to serve'
    ],
    st: [
      'Put the rice, milk, sugar and butter in a large microwave-safe bowl and stir.',
      'Microwave on medium power for 5 minutes. Stir well, scraping the base.',
      'Microwave for 5 minutes more on medium and stir again. Repeat for a final 5 minutes.',
      'Stir in the vanilla and leave for 5 minutes to thicken.',
      'Serve with a grating of nutmeg and the jam.'
    ],
    tips: [
      'Use a very large bowl.',
      'Stir every 5 minutes.',
      'Leave to rest: the pudding thickens as it cools.'
    ],
    pair: ['Strawberry jam', 'Stewed fruit', 'Cinnamon', 'Raisins'],
    store: 'Keeps in the fridge for 3 days. Stir in a splash of milk when reheating.',
    nut: [288, 7, 47, 8, 0, 26, 70]
  },

  'mint-chocolate-chip-ice-cream': {
    d: 'A fresh mint custard ice cream churned with chopped dark chocolate, chilled for 4 hours, then frozen until firm.',
    meta: 'Mint chocolate chip ice cream with real mint and dark chocolate, chilled and churned. Eight servings, ready in 9 hours 15 minutes, chilling included.',
    kw: ['mint chocolate chip ice cream', 'homemade mint chip ice cream', 'fresh mint ice cream with chocolate', 'mint chip custard ice cream', 'mint ice cream recipe'],
    why: 'Real mint ice cream is pale cream with a faint green-grey tint, not the bright green of the shop-bought kind, and the flavour is cooler and softer than any extract. It comes from steeping a big handful of fresh mint leaves in hot cream, a method that gives a clean herbal fragrance, as if you had crushed a leaf between your fingers.\n\nUse spearmint or garden mint rather than peppermint, which is more medicinal. Bruise about 40 g of leaves with the back of a knife to release the oils, and steep them in the hot cream and milk for 30 minutes, covered. Taste before straining: the flavour should be quite strong, since freezing dulls it. Squeeze the leaves hard to extract all the liquid.\n\n**Chill the chocolate chunks.** Chop dark chocolate into small pieces, about the size of a pea, and freeze them for 20 minutes. Added to the churning ice cream cold, they stay crisp and snap when bitten, where warm pieces melt and turn into smears. Fold them in during the last 30 seconds of churning.\n\nThe custard is made with egg yolks and cooked to 80C, then chilled for 4 hours before churning. Freeze for 4 hours more. A drop of natural green colouring is optional, and entirely cosmetic.',
    ing: [
      '300 ml double cream',
      '300 ml whole milk',
      '40 g fresh mint leaves',
      '5 egg yolks',
      '120 g caster sugar',
      '1/4 tsp salt',
      '120 g dark chocolate, chopped and frozen'
    ],
    st: [
      'Heat the cream and milk to a simmer. Add the bruised mint, cover and steep for 30 minutes. Strain, pressing hard on the leaves.',
      'Whisk the egg yolks, sugar and salt until pale. Reheat the cream until steaming and whisk a ladle into the yolks, then tip back into the pan.',
      'Cook over low heat, stirring, to 80C until it coats a spoon. Strain and chill for 4 hours.',
      'Churn until thick, adding the frozen chocolate for the last 30 seconds.',
      'Freeze in a lidded container for 4 hours.'
    ],
    tips: [
      'Use spearmint, not peppermint.',
      'Freeze the chocolate pieces first.',
      'Squeeze the leaves to extract the flavour.'
    ],
    pair: ['Brownies', 'Chocolate sauce', 'Wafer cones', 'Fresh strawberries'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [510, 'Chilling and freezing'],
    nut: [343, 7, 27, 23, 2, 25, 140]
  },

  'mug-cheesecake': {
    d: 'A single-serving cheesecake made in a mug with cream cheese, an egg yolk and a crushed biscuit base, cooked in the microwave for 2 minutes.',
    meta: 'Mug cheesecake with cream cheese and a biscuit base, microwaved for 2 minutes. One serving, ready in 7 minutes.',
    kw: ['mug cheesecake', 'microwave mug cheesecake', 'single serve cheesecake', 'cheesecake in a mug', 'mug cheesecake recipe'],
    why: 'Sometimes a craving for cheesecake needs an answer in five minutes and a single mug. This version is the answer: a smooth, rich, soft-set cheesecake made in a mug, with a buttery biscuit base, a cream cheese filling and a spoon of jam on top. It does not taste like a baked cheesecake, but it is close enough to satisfy.\n\nMix the base first. Crushed digestive biscuit and a teaspoon of melted butter pressed into the bottom of the mug form a solid layer. Press it down firmly with the back of a spoon, otherwise the filling soaks in and it turns soggy. For the filling, beat soft cream cheese with an egg yolk, sugar and vanilla until completely smooth, with no lumps.\n\n**Cook in short bursts at medium power.** Microwaves heat unevenly, and cheesecake filling can puff and then collapse, or turn rubbery at the edges. Thirty seconds at a time, up to four times, until the filling is set at the edges with a slight wobble in the middle. It firms up as it cools.\n\nLet it stand for 2 minutes and then chill in the fridge for 30 minutes if you have the patience. Top with jam, fruit or a drizzle of caramel. Use a large mug, because the filling rises as it heats.',
    ing: [
      '1 digestive biscuit, about 15 g, crushed',
      '1 tsp butter, melted',
      '50 g cream cheese, softened',
      '1 egg yolk',
      '2 tbsp caster sugar',
      '1/2 tsp vanilla extract',
      '1 tsp lemon juice',
      '1 tbsp strawberry jam'
    ],
    st: [
      'Mix the crushed biscuit with the melted butter and press firmly into the base of a large mug.',
      'Beat the cream cheese, egg yolk, sugar, vanilla and lemon juice until smooth. Spoon over the base.',
      'Microwave on medium power for 30 seconds. Stir gently, scraping the sides, and repeat for 2 further bursts of 30 seconds, until set at the edges.',
      'Leave to stand for 2 minutes.',
      'Top with the jam and eat warm or chilled.'
    ],
    tips: [
      'Press the base down firmly.',
      'Cook at medium power in short bursts.',
      'Use a large mug: the filling rises.'
    ],
    pair: ['Fresh strawberries', 'Coffee', 'Whipped cream', 'Hot tea'],
    store: 'Best eaten fresh, warm or cold.',
    nut: [493, 10, 48, 29, 1, 39, 290]
  },

  'mug-cornbread': {
    d: 'A single portion of cornbread made in a mug with cornmeal, flour and buttermilk, cooked in the microwave for 2 minutes.',
    meta: 'Mug cornbread with cornmeal and buttermilk, microwaved for 2 minutes. One serving, ready in 7 minutes.',
    kw: ['mug cornbread', 'microwave cornbread', 'single serving cornbread', 'cornbread in a mug', 'cornbread for one'],
    why: 'Chili for one, or a bowl of soup, needs something to eat alongside it, and a full pan of cornbread is too much. A mug of cornbread cooks in two minutes in the microwave, and it comes out surprisingly well: tender, golden and slightly sweet, with the gritty crumb that cornmeal gives.\n\nThe batter is simple. Cornmeal and plain flour in equal parts, baking powder, a spoonful of sugar, a pinch of salt, an egg yolk, and buttermilk or milk with a little vinegar to give a tang. Melted butter adds richness. Mix it in the mug itself, with a fork, until just combined, then let it stand for 2 minutes so the cornmeal softens.\n\n**Use a tall, wide mug and fill it only halfway.** The batter rises as it cooks and will spill over the top in a smaller or fuller vessel. A cup of around 350 ml is ideal. Grease the inside with a little butter so the cornbread slides out cleanly.\n\nMicrowave for 90 seconds to 2 minutes, depending on the power of your microwave. The top should look dry and spring back when touched. If the middle is still wet, add 15 seconds at a time. Turn out onto a plate, split and butter it, or eat it straight from the mug with a spoon.',
    ing: [
      '3 tbsp fine cornmeal',
      '3 tbsp plain flour',
      '1/2 tsp baking powder',
      '1 tsp caster sugar',
      '1 pinch salt',
      '1 egg yolk',
      '3 tbsp buttermilk',
      '1 tbsp butter, melted',
      '1 tsp butter, for the mug'
    ],
    st: [
      'Grease a 350 ml mug with the 1 tsp butter.',
      'Mix the cornmeal, flour, baking powder, sugar and salt in the mug.',
      'Stir in the egg yolk, buttermilk and melted butter until just combined. Leave for 2 minutes.',
      'Microwave on high for 90 seconds, then check: the top should be dry and spring back. Add 15 seconds if the middle is wet.',
      'Leave to stand for 1 minute, then eat from the mug or turn out.'
    ],
    tips: [
      'Fill the mug only halfway.',
      'Let the batter rest for 2 minutes.',
      'Check at 90 seconds.'
    ],
    pair: ['Chili', 'Soup', 'Honey butter', 'Baked beans'],
    store: 'Best eaten at once.',
    nut: [494, 14, 60, 22, 4, 7, 510]
  },

  'mug-mac-and-cheese': {
    d: 'Macaroni, milk and grated cheddar cooked together in a mug in the microwave for 4 minutes into a creamy single serving.',
    meta: 'Mug mac and cheese cooked in the microwave in 4 minutes. One serving, ready in 9 minutes.',
    kw: ['mug mac and cheese', 'microwave mac and cheese in a mug', 'single serving mac and cheese', 'macaroni cheese for one', 'quick mac and cheese in a mug'],
    why: 'A bowl of macaroni cheese for one needs no pot and no draining. This version cooks the pasta and the sauce together in a single mug, using the pasta starch to thicken the milk into a creamy coating in about four minutes. It is the dish for a student, for a desk lunch with a microwave or for a late supper.\n\nUse small elbow macaroni, which cooks quickly and fits the mug. Large pasta takes longer than the sauce can last. Cover the pasta just barely with water and milk in equal parts, and add a pinch of salt. The water softens the pasta, the milk gives richness, and a pinch of mustard powder sharpens the cheese flavour.\n\n**Stir halfway and again at the end.** The pasta clumps in the first minute if left alone, and the starch settles at the bottom. Cook for 2 minutes, stir, and cook for a further 2, watching in case it bubbles over. Use a large mug or a bowl, since the mixture froths.\n\nStir in the grated cheese off the heat and mix until it melts into a glossy sauce. If it is too thick, loosen with a splash of milk. If it is too thin, leave it for a minute, and it will thicken as it sits. Top with pepper or a few crushed crackers.',
    ing: [
      '40 g elbow macaroni',
      '60 ml water',
      '60 ml milk',
      '1 pinch salt',
      '1 pinch mustard powder',
      '40 g mature cheddar, grated',
      '1/4 tsp black pepper'
    ],
    st: [
      'Put the macaroni, water, milk, salt and mustard powder in a large mug and stir.',
      'Microwave on high for 2 minutes, stir well, then microwave for a further 2 minutes until the pasta is tender.',
      'Stir in the cheddar until melted and glossy.',
      'Leave for 1 minute to thicken, loosening with a splash of milk if needed.',
      'Season with the pepper and eat from the mug.'
    ],
    tips: [
      'Use small elbow macaroni.',
      'Stir halfway through.',
      'Add the cheese off the heat.'
    ],
    pair: ['Green salad', 'Hot sauce', 'Crispy bacon', 'Steamed broccoli'],
    store: 'Best eaten at once.',
    nut: [348, 17, 34, 16, 2, 4, 450]
  },

  'mug-omelette': {
    d: 'Two eggs, cheddar, ham and chives whisked in a mug and microwaved for 2 minutes into a puffed, set omelette.',
    meta: 'Mug omelette with eggs, cheddar and ham, microwaved for 2 minutes. One serving, ready in 7 minutes.',
    kw: ['mug omelette', 'microwave omelette in a mug', 'single serving omelette', 'omelette in a mug', 'breakfast mug omelette'],
    why: 'A hot breakfast in two minutes, made in the dish you will drink your coffee from. A mug omelette is a more forgiving version of the real thing, with no flipping and no pan to wash, and it puffs up in the microwave into a soft, cloud-like block that fills the mug to the brim.\n\nWhisk the eggs hard with a splash of milk until completely uniform, with no streaks of white. The milk adds steam, which helps the omelette puff up. A pinch of salt and pepper is enough, since the ham and cheddar bring their own seasoning. Dice the ham small, and use grated cheese rather than slices, which clumps.\n\n**Grease the mug well.** Eggs stick fiercely to ceramic, and a film of butter on the inside makes the omelette slide out in one piece. If you want to eat it from the mug, a quick spray of oil is enough.\n\nMicrowave for 45 seconds, stir, and cook for another 45 seconds, then check. The top should look dry and the centre should have lost its wobble. Stand for 30 seconds to finish setting. The omelette will sink slightly as it cools, which is normal. Top with chives and a dash of hot sauce.',
    ing: [
      '2 eggs',
      '2 tbsp milk',
      '30 g ham, diced',
      '30 g cheddar, grated',
      '1 tbsp chives, chopped',
      '1 pinch salt',
      '1 pinch black pepper',
      '1 tsp butter, for the mug'
    ],
    st: [
      'Grease a 350 ml mug with the butter.',
      'Whisk the eggs, milk, salt and pepper in the mug until uniform.',
      'Stir in the ham, cheddar and half of the chives.',
      'Microwave on high for 45 seconds, stir, then microwave for a further 45 seconds until set.',
      'Stand for 30 seconds, scatter with the remaining chives and eat from the mug.'
    ],
    tips: [
      'Whisk the eggs thoroughly.',
      'Grease the mug well.',
      'Stir halfway for even cooking.'
    ],
    pair: ['Buttered toast', 'Hot sauce', 'Fresh fruit', 'Coffee'],
    store: 'Best eaten straight away.',
    nut: [345, 27, 3, 25, 0, 2, 850]
  },

  'no-bake-banana-pudding': {
    d: 'Layers of vanilla wafers, sliced banana and vanilla custard cream chilled for 4 hours in a trifle dish.',
    meta: 'No bake banana pudding with vanilla wafers and cream, chilled for 4 hours. Eight servings, ready in 4 hours 20 minutes.',
    kw: ['no bake banana pudding', 'southern banana pudding', 'banana pudding with vanilla wafers', 'layered banana pudding', 'banana pudding no bake'],
    why: 'Southern banana pudding is the dessert of church suppers and family reunions, a layered mix of vanilla wafers, banana slices and a cold vanilla cream. This no bake version uses instant pudding mix and whipped cream, which makes it fast and entirely free of the oven. It does need to sit for a few hours in the fridge, and that waiting is the real work.\n\nWhy does it need so long? The vanilla wafers are crisp when they go in and soften as they absorb moisture from the cream, turning into a tender, cake-like layer. Four hours is the minimum, and overnight is better. A pudding that has just been assembled has crunchy biscuits and a loose cream, and does not yet taste of the dish.\n\n**Slice the bananas just before layering.** Bananas oxidise and turn brown within an hour of being cut, and a few drops of lemon juice help but do not stop it. Use ripe but firm bananas that are yellow with a few flecks, since green ones are starchy and overripe ones turn to mush.\n\nWhip the cream to soft peaks, fold it into the pudding mixture until just combined, and layer in a glass dish, wafers on the bottom, then bananas, then cream, repeating three times. Crush a few wafers over the top and cover with cling film while it chills.',
    ing: [
      '100 g instant vanilla pudding mix',
      '500 ml cold whole milk',
      '400 g sweetened condensed milk',
      '300 ml double cream, whipped to soft peaks',
      '1 tsp vanilla extract',
      '250 g vanilla wafers',
      '4 ripe bananas, sliced',
      '1 tbsp lemon juice'
    ],
    st: [
      'Whisk the pudding mix with the cold milk for 2 minutes. Whisk in the condensed milk and vanilla and chill for 5 minutes.',
      'Fold in the whipped cream until just combined.',
      'Toss the banana slices with the lemon juice.',
      'In a 3 litre dish, layer wafers, bananas and cream, repeating 3 times and finishing with cream. Crush a few wafers over the top.',
      'Cover and chill for at least 4 hours.'
    ],
    tips: [
      'Chill for at least 4 hours.',
      'Slice the bananas just before layering.',
      'Fold the cream in gently.'
    ],
    pair: ['Fresh strawberries', 'Coffee', 'Hot tea', 'Whipped cream'],
    store: 'Keeps in the fridge for 2 days; the bananas darken.',
    rest: [240, 'Chilling'],
    nut: [403, 7, 51, 19, 2, 45, 110]
  },

  'no-bake-cheesecake': {
    d: 'A creamy no bake cheesecake of cream cheese, whipped cream and lemon on a buttery biscuit base, set in the fridge for 6 hours.',
    meta: 'No bake cheesecake with a biscuit base and lemon cream filling, chilled for 6 hours. Ten servings, ready in 7 hours, chilling included.',
    kw: ['no bake cheesecake', 'easy no bake cheesecake', 'cream cheese no bake cheesecake', 'lemon no bake cheesecake', 'chilled cheesecake'],
    why: 'A no bake cheesecake sets with cold, not heat, and that changes how it should be made. The filling contains no eggs, so it relies on the cream cheese and whipped cream to hold their shape, and on a few hours in the fridge to firm up. The finished cake is lighter and fluffier than a baked one, with a clean, tangy flavour.\n\nThe biscuit base is crushed digestives and melted butter, pressed into a lined 20 cm springform tin and chilled for 30 minutes while you make the filling. Press it hard, using the back of a spoon or the flat bottom of a glass, and bring it up the sides a little. A loose base crumbles when you cut the cake.\n\n**Beat the cream cheese until completely smooth before adding anything else.** Cold cream cheese stays lumpy no matter how much you whip it, so take it out of the fridge an hour early. Beat in the icing sugar, lemon zest and juice. Whip the cream separately to soft peaks and fold it in gently, in two additions, so as not to knock out the air.\n\nSpoon the filling over the base, smooth the top and chill for at least 6 hours. The lemon juice thickens the cream cheese, which is why this cheesecake sets without gelatine. Top with fresh fruit or a spoonful of jam just before serving.',
    ing: [
      '250 g digestive biscuits, crushed',
      '100 g butter, melted',
      '600 g full-fat cream cheese, at room temperature',
      '120 g icing sugar',
      '2 lemons, zested and juiced',
      '1 tsp vanilla extract',
      '300 ml double cream',
      '200 g strawberries, to serve'
    ],
    st: [
      'Mix the biscuit crumbs with the melted butter and press firmly into the base of a lined 20 cm springform tin. Chill for 30 minutes.',
      'Beat the cream cheese until smooth. Beat in the icing sugar, lemon zest, lemon juice and vanilla.',
      'Whip the cream to soft peaks and fold into the cream cheese mixture in 2 additions.',
      'Spoon over the base and smooth the top.',
      'Chill for at least 6 hours until firm. Serve with the strawberries.'
    ],
    tips: [
      'Use room temperature cream cheese.',
      'Press the base down firmly.',
      'Chill for at least 6 hours.'
    ],
    pair: ['Fresh strawberries', 'Fruit coulis', 'Coffee', 'Hot tea'],
    store: 'Keeps in the fridge for 4 days.',
    rest: [390, 'Chilling'],
    nut: [556, 6, 34, 44, 1, 21, 320]
  },

  'no-bake-cherry-cheesecake': {
    d: 'A cold set cheesecake on a biscuit base, topped with glossy cherry pie filling and chilled for 6 hours.',
    meta: 'No bake cherry cheesecake with cherry pie filling on top, chilled for 6 hours. Ten servings, ready in 7 hours, chilling included.',
    kw: ['no bake cherry cheesecake', 'cherry topped cheesecake', 'cheesecake with cherry pie filling', 'chilled cherry cheesecake', 'easy cherry cheesecake'],
    why: 'Early summer, when cherries are cheap and the oven is better left off, is the moment for this one. A no bake cheesecake with a topping of glossy cherries is the dessert that looks as though it needed an afternoon of work and did not, and it is a staple at picnics and summer gatherings.\n\nThe filling is quite different from the lemon version. It contains cream cheese, condensed milk and whipped cream, without any lemon juice to thicken it, so it needs a little gelatine or a longer chilling time to set firm. Here, a tin of sweetened condensed milk provides both sweetness and structure, and the mixture sets as it chills.\n\n**Cool the cherry topping before spooning it over.** A warm topping melts the surface of the cheesecake and bleeds red into the cream. Use a good quality cherry pie filling, or make your own by simmering cherries with sugar, lemon juice and cornflour for 8 minutes until glossy, then chilling it.\n\nSpread the topping over the set cheesecake just before serving, or an hour beforehand. Left overnight it makes the surface wet. Remove the sides of the tin by running a warm knife around the edge first, and cut with a knife dipped in hot water.',
    ing: [
      '250 g digestive biscuits, crushed',
      '100 g butter, melted',
      '500 g full-fat cream cheese, at room temperature',
      '200 g sweetened condensed milk',
      '1 tsp vanilla extract',
      '300 ml double cream, whipped to soft peaks',
      '400 g cherry pie filling'
    ],
    st: [
      'Mix the biscuit crumbs and melted butter and press into a lined 20 cm springform tin. Chill for 30 minutes.',
      'Beat the cream cheese until smooth. Beat in the condensed milk and vanilla.',
      'Fold in the whipped cream in 2 additions. Spoon over the base and smooth the top.',
      'Chill for at least 6 hours until firm.',
      'Spoon the cherry pie filling over the top just before serving.'
    ],
    tips: [
      'Use room temperature cream cheese.',
      'Top with the cherries shortly before serving.',
      'Warm the knife for clean slices.'
    ],
    pair: ['Fresh cherries', 'Coffee', 'Whipped cream', 'Sparkling wine'],
    store: 'Keeps in the fridge for 3 days.',
    rest: [390, 'Chilling'],
    nut: [570, 7, 41, 42, 1, 26, 320]
  },

  'no-bake-energy-bites': {
    d: 'Oats, peanut butter, honey, chia seeds and chocolate chips rolled into 20 balls and chilled, with no cooking at all.',
    meta: 'No bake energy bites with oats, peanut butter and chocolate chips, made in 35 minutes. 20 bites, no cooking.',
    kw: ['no bake energy bites', 'peanut butter oat energy balls', 'energy bites with chocolate chips', 'healthy snack balls', 'oat and honey energy bites'],
    why: 'Four ingredients hold them together, and a few more give them flavour. Rolled oats provide the bulk and a chewy texture, peanut butter and honey act as the glue, and a handful of chocolate chips and chia seeds finish them. Nothing is cooked, and the whole batch takes about fifteen minutes to make.\n\nThe ratio is what matters. A good rule is two parts oats to one part nut butter to one part honey, by volume, which makes a dough that holds together when squeezed. If the mixture is too dry and crumbly, add a spoonful of honey or nut butter. If it is sticky and wet, add a few more oats. It should feel like a firm cookie dough.\n\n**Chill the mixture for 20 minutes before rolling.** The oats absorb moisture from the honey and nut butter, which firms up the dough and makes it much easier to shape. Wet your hands lightly for rolling, so the dough does not stick to your fingers.\n\nRoll into balls about the size of a walnut, and keep them in the fridge. They make a convenient snack, a quick breakfast on the go, or a pre-run bite. Substitute almond butter, seeds, dried cranberries or coconut flakes for variety.',
    ing: [
      '150 g rolled oats',
      '120 g smooth peanut butter',
      '80 g honey',
      '40 g dark chocolate chips',
      '2 tbsp chia seeds',
      '2 tbsp ground flaxseed',
      '1 tsp vanilla extract',
      '1/4 tsp salt'
    ],
    st: [
      'Mix the oats, peanut butter, honey, chocolate chips, chia seeds, flaxseed, vanilla and salt in a large bowl until combined.',
      'Chill the mixture for 20 minutes.',
      'With damp hands, roll into 20 balls, each about the size of a walnut.',
      'Place on a tray lined with greaseproof paper.',
      'Keep in an airtight container in the fridge.'
    ],
    tips: [
      'Chill the mixture before rolling.',
      'Add more oats if the mixture is too sticky.',
      'Keep them in the fridge.'
    ],
    pair: ['Fresh fruit', 'Coffee', 'Yogurt', 'Hot tea'],
    store: 'Keeps in the fridge for 1 week, or frozen for 2 months.',
    nut: [101, 3, 11, 5, 2, 5, 30]
  },

  'no-bake-oreo-dessert': {
    d: 'Layers of crushed Oreo biscuits, sweetened cream cheese and whipped cream chilled in a dish for 4 hours until set.',
    meta: 'No bake Oreo dessert with layers of cream cheese and crushed biscuits, chilled for 4 hours. 12 servings, ready in 4 hours 20 minutes.',
    kw: ['no bake oreo dessert', 'oreo lasagna dessert', 'layered oreo dessert', 'oreo cream cheese dessert', 'chocolate cookie dessert no bake'],
    why: 'Two ingredients provide the structure, and the rest is cream. An Oreo dessert layers crushed chocolate sandwich biscuits with a sweetened cream cheese mixture and finishes with whipped cream, and it sets in the fridge into a dessert that can be cut into squares. It is a classic at American potlucks and a hit with children.\n\nCrush the biscuits in a food processor, or in a freezer bag with a rolling pin, to coarse crumbs with some chunky pieces left. Use the whole biscuit, filling and all, as the cream adds to the cream cheese layer. Save a handful for the top. Press two thirds of the crumbs, mixed with a little melted butter, into the base of a 23 by 33 cm dish.\n\n**Beat the cream cheese until it is perfectly smooth.** Cold cream cheese gives a lumpy layer, so leave it out for an hour and beat it with the icing sugar and a spoonful of milk. Fold in half of the whipped cream, which lightens the mixture and makes it spreadable. A thick layer is easier to spread with an offset spatula.\n\nSpread the cream cheese layer over the crumbs, top with the remaining whipped cream, and scatter the reserved crumbs. Chill for at least 4 hours. The biscuits soften into a cake-like layer as they absorb moisture, which is what gives this dessert its texture.',
    ing: [
      '36 Oreo biscuits, about 400 g, crushed',
      '60 g butter, melted',
      '250 g cream cheese, at room temperature',
      '100 g icing sugar',
      '2 tbsp milk',
      '1 tsp vanilla extract',
      '450 ml double cream, whipped to soft peaks',
      '30 g dark chocolate, grated'
    ],
    st: [
      'Mix three quarters of the crushed biscuits with the melted butter and press into the base of a 23 by 33 cm dish.',
      'Beat the cream cheese, icing sugar, milk and vanilla until completely smooth.',
      'Fold in a third of the whipped cream. Spread evenly over the crumb base.',
      'Spread the remaining whipped cream on top. Scatter with the reserved crumbs and grated chocolate.',
      'Chill for at least 4 hours before cutting into 12 squares.'
    ],
    tips: [
      'Use the whole biscuit, filling included.',
      'Beat the cream cheese until smooth.',
      'Chill for at least 4 hours.'
    ],
    pair: ['Cold milk', 'Coffee', 'Fresh strawberries', 'Hot chocolate'],
    store: 'Keeps in the fridge for 3 days.',
    rest: [240, 'Chilling'],
    nut: [444, 4, 35, 32, 1, 24, 210]
  },

  'no-bake-trifle': {
    d: 'A layered trifle of sponge fingers, fruit, custard and whipped cream assembled in a glass bowl and chilled for 4 hours.',
    meta: 'No bake trifle with sponge, fruit, custard and cream, chilled for 4 hours. Ten servings, ready in 4 hours 25 minutes.',
    kw: ['no bake trifle', 'classic english trifle', 'sponge custard and fruit trifle', 'christmas trifle', 'layered trifle with cream'],
    why: 'A trifle is a dish for a table full of people, built in a glass bowl so that every layer shows, and the British have been making versions of it since at least the sixteenth century. It started as a thick cream flavoured with sugar and ginger, and over the centuries gained sponge, fruit and custard. Now it is a fixture of the Christmas table.\n\nThe layers are straightforward. The base is sponge fingers, or a sliced plain cake, soaked in sherry or fruit juice. Next comes a layer of fruit, raspberries or tinned peaches, then thick custard, and finally whipped cream. The custard needs to be cool and thick, almost solid, or it runs into the sponge and makes a muddy layer. Chilling it for an hour before assembling helps.\n\n**Soak the sponge properly, but do not drown it.** Brush or drizzle the sherry or juice over the fingers until they are damp all through, but not soggy. They will continue to absorb liquid from the layers above as the trifle sits, so a light hand is best. Skip the alcohol for children and use orange juice.\n\nBuild the trifle at least 4 hours ahead, or the day before. The flavours blend and the sponge melts into the custard in the way that makes a trifle taste like a trifle. Add the cream and decorations only just before serving.',
    ing: [
      '200 g sponge fingers',
      '100 ml sweet sherry or orange juice',
      '300 g raspberries',
      '2 tbsp raspberry jam',
      '500 g ready-made custard, chilled',
      '300 ml double cream',
      '2 tbsp icing sugar',
      '1 tsp vanilla extract',
      '30 g flaked almonds'
    ],
    st: [
      'Line the base of a 2 litre glass bowl with the sponge fingers. Drizzle over the sherry or juice.',
      'Spread the jam over the sponge, then scatter over the raspberries.',
      'Spoon the chilled custard over the fruit and smooth the top.',
      'Cover and chill for at least 4 hours.',
      'Whip the cream with the icing sugar and vanilla and spread over the custard. Scatter with the flaked almonds.'
    ],
    tips: [
      'Chill the custard before layering.',
      'Soak the sponge without drowning it.',
      'Add the cream just before serving.'
    ],
    pair: ['Sparkling wine', 'Coffee', 'Hot tea', 'Dessert wine'],
    store: 'Keeps in the fridge for 2 days without the cream topping.',
    rest: [240, 'Chilling'],
    nut: [291, 5, 34, 15, 3, 22, 70]
  },

  'no-churn-ice-cream': {
    d: 'Whipped double cream folded with sweetened condensed milk and vanilla, frozen for 6 hours into a scoopable ice cream with no machine.',
    meta: 'No churn ice cream with cream and condensed milk, frozen for 6 hours. Eight servings, ready in 6 hours 15 minutes.',
    kw: ['no churn ice cream', 'two ingredient vanilla ice cream', 'ice cream without a machine', 'condensed milk ice cream', 'homemade vanilla ice cream no churn'],
    why: 'Why does this ice cream not need a machine? Because whipped cream has air in it and condensed milk has sugar in it, and between them they do the two jobs an ice cream maker does: aerating the mixture and keeping the ice crystals small. Freeze them together and the result is smooth and scoopable, without being a block of ice.\n\nThe cream must be cold, ideally straight from the fridge, and the bowl and whisk chilled in the freezer for 10 minutes beforehand. Whip it to stiff peaks. Soft peaks collapse when the condensed milk is folded in, and the ice cream turns dense and sticky. The cream should hold its shape when you lift the whisk out, with the tips standing straight.\n\n**Fold, do not stir.** Fold the condensed milk into the cream in two additions, using a large spatula and cutting down through the middle, then sweeping up the side. Stirring knocks the air out. Add the vanilla and a pinch of salt, which makes the flavour clearer.\n\nPour into a loaf tin lined with greaseproof paper, press a sheet of paper on the surface to stop ice crystals forming, and freeze for 6 hours. Take it out 10 minutes before serving. This is the base for endless variations: fold in chocolate chips, swirls of jam or crushed biscuits before freezing.',
    ing: [
      '600 ml double cream, cold',
      '400 g sweetened condensed milk',
      '2 tsp vanilla extract',
      '1/4 tsp salt'
    ],
    st: [
      'Chill a large bowl and whisk in the freezer for 10 minutes.',
      'Whip the cream to stiff peaks.',
      'Fold in the condensed milk in 2 additions, then the vanilla and salt, until just combined.',
      'Pour into a lined 900 g loaf tin and press greaseproof paper over the surface.',
      'Freeze for at least 6 hours. Stand at room temperature for 10 minutes before scooping.'
    ],
    tips: [
      'Whip the cream to stiff peaks.',
      'Fold gently to keep the air in.',
      'Cover the surface to stop ice crystals.'
    ],
    pair: ['Hot fudge sauce', 'Fresh berries', 'Wafer cones', 'Brownies'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [360, 'Freezing'],
    nut: [410, 5, 30, 30, 0, 30, 160]
  },

  'oreo-cheesecake': {
    d: 'A baked cheesecake with crushed Oreos in the base and filling, baked for 50 minutes and chilled for 6 hours.',
    meta: 'Oreo cheesecake with an Oreo base and chunks in the filling, baked for 50 minutes. 12 servings, ready in 8 hours 20 minutes with cooling.',
    kw: ['oreo cheesecake', 'baked oreo cheesecake', 'cookies and cream cheesecake', 'oreo cheesecake with chocolate base', 'oreo cheesecake recipe'],
    why: 'The Oreo is a single American biscuit with a big role in dessert making, and in a cheesecake it works three ways: as a dark, crunchy base, as chunks in the filling and as a crumb on top. Each bite has a contrast of soft cream and crisp chocolate, and the sweetness of the biscuit is balanced by the tang of the cream cheese.\n\nThe base is made from whole Oreos, filling and all, crushed to fine crumbs and mixed with melted butter. The filling in the biscuits means that less butter is needed than for a digestive base. Press it firmly into a lined springform tin and bake for 8 minutes to set. A pre-baked base stays crisp under the wet filling.\n\n**Do not beat the filling too hard.** Cream cheese, sugar, soured cream and eggs are mixed on low speed until just smooth, since too much air causes the cheesecake to puff in the oven and crack as it cools. Fold in coarsely chopped Oreos at the end by hand, so they stay in chunky pieces.\n\nBake in a water bath if you can, at 160C, which keeps the oven humid and the top crack-free. The cheesecake is ready when the edges are set and the centre still wobbles. Turn off the oven, crack the door and leave for an hour, then chill for at least 6 hours before cutting.',
    ing: [
      '300 g Oreo biscuits, crushed to fine crumbs',
      '70 g butter, melted',
      '750 g full-fat cream cheese, at room temperature',
      '150 g caster sugar',
      '150 g soured cream',
      '3 eggs',
      '2 tsp vanilla extract',
      '2 tbsp plain flour',
      '150 g Oreo biscuits, roughly chopped',
      '100 ml double cream',
      '100 g dark chocolate, chopped'
    ],
    st: [
      'Heat the oven to 160C. Mix the 300 g crumbs with the melted butter and press into a lined 23 cm springform tin. Bake for 8 minutes.',
      'Beat the cream cheese and sugar on low speed until smooth. Beat in the soured cream, eggs one at a time, vanilla and flour.',
      'Fold in the chopped Oreos by hand and pour over the base.',
      'Bake for 50 minutes until the edges are set with a slight wobble in the centre. Turn off the oven and leave in for 1 hour with the door ajar.',
      'Chill for at least 6 hours. Heat the cream, pour over the chocolate, stir and drizzle over the cheesecake.'
    ],
    tips: [
      'Mix on low speed to avoid cracks.',
      'Cool slowly in the oven.',
      'Chill for at least 6 hours before cutting.'
    ],
    pair: ['Cold milk', 'Coffee', 'Fresh strawberries', 'Whipped cream'],
    store: 'Keeps in the fridge for 4 days.',
    rest: [420, 'Cooling and chilling'],
    nut: [611, 8, 48, 43, 2, 34, 360]
  },

  'penuche': {
    d: 'A brown sugar fudge from New England, boiled to the soft ball stage, beaten until creamy and set in a tin.',
    meta: 'Penuche, a creamy brown sugar fudge with a caramel flavour, boiled for 20 minutes. 36 squares, ready in 1 hour 10 minutes.',
    kw: ['penuche', 'penuche fudge', 'brown sugar fudge', 'new england penuche', 'old fashioned penuche recipe'],
    why: 'A fudge for people who find chocolate fudge too heavy. Penuche is made with brown sugar in place of cocoa, and tastes of toffee and butterscotch, with a faint smoky sweetness from the molasses. It comes from the north-eastern United States, particularly New England, where it was made with maple sugar or brown sugar and eaten at Christmas.\n\nThe technique is the same as for any fudge: a sugar syrup is boiled to 115C, the soft ball stage, then cooled and beaten until it loses its shine and sets. A sugar thermometer is the best guide. Without one, drop a little syrup into cold water, and if it forms a soft ball that flattens when removed, it is ready. Overshoot, and the fudge sets hard and crumbly.\n\n**Cool the syrup to 45C before beating.** This is the stage that most often goes wrong. Beating hot syrup produces large sugar crystals and a gritty fudge. Leave the pan undisturbed until the bottom is only warm, which takes about 30 minutes, then beat with a wooden spoon until it thickens and loses its gloss.\n\nPour immediately into a buttered tin, as it sets within a minute or two. Press chopped walnuts into the top if you like, and cut into squares once firm. Wrap and keep in a tin.',
    ing: [
      '400 g light brown sugar',
      '200 ml evaporated milk',
      '60 g butter',
      '1/4 tsp salt',
      '1 tsp vanilla extract',
      '60 g walnuts, chopped'
    ],
    st: [
      'Butter a 20 cm square tin.',
      'Stir the brown sugar, evaporated milk, butter and salt in a heavy pan over medium heat until the sugar dissolves.',
      'Boil without stirring until the mixture reaches 115C, about 15 minutes.',
      'Take off the heat, add the vanilla without stirring, and cool to 45C, about 30 minutes.',
      'Beat with a wooden spoon until thick and matte, stir in the walnuts, and press into the tin. Cut into 36 when set.'
    ],
    tips: [
      'Use a sugar thermometer.',
      'Do not stir while the syrup boils.',
      'Cool to 45C before beating.'
    ],
    pair: ['Coffee', 'Hot tea', 'Hot chocolate', 'Vanilla ice cream'],
    store: 'Keeps in an airtight tin for 2 weeks.',
    nut: [79, 1, 12, 3, 0, 11, 30]
  },

  'popsicles': {
    d: 'Fresh strawberry, banana and yogurt blended and frozen in moulds for 4 hours into creamy fruit popsicles.',
    meta: 'Strawberry yogurt popsicles frozen for 4 hours. Eight popsicles, ready in 4 hours 10 minutes.',
    kw: ['popsicles', 'homemade popsicles', 'strawberry yogurt popsicles', 'fruit popsicles with yogurt', 'popsicle recipe'],
    why: 'What keeps a homemade popsicle from freezing into a solid, teeth-breaking block? Fat and sugar, in modest amounts. Plain fruit juice freezes hard, but add yogurt for creaminess and a little honey, and the mixture stays slightly yielding with a smooth, creamy bite. A banana adds both sweetness and body.\n\nBlend the strawberries, banana, yogurt and honey until smooth, and taste before freezing. The flavour dulls when frozen, so the mixture should taste slightly sweeter than you want the finished popsicle to be. Use Greek yogurt for thickness and tang. Lemon juice brightens the fruit and keeps the banana from browning.\n\n**Fill the moulds to within 1 cm of the top.** The mixture expands when frozen, and an overfull mould will push up the lid or spill. Tap the moulds on the counter to settle and remove air bubbles, which would leave gaps in the finished ice lolly. If you do not have moulds, use paper cups and wooden sticks, inserted when the mixture is half frozen.\n\nFreeze for at least 4 hours, until solid all the way through. To release, run the mould under warm water for 15 seconds, then pull gently. Do not force it, or the stick will come out alone.',
    ing: [
      '300 g strawberries, hulled',
      '1 ripe banana, about 120 g',
      '200 g Greek yogurt',
      '3 tbsp honey',
      '1 tbsp lemon juice',
      '1 tsp vanilla extract'
    ],
    st: [
      'Blend the strawberries, banana, yogurt, honey, lemon juice and vanilla until smooth. Taste and add more honey if needed.',
      'Pour into 8 popsicle moulds, leaving 1 cm at the top.',
      'Tap the moulds on the counter to remove air bubbles.',
      'Insert the sticks and freeze for at least 4 hours until solid.',
      'Run the moulds briefly under warm water to release the popsicles.'
    ],
    tips: [
      'Make the mixture slightly sweeter than you want.',
      'Leave 1 cm at the top.',
      'Warm the mould briefly to release.'
    ],
    pair: ['Fresh fruit', 'Sparkling water', 'Cold milk', 'Summer picnic'],
    store: 'Keeps in the freezer for 1 month.',
    rest: [240, 'Freezing'],
    nut: [77, 3, 14, 1, 1, 11, 10]
  },

  'raspberry-sorbet': {
    untimed: ['cooling completely'],
    d: 'Raspberries pureed with sugar syrup and a little lemon juice, strained and churned into a vivid pink sorbet.',
    meta: 'Raspberry sorbet with sugar syrup and lemon, churned and frozen for 4 hours. Six servings, ready in 4 hours 20 minutes.',
    kw: ['raspberry sorbet', 'fresh raspberry sorbet', 'homemade raspberry sorbet', 'french raspberry sorbet', 'raspberry sorbet recipe'],
    why: 'Raspberries are possibly the best of all fruits for sorbet. They have a high natural pectin content, a strong aroma and a sweet-tart balance that stands up to freezing, and when blended they turn a spectacular deep pink. A French pastry chef would say that a good sorbet is a mouthful of fruit with just enough sugar to carry it, and raspberries deliver that.\n\nThe sorbet needs very little. 500 g of fresh or frozen raspberries, a sugar syrup, lemon juice and a pinch of salt. Frozen berries work as well as fresh, and are often cheaper out of season. Blend them with the cooled syrup, then press the puree through a sieve to remove the seeds, which are small and gritty and linger in the teeth.\n\n**Taste the mixture and add sugar until it is almost too sweet.** Freezing mutes sweetness, so a base that tastes right at room temperature will taste flat when frozen. Aim for a pleasant sweetness with a clear sharp edge from the lemon. A spoonful of liqueur, such as framboise, adds depth and keeps the sorbet softer.\n\nChill the base for at least 1 hour before churning. Churn until it resembles thick soft-serve, then freeze in a covered container for 3 hours. Let it stand at room temperature for 5 minutes before scooping. Serve in chilled glasses with a few whole berries.',
    ing: [
      '500 g raspberries',
      '120 g caster sugar',
      '120 ml water',
      '2 tbsp lemon juice',
      '1 tbsp framboise or water',
      '1 pinch salt'
    ],
    st: [
      'Simmer the sugar and water for 2 minutes until clear. Cool completely.',
      'Blend the raspberries, syrup, lemon juice, framboise and salt until smooth. Push through a fine sieve and discard the seeds.',
      'Taste and add a little more sugar if needed.',
      'Chill for 1 hour, then churn in an ice cream machine until thick.',
      'Freeze in a lidded container for 3 hours. Stand for 5 minutes before scooping.'
    ],
    tips: [
      'Strain out the seeds.',
      'Make the base a touch too sweet.',
      'Chill before churning.'
    ],
    pair: ['Shortbread', 'Fresh berries', 'Lemon cake', 'Sparkling wine'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [240, 'Chilling and freezing'],
    nut: [133, 1, 30, 1, 5, 24, 30]
  },

  'salted-caramel-ice-cream': {
    d: 'A custard ice cream swirled with salted caramel, chilled for 4 hours, churned and frozen until firm.',
    meta: 'Salted caramel ice cream with a custard base and caramel swirl, chilled and churned. Eight servings, ready in 9 hours.',
    kw: ['salted caramel ice cream', 'homemade salted caramel ice cream', 'caramel custard ice cream', 'salted caramel swirl ice cream', 'salted caramel ice cream recipe'],
    why: 'Dark caramel, cold cream and a pinch of salt: the flavours of a toffee, in a scoop. A real salted caramel ice cream starts with a real caramel, cooked to the colour of a dark penny, which gives it a depth of flavour that a shop-bought sauce cannot match. It is bittersweet, a little smoky and rich.\n\nMake the caramel first. Heat the sugar with a little water in a heavy pan without stirring, tilting the pan to even the colour, until it turns a deep amber, about 8 minutes. Carefully pour in warm cream, standing back, as it splutters violently. Whisk until smooth, stir in the salt and let it cool. Half goes into the custard, half is saved for swirling.\n\n**Take the caramel a shade darker than seems safe.** A pale caramel tastes only of sugar, and a good ice cream needs the bitterness of a deeper cook. The moment it smells slightly smoky and the colour is that of strong tea, pull it from the heat. Seconds later it burns.\n\nThe custard is made with egg yolks and milk and cooked to 80C, then combined with the caramel cream. Chill the base for 4 hours, churn, then layer the ice cream into a container with ribbons of the reserved caramel and freeze for 4 hours. Finish each scoop with a few flakes of sea salt.',
    ing: [
      '150 g caster sugar',
      '3 tbsp water',
      '300 ml double cream, warmed',
      '1/2 tsp flaky sea salt',
      '300 ml whole milk',
      '5 egg yolks',
      '60 g caster sugar, for the custard',
      '1 tsp vanilla extract'
    ],
    st: [
      'Heat the 150 g sugar and water in a heavy pan without stirring for 8 minutes until deep amber. Off the heat, whisk in the warm cream and salt. Cool, and set half aside for swirling.',
      'Heat the milk to steaming. Whisk the yolks and 60 g sugar until pale, then whisk in a ladle of milk and tip back into the pan.',
      'Cook over low heat to 80C, stirring, then strain into the half-portion of caramel cream with the vanilla.',
      'Chill the base for 4 hours, then churn until thick.',
      'Layer into a container with ribbons of the reserved caramel and freeze for 4 hours.'
    ],
    tips: [
      'Take the caramel to a deep amber.',
      'Stand back when adding the cream.',
      'Swirl the caramel in after churning.'
    ],
    pair: ['Brownies', 'Apple pie', 'Wafer cones', 'Espresso'],
    store: 'Keeps in the freezer for 2 weeks.',
    rest: [480, 'Chilling and freezing'],
    nut: [293, 6, 29, 17, 0, 29, 210]
  },

  'saltine-toffee': {
    d: 'Saltine crackers topped with a boiled butter and brown sugar toffee, baked for 5 minutes and finished with melted chocolate.',
    meta: 'Saltine toffee, also called cracker candy, with chocolate on top, boiled for 5 minutes. 24 pieces, ready in 1 hour.',
    kw: ['saltine toffee', 'saltine cracker toffee', 'christmas crackers toffee', 'cracker candy', 'saltine toffee with chocolate'],
    why: 'Salted crackers, butter and brown sugar: three plain things, and a candy that people cannot stop eating. Saltine toffee, also called Christmas crackers or cracker candy, is a homemade sweet that has been circulating in American kitchens since at least the middle of the last century, and it is one of the simplest holiday treats to make.\n\nThe crackers form the base. Lay them in a single layer on a lined tray, edges touching, with no gaps. The toffee goes over the top: butter and brown sugar boiled together for exactly 3 minutes, stirring constantly, until it bubbles in a thick, foamy mass. Time it carefully. Less and the toffee stays soft and sticky; more and it turns hard and burns.\n\n**Pour the toffee quickly and spread it with a spatula.** It begins to set within a minute. Then bake the tray for 5 minutes at 180C, which bubbles the toffee and bonds it to the crackers. Pull it out the moment it stops bubbling in the middle.\n\nScatter chocolate chips over the hot toffee, wait for 2 minutes until they soften and spread them with a spatula. Sprinkle with flaked sea salt and chopped nuts, chill for 30 minutes and break into pieces. The salt in the cracker against the sweetness of the toffee is what makes it so addictive.',
    ing: [
      '40 saltine crackers, about 120 g',
      '225 g butter',
      '200 g light brown sugar',
      '1/2 tsp vanilla extract',
      '250 g dark chocolate chips',
      '60 g chopped pecans',
      '1/2 tsp flaky sea salt'
    ],
    st: [
      'Heat the oven to 180C. Line a 25 by 35 cm tray with foil and baking paper. Lay the crackers in a single layer, edges touching.',
      'Boil the butter and brown sugar in a pan for 3 minutes, stirring constantly. Stir in the vanilla.',
      'Pour over the crackers at once and spread with a spatula. Bake for 5 minutes until bubbling.',
      'Scatter over the chocolate chips and leave for 2 minutes, then spread smooth.',
      'Scatter with the pecans and salt. Chill for 30 minutes and break into pieces.'
    ],
    tips: [
      'Boil the toffee for exactly 3 minutes.',
      'Lay the crackers edge to edge.',
      'Spread the chocolate when it softens.'
    ],
    pair: ['Hot chocolate', 'Coffee', 'Hot tea', 'Vanilla ice cream'],
    store: 'Keeps in an airtight tin for 2 weeks.',
    nut: [202, 1, 18, 14, 1, 13, 90]
  }
};
