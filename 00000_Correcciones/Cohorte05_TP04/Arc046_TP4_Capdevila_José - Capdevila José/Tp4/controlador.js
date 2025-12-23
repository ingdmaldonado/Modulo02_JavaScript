import * as modelo from './modelo.js';

// Obtenemos elementos del DOM
const btnEmpezar = document.getElementById('btn-empezar');
const output = document.getElementById('output');

// Función auxiliar para imprimir en pantalla y consola
const log = (mensaje) => {
    const p = document.createElement('p');
    //Mostrar Vector convertido a texto para verlo en HTML
    if (typeof mensaje === 'object') {
        p.textContent = JSON.stringify(mensaje, null, 2);
        p.style.whiteSpace = "pre"; 
        p.style.fontFamily = "monospace";
    } else {
        p.textContent = mensaje;
    }
    output.appendChild(p);
};

//Event Listener del botón principal
btnEmpezar.addEventListener('click', () => {
    output.innerHTML = ""; // Limpiar pantalla anterior
    log("-----------------------------------------------------------------");
    //Ejercicio 1
    log("EJERCICIO 1:Recorrer Cohortes individualmente");
    console.log("--- Listado de Alumnos ---");
    modelo.mostrarAlumnos(modelo.cohorte1);
    modelo.mostrarAlumnos(modelo.cohorte2);
    modelo.mostrarAlumnos(modelo.cohorte3);
    modelo.mostrarAlumnos(modelo.cohorte4);
    log("(Listado detallado en la consola!)");
    log("-----------------------------------------------------------------");

    //Ejercicio 2
    log("EJERCICIO 2: Unificar Cohortes (Spread Operator)");
    const todosLosAlumnos = modelo.unificarCohortes(
        modelo.cohorte1, modelo.cohorte2, modelo.cohorte3, modelo.cohorte4
    );
    log(todosLosAlumnos);
    log("-----------------------------------------------------------------");

    //Ejercicio 3
    log("EJERCICIO 3: Filtros de Aprobados y Desaprobados");
    const aprobados = modelo.obtenerAprobados(todosLosAlumnos);
    const desaprobados = modelo.obtenerDesaprobados(todosLosAlumnos);
    log("Vector de Aprobados:");
    log(aprobados);
    log("Vector de Desaprobados:");
    log(desaprobados);
    log("-----------------------------------------------------------------");

    //Ejercicio 4
    log("EJERCICIO 4: Ordenados por Nota (Ascendente)");
    const ordenados = modelo.ordenarPorNota(todosLosAlumnos);
    log(ordenados);
    log("-----------------------------------------------------------------");

    //Ejercicio 5
    log("EJERCICIO 5: Buscar Alumno por DNI");
    //Seleccioné el alumno "Miguel Vega", con dni:56789013.
    const dniBuscado = "56789013"; 
    const alumnoEncontrado = modelo.buscarAlumnoPorDni(todosLosAlumnos, dniBuscado);
    log(`Buscando DNI: ${dniBuscado}`);
    log(alumnoEncontrado || "Alumno no encontrado");
    log("-----------------------------------------------------------------");

    //Ejercicio 6
    log("EJERCICIO 6: Contabilizar Aprobados (Reduce)");
    const cantidadIf = modelo.contarAprobadosIf(todosLosAlumnos);
    const cantidadTernario = modelo.contarAprobadosTernario(todosLosAlumnos);
    log("-----------------------------------------------------------------");
    
    log(`Cantidad usando IF: ${cantidadIf}`);
    log(`Cantidad usando Ternario: ${cantidadTernario}`);
});