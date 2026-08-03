/* =========================================================
   MERIDIAN — vanilla JS: boot sequence, 3D camera, depth scroll
   ========================================================= */
(function () {
  "use strict";

  var doc = document;
  var body = doc.body;
  var isTouch = window.matchMedia("(hover:none), (pointer:coarse)").matches;
  var reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  var isMobile = window.matchMedia("(max-width:760px)").matches;

  /* ---------- 1. BOOT CURTAIN ---------- */
  var curtain = doc.getElementById("curtain");
  var bar = doc.getElementById("curtainBar");
  var num = doc.getElementById("curtainNum");
  var p = 0;

  function boot() {
    body.classList.remove("is-loading");
    body.classList.add("is-ready");
    curtain.classList.add("is-done");
  }

  if (reduce) {
    boot();
  } else {
    var tick = setInterval(function () {
      p += Math.random() * 18 + 6;
      if (p >= 100) {
        p = 100;
        clearInterval(tick);
        setTimeout(boot, 260);
      }
      bar.style.width = p + "%";
      num.textContent = p < 10 ? "0" + Math.floor(p) : String(Math.floor(p));
    }, 130);
  }

  /* ---------- 2. NAV ---------- */
  var nav = doc.getElementById("nav");
  var burger = doc.getElementById("burger");
  burger.addEventListener("click", function () {
    nav.classList.toggle("is-open");
  });
  Array.prototype.forEach.call(nav.querySelectorAll(".nav__links a"), function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("is-open");
    });
  });

  /* ---------- 3. ARCHITECTURAL CURSOR ---------- */
  if (!isTouch) {
    body.classList.add("has-cursor");
    var cursor = doc.getElementById("cursor");
    var label = cursor.querySelector(".cursor__label");
    var cx = window.innerWidth / 2,
      cy = window.innerHeight / 2,
      tx = cx,
      ty = cy;

    doc.addEventListener("mousemove", function (e) {
      tx = e.clientX;
      ty = e.clientY;
    });

    Array.prototype.forEach.call(doc.querySelectorAll("[data-cursor]"), function (el) {
      el.addEventListener("mouseenter", function () {
        label.textContent = el.getAttribute("data-cursor");
        cursor.classList.add("is-big");
      });
      el.addEventListener("mouseleave", function () {
        cursor.classList.remove("is-big");
      });
    });

    (function loopCursor() {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      cursor.style.transform = "translate3d(" + cx + "px," + cy + "px,0)";
      requestAnimationFrame(loopCursor);
    })();
  }

  /* ---------- 4. HERO 3D CAMERA (mouse + scroll) ---------- */
  var world = doc.getElementById("heroWorld");
  var layers = [].slice.call(doc.querySelectorAll(".layer[data-depth]"));
  var mx = 0,
    my = 0,
    lmx = 0,
    lmy = 0,
    heroScroll = 0;

  if (!isTouch && !reduce) {
    window.addEventListener(
      "mousemove",
      function (e) {
        mx = e.clientX / window.innerWidth - 0.5;
        my = e.clientY / window.innerHeight - 0.5;
      },
      { passive: true }
    );
  }

  function renderHero() {
    lmx += (mx - lmx) * 0.06;
    lmy += (my - lmy) * 0.06;

    // camera yaw/pitch on the whole world
    world.style.transform =
      "rotateY(" + lmx * 5 + "deg) rotateX(" + -lmy * 3.4 + "deg)";

    for (var i = 0; i < layers.length; i++) {
      var el = layers[i];
      var d = parseFloat(el.getAttribute("data-depth")) || 0;
      var px = -lmx * d * 2.2;
      var py = -lmy * d * 1.7;
      var pz = (d - 12) * 4; // static z separation
      var sy = heroScroll * (d - 12) * 0.55; // scroll depth drift
      el.style.transform =
        "translate3d(" + px + "px," + (py + sy) + "px," + pz + "px)";
    }
  }

  /* ---------- 5. SCROLL ENGINE ---------- */
  var paraEls = [].slice.call(doc.querySelectorAll("[data-para]"));
  var ctaBg = doc.querySelector(".cta__bg");
  var steps = [].slice.call(doc.querySelectorAll(".step"));
  var lastY = window.scrollY;
  var queued = false;

  function onFrame() {
    queued = false;
    var y = window.scrollY;
    var vh = window.innerHeight;

    // nav state
    if (y > 40) nav.classList.add("is-stuck");
    else nav.classList.remove("is-stuck");
    if (y > lastY && y > vh * 0.9) nav.classList.add("is-hidden");
    else nav.classList.remove("is-hidden");
    lastY = y;

    // hero depth camera
    heroScroll = Math.min(y / vh, 1.2);
    if (y < vh * 1.3) renderHero();

    // layered parallax (studio stats etc.)
    for (var i = 0; i < paraEls.length; i++) {
      var el = paraEls[i];
      var r = el.getBoundingClientRect();
      var mid = (r.top + r.height / 2 - vh / 2) / vh; // -1..1
      var amt = parseFloat(el.getAttribute("data-para")) || 0;
      el.style.transform = "translate3d(0," + mid * amt * -1 + "px,0)";
    }

    // CTA background slow push
    if (ctaBg) {
      var cr = ctaBg.parentNode.getBoundingClientRect();
      if (cr.top < vh && cr.bottom > 0) {
        var t = (cr.top - vh / 2) / vh;
        ctaBg.style.transform = "translate3d(0," + t * -60 + "px,0) scale(1.06)";
      }
    }

    // 3D depth timeline: nearest step to the focus line comes forward
    if (steps.length) {
      var best = -1,
        bestDist = Infinity;
      for (var s = 0; s < steps.length; s++) {
        var sr = steps[s].getBoundingClientRect();
        var dist = Math.abs(sr.top + sr.height / 2 - vh * 0.45);
        if (dist < bestDist) {
          bestDist = dist;
          best = s;
        }
      }
      for (var k = 0; k < steps.length; k++) {
        steps[k].classList.toggle("is-active", k === best && bestDist < vh * 0.6);
      }
    }
  }

  function onScroll() {
    if (!queued) {
      queued = true;
      requestAnimationFrame(onFrame);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  if (!isTouch && !reduce) {
    (function loopCam() {
      renderHero();
      requestAnimationFrame(loopCam);
    })();
  }
  onFrame();

  /* ---------- 6. REVEAL OBSERVER ---------- */
  var revealEls = doc.querySelectorAll(".reveal, .reveal-z, .img3d");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    Array.prototype.forEach.call(revealEls, function (el, i) {
      el.style.transitionDelay = (i % 4) * 90 + "ms";
      io.observe(el);
    });
  } else {
    Array.prototype.forEach.call(revealEls, function (el) {
      el.classList.add("in");
    });
  }

  /* ---------- 7. 3D TILT (architectural models) ---------- */
  if (!isTouch && !reduce) {
    Array.prototype.forEach.call(doc.querySelectorAll("[data-tilt]"), function (card) {
      var plate = card.querySelector(".pcard__depth") || card.querySelector(".scard__plate");
      if (!plate) return;
      var rx = 0,
        ry = 0,
        trx = 0,
        try_ = 0,
        raf = null,
        hover = false;

      function run() {
        rx += (trx - rx) * 0.12;
        ry += (try_ - ry) * 0.12;
        plate.style.transform =
          "rotateX(" + rx + "deg) rotateY(" + ry + "deg) translate3d(0," +
          (hover ? -8 : 0) + "px," + (hover ? 30 : 0) + "px)";
        if (hover || Math.abs(rx) > 0.05 || Math.abs(ry) > 0.05) {
          raf = requestAnimationFrame(run);
        } else {
          plate.style.transform = "";
          raf = null;
        }
      }
      function kick() {
        if (!raf) raf = requestAnimationFrame(run);
      }

      card.addEventListener("mouseenter", function () {
        hover = true;
        kick();
      });
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        try_ = px * 16;
        trx = -py * 12;
        kick();
      });
      card.addEventListener("mouseleave", function () {
        hover = false;
        trx = 0;
        try_ = 0;
        kick();
      });
    });
  }

  /* ---------- 8. MOBILE: light 2.5D on tower ---------- */
  if (isMobile) {
    var tower = doc.getElementById("tower");
    if (tower) tower.style.transform = "rotateX(4deg) rotateY(-10deg)";
  }
})();
