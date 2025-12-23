import {
    mostrarListado,
    fusionarCohortes,
    filtrarAprobados,
    filtrarDesaprobados,
    ordenarNotas,
    buscarAlumnoDni,
    totalAprobadosIf,
    totalAprobadosTernario
} from "./modelo.js";

// DOM
const resultado = document.getElementById("resultado");

const btnMostrar = document.getElementById("btnMostrar");
const btnUnir = document.getElementById("btnUnir");
const btnEstado = document.getElementById("btnEstado");
const btnNotas = document.getElementById("btnNotas");
const btnDni = document.getElementById("btnDni");
const btnCantidad = document.getElementById("btnCantidad");

// Datos
const grupoA = [
    { dni: "11111111", nombre: "Lucas", apellido: "Giménez", nota: 7 },
    { dni: "22222222", nombre: "Tomás", apellido: "Ríos", nota: 5 }
];

const grupoB = [
    { dni: "33333333", nombre: "Matías", apellido: "Luna", nota: 9 },
    { dni: "44444444", nombre: "Federico", apellido: "Paz", nota: 4 }
];

const grupoC = [
    { dni: "55555555", nombre: "Agustín", apellido: "Molina", nota: 6 },
    { dni: "66666666", nombre: "Bruno", apellido: "Cáceres", nota: 8 }
];

let alumnosTotales = [];

// Mostrar alumnos por consola
btnMostrar.addEventListener("click", () => {
    mostrarListado(grupoA);
    mostrarListado(grupoB);
    mostrarListado(grupoC);
    resultado.textContent = "Listado generado en consola";
});

// Unir cohortes
btnUnir.addEventListener("click", () => {
    alumnosTotales = fusionarCohortes(grupoA, grupoB, grupoC);
    resultado.textContent = JSON.stringify(alumnosTotales, null, 2);
});

// Estado académico
btnEstado.addEventListener("click", () => {
    if (alumnosTotales.length === 0) {
        alumnosTotales = fusionarCohortes(grupoA, grupoB, grupoC);
    }

    const aprobados = filtrarAprobados(alumnosTotales);
    const desaprobados = filtrarDesaprobados(alumnosTotales);

    resultado.textContent =
        "APROBADOS:\n" + JSON.stringify(aprobados, null, 2) +
        "\n\nDESAPROBADOS:\n" + JSON.stringify(desaprobados, null, 2);
});

// Ordenar notas
btnNotas.addEventListener("click", () => {
    if (alumnosTotales.length === 0) {
        alumnosTotales = fusionarCohortes(grupoA, grupoB, grupoC);
    }
    resultado.textContent = JSON.stringify(ordenarNotas(alumnosTotales), null, 2);
});

// Buscar por DNI
btnDni.addEventListener("click", () => {
    if (alumnosTotales.length === 0) {
        alumnosTotales = fusionarCohortes(grupoA, grupoB, grupoC);
    }
    resultado.textContent = JSON.stringify(
        buscarAlumnoDni(alumnosTotales, "33333333"),
        null,
        2
    );
});

// Contar aprobados
btnCantidad.addEventListener("click", () => {
    if (alumnosTotales.length === 0) {
        alumnosTotales = fusionarCohortes(grupoA, grupoB, grupoC);
    }

    resultado.textContent =
        `Total aprobados : ${totalAprobadosIf(alumnosTotales)}\n` +
        `Total aprobados: ${totalAprobadosTernario(alumnosTotales)}`;
});
