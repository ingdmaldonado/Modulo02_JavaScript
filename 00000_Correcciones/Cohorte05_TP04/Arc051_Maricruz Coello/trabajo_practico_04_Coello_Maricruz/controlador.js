import {
    listarAlumnos,
    unificarCohortes,
    obtenerAprobados,
    obtenerDesaprobados,
    ordenarPorNota,
    buscarPorDni,
    contarAprobadosIf,
    contarAprobadosTernario
} from "./modelo.js";

// DOM
const salida = document.getElementById("salida");
const btnListar = document.getElementById("btnListar");
const btnUnificar = document.getElementById("btnUnificar");
const btnAprobados = document.getElementById("btnAprobados");
const btnOrdenar = document.getElementById("btnOrdenar");
const btnBuscar = document.getElementById("btnBuscar");
const btnContar = document.getElementById("btnContar");

// Cohortes
const cohorte01 = [
    { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 },
    { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 },
    { dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 },
    { dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7 }
];

const cohorte02 = [
    { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 },
    { dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 },
    { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 }
];

const cohorte03 = [
    { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 },
    { dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 },
    { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 },
    { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 },
    { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 }
];

const cohorte04 = [
    { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 },
    { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 },
    { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 },
    { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 },
    { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 },
    { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 }
];

let totalAlumnos = [];

// 1) Listar alumnos
btnListar.addEventListener("click", () => {
    listarAlumnos(cohorte01);
    listarAlumnos(cohorte02);
    listarAlumnos(cohorte03);
    listarAlumnos(cohorte04);
    salida.textContent = "Listado mostrado por consola";
});

// 2) Unificar cohortes
btnUnificar.addEventListener("click", () => {
    totalAlumnos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
    salida.textContent = JSON.stringify(totalAlumnos, null, 2);
});

// 3) Aprobados / desaprobados
btnAprobados.addEventListener("click", () => {
    if (totalAlumnos.length === 0) {
        totalAlumnos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
    }
    const aprobados = obtenerAprobados(totalAlumnos);
    const desaprobados = obtenerDesaprobados(totalAlumnos);
    salida.textContent =
        `Aprobados:\n${JSON.stringify(aprobados, null, 2)}\n\n` +
        `Desaprobados:\n${JSON.stringify(desaprobados, null, 2)}`;
});

// 4) Ordenar por nota
btnOrdenar.addEventListener("click", () => {
    if (totalAlumnos.length === 0) {
        totalAlumnos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
    }
    salida.textContent = JSON.stringify(ordenarPorNota(totalAlumnos), null, 2);
});

// 5) Buscar por DNI
btnBuscar.addEventListener("click", () => {
    if (totalAlumnos.length === 0) {
        totalAlumnos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
    }
    salida.textContent = JSON.stringify(
        buscarPorDni(totalAlumnos, "12345678"),
        null,
        2
    );
});

// 6) Contar aprobados
btnContar.addEventListener("click", () => {
    if (totalAlumnos.length === 0) {
        totalAlumnos = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
    }
    const totalIf = contarAprobadosIf(totalAlumnos);
    const totalTernario = contarAprobadosTernario(totalAlumnos);
    salida.textContent =
        `Aprobados (if/else): ${totalIf}\n` +
        `Aprobados (ternario): ${totalTernario}`;
});
