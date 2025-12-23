// controlador.js

import {
    listarAlumnos,
    obtenerAprobados,
    obtenerDesaprobados,
    contarAprobadosIf,
    contarAprobadosTernario
} from "./modelo.js";

// ================= DATOS =================

const cohorte01 = [
    { dni: "1", nombre: "Juan", apellido: "Perez", nota_final: 8 },
    { dni: "2", nombre: "Ana", apellido: "Gomez", nota_final: 6 }
];

const cohorte02 = [
    { dni: "3", nombre: "Luis", apellido: "Lopez", nota_final: 4 },
    { dni: "4", nombre: "Maria", apellido: "Diaz", nota_final: 9 }
];

const cohorte03 = [
    { dni: "5", nombre: "Pedro", apellido: "Sosa", nota_final: 5 },
    { dni: "6", nombre: "Laura", apellido: "Torres", nota_final: 7 }
];

const cohorte04 = [
    { dni: "7", nombre: "Sofia", apellido: "Mendez", nota_final: 10 },
    { dni: "8", nombre: "Diego", apellido: "Ramos", nota_final: 3 }
];

// ================= DOM =================

window.onload = () => {

    const btnMostrar = document.getElementById("btnMostrar");
    const btnUnificar = document.getElementById("btnUnificar");
    const salida = document.getElementById("salida");

    // Mostrar cohortes por separado
    btnMostrar.onclick = () => {

        salida.innerHTML = `
            <h2>Cohorte 01</h2>
            ${listarAlumnos(cohorte01)}

            <h2>Cohorte 02</h2>
            ${listarAlumnos(cohorte02)}

            <h2>Cohorte 03</h2>
            ${listarAlumnos(cohorte03)}

            <h2>Cohorte 04</h2>
            ${listarAlumnos(cohorte04)}
        `;
    };

    // Unificar cohortes y mostrar resultados
    btnUnificar.onclick = () => {

        const todosLosAlumnos = [
            ...cohorte01,
            ...cohorte02,
            ...cohorte03,
            ...cohorte04
        ];

        const aprobados = obtenerAprobados(todosLosAlumnos);
        const desaprobados = obtenerDesaprobados(todosLosAlumnos);

        salida.innerHTML = `
            <h2>Todos los alumnos</h2>
            ${listarAlumnos(todosLosAlumnos)}

            <h3>Aprobados</h3>
            ${listarAlumnos(aprobados)}

            <h3>Desaprobados</h3>
            ${listarAlumnos(desaprobados)}

            <p>Cantidad de aprobados (IF): ${contarAprobadosIf(todosLosAlumnos)}</p>
            <p>Cantidad de aprobados (Ternario): ${contarAprobadosTernario(todosLosAlumnos)}</p>
        `;
    };
};
