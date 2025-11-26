
import { calcularSobreTasa } from "./funciones.js";

window.onload = () => {
  console.log(`La página está cargada`);

  let importeBase = Number(prompt(`Ingrese el importe base de la bebida:`));
  let tipoBebida = Number(prompt(`Ingrese el tipo de bebida (1 a 6):`));

  let impuesto = calcularSobreTasa(importeBase, tipoBebida);

  console.log(`La sobre tasa ambiental es de: $${impuesto}`);
};

