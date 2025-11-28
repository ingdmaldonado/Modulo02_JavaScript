// importamos las funciones desde modelo.js
import { calcularImporteAgua } from "./modelo.js";
import { calculoTasaSubsuelo } from "./modelo.js";
import { calculoTasaFiscalizacion } from "./modelo.js";

window.onload=()=>{
    console.log(`El programa esta corriendo...`);
    // declaramos la variable y su ingreso. Tambien se verifica que se ingresa correctamente.
    let metrosCubicos=Number(prompt("Ingrese los metros cubicos: "));
    while(isNaN(metrosCubicos)|| metrosCubicos<0){
        metrosCubicos=Number(prompt("Error. Vuelva a ingresar los metros cubicos: "));
    }
                         // EJERCICIO N°17
    let importeBaseFinal=calcularImporteAgua(metrosCubicos); //se ingresan los parametro de la funcion. 
    console.log(`El importe final es: ${importeBaseFinal}`); // se muetras el importe base.

                        // EJERCICIO N°18
    let resultado=calculoTasaSubsuelo(importeBaseFinal); // ingresa el parametro de la funcion.
    console.log(`La Tasa de Subsuelo es de: ${resultado}`); // se muestra la tasa de subsuelo.

                        // EJERCICIO N°19
    let tasaFinalizacionEnre=calculoTasaFiscalizacion(importeBaseFinal); // ingresa el parametro de la funcion.
    console.log(`La tasa de Fiscalizacion ENRE es: ${tasaFinalizacionEnre}`); // se muestra la tasa de fiscalizacion ENRE.
};