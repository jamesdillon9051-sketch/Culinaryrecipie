'use strict';

/**
 * Volume sixteen — Italian sweets and drinks.
 *
 * Seventeen, and Naples and Sicily take nine of them between them, which is
 * roughly the right proportion: the Arab occupation of Sicily brought sugar,
 * citrus, almonds and rice to Europe through that island, and the pastry that
 * came out of it is still the most technically ambitious in the country.
 *
 * The rest is the everyday baking that Italians actually keep in the house —
 * a ring cake for breakfast, a jam tart, a tray of crumble — plus the two
 * enormous Christmas and Easter doughs, and Venice's peach cocktail.
 */

module.exports = {
  'sfogliatella': {
    d: 'A shell of a hundred paper-thin leaves around a semolina and ricotta filling. The hardest pastry in Naples and worth every hour of it.',
    meta: 'The Neapolitan shell pastry: dough stretched translucent, spread with fat, rolled into a log, chilled and cut into cones filled with semolina and ricotta.',
    kw: ['sfogliatella', 'sfogliatella riccia', 'sfogliatella recipe', 'neapolitan shell pastry', 'ricotta semolina pastry'],
    why: 'The dough is stretched until you can read through it and then coated with soft fat before it is rolled into a log — that fat is what keeps the layers from welding together, and the leaves in the finished pastry are simply the coils of that log pushed outwards. Skimp on the stretching and you get a bread roll. The log then has to chill hard for twelve hours: cutting a soft log squashes the coils flat, and cold discs are what let you push the centre out into a cone without tearing.',
    ing: [
      '# For the dough',
      '500 g strong white flour',
      '200 ml water',
      '2 tsp honey',
      '1 tsp fine sea salt',
      '200 g softened butter, for coating the sheet',
      '# For the filling',
      '250 ml whole milk',
      '250 ml water',
      '150 g fine semolina',
      '0.5 tsp fine sea salt',
      '250 g ricotta, drained',
      '150 g caster sugar',
      '2 egg yolks',
      '80 g candied orange peel, finely diced',
      '0.5 tsp ground cinnamon',
      '1 tsp vanilla extract',
      '# To finish',
      '3 tbsp icing sugar'
    ],
    st: [
      'Work the flour, water, honey and salt to a very stiff dough, then knead 12 minutes until it is smooth. Wrap and rest it 20 minutes.',
      'Roll the dough through a pasta machine, or by hand, into one long sheet thin enough to read newsprint through.',
      'Spread the softened butter over the whole sheet in a thin even film, right to the edges.',
      'Roll the sheet up into a tight log about 6 cm across, pulling it taut as you go so no air is trapped.',
      'Wrap the log tightly and refrigerate 12 hours.',
      'For the filling, bring the milk, water and salt to the boil, rain in the semolina and cook 4 minutes, stirring, until very thick. Spread it out to cool.',
      'Beat the cooled semolina with the ricotta, sugar, yolks, candied peel, cinnamon and vanilla until smooth.',
      'Cut the chilled log into 2 cm discs. Push the centre of each disc outwards with your thumbs to make a hollow cone.',
      'Fill each cone with the semolina mixture, pinch the open edge shut and set them on a lined tray.',
      'Bake at 190C fan / 210C / gas 6 for 30 minutes, until the leaves separate and the shells are deep gold.',
      'Dust heavily with icing sugar and eat warm.'
    ],
    rest: [720, 'chilling the rolled dough log'],
    tips: [
      'Thin enough to read through, or there are no leaves.',
      'Twelve hours in the fridge. A soft log cannot be cut into clean discs.',
      'Push the cone out with your thumbs from the centre, not the edge.'
    ],
    pair: ['Espresso', 'More espresso', 'Nothing else at all'],
    store: 'Best within two hours. Refrigerated 2 days and re-crisped in a hot oven.',
    nut: [350, 9, 42, 16, 2, 18, 210]
  },

  'baba-napoletano': {
    d: 'A yeasted mushroom-shaped cake soaked in rum syrup until it is heavy in the hand. Naples took it from Poland by way of France and refused to give it back.',
    meta: 'Neapolitan babà: a very wet yeasted dough baked in small moulds and soaked in warm rum syrup until saturated.',
    kw: ['baba napoletano', 'baba al rum', 'rum baba recipe', 'neapolitan baba', 'yeasted rum cake'],
    why: 'The dough is far wetter than a bread dough and it must be beaten, not kneaded — ten minutes of beating develops enough gluten to hold the shape while keeping the crumb open and spongy, which is what lets it drink the syrup. And the syrup goes on warm, never hot and never cold: hot syrup collapses the crumb into paste, cold syrup sits on the surface and runs off. Warm, and thirty minutes turned once, and the babà takes up nearly its own weight.',
    ing: [
      '# For the dough',
      '250 g strong white flour',
      '7 g fast-action yeast',
      '4 eggs, at room temperature',
      '2 tbsp caster sugar',
      '1 tsp fine sea salt',
      '100 g softened butter, diced',
      '2 tbsp whole milk, warm',
      '# For the syrup',
      '500 ml water',
      '300 g caster sugar',
      '1 strip lemon peel',
      '1 strip orange peel',
      '150 ml dark rum',
      '# To finish',
      '3 tbsp apricot jam, warmed and sieved'
    ],
    st: [
      'Beat the flour, yeast, eggs, sugar, salt and warm milk together with a wooden spoon or a dough hook for 10 minutes, until the dough is elastic and pulls away in strands.',
      'Beat in the softened butter a piece at a time until fully absorbed. The dough will be very soft.',
      'Cover and prove 90 minutes, until doubled.',
      'Knock the dough back and divide it between 10 buttered dariole moulds, filling each a third full.',
      'Prove 45 minutes more, until the dough reaches the rim.',
      'Bake at 180C fan / 200C / gas 6 for 20 minutes, until deep brown and hollow-sounding. Turn out onto a rack.',
      'For the syrup, boil the water, sugar and citrus peel 5 minutes, then take it off the heat, remove the peel and stir in the rum. Let it cool to warm.',
      'Lower the babà into the warm syrup and leave them 30 minutes, turning once, until saturated and heavy.',
      'Lift them out, drain briefly, and brush with the warmed apricot jam to glaze.'
    ],
    rest: [165, 'proving the dough and soaking in syrup'],
    tips: [
      'Beat the dough, do not knead it. Ten minutes, until it strands.',
      'Warm syrup. Hot collapses the crumb, cold will not soak in.',
      'Fill the moulds a third full, no more.'
    ],
    pair: ['Whipped cream', 'Amarena cherries', 'A small glass of the rum'],
    store: 'Refrigerated in their syrup for 4 days. Do not freeze once soaked.',
    nut: [340, 6, 44, 12, 1, 26, 180]
  },

  'pastiera': {
    d: 'A wheat, ricotta and orange flower tart that Naples makes on Good Friday and eats the following Tuesday. It genuinely needs the days.',
    meta: 'The Neapolitan Easter tart of cooked wheat berries, ricotta and orange flower water in a sweet pastry case under a lattice.',
    kw: ['pastiera', 'pastiera napoletana', 'pastiera recipe', 'italian easter tart', 'wheat ricotta tart'],
    why: 'Orange flower water is the whole character of the tart and it is the one thing people leave out, usually because they have only met it in cheap sweets. Use a real one and use it sparingly — two teaspoons in a twelve-portion tart, no more, or it turns soapy. The wheat is cooked with milk before it goes in, which softens the grains and stops them staying gritty in the set filling. And it must cool completely in its tin, four hours at least: cut warm, a pastiera runs.',
    ing: [
      '# For the pastry',
      '400 g plain flour',
      '180 g cold butter, diced',
      '160 g caster sugar',
      '2 eggs',
      '1 egg yolk',
      'Zest of 1 lemon',
      '0.25 tsp fine sea salt',
      '# For the wheat',
      '400 g grano cotto — tinned cooked wheat berries',
      '200 ml whole milk',
      '20 g butter',
      'Zest of 1 lemon',
      '# For the filling',
      '500 g ricotta, drained',
      '350 g caster sugar',
      '4 eggs, separated',
      '100 g candied orange and citron peel, finely diced',
      '2 tsp orange flower water',
      '0.5 tsp ground cinnamon',
      '# To finish',
      '2 tbsp icing sugar'
    ],
    st: [
      'Rub the butter into the flour, then work in the sugar, eggs, yolk, lemon zest and salt to a smooth pastry. Wrap and refrigerate 1 hour.',
      'Cook the wheat berries with the milk, butter and lemon zest over low heat 15 minutes, stirring, until creamy. Cool.',
      'Beat the ricotta with the sugar until smooth, then beat in the egg yolks one at a time.',
      'Fold in the cooled wheat, the candied peel, orange flower water and cinnamon.',
      'Whisk the egg whites to soft peaks and fold them through.',
      'Line a 26 cm tin with three quarters of the pastry, pour in the filling and level it.',
      'Roll the rest into strips and lay them over in a diamond lattice, seven strips each way.',
      'Bake at 160C fan / 180C / gas 4 for 1 hour 15 minutes, until the lattice is bronzed and the centre barely wobbles.',
      'Cool completely in the tin, at least 4 hours, before dusting with icing sugar and cutting.'
    ],
    rest: [300, 'chilling the pastry and cooling the tart'],
    tips: [
      'Two teaspoons of orange flower water. More is soapy.',
      'Cook the wheat in milk first or it stays gritty.',
      'Cool it completely in the tin. A warm pastiera runs.'
    ],
    pair: ['Espresso', 'A glass of passito', 'Made three days ahead'],
    store: 'At room temperature under a cloth for 4 days, and better on the third. Do not freeze.',
    nut: [410, 12, 48, 18, 2, 26, 220]
  },

  'cassata-siciliana': {
    d: 'Sponge, sweetened ricotta and marzipan under a white glaze and a riot of candied fruit. Palermo at its most baroque, which is saying something.',
    meta: 'The Sicilian cassata: a sponge and sweet ricotta dome lined with green marzipan, glazed white and covered with candied fruit.',
    kw: ['cassata siciliana', 'sicilian cassata', 'cassata recipe', 'ricotta marzipan cake', 'sicilian dessert'],
    why: 'Sheep\'s ricotta drained for hours and then pushed through a sieve is what makes the filling: whipped ricotta stays grainy no matter how long you beat it, and undrained ricotta weeps into the sponge overnight and turns the whole thing to a puddle. The marzipan lining must be rolled thin enough to bend around the tin without cracking — about four millimetres — and the glaze goes on only when the assembled cassata is cold from the fridge, or it slides straight off.',
    ing: [
      '# For the sponge',
      '4 eggs',
      '120 g caster sugar',
      '120 g plain flour',
      '1 tsp vanilla extract',
      '# For the filling',
      '800 g sheep\'s ricotta',
      '300 g icing sugar',
      '100 g dark chocolate, finely chopped',
      '80 g candied pumpkin or citron, diced',
      '# For the lining',
      '300 g marzipan',
      'A few drops green food colouring',
      '2 tbsp icing sugar, for rolling',
      '# For the soak and glaze',
      '100 ml water',
      '50 g caster sugar',
      '3 tbsp maraschino liqueur',
      '250 g icing sugar, for the glaze',
      '3 tbsp lemon juice',
      '# To decorate',
      '200 g candied fruit, whole and in slices'
    ],
    st: [
      'Drain the ricotta in a sieve set over a bowl in the fridge for 4 hours.',
      'Whisk the eggs and caster sugar to a thick ribbon, fold in the flour and vanilla, and bake in a lined 24 cm tin at 170C fan / 190C / gas 5 for 25 minutes. Cool and slice into 1 cm sheets.',
      'Sieve the drained ricotta, then beat it with the icing sugar until completely smooth. Fold in the chocolate and candied pumpkin.',
      'Knead the colouring into the marzipan and roll it out to 4 mm on icing sugar. Cut strips to line the sloping sides of a 24 cm cassata tin or cake tin.',
      'Line the tin with cling film, then the marzipan strips, then a layer of sponge across the base.',
      'Stir the water, caster sugar and maraschino together and brush it over the sponge.',
      'Fill with the ricotta mixture, level it, and cover with a final sheet of sponge. Brush again with the soak.',
      'Refrigerate 6 hours, then turn the cassata out onto a plate and peel off the film.',
      'Beat the icing sugar with the lemon juice to a thick pourable glaze and pour it over the top only, letting it run to the marzipan edge.',
      'Arrange the candied fruit over the glaze while it is still wet.'
    ],
    rest: [600, 'draining the ricotta and setting the cassata'],
    tips: [
      'Drain the ricotta, then sieve it. Beating alone leaves it grainy.',
      'Marzipan at 4 mm — thinner cracks, thicker will not bend.',
      'Glaze it cold, straight from the fridge.'
    ],
    pair: ['Marsala', 'Espresso', 'Sicilian oranges'],
    store: 'Refrigerated for 4 days. Do not freeze — the ricotta separates.',
    nut: [440, 10, 62, 16, 2, 52, 150]
  },

  'cuccidati': {
    d: 'Sicilian fig rolls: a spiced fig, date and nut paste inside a short pastry, cut into little pillows and iced. Made in trays at Christmas.',
    meta: 'Sicilian Christmas biscuits of a spiced fig, date, nut and citrus filling wrapped in short pastry, baked and iced with sprinkles.',
    kw: ['cuccidati', 'sicilian fig cookies', 'cuccidati recipe', 'italian christmas biscuits', 'fig filled pastry'],
    why: 'The filling is minced, not blended. A food processor run to smoothness turns figs and dates into a gluey black paste that oozes out of every seam in the oven; minced coarsely, or pulsed in short bursts, it stays granular and holds its shape. The pastry has to be chilled hard before cutting because it carries a lot of butter and a lot of sugar, and warm dough tears rather than sealing around the filling. Roll the log seam side down and cut on the diagonal.',
    ing: [
      '# For the filling',
      '300 g dried figs, stems removed',
      '150 g dates, stoned',
      '100 g raisins',
      '100 g walnuts',
      '80 g almonds',
      '60 g honey',
      'Zest and juice of 1 orange',
      '1 tsp ground cinnamon',
      '0.25 tsp ground cloves',
      '3 tbsp marsala',
      '# For the pastry',
      '450 g plain flour',
      '200 g cold butter, diced',
      '150 g caster sugar',
      '2 eggs',
      '2 tsp baking powder',
      '0.25 tsp fine sea salt',
      '3 tbsp whole milk',
      '# To finish',
      '200 g icing sugar',
      '3 tbsp water',
      'Coloured sprinkles'
    ],
    st: [
      'Soak the figs, dates and raisins in warm water 30 minutes, then drain them well.',
      'Mince the soaked fruit with the walnuts and almonds, or pulse in short bursts — it must stay granular, never smooth.',
      'Stir in the honey, orange zest and juice, cinnamon, cloves and marsala. Set aside.',
      'Rub the butter into the flour, then work in the sugar, eggs, baking powder, salt and milk to a soft pastry. Wrap and refrigerate 1 hour.',
      'Roll a quarter of the pastry into a long strip 10 cm wide. Pipe a rope of filling down the centre.',
      'Fold the pastry over the filling and seal, then roll the log seam side down.',
      'Cut on the diagonal into 4 cm pillows and notch the outer curve of each with scissors. Repeat with the rest.',
      'Bake at 180C fan / 200C / gas 6 for 20 minutes, until pale gold — they should not brown.',
      'Cool, then beat the icing sugar with the water and dip the tops. Add sprinkles before the icing sets.'
    ],
    rest: [90, 'soaking the dried fruit and chilling the pastry'],
    tips: [
      'Mince the filling, never blend it smooth.',
      'Chill the pastry hard or it will tear rather than seal.',
      'Pale gold only. Browned cuccidati go hard.'
    ],
    pair: ['Espresso', 'Marsala', 'A tin to give away'],
    store: 'In a tin for 3 weeks and they improve. Freeze unfrosted for 3 months.',
    nut: [365, 6, 52, 14, 4, 30, 140]
  },

  'struffoli': {
    d: 'Tiny fried dough balls tumbled in honey and heaped into a ring with candied peel and sprinkles. Naples at Christmas, eaten with fingers.',
    meta: 'Neapolitan struffoli: small pieces of citrus-scented dough deep-fried, coated in warm honey and piled into a ring.',
    kw: ['struffoli', 'struffoli recipe', 'neapolitan honey balls', 'italian christmas dough balls', 'honey fried dough'],
    why: 'The honey is warmed only until it runs, never boiled. Boiled honey sets hard as it cools and welds the whole ring into a single inedible lump; warm honey stays tacky and lets the pieces separate under a spoon. Fry in small batches at 170C — a crowded pan drops the oil temperature and the dough absorbs rather than puffs — and drain them properly before they meet the honey, because any oil left on the surface stops it sticking.',
    ing: [
      '# For the dough',
      '400 g plain flour',
      '3 eggs',
      '1 egg yolk',
      '50 g softened butter',
      '2 tbsp caster sugar',
      'Zest of 1 lemon',
      'Zest of 1 orange',
      '2 tbsp limoncello',
      '0.25 tsp fine sea salt',
      '# For frying',
      '1 litre sunflower oil',
      '# To finish',
      '350 g honey',
      '2 tbsp water',
      '80 g candied orange peel, diced',
      'Coloured sprinkles'
    ],
    st: [
      'Work the flour, eggs, yolk, butter, sugar, both zests, limoncello and salt into a smooth firm dough, 8 minutes. Wrap and rest it 30 minutes.',
      'Roll pieces of dough into ropes 1 cm thick and cut them into 1 cm lengths.',
      'Heat the oil to 170C. Fry the pieces in small batches 2 minutes, until puffed and pale gold.',
      'Lift them out with a slotted spoon and drain on a rack, not on paper.',
      'Warm the honey with the water in a wide pan over low heat until it runs freely. Do not let it boil.',
      'Take the pan off the heat, tip in the struffoli and the candied peel and turn them until every piece is coated.',
      'Pile them into a ring on a plate, using an oiled bowl in the centre to shape it.',
      'Scatter with sprinkles and leave to set 20 minutes before serving.'
    ],
    tips: [
      'Warm the honey, never boil it. Boiled honey sets like cement.',
      'Small batches at 170C, or they soak up oil.',
      'Drain on a rack. Honey will not stick to an oily surface.'
    ],
    pair: ['Espresso', 'Limoncello', 'The whole family standing round the plate'],
    store: 'At room temperature under a cloth for 5 days. Do not refrigerate.',
    nut: [360, 5, 56, 12, 1, 34, 90]
  },

  'zuppa-inglese': {
    d: 'Sponge fingers soaked scarlet in alchermes, layered with two custards. Emilia\'s answer to trifle, and older than the English one it is named for.',
    meta: 'An Emilian layered dessert of savoiardi soaked in alchermes with alternating vanilla and chocolate custard, chilled until sliceable.',
    kw: ['zuppa inglese', 'zuppa inglese recipe', 'italian trifle', 'alchermes dessert', 'custard sponge dessert'],
    why: 'Dip the savoiardi, do not soak them — one second a side in the alchermes is enough. They keep absorbing for another minute after they leave the liquid, and a biscuit that felt right in the bowl will be mush by the time the dish is assembled. The custards are cooked separately and cooled with cling film pressed directly onto the surface, because a skin broken back into the custard leaves lumps that no amount of whisking will clear.',
    ing: [
      '# For the custard',
      '750 ml whole milk',
      '6 egg yolks',
      '180 g caster sugar',
      '60 g cornflour',
      '1 strip lemon peel',
      '1 tsp vanilla extract',
      '# To divide',
      '80 g dark chocolate, chopped',
      '1 tbsp cocoa powder',
      '# To assemble',
      '300 g savoiardi sponge fingers',
      '200 ml alchermes liqueur',
      '3 tbsp water',
      '# To finish',
      '2 tbsp cocoa powder, or 40 g dark chocolate, grated'
    ],
    st: [
      'Warm the milk with the lemon peel until it steams, then take out the peel.',
      'Whisk the yolks, sugar and cornflour, pour the hot milk over whisking, and return it to the pan.',
      'Cook over medium heat, stirring constantly, until it thickens and just bubbles, 5 minutes. Add the vanilla.',
      'Pour half the custard into a second bowl and stir the chopped chocolate and cocoa into it until melted.',
      'Press cling film onto the surface of both custards and cool them, covered, 30 minutes.',
      'Mix the alchermes with the water in a shallow dish.',
      'Dip each savoiardo for one second a side and lay a layer across the base of a glass dish.',
      'Spread over the vanilla custard, then another layer of dipped biscuits, then the chocolate custard.',
      'Finish with a third layer of biscuits and the last of the vanilla custard.',
      'Refrigerate at least 6 hours, then dust with cocoa or grated chocolate before serving.'
    ],
    rest: [390, 'cooling the custards and setting the dessert'],
    tips: [
      'One second a side. They keep drinking after they leave the liquid.',
      'Cling film onto the custard surface, not over the bowl.',
      'Alchermes is the colour and the scent. Rum works but it is a different dish.'
    ],
    pair: ['Espresso', 'Vin santo', 'A spoon each, from the dish'],
    store: 'Refrigerated for 3 days. Do not freeze.',
    nut: [350, 8, 46, 13, 1, 34, 120]
  },

  'sbrisolona': {
    d: 'A cake you break rather than cut, sandy with cornmeal and almonds. Mantua has made it since the Gonzagas and it has never needed changing.',
    meta: 'A Mantuan crumbly cake of cornmeal, flour and almonds bound with just enough butter and egg yolk to hold, broken by hand at the table.',
    kw: ['sbrisolona', 'torta sbrisolona', 'sbrisolona recipe', 'mantua almond cake', 'italian crumbly cake'],
    why: 'Do not bring the mixture together. The whole point of a sbrisolona is that it never becomes a dough — the ingredients are rubbed to a coarse crumb and then scattered into the tin, unpressed, so that the finished cake is a fragile lattice of crumbs fused at their contact points. Any pressing gives you a dense biscuit. Cornmeal is what makes it sandy rather than short, so use a coarse polenta grind rather than fine cornflour, and let the cake cool completely in the tin before you touch it.',
    ing: [
      '150 g plain flour',
      '150 g coarse cornmeal or polenta',
      '150 g whole almonds, half chopped and half whole',
      '150 g caster sugar',
      '150 g cold butter, diced',
      '2 egg yolks',
      'Zest of 1 lemon',
      '1 tsp vanilla extract',
      '0.25 tsp fine sea salt',
      '# To finish',
      '2 tbsp icing sugar'
    ],
    st: [
      'Mix the flour, cornmeal, almonds, sugar, lemon zest and salt in a wide bowl.',
      'Rub in the cold butter with your fingertips until the mixture looks like coarse gravel.',
      'Add the yolks and vanilla and toss with a fork until the crumbs clump in places. Do not knead or press it together.',
      'Scatter the crumbs loosely into a lined 26 cm tin, leaving the surface uneven and unpressed.',
      'Bake at 160C fan / 180C / gas 4 for 45 minutes, until deep gold and firm at the edges.',
      'Cool completely in the tin — it is fragile while warm.',
      'Dust with icing sugar and break it into pieces by hand.'
    ],
    tips: [
      'Never press it. The crumbs must stay loose in the tin.',
      'Coarse cornmeal, not cornflour. The sandiness is the dish.',
      'Cool completely before you touch it.'
    ],
    pair: ['Vin santo', 'Grappa', 'Coffee'],
    store: 'In a tin for 2 weeks and it improves for the first few days. Freezes 3 months.',
    nut: [430, 7, 44, 24, 3, 22, 130]
  },

  'crostata-di-marmellata': {
    d: 'A jam tart under a lattice, made in every Italian house and eaten for breakfast as often as for pudding. The pastry is the whole thing.',
    meta: 'The Italian jam tart: a lemon-scented pasta frolla pressed into a tin, filled with thick jam and finished with a lattice top.',
    kw: ['crostata di marmellata', 'italian jam tart', 'crostata recipe', 'pasta frolla', 'lattice jam tart'],
    why: 'Pasta frolla is not shortcrust. It carries egg yolk and sugar, which means it is worked briefly and then chilled hard, and any attempt to knead it smooth develops gluten and gives you a tough, shrinking case. Use a thick jam or reduce a loose one first — a runny jam boils, climbs over the lattice and welds the tart to the tin. And the tin goes in the bottom third of the oven, so the base sets before the lattice colours.',
    ing: [
      '# For the pastry',
      '300 g plain flour',
      '150 g cold butter, diced',
      '120 g caster sugar',
      '1 egg',
      '1 egg yolk',
      'Zest of 1 lemon',
      '0.5 tsp baking powder',
      '0.25 tsp fine sea salt',
      '# For the filling',
      '400 g thick jam — apricot, sour cherry or fig',
      '1 tbsp lemon juice',
      '# To finish',
      '1 egg yolk, beaten with 1 tbsp milk'
    ],
    st: [
      'Rub the butter into the flour, then add the sugar, egg, yolk, lemon zest, baking powder and salt and bring it together quickly. Do not knead it.',
      'Flatten into a disc, wrap, and refrigerate 1 hour.',
      'Stir the lemon juice into the jam. If it is loose, cook it down in a small pan 5 minutes and let it cool.',
      'Roll two thirds of the pastry and line a 24 cm tart tin, pressing it into the corners.',
      'Spread the jam over the base in an even layer, leaving a 1 cm border.',
      'Roll the remaining pastry, cut it into 1.5 cm strips and lay them over in a lattice. Seal and trim the edge.',
      'Brush the lattice with the egg yolk and milk.',
      'Bake in the bottom third of the oven at 170C fan / 190C / gas 5 for 40 minutes, until the pastry is golden right through.',
      'Cool in the tin before slicing.'
    ],
    rest: [60, 'chilling the pastry'],
    tips: [
      'Bring it together, do not knead it. Frolla goes tough fast.',
      'Thick jam only, or it will boil over the lattice.',
      'Bottom third of the oven so the base cooks through.'
    ],
    pair: ['Coffee, at breakfast', 'A glass of milk', 'Whipped cream, at night'],
    store: 'Under a cloth at room temperature for 5 days. Freezes 2 months.',
    nut: [410, 6, 58, 16, 2, 32, 150]
  },

  'ciambellone': {
    d: 'The plain ring cake that sits under a cloth in Italian kitchens all week, dunked in coffee at breakfast and in milk by children after school.',
    meta: 'A simple Italian ring cake of eggs, oil, milk and citrus zest, baked in a bundt tin and dusted with icing sugar.',
    kw: ['ciambellone', 'italian ring cake', 'ciambellone recipe', 'italian breakfast cake', 'bundt citrus cake'],
    why: 'Oil rather than butter, and that is deliberate: an oil crumb stays soft for four or five days where a butter cake goes dry by the second, and this is a cake meant to last the week. Whisk the eggs and sugar until genuinely pale and tripled — five minutes, not one — because there is no other aeration in the recipe. And butter and flour the tin thoroughly, right into the central funnel, since a ring cake that sticks cannot be rescued.',
    ing: [
      '4 eggs',
      '280 g caster sugar',
      '180 ml sunflower oil',
      '180 ml whole milk',
      '400 g plain flour',
      '16 g baking powder',
      'Zest of 2 lemons, or 1 lemon and 1 orange',
      '1 tsp vanilla extract',
      '0.25 tsp fine sea salt',
      '# For the tin',
      '20 g butter, softened, or 2 tbsp oil',
      '2 tbsp plain flour',
      '# To finish',
      '2 tbsp icing sugar'
    ],
    st: [
      'Butter and flour a 24 cm ring tin thoroughly, including the central funnel.',
      'Whisk the eggs and sugar 5 minutes, until pale, thick and tripled in volume.',
      'Whisk in the oil in a steady stream, then the milk, zest and vanilla.',
      'Sift the flour, baking powder and salt over the top and fold them in until just combined.',
      'Pour into the tin and bake at 160C fan / 180C / gas 4 for 50 minutes, until a skewer comes out clean.',
      'Cool 10 minutes in the tin, then turn out onto a rack.',
      'Dust with icing sugar once cool.'
    ],
    tips: [
      'Oil, not butter. It is what keeps it soft all week.',
      'Five minutes of whisking. It is the only aeration there is.',
      'Flour the funnel as well as the sides.'
    ],
    pair: ['Coffee', 'A glass of milk', 'Jam on the side'],
    store: 'Under a cloth at room temperature for 5 days. Freezes 3 months.',
    nut: [350, 6, 48, 14, 1, 26, 220]
  },

  'colomba': {
    d: 'The Easter dove: the same enriched dough as panettone, shaped into wings and armoured in almond crust and pearl sugar. Two days of work.',
    meta: 'The Italian Easter dove cake — a long-fermented enriched dough with candied orange, baked under an almond and pearl sugar crust.',
    kw: ['colomba', 'colomba pasquale', 'colomba recipe', 'italian easter cake', 'almond crust sweet bread'],
    why: 'The cold overnight fermentation is not optional. Twelve hours in the fridge is what develops the flavour and, more importantly, what strengthens the gluten enough to carry all that butter and fruit — a colomba proved warm in one go collapses under its own crust. Butter goes in only after the dough has already come together and can pass a windowpane test, a piece at a time; added early it coats the flour and the gluten never forms. And it hangs upside down to cool, like panettone, or the crumb compresses under its own weight.',
    ing: [
      '# For the dough',
      '500 g strong white flour',
      '10 g fast-action yeast',
      '120 g caster sugar',
      '5 egg yolks',
      '200 ml whole milk, warm',
      '180 g softened butter, diced',
      '1.5 tsp fine sea salt',
      '1 tsp vanilla extract',
      'Zest of 2 oranges',
      '200 g candied orange peel, diced',
      '# For the crust',
      '100 g blanched almonds, ground',
      '120 g caster sugar',
      '2 egg whites',
      '1 tbsp cornflour',
      '# To finish',
      '50 g whole blanched almonds',
      '60 g pearl sugar',
      '2 tbsp icing sugar'
    ],
    st: [
      'Mix the flour, yeast, sugar, yolks and warm milk to a shaggy dough, then knead 15 minutes until it passes a windowpane test.',
      'Add the salt, then work in the butter a piece at a time, kneading until each is absorbed before the next goes in.',
      'Knead in the vanilla, orange zest and candied peel. Cover and prove 3 hours, until doubled.',
      'Knock back, cover tightly and refrigerate 12 hours.',
      'Bring the dough back to room temperature, divide it two thirds to one third, and lay the larger piece down the body of a paper colomba mould and the smaller across it as wings.',
      'Prove 4 hours at room temperature, until the dough reaches the rim of the mould.',
      'Whisk the ground almonds, sugar, egg whites and cornflour to a spreadable paste and cover the top of the risen dough.',
      'Press in the whole almonds and scatter the pearl sugar over.',
      'Bake at 160C fan / 180C / gas 4 for 45 minutes, until an internal temperature of 92C.',
      'Skewer the base horizontally and hang the colomba upside down 3 hours to cool, then dust with icing sugar.'
    ],
    rest: [1320, 'proving, the overnight cold ferment and hanging to cool'],
    tips: [
      'Twelve hours cold. It is where the flavour and the strength come from.',
      'Butter only after the windowpane test, a piece at a time.',
      'Hang it upside down or the crumb compresses.'
    ],
    pair: ['Moscato d\'Asti', 'Espresso', 'Easter morning'],
    store: 'Sealed in a bag at room temperature for 10 days. Freezes 2 months.',
    nut: [430, 9, 56, 18, 2, 28, 210]
  },

  'pandoro': {
    d: 'Verona\'s Christmas cake: a tall eight-pointed star of deep yellow butter dough, baked plain and buried in icing sugar at the table.',
    meta: 'The Veronese Christmas cake — a slowly fermented butter and egg dough baked in a star mould and dusted heavily with vanilla icing sugar.',
    kw: ['pandoro', 'pandoro recipe', 'verona christmas cake', 'italian star cake', 'butter enriched sweet bread'],
    why: 'Pandoro has no fruit and no crust to hide behind, so everything depends on the dough — which means the butter has to be worked in cold and slowly, in three stages, keeping the dough below about 24C throughout. Warm dough breaks the emulsion and the butter leaks out in the oven into a greasy pool. The mould is buttered and dusted with sugar rather than flour, which gives the ridged crust its thin crisp shell, and the cake is cooled in the mould for half an hour before turning out or the points snap off.',
    ing: [
      '# For the dough',
      '500 g strong white flour',
      '10 g fast-action yeast',
      '150 g caster sugar',
      '6 egg yolks',
      '2 whole eggs',
      '150 ml whole milk, warm',
      '250 g cold butter, diced',
      '1.5 tsp fine sea salt',
      '2 tsp vanilla extract',
      'Zest of 1 lemon',
      '40 g cocoa butter or extra butter, softened',
      '# For the mould',
      '30 g butter, softened',
      '2 tbsp caster sugar',
      '# To finish',
      '60 g icing sugar',
      '0.5 tsp vanilla powder or seeds of 1 vanilla pod'
    ],
    st: [
      'Mix the flour, yeast, sugar, yolks, whole eggs and warm milk to a dough and knead 15 minutes until smooth and elastic.',
      'Add the salt, vanilla and lemon zest, then work in a third of the cold butter until absorbed. Cover and prove 2 hours.',
      'Knock back and work in the second third of the butter, kneading until the dough is smooth again.',
      'Work in the remaining butter and the cocoa butter, cover tightly and refrigerate 12 hours.',
      'Butter a 1 kg pandoro mould and dust it with caster sugar, tipping out the excess.',
      'Shape the cold dough into a smooth ball and drop it seam down into the mould.',
      'Prove 5 hours at room temperature, until the dough reaches the rim.',
      'Bake at 150C fan / 170C / gas 3 for 45 minutes, covering the top with foil if it darkens, to an internal temperature of 92C.',
      'Cool in the mould 30 minutes, then turn out onto a rack and cool completely.',
      'Shake the icing sugar and vanilla together in the bag and coat the pandoro at the table.'
    ],
    rest: [1170, 'proving, the overnight cold ferment and cooling in the mould'],
    tips: [
      'Cold butter, in three stages, and keep the dough below 24C.',
      'Sugar the mould, not flour. It is where the crisp shell comes from.',
      'Half an hour in the mould before turning out, or the points break.'
    ],
    pair: ['Mascarpone cream', 'Spumante', 'Christmas breakfast'],
    store: 'Sealed in a bag at room temperature for 10 days. Freezes 2 months.',
    nut: [450, 8, 52, 22, 1, 24, 190]
  },

  'amaretti': {
    d: 'Soft almond biscuits, cracked across the top and chewy in the middle. Four ingredients, no flour, and better after a day in the tin.',
    meta: 'Soft Italian almond macaroons of ground almonds, sugar and egg white, dried before baking so the tops crack.',
    kw: ['amaretti', 'amaretti morbidi', 'amaretti recipe', 'soft almond macaroons', 'flourless almond biscuits'],
    why: 'Leave the piped mounds uncovered for an hour before they go in the oven. A skin forms on the surface, and when the biscuit rises against that skin it splits into the cracks that define an amaretto — bake them straight away and you get smooth domes. Bitter almond is what makes them taste of amaretti rather than of marzipan: a few drops of extract, or a handful of apricot kernels ground in with the almonds. Underbake slightly; they firm up as they cool and a browned amaretto is a hard one.',
    ing: [
      '300 g ground almonds',
      '250 g caster sugar',
      '3 egg whites',
      '0.5 tsp bitter almond extract',
      '0.25 tsp fine sea salt',
      '1 tbsp amaretto, optional',
      '# To finish',
      '60 g icing sugar, for rolling'
    ],
    st: [
      'Whisk the egg whites with the salt to soft peaks — not stiff.',
      'Fold in the ground almonds and caster sugar, then the almond extract and the amaretto if using, to a thick sticky paste.',
      'Roll walnut-sized pieces in your palms, then roll each in icing sugar until heavily coated.',
      'Set them well apart on a lined tray and flatten each very slightly.',
      'Leave uncovered 1 hour, until the surfaces are dry to the touch.',
      'Bake at 150C fan / 170C / gas 3 for 20 minutes, until cracked and just barely coloured at the base.',
      'Cool on the tray — they are fragile while warm.'
    ],
    rest: [60, 'drying the surface before baking'],
    tips: [
      'An hour uncovered. The dry skin is what makes them crack.',
      'Bitter almond extract, not vanilla. It is the flavour.',
      'Underbake. They set as they cool.'
    ],
    pair: ['Espresso', 'Vin santo', 'Crushed over ice cream'],
    store: 'In an airtight tin for 2 weeks and softer after a day. Freezes 3 months.',
    nut: [210, 5, 22, 11, 2, 20, 25]
  },

  'pizzelle': {
    d: 'Thin anise waffle wafers pressed in a patterned iron, crisp enough to snap. Abruzzo has made them since the eighth century, which may be the oldest cookie in Europe.',
    meta: 'Abruzzese pizzelle: a thin anise-scented batter pressed in a patterned iron into crisp snowflake wafers.',
    kw: ['pizzelle', 'pizzelle recipe', 'italian waffle cookies', 'anise wafer biscuits', 'abruzzo pizzelle'],
    why: 'A stiff batter, not a pourable one — it should drop from the spoon in a lump, because a loose batter spreads past the pattern and gives you a thick, floppy wafer with no impression on it. One heaped teaspoon slightly behind the centre of each mould, and the iron closed firmly rather than clamped. And they crisp only as they cool, so lift each one off flat onto a rack; stacked warm, they steam each other soft and bend.',
    ing: [
      '3 eggs',
      '150 g caster sugar',
      '120 g butter, melted and cooled',
      '250 g plain flour',
      '2 tsp baking powder',
      '2 tsp anise extract, or 1 tbsp anise seeds, crushed',
      '0.25 tsp fine sea salt',
      '# To finish',
      '2 tbsp icing sugar'
    ],
    st: [
      'Whisk the eggs and sugar until pale, 3 minutes.',
      'Whisk in the melted butter and the anise.',
      'Fold in the flour, baking powder and salt to a stiff dropping batter.',
      'Rest the batter 30 minutes while the iron heats.',
      'Drop a heaped teaspoon slightly behind the centre of each mould and close the iron firmly.',
      'Cook 45 to 60 seconds, until pale gold and the steam has stopped.',
      'Lift each wafer off flat onto a rack, in a single layer, and let it crisp as it cools.',
      'Dust with icing sugar. Shape any you want as cones or cannoli tubes while still hot.'
    ],
    tips: [
      'A stiff batter. Loose batter spreads past the pattern.',
      'Cool them flat and in one layer, or they bend and soften.',
      'Shape cones within about ten seconds of lifting them out.'
    ],
    pair: ['Espresso', 'Filled with ricotta cream', 'A tin at Christmas'],
    store: 'In an airtight tin for 3 weeks. They soften in humidity — re-crisp in a low oven.',
    nut: [160, 3, 20, 7, 1, 10, 60]
  },

  'maritozzo': {
    d: 'A soft sweet bun split almost in half and packed with an absurd quantity of whipped cream, then cut flush with a knife. Roman breakfast.',
    meta: 'The Roman maritozzo: a light enriched bun with orange zest, split and overfilled with barely sweetened whipped cream levelled flat.',
    kw: ['maritozzo', 'maritozzi recipe', 'roman cream bun', 'italian sweet bun cream', 'maritozzo con la panna'],
    why: 'The cream is barely sweetened and whipped to a stiff peak, because a soft cream slumps out of the split within minutes and a sweet one buries the bun. Fill far more than looks reasonable — a proper maritozzo is more cream than bread — then draw a palette knife across the open face in one pass to cut it flush. And the buns must be completely cold before splitting: warm bread melts the cream on contact and the whole thing weeps.',
    ing: [
      '# For the dough',
      '400 g strong white flour',
      '7 g fast-action yeast',
      '60 g caster sugar',
      '2 eggs',
      '150 ml whole milk, warm',
      '80 g softened butter, diced',
      '1 tsp fine sea salt',
      'Zest of 1 orange',
      '2 tbsp honey',
      '# For the glaze',
      '3 tbsp water',
      '3 tbsp caster sugar',
      '# For the filling',
      '500 ml double cream, very cold',
      '40 g icing sugar',
      '1 tsp vanilla extract',
      '# To finish',
      '2 tbsp icing sugar'
    ],
    st: [
      'Mix the flour, yeast, sugar, eggs and warm milk to a dough and knead 10 minutes until smooth.',
      'Add the salt, orange zest and honey, then work in the butter a piece at a time.',
      'Cover and prove 2 hours, until doubled.',
      'Divide into 8 pieces, shape each into a tight oval and set them well apart on a lined tray.',
      'Prove 1 hour more, until puffed and touching.',
      'Bake at 170C fan / 190C / gas 5 for 18 minutes, until golden.',
      'Boil the water and sugar 2 minutes to a light syrup and brush it over the hot buns. Cool completely.',
      'Whip the cold cream with the icing sugar and vanilla to a stiff peak.',
      'Split each cold bun lengthways, not quite through, and pipe in far more cream than seems sensible.',
      'Draw a palette knife across each open face in one pass to level the cream, and dust with icing sugar.'
    ],
    rest: [180, 'proving the dough twice'],
    tips: [
      'Barely sweeten the cream and whip it stiff.',
      'Cold buns only. Warm bread melts the cream.',
      'One pass with the knife. Going back and forth smears it.'
    ],
    pair: ['Cappuccino', 'Standing at the bar', 'Nothing else before noon'],
    store: 'Filled, refrigerated for 1 day. Unfilled buns keep 2 days or freeze 2 months.',
    nut: [395, 7, 44, 20, 2, 20, 190]
  },

  'granita-di-caffe': {
    d: 'Coffee frozen and scraped into loose crystals, eaten with a brioche for breakfast in a Sicilian summer. No machine required.',
    meta: 'Sicilian coffee granita: sweetened espresso frozen in a shallow tray and scraped with a fork every half hour into loose crystals.',
    kw: ['granita di caffe', 'coffee granita', 'granita recipe', 'sicilian coffee ice', 'italian frozen coffee'],
    why: 'A shallow tray and a fork, and that is the entire method — the scraping every half hour is what breaks the ice into separate crystals instead of letting it set into a solid block you would have to chip. Metal freezes faster and more evenly than plastic. The coffee must also be sweeter than you would drink it, because cold suppresses sweetness sharply and a granita made to drinking strength tastes flat and bitter straight from the freezer.',
    ing: [
      '500 ml water',
      '150 g caster sugar',
      '60 g finely ground dark-roast coffee, or 500 ml strong espresso',
      'A pinch of fine sea salt'
    ],
    st: [
      'Bring the water and sugar to the boil, stirring until the sugar dissolves, then take it off the heat.',
      'Stir in the ground coffee and the salt and leave it to infuse 10 minutes, then strain through a fine sieve lined with a cloth. If using espresso, stir it into the hot syrup instead.',
      'Cool the sweetened coffee completely, 30 minutes.',
      'Pour it into a shallow metal tray to a depth of about 2 cm.',
      'Freeze 4 hours, dragging a fork through it every 30 minutes to break up the crystals as they form.',
      'Scrape it into loose glassy flakes and spoon into cold glasses.'
    ],
    rest: [270, 'cooling the coffee and freezing the granita'],
    tips: [
      'A metal tray. Plastic freezes too slowly and too unevenly.',
      'Every half hour with the fork, without fail.',
      'Sweeter than you would drink it. Cold hides sugar.'
    ],
    pair: ['A brioche col tuppo', 'Whipped cream on top', 'Breakfast in August'],
    store: 'In the freezer for 1 week. Scrape again with a fork before serving.',
    nut: [105, 0, 26, 0, 0, 26, 10]
  },

  'bellini': {
    d: 'White peach purée and prosecco, in that order and in that proportion. Invented at Harry\'s Bar in Venice and named for the pink in a Bellini painting.',
    meta: 'The Venetian Bellini: fresh white peach purée chilled hard and topped with cold prosecco, mixed only by pouring.',
    kw: ['bellini', 'bellini cocktail', 'bellini recipe', 'peach prosecco cocktail', 'harry bar venice drink'],
    why: 'White peaches, not yellow, and fresh ones — the drink is pale pink because white peach flesh oxidises to that colour, and a yellow peach gives you an orange drink that tastes of tinned fruit. Everything must be properly cold, the purée and the glasses as much as the wine, because a warm purée makes the prosecco foam over the rim the moment it lands. And it is never stirred with a spoon: pour the wine into the purée slowly and let the pouring do the mixing.',
    ing: [
      '4 ripe white peaches',
      '1 tbsp lemon juice',
      '1 tbsp caster sugar, or to taste',
      '1 bottle prosecco, 750 ml, very cold',
      '# Optional',
      '2 tbsp peach schnapps'
    ],
    st: [
      'Peel the peaches with a small sharp knife, halve them and remove the stones.',
      'Purée the flesh with the lemon juice and sugar until completely smooth.',
      'Push the purée through a fine sieve so no fibres remain.',
      'Refrigerate the purée and the glasses 2 hours, until both are thoroughly cold.',
      'Spoon the cold purée into each flute to fill it about one third.',
      'Pour the cold prosecco slowly down the inside of the glass until the flute is full.',
      'Let the pouring mix it. Do not stir, and serve at once.'
    ],
    rest: [120, 'chilling the purée and the glasses'],
    tips: [
      'White peaches. Yellow ones give the wrong colour and the wrong taste.',
      'Cold purée, cold glasses, cold wine, or it foams over.',
      'Pour slowly and never stir.'
    ],
    pair: ['Cicchetti', 'Salted almonds', 'A canal-side table'],
    store: 'The purée keeps refrigerated 1 day. Assemble only to order.',
    nut: [120, 1, 12, 0, 1, 10, 5]
  }
};
