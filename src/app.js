(function () {
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- year ---- */
  var yrEl = document.getElementById("yr");
  if (yrEl) yrEl.textContent = new Date().getFullYear();

  /* ---- header shrink + solid state ---- */
  var winH = window.innerHeight || 1;
  var maxScroll = 1;
  function refreshScrollMetrics() {
    winH = window.innerHeight || 1;
    maxScroll = Math.max(1, document.documentElement.scrollHeight - winH);
  }

  var nav = document.getElementById("nav");
  function onNav() {
    if (!nav) return;
    var y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 40);
    nav.classList.toggle("is-solid", y > winH * 0.45);
  }

  /* ---- scroll progress ---- */
  var bar = document.getElementById("progress");
  function onProgress() {
    if (!bar) return;
    bar.style.transform = "scaleX(" + Math.min(1, Math.max(0, window.scrollY / maxScroll)) + ")";
  }

  /* ---- fullscreen menu ---- */
  var burger = document.getElementById("burger");
  var menu = document.getElementById("menu");
  function toggleMenu(force) {
    if (!burger || !menu) return;
    var open = force !== undefined ? force : !document.body.classList.contains("menu-open");
    document.body.classList.toggle("menu-open", open);
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    burger.setAttribute("aria-expanded", String(open));
    document.documentElement.style.overflow = open ? "hidden" : "";
    [].forEach.call(menu.querySelectorAll("a"), function (a, i) {
      a.style.transitionDelay = open ? (0.06 * i + 0.08) + "s" : "0s";
    });
  }
  if (burger && menu) {
    burger.addEventListener("click", function () { toggleMenu(); });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) toggleMenu(false);
    });
  }

  /* ---- hero 3D material switcher ---- */
  var heroModes = document.getElementById("heroModes");
  if (heroModes) {
    heroModes.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-mode-idx]");
      if (!btn) return;
      var idx = parseInt(btn.getAttribute("data-mode-idx") || "0", 10);
      [].forEach.call(heroModes.querySelectorAll(".hero__mode"), function (b) {
        b.classList.toggle("is-active", b === btn);
      });
      if (window.FLUVO_ENGINE) window.FLUVO_ENGINE.setHeroMode(idx);
    });
  }

  var isCrawler = /googlebot|bingbot|yandex|duckduckbot|baiduspider|applebot|slurp|oai-searchbot|gptbot|claudebot|perplexitybot|facebookexternalhit|twitterbot|linkedinbot/i.test(navigator.userAgent || "");

  /* ---- scroll reveals ---- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add("in");
        io.unobserve(en.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.12 });

  document.querySelectorAll("[data-reveal]").forEach(function (el) {
    if (reduce || isCrawler || el.getBoundingClientRect().top < window.innerHeight) {
      requestAnimationFrame(function () { el.classList.add("in"); });
    } else {
      io.observe(el);
    }
  });

  /* ---- mechanical odometer counters ---- */
  function buildOdo(el) {
    var target = el.getAttribute("data-odo") || "0";
    el.innerHTML = "";
    target.split("").forEach(function (ch) {
      if (!/[0-9]/.test(ch)) {
        var s = document.createElement("span");
        s.textContent = ch;
        s.className = "odo__col";
        el.appendChild(s);
        return;
      }
      var col = document.createElement("span");
      col.className = "odo__col";
      var strip = document.createElement("span");
      strip.className = "odo__strip";
      for (var i = 0; i <= 9; i++) {
        var d = document.createElement("span");
        d.textContent = i;
        strip.appendChild(d);
      }
      col.appendChild(strip);
      el.appendChild(col);
      col.dataset.target = ch;
    });
  }

  function runOdo(el) {
    [].forEach.call(el.querySelectorAll(".odo__col"), function (col, i) {
      var t = col.dataset.target;
      if (t === undefined) return;
      var strip = col.firstChild;
      strip.style.transitionDelay = (i * 0.09) + "s";
      strip.style.transform = "translateY(" + (-t + "") + "em)";
    });
  }

  var odos = document.querySelectorAll(".odo");
  odos.forEach(buildOdo);
  var oio = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        if (reduce || isCrawler) {
          en.target.querySelectorAll(".odo__strip").forEach(function (s) { s.style.transition = "none"; });
        }
        runOdo(en.target);
        oio.unobserve(en.target);
      }
    });
  }, { threshold: 0.5 });
  odos.forEach(function (el) {
    if (isCrawler) {
      el.querySelectorAll(".odo__strip").forEach(function (s) { s.style.transition = "none"; });
      runOdo(el);
    } else {
      oio.observe(el);
    }
  });

  /* ---- stepped 3D engineering rail ---- */
  var rail = document.getElementById("ingenieria");
  var track = document.getElementById("railTrack");
  var idx = document.getElementById("railIndex");
  var railPrev = document.getElementById("railPrev");
  var railNext = document.getElementById("railNext");
  var railSlides = track ? [].slice.call(track.children) : [];
  var railAt = 0;

  if (idx) {
    railSlides.forEach(function (_, i) {
      var b = document.createElement("button");
      var num = ("0" + (i + 1)).slice(-2);
      b.type = "button";
      b.textContent = num;
      b.setAttribute("aria-label", num + " — Pilar " + (i + 1));
      b.addEventListener("click", function () { railGo(i); });
      idx.appendChild(b);
    });
  }

  function railStep() {
    if (railSlides.length < 2) return railSlides[0] ? railSlides[0].offsetWidth : 0;
    return railSlides[1].offsetLeft - railSlides[0].offsetLeft;
  }
  function railMax() { return Math.max(0, track.scrollWidth - rail.clientWidth); }

  function railGo(i) {
    if (!track || !rail) return;
    railAt = Math.max(0, Math.min(railSlides.length - 1, i));
    var x = Math.min(railAt * railStep(), railMax());
    track.style.transform = "translate3d(" + (-x) + "px,0,0)";
    if (idx) {
      [].forEach.call(idx.children, function (el, n) { el.classList.toggle("is-on", n === railAt); });
    }
    railSlides.forEach(function (el, n) { el.classList.toggle("is-active", n === railAt); });
    if (railPrev) railPrev.disabled = railAt === 0;
    if (railNext) railNext.disabled = railAt === railSlides.length - 1;
  }

  if (track && rail) {
    if (railPrev) railPrev.addEventListener("click", function () { railGo(railAt - 1); });
    if (railNext) railNext.addEventListener("click", function () { railGo(railAt + 1); });
    rail.setAttribute("tabindex", "0");
    rail.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); railGo(railAt + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); railGo(railAt - 1); }
    });
    window.addEventListener("resize", function () { railGo(railAt); });
    railGo(0);
  }

  /* ---- portfolio snap carousel ---- */
  (function () {
    var carTrack = document.getElementById("carTrack");
    if (!carTrack) return;
    var slides = [].slice.call(carTrack.querySelectorAll(".gl-slide"));
    var dots = document.getElementById("carDots");
    var prev = document.getElementById("carPrev");
    var next = document.getElementById("carNext");

    slides.forEach(function (_, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Ir al caso " + (i + 1));
      b.addEventListener("click", function () { go(i); });
      dots.appendChild(b);
    });

    function step() {
      var a = slides[0].getBoundingClientRect();
      var b = slides[1] ? slides[1].getBoundingClientRect() : null;
      return b ? (b.left - a.left) : a.width;
    }
    function current() { return Math.round(carTrack.scrollLeft / step()); }
    function go(i) {
      var max = slides.length - 1;
      i = Math.max(0, Math.min(max, i));
      carTrack.scrollTo({ left: i * step(), behavior: reduce ? "auto" : "smooth" });
    }
    function sync() {
      var i = current();
      var atStart = carTrack.scrollLeft < 4;
      var atEnd = carTrack.scrollLeft >= carTrack.scrollWidth - carTrack.clientWidth - 4;
      [].forEach.call(dots.children, function (d, n) { d.classList.toggle("is-on", n === i); });
      if (prev) prev.disabled = atStart;
      if (next) next.disabled = atEnd;
    }
    if (prev) prev.addEventListener("click", function () { go(current() - 1); });
    if (next) next.addEventListener("click", function () { go(current() + 1); });
    carTrack.addEventListener("scroll", function () {
      window.clearTimeout(carTrack._t);
      carTrack._t = window.setTimeout(sync, 60);
    }, { passive: true });
    carTrack.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); go(current() + 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); go(current() - 1); }
    });
    window.addEventListener("resize", sync);
    sync();
  })();

  /* ---- interactive FAQ accordion ---- */
  var faqList = document.getElementById("faqList");
  if (faqList) {
    faqList.addEventListener("click", function (e) {
      var btn = e.target.closest(".faq-q");
      if (!btn) return;
      var item = btn.closest(".faq-item");
      var wasOpen = item.classList.contains("is-open");
      faqList.querySelectorAll(".faq-item").forEach(function (el) {
        el.classList.remove("is-open");
        var b = el.querySelector(".faq-q");
        if (b) b.setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        item.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  }

  /* ---- embedded quote configurator (Web3Forms + WhatsApp) ---- */
  var quoteForm = document.getElementById("quoteForm");
  var qName = document.getElementById("qName");
  var qEmail = document.getElementById("qEmail");
  var qMessage = document.getElementById("qMessage");
  var qSubmit = document.getElementById("qSubmit");
  var qStatus = document.getElementById("qStatus");
  var qWhatsApp = document.getElementById("qWhatsApp");
  var qTypeChips = document.getElementById("qTypeChips");
  var qBudgetChips = document.getElementById("qBudgetChips");

  var quoteState = {
    projectType: "Landing Page 3D",
    budget: "$300 - $600 USD"
  };

  function buildWhatsAppUrl() {
    var tr = window.FLUVO_ACTIVE_I18N;
    var name = (qName && qName.value.trim()) || (tr ? tr.quoteDefaultName : "un cliente");
    var email = (qEmail && qEmail.value.trim()) || (tr ? tr.quoteNotProvided : "No indicado");
    var msg = qMessage && qMessage.value.trim();
    var pType = (tr && tr.projectTypeMap && tr.projectTypeMap[quoteState.projectType]) || quoteState.projectType;
    var pBudget = (tr && tr.budgetMap && tr.budgetMap[quoteState.budget]) || quoteState.budget;
    var text;
    if (tr && typeof tr.formatWhatsApp === "function") {
      text = tr.formatWhatsApp({ name: name, email: email, projectType: pType, budget: pBudget, msg: msg });
    } else {
      text =
        "Hola FLUVO Studio, soy " + name + ".\n" +
        "Me gustaría cotizar un proyecto web a medida:\n" +
        "• Tipo de Proyecto: " + pType + "\n" +
        "• Presupuesto Estimado: " + pBudget + "\n" +
        "• Correo de Contacto: " + email +
        (msg ? "\n• Detalles: " + msg : "");
    }
    return "https://wa.me/584242220172?text=" + encodeURIComponent(text);
  }

  function refreshWhatsAppLink() {
    if (qWhatsApp) qWhatsApp.href = buildWhatsAppUrl();
  }
  window.FLUVO_REFRESH_QUOTE = refreshWhatsAppLink;

  function selectChipGroup(container, value, stateKey) {
    if (!container) return;
    quoteState[stateKey] = value;
    [].forEach.call(container.querySelectorAll(".gl-chip"), function (btn) {
      btn.classList.toggle("is-selected", btn.getAttribute("data-value") === value);
    });
    refreshWhatsAppLink();
  }

  if (qTypeChips) {
    qTypeChips.addEventListener("click", function (e) {
      var btn = e.target.closest(".gl-chip");
      if (btn) selectChipGroup(qTypeChips, btn.getAttribute("data-value"), "projectType");
    });
  }
  if (qBudgetChips) {
    qBudgetChips.addEventListener("click", function (e) {
      var btn = e.target.closest(".gl-chip");
      if (btn) selectChipGroup(qBudgetChips, btn.getAttribute("data-value"), "budget");
    });
  }
  [qName, qEmail, qMessage].forEach(function (inp) {
    if (inp) inp.addEventListener("input", refreshWhatsAppLink);
  });
  refreshWhatsAppLink();

  document.querySelectorAll("[data-select-type]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var typeVal = btn.getAttribute("data-select-type");
      selectChipGroup(qTypeChips, typeVal, "projectType");
      var cfg = document.getElementById("configurator");
      if (cfg) cfg.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      if (qName) setTimeout(function () { qName.focus(); }, 300);
    });
  });

  if (quoteForm) {
    quoteForm.addEventListener("submit", async function (e) {
      e.preventDefault();
      if (!qName.value.trim() || !qEmail.value.trim()) return;
      var tr = window.FLUVO_ACTIVE_I18N;
      qSubmit.disabled = true;
      qSubmit.textContent = (tr && tr.submittingLabel) || "Enviando...";
      if (qStatus) qStatus.hidden = true;
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: "b9e7c3e5-8a21-4d7e-9f01-web3forms-fluvo",
            subject: ((tr && tr.subjectPrefix) || "Nueva Cotización FLUVO: ") + quoteState.projectType + " - " + qName.value.trim(),
            from_name: qName.value.trim(),
            email: qEmail.value.trim(),
            project_type: quoteState.projectType,
            budget: quoteState.budget,
            message: qMessage.value.trim() || ((tr && tr.noDetailsLabel) || "Sin detalles adicionales"),
            to_email: "robertmoya217@gmail.com"
          })
        });
      } catch (err) {}
      qSubmit.disabled = false;
      qSubmit.textContent = (tr && tr.submitLabel) || "Enviar Solicitud";
      if (qStatus) {
        var safeEmail = qEmail.value.trim().replace(/</g, "&lt;");
        qStatus.innerHTML = (tr && typeof tr.statusSuccessHtml === "function")
          ? tr.statusSuccessHtml(safeEmail)
          : (
            "<strong>Solicitud registrada con éxito.</strong> Responderemos a " +
            safeEmail +
            " en menos de 2 horas laborables, o continúa directamente por WhatsApp."
          );
        qStatus.hidden = false;
      }
      refreshWhatsAppLink();
    });
  }

  /* ---- case study inspector & legal modal (#detailModal) ---- */
  var DETAILS = {
    aura: {
      kicker: "01 · FINTECH WEB3",
      title: "Aura Protocol",
      html:
        "<p>Plataforma con visualización de nodos en vidrio fluido 3D optimizada para dispositivos móviles y redes de baja latencia.</p>" +
        "<div class='gl-modal__metrics'>" +
        "<div class='gl-modal__metric'><strong>0.8 s</strong><span>Carga inicial LCP</span></div>" +
        "<div class='gl-modal__metric'><strong>99 / 100</strong><span>Lighthouse Móvil</span></div>" +
        "<div class='gl-modal__metric'><strong>$0 USD</strong><span>Costo de servidor</span></div>" +
        "</div>"
    },
    kroma: {
      kicker: "02 · MODA & ARQUITECTURA",
      title: "Kroma Studio",
      html:
        "<p>Showcase interactivo de piezas editoriales con rotación libre, control de iluminación y refracción física en tiempo real.</p>" +
        "<div class='gl-modal__metrics'>" +
        "<div class='gl-modal__metric'><strong>+140 %</strong><span>Interacción en 3D</span></div>" +
        "<div class='gl-modal__metric'><strong>60 fps</strong><span>Fluidez constante</span></div>" +
        "<div class='gl-modal__metric'><strong>100 %</strong><span>Responsive táctil</span></div>" +
        "</div>"
    },
    pulse: {
      kicker: "03 · SAAS ENTERPRISE",
      title: "Pulse Analytics",
      html:
        "<p>Arquitectura web corporativa ultra-ligera centrada en conversión B2B, telemetría limpia y navegación inmediata.</p>" +
        "<div class='gl-modal__metrics'>" +
        "<div class='gl-modal__metric'><strong>$0 USD</strong><span>Hosting mensual</span></div>" +
        "<div class='gl-modal__metric'><strong>100 %</strong><span>Uptime Edge CDN</span></div>" +
        "<div class='gl-modal__metric'><strong>5–7 días</strong><span>Tiempo de entrega</span></div>" +
        "</div>"
    },
    vortex: {
      kicker: "04 · INFRAESTRUCTURA AI",
      title: "Vortex Labs",
      html:
        "<p>Documentación técnica interactiva y visor 3D modular sin frameworks pesados ni sobrecarga de memoria móvil.</p>" +
        "<div class='gl-modal__metrics'>" +
        "<div class='gl-modal__metric'><strong>99 / 100</strong><span>Lighthouse Móvil</span></div>" +
        "<div class='gl-modal__metric'><strong>&lt; 1 s</strong><span>First Contentful Paint</span></div>" +
        "<div class='gl-modal__metric'><strong>SLA 2h</strong><span>Soporte directo</span></div>" +
        "</div>"
    },
    nexo: {
      kicker: "05 · PORTAL B2B 24/7",
      title: "Nexo Industrial",
      html:
        "<p>Catálogo de especificaciones técnicas y presencia B2B 24/7 con embudo directo hacia WhatsApp y Web3Forms.</p>" +
        "<div class='gl-modal__metrics'>" +
        "<div class='gl-modal__metric'><strong>100 %</strong><span>Uptime Edge CDN</span></div>" +
        "<div class='gl-modal__metric'><strong>30 días</strong><span>Garantía técnica</span></div>" +
        "<div class='gl-modal__metric'><strong>40/30/30</strong><span>Hitos verificables</span></div>" +
        "</div>"
    },
    terms: {
      kicker: "PROTOCOLO OFICIAL FLUVO",
      title: "Hitos 40 / 30 / 30 & Garantía",
      html:
        "<p><strong>1. Estructura de Pagos e Hitos Verificables:</strong><br>• 40% al iniciar requerimientos, arquitectura y dirección visual.<br>• 30% al aprobar el prototipo funcional interactivo.<br>• 30% final contra despliegue en producción y validación Lighthouse.</p>" +
        "<p><strong>2. Garantía Técnica Oficial de 30 Días:</strong><br>Cubre resolución de errores técnicos, compatibilidad entre navegadores y estabilidad visual post-entrega.</p>" +
        "<p><strong>3. Propiedad Intelectual y Edge CDN:</strong><br>Cesión íntegra al completar los hitos sobre infraestructura global con $0 mensual en servidor.</p>"
    },
    privacy: {
      kicker: "CONFIDENCIALIDAD",
      title: "Política de Privacidad",
      html:
        "<p><strong>1. Recolección Mínima:</strong> Únicamente procesamos nombre, correo, alcance y detalles ingresados voluntariamente para elaborar su propuesta técnica.</p>" +
        "<p><strong>2. Cero Rastreadores ni Venta a Terceros:</strong> No empleamos cookies invasivas de publicidad ni compartimos información confidencial con intermediarios.</p>" +
        "<p><strong>3. Contacto Directo:</strong> Puedes solicitar modificación o eliminación de datos escribiendo a robertmoya217@gmail.com o al +58 424 222 0172.</p>"
    }
  };

  window.FLUVO_DETAILS = DETAILS;

  var detailModal = document.getElementById("detailModal");
  var detailKicker = document.getElementById("detailModalKicker");
  var detailTitle = document.getElementById("detailModalTitle");
  var detailBody = document.getElementById("detailModalBody");
  var detailClose = document.getElementById("detailClose");
  var detailDismiss = document.getElementById("detailDismiss");
  var detailToQuote = document.getElementById("detailToQuote");
  var detailOpener = null;

  function openDetailModal(key, openerEl) {
    var tr = window.FLUVO_ACTIVE_I18N;
    var item = (tr && tr.details && tr.details[key]) || DETAILS[key];
    if (!item || !detailModal) return;
    detailOpener = openerEl || document.activeElement;
    detailKicker.textContent = item.kicker;
    detailTitle.textContent = item.title;
    detailBody.innerHTML = item.html;
    detailModal.classList.add("is-open");
    detailModal.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
    if (detailClose) setTimeout(function () { detailClose.focus(); }, 60);
  }

  function closeDetailModal() {
    if (!detailModal || !detailModal.classList.contains("is-open")) return;
    detailModal.classList.remove("is-open");
    detailModal.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";
    if (detailOpener && typeof detailOpener.focus === "function") detailOpener.focus();
  }

  document.querySelectorAll("[data-detail]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openDetailModal(btn.getAttribute("data-detail"), btn);
    });
  });

  if (detailClose) detailClose.addEventListener("click", closeDetailModal);
  if (detailDismiss) detailDismiss.addEventListener("click", closeDetailModal);
  if (detailToQuote) {
    detailToQuote.addEventListener("click", function () {
      closeDetailModal();
    });
  }
  if (detailModal) {
    detailModal.addEventListener("click", function (e) {
      if (e.target === detailModal) closeDetailModal();
    });
  }

  /* ---- smooth anchors ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var href = a.getAttribute("href");
      if (!href || href === "#") return;
      var t = document.querySelector(href);
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    });
  });

  /* ---- scroll sync & escape ---- */
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      onNav();
      onProgress();
      ticking = false;
    });
  }
  refreshScrollMetrics();
  window.addEventListener("load", function () { refreshScrollMetrics(); onScroll(); });
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { refreshScrollMetrics(); onScroll(); });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { refreshScrollMetrics(); onScroll(); });
  }
  onScroll();

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      toggleMenu(false);
      closeDetailModal();
    }
  });
})();
