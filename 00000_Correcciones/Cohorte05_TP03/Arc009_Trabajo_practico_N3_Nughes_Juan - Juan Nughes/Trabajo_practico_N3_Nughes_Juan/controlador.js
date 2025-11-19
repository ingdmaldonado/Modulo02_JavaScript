

import {precioVenta, promedio,notaRecibida, impuestoTasa, calcularImporteAgua, tasaSubsuelo,tasaFiscalizacionENRE, dosisInsulina, contarVocales,contarConsonantes, contarLetraS, contarEspacios,contarNumeros} from "./modelo.js"

{
// Invocación ejercicio Nro. 13

let resultado1 = precioVenta (8000,50);

console.log (`El precio de venta es:${resultado1}`);

console.log (`======================================================`);

// Invocación ejercicio Nro. 14

let resultado2 = promedio (10,7,10);

console.log (`El promedio del alumno es de: ${resultado2}`);

console.log (`======================================================`);

// Invocación ejercicio Nro. 15

let resultado3 = notaRecibida (10);
console.log (`El resultado es: ${resultado3}`)

console.log (`======================================================`);

// Invocación ejercicio Nro. 16

let resultado4 = impuestoTasa (3,2000);
console.log (`La sobre tasa es: ${resultado4}`);

console.log (`======================================================`);

// Invocación ejercicio Nro. 17

let resultado5 = calcularImporteAgua (30);
console.log (`El importe base a pagar es:${resultado5}`);

console.log (`======================================================`);

// Invocación ejercicio Nro. 18

let resultado6 = tasaSubsuelo (5000);
console.log (`La tasa de subsuelo es ${resultado6}`);

console.log (`======================================================`);

// Invocación ejercicio Nro. 19

let resultado7 = tasaFiscalizacionENRE (5000);
console.log (`La tasa de Fiscalizacion ENRE es: ${resultado7}`);

console.log (`=========================================================`);

// Invocación ejercicio Nro. 20

let resultado8 = dosisInsulina (150, 70, 1);
console.log (`La dosis de insulina recomendada es: ${resultado8}`);

console.log (`======================================================`);

// Invocación ejercicio Nro. 21

let resultado9 = contarVocales ("Hola, mi nombre es Juan y soy alumno de la cohorte 5");
console.log (`La cantidad de vocales es: ${resultado9}`);

console.log (`======================================================`);

// Invocación ejercicio Nro. 22

let resultado10 = contarConsonantes ("Hola, mi nombre es Juan y estoy contando las consonantes");
console.log (`La cantidad de consonantes es: ${resultado10}`);

console.log (`======================================================`);


// Invocación ejercicio Nro. 23

let resultado11 = contarLetraS ("Hola, mi nombre es Juan y estoy contando las letras S");
console.log (`Supera las dos S: ${resultado11}`);

console.log (`======================================================`);

// Invocación ejercicio Nro. 24

let resultado12 = contarEspacios ("Hola mi nombre es Juan");
console.log (`Tiene tres espacios: ${resultado12}`);

console.log (`======================================================`);

// Invocación ejercicio Nro. 25

let resultado13 = contarNumeros ("Hola mi nombre es Juan y estoy de 10");
console.log (`El valor logico es: ${resultado13}`);

console.log (`======================================================`);

}