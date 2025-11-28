import { calcularImporteAgua } from './modelo.js';

const $m3 = document.getElementById('m3');
const $btn = document.getElementById('calcular');
const $salida = document.getElementById('salida');

const mostrar = (html, esError = false) => {
  $salida.style.display = 'block';
  $salida.innerHTML = esError ? `<span class="error">${html}</span>` : html;
};

const manejarCalculo = () => {
  const valor = $m3.value;
  const importe = calcularImporteAgua(valor);

  if (!Number.isFinite(importe)) {
    mostrar('Entrada inválida. Ingrese un número de m³ válido (≥ 0).', true);
    return;
  }

  mostrar(`Importe base a pagar: $ ${importe.toFixed(2)}`);
};

$btn.addEventListener('click', (e) => {
  e.preventDefault();
  manejarCalculo();
});