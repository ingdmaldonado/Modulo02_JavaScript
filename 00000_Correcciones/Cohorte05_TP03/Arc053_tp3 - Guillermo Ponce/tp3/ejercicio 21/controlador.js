import { contarVocales } from './modelo.js';

const $texto = document.getElementById('texto');
const $boton = document.getElementById('contar');
const $salida = document.getElementById('salida');

const mostrar = (html, esError = false) => {
  $salida.style.display = 'block';
  $salida.innerHTML = esError ? `<span class="error">${html}</span>` : html;
};

const manejarConteo = () => {
  const valor = $texto.value;
  // usar la función del modelo (ya devuelve número)
  const cantidad = contarVocales(valor);

  mostrar(`Cantidad de vocales: <strong>${cantidad}</strong>`);
};

$boton.addEventListener('click', (e) => {
  e.preventDefault();
  manejarConteo();
});