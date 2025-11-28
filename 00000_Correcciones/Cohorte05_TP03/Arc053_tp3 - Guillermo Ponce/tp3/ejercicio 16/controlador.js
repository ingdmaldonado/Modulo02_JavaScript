import { calcularSobreTasa, obtenerTasaPorMil } from './modelo.js';

const $importe = document.getElementById('importe');
const $clasificacion = document.getElementById('clasificacion');
const $boton = document.getElementById('calcular');
const $salida = document.getElementById('salida');

const mostrar = (html, esError = false) => {
  $salida.style.display = 'block';
  $salida.innerHTML = esError ? `<span class="error">${html}</span>` : html;
};

const manejarCalculo = () => {
  const importeVal = $importe.value;
  const codigoVal = $clasificacion.value;

  const monto = calcularSobreTasa(importeVal, codigoVal);

  if (!Number.isFinite(monto)) {
    mostrar('Entrada inválida. Verifique importe y clasificación.', true);
    return;
  }

  const tasa = obtenerTasaPorMil(codigoVal);
  mostrar(`Sobre tasa: $ ${monto.toFixed(2)} <br> (Tasa aplicada: ${tasa} ‰ )`);
};

$boton.addEventListener('click', (e) => {
  e.preventDefault();
  manejarCalculo();
});