import {
    cohorte01, 
    cohorte02, 
    cohorte03, 
    cohorte04,
    mostrarAlumnos, 
    unificarCohortes,
    filtrarAprobados, 
    filtrarDesaprobados,
    ordenarPorNota, 
    buscarPorDni,
    contarAprobadosIf, 
    contarAprobadosTernario
} from "./modelo.js";

const salida = document.getElementById("salida");

const btnMostrar = document.getElementById("btnMostrar");
const btnUnificar = document.getElementById("btnUnificar");
const btnAprobados = document.getElementById("btnAprobados");
const btnOrdenar = document.getElementById("btnOrdenar");
const btnBuscar = document.getElementById("btnBuscar");
const btnContar = document.getElementById("btnContar");

let totalAlumnos = [];


/* ------------ Resultados de cada ejercicio ------------ */
/* ------------ EVENTOS ------------ */

// Ejercicio 1
btnMostrar.addEventListener("click", () => {
    let texto = "";
    texto += "Cohorte 01:\n" + mostrarAlumnos(cohorte01) + "\n";
    texto += "Cohorte 02:\n" + mostrarAlumnos(cohorte02) + "\n";
    texto += "Cohorte 03:\n" + mostrarAlumnos(cohorte03) + "\n";
    texto += "Cohorte 04:\n" + mostrarAlumnos(cohorte04);
    salida.textContent = texto;
});

// Ejercicio 2
btnUnificar.addEventListener("click", () => {
    totalAlumnos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
    salida.textContent = "Cohortes unificadas correctamente.\nTotal alumnos: " + totalAlumnos.length;
});

// Ejercicio 3
btnAprobados.addEventListener("click", () => {
    if (totalAlumnos.length === 0) return alert("Primero unifique las cohortes.");

    const aprobados = filtrarAprobados(totalAlumnos);
    const desaprobados = filtrarDesaprobados(totalAlumnos);

    salida.textContent =
        "Aprobados (" + aprobados.length + "):\n" +
        JSON.stringify(aprobados, null, 2) +
        "\n\nDesaprobados (" + desaprobados.length + "):\n" +
        JSON.stringify(desaprobados, null, 2);
});

// Ejercicio 4
btnOrdenar.addEventListener("click", () => {
    if (totalAlumnos.length === 0) return alert("Primero unifique las cohortes.");
    const ordenados = ordenarPorNota(totalAlumnos);
    salida.textContent = JSON.stringify(ordenados, null, 2);
});

// Ejercicio 5
btnBuscar.addEventListener("click", () => {
    if (totalAlumnos.length === 0) return alert("Primero unifique las cohortes.");

    const dni = prompt("Ingrese un DNI a buscar:");
    const encontrado = buscarPorDni(totalAlumnos, dni);


    if (encontrado) {
        salida.textContent = `Alumno encontrado: ${encontrado.apellido}, ${encontrado.nombre} | DNI: ${encontrado.dni} | Nota final: ${encontrado.nota_final}`;
    } else {
        salida.textContent = "No existe un alumno con ese DNI.";
    }
    
});

// Ejercicio 6
btnContar.addEventListener("click", () => {
    if (totalAlumnos.length === 0) return alert("Primero unifique las cohortes.");

    const n1 = contarAprobadosIf(totalAlumnos);
    const n2 = contarAprobadosTernario(totalAlumnos);

    salida.textContent = `Aprobados con IF/ELSE: ${n1}\n` + `Aprobados con Ternario: ${n2}`;
});

