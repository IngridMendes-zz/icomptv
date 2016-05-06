function ontopico() {
  document.getElementById("hoje").style.display = "block";
}

function ontopico2() {
  document.getElementById("umasemana").style.display = "block";
}

function ontopico3() {
  document.getElementById("ummes").style.display = "block";
}

function getBusca() {
  document.getElementById("busca").style.display = "block";
  document.getElementById("login").style.display = "none";
  search.classList.add("ativo");
  account.classList.remove("ativo");
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
}

function getDuracao(){
  document.getElementById("duracoes").style.display="block";
}