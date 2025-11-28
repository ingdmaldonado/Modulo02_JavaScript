// ...existing code...
import { calcularDosisInsulina } from './modelo.js';

const $glucosa = document.getElementById('glucosa');
const $peso = document.getElementById('peso');
const $btn = document.getElementById('calcular');
const $salida = document.getElementById('salida');

const mostrar = (html, esError = false) => {
  $salida.style.display = 'block';
  $salida.innerHTML = esError ? `<span class="error">${html}</span>` : html;
};

const obtenerTipoSeleccionado = () => {
  const radios = document.querySelectorAll('input[name="tipo"]');
  for (const r of radios) if (r.checked) return r.value;
  return null;
};

const manejarCalculo = () => {
  const gVal = $glucosa.value;
  const pVal = $peso.value;
  const tipo = obtenerTipoSeleccionado();

  const dosis = calcularDosisInsulina(gVal, pVal, tipo);

  if (!Number.isFinite(dosis)) {
    mostrar('Entrada inválida. Verifique glucosa, peso y tipo.', true);
    return;
  }

  mostrar(`Dosis recomendada (valor educativo): ${dosis.toFixed(2)} unidades (aprox.)`);
};

$btn.addEventListener('click', (e) => {
  e.preventDefault();
  manejarCalculo();
});