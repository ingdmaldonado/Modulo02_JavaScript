
// controlador.js
import { calcularTasaFiscalizacionENRE } from "./funciones.js";

window.onload = () => {
  console.log(`La página está cargada`);

  let importeBase = Number(prompt(`Ingrese el importe base de la factura:`));
  let tasaEnre = calcularTasaFiscalizacionENRE(importeBase);

  console.log(`La tasa de fiscalización (1,2%) es: $${tasaEnre.toFixed(2)}`);
};
