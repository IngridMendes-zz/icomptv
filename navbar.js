function getBusca() {
  document.getElementById("busca").style.display = "block";
  document.getElementById("login").style.display = "none";
  search.classList.add("ativo");
  account.classList.remove("ativo");
}

function getAutentica() {
  document.getElementById("bemvindo").style.display = "block";
  document.getElementById("principal").style.display = "none";
}

function getAtualiza() {
  document.getElementById("bemvindo").style.display = "none";
  document.getElementById("atuali").style.display = "block";
  document.getElementById("principal").style.display = "none";
}

function getCadastro() {
  document.getElementById("cadastroo").style.display = "block";
  document.getElementById("principal").style.display = "none";
}

function getCancelar() {
  document.getElementById("cadastroo").style.display = "none";
  document.getElementById("atuali").style.display = "none";
  document.getElementById("principal").style.display = "block";
}

function getSenha() {
  document.getElementById("novo").style.display = "block";
  document.getElementById("principal").style.display = "none";
}
    
function getLogin() {
  document.getElementById("login").style.display = "block";
  document.getElementById("busca").style.display = "none";
  search.classList.remove("ativo");
  account.classList.add("ativo");
}

function getFiltros() {
  document.getElementById("options").style.display= "block";
  document.getElementById("delimitador").style.display= "block";
  document.getElementById("delimitador2").style.display= "block";
  document.getElementById("outros").style.transform = "rotate(180deg)";
}

function getDuracao(){
  document.getElementById("duracoes").style.display="block";
}