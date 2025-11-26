/* Funciones para el Ejercicio 14 - Cálculo de Promedio */

// Arrow function que calcula el promedio de 3 notas
export const calcularPromedioNotas = (nota1, nota2, nota3) => {
    let sumaNotas = nota1 + nota2 + nota3;
    let promedio = sumaNotas / 3;
    return promedio;
}