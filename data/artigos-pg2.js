/* ============================================================================
 *  FICHAS DE ARTIGOS — PARTE GERAL (II): penas, medidas de segurança,
 *  ação penal e extinção da punibilidade.
 * ==========================================================================*/
const ARTIGOS_PG2 = {

'32': {
  tema: 'Penas',
  texto: 'As penas são: I – privativas de liberdade; II – restritivas de direitos; III – de multa.',
  explicacao: [
    'O CP prevê **três espécies** de pena. A CF, no art. 5º, XLVI, admite ainda perda de bens, prestação social alternativa e suspensão/interdição de direitos.',
    'A CF veda (art. 5º, XLVII) as penas de morte (salvo guerra declarada), de caráter perpétuo, de trabalhos forçados, de banimento e cruéis.'
  ],
  exemplo: 'Condenado a 2 anos por furto simples, réu primário e de bons antecedentes: o juiz fixa a pena privativa de liberdade, mas a substitui por duas restritivas de direitos (art. 44, §2º) — por exemplo, prestação de serviços à comunidade e prestação pecuniária.',
  pontos: ['Limite de cumprimento: 40 anos (art. 75, alterado pela Lei 13.964/2019).'],
  juris: []
},

'33': {
  tema: 'Penas',
  texto: 'A pena de reclusão deve ser cumprida em regime fechado, semi-aberto ou aberto. A de detenção, em regime semi-aberto, ou aberto, salvo necessidade de transferência a regime fechado. §2º As penas privativas de liberdade deverão ser executadas em forma progressiva, segundo o mérito do condenado, observados os seguintes critérios: a) o condenado a pena superior a 8 anos deverá começar a cumpri-la em regime fechado; b) o condenado não reincidente, cuja pena seja superior a 4 anos e não exceda a 8, poderá, desde o princípio, cumpri-la em regime semi-aberto; c) o condenado não reincidente, cuja pena seja igual ou inferior a 4 anos, poderá, desde o início, cumpri-la em regime aberto. §3º A determinação do regime inicial de cumprimento da pena far-se-á com observância dos critérios previstos no art. 59 deste Código.',
  explicacao: [
    'A fixação do regime inicial depende de três fatores: **quantidade de pena**, **reincidência** e **circunstâncias judiciais do art. 59**.',
    'Detenção nunca começa em regime fechado — mas pode haver **regressão** para ele.',
    'O sistema é **progressivo**: cumprido o requisito objetivo (fração da LEP, art. 112, alterado pelo Pacote Anticrime — de 16% a 70% conforme o caso) e o subjetivo (bom comportamento carcerário atestado pelo diretor), o condenado avança de regime.',
    'A gravidade abstrata do delito **não** justifica regime mais severo (Súmulas 718 e 719 do STF; 440 do STJ).'
  ],
  exemplo: 'Réu primário condenado a 6 anos de reclusão por roubo, com circunstâncias judiciais favoráveis: regime inicial **semiaberto** (art. 33, §2º, "b"). Se o juiz quisesse fixar o fechado, precisaria fundamentar em elementos concretos (ex.: violência extrema, participação em organização criminosa), e não na simples gravidade do tipo penal.',
  pontos: [
    'Súmula 440/STJ: fixada a pena-base no mínimo legal, é vedado o regime prisional mais gravoso apenas pela gravidade abstrata.',
    'Súmula 719/STF: a imposição de regime mais severo do que a pena permitir exige motivação idônea.',
    'Súmula 269/STJ: admite-se regime semiaberto a reincidente condenado a pena igual ou inferior a 4 anos, se favoráveis as circunstâncias judiciais.'
  ],
  juris: [
    'Súmulas 718 e 719 do STF; Súmulas 440 e 269 do STJ.',
    'STF (HC 111.840): é inconstitucional a obrigatoriedade do regime inicial fechado para crimes hediondos (art. 2º, §1º, da Lei 8.072/90).'
  ]
},

'42': {
  tema: 'Penas',
  texto: 'Computam-se, na pena privativa de liberdade e na medida de segurança, o tempo de prisão provisória, no Brasil ou no estrangeiro, o de prisão administrativa e o de internação em qualquer dos estabelecimentos referidos no artigo anterior.',
  explicacao: [
    '**Detração** é o desconto, na pena definitiva, do tempo de prisão cautelar já cumprido.',
    'Alcança prisão preventiva, temporária, prisão administrativa e internação. O STF admite detração de prisão cautelar sofrida em **outro processo**, desde que o fato seja anterior à prisão (evitando "crédito" para crimes futuros).',
    'A Lei 12.736/2012 permite que a detração seja feita **na própria sentença** pelo juiz do conhecimento (art. 387, §2º, do CPP), o que pode repercutir no regime inicial.',
    'Prisão domiciliar cautelar com monitoramento também vem sendo detraída pelo STJ.'
  ],
  exemplo: 'Marcos ficou 10 meses preso preventivamente e foi condenado a 6 anos de reclusão. Pelo art. 387, §2º, do CPP, o juiz desconta esses 10 meses já na sentença: a pena a considerar para o regime passa a ser de 5 anos e 2 meses, o que pode permitir regime inicial semiaberto em vez do fechado.',
  pontos: ['Detração também se aplica à pena de multa e às restritivas de direitos (analogia in bonam partem).'],
  juris: ['STF: admite-se detração com prisão cautelar de processo diverso, desde que o crime tenha sido cometido antes daquela prisão.']
},

'44': {
  tema: 'Penas',
  texto: 'As penas restritivas de direitos são autônomas e substituem as privativas de liberdade, quando: I – aplicada pena privativa de liberdade não superior a quatro anos e o crime não for cometido com violência ou grave ameaça à pessoa ou, qualquer que seja a pena aplicada, se o crime for culposo; II – o réu não for reincidente em crime doloso; III – a culpabilidade, os antecedentes, a conduta social e a personalidade do condenado, bem como os motivos e as circunstâncias indicarem que essa substituição seja suficiente.',
  explicacao: [
    'A substituição é **direito subjetivo** do réu quando presentes os requisitos — objetivos (incisos I e II) e subjetivo (inciso III).',
    '§2º: pena **até 1 ano** → substitui por multa **ou** uma restritiva; pena **superior a 1 ano** → uma restritiva + multa, ou duas restritivas.',
    '§3º: o reincidente **não específico** pode ser beneficiado, se a medida for socialmente recomendável.',
    '§4º: descumprida a restritiva, converte-se em privativa de liberdade, deduzido o tempo cumprido, respeitado o saldo mínimo de 30 dias.',
    'O STF declarou inconstitucional a vedação genérica à substituição no tráfico privilegiado (HC 97.256).'
  ],
  exemplo: 'Condenada a 3 anos por estelionato, primária e com circunstâncias favoráveis: cabe substituição por duas restritivas (ex.: prestação de serviços à comunidade + prestação pecuniária), ou por uma restritiva e multa. Se condenada a 3 anos por roubo, a substituição é vedada: houve grave ameaça à pessoa.',
  pontos: [
    'Crime culposo admite substituição **qualquer que seja a pena**.',
    'Violência contra a **coisa** não impede a substituição.',
    'Lei Maria da Penha (art. 17): vedada a substituição por prestação pecuniária/cesta básica.'
  ],
  juris: [
    'STF, HC 97.256: inconstitucional a vedação abstrata de conversão em restritivas no tráfico.',
    'Súmula 588/STJ: não se aplica a substituição por restritivas de direitos em crime de violência doméstica praticado com violência ou grave ameaça.'
  ]
},

'49': {
  tema: 'Penas',
  texto: 'A pena de multa consiste no pagamento ao fundo penitenciário da quantia fixada na sentença e calculada em dias-multa. Será, no mínimo, de 10 e, no máximo, de 360 dias-multa. §1º O valor do dia-multa será fixado pelo juiz, não podendo ser inferior a um trigésimo do maior salário mínimo mensal vigente ao tempo do fato, nem superior a 5 vezes esse salário.',
  explicacao: [
    'Sistema bifásico: primeiro o juiz fixa a **quantidade** de dias-multa (10 a 360), conforme o art. 59; depois o **valor** de cada dia-multa (1/30 a 5 salários mínimos), conforme a capacidade econômica (art. 60).',
    'O valor pode ser **triplicado** se o máximo for ineficaz em razão da situação econômica do réu (art. 60, §1º).',
    'O art. 51, com a redação da Lei 9.268/96 (e alterações da Lei 13.964/19), determina que a multa não paga seja considerada **dívida de valor**, executada perante o juízo da execução penal, aplicando-se as normas da dívida ativa — sem conversão em prisão.'
  ],
  exemplo: 'Condenado por furto a 1 ano e 10 dias-multa. O juiz fixa cada dia-multa em 1/30 do salário mínimo, considerando a hipossuficiência do réu. Não paga a multa, ela é inscrita e executada como dívida de valor — nunca convertida em prisão. Mas atenção: o STF firmou que o não pagamento **voluntário** da multa, por quem tem condições, impede a extinção da punibilidade e a progressão de regime.',
  pontos: [
    'A multa nunca se converte em prisão (art. 51).',
    'Súmula 521/STJ: a legitimidade para executar a multa é, primeiro, do MP perante a vara de execução penal (entendimento reafirmado após o Pacote Anticrime).'
  ],
  juris: [
    'STF, ADI 3.150: a legitimidade prioritária para a execução da multa é do Ministério Público, na vara de execução penal.',
    'STF: o inadimplemento deliberado da pena de multa impede a extinção da punibilidade e a progressão de regime.'
  ]
},

'59': {
  tema: 'Dosimetria da pena',
  texto: 'O juiz, atendendo à culpabilidade, aos antecedentes, à conduta social, à personalidade do agente, aos motivos, às circunstâncias e consequências do crime, bem como ao comportamento da vítima, estabelecerá, conforme seja necessário e suficiente para reprovação e prevenção do crime: I – as penas aplicáveis dentre as cominadas; II – a quantidade de pena aplicável, dentro dos limites previstos; III – o regime inicial de cumprimento da pena privativa de liberdade; IV – a substituição da pena privativa de liberdade aplicada, por outra espécie de pena, se cabível.',
  explicacao: [
    'São **oito circunstâncias judiciais**: culpabilidade, antecedentes, conduta social, personalidade, motivos, circunstâncias, consequências e comportamento da vítima.',
    'Elas orientam a **pena-base** (1ª fase da dosimetria), que jamais pode ultrapassar o máximo nem ficar abaixo do mínimo legal.',
    'Cada circunstância desfavorável deve ser **concretamente fundamentada**: fundamentação genérica gera nulidade. A jurisprudência costuma usar a fração de 1/8 do intervalo da pena por circunstância negativa como parâmetro.',
    'O comportamento da vítima só pode **favorecer** o réu, nunca prejudicá-lo.'
  ],
  exemplo: 'Furto qualificado (pena de 2 a 8 anos). O juiz considera negativas duas circunstâncias (consequências graves e culpabilidade acentuada). Intervalo: 6 anos; 1/8 = 9 meses por circunstância. Pena-base: 2 anos + 1 ano e 6 meses = 3 anos e 6 meses. Em seguida aplicam-se agravantes/atenuantes (2ª fase) e causas de aumento/diminuição (3ª fase), conforme o art. 68.',
  pontos: [
    'Súmula 444/STJ: é vedada a utilização de inquéritos policiais e ações penais em curso para agravar a pena-base.',
    'Súmula 241/STJ: a reincidência não pode ser usada na 1ª e na 2ª fase simultaneamente (bis in idem).'
  ],
  juris: [
    'Súmula 444/STJ — inquéritos e ações em curso não configuram maus antecedentes.',
    'STF, RE 593.818 (Tema 150): condenações anteriores transitadas em julgado há mais de 5 anos podem configurar maus antecedentes (não se aplica o período depurador do art. 64, I, aos antecedentes).'
  ]
},

'61': {
  tema: 'Dosimetria da pena',
  texto: 'São circunstâncias que sempre agravam a pena, quando não constituem ou qualificam o crime: I – a reincidência; II – ter o agente cometido o crime: a) por motivo fútil ou torpe; b) para facilitar ou assegurar a execução, a ocultação, a impunidade ou vantagem de outro crime; c) à traição, de emboscada, ou mediante dissimulação, ou outro recurso que dificultou ou tornou impossível a defesa do ofendido; d) com emprego de veneno, fogo, explosivo, tortura ou outro meio insidioso ou cruel, ou de que podia resultar perigo comum; e) contra ascendente, descendente, irmão ou cônjuge; f) com abuso de autoridade ou prevalecendo-se de relações domésticas, de coabitação ou de hospitalidade, ou com violência contra a mulher na forma da lei específica; g) com abuso de poder ou violação de dever inerente a cargo, ofício, ministério ou profissão; h) contra criança, maior de 60 anos, enfermo ou mulher grávida; i) quando o ofendido estava sob a imediata proteção da autoridade; j) em ocasião de incêndio, naufrágio, inundação ou qualquer calamidade pública, ou de desgraça particular do ofendido; l) em estado de embriaguez preordenada.',
  explicacao: [
    'As agravantes incidem na **2ª fase** da dosimetria e são de rol **taxativo**.',
    'A cláusula "quando não constituem ou qualificam o crime" evita o **bis in idem**: se o motivo fútil já qualifica o homicídio, não pode também agravar.',
    'As agravantes **não podem** elevar a pena acima do máximo legal (Súmula 231 do STJ trata das atenuantes, mas o raciocínio simétrico vale para o teto).',
    'O CP não fixa o quantum: a jurisprudência usa, em regra, **1/6**.'
  ],
  exemplo: 'Réu mata a vítima idosa (70 anos) por motivo torpe, tendo sido anteriormente condenado com trânsito em julgado por lesão corporal. Na 2ª fase, incidirão três agravantes: reincidência (I), motivo torpe (II, "a") e vítima maior de 60 anos (II, "h") — salvo se o motivo torpe já tiver sido utilizado como qualificadora do art. 121, §2º, I, hipótese em que não pode ser contado duas vezes.',
  pontos: [
    'Agravantes são de aplicação **obrigatória** ("sempre agravam").',
    'Não se aplicam, em regra, aos crimes culposos — exceto a reincidência.'
  ],
  juris: ['STJ: quando há mais de uma qualificadora, uma qualifica o crime e as demais podem funcionar como agravantes ou circunstâncias judiciais.']
},

'63': {
  tema: 'Dosimetria da pena',
  texto: 'Verifica-se a reincidência quando o agente comete novo crime, depois de transitar em julgado a sentença que, no País ou no estrangeiro, o tenha condenado por crime anterior.',
  explicacao: [
    'Requisitos: condenação anterior por **crime** (não contravenção, no Brasil, para gerar reincidência em crime), **trânsito em julgado** antes da prática do novo delito.',
    'O art. 64, I, prevê o **período depurador de 5 anos**: contado da data do cumprimento ou extinção da pena (incluído o período de prova do sursis ou do livramento), após o qual a condenação não gera mais reincidência.',
    'O art. 64, II, exclui os crimes militares próprios e políticos.',
    'Combinações: crime → crime = reincidência; contravenção → contravenção = reincidência (art. 7º da LCP); crime → contravenção = reincidência; contravenção → crime = **não** gera reincidência.'
  ],
  exemplo: 'João foi condenado definitivamente por furto em 2015 e extinguiu a pena em 2017. Se pratica novo crime em 2021, é reincidente (menos de 5 anos). Se o novo crime fosse em 2023, já teria decorrido o período depurador: não seria reincidente, mas a condenação anterior ainda poderia ser valorada como **maus antecedentes**, segundo o STF (Tema 150).',
  pontos: [
    'Súmula 241/STJ: a reincidência não pode agravar a pena-base e também a 2ª fase.',
    'Súmula 269/STJ: reincidente com pena até 4 anos pode iniciar no semiaberto, se favoráveis as circunstâncias.',
    'STF, RE 453.000: a reincidência é constitucional e não viola o non bis in idem.'
  ],
  juris: [
    'STF, RE 453.000 (Tema 114): constitucionalidade do instituto da reincidência.',
    'STF, RE 593.818 (Tema 150): condenação atingida pelo período depurador pode ser considerada como maus antecedentes.'
  ]
},

'65': {
  tema: 'Dosimetria da pena',
  texto: 'São circunstâncias que sempre atenuam a pena: I – ser o agente menor de 21, na data do fato, ou maior de 70 anos, na data da sentença; II – o desconhecimento da lei; III – ter o agente: a) cometido o crime por motivo de relevante valor social ou moral; b) procurado, por sua espontânea vontade e com eficiência, logo após o crime, evitar-lhe ou minorar-lhe as consequências, ou ter, antes do julgamento, reparado o dano; c) cometido o crime sob coação a que podia resistir, ou em cumprimento de ordem de autoridade superior, ou sob a influência de violenta emoção, provocada por ato injusto da vítima; d) confessado espontaneamente, perante a autoridade, a autoria do crime.',
  explicacao: [
    'As atenuantes incidem na **2ª fase** e são de aplicação obrigatória ("sempre atenuam").',
    'A atenuante **não pode reduzir a pena abaixo do mínimo legal** (Súmula 231 do STJ) — tema muito criticado pela doutrina, mas consolidado.',
    'A confissão (III, "d") vale ainda que qualificada ou parcial, se usada para fundamentar a condenação (Súmula 545 do STJ). A menoridade relativa (I) é preponderante (art. 67).'
  ],
  exemplo: 'Réu de 20 anos confessa espontaneamente o furto em juízo e a confissão é usada na sentença. Incidem duas atenuantes: menoridade relativa e confissão espontânea. Se a pena-base já estiver no mínimo legal (1 ano, no furto simples), as atenuantes **não** poderão reduzi-la, por força da Súmula 231 do STJ — mas ainda influenciam no regime e na substituição.',
  pontos: [
    'Súmula 231/STJ: atenuante não reduz a pena abaixo do mínimo legal.',
    'Súmula 545/STJ: usada a confissão para fundamentar a condenação, a atenuante deve ser reconhecida.',
    'Súmula 74/STJ: a menoridade comprova-se por documento hábil.'
  ],
  juris: ['STJ, Súmula 545; Súmula 231; Tema 585 (confissão parcial/retratada gera atenuante se usada na sentença).']
},

'68': {
  tema: 'Dosimetria da pena',
  texto: 'A pena-base será fixada atendendo-se ao critério do art. 59 deste Código; em seguida serão consideradas as circunstâncias atenuantes e agravantes; por último, as causas de diminuição e de aumento. Parágrafo único. No concurso de causas de aumento ou de diminuição previstas na parte especial, pode o juiz limitar-se a um só aumento ou a uma só diminuição, prevalecendo, todavia, a causa que mais aumente ou diminua.',
  explicacao: [
    'O CP adota o **sistema trifásico de Nelson Hungria**: (1) pena-base pelo art. 59; (2) agravantes e atenuantes; (3) causas de aumento e de diminuição.',
    'Só na **3ª fase** a pena pode ultrapassar o máximo ou ficar abaixo do mínimo legal, porque as causas de aumento/diminuição têm frações definidas em lei.',
    'Concurso entre causas da **Parte Especial**: o juiz pode aplicar só a que mais aumente/diminua (parágrafo único). Entre causas da **Parte Geral**, todas incidem.',
    'Frações sucessivas devem incidir de forma **cascata** (sobre o resultado anterior), quando há mais de uma diminuição.'
  ],
  exemplo: 'Roubo majorado tentado. 1ª fase: pena-base 4 anos e 6 meses (uma circunstância negativa). 2ª fase: confissão → volta ao mínimo, 4 anos. 3ª fase: concurso de agentes (+1/3) → 5 anos e 4 meses; depois tentativa (−1/2, pois o iter foi curto) → 2 anos e 8 meses. Perceba que só na 3ª fase a pena pôde sair dos limites legais originais.',
  pontos: ['Ordem trifásica é obrigatória — inverter a ordem gera nulidade.'],
  juris: ['STJ: a inobservância do sistema trifásico acarreta nulidade da dosimetria.']
},

'69': {
  tema: 'Concurso de crimes',
  texto: 'Quando o agente, mediante mais de uma ação ou omissão, pratica dois ou mais crimes, idênticos ou não, aplicam-se cumulativamente as penas privativas de liberdade em que haja incorrido.',
  explicacao: [
    '**Concurso material (real)**: pluralidade de condutas + pluralidade de crimes → **soma** das penas (sistema do cúmulo material).',
    'Homogêneo (crimes idênticos) ou heterogêneo (crimes diversos).',
    '§1º: aplicada pena privativa não suspensa por um crime, não cabe sursis para os demais. §2º: as restritivas de direitos compatíveis são cumpridas simultaneamente; as incompatíveis, sucessivamente.'
  ],
  exemplo: 'Em um mesmo dia, o agente furta um carro pela manhã e, à noite, pratica um estelionato. São duas condutas autônomas: as penas se somam (concurso material heterogêneo). Se, ao invadir uma casa, ele estupra a vítima e depois subtrai seus bens, também há concurso material entre estupro e roubo/furto, pois as condutas são distintas.',
  pontos: ['Cúmulo material é a regra; o concurso formal e o crime continuado são exceções benéficas.'],
  juris: ['STJ: no concurso material, a pena de cada crime deve ser individualizada antes da soma.']
},

'70': {
  tema: 'Concurso de crimes',
  texto: 'Quando o agente, mediante uma só ação ou omissão, pratica dois ou mais crimes, idênticos ou não, aplica-se-lhe a mais grave das penas cabíveis ou, se iguais, somente uma delas, mas aumentada, em qualquer caso, de um sexto até metade. As penas aplicam-se, entretanto, cumulativamente, se a ação ou omissão é dolosa e os crimes concorrentes resultam de desígnios autônomos. Parágrafo único. Não poderá a pena exceder a que seria cabível pela regra do art. 69.',
  explicacao: [
    '**Concurso formal próprio (perfeito)**: uma conduta, vários crimes, **sem** desígnios autônomos → exasperação (1/6 a 1/2).',
    '**Concurso formal impróprio (imperfeito)**: uma conduta, vários crimes, **com** desígnios autônomos (dolo direto quanto a cada resultado) → **cúmulo material**.',
    'A fração da exasperação é fixada pelo **número de crimes**: 2 crimes → 1/6; 3 → 1/5; 4 → 1/4; 5 → 1/3; 6 ou mais → 1/2.',
    'O parágrafo único traz o **concurso material benéfico**: a exasperação não pode resultar em pena maior que a simples soma.'
  ],
  exemplo: 'Motorista imprudente atropela e mata três pedestres em um único atropelamento: uma conduta, três homicídios culposos, sem desígnios autônomos → concurso formal próprio, com aumento de 1/5. Diferente: o agente coloca uma bomba querendo matar A e B, ambos presentes — uma conduta, dois resultados **queridos** → concurso formal impróprio, com soma das penas.',
  pontos: [
    'Desígnios autônomos = dolo **direto ou eventual** em relação a cada resultado (STJ).',
    'Concurso formal ≠ crime continuado (art. 71) — neste há várias condutas.'
  ],
  juris: ['STJ: a fração do concurso formal é determinada pelo número de infrações, e não pelas circunstâncias judiciais.']
},

'71': {
  tema: 'Concurso de crimes',
  texto: 'Quando o agente, mediante mais de uma ação ou omissão, pratica dois ou mais crimes da mesma espécie e, pelas condições de tempo, lugar, maneira de execução e outras semelhantes, devem os subsequentes ser havidos como continuação do primeiro, aplica-se-lhe a pena de um só dos crimes, se idênticas, ou a mais grave, se diversas, aumentada, em qualquer caso, de um sexto a dois terços. Parágrafo único. Nos crimes dolosos, contra vítimas diferentes, cometidos com violência ou grave ameaça à pessoa, poderá o juiz, considerando a culpabilidade, os antecedentes, a conduta social e a personalidade do agente, bem como os motivos e as circunstâncias, aumentar a pena de um só dos crimes, se idênticas, ou a mais grave, se diversas, até o triplo.',
  explicacao: [
    'Requisitos objetivos: pluralidade de condutas, crimes **da mesma espécie**, e os elos de **tempo** (até 30 dias, pela jurisprudência), **lugar** (mesma comarca ou comarcas próximas), **maneira de execução** e outras semelhanças.',
    'O STF e o STJ exigem também o requisito **subjetivo** (unidade de desígnio), adotando a **teoria objetivo-subjetiva** — não basta a reiteração; é preciso que os crimes seguintes sejam continuação do primeiro, e não habitualidade criminosa.',
    'A fração (1/6 a 2/3) é fixada pelo **número de crimes**: 2 → 1/6; 3 → 1/5; 4 → 1/4; 5 → 1/3; 6 → 1/2; 7 ou mais → 2/3.',
    'O parágrafo único cuida da **continuidade delitiva específica** (crimes dolosos, com violência ou grave ameaça, contra vítimas diferentes), em que o aumento vai até o **triplo**.'
  ],
  exemplo: 'Caixa de banco que, durante três meses, desvia valores todo dia 5, sempre no mesmo setor e pelo mesmo método: crime continuado — aplica-se a pena de um só peculato, aumentada conforme o número de infrações. Já o assaltante que rouba pessoas diferentes em semanas distintas, com armas e locais variados, tende a ser tratado como **habitualidade criminosa** (concurso material), pois falta unidade de desígnio.',
  pontos: [
    'Súmula 711/STF: lei mais grave se aplica ao crime continuado se vigente antes do fim da continuidade.',
    'Súmula 605/STF (superada em parte): hoje admite-se continuidade em crimes contra a vida.',
    'Crimes da mesma espécie = mesmo tipo penal (STJ), ainda que em formas simples/qualificada.'
  ],
  juris: [
    'STJ: exige-se unidade de desígnios (teoria objetivo-subjetiva) para o reconhecimento da continuidade delitiva.',
    'STJ: roubo e latrocínio não são crimes da mesma espécie; estupro e estupro de vulnerável, após a Lei 12.015/09, podem ser (a depender do caso).'
  ]
},

'73': {
  tema: 'Concurso de crimes',
  texto: 'Quando, por acidente ou erro no uso dos meios de execução, o agente, ao invés de atingir a pessoa que pretendia ofender, atinge pessoa diversa, responde como se tivesse praticado o crime contra aquela, atendendo-se ao disposto no §3º do art. 20 deste Código. No caso de ser também atingida a pessoa que o agente pretendia ofender, aplica-se a regra do art. 70 deste Código.',
  explicacao: [
    '**Aberratio ictus** (erro na execução): o agente mira A e, por falha na execução, atinge B. Responde como se tivesse atingido A — consideram-se as qualidades da **vítima virtual**.',
    'Resultado **único**: um só crime. Resultado **duplo** (atinge ambos): concurso formal.',
    'Diferença para o art. 20, §3º (erro sobre a pessoa): ali o agente confunde as pessoas (erro de representação); aqui ele identifica corretamente, mas erra a pontaria.'
  ],
  exemplo: 'João mira no pai para matá-lo, mas a bala desvia e atinge o vizinho, que morre. João responde por homicídio doloso consumado com a agravante do art. 61, II, "e" (crime contra ascendente), como se tivesse matado o pai. Se a bala atinge os dois, aplica-se o concurso formal (art. 70).',
  pontos: ['Consideram-se as condições da vítima **pretendida**, não as da vítima efetiva.'],
  juris: []
},

'75': {
  tema: 'Penas',
  texto: 'O tempo de cumprimento das penas privativas de liberdade não pode ser superior a 40 (quarenta) anos. §1º Quando o agente for condenado a penas privativas de liberdade cuja soma seja superior a 40 anos, devem elas ser unificadas para atender ao limite máximo deste artigo.',
  explicacao: [
    'A Lei 13.964/2019 (Pacote Anticrime) elevou o limite de 30 para **40 anos**, em consonância com a vedação constitucional da prisão perpétua.',
    'O limite vale para o **cumprimento**, não para a **fixação**: o juiz pode condenar a 150 anos, mas o preso cumprirá no máximo 40.',
    'A Súmula 715 do STF determina que os benefícios (progressão, livramento) sejam calculados sobre a **pena total aplicada**, e não sobre o limite unificado.',
    'O novo limite de 40 anos só se aplica a fatos praticados **após** a vigência da lei (24/01/2020), por ser mais gravoso.'
  ],
  exemplo: 'Condenado a 90 anos por vários latrocínios praticados em 2021: cumprirá no máximo 40 anos. Porém, para calcular a progressão de regime, a fração incide sobre os 90 anos (Súmula 715 do STF), e não sobre os 40.',
  pontos: ['Súmula 715/STF — benefícios calculados sobre a pena total.'],
  juris: ['Súmula 715/STF; STJ: irretroatividade do novo limite de 40 anos para fatos anteriores ao Pacote Anticrime.']
},

'77': {
  tema: 'Penas',
  texto: 'A execução da pena privativa de liberdade, não superior a 2 (dois) anos, poderá ser suspensa, por 2 (dois) a 4 (quatro) anos, desde que: I – o condenado não seja reincidente em crime doloso; II – a culpabilidade, os antecedentes, a conduta social e personalidade do agente, bem como os motivos e as circunstâncias autorizem a concessão do benefício; III – não seja indicada ou cabível a substituição prevista no art. 44 deste Código.',
  explicacao: [
    '**Sursis simples/especial**: pena até 2 anos, período de prova de 2 a 4 anos.',
    '**Sursis etário** (maior de 70 anos) e **humanitário** (razões de saúde): pena até 4 anos, período de prova de 4 a 6 anos (art. 77, §2º).',
    'É **subsidiário** à substituição por restritivas de direitos (inciso III): só cabe quando a substituição não for possível ou indicada.',
    'A condenação anterior a pena de **multa** não impede o sursis (art. 77, §1º).'
  ],
  exemplo: 'Réu condenado a 1 ano e 6 meses por crime cometido com grave ameaça (o que veda a substituição do art. 44), primário e com boas circunstâncias: cabe o sursis. No primeiro ano do período de prova, prestará serviços à comunidade ou submeter-se-á à limitação de fim de semana (art. 78, §1º), salvo se fizer jus ao sursis especial (art. 78, §2º), com condições mais brandas.',
  pontos: ['Sursis ≠ suspensão condicional do processo (art. 89 da Lei 9.099/95).'],
  juris: ['STJ: descumpridas as condições, a revogação pode ser obrigatória (art. 81, I a III) ou facultativa (§1º).']
},

'83': {
  tema: 'Penas',
  texto: 'O juiz poderá conceder livramento condicional ao condenado a pena privativa de liberdade igual ou superior a 2 (dois) anos, desde que: I – cumprida mais de um terço da pena se o condenado não for reincidente em crime doloso e tiver bons antecedentes; II – cumprida mais da metade se o condenado for reincidente em crime doloso; III – comprovado bom comportamento durante a execução da pena, não cometimento de falta grave nos últimos 12 meses, bom desempenho no trabalho e aptidão para prover a própria subsistência; IV – tenha reparado, salvo efetiva impossibilidade de fazê-lo, o dano causado pela infração; V – cumpridos mais de dois terços da pena, nos casos de condenação por crime hediondo, prática de tortura, tráfico ilícito de entorpecentes e tráfico de pessoas e terrorismo, se o apenado não for reincidente específico em crimes dessa natureza.',
  explicacao: [
    'Requisitos objetivos: pena **igual ou superior a 2 anos**, cumprimento de 1/3 (primário com bons antecedentes), 1/2 (reincidente doloso) ou 2/3 (hediondos e equiparados).',
    'Requisitos subjetivos: bom comportamento carcerário, ausência de falta grave nos últimos 12 meses (exigência do Pacote Anticrime), bom desempenho no trabalho e aptidão para a subsistência.',
    'É **vedado** ao reincidente específico em crimes hediondos ou equiparados (art. 83, V, parte final).',
    'Não se exige exame criminológico obrigatório, mas o juiz pode determiná-lo fundamentadamente (Súmula Vinculante 26 e Súmula 439 do STJ).'
  ],
  exemplo: 'Condenado primário a 9 anos por roubo majorado: após cumprir mais de 3 anos (1/3), com bom comportamento e sem falta grave nos 12 meses anteriores, pode obter livramento condicional, ficando sob período de prova pelo tempo restante da pena, com as condições do art. 132 da LEP.',
  pontos: [
    'Súmula Vinculante 26: o juiz pode exigir exame criminológico, de forma fundamentada.',
    'Falta grave interrompe o prazo para a **progressão**, mas não para o livramento (Súmula 441/STJ).'
  ],
  juris: [
    'Súmula 441/STJ: a falta grave não interrompe o prazo para obtenção de livramento condicional.',
    'Súmula 439/STJ: admite-se exame criminológico pelas peculiaridades do caso, desde que em decisão motivada.'
  ]
},

'91': {
  tema: 'Efeitos da condenação',
  texto: 'São efeitos da condenação: I – tornar certa a obrigação de indenizar o dano causado pelo crime; II – a perda em favor da União, ressalvado o direito do lesado ou de terceiro de boa-fé: a) dos instrumentos do crime, desde que consistam em coisas cujo fabrico, alienação, uso, porte ou detenção constitua fato ilícito; b) do produto do crime ou de qualquer bem ou valor que constitua proveito auferido pelo agente com a prática do fato criminoso.',
  explicacao: [
    'São efeitos **genéricos** e **automáticos** — não precisam ser declarados na sentença.',
    'O art. 387, IV, do CPP permite que o juiz fixe desde logo um **valor mínimo** de reparação.',
    'O confisco alcança o *instrumentum sceleris* ilícito e o *productum sceleris*; o §1º prevê o **confisco por equivalente** quando os bens não forem encontrados ou estiverem no exterior.',
    'O art. 91-A (Pacote Anticrime) criou a **perda alargada** em condenações por infrações com pena máxima superior a 6 anos: perde-se a diferença entre o patrimônio do condenado e aquele compatível com sua renda lícita.'
  ],
  exemplo: 'Condenado por tráfico de drogas tem confiscados a arma usada, o dinheiro obtido com a venda e o veículo adaptado para o transporte. A vítima de um estelionato, por sua vez, pode executar no cível a sentença penal condenatória — título executivo judicial (art. 515, VI, do CPC) — pelo valor mínimo fixado na sentença penal, podendo pleitear o restante em ação própria.',
  pontos: ['Efeitos genéricos: automáticos. Efeitos específicos (art. 92): exigem declaração motivada.'],
  juris: ['STJ: o confisco de instrumento lícito do crime (ex.: veículo comum) exige demonstração de destinação específica à prática criminosa.']
},

'92': {
  tema: 'Efeitos da condenação',
  texto: 'São efeitos da condenação: I – a perda de cargo, função pública ou mandato eletivo: a) quando aplicada pena privativa de liberdade por tempo igual ou superior a um ano, nos crimes praticados com abuso de poder ou violação de dever para com a Administração Pública; b) quando for aplicada pena privativa de liberdade por tempo superior a 4 (quatro) anos nos demais casos; II – a incapacidade para o exercício do pátrio poder, tutela ou curatela, nos crimes dolosos sujeitos à pena de reclusão cometidos contra outrem igualmente titular do mesmo poder familiar, contra filho, filha ou outro descendente ou contra tutelado ou curatelado; III – a inabilitação para dirigir veículo, quando utilizado como meio para a prática de crime doloso. Parágrafo único. Os efeitos de que trata este artigo não são automáticos, devendo ser motivadamente declarados na sentença.',
  explicacao: [
    'São efeitos **específicos** e **não automáticos**: exigem fundamentação expressa do juiz na sentença.',
    'A Lei de Improbidade e leis especiais (ex.: art. 1º, §5º, da Lei 9.455/97 — tortura) podem prever perda automática.',
    'Nos crimes hediondos praticados por servidor, o efeito não é automático: depende de motivação.'
  ],
  exemplo: 'Servidor condenado a 2 anos por corrupção passiva: o juiz pode decretar a perda do cargo, desde que fundamente (art. 92, I, "a"). Se a sentença nada disser, o efeito não ocorre — cabendo, contudo, o processo administrativo disciplinar autônomo.',
  pontos: ['Diferença essencial para o art. 91: **automático** (91) x **declarado** (92).'],
  juris: ['STJ: a perda do cargo exige fundamentação concreta; não decorre automaticamente da condenação.']
},

'96': {
  tema: 'Medidas de segurança',
  texto: 'As medidas de segurança são: I – internação em hospital de custódia e tratamento psiquiátrico ou, à falta, em outro estabelecimento adequado; II – sujeição a tratamento ambulatorial. Parágrafo único. Extinta a punibilidade, não se impõe medida de segurança nem subsiste a que tenha sido imposta.',
  explicacao: [
    'A medida de segurança tem natureza **preventiva** e pressuposto de **periculosidade**, não de culpabilidade.',
    'Para crimes apenados com **reclusão**, a regra é a internação; para **detenção**, o juiz pode aplicar tratamento ambulatorial (art. 97).',
    'O prazo é **indeterminado** por lei (mínimo de 1 a 3 anos), mas, sendo vedada a pena perpétua, o STF limita a 40 anos e o STJ, pela Súmula 527, ao **máximo da pena abstratamente cominada** ao delito.'
  ],
  exemplo: 'Inimputável que pratica homicídio é absolvido impropriamente e internado. O exame de cessação de periculosidade será feito ao fim do prazo mínimo fixado e, depois, anualmente. Pela Súmula 527 do STJ, a internação não poderá exceder 20 anos (máximo da pena do homicídio simples). Ao cessar a periculosidade, a desinternação é condicional por 1 ano (art. 97, §3º).',
  pontos: [
    'Súmula 527/STJ: a medida de segurança não pode superar o máximo da pena abstratamente cominada.',
    'Sistema **vicariante**: nunca se aplicam pena e medida de segurança cumulativamente.'
  ],
  juris: ['Súmula 527/STJ; STF, HC 84.219: limite de duração pela vedação da perpetuidade.']
},

'100': {
  tema: 'Ação penal',
  texto: 'A ação penal é pública, salvo quando a lei expressamente a declara privativa do ofendido. §1º A ação pública é promovida pelo Ministério Público, dependendo, quando a lei o exige, de representação do ofendido ou de requisição do Ministro da Justiça. §2º A ação de iniciativa privada é promovida mediante queixa do ofendido ou de quem tenha qualidade para representá-lo. §3º A ação de iniciativa privada pode intentar-se nos crimes de ação pública, se o Ministério Público não oferece denúncia no prazo legal.',
  explicacao: [
    'A regra é a **ação penal pública incondicionada**; as demais espécies dependem de previsão legal expressa.',
    'Espécies: pública incondicionada, pública condicionada à representação ou à requisição do Ministro da Justiça, privada (exclusiva, personalíssima e subsidiária da pública).',
    'A **ação privada subsidiária da pública** (§3º; art. 5º, LIX, da CF) cabe apenas na **inércia** do MP, nunca no arquivamento.'
  ],
  exemplo: 'A injúria (art. 140) é, em regra, de ação penal privada (art. 145). Já a lesão corporal leve exige representação (art. 88 da Lei 9.099/95) — salvo no contexto de violência doméstica contra a mulher, em que o STF (ADI 4.424) firmou ser **pública incondicionada**. Se o MP não oferece denúncia no prazo em crime de ação pública, a vítima pode apresentar queixa subsidiária.',
  pontos: [
    'Súmula 714/STF: nos crimes contra a honra de servidor em razão da função, a legitimidade é **concorrente** (queixa ou representação + denúncia).',
    'Após a Lei 13.718/2018, os crimes contra a dignidade sexual são de ação pública **incondicionada** (art. 225).'
  ],
  juris: [
    'STF, ADI 4.424: lesão corporal leve em violência doméstica contra a mulher é de ação pública incondicionada.',
    'Súmula 714/STF — legitimidade concorrente nos crimes contra a honra de funcionário público.'
  ]
},

'103': {
  tema: 'Ação penal',
  texto: 'Salvo disposição expressa em contrário, o ofendido decai do direito de queixa ou de representação se não o exerce dentro do prazo de 6 (seis) meses, contado do dia em que veio a saber quem é o autor do crime, ou, no caso do §3º do art. 100 deste Código, do dia em que se esgota o prazo para oferecimento da denúncia.',
  explicacao: [
    'A **decadência** é causa de extinção da punibilidade (art. 107, IV) e atinge o direito de queixa ou de representação.',
    'Prazo de **6 meses**, de natureza **penal** (conta-se o dia do começo, art. 10) e **improrrogável** — não se suspende nem se interrompe.',
    'Termo inicial: conhecimento da **autoria** (não do fato). Na ação privada subsidiária, conta-se do esgotamento do prazo do MP (mas aqui a decadência não extingue a punibilidade, pois o MP continua podendo denunciar).'
  ],
  exemplo: 'Vítima de calúnia descobre o autor em 1º de março. Terá até 31 de agosto para oferecer queixa. Se ajuizar em 1º de setembro, ocorreu a decadência e extingue-se a punibilidade. Repare: o prazo conta do conhecimento da autoria, ainda que o fato seja muito anterior.',
  pontos: ['Decadência ≠ prescrição ≠ perempção (esta só existe na ação privada, art. 60 do CPP).'],
  juris: []
},

'107': {
  tema: 'Extinção da punibilidade',
  texto: 'Extingue-se a punibilidade: I – pela morte do agente; II – pela anistia, graça ou indulto; III – pela retroatividade de lei que não mais considera o fato como criminoso; IV – pela prescrição, decadência ou perempção; V – pela renúncia do direito de queixa ou pelo perdão aceito, nos crimes de ação privada; VI – pela retratação do agente, nos casos em que a lei a admite; IX – pelo perdão judicial, nos casos previstos em lei.',
  explicacao: [
    'O rol do art. 107 é **exemplificativo**: há outras causas (ex.: pagamento do tributo nos crimes tributários, art. 9º, §2º, da Lei 10.684/03; casamento não mais — revogado em 2005).',
    '**Morte do agente**: exige certidão de óbito; é personalíssima (*mors omnia solvit*).',
    '**Anistia** (lei do Congresso, apaga o crime), **graça** (individual) e **indulto** (coletivo, decreto presidencial): extinguem a punibilidade, mas a anistia apaga os efeitos penais.',
    '**Perdão judicial** (IX): o juiz deixa de aplicar a pena nos casos previstos (ex.: art. 121, §5º); a sentença é declaratória e não gera reincidência (Súmula 18 do STJ).'
  ],
  exemplo: 'Pai que, dirigindo com imprudência, provoca acidente em que morre o próprio filho: o art. 121, §5º, autoriza o perdão judicial, pois as consequências do fato atingiram o agente de forma tão grave que a sanção se torna desnecessária. Extingue-se a punibilidade (art. 107, IX), sem gerar reincidência nem efeitos secundários.',
  pontos: [
    'Súmula 18/STJ: a sentença concessiva do perdão judicial é declaratória da extinção da punibilidade, não subsistindo qualquer efeito condenatório.',
    'Crimes hediondos: insuscetíveis de anistia, graça e indulto (CF, art. 5º, XLIII).'
  ],
  juris: ['Súmula 18/STJ; STF, ADI 5.874 (limites do indulto).']
},

'109': {
  tema: 'Prescrição',
  texto: 'A prescrição, antes de transitar em julgado a sentença final, salvo o disposto no §1º do art. 110 deste Código, regula-se pelo máximo da pena privativa de liberdade cominada ao crime, verificando-se: I – em 20 anos, se o máximo da pena é superior a 12; II – em 16 anos, se o máximo da pena é superior a 8 e não excede a 12; III – em 12 anos, se o máximo da pena é superior a 4 e não excede a 8; IV – em 8 anos, se o máximo da pena é superior a 2 e não excede a 4; V – em 4 anos, se o máximo da pena é igual a 1 ano ou, sendo superior, não excede a 2; VI – em 3 anos, se o máximo da pena é inferior a 1 ano.',
  explicacao: [
    'A **prescrição da pretensão punitiva (PPP) em abstrato** toma por base a **pena máxima** cominada, considerando causas de aumento (no mínimo) e de diminuição (no máximo), mas não agravantes/atenuantes (Súmula 220 do STJ, quanto à reincidência).',
    'Decorrida a PPP, extingue-se a punibilidade sem qualquer efeito: a sentença condenatória é rescindida, não gera reincidência nem obrigação de indenizar.',
    'Parágrafo único: aplicam-se às penas restritivas de direitos os mesmos prazos da privativa substituída.',
    'A Lei 12.234/2010 aboliu a **prescrição retroativa entre a data do fato e o recebimento da denúncia**.'
  ],
  exemplo: 'Furto simples (pena de 1 a 4 anos): prescreve em 8 anos (inciso IV), contados da consumação. Se entre a consumação e o recebimento da denúncia passaram 9 anos, extingue-se a punibilidade. Já se o réu era menor de 21 anos na data do fato, o prazo é reduzido pela metade (art. 115): prescreveria em 4 anos.',
  pontos: [
    'Prescrição é matéria de **ordem pública**: reconhecível de ofício, em qualquer fase.',
    'Imprescritíveis: racismo e ação de grupos armados contra a ordem constitucional (CF, art. 5º, XLII e XLIV).'
  ],
  juris: [
    'Súmula 220/STJ: a reincidência não influi no prazo da prescrição da pretensão punitiva.',
    'Súmula 438/STJ: é inadmissível a extinção da punibilidade pela prescrição antecipada (em perspectiva).'
  ]
},

'110': {
  tema: 'Prescrição',
  texto: 'A prescrição depois de transitar em julgado a sentença condenatória regula-se pela pena aplicada e verifica-se nos prazos fixados no artigo anterior, os quais se aumentam de um terço, se o condenado é reincidente. §1º A prescrição, depois da sentença condenatória com trânsito em julgado para a acusação ou depois de improvido seu recurso, regula-se pela pena aplicada, não podendo, em nenhuma hipótese, ter por termo inicial data anterior à da denúncia ou queixa.',
  explicacao: [
    'A **prescrição da pretensão executória (PPE)** regula-se pela **pena em concreto**, com aumento de 1/3 se o condenado é reincidente (a reincidência aqui influi, diferentemente da PPP — Súmula 220 do STJ).',
    'O §1º trata da **prescrição superveniente (intercorrente)** e do resquício da **retroativa**, calculadas pela pena concreta, mas nunca com termo inicial anterior à denúncia ou queixa (Lei 12.234/2010).',
    'A PPE extingue apenas a **executoriedade**: subsistem a reincidência, os maus antecedentes e a obrigação civil de indenizar.',
    'O STF (ARE 848.107, Tema 788) fixou que o termo inicial da PPE é o trânsito em julgado **para ambas as partes**.'
  ],
  exemplo: 'Réu condenado a 1 ano e 6 meses, sentença transitada para a acusação. O prazo prescricional passa a ser calculado pela pena concreta: 4 anos (art. 109, V). Se entre o recebimento da denúncia e a publicação da sentença passaram mais de 4 anos, ocorre a prescrição retroativa. Se o excesso se der após a sentença, é a superveniente.',
  pontos: [
    'PPP extingue tudo; PPE mantém efeitos secundários.',
    'STF, Tema 788: PPE conta do trânsito em julgado para ambas as partes.'
  ],
  juris: ['STF, ARE 848.107 (Tema 788); Súmula 220/STJ.']
},

'111': {
  tema: 'Prescrição',
  texto: 'A prescrição, antes de transitar em julgado a sentença final, começa a correr: I – do dia em que o crime se consumou; II – no caso de tentativa, do dia em que cessou a atividade criminosa; III – nos crimes permanentes, do dia em que cessou a permanência; IV – nos de bigamia e nos de falsificação ou alteração de assentamento do registro civil, da data em que o fato se tornou conhecido; V – nos crimes contra a dignidade sexual ou que envolvam violência contra a criança e o adolescente, da data em que a vítima completar 18 anos, salvo se a esse tempo já houver sido proposta a ação penal.',
  explicacao: [
    'A regra geral é a **teoria do resultado** para o início da prescrição (consumação), diferentemente do tempo do crime (teoria da atividade, art. 4º).',
    'Nos crimes **permanentes**, o prazo só começa quando cessa a permanência (ex.: sequestro, associação criminosa).',
    'O inciso V protege vítimas infantojuvenis de crimes sexuais: o prazo só corre a partir dos 18 anos da vítima (Lei 12.650/2012, ampliado pela Lei 14.344/2022).'
  ],
  exemplo: 'Estupro de vulnerável praticado contra criança de 8 anos em 2015: a prescrição só começa a correr quando a vítima completar 18 anos (2025), salvo se antes disso já tiver sido proposta a ação penal. Isso permite a responsabilização mesmo muito tempo depois, reconhecendo a dificuldade de revelação desses crimes.',
  pontos: ['Crime permanente: prescrição conta da **cessação**; crime habitual: do último ato.'],
  juris: []
},

'115': {
  tema: 'Prescrição',
  texto: 'São reduzidos de metade os prazos de prescrição quando o criminoso era, ao tempo do crime, menor de 21 (vinte e um) anos, ou, na data da sentença, maior de 70 (setenta) anos.',
  explicacao: [
    'Duas hipóteses de redução pela metade: **menoridade relativa** (aferida na data do fato) e **senilidade** (aferida na data da sentença).',
    'O STF entende que "sentença" abrange o **acórdão condenatório** quando este é o primeiro a condenar, mas não o acórdão que apenas confirma a condenação.',
    'A redução é automática e cumulável com outras causas.'
  ],
  exemplo: 'Réu de 20 anos comete furto simples (prescrição em 8 anos). Pelo art. 115, o prazo cai para 4 anos. Outro caso: condenado que completa 70 anos antes da sentença de primeiro grau tem o prazo reduzido pela metade; se completar 70 anos só depois, quando pendente recurso, o STF, em regra, não aplica o benefício — salvo se o acórdão for condenatório originário.',
  pontos: ['Menoridade: **data do fato**; senilidade: **data da sentença**.'],
  juris: ['STF: a redução para maiores de 70 anos considera a data da sentença condenatória, não a do acórdão meramente confirmatório.']
},

'116': {
  tema: 'Prescrição',
  texto: 'Antes de passar em julgado a sentença final, a prescrição não corre: I – enquanto não resolvida, em outro processo, questão de que dependa o reconhecimento da existência do crime; II – enquanto o agente cumpre pena no exterior; III – na pendência de embargos de declaração ou de recursos aos Tribunais Superiores, quando inadmissíveis; IV – enquanto não cumprido ou não rescindido o acordo de não persecução penal.',
  explicacao: [
    'São causas **suspensivas (impeditivas)**: cessada a causa, o prazo volta a correr de onde parou (diferente da interrupção, que zera a contagem).',
    'Os incisos III e IV foram acrescentados pela Lei 13.964/2019, para evitar que recursos protelatórios e o ANPP beneficiem o réu com a prescrição.',
    'Há outras causas fora do CP: art. 366 do CPP (réu citado por edital que não comparece), imunidade parlamentar (art. 53, §5º, da CF), suspensão condicional do processo (art. 89, §6º, da Lei 9.099/95).'
  ],
  exemplo: 'Réu é citado por edital e não comparece nem constitui advogado: suspendem-se o processo e o prazo prescricional (art. 366 do CPP). Pela Súmula 415 do STJ, o período de suspensão não pode ser indefinido — limita-se ao prazo prescricional previsto no art. 109 para o crime imputado.',
  pontos: ['Súmula 415/STJ: o prazo de suspensão do art. 366 do CPP é regulado pelo máximo da pena cominada.'],
  juris: ['Súmula 415/STJ.']
},

'117': {
  tema: 'Prescrição',
  texto: 'O curso da prescrição interrompe-se: I – pelo recebimento da denúncia ou da queixa; II – pela pronúncia; III – pela decisão confirmatória da pronúncia; IV – pela publicação da sentença ou acórdão condenatórios recorríveis; V – pelo início ou continuação do cumprimento da pena; VI – pela reincidência. §1º Excetuados os casos dos incisos V e VI, a interrupção da prescrição produz efeitos relativamente a todos os autores do crime. Nos crimes conexos, que sejam objeto do mesmo processo, estende-se aos demais a interrupção relativa a qualquer deles.',
  explicacao: [
    'Interrupção **zera** a contagem: o prazo recomeça integralmente do zero.',
    'Incisos I a IV: marcos da **pretensão punitiva**; V e VI: marcos da **pretensão executória**.',
    'O §1º consagra a **comunicabilidade** dos marcos interruptivos entre coautores e entre crimes conexos no mesmo processo (exceto V e VI, que são pessoais).',
    'O STF firmou que o **acórdão condenatório** que confirma a condenação também interrompe a prescrição (HC 176.473, Tema 788 correlato).'
  ],
  exemplo: 'Denúncia recebida em 10/03/2018 por furto simples (prazo de 8 anos): a contagem zera nessa data. Publicada a sentença condenatória em 2022, zera de novo, agora contando pela pena concreta (art. 110, §1º). Se dois réus respondem juntos, o recebimento da denúncia interrompe a prescrição para ambos.',
  pontos: [
    'Decore os 6 marcos — um dos itens mais cobrados.',
    'Recebimento de **aditamento** só interrompe se incluir novo crime.'
  ],
  juris: ['STF, HC 176.473: o acórdão condenatório sempre interrompe a prescrição, inclusive quando confirma a sentença.']
}

};
if (typeof module !== 'undefined') { module.exports = { ARTIGOS_PG2: ARTIGOS_PG2 }; }
