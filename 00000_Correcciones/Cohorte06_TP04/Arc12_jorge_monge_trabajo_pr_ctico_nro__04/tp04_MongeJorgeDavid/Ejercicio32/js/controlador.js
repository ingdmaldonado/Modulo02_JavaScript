import {

    mostrarAlumnos,
    unificarCohortes,
    obtenerAprobados,
    obtenerDesaprobados,
    ordenarPorNota,
    buscarAlumnoPorDni,
    contarAprobadosIf,
    contarAprobadosTernario

} from './modelo.js';

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

const btnProcesar =
    document.getElementById("btnProcesar");

const resultado =
    document.getElementById("resultado");

btnProcesar.addEventListener(

    "click",

    () => {

        // Punto 1
        console.log("=== COHORTE 01 ===");
        mostrarAlumnos(cohorte01);

        console.log("=== COHORTE 02 ===");
        mostrarAlumnos(cohorte02);

        console.log("=== COHORTE 03 ===");
        mostrarAlumnos(cohorte03);

        console.log("=== COHORTE 04 ===");
        mostrarAlumnos(cohorte04);

        // Punto 2
        const alumnos = unificarCohortes(

            cohorte01,
            cohorte02,
            cohorte03,
            cohorte04
        );

        console.log(
            "VECTOR UNIFICADO"
        );

        console.log(alumnos);

        // Punto 3
        const alumnosAprobados =
            obtenerAprobados(alumnos);

        const alumnosDesaprobados =
            obtenerDesaprobados(alumnos);

        // Punto 4
        const alumnosOrdenados =
            ordenarPorNota(alumnos);

        // Punto 5
        const alumnoBuscado =
            buscarAlumnoPorDni(
                alumnos,
                "89012345"
            );

        // Destructuring objeto
        const {
            dni,
            nombre,
            apellido,
            nota_final
        } = alumnoBuscado;

        // Destructuring array
        const [

            primerAlumno,
            segundoAlumno,
            ...restoAlumnos

        ] = alumnos;

        console.log(
            "Primer Alumno",
            primerAlumno
        );

        console.log(
            "Segundo Alumno",
            segundoAlumno
        );

        console.log(
            "Resto de Alumnos",
            restoAlumnos
        );

        // Punto 6
        const aprobadosIf =
            contarAprobadosIf(alumnos);

        const aprobadosTernario =
            contarAprobadosTernario(alumnos);

        resultado.textContent =

`===== RESULTADOS =====

TOTAL ALUMNOS:
${alumnos.length}

APROBADOS:
${alumnosAprobados.length}

DESAPROBADOS:
${alumnosDesaprobados.length}

ALUMNO BUSCADO

DNI: ${dni}
NOMBRE: ${nombre}
APELLIDO: ${apellido}
NOTA FINAL: ${nota_final}

APROBADOS (IF):
${aprobadosIf}

APROBADOS (TERNARIO):
${aprobadosTernario}

VECTOR ORDENADO POR NOTA

${JSON.stringify(
    alumnosOrdenados,
    null,
    2
)}
`;
    }
);