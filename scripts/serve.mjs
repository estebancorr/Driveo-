import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { output } from './build.mjs';

export function createPreviewServer() {
  return createServer(async (req, res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'no-store');
    if (!['GET', 'HEAD'].includes(req.method)) { res.writeHead(405, { Allow: 'GET, HEAD' }); res.end(); return; }
    try {
      const path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const target = resolve(output, '.' + (path.endsWith('/') ? path + 'index.html' : path));
      if (!target.startsWith(output + sep)) { res.writeHead(403); res.end('Acceso no permitido'); return; }
      if (!(await stat(target)).isFile()) throw new Error('No es un archivo');
      const content = await readFile(target);
      res.setHeader('Content-Type', target.endsWith('.html') ? 'text/html; charset=utf-8' : 'application/octet-stream');
      res.writeHead(200);
      res.end(req.method === 'HEAD' ? undefined : content);
    } catch { res.writeHead(404); res.end('Página no encontrada'); }
  });
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const option = process.argv.indexOf('--port');
  const port = Number(option >= 0 ? process.argv[option + 1] : 4173);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Puerto no válido');
  const server = createPreviewServer();
  server.on('error', error => { console.error(error.code === 'EADDRINUSE' ? `El puerto ${port} está ocupado. Usa --port con otro número.` : error.message); process.exitCode = 1; });
  server.listen(port, '127.0.0.1', () => console.log(`DRIVEO: http://localhost:${port} · Ctrl+C para detener. Solo revisión local.`));
}
