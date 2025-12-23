// Ejercicio 18
// 1) Función que recorre un vector de alumnos y muestra Apellido y Nombre.

import { cohorte01, cohorte02, cohorte03, cohorte04 } from "./datos.js";

// Uso de forEach y Arrow Function. 
export const recorreVector = (cohortes) => {
    console.log("-- Listado de Alumnos --");
    cohortes.forEach(({apellido, nombre}) => { 
        console.log(`Apellido: ${apellido}, Nombre: ${nombre}`);
    });
};

// 2) Unificar todos los alumnos de las cuatro cohortes.
// Uso del Spread Operator
export const unificacion = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

// 3) Crear vectores de alumnos Aprobados (nota > 5) y Desaprobados (nota <= 5). 
export const alumnosAprobados = unificacion.filter(alumno => alumno.nota_final > 5);
export const alumnosDesaprobados = unificacion.filter(alumno => alumno.nota_final <= 5);

// 4) Ordenar los alumnos por nota de menor a mayor.
export const ordenarPorNota = (alumnos) => {
    return [...alumnos].sort((a, b) => a.nota_final - b.nota_final);
};

// 5) Buscar un alumno por DNI.
// Uso del método find
export const buscarPorDNI = (alumnos, dniBuscado) => alumnos.find((alumno) => alumno.dni === dniBuscado);

// 6) Contabilizar la cantidad de alumnos aprobados (nota > 5).
// 6.a) usando condicional if/else
export const contarAprobados_IfElse = (alumnos) => {
    return alumnos.reduce((contador, alumno) => {
        if (alumno.nota_final > 5) {
            contador++;
        }
        return contador;
    }, 0); // el cero es el valor inicial del contador
};

// 6.b) usando operador ternario
export const contarAprobados_Ternario = (alumnos) => {
    return alumnos.reduce((contador, alumno) => {
        // Si la nota es > 5, suma 1 al contador, de lo contrario, suma 0.
        return contador + (alumno.nota_final > 5 ? 1 : 0);
    }, 0);
};