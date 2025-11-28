import { contieneTresEspacios } from './modelo.js';

const $texto = document.getElementById('texto');
const $btn = document.getElementById('verificar');
const $salida = document.getElementById('salida');

const mostrar = (msg) => {
  $salida.style.display = 'block';
  $salida.textContent = msg;
};

const manejarVerificacion = () => {
  const valor = $texto.value;
  const resultado = contieneTresEspacios(valor);
  mostrar(resultado ? 'verdadero — contiene al menos tres espacios.' : 'falso — menos de tres espacios.');
};

$btn.addEventListener('click', (e) => {
  e.preventDefault();
  manejarVerificacion();
});