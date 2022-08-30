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
    "AMORA",
    "ARATICUM",
    "BACABA",
    "BANANA",
    "CAQUI",
    "CARAMBOLA",
    "CEREJA",
    "CUPUACU",
    "FRAMBOESA",
    "GOIABA",
    "GROSELHA",
    "JENIPAPO",
    "LARANJA",
    "MAMAO",
    "MANGABA",
    "MARACUJA",
    "MELANCIA",
    "MELAO",
    "MORANGO",
    "PESSEGO",
    "PITANGA",
    "PITAYA",
    "PUPUNHA",
    "SIRIGUELA",
    "TAMARA",
    "TAMARINDO",
    "TANGERINA",
    "TUCUMA",
  ],
  animais: [
    "ANDORINHA",
    "ABELHA",
    "BALEIA",
    "CACHORRO",
    "CAMALEAO",
    "ELEFANTE",
    "FLAMINGO",
    "GIRAFA",
    "GOLFINHO",
    "GUAXINIM",
    "HIENA",
    "IGUANA",
    "JAGUAR",
    "JACARE",
    "KAKAPO",
    "LAGARTO",
    "MUSARANHO",
    "NARVAL",
    "OVELHA",
    "PAPAGAIO",
    "PERDIZ",
    "QUATI",
    "QUEIXADA",
    "RAPOSA",
    "SARDINHA",
    "TARTARUGA",
    "TAMANDUA",
    "URUBU",
    "VEADO",
    "WALLABY",
    "XEXEU",
    "XAREU",
    "SARDINHA",
    "ZEBRA",
  ],
  flores: [
    "ORQUIDEA",
    "GIRASSOL",
    "ANTURIO",
    "AZALEIA",
    "BEGONIA",
    "BROMELIA",
    "CALENDULA",
    "CAMELIA",
    "EUFORBIA",
    "GARDENIA",
    "GERANIO",
    "HIBISCO",
    "HORTENSIA",
    "KALANCHOE",
    "JACINTO",
    "LAVANDA",
    "LISIANTO",
    "MAGNOLIA",
    "MARGARIDA",
    "MOREIA",
    "NARCISO",
    "PEONIA",
    "PERPETUA",
    "PETUNIA",
    "POINSETIA",
    "PRIMAVERA",
    "PRIMULA",
    "SAPATINHO",
    "TAGETES",
    "TULIPA",
    "VERBENA",
    "VIOLETA",
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

// funcao principal que chama as complementares
function jogar() {
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

//verifica o que esta escrito no botão e troca para o texto correto
function verificaBotao() {
  if (botaoJogar.textContent == "Salvar e Começar") {
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
    iniciaJogo();
    /*   teclas.forEach((tecla) => {
      tecla.addEventListener("touchend", editaTecla);
    });
    document.addEventListener("keydown", verificaLetra); */
  } else if (botaoJogar.textContent == "Novo Jogo") {
    palavraAnterior = palavra;
    adicionar.classList.remove("esconde");
    container.classList.remove("esconde");
    quadro.classList.remove("aparece");
    pushPalavra.classList.remove("esconde");
    titulo.classList.remove("apareceTitulo");
    teclado.removeAttribute("id");
    botaoMobile.classList.remove("mobile");
    botaoJogar.innerText = "Salvar e Começar";
    desistir.innerText = "Cancelar";
    removeBotaoAdd();
    clear();
    reiniciaTecla();
    iniciaJogo();
  }
}

// muda o design se clicado em adicionar palavra
function verificaBotaoAdd() {
  removeVerificacao();
  clicado = false;
  entradaValor = "jogador";
  descricao.textContent = "Desafie alguém adicionando palavras diferentes 🪄";
  aviso.setAttribute("id", "aviso");
  aviso.classList.remove("esconde");
  aviso.textContent =
    "❗Somente palavras com no máximo 9 letras e sem acento❗";
  entrada.classList.add("esconde");
  adicionar.classList.add("esconde");
  novaPalavra.setAttribute("id", "novaPalavra");
  pushPalavra.setAttribute("id", "botaoPush");
}

// remove os estilos aplicados no ao adicionar
function removeBotaoAdd() {
  descricao.textContent = "Selecione uma opção de tema abaixo";
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
    novaPalavra.placeholder = "Palavra Inválida";
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

// verifica se é uma letra válida e retorna maiúscula
function verificaLetra(e) {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    if (letrasRecebidas.includes(e.key)) {
      alert("Letra já adicionada!");
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
  desenha.fillText("você perdeu!", 230, 65);
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
  desenha.fillText("Parabéns", 240, 55);
  desenha.fillText("você ganhou!", 230, 65);
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
    letraPressionada == "✓" ||
    letraPressionada == "✘"
  ) {
    alert("Letra já adicionada!");
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
    e.target.innerText = "✓";
    e.target.classList.remove("b");
    e.target.classList.add("g");
  } else {
    e.target.innerText = "✘";
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
