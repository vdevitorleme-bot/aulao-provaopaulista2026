// BANCO DE DADOS COMPLETO - PROVÃO PAULISTA 2026
const dadosAulas = {
    filosofia: {
        1: {
            titulo: "Mito e Filosofia",
            subtitulo: "As origens do pensamento filosófico na Grécia Antiga",
            imagem: "https://images.unsplash.com/photo-1524492412937-b2807495d7a1?w=800",
            conteudo: `
                <h3>A Passagem do Mito ao Logos</h3>
                <p>O nascimento da filosofia na Grécia Antiga, por volta do século VI a.C., representa uma das maiores revoluções do pensamento humano. Antes da filosofia, os gregos explicavam o mundo através dos <strong>mitos</strong> - narrativas fantásticas que envolviam deuses, heróis e forças sobrenaturais para explicar a origem do universo, os fenômenos naturais e a condição humana.</p>
                
                <p>Com o surgimento da filosofia, ocorre a passagem do <em>mythos</em> (mito) para o <em>logos</em> (razão, palavra racional). Os primeiros filósofos, chamados de pré-socráticos, buscaram explicações naturais e racionais para a origem e organização do mundo, sem recorrer a intervenções divinas.</p>

                <div class="highlight-box">
                    <strong>Conceito-chave:</strong> A filosofia nasce da <em>admiração</em> (thaumazein, em grego) - o espanto diante do mundo que leva o ser humano a questionar e buscar explicações racionais.
                </div>

                <h3>Características do Pensamento Filosófico</h3>
                <ul>
                    <li><strong>Racionalidade:</strong> Uso da razão e da argumentação lógica</li>
                    <li><strong>Universalidade:</strong> Busca por verdades válidas para todos</li>
                    <li><strong>Crítica:</strong> Questionamento das tradições e opiniões estabelecidas</li>
                    <li><strong>Metodicidade:</strong> Uso de métodos sistemáticos de investigação</li>
                    <li><strong>Autonomia:</strong> Pensamento livre, não submetido a autoridades</li>
                </ul>

                <div class="philosopher">
                    <strong>🏛️ Tales de Mileto (século VI a.C.)</strong>
                    Considerado o primeiro filósofo ocidental, Tales propôs que a <em>água</em> seria o princípio (arché) de todas as coisas. Sua importância não está na resposta dada, mas na atitude de buscar uma explicação natural para a origem do universo, sem recorrer aos deuses.
                </div>

                <h3>Mito vs. Filosofia: Diferenças Fundamentais</h3>
                <p>Enquanto o mito se baseia na <strong>tradição</strong> e na <strong>autoridade</strong> dos poetas e sacerdotes, a filosofia se fundamenta na <strong>razão</strong> e na <strong>argumentação</strong>. O mito aceita explicações sobrenaturais; a filosofia busca causas naturais. O mito narra; a filosofia demonstra.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> O nascimento da filosofia representa a busca pela autonomia do pensamento humano, a valorização da razão e a tentativa de explicar o mundo de forma sistemática e crítica - valores fundamentais para a cidadania democrática.
                </div>
            `,
            bibliografia: [
                { titulo: "Filosofia Antiga", link: "https://pt.wikipedia.org/wiki/Filosofia_antiga", descricao: "Wikipedia - Visão geral da filosofia na Grécia Antiga" },
                { titulo: "Tales de Mileto", link: "https://pt.wikipedia.org/wiki/Tales_de_Mileto", descricao: "Wikipedia - O primeiro filósofo ocidental" },
                { titulo: "Mito", link: "https://pt.wikipedia.org/wiki/Mito", descricao: "Wikipedia - Conceito de mito e narrativas míticas" },
                { titulo: "Pré-socráticos", link: "https://pt.wikipedia.org/wiki/Pr%C3%A9-socr%C3%A1ticos", descricao: "Wikipedia - Os primeiros filósofos gregos" }
            ],
            quiz: [
                {
                    enunciado: "O nascimento da filosofia na Grécia Antiga representa uma importante transformação no pensamento humano. Sobre essa passagem do mito ao logos, é correto afirmar:",
                    alternativas: {
                        a: "A filosofia eliminou completamente o pensamento mítico, que desapareceu da cultura grega.",
                        b: "A filosofia representou a busca por explicações racionais e naturais para os fenômenos, sem recorrer a intervenções divinas.",
                        c: "O mito e a filosofia são exatamente a mesma coisa, apenas com nomes diferentes.",
                        d: "A filosofia surgiu como uma forma de religião mais sofisticada, mantendo a mesma estrutura narrativa dos mitos.",
                        e: "Os primeiros filósofos eram sacerdotes que buscavam conciliar religião e razão."
                    },
                    correta: "b",
                    explicacao: "A filosofia representou uma ruptura com o pensamento mítico ao buscar explicações racionais e naturais para os fenômenos do mundo. Isso não significou o desaparecimento do mito, mas o surgimento de uma nova forma de conhecimento baseada na razão (logos)."
                },
                {
                    enunciado: "Tales de Mileto é considerado o primeiro filósofo ocidental. Sua importância para a história da filosofia está principalmente no fato de que:",
                    alternativas: {
                        a: "Descobriu a água como elemento químico essencial para a vida.",
                        b: "Foi o primeiro a buscar uma explicação natural para a origem do universo, sem recorrer aos deuses.",
                        c: "Provou cientificamente que a água é o princípio de todas as coisas.",
                        d: "Criou a primeira religião monoteísta da Grécia.",
                        e: "Escreveu a primeira obra de ficção científica da humanidade."
                    },
                    correta: "b",
                    explicacao: "A importância de Tales não está em ter acertado sobre a água ser o princípio de todas as coisas, mas na atitude revolucionária de buscar uma explicação natural (e não sobrenatural) para a origem do universo."
                },
                {
                    enunciado: "A filosofia nasce da admiração (thaumazein), conforme afirmavam os gregos antigos. Esse conceito se refere:",
                    alternativas: {
                        a: "Ao medo dos fenômenos naturais que levava os homens a criar deuses.",
                        b: "À obediência cega às tradições e aos costumes estabelecidos.",
                        c: "Ao espanto e curiosidade diante do mundo que impulsiona o ser humano a questionar e buscar conhecimento.",
                        d: "À aceitação passiva das explicações mitológicas sobre a origem do cosmos.",
                        e: "Ao desprezo pela realidade sensível e valorização exclusiva do mundo das ideias."
                    },
                    correta: "c",
                    explicacao: "Thaumazein (admiração/espanto) é o estado de assombro e curiosidade diante do mundo que leva o ser humano a questionar. É essa atitude que dá origem à filosofia, conforme afirmavam Platão e Aristóteles."
                },
                {
                    enunciado: "Diferentemente do pensamento mítico, a filosofia se caracteriza por:",
                    alternativas: {
                        a: "Baseia-se exclusivamente na tradição e na autoridade dos antigos.",
                        b: "Aceita explicações sobrenaturais sem questionamento.",
                        c: "Utiliza a razão, a argumentação lógica e o pensamento crítico.",
                        d: "É acessível apenas a uma elite sacerdotal.",
                        e: "Dispensa a necessidade de métodos sistemáticos de investigação."
                    },
                    correta: "c",
                    explicacao: "A filosofia se caracteriza pelo uso da razão, da argumentação lógica e do pensamento crítico. Diferentemente do mito, que se baseia na tradição e na autoridade, a filosofia exige demonstração e questionamento."
                },
                {
                    enunciado: "Os filósofos pré-socráticos dedicaram-se principalmente a investigar a physis (natureza) e buscar o arché (princípio originário). Sobre esses primeiros filósofos, é correto afirmar:",
                    alternativas: {
                        a: "Todos concordavam que a água era o princípio de todas as coisas.",
                        b: "Eles negavam a existência de qualquer tipo de realidade ou verdade.",
                        c: "Cada um propôs diferentes princípios (água, ar, fogo, números, etc.) para explicar a origem do universo.",
                        d: "Eram todos atenienses e viveram na mesma época.",
                        e: "Rejeitavam completamente o uso da razão e preferiam a intuição mística."
                    },
                    correta: "c",
                    explicacao: "Os pré-socráticos propuseram diferentes princípios (arché): Tales (água), Anaxímenes (ar), Heráclito (fogo), Pitágoras (números). Essa diversidade mostra o caráter investigativo da filosofia nascente."
                }
            ]
        },
        2: {
            titulo: "Platão e Aristóteles",
            subtitulo: "A filosofia de Platão e Aristóteles na obra 'Escola de Atenas'",
            imagem: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?w=800",
            conteudo: `
                <h3>A Escola de Atenas: Encontro de Duas Filosofias</h3>
                <p>A famosa pintura de Rafael Sanzio, "A Escola de Atenas", representa o encontro entre as duas grandes correntes da filosofia grega: <strong>Platão</strong> e <strong>Aristóteles</strong>. Na obra, Platão aponta para cima (mundo das Ideias) e Aristóteles aponta para frente (mundo sensível).</p>

                <h3>Platão: O Mundo das Ideias</h3>
                <p>Para Platão, existe uma realidade superior e imutável chamada <strong>Mundo das Ideias</strong> (ou Mundo Inteligível), onde habitam as Formas perfeitas e eternas (a Ideia de Beleza, de Justiça, de Bem). O mundo que percebemos com os sentidos (<strong>Mundo Sensível</strong>) é apenas uma cópia imperfeita dessas Ideias.</p>

                <div class="philosopher">
                    <strong>🏛️ O Mito da Caverna</strong>
                    Platão usa a alegoria da caverna para ilustrar sua teoria: os prisioneiros acorrentados veem apenas sombras na parede e acreditam que são a realidade. O filósofo é aquele que se liberta das correntes, sai da caverna e contempla o Sol (a Ideia do Bem), retornando para libertar os outros.
                </div>

                <h3>Aristóteles: A Forma na Própria Coisa</h3>
                <p>Aristóteles, discípulo de Platão, critica a teoria das Ideias. Para ele, a forma não está em um mundo separado, mas <strong>na própria coisa</strong>. Cada ser é composto de <strong>matéria</strong> (hyle) e <strong>forma</strong> (morphe) - essa é a teoria do <strong>hilemorfismo</strong>.</p>

                <p>Aristóteles valoriza a <strong>experiência sensível</strong> e a <strong>observação</strong> como fontes de conhecimento. Ele desenvolveu a <strong>lógica</strong> (ciência do raciocínio correto) e classificou os seres vivos, sendo considerado o pai da biologia.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> Platão representa o racionalismo (conhecimento pela razão, mundo inteligível); Aristóteles representa o empirismo (conhecimento pela experiência, mundo sensível). Essa oposição percorre toda a história da filosofia.
                </div>
            `,
            bibliografia: [
                { titulo: "Platão", link: "https://pt.wikipedia.org/wiki/Plat%C3%A3o", descricao: "Wikipedia - Vida e obra do filósofo grego" },
                { titulo: "Aristóteles", link: "https://pt.wikipedia.org/wiki/Arist%C3%B3teles", descricao: "Wikipedia - O filósofo da experiência e da lógica" },
                { titulo: "Mito da Caverna", link: "https://pt.wikipedia.org/wiki/Alegoria_da_caverna", descricao: "Wikipedia - A famosa alegoria platônica" },
                { titulo: "A Escola de Atenas", link: "https://pt.wikipedia.org/wiki/A_Escola_de_Atenas", descricao: "Wikipedia - A pintura de Rafael Sanzio" }
            ],
            quiz: [
                {
                    enunciado: "Na famosa pintura 'A Escola de Atenas', de Rafael Sanzio, Platão e Aristóteles aparecem com gestos que simbolizam suas filosofias. Platão aponta para cima porque:",
                    alternativas: {
                        a: "Indica a existência dos deuses do Olimpo como explicação do mundo.",
                        b: "Representa o Mundo das Ideias, realidade superior e imutável que transcende o mundo sensível.",
                        c: "Mostra que a filosofia deve ser estudada apenas no céu, longe da realidade terrena.",
                        d: "Sinaliza a direção do sol, fonte de toda iluminação intelectual.",
                        e: "Aponta para a existência de vida após a morte como única verdade."
                    },
                    correta: "b",
                    explicacao: "Platão aponta para cima simbolizando o Mundo das Ideias (ou Inteligível), uma realidade superior, perfeita e imutável, da qual o mundo sensível é apenas uma cópia imperfeita."
                },
                {
                    enunciado: "Para Platão, o Mundo Sensível (o mundo que percebemos com os sentidos) se caracteriza por ser:",
                    alternativas: {
                        a: "Perfeito, imutável e eterno, refletindo a verdadeira realidade.",
                        b: "Uma cópia imperfeita e mutável do Mundo das Ideias.",
                        c: "A única realidade existente, não havendo nenhum outro mundo.",
                        d: "Completamente ilusório, sem qualquer relação com o Mundo das Ideias.",
                        e: "Superior ao Mundo das Ideias, pois é acessível a todos os seres humanos."
                    },
                    correta: "b",
                    explicacao: "Para Platão, o Mundo Sensível é uma cópia imperfeita, mutável e passageira do Mundo das Ideias, que é a verdadeira realidade perfeita e imutável."
                },
                {
                    enunciado: "Aristóteles critica a teoria das Ideias de Platão e propõe o hilemorfismo. Segundo essa teoria, todo ser é composto de:",
                    alternativas: {
                        a: "Corpo e alma, sendo a alma imortal e o corpo mortal.",
                        b: "Matéria (hyle) e forma (morphe), unidas indissociavelmente.",
                        c: "Ideia e sombra, sendo a ideia a verdadeira realidade.",
                        d: "Razão e emoção, em constante conflito interno.",
                        e: "Verdade e aparência, sendo apenas a verdade acessível ao conhecimento."
                    },
                    correta: "b",
                    explicacao: "O hilemorfismo aristotélico afirma que todo ser é composto de matéria (hyle - o potencial) e forma (morphe - o que atualiza esse potencial), unidas indissociavelmente na própria coisa."
                },
                {
                    enunciado: "No Mito da Caverna de Platão, os prisioneiros que conseguem sair da caverna e contemplar o Sol representam:",
                    alternativas: {
                        a: "Os sacerdotes que conhecem os mistérios religiosos.",
                        b: "Os políticos que governam a cidade com sabedoria.",
                        c: "Os filósofos que alcançam o conhecimento verdadeiro (a Ideia do Bem).",
                        d: "Os artistas que criam belas obras inspiradas pelos deuses.",
                        e: "Os guerreiros que defendem a cidade dos inimigos externos."
                    },
                    correta: "c",
                    explicacao: "Os prisioneiros que se libertam representam os filósofos que, através da razão, alcançam o conhecimento verdadeiro, simbolizado pelo Sol (a Ideia do Bem), e têm o dever de retornar para iluminar os outros."
                },
                {
                    enunciado: "A principal diferença entre Platão e Aristóteles no que se refere ao conhecimento pode ser resumida como:",
                    alternativas: {
                        a: "Platão valoriza a experiência sensível; Aristóteles valoriza a razão pura.",
                        b: "Platão é empirista; Aristóteles é racionalista.",
                        c: "Platão é racionalista (mundo das Ideias); Aristóteles é mais próximo do empirismo (experiência sensível).",
                        d: "Ambos concordam que o conhecimento vem exclusivamente dos sentidos.",
                        e: "Ambos rejeitam qualquer forma de conhecimento racional."
                    },
                    correta: "c",
                    explicacao: "Platão é racionalista: o conhecimento verdadeiro vem da razão e do Mundo das Ideias. Aristóteles valoriza mais a experiência sensível e a observação, sendo considerado precursor do empirismo."
                }
            ]
        },
        3: {
            titulo: "Arte e Estética",
            subtitulo: "A arte como objeto de reflexão filosófica",
            imagem: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=800",
            conteudo: `
                <h3>O que é Estética?</h3>
                <p>A <strong>Estética</strong> é o ramo da filosofia que estuda a beleza, a arte e a experiência sensível. O termo vem do grego <em>aisthesis</em>, que significa "sensação", "percepção". A estética não se limita a classificar o que é "bonito", mas busca compreender como a arte produz significados e afeta nossa experiência do mundo.</p>

                <h3>A Arte como Reflexão Filosófica</h3>
                <p>A arte não é apenas entretenimento ou decoração. Ela é uma forma de <strong>conhecimento</strong> que nos permite ver o mundo de novas perspectivas. A obra de arte provoca estranhamento, questiona estereótipos e nos convida a refletir sobre a condição humana.</p>

                <div class="philosopher">
                    <strong>🎨 Aristóteles e a Catarse</strong>
                    Para Aristóteles, a tragédia grega produz <em>catarse</em> - uma purificação das emoções (piedade e terror) através da experiência estética. A arte tem função terapêutica e cognitiva.
                </div>

                <h3>Conceitos Fundamentais da Estética</h3>
                <ul>
                    <li><strong>Beleza:</strong> Qualidade que provoca prazer estético (subjetiva ou objetiva?)</li>
                    <li><strong>Sublime:</strong> Experiência de grandiosidade que transcende a beleza (Kant)</li>
                    <li><strong>Mimese:</strong> Imitação da realidade (Platão vs. Aristóteles)</li>
                    <li><strong>Aura:</strong> Singularidade da obra de arte original (Walter Benjamin)</li>
                    <li><strong>Crítica de arte:</strong> Análise reflexiva da produção artística</li>
                </ul>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> A estética na filosofia busca compreender a experiência sensível, a produção de significados e a crítica cultural promovida pela arte. A arte desafia estereótipos e provoca reflexão sobre o mundo.
                </div>
            `,
            bibliografia: [
                { titulo: "Estética", link: "https://pt.wikipedia.org/wiki/Est%C3%A9tica", descricao: "Wikipedia - Ramo da filosofia que estuda a beleza e a arte" },
                { titulo: "Filosofia da arte", link: "https://pt.wikipedia.org/wiki/Filosofia_da_arte", descricao: "Wikipedia - Reflexões filosóficas sobre a arte" },
                { titulo: "Catarse", link: "https://pt.wikipedia.org/wiki/Catarse", descricao: "Wikipedia - Conceito aristotélico de purificação" },
                { titulo: "Walter Benjamin", link: "https://pt.wikipedia.org/wiki/Walter_Benjamin", descricao: "Wikipedia - Filósofo que analisou a arte na era técnica" }
            ],
            quiz: [
                {
                    enunciado: "A Estética, enquanto ramo da filosofia, tem como objeto de estudo principal:",
                    alternativas: {
                        a: "Apenas as obras de arte consideradas belas pela tradição ocidental.",
                        b: "A beleza, a arte e a experiência sensível, incluindo a produção de significados.",
                        c: "Exclusivamente a técnica de produção de obras de arte.",
                        d: "O valor de mercado das obras de arte em leilões internacionais.",
                        e: "A história biográfica dos grandes artistas da humanidade."
                    },
                    correta: "b",
                    explicacao: "A Estética estuda a beleza, a arte e a experiência sensível de forma ampla, incluindo como a arte produz significados e afeta nossa percepção do mundo, não se limitando ao que é tradicionalmente considerado belo."
                },
                {
                    enunciado: "Para Aristóteles, a tragédia grega produz a 'catarse', que pode ser compreendida como:",
                    alternativas: {
                        a: "Uma sensação de tédio provocada pela repetição dos enredos.",
                        b: "A condenação moral dos personagens pelo público espectador.",
                        c: "Uma purificação das emoções (piedade e terror) através da experiência estética.",
                        d: "A identificação completa do espectador com o herói da tragédia.",
                        e: "A rejeição de qualquer emoção em favor da razão pura."
                    },
                    correta: "c",
                    explicacao: "A catarse aristotélica é a purificação (ou purgação) das emoções de piedade e terror experimentadas pelo espectador da tragédia, produzindo um efeito terapêutico e cognitivo."
                },
                {
                    enunciado: "O conceito de 'aura', desenvolvido por Walter Benjamin, refere-se a:",
                    alternativas: {
                        a: "O brilho dourado presente em obras de arte religiosas medievais.",
                        b: "A singularidade e autenticidade da obra de arte original, perdida na era da reprodutibilidade técnica.",
                        c: "A capacidade de uma obra de arte gerar lucro no mercado.",
                        d: "A fama do artista que produz a obra.",
                        e: "A técnica utilizada pelo artista na criação da obra."
                    },
                    correta: "b",
                    explicacao: "Para Walter Benjamin, a 'aura' é a singularidade, autenticidade e presença única da obra de arte original, que se perde quando a obra pode ser reproduzida tecnicamente em massa (fotografia, cinema, etc.)."
                },
                {
                    enunciado: "A arte, na perspectiva filosófica, pode ser compreendida como:",
                    alternativas: {
                        a: "Apenas entretenimento sem qualquer relação com o conhecimento.",
                        b: "Uma forma de conhecimento que provoca estranhamento e reflexão sobre o mundo.",
                        c: "Uma atividade exclusiva de gênios inspirados por forças divinas.",
                        d: "Uma cópia fiel da realidade sem qualquer interpretação.",
                        e: "Uma atividade inútil que não contribui para a sociedade."
                    },
                    correta: "b",
                    explicacao: "Filosoficamente, a arte é uma forma de conhecimento que nos permite ver o mundo de novas perspectivas, provocando estranhamento, questionando estereótipos e convidando à reflexão sobre a condição humana."
                },
                {
                    enunciado: "O conceito de 'mimese', presente em Platão e Aristóteles, refere-se a:",
                    alternativas: {
                        a: "A criação artística completamente original, sem relação com a realidade.",
                        b: "A imitação ou representação da realidade pela arte.",
                        c: "A rejeição de qualquer forma de representação artística.",
                        d: "A técnica de pintura desenvolvida no Renascimento italiano.",
                        e: "A crítica social presente nas obras de arte contemporâneas."
                    },
                    correta: "b",
                    explicacao: "Mimese (do grego 'imitação') é o conceito que designa a imitação ou representação da realidade pela arte. Platão critica a mimese por ser cópia de uma cópia; Aristóteles a valoriza como forma de conhecimento."
                }
            ]
        },
        4: {
            titulo: "Dignidade Humana",
            subtitulo: "Pico della Mirandola e Kant: fundamentos dos Direitos Humanos",
            imagem: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
            conteudo: `
                <h3>O Renascimento e a Dignidade Humana</h3>
                <p>No Renascimento, <strong>Pico della Mirandola</strong> escreveu o "Discurso sobre a Dignidade do Homem" (1486), considerado o "manifesto do Renascimento". Para Pico, Deus deu ao ser humano o <strong>livre-arbítrio</strong>: você pode degenerar até os brutos ou regenerar até o divino. O ser humano é o "artífice de si mesmo".</p>

                <div class="philosopher">
                    <strong>📜 Pico della Mirandola (1463-1494)</strong>
                    "Não te dei, ó Adão, um lugar determinado, nem um aspecto que te seja próprio, nem qualquer prerrogativa peculiar, para que o lugar, o aspecto e as prerrogativas que desejares, conforme teu voto e sentença, obtenhas e conserves."
                </div>

                <h3>Kant e a Dignidade como Fim em Si Mesmo</h3>
                <p><strong>Immanuel Kant</strong> (1724-1804) desenvolveu a ética do dever baseada na <strong>razão</strong>. Para Kant, todo ser humano tem <strong>dignidade</strong> (valor absoluto), não <strong>preço</strong> (valor relativo). Isso significa que o ser humano deve ser tratado sempre como <strong>fim</strong>, nunca apenas como <strong>meio</strong>.</p>

                <h3>O Imperativo Categórico</h3>
                <p>Kant formulou o <strong>Imperativo Categórico</strong>: "Age de tal maneira que uses a humanidade, tanto na tua pessoa como na pessoa de qualquer outro, sempre e simultaneamente como fim e nunca simplesmente como meio."</p>

                <p>Isso significa que existem ações que são <strong>dever</strong> independentemente das consequências. Matar, mentir, explorar - são sempre erradas, pois tratam o ser humano como meio, não como fim.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> A dignidade humana é o fundamento filosófico dos Direitos Humanos. Kant mostra que todo ser humano tem valor absoluto por ser racional e autônomo. Essa ideia está na base da Declaração Universal dos Direitos Humanos (1948) e da Constituição Brasileira de 1988.
                </div>
            `,
            bibliografia: [
                { titulo: "Immanuel Kant", link: "https://pt.wikipedia.org/wiki/Immanuel_Kant", descricao: "Wikipedia - Vida e obra do filósofo alemão" },
                { titulo: "Imperativo categórico", link: "https://pt.wikipedia.org/wiki/Imperativo_categ%C3%B3rico", descricao: "Wikipedia - O princípio fundamental da ética kantiana" },
                { titulo: "Pico della Mirandola", link: "https://pt.wikipedia.org/wiki/Giovanni_Pico_della_Mirandola", descricao: "Wikipedia - Filósofo renascentista italiano" },
                { titulo: "Dignidade humana", link: "https://pt.wikipedia.org/wiki/Dignidade_humana", descricao: "Wikipedia - Conceito fundamental dos Direitos Humanos" }
            ],
            quiz: [
                {
                    enunciado: "Para Immanuel Kant, a dignidade humana se diferencia do 'preço' porque:",
                    alternativas: {
                        a: "A dignidade pode ser medida em dinheiro; o preço não.",
                        b: "A dignidade é um valor absoluto e incondicional; o preço é relativo e pode ser substituído.",
                        c: "A dignidade se aplica apenas a pessoas ricas; o preço a todas as pessoas.",
                        d: "A dignidade é um conceito religioso; o preço é um conceito filosófico.",
                        e: "Não há diferença real entre os dois conceitos."
                    },
                    correta: "b",
                    explicacao: "Para Kant, tudo que tem 'preço' pode ser substituído por algo equivalente. A dignidade, porém, é um valor absoluto e incondicional, próprio dos seres racionais, que não podem ser substituídos nem tratados como meios."
                },
                {
                    enunciado: "O Imperativo Categórico de Kant, em uma de suas formulações, determina que devemos tratar a humanidade:",
                    alternativas: {
                        a: "Como meio para alcançar nossos objetivos pessoais.",
                        b: "Sempre e simultaneamente como fim, nunca simplesmente como meio.",
                        c: "De acordo com as consequências das nossas ações.",
                        d: "Apenas quando isso trouxer felicidade para o maior número.",
                        e: "Conforme as tradições e costumes de cada sociedade."
                    },
                    correta: "b",
                    explicacao: "A fórmula da humanidade do Imperativo Categórico determina que devemos tratar a humanidade (em nós e nos outros) sempre como fim, nunca apenas como meio. Isso funda a dignidade humana."
                },
                {
                    enunciado: "Pico della Mirandola, no 'Discurso sobre a Dignidade do Homem', defende que o ser humano se caracteriza por:",
                    alternativas: {
                        a: "Ter um lugar fixo e determinado na criação divina.",
                        b: "Ser completamente determinado pela natureza, sem liberdade.",
                        c: "Possuir livre-arbítrio, podendo escolher entre degenerar ou se elevar.",
                        d: "Ser inferior aos animais por não possuir instintos desenvolvidos.",
                        e: "Estar destinado exclusivamente à salvação religiosa."
                    },
                    correta: "c",
                    explicacao: "Pico della Mirandola destaca que o ser humano, diferentemente das outras criaturas, não tem lugar fixo: possui livre-arbítrio para escolher seu destino, podendo degenerar ou se regenerar, sendo 'artífice de si mesmo'."
                },
                {
                    enunciado: "A dignidade humana, na perspectiva kantiana, está fundamentada:",
                    alternativas: {
                        a: "Na capacidade de sentir prazer e evitar a dor.",
                        b: "Na força física e na habilidade de dominar a natureza.",
                        c: "Na racionalidade e autonomia do ser humano.",
                        d: "Na riqueza material acumulada ao longo da vida.",
                        e: "Na tradição religiosa e nos costumes herdados."
                    },
                    correta: "c",
                    explicacao: "Para Kant, a dignidade humana deriva da racionalidade e autonomia: a capacidade de agir segundo a razão e de se autodeterminar por princípios morais, não por inclinações sensíveis."
                },
                {
                    enunciado: "A Declaração Universal dos Direitos Humanos (1948) tem como um de seus fundamentos filosóficos:",
                    alternativas: {
                        a: "A ideia de que os direitos são concedidos pelo Estado conforme sua conveniência.",
                        b: "A noção kantiana de que todo ser humano tem dignidade e deve ser tratado como fim.",
                        c: "A crença de que apenas pessoas de certas nações possuem direitos.",
                        d: "A ideia de que os direitos dependem da capacidade econômica de cada pessoa.",
                        e: "A tradição de que apenas homens brancos e proprietários têm direitos."
                    },
                    correta: "b",
                    explicacao: "A Declaração Universal dos Direitos Humanos se fundamenta na ideia kantiana de dignidade: todo ser humano, por ser racional e autônomo, possui valor absoluto e direitos inalienáveis, independentemente de qualquer condição."
                }
            ]
        },
        5: {
            titulo: "Hannah Arendt e a Violência",
            subtitulo: "Análises filosóficas do fenômeno da violência",
            imagem: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800",
            conteudo: `
                <h3>Hannah Arendt: Pensando o Século XX</h3>
                <p><strong>Hannah Arendt</strong> (1906-1975) foi uma das mais importantes pensadoras políticas do século XX. Judeu-alemã que fugiu do nazismo, ela analisou os fenômenos do <strong>totalitarismo</strong>, da <strong>violência</strong> e da <strong>banalidade do mal</strong>.</p>

                <div class="philosopher">
                    <strong>📖 A Banalidade do Mal</strong>
                    Em 1961, Arendt cobriu o julgamento de Adolf Eichmann, burocrata nazista responsável pela logística do Holocausto. Ela percebeu que Eichmann não era um "monstro sádico", mas um homem comum que <strong>parou de pensar</strong> e obedeceu cegamente às ordens. Daí o conceito de "banalidade do mal": o mal pode ser cometido por pessoas comuns que deixam de exercer o pensamento crítico.
                </div>

                <h3>Poder vs. Violência</h3>
                <p>Para Arendt, <strong>poder</strong> e <strong>violência</strong> são coisas diferentes:</p>
                <ul>
                    <li><strong>Poder:</strong> Surge da ação conjunta dos cidadãos, da capacidade de agir em conjunto. É próprio da política democrática.</li>
                    <li><strong>Violência:</strong> É instrumental, usa meios para dominar. É o oposto da política, pois destrói o espaço público do diálogo.</li>
                </ul>

                <p>Quando um governo recorre à violência, ele está admitindo que <strong>perdeu o poder</strong> (a capacidade de convencer e agir em conjunto). A violência é sinal de impotência política.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> A "banalidade do mal" não significa que o mal é trivial, mas que pode ser cometido por pessoas comuns que deixam de pensar criticamente e obedecem cegamente. A violência é o oposto da política democrática, que se baseia no diálogo e na ação conjunta.
                </div>
            `,
            bibliografia: [
                { titulo: "Hannah Arendt", link: "https://pt.wikipedia.org/wiki/Hannah_Arendt", descricao: "Wikipedia - Vida e obra da pensadora política" },
                { titulo: "Eichmann em Jerusalém", link: "https://pt.wikipedia.org/wiki/Eichmann_em_Jerusal%C3%A9m", descricao: "Wikipedia - Livro sobre a banalidade do mal" },
                { titulo: "Origens do Totalitarismo", link: "https://pt.wikipedia.org/wiki/Origens_do_Totalitarismo", descricao: "Wikipedia - Obra fundamental de Arendt" },
                { titulo: "Banalidade do mal", link: "https://pt.wikipedia.org/wiki/Banalidade_do_mal", descricao: "Wikipedia - Conceito arendtiano" }
            ],
            quiz: [
                {
                    enunciado: "O conceito de 'banalidade do mal', desenvolvido por Hannah Arendt, afirma que:",
                    alternativas: {
                        a: "O mal é sempre praticado por pessoas sádicas e monstruosas.",
                        b: "O mal pode ser cometido por pessoas comuns que deixam de pensar criticamente e obedecem cegamente a ordens.",
                        c: "O mal não existe, sendo apenas uma construção social.",
                        d: "O mal é uma característica exclusiva de regimes totalitários nazistas.",
                        e: "O mal é inevitável e não pode ser combatido."
                    },
                    correta: "b",
                    explicacao: "Arendt observou que Eichmann não era um monstro, mas um burocrata comum que parou de pensar e obedeceu ordens. A 'banalidade do mal' mostra que o mal radical pode ser cometido por pessoas ordinárias em sistemas que eliminam o pensamento crítico."
                },
                {
                    enunciado: "Para Hannah Arendt, a diferença fundamental entre poder e violência é que:",
                    alternativas: {
                        a: "São a mesma coisa, apenas com nomes diferentes.",
                        b: "O poder surge da ação conjunta dos cidadãos; a violência é instrumental e destrói o espaço político.",
                        c: "O poder é sempre violento; a violência é sempre legítima.",
                        d: "O poder pertence apenas ao Estado; a violência pertence aos cidadãos.",
                        e: "O poder é uma ilusão; apenas a violência é real."
                    },
                    correta: "b",
                    explicacao: "Para Arendt, poder é a capacidade humana de agir em conjunto, própria da política democrática. A violência é instrumental, usa meios para dominar, e quando surge indica que o poder (a capacidade de convencer) foi perdido."
                },
                {
                    enunciado: "Adolf Eichmann, segundo a análise de Hannah Arendt, era:",
                    alternativas: {
                        a: "Um monstro sádico que sentia prazer em praticar o mal.",
                        b: "Um burocrata comum que parou de pensar e obedeceu cegamente às ordens do regime nazista.",
                        c: "Um herói alemão que lutou pela preservação da raça ariana.",
                        d: "Um filósofo que desenvolveu teorias sobre a superioridade germânica.",
                        e: "Um militar que combateu os inimigos da Alemanha em batalhas."
                    },
                    correta: "b",
                    explicacao: "Arendt descreveu Eichmann como um burocrata medíocre, sem ódio ideológico profundo, que apenas cumpria ordens e se preocupava com sua carreira. Sua 'falta de pensamento' permitiu que participasse do Holocausto."
                },
                {
                    enunciado: "Segundo Arendt, quando um governo recorre à violência, isso indica que:",
                    alternativas: {
                        a: "O governo está forte e exercendo plenamente seu poder.",
                        b: "O governo perdeu o poder (a capacidade de agir em conjunto e convencer).",
                        c: "O governo está cumprindo seu dever de proteger os cidadãos.",
                        d: "O governo está seguindo as tradições democráticas.",
                        e: "O governo está respondendo a uma necessidade econômica."
                    },
                    correta: "b",
                    explicacao: "Para Arendt, a violência é sinal de impotência política. Quando um governo precisa usar violência, é porque perdeu o poder verdadeiro, que é a capacidade de convencer e agir em conjunto com os cidadãos."
                },
                {
                    enunciado: "A contribuição de Hannah Arendt para a compreensão do totalitarismo se destaca por:",
                    alternativas: {
                        a: "Defender que o totalitarismo é uma forma legítima de governo.",
                        b: "Analisar como regimes totalitários eliminam o pensamento crítico e a esfera pública.",
                        c: "Mostrar que o totalitarismo é exclusivo da Alemanha nazista.",
                        d: "Afirmar que o totalitarismo é inevitável em todas as sociedades.",
                        e: "Defender que o totalitarismo é a melhor forma de organização social."
                    },
                    correta: "b",
                    explicacao: "Arendt analisou como o totalitarismo (nazismo e stalinismo) destrói a esfera pública, elimina o pensamento crítico, isola os indivíduos e usa o terror para manter o controle. Sua análise é fundamental para compreender os perigos autoritários."
                }
            ]
        },
        6: {
            titulo: "Contrato Social",
            subtitulo: "Hobbes, Locke e Rousseau: teorias contratualistas",
            imagem: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800",
            conteudo: `
                <h3>O Problema da Legitimidade do Poder</h3>
                <p>Por que obedecemos ao Estado? O que justifica o poder político? Os filósofos contratualistas responderam a essas perguntas com a teoria do <strong>contrato social</strong>: o poder político é legítimo porque decorre de um acordo (contrato) entre os indivíduos.</p>

                <h3>Thomas Hobbes: O Leviatã</h3>
                <p><strong>Hobbes</strong> (1588-1679) imagina o "estado de natureza" como uma <strong>guerra de todos contra todos</strong>. Sem Estado, os seres humanos vivem com medo constante. Para escapar desse caos, os indivíduos fazem um contrato e entregam <strong>todo o poder</strong> a um soberano absoluto: o <strong>Leviatã</strong>.</p>

                <div class="philosopher">
                    <strong>👑 Hobbes: "O homem é o lobo do homem"</strong>
                    Sem Estado, a vida é "solitária, pobre, sórdida, brutal e curta". O soberano absoluto é necessário para garantir a segurança. Liberdade individual é sacrificada em troca de ordem.
                </div>

                <h3>John Locke: O Liberalismo</h3>
                <p><strong>Locke</strong> (1632-1704) tem visão mais otimista. No estado de natureza, os indivíduos já têm <strong>direitos naturais</strong>: vida, liberdade e propriedade. O contrato social cria o Estado para <strong>proteger</strong> esses direitos, não para suprimi-los. Se o Estado violar esses direitos, o povo tem direito de <strong>resistência</strong>.</p>

                <h3>Jean-Jacques Rousseau: A Vontade Geral</h3>
                <p><strong>Rousseau</strong> (1712-1778) critica a sociedade que corrompe o homem naturalmente bom. "O homem nasce livre, e por toda a parte encontra-se a ferros". O verdadeiro contrato social deve expressar a <strong>vontade geral</strong> (o bem comum), não a vontade de todos (soma dos interesses individuais). A soberania pertence ao <strong>povo</strong>.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> Hobbes justifica o absolutismo (medo → ordem); Locke justifica o liberalismo (direitos naturais → Estado limitado); Rousseau justifica a democracia (vontade geral → soberania popular). Todos usam o conceito de "contrato social", mas com conclusões diferentes.
                </div>
            `,
            bibliografia: [
                { titulo: "Contrato social", link: "https://pt.wikipedia.org/wiki/Contrato_social", descricao: "Wikipedia - Teoria contratualista moderna" },
                { titulo: "Thomas Hobbes", link: "https://pt.wikipedia.org/wiki/Thomas_Hobbes", descricao: "Wikipedia - Filósofo do absolutismo" },
                { titulo: "John Locke", link: "https://pt.wikipedia.org/wiki/John_Locke", descricao: "Wikipedia - Pai do liberalismo político" },
                { titulo: "Jean-Jacques Rousseau", link: "https://pt.wikipedia.org/wiki/Jean-Jacques_Rousseau", descricao: "Wikipedia - Filósofo da vontade geral" }
            ],
            quiz: [
                {
                    enunciado: "Para Thomas Hobbes, o 'estado de natureza' se caracteriza por:",
                    alternativas: {
                        a: "Ser um período de paz e harmonia entre os seres humanos.",
                        b: "Ser uma guerra de todos contra todos, onde a vida é 'solitária, pobre, sórdida, brutal e curta'.",
                        c: "Ser um paraíso terrestre onde os seres humanos vivem em plena liberdade.",
                        d: "Ser uma sociedade organizada com leis e governo.",
                        e: "Ser um estado de completa igualdade entre todas as pessoas."
                    },
                    correta: "b",
                    explicacao: "Hobbes descreve o estado de natureza como uma guerra de todos contra todos, onde 'o homem é o lobo do homem'. Sem um poder comum que os mantenha em respeito, os indivíduos vivem em medo constante."
                },
                {
                    enunciado: "John Locke difere de Hobbes ao afirmar que, no estado de natureza, os indivíduos já possuem:",
                    alternativas: {
                        a: "Um soberano absoluto que os governa.",
                        b: "Direitos naturais: vida, liberdade e propriedade.",
                        c: "Uma guerra permanente contra todos os outros.",
                        d: "A necessidade de entregar todos os seus direitos a um governante.",
                        e: "A certeza de que a vida é solitária e miserável."
                    },
                    correta: "b",
                    explicacao: "Locke é mais otimista que Hobbes: no estado de natureza já existem direitos naturais (vida, liberdade, propriedade). O Estado é criado para PROTEGER esses direitos, não para suprimi-los como em Hobbes."
                },
                {
                    enunciado: "Para Rousseau, a 'vontade geral' se diferencia da 'vontade de todos' porque:",
                    alternativas: {
                        a: "A vontade geral é a soma dos interesses individuais; a vontade de todos visa o bem comum.",
                        b: "A vontade geral visa o bem comum; a vontade de todos é apenas a soma dos interesses particulares.",
                        c: "São exatamente a mesma coisa, sem diferença conceitual.",
                        d: "A vontade geral pertence ao soberano; a vontade de todos pertence ao povo.",
                        e: "A vontade geral é sempre autoritária; a vontade de todos é democrática."
                    },
                    correta: "b",
                    explicacao: "Para Rousseau, a vontade geral visa o bem comum e a justiça, enquanto a vontade de todos é apenas a soma dos interesses particulares. A verdadeira soberania popular expressa a vontade geral, não os interesses individuais."
                },
                {
                    enunciado: "A principal diferença entre as teorias contratualistas de Hobbes, Locke e Rousseau está:",
                    alternativas: {
                        a: "No fato de que apenas Hobbes acredita em contrato social.",
                        b: "Nas conclusões sobre o tipo de governo: Hobbes defende o absolutismo; Locke, o liberalismo; Rousseau, a democracia popular.",
                        c: "No fato de que Locke e Rousseau rejeitam a ideia de contrato social.",
                        d: "Na rejeição de todos eles à ideia de estado de natureza.",
                        e: "No fato de que apenas Rousseau acredita na liberdade individual."
                    },
                    correta: "b",
                    explicacao: "Os três usam o conceito de contrato social, mas chegam a conclusões diferentes: Hobbes justifica o absolutismo (Leviatã), Locke justifica o liberalismo (Estado limitado que protege direitos naturais), Rousseau justifica a democracia (soberania popular e vontade geral)."
                },
                {
                    enunciado: "Para Locke, se o Estado violar os direitos naturais dos cidadãos (vida, liberdade, propriedade), o povo tem:",
                    alternativas: {
                        a: "O dever de obedecer cegamente, pois o soberano é absoluto.",
                        b: "O direito de resistência, podendo depôr o governo que viola seus direitos.",
                        c: "A obrigação de fugir para outro país.",
                        d: "O dever de aceitar passivamente a situação.",
                        e: "A proibição de qualquer forma de protesto."
                    },
                    correta: "b",
                    explicacao: "Locke defende o direito de resistência: se o governo viola os direitos naturais para os quais foi criado, o povo tem o direito (e até o dever) de depô-lo e criar um novo governo que cumpra sua função."
                }
            ]
        },
        7: {
            titulo: "Hume e Kant",
            subtitulo: "O ceticismo de Hume e a resposta crítica de Kant",
            imagem: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
            conteudo: `
                <h3>O Desafio Cético de David Hume</h3>
                <p><strong>David Hume</strong> (1711-1776) foi um empirista radical: todo conhecimento vem da <strong>experiência sensível</strong>. Ele aplicou esse princípio à noção de <strong>causalidade</strong>: quando vemos uma bola de bilhar bater em outra e a segunda se mover, nós vemos apenas <strong>dois eventos</strong> em sequência, não a "causa" empurrando o "efeito".</p>

                <div class="philosopher">
                    <strong>🎱 O Problema da Causalidade</strong>
                    Hume argumenta que a ideia de "causa e efeito" não está nos objetos, mas é um <strong>hábito</strong> da mente. Vemos eventos repetidos juntos (fogo queima, sol aquece) e nossa mente cria a expectativa de que sempre será assim. Mas isso não é conhecimento necessário, é apenas costume.
                </div>

                <h3>O Ceticismo de Hume</h3>
                <p>Se a causalidade é apenas hábito, então a <strong>ciência</strong> perde seu fundamento. Não podemos ter certeza de que o sol vai nascer amanhã, nem de que as leis da natureza valem sempre. Isso é o <strong>ceticismo</strong>: suspensão do juízo sobre verdades absolutas.</p>

                <h3>A Resposta de Kant: A Revolução Copernicana</h3>
                <p><strong>Immanuel Kant</strong> (1724-1804) acordou do "sono dogmático" ao ler Hume. Ele concordou que o conhecimento começa com a experiência, mas argumentou que a mente humana não é uma "tábula rasa": ela já possui <strong>estruturas a priori</strong> (anteriores à experiência) que organizam o mundo.</p>

                <p>A <strong>causalidade</strong>, para Kant, não está nas coisas, mas é uma <strong>categoria do entendimento</strong> que nossa mente usa para organizar a experiência. Sem essa categoria, não poderíamos pensar o mundo. Assim, a ciência é possível, mas limitada ao mundo dos fenômenos (aparências), não das coisas em si.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> Hume (empirismo/ceticismo): conhecimento vem dos sentidos, causalidade é hábito. Kant (criticismo): conhecimento vem da experiência + estruturas a priori da mente. Kant "salva" a ciência do ceticismo de Hume, mas limita o conhecimento ao mundo fenomênico.
                </div>
            `,
            bibliografia: [
                { titulo: "David Hume", link: "https://pt.wikipedia.org/wiki/David_Hume", descricao: "Wikipedia - Filósofo empirista escocês" },
                { titulo: "Empirismo", link: "https://pt.wikipedia.org/wiki/Empirismo", descricao: "Wikipedia - Corrente filosófica da experiência" },
                { titulo: "Ceticismo", link: "https://pt.wikipedia.org/wiki/Ceticismo", descricao: "Wikipedia - Atitude filosófica de dúvida" },
                { titulo: "Crítica da Razão Pura", link: "https://pt.wikipedia.org/wiki/Cr%C3%ADtica_da_Raz%C3%A3o_Pura", descricao: "Wikipedia - Obra fundamental de Kant" }
            ],
            quiz: [
                {
                    enunciado: "Para David Hume, a ideia de causalidade (causa e efeito) se origina:",
                    alternativas: {
                        a: "Da razão pura, que conhece as leis necessárias da natureza.",
                        b: "Da revelação divina, que nos mostra as causas das coisas.",
                        c: "Do hábito de ver eventos repetidos juntos, não de uma conexão necessária observada nos objetos.",
                        d: "Da intuição mística dos grandes filósofos.",
                        e: "Da tradição transmitida de geração em geração."
                    },
                    correta: "c",
                    explicacao: "Hume argumenta que não observamos a 'causa' nos objetos, apenas a sucessão constante de eventos. A ideia de causalidade é um hábito da mente, não uma conexão necessária conhecida racionalmente."
                },
                {
                    enunciado: "O empirismo de David Hume afirma que:",
                    alternativas: {
                        a: "Todo conhecimento verdadeiro vem da razão pura, independente da experiência.",
                        b: "Todo conhecimento se origina da experiência sensível.",
                        c: "O conhecimento vem da revelação divina e da fé religiosa.",
                        d: "O conhecimento é inato, estando presente na mente desde o nascimento.",
                        e: "O conhecimento é impossível, devendo suspender todo juízo."
                    },
                    correta: "b",
                    explicacao: "O empirismo humeano defende que todo conhecimento se origina da experiência sensível. Não existem ideias inatas; a mente é inicialmente uma 'folha em branco' que se preenche com as impressões dos sentidos."
                },
                {
                    enunciado: "Immanuel Kant responde ao ceticismo de Hume argumentando que:",
                    alternativas: {
                        a: "A causalidade é de fato apenas um hábito, e a ciência é impossível.",
                        b: "A causalidade é uma categoria a priori do entendimento, necessária para organizar a experiência.",
                        c: "A ciência deve ser substituída pela fé religiosa.",
                        d: "A experiência sensível é a única fonte de conhecimento, validando totalmente Hume.",
                        e: "O conhecimento verdadeiro vem da intuição mística."
                    },
                    correta: "b",
                    explicacao: "Kant concorda com Hume que o conhecimento começa com a experiência, mas argumenta que a causalidade é uma categoria a priori do entendimento: uma estrutura da mente que organiza a experiência. Assim, a ciência é possível."
                },
                {
                    enunciado: "A 'Revolução Copernicana' na filosofia, proposta por Kant, consiste em:",
                    alternativas: {
                        a: "Colocar o Sol no centro do universo, como fez Copérnico na astronomia.",
                        b: "Inverter a relação sujeito-objeto: não é o conhecimento que se regula pelos objetos, mas os objetos que se regulam pelas estruturas do sujeito conhecedor.",
                        c: "Negar completamente a possibilidade de qualquer conhecimento.",
                        d: "Defender que apenas a fé religiosa fornece verdades absolutas.",
                        e: "Afirmar que a razão pura é suficiente para conhecer todas as verdades."
                    },
                    correta: "b",
                    explicacao: "Kant propõe uma inversão: em vez de o conhecimento se adequar aos objetos (como se pensava), são os objetos que se adequam às estruturas da mente (espaço, tempo, categorias). É a 'Revolução Copernicana' da filosofia."
                },
                {
                    enunciado: "Para Kant, o conhecimento humano se limita:",
                    alternativas: {
                        a: "Ao mundo das coisas em si (númeno), inacessível aos sentidos.",
                        b: "Ao mundo dos fenômenos (aparências), organizados pelas estruturas da mente.",
                        c: "Aos conhecimentos matemáticos, únicos verdadeiros.",
                        d: "Aos conhecimentos religiosos revelados por Deus.",
                        e: "A nenhum tipo de conhecimento, sendo completamente impossível."
                    },
                    correta: "b",
                    explicacao: "Kant limita o conhecimento ao mundo dos fenômenos (aparências), que é organizado pelas estruturas a priori da mente (espaço, tempo, categorias). As 'coisas em si' (númenos) são inacessíveis ao conhecimento humano."
                }
            ]
        },
        8: {
            titulo: "Ubuntu e Protagonismo",
            subtitulo: "Filosofia Ubuntu e filósofos negros e indígenas brasileiros",
            imagem: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800",
            conteudo: `
                <h3>Filosofia Ubuntu: "Sou porque somos"</h3>
                <p>O <strong>Ubuntu</strong> é uma filosofia africana que expressa a ideia de que a humanidade de uma pessoa está intrinsecamente ligada à humanidade dos outros. "Eu sou porque nós somos" - a identidade individual se constrói na relação com a comunidade.</p>

                <div class="philosopher">
                    <strong>🌍 Ubuntu vs. Descartes</strong>
                    Enquanto o ocidente moderno diz "Penso, logo existo" (Descartes - individualismo), Ubuntu diz "Sou porque somos" (comunitarismo). Não sou humano isoladamente, mas na relação com outros humanos.
                </div>

                <h3>Filósofos Negros Brasileiros</h3>
                <p>O Brasil tem uma rica tradição de pensadores negros que analisam o racismo, a cultura afro-brasileira e a construção da identidade:</p>
                <ul>
                    <li><strong>Lélia Gonzalez</strong>: cunhou o termo "racismo à brasileira" e analisou a interseção entre raça e gênero</li>
                    <li><strong>Abdias do Nascimento</strong>: pensador do movimento negro e da cultura afro-brasileira</li>
                    <li><strong>Silvio Almeida</strong>: teórico contemporâneo do racismo estrutural</li>
                    <li><strong>Djamila Ribeiro</strong>: filósofa que discute feminismo negro e lugar de fala</li>
                </ul>

                <h3>Protagonismo Indígena</h3>
                <p>Os povos indígenas do Brasil têm suas próprias filosofias, cosmologias e formas de conhecimento. Pensadores indígenas contemporâneos como <strong>Ailton Krenak</strong> ("Ideias para adiar o fim do mundo") criticam a separação ocidental entre natureza e cultura, propondo uma relação mais integrada com o planeta.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> A filosofia Ubuntu e os pensamentos negros e indígenas brasileiros descolonizam o pensamento, mostrando que há outras formas de conhecer e viver além da tradição eurocêntrica. Valorizam o comunitarismo, a ancestralidade e a relação com a natureza.
                </div>
            `,
            bibliografia: [
                { titulo: "Ubuntu (filosofia)", link: "https://pt.wikipedia.org/wiki/Ubuntu_(filosofia)", descricao: "Wikipedia - Filosofia africana da interdependência" },
                { titulo: "Lélia Gonzalez", link: "https://pt.wikipedia.org/wiki/L%C3%A9lia_Gonzalez", descricao: "Wikipedia - Intelectual negra brasileira" },
                { titulo: "Ailton Krenak", link: "https://pt.wikipedia.org/wiki/Ailton_Krenak", descricao: "Wikipedia - Pensador indígena contemporâneo" },
                { titulo: "Filosofia africana", link: "https://pt.wikipedia.org/wiki/Filosofia_africana", descricao: "Wikipedia - Tradições filosóficas do continente africano" }
            ],
            quiz: [
                {
                    enunciado: "A filosofia Ubuntu, originária da África, expressa a ideia de que:",
                    alternativas: {
                        a: "O indivíduo é completamente autossuficiente e não depende dos outros.",
                        b: "A humanidade de uma pessoa está intrinsecamente ligada à humanidade dos outros: 'sou porque somos'.",
                        c: "A comunidade deve ser sacrificada em favor do sucesso individual.",
                        d: "Apenas os anciãos têm direito à palavra e ao conhecimento.",
                        e: "A natureza deve ser dominada pelo ser humano."
                    },
                    correta: "b",
                    explicacao: "Ubuntu expressa a interdependência humana: 'Eu sou porque nós somos'. A identidade individual se constrói na relação com a comunidade, em oposição ao individualismo ocidental moderno."
                },
                {
                    enunciado: "A principal diferença entre a filosofia Ubuntu e o pensamento cartesiano ('penso, logo existo') está:",
                    alternativas: {
                        a: "No fato de que Ubuntu valoriza o individualismo; Descartes valoriza o comunitarismo.",
                        b: "No fato de que Ubuntu valoriza o comunitarismo e a interdependência; Descartes valoriza o individualismo e a razão autônoma.",
                        c: "No fato de que ambas são exatamente iguais, sem diferença conceitual.",
                        d: "No fato de que Ubuntu rejeita qualquer forma de pensamento racional.",
                        e: "No fato de que Descartes defende a existência de Deus; Ubuntu é ateísta."
                    },
                    correta: "b",
                    explicacao: "Ubuntu ('sou porque somos') valoriza o comunitarismo e a interdependência; Descartes ('penso, logo existo') valoriza o indivíduo autônomo e a razão como fundamento do conhecimento e da existência."
                },
                {
                    enunciado: "Lélia Gonzalez, importante pensadora negra brasileira, é conhecida por:",
                    alternativas: {
                        a: "Desenvolver a teoria da relatividade aplicada às ciências sociais.",
                        b: "Cunhar o termo 'racismo à brasileira' e analisar a interseção entre raça e gênero.",
                        c: "Fundar o primeiro partido político negro do Brasil no século XIX.",
                        d: "Escrever a primeira constituição brasileira em defesa dos escravizados.",
                        e: "Criar a teoria do contrato social aplicada ao Brasil colonial."
                    },
                    correta: "b",
                    explicacao: "Lélia Gonzalez (1935-1994) foi uma das mais importantes intelectuais negras brasileiras, cunhando o conceito de 'racismo à brasileira' e analisando como raça e gênero se interseccionam na opressão das mulheres negras."
                },
                {
                    enunciado: "Ailton Krenak, pensador indígena contemporâneo, critica:",
                    alternativas: {
                        a: "A preservação das florestas e dos rios brasileiros.",
                        b: "A separação ocidental entre natureza e cultura, propondo uma relação mais integrada com o planeta.",
                        c: "A valorização excessiva dos saberes indígenas nas escolas.",
                        d: "O retorno dos povos indígenas às suas terras tradicionais.",
                        e: "A proteção dos direitos dos povos originários na Constituição."
                    },
                    correta: "b",
                    explicacao: "Krenak critica a visão ocidental que separa natureza e cultura (humano vs. não-humano), propondo uma relação mais integrada onde os humanos são parte da natureza, não seus donos. Em 'Ideias para adiar o fim do mundo', defende saberes indígenas."
                },
                {
                    enunciado: "O conceito de 'descolonização do pensamento', presente na filosofia Ubuntu e nos pensamentos negros e indígenas, significa:",
                    alternativas: {
                        a: "Rejeitar completamente qualquer conhecimento produzido na Europa.",
                        b: "Reconhecer e valorizar outras formas de conhecimento além da tradição eurocêntrica dominante.",
                        c: "Substituir toda a ciência ocidental por saberes tradicionais africanos e indígenas.",
                        d: "Proibir o ensino da filosofia europeia nas escolas brasileiras.",
                        e: "Afirmar que apenas os saberes tradicionais são válidos."
                    },
                    correta: "b",
                    explicacao: "Descolonizar o pensamento não é rejeitar a tradição europeia, mas reconhecer que há outras formas válidas de conhecer e viver. É valorizar saberes negros, indígenas e de outras matrizes culturais em pé de igualdade com a tradição ocidental."
                }
            ]
        },
        9: {
            titulo: "Levinas e Habermas",
            subtitulo: "Alteridade, ética do discurso e valores democráticos",
            imagem: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800",
            conteudo: `
                <h3>Emmanuel Lévinas: A Ética como Filosofia Primeira</h3>
                <p><strong>Lévinas</strong> (1906-1995) inverte a tradição filosófica: antes da ontologia (o estudo do ser), vem a <strong>ética</strong> (a relação com o Outro). O "rosto do Outro" me interpela e me exige responsabilidade infinita.</p>

                <div class="philosopher">
                    <strong>👤 O Rosto do Outro</strong>
                    Para Lévinas, o rosto do Outro (sua vulnerabilidade, sua alteridade) me convoca à responsabilidade. Eu sou responsável pelo Outro antes mesmo de escolher ser. A ética não é um contrato entre iguais, mas uma resposta à assimetria radical entre eu e o Outro.
                </div>

                <h3>Jürgen Habermas: Ação Comunicativa</h3>
                <p><strong>Habermas</strong> (1929-) desenvolveu a teoria da <strong>ação comunicativa</strong>: a legitimidade das normas em uma sociedade democrática depende da participação de todos os afetados em um diálogo racional e livre.</p>

                <p>A <strong>ética do discurso</strong> de Habermas afirma que uma norma é válida apenas se todos os possíveis afetados pudessem concordar com ela em um diálogo racional. Isso fundamenta a democracia deliberativa.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> Lévinas mostra que a ética nasce da relação com o Outro (alteridade); Habermas mostra que a democracia legítima nasce do diálogo racional entre cidadãos. Ambos valorizam o respeito à diversidade e a inclusão de todas as vozes.
                </div>
            `,
            bibliografia: [
                { titulo: "Emmanuel Lévinas", link: "https://pt.wikipedia.org/wiki/Emmanuel_L%C3%A9vinas", descricao: "Wikipedia - Filósofo da alteridade" },
                { titulo: "Jürgen Habermas", link: "https://pt.wikipedia.org/wiki/J%C3%BCrgen_Habermas", descricao: "Wikipedia - Filósofo da ação comunicativa" },
                { titulo: "Alteridade", link: "https://pt.wikipedia.org/wiki/Alteridade", descricao: "Wikipedia - Conceito filosófico do Outro" },
                { titulo: "Ação comunicativa", link: "https://pt.wikipedia.org/wiki/Teoria_da_a%C3%A7%C3%A3o_comunicativa", descricao: "Wikipedia - Teoria habermasiana" }
            ],
            quiz: [
                {
                    enunciado: "Para Emmanuel Lévinas, a 'ética como filosofia primeira' significa que:",
                    alternativas: {
                        a: "A ética deve ser estudada depois da ontologia e da metafísica.",
                        b: "A relação com o Outro (ética) é anterior a qualquer reflexão sobre o ser (ontologia).",
                        c: "A ética é uma disciplina secundária, sem importância filosófica.",
                        d: "A ética se reduz a regras morais impostas pela religião.",
                        e: "A ética é idêntica à política, sem diferença conceitual."
                    },
                    correta: "b",
                    explicacao: "Lévinas inverte a tradição filosófica: antes de perguntar 'o que é o ser?' (ontologia), devemos reconhecer a relação ética com o Outro. O rosto do Outro me convoca à responsabilidade antes de qualquer reflexão teórica."
                },
                {
                    enunciado: "O conceito de 'rosto do Outro' em Lévinas se refere a:",
                    alternativas: {
                        a: "A aparência física das pessoas, sua beleza ou feiura.",
                        b: "A vulnerabilidade e alteridade do Outro que me convoca à responsabilidade infinita.",
                        c: "A máscara social que cada pessoa usa no cotidiano.",
                        d: "A fotografia do Outro, que pode ser analisada cientificamente.",
                        e: "A identidade cultural do Outro, determinada por sua nacionalidade."
                    },
                    correta: "b",
                    explicacao: "O 'rosto' em Lévinas não é a face física, mas a manifestação da alteridade e vulnerabilidade do Outro. O rosto me interpela, me convoca à responsabilidade, me exige que eu não seja indiferente ao sofrimento alheio."
                },
                {
                    enunciado: "Para Jürgen Habermas, a legitimidade das normas em uma sociedade democrática depende:",
                    alternativas: {
                        a: "Da imposição de verdades absolutas por líderes carismáticos.",
                        b: "Da força militar e da capacidade de coerção do Estado.",
                        c: "Da participação de todos os afetados em um diálogo racional e livre.",
                        d: "Da tradição inquestionável e dos costumes ancestrais.",
                        e: "Da eficiência econômica e do crescimento do PIB."
                    },
                    correta: "c",
                    explicacao: "Habermas defende que normas só são legítimas se todos os possíveis afetados pudessem concordar com elas em um diálogo racional, livre de coerção. Isso fundamenta a democracia deliberativa e a ética do discurso."
                },
                {
                    enunciado: "A 'ética do discurso' de Habermas afirma que uma norma é válida quando:",
                    alternativas: {
                        a: "É imposta pela maioria, independentemente do diálogo.",
                        b: "Todos os possíveis afetados poderiam concordar com ela em um diálogo racional.",
                        c: "É aprovada por um líder religioso ou autoridade moral.",
                        d: "Produz o maior bem para o maior número de pessoas.",
                        e: "Está de acordo com as tradições de uma cultura específica."
                    },
                    correta: "b",
                    explicacao: "A ética do discurso habermasiana afirma que uma norma é válida apenas se todos os afetados pudessem aceitá-la em um diálogo racional e livre. Isso garante a inclusão de todas as vozes e o respeito à diversidade."
                },
                {
                    enunciado: "Tanto Lévinas quanto Habermas valorizam em suas filosofias:",
                    alternativas: {
                        a: "O individualismo radical e a autonomia absoluta do sujeito.",
                        b: "O respeito à alteridade, a inclusão de todas as vozes e a responsabilidade ética.",
                        c: "A rejeição de qualquer forma de diálogo com o Outro.",
                        d: "A imposição de uma única visão de mundo como verdadeira.",
                        e: "A separação completa entre ética e política."
                    },
                    correta: "b",
                    explicacao: "Apesar de abordagens diferentes, Lévinas e Habermas convergem na valorização da alteridade (o Outro), da inclusão de todas as vozes e da responsabilidade ética como fundamentos da vida em comum."
                }
            ]
        },
        10: {
            titulo: "Tecnologia e Ética",
            subtitulo: "Günther Anders e os desafios da sociedade tecnológica",
            imagem: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
            conteudo: `
                <h3>Günther Anders: A Vergonha Prometeica</h3>
                <p><strong>Günther Anders</strong> (1902-1992) analisou os efeitos da tecnologia moderna na condição humana. Ele cunhou o conceito de <strong>vergonha prometeica</strong>: o sentimento de inferioridade que temos diante das máquinas que criamos.</p>

                <div class="philosopher">
                    <strong>🤖 Obsolescência do Homem</strong>
                    Anders argumenta que a tecnologia avançada (bombas nucleares, inteligência artificial) produz efeitos que não podemos mais controlar ou sequer imaginar completamente. O ser humano se torna "obsoleto" diante de suas próprias criações.
                </div>

                <h3>A Ética da Responsabilidade</h3>
                <p>A tecnologia moderna tem um poder de destruição em massa (nuclear, ambiental) que exige uma nova ética. <strong>Hans Jonas</strong> desenvolveu o "princípio responsabilidade": devemos agir de modo que os efeitos de nossa ação sejam compatíveis com a permanência de uma vida humana autêntica na Terra.</p>

                <h3>Bioética e Dilemas Contemporâneos</h3>
                <p>A bioética estuda os dilemas éticos das novas tecnologias: clonagem, manipulação genética, eutanásia, inteligência artificial. A ciência não é neutra: suas aplicações têm consequências éticas, políticas e existenciais.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> A tecnologia moderna exige uma ética da responsabilidade que considere as consequências para as futuras gerações e para o planeta. O mito da neutralidade científica esconde que toda tecnologia tem impactos éticos e políticos.
                </div>
            `,
            bibliografia: [
                { titulo: "Günther Anders", link: "https://pt.wikipedia.org/wiki/G%C3%BCnther_Anders", descricao: "Wikipedia - Filósofo da tecnologia" },
                { titulo: "Hans Jonas", link: "https://pt.wikipedia.org/wiki/Hans_Jonas", descricao: "Wikipedia - Filósofo da ética da responsabilidade" },
                { titulo: "Bioética", link: "https://pt.wikipedia.org/wiki/Bio%C3%A9tica", descricao: "Wikipedia - Ética aplicada às ciências da vida" },
                { titulo: "Ética tecnológica", link: "https://pt.wikipedia.org/wiki/%C3%89tica_da_tecnologia", descricao: "Wikipedia - Reflexões sobre tecnologia e valores" }
            ],
            quiz: [
                {
                    enunciado: "O conceito de 'vergonha prometeica', desenvolvido por Günther Anders, refere-se:",
                    alternativas: {
                        a: "Ao orgulho humano por ter criado máquinas perfeitas.",
                        b: "Ao sentimento de inferioridade que os seres humanos têm diante das máquinas que criaram.",
                        c: "À alegria de Prometeu ao roubar o fogo dos deuses.",
                        d: "À satisfação de ver a tecnologia superar as limitações humanas.",
                        e: "À indiferença humana diante dos avanços tecnológicos."
                    },
                    correta: "b",
                    explicacao: "Anders cunhou o termo 'vergonha prometeica' para descrever o sentimento de inferioridade que os humanos experimentam diante das máquinas que criaram, que parecem superiores em capacidade e eficiência."
                },
                {
                    enunciado: "Para Hans Jonas, o 'princípio responsabilidade' determina que devemos:",
                    alternativas: {
                        a: "Agir de modo a maximizar o lucro imediato das empresas.",
                        b: "Agir de modo que os efeitos de nossa ação sejam compatíveis com a permanência de uma vida humana autêntica na Terra.",
                        c: "Aceitar qualquer avanço tecnológico sem questionamento ético.",
                        d: "Rejeitar completamente toda forma de tecnologia moderna.",
                        e: "Priorizar o presente em detrimento das futuras gerações."
                    },
                    correta: "b",
                    explicacao: "Jonas formula um novo imperativo categórico para a era tecnológica: 'Age de modo que os efeitos da tua ação sejam compatíveis com a permanência de uma vida humana autêntica na Terra'. É uma ética voltada para o futuro e para as próximas gerações."
                },
                {
                    enunciado: "A bioética se ocupa de estudar:",
                    alternativas: {
                        a: "Apenas os aspectos técnicos da biologia molecular.",
                        b: "Os dilemas éticos decorrentes dos avanços das ciências da vida e da tecnologia (clonagem, manipulação genética, eutanásia, etc.).",
                        c: "Exclusivamente as leis que regulam a pesquisa científica.",
                        d: "A história da medicina desde a antiguidade.",
                        e: "Os aspectos econômicos da indústria farmacêutica."
                    },
                    correta: "b",
                    explicacao: "A bioética estuda os dilemas éticos, políticos e sociais decorrentes dos avanços das ciências da vida e da medicina: clonagem, manipulação genética, eutanásia, aborto, transplantes, inteligência artificial aplicada à saúde, etc."
                },
                {
                    enunciado: "O mito da neutralidade científica afirma que:",
                    alternativas: {
                        a: "A ciência é sempre neutra e não tem implicações éticas ou políticas.",
                        b: "A ciência, na verdade, não é neutra: suas aplicações têm consequências éticas, políticas e existenciais que devem ser refletidas.",
                        c: "A ciência deve ser proibida por seus efeitos negativos.",
                        d: "Apenas a religião pode fornecer orientações éticas válidas.",
                        e: "A ciência é superior à filosofia na resolução de dilemas morais."
                    },
                    correta: "b",
                    explicacao: "A crítica ao mito da neutralidade científica mostra que a ciência não é neutra: suas aplicações têm impactos éticos, políticos e existenciais. Por isso, é necessário refletir filosoficamente sobre os usos da ciência e da tecnologia."
                },
                {
                    enunciado: "Segundo Günther Anders, a 'obsolescência do homem' na era tecnológica significa que:",
                    alternativas: {
                        a: "O ser humano se tornou completamente desnecessário na sociedade moderna.",
                        b: "O ser humano se torna 'obsoleto' diante de suas próprias criações tecnológicas, perdendo o controle sobre elas.",
                        c: "A tecnologia deve ser abandonada em favor de um retorno à natureza.",
                        d: "Os humanos são superiores às máquinas em todos os aspectos.",
                        e: "A tecnologia não tem qualquer impacto sobre a condição humana."
                    },
                    correta: "b",
                    explicacao: "Anders argumenta que o ser humano se torna 'obsoleto' diante de suas próprias criações: as máquinas que produzimos superam nossas capacidades e escapam ao nosso controle, gerando um descompasso entre nosso poder de fazer e nosso poder de imaginar as consequências."
                }
            ]
        },
        11: {
            titulo: "Foucault e Sociedade Disciplinar",
            subtitulo: "Panóptico, poder disciplinar e sociedade de controle",
            imagem: "https://images.unsplash.com/photo-1555848962-6e77729260f7?w=800",
            conteudo: `
                <h3>Michel Foucault: A Microfísica do Poder</h3>
                <p><strong>Michel Foucault</strong> (1926-1984) analisou como o poder não está apenas no Estado ou nas leis, mas circula em todas as relações sociais. Ele estudou as instituições disciplinares: prisões, hospitais, escolas, quartéis.</p>

                <div class="philosopher">
                    <strong>👁️ O Panóptico</strong>
                    Foucault usa a imagem do Panóptico (arquitetura proposta por Jeremy Bentham): uma torre central de onde se pode ver todas as celas, mas os presos não sabem se estão sendo vigiados. Resultado: eles internalizam a vigilância e se autocontrolam. A sociedade disciplinar funciona assim: internalizamos as normas e nos vigiamos.
                </div>

                <h3>Corpos Dóceis</h3>
                <p>As instituições disciplinares produzem <strong>corpos dóceis</strong>: úteis economicamente e submissos politicamente. A escola, a fábrica, o quartéis treinam os corpos para a obediência e a produtividade.</p>

                <h3>Biopoder</h3>
                <p>Foucault também analisou o <strong>biopoder</strong>: o poder sobre a vida (natalidade, mortalidade, saúde). O Estado moderno não apenas pune, mas administra a vida da população.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> Foucault mostra que o poder não é apenas repressivo, mas produtivo: produz subjetividades, comportamentos, verdades. O Panóptico simboliza a sociedade disciplinar onde a vigilância é internalizada e nos autocontrolamos.
                </div>
            `,
            bibliografia: [
                { titulo: "Michel Foucault", link: "https://pt.wikipedia.org/wiki/Michel_Foucault", descricao: "Wikipedia - Filósofo francês do poder e saber" },
                { titulo: "Panóptico", link: "https://pt.wikipedia.org/wiki/Pan%C3%B3ptico", descricao: "Wikipedia - Modelo arquitetônico de vigilância" },
                { titulo: "Vigiar e Punir", link: "https://pt.wikipedia.org/wiki/Vigiar_e_Punir", descricao: "Wikipedia - Obra fundamental de Foucault" },
                { titulo: "Biopoder", link: "https://pt.wikipedia.org/wiki/Biopoder", descricao: "Wikipedia - Conceito foucaultiano" }
            ],
            quiz: [
                {
                    enunciado: "Para Michel Foucault, o poder na sociedade moderna se caracteriza por:",
                    alternativas: {
                        a: "Estar concentrado exclusivamente no Estado e nas leis.",
                        b: "Circular em todas as relações sociais, atuando nas instituições disciplinares (escola, prisão, hospital, fábrica).",
                        c: "Ser apenas repressivo, sem produzir nada.",
                        d: "Ser uma ilusão, sem efeitos reais sobre os indivíduos.",
                        e: "Estar restrito às relações econômicas entre classes sociais."
                    },
                    correta: "b",
                    explicacao: "Foucault mostra que o poder não está apenas no Estado, mas circula em todas as relações sociais, atuando nas instituições disciplinares que moldam os corpos e as subjetividades. O poder é produtivo, não apenas repressivo."
                },
                {
                    enunciado: "O Panóptico, modelo arquitetônico analisado por Foucault, funciona através de:",
                    alternativas: {
                        a: "Da violência física explícita aplicada a todos os vigiados.",
                        b: "Da vigilância contínua e invisível, que leva o indivíduo a internalizar o controle e se autocontrolar.",
                        c: "Da liberdade total dos vigiados, sem qualquer forma de controle.",
                        d: "Da participação democrática de todos nas decisões.",
                        e: "Da eliminação completa de qualquer hierarquia."
                    },
                    correta: "b",
                    explicacao: "O Panóptico (torre central que vê tudo sem ser vista) faz com que os vigiados, por não saberem se estão sendo observados, internalizem a vigilância e se autocontrolem. É o modelo da sociedade disciplinar moderna."
                },
                {
                    enunciado: "Os 'corpos dóceis', segundo Foucault, são:",
                    alternativas: {
                        a: "Corpos livres e rebeldes que resistem a qualquer forma de controle.",
                        b: "Corpos produzidos pelas instituições disciplinares, úteis economicamente e submissos politicamente.",
                        c: "Corpos que rejeitam qualquer forma de trabalho ou disciplina.",
                        d: "Corpos que só existem em sociedades pré-modernas.",
                        e: "Corpos completamente indiferentes às normas sociais."
                    },
                    correta: "b",
                    explicacao: "Para Foucault, as instituições disciplinares (escola, fábrica, quartel, prisão) produzem 'corpos dóceis': submetidos, treinados, úteis economicamente e submissos politicamente. A disciplina molda os corpos para a obediência."
                },
                {
                    enunciado: "O conceito de 'biopoder', desenvolvido por Foucault, refere-se a:",
                    alternativas: {
                        a: "O poder exclusivo das forças armadas sobre a população.",
                        b: "O poder do Estado moderno sobre a vida da população (natalidade, mortalidade, saúde).",
                        c: "O poder da Igreja sobre os corpos dos fiéis.",
                        d: "O poder dos médicos sobre os pacientes em consultas individuais.",
                        e: "O poder dos pais sobre os filhos no ambiente familiar."
                    },
                    correta: "b",
                    explicacao: "O biopoder é o poder do Estado moderno sobre a vida da população: gestão da natalidade, mortalidade, saúde, higiene. Diferente do poder soberano que 'faz morrer e deixa viver', o biopoder 'faz viver e deixa morrer'."
                },
                {
                    enunciado: "Segundo Foucault, o poder na modernidade é produtivo porque:",
                    alternativas: {
                        a: "Produz apenas riqueza econômica para a burguesia.",
                        b: "Produz subjetividades, comportamentos, saberes e verdades, moldando os indivíduos.",
                        c: "Produz apenas repressão e violência contra os opositores.",
                        d: "Não produz nada, sendo apenas uma ilusão.",
                        e: "Produz exclusivamente leis e normas jurídicas."
                    },
                    correta: "b",
                    explicacao: "Para Foucault, o poder moderno não é apenas repressivo ('não pode'), mas produtivo: produz subjetividades, comportamentos, saberes, verdades. Ele molda os indivíduos, fazendo-os querer o que o poder quer que queiram."
                }
            ]
        },
        12: {
            titulo: "Byung-Chul Han",
            subtitulo: "Sociedade do cansaço e formas contemporâneas de alienação",
            imagem: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
            conteudo: `
                <h3>A Sociedade do Cansaço</h3>
                <p><strong>Byung-Chul Han</strong> (1959-) é um filósofo sul-coreano que analisa a sociedade contemporânea. Ele argumenta que saímos da <strong>sociedade disciplinar</strong> (Foucault: "você deve") para a <strong>sociedade do desempenho</strong> ("você pode").</p>

                <div class="philosopher">
                    <strong>💪 Autoexploração</strong>
                    Na sociedade do desempenho, não somos mais submissos a um patrão externo, mas nos tornamos nossos próprios algozes. "Eu posso" substitui "você deve". O resultado é a autoexploração voluntária, que gera burnout, depressão e cansaço crônico.
                </div>

                <h3>Positividade Tóxica</h3>
                <p>Han critica a <strong>positividade tóxica</strong> da sociedade contemporânea: a obrigação de ser sempre positivo, produtivo, feliz. A negatividade (tristeza, fracasso, cansaço) é patologizada e escondida.</p>

                <h3>Sociedade da Transparência</h3>
                <p>Vivemos também na <strong>sociedade da transparência</strong>: tudo deve ser visível, compartilhado, exposto (redes sociais). Isso elimina o mistério, a profundidade, a privacidade. O "like" substitui o julgamento crítico.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> Byung-Chul Han mostra que a patologia contemporânea não é mais a repressão externa, mas a autoexploração voluntária em nome do desempenho. A positividade tóxica e a exposição nas redes sociais geram novas formas de sofrimento psíquico.
                </div>
            `,
            bibliografia: [
                { titulo: "Byung-Chul Han", link: "https://pt.wikipedia.org/wiki/Byung-Chul_Han", descricao: "Wikipedia - Filósofo sul-coreano contemporâneo" },
                { titulo: "Sociedade do Cansaço", link: "https://pt.wikipedia.org/wiki/A_Sociedade_do_Cansa%C3%A7o", descricao: "Wikipedia - Obra principal de Han" },
                { titulo: "Sociedade do desempenho", link: "https://pt.wikipedia.org/wiki/Sociedade_do_desempenho", descricao: "Wikipedia - Conceito haniano" },
                { titulo: "Burnout", link: "https://pt.wikipedia.org/wiki/Burnout", descricao: "Wikipedia - Síndrome do esgotamento profissional" }
            ],
            quiz: [
                {
                    enunciado: "Para Byung-Chul Han, a passagem da sociedade disciplinar para a sociedade do desempenho se caracteriza por:",
                    alternativas: {
                        a: "A substituição do 'você deve' (negatividade) pelo 'você pode' (positividade), gerando autoexploração.",
                        b: "O retorno às formas feudais de dominação e servidão.",
                        c: "A eliminação completa de qualquer forma de trabalho.",
                        d: "A substituição do Estado por empresas privadas em todas as funções.",
                        e: "A volta à sociedade religiosa medieval."
                    },
                    correta: "a",
                    explicacao: "Han argumenta que saímos da sociedade disciplinar (Foucault: 'você deve', com proibições) para a sociedade do desempenho ('você pode', com positividade). Essa mudança gera autoexploração: o indivíduo se explora voluntariamente em nome do desempenho."
                },
                {
                    enunciado: "A 'autoexploração' na sociedade do desempenho, segundo Han, se manifesta por:",
                    alternativas: {
                        a: "Pela obediência cega a um patrão externo que impõe ordens.",
                        b: "Pela exploração voluntária de si mesmo em nome da produtividade, gerando burnout e depressão.",
                        c: "Pela recusa total do trabalho e da produtividade.",
                        d: "Pela exploração dos outros em benefício próprio.",
                        e: "Pela exploração do Estado sobre os cidadãos."
                    },
                    correta: "b",
                    explicacao: "Na sociedade do desempenho, o indivíduo se torna seu próprio patrão e seu próprio explorado. A autoexploração voluntária (em nome do 'eu posso') gera burnout, depressão e cansaço crônico, pois não há limite para a cobrança interna."
                },
                {
                    enunciado: "A 'positividade tóxica' criticada por Han se refere a:",
                    alternativas: {
                        a: "À valorização excessiva da negatividade e do pessimismo.",
                        b: "À obrigação social de ser sempre positivo, produtivo e feliz, patologizando a tristeza e o fracasso.",
                        c: "À aceitação passiva de qualquer situação, sem crítica.",
                        d: "À rejeição completa de qualquer forma de otimismo.",
                        e: "À imposição religiosa de que todos devem ser felizes."
                    },
                    correta: "b",
                    explicacao: "Han critica a 'positividade tóxica': a obrigação de ser sempre positivo, produtivo, feliz. A negatividade (tristeza, fracasso, cansaço) é patologizada e escondida, gerando sofrimento psíquico por não poder ser expressa."
                },
                {
                    enunciado: "A 'sociedade da transparência', analisada por Han, se caracteriza por:",
                    alternativas: {
                        a: "Pela valorização do mistério, da profundidade e da privacidade.",
                        b: "Pela obrigação de que tudo seja visível, compartilhado e exposto (redes sociais), eliminando a privacidade.",
                        c: "Pela recusa total das redes sociais e da tecnologia digital.",
                        d: "Pela transparência exclusiva nas relações governamentais.",
                        e: "Pela eliminação completa de qualquer forma de comunicação."
                    },
                    correta: "b",
                    explicacao: "Han analisa a 'sociedade da transparência': tudo deve ser visível, compartilhado, exposto nas redes sociais. Isso elimina o mistério, a profundidade, a privacidade. O 'like' substitui o julgamento crítico, e a exposição constante gera sofrimento."
                },
                {
                    enunciado: "As principais patologias da sociedade contemporânea, segundo Byung-Chul Han, são:",
                    alternativas: {
                        a: "A peste, a cólera e a tuberculose, doenças infecciosas.",
                        b: "Burnout, depressão e cansaço crônico, frutos da autoexploração e da positividade tóxica.",
                        c: "A fome, a miséria e a pobreza extrema, problemas econômicos.",
                        d: "A guerra, a violência e a opressão política, problemas do autoritarismo.",
                        e: "A ignorância, a superstição e o fanatismo religioso, problemas culturais."
                    },
                    correta: "b",
                    explicacao: "Han identifica como patologias típicas da sociedade do desempenho: burnout (esgotamento), depressão e cansaço crônico. São frutos da autoexploração voluntária, da positividade tóxica e da pressão constante por desempenho."
                }
            ]
        }
    },
    sociologia: {
        1: {
            titulo: "O Olhar Sociológico",
            subtitulo: "Estranhamento, desnaturalização e senso comum",
            imagem: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
            conteudo: `
                <h3>O Que é Sociologia?</h3>
                <p>A <strong>Sociologia</strong> é a ciência que estuda a sociedade, as relações sociais e os padrões de comportamento coletivo. Ela surgiu no século XIX como resposta às profundas transformações provocadas pela <strong>Revolução Industrial</strong> e pela <strong>Revolução Francesa</strong>.</p>

                <h3>Senso Comum vs. Conhecimento Sociológico</h3>
                <p>O <strong>senso comum</strong> é o conjunto de opiniões, crenças e conhecimentos adquiridos no cotidiano, sem reflexão crítica. É baseado em "achismos", tradições e experiências pessoais não sistematizadas.</p>

                <p>A <strong>Sociologia</strong>, por outro lado, utiliza <strong>métodos científicos</strong>, pesquisa sistemática, análise crítica e comprovação empírica para estudar a realidade social.</p>

                <div class="highlight-box">
                    <strong>Conceito-chave:</strong> O <em>estranhamento</em> é a capacidade de olhar o familiar como se fosse estranho, questionando o que parece "natural". A <em>desnaturalização</em> revela que o que parece natural é, na verdade, uma construção histórica e social.
                </div>

                <h3>Exemplos de Desnaturalização</h3>
                <ul>
                    <li>"Pobre é pobre porque quer" → Desnaturalizar: a pobreza tem causas estruturais, não apenas individuais</li>
                    <li>"Sempre foi assim" → Desnaturalizar: tudo tem uma história, nada é eterno</li>
                    <li>"Mulher é frágil por natureza" → Desnaturalizar: gênero é construção social, não biologia</li>
                </ul>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> A Sociologia opera o estranhamento e a desnaturalização da realidade, revelando as causas históricas e estruturais dos fenômenos sociais. Diferente do senso comum, utiliza métodos científicos para compreender a sociedade.
                </div>
            `,
            bibliografia: [
                { titulo: "Sociologia", link: "https://pt.wikipedia.org/wiki/Sociologia", descricao: "Wikipedia - Ciência da sociedade" },
                { titulo: "Senso comum", link: "https://pt.wikipedia.org/wiki/Senso_comum", descricao: "Wikipedia - Conhecimento não sistemático" },
                { titulo: "Auguste Comte", link: "https://pt.wikipedia.org/wiki/Auguste_Comte", descricao: "Wikipedia - Fundador da Sociologia" },
                { titulo: "Método sociológico", link: "https://pt.wikipedia.org/wiki/M%C3%A9todo_sociol%C3%B3gico", descricao: "Wikipedia - Métodos de pesquisa em Sociologia" }
            ],
            quiz: [
                {
                    enunciado: "A Sociologia diferencia-se do senso comum principalmente porque:",
                    alternativas: {
                        a: "Utiliza métodos científicos, pesquisa sistemática e análise crítica, enquanto o senso comum baseia-se em opiniões e experiências cotidianas não sistematizadas.",
                        b: "É mais complicada e difícil de entender que o senso comum.",
                        c: "Só pode ser compreendida por especialistas com doutorado.",
                        d: "Ignora completamente a realidade vivida pelas pessoas.",
                        e: "É sempre verdadeira, enquanto o senso comum é sempre falso."
                    },
                    correta: "a",
                    explicacao: "A Sociologia utiliza métodos científicos, pesquisa sistemática, análise crítica e comprovação empírica. O senso comum baseia-se em opiniões, tradições, experiências pessoais não sistematizadas e 'achismos'."
                },
                {
                    enunciado: "O conceito de 'estranhamento' em Sociologia refere-se a:",
                    alternativas: {
                        a: "Rejeitar completamente a sociedade em que se vive.",
                        b: "Olhar o familiar como se fosse estranho, questionando o que parece natural.",
                        c: "Estranhar apenas as culturas de outros países.",
                        d: "Considerar tudo o que é estrangeiro como superior.",
                        e: "Ignorar as diferenças culturais entre as sociedades."
                    },
                    correta: "b",
                    explicacao: "O estranhamento é a capacidade de olhar o que nos é familiar (nossa própria sociedade, nossos costumes) como se fosse estranho, questionando o que parece 'natural' e buscando compreender suas causas históricas e sociais."
                },
                {
                    enunciado: "A 'desnaturalização' da realidade social significa:",
                    alternativas: {
                        a: "Provar que a natureza é mais importante que a sociedade.",
                        b: "Revelar que o que parece natural é, na verdade, uma construção histórica e social.",
                        c: "Defender que tudo na sociedade é determinado pela biologia.",
                        d: "Aceitar passivamente as desigualdades sociais como naturais.",
                        e: "Negar a existência de qualquer forma de realidade social."
                    },
                    correta: "b",
                    explicacao: "Desnaturalizar é mostrar que o que parece 'natural' (como papéis de gênero, desigualdades, costumes) é, na verdade, uma construção histórica e social. Nada na sociedade é eterno ou imutável; tudo tem uma história."
                },
                {
                    enunciado: "A Sociologia surgiu no século XIX como resposta a quais transformações históricas?",
                    alternativas: {
                        a: "À queda do Império Romano e às invasões bárbaras.",
                        b: "À Revolução Industrial e à Revolução Francesa, que transformaram profundamente a sociedade europeia.",
                        c: "À descoberta da América e à colonização europeia.",
                        d: "À Reforma Protestante e às guerras religiosas.",
                        e: "À Revolução Russa e à formação da União Soviética."
                    },
                    correta: "b",
                    explicacao: "A Sociologia surge no século XIX como resposta às profundas transformações da modernidade: a Revolução Industrial (urbanização, proletariado, novas relações de trabalho) e a Revolução Francesa (democracia, direitos individuais, fim do Antigo Regime)."
                },
                {
                    enunciado: "Ao afirmar que 'pobre é pobre porque quer', o senso comum:",
                    alternativas: {
                        a: "Apresenta uma análise científica baseada em dados estatísticos.",
                        b: "Naturaliza a pobreza, ignorando suas causas estruturais e históricas.",
                        c: "Propõe soluções efetivas para o problema da pobreza.",
                        d: "Reconhece a complexidade do fenômeno da desigualdade social.",
                        e: "Utiliza conceitos sociológicos para explicar a realidade."
                    },
                    correta: "b",
                    explicacao: "Essa afirmação do senso comum naturaliza a pobreza, atribuindo-a apenas à vontade individual, ignorando causas estruturais como desigualdade histórica, falta de oportunidades, discriminação, concentração de renda, etc. A Sociologia desnaturaliza essa visão."
                }
            ]
        },
        2: {
            titulo: "Marx, Durkheim e Weber",
            subtitulo: "As três matrizes fundamentais da Sociologia",
            imagem: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
            conteudo: `
                <h3>Émile Durkheim: O Fato Social</h3>
                <p><strong>Durkheim</strong> (1858-1917) definiu o objeto da Sociologia: os <strong>fatos sociais</strong>. São maneiras de agir, pensar e sentir que existem fora do indivíduo e exercem sobre ele uma <strong>coerção</strong> (pressão).</p>

                <div class="philosopher">
                    <strong>📊 Características do Fato Social</strong>
                    <ul>
                        <li><strong>Exterioridade:</strong> Existe fora da consciência individual</li>
                        <li><strong>Coercitividade:</strong> Exerce pressão sobre os indivíduos</li>
                        <li><strong>Generalidade:</strong> É coletivo, não individual</li>
                    </ul>
                    Exemplos: leis, normas, costumes, língua, moda.
                </div>

                <h3>Karl Marx: Luta de Classes</h3>
                <p><strong>Marx</strong> (1818-1883) analisou o capitalismo como sistema baseado na <strong>exploração</strong> da classe trabalhadora (proletariado) pela classe proprietária (burguesia). A história é a história da <strong>luta de classes</strong>.</p>

                <div class="philosopher">
                    <strong>⚒️ Conceitos Marxistas</strong>
                    <ul>
                        <li><strong>Mais-valia:</strong> Trabalho não pago ao trabalhador, apropriado pelo capitalista</li>
                        <li><strong>Alienação:</strong> Trabalhador não se reconhece no produto do seu trabalho</li>
                        <li><strong>Infraestrutura:</strong> Base econômica (forças e relações de produção)</li>
                        <li><strong>Superestrutura:</strong> Ideologia, política, cultura, religião</li>
                    </ul>
                </div>

                <h3>Max Weber: Ação Social</h3>
                <p><strong>Weber</strong> (1864-1920) focou na <strong>ação social</strong>: ação com sentido orientada para o outro. Ele identificou quatro tipos de ação social:</p>
                <ul>
                    <li><strong>Racional com relação a fins:</strong> Calcula meios para atingir objetivos</li>
                    <li><strong>Racional com relação a valores:</strong> Age por convicção ética/religiosa</li>
                    <li><strong>Afetiva:</strong> Age por emoção</li>
                    <li><strong>Tradicional:</strong> Age por costume</li>
                </ul>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> Durkheim foca na estrutura que molda o indivíduo (fato social); Marx foca no conflito econômico (luta de classes); Weber foca no sentido que os indivíduos dão às suas ações (ação social). São as três matrizes da Sociologia clássica.
                </div>
            `,
            bibliografia: [
                { titulo: "Émile Durkheim", link: "https://pt.wikipedia.org/wiki/%C3%89mile_Durkheim", descricao: "Wikipedia - Pai da Sociologia francesa" },
                { titulo: "Karl Marx", link: "https://pt.wikipedia.org/wiki/Karl_Marx", descricao: "Wikipedia - Filósofo da luta de classes" },
                { titulo: "Max Weber", link: "https://pt.wikipedia.org/wiki/Max_Weber", descricao: "Wikipedia - Sociólogo da ação social" },
                { titulo: "Fato social", link: "https://pt.wikipedia.org/wiki/Fato_social", descricao: "Wikipedia - Conceito durkheimiano" }
            ],
            quiz: [
                {
                    enunciado: "Para Émile Durkheim, os 'fatos sociais' se caracterizam por serem:",
                    alternativas: {
                        a: "Exteriores aos indivíduos, anteriores a eles e coercitivos (exercem pressão sobre os indivíduos).",
                        b: "Criados livremente por cada indivíduo sem nenhuma influência social.",
                        c: "Exclusivamente biológicos e determinados geneticamente.",
                        d: "Inexistentes, pois só existem indivíduos e suas escolhas pessoais.",
                        e: "Sempre benéficos e positivos para todos os membros da sociedade."
                    },
                    correta: "a",
                    explicacao: "Para Durkheim, os fatos sociais (leis, normas, costumes, língua) existem independentemente dos indivíduos (exterioridade), já existiam antes deles nascerem (anterioridade) e exercem pressão/coerção para que sejam seguidos (coercitividade)."
                },
                {
                    enunciado: "Para Karl Marx, a história da humanidade é a história:",
                    alternativas: {
                        a: "Das grandes conquistas militares e dos impérios.",
                        b: "Da luta de classes, do conflito entre exploradores e explorados.",
                        c: "Das ideias dos grandes filósofos e pensadores.",
                        d: "Da evolução pacífica e harmoniosa das sociedades.",
                        e: "Da ação dos grandes heróis e líderes religiosos."
                    },
                    correta: "b",
                    explicacao: "Marx afirma no Manifesto Comunista: 'A história de toda a sociedade até hoje existente é a história da luta de classes'. O motor da história é o conflito entre classes sociais (exploradores vs. explorados), não as ideias ou os heróis."
                },
                {
                    enunciado: "O conceito de 'mais-valia' em Marx refere-se a:",
                    alternativas: {
                        a: "O salário justo pago ao trabalhador por seu trabalho.",
                        b: "O valor do trabalho não pago ao trabalhador, apropriado pelo capitalista como lucro.",
                        c: "O imposto pago pelos trabalhadores ao Estado.",
                        d: "O lucro obtido pelo trabalhador em ações na bolsa de valores.",
                        e: "O bônus pago aos gerentes das empresas."
                    },
                    correta: "b",
                    explicacao: "A mais-valia é o valor produzido pelo trabalhador além do que recebe como salário. Esse valor excedente é apropriado pelo capitalista como lucro. É o fundamento da exploração capitalista segundo Marx."
                },
                {
                    enunciado: "Para Max Weber, a 'ação social' se caracteriza por:",
                    alternativas: {
                        a: "Ser qualquer comportamento humano, mesmo isolado e sem sentido.",
                        b: "Ser uma ação com sentido subjetivo orientada para o comportamento do outro.",
                        c: "Ser apenas a ação política realizada em partidos e eleições.",
                        d: "Ser exclusivamente a ação econômica motivada pelo lucro.",
                        e: "Ser qualquer ação coletiva realizada por grupos organizados."
                    },
                    correta: "b",
                    explicacao: "Para Weber, ação social é aquela que tem um sentido subjetivo para quem a pratica E é orientada pelo comportamento do outro. Ações puramente individuais, sem relação com o outro, não são 'sociais'."
                },
                {
                    enunciado: "A principal diferença entre as abordagens de Durkheim, Marx e Weber pode ser resumida como:",
                    alternativas: {
                        a: "Durkheim foca no conflito; Marx foca na estrutura; Weber foca no indivíduo.",
                        b: "Durkheim foca na estrutura que molda o indivíduo (fato social); Marx foca no conflito econômico (luta de classes); Weber foca no sentido que os indivíduos dão às suas ações (ação social).",
                        c: "Todos os três têm exatamente a mesma abordagem, sem diferenças.",
                        d: "Durkheim foca no indivíduo; Marx foca na religião; Weber foca na economia.",
                        e: "Durkheim rejeita a Sociologia; Marx e Weber a fundam."
                    },
                    correta: "b",
                    explicacao: "São as três matrizes da Sociologia clássica: Durkheim (fato social, estrutura que molda o indivíduo), Marx (luta de classes, conflito econômico), Weber (ação social, sentido subjetivo). Cada um destaca um aspecto diferente da realidade social."
                }
            ]
        },
        3: {
            titulo: "Cultura e Identidade",
            subtitulo: "Etnocentrismo, relativismo cultural e construção da identidade",
            imagem: "https://images.unsplash.com/photo-1529156069182-903391a171a7?w=800",
            conteudo: `
                <h3>O Que é Cultura?</h3>
                <p>Na Sociologia, <strong>cultura</strong> é o conjunto de conhecimentos, crenças, artes, moral, leis, costumes e quaisquer outras capacidades e hábitos adquiridos pelo homem como membro da sociedade (definição de Edward Tylor).</p>

                <h3>Características da Cultura</h3>
                <ul>
                    <li><strong>Aprendida:</strong> Não é inata, é transmitida socialmente</li>
                    <li><strong>Social:</strong> Compartilhada por um grupo</li>
                    <li><strong>Simbólica:</strong> Baseada em símbolos e significados</li>
                    <li><strong>Dinâmica:</strong> Muda ao longo do tempo</li>
                    <li><strong>Totalizante:</strong> Abrange todos os aspectos da vida</li>
                </ul>

                <h3>Etnocentrismo vs. Relativismo Cultural</h3>
                <p><strong>Etnocentrismo:</strong> Julgar outras culturas a partir dos valores da própria cultura, considerando-a superior. Gera preconceito, discriminação e intolerância.</p>

                <p><strong>Relativismo cultural:</strong> Compreender cada cultura dentro de seu próprio contexto lógico, sem julgá-la pela régua de outra. Não significa concordar com tudo, mas respeitar a diversidade.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> O etnocentrismo gera preconceito e discriminação; o relativismo cultural promove o respeito à diversidade. A Sociologia valoriza o relativismo como atitude científica e ética.
                </div>
            `,
            bibliografia: [
                { titulo: "Cultura", link: "https://pt.wikipedia.org/wiki/Cultura", descricao: "Wikipedia - Conceito antropológico de cultura" },
                { titulo: "Etnocentrismo", link: "https://pt.wikipedia.org/wiki/Etnocentrismo", descricao: "Wikipedia - Julgamento pela própria cultura" },
                { titulo: "Relativismo cultural", link: "https://pt.wikipedia.org/wiki/Relativismo_cultural", descricao: "Wikipedia - Respeito à diversidade cultural" },
                { titulo: "Edward Tylor", link: "https://pt.wikipedia.org/wiki/Edward_Burnett_Tylor", descricao: "Wikipedia - Antropólogo pioneiro" }
            ],
            quiz: [
                {
                    enunciado: "O etnocentrismo é uma atitude que leva um grupo cultural a:",
                    alternativas: {
                        a: "Valorizar igualmente todas as manifestações culturais do planeta.",
                        b: "Considerar a sua própria cultura como a única verdadeira, correta e superior às demais.",
                        c: "Promover o diálogo e a troca horizontal de saberes.",
                        d: "Abandonar suas tradições em favor de uma cultura global homogênea.",
                        e: "Estudar cientificamente os hábitos de outros povos sem julgamentos."
                    },
                    correta: "b",
                    explicacao: "O etnocentrismo é a atitude de julgar outras culturas a partir dos valores da própria, considerando-a superior. Gera preconceito, discriminação e intolerância, sendo uma das principais fontes de conflitos étnicos e culturais."
                },
                {
                    enunciado: "O relativismo cultural propõe que devemos:",
                    alternativas: {
                        a: "Julgar todas as culturas pela régua da nossa própria cultura.",
                        b: "Compreender cada cultura dentro de seu próprio contexto lógico, sem julgá-la por outra.",
                        c: "Rejeitar qualquer forma de contato entre culturas diferentes.",
                        d: "Impor nossa cultura como superior às demais.",
                        e: "Considerar todas as culturas exatamente iguais, sem diferenças."
                    },
                    correta: "b",
                    explicacao: "O relativismo cultural propõe compreender cada cultura em seus próprios termos, sem julgá-la pela régua de outra. Não significa concordar com tudo, mas respeitar a diversidade e reconhecer que cada cultura tem sua lógica interna."
                },
                {
                    enunciado: "A definição de cultura proposta por Edward Tylor inclui:",
                    alternativas: {
                        a: "Apenas as obras de arte e as manifestações eruditas.",
                        b: "O conjunto de conhecimentos, crenças, artes, moral, leis, costumes e hábitos adquiridos pelo homem como membro da sociedade.",
                        c: "Exclusivamente as tradições religiosas de cada povo.",
                        d: "Apenas os aspectos materiais da vida humana (comida, roupas, moradia).",
                        e: "Somente as manifestações culturais dos povos europeus."
                    },
                    correta: "b",
                    explicacao: "Tylor (1871) definiu cultura como 'aquele todo complexo que inclui conhecimento, crença, arte, moral, lei, costumes e quaisquer outras capacidades e hábitos adquiridos pelo homem como membro da sociedade'. É uma definição ampla e inclusiva."
                },
                {
                    enunciado: "A cultura se caracteriza por ser 'aprendida', o que significa que:",
                    alternativas: {
                        a: "É transmitida geneticamente de pais para filhos.",
                        b: "É adquirida através da socialização, não sendo inata.",
                        c: "Só pode ser aprendida na escola formal.",
                        d: "É exclusiva dos seres humanos com alto QI.",
                        e: "Depende exclusivamente da leitura de livros."
                    },
                    correta: "b",
                    explicacao: "A cultura não é inata (não está nos genes), mas aprendida através do processo de socialização. Cada indivíduo aprende a cultura de seu grupo desde a infância, através da família, escola, mídia, etc."
                },
                {
                    enunciado: "A principal diferença entre etnocentrismo e relativismo cultural está:",
                    alternativas: {
                        a: "No fato de que ambos são a mesma coisa, sem diferença.",
                        b: "No fato de que o etnocentrismo julga outras culturas como inferiores; o relativismo cultural busca compreendê-las em seus próprios termos.",
                        c: "No fato de que o etnocentrismo é científico; o relativismo é religioso.",
                        d: "No fato de que o etnocentrismo é moderno; o relativismo é medieval.",
                        e: "No fato de que ambos rejeitam qualquer forma de contato cultural."
                    },
                    correta: "b",
                    explicacao: "O etnocentrismo julga outras culturas pela régua da própria, considerando-as inferiores; o relativismo cultural busca compreender cada cultura em seus próprios termos, respeitando a diversidade. São atitudes opostas diante da diferença cultural."
                }
            ]
        },
        4: {
            titulo: "Estratificação Social",
            subtitulo: "Classes sociais, mobilidade e produção das desigualdades",
            imagem: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
            conteudo: `
                <h3>O Que é Estratificação Social?</h3>
                <p>A <strong>estratificação social</strong> é a divisão da sociedade em camadas (estratos) hierarquizadas, com diferentes níveis de acesso a recursos, poder e prestígio. Não é natural, mas uma construção social.</p>

                <h3>Marx: Classes Sociais</h3>
                <p>Para <strong>Marx</strong>, as classes sociais são definidas pela relação com os <strong>meios de produção</strong>: burguesia (donos) vs. proletariado (trabalhadores). A desigualdade é estrutural do capitalismo.</p>

                <h3>Weber: Riqueza, Prestígio e Poder</h3>
                <p><strong>Weber</strong> ampliou a análise: a estratificação tem três dimensões:</p>
                <ul>
                    <li><strong>Classe (econômica):</strong> Riqueza e renda</li>
                    <li><strong>Status (social):</strong> Prestígio e honra</li>
                    <li><strong>Partido (política):</strong> Poder e influência</li>
                </ul>

                <h3>Bourdieu: Capitais</h3>
                <p><strong>Pierre Bourdieu</strong> identificou diferentes tipos de <strong>capital</strong>:</p>
                <ul>
                    <li><strong>Econômico:</strong> Dinheiro, propriedades</li>
                    <li><strong>Cultural:</strong> Educação, diplomas, conhecimentos</li>
                    <li><strong>Social:</strong> Redes de contatos, relacionamentos</li>
                    <li><strong>Simbólico:</strong> Prestígio, honra, reconhecimento</li>
                </ul>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> A desigualdade não é natural, mas estrutural. Bourdieu mostra que não é só dinheiro (capital econômico), mas também educação (capital cultural) e contatos (capital social) que mantêm as pessoas em suas posições sociais.
                </div>
            `,
            bibliografia: [
                { titulo: "Estratificação social", link: "https://pt.wikipedia.org/wiki/Estratifica%C3%A7%C3%A3o_social", descricao: "Wikipedia - Divisão da sociedade em camadas" },
                { titulo: "Classe social", link: "https://pt.wikipedia.org/wiki/Classe_social", descricao: "Wikipedia - Conceito marxista e weberiano" },
                { titulo: "Pierre Bourdieu", link: "https://pt.wikipedia.org/wiki/Pierre_Bourdieu", descricao: "Wikipedia - Sociólogo dos capitais" },
                { titulo: "Mobilidade social", link: "https://pt.wikipedia.org/wiki/Mobilidade_social", descricao: "Wikipedia - Movimento entre camadas sociais" }
            ],
            quiz: [
                {
                    enunciado: "A estratificação social refere-se a:",
                    alternativas: {
                        a: "Uma divisão natural e biológica da sociedade em camadas superiores e inferiores.",
                        b: "A divisão da sociedade em camadas hierarquizadas, com diferentes níveis de acesso a recursos, poder e prestígio.",
                        c: "A organização igualitária de todos os membros da sociedade.",
                        d: "A separação dos indivíduos apenas por critérios religiosos.",
                        e: "A classificação das pessoas exclusivamente por sua idade."
                    },
                    correta: "b",
                    explicacao: "A estratificação social é a divisão da sociedade em camadas (estratos) hierarquizadas, com diferentes níveis de acesso a recursos, poder e prestígio. É uma construção social, não natural."
                },
                {
                    enunciado: "Para Karl Marx, as classes sociais são definidas pela:",
                    alternativas: {
                        a: "Renda mensal de cada indivíduo.",
                        b: "Relação com os meios de produção (burguesia = donos; proletariado = trabalhadores).",
                        c: "Nível de escolaridade alcançado.",
                        d: "Prestígio social adquirido pelo sobrenome.",
                        e: "Cor da pele e origem étnica."
                    },
                    correta: "b",
                    explicacao: "Para Marx, classes sociais são definidas pela relação com os meios de produção: burguesia (possui os meios de produção) e proletariado (vende sua força de trabalho). A desigualdade é estrutural do capitalismo."
                },
                {
                    enunciado: "Para Max Weber, a estratificação social tem três dimensões:",
                    alternativas: {
                        a: "Raça, gênero e idade.",
                        b: "Classe (econômica), status (prestígio) e partido (poder político).",
                        c: "Religião, etnia e nacionalidade.",
                        d: "Educação, saúde e moradia.",
                        e: "Riqueza, beleza e inteligência."
                    },
                    correta: "b",
                    explicacao: "Weber amplia a análise marxista: a estratificação tem três dimensões independentes - classe (econômica, riqueza), status (social, prestígio/honra) e partido (política, poder/influência). Uma pessoa pode ter alta posição em uma dimensão e baixa em outra."
                },
                {
                    enunciado: "O 'capital cultural', conceito desenvolvido por Pierre Bourdieu, refere-se a:",
                    alternativas: {
                        a: "Apenas ao dinheiro acumulado em contas bancárias.",
                        b: "Aos conhecimentos, diplomas, modos de falar e gostos que conferem status e vantagens sociais.",
                        c: "À capacidade física de um indivíduo para realizar trabalhos manuais.",
                        d: "Ao investimento do Estado em grandes obras de infraestrutura.",
                        e: "À doação de recursos financeiros para instituições de caridade."
                    },
                    correta: "b",
                    explicacao: "O capital cultural inclui conhecimentos, diplomas, modos de falar, gostos culturais, etc. É transmitido pelas famílias e pelas escolas, conferindo vantagens sociais. Bourdieu mostra que não é só dinheiro que mantém as posições sociais."
                },
                {
                    enunciado: "A mobilidade social pode ser definida como:",
                    alternativas: {
                        a: "A capacidade física de uma pessoa se deslocar no espaço.",
                        b: "O movimento dos indivíduos entre diferentes posições na hierarquia social.",
                        c: "A migração de pessoas entre países diferentes.",
                        d: "A mudança de residência dentro de uma mesma cidade.",
                        e: "A rotação de cargos em uma empresa privada."
                    },
                    correta: "b",
                    explicacao: "Mobilidade social é o movimento dos indivíduos entre diferentes posições na hierarquia social. Pode ser ascendente (subir) ou descendente (descer), e pode ser intergeracional (entre gerações) ou intrageracional (na mesma vida)."
                }
            ]
        },
        5: {
            titulo: "Racismo Estrutural",
            subtitulo: "Racismo estrutural, relações étnico-raciais e combate ao preconceito",
            imagem: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800",
            conteudo: `
                <h3>O Que é Racismo Estrutural?</h3>
                <p>O <strong>racismo estrutural</strong> (conceito desenvolvido por Silvio Almeida e outros pensadores) não é apenas um ato individual de preconceito, mas uma <strong>estrutura</strong> que organiza a sociedade, a economia, a política e as instituições de forma a reproduzir desigualdades raciais.</p>

                <div class="philosopher">
                    <strong>📊 Dados Reveladores</strong>
                    No Brasil, a população negra representa mais de 56% dos habitantes, mas:
                    <ul>
                        <li>Representa 68% dos desempregados</li>
                        <li>Recebe em média 57% da renda dos brancos</li>
                        <li>Compõe 67% da população carcerária</li>
                        <li>Representa 75% das vítimas de homicídio</li>
                    </ul>
                    Isso não é coincidência: é racismo estrutural.
                </div>

                <h3>Tipos de Racismo</h3>
                <ul>
                    <li><strong>Racismo institucional:</strong> Quando instituições (escola, polícia, justiça) reproduzem discriminação</li>
                    <li><strong>Racismo recreativo:</strong> "Piadas" e "brincadeiras" que naturalizam o preconceito</li>
                    <li><strong>Racismo estrutural:</strong> A base de toda a organização social</li>
                </ul>

                <h3>Branquitude</h3>
                <p>O conceito de <strong>branquitude</strong> analisa o lugar de privilégio ocupado por pessoas brancas na sociedade. Não é sobre "culpa individual", mas sobre reconhecer estruturas de privilégio.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> O racismo estrutural está entranhado nas instituições, na cultura e na economia, reproduzindo desigualdades de forma sistemática. Combater o racismo exige ações estruturais (cotas, educação antirracista, políticas públicas).
                </div>
            `,
            bibliografia: [
                { titulo: "Racismo estrutural", link: "https://pt.wikipedia.org/wiki/Racismo_estrutural", descricao: "Wikipedia - Conceito de Silvio Almeida" },
                { titulo: "Racismo no Brasil", link: "https://pt.wikipedia.org/wiki/Racismo_no_Brasil", descricao: "Wikipedia - História do racismo brasileiro" },
                { titulo: "Silvio Almeida", link: "https://pt.wikipedia.org/wiki/Silvio_Luiz_de_Almeida", descricao: "Wikipedia - Filósofo do racismo estrutural" },
                { titulo: "Movimento negro", link: "https://pt.wikipedia.org/wiki/Movimento_negro", descricao: "Wikipedia - Luta contra o racismo" }
            ],
            quiz: [
                {
                    enunciado: "O conceito de racismo estrutural, discutido por pensadores contemporâneos, afirma que o racismo:",
                    alternativas: {
                        a: "É um fenômeno raro, restrito a indivíduos isolados e mal-intencionados.",
                        b: "Foi completamente superado no Brasil com a abolição da escravatura em 1888.",
                        c: "Está entranhado nas instituições, na cultura e na economia, reproduzindo desigualdades de forma sistemática.",
                        d: "É uma invenção da sociologia para criar divisão entre os povos.",
                        e: "Afeta apenas as relações interpessoais, sem impacto no mercado de trabalho."
                    },
                    correta: "c",
                    explicacao: "O racismo estrutural (Silvio Almeida) não é apenas um ato individual, mas uma estrutura que organiza a sociedade, a economia, a política e as instituições de forma a reproduzir desigualdades raciais de forma sistemática."
                },
                {
                    enunciado: "O racismo institucional se manifesta quando:",
                    alternativas: {
                        a: "Apenas indivíduos fazem comentários preconceituosos em redes sociais.",
                        b: "Instituições como escola, polícia e justiça reproduzem discriminação racial em suas práticas.",
                        c: "Pessoas negras conquistam espaços de poder na sociedade.",
                        d: "O Estado promove políticas de igualdade racial.",
                        e: "Empresas contratam funcionários de diferentes origens étnicas."
                    },
                    correta: "b",
                    explicacao: "O racismo institucional ocorre quando as instituições (escola, polícia, justiça, saúde) reproduzem discriminação racial em suas práticas, mesmo sem intenção explícita. Ex: perfilamento racial pela polícia, menor investimento em escolas de periferia."
                },
                {
                    enunciado: "O racismo recreativo se caracteriza por:",
                    alternativas: {
                        a: "Pela defesa aberta da superioridade de uma raça sobre outra.",
                        b: "Por 'piadas', 'brincadeiras' e 'humor' que naturalizam o preconceito e a discriminação racial.",
                        c: "Pela promoção de políticas públicas de igualdade racial.",
                        d: "Pela valorização da cultura negra em espaços públicos.",
                        e: "Pela pesquisa acadêmica sobre relações étnico-raciais."
                    },
                    correta: "b",
                    explicacao: "O racismo recreativo se manifesta em 'piadas', 'brincadeiras' e 'humor' que naturalizam estereótipos raciais. É uma forma sutil de racismo que se esconde atrás do 'era só uma brincadeira', mas reforça preconceitos."
                },
                {
                    enunciado: "O conceito de 'branquitude' analisa:",
                    alternativas: {
                        a: "A superioridade natural das pessoas brancas sobre as demais.",
                        b: "O lugar de privilégio ocupado por pessoas brancas na sociedade, como estrutura a ser reconhecida e questionada.",
                        c: "A necessidade de segregação racial entre brancos e negros.",
                        d: "A exclusividade da cultura branca como padrão civilizatório.",
                        e: "A impossibilidade de diálogo entre diferentes grupos étnicos."
                    },
                    correta: "b",
                    explicacao: "Branquitude analisa o lugar de privilégio ocupado por pessoas brancas na sociedade. Não é sobre 'culpa individual', mas sobre reconhecer estruturas de privilégio que beneficiam brancos e prejudicam não-brancos, mesmo sem intenção consciente."
                },
                {
                    enunciado: "Os dados sobre a população negra no Brasil (desemprego, renda, encarceramento, homicídios) demonstram que:",
                    alternativas: {
                        a: "São coincidências sem qualquer relação com a cor da pele.",
                        b: "São frutos do racismo estrutural, que reproduz desigualdades de forma sistemática.",
                        c: "Mostram que a população negra tem preferência por essas situações.",
                        d: "Provam que a abolição da escravatura resolveu todos os problemas raciais.",
                        e: "Indicam que não existe racismo no Brasil contemporâneo."
                    },
                    correta: "b",
                    explicacao: "Esses dados não são coincidência: são frutos do racismo estrutural, que herdado da escravidão, continua reproduzindo desigualdades raciais em todas as esferas da vida social. Combater isso exige políticas estruturais, não apenas individuais."
                }
            ]
        },
        6: {
            titulo: "Gênero e Patriarcado",
            subtitulo: "Construção social de gênero, violência simbólica e relações de poder",
            imagem: "https://images.unsplash.com/photo-1607748854627-9a94a3b9e2e1?w=800",
            conteudo: `
                <h3>O Que é Gênero?</h3>
                <p><strong>Gênero</strong> é uma construção social que atribui papéis, comportamentos, expectativas e identidades a homens e mulheres. Diferente do <strong>sexo</strong> (biológico), o gênero é aprendido e varia entre culturas e épocas.</p>

                <h3>Patriarcado</h3>
                <p>O <strong>patriarcado</strong> é um sistema de organização social que privilegia os homens em detrimento das mulheres. É uma estrutura histórica que se manifesta na família, no trabalho, na política e na cultura.</p>

                <h3>Violência Simbólica</h3>
                <p><strong>Pierre Bourdieu</strong> desenvolveu o conceito de <strong>violência simbólica</strong>: uma forma de violência suave, invisível, que se exerce com a cumplicidade dos dominados. As mulheres internalizam os estereótipos de gênero e os reproduzem, acreditando que são "naturais".</p>

                <div class="philosopher">
                    <strong>💄 Exemplos de Violência Simbólica</strong>
                    <ul>
                        <li>"Lugar de mulher é na cozinha"</li>
                        <li>"Menino não chora"</li>
                        <li>"Mulher dirige mal"</li>
                        <li>"Homem não cuida de criança"</li>
                    </ul>
                    Essas frases naturalizam desigualdades e limitam as possibilidades de homens e mulheres.
                </div>

                <h3>Divisão Sexual do Trabalho</h3>
                <p>A sociedade atribui diferentes tarefas a homens e mulheres: trabalhos domésticos e de cuidado (desvalorizados) são associados às mulheres; trabalhos públicos e de poder (valorizados) são associados aos homens.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> Gênero é construção social, não biologia. O patriarcado é um sistema histórico de dominação masculina. A violência simbólica naturaliza desigualdades através de estereótipos internalizados. Combater isso exige desconstruir esses padrões.
                </div>
            `,
            bibliografia: [
                { titulo: "Gênero", link: "https://pt.wikipedia.org/wiki/G%C3%AAnero", descricao: "Wikipedia - Construção social de gênero" },
                { titulo: "Patriarcado", link: "https://pt.wikipedia.org/wiki/Patriarcado", descricao: "Wikipedia - Sistema de dominação masculina" },
                { titulo: "Violência simbólica", link: "https://pt.wikipedia.org/wiki/Viol%C3%AAncia_simb%C3%B3lica", descricao: "Wikipedia - Conceito de Bourdieu" },
                { titulo: "Feminismo", link: "https://pt.wikipedia.org/wiki/Feminismo", descricao: "Wikipedia - Movimento pela igualdade de gênero" }
            ],
            quiz: [
                {
                    enunciado: "A diferença entre 'sexo' e 'gênero' pode ser compreendida como:",
                    alternativas: {
                        a: "Sexo é construção social; gênero é biológico.",
                        b: "Sexo refere-se às características biológicas; gênero é uma construção social que atribui papéis e identidades.",
                        c: "São exatamente a mesma coisa, sem diferença conceitual.",
                        d: "Sexo é cultural; gênero é natural.",
                        e: "Ambos são determinados exclusivamente pela genética."
                    },
                    correta: "b",
                    explicacao: "Sexo refere-se às características biológicas (cromossomos, hormônios, anatomia); gênero é uma construção social que atribui papéis, comportamentos e identidades a homens e mulheres, variando entre culturas e épocas."
                },
                {
                    enunciado: "O patriarcado pode ser definido como:",
                    alternativas: {
                        a: "Um sistema de organização social que privilegia as mulheres em detrimento dos homens.",
                        b: "Um sistema de organização social que privilegia os homens em detrimento das mulheres.",
                        c: "Um sistema igualitário que trata homens e mulheres da mesma forma.",
                        d: "Um sistema religioso que não tem relação com a organização social.",
                        e: "Um sistema biológico determinado pelos cromossomos."
                    },
                    correta: "b",
                    explicacao: "O patriarcado é um sistema histórico de organização social que privilegia os homens em detrimento das mulheres, manifestando-se na família, no trabalho, na política e na cultura. Não é natural, mas uma construção histórica."
                },
                {
                    enunciado: "A 'violência simbólica', segundo Pierre Bourdieu, se caracteriza por:",
                    alternativas: {
                        a: "Ser uma agressão física explícita e visível.",
                        b: "Ser uma violência suave, invisível, que se exerce com a cumplicidade dos dominados, que internalizam os estereótipos.",
                        c: "Ser uma violência apenas praticada por homens contra mulheres.",
                        d: "Ser uma violência exclusiva das sociedades pré-modernas.",
                        e: "Ser uma violência que não tem qualquer efeito sobre as vítimas."
                    },
                    correta: "b",
                    explicacao: "A violência simbólica é uma forma de violência suave, invisível, que se exerce com a cumplicidade dos próprios dominados, que internalizam os estereótipos e os reproduzem como se fossem 'naturais'. Ex: mulheres que acreditam que 'lugar de mulher é na cozinha'."
                },
                {
                    enunciado: "A afirmação 'menino não chora' é um exemplo de:",
                    alternativas: {
                        a: "Conselho médico baseado em evidências científicas.",
                        b: "Estereótipo de gênero que naturaliza a repressão emocional dos homens.",
                        c: "Uma verdade biológica sobre o corpo masculino.",
                        d: "Uma tradição religiosa que deve ser respeitada.",
                        e: "Uma lei brasileira que proíbe homens de chorar."
                    },
                    correta: "b",
                    explicacao: "'Menino não chora' é um estereótipo de gênero que naturaliza a repressão emocional dos homens, ensinando-os desde criança a não expressar sentimentos. É uma forma de violência simbólica que limita as possibilidades afetivas dos homens."
                },
                {
                    enunciado: "A divisão sexual do trabalho atribui tradicionalmente:",
                    alternativas: {
                        a: "Trabalhos domésticos e de cuidado às mulheres; trabalhos públicos e de poder aos homens.",
                        b: "Trabalhos domésticos aos homens; trabalhos públicos às mulheres.",
                        c: "Todos os trabalhos igualmente a homens e mulheres, sem distinção.",
                        d: "Apenas trabalhos intelectuais às mulheres; trabalhos manuais aos homens.",
                        e: "Apenas trabalhos políticos aos homens; trabalhos religiosos às mulheres."
                    },
                    correta: "a",
                    explicacao: "A divisão sexual do trabalho atribui tradicionalmente às mulheres trabalhos domésticos e de cuidado (desvalorizados economicamente) e aos homens trabalhos públicos e de poder (valorizados). Essa divisão é uma construção social, não biológica."
                }
            ]
        },
        7: {
            titulo: "Estado e Cidadania",
            subtitulo: "Formação do Estado brasileiro, cidadania e direitos políticos",
            imagem: "https://images.unsplash.com/photo-1591991731833-b4807cf7fb94?w=800",
            conteudo: `
                <h3>O Que é Estado?</h3>
                <p>O <strong>Estado</strong> é uma forma de organização política que detém o monopólio do uso legítimo da força em um determinado território. Seus elementos constitutivos são: <strong>soberania</strong>, <strong>território</strong>, <strong>povo</strong> e <strong>governo</strong>.</p>

                <h3>Cidadania</h3>
                <p><strong>Cidadania</strong> é o conjunto de direitos e deveres que vinculam o indivíduo ao Estado. T.H. Marshall identificou três dimensões da cidadania:</p>
                <ul>
                    <li><strong>Civil:</strong> Liberdades individuais (locomoção, expressão, propriedade, justiça)</li>
                    <li><strong>Política:</strong> Direito de votar e ser votado, participar do governo</li>
                    <li><strong>Social:</strong> Direito à educação, saúde, trabalho, previdência</li>
                </ul>

                <h3>A Inversão Brasileira</h3>
                <p>Segundo <strong>José Murilo de Carvalho</strong>, no Brasil houve uma "inversão da ordem" em relação ao modelo europeu: os direitos sociais (trabalhistas) foram concedidos pelo Estado (Era Vargas) <strong>antes</strong> da plena participação política, gerando uma "cidadania regulada" ou tutelada.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> No modelo europeu (Marshall): civis → políticos → sociais. No Brasil (Carvalho): houve inversão, com direitos sociais concedidos pelo Estado antes da plena cidadania política, gerando cidadania regulada/tutelada.
                </div>
            `,
            bibliografia: [
                { titulo: "Estado", link: "https://pt.wikipedia.org/wiki/Estado", descricao: "Wikipedia - Conceito de Estado" },
                { titulo: "Cidadania", link: "https://pt.wikipedia.org/wiki/Cidadania", descricao: "Wikipedia - Direitos e deveres do cidadão" },
                { titulo: "T.H. Marshall", link: "https://pt.wikipedia.org/wiki/Thomas_Humphrey_Marshall", descricao: "Wikipedia - Sociólogo da cidadania" },
                { titulo: "José Murilo de Carvalho", link: "https://pt.wikipedia.org/wiki/Jos%C3%A9_Murilo_de_Carvalho", descricao: "Wikipedia - Historiador brasileiro" }
            ],
            quiz: [
                {
                    enunciado: "Os elementos constitutivos do Estado são:",
                    alternativas: {
                        a: "Exército, polícia e prisão.",
                        b: "Soberania, território, povo e governo.",
                        c: "Religião, cultura, língua e tradições.",
                        d: "Capital, trabalho e tecnologia.",
                        e: "Presidente, Congresso e Supremo Tribunal."
                    },
                    correta: "b",
                    explicacao: "O Estado é composto por quatro elementos: soberania (poder supremo), território (base física), povo (comunidade humana) e governo (organização política). Sem esses elementos, não há Estado."
                },
                {
                    enunciado: "T.H. Marshall identificou três dimensões da cidadania:",
                    alternativas: {
                        a: "Econômica, cultural e religiosa.",
                        b: "Civil (liberdades individuais), política (direito de votar e ser votado) e social (direitos trabalhistas e previdenciários).",
                        c: "Local, nacional e internacional.",
                        d: "Individual, coletiva e universal.",
                        e: "Antiga, moderna e contemporânea."
                    },
                    correta: "b",
                    explicacao: "Marshall identificou três dimensões da cidadania: civil (liberdades individuais, século XVIII), política (direito de participação, século XIX) e social (direitos econômicos e sociais, século XX). Na Europa, seguiram essa ordem histórica."
                },
                {
                    enunciado: "Segundo José Murilo de Carvalho, a cidadania no Brasil se caracterizou por:",
                    alternativas: {
                        a: "Seguir exatamente o modelo europeu, sem diferenças.",
                        b: "Uma 'inversão da ordem': direitos sociais concedidos pelo Estado antes da plena cidadania política, gerando cidadania regulada/tutelada.",
                        c: "Uma plena cidadania desde o período colonial.",
                        d: "A ausência total de qualquer forma de cidadania ao longo da história.",
                        e: "A prioridade absoluta aos direitos civis em detrimento dos sociais."
                    },
                    correta: "b",
                    explicacao: "Carvalho mostra que no Brasil houve uma 'inversão da ordem': os direitos sociais (trabalhistas, na Era Vargas) foram concedidos pelo Estado antes da plena cidadania política, gerando uma cidadania 'regulada' ou 'tutelada', dependente do Estado."
                },
                {
                    enunciado: "A 'cidadania regulada' no Brasil significa que:",
                    alternativas: {
                        a: "Todos os cidadãos têm os mesmos direitos, sem distinção.",
                        b: "Os direitos de cidadania eram condicionados à profissão registrada, excluindo trabalhadores informais e marginais.",
                        c: "A cidadania era plena e universal desde a independência.",
                        d: "Apenas os proprietários de terra tinham direitos de cidadania.",
                        e: "A cidadania era regulada exclusivamente pela religião."
                    },
                    correta: "b",
                    explicacao: "A 'cidadania regulada' (ou tutelada) significava que os direitos sociais eram condicionados à profissão registrada em carteira, excluindo trabalhadores informais, rurais sem registro, etc. Era uma cidadania 'regulada' pelo Estado."
                },
                {
                    enunciado: "A Constituição Brasileira de 1988 é conhecida como 'Constituição Cidadã' porque:",
                    alternativas: {
                        a: "Foi escrita exclusivamente por cidadãos comuns, sem participação de políticos.",
                        b: "Ampliou significativamente os direitos civis, políticos e sociais, consolidando a democracia após a ditadura.",
                        c: "Foi a primeira constituição do Brasil.",
                        d: "Foi escrita por um cidadão chamado 'Cidadão'.",
                        e: "Não tem qualquer relação com o conceito de cidadania."
                    },
                    correta: "b",
                    explicacao: "A Constituição de 1988 é chamada de 'Cidadã' (expressão cunhada por Ulysses Guimarães) porque ampliou significativamente os direitos civis, políticos e sociais, consolidando a democracia após 21 anos de ditadura militar."
                }
            ]
        },
        8: {
            titulo: "Democracia e Autoritarismo",
            subtitulo: "Democracia representativa e participativa, clientelismo e populismo",
            imagem: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800",
            conteudo: `
                <h3>O Que é Democracia?</h3>
                <p>A <strong>democracia</strong> é um regime político onde o poder emana do povo. Existem diferentes modelos:</p>
                <ul>
                    <li><strong>Representativa:</strong> O povo elege representantes que tomam decisões em seu nome</li>
                    <li><strong>Participativa:</strong> O povo participa diretamente das decisões (plebiscito, referendo, conselhos)</li>
                    <li><strong>Deliberativa:</strong> As decisões são tomadas através do diálogo racional entre cidadãos</li>
                </ul>

                <h3>Poliarquia (Robert Dahl)</h3>
                <p><strong>Robert Dahl</strong> cunhou o termo <strong>poliarquia</strong> para descrever as democracias reais: regime com eleições livres, múltiplos partidos, liberdade de expressão, sufrágio universal. É uma "democracia realmente existente", não um ideal.</p>

                <h3>Autoritarismo no Brasil</h3>
                <p>O Brasil tem uma tradição autoritária que se manifesta em práticas antidemocráticas:</p>
                <ul>
                    <li><strong>Clientelismo:</strong> Troca de favores por votos ("voto de cabresto")</li>
                    <li><strong>Populismo:</strong> Líderes que se apresentam como "pais do povo", sem institucionalização</li>
                    <li><strong>Coronelismo:</strong> Poder local de grandes proprietários rurais</li>
                </ul>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> Democracia não é só votar: inclui participação, deliberação e controle social. O autoritarismo brasileiro se manifesta em práticas como clientelismo e populismo, que enfraquecem as instituições democráticas.
                </div>
            `,
            bibliografia: [
                { titulo: "Democracia", link: "https://pt.wikipedia.org/wiki/Democracia", descricao: "Wikipedia - Regime do poder do povo" },
                { titulo: "Robert Dahl", link: "https://pt.wikipedia.org/wiki/Robert_Dahl", descricao: "Wikipedia - Teórico da poliarquia" },
                { titulo: "Clientelismo", link: "https://pt.wikipedia.org/wiki/Clientelismo", descricao: "Wikipedia - Troca de favores por votos" },
                { titulo: "Populismo", link: "https://pt.wikipedia.org/wiki/Populismo", descricao: "Wikipedia - Fenômeno político" }
            ],
            quiz: [
                {
                    enunciado: "A democracia participativa se diferencia da representativa porque:",
                    alternativas: {
                        a: "Na participativa o povo não vota; na representativa o povo vota.",
                        b: "Na participativa o povo participa diretamente das decisões (plebiscito, referendo, conselhos); na representativa elege representantes.",
                        c: "São exatamente a mesma coisa, sem diferença.",
                        d: "A participativa é exclusiva de regimes autoritários.",
                        e: "A representativa não existe em nenhum país do mundo."
                    },
                    correta: "b",
                    explicacao: "A democracia representativa elege representantes que decidem em nome do povo; a participativa permite que o povo participe diretamente das decisões através de plebiscitos, referendos, conselhos, orçamento participativo, etc."
                },
                {
                    enunciado: "O conceito de 'poliarquia', desenvolvido por Robert Dahl, refere-se a:",
                    alternativas: {
                        a: "Um regime autoritário com múltiplos partidos fictícios.",
                        b: "Uma democracia realmente existente, com eleições livres, múltiplos partidos, liberdade de expressão e sufrágio universal.",
                        c: "Um regime onde apenas um partido pode governar.",
                        d: "Uma ditadura militar disfarçada de democracia.",
                        e: "Um sistema político sem qualquer forma de participação popular."
                    },
                    correta: "b",
                    explicacao: "Dahl cunhou 'poliarquia' para descrever as democracias reais (não ideais): regime com eleições livres e justas, múltiplos partidos, liberdade de expressão, sufrágio universal, direito de competir por cargos públicos."
                },
                {
                    enunciado: "O clientelismo é uma prática antidemocrática que se caracteriza por:",
                    alternativas: {
                        a: "Pela participação popular espontânea e desvinculada de partidos políticos.",
                        b: "Pela troca de favores, bens ou empregos públicos por apoio eleitoral, subordinando o interesse público ao privado.",
                        c: "Pela fiscalização rigorosa dos gastos públicos por órgãos independentes.",
                        d: "Pela igualdade absoluta de recursos entre todos os candidatos nas eleições.",
                        e: "Pelo fortalecimento das instituições de controle e transparência."
                    },
                    correta: "b",
                    explicacao: "O clientelismo é a troca de favores (empregos, obras, benefícios) por apoio eleitoral, subordinando o interesse público ao privado. É uma prática antidemocrática que enfraquece as instituições e transforma o voto em mercadoria."
                },
                {
                    enunciado: "O populismo, como prática política, se caracteriza por:",
                    alternativas: {
                        a: "Pela participação popular direta em todas as decisões do Estado.",
                        b: "Por líderes que se apresentam como 'pais do povo', estabelecendo relação direta com as massas, sem mediação institucional.",
                        c: "Pela valorização das instituições democráticas e do Estado de Direito.",
                        d: "Pela distribuição igualitária de renda entre todos os cidadãos.",
                        e: "Pela separação rigorosa entre os poderes Executivo, Legislativo e Judiciário."
                    },
                    correta: "b",
                    explicacao: "O populismo é uma prática onde líderes carismáticos se apresentam como 'pais do povo', estabelecendo relação direta com as massas, sem mediação institucional. Enfraquece as instituições democráticas ao personalizar o poder."
                },
                {
                    enunciado: "A dimensão deliberativa da democracia, proposta por Habermas, defende que:",
                    alternativas: {
                        a: "As decisões devem ser tomadas apenas pelo líder mais forte.",
                        b: "As decisões legítimas são aquelas que emergem do diálogo racional e livre entre todos os afetados.",
                        c: "As decisões devem ser impostas pela maioria, sem diálogo com a minoria.",
                        d: "As decisões devem ser tomadas em segredo, sem participação popular.",
                        e: "As decisões devem ser delegadas exclusivamente aos juízes."
                    },
                    correta: "b",
                    explicacao: "A democracia deliberativa (Habermas) defende que as decisões legítimas emergem do diálogo racional e livre entre todos os afetados. Não é só votar: é argumentar, ouvir, convencer. É a dimensão mais profunda da democracia."
                }
            ]
        },
        9: {
            titulo: "Movimentos Sociais",
            subtitulo: "Ação coletiva, políticas públicas e o direito a ter direitos",
            imagem: "https://images.unsplash.com/photo-1591189824344-9a4d29a3a2a2?w=800",
            conteudo: `
                <h3>O Que São Movimentos Sociais?</h3>
                <p><strong>Movimentos sociais</strong> são formas de ação coletiva organizada que buscam transformar a sociedade, defender direitos ou resistir a opressões. Não são "quebra da ordem", mas parte fundamental da democracia.</p>

                <h3>Exemplos de Movimentos Sociais</h3>
                <ul>
                    <li><strong>Movimento Negro:</strong> Combate ao racismo, valorização da cultura afro-brasileira</li>
                    <li><strong>Movimento Feminista:</strong> Luta pela igualdade de gênero, contra o machismo</li>
                    <li><strong>Movimento Indígena:</strong> Defesa dos direitos dos povos originários</li>
                    <li><strong>MST:</strong> Luta pela reforma agrária</li>
                    <li><strong>Movimento LGBTQIA+:</strong> Luta contra a LGBTfobia, por direitos</li>
                </ul>

                <h3>O Direito a Ter Direitos</h3>
                <p>A expressão "direito a ter direitos" (Hannah Arendt) mostra que os direitos não são dados naturalmente: são conquistados através da luta coletiva. Os movimentos sociais ampliam direitos que antes não existiam.</p>

                <h3>Políticas Públicas</h3>
                <p><strong>Políticas públicas</strong> são as ações práticas do Estado para resolver problemas sociais. Tipos:</p>
                <ul>
                    <li><strong>Distributivas:</strong> Benefícios para grupos específicos (bolsa família)</li>
                    <li><strong>Redistributivas:</strong> Transferência de recursos dos mais ricos para os mais pobres</li>
                    <li><strong>Regulatórias:</strong> Regras que regulam comportamentos (código de trânsito)</li>
                    <li><strong>Constitutivas:</strong> Criam instituições e órgãos públicos</li>
                </ul>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> Movimentos sociais são fundamentais na democracia: ampliam direitos, pressionam o Estado, dão voz a grupos excluídos. Políticas públicas são as respostas do Estado às demandas sociais.
                </div>
            `,
            bibliografia: [
                { titulo: "Movimento social", link: "https://pt.wikipedia.org/wiki/Movimento_social", descricao: "Wikipedia - Ação coletiva organizada" },
                { titulo: "Políticas públicas", link: "https://pt.wikipedia.org/wiki/Pol%C3%ADticas_p%C3%BAblicas", descricao: "Wikipedia - Ações do Estado" },
                { titulo: "Movimento negro", link: "https://pt.wikipedia.org/wiki/Movimento_negro", descricao: "Wikipedia - Luta antirracista" },
                { titulo: "Movimento feminista", link: "https://pt.wikipedia.org/wiki/Feminismo", descricao: "Wikipedia - Luta pela igualdade de gênero" }
            ],
            quiz: [
                {
                    enunciado: "Os movimentos sociais podem ser definidos como:",
                    alternativas: {
                        a: "Grupos que buscam substituir o Estado e assumir o poder governamental à força.",
                        b: "Formas de ação coletiva organizada que buscam transformar a sociedade, defender direitos ou resistir a opressões.",
                        c: "Apenas organizações partidárias que disputam eleições.",
                        d: "Grupos que representam apenas interesses de minorias privilegiadas economicamente.",
                        e: "Entidades totalmente desnecessárias em regimes democráticos."
                    },
                    correta: "b",
                    explicacao: "Movimentos sociais são formas de ação coletiva organizada que buscam transformar a sociedade, defender direitos ou resistir a opressões. Não são 'quebra da ordem', mas parte fundamental da democracia, ampliando direitos."
                },
                {
                    enunciado: "A expressão 'direito a ter direitos', associada a Hannah Arendt, significa que:",
                    alternativas: {
                        a: "Os direitos são dados naturalmente por Deus a todos os seres humanos.",
                        b: "Os direitos não são dados naturalmente: são conquistados através da luta coletiva e da organização política.",
                        c: "Apenas os cidadãos de países ricos têm direitos.",
                        d: "Os direitos são concedidos pelo Estado conforme sua conveniência.",
                        e: "Os direitos são exclusivos de determinadas classes sociais."
                    },
                    correta: "b",
                    explicacao: "Arendt mostra que os direitos não são naturais: são conquistas históricas. O 'direito a ter direitos' significa que antes de tudo, é necessário ter o direito de participar da comunidade política onde os direitos existem."
                },
                {
                    enunciado: "As políticas públicas redistributivas se caracterizam por:",
                    alternativas: {
                        a: "Beneficiar apenas os mais ricos da sociedade.",
                        b: "Transferir recursos dos mais ricos para os mais pobres, reduzindo desigualdades.",
                        c: "Criar regras que regulam comportamentos individuais.",
                        d: "Criar novas instituições e órgãos públicos.",
                        e: "Beneficiar grupos específicos sem qualquer critério de renda."
                    },
                    correta: "b",
                    explicacao: "Políticas redistributivas transferem recursos dos mais ricos para os mais pobres, reduzindo desigualdades. Exemplos: impostos progressivos, programas de transferência de renda, cotas sociais em universidades."
                },
                {
                    enunciado: "O papel dos movimentos sociais na democracia contemporânea é:",
                    alternativas: {
                        a: "Destruir as instituições democráticas e instalar uma ditadura.",
                        b: "Ampliar direitos, dar voz a grupos excluídos, pressionar o Estado por políticas públicas.",
                        c: "Representar apenas os interesses das elites econômicas.",
                        d: "Substituir completamente os partidos políticos nas eleições.",
                        e: "Impedir qualquer forma de participação popular nas decisões."
                    },
                    correta: "b",
                    explicacao: "Movimentos sociais são fundamentais na democracia: ampliam direitos, dão voz a grupos excluídos, pressionam o Estado por políticas públicas, fiscalizam o poder. São parte essencial da democracia participativa."
                },
                {
                    enunciado: "As políticas públicas regulatórias têm como função:",
                    alternativas: {
                        a: "Distribuir dinheiro diretamente para a população.",
                        b: "Estabelecer regras que regulam comportamentos e atividades na sociedade.",
                        c: "Transferir recursos dos mais ricos para os mais pobres.",
                        d: "Criar novos ministérios e secretarias de governo.",
                        e: "Beneficiar apenas empresas privadas."
                    },
                    correta: "b",
                    explicacao: "Políticas regulatórias estabelecem regras que regulam comportamentos e atividades: código de trânsito, leis ambientais, regulamentação de medicamentos, regras de funcionamento de empresas, etc."
                }
            ]
        },
        10: {
            titulo: "Modernidade Líquida",
            subtitulo: "Bauman, sociedade de consumo e relações descartáveis",
            imagem: "https://images.unsplash.com/photo-1579621970795-87facc9f9cb6?w=800",
            conteudo: `
                <h3>Zygmunt Bauman e a Modernidade Líquida</h3>
                <p><strong>Zygmunt Bauman</strong> (1925-2017) foi um sociólogo polonês que analisou as transformações da sociedade contemporânea. Ele cunhou o conceito de <strong>modernidade líquida</strong> para descrever a fragilidade dos laços sociais na atualidade.</p>

                <h3>Modernidade Sólida vs. Líquida</h3>
                <ul>
                    <li><strong>Sólida:</strong> Instituições duradouras, casamentos vitalícios, empregos fixos, identidades estáveis</li>
                    <li><strong>Líquida:</strong> Incerteza, flexibilidade, descarte, relações temporárias, identidades fluidas</li>
                </ul>

                <h3>Sociedade de Consumo</h3>
                <p>Na modernidade líquida, o indivíduo é definido principalmente pelo seu papel de <strong>consumidor</strong>. A identidade se constrói através do ato de comprar. A lógica do consumo é a lógica do descarte: tudo é substituível, nada é duradouro.</p>

                <div class="philosopher">
                    <strong>🛍️ Relações Descartáveis</strong>
                    Bauman argumenta que as relações humanas também se tornaram "descartáveis": amizades, amores, empregos são tratados como produtos de consumo, substituídos quando deixam de satisfazer. É a "vida para uso" em vez da "vida para sempre".
                </div>

                <h3>Obsolescência Programada</h3>
                <p>A lógica do consumo exige a <strong>obsolescência programada</strong>: produtos são feitos para durar pouco, gerando necessidade constante de comprar. Isso se estende às relações humanas: tudo é tratado como descartável.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> Bauman mostra que na modernidade líquida, os laços sociais se tornam frágeis, temporários e descartáveis. A identidade se constrói pelo consumo, gerando insatisfação permanente e relações superficiais.
                </div>
            `,
            bibliografia: [
                { titulo: "Zygmunt Bauman", link: "https://pt.wikipedia.org/wiki/Zygmunt_Bauman", descricao: "Wikipedia - Sociólogo da modernidade líquida" },
                { titulo: "Modernidade líquida", link: "https://pt.wikipedia.org/wiki/Modernidade_l%C3%ADquida", descricao: "Wikipedia - Conceito baumaniano" },
                { titulo: "Sociedade de consumo", link: "https://pt.wikipedia.org/wiki/Sociedade_de_consumo", descricao: "Wikipedia - Sociedade do consumo" },
                { titulo: "Obsolescência programada", link: "https://pt.wikipedia.org/wiki/Obsolesc%C3%AAncia_programada", descricao: "Wikipedia - Produtos feitos para durar pouco" }
            ],
            quiz: [
                {
                    enunciado: "A 'modernidade líquida', conceito de Zygmunt Bauman, se caracteriza por:",
                    alternativas: {
                        a: "Instituições duradouras, identidades estáveis e relações permanentes.",
                        b: "Incerteza, flexibilidade, fragilidade dos laços sociais, relações temporárias e identidades fluidas.",
                        c: "Ausência total de mudanças sociais e culturais.",
                        d: "Retorno às formas tradicionais de organização social.",
                        e: "Eliminação completa de qualquer forma de consumo."
                    },
                    correta: "b",
                    explicacao: "Bauman descreve a modernidade líquida como marcada pela incerteza, flexibilidade, fragilidade dos laços sociais, relações temporárias e identidades fluidas. Tudo é líquido, nada é sólido e duradouro."
                },
                {
                    enunciado: "Na modernidade líquida, a identidade do indivíduo se constrói principalmente através:",
                    alternativas: {
                        a: "Da religião e das tradições familiares.",
                        b: "Do consumo e da posse de bens materiais, que funcionam como marcadores identitários.",
                        c: "Da profissão exercida ao longo de toda a vida.",
                        d: "Da nacionalidade e do local de nascimento.",
                        e: "Da aparência física e da genética."
                    },
                    correta: "b",
                    explicacao: "Na modernidade líquida, o indivíduo é definido principalmente pelo seu papel de consumidor. A identidade se constrói através do ato de comprar, dos bens que se possui, das marcas que se consome."
                },
                {
                    enunciado: "A 'obsolescência programada' refere-se a:",
                    alternativas: {
                        a: "Produtos feitos para durar eternamente, sem necessidade de substituição.",
                        b: "Produtos feitos para durar pouco, gerando necessidade constante de comprar novos.",
                        c: "Produtos que melhoram com o tempo de uso.",
                        d: "Produtos fabricados apenas com materiais recicláveis.",
                        e: "Produtos que não podem ser comprados, apenas alugados."
                    },
                    correta: "b",
                    explicacao: "Obsolescência programada é a estratégia de fabricar produtos com vida útil limitada, gerando necessidade constante de comprar novos. Isso se estende às relações humanas: tudo é tratado como descartável."
                },
                {
                    enunciado: "Segundo Bauman, as relações humanas na modernidade líquida se tornaram:",
                    alternativas: {
                        a: "Mais duradouras e profundas que no passado.",
                        b: "Frágeis, temporárias e descartáveis, tratadas como produtos de consumo.",
                        c: "Completamente independentes do mercado e do consumo.",
                        d: "Baseadas exclusivamente em compromissos religiosos.",
                        e: "Reguladas por leis rígidas que impedem o divórcio."
                    },
                    correta: "b",
                    explicacao: "Bauman argumenta que as relações humanas se tornaram 'líquidas': frágeis, temporárias, descartáveis. Amizades, amores, empregos são tratados como produtos de consumo, substituídos quando deixam de satisfazer."
                },
                {
                    enunciado: "A principal diferença entre modernidade sólida e líquida está:",
                    alternativas: {
                        a: "No fato de que a sólida é boa; a líquida é ruim.",
                        b: "No fato de que na sólida as instituições eram duradouras e as identidades estáveis; na líquida, tudo é fluido, temporário e incerto.",
                        c: "No fato de que a sólida existiu apenas na Europa; a líquida existe apenas no Brasil.",
                        d: "No fato de que a sólida rejeitava a tecnologia; a líquida a aceita integralmente.",
                        e: "Não há diferença real entre os dois conceitos."
                    },
                    correta: "b",
                    explicacao: "Modernidade sólida: instituições duradouras (família, emprego, religião), identidades estáveis. Modernidade líquida: tudo é fluido, temporário, incerto. A passagem de uma para outra marca as transformações da contemporaneidade."
                }
            ]
        },
        11: {
            titulo: "Sociedade de Risco",
            subtitulo: "Ulrich Beck, riscos fabricados e desafios ambientais",
            imagem: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=800",
            conteudo: `
                <h3>Ulrich Beck e a Sociedade de Risco</h3>
                <p><strong>Ulrich Beck</strong> (1944-2015) foi um sociólogo alemão que analisou os riscos produzidos pela própria modernidade. Ele argumenta que a sociedade contemporânea é uma <strong>sociedade de risco</strong>, onde os perigos são "fabricados" pelas decisões humanas.</p>

                <h3>Riscos Naturais vs. Riscos Fabricados</h3>
                <ul>
                    <li><strong>Riscos naturais:</strong> Terremotos, vulcões, furacões (presentes em todas as sociedades)</li>
                    <li><strong>Riscos fabricados:</strong> Nucleares, químicos, climáticos, biotecnológicos (produzidos pela modernidade)</li>
                </ul>

                <h3>Características dos Riscos Modernos</h3>
                <p>Os riscos fabricados pela modernidade têm características específicas:</p>
                <ul>
                    <li><strong>Globais:</strong> Não respeitam fronteiras nacionais (mudanças climáticas afetam todos)</li>
                    <li><strong>Invisíveis:</strong> Muitos não são perceptíveis aos sentidos (radiação, poluentes químicos)</li>
                    <li><strong>Democráticos:</strong> Afetam a todos, independentemente de classe social (embora os pobres sofram mais)</li>
                    <li><strong>Futuros:</strong> Seus efeitos podem se manifestar décadas depois</li>
                </ul>

                <div class="philosopher">
                    <strong>⚠️ "A pobreza é hierárquica, a contaminação radioativa é democrática"</strong>
                    Beck mostra que, diferentemente da riqueza (que se distribui de forma desigual), os riscos modernos tendem a afetar a todos, embora os mais pobres sejam sempre os mais vulneráveis.
                </div>

                <h3>Reflexividade Moderna</h3>
                <p>A sociedade de risco exige <strong>reflexividade</strong>: a capacidade de questionar os próprios fundamentos da modernidade. Não basta produzir mais: é necessário refletir sobre os efeitos do que produzimos.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> Beck mostra que a modernidade produz riscos globais, invisíveis e democráticos (nucleares, climáticos, químicos). A sociedade de risco exige reflexividade: questionar os efeitos do progresso.
                </div>
            `,
            bibliografia: [
                { titulo: "Ulrich Beck", link: "https://pt.wikipedia.org/wiki/Ulrich_Beck", descricao: "Wikipedia - Sociólogo da sociedade de risco" },
                { titulo: "Sociedade de risco", link: "https://pt.wikipedia.org/wiki/Sociedade_de_risco", descricao: "Wikipedia - Conceito beckiano" },
                { titulo: "Mudanças climáticas", link: "https://pt.wikipedia.org/wiki/Mudan%C3%A7as_clim%C3%A1ticas", descricao: "Wikipedia - Risco global contemporâneo" },
                { titulo: "Risco ambiental", link: "https://pt.wikipedia.org/wiki/Risco_ambiental", descricao: "Wikipedia - Riscos produzidos pela modernidade" }
            ],
            quiz: [
                {
                    enunciado: "Para Ulrich Beck, a 'sociedade de risco' contemporânea se diferencia das sociedades anteriores porque:",
                    alternativas: {
                        a: "Os riscos são exclusivamente naturais, como terremotos e vulcões.",
                        b: "Os perigos são 'fabricados' pelas decisões humanas, tecnológicas e industriais, afetando a todos globalmente.",
                        c: "A ciência conseguiu eliminar totalmente a possibilidade de catástrofes.",
                        d: "Os riscos afetam apenas os países pobres, poupando as nações desenvolvidas.",
                        e: "Não há necessidade de regulação política sobre as inovações tecnológicas."
                    },
                    correta: "b",
                    explicacao: "Beck mostra que a modernidade produz 'riscos fabricados' (nucleares, químicos, climáticos, biotecnológicos) que não respeitam fronteiras de classe ou nação. A riqueza produz a sombra do risco."
                },
                {
                    enunciado: "Os riscos fabricados pela modernidade se caracterizam por serem:",
                    alternativas: {
                        a: "Locais, visíveis e hierárquicos (afetam apenas os pobres).",
                        b: "Globais, muitas vezes invisíveis e democráticos (afetam a todos, embora os pobres sofram mais).",
                        c: "Exclusivamente econômicos, sem impacto ambiental.",
                        d: "Fáceis de controlar pela ciência e pela tecnologia.",
                        e: "Restritos às fronteiras nacionais de cada país."
                    },
                    correta: "b",
                    explicacao: "Os riscos modernos são globais (não respeitam fronteiras), invisíveis (radiação, poluentes), democráticos (afetam a todos, embora os pobres sejam mais vulneráveis) e futuros (efeitos podem se manifestar décadas depois)."
                },
                {
                    enunciado: "A frase 'a pobreza é hierárquica, a contaminação radioativa é democrática' de Beck significa que:",
                    alternativas: {
                        a: "A pobreza afeta a todos igualmente; a radiação afeta apenas os ricos.",
                        b: "A pobreza se distribui de forma desigual (hierárquica); os riscos modernos como a radiação tendem a afetar a todos (democraticamente).",
                        c: "A pobreza e a radiação são a mesma coisa.",
                        d: "Apenas os ricos sofrem com a pobreza; apenas os pobres sofrem com a radiação.",
                        e: "A pobreza é um risco moderno; a radiação é um problema antigo."
                    },
                    correta: "b",
                    explicacao: "Beck mostra que a riqueza (e a pobreza) se distribui de forma desigual (hierárquica), mas os riscos modernos como a radiação nuclear tendem a afetar a todos (democraticamente), embora os mais pobres sejam sempre os mais vulneráveis."
                },
                {
                    enunciado: "A 'reflexividade moderna', proposta por Beck, exige:",
                    alternativas: {
                        a: "A aceitação passiva de qualquer inovação tecnológica.",
                        b: "A capacidade de questionar os próprios fundamentos da modernidade e refletir sobre os efeitos do progresso.",
                        c: "A rejeição completa de qualquer forma de tecnologia.",
                        d: "A volta às sociedades pré-modernas, sem ciência ou técnica.",
                        e: "A delegação de todas as decisões sobre tecnologia aos cientistas, sem participação social."
                    },
                    correta: "b",
                    explicacao: "A reflexividade moderna é a capacidade de questionar os próprios fundamentos da modernidade: não basta produzir mais, é necessário refletir sobre os efeitos do que produzimos. É uma modernidade que se volta sobre si mesma."
                },
                {
                    enunciado: "Exemplos de riscos fabricados pela modernidade incluem:",
                    alternativas: {
                        a: "Terremotos, vulcões e tsunamis.",
                        b: "Acidentes nucleares, mudanças climáticas, poluentes químicos persistentes e riscos biotecnológicos.",
                        c: "Fomes naturais e epidemias de doenças antigas.",
                        d: "Secas prolongadas e invernos rigorosos.",
                        e: "Ataques de animais selvagens e pragas naturais."
                    },
                    correta: "b",
                    explicacao: "Riscos fabricados pela modernidade: acidentes nucleares (Chernobyl, Fukushima), mudanças climáticas (aquecimento global), poluentes químicos persistentes (agrotóxicos, plásticos), riscos biotecnológicos (manipulação genética)."
                }
            ]
        },
        12: {
            titulo: "Mundo do Trabalho",
            subtitulo: "Precarização, uberização e transformações tecnológicas",
            imagem: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
            conteudo: `
                <h3>Transformações no Mundo do Trabalho</h3>
                <p>O mundo do trabalho passa por profundas transformações na contemporaneidade, impulsionadas pela tecnologia, globalização e mudanças nas relações de produção.</p>

                <h3>Precarização e Precariado</h3>
                <p><strong>Guy Standing</strong> cunhou o termo <strong>precariado</strong> para designar uma nova classe social: trabalhadores em situação de instabilidade, sem direitos trabalhistas garantidos, com renda flutuante. São os "trabalhadores precários" do século XXI.</p>

                <h3>Uberização do Trabalho</h3>
                <p>A <strong>uberização</strong> refere-se à transformação de trabalhadores em "empreendedores de si mesmos", sem vínculo empregatício, sem direitos trabalhistas, sem proteção social. O trabalhador assume todos os riscos do negócio.</p>

                <div class="philosopher">
                    <strong>📱 Aplicativos e Algoritmos</strong>
                    Na uberização, o algoritmo substitui o chefe: ele define preços, rotas, avaliações. O trabalhador tem "liberdade" formal, mas está submetido a um controle algorítmico rígido. É uma forma de exploração disfarçada de autonomia.
                </div>

                <h3>Desemprego Estrutural</h3>
                <p>O <strong>desemprego estrutural</strong> é causado por mudanças na estrutura econômica (tecnologia, globalização), não por crises cíclicas. Trabalhadores são substituídos por máquinas e não conseguem se recolocar no mercado.</p>

                <h3>Trabalho Remoto e Flexibilização</h3>
                <p>A tecnologia permite o trabalho remoto, mas também gera a <strong>flexibilização</strong>: horários estendidos, dificuldade de separar trabalho e vida pessoal, cobrança constante por produtividade.</p>

                <div class="highlight-box">
                    <strong>Para o ENEM:</strong> O mundo do trabalho contemporâneo é marcado pela precarização (precariado), uberização (trabalhadores como "empreendedores" sem direitos), desemprego estrutural (tecnologia substituindo humanos) e flexibilização (trabalho remoto sem limites).
                </div>
            `,
            bibliografia: [
                { titulo: "Mundo do trabalho", link: "https://pt.wikipedia.org/wiki/Mundo_do_trabalho", descricao: "Wikipedia - Transformações contemporâneas" },
                { titulo: "Precariado", link: "https://pt.wikipedia.org/wiki/Precariado", descricao: "Wikipedia - Nova classe social" },
                { titulo: "Uberização", link: "https://pt.wikipedia.org/wiki/Uberiza%C3%A7%C3%A3o", descricao: "Wikipedia - Precarização do trabalho" },
                { titulo: "Desemprego estrutural", link: "https://pt.wikipedia.org/wiki/Desemprego_estrutural", descricao: "Wikipedia - Desemprego por mudanças estruturais" }
            ],
            quiz: [
                {
                    enunciado: "O termo 'precariado', utilizado por sociólogos contemporâneos, refere-se a trabalhadores que:",
                    alternativas: {
                        a: "Possuem empregos estáveis, com altos salários e plena proteção previdenciária.",
                        b: "Vivem em situação de instabilidade laboral, sem direitos trabalhistas garantidos e com renda flutuante.",
                        c: "São donos dos meios de produção e não precisam vender sua força de trabalho.",
                        d: "Recusam-se a trabalhar por princípio, vivendo apenas de subsídios estatais.",
                        e: "Trabalham exclusivamente no setor público, com total segurança no emprego."
                    },
                    correta: "b",
                    explicacao: "O precariado (Guy Standing) é uma nova classe social marcada pela instabilidade: trabalhadores sem direitos trabalhistas garantidos, com renda flutuante, sem proteção social. É a face contemporânea da precarização do trabalho."
                },
                {
                    enunciado: "A 'uberização' do trabalho se caracteriza por:",
                    alternativas: {
                        a: "Pela ampliação dos direitos trabalhistas e da proteção social.",
                        b: "Pela transformação de trabalhadores em 'empreendedores de si mesmos', sem vínculo empregatício, sem direitos trabalhistas.",
                        c: "Pela garantia de emprego vitalício e estabilidade funcional.",
                        d: "Pela redução da jornada de trabalho e aumento dos salários.",
                        e: "Pela eliminação completa da tecnologia no ambiente de trabalho."
                    },
                    correta: "b",
                    explicacao: "Uberização é a transformação de trabalhadores em 'empreendedores de si mesmos', sem vínculo empregatício, sem direitos trabalhistas, sem proteção social. O trabalhador assume todos os riscos, disfarçados de 'autonomia'."
                },
                {
                    enunciado: "O desemprego estrutural se diferencia do desemprego cíclico porque:",
                    alternativas: {
                        a: "O estrutural é causado por crises econômicas temporárias; o cíclico é permanente.",
                        b: "O estrutural é causado por mudanças na estrutura econômica (tecnologia, globalização); o cíclico é causado por crises econômicas temporárias.",
                        c: "Ambos são a mesma coisa, sem diferença conceitual.",
                        d: "O estrutural afeta apenas trabalhadores qualificados; o cíclico afeta apenas os não qualificados.",
                        e: "O estrutural é exclusivo de países desenvolvidos; o cíclico de países subdesenvolvidos."
                    },
                    correta: "b",
                    explicacao: "Desemprego estrutural: causado por mudanças na estrutura econômica (tecnologia substituindo humanos, globalização). Desemprego cíclico: causado por crises econômicas temporárias. O estrutural é mais grave porque não se resolve com a retomada do crescimento."
                },
                {
                    enunciado: "Na uberização, o algoritmo funciona como:",
                    alternativas: {
                        a: "Um instrumento de liberdade total do trabalhador, sem qualquer controle.",
                        b: "Um substituto do chefe, definindo preços, rotas e avaliações, exercendo controle rígido sobre o trabalhador.",
                        c: "Um auxiliar que apenas ajuda o trabalhador a organizar seu tempo.",
                        d: "Uma ferramenta exclusiva para trabalhadores autônomos tradicionais.",
                        e: "Um sistema que garante todos os direitos trabalhistas ao trabalhador."
                    },
                    correta: "b",
                    explicacao: "Na uberização, o algoritmo substitui o chefe: define preços, rotas, avaliações. O trabalhador tem 'liberdade' formal, mas está submetido a um controle algorítmico rígido. É uma forma de exploração disfarçada de autonomia."
                },
                {
                    enunciado: "A flexibilização do trabalho contemporâneo traz como consequência:",
                    alternativas: {
                        a: "A separação clara entre tempo de trabalho e tempo de vida pessoal.",
                        b: "A dificuldade de separar trabalho e vida pessoal, com horários estendidos e cobrança constante.",
                        c: "A redução drástica da jornada de trabalho e aumento do lazer.",
                        d: "A garantia de que todos os trabalhadores terão os mesmos direitos.",
                        e: "A eliminação completa do trabalho remoto."
                    },
                    correta: "b",
                    explicacao: "A flexibilização (trabalho remoto, horários flexíveis) traz como consequência a dificuldade de separar trabalho e vida pessoal: horários estendidos, cobrança constante por produtividade, dificuldade de 'desligar'. É a 'vida líquida' aplicada ao trabalho."
                }
            ]
        }
    }
};
