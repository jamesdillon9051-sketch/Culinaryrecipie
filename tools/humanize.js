#!/usr/bin/env node
'use strict';
/**
 * Rewrite the recipes' prose through the Anthropic API, in batches, safely.
 *
 * What it changes: the lede (d), the "why" text, the tips and the storage note,
 * plus a heading for each section that the recipe's layout shows. What it
 * never changes: ingredients, method, timings, nutrition, tags, images, and
 * dates. Publication and modification dates are not this tool's business; the
 * build derives modification dates from the content itself (src/lib/
 * content-dates.js), so a recipe that is really rewritten gets a real, new
 * lastmod and one that is not keeps its old one.
 *
 * Where the output goes: src/data/rewrites/*.json, one entry per recipe, laid
 * over the originals by the catalogue loader (src/lib/rewrites.js). The detail
 * files are never edited, so undoing a run is deleting its files, and the
 * tool takes a snapshot of src/data first (tools/backup.js) unless told not to.
 *
 * What stands between a model's answer and a page:
 *   - src/lib/rewrite-check.js holds every rewrite to the recipe's own facts
 *     (numbers, years, names, diet and storage claims) and to the voice rules
 *     in src/lib/voice.js (no banned phrases, no first-person experience, varied
 *     rhythm, honest bold, an opening no other recipe has);
 *   - a rejected answer is sent back once or twice with the list of problems;
 *     a recipe that still fails is left exactly as it was and recorded in
 *     .humanize/rejected.json;
 *   - after the run the repo's own audits (timing, keywords, diet, voice) read
 *     the merged catalogue, and any rewrite they reject is taken back out.
 *
 * Rate limits and failures: requests go through one limiter. A 429 (or 529)
 * honours Retry-After, pauses every worker, not just the one that was told, and
 * halves the concurrency until things calm down. 5xx and network errors back
 * off exponentially with jitter. 401, 403, a missing model or an empty credit
 * balance stop the run, because retrying cannot fix them. Everything accepted
 * is on disk after every batch, so an interrupted run resumes where it stopped.
 *
 *   node tools/humanize.js --dry-run                 what would be sent, and roughly what it costs
 *   node tools/humanize.js --mock --limit 40         whole pipeline, no API, no key, writes to .humanize/mock
 *   ANTHROPIC_API_KEY=… node tools/humanize.js --limit 40      a first real batch
 *   ANTHROPIC_API_KEY=… node tools/humanize.js                 everything not yet done
 *   node tools/humanize.js --select flagged          only recipes tools/voice-audit.js flags
 *   node tools/humanize.js --select a-slug,b-slug    just those
 *
 * Options
 *   --batch-size N        recipes per batch, 30 to 50 (default 40)
 *   --concurrency N       requests in flight (default 4)
 *   --limit N / --offset N
 *   --redo                redo recipes that already have a rewrite
 *   --retry-rejected      try recipes rejected by an earlier run again
 *   --model ID            the model to call (or set $HUMANIZE_MODEL). No default: which model to
 *                         pay for is the owner's choice, so a real run without one stops and says so
 *   --max-retries N       per request, for 429/5xx/network errors (default 6)
 *   --fix-attempts N      extra tries after a rewrite fails validation (default 2)
 *   --timeout S           per request (default 120)
 *   --out DIR             where rewrites are written (default src/data/rewrites)
 *   --skip-backup         do not snapshot src/data first
 *   --no-audit            do not run the repo's audits afterwards
 *   --price-in / --price-out   dollars per million tokens, to print a cost
 *
 * Environment: ANTHROPIC_API_KEY, and optionally ANTHROPIC_BASE_URL.
 * Logs: logs/humanize-<run>.jsonl (every event) and logs/humanize-errors.jsonl
 * (errors and rejections only, across runs).
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const volumes = require(path.join(ROOT, 'src', 'data', 'volumes'));
const rewrites = require(path.join(ROOT, 'src', 'lib', 'rewrites'));
const voice = require(path.join(ROOT, 'src', 'lib', 'voice'));
const layouts = require(path.join(ROOT, 'src', 'lib', 'layouts'));
const check = require(path.join(ROOT, 'src', 'lib', 'rewrite-check'));
const backup = require('./backup');

const API_VERSION = '2023-06-01';
const DEFAULT_MODEL = process.env.HUMANIZE_MODEL || null;
/* Overridable so a test run can keep its state and logs out of the repo's own. */
const STATE_DIR = process.env.HUMANIZE_STATE_DIR || path.join(ROOT, '.humanize');
const LOG_DIR = process.env.HUMANIZE_LOG_DIR || path.join(ROOT, 'logs');
const DEFAULT_OUT = rewrites.DIR;
const MIN_BATCH = 30;
const MAX_BATCH = 50;

/* ---------------------------------------------------------------- options */

const DEFAULTS = {
  select: 'all', limit: Infinity, offset: 0, redo: false, retryRejected: false,
  batchSize: 40, concurrency: 4, maxRetries: 6, fixAttempts: 2, timeout: 120, maxTokens: 2500,
  model: DEFAULT_MODEL, out: DEFAULT_OUT, dryRun: false, mock: false, skipBackup: false, audit: true,
  priceIn: null, priceOut: null, quiet: false, allowSmallBatches: false, maxConsecutiveFailures: 8,
  backoffScale: 1
};

