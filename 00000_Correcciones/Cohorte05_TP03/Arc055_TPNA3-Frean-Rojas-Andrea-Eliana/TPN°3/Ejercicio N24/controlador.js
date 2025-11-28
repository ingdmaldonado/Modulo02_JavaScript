// Importa la función cantidadEspaciosEnBlancos desde el archivo modelo.js
import { cantidadEspaciosEnBlancos } from "./modelo.js";

window.onload=()=>{
    console.log(`El programa esta corriendo...`);
    let texto=prompt(`Ingrese el texto que desea:`);
    let espaciosEnBlanco=cantidadEspaciosEnBlancos(texto); // Llamamos a la función y se pasa el parametro.
    console.log(`El texto es: ${texto}`); // Muestra el texto que ingresó el usuario.
    console.log(espaciosEnBlanco); // Muestra el resultado devuelto por la función.
};