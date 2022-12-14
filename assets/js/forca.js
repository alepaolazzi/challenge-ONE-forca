const entrada = document.querySelector("#entrada");
const jogadorEntrada = document.querySelector("#jogador");
const container = document.querySelector("#container-entrada");
const botaoJogar = document.querySelector("#comecar");
const adicionar = document.querySelector("#adicionar");
const novaPalavra = document.querySelector(".novaPalavra");
const pushPalavra = document.querySelector(".addPalavra");
const aviso = document.querySelector("#aviso");
const descricao = document.querySelector("#container-entrada h2");
const desistir = document.querySelector("#fim");
const quadro = document.querySelector("#quadro");
const teclas = document.querySelectorAll(".teclado button");
const botaoMobile = document.querySelector("#botoes");
const titulo = document.querySelector(".tema");
const teclado = document.querySelector(".teclado");
const desenha = quadro.getContext("2d");

//Objeto com os arrays de palavras
let palavras = {
  frutas: [
    "ABACATE",
    "ABACAXI",
    "ACEROLA",
    "AMEIXA",
    "AMENDOA",
    "ATEMOIA",
    "AVELA",
    "AMORA",
    "ARATICUM",
    "BACABA",
    "BABACO",
    "BERGAMOTA",
    "BACUPARI",
    "BIRIBA",
    "CAQUI",
    "CARAMBOLA",
    "CEREJA",
    "CARNAUBA",
    "CASTANHA",
    "CIRIGUELA",
    "CAMBUCI",
    "CALABURA",
    "CUPUACU",
    "DAMASCO",
    "DURIAO",
    "EMBAUBA",
    "FEIJOA",
    "FRAMBOESA",
    "GOIABA",
    "GABIROBA",
    "GRAVATA",
    "GROSELHA",
    "GUARANA",
    "GUABIROBA",
    "INAJA",
    "INHARE",
    "JENIPAPO",
    "JAMELAO",
    "JERIVA",
    "JUJUBA",
    "JACA",
    "KIWI",
    "KINKAN",
    "KARITE",
    "LARANJA",
    "LIMAO",
    "LUCUMA",
    "LOBEIRA",
    "MAMAO",
    "MANGABA",
    "MARACUJA",
    "MELANCIA",
    "MELAO",
    "MORANGO",
    "MIRTILO",
    "NECTARINA",
    "NOZ",
    "NESPERA",
    "OXICOCO",
    "PESSEGO",
    "PITANGA",
    "PITAYA",
    "PEQUI",
    "POMELO",
    "PISTACHE",
    "PUPUNHA",
    "ROMA",
    "RAMBAI",
    "SERIGUELA",
    "SAPUCAIA",
    "SAPOTI",
    "TAMARA",
    "TORANJA",
    "TAMARINDO",
    "TANGERINA",
    "TUCUMA",
    "UMBU",
    "UVAIA",
  ],
  animais: [
    "ANDORINHA",
    "ABELHA",
    "ABUTRE",
    "AGUIA",
    "ALBATROZ",
    "ANACONDA",
    "ALPACA",
    "ANTILOPE",
    "AVESTRUZ",
    "BALEIA",
    "BABUINO",
    "BAIACU",
    "BESOURO",
    "BORBOLETA",
    "BUFALO",
    "CACHORRO",
    "CAMALEAO",
    "CACATUA",
    "CAMARAO",
    "CANGURU",
    "CAPIVARA",
    "CARACOL",
    "CEGONHA",
    "CENTOPEIA",
    "CIGARRA",
    "CROCODILO",
    "CODORNA",
    "DONINHA",
    "DUGONGO",
    "ELEFANTE",
    "ESPONJA",
    "ESQUILO",
    "ENGUIA",
    "FLAMINGO",
    "FAISAO",
    "FALCAO",
    "FORMIGA",
    "FUINHA",
    "FURAO",
    "GIRAFA",
    "GOLFINHO",
    "GUAXINIM",
    "GAIVOTA",
    "GAVIAO",
    "GAZELA",
    "GOLFINHO",
    "GUEPARDO",
    "HIENA",
    "HARPIA",
    "HADOQUE",
    "HAMSTER",
    "IGUANA",
    "IMPALA",
    "IRAUNA",
    "JAGUAR",
    "JACARE",
    "JABUTI",
    "JARARACA",
    "JEGUE",
    "JAVALI",
    "JIBOIA",
    "JOANINHA",
    "JUMENTO",
    "KAKAPO",
    "KIWI",
    "KOWARI",
    "LAGARTO",
    "LACRAIA",
    "LAGARTIXA",
    "LAGOSTA",
    "LAGOSTIM",
    "LAMBARI",
    "LEOPARDO",
    "LIBELULA",
    "MUSARANHO",
    "MINHOCA",
    "MORCEGO",
    "MOSQUITO",
    "MARMOTA",
    "MARRECO",
    "NARVAL",
    "NIQUIM",
    "OVELHA",
    "OCAPI",
    "OSTRA",
    "PAPAGAIO",
    "PERDIZ",
    "PANDA",
    "PANGOLIM",
    "PANTERA",
    "PARDAL",
    "PINGUIM",
    "PIRANHA",
    "PREGUICA",
    "PERIQUITO",
    "QUATI",
    "QUEIXADA",
    "QUIMERA",
    "RAPOSA",
    "RATAZANA",
    "ROBALO",
    "SARDINHA",
    "SERIEMA",
    "SERPENTE",
    "SUCURI",
    "SURICATE",
    "SALMAO",
    "TARTARUGA",
    "TAMANDUA",
    "TAINHA",
    "TANGARA",
    "TEXUGO",
    "TILAPIA",
    "TOUPEIRA",
    "TRITAO",
    "URUBU",
    "URUMUTUM",
    "UIRARUPU",
    "VEADO",
    "VESPA",
    "VIBORA",
    "VICUNHA",
    "WALLABY",
    "WRENTIT",
    "WOMBATS",
    "XEXEU",
    "XAREU",
    "XIMANGO",
    "YNAMBU",
    "ZEBRA",
    "ZANGAO",
    "ZORRILHO",
    "ZAGLOSSO",
  ],
  flores: [
    "ANTURIO",
    "ACACIA",
    "ANEMONA",
    "ANGELICA",
    "AZALEIA",
    "BEGONIA",
    "BROMELIA",
    "CALENDULA",
    "CAMELIA",
    "CALIANDRA",
    "CINERARIA",
    "CICLAME",
    "CLEMATITE",
    "DALIA",
    "EUFORBIA",
    "ERICA",
    "FLAMBOAIA",
    "FORMIO",
    "ERICA",
    "GARDENIA",
    "GERBERA",
    "GERANIO",
    "GLICINIA",
    "GIRASSOL",
    "HIBISCO",
    "HORTENSIA",
    "HELICONIA",
    "IXORA",
    "JASMIN",
    "JACINTO",
    "KALANCHOE",
    "KAIZUKA",
    "LANTANA",
    "LAVANDA",
    "LISIANTO",
    "LOTUS",
    "MAGNOLIA",
    "MARGARIDA",
    "MOREIA",
    "MIOSOTIS",
    "NARCISO",
    "NINFEIA",
    "ORQUIDEA",
    "ONCIDIO",
    "PAPOULA",
    "PEONIA",
    "PERPETUA",
    "PETUNIA",
    "POINSETIA",
    "PRIMAVERA",
    "PRIMULA",
    "RESEDA",
    "RUSSELIA",
    "SAPATINHO",
    "SAZANCA",
    "TAGETES",
    "TULIPA",
    "VERBENA",
    "VIOLETA",
    "VIUVINHA",
    "ZINIA",
  ],
  capitais: [
    "LUANDA",
    "GABORONE",
    "MORONI",
    "CAIRO",
    "RABAT",
    "ABUJA",
    "NAIROBI",
    "OTAWWA",
    "NASSAU",
    "HAVANA",
    "BELMOPAN",
    "KINGSTON",
    "BRASILIA",
    "SANTIAGO",
    "ASSUNCAO",
    "CARACAS",
    "TIMPHU",
    "ASTANA",
    "PEQUIM",
    "BAGDA",
    "JERUSALEM",
    "TOQUIO",
    "VIENTIANE",
    "MOSCOU",
    "BERLIM",
    "VIENA",
    "MADRID",
    "BUDAPESTE",
    "ATENAS",
    "DUBLIN",
    "VALETTA",
    "CHISINAU",
    "PODGORICA",
    "AMSTERDA",
    "VARSOVIA",
    "LISBOA",
    "LONDRES",
    "BUCARESTE",
    "BELGRADO",
    "CAMBERRA",
    "PALIQUIR",
  ],
  paises: [
    "ANGOLA",
    "ARGELIA",
    "BOTSWANA",
    "CAMAROES",
    "EGITO",
    "ETIOPIA",
    "MARROCOS",
    "NIGERIA",
    "QUENIA",
    "SENEGAL",
    "SUDAO",
    "TUNISIA",
    "ZIMBABWE",
    "CANADA",
    "MEXICO",
    "BAHAMAS",
    "BARBADOS",
    "DOMINICA",
    "GUATEMALA",
    "GRANADA",
    "HAITI",
    "HONDURAS",
    "JAMAICA",
    "NICARAGUA",
    "PANAMA",
    "ARGENTINA",
    "BOLIVIA",
    "BRASIL",
    "CHILE",
    "EQUADOR",
    "GUIANA",
    "PARAGUAI",
    "SURINAME",
    "URUGUAI",
    "VENEZUELA",
    "BAREIN",
    "CAMBOJA",
    "CATAR",
    "CHINA",
    "CINGAPURA",
    "FILIPINAS",
    "IEMEN",
    "IRAQUE",
    "ISRAEL",
    "JAPAO",
    "JORDANIA",
    "KUWAIT",
    "LIBANO",
    "MALASIA",
    "MALDIVAS",
    "MIANMAR",
    "MONGOLIA",
    "NEPAL",
    "PAQUISTAO",
    "RUSSIA",
    "TAILANDIA",
    "TURQUIA",
    "VIETNA",
    "ALBANIA",
    "ALEMANHA",
    "ANDORRA",
    "ARMENIA",
    "AUSTRIA",
    "BELGICA",
    "BULGARIA",
    "CHIPRE",
    "CROACIA",
    "DINAMARCA",
    "ESLOVENIA",
    "ESPANHA",
    "ESTONIA",
    "FINLANDIA",
    "FRANCA",
    "GRECIA",
    "GEORGIA",
    "HUNGRIA",
    "IRLANDA",
    "ISLANDIA",
    "ITALIA",
    "LETONIA",
    "LITUANIA",
    "MOLDAVIA",
    "NORUEGA",
    "POLONIA",
    "PORTUGAL",
    "ROMENIA",
    "SERVIA",
    "SUECIA",
    "SUICA",
    "UCRANIA",
    "VATICANO",
    "AUSTRALIA",
    "KIRIBATI",
    "TUVALU",
    "VANUATU",
  ],
  jogador: [],
};

