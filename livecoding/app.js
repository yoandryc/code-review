// Escribe tu código aquí.// Array con al menos 10 palabras
const palabras = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio', 'lámpara', 'sol', 'computadora', 'cielo'];

/**
 * Función que recibe una palabra y un array, y devuelve las palabras más largas
 */
function bigWords(palabraReferencia, listaPalabras) {
  return listaPalabras.filter(palabra => palabra.length > palabraReferencia.length);
}

/**
 * Función que recibe un array y lo imprime en una lista (<ul>) del HTML
 */
function printArray(array) {
  const lista = document.getElementById("resultado");
  lista.innerHTML = ""; // Limpiar antes de mostrar

  array.forEach(palabra => {
    const li = document.createElement("li");
    li.textContent = palabra;
    lista.appendChild(li);
  });
}

/**
 * Función que se ejecuta cuando se hace clic en el botón
 */
function procesarEntrada() {
  const input = document.getElementById("input-palabra").value.trim();

  if (input === "") {
    alert("Por favor escribe una palabra.");
    return;
  }

  const resultado = bigWords(input, palabras);
  printArray(resultado);
}

// Evento al botón
document.getElementById("btn-filtrar").addEventListener("click", procesarEntrada);
