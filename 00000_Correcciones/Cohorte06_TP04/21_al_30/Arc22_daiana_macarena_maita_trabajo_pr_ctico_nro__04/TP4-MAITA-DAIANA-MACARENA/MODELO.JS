// ==========================================
// ESTRUCTURAS DE DATOS (COHORTES)
// ==========================================

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
    { dni: "56789013", module: "JavaScript", nombre: "Miguel", apellido: "Vega", nota_final: 4 },
    { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 },
    { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 },
    { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 },
    { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 }
];

// ==========================================
// RESOLUCIÓN DE EJERCICIOS (LÓGICA)
// ==========================================

// 1. Recorrer con forEach y retornar cadena formateada (Aplica Destructuring)
export const mostrarAlumnos = (vector) => {
    let cadenaResultado = "";
    vector.forEach(({ apellido, nombre }) => {
        // Muestra en consola según consigna obligatoria
        console.log(`Alumno: ${apellido}, ${nombre}`);
        cadenaResultado += `${apellido} ${nombre}\n`;
    });
    return cadenaResultado;
};

// 2. Unificar las cuatro cohortes en un vector utilizando Spread Operator
export const unificarAlumnos = () => [
    ...cohorte01,
    ...cohorte02,
    ...cohorte03,
    ...cohorte04
];

// 3. Filtrar usando el método filter con la condición nota > 5 y nota <= 5
export const alumnosAprobados = (vector) =>
    vector.filter(alumno => alumno.nota_final > 5);

export const alumnosDesaprobados = (vector) =>
    vector.filter(alumno => alumno.nota_final <= 5);

// 4. Ordenar datos por nota de menor a mayor usando sort (sin mutar el original usando spread)
export const ordenarNotas = (vector) => [...vector].sort((a, b) => a.nota_final - b.nota_final);

// 5. Buscar un alumno por DNI aplicando el método find
export const buscarAlumno = (vector, dni) =>
    vector.find(alumno => alumno.dni === dni);

// 6.a Contabilizar aprobados con reduce usando estructura Condicional IF/ELSE
export const contarIfElse = (vector) =>
    vector.reduce((acumulador, alumno) => {
        if (alumno.nota_final > 5) {
            return acumulador + 1;
        } else {
            return acumulador;
        }
    }, 0);

// 6.b Contabilizar aprobados con reduce usando un Operador Ternario
export const contarTernario = (vector) =>
    vector.reduce((acumulador, alumno) =>
        alumno.nota_final > 5 ? acumulador + 1 : acumulador, 0
    );