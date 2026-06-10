
export const cohorte01 = [
    { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8},
    { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6},
    { dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 },
    { dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7}
];

export const cohorte02 = [
    { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9},
    { dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 },
    { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 }
];

export const cohorte03 = [
    { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 },
    { dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 },
    { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6},
    { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2},
    { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8}
];

export const cohorte04 = [
    { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7},
    { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 },
    { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9},
    { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 },
    { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6},
    { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3}
];


// Punto 1: función que recibe un vector, lo recorre con forEach y muestra apellido y nombre por consola.
export const mostrarNombres = (cohorte) => {
    cohorte.forEach(alumno => console.log(`${alumno.apellido}, ${alumno.nombre}`));
};


// Punto 2: unificar contenido usando spread operator en un solo vector.
export const unificarCohortes = (c1, c2, c3, c4) => [...c1, ...c2, ...c3, ...c4];


// Punto 3: filtrar alumnos aprobados (> 5) y desaprobados (<= 5).
export const filtrarAprobados = (alumnos) => alumnos.filter(alumno => alumno.nota_final > 5);
export const filtrarDesaprobados = (alumnos) => alumnos.filter(alumno => alumno.nota_final <= 5);


// Punto 4: ordenar alumnos por nota de menor a mayor usando sort.
export const ordenarPorNota = (alumnos) => {
    // Use spread para clonar el array y no mutar el original
    return [...alumnos].sort((a, b) => a.nota_final - b.nota_final);
};


// Punto 5: buscar un alumno por su DNI usando find.
export const buscarPorDni = (alumnos, dniBuscar) => alumnos.find(alumno => alumno.dni === dniBuscar);


// Punto 6a: contabilizar aprobados (> 5) con reduce y un if/else.
export const contarAprobadosIf = (alumnos) => {
    return alumnos.reduce((acumulador, alumno) => {
        if (alumno.nota_final > 5) {
            return acumulador + 1;
        } else {
            return acumulador;
        }
    }, 0); // 0 es el valor inicial del acumulador
};


// Punto 6b: contabilizar aprobados (> 5) con reduce y operador ternario.
export const contarAprobadosTernario = (alumnos) => {
    return alumnos.reduce((acumulador, alumno) => alumno.nota_final > 5 ? acumulador + 1 : acumulador, 0);
};