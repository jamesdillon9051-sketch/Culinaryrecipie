'use strict';

/**
 * The page layouts a recipe can take.
 *
 * Every recipe page used to carry the same nine headings in the same order —
 * "Why This X Recipe Works", "How to Make X", "Tips for Making X", and so on
 * down the page, 2,400 times. That is fine for one recipe and is what a
 * template looks like at scale, which is what a reviewer reading a few pages
 * in a row sees. So the prose column is now assembled from a layout: an order
 * for the sections, a style for the ones that have more than one way to be
 * shown, and a pool of wordings for each heading.
 *
 * A layout is chosen per recipe from a hash of its slug (see ./pick.js), so the
 * build stays reproducible and the choice is spread evenly across the
 * catalogue. A recipe can also name its layout explicitly with `layout:` in its
 * detail record or in a rewrite, which is how a new volume should pick one
 * "at random": leave it out and the slug decides.
 *
 * What stays fixed, because other things depend on it:
 *   - the ingredients card, the at-a-glance box and the share box (the aside)
 *   - id="method" on the method heading (the "Method" button jumps to it)
 *   - id="faq" and id="why-title", and exactly one of each per page
 *   - the recipe's name in the method heading, since "how to make X" is what
 *     most people type
 *   - the reviews, byline and related-recipes blocks after the prose
 *
 * Headings can also be written per recipe (`headings: { tips: "A quick note on
 * the butter" }`), which is what tools/humanize.js asks for. Those win over the
 * pools below.
 */

const { pick } = require('./pick');

/** Sections of the prose column. `swaps` and `diet` only appear when the
    recipe has something to put in them. */
const SECTIONS = ['why', 'method', 'tips', 'swaps', 'diet', 'serve', 'store', 'faq', 'nutrition'];

/* How each of the editorial sections can be shown.
     why    panel  the tinted box with a drop cap, under a heading
            plain  an ordinary section under a heading
            lead   no heading: the paragraphs simply run on. Only sensible as the
                   first thing in the column, so only a layout that opens with
                   the "why" text uses it
     tips   list | numbered | notes (each tip a short paragraph with a rule beside it)
     serve  list | line (the suggestions on one line, separated by dots) */

