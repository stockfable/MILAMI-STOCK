/* ================================================================
   top-bar.js — MINAMI STOCK Universal Top Navigation
   Includes: Image Tools dropdown + mobile friendly
   ================================================================ */
(function () {
  if (window.__msTopbarLoaded) return;
  window.__msTopbarLoaded = true;

  const LOGO = "https://i.ibb.co.com/MDW6DpCS/1000032434-removebg-preview.png";
  const current = (location.pathname.split("/").pop() || "index.html");
  const isActive = (p) => current === p ? "active" : "";

  /* ---------- dropdown state for mobile tap ---------- */
  const html = `
<header class="top-nav">
  <div class="in">

    <!-- LEFT -->
    <div class="nav-left">
      <div class="sidebar-bottom-menu" id="sidebarMenu">
        <button class="sidebar-trigger" id="appsBtn" title="Apps" aria-label="Apps">
          <i class="fas fa-th"></i>
        </button>
        <div class="sidebar-dropdown" id="appsDrop">
          <a href="index.html" class="${isActive("index.html")}"><i class="fas fa-home"></i> Home</a>
          <a href="stock-photo.html" class="${isActive("stock-photo.html")}"><i class="fas fa-images"></i> Stock Photos</a>
          <a href="tools.html" class="${isActive("tools.html")}"><i class="fas fa-th-large"></i> Tools</a>
          <a href="about.html" class="${isActive("about.html")}"><i class="fas fa-folder"></i> About</a>
          <a href="shop.html" class="${isActive("shop.html")}"><i class="fas fa-shopping-bag"></i> Shop</a>
          <a href="login.html" class="${isActive("login.html")}"><i class="fas fa-plus-circle"></i> Login</a>
          <a href="privacy.html" class="${isActive("privacy.html")}"><i class="fas fa-question-circle"></i> Privacy</a>
        </div>
      </div>

      <a href="index.html" class="logo-container">
        <img src="${LOGO}" alt="MINAMI STOCK" class="site-logo"
             onerror="this.onerror=null;this.src='logo.png'">
        <span class="logo-text">MINAMI STOCK</span>
      </a>

      <!-- TOP NAV LINKS -->
      <div class="nav-links-top">

        <a href="dashboard.html"><i class="fas fa-gauge"></i>Dashboard</a>
        <a href="upload.html"><i class="fas fa-cloud-arrow-up"></i>Upload</a>
        <a href="portfolio.html"><i class="fas fa-briefcase"></i>Portfolio</a>

        <!-- IMAGE TOOLS DROPDOWN -->
        <div class="nav-drop" id="imgToolsMenu">
          <button class="nav-drop-btn" id="imgToolsBtn" type="button">
            <i class="fas fa-image"></i> Image Tools <i class="fas fa-chevron-down caret"></i>
          </button>
          <div class="nav-drop-panel" id="imgToolsPanel">
            <a href="image-resizer.html" class="${isActive("image-resizer.html")}">
              <i class="fas fa-expand"></i> Image Resizer
            </a>
            <a href="cropper.html" class="${isActive("cropper.html")}">
              <i class="fas fa-crop-simple"></i> Image Cropper
            </a>
            <a href="compressor.html" class="${isActive("compressor.html")}">
              <i class="fas fa-compress"></i> Compressor
            </a>
            <a href="converter.html" class="${isActive("converter.html")}">
              <i class="fas fa-right-left"></i> Converter
            </a>
            <a href="bg-remover.html" class="${isActive("bg-remover.html")}">
              <i class="fas fa-eraser"></i> BG Remover
            </a>
            <a href="watermark.html" class="${isActive("watermark.html")}">
              <i class="fas fa-droplet"></i> Watermark
            </a>
            <a href="filters.html" class="${isActive("filters.html")}">
              <i class="fas fa-wand-magic-sparkles"></i> Filters
            </a>
            <a href="color-palette.html" class="${isActive("color-palette.html")}">
              <i class="fas fa-palette"></i> Color Palette
            </a>
          </div>
        </div>

        <!-- ALL TOOLS -->
        <div class="nav-drop" id="allToolsMenu">
          <button class="nav-drop-btn" id="allToolsBtn" type="button">
            <i class="fas fa-th-large"></i> All Tools <i class="fas fa-chevron-down caret"></i>
          </button>
          <div class="nav-drop-panel" id="allToolsPanel">
            <a href="tools.html" class="${isActive("tools.html")}">
              <i class="fas fa-list"></i> All Tools
            </a>
            <a href="calculator.html" class="${isActive("calculator.html")}">
              <i class="fas fa-calculator"></i> Calculator
            </a>
            <a href="image-enhancer.html" class="${isActive("image-enhancer.html")}">
              <i class="fas fa-wand-sparkles"></i> Image Enhancer
            </a>
            <a href="upscaler.html" class="${isActive("upscaler.html")}">
              <i class="fas fa-up-right-and-down-left-from-center"></i> Upscaler
            </a>
            <a href="image-to-pdf.html" class="${isActive("image-to-pdf.html")}">
              <i class="fas fa-file-image"></i> Image to PDF
            </a>
            <a href="text-to-pdf.html" class="${isActive("text-to-pdf.html")}">
              <i class="fas fa-file-pdf"></i> Text to PDF
            </a>
            <a href="qr-code.html" class="${isActive("qr-code.html")}">
              <i class="fas fa-qrcode"></i> QR Code
            </a>
            <a href="word-counter.html" class="${isActive("word-counter.html")}">
              <i class="fas fa-font"></i> Word Counter
            </a>
          </div>
        </div>

      </div>
    </div>

    <!-- RIGHT -->
    <div class="nav-right">
      <a href="shop.html" class="shop-logo-btn">
        <i class="fas fa-shopping-bag"></i><span>Shop</span>
      </a>

      <div id="guestBox" class="auth-buttons">
        <a href="account.html" class="btn-account" title="Account" aria-label="Account">
          <i class="fas fa-user-circle"></i>
        </a>
        <a href="login.html" class="btn-signin">Sign In</a>
        <a href="register.html" class="btn-signup">Sign Up</a>
      </div>

      <div class="account-wrapper" id="userBox">
        <button class="account-avatar" id="avatarBtn" aria-label="Account">
          <i class="fas fa-user"></i>
        </button>
        <div class="account-dropdown" id="acctDrop">
          <div class="account-header">
            <div class="account-avatar-large" id="ddAv"><i class="fas fa-user"></i></div>
            <div class="account-info">
              <p class="account-name" id="ddName">User</p>
              <p class="account-email" id="ddEmail"></p>
            </div>
          </div>
          <div class="account-divider"></div>
          <a href="account.html" class="account-menu-item"><i class="fas fa-user-circle"></i> My Account</a>
          <a href="dashboard.html" class="account-menu-item"><i class="fas fa-gauge"></i> Dashboard</a>
          <a href="upload.html" class="account-menu-item"><i class="fas fa-cloud-arrow-up"></i> Upload</a>
          <a href="portfolio.html" class="account-menu-item"><i class="fas fa-briefcase"></i> Portfolio</a>
          <div class="account-divider"></div>
          <button class="account-menu-item" id="logoutBtn"><i class="fas fa-sign-out-alt"></i> Sign out</button>
        </div>
      </div>
    </div>

  </div>
</header>
`;

  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  function injectStyles() {
    if (document.getElementById("top-bar-styles")) return;
    const style = document.createElement("style");
    style.id = "top-bar-styles";
    style.textContent = `
header.top-nav{
  border-bottom:1px solid var(--line,#e1e1e1);
  background:var(--bg,#fff);
  position:sticky;top:0;z-index:1000;
  font-family:'Segoe UI',system-ui,-apple-system,Roboto,Arial,sans-serif;
  color:var(--ink,inherit);
}
.top-nav .in{
  max-width:1400px;margin:0 auto;
  padding:0 16px;height:56px;
  display:flex;align-items:center;gap:12px;
}

/* LEFT */
.nav-left{display:flex;align-items:center;gap:10px;min-width:0;flex:1}
.sidebar-bottom-menu{position:relative;flex:none}
.sidebar-trigger{
  width:38px;height:38px;border-radius:9px;
  border:1px solid var(--line,#e1e1e1);
  background:var(--bg,#fff);font-size:15px;
  cursor:pointer;color:inherit;display:grid;place-items:center;
}
.sidebar-trigger:hover{background:var(--soft,#f5f5f5)}
.sidebar-dropdown{
  display:none;position:absolute;top:46px;left:0;
  min-width:220px;background:var(--bg,#fff);
  border:1px solid var(--line,#e1e1e1);border-radius:12px;
  padding:6px;box-shadow:0 12px 30px rgba(0,0,0,.16);z-index:9999;
}
.sidebar-dropdown.show{display:block}
.sidebar-dropdown a{
  display:flex;align-items:center;gap:12px;
  padding:10px 12px;border-radius:8px;
  font-size:14px;font-weight:600;
  color:inherit;text-decoration:none;
}
.sidebar-dropdown a:hover{background:var(--soft,#f5f5f5)}
.sidebar-dropdown a.active{
  background:var(--soft,#f5f5f5);
  box-shadow:inset 3px 0 var(--blue,#1473e6);
}
.sidebar-dropdown i{width:18px;text-align:center;color:var(--mute,#6e6e6e);font-size:14px}

/* LOGO */
.logo-container{
  display:flex;align-items:center;gap:8px;
  font-weight:800;font-size:16px;white-space:nowrap;
  color:inherit;text-decoration:none;min-width:0;
}
.logo-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.site-logo{width:32px;height:32px;object-fit:contain;flex:none}

/* TOP LINKS */
.nav-links-top{display:flex;gap:2px;margin-left:6px;align-items:center}
.nav-links-top > a{
  padding:8px 12px;border-radius:8px;
  font-size:14px;font-weight:600;
  color:inherit;text-decoration:none;white-space:nowrap;
}
.nav-links-top > a:hover{background:var(--soft,#f5f5f5)}
.nav-links-top > a i{margin-right:6px;font-size:12px}

/* DROPDOWN BUTTONS */
.nav-drop{position:relative}
.nav-drop-btn{
  display:flex;align-items:center;gap:7px;
  padding:8px 12px;border-radius:8px;
  font:inherit;font-size:14px;font-weight:600;
  color:inherit;background:transparent;border:0;cursor:pointer;
  white-space:nowrap;
}
.nav-drop-btn:hover{background:var(--soft,#f5f5f5)}
.nav-drop-btn i:first-child{font-size:12px}
.nav-drop-btn .caret{font-size:10px;opacity:.6;transition:transform .2s}
.nav-drop.open .nav-drop-btn .caret{transform:rotate(180deg)}

.nav-drop-panel{
  display:none;position:absolute;top:44px;left:0;
  min-width:230px;background:var(--bg,#fff);
  border:1px solid var(--line,#e1e1e1);border-radius:12px;
  padding:6px;box-shadow:0 14px 34px rgba(0,0,0,.16);
  z-index:9999;
}
.nav-drop.open .nav-drop-panel{display:block}
.nav-drop-panel a{
  display:flex;align-items:center;gap:10px;
  padding:9px 12px;border-radius:8px;
  font-size:13.5px;font-weight:600;
  color:inherit;text-decoration:none;white-space:nowrap;
}
.nav-drop-panel a:hover{background:var(--soft,#f5f5f5)}
.nav-drop-panel a.active{
  background:var(--soft,#f5f5f5);
  box-shadow:inset 3px 0 var(--blue,#1473e6);
}
.nav-drop-panel i{width:18px;text-align:center;color:var(--mute,#6e6e6e);font-size:13px}

/* RIGHT */
.nav-right{margin-left:auto;display:flex;align-items:center;gap:8px;flex:none}
.shop-logo-btn{
  display:flex;align-items:center;gap:7px;
  padding:8px 14px;border-radius:20px;
  font-weight:700;font-size:13.5px;
  border:1px solid var(--line,#e1e1e1);
  color:inherit;text-decoration:none;white-space:nowrap;
}
.shop-logo-btn:hover{background:var(--soft,#f5f5f5)}

.auth-buttons{display:flex;align-items:center;gap:6px}
.btn-account{
  font-size:24px;color:var(--mute,#6e6e6e);
  display:grid;place-items:center;color:inherit;text-decoration:none;
}
.btn-signin,.btn-signup{
  border:1px solid var(--ink,#222);background:var(--bg,#fff);
  padding:7px 16px;border-radius:20px;font-weight:700;font-size:13.5px;
  display:inline-block;text-align:center;color:inherit;text-decoration:none;
  white-space:nowrap;
}
.btn-signin:hover{background:var(--soft,#f5f5f5)}
.btn-signup{background:var(--blue,#1473e6);border-color:var(--blue,#1473e6);color:#fff}
.btn-signup:hover{background:var(--blue-d,#0d66d0)}

/* ACCOUNT */
.account-wrapper{display:none;position:relative}
.account-wrapper.show{display:block}
.account-avatar{
  width:36px;height:36px;border-radius:50%;
  border:2px solid var(--line,#e1e1e1);
  background:var(--soft,#f5f5f5);
  display:grid;place-items:center;overflow:hidden;
  font-weight:700;font-size:14px;padding:0;cursor:pointer;color:inherit;
}
.account-avatar:hover{border-color:var(--blue,#1473e6)}
.account-avatar img{width:100%;height:100%;object-fit:cover}
.account-dropdown{
  display:none;position:absolute;right:0;top:46px;
  width:270px;max-width:calc(100vw - 24px);
  background:var(--bg,#fff);border:1px solid var(--line,#e1e1e1);
  border-radius:12px;padding:8px;
  box-shadow:0 14px 34px rgba(0,0,0,.16);z-index:9999;
}
.account-dropdown.show{display:block}
.account-header{display:flex;align-items:center;gap:12px;padding:10px}
.account-avatar-large{
  width:44px;height:44px;border-radius:50%;
  background:var(--ink,#222);color:var(--bg,#fff);
  display:grid;place-items:center;
  font-weight:700;font-size:18px;overflow:hidden;flex:none;
}
.account-avatar-large img{width:100%;height:100%;object-fit:cover}
.account-info{min-width:0;flex:1}
.account-name{font-size:14px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.account-email{font-size:12px;color:var(--mute,#6e6e6e);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.account-divider{height:1px;background:var(--line,#e1e1e1);margin:6px 4px}
.account-menu-item{
  display:flex;align-items:center;gap:10px;
  width:100%;padding:10px 12px;border:0;background:none;
  border-radius:8px;font-size:14px;font-weight:600;
  text-align:left;cursor:pointer;color:inherit;text-decoration:none;
}
.account-menu-item:hover{background:var(--soft,#f5f5f5)}
.account-menu-item i{width:18px;text-align:center;color:var(--mute,#6e6e6e)}

/* RESPONSIVE */
@media (max-width: 1100px){
  .nav-links-top > a{font-size:13px;padding:7px 9px}
  .nav-drop-btn{font-size:13px;padding:7px 9px}
}
@media (max-width: 900px){
  .nav-links-top{display:none}
  .shop-logo-btn span{display:none}
  .shop-logo-btn{padding:8px 11px}
}
@media (max-width: 640px){
  .top-nav .in{padding:0 10px;height:54px;gap:8px}
  .logo-text{font-size:14px;max-width:120px}
  .site-logo{width:28px;height:28px}
  .btn-signin{display:none}
  .btn-signup{padding:7px 12px;font-size:13px}
  .sidebar-trigger{width:36px;height:36px}
}
@media (max-width: 420px){
  .logo-text{display:none}
  .btn-account{font-size:22px}
  .account-avatar{width:34px;height:34px}
}
`;
    document.head.appendChild(style);
  }

  function wireEvents() {
    /* ---- sidebar (hamburger) ---- */
    const appsBtn = document.getElementById("appsBtn");
    const appsDrop = document.getElementById("appsDrop");
    const sidebarMenu = document.getElementById("sidebarMenu");
    if (appsBtn && appsDrop && sidebarMenu) {
      appsBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeAllDrops();
        appsDrop.classList.toggle("show");
      });
    }

    /* ---- nav dropdowns ---- */
    const navMenus = ["imgToolsMenu", "allToolsMenu"].map(id => document.getElementById(id)).filter(Boolean);
    navMenus.forEach(menu => {
      const btn = menu.querySelector(".nav-drop-btn");
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = menu.classList.contains("open");
        closeAllDrops();
        if (!isOpen) menu.classList.add("open");
      });
    });

    /* ---- account dropdown ---- */
    const avatarBtn = document.getElementById("avatarBtn");
    const acctDrop = document.getElementById("acctDrop");
    const userBox = document.getElementById("userBox");
    if (avatarBtn && acctDrop && userBox) {
      avatarBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        closeAllDrops();
        acctDrop.classList.toggle("show");
      });
    }

    /* ---- close on outside click ---- */
    function closeAllDrops() {
      const a = document.getElementById("appsDrop");
      if (a) a.classList.remove("show");
      navMenus.forEach(m => m.classList.remove("open"));
      const ad = document.getElementById("acctDrop");
      if (ad) ad.classList.remove("show");
    }
    document.addEventListener("click", (e) => {
      if (e.target.closest(".sidebar-bottom-menu")) return;
      if (e.target.closest(".nav-drop")) return;
      if (e.target.closest("#userBox")) return;
      closeAllDrops();
    });

    /* ---- logout ---- */
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        if (window.firebase && firebase.auth) {
          firebase.auth().signOut()
            .then(() => { location.href = "index.html"; })
            .catch(() => { location.href = "index.html"; });
        } else {
          location.href = "index.html";
        }
      });
    }
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
      console.warn("[top-bar] Firebase auth error:", e);
    }
  }

  ready(function () {
    const target = document.getElementById("site-topbar");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = html;
    const headerEl = wrapper.firstElementChild;

    if (target) target.replaceWith(headerEl);
    else document.body.insertBefore(headerEl, document.body.firstChild);

    injectStyles();
    wireEvents();
    setTimeout(loadFirebaseAuth, 150);
  });
})();