// Los datos iniciales de las cohortes
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

// --- FUNCIONES ARROW ---

// 1) Función que recorre el vector y muestra Apellido y Nombre
export const mostrarAlumnos = (alumnos) => {
    alumnos.forEach(alumno => {
        console.log(`- Apellido: ${alumno.apellido}, Nombre: ${alumno.nombre}`);
    });
};

// 2) Función que unifica todas las cohortes
// Utiliza el spread operator (...) para crear un nuevo array con todos los alumnos.
export const unificarCohortes = () => {
    return [
        ...cohorte01,
        ...cohorte02,
        ...cohorte03,
        ...cohorte04
    ];
};

// Se ejecuta una vez para obtener el vector total, que será usado en el controlador
export const alumnosTotales = unificarCohortes();

// 3) Función para filtrar alumnos aprobados (nota > 5)
// Utiliza el método filter
export const filtrarAprobados = (alumnos) => alumnos.filter(alumno => alumno.nota_final > 5);

// 3) Función para filtrar alumnos desaprobados (nota <= 5)
// Utiliza el método filter
export const filtrarDesaprobados = (alumnos) => alumnos.filter(alumno => alumno.nota_final <= 5);

// 4) Función para ordenar alumnos por nota de menor a mayor
// Utiliza el método sort
export const ordenarPorNota = (alumnos) => {
    // Se utiliza el spread operator aquí para trabajar sobre una COPIA del array
    // y no modificar el original, ya que sort modifica el array in-place.
    return [...alumnos].sort((a, b) => a.nota_final - b.nota_final);
};

// 5) Función para buscar un alumno por DNI
// Utiliza el método find
export const buscarPorDNI = (alumnos, dniBuscado) => alumnos.find(alumno => alumno.dni === dniBuscado);

// 6)a. Función para contar aprobados usando reduce con if/else (nota > 5)
export const contarAprobadosIfElse = (alumnos) => {
    return alumnos.reduce((contador, alumno) => {
        if (alumno.nota_final > 5) {
            contador++;
        }
        return contador;
    }, 0); // El 0 es el valor inicial del contador
};

// 6)b. Función para contar aprobados usando reduce con operador ternario (nota > 5)
export const contarAprobadosTernario = (alumnos) => {
    return alumnos.reduce((contador, alumno) => (
        // Si la nota es > 5, suma 1 al contador, de lo contrario, suma 0.
        contador + (alumno.nota_final > 5 ? 1 : 0)
    ), 0);
};