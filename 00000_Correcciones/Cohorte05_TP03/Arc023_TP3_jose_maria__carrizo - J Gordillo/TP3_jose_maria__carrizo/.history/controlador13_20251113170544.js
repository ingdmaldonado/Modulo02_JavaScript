

import { calcularPrecioVenta } from "./modelo.js";

const formulario = document.querySelector("#form-ej13");
const mensaje = document.querySelector("#msg");


function convertirNumero(valor) {
  if (!valor) return NaN;
  const limpio = valor.replace(",", ".").trim();
  return parseFloat(limpio);
}

// evento principal del formulario
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  mensaje.textContent = "";
  mensaje.className = "";

  const importe = convertirNumero(document.querySelector("#importe").value);
  const margen = convertirNumero(document.querySelector("#margen").value);

  if (isNaN(importe) || isNaN(margen)) {
    mensaje.textContent = " Por favor, ingresá números válidos.";
    mensaje.className = "error";
    return;
  }

  if (importe < 0) {
    mensaje.textContent = " El importe no puede ser negativo.";
    mensaje.className = "error";
    return;
  }

  const resultado = calcularPrecioVenta(importe, margen);

  // muestra el resultado formateado
  mensaje.textContent = ` Precio de venta sin impuestos: $${resultado.toFixed(2)}`;
  mensaje.className = "ok";
});