function parseArgs(argv) {
  const o = { ...DEFAULTS };
  const need = (i, flag) => { if (argv[i + 1] === undefined) throw new Error(`${flag} needs a value`); return argv[i + 1]; };
  const num = (i, flag) => { const n = Number(need(i, flag)); if (!Number.isFinite(n) || n < 0) throw new Error(`${flag} needs a number`); return n; };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    switch (a) {
      case '--select': o.select = need(i++, a); break;
      case '--limit': o.limit = num(i++, a); break;
      case '--offset': o.offset = num(i++, a); break;
      case '--batch-size': o.batchSize = num(i++, a); break;
      case '--concurrency': o.concurrency = Math.max(1, num(i++, a)); break;
      case '--max-retries': o.maxRetries = num(i++, a); break;
      case '--fix-attempts': o.fixAttempts = num(i++, a); break;
      case '--timeout': o.timeout = num(i++, a); break;
      case '--max-tokens': o.maxTokens = num(i++, a); break;
      case '--model': o.model = need(i++, a); break;
      case '--out': o.out = path.resolve(need(i++, a)); break;
      case '--price-in': o.priceIn = num(i++, a); break;
      case '--price-out': o.priceOut = num(i++, a); break;
      case '--redo': o.redo = true; break;
      case '--retry-rejected': o.retryRejected = true; break;
      case '--dry-run': o.dryRun = true; break;
      case '--mock': o.mock = true; break;
      case '--skip-backup': o.skipBackup = true; break;
      case '--no-audit': o.audit = false; break;
      case '--quiet': o.quiet = true; break;
      case '--allow-small-batches': o.allowSmallBatches = true; break; // for the self-test only
      case '--help': case '-h': o.help = true; break;
      default: throw new Error(`Unknown option ${a} (see --help)`);
    }
  }
  if (!o.allowSmallBatches && (o.batchSize < MIN_BATCH || o.batchSize > MAX_BATCH)) {
    throw new Error(`--batch-size must be between ${MIN_BATCH} and ${MAX_BATCH} (got ${o.batchSize})`);
  }
  return o;
}

/* ------------------------------------------------------------- selection */

/** Every recipe, in publication order, with the catalogue row and the ORIGINAL detail record. */
function loadItems() {
  const catalog = volumes.catalog();
  const originals = volumes.details({ rewrites: false });
  return catalog.map(row => ({ row, orig: originals[row.slug] }));
}

function readJson(file, fallback) {
  try { return JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { return fallback; }
}

function writeJsonAtomic(file, data) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2) + '\n');
  fs.renameSync(tmp, file);
}

function selectItems(items, opts, state) {
  let chosen = items;
  if (opts.select === 'flagged') {
    const { loadRecipes } = require(path.join(ROOT, 'src', 'build'));
    const { assess } = require('./voice-audit');
    const flagged = new Set([...assess(loadRecipes()).values()].filter(r => r.flagged).map(r => r.slug));
    chosen = items.filter(i => flagged.has(i.row.slug));
  } else if (opts.select !== 'all') {
    const want = opts.select.split(',').map(s => s.trim()).filter(Boolean);
    const known = new Set(items.map(i => i.row.slug));
    const missing = want.filter(s => !known.has(s));
    if (missing.length) throw new Error(`No such recipe: ${missing.join(', ')}`);
    chosen = items.filter(i => want.includes(i.row.slug));
  }
  const skipped = { done: 0, rejected: 0 };
  const todo = chosen.filter(({ row, orig }) => {
    const existing = state.existing[row.slug];
    if (!opts.redo && existing && existing.src === rewrites.sourceHash(orig)) { skipped.done++; return false; }
    if (!opts.retryRejected && state.rejected[row.slug]) { skipped.rejected++; return false; }
    return true;
  });
  const sliced = todo.slice(opts.offset, opts.offset + opts.limit);
  return { chosen: chosen.length, todo: sliced, skipped, available: todo.length };
}

/* ---------------------------------------------------------------- prompts */

function buildSystemPrompt() {
  return `You are the editor of Weekly Delight, a recipe site written in British English. Your job is to rewrite the prose of ONE existing recipe so that it reads the way a careful person would write it for a cook standing at the hob (specific, plain, varied) and so that it no longer reads like the other 2,400 recipes on the site.

You change how the recipe is written. You do not change what it says. The ingredients, the method, the timings and the nutrition are not yours to touch and are not part of your output.

WHAT YOU MAY NOT DO. A rewrite that breaks any of these is rejected automatically and you will be asked to redo it.
1. Facts. Use only the quantities, temperatures, times, years, names and places that already appear in the recipe you are given. Do not add a history, a date, a chef, a region or a brand. Do not add a diet or health claim (vegan, gluten-free, healthy, low-fat and so on). If the recipe says something about where the dish comes from you may keep it, reword it or soften it, never sharpen it. One exception: a "check early" time may be any time shorter than one the recipe already states ("if your oven runs hot, check at 12 minutes" for a 15-minute bake).
2. Honesty. Nobody is claiming to have cooked or tested this dish. No "I", "me", "my", "we" or "our"; no "kitchen-tested", "tried and tested", "the first time I made this". Write to the cook as "you". Practical advice is about the dish and the equipment, never about the writer.
3. Storage. Keep the storage advice exactly as stated: the same methods and the same durations. Do not add "freezes well" or drop "does not freeze".
4. Language. Never use: ${voice.BANNED.map(b => b.say).join('; ')}.
5. Format. Plain sentences in British spelling. The only mark-up allowed is **bold**, and only in the "why" text and the tips.

WHAT GOOD LOOKS LIKE
${voice.STYLE_RULES.map((r, i) => `${i + 1}. ${r}`).join('\n')}
- The lede "d" is one or two sentences, 60 to 260 characters, shown under the title and in search cards. Keep it plain and descriptive, not a slogan, and keep the dish's main search phrase if it is there now.
- Headings are short and specific to this dish ("A quick note on the butter", "Don't make this mistake", "If the sauce splits"). The page supplies the method heading itself, so do not write one. No two sections share a heading, and you must not reuse a wording from the list of overused headings you are given.

OUTPUT
Call the submit_rewrite tool once, and say nothing else.`;
}

