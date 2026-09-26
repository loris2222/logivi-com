/* ============================================================
   slides.js — la lezione.

   Ogni voce:
     html       : markup della slide (stringa o funzione)
     cls        : classe extra ('cover', 'top', 'center')
     chart      : opzioni del grafico -> disegna il piano
     chartGroup : slide con lo stesso gruppo condividono l'SVG
                  (serve perché gli oggetti non vengano ricreati)
     notes      : note del relatore (tasto `n`)

   Le slide marcate [OPZIONALE] nelle note sono candidate al
   taglio: basta cancellare la voce, il resto non si rompe.

   Le citazioni [n] rimandano alla slide delle fonti in fondo.
   ============================================================ */

// Scorciatoia per un marcatore di citazione.
const R = n => `<a class="ref" href="#fonti">[${n}]</a>`;

const SLIDES = [/* ---------------------------------------------------------- 1 */
{
  cls: 'cover',
  html: { it: `
    <div class="kicker">Come funziona davvero l'intelligenza artificiale</div>
    <h1>La geometria<br>dell'intelligenza</h1>
    <div class="byline">Loris Giulivi</div>
  `,
          en: `
    <div class="kicker">How artificial intelligence really works</div>
    <h1>The geometry<br>of intelligence</h1>
    <div class="byline">Loris Giulivi</div>
  ` }
},

/* ---------------------------------------------------------- 2 */
{
  html: { it: `
    <div class="cols left-narrow">
      <div>
        <h2>Ciao, sono Loris</h2>
        <p>Lavoro in <strong>Rivia</strong>: facciamo software per
           la <strong>ricerca clinica</strong>, cioè per gli studi sui nuovi
           farmaci.</p>
        <p>L'AI aiuta i nostri clienti ad analizzare grandi quantità di dati
           disordinati.</p>
      </div>
      <div class="center" style="display:grid;place-items:center">
        <img src="img/loris.jpg" alt="Loris Giulivi" class="me-photo"
             onerror="this.outerHTML='&lt;div class=\\'me-photo placeholder\\'&gt;metti qui&lt;br&gt;img/loris.jpg&lt;/div&gt;'">
      </div>
    </div>
  `,
          en: `
    <div class="cols left-narrow">
      <div>
        <h2>Hi, I'm Loris</h2>
        <p>I work at <strong>Rivia</strong>: we make software for
           <strong>clinical research</strong>, meaning the studies that test new
           drugs.</p>
        <p>AI helps our customers analyse huge piles of messy data.</p>
      </div>
      <div class="center" style="display:grid;place-items:center">
        <img src="img/loris.jpg" alt="Loris Giulivi" class="me-photo"
             onerror="this.outerHTML='&lt;div class=\\'me-photo placeholder\\'&gt;put here&lt;br&gt;img/loris.jpg&lt;/div&gt;'">
      </div>
    </div>
  ` }
},

/* ---------------------------------------------------------- 3 */
{
  cls: 'center',
  html: { it: `
    <div class="big-statement">
      Quando una macchina sembra capire qualcosa,<br>
      <em>che cosa c'è davvero lì dentro?</em>
    </div>
  `,
          en: `
    <div class="big-statement">
      When a machine seems to understand something,<br>
      <em>what is actually in there?</em>
    </div>
  ` }
},

/* ------------------------------------------------ 4: piano vuoto */
{
  cls: 'top',
  chartGroup: 'A',
  chart: { objects: [], quadrants: true,
           caption: { it: 'Due domande che puoi fare su quasi qualsiasi cosa.', en: 'Two questions you can ask about almost anything.' } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ------------------------------------------------ 5: mostra Sole */
{
  cls: 'top',
  chartGroup: 'A',
  chart: { objects: [], quadrants: true },
  html: { it: `
    <div class="chart-wrap"><div class="chart"></div></div>
    <div class="reveal-card">
      <img src="img/sun.jpg" alt="Il Sole">
      <div class="label">Il Sole</div>
      <div class="hint">dove lo mettiamo?</div>
    </div>
  `,
          en: `
    <div class="chart-wrap"><div class="chart"></div></div>
    <div class="reveal-card">
      <img src="img/sun.jpg" alt="The Sun">
      <div class="label">The Sun</div>
      <div class="hint">where do we put it?</div>
    </div>
  ` }
},

/* ------------------------------------------------ 6: posiziona Sole */
{
  cls: 'top',
  chartGroup: 'A',
  chart: { objects: ['sun'], quadrants: true },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ------------------------------------------------ 7: mostra balena */
{
  cls: 'top',
  chartGroup: 'A',
  chart: { objects: ['sun'], quadrants: true },
  html: { it: `
    <div class="chart-wrap"><div class="chart"></div></div>
    <div class="reveal-card">
      <img src="img/whale.jpg" alt="Una balena">
      <div class="label">Una balena</div>
      <div class="hint">e questa?</div>
    </div>
  `,
          en: `
    <div class="chart-wrap"><div class="chart"></div></div>
    <div class="reveal-card">
      <img src="img/whale.jpg" alt="A whale">
      <div class="label">A whale</div>
      <div class="hint">and this one?</div>
    </div>
  ` }
},

/* ------------------------------------------------ 8 */
{
  cls: 'top',
  chartGroup: 'A',
  chart: { objects: ['sun', 'whale'], quadrants: true },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ------------------------------------------------ 9: mostra criceto */
{
  cls: 'top',
  chartGroup: 'A',
  chart: { objects: ['sun', 'whale'], quadrants: true },
  html: { it: `
    <div class="chart-wrap"><div class="chart"></div></div>
    <div class="reveal-card">
      <img src="img/hamster.jpg" alt="Un criceto">
      <div class="label">Un criceto</div>
      <div class="hint">?</div>
    </div>
  `,
          en: `
    <div class="chart-wrap"><div class="chart"></div></div>
    <div class="reveal-card">
      <img src="img/hamster.jpg" alt="A hamster">
      <div class="label">A hamster</div>
      <div class="hint">?</div>
    </div>
  ` }
},

/* ----------------------------------------------- 10 */
{
  cls: 'top',
  chartGroup: 'A',
  chart: { objects: ['sun', 'whale', 'hamster'], quadrants: true },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ----------------------------------------------- 11: mostra sabbia */
{
  cls: 'top',
  chartGroup: 'A',
  chart: { objects: ['sun', 'whale', 'hamster'], quadrants: true },
  html: { it: `
    <div class="chart-wrap"><div class="chart"></div></div>
    <div class="reveal-card">
      <img src="img/sand.jpg" alt="Granelli di sabbia">
      <div class="label">Granelli di sabbia</div>
      <div class="hint">?</div>
    </div>
  `,
          en: `
    <div class="chart-wrap"><div class="chart"></div></div>
    <div class="reveal-card">
      <img src="img/sand.jpg" alt="Grains of sand">
      <div class="label">Grains of sand</div>
      <div class="hint">?</div>
    </div>
  ` }
},

/* ------------------------------------------------ 12 */
{
  cls: 'top',
  chartGroup: 'A',
  chart: { objects: ['sun', 'whale', 'hamster', 'sand'], quadrants: true,
           caption: { it: "Quattro oggetti. Quattro angoli. Siamo tutti d'accordo.",
                      en: "Four objects. Four corners. We all agree." } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ------------------------------------------- 13: bonsai, battuta */
{
  cls: 'top',
  chartGroup: 'A',
  chart: { objects: ['sun', 'whale', 'hamster', 'sand'], quadrants: true },
  html: { it: `
    <div class="chart-wrap"><div class="chart"></div></div>
    <div class="reveal-card">
      <img src="img/bonsai.jpg" alt="Il mio bonsai"
           onerror="this.src='img/tree.jpg'">
      <div class="label">Il mio bonsai</div>
      <div class="hint">questo non ve lo chiedo. So dove va.</div>
    </div>
  `,
          en: `
    <div class="chart-wrap"><div class="chart"></div></div>
    <div class="reveal-card">
      <img src="img/bonsai.jpg" alt="My bonsai"
           onerror="this.src='img/tree.jpg'">
      <div class="label">My bonsai</div>
      <div class="hint">I'm not asking you about this one. I know where it goes.</div>
    </div>
  ` }
},

/* ----------------------------------------- 14: bonsai in alto */
{
  cls: 'top',
  chartGroup: 'A',
  chart: { objects: ['sun', 'whale', 'hamster', 'sand', 'bonsai'], quadrants: true,
           caption: { it: 'Piccolo, e... vivo. Sì. Vivo.', en: 'Small, and... alive. Yes. Alive.' } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* -------------------------------------- 15: bonsai declassato */
{
  cls: 'top',
  chartGroup: 'A',
  chart: { objects: ['sun', 'whale', 'hamster', 'sand', 'bonsai2'], quadrants: true,
           caption: { it: 'Ripensandoci. Forse qui.', en: 'On second thoughts. Maybe here.' } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* -------------------------------------- 16: togli le etichette */
{
  cls: 'top',
  chartGroup: 'A',
  chart: { objects: ['sun', 'whale', 'hamster', 'sand'], axes: 'hidden',
           caption: { it: 'Stessi quattro oggetti. Ho tolto i nomi degli assi.', en: 'Same four objects. I removed the axis names.' } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ---------------- 17: il secondo quartetto (assi nascosti) ---------------- */
{
  cls: 'top',
  chartGroup: 'A',
  chart: { objects: ['sun', 'whale', 'hamster', 'sand',
                     { key: 'password', highlight: true },
                     { key: 'coca', highlight: true },
                     { key: 'spam', highlight: true },
                     { key: 'google', highlight: true }],
           axes: 'hidden',
           caption: { it: 'Quattro cose nuove. Uno per quadrante, come prima.', en: 'Four new things. One per quadrant, just like before.' } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ---------------- 18: i nuovi assi, finalmente ---------------- */
{
  cls: 'top',
  chartGroup: 'A',
  chart: { objects: ['sun', 'whale', 'hamster', 'sand',
                     'password', 'coca', 'spam', 'google'],
           axes: 'second',
           caption: { it: 'Non ho spostato niente. Ho solo cambiato i nomi.', en: 'I moved nothing. I only changed the names.' } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ------------------------------ 20: la lezione onesta */
{
  cls: 'center',
  html: { it: `
    <div class="kicker">Più dati, più certezze</div>
    <div class="big-statement" style="font-size:clamp(1.25em,3.2vmin,2.4em)">
      Con <em>quattro</em> oggetti trovare una seconda lettura
      è facile. Quasi inevitabile.
    </div>
    <p style="margin-top:1.4em;max-width:38em">Un modello vero non ha quattro
       punti. Ne ha <strong>miliardi</strong>.</p>
  `,
          en: `
    <div class="kicker">More data, more certainty</div>
    <div class="big-statement" style="font-size:clamp(1.25em,3.2vmin,2.4em)">
      With <em>four</em> objects, finding a second reading
      is easy. Almost inevitable.
    </div>
    <p style="margin-top:1.4em;max-width:38em">A real model does not have four
       points. It has <strong>billions</strong>.</p>
  ` }
},

/* ---------------- 19: con tanti oggetti due assi non bastano ---------------- */
{
  cls: 'top',
  chartGroup: 'D',
  chart: { objects: ['sun', 'whale', 'hamster', 'sand',
                     'password', 'coca', 'spam', 'google',
                     'fulmine', 'nuvola', 'scarpa', 'piuma',
                     'fungo', 'procione', 'tamagotchi', 'acaro'],
           axes: 'hidden', labels: false,
           caption: { it: 'E adesso? Provate a trovare due assi che li separino.', en: 'And now? Try to find two axes that separate them.' } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ---------------- 20: si apre la terza dimensione ---------------- */
{
  cls: 'top',
  chartGroup: 'E',
  chart: { mode: '3d', zLabel: { it: 'un terzo asse', en: 'a third axis' },
           objects: ['sun', 'whale', 'hamster', 'sand',
                     'password', 'coca', 'spam', 'google',
                     'fulmine', 'nuvola', 'scarpa', 'piuma',
                     'fungo', 'procione', 'tamagotchi', 'acaro'],
           caption: { it: 'Con un asse in più, tornano a separarsi.', en: 'With one more axis, they separate again.' } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ---------------- 21: e quanti assi servono davvero ---------------- */
{
  cls: 'center',
  html: { it: `
    <div class="kicker">E allora quanti ne servono?</div>
    <div class="big-statement" style="font-size:clamp(1.3em,3.4vmin,2.6em)">
      Noi ne abbiamo disegnati <em>tre</em>.<br>
      Un modello vero ne usa <em>migliaia</em>.
    </div>
    <p style="margin-top:1.4em;max-width:36em">Ogni cosa diventa una lista di
       migliaia di numeri: un punto in uno spazio che non possiamo disegnare.
       Ma la matematica funziona esattamente come sul nostro foglio:
       <strong>ci sono posizioni, distanze e direzioni</strong>.</p>
  `,
          en: `
    <div class="kicker">So how many do we need?</div>
    <div class="big-statement" style="font-size:clamp(1.3em,3.4vmin,2.6em)">
      We drew <em>three</em> of them.<br>
      A real model uses <em>thousands</em>.
    </div>
    <p style="margin-top:1.4em;max-width:36em">Everything becomes a list of
       thousands of numbers: a point in a space we cannot draw.
       But the maths works exactly like it did on our sheet of paper:
       <strong>there are positions, distances and directions</strong>.</p>
  ` }
},

/* ---------------------------------------------- 21: il titolo */
{
  cls: 'center',
  html: { it: `
    <div class="kicker">Ed ecco il punto di tutta la lezione</div>
    <div class="big-statement">
      Addestrare un modello AI<br>è in gran parte
      <em>trovare gli assi</em>.
    </div>
    <p style="margin-top:1.5em;max-width:36em">Si chiama
       <strong>representation learning</strong>, o apprendimento delle
       rappresentazioni.</p>
    <p class="footnote">Ed è quello che abbiamo appena fatto.</p>
  `,
          en: `
    <div class="kicker">And here is the point of the whole lecture</div>
    <div class="big-statement">
      Training an AI model<br>is mostly about
      <em>finding the axes</em>.
    </div>
    <p style="margin-top:1.5em;max-width:36em">It's called
       <strong>representation learning</strong>, or learning
       representations.</p>
    <p class="footnote">And it's what we just did.</p>
  ` }
},

/* ---------------------------------------------- 22: il compito */
{
  cls: 'center',
  html: { it: `
    <div class="kicker">Ma allora</div>
    <div class="big-statement">
      Se nessuno ci dice quali sono gli assi,<br>
      <em>come si fa a trovarli?</em>
    </div>
    <p style="margin-top:1.4em">Come a scuola, si fanno esercizi:
       <strong>tanti esercizi, su tanti dati</strong>.<br>
       Il compito da dare al modello deve essere <strong>difficile da
       risolvere, ma facile da costruire</strong>.</p>
  `,
          en: `
    <div class="kicker">But then</div>
    <div class="big-statement">
      If nobody tells us what the axes are,<br>
      <em>how do you find them?</em>
    </div>
    <p style="margin-top:1.4em">Same as at school: you do exercises.
       <strong>Lots of exercises, on lots of data</strong>.<br>
       The task you give the model has to be <strong>hard to solve, but easy
       to build</strong>.</p>
  ` }
},

/* ---------------- 24: le parole, sparse ---------------- */
{
  cls: 'top',
  chartGroup: 'W',
  chart: { mode: 'parole', step: 0,
           caption: { it: 'Delle parole, buttate a caso in uno spazio.', en: 'Some words, scattered at random in a space.' } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ---------------- 25: arrivano le frasi ---------------- */
{
  cls: 'top',
  chartGroup: 'W',
  chart: { mode: 'parole', step: 1,
           caption: { it: 'Due frasi quasi identiche devono finire vicine.<br>'
                        + 'Cambia una parola sola: <strong>quella parola si deve avvicinare</strong>.',
                      en: 'Two nearly identical sentences must end up close.<br>'
                        + 'Only one word changes: <strong>that word has to move closer</strong>.' } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ---------------- 26: i gruppi si formano da soli ---------------- */
{
  cls: 'top',
  chartGroup: 'W',
  chart: { mode: 'parole', step: 2, animate: true,
           caption: { it: 'Nessuno ha mai detto che gatto e cane sono due animali.', en: 'Nobody ever said that cat and dog are two animals.' } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ------------------------------ 25: algebra vettoriale, esempio 1 */
{
  cls: 'top',
  html: { it: `
    <div class="kicker">E poi salta fuori una cosa strana</div>
    <h2 style="margin-bottom:.3em">Si può fare <em>matematica</em> con i significati</h2>
    <div class="cols tight" style="align-items:center">
      <div>
        <svg viewBox="0 0 420 300" style="width:100%;height:auto;max-height:50vh">
          <defs>
            <marker id="ar1" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#fbbf24"/>
            </marker>
          </defs>
          <line x1="30" y1="270" x2="400" y2="270" stroke="#2a2f3d" stroke-width="2"/>
          <line x1="30" y1="270" x2="30" y2="20" stroke="#2a2f3d" stroke-width="2"/>
          <text x="398" y="288" fill="#6b7385" font-size="13" font-family="system-ui"
                text-anchor="end">asse 42</text>
          <text x="38" y="18" fill="#6b7385" font-size="13" font-family="system-ui">asse 7</text>

          <line x1="110" y1="220" x2="110" y2="96" stroke="#fbbf24" stroke-width="2.5"
                marker-end="url(#ar1)" stroke-dasharray="5 4"/>
          <line x1="300" y1="220" x2="300" y2="96" stroke="#fbbf24" stroke-width="2.5"
                marker-end="url(#ar1)" stroke-dasharray="5 4"/>

          <circle cx="110" cy="220" r="7" fill="#60a5fa"/>
          <text x="110" y="244" fill="#f2f4f8" font-size="15" font-weight="600"
                text-anchor="middle" font-family="system-ui">uomo</text>
          <circle cx="110" cy="88" r="7" fill="#4ade80"/>
          <text x="110" y="74" fill="#f2f4f8" font-size="15" font-weight="600"
                text-anchor="middle" font-family="system-ui">donna</text>
          <circle cx="300" cy="220" r="7" fill="#60a5fa"/>
          <text x="300" y="244" fill="#f2f4f8" font-size="15" font-weight="600"
                text-anchor="middle" font-family="system-ui">re</text>
          <circle cx="300" cy="88" r="7" fill="#fbbf24"/>
          <text x="300" y="74" fill="#fbbf24" font-size="15" font-weight="700"
                text-anchor="middle" font-family="system-ui">regina</text>

          <text x="205" y="162" fill="#a6adbb" font-size="13" text-anchor="middle"
                font-family="system-ui" font-style="italic">stessa direzione</text>
        </svg>
      </div>
      <div>
        <div class="vec-eq">
          <span class="vec-word">re</span><span class="vec-op">&minus;</span>
          <span class="vec-word">uomo</span><span class="vec-op">+</span>
          <span class="vec-word">donna</span><span class="vec-op">=</span>
          <span class="vec-result">regina</span>
        </div>
        <p>Nessuno ha programmato questa regola. Nessuno ha spiegato alla
           macchina che cos'è un re.${R(7)}</p>
        <p>Siccome gli assi si allineano al significato, anche le
           <strong>direzioni</strong> significano qualcosa. "Aggiungere
           femminile" è diventata una freccia che puoi davvero percorrere.</p>
      </div>
    </div>
  `,
          en: `
    <div class="kicker">And then something strange shows up</div>
    <h2 style="margin-bottom:.3em">You can do <em>maths</em> with meanings</h2>
    <div class="cols tight" style="align-items:center">
      <div>
        <svg viewBox="0 0 420 300" style="width:100%;height:auto;max-height:50vh">
          <defs>
            <marker id="ar1" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#fbbf24"/>
            </marker>
          </defs>
          <line x1="30" y1="270" x2="400" y2="270" stroke="#2a2f3d" stroke-width="2"/>
          <line x1="30" y1="270" x2="30" y2="20" stroke="#2a2f3d" stroke-width="2"/>
          <text x="398" y="288" fill="#6b7385" font-size="13" font-family="system-ui"
                text-anchor="end">axis 42</text>
          <text x="38" y="18" fill="#6b7385" font-size="13" font-family="system-ui">axis 7</text>

          <line x1="110" y1="220" x2="110" y2="96" stroke="#fbbf24" stroke-width="2.5"
                marker-end="url(#ar1)" stroke-dasharray="5 4"/>
          <line x1="300" y1="220" x2="300" y2="96" stroke="#fbbf24" stroke-width="2.5"
                marker-end="url(#ar1)" stroke-dasharray="5 4"/>

          <circle cx="110" cy="220" r="7" fill="#60a5fa"/>
          <text x="110" y="244" fill="#f2f4f8" font-size="15" font-weight="600"
                text-anchor="middle" font-family="system-ui">man</text>
          <circle cx="110" cy="88" r="7" fill="#4ade80"/>
          <text x="110" y="74" fill="#f2f4f8" font-size="15" font-weight="600"
                text-anchor="middle" font-family="system-ui">woman</text>
          <circle cx="300" cy="220" r="7" fill="#60a5fa"/>
          <text x="300" y="244" fill="#f2f4f8" font-size="15" font-weight="600"
                text-anchor="middle" font-family="system-ui">king</text>
          <circle cx="300" cy="88" r="7" fill="#fbbf24"/>
          <text x="300" y="74" fill="#fbbf24" font-size="15" font-weight="700"
                text-anchor="middle" font-family="system-ui">queen</text>

          <text x="205" y="162" fill="#a6adbb" font-size="13" text-anchor="middle"
                font-family="system-ui" font-style="italic">same direction</text>
        </svg>
      </div>
      <div>
        <div class="vec-eq">
          <span class="vec-word">king</span><span class="vec-op">&minus;</span>
          <span class="vec-word">man</span><span class="vec-op">+</span>
          <span class="vec-word">woman</span><span class="vec-op">=</span>
          <span class="vec-result">queen</span>
        </div>
        <p>Nobody programmed this rule. Nobody explained to the machine
           what a king is.${R(7)}</p>
        <p>Because the axes line up with meaning, the
           <strong>directions</strong> mean something too. "Add
           feminine" has become an arrow you can actually walk along.</p>
      </div>
    </div>
  ` }
},

/* ------------------------------ 26: algebra vettoriale, esempio 2 */
{
  cls: 'top',
  html: { it: `
    <div class="kicker">E non è un caso isolato</div>
    <h2 style="margin-bottom:.3em">Le "direzioni" dei concetti</h2>
    <div class="cols tight" style="align-items:center">
      <div>
        <svg viewBox="0 0 420 300" style="width:100%;height:auto;max-height:50vh">
          <defs>
            <marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#a78bfa"/>
            </marker>
          </defs>
          <line x1="30" y1="270" x2="400" y2="270" stroke="#2a2f3d" stroke-width="2"/>
          <line x1="30" y1="270" x2="30" y2="20" stroke="#2a2f3d" stroke-width="2"/>
          <text x="398" y="288" fill="#6b7385" font-size="13" font-family="system-ui"
                text-anchor="end">asse 115</text>
          <text x="38" y="18" fill="#6b7385" font-size="13" font-family="system-ui">asse 88</text>

          <line x1="108" y1="212" x2="222" y2="112" stroke="#a78bfa" stroke-width="2.5"
                marker-end="url(#ar2)" stroke-dasharray="5 4"/>
          <line x1="248" y1="232" x2="362" y2="132" stroke="#a78bfa" stroke-width="2.5"
                marker-end="url(#ar2)" stroke-dasharray="5 4"/>

          <circle cx="105" cy="215" r="7" fill="#60a5fa"/>
          <text x="98" y="239" fill="#f2f4f8" font-size="15" font-weight="600"
                text-anchor="middle" font-family="system-ui">Francia</text>
          <circle cx="228" cy="107" r="7" fill="#4ade80"/>
          <text x="228" y="93" fill="#f2f4f8" font-size="15" font-weight="600"
                text-anchor="middle" font-family="system-ui">Parigi</text>
          <circle cx="245" cy="235" r="7" fill="#60a5fa"/>
          <text x="245" y="259" fill="#f2f4f8" font-size="15" font-weight="600"
                text-anchor="middle" font-family="system-ui">Giappone</text>
          <circle cx="366" cy="127" r="7" fill="#fbbf24"/>
          <text x="366" y="113" fill="#fbbf24" font-size="15" font-weight="700"
                text-anchor="middle" font-family="system-ui">Tokyo</text>

          <text x="322" y="208" fill="#a6adbb" font-size="13" text-anchor="middle"
                font-family="system-ui" font-style="italic">"la capitale di"</text>
        </svg>
      </div>
      <div>
        <div class="vec-eq">
          <span class="vec-word">Parigi</span><span class="vec-op">&minus;</span>
          <span class="vec-word">Francia</span><span class="vec-op">+</span>
          <span class="vec-word">Giappone</span><span class="vec-op">=</span>
          <span class="vec-result">Tokyo</span>
        </div>
        <p>C'è una direzione, nello spazio, che vuol dire
           <strong>"la capitale di"</strong>.</p>
        <p>Nessuno l'ha messa lì. È emersa da sola, mentre la macchina
           cercava soltanto di indovinare parole mancanti.</p>
      </div>
    </div>
  `,
          en: `
    <div class="kicker">And it's not a one-off</div>
    <h2 style="margin-bottom:.3em">The "directions" of concepts</h2>
    <div class="cols tight" style="align-items:center">
      <div>
        <svg viewBox="0 0 420 300" style="width:100%;height:auto;max-height:50vh">
          <defs>
            <marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5"
                    markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="#a78bfa"/>
            </marker>
          </defs>
          <line x1="30" y1="270" x2="400" y2="270" stroke="#2a2f3d" stroke-width="2"/>
          <line x1="30" y1="270" x2="30" y2="20" stroke="#2a2f3d" stroke-width="2"/>
          <text x="398" y="288" fill="#6b7385" font-size="13" font-family="system-ui"
                text-anchor="end">axis 115</text>
          <text x="38" y="18" fill="#6b7385" font-size="13" font-family="system-ui">axis 88</text>

          <line x1="108" y1="212" x2="222" y2="112" stroke="#a78bfa" stroke-width="2.5"
                marker-end="url(#ar2)" stroke-dasharray="5 4"/>
          <line x1="248" y1="232" x2="362" y2="132" stroke="#a78bfa" stroke-width="2.5"
                marker-end="url(#ar2)" stroke-dasharray="5 4"/>

          <circle cx="105" cy="215" r="7" fill="#60a5fa"/>
          <text x="98" y="239" fill="#f2f4f8" font-size="15" font-weight="600"
                text-anchor="middle" font-family="system-ui">France</text>
          <circle cx="228" cy="107" r="7" fill="#4ade80"/>
          <text x="228" y="93" fill="#f2f4f8" font-size="15" font-weight="600"
                text-anchor="middle" font-family="system-ui">Paris</text>
          <circle cx="245" cy="235" r="7" fill="#60a5fa"/>
          <text x="245" y="259" fill="#f2f4f8" font-size="15" font-weight="600"
                text-anchor="middle" font-family="system-ui">Japan</text>
          <circle cx="366" cy="127" r="7" fill="#fbbf24"/>
          <text x="366" y="113" fill="#fbbf24" font-size="15" font-weight="700"
                text-anchor="middle" font-family="system-ui">Tokyo</text>

          <text x="322" y="208" fill="#a6adbb" font-size="13" text-anchor="middle"
                font-family="system-ui" font-style="italic">"the capital of"</text>
        </svg>
      </div>
      <div>
        <div class="vec-eq">
          <span class="vec-word">Paris</span><span class="vec-op">&minus;</span>
          <span class="vec-word">France</span><span class="vec-op">+</span>
          <span class="vec-word">Japan</span><span class="vec-op">=</span>
          <span class="vec-result">Tokyo</span>
        </div>
        <p>There is a direction, in the space, that means
           <strong>"the capital of"</strong>.</p>
        <p>Nobody put it there. It showed up on its own, while the machine
           was only trying to guess missing words.</p>
      </div>
    </div>
  ` }
},

/* ---------------------------- 27: OPZIONALE — lo spazio vero */
{
  cls: 'center',
  html: { it: `
    <div class="kicker">Ed è davvero così</div>
    <h2>Modelli veri, spazio vero</h2>
    <p>Tutto quello che abbiamo fatto a mano è un modellino in scala di una
       cosa che esiste davvero dentro ogni sistema di AI che avete usato.</p>
    <p style="margin-top:1.2em"><strong>Demo dal vivo:</strong>
       <a href="https://projector.tensorflow.org/" target="_blank" rel="noopener"
          style="color:var(--accent)">projector.tensorflow.org</a>
.</p>
  `,
          en: `
    <div class="kicker">And it really is like this</div>
    <h2>Real models, real space</h2>
    <p>Everything we did by hand is a scale model of something that really
       exists inside every AI system you have ever used.</p>
    <p style="margin-top:1.2em"><strong>Live demo:</strong>
       <a href="https://projector.tensorflow.org/" target="_blank" rel="noopener"
          style="color:var(--accent)">projector.tensorflow.org</a>
.</p>
  ` }
},

/* ---------------------------- 28: a cosa servono? */
{
  cls: 'center',
  html: { it: `
    <div class="kicker">Abbiamo visto che gli assi si possono trovare</div>
    <div class="big-statement">
      Ma una volta che hai gli assi,<br>
      <em>a cosa servono?</em>
    </div>
    <p style="margin-top:1.4em">Torniamo al nostro grafico, quello che
       conoscete già.</p>
  `,
          en: `
    <div class="kicker">We've seen that the axes can be found</div>
    <div class="big-statement">
      But once you have the axes,<br>
      <em>what are they good for?</em>
    </div>
    <p style="margin-top:1.4em">Let's go back to our chart, the one you
       already know.</p>
  ` }
},

/* -------------------------------- 29: torna al grafico */
{
  cls: 'top',
  chartGroup: 'C',
  chart: { objects: ['sun', 'whale', 'hamster', 'sand'],
           caption: { it: 'Gli stessi quattro. Assi vecchi, quelli facili.', en: 'The same four. Old axes, the easy ones.' } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ------------------------------------------ 30: la domanda nuova */
{
  cls: 'top',
  chartGroup: 'C',
  chart: { objects: ['sun', 'whale', 'hamster', 'sand'],
           caption: { it: 'Domanda nuova, per cui nessuno vi ha addestrati:<br><strong>quale di questi sarebbe un buon animale domestico?</strong>',
                      en: 'A new question, nobody trained you for it:<br><strong>which of these would make a good pet?</strong>' } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* -------------------------------------------- 31: arrivano gli animali */
{
  cls: 'top',
  chartGroup: 'C',
  chart: { objects: ['sun', 'whale', 'sand', 'hamster'],
           region: { x0: -0.96, y0: 0.36, x1: 0.06, y1: 0.96, label: { it: 'buon animale domestico', en: 'good pet' } },
           caption: { it: 'vivo &gt; tanto &nbsp;E&nbsp; grande &lt; medio', en: 'alive &gt; a lot &nbsp;AND&nbsp; big &lt; medium' } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ---------------------------------------------- 32: la regione */
{
  cls: 'top',
  chartGroup: 'C',
  chart: { objects: ['sun', 'whale', 'sand', 'hamster',
                     'goldfish', 'parrot', 'cat', 'dog'],
           region: { x0: -0.96, y0: 0.36, x1: 0.06, y1: 0.96, label: { it: 'buon animale domestico', en: 'good pet' } },
           caption: { it: 'E infatti: tutti quelli che ci vengono in mente cadono lì dentro.', en: 'And sure enough: every one we can think of falls in there.' } },
  html: { it: `<div class="chart-wrap"><div class="chart"></div></div>`,
          en: `<div class="chart-wrap"><div class="chart"></div></div>` }
},

/* ---------------- 35: dal giocattolo al mondo vero ---------------- */
{
  cls: 'center',
  html: { it: `
    <div class="kicker">E questo a cosa serve davvero</div>
    <div class="big-statement">
      Lo stesso trucco,<br>su un problema <em>vero</em>.
    </div>
    <p style="margin-top:1.4em;max-width:36em">Abbiamo appena visto che, con
       gli assi giusti, "che animale mi tengo in casa" diventa una regola di
       due righe. Proviamo con qualcosa che il vostro telefono fa
       <strong>ogni giorno</strong>.</p>
  `,
          en: `
    <div class="kicker">And what this is actually good for</div>
    <div class="big-statement">
      The same trick,<br>on a <em>real</em> problem.
    </div>
    <p style="margin-top:1.4em;max-width:36em">We just saw that, with the
       right axes, "which animal should I keep at home" turns into a
       two-line rule. Let's try it on something your phone does
       <strong>every day</strong>.</p>
  ` }
},

/* ---------------- 36: lo spam ---------------- */
{
  cls: 'top',
  html: { it: `
    <div class="kicker">Il filtro antispam</div>
    <h2 style="margin-bottom:.3em">Come fa la posta a sapere che è spam?</h2>
    <div class="chart-wrap" style="height:auto;flex:1;align-items:center">
      <svg viewBox="0 0 560 400" style="width:min(100%,62vh);height:auto">
        <!-- regione spam -->
        <rect x="300" y="30" width="228" height="190" rx="12"
              fill="rgba(251,113,133,.12)" stroke="#fb7185"
              stroke-width="2.5" stroke-dasharray="8 6"/>
        <text x="312" y="22" fill="#fb7185" font-size="17" font-weight="650"
              font-family="system-ui">zona spam</text>

        <!-- assi -->
        <line x1="60" y1="340" x2="530" y2="340" stroke="#2a2f3d" stroke-width="2.5"/>
        <line x1="60" y1="340" x2="60" y2="25" stroke="#2a2f3d" stroke-width="2.5"/>
        <polygon points="540,340 528,334 528,346" fill="#2a2f3d"/>
        <polygon points="60,15 54,27 66,27" fill="#2a2f3d"/>
        <text x="530" y="368" fill="#60a5fa" font-size="17" font-weight="650"
              text-anchor="end" font-family="system-ui">dice "promozione"</text>
        <text x="72" y="22" fill="#4ade80" font-size="17" font-weight="650"
              font-family="system-ui">dice "hai vinto"</text>

        <!-- spam -->
        <circle cx="360" cy="80"  r="9" fill="#fb7185"/>
        <circle cx="430" cy="120" r="9" fill="#fb7185"/>
        <circle cx="330" cy="150" r="9" fill="#fb7185"/>
        <circle cx="470" cy="70"  r="9" fill="#fb7185"/>
        <circle cx="400" cy="185" r="9" fill="#fb7185"/>
        <circle cx="495" cy="160" r="9" fill="#fb7185"/>

        <!-- mail normali -->
        <circle cx="110" cy="300" r="9" fill="#4ade80"/>
        <circle cx="160" cy="275" r="9" fill="#4ade80"/>
        <circle cx="95"  cy="255" r="9" fill="#4ade80"/>
        <circle cx="185" cy="315" r="9" fill="#4ade80"/>
        <circle cx="140" cy="230" r="9" fill="#4ade80"/>
        <circle cx="215" cy="285" r="9" fill="#4ade80"/>
        <circle cx="120" cy="330" r="9" fill="#4ade80"/>

        <text x="150" y="385" fill="#a6adbb" font-size="16"
              text-anchor="middle" font-family="system-ui">mail normali</text>
        <text x="414" y="255" fill="#fb7185" font-size="16"
              text-anchor="middle" font-family="system-ui">spam</text>
      </svg>
    </div>
  `,
          en: `
    <div class="kicker">The spam filter</div>
    <h2 style="margin-bottom:.3em">How does your inbox know it's spam?</h2>
    <div class="chart-wrap" style="height:auto;flex:1;align-items:center">
      <svg viewBox="0 0 560 400" style="width:min(100%,62vh);height:auto">
        <!-- spam region -->
        <rect x="300" y="30" width="228" height="190" rx="12"
              fill="rgba(251,113,133,.12)" stroke="#fb7185"
              stroke-width="2.5" stroke-dasharray="8 6"/>
        <text x="312" y="22" fill="#fb7185" font-size="17" font-weight="650"
              font-family="system-ui">spam zone</text>

        <!-- axes -->
        <line x1="60" y1="340" x2="530" y2="340" stroke="#2a2f3d" stroke-width="2.5"/>
        <line x1="60" y1="340" x2="60" y2="25" stroke="#2a2f3d" stroke-width="2.5"/>
        <polygon points="540,340 528,334 528,346" fill="#2a2f3d"/>
        <polygon points="60,15 54,27 66,27" fill="#2a2f3d"/>
        <text x="530" y="368" fill="#60a5fa" font-size="17" font-weight="650"
              text-anchor="end" font-family="system-ui">says "free offer"</text>
        <text x="72" y="22" fill="#4ade80" font-size="17" font-weight="650"
              font-family="system-ui">says "you won"</text>

        <!-- spam -->
        <circle cx="360" cy="80"  r="9" fill="#fb7185"/>
        <circle cx="430" cy="120" r="9" fill="#fb7185"/>
        <circle cx="330" cy="150" r="9" fill="#fb7185"/>
        <circle cx="470" cy="70"  r="9" fill="#fb7185"/>
        <circle cx="400" cy="185" r="9" fill="#fb7185"/>
        <circle cx="495" cy="160" r="9" fill="#fb7185"/>

        <!-- normal mail -->
        <circle cx="110" cy="300" r="9" fill="#4ade80"/>
        <circle cx="160" cy="275" r="9" fill="#4ade80"/>
        <circle cx="95"  cy="255" r="9" fill="#4ade80"/>
        <circle cx="185" cy="315" r="9" fill="#4ade80"/>
        <circle cx="140" cy="230" r="9" fill="#4ade80"/>
        <circle cx="215" cy="285" r="9" fill="#4ade80"/>
        <circle cx="120" cy="330" r="9" fill="#4ade80"/>

        <text x="150" y="385" fill="#a6adbb" font-size="16"
              text-anchor="middle" font-family="system-ui">normal mail</text>
        <text x="414" y="255" fill="#fb7185" font-size="16"
              text-anchor="middle" font-family="system-ui">spam</text>
      </svg>
    </div>
  ` }
},

/* --------------------------------------------- 36: verso gli LLM */
{
  cls: 'center',
  html: { it: `
    <div class="kicker">E adesso la cosa per cui siete venuti</div>
    <div class="big-statement">
      ChatGPT, Gemini, Claude:<br>
      sono <em>esattamente questa idea</em>,<br>
      con un compito molto semplice.
    </div>
    <p style="margin-top:1.4em">Si chiamano <strong>Large Language Model</strong>,
       modelli linguistici di grandi dimensioni. Tutto quello che sapete già
       vale ancora: cambia solo la scala, e il compito.</p>
  `,
          en: `
    <div class="kicker">And now the thing you came for</div>
    <div class="big-statement">
      ChatGPT, Gemini, Claude:<br>
      they are <em>exactly this idea</em>,<br>
      with one very simple task.
    </div>
    <p style="margin-top:1.4em">They're called <strong>Large Language Models</strong>.
       Everything you already know still holds: only the scale changes, and
       the task.</p>
  ` }
},

/* ------------------------------------------ 37: il compito degli LLM */
{
  cls: 'top',
  html: { it: `
    <div class="kicker">Il compito</div>
    <h2 style="margin-bottom:.2em">Indovina la parola dopo</h2>
    <div class="chart-wrap" style="height:auto;flex:1;align-items:center">
      <svg viewBox="0 0 560 310" style="width:min(100%,56vh);height:auto">
        <!-- assi senza nome: contano le posizioni, non le etichette -->
        <line x1="40" y1="245" x2="520" y2="245" stroke="#2a2f3d" stroke-width="2.5"/>
        <line x1="40" y1="245" x2="40" y2="25" stroke="#2a2f3d" stroke-width="2.5"/>
        <polygon points="530,245 518,239 518,251" fill="#2a2f3d"/>
        <polygon points="40,15 34,27 46,27" fill="#2a2f3d"/>

        <!-- La zona di "alta" e' solo un angolo dello spazio: deve
             restare piccola, altrimenti sembra che copra tutto e il
             confronto dentro/fuori non si vede. -->
        <ellipse cx="380" cy="95" rx="118" ry="62"
                 fill="rgba(74,222,128,.14)" stroke="#4ade80"
                 stroke-width="2.5" stroke-dasharray="8 6"/>
        <text x="380" y="22" fill="#4ade80" font-size="17" font-weight="650"
              text-anchor="middle" font-family="system-ui">qui la risposta è "alta"</text>

        <!-- Altre zone, sbiadite: lo spazio e' pieno di regioni. -->
        <ellipse cx="128" cy="170" rx="76" ry="45"
                 fill="rgba(255,255,255,.028)" stroke="#3b4358"
                 stroke-width="1.5" stroke-dasharray="6 5"/>
        <text x="128" y="174" fill="#6b7385" font-size="13.5"
              text-anchor="middle" font-family="system-ui">"luce"</text>

        <ellipse cx="150" cy="60" rx="66" ry="40"
                 fill="rgba(255,255,255,.028)" stroke="#3b4358"
                 stroke-width="1.5" stroke-dasharray="6 5"/>
        <text x="150" y="64" fill="#6b7385" font-size="13.5"
              text-anchor="middle" font-family="system-ui">"divano"</text>

        <ellipse cx="300" cy="185" rx="62" ry="40"
                 fill="rgba(255,255,255,.028)" stroke="#3b4358"
                 stroke-width="1.5" stroke-dasharray="6 5"/>
        <text x="300" y="189" fill="#6b7385" font-size="13.5"
              text-anchor="middle" font-family="system-ui">"bianca"</text>

        <!-- il punto della frase, dentro la zona verde. Il cartellino
             sta FUORI dal piano, in basso, cosi' non taglia le zone. -->
        <circle cx="380" cy="95" r="9" fill="#fbbf24"/>
        <line x1="380" y1="104" x2="380" y2="266" stroke="#fbbf24"
              stroke-width="1.5" stroke-dasharray="4 4"/>
        <rect x="150" y="266" width="400" height="32" rx="8"
              fill="rgba(10,12,18,.97)" stroke="#fbbf24" stroke-width="2"/>
        <text x="350" y="287" fill="#fde68a" font-size="12.5"
              text-anchor="middle" font-family="ui-monospace,monospace">
          "La pressione del paziente era pericolosamente ___"</text>
      </svg>
    </div>
    <p style="max-width:52em;margin:.6em auto 0;text-align:center">
       Ogni frase diventa <strong>un punto</strong>. E c'è una zona dello spazio
       in cui la parola giusta è <em>alta</em> — esattamente come c'era una zona
       in cui la mail era spam.</p>
  `,
          en: `
    <div class="kicker">The task</div>
    <h2 style="margin-bottom:.2em">Guess the next word</h2>
    <div class="chart-wrap" style="height:auto;flex:1;align-items:center">
      <svg viewBox="0 0 560 310" style="width:min(100%,56vh);height:auto">
        <!-- unnamed axes: the positions matter, not the labels -->
        <line x1="40" y1="245" x2="520" y2="245" stroke="#2a2f3d" stroke-width="2.5"/>
        <line x1="40" y1="245" x2="40" y2="25" stroke="#2a2f3d" stroke-width="2.5"/>
        <polygon points="530,245 518,239 518,251" fill="#2a2f3d"/>
        <polygon points="40,15 34,27 46,27" fill="#2a2f3d"/>

        <!-- The "high" zone is only one corner of the space: it has to
             stay small, otherwise it looks like it covers everything and
             the inside/outside comparison is lost. -->
        <ellipse cx="380" cy="95" rx="118" ry="62"
                 fill="rgba(74,222,128,.14)" stroke="#4ade80"
                 stroke-width="2.5" stroke-dasharray="8 6"/>
        <text x="380" y="22" fill="#4ade80" font-size="17" font-weight="650"
              text-anchor="middle" font-family="system-ui">here the answer is "high"</text>

        <!-- Other zones, faded: the space is full of regions. -->
        <ellipse cx="128" cy="170" rx="76" ry="45"
                 fill="rgba(255,255,255,.028)" stroke="#3b4358"
                 stroke-width="1.5" stroke-dasharray="6 5"/>
        <text x="128" y="174" fill="#6b7385" font-size="13.5"
              text-anchor="middle" font-family="system-ui">"lamp"</text>

        <ellipse cx="150" cy="60" rx="66" ry="40"
                 fill="rgba(255,255,255,.028)" stroke="#3b4358"
                 stroke-width="1.5" stroke-dasharray="6 5"/>
        <text x="150" y="64" fill="#6b7385" font-size="13.5"
              text-anchor="middle" font-family="system-ui">"sofa"</text>

        <ellipse cx="300" cy="185" rx="62" ry="40"
                 fill="rgba(255,255,255,.028)" stroke="#3b4358"
                 stroke-width="1.5" stroke-dasharray="6 5"/>
        <text x="300" y="189" fill="#6b7385" font-size="13.5"
              text-anchor="middle" font-family="system-ui">"white"</text>

        <!-- the sentence's point, inside the green zone. The tag sits
             OUTSIDE the plane, at the bottom, so it doesn't cut the zones. -->
        <circle cx="380" cy="95" r="9" fill="#fbbf24"/>
        <line x1="380" y1="104" x2="380" y2="266" stroke="#fbbf24"
              stroke-width="1.5" stroke-dasharray="4 4"/>
        <rect x="150" y="266" width="400" height="32" rx="8"
              fill="rgba(10,12,18,.97)" stroke="#fbbf24" stroke-width="2"/>
        <text x="350" y="287" fill="#fde68a" font-size="12.5"
              text-anchor="middle" font-family="ui-monospace,monospace">
          "The patient's blood pressure was dangerously ___"</text>
      </svg>
    </div>
    <p style="max-width:52em;margin:.6em auto 0;text-align:center">
       Every sentence becomes <strong>a point</strong>. And there is a zone of
       the space where the right word is <em>high</em> — exactly like there was a
       zone where the mail was spam.</p>
  ` }
},

/* ------------------------------------ 38: autoregressivo */
{
  cls: 'center',
  html: { it: `
    <div class="kicker">Da indovinare una parola all'intero testo</div>
    <div class="big-statement" style="font-size:clamp(1.25em,3.2vmin,2.4em)">
      Scrive una parola,<br>
      <em>rilegge quello che ha appena scritto,</em><br>
      e indovina di nuovo.
    </div>
    <div class="output" style="max-width:40em;margin:1.4em auto 0;text-align:left">
<span class="prompt">Il gatto dorme sul</span> <span class="gen">divano</span>
<span class="prompt">Il gatto dorme sul divano</span> <span class="gen">accanto</span>
<span class="prompt">Il gatto dorme sul divano accanto</span> <span class="gen">alla</span>
<span class="prompt">Il gatto dorme sul divano accanto alla</span> <span class="gen">finestra</span></div>
    <p style="margin-top:1.2em;max-width:36em;margin-left:auto;margin-right:auto">
       Una parola alla volta, e ogni volta si <strong>rimangia il proprio
       output</strong>. Non c'è nessun piano, nessuna frase pensata in anticipo.
       "Generare testo" è tutto qui.</p>
  `,
          en: `
    <div class="kicker">From guessing one word to writing a whole text</div>
    <div class="big-statement" style="font-size:clamp(1.25em,3.2vmin,2.4em)">
      It writes a word,<br>
      <em>rereads what it just wrote,</em><br>
      and guesses again.
    </div>
    <div class="output" style="max-width:40em;margin:1.4em auto 0;text-align:left">
<span class="prompt">The cat is sleeping on the</span> <span class="gen">sofa</span>
<span class="prompt">The cat is sleeping on the sofa</span> <span class="gen">next</span>
<span class="prompt">The cat is sleeping on the sofa next</span> <span class="gen">to</span>
<span class="prompt">The cat is sleeping on the sofa next to</span> <span class="gen">the window</span></div>
    <p style="margin-top:1.2em;max-width:36em;margin-left:auto;margin-right:auto">
       One word at a time, and every time it <strong>eats its own
       output</strong>. There is no plan, no sentence thought out in advance.
       "Generating text" is all there is to it.</p>
  ` }
},

/* ------------------------------------------- 39: le tre fasi */
{
  cls: 'top',
  html: { it: `
    <div class="kicker" style="margin-bottom:.4em">Come si costruisce davvero un chatbot</div>
    <h2 style="margin-bottom:.6em">Tre fasi, tre tipi di dati molto diversi</h2>
    <div class="card-grid c3" style="align-items:stretch">
      <div class="card phase p1">
        <div class="tag">fase 1 — pre-addestramento</div>
        <h3>Leggi tutto</h3>
        <p><strong>Dati:</strong> pagine web, libri, codice. Miliardi di
           documenti.</p>
        <p style="margin-top:.35em"><strong>Serve a:</strong> costruire gli assi.
           È il 99% del calcolo.</p>
        <div class="output"><span class="prompt">Qual è la capitale della Francia?</span>
<span class="gen">
a) Parigi  b) Lione  c) Marsiglia

12. Qual è la capitale della Spagna?</span></div>
        <p style="margin-top:.35em;font-size:max(.86em,11.5px);color:var(--ink-faint)">
          Non si rifiuta di rispondere. <strong>Non si accorge che gli è stata
          fatta una domanda.</strong> Sta completando un documento.</p>
      </div>
      <div class="card phase p2">
        <div class="tag">fase 2 — fine-tuning</div>
        <h3>Mostragli il mestiere</h3>
        <p><strong>Dati:</strong> decine di migliaia di conversazioni di
           esempio, scritte a mano da persone pagate che seguono una guida
           di stile.</p>
        <p style="margin-top:.35em"><strong>Serve a:</strong> fargli capire che
           è in una conversazione e che deve rispondere.</p>
        <div class="output"><span class="prompt">Qual è la capitale della Francia?</span>
<span class="gen">La capitale della Francia è Parigi.</span></div>
        <p style="margin-top:.35em;font-size:max(.86em,11.5px);color:var(--ink-faint)">
          Corretto. Piatto. Un po' robotico.</p>
      </div>
      <div class="card phase p3">
        <div class="tag">fase 3 — RLHF ${R(8)}</div>
        <h3>Insegnagli cosa ci piace</h3>
        <p><strong>Dati:</strong> persone a cui vengono mostrate due risposte
           e che scelgono la migliore. Centinaia di migliaia di volte.</p>
        <p style="margin-top:.35em"><strong>Serve a:</strong> tono, gentilezza,
           formattazione, rifiuti.</p>
        <div class="output"><span class="prompt">Qual è la capitale della Francia?</span>
<span class="gen">La capitale della Francia è <b>Parigi</b>! È anche
la città più grande del paese, famosa per
la Torre Eiffel. Vuoi sapere altro?</span></div>
        <p style="margin-top:.35em;font-size:max(.86em,11.5px);color:var(--ink-faint)">
          Familiare, calda, chiacchierona.</p>
      </div>
    </div>
    <div class="card-grid c3" style="margin-top:.9em">
      <div class="card">
        <div class="tag">quanto testo</div>
        <p><strong>15.600 miliardi</strong> di pezzi di parola per Llama 3.${R(1)}
           GPT-3, nel 2020, ne usava 300 miliardi.${R(2)} È circa il
           <strong>5%</strong> di tutto il testo pubblico mai scritto.${R(3)}</p>
      </div>
      <div class="card">
        <div class="tag">quanta elettricità</div>
        <p>Addestrare GPT-3: <strong>1.287 MWh</strong>${R(4)} — come una
           famiglia italiana per circa <strong>450 anni</strong>.
           Ed è un modello del 2020.</p>
      </div>
      <div class="card">
        <div class="tag">quanti assi</div>
        <p>Noi ne abbiamo disegnati tre. Un modello di oggi:
           <strong>decine di migliaia</strong>, ripetuti su decine di strati.</p>
      </div>
    </div>
  `,
          en: `
    <div class="kicker" style="margin-bottom:.4em">How a chatbot actually gets built</div>
    <h2 style="margin-bottom:.6em">Three phases, three very different kinds of data</h2>
    <div class="card-grid c3" style="align-items:stretch">
      <div class="card phase p1">
        <div class="tag">phase 1 — pre-training</div>
        <h3>Read everything</h3>
        <p><strong>Data:</strong> web pages, books, code. Billions of
           documents.</p>
        <p style="margin-top:.35em"><strong>What for:</strong> building the axes.
           It's 99% of the compute.</p>
        <div class="output"><span class="prompt">What is the capital of France?</span>
<span class="gen">
a) Paris  b) Lyon  c) Marseille

12. What is the capital of Spain?</span></div>
        <p style="margin-top:.35em;font-size:max(.86em,11.5px);color:var(--ink-faint)">
          It isn't refusing to answer. <strong>It hasn't noticed it was asked
          a question.</strong> It's completing a document.</p>
      </div>
      <div class="card phase p2">
        <div class="tag">phase 2 — fine-tuning</div>
        <h3>Show it the job</h3>
        <p><strong>Data:</strong> tens of thousands of example conversations,
           written by hand by paid people following a style guide.</p>
        <p style="margin-top:.35em"><strong>What for:</strong> making it realise
           it's in a conversation and that it has to answer.</p>
        <div class="output"><span class="prompt">What is the capital of France?</span>
<span class="gen">The capital of France is Paris.</span></div>
        <p style="margin-top:.35em;font-size:max(.86em,11.5px);color:var(--ink-faint)">
          Correct. Flat. A bit robotic.</p>
      </div>
      <div class="card phase p3">
        <div class="tag">phase 3 — RLHF ${R(8)}</div>
        <h3>Teach it what we like</h3>
        <p><strong>Data:</strong> people shown two answers who pick the better
           one. Hundreds of thousands of times.</p>
        <p style="margin-top:.35em"><strong>What for:</strong> tone, friendliness,
           formatting, refusals.</p>
        <div class="output"><span class="prompt">What is the capital of France?</span>
<span class="gen">The capital of France is <b>Paris</b>! It's also
the country's largest city, famous for
the Eiffel Tower. Want to know more?</span></div>
        <p style="margin-top:.35em;font-size:max(.86em,11.5px);color:var(--ink-faint)">
          Familiar, warm, chatty.</p>
      </div>
    </div>
    <div class="card-grid c3" style="margin-top:.9em">
      <div class="card">
        <div class="tag">how much text</div>
        <p><strong>15.6 trillion</strong> word pieces for Llama 3.${R(1)}
           GPT-3, back in 2020, used 300 billion.${R(2)} That's about
           <strong>5%</strong> of all the public text ever written.${R(3)}</p>
      </div>
      <div class="card">
        <div class="tag">how much electricity</div>
        <p>Training GPT-3: <strong>1,287 MWh</strong>${R(4)} — like an
           Italian household for roughly <strong>450 years</strong>.
           And that's a 2020 model.</p>
      </div>
      <div class="card">
        <div class="tag">how many axes</div>
        <p>We drew three. A model today:
           <strong>tens of thousands</strong>, repeated across dozens of layers.</p>
      </div>
    </div>
  ` }
},

/* -------------------------------- 40: guardare dentro (Golden Gate) */
{
  cls: 'top',
  html: { it: `
    <div class="kicker">Cosa ha capito?</div>
    <h2 style="margin-bottom:.5em">Diamo un occhio agli assi più... curiosi.</h2>
    <div class="cols tight" style="align-items:center;margin-bottom:.9em">
      <div>
        <p>Il problema: dentro il modello c'è solo una lunghissima lista di
           numeri.${R(9)}</p>
        <p>Nel 2024 dei ricercatori hanno scoperto che <strong>alcune direzioni
           nello spazio corrispondono a concetti curiosi</strong>.</p>
        <p>Una di queste era il <strong>Golden Gate</strong>, il ponte di San
           Francisco.</p>
      </div>
      <div style="display:grid;place-items:center">
        <img src="img/goldengate.jpg" alt="Il Golden Gate"
             style="width:min(270px,30vmin);height:min(270px,30vmin);
                    border-radius:50%;object-fit:cover;
                    box-shadow:0 20px 50px rgba(0,0,0,.6),
                               0 0 0 4px var(--bg), 0 0 0 6px var(--rule)">
      </div>
    </div>
    <div class="card-grid c2">
      <div class="card">
        <div class="tag">la cosa sorprendente</div>
        <p>Quella direzione si accende sul testo "Golden Gate" in inglese,
           giapponese, cinese, greco, russo, vietnamita <strong>e sulle
           fotografie del ponte</strong>.${R(9)}</p>
      </div>
      <div class="card" style="border-color:rgba(251,191,36,.4)">
        <div class="tag" style="color:var(--accent)">poi hanno spinto gli output in quella direzione</div>
        <div class="output" style="margin-top:.2em"><span class="prompt">Qual è la tua forma fisica?</span>
<span class="gen">Io sono il Golden Gate Bridge… la mia
forma fisica è il ponte iconico stesso…</span></div>
        <p style="margin-top:.45em;font-size:max(.88em,11.5px)">Il modello si è
           convinto di <strong>essere</strong> il ponte, e lo infilava in
           qualunque risposta.${R(10)}</p>
      </div>
    </div>
  `,
          en: `
    <div class="kicker">What did it understand?</div>
    <h2 style="margin-bottom:.5em">Let's look at the more... curious axes.</h2>
    <div class="cols tight" style="align-items:center;margin-bottom:.9em">
      <div>
        <p>The problem: inside the model there is only a very long list of
           numbers.${R(9)}</p>
        <p>In 2024 some researchers found that <strong>certain directions in
           the space match oddly specific concepts</strong>.</p>
        <p>One of them was the <strong>Golden Gate</strong>, the bridge in San
           Francisco.</p>
      </div>
      <div style="display:grid;place-items:center">
        <img src="img/goldengate.jpg" alt="The Golden Gate"
             style="width:min(270px,30vmin);height:min(270px,30vmin);
                    border-radius:50%;object-fit:cover;
                    box-shadow:0 20px 50px rgba(0,0,0,.6),
                               0 0 0 4px var(--bg), 0 0 0 6px var(--rule)">
      </div>
    </div>
    <div class="card-grid c2">
      <div class="card">
        <div class="tag">the surprising part</div>
        <p>That direction lights up on the text "Golden Gate" in English,
           Japanese, Chinese, Greek, Russian, Vietnamese <strong>and on
           photographs of the bridge</strong>.${R(9)}</p>
      </div>
      <div class="card" style="border-color:rgba(251,191,36,.4)">
        <div class="tag" style="color:var(--accent)">then they pushed the outputs in that direction</div>
        <div class="output" style="margin-top:.2em"><span class="prompt">What is your physical form?</span>
<span class="gen">I am the Golden Gate Bridge… my physical
form is the iconic bridge itself…</span></div>
        <p style="margin-top:.45em;font-size:max(.88em,11.5px)">The model became
           convinced it <strong>was</strong> the bridge, and slipped it into
           every answer.${R(10)}</p>
      </div>
    </div>
  ` }
},

/* -------------------------------------------- 41: la biblioteca */
{
  cls: 'center',
  html: { it: `
    <div class="kicker">Un passo ancora e siamo a oggi</div>
    <div class="big-statement">
      Quello che abbiamo costruito finora<br>
      è <em>una biblioteca che parla.</em>
    </div>
    <p style="margin-top:1.4em;max-width:36em">Ha letto tutto. Non ha mani,
       non ha occhi, non si ricorda di voi da ieri, e non ha nessun modo di
       controllare se quello che dice è vero.</p>
  `,
          en: `
    <div class="kicker">One more step and we're at today</div>
    <div class="big-statement">
      What we've built so far<br>
      is <em>a library that talks.</em>
    </div>
    <p style="margin-top:1.4em;max-width:36em">It has read everything. It has no
       hands, no eyes, it doesn't remember you from yesterday, and it has no way
       to check whether what it says is true.</p>
  ` }
},

/* ------------------------------------ 42: gli strumenti */
{
  cls: 'top',
  html: { it: `
    <div class="kicker">La protesi</div>
    <h2 style="margin-bottom:.5em">Gli agenti sono LLM dotati di <em>funzioni (tool)</em></h2>
    <div class="cols tight" style="align-items:start">
      <div>
        <p>Come nella programmazione: un nome, dei parametri, un valore di
           ritorno.</p>
        <div class="sig"><span class="cm"># tutto quello che il modello "vede"</span>
<span class="kw">def</span> <span class="fn">cerca_meteo</span>(<span class="arg">citta</span>: str, <span class="arg">giorno</span>: str) -&gt; str:
    <span class="str">"""Restituisce il meteo previsto per una città."""</span></div>
        <p style="margin-top:.7em">Il modello <strong>non esegue niente</strong>.
           Scrive del testo che dice che <em>vorrebbe</em> chiamare la
           funzione:</p>
        <div class="sig"><span class="fn">cerca_meteo</span>(<span class="arg">citta</span>=<span class="str">"Milano"</span>, <span class="arg">giorno</span>=<span class="str">"domani"</span>)</div>
      </div>
      <div class="stack">
        <div class="card">
          <div class="tag">e poi?</div>
          <p>Un normale programma legge quella riga, <strong>esegue
             davvero la funzione</strong>, e incolla il risultato nel testo
             del modello.</p>
        </div>
        <div class="card" style="border-color:rgba(251,191,36,.4)">
          <div class="tag" style="color:var(--accent)">e qui torna il ciclo</div>
          <p>Ricordate: il modello si rimangia già il proprio output. Metti
             uno strumento dentro quel ciclo e può <strong>agire, vedere cosa
             è successo, e decidere il passo dopo</strong>.</p>
          <p style="margin-top:.5em"><strong>Un "agente" è un ciclo while
             attorno a un modello linguistico.</strong></p>
        </div>
      </div>
    </div>
    <div class="loop-stage" style="margin-top:.8em;justify-content:center">
      <div class="loop-node"><div class="t">tu chiedi</div><div class="s">"che tempo fa domani?"</div></div>
      <span class="loop-arrow">&rarr;</span>
      <div class="loop-node"><div class="t">il modello scrive</div><div class="s">cerca_meteo("Milano"…)</div></div>
      <span class="loop-arrow">&rarr;</span>
      <div class="loop-node"><div class="t">il programma esegue</div><div class="s">chiama l'API vera</div></div>
      <span class="loop-arrow">&rarr;</span>
      <div class="loop-node"><div class="t">risultato incollato</div><div class="s">"18°, sereno"</div></div>
      <span class="loop-arrow">&#8630;</span>
      <div class="loop-node" style="border-color:var(--accent)"><div class="t">si ricomincia</div><div class="s">finché non ha finito</div></div>
    </div>
  `,
          en: `
    <div class="kicker">The prosthetic</div>
    <h2 style="margin-bottom:.5em">Agents are LLMs given <em>functions (tools)</em></h2>
    <div class="cols tight" style="align-items:start">
      <div>
        <p>Just like in programming: a name, some parameters, a return
           value.</p>
        <div class="sig"><span class="cm"># everything the model "sees"</span>
<span class="kw">def</span> <span class="fn">get_weather</span>(<span class="arg">city</span>: str, <span class="arg">day</span>: str) -&gt; str:
    <span class="str">"""Returns the forecast for a city."""</span></div>
        <p style="margin-top:.7em">The model <strong>doesn't run anything</strong>.
           It writes text saying it <em>would like</em> to call the
           function:</p>
        <div class="sig"><span class="fn">get_weather</span>(<span class="arg">city</span>=<span class="str">"Milan"</span>, <span class="arg">day</span>=<span class="str">"tomorrow"</span>)</div>
      </div>
      <div class="stack">
        <div class="card">
          <div class="tag">and then?</div>
          <p>An ordinary program reads that line, <strong>actually runs the
             function</strong>, and pastes the result into the model's
             text.</p>
        </div>
        <div class="card" style="border-color:rgba(251,191,36,.4)">
          <div class="tag" style="color:var(--accent)">and here the loop comes back</div>
          <p>Remember: the model already eats its own output. Put a tool
             inside that loop and it can <strong>act, see what happened, and
             decide the next step</strong>.</p>
          <p style="margin-top:.5em"><strong>An "agent" is a while loop
             around a language model.</strong></p>
        </div>
      </div>
    </div>
    <div class="loop-stage" style="margin-top:.8em;justify-content:center">
      <div class="loop-node"><div class="t">you ask</div><div class="s">"what's the weather tomorrow?"</div></div>
      <span class="loop-arrow">&rarr;</span>
      <div class="loop-node"><div class="t">the model writes</div><div class="s">get_weather("Milan"…)</div></div>
      <span class="loop-arrow">&rarr;</span>
      <div class="loop-node"><div class="t">the program runs it</div><div class="s">calls the real API</div></div>
      <span class="loop-arrow">&rarr;</span>
      <div class="loop-node"><div class="t">result pasted in</div><div class="s">"18°, clear"</div></div>
      <span class="loop-arrow">&#8630;</span>
      <div class="loop-node" style="border-color:var(--accent)"><div class="t">start again</div><div class="s">until it's done</div></div>
    </div>
  ` }
},

/* ----------------------------------- 43: leggere le notizie */
{
  cls: 'center',
  html: { it: `
    <div class="kicker">Nel mondo reale</div>
    <div class="big-statement">
      Di questa roba leggerete notizie<br>per il resto della vita.<br>
      <em>Ecco come leggerle.</em>
    </div>
  `,
          en: `
    <div class="kicker">In the real world</div>
    <div class="big-statement">
      You'll be reading news about this stuff<br>for the rest of your life.<br>
      <em>Here's how to read it.</em>
    </div>
  ` }
},

/* ----------------------------------- 44: è pubblicità */
{
  cls: 'top',
  html: { it: `
    <div class="kicker">Regola numero uno</div>
    <h2 style="margin-bottom:.4em">Buona parte è <em>pubblicità</em></h2>
    <div class="cols" style="align-items:start">
      <div>
        <p>Dietro questi annunci ci sono aziende che stanno spendendo cifre
           enormi e che devono continuare a raccoglierne. Gli annunci
           spettacolari fanno parte del modello di business.</p>
        <div class="logo-row">
          <div class="logo-chip gpu">NVIDIA<span class="sub">vende i chip a tutti</span></div>
          <div class="logo-chip cloud">Microsoft<span class="sub">compra chip, affitta data center</span></div>
          <div class="logo-chip cloud">Google<span class="sub">compra, affitta, e fa i modelli</span></div>
          <div class="logo-chip cloud">Amazon<span class="sub">compra, affitta</span></div>
          <div class="logo-chip cloud">Meta<span class="sub">compra, e regala i modelli</span></div>
          <div class="logo-chip lab">OpenAI<span class="sub">affitta da Microsoft</span></div>
          <div class="logo-chip lab">Anthropic<span class="sub">affitta da Amazon e Google</span></div>
        </div>
        <p style="font-size:.92em">Notate il giro: quasi tutti i soldi passano
           per <strong>gli stessi chip</strong>, e diverse di queste aziende
           sono contemporaneamente clienti, fornitori e investitori le une
           delle altre.</p>
      </div>
      <div class="stack">
        <div class="headline">
          <div class="src">la forma della notizia</div>
          <div class="hl">"Il modello ha provato a sfuggire ai ricercatori"</div>
        </div>
        <div class="headline">
          <div class="src">oppure</div>
          <div class="hl">"Ha parlato con una versione futura di sé stesso"</div>
        </div>
        <div class="card">
          <div class="tag">il trucco per smontarle</div>
          <p>Chiedetevi <strong>quanto è costato</strong>, non cosa ha ottenuto.
             Un risultato che costa dieci volte il premio che vince è una
             dimostrazione, non un'azienda.</p>
        </div>
        <div class="card">
          <div class="tag">e poi</div>
          <p>Chi me lo sta dicendo? Cosa ha bisogno che io creda? C'è un numero
             in questo titolo, e da dove salta fuori?</p>
        </div>
      </div>
    </div>
  `,
          en: `
    <div class="kicker">Rule number one</div>
    <h2 style="margin-bottom:.4em">A lot of it is <em>advertising</em></h2>
    <div class="cols" style="align-items:start">
      <div>
        <p>Behind these announcements are companies spending enormous sums
           of money who need to keep raising more. Spectacular announcements
           are part of the business model.</p>
        <div class="logo-row">
          <div class="logo-chip gpu">NVIDIA<span class="sub">sells the chips to everyone</span></div>
          <div class="logo-chip cloud">Microsoft<span class="sub">buys chips, rents out data centres</span></div>
          <div class="logo-chip cloud">Google<span class="sub">buys, rents out, and makes models</span></div>
          <div class="logo-chip cloud">Amazon<span class="sub">buys, rents out</span></div>
          <div class="logo-chip cloud">Meta<span class="sub">buys, and gives models away</span></div>
          <div class="logo-chip lab">OpenAI<span class="sub">rents from Microsoft</span></div>
          <div class="logo-chip lab">Anthropic<span class="sub">rents from Amazon and Google</span></div>
        </div>
        <p style="font-size:.92em">Notice the circle: nearly all the money goes
           through <strong>the same chips</strong>, and several of these
           companies are customers, suppliers and investors in each other
           all at once.</p>
      </div>
      <div class="stack">
        <div class="headline">
          <div class="src">the shape of the story</div>
          <div class="hl">"The model tried to escape from the researchers"</div>
        </div>
        <div class="headline">
          <div class="src">or</div>
          <div class="hl">"It talked to a future version of itself"</div>
        </div>
        <div class="card">
          <div class="tag">how to take them apart</div>
          <p>Ask <strong>what it cost</strong>, not what it achieved.
             A result that costs ten times the prize it wins is a
             demo, not a business.</p>
        </div>
        <div class="card">
          <div class="tag">and then</div>
          <p>Who is telling me this? What do they need me to believe? Is there
             a number in this headline, and where did it come from?</p>
        </div>
      </div>
    </div>
  ` }
},

/* ------------------------------------- 46: i problemi veri */
{
  cls: 'top',
  html: { it: `
    <h2 style="margin-bottom:.6em">I problemi davvero irrisolti hanno nomi noiosi</h2>
    <div class="card-grid c2">
      <div class="card">
        <div class="tag">si inventa le cose</div>
        <p>Il compito era "produci una parola <em>plausibile</em>", mai
           "produci una parola <em>vera</em>". Inventare con sicurezza non è
           un difetto attaccato sopra: è l'obiettivo che funziona esattamente
           come è stato scritto.</p>
      </div>
      <div class="card">
        <div class="tag">non impara da voi</div>
        <p>Gli assi sono congelati alla fine dell'addestramento. Tutto quello
           che sembra memoria è testo che viene silenziosamente rincollato
           nel prompt.</p>
      </div>
      <div class="card">
        <div class="tag">sui compiti lunghi si perde</div>
        <p>Le dimostrazioni funzionano. Cinquanta passi dopo, gli errori si
           sono accumulati e il sistema ha dimenticato cosa stava facendo.
           È qui che muore la maggior parte dei progetti veri.</p>
      </div>
      <div class="card">
        <div class="tag">il collo di bottiglia è la corrente</div>
        <p>Non i chip, non le idee. <strong>L'elettricità.</strong> Una nuova
           linea di trasmissione richiede dai 4 agli 8 anni nei paesi
           avanzati, e circa il <strong>20%</strong> dei data center
           progettati rischia di slittare.${R(5)}</p>
        <img src="img/datacenter.jpg" alt="Data center"
             style="width:100%;height:clamp(55px,8vmin,105px);object-fit:cover;border-radius:8px;margin-top:.5em;opacity:.8">
      </div>
    </div>
  `,
          en: `
    <h2 style="margin-bottom:.6em">The genuinely unsolved problems have boring names</h2>
    <div class="card-grid c2">
      <div class="card">
        <div class="tag">it makes things up</div>
        <p>The task was "produce a <em>plausible</em> word", never
           "produce a <em>true</em> word". Making things up confidently isn't
           a flaw bolted on top: it's the objective working exactly
           as it was written.</p>
      </div>
      <div class="card">
        <div class="tag">it doesn't learn from you</div>
        <p>The axes are frozen at the end of training. Everything that looks
           like memory is text being quietly pasted back into the
           prompt.</p>
      </div>
      <div class="card">
        <div class="tag">it gets lost on long tasks</div>
        <p>The demos work. Fifty steps later, the errors have piled up
           and the system has forgotten what it was doing.
           This is where most real projects die.</p>
      </div>
      <div class="card">
        <div class="tag">the bottleneck is power</div>
        <p>Not the chips, not the ideas. <strong>Electricity.</strong> A new
           transmission line takes 4 to 8 years in developed
           countries, and around <strong>20%</strong> of planned data
           centres risk being delayed.${R(5)}</p>
        <img src="img/datacenter.jpg" alt="Data centre"
             style="width:100%;height:clamp(55px,8vmin,105px);object-fit:cover;border-radius:8px;margin-top:.5em;opacity:.8">
      </div>
    </div>
  ` }
},

/* ------------------------------- 47: ma noi capiamo? */
{
  cls: 'center',
  html: { it: `
    <div class="kicker">La domanda che state per farmi</div>
    <h2 style="max-width:18em;margin-left:auto;margin-right:auto">
      Ma <em>capisce</em> davvero qualcosa?</h2>
    <p style="margin-top:1.1em">Ha costruito una struttura vera, che corrisponde
       davvero al significato. Quegli assi non sono finti: li possiamo trovare,
       indicare, e girare come manopole.</p>
    <p>E non ha nessuna idea di cosa sta dicendo, nessuna esperienza del dirlo,
       e nessun modo di sapere se è vero.</p>
    <div class="big-statement" style="margin-top:1.1em;font-size:clamp(1.1em,2.6vmin,1.9em)">
      Sono vere tutte e due insieme.
    </div>
    <div class="card" style="max-width:34em;margin:1.2em auto 0;border-color:rgba(167,139,250,.45)">
      <div class="tag" style="color:var(--region)">e comunque, la domanda difficile è un'altra</div>
      <p style="font-size:clamp(.95em,1.9vmin,1.3em)">Noi, <strong>capiamo
         davvero</strong> qualcosa? O siamo anche noi una macchina che ha visto
         moltissimi esempi e si è trovata i suoi assi?</p>
    </div>
  `,
          en: `
    <div class="kicker">The question you're about to ask me</div>
    <h2 style="max-width:18em;margin-left:auto;margin-right:auto">
      But does it really <em>understand</em> anything?</h2>
    <p style="margin-top:1.1em">It has built a real structure, one that really
       matches meaning. Those axes aren't fake: we can find them, point at
       them, and turn them like knobs.</p>
    <p>And it has no idea what it is saying, no experience of saying it,
       and no way of knowing whether it's true.</p>
    <div class="big-statement" style="margin-top:1.1em;font-size:clamp(1.1em,2.6vmin,1.9em)">
      Both are true at the same time.
    </div>
    <div class="card" style="max-width:34em;margin:1.2em auto 0;border-color:rgba(167,139,250,.45)">
      <div class="tag" style="color:var(--region)">and anyway, the hard question is a different one</div>
      <p style="font-size:clamp(.95em,1.9vmin,1.3em)">Do <strong>we</strong>
         really understand anything? Or are we also a machine that has seen an
         enormous number of examples and worked out its own axes?</p>
    </div>
  ` }
},

/* --------------------------------------------- 48: chiusura */
{
  cls: 'center',
  html: { it: `
    <div class="kicker">Torniamo da dove siamo partiti</div>
    <div class="big-statement" style="font-size:clamp(1.3em,3.2vmin,2.6em)">
      Non sta succedendo niente di soprannaturale.<br>
      Ed è <em>lo stesso</em> una delle cose più incredibili<br>
      che abbiamo mai costruito.
    </div>
    <p style="margin-top:1.4em;max-width:38em">Qualcuno ha capito che se
       costringi una macchina a fare un compito abbastanza noioso, abbastanza
       volte, quella è <strong>obbligata a inventarsi i propri assi</strong>
       per riuscirci. E che quegli assi finiscono per avere un significato.</p>
  `,
          en: `
    <div class="kicker">Back to where we started</div>
    <div class="big-statement" style="font-size:clamp(1.3em,3.2vmin,2.6em)">
      Nothing supernatural is going on here.<br>
      And it's <em>still</em> one of the most incredible things<br>
      we have ever built.
    </div>
    <p style="margin-top:1.4em;max-width:38em">Someone worked out that if you
       force a machine to do a boring enough chore, enough
       times, it is <strong>forced to invent its own axes</strong>
       to pull it off. And that those axes end up meaning something.</p>
  ` }
},

/* ------------------------------------------- 49: domande */
{
  cls: 'center',
  html: { it: `
    <h1 style="font-size:clamp(2em,6.6vmin,5em)">Domande</h1>
    <p style="margin-top:1em;font-size:clamp(.9em,1.9vmin,1.3em)">
      Comprese quelle che vi sembrano stupide.<br>
      Anzi, soprattutto quelle.</p>
  `,
          en: `
    <h1 style="font-size:clamp(2em,6.6vmin,5em)">Questions</h1>
    <p style="margin-top:1em;font-size:clamp(.9em,1.9vmin,1.3em)">
      Including the ones that feel stupid.<br>
      Especially those, actually.</p>
  ` }
},

/* ------------------------------------------- 50: fonti */
{
  cls: 'top',
  html: { it: `
    <a id="fonti"></a>
    <div class="kicker" style="margin-bottom:.4em">Se volete controllare</div>
    <h2 style="margin-bottom:.6em">Fonti</h2>
    <div class="sources">
      <ol>
        <li><b>Grattafiori et al.</b> (Meta AI), "The Llama 3 Herd of Models",
            arXiv:2407.21783, 2024. <span style="color:var(--ink-faint)">— i 15.600 miliardi di token</span></li>
        <li><b>Brown et al.</b>, "Language Models are Few-Shot Learners",
            arXiv:2005.14165, NeurIPS, 2020. <span style="color:var(--ink-faint)">— GPT-3, 300 miliardi di token</span></li>
        <li><b>Villalobos et al.</b>, "Will We Run Out of Data?",
            arXiv:2211.04325, ICML, 2024. <span style="color:var(--ink-faint)">— la stima del testo pubblico totale</span></li>
        <li><b>Patterson et al.</b>, "Carbon Emissions and Large Neural Network
            Training", arXiv:2104.10350, 2021. <span style="color:var(--ink-faint)">— i 1.287 MWh di GPT-3</span></li>
        <li><b>International Energy Agency</b>, "Energy and AI", IEA, Parigi, 2025.
            <span style="color:var(--ink-faint)">— reti elettriche e ritardi dei data center</span></li>
        <li><b>Mikolov et al.</b>, "Efficient Estimation of Word Representations
            in Vector Space", arXiv:1301.3781, 2013. <span style="color:var(--ink-faint)">— word2vec</span></li>
        <li><b>Mikolov, Yih, Zweig</b>, "Linguistic Regularities in Continuous
            Space Word Representations", NAACL-HLT, 2013.
            <span style="color:var(--ink-faint)">— re − uomo + donna = regina</span></li>
        <li><b>Ouyang et al.</b>, "Training Language Models to Follow
            Instructions with Human Feedback", arXiv:2203.02155, NeurIPS, 2022.
            <span style="color:var(--ink-faint)">— RLHF</span></li>
        <li><b>Templeton, Conerly et al.</b>, "Scaling Monosemanticity",
            Transformer Circuits Thread, Anthropic, 2024.
            <span style="color:var(--ink-faint)">— le direzioni-concetto, il Golden Gate</span></li>
        <li><b>Anthropic</b>, "Golden Gate Claude", 23 maggio 2024.
            <span style="color:var(--ink-faint)">— "Io sono il Golden Gate Bridge…"</span></li>
      </ol>
    </div>
  `,
          en: `
    <a id="fonti"></a>
    <div class="kicker" style="margin-bottom:.4em">If you want to check</div>
    <h2 style="margin-bottom:.6em">Sources</h2>
    <div class="sources">
      <ol>
        <li><b>Grattafiori et al.</b> (Meta AI), "The Llama 3 Herd of Models",
            arXiv:2407.21783, 2024. <span style="color:var(--ink-faint)">— the 15.6 trillion tokens</span></li>
        <li><b>Brown et al.</b>, "Language Models are Few-Shot Learners",
            arXiv:2005.14165, NeurIPS, 2020. <span style="color:var(--ink-faint)">— GPT-3, 300 billion tokens</span></li>
        <li><b>Villalobos et al.</b>, "Will We Run Out of Data?",
            arXiv:2211.04325, ICML, 2024. <span style="color:var(--ink-faint)">— the estimate of all public text</span></li>
        <li><b>Patterson et al.</b>, "Carbon Emissions and Large Neural Network
            Training", arXiv:2104.10350, 2021. <span style="color:var(--ink-faint)">— the 1,287 MWh of GPT-3</span></li>
        <li><b>International Energy Agency</b>, "Energy and AI", IEA, Paris, 2025.
            <span style="color:var(--ink-faint)">— power grids and data centre delays</span></li>
        <li><b>Mikolov et al.</b>, "Efficient Estimation of Word Representations
            in Vector Space", arXiv:1301.3781, 2013. <span style="color:var(--ink-faint)">— word2vec</span></li>
        <li><b>Mikolov, Yih, Zweig</b>, "Linguistic Regularities in Continuous
            Space Word Representations", NAACL-HLT, 2013.
            <span style="color:var(--ink-faint)">— king − man + woman = queen</span></li>
        <li><b>Ouyang et al.</b>, "Training Language Models to Follow
            Instructions with Human Feedback", arXiv:2203.02155, NeurIPS, 2022.
            <span style="color:var(--ink-faint)">— RLHF</span></li>
        <li><b>Templeton, Conerly et al.</b>, "Scaling Monosemanticity",
            Transformer Circuits Thread, Anthropic, 2024.
            <span style="color:var(--ink-faint)">— the concept-directions, the Golden Gate</span></li>
        <li><b>Anthropic</b>, "Golden Gate Claude", 23 May 2024.
            <span style="color:var(--ink-faint)">— "I am the Golden Gate Bridge…"</span></li>
      </ol>
    </div>
  ` }
},

/* =========================================================
   APPENDICE — slide di riserva, dopo le domande.
   Non fanno parte del filo del discorso: servono se qualcuno
   chiede, o se avanza tempo.
   ========================================================= */

/* ------------------------------- A1: le R di "strawberry" */
{
  html: { it: `
    <div class="appendix-badge">appendice</div>
    <div class="cols">
      <div>
        <div class="kicker">Se qualcuno chiede perché sbaglia cose banali</div>
        <h2>Quante R ci sono in "strawberry"?</h2>
        <p>I modelli sbagliano questa domanda continuamente. Sembra stupidità.
           In realtà è un'<strong>illusione ottica</strong>.</p>
        <p>Il modello non vede mai le lettere. Prima che succeda qualsiasi
           cosa, il testo viene tagliato in pezzi chiamati <em>token</em>:</p>
        <div class="tok-row">
          <span class="tok">straw</span><span class="tok">berry</span>
        </div>
        <p>Due atomi. Le R sono <strong>dentro</strong>, e il modello non ha
           modo di guardarci.</p>
      </div>
      <div class="stack">
        <div class="card">
          <div class="tag">quello che vedete voi</div>
          <div class="letters">
            <span class="letter">s</span><span class="letter">t</span>
            <span class="letter hit">r</span><span class="letter">a</span>
            <span class="letter">w</span><span class="letter">b</span>
            <span class="letter">e</span><span class="letter hit">r</span>
            <span class="letter hit">r</span><span class="letter">y</span>
          </div>
          <p>Dieci lettere. Tre R. Banale.</p>
        </div>
        <div class="card">
          <div class="tag">quello che vede il modello</div>
          <div class="letters">
            <span class="letter" style="width:auto;padding:0 .6em">straw</span>
            <span class="letter" style="width:auto;padding:0 .6em">berry</span>
          </div>
          <p>Due simboli. Nessuna lettera.</p>
        </div>
        <div class="card" style="border-color:rgba(251,191,36,.4)">
          <div class="tag" style="color:var(--accent)">la lezione generale</div>
          <p>Stessa causa per l'aritmetica ballerina, le rime storte, gli
             anagrammi falliti. <strong>Gli errori hanno una forma, e la
             forma vi dice com'è fatta la rappresentazione.</strong></p>
        </div>
      </div>
    </div>
  `,
          en: `
    <div class="appendix-badge">appendix</div>
    <div class="cols">
      <div>
        <div class="kicker">If someone asks why it gets easy things wrong</div>
        <h2>How many R's are there in "strawberry"?</h2>
        <p>Models get this wrong all the time. It looks like stupidity.
           It's actually an <strong>optical illusion</strong>.</p>
        <p>The model never sees the letters. Before anything else happens,
           the text is cut into pieces called <em>tokens</em>:</p>
        <div class="tok-row">
          <span class="tok">straw</span><span class="tok">berry</span>
        </div>
        <p>Two atoms. The R's are <strong>inside</strong>, and the model has no
           way to look in there.</p>
      </div>
      <div class="stack">
        <div class="card">
          <div class="tag">what you see</div>
          <div class="letters">
            <span class="letter">s</span><span class="letter">t</span>
            <span class="letter hit">r</span><span class="letter">a</span>
            <span class="letter">w</span><span class="letter">b</span>
            <span class="letter">e</span><span class="letter hit">r</span>
            <span class="letter hit">r</span><span class="letter">y</span>
          </div>
          <p>Ten letters. Three R's. Trivial.</p>
        </div>
        <div class="card">
          <div class="tag">what the model sees</div>
          <div class="letters">
            <span class="letter" style="width:auto;padding:0 .6em">straw</span>
            <span class="letter" style="width:auto;padding:0 .6em">berry</span>
          </div>
          <p>Two symbols. No letters.</p>
        </div>
        <div class="card" style="border-color:rgba(251,191,36,.4)">
          <div class="tag" style="color:var(--accent)">the general lesson</div>
          <p>Same cause for the wobbly arithmetic, the off rhymes, the failed
             anagrams. <strong>Mistakes have a shape, and the shape tells
             you how the representation is built.</strong></p>
        </div>
      </div>
    </div>
  ` }
}

];
