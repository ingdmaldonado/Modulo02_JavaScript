
import {vectorOpciones} from "./datos.js";


const sueldosDeAlumnos = [15000,20000,6500];


window.onload = function()
{
    console.log("running");

    /* map. es una función de javasCript
    al igual que el forEach y al igual que find
    que recibe como parametro una arrow function.

    la diferencia es que map. transforma todos los 
    elementos del vector en algo nuevo. 
    ese elemento nuevo, depende de la función 
    callBack que recibe a dentro.
    */

    /* map. transforma los elementos
    del vector de origen, uno x uno (elemento a elemento)
    y devuelve un vector nuevo, sin modificar el original */

    console.log(sueldosDeAlumnos);

    const sueldosConIncremento = sueldosDeAlumnos.map((element,indice)=>{

        return (element + (element * 30)/100);

    });

    console.log(sueldosConIncremento);

}