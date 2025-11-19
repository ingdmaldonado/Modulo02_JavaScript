
import { calcularPromedioNotas } from "./modelo14.js";

const form = document.querySelector("#form-ej14");
const txtResultado = document.querySelector("#resultado");

function convertirNumero(valor) {
  if (!valor) return NaN;
  const limpio = valor.replace(",", ".").trim();
  return parseFloat(limpio);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  txtResultado.textContent = "";

  const n1 = convertirNumero(document.querySelector("#nota1").value);
  const n2 = convertirNumero(document.querySelector("#nota2").value);
  const n3 = convertirNumero(document.querySelector("#nota3").value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    txtResultado.textContent = "Por favor, cargá las tres notas correctamente.";
    return;
  }

  const promedio = calcularPromedioNotas(n1, n2, n3);

  txtResultado.textContent = "El promedio de las notas es: " + promedio.toFixed(2);
});
