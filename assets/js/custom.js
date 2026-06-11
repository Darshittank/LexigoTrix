'use strict';

/* ════════════════════════════════════════════════
   WORD POOL  — add / remove freely (length 3–9)
════════════════════════════════════════════════ */
const WORD_POOL = [
  // ========== ORIGINAL (50) ==========
  'FIRE','WATER','WIND','EARTH','STORM','FROST',
  'BLAZE','MIST','SHADOW','LIGHT','DARK','BOLT',
  'RUNE','AURA','VOID','FLUX','NOVA','GALE',
  'EMBER','TIDE','SPARK','VEIL','IRON','MOON',
  'STAR','HAZE','ROCK','WAVE','SOUL','BLADE',
  'RIFT','ECHO','FLARE','GLOOM','CREST','DRACO',
  'SAGE','FORGE','LUMEN','THORN','WISP','PRISM',
  'CHAOS','ORDER','RELIC','ETHER','COMET','BLIGHT',

  // ========== ELEMENTS & NATURE ==========
  'MAGMA','LAVA','ASH','CINDER','SMOKE','EMBER',
  'GLACIER','SNOW','ICE','HAIL','FROSTBITE','CHILL',
  'GUST','CYCLONE','TORNADO','HURRICANE','WHIRLWIND','BREEZE',
  'QUAKE','TREMOR','LANDSLIDE','BOULDER','STONE','GRAVEL',
  'FLAME','INFERNO','PYRO','BURN','SCORCH','SEAR',
  'OCEAN','SEA','RIVER','STREAM','CURRENT','DEPTHS',
  'FLOWER','BLOOM','ROOT','MOSS','VINE','PETAL',

  // ========== DARKNESS & LIGHT ==========
  'SHADE','GLOOM','DIM','MURK','OBSCURE','TENEBRIS',
  'RADIANCE','SHINE','GLOW','BEACON','FLARE','GLEAM',
  'MIDNIGHT','SUNSET','SUNRISE','DUSK','DAWN','TWILIGHT',
  'UMBRA','PENUMBRA','LUX','SOL','LUNA','STELLA',
  'BLACK','WHITE','GRAY','SILVER','GOLDEN','BRONZE',

  // ========== MYSTICAL & MAGICAL ==========
  'MAGIC','SORCERY','WIZARD','WITCH','ENCHANTER','MYSTIC',
  'ARCANE','OCCULT','ESOTERIC','MYSTICAL','TRANSCENDENT','ETHEREAL',
  'GLYPH','SIGIL','TOTEM','IDOL','CHARM','TALISMAN',
  'PROPHECY','DESTINY','FATE','KARMA','DESTINY','OMEN',
  'POTION','ELIXIR','BREW','PHILTER','NECTAR','AMBROSIA',
  'CURSE','HEX','JINX','SPELL','INCANTATION','ENCHANT',

  // ========== CREATURES & MYTHOLOGY ==========
  'DRAGON','WYVERN','SERPENT','LEVIATHAN','KRAKEN','HYDRA',
  'PHOENIX','THUNDERBIRD','GRIFFIN','CHIMERA','CERBERUS','PEGASUS',
  'UNICORN','CENTAUR','MINOTAUR','SATYR','FAUN','ELF',
  'DWARF','GIANT','TROLL','OGRE','GOBLIN','ORC',
  'FAIRY','SPRITE','PIXIE','NYMPH','DRYAD','SILPH',
  'GHOST','SPECTRE','WRAITH','PHANTOM','APPARITION','BANSHEE',
  'DEMON','DEVIL','FIEND','IMP','SUCCUBUS','INCUBUS',
  'ANGEL','SERAPH','CHERUB','ARCHANGEL','GUARDIAN','VALKYRIE',

  // ========== COSMIC & SPACE ==========
  'GALAXY','NEBULA','SUPERNOVA','QUASAR','PULSAR','ASTEROID',
  'PLANET','STAR','MOON','SUN','ORBIT','ECLIPSE',
  'METEOR','COMET','ASTEROID','COSMOS','UNIVERSE','SPACE',
  'VOID','ABYSS','INFINITY','ETERNITY','TIMELESS','ZENITH',
  'HORIZON','FIRMAMENT','HEAVENS','SKY','COSMIC','CELESTIAL',

  // ========== POWER & ENERGY ==========
  'THUNDER','LIGHTNING','VOLT','AMP','WATT','ENERGY',
  'POWER','STRENGTH','MIGHT','FORCE','IMPACT','STRIKE',
  'VELOCITY','SPEED','RAPIDITY','QUICKNESS','HASTE','MOMENTUM',
  'RESONANCE','FREQUENCY','VIBRATION','PULSE','WAVE','OSCILLATION',
  'EXPLOSION','BLAST','BURST','ERUPTION','DETONATION','SHOCKWAVE',
  'CRYSTAL','GEM','JEWEL','DIAMOND','RUBY','SAPPHIRE',

  // ========== EMOTIONS & ABSTRACT ==========
  'RAGE','WRATH','FURY','ANGER','HATRED','MALICE',
  'LOVE','HOPE','PEACE','JOY','BLISS','ECSTASY',
  'FEAR','TERROR','HORROR','PANIC','DREAD','TREPIDATION',
  'SORROW','GRIEF','MOURNING','LAMENT','REGRET','REMORSE',
  'COURAGE','BRAVERY','VALOR','HEROISM','GALLANTRY','PROWESS',
  'WISDOM','KNOWLEDGE','INSIGHT','UNDERSTANDING','CLARITY','TRUTH',

  // ========== COMBAT & WEAPONS ==========
  'SWORD','BLADE','DAGGER','KATANA','SCIMITAR','RAPIER',
  'SHIELD','ARMOR','HELMET','GAUNTLET','GREAVE','CUIRASS',
  'BOW','ARROW','CROSSBOW','QUIVER','BOLT','ARROWS',
  'SPEAR','LANCE','HALBERD','PIKE','JAVELIN','TRIDENT',
  'AXE','HAMMER','MACE','FLAIL','WARHAMMER','BATTLEAXE',
  'CLAW','FANG','HORN','TAIL','WING','SPINE',

  // ========== COLORS ==========
  'RED','BLUE','GREEN','YELLOW','ORANGE','PURPLE',
  'PINK','BROWN','BLACK','WHITE','GRAY','CYAN',
  'MAGENTA','SCARLET','CRIMSON','VERMILION','RUBY','ROSE',
  'AZURE','CERULEAN','SAPPHIRE','INDIGO','VIOLET','LAVENDER',
  'EMERALD','JADE','OLIVE','LIME','FOREST','TEAL',

  // ========== TIME & SEASONS ==========
  'SECOND','MINUTE','HOUR','DAY','WEEK','MONTH',
  'YEAR','DECADE','CENTURY','MILLENNIUM','EPOCH','ERA',
  'SPRING','SUMMER','AUTUMN','WINTER','SEASON','SOLSTICE',
  'PAST','PRESENT','FUTURE','NOW','THEN','ALWAYS',
  'BEGINNING','MIDDLE','END','START','FINISH','LIMIT',

  // ========== TECHNOLOGY & MODERN ==========
  'DIGITAL','ANALOG','VIRTUAL','AUGMENTED','SYNTHETIC','ARTIFICIAL',
  'CODE','BYTE','BIT','DATA','CIPHER','ENCRYPT',
  'NEURAL','SYNAPSE','PROCESSOR','CORE','MATRIX','SYSTEM',
  'ROBOT','DRONE','AUTOMATON','ANDROID','MECH','CYBORG',
  'PIXEL','VECTOR','SHADER','RENDER','FRAME','LATENCY',

  // ========== SOUND & MUSIC ==========
  'ECHO','REVERB','RESONATE','VIBRATE','OSCILLATE','RING',
  'MELODY','HARMONY','RHYTHM','BEAT','TEMPO','CADENCE',
  'SILENCE','QUIET','HUSH','MUTE','STILL','CALM',
  'NOISE','SOUND','TONE','NOTE','CHORD','SCALE',
  'DRUM','BELL','CHIME','HORN','FLUTE','LYRE',

  // ========== DUALITY & PHILOSOPHY ==========
  'LIFE','DEATH','BIRTH','REBIRTH','CYCLE','LOOP',
  'DREAM','NIGHTMARE','REALITY','ILLUSION','MIRAGE','FANTASY',
  'SOUL','SPIRIT','MIND','BODY','HEART','CORE',
  'PEACE','WAR','CALM','CHAOS','ORDER','ANARCHY',
  'CREATE','DESTROY','BUILD','RUIN','FORM','BREAK',
  'TRUTH','LIES','HONESTY','DECEIT','REALITY','FICTION'
];

