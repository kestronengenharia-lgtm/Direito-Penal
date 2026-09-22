/* Gera a versão da página para publicação como artefato hospedado.
   O host já fornece doctype/head/body, charset, viewport e um reset leve,
   então removemos esse invólucro e mantemos título, fontes, CSS e scripts. */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const src = readFileSync('index.html', 'utf8');
const corpo = src.slice(src.indexOf('<body>') + 6, src.lastIndexOf('</body>')).trim();

const cabeca = [
  '<title>Penalis</title>',
  '<link rel="preconnect" href="https://fonts.googleapis.com">',
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Spectral:wght@500;600&display=swap">',
  '<link rel="stylesheet" href="assets/css/style.css">'
].join('\n');

mkdirSync('build', { recursive: true });
writeFileSync('build/artifact.html', cabeca + '\n\n' + corpo + '\n');
console.log('build/artifact.html gerado —', (cabeca + corpo).length, 'bytes');
