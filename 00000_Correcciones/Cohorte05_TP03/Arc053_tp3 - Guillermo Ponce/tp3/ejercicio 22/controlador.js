import { contarConsonantes } from './modelo.js';

const $texto = document.getElementById('texto');
const $boton = document.getElementById('contar');
const $salida = document.getElementById('salida');

const mostrar = (html) => {
  $salida.style.display = 'block';
  $salida.innerHTML = html;
};

const manejarConteo = () => {
  const valor = $texto.value;
  const cantidad = contarConsonantes(valor);
  mostrar(`Cantidad de consonantes: <strong>${cantidad}</strong>`);
};

$boton.addEventListener('click', (e) => {
  e.preventDefault();
  manejarConteo();
});