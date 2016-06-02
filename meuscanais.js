  function excluirVideo() {
      document.getElementById("areaExcluir").style.display = "block";
    }

     function cancelar() {
      document.getElementById("areaExcluir").style.display = "none";
    }

    function adicionar() {
      document.getElementById("adicionar").style.display = "block";
      document.getElementById("botaoAdd").style.display = "none";
      document.getElementById("grupo").style.display = "none";
      document.getElementById("titulo").style.display = "none";
    }

    function editarVideo(){
      document.getElementById("editarVideo").style.display = "block";
      document.getElementById("botaoDelete").style.display = "none";
      document.getElementById("botaoUpdate").style.display = "none";
    }

     function cancelarEdicao(){
      document.getElementById("editarVideo").style.display = "none";
      document.getElementById("botaoDelete").style.display = "block";
      document.getElementById("botaoUpdate").style.display = "block";
    }

    function cancelarAdicao(){
      document.getElementById("adicionar").style.display = "none";
      document.getElementById("botaoAdd").style.display = "block";
       document.getElementById("grupo").style.display = "block";
      document.getElementById("titulo").style.display = "block";
    }

    function getCanais(){
      window.location.href = "http://localhost/icomptv/canais.html";
    }

    function getPlaylists(){
      window.location.href = "http://localhost/icomptv/playlists.html";
    }

    function perfil(){
      window.location.href = "perfil.html";
    }