// importamos la funcion condicionDeNota desde modelo.js
import { condicionDeNota } from "./modelo.js";

window.onload=()=>{
    console.log(`El programa esta corriendo...`);
    // declara e ingresa la nota.
    let notaIngresada=Number(prompt("Ingrese la nota:"));
    // verifica que la nota ingresada este bien.
    while(isNaN(notaIngresada)|| notaIngresada<0 || notaIngresada>10){
        notaIngresada=Number(prompt("Error, nota no valida.Vuelva a ingresar la nota:"));
    }
    // ingresa el parametro de la funcion.
    let condicion=condicionDeNota(notaIngresada);
    // muestra la nota ingresada y la condicion del alumno.
    console.log(`La nota Ingresada es: ${notaIngresada}`);
    console.log(`La condicion evaluativa es: ${condicion}`);
};