import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { Script } from 'node:vm';
import { once } from 'node:events';
import { build, root, output } from './build.mjs';
import { createPreviewServer } from './serve.mjs';
import { markdown } from './markdown.mjs';

const read = path => readFile(resolve(root, path), 'utf8');
const data = JSON.parse(await read('src/data/maps.json'));
assert.deepEqual(data.kinds, ['arbol', 'relaciones', 'secciones']);
assert.equal(new Set(data.views.map(v => v.key)).size, data.views.length, 'Claves de vista repetidas');
for (const kind of data.kinds) for (const audience of ['interno', 'operarios']) assert(data.views.some(v => v.kind === kind && v.audience === audience), `Falta ${kind}/${audience}`);
for (const view of data.views) {
  assert(view.svg.includes('<svg') && view.svg.includes('</svg>'), `SVG ausente en ${view.key}`);
  assert(!/<script\b|<foreignObject\b/i.test(view.svg), 'El mapa contiene contenido activo inesperado');
  assert(view.width > 0 && view.height > 0);
  for (const node of view.nodes) assert(data.metadata[node.meta], `Referencia sin metadatos: ${node.meta}`);
}
for (const meta of Object.values(data.metadata)) {
  if (['Área', 'Módulo', 'Función'].includes(meta.kind)) assert(meta.description?.length > 20, `Descripción ausente: ${meta.code}`);
  if (meta.url) assert(meta.url.startsWith('https://datsoft.truster.cloud/'), 'Destino de ERP inesperado');
}
new Script(await read('src/viewer.js'), { filename: 'viewer.js' });
assert(!markdown('<script>alert(1)</script>').includes('<script>'));
assert(markdown('| A | B |\n|---|---|\n| 1 | 2 |').includes('<table>'));
const result = await build();
for (const name of ['index.html', '01_arbol.html', '02_relaciones.html', '03_secciones_y_cargos.html']) {
  const html = await readFile(resolve(output, name), 'utf8');
  assert(!html.includes('SIPRE'), 'Nombre anterior en la web');
  assert(!html.includes('editable-link'), 'La web no debe distribuir editables');
  const payload = html.split('const MODEL=')[1]?.split(/;\r?\n/)[0];
  assert(JSON.parse(payload).views.length > 0);
  new Script(html.split('<script>')[1].split('</script>')[0], { filename: name });
  assert(html.includes('manuales/index.html'));
}
const manualFiles = await readdir(resolve(output, 'manuales'));
assert.equal(manualFiles.length, 4);
const server = createPreviewServer();
server.listen(0, '127.0.0.1');
await once(server, 'listening');
const base = `http://127.0.0.1:${server.address().port}`;
try {
  for (const route of ['/', '/01_arbol.html', '/02_relaciones.html', '/03_secciones_y_cargos.html', '/guia.html', ...manualFiles.map(f => '/manuales/' + f)]) {
    const response = await fetch(base + route);
    assert.equal(response.status, 200, route);
    assert(response.headers.get('content-type').startsWith('text/html'));
    assert((await response.text()).includes('DRIVEO'));
  }
  for (const route of ['/src/data/maps.json', '/README.md', '/.git/config', '/editables/01_arbol_interno.drawio', '/..%2fREADME.md']) {
    const response = await fetch(base + route); assert.notEqual(response.status, 200, route);
  }
} finally { await new Promise(resolve => server.close(resolve)); }
console.log(`Comprobaciones correctas: ${result.views} vistas, ${result.pages} páginas, manuales y rutas de publicación.`);
