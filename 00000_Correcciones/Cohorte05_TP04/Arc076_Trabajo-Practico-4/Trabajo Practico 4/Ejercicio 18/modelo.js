// --------------------------------------------------
// 1) Función que recorre un vector de alumnos y
// muestra por consola el apellido y nombre
// Utiliza el método forEach
// --------------------------------------------------
export const listarAlumnos = (cohorte) => {
    cohorte.forEach(alumno => {
        console.log(`${alumno.apellido}, ${alumno.nombre}`);
    });
};

// --------------------------------------------------
// 2) Función que unifica todas las cohortes
// Utiliza el Spread Operator (...)
// --------------------------------------------------
export const unificarCohortes = (...cohortes) => {
    // Se retorna un único vector con todos los alumnos
    return [...cohortes.flat()];
};

// --------------------------------------------------
// 3) Función que obtiene los alumnos aprobados
// Aplica el método filter (nota_final > 5)
// --------------------------------------------------
export const obtenerAprobados = (alumnos) =>
    alumnos.filter(alumno => alumno.nota_final > 5);

// --------------------------------------------------
// 3) Función que obtiene los alumnos desaprobados
// Aplica el método filter (nota_final <= 5)
// --------------------------------------------------
export const obtenerDesaprobados = (alumnos) =>
    alumnos.filter(alumno => alumno.nota_final <= 5);

// --------------------------------------------------
// 4) Función que ordena los alumnos por nota
// Utiliza el método sort (de menor a mayor)
// --------------------------------------------------
export const ordenarPorNota = (alumnos) =>
    [...alumnos].sort((a, b) => a.nota_final - b.nota_final);

// --------------------------------------------------
// 5) Función que busca un alumno por DNI
// Utiliza el método find
// --------------------------------------------------
export const buscarPorDni = (alumnos, dni) =>
    alumnos.find(alumno => alumno.dni === dni);

// --------------------------------------------------
// 6a) Contabilizar aprobados usando reduce + if/else
// --------------------------------------------------
export const contarAprobadosIf = (alumnos) =>
    alumnos.reduce((contador, alumno) => {

        // Si la nota es mayor a 5, se considera aprobado
        if (alumno.nota_final > 5) {
            return contador + 1;
        } else {
            return contador;
        }

    }, 0); // Valor inicial del contador

// --------------------------------------------------
// 6b) Contabilizar aprobados usando reduce + ternario
// --------------------------------------------------
export const contarAprobadosTernario = (alumnos) =>
    alumnos.reduce(
        (contador, alumno) =>
            alumno.nota_final > 5 ? contador + 1 : contador,
        0
    );

/*
Ambas funciones (6a y 6b) devuelven el mismo resultado.
La diferencia es únicamente la forma de implementación:
una utiliza if/else y la otra operador ternario.
*/