// Lista de productos
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg" }
];

// Corrección: usar getElementById (no getElementsByName) para seleccionar el contenedor
const listaProductos = document.getElementById("lista-de-productos");

// Corrección: usar ID correcto del input (agregado en HTML como id="input-busqueda")
const inputBusqueda = document.getElementById("input-busqueda");

// Función reutilizable para mostrar productos
function mostrarProductos(lista) {
  // Limpia el contenedor
  listaProductos.innerHTML = "";

  // Recorre y muestra cada producto
  lista.forEach(producto => {
    const d = document.createElement("div");
    d.classList.add("producto");

    const ti = document.createElement("p");
    ti.classList.add("titulo");
    ti.textContent = producto.nombre;

    const imagen = document.createElement("img");
    imagen.setAttribute("src", producto.img);

    d.appendChild(ti);
    d.appendChild(imagen);
    listaProductos.appendChild(d);
  });
}

// Mostrar todos los productos al cargar
mostrarProductos(productos);

// Botón de filtro
const botonDeFiltro = document.getElementById("btn-filtrar");

botonDeFiltro.onclick = function () {
  const texto = inputBusqueda.value.trim().toLowerCase(); // Normaliza texto
  console.log("Texto ingresado:", texto);

  // Corrección: si el input está vacío, se muestran todos los productos
  if (texto === "") {
    mostrarProductos(productos);
    return;
  }

  const productosFiltrados = filtrado(productos, texto);
  mostrarProductos(productosFiltrados);
}

// Función de filtrado
const filtrado = (productos = [], texto) => {
  // Busca coincidencias por tipo o color
  return productos.filter(item =>
    item.tipo.toLowerCase().includes(texto) ||
    item.color.toLowerCase().includes(texto)
  );
};
