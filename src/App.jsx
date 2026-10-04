import React, { useState, useEffect } from 'react'
import InteractiveBackground from './components/InteractiveBackground'
import HeroScene from './components/HeroScene'
import fluvoLogo from './assets/logo.gif'
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Smartphone,
  Zap,
  Shield,
  Layers,
  Monitor,
  Wifi,
  CheckCircle2,
  ChevronDown,
  Clock,
  Send,
  Home,
  Star,
  Users
} from 'lucide-react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  // Elemento 4: Estado del formulario y Thank you state
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  // Elemento 7: Acordeón interactivo de FAQs
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setFormSubmitted(true)
    }
  }

  const faqs = [
    {
      q: '¿Cómo logra FLUVO sitios tan rápidos con gráficos 3D?',
      a: 'Utilizamos compresión modular en Vite, WebGL optimizado con React Three Fiber y shaders adaptativos. Si el usuario está en móvil o red lenta, la escena ajusta automáticamente su resolución sin perder estética.'
    },
    {
      q: '¿Qué significa que el sitio tiene mantenimiento ligero y cero costo de servidor?',
      a: 'Desarrollamos arquitecturas estáticas servidas a través de redes CDN globales (como GitHub Pages o Cloudflare). No hay servidores Node.js ni bases de datos vulnerables que requieran parches constantes o pagos mensuales.'
    },
    {
      q: '¿Es compatible con cualquier teléfono móvil o tablet?',
      a: 'Totalmente. Cada elemento interactivo y las partículas de fondo responden tanto al cursor como al tacto (touch events). Probamos en dispositivos de gama de entrada con simulación de red 3G.'
    },
    {
      q: '¿Cuánto tiempo toma tener una web completa lista?',
      a: 'Nuestros proyectos típicos se entregan listos para producción y desplegados en un plazo de 5 a 10 días laborables con soporte garantizado.'
    }
  ]

  const caseStudies = [
    {
      title: 'Aura Protocol',
      category: 'Fintech Web3',
      desc: 'Plataforma con visualización de nodos en vidrio fluido 3D. 99/100 en Lighthouse móvil.',
      metric: '0.8s carga inicial'
    },
    {
      title: 'Kroma Studio',
      category: 'Moda & Arquitectura',
      desc: 'Showcase interactivo de productos con rotación libre y refracción de luz en tiempo real.',
      metric: '+140% interacción'
    },
    {
      title: 'Pulse Analytics',
      category: 'SaaS Enterprise',
      desc: 'Sitio corporativo ultra-ligero enfocado en conversión y visualización de datos táctil.',
      metric: '0 costo de hosting'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative pb-16 sm:pb-0">

      {/* Fondo interactivo 3D que reacciona al cursor y al tacto */}
      <InteractiveBackground />

      {/* ─────────── NAVEGACIÓN (Elemento 3: Internal links structure) ─────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-24 flex items-center justify-between">

          <a href="#" className="flex items-center gap-2 group">
            <img 
              src={fluvoLogo} 
              alt="Logotipo oficial de FLUVO Studio en alta resolución" 
              className="h-16 sm:h-20 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity" 
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-white/50">
            <a href="#work" className="hover:text-white transition-colors duration-300">Servicios</a>
            <a href="#portfolio" className="hover:text-white transition-colors duration-300">Proyectos</a>
            <a href="#about" className="hover:text-white transition-colors duration-300">Nosotros</a>
            <a href="#faq" className="hover:text-white transition-colors duration-300">Preguntas</a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">Contacto</a>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="glass-btn-primary px-5 py-2.5 rounded-full text-[13px] font-semibold flex items-center gap-2">
              Iniciar Proyecto
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <button className="md:hidden text-white/60 hover:text-white p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden glass mx-5 mb-4 rounded-2xl p-6 flex flex-col gap-4">
            <a href="#work" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white text-sm py-1 border-b border-white/5">Servicios</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white text-sm py-1 border-b border-white/5">Proyectos</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white text-sm py-1 border-b border-white/5">Nosotros</a>
            <a href="#faq" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white text-sm py-1 border-b border-white/5">Preguntas Frecuentes</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="glass-btn-primary text-center py-3 rounded-xl text-sm font-semibold mt-2">Iniciar Proyecto</a>
          </div>
        )}
      </header>

      {/* ─────────── HERO (Elemento 2: Above-the-fold CTA y Elemento 5: Breadcrumbs) ─────────── */}
      <section className="relative z-10 min-h-screen flex items-center pt-24 sm:pt-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div className="space-y-7 text-center lg:text-left">

            {/* Elemento 5: Breadcrumbs Navigation */}
            <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-[12px] text-white/40 glass px-3.5 py-1.5 rounded-full mx-auto lg:mx-0">
              <span className="flex items-center gap-1 text-white/70">
                <Home className="w-3.5 h-3.5" />
                <span>Inicio</span>
              </span>
              <span>/</span>
              <span className="text-white/40">Desarrollo Web 3D</span>
            </nav>

            <div className="animate-fade-up flex justify-center lg:justify-start">
              <img 
                src={fluvoLogo} 
                alt="FLUVO Estudio de desarrollo web y diseño interactivo" 
                className="h-28 sm:h-36 w-auto object-contain brightness-0 invert drop-shadow-[0_10px_25px_rgba(255,255,255,0.15)]" 
              />
            </div>

            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-white/40 glass px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Flujo · Legitimidad · Unión · Visión · Objetivos
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-0.03em] animate-fade-up delay-100">
              Desarrollo de <span className="bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">Sitios Web 3D</span> con <span className="text-white/40">Vidrio Fluido</span> Ultra-Optimizados
            </h1>

            <p className="text-base sm:text-lg text-white/50 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light animate-fade-up delay-200">
              En <strong>FLUVO Studio</strong> creamos páginas web modernas de alto rendimiento, especializadas en efectos de vidrio fluido (*liquid glassmorphism*) y tecnología 3D, garantizando velocidad extrema y navegación fluida en dispositivos móviles, tablets y redes de baja cobertura.
            </p>

            {/* Elemento 2: Above-the-fold CTA primario y secundario */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <a href="#contact" className="glass-btn-primary px-8 py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2.5 shadow-lg shadow-white/10">
                Comenzar Proyecto
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#portfolio" className="glass-btn px-8 py-4 rounded-full text-sm font-medium text-white/70 flex items-center justify-center gap-2.5 hover:text-white">
                Ver Proyectos
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Elemento 8: Response time commitment / SLA */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs text-white/45">
              <Clock className="w-4 h-4 text-white/60" />
              <span><strong>Compromiso SLA:</strong> Respuesta a cotizaciones en menos de 2 horas laborables.</span>
            </div>

          </div>

          {/* Cristal 3D */}
          <div className="animate-fade-up delay-400">
            <div className="glass-elevated rounded-[2rem] p-2 relative">
              <HeroScene />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-[11px] text-white/40 flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-white/50 animate-pulse" />
                Interactúa con el cristal 3D
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────── MÉTRICAS ─────────── */}
      <section className="relative z-10 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="glass-elevated rounded-3xl p-8 sm:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '99', label: 'Lighthouse Móvil' },
              { value: '<1s', label: 'Carga Inicial 3G' },
              { value: '0$', label: 'Costo Servidor' },
              { value: '100%', label: 'Uptime Global' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">{item.value}</span>
                <p className="text-xs sm:text-sm text-white/35 font-medium uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── Elemento 6: CASE STUDIES / PORTFOLIO SECTION ─────────── */}
      <section id="portfolio" className="relative z-10 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          
          <div className="max-w-2xl mb-14">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/30 mb-3 block">Casos de Éxito</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Proyectos <span className="text-white/30">destacados.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((project, idx) => (
              <div key={idx} className="glass-card rounded-3xl p-8 flex flex-col justify-between group">
                <div>
                  <span className="text-xs font-semibold text-white/40 uppercase tracking-wider block mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{project.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed mb-6">{project.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-white/60 font-medium">{project.metric}</span>
                  <span className="glass px-2.5 py-1 rounded-md text-white/50">Caso de estudio</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────── SERVICIOS ─────────── */}
      <section id="work" className="relative z-10 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">

          <div className="max-w-2xl mb-16">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/30 mb-4 block">Servicios</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Lo que <span className="text-white/30">construimos.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="glass-card rounded-3xl p-8 sm:p-10 group">
              <div className="w-12 h-12 rounded-2xl glass-btn flex items-center justify-center mb-8 group-hover:bg-white/10 transition">
                <Monitor className="w-5 h-5 text-white/70" />
              </div>
              <h3 className="text-lg font-bold mb-3">Diseño Web 3D</h3>
              <p className="text-sm text-white/35 leading-relaxed">
                Interfaces con WebGL, vidrio fluido y componentes de React Three Fiber. Visual de alta gama sin penalizar velocidad.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 sm:p-10 group">
              <div className="w-12 h-12 rounded-2xl glass-btn flex items-center justify-center mb-8 group-hover:bg-white/10 transition">
                <Smartphone className="w-5 h-5 text-white/70" />
              </div>
              <h3 className="text-lg font-bold mb-3">Mobile First</h3>
              <p className="text-sm text-white/35 leading-relaxed">
                Optimización extrema para pantallas táctiles. Targets amplios, carga diferida y renderizado adaptativo por dispositivo.
              </p>
            </div>

            <div className="glass-card rounded-3xl p-8 sm:p-10 group">
              <div className="w-12 h-12 rounded-2xl glass-btn flex items-center justify-center mb-8 group-hover:bg-white/10 transition">
                <Wifi className="w-5 h-5 text-white/70" />
              </div>
              <h3 className="text-lg font-bold mb-3">Cobertura Limitada</h3>
              <p className="text-sm text-white/35 leading-relaxed">
                Arquitectura estática ultra-ligera. Funciona en 3G, reduce consumo de datos y optimiza el uso de batería.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────── Elemento 7: FAQS SECTION WITH ACCORDION ─────────── */}
      <section id="faq" className="relative z-10 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/30 mb-3 block">Dudas Comunes</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Preguntas <span className="text-white/30">frecuentes.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={index} className="glass-card rounded-2xl overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg hover:text-white transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-white/40 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-white/45 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ─────────── Elemento 4 y 8: FORMULARIO + THANK YOU PAGE / COMMITMENT ─────────── */}
      <section id="contact" className="relative z-10 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          
          {formSubmitted ? (
            /* Elemento 4: Thank You Screen tras envío */
            <div className="glass-elevated rounded-3xl p-10 sm:p-14 text-center space-y-6 animate-fade-up">
              <div className="w-16 h-16 rounded-full glass-btn mx-auto flex items-center justify-center text-white">
                <CheckCircle2 className="w-8 h-8 text-white/90" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold">¡Mensaje recibido con éxito!</h2>
              <p className="text-base text-white/45 max-w-md mx-auto leading-relaxed">
                Gracias por ponerte en contacto con <strong>FLUVO Studio</strong>. Nuestro compromiso de SLA garantiza que revisaremos tus requerimientos y te responderemos en menos de 2 horas.
              </p>
              <div className="pt-4">
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="glass-btn px-6 py-3 rounded-full text-xs font-semibold text-white/70 hover:text-white"
                >
                  Enviar otro mensaje
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-10 text-center">
              <div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
                  ¿Listo para crear algo <span className="text-white/30">extraordinario?</span>
                </h2>
                <p className="text-base text-white/35 max-w-lg mx-auto leading-relaxed mt-4">
                  Completa el formulario y te enviaremos una propuesta técnica sin costo.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="glass-elevated rounded-3xl p-8 sm:p-10 text-left space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 font-medium">Nombre o Empresa</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez / Empresa Tech"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full glass px-4 py-3.5 rounded-xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 font-medium">Correo Electrónico</label>
                  <input
                    type="email"
                    required
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full glass px-4 py-3.5 rounded-xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-white/50 mb-2 font-medium">Detalles del Proyecto</label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos brevemente qué tipo de web o experiencia 3D necesitas..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full glass px-4 py-3.5 rounded-xl text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/40 transition resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-white/40">
                    <Clock className="w-3.5 h-3.5" />
                    <span>SLA: Respuesta en &lt; 2 horas</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto glass-btn-primary px-8 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <span>Enviar Solicitud</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>
      </section>

      {/* ─────────── FOOTER (Elemento 3: Internal links structure) ─────────── */}
      <footer className="relative z-10 border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src={fluvoLogo} 
                alt="Logotipo FLUVO en pie de página" 
                className="h-10 w-auto object-contain brightness-0 invert opacity-80" 
              />
              <div>
                <span className="text-base font-semibold text-white/80 block">FLUVO Studio</span>
                <span className="text-[11px] text-white/30">Flujo · Legitimidad · Unión · Visión · Objetivos</span>
              </div>
            </div>

            {/* Enlaces internos de navegación */}
            <div className="flex flex-wrap justify-center gap-6 text-xs text-white/40">
              <a href="#work" className="hover:text-white transition">Servicios Web 3D</a>
              <a href="#portfolio" className="hover:text-white transition">Casos de Éxito</a>
              <a href="#about" className="hover:text-white transition">Rendimiento Móvil</a>
              <a href="#faq" className="hover:text-white transition">Preguntas Frecuentes</a>
              <a href="#contact" className="hover:text-white transition">Cotizar Proyecto</a>
              <a href="./sitemap.xml" className="hover:text-white transition" target="_blank" rel="noopener">Mapa del Sitio (XML)</a>
              <a href="./robots.txt" className="hover:text-white transition" target="_blank" rel="noopener">Robots.txt</a>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/25">
            <p>© {new Date().getFullYear()} FLUVO Studio. Todos los derechos reservados.</p>
            <p>Alojado en GitHub Pages · React Three Fiber · Vite · Tailwind</p>
          </div>
        </div>
      </footer>

      {/* ─────────── Elemento 9: STICKY MOBILE CTA BUTTON ─────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-black/80 backdrop-blur-xl border-t border-white/10 md:hidden flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-medium text-white/70">SLA 2h</span>
        </div>
        <a 
          href="#contact" 
          className="glass-btn-primary px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg"
        >
          <span>Cotizar Proyecto</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  )
}
