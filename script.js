document
  .getElementById('botaoEnviar')
  .addEventListener('click', validaFormulario)

/*function validaFormulario (){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != "") {
  alert("Prontinho! Você receberá as novidades por email.")
  }else{
  alert("Por favor, preencha os campos de nome, email e telefone.")
  }
 }*/

function validaFormulario() {
  var nome = document.getElementById('nome').value
  var email = document.getElementById('email').value
  var tel = document.getElementById('tel').value

  if (nome != '' && email != '' && tel != '') {
    alert('Prontinho! Você receberá as novidades por email.')
  } else {
    alert('Por favor, preencha os campos de nome, email e telefone.')
  }
}
