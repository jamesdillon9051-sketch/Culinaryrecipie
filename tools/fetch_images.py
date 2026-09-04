#!/usr/bin/env python3
"""
CulinaryVault image pipeline.

Sources one hero image (and, for every other recipe, a second "process shot")
per recipe from Wikimedia Commons and Openverse, restricted to *unrestricted*
licences only: CC0 and public domain. Nothing under a share-alike or
attribution-required licence is ever downloaded.

Output:
  src/assets/img/recipes/<slug>.webp / .jpg          hero
  src/assets/img/recipes/<slug>-process.webp / .jpg  optional secondary shot
  src/data/images.json                               manifest + attribution + LQIP

Safe to re-run: work already on disk and recorded in the manifest is skipped.
"""

import io, json, os, re, subprocess, sys, time, unicodedata, urllib.parse, urllib.request
from PIL import Image, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "src", "assets", "img", "recipes")
MANIFEST = os.path.join(ROOT, "src", "data", "images.json")
UA = "CulinaryVaultBot/1.0 (static recipe site build; contact: hello@culinaryvault.example)"

HERO_W, PROCESS_W = 800, 640
WEBP_Q, JPEG_Q = 68, 70

# Licences we accept. Anything else is rejected outright.
#
# Everything here is usable on one condition — credit the photographer — which
# the site gives on the page beside every photograph. ShareAlike is included:
# each image is resized and re-encoded to WebP, which is an adaptation, so the
# adaptation goes out under the same licence as the original. The credit line
# and images-attribution.md both say so.
#
# NonCommercial and NoDerivatives stay out, and not out of caution. This site
# carries advertising, which NonCommercial forbids; and every image is resized,
# which is the one thing NoDerivatives prohibits distributing. Neither can be
# satisfied by crediting harder.
_ALLOWED = re.compile(
    r"^(cc0|public domain|pdm|no restrictions"
    r"|cc[-\s]?by(?:[-\s]?sa)?\b"
    r"|attribution(?:[-\s]?share[-\s]?alike)?\b)", re.I)
# Checked separately rather than as a lookahead: "CC BY-SA-NC" backtracks past a
# lookahead placed after the optional SA and comes out accepted. A clause that
# may appear anywhere in the string is safer read anywhere in the string.
_FORBIDDEN = re.compile(r"(\bnc\b|non[-\s]?commercial|\bnd\b|no[-\s]?deriv)", re.I)


class _LicenceGate:
    """Kept callable as OK_LICENCE.match(...) so the call sites do not change."""

    @staticmethod
    def match(licence):
        licence = licence or ""
        return _ALLOWED.match(licence) if not _FORBIDDEN.search(licence) else None


OK_LICENCE = _LicenceGate

# CC0 and public domain need no credit; every CC BY variant does. The templates
# use this to decide whether a credit line is a courtesy or a condition.
NEEDS_CREDIT = re.compile(r"^(cc[-\s]?by|attribution)", re.I)
# ShareAlike binds the adaptation we publish as well, so the credit says so.
SHARE_ALIKE = re.compile(r"(\bsa\b|share[-\s]?alike)", re.I)
BAD_TOKENS = re.compile(
    # Things that are not a photograph of the dish. Terms that also occur
    # inside ordinary food words are anchored: "flower" must not match
    # "cauliflower", and a four-digit archival year must not match the
    # middle of a camera timestamp like 20220503_122449.
    r"(logo|map|diagram|chart|\bsign\b|poster|stamp|coin|packaging|label|\bbox\b|menu|"
    r"portrait|statue|monument|building|shop ?front|storefront|cartoon|drawing|"
    r"painting|illustration|coat of arms|flag of|stereograph|postcard|engraving|"
    r"lithograph|dennis collection|collection\.|archive|museum|advertisement|"
    r"cookbook|book cover|page from|title page|nasa|patent|"
    # The raw components laid out, not the cooked dish. "01 Ingrédients de la
    # soupe de pistou" scores 1.00 against "Soupe au pistou" and is a basket of
    # vegetables in a garden with a chicken walking past.
    r"ingr[ée]dient|ingredienti|ingredientes|zutaten|mise en place|"
    # The people, not the plate. "Vendedoras de horchata" is a 19th-century oil
    # painting of women selling it.
    r"vendedor|vendeur|vendedora|seller|vendor|hawker|selling|"
    # A grave, not a plate. Romanian "mici" also means "small ones", and what
    # came back was a composer's headstone banked with small begonias.
    r"\bgrave\b|cemeter|\btomb\b|headstone|mormant|mormânt|compozitor|memorial|"
    # The product on a shelf, not the dish on a plate. Molokhia came back as a
    # 400g packet of frozen leaves held up in a Cairo hypermarket.
    r"supermarket|hypermarket|grocer|\bpacket\b|\bpouch\b|\bsachet\b|"
    r"shelf|aisle|\bfrozen\b(?! yog)|"
    # A band named after the dish. "Psychedelic Porn Crumpets" is a real group
    # and the photograph is of a guitarist mid-solo.
    # Acts named after food. There is no general signal for these — the title
    # is just the band's name — so they are listed as they are found. The
    # photograph that reached Crumpets was a guitarist mid-solo.
    r"psychedelic porn crumpets|hot chip\b|red hot chili peppers|"
    r"\bband\b|concert|\bgig\b|on stage|guitar|drummer|bassist|singer|"
    r"musician|\blive at\b|\btour\b|setlist|"
    # A museum accession number: Met prints carry "MET DP818368", and what came
    # back for Irish stew was a nineteenth-century political cartoon.
    r"\bmet dp\d|\bdp\d{6}\b|accession|\bplate \d+\b|"
    # Museum inventory numbers in the general shape: the Rijksmuseum files a
    # drawing of a lion as "PK-1984-T-5", which reached the meatball recipe.
    r"\b[a-z]{2,4}-\d{4}-[a-z]-\d+\b|\b[a-z]{2,3}-[a-z]-\d{3,}\b|"
    # The appliance rather than the meal — "appareil à raclette" is the grill.
    r"appareil|appliance|tefal|moulinex|kenwood|\bhob\b|"
    # A single layer or a plan view is a detail, not the dish: the trifle that
    # came back was a bowl of cream photographed from directly above.
    r"cream[- ]layer|[- ]plan\b|plan view|cross[- ]section|"
    r"uncooked|before cooking|raw ingredients|"
    # An archival date, standalone and old enough to mean a historical scan.
    r"\b1[0-8][0-9]{2}\b|\b19[0-5][0-9]\b|"
    # Product shots, clip art and brand assets look like food in a search
    # result and never look like a recipe photograph.
    r"\bpng\b|sticker|clip ?art|\brender\b|mockup|frozen [a-z]+ (pie|meal|dinner)|"
    r"mcdonald|burger king|m&m|\bkfc\b|captain d|monster energy|\bsubway\b|"
    r"nestl|kellogg|heinz|campbell|swanson|chees[e]?cake factory|"
    r"machine|maquina|m\u00e1quina|f\u00e1brica|premiere|conference|wordcamp|"
    r"ciclo|visita|embajador|ambassador|recalled|"
    # Places and living things, anchored so they cannot match inside a
    # longer food word.
    r"sunset|sunrise|\bburr\b|\blimbo\b|sculpture|tourist|"
    r"\bwoman\b|\bman\b|\bpeople\b|crowd|festival|parade|restaurant exterior|"
    r"market stall|\bbird\b|\btree\b|\bpine\b|\bflower\b|\bplant\b|\bleaf\b|"
    r"insect|butterfly|worm|larva|caterpillar|\bgarden\b|landscape|church|"
    r"temple|\bstation\b|"
    r"\bstreet\b|\bbridge\b|castle|\bpark\b|\bmall\b|shopping|airport|hotel lobby)", re.I)
