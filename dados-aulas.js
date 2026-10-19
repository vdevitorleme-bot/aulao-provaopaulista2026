// BANCO DE DADOS COMPLETO - TODAS AS AULAS E QUIZZES
const dadosAulas = {
    filosofia: {
        1: {
            titulo: "Mito e Filosofia",
            subtitulo: "As origens do pensamento filosófico na Grécia Antiga",
            imagem: "https://images.unsplash.com/photo-1528168366336-8574880fe611?w=800",
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
            `
        },
        2: {
            titulo: "Platão e Aristóteles",
            subtitulo: "A filosofia de Platão e Aristóteles na obra 'Escola de Atenas'",
            imagem: "https://images.unsplash.com/photo-1608376639808-3b9b1e460d5b?w=800",
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
            `
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
            `
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
            `
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
            `
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
            `
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
            `
        },
        8: {
            titulo: "Ubuntu e Protagonismo",
            subtitulo: "Filosofia Ubuntu e filósofos negros e indígenas brasileiros",
            imagem: "https://images.unsplash.com/photo-1523365280197-833a0a7a2f5e?w=800",
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
            `
        },
        9: {
            titulo: "Levinas e Habermas",
            subtitulo: "Alteridade, ética do discurso e valores democráticos",
            imagem: "https://images.unsplash.com/photo-1529156069182-903391a171a7?w=800",
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
            `
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
            `
        },
        11: {
            titulo: "Foucault e Sociedade Disciplinar",
            subtitulo: "Panóptico, poder disciplinar e sociedade de controle",
            imagem: "https://images.unsplash.com/photo-1577962917302-cd874c4daf7c?w=800",
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
            `
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
            `
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
            `
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
            `
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
            `
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
            `
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
            `
        },
        6: {
            titulo: "Gênero e Patriarcado",
            subtitulo: "Construção social de gênero, violência simbólica e relações de poder",
            imagem: "https://images.unsplash.com/photo-1607748854627-9a94a