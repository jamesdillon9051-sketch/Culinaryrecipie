'use strict';

/**
 * Volume twenty-one — American baking.
 *
 * Two fruit pies, the cookie and the cake-cookie, muffins, doughnuts, rolls and
 * a brittle. The catalogue had apple pie, pecan pie and pumpkin pie but none of
 * the other pies the American baker is asked for, and had no dinner rolls at
 * all.
 */

module.exports = {
  'cherry-pie': {
    d: 'A double-crust pie of tart cherries in a jammy filling under an all-butter crust. Most of the time is chilling and cooling.',
    meta: 'Cherry pie with a tart cherry filling thickened with cornflour, under a flaky all-butter double crust. Cool fully so the filling sets.',
    kw: ['cherry pie', 'cherry pie recipe', 'homemade cherry pie', 'cherry pie with fresh or frozen cherries', 'double crust cherry pie'],
    why: 'A fruit pie fails in two places: a filling that runs and a base that stays pale and damp. The cornflour tossed through the cherries is what sets the filling, but only if the pie bubbles thickly through the vents, which is the signal that it has come to the boil and the starch has done its work. The bottom crust gets its colour from starting on a preheated tray at high heat, and the pie must cool for three hours, because a warm cherry pie is soup.',
    ing: [
      '# For the pastry',
      '300 g plain flour',
      '1 tbsp sugar',
      '1 tsp fine sea salt',
      '230 g cold unsalted butter, cubed',
      '90 to 120 ml ice water',
      '1 egg, beaten with 1 tbsp milk',
      '1 tbsp coarse sugar',
      '# For the filling',
      '900 g pitted tart cherries, fresh or frozen and thawed',
      '150 g sugar',
      '40 g cornflour',
      '1 tbsp lemon juice',
      '0.25 tsp almond extract',
      '0.25 tsp fine sea salt',
      '1 tbsp unsalted butter, diced'
    ],
    st: [
      'Whisk the flour, sugar and salt. Rub in the butter until pea-sized pieces remain, then sprinkle over the ice water a tablespoon at a time, stirring, until the dough just holds together.',
      'Divide into two discs, wrap and chill 1 hour.',
      'Heat the oven to 220°C / 425°F with a baking tray on the lowest shelf.',
      'Toss the cherries with the sugar, cornflour, lemon juice, almond extract and salt and stand 15 minutes.',
      'Roll one disc into a 30 cm round and fit it into a 23 cm pie dish. Tip in the filling with its juices and dot with the butter.',
      'Roll the second disc, lay it over the filling, trim and crimp the edge and cut 5 steam vents in the top. Brush with the egg wash and scatter with the coarse sugar.',
      'Set the pie on the hot tray and bake 20 minutes, then lower the oven to 180°C / 350°F and bake 40 to 45 minutes more, until the crust is deep golden and the filling bubbles thickly through the vents.',
      'Cool on a rack for at least 3 hours before slicing so the filling sets.'
    ],
    tips: [
      'The filling is done when it bubbles thickly through the vents. That is how you know the cornflour has cooked.',
      'Start the pie on a hot tray so the bottom crust browns.',
      'Wait for it to cool. A warm cherry pie runs across the plate.'
    ],
    pair: ['Vanilla ice cream', 'Whipped cream', 'Hot black coffee'],
    store: 'Keep covered at room temperature 2 days, then refrigerate up to 5 days. Freeze whole, baked, for 3 months and reheat at 160°C for 20 minutes.',
    nut: [444, 4, 62, 20, 3, 30, 260],
    rest: [240, 'chilling the dough and cooling the pie']
  },

  'blueberry-pie': {
    d: 'A lattice-topped pie of blueberries, part of them cooked first so the filling sets firm and glossy. Most of the time is chilling and cooling.',
    meta: 'Blueberry pie under a lattice crust: a third of the berries are cooked to a jammy base so the filling sets firm. Cool fully before slicing.',
    kw: ['blueberry pie', 'blueberry pie recipe', 'homemade blueberry pie', 'lattice blueberry pie', 'blueberry pie filling that sets'],
    why: 'Blueberries are the difficult pie fruit: they hold their shape, so the filling can stay loose and watery however much thickener you add. The fix is to cook a third of them with the cornflour and sugar on the hob first, mashing them slightly, until it is a thick, glossy jam, and then to fold in the rest raw, so the pie has both a set base and whole berries. A lattice top, rather than a solid lid, lets the steam out and the excess juice evaporate.',
    ing: [
      '# For the pastry',
      '300 g plain flour',
      '1 tbsp sugar',
      '1 tsp fine sea salt',
      '225 g cold unsalted butter, cubed',
      '90 ml ice water',
      '1 egg, beaten with 1 tbsp milk',
      '1 tbsp coarse sugar',
      '# For the filling',
      '900 g blueberries, fresh or frozen',
      '130 g sugar',
      '40 g cornflour',
      '1 tbsp lemon juice, plus 1 tsp zest',
      '0.25 tsp ground cinnamon',
      '0.25 tsp fine sea salt',
      '1 tbsp unsalted butter, diced'
    ],
    st: [
      'Pulse the flour, sugar, salt and butter in a food processor until the butter is pea-sized. Add the water and pulse until the dough just clumps.',
      'Divide into two discs, wrap and chill 1 hour.',
      'Heat the oven to 200°C / 400°F with a baking tray on the lowest shelf.',
      'Put 300 g of the blueberries in a saucepan with the sugar, cornflour and lemon juice and cook over medium heat 5 minutes, mashing lightly, until thick and glossy. Stir in the zest, cinnamon and salt and cool 10 minutes.',
      'Fold in the remaining raw blueberries.',
      'Roll one disc to 30 cm and fit into a 23 cm pie dish. Tip in the filling and dot with butter.',
      'Roll the second disc, cut into 2 cm strips and weave a lattice over the top. Trim, crimp the edge and brush with the egg wash and coarse sugar.',
      'Set the pie on the hot tray and bake 55 to 60 minutes, until the crust is deep golden and the filling bubbles through the lattice.',
      'Cool on a rack for at least 3 hours before slicing.'
    ],
    tips: [
      'Cook a third of the berries first. It is what sets the filling.',
      'Use frozen berries straight from the freezer so they do not bleed into the crust.',
      'Cover the edge with foil if it darkens before the middle bubbles.'
    ],
    pair: ['Vanilla ice cream', 'Lightly whipped cream', 'A cup of tea'],
    store: 'Keep covered at room temperature 2 days, then refrigerate up to 5 days. Freeze whole, baked, for 3 months.',
    nut: [427, 4, 60, 19, 4, 26, 250],
    rest: [240, 'chilling the dough and cooling the pie']
  },

  'whoopie-pies': {
    d: 'Soft chocolate cakes sandwiched around a marshmallow buttercream. Fifty-four minutes, and they are eaten in the hand.',
    meta: 'Whoopie pies: domed, tender chocolate cake rounds sandwiched with a fluffy marshmallow buttercream. Soft, moist and made in one bowl.',
    kw: ['whoopie pies', 'whoopie pies recipe', 'chocolate whoopie pies', 'whoopie pies with marshmallow filling', 'homemade whoopie pies'],
    why: 'A whoopie pie is a cake baked as a cookie, so the batter is soft and thick rather than a dough, and it domes as it bakes. Buttermilk and bicarbonate give it lift and a tender crumb, and the cocoa is bloomed by the hot melted butter for a deeper flavour. The filling has to be fluffy and stable enough to sit between two soft rounds without squeezing out, which is what the marshmallow cream is for.',
    ing: [
      '# For the cakes',
      '250 g plain flour',
      '60 g unsweetened cocoa powder',
      '1 tsp bicarbonate of soda',
      '0.5 tsp baking powder',
      '0.5 tsp fine sea salt',
      '115 g unsalted butter, softened',
      '200 g light brown sugar',
      '1 large egg',
      '1 tsp vanilla extract',
      '240 ml buttermilk',
      '# For the filling',
      '115 g unsalted butter, softened',
      '200 g icing sugar, sifted',
      '150 g marshmallow cream',
      '1 tsp vanilla extract',
      '1 to 2 tbsp milk',
      'A pinch of fine sea salt'
    ],
    st: [
      'Heat the oven to 175°C / 350°F and line two trays with baking paper.',
      'Whisk the flour, cocoa, bicarbonate, baking powder and salt in a bowl.',
      'Beat the butter and brown sugar for 3 minutes until pale and fluffy. Beat in the egg and vanilla.',
      'Add the dry ingredients in three additions, alternating with the buttermilk, and mix until just combined into a thick batter.',
      'Drop 24 heaped tablespoons of batter onto the trays, 5 cm apart.',
      'Bake 10 to 12 minutes, until domed and springy when pressed. Cool on the trays 5 minutes, then move to a wire rack and cool completely, about 30 minutes.',
      'For the filling, beat the butter until creamy, then beat in the icing sugar, marshmallow cream, vanilla, salt and milk for 3 minutes until light and fluffy.',
      'Spread or pipe filling onto the flat side of half the cakes and sandwich with the rest.'
    ],
    tips: [
      'Cool the cakes completely before filling or the buttercream melts.',
      'Use a cookie scoop for even sizes, so the halves match.',
      'Chill the filled pies for 15 minutes for cleaner bites.'
    ],
    pair: ['A cold glass of milk', 'Hot coffee', 'Fresh strawberries'],
    store: 'Refrigerate in a covered container up to 5 days and bring to room temperature before eating. Freeze filled pies wrapped for 2 months.',
    nut: [360, 4, 50, 16, 2, 34, 260]
  },

  'chocolate-crinkle-cookies': {
    d: 'Fudgy chocolate cookies rolled in icing sugar so they crack into white fissures as they bake. Two hours of chilling first.',
    meta: 'Chocolate crinkle cookies: fudgy, brownie-like cookies rolled in icing sugar that crack into a snowy crinkle pattern as they bake.',
    kw: ['chocolate crinkle cookies', 'chocolate crinkle cookies recipe', 'crinkle cookies with powdered sugar', 'fudgy chocolate crinkle cookies', 'christmas crinkle cookies'],
    why: 'The crinkles are a chemistry trick. The dough is wet, oil-based and chilled solid, and it is rolled in granulated sugar and then a thick coat of icing sugar. In the oven the cookie puffs and spreads, and the outer coat, which has dried and set, cannot stretch with it, so it splits and lets the dark dough show through the white. Oil rather than butter keeps them fudgy, and the chill is what makes a wet dough rollable.',
    ing: [
      '190 g plain flour',
      '60 g unsweetened cocoa powder',
      '1.5 tsp baking powder',
      '0.25 tsp fine sea salt',
      '200 g granulated sugar',
      '80 ml vegetable oil',
      '3 large eggs',
      '2 tsp vanilla extract',
      '30 g granulated sugar, for rolling',
      '80 g icing sugar, for rolling'
    ],
    st: [
      'Whisk the flour, cocoa, baking powder and salt in a bowl.',
      'Whisk the sugar and oil in a large bowl, then whisk in the eggs one at a time and the vanilla.',
      'Stir in the dry ingredients until a soft, sticky dough forms.',
      'Cover and chill for at least 2 hours, until firm enough to roll.',
      'Heat the oven to 175°C / 350°F and line two trays with baking paper.',
      'Roll the dough into 24 balls the size of a walnut. Roll each first in the granulated sugar, then in a thick coat of icing sugar.',
      'Space the balls 5 cm apart on the trays and bake one tray at a time for 11 to 13 minutes, until the tops are cracked and the edges are set but the centres still soft.',
      'Cool on the tray 5 minutes, then move to a rack.'
    ],
    tips: [
      'Roll in icing sugar twice if the coat looks thin. A thick coat gives the best cracks.',
      'Take them out while the centres are soft. They firm as they cool.',
      'Chill the dough until it is properly firm, or it is too sticky to roll.'
    ],
    pair: ['A glass of cold milk', 'Coffee', 'Vanilla ice cream'],
    store: 'Keep in an airtight container 5 days. Freeze the baked cookies for 3 months, or freeze the balls, uncoated, and roll in sugar before baking.',
    nut: [121, 2, 17, 5, 1, 12, 50],
    rest: [120, 'chilling the dough']
  },

  'banana-muffins': {
    d: 'Tall, domed banana muffins with a moist crumb and a sugared top, started hot for a high rise. Thirty-seven minutes.',
    meta: 'Banana muffins: tall, moist and domed, made with very ripe bananas, yogurt and cinnamon, and started at a high heat for a bakery rise.',
    kw: ['banana muffins', 'banana muffins recipe', 'moist banana muffins', 'bakery style banana muffins', 'banana muffins with ripe bananas'],
    why: 'Bakery muffins have tall domed tops because the oven starts very hot: five minutes at 200°C makes the batter rise fast before the crust sets, and dropping to 180°C then bakes the middle through without burning the top. Overripe bananas, speckled brown or black, are sweeter and give more moisture, and the yogurt keeps the crumb tender. Stir the batter until just combined, since muffins mixed like a cake turn tough and tunnelled.',
    ing: [
      '280 g plain flour',
      '1.5 tsp baking powder',
      '0.5 tsp bicarbonate of soda',
      '0.5 tsp fine sea salt',
      '1 tsp ground cinnamon',
      '3 very ripe bananas, mashed, about 350 g',
      '100 g light brown sugar',
      '60 g granulated sugar',
      '2 large eggs',
      '80 ml vegetable oil',
      '120 g plain Greek yogurt',
      '1 tsp vanilla extract',
      '2 tbsp coarse sugar, for the tops'
    ],
    st: [
      'Heat the oven to 200°C / 400°F and line a 12-hole muffin tin with paper cases.',
      'Whisk the flour, baking powder, bicarbonate, salt and cinnamon in a large bowl.',
      'In a second bowl whisk the bananas, both sugars, eggs, oil, yogurt and vanilla until smooth.',
      'Pour the wet mixture into the dry and fold with a spatula just until no dry flour shows. The batter should be thick and lumpy.',
      'Divide between the cases, filling them to the top, and scatter with the coarse sugar.',
      'Bake at 200°C for 5 minutes, then lower the oven to 180°C / 350°F and bake 15 to 17 minutes more, until a skewer comes out clean.',
      'Cool 5 minutes in the tin, then move to a rack.'
    ],
    tips: [
      'Use bananas with black speckles. Yellow ones give a bland muffin.',
      'Start hot for the dome, then drop the temperature.',
      'Stop mixing while the batter is still lumpy.'
    ],
    pair: ['Butter', 'A latte', 'Greek yogurt'],
    store: 'Keep in an airtight container 3 days. Freeze for 3 months and warm in the microwave for 30 seconds.',
    nut: [249, 4, 38, 9, 1, 22, 210]
  },

  'apple-cider-donuts': {
    d: 'Baked cake doughnuts made with apple cider boiled down to a syrup, brushed with butter and rolled in cinnamon sugar. Fifty minutes.',
    meta: 'Baked apple cider donuts: cake doughnuts made with reduced apple cider, brushed with butter and rolled in cinnamon sugar while still warm.',
    kw: ['apple cider donuts', 'apple cider donuts recipe', 'baked apple cider donuts', 'apple cider doughnuts with cinnamon sugar', 'reduced apple cider donuts'],
    why: 'The cider is reduced from a cupful to about a quarter of that, which concentrates the apple flavour into a syrup that survives the bake; put in as it comes, the cider is too dilute to taste. The donuts are baked in a doughnut tin rather than fried, so the batter is closer to a muffin than a dough and stays tender. The cinnamon sugar sticks only to a surface that is still warm and buttered, so they are coated as soon as they are cool enough to handle.',
    ing: [
      '# For the donuts',
      '240 ml apple cider',
      '250 g plain flour',
      '1.5 tsp baking powder',
      '0.5 tsp bicarbonate of soda',
      '0.5 tsp fine sea salt',
      '1 tsp ground cinnamon',
      '0.25 tsp freshly grated nutmeg',
      '60 g unsalted butter, softened',
      '150 g light brown sugar',
      '1 large egg',
      '120 ml buttermilk',
      '1 tsp vanilla extract',
      '# For the coating',
      '60 g unsalted butter, melted',
      '100 g granulated sugar',
      '2 tsp ground cinnamon'
    ],
    st: [
      'Simmer the cider in a small saucepan for 15 to 18 minutes, until it has reduced to about 60 ml of syrup. Cool.',
      'Heat the oven to 190°C / 375°F and grease a 12-hole doughnut tin.',
      'Whisk the flour, baking powder, bicarbonate, salt, cinnamon and nutmeg.',
      'Beat the butter and brown sugar for 2 minutes, then beat in the egg, buttermilk, vanilla and reduced cider.',
      'Fold in the dry ingredients until just combined.',
      'Spoon into a piping bag and fill the holes two thirds full.',
      'Bake 10 to 12 minutes, until springy and a skewer comes out clean.',
      'Cool in the tin 5 minutes and turn out.',
      'Mix the sugar and cinnamon in a shallow dish. Brush each warm donut all over with melted butter and roll in the cinnamon sugar.'
    ],
    tips: [
      'Reduce the cider properly. Fresh cider tastes of nothing once baked.',
      'Coat them while warm. The butter is the glue for the sugar.',
      'Pipe the batter, since spooning gives uneven rings.'
    ],
    pair: ['Hot spiced cider', 'Coffee', 'A crisp autumn afternoon'],
    store: 'Best the day they are made. Keep in a container up to 2 days. Freeze uncoated for 2 months and coat after thawing.',
    nut: [236, 3, 38, 8, 1, 22, 210]
  },

  'peanut-brittle': {
    d: 'Roasted peanuts in a cooked sugar syrup, foamed with bicarbonate and pulled thin until it snaps. Thirty-five minutes.',
    meta: 'Old-fashioned peanut brittle: roasted peanuts in amber sugar and corn syrup, lightened with bicarbonate of soda and stretched thin until it snaps.',
    kw: ['peanut brittle', 'peanut brittle recipe', 'homemade peanut brittle', 'old fashioned peanut brittle', 'peanut brittle with baking soda'],
    why: 'Brittle is sugar taken to the hard-crack stage, 150°C, at which the syrup will set glassy and snap. Corn syrup stops the sugar recrystallising into grains. The bicarbonate is added at the very end because it reacts with the acids in the caramelised sugar and releases carbon dioxide, filling the brittle with tiny bubbles that make it light and tender rather than a tooth-breaking slab. Everything must be ready before the syrup is on the heat, because the last stage takes seconds.',
    ing: [
      '200 g granulated sugar',
      '120 ml light corn syrup or golden syrup',
      '60 ml water',
      '0.5 tsp fine sea salt',
      '250 g roasted salted peanuts',
      '30 g unsalted butter',
      '1 tsp vanilla extract',
      '1 tsp bicarbonate of soda'
    ],
    st: [
      'Line a large baking tray with a silicone mat or grease it well with butter. Measure out the peanuts, butter, vanilla and bicarbonate and keep them next to the stove.',
      'Stir the sugar, corn syrup, water and salt in a heavy pan over medium heat until the sugar dissolves, then stop stirring.',
      'Bring to a boil and cook until the syrup reaches 135°C / 275°F on a thermometer, about 12 minutes.',
      'Stir in the peanuts and cook 5 to 8 minutes more, stirring constantly, until it reaches 150°C / 300°F and turns deep amber.',
      'Take off the heat and quickly stir in the butter and vanilla, then the bicarbonate. It will foam up.',
      'Pour at once onto the tray and spread thin with an oiled spatula, using two forks to stretch it further.',
      'Cool completely, about 30 minutes, then break into pieces.'
    ],
    tips: [
      'Have everything measured before you start. The last stage takes seconds.',
      'Take it to 150°C. Below that it is chewy and sticks to the teeth.',
      'Hot sugar burns badly. Keep children and pets out of the kitchen.'
    ],
    pair: ['Vanilla ice cream', 'Strong coffee', 'A gift tin at Christmas'],
    store: 'Keep in an airtight container with baking paper between layers up to 2 weeks. Humidity makes it sticky, so do not refrigerate.',
    nut: [185, 4, 22, 9, 1, 19, 95]
  },

  'dinner-rolls': {
    d: 'Soft, buttery pull-apart rolls from a milk-and-egg dough, brushed with butter while hot. Fifty minutes of work and ninety of rising.',
    meta: 'Soft dinner rolls from a rich milk-and-egg dough, shaped into balls, risen twice and brushed with melted butter straight from the oven.',
    kw: ['dinner rolls', 'dinner rolls recipe', 'soft dinner rolls', 'homemade dinner rolls', 'buttery pull apart rolls'],
    why: 'The milk, egg and butter in the dough make the crumb tender and the crust thin and soft rather than crisp, which is the difference between a dinner roll and a bread roll. The dough is deliberately soft and slightly sticky and is kneaded until it stretches into a thin, translucent window, because it is the gluten that lets the rolls rise tall instead of spreading. Shaping them to touch in the tin means they rise upwards and bake into a soft, pull-apart sheet.',
    ing: [
      '500 g strong white bread flour',
      '7 g instant yeast',
      '1.5 tsp fine sea salt',
      '50 g sugar',
      '240 ml whole milk, warmed',
      '1 large egg',
      '60 g unsalted butter, melted, plus 30 g for brushing',
      'Flaky sea salt, to finish'
    ],
    st: [
      'Mix the flour, yeast, salt and sugar in a large bowl. Add the warm milk, egg and melted butter and stir into a shaggy dough.',
      'Knead on a lightly floured surface for 8 to 10 minutes, until smooth and elastic and a small piece stretches into a thin window.',
      'Put in a greased bowl, cover and leave to rise for 1 hour, until doubled.',
      'Butter a 23 x 33 cm baking dish.',
      'Divide the dough into 12 equal pieces and roll each into a smooth ball. Set them in the dish, touching.',
      'Cover and prove for 30 minutes, until puffy and filling the dish.',
      'Heat the oven to 190°C / 375°F.',
      'Bake 18 to 20 minutes, until deep golden.',
      'Brush the hot rolls with the extra melted butter and scatter with flaky salt.'
    ],
    tips: [
      'Knead until the dough passes the window test. That is what gives height.',
      'Keep the dough slightly sticky. Too much flour makes dry rolls.',
      'Brush with butter the second they leave the oven.'
    ],
    pair: ['Roast turkey', 'A hearty stew', 'Whipped honey butter'],
    store: 'Best the day they are baked. Keep in a bag 2 days and warm at 160°C for 5 minutes. Freeze baked rolls for 3 months.',
    nut: [206, 6, 32, 6, 1, 4, 260],
    rest: [90, 'rising and proving the dough']
  }
};
