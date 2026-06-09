import {
    mostrarAlumnos,
    unirCohortes,
    obtenerAprobados,
    obtenerDesaprobados,
    ordenarPorNota,
    buscarAlumno,
    contarAprobadosIf,
    contarAprobadosTernario
} from "./modelo.js";

// Cohorte 1
const cohorte01 = [
    { dni: "12345678", nombre: "Juan", apellido: "Pérez", nota_final: 8 },
    { dni: "23456789", nombre: "Ana", apellido: "Gómez", nota_final: 6 },
    { dni: "34567890", nombre: "Carlos", apellido: "López", nota_final: 5 },
    { dni: "45678901", nombre: "María", apellido: "Martínez", nota_final: 7 }
];

// Cohorte 2
const cohorte02 = [
    { dni: "56789012", nombre: "Sofía", apellido: "Ramírez", nota_final: 9 },
    { dni: "67890123", nombre: "Luis", apellido: "Fernández", nota_final: 4 },
    { dni: "78901234", nombre: "Elena", apellido: "Torres", nota_final: 5 }
];

// Cohorte 3
const cohorte03 = [
    { dni: "89012345", nombre: "Pedro", apellido: "Álvarez", nota_final: 10 },
    { dni: "90123456", nombre: "Clara", apellido: "Méndez", nota_final: 3 },
    { dni: "12345679", nombre: "Jorge", apellido: "Salinas", nota_final: 6 },
    { dni: "23456780", nombre: "Andrea", apellido: "Cruz", nota_final: 2 },
    { dni: "34567891", nombre: "Sergio", apellido: "Paredes", nota_final: 8 }
];

// Cohorte 4
const cohorte04 = [
    { dni: "45678902", nombre: "Lucía", apellido: "Ortiz", nota_final: 7 },
    { dni: "56789013", nombre: "Miguel", apellido: "Vega", nota_final: 4 },
    { dni: "67890124", nombre: "Raquel", apellido: "Silva", nota_final: 9 },
    { dni: "78901235", nombre: "Hugo", apellido: "Moreno", nota_final: 5 },
    { dni: "89012346", nombre: "Natalia", apellido: "Quinteros", nota_final: 6 },
    { dni: "90123457", nombre: "Diego", apellido: "Arce", nota_final: 3 }
];

const btnEjecutar = document.getElementById("btnEjecutar");
const resultado = document.getElementById("resultado");

btnEjecutar.addEventListener("click", () => {

    // Punto 1
    mostrarAlumnos(cohorte01);
    mostrarAlumnos(cohorte02);
    mostrarAlumnos(cohorte03);
    mostrarAlumnos(cohorte04);

    // Punto 2
    const todosLosAlumnos = unirCohortes(
        cohorte01,
        cohorte02,
        cohorte03,
        cohorte04
    );

    // Punto 3
    const aprobados = obtenerAprobados(todosLosAlumnos);
    const desaprobados = obtenerDesaprobados(todosLosAlumnos);

    // Punto 4
    const ordenados = ordenarPorNota(todosLosAlumnos);

    // Punto 5
    const alumnoEncontrado = buscarAlumno(
        todosLosAlumnos,
        "12345678"
    );

    // Punto 6
    const aprobadosIf =
        contarAprobadosIf(todosLosAlumnos);

    const aprobadosTernario =
        contarAprobadosTernario(todosLosAlumnos);

    resultado.innerHTML = `
        <h2>Total de alumnos</h2>
        <p>${todosLosAlumnos.length}</p>

        <h2>Alumnos aprobados</h2>
        <p>${aprobados.length}</p>

        <h2>Alumnos desaprobados</h2>
        <p>${desaprobados.length}</p>

        <h2>Alumno encontrado (find)</h2>
        <p>
            ${alumnoEncontrado.nombre}
            ${alumnoEncontrado.apellido}
            - DNI: ${alumnoEncontrado.dni}
            - Nota: ${alumnoEncontrado.nota_final}
        </p>

        <h2>Cantidad de aprobados con reduce (if/else)</h2>
        <p>${aprobadosIf}</p>

        <h2>Cantidad de aprobados con reduce (ternario)</h2>
        <p>${aprobadosTernario}</p>

        <h2>Listado ordenado por nota</h2>
        <ul>
            ${ordenados.map(alumno => `
                <li>
                    ${alumno.apellido},
                    ${alumno.nombre}
                    - Nota: ${alumno.nota_final}
                </li>
            `).join("")}
        </ul>
    `;
});