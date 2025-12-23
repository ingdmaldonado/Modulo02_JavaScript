
/*
Archivo controlador.js
Se encarga de capturar elementos del DOM,
asociar eventos y consumir las funciones del modelo
*/

import {
    listarAlumnos,
    unificarCohortes,
    obtenerAprobados,
    obtenerDesaprobados,
    ordenarPorNota,
    buscarPorDni,
    contarAprobadosIf,
    contarAprobadosTernario
} from "../Ejercicio 18/modelo.js";

// ------------------------
// Definición de cohortes
// ------------------------
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

// Captura del elemento donde se muestran los resultados
const salida = document.getElementById("salida");

// --------------------------------------------
// Evento 1: Listar alumnos por consola
// --------------------------------------------
document.getElementById("btnListar").addEventListener("click", () => {
    listarAlumnos(cohorte01);
    listarAlumnos(cohorte02);
    listarAlumnos(cohorte03);
    listarAlumnos(cohorte04);
    salida.textContent = "Listado de alumnos mostrado por consola.";
});

// --------------------------------------------
// Evento 2: Unificar cohortes (spread operator)
// --------------------------------------------
document.getElementById("btnUnificar").addEventListener("click", () => {
    const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
    salida.textContent = JSON.stringify(total, null, 2);
});

// --------------------------------------------
// Evento 3: Filtrar aprobados y desaprobados
// --------------------------------------------
document.getElementById("btnFiltrar").addEventListener("click", () => {
    const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);

    salida.textContent = JSON.stringify({
        alumnosAprobados: obtenerAprobados(total),
        alumnosDesaprobados: obtenerDesaprobados(total)
    }, null, 2);
});

// --------------------------------------------
// Evento 4: Ordenar alumnos por nota
// --------------------------------------------
document.getElementById("btnOrdenar").addEventListener("click", () => {
    const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
    salida.textContent = JSON.stringify(ordenarPorNota(total), null, 2);
});

// --------------------------------------------
// Evento 5: Buscar alumno por DNI
// --------------------------------------------
document.getElementById("btnBuscar").addEventListener("click", () => {
    const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
    salida.textContent = JSON.stringify(buscarPorDni(total, "89012345"), null, 2);
});

// --------------------------------------------
// Evento 6: Contabilizar aprobados (dos formas)
// --------------------------------------------
document.getElementById("btnContar").addEventListener("click", () => {
    const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);

    salida.textContent =
        `Aprobados (if/else): ${contarAprobadosIf(total)}\n` +
        `Aprobados (ternario): ${contarAprobadosTernario(total)}`;
});