let palavra;
let letraPressionada;
let erro = 0;
let letrasCertas = [];
let letrasRecebidas = "";
let letraErrada;
let tem;
let entradaValor;
let clicado = true;
let palavraSecreta;
let palavraAnterior = "";
let testaJogador;

// funcao principal que chama as complementares
function jogar() {
  verificaJogador();
  if (testaJogador) {
    alert("Insira algum valor!");
  } else {
    if (clicado || entradaValor !== "jogador") {
      entradaValor = entrada.value;
    }
    verificaBotao();
    palavra = palavras[entradaValor][palavraSecreta];
    console.log(palavra);
    desenhaForca();
    desenhaLinha(palavra);
    if (palavras.jogador.length >= 1) {
      jogadorEntrada.removeAttribute("disabled");
      jogadorEntrada.setAttribute("selected", "selected");
    }
  }
}

//verifica o que esta escrito no bot??o e troca para o texto correto
function verificaBotao() {
  if (botaoJogar.textContent == "Salvar e Come??ar") {
    adicionar.classList.add("esconde");
    container.classList.add("esconde");
    quadro.classList.add("aparece");
    pushPalavra.classList.add("esconde");
    teclado.setAttribute("id", "teclado");
    titulo.classList.add("apareceTitulo");
    titulo.innerText = entradaValor.toUpperCase();
    botaoMobile.classList.add("mobile");
    botaoJogar.innerText = "Novo Jogo";
    desistir.innerText = "Desistir";
    palavraSecreta = sorteia(palavras[entradaValor].length);
    clear();
    iniciaJogo();
  } else if (botaoJogar.textContent == "Novo Jogo") {
    palavraAnterior = palavra;
    adicionar.classList.remove("esconde");
    container.classList.remove("esconde");
    quadro.classList.remove("aparece");
    pushPalavra.classList.remove("esconde");
    titulo.classList.remove("apareceTitulo");
    teclado.removeAttribute("id");
    botaoMobile.classList.remove("mobile");
    botaoJogar.innerText = "Salvar e Come??ar";
    desistir.innerText = "Cancelar";
    removeBotaoAdd();
    clear();
    reiniciaTecla();
    iniciaJogo();
  }
}

