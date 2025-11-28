import { evaluarNota } from './modelo.js';

const $prom = document.getElementById('promedio');
const $btn = document.getElementById('evaluar');
const $salida = document.getElementById('salida');

const mostrar = (texto, esError = false) => {
  $salida.style.display = 'block';
  $salida.innerHTML = esError ? `<span class="error">${texto}</span>` : texto;
};

const manejarEvaluacion = () => {
  const valor = $prom.value;
  const resultado = evaluarNota(valor);

  if (resultado === "Entrada inválida") {
    mostrar("Entrada inválida. Ingrese una nota numérica entre 0 y 10.", true);
    return;
  }

  mostrar(`Resultado: ${resultado}`);
};

$btn.addEventListener('click', (e) => {
  e.preventDefault();
  manejarEvaluacion();
});