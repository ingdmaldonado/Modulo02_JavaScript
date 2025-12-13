import {
    cohorte01, cohorte02, cohorte03, cohorte04,
    mostrarAlumnos,
    unificarCohortes,
    filtrarAprobados, filtrarDesaprobados,
    ordenarPorNota,
    buscarPorDNI,
    contarAprobados_IF,
    contarAprobados_Ternario
} from "./modelo.js";

const salida = document.getElementById("resultado");

let todos = [];

document.getElementById("btnMostrar").addEventListener("click", () => {
    let texto = "";
    texto += "Cohorte 01:\n" + mostrarAlumnos(cohorte01) + "\n";
    texto += "Cohorte 02:\n" + mostrarAlumnos(cohorte02) + "\n";
    texto += "Cohorte 03:\n" + mostrarAlumnos(cohorte03) + "\n";
    texto += "Cohorte 04:\n" + mostrarAlumnos(cohorte04) + "\n";
    salida.textContent = texto;
});

document.getElementById("btnUnificar").addEventListener("click", () => {
    todos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
    salida.textContent = JSON.stringify(todos, null, 2);
});

document.getElementById("btnFiltrar").addEventListener("click", () => {
    if (todos.length === 0) return alert("Primero unifique cohortes.");
    const aprob = filtrarAprobados(todos);
    const desap = filtrarDesaprobados(todos);
    salida.textContent =
        "--- Aprobados ---\n" +
        JSON.stringify(aprob, null, 2) +
        "\n\n--- Desaprobados ---\n" +
        JSON.stringify(desap, null, 2);
});

document.getElementById("btnOrdenar").addEventListener("click", () => {
    if (todos.length === 0) return alert("Primero unifique cohortes.");
    const ordenados = ordenarPorNota(todos);
    salida.textContent = JSON.stringify(ordenados, null, 2);
});

document.getElementById("btnBuscar").addEventListener("click", () => {
    if (todos.length === 0) return alert("Primero unifique cohortes.");
    let dni = prompt("Ingrese DNI a buscar:");
    let encontrado = buscarPorDNI(todos, dni);
    salida.textContent = encontrado ?
        JSON.stringify(encontrado, null, 2)
        : "No existe alumno con ese DNI.";
});

document.getElementById("btnContar").addEventListener("click", () => {
    if (todos.length === 0) return alert("Primero unifique cohortes.");
    const cantIF = contarAprobados_IF(todos);
    const cantTern = contarAprobados_Ternario(todos);

    salida.textContent =
        `Aprobados con IF/ELSE: ${cantIF}\n` +
        `Aprobados con Ternario: ${cantTern}`;
});