import { calcularImporteAgua } from "./funciones.js";

window.onload = () => {
  console.log(`La página está cargada`);

  let consumoLeido = Number(prompt(`Ingrese el consumo en m³:`));
  let importe = calcularImporteAgua(consumoLeido);

  console.log(`El importe base a pagar por ${consumoLeido} m³ es: $${importe.toFixed(2)}`);
};
