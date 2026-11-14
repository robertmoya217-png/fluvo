/* ============================================================
   FLUVO.ORG — Original 3D Liquid-Glass WebGL Studio Engine
   Single shared WebGL1 raymarching renderer blitted onto visible
   2D canvases via IntersectionObserver (0 context eviction, 60fps).
   Includes automatic 2D studio optical fallback if WebGL is unavailable.
   ============================================================ */
(function () {
  "use strict";

  var VERT_SRC = [
    "attribute vec2 a_pos;",
    "varying vec2 v_uv;",
    "void main() {",
    "  v_uv = a_pos * 0.5 + 0.5;",
    "  gl_Position = vec4(a_pos, 0.0, 1.0);",
    "}"
  ].join("\n");

  var FRAG_COMMON_HEAD = [
    "#ifdef GL_FRAGMENT_PRECISION_HIGH",
    "precision highp float;",
    "#else",
    "precision mediump float;",
    "#endif",
    "varying vec2 v_uv;",
    "uniform vec2 u_res;",
    "uniform float u_time;",
    "uniform vec2 u_mouse;",
    "uniform float u_mode;",
    "uniform float u_seed;",
    "uniform float u_preset;",
    "",
    "mat2 rot(float a) {",
    "  float c = cos(a); float s = sin(a);",
    "  return mat2(c, -s, s, c);",
    "}",
    "",
    "float smin(float a, float b, float k) {",
    "  float h = clamp(0.5 + 0.5 * (b - a) / max(k, 0.0001), 0.0, 1.0);",
    "  return mix(b, a, h) - k * h * (1.0 - h);",
    "}",
    "",
    "float sdTorus(vec3 p, vec2 t) {",
    "  vec2 q = vec2(length(p.xz) - t.x, p.y);",
    "  return length(q) - t.y;",
    "}",
    "",
    "float sdRoundBox(vec3 p, vec3 b, float r) {",
    "  vec3 q = abs(p) - b;",
    "  return length(max(q, 0.0)) + min(max(q.x, max(q.y, q.z)), 0.0) - r;",
    "}",
    "",
    "float sdOctahedron(vec3 p, float s) {",
    "  p = abs(p);",
    "  return (p.x + p.y + p.z - s) * 0.57735027;",
    "}",
    "",
    "float mapScene(vec3 p) {",
    "  float t = u_time;",
    "  vec2 m = u_mouse * 0.55;",
    "",
    "  if (u_preset < 0.5) {",
    "    // 0: hero-monolith — precision twisted obsidian prism + hairline optical orbital ring",
    "    vec3 basePos = p - vec3(0.46, 0.02, 0.0);",
    "    vec3 q = basePos;",
    "    q.xz *= rot(t * 0.2 + m.x * 0.7 + 0.52);",
    "    q.xy *= rot(-0.24 + sin(t * 0.16) * 0.08 + m.y * 0.45);",
    "    q.xz *= rot(q.y * 0.62 + sin(t * 0.42) * 0.14);",
    "    float flute = sin(q.y * 9.5 - t * 0.4) * 0.012;",
    "    float blade = sdRoundBox(q, vec3(0.46, 1.42, 0.11) + vec3(flute, 0.0, flute), 0.032);",
    "    vec3 r1 = basePos;",
    "    r1.xy *= rot(0.58 + sin(t * 0.22) * 0.12);",
    "    r1.yz *= rot(0.84 + t * 0.15);",
    "    float orbital = sdTorus(r1, vec2(1.16, 0.034));",
    "    vec3 r2 = basePos - vec3(cos(t * 0.35) * 0.72, sin(t * 0.4) * 0.48, -0.35);",
    "    r2.xz *= rot(-0.55 - t * 0.25);",
    "    float prismlet = sdRoundBox(r2, vec3(0.18, 0.38, 0.08), 0.022);",
    "    return min(smin(blade, orbital, 0.08), prismlet);",
    "  }",
    "",
    "  if (u_preset < 1.5) {",
    "    // 1: refraction-waves — laminar liquid obsidian waves",
    "    vec3 q = p;",
    "    q.yz *= rot(-0.42 + m.y * 0.25);",
    "    q.xz *= rot(m.x * 0.35);",
    "    float w1 = sin(q.x * 1.6 + t * 0.55) * cos(q.z * 1.2 - t * 0.35) * 0.32;",
    "    float w2 = sin((q.x + q.z) * 2.8 - t * 0.85) * 0.11;",
    "    float w3 = sin(q.x * 5.2 + q.z * 3.1 + t * 0.45) * 0.03;",
    "    return q.y + 0.35 - (w1 + w2 + w3);",
    "  }",
    "",
    "  if (u_preset < 2.5) {",
    "    // 2: webgl-lattice — faceted refractive crystal lens",
    "    vec3 q = p;",
    "    q.xz *= rot(t * 0.28 + m.x);",
    "    q.xy *= rot(t * 0.16 + m.y * 0.6);",
    "    float oct = sdOctahedron(q, 1.38) - 0.12;",
    "    float sph = length(q) - 0.96;",
    "    float core = mix(oct, sph, 0.5 + 0.35 * sin(t * 0.55));",
    "    float cut = abs(sin(q.y * 6.0 - t * 0.6)) * 0.025;",
    "    return core + cut;",
    "  }",
    "",
    "  if (u_preset < 3.5) {",
    "    // 3: subsecond-pulse — fluted architectural glass reeds & prism slabs",
    "    vec3 q = p;",
    "    q.xz *= rot(0.35 + m.x * 0.4);",
    "    float flute = sin(q.x * 7.5 + t * 0.9) * 0.045;",
    "    float box1 = sdRoundBox(q - vec3(0.0, sin(t * 0.5) * 0.12, 0.0), vec3(1.55, 1.15, 0.22), 0.12) + flute;",
    "    float box2 = sdRoundBox(q - vec3(0.45, -0.15, 0.48), vec3(0.85, 0.9, 0.16), 0.1) + flute * 0.6;",
    "    return smin(box1, box2, 0.25);",
    "  }",
    "",
    "  if (u_preset < 4.5) {",
    "    // 4: tactile-spheres — coalescing liquid-glass metaballs",
    "    vec3 q = p;",
    "    q.xz *= rot(m.x * 0.5);",
    "    vec3 c1 = vec3(sin(t * 0.52) * 0.85, cos(t * 0.41) * 0.42, sin(t * 0.33) * 0.4);",
    "    vec3 c2 = vec3(-cos(t * 0.48) * 0.78, sin(t * 0.62) * 0.48, cos(t * 0.44) * 0.45);",
    "    vec3 c3 = vec3(sin(t * 0.37 + 2.0) * 0.55, -0.45 + cos(t * 0.5) * 0.25, -0.35);",
    "    float d = length(q - c1) - 0.62;",
    "    d = smin(d, length(q - c2) - 0.54, 0.55);",
    "    d = smin(d, length(q - c3) - 0.46, 0.55);",
    "    return smin(d, length(q - vec3(m.x * 0.8, m.y * 0.6, 0.2)) - 0.36, 0.48);",
    "  }",
    "",
    "  if (u_preset < 5.5) {",
    "    // 5: edge-horizon — sweeping obsidian glass blade",
    "    vec3 q = p;",
    "    q.xy *= rot(-0.22 + sin(t * 0.2) * 0.06);",
    "    q.xz *= rot(t * 0.18 + m.x * 0.3);",
    "    float arc = length(vec2(length(q.xz) - 1.55, q.y * 1.4 + sin(q.x * 2.2 + t * 0.5) * 0.18)) - 0.28;",
    "    float sheet = abs(q.y + 0.55 + sin(q.x * 1.5 - t * 0.4) * 0.12) - 0.08;",
    "    return smin(arc, sheet, 0.32);",
    "  }",
    "",
    "  if (u_preset < 6.5) {",
    "    // 6: case-prism — tailored faceted glass prism per portfolio case",
    "    vec3 q = p;",
    "    float ang = u_seed * 1.15;",
    "    q.xz *= rot(t * 0.24 + ang + m.x * 0.4);",
    "    q.xy *= rot(0.45 + sin(t * 0.22 + ang) * 0.22 + m.y * 0.4);",
    "    float slab = sdRoundBox(q, vec3(0.74, 1.02, 0.36), 0.14);",
    "    float carve = sin(q.y * (3.0 + mod(u_seed, 3.0)) + t * 0.6 + ang) * 0.04;",
    "    float sat = length(q - vec3(cos(t * 0.5 + ang) * 0.9, sin(t * 0.7 + ang) * 0.6, 0.3)) - 0.28;",
    "    return smin(slab + carve, sat, 0.34);",
    "  }",
    "",
    "  // 7: protocol-core — concentric obsidian & bronze gyroscope rings",
    "  vec3 q = p;",
    "  vec3 q1 = q; q1.xz *= rot(t * 0.28 + m.x * 0.4); q1.xy *= rot(0.45);",
    "  vec3 q2 = q; q2.yz *= rot(-t * 0.34 + m.y * 0.4); q2.xz *= rot(0.75);",
    "  float r1 = sdTorus(q1, vec2(1.12, 0.16));",
    "  float r2 = sdTorus(q2, vec2(0.82, 0.13));",
    "  float core = length(q) - 0.36;",
    "  return smin(smin(r1, r2, 0.22), core, 0.28);",
    "}",
    "",
    "vec3 calcNormal(vec3 p) {",
    "  vec2 e = vec2(0.0025, 0.0);",
    "  return normalize(vec3(",
    "    mapScene(p + e.xyy) - mapScene(p - e.xyy),",
    "    mapScene(p + e.yxy) - mapScene(p - e.yxy),",
    "    mapScene(p + e.yyx) - mapScene(p - e.yyx)",
    "  ));",
    "}",
    "",
    "vec3 studioEnv(vec3 dir, float mode, float time) {",
    "  // Deep obsidian background",
    "  vec3 base = vec3(0.014, 0.016, 0.021);",
    "  // Razor-sharp studio architectural softbox strips",
    "  float strip1 = smoothstep(0.84, 0.995, sin(dir.x * 2.6 + 0.7) * cos(dir.y * 0.9));",
    "  float strip2 = smoothstep(0.88, 0.998, cos(dir.x * 4.2 - 1.1 + time * 0.12));",
    "  float horizon = exp(-abs(dir.y) * 9.5);",
    "",
    "  vec3 coolWhite = vec3(0.957, 0.965, 0.973); // #f4f6f8",
    "  vec3 bronze = vec3(0.757, 0.604, 0.357);    // #c19a5b",
    "  vec3 silver = vec3(0.604, 0.643, 0.678);    // #9aa4ad",
    "",
    "  if (mode > 1.5) {",
    "    // Cuarzo Líquido: cool icy platinum softboxes + hairline champagne horizon",
    "    return base * 1.25 + strip1 * coolWhite * 0.76 + strip2 * silver * 0.58 + horizon * mix(silver, bronze, 0.25) * 0.24;",
    "  } else if (mode > 0.5) {",
    "    // Bronce Óptico: deep smoked glass + high-contrast white & warm bronze rim strips",
    "    return base + strip1 * coolWhite * 0.52 + strip2 * bronze * 0.94 + horizon * bronze * 0.24;",
    "  }",
    "  // Obsidiana (default): crisp cool silver softboxes with hairline bronze accent",
    "  return base + strip1 * coolWhite * 0.68 + strip2 * bronze * 0.48 + horizon * silver * 0.16;",
    "}",
    "",
    "void main() {",
    "  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);",
    "  vec3 ro = vec3(0.0, 0.0, 3.6);",
    "  if (u_preset > 0.5 && u_preset < 1.5) ro = vec3(0.0, 0.45, 3.2);",
    "  vec3 rd = normalize(vec3(uv, -1.55));",
    "",
    "  float dTotal = 0.0;",
    "  float hit = 0.0;",
    "  for (int i = 0; i < 28; i++) {",
    "    vec3 p = ro + rd * dTotal;",
    "    float d = mapScene(p);",
    "    if (d < 0.004) { hit = 1.0; break; }",
    "    if (dTotal > 7.5) break;",
    "    dTotal += d * 0.92;",
    "  }",
    "",
    "  vec3 bg = vec3(0.031, 0.035, 0.043); // #08090b",
    "  // Subtle atmospheric studio glow behind subject",
    "  float rad = exp(-length(uv - vec2(u_mouse.x * 0.1, u_mouse.y * 0.1)) * 1.45);",
    "  vec3 auraColor = (u_mode > 0.5 && u_mode < 1.5) ? vec3(0.14, 0.10, 0.06) : vec3(0.08, 0.09, 0.11);",
    "  vec3 col = bg + auraColor * rad * 0.75;",
    "",
    "  if (hit > 0.5) {",
    "    vec3 p = ro + rd * dTotal;",
    "    vec3 n = calcNormal(p);",
    "    vec3 v = -rd;",
    "    float fresnel = pow(clamp(1.0 - dot(n, v), 0.0, 1.0), 3.2);",
    "",
    "    // Chromatic optical refraction (single sample + spectral tint for fast GPU)",
    "    vec3 refDir = reflect(rd, n);",
    "    vec3 refrDir = refract(rd, n, 0.78);",
    "",
    "    vec3 envRefl = studioEnv(refDir, u_mode, u_time);",
    "    vec3 envRefr = studioEnv(refrDir, u_mode, u_time) * vec3(1.04, 1.0, 0.96);",
    "",
    "    vec3 bronzeTint = vec3(0.757, 0.604, 0.357);",
    "    vec3 sharpSpec = pow(max(dot(refDir, normalize(vec3(0.48, 0.78, 0.46))), 0.0), 58.0) * vec3(1.0, 0.97, 0.92);",
    "    vec3 rimBronze = pow(fresnel, 2.2) * bronzeTint * (u_mode > 1.5 ? 0.45 : (u_mode > 0.5 ? 0.95 : 0.58));",
    "",
    "    float glassWeight = u_mode > 1.5 ? 0.48 : 0.28;",
    "    vec3 surface = mix(envRefr * 0.24, envRefl * 0.82, clamp(0.18 + fresnel * 0.82, 0.0, 1.0));",
    "    surface = mix(surface, envRefr * 0.42, glassWeight * (1.0 - fresnel));",
    "    surface += sharpSpec * 0.92 + rimBronze;",
    "",
    "    // Depth fog fade into obsidian background",
    "    float fog = smoothstep(5.8, 1.6, dTotal);",
    "    col = mix(bg, surface, fog);",
    "  }",
    "",
    "  // Subtle vignette & film grain finish",
    "  float vig = smoothstep(1.35, 0.3, length(uv));",
    "  col *= mix(0.65, 1.05, vig);",
    "  col = pow(max(col, 0.0), vec3(0.92));",
    "  gl_FragColor = vec4(col, 1.0);",
    "}"
  ].join("\n");

  var PRESET_MAP = {
    "hero-monolith": 0,
    "refraction-waves": 1,
    "webgl-lattice": 2,
    "subsecond-pulse": 3,
    "tactile-spheres": 4,
    "edge-horizon": 5,
    "case-prism": 6,
    "protocol-core": 7
  };

  var GlassStudioEngine = function () {
    this.stages = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetMouseX = 0;
    this.targetMouseY = 0;
    this.heroMode = 0; // 0: Obsidiana, 1: Bronce Óptico, 2: Cuarzo Líquido
    this.reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.glReady = false;
    this.glCanvas = null;
    this.gl = null;
    this.prog = null;
    this.loc = {};
    this.startTime = performance.now();
    this.rafId = null;
    this.activeUntil = 0;
    this.lastRenderAt = 0;
    this.minFrameMs = 32;
    this.booted = false;
    this.resizeTimer = null;
    this.ro = null;

    this.initGL();
    this.scanStages();
    this.bindInput();
    this.start();
  };

  GlassStudioEngine.prototype.initGL = function () {
    try {
      var off = document.createElement("canvas");
      off.width = 480;
      off.height = 480;
      var opts = { alpha: false, antialias: false, depth: false, stencil: false, powerPreference: "high-performance" };
      var gl = off.getContext("webgl", opts) || off.getContext("experimental-webgl", opts);
      if (!gl) return;

      // Avoid freezing CPU on software rasterizers (SwiftShader / llvmpipe / headless mobile);
      // use fast architectural 2D optical glass renderer instead.
      var dbg = gl.getExtension("WEBGL_debug_renderer_info");
      if (dbg) {
        var renderer = String(gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) || "");
        if (/(swiftshader|llvmpipe|softpipe|software|basic render)/i.test(renderer)) {
          return;
        }
      }

      var vs = this.compileShader(gl, gl.VERTEX_SHADER, VERT_SRC);
      var fs = this.compileShader(gl, gl.FRAGMENT_SHADER, FRAG_COMMON_HEAD);
      if (!vs || !fs) return;

      var prog = gl.createProgram();
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        return;
      }

      var buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

      gl.useProgram(prog);
      var aPos = gl.getAttribLocation(prog, "a_pos");
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

      this.glCanvas = off;
      this.gl = gl;
      this.prog = prog;
      this.loc = {
        res: gl.getUniformLocation(prog, "u_res"),
        time: gl.getUniformLocation(prog, "u_time"),
        mouse: gl.getUniformLocation(prog, "u_mouse"),
        mode: gl.getUniformLocation(prog, "u_mode"),
        seed: gl.getUniformLocation(prog, "u_seed"),
        preset: gl.getUniformLocation(prog, "u_preset")
      };
      this.glReady = true;
    } catch (e) {
      this.glReady = false;
    }
  };

  GlassStudioEngine.prototype.compileShader = function (gl, type, src) {
    var sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      gl.deleteShader(sh);
      return null;
    }
    return sh;
  };

  GlassStudioEngine.prototype.scanStages = function () {
    var self = this;
    var canvases = document.querySelectorAll("canvas[data-shader]");
    var io = new IntersectionObserver(function (entries) {
      var newlyVisible = false;
      entries.forEach(function (en) {
        var st = en.target._glassStage;
        if (!st) return;
        var wasVisible = st.visible;
        st.visible = en.isIntersecting;
        if (!wasVisible && en.isIntersecting) newlyVisible = true;
      });
      if (newlyVisible && self.booted) {
        if (self.reduced) self.renderVisibleOnce();
        else self.wake(600);
      }
    }, { rootMargin: "120px 0px" });

    canvases.forEach(function (canvas) {
      var presetName = canvas.getAttribute("data-shader") || "hero-monolith";
      var seed = parseFloat(canvas.getAttribute("data-seed") || "0");
      var modeAttr = canvas.getAttribute("data-mode");
      var isHero = canvas.closest(".hero") !== null;
      var stage = {
        canvas: canvas,
        ctx: canvas.getContext("2d", { alpha: false }),
        preset: PRESET_MAP[presetName] !== undefined ? PRESET_MAP[presetName] : 0,
        seed: isNaN(seed) ? 0 : seed,
        mode: modeAttr !== null ? parseFloat(modeAttr) : (isHero ? null : 0),
        isHero: isHero,
        visible: isHero,
        w: 0,
        h: 0
      };
      canvas._glassStage = stage;
      self.stages.push(stage);
      io.observe(canvas);
    });

    if (window.ResizeObserver) {
      this.ro = new ResizeObserver(function (entries) {
        var dirty = false;
        for (var j = 0; j < entries.length; j++) {
          var en = entries[j];
          var st = en.target._glassStage;
          if (!st) continue;
          var cr = en.contentRect;
          var w = cr ? cr.width : en.target.clientWidth;
          var h = cr ? cr.height : en.target.clientHeight;
          if (w !== st.w || h !== st.h) {
            st.w = w;
            st.h = h;
            if (st.visible) dirty = true;
          }
        }
        if (dirty && self.booted) {
          if (self.reduced) self.renderVisibleOnce();
          else self.wake(220);
        }
      });
      canvases.forEach(function (canvas) { self.ro.observe(canvas); });
    } else {
      this.measureStages();
    }
  };

  GlassStudioEngine.prototype.measureStages = function () {
    for (var i = 0; i < this.stages.length; i++) {
      var st = this.stages[i];
      var rect = st.canvas.getBoundingClientRect();
      st.w = rect.width;
      st.h = rect.height;
    }
  };

  GlassStudioEngine.prototype.bindInput = function () {
    var self = this;
    window.addEventListener("pointermove", function (e) {
      self.targetMouseX = (e.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2.0;
      self.targetMouseY = -(e.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2.0;
      self.wake(1200);
    }, { passive: true });
    window.addEventListener("pointerdown", function () { self.wake(1200); }, { passive: true });
    window.addEventListener("wheel", function () { self.wake(900); }, { passive: true });
    window.addEventListener("touchstart", function () { self.wake(900); }, { passive: true });
    if (!this.ro) {
      window.addEventListener("resize", function () {
        if (self.resizeTimer) clearTimeout(self.resizeTimer);
        self.resizeTimer = setTimeout(function () {
          self.measureStages();
          self.wake(300);
        }, 120);
      }, { passive: true });
    }
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) self.stopLoop();
      else self.wake(400);
    });
  };

  GlassStudioEngine.prototype.setHeroMode = function (modeIdx) {
    this.heroMode = modeIdx;
    if (this.reduced) this.renderVisibleOnce();
    else this.wake(1400);
  };

  GlassStudioEngine.prototype.drawFallback2D = function (stage, t) {
    var c = stage.canvas;
    var ctx = stage.ctx;
    if (!ctx) return;
    var w = c.width, h = c.height;
    ctx.fillStyle = "#08090b";
    ctx.fillRect(0, 0, w, h);

    var mode = stage.mode !== null ? stage.mode : this.heroMode;
    var cx = w * 0.52 + this.mouseX * w * 0.05;
    var cy = h * 0.48 - this.mouseY * h * 0.05;
    var r = Math.min(w, h) * 0.44;
    var bronze = "rgba(193,154,91,";
    var cool = "rgba(244,246,248,";
    var dim = "rgba(154,164,173,";

    var aura = ctx.createRadialGradient(cx - r * 0.2, cy - r * 0.25, r * 0.05, cx, cy, r * 1.25);
    if (mode === 1) {
      aura.addColorStop(0, bronze + "0.34)");
      aura.addColorStop(0.55, bronze + "0.09)");
    } else if (mode === 2) {
      aura.addColorStop(0, cool + "0.28)");
      aura.addColorStop(0.55, dim + "0.10)");
    } else {
      aura.addColorStop(0, cool + "0.18)");
      aura.addColorStop(0.5, bronze + "0.07)");
    }
    aura.addColorStop(1, "rgba(8,9,11,0)");
    ctx.fillStyle = aura;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 1.25, 0, Math.PI * 2);
    ctx.fill();

    // Sculptural beveled dark optical prism core
    ctx.save();
    ctx.translate(cx, cy);
    var tilt = -0.32 + Math.sin(t * 0.25 + stage.seed) * 0.06 + this.mouseX * 0.08;
    ctx.rotate(tilt);

    var mw = r * (stage.preset === 0 || stage.preset === 6 ? 0.62 : 0.78);
    var mh = r * (stage.preset === 0 || stage.preset === 6 ? 1.15 : 0.86);
    var rad = Math.min(mw, mh) * 0.18;

    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(-mw * 0.5, -mh * 0.5, mw, mh, rad);
    } else {
      ctx.rect(-mw * 0.5, -mh * 0.5, mw, mh);
    }

    var body = ctx.createLinearGradient(-mw * 0.6, -mh * 0.6, mw * 0.6, mh * 0.6);
    body.addColorStop(0, mode === 2 ? "rgba(38,44,54,0.86)" : "rgba(22,25,31,0.92)");
    body.addColorStop(0.45, mode === 1 ? "rgba(42,33,22,0.88)" : "rgba(12,14,18,0.95)");
    body.addColorStop(1, "rgba(8,9,11,0.98)");
    ctx.fillStyle = body;
    ctx.fill();

    var rim = ctx.createLinearGradient(-mw * 0.5, -mh * 0.5, mw * 0.5, mh * 0.5);
    rim.addColorStop(0, mode === 1 ? bronze + "0.78)" : cool + "0.62)");
    rim.addColorStop(0.5, dim + "0.18)");
    rim.addColorStop(1, bronze + "0.52)");
    ctx.strokeStyle = rim;
    ctx.lineWidth = Math.max(1.2, w * 0.0022);
    ctx.stroke();

    // Internal specular studio strip reflection
    ctx.clip();
    var strip = ctx.createLinearGradient(-mw * 0.35, -mh * 0.5, mw * 0.15, mh * 0.4);
    strip.addColorStop(0, cool + (mode === 2 ? "0.24)" : "0.15)"));
    strip.addColorStop(0.5, "rgba(255,255,255,0)");
    strip.addColorStop(1, bronze + (mode === 1 ? "0.22)" : "0.10)"));
    ctx.fillStyle = strip;
    ctx.fillRect(-mw * 0.5, -mh * 0.5, mw * 0.55, mh);
    ctx.restore();

    // Secondary orbital Fresnel caustic arc
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(t * 0.12 + stage.seed * 0.8);
    ctx.strokeStyle = mode === 1 ? bronze + "0.48)" : cool + "0.30)";
    ctx.lineWidth = Math.max(1, w * 0.0018);
    ctx.beginPath();
    ctx.ellipse(0, 0, r * 0.72, r * 0.30, 0.35, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  };

  GlassStudioEngine.prototype.renderStage = function (stage, t) {
    var canvas = stage.canvas;
    var rw = stage.w;
    var rh = stage.h;
    if (rw < 16 || rh < 16) return;

    // Smart adaptive resolution for crisp raymarching without burning mobile GPU
    var dpr = Math.min(window.devicePixelRatio || 1, 1.0);
    var scale = stage.isHero ? (rw <= 768 ? 0.65 * dpr : 0.85 * dpr) : 0.6;
    var targetW = Math.max(200, Math.min(stage.isHero ? 880 : 540, Math.round(rw * scale)));
    var targetH = Math.max(150, Math.min(stage.isHero ? 600 : 540, Math.round(rh * scale)));

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    if (!this.glReady || !this.gl || !this.prog) {
      this.drawFallback2D(stage, t);
      return;
    }

    var tDrawStart = performance.now();
    var gl = this.gl;
    var off = this.glCanvas;
    if (off.width < targetW || off.height < targetH) {
      off.width = Math.max(off.width, targetW);
      off.height = Math.max(off.height, targetH);
    }

    gl.viewport(0, 0, targetW, targetH);
    gl.useProgram(this.prog);
    gl.uniform2f(this.loc.res, targetW, targetH);
    gl.uniform1f(this.loc.time, t);
    gl.uniform2f(this.loc.mouse, this.mouseX, this.mouseY);
    gl.uniform1f(this.loc.mode, stage.mode !== null ? stage.mode : this.heroMode);
    gl.uniform1f(this.loc.seed, stage.seed);
    gl.uniform1f(this.loc.preset, stage.preset);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    if (stage.ctx) {
      stage.ctx.drawImage(off, 0, off.height - targetH, targetW, targetH, 0, 0, targetW, targetH);
    }

    // Automatic runtime safety downgrade if single WebGL frame blocks main thread >150ms
    if (performance.now() - tDrawStart > 150) {
      this.glReady = false;
      this.drawFallback2D(stage, t);
    }
  };

  GlassStudioEngine.prototype.stopLoop = function () {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  };

  GlassStudioEngine.prototype.renderVisibleOnce = function () {
    for (var i = 0; i < this.stages.length; i++) {
      var st = this.stages[i];
      if (!st.visible) continue;
      this.renderStage(st, 1.2);
    }
  };

  GlassStudioEngine.prototype.wake = function (durationMs) {
    if (this.reduced || document.hidden) return;
    var until = performance.now() + (durationMs || 1000);
    if (until > this.activeUntil) this.activeUntil = until;
    if (this.rafId === null) {
      var self = this;
      this.rafId = requestAnimationFrame(function (ts) { self.tick(ts); });
    }
  };

  GlassStudioEngine.prototype.tick = function (now) {
    var self = this;
    this.rafId = null;
    if (document.hidden) return;

    var ts = typeof now === "number" ? now : performance.now();
    if (!this.reduced && this.lastRenderAt && ts - this.lastRenderAt < this.minFrameMs) {
      if (ts < this.activeUntil) {
        this.rafId = requestAnimationFrame(function (n) { self.tick(n); });
      }
      return;
    }

    var t0 = performance.now();
    this.lastRenderAt = ts;
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.14;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.14;

    var t = this.reduced ? 1.2 : 1.2 + (ts - this.startTime) * 0.001;

    var rendered = 0;
    for (var i = 0; i < this.stages.length; i++) {
      var st = this.stages[i];
      if (!st.visible) continue;
      this.renderStage(st, t);
      rendered++;
      if (rendered >= 4) break;
    }

    var elapsed = performance.now() - t0;
    if (elapsed > 60) {
      this.minFrameMs = Math.min(200, Math.max(this.minFrameMs, Math.round(elapsed * 1.8)));
    }

    if (!this.reduced && performance.now() < this.activeUntil) {
      this.rafId = requestAnimationFrame(function (n) { self.tick(n); });
    }
  };

  GlassStudioEngine.prototype.start = function () {
    this.booted = true;
    if (!this.ro) {
      this.tick(performance.now());
    }
  };

  window.FLUVO_ENGINE = new GlassStudioEngine();
})();
