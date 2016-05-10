function getDescr(){
	  document.getElementById("curta").style.transform = "rotate(180deg)";
	   document.getElementById("longa").style.display = "block";
}

window.onload = function() {
  document.getElementById("curtiu").src = "dev/img/like.png";
  document.getElementById("naocurtiu").src = "dev/img/dislike.png";
}