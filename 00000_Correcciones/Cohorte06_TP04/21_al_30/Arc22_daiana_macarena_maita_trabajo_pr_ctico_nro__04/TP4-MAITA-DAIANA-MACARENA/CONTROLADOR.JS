import {
    cohorte01,
    cohorte02,
    cohorte03,
    cohorte04,
    mostrarAlumnos,
    unificarAlumnos,
    alumnosAprobados,
    alumnosDesaprobados,
    ordenarNotas,
    buscarAlumno,
    contarIfElse,
    contarTernario
} from "./modelo.js";

// Captura del elemento del DOM para mostrar resultados en pantalla
const txtResultado = document.getElementById("txtResultado");

// Ejercicio 1: Recorrer e invocar sucesivamente para las 4 cohortes
document.getElementById("btnEj1").addEventListener("click", () => {
    // Limpiamos y avisamos al usuario que revise también la consola del navegador
    console.clear();
    console.log("--- EJERCICIO 1: IMPRESIÓN POR CONSOLA ---");

    console.log(">> COHORTE 1:");
    const c1 = mostrarAlumnos(cohorte01);

    console.log(">> COHORTE 2:");
    const c2 = mostrarAlumnos(cohorte02);

    console.log(">> COHORTE 3:");
    const c3 = mostrarAlumnos(cohorte03);

    console.log(">> COHORTE 4:");
    const c4 = mostrarAlumnos(cohorte04);

    txtResultado.value =
        `[INFO] Se ha impreso el listado en la Consola (F12).\n\n` +
        `COHORTE 01:\n${c1}\n` +
        `COHORTE 02:\n${c2}\n` +
        `COHORTE 03:\n${c3}\n` +
        `COHORTE 04:\n${c4}`;
});

// Ejercicio 2: Unificar contenido en un solo vector y mostrar por consola y JSON
document.getElementById("btnEj2").addEventListener("click", () => {
    console.clear();
    const totalAlumnos = unificarAlumnos();

    // Cumple requerimiento de mostrar por consola el vector resultante
    console.log("--- EJERCICIO 2: VECTOR UNIFICADO ---", totalAlumnos);

    txtResultado.value =
        `[INFO] Se ha impreso el array de objetos en la Consola.\n\n` +
        `VECTOR UNIFICADO (Conversión JSON):\n` +
        JSON.stringify(totalAlumnos, null, 2);
});

// Ejercicio 3: Vectores filtrados (Aprobados y Desaprobados)
document.getElementById("btnEj3").addEventListener("click", () => {
    const totalAlumnos = unificarAlumnos();
    const aprobados = alumnosAprobados(totalAlumnos);
    const desaprobados = alumnosDesaprobados(totalAlumnos);

    txtResultado.value =
        `=========================================\n` +
        ` ALUMNOS APROBADOS (Nota > 5)\n` +
        `=========================================\n` +
        `${JSON.stringify(aprobados, null, 2)}\n\n` +
        `=========================================\n` +
        ` ALUMNOS DESAPROBADOS (Nota <= 5)\n` +
        `=========================================\n` +
        `${JSON.stringify(desaprobados, null, 2)}`;
});

// Ejercicio 4: Ordenar de menor a mayor por nota
document.getElementById("btnEj4").addEventListener("click", () => {
    const totalAlumnos = unificarAlumnos();
    const ordenados = ordenarNotas(totalAlumnos);

    txtResultado.value =
        `TOTAL ALUMNOS ORDENADOS POR NOTA (MENOR A MAYOR):\n` +
        JSON.stringify(ordenados, null, 2);
});

// Ejercicio 5: Búsqueda de alumno por DNI utilizando find
document.getElementById("btnEj5").addEventListener("click", () => {
    const totalAlumnos = unificarAlumnos();
    // Buscamos un DNI de ejemplo válido (Juan Pérez: "12345678")
    const dniABuscar = "12345678";
    const alumnoEncontrado = buscarAlumno(totalAlumnos, dniABuscar);

    if (alumnoEncontrado) {
        txtResultado.value =
            `ALUMNO ENCONTRADO PARA EL DNI: ${dniABuscar}\n` +
            JSON.stringify(alumnoEncontrado, null, 2);
    } else {
        txtResultado.value = `No se encontró ningún alumno con el DNI ${dniABuscar}.`;
    }
});

// Ejercicio 6: Contabilizar aprobados con reduce (Ambas variantes)
document.getElementById("btnEj6").addEventListener("click", () => {
    const totalAlumnos = unificarAlumnos();
    const resultadoIfElse = contarIfElse(totalAlumnos);
    const resultadoTernario = contarTernario(totalAlumnos);

    txtResultado.value =
        `CONTEO DE ALUMNOS APROBADOS (Nota > 5) CON REDUCE:\n\n` +
        `a) Resultado utilizando estructura IF/ELSE: ${resultadoIfElse} alumnos.\n` +
        `b) Resultado utilizando Operador TERNARIO: ${resultadoTernario} alumnos.\n\n` +
        `[OK] Ambas implementaciones llegaron exactamente al mismo resultado de manera correcta.`;
});