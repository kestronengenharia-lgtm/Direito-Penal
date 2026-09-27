# ⚖️ Penalis — Plataforma de Estudos de Direito Penal

Plataforma web (sem instalação, sem servidor, sem cadastro) para estudar **Direito Penal** para a
faculdade: questões comentadas, caderno de erros automático, flashcards gerados sob medida e
explicações artigo por artigo do Código Penal com exemplo prático.

👉 **Para usar:** basta abrir o arquivo `index.html` no navegador. Todo o progresso fica salvo no
seu próprio navegador (`localStorage`) e pode ser exportado/importado em JSON.

---

## As abas

| Aba | O que faz |
|---|---|
| **Início** | Painel com aproveitamento geral, erros pendentes e desempenho por tema (do mais fraco para o mais forte). |
| **Questões** | Monta sessões filtrando por tema, dificuldade, tipo e quantidade. Cada questão traz gabarito comentado e fundamento legal, com link direto para a ficha do artigo. |
| **Caderno de Erros** | Tudo o que você erra cai aqui automaticamente, com sua resposta, o gabarito e o comentário. Há espaço para anotações pessoais. A questão só é considerada **dominada** após **dois acertos seguidos** na revisão. |
| **Flashcards** | Gera baralhos sobre o assunto escolhido — por tema, por título/capítulo do Código, só jurisprudência ou a partir dos seus erros. Revisão por **repetição espaçada** (caixas de Leitner: 1, 3, 7, 16 e 35 dias). |
| **Artigos comentados** | Navegue por Parte › Título › Capítulo/Seção › Artigo (ou busque por número/nome do crime) e leia: texto legal, explicação detalhada, **exemplo prático**, pontos de atenção para prova e jurisprudência. |
| **Jurisprudência** | Súmulas e teses do STF e do STJ, filtráveis por tema e por palavra-chave. |

## O que já está no banco de dados

- **Estrutura completa do Código Penal** — 2 partes, 68 títulos/capítulos/seções e **391 artigos**
  indexados com seu *nomen iuris*, da Parte Geral ao Título XII (crimes contra o Estado Democrático
  de Direito).
- **96 fichas de artigos** com explicação doutrinária, exemplo prático, pontos de atenção e
  jurisprudência (marcados com ★ no seletor).
- **95 questões autorais** comentadas (múltipla escolha e certo/errado), em três níveis de dificuldade.
- **Gerador automático de questões**, que cria itens inéditos a partir da base: identificação de
  dispositivo pelo texto legal, localização do artigo no Código, reconhecimento de súmulas e
  julgamento de pontos de atenção.
- **105 flashcards curados** + geração automática a partir dos artigos e das súmulas
  (mais de 250 cartas disponíveis).
- **60 súmulas e teses** consolidadas de STF e STJ.

Atualizado com as alterações das Leis 13.964/2019 (Pacote Anticrime), 13.718/2018, 14.132/2021,
14.155/2021, 14.197/2021, 14.532/2023 e 14.994/2024 (feminicídio como crime autônomo, art. 121-A).

## 📄 Material em PDF — Título V (Das Penas)

Na pasta `material/` há um caderno de estudo pronto para imprimir, em A4:

| Arquivo | Páginas | Conteúdo |
|---|---|---|
| `Penas-Titulo-V.pdf` | 21 | completo — capa, folha 1 e folha 2 |
| `Penas-Folha-1-Artigos.pdf` | 8 | **texto integral** dos arts. 32 a 95, em duas colunas, com capítulos, seções e rubricas marginais |
| `Penas-Folha-2-Mapa-Mental.pdf` | 13 | **mapa mental**: mapa radial do Título V e nove ramos — penas privativas de liberdade, progressão e limite, restritivas de direitos, multa, dosimetria trifásica, concurso de crimes, sursis, livramento condicional, efeitos da condenação e reabilitação —, mais os quadros de memorização |

O texto legal é a versão compilada do Decreto-Lei 2.848/1940 publicada pelo Planalto, baixada e
conferida na geração (arquivo `material/dados/titulo-v.json`). Os esquemas trazem também a Lei de
Execução Penal e súmulas do STF e do STJ, sempre identificadas como tais.

Para regerar os PDFs depois de editar o conteúdo:

```bash
node material/gerar-pdf.mjs      # requer Playwright/Chromium
```

- `material/parte2.html` — conteúdo do mapa mental (HTML simples).
- `material/impressao.css` — estilo de impressão (A4, cores por ramo).
- `material/gerar-pdf.mjs` — monta o documento, desenha o mapa radial em SVG e imprime os três PDFs.

## Organização dos arquivos

```
index.html                 página única com as seis abas
assets/css/style.css       tema escuro/claro, layout responsivo
assets/js/app.js           navegação, sessões, gerador de questões, Leitner, estatísticas
data/estrutura.js          árvore do Código Penal + índice artigo → localização
data/artigos-pg.js         fichas: arts. 1º a 31
data/artigos-pg2.js        fichas: penas, medidas de segurança, ação penal, prescrição
data/artigos-pe1.js        fichas: crimes contra a pessoa e contra o patrimônio
data/artigos-pe2.js        fichas: dignidade sexual, fé pública, administração pública
data/questoes-pg.js        50 questões da Parte Geral
data/questoes-pe.js        45 questões da Parte Especial e jurisprudência
data/flashcards.js         105 flashcards curados
data/jurisprudencia.js     60 súmulas e teses
material/                  caderno de estudo em PDF (Título V) e seu gerador
```

## Como acrescentar conteúdo

Todos os bancos são arquivos JavaScript simples, sem build nem dependências.

**Nova questão** (`data/questoes-pe.js`):

```js
{ id:'pe046', tema:'Crimes contra o patrimônio', sub:'Furto', dif:'media', tipo:'mc',
  enunciado:'...', alt:['...','...','...','...','...'], correta:2,
  comentario:'...', fundamento:'CP, art. 155' }
```

`tipo:'ce'` usa `alt:['Certo','Errado']`. Para uma nova ficha de artigo, acrescente uma entrada ao
objeto correspondente em `data/artigos-*.js` com as chaves `tema`, `texto`, `explicacao` (array),
`exemplo`, `pontos` (array) e `juris` (array). Textos aceitam `**negrito**` e `*itálico*`.

---

> **Aviso.** Este material é um apoio de estudo elaborado a partir do Decreto-Lei 2.848/1940 e da
> jurisprudência do STF e do STJ. A legislação penal muda com frequência — confira a redação
> vigente no Planalto e as atualizações de súmulas antes da prova.
