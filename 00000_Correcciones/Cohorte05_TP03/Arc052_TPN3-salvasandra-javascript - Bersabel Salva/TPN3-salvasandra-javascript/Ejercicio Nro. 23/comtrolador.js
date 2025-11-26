
// controlador.js
import { contieneDosS } from "./modelo.js";

window.onload = () => {
  console.log(`La página se ha cargado correctamente.`);

  let palabraUsuario = prompt(`Ingrese una palabra para analizar:`);

  let resultado = contieneDosS(palabraUsuario);

  if (resultado) {
    console.log(`La palabra "${palabraUsuario}" contiene al menos dos letras "s" o "S".`);
  } else {
    console.log(`La palabra "${palabraUsuario}" NO contiene al menos dos letras "s" o "S".`);
  }
};


