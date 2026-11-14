import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

await import("../src/i18n.js");
const { TRANSLATIONS, NATIVE_LANGS } = globalThis.__FLUVO_I18N_DATA__;
const baseHtml = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");

function escHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceFlexible(doc, fromText, toHtml, label) {
  // Match raw or HTML-escaped source text with flexible whitespace across newlines
  const rawPattern = escapeRegex(fromText.trim()).replace(/\\s+|\s+/g, "\\s+");
  const escPattern = escapeRegex(escHtml(fromText.trim())).replace(/\\s+|\s+/g, "\\s+");
  const reRaw = new RegExp(rawPattern, "g");
  const reEsc = new RegExp(escPattern, "g");

  if (reEsc.test(doc)) {
    return doc.replace(new RegExp(escPattern, "g"), toHtml);
  }
  if (reRaw.test(doc)) {
    return doc.replace(new RegExp(rawPattern, "g"), toHtml);
  }
  throw new Error(`[build-i18n] Missing match for (${label}): ${fromText.slice(0, 70)}`);
}

const OG_LOCALE = {
  es: "es_419",
  en: "en_US",
  pt: "pt_BR",
  fr: "fr_FR",
  de: "de_DE"
};

const SERVICE_TYPES = {
  en: ["3D WebGL Web Design & Development", "Ultra-Optimized 3D Landing Page", "Flagship Corporate Website", "Interactive B2B Catalogs & Stores", "Static Edge CDN Architecture"],
  pt: ["Design e Desenvolvimento Web 3D WebGL", "Landing Page 3D Ultra-Otimizada", "Site Corporativo Flagship para Empresas", "Catálogos B2B Interativos e Lojas", "Arquitetura Estática Edge CDN"],
  fr: ["Conception et Développement Web 3D WebGL", "Landing Page 3D Ultra-Optimisée", "Site Corporate Flagship pour Entreprises", "Catalogues B2B Interactifs et Boutiques", "Architecture Statique Edge CDN"],
  de: ["WebGL 3D-Webdesign & Entwicklung", "Ultra-Optimierte 3D-Landingpage", "Flagship-Unternehmenswebsite", "Interaktive B2B-Kataloge & Shops", "Statische Edge-CDN-Architektur"]
};

const STRUCTURED_I18N = {
  en: {
    breadcrumbEdition: "3D Web Design & Development (English)",
    serviceName: "FLUVO Studio — 3D Web Design, Corporate Websites & Liquid Glass",
    catalogName: "FLUVO Web Solutions",
    offer1Desc: "Flagship 3D landing page with WebGL liquid glass, 99/100 mobile Lighthouse score, and 5–7 business day delivery.",
    offer2Desc: "Multi-section corporate website, e-commerce, SaaS platform, or B2B catalog delivered in 7–10 business days."
  },
  pt: {
    breadcrumbEdition: "Design e Desenvolvimento Web 3D (Português)",
    serviceName: "FLUVO Studio — Web Design 3D, Sites Corporativos & Vidro Fluido",
    catalogName: "Soluções Web FLUVO",
    offer1Desc: "Landing page flagship 3D com vidro fluido WebGL, 99/100 no Lighthouse móvel e entrega em 5–7 dias úteis.",
    offer2Desc: "Site corporativo multi-seção, e-commerce, plataforma SaaS ou catálogo B2B com entrega em 7–10 dias úteis."
  },
  fr: {
    breadcrumbEdition: "Conception et Développement Web 3D (Français)",
    serviceName: "FLUVO Studio — Design Web 3D, Sites Corporate & Verre Fluide",
    catalogName: "Solutions Web FLUVO",
    offer1Desc: "Landing page flagship 3D avec verre fluide WebGL, 99/100 Lighthouse mobile et livraison en 5–7 jours ouvrés.",
    offer2Desc: "Site corporate multi-sections, e-commerce, plateforme SaaS ou catalogue B2B livré en 7–10 jours ouvrés."
  },
  de: {
    breadcrumbEdition: "3D-Webdesign & Entwicklung (Deutsch)",
    serviceName: "FLUVO Studio — 3D-Webdesign, Unternehmenswebsites & Liquid Glass",
    catalogName: "FLUVO Web-Lösungen",
    offer1Desc: "Flagship-3D-Landingpage mit WebGL Liquid Glass, 99/100 Mobile Lighthouse und Lieferung in 5–7 Werktagen.",
    offer2Desc: "Mehrseitige Unternehmenswebsite, E-Commerce, SaaS-Plattform oder B2B-Katalog mit Lieferung in 7–10 Werktagen."
  }
};

