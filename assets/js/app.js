/* =========================================================================
   Penalis — lógica da plataforma
   ========================================================================= */
(function () {
'use strict';

/* ---------------------------------------------------------------- dados */
const ARTIGOS = Object.assign({}, ARTIGOS_PG, ARTIGOS_PG2, ARTIGOS_PE1, ARTIGOS_PE2);
const QUESTOES = QUESTOES_PG.concat(QUESTOES_PE);

const TEMAS = (function () {
  const s = new Set();
  QUESTOES.forEach(q => s.add(q.tema));
  Object.values(ARTIGOS).forEach(a => s.add(a.tema));
  FLASHCARDS.forEach(f => s.add(f.tema));
  JURISPRUDENCIA.forEach(j => s.add(j.tema));
  return Array.from(s).sort((a, b) => a.localeCompare(b, 'pt-BR'));
})();

/* ---------------------------------------------------------------- estado */
const CHAVE = 'penalis.v1';
const estadoPadrao = { respondidas:{}, erros:{}, flash:{}, sessoes:[], tema:null };
let estado = carregar();

function carregar() {
  try {
    const bruto = localStorage.getItem(CHAVE);
    if (!bruto) return JSON.parse(JSON.stringify(estadoPadrao));
    return Object.assign(JSON.parse(JSON.stringify(estadoPadrao)), JSON.parse(bruto));
  } catch (e) { return JSON.parse(JSON.stringify(estadoPadrao)); }
}
function salvar() {
  try { localStorage.setItem(CHAVE, JSON.stringify(estado)); } catch (e) { /* modo privado */ }
}

/* ---------------------------------------------------------------- utils */
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
const LETRAS = ['A','B','C','D','E','F'];

function embaralhar(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function esc(t) {
  return String(t == null ? '' : t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
/* negrito **assim** e itálico *assim* */
function ricoTexto(t) {
  return esc(t).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/(^|[^*])\*([^*]+?)\*/g, '$1<em>$2</em>');
}
function opcoes(sel, lista, placeholder) {
  sel.innerHTML = (placeholder ? `<option value="">${esc(placeholder)}</option>` : '') +
    lista.map(o => typeof o === 'string'
      ? `<option value="${esc(o)}">${esc(o)}</option>`
      : `<option value="${esc(o.v)}">${esc(o.t)}</option>`).join('');
}
function hoje() { return new Date().toISOString().slice(0, 10); }
/* arts. 1º a 9º são grafados em ordinal; a partir do 10, em cardinal */
function fmtArt(n) {
  const m = String(n).match(/^(\d+)(.*)$/);
  if (m && parseInt(m[1], 10) <= 9 && !m[2]) return m[1] + 'º';
  return String(n);
}
function dias(n) { return n * 86400000; }

/* ---------------------------------------------------- navegação de abas */
function irPara(aba) {
  $$('.aba').forEach(b => b.classList.toggle('ativa', b.dataset.aba === aba));
  $$('.painel').forEach(p => p.classList.toggle('ativo', p.id === 'painel-' + aba));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (aba === 'inicio') renderEstatisticas();
  if (aba === 'erros') renderErros();
}
$$('.aba').forEach(b => b.addEventListener('click', () => irPara(b.dataset.aba)));
$$('[data-ir]').forEach(b => b.addEventListener('click', () => irPara(b.dataset.ir)));

/* tema claro/escuro */
/* sem escolha salva, seguimos o tema do próprio leitor */
function temaDoLeitor() {
  const stamp = document.documentElement.getAttribute('data-theme');
  if (stamp === 'light') return 'claro';
  if (stamp === 'dark') return 'escuro';
  try {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) return 'claro';
  } catch (e) { /* ignora */ }
  return 'escuro';
}
function temaAtivo() { return estado.tema || temaDoLeitor(); }
function aplicarTema() {
  const t = temaAtivo();
  document.documentElement.dataset.tema = t;
  $('#btn-tema').textContent = t === 'escuro' ? '🌙' : '☀️';
  $('#btn-tema').setAttribute('aria-label', t === 'escuro' ? 'Mudar para tema claro' : 'Mudar para tema escuro');
}
try {
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => { if (!estado.tema) aplicarTema(); });
  }
} catch (e) { /* ignora */ }
$('#btn-tema').addEventListener('click', () => {
  estado.tema = temaAtivo() === 'escuro' ? 'claro' : 'escuro'; salvar(); aplicarTema();
});

/* =========================================================================
   GERAÇÃO AUTOMÁTICA DE QUESTÕES
   ========================================================================= */
function geraQuestoes(tema, quantidade) {
  const geradas = [];
  const artigos = Object.keys(ARTIGOS)
    .filter(n => !tema || ARTIGOS[n].tema === tema)
    .map(n => Object.assign({ n }, ARTIGOS[n], CP_INDICE[n] || {}));
  const todosIdx = Object.values(CP_INDICE);

  /* tipo 1 — dispositivo legal → artigo correspondente */
  artigos.filter(a => a.texto).forEach(a => {
    const trecho = a.texto.split('. ')[0].slice(0, 220);
    const distratores = embaralhar(todosIdx.filter(i =>
      i.numero !== a.n && i.tituloId === (a.tituloId || '') )).slice(0, 4);
    if (distratores.length < 3) return;
    const alts = embaralhar([a.n].concat(distratores.map(d => d.numero)));
    geradas.push({
      id: 'gen-disp-' + a.n, tema: a.tema, sub: 'Identificação do dispositivo', dif: 'media',
      tipo: 'mc', gerada: true,
      enunciado: `Assinale o artigo do Código Penal a que corresponde o seguinte dispositivo:<br><span class="lei" style="display:block;margin-top:.6rem">“${esc(trecho)}…”</span>`,
      alt: alts.map(x => 'Art. ' + fmtArt(x) + ' do CP'),
      correta: alts.indexOf(a.n),
      comentario: `Trata-se do art. ${fmtArt(a.n)} do CP — ${esc(a.nomen || a.tema)}.`,
      fundamento: 'CP, art. ' + fmtArt(a.n)
    });
  });

  /* tipo 2 — artigo → nomen iuris */
  const comNomen = todosIdx.filter(i => !tema || (ARTIGOS[i.numero] && ARTIGOS[i.numero].tema === tema));
  comNomen.forEach(i => {
    const irmaos = embaralhar(todosIdx.filter(o => o.numero !== i.numero && o.parteId === i.parteId)).slice(0, 4);
    if (irmaos.length < 4) return;
    const alts = embaralhar([i.nomen].concat(irmaos.map(o => o.nomen)));
    geradas.push({
      id: 'gen-nomen-' + i.numero, tema: (ARTIGOS[i.numero] && ARTIGOS[i.numero].tema) || i.tituloNome,
      sub: 'Localização no Código', dif: 'facil', tipo: 'mc', gerada: true,
      enunciado: `O art. ${fmtArt(i.numero)} do Código Penal trata de:`,
      alt: alts, correta: alts.indexOf(i.nomen),
      comentario: `O art. ${fmtArt(i.numero)} está em: ${esc(i.tituloNome)} › ${esc(i.capituloNome)}, e trata de ${esc(i.nomen)}.`,
      fundamento: 'CP, art. ' + fmtArt(i.numero)
    });
  });

  /* tipo 3 — enunciado jurisprudencial → fonte */
  JURISPRUDENCIA.filter(j => !tema || j.tema === tema).forEach((j, k) => {
    const outros = embaralhar(JURISPRUDENCIA.filter(o => o.fonte !== j.fonte)).slice(0, 4);
    const alts = embaralhar([j.fonte].concat(outros.map(o => o.fonte)));
    geradas.push({
      id: 'gen-juris-' + k, tema: j.tema, sub: 'Jurisprudência', dif: 'dificil', tipo: 'mc', gerada: true,
      enunciado: `A orientação a seguir corresponde a qual enunciado?<br><span class="lei" style="display:block;margin-top:.6rem">“${esc(j.texto)}”</span>`,
      alt: alts, correta: alts.indexOf(j.fonte),
      comentario: `Trata-se da ${esc(j.fonte)} — tema: ${esc(j.tema)}.`,
      fundamento: j.fonte
    });
  });

  /* tipo 4 — ponto de atenção da ficha, em certo/errado */
  artigos.forEach(a => {
    (a.pontos || []).forEach((p, k) => {
      const limpo = p.replace(/\*\*/g, '');
      if (limpo.length < 35) return;
      geradas.push({
        id: 'gen-ponto-' + a.n + '-' + k, tema: a.tema, sub: 'Ponto de atenção', dif: 'media',
        tipo: 'ce', gerada: true,
        enunciado: `Julgue o item, relativo ao art. ${fmtArt(a.n)} do Código Penal:<br><br>“${esc(limpo)}”`,
        alt: ['Certo', 'Errado'], correta: 0,
        comentario: `Correto. ${ricoTexto(p)}`,
        fundamento: 'CP, art. ' + fmtArt(a.n)
      });
    });
  });

  return embaralhar(geradas).slice(0, quantidade);
}

/* =========================================================================
   SESSÃO DE QUESTÕES
   ========================================================================= */
let sessao = null;

function disponiveis() {
  const tema = $('#q-tema').value, dif = $('#q-dif').value, tipo = $('#q-tipo').value;
  return QUESTOES.filter(q =>
    (!tema || q.tema === tema) && (!dif || q.dif === dif) && (!tipo || q.tipo === tipo));
}
function atualizaContador() {
  const n = disponiveis().length;
  $('#q-disponiveis').textContent = `${n} ${n === 1 ? 'questão autoral disponível' : 'questões autorais disponíveis'} com esses filtros` +
    ($('#q-gerar').checked ? ' (+ geradas automaticamente)' : '');
}
['#q-tema','#q-dif','#q-tipo','#q-gerar'].forEach(s => $(s).addEventListener('change', atualizaContador));

function iniciarSessao(lista, rotulo) {
  if (!lista.length) { alert('Nenhuma questão encontrada com esses filtros. Tente ampliar a seleção.'); return; }
  sessao = { itens: lista, i: 0, acertos: 0, erros: 0, respondida: false, escolha: null, rotulo: rotulo || 'Sessão' };
  $('#config-questoes').hidden = true;
  $('#resumo-questoes').hidden = true;
  $('#sessao-questoes').hidden = false;
  irPara('questoes');
  renderQuestao();
}

$('#btn-iniciar-q').addEventListener('click', () => {
  const qtd = parseInt($('#q-qtd').value, 10);
  const tema = $('#q-tema').value, dif = $('#q-dif').value, tipo = $('#q-tipo').value;
  let base = disponiveis();
  if ($('#q-ineditas').checked) {
    const ineditas = base.filter(q => !estado.respondidas[q.id]);
    if (ineditas.length) base = ineditas;
  }
  let lista = embaralhar(base).slice(0, qtd);
  if ($('#q-gerar').checked && lista.length < qtd) {
    let extras = geraQuestoes(tema, (qtd - lista.length) * 3)
      .filter(q => (!dif || q.dif === dif) && (!tipo || q.tipo === tipo));
    lista = lista.concat(extras.slice(0, qtd - lista.length));
  }
  iniciarSessao(embaralhar(lista));
});

function renderQuestao() {
  const q = sessao.itens[sessao.i];
  sessao.respondida = false; sessao.escolha = null;
  $('#prog-q').style.width = (sessao.i / sessao.itens.length * 100) + '%';
  $('#btn-responder').hidden = false;
  $('#btn-responder').disabled = true;
  $('#btn-proxima').hidden = true;
  $('#area-questao').innerHTML = `
    <div class="meta-q">
      <span class="tag">${sessao.i + 1} de ${sessao.itens.length}</span>
      <span class="tag">${esc(q.tema)}</span>
      ${q.sub ? `<span class="tag">${esc(q.sub)}</span>` : ''}
      <span class="tag tag-${esc(q.dif)}">${q.dif === 'facil' ? 'Fácil' : q.dif === 'media' ? 'Média' : 'Difícil'}</span>
      ${q.gerada ? '<span class="tag tag-gerada">gerada automaticamente</span>' : ''}
    </div>
    <div class="enunciado">${q.enunciado}</div>
    <div class="alternativas" id="alts">
      ${q.alt.map((a, i) => `
        <div class="alt" data-i="${i}">
          <span class="alt-letra">${q.tipo === 'ce' ? '' : LETRAS[i] + ')'}</span>
          <span>${ricoTexto(a)}</span>
        </div>`).join('')}
    </div>
    <div id="feedback"></div>`;
  $$('#alts .alt').forEach(el => el.addEventListener('click', () => {
    if (sessao.respondida) return;
    $$('#alts .alt').forEach(o => o.classList.remove('selecionada'));
    el.classList.add('selecionada');
    sessao.escolha = parseInt(el.dataset.i, 10);
    $('#btn-responder').disabled = false;
  }));
}

function responder() {
  if (sessao.respondida || sessao.escolha === null) return;
  const q = sessao.itens[sessao.i];
  const acertou = sessao.escolha === q.correta;
  sessao.respondida = true;
  if (acertou) sessao.acertos++; else sessao.erros++;

  $$('#alts .alt').forEach(el => {
    const i = parseInt(el.dataset.i, 10);
    if (i === q.correta) el.classList.add('correta');
    else if (i === sessao.escolha) el.classList.add('errada');
  });

  $('#feedback').innerHTML = `
    <div class="comentario">
      <p class="veredito ${acertou ? 'acerto' : 'erro'}">${acertou ? '✔ Resposta correta' : '✘ Resposta incorreta'}${
        acertou ? '' : ` — o gabarito é <strong>${q.tipo === 'ce' ? esc(q.alt[q.correta]) : LETRAS[q.correta] + ') ' + esc(q.alt[q.correta])}</strong>`}</p>
      <h4>Comentário</h4>
      <div>${ricoTexto(q.comentario)}</div>
      ${q.fundamento ? `<span class="fundamento">📘 Fundamento: ${esc(q.fundamento)}</span>` : ''}
      ${ARTIGOS[extraiArtigo(q.fundamento)] ? `<div style="margin-top:.6rem"><button class="btn btn-fantasma" data-ver-art="${esc(extraiArtigo(q.fundamento))}">Ver ficha completa do art. ${esc(fmtArt(extraiArtigo(q.fundamento)))}</button></div>` : ''}
    </div>`;
  const btnArt = $('#feedback [data-ver-art]');
  if (btnArt) btnArt.addEventListener('click', () => { abrirArtigo(btnArt.dataset.verArt); irPara('artigos'); });

  registrarResposta(q, acertou);
  $('#btn-responder').hidden = true;
  $('#btn-proxima').hidden = false;
  $('#btn-proxima').textContent = sessao.i === sessao.itens.length - 1 ? 'Ver resultado →' : 'Próxima →';
}

function extraiArtigo(fund) {
  if (!fund) return '';
  const m = String(fund).match(/art\.?\s*(\d+(?:-[A-Z])?)/i);
  return m ? m[1] : '';
}

function registrarResposta(q, acertou) {
  const r = estado.respondidas[q.id] || { acertos: 0, erros: 0, tema: q.tema };
  acertou ? r.acertos++ : r.erros++;
  r.ultima = hoje(); r.tema = q.tema;
  estado.respondidas[q.id] = r;

  if (!acertou) {
    const e = estado.erros[q.id] || { q: q, tentativas: 0, acertosSeguidos: 0, nota: '' };
    e.q = q; e.tentativas++; e.acertosSeguidos = 0; e.ultima = hoje(); e.dominada = false;
    estado.erros[q.id] = e;
  } else if (estado.erros[q.id]) {
    const e = estado.erros[q.id];
    e.acertosSeguidos++; e.ultima = hoje();
    if (e.acertosSeguidos >= 2) e.dominada = true;
  }
  salvar(); atualizaBadge();
}

$('#btn-responder').addEventListener('click', responder);
$('#btn-proxima').addEventListener('click', () => {
  if (sessao.i === sessao.itens.length - 1) encerrarSessao(); else { sessao.i++; renderQuestao(); }
});
$('#btn-encerrar').addEventListener('click', encerrarSessao);

function encerrarSessao() {
  if (!sessao) return;
  const total = sessao.acertos + sessao.erros;
  const pct = total ? Math.round(sessao.acertos / total * 100) : 0;
  estado.sessoes.push({ data: hoje(), acertos: sessao.acertos, erros: sessao.erros });
  if (estado.sessoes.length > 200) estado.sessoes = estado.sessoes.slice(-200);
  salvar();
  $('#sessao-questoes').hidden = true;
  $('#config-questoes').hidden = false;
  const r = $('#resumo-questoes');
  r.hidden = false;
  r.innerHTML = `
    <h3>Resultado da sessão</h3>
    <div class="cards-stats">
      <div class="stat"><b>${total}</b><span>respondidas</span></div>
      <div class="stat"><b style="color:var(--ok)">${sessao.acertos}</b><span>acertos</span></div>
      <div class="stat"><b style="color:var(--erro)">${sessao.erros}</b><span>erros</span></div>
      <div class="stat"><b>${pct}%</b><span>aproveitamento</span></div>
    </div>
    <p class="dica">${pct >= 80 ? 'Excelente domínio do assunto. Vale partir para temas novos ou aumentar a dificuldade.' :
      pct >= 60 ? 'Bom desempenho. Revise o caderno de erros antes de avançar.' :
      'Vale revisar a teoria: comece pelos artigos comentados dos temas em que você errou e depois refaça o caderno de erros.'}</p>
    <div class="acoes-rapidas">
      ${sessao.erros ? '<button class="btn btn-primario" data-ir="erros">Ver os erros no caderno</button>' : ''}
      <button class="btn" id="btn-nova-sessao">Nova sessão</button>
    </div>`;
  $$('#resumo-questoes [data-ir]').forEach(b => b.addEventListener('click', () => irPara(b.dataset.ir)));
  const nova = $('#btn-nova-sessao');
  if (nova) nova.addEventListener('click', () => { r.hidden = true; });
  sessao = null;
  renderEstatisticas(); renderErros();
}

/* =========================================================================
   CADERNO DE ERROS
   ========================================================================= */
function listaErros() { return Object.keys(estado.erros).map(k => estado.erros[k]); }
function atualizaBadge() {
  const n = listaErros().filter(e => !e.dominada).length;
  const b = $('#badge-erros');
  b.textContent = n; b.dataset.zero = n === 0 ? '1' : '0';
}

function renderErros() {
  const alvo = $('#lista-erros');
  const tema = $('#e-tema').value, ordem = $('#e-ordem').value;
  let itens = listaErros().filter(e => !tema || e.q.tema === tema);
  if (ordem === 'erros') itens.sort((a, b) => b.tentativas - a.tentativas);
  else if (ordem === 'tema') itens.sort((a, b) => a.q.tema.localeCompare(b.q.tema, 'pt-BR'));
  else itens.sort((a, b) => String(b.ultima).localeCompare(String(a.ultima)));

  if (!itens.length) {
    alvo.innerHTML = `<div class="caixa"><p class="vazio">Seu caderno de erros está vazio. Resolva questões na aba <strong>Questões</strong> — tudo o que você errar aparece aqui automaticamente, com gabarito e comentário.</p></div>`;
    return;
  }
  alvo.innerHTML = itens.map(e => {
    const q = e.q;
    return `<div class="erro-item ${e.dominada ? 'dominada' : ''}">
      <div class="erro-meta">
        <span class="tag">${esc(q.tema)}</span>
        ${q.sub ? `<span class="tag">${esc(q.sub)}</span>` : ''}
        <span class="tag tag-${esc(q.dif)}">${q.dif === 'facil' ? 'Fácil' : q.dif === 'media' ? 'Média' : 'Difícil'}</span>
        <span class="tag">errei ${e.tentativas}×</span>
        ${e.dominada ? '<span class="tag" style="border-color:var(--ok);color:var(--ok)">dominada</span>'
          : `<span class="tag">${e.acertosSeguidos}/2 acertos para dominar</span>`}
      </div>
      <h4>${q.enunciado}</h4>
      <div class="erro-detalhe">
        <p><b>Gabarito:</b> ${q.tipo === 'ce' ? esc(q.alt[q.correta]) : LETRAS[q.correta] + ') ' + esc(q.alt[q.correta])}</p>
        <p>${ricoTexto(q.comentario)}</p>
        ${q.fundamento ? `<p class="dica">📘 ${esc(q.fundamento)}</p>` : ''}
      </div>
      <div class="nota">
        <label>Minhas anotações
          <textarea data-nota="${esc(q.id)}" placeholder="Por que errei? Qual é a pegadinha?">${esc(e.nota || '')}</textarea>
        </label>
      </div>
      <div class="acoes-rapidas">
        <button class="btn" data-refazer="${esc(q.id)}">Refazer esta questão</button>
        ${ARTIGOS[extraiArtigo(q.fundamento)] ? `<button class="btn btn-fantasma" data-ver-art="${esc(extraiArtigo(q.fundamento))}">Ler o artigo comentado</button>` : ''}
        <button class="btn btn-fantasma btn-perigo" data-remover="${esc(q.id)}">Remover</button>
      </div>
    </div>`;
  }).join('');

  $$('#lista-erros [data-nota]').forEach(t => t.addEventListener('change', () => {
    estado.erros[t.dataset.nota].nota = t.value; salvar();
  }));
  $$('#lista-erros [data-refazer]').forEach(b => b.addEventListener('click', () => {
    iniciarSessao([estado.erros[b.dataset.refazer].q]);
  }));
  $$('#lista-erros [data-ver-art]').forEach(b => b.addEventListener('click', () => {
    abrirArtigo(b.dataset.verArt); irPara('artigos');
  }));
  $$('#lista-erros [data-remover]').forEach(b => b.addEventListener('click', () => {
    delete estado.erros[b.dataset.remover]; salvar(); renderErros(); atualizaBadge();
  }));
}
$('#e-tema').addEventListener('change', renderErros);
$('#e-ordem').addEventListener('change', renderErros);
$('#btn-revisar-erros').addEventListener('click', () => {
  const itens = listaErros().filter(e => !e.dominada).map(e => e.q);
  if (!itens.length) { alert('Não há erros pendentes de revisão. Bom trabalho!'); return; }
  iniciarSessao(embaralhar(itens));
});
$('#btn-limpar-dominadas').addEventListener('click', () => {
  Object.keys(estado.erros).forEach(k => { if (estado.erros[k].dominada) delete estado.erros[k]; });
  salvar(); renderErros(); atualizaBadge();
});

/* =========================================================================
   FLASHCARDS
   ========================================================================= */
let baralho = null;

function cardsDoTema(tema) {
  const out = FLASHCARDS.filter(f => !tema || f.tema === tema).map(f => Object.assign({}, f));
  Object.keys(ARTIGOS).forEach(n => {
    const a = ARTIGOS[n];
    if (tema && a.tema !== tema) return;
    out.push(cardDeArtigo(n, a));
  });
  JURISPRUDENCIA.filter(j => !tema || j.tema === tema).forEach((j, k) => out.push(cardDeJuris(j, k)));
  return out;
}
function cardDeArtigo(n, a) {
  const idx = CP_INDICE[n] || {};
  const resumo = (a.explicacao && a.explicacao[0]) ? a.explicacao[0] : (a.texto || '');
  return {
    id: 'ca-' + n, tema: a.tema || idx.tituloNome,
    frente: `Art. ${fmtArt(n)} do CP — do que trata e qual é o ponto central?`,
    verso: `<strong>${esc(idx.nomen || a.tema || '')}</strong><br><br>${ricoTexto(resumo.slice(0, 460))}${
      a.pontos && a.pontos.length ? '<br><br><em>Atenção:</em> ' + ricoTexto(a.pontos[0]) : ''}`,
    fonte: 'CP, art. ' + fmtArt(n), art: n
  };
}
function cardDeJuris(j, k) {
  return { id: 'cj-' + (j.fonte.replace(/\W+/g, '') || k), tema: j.tema,
    frente: `O que estabelece a ${esc(j.fonte)}?`, verso: esc(j.texto), fonte: j.fonte };
}
function cardsDaEstrutura(capId) {
  const out = [];
  CP_ESTRUTURA.forEach(p => p.titulos.forEach(t => t.capitulos.forEach(c => {
    if (capId && c.id !== capId) return;
    c.artigos.forEach(a => {
      const n = a[0];
      if (ARTIGOS[n]) { out.push(cardDeArtigo(n, ARTIGOS[n])); return; }
      out.push({ id: 'cn-' + n, tema: t.nome,
        frente: `Art. ${fmtArt(n)} do CP — qual é o seu conteúdo?`,
        verso: `<strong>${esc(a[1])}</strong><br><br>Localização: ${esc(t.nome)} › ${esc(c.nome)}.`,
        fonte: 'CP, art. ' + fmtArt(n), art: n });
    });
  })));
  return out;
}
function cardsDosErros() {
  return listaErros().map(e => ({
    id: 'ce-' + e.q.id, tema: e.q.tema,
    frente: String(e.q.enunciado).replace(/<[^>]+>/g, ' '),
    verso: `<strong>Gabarito: ${e.q.tipo === 'ce' ? esc(e.q.alt[e.q.correta]) : LETRAS[e.q.correta] + ') ' + esc(e.q.alt[e.q.correta])}</strong><br><br>${ricoTexto(e.q.comentario)}`,
    fonte: e.q.fundamento || ''
  }));
}

function infoCaixa(id) {
  return estado.flash[id] || { caixa: 1, proxima: 0, vistas: 0 };
}
const INTERVALOS = [0, 1, 3, 7, 16, 35];

function baralhoDisponivel() {
  const fonte = $('#f-fonte').value;
  if (fonte === 'tema') return cardsDoTema($('#f-tema').value);
  if (fonte === 'estrutura') return cardsDaEstrutura($('#f-cap').value);
  if (fonte === 'juris') return JURISPRUDENCIA.map(cardDeJuris);
  return cardsDosErros();
}
function atualizaContadorFlash() {
  const n = baralhoDisponivel().length;
  $('#f-disponiveis').textContent = `${n} ${n === 1 ? 'carta disponível' : 'cartas disponíveis'}`;
}

$('#f-fonte').addEventListener('change', () => {
  const v = $('#f-fonte').value;
  $('#wrap-f-tema').hidden = v !== 'tema';
  $('#wrap-f-titulo').hidden = v !== 'estrutura';
  $('#wrap-f-cap').hidden = v !== 'estrutura';
  atualizaContadorFlash();
});
$('#f-tema').addEventListener('change', atualizaContadorFlash);
$('#f-cap').addEventListener('change', atualizaContadorFlash);

$('#btn-gerar-flash').addEventListener('click', () => {
  let cards = baralhoDisponivel();
  if (!cards.length) { alert('Não há cartas para esse assunto. Escolha outro filtro.'); return; }
  const qtd = parseInt($('#f-qtd').value, 10);
  const agora = Date.now();
  if ($('#f-priorizar').checked) {
    cards.sort((a, b) => {
      const ia = infoCaixa(a.id), ib = infoCaixa(b.id);
      const va = (ia.proxima <= agora ? 0 : 1) * 1000 + ia.caixa;
      const vb = (ib.proxima <= agora ? 0 : 1) * 1000 + ib.caixa;
      return va - vb;
    });
    cards = cards.slice(0, qtd);
  } else {
    cards = embaralhar(cards).slice(0, qtd);
  }
  baralho = { cards: embaralhar(cards), i: 0, sabia: 0, quase: 0, nao: 0 };
  $('#config-flash').hidden = true;
  $('#resumo-flash').hidden = true;
  $('#sessao-flash').hidden = false;
  renderFlash();
});

function renderFlash() {
  const c = baralho.cards[baralho.i];
  $('#prog-f').style.width = (baralho.i / baralho.cards.length * 100) + '%';
  $('#flashcard').classList.remove('virado');
  $('#flash-tema').textContent = `${baralho.i + 1}/${baralho.cards.length} · ${c.tema || ''}`;
  $('#flash-frente').innerHTML = ricoTexto(c.frente);
  $('#flash-verso').innerHTML = c.verso;
  $('#flash-fonte').textContent = c.fonte ? '📘 ' + c.fonte : '';
}
$('#flashcard').addEventListener('click', () => $('#flashcard').classList.toggle('virado'));

function avaliarFlash(nivel) {
  const c = baralho.cards[baralho.i];
  const info = infoCaixa(c.id);
  if (nivel === 'sabia') { info.caixa = Math.min(5, info.caixa + 1); baralho.sabia++; }
  else if (nivel === 'quase') { baralho.quase++; }
  else { info.caixa = 1; baralho.nao++; }
  info.vistas = (info.vistas || 0) + 1;
  info.proxima = Date.now() + dias(INTERVALOS[info.caixa]);
  info.ultima = hoje();
  estado.flash[c.id] = info; salvar();
  if (baralho.i === baralho.cards.length - 1) encerrarFlash(); else { baralho.i++; renderFlash(); }
}
$('#btn-f-acertei').addEventListener('click', () => avaliarFlash('sabia'));
$('#btn-f-quase').addEventListener('click', () => avaliarFlash('quase'));
$('#btn-f-errei').addEventListener('click', () => avaliarFlash('nao'));
$('#btn-f-encerrar').addEventListener('click', encerrarFlash);

function encerrarFlash() {
  if (!baralho) return;
  const total = baralho.sabia + baralho.quase + baralho.nao;
  $('#sessao-flash').hidden = true;
  $('#config-flash').hidden = false;
  const r = $('#resumo-flash'); r.hidden = false;
  r.innerHTML = `<h3>Revisão concluída</h3>
    <div class="cards-stats">
      <div class="stat"><b>${total}</b><span>cartas revisadas</span></div>
      <div class="stat"><b style="color:var(--ok)">${baralho.sabia}</b><span>sabia</span></div>
      <div class="stat"><b style="color:var(--meio)">${baralho.quase}</b><span>quase</span></div>
      <div class="stat"><b style="color:var(--erro)">${baralho.nao}</b><span>não sabia</span></div>
    </div>
    <p class="dica">As cartas que você não sabia voltam à caixa 1 e reaparecem já na próxima revisão; as dominadas voltam em 1, 3, 7, 16 ou 35 dias.</p>`;
  baralho = null;
  renderEstatisticas();
}

/* =========================================================================
   ARTIGOS COMENTADOS
   ========================================================================= */
function preencheParte() {
  opcoes($('#a-parte'), CP_ESTRUTURA.map(p => ({ v: p.id, t: p.nome })));
  preencheTitulo();
}
function preencheTitulo() {
  const p = CP_ESTRUTURA.find(x => x.id === $('#a-parte').value) || CP_ESTRUTURA[0];
  opcoes($('#a-titulo'), p.titulos.map(t => ({ v: t.id, t: t.nome + ' (' + t.faixa + ')' })));
  preencheCap();
}
function preencheCap() {
  const t = titAtual();
  opcoes($('#a-cap'), t.capitulos.map(c => ({ v: c.id, t: c.nome })));
  preencheArt();
}
function titAtual() {
  const p = CP_ESTRUTURA.find(x => x.id === $('#a-parte').value) || CP_ESTRUTURA[0];
  return p.titulos.find(t => t.id === $('#a-titulo').value) || p.titulos[0];
}
function preencheArt() {
  const t = titAtual();
  const c = t.capitulos.find(x => x.id === $('#a-cap').value) || t.capitulos[0];
  opcoes($('#a-art'), c.artigos.map(a => ({
    v: a[0], t: `Art. ${fmtArt(a[0])} — ${a[1]}${ARTIGOS[a[0]] ? ' ★' : ''}`
  })));
  renderFicha($('#a-art').value);
}
$('#a-parte').addEventListener('change', preencheTitulo);
$('#a-titulo').addEventListener('change', preencheCap);
$('#a-cap').addEventListener('change', preencheArt);
$('#a-art').addEventListener('change', () => renderFicha($('#a-art').value));

function abrirArtigo(n) {
  const idx = CP_INDICE[n];
  if (!idx) { renderFicha(n); return; }
  $('#a-parte').value = idx.parteId; preencheTitulo();
  $('#a-titulo').value = idx.tituloId; preencheCap();
  $('#a-cap').value = idx.capituloId; preencheArt();
  $('#a-art').value = n; renderFicha(n);
}

function renderFicha(n) {
  const alvo = $('#ficha-artigo');
  if (!n) { alvo.innerHTML = ''; return; }
  const idx = CP_INDICE[n] || {};
  const a = ARTIGOS[n];
  const jurisTema = JURISPRUDENCIA.filter(j => a && j.tema === a.tema).slice(0, 6);
  const questoesTema = QUESTOES.filter(q => a && q.tema === a.tema);

  const cabeca = `
    <div class="ficha-cabeca">
      <h2>Art. ${esc(fmtArt(n))} do Código Penal</h2>
      <p style="margin:.2rem 0;color:var(--tinta)">${esc(idx.nomen || '')}</p>
      <p class="trilha">${esc(idx.parteNome || '')} › ${esc(idx.tituloNome || '')} › ${esc(idx.capituloNome || '')}</p>
    </div>`;

  if (!a) {
    alvo.innerHTML = `<div class="ficha">${cabeca}
      <div class="bloco atencao">
        <h4>Ficha comentada em preparação</h4>
        <p>Este artigo ainda não possui explicação detalhada nesta base, que prioriza os dispositivos mais cobrados em provas. Você já tem aqui a identificação oficial do artigo e sua localização sistemática no Código.</p>
        <p class="dica">Dica de estudo: artigos marcados com ★ no seletor possuem explicação completa, exemplo prático e jurisprudência.</p>
      </div>
      <div class="acoes-ficha">
        <button class="btn" data-flash-cap="${esc(idx.capituloId || '')}">🃏 Gerar flashcards deste capítulo</button>
      </div></div>`;
    ligaAcoesFicha();
    return;
  }

  alvo.innerHTML = `<div class="ficha">
    ${cabeca}
    <div class="bloco">
      <h4>Texto legal</h4>
      <div class="lei">${ricoTexto(a.texto)}</div>
    </div>
    <div class="bloco">
      <h4>Explicação detalhada</h4>
      <ul>${a.explicacao.map(p => `<li>${ricoTexto(p)}</li>`).join('')}</ul>
    </div>
    <div class="bloco exemplo">
      <h4>Exemplo prático</h4>
      <p>${ricoTexto(a.exemplo)}</p>
    </div>
    ${a.pontos && a.pontos.length ? `<div class="bloco atencao">
      <h4>Pontos de atenção para a prova</h4>
      <ul>${a.pontos.map(p => `<li>${ricoTexto(p)}</li>`).join('')}</ul>
    </div>` : ''}
    ${(a.juris && a.juris.length) || jurisTema.length ? `<div class="bloco">
      <h4>Jurisprudência</h4>
      <div class="juris-lista">
        ${(a.juris || []).map(j => `<div class="juris-item">${ricoTexto(j)}</div>`).join('')}
        ${jurisTema.map(j => `<div class="juris-item"><b>${esc(j.fonte)}</b>${esc(j.texto)}</div>`).join('')}
      </div>
    </div>` : ''}
    <div class="acoes-ficha">
      <button class="btn btn-primario" data-questoes-tema="${esc(a.tema)}">▶ Questões sobre ${esc(a.tema)} (${questoesTema.length})</button>
      <button class="btn" data-flash-tema="${esc(a.tema)}">🃏 Flashcards deste tema</button>
      <button class="btn btn-fantasma" data-flash-cap="${esc(idx.capituloId || '')}">Flashcards do capítulo inteiro</button>
    </div>
  </div>`;
  ligaAcoesFicha();
}

function ligaAcoesFicha() {
  const bq = $('#ficha-artigo [data-questoes-tema]');
  if (bq) bq.addEventListener('click', () => {
    $('#q-tema').value = bq.dataset.questoesTema; atualizaContador();
    irPara('questoes'); $('#btn-iniciar-q').click();
  });
  const bf = $('#ficha-artigo [data-flash-tema]');
  if (bf) bf.addEventListener('click', () => {
    $('#f-fonte').value = 'tema'; $('#f-fonte').dispatchEvent(new Event('change'));
    $('#f-tema').value = bf.dataset.flashTema; atualizaContadorFlash();
    irPara('flashcards'); $('#btn-gerar-flash').click();
  });
  const bc = $('#ficha-artigo [data-flash-cap]');
  if (bc && bc.dataset.flashCap) bc.addEventListener('click', () => {
    const idCap = bc.dataset.flashCap;
    let titId = '';
    CP_ESTRUTURA.forEach(p => p.titulos.forEach(t => t.capitulos.forEach(c => { if (c.id === idCap) titId = t.id; })));
    $('#f-fonte').value = 'estrutura'; $('#f-fonte').dispatchEvent(new Event('change'));
    $('#f-titulo').value = titId; preencheFlashCap();
    $('#f-cap').value = idCap; atualizaContadorFlash();
    irPara('flashcards'); $('#btn-gerar-flash').click();
  });
}

/* busca de artigos */
$('#a-busca').addEventListener('input', function () {
  const termo = this.value.trim().toLowerCase();
  const alvo = $('#a-resultados-busca');
  if (termo.length < 2) { alvo.innerHTML = ''; return; }
  const achados = Object.values(CP_INDICE).filter(i =>
    i.numero.toLowerCase() === termo ||
    i.numero.toLowerCase().startsWith(termo) ||
    i.nomen.toLowerCase().includes(termo) ||
    (ARTIGOS[i.numero] && (ARTIGOS[i.numero].tema || '').toLowerCase().includes(termo))
  ).slice(0, 12);
  alvo.innerHTML = achados.length
    ? achados.map(i => `<button class="resultado-busca" data-art="${esc(i.numero)}">
        <b>Art. ${esc(fmtArt(i.numero))}</b> — ${esc(i.nomen)} ${ARTIGOS[i.numero] ? '★' : ''}
        <br><span class="dica">${esc(i.tituloNome)}</span></button>`).join('')
    : '<p class="dica">Nada encontrado para esse termo.</p>';
  $$('#a-resultados-busca [data-art]').forEach(b => b.addEventListener('click', () => {
    abrirArtigo(b.dataset.art);
    $('#a-busca').value = ''; alvo.innerHTML = '';
    $('#ficha-artigo').scrollIntoView({ behavior: 'smooth' });
  }));
});

/* =========================================================================
   JURISPRUDÊNCIA
   ========================================================================= */
function renderJuris() {
  const tema = $('#j-tema').value, termo = $('#j-busca').value.trim().toLowerCase();
  const itens = JURISPRUDENCIA.filter(j =>
    (!tema || j.tema === tema) &&
    (!termo || j.texto.toLowerCase().includes(termo) || j.fonte.toLowerCase().includes(termo)));
  $('#lista-juris').innerHTML = itens.length
    ? `<div class="caixa"><div class="juris-lista">${itens.map(j => `
        <div class="juris-item"><b>${esc(j.fonte)} · ${esc(j.tema)}</b>${destaque(j.texto, termo)}</div>`).join('')}</div></div>`
    : '<div class="caixa"><p class="vazio">Nenhum enunciado encontrado.</p></div>';
}
function destaque(texto, termo) {
  const e = esc(texto);
  if (!termo) return e;
  return e.replace(new RegExp('(' + termo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi'), '<mark>$1</mark>');
}
$('#j-tema').addEventListener('change', renderJuris);
$('#j-busca').addEventListener('input', renderJuris);

/* =========================================================================
   ESTATÍSTICAS
   ========================================================================= */
function renderEstatisticas() {
  const vals = Object.values(estado.respondidas);
  const acertos = vals.reduce((s, r) => s + r.acertos, 0);
  const errs = vals.reduce((s, r) => s + r.erros, 0);
  const total = acertos + errs;
  const pct = total ? Math.round(acertos / total * 100) : 0;
  const pendentes = listaErros().filter(e => !e.dominada).length;
  const dominadas = listaErros().filter(e => e.dominada).length;
  const cartas = Object.keys(estado.flash).length;
  const maduras = Object.values(estado.flash).filter(f => f.caixa >= 4).length;

  $('#stats').innerHTML = `
    <div class="stat"><b>${total}</b><span>questões respondidas</span></div>
    <div class="stat"><b>${pct}%</b><span>aproveitamento geral</span></div>
    <div class="stat"><b style="color:var(--erro)">${pendentes}</b><span>erros a revisar</span></div>
    <div class="stat"><b style="color:var(--ok)">${dominadas}</b><span>erros dominados</span></div>
    <div class="stat"><b>${cartas}</b><span>flashcards estudados</span></div>
    <div class="stat"><b>${maduras}</b><span>cartas consolidadas</span></div>`;

  const porTema = {};
  vals.forEach(r => {
    const t = r.tema || 'Outros';
    porTema[t] = porTema[t] || { a: 0, e: 0 };
    porTema[t].a += r.acertos; porTema[t].e += r.erros;
  });
  const linhas = Object.keys(porTema).sort((x, y) => {
    const px = porTema[x].a / (porTema[x].a + porTema[x].e);
    const py = porTema[y].a / (porTema[y].a + porTema[y].e);
    return px - py;
  });
  $('#desempenho-temas').innerHTML = linhas.length
    ? linhas.map(t => {
        const d = porTema[t], tt = d.a + d.e, p = Math.round(d.a / tt * 100);
        return `<div class="barra-item">
          <div class="rot"><span>${esc(t)}</span><span>${p}% · ${tt} ${tt === 1 ? 'questão' : 'questões'}</span></div>
          <div class="barra-trilha"><div class="barra-preenche" style="width:${p}%"></div></div>
        </div>`;
      }).join('')
    : '<p class="dica">Resolva algumas questões para ver aqui seus pontos fortes e fracos por tema, do mais fraco para o mais forte.</p>';
}

/* exportar / importar / zerar */
$('#btn-exportar').addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(estado, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'penalis-progresso-' + hoje() + '.json';
  a.click(); URL.revokeObjectURL(a.href);
});
$('#btn-importar').addEventListener('click', () => $('#arquivo-importar').click());
$('#arquivo-importar').addEventListener('change', function () {
  const f = this.files[0]; if (!f) return;
  const fr = new FileReader();
  fr.onload = () => {
    try {
      estado = Object.assign(JSON.parse(JSON.stringify(estadoPadrao)), JSON.parse(fr.result));
      salvar(); aplicarTema(); atualizaBadge(); renderEstatisticas(); renderErros();
      alert('Progresso importado com sucesso.');
    } catch (e) { alert('Arquivo inválido.'); }
  };
  fr.readAsText(f);
});
$('#btn-zerar').addEventListener('click', () => {
  if (!confirm('Isso apaga todo o seu histórico, caderno de erros e progresso dos flashcards. Continuar?')) return;
  const tema = estado.tema;
  estado = JSON.parse(JSON.stringify(estadoPadrao)); estado.tema = tema;
  salvar(); atualizaBadge(); renderEstatisticas(); renderErros();
});

/* =========================================================================
   INICIALIZAÇÃO
   ========================================================================= */
function preencheFlashTitulo() {
  const todos = [];
  CP_ESTRUTURA.forEach(p => p.titulos.forEach(t => todos.push({ v: t.id, t: p.sigla + ' · ' + t.nome })));
  opcoes($('#f-titulo'), todos);
  preencheFlashCap();
}
function preencheFlashCap() {
  let caps = [];
  CP_ESTRUTURA.forEach(p => p.titulos.forEach(t => {
    if (t.id === $('#f-titulo').value) caps = t.capitulos.map(c => ({ v: c.id, t: c.nome }));
  }));
  opcoes($('#f-cap'), caps);
}
$('#f-titulo').addEventListener('change', () => { preencheFlashCap(); atualizaContadorFlash(); });

function init() {
  aplicarTema();
  opcoes($('#q-tema'), TEMAS, 'Todos os temas');
  opcoes($('#e-tema'), TEMAS, 'Todos');
  opcoes($('#j-tema'), TEMAS, 'Todos');
  opcoes($('#f-tema'), TEMAS, 'Todos os temas');
  preencheParte();
  preencheFlashTitulo();
  atualizaContador();
  atualizaContadorFlash();
  atualizaBadge();
  renderEstatisticas();
  renderErros();
  renderJuris();
}
init();

})();