/* Word count is random each puzzle: 4, 5, or 6 */
const MIN_WORDS  = 4;
const MAX_WORDS  = 6;
const GRID_SIZE  = 10;
const MAX_TRIES  = 1500;

/* 6 distinct colors — one per possible word slot */
const WORD_COLORS = [
  '#f25f5c',  // 0 crimson
  '#43e97b',  // 1 emerald
  '#4fc3f7',  // 2 sky
  '#ffd166',  // 3 amber
  '#c77dff',  // 4 violet
  '#ff9a3c',  // 5 tangerine
];

/*
 * All 8 possible directions a word can be placed.
 * [dr, dc] — row delta, col delta per letter step.
 *
 *  H right   [0, +1]    H left    [0, -1]
 *  V down    [+1, 0]    V up      [-1, 0]
 *  Diag ↘    [+1, +1]   Diag ↗    [-1, +1]
 *  Diag ↙    [+1, -1]   Diag ↖    [-1, -1]
 *
 * Using all 8 means every word can run in any
 * straight-line direction including all diagonals.
 */
const DIRECTIONS = [
  [0,  1],   // →
  [0, -1],   // ←
  [1,  0],   // ↓
  [-1, 0],   // ↑
  [1,  1],   // ↘
  [-1, 1],   // ↗
  [1, -1],   // ↙
  [-1,-1],   // ↖
];

