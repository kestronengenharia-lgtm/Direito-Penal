/* ============================================================================
 *  ESTRUTURA DO CÓDIGO PENAL (Decreto-Lei 2.848/1940)
 *  Árvore completa: Partes > Títulos > Capítulos > Seções > Artigos
 *  Cada artigo: [numero, nomen iuris]
 *  Atualizado até as alterações das Leis 13.964/2019 (Pacote Anticrime),
 *  14.133/2021 (licitações), 14.197/2021 (Estado Democrático de Direito),
 *  14.994/2024 (feminicídio) e correlatas.
 * ==========================================================================*/

const CP_ESTRUTURA = [
{
  id: 'pg', nome: 'Parte Geral', sigla: 'PG',
  titulos: [
    {
      id: 'pg-t1', nome: 'Título I — Da aplicação da lei penal', faixa: 'arts. 1º a 12',
      capitulos: [
        { id: 'pg-t1-u', nome: 'Da aplicação da lei penal', artigos: [
          ['1', 'Anterioridade da lei (princípio da legalidade)'],
          ['2', 'Lei penal no tempo — abolitio criminis e retroatividade benéfica'],
          ['3', 'Lei excepcional ou temporária'],
          ['4', 'Tempo do crime (teoria da atividade)'],
          ['5', 'Territorialidade'],
          ['6', 'Lugar do crime (teoria da ubiquidade)'],
          ['7', 'Extraterritorialidade'],
          ['8', 'Pena cumprida no estrangeiro'],
          ['9', 'Eficácia de sentença estrangeira'],
          ['10', 'Contagem de prazo'],
          ['11', 'Frações não computáveis da pena'],
          ['12', 'Legislação especial (princípio da convivência)']
        ]}
      ]
    },
    {
      id: 'pg-t2', nome: 'Título II — Do crime', faixa: 'arts. 13 a 25',
      capitulos: [
        { id: 'pg-t2-u', nome: 'Do crime', artigos: [
          ['13', 'Relação de causalidade e omissão penalmente relevante'],
          ['14', 'Crime consumado e crime tentado'],
          ['15', 'Desistência voluntária e arrependimento eficaz'],
          ['16', 'Arrependimento posterior'],
          ['17', 'Crime impossível'],
          ['18', 'Crime doloso e crime culposo'],
          ['19', 'Agravação pelo resultado (vedação da responsabilidade objetiva)'],
          ['20', 'Erro sobre elementos do tipo; descriminantes putativas; erro sobre a pessoa'],
          ['21', 'Erro sobre a ilicitude do fato (erro de proibição)'],
          ['22', 'Coação irresistível e obediência hierárquica'],
          ['23', 'Exclusão de ilicitude e excesso punível'],
          ['24', 'Estado de necessidade'],
          ['25', 'Legítima defesa']
        ]}
      ]
    },
    {
      id: 'pg-t3', nome: 'Título III — Da imputabilidade penal', faixa: 'arts. 26 a 28',
      capitulos: [
        { id: 'pg-t3-u', nome: 'Da imputabilidade penal', artigos: [
          ['26', 'Inimputáveis e semi-imputáveis (doença mental)'],
          ['27', 'Menores de 18 anos'],
          ['28', 'Emoção, paixão e embriaguez']
        ]}
      ]
    },
    {
      id: 'pg-t4', nome: 'Título IV — Do concurso de pessoas', faixa: 'arts. 29 a 31',
      capitulos: [
        { id: 'pg-t4-u', nome: 'Do concurso de pessoas', artigos: [
          ['29', 'Regra do concurso de pessoas e participação de menor importância'],
          ['30', 'Circunstâncias incomunicáveis'],
          ['31', 'Casos de impunibilidade (ajuste, determinação, instigação e auxílio)']
        ]}
      ]
    },
    {
      id: 'pg-t5', nome: 'Título V — Das penas', faixa: 'arts. 32 a 95',
      capitulos: [
        { id: 'pg-t5-c1-s1', nome: 'Cap. I, Seção I — Das penas privativas de liberdade', artigos: [
          ['32', 'Espécies de pena'],
          ['33', 'Reclusão e detenção — regimes de cumprimento'],
          ['34', 'Regras do regime fechado'],
          ['35', 'Regras do regime semiaberto'],
          ['36', 'Regras do regime aberto'],
          ['37', 'Regime especial (mulheres)'],
          ['38', 'Direitos do preso'],
          ['39', 'Trabalho do preso'],
          ['40', 'Legislação especial (LEP)'],
          ['41', 'Superveniência de doença mental'],
          ['42', 'Detração']
        ]},
        { id: 'pg-t5-c1-s2', nome: 'Cap. I, Seção II — Das penas restritivas de direitos', artigos: [
          ['43', 'Espécies de penas restritivas de direitos'],
          ['44', 'Requisitos da substituição por restritiva de direitos'],
          ['45', 'Conversão — prestação pecuniária e perda de bens'],
          ['46', 'Prestação de serviços à comunidade'],
          ['47', 'Interdição temporária de direitos'],
          ['48', 'Limitação de fim de semana']
        ]},
        { id: 'pg-t5-c1-s3', nome: 'Cap. I, Seção III — Da pena de multa', artigos: [
          ['49', 'Multa — dias-multa'],
          ['50', 'Pagamento da multa'],
          ['51', 'Conversão e execução da multa (dívida de valor)'],
          ['52', 'Suspensão da execução da multa (doença mental)']
        ]},
        { id: 'pg-t5-c2', nome: 'Cap. II — Da cominação das penas', artigos: [
          ['53', 'Cominação das penas privativas de liberdade'],
          ['54', 'Cominação das penas restritivas de direitos'],
          ['55', 'Duração das penas restritivas'],
          ['56', 'Interdição de direitos — incisos I e II do art. 47'],
          ['57', 'Interdição de direitos — inciso III do art. 47'],
          ['58', 'Cominação da multa'],
          ['59', 'Fixação da pena — circunstâncias judiciais'],
          ['60', 'Critérios especiais da pena de multa'],
          ['61', 'Circunstâncias agravantes'],
          ['62', 'Agravantes no concurso de pessoas'],
          ['63', 'Reincidência'],
          ['64', 'Período depurador e efeitos da reincidência'],
          ['65', 'Circunstâncias atenuantes'],
          ['66', 'Atenuante inominada'],
          ['67', 'Concurso de circunstâncias agravantes e atenuantes'],
          ['68', 'Cálculo da pena (sistema trifásico)'],
          ['69', 'Concurso material'],
          ['70', 'Concurso formal'],
          ['71', 'Crime continuado'],
          ['72', 'Multas no concurso de crimes'],
          ['73', 'Erro na execução (aberratio ictus)'],
          ['74', 'Resultado diverso do pretendido (aberratio criminis)'],
          ['75', 'Limite de cumprimento das penas (40 anos)'],
          ['76', 'Concurso de infrações — ordem de execução']
        ]},
        { id: 'pg-t5-c4', nome: 'Cap. IV — Da suspensão condicional da pena (sursis)', artigos: [
          ['77', 'Requisitos da suspensão condicional da pena'],
          ['78', 'Condições do sursis'],
          ['79', 'Outras condições'],
          ['80', 'Vedação ao sursis para multa e restritivas'],
          ['81', 'Revogação obrigatória e facultativa'],
          ['82', 'Extinção da pena']
        ]},
        { id: 'pg-t5-c5', nome: 'Cap. V — Do livramento condicional', artigos: [
          ['83', 'Requisitos do livramento condicional'],
          ['84', 'Soma de penas'],
          ['85', 'Especificação das condições'],
          ['86', 'Revogação obrigatória'],
          ['87', 'Revogação facultativa'],
          ['88', 'Efeitos da revogação'],
          ['89', 'Prorrogação do período de prova'],
          ['90', 'Extinção da pena']
        ]},
        { id: 'pg-t5-c6', nome: 'Cap. VI — Dos efeitos da condenação', artigos: [
          ['91', 'Efeitos genéricos da condenação'],
          ['91-A', 'Perda alargada de bens (Pacote Anticrime)'],
          ['92', 'Efeitos específicos da condenação']
        ]},
        { id: 'pg-t5-c7', nome: 'Cap. VII — Da reabilitação', artigos: [
          ['93', 'Reabilitação'],
          ['94', 'Requisitos da reabilitação'],
          ['95', 'Revogação da reabilitação']
        ]}
      ]
    },
    {
      id: 'pg-t6', nome: 'Título VI — Das medidas de segurança', faixa: 'arts. 96 a 99',
      capitulos: [
        { id: 'pg-t6-u', nome: 'Das medidas de segurança', artigos: [
          ['96', 'Espécies de medidas de segurança'],
          ['97', 'Imposição da medida e prazo'],
          ['98', 'Substituição da pena por medida (semi-imputável)'],
          ['99', 'Direitos do internado']
        ]}
      ]
    },
    {
      id: 'pg-t7', nome: 'Título VII — Da ação penal', faixa: 'arts. 100 a 106',
      capitulos: [
        { id: 'pg-t7-u', nome: 'Da ação penal', artigos: [
          ['100', 'Ação penal pública e de iniciativa privada'],
          ['101', 'Ação penal no crime complexo'],
          ['102', 'Irretratabilidade da representação'],
          ['103', 'Decadência do direito de queixa ou de representação'],
          ['104', 'Renúncia expressa ou tácita ao direito de queixa'],
          ['105', 'Perdão do ofendido'],
          ['106', 'Efeitos e requisitos do perdão']
        ]}
      ]
    },
    {
      id: 'pg-t8', nome: 'Título VIII — Da extinção da punibilidade', faixa: 'arts. 107 a 120',
      capitulos: [
        { id: 'pg-t8-u', nome: 'Da extinção da punibilidade', artigos: [
          ['107', 'Causas de extinção da punibilidade'],
          ['108', 'Crimes conexos e acessórios'],
          ['109', 'Prescrição da pretensão punitiva (antes do trânsito em julgado)'],
          ['110', 'Prescrição da pretensão executória (depois do trânsito)'],
          ['111', 'Termo inicial da prescrição antes do trânsito em julgado'],
          ['112', 'Termo inicial da prescrição após a sentença irrecorrível'],
          ['113', 'Prescrição no caso de evasão ou revogação do livramento'],
          ['114', 'Prescrição da pena de multa'],
          ['115', 'Redução dos prazos prescricionais (menor de 21 e maior de 70)'],
          ['116', 'Causas impeditivas (suspensivas) da prescrição'],
          ['117', 'Causas interruptivas da prescrição'],
          ['118', 'Penas mais leves — prescrição'],
          ['119', 'Prescrição no concurso de crimes'],
          ['120', 'Perdão judicial e reincidência']
        ]}
      ]
    }
  ]
},
{
  id: 'pe', nome: 'Parte Especial', sigla: 'PE',
  titulos: [
    {
      id: 'pe-t1', nome: 'Título I — Dos crimes contra a pessoa', faixa: 'arts. 121 a 154-B',
      capitulos: [
        { id: 'pe-t1-c1', nome: 'Cap. I — Dos crimes contra a vida', artigos: [
          ['121', 'Homicídio simples, privilegiado, qualificado e culposo'],
          ['121-A', 'Feminicídio (Lei 14.994/2024)'],
          ['122', 'Induzimento, instigação ou auxílio a suicídio ou a automutilação'],
          ['123', 'Infanticídio'],
          ['124', 'Aborto provocado pela gestante ou com seu consentimento'],
          ['125', 'Aborto provocado por terceiro sem o consentimento da gestante'],
          ['126', 'Aborto provocado com o consentimento da gestante'],
          ['127', 'Forma qualificada do aborto'],
          ['128', 'Aborto necessário e aborto humanitário (sentimental)']
        ]},
        { id: 'pe-t1-c2', nome: 'Cap. II — Das lesões corporais', artigos: [
          ['129', 'Lesão corporal (leve, grave, gravíssima, seguida de morte, culposa e de violência doméstica)']
        ]},
        { id: 'pe-t1-c3', nome: 'Cap. III — Da periclitação da vida e da saúde', artigos: [
          ['130', 'Perigo de contágio venéreo'],
          ['131', 'Perigo de contágio de moléstia grave'],
          ['132', 'Perigo para a vida ou saúde de outrem'],
          ['133', 'Abandono de incapaz'],
          ['134', 'Exposição ou abandono de recém-nascido'],
          ['135', 'Omissão de socorro'],
          ['135-A', 'Condicionamento de atendimento médico-hospitalar emergencial'],
          ['136', 'Maus-tratos']
        ]},
        { id: 'pe-t1-c4', nome: 'Cap. IV — Da rixa', artigos: [ ['137', 'Rixa'] ]},
        { id: 'pe-t1-c5', nome: 'Cap. V — Dos crimes contra a honra', artigos: [
          ['138', 'Calúnia'],
          ['139', 'Difamação'],
          ['140', 'Injúria (inclusive injúria racial — §3º)'],
          ['141', 'Causas de aumento de pena'],
          ['142', 'Exclusão do crime (imunidades)'],
          ['143', 'Retratação'],
          ['144', 'Pedido de explicações'],
          ['145', 'Ação penal nos crimes contra a honra']
        ]},
        { id: 'pe-t1-c6-s1', nome: 'Cap. VI, Seção I — Dos crimes contra a liberdade pessoal', artigos: [
          ['146', 'Constrangimento ilegal'],
          ['147', 'Ameaça'],
          ['147-A', 'Perseguição (stalking)'],
          ['147-B', 'Violência psicológica contra a mulher'],
          ['148', 'Sequestro e cárcere privado'],
          ['149', 'Redução a condição análoga à de escravo'],
          ['149-A', 'Tráfico de pessoas']
        ]},
        { id: 'pe-t1-c6-s2', nome: 'Cap. VI, Seção II — Dos crimes contra a inviolabilidade do domicílio', artigos: [
          ['150', 'Violação de domicílio']
        ]},
        { id: 'pe-t1-c6-s3', nome: 'Cap. VI, Seção III — Dos crimes contra a inviolabilidade de correspondência', artigos: [
          ['151', 'Violação de correspondência'],
          ['152', 'Correspondência comercial']
        ]},
        { id: 'pe-t1-c6-s4', nome: 'Cap. VI, Seção IV — Dos crimes contra a inviolabilidade dos segredos', artigos: [
          ['153', 'Divulgação de segredo'],
          ['154', 'Violação do segredo profissional'],
          ['154-A', 'Invasão de dispositivo informático'],
          ['154-B', 'Ação penal (invasão de dispositivo informático)']
        ]}
      ]
    },
    {
      id: 'pe-t2', nome: 'Título II — Dos crimes contra o patrimônio', faixa: 'arts. 155 a 183',
      capitulos: [
        { id: 'pe-t2-c1', nome: 'Cap. I — Do furto', artigos: [
          ['155', 'Furto (simples, noturno, privilegiado, qualificado, de energia e de veículo)'],
          ['156', 'Furto de coisa comum']
        ]},
        { id: 'pe-t2-c2', nome: 'Cap. II — Do roubo e da extorsão', artigos: [
          ['157', 'Roubo próprio, impróprio, majorado e qualificado'],
          ['158', 'Extorsão (inclusive sequestro relâmpago — §3º)'],
          ['159', 'Extorsão mediante sequestro'],
          ['160', 'Extorsão indireta']
        ]},
        { id: 'pe-t2-c3', nome: 'Cap. III — Da usurpação', artigos: [
          ['161', 'Alteração de limites, usurpação de águas e esbulho possessório'],
          ['162', 'Supressão ou alteração de marca em animais']
        ]},
        { id: 'pe-t2-c4', nome: 'Cap. IV — Do dano', artigos: [
          ['163', 'Dano simples e qualificado'],
          ['164', 'Introdução ou abandono de animais em propriedade alheia'],
          ['166', 'Alteração de local especialmente protegido'],
          ['167', 'Ação penal nos crimes de dano']
        ]},
        { id: 'pe-t2-c5', nome: 'Cap. V — Da apropriação indébita', artigos: [
          ['168', 'Apropriação indébita'],
          ['168-A', 'Apropriação indébita previdenciária'],
          ['169', 'Apropriação de coisa havida por erro, caso fortuito ou força da natureza'],
          ['170', 'Aplicação do privilégio do art. 155, §2º']
        ]},
        { id: 'pe-t2-c6', nome: 'Cap. VI — Do estelionato e outras fraudes', artigos: [
          ['171', 'Estelionato (inclusive fraude eletrônica — §2º-A)'],
          ['172', 'Duplicata simulada'],
          ['173', 'Abuso de incapazes'],
          ['174', 'Induzimento à especulação'],
          ['175', 'Fraude no comércio'],
          ['176', 'Outras fraudes (calote em restaurante/hotel/transporte)'],
          ['177', 'Fraudes e abusos na fundação ou administração de sociedade por ações'],
          ['178', 'Emissão irregular de conhecimento de depósito ou warrant'],
          ['179', 'Fraude à execução']
        ]},
        { id: 'pe-t2-c7', nome: 'Cap. VII — Da receptação', artigos: [
          ['180', 'Receptação própria, imprópria, qualificada e culposa'],
          ['180-A', 'Receptação de animal']
        ]},
        { id: 'pe-t2-c8', nome: 'Cap. VIII — Disposições gerais (imunidades penais)', artigos: [
          ['181', 'Imunidade penal absoluta (escusa absolutória)'],
          ['182', 'Imunidade penal relativa (ação penal pública condicionada)'],
          ['183', 'Hipóteses em que não se aplicam as imunidades']
        ]}
      ]
    },
    {
      id: 'pe-t3', nome: 'Título III — Dos crimes contra a propriedade imaterial', faixa: 'arts. 184 a 186',
      capitulos: [
        { id: 'pe-t3-c1', nome: 'Cap. I — Dos crimes contra a propriedade intelectual', artigos: [
          ['184', 'Violação de direito autoral'],
          ['186', 'Ação penal nos crimes contra a propriedade intelectual']
        ]}
      ]
    },
    {
      id: 'pe-t4', nome: 'Título IV — Dos crimes contra a organização do trabalho', faixa: 'arts. 197 a 207',
      capitulos: [
        { id: 'pe-t4-u', nome: 'Dos crimes contra a organização do trabalho', artigos: [
          ['197', 'Atentado contra a liberdade de trabalho'],
          ['198', 'Atentado contra a liberdade de contrato de trabalho e boicotagem violenta'],
          ['199', 'Atentado contra a liberdade de associação'],
          ['200', 'Paralisação de trabalho seguida de violência ou perturbação da ordem'],
          ['201', 'Paralisação de trabalho de interesse coletivo'],
          ['202', 'Invasão de estabelecimento industrial, comercial ou agrícola; sabotagem'],
          ['203', 'Frustração de direito assegurado por lei trabalhista'],
          ['204', 'Frustração de lei sobre a nacionalização do trabalho'],
          ['205', 'Exercício de atividade com infração de decisão administrativa'],
          ['206', 'Aliciamento para o fim de emigração'],
          ['207', 'Aliciamento de trabalhadores de um local para outro do território nacional']
        ]}
      ]
    },
    {
      id: 'pe-t5', nome: 'Título V — Dos crimes contra o sentimento religioso e contra o respeito aos mortos', faixa: 'arts. 208 a 212',
      capitulos: [
        { id: 'pe-t5-c1', nome: 'Cap. I — Dos crimes contra o sentimento religioso', artigos: [
          ['208', 'Ultraje a culto e impedimento ou perturbação de ato a ele relativo']
        ]},
        { id: 'pe-t5-c2', nome: 'Cap. II — Dos crimes contra o respeito aos mortos', artigos: [
          ['209', 'Impedimento ou perturbação de cerimônia funerária'],
          ['210', 'Violação de sepultura'],
          ['211', 'Destruição, subtração ou ocultação de cadáver'],
          ['212', 'Vilipêndio a cadáver']
        ]}
      ]
    },
    {
      id: 'pe-t6', nome: 'Título VI — Dos crimes contra a dignidade sexual', faixa: 'arts. 213 a 234-B',
      capitulos: [
        { id: 'pe-t6-c1', nome: 'Cap. I — Dos crimes contra a liberdade sexual', artigos: [
          ['213', 'Estupro'],
          ['215', 'Violação sexual mediante fraude'],
          ['215-A', 'Importunação sexual'],
          ['216-A', 'Assédio sexual']
        ]},
        { id: 'pe-t6-c1a', nome: 'Cap. I-A — Da exposição da intimidade sexual', artigos: [
          ['216-B', 'Registro não autorizado da intimidade sexual']
        ]},
        { id: 'pe-t6-c2', nome: 'Cap. II — Dos crimes sexuais contra vulnerável', artigos: [
          ['217-A', 'Estupro de vulnerável'],
          ['218', 'Corrupção de menores'],
          ['218-A', 'Satisfação de lascívia mediante presença de criança ou adolescente'],
          ['218-B', 'Favorecimento da prostituição ou de outra forma de exploração sexual de vulnerável'],
          ['218-C', 'Divulgação de cena de estupro, de sexo ou de pornografia']
        ]},
        { id: 'pe-t6-c4', nome: 'Cap. IV — Disposições gerais', artigos: [
          ['225', 'Ação penal nos crimes contra a dignidade sexual'],
          ['226', 'Causas de aumento de pena']
        ]},
        { id: 'pe-t6-c5', nome: 'Cap. V — Do lenocínio e do tráfico de pessoa para fim de prostituição', artigos: [
          ['227', 'Mediação para servir a lascívia de outrem'],
          ['228', 'Favorecimento da prostituição ou de outra forma de exploração sexual'],
          ['229', 'Casa de prostituição'],
          ['230', 'Rufianismo']
        ]},
        { id: 'pe-t6-c6', nome: 'Cap. VI — Do ultraje público ao pudor', artigos: [
          ['233', 'Ato obsceno'],
          ['234', 'Escrito ou objeto obsceno']
        ]},
        { id: 'pe-t6-c7', nome: 'Cap. VII — Disposições gerais', artigos: [
          ['234-A', 'Causas de aumento de pena (gravidez, contágio, vulnerável)'],
          ['234-B', 'Segredo de justiça']
        ]}
      ]
    },
    {
      id: 'pe-t7', nome: 'Título VII — Dos crimes contra a família', faixa: 'arts. 235 a 249',
      capitulos: [
        { id: 'pe-t7-c1', nome: 'Cap. I — Dos crimes contra o casamento', artigos: [
          ['235', 'Bigamia'],
          ['236', 'Induzimento a erro essencial e ocultação de impedimento'],
          ['237', 'Conhecimento prévio de impedimento'],
          ['238', 'Simulação de autoridade para celebração de casamento'],
          ['239', 'Simulação de casamento']
        ]},
        { id: 'pe-t7-c2', nome: 'Cap. II — Dos crimes contra o estado de filiação', artigos: [
          ['241', 'Registro de nascimento inexistente'],
          ['242', 'Parto suposto; supressão ou alteração de direito inerente ao estado civil de recém-nascido'],
          ['243', 'Sonegação de estado de filiação']
        ]},
        { id: 'pe-t7-c3', nome: 'Cap. III — Dos crimes contra a assistência familiar', artigos: [
          ['244', 'Abandono material'],
          ['245', 'Entrega de filho menor a pessoa inidônea'],
          ['246', 'Abandono intelectual'],
          ['247', 'Permissão de frequência de menor a local impróprio (abandono moral)']
        ]},
        { id: 'pe-t7-c4', nome: 'Cap. IV — Dos crimes contra o poder familiar, tutela ou curatela', artigos: [
          ['248', 'Induzimento a fuga, entrega arbitrária ou sonegação de incapazes'],
          ['249', 'Subtração de incapazes']
        ]}
      ]
    },
    {
      id: 'pe-t8', nome: 'Título VIII — Dos crimes contra a incolumidade pública', faixa: 'arts. 250 a 285',
      capitulos: [
        { id: 'pe-t8-c1', nome: 'Cap. I — Dos crimes de perigo comum', artigos: [
          ['250', 'Incêndio'],
          ['251', 'Explosão'],
          ['252', 'Uso de gás tóxico ou asfixiante'],
          ['253', 'Fabrico, fornecimento, aquisição, posse ou transporte de explosivos ou gás tóxico'],
          ['254', 'Inundação'],
          ['255', 'Perigo de inundação'],
          ['256', 'Desabamento ou desmoronamento'],
          ['257', 'Subtração, ocultação ou inutilização de material de salvamento'],
          ['258', 'Formas qualificadas de crime de perigo comum'],
          ['259', 'Difusão de doença ou praga']
        ]},
        { id: 'pe-t8-c2', nome: 'Cap. II — Dos crimes contra a segurança dos meios de comunicação, transporte e outros serviços públicos', artigos: [
          ['260', 'Perigo de desastre ferroviário'],
          ['261', 'Atentado contra a segurança de transporte marítimo, fluvial ou aéreo'],
          ['262', 'Atentado contra a segurança de outro meio de transporte'],
          ['263', 'Forma qualificada'],
          ['264', 'Arremesso de projétil'],
          ['265', 'Atentado contra a segurança de serviço de utilidade pública'],
          ['266', 'Interrupção ou perturbação de serviço telegráfico, telefônico, informático ou telemático']
        ]},
        { id: 'pe-t8-c3', nome: 'Cap. III — Dos crimes contra a saúde pública', artigos: [
          ['267', 'Epidemia'],
          ['268', 'Infração de medida sanitária preventiva'],
          ['269', 'Omissão de notificação de doença'],
          ['270', 'Envenenamento de água potável ou de substância alimentícia ou medicinal'],
          ['271', 'Corrupção ou poluição de água potável'],
          ['272', 'Falsificação, corrupção, adulteração ou alteração de substância ou produtos alimentícios'],
          ['273', 'Falsificação de produtos destinados a fins terapêuticos ou medicinais'],
          ['274', 'Emprego de processo proibido ou de substância não permitida'],
          ['275', 'Invólucro ou recipiente com falsa indicação'],
          ['276', 'Produto ou substância nas condições dos dois artigos anteriores'],
          ['277', 'Substância destinada à falsificação'],
          ['278', 'Outras substâncias nocivas à saúde pública'],
          ['280', 'Medicamento em desacordo com receita médica'],
          ['282', 'Exercício ilegal da medicina, arte dentária ou farmacêutica'],
          ['283', 'Charlatanismo'],
          ['284', 'Curandeirismo'],
          ['285', 'Formas qualificadas (aplicação do art. 258)']
        ]}
      ]
    },
    {
      id: 'pe-t9', nome: 'Título IX — Dos crimes contra a paz pública', faixa: 'arts. 286 a 288-A',
      capitulos: [
        { id: 'pe-t9-u', nome: 'Dos crimes contra a paz pública', artigos: [
          ['286', 'Incitação ao crime'],
          ['287', 'Apologia de crime ou criminoso'],
          ['288', 'Associação criminosa'],
          ['288-A', 'Constituição de milícia privada']
        ]}
      ]
    },
    {
      id: 'pe-t10', nome: 'Título X — Dos crimes contra a fé pública', faixa: 'arts. 289 a 311-A',
      capitulos: [
        { id: 'pe-t10-c1', nome: 'Cap. I — Da moeda falsa', artigos: [
          ['289', 'Moeda falsa'],
          ['290', 'Crimes assimilados ao de moeda falsa'],
          ['291', 'Petrechos para falsificação de moeda'],
          ['292', 'Emissão de título ao portador sem permissão legal']
        ]},
        { id: 'pe-t10-c2', nome: 'Cap. II — Da falsidade de títulos e outros papéis públicos', artigos: [
          ['293', 'Falsificação de papéis públicos'],
          ['294', 'Petrechos de falsificação'],
          ['295', 'Aumento de pena — funcionário público']
        ]},
        { id: 'pe-t10-c3', nome: 'Cap. III — Da falsidade documental', artigos: [
          ['296', 'Falsificação do selo ou sinal público'],
          ['297', 'Falsificação de documento público'],
          ['298', 'Falsificação de documento particular'],
          ['299', 'Falsidade ideológica'],
          ['300', 'Falso reconhecimento de firma ou letra'],
          ['301', 'Certidão ou atestado ideologicamente falso'],
          ['302', 'Falsidade de atestado médico'],
          ['303', 'Reprodução ou adulteração de coisa destinada a documento'],
          ['304', 'Uso de documento falso'],
          ['305', 'Supressão de documento']
        ]},
        { id: 'pe-t10-c4', nome: 'Cap. IV — De outras falsidades', artigos: [
          ['306', 'Falsificação do sinal empregado no contraste de metal precioso'],
          ['307', 'Falsa identidade'],
          ['308', 'Uso de documento de identidade alheio'],
          ['309', 'Fraude de lei sobre estrangeiro'],
          ['310', 'Prestação de nome em fraude de lei sobre estrangeiro'],
          ['311', 'Adulteração de sinal identificador de veículo automotor']
        ]},
        { id: 'pe-t10-c5', nome: 'Cap. V — Das fraudes em certames de interesse público', artigos: [
          ['311-A', 'Fraudes em certames de interesse público']
        ]}
      ]
    },
    {
      id: 'pe-t11', nome: 'Título XI — Dos crimes contra a administração pública', faixa: 'arts. 312 a 359-H',
      capitulos: [
        { id: 'pe-t11-c1', nome: 'Cap. I — Dos crimes praticados por funcionário público contra a administração em geral', artigos: [
          ['312', 'Peculato (apropriação, desvio, furto e culposo)'],
          ['313', 'Peculato mediante erro de outrem'],
          ['313-A', 'Inserção de dados falsos em sistema de informações'],
          ['313-B', 'Modificação ou alteração não autorizada de sistema de informações'],
          ['314', 'Extravio, sonegação ou inutilização de livro ou documento'],
          ['315', 'Emprego irregular de verbas ou rendas públicas'],
          ['316', 'Concussão e excesso de exação'],
          ['317', 'Corrupção passiva'],
          ['318', 'Facilitação de contrabando ou descaminho'],
          ['319', 'Prevaricação'],
          ['319-A', 'Prevaricação imprópria (celular em presídio)'],
          ['320', 'Condescendência criminosa'],
          ['321', 'Advocacia administrativa'],
          ['322', 'Violência arbitrária'],
          ['323', 'Abandono de função'],
          ['324', 'Exercício funcional ilegalmente antecipado ou prolongado'],
          ['325', 'Violação de sigilo funcional'],
          ['327', 'Conceito de funcionário público para fins penais']
        ]},
        { id: 'pe-t11-c2', nome: 'Cap. II — Dos crimes praticados por particular contra a administração em geral', artigos: [
          ['328', 'Usurpação de função pública'],
          ['329', 'Resistência'],
          ['330', 'Desobediência'],
          ['331', 'Desacato'],
          ['332', 'Tráfico de influência'],
          ['333', 'Corrupção ativa'],
          ['334', 'Descaminho'],
          ['334-A', 'Contrabando'],
          ['336', 'Inutilização de edital ou de sinal'],
          ['337', 'Subtração ou inutilização de livro ou documento'],
          ['337-A', 'Sonegação de contribuição previdenciária']
        ]},
        { id: 'pe-t11-c2a', nome: 'Cap. II-A — Dos crimes praticados por particular contra a administração pública estrangeira', artigos: [
          ['337-B', 'Corrupção ativa em transação comercial internacional'],
          ['337-C', 'Tráfico de influência em transação comercial internacional'],
          ['337-D', 'Conceito de funcionário público estrangeiro']
        ]},
        { id: 'pe-t11-c2b', nome: 'Cap. II-B — Dos crimes em licitações e contratos administrativos', artigos: [
          ['337-E', 'Contratação direta ilegal'],
          ['337-F', 'Frustração do caráter competitivo de licitação'],
          ['337-G', 'Patrocínio de contratação indevida'],
          ['337-H', 'Modificação ou pagamento irregular em contrato administrativo'],
          ['337-I', 'Perturbação de processo licitatório'],
          ['337-J', 'Violação de sigilo em licitação'],
          ['337-K', 'Afastamento de licitante'],
          ['337-L', 'Fraude em licitação ou contrato'],
          ['337-M', 'Contratação inidônea'],
          ['337-N', 'Impedimento indevido'],
          ['337-O', 'Omissão grave de dado ou de informação por projetista'],
          ['337-P', 'Pena de multa nos crimes licitatórios']
        ]},
        { id: 'pe-t11-c3', nome: 'Cap. III — Dos crimes contra a administração da justiça', artigos: [
          ['338', 'Reingresso de estrangeiro expulso'],
          ['339', 'Denunciação caluniosa'],
          ['340', 'Comunicação falsa de crime ou de contravenção'],
          ['341', 'Autoacusação falsa'],
          ['342', 'Falso testemunho ou falsa perícia'],
          ['343', 'Corrupção ativa de testemunha, perito, tradutor ou intérprete'],
          ['344', 'Coação no curso do processo'],
          ['345', 'Exercício arbitrário das próprias razões'],
          ['346', 'Subtração de coisa própria em poder de terceiro'],
          ['347', 'Fraude processual'],
          ['348', 'Favorecimento pessoal'],
          ['349', 'Favorecimento real'],
          ['349-A', 'Ingresso de aparelho telefônico em estabelecimento prisional'],
          ['351', 'Fuga de pessoa presa ou submetida a medida de segurança'],
          ['352', 'Evasão mediante violência contra a pessoa'],
          ['353', 'Arrebatamento de preso'],
          ['354', 'Motim de presos'],
          ['355', 'Patrocínio infiel; patrocínio simultâneo ou tergiversação'],
          ['356', 'Sonegação de papel ou objeto de valor probatório'],
          ['357', 'Exploração de prestígio'],
          ['358', 'Violência ou fraude em arrematação judicial'],
          ['359', 'Desobediência a decisão judicial sobre perda ou suspensão de direito']
        ]},
        { id: 'pe-t11-c4', nome: 'Cap. IV — Dos crimes contra as finanças públicas', artigos: [
          ['359-A', 'Contratação de operação de crédito'],
          ['359-B', 'Inscrição de despesas não empenhadas em restos a pagar'],
          ['359-C', 'Assunção de obrigação no último ano do mandato ou legislatura'],
          ['359-D', 'Ordenação de despesa não autorizada'],
          ['359-E', 'Prestação de garantia graciosa'],
          ['359-F', 'Não cancelamento de restos a pagar'],
          ['359-G', 'Aumento de despesa total com pessoal no último ano do mandato'],
          ['359-H', 'Oferta pública ou colocação de títulos no mercado']
        ]}
      ]
    },
    {
      id: 'pe-t12', nome: 'Título XII — Dos crimes contra o Estado Democrático de Direito', faixa: 'arts. 359-I a 359-T',
      capitulos: [
        { id: 'pe-t12-c1', nome: 'Cap. I — Dos crimes contra a soberania nacional', artigos: [
          ['359-I', 'Atentado à soberania'],
          ['359-J', 'Atentado à integridade nacional'],
          ['359-K', 'Espionagem']
        ]},
        { id: 'pe-t12-c2', nome: 'Cap. II — Dos crimes contra as instituições democráticas', artigos: [
          ['359-L', 'Abolição violenta do Estado Democrático de Direito'],
          ['359-M', 'Golpe de Estado']
        ]},
        { id: 'pe-t12-c3', nome: 'Cap. III — Dos crimes contra o funcionamento das instituições democráticas no processo eleitoral', artigos: [
          ['359-N', 'Interrupção do processo eleitoral'],
          ['359-O', 'Violência política']
        ]},
        { id: 'pe-t12-c4', nome: 'Cap. IV — Dos crimes contra o funcionamento dos serviços essenciais', artigos: [
          ['359-P', 'Sabotagem']
        ]},
        { id: 'pe-t12-c5', nome: 'Cap. V — Disposições comuns', artigos: [
          ['359-T', 'Exclusão de crime — manifestação crítica e atividade jornalística ou político-partidária']
        ]}
      ]
    },
    {
      id: 'pe-df', nome: 'Disposições finais', faixa: 'arts. 360 e 361',
      capitulos: [
        { id: 'pe-df-u', nome: 'Disposições finais', artigos: [
          ['360', 'Ressalva de legislação especial'],
          ['361', 'Vigência do Código Penal']
        ]}
      ]
    }
  ]
}
];

/* Índice auxiliar: artigo -> {nomen, capituloId, capituloNome, tituloNome, parte} */
const CP_INDICE = (function () {
  const idx = {};
  CP_ESTRUTURA.forEach(function (parte) {
    parte.titulos.forEach(function (tit) {
      tit.capitulos.forEach(function (cap) {
        cap.artigos.forEach(function (a) {
          idx[a[0]] = {
            numero: a[0], nomen: a[1],
            capituloId: cap.id, capituloNome: cap.nome,
            tituloId: tit.id, tituloNome: tit.nome,
            parteId: parte.id, parteNome: parte.nome
          };
        });
      });
    });
  });
  return idx;
})();

if (typeof module !== 'undefined') { module.exports = { CP_ESTRUTURA: CP_ESTRUTURA, CP_INDICE: CP_INDICE }; }
