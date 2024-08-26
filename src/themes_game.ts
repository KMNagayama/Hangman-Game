const themeAnimalsWords = [
    "cachorro", "gato", "coelho", "elefante", "leao", "tigre",
    "girafa", "zebra", "cavalo", "vaca", "porco", "ovelha",
    "cabra", "pinguim", "canguru", "jacare", "gorila",
    "hipopotamo", "rinoceronte", "macaco", "urso", "raposa",
    "lobo", "camelo", "panda", "aguia", "falcao", "coruja",
    "periquito", "papagaio"
];

const themeAnimalsWordsHints = {
    "cachorro": "Animal de estimação conhecido como o melhor amigo do homem.",
    "gato": "Animal de estimação ágil e independente.",
    "coelho": "Animal pequeno com orelhas compridas e adora cenouras.",
    "elefante": "O maior mamífero terrestre, com uma tromba longa.",
    "leao": "Conhecido como o rei da selva.",
    "tigre": "Grande felino listrado encontrado na Ásia.",
    "girafa": "O animal mais alto do mundo, com um longo pescoço.",
    "zebra": "Animal africano conhecido por suas listras pretas e brancas.",
    "cavalo": "Animal grande usado para transporte e trabalho.",
    "vaca": "Animal de fazenda que nos fornece leite.",
    "porco": "Animal de fazenda conhecido por fuçar na lama.",
    "ovelha": "Animal de fazenda que nos fornece lã.",
    "cabra": "Animal de fazenda que adora subir em pedras e montanhas.",
    "pinguim": "Ave que não voa, conhecida por viver em climas frios.",
    "canguru": "Animal australiano que carrega seus filhotes em uma bolsa.",
    "jacare": "Reptil que vive em rios e pântanos.",
    "gorila": "Grande primata que vive em florestas tropicais.",
    "hipopotamo": "Grande mamífero que passa a maior parte do tempo na água.",
    "rinoceronte": "Grande mamífero com um ou dois chifres no nariz.",
    "macaco": "Primata conhecido por sua inteligência e habilidade de pular entre árvores.",
    "urso": "Grande mamífero peludo que hiberna no inverno.",
    "raposa": "Animal conhecido por sua astúcia e cauda espessa.",
    "lobo": "Animal selvagem conhecido por viver em matilhas.",
    "camelo": "Animal do deserto conhecido por suas corcovas.",
    "panda": "Urso preto e branco que se alimenta principalmente de bambu.",
    "aguia": "Ave de rapina conhecida por sua visão aguçada.",
    "falcao": "Ave de rapina veloz e ágil.",
    "coruja": "Ave noturna conhecida por seu olhar penetrante.",
    "periquito": "Pequena ave colorida frequentemente mantida como animal de estimação.",
    "papagaio": "Ave colorida conhecida por imitar a fala humana."
};

const themeObjectsWords = [
    'cadeira', 'mesa', 'lampada', 'computador', 'telefone', 'teclado',
    'mouse', 'janela', 'porta', 'livro', 'caneta', 'lapis',
    'borracha', 'mochila', 'carro', 'bicicleta', 'oculos',
    'relogio', 'televisao', 'sofa', 'cama', 'espelho',
    'armario', 'fogao', 'geladeira', 'microondas', 'ventilador',
    'guarda-chuva', 'sapato', 'prato'
];

const themeObjectsWordsHints = {
    'cadeira': "Móvel usado para sentar.",
    'mesa': "Móvel usado para apoiar objetos e realizar refeições.",
    'lampada': "Objeto usado para iluminar um ambiente.",
    'computador': "Dispositivo eletrônico usado para processar informações.",
    'telefone': "Dispositivo de comunicação portátil ou fixo.",
    'teclado': "Dispositivo usado para digitar no computador.",
    'mouse': "Dispositivo usado para controlar o cursor no computador.",
    'janela': "Abertura em uma parede que permite a entrada de luz e ventilação.",
    'porta': "Estrutura que se abre e fecha para permitir a passagem entre ambientes.",
    'livro': "Objeto que contém páginas com texto ou imagens, usado para leitura.",
    'caneta': "Objeto usado para escrever com tinta.",
    'lapis': "Objeto usado para escrever ou desenhar, geralmente feito de grafite.",
    'borracha': "Objeto usado para apagar escritos de lápis.",
    'mochila': "Bolsa usada para carregar objetos nas costas.",
    'carro': "Veículo usado para transporte terrestre.",
    'bicicleta': "Veículo de duas rodas movido pela força humana.",
    'oculos': "Acessório usado para melhorar a visão ou proteger os olhos.",
    'relogio': "Objeto usado para medir e indicar a passagem do tempo.",
    'televisao': "Aparelho eletrônico usado para assistir programas e filmes.",
    'sofa': "Móvel estofado usado para sentar, geralmente em salas de estar.",
    'cama': "Móvel usado para dormir.",
    'espelho': "Objeto que reflete a imagem de quem o olha.",
    'armario': "Móvel usado para guardar roupas e objetos.",
    'fogao': "Aparelho usado para cozinhar alimentos.",
    'geladeira': "Eletrodoméstico usado para conservar alimentos frios.",
    'microondas': "Eletrodoméstico usado para aquecer alimentos rapidamente.",
    'ventilador': "Aparelho usado para circular o ar e refrescar ambientes.",
    'guarda-chuva': "Objeto usado para proteger da chuva.",
    'sapato': "Calçado usado para proteger os pés.",
    'prato': "Utensílio usado para servir comida."
};

