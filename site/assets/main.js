(() => {
  'use strict';
  const doc = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) doc.classList.add('no-motion');
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- toast ---------- */
  const toastEl = $('.toast');
  let toastT;
  const toast = (msg) => {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(() => toastEl.classList.remove('show'), 2200);
  };

  /* ---------- theme ---------- */
  const themeBtn = $('.theme-toggle');
  const setTheme = (t) => {
    doc.setAttribute('data-theme', t);
    try { localStorage.setItem('theme', t); } catch (e) {}
  };
  themeBtn && themeBtn.addEventListener('click', (e) => {
    const next = doc.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    if (!document.startViewTransition || reduce) return setTheme(next);
    const r = themeBtn.getBoundingClientRect();
    const x = r.left + r.width / 2, y = r.top + r.height / 2;
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const vt = document.startViewTransition(() => setTheme(next));
    vt.ready.then(() => {
      doc.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        { duration: 520, easing: 'cubic-bezier(.2,.7,.1,1)', pseudoElement: '::view-transition-new(root)' });
    }).catch(() => {});
  });

  /* ---------- mobile menu ---------- */
  const menuBtn = $('.menu-toggle'), menu = $('#mobile-menu');
  const closeMenu = () => { if (!menu) return; menu.hidden = true; menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.setAttribute('aria-label', 'Open menu'); };
  menuBtn && menuBtn.addEventListener('click', () => {
    const open = menu.hidden;
    menu.hidden = !open;
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  menu && menu.addEventListener('click', (e) => { if (e.target.closest('a')) closeMenu(); });
  addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  addEventListener('resize', () => { if (innerWidth > 1080) closeMenu(); }, { passive: true });

  /* ---------- scroll: progress + nav state ---------- */
  const nav = $('.nav'), prog = $('.progress span');
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - innerHeight;
      prog && prog.style.setProperty('--p', max > 0 ? (scrollY / max).toFixed(4) : 0);
      nav && nav.classList.toggle('scrolled', scrollY > 8);
      ticking = false;
    });
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- active nav link ---------- */
  const links = $$('.nav-links a');
  const byId = new Map(links.map((a) => [a.getAttribute('href').slice(1), a]));
  if ('IntersectionObserver' in window) {
    const so = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (en.isIntersecting) {
          links.forEach((l) => l.classList.remove('active'));
          const a = byId.get(en.target.id);
          a && a.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach((s) => so.observe(s));
  }

  /* ---------- reveal ---------- */
  const reveals = $$('.reveal');
  const groups = new Map();
  reveals.forEach((el) => {
    const p = el.parentElement;
    const i = groups.get(p) || 0;
    el.style.setProperty('--rd', Math.min(i, 6));
    groups.set(p, i + 1);
  });
  if (!('IntersectionObserver' in window) || reduce) {
    reveals.forEach((el) => el.classList.add('in'));
  } else {
    const ro = new IntersectionObserver((ents) => {
      ents.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); ro.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach((el) => ro.observe(el));
  }

  /* ---------- hero glow follows pointer ---------- */
  const hero = $('.hero'), glow = $('.hero-bg');
  if (hero && glow && matchMedia('(pointer: fine)').matches && !reduce) {
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      glow.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
      glow.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
    }, { passive: true });
  }

  /* ---------- count up ---------- */
  const counters = $$('[data-count]');
  const runCount = (el) => {
    const target = +el.dataset.count;
    if (reduce) { el.textContent = target; return; }
    const t0 = performance.now(), dur = 1100;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    el.textContent = '0';
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver((ents) => {
      ents.forEach((en) => { if (en.isIntersecting) { runCount(en.target); co.unobserve(en.target); } });
    }, { threshold: 0.6 });
    counters.forEach((c) => co.observe(c));
  }

  /* ---------- split-flap board ---------- */
  const ROWS = [
    ['WASH42', 'IOS', 'LIVE', 'https://apps.apple.com/us/app/wash42/id6803226300'],
    ['WASH42', 'ANDROID', 'LIVE', 'https://play.google.com/store/apps/details?id=com.wash42.app'],
    ['WASH42', 'WEB', 'LIVE', 'https://brave-smoke-0e0c01010.6.azurestaticapps.net'],
    ['HQ CRM', 'IOS', 'LIVE', 'https://apps.apple.com/us/app/headquarters-crm/id6819401164'],
    ['HQ CRM', 'ANDROID', 'IN REVIEW', ''],
    ['DUGAN', 'ANDROID', 'LIVE', 'https://play.google.com/store/apps/details?id=com.duganpsychiatry.app'],
    ['DUGAN', 'IOS', 'IN REVIEW', ''],
    ['HANI', 'IOS', 'LIVE', 'https://apps.apple.com/us/app/hani-by-rehani/id6830137760'],
    ['HANI', 'ANDROID', 'IN REVIEW', ''],
    ['PROPERTKT', 'ANDROID', 'BUILDING', 'https://www.propertkt.com'],
  ];
  const NAMES = { 'WASH42': 'Wash42', 'HQ CRM': 'HeadQuarters CRM', 'DUGAN': 'Dugan Psychiatry', 'HANI': 'Hani by Rehani', 'PROPERTKT': 'ProperTkt' };
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';
  const boardRows = $('[data-board]');
  const tiles = [];
  if (boardRows) {
    boardRows.innerHTML = '';
    ROWS.forEach(([app, plat, status, href], r) => {
      const row = document.createElement(href ? 'a' : 'div');
      row.className = 'brow st-' + (status === 'LIVE' ? 'live' : status === 'IN REVIEW' ? 'review' : 'dev');
      row.setAttribute('role', 'row');
      const label = `${NAMES[app]}, ${plat === 'IOS' ? 'iOS' : plat === 'WEB' ? 'web app' : 'Android'}: ${status.toLowerCase()}`;
      row.setAttribute('aria-label', label);
      if (href) { row.href = href; row.target = '_blank'; row.rel = 'noopener'; }
      [[app, 9], [plat, 7], [status, 9]].forEach(([txt, len], c) => {
        const cell = document.createElement('span');
        cell.className = 'bcell';
        cell.setAttribute('aria-hidden', 'true');
        if (c === 2) cell.classList.add('status');
        const padded = txt.padEnd(len, ' ');
        for (let i = 0; i < len; i++) {
          const f = document.createElement('span');
          f.className = 'flap';
          f.textContent = reduce ? padded[i] : ' ';
          cell.appendChild(f);
          tiles.push({ el: f, target: padded[i], row: r, idx: tiles.length, col: c * 10 + i, left: 0 });
        }
        row.appendChild(cell);
      });
      boardRows.appendChild(row);
    });

    let running = false;
    const animateTiles = (list) => {
      const minRow = Math.min(...list.map((t) => t.row));
      list.forEach((t) => { t.left = 3 + Math.floor(Math.random() * 4) + Math.floor((t.col % 10) / 3) + Math.floor(t.col / 10) * 2 + Math.floor((t.row - minRow) * 0.6); });
      if (running) return;
      running = true;
      let last = 0;
      const tick = (now) => {
        if (now - last < 46) { requestAnimationFrame(tick); return; }
        last = now;
        let busy = false;
        for (const t of tiles) {
          if (t.left > 0) {
            t.left--;
            busy = true;
            const ch = t.left === 0 ? t.target : CHARS[(Math.random() * CHARS.length) | 0];
            if (t.el.textContent !== ch) {
              t.el.textContent = ch;
              t.ab = !t.ab;
              t.el.className = t.ab ? 'flap fa' : 'flap fb';
            }
          }
        }
        if (busy) requestAnimationFrame(tick); else running = false;
      };
      requestAnimationFrame(tick);
    };

    if (!reduce && 'IntersectionObserver' in window) {
      let started = false, refresher;
      const bo = new IntersectionObserver((ents) => {
        ents.forEach((en) => {
          if (en.isIntersecting && !started) { started = true; setTimeout(() => animateTiles(tiles), 120); }
          if (en.isIntersecting) {
            clearInterval(refresher);
            refresher = setInterval(() => {
              if (document.hidden) return;
              const r = (Math.random() * ROWS.length) | 0;
              animateTiles(tiles.filter((t) => t.row === r));
            }, 5200);
          } else {
            clearInterval(refresher);
          }
        });
      }, { threshold: 0.2 });
      bo.observe(boardRows);
      boardRows.closest('.board').addEventListener('mouseenter', () => {
        const r = (Math.random() * ROWS.length) | 0;
        animateTiles(tiles.filter((t) => t.row === r));
      });
    } else if (!reduce) {
      animateTiles(tiles);
    }
  }

  /* ---------- clock ---------- */
  const clockEl = $('.clock');
  if (clockEl) {
    const fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Karachi' });
    const upd = () => { clockEl.textContent = fmt.format(new Date()); };
    upd();
    setInterval(upd, 20000);
  }

  /* ---------- sticky card offsets ---------- */
  $$('.card').forEach((c, i) => c.style.setProperty('--i', i));

  /* ---------- phone carousels ---------- */
  const DUR = 3600;
  $$('[data-carousel]').forEach((phone) => {
    const sets = JSON.parse(phone.dataset.sets);
    let setName = phone.dataset.set, idx = 0, timer = null, visible = false, hover = false;
    const screen = $('.phone-screen', phone);
    const card = phone.closest('.card');
    const dotsWrap = $('.dots', card);
    const alt = ($('img', screen) || {}).alt || '';
    const imgs = [];

    const preload = (src) => { const i = new Image(); i.decoding = 'async'; i.src = src; };
    const buildDots = () => {
      dotsWrap.innerHTML = '';
      sets[setName].forEach((_, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('role', 'tab');
        b.setAttribute('aria-label', `Screen ${i + 1}`);
        b.style.setProperty('--dur', DUR + 'ms');
        b.addEventListener('click', () => { show(i); restart(); });
        dotsWrap.appendChild(b);
      });
    };
    const markDot = () => {
      $$('button', dotsWrap).forEach((b, i) => {
        const on = i === idx;
        b.classList.toggle('on', false);
        b.setAttribute('aria-selected', String(on));
        if (on) { void b.offsetWidth; b.classList.add('on'); }
      });
    };
    const show = (i) => {
      idx = (i + sets[setName].length) % sets[setName].length;
      const src = sets[setName][idx];
      const cur = $('img:not(.out)', screen);
      if (cur && cur.getAttribute('src') === src) { markDot(); return; }
      const img = new Image();
      img.alt = alt;
      img.decoding = 'async';
      img.width = 600; img.height = 1300;
      img.className = 'out';
      img.src = src;
      const swap = () => {
        screen.appendChild(img);
        requestAnimationFrame(() => {
          img.classList.remove('out');
          if (cur) { cur.classList.add('out'); setTimeout(() => cur.remove(), 650); }
        });
      };
      img.complete ? swap() : img.addEventListener('load', swap, { once: true });
      markDot();
      preload(sets[setName][(idx + 1) % sets[setName].length]);
    };
    const stop = () => { clearInterval(timer); timer = null; };
    const restart = () => {
      stop();
      phone.classList.toggle('paused', reduce || hover || !visible);
      if (reduce || hover || !visible) return;
      timer = setInterval(() => show(idx + 1), DUR);
    };
    buildDots();
    markDot();

    card.addEventListener('mouseenter', () => { hover = true; restart(); });
    card.addEventListener('mouseleave', () => { hover = false; restart(); markDot(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((ents) => {
        ents.forEach((en) => { visible = en.isIntersecting; restart(); if (visible) markDot(); });
      }, { threshold: 0.35 }).observe(phone);
    }
    document.addEventListener('visibilitychange', () => { visible = !document.hidden && visible; restart(); });

    $$('[data-set-btn]', card).forEach((btn) => {
      btn.addEventListener('click', () => {
        setName = btn.dataset.setBtn;
        $$('[data-set-btn]', card).forEach((b) => { const on = b === btn; b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on)); });
        sets[setName].forEach(preload);
        show(idx);
        restart();
      });
    });
  });

  /* ---------- layers matrix ---------- */
  const matrix = $('.matrix');
  if (matrix) {
    const SUM = [
      'HeadQuarters CRM: six of seven layers, built solo.',
      'Wash42: apps, PWA, admin and releases built by me; API and cloud with a team.',
      'Hani: app, API, AI and store releases built solo; web and cloud shared.',
      'Dugan Psychiatry: core features with a team, plus the first Google Play release.',
      'ProperTkt: six layers built solo, store release on the way.',
    ];
    const note = $('.matrix-note');
    const base = note ? note.textContent : '';
    $$('td', matrix).forEach((td, i) => td.style.setProperty('--d', i));
    const clear = () => { matrix.classList.remove('hovering'); $$('.hl', matrix).forEach((c) => c.classList.remove('hl')); if (note) note.textContent = base; };
    const light = (col) => {
      clear();
      matrix.classList.add('hovering');
      $$(`[data-col="${col}"]`, matrix).forEach((c) => c.classList.add('hl'));
      if (note) note.textContent = SUM[col];
    };
    matrix.addEventListener('pointerover', (e) => { const c = e.target.closest('[data-col]'); if (c) light(c.dataset.col); });
    matrix.addEventListener('pointerleave', clear);
    $$('thead th[data-col]', matrix).forEach((th) => {
      th.tabIndex = 0;
      th.addEventListener('focus', () => light(th.dataset.col));
      th.addEventListener('blur', clear);
      th.addEventListener('click', () => light(th.dataset.col));
    });
    if ('IntersectionObserver' in window && !reduce) {
      const wrap = matrix.closest('.matrix-wrap');
      wrap.classList.remove('in');
      new IntersectionObserver((ents, o) => {
        ents.forEach((en) => { if (en.isIntersecting) { wrap.classList.add('in'); o.disconnect(); } });
      }, { threshold: 0.3 }).observe(wrap);
    }
  }

  /* ---------- Hani reply reader (rule layer) ---------- */
  const ASK = 170000, MAX = 160000, LAST = 140000;
  const STEPS = [LAST, 148000, 154000, 158000];
  const fmtK = (n) => 'KES ' + (n % 1000 === 0 ? (n / 1000) + 'k' : n.toLocaleString('en-US'));
  const readReply = (raw) => {
    const text = raw.trim();
    const low = text.toLowerCase();
    if (!text) return { kind: 'empty' };
    if (/\b(stop|unsubscribe|opt[\s-]?out)\b/.test(low)) return { kind: 'stop' };
    const amounts = [];
    const re = /(\d{1,3}(?:,\d{3})+|\d+(?:\.\d+)?)\s*(k\b|thousand\b)?/gi;
    let m;
    while ((m = re.exec(text))) {
      let v = parseFloat(m[1].replace(/,/g, ''));
      if (m[2]) v *= 1000;
      if (v >= 1000 && v < 100000000) amounts.push(Math.round(v));
    }
    const uniq = [...new Set(amounts)];
    const refuse = /(too low|not enough|can'?t|cannot|won'?t|no way|not possible|refuse|\bno\b)/.test(low);
    const accept = /\b(ok|okay|deal|accept(ed)?|agreed?|fine|yes|done|sold)\b/.test(low);
    if (uniq.length > 1) return { kind: 'multi', amounts: uniq };
    if (uniq.length === 1) {
      const p = uniq[0];
      if (refuse) return { kind: 'reject', amount: p };
      if (p === LAST && accept) return { kind: 'accept', amount: p };
      if (p === LAST && /(offer|thank|your|received|got)/.test(low)) return { kind: 'echo', amount: p };
      return { kind: 'price', amount: p };
    }
    if (accept && !refuse) return { kind: 'accept', amount: LAST };
    if (refuse) return { kind: 'reject' };
    return { kind: 'unclear' };
  };
  const decide = (r) => {
    switch (r.kind) {
      case 'stop': return { stop: ['bad', 'Opt-out found. A rule handles this, never a model.'], read: ['skip', 'Skipped: nothing else is read after STOP.'], check: ['skip', 'Skipped.'], act: ['bad', 'Hani stops messaging this agent and tells the seeker.'] };
      case 'empty': return { stop: ['', 'STOP always works. A rule decides it, never a model.'], read: ['', 'Type a reply above, or pick an example.'], check: ['', 'Any price must appear in the message itself.'], act: ['', 'Agree, counter, or hand back to the seeker.'] };
      case 'multi': return { stop: ['ok', 'No opt-out words.'], read: ['warn', 'Intent: price, but two different amounts (' + r.amounts.map(fmtK).join(' and ') + ').'], check: ['warn', 'Ambiguous: Hani won’t pick one for the agent.'], act: ['warn', 'Hani asks the seeker instead of guessing.'] };
      case 'echo': return { stop: ['ok', 'No opt-out words.'], read: ['warn', 'The only amount is Hani’s own ' + fmtK(r.amount) + ' offer.'], check: ['warn', 'An echo of Hani’s offer isn’t the agent’s price.'], act: ['warn', 'Not treated as agreement. Hani asks the agent to confirm.'] };
      case 'reject': return { stop: ['ok', 'No opt-out words.'], read: ['bad', 'Intent: reject' + (r.amount ? ' (' + fmtK(r.amount) + ' sits next to a refusal).' : '.')], check: ['ok', 'No new price taken from a refusal.'], act: ['warn', 'Hani tells the seeker and waits for their call.'] };
      case 'accept': return { stop: ['ok', 'No opt-out words.'], read: ['ok', 'Intent: accept Hani’s ' + fmtK(r.amount) + ' offer.'], check: ['ok', fmtK(r.amount) + ' matches Hani’s last offer.'], act: ['ok', 'Agreed at ' + fmtK(r.amount) + '. The seeker confirms before anything is signed.'] };
      case 'unclear': return { stop: ['ok', 'No opt-out words.'], read: ['warn', 'No price and no clear intent.'], check: ['warn', 'Nothing to validate.'], act: ['warn', 'Hani asks a follow-up instead of guessing.'] };
      case 'price': {
        const p = r.amount;
        const base = { stop: ['ok', 'No opt-out words.'], read: ['ok', 'Intent: price · ' + fmtK(p) + '.'], check: ['ok', fmtK(p).replace('KES ', '') + ' appears in the message.'] };
        if (p <= LAST) return { ...base, act: ['ok', 'At or below Hani’s offer: agreed at ' + fmtK(p) + '.'] };
        if (p > MAX) return { ...base, act: ['warn', fmtK(p) + ' is above the seeker’s max. The seeker decides.'] };
        const next = STEPS.find((s) => s > LAST) || MAX;
        if (p <= next) return { ...base, act: ['ok', 'Within Hani’s next step: agreed at ' + fmtK(p) + '.'] };
        return { ...base, act: ['ok', 'Inside the budget: Hani counters at ' + fmtK(next) + ', never revealing the max.'] };
      }
    }
  };
  const negForm = $('.neg-form');
  if (negForm) {
    const input = $('#neg-input');
    const items = $$('.pipeline li');
    const render = () => {
      const d = decide(readReply(input.value));
      items.forEach((li, i) => {
        const [state, msg] = d[li.dataset.step];
        const lamp = $('.lamp', li);
        lamp.className = 'lamp';
        li.classList.remove('active', 'skip');
        li.classList.toggle('skip', state === 'skip');
        const p = $('p', li);
        setTimeout(() => {
          if (state && state !== 'skip') lamp.classList.add(state);
          if (state && state !== 'skip') li.classList.add('active');
          p.textContent = msg;
        }, reduce ? 0 : i * 140);
      });
    };
    negForm.addEventListener('submit', (e) => { e.preventDefault(); render(); });
    $$('.presets button').forEach((b) => b.addEventListener('click', () => { input.value = b.textContent; render(); }));
    let deb;
    input.addEventListener('input', () => { clearTimeout(deb); deb = setTimeout(render, 450); });
    render();
  }

  /* ---------- eval gate ---------- */
  const GATE = {
    main: { hall: 4.4, false: 0.0, pass: true },
    pr: { hall: 11.4, false: 20.0, pass: false },
  };
  const gate = $('.gate');
  if (gate) {
    const verdict = $('.verdict', gate);
    const setGate = (k) => {
      const g = GATE[k];
      [['hall', g.hall, 5], ['false', g.false, 10]].forEach(([name, v, lim]) => {
        const m = $(`[data-metric="${name}"]`, gate);
        $('.meter-val', m).textContent = v.toFixed(1) + '%';
        $('.meter-fill', m).style.setProperty('--w', Math.min(100, v / 20 * 100) + '%');
        m.classList.toggle('over', v > lim);
      });
      verdict.dataset.verdict = g.pass ? 'pass' : 'fail';
      $('.verdict-title', verdict).textContent = g.pass ? 'Checks passed · merge allowed' : 'Blocked · merge refused';
      $('.verdict-text', verdict).innerHTML = g.pass
        ? '60 golden questions, judged by a model from a different provider. Citation accuracy 100%, about $0.0005 per query.'
        : 'CI: <code>hallucination rate 11.4% exceeds 5.0% threshold — blocking merge</code>. False answers also hit 20%.';
      $$('[data-gate]', gate).forEach((b) => { const on = b.dataset.gate === k; b.classList.toggle('on', on); b.setAttribute('aria-pressed', String(on)); });
    };
    $$('[data-gate]', gate).forEach((b) => b.addEventListener('click', () => setGate(b.dataset.gate)));
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((ents, o) => {
        ents.forEach((en) => { if (en.isIntersecting) { setGate('main'); o.disconnect(); } });
      }, { threshold: 0.4 }).observe(gate);
    } else setGate('main');
  }

  /* ---------- copy email ---------- */
  const copyBtn = $('.copy-email');
  copyBtn && copyBtn.addEventListener('click', async () => {
    const email = copyBtn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      toast('Email copied');
      const h = $('.copy-hint', copyBtn); h.textContent = 'Copied'; setTimeout(() => { h.textContent = 'Copy'; }, 1800);
    } catch (e) {
      location.href = 'mailto:' + email;
    }
  });
})();