// verifica se tem palavras no jogador
function verificaJogador() {
  if (clicado == false && entradaValor == "jogador") {
    if (palavras.jogador.length == 0) {
      testaJogador = true;
    } else {
      testaJogador = false;
    }
  }
}

// muda o design se clicado em adicionar palavra
function verificaBotaoAdd() {
  removeVerificacao();
  clicado = false;
  entradaValor = "jogador";
  descricao.textContent = "Desafie algu??m adicionando palavras diferentes ????";
  aviso.setAttribute("id", "aviso");
  aviso.classList.remove("esconde");
  aviso.textContent =
    "???Somente palavras com no m??ximo 9 letras e sem acento???";
  entrada.classList.add("esconde");
  adicionar.classList.add("esconde");
  novaPalavra.setAttribute("id", "novaPalavra");
  pushPalavra.setAttribute("id", "botaoPush");
}

// remove os estilos aplicados no ao adicionar
function removeBotaoAdd() {
  descricao.textContent = "Selecione uma op????o de tema abaixo";
  aviso.removeAttribute("id");
  aviso.classList.add("esconde");
  entrada.classList.remove("esconde");
  adicionar.classList.remove("esconde");
  novaPalavra.removeAttribute("id");
  pushPalavra.removeAttribute("id");
}

// faz um push da palavra na lista
function empurraPalavra() {
  if (
    novaPalavra.value == "" ||
    Number(novaPalavra.value) ||
    novaPalavra.value.length > 9
  ) {
    novaPalavra.value = "";
    novaPalavra.placeholder = "Palavra Inv??lida";
    setTimeout(() => {
      novaPalavra.placeholder = "Digite uma palavra";
    }, 1000);
  } else {
    let palavraMaiuscula = novaPalavra.value.toUpperCase();
    palavras.jogador.push(palavraMaiuscula);
    novaPalavra.value = "";
    pushPalavra.textContent = "Adicionado!";
    setTimeout(() => {
      pushPalavra.textContent = "Adicionar";
    }, 500);
  }
}