const themeCountriesWords = [
    'brasil', 'argentina', 'canada', 'mexico', 'portugal',
    'espanha', 'franca', 'alemanha', 'italia', 'japao',
    'china', 'russia', 'australia', 'india', 'egito',
    'africa do sul', 'nova zelandia', 'chile', 'colombia',
    'peru', 'venezuela', 'uruguai', 'paraguai', 'bolivia',
    'cuba', 'jamaica', 'coreia do sul', 'vietna', 'tailandia',
    'indonesia'
];

const themeCountriesWordsHints = {
    'brasil': "O maior país da América do Sul, conhecido pelo futebol e Carnaval.",
    'argentina': "País sul-americano conhecido pelo tango e pela carne bovina.",
    'canada': "País da América do Norte conhecido por suas vastas paisagens naturais e o xarope de bordo.",
    'mexico': "País da América do Norte famoso por sua culinária picante e pirâmides antigas.",
    'portugal': "País europeu conhecido por seu vinho do Porto e fado.",
    'espanha': "País europeu famoso pelo flamenco e pela Paella.",
    'franca': "País europeu conhecido pela Torre Eiffel e sua culinária sofisticada.",
    'alemanha': "País europeu famoso por sua cerveja e o festival Oktoberfest.",
    'italia': "País europeu famoso por sua arte, moda e culinária, especialmente massas e pizzas.",
    'japao': "País asiático conhecido por sua tecnologia avançada e cultura samurai.",
    'china': "País asiático famoso pela Grande Muralha e sua antiga civilização.",
    'russia': "O maior país do mundo, conhecido por seu frio intenso e a Praça Vermelha.",
    'australia': "País-continente conhecido pelo Outback e cangurus.",
    'india': "País asiático conhecido por seu Taj Mahal e diversidade cultural.",
    'egito': "País africano famoso pelas pirâmides e a Esfinge.",
    'africa do sul': "País africano conhecido por seus safáris e a Montanha da Mesa.",
    'nova zelandia': "País oceânico conhecido por suas paisagens utilizadas em filmes como O Senhor dos Anéis.",
    'chile': "País sul-americano com uma longa costa no Pacífico e as Cordilheiras dos Andes.",
    'colombia': "País sul-americano conhecido pelo café e o carnaval de Barranquilla.",
    'peru': "País sul-americano famoso por Machu Picchu e a cultura Inca.",
    'venezuela': "País sul-americano conhecido por suas belezas naturais e reservas de petróleo.",
    'uruguai': "Pequeno país sul-americano conhecido por suas praias e futebol.",
    'paraguai': "País sul-americano sem litoral, conhecido por sua produção de soja.",
    'bolivia': "País sul-americano conhecido pelo Salar de Uyuni e pela diversidade cultural.",
    'cuba': "País caribenho famoso por sua música, dança e charutos.",
    'jamaica': "Ilha caribenha conhecida pelo reggae e belas praias.",
    'coreia do sul': "País asiático conhecido por sua tecnologia e a cultura K-pop.",
    'vietna': "País asiático conhecido por sua história de guerra e paisagens cênicas.",
    'tailandia': "País asiático conhecido por suas praias e templos budistas.",
    'indonesia': "País do sudeste asiático composto por milhares de ilhas."
};

let selectedWords: string[] = [];
let selectedHints: { [key: string]: string } = {};


document.getElementById('animals-theme')!.addEventListener('click', () => {
    selectedHints = themeAnimalsWordsHints;
    startGame(themeAnimalsWords);
});

document.getElementById('objects-theme')!.addEventListener('click', () => {
    selectedHints = themeObjectsWordsHints;
    startGame(themeObjectsWords);
});

document.getElementById('countries-theme')!.addEventListener('click', () => {
    selectedHints = themeCountriesWordsHints;
    startGame(themeCountriesWords);
});

function startGame(words: string[]) {
    selectedWords = words;

    const selectedWord: string = escolherPalavraAleatoria(words);

    salvarNoSessionStorage('selectedWord', selectedWord);

    const hint: string = selectedHints[selectedWord];
    salvarNoSessionStorage('selectedHint', hint);

    redirecionarParaPagina("ready.html");
}

function escolherPalavraAleatoria(words: string[]): string {
    const randomIndex: number = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function salvarNoSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
}

function redirecionarParaPagina(pagina: string) {
    window.location.href = pagina;
}