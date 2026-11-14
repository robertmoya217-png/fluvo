/* ============================================================
   FLUVO.ORG — Dual-Layer Worldwide i18n Engine
   1. Instant native 5-language engine (es, en, pt, fr, de)
   2. Automatic Google Website Translator fallback (100+ languages)
   ============================================================ */
(function (root) {
  "use strict";

  var NATIVE_LANGS = ["es", "en", "pt", "fr", "de"];
  var GOOGLE_EXTRA = {
    it: "it",
    zh: "zh-CN",
    "zh-cn": "zh-CN",
    "zh-tw": "zh-TW",
    ja: "ja",
    ar: "ar",
    ru: "ru",
    ko: "ko",
    nl: "nl",
    tr: "tr",
    hi: "hi",
    pl: "pl",
    sv: "sv",
    id: "id",
    vi: "vi",
    th: "th",
    uk: "uk",
    el: "el",
    he: "iw",
    ro: "ro",
    cs: "cs",
    da: "da",
    fi: "fi",
    no: "no"
  };

  var TRANSLATIONS = {
    es: {
      htmlLang: "es",
      title: "FLUVO — Diseño y Desarrollo Web 3D Ultra-Rápido | Sitios Corporativos",
      description: "FLUVO Studio diseña y desarrolla páginas web corporativas, landing pages 3D con vidrio fluido y catálogos B2B que cargan en 0.8s (99/100 Lighthouse móvil) sin costo mensual de servidor.",
      nav: {
        links: ["Ingeniería", "Casos", "Cotizar"],
        brandAria: "FLUVO — Inicio",
        brandImgAlt: "Isotipo oficial de FLUVO Studio — Diseño y Desarrollo de Sitios Web 3D Ultra-Optimizados",
        burgerAria: "Abrir menú"
      },
      menu: {
        items: ["Filosofía", "Ingeniería 3D", "Casos de Éxito", "Protocolo 40/30/30", "Soluciones & Cotizar"],
        eyebrow: "FLUVO.ORG · ESTUDIO DIGITAL",
        descHtml: "Flujo · Legitimidad · Unión · Visión · Objetivos.<br />Sitios web 3D con vidrio fluido pensados para responder al instante en redes móviles y globales.",
        waLabel: "+58 424 222 0172 · WhatsApp"
      },
      hero: {
        eyebrow: "FLUVO.ORG · INGENIERÍA WEB 3D & VIDRIO FLUIDO",
        titleHtml: "Cristal líquido<br>en carga real",
        copy: "Diseño y desarrollo de páginas web rápidas para empresas, landing pages 3D con vidrio fluido y catálogos B2B que abren al instante en cualquier móvil sin costo mensual de servidor.",
        ctaPrimary: "Iniciar Proyecto",
        ctaSecondary: "Explorar Arquitectura",
        modesLabel: "Material Óptico 3D",
        modesAria: "Modo óptico del cristal 3D",
        modes: ["01 Obsidiana", "02 Bronce Óptico", "03 Cuarzo Líquido"],
        telemetryHtml: [
          "<strong>0.8s</strong> LCP Móvil",
          "<strong>99/100</strong> Lighthouse",
          "<strong>$0/mes</strong> Servidor"
        ]
      },
      manifesto: {
        eyebrow: "01 / Filosofía de Flujo",
        titleHtml: "El peso visual del vidrio,<br><span class=\"hl\">sin el peso en kilobytes.</span>",
        ledeHtml: "La mayoría de los sitios 3D sacrifican el tiempo de carga por adorno. En FLUVO calibramos <span class=\"hl\">shaders modulares en vidrio líquido, renderizado adaptativo Mobile-First y despliegue Edge</span> para que la primera impresión ocurra en menos de un segundo.",
        monthSuffix: "/mes",
        labels: [
          "Carga inicial verificada en red 3G",
          "Puntuación Google Lighthouse Móvil",
          "Costo mensual de servidor en CDN Edge",
          "Disponibilidad global en producción"
        ]
      },
      rail: {
        aria: "Secuencia de Ingeniería 3D",
        indexAria: "Índice de arquitectura",
        prevAria: "Pilar anterior",
        nextAria: "Siguiente pilar",
        eyebrow: "02 / Ingeniería en Tiempo Real",
        titleHtml: "Cinco pilares de<br>arquitectura FLUVO",
        slides: [
          {
            tag: "01 · SUPERFICIE ÓPTICA",
            title: "Vidrio Fluido Dinámico",
            desc: "Shaders con refracción calibrada e iluminación de estudio sobre fondo obsidiana sin saturar el hilo principal."
          },
          {
            tag: "02 · COMPILACIÓN MODULAR",
            title: "Núcleo WebGL Ligero",
            desc: "Geometría matemática compilada al instante que reemplaza pesados archivos 3D externos de decenas de megabytes."
          },
          {
            tag: "03 · VELOCIDAD SUB-SEGUNDO",
            title: "Carga Inicial 0.8s",
            desc: "Arquitectura estática sin bloqueos de renderizado ni JavaScript ocioso, probada bajo perfiles de red 3G reales."
          },
          {
            tag: "04 · ERGONOMÍA TÁCTIL",
            title: "Diseño Mobile-First",
            desc: "Interacción fluida con cursor y gesto táctil, control térmico inteligente y objetivos de toque amplios."
          },
          {
            tag: "05 · INFRAESTRUCTURA CERO",
            title: "Edge CDN Global 100%",
            desc: "Alojamiento estático en Cloudflare o GitHub Pages con cero vulnerabilidades backend y $0 mensual de mantenimiento."
          }
        ]
      },
      duo: [
        {
          eyebrow: "03 / Estética de Precisión",
          titleHtml: "Refracción física<br>adaptativa",
          desc: "Cada escena ajusta su densidad de trazado y FPS según el dispositivo y las preferencias de movimiento del usuario, conservando fidelidad visual sin consumir batería.",
          specs: "INTERSECTION PAUSING · CERO FUGAS WEBGL · 60 FPS"
        },
        {
          eyebrow: "04 / Cobertura & Alcance",
          titleHtml: "Fluidez total incluso<br>en redes limitadas",
          desc: "Pensado primero para móviles y tablets en conexiones reales: HTML estático inmediato, fuentes ligeras y entrega directa desde nodos Edge distribuidos globalmente.",
          specs: "EDGE CDN · CERO BACKEND VULNERABLE · TIEMPO REAL"
        }
      ],
      cases: {
        eyebrow: "05 / Portafolio Verificado",
        title: "Proyectos insignia",
        hintHtml: "Casos de éxito desarrollados bajo la arquitectura FLUVO. Pulsa <strong style=\"color:var(--ink)\">+</strong> para abrir el análisis técnico.",
        trackAria: "Portafolio de proyectos FLUVO",
        prevAria: "Proyecto anterior",
        nextAria: "Siguiente proyecto",
        items: [
          {
            kicker: "FINTECH WEB3",
            desc: "Plataforma con visualización de nodos en vidrio fluido 3D.",
            metric: "0.8S CARGA INICIAL · 99 LIGHTHOUSE",
            btnAria: "Inspeccionar Aura Protocol"
          },
          {
            kicker: "MODA & ARQUITECTURA",
            desc: "Showcase editorial interactivo con rotación libre y refracción en tiempo real.",
            metric: "+140% INTERACCIÓN TÁCTIL",
            btnAria: "Inspeccionar Kroma Studio"
          },
          {
            kicker: "SAAS ENTERPRISE",
            desc: "Sitio corporativo ultra-ligero enfocado en conversión y telemetría visual.",
            metric: "$0 COSTO DE SERVIDOR MENSUAL",
            btnAria: "Inspeccionar Pulse Analytics"
          },
          {
            kicker: "INFRAESTRUCTURA AI",
            desc: "Documentación técnica interactiva y visor 3D modular sin frameworks pesados.",
            metric: "99/100 LIGHTHOUSE MÓVIL",
            btnAria: "Inspeccionar Vortex Labs"
          },
          {
            kicker: "PORTAL B2B 24/7",
            desc: "Catálogo de especificaciones técnicas con embudo directo a WhatsApp y cotización.",
            metric: "100% UPTIME GLOBAL EDGE",
            btnAria: "Inspeccionar Nexo Industrial"
          }
        ]
      },
      protocol: {
        eyebrow: "06 / Garantía & Hitos",
        titleHtml: "Entrega en 5–10 días<br>laborables",
        steps: [
          {
            num: "HITO 01 · 40% ANTICIPO",
            title: "Arquitectura & Dirección 3D",
            desc: "Definición de estructura, tokens tipográficos, prototipo de shaders en vidrio líquido y arquitectura estática orientada a conversión."
          },
          {
            num: "HITO 02 · 30% APROBACIÓN",
            title: "Prototipo Funcional Interactivo",
            desc: "Validación en navegador real tanto en escritorio como en teléfono móvil, afinando transiciones, contraste y respuesta de cotización."
          },
          {
            num: "HITO 03 · 30% FINAL · 30 DÍAS DE GARANTÍA",
            title: "Auditoría & Despliegue Edge CDN",
            desc: "Publicación en red global con cesión de propiedad intelectual, métricas verificadas y 30 días continuos de garantía técnica oficial."
          }
        ],
        faqs: [
          {
            q: "¿Cómo logra FLUVO sitios tan rápidos con gráficos 3D?",
            a: "Empleamos motores WebGL modulares y shaders procedimentales compilados al instante sin pesadas librerías externas ni modelos binarios de megabytes. Cuando detectamos móviles o redes lentas, la escena se auto-escala."
          },
          {
            q: "¿Qué significa que el sitio tiene cero costo mensual de servidor?",
            a: "Publicamos arquitectura 100% estática sobre redes CDN globales como Cloudflare Pages o GitHub Pages. No existen servidores Node o bases de datos costosas que requieran mantenimiento ni rentas mensuales obligatorias."
          },
          {
            q: "¿Funciona correctamente en cualquier teléfono móvil o tablet?",
            a: "Sí. Todos los componentes táctiles, carruseles y escenas 3D responden tanto al cursor como al tacto, e incluyen un motor automático de respaldo 2D y respeto por la configuración de movimiento reducido del sistema."
          },
          {
            q: "¿Cuánto tiempo toma tener una web completa lista?",
            a: "Los lanzamientos insignia (Showcase 3D) se completan en 5 a 7 días laborables, y los portales corporativos o SaaS entre 7 y 10 días con garantía técnica incluida."
          }
        ]
      },
      split: ["Flujo", "Visión"],
      cotizar: {
        eyebrow: "07 / Soluciones & Cotización",
        title: "Elige tu arquitectura",
        cards: [
          {
            kicker: "01 · ENTREGA 5–7 DÍAS",
            desc: "Landing page insignia con escena WebGL en vidrio fluido, métricas 99/100 en Lighthouse móvil e integración directa con Web3Forms y WhatsApp.",
            cta: "Seleccionar Showcase"
          },
          {
            kicker: "02 · ENTREGA 7–10 DÍAS",
            desc: "Sitio corporativo multi-sección, e-commerce o plataforma SaaS con configurador técnico, catálogo interactivo y cesión integral en CDN global.",
            cta: "Seleccionar Flagship"
          }
        ],
        cfgEyebrow: "SLA < 2 HORAS LABORABLES",
        cfgTitleHtml: "Configura tu<br>proyecto hoy",
        cfgLede: "Completa las especificaciones técnicas para recibir una propuesta formal en menos de dos horas o abre una conversación directa por WhatsApp.",
        emailLabel: "CORREO OFICIAL",
        waLabel: "WHATSAPP DIRECTO",
        form: {
          nameLabel: "Nombre o Empresa *",
          namePlaceholder: "Ej. Juan Pérez / Aura Studio",
          emailLabel: "Correo Electrónico *",
          emailPlaceholder: "correo@empresa.com",
          typeLabel: "Tipo de Proyecto",
          types: ["Landing Page 3D", "Web Corporativa", "E-commerce", "Aplicación Web / SaaS"],
          budgetLabel: "Presupuesto Aproximado (USD)",
          budgetUndefined: "Por definir / Asesoría",
          detailsLabel: "Detalles del Proyecto",
          detailsPlaceholder: "Cuéntanos sobre tus objetivos, secciones clave o referencias visuales...",
          submit: "Enviar Solicitud",
          whatsapp: "Cotizar por WhatsApp"
        }
      },
      footer: {
        desc: "Flujo · Legitimidad · Unión · Visión · Objetivos. Ingeniería web 3D, vidrio fluido y velocidad móvil extrema.",
        col1Heading: "Arquitectura",
        col1Links: ["Filosofía 0.8s", "Ingeniería 3D", "Portafolio", "Showcase & Flagship"],
        col2Heading: "Estudio",
        col2Links: ["Protocolo 40/30/30", "Configurador Web"],
        col3Heading: "Legal",
        col3Buttons: ["Hitos & Garantía 30 Días", "Política de Privacidad"],
        col3Links: ["Sitemap XML", "Robots.txt", "Índice Semántico IA (LLMs.txt)"],
        footLangsAria: "Ediciones internacionales de FLUVO",
        legalButtons: ["Términos", "Privacidad"]
      },
      modalUi: {
        closeAria: "Cerrar ficha",
        toQuote: "Cotizar proyecto similar",
        dismiss: "Cerrar"
      },
      active: {
        quoteDefaultName: "un cliente",
        quoteNotProvided: "No indicado",
        submittingLabel: "Enviando...",
        submitLabel: "Enviar Solicitud",
        subjectPrefix: "Nueva Cotización FLUVO: ",
        noDetailsLabel: "Sin detalles adicionales",
        projectTypeMap: {
          "Landing Page 3D": "Landing Page 3D",
          "Web Corporativa": "Web Corporativa",
          "E-commerce": "E-commerce",
          "Aplicación Web / SaaS": "Aplicación Web / SaaS"
        },
        budgetMap: {
          "< $300 USD": "< $300 USD",
          "$300 - $600 USD": "$300 - $600 USD",
          "$600 - $1,200 USD": "$600 - $1,200 USD",
          "+$1,200 USD": "+$1,200 USD",
          "Por definir / Asesoría": "Por definir / Asesoría"
        },
        statusSuccessHtml: function (email) {
          return "<strong>Solicitud registrada con éxito.</strong> Responderemos a " + email + " en menos de 2 horas laborables, o continúa directamente por WhatsApp.";
        },
        formatWhatsApp: function (d) {
          return "Hola FLUVO Studio, soy " + d.name + ".\nMe gustaría cotizar un proyecto web a medida:\n• Tipo de Proyecto: " + d.projectType + "\n• Presupuesto Estimado: " + d.budget + "\n• Correo de Contacto: " + d.email + (d.msg ? "\n• Detalles: " + d.msg : "");
        },
        details: {
          aura: {
            kicker: "01 · FINTECH WEB3",
            title: "Aura Protocol",
            html: "<p>Plataforma con visualización de nodos en vidrio fluido 3D optimizada para dispositivos móviles y redes de baja latencia.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>0.8 s</strong><span>Carga inicial LCP</span></div><div class='gl-modal__metric'><strong>99 / 100</strong><span>Lighthouse Móvil</span></div><div class='gl-modal__metric'><strong>$0 USD</strong><span>Costo de servidor</span></div></div>"
          },
          kroma: {
            kicker: "02 · MODA & ARQUITECTURA",
            title: "Kroma Studio",
            html: "<p>Showcase interactivo de piezas editoriales con rotación libre, control de iluminación y refracción física en tiempo real.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>+140 %</strong><span>Interacción en 3D</span></div><div class='gl-modal__metric'><strong>60 fps</strong><span>Fluidez constante</span></div><div class='gl-modal__metric'><strong>100 %</strong><span>Responsive táctil</span></div></div>"
          },
          pulse: {
            kicker: "03 · SAAS ENTERPRISE",
            title: "Pulse Analytics",
            html: "<p>Arquitectura web corporativa ultra-ligera centrada en conversión B2B, telemetría limpia y navegación inmediata.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>$0 USD</strong><span>Hosting mensual</span></div><div class='gl-modal__metric'><strong>100 %</strong><span>Uptime Edge CDN</span></div><div class='gl-modal__metric'><strong>5–7 días</strong><span>Tiempo de entrega</span></div></div>"
          },
          vortex: {
            kicker: "04 · INFRAESTRUCTURA AI",
            title: "Vortex Labs",
            html: "<p>Documentación técnica interactiva y visor 3D modular sin frameworks pesados ni sobrecarga de memoria móvil.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>99 / 100</strong><span>Lighthouse Móvil</span></div><div class='gl-modal__metric'><strong>&lt; 1 s</strong><span>First Contentful Paint</span></div><div class='gl-modal__metric'><strong>SLA 2h</strong><span>Soporte directo</span></div></div>"
          },
          nexo: {
            kicker: "05 · PORTAL B2B 24/7",
            title: "Nexo Industrial",
            html: "<p>Catálogo de especificaciones técnicas y presencia B2B 24/7 con embudo directo hacia WhatsApp y Web3Forms.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>100 %</strong><span>Uptime Edge CDN</span></div><div class='gl-modal__metric'><strong>30 días</strong><span>Garantía técnica</span></div><div class='gl-modal__metric'><strong>40/30/30</strong><span>Hitos verificables</span></div></div>"
          },
          terms: {
            kicker: "PROTOCOLO OFICIAL FLUVO",
            title: "Hitos 40 / 30 / 30 & Garantía",
            html: "<p><strong>1. Estructura de Pagos e Hitos Verificables:</strong><br>• 40% al iniciar requerimientos, arquitectura y dirección visual.<br>• 30% al aprobar el prototipo funcional interactivo.<br>• 30% final contra despliegue en producción y validación Lighthouse.</p><p><strong>2. Garantía Técnica Oficial de 30 Días:</strong><br>Cubre resolución de errores técnicos, compatibilidad entre navegadores y estabilidad visual post-entrega.</p><p><strong>3. Propiedad Intelectual y Edge CDN:</strong><br>Cesión íntegra al completar los hitos sobre infraestructura global con $0 mensual en servidor.</p>"
          },
          privacy: {
            kicker: "CONFIDENCIALIDAD",
            title: "Política de Privacidad",
            html: "<p><strong>1. Recolección Mínima:</strong> Únicamente procesamos nombre, correo, alcance y detalles ingresados voluntariamente para elaborar su propuesta técnica.</p><p><strong>2. Cero Rastreadores ni Venta a Terceros:</strong> No empleamos cookies invasivas de publicidad ni compartimos información confidencial con intermediarios.</p><p><strong>3. Contacto Directo:</strong> Puedes solicitar modificación o eliminación de datos escribiendo a robertmoya217@gmail.com o al +58 424 222 0172.</p>"
          }
        }
      }
    },

    en: {
      htmlLang: "en",
      title: "FLUVO — Fast 3D Web Design & Corporate Websites | Liquid Glass",
      description: "FLUVO Studio designs and builds fast corporate websites, 3D liquid-glass landing pages, and interactive B2B catalogs with 0.8s loading, 99/100 mobile Lighthouse, and $0/month server hosting.",
      nav: {
        links: ["Engineering", "Work", "Quote"],
        brandAria: "FLUVO — Home",
        brandImgAlt: "Official FLUVO Studio emblem — Ultra-Optimized 3D Web Design & Corporate Websites",
        burgerAria: "Open menu"
      },
      menu: {
        items: ["Philosophy", "3D Engineering", "Case Studies", "40/30/30 Protocol", "Solutions & Quote"],
        eyebrow: "FLUVO.ORG · DIGITAL STUDIO",
        descHtml: "Flow · Legitimacy · Unity · Vision · Objectives.<br />Liquid-glass 3D websites engineered to load instantaneously on mobile and global networks.",
        waLabel: "+58 424 222 0172 · WhatsApp"
      },
      hero: {
        eyebrow: "FLUVO.ORG · 3D WEB ENGINEERING & LIQUID GLASS",
        titleHtml: "Liquid crystal<br>in real load",
        copy: "Fast custom web design and development for companies, 3D liquid-glass landing pages, and B2B catalogs engineered to open instantly on mobile with $0/month server costs.",
        ctaPrimary: "Start Project",
        ctaSecondary: "Explore Architecture",
        modesLabel: "3D Optical Material",
        modesAria: "3D crystal optical mode",
        modes: ["01 Obsidian", "02 Optical Bronze", "03 Liquid Quartz"],
        telemetryHtml: [
          "<strong>0.8s</strong> Mobile LCP",
          "<strong>99/100</strong> Lighthouse",
          "<strong>$0/mo</strong> Server"
        ]
      },
      manifesto: {
        eyebrow: "01 / Flow Philosophy",
        titleHtml: "Visual weight of glass,<br><span class=\"hl\">without kilobyte bloat.</span>",
        ledeHtml: "Most 3D websites trade load speed for decoration. At FLUVO we calibrate <span class=\"hl\">modular liquid-glass shaders, Mobile-First adaptive rendering, and Edge deployment</span> so your first impression arrives under one second.",
        monthSuffix: "/mo",
        labels: [
          "Verified initial load over 3G mobile network",
          "Google Lighthouse Mobile Performance",
          "Monthly server cost on Edge CDN",
          "Global production uptime guarantee"
        ]
      },
      rail: {
        aria: "3D Engineering Sequence",
        indexAria: "Architecture index",
        prevAria: "Previous pillar",
        nextAria: "Next pillar",
        eyebrow: "02 / Real-Time Engineering",
        titleHtml: "Five pillars of<br>FLUVO architecture",
        slides: [
          {
            tag: "01 · OPTICAL SURFACE",
            title: "Dynamic Liquid Glass",
            desc: "Physically calibrated refraction shaders and studio rim lighting over deep obsidian without blocking the main thread."
          },
          {
            tag: "02 · MODULAR COMPILATION",
            title: "Lightweight WebGL Core",
            desc: "Procedural GPU geometry compiled instantaneously, replacing heavy multi-megabyte external 3D asset bundles."
          },
          {
            tag: "03 · SUB-SECOND SPEED",
            title: "0.8s Initial Load",
            desc: "Static architecture free of render-blocking scripts or idle bloat, benchmarked on constrained 3G networks."
          },
          {
            tag: "04 · TACTILE ERGONOMICS",
            title: "Mobile-First Design",
            desc: "Fluid cursor and touch interaction with thermal frame-rate scaling and generous touch targets."
          },
          {
            tag: "05 · ZERO INFRASTRUCTURE",
            title: "100% Global Edge CDN",
            desc: "Static Edge hosting on Cloudflare Pages or GitHub Pages with zero backend attack surface and $0 monthly server fees."
          }
        ]
      },
      duo: [
        {
          eyebrow: "03 / Precision Aesthetics",
          titleHtml: "Adaptive physical<br>refraction",
          desc: "Every scene dynamically scales ray steps and FPS to match device power and reduced-motion preferences, preserving crisp studio fidelity without draining battery.",
          specs: "INTERSECTION PAUSING · ZERO WEBGL LEAKS · 60 FPS"
        },
        {
          eyebrow: "04 / Global Reach",
          titleHtml: "Effortless speed even<br>on slow networks",
          desc: "Engineered mobile-first for real-world connectivity: immediate static HTML, lean typography, and worldwide Edge CDN distribution.",
          specs: "EDGE CDN · ZERO VULNERABLE BACKEND · REAL-TIME"
        }
      ],
      cases: {
        eyebrow: "05 / Verified Portfolio",
        title: "Flagship projects",
        hintHtml: "Success stories engineered on the FLUVO stack. Click <strong style=\"color:var(--ink)\">+</strong> to inspect technical telemetry.",
        trackAria: "FLUVO project portfolio",
        prevAria: "Previous project",
        nextAria: "Next project",
        items: [
          {
            kicker: "FINTECH WEB3",
            desc: "Interactive 3D liquid-glass node platform optimized for mobile and low-latency networks.",
            metric: "0.8S INITIAL LOAD · 99 LIGHTHOUSE",
            btnAria: "Inspect Aura Protocol"
          },
          {
            kicker: "FASHION & ARCHITECTURE",
            desc: "Editorial 3D product showcase featuring free orbit control and real-time refraction.",
            metric: "+140% TOUCH ENGAGEMENT",
            btnAria: "Inspect Kroma Studio"
          },
          {
            kicker: "SAAS ENTERPRISE",
            desc: "Ultra-lean corporate website engineered for B2B conversion and crisp telemetry.",
            metric: "$0 MONTHLY SERVER COST",
            btnAria: "Inspect Pulse Analytics"
          },
          {
            kicker: "AI INFRASTRUCTURE",
            desc: "Interactive technical documentation with modular 3D viewer and zero framework overhead.",
            metric: "99/100 MOBILE LIGHTHOUSE",
            btnAria: "Inspect Vortex Labs"
          },
          {
            kicker: "B2B PORTAL 24/7",
            desc: "Global industrial catalog with direct WhatsApp and form RFQ funnel.",
            metric: "100% GLOBAL EDGE UPTIME",
            btnAria: "Inspect Nexo Industrial"
          }
        ]
      },
      protocol: {
        eyebrow: "06 / Warranty & Milestones",
        titleHtml: "Delivered in 5–10<br>business days",
        steps: [
          {
            num: "MILESTONE 01 · 40% DEPOSIT",
            title: "Architecture & 3D Direction",
            desc: "Structural blueprint, typographic system, bespoke liquid-glass shader prototype, and conversion-first static architecture."
          },
          {
            num: "MILESTONE 02 · 30% APPROVAL",
            title: "Interactive Live Prototype",
            desc: "Validation across real desktop and smartphone browsers, refining transitions, contrast, and quote workflows."
          },
          {
            num: "MILESTONE 03 · 30% FINAL · 30-DAY WARRANTY",
            title: "Audit & Global Edge Deployment",
            desc: "Production launch on global Edge CDN with full IP transfer, verified benchmarks, and 30 continuous days of technical warranty."
          }
        ],
        faqs: [
          {
            q: "How does FLUVO deliver sub-second 3D websites?",
            a: "We build modular WebGL engines and procedural GPU shaders compiled on the fly without bloated third-party libraries or multi-megabyte 3D binary downloads."
          },
          {
            q: "What does zero monthly server cost mean?",
            a: "We ship 100% static architecture deployed on global Edge CDNs like Cloudflare Pages or GitHub Pages. No vulnerable databases or mandatory monthly server hosting bills."
          },
          {
            q: "Does it work smoothly on any mobile phone or tablet?",
            a: "Yes. Every tactile carousel, quote configurator, and 3D shader responds to both mouse and touch input, with an automatic 2D studio fallback and full reduced-motion support."
          },
          {
            q: "How long does it take to launch a complete website?",
            a: "Showcase 3D flagship landings launch in 5–7 business days, while Flagship corporate or SaaS platforms ship in 7–10 business days with technical warranty."
          }
        ]
      },
      split: ["Flow", "Vision"],
      cotizar: {
        eyebrow: "07 / Solutions & Quote",
        title: "Choose your architecture",
        cards: [
          {
            kicker: "01 · 5–7 DAYS DELIVERY",
            desc: "Flagship landing page with live liquid-glass WebGL stage, 99/100 mobile Lighthouse metrics, and integrated Web3Forms + WhatsApp capture.",
            cta: "Select Showcase"
          },
          {
            kicker: "02 · 7–10 DAYS DELIVERY",
            desc: "Multi-section corporate site, e-commerce, or SaaS platform with interactive technical configurator, B2B catalog, and full Edge CDN ownership.",
            cta: "Select Flagship"
          }
        ],
        cfgEyebrow: "SLA < 2 BUSINESS HOURS",
        cfgTitleHtml: "Configure your<br>project today",
        cfgLede: "Complete the technical brief below to receive an engineering proposal within two business hours, or start an instant WhatsApp conversation.",
        emailLabel: "OFFICIAL EMAIL",
        waLabel: "DIRECT WHATSAPP",
        form: {
          nameLabel: "Name or Company *",
          namePlaceholder: "e.g. Alex Morgan / Aura Studio",
          emailLabel: "Email Address *",
          emailPlaceholder: "name@company.com",
          typeLabel: "Project Type",
          types: ["3D Landing Page", "Corporate Website", "E-commerce", "Web App / SaaS"],
          budgetLabel: "Estimated Budget (USD)",
          budgetUndefined: "To be defined / Advisory",
          detailsLabel: "Project Details",
          detailsPlaceholder: "Tell us about your goals, key sections, or target countries...",
          submit: "Send Request",
          whatsapp: "Quote via WhatsApp"
        }
      },
      footer: {
        desc: "Flow · Legitimacy · Unity · Vision · Objectives. Worldwide 3D web engineering, liquid glass, and extreme mobile speed.",
        col1Heading: "Architecture",
        col1Links: ["0.8s Philosophy", "3D Engineering", "Portfolio", "Showcase & Flagship"],
        col2Heading: "Studio",
        col2Links: ["40/30/30 Protocol", "Web Configurator"],
        col3Heading: "Legal",
        col3Buttons: ["Milestones & 30-Day Warranty", "Privacy Policy"],
        col3Links: ["Sitemap XML", "Robots.txt", "AI Semantic Index (LLMs.txt)"],
        footLangsAria: "FLUVO international editions",
        legalButtons: ["Terms", "Privacy"]
      },
      modalUi: {
        closeAria: "Close panel",
        toQuote: "Quote similar project",
        dismiss: "Close"
      },
      active: {
        quoteDefaultName: "a prospective client",
        quoteNotProvided: "Not provided",
        submittingLabel: "Sending...",
        submitLabel: "Send Request",
        subjectPrefix: "New FLUVO Quote: ",
        noDetailsLabel: "No additional details",
        projectTypeMap: {
          "Landing Page 3D": "3D Landing Page",
          "Web Corporativa": "Corporate Website",
          "E-commerce": "E-commerce",
          "Aplicación Web / SaaS": "Web App / SaaS"
        },
        budgetMap: {
          "< $300 USD": "< $300 USD",
          "$300 - $600 USD": "$300 - $600 USD",
          "$600 - $1,200 USD": "$600 - $1,200 USD",
          "+$1,200 USD": "+$1,200 USD",
          "Por definir / Asesoría": "To be defined / Advisory"
        },
        statusSuccessHtml: function (email) {
          return "<strong>Request submitted successfully.</strong> We will reply to " + email + " within 2 business hours, or continue directly on WhatsApp.";
        },
        formatWhatsApp: function (d) {
          return "Hello FLUVO Studio, I am " + d.name + ".\nI would like a quote for a custom website:\n• Project Type: " + d.projectType + "\n• Estimated Budget: " + d.budget + "\n• Contact Email: " + d.email + (d.msg ? "\n• Details: " + d.msg : "");
        },
        details: {
          aura: {
            kicker: "01 · FINTECH WEB3",
            title: "Aura Protocol",
            html: "<p>Liquid-glass 3D node visualization platform optimized for mobile devices and low-latency global networks.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>0.8 s</strong><span>Initial Load LCP</span></div><div class='gl-modal__metric'><strong>99 / 100</strong><span>Mobile Lighthouse</span></div><div class='gl-modal__metric'><strong>$0 USD</strong><span>Monthly server cost</span></div></div>"
          },
          kroma: {
            kicker: "02 · FASHION & ARCHITECTURE",
            title: "Kroma Studio",
            html: "<p>Interactive editorial showcase featuring free 3D orbit controls, precision studio lighting, and real-time physical refraction.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>+140 %</strong><span>3D Interaction</span></div><div class='gl-modal__metric'><strong>60 fps</strong><span>Steady frame pacing</span></div><div class='gl-modal__metric'><strong>100 %</strong><span>Touch responsive</span></div></div>"
          },
          pulse: {
            kicker: "03 · SAAS ENTERPRISE",
            title: "Pulse Analytics",
            html: "<p>Ultra-light corporate web architecture focused on B2B conversion, clean telemetry, and instant navigation.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>$0 USD</strong><span>Monthly hosting</span></div><div class='gl-modal__metric'><strong>100 %</strong><span>Edge CDN Uptime</span></div><div class='gl-modal__metric'><strong>5–7 days</strong><span>Delivery window</span></div></div>"
          },
          vortex: {
            kicker: "04 · AI INFRASTRUCTURE",
            title: "Vortex Labs",
            html: "<p>Interactive technical documentation and modular 3D viewer with zero heavy frameworks or mobile memory spikes.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>99 / 100</strong><span>Mobile Lighthouse</span></div><div class='gl-modal__metric'><strong>&lt; 1 s</strong><span>First Contentful Paint</span></div><div class='gl-modal__metric'><strong>SLA 2h</strong><span>Direct engineering</span></div></div>"
          },
          nexo: {
            kicker: "05 · B2B PORTAL 24/7",
            title: "Nexo Industrial",
            html: "<p>Technical specification catalog and 24/7 global B2B presence wired directly to WhatsApp and Web3Forms RFQ capture.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>100 %</strong><span>Edge CDN Uptime</span></div><div class='gl-modal__metric'><strong>30 days</strong><span>Technical warranty</span></div><div class='gl-modal__metric'><strong>40/30/30</strong><span>Verified milestones</span></div></div>"
          },
          terms: {
            kicker: "OFFICIAL FLUVO PROTOCOL",
            title: "40 / 30 / 30 Milestones & Warranty",
            html: "<p><strong>1. Verifiable Payment Milestones:</strong><br>• 40% upon kickoff of architecture and visual direction.<br>• 30% upon approval of the interactive live prototype.<br>• 30% final upon production deployment and Lighthouse verification.</p><p><strong>2. Official 30-Day Technical Warranty:</strong><br>Covers bug fixes, cross-browser compatibility, and post-launch visual stability.</p><p><strong>3. IP & Edge CDN Ownership:</strong><br>Full intellectual property handoff on global static CDN infrastructure with $0 monthly server fees.</p>"
          },
          privacy: {
            kicker: "CONFIDENTIALITY",
            title: "Privacy Policy",
            html: "<p><strong>1. Minimal Data Collection:</strong> We only process the name, email, scope, and project details voluntarily submitted to prepare your technical quote.</p><p><strong>2. Zero Tracking or Third-Party Sales:</strong> We never deploy invasive ad cookies or sell client data to brokers.</p><p><strong>3. Direct Control:</strong> Request updates or deletion anytime via robertmoya217@gmail.com or +58 424 222 0172.</p>"
          }
        }
      }
    },

    pt: {
      htmlLang: "pt",
      title: "FLUVO — Design e Desenvolvimento Web 3D Rápido | Sites Corporativos",
      description: "A FLUVO Studio projeta e desenvolve sites corporativos rápidos, landing pages 3D com vidro fluido e catálogos B2B com carregamento em 0,8s, 99/100 no Lighthouse móvel e zero custo mensal de servidor.",
      nav: {
        links: ["Engenharia", "Casos", "Orçamento"],
        brandAria: "FLUVO — Início",
        brandImgAlt: "Isotipo oficial da FLUVO Studio — Design e Desenvolvimento Web 3D Ultra-Otimizado",
        burgerAria: "Abrir menu"
      },
      menu: {
        items: ["Filosofia", "Engenharia 3D", "Casos de Sucesso", "Protocolo 40/30/30", "Soluções & Orçamento"],
        eyebrow: "FLUVO.ORG · ESTÚDIO DIGITAL",
        descHtml: "Fluxo · Legitimidade · União · Visão · Objetivos.<br />Sites 3D com vidro fluido projetados para abrir instantaneamente em redes móveis e globais.",
        waLabel: "+58 424 222 0172 · WhatsApp"
      },
      hero: {
        eyebrow: "FLUVO.ORG · ENGENHARIA WEB 3D & VIDRO FLUIDO",
        titleHtml: "Cristal líquido<br>em carga real",
        copy: "Design e desenvolvimento de sites rápidos para empresas, landing pages 3D com vidro fluido e catálogos B2B projetados para abrir instantaneamente no celular sem custo mensal de servidor.",
        ctaPrimary: "Iniciar Projeto",
        ctaSecondary: "Explorar Arquitetura",
        modesLabel: "Material Óptico 3D",
        modesAria: "Modo óptico do cristal 3D",
        modes: ["01 Obsidiana", "02 Bronze Óptico", "03 Quartzo Líquido"],
        telemetryHtml: [
          "<strong>0.8s</strong> LCP Móvel",
          "<strong>99/100</strong> Lighthouse",
          "<strong>$0/mês</strong> Servidor"
        ]
      },
      manifesto: {
        eyebrow: "01 / Filosofia de Fluxo",
        titleHtml: "O peso visual do vidro,<br><span class=\"hl\">sem o peso em kilobytes.</span>",
        ledeHtml: "A maioria dos sites 3D sacrifica a velocidade por enfeite. Na FLUVO calibramos <span class=\"hl\">shaders modulares de vidro líquido, renderização adaptativa Mobile-First e entrega Edge</span> para que a primeira impressão ocorra em menos de um segundo.",
        monthSuffix: "/mês",
        labels: [
          "Carga inicial verificada em rede 3G",
          "Pontuação Google Lighthouse Móvel",
          "Custo mensal de servidor em CDN Edge",
          "Disponibilidade global em produção"
        ]
      },
      rail: {
        aria: "Sequência de Engenharia 3D",
        indexAria: "Índice de arquitetura",
        prevAria: "Pilar anterior",
        nextAria: "Próximo pilar",
        eyebrow: "02 / Engenharia em Tempo Real",
        titleHtml: "Cinco pilares da<br>arquitetura FLUVO",
        slides: [
          {
            tag: "01 · SUPERFÍCIE ÓPTICA",
            title: "Vidro Fluido Dinâmico",
            desc: "Shaders com refração calibrada e iluminação de estúdio sobre obsidiana sem sobrecarregar a thread principal."
          },
          {
            tag: "02 · COMPILAÇÃO MODULAR",
            title: "Núcleo WebGL Leve",
            desc: "Geometria matemática compilada na hora que substitui arquivos 3D externos pesados de vários megabytes."
          },
          {
            tag: "03 · VELOCIDADE SUB-SEGUNDO",
            title: "Carga Inicial 0.8s",
            desc: "Arquitetura estática sem bloqueios de renderização, validada em redes móveis 3G reais."
          },
          {
            tag: "04 · ERGONOMIA TÁTIL",
            title: "Design Mobile-First",
            desc: "Interação fluida por cursor e toque com controle térmico inteligente e alvos de toque amplos."
          },
          {
            tag: "05 · INFRAESTRUTURA ZERO",
            title: "Edge CDN Global 100%",
            desc: "Hospedagem estática em Cloudflare Pages ou GitHub Pages sem vulnerabilidades backend e $0 mensal."
          }
        ]
      },
      duo: [
        {
          eyebrow: "03 / Estética de Precisão",
          titleHtml: "Refração física<br>adaptativa",
          desc: "Cada cena ajusta densidade de traçado e FPS conforme o dispositivo e preferências de movimento, mantendo fidelidade visual sem drenar a bateria.",
          specs: "INTERSECTION PAUSING · ZERO VAZAMENTOS WEBGL · 60 FPS"
        },
        {
          eyebrow: "04 / Alcance Global",
          titleHtml: "Fluidez total até em<br>redes limitadas",
          desc: "Construído mobile-first para conexões reais: HTML estático imediato, fontes leves e distribuição global em nós Edge.",
          specs: "EDGE CDN · ZERO BACKEND VULNERÁVEL · TEMPO REAL"
        }
      ],
      cases: {
        eyebrow: "05 / Portfólio Verificado",
        title: "Projetos de destaque",
        hintHtml: "Casos desenvolvidos com a arquitetura FLUVO. Clique em <strong style=\"color:var(--ink)\">+</strong> para abrir a análise técnica.",
        trackAria: "Portfólio de projetos FLUVO",
        prevAria: "Projeto anterior",
        nextAria: "Próximo projeto",
        items: [
          {
            kicker: "FINTECH WEB3",
            desc: "Plataforma com visualização de nós em vidro fluido 3D para dispositivos móveis.",
            metric: "0.8S CARGA INICIAL · 99 LIGHTHOUSE",
            btnAria: "Inspecionar Aura Protocol"
          },
          {
            kicker: "MODA & ARQUITETURA",
            desc: "Showcase editorial interativo com rotação livre e refração física em tempo real.",
            metric: "+140% INTERAÇÃO TÁTIL",
            btnAria: "Inspecionar Kroma Studio"
          },
          {
            kicker: "SAAS ENTERPRISE",
            desc: "Site corporativo ultra-leve focado em conversão B2B e telemetria visual.",
            metric: "$0 CUSTO MENSAL DE SERVIDOR",
            btnAria: "Inspecionar Pulse Analytics"
          },
          {
            kicker: "INFRAESTRUTURA AI",
            desc: "Documentação técnica interativa e visualizador 3D modular sem frameworks pesados.",
            metric: "99/100 LIGHTHOUSE MÓVEL",
            btnAria: "Inspecionar Vortex Labs"
          },
          {
            kicker: "PORTAL B2B 24/7",
            desc: "Catálogo industrial com especificações técnicas e funil direto para WhatsApp.",
            metric: "100% UPTIME GLOBAL EDGE",
            btnAria: "Inspecionar Nexo Industrial"
          }
        ]
      },
      protocol: {
        eyebrow: "06 / Garantia & Marcos",
        titleHtml: "Entrega em 5–10 dias<br>úteis",
        steps: [
          {
            num: "MARCO 01 · 40% SINAL",
            title: "Arquitetura & Direção 3D",
            desc: "Definição de estrutura, sistema tipográfico, protótipo de shaders em vidro líquido e arquitetura orientada à conversão."
          },
          {
            num: "MARCO 02 · 30% APROVAÇÃO",
            title: "Protótipo Funcional Interativo",
            desc: "Validação em navegadores reais desktop e móvel, ajustando transições, contraste e fluxo de orçamento."
          },
          {
            num: "MARCO 03 · 30% FINAL · 30 DIAS DE GARANTIA",
            title: "Auditoria & Publicação Edge CDN",
            desc: "Publicação global com transferência integral de propriedade intelectual e 30 dias de garantia técnica oficial."
          }
        ],
        faqs: [
          {
            q: "Como a FLUVO cria sites 3D tão rápidos?",
            a: "Usamos motores WebGL modulares e shaders procedurais compilados na hora, sem bibliotecas pesadas nem arquivos 3D de dezenas de megabytes."
          },
          {
            q: "O que significa custo mensal zero de servidor?",
            a: "Publicamos arquitetura 100% estática em CDNs globais como Cloudflare Pages ou GitHub Pages, eliminando custos mensais de servidores backend."
          },
          {
            q: "Funciona bem em qualquer celular ou tablet?",
            a: "Sim. Todos os carrosséis, formulários e cenas 3D respondem ao cursor e ao toque, com motor automático de fallback 2D e respeito a movimento reduzido."
          },
          {
            q: "Quanto tempo leva para ficar pronto?",
            a: "Landing pages Showcase 3D ficam prontas em 5 a 7 dias úteis; portais corporativos Flagship entre 7 e 10 dias úteis com garantia."
          }
        ]
      },
      split: ["Fluxo", "Visão"],
      cotizar: {
        eyebrow: "07 / Soluções & Orçamento",
        title: "Escolha sua arquitetura",
        cards: [
          {
            kicker: "01 · ENTREGA 5–7 DIAS",
            desc: "Landing page exclusiva com cena WebGL em vidro fluido, 99/100 no Lighthouse móvel e integração direta com WhatsApp e Web3Forms.",
            cta: "Selecionar Showcase"
          },
          {
            kicker: "02 · ENTREGA 7–10 DIAS",
            desc: "Site corporativo multi-seção, e-commerce ou SaaS com configurador técnico, catálogo B2B e entrega total em CDN global.",
            cta: "Selecionar Flagship"
          }
        ],
        cfgEyebrow: "SLA < 2 HORAS ÚTEIS",
        cfgTitleHtml: "Configure seu<br>projeto hoje",
        cfgLede: "Preencha as especificações para receber uma proposta técnica em menos de duas horas ou inicie atendimento imediato no WhatsApp.",
        emailLabel: "E-MAIL OFICIAL",
        waLabel: "WHATSAPP DIRETO",
        form: {
          nameLabel: "Nome ou Empresa *",
          namePlaceholder: "Ex. João Silva / Aura Studio",
          emailLabel: "E-mail *",
          emailPlaceholder: "contato@empresa.com",
          typeLabel: "Tipo de Projeto",
          types: ["Landing Page 3D", "Site Corporativo", "E-commerce", "Aplicação Web / SaaS"],
          budgetLabel: "Orçamento Estimado (USD)",
          budgetUndefined: "A definir / Consultoria",
          detailsLabel: "Detalhes do Projeto",
          detailsPlaceholder: "Conte sobre seus objetivos, seções ou mercado internacional...",
          submit: "Enviar Solicitação",
          whatsapp: "Orçar pelo WhatsApp"
        }
      },
      footer: {
        desc: "Fluxo · Legitimidade · União · Visão · Objetivos. Engenharia web 3D, vidro fluido e velocidade móvel extrema.",
        col1Heading: "Arquitetura",
        col1Links: ["Filosofia 0.8s", "Engenharia 3D", "Portfólio", "Showcase & Flagship"],
        col2Heading: "Estúdio",
        col2Links: ["Protocolo 40/30/30", "Configurador Web"],
        col3Heading: "Legal",
        col3Buttons: ["Marcos & Garantia 30 Dias", "Política de Privacidade"],
        col3Links: ["Sitemap XML", "Robots.txt", "Índice Semântico IA (LLMs.txt)"],
        footLangsAria: "Edições internacionais da FLUVO",
        legalButtons: ["Termos", "Privacidade"]
      },
      modalUi: {
        closeAria: "Fechar painel",
        toQuote: "Orçar projeto semelhante",
        dismiss: "Fechar"
      },
      active: {
        quoteDefaultName: "um cliente",
        quoteNotProvided: "Não informado",
        submittingLabel: "Enviando...",
        submitLabel: "Enviar Solicitação",
        subjectPrefix: "Novo Orçamento FLUVO: ",
        noDetailsLabel: "Sem detalhes adicionais",
        projectTypeMap: {
          "Landing Page 3D": "Landing Page 3D",
          "Web Corporativa": "Site Corporativo",
          "E-commerce": "E-commerce",
          "Aplicación Web / SaaS": "Aplicação Web / SaaS"
        },
        budgetMap: {
          "< $300 USD": "< $300 USD",
          "$300 - $600 USD": "$300 - $600 USD",
          "$600 - $1,200 USD": "$600 - $1,200 USD",
          "+$1,200 USD": "+$1,200 USD",
          "Por definir / Asesoría": "A definir / Consultoria"
        },
        statusSuccessHtml: function (email) {
          return "<strong>Solicitação registrada com sucesso.</strong> Responderemos para " + email + " em menos de 2 horas úteis, ou continue pelo WhatsApp.";
        },
        formatWhatsApp: function (d) {
          return "Olá FLUVO Studio, sou " + d.name + ".\nGostaria de orçar um projeto web sob medida:\n• Tipo de Projeto: " + d.projectType + "\n• Orçamento Estimado: " + d.budget + "\n• E-mail: " + d.email + (d.msg ? "\n• Detalhes: " + d.msg : "");
        },
        details: {
          aura: {
            kicker: "01 · FINTECH WEB3",
            title: "Aura Protocol",
            html: "<p>Plataforma com visualização de nós 3D em vidro fluido otimizada para dispositivos móveis e redes de baixa latência.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>0.8 s</strong><span>Carga inicial LCP</span></div><div class='gl-modal__metric'><strong>99 / 100</strong><span>Lighthouse Móvel</span></div><div class='gl-modal__metric'><strong>$0 USD</strong><span>Custo de servidor</span></div></div>"
          },
          kroma: {
            kicker: "02 · MODA & ARQUITETURA",
            title: "Kroma Studio",
            html: "<p>Showcase editorial interativo com rotação livre, controle de luz e refração física em tempo real.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>+140 %</strong><span>Interação 3D</span></div><div class='gl-modal__metric'><strong>60 fps</strong><span>Fluidez constante</span></div><div class='gl-modal__metric'><strong>100 %</strong><span>Responsivo tátil</span></div></div>"
          },
          pulse: {
            kicker: "03 · SAAS ENTERPRISE",
            title: "Pulse Analytics",
            html: "<p>Arquitetura corporativa ultra-leve focada em conversão B2B, telemetria limpa e navegação instantânea.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>$0 USD</strong><span>Hospedagem mensal</span></div><div class='gl-modal__metric'><strong>100 %</strong><span>Uptime Edge CDN</span></div><div class='gl-modal__metric'><strong>5–7 dias</strong><span>Prazo de entrega</span></div></div>"
          },
          vortex: {
            kicker: "04 · INFRAESTRUTURA AI",
            title: "Vortex Labs",
            html: "<p>Documentação técnica interativa e visualizador 3D modular sem frameworks pesados.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>99 / 100</strong><span>Lighthouse Móvel</span></div><div class='gl-modal__metric'><strong>&lt; 1 s</strong><span>First Contentful Paint</span></div><div class='gl-modal__metric'><strong>SLA 2h</strong><span>Suporte direto</span></div></div>"
          },
          nexo: {
            kicker: "05 · PORTAL B2B 24/7",
            title: "Nexo Industrial",
            html: "<p>Catálogo de especificações técnicas B2B 24/7 integrado diretamente ao WhatsApp e Web3Forms.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>100 %</strong><span>Uptime Edge CDN</span></div><div class='gl-modal__metric'><strong>30 dias</strong><span>Garantia técnica</span></div><div class='gl-modal__metric'><strong>40/30/30</strong><span>Marcos claros</span></div></div>"
          },
          terms: {
            kicker: "PROTOCOLO OFICIAL FLUVO",
            title: "Marcos 40 / 30 / 30 & Garantia",
            html: "<p><strong>1. Marcos de Pagamento Verificáveis:</strong><br>• 40% no início da arquitetura e direção visual.<br>• 30% na aprovação do protótipo interativo.<br>• 30% na entrega final em produção.</p><p><strong>2. Garantia Técnica de 30 Dias:</strong><br>Cobre ajustes técnicos, compatibilidade e estabilidade visual.</p><p><strong>3. Propriedade Intelectual & Edge CDN:</strong><br>Transferência integral sem mensalidades de servidor.</p>"
          },
          privacy: {
            kicker: "CONFIDENCIALIDADE",
            title: "Política de Privacidade",
            html: "<p><strong>1. Coleta Mínima:</strong> Processamos apenas nome, e-mail e detalhes enviados voluntariamente para seu orçamento.</p><p><strong>2. Zero Venda de Dados:</strong> Não utilizamos cookies publicitários invasivos nem compartilhamos dados com terceiros.</p><p><strong>3. Contato Direto:</strong> robertmoya217@gmail.com ou +58 424 222 0172.</p>"
          }
        }
      }
    },

    fr: {
      htmlLang: "fr",
      title: "FLUVO — Création et Développement Web 3D Rapide | Sites Corporate",
      description: "FLUVO Studio conçoit et développe des sites web d'entreprise rapides, landing pages 3D en verre fluide et catalogues B2B chargeant en 0,8s (99/100 Lighthouse mobile) sans frais de serveur mensuels.",
      nav: {
        links: ["Ingénierie", "Projets", "Devis"],
        brandAria: "FLUVO — Accueil",
        brandImgAlt: "Isotype officiel de FLUVO Studio — Conception et Développement Web 3D Ultra-Optimisé",
        burgerAria: "Ouvrir le menu"
      },
      menu: {
        items: ["Philosophie", "Ingénierie 3D", "Études de Cas", "Protocole 40/30/30", "Solutions & Devis"],
        eyebrow: "FLUVO.ORG · STUDIO DIGITAL",
        descHtml: "Flux · Légitimité · Union · Vision · Objectifs.<br />Sites web 3D en verre fluide pensés pour s'afficher instantanément sur réseaux mobiles et mondiaux.",
        waLabel: "+58 424 222 0172 · WhatsApp"
      },
      hero: {
        eyebrow: "FLUVO.ORG · INGÉNIERIE WEB 3D & VERRE FLUIDE",
        titleHtml: "Cristal liquide<br>à vitesse réelle",
        copy: "Conception et développement de sites web rapides pour entreprises, landing pages 3D en verre fluide et catalogues B2B conçus pour démarrer instantanément sur mobile sans coûts serveur mensuels.",
        ctaPrimary: "Lancer un Projet",
        ctaSecondary: "Explorer l'Architecture",
        modesLabel: "Matériau Optique 3D",
        modesAria: "Mode optique du cristal 3D",
        modes: ["01 Obsidienne", "02 Bronze Optique", "03 Quartz Liquide"],
        telemetryHtml: [
          "<strong>0.8s</strong> LCP Mobile",
          "<strong>99/100</strong> Lighthouse",
          "<strong>$0/mois</strong> Serveur"
        ]
      },
      manifesto: {
        eyebrow: "01 / Philosophie du Flux",
        titleHtml: "La présence visuelle du verre,<br><span class=\"hl\">sans la lourdeur des kilo-octets.</span>",
        ledeHtml: "La plupart des sites 3D sacrifient la rapidité pour le décor. Chez FLUVO nous calibrons des <span class=\"hl\">shaders modulaires en verre liquide, un rendu adaptatif Mobile-First et un déploiement Edge</span> sous la seconde.",
        monthSuffix: "/mois",
        labels: [
          "Chargement initial vérifié sur réseau 3G",
          "Score Google Lighthouse Mobile",
          "Coût serveur mensuel sur Edge CDN",
          "Disponibilité mondiale en production"
        ]
      },
      rail: {
        aria: "Séquence d'Ingénierie 3D",
        indexAria: "Index d'architecture",
        prevAria: "Pilier précédent",
        nextAria: "Pilier suivant",
        eyebrow: "02 / Ingénierie Temps Réel",
        titleHtml: "Cinq piliers de<br>l'architecture FLUVO",
        slides: [
          {
            tag: "01 · SURFACE OPTIQUE",
            title: "Verre Fluide Dynamique",
            desc: "Shaders à réfraction calibrée et éclairage studio sur obsidienne sans bloquer le thread principal."
          },
          {
            tag: "02 · COMPILATION MODULAIRE",
            title: "Noyau WebGL Léger",
            desc: "Géométrie mathématique compilée instantanément remplaçant les lourds modèles 3D de plusieurs mégaoctets."
          },
          {
            tag: "03 · VITESSE SUB-SECONDE",
            title: "Chargement 0.8s",
            desc: "Architecture statique sans scripts bloquants, testée sur profils mobiles 3G contraints."
          },
          {
            tag: "04 · ERGONOMIE TACTILE",
            title: "Design Mobile-First",
            desc: "Interaction fluide souris et tactile avec régulation thermique intelligente et cibles larges."
          },
          {
            tag: "05 · ZÉRO INFRASTRUCTURE",
            title: "Edge CDN Mondial 100%",
            desc: "Hébergement statique sur Cloudflare Pages ou GitHub Pages sans faille backend et à 0 $/mois."
          }
        ]
      },
      duo: [
        {
          eyebrow: "03 / Esthétique de Précision",
          titleHtml: "Réfraction physique<br>adaptative",
          desc: "Chaque scène ajuste sa densité de tracé et sa cadence FPS selon l'appareil et les préférences d'animation, préservant la netteté et l'autonomie.",
          specs: "PAUSE INTERSECTION · ZÉRO FUITE WEBGL · 60 FPS"
        },
        {
          eyebrow: "04 / Portée Mondiale",
          titleHtml: "Fluidité totale même sur<br>réseaux limités",
          desc: "Conçu d'abord pour les mobiles et tablettes en conditions réelles : HTML statique immédiat et distribution mondiale sur nœuds Edge.",
          specs: "EDGE CDN · ZÉRO BACKEND VULNÉRABLE · TEMPS RÉEL"
        }
      ],
      cases: {
        eyebrow: "05 / Portfolio Vérifié",
        title: "Projets phares",
        hintHtml: "Réalisations conçues sur l'architecture FLUVO. Cliquez sur <strong style=\"color:var(--ink)\">+</strong> pour ouvrir la fiche technique.",
        trackAria: "Portfolio des projets FLUVO",
        prevAria: "Projet précédent",
        nextAria: "Projet suivant",
        items: [
          {
            kicker: "FINTECH WEB3",
            desc: "Plateforme avec visualisation de nœuds 3D en verre fluide optimisée mobile.",
            metric: "0.8S CHARGEMENT · 99 LIGHTHOUSE",
            btnAria: "Inspecter Aura Protocol"
          },
          {
            kicker: "MODE & ARCHITECTURE",
            desc: "Vitrine éditoriale interactive à rotation libre et réfraction temps réel.",
            metric: "+140% INTERACTION TACTILE",
            btnAria: "Inspecter Kroma Studio"
          },
          {
            kicker: "SAAS ENTREPRISE",
            desc: "Architecture web corporate ultra-légère orientée conversion B2B.",
            metric: "0$ FRAIS SERVEUR MENSUEL",
            btnAria: "Inspecter Pulse Analytics"
          },
          {
            kicker: "INFRASTRUCTURE IA",
            desc: "Documentation technique interactive avec visionneuse 3D modulaire sans surcharge.",
            metric: "99/100 LIGHTHOUSE MOBILE",
            btnAria: "Inspecter Vortex Labs"
          },
          {
            kicker: "PORTAIL B2B 24/7",
            desc: "Catalogue technique industriel connecté directement à WhatsApp et devis en ligne.",
            metric: "100% UPTIME EDGE MONDIAL",
            btnAria: "Inspecter Nexo Industrial"
          }
        ]
      },
      protocol: {
        eyebrow: "06 / Garantie & Étapes",
        titleHtml: "Livraison en 5–10 jours<br>ouvrables",
        steps: [
          {
            num: "ÉTAPE 01 · 40% ACOMPTE",
            title: "Architecture & Direction 3D",
            desc: "Définition structurelle, système typographique, prototype de shaders en verre liquide et architecture orientée conversion."
          },
          {
            num: "ÉTAPE 02 · 30% VALIDATION",
            title: "Prototype Interactif Live",
            desc: "Validation sur navigateurs desktop et mobiles réels en affinant transitions, contraste et parcours devis."
          },
          {
            num: "ÉTAPE 03 · 30% FINAL · GARANTIE 30 JOURS",
            title: "Audit & Déploiement Edge CDN",
            desc: "Mise en production mondiale avec cession complète des droits et 30 jours de garantie technique officielle."
          }
        ],
        faqs: [
          {
            q: "Comment FLUVO obtient-il des sites 3D aussi rapides ?",
            a: "Nous utilisons des moteurs WebGL modulaires et shaders procéduraux compilés instantanément sans bibliothèques lourdes ni fichiers 3D de plusieurs mégaoctets."
          },
          {
            q: "Que signifie zéro coût serveur mensuel ?",
            a: "Architecture 100% statique déployée sur CDN mondial (Cloudflare Pages ou GitHub Pages), sans bases de données coûteuses ni abonnements serveur."
          },
          {
            q: "Le site fonctionne-t-il parfaitement sur smartphone ?",
            a: "Oui. Chaque carrousel et scène 3D réagit au curseur comme au tactile, avec repli 2D automatique et respect de prefers-reduced-motion."
          },
          {
            q: "Quel est le délai complet de livraison ?",
            a: "Les vitrines Showcase 3D sont livrées en 5 à 7 jours ouvrables et les portails Flagship en 7 à 10 jours ouvrables."
          }
        ]
      },
      split: ["Flux", "Vision"],
      cotizar: {
        eyebrow: "07 / Solutions & Devis",
        title: "Choisissez votre architecture",
        cards: [
          {
            kicker: "01 · LIVRAISON 5–7 JOURS",
            desc: "Landing page signature avec scène WebGL en verre fluide, score 99/100 mobile et capture Web3Forms + WhatsApp.",
            cta: "Choisir Showcase"
          },
          {
            kicker: "02 · LIVRAISON 7–10 JOURS",
            desc: "Site corporate multi-sections, e-commerce ou SaaS avec configurateur technique, catalogue B2B et propriété CDN totale.",
            cta: "Choisir Flagship"
          }
        ],
        cfgEyebrow: "SLA < 2 HEURES OUVRABLES",
        cfgTitleHtml: "Configurez votre<br>projet aujourd'hui",
        cfgLede: "Renseignez vos spécifications pour recevoir une proposition technique sous deux heures, ou démarrez sur WhatsApp.",
        emailLabel: "E-MAIL OFFICIEL",
        waLabel: "WHATSAPP DIRECT",
        form: {
          nameLabel: "Nom ou Entreprise *",
          namePlaceholder: "Ex. Camille Laurent / Aura Studio",
          emailLabel: "Adresse E-mail *",
          emailPlaceholder: "contact@entreprise.com",
          typeLabel: "Type de Projet",
          types: ["Landing Page 3D", "Site Corporate", "E-commerce", "Application Web / SaaS"],
          budgetLabel: "Budget Estimé (USD)",
          budgetUndefined: "À définir / Conseil",
          detailsLabel: "Détails du Projet",
          detailsPlaceholder: "Décrivez vos objectifs, sections clés ou marchés cibles...",
          submit: "Envoyer la Demande",
          whatsapp: "Devis via WhatsApp"
        }
      },
      footer: {
        desc: "Flux · Légitimité · Union · Vision · Objectifs. Ingénierie web 3D, verre fluide et rapidité mobile extrême.",
        col1Heading: "Architecture",
        col1Links: ["Philosophie 0.8s", "Ingénierie 3D", "Portfolio", "Showcase & Flagship"],
        col2Heading: "Studio",
        col2Links: ["Protocole 40/30/30", "Configurateur Web"],
        col3Heading: "Légal",
        col3Buttons: ["Jalons & Garantie 30 Jours", "Politique de Confidentialité"],
        col3Links: ["Sitemap XML", "Robots.txt", "Index Sémantique IA (LLMs.txt)"],
        footLangsAria: "Éditions internationales de FLUVO",
        legalButtons: ["Conditions", "Confidentialité"]
      },
      modalUi: {
        closeAria: "Fermer la fiche",
        toQuote: "Demander un devis similaire",
        dismiss: "Fermer"
      },
      active: {
        quoteDefaultName: "un client",
        quoteNotProvided: "Non précisé",
        submittingLabel: "Envoi...",
        submitLabel: "Envoyer la Demande",
        subjectPrefix: "Nouveau Devis FLUVO : ",
        noDetailsLabel: "Aucun détail supplémentaire",
        projectTypeMap: {
          "Landing Page 3D": "Landing Page 3D",
          "Web Corporativa": "Site Corporate",
          "E-commerce": "E-commerce",
          "Aplicación Web / SaaS": "Application Web / SaaS"
        },
        budgetMap: {
          "< $300 USD": "< $300 USD",
          "$300 - $600 USD": "$300 - $600 USD",
          "$600 - $1,200 USD": "$600 - $1,200 USD",
          "+$1,200 USD": "+$1,200 USD",
          "Por definir / Asesoría": "À définir / Conseil"
        },
        statusSuccessHtml: function (email) {
          return "<strong>Demande enregistrée avec succès.</strong> Réponse envoyée à " + email + " sous 2 heures ouvrables, ou échangez sur WhatsApp.";
        },
        formatWhatsApp: function (d) {
          return "Bonjour FLUVO Studio, je suis " + d.name + ".\nJe souhaite un devis pour un projet web sur mesure :\n• Type : " + d.projectType + "\n• Budget : " + d.budget + "\n• E-mail : " + d.email + (d.msg ? "\n• Détails : " + d.msg : "");
        },
        details: {
          aura: {
            kicker: "01 · FINTECH WEB3",
            title: "Aura Protocol",
            html: "<p>Plateforme avec visualisation 3D en verre fluide optimisée pour mobile et réseaux à faible latence.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>0.8 s</strong><span>LCP Initial</span></div><div class='gl-modal__metric'><strong>99 / 100</strong><span>Lighthouse Mobile</span></div><div class='gl-modal__metric'><strong>0 $</strong><span>Serveur mensuel</span></div></div>"
          },
          kroma: {
            kicker: "02 · MODE & ARCHITECTURE",
            title: "Kroma Studio",
            html: "<p>Vitrine interactive éditoriale avec rotation libre et réfraction physique temps réel.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>+140 %</strong><span>Interaction 3D</span></div><div class='gl-modal__metric'><strong>60 fps</strong><span>Fluidité constante</span></div><div class='gl-modal__metric'><strong>100 %</strong><span>Tactile responsive</span></div></div>"
          },
          pulse: {
            kicker: "03 · SAAS ENTERPRISE",
            title: "Pulse Analytics",
            html: "<p>Architecture web corporate ultra-légère axée sur la conversion B2B.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>0 $</strong><span>Hébergement mensuel</span></div><div class='gl-modal__metric'><strong>100 %</strong><span>Uptime Edge CDN</span></div><div class='gl-modal__metric'><strong>5–7 jours</strong><span>Livraison</span></div></div>"
          },
          vortex: {
            kicker: "04 · INFRASTRUCTURE IA",
            title: "Vortex Labs",
            html: "<p>Documentation interactive avec visionneuse 3D modulaire sans frameworks lourds.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>99 / 100</strong><span>Lighthouse Mobile</span></div><div class='gl-modal__metric'><strong>&lt; 1 s</strong><span>First Contentful Paint</span></div><div class='gl-modal__metric'><strong>SLA 2h</strong><span>Support direct</span></div></div>"
          },
          nexo: {
            kicker: "05 · PORTAIL B2B 24/7",
            title: "Nexo Industrial",
            html: "<p>Catalogue technique B2B 24/7 connecté directement à WhatsApp et Web3Forms.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>100 %</strong><span>Uptime Edge CDN</span></div><div class='gl-modal__metric'><strong>30 jours</strong><span>Garantie technique</span></div><div class='gl-modal__metric'><strong>40/30/30</strong><span>Étapes vérifiées</span></div></div>"
          },
          terms: {
            kicker: "PROTOCOLE OFFICIEL FLUVO",
            title: "Étapes 40 / 30 / 30 & Garantie",
            html: "<p><strong>1. Jalons Vérifiables :</strong> 40% démarrage · 30% prototype interactif · 30% déploiement final.</p><p><strong>2. Garantie Technique 30 Jours :</strong> Maintenance et compatibilité post-lancement incluses.</p><p><strong>3. Propriété Complète :</strong> Cession intégrale sur CDN statique sans frais mensuels.</p>"
          },
          privacy: {
            kicker: "CONFIDENTIALITÉ",
            title: "Politique de Confidentialité",
            html: "<p><strong>1. Collecte Minimale :</strong> Données utilisées uniquement pour votre devis technique.</p><p><strong>2. Zéro Revente :</strong> Aucun traceur publicitaire invasif.</p><p><strong>3. Contact :</strong> robertmoya217@gmail.com ou +58 424 222 0172.</p>"
          }
        }
      }
    },

    de: {
      htmlLang: "de",
      title: "FLUVO — Schnelles 3D-Webdesign & Unternehmenswebsites | Liquid Glass",
      description: "FLUVO Studio gestaltet und entwickelt schnelle Unternehmenswebsites, 3D-Liquid-Glass-Landingpages und interaktive B2B-Kataloge mit 0,8s Ladezeit, 99/100 Mobile Lighthouse und $0/Monat Serverkosten.",
      nav: {
        links: ["Technik", "Projekte", "Angebot"],
        brandAria: "FLUVO — Startseite",
        brandImgAlt: "Offizielles FLUVO Studio Emblem — Ultra-Optimiertes 3D-Webdesign & Unternehmenswebsites",
        burgerAria: "Menü öffnen"
      },
      menu: {
        items: ["Philosophie", "3D-Technik", "Referenzen", "40/30/30-Protokoll", "Lösungen & Angebot"],
        eyebrow: "FLUVO.ORG · DIGITAL STUDIO",
        descHtml: "Fluss · Legitimität · Einheit · Vision · Ziele.<br />Liquid-Glass-3D-Websites für sofortige Ladezeiten auf mobilen und globalen Netzen.",
        waLabel: "+58 424 222 0172 · WhatsApp"
      },
      hero: {
        eyebrow: "FLUVO.ORG · 3D-WEB-ENGINEERING & LIQUID GLASS",
        titleHtml: "Flüssigkristall<br>in Echtzeit-Last",
        copy: "Schnelles Webdesign und Entwicklung für Unternehmen, 3D-Liquid-Glass-Landingpages und B2B-Kataloge, entwickelt für sofortiges Laden auf Mobilgeräten ohne monatliche Serverkosten.",
        ctaPrimary: "Projekt Starten",
        ctaSecondary: "Architektur Entdecken",
        modesLabel: "3D Optisches Material",
        modesAria: "Optischer Modus des 3D-Kristalls",
        modes: ["01 Obsidian", "02 Optische Bronze", "03 Flüssigquarz"],
        telemetryHtml: [
          "<strong>0.8s</strong> Mobil-LCP",
          "<strong>99/100</strong> Lighthouse",
          "<strong>$0/Mt.</strong> Server"
        ]
      },
      manifesto: {
        eyebrow: "01 / Fluss-Philosophie",
        titleHtml: "Die visuelle Präsenz von Glas,<br><span class=\"hl\">ohne Kilobyte-Ballast.</span>",
        ledeHtml: "Die meisten 3D-Websites opfern Ladegeschwindigkeit für Dekoration. Bei FLUVO kalibrieren wir <span class=\"hl\">modulare Liquid-Glass-Shader, Mobile-First-Rendering und Edge-Auslieferung</span> unter einer Sekunde.",
        monthSuffix: "/Mt.",
        labels: [
          "Verifizierte Ladezeit im 3G-Mobilfunknetz",
          "Google Lighthouse Mobile Score",
          "Monatliche Serverkosten im Edge CDN",
          "Globale Produktions-Verfügbarkeit"
        ]
      },
      rail: {
        aria: "3D-Engineering-Sequenz",
        indexAria: "Architektur-Index",
        prevAria: "Vorheriger Pfeiler",
        nextAria: "Nächster Pfeiler",
        eyebrow: "02 / Echtzeit-Engineering",
        titleHtml: "Fünf Säulen der<br>FLUVO-Architektur",
        slides: [
          {
            tag: "01 · OPTISCHE OBERFLÄCHE",
            title: "Dynamisches Liquid Glass",
            desc: "Kalibrierte Brechungs-Shader und Studio-Beleuchtung auf tiefem Obsidian ohne Hauptthread-Blockierung."
          },
          {
            tag: "02 · MODULARE KOMPILIERUNG",
            title: "Schlanker WebGL-Kern",
            desc: "Sofort kompilierte GPU-Geometrie ersetzt schwere externe 3D-Dateien mit Dutzenden Megabytes."
          },
          {
            tag: "03 · SUB-SEKUNDEN-SPEED",
            title: "0.8s Startladezeit",
            desc: "Statische Architektur ohne renderblockierende Skripte, getestet unter realen 3G-Bedingungen."
          },
          {
            tag: "04 · TAKTILE ERGONOMIE",
            title: "Mobile-First Design",
            desc: "Flüssige Maus- und Touch-Interaktion mit intelligenter Framerate-Regelung."
          },
          {
            tag: "05 · ZERO INFRASTRUKTUR",
            title: "100% Globales Edge CDN",
            desc: "Statisches Hosting auf Cloudflare Pages oder GitHub Pages ohne Backend-Risiken für 0 $/Monat."
          }
        ]
      },
      duo: [
        {
          eyebrow: "03 / Präzisions-Ästhetik",
          titleHtml: "Adaptive physische<br>Lichtbrechung",
          desc: "Jede Szene passt Raytracing-Dichte und FPS automatisch an Gerät und Bewegungseinstellungen an – schont Akku bei maximaler Schärfe.",
          specs: "INTERSECTION PAUSING · NULL WEBGL-LEAKS · 60 FPS"
        },
        {
          eyebrow: "04 / Globale Reichweite",
          titleHtml: "Volle Flüssigkeit auch in<br>schwachen Netzen",
          desc: "Mobile-First entwickelt für echte Konnektivität weltweit: direktes statisches HTML und weltweite Edge-CDN-Auslieferung.",
          specs: "EDGE CDN · KEIN VERWUNDBARES BACKEND · ECHTZEIT"
        }
      ],
      cases: {
        eyebrow: "05 / Verifiziertes Portfolio",
        title: "Vorzeigeprojekte",
        hintHtml: "Erfolgsprojekte auf der FLUVO-Architektur. Klicken Sie auf <strong style=\"color:var(--ink)\">+</strong> für technische Details.",
        trackAria: "FLUVO Projekt-Portfolio",
        prevAria: "Vorheriges Projekt",
        nextAria: "Nächstes Projekt",
        items: [
          {
            kicker: "FINTECH WEB3",
            desc: "3D-Liquid-Glass-Plattform optimiert für Mobilgeräte und niedrige Latenz.",
            metric: "0.8S LADEZEIT · 99 LIGHTHOUSE",
            btnAria: "Aura Protocol prüfen"
          },
          {
            kicker: "MODE & ARCHITEKTUR",
            desc: "Interaktives Editorial-Showcase mit freier Drehung und Echtzeit-Refraktion.",
            metric: "+140% TOUCH-INTERAKTION",
            btnAria: "Kroma Studio prüfen"
          },
          {
            kicker: "SAAS ENTERPRISE",
            desc: "Ultra-leichte Unternehmenswebsite fokussiert auf B2B-Conversion und Telemetrie.",
            metric: "$0 MONATLICHE SERVERKOSTEN",
            btnAria: "Pulse Analytics prüfen"
          },
          {
            kicker: "KI-INFRASTRUKTUR",
            desc: "Interaktive Dokumentation mit modularem 3D-Viewer ohne Framework-Ballast.",
            metric: "99/100 MOBILE LIGHTHOUSE",
            btnAria: "Vortex Labs prüfen"
          },
          {
            kicker: "B2B PORTAL 24/7",
            desc: "Industriekatalog mit direkter WhatsApp- und Angebotsanbindung.",
            metric: "100% GLOBALE EDGE-UPTIME",
            btnAria: "Nexo Industrial prüfen"
          }
        ]
      },
      protocol: {
        eyebrow: "06 / Garantie & Meilensteine",
        titleHtml: "Lieferung in 5–10<br>Werktagen",
        steps: [
          {
            num: "MEILENSTEIN 01 · 40% ANZAHLUNG",
            title: "Architektur & 3D-Direktion",
            desc: "Strukturkonzept, Typografie, Liquid-Glass-Shader-Prototyp und konversionsorientierte Statik."
          },
          {
            num: "MEILENSTEIN 02 · 30% FREIGABE",
            title: "Interaktiver Live-Prototyp",
            desc: "Validierung in echten Desktop- und Smartphone-Browsern inklusive Feinschliff von Kontrast und Anfragefluss."
          },
          {
            num: "MEILENSTEIN 03 · 30% ABSCHLUSS · 30 TAGE GARANTIE",
            title: "Audit & Globales Edge CDN",
            desc: "Live-Deployment mit vollständiger Rechteübertragung und 30 Tagen technischer Garantie."
          }
        ],
        faqs: [
          {
            q: "Wie erreicht FLUVO extrem schnelle 3D-Websites?",
            a: "Wir nutzen modulare WebGL-Engines und prozedurale Shader ohne schwere Bibliotheken oder Multi-Megabyte-3D-Modelle."
          },
          {
            q: "Was bedeuten 0 € monatliche Serverkosten?",
            a: "100% statische Architektur über globale Edge-CDNs wie Cloudflare Pages oder GitHub Pages ohne teure Datenbank-Server."
          },
          {
            q: "Funktioniert alles flüssig auf jedem Smartphone?",
            a: "Ja. Alle Touch-Karussells und 3D-Szenen unterstützen Maus, Touch, automatisches 2D-Fallback und reduzierte Bewegung."
          },
          {
            q: "Wie lange dauert die Umsetzung?",
            a: "Showcase-3D-Landings in 5–7 Werktagen; Flagship-Corporate-Portale in 7–10 Werktagen inklusive Garantie."
          }
        ]
      },
      split: ["Fluss", "Vision"],
      cotizar: {
        eyebrow: "07 / Lösungen & Angebot",
        title: "Wählen Sie Ihre Architektur",
        cards: [
          {
            kicker: "01 · LIEFERUNG 5–7 TAGE",
            desc: "Flaggschiff-Landingpage mit Live-Liquid-Glass-WebGL, 99/100 Mobile Lighthouse und Web3Forms + WhatsApp.",
            cta: "Showcase wählen"
          },
          {
            kicker: "02 · LIEFERUNG 7–10 TAGE",
            desc: "Mehrteilige Corporate-Website, E-Commerce oder SaaS mit Konfigurator, B2B-Katalog und Edge-CDN-Übergabe.",
            cta: "Flagship wählen"
          }
        ],
        cfgEyebrow: "SLA < 2 WERKSTUNDEN",
        cfgTitleHtml: "Projekt heute<br>konfigurieren",
        cfgLede: "Senden Sie Ihre Anforderungen für ein technisches Angebot innerhalb von zwei Stunden oder schreiben Sie direkt auf WhatsApp.",
        emailLabel: "OFFIZIELLE E-MAIL",
        waLabel: "DIREKTES WHATSAPP",
        form: {
          nameLabel: "Name oder Unternehmen *",
          namePlaceholder: "z. B. Lukas Weber / Aura Studio",
          emailLabel: "E-Mail-Adresse *",
          emailPlaceholder: "name@unternehmen.com",
          typeLabel: "Projekttyp",
          types: ["3D Landing Page", "Unternehmenswebsite", "E-Commerce", "Web-App / SaaS"],
          budgetLabel: "Geschätztes Budget (USD)",
          budgetUndefined: "Nach Absprache / Beratung",
          detailsLabel: "Projektdetails",
          detailsPlaceholder: "Beschreiben Sie Ziele, gewünschte Bereiche oder Zielmärkte...",
          submit: "Anfrage Senden",
          whatsapp: "Über WhatsApp anfragen"
        }
      },
      footer: {
        desc: "Fluss · Legitimität · Einheit · Vision · Ziele. Globales 3D-Web-Engineering, Liquid Glass und maximale Mobilgeschwindigkeit.",
        col1Heading: "Architektur",
        col1Links: ["0.8s Philosophie", "3D-Engineering", "Portfolio", "Showcase & Flagship"],
        col2Heading: "Studio",
        col2Links: ["40/30/30-Protokoll", "Web-Konfigurator"],
        col3Heading: "Rechtliches",
        col3Buttons: ["Meilensteine & 30-Tage-Garantie", "Datenschutz"],
        col3Links: ["Sitemap XML", "Robots.txt", "KI-Semantikindex (LLMs.txt)"],
        footLangsAria: "Internationale Ausgaben von FLUVO",
        legalButtons: ["Bedingungen", "Datenschutz"]
      },
      modalUi: {
        closeAria: "Ansicht schließen",
        toQuote: "Ähnliches Projekt anfragen",
        dismiss: "Schließen"
      },
      active: {
        quoteDefaultName: "ein Interessent",
        quoteNotProvided: "Nicht angegeben",
        submittingLabel: "Wird gesendet...",
        submitLabel: "Anfrage Senden",
        subjectPrefix: "Neue FLUVO-Anfrage: ",
        noDetailsLabel: "Keine weiteren Details",
        projectTypeMap: {
          "Landing Page 3D": "3D Landing Page",
          "Web Corporativa": "Unternehmenswebsite",
          "E-commerce": "E-Commerce",
          "Aplicación Web / SaaS": "Web-App / SaaS"
        },
        budgetMap: {
          "< $300 USD": "< $300 USD",
          "$300 - $600 USD": "$300 - $600 USD",
          "$600 - $1,200 USD": "$600 - $1,200 USD",
          "+$1,200 USD": "+$1,200 USD",
          "Por definir / Asesoría": "Nach Absprache / Beratung"
        },
        statusSuccessHtml: function (email) {
          return "<strong>Anfrage erfolgreich übermittelt.</strong> Wir antworten innerhalb von 2 Werkstunden an " + email + " oder direkt per WhatsApp.";
        },
        formatWhatsApp: function (d) {
          return "Hallo FLUVO Studio, ich bin " + d.name + ".\nIch möchte ein individuelles Webprojekt anfragen:\n• Projekttyp: " + d.projectType + "\n• Budget: " + d.budget + "\n• E-Mail: " + d.email + (d.msg ? "\n• Details: " + d.msg : "");
        },
        details: {
          aura: {
            kicker: "01 · FINTECH WEB3",
            title: "Aura Protocol",
            html: "<p>Liquid-Glass-3D-Plattform für Mobilgeräte und schnelle globale Netzwerke.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>0.8 s</strong><span>LCP-Start</span></div><div class='gl-modal__metric'><strong>99 / 100</strong><span>Lighthouse Mobil</span></div><div class='gl-modal__metric'><strong>$0 USD</strong><span>Serverkosten</span></div></div>"
          },
          kroma: {
            kicker: "02 · MODE & ARCHITEKTUR",
            title: "Kroma Studio",
            html: "<p>Interaktives Showcase mit freier 3D-Steuerung und Echtzeit-Lichtbrechung.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>+140 %</strong><span>3D-Interaktion</span></div><div class='gl-modal__metric'><strong>60 fps</strong><span>Konstant flüssig</span></div><div class='gl-modal__metric'><strong>100 %</strong><span>Touch-fähig</span></div></div>"
          },
          pulse: {
            kicker: "03 · SAAS ENTERPRISE",
            title: "Pulse Analytics",
            html: "<p>Schlanke B2B-Webarchitektur mit Fokus auf Conversion und Telemetrie.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>$0 USD</strong><span>Monatliches Hosting</span></div><div class='gl-modal__metric'><strong>100 %</strong><span>Edge-CDN-Uptime</span></div><div class='gl-modal__metric'><strong>5–7 Tage</strong><span>Lieferzeit</span></div></div>"
          },
          vortex: {
            kicker: "04 · KI-INFRASTRUKTUR",
            title: "Vortex Labs",
            html: "<p>Interaktive technische Dokumentation mit modularem 3D-Viewer.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>99 / 100</strong><span>Lighthouse Mobil</span></div><div class='gl-modal__metric'><strong>&lt; 1 s</strong><span>FCP</span></div><div class='gl-modal__metric'><strong>SLA 2h</strong><span>Direktsupport</span></div></div>"
          },
          nexo: {
            kicker: "05 · B2B PORTAL 24/7",
            title: "Nexo Industrial",
            html: "<p>B2B-Spezifikationskatalog mit direkter WhatsApp- und Web3Forms-Anbindung.</p><div class='gl-modal__metrics'><div class='gl-modal__metric'><strong>100 %</strong><span>Edge-CDN-Uptime</span></div><div class='gl-modal__metric'><strong>30 Tage</strong><span>Garantie</span></div><div class='gl-modal__metric'><strong>40/30/30</strong><span>Meilensteine</span></div></div>"
          },
          terms: {
            kicker: "OFFIZIELLES FLUVO-PROTOKOLL",
            title: "40 / 30 / 30 Meilensteine & Garantie",
            html: "<p><strong>1. Meilensteine:</strong> 40% Start · 30% Prototyp-Freigabe · 30% Livegang.</p><p><strong>2. 30-Tage-Garantie:</strong> Technischer Support und Browser-Kompatibilität.</p><p><strong>3. Eigentum:</strong> Vollständige Übergabe auf Edge CDN ohne laufende Servergebühren.</p>"
          },
          privacy: {
            kicker: "VERTRAULICHKEIT",
            title: "Datenschutz",
            html: "<p><strong>1. Datensparsamkeit:</strong> Verarbeitung ausschließlich für Ihr Projektangebot.</p><p><strong>2. Keine Weitergabe:</strong> Keine Werbe-Tracker oder Verkauf an Dritte.</p><p><strong>3. Kontakt:</strong> robertmoya217@gmail.com oder +58 424 222 0172.</p>"
          }
        }
      }
    }
  };

  root.__FLUVO_I18N_DATA__ = { TRANSLATIONS: TRANSLATIONS, NATIVE_LANGS: NATIVE_LANGS };
  if (typeof root.document === "undefined") {
    return;
  }

  function setText(sel, val) {
    var el = document.querySelector(sel);
    if (el && val !== undefined) el.textContent = val;
  }

  function setHtml(sel, val) {
    var el = document.querySelector(sel);
    if (el && val !== undefined) el.innerHTML = val;
  }

  function setAttr(sel, attr, val) {
    var el = document.querySelector(sel);
    if (el && val !== undefined) el.setAttribute(attr, val);
  }

  function clearGoogleCookie() {
    var past = "expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    document.cookie = "googtrans=; " + past;
    if (location.hostname) {
      document.cookie = "googtrans=; " + past + "; domain=" + location.hostname;
      document.cookie = "googtrans=; " + past + "; domain=." + location.hostname;
    }
  }

  function setGoogleCookie(target) {
    var val = "/es/" + target;
    document.cookie = "googtrans=" + val + "; path=/";
    if (location.hostname && location.hostname !== "localhost" && !/^127\./.test(location.hostname)) {
      document.cookie = "googtrans=" + val + "; path=/; domain=." + location.hostname;
    }
  }

  var gtLoaded = false;
  var pendingGtLang = null;

  root.googleTranslateElementInit = function () {
    if (!root.google || !root.google.translate || !root.google.translate.TranslateElement) return;
    new root.google.translate.TranslateElement({
      pageLanguage: "es",
      autoDisplay: false
    }, "google_translate_element");
    if (pendingGtLang) {
      var target = pendingGtLang;
      pendingGtLang = null;
      var tries = 0;
      var timer = setInterval(function () {
        var combo = document.querySelector(".goog-te-combo");
        tries++;
        if (combo) {
          combo.value = target;
          combo.dispatchEvent(new Event("change"));
          clearInterval(timer);
        } else if (tries > 25) {
          clearInterval(timer);
        }
      }, 150);
    }
  };

  function triggerGoogleTranslate(gtLang) {
    applyLanguage("es", true);
    setGoogleCookie(gtLang);
    pendingGtLang = gtLang;
    var combo = document.querySelector(".goog-te-combo");
    if (combo) {
      combo.value = gtLang;
      combo.dispatchEvent(new Event("change"));
      return;
    }
    if (!gtLoaded) {
      gtLoaded = true;
      var s = document.createElement("script");
      s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      s.async = true;
      s.onerror = function () { /* graceful offline fallback */ };
      document.head.appendChild(s);
    }
  }

  function applyLanguage(langCode, skipCookieClear) {
    var t = TRANSLATIONS[langCode] || TRANSLATIONS.es;
    if (!skipCookieClear) {
      var wasGoogle = document.documentElement.classList.contains("translated-ltr") ||
        document.documentElement.classList.contains("translated-rtl");
      clearGoogleCookie();
      if (wasGoogle) {
        location.reload();
        return;
      }
    }

    document.documentElement.lang = t.htmlLang;
    document.title = t.title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t.description);

    /* header & overlay menu */
    var navLinks = document.querySelectorAll("#nav .nav__link");
    t.nav.links.forEach(function (lbl, i) { if (navLinks[i]) navLinks[i].textContent = lbl; });
    setAttr("#nav .brand", "aria-label", t.nav.brandAria);
    if (t.nav.brandImgAlt) setAttr("#nav .brand__mark", "alt", t.nav.brandImgAlt);
    setAttr("#burger", "aria-label", t.nav.burgerAria);

    var menuLinks = document.querySelectorAll("#menu .menu__list a");
    t.menu.items.forEach(function (lbl, i) {
      if (menuLinks[i]) menuLinks[i].innerHTML = lbl + "<span>" + ("0" + (i + 1)).slice(-2) + "</span>";
    });
    setText("#menu .menu__meta .eyebrow", t.menu.eyebrow);
    var metaPs = document.querySelectorAll("#menu .menu__meta p");
    if (metaPs[1]) metaPs[1].innerHTML = t.menu.descHtml;
    setText("#menu .menu__links a:nth-of-type(2)", t.menu.waLabel);

    /* hero */
    setText("#top .eyebrow", t.hero.eyebrow);
    setHtml("#top .hero__title", t.hero.titleHtml);
    setText("#top .hero__copy", t.hero.copy);
    setText("#top .hero__cta .btn--solid", t.hero.ctaPrimary);
    setText("#top .hero__cta .btn--ghost", t.hero.ctaSecondary);
    setText("#top .hero__modes-label", t.hero.modesLabel);
    setAttr("#heroModes", "aria-label", t.hero.modesAria);
    var modeBtns = document.querySelectorAll("#heroModes [data-mode-idx]");
    t.hero.modes.forEach(function (lbl, i) { if (modeBtns[i]) modeBtns[i].textContent = lbl; });
    var teleSpans = document.querySelectorAll("#top .hero__telemetry span");
    t.hero.telemetryHtml.forEach(function (html, i) { if (teleSpans[i]) teleSpans[i].innerHTML = html; });

    /* manifesto + odometers */
    setText("#filosofia .eyebrow", t.manifesto.eyebrow);
    setHtml("#filosofia .h2", t.manifesto.titleHtml);
    setHtml("#filosofia .lede", t.manifesto.ledeHtml);
    var suffixes = document.querySelectorAll("#filosofia .stat__suffix");
    if (suffixes[2]) suffixes[2].textContent = t.manifesto.monthSuffix;
    var statLabels = document.querySelectorAll("#filosofia .stat__label");
    t.manifesto.labels.forEach(function (lbl, i) { if (statLabels[i]) statLabels[i].textContent = lbl; });

    /* engineering rail */
    setAttr("#ingenieria", "aria-label", t.rail.aria);
    setAttr("#railIndex", "aria-label", t.rail.indexAria);
    setAttr("#railPrev", "aria-label", t.rail.prevAria);
    setAttr("#railNext", "aria-label", t.rail.nextAria);
    setText("#ingenieria .rail__head .eyebrow", t.rail.eyebrow);
    setHtml("#ingenieria .rail__head .h3", t.rail.titleHtml);
    var rSlides = document.querySelectorAll("#railTrack .rail__slide");
    t.rail.slides.forEach(function (s, i) {
      if (!rSlides[i]) return;
      var tag = rSlides[i].querySelector(".rail__tag");
      var h4 = rSlides[i].querySelector("h4");
      var p = rSlides[i].querySelector("p");
      if (tag) tag.textContent = s.tag;
      if (h4) h4.textContent = s.title;
      if (p) p.textContent = s.desc;
    });

    /* asymmetric duo */
    var duoPanels = document.querySelectorAll(".duo .gl-panel");
    t.duo.forEach(function (d, i) {
      if (!duoPanels[i]) return;
      var ey = duoPanels[i].querySelector(".eyebrow");
      var h3 = duoPanels[i].querySelector(".h3");
      var p = duoPanels[i].querySelector("p:not(.eyebrow)");
      var sp = duoPanels[i].querySelector(".gl-panel__specs");
      if (ey) ey.textContent = d.eyebrow;
      if (h3) h3.innerHTML = d.titleHtml;
      if (p) p.textContent = d.desc;
      if (sp) sp.textContent = d.specs;
    });

    /* portfolio carousel */
    setText("#casos .eyebrow", t.cases.eyebrow);
    setText("#casos .h2", t.cases.title);
    setHtml("#casos .carousel__head > p.body", t.cases.hintHtml);
    setAttr("#carTrack", "aria-label", t.cases.trackAria);
    setAttr("#carPrev", "aria-label", t.cases.prevAria);
    setAttr("#carNext", "aria-label", t.cases.nextAria);
    var cSlides = document.querySelectorAll("#carTrack .gl-slide");
    t.cases.items.forEach(function (c, i) {
      if (!cSlides[i]) return;
      var kk = cSlides[i].querySelector(".gl-slide__kicker");
      var dp = cSlides[i].querySelector(".gl-slide__foot p");
      var mt = cSlides[i].querySelector(".gl-slide__metric");
      var bt = cSlides[i].querySelector(".plus");
      if (kk) kk.textContent = c.kicker;
      if (dp) dp.textContent = c.desc;
      if (mt) mt.textContent = c.metric;
      if (bt) bt.setAttribute("aria-label", c.btnAria);
    });

    /* protocol & FAQs */
    setText("#protocolo .protocol__overlay .eyebrow", t.protocol.eyebrow);
    setHtml("#protocolo .protocol__overlay .h3", t.protocol.titleHtml);
    var steps = document.querySelectorAll("#protocolo .protocol__step");
    t.protocol.steps.forEach(function (st, i) {
      if (!steps[i]) return;
      var nm = steps[i].querySelector(".num");
      var h3 = steps[i].querySelector(".h3");
      var p = steps[i].querySelector("p");
      if (nm) nm.textContent = st.num;
      if (h3) h3.textContent = st.title;
      if (p) p.textContent = st.desc;
    });
    var faqs = document.querySelectorAll("#faqList .faq-item");
    t.protocol.faqs.forEach(function (fq, i) {
      if (!faqs[i]) return;
      var qs = faqs[i].querySelector(".faq-q span");
      var ap = faqs[i].querySelector(".faq-a p");
      if (qs) qs.textContent = fq.q;
      if (ap) ap.textContent = fq.a;
    });

    /* split word */
    var splitSpans = document.querySelectorAll(".split span");
    if (splitSpans[0]) splitSpans[0].textContent = t.split[0];
    if (splitSpans[1]) splitSpans[1].textContent = t.split[1];

    /* solutions & quote configurator */
    setText("#cotizar > .wrap > .eyebrow", t.cotizar.eyebrow);
    setText("#cotizar > .wrap > .h2", t.cotizar.title);
    var solCards = document.querySelectorAll("#cotizar .card");
    t.cotizar.cards.forEach(function (sc, i) {
      if (!solCards[i]) return;
      var kk = solCards[i].querySelector(".card__kicker");
      var p = solCards[i].querySelector(".card__copy p:not(.card__kicker)");
      var btn = solCards[i].querySelector(".card__copy button");
      if (kk) kk.textContent = sc.kicker;
      if (p) p.textContent = sc.desc;
      if (btn) btn.textContent = sc.cta;
    });
    setText("#configurator > div > .eyebrow", t.cotizar.cfgEyebrow);
    setHtml("#configurator > div > .h2", t.cotizar.cfgTitleHtml);
    setText("#configurator > div > .lede", t.cotizar.cfgLede);
    var cLinks = document.querySelectorAll("#configurator .config-link span");
    if (cLinks[0]) cLinks[0].textContent = t.cotizar.emailLabel;
    if (cLinks[1]) cLinks[1].textContent = t.cotizar.waLabel;

    setText('label[for="qName"]', t.cotizar.form.nameLabel);
    setAttr("#qName", "placeholder", t.cotizar.form.namePlaceholder);
    setText('label[for="qEmail"]', t.cotizar.form.emailLabel);
    setAttr("#qEmail", "placeholder", t.cotizar.form.emailPlaceholder);
    var qFields = document.querySelectorAll("#quoteForm > .gl-field");
    if (qFields[0] && qFields[0].querySelector("label")) qFields[0].querySelector("label").textContent = t.cotizar.form.typeLabel;
    if (qFields[1] && qFields[1].querySelector("label")) qFields[1].querySelector("label").textContent = t.cotizar.form.budgetLabel;
    var typeChips = document.querySelectorAll("#qTypeChips .gl-chip");
    t.cotizar.form.types.forEach(function (lbl, i) { if (typeChips[i]) typeChips[i].textContent = lbl; });
    var budgetChips = document.querySelectorAll("#qBudgetChips .gl-chip");
    if (budgetChips[4]) budgetChips[4].textContent = t.cotizar.form.budgetUndefined;
    setText('label[for="qMessage"]', t.cotizar.form.detailsLabel);
    setAttr("#qMessage", "placeholder", t.cotizar.form.detailsPlaceholder);
    setText("#qSubmit", t.cotizar.form.submit);
    setText("#qWhatsApp", t.cotizar.form.whatsapp);

    /* footer */
    if (t.nav.brandImgAlt) setAttr(".foot__brand img", "alt", t.nav.brandImgAlt);
    var footDesc = document.querySelector(".foot__about > p.body");
    if (footDesc) footDesc.textContent = t.footer.desc;
    var footCols = document.querySelectorAll(".foot__cols > div");
    if (footCols[1]) {
      var h5a = footCols[1].querySelector("h3, h5");
      if (h5a) h5a.textContent = t.footer.col1Heading;
      var la = footCols[1].querySelectorAll("li a");
      t.footer.col1Links.forEach(function (lbl, i) { if (la[i]) la[i].textContent = lbl; });
    }
    if (footCols[2]) {
      var h5b = footCols[2].querySelector("h3, h5");
      if (h5b) h5b.textContent = t.footer.col2Heading;
      var lb = footCols[2].querySelectorAll("li a");
      if (lb[0]) lb[0].textContent = t.footer.col2Links[0];
      if (lb[1]) lb[1].textContent = t.footer.col2Links[1];
    }
    if (footCols[3]) {
      var h5c = footCols[3].querySelector("h3, h5");
      if (h5c) h5c.textContent = t.footer.col3Heading;
      var lbc = footCols[3].querySelectorAll("li button");
      t.footer.col3Buttons.forEach(function (lbl, i) { if (lbc[i]) lbc[i].textContent = lbl; });
      var lac = footCols[3].querySelectorAll("li a");
      t.footer.col3Links.forEach(function (lbl, i) { if (lac[i]) lac[i].textContent = lbl; });
    }
    if (t.footer.footLangsAria) setAttr(".foot__langs", "aria-label", t.footer.footLangsAria);
    var activeHtmlLang = t.htmlLang || langCode;
    var flLinks = document.querySelectorAll(".foot__langs a[hreflang]");
    for (var fi = 0; fi < flLinks.length; fi++) {
      if (flLinks[fi].getAttribute("hreflang") === activeHtmlLang) {
        flLinks[fi].setAttribute("aria-current", "page");
      } else {
        flLinks[fi].removeAttribute("aria-current");
      }
    }
    var legBtns = document.querySelectorAll(".foot__legal-links button");
    t.footer.legalButtons.forEach(function (lbl, i) { if (legBtns[i]) legBtns[i].textContent = lbl; });

    /* modal UI + active hook for app.js */
    setAttr("#detailClose", "aria-label", t.modalUi.closeAria);
    setText("#detailToQuote", t.modalUi.toQuote);
    setText("#detailDismiss", t.modalUi.dismiss);

    root.FLUVO_ACTIVE_I18N = t.active;
    if (typeof root.FLUVO_REFRESH_QUOTE === "function") root.FLUVO_REFRESH_QUOTE();
  }

  function detectPreferredLang() {
    var pageLang = document.documentElement.getAttribute("data-page-lang") || "";
    var ua = (typeof navigator !== "undefined" && navigator.userAgent) ? navigator.userAgent : "";
    var isCrawler = /googlebot|bingbot|yandex|duckduckbot|baiduspider|applebot|slurp|oai-searchbot|gptbot|claudebot|perplexitybot|facebookexternalhit|twitterbot|linkedinbot/i.test(ua);
    if (isCrawler) return pageLang || "es";

    var qs = new URLSearchParams(location.search);
    var qLang = qs.get("lang");
    if (qLang) return qLang;

    try {
      var saved = localStorage.getItem("fluvo_lang");
      if (saved) return saved;
    } catch (e) {}

    var langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ""];
    for (var i = 0; i < langs.length; i++) {
      var raw = String(langs[i] || "").toLowerCase();
      if (!raw) continue;
      var base = raw.split("-")[0];
      if (NATIVE_LANGS.indexOf(base) !== -1) {
        return pageLang || base;
      }
      if (GOOGLE_EXTRA[raw]) return GOOGLE_EXTRA[raw];
      if (GOOGLE_EXTRA[base]) return GOOGLE_EXTRA[base];
      if (base && /^[a-z]{2,3}$/.test(base)) return base;
    }
    return pageLang || "es";
  }

  function selectAndApply(lang, saveChoice) {
    var norm = String(lang || "es");
    var lower = norm.toLowerCase();
    var base = lower.split("-")[0];

    if (saveChoice) {
      try { localStorage.setItem("fluvo_lang", norm); } catch (e) {}
    }

    var sel = document.getElementById("langSelect");
    if (NATIVE_LANGS.indexOf(base) !== -1) {
      applyLanguage(base, false);
      if (sel) sel.value = base;
    } else {
      var gtCode = GOOGLE_EXTRA[lower] || GOOGLE_EXTRA[base] || norm;
      if (sel) {
        if (![].some.call(sel.options, function (o) { return o.value === gtCode; })) {
          var opt = document.createElement("option");
          opt.value = gtCode;
          opt.textContent = gtCode.split("-")[0].toUpperCase();
          sel.appendChild(opt);
        }
        sel.value = gtCode;
      }
      triggerGoogleTranslate(gtCode);
    }
  }

  var initial = detectPreferredLang();
  var pageRouteLang = document.documentElement.getAttribute("data-page-lang") || "";
  var selEl = document.getElementById("langSelect");

  if (pageRouteLang && NATIVE_LANGS.indexOf(pageRouteLang) !== -1 && initial === pageRouteLang) {
    root.FLUVO_ACTIVE_I18N = TRANSLATIONS[pageRouteLang].active;
    if (selEl) selEl.value = pageRouteLang;
  } else {
    selectAndApply(initial, false);
  }

  if (selEl) {
    selEl.addEventListener("change", function () {
      selectAndApply(selEl.value, true);
    });
  }

  var footLangLinks = document.querySelectorAll(".foot__langs a[hreflang]");
  for (var fli = 0; fli < footLangLinks.length; fli++) {
    footLangLinks[fli].addEventListener("click", function () {
      var hl = this.getAttribute("hreflang");
      if (hl) {
        try { localStorage.setItem("fluvo_lang", hl); } catch (e) {}
      }
    });
  }

  root.FLUVO_I18N = {
    apply: function (lang) { selectAndApply(lang, true); },
    translations: TRANSLATIONS
  };
})(typeof window !== "undefined" ? window : globalThis);
