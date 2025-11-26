
// controlador.js
import { contieneTresEspacios } from "./modelo.js";

window.onload = () => {
  console.log("La página se ha cargado correctamente.");

  let textoUsuario = prompt("Ingrese una cadena de texto para analizar:");

  let resultado = contieneTresEspacios(textoUsuario);

  if (resultado) {
    console.log(`La cadena ingresada contiene al menos tres espacios en blanco.`);
  } else {
    console.log(`La cadena ingresada NO contiene tres espacios en blanco.`);
  }
};


