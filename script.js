/* ============================================================
   AURA STORE — script.js  (multi-product, 4-step checkout)
   ============================================================ */

/* ── CONFIG ─────────────────────────────────────────────── */
const CONFIG = {
  TELEGRAM_BOT_TOKEN : 'YOUR_BOT_TOKEN_HERE',   // from @BotFather
  TELEGRAM_CHAT_ID   : 'YOUR_CHAT_ID_HERE',     // your personal or group chat id
  CURRENCY           : '৳',
};

/* ── PRODUCT CATALOG ─────────────────────────────────────── */
const PRODUCTS = [
  {
    id      : 1,
    name    : 'AURA Pro Headphones',
    tagline : 'Studio-grade ANC. 50-hour battery. Zero compromises.',
    price   : 12500,
    badge   : '🔥 Best Seller',
    rating  : 4.9,
    reviews : 2847,
    colors  : ['Midnight Black','Arctic White','Indigo Mist'],
    images  : [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=700&q=80',
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=700&q=80',
    ],
    specs: [
      ['Driver Size','40mm Custom'],['Freq. Response','20Hz – 40kHz'],
      ['ANC Depth','Up to -40dB'],['Battery Life','50hr (ANC on)'],
      ['Charge Time','90 min (full)'],['Bluetooth','5.3 — 20ms latency'],
      ['Weight','238g'],['Water Rating','IPX4'],
    ],
    description : 'AURA Pro delivers studio-grade sound with 40dB Active Noise Cancellation — built for creators, commuters, and anyone who demands more from their audio. Every detail, every layer, perfectly reproduced.',
    features : [
      { icon:'🎵', title:'Hi-Res Audio',      text:'40mm drivers with 20Hz–40kHz response.' },
      { icon:'🔇', title:'40dB ANC',           text:'AI-powered noise cancellation, 1000 reads/sec.' },
      { icon:'⚡', title:'50-hr Battery',       text:'10 min charge = 5 hours playback.' },
      { icon:'🪶', title:'238g Featherlight',  text:'Memory foam pads, titanium headband.' },
      { icon:'📡', title:'Bluetooth 5.3',      text:'20ms latency, 3 devices at once.' },
      { icon:'💧', title:'IPX4 Rated',         text:'Rain and sweat proof shell.' },
    ],
  },
  {
    id      : 2,
    name    : 'AURA Buds Pro',
    tagline : 'True wireless. Crystal clear. All-day comfort.',
    price   : 4500,
    badge   : '✨ New Arrival',
    rating  : 4.7,
    reviews : 1203,
    colors  : ['Jet Black','Pearl White','Rose Gold'],
    images  : [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=700&q=80',
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=700&q=80',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=700&q=80',
    ],
    specs: [
      ['Driver Size','10mm Dynamic'],['Freq. Response','20Hz – 20kHz'],
      ['ANC','Hybrid ANC'],['Battery (buds)','8hr per charge'],
      ['Battery (case)','32hr total'],['Bluetooth','5.2'],
      ['Weight (each)','5.4g'],['Water Rating','IPX5'],
    ],
    description : 'AURA Buds Pro are true wireless earbuds engineered for clarity and comfort. Hybrid ANC blocks up to 30dB of ambient noise while the ergonomic fit stays secure all day long.',
    features : [
      { icon:'🎶', title:'Crystal Clear Audio', text:'10mm drivers tuned for flat, accurate sound.' },
      { icon:'🔇', title:'Hybrid ANC',          text:'Up to 30dB noise reduction.' },
      { icon:'🔋', title:'32-hr Total Battery', text:'8hr on buds + 3 full charges in case.' },
      { icon:'🎙️', title:'6-Mic Array',          text:'Clear calls even in noisy environments.' },
      { icon:'📡', title:'Bluetooth 5.2',        text:'Instant pairing, stable connection.' },
      { icon:'💧', title:'IPX5 Rated',           text:'Sweat-proof for workouts.' },
    ],
  },
  {
    id      : 3,
    name    : 'AURA Bass Speaker',
    tagline : 'Room-filling sound. Portable design. Built to last.',
    price   : 8200,
    badge   : '💥 Top Rated',
    rating  : 4.8,
    reviews : 987,
    colors  : ['Gunmetal Grey','Forest Green','Coral Red'],
    images  : [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700&q=80',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=700&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
    ],
    specs: [
      ['Output Power','40W RMS'],['Freq. Response','50Hz – 20kHz'],
      ['Drivers','2× 20W full-range'],['Battery Life','24hr'],
      ['Charge Type','USB-C PD'],['Bluetooth','5.0'],
      ['Weight','920g'],['Water Rating','IPX7'],
    ],
    description : 'The AURA Bass Speaker packs 40W of room-filling audio into a rugged, portable body. With dual passive radiators and a tuned bass reflex port, every beat hits deep and every note rings true.',
    features : [
      { icon:'🔊', title:'40W Output',          text:'Dual 20W drivers + passive radiators.' },
      { icon:'🎸', title:'Deep Bass',            text:'Bass reflex port for sub-bass extension.' },
      { icon:'🔋', title:'24-hr Battery',        text:'Play all day, charge overnight.' },
      { icon:'🌊', title:'IPX7 Waterproof',      text:'Submersible up to 1m for 30 minutes.' },
      { icon:'🔗', title:'Stereo Pair',          text:'Link two units for true stereo.' },
      { icon:'🎙️', title:'Built-in Mic',          text:'Hands-free speakerphone.' },
    ],
  },
  {
    id      : 4,
    name    : 'AURA Smart Watch',
    tagline : 'Health. Fitness. Style. All on your wrist.',
    price   : 6800,
    badge   : '⚡ Limited Stock',
    rating  : 4.6,
    reviews : 654,
    colors  : ['Midnight Black','Silver','Olive Green'],
    images  : [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=80',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=700&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=700&q=80',
    ],
    specs: [
      ['Display','1.45″ AMOLED 390×390'],['Processor','Dual-core 1.2GHz'],
      ['Battery Life','7 days (typical)'],['Charge Time','60 min (full)'],
      ['Sensors','HR, SpO2, GPS, Gyro'],['Compatibility','Android 6+ / iOS 12+'],
      ['Weight','38g (no strap)'],['Water Rating','5ATM'],
    ],
    description : 'AURA Smart Watch tracks your heart rate, blood oxygen, sleep, and 100+ workout modes — all on a stunning 1.45″ AMOLED display. 7-day battery life means you wear it, not charge it.',
    features : [
      { icon:'❤️', title:'Health Suite',         text:'HR, SpO2, stress, sleep, menstrual tracking.' },
      { icon:'🏃', title:'100+ Sports Modes',    text:'Auto-detect running, cycling, swimming.' },
      { icon:'🛰️', title:'Built-in GPS',          text:'Route tracking without your phone.' },
      { icon:'📱', title:'Smart Notifications',   text:'Calls, messages, app alerts on wrist.' },
      { icon:'🔋', title:'7-Day Battery',         text:'Always-on display still lasts 3 days.' },
      { icon:'🌊', title:'5ATM Waterproof',       text:'Swimming and showering safe.' },
    ],
  },
];