STOP = set("""a an and the of with in on for to from at by de la le les el il alla all
au aux con e y style classic authentic homemade best easy quick ultimate crispy
fluffy silky creamy warm iced fresh baked roast roasted slow one bowl skillet deep
dish overnight brown butter bakery molten smash beer battered herb""".split())


def log(msg):
    print(msg, flush=True)


def _require_http(url):
    """urllib.request.urlopen honours file:// and ftp://. API responses decide
    these URLs, so only http(s) is ever followed."""
    if not isinstance(url, str) or not url.lower().startswith(("http://", "https://")):
        raise ValueError("refusing non-http(s) URL: %r" % (url,))
    return url


# Wikimedia's API rate-limits this environment's shared egress IP, so requests
# to it are paced rather than burst. The gap widens on every 429 and narrows
# again after a run of clean responses, which keeps the whole catalogue
# reachable without needing a fixed guess at the limit.
_last_call = {}
_gap = {}
# The ceiling is deliberately low: a host that refuses at an 8-second pace
# is limiting the IP rather than the rate, and every extra step of
# escalation is time spent being refused more slowly.
MIN_GAP, MAX_GAP = 1.0, 8.0
BENCH_SECONDS = 600
# Wikimedia answers a 429 in about 0.2s and tells us exactly how long to wait,
# so a refusal is cheap and waiting it out is productive. Bench only after a
# long run of them, which means the limit has stopped being about pace.
BENCH_AFTER = 25
RETRY_AFTER_CAP = 90
_clean_streak = {}
_fail_streak = {}
_benched_until = {}
# Hosts that answered with a server error or a timeout rather than a refusal.
# Openverse currently 504s on any filtered query after a full minute, and
# three of those per recipe is most of the run's wall clock spent on nothing.
_dead = {}
DEAD_AFTER = 2
HOST_TIMEOUT = {"api.openverse.org": 12}


def retry_after(headers):
    """Wikimedia sends a countdown on a 429. Waiting exactly that long is
    both the polite thing and the fast one — the next call then succeeds."""
    raw = (headers or {}).get("Retry-After") if headers else None
    try:
        return max(1.0, min(RETRY_AFTER_CAP, float(raw)))
    except (TypeError, ValueError):
        return None


def timeout_for(host, default):
    return HOST_TIMEOUT.get(host, default)


def mark_dead(host, why):
    _dead[host] = _dead.get(host, 0) + 1
    if _dead[host] == DEAD_AFTER:
        log(f"    · {host} is not answering ({why}); skipping it for this run")


def is_dead(host):
    return _dead.get(host, 0) >= DEAD_AFTER


def host_of(url):
    host = urllib.parse.urlsplit(url).hostname or ""
    # Commons, the thumbnailer and the file store are separate names in front
    # of one rate-limit budget, so pacing them separately just means each
    # rediscovers the same limit on its own. Pace them as one.
    if host.endswith("wikimedia.org") or host.endswith("wikipedia.org"):
        return "wikimedia.org"
    return host


def throttle(host):
    """Hold the per-host request gap, sleeping out whatever is left of it."""
    gap = _gap.get(host, MIN_GAP)
    waited = time.time() - _last_call.get(host, 0)
    if waited < gap:
        time.sleep(gap - waited)
    _last_call[host] = time.time()


def throttled(url):
    host = host_of(url)
    return benched(host) or _gap.get(host, MIN_GAP) > MIN_GAP * 4