const LAYOUTS = [
  {
    id: 'classic',
    name: 'Classic',
    summary: 'Why it works, then the method, then the extras. The order readers expect.',
    order: ['why', 'method', 'tips', 'swaps', 'diet', 'serve', 'store', 'faq', 'nutrition'],
    why: 'panel', tips: 'list', serve: 'list',
    headings: {
      why: ['Why This {title} Recipe Works', 'What Makes {title} Work', 'Why {title} Works', 'The Idea Behind {title}'],
      method: ['How to Make {title}', '{title}, Step by Step', 'Making {title}'],
      tips: ['Tips for Making {title}', 'Small Things That Help', 'Notes for Getting It Right'],
      serve: ['What to Serve with {title}', 'Serving Suggestions', 'What Goes With {title}'],
      store: ['Storing & Reheating {title}', 'Leftovers and Storage', 'Keeping and Reheating'],
      faq: ['{title} FAQ: Common Questions', '{title}: Questions and Answers', 'Questions About {title}']
    }
  },
  {
    id: 'cook-first',
    name: 'Straight to the stove',
    summary: 'The method leads; watch-points follow it; the background comes after the cooking.',
    order: ['method', 'tips', 'swaps', 'diet', 'why', 'serve', 'store', 'faq', 'nutrition'],
    why: 'plain', tips: 'numbered', serve: 'line',
    headings: {
      why: ['A Little Background', 'Good to Know About {title}', 'About This Recipe', 'The Short Version'],
      method: ['The Method for {title}', 'How to Cook {title}', '{title}: Step by Step'],
      tips: ['Things to Watch For', 'Keep an Eye on These', 'What Can Go Wrong'],
      serve: ['To Go With It', 'On the Table Alongside', 'What to Serve It With'],
      store: ['Storing Leftovers', 'Keeping {title}', 'Leftovers'],
      faq: ['Questions People Ask', 'Quick Answers', 'Common Questions']
    }
  },
  {
    id: 'mistakes-first',
    name: 'Read this first',
    summary: 'The pitfalls come before the method; the explanation and the storage come straight after it.',
    order: ['tips', 'method', 'why', 'store', 'swaps', 'diet', 'serve', 'faq', 'nutrition'],
    why: 'plain', tips: 'notes', serve: 'list',
    headings: {
      why: ['Why It Works', 'What\'s Going On Here', 'Why the Method Works'],
      method: ['How to Make {title}', 'Making {title}', 'Cooking {title}'],
      tips: ['Before You Start', 'Don\'t Make These Mistakes', 'Where This Goes Wrong'],
      serve: ['Serving {title}', 'What to Serve Alongside', 'Good With'],
      store: ['Storage and Reheating', 'Leftovers, Reheating and Keeping', 'After You\'ve Cooked It'],
      faq: ['Common Questions About {title}', 'Questions and Answers', 'Still Wondering?']
    }
  },
  {
    id: 'make-ahead',
    name: 'Plan it, then cook it',
    summary: 'Keeping and making ahead come first, then the method; the background comes after the cooking.',
    order: ['store', 'method', 'tips', 'why', 'serve', 'swaps', 'diet', 'faq', 'nutrition'],
    why: 'plain', tips: 'list', serve: 'line',
    headings: {
      why: ['Behind the Recipe', 'Some Background', 'Why the Method Is What It Is'],
      method: ['How to Make {title}', '{title}: The Method', 'Making {title}'],
      tips: ['Tips for Success', 'A Few Pointers', 'Worth Knowing'],
      serve: ['Serving Ideas', 'What to Put Next to It', 'Good Alongside'],
      store: ['Make Ahead and Storage', 'Making {title} Ahead', 'Storing and Planning Ahead'],
      faq: ['Quick Answers', '{title} FAQ', 'Questions About {title}']
    }
  },
  {
    id: 'table-led',
    name: 'What goes on the table',
    summary: 'What to serve it with comes before the method, so the meal is planned first.',
    order: ['why', 'serve', 'method', 'tips', 'swaps', 'diet', 'store', 'faq', 'nutrition'],
    why: 'panel', tips: 'notes', serve: 'list',
    headings: {
      why: ['Why {title} Works', 'Why This Is Worth Making', 'The Case for {title}'],
      method: ['How to Make {title}', 'Making {title}, Step by Step', 'How to Cook {title}'],
      tips: ['Notes From the Method', 'Worth Knowing Before You Cook', 'A Few Notes'],
      serve: ['What to Put on the Table With {title}', 'What Goes With It', 'Build the Meal Around {title}'],
      store: ['Storing and Reheating', 'Leftovers', 'Keeping What\'s Left'],
      faq: ['{title}: Your Questions Answered', 'Common Questions', 'Questions and Answers']
    }
  },
  {
    id: 'questions-led',
    name: 'Answers first',
    summary: 'The common questions are answered up front, before the method.',
    order: ['why', 'faq', 'method', 'tips', 'swaps', 'diet', 'serve', 'store', 'nutrition'],
    why: 'lead', tips: 'list', serve: 'line',
    headings: {
      why: [],
      method: ['How to Make {title}', '{title}: Step by Step', 'The Method for {title}'],
      tips: ['Tips That Matter', 'A Few Pointers', 'Worth Getting Right'],
      serve: ['What to Serve With It', 'Serve It With', 'Pairs Well With'],
      store: ['Storage', 'Keeping and Reheating', 'Leftovers and Storage'],
      faq: ['Quick Answers', 'Questions About {title}', 'What People Ask']
    }
  }
];

/* Sections whose heading is the same wording in every layout's pool. */
const SHARED_HEADINGS = {
  swaps: ['Common Substitutions & Variations', 'Ingredient Swaps', 'Swaps and Variations', 'If You\'re Missing Something', 'Changing the Recipe'],
  diet: ['Quick Tips & Variations', 'Dietary Notes', 'Adapting It for Your Diet', 'If You Need to Adjust It'],
  nutrition: ['{title} Nutrition', 'Nutrition per Serving', 'What\'s in a Serving', 'The Numbers per Serving', '{title} Nutrition Facts']
};