/* ── ORDER STATE ─────────────────────────────────────────── */
const order = {
  product  : PRODUCTS[0],
  color    : PRODUCTS[0].colors[0],
  quantity : 1,
  customer : { name:'', phone:'', address:'' },
  payment  : '',
  txnId    : '',
  get total() { return this.product.price * this.quantity; },
};

/* ── ACTIVE PRODUCT STATE ────────────────────────────────── */
let activeProductId = 1;

/* ──────────────────────────────────────────────────────────
   BOOT — render catalog cards + hero
   ────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderProductCards();
  loadProduct(PRODUCTS[0], false);
  initNavbar();
  initScrollReveal();
  initFaq();
  initTilt();
});

/* ── PRODUCT CARDS ───────────────────────────────────────── */
function renderProductCards() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;
  grid.innerHTML = PRODUCTS.map(p => `
    <div class="prod-card ${p.id === activeProductId ? 'active' : ''}" id="pc-${p.id}" onclick="loadProduct(getProduct(${p.id}))">
      <div class="prod-card-badge">${p.badge}</div>
      <div class="prod-card-img">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
        <div class="prod-card-overlay">
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();startOrder(${p.id})">Buy Now</button>
        </div>
      </div>
      <div class="prod-card-body">
        <div class="prod-card-rating">★ ${p.rating} <span>(${p.reviews.toLocaleString()})</span></div>
        <h3 class="prod-card-name">${p.name}</h3>
        <p class="prod-card-tagline">${p.tagline}</p>
        <div class="prod-card-footer">
          <span class="prod-card-price">${CONFIG.CURRENCY} ${p.price.toLocaleString()}</span>
          <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();loadProduct(getProduct(${p.id}))">View Details</button>
        </div>
      </div>
    </div>
  `).join('');
}

