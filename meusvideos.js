function excluirVideo() {
      document.getElementById("areaExcluir").style.display = "block";
    }

     function cancelar() {
      document.getElementById("areaExcluir").style.display = "none";
    }

    function fecharmsg(){
    document.getElementById("mensagem").style.display = "none";
  }

  function ativaImg(x) {
    x.src = "dev/img/dtrash.png";
}

function normalImg(x) {
    x.src = "dev/img/trash.png";
}

     function adicionarVideo(){
    document.getElementById("mensagem").style.display = "block";
    document.getElementById("adicionar").style.display = "none";
      document.getElementById("botaoAdd").style.display = "block";
       document.getElementById("grupo").style.display = "block";
      document.getElementById("titulo").style.display = "block";
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

    function meuscanais(){
      window.location.href = "meuscanais.html";
    }

    function minhasplaylists(){
      window.location.href = "minhasplaylists.html";
    }

    
    function perfil(){
      window.location.href = "perfil.html";
    }

    var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
  var label  = input.nextElementSibling,
    labelVal = label.innerHTML;

  input.addEventListener( 'change', function( e )
  {
    var fileName = '';
    fileName = e.target.value.split( '\\' ).pop();

    if( fileName )
      label.innerHTML = fileName;
    else {
      label.innerHTML = labelVal;
    }
  });
});