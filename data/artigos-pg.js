/* ============================================================================
 *  FICHAS DE ARTIGOS — PARTE GERAL
 *  Estrutura: texto legal (resumido/transcrito), explicação doutrinária,
 *  exemplo prático, pontos de atenção e jurisprudência consolidada.
 * ==========================================================================*/
const ARTIGOS_PG = {

'1': {
  tema: 'Aplicação da lei penal',
  texto: 'Não há crime sem lei anterior que o defina. Não há pena sem prévia cominação legal.',
  explicacao: [
    'O art. 1º positiva o **princípio da legalidade** (ou da reserva legal), também previsto no art. 5º, XXXIX, da CF. Ele é o alicerce do Direito Penal: somente a lei, em sentido estrito (lei ordinária ou complementar, aprovada pelo Congresso), pode criar crimes e cominar penas.',
    'A doutrina desdobra a legalidade em quatro garantias: **lex praevia** (anterioridade — proibição de retroatividade maléfica), **lex scripta** (proibição do costume incriminador), **lex stricta** (proibição da analogia *in malam partem*) e **lex certa** (princípio da taxatividade: o tipo deve ser claro e determinado).',
    'Medida provisória não pode criar crime nem agravar pena (art. 62, §1º, I, "b", da CF). Resolução, portaria ou decreto também não — salvo como complemento de **norma penal em branco**, em que o núcleo incriminador já está na lei.',
    'A analogia *in bonam partem* (favorável ao réu) é admitida, porque não viola a garantia — ela amplia o espaço de liberdade, não o de punição.'
  ],
  exemplo: 'Imagine que uma portaria do Ministério da Saúde passe a considerar "crime" a venda de determinado suplemento alimentar. Ainda que a conduta seja socialmente reprovável, não há crime: falta lei em sentido estrito. Já no art. 33 da Lei de Drogas ("importar... drogas"), a lei define o núcleo e a Portaria 344/98 da ANVISA apenas lista quais substâncias são drogas — aqui há norma penal em branco heterogênea, constitucionalmente válida, porque o Legislativo criou o tipo e o ato administrativo só o completa tecnicamente.',
  pontos: [
    'Legalidade ≠ legalidade administrativa: no Direito Penal ela é **garantia do cidadão contra o Estado**.',
    'Tipo penal excessivamente aberto viola a **taxatividade** (lex certa).',
    'Não se confunde com o princípio da anterioridade tributária.'
  ],
  juris: [
    'STF: é inconstitucional a criação de crime por medida provisória; admite-se, porém, MP que beneficie o réu.',
    'STF (RE 430.105 QO): o princípio da legalidade convive com normas penais em branco, desde que o preceito primário esteja na lei.'
  ]
},

'2': {
  tema: 'Aplicação da lei penal',
  texto: 'Ninguém pode ser punido por fato que lei posterior deixa de considerar crime, cessando em virtude dela a execução e os efeitos penais da sentença condenatória. Parágrafo único. A lei posterior, que de qualquer modo favorecer o agente, aplica-se aos fatos anteriores, ainda que decididos por sentença condenatória transitada em julgado.',
  explicacao: [
    'O caput trata da **abolitio criminis**: a lei nova que descriminaliza a conduta é causa de extinção da punibilidade (art. 107, III) e apaga todos os **efeitos penais** da condenação — a pessoa deixa de ser reincidente, sai do rol dos culpados, cessa a execução.',
    'Os **efeitos extrapenais** permanecem: a obrigação de indenizar a vítima (art. 91, I) subsiste, pois é de natureza civil.',
    'O parágrafo único consagra a **retroatividade da lei penal benéfica** (*novatio legis in mellius*), que rompe até a coisa julgada. Competência para aplicá-la após o trânsito: juízo da execução (Súmula 611 do STF).',
    'A contrario sensu, a *novatio legis in pejus* e a *novatio legis incriminadora* nunca retroagem (CF, art. 5º, XL).',
    'É vedada a **combinação de leis** (lex tertia): o juiz aplica integralmente a lei antiga ou a nova, a que for mais favorável no caso concreto.'
  ],
  exemplo: 'A Lei 11.106/2005 revogou o crime de adultério (antigo art. 240 do CP). João, condenado em 2003 a pena já transitada em julgado, teve a punibilidade extinta: não precisou cumprir o restante da pena, deixou de ostentar maus antecedentes por esse fato e não poderia ser considerado reincidente em novo processo. Contudo, a indenização civil fixada em favor da ex-cônjuge continuaria exigível. Outro exemplo: a Lei 13.654/2018 retirou a majorante do "emprego de arma branca" do roubo — quem tivesse sido condenado com esse aumento teve direito à redução, mesmo após o trânsito em julgado (depois a Lei 13.964/2019 reintroduziu a arma branca, mas apenas para fatos posteriores).',
  pontos: [
    'Abolitio criminis apaga efeitos **penais**; mantém os **civis**.',
    'Súmula 611/STF: compete ao juízo das execuções aplicar lei mais benigna após o trânsito em julgado.',
    'Vedação da lex tertia (STF, RE 600.817 — tema do art. 33, §4º, da Lei de Drogas).'
  ],
  juris: [
    'Súmula 611/STF — lei mais benigna após trânsito em julgado: juízo da execução.',
    'STF, RE 600.817: não se admite combinação de leis penais (lex tertia).',
    'STJ, Súmula 501: é cabível a aplicação retroativa da Lei 11.343/06, desde que o resultado da incidência de suas disposições, na íntegra, seja mais favorável.'
  ]
},

'3': {
  tema: 'Aplicação da lei penal',
  texto: 'A lei excepcional ou temporária, embora decorrido o período de sua duração ou cessadas as circunstâncias que a determinaram, aplica-se ao fato praticado durante sua vigência.',
  explicacao: [
    'São leis **autorrevogáveis** (ultra-ativas): a temporária traz prazo certo de vigência; a excepcional vigora enquanto durar a situação anormal (guerra, calamidade, epidemia).',
    'Elas têm **ultratividade**: continuam regendo os fatos praticados durante sua vigência mesmo depois de expiradas. Se assim não fosse, perderiam eficácia intimidativa às vésperas do fim do prazo.',
    'A doutrina majoritária entende que não há ofensa ao art. 5º, XL, da CF, porque o decurso do prazo não representa mudança de valoração do fato (não é abolitio criminis), mas exaurimento do próprio âmbito de incidência.'
  ],
  exemplo: 'Durante a pandemia, um decreto legislativo cria uma lei temporária punindo, por 12 meses, a venda de máscaras acima do preço tabelado. Maria comete a conduta no 11º mês. Encerrado o prazo da lei, Maria continua sendo processada e condenada com base nela — é a ultratividade do art. 3º. Se, porém, uma lei nova dissesse expressamente que aquela conduta jamais foi crime, aí sim haveria abolitio criminis retroativa.',
  pontos: [
    'Ultratividade é exceção à regra da irretroatividade/abolição.',
    'Não se aplica quando lei posterior **expressamente** descriminaliza a conduta em definitivo.'
  ],
  juris: [
    'STF: reconhece a constitucionalidade da ultratividade das leis temporárias e excepcionais.'
  ]
},

'4': {
  tema: 'Aplicação da lei penal',
  texto: 'Considera-se praticado o crime no momento da ação ou omissão, ainda que outro seja o momento do resultado.',
  explicacao: [
    'O CP adota a **teoria da atividade** para o tempo do crime (mnemônico: **LUTA** — Lugar: Ubiquidade; Tempo: Atividade).',
    'Consequências práticas: a lei aplicável é a vigente ao tempo da conduta; a imputabilidade é aferida na data da ação (por isso o menor que atira aos 17 anos e 364 dias responde perante o ECA, mesmo que a vítima morra depois de ele completar 18).',
    'Nos crimes permanentes e continuados, a conduta se prolonga no tempo; por isso, aplica-se a lei nova mesmo que mais gravosa, se entrou em vigor antes da cessação da permanência (Súmula 711 do STF).'
  ],
  exemplo: 'Pedro, com 17 anos e 11 meses, desfere golpes em Carlos, que morre dois meses depois, quando Pedro já completou 18 anos. Pelo art. 4º, o crime foi praticado quando Pedro ainda era inimputável: responde por ato infracional análogo ao homicídio, com medida socioeducativa, e não por homicídio no juízo criminal comum.',
  pontos: [
    'Tempo do crime = **atividade**; lugar do crime = **ubiquidade** (art. 6º).',
    'Súmula 711/STF aplica-se a crime permanente e continuado.'
  ],
  juris: [
    'Súmula 711/STF: a lei penal mais grave aplica-se ao crime continuado ou ao crime permanente, se a sua vigência é anterior à cessação da continuidade ou da permanência.'
  ]
},

'5': {
  tema: 'Aplicação da lei penal',
  texto: 'Aplica-se a lei brasileira, sem prejuízo de convenções, tratados e regras de direito internacional, ao crime cometido no território nacional. §1º Para os efeitos penais, consideram-se como extensão do território nacional as embarcações e aeronaves brasileiras, de natureza pública ou a serviço do governo brasileiro, onde quer que se encontrem, bem como as aeronaves e as embarcações brasileiras, mercantes ou de propriedade privada, que se achem, respectivamente, no espaço aéreo correspondente ou em alto-mar.',
  explicacao: [
    'Consagra-se a **territorialidade temperada** (ou mitigada): a regra é a lei brasileira, mas tratados e o direito internacional podem excepcioná-la (ex.: imunidades diplomáticas).',
    'Território nacional abrange o solo, o subsolo, as águas interiores, o mar territorial (12 milhas), o espaço aéreo correspondente e o território por extensão do §1º.',
    'Embarcação/aeronave **pública ou a serviço do governo**: é território brasileiro onde quer que esteja, inclusive em porto estrangeiro. Já as **privadas** só são extensão quando em alto-mar ou espaço aéreo correspondente.',
    'O §2º prevê a recíproca: crime a bordo de aeronave/embarcação estrangeira **privada** em pouso/porto brasileiro atrai a lei brasileira.'
  ],
  exemplo: 'Um homicídio cometido a bordo de um navio mercante brasileiro ancorado no porto de Lisboa será julgado por Portugal (territorialidade portuguesa), pois embarcação privada só é extensão do território nacional em alto-mar. Se o mesmo homicídio ocorre em um navio da Marinha do Brasil atracado em Lisboa, aplica-se a lei brasileira.',
  pontos: [
    'Imunidade diplomática é causa pessoal de exclusão de jurisdição, não excludente de crime.',
    'Embaixada estrangeira **não** é território estrangeiro (tese superada), mas é inviolável.'
  ],
  juris: [
    'STF: agente diplomático goza de imunidade de jurisdição penal (Convenção de Viena de 1961), podendo ser julgado no Estado acreditante.'
  ]
},

'6': {
  tema: 'Aplicação da lei penal',
  texto: 'Considera-se praticado o crime no lugar em que ocorreu a ação ou omissão, no todo ou em parte, bem como onde se produziu ou deveria produzir-se o resultado.',
  explicacao: [
    'Adota-se a **teoria da ubiquidade** (ou mista): o lugar do crime é tanto o da conduta quanto o do resultado.',
    'O art. 6º resolve os **crimes à distância** (ou de espaço máximo), que tocam dois países — não se confunde com a fixação de competência interna, regida pelo art. 70 do CPP (teoria do resultado).',
    'Nos crimes plurilocais (dois lugares no mesmo país), aplica-se o CPP, não o art. 6º do CP.'
  ],
  exemplo: 'Um agente no Paraguai envia, pelo correio, uma encomenda envenenada para a vítima em Foz do Iguaçu, onde ela morre. Pela ubiquidade, o crime também se considera praticado no Brasil e a lei brasileira incide (art. 5º c/c art. 6º). Já se o envenenamento ocorre em Curitiba e a vítima morre em São Paulo, o problema é de competência: pelo art. 70 do CPP, competente é o juízo do resultado (São Paulo), embora o STJ admita, em homicídios, a competência do local da conduta para facilitar a instrução.',
  pontos: [
    'LUTA: **L**ugar — **U**biquidade; **T**empo — **A**tividade.',
    'Crime à distância ≠ crime plurilocal ≠ crime de espaço mínimo.'
  ],
  juris: [
    'STJ: em homicídios, admite-se a competência do local da conduta, quando a morte ocorre em outra comarca, para melhor apuração dos fatos.'
  ]
},

'7': {
  tema: 'Aplicação da lei penal',
  texto: 'Ficam sujeitos à lei brasileira, embora cometidos no estrangeiro: I – os crimes (a) contra a vida ou a liberdade do Presidente da República; (b) contra o patrimônio ou a fé pública da União, DF, Estados, Municípios, empresas públicas, sociedade de economia mista, autarquia ou fundação instituída pelo Poder Público; (c) contra a administração pública, por quem está a seu serviço; (d) de genocídio, quando o agente for brasileiro ou domiciliado no Brasil; II – os crimes (a) que, por tratado ou convenção, o Brasil se obrigou a reprimir; (b) praticados por brasileiro; (c) praticados em aeronaves ou embarcações brasileiras, mercantes ou de propriedade privada, quando em território estrangeiro e aí não sejam julgados.',
  explicacao: [
    'O inciso I traz a **extraterritorialidade incondicionada**: a lei brasileira se aplica ainda que o agente tenha sido absolvido ou condenado no estrangeiro (art. 7º, §1º). A pena cumprida lá é compensada (art. 8º).',
    'O inciso II traz a **extraterritorialidade condicionada**, que exige, cumulativamente (§2º): entrar o agente no território nacional; ser o fato punível também no país em que praticado; estar o crime entre aqueles pelos quais a lei brasileira autoriza extradição; não ter sido o agente absolvido lá ou não ter cumprido pena; não ter sido perdoado ou extinta a punibilidade.',
    'O §3º prevê a **hipótese hipercondicionada**: crime cometido por estrangeiro contra brasileiro fora do Brasil, exigindo, além das condições do §2º, que não tenha sido pedida ou tenha sido negada a extradição e que haja requisição do Ministro da Justiça.'
  ],
  exemplo: 'Um brasileiro pratica furto em Buenos Aires e retorna ao Brasil sem ter sido processado na Argentina. Como o furto é crime nos dois países, é extraditável, o agente está no Brasil, não foi absolvido nem cumpriu pena e não houve extinção da punibilidade, ele pode responder no Brasil (art. 7º, II, "b", §2º). Já se ele mata o Presidente da República durante uma viagem oficial ao exterior, responde no Brasil independentemente de qualquer condição — e mesmo que já tenha sido condenado lá (art. 7º, I, "a", §1º).',
  pontos: [
    'Decore as **cinco condições cumulativas** do §2º — item clássico de prova.',
    'Genocídio praticado por brasileiro ou domiciliado no Brasil: incondicionada.',
    'Crime contra brasileiro por estrangeiro: hipercondicionada (§3º).'
  ],
  juris: [
    'STJ: a ausência de qualquer das condições do §2º impede a aplicação da lei brasileira, gerando falta de condição de procedibilidade.'
  ]
},

'8': {
  tema: 'Aplicação da lei penal',
  texto: 'A pena cumprida no estrangeiro atenua a pena imposta no Brasil pelo mesmo crime, quando diversas, ou nela é computada, quando idênticas.',
  explicacao: [
    'Trata-se do princípio do **non bis in idem** em sua dimensão executória: evita-se dupla punição integral pelo mesmo fato.',
    'Penas **idênticas** (ex.: prisão e prisão): há detração — desconta-se o tempo cumprido.',
    'Penas **diversas** (ex.: multa no exterior e prisão no Brasil): há atenuação, cujo quantum fica ao prudente arbítrio do juiz.'
  ],
  exemplo: 'Carlos, brasileiro, é condenado no Japão a 4 anos de prisão por estelionato e cumpre 2 anos antes de ser expulso. Processado no Brasil pelo mesmo fato (art. 7º, II, "b"), é condenado a 5 anos. Os 2 anos cumpridos no Japão são computados: restam 3 anos a cumprir.',
  pontos: ['Aplica-se tipicamente aos casos de extraterritorialidade incondicionada.'],
  juris: []
},

'10': {
  tema: 'Aplicação da lei penal',
  texto: 'O dia do começo inclui-se no cômputo do prazo. Contam-se os dias, os meses e os anos pelo calendário comum.',
  explicacao: [
    'O prazo **penal** inclui o dia do começo e exclui o do final; o prazo **processual** exclui o dia do começo e inclui o do vencimento (art. 798, §1º, do CPP).',
    'Prazo penal é **improrrogável**: se terminar em fim de semana ou feriado, está encerrado assim mesmo. Prazo processual prorroga-se para o dia útil seguinte.',
    'São prazos penais: prescrição, decadência, cumprimento de pena, sursis, livramento condicional, período depurador.'
  ],
  exemplo: 'Réu preso às 23h50 do dia 10 de março para cumprir pena de 1 ano: o dia 10 conta integralmente, ainda que só tenham restado 10 minutos. A pena termina em 9 de março do ano seguinte. Já o prazo de 5 dias para apelar, iniciado com intimação na sexta-feira, começa a contar no primeiro dia útil seguinte (prazo processual).',
  pontos: ['Regra mnemônica: prazo penal **inclui** o começo; prazo processual **exclui**.'],
  juris: ['STJ: a contagem do prazo decadencial (art. 103) é penal — inclui-se o dia do começo.']
},

'12': {
  tema: 'Aplicação da lei penal',
  texto: 'As regras gerais deste Código aplicam-se aos fatos incriminados por lei especial, se esta não dispuser de modo diverso.',
  explicacao: [
    'Consagra o **princípio da convivência das esferas autônomas**: a Parte Geral do CP é subsidiária de toda a legislação penal extravagante.',
    'Assim, conceitos como dolo, culpa, tentativa, concurso de pessoas, prescrição e causas de exclusão de ilicitude valem para a Lei de Drogas, o Estatuto do Desarmamento, a Lei Maria da Penha etc., salvo regra própria.'
  ],
  exemplo: 'A Lei 11.343/2006 não define tentativa. Aplica-se o art. 14, II, do CP à tentativa de tráfico. Mas, quanto ao livramento condicional, a lei especial traz regra própria (art. 44, parágrafo único), que prevalece sobre o art. 83 do CP.',
  pontos: ['Lei especial derroga a geral apenas no ponto em que dispuser de modo diverso.'],
  juris: []
},

'13': {
  tema: 'Teoria do crime',
  texto: 'O resultado, de que depende a existência do crime, somente é imputável a quem lhe deu causa. Considera-se causa a ação ou omissão sem a qual o resultado não teria ocorrido. §1º A superveniência de causa relativamente independente exclui a imputação quando, por si só, produziu o resultado; os fatos anteriores, entretanto, imputam-se a quem os praticou. §2º A omissão é penalmente relevante quando o omitente devia e podia agir para evitar o resultado. O dever de agir incumbe a quem: a) tenha por lei obrigação de cuidado, proteção ou vigilância; b) de outra forma, assumiu a responsabilidade de impedir o resultado; c) com seu comportamento anterior, criou o risco da ocorrência do resultado.',
  explicacao: [
    'O caput adota a **teoria da equivalência dos antecedentes causais** (*conditio sine qua non*), aferida pelo método da eliminação hipotética de Thyrén: suprimida mentalmente a conduta, o resultado desapareceria?',
    'Para evitar o regresso ao infinito, a causalidade é limitada pelo **dolo e pela culpa** (art. 18) e, modernamente, pela **teoria da imputação objetiva** (criação de risco proibido + realização do risco no resultado + resultado no âmbito de proteção da norma).',
    'O §1º cuida da **causa superveniente relativamente independente que por si só produz o resultado**: rompe-se o nexo, e o agente responde apenas pelos atos praticados (em regra, tentativa).',
    'O §2º disciplina os **crimes omissivos impróprios (comissivos por omissão)**, em que o garantidor responde pelo resultado. As três fontes do dever de garante são: lei, assunção voluntária e ingerência.'
  ],
  exemplo: 'Clássico do §1º: A atira em B, que é socorrido e levado ao hospital; durante a internação, um incêndio no hospital mata B. O incêndio é causa superveniente relativamente independente que, por si só, produziu o resultado — A responde por tentativa de homicídio. Diferente: se B morre por infecção hospitalar decorrente do ferimento, a causa está na mesma linha de desdobramento físico-causal, e A responde por homicídio consumado. Exemplo do §2º: salva-vidas contratado que, podendo agir, deixa o banhista se afogar responde por homicídio (omissão imprópria), e não por omissão de socorro.',
  pontos: [
    'Somente a causa **superveniente** e **relativamente independente** que por si só produz o resultado rompe o nexo. Causas preexistentes e concomitantes relativamente independentes **não** rompem.',
    'Causas **absolutamente** independentes sempre excluem a imputação do resultado.',
    'Omissão própria (art. 135) ≠ omissão imprópria (art. 13, §2º).'
  ],
  juris: [
    'STJ: o dever de garantidor exige demonstração concreta do poder de agir do omitente.',
    'STF/STJ: não se admite responsabilidade penal objetiva do administrador por omissão — exige-se dolo ou culpa individualizados.'
  ]
},

'14': {
  tema: 'Teoria do crime',
  texto: 'Diz-se o crime: I – consumado, quando nele se reúnem todos os elementos de sua definição legal; II – tentado, quando, iniciada a execução, não se consuma por circunstâncias alheias à vontade do agente. Parágrafo único. Salvo disposição em contrário, pune-se a tentativa com a pena correspondente ao crime consumado, diminuída de um a dois terços.',
  explicacao: [
    'A tentativa exige: (i) início da execução; (ii) não consumação; (iii) interferência de causa **alheia** à vontade do agente; (iv) dolo de consumar.',
    'O CP adota a **teoria objetiva (realística)**: pune-se a tentativa menos gravemente, porque o desvalor do resultado é menor. A redução (1/3 a 2/3) é inversamente proporcional à proximidade da consumação — quanto mais perto do resultado, menor a diminuição.',
    'Fases do *iter criminis*: cogitação (impunível), atos preparatórios (em regra impuníveis), atos de execução (puníveis), consumação e exaurimento.',
    'Espécies: tentativa **perfeita** (crime falho — esgota os meios) e **imperfeita**; **branca** (vítima ilesa) e **cruenta**.',
    'Não admitem tentativa: crimes culposos (salvo culpa imprópria), preterdolosos, unissubsistentes, omissivos próprios, habituais, de atentado (ex.: art. 352) e as contravenções (art. 4º da LCP).'
  ],
  exemplo: 'João aponta a arma e dispara três vezes contra Marcos, que é socorrido a tempo e sobrevive. Houve início de execução e não consumação por circunstância alheia (socorro médico): homicídio tentado, com redução mínima (1/3), pois o *iter* foi quase integralmente percorrido — tentativa perfeita e cruenta. Se apenas ergueu a arma e foi contido antes de mirar, a redução tende ao máximo (2/3).',
  pontos: [
    'Critério da redução: **proximidade da consumação**, não as circunstâncias do art. 59.',
    'Crime de atentado: tentativa punida com a mesma pena do consumado.'
  ],
  juris: [
    'STJ: a fração de redução da tentativa é fixada conforme o *iter criminis* percorrido, e não com base nas circunstâncias judiciais.',
    'STJ, Súmula 610: há crime de latrocínio quando o homicídio se consuma, ainda que não se realize o agente a subtração de bens da vítima.'
  ]
},

'15': {
  tema: 'Teoria do crime',
  texto: 'O agente que, voluntariamente, desiste de prosseguir na execução ou impede que o resultado se produza, só responde pelos atos já praticados.',
  explicacao: [
    'Duas figuras: **desistência voluntária** (tentativa imperfeita — o agente pode continuar, mas não quer) e **arrependimento eficaz** (tentativa perfeita — esgotou os meios e age para impedir o resultado, com sucesso).',
    'Ambas são chamadas de "ponte de ouro" (Franz von Liszt): o agente escapa da pena da tentativa e responde apenas pelos atos residuais.',
    'Fórmula de Frank: se o agente pensa "posso prosseguir, mas não quero" → desistência voluntária; "quero prosseguir, mas não posso" → tentativa.',
    'A voluntariedade não exige espontaneidade: o conselho de um terceiro não afasta o benefício, desde que a decisão final seja do agente.',
    'Se o arrependimento **não for eficaz** (a vítima morre assim mesmo), não há o benefício — mas a conduta pode servir como atenuante (art. 65, III, "b").'
  ],
  exemplo: 'Ricardo invade a casa para matar o desafeto; já com a arma apontada, comove-se e vai embora sem atirar. Não responde por tentativa de homicídio, mas responde pelos atos já praticados: violação de domicílio (art. 150) e eventual porte ilegal de arma. Arrependimento eficaz: Ana ministra veneno ao marido e, arrependida, dá-lhe o antídoto, salvando-o. Não responde por tentativa de homicídio, mas pelas lesões corporais efetivamente causadas.',
  pontos: [
    'É causa de **exclusão da tipicidade** da tentativa (teoria majoritária) — não é causa de diminuição de pena.',
    'Diferença essencial para o art. 16: aqui o resultado **não se produz**.'
  ],
  juris: ['STJ: a desistência voluntária afasta a tipicidade da tentativa, subsistindo os crimes autônomos já consumados.']
},

'16': {
  tema: 'Teoria do crime',
  texto: 'Nos crimes cometidos sem violência ou grave ameaça à pessoa, reparado o dano ou restituída a coisa, até o recebimento da denúncia ou da queixa, por ato voluntário do agente, a pena será reduzida de um a dois terços.',
  explicacao: [
    'O **arrependimento posterior** é causa geral obrigatória de diminuição de pena ("ponte de prata"), aplicada na terceira fase da dosimetria.',
    'Requisitos: (i) crime sem violência ou grave ameaça **à pessoa**; (ii) reparação integral do dano ou restituição da coisa; (iii) até o **recebimento** da denúncia ou queixa; (iv) ato voluntário.',
    'A violência **contra a coisa** não impede o benefício (ex.: furto qualificado por rompimento de obstáculo). A violência culposa também não impede, segundo entendimento majoritário (ex.: homicídio culposo no trânsito).',
    'Se a reparação ocorre **após** o recebimento da denúncia e antes do julgamento, incide apenas a atenuante do art. 65, III, "b".',
    'É circunstância **objetiva** e, portanto, comunica-se aos coautores (mesmo que só um repare o dano).'
  ],
  exemplo: 'Bruno furta um notebook e, três dias depois, arrependido, devolve o aparelho intacto à vítima — tudo antes do recebimento da denúncia. Sua pena será reduzida de 1/3 a 2/3. Se ele só devolvesse depois de já recebida a denúncia, restaria a atenuante genérica. Nos crimes contra a ordem tributária e no estelionato mediante cheque sem fundos, há regras próprias mais benéficas (extinção da punibilidade / Súmula 554 do STF).',
  pontos: [
    'A fração varia conforme a **presteza e voluntariedade** da reparação.',
    'Peculato culposo: a reparação antes da sentença irrecorrível **extingue a punibilidade** (art. 312, §3º).',
    'Súmula 554/STF: o pagamento do cheque sem fundos antes do recebimento da denúncia obsta a ação penal.'
  ],
  juris: [
    'STJ: a reparação parcial pode autorizar o benefício em grau mínimo, mas a corrente majoritária exige reparação integral.',
    'STJ, Súmula 554/STF (estelionato por cheque sem fundos).'
  ]
},

'17': {
  tema: 'Teoria do crime',
  texto: 'Não se pune a tentativa quando, por ineficácia absoluta do meio ou por absoluta impropriedade do objeto, é impossível consumar-se o crime.',
  explicacao: [
    'O CP adota a **teoria objetiva temperada (ou intermediária)**: só há crime impossível quando a ineficácia do meio ou a impropriedade do objeto forem **absolutas**. Se forem relativas, há tentativa punível.',
    'Crime impossível é causa de **exclusão da tipicidade** — o agente não responde por nada.',
    'Não se confunde com o **delito putativo por erro de proibição** (o agente supõe proibido o que é lícito) nem com o **crime provocado** (flagrante preparado).'
  ],
  exemplo: 'Tentar matar alguém com açúcar acreditando ser veneno: meio absolutamente ineficaz → crime impossível. Tentar matar quem já estava morto: objeto absolutamente impróprio → crime impossível. Diferente: a arma estava desmuniciada naquele momento, mas havia munição ao alcance — ineficácia relativa → tentativa punível. Quanto ao furto em loja com sistema de vigilância eletrônica, o STJ editou a Súmula 567: a existência de monitoramento não torna impossível o crime.',
  pontos: [
    'Súmula 145/STF: não há crime quando a preparação do flagrante pela polícia torna impossível a consumação (flagrante preparado).',
    'Súmula 567/STJ: vigilância eletrônica não afasta a tipicidade do furto tentado.'
  ],
  juris: [
    'Súmula 145/STF — flagrante preparado/provocado gera crime impossível.',
    'Súmula 567/STJ — sistema de segurança em estabelecimento comercial não torna impossível o furto.'
  ]
},

'18': {
  tema: 'Teoria do crime',
  texto: 'Diz-se o crime: I – doloso, quando o agente quis o resultado ou assumiu o risco de produzi-lo; II – culposo, quando o agente deu causa ao resultado por imprudência, negligência ou imperícia. Parágrafo único. Salvo os casos expressos em lei, ninguém pode ser punido por fato previsto como crime, senão quando o pratica dolosamente.',
  explicacao: [
    'O CP adotou a **teoria da vontade** para o dolo direto e a **teoria do assentimento (consentimento)** para o dolo eventual.',
    'Dolo direto de 1º grau: o resultado é o fim buscado. De 2º grau (consequências necessárias): o resultado é meio inevitável para atingir o fim. Eventual: o agente prevê, não quer, mas aceita ("que se dane").',
    'A culpa exige: conduta voluntária, inobservância do dever objetivo de cuidado, previsibilidade objetiva, resultado naturalístico, nexo causal e tipicidade (previsão legal expressa).',
    'A **culpa consciente** (prevê o resultado, mas confia sinceramente que não ocorrerá) distingue-se do **dolo eventual** (prevê e aceita) — essa fronteira é um dos temas mais cobrados em prova.',
    'O parágrafo único consagra a **excepcionalidade do crime culposo**: só há culpa quando a lei expressamente a prevê.'
  ],
  exemplo: 'Motorista que, em racha, atropela e mata pedestre: o STF/STJ admitem dolo eventual, pois o agente, ao disputar corrida em via pública, assume o risco do resultado. Já o motorista que trafega acima da velocidade permitida, mas sem racha, e atropela alguém em situação inesperada, responde por homicídio culposo na direção (art. 302 do CTB), pois apenas violou o dever de cuidado. Na embriaguez ao volante, o STJ afirma que a embriaguez, isoladamente, não conduz automaticamente ao dolo eventual: exige-se análise das circunstâncias concretas.',
  pontos: [
    'Culpa imprópria (por descriminante putativa vencível) é a única que admite tentativa.',
    'Crime preterdoloso = dolo no antecedente + culpa no consequente (ex.: art. 129, §3º).'
  ],
  juris: [
    'STJ: a embriaguez ao volante, por si só, não caracteriza dolo eventual — é preciso analisar as circunstâncias do caso concreto.',
    'STF: em "racha", admite-se a imputação a título de dolo eventual, competindo ao Tribunal do Júri a decisão final.'
  ]
},

'19': {
  tema: 'Teoria do crime',
  texto: 'Pelo resultado que agrava especialmente a pena, só responde o agente que o houver causado ao menos culposamente.',
  explicacao: [
    'É a **vedação da responsabilidade penal objetiva**: nos crimes qualificados pelo resultado, o resultado agravador exige, no mínimo, culpa.',
    'Antes da Reforma de 1984 vigorava o *versari in re illicita* (quem pratica ato ilícito responde por todas as consequências); hoje, isso é expressamente proibido.',
    'A fórmula clássica: sem dolo nem culpa quanto ao resultado agravador, responde-se apenas pelo crime-base.'
  ],
  exemplo: 'Em uma briga, A dá um único soco em B, que cai, bate a cabeça no meio-fio e morre. Se a morte era previsível, há lesão corporal seguida de morte (art. 129, §3º). Se o resultado era absolutamente imprevisível — por exemplo, B tinha doença rara e desconhecida que tornou fatal um leve empurrão —, A responde só por lesão corporal leve, pois não houve dolo nem culpa quanto à morte.',
  pontos: ['Aplica-se a todos os crimes qualificados pelo resultado, inclusive latrocínio e lesão seguida de morte.'],
  juris: ['STJ: a ausência de previsibilidade do resultado agravador afasta a qualificadora, subsistindo o crime-base.']
},

'20': {
  tema: 'Teoria do crime',
  texto: 'O erro sobre elemento constitutivo do tipo legal de crime exclui o dolo, mas permite a punição por crime culposo, se previsto em lei. §1º É isento de pena quem, por erro plenamente justificado pelas circunstâncias, supõe situação de fato que, se existisse, tornaria a ação legítima. Não há isenção de pena quando o erro deriva de culpa e o fato é punível como crime culposo. §2º Responde pelo crime o terceiro que determina o erro. §3º O erro quanto à pessoa contra a qual o crime é praticado não isenta de pena. Não se consideram, neste caso, as condições ou qualidades da vítima, senão as da pessoa contra quem o agente queria praticar o crime.',
  explicacao: [
    '**Erro de tipo essencial**: recai sobre elementar do tipo. Se **invencível (escusável)**, exclui dolo e culpa (fato atípico); se **vencível (inescusável)**, exclui o dolo, mas permite punição por culpa, se prevista.',
    '**Erro de tipo acidental** (sobre a pessoa, sobre o objeto, na execução, resultado diverso) não exclui o dolo — o agente responde pelo crime, considerando-se as qualidades da vítima **virtual** (§3º).',
    'O §1º trata das **descriminantes putativas fáticas**: o agente imagina uma situação de fato que, se existisse, tornaria a conduta lícita. Pela teoria limitada da culpabilidade (adotada pelo CP, conforme a Exposição de Motivos), esse é erro **de tipo permissivo**; se vencível, responde por culpa imprópria.',
    'O §2º cuida do **erro determinado por terceiro**: quem provoca dolosamente o erro responde pelo crime (autoria mediata).'
  ],
  exemplo: 'Erro de tipo: o caçador atira no que acredita ser um javali e atinge outro caçador — não há dolo de matar; se o erro era evitável com atenção normal, responde por homicídio culposo. §1º: à noite, o agente é abordado por alguém que leva a mão ao bolso e grita; ele, temendo assalto, atira. Se a suposição era plenamente justificada, é isento de pena (legítima defesa putativa); se agiu com precipitação evitável, responde por homicídio culposo (culpa imprópria). §3º: querendo matar o pai, o agente mata por engano um vizinho parecido — responde por homicídio com a agravante do art. 61, II, "e" (crime contra ascendente), pois se consideram as qualidades da vítima pretendida.',
  pontos: [
    'Erro de tipo → exclui **dolo** (tipicidade). Erro de proibição (art. 21) → afeta a **culpabilidade**.',
    'Culpa imprópria: única modalidade culposa que admite tentativa.',
    'Erro sobre a pessoa (§3º) ≠ erro na execução (art. 73).'
  ],
  juris: ['STJ: o reconhecimento de descriminante putativa exige que a suposição seja plenamente justificada pelas circunstâncias, aferidas segundo o homem médio.']
},

'21': {
  tema: 'Teoria do crime',
  texto: 'O desconhecimento da lei é inescusável. O erro sobre a ilicitude do fato, se inevitável, isenta de pena; se evitável, poderá diminuí-la de um sexto a um terço. Parágrafo único. Considera-se evitável o erro se o agente atua ou se omite sem a consciência da ilicitude do fato, quando lhe era possível, nas circunstâncias, ter ou atingir essa consciência.',
  explicacao: [
    'Distinga: **desconhecimento da lei** (inescusável; gera apenas a atenuante do art. 65, II) do **erro sobre a ilicitude** (erro de proibição), que pode isentar de pena.',
    'O CP adota a **teoria limitada da culpabilidade** e a **teoria normativa pura**: a consciência da ilicitude é **potencial** e integra a culpabilidade, e não o dolo.',
    'Erro de proibição **inevitável** → exclui a culpabilidade (isenção de pena). **Evitável** → mantém o crime, com redução de 1/6 a 1/3 (causa de diminuição, 3ª fase).',
    'Espécies: erro de proibição **direto** (desconhece a norma proibitiva), **indireto** (erro de permissão: supõe existir ou ter limites mais amplos uma causa de justificação) e **mandamental** (nos crimes omissivos).'
  ],
  exemplo: 'Holandês que chega ao Brasil e, acreditando que aqui vigora regra semelhante à de seu país, porta pequena quantidade de maconha para consumo: pode ser caso de erro de proibição, avaliada a evitabilidade. Erro de proibição indireto: o marido que, surpreendendo a esposa em adultério, acredita que o ordenamento lhe autoriza agredir o amante — supõe existir causa de justificação inexistente ("legítima defesa da honra"), tese hoje expressamente rejeitada pelo STF.',
  pontos: [
    'Art. 21 = causa de **exclusão da culpabilidade** (se inevitável) ou **diminuição de pena** (se evitável).',
    'STF (ADPF 779): a tese da "legítima defesa da honra" é inconstitucional.'
  ],
  juris: [
    'STF, ADPF 779: inconstitucionalidade da tese da legítima defesa da honra, vedada sua utilização no Tribunal do Júri.',
    'STJ: o erro de proibição deve ser aferido em concreto, considerando o grau de instrução e o meio social do agente.'
  ]
},

'22': {
  tema: 'Teoria do crime',
  texto: 'Se o fato é cometido sob coação irresistível ou em estrita obediência a ordem, não manifestamente ilegal, de superior hierárquico, só é punível o autor da coação ou da ordem.',
  explicacao: [
    'A **coação moral irresistível** (*vis compulsiva*) exclui a culpabilidade por **inexigibilidade de conduta diversa**; o coator responde pelo crime (autoria mediata).',
    'A **coação física irresistível** (*vis absoluta*) exclui a própria conduta — há atipicidade, não mera exclusão de culpabilidade.',
    'Coação **resistível** não exclui a culpabilidade: gera apenas atenuante (art. 65, III, "c").',
    'A **obediência hierárquica** exige relação de direito público (não vale entre patrão e empregado) e ordem **não manifestamente ilegal**. Se a ordem for manifestamente ilegal, ambos respondem.'
  ],
  exemplo: 'Um gerente de banco é obrigado a abrir o cofre porque sequestradores mantêm sua filha refém e ameaçam matá-la. Ele age sob coação moral irresistível: não é punível; respondem os coatores. Obediência hierárquica: o escrivão que, por ordem do delegado, lavra auto com formalidade irregular que aparentava legalidade não responde; mas se o delegado ordena que ele torture o preso, a ilegalidade é manifesta e ambos respondem.',
  pontos: [
    'Coação **física** irresistível → exclui conduta (fato atípico).',
    'Coação **moral** irresistível → exclui culpabilidade.',
    'Obediência hierárquica só em relação de **direito público**.'
  ],
  juris: ['STJ: a alegação de coação moral irresistível exige prova robusta de ameaça atual e grave, inevitável por outro meio.']
},

'23': {
  tema: 'Teoria do crime',
  texto: 'Não há crime quando o agente pratica o fato: I – em estado de necessidade; II – em legítima defesa; III – em estrito cumprimento de dever legal ou no exercício regular de direito. Parágrafo único. O agente, em qualquer das hipóteses deste artigo, responderá pelo excesso doloso ou culposo.',
  explicacao: [
    'São as **causas de exclusão da ilicitude (justificantes)** legais e genéricas. Há ainda justificantes específicas (ex.: art. 128 — aborto necessário) e a supralegal do **consentimento do ofendido** (bem disponível, titular capaz, consentimento prévio ou simultâneo).',
    'Presentes, o fato é típico, mas lícito — não há crime; afastam-se também as consequências civis, em regra (art. 188 do CC), salvo estado de necessidade agressivo contra terceiro inocente.',
    'O **excesso** pode ser doloso (responde dolosamente pelo excesso), culposo (responde por crime culposo, se previsto), exculpante (escusável — exclui culpabilidade) ou intensivo/extensivo.',
    'Estrito cumprimento de dever legal: exige dever imposto por lei (ampla) e atuação nos estritos limites. Exercício regular de direito: abrange lesões esportivas, intervenções médicas e a *offendicula*.'
  ],
  exemplo: 'Policial que, para cumprir mandado de prisão, arromba a porta do foragido age em estrito cumprimento do dever legal. Se, já com o preso algemado e rendido, desfere chutes, responde pelo excesso (lesão corporal, e eventual tortura). Cirurgião que amputa membro para salvar o paciente atua em exercício regular de direito/consentimento — fato lícito.',
  pontos: [
    'Excludentes de **ilicitude** ≠ excludentes de **culpabilidade** (arts. 21, 22, 26, 28, §1º).',
    'O excesso é sempre punível, doloso ou culposo.'
  ],
  juris: ['STF: o estrito cumprimento do dever legal não autoriza o uso desproporcional da força, sob pena de responsabilização penal do agente público.']
},

'24': {
  tema: 'Teoria do crime',
  texto: 'Considera-se em estado de necessidade quem pratica o fato para salvar de perigo atual, que não provocou por sua vontade, nem podia de outro modo evitar, direito próprio ou alheio, cujo sacrifício, nas circunstâncias, não era razoável exigir-se. §1º Não pode alegar estado de necessidade quem tinha o dever legal de enfrentar o perigo. §2º Embora seja razoável exigir-se o sacrifício do direito ameaçado, a pena poderá ser reduzida de um a dois terços.',
  explicacao: [
    'Requisitos: perigo **atual**, não provocado voluntariamente pelo agente, inevitabilidade do comportamento lesivo, proteção de direito próprio ou alheio, **inexigibilidade do sacrifício** do bem ameaçado, ausência de dever legal de enfrentar o perigo e conhecimento da situação justificante.',
    'O CP adota a **teoria unitária**: todo estado de necessidade é **justificante** (exclui a ilicitude). Se o bem sacrificado vale mais que o protegido, não há justificação — apenas a redução do §2º.',
    'Classificações: **próprio** x de terceiro; **agressivo** (sacrifica bem de terceiro inocente — gera dever de indenizar, art. 929 do CC) x **defensivo** (sacrifica bem de quem causou o perigo).',
    'O perigo pode advir de força da natureza, de animal ou de conduta humana — diferentemente da legítima defesa, que pressupõe **agressão humana injusta**.'
  ],
  exemplo: 'No naufrágio, dois náufragos disputam a única tábua capaz de sustentar um só; um deles empurra o outro, que morre. Estado de necessidade justificante (clássica *tabula unius capax*): bens de igual valor, perigo atual, inevitabilidade. Outro exemplo: motorista que, para desviar de criança que atravessa, invade loja e destrói mercadorias — não responde criminalmente pelo dano, mas o proprietário lesado poderá cobrar indenização (estado de necessidade agressivo).',
  pontos: [
    '"Dever legal de enfrentar o perigo" (§1º) não é absoluto: o bombeiro não precisa se autoimolar — exige-se apenas o risco inerente e razoável.',
    'Teoria diferenciadora (necessidade exculpante) é do Código Penal **Militar**, não do CP comum.'
  ],
  juris: ['STJ: dificuldades financeiras não configuram, por si sós, estado de necessidade apto a justificar crimes patrimoniais.']
},

'25': {
  tema: 'Teoria do crime',
  texto: 'Entende-se em legítima defesa quem, usando moderadamente dos meios necessários, repele injusta agressão, atual ou iminente, a direito seu ou de outrem. Parágrafo único. Observados os requisitos previstos no caput, considera-se também em legítima defesa o agente de segurança pública que repele agressão ou risco de agressão a vítima mantida refém durante a prática de crimes.',
  explicacao: [
    'Requisitos: **agressão injusta**, **atual ou iminente**, a direito próprio ou de terceiro, **meios necessários** (os menos lesivos disponíveis) usados com **moderação**, e conhecimento da situação (elemento subjetivo).',
    'Agressão **futura** ou **passada** afasta a excludente (seria vingança). Contra agressão de inimputável, cabe legítima defesa (a agressão é injusta, ainda que não culpável).',
    'Cabe legítima defesa **real contra putativa**, **contra excesso** e **de terceiro**. Não cabe legítima defesa real recíproca (duas agressões injustas simultâneas).',
    'A moderação é aferida no caso concreto, não se exigindo do agredido precisão matemática — mas o excesso é punível (art. 23, parágrafo único).',
    'O parágrafo único (Lei 13.964/2019) é considerado pela doutrina majoritária **norma meramente explicitante**: não cria hipótese nova nem dispensa os requisitos do caput.'
  ],
  exemplo: 'Ao ser atacada com uma faca, a vítima saca arma de fogo e dispara um tiro que atinge o agressor na perna, cessando a agressão. Há legítima defesa: meio necessário (era o único disponível) e uso moderado. Se, cessada a agressão e já o agressor caído e desarmado, ela dispara mais cinco tiros, responde pelo **excesso doloso**. Se o agredido supõe erroneamente estar sendo atacado, há legítima defesa putativa (art. 20, §1º).',
  pontos: [
    'Legítima defesa **da honra** é inconstitucional (STF, ADPF 779).',
    'Cabe legítima defesa contra agressão de inimputável e contra animal **açulado** por pessoa (se o animal ataca por conta própria, é estado de necessidade).',
    'Offendicula: doutrina majoritária vê exercício regular de direito (para alguns, legítima defesa preordenada).'
  ],
  juris: [
    'STF, ADPF 779: vedada a tese de legítima defesa da honra em qualquer fase processual, inclusive no Júri.',
    'STJ: o excesso na legítima defesa deve ser analisado à luz das circunstâncias e do estado anímico do agredido.'
  ]
},

'26': {
  tema: 'Culpabilidade',
  texto: 'É isento de pena o agente que, por doença mental ou desenvolvimento mental incompleto ou retardado, era, ao tempo da ação ou da omissão, inteiramente incapaz de entender o caráter ilícito do fato ou de determinar-se de acordo com esse entendimento. Parágrafo único. A pena pode ser reduzida de um a dois terços, se o agente, em virtude de perturbação de saúde mental ou por desenvolvimento mental incompleto ou retardado, não era inteiramente capaz de entender o caráter ilícito do fato ou de determinar-se de acordo com esse entendimento.',
  explicacao: [
    'O CP adota o **critério biopsicológico**: exige-se causa (doença/desenvolvimento incompleto) **e** a consequência (incapacidade de entender ou de se autodeterminar), aferida **ao tempo da conduta**.',
    'Inimputável → sentença **absolutória imprópria** (art. 386, parágrafo único, III, do CPP), com imposição de medida de segurança.',
    'Semi-imputável (parágrafo único) → condenação com redução de 1/3 a 2/3, ou substituição da pena por medida de segurança (art. 98) — o juiz escolhe uma ou outra, nunca as duas (vedação do sistema do duplo binário).',
    'Para os menores de 18 anos, o critério é **puramente biológico** (art. 27).'
  ],
  exemplo: 'Portador de esquizofrenia em surto psicótico mata o vizinho acreditando que ele era um demônio: a perícia atesta incapacidade total de entendimento à época. O juiz absolve impropriamente e impõe internação (art. 97). Se o laudo apontasse apenas capacidade reduzida — por exemplo, transtorno de personalidade que diminui o autocontrole —, haveria semi-imputabilidade: condenação com redução de 1/3 a 2/3 ou substituição por tratamento ambulatorial.',
  pontos: [
    'Emoção e paixão **não** excluem a imputabilidade (art. 28, I).',
    'A dependência química completa pode levar à inimputabilidade pelo art. 45 da Lei 11.343/2006.'
  ],
  juris: ['STJ: reconhecida a semi-imputabilidade, é vedado aplicar cumulativamente pena e medida de segurança (sistema vicariante).']
},

'27': {
  tema: 'Culpabilidade',
  texto: 'Os menores de 18 (dezoito) anos são penalmente inimputáveis, ficando sujeitos às normas estabelecidas na legislação especial.',
  explicacao: [
    'Critério **puramente biológico**: presunção absoluta de inimputabilidade, independentemente do discernimento concreto.',
    'A inimputabilidade é aferida ao **tempo da conduta** (art. 4º). Completar 18 anos depois não altera a situação.',
    'O adolescente (12 a 18 anos) responde por **ato infracional** e sofre medidas socioeducativas do ECA; a criança (até 12 anos incompletos) recebe medidas protetivas.',
    'A norma é também **cláusula pétrea** segundo parte da doutrina (art. 228 da CF, direito e garantia individual), o que limita propostas de redução da maioridade penal por emenda.'
  ],
  exemplo: 'Adolescente de 17 anos e 10 meses pratica roubo. Ainda que comprovadamente maduro e ciente do caráter ilícito, não responde criminalmente: será submetido a procedimento perante a Vara da Infância e Juventude, podendo receber internação por até 3 anos (art. 121, §3º, do ECA).',
  pontos: ['Maioridade penal inicia-se no **dia** do 18º aniversário, a partir do primeiro momento (00h).'],
  juris: ['Súmula 605/STJ: a superveniência da maioridade penal não interfere na apuração de ato infracional nem na aplicabilidade de medida socioeducativa em curso.']
},

'28': {
  tema: 'Culpabilidade',
  texto: 'Não excluem a imputabilidade penal: I – a emoção ou a paixão; II – a embriaguez, voluntária ou culposa, pelo álcool ou substância de efeitos análogos. §1º É isento de pena o agente que, por embriaguez completa, proveniente de caso fortuito ou força maior, era, ao tempo da ação ou da omissão, inteiramente incapaz de entender o caráter ilícito do fato ou de determinar-se de acordo com esse entendimento. §2º A pena pode ser reduzida de um a dois terços, se o agente, por embriaguez, proveniente de caso fortuito ou força maior, não possuía, ao tempo da ação ou da omissão, a plena capacidade de entender o caráter ilícito do fato ou de determinar-se de acordo com esse entendimento.',
  explicacao: [
    'A embriaguez **voluntária ou culposa** não exclui a imputabilidade por força da **teoria da actio libera in causa**: a capacidade é aferida no momento em que o agente se embriagou livremente.',
    'Somente a embriaguez **completa e acidental** (caso fortuito ou força maior) isenta de pena (§1º); se acidental e **incompleta**, reduz de 1/3 a 2/3 (§2º).',
    'A embriaguez **preordenada** (o agente se embriaga para criar coragem) é **agravante** (art. 61, II, "l").',
    'A emoção e a paixão não excluem a imputabilidade, mas podem gerar o homicídio privilegiado (art. 121, §1º) ou a atenuante do art. 65, III, "c".'
  ],
  exemplo: 'Ricardo bebe até a embriaguez completa em uma festa e, sem consciência, agride um convidado: responde normalmente pela lesão (embriaguez voluntária — actio libera in causa). Se, porém, ele foi dopado sem saber por alguém que colocou droga em sua bebida e, completamente inconsciente, causou o mesmo resultado, é isento de pena (§1º). Se bebeu para ganhar coragem e então matar o desafeto, além de responder, sofre a agravante do art. 61, II, "l".',
  pontos: [
    'Tabela: voluntária/culposa → responde; acidental completa → isento; acidental incompleta → reduz; preordenada → agrava.',
    'Embriaguez patológica equipara-se à doença mental (art. 26).'
  ],
  juris: ['STJ: a embriaguez voluntária não afasta a imputabilidade nem, por si só, caracteriza dolo eventual em crimes de trânsito.']
},

'29': {
  tema: 'Concurso de pessoas',
  texto: 'Quem, de qualquer modo, concorre para o crime incide nas penas a este cominadas, na medida de sua culpabilidade. §1º Se a participação for de menor importância, a pena pode ser diminuída de um sexto a um terço. §2º Se algum dos concorrentes quis participar de crime menos grave, ser-lhe-á aplicada a pena deste; essa pena será aumentada até metade, na hipótese de ter sido previsível o resultado mais grave.',
  explicacao: [
    'O CP adota a **teoria monista (unitária) temperada**: todos respondem pelo mesmo crime, mas na medida de sua culpabilidade.',
    'Requisitos do concurso: pluralidade de agentes e condutas, relevância causal, **liame subjetivo** (vínculo psicológico) e identidade de infração.',
    'Distinção: **coautor** executa o núcleo do tipo (ou domina funcionalmente o fato); **partícipe** concorre acessoriamente (induzindo, instigando ou auxiliando materialmente).',
    'Sobre a participação, o CP adota a **teoria da acessoriedade limitada**: basta que o fato principal seja típico e ilícito (não se exige culpabilidade do autor).',
    'O §2º cuida da **cooperação dolosamente distinta (desvio subjetivo)**: quem quis participar de crime menos grave responde por este, com aumento de até metade se o resultado mais grave era previsível.'
  ],
  exemplo: '§1º: quem apenas empresta a escada usada no furto, sem participar do plano central, pode ter a pena diminuída de 1/6 a 1/3. §2º: A e B combinam um furto em casa vazia; A fica no carro enquanto B entra. Surpreendido pelo morador, B o mata e subtrai os bens. B responde por latrocínio; A, que quis participar de crime menos grave, responde por furto com aumento de até metade se a morte era previsível — ou por latrocínio, se aderiu ao resultado.',
  pontos: [
    'Autoria mediata: o "homem de trás" usa terceiro como instrumento (coação, erro, inimputabilidade).',
    'Participação de menor importância só se aplica ao **partícipe**, nunca ao coautor.'
  ],
  juris: [
    'STJ: a minorante do art. 29, §1º, é incompatível com a coautoria — pressupõe contribuição acessória e secundária.',
    'STF: adota a teoria do domínio do fato para distinguir autoria e participação, sem presumir autoria por cargo ocupado.'
  ]
},

'30': {
  tema: 'Concurso de pessoas',
  texto: 'Não se comunicam as circunstâncias e as condições de caráter pessoal, salvo quando elementares do crime.',
  explicacao: [
    '**Circunstâncias objetivas** (meio, modo, tempo, lugar, qualidades da vítima) comunicam-se, desde que conhecidas do concorrente.',
    '**Circunstâncias subjetivas/pessoais** (motivo, reincidência, menoridade, relação de parentesco) **não** se comunicam.',
    'As **elementares** (dados que integram o tipo básico), mesmo pessoais, comunicam-se, se conhecidas pelo concorrente. É o que permite ao particular responder por peculato junto com o funcionário público.'
  ],
  exemplo: 'Um particular ajuda um servidor a desviar dinheiro público: a condição de "funcionário público" é elementar do peculato (art. 312) e se comunica — ambos respondem por peculato, desde que o particular soubesse da qualidade funcional. Já se um dos autores do homicídio é reincidente, essa circunstância pessoal não contamina o comparsa. E a qualificadora do motivo torpe (subjetiva) não se comunica automaticamente ao partícipe que desconhecia a motivação.',
  pontos: [
    'Mnemônico: **elementar comunica; circunstância pessoal não**.',
    'Infanticídio: a condição de "estado puerperal" é elementar, e a doutrina majoritária admite a comunicação a terceiro que concorre.'
  ],
  juris: ['STJ: a qualificadora do motivo fútil ou torpe, por ser subjetiva, não se comunica ao partícipe que a desconhecia.']
},

'31': {
  tema: 'Concurso de pessoas',
  texto: 'O ajuste, a determinação ou instigação e o auxílio, salvo disposição expressa em contrário, não são puníveis, se o crime não chega, pelo menos, a ser tentado.',
  explicacao: [
    'Reafirma a **acessoriedade da participação**: sem início de execução do fato principal, a conduta acessória é impunível.',
    'A ressalva "salvo disposição expressa em contrário" abrange os casos em que a lei tipifica autonomamente atos preparatórios (ex.: associação criminosa — art. 288; petrechos para falsificação — art. 291).'
  ],
  exemplo: 'Pedro instiga João a matar um desafeto e lhe entrega a arma. João desiste e nunca inicia a execução. Pedro não responde por participação em homicídio (art. 31), embora possa responder por eventual crime autônomo — por exemplo, porte ilegal de arma de fogo.',
  pontos: ['Concurso de pessoas exige, no mínimo, **tentativa** do crime principal.'],
  juris: []
}

};
if (typeof module !== 'undefined') { module.exports = { ARTIGOS_PG: ARTIGOS_PG }; }