function getProduct(id) { return PRODUCTS.find(p => p.id === id); }

/* ── LOAD PRODUCT INTO HERO / DETAILS / FEATURES ─────────── */
function loadProduct(product, animate = true) {
  activeProductId = product.id;
  order.product   = product;
  order.color     = product.colors[0];
  order.quantity  = 1;

  // Mark active card
  document.querySelectorAll('.prod-card').forEach(c => c.classList.remove('active'));
  const activeCard = document.getElementById(`pc-${product.id}`);
  if (activeCard) {
    activeCard.classList.add('active');
    activeCard.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' });
  }

  if (animate) {
    // Fade out hero content
    const heroContent = document.querySelector('.hero-text');
    const heroVisual  = document.querySelector('.hero-visual');
    heroContent && heroContent.classList.add('hero-swap');
    heroVisual  && heroVisual.classList.add('hero-swap');
    setTimeout(() => {
      updateHero(product);
      updateDetails(product);
      updateFeatures(product);
      heroContent && heroContent.classList.remove('hero-swap');
      heroVisual  && heroVisual.classList.remove('hero-swap');
    }, 280);
  } else {
    updateHero(product);
    updateDetails(product);
    updateFeatures(product);
  }
}

/* Update hero section */
function updateHero(p) {
  document.getElementById('hero-title').textContent         = p.name;
  document.getElementById('hero-tagline').textContent       = p.tagline;
  document.getElementById('hero-price-current').textContent = `${CONFIG.CURRENCY} ${p.price.toLocaleString()}`;
  document.getElementById('hero-rating').textContent        = `★ ${p.rating}`;
  document.getElementById('hero-reviews').textContent       = `${p.reviews.toLocaleString()} reviews`;

  // Main image
  const mainImg = document.getElementById('mainImage');
  if (mainImg) mainImg.src = p.images[0];

  // Thumbnails
  const thumbsWrap = document.getElementById('productThumbs');
  if (thumbsWrap) {
    thumbsWrap.innerHTML = p.images.map((src, i) => `
      <button class="thumb ${i === 0 ? 'active' : ''}" onclick="switchImage(this,'${src}')">
        <img src="${src.replace('w=700','w=150')}" alt="View ${i+1}" />
      </button>
    `).join('');
  }
}

/* Update details / specs */
function updateDetails(p) {
  const el = document.getElementById('detailProductName'); if (el) el.textContent = p.name;
  const desc = document.getElementById('detailDesc'); if (desc) desc.textContent = p.description;
  const specsEl = document.getElementById('specsGrid');
  if (specsEl) {
    specsEl.innerHTML = p.specs.map(([k,v]) =>
      `<div class="spec-row"><span class="spec-label">${k}</span><span class="spec-value">${v}</span></div>`
    ).join('');
  }
  const priceEl = document.getElementById('detailPrice'); if (priceEl) priceEl.textContent = `${CONFIG.CURRENCY} ${p.price.toLocaleString()}`;

  // Detail images
  const bigImg = document.getElementById('detailImgBig'); if (bigImg) bigImg.src = p.images[1] || p.images[0];
  const smImg  = document.getElementById('detailImgSmall'); if (smImg) smImg.src = p.images[2] || p.images[0];
}

