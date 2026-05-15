// models20.js

export const calcularPromedio = (nota1, nota2, nota3) => {

    // sumo las notas
    let suma = nota1 + nota2 + nota3;

    // saco el promedio
    let promedio = suma / 3;

    return promedio;
};