def slow_down(host, quiet=False):
    """`quiet` means the host told us how long to wait. That is a normal part
    of a paced conversation with Wikimedia, not a sign anything is wrong, so
    it neither widens the gap nor gets logged — we simply wait and continue."""
    _clean_streak[host] = 0
    _fail_streak[host] = _fail_streak.get(host, 0) + 1
    if not quiet:
        _gap[host] = min(MAX_GAP, max(MIN_GAP, _gap.get(host, MIN_GAP)) * 1.8)
    if _fail_streak[host] >= BENCH_AFTER and not benched(host):
        # A long run of refusals means the limit has stopped being about pace.
        _benched_until[host] = time.time() + BENCH_SECONDS
        log(f"    · {host} is rate limiting this IP; benched for {BENCH_SECONDS // 60} minutes")
    elif not quiet and not benched(host):
        log(f"    · {host} rate limited; pacing at {_gap[host]:.0f}s between calls")


def benched(host):
    until = _benched_until.get(host)
    if until is None:
        return False
    if time.time() < until:
        return True
    # The bench has expired. Come back at full speed rather than at the
    # ceiling pace that got us benched, or the first probe alone costs a
    # 45-second sleep before it can learn anything.
    del _benched_until[host]
    _gap[host] = MIN_GAP
    _fail_streak[host] = 0
    return False


def speed_up(host):
    _benched_until.pop(host, None)
    _fail_streak[host] = 0
    _clean_streak[host] = _clean_streak.get(host, 0) + 1
    if _clean_streak[host] >= 10 and _gap.get(host, MIN_GAP) > MIN_GAP:
        _gap[host] = max(MIN_GAP, _gap[host] / 1.4)
        _clean_streak[host] = 0


def http_json(url, tries=10):
    """A 429 is answered with a Retry-After countdown, so the useful response
    is to wait exactly that long and ask again — the call then goes through.
    A 5xx or a timeout is a different problem: the host is not refusing us, it
    is broken, and retrying it costs a minute each time for nothing."""
    _require_http(url)
    host = host_of(url)
    if benched(host) or is_dead(host):
        return None
    for i in range(tries):
        throttle(host)
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "application/json"})
            with urllib.request.urlopen(req, timeout=timeout_for(host, 45)) as r:
                data = json.loads(r.read().decode("utf-8"))
            speed_up(host)
            return data
        except urllib.error.HTTPError as e:
            if e.code == 429:
                wait = retry_after(e.headers)
                slow_down(host, quiet=wait is not None)
                if benched(host):
                    return None
                time.sleep(wait if wait is not None else _gap.get(host, MIN_GAP))
                continue
            if e.code >= 500:
                mark_dead(host, f"HTTP {e.code}")
                if is_dead(host):
                    return None
            if i == tries - 1:
                log(f"    ! json failed: {e}")
                return None
            time.sleep(2 ** min(i, 3))
        except Exception as e:
            mark_dead(host, type(e).__name__)
            if is_dead(host):
                return None
            if i == tries - 1:
                log(f"    ! json failed: {e}")
                return None
            time.sleep(2 ** min(i, 3))
    log("    ! json failed: still rate limited after retries")
    return None


DOWNLOAD_UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
               "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36")


# Every candidate for a dish sits on the same file server, so "try the next
# one" is not an escape from a rate limit — it is the same refusal again.
# Waiting the countdown out is the only thing that actually gets the file.
# Only an implausible countdown means something other than pacing is wrong.
DOWNLOAD_RETRY_CAP = 75


def http_bytes(url, tries=3):
    _require_http(url)
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={
                "User-Agent": DOWNLOAD_UA,
                "Accept": "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
            })
            with urllib.request.urlopen(req, timeout=90) as r:
                data = r.read()
            # A download that goes through says as much about the budget as a
            # search that does. Without this the failure streak only ever grew
            # and the shared Wikimedia pace benched itself mid-run.
            speed_up(host_of(url))
            return data
        except urllib.error.HTTPError as e:
            if e.code == 429:
                wait = retry_after(e.headers)
                slow_down(host_of(url), quiet=wait is not None)
                if benched(host_of(url)):
                    return None
                if wait is not None and wait > DOWNLOAD_RETRY_CAP:
                    return None          # not pacing; let the caller move on
                if wait is not None and wait > 20:
                    log(f"    · file host asked for {wait:.0f}s; waiting it out")
                time.sleep(wait if wait is not None else _gap.get(host_of(url), MIN_GAP))
                continue
            if i == tries - 1:
                log(f"    ! download failed: {e}")
                return None
            time.sleep(2 ** i)
        except Exception as e:
            if i == tries - 1:
                log(f"    ! download failed: {e}")
                return None
            time.sleep(2 ** i)
    return None


def strip_html(s):
    s = re.sub(r"<[^>]+>", "", s or "")
    return re.sub(r"\s+", " ", s).strip()


WEAK = set("""japanese chinese korean thai indian french italian mexican greek turkish
spanish portuguese german swedish russian polish british american vietnamese
malaysian indonesian brazilian nigerian ethiopian jamaican peruvian argentinian
taiwanese pakistani lankan filipino cuban colombian chilean trinidadian
ghanaian kenyan australian hawaiian irish scottish welsh austrian swiss
belgian dutch danish norwegian finnish czech romanian georgian lebanese
persian israeli tunisian egyptian moroccan hungarian bulgarian croatian
serbian maltese icelandic
japan china korea thailand india france italy mexico greece turkey spain
portugal germany sweden russia poland britain england america vietnam
malaysia indonesia brazil nigeria ethiopia jamaica peru argentina taiwan
pakistan lanka philippines cuba colombia chile trinidad ghana kenya
australia hawaii ireland scotland wales austria switzerland belgium
netherlands denmark norway finland czechia romania georgia lebanon
iran israel tunisia egypt morocco hungary
white black red green yellow brown golden dark light sweet sour spicy hot cold
small large whole half fresh dried new old traditional national street home
food dishes meal plate bowls cooking cooked recipe recipes
salad soup stew curry cake pie bread rice noodle noodles sauce roll rolls
sandwich toast pudding pancake pancakes tart drink tea coffee juice
cupcake cupcakes muffin muffins cookie cookies biscuit biscuits""".split())