/* Human-readable icons for diagonal legend hints */
const DIR_ICON = {
  '1,1': '↘', '-1,1': '↗', '1,-1': '↙', '-1,-1': '↖',
  '0,1': '→', '0,-1': '←', '1,0':  '↓', '-1,0':  '↑',
};

/* ════════════════════════════════════════════════
   STATE
════════════════════════════════════════════════ */
let matrix      = [];
let placements  = [];   // [{word, row, col, dr, dc}]
let activeWords = [];
let numWords    = 5;    // actual count for this puzzle (4–6)
let foundSet    = new Set();
let puzzleIndex = 1;

/* Drag state */
let isDragging    = false;
let dragCells     = [];
let dragStartCell = null;

/* ════════════════════════════════════════════════
   UTILITY
════════════════════════════════════════════════ */
const randInt  = n => Math.floor(Math.random() * n);
const randChar = () => String.fromCharCode(65 + randInt(26));
const inBounds = (r, c) => r >= 0 && r < GRID_SIZE && c >= 0 && c < GRID_SIZE;

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randInt(i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickRandom(arr, n) {
  return shuffle([...arr]).slice(0, n);
}

/* ════════════════════════════════════════════════
   WORD PLACEMENT
   ─────────────────────────────────────────────
   For each word we:
   1. Pick a random direction from all 8.
   2. Pick a random start cell that keeps the word
      within the 10×10 boundary given that direction.
   3. Call canPlace() — walks every cell the word
      would occupy and rejects if any is non-null.
   4. On success call commit() to write letters and
      record the placement.
   5. After MAX_TRIES random probes, fall back to a
      full brute-force scan of every (cell × direction)
      combination in shuffled order.
════════════════════════════════════════════════ */
function buildMatrix() {
  matrix     = Array.from({ length: GRID_SIZE }, () => Array(GRID_SIZE).fill(null));
  placements = [];

  for (const word of activeWords) {
    if (!placeWord(word)) console.error('Could not place:', word);
  }

  for (let r = 0; r < GRID_SIZE; r++)
    for (let c = 0; c < GRID_SIZE; c++)
      if (matrix[r][c] === null) matrix[r][c] = randChar();
}

function placeWord(word) {
  const len = word.length;

  /* ── Random-probe phase ── */
  for (let attempt = 0; attempt < MAX_TRIES; attempt++) {
    const [dr, dc] = DIRECTIONS[randInt(DIRECTIONS.length)];

    /*
     * Compute valid start-cell range for this direction:
     * the word must fit entirely within [0, GRID_SIZE-1]
     * for both rows and columns.
     */
    const rMin = dr < 0 ? (len - 1) : 0;
    const rMax = dr > 0 ? (GRID_SIZE - len) : (dr < 0 ? GRID_SIZE - 1 : GRID_SIZE - 1);
    const cMin = dc < 0 ? (len - 1) : 0;
    const cMax = dc > 0 ? (GRID_SIZE - len) : (dc < 0 ? GRID_SIZE - 1 : GRID_SIZE - 1);

    if (rMin > rMax || cMin > cMax) continue; // direction impossible for this word length

    const r0 = rMin + randInt(rMax - rMin + 1);
    const c0 = cMin + randInt(cMax - cMin + 1);

    if (canPlace(word, r0, c0, dr, dc)) {
      commit(word, r0, c0, dr, dc);
      return true;
    }
  }

  /* ── Brute-force fallback ── */
  const allDirs = shuffle([...DIRECTIONS]);
  for (const [dr, dc] of allDirs) {
    const rMin = dr < 0 ? (len - 1) : 0;
    const rMax = dr > 0 ? (GRID_SIZE - len) : GRID_SIZE - 1;
    const cMin = dc < 0 ? (len - 1) : 0;
    const cMax = dc > 0 ? (GRID_SIZE - len) : GRID_SIZE - 1;
    if (rMin > rMax || cMin > cMax) continue;
    for (let r = rMin; r <= rMax; r++)
      for (let c = cMin; c <= cMax; c++)
        if (canPlace(word, r, c, dr, dc)) { commit(word, r, c, dr, dc); return true; }
  }
  return false;
}

function canPlace(word, r, c, dr, dc) {
  for (let i = 0; i < word.length; i++) {
    const nr = r + dr * i, nc = c + dc * i;
    if (!inBounds(nr, nc) || matrix[nr][nc] !== null) return false;
  }
  return true;
}

function commit(word, r, c, dr, dc) {
  for (let i = 0; i < word.length; i++)
    matrix[r + dr*i][c + dc*i] = word[i];
  placements.push({ word, row: r, col: c, dr, dc });
}

/* ════════════════════════════════════════════════
   DOM RENDER
════════════════════════════════════════════════ */
const gridEl    = document.getElementById('grid');
const statusEl  = document.getElementById('status');
const victoryEl = document.getElementById('victory');

function renderGrid() {
  gridEl.innerHTML = '';
  for (let r = 0; r < GRID_SIZE; r++) {
    for (let c = 0; c < GRID_SIZE; c++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = matrix[r][c];
      cell.dataset.row   = r;
      cell.dataset.col   = c;
      cell.dataset.coord = `r${r+1} c${c+1}`;
      cell.setAttribute('role', 'gridcell');
      cell.setAttribute('aria-label', `${matrix[r][c]}, row ${r+1}, col ${c+1}`);
      gridEl.appendChild(cell);
    }
  }
}

function renderLegend() {
  const el = document.getElementById('spellLegend');
  el.innerHTML = '';
  activeWords.forEach((word, i) => {
    const p    = placements[i];
    const icon = DIR_ICON[`${p.dr},${p.dc}`] || '';
    const isDiag = p.dr !== 0 && p.dc !== 0;

    const item = document.createElement('div');
    item.className = 'legend-item pending';
    item.id = `legend-${i}`;
    item.style.setProperty('--item-color', WORD_COLORS[i]);
    item.innerHTML =
      `<span class="legend-swatch" style="background:${WORD_COLORS[i]};box-shadow:0 0 5px ${WORD_COLORS[i]};"></span>` +
      `${word}` +
      (isDiag ? `<span class="dir-tag">${icon}</span>` : '');
    el.appendChild(item);
  });
}

function updateScoreBar() {
  document.getElementById('foundCount').textContent = `${foundSet.size} / ${numWords}`;
}

/* ════════════════════════════════════════════════
   DRAG-SELECTION ENGINE
   ─────────────────────────────────────────────
   Valid drag directions: all 8 (H, V, 4× diagonal).

   computePath():
   • Determines dr/dc from start to current cell.
   • Accepts only straight lines: |dr| must equal
     |dc| (diagonal) OR one of them must be 0 (H/V).
   • Builds the full cell path from start → end.

   evaluateSelection():
   • Compares selected cell coords against every
     unfound placement record (forward + reverse).
   • Coordinate match beats string match — prevents
     random noise letters from triggering a word.
════════════════════════════════════════════════ */

function cellFromPoint(x, y) {
  const el = document.elementFromPoint(x, y);
  return el && el.classList.contains('cell') ? el : null;
}

/**
 * Compute the straight-line path (H, V, or diagonal)
 * between startEl and endEl.
 *
 * Rules:
 *  • Pure horizontal:  dr === 0
 *  • Pure vertical:    dc === 0
 *  • True diagonal:    |dr| === |dc|  (45°)
 *  • Everything else:  return [] (invalid)
 */
function computePath(startEl, endEl) {
  const r0 = +startEl.dataset.row, c0 = +startEl.dataset.col;
  const r1 = +endEl.dataset.row,   c1 = +endEl.dataset.col;

  const dr = r1 - r0, dc = c1 - c0;
  const absDr = Math.abs(dr), absDc = Math.abs(dc);

  /* Must be horizontal, vertical, or 45° diagonal */
  const isH    = dr === 0 && absDc > 0;
  const isV    = dc === 0 && absDr > 0;
  const isDiag = absDr === absDc && absDr > 0;

  if (!isH && !isV && !isDiag) return [];

  const stepR = dr === 0 ? 0 : (dr > 0 ? 1 : -1);
  const stepC = dc === 0 ? 0 : (dc > 0 ? 1 : -1);
  const steps = Math.max(absDr, absDc);

  const path = [];
  for (let i = 0; i <= steps; i++) {
    const key = `[data-row="${r0 + stepR*i}"][data-col="${c0 + stepC*i}"]`;
    const el  = gridEl.querySelector(key);
    if (!el) return [];
    path.push(el);
  }
  return path;
}

/* Returns true if the cell already has any highlight class */
function isFound(el) {
  return el.className.includes('highlight-');
}

function applySelectingClass(cells) {
  gridEl.querySelectorAll('.cell.selecting').forEach(el => el.classList.remove('selecting'));
  cells.forEach(el => {
    if (!isFound(el)) el.classList.add('selecting');
  });
}

function clearSelecting() {
  gridEl.querySelectorAll('.cell.selecting').forEach(el => el.classList.remove('selecting'));
}

function evaluateSelection(cells) {
  if (cells.length < 2) { clearSelecting(); return; }

  const selCoords = cells.map(el => ({ r: +el.dataset.row, c: +el.dataset.col }));

  for (let wi = 0; wi < placements.length; wi++) {
    if (foundSet.has(wi)) continue;
    const p = placements[wi];
    if (selCoords.length !== p.word.length) continue;

    /* Expected cell coords for this placement */
    const expected = Array.from({ length: p.word.length }, (_, i) => ({
      r: p.row + p.dr * i,
      c: p.col + p.dc * i,
    }));

    const fwd = selCoords.every((sc, i) => sc.r === expected[i].r && sc.c === expected[i].c);
    const rev = selCoords.every((sc, i) => {
      const j = p.word.length - 1 - i;
      return sc.r === expected[j].r && sc.c === expected[j].c;
    });

    if (fwd || rev) {
      foundSet.add(wi);
      clearSelecting();
      applyFoundHighlight(wi);
      updateLegend(wi);
      updateScoreBar();
      announceFound(wi);
      if (foundSet.size === numWords) showVictory();
      return;
    }
  }

  /* No match — red shake then clear */
  cells.forEach(el => {
    if (!isFound(el)) {
      el.classList.remove('selecting');
      el.classList.add('sel-invalid');
      setTimeout(() => el.classList.remove('sel-invalid'), 320);
    }
  });
  statusEl.textContent = 'Not a spell — keep searching…';
  statusEl.classList.remove('found');
}

function applyFoundHighlight(wi, instant = false) {
  const p = placements[wi];
  for (let i = 0; i < p.word.length; i++) {
    const key = `[data-row="${p.row + p.dr*i}"][data-col="${p.col + p.dc*i}"]`;
    const el  = gridEl.querySelector(key);
    if (!el) continue;
    el.classList.remove('selecting', 'sel-invalid');
    el.classList.add(`highlight-${wi}`);
    el.style.setProperty('--anim-delay', instant ? '0ms' : `${i * 55}ms`);
  }
}

function updateLegend(wi) {
  const item = document.getElementById(`legend-${wi}`);
  if (!item) return;
  item.classList.remove('pending');
  item.classList.add('found-item');
}

function announceFound(wi) {
  const color = WORD_COLORS[wi];
  const p     = placements[wi];
  const icon  = DIR_ICON[`${p.dr},${p.dc}`] || '';
  statusEl.innerHTML =
    `<span style="color:${color};font-weight:700;">${activeWords[wi]}</span> ${icon} uncovered! ` +
    `${foundSet.size} of ${numWords} spells found`;
  statusEl.classList.add('found');
}

function showVictory() {
  victoryEl.style.display = 'block';
  victoryEl.textContent   = `✦ All ${numWords} spells uncovered — the matrix bows to you ✦`;
  statusEl.innerHTML = `✦ All ${numWords} spells found!`;
}

/* ── Mouse events ── */
gridEl.addEventListener('mousedown', e => {
  const cell = cellFromPoint(e.clientX, e.clientY);
  if (!cell) return;
  e.preventDefault();
  isDragging = true;
  dragStartCell = cell;
  dragCells = [cell];
  applySelectingClass(dragCells);
});

gridEl.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const cell = cellFromPoint(e.clientX, e.clientY);
  if (!cell) return;
  const path = computePath(dragStartCell, cell);
  if (path.length > 0) { dragCells = path; applySelectingClass(dragCells); }
});

