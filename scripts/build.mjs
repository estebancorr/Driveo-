import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { markdown, documentPage, escapeHtml } from './markdown.mjs';

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const output = resolve(root, 'dist');
export async function build() {
  const read = async path => (await readFile(resolve(root, path), 'utf8')).replaceAll('\r\n', '\n');
  const [template, css, js, rawData, manualList, guide] = await Promise.all([
    read('src/viewer.html'), read('src/viewer.css'), read('src/viewer.js'), read('src/data/maps.json'), read('src/manuals.json'), read('src/guia.md')
  ]);
  const data = JSON.parse(rawData);
  await mkdir(resolve(output, 'manuales'), { recursive: true });
  const pages = [['index.html', data.kinds], ['01_arbol.html', ['arbol']], ['02_relaciones.html', ['relaciones']], ['03_secciones_y_cargos.html', ['secciones']]];
  for (const [name, kinds] of pages) {
    const payload = JSON.stringify({ ...data, kinds, views: data.views.filter(view => kinds.includes(view.kind)) }).replaceAll('</', '<\\/');
    const html = template.replace('/*__CSS__*/', () => css).replace('/*__JS__*/', () => js).replace('/*__DATA__*/', () => payload);
    if (/\/\*__(?:CSS|JS|DATA)__\*\//.test(html)) throw new Error('Quedó un marcador sin completar');
    await writeFile(resolve(output, name), html, 'utf8');
  }
  await writeFile(resolve(output, 'guia.html'), documentPage('Guía de uso', markdown(guide)), 'utf8');
  const manuals = JSON.parse(manualList);
  for (const manual of manuals) {
    if (!/^[a-z0-9-]+$/.test(manual.slug)) throw new Error('Identificador de manual no válido');
    const source = resolve(root, manual.source);
    if (!source.startsWith(resolve(root, 'docs/referencia') + sep)) throw new Error('Manual fuera de la carpeta de referencias');
    await writeFile(resolve(output, 'manuales', manual.slug + '.html'), documentPage(manual.title, markdown(await readFile(source, 'utf8')), '../'), 'utf8');
  }
  const index = `<h1>Manual funcional de DRIVEO</h1><p>Consulta el inventario, las relaciones y la nomenclatura que acompañan a los tres mapas. Los documentos conservan sus versiones de origen para facilitar la trazabilidad.</p><ul>${manuals.map(manual => `<li><a href="${manual.slug}.html">${escapeHtml(manual.title)}</a></li>`).join('')}</ul><p>Los cargos son propuestas para validar con Datsoft. Las funciones del menú y las referencias observadas no acreditan permisos de otros usuarios ni automatismos.</p>`;
  await writeFile(resolve(output, 'manuales/index.html'), documentPage('Manual funcional', index, '../'), 'utf8');
  return { views: data.views.length, pages: pages.length + manuals.length + 2, output };
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const result = await build();
  console.log(`DRIVEO: ${result.views} vistas y ${result.pages} páginas generadas en dist/.`);
}