/* A layout that leaves a section out would drop that content from every page
   that uses it, so the shape is checked when the module loads rather than
   trusted: every layout orders every section exactly once, and every section
   it shows under a heading has at least one wording for it. */
for (const l of LAYOUTS) {
  if ([...l.order].sort().join() !== [...SECTIONS].sort().join()) {
    throw new Error(`Layout "${l.id}" must order each of ${SECTIONS.join(', ')} exactly once`);
  }
  for (const s of SECTIONS) {
    const pool = l.headings[s] || SHARED_HEADINGS[s];
    const headed = s !== 'why' || l.why !== 'lead';
    if (headed && !(pool && pool.length)) throw new Error(`Layout "${l.id}" has no heading wordings for "${s}"`);
  }
}

const BY_ID = new Map(LAYOUTS.map(l => [l.id, l]));

/** The layout a recipe uses: the one it names, or the one its slug decides. */
function layoutFor(recipe) {
  return BY_ID.get(recipe.layout) || pick(LAYOUTS, `layout:${recipe.slug}`);
}

const fill = (template, recipe) => template.split('{title}').join(recipe.title);

/** A heading a recipe supplies for itself is used only if it is safe to print
    as-is and, for the method, still names the dish. */
function usableHeading(text, section, recipe) {
  if (typeof text !== 'string') return false;
  const t = text.trim();
  if (t.length < 2 || t.length > 70 || t.split(/\s+/).length > 9) return false;
  if (/[<>]/.test(t)) return false;
  if (section === 'method' && !t.toLowerCase().includes(recipe.title.toLowerCase())) return false;
  return true;
}

/** The heading for one section of one recipe, as plain text to be escaped. '' when
    the layout shows that section without one. */
function headingFor(recipe, layout, section) {
  const own = recipe.headings && recipe.headings[section];
  if (usableHeading(own, section, recipe)) return own.trim();
  const pool = layout.headings[section] || SHARED_HEADINGS[section] || [];
  if (!pool.length) return '';
  return fill(pick(pool, `heading:${recipe.slug}:${section}`), recipe);
}

/** Layout ids, for validating a recipe's or a rewrite's `layout`. */
const IDS = LAYOUTS.map(l => l.id);

/** The layout list as Markdown, for the generated part of CLAUDE.md. */
function markdown() {
  const lines = [];
  lines.push(`There are ${LAYOUTS.length} layouts (\`src/lib/layouts.js\`). A recipe gets one from its slug unless its record names one with \`layout: '<id>'\`. For a new recipe, leave \`layout\` out: the slug picks, evenly across the catalogue.`, '');
  lines.push('| id | name | section order (→) | why | tips | serve |', '| --- | --- | --- | --- | --- | --- |');
  for (const l of LAYOUTS) {
    lines.push(`| \`${l.id}\` | ${l.name} | ${l.order.join(' → ')} | ${l.why} | ${l.tips} | ${l.serve} |`);
  }
  lines.push('');
  for (const l of LAYOUTS) lines.push(`- **${l.name}** (\`${l.id}\`): ${l.summary}`);
  lines.push('');
  lines.push('`why` is `panel` (tinted box, drop cap), `plain` (ordinary section) or `lead` (no heading, the text just runs on). `tips` is `list`, `numbered` or `notes` (each tip a short paragraph). `serve` is `list` or `line` (suggestions on one line).');
  lines.push('');
  lines.push('Fixed in every layout: `id="method"` on the method heading, `id="faq"`, `id="why-title"` when there is a why heading, the recipe name in the method heading, and the ingredients card.');
  return lines.join('\n');
}

module.exports = { LAYOUTS, IDS, SECTIONS, SHARED_HEADINGS, layoutFor, headingFor, usableHeading, markdown };