const SUBMIT_TOOL = {
  name: 'submit_rewrite',
  description: 'Submit the rewritten prose for this recipe.',
  input_schema: {
    type: 'object',
    properties: {
      hook: { type: 'string', enum: voice.HOOKS.map(h => h.id), description: 'The opening you actually used for the first paragraph of why: the assigned one, unless it genuinely does not fit this dish.' },
      d: { type: 'string', description: 'The lede: one or two plain sentences, 60 to 260 characters.' },
      why: { type: 'array', items: { type: 'string' }, description: 'The "why" text as 2 to 4 paragraphs (1 or 2 if short). The first paragraph opens the way the assignment says. **Bold** allowed.' },
      tips: { type: 'array', items: { type: 'string' }, description: '2 to 5 practical tips, each starting differently. **Bold** allowed.' },
      store: { type: 'string', description: 'The storage note, reworded, with exactly the same storage methods and durations.' },
      headings: {
        type: 'object',
        description: 'Conversational headings, two to eight words each.',
        properties: {
          why: { type: 'string', description: 'Only if the assignment says the why text has a heading.' },
          tips: { type: 'string' }, serve: { type: 'string' }, store: { type: 'string' }
        },
        required: ['tips', 'serve', 'store']
      }
    },
    required: ['hook', 'd', 'why', 'tips', 'store', 'headings']
  }
};

const TIPS_STYLE = { list: 'a bulleted list', numbered: 'a numbered list', notes: 'short separate notes, one paragraph each' };

function recipeForPrompt({ row, orig }) {
  return {
    title: row.title, cuisine: row.cuisine, category: row.category, servings: row.servings,
    prepMinutes: row.prep, cookMinutes: row.cook, restMinutes: orig.rest ? orig.rest[0] : null,
    tags: row.tags || [], mainSearchPhrase: (orig.kw || [])[0] || null,
    ingredients: orig.ing, method: orig.st,
    current: { d: orig.d, why: orig.why, tips: orig.tips, store: orig.store }
  };
}

function buildUserPrompt(ctx, registry, feedback) {
  const { hook, layout } = ctx;
  const headingFor = ['tips', 'serve', 'store'];
  if (layout.why !== 'lead') headingFor.unshift('why');
  const overused = registry.topHeadings(30).map(([h]) => `"${h}"`).join(', ');
  const lines = [
    '<recipe>',
    JSON.stringify(recipeForPrompt(ctx), null, 1),
    '</recipe>',
    '',
    `Opening for the first paragraph of "why": ${hook.label}. ${hook.brief}`,
    `For example (do not copy it or reuse its words): "${hook.example}"`,
    'If that opening genuinely does not fit this dish (a seasonal opening for a dish with no season, say), use the nearest one that does and report it in "hook".',
    '',
    `On this page the "why" text is shown ${layout.why === 'lead' ? 'with no heading' : 'under a heading'}, and the tips are shown as ${TIPS_STYLE[layout.tips]}.`,
    `Write headings for: ${headingFor.join(', ')}.`,
    `Headings already overused across the site (do not use or imitate these): ${overused}`
  ];
  if (feedback) {
    lines.push('', 'Your previous answer was rejected. Fix every one of these problems and submit again:');
    for (const p of feedback.problems) lines.push(`- ${p}`);
    lines.push('', 'The rejected answer, for reference:', JSON.stringify(feedback.previous));
  }
  return lines.join('\n');
}

/** Turn what the model sent into the shape validate() and the overlay expect. */
function shape(raw, ctx) {
  const str = v => (typeof v === 'string' ? v.trim() : '');
  const why = Array.isArray(raw.why) ? raw.why.map(str).filter(Boolean).join('\n\n') : str(raw.why);
  const tips = Array.isArray(raw.tips) ? raw.tips.map(str).filter(Boolean) : [];
  const headings = {};
  for (const [k, v] of Object.entries(raw.headings && typeof raw.headings === 'object' ? raw.headings : {})) {
    if (!layouts.SECTIONS.includes(k)) continue;
    if (k === 'why' && ctx.layout.why === 'lead') continue; // shown without one
    if (typeof v === 'string' && v.trim()) headings[k] = v.trim();
  }
  return { d: str(raw.d), why, tips, store: str(raw.store), headings };
}

/* ------------------------------------------------------------------ mock */

/**
 * A stand-in for the model, so the whole pipeline can be run and tested with
 * no API and no key. It reshapes the recipe's own words and invents nothing,
 * which is exactly why its output is worthless as copy: it exists to prove the
 * plumbing, and mock output is written to .humanize/mock, never to src/data.
 */
function mockModel(ctx) {
  const { row, orig, hook } = ctx;
  const words = t => voice.words(t).length;
  /* The noun at the end of each ingredient line: "500 g 00 flour, plus extra" -> "flour". */
  const nouns = (orig.ing || []).filter(l => !/^#/.test(l)).map(l => {
    const head = l.replace(/\(.*?\)/g, '').split(',')[0].split(/\s+or\s+/).pop().trim();
    return (head.split(/\s+/).pop() || '').replace(/[^\p{L}-]/gu, '').toLowerCase();
  }).filter(w => w.length > 2);
  const first = nouns[0] || row.title.toLowerCase();
  const second = nouns[1] || row.cuisine.toLowerCase();
  const third = nouns[2] || row.category.toLowerCase();

  let opening;
  if (hook.id === 'question') opening = `Why is ${row.title} worth the effort?`;
  else if (hook.id === 'ingredient-first') opening = `${cap(first)}, ${second} and ${third}.`;
  else opening = `${row.title}, in short.`;

  /* New sentences from the old ones: no em dashes, and each joined to the last
     with a connective, so none is carried over word for word. */
  const connectives = ['In practice,', 'Put simply,', 'Worth knowing:', 'From there,', 'The point is that'];
  const source = voice.sentences(orig.why).map(s => s.replace(/\s*—\s*/g, ', '));
  const rest = source.map((s, i) => (i === 0 ? s : `${connectives[i % connectives.length]} ${s.charAt(0).toLowerCase()}${s.slice(1)}`));
  const half = Math.ceil(rest.length / 2);
  const bold = t => t.replace(/\b(\d+(?:\.\d+)? (?:minutes?|hours?))\b/, '**$1**');
  const paras = rest.length >= 4
    ? [`${opening} ${bold(rest.slice(0, half).join(' '))}`, rest.slice(half).join(' ')]
    : [`${opening} ${bold(rest.join(' '))}`];

  const sentence = orig.d.split(/(?<=[.!?])\s+/)[0];
  return {
    hook: hook.id,
    d: (orig.d.length <= 260 ? orig.d : sentence).replace(/\s*—\s*/g, ', '),
    why: paras.filter(p => p.trim()),
    tips: (orig.tips || []).slice().reverse().map(t => t.replace(/\s*—\s*/g, ', ')),
    store: orig.store.replace(/\s*—\s*/g, ', '),
    headings: {
      ...(ctx.layout.why !== 'lead' ? { why: `What the ${first} is doing` } : {}),
      tips: `A note on the ${first} and the ${second}`,
      serve: `On the table with the ${third}`,
      store: `Keeping leftover ${first} and ${second}`
    }
  };
}
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

