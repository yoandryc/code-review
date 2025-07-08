const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

//!Error Se usaba querySelector('name') (sin punto) y querySelector('#blog') cuando en el HTML era class.
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

//*Mejora: obtenemos referencias a los elementos del input y botón
const $btn = document.getElementById('searchBtn');
const $input = document.getElementById('username');

//*Mejora: función auxiliar para limpiar los campos antes de mostrar nueva información
function clearFields() {
  $n.textContent = 'Cargando...';
  $b.textContent = '';
  $l.textContent = '';
}

//*Se añadió "async" a la función y se usa try/catch
//*Esta función consulta la API y muestra los datos del usuario
async function displayUser(username) {
  clearFields(); //*Limpia campos antes de cargar nuevos datos
  $btn.disabled = true; //*  desactiva el botón durante la carga

  try {
    const response = await fetch(`${usersEndpoint}/${username}`);

    //*Error no se verificaba si la respuesta era exitosa
    if (!response.ok) throw new Error(`Usuario no encontrado (${response.status})`);

    const data = await response.json();

    //*se agregan mensajes por defecto si los campos están vacíos
    $n.textContent = data.name || 'Nombre no disponible';
    $b.textContent = data.blog || 'Blog no disponible';
    $l.textContent = data.location || 'Ubicación no disponible';

  } catch (err) {
    //* captura cualquier error y lo pasa a la función de manejo
    handleError(err);
  } finally {
    $btn.disabled = false; // ✅ Mejora: vuelve a activar el botón después
  }
}

//! Error se usaba `n.textContent` en lugar de `$n.textContent`
// Manejo centralizado de errores
function handleError(err) {
  console.error('OH NO!', err);
  $n.textContent = `Algo salió mal: ${err.message}`;
  $b.textContent = '';
  $l.textContent = '';
}

//*se validó que el botón de búsqueda escuche el evento correctamente
$btn.addEventListener('click', () => {
  const username = $input.value.trim();

  //*Validación básica para no enviar cadenas vacías
  if (username) {
    displayUser(username);
  }
});

// *Por defecto se hace una búsqueda al cargar la página
displayUser('yoandryc');
