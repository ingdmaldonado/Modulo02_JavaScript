
console.log(`inicio del programa`);
import { cohorte01, cohorte02, cohorte03, cohorte04 } from "./datos.js";
let todosLosAlumnos = [];
const mostrarAlumnos = (cohorte, numeroCohorte) => {
    console.log(`\n--- COHORTE ${numeroCohorte} ---`);
    cohorte.forEach(alumno => {
        console.log(`${alumno.apellido}, ${alumno.nombre}`);
    });
};
const unificarCohortes = () => {
    todosLosAlumnos = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
    console.log("\n--- TODOS LOS ALUMNOS UNIFICADOS ---");
    console.log(todosLosAlumnos);
    return todosLosAlumnos;
};
//  Funciones para separar aprobados y desaprobados
const separarAlumnos = () => {
    const alumnosAprobados = todosLosAlumnos.filter(alumno => alumno.nota_final > 5);
    const alumnosDesaprobados = todosLosAlumnos.filter(alumno => alumno.nota_final <= 5);
    console.log("\n--- ALUMNOS APROBADOS (nota > 5) ---");
    console.log(alumnosAprobados);
    console.log("\n--- ALUMNOS DESAPROBADOS (nota <= 5) ---");
    console.log(alumnosDesaprobados);
    
    return { aprobados: alumnosAprobados, desaprobados: alumnosDesaprobados };
};
//  Función para ordenar por nota
const ordenarPorNota = () => {
    const alumnosOrdenados = [...todosLosAlumnos].sort((a, b) => a.nota_final - b.nota_final);
    console.log("\n--- ALUMNOS ORDENADOS POR NOTA (menor a mayor) ---");
    console.log(alumnosOrdenados);
    return alumnosOrdenados;
};
//  Función para buscar alumno por DNI
const buscarAlumnoPorDni = (dni) => {
    const alumnoEncontrado = todosLosAlumnos.find(alumno => alumno.dni === dni);
    console.log(`\n--- BÚSQUEDA POR DNI: ${dni} ---`);
    if (alumnoEncontrado) {
        console.log("Alumno encontrado:", alumnoEncontrado);
    } else {
        console.log("No se encontró ningún alumno con ese DNI");
    }
    return alumnoEncontrado;
};
//  Función para contar aprobados usando if/else
const contarAprobadosConIf = () => {
    const cantidad = todosLosAlumnos.reduce((contador, alumno) => {
        if (alumno.nota_final > 5) {
            return contador + 1;
        } else {
            return contador;
        }
    }, 0);
    console.log("\n--- CONTEO CON IF/ELSE ---");
    console.log(`Cantidad de alumnos aprobados: ${cantidad}`);
    return cantidad;
};
//  Función para contar aprobados usando operador ternario
const contarAprobadosConTernario = () => {
    const cantidad = todosLosAlumnos.reduce((contador, alumno) => {
        return alumno.nota_final > 5 ? contador + 1 : contador;
    }, 0);
    
    console.log("\n--- CONTEO CON OPERADOR TERNARIO ---");
    console.log(`Cantidad de alumnos aprobados: ${cantidad}`);
    return cantidad;
};
const actualizarResultado = (elementoId, mensaje) => {
    const elemento = document.querySelector(`#${elementoId}`);
    elemento.style.display = 'block';
    elemento.innerHTML = mensaje;
};
window.addEventListener('DOMContentLoaded', () => {
    const btnMostrarCohortes = document.querySelector('#btnMostrarCohortes');
    const btnUnificarCohortes = document.querySelector('#btnUnificarCohortes');
    const btnSepararAlumnos = document.querySelector('#btnSepararAlumnos');
    const btnOrdenarNotas = document.querySelector('#btnOrdenarNotas');
    const btnBuscarAlumno = document.querySelector('#btnBuscarAlumno');
    const btnContarAprobadosIf = document.querySelector('#btnContarAprobadosIf');
    const btnContarAprobadosTernario = document.querySelector('#btnContarAprobadosTernario');
    const inputDni = document.querySelector('#inputDni');
    btnMostrarCohortes.addEventListener('click', () => {
        console.clear();
        console.log("=== EJERCICIO 1: MOSTRAR ALUMNOS POR COHORTE ===");
        mostrarAlumnos(cohorte01, 1);
        mostrarAlumnos(cohorte02, 2);
        mostrarAlumnos(cohorte03, 3);
        mostrarAlumnos(cohorte04, 4);
        actualizarResultado('resultadoCohortes', 
            'Se mostraron todos los alumnos por cohorte en la consola. Total de cohortes: 4');
    });
    btnUnificarCohortes.addEventListener('click', () => {
        console.log("=== EJERCICIO 2: UNIFICAR COHORTES ===");
        
        const unificados = unificarCohortes();
        
        actualizarResultado('resultadoUnificar', 
            `Se unificaron todas las cohortes usando spread operator. Total de alumnos: ${unificados.length}`);
    });
    btnSepararAlumnos.addEventListener('click', () => {
        if (todosLosAlumnos.length === 0) {
            alert('Primero debe unificar las cohortes');
            return;
        }
        
        console.log("=== EJERCICIO 3: SEPARAR APROBADOS Y DESAPROBADOS ===");
        const resultado = separarAlumnos();
        actualizarResultado('resultadoSeparar', 
            `Aprobados (nota > 5): ${resultado.aprobados.length} alumnos<br>
            Desaprobados (nota <= 5): ${resultado.desaprobados.length} alumnos`);
    });
    btnOrdenarNotas.addEventListener('click', () => {
        if (todosLosAlumnos.length === 0) {
            alert('Primero debe unificar las cohortes');
            return;
        }
        
        console.log("=== EJERCICIO 4: ORDENAR POR NOTA ===");
        
        const ordenados = ordenarPorNota();
        
        actualizarResultado('resultadoOrdenar', 
            `Se ordenaron ${ordenados.length} alumnos por nota (menor a mayor). Ver detalles en consola.`);
    });
    btnBuscarAlumno.addEventListener('click', () => {
        if (todosLosAlumnos.length === 0) {
            alert('Primero debe unificar las cohortes');
            return;
        }
        
        const dni = inputDni.value.trim();
        if (!dni) {
            alert('Ingrese un DNI para buscar');
            return;
        }
        
        console.log("=== EJERCICIO 5: BUSCAR ALUMNO POR DNI ===");
        
        const encontrado = buscarAlumnoPorDni(dni);
        
        if (encontrado) {
            actualizarResultado('resultadoBuscar', 
                `Alumno encontrado: ${encontrado.nombre} ${encontrado.apellido} - Nota: ${encontrado.nota_final}`);
        } else {
            actualizarResultado('resultadoBuscar', 
                `No se encontró ningún alumno con DNI: ${dni}`);
        }
        
        inputDni.value = '';
    });
    btnContarAprobadosIf.addEventListener('click', () => {
        if (todosLosAlumnos.length === 0) {
            alert('Primero debe unificar las cohortes');
            return;
        }
        
        console.log("=== EJERCICIO 6A: CONTAR APROBADOS CON IF/ELSE ===");
        
        const cantidad = contarAprobadosConIf();
        
        actualizarResultado('resultadoContar', 
            `Método IF/ELSE - Alumnos aprobados: ${cantidad} de ${todosLosAlumnos.length} totales`);
    });
    btnContarAprobadosTernario.addEventListener('click', () => {
        if (todosLosAlumnos.length === 0) {
            alert('Primero debe unificar las cohortes');
            return;
        }
        
        console.log("=== EJERCICIO 6B: CONTAR APROBADOS CON OPERADOR TERNARIO ===");
        
        const cantidad = contarAprobadosConTernario();
        
        actualizarResultado('resultadoContar', 
            `Método TERNARIO - Alumnos aprobados: ${cantidad} de ${todosLosAlumnos.length} totales`);
    });
    console.log("=== TRABAJO PRÁCTICO 04 - EJERCICIO 18 ===");
    console.log("Presiona los botones para ejecutar cada ejercicio");
    console.log("Se recomienda ejecutar 'Unificar Cohortes' antes que los demás ejercicios");
});

console.log(`fin del programa`);