/* Update features */
function updateFeatures(p) {
  const grid = document.getElementById('featuresGrid');
  if (!grid) return;
  grid.innerHTML = p.features.map((f, i) => `
    <div class="feature-card visible" data-delay="${i}">
      <div class="feature-icon-emoji">${f.icon}</div>
      <h3>${f.title}</h3>
      <p>${f.text}</p>
    </div>
  `).join('');
}

/* ── IMAGE GALLERY ───────────────────────────────────────── */
function switchImage(btn, src) {
  const mainImg = document.getElementById('mainImage');
  if (mainImg) mainImg.src = src;
  document.querySelectorAll('.thumb').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
}

/* ──────────────────────────────────────────────────────────
   NAVBAR
   ────────────────────────────────────────────────────────── */
function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', scrollY > 40));
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  }));
}

/* ── SCROLL REVEAL ───────────────────────────────────────── */
function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = Number(e.target.dataset.delay || 0) * 80;
        setTimeout(() => e.target.classList.add('visible'), delay);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.feature-card, .review-card, [data-scroll]').forEach(el => obs.observe(el));
}

/* ── PRODUCT CARD TILT ───────────────────────────────────── */
function initTilt() {
  const card = document.getElementById('productCard');
  if (!card) return;
  card.addEventListener('mousemove', e => {
    const r  = card.getBoundingClientRect();
    const rx = ((e.clientY - r.top  - r.height/2) / r.height) * 6;
    const ry = ((e.clientX - r.left - r.width /2) / r.width ) * -6;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
}

/* ── FAQ ─────────────────────────────────────────────────── */
function initFaq() {
  document.querySelectorAll('.faq-q').forEach(btn => btn.addEventListener('click', () => toggleFaq(btn)));
}
function toggleFaq(btn) {
  const item   = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ──────────────────────────────────────────────────────────
   ORDER FLOW  (4 steps)
   ────────────────────────────────────────────────────────── */

/* Open Step 1 */
function startOrder(productId) {
  if (productId) loadProduct(getProduct(productId), false);

  // Reset quantity
  order.quantity = 1;
  order.color    = order.product.colors[0];

  // Build color options
  const colWrap = document.getElementById('colorOptions');
  if (colWrap) {
    colWrap.innerHTML = order.product.colors.map((c, i) => `
      <button class="color-opt ${i===0?'active':''}" data-color="${c}" onclick="selectColor(this)">
        <span class="color-dot" style="${colorDotStyle(c)}"></span> ${c}
      </button>
    `).join('');
  }

  // Set product details in modal
  const img  = document.getElementById('s1-product-img');
  const name = document.getElementById('s1-product-name');
  const price= document.getElementById('s1-unit-price');
  if (img)   img.src           = order.product.images[0];
  if (name)  name.textContent  = order.product.name;
  if (price) price.textContent = `${CONFIG.CURRENCY} ${order.product.price.toLocaleString()} per unit`;

  document.getElementById('qtyDisplay').textContent = '1';
  updateStep1Summary();
  openModal('step1Overlay');
}

function colorDotStyle(name) {
  const map = {
    'Midnight Black':'background:#1a1a2e;',
    'Arctic White':'background:#dde1e7;border:1px solid #aaa;',
    'Indigo Mist':'background:#5C4BFF;',
    'Jet Black':'background:#111;',
    'Pearl White':'background:#f5f5f5;border:1px solid #ccc;',
    'Rose Gold':'background:#e8b4a0;',
    'Gunmetal Grey':'background:#4a4e57;',
    'Forest Green':'background:#2d6a4f;',
    'Coral Red':'background:#e63946;',
    'Silver':'background:#c0c0c0;',
    'Olive Green':'background:#6b7c45;',
  };
  return map[name] || 'background:#5C4BFF;';
}

function selectColor(btn) {
  document.querySelectorAll('.color-opt').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  order.color = btn.dataset.color;
  updateStep1Summary();
}

function changeQty(delta) {
  order.quantity = Math.max(1, Math.min(99, order.quantity + delta));
  document.getElementById('qtyDisplay').textContent = order.quantity;
  updateStep1Summary();
}

function updateStep1Summary() {
  setText('ms-color', order.color);
  setText('ms-qty',   order.quantity);
  setText('ms-total', fmt(order.total));
}

/* Step 1 → Step 2 */
function goToStep2() {
  transition('step1Overlay', 'step2Overlay');
  // populate recap
  setText('recap-color-badge', order.color);
  setText('recap-qty-badge',   `× ${order.quantity}`);
  setText('recap-total-badge', fmt(order.total));
  setVal('ci-name',''); setVal('ci-phone',''); setVal('ci-address','');
  hide('step2Error');
}

/* Step 2 submit → Step 3 */
function submitStep2(e) {
  e.preventDefault();
  const name    = val('ci-name').trim();
  const phone   = val('ci-phone').trim();
  const address = val('ci-address').trim();

  if (!name || !phone || !address) return showError('step2Error','Please fill in all fields.');
  if (!/^01[0-9]{9}$/.test(phone.replace(/[\s\-]/g,'')))
    return showError('step2Error','Enter a valid BD phone number (01XXXXXXXXX).');

  hide('step2Error');
  order.customer = { name, phone, address };
  transition('step2Overlay','step3Overlay');

  // populate step 3
  setText('payAmountDisplay', fmt(order.total));
  setEl('.bk-amt',   fmt(order.total));
  setEl('.ng-amt',   fmt(order.total));
  setEl('.bk-bank-amt', fmt(order.total));
  // final summary
  setText('fs-name',    name);
  setText('fs-phone',   phone);
  setText('fs-product', order.product.name);
  setText('fs-color',   order.color);
  setText('fs-qty',     order.quantity);
  setText('fs-total',   fmt(order.total));
  // clear txn fields
  setVal('pay-method-select','');
  setVal('txn-id-input','');
  hide('step3Error');
  hide('submitLoader');
  setAttr('confirmBtn','disabled',false);
  setText('confirmBtn','✓ Confirm Order');
  // default to bKash tab
  selectPayTab(document.querySelector('.pm-tab'), 'bkash');
}

/* Step 3 confirm */
async function confirmOrder() {
  const method = val('pay-method-select').trim();
  const txnId  = val('txn-id-input').trim();

  if (!method) return showError('step3Error','Please select the payment method you used.');
  if (txnId.length < 5) return showError('step3Error','Please enter a valid Transaction ID.');

  hide('step3Error');
  order.payment = method;
  order.txnId   = txnId;

  // Show loader
  show('submitLoader');
  setAttr('confirmBtn','disabled',true);
  setText('confirmBtn','Sending…');

  const ok = await sendTelegram();
  if (!ok) console.warn('Telegram notify failed — check BOT_TOKEN and CHAT_ID.');

  hide('submitLoader');
  transition('step3Overlay','successOverlay');
  showSuccessModal();
}

/* ── PAYMENT TAB ─────────────────────────────────────────── */
function selectPayTab(btn, panelId) {
  document.querySelectorAll('.pm-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.pm-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const panel = document.getElementById(`panel-${panelId}`);
  if (panel) panel.classList.add('active');
}

/* ── COPY NUMBER ─────────────────────────────────────────── */
function copyNum(text, btn) {
  navigator.clipboard.writeText(text).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
  }).finally ? null : null;
  const orig = btn.textContent;
  btn.textContent = '✓ Copied!';
  btn.classList.add('copied');
  setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 2000);
  showToast('Number copied to clipboard ✓');
}

/* ── TELEGRAM ────────────────────────────────────────────── */
async function sendTelegram() {
  const c = order.customer;
  const now = new Date().toLocaleString('en-BD', { timeZone:'Asia/Dhaka',
    day:'2-digit', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });

  const msg =
    `🛒 *New Order — AURA Store*\n\n` +
    `👤 *Name:* ${c.name}\n` +
    `📞 *Phone:* ${c.phone}\n` +
    `🏠 *Address:* ${c.address}\n\n` +
    `🛍️ *Product:* ${order.product.name}\n` +
    `🎨 *Color:* ${order.color}\n` +
    `🔢 *Quantity:* ${order.quantity}\n` +
    `💰 *Total:* ${fmt(order.total)}\n\n` +
    `💳 *Payment via:* ${order.payment}\n` +
    `🔑 *Transaction ID:* \`${order.txnId}\`\n\n` +
    `🕐 *Date & Time:* ${now}`;

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${CONFIG.TELEGRAM_BOT_TOKEN}/sendMessage`,
      { method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ chat_id: CONFIG.TELEGRAM_CHAT_ID, text: msg, parse_mode:'Markdown' }) }
    );
    const json = await res.json();
    return json.ok === true;
  } catch(e) { return false; }
}

/* ── SUCCESS ─────────────────────────────────────────────── */
function showSuccessModal() {
  const box = document.getElementById('successBox');
  if (!box) return;
  const c = order.customer;
  box.innerHTML =
    `<div><strong>Customer:</strong> ${c.name}</div>` +
    `<div><strong>Phone:</strong> ${c.phone}</div>` +
    `<div><strong>Product:</strong> ${order.product.name}</div>` +
    `<div><strong>Color:</strong> ${order.color}</div>` +
    `<div><strong>Qty:</strong> ${order.quantity}</div>` +
    `<div><strong>Total:</strong> ${fmt(order.total)}</div>` +
    `<div><strong>Paid via:</strong> ${order.payment}</div>` +
    `<div><strong>TxnID:</strong> ${order.txnId}</div>`;
}

/* ──────────────────────────────────────────────────────────
   MODAL HELPERS
   ────────────────────────────────────────────────────────── */
function openModal(id) {
  const o = document.getElementById(id);
  o.classList.add('active');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => o.classList.add('visible'));
}

function closeModal(id) {
  const o = document.getElementById(id);
  o.classList.remove('visible');
  setTimeout(() => { o.classList.remove('active'); document.body.style.overflow = ''; }, 300);
}

function closeIfOverlay(e, id) { if (e.target === e.currentTarget) closeModal(id); }

function closeAllModals() {
  ['step1Overlay','step2Overlay','step3Overlay','successOverlay'].forEach(closeModal);
}

function transition(fromId, toId) {
  closeModal(fromId);
  setTimeout(() => openModal(toId), 320);
}

function backToStep1() { transition('step2Overlay','step1Overlay'); }
function backToStep2() { transition('step3Overlay','step2Overlay'); }

/* ── CONTACT FORM ────────────────────────────────────────── */
function submitContact(e) {
  e.preventDefault();
  showToast('Message sent! We\'ll reply within 2 hours ✓');
  e.target.reset();
}

/* ── TOAST ───────────────────────────────────────────────── */
function showToast(msg, ms = 3000) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), ms);
}

/* ── UTILS ───────────────────────────────────────────────── */
function fmt(n) { return `${CONFIG.CURRENCY} ${n.toLocaleString('en-BD')}`; }
function val(id) { const el = document.getElementById(id); return el ? el.value : ''; }
function setVal(id, v) { const el = document.getElementById(id); if (el) el.value = v; }
function setText(id, v) { const el = document.getElementById(id); if (el) el.textContent = v; }
function setEl(sel, v) { document.querySelectorAll(sel).forEach(el => el.textContent = v); }
function setAttr(id, attr, v) { const el = document.getElementById(id); if (el) el[attr] = v; }
function show(id) { const el = document.getElementById(id); if (el) el.style.display = ''; }
function hide(id) { const el = document.getElementById(id); if (el) el.style.display = 'none'; }
function showError(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.style.display = 'block';
  el.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

/* ── ESC KEY ─────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  ['step1Overlay','step2Overlay','step3Overlay','successOverlay'].forEach(id => {
    const el = document.getElementById(id);
    if (el && el.classList.contains('active')) closeModal(id);
  });
});
