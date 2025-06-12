let listaDeNumeros = [];
let limiteSuperior = 10;

function textoDoJogo(tag, texto) {
  let local = document.querySelector(tag);
  local.innerHTML = texto;
}

textoDoJogo("h1", "Bem vindo ao jogo do número secreto");
textoDoJogo("p", "Escolha um número de 1 a 10");

function gerarNumeroAletorio() {
  let numeroAletorio = Math.floor(Math.random() * limiteSuperior) + 1;
  let numMaximo = listaDeNumeros.length;

  if (numMaximo == limiteSuperior) {
    listaDeNumeros = [];
  }

  if (listaDeNumeros.includes(numeroAletorio)) {
    gerarNumeroAletorio();
  } else {
    listaDeNumeros.push(numeroAletorio);
    console.log(listaDeNumeros);
  }
}

function verificarChute() {}

function limparCampo() {}

function reiniciarJogo() {}
