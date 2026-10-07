'use strict';

/**
 * The three health labels, as rules.
 *
 *   Diabetes-Friendly      a serving that is easy to fit into carbohydrate counting
 *   Weight-Loss Friendly   a serving that is small in calories and still filling
 *   Kidney-Friendly        a serving that stays under sodium, potassium and phosphorus limits
 *
 * A label here is a claim about numbers on the page, and nothing else. The README
 * used to say this site would never tag a recipe for diabetes, because whether a
 * meal suits somebody managing it depends on their medication, their portion and the
 * rest of their day, which a recipe cannot know, and Diabetes UK is plain that there is
 * no such thing as a diabetic food. That is still true and these labels do not argue
 * with it. What changed is that readers ask for recipes in exactly these terms, and the
 * honest way to answer is to say what the label measures, print the measurements, hold
 * every tagged recipe to them on every build, and say beside them that they are not
 * advice. The limits are the ones below, in one place, so that the recipe page, the
 * audit (tools/health-audit.js) and the documentation cannot drift apart.
 *
 * The label never says "safe" and never says a food treats, lowers or prevents anything.
 * Kidney-Friendly in particular is a statement about three nutrients; the protein a person
 * with kidney disease needs is restricted at some stages and raised at others, so the page
 * leaves protein out of the rules and sends the reader to their care team.
 *
 * Tags are written by hand into the catalogue rows of the volumes that carry them and are
 * checked, not derived, so that adding this file does not change a single page that
 * predates it.
 */

const DIABETES = 'Diabetes-Friendly';
const WEIGHT_LOSS = 'Weight-Loss Friendly';
const KIDNEY = 'Kidney-Friendly';
const TAGS = [DIABETES, WEIGHT_LOSS, KIDNEY];

/* Categories whose servings are a snack, a side, a sweet or a drink rather than a meal. */
const SMALL = new Set(['Appetizers', 'Baking', 'Desserts', 'Drinks']);
const isSmall = recipe => SMALL.has(recipe.category);

/* ------------------------------------------------------------ the limits */

const LIMITS = {
  diabetes: { carbsMeal: 40, carbsSmall: 20, fibreAbove: 20, fibreMin: 3, sodium: 700 },
  weightLoss: { kcal: 400, fillingAbove: 200, protein: 15, fibre: 5 },
  kidney: { sodium: 500, potassium: 700, phosphorus: 350 }
};

/* Sugar the ingredient list adds. "No Added Sugar" is derived in diet-derived.js from the
   obvious words (sugar, honey, syrup, molasses, condensed milk...). A sauce that is mostly
   sugar hides behind its own name, so the diabetes label also refuses those: ketchup is
   not sweetened by the cook, but it arrives sweetened. Unsweetened and sugar-free
   versions do not match. */
const SWEETENED = /\b(?:ketchup|catsup|bbq sauce|barbecue sauce|hoisin|teriyaki|sweet chil+i|plum sauce|jams?|jellies|jelly|marmalade|preserves|fruit spread|juice concentrate|candied|glazed|flavou?red yogh?urt|vanilla yogh?urt|fruit yogh?urt|dark chocolate|milk chocolate|white chocolate|chocolate bar|granola|cola|lemonade mix|dried (?:cranberries|cherries|mango|pineapple|fruit))\b/i;

/* What a kidney-friendly ingredient list does not contain. The potassium and phosphorus
   figures are read from standard food tables for the foods as they come, and cannot see
   what a manufacturer has added, so the foods that are all additive are refused by name. */
const KIDNEY_REFUSED = /\b(?:salt substitute|lite salt|low[- ]sodium salt|potassium chloride|bacon|ham|sausages?|salami|pepperoni|chorizo|hot dogs?|frankfurters?|luncheon meat|deli meat|corned beef|spam|jerky|processed cheese|cheese slices?|cheese spread|stock cubes?|bouillon|instant noodles?|canned soup|condensed soup|cola|dark soda)\b/i;

const ingredientText = recipe => (recipe.ingredients || [])
  .filter(line => !String(line).startsWith('# ')).join('\n');

/* ---------------------------------------------------------------- checks */

const n = (value, unit) => `${value} ${unit}`;

/**
 * One check: what was measured, what the limit is, and whether the recipe is inside it.
 * `kind` is "max" (at most), "min" (at least) or "none" (a yes/no about the ingredients).
 */
function check(id, label, kind, value, limit, unit, ok) {
  return { id, label, kind, value, limit, unit, ok };
}

