/* ============================================================================
 *  FICHAS DE ARTIGOS — PARTE ESPECIAL (I)
 *  Crimes contra a pessoa (arts. 121 a 154-B) e contra o patrimônio (155-183)
 * ==========================================================================*/
const ARTIGOS_PE1 = {

'121': {
  tema: 'Crimes contra a vida',
  texto: 'Matar alguém: Pena – reclusão, de 6 a 20 anos. §1º Se o agente comete o crime impelido por motivo de relevante valor social ou moral, ou sob o domínio de violenta emoção, logo em seguida a injusta provocação da vítima, o juiz pode reduzir a pena de um sexto a um terço. §2º Se o homicídio é cometido: I – mediante paga ou promessa de recompensa, ou por outro motivo torpe; II – por motivo fútil; III – com emprego de veneno, fogo, explosivo, asfixia, tortura ou outro meio insidioso ou cruel, ou de que possa resultar perigo comum; IV – à traição, de emboscada, ou mediante dissimulação ou outro recurso que dificulte ou torne impossível a defesa do ofendido; V – para assegurar a execução, a ocultação, a impunidade ou vantagem de outro crime: Pena – reclusão, de 12 a 30 anos. §3º Se o homicídio é culposo: Pena – detenção, de 1 a 3 anos.',
  explicacao: [
    'Crime **comum**, material, de forma livre, instantâneo de efeitos permanentes, plurissubsistente. Bem jurídico: a vida extrauterina. Competência do **Tribunal do Júri** (CF, art. 5º, XXXVIII, "d").',
    '**Privilégio (§1º)**: relevante valor social/moral ou domínio de violenta emoção logo após injusta provocação. É causa de diminuição; o reconhecimento pelos jurados vincula o juiz.',
    '**Qualificadoras (§2º)**: dividem-se em **subjetivas** (I, II, V — ligadas ao motivo) e **objetivas** (III e IV — meio e modo). Admite-se o **homicídio híbrido** (privilegiado-qualificado) quando a qualificadora for objetiva.',
    'Outras qualificadoras acrescentadas: §2º, VI (contra a mulher por razões da condição do sexo feminino — hoje deslocado para o art. 121-A pela Lei 14.994/2024), VII (contra autoridade/agente de segurança e familiares), VIII (com uso de arma de fogo de uso restrito ou proibido) e IX (contra menor de 14 anos).',
    'O §4º prevê aumentos: no culposo (inobservância de regra técnica, omissão de socorro, não procurar diminuir consequências, fuga); no doloso, aumento de 1/3 se contra menor de 14 ou maior de 60. §5º: **perdão judicial** no homicídio culposo. §6º: aumento de 1/3 a 1/2 se praticado por milícia privada. §7º: causas de aumento do feminicídio (hoje no art. 121-A).'
  ],
  exemplo: 'Ricardo descobre que o vizinho havia abusado de sua filha e, três dias depois, planeja e o mata. Não há privilégio: a "violenta emoção" exige que a reação seja **logo em seguida** à provocação injusta; passados três dias, houve tempo para reflexão — poderá haver, no máximo, atenuante do art. 65, III, "c". Se o matasse no exato momento em que flagrou o abuso, o privilégio seria plenamente cabível. Se, ao contrário, o matasse dormindo, após emboscada, teríamos a qualificadora objetiva do inciso IV — e, sendo o motivo de relevante valor moral, seria possível o homicídio **privilegiado-qualificado**.',
  pontos: [
    'Homicídio qualificado é **hediondo** (Lei 8.072/90); o simples não é, salvo se praticado em atividade típica de grupo de extermínio.',
    'Qualificadoras subjetivas são **incompatíveis** com o privilégio.',
    'Súmula 605/STF (hoje superada): admite-se continuidade delitiva em crimes contra a vida.'
  ],
  juris: [
    'STJ, Súmula 610: há latrocínio quando o homicídio se consuma, ainda que não se realize a subtração.',
    'STF: a qualificadora do feminicídio é de natureza objetiva, sendo compatível com o privilégio (entendimento do STJ, HC 433.898).',
    'STF, ADPF 779: vedada a tese de legítima defesa da honra.'
  ]
},

'121-A': {
  tema: 'Crimes contra a vida',
  texto: 'Matar mulher por razões da condição do sexo feminino: Pena – reclusão, de 20 a 40 anos. §1º Considera-se que há razões da condição do sexo feminino quando o crime envolve: I – violência doméstica e familiar; II – menosprezo ou discriminação à condição de mulher.',
  explicacao: [
    'A Lei 14.994/2024 transformou o feminicídio, antes qualificadora do art. 121, §2º, VI, em **crime autônomo**, com pena de 20 a 40 anos — a mais grave do Código Penal.',
    'Trata-se de **crime hediondo** e de competência do Tribunal do Júri.',
    'Para o STJ, a natureza é **objetiva** quando fundada em violência doméstica (inciso I), o que a torna compatível com o privilégio e com outras qualificadoras subjetivas.',
    'As causas de aumento incluem: crime durante a gestação ou nos 3 meses posteriores ao parto; contra menor de 14, maior de 60 ou com deficiência; na presença física ou virtual de descendente ou ascendente; em descumprimento de medidas protetivas.'
  ],
  exemplo: 'Marido que mata a esposa durante discussão doméstica responde por feminicídio (art. 121-A, §1º, I), com pena mínima de 20 anos. Se o crime ocorre na frente do filho de 8 anos, incide a causa de aumento. Note que, antes da Lei 14.994/2024, o mesmo fato seria homicídio qualificado (12 a 30 anos): a lei nova, mais gravosa, só se aplica a fatos posteriores à sua vigência.',
  pontos: [
    'Pena de 20 a 40 anos — maior pena do CP.',
    'A lei nova é irretroativa (art. 5º, XL, da CF).'
  ],
  juris: ['STJ, HC 433.898: o feminicídio tem natureza objetiva quando decorre de violência doméstica, sendo compatível com o homicídio privilegiado.']
},

'122': {
  tema: 'Crimes contra a vida',
  texto: 'Induzir ou instigar alguém a suicidar-se ou a praticar automutilação ou prestar-lhe auxílio material para que o faça: Pena – reclusão, de 6 meses a 2 anos. §1º Se da automutilação ou da tentativa de suicídio resulta lesão corporal de natureza grave ou gravíssima: Pena – reclusão, de 1 a 3 anos. §2º Se o suicídio se consuma ou se da automutilação resulta morte: Pena – reclusão, de 2 a 6 anos.',
  explicacao: [
    'A Lei 13.968/2019 reformulou o tipo: hoje o crime se **consuma com o mero induzimento, instigação ou auxílio**, independentemente de resultado — é crime formal, com resultados que funcionam como qualificadoras (§§1º e 2º).',
    'Condutas: **induzir** (criar a ideia), **instigar** (reforçar ideia existente) e **auxiliar** (ajuda material). Auxílio **moral** não configura o auxílio típico, mas pode ser instigação.',
    'Causas de aumento: motivo egoístico, torpe ou fútil; vítima menor ou com capacidade de resistência diminuída (dobra a pena); crime praticado por meio da rede social ou transmitido em tempo real.',
    'Se a vítima é menor de 14 anos ou não tem discernimento, o agente responde por **homicídio** (art. 122, §7º).'
  ],
  exemplo: 'Administrador de grupo on-line que incentiva adolescentes a praticarem automutilação responde pelo art. 122 com pena dobrada (vítimas menores) e aumentada pela divulgação em rede social — ainda que nenhum deles chegue a se ferir, pois o crime é formal. Se a vítima tivesse 12 anos e efetivamente morresse, o responsável responderia por homicídio.',
  pontos: ['Antes de 2019 o crime era material (exigia morte ou lesão grave); hoje é formal.'],
  juris: []
},

'123': {
  tema: 'Crimes contra a vida',
  texto: 'Matar, sob a influência do estado puerperal, o próprio filho, durante o parto ou logo após: Pena – detenção, de 2 a 6 anos.',
  explicacao: [
    'Crime **próprio** (só a mãe pode ser autora), com três elementares: **estado puerperal**, **relação de parentesco** e o **elemento temporal** ("durante o parto ou logo após").',
    'Trata-se de homicídio privilegiado por natureza — o legislador adotou o critério **fisiopsicológico**.',
    'O estado puerperal é elementar e, pelo art. 30 do CP, **comunica-se** ao terceiro que concorre — o partícipe responde por infanticídio (posição majoritária).',
    'Se a mãe mata o filho fora do lapso temporal ou sem a influência do puerpério, responde por homicídio qualificado.'
  ],
  exemplo: 'Após parto domiciliar, a mãe, sob influência do estado puerperal, sufoca o recém-nascido. Responde por infanticídio (2 a 6 anos), e não por homicídio qualificado. Se a avó, sabendo do estado da filha, a auxilia materialmente a matar o bebê, responde também por infanticídio — pela comunicabilidade da elementar (art. 30). Se, porém, é a avó quem mata, com a mãe apenas auxiliando, a doutrina majoritária faz a avó responder por homicídio.',
  pontos: ['Competência do Júri. Não se admite a forma culposa.'],
  juris: []
},

'128': {
  tema: 'Crimes contra a vida',
  texto: 'Não se pune o aborto praticado por médico: I – se não há outro meio de salvar a vida da gestante; II – se a gravidez resulta de estupro e o aborto é precedido de consentimento da gestante ou, quando incapaz, de seu representante legal.',
  explicacao: [
    'São as duas hipóteses legais de aborto lícito: **necessário (terapêutico)** e **humanitário (sentimental)**.',
    'A natureza jurídica é discutida: para a maioria, são **causas específicas de exclusão da ilicitude**; para outros, escusas absolutórias.',
    'Não se exige autorização judicial nem boletim de ocorrência para o aborto humanitário — basta o consentimento; o Ministério da Saúde regulamenta o procedimento.',
    'O STF, na ADPF 54, acrescentou uma **terceira hipótese jurisprudencial**: a interrupção da gravidez de feto **anencéfalo**, por atipicidade da conduta.'
  ],
  exemplo: 'Gestante vítima de estupro, com 10 semanas de gravidez, procura a rede pública: o médico pode realizar o procedimento mediante o consentimento dela, sem necessidade de decisão judicial ou inquérito concluído. Já no caso de gravidez de feto anencéfalo, a interrupção é atípica segundo o STF, por não haver potencialidade de vida extrauterina.',
  pontos: ['O aborto só é lícito quando praticado por **médico** (salvo estado de necessidade em situações-limite).'],
  juris: [
    'STF, ADPF 54: a interrupção da gravidez de feto anencéfalo é atípica.',
    'STF, HC 124.306: voto (não vinculante) pela atipicidade do aborto no 1º trimestre — não é entendimento consolidado.'
  ]
},

'129': {
  tema: 'Crimes contra a pessoa',
  texto: 'Ofender a integridade corporal ou a saúde de outrem: Pena – detenção, de 3 meses a 1 ano. §1º Se resulta: I – incapacidade para as ocupações habituais, por mais de 30 dias; II – perigo de vida; III – debilidade permanente de membro, sentido ou função; IV – aceleração de parto: Pena – reclusão, de 1 a 5 anos. §2º Se resulta: I – incapacidade permanente para o trabalho; II – enfermidade incurável; III – perda ou inutilização de membro, sentido ou função; IV – deformidade permanente; V – aborto: Pena – reclusão, de 2 a 8 anos. §3º Se resulta morte e as circunstâncias evidenciam que o agente não quis o resultado, nem assumiu o risco de produzi-lo: Pena – reclusão, de 4 a 12 anos.',
  explicacao: [
    'Classificação: lesão **leve** (caput), **grave** (§1º), **gravíssima** (§2º — nomenclatura doutrinária) e **seguida de morte** (§3º, crime preterdoloso).',
    'A lesão **culposa** está no §6º (detenção de 2 meses a 1 ano). O §7º traz aumentos e o §8º permite perdão judicial.',
    'O §9º tipifica a **lesão corporal em contexto de violência doméstica** (detenção de 1 a 3 anos, hoje com pena majorada pela Lei 14.994/2024 para reclusão), e o §13 a lesão praticada contra a mulher por razões da condição do sexo feminino.',
    'Distinção fundamental: lesão seguida de morte (preterdolo — dolo de lesionar + culpa na morte) x homicídio doloso (dolo de matar, inclusive eventual) x homicídio culposo (nenhum dolo).'
  ],
  exemplo: 'Em briga de bar, A desfere garrafada no rosto de B, causando cicatriz permanente e visível: lesão **gravíssima** por deformidade permanente (§2º, IV), pena de 2 a 8 anos. Se B, em razão do ferimento, viesse a morrer sem que A quisesse ou assumisse esse risco, haveria lesão seguida de morte (§3º), com pena de 4 a 12 anos — e não homicídio.',
  pontos: [
    'Lesão leve e culposa: ação penal pública **condicionada** (art. 88 da Lei 9.099/95); em violência doméstica contra a mulher, é **incondicionada** (ADI 4.424).',
    'Súmula 542/STJ: a ação penal na lesão corporal decorrente de violência doméstica contra a mulher é pública incondicionada.'
  ],
  juris: [
    'Súmula 542/STJ.',
    'STF, ADI 4.424: afastada a exigência de representação na lesão leve em violência doméstica.'
  ]
},

'135': {
  tema: 'Periclitação da vida',
  texto: 'Deixar de prestar assistência, quando possível fazê-lo sem risco pessoal, à criança abandonada ou extraviada, ou à pessoa inválida ou ferida, ao desamparo ou em grave e iminente perigo; ou não pedir, nesses casos, o socorro da autoridade pública: Pena – detenção, de 1 a 6 meses, ou multa. Parágrafo único. A pena é aumentada de metade, se da omissão resulta lesão corporal de natureza grave, e triplicada, se resulta a morte.',
  explicacao: [
    'Crime **omissivo próprio** (puro): consuma-se com a simples omissão, independentemente de resultado. Por isso **não admite tentativa**.',
    'Não se confunde com a omissão imprópria (art. 13, §2º): aqui o agente **não é garantidor**; é um dever genérico de solidariedade.',
    'Se o omitente for garantidor, responde pelo resultado (homicídio, por exemplo), e não por omissão de socorro.',
    'O parágrafo único traz **majorantes** (não qualificadoras): a lesão grave ou a morte devem decorrer da omissão.'
  ],
  exemplo: 'Transeunte encontra vítima de atropelamento caída na via e segue seu caminho sem chamar ajuda, embora pudesse fazê-lo sem risco. Responde por omissão de socorro. Se a vítima morre em razão da demora no atendimento, a pena é triplicada. Diferente: se o próprio motorista atropelador deixa a vítima sem socorro, ele é garantidor por ingerência — e, no trânsito, incide o art. 304 do CTB ou a majorante do art. 121, §4º.',
  pontos: ['Omissivo próprio não admite tentativa; a majorante exige nexo entre a omissão e o resultado.'],
  juris: []
},

'138': {
  tema: 'Crimes contra a honra',
  texto: 'Caluniar alguém, imputando-lhe falsamente fato definido como crime: Pena – detenção, de 6 meses a 2 anos, e multa. §1º Na mesma pena incorre quem, sabendo falsa a imputação, a propala ou divulga. §2º É punível a calúnia contra os mortos. §3º Admite-se a prova da verdade, salvo: I – se, constituindo o fato imputado crime de ação privada, o ofendido não foi condenado por sentença irrecorrível; II – se o fato é imputado ao Presidente da República ou a chefe de governo estrangeiro; III – se do crime imputado, embora de ação pública, o ofendido foi absolvido por sentença irrecorrível.',
  explicacao: [
    'Protege-se a **honra objetiva** (reputação): consuma-se quando terceiro toma conhecimento.',
    'Elementos: imputação de **fato determinado**, **definido como crime**, **falso** (falsidade do fato ou da autoria), com **dolo de caluniar** (*animus caluniandi*).',
    'Imputar contravenção penal não é calúnia — é difamação.',
    'Admite-se a **exceção da verdade** (§3º), com as três ressalvas. Se o fato é verdadeiro, não há crime.'
  ],
  exemplo: 'Vereador afirma em rede social que determinado servidor "desviou R$ 100 mil do caixa da prefeitura", sabendo ser falso: calúnia. Se afirmasse apenas que o servidor é "desonesto", seria injúria (juízo de valor). Se dissesse que ele "foi visto em uma casa de jogos" (contravenção), seria difamação.',
  pontos: [
    'Calúnia = fato **criminoso** falso; difamação = fato **ofensivo à reputação**; injúria = **qualidade negativa** (xingamento).',
    'Cabe calúnia contra os mortos (§2º) — mas não difamação nem injúria.'
  ],
  juris: ['Súmula 714/STF: legitimidade concorrente nos crimes contra a honra de servidor em razão do exercício funcional.']
},

'140': {
  tema: 'Crimes contra a honra',
  texto: 'Injuriar alguém, ofendendo-lhe a dignidade ou o decoro: Pena – detenção, de 1 a 6 meses, ou multa. §1º O juiz pode deixar de aplicar a pena: I – quando o ofendido, de forma reprovável, provocou diretamente a injúria; II – no caso de retorsão imediata, que consista em outra injúria. §2º Se a injúria consiste em violência ou vias de fato, que, por sua natureza ou meio empregado, se considerem aviltantes: Pena – detenção, de 3 meses a 1 ano, e multa, além da pena correspondente à violência.',
  explicacao: [
    'Protege-se a **honra subjetiva** (autoestima, dignidade e decoro). Consuma-se quando a vítima toma conhecimento.',
    'Não se admite exceção da verdade (salvo exceção doutrinária), pois se trata de juízo de valor, não de fato.',
    'O §1º prevê **perdão judicial** nas hipóteses de provocação e retorsão imediata.',
    'A **injúria racial** (antigo §3º) foi, pela Lei 14.532/2023, deslocada para a Lei 7.716/89 (art. 2º-A), passando a ser tratada como crime de **racismo**: imprescritível, inafiançável e de ação penal pública incondicionada.'
  ],
  exemplo: 'Chamar alguém de "incompetente" em reunião: injúria simples. Ofender pessoa utilizando expressões referentes à sua cor ou origem: hoje configura injúria racial nos moldes do art. 2º-A da Lei 7.716/89, com pena de reclusão de 2 a 5 anos e multa, imprescritível — alteração relevante da Lei 14.532/2023.',
  pontos: [
    'Honra objetiva (calúnia/difamação) x subjetiva (injúria).',
    'Injúria racial migrou para a Lei do Racismo (Lei 14.532/2023).'
  ],
  juris: ['STF, HC 154.248: a injúria racial é espécie do gênero racismo, sendo imprescritível.']
},

'146': {
  tema: 'Liberdade individual',
  texto: 'Constranger alguém, mediante violência ou grave ameaça, ou depois de lhe haver reduzido, por qualquer outro meio, a capacidade de resistência, a não fazer o que a lei permite, ou a fazer o que ela não manda: Pena – detenção, de 3 meses a 1 ano, ou multa.',
  explicacao: [
    'Crime **subsidiário**: só se aplica quando o constrangimento não constitui elementar de crime mais grave (roubo, extorsão, estupro).',
    'Protege-se a **liberdade de autodeterminação**.',
    'O §3º exclui do tipo a intervenção médica ou cirúrgica sem consentimento, se justificada por iminente perigo de vida, e a coação exercida para impedir suicídio.'
  ],
  exemplo: 'Patrão que, mediante ameaça de demissão acompanhada de agressão, obriga o empregado a assinar pedido de demissão: constrangimento ilegal. Se a finalidade fosse obter vantagem econômica indevida, o crime seria **extorsão** (art. 158). Se fosse subtrair bem imediatamente, **roubo** (art. 157) — daí a subsidiariedade.',
  pontos: ['Crime subsidiário expresso quanto às formas mais graves.'],
  juris: []
},

'147-A': {
  tema: 'Liberdade individual',
  texto: 'Perseguir alguém, reiteradamente e por qualquer meio, ameaçando-lhe a integridade física ou psicológica, restringindo-lhe a capacidade de locomoção ou, de qualquer forma, invadindo ou perturbando sua esfera de liberdade ou privacidade: Pena – reclusão, de 6 meses a 2 anos, e multa.',
  explicacao: [
    'Crime criado pela Lei 14.132/2021 (*stalking*), que revogou a contravenção de perturbação da tranquilidade (art. 65 da LCP).',
    'Exige **reiteração** — atos isolados não bastam. É crime habitual.',
    'A pena é aumentada de metade se o crime é praticado contra criança, adolescente ou idoso; contra mulher por razões da condição do sexo feminino; mediante concurso de duas ou mais pessoas ou com uso de arma.',
    'Ação penal pública **condicionada à representação** (§3º).'
  ],
  exemplo: 'Ex-companheiro que, durante semanas, envia dezenas de mensagens diárias, aguarda a vítima na saída do trabalho e cria perfis falsos para monitorá-la pratica perseguição, com pena aumentada de metade por ser contra mulher em razão do gênero. Um único telefonema incômodo não configuraria o tipo, por faltar reiteração.',
  pontos: ['Revogou o art. 65 da Lei de Contravenções Penais.'],
  juris: []
},

'148': {
  tema: 'Liberdade individual',
  texto: 'Privar alguém de sua liberdade, mediante sequestro ou cárcere privado: Pena – reclusão, de 1 a 3 anos. §1º A pena é de reclusão, de 2 a 5 anos: I – se a vítima é ascendente, descendente, cônjuge ou companheiro do agente ou maior de 60 anos; II – se o crime é praticado mediante internação da vítima em casa de saúde ou hospital; III – se a privação da liberdade dura mais de 15 dias; IV – se o crime é praticado contra menor de 18 anos; V – se o crime é praticado com fins libidinosos. §2º Se resulta à vítima, em razão de maus-tratos ou da natureza da detenção, grave sofrimento físico ou moral: Pena – reclusão, de 2 a 8 anos.',
  explicacao: [
    'Crime **permanente**: a consumação se prolonga enquanto dura a privação — admite prisão em flagrante a qualquer tempo, e a prescrição só corre da cessação (art. 111, III).',
    'Diferença terminológica: **sequestro** é a privação em espaço amplo; **cárcere privado**, em recinto fechado.',
    'Se a privação é meio para obter resgate, o crime é **extorsão mediante sequestro** (art. 159). Se é meio para o estupro, há absorção pelo crime sexual, conforme o caso concreto.'
  ],
  exemplo: 'Agente mantém a ex-companheira trancada em casa por 20 dias. Responde por cárcere privado qualificado (§1º, III — mais de 15 dias, e I, se companheira). Como é crime permanente, se a polícia chega no 20º dia, o flagrante é válido, ainda que a privação tenha começado semanas antes.',
  pontos: ['Crime permanente: flagrante a qualquer momento e Súmula 711/STF aplicável.'],
  juris: []
},

'155': {
  tema: 'Crimes contra o patrimônio',
  texto: 'Subtrair, para si ou para outrem, coisa alheia móvel: Pena – reclusão, de 1 a 4 anos, e multa. §1º A pena aumenta-se de um terço, se o crime é praticado durante o repouso noturno. §2º Se o criminoso é primário, e é de pequeno valor a coisa furtada, o juiz pode substituir a pena de reclusão pela de detenção, diminuí-la de um a dois terços, ou aplicar somente a pena de multa. §3º Equipara-se à coisa móvel a energia elétrica ou qualquer outra que tenha valor econômico. §4º A pena é de reclusão de 2 a 8 anos, e multa, se o crime é cometido: I – com destruição ou rompimento de obstáculo à subtração da coisa; II – com abuso de confiança, ou mediante fraude, escalada ou destreza; III – com emprego de chave falsa; IV – mediante concurso de duas ou mais pessoas.',
  explicacao: [
    'Consumação: o STF e o STJ adotam a **teoria da amotio (apprehensio)** — basta a inversão da posse, ainda que por breve tempo e sem posse mansa e pacífica (Súmula 582 do STJ).',
    '**Furto privilegiado (§2º)**: exige primariedade **e** coisa de pequeno valor (até 1 salário mínimo). É direito subjetivo do réu, compatível com as qualificadoras **objetivas** (Súmula 511 do STJ).',
    '**Repouso noturno (§1º)**: o STJ admite a majorante mesmo em estabelecimento comercial ou casa desabitada.',
    'Qualificadoras: §4º (rompimento de obstáculo, abuso de confiança, fraude, escalada, destreza, chave falsa, concurso); §4º-A (explosivo); §5º (veículo transportado para outro Estado/exterior); §6º (semovente domesticável de produção); §7º (substâncias explosivas); §4º-B (fraude eletrônica — Lei 14.155/2021, pena de 4 a 8 anos).',
    'Distinção clássica: **furto mediante fraude** (a fraude ilude a vigilância e o agente subtrai) x **estelionato** (a fraude faz a vítima entregar voluntariamente o bem).'
  ],
  exemplo: 'Agente se passa por funcionário de concessionária e, a pretexto de "test drive", sai dirigindo o veículo e não volta: **furto mediante fraude** (art. 155, §4º, II), pois a entrega foi apenas da posse vigiada, sem transferência consentida da disponibilidade. Diferente: se convence a vítima a lhe "vender" o carro com cheque sem fundos, há **estelionato**, pois houve entrega voluntária do bem em razão do engodo.',
  pontos: [
    'Súmula 582/STJ: consuma-se o furto com a inversão da posse, ainda que por breve tempo.',
    'Súmula 511/STJ: é possível o furto privilegiado-qualificado, se a qualificadora for objetiva.',
    'Súmula 567/STJ: sistema de vigilância não torna o furto impossível.'
  ],
  juris: [
    'Súmulas 582, 511 e 567 do STJ.',
    'STJ: princípio da insignificância no furto exige mínima ofensividade, ausência de periculosidade social, reduzido grau de reprovabilidade e inexpressividade da lesão (HC 84.412/STF).'
  ]
},

'157': {
  tema: 'Crimes contra o patrimônio',
  texto: 'Subtrair coisa móvel alheia, para si ou para outrem, mediante grave ameaça ou violência a pessoa, ou depois de havê-la, por qualquer meio, reduzido à impossibilidade de resistência: Pena – reclusão, de 4 a 10 anos, e multa. §1º Na mesma pena incorre quem, logo depois de subtraída a coisa, emprega violência contra pessoa ou grave ameaça, a fim de assegurar a impunidade do crime ou a detenção da coisa para si ou para terceiro. §2º A pena aumenta-se de 1/3 até metade: II – se há o concurso de duas ou mais pessoas; III – se a vítima está em serviço de transporte de valores e o agente conhece tal circunstância; IV – se a subtração for de veículo automotor que venha a ser transportado para outro Estado ou para o exterior; V – se o agente mantém a vítima em seu poder, restringindo sua liberdade; VII – se a violência ou grave ameaça é exercida com emprego de arma branca. §2º-A A pena aumenta-se de 2/3: I – se a violência ou ameaça é exercida com emprego de arma de fogo; II – se há destruição ou rompimento de obstáculo mediante o emprego de explosivo. §3º Se da violência resulta lesão corporal grave, a pena é de reclusão de 7 a 18 anos; se resulta morte, a pena é de reclusão de 20 a 30 anos (latrocínio).',
  explicacao: [
    '**Roubo próprio** (caput): violência/grave ameaça **antes ou durante** a subtração. **Roubo impróprio** (§1º): violência empregada **logo depois** da subtração, para assegurar a impunidade ou a detenção da coisa.',
    'A **violência imprópria** (qualquer meio que reduza a capacidade de resistência, como "boa noite Cinderela") também configura roubo.',
    'Majorantes de **1/3 a 1/2** (§2º) e de **2/3** (§2º-A). A Lei 13.654/2018 retirou a arma branca; a Lei 13.964/2019 a reintroduziu no §2º, VII.',
    '**Latrocínio** (§3º, 2ª parte): crime **hediondo**, de competência do **juiz singular** (Súmula 603 do STF), pois o bem jurídico principal é o patrimônio.',
    'Roubo é crime **complexo** (patrimônio + integridade física/liberdade).'
  ],
  exemplo: 'Dois agentes abordam a vítima com revólver, subtraem o carro e a mantêm no porta-malas por 40 minutos. Responde-se por roubo majorado pelo emprego de arma de fogo (+2/3) e pela restrição da liberdade (§2º, V) e concurso de pessoas (§2º, II) — o STJ exige fundamentação concreta para aplicar mais de uma majorante acima do mínimo (Súmula 443). Se, durante a fuga, um deles mata a vítima, todos respondem por latrocínio, se o resultado era previsível (art. 29, §2º, e art. 19).',
  pontos: [
    'Súmula 603/STF: a competência para o latrocínio é do juiz singular, não do Júri.',
    'Súmula 610/STJ: há latrocínio consumado ainda que não ocorra a subtração, desde que a morte se consume.',
    'Súmula 443/STJ: o aumento acima do mínimo exige fundamentação concreta.'
  ],
  juris: ['Súmulas 603/STF, 610/STJ e 443/STJ.']
},

'158': {
  tema: 'Crimes contra o patrimônio',
  texto: 'Constranger alguém, mediante violência ou grave ameaça, e com o intuito de obter para si ou para outrem indevida vantagem econômica, a fazer, tolerar que se faça ou deixar de fazer alguma coisa: Pena – reclusão, de 4 a 10 anos, e multa. §3º Se o crime é cometido mediante a restrição da liberdade da vítima, e essa condição é necessária para a obtenção da vantagem econômica, a pena é de reclusão, de 6 a 12 anos (sequestro relâmpago).',
  explicacao: [
    'Crime **formal**: consuma-se com o constrangimento, independentemente da obtenção da vantagem (Súmula 96 do STJ).',
    'Diferença essencial para o **roubo**: na extorsão, a **colaboração da vítima é imprescindível** (ela faz, tolera ou deixa de fazer); no roubo, o agente subtrai diretamente, dispensando a conduta da vítima.',
    'O §3º (sequestro relâmpago, Lei 11.923/2009) é **hediondo** quando resulta morte ou lesão grave.'
  ],
  exemplo: 'Criminoso aborda a vítima, a mantém no carro e a obriga a fornecer a senha e realizar saques em caixas eletrônicos: **extorsão com restrição da liberdade** (art. 158, §3º), e não roubo, pois foi indispensável a colaboração da vítima ao digitar a senha. Se o agente simplesmente tomasse o cartão e o dinheiro em espécie, seria roubo.',
  pontos: [
    'Súmula 96/STJ: o crime de extorsão consuma-se independentemente da obtenção da vantagem indevida.',
    'Roubo: subtração direta; extorsão: colaboração imprescindível da vítima.'
  ],
  juris: ['Súmula 96/STJ.']
},

'159': {
  tema: 'Crimes contra o patrimônio',
  texto: 'Sequestrar pessoa com o fim de obter, para si ou para outrem, qualquer vantagem, como condição ou preço do resgate: Pena – reclusão, de 8 a 15 anos. §1º Se o sequestro dura mais de 24 horas, se o sequestrado é menor de 18 ou maior de 60 anos, ou se o crime é cometido por bando ou quadrilha: Pena – reclusão, de 12 a 20 anos. §2º Se do fato resulta lesão corporal de natureza grave: Pena – reclusão, de 16 a 24 anos. §3º Se resulta a morte: Pena – reclusão, de 24 a 30 anos. §4º Se o crime é cometido em concurso, o concorrente que o denunciar à autoridade, facilitando a libertação do sequestrado, terá sua pena reduzida de um a dois terços.',
  explicacao: [
    'Crime **formal** e **permanente**: consuma-se com a privação da liberdade acompanhada da finalidade de resgate, ainda que este não seja pago.',
    'Todas as figuras são **hediondas** (Lei 8.072/90).',
    'O §4º prevê a **delação premiada** mais antiga do ordenamento (incluída pela Lei 8.072/90), exigindo o concurso de pessoas e a efetiva facilitação da libertação.'
  ],
  exemplo: 'Quadrilha mantém empresário em cativeiro por três dias exigindo R$ 500 mil. Mesmo que a família não pague e a polícia liberte a vítima, o crime está consumado (formal), na forma qualificada (§1º — duração superior a 24h e bando). Se um dos integrantes revela o cativeiro e permite o resgate, sua pena é reduzida de 1/3 a 2/3.',
  pontos: ['Não confundir com o art. 148 (sequestro sem finalidade de resgate) nem com o art. 158, §3º.'],
  juris: []
},

'168': {
  tema: 'Crimes contra o patrimônio',
  texto: 'Apropriar-se de coisa alheia móvel, de que tem a posse ou a detenção: Pena – reclusão, de 1 a 4 anos, e multa. §1º A pena é aumentada de um terço, quando o agente recebeu a coisa: I – em depósito necessário; II – na qualidade de tutor, curador, síndico, liquidatário, inventariante, testamenteiro ou depositário judicial; III – em razão de ofício, emprego ou profissão.',
  explicacao: [
    'Pressuposto essencial: a **posse ou detenção lícita e desvigiada** anterior. O dolo é **subsequente** — surge depois que o agente já tem a coisa.',
    'Difere do **furto com abuso de confiança** (art. 155, §4º, II), em que o agente nunca teve posse autônoma, apenas contato vigiado.',
    'Difere do **estelionato**, em que a fraude é anterior e determina a entrega.'
  ],
  exemplo: 'Mecânico recebe o carro para conserto (posse lícita) e depois decide vendê-lo: apropriação indébita majorada (§1º, III — em razão de profissão). Se, ao contrário, ele já pretendia ficar com o veículo quando o recebeu, mediante engodo, seria estelionato. E se a empregada doméstica, que apenas manuseia as joias para limpar (detenção vigiada), as leva embora, é furto qualificado por abuso de confiança.',
  pontos: ['Dolo **subsequente** é a marca da apropriação indébita.'],
  juris: []
},

'171': {
  tema: 'Crimes contra o patrimônio',
  texto: 'Obter, para si ou para outrem, vantagem ilícita, em prejuízo alheio, induzindo ou mantendo alguém em erro, mediante artifício, ardil, ou qualquer outro meio fraudulento: Pena – reclusão, de 1 a 5 anos, e multa. §2º Nas mesmas penas incorre quem: I – vende, permuta, dá em pagamento, em locação ou em garantia coisa alheia como própria; II – vende, permuta, dá em pagamento ou em garantia coisa própria inalienável, gravada de ônus ou litigiosa...; V – destrói, total ou parcialmente, ou oculta coisa própria, com o intuito de haver indenização ou valor de seguro; VI – emite cheque, sem suficiente provisão de fundos em poder do sacado, ou lhe frustra o pagamento. §2º-A A pena é de reclusão, de 4 a 8 anos, e multa, se a fraude é cometida com a utilização de informações fornecidas pela vítima ou por terceiro induzido a erro por meio de redes sociais, contatos telefônicos ou envio de correio eletrônico fraudulento (fraude eletrônica). §5º Somente se procede mediante representação, salvo se a vítima for: I – a Administração Pública; II – criança ou adolescente; III – pessoa com deficiência mental; IV – maior de 70 anos ou incapaz.',
  explicacao: [
    'Crime **material**: exige a obtenção da vantagem ilícita **e** o prejuízo alheio.',
    'A Lei 13.964/2019 tornou o estelionato, em regra, crime de **ação penal pública condicionada à representação** (§5º) — com as exceções listadas. O STJ definiu que a nova regra **não retroage** para atingir denúncias já oferecidas.',
    'A Lei 14.155/2021 criou a **fraude eletrônica** (§2º-A), com pena de 4 a 8 anos, aumentada de 1/3 a 2/3 se praticada com uso de servidor no exterior.',
    'O §3º majora a pena em 1/3 se o crime é praticado contra entidade de direito público ou instituto de economia popular, assistência social ou beneficência.'
  ],
  exemplo: 'Golpista cria perfil falso no WhatsApp, passa-se por filho da vítima idosa e obtém transferência via PIX de R$ 5 mil. Configura **fraude eletrônica** (art. 171, §2º-A), com pena de 4 a 8 anos, e ainda incide o §4º (aumento de 1/3 ao dobro se o crime é praticado contra idoso). Se a fraude fosse presencial, com falso contrato, seria o caput.',
  pontos: [
    'Súmula 17/STJ: quando o falso se exaure no estelionato, sem mais potencialidade lesiva, é por este absorvido.',
    'Súmula 24/STJ: aplica-se ao crime de estelionato previdenciário a distinção entre a forma instantânea (beneficiário) e permanente.',
    'Súmula 554/STF: pagamento do cheque sem fundos antes do recebimento da denúncia obsta a ação penal.'
  ],
  juris: [
    'Súmulas 17 e 554; STJ, HC 610.201: a exigência de representação do §5º não retroage para processos com denúncia já oferecida.'
  ]
},

'180': {
  tema: 'Crimes contra o patrimônio',
  texto: 'Adquirir, receber, transportar, conduzir ou ocultar, em proveito próprio ou alheio, coisa que sabe ser produto de crime, ou influir para que terceiro, de boa-fé, a adquira, receba ou oculte: Pena – reclusão, de 1 a 4 anos, e multa. §1º Adquirir, receber, transportar, conduzir, ocultar, ter em depósito, desmontar, montar, remontar, vender, expor à venda, ou de qualquer forma utilizar, em proveito próprio ou alheio, no exercício de atividade comercial ou industrial, coisa que deve saber ser produto de crime: Pena – reclusão, de 3 a 8 anos, e multa. §3º Adquirir ou receber coisa que, por sua natureza ou pela desproporção entre o valor e o preço, ou pela condição de quem a oferece, deve presumir-se obtida por meio criminoso: Pena – detenção, de 1 mês a 1 ano, ou multa, ou ambas as penas.',
  explicacao: [
    'Modalidades: **própria** (adquirir, receber, transportar, conduzir, ocultar), **imprópria** (influir para que terceiro de boa-fé adquira), **qualificada** (§1º — atividade comercial/industrial) e **culposa** (§3º).',
    'Curiosidade cobrada em prova: na receptação **qualificada** (§1º) a lei usa "**deve saber**" (dolo eventual), com pena **maior** que a do caput ("sabe" — dolo direto). O STF já declarou a constitucionalidade do dispositivo.',
    'É crime **acessório (parasitário)**, mas autônomo: a punição independe de o autor do crime antecedente ser identificado ou punido (art. 180, §4º).',
    'O §5º prevê perdão judicial na modalidade culposa e privilégio.'
  ],
  exemplo: 'Dono de ferro-velho compra peças de veículos manifestamente furtados por preço irrisório: receptação qualificada (§1º), com pena de 3 a 8 anos, ainda que ele não tenha certeza da origem — basta o "deve saber". Um particular que compra um celular na rua por R$ 100, quando vale R$ 3 mil, pratica receptação culposa (§3º).',
  pontos: [
    'Receptação de animal (art. 180-A): semovente domesticável de produção.',
    'Crime autônomo: independe da punição do autor do crime anterior.'
  ],
  juris: ['STF, RE 443.388: constitucionalidade da receptação qualificada com a expressão "deve saber".']
},

'181': {
  tema: 'Crimes contra o patrimônio',
  texto: 'É isento de pena quem comete qualquer dos crimes previstos neste título, em prejuízo: I – do cônjuge, na constância da sociedade conjugal; II – de ascendente ou descendente, seja o parentesco legítimo ou ilegítimo, seja civil ou natural.',
  explicacao: [
    'Trata-se de **escusa absolutória** (imunidade penal absoluta): o fato é típico, ilícito e culpável, mas o Estado renuncia à punição por razões de política criminal (preservação da harmonia familiar).',
    'O art. 182 traz a **imunidade relativa**: a ação passa a depender de representação quando o crime é praticado contra cônjuge separado judicialmente, irmão ou parente por afinidade que coabita.',
    'O art. 183 afasta as imunidades: (i) se há emprego de **violência ou grave ameaça**; (ii) se a vítima é **maior de 60 anos**; (iii) ao estranho que participa do crime.'
  ],
  exemplo: 'Filho que furta dinheiro do pai é isento de pena (art. 181, II). Mas se o pai tem 65 anos, a imunidade não se aplica (art. 183, III) e o filho responde normalmente. Se o filho comete **roubo** contra o pai, também responde, pois houve violência (art. 183, I). E o amigo que o acompanhou no furto responde integralmente, por ser estranho à relação familiar.',
  pontos: [
    'Imunidade **absoluta** (art. 181) x **relativa** (art. 182) x exceções (art. 183).',
    'A escusa é pessoal: não se comunica ao coautor estranho.'
  ],
  juris: ['STJ: a escusa absolutória não se aplica quando há violência ou grave ameaça, ainda que praticada contra familiar.']
}

};
if (typeof module !== 'undefined') { module.exports = { ARTIGOS_PE1: ARTIGOS_PE1 }; }
