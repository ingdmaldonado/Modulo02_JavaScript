// copio y pego los arrays que dejó el profe en el pdf
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

// 1) recorro todo con forEach y muestro
export const mostrarConForEach = (vector) => {
    vector.forEach(alumno => {
        console.log(`${alumno.apellido} ${alumno.nombre}`);
    });
};

// 2) junto todos los arrays en uno solo usando spread
export const unificarVectores = (v1, v2, v3, v4) => {
    let unificados = [...v1, ...v2, ...v3, ...v4];
    return unificados;
};

// 3) saco los aprobados (>5) y los que no (<=5)
export const filtrarAprobados = (vector) => {
    return vector.filter(alumno => alumno.nota_final > 5);
};

export const filtrarDesaprobados = (vector) => {
    return vector.filter(alumno => alumno.nota_final <= 5);
};

// 4) ordeno de menor a mayor. le hago una copia con spread antes para no romper el array original
export const ordenarPorNota = (vector) => {
    let copia = [...vector];
    copia.sort((a, b) => a.nota_final - b.nota_final);
    return copia;
};

// 5) buscar por dni con find
export const buscarPorDni = (vector, dniBuscado) => {
    return vector.find(alumno => alumno.dni === dniBuscado);
};

// 6.a) cuento los aprobados usando reduce y un if comun
export const contarAprobadosIfElse = (vector) => {
    return vector.reduce((acumulador, alumno) => {
        if (alumno.nota_final > 5) {
            return acumulador + 1;
        } else {
            return acumulador;
        }
    }, 0);
};

// 6.b) hago lo mismo pero con el operador ternario para que quede mas corto
export const contarAprobadosTernario = (vector) => {
    return vector.reduce((acumulador, alumno) => (alumno.nota_final > 5) ? acumulador + 1 : acumulador, 0);
};