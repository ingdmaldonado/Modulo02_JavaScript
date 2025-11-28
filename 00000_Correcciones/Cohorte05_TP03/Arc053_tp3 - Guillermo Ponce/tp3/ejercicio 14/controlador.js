import { promedioNotas } from './modelo.js';

const $n1 = document.getElementById('nota1');
const $n2 = document.getElementById('nota2');
const $n3 = document.getElementById('nota3');
const $btn = document.getElementById('calcular');
const $salida = document.getElementById('salida');

const mostrarResultado = (text, isError = false) => {
  $salida.style.display = 'block';
  $salida.innerHTML = isError ? `<span class="error">${text}</span>` : text;
};

const manejarCalculo = () => {
  const n1 = $n1.value;
  const n2 = $n2.value;
  const n3 = $n3.value;

  const promedio = promedioNotas(n1, n2, n3);

  if (Number.isNaN(promedio)) {
    mostrarResultado('Entrada inválida. Ingrese tres números válidos.', true);
    return;
  }

  mostrarResultado(`Promedio: ${promedio.toFixed(2)}`);
};

$btn.addEventListener('click', (e) => {
  e.preventDefault();
  manejarCalculo();
});