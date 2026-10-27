'use strict';
/**
 * The cooking guides: a few short pages on the questions recipes keep raising.
 *
 * Rules for this file
 * -------------------
 * - Every factual claim that is not plain arithmetic or a description of how
 *   this site works carries a source in `sources`, and the sentence names it.
 * - No experiment is reported. Where a comparison would need cooking to settle
 *   (does rinsing change this rice?), the guide says so and the plan for that
 *   test lives in docs/guides/experiment-plans.md until someone runs it.
 * - `appliesTo(recipe)` decides which recipe pages link to the guide; `examples`
 *   picks the recipes the guide links back to. Both read the built recipe only.
 * - Body blocks are { h: heading } or { p: paragraph } or { ul: [items] };
 *   paragraphs are plain text (escaped when rendered). Links to recipes are made
 *   by the template from `examples`, not written into the prose.
 *
 * Written 27 October 2026 (Claude), without a cook's review. A person should
 * read each against its sources before it is promoted further.
 */

const RICE = /\b(basmati|jasmine|arborio|carnaroli|bomba|calasparra|sushi rice|short-grain rice|long-grain rice|glutinous rice|sticky rice|paella rice|risotto rice|brown rice|wild rice|rice)\b/i;
const EMULSION = /\b(hollandaise|b[eé]arnaise|mayonnaise|aioli|aïoli|beurre blanc|carbonara|caesar|vinaigrette|toum)\b/i;

