
import { calcularTasaSubsuelo } from "./funciones.js";

window.onload = () => {
  console.log(`La página está cargada`);

  let importeBase = Number(prompt(`Ingrese el importe base de la factura:`));
  let tasa = calcularTasaSubsuelo(importeBase);

  console.log(`La tasa de subsuelo correspondiente al 3% es: $${tasa.toFixed(2)}`);
};

