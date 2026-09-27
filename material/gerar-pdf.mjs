/* ==========================================================================
   Gera o PDF de estudo do Título V do Código Penal (Das Penas).
   Uso:  node material/gerar-pdf.mjs
   Saída: material/Penas-Titulo-V.pdf (+ as duas folhas em arquivos separados)
   ========================================================================== */
import { readFileSync, writeFileSync } from 'node:fs';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const base = new URL('.', import.meta.url).pathname;
const ler = f => readFileSync(base + f, 'utf8');
const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---------------------------------------------------------------- mapa radial */
function mapaRadial() {
  const ramos = [
    { t: 'Penas privativas de liberdade', a: 'arts. 33 a 42', c: '#2f4a6d' },
    { t: 'Progressão, regressão e limite', a: 'art. 75 + LEP', c: '#2f4a6d' },
    { t: 'Penas restritivas de direitos', a: 'arts. 43 a 48', c: '#2b6b55' },
    { t: 'Pena de multa', a: 'arts. 49 a 52', c: '#8a6a12' },
    { t: 'Cominação das penas', a: 'arts. 53 a 58', c: '#414c58' },
    { t: 'Fixação da pena', a: 'arts. 59 a 68', c: '#8c3a4a' },
    { t: 'Concurso de crimes', a: 'arts. 69 a 76', c: '#8c3a4a' },
    { t: 'Suspensão condicional', a: 'arts. 77 a 82', c: '#57478a' },
    { t: 'Livramento condicional', a: 'arts. 83 a 90', c: '#57478a' },
    { t: 'Efeitos da condenação', a: 'arts. 91 e 92', c: '#414c58' },
    { t: 'Reabilitação', a: 'arts. 93 a 95', c: '#414c58' }
  ];
  const W = 900, H = 570, cx = W / 2, cy = H / 2, rx = 322, ry = 208, bw = 160, bh = 42;
  let linhas = '', caixas = '';
  ramos.forEach((r, i) => {
    const ang = -Math.PI / 2 + (i * 2 * Math.PI) / ramos.length;
    const x = cx + rx * Math.cos(ang), y = cy + ry * Math.sin(ang);
    const bx = x - bw / 2, by = y - bh / 2;
    // origem na borda da elipse central
    const ox = cx + 96 * Math.cos(ang), oy = cy + 52 * Math.sin(ang);
    const mx = cx + (x - cx) * 0.55, my = cy + (y - cy) * 0.78;
    linhas += `<path d="M${ox.toFixed(1)},${oy.toFixed(1)} Q${mx.toFixed(1)},${my.toFixed(1)} ${x.toFixed(1)},${y.toFixed(1)}" fill="none" stroke="${r.c}" stroke-width="1.6" opacity=".55"/>`;
    const palavras = r.t.split(' ');
    let l1 = '', l2 = '';
    palavras.forEach(p => { if ((l1 + ' ' + p).trim().length <= 22 && !l2) l1 = (l1 + ' ' + p).trim(); else l2 = (l2 + ' ' + p).trim(); });
    caixas += `
      <g>
        <rect x="${bx}" y="${y - (l2 ? 32 : 21)}" width="${bw}" height="${l2 ? 62 : 42}" rx="6" fill="#fff" stroke="${r.c}" stroke-width="1.3"/>
        <rect x="${bx}" y="${y - (l2 ? 32 : 21)}" width="4" height="${l2 ? 62 : 42}" rx="2" fill="${r.c}"/>
        <text x="${x}" y="${y - (l2 ? 12 : 2)}" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-size="12.5" font-weight="600" fill="#16202b">${esc(l1)}</text>
        ${l2 ? `<text x="${x}" y="${y + 4}" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-size="12.5" font-weight="600" fill="#16202b">${esc(l2)}</text>` : ''}
        <text x="${x}" y="${y + (l2 ? 22 : 14)}" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-size="10" fill="${r.c}">${esc(r.a)}</text>
      </g>`;
  });
  return `<svg class="svg-mapa" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa geral do Título V">
    ${linhas}
    <ellipse cx="${cx}" cy="${cy}" rx="96" ry="52" fill="#2f4a6d"/>
    <text x="${cx}" y="${cy - 6}" text-anchor="middle" font-family="Spectral, serif" font-size="25" font-weight="600" fill="#fff">PENAS</text>
    <text x="${cx}" y="${cy + 15}" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-size="11.5" fill="#cddcf0">Título V · arts. 32 a 95</text>
    <text x="${cx}" y="${cy + 31}" text-anchor="middle" font-family="IBM Plex Sans, sans-serif" font-size="10" fill="#9fb8d6">privativas · restritivas · multa</text>
    ${caixas}
  </svg>`;
}

/* ---------------------------------------------------------------- parte I */
function parteLegal() {
  const blocos = JSON.parse(ler('dados/titulo-v.json'));
  const classe = { cap: 'cap', sec: 'sec', rub: 'rub', art: 'art', par: 'par', inc: 'inc', ali: 'ali' };
  let html = '', vistoArt43 = false;
  for (const [tipo, txt] of blocos) {
    if (tipo === 'sec' && txt.startsWith('TÍTULO')) continue;      // já está no cabeçalho da parte
    let corpo = esc(txt)
      .replace(/(§\s*\d+)o\b/g, '$1º')
      .replace(/(arts?\.\s*\d+)o\b/gi, '$1º')
      .replace(/(Art\.\s*\d+)o\b/g, '$1º');
    if (tipo === 'art') {
      corpo = corpo.replace(/^(Art\.\s*\d+(?:-[A-Z])?\s*[.\-–]?)/, '<b>$1</b>');
      if (txt.startsWith('Art. 43')) vistoArt43 = true;
    }
    if (tipo === 'par') corpo = corpo.replace(/^(§\s*\d+º?\s*[.\-–]?|Parágrafo único\s*[.\-–]?)/, '<b>$1</b>');
    html += `<p class="${classe[tipo] || 'art'}">${corpo}</p>`;
    if (vistoArt43 && tipo === 'inc' && /^III\s*[-–]\s*limitação/.test(txt)) {
      html += `<p class="nota"><b>Nota do material:</b> o inciso III da redação dada pela Lei 9.714/1998 foi <b>vetado</b>; a versão compilada do Planalto conserva neste ponto o texto original de 1984, cujo conteúdo hoje corresponde ao inciso VI. As espécies vigentes de pena restritiva são as dos incisos I, II, IV, V e VI.</p>`;
      vistoArt43 = false;
    }
  }
  return html;
}

