
// controlador.js
import { contarConsonantes } from "./modelo.js";

window.onload = () => {
  console.log(`La página está cargada correctamente.`);

  let textoUsuario = prompt(`Ingrese una cadena de texto para analizar:`);

  let totalConsonantes = contarConsonantes(textoUsuario);

  console.log(`La cadena ingresada fue: "${textoUsuario}"`);
  console.log(`Cantidad total de consonantes encontradas: ${totalConsonantes}`);
};


