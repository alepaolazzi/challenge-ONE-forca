const quadro = document.querySelector("#forca");
const desenha = quadro.getContext("2d");

let erro = 0;
let intervalo = setInterval(somaErro, 700);

function desenhaForca() {
  desenha.fillStyle = "#062347";
  desenha.fillRect(92, 95, 20, 1);
  desenha.fillRect(100, 10, 2, 85);
  desenha.fillRect(100, 10, 80, 2);
  desenha.fillRect(180, 10, 2, 10);
}

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
      break;
  }
}

desenhaForca();

// função que mostra o boneco aos poucos
function somaErro() {
  if (erro < 6) {
    erro++;
    desenhaBoneco(erro);
    console.log(erro);
  } else {
    clearInterval(intervalo);
  }
}
