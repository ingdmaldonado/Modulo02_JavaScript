// Importamos funciones y datos desde modelo.js
import {
    cohorte01, cohorte02, cohorte03, cohorte04,
    instanciarAlumnos, mostrarAlumnos, unificarTodos,
    filtrarAprobados, filtrarDesaprobados, ordenarAlumnosAscendente,
    buscarAlumnoPorDni, contarAprobadosIfElse, contarAprobadosTernario
} from './modelo.js';

// Convertimos a instancias de Clase (Opcional, pero cumple el requerimiento)
const c1 = instanciarAlumnos(cohorte01);
const c2 = instanciarAlumnos(cohorte02);
const c3 = instanciarAlumnos(cohorte03);
const c4 = instanciarAlumnos(cohorte04);

// Captura de elementos del DOM
const btnMostrar = document.getElementById('btn-mostrar');
const btnUnificar = document.getElementById('btn-unificar');
const btnFiltrar = document.getElementById('btn-filtrar');
const btnOrdenar = document.getElementById('btn-ordenar');
const btnBuscar = document.getElementById('btn-buscar');
const btnContar = document.getElementById('btn-contar');
const consolaDom = document.getElementById('consola-dom');

// Variable global para mantener los alumnos unificados listos para otros ejercicios

let vectorTodosLosAlumnos = [];

// Función auxiliar: Muestra resultado en el DOM aplicando formato JSON
// REQUISITO: Conversión a formato JS

const renderizarSalidaDOM = (datos) => {
    consolaDom.textContent = JSON.stringify(datos, null, 2);
};


// ASIGNACIÓN DE EVENTOS A LOS BOTONES


// Ejercicio 1: Mostrar
btnMostrar.addEventListener('click', () => {
    console.clear();
    console.log("=== EJERCICIO 1: MOSTRAR APELLIDO Y NOMBRE ===");
    mostrarAlumnos(c1, "Cohorte 01");
    mostrarAlumnos(c2, "Cohorte 02");
    mostrarAlumnos(c3, "Cohorte 03");
    mostrarAlumnos(c4, "Cohorte 04");
    
    consolaDom.textContent = "Revisa la consola (F12) para ver la ejecución del método forEach de las 4 cohortes.";
});

// Ejercicio 2: Unificar con Spread
btnUnificar.addEventListener('click', () => {
    console.clear();
    console.log("=== EJERCICIO 2: UNIFICAR COHORTES ===");
    
    vectorTodosLosAlumnos = unificarTodos(c1, c2, c3, c4);
    
    console.log(vectorTodosLosAlumnos);
    renderizarSalidaDOM({
        mensaje: "Vector de 4 cohortes unificado con éxito (Total alumnos: " + vectorTodosLosAlumnos.length + ")",
        datos: vectorTodosLosAlumnos
    });
});

// Ejercicio 3: Filtrar (Aprobados y Desaprobados)
btnFiltrar.addEventListener('click', () => {
    if(vectorTodosLosAlumnos.length === 0) vectorTodosLosAlumnos = unificarTodos(c1, c2, c3, c4);
    console.clear();
    console.log("=== EJERCICIO 3: FILTER ===");

    const alumnosAprobados = filtrarAprobados(vectorTodosLosAlumnos);
    const alumnosDesaprobados = filtrarDesaprobados(vectorTodosLosAlumnos);

    console.log("Aprobados (>5):", alumnosAprobados);
    console.log("Desaprobados (<=5):", alumnosDesaprobados);

    renderizarSalidaDOM({
        alumnosAprobados: alumnosAprobados,
        alumnosDesaprobados: alumnosDesaprobados
    });
});

// Ejercicio 4: Ordenar (Sort)
btnOrdenar.addEventListener('click', () => {
    if(vectorTodosLosAlumnos.length === 0) vectorTodosLosAlumnos = unificarTodos(c1, c2, c3, c4);
    console.clear();
    console.log("=== EJERCICIO 4: SORT (Menor a Mayor) ===");

    const alumnosOrdenados = ordenarAlumnosAscendente(vectorTodosLosAlumnos);
    console.log(alumnosOrdenados);
    renderizarSalidaDOM(alumnosOrdenados);
});

// Ejercicio 5: Buscar (Find)
btnBuscar.addEventListener('click', () => {
    if(vectorTodosLosAlumnos.length === 0) vectorTodosLosAlumnos = unificarTodos(c1, c2, c3, c4);
    console.clear();
    console.log("=== EJERCICIO 5: FIND ===");

    const DNI_A_BUSCAR = "67890124"; // Raquel Silva
    const alumnoEncontrado = buscarAlumnoPorDni(vectorTodosLosAlumnos, DNI_A_BUSCAR);
    
    console.log(`Buscando DNI ${DNI_A_BUSCAR}:`, alumnoEncontrado);
    
    renderizarSalidaDOM({
        buscandoDni: DNI_A_BUSCAR,
        resultado: alumnoEncontrado || "No se encontró el alumno"
    });
});

// Ejercicio 6: Contar (Reduce con dos métodos)
btnContar.addEventListener('click', () => {
    if(vectorTodosLosAlumnos.length === 0) vectorTodosLosAlumnos = unificarTodos(c1, c2, c3, c4);
    console.clear();
    console.log("=== EJERCICIO 6: REDUCE ===");

    const resultadoIfElse = contarAprobadosIfElse(vectorTodosLosAlumnos);
    const resultadoTernario = contarAprobadosTernario(vectorTodosLosAlumnos);

    console.log(`Cantidad Aprobados (resultado If/Else): ${resultadoIfElse}`);
    console.log(`Cantidad Aprobados (resultado Ternario): ${resultadoTernario}`);

    renderizarSalidaDOM({
        cantidadAprobadosMetodoIfElse: resultadoIfElse,
        cantidadAprobadosMetodoTernario: resultadoTernario,
        mensaje: (resultadoIfElse === resultadoTernario) ? "Ambos métodos dan el mismo resultado." : "Error"
    });
});