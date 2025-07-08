//* se selecciona el formulario por ID (antes se usaba un ID que no existía)
const formulario = document.querySelector("#formulario");

// ✅ Evento submit del formulario
formulario.onsubmit = function (event) {
  event.preventDefault(); //! Antes era e.prevent() -> Incorrecto

  // ✅ Capturamos los elementos del formulario usando sus nombres
  const nombreInput = formulario.elements["name"];
  const edadInput = formulario.elements["age"];
  const nacionalidadSelect = formulario.elements["nationality"];

  const nombre = nombreInput.value.trim();
  const edad = parseInt(edadInput.value);
  const nacionalidad = nacionalidadSelect.value;

  // ✅ Limpiamos posibles errores anteriores
  nombreInput.classList.remove("error");
  edadInput.classList.remove("error");

  let esValido = true;

  //!Antes no se validaba correctamente si la edad era un número
  if (nombre.length === 0) {
    nombreInput.classList.add("error");
    esValido = false;
  }

  if (isNaN(edad) || edad < 18 || edad > 120) {
    edadInput.classList.add("error");
    esValido = false;
  }

  //*Si los datos son válidos, agregamos el invitado
  if (esValido) {
    agregarInvitado(nombre, edad, nacionalidad);
    formulario.reset(); // *impiamos el formulario después de agregar
  }
};

//*Función para agregar invitado a la lista
function agregarInvitado(nombre, edad, nacionalidad) {
  // *Convertimos el código de nacionalidad en un texto legible
  const nacionalidades = {
    ar: "Argentina",
    mx: "Mexicana",
    vnzl: "Venezolana",
    per: "Peruana"
  };

  const lista = document.getElementById("lista-invitados");

  // *Creamos contenedor del nuevo invitado
  const elemento = document.createElement("div");
  elemento.classList.add("elemento-lista"); // Clase para aplicar estilo si se desea

  // *Función para agregar cada campo con su valor
  function crearCampo(label, valor) {
    const parrafo = document.createElement("p");
    parrafo.innerHTML = `<strong>${label}:</strong> ${valor}`;
    elemento.appendChild(parrafo);
  }

  crearCampo("Nombre", nombre);
  crearCampo("Edad", edad);
  crearCampo("Nacionalidad", nacionalidades[nacionalidad] || nacionalidad);

  // *Botón para eliminar invitado individual
  const botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";

  // *Al hacer clic, eliminamos todo el bloque del invitado
  botonBorrar.onclick = function () {
    elemento.remove();
  };

  elemento.appendChild(botonBorrar);
  lista.appendChild(elemento);
}
