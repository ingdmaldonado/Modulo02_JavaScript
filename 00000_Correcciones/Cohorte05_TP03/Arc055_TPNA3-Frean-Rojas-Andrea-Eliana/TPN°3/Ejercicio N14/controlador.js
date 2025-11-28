// importamos la funcion promedioDeNotas desde modelo.js
import { promedioDeNotas } from "./modelo.js";

window.onload=()=>{
    console.log(`El programa esta corriendo...`);
    // se declara y se ingresa los valores de las notas. Y se verifica que se ingreso correctamentes las notas.
    let ingresoNota1=Number(prompt("Ingrese la Nota 1:"));
    while (isNaN(ingresoNota1)|| ingresoNota1<0 || ingresoNota1>10){
        ingresoNota1=Number(prompt("Error, nota no valida. Vuelva a ingresar la Nota 1:"));
    }
    let ingresoNota2=Number(prompt("Ingrese la Nota 2:"));
    while (isNaN(ingresoNota2)|| ingresoNota2<0 || ingresoNota2>10){
        ingresoNota2=Number(prompt("Error, nota no valida. Vuelva a ingresar la Nota 2:"));
    }
    let ingresoNota3=Number(prompt("Ingrese la Nota 3:"));
    while (isNaN(ingresoNota3)|| ingresoNota3<0 || ingresoNota3>10){
        ingresoNota3=Number(prompt("Error, nota no valida. Vuelva a ingresar la Nota 3:"));
    }
    // se ingresa los parametros a la funcion importada.
    let promedio=promedioDeNotas(ingresoNota1, ingresoNota2, ingresoNota3);
    // se muestra las 3 notas y el promedio de estas.
    console.log(`La nota 1 es:${ingresoNota1}`);
    console.log(`La nota 2 es:${ingresoNota2}`);
    console.log(`La nota 3 es:${ingresoNota3}`);
    console.log(`El Promedio de las 3 notas es:${promedio}`);
};