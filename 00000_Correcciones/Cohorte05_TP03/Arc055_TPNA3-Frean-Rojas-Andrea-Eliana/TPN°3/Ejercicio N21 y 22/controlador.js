// importa las funciones desde el archivo modelo.js
import { calculoCantidadVocales } from "./modelo.js";
import { calculoConsonantes } from "./modelo.js";

window.onload=()=>{
    console.log(`El programa esta corriendo...`);
    let texto=prompt(`Ingrese el texto:`);
    // EJERCICIO N°21
    let cantidadVocales=calculoCantidadVocales(texto);
    console.log(`El texto es: ${texto}`);
    console.log(`Tiene ${cantidadVocales} vocales`);
    // EJERCICIO N°22
    let cantidadConsonante=calculoConsonantes(texto);
    console.log(`Tiene ${cantidadConsonante} consonantes`);
};