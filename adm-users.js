function editarasenha() {
       document.getElementById("editarasenha").style.display = "block";
    }
    function editarTudo() {
      document.getElementById("editarTudo").style.display = "block";
      var elems = document.getElementsByClassName('dadosPessoais');
      for(var i = 0; i < elems.length; i++) {
        elems[i].style.display = 'none';
       //console.log("Elemento: " + i);
      }
    }
function ativaImg(x) {
    x.src = "dev/img/dtrash.png";
}

function normalImg(x) {
    x.src = "dev/img/trash.png";
}

function ativaImg2(x) {
    x.src = "dev/img/ativar.png";
}

function normalImg2(x) {
    x.src = "dev/img/desativado.png";
}

function AdicionarNovo() {
       document.getElementById("addnew").style.display = "block";
       document.getElementById("adicionaruser").style.display = "none";

       var elems = document.getElementsByClassName('dadosPessoais');
      for(var i = 0; i < elems.length; i++) {
        elems[i].style.display = 'none';
       //console.log("Elemento: " + i);
      }
    }

function cancelar() {
	document.getElementById("editarTudo").style.display = "none";
	document.getElementById("addnew").style.display = "none";
       document.getElementById("adicionaruser").style.display = "block";
       var elems = document.getElementsByClassName('dadosPessoais');
      for(var i = 0; i < elems.length; i++) {
        elems[i].style.display = 'block';
       //console.log("Elemento: " + i);
      }
}
