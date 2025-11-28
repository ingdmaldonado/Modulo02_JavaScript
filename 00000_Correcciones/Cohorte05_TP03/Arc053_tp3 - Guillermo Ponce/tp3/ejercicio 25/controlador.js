import { noContieneDigitos } from './modelo.js';

const $texto = document.getElementById('texto');
const $btn = document.getElementById('verificar');
const $salida = document.getElementById('salida');

const mostrar = (msg) => {
  $salida.style.display = 'block';
  $salida.textContent = msg;
};

const manejarVerificacion = () => {
  const valor = $texto.value;
  const resultado = noContieneDigitos(valor);
  mostrar(resultado ? 'true — no contiene dígitos.' : 'false — contiene al menos un dígito.');
};

$btn.addEventListener('click', (e) => {
  e.preventDefault();
  manejarVerificacion();
});