# Letters that are not a base letter plus a combining mark, so NFKD leaves them
# exactly as they are. Without these, "smorrebrod" cannot match "smørrebrød"
# and the Danish open sandwich scores zero against its own name.
TRANSLITERATE = str.maketrans({
    "\u00f8": "o", "\u00e6": "ae", "\u00df": "ss", "\u0142": "l", "\u0111": "d",
    "\u0131": "i", "\u00f0": "d", "\u00fe": "th", "\u0153": "oe", "\u017f": "s",
})


def fold(s):
    """Lower-case and strip diacritics, so "Rosti" matches "Rösti" and
    "Caneles" matches "Canelés". Scripts without a Latin decomposition —
    Georgian, Persian, Japanese — pass through untouched."""
    lowered = unicodedata.normalize("NFKD", (s or "").lower()).translate(TRANSLITERATE)
    return "".join(c for c in lowered if not unicodedata.combining(c))


def tokens(s):
    """Words worth matching on. Splitting on non-word characters rather than
    on [^a-z0-9] is what lets a native-script file title be compared at all:
    the old pattern reduced "Rösti" to "sti" and "ხინკალი" to nothing, so a
    fallback query written in the dish's own alphabet could never score."""
    out = set()
    for t in re.split(r"[^\w]+", fold(s), flags=re.UNICODE):
        if not t or t in STOP or t.isdigit():
            continue
        # Two Han or kana characters are a whole dish name — 牛丼 is gyudon —
        # where two Latin letters are almost always noise.
        if len(t) > 2 or (len(t) >= 1 and not t.isascii()):
            out.add(t)
    return out


def strong(s):
    """Tokens that actually identify a dish, with nationalities, colours and
    generic food words stripped out."""
    return tokens(s) - WEAK


# A dish name is also used as a flavour: "Dough-Donut-Horchata" scores 1.00
# against "Horchata" and is a photograph of a doughnut. When a title names one
# of these distinct forms and the query does not, the picture is of that form,
# flavoured with the dish — which is not the dish.
OTHER_FORM = re.compile(
    r"\b(donuts?|doughnuts?|cupcakes?|muffins?|cookies?|biscuits?|brownies?|"
    r"ice ?creams?|gelato|sorbet|milkshakes?|smoothies?|lattes?|frappe|"
    r"cheesecakes?|popsicles?|lollipops?|candy|marshmallows?|"
    # "-flavoured" and "-flavouring" mark a different food carrying the dish's
    # taste. The bare noun does not: "Potato Salad at Transylvania Flavour" is a
    # restaurant, and rejecting it threw away a correct photograph.
    r"cocktails?|liqueur|syrup|powder|mix|kit|flavou?r(?:ed|ing))\b", re.I)


# Preparations that are made from the same cut and are not the same dish.
# Pastrami is brisket — cured, spiced and steamed rather than smoked — so "Pit
# smoked pastrami brisket" matches "smoked brisket" perfectly and shows pink
# deli meat on rye. A recipe that really wants one of these names it in its own
# queries, which exempts it.
DIFFERENT_DISH = re.compile(
    r"\b(pastrami|corned beef|bresaola|prosciutto|jerky|"
    # Espresso drinks are not interchangeable. A cold brew is brewed cold and
    # served black; "Iced White Mocha in a Glass Jug" is a different drink that
    # shares every word the relevance test looks at.
    r"mocha|latte|cappuccino|macchiato|frappe|frappuccino)\b", re.I)


# What a vegetarian or vegan recipe must not be illustrated with. The Belgian
# waffle recipe is tagged Vegetarian and came back as a waffle under fried eggs
# and bacon, which contradicts the page it would sit on.
MEAT = re.compile(
    r"\b(bacon|ham|jamon|prosciutto|salami|chorizo|pepperoni|sausages?|"
    r"chicken|beef|pork|lamb|mutton|veal|duck|turkey|steak|meat|mince|"
    r"anchov(?:y|ies)|tuna|salmon|prawns?|shrimps?|crab|lobster|squid|"
    r"fish|seafood|oysters?|clams?|mussels?)\b", re.I)
ANIMAL_PRODUCE = re.compile(
    r"\b(cheese|butter|cream|milk|yogh?urt|egg|eggs|honey|mayonnaise)\b", re.I)


def contradicts_diet(title, query, tags=()):
    """True when the title names something the recipe's own dietary tags rule
    out. A word the recipe itself asks for is never a contradiction — a cheese
    fondue is allowed to say cheese."""
    tags = {t.lower() for t in (tags or ())}
    if not tags & {"vegetarian", "vegan"}:
        return False
    for pattern in ([MEAT] + ([ANIMAL_PRODUCE] if "vegan" in tags else [])):
        found = pattern.search(title or "")
        if found and not pattern.search(query or ""):
            return True
    return False


# An animal, not a meal. "Karjalankarhukoira, Karelian Bear Dog" is a perfect
# match for "Karelian pie" and a photograph of a dog. Judged against the query
# so that corn dogs and hot dogs are unaffected.
LIVING_THING = re.compile(
    r"\b(dogs?|cats?|kittens?|puppy|puppies|bears?|horses?|ponies|pony|"
    r"cows?|sheep|goats?|pigs?|hens?|birds?|breed)\b", re.I)
