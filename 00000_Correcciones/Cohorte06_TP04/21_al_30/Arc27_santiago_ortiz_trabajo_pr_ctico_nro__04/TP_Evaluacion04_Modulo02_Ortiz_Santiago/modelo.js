/* Un profesor de programación tiene 4 curso o cohortes, en donde en cada cohorte existen alumnos 
diferentes que cursaron su módulo de “fundamentos de programación con JavaScript”, el profesor tiene en un 
vector diferente los alumnos y sus notas finales del cursado. “Se aprueba con notas > 4”. El listado de alumnos 
es el siguiente:  */


//Objetos a partir de clases

export class Alumno {
    constructor(dni, nombre, apellido, nota_final) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota_final = nota_final;
    }
}

//Objetos Literales (Datos Originales)

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

// Función utilitaria para transformar Objetos Literales en instancias de la Clase Alumno
export const instanciarAlumnos = (cohorteLiteral) => {
    return cohorteLiteral.map(a => new Alumno(a.dni, a.nombre, a.apellido, a.nota_final));
};


// Resultados EJERCICIO 32


// 1) Mostrar por consola, apellido y nombre usando forEach y Destructuring
export const mostrarAlumnos = (cohorte, nombreCohorte) => {
    console.log(`--- ${nombreCohorte} ---`);
    cohorte.forEach(alumno => {
        // REQUISITO: Destructuring
        const { apellido, nombre } = alumno; 
        console.log(`${apellido}, ${nombre}`);
    });
};

// 2) Unificar alumnos en un solo vector 

// Spread Operator y Rest Operator

export const unificarTodos = (...cohortes) => { // Rest Operator captura N parámetros en un arreglo
    let unificados = [];
    cohortes.forEach(cohorte => {
        // Spread Operator unifica los elementos dentro de la lista
        unificados = [...unificados, ...cohorte]; 
    });
    return unificados;
};

// 3) Filtrar alumnos Aprobados (>5) y Desaprobados (<=5) usando filter
export const filtrarAprobados = (alumnos) => alumnos.filter(a => a.nota_final > 5);
export const filtrarDesaprobados = (alumnos) => alumnos.filter(a => a.nota_final <= 5);

// 4) Ordenar todos los alumnos de menor a mayor usando sort
export const ordenarAlumnosAscendente = (alumnos) => {
    return [...alumnos].sort((a, b) => a.nota_final - b.nota_final);
};

// 5) Buscar alumno por DNI usando find
export const buscarAlumnoPorDni = (alumnos, dniBuscado) => {
    return alumnos.find(a => a.dni === dniBuscado);
};

// 6a) Contabilizar aprobados usando reduce y condicional
export const contarAprobadosIfElse = (alumnos) => {
    return alumnos.reduce((contador, alumno) => {
        if (alumno.nota_final > 5) {
            return contador + 1;
        } else {
            return contador;
        }
    }, 0);
};

// 6b) Contabilizar aprobados usando reduce y operador ternario
export const contarAprobadosTernario = (alumnos) => {
    return alumnos.reduce((contador, alumno) => (alumno.nota_final > 5) ? contador + 1 : contador, 0);
};