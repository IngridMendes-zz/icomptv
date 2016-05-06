function getInfo() {
    document.getElementById("info").style.display= "none";
    document.getElementById("recentes").style.display= "none";
    document.getElementById("informacoes").style.display= "block";
    informa.classList.add("selecionado");
    vide.classList.remove("selecionado");
}

function getVid() {
    document.getElementById("info").style.display= "block";
    document.getElementById("recentes").style.display= "block";
    document.getElementById("informacoes").style.display = "none";
    informa.classList.remove("selecionado");
    vide.classList.add("selecionado");
}