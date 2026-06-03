/*Ejercicio 32*/

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

//  FUNCIONES //

// 1. Mostrar alumnos con forEach//
export const mostrarAlumnos = (cohorte, nombreCohorte = "") => {
    console.log(`\n${nombreCohorte ? nombreCohorte : 'Cohorte'}:`);
    cohorte.forEach(alumno => {
        console.log(`   ${alumno.apellido}, ${alumno.nombre}`);
    });
};

// 2. Unificar todas las cohortes usando Spread Operator//
export const unificarCohortes = (...cohortes) => {
    return [...cohortes].flat(); // Spread + flat para mayor seguridad
};

// 3. Filtrar aprobados y desaprobados//
export const obtenerAprobados = (alumnos) => {
    return alumnos.filter(alumno => alumno.nota_final > 5);
};

export const obtenerDesaprobados = (alumnos) => {
    return alumnos.filter(alumno => alumno.nota_final <= 5);
};

// 4. Ordenar por nota (de menor a mayor)//
export const ordenarPorNota = (alumnos) => {
    return [...alumnos].sort((a, b) => a.nota_final - b.nota_final);
};

// 5. Buscar alumno por DNI usando find//
export const buscarPorDNI = (alumnos, dni) => {
    return alumnos.find(alumno => alumno.dni === dni);
};

// 6a. Contar aprobados con reduce + if/else//
export const contarAprobadosIf = (alumnos) => {
    return alumnos.reduce((contador, alumno) => {
        if (alumno.nota_final > 5) return contador + 1;
        return contador;
    }, 0);
};

// 6b. Contar aprobados con reduce + operador ternario//
export const contarAprobadosTernario = (alumnos) => {
    return alumnos.reduce((contador, alumno) => 
        alumno.nota_final > 5 ? contador + 1 : contador, 0);
};

// Función extra: Estadísticas completas (usa Destructuring)//
export const crearEstadisticas = (alumnos) => {
    const total = alumnos.length;
    const aprobados = contarAprobadosTernario(alumnos);
    const desaprobados = total - aprobados;
    const sumaNotas = alumnos.reduce((sum, alumno) => sum + alumno.nota_final, 0);
    const promedio = sumaNotas / total;

    return {
        totalAlumnos: total,
        aprobados,
        desaprobados,
        promedio: Math.round(promedio * 100) / 100,
        notaMasAlta: Math.max(...alumnos.map(a => a.nota_final)),
        notaMasBaja: Math.min(...alumnos.map(a => a.nota_final))
    };
};