import { cohorte01, cohorte02, cohorte03, cohorte04 } from "./datos.js";

import { mostrarAlumnos, todosLosAlumnos, alumnosAprobados, alumnosDesaprobados, alumnosOrdenados, mostrar, mostrarAlumnosConNotas, buscarAlumnoPorDNI, contarAprobadosConIf, contarAprobadosConTernario} from "./modelo.js"; 


window.onload = () => {

    document.getElementById("btnCohorte1").addEventListener("click", () => {
        mostrar(cohorte01);
    });

    document.getElementById("btnCohorte2").addEventListener("click", () => {
        mostrar(cohorte02);
    });

    document.getElementById("btnCohorte3").addEventListener("click", () => {
        mostrar(cohorte03);
    });

    document.getElementById("btnCohorte4").addEventListener("click", () => {
        mostrar(cohorte04);
    });

    document.getElementById("btnAprobados").addEventListener("click", () => {
        mostrarAlumnosConNotas(alumnosAprobados);
    });

    document.getElementById("btnBuscar").addEventListener("click", () => {
        const dniBuscado = document.getElementById("inputDNI").value;
        const alumnoEncontrado = buscarAlumnoPorDNI(dniBuscado);
        const infoAlumno = document.getElementById("infoAlumno");
        
        if (alumnoEncontrado) {
            infoAlumno.innerHTML = `
                <h3>Alumno encontrado:</h3>
                <p><strong>DNI:</strong> ${alumnoEncontrado.dni}</p>
                <p><strong>Nombre:</strong> ${alumnoEncontrado.nombre}</p>
                <p><strong>Apellido:</strong> ${alumnoEncontrado.apellido}</p>
                <p><strong>Nota Final:</strong> ${alumnoEncontrado.nota_final}</p>
            `;
        } else {
            infoAlumno.innerHTML = `<p>No se encontró ningún alumno con el DNI: ${dniBuscado}</p>`;
        }
    });

    console.log("hola mundo");
    
    // Invocar la función con cada cohorte
    console.log("=== COHORTE 01 ===");
    mostrarAlumnos(cohorte01);
    
    console.log("=== COHORTE 02 ===");
    mostrarAlumnos(cohorte02);
    
    console.log("=== COHORTE 03 ===");
    mostrarAlumnos(cohorte03);
    
    console.log("=== COHORTE 04 ===");
    mostrarAlumnos(cohorte04);
    
    console.log("=== VECTOR UNIFICADO DE TODOS LOS ALUMNOS ===");
    console.log(todosLosAlumnos);

    console.log("=== ALUMNOS APROBADOS ===");
    mostrarAlumnos(alumnosAprobados);

    console.log("=== ALUMNOS DESAPROBADOS ===");
    mostrarAlumnos(alumnosDesaprobados);

    console.log("=== ALUMNOS ORDENADOS ===");
    console.log(alumnosOrdenados);

    const dniBuscado = "12345678";
    const alumnoEncontrado = buscarAlumnoPorDNI(dniBuscado);
    
    console.log("=== BÚSQUEDA DE ALUMNO POR DNI ===");
    console.log(`DNI buscado: ${dniBuscado}`);
    if (alumnoEncontrado) {
        console.log("Alumno encontrado:", alumnoEncontrado);
    } else {
        console.log("No se encontró ningún alumno con ese DNI");
    }

    // Contabilizar alumnos aprobados usando reduce con if/else
    const cantidadAprobadosIf = contarAprobadosConIf();
    console.log("=== CONTEO DE ALUMNOS APROBADOS (usando if/else) ===");
    console.log(`Cantidad de alumnos aprobados: ${cantidadAprobadosIf}`);

    // Contabilizar alumnos aprobados usando reduce con operador ternario
    const cantidadAprobadosTernario = contarAprobadosConTernario();
    console.log("=== CONTEO DE ALUMNOS APROBADOS (usando operador ternario) ===");
    console.log(`Cantidad de alumnos aprobados: ${cantidadAprobadosTernario}`);

    console.log("=== VERIFICACIÓN ===");
    console.log(`Ambas formas dan el mismo resultado: ${cantidadAprobadosIf === cantidadAprobadosTernario}`);

}