/* AI-LA Kullanım Rehberi - sayfayı icerik.js'teki veriden kurar. */
(function () {
  "use strict";
  var R = window.REHBER;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  var store = {
    get: function (k) { try { return localStorage.getItem("ailarehber:" + k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem("ailarehber:" + k, v); } catch (e) {} }
  };

  var HERO = {
    baslarken: ["AI-LA'ya hoş geldiniz", "AI-LA, okulunuzun yapay zekâ altyapısıdır. Bu rehber öğretmen, öğrenci ve okul yöneticisi hesaplarının neyi görüp neyi yapabildiğini gerçek ekranlarla, adım adım anlatır."],
    ogretmen: ["Öğretmen hesabı", "Yapay zekâ araçlarıyla ders planı, sınav ve etkinlik hazırlar; ürettiğinizi öğrencilere görev olarak atar, TYMM görevlerini onaylarsınız."],
    ogrenci: ["Öğrenci hesabı", "Öğrencinizin ekranı sizinkinden farklıdır. Görevlerini nerede bulduğunu ve nasıl teslim ettiğini bilirseniz derste yol göstermek kolaylaşır."],
    yonetici: ["Okul yöneticisi hesabı", "Okulun tamamını gören hesap. Sınıfları açar, öğretmen ve öğrencileri yerleştirir, kurumun AI kullanımını raporlardan izler."],
    gorev: ["Görev akışı", "Öğretmenin hazırladığı bir içerik nasıl öğrenci görevine dönüşür, TYMM görevi nasıl değerlendirilir ve onaylanır?"],
    sss: ["Sorular ve kaynaklar", "İlk haftada en çok sorulanlar ve kontrol listesi."]
  };


  /* ---------- blok çizimi ---------- */
  function renderBlock(b, secId, bi) {
    switch (b.t) {
      case "p": return el("p", null, b.h);
      case "h3": return el("h3", null, b.h);
      case "tip": return el("div", "note tip", b.h);
      case "warn": return el("div", "note warn", b.h);
      case "list": {
        var ul = el("ul");
        b.items.forEach(function (i) { ul.appendChild(el("li", null, i)); });
        return ul;
      }
      case "flow": {
        var fl = el("div", "flow");
        b.items.forEach(function (i, k) {
          if (k) fl.appendChild(el("i", null, "→"));
          fl.appendChild(el("span", null, i));
        });
        return fl;
      }
      case "steps": {
        var ol = el("ol", "steps");
        b.items.forEach(function (i) { ol.appendChild(el("li", null, i)); });
        return ol;
      }
      case "img": {
        var f = el("figure");
        if (b.w) f.style.maxWidth = b.w + "px";
        var btn = el("button"); btn.type = "button"; btn.setAttribute("aria-label", "Büyüt: " + b.cap);
        var img = el("img"); img.src = b.src; img.alt = b.cap; img.loading = "lazy";
        img.onerror = function () { f.remove(); };
        btn.appendChild(img); f.appendChild(btn);
        f.appendChild(el("figcaption", null, b.cap));
        btn.addEventListener("click", function () { openLb(b.src, b.cap); });
        return f;
      }
      case "table": {
        var w = el("div", "tbl"), t = el("table"), tr = el("tr");
        b.head.forEach(function (h) { tr.appendChild(el("th", null, h)); });
        var th = el("thead"); th.appendChild(tr); t.appendChild(th);
        var tb = el("tbody");
        b.rows.forEach(function (r) {
          var row = el("tr");
          r.forEach(function (c) { row.appendChild(el("td", null, c)); });
          tb.appendChild(row);
        });
        t.appendChild(tb); w.appendChild(t);
        return w;
      }
      case "menu": {
        var m = el("div", "menu");
        b.items.forEach(function (i) {
          var d = el("div");
          var im = el("img"); im.src = i[0]; im.alt = ""; im.onerror = function () { im.style.visibility = "hidden"; };
          d.appendChild(im);
          d.appendChild(el("p", null, "<b>" + i[1] + "</b><span>" + i[2] + "</span>"));
          d.lastChild.style.margin = "0";
          m.appendChild(d);
        });
        return m;
      }
      case "video": {
        var v = el("div", "videos");
        b.items.forEach(function (i) {
          var a = el("a", null, "<b>" + i[0] + "</b><span>" + i[2] + "</span>");
          a.href = i[1]; a.target = "_blank"; a.rel = "noopener";
          v.appendChild(a);
        });
        return v;
      }
      case "check": {
        var wrap = el("div");
        var bar = el("div", "progress", "<i></i>"), lab = el("p", null, "");
        lab.style.margin = "0 0 6px"; lab.style.fontSize = "14px"; lab.style.color = "var(--muted)";
        var ul2 = el("ul", "check");
        var key = "check:" + secId + ":" + bi;
        var saved = (store.get(key) || "").split(",");
        var upd = function () {
          var boxes = ul2.querySelectorAll("input"), n = 0, on = [];
          boxes.forEach(function (x, k) { if (x.checked) { n++; on.push(k); } });
          bar.firstChild.style.width = (100 * n / boxes.length) + "%";
          lab.textContent = n + " / " + boxes.length + " tamamlandı";
          store.set(key, on.join(","));
        };
        b.items.forEach(function (i, k) {
          var li = el("li"), l = el("label"), c = el("input");
          c.type = "checkbox"; c.checked = saved.indexOf(String(k)) >= 0; c.addEventListener("change", upd);
          l.appendChild(c); l.appendChild(el("span", null, i)); li.appendChild(l); ul2.appendChild(li);
        });
        wrap.appendChild(bar); wrap.appendChild(lab); wrap.appendChild(ul2);
        setTimeout(upd);
        return wrap;
      }
    }
    return el("p", null, b.h || "");
  }

  /* ---------- sayfa ---------- */
  var tabs = $("#sekmeler"), host = $("#bolumler"), toc = $("#toc"), hero = $("#hero");
  var sections = [];
  var current = null;

  R.bolumler.forEach(function (s) {
    var sec = el("section", "sec"); sec.id = s.id; sec.dataset.rol = s.rol;
    var head = el("header");
    head.appendChild(el("span", "num", ""));
    var hh = el("div");
    hh.appendChild(el("h2", null, s.baslik));
    if (s.ozet) hh.appendChild(el("p", "ozet", s.ozet));
    head.appendChild(hh); sec.appendChild(head);
    s.bloklar.forEach(function (b, bi) { sec.appendChild(renderBlock(b, s.id, bi)); });
    host.appendChild(sec);
    sections.push({ data: s, node: sec, text: sec.textContent.toLocaleLowerCase("tr") });
  });

  R.roller.forEach(function (r) {
    var b = el("button", null, r.ad);
    b.type = "button"; b.setAttribute("role", "tab"); b.dataset.rol = r.id; b.style.setProperty("--dot", r.renk);
    b.addEventListener("click", function () { show(r.id, true); });
    tabs.appendChild(b);
  });

  function roleColor(id) {
    var r = R.roller.filter(function (x) { return x.id === id; })[0];
    return r ? r.renk : "var(--brand)";
  }

  function show(rol, scroll) {
    current = rol;
    $("#ara").value = "";
    document.documentElement.style.setProperty("--accent", roleColor(rol));
    tabs.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-selected", b.dataset.rol === rol); });
    var h = HERO[rol] || ["", ""];
    hero.hidden = false;
    hero.innerHTML = "<h1>" + h[0] + "</h1><p>" + h[1] + "</p>";
    if (rol === "baslarken") {
      var box = el("div", "roles");
      [["ogretmen", "Öğretmen ne yapar?"], ["ogrenci", "Öğrenci ne görür?"], ["yonetici", "Yönetici ne yapar?"], ["gorev", "Görev akışı"], ["sss", "İlk hafta listesi"]].forEach(function (x) {
        var b = el("button", null, x[1] + " →"); b.type = "button";
        b.addEventListener("click", function () { show(x[0], true); });
        box.appendChild(b);
      });
      hero.appendChild(box);
    }
    var n = 0;
    toc.innerHTML = "<h4>Bu bölümde</h4>";
    sections.forEach(function (s) {
      var on = s.data.rol === rol;
      s.node.hidden = !on;
      unmark(s.node);
      if (on) {
        n++;
        s.node.querySelector(".num").textContent = n;
        var a = el("a", null, s.data.baslik); a.href = "#" + s.data.id; a.dataset.id = s.data.id;
        toc.appendChild(a);
      }
    });
    $("#bos").hidden = true;
    try { history.replaceState(null, "", "#" + rol); } catch (e) {}
    store.set("rol", rol);
    if (scroll) window.scrollTo({ top: 0, behavior: "smooth" });
    spy();
  }

  /* ---------- arama ---------- */
  function unmark(node) {
    node.querySelectorAll("mark").forEach(function (m) { m.replaceWith(document.createTextNode(m.textContent)); });
    node.normalize();
  }
  function markText(node, q) {
    var walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null), hits = [], t;
    while ((t = walker.nextNode())) { if (t.nodeValue.toLocaleLowerCase("tr").indexOf(q) >= 0) hits.push(t); }
    hits.forEach(function (tn) {
      var v = tn.nodeValue, lv = v.toLocaleLowerCase("tr"), frag = document.createDocumentFragment(), i = 0, j;
      while ((j = lv.indexOf(q, i)) >= 0) {
        frag.appendChild(document.createTextNode(v.slice(i, j)));
        var m = document.createElement("mark"); m.textContent = v.slice(j, j + q.length); frag.appendChild(m);
        i = j + q.length;
      }
      frag.appendChild(document.createTextNode(v.slice(i)));
      tn.replaceWith(frag);
    });
  }
  var timer;
  $("#ara").addEventListener("input", function (e) {
    clearTimeout(timer);
    var q = e.target.value.trim().toLocaleLowerCase("tr");
    timer = setTimeout(function () {
      if (!q) { show(current || "baslarken"); return; }
      hero.hidden = true;
      tabs.querySelectorAll("button").forEach(function (b) { b.setAttribute("aria-selected", "false"); });
      document.documentElement.style.setProperty("--accent", "var(--brand)");
      toc.innerHTML = "<h4>Arama sonuçları</h4>";
      var n = 0;
      sections.forEach(function (s) {
        unmark(s.node);
        var on = s.text.indexOf(q) >= 0;
        s.node.hidden = !on;
        if (on) {
          n++; s.node.querySelector(".num").textContent = n;
          markText(s.node, q);
          var a = el("a", null, s.data.baslik); a.href = "#" + s.data.id; toc.appendChild(a);
        }
      });
      $("#bos").hidden = n > 0;
    }, 180);
  });

  /* ---------- içindekiler vurgusu ---------- */
  function spy() {
    var links = toc.querySelectorAll("a"), best = null;
    links.forEach(function (a) {
      var s = document.getElementById(a.dataset.id || a.getAttribute("href").slice(1));
      if (s && !s.hidden && s.getBoundingClientRect().top < 180) best = a;
    });
    links.forEach(function (a) { a.classList.toggle("on", a === (best || links[0])); });
  }
  window.addEventListener("scroll", function () { window.requestAnimationFrame(spy); }, { passive: true });

  /* ---------- büyütme ---------- */
  var lb = $("#lb");
  function openLb(src, cap) { lb.querySelector("img").src = src; lb.querySelector("p").textContent = cap; lb.hidden = false; }
  lb.addEventListener("click", function () { lb.hidden = true; });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.hidden = true; });

  /* ---------- tema, yazdır ---------- */
  var theme = store.get("tema");
  if (theme) document.documentElement.dataset.theme = theme;
  $("#tema").addEventListener("click", function () {
    var dark = document.documentElement.dataset.theme === "dark" ||
      (!document.documentElement.dataset.theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    var next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next; store.set("tema", next);
  });
  $("#yazdir").addEventListener("click", function () { window.print(); });
  $(".brand").addEventListener("click", function (e) { e.preventDefault(); show("baslarken", true); });

  $("#foot").textContent = "Sürüm " + R.meta.surum + " · Son güncelleme: " + R.meta.tarih;

  /* ---------- başlangıç ---------- */
  var ids = R.roller.map(function (r) { return r.id; });
  function route(first) {
    var h = decodeURIComponent((location.hash || "").slice(1));
    if (ids.indexOf(h) >= 0) { if (h !== current || first) show(h, !first); return; }
    var sec = R.bolumler.filter(function (s) { return s.id === h; })[0];
    if (sec) {
      if (sec.rol !== current) show(sec.rol);
      try { history.replaceState(null, "", "#" + h); } catch (e) {}
      setTimeout(function () { document.getElementById(h).scrollIntoView(); }, 30);
      return;
    }
    if (first) {
      var s = store.get("rol");
      show(ids.indexOf(s) >= 0 ? s : "baslarken");
    }
  }
  window.addEventListener("hashchange", function () { route(false); });
  route(true);
})();
