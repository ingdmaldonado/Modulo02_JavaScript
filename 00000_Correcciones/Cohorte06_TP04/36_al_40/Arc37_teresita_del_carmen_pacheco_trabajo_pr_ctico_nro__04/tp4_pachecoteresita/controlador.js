import {
    mostrarAlumnos,
    obtenerAprobados,
    obtenerDesaprobados,
    ordenarPorNota,
    buscarPorDni,
    contarAprobadosIfElse,
    contarAprobadosTernario
}
from "./modelo.js";

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

const btnProcesar = document.getElementById("btnProcesar");
const resultado = document.getElementById("resultado");

btnProcesar.addEventListener("click", () => {

    // Punto 1

    const listaC1 = mostrarAlumnos(cohorte01);
    const listaC2 = mostrarAlumnos(cohorte02);
    const listaC3 = mostrarAlumnos(cohorte03);
    const listaC4 = mostrarAlumnos(cohorte04);

    // Punto 2

    const alumnosTotales = [
        ...cohorte01,
        ...cohorte02,
        ...cohorte03,
        ...cohorte04
    ];

    // Punto 3

    const aprobados =
        obtenerAprobados(alumnosTotales);

    const desaprobados =
        obtenerDesaprobados(alumnosTotales);

    // Punto 4

    const ordenados =
        ordenarPorNota(alumnosTotales);

    // Punto 5

    const alumnoEncontrado =
        buscarPorDni(
            alumnosTotales,
            "89012345"
        );

    // Punto 6

    const totalIfElse =
        contarAprobadosIfElse(alumnosTotales);

    const totalTernario =
        contarAprobadosTernario(alumnosTotales);

    resultado.innerHTML = `

    <div class="seccion">
        <h3>Punto 1 - Alumnos por Cohorte</h3>

        <p><strong>Cohorte 1:</strong></p>
        <ul>
            ${listaC1.map(a => `<li>${a}</li>`).join("")}
        </ul>

        <p><strong>Cohorte 2:</strong></p>
        <ul>
            ${listaC2.map(a => `<li>${a}</li>`).join("")}
        </ul>

        <p><strong>Cohorte 3:</strong></p>
        <ul>
            ${listaC3.map(a => `<li>${a}</li>`).join("")}
        </ul>

        <p><strong>Cohorte 4:</strong></p>
        <ul>
            ${listaC4.map(a => `<li>${a}</li>`).join("")}
        </ul>
    </div>

    <div class="seccion">
        <h3>Punto 2 - Cohortes Unificadas</h3>
        <p>Total alumnos: ${alumnosTotales.length}</p>
    </div>

    <div class="seccion">
        <h3>Punto 3 - Aprobados y Desaprobados</h3>
        <p>Aprobados: ${aprobados.length}</p>
        <p>Desaprobados: ${desaprobados.length}</p>
    </div>

    <div class="seccion">
        <h3>Punto 4 - Menor Nota</h3>
        <p>
            ${ordenados[0].apellido},
            ${ordenados[0].nombre}
            - Nota ${ordenados[0].nota_final}
        </p>
    </div>

    <div class="seccion">
        <h3>Punto 5 - Búsqueda por DNI</h3>
        <p>
            ${alumnoEncontrado.apellido},
            ${alumnoEncontrado.nombre}
            - DNI ${alumnoEncontrado.dni}
        </p>
    </div>

    <div class="seccion">
        <h3>Punto 6 - Conteo de Aprobados</h3>

        <p>
            Reduce con If/Else:
            ${totalIfElse}
        </p>

        <p>
            Reduce con Operador Ternario:
            ${totalTernario}
        </p>
    </div>

    `;

});