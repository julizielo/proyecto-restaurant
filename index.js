let enviar = document.getElementById("enviar");
enviar.addEventListener("click", () => {
  validarFormulario();
});

function validarFormulario() {
  // Obtener los valores de los campos
  let nombre = document.getElementById("nombreCompleto").value;
  let telefono = document.getElementById("tel").valueAsNumber;
  let digitos = document.getElementById("tel").value.length;
  let correo = document.getElementById("email").value;

  // Verificar que los campos no estén vacíos
  if (
    validarNombre(nombre) &&
    validarTelefono(telefono, digitos) &&
    validarCorreo(correo)
  ) {
    alert("Subscripción exitosa");
  } else {
    alert("Por favor, complete todos los campos correctamente.");
  }
}

function validarNombre(nombre) {
  let resultadoNombre;
  resultadoNombre = nombre != "" && isNaN(nombre) && nombre.length >= 2;
  if (resultadoNombre == false) {
    alert("Nombre invalido");
  }
  return resultadoNombre;
}
function validarNumero(tel) {
  return tel != null && isNaN(tel);
}
function validarCorreo(correo) {
  let resultadoCorreo;
  resultadoCorreo =
    correo != "" &&
    isNaN(correo) &&
    correo.length >= 2 &&
    correo.includes("@") &&
    correo.includes(".");
  if (resultadoCorreo == false) {
    alert("Correo invalido");
  }
  return resultadoCorreo;
}

function validarDigitos(digitos) {
  return digitos == 10 || digitos == 8;
}

function validarTelefono(tel, digitos) {
  let telValidado;
  telValidado = validarNumero(tel) && validarDigitos(digitos);
  if (telValidado == false) {
    alert("Telefono invalido");
  }
  return telValidado;
}
