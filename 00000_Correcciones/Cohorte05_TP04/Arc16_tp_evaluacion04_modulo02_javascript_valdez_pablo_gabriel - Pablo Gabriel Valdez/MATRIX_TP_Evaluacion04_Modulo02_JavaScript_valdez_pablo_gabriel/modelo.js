/* 
    modelo.js
    Lógica de negocio encapsulada.
*/

// Punto 1: Recorrer con forEach y mostrar Apellido, Nombre.
// Devuelve un array auxiliar para uso visual en el HTML.
export const mostrarApellidoNombre = (vectorAlumnos) => {
    const logVisual = [];
    console.log("--- Inicio Recorrido (forEach) ---");
    vectorAlumnos.forEach(alumno => {
        // Requisito PDF: Mostrar por consola
        console.log(`${alumno.apellido}, ${alumno.nombre}`);
        logVisual.push(`${alumno.apellido}, ${alumno.nombre}`);
    });
    return logVisual;
};

// Punto 2: Unificar vectores usando Spread Operator.
// Al recibir argumentos 'Rest' (...cohortes), usamos concat con Spread para aplanar.
export const unificarCohortes = (...cohortes) => {
    const unificados = [].concat(...cohortes);
    console.log("Vector Unificado (Spread):", unificados);
    return unificados;
};

// Punto 3: Filtrar (Filter)
// Nota > 5 para aprobados (según consigna punto 3 y 6).
export const filtrarAprobados = (vector) => {
    return vector.filter(alumno => alumno.nota_final > 5);
};

export const filtrarDesaprobados = (vector) => {
    return vector.filter(alumno => alumno.nota_final <= 5);
};

// Punto 4: Ordenar (Sort) por nota ascendente.
export const ordenarPorNota = (vector) => {
    const copia = [...vector]; // Spread para no mutar el original
    return copia.sort((a, b) => a.nota_final - b.nota_final);
};

// Punto 5: Buscar (Find) por DNI.
export const buscarPorDNI = (vector, dni) => {
    return vector.find(alumno => alumno.dni === dni);
};

// Punto 6a: Contabilizar (Reduce) con If/Else.
export const contarAprobadosIf = (vector) => {
    return vector.reduce((acc, alumno) => {
        if (alumno.nota_final > 5) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
};

// Punto 6b: Contabilizar (Reduce) con Ternario.
export const contarAprobadosTernario = (vector) => {
    return vector.reduce((acc, alumno) => 
        (alumno.nota_final > 5) ? acc + 1 : acc
    , 0);
};

// Extras: JSON
export const generarJSON = (datos) => JSON.stringify(datos, null, 2);
export const parsearJSON = (str) => JSON.parse(str);