const GUIDES = [
  {
    slug: 'active-and-total-time',
    title: 'Prep, Cook and Total Time: Reading a Recipe\'s Clock',
    short: 'Prep, cook and total time',
    description: 'What prep, cook, waiting and total time mean on a Weekly Delight recipe, why the total includes marinating and proving, and what none of them include.',
    lede: 'Three numbers sit at the top of every recipe, and the one that decides whether dinner is at seven or at nine is the last.',
    body: [
      { p: 'Prep time is the work before anything goes on the heat: chopping, weighing, mixing. Cook time is the time the food spends cooking. Google\'s documentation for recipe pages defines them the same way, as the time to prepare the ingredients and workspace and the time to actually cook the dish, and asks for both.' },
      { p: 'Neither covers waiting. A marinade, a dough rising, a cake cooling before it can be iced, tofu pressed under a weight: the cook is free during these, but the dish is not ready. On this site that waiting is read from the method itself and added to the total, so a focaccia that proves overnight is never listed as a 50-minute bake.' },
      { h: 'What "total" means here' },
      { ul: [
        'Total is start to finish: prep, cooking and every wait the method requires.',
        'Where the method gives a range ("prove 1 to 2 hours", "simmer 2½ to 3 hours"), the total is a range too.',
        'Where the method needs time it does not state ("cool completely"), the page says "at least" and names the stage. A number that hides an untimed stage would be a promise the recipe cannot keep.',
        'A wait that happens while you do something else ("chill the base while you make the filling") is not added twice.',
        'Optional make-ahead steps and storage are not part of the total.'
      ] },
      { h: 'What no recipe time includes' },
      { p: 'Heating the oven, bringing a large pan of water to the boil, finding the tin, and the washing-up are not in any recipe\'s minutes, here or elsewhere. Your hob, your pan and the size of your onions all move the numbers. Treat every time as the recipe\'s estimate and the cue in the method ("until golden", "until a skewer comes out clean") as the instruction.' },
      { h: 'Using the times to plan' },
      { p: 'Read the method before you shop. If the total is much larger than prep plus cook, there is a wait in it, and the waiting is usually the part that can happen the day before. The 30-minute filters and collections on this site use the total, never prep plus cook, so a recipe with a two-hour marinade is never offered as a quick dinner.' }
    ],
    sources: [
      { name: 'Google Search Central, "Recipe (Recipe, HowTo, ItemList) structured data"', url: 'https://developers.google.com/search/docs/appearance/structured-data/recipe' }
    ],
    appliesTo: r => (r.restTime > 0 || r.restMax > 0 || !!r.untimed),
    examples: R => R.filter(r => r.restTime >= 60 && r.role === 'main' && !r.roleReview && r.imageData).sort((a, b) => b.popularity - a.popularity).slice(0, 6)
  },
  {
    slug: 'choosing-rice',
    title: 'Choosing Rice: Long, Medium and Short Grain',
    short: 'Choosing rice',
    description: 'Why basmati, arborio, bomba and sushi rice behave differently, which to use for pilaf, risotto, paella and fried rice, and how to keep cooked rice safely.',
    lede: 'The rice a recipe names is usually there for a reason: different rices hold different starches, and the starch decides whether the grains stay separate or turn creamy.',
    body: [
      { p: 'Rice starch is a mix of two kinds, amylose and amylopectin. Broadly, the more amylose a rice has, the firmer and more separate its grains cook; the more amylopectin, the softer and stickier. Long-grain rices tend to sit at the high-amylose end, short-grain rices at the low end, and glutinous ("sticky") rice has almost none. The grain\'s length is a rough guide, not a rule: food scientists have found that the structure of the amylopectin matters as well as the amount of amylose.' },
      { h: 'Which rice for which job' },
      { ul: [
        'Separate, fluffy grains (pilaf, biryani, plain rice beside a curry): a long-grain rice such as basmati, or jasmine, which is long-grain but softer and slightly clingy.',
        'Creamy, loose risotto: a medium-grain Italian rice such as arborio or carnaroli, stirred so the surface starch thickens the liquid.',
        'Paella: a short, round Spanish rice such as bomba, which is not stirred once the stock is in.',
        'Sushi and onigiri: Japanese short-grain rice, sticky enough to hold a shape.',
        'Mango sticky rice and other sweet sticky rice dishes: glutinous rice, usually soaked and steamed rather than boiled.',
        'Fried rice: cooked rice that has been chilled, so the grains are firm enough to fry without turning to mush.'
      ] },
      { p: 'Swapping one for another is possible, but the result changes: basmati in a risotto stays in separate grains and never turns creamy; arborio in a pilaf turns soft and sticky. When a recipe here names a rice, the method\'s times are for that rice.' },
      { h: 'Keeping cooked rice' },
      { p: 'Cooked rice needs more care than most leftovers. Food Standards Scotland explains that uncooked rice can contain spores of Bacillus cereus that survive cooking, and that the longer cooked rice sits at room temperature, the more likely the bacteria are to produce a toxin that makes it unsafe. Its advice: chill cooked rice as quickly as possible, ideally within an hour (spreading it out or dividing it helps), do not keep it longer than 24 hours, make sure it is steaming hot all the way through when you reheat it, and never reheat it more than once. The recipes on this site that start from cold cooked rice say so in the ingredient list, and their times do not include cooking it.' },
      { h: 'What this guide does not settle' },
      { p: 'Whether rinsing makes a noticeable difference to each of the rices above, and how much the water ratio should change for each, are questions for a side-by-side test in a kitchen. That test has not been done for this site; the plan for it is recorded for whoever cooks it.' }
    ],
    sources: [
      { name: 'Food Standards Scotland, "Rice" (storing and reheating cooked rice)', url: 'https://www.foodstandards.gov.scot/consumers/food-safety/at-home/rice' },
      { name: 'Rouxbe, "What Makes Rice Sticky?" (amylose and amylopectin)', url: 'https://rouxbe.com/tips-techniques/374-what-makes-rice-sticky' },
      { name: 'Cereal Chemistry 82(2), March 2005: amylopectin structure and cooked rice texture (Cereals & Grains Association)', url: 'https://cerealsgrains.org/publications/cc/2005/March/Pages/82_2_113.aspx' }
    ],
    appliesTo: r => r.ingredients.some(l => RICE.test(l) && !/rice (?:vinegar|noodles|paper|wine|flour|cakes?)/i.test(l)),
    examples: R => ['jollof-rice', 'paella-valenciana', 'egg-fried-rice', 'chicken-biryani', 'mango-sticky-rice', 'risotto-alla-milanese', 'one-pot-chicken-and-rice']
      .map(s => R.find(r => r.slug === s)).filter(Boolean)
  },
  {
    slug: 'pan-size',
    title: 'Pan and Tin Size: Why It Changes the Result',
    short: 'Pan and tin size',
    description: 'How to swap a cake tin, loaf tin or tray for another size or shape: compare the areas, keep the depth, and trust the doneness cue rather than the clock.',
    lede: 'A recipe\'s tin size is part of the recipe. Change it and the same batter sits at a different depth, which changes how long it takes and how it rises.',
    body: [
      { p: 'The comparison that matters is area, at the same depth. A square or rectangular tin\'s area is its length times its width. A round tin\'s is half the diameter, squared, times pi (3.14). King Arthur Baking works through exactly this sum to show that an 8-inch square tin and a 9-inch round tin hold the same amount, about 64 square inches each, and can stand in for each other.' },
      { h: 'Some metric comparisons' },
      { ul: [
        'A 20 cm square tin: 20 × 20 = 400 cm².',
        'A 23 cm round tin: 11.5 × 11.5 × 3.14 ≈ 415 cm², close enough to swap for a 20 cm square.',
        'A 20 cm round tin: 10 × 10 × 3.14 ≈ 314 cm², about a fifth smaller than the 20 cm square, so the same batter sits deeper.',
        'A 23 × 33 cm traybake tin: 759 cm², almost twice the 20 cm square.'
      ] },
      { p: 'If the areas are close, use the recipe as written. If your tin is larger, the batter is shallower and will cook faster; if it is smaller, the batter is deeper, takes longer, and may need the heat lowered so the outside does not overbake before the middle sets. King Arthur also notes that depth matters for cakes and suggests keeping to tins of the depth the recipe assumes.' },
      { h: 'Check early, trust the cue' },
      { p: 'Whatever you change, start checking well before the recipe\'s time and rely on the doneness test the method gives: a skewer coming out clean, a hollow sound underneath, an even golden top. Those cues hold in any tin; the minutes do not.' },
      { h: 'Frying pans and trays' },
      { p: 'The same logic applies outside baking. A crowded frying pan or roasting tray tends to steam the food rather than brown it. If you scale a recipe up, use a bigger pan or two, or cook in batches, rather than piling more into the pan the recipe names.' }
    ],
    sources: [
      { name: 'King Arthur Baking, "The essential alternative baking pan sizes"', url: 'https://www.kingarthurbaking.com/blog/2019/04/23/the-essential-alternative-baking-pan-sizes' }
    ],
    appliesTo: r => r.equipmentSizes.length > 0,
    examples: R => ['banana-bread', 'flapjacks', 'gateau-au-yaourt', 'madeira-cake', 'sticky-toffee-pudding', 'fudgy-brownies']
      .map(s => R.find(r => r.slug === s)).filter(Boolean)
  },
  {
    slug: 'ingredient-substitutions',
    title: 'Ingredient Substitutions: What Each Swap Changes',
    short: 'Ingredient substitutions',
    description: 'How common swaps change a dish: butter and oil, baking soda and powder, honey and sugar, and dairy-free or gluten-free versions, and what to expect.',
    lede: 'Most swaps work in the sense that you still get dinner. What changes is the texture, the browning or the flavour, and it helps to know which before you start.',
    body: [
      { h: 'Butter and oil' },
      { p: 'Butter is roughly four-fifths fat; most of the rest is water, with a little milk protein (USDA FoodData Central lists about 81 g of fat in 100 g of salted butter). Oil is all fat. In frying, oil tolerates more heat before it burns, because the milk solids in butter brown and then scorch. In baking, swapping melted butter for oil usually works in a batter where the butter was melted anyway, but not where butter is creamed with sugar: that step traps air, and oil cannot do it. Expect a different crumb and less butter flavour.' },
      { h: 'Baking soda and baking powder' },
      { p: 'They are not interchangeable spoon for spoon. Baking soda needs an acid in the recipe (buttermilk, yoghurt, lemon juice, brown sugar, natural cocoa) to release its gas. Baking powder carries its own acid. A recipe that names one has been balanced for it; changing it alters the rise, the colour and sometimes the taste, and published conversion ratios disagree. If you have to swap, make a small batch first.' },
      { h: 'Honey or syrup for sugar' },
      { p: 'Liquid sweeteners add water and brown faster than sugar. In a sauce or dressing the swap is easy; in a bake it changes the batter\'s wetness and the colour of the crust. On this site, recipes that offer "honey or sugar" are written to work with either.' },
      { h: 'Dairy-free, vegan and gluten-free swaps' },
      { p: 'Each recipe page lists the swaps its own ingredients allow, and a diet label that holds only with a swap says so ("Vegan option") and names the swap. Those lists come from the ingredient names, not from cooking: they tell you what to replace, not that the result has been tried. Gluten-free flour blends in particular behave differently from wheat flour, and a recipe written for wheat will not always come out the same.' },
      { h: 'Traditional and practical versions' },
      { p: 'Some dishes are known by an ingredient: guanciale in a carbonara or an amatriciana, for example. Pancetta or bacon instead makes a perfectly good dinner, and a different dish from the one the name describes. Where a recipe here names the traditional ingredient and offers an alternative, both are written to work; the choice is yours.' }
    ],
    sources: [
      { name: 'USDA FoodData Central, "Butter, salted", SR Legacy, FDC ID 173410 (search the ID at fdc.nal.usda.gov)', url: 'https://fdc.nal.usda.gov/' },
      { name: 'Healthline, "Baking Soda vs Baking Powder: What\'s the Difference?"', url: 'https://www.healthline.com/nutrition/baking-soda-vs-baking-powder' }
    ],
    appliesTo: r => (r.dietStatus && Object.values(r.dietStatus).some(d => d && d.status === 'conditional')),
    examples: R => ['spaghetti-carbonara', 'banana-bread', 'buttermilk-pancakes', 'chocolate-chip-cookies', 'soda-bread', 'english-scones']
      .map(s => R.find(r => r.slug === s)).filter(Boolean)
  },
  {
    slug: 'split-sauce',
    title: 'How to Rescue a Split Sauce',
    short: 'Rescuing a split sauce',
    description: 'Why mayonnaise, hollandaise, béarnaise and carbonara sauces split, how to bring one back with a fresh egg yolk, and how to stop it happening next time.',
    lede: 'A split sauce has not failed for good. The fat and the liquid have separated, and in most cases they can be brought back together.',
    body: [
      { p: 'Mayonnaise, aioli, hollandaise, béarnaise and beurre blanc are emulsions: tiny droplets of fat held apart in a small amount of liquid, with egg yolk or reduced butter solids keeping them suspended. They split when the droplets merge, which happens for two common reasons: the fat went in too fast for the yolk to take it, or the temperature went wrong, too hot for an egg sauce (the yolk sets and stops working) or too cold for a butter one.' },
      { h: 'The rescue' },
      { ul: [
        'Take the pan off the heat at once if it is a warm sauce.',
        'Put a fresh egg yolk in a clean bowl. For a sauce served without further cooking, use a pasteurised yolk (British Lion-stamped in the UK), as the recipes here do.',
        'Whisk the split sauce into the new yolk a drop at a time, as slowly as you added the oil or butter the first time. Once it thickens, you can add the rest a little faster.',
        'Do not add the new yolk to the split sauce; the order matters, because the yolk has to be in charge of a small amount of fat at the start.',
        'If an egg sauce has scrambled into curds, the yolk has set; a fresh yolk may help, but a sauce with visible cooked egg is better started again.'
      ] },
      { p: 'Several cooks also suggest whisking a teaspoon of water into a sauce that is just starting to look greasy, before it fully splits. That is a common kitchen remedy rather than something this site has tested.' },
      { h: 'Stopping it happening' },
      { ul: [
        'Start the oil or butter literally drop by drop, then a thin stream once the sauce thickens.',
        'Keep hollandaise and béarnaise warm, not hot: over barely simmering water, never boiling.',
        'Have the yolks and oil at room temperature for mayonnaise.',
        'For carbonara, take the pan off the heat before the egg goes in and loosen with pasta water; the aim is a sauce, not scrambled egg.'
      ] }
    ],
    sources: [
      { name: 'Food Republic, "How To Fix Split Hollandaise Sauce"', url: 'https://www.foodrepublic.com/1755791/how-fix-broken-hollandaise-sauce/' },
      { name: 'Eat Your Books, "How to fix a broken emulsion"', url: 'https://wp.eatyourbooks.com/blog/2025/02/23/how-to-fix-a-broken-emulsion' }
    ],
    appliesTo: r => EMULSION.test(r.title),
    examples: R => ['aioli', 'bearnaise-sauce', 'spaghetti-carbonara', 'caesar-salad', 'oeufs-mayonnaise', 'spargel-mit-hollandaise']
      .map(s => R.find(r => r.slug === s)).filter(Boolean)
  }
];

module.exports = { GUIDES };
