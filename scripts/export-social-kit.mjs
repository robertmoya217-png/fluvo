import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import os from "node:os";
import { spawn, execFileSync } from "node:child_process";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "social-kit");
const ARTIFACT_DIR = "C:\\Users\\robert\\.gemini\\antigravity\\brain\\7cb82881-0acd-4684-8a7b-d6b529c8357c";
const EDGE_EXE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".json": "application/json; charset=utf-8",
};

const BOARDS = [
  { id: "art-avatar", w: 1080, h: 1080, file: "01-foto-perfil-fluvo-1080x1080.png" },
  { id: "art-cover", w: 1640, h: 624, file: "02-portada-facebook-1640x624.png" },
  { id: "art-post-audit", w: 1080, h: 1350, file: "03-post-1-auditoria-100x100.png" },
  { id: "art-post-hosting", w: 1080, h: 1350, file: "04-post-2-cero-mensualidad.png" },
  { id: "art-post-real-estate", w: 1080, h: 1350, file: "05-post-3a-inmobiliarias-arquitectura.png" },
  { id: "art-post-clinics", w: 1080, h: 1350, file: "06-post-3b-clinicas-estetica.png" },
  { id: "art-post-legal", w: 1080, h: 1350, file: "07-post-3c-bufetes-consultoras.png" },
  { id: "art-post-industrial", w: 1080, h: 1350, file: "08-post-3d-catalogos-industriales-b2b.png" },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const server = http.createServer(async (req, res) => {
  try {
    const reqUrl = new URL(req.url || "/", "http://127.0.0.1");
    let cleanPath = decodeURIComponent(reqUrl.pathname);
    if (cleanPath.endsWith("/")) cleanPath += "index.html";
    const resolved = path.resolve(ROOT, "." + cleanPath);
    if (!resolved.startsWith(ROOT)) {
      res.writeHead(403);
      res.end("Forbidden");
      return;
    }
    const data = await fs.promises.readFile(resolved);
    const ext = path.extname(resolved).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("Not Found");
  }
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();
const cdpPort = 9340 + Math.floor(Math.random() * 500);
const tmpProfile = fs.mkdtempSync(path.join(os.tmpdir(), "fluvo-edge-cdp-"));

const edgeProc = spawn(
  EDGE_EXE,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-sandbox",
    "--no-first-run",
    "--no-default-browser-check",
    `--remote-debugging-port=${cdpPort}`,
    `--user-data-dir=${tmpProfile}`,
    "about:blank",
  ],
  { stdio: "ignore", windowsHide: true }
);

async function getPageWsUrl() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${cdpPort}/json/list`);
      if (res.ok) {
        const list = await res.json();
        const page = list.find((t) => t.type === "page" && t.webSocketDebuggerUrl);
        if (page) return page.webSocketDebuggerUrl;
      }
    } catch {}
    await sleep(100);
  }
  throw new Error(`CDP target not ready on port ${cdpPort}`);
}

let ws;
try {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

  const wsUrl = await getPageWsUrl();
  ws = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve, { once: true });
    ws.addEventListener("error", reject, { once: true });
  });

  let nextId = 1;
  const pending = new Map();
  ws.addEventListener("message", (ev) => {
    const msg = JSON.parse(String(ev.data));
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message || JSON.stringify(msg.error)));
      else resolve(msg.result);
    }
  });

  const cdp = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = nextId++;
      pending.set(id, { resolve, reject });
      ws.send(JSON.stringify({ id, method, params }));
    });

  await cdp("Page.enable");

  for (let idx = 0; idx < BOARDS.length; idx++) {
    const b = BOARDS[idx];
    await cdp("Emulation.setDeviceMetricsOverride", {
      width: b.w,
      height: b.h,
      deviceScaleFactor: 1,
      mobile: false,
    });
    const targetUrl = `http://127.0.0.1:${port}/public/social-kit/index.html?export=${b.id}`;
    await cdp("Page.navigate", { url: targetUrl });

    for (let t = 0; t < 50; t++) {
      const ev = await cdp("Runtime.evaluate", {
        expression: "document.readyState === 'complete' && document.documentElement.classList.contains('is-export')",
        returnByValue: true,
      });
      if (ev?.result?.value) break;
      await sleep(50);
    }
    await sleep(idx === 0 ? 350 : 120);

    const shot = await cdp("Page.captureScreenshot", {
      format: "png",
      clip: { x: 0, y: 0, width: b.w, height: b.h, scale: 1 },
    });

    const buf = Buffer.from(shot.data, "base64");
    const outPath = path.join(OUT_DIR, b.file);
    fs.writeFileSync(outPath, buf);
    fs.copyFileSync(outPath, path.join(ARTIFACT_DIR, b.file));
    console.log(`Exported ${b.file} (${b.w}x${b.h}) -> ${buf.length} bytes`);
  }
} finally {
  try { ws?.close(); } catch {}
  try { server.close(); } catch {}
  try {
    execFileSync("taskkill", ["/F", "/T", "/PID", String(edgeProc.pid)], { stdio: "ignore" });
  } catch {
    try { edgeProc.kill("SIGKILL"); } catch {}
  }
  try { fs.rmSync(tmpProfile, { recursive: true, force: true }); } catch {}
}
process.exit(0);
