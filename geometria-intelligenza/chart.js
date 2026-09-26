/* ============================================================
   chart.js — il piano a due assi che regge la prima metà
   della lezione.

   Un solo componente, molti stati. Ogni slide dichiara quali
   oggetti sono visibili, come si chiamano gli assi, e se va
   disegnata una regione.

   IL PUNTO CHIAVE DEL DEMO: gli oggetti hanno UNA SOLA
   posizione e non si spostano MAI. Quello che cambia sono
   soltanto le etichette degli assi. Gli stessi quattro punti
   si leggono benissimo come "grande x vivo" e come
   "non lo incontrerai mai x ha un cuore" — il grafico non sa
   come si chiamano le direzioni, sa solo le distanze.
   ============================================================ */

(function (global) {
  'use strict';

  /* T() prende o una stringa o un oggetto {it, en} e restituisce
     il testo nella lingua corrente. Cosi' i due dizionari possono
     convivere senza duplicare tutto il resto del codice. */
  const T = v => (v && typeof v === 'object' && !Array.isArray(v))
    ? (v[global.LANG || 'it'] !== undefined ? v[global.LANG || 'it'] : v.it)
    : v;

  // ---- il catalogo degli oggetti ---------------------------
  // x, y sono in -1..1.  Una posizione sola per oggetto.
  const OBJECTS = {
    /* I QUATTRO ORIGINALI, un quadrante ciascuno.
       Leggibili sia come "grande x vivo" sia come
       "in vista x quanti ce ne sono". */
    sun:        { label: { it: 'Il Sole', en: 'The Sun' },            img: 'sun.jpg',        x:  0.78, y: -0.62 },
    whale:      { label: { it: 'Una balena', en: 'A whale' },         img: 'whale.jpg',      x:  0.70, y:  0.68 },
    hamster:    { label: { it: 'Un criceto', en: 'A hamster' },         img: 'hamster.jpg',    x: -0.70, y:  0.66 },
    sand:       { label: { it: 'Granelli di sabbia', en: 'Grains of sand' }, img: 'sand.jpg',       x: -0.78, y: -0.62 },

    // Il bonsai: la battuta. Due posizioni, perché lo sposto
    // apposta ("in realtà forse sta meglio qui").
    bonsai:     { label: { it: 'Il mio bonsai', en: 'My bonsai' },      img: 'bonsai.jpg',     x: -0.26, y:  0.34 },
    bonsai2:    { label: { it: 'Il mio bonsai', en: 'My bonsai' },      img: 'bonsai.jpg',     x: -0.24, y: -0.10 },

    /* IL SECONDO QUARTETTO. Cade negli stessi quattro quadranti,
       ma su questi "grande" e "vivo" non vogliono dire NIENTE:
       una password non ha dimensioni e non è viva. È questo che
       costringe la classe a cercare altri assi.
         password -> nascosto,  innumerevole  (come il criceto)
         coca     -> nascosto,  unico         (come la balena)
         spam     -> in vista,  innumerevole  (come la sabbia)
         google   -> in vista,  unico         (come il Sole)   */
    password:   { label: { it: 'Una password', en: 'A password' },       img: 'password.jpg',   x: -0.44, y:  0.86 },
    coca:       { label: { it: 'La formula della Coca-Cola', en: 'The Coca-Cola formula' }, img: 'coca.jpg', x: 0.18, y:  0.86 },
    spam:       { label: { it: 'Una mail di spam', en: 'A spam email' },   img: 'spam.jpg',       x: -0.52, y: -0.86 },
    google:     { label: { it: 'La home di Google', en: 'The Google homepage' },  img: 'google.jpg',     x:  0.46, y: -0.86 },

    /* GLI OGGETTI SPARSI per la slide sulla dimensionalità.
       Non contano i singoli oggetti: conta che siano tanti e
       sparpagliati, così nessuna riga li divide bene. */
    fulmine:    { label: { it: 'Un fulmine', en: 'A lightning bolt' },         img: 'fulmine.jpg',    x: -0.06, y:  0.78 },
    nuvola:     { label: { it: 'Una nuvola', en: 'A cloud' },         img: 'nuvola.jpg',     x:  0.60, y:  0.12 },
    scarpa:     { label: { it: 'Una scarpa', en: 'A shoe' },         img: 'scarpa.jpg',     x: -0.60, y: -0.02 },
    piuma:      { label: { it: 'Una piuma', en: 'A feather' },          img: 'piuma.jpg',      x:  0.78, y:  0.62 },
    fungo:      { label: { it: 'Un fungo', en: 'A mushroom' },           img: 'fungo.jpg',      x:  0.12, y:  0.30 },
    procione:   { label: { it: 'Un procione', en: 'A raccoon' },        img: 'procione.jpg',   x: -0.30, y: -0.74 },
    tamagotchi: { label: { it: 'Un Tamagotchi', en: 'A Tamagotchi' },      img: 'tamagotchi.jpg', x:  0.20, y: -0.80 },
    acaro:      { label: { it: 'Un acaro', en: 'A dust mite' },           img: 'acaro.jpg',      x: -0.62, y:  0.36 },

    // Gli animali domestici, per l'esempio del transfer learning.
    goldfish:   { label: { it: 'Pesce rosso', en: 'Goldfish' },        img: 'goldfish.jpg',   x: -0.88, y:  0.44 },
    parrot:     { label: { it: 'Pappagallo', en: 'Parrot' },         img: 'parrot.jpg',     x: -0.50, y:  0.52 },
    cat:        { label: { it: 'Gatto', en: 'Cat' },              img: 'cat.jpg',        x: -0.38, y:  0.86 },
    dog:        { label: { it: 'Cane', en: 'Dog' },               img: 'dog.jpg',        x: -0.12, y:  0.56 },

    // Disponibili se servono.
    tree:       { label: { it: 'Un albero', en: 'A tree' },          img: 'tree.jpg',       x:  0.16, y:  0.62 },
    quercia:    { label: { it: 'Una quercia', en: 'An oak' },        img: 'quercia.jpg',    x:  0.06, y: -0.84 },
    ghiacciaio: { label: { it: 'Un ghiacciaio', en: 'A glacier' },      img: 'ghiacciaio.jpg', x: -0.50, y: -0.30 }
  };

  /* Le due letture degli STESSI punti. */
  const DEFAULT_AXES = {
    x: { label: { it: 'Quanto è grande', en: 'How big is it' },
         lo:    { it: 'minuscolo',       en: 'tiny' },
         hi:    { it: 'enorme',          en: 'huge' } },
    y: { label: { it: 'Quanto è vivo',   en: 'How alive is it' },
         lo:    { it: 'non vivo',        en: 'not alive' },
         hi:    { it: 'vivissimo',       en: 'very alive' } }
  };

  // La seconda lettura: concetti diversi, stessi identici punti.
  // Funziona anche sul secondo quartetto, dove "grande" e "vivo"
  // non vogliono dire niente.
  const SECOND_AXES = {
    x: { label: { it: 'Quanto è raro?',  en: 'How rare is it?' },
         lo:    { it: 'innumerevoli',    en: 'countless' },
         hi:    { it: 'uno solo',        en: 'one of a kind' } },
    y: { label: { it: 'Si nasconde?',    en: 'Is it hidden?' },
         lo:    { it: 'sotto gli occhi', en: 'in plain sight' },
         hi:    { it: 'nascosto',        en: 'hidden' } }
  };

  const HIDDEN_AXES = {
    x: { label: '?', lo: '', hi: '' },
    y: { label: '?', lo: '', hi: '' }
  };

  // ---- geometria -------------------------------------------
  function size() {
    // Un piano quadrato che riempie il viewport, lasciando spazio
    // alla didascalia e alle etichette fuori dal piano. Nessun tetto
    // massimo: su uno schermo grande il grafico deve riempire lo
    // schermo, non restare un quadratino in mezzo al nero.
    const h = Math.min(window.innerHeight * 0.80, window.innerWidth * 0.58);
    return Math.max(320, h);
  }

  /**
   * Disegna un grafico dentro `host`.
   * opts:
   *   objects  : [{key, dim:bool, labelOverride}]  cosa mostrare
   *   axes     : 'default' | 'second' | 'hidden'
   *   quadrants: bool   — mostra le didascalie dei quattro quadranti
   *   region   : {x0,y0,x1,y1,label} | null
   *   caption  : string (html) | null
   *   compact  : bool   — piano più piccolo
   */
  function render(host, opts) {
    opts = opts || {};
    const S = (opts.compact ? size() * 0.82 : size());
    const PAD = Math.round(S * 0.075);    // spazio per le etichette esterne
    const R   = S / 2;
    const IMG = Math.round(S * 0.125);    // diametro delle foto tonde

    // Il testo dentro l'SVG scala col piano, con limiti perché resti
    // leggibile su un proiettore piccolo e non esploda su un 4K.
    const clampPx = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    const FS = {
      axis:   clampPx(S * 0.030, 13, 40),
      end:    clampPx(S * 0.024, 11, 30),
      quad:   clampPx(S * 0.025, 11, 32),
      name:   clampPx(S * 0.026, 12, 34),
      region: clampPx(S * 0.026, 12, 34)
    };

    const axes = opts.axes === 'second' ? SECOND_AXES
               : opts.axes === 'hidden' ? HIDDEN_AXES
               : DEFAULT_AXES;

    const W = S + PAD * 2, H = S + PAD * 2;
    const cx = W / 2, cy = H / 2;

    const px = v => cx + v * R * 0.88;
    const py = v => cy - v * R * 0.88;

    let svg = host.querySelector('svg');
    if (!svg) {
      host.innerHTML = '';
      svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      host.appendChild(svg);
    }
    svg.setAttribute('width', W);
    svg.setAttribute('height', H);
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

    // Quali oggetti ci sono già: quelli restano vivi nel DOM così
    // l'animazione non li ricrea.
    const existing = {};
    svg.querySelectorAll('.obj').forEach(n => { existing[n.dataset.key] = n; });

    // --- impalcatura: ridisegnata ogni volta (costa poco) ---
    svg.querySelectorAll('.scaffold').forEach(n => n.remove());
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('class', 'scaffold');
    svg.insertBefore(g, svg.firstChild);

    const el = (tag, attrs, parent) => {
      const n = document.createElementNS('http://www.w3.org/2000/svg', tag);
      for (const k in attrs) n.setAttribute(k, attrs[k]);
      (parent || g).appendChild(n);
      return n;
    };

    // griglia leggera
    el('line', { class: 'grid-line', x1: px(-1), y1: py(0.5), x2: px(1), y2: py(0.5) });
    el('line', { class: 'grid-line', x1: px(-1), y1: py(-0.5), x2: px(1), y2: py(-0.5) });
    el('line', { class: 'grid-line', x1: px(0.5), y1: py(-1), x2: px(0.5), y2: py(1) });
    el('line', { class: 'grid-line', x1: px(-0.5), y1: py(-1), x2: px(-0.5), y2: py(1) });

    // assi
    el('line', { class: 'axis-line', x1: px(-1.04), y1: cy, x2: px(1.04), y2: cy });
    el('line', { class: 'axis-line', x1: cx, y1: py(-1.04), x2: cx, y2: py(1.04) });
    el('polygon', { class: 'axis-arrow',
      points: `${px(1.04) + 10},${cy} ${px(1.04)},${cy - 5} ${px(1.04)},${cy + 5}` });
    el('polygon', { class: 'axis-arrow',
      points: `${cx},${py(1.04) - 10} ${cx - 5},${py(1.04)} ${cx + 5},${py(1.04)}` });

    // nomi degli assi
    const hid = opts.axes === 'hidden';
    const second = opts.axes === 'second';
    const axCls = second ? ' second' : '';
    const xl = el('text', {
      class: 'axis-label x' + (hid ? ' hidden-label' : axCls),
      x: px(1.04) + 16, y: cy + 5, 'font-size': FS.axis
    });
    xl.textContent = T(axes.x.label);
    const yl = el('text', {
      class: 'axis-label y' + (hid ? ' hidden-label' : axCls),
      x: cx, y: py(1.04) - 20, 'text-anchor': 'middle', 'font-size': FS.axis
    });
    yl.textContent = T(axes.y.label);

    // estremi degli assi
    if (T(axes.x.lo)) {
      const a = el('text', { class: 'axis-end', x: px(-0.99), y: cy + 20, 'text-anchor': 'start', 'font-size': FS.end });
      a.textContent = T(axes.x.lo);
      const b = el('text', { class: 'axis-end', x: px(0.99), y: cy + 20, 'text-anchor': 'end', 'font-size': FS.end });
      b.textContent = T(axes.x.hi);
    }
    if (T(axes.y.lo)) {
      const a = el('text', { class: 'axis-end', x: cx - 12, y: py(-0.99),
                             'text-anchor': 'end', 'font-size': FS.end });
      a.textContent = T(axes.y.lo);
      const b = el('text', { class: 'axis-end', x: cx - 12, y: py(0.99) + 4, 'text-anchor': 'end', 'font-size': FS.end });
      b.textContent = T(axes.y.hi);
    }

    // didascalie dei quadranti
    if (opts.quadrants) {
      const q = second ? [
        [T({ it: 'unico + nascosto',     en: 'rare + hidden' }),       px(1.0),  py(1.0),  'end'],
        [T({ it: 'comune + nascosto',    en: 'common + hidden' }),     px(-1.0), py(1.0),  'start'],
        [T({ it: 'unico + in vista',     en: 'rare + in sight' }),     px(1.0),  py(-1.0), 'end'],
        [T({ it: 'comune + in vista',    en: 'common + in sight' }),   px(-1.0), py(-1.0), 'start']
      ] : [
        [T({ it: 'grande + vivo',      en: 'big + alive' }),           px(1.0),  py(1.0),  'end'],
        [T({ it: 'piccolo + vivo',     en: 'small + alive' }),         px(-1.0), py(1.0),  'start'],
        [T({ it: 'grande + non vivo',  en: 'big + not alive' }),       px(1.0),  py(-1.0), 'end'],
        [T({ it: 'piccolo + non vivo', en: 'small + not alive' }),     px(-1.0), py(-1.0), 'start']
      ];
      q.forEach(([t, x, y, anchor]) => {
        const n = el('text', { class: 'quad-label', x, y, 'text-anchor': anchor, 'font-size': FS.quad });
        n.textContent = t;
      });
    }

    // la regione "buon animale domestico"
    if (opts.region) {
      const r = opts.region;
      const x0 = px(r.x0), x1 = px(r.x1), y0 = py(r.y1), y1 = py(r.y0);
      el('rect', { class: 'region-box', x: Math.min(x0, x1), y: Math.min(y0, y1),
                   width: Math.abs(x1 - x0), height: Math.abs(y1 - y0), rx: 10 });
      if (r.label) {
        const n = el('text', { class: 'region-label', x: Math.min(x0, x1) + 8,
                               y: Math.min(y0, y1) - 9, 'font-size': FS.region });
        n.textContent = T(r.label);
      }
    }

    // --- oggetti ---
    const want = new Set((opts.objects || []).map(o => (typeof o === 'string' ? o : o.key)));
    for (const k in existing) {
      if (!want.has(k)) existing[k].remove();
    }

    (opts.objects || []).forEach(spec => {
      const o = typeof spec === 'string' ? { key: spec } : spec;
      const def = OBJECTS[o.key];
      if (!def) { console.warn('oggetto sconosciuto:', o.key); return; }

      const tx = px(def.x), ty = py(def.y);

      let node = existing[o.key];
      if (node) {
        // Già presente: aggiorno solo posizione/opacità. Nella maggior
        // parte dei casi la posizione è identica — gli oggetti non si
        // spostano quando cambiano gli assi. È esattamente il punto.
        node.classList.remove('enter');
        node.setAttribute('transform', `translate(${tx},${ty})`);
        node.style.opacity = o.dim ? 0.3 : 1;
        node.classList.toggle('highlight', !!o.highlight);
        return;
      }

      node = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      node.setAttribute('class', 'obj enter' + (o.highlight ? ' highlight' : ''));
      // Tolgo la classe di entrata quando l'animazione è finita, così
      // un render successivo lo tratta come un nodo normale.
      node.addEventListener('animationend', () => node.classList.remove('enter'),
                            { once: true });
      node.dataset.key = o.key;
      node.setAttribute('transform', `translate(${tx},${ty})`);
      node.style.opacity = o.dim ? 0.3 : 1;
      svg.appendChild(node);

      // Tutto il visivo sta in un gruppo interno, così l'animazione CSS
      // può scalarlo senza sovrascrivere l'attributo transform di .obj.
      const inner = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      inner.setAttribute('class', 'obj-inner');
      node.appendChild(inner);

      const cid = 'clip-' + o.key + '-' + Math.random().toString(36).slice(2, 7);
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const cp = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
      cp.setAttribute('id', cid);
      const cc = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      cc.setAttribute('r', IMG / 2); cc.setAttribute('cx', 0); cc.setAttribute('cy', 0);
      cp.appendChild(cc); defs.appendChild(cp); inner.appendChild(defs);

      const im = document.createElementNS('http://www.w3.org/2000/svg', 'image');
      im.setAttribute('href', 'img/' + def.img);
      im.setAttribute('x', -IMG / 2); im.setAttribute('y', -IMG / 2);
      im.setAttribute('width', IMG); im.setAttribute('height', IMG);
      im.setAttribute('clip-path', `url(#${cid})`);
      im.setAttribute('preserveAspectRatio', 'xMidYMid slice');
      inner.appendChild(im);

      const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      ring.setAttribute('class', 'ring');
      ring.setAttribute('r', IMG / 2); inner.appendChild(ring);

      if (opts.labels !== false) {
        const tn = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        tn.setAttribute('class', 'name');
        tn.setAttribute('font-size', FS.name);
        tn.setAttribute('y', IMG / 2 + FS.name + 4);
        tn.textContent = T(o.labelOverride || def.label);
        inner.appendChild(tn);
      }
    });

    // didascalia
    let cap = host.querySelector('.chart-caption');
    if (opts.caption) {
      if (!cap) {
        cap = document.createElement('div');
        cap.className = 'chart-caption';
        host.appendChild(cap);
      }
      cap.innerHTML = T(opts.caption);
    } else if (cap) {
      cap.remove();
    }

    return svg;
  }

  /* ============================================================
     IL GRAFICO 3D

     Serve a una cosa sola: far vedere che con tanti oggetti due
     assi non bastano più, e che aggiungendo una terza direzione
     le cose tornano a separarsi.

     È una proiezione isometrica fatta a mano, non una libreria:
     ogni oggetto ha (x, y, z) e viene schiacciato in 2D. Il
     parametro `t` va da 0 (piatto, identico al grafico 2D) a 1
     (ruotato in 3D), così l'animazione è una sola interpolazione.
     ============================================================ */

  // Quali oggetti salgono sul secondo piano quando si apre la
  // terza dimensione. Gli altri restano a z = -1.
  const Z_ALTO = new Set(['fulmine', 'piuma', 'fungo', 'nuvola',
                          'whale', 'coca', 'password', 'hamster']);

  function render3d(host, opts) {
    opts = opts || {};
    const t = Math.max(0, Math.min(1, opts.t === undefined ? 1 : opts.t));
    const S = size();
    const PAD = Math.round(S * 0.075);   // identico al grafico 2D
    const IMG = Math.round(S * 0.125);   // identico al grafico 2D
    const W = S + PAD * 2, H = S + PAD * 2;
    const cx = W / 2, cy = H / 2;

    const clampPx = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    const FS = { axis: clampPx(S * 0.028, 12, 34), name: clampPx(S * 0.022, 10, 28) };

    /* Proiezione. A t=0 è esattamente il piano 2D di prima:
       x a destra, y in su, z ignorata. A t=1 gli assi x e z si
       aprono a ventaglio e y resta verticale. */
    /* A t = 0 questa proiezione è ESATTAMENTE il grafico 2D: stesso
       R, stesso fattore 0.88, e z che non sposta niente perché sta
       ancora perpendicolare allo schermo (lo vedi "di punta").

       Man mano che t cresce, l'asse z ruota fuori dallo schermo: i
       due piani si separano e gli oggetti si staccano. Nient'altro
       cambia — per questo la transizione dalla slide precedente è
       continua. */
    const R = S / 2 * 0.88;
    function project(x, y, z) {
      /* Gli assi X e Y NON si muovono: restano inchiodati allo
         schermo esattamente come nella slide precedente.
         L'unica cosa che cambia e' z, che a t=0 e' perpendicolare
         allo schermo (quindi invisibile, un punto nell'origine) e
         ruotando esce in diagonale. */
      const zx = t * 0.34;
      const zy = t * 0.34;
      return {
        px: cx + (x + z * zx) * R,
        py: cy - (y + z * zy) * R,
        depth: z * t
      };
    }

    let svg = host.querySelector('svg');
    if (!svg) {
      host.innerHTML = '';
      svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      host.appendChild(svg);
    }
    svg.setAttribute('width', W);
    svg.setAttribute('height', H);
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.innerHTML = '';

    const el = (tag, attrs, parent) => {
      const n = document.createElementNS('http://www.w3.org/2000/svg', tag);
      for (const k in attrs) n.setAttribute(k, attrs[k]);
      (parent || svg).appendChild(n);
      return n;
    };

    /* GLI ASSI. Esattamente lo stesso stile del grafico 2D: stessa
       classe, stesso colore, stesse frecce. L'unica differenza è che
       ce n'è un terzo — quello che a t=0 sta perpendicolare allo
       schermo, quindi lo vedi come un punto nell'origine, e che
       mentre la scena ruota si allunga in una linea vera. */
    function asse(x1, y1, z1, x2, y2, z2, opacity) {
      const a = project(x1, y1, z1), b = project(x2, y2, z2);
      el('line', { class: 'axis-line', x1: a.px, y1: a.py, x2: b.px, y2: b.py,
                   opacity: opacity === undefined ? 1 : opacity });
      return b;
    }

    // Le due griglie leggere restano solo sul piano di partenza,
    // così il grafico non diventa un reticolo illeggibile.
    [-0.5, 0.5].forEach(v => {
      const a = project(-1, v, 0), b = project(1, v, 0);
      el('line', { class: 'grid-line', x1: a.px, y1: a.py, x2: b.px, y2: b.py,
                   opacity: 1 - t * 0.55 });
      const c = project(v, -1, 0), d = project(v, 1, 0);
      el('line', { class: 'grid-line', x1: c.px, y1: c.py, x2: d.px, y2: d.py,
                   opacity: 1 - t * 0.55 });
    });

    // asse X e asse Y: fermi, sul piano z = 0
    const bx = asse(-1.04, 0, 0,  1.04, 0, 0);
    const by = asse(0, -1.04, 0,  0, 1.04, 0);
    el('polygon', { class: 'axis-arrow',
      points: `${bx.px + 10},${bx.py} ${bx.px},${bx.py - 5} ${bx.px},${bx.py + 5}` });
    el('polygon', { class: 'axis-arrow',
      points: `${by.px},${by.py - 10} ${by.px - 5},${by.py} ${by.px + 5},${by.py}` });

    /* IL TERZO ASSE. A t=0 i due estremi coincidono nell'origine:
       è un punto. Man mano che t cresce diventa una linea. */
    const bz = asse(0, 0, -1.04, 0, 0, 1.04);
    if (t > 0.03) {
      const az = project(0, 0, -1.04);
      const dx = bz.px - az.px, dy = bz.py - az.py;
      const len = Math.hypot(dx, dy) || 1;
      const ux = dx / len, uy = dy / len;
      el('polygon', { class: 'axis-arrow',
        points: `${bz.px + ux * 10},${bz.py + uy * 10} ` +
                `${bz.px - uy * 5},${bz.py + ux * 5} ` +
                `${bz.px + uy * 5},${bz.py - ux * 5}` });
    }

    // Gli oggetti, disegnati dal fondo verso il davanti.
    const list = (opts.objects || []).map(k => (typeof k === 'string' ? { key: k } : k));
    const punti = list.map(o => {
      const def = OBJECTS[o.key];
      if (!def) return null;
      const z = Z_ALTO.has(o.key) ? 1 : -1;   // meta' davanti, meta' dietro
      return { o, def, z, p: project(def.x, def.y, z) };
    }).filter(Boolean);
    punti.sort((a, b) => a.z - b.z);   // prima i lontani, poi i vicini

    punti.forEach(({ o, def, z, p }) => {
      const g = el('g', { transform: `translate(${p.px},${p.py})` });
      // Chi sta sul piano alto è leggermente più grande: aiuta a
      // leggere la profondità.
      const scale = 1 + (z > 0 ? 0.16 : -0.16) * t;
      const d = IMG * scale;

      const cid = 'c3-' + o.key + '-' + Math.random().toString(36).slice(2, 7);
      const defs = el('defs', {}, g);
      const cp = el('clipPath', { id: cid }, defs);
      el('circle', { r: d / 2, cx: 0, cy: 0 }, cp);
      el('image', { href: 'img/' + def.img, x: -d / 2, y: -d / 2,
                    width: d, height: d, 'clip-path': `url(#${cid})`,
                    preserveAspectRatio: 'xMidYMid slice' }, g);
      el('circle', { r: d / 2, fill: 'none',
                     stroke: 'rgba(255,255,255,.22)', 'stroke-width': 2 }, g);
      if (opts.labels === true) {
        const tn = el('text', { class: 'name', y: d / 2 + FS.name + 3,
                                'font-size': FS.name, 'text-anchor': 'middle',
                                fill: 'var(--ink)', 'font-weight': 600,
                                'font-family': 'var(--font)' }, g);
        tn.textContent = T(def.label);
      }
    });

    let cap = host.querySelector('.chart-caption');
    if (opts.caption) {
      if (!cap) { cap = document.createElement('div'); cap.className = 'chart-caption'; host.appendChild(cap); }
      cap.innerHTML = T(opts.caption);
    } else if (cap) { cap.remove(); }

    return svg;
  }

  /* Anima il passaggio da piatto a 3D. La slide chiama questa,
     non render3d, così l'apertura si vede davvero. */
  function animate3d(host, opts, ms) {
    ms = ms || 1400;
    const t0 = performance.now();
    // easing morbido: parte piano, accelera, si ferma dolcemente
    const ease = x => x < 0.5 ? 4 * x * x * x
                              : 1 - Math.pow(-2 * x + 2, 3) / 2;
    function step(now) {
      const k = Math.min(1, (now - t0) / ms);
      render3d(host, Object.assign({}, opts, { t: ease(k) }));
      if (k < 1) host._raf3d = requestAnimationFrame(step);
    }
    if (host._raf3d) cancelAnimationFrame(host._raf3d);
    host._raf3d = requestAnimationFrame(step);
  }

  /* ============================================================
     IL GRAFICO DELLE PAROLE (word2vec, versione geometrica)

     Non è "indovina la parola": è "le frasi che si assomigliano
     devono finire vicine". Due frasi che condividono quasi tutte
     le parole tirano insieme le parole che restano — e così
     `gatto` e `cane` si avvicinano senza che nessuno abbia detto
     alla macchina che sono due animali.

     `step` decide cosa si vede:
       0 = le parole sparse a caso
       1 = compaiono le frasi che le legano
       2 = le parole si sono avvicinate, si formano i gruppi
     ============================================================ */

  const PAROLE = {
    // Solo le quattro parole che contano: quelle che cambiano fra
    // due frasi quasi identiche. Divano e tavolo restano nelle
    // frasi ma non come punti sul grafico.
    /* `a` = dove arrivano. Le due coppie finiscono in angoli
       OPPOSTI del grafico: dentro la coppia restano vicinissime,
       fra una coppia e l'altra c'e' tutto lo spazio possibile.
       E' questo contrasto che fa vedere che si sono formati
       due gruppi, e non un mucchio solo. */
    gatto:     { da: [-0.56,  0.44], a: [-0.62,  0.72], en: 'cat' },
    cane:      { da: [ 0.54, -0.42], a: [-0.62,  0.40], en: 'dog' },
    tazza:     { da: [-0.56, -0.44], a: [ 0.62, -0.40], en: 'cup' },
    bicchiere: { da: [ 0.54,  0.46], a: [ 0.62, -0.72], en: 'glass' }
  };

  /* Le frasi vere, disegnate DENTRO il grafico.
     Il testo comune prende il colore della coppia, la parola che
     cambia resta bianca: si vede a colpo d'occhio che le due frasi
     differiscono per una parola sola. */
  const FRASI = [
    { ancora: 'gatto', colore: '#fbbf24', coppia: 0,
      parti:   [['Il ', 0], ['gatto', 1], [' sta sul divano', 0]],
      partiEn: [['The ', 0], ['cat', 1], [' is on the sofa', 0]] },
    { ancora: 'cane', colore: '#fbbf24', coppia: 0,
      parti:   [['Il ', 0], ['cane', 1], [' sta sul divano', 0]],
      partiEn: [['The ', 0], ['dog', 1], [' is on the sofa', 0]] },
    { ancora: 'tazza', colore: '#a78bfa', coppia: 1,
      parti:   [['La ', 0], ['tazza', 1], [' è sul tavolo', 0]],
      partiEn: [['The ', 0], ['cup', 1], [' is on the table', 0]] },
    { ancora: 'bicchiere', colore: '#a78bfa', coppia: 1,
      parti:   [['Il ', 0], ['bicchiere', 1], [' è sul tavolo', 0]],
      partiEn: [['The ', 0], ['glass', 1], [' is on the table', 0]] }
  ];

  // Le due coppie da avvicinare.
  const COPPIE = [
    { a: 'gatto', b: 'cane',      colore: '#fbbf24' },
    { a: 'tazza', b: 'bicchiere', colore: '#a78bfa' }
  ];

  function renderWords(host, opts) {
    opts = opts || {};
    /* `step` e' continuo:
         0    parole sparse, niente frasi
         1    frasi visibili + frecce che indicano la spinta
         1->2 le parole si avvicinano (animazione)
         2    arrivate, frasi sbiadite                        */
    const step = opts.step || 0;
    const k = Math.max(0, Math.min(1, step - 1));   // avanzamento 1->2
    const S = size();
    const PAD = Math.round(S * 0.08);
    const W = S + PAD * 2, H = S + PAD * 2;
    const cx = W / 2, cy = H / 2, R = S / 2 * 0.86;

    const clampPx = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
    const FSW = clampPx(S * 0.042, 15, 42);

    const px = v => cx + v * R;
    const py = v => cy - v * R;
    const pos = name => {
      const w = PAROLE[name];
      return { x: px(w.da[0] + (w.a[0] - w.da[0]) * k),
               y: py(w.da[1] + (w.a[1] - w.da[1]) * k) };
    };

    let svg = host.querySelector('svg');
    if (!svg) {
      host.innerHTML = '';
      svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      host.appendChild(svg);
    }
    svg.setAttribute('width', W); svg.setAttribute('height', H);
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.innerHTML = '';

    const el = (tag, attrs, parent) => {
      const n = document.createElementNS('http://www.w3.org/2000/svg', tag);
      for (const a in attrs) n.setAttribute(a, attrs[a]);
      (parent || svg).appendChild(n);
      return n;
    };

    el('rect', { x: PAD * 0.4, y: PAD * 0.4, width: W - PAD * 0.8, height: H - PAD * 0.8,
                 rx: 14, fill: 'none', stroke: 'var(--rule)', 'stroke-width': 1.5 });

    /* LE FRECCE. Partono da ciascuna parola e puntano verso l'altra
       della coppia: sono la regola resa visibile. Si accorciano man
       mano che le parole si avvicinano davvero. */
    if (step >= 1) {
      const defs = el('defs', {});
      COPPIE.forEach((c, i) => {
        const m = el('marker', { id: 'frec' + i, viewBox: '0 0 10 10',
                                 refX: 9, refY: 5, markerWidth: 5, markerHeight: 5,
                                 orient: 'auto-start-reverse' }, defs);
        el('path', { d: 'M0,0 L10,5 L0,10 z', fill: c.colore }, m);
      });
      COPPIE.forEach((c, i) => {
        const pa = pos(c.a), pb = pos(c.b);
        const dx = pb.x - pa.x, dy = pb.y - pa.y;
        const len = Math.hypot(dx, dy) || 1;
        const ux = dx / len, uy = dy / len;
        // lascio spazio attorno alle parole
        const gap = FSW * 2.6;
        const x1 = pa.x + ux * gap, y1 = pa.y + uy * gap;
        const x2 = pb.x - ux * gap, y2 = pb.y - uy * gap;
        if (len > gap * 2.2) {
          el('line', { x1, y1, x2, y2, stroke: c.colore, 'stroke-width': 3,
                       'stroke-linecap': 'round', opacity: 0.9 * (1 - k * 0.75),
                       'marker-start': `url(#frec${i})`,
                       'marker-end': `url(#frec${i})` });
        }
      });
    }

    /* LE FRASI, scritte dentro il grafico, sotto la loro parola. */
    if (step >= 1) {
      const FSS = FSW * 0.60;
      FRASI.forEach(f => {
        const p = pos(f.ancora);
        const g = el('g', { transform: `translate(${p.x},${p.y + FSW * 1.5})`,
                            opacity: 1 - k * 0.72 });
        const parti = (global.LANG === 'en' && f.partiEn) ? f.partiEn : f.parti;
        const testo = parti.map(x => x[0]).join('');
        const w = testo.length * FSS * 0.49;
        el('rect', { x: -w / 2 - FSS * 0.5, y: -FSS * 0.95,
                     width: w + FSS, height: FSS * 1.9, rx: FSS * 0.5,
                     fill: 'rgba(10,12,18,.92)',
                     stroke: f.colore, 'stroke-width': 1.5 }, g);
        const t0 = el('text', { 'text-anchor': 'middle', y: FSS * 0.34,
                                'font-size': FSS, 'font-weight': 600,
                                'font-family': 'var(--font)' }, g);
        parti.forEach(([txt, diversa]) => {
          const ts = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
          ts.setAttribute('fill', diversa ? '#ffffff' : f.colore);
          if (diversa) ts.setAttribute('font-weight', '800');
          ts.textContent = txt;
          t0.appendChild(ts);
        });
      });
    }

    // LE PAROLE.
    Object.keys(PAROLE).forEach(name => {
      const p = pos(name);
      const coppia = COPPIE.find(c => c.a === name || c.b === name);
      const evid = k > 0.55 && coppia;
      const g = el('g', { transform: `translate(${p.x},${p.y})` });
      const mostrato = (global.LANG === 'en' && PAROLE[name].en)
                       ? PAROLE[name].en : name;
      const w = FSW * (mostrato.length * 0.56) + FSW * 0.9;
      el('rect', { x: -w / 2, y: -FSW * 0.78, width: w, height: FSW * 1.56,
                   rx: FSW * 0.5,
                   fill: evid
                     ? (coppia.colore === '#fbbf24'
                         ? 'rgba(251,191,36,.14)' : 'rgba(167,139,250,.14)')
                     : 'var(--bg-soft)',
                   stroke: evid ? coppia.colore : 'var(--rule)',
                   'stroke-width': evid ? 2.5 : 1.5 }, g);
      const t = el('text', { y: FSW * 0.36, 'text-anchor': 'middle',
                             'font-size': FSW, 'font-weight': 600,
                             'font-family': 'var(--font)',
                             fill: 'var(--ink)' }, g);
      t.textContent = (global.LANG === 'en' && PAROLE[name].en)
                       ? PAROLE[name].en : name;
    });

    let cap = host.querySelector('.chart-caption');
    if (opts.caption) {
      if (!cap) { cap = document.createElement('div'); cap.className = 'chart-caption'; host.appendChild(cap); }
      cap.innerHTML = T(opts.caption);
    } else if (cap) { cap.remove(); }

    return svg;
  }

  /* Anima l'avvicinamento da step 1 a step 2. */
  function animateWords(host, opts, ms) {
    ms = ms || 1500;
    const t0 = performance.now();
    const ease = x => x < 0.5 ? 4 * x * x * x
                              : 1 - Math.pow(-2 * x + 2, 3) / 2;
    function frame(now) {
      const p = Math.min(1, (now - t0) / ms);
      renderWords(host, Object.assign({}, opts, { step: 1 + ease(p) }));
      if (p < 1) host._rafW = requestAnimationFrame(frame);
    }
    if (host._rafW) cancelAnimationFrame(host._rafW);
    host._rafW = requestAnimationFrame(frame);
  }

  global.Chart = { render, render3d, animate3d, renderWords, animateWords,
                   OBJECTS, FRASI };
})(window);
