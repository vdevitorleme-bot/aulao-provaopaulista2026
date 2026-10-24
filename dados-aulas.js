// BANCO DE DADOS COMPLETO - PROVÃO PAULISTA 2026
const dadosAulas = {
    filosofia: {
        1: {
            titulo: "Mito e Filosofia",
            subtitulo: "As origens do pensamento filosófico na Grécia Antiga",
            imagem: "https://image.qwenlm.ai/public_source/7ecdf6d2-95b9-4c81-a65a-9658bbbc9782/04d2c7470-4129-4f0a-8155-3c2c3cf06da18430.png",
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
        enunciado: "Em uma aula de Filosofia, o professor apresenta dois textos sobre a origem do mundo: o primeiro é um trecho da Teogonia de Hesíodo, que narra como Gaia (Terra) surgiu do Caos e gerou Urano (Céu); o segundo é um fragmento de Tales de Mileto, que afirma ser a água o princípio de todas as coisas. Um aluno pergunta: 'Mas professor, os dois não estão tentando explicar a mesma coisa?' Considerando a diferença entre narrativa mitológica e discurso filosófico, a resposta mais adequada seria:",
        alternativas: {
            a: "Sim, são idênticos, pois ambos buscam explicar a origem do universo, sendo apenas estilos literários diferentes.",
            b: "Embora ambos abordem a origem do cosmos, Hesíodo recorre a genealogias divinas e narrativas fantásticas, enquanto Tales busca um princípio natural (arché) explicável pela razão, sem apelar para a intervenção dos deuses.",
            c: "Hesíodo é mais científico que Tales, pois a Teogonia apresenta uma explicação mais detalhada e completa sobre a formação do universo.",
            d: "Tales apenas substituiu um mito por outro, pois dizer que tudo vem da água é tão fantástico quanto dizer que tudo vem de Gaia.",
            e: "A diferença é apenas cronológica: Hesíodo escreveu antes de Tales, mas o conteúdo explicativo é essencialmente o mesmo."
        },
        correta: "b",
        explicacao: "A passagem do mythos ao logos representa uma mudança qualitativa, não apenas de tema. Hesíodo explica o mundo por narrativas de deuses e forças sobrenaturais (mythos); Tales busca um princípio natural e racional (logos) — a água como arché — sem recorrer a intervenções divinas. Ambos tratam da origem, mas o método e a natureza da explicação são radicalmente diferentes."
    },
    {
        enunciado: "Uma jovem, ao observar uma tempestade, comenta: 'Os raios são a fúria de Zeus castigando os mortais.' Seu colega, estudante de Filosofia, responde: 'Na verdade, os raios são descargas elétricas atmosféricas causadas pela diferença de potencial entre nuvens.' Do ponto de vista da história do pensamento, a fala do colega representa:",
        alternativas: {
            a: "Uma atitude religiosa, pois busca a causa dos fenômenos na vontade divina.",
            b: "Uma atitude mítica, pois explica o fenômeno por meio de narrativas tradicionais.",
            c: "A atitude filosófica e científica, que busca explicações racionais, naturais e verificáveis para os fenômenos, substituindo a narrativa sobrenatural pela investigação das causas.",
            d: "Uma atitude de senso comum, pois qualquer pessoa sabe que raios são descargas elétricas.",
            e: "Uma atitude autoritária, pois impõe uma verdade sem permitir o diálogo."
        },
        correta: "c",
        explicacao: "A atitude filosófica (e posteriormente científica) se caracteriza pela busca de explicações racionais, naturais e fundamentadas na argumentação. Ao explicar o raio como descarga elétrica, o colega substitui a narrativa sobrenatural (mythos) por uma explicação racional e natural (logos), que é a essência da passagem do mito à filosofia."
    },
    {
        enunciado: "Platão e Aristóteles afirmavam que a filosofia nasce da admiração (thaumazein). Imagine a seguinte situação: uma criança pergunta pela primeira vez 'por que o céu é azul?' e não se satisfaz com a resposta 'porque é assim mesmo', insistindo em buscar uma explicação. Segundo a concepção grega, essa atitude da criança:",
        alternativas: {
            a: "É irrelevante para a filosofia, pois apenas filósofos profissionais podem filosofar.",
            b: "Representa o thaumazein: o espanto diante do mundo que impulsiona o ser humano a questionar, buscar causas e não se contentar com explicações simplistas ou tradicionais.",
            c: "É apenas curiosidade infantil sem valor filosófico, pois a filosofia exige conhecimento prévio de lógica formal.",
            d: "Demonstra desrespeito às tradições, pois questionar o que 'sempre foi assim' é contrário ao espírito filosófico.",
            e: "É idêntica à atitude religiosa, pois ambas buscam respostas absolutas e inquestionáveis."
        },
        correta: "b",
        explicacao: "Para os gregos, a filosofia nasce do espanto (thaumazein) diante do mundo — a recusa em aceitar passivamente o que parece óbvio. A criança que insiste em perguntar 'por quê?' está exercendo exatamente essa atitude filosófica fundamental: não se contentar com o dado, buscar explicações, questionar o que parece natural."
    },
    {
        enunciado: "Em um debate escolar, um aluno afirma: 'A filosofia não serve para nada, pois não produz resultados práticos como a ciência e a tecnologia.' Considerando as características do pensamento filosófico estudadas na aula, qual seria a resposta mais adequada?",
        alternativas: {
            a: "O aluno está correto: a filosofia é inútil, pois não produz conhecimento verificável nem tecnologias.",
            b: "A filosofia tem a mesma função da ciência experimental: produzir tecnologias e resultados mensuráveis em laboratório.",
            c: "A filosofia exerce uma função crítica e reflexiva fundamental: questiona pressupostos, analisa argumentos, examina valores e conceitos (justiça, liberdade, verdade) que a ciência e a tecnologia não podem fundamentar por si mesmas. Sua utilidade não é técnica, mas formativa para a cidadania e o pensamento autônomo.",
            d: "A filosofia serve apenas para preservar tradições religiosas e culturais.",
            e: "A filosofia é uma forma de entretenimento intelectual sem qualquer aplicação prática ou teórica."
        },
        correta: "c",
        explicacao: "A filosofia não compete com a ciência em produzir tecnologias, mas exerce uma função insubstituível: o exame crítico dos fundamentos. Questões como 'O que é justo?', 'Quais os limites éticos da tecnologia?', 'O que é verdade?' não podem ser respondidas apenas empiricamente. A filosofia forma o pensamento autônomo e a cidadania crítica."
    },
    {
        enunciado: "Heráclito afirmava que 'tudo flui' (panta rhei) e que não podemos entrar duas vezes no mesmo rio. Parmênides, por outro lado, defendia que o Ser é uno, imutável e eterno. Um estudante lê esses dois filósofos pré-socráticos e conclui que eles estão falando sobre assuntos completamente diferentes. Essa conclusão está:",
        alternativas: {
            a: "Correta, pois Heráclito fala sobre rios e Parmênides fala sobre seres vivos.",
            b: "Incorreta: ambos investigam o mesmo problema fundamental da filosofia nascente — a natureza (physis) e o princípio (arché) de todas as coisas — mas chegam a respostas opostas: Heráclito defende a mudança constante; Parmênides defende a permanência do Ser.",
            c: "Correta, pois Heráclito era poeta e Parmênides era matemático, então não tinham interesses em comum.",
            d: "Incorreta, pois ambos concordavam que a água era o princípio de tudo.",
            e: "Correta, pois apenas Tales de Mileto se ocupava do problema da physis."
        },
        correta: "b",
        explicacao: "Heráclito e Parmênides debatem o mesmo problema central dos pré-socráticos: a natureza última da realidade (physis). Heráclito responde que tudo é mudança e devir (fogo, fluxo); Parmênides responde que o verdadeiro Ser é imutável e que a mudança é ilusão. A oposição entre eles é uma das mais fundamentais da história da filosofia."
    }
]
        },
        2: {
            titulo: "Platão e Aristóteles",
            subtitulo: "A filosofia de Platão e Aristóteles na obra 'Escola de Atenas'",
            imagem: "https://image.qwenlm.ai/public_source/7ecdf6d2-95b9-4c81-a65a-9658bbbc9782/14d2c7470-4129-4f0a-8155-3c2c3cf06da12182.png",
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
        enunciado: "Na pintura 'A Escola de Atenas', de Rafael, Platão aparece apontando para o alto, enquanto Aristóteles estende a mão para frente, em direção ao chão. Um estudante de arte pergunta ao professor: 'Por que Rafael pintou os dois filósofos com gestos tão diferentes?' A resposta que melhor reflete a diferença filosófica entre os dois pensadores é:",
        alternativas: {
            a: "Rafael pintou Platão apontando para cima porque ele gostava de astronomia, e Aristóteles apontando para frente porque gostava de geografia.",
            b: "Platão aponta para o alto porque sua filosofia busca a verdade no Mundo das Ideias (inteligível, transcendente); Aristóteles aponta para frente porque busca o conhecimento na experiência do mundo sensível, nas coisas concretas que nos cercam.",
            c: "Os gestos são apenas decorativos, sem qualquer significado filosófico.",
            d: "Platão aponta para o céu porque era religioso, e Aristóteles aponta para a terra porque era ateu.",
            e: "Rafael quis mostrar que Platão era mais alto que Aristóteles."
        },
        correta: "b",
        explicacao: "Os gestos na pintura simbolizam a diferença central: Platão (racionalista) acredita que a verdadeira realidade está no Mundo das Ideias, acessível apenas pela razão (por isso aponta para cima). Aristóteles (mais empirista) busca o conhecimento na observação do mundo sensível, nas formas presentes nas próprias coisas (por isso aponta para frente/para baixo)."
    },
    {
        enunciado: "Um aluno está estudando geometria e percebe que nenhum triângulo desenhado no papel é perfeitamente triangular — sempre há pequenas imperfeições. No entanto, ele compreende perfeitamente o conceito de 'triângulo perfeito' (três lados, três ângulos internos somando 180°). Segundo a Teoria das Ideias de Platão, essa situação ilustra:",
        alternativas: {
            a: "Que a geometria é uma ciência inútil, pois nenhum triângulo real existe.",
            b: "Que o triângulo perfeito existe apenas no Mundo Sensível, e os triângulos desenhados são cópias no Mundo das Ideias.",
            c: "A distinção platônica entre Mundo Sensível (os triângulos imperfeitos desenhados, percebidos pelos sentidos) e Mundo Inteligível (a Ideia perfeita de Triângulo, acessível apenas pela razão).",
            d: "Que a matemática é uma invenção recente sem relação com a filosofia grega.",
            e: "Que Platão considerava a geometria uma ciência inferior à poesia."
        },
        correta: "c",
        explicacao: "Para Platão, os objetos sensíveis (triângulos desenhados) são cópias imperfeitas das Ideias perfeitas (a Forma/Ideia de Triângulo) que existem no Mundo Inteligível. O triângulo perfeito só é acessível pela razão, não pelos sentidos. Isso ilustra a dualidade platônica entre Mundo Sensível (imperfeito, mutável) e Mundo Inteligível (perfeito, eterno)."
    },
    {
        enunciado: "No Mito da Caverna, Platão descreve prisioneiros acorrentados desde a infância, que só veem sombras projetadas na parede. Um deles se liberta, sai da caverna e contempla o Sol. Ao voltar para contar aos outros, é ridicularizado. Em uma discussão em sala, um aluno diz: 'Isso é só uma historinha antiga, não tem nada a ver com a gente hoje.' Qual situação contemporânea melhor ilustraria a alegoria da caverna?",
        alternativas: {
            a: "Uma pessoa que assiste apenas a um único canal de notícias, aceita tudo como verdade absoluta e ridiculariza quem apresenta informações diferentes ou questiona o que ela acredita.",
            b: "Um estudante que lê muitos livros de filosofia e debate com os colegas.",
            c: "Um cientista que publica artigos em revistas acadêmicas.",
            d: "Uma pessoa que pratica esportes ao ar livre todos os dias.",
            e: "Um artista que pinta quadros realistas."
        },
        correta: "a",
        explicacao: "O Mito da Caverna é uma alegoria sobre o conhecimento e a educação: os prisioneiros somos nós, presos às aparências e opiniões não questionadas (sombras). Libertar-se é exercer o pensamento crítico, buscar a verdade (o Sol/Bem). A pessoa presa a uma única fonte de informação sem questionamento ilustra perfeitamente o prisioneiro que confunde sombras com realidade."
    },
    {
        enunciado: "Aristóteles discordou de Platão ao afirmar que a forma (morphe) não existe separada das coisas, mas nelas mesmas. Para explicar isso, ele usa o exemplo de uma estátua: o bronze é a matéria (hyle) e o formato da estátua é a forma (morphe) — não existe 'forma de estátua' flutuando em outro mundo. Essa teoria é chamada de:",
        alternativas: {
            a: "Teoria das Ideias, pois defende que as formas existem em um mundo separado.",
            b: "Hilemorfismo: a composição indissociável de matéria (hyle) e forma (morphe) em cada ser concreto.",
            c: "Dualismo cartesiano, pois separa mente e corpo.",
            d: "Atomismo, pois reduz tudo a partículas indivisíveis.",
            e: "Idealismo absoluto, pois nega a existência da matéria."
        },
        correta: "b",
        explicacao: "O hilemorfismo aristotélico afirma que todo ser é composto de matéria (hyle - o potencial, o 'de quê' é feito) e forma (morphe - o que atualiza esse potencial, o 'quê' é). Diferente de Platão, Aristóteles não separa a forma em outro mundo: ela está na própria coisa. A estátua não existe sem o bronze, e o bronze sem forma não é estátua."
    },
    {
        enunciado: "Uma professora propõe o seguinte exercício: 'Observem esta folha de árvore. Platão diria que ela é uma cópia imperfeita da Ideia de Folha. Aristóteles diria que nela já estão unidas matéria e forma.' Com base nessa distinção, é correto afirmar que a principal divergência entre Platão e Aristóteles no campo do conhecimento é:",
        alternativas: {
            a: "Platão valoriza a observação empírica; Aristóteles valoriza apenas a razão pura.",
            b: "Platão é racionalista (o conhecimento verdadeiro vem da razão, do Mundo das Ideias); Aristóteles valoriza mais a experiência sensível e a observação como ponto de partida do conhecimento.",
            c: "Ambos concordam plenamente; a diferença é apenas de vocabulário.",
            d: "Platão nega a existência de qualquer conhecimento; Aristóteles afirma que tudo é conhecido pela fé.",
            e: "Platão e Aristóteles defendem que o conhecimento vem exclusivamente dos sentidos."
        },
        correta: "b",
        explicacao: "A divergência central é epistemológica: Platão (racionalista) acredita que o conhecimento verdadeiro vem da razão e contempla as Ideias eternas, sendo os sentidos enganosos. Aristóteles, embora não rejeite a razão, parte da experiência sensível e da observação dos seres concretos para chegar ao conhecimento. Essa oposição percorre toda a história da filosofia."
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
               { titulo: "Crítica do Julgamento (Kant)", link: "https://pt.wikipedia.org/wiki/Cr%C3%ADtica_do_Julgamento", descricao: "Wikipedia - a terceira crítica de Kant: o juízo de gosto, o belo e o sublime" },
                { titulo: "Catarse", link: "https://pt.wikipedia.org/wiki/Catarse", descricao: "Wikipedia - Conceito aristotélico de purificação" },
                { titulo: "Walter Benjamin", link: "https://pt.wikipedia.org/wiki/Walter_Benjamin", descricao: "Wikipedia - Filósofo que analisou a arte na era técnica" }
            ],
           quiz: [
    {
        enunciado: "Em um museu, um visitante observa um urinol de porcelana assinado por Marcel Duchamp (a obra 'A Fonte', 1917) e diz indignado: 'Isso não é arte! É um objeto de banheiro!' Outro visitante responde: 'É arte porque o artista o escolheu, o deslocou de contexto e provocou uma reflexão sobre o que consideramos arte.' Esse diálogo ilustra um debate central da Estética filosófica, que é:",
        alternativas: {
            a: "A questão de saber se a arte se define apenas pela beleza do objeto ou também pela produção de sentido, provocação e reflexão que ele gera.",
            b: "A questão de saber se museus devem cobrar ingresso.",
            c: "A questão de saber se objetos industriais são superiores aos artesanais.",
            d: "A questão de saber se a porcelana é um material adequado para banheiros.",
            e: "A questão de saber se Duchamp era um bom artesão."
        },
        correta: "a",
        explicacao: "O debate sobre 'A Fonte' de Duchamp é paradigmático na Estética: ele desloca um objeto comum para o contexto artístico, questionando os critérios tradicionais (beleza, técnica, originalidade). A Estética filosófica não se limita a classificar o 'bonito', mas investiga como a arte produz significados, provoca estranhamento e desafia convenções."
    },
    {
        enunciado: "Um estudante assiste a uma tragédia grega (como Édipo Rei de Sófocles) e, ao final, sente-se emocionalmente aliviado, como se tivesse 'descarregado' tensões. Ele comenta com o colega: 'É estranho, a peça é triste e angustiante, mas saí me sentindo mais leve.' Segundo Aristóteles, esse efeito da tragédia sobre o espectador é chamado de:",
        alternativas: {
            a: "Mimese, pois o espectador imita os personagens.",
            b: "Aura, pois a obra tem uma presença única.",
            c: "Catarse: a purificação ou purgação das emoções (piedade e terror) experimentadas pelo espectador através da experiência estética da tragédia.",
            d: "Sublime, pois a obra é grandiosa e terrível.",
            e: "Alienação, pois o espectador se desconecta da realidade."
        },
        correta: "c",
        explicacao: "Para Aristóteles (Poética), a tragédia provoca catarse: ao vivenciar piedade e terror de forma mediada pela arte, o espectador purifica (purge) essas emoções, saindo aliviado. A arte tem assim função terapêutica e cognitiva — não é apenas entretenimento, mas uma forma de elaborar emocionalmente a condição humana."
    },
    {
        enunciado: "Walter Benjamin argumentou que, na era da reprodutibilidade técnica (fotografia, cinema, impressão em massa), a obra de arte perde sua 'aura'. Um exemplo contemporâneo: a Mona Lisa original está no Louvre, atrás de vidro blindado, cercada de visitantes; mas sua imagem aparece em canecas, camisetas, memes e telas de celular. Segundo Benjamin, o que se perde quando a obra é reproduzida infinitamente?",
        alternativas: {
            a: "O valor financeiro da obra, que diminui com as cópias.",
            b: "A 'aura': a singularidade, autenticidade e presença única da obra original, seu 'aqui e agora' histórico que não pode ser reproduzido.",
            c: "A beleza da imagem, que fica borrada nas reproduções.",
            d: "O nome do artista, que é esquecido.",
            e: "A capacidade de pintar, que se torna obsoleta."
        },
        correta: "b",
        explicacao: "Para Benjamin, a 'aura' é a existência única da obra: seu 'aqui e agora', sua autenticidade, sua presença histórica insubstituível. Quando a imagem é reproduzida em massa, perde-se essa singularidade. A Mona Lisa no Louvre tem uma presença que nenhuma reprodução digital pode capturar inteiramente."
    },
    {
        enunciado: "Uma aluna de Filosofia visita uma exposição de arte contemporânea onde uma instalação mostra sapatos usados de trabalhadores rurais. Ela inicialmente pensa: 'Isso é feio, não é arte.' Mas, ao ler a descrição e refletir sobre as histórias de trabalho e sofrimento que os sapatos evocam, muda de opinião e se emociona. Esse processo de mudança de percepção ilustra:",
        alternativas: {
            a: "Que a arte é sempre feia e desagradável.",
            b: "Que a experiência estética pode transformar nossa percepção: a arte produz significados, provoca estranhamento e nos convida a ver o mundo de novas perspectivas, indo além da mera classificação de 'bonito' ou 'feio'.",
            c: "Que a aluna não entende de arte e deveria ter mantido sua primeira opinião.",
            d: "Que sapatos são sempre objetos artísticos.",
            e: "Que a filosofia da arte é irrelevante para a apreciação estética."
        },
        correta: "b",
        explicacao: "A experiência estética não se reduz ao prazer visual imediato. A arte pode provocar estranhamento, ressignificar objetos, evocar memórias e emoções. O processo da aluna — de rejeição inicial à compreensão e emoção — mostra como a reflexão filosófica e a experiência estética se complementam na produção de significados."
    },
    {
        enunciado: "Platão criticava a arte como mimese (imitação) porque, segundo ele, o artista apenas copia o Mundo Sensível, que já é cópia do Mundo das Ideias — o artista estaria 'três graus afastado da verdade'. Aristóteles, porém, reabilitou a mimese. Para Aristóteles, a imitação artística:",
        alternativas: {
            a: "É inútil e deve ser banida da cidade, como defendia Platão.",
            b: "É uma forma de conhecimento: ao imitar ações humanas, a arte (especialmente a tragédia) permite compreender o universal, o possível e o necessário, não apenas o particular.",
            c: "É idêntica à ciência, pois ambas produzem leis universais da natureza.",
            d: "É inferior à cópia mecânica, pois o artista é menos preciso que a máquina.",
            e: "Deve imitar apenas a natureza, nunca as ações humanas."
        },
        correta: "b",
        explicacao: "Aristóteles reabilita a mimese: ao imitar ações humanas, a arte não é mera cópia, mas uma forma de conhecimento que revela o universal (o que pode acontecer, o que é verossímil e necessário). A tragédia, ao imitar ações elevadas, nos faz compreender aspectos universais da condição humana — algo que a mera cópia não faria."
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
        enunciado: "Em uma empresa, um funcionário é humilhado publicamente pelo chefe, que o chama de 'inútil' e o obriga a fazer tarefas degradantes como punição. Um colega intervém dizendo: 'Você não pode tratá-lo assim, ele é um ser humano e merece respeito independentemente de qualquer erro.' Do ponto de vista da ética kantiana, a fala do colega se fundamenta no princípio de que:",
        alternativas: {
            a: "O funcionário deve ser respeitado apenas se for produtivo para a empresa.",
            b: "Todo ser humano possui dignidade (valor absoluto e incondicional) e deve ser tratado sempre como fim em si mesmo, nunca apenas como meio ou instrumento.",
            c: "O respeito depende da hierarquia: o chefe merece mais respeito que o subordinado.",
            d: "A humilhação é aceitável se servir para motivar o funcionário a melhorar.",
            e: "O respeito é um sentimento subjetivo, sem qualquer fundamento racional."
        },
        correta: "b",
        explicacao: "Para Kant, todo ser racional possui dignidade — um valor absoluto que não pode ser substituído nem condicionado. O Imperativo Categórico exige tratar a humanidade sempre como fim, nunca apenas como meio. Humilhar alguém é tratá-lo como objeto/instrumento, violando sua dignidade intrínseca."
    },
    {
        enunciado: "Pico della Mirandola, no 'Discurso sobre a Dignidade do Homem' (1486), coloca na boca de Deus as seguintes palavras dirigidas a Adão: 'Não te dei um lugar determinado, nem um aspecto próprio, para que tu mesmo, conforme tua vontade, obtenhas e conserves o lugar e a forma que desejares.' Um estudante interpreta isso como uma defesa do determinismo biológico. Essa interpretação está:",
        alternativas: {
            a: "Correta, pois Pico defende que o ser humano é determinado pela natureza.",
            b: "Incorreta: Pico defende exatamente o oposto — o livre-arbítrio. O ser humano não tem natureza fixa; é 'artífice de si mesmo', podendo elevar-se ou degenerar por suas próprias escolhas.",
            c: "Correta, pois o texto fala de 'lugar determinado'.",
            d: "Incorreta, pois Pico defende que apenas os anjos têm liberdade.",
            e: "Correta, pois Adão representa a submissão total à vontade divina."
        },
        correta: "b",
        explicacao: "Pico della Mirandola é o pensador da liberdade humana por excelência no Renascimento. Ao dizer que Adão não tem lugar nem forma determinados, Pico afirma que o ser humano é o único ser sem essência fixa: ele se constrói por suas escolhas. Isso é o livre-arbítrio, não o determinismo."
    },
    {
        enunciado: "Kant formula o Imperativo Categórico de diversas maneiras. Uma delas é: 'Age apenas segundo uma máxima tal que possas ao mesmo tempo querer que ela se torne lei universal.' Um aluno aplica esse teste à seguinte situação: 'Posso mentir para me livrar de um compromisso desagradável?' Aplicando o Imperativo Categórico, a conclusão é:",
        alternativas: {
            a: "Sim, pode mentir, pois é uma mentira pequena e inofensiva.",
            b: "Não: se a mentira se tornasse lei universal (todos mentissem sempre), a própria possibilidade de comunicação e confiança se destruiria, tornando a mentira impossível. Logo, mentir não pode ser universalizado.",
            c: "Sim, desde que ninguém descubra.",
            d: "Não, mas apenas porque a religião proíbe a mentira.",
            e: "Sim, pois a verdade é relativa e depende do contexto."
        },
        correta: "b",
        explicacao: "O teste da universalização é o núcleo do Imperativo Categórico: uma ação é moralmente válida apenas se sua máxima puder ser universalizada sem contradição. Se todos mentissem, a confiança (condição da comunicação) se destruiria, tornando a própria mentira impossível. Logo, mentir falha no teste da universalização."
    },
    {
        enunciado: "A Declaração Universal dos Direitos Humanos (1948) afirma em seu artigo 1°: 'Todos os seres humanos nascem livres e iguais em dignidade e direitos.' Um filósofo pergunta: 'Qual é o fundamento filosófico dessa dignidade universal?' Considerando as contribuições de Kant e Pico della Mirandola estudadas na aula, a resposta mais adequada é:",
        alternativas: {
            a: "A dignidade se fundamenta na força física e na capacidade de sobrevivência.",
            b: "A dignidade se fundamenta na riqueza material: quem tem mais dinheiro tem mais dignidade.",
            c: "A dignidade se fundamenta na racionalidade e na autonomia (Kant) e no livre-arbítrio (Pico): todo ser humano, por ser capaz de razão, escolha moral e autodeterminação, possui valor absoluto e direitos inalienáveis.",
            d: "A dignidade é um conceito religioso, sem qualquer fundamento filosófico.",
            e: "A dignidade depende da nacionalidade: apenas cidadãos de países desenvolvidos possuem dignidade plena."
        },
        correta: "c",
        explicacao: "A dignidade humana, fundamento dos Direitos Humanos, tem base filosófica na racionalidade e autonomia (Kant: o ser humano como fim em si mesmo) e no livre-arbítrio (Pico: o ser humano como artífice de si mesmo). Esses fundamentos são universais e incondicionais, independentemente de qualquer condição particular."
    },
    {
        enunciado: "Uma fábrica utiliza trabalhadores em condições degradantes, com jornadas de 16 horas, sem pausas e sem equipamentos de segurança, para maximizar o lucro. O dono justifica: 'Eles aceitaram o emprego livremente.' Segundo a ética kantiana, essa justificativa é:",
        alternativas: {
            a: "Válida, pois se o trabalhador aceitou, não há violação de dignidade.",
            b: "Inválida: mesmo com 'consentimento', condições degradantes tratam o ser humano como mero instrumento (meio) para o lucro, violando sua dignidade como fim em si mesmo. A dignidade é incondicional e não pode ser renunciada.",
            c: "Válida, pois o mercado de trabalho é livre.",
            d: "Inválida apenas se o salário for baixo; se for alto, as condições não importam.",
            e: "Válida, pois o lucro é mais importante que a dignidade."
        },
        correta: "b",
        explicacao: "Para Kant, a dignidade é incondicional: não pode ser negociada, renunciada ou condicionada. Tratar alguém como mero instrumento (meio para lucro) — mesmo com 'consentimento' formal — viola o Imperativo Categórico. A dignidade não é um contrato; é um valor absoluto inerente a todo ser racional."
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
        enunciado: "Em 1961, Hannah Arendt acompanhou o julgamento de Adolf Eichmann, burocrata nazista responsável pela logística do transporte de milhões de judeus para campos de extermínio. Arendt esperava encontrar um monstro sádico, mas encontrou um homem medíocre, que repetia: 'Eu apenas cumpria ordens.' Arendt cunhou a expressão 'banalidade do mal' para descrever esse fenômeno. Isso significa que:",
        alternativas: {
            a: "O mal é banal porque não tem consequências graves.",
            b: "O mal radical pode ser cometido por pessoas comuns que renunciam ao pensamento crítico e à capacidade de julgamento moral, limitando-se a obedecer ordens burocraticamente.",
            c: "Apenas pessoas com transtornos psicológicos são capazes de cometer o mal.",
            d: "O mal é sempre praticado por líderes carismáticos e nunca por subordinados.",
            e: "Eichmann era inocente, pois apenas cumpria ordens."
        },
        correta: "b",
        explicacao: "A 'banalidade do mal' não significa que o mal é trivial ou sem consequências, mas que ele pode ser perpetrado por pessoas comuns que param de pensar, de julgar e de se responsabilizar moralmente, reduzindo-se a engrenagens burocráticas. O perigo está na ausência de pensamento crítico, não na monstruosidade."
    },
    {
        enunciado: "Em uma reunião de condomínio, os moradores discutem a instalação de câmeras de segurança. Um morador propõe: 'Devemos instalar câmeras em todos os corredores e contratar um vigia armado para controlar quem entra e sai.' Outro morador, inspirado em Arendt, responde: 'O verdadeiro poder desta comunidade não está na vigilância ou na força, mas na nossa capacidade de agir em conjunto e deliberar.' Segundo Arendt, a diferença entre poder e violência é:",
        alternativas: {
            a: "Poder e violência são sinônimos.",
            b: "Poder surge da ação conjunta e do consenso entre cidadãos; violência é instrumental (uso de meios para dominar) e destrói o espaço político do diálogo.",
            c: "Poder é sempre ilegítimo; violência é sempre legítima.",
            d: "Poder pertence apenas ao Estado; violência pertence apenas aos cidadãos.",
            e: "Poder é físico; violência é psicológica."
        },
        correta: "b",
        explicacao: "Para Arendt, poder é a capacidade humana de agir em concerto (em conjunto), de deliberar e construir consenso. Violência é instrumental: usa meios (armas, força) para dominar. Quando um governo ou grupo recorre à violência, está admitindo que perdeu o poder verdadeiro (a capacidade de convencer e agir em conjunto)."
    },
    {
        enunciado: "Um estudante lê sobre o totalitarismo nazista e pergunta: 'Como foi possível que um povo inteiro aceitasse o extermínio de milhões de pessoas?' Considerando a análise de Arendt sobre o totalitarismo, a resposta mais adequada seria:",
        alternativas: {
            a: "O povo alemão era naturalmente cruel e violento.",
            b: "O totalitarismo destrói a esfera pública, isola os indivíduos, elimina o pensamento crítico e substitui a realidade por uma ideologia totalizante, tornando as pessoas incapazes de julgar moralmente.",
            c: "Apenas Hitler era responsável; o povo não teve qualquer papel.",
            d: "O totalitarismo é um fenômeno exclusivo do século XX e não pode se repetir.",
            e: "O extermínio foi aceito porque a economia alemã estava em crise."
        },
        correta: "b",
        explicacao: "Arendt analisa como o totalitarismo funciona: destrói o espaço público de debate, isola os indivíduos (atomização), substitui o pensamento crítico pela ideologia e usa o terror para eliminar a capacidade de julgamento. Não é uma questão de 'natureza cruel', mas de condições políticas que anulam a capacidade de pensar e julgar."
    },
    {
        enunciado: "Em uma escola, um grupo de alunos organiza uma assembleia para discutir as regras do recreio. A diretora, irritada, cancela a assembleia e impõe novas regras por decreto, ameaçando punir quem discordar. Segundo a perspectiva arendtiana, a atitude da diretora:",
        alternativas: {
            a: "É um exercício legítimo de poder, pois ela é a autoridade máxima.",
            b: "É um ato de violência política: ao suprimir o espaço de diálogo e ação conjunta (a assembleia) e recorrer à imposição e ameaça, a diretora destrói o poder verdadeiro (a capacidade de agir em conjunto) e substitui a política pela dominação.",
            c: "É indiferente, pois assembleias escolares não têm valor.",
            d: "É um exemplo de democracia participativa.",
            e: "É um exercício de poder no sentido arendtiano, pois a diretora age em conjunto com os professores."
        },
        correta: "b",
        explicacao: "Para Arendt, a política autêntica é o espaço de deliberação e ação conjunta. Ao cancelar a assembleia (espaço de diálogo) e impor regras por ameaça, a diretora recorre à violência (instrumental, coercitiva) e destrói o poder verdadeiro (a capacidade de agir em concerto). A violência é sinal de impotência política."
    },
    {
        enunciado: "Arendt afirma que 'a manifestação da violência é sinal de impotência'. Um governo, enfrentando protestos populares massivos, responde com repressão policial brutal em vez de negociar. Segundo Arendt, essa reação indica que:",
        alternativas: {
            a: "O governo está forte e no controle da situação.",
            b: "O governo perdeu o poder (a capacidade de convencer e agir em conjunto com os cidadãos) e recorre à violência como último recurso, o que é sinal de sua impotência política.",
            c: "A violência é a forma mais eficaz de governar.",
            d: "Os protestos são ilegítimos por definição.",
            e: "A repressão é um exercício legítimo de poder no sentido arendtiano."
        },
        correta: "b",
        explicacao: "Para Arendt, poder é a capacidade de agir em conjunto e obter consenso. Quando um governo recorre à violência, está admitindo que perdeu essa capacidade — não consegue mais convencer, deliberar ou agir em concerto. A violência substitui o poder perdido, mas é sinal de fraqueza política, não de força."
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
        enunciado: "Imagine uma ilha deserta onde dez náufragos chegam após um naufrágio. Não há leis, polícia nem governo. Após alguns dias, surgem conflitos pela comida e pelo abrigo. Um deles propõe: 'Vamos criar regras comuns e eleger um líder para garantir a ordem.' Segundo a teoria de Hobbes, essa situação ilustra:",
        alternativas: {
            a: "O estado de felicidade natural, onde os homens vivem em harmonia.",
            b: "O estado de natureza hobbesiano: sem um poder comum que os mantenha em respeito, os indivíduos vivem em conflito ('guerra de todos contra todos'), e o contrato social surge para garantir segurança e ordem.",
            c: "A democracia ateniense em sua forma pura.",
            d: "O estado de natureza rousseauniano, onde o homem é naturalmente bom.",
            e: "Uma situação irrelevante para a filosofia política."
        },
        correta: "b",
        explicacao: "Hobbes descreve o estado de natureza como uma situação de conflito permanente ('o homem é o lobo do homem') onde a vida é 'solitária, pobre, sórdida, brutal e curta'. Para escapar desse caos, os indivíduos celebram um contrato: cedem parte de sua liberdade a um soberano (Leviatã) em troca de segurança e ordem."
    },
    {
        enunciado: "John Locke imagina o estado de natureza de forma diferente de Hobbes: os indivíduos já possuem direitos naturais (vida, liberdade, propriedade) e vivem relativamente em paz, mas sem um juiz imparcial para resolver disputas. O contrato social lockiano, portanto, cria o Estado com a função de:",
        alternativas: {
            a: "Suprimir todos os direitos individuais em favor do soberano absoluto.",
            b: "Proteger os direitos naturais já existentes (vida, liberdade, propriedade) e resolver disputas de forma imparcial; o Estado é limitado e, se violar esses direitos, o povo tem direito de resistência.",
            c: "Eliminar a propriedade privada e instaurar a igualdade absoluta.",
            d: "Garantir a supremacia da Igreja sobre o Estado.",
            e: "Substituir a lei natural pela lei divina."
        },
        correta: "b",
        explicacao: "Para Locke, o Estado não cria os direitos naturais — eles já existem no estado de natureza. O contrato social cria o Estado como protetor desses direitos. Se o governo os viola, perde a legitimidade e o povo tem direito de resistência. Isso fundamenta o liberalismo político e a limitação do poder estatal."
    },
    {
        enunciado: "Rousseau abre 'O Contrato Social' com a frase célebre: 'O homem nasce livre, e por toda a parte encontra-se a ferros.' Para Rousseau, o problema da sociedade não é a maldade natural do homem (como em Hobbes), mas a corrupção social. O contrato social rousseauniano propõe:",
        alternativas: {
            a: "A submissão total a um monarca absoluto que garanta a ordem.",
            b: "A criação de uma comunidade política onde a soberania pertence ao povo e as leis expressam a vontade geral (o bem comum), não a soma dos interesses particulares.",
            c: "A eliminação de qualquer forma de governo, instaurando a anarquia.",
            d: "A divisão da sociedade em classes fixas e imutáveis.",
            e: "A transferência de todos os direitos individuais para a Igreja."
        },
        correta: "b",
        explicacao: "Rousseau critica a sociedade que corrompe o homem naturalmente bom. Seu contrato social propõe uma comunidade onde a soberania é popular e as leis expressam a vontade geral (o bem comum), não a 'vontade de todos' (soma de interesses particulares). A liberdade é recuperada pela participação coletiva na vida política."
    },
    {
        enunciado: "Um debate em sala de aula apresenta a seguinte questão: 'Hobbes, Locke e Rousseau usam o mesmo conceito (contrato social) mas chegam a conclusões políticas diferentes.' Qual alternativa resume corretamente essas diferenças?",
        alternativas: {
            a: "Hobbes defende a democracia; Locke defende o absolutismo; Rousseau defende a anarquia.",
            b: "Hobbes justifica o absolutismo (soberano total para garantir a ordem); Locke justifica o liberalismo (Estado limitado que protege direitos naturais); Rousseau justifica a democracia popular (soberania do povo e vontade geral).",
            c: "Todos os três defendem o absolutismo monárquico.",
            d: "Todos os três defendem a eliminação do Estado.",
            e: "Hobbes e Rousseau concordam plenamente; Locke discorda de ambos."
        },
        correta: "b",
        explicacao: "Os três contratualistas partem do mesmo recurso teórico (o contrato social), mas divergem nas conclusões: Hobbes → absolutismo (medo exige soberano total); Locke → liberalismo (direitos naturais exigem Estado limitado); Rousseau → democracia (vontade geral exige soberania popular). A diferença está na concepção de estado de natureza e nos objetivos do contrato."
    },
    {
        enunciado: "Em um país fictício, o governo começa a confiscar propriedades sem justificativa legal e a prender opositores sem julgamento. Os cidadãos, inspirados em Locke, organizam protestos e exigem a renúncia do governante. Segundo a teoria lockiana, essa reação é:",
        alternativas: {
            a: "Ilegítima, pois o soberano é absoluto e não pode ser questionado.",
            b: "Legítima: quando o governo viola os direitos naturais (vida, liberdade, propriedade) para os quais foi criado, perde a legitimidade e o povo tem o direito (e até o dever) de resistir e substituí-lo.",
            c: "Ilegítima, pois a propriedade privada não é um direito natural.",
            d: "Legítima apenas se aprovada pela Igreja.",
            e: "Ilegítima, pois protestos são sempre atos de violência."
        },
        correta: "b",
        explicacao: "Locke fundamenta o direito de resistência: o Estado existe para proteger direitos naturais preexistentes. Se os viola, rompe o contrato e perde legitimidade. O povo, então, tem o direito de depor o governo e criar um novo. Essa ideia influenciou diretamente as revoluções liberais (Inglesa, Americana, Francesa)."
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
        enunciado: "Hume observa que, ao ver uma bola de bilhar bater em outra e a segunda se mover, nós vemos apenas dois eventos em sequência (a primeira bola se move, depois a segunda se move). Nunca 'vemos' a conexão necessária entre eles. Hume conclui que a ideia de 'causa e efeito' vem:",
        alternativas: {
            a: "Da razão pura, que deduz as leis necessárias da natureza.",
            b: "Do hábito: a repetição constante de eventos associados (fogo queima, sol aquece) cria em nós a expectativa psicológica de que sempre será assim, mas não há conhecimento racional de uma conexão necessária.",
            c: "Da revelação divina, que nos mostra as causas ocultas.",
            d: "Da observação direta da conexão causal nos objetos.",
            e: "Da tradição filosófica, que nos ensina a causalidade."
        },
        correta: "b",
        explicacao: "Hume argumenta que nunca percebemos a 'conexão necessária' entre causa e efeito — apenas a sucessão constante de eventos. A ideia de causalidade é um hábito psicológico (costume), não um conhecimento racional. Isso é o ceticismo humeano: não podemos ter certeza de que o futuro repetirá o passado."
    },
    {
        enunciado: "Um aluno pergunta: 'Se Hume está certo e a causalidade é apenas hábito, então a ciência é impossível?' Kant, que foi 'despertado do sono dogmático' por Hume, responde com sua 'Revolução Copernicana'. Para Kant, a solução é:",
        alternativas: {
            a: "Concordar plenamente com Hume: a ciência é impossível e devemos aceitar o ceticismo.",
            b: "A causalidade não está nos objetos, mas é uma categoria a priori do entendimento humano: uma estrutura da mente que organiza a experiência. Assim, a ciência é possível, mas limitada ao mundo dos fenômenos (aparências), não das coisas em si.",
            c: "Negar a experiência sensível e afirmar que só a fé fornece conhecimento.",
            d: "Voltar à filosofia medieval e aceitar a autoridade da Igreja.",
            e: "Afirmar que a ciência é infalível e que Hume estava completamente errado."
        },
        correta: "b",
        explicacao: "Kant concorda com Hume que o conhecimento começa com a experiência, mas argumenta que a mente não é passiva: ela possui estruturas a priori (espaço, tempo, categorias como causalidade) que organizam a experiência. A causalidade é uma dessas categorias. Assim, a ciência é possível, mas conhecemos apenas os fenômenos (como as coisas aparecem para nós), não as coisas em si."
    },
    {
        enunciado: "O empirismo de Hume afirma que todo conhecimento vem da experiência sensível. O racionalismo de Descartes afirma que a razão é a fonte do conhecimento verdadeiro. Kant, com sua filosofia crítica, propõe uma síntese. Qual alternativa melhor resume essa síntese kantiana?",
        alternativas: {
            a: "Kant é puramente empirista: todo conhecimento vem dos sentidos.",
            b: "Kant é puramente racionalista: todo conhecimento vem da razão, independente da experiência.",
            c: "Kant sintetiza: o conhecimento começa com a experiência (sensibilidade), mas é organizado pelas estruturas a priori da mente (entendimento). Sem sensibilidade, nenhum objeto nos seria dado; sem entendimento, nenhum objeto seria pensado.",
            d: "Kant rejeita tanto o empirismo quanto o racionalismo e propõe o misticismo.",
            e: "Kant defende que o conhecimento é impossível."
        },
        correta: "c",
        explicacao: "A famosa síntese kantiana: 'Pensamentos sem conteúdo são vazios; intuições sem conceitos são cegas.' O conhecimento exige tanto a experiência sensível (que fornece o conteúdo) quanto as estruturas a priori do entendimento (que organizam esse conteúdo). É a superação do empirismo e do racionalismo puros."
    },
    {
        enunciado: "Kant afirma que conhecemos apenas os fenômenos (como as coisas aparecem para nós, organizadas pelas estruturas da mente), não os númenos (as coisas em si mesmas). Um aluno pergunta: 'Então nunca saberemos como as coisas realmente são?' Segundo Kant, a resposta é:",
        alternativas: {
            a: "Sim, conhecemos as coisas em si perfeitamente.",
            b: "Correto: nosso conhecimento se limita aos fenômenos (a realidade como aparece para nós, estruturada por espaço, tempo e categorias). As coisas em si (númenos) são inacessíveis ao conhecimento teórico, embora possamos pensá-las.",
            c: "Não, pois a ciência pode acessar as coisas em si através de instrumentos.",
            d: "Sim, mas apenas os filósofos podem conhecer os númenos.",
            e: "Não, pois os númenos não existem."
        },
        correta: "b",
        explicacao: "Para Kant, o conhecimento humano é limitado ao mundo fenomênico: conhecemos as coisas como aparecem para nós, estruturadas pelas formas a priori da sensibilidade (espaço e tempo) e pelas categorias do entendimento. As coisas em si (númenos) são pensáveis mas não cognoscíveis. Isso é o 'idealismo transcendental' kantiano."
    },
    {
        enunciado: "As consequências ético-políticas do ceticismo de Hume preocuparam Kant. Se não podemos ter certeza de verdades universais, como fundamentar a moral e a política? Kant responde que a moral não depende da experiência, mas:",
        alternativas: {
            a: "Dos costumes de cada sociedade, que variam conforme a cultura.",
            b: "Da razão prática: o Imperativo Categórico é um princípio a priori da razão que prescreve ações universalmente válidas, independentemente das consequências ou das inclinações sensíveis.",
            c: "Da vontade de Deus, revelada nas escrituras.",
            d: "Do prazer e da dor, como defendem os utilitaristas.",
            e: "Da tradição e dos costumes ancestrais."
        },
        correta: "b",
        explicacao: "Kant responde ao ceticismo de Hume também no campo prático: a moral não vem da experiência (que é contingente), mas da razão prática. O Imperativo Categórico ('Age de modo que tua máxima possa ser lei universal') é um princípio a priori da razão, válido universalmente, independentemente das consequências ou inclinações."
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
        enunciado: "Em uma comunidade rural brasileira, os moradores se reúnem para construir uma casa para uma família que perdeu tudo em uma enchente. Ninguém é pago; todos contribuem com trabalho, materiais ou comida. Um visitante urbano comenta: 'Mas por que vocês fazem isso? Cada um deveria cuidar de si.' Um morador responde: 'Porque eu sou porque nós somos.' Essa resposta expressa a filosofia africana chamada:",
        alternativas: {
            a: "Existencialismo, pois cada indivíduo é responsável por si mesmo.",
            b: "Ubuntu: a ideia de que a humanidade de cada pessoa se constrói na relação com os outros, que o indivíduo se realiza na comunidade e que a interdependência é constitutiva do ser humano.",
            c: "Utilitarismo, pois o objetivo é maximizar o prazer coletivo.",
            d: "Liberalismo, pois cada um busca seu interesse individual.",
            e: "Niilismo, pois nada tem valor intrínseco."
        },
        correta: "b",
        explicacao: "Ubuntu ('Eu sou porque nós somos') é uma filosofia africana que afirma a interdependência constitutiva dos seres humanos. Diferente do individualismo ocidental moderno, Ubuntu entende que a identidade, a dignidade e a humanidade de cada pessoa se constroem na relação com a comunidade."
    },
    {
        enunciado: "Descartes afirma 'Penso, logo existo' (Cogito, ergo sum), fundamentando o conhecimento e a existência no indivíduo racional isolado. A filosofia Ubuntu propõe 'Sou porque somos'. A principal diferença entre essas duas perspectivas é:",
        alternativas: {
            a: "Descartes valoriza o comunitarismo; Ubuntu valoriza o individualismo.",
            b: "Descartes fundamenta a existência no indivíduo racional autônomo (individualismo); Ubuntu fundamenta a existência na relação comunitária e na interdependência (comunitarismo).",
            c: "Ambas são idênticas, pois ambas afirmam a existência.",
            d: "Descartes é uma filosofia africana; Ubuntu é uma filosofia europeia.",
            e: "Descartes nega a existência humana; Ubuntu afirma a existência divina."
        },
        correta: "b",
        explicacao: "O Cogito cartesiano é o fundamento do individualismo moderno: a existência se ancora no sujeito racional isolado. Ubuntu inverte essa lógica: o ser humano só existe na relação com outros. Não sou um 'eu' antes de ser um 'nós'. São perspectivas ontológicas e éticas radicalmente diferentes."
    },
    {
        enunciado: "Lélia Gonzalez, intelectual negra brasileira, cunhou o conceito de 'racismo à brasileira' e analisou como raça e gênero se interseccionam na opressão das mulheres negras. Ela também destacou o papel das mulheres negras na preservação da cultura afro-brasileira. Sua contribuição é importante porque:",
        alternativas: {
            a: "Mostra que o racismo no Brasil não existe, pois somos uma democracia racial.",
            b: "Revela como o racismo brasileiro opera de forma específica (muitas vezes velada) e como as opressões de raça e gênero se articulam, tornando invisível a experiência das mulheres negras.",
            c: "Defende que apenas homens brancos podem produzir conhecimento filosófico.",
            d: "Afirma que a cultura afro-brasileira é inferior à cultura europeia.",
            e: "Nega a existência de qualquer forma de cultura negra no Brasil."
        },
        correta: "b",
        explicacao: "Lélia Gonzalez é pioneira na análise interseccional no Brasil: mostrou como o racismo 'à brasileira' opera de forma dissimulada (negando-se enquanto tal) e como as mulheres negras sofrem uma dupla opressão (raça + gênero). Seu trabalho é fundamental para descolonizar o pensamento e reconhecer o protagonismo intelectual negro."
    },
    {
        enunciado: "Ailton Krenak, pensador indígena brasileiro, em 'Ideias para adiar o fim do mundo', critica a separação ocidental entre natureza e cultura. Para Krenak, os povos indígenas:",
        alternativas: {
            a: "Devem abandonar suas tradições e se integrar à modernidade ocidental.",
            b: "Possuem saberes fundamentais que questionam a separação entre humanos e natureza, propondo uma relação de pertencimento e cuidado com o planeta, em contraste com a lógica exploratória do capitalismo.",
            c: "São responsáveis pela destruição ambiental.",
            d: "Não possuem qualquer forma de conhecimento ou filosofia.",
            e: "Devem ser estudados apenas como objetos de museu."
        },
        correta: "b",
        explicacao: "Krenak critica a visão ocidental que separa natureza e cultura, tratando a natureza como recurso a ser explorado. Os povos indígenas, em suas cosmologias, entendem os humanos como parte da natureza (não donos dela). Esse saber é crucial diante da crise ambiental e do esgotamento do modelo de desenvolvimento capitalista."
    },
    {
        enunciado: "O conceito de 'descolonização do pensamento' tem sido cada vez mais discutido na filosofia contemporânea. Um aluno pergunta: 'Isso significa que devemos rejeitar todo o conhecimento europeu?' A resposta mais adequada, segundo as perspectivas estudadas, é:",
        alternativas: {
            a: "Sim, todo conhecimento europeu deve ser banido.",
            b: "Não: descolonizar o pensamento não é rejeitar a tradição europeia, mas reconhecer que há outras formas válidas de conhecimento (africanas, indígenas, asiáticas) que foram historicamente silenciadas, e colocá-las em diálogo em pé de igualdade.",
            c: "Sim, pois a Europa nunca produziu conhecimento relevante.",
            d: "Não, pois a descolonização é um conceito ultrapassado.",
            e: "Sim, mas apenas nas ciências humanas; nas ciências exatas o conhecimento europeu é válido."
        },
        correta: "b",
        explicacao: "Descolonizar o pensamento não é negar a contribuição europeia, mas questionar a hierarquia que coloca o saber europeu como único válido. É reconhecer e valorizar saberes negros, indígenas, africanos e de outras matrizes, promovendo um diálogo epistêmico plural. Trata-se de ampliar o cânone, não de substituí-lo por outro."
    }
]
        },
        9: {
            titulo: "Levinas e Habermas",
            subtitulo: "Alteridade, ética do discurso e valores democráticos",
            imagem: "https://image.qwenlm.ai/public_source/7ecdf6d2-95b9-4c81-a65a-9658bbbc9782/24d2c7470-4129-4f0a-8155-3c2c3cf06da16980.png",
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
                { titulo: "Intersubjetividade", link: "https://pt.wikipedia.org/wiki/Intersubjetividade", descricao: "Wikipedia - a relação entre sujeitos e o reconhecimento mútuo (o caminho da alteridade)" },
                { titulo: "Democracia deliberativa", link: "https://pt.wikipedia.org/wiki/Democracia_deliberativa", descricao: "Wikipedia - o modelo deliberativo de democracia proposto por Habermas" },
            ],
            quiz: [
    {
        enunciado: "Lévinas conta que, ao encontrar o rosto de outra pessoa — especialmente do vulnerável, do pobre, do estrangeiro —, sinto uma exigência ética que me precede: 'Não matarás.' Não é uma escolha minha ser responsável pelo Outro; a responsabilidade me é imposta pela própria presença do Outro. Um aluno pergunta: 'Mas por que eu seria responsável por alguém que não conheço?' Segundo Lévinas, a resposta é:",
        alternativas: {
            a: "Você não é responsável por desconhecidos; a ética só se aplica a amigos e familiares.",
            b: "A responsabilidade pelo Outro é anterior a qualquer escolha ou contrato: o rosto do Outro (sua vulnerabilidade e alteridade) me interpela e me exige resposta antes que eu decida. A ética é filosofia primeira, anterior à ontologia.",
            c: "A responsabilidade é um sentimento subjetivo sem qualquer obrigação real.",
            d: "A responsabilidade só existe se houver um contrato assinado entre as partes.",
            e: "A responsabilidade é uma invenção religiosa sem fundamento filosófico."
        },
        correta: "b",
        explicacao: "Para Lévinas, a ética não é um contrato entre iguais nem uma escolha voluntária: o rosto do Outro me convoca à responsabilidade antes de qualquer decisão. Essa responsabilidade é assimétrica e infinita. A ética é 'filosofia primeira' — anterior à pergunta pelo ser (ontologia). É a base de toda relação humana genuína."
    },
    {
        enunciado: "Habermas propõe a 'ética do discurso': uma norma só é válida se todos os afetados por ela pudessem concordar com ela em um diálogo racional e livre de coerção. Em uma escola, a direção quer proibir o uso de celulares. Segundo Habermas, a forma legítima de decidir seria:",
        alternativas: {
            a: "A direção decide sozinha e impõe a regra.",
            b: "Todos os afetados (alunos, professores, funcionários) participam de um diálogo racional e livre, apresentam argumentos e buscam um consenso fundamentado.",
            c: "Os alunos mais populares decidem pelos demais.",
            d: "A regra é copiada de outra escola sem adaptação.",
            e: "A decisão é tomada por sorteio."
        },
        correta: "b",
        explicacao: "Para Habermas, a legitimidade de uma norma depende do procedimento discursivo: todos os afetados devem poder participar do diálogo, apresentar argumentos, questionar e buscar consenso racional. A legitimidade não vem da autoridade ou da força, mas da qualidade do processo deliberativo."
    },
    {
        enunciado: "Lévinas e Habermas, apesar de abordagens diferentes, convergem em um ponto fundamental para a vida democrática. Ambos valorizam:",
        alternativas: {
            a: "O individualismo radical e a autonomia absoluta do sujeito.",
            b: "O respeito à alteridade (o Outro), a inclusão de todas as vozes e a responsabilidade ética como fundamentos da vida em comum.",
            c: "A imposição de uma única verdade pelo mais forte.",
            d: "A eliminação do diálogo em favor da eficiência.",
            e: "A separação completa entre ética e política."
        },
        correta: "b",
        explicacao: "Lévinas (ética da alteridade: o rosto do Outro me exige responsabilidade) e Habermas (ética do discurso: a norma legítima nasce do diálogo entre todos os afetados) convergem na valorização do Outro, da inclusão e da responsabilidade. Ambos fundamentam a vida democrática no respeito à diversidade e na escuta."
    },
    {
        enunciado: "Em uma sociedade multicultural como a brasileira, conflitos entre diferentes visões de mundo são frequentes. Um grupo religioso quer impor seus valores a toda a sociedade; um grupo minoritário reivindica o direito de manter suas tradições. Segundo Habermas, a solução democrática para esse conflito seria:",
        alternativas: {
            a: "O grupo mais numeroso impõe seus valores ao grupo minoritário.",
            b: "O Estado proíbe todas as religiões e tradições para evitar conflitos.",
            c: "Um diálogo racional e inclusivo onde todos os afetados possam apresentar suas razões, buscar entendimento mútuo e construir normas que respeitem a diversidade sem impor uma visão particular.",
            d: "O grupo minoritário deve se submeter ao grupo majoritário.",
            e: "A solução é a separação física dos grupos."
        },
        correta: "c",
        explicacao: "Para Habermas, a democracia deliberativa é o procedimento para resolver conflitos em sociedades plurais: o diálogo racional e inclusivo, onde todos apresentam razões e buscam entendimento mútuo. Nenhuma visão particular pode ser imposta; a norma legítima é a que emerge do discurso entre todos os afetados."
    },
    {
        enunciado: "Lévinas afirma que a ética é 'filosofia primeira', anterior à ontologia (o estudo do ser). Um aluno de filosofia pergunta: 'Mas não deveríamos primeiro saber o que existe (ontologia) para depois saber como agir (ética)?' Segundo Lévinas, a resposta é:",
        alternativas: {
            a: "Sim, a ontologia vem antes da ética.",
            b: "Não: antes de qualquer pergunta sobre o ser, já estou em relação com o Outro que me interpela. A responsabilidade ética me constitui como sujeito antes de qualquer reflexão teórica. O rosto do Outro me precede.",
            c: "A ética e a ontologia são a mesma coisa.",
            d: "A ética é uma parte da física.",
            e: "A ontologia é irrelevante para a filosofia."
        },
        correta: "b",
        explicacao: "Lévinas inverte a tradição filosófica ocidental (que privilegia a ontologia desde Parmênides): antes de perguntar 'o que é o ser?', já estou em relação ética com o Outro. O rosto do Outro me interpela e me constitui como sujeito responsável antes de qualquer reflexão. A ética não é derivada da ontologia; ela a precede e a fundamenta."
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
                { titulo: "Filosofia da tecnologia", link: "https://pt.wikipedia.org/wiki/Filosofia_da_tecnologia", descricao: "Wikipedia - o subcampo da filosofia que estuda a tecnologia e seus efeitos sociais" },
            ],
           quiz: [
    {
        enunciado: "Günther Anders cunhou o conceito de 'vergonha prometeica': o sentimento de inferioridade que o ser humano experimenta diante das máquinas que ele mesmo criou. Um exemplo contemporâneo: muitas pessoas sentem que seus celulares são 'mais inteligentes' que elas, confiam mais nos algoritmos do que no próprio julgamento e se sentem obsoletas diante da tecnologia. Esse sentimento, segundo Anders:",
        alternativas: {
            a: "É irracional e não merece reflexão filosófica.",
            b: "Revela um descompasso fundamental: o ser humano criou máquinas que superam suas capacidades em muitas áreas, mas não consegue imaginar plenamente as consequências de suas criações. Somos 'menores' que nossas obras.",
            c: "É positivo, pois mostra que a tecnologia é sempre benéfica.",
            d: "É exclusivo das pessoas idosas.",
            e: "É um sentimento religioso sem relação com a tecnologia."
        },
        correta: "b",
        explicacao: "Anders identifica na 'vergonha prometeica' o descompasso entre nossa capacidade de produzir (imensa, graças à técnica) e nossa capacidade de imaginar as consequências (limitada). Criamos bombas nucleares, IA, algoritmos que nos superam, mas não temos a capacidade moral e imaginativa de prever e controlar seus efeitos."
    },
    {
        enunciado: "Hans Jonas propôs o 'princípio responsabilidade' para a era tecnológica: 'Age de modo que os efeitos de tua ação sejam compatíveis com a permanência de uma vida humana autêntica na Terra.' Um exemplo: uma empresa quer despejar resíduos químicos em um rio para reduzir custos. Aplicando o princípio de Jonas, essa ação é:",
        alternativas: {
            a: "Permissível, pois maximiza o lucro da empresa.",
            b: "Inadmissível: a contaminação do rio compromete a vida das gerações futuras e do ecossistema, violando o imperativo de preservar as condições de uma vida autêntica na Terra.",
            c: "Permissível, pois a natureza se regenera sozinha.",
            d: "Inadmissível apenas se houver multa; se não houver, é aceitável.",
            e: "Permissível, pois o progresso econômico justifica qualquer custo ambiental."
        },
        correta: "b",
        explicacao: "O princípio responsabilidade de Jonas estende a ética ao futuro e à natureza: devemos agir de modo que as futuras gerações possam viver. A contaminação do rio compromete irreversivelmente as condições de vida, violando o imperativo de preservar a permanência da vida humana autêntica. A ética tecnológica pensa em longo prazo."
    },
    {
        enunciado: "A bioética estuda dilemas como: edição genética de embriões, eutanásia, uso de IA em diagnósticos médicos. Um comitê de bioética discute se é ético usar a técnica CRISPR para 'melhorar' geneticamente bebês (não apenas curar doenças). O debate bioético envolve:",
        alternativas: {
            a: "Apenas aspectos técnicos: se a técnica funciona ou não.",
            b: "Aspectos éticos, políticos e existenciais: os limites da intervenção humana sobre a vida, a justiça (quem terá acesso?), os riscos imprevisíveis, a dignidade humana e as consequências para as futuras gerações.",
            c: "Apenas aspectos religiosos.",
            d: "Apenas aspectos econômicos: quanto custa a técnica.",
            e: "Nenhum aspecto ético, pois a ciência é neutra."
        },
        correta: "b",
        explicacao: "A bioética é um campo interdisciplinar que estuda os dilemas éticos das ciências da vida. Questões como edição genética envolvem: limites da intervenção humana, justiça distributiva (quem acessa?), dignidade, riscos imprevisíveis e consequências para futuras gerações. A ciência não é neutra: suas aplicações têm dimensões éticas e políticas."
    },
    {
        enunciado: "O 'mito da neutralidade científica' é a crença de que a ciência é isenta de valores e que seus resultados são sempre benéficos. Anders e Jonas criticam esse mito. Um exemplo histórico: a mesma física que permite a energia nuclear também permitiu a bomba atômica. Isso mostra que:",
        alternativas: {
            a: "A ciência é sempre neutra; o problema está apenas nos políticos.",
            b: "A ciência e a tecnologia não são neutras: suas aplicações têm consequências éticas, políticas e existenciais que devem ser refletidas e reguladas pela sociedade.",
            c: "A física não deveria ter sido desenvolvida.",
            d: "A bomba atômica é um progresso científico sem qualquer dimensão ética.",
            e: "A neutralidade científica é um fato comprovado."
        },
        correta: "b",
        explicacao: "A crítica ao mito da neutralidade mostra que a ciência não existe no vácuo: suas aplicações dependem de escolhas humanas, interesses econômicos e políticos, e têm consequências que devem ser avaliadas eticamente. A tecnologia é ambivalente: pode curar ou destruir. Por isso, exige responsabilidade e regulação."
    },
    {
        enunciado: "Anders argumenta que a 'obsolescência do homem' não é apenas tecnológica (máquinas nos substituem), mas também moral: nossos sentimentos e nossa capacidade de imaginar não acompanham o poder de nossas ações. Um piloto que lança uma bomba a 10.000 metros de altitude não 'sente' a destruição que causa. Segundo Anders, isso revela:",
        alternativas: {
            a: "Que a guerra é sempre justificável.",
            b: "O descompasso entre o poder técnico (imensa capacidade de destruição) e a capacidade moral/imaginativa (limitada): podemos fazer muito mais do que podemos sentir, imaginar ou responsabilizar.",
            c: "Que os pilotos são naturalmente cruéis.",
            d: "Que a altitude é a causa da destruição.",
            e: "Que a tecnologia não afeta a moralidade."
        },
        correta: "b",
        explicacao: "Anders identifica o 'descompasso prometeico': nossa capacidade técnica de agir (bombas, IA, engenharia genética) supera enormemente nossa capacidade de sentir, imaginar e responsabilizar. O piloto que não 'sente' a destruição exemplifica essa cegueira moral: podemos fazer muito mais do que podemos compreender eticamente."
    }
]
        },
        11: {
            titulo: "Foucault e Sociedade Disciplinar",
            subtitulo: "Panóptico, poder disciplinar e sociedade de controle",
            imagem: "https://image.qwenlm.ai/public_source/7ecdf6d2-95b9-4c81-a65a-9658bbbc9782/04d2c7470-4129-4f0a-8155-3c2c3cf06da14627.png",
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
        enunciado: "Foucault descreve o Panóptico de Bentham: uma prisão circular com uma torre central de onde o vigia pode ver todas as celas, mas os presos não sabem se estão sendo observados. Resultado: os presos se comportam bem mesmo quando ninguém está vigiando, pois internalizaram a vigilância. Qual situação contemporânea melhor ilustra esse mecanismo?",
        alternativas: {
            a: "Uma pessoa que lê um livro em sua casa.",
            b: "As redes sociais: sabemos que podemos estar sendo observados (seguidores, algoritmos, empregadores) e, por isso, nos autocontrolamos, editamos nossas postagens e nos comportamos conforme normas — mesmo sem um vigia físico.",
            c: "Uma criança brincando livremente em um parque.",
            d: "Um artista pintando um quadro sozinho.",
            e: "Um agricultor colhendo sua plantação."
        },
        correta: "b",
        explicacao: "As redes sociais funcionam como um Panóptico digital: a possibilidade constante de ser observado (por seguidores, algoritmos, empregadores) nos leva a internalizar a vigilância e nos autocontrolar. Não precisamos de um vigia físico; a mera possibilidade de ser visto já disciplina nosso comportamento."
    },
    {
        enunciado: "Foucault afirma que o poder na modernidade não é apenas repressivo ('não pode'), mas produtivo: produz subjetividades, comportamentos, saberes e verdades. Um exemplo: a escola não apenas pune alunos indisciplinados, mas também produz um tipo de sujeito (o 'bom aluno') através de normas, avaliações, rankings e expectativas. Isso mostra que:",
        alternativas: {
            a: "O poder é sempre negativo e deve ser eliminado.",
            b: "O poder é produtivo: ele não apenas reprime, mas forma sujeitos, define o que é 'normal' e 'anormal', produz verdades e molda comportamentos.",
            c: "A escola não exerce qualquer forma de poder.",
            d: "O poder é exercido apenas pelo Estado e nunca por instituições como escolas.",
            e: "A produção de subjetividades é irrelevante para a análise do poder."
        },
        correta: "b",
        explicacao: "Foucault revoluciona a análise do poder: ele não é apenas repressivo (proibir, punir), mas produtivo (produzir sujeitos, saberes, verdades). A escola, o hospital, a fábrica não apenas reprimem; eles formam sujeitos 'dóceis', definem normalidade e anormalidade, produzem verdades sobre o que é 'bom' e 'ruim'."
    },
    {
        enunciado: "Foucault usa a expressão 'corpos dóceis' para descrever o efeito das instituições disciplinares (escola, quartel, fábrica, hospital). Um operário de fábrica, por exemplo, é treinado para repetir movimentos precisos, obedecer horários rígidos e maximizar a produtividade. Segundo Foucault, isso:",
        alternativas: {
            a: "É apenas uma escolha individual do operário.",
            b: "É um efeito do poder disciplinar: as instituições moldam os corpos para a obediência e a produtividade, tornando-os 'dóceis' — úteis economicamente e submissos politicamente.",
            c: "É irrelevante para a análise filosófica.",
            d: "É uma característica natural dos seres humanos.",
            e: "É um fenômeno exclusivo das sociedades pré-modernas."
        },
        correta: "b",
        explicacao: "Para Foucault, as instituições disciplinares não apenas reprimem; elas treinam os corpos. A escola ensina a ficar sentado, o quartel a marchar, a fábrica a repetir movimentos. O resultado são 'corpos dóceis': disciplinados, produtivos, submissos. O poder disciplinar é uma tecnologia de produção de subjetividades."
    },
    {
        enunciado: "Além do poder disciplinar (sobre corpos individuais), Foucault analisa o biopoder: o poder sobre a vida da população (natalidade, mortalidade, saúde, higiene). Um exemplo: campanhas de vacinação, políticas de controle de natalidade, estatísticas de saúde pública. O biopoder:",
        alternativas: {
            a: "É o poder de matar, típico do soberano medieval.",
            b: "É o poder de 'fazer viver e deixar morrer': administrar a vida da população (saúde, natalidade, longevidade), não mais apenas punir indivíduos.",
            c: "É irrelevante para a filosofia política.",
            d: "É um poder exclusivo das religiões.",
            e: "É idêntico ao poder disciplinar, sem diferença."
        },
        correta: "b",
        explicacao: "Foucault distingue o poder soberano ('fazer morrer e deixar viver') do biopoder ('fazer viver e deixar morrer'): o Estado moderno administra a vida da população — saúde, natalidade, higiene, estatísticas. O biopoder é uma tecnologia de governo que opera sobre a vida coletiva, não apenas sobre corpos individuais."
    },
    {
        enunciado: "Foucault afirma que o poder não está concentrado apenas no Estado, mas circula em todas as relações sociais: família, escola, trabalho, mídia, medicina. Um aluno pergunta: 'Se o poder está em todo lugar, como resistir?' Segundo Foucault, a resposta é:",
        alternativas: {
            a: "Não é possível resistir; o poder é absoluto.",
            b: "Onde há poder, há resistência: a resistência é imanente ao poder. Resistir é questionar as verdades produzidas, desnaturalizar as normas, criar novas formas de subjetividade e novos modos de existir.",
            c: "A resistência deve vir apenas de fora do sistema.",
            d: "A resistência é inútil e deve ser abandonada.",
            e: "A resistência só é possível através da violência armada."
        },
        correta: "b",
        explicacao: "Para Foucault, poder e resistência são inseparáveis: 'Onde há poder, há resistência.' Resistir não é destruir o poder, mas questionar as verdades que ele produz, desnaturalizar o que parece 'normal', criar novas possibilidades de existência. A resistência é criativa, não apenas negativa."
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
               { titulo: "Trabalho (economia)", link: "https://pt.wikipedia.org/wiki/Trabalho_(economia)", descricao: "Wikipedia - o trabalho na organização econômica do capitalismo, palco da sociedade do desempenho" },
               { titulo: "Alienação", link: "https://pt.wikipedia.org/wiki/Aliena%C3%A7%C3%A3o", descricao: "Wikipedia - o conceito de alienação que Han atualiza na crítica à sociedade do cansaço" },
                { titulo: "Síndrome de burnout", link: "https://pt.wikipedia.org/wiki/S%C3%ADndrome_de_burnout", descricao: "Wikipedia - a síndrome do esgotamento profissional, marca do nosso tempo" },
            ],
            quiz: [
    {
        enunciado: "Byung-Chul Han argumenta que saímos da sociedade disciplinar (Foucault: 'você deve', com proibições e instituições como fábrica e prisão) para a sociedade do desempenho ('você pode', com positividade, auto-otimização e empreendedorismo de si). Um exemplo: em vez de um chefe gritando 'trabalhe!', o indivíduo diz a si mesmo 'eu posso mais, preciso me superar, ser mais produtivo'. Essa mudança gera:",
        alternativas: {
            a: "Mais liberdade e felicidade para todos.",
            b: "Autoexploração voluntária: o indivíduo se torna seu próprio patrão e seu próprio explorado, gerando burnout, depressão e cansaço crônico.",
            c: "O fim de qualquer forma de trabalho.",
            d: "A eliminação de todas as doenças mentais.",
            e: "O retorno à sociedade feudal."
        },
        correta: "b",
        explicacao: "Na sociedade do desempenho, não há mais um patrão externo impondo ordens; o indivíduo se autoexplora voluntariamente em nome da produtividade e do sucesso. Essa 'liberdade' aparente é mais eficaz que a disciplina: gera burnout, depressão e cansaço crônico, pois não há limite para a cobrança interna."
    },
    {
        enunciado: "Han critica a 'positividade tóxica' da sociedade contemporânea: a obrigação de ser sempre positivo, produtivo, feliz, resiliente. Frases como 'não reclame, seja grato', 'transforme obstáculos em oportunidades' e 'se não está feliz, mude de atitude' exemplificam essa lógica. Segundo Han, essa positividade:",
        alternativas: {
            a: "É genuinamente benéfica e deve ser incentivada.",
            b: "Patologiza a negatividade (tristeza, fracasso, cansaço) e esconde as causas estruturais do sofrimento, culpabilizando o indivíduo por não ser 'positivo' o suficiente.",
            c: "É irrelevante para a saúde mental.",
            d: "É exclusiva das redes sociais.",
            e: "É uma forma de resistência ao capitalismo."
        },
        correta: "b",
        explicacao: "Han critica a positividade tóxica: ela transforma problemas estruturais (exploração, desigualdade) em falhas individuais ('você não é positivo o suficiente'). A tristeza, o cansaço e o fracasso são patologizados, e o indivíduo é culpabilizado por não se adequar. A positividade obrigatória esconde as causas reais do sofrimento."
    },
    {
        enunciado: "Han analisa a 'sociedade da transparência': tudo deve ser visível, compartilhado, exposto (redes sociais, reality shows, selfies). A privacidade, o mistério e a profundidade são vistos com desconfiança. O 'like' substitui o julgamento crítico. Segundo Han, essa transparência:",
        alternativas: {
            a: "É sempre positiva, pois promove a honestidade.",
            b: "Elimina a profundidade e o mistério, transforma tudo em mercadoria visível e gera uma sociedade de exibição onde o valor é medido por curtidas, não por reflexão crítica.",
            c: "É irrelevante para a filosofia contemporânea.",
            d: "É exclusiva das ditaduras.",
            e: "Promove a reflexão filosófica profunda."
        },
        correta: "b",
        explicacao: "Han critica a sociedade da transparência: a obrigação de expor tudo elimina o mistério, a profundidade e a privacidade. Tudo se torna visível e, portanto, mercadoria. O 'like' substitui o julgamento; a exibição substitui a reflexão. A transparência total não é liberdade; é uma nova forma de controle e alienação."
    },
    {
        enunciado: "Han identifica como patologias típicas da sociedade contemporânea: burnout (esgotamento profissional), depressão e cansaço crônico. Um jovem trabalhador de aplicativo relata: 'Trabalho 12 horas por dia, não tenho férias, nem seguro, nem direito a ficar doente. Mas me dizem que sou um empreendedor de mim mesmo.' Segundo Han, esse relato ilustra:",
        alternativas: {
            a: "O sucesso do empreendedorismo moderno.",
            b: "A autoexploração na sociedade do desempenho: o trabalhador se vê como 'empreendedor', mas está submetido a condições precárias sem proteção, e a ideologia do 'você pode' esconde a exploração.",
            c: "A satisfação plena com o trabalho.",
            d: "A ausência de qualquer forma de exploração.",
            e: "O retorno ao trabalho escravo tradicional."
        },
        correta: "b",
        explicacao: "O relato ilustra a autoexploração: o trabalhador internaliza a ideologia do 'empreendedorismo de si' e não se reconhece como explorado. A precarização (sem férias, sem seguro, sem direitos) é mascarada pela retórica da liberdade e do 'você pode'. O resultado é exaustão sem a consciência de ser explorado."
    },
    {
        enunciado: "Han propõe que, diante da sociedade do cansaço, precisamos recuperar a capacidade de contemplação, de tédio, de silêncio — formas de negatividade que resistem à lógica da produtividade. Um aluno pergunta: 'Mas ficar entediado não é perda de tempo?' Segundo Han, a resposta é:",
        alternativas: {
            a: "Sim, o tédio é sempre negativo e deve ser evitado.",
            b: "Não: o tédio, o silêncio e a contemplação são formas de negatividade necessárias para a criatividade, a reflexão e a resistência à lógica da produtividade incessante. Sem eles, somos apenas máquinas de produção e consumo.",
            c: "O tédio é uma doença mental.",
            d: "A contemplação é uma perda de tempo na era digital.",
            e: "O silêncio é impossível na sociedade contemporânea."
        },
        correta: "b",
        explicacao: "Han defende a recuperação da 'negatividade' (tédio, silêncio, contemplação) como resistência à positividade tóxica da produtividade incessante. O tédio criativo, o silêncio reflexivo e a contemplação são antídotos contra o burnout e a alienação. Sem eles, somos reduzidos a máquinas de produção e consumo."
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
                { titulo: "Imaginação sociológica", link: "https://pt.wikipedia.org/wiki/Imagina%C3%A7%C3%A3o_sociol%C3%B3gica", descricao: "Wikipedia - C. Wright Mills: conectar a experiência pessoal às estruturas sociais" }
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
            imagem: "https://image.qwenlm.ai/public_source/7ecdf6d2-95b9-4c81-a65a-9658bbbc9782/24d2c7470-4129-4f0a-8155-3c2c3cf06da18482.png",
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
            imagem: "https://image.qwenlm.ai/public_source/7ecdf6d2-95b9-4c81-a65a-9658bbbc9782/34d2c7470-4129-4f0a-8155-3c2c3cf06da18168.png",
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
            imagem: "https://image.qwenlm.ai/public_source/7ecdf6d2-95b9-4c81-a65a-9658bbbc9782/14d2c7470-4129-4f0a-8155-3c2c3cf06da18691.png",
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
            imagem: "https://image.qwenlm.ai/public_source/7ecdf6d2-95b9-4c81-a65a-9658bbbc9782/34d2c7470-4129-4f0a-8155-3c2c3cf06da14232.png",
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
            imagem: "https://image.qwenlm.ai/public_source/7ecdf6d2-95b9-4c81-a65a-9658bbbc9782/04d2c7470-4129-4f0a-8155-3c2c3cf06da19599.png",
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
            imagem: "https://image.qwenlm.ai/public_source/7ecdf6d2-95b9-4c81-a65a-9658bbbc9782/44d2c7470-4129-4f0a-8155-3c2c3cf06da19035.png",
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
            imagem: "https://image.qwenlm.ai/public_source/7ecdf6d2-95b9-4c81-a65a-9658bbbc9782/74d2c7470-4129-4f0a-8155-3c2c3cf06da18010.png",
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
            imagem: "https://image.qwenlm.ai/public_source/7ecdf6d2-95b9-4c81-a65a-9658bbbc9782/24d2c7470-4129-4f0a-8155-3c2c3cf06da19673.png",
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
            imagem: "https://image.qwenlm.ai/public_source/7ecdf6d2-95b9-4c81-a65a-9658bbbc9782/04d2c7470-4129-4f0a-8155-3c2c3cf06da13164.png",
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
            imagem: "https://image.qwenlm.ai/public_source/7ecdf6d2-95b9-4c81-a65a-9658bbbc9782/14d2c7470-4129-4f0a-8155-3c2c3cf06da17036.png",
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
               { titulo: "Direito do trabalho", link: "https://pt.wikipedia.org/wiki/Direito_do_trabalho", descricao: "Wikipedia - as normas que regulam as relações de trabalho e protegem o trabalhador" },
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
