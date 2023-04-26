let enviar = document.getElementById("enviar");
enviar.addEventListener("click", () => {
  validarFormulario();
});

function validarFormulario() {
  // Obtener los valores de los campos
  let nombre = document.getElementById("nombreCompleto").value;
  let telefono = document.getElementById("tel").value;
  let correo = document.getElementById("email").value;

  // Verificar que los campos no estén vacíos
  if (nombre == "" || telefono == "" || correo == "") {
    alert("Por favor, complete todos los campos.");
  } else {
    alert("Subscripción exitosa");
  }
}
