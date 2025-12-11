/* Ejercicio Nro. 15:
Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida
como parámetro devuelva un texto que diga los siguientes mensajes.
• Si la nota <= 4 debe devolver “Desaprobado”
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado”
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno”
• Si la nota = 10 debe devolver “Excelente”
Nota: Debe Devolver un Texto. */

// Nota de ejemplo simulando una nota promedio ingresada
const notaEjemplo = 8;

const resultado = clasificarNota(notaEjemplo);

console.log("Nota ingresada:", notaEjemplo);
console.log("Resultado:", resultado);