// Importación de todas las funciones y datos del modelo
import {
    cohorte01, cohorte02, cohorte03, cohorte04,
    alumnosTotales, mostrarAlumnos,
    filtrarAprobados, filtrarDesaprobados,
    ordenarPorNota, buscarPorDNI,
    contarAprobadosIfElse, contarAprobadosTernario
} from './modelo.js';

// --- MANEJO DEL DOM Y EVENTOS ---

// Arrow function principal para ejecutar la lógica al cargar el DOM
const iniciarPrograma = () => {
    // 1. Mostrar Apellido y Nombre por cohorte
    console.log("--- 1. Mostrar Apellido y Nombre (forEach) ---");
    console.log("\nCOHORTE 01:");
    mostrarAlumnos(cohorte01);
    console.log("\nCOHORTE 02:");
    mostrarAlumnos(cohorte02);
    console.log("\nCOHORTE 03:");
    mostrarAlumnos(cohorte03);
    console.log("\nCOHORTE 04:");
    mostrarAlumnos(cohorte04);

    // 2. Unificar todas las cohortes (Spread Operator)
    console.log("\n--- 2. Vector Total de Alumnos (Spread Operator) ---");
    console.log("Cantidad total de alumnos:", alumnosTotales.length);
    console.log(alumnosTotales);
    // Se muestra en el DOM la cantidad total de alumnos
    document.getElementById('totalAlumnos').textContent = alumnosTotales.length;


    // 3. Crear vectores de Aprobados (nota > 5) y Desaprobados (nota <= 5) (Filter)
    console.log("\n--- 3. Vectores Aprobados y Desaprobados (Filter) ---");
    const alumnosAprobados = filtrarAprobados(alumnosTotales);
    const alumnosDesaprobados = filtrarDesaprobados(alumnosTotales);

    console.log("Alumnos Aprobados (Nota > 5):", alumnosAprobados.length, alumnosAprobados);
    console.log("Alumnos Desaprobados (Nota <= 5):", alumnosDesaprobados.length, alumnosDesaprobados);
    
    // Se muestra en el DOM el resultado de los filtros
    document.getElementById('aprobadosCount').textContent = alumnosAprobados.length;
    document.getElementById('desaprobadosCount').textContent = alumnosDesaprobados.length;

    // 4. Ordenar el vector total por nota (Sort)
    console.log("\n--- 4. Vector Ordenado por Nota (Sort de menor a mayor) ---");
    const alumnosOrdenados = ordenarPorNota(alumnosTotales);
    console.log(alumnosOrdenados);
    
    // Opcional: Mostrar el primero (menor nota) y el último (mayor nota) en el DOM
    document.getElementById('menorNota').textContent = alumnosOrdenados[0]?.nombre || 'N/A';
    document.getElementById('mayorNota').textContent = alumnosOrdenados[alumnosOrdenados.length - 1]?.nombre || 'N/A';


    // 5. Búsqueda de un alumno por DNI (Find)
    console.log("\n--- 5. Búsqueda de Alumno por DNI (Find) ---");
    const dniBuscado = "89012345"; // Pedro Álvarez (cohorte03)
    const alumnoEncontrado = buscarPorDNI(alumnosTotales, dniBuscado);
    
    if (alumnoEncontrado) {
        console.log(`Alumno con DNI ${dniBuscado} encontrado:`, alumnoEncontrado);
        // Se muestra en el DOM
        document.getElementById('alumnoBuscado').textContent = `${alumnoEncontrado.nombre} ${alumnoEncontrado.apellido} (Nota: ${alumnoEncontrado.nota_final})`;
    } else {
        console.log(`Alumno con DNI ${dniBuscado} no encontrado.`);
        document.getElementById('alumnoBuscado').textContent = `No encontrado.`;
    }

    // 6. Contabilizar alumnos aprobados (Nota > 5) (Reduce)
    console.log("\n--- 6. Contabilizar Aprobados (Reduce) ---");

    // a. Usando if/else
    const aprobadosIfElse = contarAprobadosIfElse(alumnosTotales);
    console.log("a. Aprobados (Reduce con if/else):", aprobadosIfElse);

    // b. Usando operador ternario
    const aprobadosTernario = contarAprobadosTernario(alumnosTotales);
    console.log("b. Aprobados (Reduce con ternario):", aprobadosTernario);
    
    // Se muestra en el DOM el resultado
    document.getElementById('aprobadosReduce').textContent = aprobadosIfElse;
    document.getElementById('resultadoDobleReduce').textContent = (aprobadosIfElse === aprobadosTernario) ? "¡Coinciden!" : "Error";
};

// Se utiliza addEventListener para ejecutar la función cuando el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', iniciarPrograma);

// Nota: Los resultados también se mostrarán en la consola del navegador para mayor detalle.