document.addEventListener('mouseup', () => {
  if (!isDragging) return;
  isDragging = false;
  evaluateSelection(dragCells);
  dragCells = []; dragStartCell = null;
});

/* ── Touch events ── */
gridEl.addEventListener('touchstart', e => {
  const t = e.touches[0];
  const cell = cellFromPoint(t.clientX, t.clientY);
  if (!cell) return;
  e.preventDefault();
  isDragging = true;
  dragStartCell = cell;
  dragCells = [cell];
  applySelectingClass(dragCells);
}, { passive: false });

gridEl.addEventListener('touchmove', e => {
  if (!isDragging) return;
  e.preventDefault();
  const t = e.touches[0];
  const cell = cellFromPoint(t.clientX, t.clientY);
  if (!cell) return;
  const path = computePath(dragStartCell, cell);
  if (path.length > 0) { dragCells = path; applySelectingClass(dragCells); }
}, { passive: false });

gridEl.addEventListener('touchend', () => {
  if (!isDragging) return;
  isDragging = false;
  evaluateSelection(dragCells);
  dragCells = []; dragStartCell = null;
});

/* ── Reveal All ── */
function revealAll() {
  placements.forEach((_, wi) => {
    if (!foundSet.has(wi)) {
      foundSet.add(wi);
      applyFoundHighlight(wi, true);
      updateLegend(wi);
    }
  });
  updateScoreBar();
  const labels = activeWords.map((w, i) =>
    `<span style="color:${WORD_COLORS[i]};font-weight:700;">${w}</span>`).join(', ');
  statusEl.innerHTML = `Spells revealed: ${labels}`;
  statusEl.classList.add('found');
  showVictory();
}

/* ════════════════════════════════════════════════
   INIT
   ─────────────────────────────────────────────
   numWords is randomised between MIN_WORDS and
   MAX_WORDS (inclusive) every time a new puzzle
   starts. The legend, score bar, and victory
   message all read from numWords dynamically.
════════════════════════════════════════════════ */
function init(isNew = false) {
  if (isNew) puzzleIndex++;

  /* Random word count for this puzzle: 4, 5, or 6 */
  numWords    = MIN_WORDS + randInt(MAX_WORDS - MIN_WORDS + 1);
  activeWords = pickRandom(WORD_POOL, numWords);

  foundSet      = new Set();
  isDragging    = false;
  dragCells     = [];
  dragStartCell = null;

  victoryEl.style.display = 'none';
  victoryEl.textContent   = '';

  buildMatrix();
  renderGrid();
  renderLegend();
  updateScoreBar();

  document.getElementById('puzzleNum').textContent = `PUZZLE #${puzzleIndex}`;
  statusEl.textContent = `Find ${numWords} hidden spells — drag in any direction`;
  statusEl.classList.remove('found');
}

document.getElementById('btnReveal').addEventListener('click', revealAll);
document.getElementById('btnNew').addEventListener('click', () => init(true));

init();
