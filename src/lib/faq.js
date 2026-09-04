'use strict';

/**
 * Questions a recipe page can genuinely answer, built from what it already
 * shows.
 *
 * Two rules govern this file, and both come from Google's structured-data
 * policy rather than from taste.
 *
 * The first is that FAQ markup has to describe Q&A a reader can see on the
 * page. Marking up questions the page does not ask is the kind of thing that
 * earns a manual action, so `questions()` returns one list and the template
 * renders it and serialises it — the visible text and the schema text are the
 * same string, not two strings that are meant to agree.
 *
 * The second is that an answer must be true. Every one here is assembled from a
 * field the page prints a few centimetres further up: the times from the header,
 * the storage answer from the storage note, the tips answer from the tips list.
 * A question whose source field is missing is not asked.
 *
 * Worth knowing before expecting much of this: since August 2023 Google shows
 * FAQ rich results only for well-known, authoritative government and health
 * sites. This markup is correct and it will not put an accordion in the search
 * results — the value is a page that answers what people actually ask, which is
 * worth doing on its own.
 */

/** "1 hour 20 minutes", from a count of minutes. */
function humanMinutes(total) {
  if (!total) return '';
  const h = Math.floor(total / 60);
  const m = total % 60;
  if (!h) return `${m} minutes`;
  if (!m) return h === 1 ? '1 hour' : `${h} hours`;
  return `${h === 1 ? '1 hour' : `${h} hours`} ${m} minutes`;
}

/**
 * Join short fragments into prose: "a, b and c".
 *
 * Only safe on fragments. The tips are complete sentences with their own full
 * stops, and running them together this way produced "add water a teaspoon at a
 * time, The griddle must be properly hot."
 */
function sentence(list) {
  const items = list.filter(Boolean).map(s => String(s).trim().replace(/\.$/, ''));
  if (!items.length) return '';
  if (items.length === 1) return items[0];
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

/** Run already-punctuated sentences together, giving each a full stop. */
function paragraph(list) {
  return list.filter(Boolean)
    .map(s => { const v = String(s).trim(); return /[.!?]$/.test(v) ? v : `${v}.`; })
    .join(' ');
}

const lower = s => String(s || '').trim();

/**
 * @param {object} recipe  a built recipe
 * @returns {Array<{q: string, a: string}>} in the order they should be shown
 */
function questions(recipe) {
  const name = lower(recipe.title);
  const out = [];
  const ask = (q, a) => { if (a && String(a).trim()) out.push({ q, a: String(a).trim() }); };

  const total = recipe.totalTime || (recipe.prep + recipe.cook);
  ask(`How long does ${name} take to make?`,
    total && `About ${humanMinutes(total)} in total — ${humanMinutes(recipe.prep)} of preparation `
      + `and ${humanMinutes(recipe.cook)} of cooking. The recipe serves ${recipe.servings}.`);

  /* The tips, as the answer to the question they are the answer to. Three
     pieces of advice under a heading called "Chef's Tips" is already a reply to
     "how do I not get this wrong"; this only puts the question in front of it. */
  ask(`What are the key tips for making ${name}?`,
    (recipe.tips || []).length && paragraph(recipe.tips));

  /* Pairings are fragments — "A cold fino sherry", "Follow with syrniki" — so
     they are listed rather than run into a sentence. */
  ask(`What should I serve with ${name}?`,
    (recipe.pairings || []).length
      && `${paragraph([recipe.pairings.join('; ')])}`);

  /* Only asked when the storage note actually discusses keeping it. */
  const storage = lower(recipe.storage);
  if (/freez|refrigerat|keeps|chill|store/i.test(storage)) {
    ask(/freez/i.test(storage)
      ? `Can ${name} be made ahead or frozen?`
      : `How should ${name} be stored?`, storage);
  }

  const diets = recipe.tags || [];
  if (diets.length) {
    ask(`Is ${name} suitable for a special diet?`,
      `This recipe is ${sentence(diets.map(d => d.toLowerCase()))}. `
      + `Those labels are checked against the ingredient list, so a dish is only `
      + `marked when nothing in it contradicts the claim.`);
  }

  const [kcal, protein, carbs, fat] = recipe.nutrition || [];
  ask(`How many calories are in ${name}?`,
    kcal && `About ${kcal} kcal per serving, with ${protein} g protein, ${carbs} g `
      + `carbohydrate and ${fat} g fat. The figures are calculated from the `
      + `ingredient list and are an estimate.`);

  return out;
}

/** The schema object for a list of questions, or null when there are none. */
function faqSchema(list) {
  if (!list || !list.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: list.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  };
}

module.exports = { questions, faqSchema, humanMinutes, sentence, paragraph };
