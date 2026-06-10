// Los vectores que nos dio el profe en el enunciado
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

// Ejercicio 1: forEach para imprimir apellido, nombre
export const mostrarConsola = (alumnos) => {
    alumnos.forEach(a => {
        console.log(a.apellido + ", " + a.nombre);
    });
};

// Ejercicio 2: Spread Operator para juntar todo
export const juntarTodo = () => {
    return [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
};

// Ejercicio 3: filter para aprobados (> 5) y desaprobados
export const sacarAprobados = (unificados) => {
    return unificados.filter(alu => alu.nota_final > 5);
};

export const sacarDesaprobados = (unificados) => {
    return unificados.filter(alu => alu.nota_final <= 5);
};

// Ejercicio 4: sort de menor a mayor por la nota final
export const ordenarNotas = (unificados) => {
    // Uso ... para copiar el array rapido y no desordenar el original
    let copia = [...unificados];
    return copia.sort((x, y) => x.nota_final - y.nota_final);
};

// Ejercicio 5: find para buscar por DNI
export const buscarDni = (unificados, dni) => {
    return unificados.find(a => a.dni === dni);
};

// Ejercicio 6: los dos reduce que pide el profe para los aprobados

// 6.a) Con bloque if/else adentro
export const contarAprobadosIf = (unificados) => {
    return unificados.reduce((acc, alu) => {
        if (alu.nota_final > 5) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
};

// 6.b) Con operador ternario
export const contarAprobadosTernario = (unificados) => {
    return unificados.reduce((acc, alu) => alu.nota_final > 5 ? acc + 1 : acc, 0);
};