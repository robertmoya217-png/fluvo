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
  CheckCircle2
} from 'lucide-react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative">

      {/* Fondo interactivo 3D que reacciona al cursor */}
      <InteractiveBackground />

      {/* ─────────── NAVEGACIÓN ─────────── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">

          <a href="#" className="flex items-center gap-2 group">
            <img src={fluvoLogo} alt="FLUVO" className="h-9 sm:h-10 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
          </a>

          <nav className="hidden md:flex items-center gap-10 text-[13px] font-medium text-white/50">
            <a href="#work" className="hover:text-white transition-colors duration-300">Servicios</a>
            <a href="#about" className="hover:text-white transition-colors duration-300">Nosotros</a>
            <a href="#process" className="hover:text-white transition-colors duration-300">Proceso</a>
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
          <div className="md:hidden glass mx-5 mb-4 rounded-2xl p-6 flex flex-col gap-5">
            <a href="#work" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white text-sm py-1 border-b border-white/5">Servicios</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white text-sm py-1 border-b border-white/5">Nosotros</a>
            <a href="#process" onClick={() => setMenuOpen(false)} className="text-white/70 hover:text-white text-sm py-1 border-b border-white/5">Proceso</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="glass-btn-primary text-center py-3 rounded-xl text-sm font-semibold mt-2">Iniciar Proyecto</a>
          </div>
        )}
      </header>

      {/* ─────────── HERO ─────────── */}
      <section className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          <div className="space-y-8 text-center lg:text-left">

            <div className="animate-fade-up flex justify-center lg:justify-start">
              <img src={fluvoLogo} alt="FLUVO" className="h-14 sm:h-18 w-auto object-contain brightness-0 invert" />
            </div>

            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium text-white/40 glass px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Flujo · Legitimidad · Unión · Visión · Objetivos
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] animate-fade-up delay-100">
              Diseñamos
              <br />
              <span className="text-white/30">experiencias</span>
              <br />
              digitales.
            </h1>

            <p className="text-base sm:text-lg text-white/40 max-w-md mx-auto lg:mx-0 leading-relaxed font-light animate-fade-up delay-200">
              Sitios web de alto rendimiento, optimizados para móviles y conexiones limitadas. Código limpio. Cero mantenimiento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <a href="#contact" className="glass-btn-primary px-8 py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2.5">
                Comenzar
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#work" className="glass-btn px-8 py-4 rounded-full text-sm font-medium text-white/70 flex items-center justify-center gap-2.5">
                Ver Trabajos
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Cristal 3D */}
          <div className="animate-fade-up delay-400">
            <div className="glass-elevated rounded-[2rem] p-2 relative">
              <HeroScene />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-[11px] text-white/40 flex items-center gap-2 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-white/50 animate-pulse" />
                Interactúa con el objeto
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────── MÉTRICAS ─────────── */}
      <section className="relative z-10 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="glass-elevated rounded-3xl p-8 sm:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '99', label: 'Lighthouse' },
              { value: '<1s', label: 'Carga Inicial' },
              { value: '0', label: 'Servidores' },
              { value: '∞', label: 'Uptime' },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">{item.value}</span>
                <p className="text-xs sm:text-sm text-white/35 font-medium uppercase tracking-wider">{item.label}</p>
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
                Interfaces con WebGL, vidrio fluido y componentes de React Three Fiber. Visual de alta gama sin sacrificar velocidad.
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

      {/* ─────────── PROCESO ─────────── */}
      <section id="process" className="relative z-10 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">

          <div className="max-w-2xl mb-16">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/30 mb-4 block">Proceso</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Simple y <span className="text-white/30">directo.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consulta', desc: 'Entendemos tu visión, audiencia y objetivos de negocio.' },
              { step: '02', title: 'Diseño', desc: 'Prototipos interactivos con vidrio fluido y elementos 3D.' },
              { step: '03', title: 'Desarrollo', desc: 'React + Three.js. Código modular, escalable y ligero.' },
              { step: '04', title: 'Deploy', desc: 'Publicación en GitHub Pages. Cero servidores, cero costos.' },
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-3xl p-8 group relative overflow-hidden">
                <span className="text-5xl font-black text-white/[0.03] absolute top-4 right-6 group-hover:text-white/[0.08] transition-colors duration-500">{item.step}</span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/25 block mb-4">{item.step}</span>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-white/35 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── ABOUT / TECH ─────────── */}
      <section id="about" className="relative z-10 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-8">
              <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/30 block">Stack Tecnológico</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-[1.1]">
                Construido con las mejores <span className="text-white/30">herramientas.</span>
              </h2>

              <div className="space-y-5">
                {[
                  { icon: <Layers className="w-4 h-4" />, title: 'React + Three.js', desc: 'Componentes declarativos con escenas 3D de alto rendimiento.' },
                  { icon: <Zap className="w-4 h-4" />, title: 'Vite Build', desc: 'Compilación instantánea. Bundles mínimos para carga ultra-rápida.' },
                  { icon: <Shield className="w-4 h-4" />, title: 'Estático & Seguro', desc: 'Sin backend, sin bases de datos. Superficie de ataque inexistente.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl glass-btn flex items-center justify-center shrink-0 mt-0.5 text-white/60">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-white/35">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel de rendimiento */}
            <div className="glass-elevated rounded-3xl p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <h3 className="text-base font-bold">Rendimiento Móvil</h3>
                <span className="text-[11px] glass px-3 py-1.5 rounded-full text-white/40 font-medium">Simulado en 3G</span>
              </div>

              {[
                { label: 'Performance', value: 99, suffix: '' },
                { label: 'Accesibilidad', value: 100, suffix: '' },
                { label: 'SEO', value: 100, suffix: '' },
                { label: 'Prácticas Web', value: 100, suffix: '' },
              ].map((metric, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/50">{metric.label}</span>
                    <span className="font-bold">{metric.value}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-white/80 transition-all duration-1000"
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}

              <div className="glass rounded-xl p-4 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-white/40">
                  <CheckCircle2 className="w-4 h-4 text-white/60" />
                  Todas las pruebas pasadas
                </div>
                <span className="font-semibold text-white/80">✓</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section id="contact" className="relative z-10 py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]">
            ¿Listo para crear algo <span className="text-white/30">extraordinario?</span>
          </h2>
          <p className="text-base text-white/35 max-w-lg mx-auto leading-relaxed">
            Escríbenos y te responderemos en menos de 24 horas. Sin compromisos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="mailto:hello@studio.com" className="glass-btn-primary px-10 py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2.5">
              Enviar Mensaje
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="relative z-10 border-t border-white/5 py-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={fluvoLogo} alt="FLUVO" className="h-6 w-auto object-contain brightness-0 invert opacity-70" />
            <span className="text-sm font-semibold text-white/60">FLUVO</span>
          </div>
          <p className="text-[11px] text-white/20">© {new Date().getFullYear()} — React · Three.js · Tailwind</p>
        </div>
      </footer>

    </div>
  )
}
