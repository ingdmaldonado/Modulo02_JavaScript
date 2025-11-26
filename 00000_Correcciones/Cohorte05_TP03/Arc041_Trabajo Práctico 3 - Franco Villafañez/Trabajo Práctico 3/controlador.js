
import {calcularSobreTasa} from "./funciones.js"
import {calcularImporteBaseAgua} from "./funciones.js";
import {precioVenta} from "./funciones.js";
import { promedioAlumno } from "./funciones.js";
import {notaDelAlumno} from "./funciones.js";
import{facturaAguasCatamarca} from "./funciones.js";
import{importeAguasCatamarca} from "./funciones.js";
import {dosisInsulina} from "./funciones.js";
import{contarVocales} from "./funciones.js";
import{ContarEspacios} from "./funciones.js";


//INVOCACIÓN DEL EJERCICIO 16

let resultado3=calcularSobreTasa(1,2000000);//Tipo 1 de bebida
console.log(resultado3);

let resultado4=calcularSobreTasa(2,4500000);//Tipo 2 de bebida
console.log(resultado4);

let resultado5=calcularSobreTasa(3,7800000);//Tipo 3 de bebida
console.log(resultado5);

let resultado6=calcularSobreTasa(4,2400000);//Tipo 4 de bebida
console.log(resultado6);

let resultado7=calcularSobreTasa(5,900000);//Tipo 5 de bebida
console.log(resultado7);

let resultado8=calcularSobreTasa(6,7000000);//Tipo 6 de bebida
console.log(resultado8);

//INVOCACIÓN DEL EJERCICIO 17

let resultado9= calcularImporteBaseAgua(20);
console.log(`Para 20 metros cúbicos: ${resultado9}`);

let resultado10=calcularImporteBaseAgua(68);
console.log(`Para 68 metros cúbicos: ${resultado10}`);

let resultado11=calcularImporteBaseAgua(99);
console.log(`Para 99 metros cúbicos: ${resultado11}`);

//INVOCACIÓN DEL EJERCICIO 13

let resultado12=precioVenta(2500,120);
console.log(resultado12);

//INVOCACIÓN DEL EJERCICIO 14

let resultado13=promedioAlumno(8.5,5,9);
console.log(`Salida del ejercicio 13: ${resultado13}`);

//INVOCACIÓN DEL EJERCICIO 15

let resultadoDesaprobado=notaDelAlumno(2);
console.log(`Salida del ejercicio 15. La calificación del alumno es:${resultadoDesaprobado}`);

let resultadoAprobado=notaDelAlumno(5);
console.log(`Salida del ejercicio 15. La calificación del alumno es:${resultadoAprobado}`);

let resultadoMuyBueno=notaDelAlumno(8.5);
console.log(`Salida del ejercicio 15. La calificación del alumno es:${resultadoMuyBueno}`);

let resultadoExcelente=notaDelAlumno(10);
console.log(`Salida del ejercicio 15. La calificación del alumno es:${resultadoExcelente}`);



//INVOCACIÓN DEL EJERCICIO 18

let resultado15=facturaAguasCatamarca(70000);
console.log(`Salida del ejercicio 18:${resultado15}`);

//INVOCACIÓN DEL EJERCICIO 19

let resultado16=importeAguasCatamarca(37500);
console.log(`Salida del ejercicio 19:${resultado16}`);

//INVOCACIÓN DEL EJERCICIO 20

let resultado17=dosisInsulina(190,79,1);
console.log(`Salida del ejercicio 20: Para diabetes tipo 1 la dosis de insulina recomendada es:${resultado17}`);

let resultado18=dosisInsulina(150,97,2);
console.log(`Salida del ejercicio 20: Para diabetes tipo 2 la dosis de insulina recomendada es:${resultado18}`);

//INVOCACIÓN DEL EJERCICIO 21

let resultado19=contarVocales("Vivo en Valle Viejo");
console.log(`Salida del ejercicio 21: La cantidad de vocales es:${resultado19}`);

let resultado20=contarVocales("Me llamo Franco estudio Fisica");
console.log(`Salida del ejercicio 21: La cantidad de vocales es:${resultado20}`);

//INVOCACIÓN DEL EJERCICIO 24

let resultado21=ContarEspacios("Contador de espacios en blanco");

console.log(`Salida del ejercicio 24.${resultado21}`);