function diabetesChecks(recipe) {
  const nut = recipe.nutrition;
  const small = isSmall(recipe);
  const text = ingredientText(recipe);
  const sweet = SWEETENED.exec(text);
  const hasAddedSugar = !(recipe.tags || []).includes('No Added Sugar') || Boolean(sweet);
  const L = LIMITS.diabetes;
  const carbLimit = small ? L.carbsSmall : L.carbsMeal;
  const fibreLimit = nut[2] > L.fibreAbove ? L.fibreMin : 0;
  return [
    check('sugar', 'added sugar', 'none', hasAddedSugar ? (sweet ? sweet[0] : 'sugar, honey or syrup') : 'none', 'none', '', !hasAddedSugar),
    check('carbs', 'carbohydrate', 'max', nut[2], carbLimit, 'g', nut[2] <= carbLimit),
    check('fibre', 'fibre', 'min', nut[4], fibreLimit, 'g', nut[4] >= fibreLimit),
    check('sodium', 'sodium', 'max', nut[6], L.sodium, 'mg', nut[6] <= L.sodium)
  ];
}

function weightLossChecks(recipe) {
  const nut = recipe.nutrition;
  const L = LIMITS.weightLoss;
  const filling = nut[0] <= L.fillingAbove || nut[1] >= L.protein || nut[4] >= L.fibre;
  return [
    check('kcal', 'calories', 'max', nut[0], L.kcal, 'kcal', nut[0] <= L.kcal),
    check('filling', nut[0] > L.fillingAbove ? 'protein or fibre' : 'protein or fibre (not needed at this size)', 'none',
      `${nut[1]} g protein, ${nut[4]} g fibre`, `${L.protein} g protein or ${L.fibre} g fibre`, '', filling)
  ];
}

function kidneyChecks(recipe) {
  const nut = recipe.nutrition;
  const kp = recipe.kp;
  const L = LIMITS.kidney;
  const refused = KIDNEY_REFUSED.exec(ingredientText(recipe));
  const known = Array.isArray(kp) && kp.length === 2 && kp.every(v => Number.isFinite(v) && v >= 0);
  return [
    check('sodium', 'sodium', 'max', nut[6], L.sodium, 'mg', nut[6] <= L.sodium),
    check('potassium', 'potassium', 'max', known ? kp[0] : 'not given', L.potassium, 'mg', known && kp[0] <= L.potassium),
    check('phosphorus', 'phosphorus', 'max', known ? kp[1] : 'not given', L.phosphorus, 'mg', known && kp[1] <= L.phosphorus),
    check('ingredients', 'cured meat, salt substitute, stock cube or processed cheese', 'none', refused ? refused[0] : 'none', 'none', '', !refused)
  ];
}

const CHECKS = { [DIABETES]: diabetesChecks, [WEIGHT_LOSS]: weightLossChecks, [KIDNEY]: kidneyChecks };

/** Every check for one label: { ok, checks }. */
function evaluate(recipe, tag) {
  const run = CHECKS[tag];
  if (!run) throw new Error(`no such health label: ${tag}`);
  const checks = run(recipe);
  return { tag, ok: checks.every(c => c.ok), checks };
}

/** The health labels a recipe carries. */
const labelsOf = recipe => TAGS.filter(tag => (recipe.tags || []).includes(tag));

/** What failed, as one line each, for the audit. */
function failures(recipe, tag) {
  return evaluate(recipe, tag).checks.filter(c => !c.ok).map(c => {
    if (c.kind === 'none') return `${c.label}: ${c.value}`;
    return `${c.label} ${c.value}${c.unit ? ` ${c.unit}` : ''}, ${c.kind === 'max' ? 'limit' : 'needs at least'} ${c.limit}${c.unit ? ` ${c.unit}` : ''}`;
  });
}

/* ------------------------------------------------------------ page text */

const ADVICE = {
  [DIABETES]: 'This describes the recipe and is not medical advice. How a meal affects blood sugar depends on medication, portion size and the rest of the day, so compare the carbohydrate figure with your own meal plan and ask your doctor or dietitian.',
  [WEIGHT_LOSS]: 'This describes the recipe, not an outcome. What happens to a person\'s weight depends on everything they eat across the week and on their health, and this is not medical advice. If you have a medical condition or take medication, check with your doctor or dietitian first.',
  [KIDNEY]: 'This describes the recipe and is not medical advice. Limits for sodium, potassium, phosphorus and protein depend on the stage of kidney disease, your blood results and whether you are on dialysis, and protein is restricted at some stages and increased at others. The potassium and phosphorus figures are estimates from standard food tables and cannot see additives in packaged foods. Ask your kidney care team or renal dietitian before making a dish part of your plan.'
};