/* ---------------------------------------------------------------- montagem */
const hoje = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

const capa = `
<section class="capa">
  <div>
    <div class="selo">Material de estudo · Direito Penal</div>
    <h1>Das Penas</h1>
    <h2>Título V da Parte Geral do Código Penal — arts. 32 a 95</h2>
    <div class="regua"></div>
  </div>
  <div class="sumario">
    <div><b>Folha 1 — Texto integral</b>Os 65 artigos do Título V compilados em sequência, com capítulos, seções e rubricas marginais: espécies de pena, cominação, aplicação, sursis, livramento, efeitos da condenação e reabilitação.</div>
    <div><b>Folha 2 — Mapa mental</b>Como o sistema funciona: regimes e progressão, substituição por restritivas, cálculo da multa, dosimetria trifásica, concurso de crimes, suspensão condicional, livramento, efeitos e reabilitação, com quadros de memorização.</div>
  </div>
  <div class="rodape">
    Texto legal conferido na versão compilada do Decreto-Lei 2.848/1940 publicada pela Presidência da República (planalto.gov.br), consultada em ${hoje}, já com as alterações do Pacote Anticrime (Lei 13.964/2019) e posteriores.<br>
    Os esquemas da folha 2 trazem, além do Título V, dispositivos da Lei de Execução Penal e súmulas do STF e do STJ — sempre identificados. Confira a redação vigente antes da prova.
  </div>
</section>`;

const parte1 = `
<section class="abre-parte">
  <div class="eyebrow">Folha 1 de 2 — texto legal</div>
  <h2>Título V — Das Penas, na íntegra</h2>
  <p>Arts. 32 a 95 do Código Penal, em ordem, com os sete capítulos e as três seções do Capítulo I. As rubricas marginais em vermelho são as do próprio Código. Leitura em duas colunas, para acompanhar com marca-texto.</p>
</section>
<div class="legal">${parteLegal()}</div>`;

const roteiro = `
<div class="no" style="--cor:var(--ppl);margin-top:3mm">
  <h4>Roteiro de revisão em três passadas</h4>
  <div class="grade g3">
    <div><h5>1ª passada — estrutura</h5><p>Leia só os títulos dos nove ramos e os artigos de apoio. Objetivo: saber <b>onde</b> cada instituto mora no Código, para achar o artigo na prova em segundos.</p></div>
    <div><h5>2ª passada — números</h5><p>Fixe o quadro de memorização da última folha: 4 anos (restritivas), 2 anos (sursis), 2 anos e 1/3 (livramento), 40 anos (limite), 10 a 360 dias-multa.</p></div>
    <div><h5>3ª passada — pegadinhas</h5><p>Percorra apenas as tarjas: <b>amarela</b> (armadilhas e vedações), <b>azul</b> (súmulas e teses) e <b>verde</b> (mnemônicos e exemplos fechados).</p></div>
  </div>
</div>`;

const parte2 = ler('parte2.html')
  .replace('{{MAPA}}', mapaRadial())
  .replace('<!-- ====================== RAMO 1 ======================', roteiro + '\n<!-- ====================== RAMO 1 ======================');

const html = `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8">
<title>Das Penas — Título V do Código Penal</title>
<style>${ler('fontes.css')}</style>
<style>${ler('impressao.css')}</style>
</head><body>${capa}${parte1}${parte2}</body></html>`;

writeFileSync(base + '../build/material.html', html);

/* ---------------------------------------------------------------- impressão */
const rodape = `<div style="width:100%;font-family:'IBM Plex Sans',sans-serif;font-size:7pt;color:#78838f;
  padding:0 13mm;display:flex;justify-content:space-between;">
  <span>Das Penas — Título V do Código Penal (arts. 32 a 95)</span>
  <span class="pageNumber"></span>
</div>`;

const cabeca = html.slice(0, html.indexOf('<body>') + 6);
const documentos = [
  ['Penas-Titulo-V.pdf',            capa + parte1 + parte2],
  ['Penas-Folha-1-Artigos.pdf',     capa + parte1],
  ['Penas-Folha-2-Mapa-Mental.pdf', parte2.replace('class="folha ramo"', 'class="ramo" style="page-break-before:always;')]
];

const navegador = await chromium.launch();
for (const [arquivo, corpo] of documentos) {
  const pagina = await navegador.newPage();
  await pagina.setContent(cabeca + corpo + '</body></html>', { waitUntil: 'load' });
  await pagina.emulateMedia({ media: 'print' });
  await pagina.pdf({
    path: base + arquivo,
    format: 'A4', printBackground: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: rodape,
    margin: { top: '14mm', right: '13mm', bottom: '16mm', left: '13mm' }
  });
  await pagina.close();
  console.log('gerado: material/' + arquivo);
}
await navegador.close();
