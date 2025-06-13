let listaDeNumeros = [];
let limiteSuperior = 10;
let numeroSecreto = gerarNumeroAletorio();
let tentativas = 1;
console.log(numeroSecreto);
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
    return gerarNumeroAletorio();
  } else {
    listaDeNumeros.push(numeroAletorio);
    // console.log(listaDeNumeros);
    return numeroAletorio;
  }
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  console.log(chute);
  if (chute == numeroSecreto) {
    textoDoJogo("h1", "Acertou!");
    textoDoJogo("p", `Você acertou em ${tentativas}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (chute > numeroSecreto) {
    textoDoJogo("p", "O número secréto é menor");
    tentativas++;
    limparCampo();
  } else {
    textoDoJogo("p", "O número secréto é maior");
    tentativas++;
    limparCampo();
  }
}

function limparCampo() {
  document.querySelector("input").value = "";
}

function reiniciarJogo() {
  window.location.reload();
  let tentativas = 1;
  limparCampo();
  textoDoJogo("h1", "Bem vindo ao jogo do número secreto");
  textoDoJogo("p", "Escolha um número de 1 a 10");
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