const es = TRANSLATIONS.es;

for (const lang of NATIVE_LANGS) {
  if (lang === "es") continue;
  const t = TRANSLATIONS[lang];
  const sMeta = STRUCTURED_I18N[lang];
  let out = baseHtml;

  // 1. HTML root, canonical, metadata & OG
  out = out.replace('<html lang="es" data-page-lang="es">', `<html lang="${t.htmlLang}" data-page-lang="${lang}">`);
  out = out.replace(
    `<title>${escHtml(es.title)}</title>`,
    `<title>${escHtml(t.title)}</title>`
  );
  out = out.replace(
    `<meta name="description" content="${escHtml(es.description)}" />`,
    `<meta name="description" content="${escHtml(t.description)}" />`
  );
  out = out.replace(
    '<link rel="canonical" href="https://fluvo.org/" />',
    `<link rel="canonical" href="https://fluvo.org/${lang}/" />`
  );
  out = out.replace(
    '<link rel="sitemap" type="application/xml" title="Sitemap" href="https://fluvo.org/sitemap.xml" />',
    '<link rel="sitemap" type="application/xml" title="Sitemap" href="https://fluvo.org/sitemap.xml" />'
  );
  out = out.replace(
    '<meta property="og:url" content="https://fluvo.org/" />',
    `<meta property="og:url" content="https://fluvo.org/${lang}/" />`
  );
  out = out.replace(
    '<meta property="og:locale" content="es_419" />',
    `<meta property="og:locale" content="${OG_LOCALE[lang]}" />`
  );
  out = out.replace(
    `<meta property="og:title" content="${escHtml(es.title)}" />`,
    `<meta property="og:title" content="${escHtml(t.title)}" />`
  );
  out = out.replace(
    `<meta name="twitter:title" content="${escHtml(es.title)}" />`,
    `<meta name="twitter:title" content="${escHtml(t.title)}" />`
  );
  out = replaceFlexible(
    out,
    'content="Carga sub-segundo (0.8s), 99/100 en Lighthouse móvil, cero costo mensual de servidor y diseño 3D adaptativo para empresas globales."',
    `content="${escHtml(t.description)}"`,
    `${lang}.ogDesc`
  );
  out = replaceFlexible(
    out,
    'content="Sitios web 3D con vidrio fluido y arquitectura Edge estática sin costo mensual de servidor. Entrega global 5–10 días."',
    `content="${escHtml(t.description)}"`,
    `${lang}.twDesc`
  );

  // 2. Replace JSON-LD @graph cleanly
  const jsonLdObj = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://fluvo.org/#organization",
        name: "FLUVO Studio",
        alternateName: "FLUVO.ORG",
        url: "https://fluvo.org/",
        logo: {
          "@type": "ImageObject",
          url: "https://fluvo.org/public/logo/Isotipo_Fluvo_Favicon.png"
        },
        email: "robertmoya217@gmail.com",
        telephone: "+584242220172"
      },
      {
        "@type": "WebSite",
        "@id": `https://fluvo.org/${lang}/#website`,
        url: `https://fluvo.org/${lang}/`,
        name: t.title,
        publisher: { "@id": "https://fluvo.org/#organization" },
        inLanguage: t.htmlLang
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://fluvo.org/${lang}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "FLUVO Studio",
            item: "https://fluvo.org/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: sMeta.breadcrumbEdition,
            item: `https://fluvo.org/${lang}/`
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": `https://fluvo.org/${lang}/#service`,
        name: sMeta.serviceName,
        url: `https://fluvo.org/${lang}/`,
        image: "https://fluvo.org/public/logo/Isotipo_Fluvo_Favicon.png",
        provider: { "@id": "https://fluvo.org/#organization" },
        areaServed: "Worldwide",
        serviceType: SERVICE_TYPES[lang],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: sMeta.catalogName,
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "FLUVO Showcase 3D",
                description: sMeta.offer1Desc
              }
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "FLUVO Flagship Enterprise",
                description: sMeta.offer2Desc
              }
            }
          ]
        },
        availableLanguage: ["Spanish", "English", "Portuguese", "French", "German"]
      },
      {
        "@type": "FAQPage",
        "@id": `https://fluvo.org/${lang}/#faq`,
        mainEntity: t.protocol.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      }
    ]
  };
  out = out.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n  ${JSON.stringify(jsonLdObj, null, 2).replace(/\n/g, "\n  ")}\n  </script>`
  );

  // 3. Language selector default
  out = out.replace(`<option value="${lang}">`, `<option value="${lang}" selected>`);

  // 4. Nav & overlay menu
  es.nav.links.forEach((lbl, i) => {
    out = out.replace(`>${escHtml(lbl)}</a>`, `>${escHtml(t.nav.links[i])}</a>`);
  });
  out = out.replace(`aria-label="${es.nav.brandAria}"`, `aria-label="${escHtml(t.nav.brandAria)}"`);
  out = out.replaceAll(`alt="${escHtml(es.nav.brandImgAlt)}"`, `alt="${escHtml(t.nav.brandImgAlt)}"`);
  out = out.replace(`aria-label="${es.nav.burgerAria}"`, `aria-label="${escHtml(t.nav.burgerAria)}"`);

  es.menu.items.forEach((lbl, i) => {
    const num = ("0" + (i + 1)).slice(-2);
    out = replaceFlexible(out, `${escHtml(lbl)}<span>${num}</span>`, `${escHtml(t.menu.items[i])}<span>${num}</span>`, `${lang}.menu.${i}`);
  });
  out = replaceFlexible(
    out,
    "Flujo · Legitimidad · Unión · Visión · Objetivos.<br /> Sitios web 3D con vidrio fluido pensados para responder al instante en redes móviles y globales.",
    t.menu.descHtml,
    `${lang}.menu.desc`
  );

  // 5. Hero
  out = replaceFlexible(out, es.hero.eyebrow, escHtml(t.hero.eyebrow), `${lang}.hero.eyebrow`);
  out = replaceFlexible(out, es.hero.titleHtml, t.hero.titleHtml, `${lang}.hero.title`);
  out = replaceFlexible(out, es.hero.copy, escHtml(t.hero.copy), `${lang}.hero.copy`);
  out = replaceFlexible(out, `>${es.hero.ctaPrimary}</a>`, `>${escHtml(t.hero.ctaPrimary)}</a>`, `${lang}.hero.cta1`);
  out = replaceFlexible(out, `>${es.hero.ctaSecondary}</a>`, `>${escHtml(t.hero.ctaSecondary)}</a>`, `${lang}.hero.cta2`);
  out = replaceFlexible(out, es.hero.modesLabel, escHtml(t.hero.modesLabel), `${lang}.hero.modesLabel`);
  out = out.replace(`aria-label="${es.hero.modesAria}"`, `aria-label="${escHtml(t.hero.modesAria)}"`);
  es.hero.modes.forEach((m, i) => {
    out = replaceFlexible(out, `>${m}</button>`, `>${escHtml(t.hero.modes[i])}</button>`, `${lang}.hero.mode.${i}`);
  });
  es.hero.telemetryHtml.forEach((th, i) => {
    out = replaceFlexible(out, `<span>${th}</span>`, `<span>${t.hero.telemetryHtml[i]}</span>`, `${lang}.hero.tel.${i}`);
  });

  // 6. Manifesto & Odometers
  out = replaceFlexible(out, es.manifesto.eyebrow, escHtml(t.manifesto.eyebrow), `${lang}.man.eyebrow`);
  out = replaceFlexible(out, es.manifesto.titleHtml, t.manifesto.titleHtml, `${lang}.man.title`);
  out = replaceFlexible(out, es.manifesto.ledeHtml, t.manifesto.ledeHtml, `${lang}.man.lede`);
  out = out.replace(
    `<span class="stat__suffix">${es.manifesto.monthSuffix}</span>`,
    `<span class="stat__suffix">${escHtml(t.manifesto.monthSuffix)}</span>`
  );
  es.manifesto.labels.forEach((lbl, i) => {
    out = replaceFlexible(out, lbl, escHtml(t.manifesto.labels[i]), `${lang}.man.lbl.${i}`);
  });

  // 7. Engineering rail
  out = out.replace(`aria-label="${es.rail.aria}"`, `aria-label="${escHtml(t.rail.aria)}"`);
  out = out.replace(`aria-label="${es.rail.indexAria}"`, `aria-label="${escHtml(t.rail.indexAria)}"`);
  out = out.replace(`aria-label="${es.rail.prevAria}"`, `aria-label="${escHtml(t.rail.prevAria)}"`);
  out = out.replace(`aria-label="${es.rail.nextAria}"`, `aria-label="${escHtml(t.rail.nextAria)}"`);
  out = replaceFlexible(out, es.rail.eyebrow, escHtml(t.rail.eyebrow), `${lang}.rail.eyebrow`);
  out = replaceFlexible(out, es.rail.titleHtml, t.rail.titleHtml, `${lang}.rail.title`);
  es.rail.slides.forEach((s, i) => {
    out = replaceFlexible(out, s.tag, escHtml(t.rail.slides[i].tag), `${lang}.rail.tag.${i}`);
    out = replaceFlexible(out, `<h4>${s.title}</h4>`, `<h4>${escHtml(t.rail.slides[i].title)}</h4>`, `${lang}.rail.h4.${i}`);
    out = replaceFlexible(out, s.desc, escHtml(t.rail.slides[i].desc), `${lang}.rail.desc.${i}`);
  });

  // 8. Duo panels
  es.duo.forEach((d, i) => {
    out = replaceFlexible(out, d.eyebrow, escHtml(t.duo[i].eyebrow), `${lang}.duo.ey.${i}`);
    out = replaceFlexible(out, d.titleHtml, t.duo[i].titleHtml, `${lang}.duo.h3.${i}`);
    out = replaceFlexible(out, d.desc, escHtml(t.duo[i].desc), `${lang}.duo.desc.${i}`);
    out = replaceFlexible(out, d.specs, escHtml(t.duo[i].specs), `${lang}.duo.specs.${i}`);
  });

  // 9. Cases carousel
  out = replaceFlexible(out, es.cases.eyebrow, escHtml(t.cases.eyebrow), `${lang}.cases.eyebrow`);
  out = replaceFlexible(out, es.cases.title, escHtml(t.cases.title), `${lang}.cases.title`);
  out = replaceFlexible(out, es.cases.hintHtml, t.cases.hintHtml, `${lang}.cases.hint`);
  out = out.replace(`aria-label="${es.cases.trackAria}"`, `aria-label="${escHtml(t.cases.trackAria)}"`);
  out = out.replace(`aria-label="${es.cases.prevAria}"`, `aria-label="${escHtml(t.cases.prevAria)}"`);
  out = out.replace(`aria-label="${es.cases.nextAria}"`, `aria-label="${escHtml(t.cases.nextAria)}"`);
  es.cases.items.forEach((c, i) => {
    out = replaceFlexible(out, `<p class="gl-slide__kicker">${escHtml(c.kicker)}</p>`, `<p class="gl-slide__kicker">${escHtml(t.cases.items[i].kicker)}</p>`, `${lang}.case.k.${i}`);
    out = replaceFlexible(out, `<p>${escHtml(c.desc)}</p>`, `<p>${escHtml(t.cases.items[i].desc)}</p>`, `${lang}.case.d.${i}`);
    out = replaceFlexible(out, `<span class="gl-slide__metric">${escHtml(c.metric)}</span>`, `<span class="gl-slide__metric">${escHtml(t.cases.items[i].metric)}</span>`, `${lang}.case.m.${i}`);
    out = out.replace(`aria-label="${c.btnAria}"`, `aria-label="${escHtml(t.cases.items[i].btnAria)}"`);
  });

  // 10. Protocol & FAQ
  out = replaceFlexible(out, es.protocol.eyebrow, escHtml(t.protocol.eyebrow), `${lang}.proto.eyebrow`);
  out = replaceFlexible(out, es.protocol.titleHtml, t.protocol.titleHtml, `${lang}.proto.title`);
  es.protocol.steps.forEach((st, i) => {
    out = replaceFlexible(out, st.num, escHtml(t.protocol.steps[i].num), `${lang}.proto.num.${i}`);
    out = replaceFlexible(out, `>${escHtml(st.title)}</h3>`, `>${escHtml(t.protocol.steps[i].title)}</h3>`, `${lang}.proto.h3.${i}`);
    out = replaceFlexible(out, st.desc, escHtml(t.protocol.steps[i].desc), `${lang}.proto.desc.${i}`);
  });
  es.protocol.faqs.forEach((fq, i) => {
    out = replaceFlexible(out, `<span>${escHtml(fq.q)}</span>`, `<span>${escHtml(t.protocol.faqs[i].q)}</span>`, `${lang}.faq.q.${i}`);
    out = replaceFlexible(out, `<p>${escHtml(fq.a)}</p>`, `<p>${escHtml(t.protocol.faqs[i].a)}</p>`, `${lang}.faq.a.${i}`);
  });

  // 11. Split word
  out = out.replace(`<span data-reveal>${es.split[0]}</span>`, `<span data-reveal>${escHtml(t.split[0])}</span>`);
  out = out.replace(`<span data-reveal data-reveal-delay="1">${es.split[1]}</span>`, `<span data-reveal data-reveal-delay="1">${escHtml(t.split[1])}</span>`);

  // 12. Solutions & quote configurator
  out = replaceFlexible(out, es.cotizar.eyebrow, escHtml(t.cotizar.eyebrow), `${lang}.cot.ey`);
  out = replaceFlexible(out, es.cotizar.title, escHtml(t.cotizar.title), `${lang}.cot.h2`);
  es.cotizar.cards.forEach((sc, i) => {
    out = replaceFlexible(out, sc.kicker, escHtml(t.cotizar.cards[i].kicker), `${lang}.cot.ck.${i}`);
    out = replaceFlexible(out, sc.desc, escHtml(t.cotizar.cards[i].desc), `${lang}.cot.cd.${i}`);
    out = replaceFlexible(out, `>${sc.cta}</button>`, `>${escHtml(t.cotizar.cards[i].cta)}</button>`, `${lang}.cot.cb.${i}`);
  });
  out = replaceFlexible(out, es.cotizar.cfgEyebrow, escHtml(t.cotizar.cfgEyebrow), `${lang}.cfg.ey`);
  out = replaceFlexible(out, es.cotizar.cfgTitleHtml, t.cotizar.cfgTitleHtml, `${lang}.cfg.h2`);
  out = replaceFlexible(out, es.cotizar.cfgLede, escHtml(t.cotizar.cfgLede), `${lang}.cfg.lede`);
  out = replaceFlexible(out, `<span>${es.cotizar.emailLabel}</span>`, `<span>${escHtml(t.cotizar.emailLabel)}</span>`, `${lang}.cfg.em`);
  out = replaceFlexible(out, `<span>${es.cotizar.waLabel}</span>`, `<span>${escHtml(t.cotizar.waLabel)}</span>`, `${lang}.cfg.wa`);

  out = replaceFlexible(out, `>${es.cotizar.form.nameLabel}</label>`, `>${escHtml(t.cotizar.form.nameLabel)}</label>`, `${lang}.f.nl`);
  out = out.replace(`placeholder="${es.cotizar.form.namePlaceholder}"`, `placeholder="${escHtml(t.cotizar.form.namePlaceholder)}"`);
  out = replaceFlexible(out, `>${es.cotizar.form.emailLabel}</label>`, `>${escHtml(t.cotizar.form.emailLabel)}</label>`, `${lang}.f.el`);
  out = out.replace(`placeholder="${es.cotizar.form.emailPlaceholder}"`, `placeholder="${escHtml(t.cotizar.form.emailPlaceholder)}"`);
  out = replaceFlexible(out, `<label>${es.cotizar.form.typeLabel}</label>`, `<label>${escHtml(t.cotizar.form.typeLabel)}</label>`, `${lang}.f.tl`);
  es.cotizar.form.types.forEach((tp, i) => {
    out = out.replace(`data-value="${tp}">${tp}</button>`, `data-value="${tp}">${escHtml(t.cotizar.form.types[i])}</button>`);
  });
  out = replaceFlexible(out, `<label>${es.cotizar.form.budgetLabel}</label>`, `<label>${escHtml(t.cotizar.form.budgetLabel)}</label>`, `${lang}.f.bl`);
  out = out.replace(
    `data-value="${es.cotizar.form.budgetUndefined}">${es.cotizar.form.budgetUndefined}</button>`,
    `data-value="${es.cotizar.form.budgetUndefined}">${escHtml(t.cotizar.form.budgetUndefined)}</button>`
  );
  out = replaceFlexible(out, `>${es.cotizar.form.detailsLabel}</label>`, `>${escHtml(t.cotizar.form.detailsLabel)}</label>`, `${lang}.f.dl`);
  out = out.replace(`placeholder="${es.cotizar.form.detailsPlaceholder}"`, `placeholder="${escHtml(t.cotizar.form.detailsPlaceholder)}"`);
  out = replaceFlexible(out, `>${es.cotizar.form.submit}</button>`, `>${escHtml(t.cotizar.form.submit)}</button>`, `${lang}.f.sub`);
  out = replaceFlexible(out, `>${es.cotizar.form.whatsapp}</a>`, `>${escHtml(t.cotizar.form.whatsapp)}</a>`, `${lang}.f.wa`);

  // 13. Footer & Modal UI
  out = replaceFlexible(out, es.footer.desc, escHtml(t.footer.desc), `${lang}.ft.desc`);
  out = replaceFlexible(out, `<h5>${es.footer.col1Heading}</h5>`, `<h5>${escHtml(t.footer.col1Heading)}</h5>`, `${lang}.ft.c1`);
  es.footer.col1Links.forEach((l, i) => {
    out = replaceFlexible(out, `>${escHtml(l)}</a>`, `>${escHtml(t.footer.col1Links[i])}</a>`, `${lang}.ft.l1.${i}`);
  });
  out = replaceFlexible(out, `<h5>${es.footer.col2Heading}</h5>`, `<h5>${escHtml(t.footer.col2Heading)}</h5>`, `${lang}.ft.c2`);
  es.footer.col2Links.forEach((l, i) => {
    out = replaceFlexible(out, `>${escHtml(l)}</a>`, `>${escHtml(t.footer.col2Links[i])}</a>`, `${lang}.ft.l2.${i}`);
  });
  out = replaceFlexible(out, `<h5>${es.footer.col3Heading}</h5>`, `<h5>${escHtml(t.footer.col3Heading)}</h5>`, `${lang}.ft.c3`);
  es.footer.col3Buttons.forEach((b, i) => {
    out = replaceFlexible(out, `>${escHtml(b)}</button>`, `>${escHtml(t.footer.col3Buttons[i])}</button>`, `${lang}.ft.b3.${i}`);
  });
  es.footer.col3Links.forEach((l, i) => {
    out = replaceFlexible(out, `>${escHtml(l)}</a>`, `>${escHtml(t.footer.col3Links[i])}</a>`, `${lang}.ft.l3.${i}`);
  });
  out = out.replace(`aria-label="${escHtml(es.footer.footLangsAria)}"`, `aria-label="${escHtml(t.footer.footLangsAria)}"`);
  out = out
    .replace('href="https://fluvo.org/" hreflang="es" lang="es" aria-current="page"', 'href="https://fluvo.org/" hreflang="es" lang="es"')
    .replace(`href="https://fluvo.org/${lang}/" hreflang="${lang}" lang="${lang}"`, `href="https://fluvo.org/${lang}/" hreflang="${lang}" lang="${lang}" aria-current="page"`);
  es.footer.legalButtons.forEach((b, i) => {
    out = replaceFlexible(out, `>${escHtml(b)}</button>`, `>${escHtml(t.footer.legalButtons[i])}</button>`, `${lang}.ft.lb.${i}`);
  });
  out = out.replace(`aria-label="${es.modalUi.closeAria}"`, `aria-label="${escHtml(t.modalUi.closeAria)}"`);
  out = replaceFlexible(out, `>${es.modalUi.toQuote}</a>`, `>${escHtml(t.modalUi.toQuote)}</a>`, `${lang}.m.tq`);
  out = replaceFlexible(out, `>${es.modalUi.dismiss}</button>`, `>${escHtml(t.modalUi.dismiss)}</button>`, `${lang}.m.dm`);

  // 14. Adjust relative asset paths for /<lang>/ subdirectory
  out = out
    .replaceAll('href="./public/', 'href="../public/')
    .replaceAll('src="./public/', 'src="../public/')
    .replaceAll('href="./manifest.json"', 'href="../manifest.json"')
    .replaceAll('href="./src/styles.css"', 'href="../src/styles.css"')
    .replaceAll('href="./sitemap.xml"', 'href="../sitemap.xml"')
    .replaceAll('href="./robots.txt"', 'href="../robots.txt"')
    .replaceAll('href="./llms.txt"', 'href="../llms.txt"')
    .replaceAll('src="./src/glass-engine.js"', 'src="../src/glass-engine.js"')
    .replaceAll('src="./src/i18n.js"', 'src="../src/i18n.js"')
    .replaceAll('src="./src/app.js"', 'src="../src/app.js"');

  const dir = path.join(ROOT, lang);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), out, "utf8");
  console.log(`Generated ${lang}/index.html (${out.length} bytes)`);
}

// 15. Generate bidirectional worldwide sitemap.xml covering all 5 static routes + assets
const ALTERNATES = [
  ["x-default", "https://fluvo.org/en/"],
  ["es", "https://fluvo.org/"],
  ["es-419", "https://fluvo.org/"],
  ["es-US", "https://fluvo.org/"],
  ["es-ES", "https://fluvo.org/"],
  ["es-MX", "https://fluvo.org/"],
  ["es-CO", "https://fluvo.org/"],
  ["es-AR", "https://fluvo.org/"],
  ["es-CL", "https://fluvo.org/"],
  ["es-PE", "https://fluvo.org/"],
  ["es-VE", "https://fluvo.org/"],
  ["es-PA", "https://fluvo.org/"],
  ["es-EC", "https://fluvo.org/"],
  ["es-DO", "https://fluvo.org/"],
  ["es-CR", "https://fluvo.org/"],
  ["es-UY", "https://fluvo.org/"],
  ["en", "https://fluvo.org/en/"],
  ["en-US", "https://fluvo.org/en/"],
  ["en-GB", "https://fluvo.org/en/"],
  ["en-CA", "https://fluvo.org/en/"],
  ["en-AU", "https://fluvo.org/en/"],
  ["pt", "https://fluvo.org/pt/"],
  ["pt-BR", "https://fluvo.org/pt/"],
  ["pt-PT", "https://fluvo.org/pt/"],
  ["fr", "https://fluvo.org/fr/"],
  ["fr-CA", "https://fluvo.org/fr/"],
  ["fr-BE", "https://fluvo.org/fr/"],
  ["fr-CH", "https://fluvo.org/fr/"],
  ["de", "https://fluvo.org/de/"],
  ["de-AT", "https://fluvo.org/de/"],
  ["de-CH", "https://fluvo.org/de/"]
];

const alternateXml = ALTERNATES
  .map(([hl, href]) => `    <xhtml:link rel="alternate" hreflang="${hl}" href="${href}" />`)
  .join("\n");

const imagesXml = `    <image:image>
      <image:loc>https://fluvo.org/public/logo/isotipo-mono.svg</image:loc>
      <image:title>FLUVO Official Brand Mark</image:title>
      <image:caption>FLUVO Studio — 3D Web Engineering &amp; Liquid Glass</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://fluvo.org/public/logo/Isotipo_Fluvo_Favicon.png</image:loc>
      <image:title>FLUVO Studio Logo</image:title>
      <image:caption>FLUVO — Ultra-Optimized 3D Liquid-Glass Websites</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://fluvo.org/public/logo/Isologo_Fluvo_Oscuro.svg</image:loc>
      <image:title>FLUVO Dark Edition Logo</image:title>
      <image:caption>FLUVO.ORG — Edge Static CDN &amp; WebGL Core</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://fluvo.org/public/logo/Isologo_Fluvo_Claro.svg</image:loc>
      <image:title>FLUVO Light Edition Logo</image:title>
      <image:caption>FLUVO Studio — B2B Interactive 3D Showcases</image:caption>
    </image:image>
    <image:image>
      <image:loc>https://fluvo.org/public/logo/logo.gif</image:loc>
      <image:title>FLUVO Animated Emblem</image:title>
      <image:caption>FLUVO — 0.8s Sub-Second Load &amp; 99/100 Mobile Lighthouse</image:caption>
    </image:image>`;

const ROUTES = [
  { loc: "https://fluvo.org/", priority: "1.0", images: true },
  { loc: "https://fluvo.org/en/", priority: "1.0", images: false },
  { loc: "https://fluvo.org/pt/", priority: "0.95", images: false },
  { loc: "https://fluvo.org/fr/", priority: "0.95", images: false },
  { loc: "https://fluvo.org/de/", priority: "0.95", images: false }
];

const routeUrlsXml = ROUTES.map((r) => `  <url>
    <loc>${r.loc}</loc>
    <lastmod>2026-11-13</lastmod>
    <changefreq>daily</changefreq>
    <priority>${r.priority}</priority>
${alternateXml}${r.images ? "\n" + imagesXml : ""}
  </url>`).join("\n\n");

const sitemapOut = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${routeUrlsXml}

  <url>
    <loc>https://fluvo.org/llms.txt</loc>
    <lastmod>2026-11-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <url>
    <loc>https://fluvo.org/manifest.json</loc>
    <lastmod>2026-11-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
`;

fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemapOut, "utf8");
console.log(`Updated sitemap.xml (${sitemapOut.length} bytes)`);
