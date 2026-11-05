/* Animation d'accueil de 1kohm.fr (voir DESIGN.md, section « Mouvement »).
   Chargé uniquement par index.html, et seulement quand le script en ligne du <head> a posé la classe
   « intro » sur <html> : première visite, mouvement non réduit, ou ?intro dans l'adresse (tests).
   Traduction fidèle de Ressources/charte graphique/animation-accueil/mix3-reference.html :
   mêmes coordonnées (SVG 0 0 320 180, celles de l'emblème), mêmes durées, mêmes courbes, mêmes rouleaux.
   Pour rejouer : ouvrir https://1kohm.fr/?intro, ou effacer la clé localStorage « 1kohm-intro ». */
(function () {
  'use strict';
  var html = document.documentElement;
  if (!html.classList.contains('intro')) return;

  var END = 2200, HOLD = 400, FADE = 350, SKIP_FADE = 150, FONT_WAIT = 300, TOO_LATE = 3500;
  var NS = 'http://www.w3.org/2000/svg';
  var P = { L0: 20, R0: 300, T0: 12, B0: 118, lead: 40, squash: 0.06, Z0: 6, z0: 0, z1: 1200, c1: 1250, m0: 1350, m1: 1900, v0: 1750, s0: 1800 };
  var COLS = [107.2, 160, 212.8];

  function k(t, a, b) { return Math.max(0, Math.min(1, (t - a) / (b - a))); }
  function out(x) { return 1 - Math.pow(1 - x, 3); }
  function inout(x) { return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; }
  function lerp(a, b, p) { return a + (b - a) * p; }
  function rgb(c) {
    c = c.trim();
    if (/^#[0-9a-f]{3}$/i.test(c)) c = '#' + c[1] + c[1] + c[2] + c[2] + c[3] + c[3];
    if (!/^#[0-9a-f]{6}$/i.test(c)) return null;
    return [1, 3, 5].map(function (i) { return parseInt(c.substr(i, 2), 16); });
  }

  function el(name, attrs, parent, text) {
    var n = document.createElementNS(NS, name);
    for (var a in attrs) n.setAttribute(a, attrs[a]);
    if (text != null) n.textContent = text;
    if (parent) parent.appendChild(n);
    return n;
  }

  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, { once: true });
    else fn();
  }

  function abort() { html.classList.remove('intro'); }

  ready(function () {
    if (performance.now() > TOO_LATE) { abort(); return; }

    var cs = getComputedStyle(html);
    var INK = rgb(cs.getPropertyValue('--ink')), ACC = rgb(cs.getPropertyValue('--accent'));
    var inkStr = cs.getPropertyValue('--ink').trim(), accStr = cs.getPropertyValue('--accent').trim();
    function mix(p) {
      if (!INK || !ACC) return p < 0.5 ? inkStr : accStr;
      return '#' + INK.map(function (v, i) { return Math.round(lerp(v, ACC[i], p)).toString(16).padStart(2, '0'); }).join('');
    }

    /* Calque */
    var layer = document.createElement('div');
    layer.className = 'intro-calque';
    layer.setAttribute('aria-hidden', 'true');
    var svg = el('svg', { viewBox: '0 0 320 180', focusable: 'false' }, layer);
    var clip = el('clipPath', { id: 'intro-rouleau' }, el('defs', {}, svg));
    el('rect', { x: 64, y: 27, width: 192, height: 76 }, clip);
    var g = el('g', {}, svg);
    var stroke = { stroke: 'currentColor', 'stroke-width': 3 };
    function line(extra) { var o = { x1: 0, y1: 0, x2: 0, y2: 0 }; for (var a in stroke) o[a] = stroke[a]; for (a in extra) o[a] = extra[a]; return el('line', o, g); }
    var lead1 = line({}), lead2 = line({});
    var top = line({ 'stroke-linecap': 'square' }), bot = line({ 'stroke-linecap': 'square' });
    var v1 = line({ x1: 290, y1: 8, x2: 290, y2: 32, 'stroke-dasharray': 24 });
    var v2 = line({ x1: 30, y1: 122, x2: 30, y2: 98, 'stroke-dasharray': 24 });
    var sL = el('rect', {}, g), sR = el('rect', {}, g);
    var r1 = el('text', { x: 160, 'font-size': 15, 'font-family': 'IBM Plex Mono, monospace', 'font-weight': 500, fill: 'currentColor', 'text-anchor': 'middle' }, g, 'R1');
    var reel = el('g', { 'clip-path': 'url(#intro-rouleau)', 'font-family': 'IBM Plex Mono, monospace', 'font-weight': 500, fill: 'currentColor', 'text-anchor': 'middle' }, g);
    var digits = COLS.map(function (x) {
      var list = [];
      for (var d = 0; d < 10; d++) list.push(el('text', { x: x, y: 96, 'font-size': 88, opacity: 0 }, reel, String(d)));
      return list;
    });
    var sig = el('text', { x: 164, y: 160, 'text-anchor': 'middle', 'font-family': 'IBM Plex Sans, sans-serif', 'font-weight': 400, 'font-size': 24, 'letter-spacing': 9, fill: 'currentColor', opacity: 0 }, svg, '1kohm');

    /* Une image de l'animation, d'après renderVals() de la référence */
    function col(list, v) {
      for (var d = 0; d < 10; d++) {
        var off = ((d - v) % 10 + 10) % 10; if (off > 5) off -= 10;
        list[d].setAttribute('opacity', Math.abs(off) < 1.5 ? 1 : 0);
        list[d].setAttribute('transform', 'translate(0 ' + off * 100 + ')');
      }
    }
    function frame(t) {
      svg.style.transform = 'scale(' + lerp(P.Z0, 1, inout(k(t, P.z0, P.z1))) + ')';
      var cp = out(k(t, 0, P.c1));
      col(digits[0], 1 + 20 * (cp - 1)); col(digits[1], 0 + 40 * (cp - 1)); col(digits[2], 2 + 100 * (cp - 1));
      var m = inout(k(t, P.m0, P.m1));
      var Lx = lerp(P.L0, 57, m), Rx = lerp(P.R0, 263, m), Ty = lerp(P.T0, 24, m), By = lerp(P.B0, 106, m), w = lerp(3, 18, m);
      var sc = mix(m), rx = lerp(0, 3, m);
      [[sL, Lx], [sR, Rx]].forEach(function (s) {
        s[0].setAttribute('x', s[1] - w / 2); s[0].setAttribute('y', Ty); s[0].setAttribute('width', w);
        s[0].setAttribute('height', By - Ty); s[0].setAttribute('rx', rx); s[0].setAttribute('fill', sc);
      });
      var ty = lerp(P.T0, 8, m), by = lerp(P.B0, 122, m), ly = lerp((P.T0 + P.B0) / 2, 65, m), lo = 1 - k(t, P.m0, P.m0 + 350);
      setLine(top, lerp(P.L0, 266, m), ty, lerp(P.R0, 290, m), ty);
      setLine(bot, lerp(P.L0, 30, m), by, lerp(P.R0, 54, m), by);
      setLine(lead1, lerp(P.L0 - P.lead, Lx, m), ly, Lx, ly); lead1.setAttribute('opacity', lo);
      setLine(lead2, Rx, ly, lerp(P.R0 + P.lead, Rx, m), ly); lead2.setAttribute('opacity', lo);
      r1.setAttribute('y', P.T0 - 8); r1.setAttribute('opacity', 1 - k(t, P.m0, P.m0 + 200));
      var vOff = 24 * (1 - out(k(t, P.v0, P.v0 + 250)));
      v1.setAttribute('stroke-dashoffset', vOff); v2.setAttribute('stroke-dashoffset', vOff);
      g.setAttribute('transform', 'translate(160 65) scale(' + (1 - P.squash * Math.sin(Math.PI * m)) + ') translate(-160 -65)');
      var s = out(k(t, P.s0, P.s0 + 350));
      sig.setAttribute('opacity', s); sig.setAttribute('transform', 'translate(0 ' + 6 * (1 - s) + ')');
    }
    function setLine(n, x1, y1, x2, y2) { n.setAttribute('x1', x1); n.setAttribute('y1', y1); n.setAttribute('x2', x2); n.setAttribute('y2', y2); }

    frame(0);
    document.body.insertBefore(layer, document.body.firstChild);
    html.classList.remove('intro'); /* le calque prend le relais du cache CSS */

    /* Fermeture : fondu puis retrait du DOM */
    var raf = 0, timer = 0, closing = false;
    var EVENTS = ['pointerdown', 'touchstart', 'keydown', 'wheel']; /* pas « scroll » : la restauration du défilement au rechargement fermerait le calque */
    function close(fast) {
      if (closing) return;
      closing = true;
      cancelAnimationFrame(raf); clearTimeout(timer);
      EVENTS.forEach(function (e) { window.removeEventListener(e, skip, true); });
      layer.style.transitionDuration = (fast ? SKIP_FADE : FADE) + 'ms';
      layer.style.opacity = '0';
      var gone = false;
      function remove() { if (gone) return; gone = true; layer.remove(); }
      layer.addEventListener('transitionend', remove, { once: true });
      setTimeout(remove, (fast ? SKIP_FADE : FADE) + 100);
    }
    function skip() { close(true); }
    EVENTS.forEach(function (e) { window.addEventListener(e, skip, { capture: true, passive: true }); });

    /* Attendre la police mono (300 ms au plus) pour que les chiffres ne changent pas de police en route */
    var fontReady = document.fonts && document.fonts.load
      ? Promise.race([
          Promise.all([document.fonts.load('500 88px "IBM Plex Mono"'), document.fonts.load('400 24px "IBM Plex Sans"')]),
          new Promise(function (r) { setTimeout(r, FONT_WAIT); })
        ]).catch(function () {})
      : Promise.resolve();

    fontReady.then(function () {
      if (closing) return;
      var start = 0;
      function step(now) {
        if (!start) start = now;
        var t = Math.min(now - start, END);
        frame(t);
        if (t < END) raf = requestAnimationFrame(step);
        else { raf = 0; timer = setTimeout(function () { close(false); }, HOLD); }
      }
      raf = requestAnimationFrame(step);
    });
  });
})();
