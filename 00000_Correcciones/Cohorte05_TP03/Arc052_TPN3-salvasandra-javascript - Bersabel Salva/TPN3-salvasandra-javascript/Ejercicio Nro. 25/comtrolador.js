
// controlador.js
import { noContieneNumeros } from "./modelo.js";

window.onload = () => {
  console.log("La página se ha cargado correctamente.");

  let textoUsuario = prompt("Ingrese una cadena de texto para analizar:");

  let resultado = noContieneNumeros(textoUsuario);

  if (resultado) {
    console.log("La cadena no contiene ningún número.");
  } else {
    console.log("La cadena contiene al menos un número.");
  }
};


