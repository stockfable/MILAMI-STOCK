/* MINAMI STOCK - shared footer (fixed duplicate About) */
(function () {
  if (window.__msFooterLoaded) return;
  window.__msFooterLoaded = true;

  function ready(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  ready(function () {
    if (!document.querySelector('link[href*="font-awesome"]')) {
      var fa = document.createElement("link");
      fa.rel = "stylesheet";
      fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
      document.head.appendChild(fa);
    }

    function lumOf(color) {
      var m = String(color).match(/[\d.]+/g);
      if (!m || m.length < 3) return 0;
      return (0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2]) / 255;
    }
    var baseDark = lumOf(getComputedStyle(document.body).color) > 0.6;

    var css = [
      ".msf{font-family:'Segoe UI',system-ui,-apple-system,Roboto,Arial,sans-serif;width:100%;margin-top:40px;clear:both;position:relative;z-index:5;line-height:1.5;text-align:left}",
      ".msf *{box-sizing:border-box}",
      ".msf.msf-light{background:#f5f5f5;color:#222;border-top:1px solid #e1e1e1;--msf-mute:#6e6e6e;--msf-line:#dcdcdc;--msf-btn:#fff}",
      ".msf.msf-dark{background:#0a0a0a;color:#e5e7eb;border-top:1px solid #1f2937;--msf-mute:#94a3b8;--msf-line:#27303f;--msf-btn:#111827}",
      ".msf-cols{max-width:1400px;margin:0 auto;padding:36px 20px 18px;display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:28px}",
      ".msf h4{font-size:15px;font-weight:700;margin:0 0 12px;color:inherit}",
      ".msf-cols a{display:block;font-size:14px;color:var(--msf-mute);padding:5px 0;text-decoration:none}",
      ".msf-cols a:hover{color:inherit;text-decoration:underline}",
      ".msf-desc{font-size:14px;color:var(--msf-mute);max-width:320px;margin:0}",
      ".msf-social{display:flex;gap:10px;margin-top:14px}",
      ".msf-cols .msf-social a{width:34px;height:34px;border-radius:50%;border:1px solid var(--msf-line);display:grid;place-items:center;padding:0;color:inherit}",
      ".msf-cols .msf-social a:hover{background:#fbbf24;color:#111;border-color:#fbbf24;text-decoration:none}",
      ".msf-bottom{max-width:1400px;margin:0 auto;padding:16px 20px 26px;border-top:1px solid var(--msf-line);font-size:13px;color:var(--msf-mute);display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;align-items:center}",
      ".msf-btns{display:flex;flex-wrap:wrap;gap:10px}",
      ".msf-btn{background:var(--msf-btn);border:1px solid var(--msf-line);border-radius:18px;padding:7px 15px;font:inherit;font-size:13px;color:inherit;cursor:pointer}",
      ".msf-btn:hover{border-color:#fbbf24}",
      ".msf-pop{position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:99999;display:none;align-items:center;justify-content:center;padding:20px}",
      ".msf-pop.open{display:flex}",
      ".msf-box{background:#fff;color:#222;border-radius:10px;max-width:460px;width:100%;padding:24px;max-height:90vh;overflow:auto}",
      ".msf-box h3{font-size:20px;margin:0 0 12px}",
      ".msf-box p{font-size:14px;line-height:1.6;color:#555;margin:0 0 10px}",
      ".msf-box a{color:#1473e6;text-decoration:underline}",
      ".msf-box select{width:100%;padding:11px;border:1px solid #d5d5d5;border-radius:6px;font:inherit;margin-bottom:14px;background:#fff;color:#222}",
      ".msf-box .row{display:flex;gap:10px}",
      ".msf-box button{border:1px solid #222;background:#fff;color:#222;padding:9px 20px;border-radius:20px;font-weight:700;font-size:14px;cursor:pointer}",
      ".msf-box button.fill{background:#1473e6;border-color:#1473e6;color:#fff}",
      "#msf-toast{position:fixed;left:50%;bottom:26px;transform:translateX(-50%);background:#222;color:#fff;padding:11px 20px;border-radius:6px;font-size:14px;opacity:0;pointer-events:none;transition:opacity .2s;z-index:100000}",
      "#msf-toast.show{opacity:1}",
      "html.msf-inv{filter:invert(1) hue-rotate(180deg);background:#fff}",
      "html.msf-inv img,html.msf-inv video,html.msf-inv canvas,html.msf-inv iframe{filter:invert(1) hue-rotate(180deg)}",
      "@media(max-width:900px){.msf-cols{grid-template-columns:1fr 1fr}}",
      "@media(max-width:520px){.msf-cols{grid-template-columns:1fr}}"
    ].join("\n");
    var st = document.createElement("style");
    st.textContent = css;
    document.head.appendChild(st);

    var html =
      '<div class="msf-cols">' +
        '<div><h4>MINAMI STOCK</h4>' +
          '<p class="msf-desc">Free stock photos, illustrations, videos and creative tools. Copyright-free content for your projects.</p>' +
          '<div class="msf-social">' +
            '<a href="#" data-noop aria-label="Facebook"><i class="fab fa-facebook"></i></a>' +
            '<a href="#" data-noop aria-label="Twitter"><i class="fab fa-twitter"></i></a>' +
            '<a href="#" data-noop aria-label="Instagram"><i class="fab fa-instagram"></i></a>' +
            '<a href="#" data-noop aria-label="Pinterest"><i class="fab fa-pinterest"></i></a>' +
            '<a href="#" data-noop aria-label="YouTube"><i class="fab fa-youtube"></i></a>' +
          '</div></div>' +
        '<div><h4>Explore</h4>' +
          '<a href="index.html">Home</a>' +
          '<a href="stock-photo.html">Stock Photos</a>' +
          '<a href="tools.html">Tools</a>' +
          '<a href="shop.html">Shop</a>' +
          '<a href="about.html">About</a></div>' +
        '<div><h4>Tools</h4>' +
          '<a href="image-resizer.html">Image Resizer</a>' +
          '<a href="cropper.html">Image Cropper</a>' +
          '<a href="compressor.html">Compressor</a>' +
          '<a href="color-palette.html">Color Palette</a>' +
          '<a href="bg-remover.html">BG Remover</a></div>' +
        '<div><h4>Legal &amp; Help</h4>' +
          '<a href="privacy.html">Privacy Policy</a>' +
          '<a href="terms.html">Terms of Service</a>' +
          '<a href="dmca.html">DMCA</a>' +
          '<a href="contact.html">Contact</a>' +
          '<a href="faq.html">FAQ</a></div>' +
      '</div>' +
      '<div class="msf-bottom">' +
        '<div class="msf-btns">' +
          '<button type="button" class="msf-btn" data-act="region">&#127760; Change region</button>' +
          '<button type="button" class="msf-btn" data-act="theme"></button>' +
          '<button type="button" class="msf-btn" data-act="license">&#9878;&#65039; License Terms</button>' +
        '</div>' +
        '<div>&copy; 2026 MINAMI STOCK - All rights reserved</div>' +
      '</div>';

    var foot = document.createElement("footer");
    foot.className = "msf " + (baseDark ? "msf-dark" : "msf-light");
    foot.innerHTML = html;

    var slot = document.getElementById("ms-footer");
    if (slot) { slot.innerHTML = ""; slot.appendChild(foot); }
    else document.body.appendChild(foot);

    /* popups */
    var regions = ["Bangladesh","India","Pakistan","Nepal","Sri Lanka","United States","United Kingdom","Canada","Australia","Other"];
    var pops = document.createElement("div");
    pops.innerHTML =
      '<div class="msf-pop" id="msf-region" role="dialog" aria-modal="true" aria-label="Change region"><div class="msf-box">' +
        '<h3>Change region</h3><select id="msf-region-sel">' +
        regions.map(function (r) { return "<option>" + r + "</option>"; }).join("") +
        '</select><div class="row"><button type="button" class="fill" id="msf-region-save">Save region</button><button type="button" data-close>Cancel</button></div>' +
      '</div></div>' +
      '<div class="msf-pop" id="msf-license" role="dialog" aria-modal="true" aria-label="License Terms"><div class="msf-box">' +
        '<h3>License Terms</h3>' +
        '<p>Photos and files on MINAMI STOCK can be used in websites, social media, print and advertising, within the projects your license covers.</p>' +
        '<p>You may not resell or redistribute a file as-is, and you may not claim it as your own work.</p>' +
        '<p>More details: <a href="privacy.html">Privacy Policy</a> &middot; <a href="terms.html">Terms of Service</a></p>' +
        '<div class="row"><button type="button" data-close>Close</button></div>' +
      '</div></div>' +
      '<div id="msf-toast"></div>';
    document.body.appendChild(pops);

    function $(id) { return document.getElementById(id); }
    function toast(t) {
      var el = $("msf-toast");
      el.textContent = t;
      el.classList.add("show");
      clearTimeout(toast.t);
      toast.t = setTimeout(function () { el.classList.remove("show"); }, 2200);
    }
    function closePops() {
      $("msf-region").classList.remove("open");
      $("msf-license").classList.remove("open");
    }

    function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} }
    function appearanceDark() {
      var s = store("ms_theme");
      return s ? s === "dark" : baseDark;
    }
    function applyTheme() {
      var dark = appearanceDark();
      document.documentElement.classList.toggle("msf-inv", dark !== baseDark);
      foot.querySelector('[data-act="theme"]').innerHTML = dark ? "&#9728;&#65039; Light Theme" : "&#127769; Dark Theme";
    }
    applyTheme();

    var savedRegion = store("ms_region");
    if (savedRegion) $("msf-region-sel").value = savedRegion;

    foot.addEventListener("click", function (e) {
      var noop = e.target.closest("[data-noop]");
      if (noop) { e.preventDefault(); return; }
      var b = e.target.closest("[data-act]");
      if (!b) return;
      var act = b.getAttribute("data-act");
      if (act === "region") $("msf-region").classList.add("open");
      else if (act === "license") $("msf-license").classList.add("open");
      else if (act === "theme") {
        store("ms_theme", appearanceDark() ? "light" : "dark");
        applyTheme();
      }
    });
    $("msf-region-save").onclick = function () {
      store("ms_region", $("msf-region-sel").value);
      closePops();
      toast("Region set to " + $("msf-region-sel").value);
    };
    pops.addEventListener("click", function (e) {
      if (e.target.hasAttribute("data-close") || e.target.classList.contains("msf-pop")) closePops();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePops(); });
  });
})();