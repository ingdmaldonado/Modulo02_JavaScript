export const cohorte01 = [
    { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 },
    { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 },
    { dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 },
    { dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7 }
];

export const cohorte02 = [
    { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 },
    { dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 },
    { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 }
];

export const cohorte03 = [
    { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 },
    { dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 },
    { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 },
    { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 },
    { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 }
];

export const cohorte04 = [
    { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 },
    { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 },
    { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 },
    { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 },
    { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 },
    { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 }
];

export const mostrarAlumnos = (cohorte) => {
    cohorte.forEach(alumno => {
        console.log(`${alumno.apellido}, ${alumno.nombre}`);
    });
};

export const unificarCohortes = () => [
    ...cohorte01,
    ...cohorte02,
    ...cohorte03,
    ...cohorte04
];

export const obtenerAprobados = (alumnos) =>
    alumnos.filter(alumno => alumno.nota_final > 5);

export const obtenerDesaprobados = (alumnos) =>
    alumnos.filter(alumno => alumno.nota_final <= 5);

export const ordenarPorNota = (alumnos) =>
    [...alumnos].sort((a, b) => a.nota_final - b.nota_final);

export const buscarAlumno = (alumnos, dni) =>
    alumnos.find(alumno => alumno.dni === dni);

export const contarAprobadosIf = (alumnos) =>
    alumnos.reduce((contador, alumno) => {
        if (alumno.nota_final > 5) {
            return contador + 1;
        } else {
            return contador;
        }
    }, 0);

export const contarAprobadosTernario = (alumnos) =>
    alumnos.reduce(
        (contador, alumno) =>
            alumno.nota_final > 5
                ? contador + 1
                : contador,
        0
    );