/* 
    modelo.js
    Lógica de negocio y manipulación de vectores.
*/

// Punto 1: Recorrer con forEach y mostrar Apellido, Nombre.
export const mostrarApellidoNombre = (vectorAlumnos) => {
    // Se cumple el requerimiento de "mostrar por consola" dentro de la función.
    // Además retornamos un array para que el controlador pueda pintar el HTML.
    const logParaVista = [];
    console.log("--- Listado de Alumnos (forEach) ---");
    vectorAlumnos.forEach(alumno => {
        console.log(`${alumno.apellido}, ${alumno.nombre}`);
        logParaVista.push(`${alumno.apellido}, ${alumno.nombre}`);
    });
    return logParaVista;
};

// Punto 2: Unificar vectores usando Spread Operator.
export const unificarCohortes = (...cohortes) => {
    // Uso de spread para concatenar múltiples arrays en uno nuevo
    const unificados = [].concat(...cohortes);
    console.log("Vector Unificado:", unificados);
    return unificados;
};

// Punto 3: Filtrado (Aprobados > 5 / Desaprobados <= 5).
export const filtrarAprobados = (vector) => {
    return vector.filter(alumno => alumno.nota_final > 5);
};

export const filtrarDesaprobados = (vector) => {
    return vector.filter(alumno => alumno.nota_final <= 5);
};

// Punto 4: Ordenamiento por nota (ascendente) usando sort.
export const ordenarPorNota = (vector) => {
    // Creamos copia con Spread para no mutar el original
    const copia = [...vector]; 
    return copia.sort((a, b) => a.nota_final - b.nota_final);
};

// Punto 5: Búsqueda por DNI usando find.
export const buscarPorDNI = (vector, dni) => {
    return vector.find(alumno => alumno.dni === dni);
};

// Punto 6a: Contabilizar aprobados con Reduce + If/Else.
export const contarAprobadosIf = (vector) => {
    return vector.reduce((acc, alumno) => {
        if (alumno.nota_final > 5) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
};

// Punto 6b: Contabilizar aprobados con Reduce + Ternario.
export const contarAprobadosTernario = (vector) => {
    return vector.reduce((acc, alumno) => 
        (alumno.nota_final > 5) ? acc + 1 : acc
    , 0);
};

// Utilidades JSON
export const generarJSON = (datos) => JSON.stringify(datos, null, 2);
export const parsearJSON = (jsonString) => JSON.parse(jsonString);