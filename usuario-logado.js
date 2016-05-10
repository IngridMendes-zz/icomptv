//avaliação de vídeo
function bigImg(x) {
    x.src = "dev/img/lcolor.png";
}
function normalImg(x) {
    x.src = "dev/img/like.png";
}
function bigImg2(x) {
    x.src = "dev/img/dcolor.png";
}
function normalImg2(x) {
    x.src = "dev/img/dislike.png";
}
function curtiu(){
  document.getElementById("curtiu").src = "dev/img/lcolor.png !important";
}
function naocurtiu(){
  document.getElementById("naocurtiu").src = "dev/img/dcolor.png !important";
}

//navbar
window.onload = function() {

	var elems = document.getElementsByClassName('logado');
	    for(var i = 0; i < elems.length; i++) {
	      elems[i].style.display = 'block';
	      console.log = "oi";
	    }
	};

}

function getNotify() {
    document.getElementById("notify").style.display = "block";
}