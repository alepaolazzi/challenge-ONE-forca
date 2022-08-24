const entrada = document.querySelector("#entrada");
const container = document.querySelector("#container-entrada");
const botaoJogar = document.querySelector("#comecar");
const desistir = document.querySelector("#fim");
const quadro = document.querySelector("#quadro");
const desenha = quadro.getContext("2d");

// remove o quadro da tela
quadro.classList.add("esconde");

//Objeto com os arrays de palavras
let palavras = {
  animais: [
    "CACHORRO",
    "GATO",
    "LEAO",
    "MACACO",
    "GIRAFA",
    "GOLFINHO",
    "JACARE",
    "PAPAGAIO",
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
};

let palavra;
let letraPressionada;
let erro = 0;
let letrasCertas = [];
let letrasRecebidas = "";
let letraErrada;

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
    quadro.classList.remove("esconde");
    quadro.classList.add("aparece");
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
      desenha.moveTo(182, 63);
      desenha.lineTo(195, 80);
      desenha.stroke();
      break;
    case 6:
      //pernaE
      desenha.beginPath();
      desenha.moveTo(180, 63);
      desenha.lineTo(165, 80);
      desenha.stroke();
      perdeu();
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
      console.log("letra pressionada: " + letraPressionada);
      letrasRecebidas += e.key;
      console.log("recebida: " + letrasRecebidas);
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
        console.log("certas: " + letrasCertas);
      }
    }
  } else {
    erro++;
    letraErrada = letraPressionada;
    desenhaLetraErrada(letraErrada);
    desenhaBoneco(erro);
    console.log("errada: " + letraErrada);
  }
}

//escreve na tela em caso de vitoria
function vencedor() {
  if (palavra.length === letrasCertas.length) {
    ganhou();
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
  document.removeEventListener("keydown", verificaLetra, false);
}

//escreve na tela que a partida foi vencida
function ganhou() {
  desenha.font = "10px Times";
  desenha.fillStyle = "#00aa00";
  desenha.fillText("Parabéns", 240, 55);
  desenha.fillText("você ganhou!", 230, 65);
  document.removeEventListener("keydown", verificaLetra, false);
}

botaoJogar.addEventListener("click", jogar);
document.addEventListener("keydown", verificaLetra);