/**
 * What the recipe page prints for each label the recipe carries: the recipe's own figures,
 * the limits they were held to, and the caution. Built from the same checks the audit
 * runs, so the page cannot say a number is inside a limit that it is outside.
 *
 * @returns {Array<{tag: string, heading: string, facts: string, rule: string, advice: string}>}
 */
function notesFor(recipe) {
  const nut = recipe.nutrition;
  const small = isSmall(recipe);
  return labelsOf(recipe).map(tag => {
    if (tag === DIABETES) {
      const L = LIMITS.diabetes;
      return {
        tag,
        heading: 'Why this is labelled Diabetes-Friendly',
        facts: `A serving has ${n(nut[2], 'g')} carbohydrate, ${n(nut[4], 'g')} fibre and ${n(nut[6], 'mg')} sodium, and nothing on the ingredient list is sugar, honey, syrup or a sweetened sauce.`,
        rule: `The label means a serving stays inside fixed limits: no added sugar; no more than ${n(small ? L.carbsSmall : L.carbsMeal, 'g')} of carbohydrate (the limit for ${small ? 'a snack, side, sweet, drink or bake' : 'a meal'}); at least ${n(L.fibreMin, 'g')} of fibre when there is more than ${n(L.fibreAbove, 'g')} of carbohydrate; and no more than ${n(L.sodium, 'mg')} of sodium.`,
        advice: ADVICE[tag]
      };
    }
    if (tag === WEIGHT_LOSS) {
      const L = LIMITS.weightLoss;
      return {
        tag,
        heading: 'Why this is labelled Weight-Loss Friendly',
        facts: `A serving has ${nut[0]} kcal, ${n(nut[1], 'g')} protein and ${n(nut[4], 'g')} fibre.`,
        rule: `The label means no more than ${L.kcal} kcal a serving, and a serving above ${L.fillingAbove} kcal must also carry at least ${n(L.protein, 'g')} of protein or ${n(L.fibre, 'g')} of fibre, so that it fills as well as it counts.`,
        advice: ADVICE[tag]
      };
    }
    const L = LIMITS.kidney;
    const kp = recipe.kp || [0, 0];
    return {
      tag,
      heading: 'Why this is labelled Kidney-Friendly',
      facts: `A serving has about ${n(nut[6], 'mg')} sodium, ${n(kp[0], 'mg')} potassium and ${n(kp[1], 'mg')} phosphorus, with ${n(nut[1], 'g')} of protein.`,
      rule: `The label means a serving stays inside fixed limits: ${n(L.sodium, 'mg')} of sodium, ${n(L.potassium, 'mg')} of potassium and ${n(L.phosphorus, 'mg')} of phosphorus, with no cured meat, salt substitute, stock cube or processed cheese in the ingredients. Those are roughly a quarter to a third of the daily limits many kidney diets use.`,
      advice: ADVICE[tag]
    };
  });
}

/** The rules as plain sentences, for the README and CLAUDE.md. */
function rulesText() {
  const D = LIMITS.diabetes;
  const W = LIMITS.weightLoss;
  const K = LIMITS.kidney;
  return {
    [DIABETES]: `no added sugar (nothing on the ingredient list that is sugar, honey, syrup or a sweetened sauce); carbohydrate at most ${D.carbsMeal} g a serving, or ${D.carbsSmall} g for an appetizer, bake, dessert or drink; fibre at least ${D.fibreMin} g when carbohydrate is above ${D.fibreAbove} g; sodium at most ${D.sodium} mg`,
    [WEIGHT_LOSS]: `at most ${W.kcal} kcal a serving, and above ${W.fillingAbove} kcal at least ${W.protein} g of protein or ${W.fibre} g of fibre`,
    [KIDNEY]: `sodium at most ${K.sodium} mg, potassium at most ${K.potassium} mg and phosphorus at most ${K.phosphorus} mg a serving, the potassium and phosphorus figures given in the recipe's \`kp\` field; no cured meat, salt substitute, stock cube or processed cheese on the ingredient list`
  };
}

module.exports = {
  DIABETES, WEIGHT_LOSS, KIDNEY, TAGS, LIMITS, SMALL, SWEETENED, KIDNEY_REFUSED,
  isSmall, evaluate, failures, labelsOf, notesFor, rulesText
};
