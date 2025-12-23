// Cohorte 01 [cite: 22, 24-27]
export const cohorte01 = [
    { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 },
    { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 },
    { dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 },
    { dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7 }
];

// Cohorte 02 [cite: 28, 30-32]
export const cohorte02 = [
    { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 },
    { dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 },
    { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 }
];

// Cohorte 03 [cite: 33, 35-39]
export const cohorte03 = [
    { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 },
    { dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 },
    { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 },
    { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 },
    { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 }
];

// Cohorte 04 [cite: 40, 42-47]
export const cohorte04 = [
    { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 },
    { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 },
    { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 },
    { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 },
    { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 },
    { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 }
];


/*
 FUNCIONES DE LÓGICA (Arrow Functions)
 */

//  Recorrer con forEach [cite: 51]
export const mostrarAlumnos = (alumnos) => {
    alumnos.forEach((alumno) => {
        // Uso de Destructuring [cite: 8] para extraer los campos
        const { nombre, apellido } = alumno;
        console.log(`[E1] Alumno: ${apellido}, ${nombre}`);
    });
};

//  Unificar Cohortes (Spread Operator) [cite: 53]
export const unificarCohortes = () => {
    const alumnosTotal = [
        ...cohorte01, // Uso del Spread Operator [cite: 6]
        ...cohorte02,
        ...cohorte03,
        ...cohorte04
    ];
    console.log("[E2] Vector Total Unificado:", alumnosTotal); // cite: 54
    return alumnosTotal;
};

//  Filtrar Aprobados (nota > 5) y Desaprobados (nota <= 5) (filter) [cite: 56, 57]
export const filtrarAlumnos = (alumnosTotal) => {
    const alumnosAprobados = alumnosTotal.filter(alumno => alumno.nota_final > 5);
    const alumnosDesaprobados = alumnosTotal.filter(alumno => alumno.nota_final <= 5);

    // Retorna un objeto literal con los dos vectores
    return { alumnosAprobados, alumnosDesaprobados }; // cite: 55
};

//  Ordenar por Nota de menor a mayor (sort) [cite: 58]
export const ordenarPorNota = (alumnosTotal) => {
    // Usamos Spread Operator para no modificar el array original
    const alumnosOrdenados = [...alumnosTotal].sort((a, b) => a.nota_final - b.nota_final);
    return alumnosOrdenados;
};

//  Buscar alumno por DNI (find) [cite: 59, 60]
export const buscarPorDni = (alumnosTotal, dniBuscado) => {
    const alumnoEncontrado = alumnosTotal.find(alumno => alumno.dni === dniBuscado);
    return alumnoEncontrado;
};

//  Contabilizar aprobados (reduce con if/else) [cite: 63]
export const contarAprobadosIfElse = (alumnosTotal) => {
    // Nota > 5 es el criterio de aprobación para este ejercicio [cite: 61]
    const aprobados = alumnosTotal.reduce((contador, alumno) => {
        if (alumno.nota_final > 5) {
            contador = contador + 1;
        }
        return contador;
    }, 0); // El valor inicial es 0 [cite: 62]
    return aprobados;
};

//  Contabilizar aprobados (reduce con operador ternario) [cite: 64]
export const contarAprobadosTernario = (alumnosTotal) => {
    const aprobados = alumnosTotal.reduce((contador, alumno) => {
        // Operador ternario: si nota > 5, suma 1; si no, suma 0.
        return contador + (alumno.nota_final > 5 ? 1 : 0);
    }, 0); // El valor inicial es 0 [cite: 62]
    return aprobados;
};

// Función de utilidad para convertir a JSON [cite: 7]
export const convertirAJson = (objeto) => {
    return JSON.stringify(objeto, null, 2);
};