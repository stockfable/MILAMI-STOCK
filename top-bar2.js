/* MINAMI STOCK - shared top bar (with second line)
   Use in every page:  <div id="site-topbar"></div>  +  <script src="top-bar.js"></script>  */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  const LOGO = "https://i.ibb.co.com/xK8nP7KD/1000031217-removebg-preview.png";
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const act = (href) => (current === href ? ' class="active"' : "");

  /* ---------- MENU DATA ---------- */
  const appsLinks = [
    ["index.html", "fa-house", "Home"],
    ["stock-photo.html", "fa-image", "Stock Photos"],
    ["shop.html", "fa-bag-shopping", "Shop"],
    ["tools.html", "fa-screwdriver-wrench", "All Tools"],
    ["image-generator.html", "fa-wand-magic-sparkles", "AI Generator"],
    ["upload.html", "fa-cloud-arrow-up", "Upload"],
    ["dashboard.html", "fa-gauge", "Dashboard"],
    ["account.html", "fa-user", "Account"],
    ["about.html", "fa-circle-info", "About"],
    ["privacy.html", "fa-shield-halved", "Privacy"]
  ];

  const imgTools = [
    ["image-inhancer.html", "fa-wand-magic-sparkles", "Image Enhancer"],
    ["upscaler.html", "fa-up-right-and-down-left-from-center", "Upscaler"],
    ["converter.html", "fa-right-left", "Converter"],
    ["image-to-pdf.html", "fa-file-image", "Image to PDF"],
    ["qr-code.html", "fa-qrcode", "QR Code"]
  ];

  const textTools = [
    ["text-to-pdf.html", "fa-file-pdf", "Text to PDF"],
    ["word-counter.html", "fa-font", "Word Counter"],
    ["calculator.html", "fa-calculator", "Calculator"],
    ["age-calculator.html", "fa-cake-candles", "Age Calculator"]
  ];

  /* LINE 2 - add / remove options here */
  const subLinks = [
    ["portfolio.html", "fa-briefcase", "Portfolio"],
    ["dashboard.html", "fa-gauge", "Dashboard"],
    ["upload.html", "fa-cloud-arrow-up", "Upload"],
    ["tools.html", "fa-screwdriver-wrench", "All Tools"],
    ["stock-photo.html", "fa-image", "Stock Photos"],
    ["image-generator.html", "fa-wand-magic-sparkles", "AI Generator"]
  ];

  /* LINE 3 - photo-stock keywords / categories (links open stock-photo.html) */
  const keywordLinks = [
    ["stock-photo.html?cat=Trending", "fa-fire", "Trending"],
    ["stock-photo.html?cat=Nature", "fa-leaf", "Nature"],
    ["stock-photo.html?cat=Business", "fa-briefcase", "Business"],
    ["stock-photo.html?cat=Technology", "fa-microchip", "Technology"],
    ["stock-photo.html?cat=People", "fa-users", "People"],
    ["stock-photo.html?cat=Food", "fa-utensils", "Food"],
    ["stock-photo.html?cat=AI Generated", "fa-robot", "AI Generated"],
    ["stock-photo.html?cat=Animals", "fa-paw", "Animals"],
    ["stock-photo.html?cat=Sports", "fa-basketball", "Sports"],
    ["stock-photo.html?cat=Travel", "fa-plane", "Travel"],
    ["stock-photo.html?cat=Mockups", "fa-mobile-screen", "Mockups"],
    ["stock-photo.html?cat=Backgrounds", "fa-layer-group", "Backgrounds"],
    ["stock-photo.html?cat=Abstract", "fa-shapes", "Abstract"],
    ["stock-photo.html?cat=City", "fa-city", "City"],
    ["stock-photo.html?cat=Architecture", "fa-building", "Architecture"],
    ["stock-photo.html?cat=Fashion", "fa-shirt", "Fashion"],
    ["stock-photo.html?cat=Health", "fa-heart-pulse", "Health"],
    ["stock-photo.html?cat=Education", "fa-graduation-cap", "Education"],
    ["stock-photo.html?cat=Music", "fa-music", "Music"],
    ["stock-photo.html?cat=Cars", "fa-car", "Cars"],
    ["stock-photo.html?cat=Festival", "fa-champagne-glasses", "Festival"],
    ["stock-photo.html?cat=Space", "fa-user-astronaut", "Space"],
    ["stock-photo.html?cat=Flowers", "fa-seedling", "Flowers"],
    ["stock-photo.html?cat=Textures", "fa-border-all", "Textures"],
    ["stock-photo.html?cat=Posters", "fa-rectangle-ad", "Posters"],
    ["stock-photo.html?cat=Illustrations", "fa-pen-nib", "Illustrations"],
    ["stock-photo.html?cat=Icons", "fa-icons", "Icons"],
    ["stock-photo.html?cat=3D", "fa-cube", "3D"],
    ["stock-photo.html?cat=Typography", "fa-font", "Typography"],
    ["stock-photo.html?cat=Night", "fa-moon", "Night"]
  ];

  appsLinks.push(...imgTools, ...textTools);

  const mk = (arr) =>
    arr.map((l) => '<a href="' + l[0] + '"' + act(l[0]) + '><i class="fa-solid ' + l[1] + '"></i>' + l[2] + "</a>").join("");

  /* split a list into two lines (line 3 and line 4) */
  const splitRows = (arr) => {
    const h = Math.ceil(arr.length / 2);
    return [arr.slice(0, h), arr.slice(h)];
  };
  const kwRows = splitRows(keywordLinks);

  /* ---------- HTML ---------- */
  const html = `
<header class="top-nav">
  <div class="in">
    <div class="sidebar-bottom-menu" id="sidebarMenu">
      <button class="sidebar-trigger" id="appsBtn" aria-label="Menu"><i class="fa-solid fa-table-cells-large"></i></button>
      <div class="sidebar-dropdown" id="appsDrop">${mk(appsLinks)}</div>
    </div>

    <a class="logo-container" href="index.html">
      <img class="site-logo" src="${LOGO}" alt="">
      <span class="logo-text">MINAMI STOCK</span>
    </a>


    <div class="nav-right">
      <a class="shop-logo-btn" href="shop.html"><i class="fa-solid fa-bag-shopping"></i><span>Shop</span></a>

      <div class="auth-buttons" id="guestBox">
        <a class="btn-account" href="login.html" aria-label="Account"><i class="fa-solid fa-circle-user"></i></a>
        <a class="btn-signin" href="login.html">Sign in</a>
        <a class="btn-signup" href="register.html">Sign up</a>
      </div>

      <div class="account-wrapper" id="userBox">
        <button class="account-avatar" id="avatarBtn" type="button">U</button>
        <div class="account-dropdown" id="acctDrop">
          <div class="account-header">
            <div class="account-avatar-large" id="ddAv">U</div>
            <div class="account-info">
              <div class="account-name" id="ddName"></div>
              <div class="account-email" id="ddEmail"></div>
            </div>
          </div>
          <div class="account-divider"></div>
          <a class="account-menu-item" href="account.html"><i class="fa-solid fa-user"></i>My Account</a>
          <a class="account-menu-item" href="dashboard.html"><i class="fa-solid fa-gauge"></i>Dashboard</a>
          <a class="account-menu-item" href="upload.html"><i class="fa-solid fa-cloud-arrow-up"></i>Upload</a>
          <div class="account-divider"></div>
          <button class="account-menu-item" id="logoutBtn" type="button"><i class="fa-solid fa-right-from-bracket"></i>Sign out</button>
        </div>
      </div>
    </div>
  </div>
</header>
<nav class="sub-bar" id="subBar">
  <div class="sub-bar-in">${mk(subLinks)}</div>
</nav>
<nav class="sub-bar sub-bar-tools" id="keywordBar1">
  <div class="sub-bar-in" id="keywordList1">${mk(kwRows[0])}</div>
</nav>
<nav class="sub-bar sub-bar-tools" id="keywordBar2">
  <div class="sub-bar-in" id="keywordList2">${mk(kwRows[1])}</div>
</nav>`;

  /* ---------- STYLES ---------- */
  function injectStyles() {
    if (!document.querySelector('link[href*="font-awesome"],link[href*="fontawesome"]')) {
      const fa = document.createElement("link");
      fa.rel = "stylesheet";
      fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
      document.head.appendChild(fa);
    }

    const style = document.createElement("style");
    style.textContent = `
:root{--nav-h:60px}
.top-nav{
  position:sticky;top:0;z-index:1000;
  background:#0a0a0a;border-bottom:1px solid rgba(255,255,255,0.08);
  font-family:'Inter','Segoe UI',system-ui,-apple-system,sans-serif;
}
.top-nav{width:100%;box-sizing:border-box}
.top-nav .in{
  display:flex;align-items:center;justify-content:flex-start;gap:12px;
  width:100%;max-width:none;box-sizing:border-box;
  height:var(--nav-h);padding:0 16px;
}

/* SIDEBAR / APPS MENU */
.sidebar-bottom-menu{position:relative;flex:none}
.sidebar-trigger{
  width:38px;height:38px;border-radius:10px;
  display:grid;place-items:center;cursor:pointer;
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.12);
  color:#60a5fa;font-size:16px;transition:.2s;
}
.sidebar-trigger:hover{border-color:#fbbf24;color:#fbbf24}
.sidebar-dropdown{
  display:none;position:absolute;left:0;top:46px;
  width:240px;max-height:80vh;overflow-y:auto;
  background:#0a0a0a;border:1px solid rgba(255,255,255,0.1);
  border-radius:12px;padding:6px;
  box-shadow:0 14px 34px rgba(0,0,0,.8);z-index:9999;
}
.sidebar-dropdown.show{display:block}
.sidebar-dropdown a{
  display:flex;align-items:center;gap:12px;
  padding:11px 12px;border-radius:8px;
  font-size:14px;font-weight:600;
  color:#cbd5e1;text-decoration:none;
}
.sidebar-dropdown a:hover{background:rgba(251,191,36,0.1);color:#fbbf24}
.sidebar-dropdown a.active{
  background:rgba(251,191,36,0.12);
  box-shadow:inset 3px 0 #fbbf24;
  color:#fbbf24;
}
.sidebar-dropdown i{width:18px;text-align:center;color:#64748b;font-size:14px}
.sidebar-dropdown a:hover i,
.sidebar-dropdown a.active i{color:#fbbf24}

/* LOGO */
.logo-container{
  display:flex;align-items:center;gap:8px;
  font-weight:800;font-size:16px;white-space:nowrap;
  color:#fff;text-decoration:none;min-width:0;
}
.logo-text{
  overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
  background:linear-gradient(90deg,#fff,#fbbf24);
  -webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;
}
.site-logo{width:32px;height:32px;object-fit:contain;flex:none}

/* TOP LINKS */
.nav-links-top{display:flex;gap:2px;margin-left:6px;align-items:center}
.nav-links-top > a{
  padding:8px 12px;border-radius:8px;
  font-size:14px;font-weight:600;
  color:#cbd5e1;text-decoration:none;white-space:nowrap;
  transition:.2s;
}
.nav-links-top > a:hover{background:rgba(255,255,255,0.06);color:#fbbf24}
.nav-links-top > a i{margin-right:6px;font-size:12px}

/* DROPDOWN */
.nav-drop{position:relative}
.nav-drop-btn{
  display:flex;align-items:center;gap:7px;
  padding:8px 12px;border-radius:8px;
  font:inherit;font-size:14px;font-weight:600;
  color:#cbd5e1;background:transparent;border:0;cursor:pointer;
  white-space:nowrap;transition:.2s;
}
.nav-drop-btn:hover{background:rgba(255,255,255,0.06);color:#fbbf24}
.nav-drop-btn .caret{font-size:10px;opacity:.6;transition:transform .2s}
.nav-drop.open .nav-drop-btn .caret{transform:rotate(180deg)}

.nav-drop-panel{
  display:none;position:absolute;top:44px;left:0;
  min-width:230px;background:#0a0a0a;
  border:1px solid rgba(255,255,255,0.1);border-radius:12px;
  padding:6px;box-shadow:0 14px 34px rgba(0,0,0,.8);
  z-index:9999;
}
.nav-drop.open .nav-drop-panel{display:block}
.nav-drop-panel a{
  display:flex;align-items:center;gap:10px;
  padding:9px 12px;border-radius:8px;
  font-size:13.5px;font-weight:600;
  color:#cbd5e1;text-decoration:none;white-space:nowrap;
}
.nav-drop-panel a:hover{background:rgba(251,191,36,0.1);color:#fbbf24}
.nav-drop-panel a.active{
  background:rgba(251,191,36,0.12);
  box-shadow:inset 3px 0 #fbbf24;
  color:#fbbf24;
}
.nav-drop-panel i{width:18px;text-align:center;color:#64748b;font-size:13px}
.nav-drop-panel a:hover i,
.nav-drop-panel a.active i{color:#fbbf24}

/* RIGHT */
.nav-right{margin-left:auto !important;display:flex;align-items:center;gap:8px;flex:none}
.shop-logo-btn{
  display:flex;align-items:center;gap:7px;
  padding:8px 14px;border-radius:20px;
  font-weight:700;font-size:13.5px;
  background:rgba(251,191,36,0.12);
  border:1px solid rgba(251,191,36,0.3);
  color:#fbbf24;text-decoration:none;white-space:nowrap;
  transition:.2s;
}
.shop-logo-btn:hover{background:#fbbf24;color:#0a1628}

.auth-buttons{display:flex;align-items:center;gap:6px}
.btn-account{font-size:24px;color:#fbbf24;display:grid;place-items:center;text-decoration:none}
.btn-account:hover{color:#f59e0b}
.btn-signin,.btn-signup{
  padding:7px 16px;border-radius:20px;font-weight:700;font-size:13.5px;
  display:inline-block;text-align:center;text-decoration:none;
  white-space:nowrap;transition:.2s;
}
.btn-signin{
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.15);
  color:#fff;
}
.btn-signin:hover{background:rgba(255,255,255,0.12);border-color:#fbbf24;color:#fbbf24}
.btn-signup{
  background:#fbbf24;border:1px solid #fbbf24;color:#0a1628;
}
.btn-signup:hover{background:#f59e0b}

/* ACCOUNT */
.account-wrapper{display:none;position:relative}
.account-wrapper.show{display:block}
.account-avatar{
  width:36px;height:36px;border-radius:50%;
  border:2px solid rgba(255,255,255,0.15);
  background:#1a1a1a;
  display:grid;place-items:center;overflow:hidden;
  font-weight:700;font-size:14px;padding:0;cursor:pointer;color:#fff;
}
.account-avatar:hover{border-color:#fbbf24}
.account-avatar img{width:100%;height:100%;object-fit:cover}
.account-dropdown{
  display:none;position:absolute;right:0;top:46px;
  width:270px;max-width:calc(100vw - 24px);
  background:#0a0a0a;border:1px solid rgba(255,255,255,0.1);
  border-radius:12px;padding:8px;
  box-shadow:0 14px 34px rgba(0,0,0,.8);z-index:9999;
}
.account-dropdown.show{display:block}
.account-header{display:flex;align-items:center;gap:12px;padding:10px}
.account-avatar-large{
  width:44px;height:44px;border-radius:50%;
  background:#fbbf24;color:#0a1628;
  display:grid;place-items:center;
  font-weight:700;font-size:18px;overflow:hidden;flex:none;
}
.account-avatar-large img{width:100%;height:100%;object-fit:cover}
.account-info{min-width:0;flex:1}
.account-name{font-size:14px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#fff}
.account-email{font-size:12px;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.account-divider{height:1px;background:rgba(255,255,255,0.08);margin:6px 4px}
.account-menu-item{
  display:flex;align-items:center;gap:10px;
  width:100%;padding:10px 12px;border:0;background:none;
  border-radius:8px;font-size:14px;font-weight:600;
  text-align:left;cursor:pointer;color:#cbd5e1;text-decoration:none;
  transition:.15s;
}
.account-menu-item:hover{background:rgba(251,191,36,0.1);color:#fbbf24}
.account-menu-item i{width:18px;text-align:center;color:#64748b}
.account-menu-item:hover i{color:#fbbf24}

/* SECOND LINE (SUB BAR) */
.sub-bar{
  position:relative;z-index:999;
  background:#0a0a0a;border-bottom:1px solid rgba(255,255,255,0.08);
  font-family:'Inter','Segoe UI',system-ui,-apple-system,sans-serif;
}
.sub-bar-in{
  display:flex;align-items:center;gap:6px;
  padding:8px 16px;overflow-x:auto;white-space:nowrap;
  scrollbar-width:none;
}
.sub-bar-in::-webkit-scrollbar{display:none}
.sub-bar a{
  display:inline-flex;align-items:center;gap:7px;flex:none;
  padding:7px 14px;border-radius:20px;
  font-size:13px;font-weight:600;
  color:#cbd5e1;text-decoration:none;
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.1);
  transition:.2s;
}
.sub-bar-tools{background:#070707}
.sub-label{
  display:inline-flex;align-items:center;gap:7px;flex:none;
  padding:0 6px 0 2px;font-size:12px;font-weight:800;
  letter-spacing:.6px;text-transform:uppercase;color:#fbbf24;
}
.sub-bar a i{font-size:12px;color:#64748b}
.sub-bar a:hover,
.sub-bar a.active{
  background:rgba(251,191,36,0.12);
  border-color:rgba(251,191,36,0.4);
  color:#fbbf24;
}
.sub-bar a:hover i,
.sub-bar a.active i{color:#fbbf24}

/* RESPONSIVE */
@media (max-width:1100px){
  .nav-links-top > a{font-size:13px;padding:7px 9px}
  .nav-drop-btn{font-size:13px;padding:7px 9px}
}
@media (max-width:900px){
  .nav-links-top{display:none}
  .shop-logo-btn span{display:none}
  .shop-logo-btn{padding:8px 11px}
}
@media (max-width:640px){
  :root{--nav-h:54px}
  .top-nav .in{padding:0 10px;height:54px;gap:8px}
  .logo-text{font-size:14px;max-width:120px}
  .site-logo{width:28px;height:28px}
  .btn-signin{display:none}
  .btn-signup{padding:7px 12px;font-size:13px}
  .sidebar-trigger{width:36px;height:36px}
  .sub-bar-in{padding:7px 10px}
  .sub-bar a{padding:6px 12px;font-size:12.5px}
}
@media (max-width:420px){
  .logo-text{display:none}
  .btn-account{font-size:22px}
  .account-avatar{width:34px;height:34px}
}
`;
    document.head.appendChild(style);
  }

  function wireEvents() {
    const appsBtn = document.getElementById("appsBtn");
    const appsDrop = document.getElementById("appsDrop");
    const sidebarMenu = document.getElementById("sidebarMenu");
    if (appsBtn && appsDrop && sidebarMenu) {
      appsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeAll();
        appsDrop.classList.toggle("show");
      });
    }

    const navMenus = ["imgToolsMenu", "textToolsMenu"]
      .map(id => document.getElementById(id)).filter(Boolean);
    navMenus.forEach(menu => {
      const btn = menu.querySelector(".nav-drop-btn");
      if (!btn) return;
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const wasOpen = menu.classList.contains("open");
        closeAll();
        if (!wasOpen) menu.classList.add("open");
      });
    });

    const avatarBtn = document.getElementById("avatarBtn");
    const acctDrop = document.getElementById("acctDrop");
    const userBox = document.getElementById("userBox");
    if (avatarBtn && acctDrop && userBox) {
      avatarBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeAll();
        acctDrop.classList.toggle("show");
      });
    }

    function closeAll() {
      if (appsDrop) appsDrop.classList.remove("show");
      navMenus.forEach(m => m.classList.remove("open"));
      if (acctDrop) acctDrop.classList.remove("show");
    }

    document.addEventListener("click", (e) => {
      if (e.target.closest(".sidebar-bottom-menu")) return;
      if (e.target.closest(".nav-drop")) return;
      if (e.target.closest("#userBox")) return;
      closeAll();
    });

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        if (window.firebase && firebase.auth) {
          firebase.auth().signOut().then(() => location.href = "index.html")
            .catch(() => location.href = "index.html");
        } else {
          location.href = "index.html";
        }
      });
    }
  }

  /* Load real keywords/categories from Firestore "stockphoto" (falls back to the list above) */
  function loadKeywords() {
    try {
      if (!window.firebase || !firebase.firestore || !firebase.apps || !firebase.apps.length) return;
      firebase.firestore().collection("stockphoto").limit(100).get().then((snap) => {
        const cats = {}, keys = {};
        const add = (map, v) => {
          String(v || "").split(",").forEach((x) => {
            x = x.trim();
            if (x && x.length < 24) map[x] = (map[x] || 0) + 1;
          });
        };
        snap.forEach((doc) => {
          const d = doc.data() || {};
          add(cats, d.category || d.cat);
          [].concat(d.keywords || d.tags || []).forEach((k) => add(keys, k));
        });
        const top = (m, n) => Object.keys(m).sort((a, b) => m[b] - m[a]).slice(0, n);
        const have = {};
        keywordLinks.forEach((l) => { have[l[2].toLowerCase()] = 1; });
        const items = keywordLinks.slice();
        top(cats, 60).forEach((c) => {
          if (have[c.toLowerCase()]) return;
          have[c.toLowerCase()] = 1;
          items.push(["stock-photo.html?cat=" + encodeURIComponent(c), "fa-tag", c]);
        });
        top(keys, 16).forEach((k) => {
          if (have[k.toLowerCase()]) return;
          have[k.toLowerCase()] = 1;
          items.push(["stock-photo.html?q=" + encodeURIComponent(k), "fa-hashtag", k]);
        });
        const rows = splitRows(items);
        const b1 = document.getElementById("keywordList1");
        const b2 = document.getElementById("keywordList2");
        if (b1) b1.innerHTML = mk(rows[0]);
        if (b2) b2.innerHTML = mk(rows[1]);
      }).catch(() => {});
    } catch (e) {}
  }

  function loadFirebaseAuth() {
    if (!window.firebase || !firebase.auth) return;
    try {
      const auth = firebase.auth();
      auth.onAuthStateChanged((u) => {
        const guest = document.getElementById("guestBox");
        const userBox = document.getElementById("userBox");
        if (!guest || !userBox) return;

        if (u) {
          guest.style.display = "none";
          userBox.style.display = "block";
          userBox.classList.add("show");

          const n = u.displayName || (u.email || "U").split("@")[0];
          document.getElementById("ddName").textContent = n;
          document.getElementById("ddEmail").textContent = u.email || "";

          const initial = n[0].toUpperCase();
          const av = document.getElementById("avatarBtn");
          const avL = document.getElementById("ddAv");
          const face = u.photoURL ? `<img src="${u.photoURL}" alt="">` : initial;
          av.innerHTML = face;
          avL.innerHTML = face;
        } else {
          guest.style.display = "flex";
          userBox.style.display = "none";
          userBox.classList.remove("show");
        }
      });
    } catch (e) {
      console.warn("[top-bar] Firebase error:", e);
    }
  }

  ready(function () {
    const target = document.getElementById("site-topbar");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;

    const frag = document.createDocumentFragment();
    while (wrapper.firstElementChild) frag.appendChild(wrapper.firstElementChild);

    if (target) target.replaceWith(frag);
    else document.body.insertBefore(frag, document.body.firstChild);

    injectStyles();
    wireEvents();
    setTimeout(loadFirebaseAuth, 200);
    setTimeout(loadKeywords, 400);
  });
})();