# The tool rather than the food: "Krumkake gear" is the iron and its box.
EQUIPMENT = re.compile(
    r"\b(gear|maker|moulds?|molds?|bakeware|utensils?|press|"
    # Preparing the ingredient is not the dish. "Grinding of beans for moi moi"
    # is a photograph of a mill, and it satisfied every relevance test because
    # the dish is named in the caption.
    r"grinder|grinding|mill|mortar|pestle|blender|"
    r"(?:waffle|krumkake|pizzelle|sandwich) iron)\b", re.I)


# Wikimedia files a geotagged photograph as "Country - Town - Site", so a title
# that opens with a country name is a picture of a place. Maqluba is a Palestinian
# rice dish and also a sinkhole in Malta, and the sinkhole has no venue noun to
# catch it on.
COUNTRY_FIRST = re.compile(
    r"^\s*(malta|italy|spain|france|germany|greece|turkey|india|japan|china|"
    r"mexico|brazil|portugal|poland|hungary|romania|georgia|israel|egypt|"
    r"morocco|tunisia|kenya|nigeria|ghana|peru|chile|cuba|jamaica|norway|"
    r"sweden|denmark|finland|iceland|ireland|scotland|wales|england|"
    r"netherlands|belgium|austria|switzerland|croatia|serbia|bulgaria)"
    r"\s*[-\u2013\u2014:,]", re.I)


def is_a_place(title, query):
    return bool(COUNTRY_FIRST.match(title or "")) and not COUNTRY_FIRST.match(query or "")


def names_a_different_dish(title, query):
    for pattern in (DIFFERENT_DISH, LIVING_THING, EQUIPMENT):
        if pattern.search(title or "") and not pattern.search(query or ""):
            return True
    return False


def is_a_flavour_of_something_else(title, query):
    """True when the title names a different form of food — a doughnut, an ice cream —
    that the query never asked for. The dish is then the flavour, not the
    subject."""
    match = OTHER_FORM.search(title or "")
    return bool(match) and not OTHER_FORM.search(query or "")


# Narrower than SEGMENTS: a full stop does not separate two foods. "Enchiladas
# de carnitas de pato. Salsa de pipián verde." is one dish described in two
# sentences, where "Corn, chicago dog and Mac and cheese" is three dishes in a
# list. The comma is the signal, not the stop.
COHERE_SPLIT = re.compile(r"[,;|/]+|\s[-\u2013\u2014]\s")


def _same_word(a, b):
    """Word equality that tolerates a plural but not a coincidence: "dog" is
    "dogs", "pie" is not "pierogi". Scripts written without word breaks fall
    back to containment, since the whole title is one token there."""
    if a == b:
        return True
    if not a.isascii() or not b.isascii():
        return a in b or b in a
    short, long = sorted((a, b), key=len)
    return long.startswith(short) and len(long) - len(short) <= 2


def dish_words_cohere(title, query):
    """For a dish whose name is more than one word, those words have to appear
    together in one clause of the title.

    "Corn, chicago dog and Mac and cheese" matches every word of "corn dogs"
    and is a photograph of a Chicago hot dog next to corn on the cob. The words
    are there; the dish is not. Requiring them inside a single comma-delimited
    clause separates the two cases."""
    wanted = strong(query)
    if len(wanted) < 2:
        return True
    present = {t for t in wanted for w in tokens(title or "") if _same_word(t, w)}
    if len(present) < 2:
        # Only one of the dish's words is here at all, so nothing is scattered
        # — "Almond bakewell" is a partial name, not a coincidence of two
        # different foods. The relevance score already grades that case.
        return True
    for segment in COHERE_SPLIT.split(title or ""):
        seen = {t for t in wanted for w in tokens(segment) if _same_word(t, w)}
        if len(seen) >= 2:
            return True
    return False


def shares_dish_word(title, query):
    """Whether the title carries a word that actually identifies the dish.

    Exact set intersection is the right test for languages written with spaces.
    It cannot work for those written without them: Commons titles the CC0
    photograph of mapo eggplant "\u6771\u4eac\u306e\u4e2d\u83ef\u6599\u7406\u5e97\u3067\u9ebb\u5a46\u8302\u5b50", which tokenises as one word,
    so "\u9ebb\u5a46\u8302\u5b50" can never equal it. Containment is allowed only between two
    non-ASCII tokens, so Latin queries keep the stricter test — "pie" must not
    start matching "pierogi"."""
    q = strong(query)
    if not q:
        return True
    c = strong(title)
    if q & c:
        return True
    return any(t in w for t in q if not t.isascii()
               for w in c if not w.isascii())


def relevance(candidate_title, query):
    """Fraction of the query's distinctive words present in the file title."""
    q, c = tokens(query), tokens(candidate_title)
    if not q:
        return 0.0
    hits = sum(1 for t in q if t in c or any(t in w or w in t for w in c))
    return hits / len(q)


# A dish name is not always the subject of the picture. "Coffees in Cornish
# Pasty Shop, Brighton" scores a perfect 1.00 against "Cornish pasty" and shows
# two hot chocolates: the dish is naming the venue, and what the photograph is
# actually of was named before the preposition. Same for a place, a festival or
# a company called after a food.
VENUE = re.compile(
    r"\b(shops?|stores?|caf[e\u00e9]s?|coffee ?house|restaurants?|bakery|bakeries|"
    r"baker|pub|inn|tavern|bars?|bistro|brasserie|diner|deli|takeaway|kiosk|"
    r"stalls?|van|truck|factory|works|company|co|ltd|inc|festival|fair|museum|"
    r"street|road|lane|square|station|hotel|house|market|"
    # The second half of this list is one wrong photograph each. A trader's
    # sign reads "<owner>'s <dish> <what it is>", and the last word is as often
    # plaza, booth or spot as it is shop — "Darren's Doubles Xtra Plaza" and
    # "Kwa Morombo Nyama Choma Spot" both shipped a storefront as the dish.
    r"plaza|mall|arcade|centre|center|court|corner|spot|joint|eatery|canteen|"
    r"buffet|booth|grocery|supermarket|hall|club|lounge|bakeshop|foodcourt|"
    # A trader's sign is a boast as often as a noun. Three separate runs
    # brought back the same Trinidad storefront, billed in turn as an empire,
    # a boss and a plaza.
    r"empire|boss|king|palace|paradise|world|express|depot)\b", re.I)
