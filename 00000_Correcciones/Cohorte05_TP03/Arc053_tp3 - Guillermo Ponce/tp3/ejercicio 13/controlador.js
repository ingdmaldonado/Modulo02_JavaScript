import { calcularPrecioVenta } from './modelo.js';

// Selectores
const $importe = document.getElementById('importe');
const $margen = document.getElementById('margen');
const $boton = document.getElementById('calcular');
const $salida = document.getElementById('salida');

// Handler principal (arrow function)
const manejarCalculo = () => {
  const importeVal = $importe.value;
  const margenVal = $margen.value;

  const precio = calcularPrecioVenta(importeVal, margenVal);

  if (Number.isNaN(precio)) {
    $salida.style.display = 'block';
    $salida.innerHTML = '<span class="error">Entrada inválida. Ingrese números válidos.</span>';
    return;
  }

  $salida.style.display = 'block';
  $salida.textContent = `Precio de venta (sin impuestos): $ ${precio.toFixed(2)}`;
};

// Evento
$boton.addEventListener('click', (e) => {
  e.preventDefault();
  manejarCalculo();
});