// limpa todo o canvas
function clear() {
  desenha.clearRect(0, 0, 900, 600);
  letrasRecebidas = "";
  letrasCertas = [];
  erro = 0;
  clicado = true;
}

// desenha a forca no canvas
function desenhaForca() {
  desenha.fillStyle = "#062347";
  desenha.fillRect(92, 95, 20, 1);
  desenha.fillRect(100, 10, 2, 85);
  desenha.fillRect(100, 10, 80, 2);
  desenha.fillRect(180, 10, 2, 10);
}

//desenha as linhas
function desenhaLinha(palavra) {
  let n = 0;
  desenha.fillStyle = "#062347";
  for (let x = 0; x < palavra.length; x++) {
    desenha.fillRect(20 + n, 125, 20, 2);
    n += 30;
  }
}

//desenha o boneco no canvas
function desenhaBoneco(erros) {
  switch (erros) {
    case 1:
      //cabeca
      desenha.beginPath();
      desenha.arc(181, 28, 8, 0, 2 * Math.PI);
      desenha.stroke();
      break;
    case 2:
      //corpo
      desenha.fillStyle = "#1d1e1f";
      desenha.fillRect(180, 36, 2, 28);
      break;
    case 3:
      //bracoD
      desenha.beginPath();
      desenha.moveTo(181, 42);
      desenha.lineTo(195, 55);
      desenha.stroke();
      break;
    case 4:
      //bracoE
      desenha.beginPath();
      desenha.moveTo(181, 42);
      desenha.lineTo(164, 55);
      desenha.stroke();
      break;
    case 5:
      //pernaD
      desenha.beginPath();
      desenha.moveTo(182, 64);
      desenha.lineTo(195, 80);
      desenha.stroke();
      break;
    case 6:
      //pernaE
      desenha.beginPath();
      desenha.moveTo(180, 64);
      desenha.lineTo(165, 80);
      desenha.stroke();
      perdeu();
      removeVerificacao();
      break;
  }
}

// verifica se ?? uma letra v??lida e retorna mai??scula
function verificaLetra(e) {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    if (letrasRecebidas.includes(e.key)) {
      alert("Letra j?? adicionada!");
    } else {
      letraPressionada = e.key.toUpperCase();
      letrasRecebidas += e.key;
      direcionaLetra();
      vencedor();
    }
  } else {
    alert("Apenas Letras!");
  }
}

// desenha a letra
function desenhaLetra(letra, numero) {
  desenha.font = "20px Arial";
  desenha.fillStyle = "#000";
  if (numero == 0) {
    desenha.fillText(letra, 22, 124);
  } else {
    desenha.fillText(letra, 53 + 30 * (numero - 1), 124);
  }
}