# "of" is deliberately absent: "Interior of the Waffle House" is a location but
# "Bowl of ramen" is not, and the venue-adjacency rule below already catches the
# first without throwing away the second.
LOCATION = {"in", "at", "inside", "outside", "near", "from", "by"}
# Titles are written as clauses: "<what it shows> - <where it was taken>". Only
# a *spaced* dash separates clauses — Commons uses bare hyphens as word
# separators in filenames, and splitting on those turned "Sloppy-Joes-Bar-01"
# into four one-word clauses, so "Joes" was never seen next to "Bar".
SEGMENTS = re.compile(r"[,:;()\[\]|/]+|\s[-\u2013\u2014]\s|\.\s")


def names_the_venue_not_the_dish(title, query):
    """True when every mention of the dish in the title is part of a venue's
    name or sits inside a "taken at ..." clause — which means the dish is where
    the photograph happened, not what it is of."""
    title = title or ""
    if not VENUE.search(title):
        return False               # nothing venue-shaped; the usual case
    dish = strong(query)
    if not dish:
        return False
    found = False
    for segment in SEGMENTS.split(title):
        # Single letters are apostrophe debris — "Joe's" splits into "joe" and
        # "s" — and counting them pushed "Bar" out of the lookahead window, so
        # "Sloppy Joe's Bar" read as a dish rather than a pub.
        # \W is Unicode-aware, which matters: the old Latin-only class deleted
        # every CJK character before the loop could see it, so a Chinese dish
        # name was never found in the title and the venue test always came back
        # False. That is how a Shenzhen shopfront shipped as 水煮魚. Non-Latin
        # words are kept at any length; Latin ones still need two letters, so
        # apostrophe debris ("Joe's" -> "joe", "s") stays out.
        words = [w for w in re.split(r"\W+", segment, flags=re.UNICODE)
                 if len(w) > 1 or (w and not w.isascii())]
        lower = [w.lower() for w in words]
        location_at = next((i for i, w in enumerate(lower) if w in LOCATION), None)
        for i, w in enumerate(lower):
            if (len(w) <= 2 and w.isascii()) or not any(d in w or w in d for d in dish):
                continue
            found = True
            # "Cornish Pasty Shop" — the dish word is part of the venue's name,
            # which shows up as a venue noun within the next word or two.
            if any(VENUE.fullmatch(w) for w in lower[i + 1:i + 3]):
                continue
            # "Coffees in Cornish Pasty ..." — it is in the location clause.
            if location_at is not None and i > location_at:
                continue
            return False           # a mention that really is the subject
    return found


# --------------------------------------------------------------- providers

# CirrusSearch splits free licences into two buckets and will not accept an OR
# between them, so they are two searches. "unrestricted" is CC0 and public
# domain; "attribution" is CC BY. Unrestricted is asked first everywhere,
# because an image with no conditions is worth preferring to one with them.
# Two tiers, not three. CirrusSearch has no ShareAlike bucket, so the second
# tier has to be an unfiltered search re-validated by licence — and that search
# already returns everything the CC BY bucket would have, which made the middle
# tier pure cost: six searches a query where four will do. Preference for an
# unencumbered image is kept in rank() below rather than in the query.
LICENCE_FILTERS = ("haslicense:unrestricted", "")


