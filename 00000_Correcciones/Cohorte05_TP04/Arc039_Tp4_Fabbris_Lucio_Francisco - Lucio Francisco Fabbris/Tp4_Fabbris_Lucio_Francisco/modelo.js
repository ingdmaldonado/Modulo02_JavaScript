
// =======================
// DATOS - COHORTES
// =======================

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

// =======================
// FUNCIONES
// =======================

// Punto 1
export const mostrarCohorte = (cohorte) => {
    cohorte.forEach(alumno => {
        console.log("Apellido: " + alumno.apellido +" - Nombre: " + alumno.nombre);
    });
};

// Punto 2
export const unificarCohortes = (c1, c2, c3, c4) => {
    return [...c1, ...c2, ...c3, ...c4];
};

// Punto 3 - aprobados y desaprobados
export const alumnosAprobados = (total) => {
    return total.filter(alumno => alumno.nota_final > 5);
};

export const alumnosDesaprobados = (total) => {
    return total.filter(alumno => alumno.nota_final <= 5);
};

// Punto 4 - ordenar por nota (SIN sort)
export const ordenarPorNota = (total) => {
    const copia = [...total];

    for (let i = 0; i < copia.length; i++) {
        for (let j = i + 1; j < copia.length; j++) {
            if (copia[i].nota_final > copia[j].nota_final) {
                const aux = copia[i];
                copia[i] = copia[j];
                copia[j] = aux;
            }
        }
    }
    return copia;
};

// Punto 5 - buscar por DNI
export const buscarAlumno = (total, dniBuscado) => {
    return total.find(alumno => alumno.dni === dniBuscado);
};

// Punto 6 - contar aprobados con reduce
export const contarAprobados = (total) => {
    return total.reduce(
        (acum, alumno) => acum + (alumno.nota_final > 5 ? 1 : 0),
        0
    );
};
