/*EJERCICIO 32*/
import {
    cohorte01,
    cohorte02,
    cohorte03,
    cohorte04,
    mostrarAlumnos,
    unificarCohortes,
    obtenerAprobados,
    obtenerDesaprobados,
    ordenarPorNota,
    buscarPorDNI,
    contarAprobadosIf,
    contarAprobadosTernario,
    crearEstadisticas
} from './modelo.js';

const output = document.getElementById('output');

// Función auxiliar para mostrar en pantalla//
function log(mensaje) {
    output.textContent += mensaje + '\n';
}

function limpiarOutput() {
    output.textContent = '';
}


document.getElementById('btnMostrarCohortes').addEventListener('click', () => {
    limpiarOutput();
    log(" Mostrar Cohortes \n");

    mostrarAlumnos(cohorte01, "Cohorte 01");
    mostrarAlumnos(cohorte02, "Cohorte 02");
    mostrarAlumnos(cohorte03, "Cohorte 03");
    mostrarAlumnos(cohorte04, "Cohorte 04");

    log("\n Revisa también la consola del navegador para más detalle.");
});

document.getElementById('btnUnificar').addEventListener('click', () => {
    limpiarOutput();
    log(" Unificar Cohortes");

    const todosLosAlumnos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);

    log(`Total de alumnos unificados: ${todosLosAlumnos.length}`);
    log("Primeros 5 alumnos:");
    log(JSON.stringify(todosLosAlumnos.slice(0, 5), null, 2));

    // Guardamos en window para usar en otros botones//
    window.todosLosAlumnos = todosLosAlumnos;
});

document.getElementById('btnFiltrar').addEventListener('click', () => {
    limpiarOutput();
    
    if (!window.todosLosAlumnos) {
        log("Unificar con Spread Operator'");
        return;
    }

    log("Aprobados y Desaprobados \n");

    const aprobados = obtenerAprobados(window.todosLosAlumnos);
    const desaprobados = obtenerDesaprobados(window.todosLosAlumnos);

    log(`Aprobados (nota > 5): ${aprobados.length} alumnos`);
    log(` Desaprobados (nota <= 5): ${desaprobados.length} alumnos\n`);

    log("Ejemplos de aprobados:");
    log(JSON.stringify(aprobados.slice(0, 3), null, 2));
});

document.getElementById('btnOrdenar').addEventListener('click', () => {
    limpiarOutput();
    
    if (!window.todosLosAlumnos) {
        log(" Unificar");
        return;
    }

    log("  Ordenar por Nota (menor a mayor)\n");

    const ordenados = ordenarPorNota(window.todosLosAlumnos);

    ordenados.forEach(alumno => {
        log(`${alumno.apellido}, ${alumno.nombre} → Nota: ${alumno.nota_final}`);
    });
});

document.getElementById('btnBuscar').addEventListener('click', () => {
    limpiarOutput();
    
    if (!window.todosLosAlumnos) {
        log(" Unificar ");
        return;
    }

    log(" Buscar por DNI \n");

    const dniBuscado = "89012345"; // Pedro Álvarez
    const alumnoEncontrado = buscarPorDNI(window.todosLosAlumnos, dniBuscado);

    if (alumnoEncontrado) {
        log("Alumno encontrado:");
        log(JSON.stringify(alumnoEncontrado, null, 2));
    } else {
        log("Alumno no encontrado");
    }
});

document.getElementById('btnContar').addEventListener('click', () => {
    limpiarOutput();
    
    if (!window.todosLosAlumnos) {
        log("  'Unificar'");
        return;
    }

    log(" Contar Aprobados con reduce \n");

    const countIf = contarAprobadosIf(window.todosLosAlumnos);
    const countTernario = contarAprobadosTernario(window.todosLosAlumnos);

    log(`Con if/else: ${countIf} alumnos aprobados`);
    log(`Con operador ternario: ${countTernario} alumnos aprobados`);

    // Estadísticas adicionales (Destructuring)//
    const stats = crearEstadisticas(window.todosLosAlumnos);
    
    log("\n ESTADÍSTICAS GENERALES:");
    log(`Total de alumnos: ${stats.totalAlumnos}`);
    log(`Promedio general: ${stats.promedio}`);
    log(`Nota más alta: ${stats.notaMasAlta}`);
    log(`Nota más baja: ${stats.notaMasBaja}`);
});