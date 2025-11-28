import { calcularTasaENRE, PORCENTAJE_ENRE } from './modelo.js';

const $importe = document.getElementById('importe');
const $btn = document.getElementById('calcular');
const $salida = document.getElementById('salida');

const mostrar = (html, esError = false) => {
  $salida.style.display = 'block';
  $salida.innerHTML = esError ? `<span class="error">${html}</span>` : html;
};

const manejarCalculo = () => {
  const valor = $importe.value;
  const tasa = calcularTasaENRE(valor);
  if (!Number.isFinite(tasa)) {
    mostrar('Entrada inválida. Ingrese un importe base válido (número ≥ 0).', true);
    return;
  }
  mostrar(`Tasa ENRE (${PORCENTAJE_ENRE}%): $ ${tasa.toFixed(2)}`);
};

$btn.addEventListener('click', (e) => {
  e.preventDefault();
  manejarCalculo();
});