function desenhaLetraErrada(letra) {
  desenha.font = "12px Arial";
  desenha.fillStyle = "#a1a1a1";
  desenha.fillText(letra, 22 + 15 * erro, 145);
}

// mostra a letra na tela
function direcionaLetra() {
  if (palavra.includes(letraPressionada)) {
    for (let i = 0; i < palavra.length; i++) {
      if (letraPressionada === palavra[i]) {
        desenhaLetra(palavra[i], i);
        letrasCertas.push(palavra[i]);
      }
    }
  } else {
    erro++;
    letraErrada = letraPressionada;
    desenhaLetraErrada(letraErrada);
    desenhaBoneco(erro);
  }
}

//escreve na tela em caso de vitoria
function vencedor() {
  if (palavra.length === letrasCertas.length) {
    ganhou();
    removeVerificacao();
  }
}

//sorteia uma palavra aleatoria na lista
function sorteia(arrayTamanho) {
  let resultado = Math.round(Math.random() * (arrayTamanho - 1));
  if (palavras.jogador.length > 1) {
    while (palavraSecreta == resultado) {
      resultado = Math.round(Math.random() * (arrayTamanho - 1));
    }
  }
  return resultado;
}

//escreve na tela que a partida foi perdida
function perdeu() {
  desenha.font = "12px Times New Roman";
  desenha.fillStyle = "#ee0000";
  desenha.fillText("Que pena,", 232, 55);
  desenha.fillText("voc?? perdeu!", 230, 65);
  // escreve a palavra por cima de tudo
  desenha.font = "20px Arial";
  desenha.fillStyle = "#ff0000";
  for (let i = 0; i < palavra.length; i++) {
    if (i == 0) {
      desenha.fillText(palavra[i], 22, 124);
    } else {
      desenha.fillText(palavra[i], 53 + 30 * (i - 1), 124);
    }
  }
}

//escreve na tela que a partida foi vencida
function ganhou() {
  desenha.font = "10px Times";
  desenha.fillStyle = "#00aa00";
  desenha.fillText("Parab??ns", 240, 55);
  desenha.fillText("voc?? ganhou!", 230, 65);
}

// remove os eventos no final do jogo
function removeVerificacao() {
  document.removeEventListener("keydown", verificaLetra, false);
  teclado.removeEventListener("touchstart", verificaLetraMobile, false);
  setTimeout(
    () =>
      teclas.forEach((tecla) => {
        tecla.removeEventListener("touchend", editaTecla, false);
      }),
    100
  );
}

// inicia jogo mobile

function iniciaJogo() {
  document.addEventListener("keydown", verificaLetra, false);
  teclado.addEventListener("touchstart", verificaLetraMobile, false);
  teclas.forEach((tecla) => {
    tecla.addEventListener("touchend", editaTecla, false);
  });
}

function verificaLetraMobile(e) {
  letraPressionada = e.target.innerText;
  if (
    letrasRecebidas.includes(e.target.innerText) ||
    letraPressionada == "???" ||
    letraPressionada == "???"
  ) {
    alert("Letra j?? adicionada!");
  } else if (letraPressionada.length > 1) {
    console.log("wholeAlphabet");
  } else {
    letrasRecebidas += e.target.innerText;
    direcionaMobile(e.target.innerText);
    vencedor();
  }
}

function direcionaMobile(letra) {
  if (palavra.includes(letra)) {
    for (let i = 0; i < palavra.length; i++) {
      if (letra === palavra[i]) {
        desenhaLetra(palavra[i], i);
        tem = true;
        letrasCertas.push(palavra[i]);
        vencedor();
      }
    }
  } else {
    erro++;
    letraErrada = letra;
    tem = false;
    desenhaLetraErrada(letraErrada);
    desenhaBoneco(erro);
  }
}

function editaTecla(e) {
  if (tem) {
    e.target.innerText = "???";
    e.target.classList.remove("b");
    e.target.classList.add("g");
  } else {
    e.target.innerText = "???";
    e.target.classList.remove("b");
    e.target.classList.add("r");
  }
}

function reiniciaTecla() {
  teclas.forEach((tecla) => {
    let valor = tecla.attributes.value.textContent;
    tecla.innerText = valor;
    tecla.classList.add("b");
    tecla.classList.remove("g");
    tecla.classList.remove("r");
  });
}

teclas.forEach((tecla) => {
  tecla.addEventListener("touchend", editaTecla);
});

teclado.addEventListener("touchstart", verificaLetraMobile);
adicionar.addEventListener("click", verificaBotaoAdd);
botaoJogar.addEventListener("click", jogar);
pushPalavra.addEventListener("click", empurraPalavra);
