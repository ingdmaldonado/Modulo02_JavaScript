/*Ejercicio Nro. 18:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios
Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es
un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function.
Nota: Debe devolver un número */

// Ejemplos de prueba
const base1 = 17500;
const base2 = 20276;
const base3 = 57214;

console.log("Tasa de Subsuelo para 17.500 → ", calcularTasaSubsuelo(base1));
console.log("Tasa de Subsuelo para 20.276 → ", calcularTasaSubsuelo(base2));
console.log("Tasa de Subsuelo para 57.214 → ", calcularTasaSubsuelo(base3));