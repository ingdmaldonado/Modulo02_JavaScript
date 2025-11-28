import { tieneDosEss } from './modelo.js';

const $palabra = document.getElementById('palabra');
const $btn = document.getElementById('verificar');
const $salida = document.getElementById('salida');

const mostrar = (texto) => {
  $salida.style.display = 'block';
  $salida.textContent = texto;
};

const manejarVerificacion = () => {
  const valor = $palabra.value;
  const resultado = tieneDosEss(valor);
  mostrar(resultado ? 'Verdadero — contiene al menos dos "s".' : 'Falso — no contiene al menos dos "s".');
};

$btn.addEventListener('click', (e) => {
  e.preventDefault();
  manejarVerificacion();
});