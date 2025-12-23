import {cohorte01, cohorte02, cohorte03, cohorte04} from './datos.js';

import {recorreVector,unificacion, alumnosAprobados, alumnosDesaprobados,
    ordenarPorNota, buscarPorDNI, contarAprobados_IfElse, contarAprobados_Ternario} from './modelo.js';

// Cuando la ventana carga, preparamos los botones
window.addEventListener('load', () => {
// EJERCICIO 1
// Botón 1: Mostrar alumnos por consola
    document.getElementById('btnMostrar').addEventListener('click', () => {
        console.clear();
        console.log(" COHORTE 1");
        recorreVector(cohorte01);
        console.log("COHORTE 2");
        recorreVector(cohorte02);
        console.log(" COHORTE 3");
        recorreVector(cohorte03);
        console.log(" COHORTE 4");
        recorreVector(cohorte04);
    });
// console.log("----EJERCICIO 1: Mostrar Apellido y Nombre");
// recorreVector(cohorte01);
// recorreVector(cohorte02);
// recorreVector(cohorte03);
// recorreVector(cohorte04);

// EJERCICIO 2
// Botón 2: Unificar Cohortes
    document.getElementById('btnUnificar').addEventListener('click', () => {
        console.clear();
        console.log(" VECTOR UNIFICADO (Total alumnos):");
        recorreVector(unificacion);
    });

// EJERCICIO 3 
// Botón 3: Filtrar Aprobados/Desaprobados
    document.getElementById('btnFiltrar').addEventListener('click', () => {
        console.clear();
        console.log("Alumnos Aprobados (nota > 5):");
        recorreVector(alumnosAprobados);
        console.log("Alumnos Desaprobados (nota <= 5):");
        recorreVector(alumnosDesaprobados);
    });

// EJERCICIO 4
// Botón 4: Ordenar por Nota
    document.getElementById('btnOrdenar').addEventListener('click', () => {
        console.clear();
        const alumnosOrdenados = ordenarPorNota(unificacion);
        console.log("Alumnos ordenados de menor a mayor nota:", alumnosOrdenados);
    }); 



// EJERCICIO 5 
// Botón 5: Buscar por DNI (Ejercicio 5)
    document.getElementById('btnBuscar').addEventListener('click', () => {        
        console.clear();
        const dniABuscar = "89012345"; // Pedro Álvarez (cohorte 03)
        const alumnoEncontrado = buscarPorDNI(unificacion, dniABuscar);
        if (alumnoEncontrado) {
            console.log(`Alumno con DNI ${dniABuscar} encontrado:`, alumnoEncontrado);} 
            else {
    console.log(`No se encontró un alumno con DNI ${dniABuscar}.`);}
    });


// EJERCICIO 6
// Botón 6: Contar Aprobados
    document.getElementById('btnContar').addEventListener('click', () => {
        console.clear();
        // 6.a) Usando condicional if/else
        const cantidadAprobados_IfElse = contarAprobados_IfElse(unificacion);
        console.log(`6.a) Cantidad de aprobados (con if/else): ${cantidadAprobados_IfElse}`);

        // 6.b) Usando operador ternario
        const cantidadAprobados_Ternario = contarAprobados_Ternario(unificacion);
        console.log(`6.b) Cantidad de aprobados (con ternario): ${cantidadAprobados_Ternario}`);console.log(`Ambas formas llegan al mismo resultado: ${cantidadAprobados_IfElse === cantidadAprobados_Ternario}`);
    });
});