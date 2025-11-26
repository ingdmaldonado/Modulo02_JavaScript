
// controlador.js
import { contarVocales } from "./modelo.js";

window.onload = () => {
  console.log(`La página está cargada correctamente.`);

  let textoUsuario = prompt(`Ingrese una cadena de texto para analizar:`);

  let totalVocales = contarVocales(textoUsuario);

  console.log(`La cadena ingresada fue: "${textoUsuario}"`);
  console.log(`Cantidad total de vocales encontradas: ${totalVocales}`);
};


