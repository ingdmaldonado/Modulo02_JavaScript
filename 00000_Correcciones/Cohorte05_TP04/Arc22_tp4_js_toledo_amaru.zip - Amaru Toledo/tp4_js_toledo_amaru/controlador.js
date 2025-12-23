// Importación de las cohortes y todas las funciones desde modelo.js 
import {
    cohorte01, cohorte02, cohorte03, cohorte04,
    mostrarAlumnos,
    unificarCohortes,
    filtrarAlumnos,
    ordenarPorNota,
    buscarPorDni,
    contarAprobadosIfElse,
    contarAprobadosTernario,
    convertirAJson
} from './modelo.js';


document.addEventListener('DOMContentLoaded', () => {

    // Referencias a elementos del DOM (Vista.html)
    const btnEjecutar = document.getElementById('btnEjecutar');
    const resUnificado = document.getElementById('resUnificado');
    const resAprobados = document.getElementById('resAprobados');
    const resDesaprobados = document.getElementById('resDesaprobados');
    const resOrdenado = document.getElementById('resOrdenado');
    const resEncontrado = document.getElementById('resEncontrado');
    const resReduceIf = document.getElementById('resReduceIf');
    const resReduceTernario = document.getElementById('resReduceTernario');
    const resJson = document.getElementById('resJson');


    // Función de ayuda para crear la lista HTML
    const crearListaHTML = (alumnos) => 
        alumnos.map(a => `<li>${a.apellido}, ${a.nombre} (Nota: ${a.nota_final})</li>`).join('');


    // Arrow function principal que ejecuta todos los puntos del TP
    const ejecutarTP04 = () => {
        /*
         Mostrar Apellido y Nombre (forEach) - SALIDA POR CONSOLA [cite: 51]
        */
        console.groupCollapsed("EJERCICIO 1: Listado de Alumnos (forEach)");
        mostrarAlumnos(cohorte01); // cite: 52
        mostrarAlumnos(cohorte02); // cite: 52
        mostrarAlumnos(cohorte03); // cite: 52
        mostrarAlumnos(cohorte04); // cite: 52
        console.groupEnd();
        
        /*
        Unificar Cohortes (Spread Operator) [cite: 53]
        */
        const alumnosTotal = unificarCohortes();
        resUnificado.textContent = `Total de alumnos unificados: ${alumnosTotal.length}.`;

        /*
         Filtrar Aprobados y Desaprobados (filter) [cite: 56, 57]
         */
       
        const { alumnosAprobados, alumnosDesaprobados } = filtrarAlumnos(alumnosTotal); // Destructuring de los resultados
        
        resAprobados.innerHTML = `(${alumnosAprobados.length} alumnos, nota > 5)<ul>${crearListaHTML(alumnosAprobados)}</ul>`;
        resDesaprobados.innerHTML = `(${alumnosDesaprobados.length} alumnos, nota <= 5)<ul>${crearListaHTML(alumnosDesaprobados)}</ul>`;
         /*
         Ordenar por Nota (sort) [cite: 58]
         */      
        const alumnosOrdenados = ordenarPorNota(alumnosTotal);
        resOrdenado.innerHTML = `(${alumnosOrdenados.length} alumnos, de menor a mayor nota)<ul>${crearListaHTML(alumnosOrdenados)}</ul>`;


       /*
         5. Buscar por DNI (find) [cite: 59, 60]
       */
        const dniBuscado = "89012345"; // Ejemplo de DNI buscado
        const alumnoEncontrado = buscarPorDni(alumnosTotal, dniBuscado);
        
        if (alumnoEncontrado) {
            // Destructuring para mostrar los campos del alumno encontrado
            const { nombre, apellido, nota_final } = alumnoEncontrado; 
            resEncontrado.textContent = `DNI: ${dniBuscado} => Encontrado: ${apellido}, ${nombre} (Nota: ${nota_final})`;
        } else {
            resEncontrado.textContent = `DNI: ${dniBuscado} => No encontrado.`;
        }


        /*
          Contabilizar Aprobados (reduce) [cite: 61]
        */
        const contIfElse = contarAprobadosIfElse(alumnosTotal); // Uso de if/else [cite: 63]
        const contTernario = contarAprobadosTernario(alumnosTotal); // Uso de operador ternario [cite: 64]
        
        resReduceIf.textContent = `Cantidad de Aprobados (If/Else): ${contIfElse} alumnos.`;
        resReduceTernario.textContent = `Cantidad de Aprobados (Ternario): ${contTernario} alumnos. (Resultado debe ser el mismo) [cite: 65]`;

        /*
         EXTRA: Conversión a JSON [cite: 7]
         */      
        const jsonOutput = convertirAJson(alumnosTotal.slice(0, 3)); 
        resJson.textContent = jsonOutput;
    };

    // Asignar el evento al botón 
    btnEjecutar.addEventListener('click', ejecutarTP04);
});