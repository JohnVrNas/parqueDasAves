const dados = [
    {
        nome: "Harpia",
        cientifico: "Harpia harpyja",
        descricao: "O gavião-real, também conhecido como harpia, é uma das maiores aves de rapina do mundo e a maior das Américas. Essa majestade das alturas, com suas garras poderosas e visão aguçada, habita as florestas tropicais da América Central e do Sul.",
        link: "https://www.wikiaves.com/wiki/gaviao-real",
        imagem: "src/images/aves/harpia.jpg",
        tags: "harpia gaviao real pega macaco harpya"
    },
    {
        nome: "Arara-azul",
        cientifico: "Anodorhynchus hyacinthinus",
        descricao: "A arara-azul é uma ave símbolo do Brasil, conhecida por suas penas vibrantes e seu grande tamanho. Habitante das florestas tropicais, especialmente na região amazônica, a arara-azul é uma espécie ameaçada de extinção devido à perda de habitat e ao tráfico de animais.",
        link: "https://www.wikiaves.com.br/wiki/arara-azul?s[]=arara&s[]=azul",
        imagem: "src/images/aves/arara_azul.jpg",
        tags: "arara blue Arara"
    },
    {
        nome: "Urutau",
        cientifico: "Nyctibius griseus",
        descricao: "O urutau é uma ave noturna com uma incrível capacidade de camuflagem, se misturando perfeitamente com a casca das árvores. Conhecido por seu canto melancólico, o urutau é uma espécie fascinante e misteriosa, encontrada em diversas regiões da América do Sul.",
        link: "https://www.wikiaves.com.br/wiki/urutau?s[]=urutau",
        imagem: "src/images/aves/urutau.jpg"
    },
    {
        nome: "Arara-canindé",
        cientifico: "Ara ararauna",
        descricao: "A arara-canindé, com suas penas azuis e amarelas brilhantes, é uma das aves mais emblemáticas das florestas tropicais da América do Sul. Ela se destaca por seu comportamento social e inteligência, além de ser uma das maiores araras em termos de envergadura.",
        link: "https://www.wikiaves.com.br/wiki/arara-caninde",
        imagem: "src/images/aves/arara_caninde.jpg"
    },
    {
        nome: "Arara vermelha",
        cientifico: "Ara chloropterus",
        descricao: "A arara vermelha é uma ave de plumagem exuberante e vibrante, com predominância do vermelho intenso. Encontrada nas florestas tropicais da América Central e do Sul, essa espécie é conhecida por sua sociabilidade e longevidade.",
        link: "https://www.wikiaves.com.br/wiki/arara-vermelha",
        imagem: "src/images/aves/arara_vermelha.jpg"
    },
    {
        nome: "Araracanga",
        cientifico: "Ara macao",
        descricao: "A araracanga, também conhecida como arara-vermelha-grande, é uma das aves mais coloridas do mundo. Suas penas vermelhas, azuis e amarelas são um espetáculo, e essa espécie vive nas florestas tropicais da América Central e do Sul.",
        link: "https://www.wikiaves.com.br/wiki/araracanga",
        imagem: "src/images/aves/araracanga.jpg"
    },
    {
        nome: "Beija-flor de banda branca",
        cientifico: "Amazilia versicolor",
        descricao: "O beija-flor de banda branca, pequeno mas extremamente ágil, é conhecido pela faixa branca que adorna seu peito. Encontrado em várias regiões da América do Sul, ele é uma espécie comum nos jardins e florestas tropicais.",
        link: "https://www.wikiaves.com.br/wiki/beija-flor-de-banda-branca",
        imagem: "src/images/aves/beija_flor_de_banda_branca.jpg"
    },
    {
        nome: "Beija-flor de fronte violeta",
        cientifico: "Thalurania glaucopis",
        descricao: "O beija-flor de fronte violeta impressiona com seu brilho metálico e sua pequena, mas distinta, fronte violeta. Ele habita áreas de floresta e jardins, sendo facilmente reconhecido por suas cores deslumbrantes.",
        link: "https://www.wikiaves.com.br/wiki/beija-flor-de-fronte-violeta",
        imagem: "src/images/aves/beija_flor_de_fronte_violeta.jpg"
    },
    {
        nome: "Beija-flor preto",
        cientifico: "Florisuga fusca",
        descricao: "O beija-flor preto é uma ave de plumagem escura, com penas que variam entre preto e verde metálico. Essa espécie, nativa da América do Sul, é conhecida por sua resistência e habilidade em voar grandes distâncias em busca de néctar.",
        link: "https://www.wikiaves.com.br/wiki/beija-flor-preto",
        imagem: "src/images/aves/beija_flor_preto.jpg"
    },
    {
        nome: "Bem-te-vi",
        cientifico: "Pitangus sulphuratus",
        descricao: "O bem-te-vi é uma das aves mais populares do Brasil, facilmente identificado pelo seu canto característico e sua coloração amarela e marrom. Encontrado em várias partes da América Latina, ele se adapta bem a ambientes urbanos e rurais.",
        link: "https://www.wikiaves.com.br/wiki/bem-te-vi",
        imagem: "src/images/aves/bem_te_vi.jpg"
    },
    {
        nome: "Canário-da-terra-verdadeiro",
        cientifico: "Sicalis flaveola",
        descricao: "O canário-da-terra-verdadeiro, com sua plumagem amarelo-ouro, é uma ave que encanta os observadores. Muito comum em áreas abertas do Brasil, ele também é conhecido pelo seu canto melodioso e pela facilidade de adaptação em cativeiro.",
        link: "https://www.wikiaves.com.br/wiki/canario-da-terra-verdadeiro",
        imagem: "src/images/aves/canario_da_terra_verdadeiro.jpg"
    },
    {
        nome: "Cardeal de topete vermelho",
        cientifico: "Paroaria coronata",
        descricao: "O cardeal de topete vermelho, com sua coroa escarlate, é uma ave de rara beleza encontrada na América do Sul. Sua plumagem branca e preta contrasta vividamente com o vermelho do topete, fazendo dele uma ave bastante procurada para observação.",
        link: "https://www.wikiaves.com.br/wiki/cardeal",
        imagem: "src/images/aves/cardeal_de_topete_vermelho.jpg"
    },
    {
        nome: "Cardeal do nordeste",
        cientifico: "Paroaria dominicana",
        descricao: "O cardeal do nordeste é uma ave símbolo do Brasil, facilmente reconhecida pelo seu topete vermelho vibrante. Essa espécie é encontrada principalmente nas regiões áridas e semiáridas do Nordeste brasileiro.",
        link: "https://www.wikiaves.com.br/wiki/cardeal-do-nordeste",
        imagem: "src/images/aves/cardeal_do_nordeste.jpg"
    },
    {
        nome: "Casuar",
        cientifico: "Casuarius casuarius",
        descricao: "O casuar é uma ave grande e não voadora, nativa da Austrália e Nova Guiné. Suas penas pretas e a crista óssea na cabeça o tornam único, sendo uma das aves mais perigosas, capaz de causar sérios ferimentos com suas garras afiadas.",
        link: "https://pt.wikipedia.org/wiki/Casuar#:~:text=O%20casuar%20(Casuarius%20spp.),sejam%20muito%20amig%C3%A1veis%20ou%20domestic%C3%A1veis.",
        imagem: "src/images/aves/casuar.jpg"
    },
    {
        nome: "Caturrita",
        cientifico: "Myiopsitta monachus",
        descricao: "A caturrita, também conhecida como periquito-monge, é uma ave de comportamento gregário, comumente vista em bandos. Ela é conhecida por sua adaptabilidade, podendo viver tanto em áreas urbanas quanto rurais.",
        link: "https://www.wikiaves.com.br/wiki/caturrita",
        imagem: "src/images/aves/caturrita.jpg"
    },
    {
        nome: "Chauá",
        cientifico: "Amazona rhodocorytha",
        descricao: "O papagaio-chauá, com suas penas verdes brilhantes e uma mancha vermelha na cabeça, é uma espécie endêmica do Brasil. Essa ave inteligente e sociável vive principalmente nas florestas tropicais e é muito apreciada por criadores.",
        link: "https://www.wikiaves.com.br/wiki/chaua",
        imagem: "src/images/aves/chaua.jpg"
    },
    {
        nome: "Coleirinho",
        cientifico: "Sporophila caerulescens",
        descricao: "O coleirinho é uma pequena ave conhecida por sua plumagem preta e branca, com uma característica coleira preta no pescoço. Encontrado em várias regiões do Brasil, é bastante popular entre os criadores de aves.",
        link: "https://www.wikiaves.com.br/wiki/coleirinho",
        imagem: "src/images/aves/coleirinho.jpg"
    },
    {
        nome: "Colhereiro",
        cientifico: "Platalea ajaja",
        descricao: "O colhereiro é uma ave aquática facilmente reconhecida por seu bico em forma de colher. Sua plumagem rosa viva faz dele uma das aves mais fotografadas em regiões de mangue e pântano da América do Sul.",
        link: "https://www.wikiaves.com.br/wiki/colhereiro",
        imagem: "src/images/aves/colhereiro.jpg"
    },
    {
        nome: "Coruja-buraqueira",
        cientifico: "Athene cunicularia",
        descricao: "A coruja-buraqueira é uma ave de hábitos terrestres, conhecida por fazer suas tocas em buracos no chão. Com olhos grandes e amarelos, ela é encontrada em campos abertos e até mesmo em áreas urbanas.",
        link: "https://www.wikiaves.com.br/wiki/coruja-buraqueira",
        imagem: "src/images/aves/coruja_buraqueira.jpg"
    },
    {
        nome: "Coruja-orelhuda",
        cientifico: "Asio clamator",
        descricao: "A coruja-orelhuda, com suas penas que lembram orelhas, é uma ave noturna de hábitos discretos. Sua camuflagem a torna difícil de ser avistada, vivendo em áreas de mata densa e florestas tropicais.",
        link: "https://www.wikiaves.com.br/wiki/coruja-orelhuda",
        imagem: "src/images/aves/coruja_orelhuda.jpg"
    },
    {
        nome: "Corujinha-do-mato",
        cientifico: "Megascops choliba",
        descricao: "A corujinha-do-mato é uma pequena ave de hábitos noturnos, com penas marrons que a ajudam a se camuflar nas árvores. Ela vive em florestas e áreas de cerrado, sendo mais ativa durante a noite.",
        link: "https://www.wikiaves.com.br/wiki/corujinha-do-mato",
        imagem: "src/images/aves/corujinha_do_mato.jpg"
    },
    {
        nome: "Curicaca",
        cientifico: "Theristicus caudatus",
        descricao: "A curicaca é uma ave aquática de penas esbranquiçadas e bico longo, comum em áreas pantanosas e campos abertos. Seu comportamento ruidoso e sua presença em grandes bandos a tornam uma ave fácil de ser avistada.",
        link: "https://www.wikiaves.com.br/wiki/curicaca",
        imagem: "src/images/aves/curicaca.jpg"
    },
    {
        nome: "Curió",
        cientifico: "Sporophila angolensis",
        descricao: "O curió é um pássaro canoro muito apreciado por seu canto melodioso. Ele é encontrado em diversas áreas do Brasil e é especialmente popular entre os criadores de aves pela sua beleza e habilidades vocais.",
        link: "https://www.wikiaves.com.br/wiki/curio",
        imagem: "src/images/aves/curio.jpg"
    },
    {
        nome: "Encontro",
        cientifico: "Icterus cayanensis",
        descricao: "O encontro é uma ave de plumagem preta e amarela, conhecida por seu comportamento gregário. É comum em áreas de florestas e cerrado no Brasil, sendo facilmente reconhecida por seu canto alto e marcante.",
        link: "https://www.wikiaves.com.br/wiki/encontro",
        imagem: "src/images/aves/encontro.jpg"
    },
    {
        nome: "Flamingo africano",
        cientifico: "Phoenicopterus roseus",
        descricao: "O flamingo africano é uma ave alta e elegante, conhecida por sua plumagem rosa e pernas longas. Eles habitam regiões úmidas e lagos alcalinos na África e são famosos por seus grandes bandos e impressionantes danças de acasalamento.",
        link: "https://pt.wikipedia.org/wiki/Flamingo",
        imagem: "src/images/aves/flamingo_africano.jpg",
        tags: ["ave", "flamingo", "africa", "rosa", "pernas-longas"]
    },
    {
        nome: "Flamingo chileno",
        cientifico: "Phoenicopterus chilensis",
        descricao: "O flamingo chileno é uma das espécies de flamingo encontradas na América do Sul. Suas penas variam entre tons de rosa claro e cinza, e ele habita regiões de lagos salinos, especialmente no Chile, Argentina e Bolívia.",
        link: "https://www.wikiaves.com.br/wiki/flamingo-chileno",
        imagem: "src/images/aves/flamingo_chileno.jpg",
        tags: "ave flamingo chile sudeste américa-do-sul"
    },
    {
        nome: "Frango-d'água azul",
        cientifico: "Porphyrio martinicus",
        descricao: "O frango-d'água azul é uma ave aquática de cores vibrantes, com plumagem azul brilhante e verde iridescente. Ele é encontrado em áreas pantanosas e lagos rasos, sendo comum nas Américas Central e do Sul.",
        link: "https://www.wikiaves.com.br/wiki/frango-d_agua-azul",
        imagem: "src/images/aves/frango_dagua_azul.jpg",
        tags: "ave aquática azul pântano américa-do-sul"
    },
    {
        nome: "Garça-branca",
        cientifico: "Ardea alba",
        descricao: "A garça-branca é uma ave aquática majestosa, com plumagem totalmente branca e bico amarelo. Encontrada em pântanos e rios, é uma excelente pescadora e pode ser vista em diversos habitats ao redor do mundo.",
        link: "https://www.wikiaves.com.br/wiki/garca-branca-grande",
        imagem: "src/images/aves/garca_branca.jpg",
        tags: "ave aquática branca pescadora rios"
    },
    {
        nome: "Garça-vaqueira",
        cientifico: "Bubulcus ibis",
        descricao: "A garça-vaqueira é uma pequena ave branca que se adapta a diversos habitats, muitas vezes vista acompanhando o gado para se alimentar de insetos. Ela é nativa da África, mas agora é encontrada em várias partes do mundo.",
        link: "https://www.wikiaves.com.br/wiki/garca-vaqueira",
        imagem: "src/images/aves/garca_vaqueira.jpg",
        tags: "ave branca vaqueira insetívora pastos"
    },
    {
        nome: "Gaturamo-verdadeiro",
        cientifico: "Euphonia violacea",
        descricao: "O gaturamo-verdadeiro é uma pequena ave passeriforme, conhecida por sua vibrante plumagem azul e amarela. Ele é comum em florestas tropicais da América do Sul e é famoso por seu canto melodioso.",
        link: "https://www.wikiaves.com.br/wiki/gaturamo-verdadeiro",
        imagem: "src/images/aves/gaturamo_verdadeiro.jpg",
        tags: "ave passeriforme azul amarela tropical"
    },
    {
        nome: "Gralha-azul",
        cientifico: "Cyanocorax caeruleus",
        descricao: "A gralha-azul é uma ave de plumagem azul brilhante, endêmica da região sul do Brasil. Ela tem grande importância ecológica, ajudando na dispersão de sementes de araucárias, e é um símbolo do estado do Paraná.",
        link: "https://www.wikiaves.com.br/wiki/gralha-azul",
        imagem: "src/images/aves/gralha_azul.jpg",
        tags: "ave azul brasil dispersora araucárias"
    },
    {
        nome: "Gralha-canção",
        cientifico: "Cyanocorax cristatellus",
        descricao: "A gralha-canção é uma ave de comportamento gregário, conhecida por sua plumagem azul escura e seu canto alto e marcante. Ela vive principalmente em áreas de cerrado e savanas do Brasil.",
        link: "https://www.wikiaves.com.br/wiki/gralha-canca",
        imagem: "src/images/aves/gralha_cancao.jpg",
        tags: ["ave", "azul-escura", "gregária", "cerrado", "canora"]
    },
    {
        nome: "Gralha-do-campo",
        cientifico: "Cyanocorax cyanomelas",
        descricao: "A gralha-do-campo é uma ave de grande porte, com plumagem preta e azul iridescente. Ela vive em campos abertos e áreas de cerrado no Brasil, sendo bastante territorial e conhecida por seu comportamento ruidoso.",
        link: "https://www.wikiaves.com.br/wiki/gralha-do-campo",
        imagem: "src/images/aves/gralha_do_campo.jpg",
        tags: ["ave", "preta", "azul", "territorial", "cerrado"]
    },
    {
        nome: "Gralha-picaça",
        cientifico: "Cyanocorax chrysops",
        descricao: "A gralha-picaça é uma ave colorida com plumagem azul e branca, facilmente encontrada em regiões de cerrado e mata atlântica. Ela é conhecida por sua vocalização forte e por viver em bandos.",
        link: "https://www.wikiaves.com.br/wiki/gralha-picaca",
        imagem: "src/images/aves/gralha_picaca.jpg",
        tags: ["ave", "azul", "branca", "cerrado", "mata-atlântica"]
    },
    {
        nome: "Graúna",
        cientifico: "Gnorimopsar chopi",
        descricao: "A graúna é uma ave negra com reflexos azulados, conhecida pelo seu canto forte e melodioso. Comum em várias partes do Brasil, ela vive em áreas abertas, muitas vezes associada a campos e áreas agrícolas.",
        link: "https://www.wikiaves.com.br/wiki/grauna",
        imagem: "src/images/aves/grauna.jpg",
        tags: ["ave", "negra", "campos", "canto", "agricultura"]
    },
    {
        nome: "Grou demoiselle",
        cientifico: "Anthropoides virgo",
        descricao: "O grou demoiselle é uma ave graciosa e migratória, encontrada na Ásia e no norte da África. Sua plumagem cinza-prateada e sua dança de acasalamento elaborada são espetáculos da natureza.",
        link: "https://pt.wikipedia.org/wiki/Grou-pequeno",
        imagem: "src/images/aves/grou_demoiselle.jpg",
        tags: ["ave", "migratória", "cinza", "dança", "asia"]
    },
    {
        nome: "Guará",
        cientifico: "Eudocimus ruber",
        descricao: "O guará é uma ave aquática famosa por sua plumagem vermelha vibrante, sendo um dos símbolos da fauna brasileira. Ele vive em manguezais e áreas pantanosas, alimentando-se de pequenos crustáceos.",
        link: "https://www.wikiaves.com.br/wiki/guara",
        imagem: "src/images/aves/guara.png",
        tags: ["ave", "vermelha", "pantanal", "manguezal", "crustáceos"]
    },
    {
        nome: "Iguana",
        cientifico: "Iguana iguana",
        descricao: "A iguana é um reptil grande e herbívoro, com escamas verdes e um comportamento tranquilo. Ela é encontrada em florestas tropicais da América do Sul e Central, muitas vezes vista em árvores próximas a corpos d'água.",
        link: "https://pt.wikipedia.org/wiki/Iguana",
        imagem: "src/images/aves/iguana.jpg",
        tags: ["reptil", "herbívoro", "verde", "tropical", "árvores"]
    },
    {
        nome: "Inhambu-guaçu",
        cientifico: "Crypturellus obsoletus",
        descricao: "O inhambu-guaçu é uma ave terrestre de plumagem discreta, cinza e marrom. Ele vive no chão de florestas densas, alimentando-se de sementes e pequenos invertebrados.",
        link: "https://www.wikiaves.com.br/wiki/inhambuguacu",
        imagem: "src/images/aves/inhambuguacu.jpg",
        tags: ["ave", "terrestre", "cinza", "marrom", "florestas"]
    },
    {
        nome: "Iraúna-bico-branco",
        cientifico: "Gymnomystax mexicanus",
        descricao: "A iraúna-bico-branco é uma ave de plumagem preta com um bico branco característico. Ela é encontrada principalmente em áreas alagadas e margens de rios na América do Sul, sendo reconhecida por sua vocalização forte.",
        link: "https://www.wikiaves.com.br/wiki/irauna-de-bico-branco",
        imagem: "src/images/aves/irauna_bico_branco.jpg",
        tags: ["ave", "preta", "bico-branco", "alagados", "rios"]
    },
    {
        nome: "Iraúna-grande",
        cientifico: "Gnorimopsar chopi",
        descricao: "A iraúna-grande é uma ave de cor completamente negra e com um canto melodioso. Comum em áreas abertas e margens de florestas, sua presença é fácil de detectar pelo seu canto alto e forte.",
        link: "https://www.wikiaves.com.br/wiki/irauna-grande",
        imagem: "src/images/aves/irauna_grande.jpg",
        tags: ["ave", "negra", "canto", "áreas-abertas", "florestas"]
    },
    {
        nome: "Irerê",
        cientifico: "Dendrocygna viduata",
        descricao: "O irerê é um pato de porte médio, facilmente reconhecido por sua plumagem marrom e branca e seu canto peculiar. Ele vive em lagos e áreas alagadas, sendo comum em várias regiões da América do Sul.",
        link: "https://www.wikiaves.com.br/wiki/irere",
        imagem: "src/images/aves/irere.jpg",
        tags: ["ave", "aquática", "marrom", "branca", "lagoas"]
    },
    {
        nome: "Jabuti-chileno",
        cientifico: "Chelonoidis chilensis",
        descricao: "O jabuti-chileno é uma espécie de jabuti que habita áreas secas da América do Sul. Ele é conhecido por sua carapaça robusta e sua alimentação baseada em frutas e vegetais.",
        link: "https://pt.wikipedia.org/wiki/Chelonoidis_chilensis#:~:text=Tartaruga%20do%20Chaco%2C%20cujo%20nome,Argentina%20e%20oeste%20do%20Uruguai.",
        imagem: "src/images/aves/jabuti_chileno.jpg",
        tags: ["reptil", "jabuti", "carapaça", "américa-do-sul", "vegetariano"]
    },
    {
        nome: "Jabuti-tinga",
        cientifico: "Chelonoidis denticulata",
        descricao: "O jabuti-tinga é um reptil terrestre de porte médio, com uma carapaça escura e patas robustas. Ele é encontrado em florestas tropicais e áreas úmidas da América do Sul.",
        link: "https://pt.wikipedia.org/wiki/Jabuti-tinga",
        imagem: "src/images/aves/jabuti_tinga.jpg",
        tags: ["reptil", "jabuti", "carapaça", "tropical", "florestas"]
    },
    {
        nome: "Jacaré-do-papo-amarelo",
        cientifico: "Caiman latirostris",
        descricao: "O jacaré-do-papo-amarelo é um reptil encontrado em áreas pantanosas e rios da América do Sul. Ele é facilmente reconhecido pelo seu papo de cor amarelada e sua grande habilidade de caça aquática.",
        link: "https://pt.wikipedia.org/wiki/Jacar%C3%A9-de-papo-amarelo",
        imagem: "src/images/aves/jacare_papo_amarelo.jpg",
        tags: ["reptil", "jacare", "amarelo", "pantanal", "rios"]
    },
    {
        nome: "Jacuacu",
        cientifico: "Dactyloa punctata",
        descricao: "O jacuaru é um lagarto que habita florestas tropicais da América Central e do Sul. Ele possui uma coloração camuflada que o ajuda a se esconder entre as folhas e troncos de árvores.",
        link: "https://www.wikiaves.com.br/wiki/jacuacu",
        imagem: "src/images/aves/jacuacu.jpg",
        tags: ["reptil", "lagarto", "camuflagem", "tropical", "florestas"]
    },
    {
        nome: "Jacutinga",
        cientifico: "Aburria jacutinga",
        descricao: "A jacutinga é uma ave ameaçada de extinção, encontrada em áreas de mata atlântica no Brasil. Com plumagem preta e branca e um comportamento discreto, ela é vital para a dispersão de sementes na floresta.",
        link: "https://www.wikiaves.com.br/wiki/jacutinga",
        imagem: "src/images/aves/jacutinga.jpg",
        tags: ["ave", "preta", "branca", "dispersora", "mata-atlântica"]
    },
    {
        nome: "Jiboia",
        cientifico: "Boa constrictor",
        descricao: "A jiboia é uma serpente de grande porte encontrada nas florestas tropicais da América do Sul. Ela se alimenta de pequenos mamíferos e utiliza seu corpo para constrição ao capturar suas presas.",
        link: "https://pt.wikipedia.org/wiki/Jiboia-constritora",
        imagem: "src/images/aves/jiboia.jpg",
        tags: ["reptil", "serpente", "constrição", "tropical", "américa-do-sul"]
    },
    {
        nome: "Macuco",
        cientifico: "Tinamus solitarius",
        descricao: "O macuco é uma ave de chão, com plumagem marrom e cinza, encontrada nas florestas brasileiras. Ele é conhecido por seu comportamento solitário e por se alimentar de frutas caídas.",
        link: "https://www.wikiaves.com.br/wiki/macuco",
        imagem: "src/images/aves/macuco.jpg",
        tags: ["ave", "marrom", "solitária", "florestas", "frutas"]
    },
    {
        nome: "Maitaca-cabeça-azul",
        cientifico: "Pionus menstruus",
        descricao: "A maitaca-cabeça-azul é uma ave de plumagem verde com a cabeça azul, encontrada em florestas tropicais. Ela é conhecida por sua vocalização alta e por viver em bandos.",
        link: "https://www.wikiaves.com.br/wiki/maitaca-de-cabeca-azul",
        imagem: "src/images/aves/maitaca_cabeca_azul.jpg",
        tags: ["ave", "verde", "azul", "tropical", "bando"]
    },
    {
        nome: "Maitaca-verde",
        cientifico: "Pionus maximiliani",
        descricao: "A maitaca-verde é uma ave de plumagem totalmente verde, comum em áreas de floresta e cerrado no Brasil. Ela é conhecida por sua presença em bandos e por se alimentar de frutos e sementes.",
        link: "https://www.wikiaves.com.br/wiki/maitaca-verde",
        imagem: "src/images/aves/maitaca_verde.jpg",
        tags: ["ave", "verde", "bando", "floresta", "cerrado"]
    },
    {
        nome: "Maracanã-guaçu",
        cientifico: "Ara severa",
        descricao: "A maracanã-guaçu é uma grande arara de plumagem verde e bico forte, encontrada em florestas tropicais. Ela é uma ave social, frequentemente avistada em bandos e conhecida por sua habilidade de vocalização.",
        link: "https://www.wikiaves.com.br/wiki/maracana-guacu",
        imagem: "src/images/aves/maracana_guacu.jpg",
        tags: ["ave", "verde", "arara", "bando", "tropical"]
    },
    {
        nome: "Maracanã-pequena",
        cientifico: "Diopsittaca nobilis",
        descricao: "A maracanã-pequena é uma arara de pequeno porte com plumagem verde e vermelha. Ela vive em áreas de floresta e cerrado e é conhecida por seu comportamento gregário e vocalização estridente.",
        link: "https://www.wikiaves.com.br/wiki/maracana-pequena",
        imagem: "src/images/aves/maracana_pequena.jpg",
        tags: ["ave", "verde", "vermelha", "arara", "gregária"]
    },
    {
        nome: "Maracanã-verdadeira",
        cientifico: "Primolius maracana",
        descricao: "A maracanã-verdadeira é uma ave de plumagem verde-azulada e bico forte, comum em florestas e áreas de cerrado. Ela é conhecida por seu comportamento social e sua capacidade de aprendizado vocal.",
        link: "https://www.wikiaves.com.br/wiki/maracana-verdadeira",
        imagem: "src/images/aves/maracana_verdadeira.jpg",
        tags: ["ave", "verde-azulada", "arara", "gregária", "cerrado"]
    },
    {
        nome: "Marreca-toicinho",
        cientifico: "Anas bahamensis",
        descricao: "A marreca-toicinho é uma ave aquática de porte médio, conhecida por sua plumagem castanha com manchas brancas. Ela é comum em áreas de lagoas e pântanos, alimentando-se de plantas aquáticas e pequenos invertebrados.",
        link: "https://www.wikiaves.com.br/wiki/marreca-toicinho",
        imagem: "src/images/aves/marreca_toicinho.jpg",
        tags: ["ave", "aquática", "lagoas", "pântanos", "marrom"]
    },
    {
        nome: "Murucututu",
        cientifico: "Pulsatrix perspicillata",
        descricao: "O murucututu é uma coruja de grande porte, com olhos expressivos e plumagem escura. Ele vive em florestas tropicais, sendo mais ativo durante a noite, quando caça pequenos mamíferos e insetos.",
        link: "https://www.wikiaves.com.br/wiki/murucututu",
        imagem: "src/images/aves/murucututu.jpg",
        tags: ["ave", "coruja", "noturna", "florestas", "tropical"]
    },
    {
        nome: "Mutum-de-Alagoas",
        cientifico: "Pauxi mitu",
        descricao: "O mutum-de-Alagoas é uma ave rara e criticamente ameaçada de extinção, nativa da Mata Atlântica. Com sua plumagem preta e branca, é vital para a preservação da biodiversidade nas áreas onde ainda é encontrada.",
        link: "https://www.wikiaves.com.br/wiki/mutum-do-nordeste",
        imagem: "src/images/aves/mutum_de_alagoas.jpg",
        tags: ["ave", "preto", "branco", "ameaçada", "mata-atlântica"]
    },
    {
        nome: "Mutum-de-penacho",
        cientifico: "Crax fasciolata",
        descricao: "O mutum-de-penacho é uma ave grande e vistosa, conhecida por seu penacho enrolado sobre a cabeça. Ele vive em florestas tropicais e áreas de cerrado, sendo importante para a dispersão de sementes.",
        link: "https://www.wikiaves.com.br/wiki/mutum-de-penacho",
        imagem: "src/images/aves/mutum_de_penacho.jpg",
        tags: ["ave", "penacho", "floresta", "cerrado", "dispersor"]
    },
    {
        nome: "Mutum-do-sudeste",
        cientifico: "Crax blumenbachii",
        descricao: "O mutum-do-sudeste é uma ave de grande porte e plumagem preta, com um distinto bico alaranjado. Ele é encontrado em áreas remanescentes de Mata Atlântica e está ameaçado de extinção devido à perda de habitat.",
        link: "https://www.wikiaves.com.br/wiki/mutum-de-bico-vermelho",
        imagem: "src/images/aves/mutum_do_sudeste.jpg",
        tags: ["ave", "preto", "laranja", "ameaçada", "mata-atlântica"]
    },
    {
        nome: "Papagaio-cara-roxa",
        cientifico: "Amazona brasiliensis",
        descricao: "O papagaio-cara-roxa é uma ave de plumagem verde, com um distinto rosto roxo. Ele é encontrado em áreas de restinga e manguezais, sendo uma espécie ameaçada devido à destruição de seu habitat.",
        link: "https://www.wikiaves.com.br/wiki/papagaio-de-cara-roxa",
        imagem: "src/images/aves/papagaio_cara_roxa.jpg",
        tags: ["ave", "verde", "roxo", "restinga", "ameaçada"]
    },
    {
        nome: "Papagaio-charão",
        cientifico: "Amazona pretrei",
        descricao: "O papagaio-charão é uma ave de plumagem verde com detalhes vermelhos, encontrado nas florestas de araucárias no sul do Brasil. Ele é conhecido por sua vocalização estridente e seu comportamento gregário.",
        link: "https://www.wikiaves.com.br/wiki/papagaio-charao",
        imagem: "src/images/aves/papagaio_charao.jpg",
        tags: ["ave", "verde", "vermelho", "araucária", "gregário"]
    },
    {
        nome: "Papagaio-do-Congo",
        cientifico: "Psittacus erithacus",
        descricao: "O papagaio-do-Congo é uma ave famosa por sua incrível habilidade de imitar sons e palavras humanas. Ele tem plumagem cinza e é encontrado em florestas tropicais da África, sendo popular como animal de estimação.",
        link: "https://pt.wikipedia.org/wiki/Papagaio-cinzento",
        imagem: "src/images/aves/papagaio_do_congo.jpg",
        tags: ["ave", "cinza", "áfrica", "imitação", "estimada"]
    },
    {
        nome: "Papagaio-do-mangue",
        cientifico: "Amazona amazonica",
        descricao: "O papagaio-do-mangue é uma ave de plumagem verde e amarela, comum em áreas de manguezais e florestas tropicais. Ele é conhecido por seu comportamento social e sua habilidade de aprender sons.",
        link: "https://www.wikiaves.com.br/wiki/curica",
        imagem: "src/images/aves/papagaio_do_mangue.jpg",
        tags: ["ave", "verde", "amarelo", "mangue", "social"]
    },
    {
        nome: "Papagaio-moleiro",
        cientifico: "Amazona farinosa",
        descricao: "O papagaio-moleiro é uma grande espécie de papagaio, com plumagem verde e um bico forte. Ele vive em florestas tropicais e é conhecido por sua capacidade de vocalização e aprendizado de sons.",
        link: "https://www.wikiaves.com.br/wiki/papagaio-moleiro",
        imagem: "src/images/aves/papagaio_moleiro.jpg",
        tags: ["ave", "grande", "verde", "vocal", "floresta"]
    },
    {
        nome: "Papagaio-peito-roxo",
        cientifico: "Amazona vinacea",
        descricao: "O papagaio-peito-roxo é uma ave de plumagem verde e roxa, encontrada em florestas do sudeste do Brasil. Ele é uma espécie ameaçada, principalmente devido à destruição de seu habitat natural.",
        link: "https://www.wikiaves.com.br/wiki/papagaio-de-peito-roxo",
        imagem: "src/images/aves/papagaio_peito_roxo.jpg",
        tags: ["ave", "verde", "roxo", "floresta", "ameaçada"]
    },
    {
        nome: "Papagaio-verdadeiro",
        cientifico: "Amazona aestiva",
        descricao: "O papagaio-verdadeiro é uma das espécies mais populares de papagaios no Brasil, conhecido por sua plumagem verde e amarelo. Ele é amplamente encontrado em florestas e cerrados, sendo um excelente imitador de sons.",
        link: "https://www.wikiaves.com.br/wiki/papagaio-verdadeiro",
        imagem: "src/images/aves/papagaio_verdadeiro.jpg",
        tags: ["ave", "verde", "amarelo", "imitador", "floresta"]
    },
    {
        nome: "Pariri",
        cientifico: "Geotrygon montana",
        descricao: "O pariri é uma ave discreta, de plumagem marrom e cinza, encontrada em florestas densas da Amazônia. Ele é conhecido por seu comportamento solitário e pelo som suave de seu canto.",
        link: "https://www.wikiaves.com.br/wiki/pariri",
        imagem: "src/images/aves/pariri.jpg",
        tags: ["ave", "marrom", "cinza", "amazônia", "solitária"]
    },
    {
        nome: "Pavó",
        cientifico: "Pyroderus scutatus",
        descricao: "O macho mede cerca de 46 cm de comprimento e a fêmea 39 cm. O macho tem o bico de cor azul céu muito claro, quase branco. A fêmea tem o bico mais escuro, cinza roxeado. Sua vocalização é de sonoridade das mais graves da avifauna brasileira, lembrando o som que se produz ao se assoprar dentro de uma garrafa",
        link: "https://www.wikiaves.com.br/wiki/pavo",
        imagem: "src/images/aves/pavo.jpg",
        tags: ["ave", "vermelho", "preto", "pavao do mato"] 
    },
    {
        nome: "Pé-vermelho",
        cientifico: "Sula sula",
        descricao: "O pé-vermelho é uma ave marinha de plumagem branca e pés vermelhos, encontrada em regiões costeiras. Ele é um excelente pescador, mergulhando em alta velocidade para capturar peixes.",
        link: "https://www.wikiaves.com.br/wiki/pe-vermelho",
        imagem: "src/images/aves/pe_vermelho.jpg",
        tags: ["ave", "marinha", "pé-vermelho", "pesca", "costa"]
    },
    {
        nome: "Perdiz",
        cientifico: "Rhynchotus rufescens",
        descricao: "A perdiz é uma ave terrestre de plumagem acastanhada, encontrada em campos e áreas de cerrado. Ela é conhecida por seu comportamento arisco e sua habilidade de correr rapidamente em busca de abrigo.",
        link: "https://www.wikiaves.com.br/wiki/perdiz",
        imagem: "src/images/aves/perdiz.jpg",
        tags: ["ave", "terrestre", "castanha", "cerrado", "arisco"]
    },
    {
        nome: "Periquitão-maracanã",
        cientifico: "Psittacara leucophthalmus",
        descricao: "O periquitão-maracanã é uma ave de plumagem verde, com uma grande mancha vermelha na cabeça. Ele é encontrado em áreas de florestas e cerrados, sendo conhecido por seu comportamento gregário e suas vocalizações estridentes.",
        link: "https://www.wikiaves.com.br/wiki/periquitao-maracana",
        imagem: "src/images/aves/periquitao_maracana.jpg",
        tags: ["ave", "verde", "vermelho", "gregário", "cerrado"]
    },
    {
        nome: "Periquito-cara-suja",
        cientifico: "Brotogeris chiriri",
        descricao: "O periquito-cara-suja é uma ave de pequeno porte e plumagem verde, com uma coloração amarelada ao redor do bico. Ele é encontrado em áreas urbanas e florestais, sendo conhecido por seu comportamento social e suas vocalizações.",
        link: "https://www.wikiaves.com.br/wiki/cara-suja",
        imagem: "src/images/aves/periquito_cara_suja.jpg",
        tags: ["ave", "verde", "amarelo", "social", "urbano"]
    },
    {
        nome: "Periquito-rei",
        cientifico: "Eupsittula aurea",
        descricao: "O periquito-rei é uma ave de plumagem verde e amarela, encontrada em florestas e áreas de cerrado. Ele é conhecido por sua vocalização estridente e seu comportamento social em grandes bandos.",
        link: "https://www.wikiaves.com.br/wiki/periquito-rei",
        imagem: "src/images/aves/periquito_rei.jpg",
        tags: ["ave", "verde", "amarelo", "social", "cerrado"]
    },
    {
        nome: "Pica-pau-do-campo",
        cientifico: "Colaptes campestris",
        descricao: "O pica-pau-do-campo é uma ave de plumagem amarela e preta, encontrada em áreas abertas e cerrados. Ele é conhecido por sua habilidade de bicar troncos de árvores em busca de insetos.",
        link: "https://www.wikiaves.com.br/wiki/pica-pau-do-campo",
        imagem: "src/images/aves/picapau_do_campo.jpg",
        tags: ["ave", "amarelo", "preto", "cerrado", "insetívoro"]
    },
    {
        nome: "Pintassilgo",
        cientifico: "Spinus magellanicus",
        descricao: "O pintassilgo é uma pequena ave canora de plumagem amarela, muito apreciada por seu canto melodioso. Ele é encontrado em florestas e áreas abertas, sendo popular entre criadores de aves.",
        link: "https://www.wikiaves.com.br/wiki/pintassilgo",
        imagem: "src/images/aves/pintassilgo.jpg",
        tags: ["ave", "amarelo", "canoro", "melodioso", "floresta"]
    },
    {
        nome: "Pomba-asa-branca",
        cientifico: "Patagioenas picazuro",
        descricao: "A pomba-asa-branca é uma ave de porte médio, com plumagem acinzentada e uma mancha branca nas asas. Ela é encontrada em áreas rurais e urbanas, sendo conhecida por seu voo rápido e comportamento gregário.",
        link: "https://www.wikiaves.com.br/wiki/pomba-asa-branca",
        imagem: "src/images/aves/pomba_asa_branca.jpg",
        tags: ["ave", "cinza", "branco", "urbano", "gregário"]
    },
    {
        nome: "Pomba-de-bando",
        cientifico: "Zenaida auriculata",
        descricao: "A pomba-de-bando é uma ave comum em áreas abertas e urbanas, com plumagem acastanhada e comportamento gregário. Ela é conhecida por sua vocalização suave e por formar grandes bandos em busca de alimento.",
        link: "https://www.wikiaves.com.br/wiki/pomba-de-bando",
        imagem: "src/images/aves/pomba_de_bando.jpg",
        tags: ["ave", "castanho", "urbano", "gregário", "bandos"]
    },
    {
        nome: "Príncipe-negro",
        cientifico: "Lophotriccus galeatus",
        descricao: "O príncipe-negro é uma pequena ave de plumagem escura, com uma característica crista no topo da cabeça. Ele vive em florestas densas e é conhecido por seu comportamento territorial e seu canto suave.",
        link: "https://www.wikiaves.com.br/wiki/periquito-de-cabeca-preta",
        imagem: "src/images/aves/principe_negro.jpg",
        tags: ["ave", "negro", "crista", "territorial", "floresta"]
    },
    {
        nome: "Quero-quero",
        cientifico: "Vanellus chilensis",
        descricao: "O quero-quero é uma ave de comportamento territorial, muito comum em áreas abertas e campos. Ele é facilmente reconhecido por seu chamado estridente e suas patas longas.",
        link: "https://www.wikiaves.com.br/wiki/quero-quero",
        imagem: "src/images/aves/quero_quero.jpg",
        tags: ["ave", "campo", "territorial", "estridente", "patas-longas"]
    },
    {
        nome: "Sabiá-barranco",
        cientifico: "Turdus leucomelas",
        descricao: "O sabiá-barranco é uma ave de porte médio e plumagem acinzentada, encontrada em florestas e áreas de cerrado. Ele é conhecido por seu canto melodioso e por ser uma das aves mais populares no Brasil.",
        link: "https://www.wikiaves.com.br/wiki/sabia-barranco",
        imagem: "src/images/aves/sabia_barranco.png",
        tags: ["ave", "cinza", "melodioso", "floresta", "cerrado"]
    },
    {
        nome: "Sabiá-do-campo",
        cientifico: "Mimus saturninus",
        descricao: "O sabiá-do-campo é uma ave de comportamento ativo e vocalizações variadas, encontrada em áreas abertas e urbanas. Ele é conhecido por imitar o canto de outras aves e por sua presença marcante em campos e cidades.",
        link: "https://www.wikiaves.com.br/wiki/sabia-do-campo",
        imagem: "src/images/aves/sabia_do_campo.jpg",
        tags: ["ave", "imitador", "vocal", "urbano", "campo"]
    },
    {
        nome: "Sanhaçu-de-fogo",
        cientifico: "Piranga flava",
        descricao: "O sanhaçu-de-fogo é uma ave de plumagem vermelha vibrante, muito apreciada por sua beleza. Ele é encontrado em florestas e áreas de cerrado, sendo conhecido por sua alimentação baseada em frutos e insetos.",
        link: "https://www.wikiaves.com.br/wiki/sanhacu-de-fogo",
        imagem: "src/images/aves/sanhacu_de_fogo.jpg",
        tags: ["ave", "vermelho", "frutos", "insetos", "floresta"]
    }
];
