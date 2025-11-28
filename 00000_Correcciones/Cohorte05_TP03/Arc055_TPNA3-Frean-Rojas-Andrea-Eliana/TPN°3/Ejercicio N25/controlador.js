// Importamos la función noContieneNumeros desde el archivo modelo.js
import { noContieneNumeros } from "./modelo.js";

window.onload=()=>{
    console.log(`El programa esta corriendo...`);
    let texto=prompt(`Ingrese el texto:`); // Pedimos al usuario que ingrese un texto.
    let digitoNumerico=noContieneNumeros(texto);// Llamamos a la función noContieneNumeros pasándole el texto ingresado.
    console.log(digitoNumerico);// Muestra el resultado devuelto por la función.
};