/* ---------------------------------------------------------------- the API */

class FatalError extends Error {}
class ApiError extends Error {
  constructor(message, status) { super(message); this.status = status; }
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * One gate for every request. A rate-limit answer is news about the whole
 * account, not about the one request that received it, so it pauses everyone
 * (cooldownUntil) and lowers how many may be in flight at once (capacity),
 * which creeps back up after a run of successes.
 */
class Limiter {
  constructor(max) { this.max = max; this.capacity = max; this.inFlight = 0; this.waiters = []; this.cooldownUntil = 0; this.streak = 0; this.throttles = 0; }
  async acquire() {
    while (this.inFlight >= this.capacity) await new Promise(resolve => this.waiters.push(resolve));
    this.inFlight++;
    for (;;) {
      const wait = this.cooldownUntil - Date.now();
      if (wait <= 0) return;
      await sleep(wait);
    }
  }
  release() { this.inFlight--; const w = this.waiters.shift(); if (w) w(); }
  penalise(ms) {
    this.cooldownUntil = Math.max(this.cooldownUntil, Date.now() + ms);
    this.capacity = Math.max(1, Math.floor(this.capacity / 2));
    this.streak = 0;
    this.throttles++;
  }
  pause(ms) { this.cooldownUntil = Math.max(this.cooldownUntil, Date.now() + ms); }
  reward() {
    if (++this.streak >= 15 && this.capacity < this.max) {
      this.capacity++; this.streak = 0;
      const w = this.waiters.shift(); if (w) w();
    }
  }
}

/** Milliseconds to wait from a Retry-After header: seconds, or an HTTP date. */
function retryAfterMs(headers) {
  const v = headers && headers.get && headers.get('retry-after');
  if (!v) return null;
  if (/^\d+(\.\d+)?$/.test(v.trim())) return Math.ceil(Number(v) * 1000);
  const t = Date.parse(v);
  return Number.isNaN(t) ? null : Math.max(0, t - Date.now());
}

const jitter = ms => Math.round(ms * (0.75 + Math.random() * 0.5));

function explain(status, json, text) {
  const err = json && json.error;
  return `${status}${err && err.type ? ` ${err.type}` : ''}: ${(err && err.message) || String(text || '').slice(0, 200) || 'no body'}`;
}

/**
 * POST to /v1/messages with retries. Returns { json, usage }. Throws FatalError
 * for things retrying cannot fix and ApiError when retries run out.
 */
async function callApi(env, body, label) {
  const { opts, limiter } = env;
  const url = `${env.baseUrl}/v1/messages`;
  const scale = opts.backoffScale;
  for (let attempt = 1; ; attempt++) {
    await limiter.acquire();
    let res = null;
    let netErr = null;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), opts.timeout * 1000);
    try {
      res = await env.fetch(url, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'x-api-key': env.apiKey, 'anthropic-version': API_VERSION },
        body: JSON.stringify(body),
        signal: ctrl.signal
      });
      res.bodyText = await res.text();
    } catch (e) {
      netErr = e;
    } finally {
      clearTimeout(timer);
      limiter.release();
    }

    if (netErr) {
      const why = netErr.name === 'AbortError' ? `timed out after ${opts.timeout}s` : `${netErr.message}${netErr.cause && netErr.cause.code ? ` (${netErr.cause.code})` : ''}`;
      env.log('request_error', { label, attempt, kind: 'network', message: why }, true);
      if (attempt > opts.maxRetries) throw new ApiError(`network error after ${attempt} attempts: ${why}`, 0);
      const wait = jitter(Math.min(60000, 1000 * 2 ** (attempt - 1))) * scale;
      env.stats.retries++;
      await sleep(wait);
      continue;
    }

    let json = null;
    try { json = JSON.parse(res.bodyText); } catch (e) { /* not JSON */ }

    if (res.status >= 200 && res.status < 300 && json) {
      env.noteHeaders(res.headers);
      limiter.reward();
      return { json, usage: json.usage || {} };
    }

    const message = explain(res.status, json, res.bodyText);
    const errType = json && json.error && json.error.type;
    env.log('request_error', { label, attempt, kind: 'http', status: res.status, type: errType || null, message }, true);

    if (res.status === 401 || res.status === 403) throw new FatalError(`The API refused the key (${message}). Check ANTHROPIC_API_KEY.`);
    if (res.status === 404 && errType === 'not_found_error') throw new FatalError(`The API does not know the model "${opts.model}" (${message}). Use --model.`);
    if (res.status === 400 && /credit balance|billing/i.test(message)) throw new FatalError(`The account has no credit (${message}).`);

    const retryable = res.status === 408 || res.status === 409 || res.status === 429 || res.status >= 500 || (res.status >= 200 && res.status < 300);
    if (!retryable) throw new ApiError(message, res.status);
    if (attempt > opts.maxRetries) throw new ApiError(`gave up after ${attempt} attempts: ${message}`, res.status);

    const told = retryAfterMs(res.headers);
    const backoff = jitter(Math.min(60000, 1000 * 2 ** (attempt - 1)));
    const wait = Math.max(told == null ? 0 : told, backoff) * scale;
    if (res.status === 429 || res.status === 529) { limiter.penalise(wait); env.stats.throttled++; } else limiter.pause(Math.min(wait, 5000 * scale));
    env.stats.retries++;
    env.log('retry_wait', { label, attempt, status: res.status, waitMs: Math.round(wait), concurrency: limiter.capacity }, false);
    await sleep(wait);
  }
}

