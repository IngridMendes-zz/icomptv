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
    function editarNome(){
       document.getElementById("editarNome").style.display="block";
    }

    function editarEmail(){
       document.getElementById("editarEmail").style.display="block";
    }

    function editarSenha(){
       document.getElementById("editarSenha").style.display="block";
    }

    function cancelarNome(){
       document.getElementById("editarNome").style.display="none";
    }

    function cancelarEmail(){
       document.getElementById("editarEmail").style.display="none";
    }

    function cancelarSenha(){
       document.getElementById("editarSenha").style.display="none";
    }

    function getDuracao(){
      document.getElementById("duracoes").style.display="block";
    }

    function getCanais(){
      window.location.href = "http://localhost/icomptv/canais.html";
    }

    function getPlaylists(){
      window.location.href = "http://localhost/icomptv/playlists.html";
    }

    function meusvideos(){
      window.location.href = "meusvideos.html";
    }