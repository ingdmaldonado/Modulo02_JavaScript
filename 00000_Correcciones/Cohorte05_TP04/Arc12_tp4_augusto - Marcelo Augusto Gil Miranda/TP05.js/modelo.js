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

export const mostrarAlumnos = (vector) => {
    let salida = "";
    vector.forEach(alumno => {
        salida += `${alumno.apellido}, ${alumno.nombre}
`;
    });
    return salida;
};

export const unificarCohortes = (...cohortes) => {
    return [...cohortes[0], ...cohortes[1], ...cohortes[2], ...cohortes[3]];
};

export const filtrarAprobados = vector => vector.filter(a => a.nota_final > 5);

export const filtrarDesaprobados = vector => vector.filter(a => a.nota_final <= 5);

export const ordenarPorNota = vector => [...vector].sort((a, b) => a.nota_final - b.nota_final);

export const buscarPorDNI = (vector, dni) => vector.find(a => a.dni === dni);

export const contarAprobados_IF = vector =>
    vector.reduce((acc, alumno) => {
        if (alumno.nota_final > 5) return acc + 1;
        else return acc;
    }, 0);

export const contarAprobados_Ternario = vector =>
    vector.reduce((acc, alumno) =>
        alumno.nota_final > 5 ? acc + 1 : acc
    , 0);