export const escapeHtml = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

function inline(value) {
  return escapeHtml(value)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, href) => /^https?:\/\//i.test(href)
      ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>` : label);
}

export function markdown(source) {
  const lines = source.replaceAll('\r', '').split('\n');
  const output = [];
  let paragraph = [];
  const flush = () => { if (paragraph.length) output.push(`<p>${inline(paragraph.join(' '))}</p>`); paragraph = []; };
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (line.startsWith('```')) {
      flush(); const code = [];
      while (++index < lines.length && !lines[index].startsWith('```')) code.push(lines[index]);
      output.push(`<pre><code>${escapeHtml(code.join('\n'))}</code></pre>`);
    } else if (/^#{1,6}\s/.test(line)) {
      flush(); const [, hashes, text] = line.match(/^(#{1,6})\s+(.*)$/);
      output.push(`<h${hashes.length}>${inline(text)}</h${hashes.length}>`);
    } else if (line.trim().startsWith('|') && /^\s*\|?\s*:?-{3}/.test(lines[index + 1] || '')) {
      flush(); const cells = value => value.trim().replace(/^\||\|$/g, '').split('|').map(s => s.trim());
      const headers = cells(line); const rows = []; index++;
      while (index + 1 < lines.length && lines[index + 1].trim().startsWith('|')) rows.push(cells(lines[++index]));
      output.push(`<div class="table-wrap"><table><thead><tr>${headers.map(c => `<th>${inline(c)}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(c => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
    } else if (/^\s*(?:[-*]|\d+\.)\s+/.test(line)) {
      flush(); const ordered = /^\s*\d+\./.test(line); const items = [line];
      const pattern = ordered ? /^\s*\d+\.\s+/ : /^\s*[-*]\s+/;
      while (index + 1 < lines.length && pattern.test(lines[index + 1])) items.push(lines[++index]);
      const tag = ordered ? 'ol' : 'ul';
      output.push(`<${tag}>${items.map(item => `<li>${inline(item.replace(pattern, ''))}</li>`).join('')}</${tag}>`);
    } else if (!line.trim()) flush();
    else if (/^---+$/.test(line.trim())) { flush(); output.push('<hr>'); }
    else paragraph.push(line);
  }
  flush(); return output.join('\n');
}

export function documentPage(title, content, prefix = '') {
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; object-src 'none'"><title>${escapeHtml(title)} · DRIVEO</title><style>
*{box-sizing:border-box}body{margin:0;color:#213b4a;background:#f0f5f7;font:16px/1.65 Arial,sans-serif}header{background:#183e53;color:white;padding:18px max(20px,calc((100vw - 1140px)/2));display:flex;gap:24px;align-items:center;flex-wrap:wrap}header strong{letter-spacing:.08em}nav{display:flex;gap:20px;flex-wrap:wrap}nav a{color:#d5eef5;text-decoration:none;font-size:14px}nav a:hover{text-decoration:underline}main{max-width:1180px;margin:26px auto 50px;background:#fff;padding:30px 36px;border:1px solid #d9e5eb;border-radius:8px;overflow-wrap:anywhere}h1{font-size:30px;line-height:1.25;margin-top:0}h2{font-size:23px;margin-top:35px;border-top:1px solid #e2eaf0;padding-top:20px}h3{font-size:19px}a{color:#19637e}code{font-size:.88em;background:#edf3f6;padding:2px 5px;border-radius:3px}pre{background:#172f40;color:#e6f2f7;padding:16px;overflow:auto;border-radius:5px}pre code{background:transparent;padding:0}li{margin:5px 0}.table-wrap{overflow:auto}table{border-collapse:collapse;font-size:13px;width:100%;margin:14px 0}td,th{border:1px solid #d5e0e7;padding:9px 10px;text-align:left;vertical-align:top;min-width:90px}th{background:#e9f1f6;color:#24485b}tbody tr:nth-child(even){background:#f8fbfc}footer{font-size:12px;color:#6a808c;margin-top:35px;border-top:1px solid #e1eaf0;padding-top:12px}@media(max-width:700px){header{gap:10px}main{margin:10px;padding:20px 16px}h1{font-size:25px}nav{gap:12px}}
</style></head><body><header><strong>DATSOFT · DRIVEO</strong><nav><a href="${prefix}index.html">Mapas</a><a href="${prefix}guia.html">Guía de uso</a><a href="${prefix}manuales/index.html">Manual funcional</a></nav></header><main>${content}<footer>Referencia funcional · Versión 1.1 · Los cargos son propuestos y la evidencia delimita el alcance comprobado.</footer></main></body></html>`;
}
