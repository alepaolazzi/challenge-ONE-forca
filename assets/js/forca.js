const entrada = document.querySelector("#entrada");
const container = document.querySelector("#container-entrada");
const botaoJogar = document.querySelector("#comecar");
const desistir = document.querySelector("#fim");
const quadro = document.querySelector("#quadro");
const teclas = document.querySelectorAll(".teclado button");
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
    "VIETIANE",
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
};

let palavra;
let letraPressionada;
let erro = 0;
let letrasCertas = [];
let letrasRecebidas = "";
let letraErrada;
let tem;

// funcao principal que chama as complementares
function jogar() {
  let entradaValor = entrada.value;
  let palavraSecreta = sorteia(palavras[entradaValor].length);
  palavra = palavras[entradaValor][palavraSecreta];
  console.log(palavra);
  verificaBotao();
  desenhaForca();
  desenhaLinha(palavra);
}

//verifica o que esta escrito no botão e troca para o texto correto
function verificaBotao() {
  if (botaoJogar.textContent == "Salvar e Começar") {
    container.classList.add("esconde");
    quadro.classList.add("aparece");
    teclado.setAttribute("id", "teclado");
    botaoJogar.innerText = "Novo Jogo";
    desistir.innerText = "Desistir";
  } else if (botaoJogar.textContent == "Novo Jogo") {
    location.reload();
  }
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
      fimDeJogo();
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
    fimDeJogo();
  }
}

//sorteia uma palavra aleatoria na lista
function sorteia(arrayTamanho) {
  return Math.round(Math.random() * (arrayTamanho - 1));
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
function fimDeJogo() {
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

function verificaLetraMobile(e) {
  letraPressionada = e.target.innerText;
  if (
    letrasRecebidas.includes(e.target.innerText) ||
    letraPressionada == "✓" ||
    letraPressionada == "✘"
  ) {
    alert("Letra já adicionada!");
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
    e.target.classList.add("b");
  } else {
    e.target.innerText = "✘";
    e.target.classList.add("r");
  }
}

teclas.forEach((tecla) => {
  tecla.addEventListener("touchend", editaTecla);
});

teclado.addEventListener("touchstart", verificaLetraMobile);
botaoJogar.addEventListener("click", jogar);
document.addEventListener("keydown", verificaLetra);