/** Rate-limit headers, read proactively: when the account says it is nearly out, wait for the reset. */
function noteHeadersFactory(limiter, scale) {
  return headers => {
    if (!headers || !headers.get) return;
    const num = h => { const v = headers.get(h); return v == null ? null : Number(v); };
    const reset = h => { const v = headers.get(h); const t = v ? Date.parse(v) : NaN; return Number.isNaN(t) ? null : Math.max(0, t - Date.now()); };
    const reqLeft = num('anthropic-ratelimit-requests-remaining');
    const tokLeft = num('anthropic-ratelimit-tokens-remaining');
    /* A reset time that has already passed is a wait of nothing; only a header that
       is missing or unreadable falls back to a second. */
    const until = h => { const ms = reset(h); return ms == null ? 1000 : ms; };
    if (reqLeft !== null && reqLeft <= 1) limiter.pause(Math.min(60000, until('anthropic-ratelimit-requests-reset')) * scale);
    else if (tokLeft !== null && tokLeft < 6000) limiter.pause(Math.min(60000, until('anthropic-ratelimit-tokens-reset')) * scale);
  };
}

async function requestRewrite(env, ctx, feedback) {
  const body = {
    model: env.opts.model,
    max_tokens: env.opts.maxTokens,
    system: [{ type: 'text', text: env.systemPrompt, cache_control: { type: 'ephemeral' } }],
    tools: [SUBMIT_TOOL],
    tool_choice: { type: 'tool', name: 'submit_rewrite' },
    messages: [{ role: 'user', content: buildUserPrompt(ctx, env.registry, feedback) }]
  };
  const { json, usage } = await callApi(env, body, ctx.row.slug);
  env.usage.input += usage.input_tokens || 0;
  env.usage.output += usage.output_tokens || 0;
  env.usage.cacheRead += usage.cache_read_input_tokens || 0;
  env.usage.cacheWrite += usage.cache_creation_input_tokens || 0;
  const block = (json.content || []).find(c => c.type === 'tool_use' && c.name === 'submit_rewrite');
  if (block && block.input && typeof block.input === 'object') return block.input;
  /* A model that answers in text instead of calling the tool: accept JSON if it is JSON. */
  const text = (json.content || []).filter(c => c.type === 'text').map(c => c.text).join('');
  const m = /\{[\s\S]*\}/.exec(text);
  if (m) { try { return JSON.parse(m[0]); } catch (e) { /* fall through */ } }
  throw new ApiError(`the reply had no submit_rewrite call (stop_reason ${json.stop_reason || 'unknown'})`, 200);
}

/* ---------------------------------------------------------- one recipe */

async function processOne(env, item) {
  const { row, orig } = item;
  const hook = voice.hookFor(row.slug);
  const layout = layouts.layoutFor({ slug: row.slug, layout: orig.layout });
  const ctx = { row, orig, hook, layout };
  let feedback = null;
  let problems = [];

  for (let attempt = 1; attempt <= 1 + env.opts.fixAttempts; attempt++) {
    if (env.stopping) return { status: 'skipped' };
    const raw = env.opts.mock ? mockModel(ctx) : await requestRewrite(env, ctx, feedback);
    const candidate = shape(raw, ctx);
    const used = voice.HOOKS.find(h => h.id === raw.hook) || hook;
    const entry = {
      src: rewrites.sourceHash(orig), at: new Date().toISOString(),
      model: env.opts.mock ? 'mock' : env.opts.model,
      hook: used.id, layout: layout.id, ...candidate
    };
    if (!Object.keys(entry.headings).length) delete entry.headings;
    problems = check.validate(entry, { ...ctx, hook: used }, env.registry);
    if (!problems.length) {
      try { rewrites.assertEntry(row.slug, entry); } catch (e) { problems = [e.message]; }
    }
    if (!problems.length) {
      env.registry.claim(row.slug, row.title, entry);
      return { status: 'accepted', attempts: attempt, entry };
    }
    env.log('validation_reject', { slug: row.slug, attempt, problems }, true);
    feedback = { previous: raw, problems };
  }
  return { status: 'rejected', problems };
}

/* ---------------------------------------------------------- reporting */

