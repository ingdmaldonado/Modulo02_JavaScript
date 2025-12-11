/*Ejercicio Nro. 19:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios
Públicos de Aguas de Catamarca” y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE
(Ente Regulador de Servicios Públicos) que corresponde al 1,2 % del importe Base ingresado como parámetro de
la arrow function.
Nota: Debe devolver un número */


// Ejemplos de prueba
const base1 = 17500;
const base2 = 20276;
const base3 = 57214;

console.log("Tasa ENRE para 17.500 → ", calcularTasaENRE(base1));
console.log("Tasa ENRE para 20.276 → ", calcularTasaENRE(base2));
console.log("Tasa ENRE para 57.214 → ", calcularTasaENRE(base3));