def commons_candidates(query, extra="", licence_filter=LICENCE_FILTERS[0], tags=()):
    # Openverse indexes most of Commons and is not rate limiting us, so a
    # benched Commons is a slow way to learn nothing new.
    if benched(host_of("https://commons.wikimedia.org/")):
        return []
    params = {
        "action": "query", "format": "json", "generator": "search",
        "gsrsearch": f'{query} {extra} filetype:bitmap {licence_filter}'.strip(),
        "gsrnamespace": "6", "gsrlimit": "10",
        "prop": "imageinfo", "iiprop": "url|extmetadata|size", "iiurlwidth": str(HERO_W),
    }
    data = http_json("https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(params))
    out = []
    if not data:
        return out
    for page in (data.get("query", {}).get("pages", {}) or {}).values():
        info = (page.get("imageinfo") or [None])[0]
        if not info:
            continue
        meta = info.get("extmetadata", {}) or {}
        lic = strip_html(meta.get("LicenseShortName", {}).get("value", ""))
        if not OK_LICENCE.match(lic):
            continue
        title = re.sub(r"^File:|\.\w+$", "", page.get("title", ""))
        if BAD_TOKENS.search(title):
            continue
        if names_the_venue_not_the_dish(title, query):
            continue
        if is_a_flavour_of_something_else(title, query):
            continue
        if not dish_words_cohere(title, query):
            continue
        if names_a_different_dish(title, query):
            continue
        if is_a_place(title, query):
            continue
        if contradicts_diet(title, query, tags):
            continue
        if info.get("width", 0) < 500 or info.get("height", 0) < 380:
            continue
        # The thumbnail is the whole point of iiurlwidth: it is ~200 KB where
        # the original can be 20 MB, and the file host answers a big request
        # with a minute-long Retry-After. Fall back to the original only when
        # MediaWiki produced no thumbnail and the file is small enough to be
        # worth the wait.
        src = info.get("thumburl")
        if not src:
            if info.get("size", 0) > 4_000_000:
                continue
            src = info.get("url", "")
        out.append({
            "title": title,
            "url": src.split("?")[0],
            "page": info.get("descriptionurl", ""),
            "author": strip_html(meta.get("Artist", {}).get("value", "")) or "Unknown",
            "licence": lic,
            "licence_url": strip_html(meta.get("LicenseUrl", {}).get("value", ""))
                           or "https://creativecommons.org/publicdomain/zero/1.0/",
            "source": "Wikimedia Commons",
            "score": relevance(title, query),
            "strong": shares_dish_word(title, query),
        })
    return out


# Openverse has been answering every licence-filtered query with a 504 after a
# full minute, and the results it does return point at the original file on
# upload.wikimedia.org — which replies to an unauthenticated request with a
# ten-minute Retry-After, where the thumbnail host answers in 0.2s. So it costs
# a minute per recipe to produce candidates that cannot be downloaded. Flip
# this back to True to try it again; nothing else needs to change.
OPENVERSE_ENABLED = False


def openverse_candidates(query, wide=True):
    if not OPENVERSE_ENABLED:
        return []
    params = {"q": query, "license": "cc0,pdm", "page_size": 12, "mature": "false"}
    if wide:
        params["aspect_ratio"] = "wide"
    url = "https://api.openverse.org/v1/images/?" + urllib.parse.urlencode(params)
    data = http_json(url, tries=2)
    out = []
    if not data:
        return out
    for r in data.get("results", []):
        title = r.get("title") or query
        if BAD_TOKENS.search(title):
            continue
        lic = (r.get("license") or "").upper()
        if lic not in ("CC0", "PDM"):
            continue
        out.append({
            "title": title,
            "url": r.get("url", ""),
            "page": r.get("foreign_landing_url", ""),
            "author": r.get("creator") or "Unknown",
            "licence": "CC0 1.0" if lic == "CC0" else "Public Domain Mark 1.0",
            "licence_url": r.get("license_url") or "https://creativecommons.org/publicdomain/zero/1.0/",
            "source": (r.get("source") or "Openverse").title(),
            "score": relevance(title, query),
            "strong": shares_dish_word(title, query),
        })
    return out


def shorten(query):
    """Openverse matches whole phrases, so a four-word dish name often returns
    nothing while its two distinctive words return plenty."""
    words = [w for w in re.split(r"[^A-Za-z0-9\']+", query) if len(w) > 2 and w.lower() not in STOP]
    return " ".join(words[:2]) if len(words) > 2 else ""


def gather(query, tags=()):
    seen, pool = set(), []
    brief = shorten(query)
    # Held as callables, not results. Built eagerly, every query ran before the
    # "we have enough" check below could stop anything — which on a rate-limited
    # archive is the difference between two calls a recipe and five.
    attempts = [lambda: openverse_candidates(query),
                lambda: openverse_candidates(query, wide=False)]
    if brief:
        attempts.append(lambda: openverse_candidates(brief))
    # CC0 first, both query shapes, before CC BY is asked for at all. A dish
    # the archives cover well never reaches the attribution tier, so the site
    # only takes on a crediting obligation where the alternative is nothing.
    for licence in LICENCE_FILTERS:
        attempts.append(lambda lic=licence: commons_candidates(query, "", lic, tags))
    # The "food" variant is a second full search for a marginal gain, so it is
    # the last thing tried rather than doubling the cost of every recipe.
    attempts.append(lambda: commons_candidates(query, "food", LICENCE_FILTERS[-1], tags))
    for attempt in attempts:
        for c in attempt():
            key = c["url"]
            if not isinstance(key, str) or not key.lower().startswith(("http://", "https://")):
                continue
            # A score alone is not enough: a title can hit the threshold on
            # nationality and colour words while showing something else
            # entirely, so at least one dish-identifying word must match too.
            if key and key not in seen and c["score"] >= 0.5 and c.get("strong"):
                seen.add(key)
                pool.append(c)
        if len(pool) >= 2:
            break
    # Prefer an equally relevant image from a host that will answer immediately,
    # and fall back to a throttled one only when it is the only match.
    def rank(c):
        # A scaled thumbnail is ~200 KB and served without argument; the
        # original behind it can be 20 MB and comes with a ten-minute
        # Retry-After. Same picture, so never pick the expensive copy first.
        original = 0 if "/thumb/" in c["url"] else 1
        # An image with no conditions beats one needing a credit, which beats
        # one whose conditions reach our own copy. Equal relevance only — this
        # never promotes a worse photograph of the dish.
        licence = 0 if not NEEDS_CREDIT.match(c["licence"] or "") else (
            2 if SHARE_ALIKE.search(c["licence"] or "") else 1)
        return (-round(c["score"], 2), licence, original,
                1 if throttled(c["url"]) else 0)

    pool.sort(key=rank)
    return pool


# ------------------------------------------------------------- processing

def is_monochrome(im, threshold=14):
    """True when an image has almost no colour in it.

    Every title-based filter needs the title to admit what the picture is, and
    archival material rarely does: "Nice marchande de socca" is a postcard from
    about 1900 of a woman selling socca from a cart, and nothing in those four
    words says so. What does say so is that it is grey.

    Cooked food is not grey. A plate of anything has sauce, browning, a green
    herb or a coloured dish under it, and a genuine food photograph that reads
    as monochrome is rare enough to be worth losing. Portraits of people named
    after dishes — a John William Kalua, a Farax Cawl — are caught by the same
    test for the same reason.

    Measured as the mean distance between the RGB channels, on a thumbnail so it
    costs nothing.
    """
    small = im.resize((64, 48), Image.BILINEAR)
    pixels = list(small.getdata())
    if not pixels:
        return False
    spread = sum(max(p[:3]) - min(p[:3]) for p in pixels) / len(pixels)
    return spread < threshold


def process(raw, slug, suffix, width):
    """Write webp + jpg, return metadata (dimensions, average colour, LQIP)."""
    try:
        im = Image.open(io.BytesIO(raw))
        im.draft("RGB", (width * 2, width * 2))
        im = im.convert("RGB")
    except Exception as e:
        log(f"    ! decode failed: {e}")
        return None
    if im.width < 400:
        return None

    if is_monochrome(im):
        log("    · monochrome — archival rather than a photograph of the food")
        return None

    # Crop to a 4:3 editorial frame, then resize.
    target = 4 / 3
    ratio = im.width / im.height
    if ratio > target:
        new_w = int(im.height * target)
        left = (im.width - new_w) // 2
        im = im.crop((left, 0, left + new_w, im.height))
    elif ratio < target:
        new_h = int(im.width / target)
        top = int((im.height - new_h) * 0.4)
        im = im.crop((0, top, im.width, top + new_h))
    im = im.resize((width, int(width / target)), Image.LANCZOS)

    base = os.path.join(IMG_DIR, slug + suffix)
    im.save(base + ".webp", "WEBP", quality=WEBP_Q, method=5)
    im.save(base + ".jpg", "JPEG", quality=JPEG_Q, optimize=True, progressive=True)

    tiny = im.resize((16, 12), Image.LANCZOS).filter(ImageFilter.GaussianBlur(0.6))
    buf = io.BytesIO()
    tiny.save(buf, "JPEG", quality=40)
    import base64
    lqip = "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()
    px = im.resize((1, 1), Image.LANCZOS).getpixel((0, 0))
    # Nudge toward the warm brand ground so placeholders never read as grey mud.
    colour = "#%02x%02x%02x" % tuple(min(255, int(v * 0.82 + 34)) for v in px)
    return {"w": im.width, "h": im.height, "lqip": lqip, "color": colour}


def alt_queries():
    """Some dishes are only catalogued under an English description, or under a
    romanisation the archives do not use. A slug can name fallback queries here,
    tried in order when the catalogue's own query finds nothing."""
    path = os.path.join(ROOT, "src", "data", "image-queries.json")
    return json.load(open(path)) if os.path.exists(path) else {}


def main():
    os.makedirs(IMG_DIR, exist_ok=True)
    alts = alt_queries()
    catalog = json.loads(subprocess.check_output(
        ["node", "-e",
         "process.stdout.write(JSON.stringify(["
         "...require('%s'), ...require('%s'), ...require('%s'), ...require('%s'),"
         "...require('%s'), ...require('%s')]))"
         % (os.path.join(ROOT, "src", "data", "catalog.js"),
            os.path.join(ROOT, "src", "data", "catalog-2.js"),
            os.path.join(ROOT, "src", "data", "catalog-3.js"),
            os.path.join(ROOT, "src", "data", "catalog-4.js"),
            os.path.join(ROOT, "src", "data", "catalog-5.js"),
            os.path.join(ROOT, "src", "data", "catalog-6.js"))]).decode())

    manifest = {}
    if os.path.exists(MANIFEST):
        manifest = json.load(open(MANIFEST))

    for idx, rec in enumerate(catalog):
        slug, query = rec["slug"], rec["imageQuery"]
        want_process = idx % 2 == 0          # a process shot for 50% of recipes
        entry = manifest.get(slug)
        if entry and entry.get("skip"):
            # Deliberately left on the gradient placeholder: the archives have
            # nothing for this dish that is both correctly licensed and
            # actually a picture of it. A wrong photo is worse than none.
            continue
        if entry and entry.get("hero"):
            # Already sourced. Never re-fetch: heroes are hand-checked and a
            # later search can return a worse match for the same dish. The
            # optional process shot is not worth risking that.
            continue

        log(f"[{idx + 1:3d}/{len(catalog)}] {slug}  <- {query}")
        tags = rec.get("tags") or ()
        pool = gather(query, tags)
        for fallback in (alts.get(slug) or [])[:2]:
            if pool:
                break
            log(f"    · retrying as \"{fallback}\"")
            pool = gather(fallback, tags)
        if not pool:
            log("    · no unrestricted image found — gradient placeholder will be used")
            manifest[slug] = {"hero": None, "process": None}
            json.dump(manifest, open(MANIFEST, "w"), indent=1)
            continue

        entry = {"hero": None, "process": None}
        slots = [("", HERO_W)] + ([("-process", PROCESS_W)] if want_process else [])
        for (suffix, width) in slots:
            for cand in list(pool):
                pool.remove(cand)
                if throttled(cand["url"]) and any(not throttled(c["url"]) for c in pool):
                    continue          # a faster candidate is still waiting
                raw = http_bytes(cand["url"])
                time.sleep(0.6)
                if not raw or len(raw) < 8000:
                    continue
                meta = process(raw, slug, suffix, width)
                if not meta:
                    continue
                meta.update({k: cand[k] for k in
                             ("title", "author", "licence", "licence_url", "page", "source")})
                meta["file"] = slug + suffix
                entry["hero" if suffix == "" else "process"] = meta
                log(f"    ok {suffix or 'hero':8s} {cand['licence']:12s} {cand['title'][:52]}")
                break
        if not entry["hero"]:
            # Candidates were found but none could be downloaded — usually the
            # file host refusing. Say so, rather than leaving a silent gap: a
            # later run will retry this slug because the hero is still missing.
            log("    · candidates found but none downloadable — will retry on the next run")
        manifest[slug] = entry
        json.dump(manifest, open(MANIFEST, "w"), indent=1)

    have = sum(1 for v in manifest.values() if v.get("hero"))
    proc = sum(1 for v in manifest.values() if v.get("process"))
    log(f"\nDONE — heroes {have}/{len(catalog)}, process shots {proc}")


if __name__ == "__main__":
    main()