class Progress {
  constructor(total, batches, out, quiet) {
    this.total = total; this.batches = batches; this.out = out; this.quiet = quiet;
    this.tty = !!(out.isTTY) && !quiet;
    this.started = Date.now(); this.lastPlain = 0; this.batch = 0; this.size = 0;
    this.c = { ok: 0, fixed: 0, rejected: 0, failed: 0 };
  }
  line(stats) {
    const done = this.c.ok + this.c.rejected + this.c.failed;
    const pct = this.total ? done / this.total : 1;
    const width = 24;
    const fill = Math.round(pct * width);
    const elapsed = (Date.now() - this.started) / 1000;
    const rate = elapsed > 2 && done ? done / elapsed : 0;
    const eta = rate ? Math.round((this.total - done) / rate) : null;
    const fmt = s => (s == null ? '…' : s >= 3600 ? `${Math.floor(s / 3600)}h${String(Math.floor(s % 3600 / 60)).padStart(2, '0')}m` : s >= 60 ? `${Math.floor(s / 60)}m${String(s % 60).padStart(2, '0')}s` : `${s}s`);
    return `[batch ${this.batch}/${this.batches}] ${'█'.repeat(fill)}${'░'.repeat(width - fill)} ${done}/${this.total} ${(pct * 100).toFixed(0)}%`
      + `  ok ${this.c.ok} (${this.c.fixed} after fixes)  rejected ${this.c.rejected}  failed ${this.c.failed}`
      + `  retries ${stats.retries}  throttled ${stats.throttled}  ${rate ? rate.toFixed(2) + '/s' : ''}  ETA ${fmt(eta)}`;
  }
  render(stats) {
    if (this.quiet) return;
    if (this.tty) this.out.write(`\r${this.line(stats)}\x1b[K`);
    else if (Date.now() - this.lastPlain > 10000) { this.out.write(this.line(stats) + '\n'); this.lastPlain = Date.now(); }
  }
  note(text, stats) {
    if (this.quiet) return;
    if (this.tty) this.out.write('\r\x1b[K');
    this.out.write(text + '\n');
    this.render(stats);
  }
  end() { if (this.tty) this.out.write('\n'); }
}

function estimate(todo, systemPrompt, registry) {
  const tok = s => Math.ceil(s.length / 3.6);
  let input = 0; let output = 0;
  for (const item of todo) {
    const ctx = { row: item.row, orig: item.orig, hook: voice.hookFor(item.row.slug), layout: layouts.layoutFor({ slug: item.row.slug, layout: item.orig.layout }) };
    input += tok(buildUserPrompt(ctx, registry, null));
    output += tok([item.orig.d, item.orig.why, ...(item.orig.tips || []), item.orig.store].join(' ')) * 1.25 + 120;
  }
  const sys = tok(systemPrompt);
  return { input: input + sys * todo.length, cachedInput: input + sys, output, sys };
}

/* ----------------------------------------------------------- post-run audits */

const AUDITS = [['timing-audit.js'], ['keyword-audit.js', '--all'], ['diet-audit.js'], ['voice-audit.js', '--strict']];

/** Run the repo's own audits on the merged catalogue; returns { slug: [lines] } for failures. */
function runAudits() {
  const failures = {};
  for (const [script, ...args] of AUDITS) {
    const r = spawnSync(process.execPath, [path.join(__dirname, script), ...args], { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
    for (const line of String(r.stdout || '').split('\n')) {
      const m = /^\s*✗\s+([a-z0-9-]+)\b(.*)$/.exec(line);
      if (m) (failures[m[1]] = failures[m[1]] || []).push(`${script}: ${m[1]}${m[2]}`.trim());
    }
    if (r.status !== 0 && !Object.keys(failures).length && r.stderr) failures['(tool error)'] = [`${script}: ${String(r.stderr).split('\n')[0]}`];
  }
  return failures;
}

/* ------------------------------------------------------------------ run */

async function run(userOpts, io = {}) {
  const opts = { ...DEFAULTS, ...userOpts };
  const out = io.stdout || process.stdout;
  const err = io.stderr || process.stderr;
  const say = text => { if (!opts.quiet) out.write(text + '\n'); };

  const items = loadItems();
  const rejectedFile = path.join(opts.mock ? path.join(STATE_DIR, 'mock') : STATE_DIR, 'rejected.json');
  const outDir = opts.mock && opts.out === DEFAULT_OUT ? path.join(STATE_DIR, 'mock', 'rewrites') : opts.out;
  const state = { existing: rewrites.entries(outDir), rejected: readJson(rejectedFile, {}) };
  const sel = selectItems(items, opts, state);
  const todo = sel.todo;

  const systemPrompt = buildSystemPrompt();
  const pool = [...layouts.LAYOUTS.flatMap(l => Object.values(l.headings).flat()), ...Object.values(layouts.SHARED_HEADINGS).flat()];
  const registry = check.Registry.seed(items.map(i => ({ slug: i.row.slug, title: i.row.title, why: i.orig.why, tips: i.orig.tips })), pool);
  /* What is already rewritten counts as already said, except what this run is about to redo. */
  const redoing = new Set(todo.map(i => i.row.slug));
  for (const [slug, entry] of Object.entries(state.existing)) {
    const item = items.find(i => i.row.slug === slug);
    if (item && !redoing.has(slug) && entry.why) registry.claim(slug, item.row.title, entry);
  }

  const batches = [];
  for (let i = 0; i < todo.length; i += opts.batchSize) batches.push(todo.slice(i, i + opts.batchSize));

  say(`Recipes: ${items.length} in the catalogue; ${sel.chosen} selected (${opts.select}); ${sel.skipped.done} already rewritten, ${sel.skipped.rejected} rejected earlier; ${todo.length} to do in ${batches.length} batch${batches.length === 1 ? '' : 'es'} of up to ${opts.batchSize}.`);

  const est = estimate(todo, systemPrompt, registry);
  if (opts.dryRun) {
    say(`\nNothing has been sent. Rough size of this run (about 3.6 characters a token, so treat it as ±25%):`);
    say(`  requests:        about ${todo.length} (more if some need a second try)`);
    say(`  input tokens:    about ${est.input.toLocaleString()} (about ${est.cachedInput.toLocaleString()} if prompt caching applies to the shared ${est.sys.toLocaleString()}-token instructions)`);
    say(`  output tokens:   about ${Math.round(est.output).toLocaleString()}`);
    if (opts.priceIn != null && opts.priceOut != null) {
      const lo = (est.cachedInput * opts.priceIn + est.output * opts.priceOut) / 1e6;
      const hi = (est.input * opts.priceIn + est.output * opts.priceOut) / 1e6;
      say(`  cost at $${opts.priceIn}/$${opts.priceOut} per million tokens: $${lo.toFixed(2)} to $${hi.toFixed(2)}`);
    } else say('  cost:            pass --price-in and --price-out (dollars per million tokens, from your plan) to see one');
    if (opts.select === 'all' && sel.chosen === items.length) {
      try {
        const { loadRecipes } = require(path.join(ROOT, 'src', 'build'));
        const { assess } = require('./voice-audit');
        const flagged = [...assess(loadRecipes()).values()].filter(r => r.flagged).length;
        say(`  note:            tools/voice-audit.js flags ${flagged} of ${items.length} recipes; --select flagged would do only those.`);
      } catch (e) { /* the estimate does not depend on it */ }
    }
    if (todo.length) {
      const ctx = { row: todo[0].row, orig: todo[0].orig, hook: voice.hookFor(todo[0].row.slug), layout: layouts.layoutFor({ slug: todo[0].row.slug, layout: todo[0].orig.layout }) };
      say(`\n===== SYSTEM PROMPT (sent with every request) =====\n${systemPrompt}`);
      say(`\n===== USER PROMPT for the first recipe: ${todo[0].row.slug} =====\n${buildUserPrompt(ctx, registry, null)}`);
    }
    return { dryRun: true, todo: todo.length, batches: batches.length };
  }
  if (!todo.length) { say('Nothing to do.'); return { accepted: 0, rejected: 0, failed: 0 }; }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!opts.mock && !apiKey) throw new FatalError('ANTHROPIC_API_KEY is not set. Use --dry-run to preview or --mock to test without a key.');
  if (!opts.mock && !opts.model) throw new FatalError('No model chosen. Pass --model <id> (or set HUMANIZE_MODEL) with a model id from Anthropic\'s documentation; the choice sets the cost and quality of the run, so it is left to you.');
  if (!opts.mock && !opts.skipBackup) backup.ensureBackup({ quiet: opts.quiet });
  if (opts.mock) say(`Mock mode: the model is a stand-in, output goes to ${path.relative(ROOT, outDir)} and is not for publishing.`);

  fs.mkdirSync(LOG_DIR, { recursive: true });
  /* Millisecond resolution, so two runs can never share an id and overwrite each other's batches. */
  const runId = new Date().toISOString().replace(/\.(\d+)Z$/, '$1').replace(/[-:]/g, '').replace('T', '-');
  const runLog = path.join(LOG_DIR, `humanize-${runId}.jsonl`);
  const errLog = path.join(LOG_DIR, 'humanize-errors.jsonl');
  const log = (event, data, isError) => {
    const line = JSON.stringify({ t: new Date().toISOString(), event, ...data }) + '\n';
    fs.appendFileSync(runLog, line);
    if (isError) fs.appendFileSync(errLog, line);
  };

  const limiter = new Limiter(opts.concurrency);
  const stats = { retries: 0, throttled: 0 };
  const env = {
    opts, limiter, stats, registry, systemPrompt, apiKey,
    baseUrl: (process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com').replace(/\/+$/, ''),
    fetch: io.fetch || globalThis.fetch,
    usage: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    log, stopping: false, noteHeaders: noteHeadersFactory(limiter, opts.backoffScale)
  };
  log('run_start', { runId, model: opts.model || null, mock: opts.mock, select: opts.select, recipes: todo.length, batches: batches.length, batchSize: opts.batchSize, concurrency: opts.concurrency, out: path.relative(ROOT, outDir) });

  const progress = new Progress(todo.length, batches.length, err, opts.quiet);
  const onSigint = () => {
    if (env.stopping) process.exit(130);
    env.stopping = true;
    progress.note('Stopping after the requests in flight finish; everything accepted so far is kept. Ctrl-C again to quit now.', stats);
  };
  process.on('SIGINT', onSigint);

  const acceptedSlugs = new Map(); // slug -> file it was written to
  const rejected = state.rejected;
  let consecutiveFailures = 0;
  let fatal = null;
  const tally = { accepted: 0, rejected: 0, failed: 0 };

  try {
    for (let b = 0; b < batches.length && !env.stopping && !fatal; b++) {
      const batch = batches[b];
      progress.batch = b + 1;
      log('batch_start', { batch: b + 1, size: batch.length });
      progress.render(stats);
      const results = [];
      const queue = batch.slice();
      const worker = async () => {
        while (queue.length && !env.stopping && !fatal) {
          const item = queue.shift();
          let result;
          try {
            result = await processOne(env, item);
          } catch (e) {
            if (e instanceof FatalError) { fatal = e; log('fatal', { message: e.message }, true); return; }
            result = { status: 'failed', error: e.message };
            log('recipe_failed', { slug: item.row.slug, message: e.message, status: e.status }, true);
          }
          if (result.status === 'skipped') continue;
          results.push({ slug: item.row.slug, ...result });
          if (result.status === 'accepted') {
            progress.c.ok++; if (result.attempts > 1) progress.c.fixed++;
            consecutiveFailures = 0;
            delete rejected[item.row.slug];
            log('accepted', { slug: item.row.slug, attempts: result.attempts });
          } else if (result.status === 'rejected') {
            progress.c.rejected++;
            consecutiveFailures = 0;
            rejected[item.row.slug] = { at: new Date().toISOString(), problems: result.problems.slice(0, 8) };
            log('rejected', { slug: item.row.slug, problems: result.problems }, true);
          } else {
            progress.c.failed++;
            if (++consecutiveFailures >= opts.maxConsecutiveFailures) {
              fatal = new FatalError(`${consecutiveFailures} recipes in a row failed at the API; stopping so nothing is wasted. Progress is saved; run it again to resume.`);
              log('fatal', { message: fatal.message }, true);
            }
          }
          progress.render(stats);
        }
      };
      await Promise.all(Array.from({ length: opts.concurrency }, worker));

      const accepted = results.filter(r => r.status === 'accepted');
      if (accepted.length) {
        /* Never overwrite: accepted work already on disk is the one thing a run may not lose. */
        let file = path.join(outDir, `r-${runId}-${String(b + 1).padStart(3, '0')}.json`);
        for (let n = 2; fs.existsSync(file); n++) file = path.join(outDir, `r-${runId}-${String(b + 1).padStart(3, '0')}-${n}.json`);
        writeJsonAtomic(file, Object.fromEntries(accepted.map(r => [r.slug, r.entry])));
        for (const r of accepted) acceptedSlugs.set(r.slug, file);
      }
      writeJsonAtomic(rejectedFile, rejected);
      tally.accepted += accepted.length;
      tally.rejected += results.filter(r => r.status === 'rejected').length;
      tally.failed += results.filter(r => r.status === 'failed').length;
      log('batch_done', { batch: b + 1, accepted: accepted.length, rejected: results.filter(r => r.status === 'rejected').length, failed: results.filter(r => r.status === 'failed').length });
      progress.note(`Batch ${b + 1}/${batches.length} done: ${accepted.length} accepted, ${results.filter(r => r.status === 'rejected').length} rejected, ${results.filter(r => r.status === 'failed').length} failed. Saved.`, stats);
    }
  } finally {
    process.removeListener('SIGINT', onSigint);
    progress.end();
  }

  /* The repo's own audits, then take back anything they reject. */
  let auditNote = '';
  const defaultOut = outDir === DEFAULT_OUT;
  if (opts.audit && !opts.mock && acceptedSlugs.size && defaultOut) {
    say('\nRunning the repo\'s audits (timing, keywords, diet tags, voice) on the merged catalogue…');
    for (let pass = 1; pass <= 3; pass++) {
      const failures = (io.runAudits || runAudits)();
      const mine = Object.keys(failures).filter(s => acceptedSlugs.has(s));
      const others = Object.keys(failures).filter(s => !acceptedSlugs.has(s));
      if (others.length) auditNote = `${others.length} audit failure(s) are on recipes this run did not touch (first: ${failures[others[0]][0]}).`;
      if (!mine.length) { say(others.length ? `  audits report problems elsewhere — ${auditNote}` : '  audits clean.'); break; }
      for (const slug of mine) {
        const file = acceptedSlugs.get(slug);
        const data = readJson(file, {});
        delete data[slug];
        if (Object.keys(data).length) writeJsonAtomic(file, data); else fs.rmSync(file, { force: true });
        acceptedSlugs.delete(slug);
        rejected[slug] = { at: new Date().toISOString(), problems: failures[slug].slice(0, 4) };
        tally.accepted--; tally.rejected++;
        log('audit_reject', { slug, failures: failures[slug] }, true);
        say(`  took back ${slug}: ${failures[slug][0]}`);
      }
      writeJsonAtomic(rejectedFile, rejected);
    }
  } else if (opts.audit && !opts.mock && acceptedSlugs.size) {
    auditNote = 'Audits were skipped because --out is not src/data/rewrites, which is where the build and the audits read from.';
  }

  log('run_end', { ...tally, usage: env.usage, retries: stats.retries, throttled: stats.throttled, stopped: env.stopping, fatal: fatal && fatal.message });

  const u = env.usage;
  say(`\nDone${env.stopping ? ' (interrupted)' : ''}: ${tally.accepted} rewritten, ${tally.rejected} rejected and left as they were, ${tally.failed} failed at the API.`);
  say(`Requests retried ${stats.retries} times; rate limited ${stats.throttled} times.`);
  if (!opts.mock) {
    say(`Tokens: ${u.input.toLocaleString()} in (${u.cacheRead.toLocaleString()} read from cache), ${u.output.toLocaleString()} out.`);
    if (opts.priceIn != null && opts.priceOut != null) say(`Cost: about $${((u.input * opts.priceIn + u.output * opts.priceOut) / 1e6).toFixed(2)} at $${opts.priceIn}/$${opts.priceOut} per million tokens (cache discounts not applied).`);
  }
  say(`Log: ${path.relative(ROOT, runLog)}${tally.rejected || tally.failed ? `; problems: ${path.relative(ROOT, errLog)}` : ''}`);
  if (auditNote) say(auditNote);
  if (fatal) { say(`\nStopped: ${fatal.message}`); }
  if (acceptedSlugs.size && !opts.mock) say('\nNext: npm run build && npm run check, then review the diff (git diff --stat) before committing.');
  if (opts.mock) say('\nMock output can be previewed by pointing the build at it; it is not meant to be committed.');
  return { ...tally, fatal: fatal ? fatal.message : null, interrupted: env.stopping, usage: env.usage, retries: stats.retries, throttled: stats.throttled, runLog, outDir };
}

/* ------------------------------------------------------------------- cli */

async function main() {
  let opts;
  try { opts = parseArgs(process.argv.slice(2)); } catch (e) { console.error(e.message); process.exit(1); }
  if (opts.help) {
    const src = fs.readFileSync(__filename, 'utf8');
    const doc = src.slice(src.indexOf('/**') + 3, src.indexOf('*/'));
    console.log(doc.split('\n').map(l => l.replace(/^ \* ?/, '').replace(/^ \*$/, '')).join('\n').trim());
    return;
  }
  try {
    const result = await run(opts);
    if (result && result.fatal) process.exitCode = 1;
    if (result && result.interrupted) process.exitCode = 130;
  } catch (e) {
    console.error(`\n${e instanceof FatalError ? '' : 'Unexpected error: '}${e.message}`);
    if (!(e instanceof FatalError) && e.stack) console.error(e.stack.split('\n').slice(1, 4).join('\n'));
    process.exit(1);
  }
}

if (require.main === module) main();

module.exports = { run, parseArgs, buildSystemPrompt, buildUserPrompt, mockModel, shape, SUBMIT_TOOL, callApi, Limiter, retryAfterMs, loadItems, selectItems, FatalError, ApiError, DEFAULTS };
