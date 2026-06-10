import
{
    mostrarAlumnos,
    unificarCohortes,
    obtenerAprobados,
    obtenerDesaprobados,
    ordenarPorNota,
    buscarAlumno,
    contarAprobadosIf,
    contarAprobadosTernario
}
from "./modelo.js";


// Cohorte 01

const cohorte01 =
[
    { dni:"12345678", nombre:"Juan", apellido:"Pérez", nota_final:8 },
    { dni:"23456789", nombre:"Ana", apellido:"Gómez", nota_final:6 },
    { dni:"34567890", nombre:"Carlos", apellido:"López", nota_final:5 },
    { dni:"45678901", nombre:"María", apellido:"Martínez", nota_final:7 }
];


// Cohorte 02

const cohorte02 =
[
    { dni:"56789012", nombre:"Sofía", apellido:"Ramírez", nota_final:9 },
    { dni:"67890123", nombre:"Luis", apellido:"Fernández", nota_final:4 },
    { dni:"78901234", nombre:"Elena", apellido:"Torres", nota_final:5 }
];


// Cohorte 03

const cohorte03 =
[
    { dni:"89012345", nombre:"Pedro", apellido:"Álvarez", nota_final:10 },
    { dni:"90123456", nombre:"Clara", apellido:"Méndez", nota_final:3 },
    { dni:"12345679", nombre:"Jorge", apellido:"Salinas", nota_final:6 },
    { dni:"23456780", nombre:"Andrea", apellido:"Cruz", nota_final:2 },
    { dni:"34567891", nombre:"Sergio", apellido:"Paredes", nota_final:8 }
];


// Cohorte 04

const cohorte04 =
[
    { dni:"45678902", nombre:"Lucía", apellido:"Ortiz", nota_final:7 },
    { dni:"56789013", nombre:"Miguel", apellido:"Vega", nota_final:4 },
    { dni:"67890124", nombre:"Raquel", apellido:"Silva", nota_final:9 },
    { dni:"78901235", nombre:"Hugo", apellido:"Moreno", nota_final:5 },
    { dni:"89012346", nombre:"Natalia", apellido:"Quinteros", nota_final:6 },
    { dni:"90123457", nombre:"Diego", apellido:"Arce", nota_final:3 }
];


// DOM

const btnEjecutar =
document.getElementById("btnEjecutar");

const resultado =
document.getElementById("resultado");


// Evento

btnEjecutar.addEventListener(
    "click",
    () =>
    {
        console.clear();


        console.log(
            "===== MOSTRAR ALUMNOS ====="
        );

        mostrarAlumnos(cohorte01);
        mostrarAlumnos(cohorte02);
        mostrarAlumnos(cohorte03);
        mostrarAlumnos(cohorte04);


        console.log(
            "===== UNIFICAR COHORTES ====="
        );

        const alumnos =
        unificarCohortes(
            cohorte01,
            cohorte02,
            cohorte03,
            cohorte04
        );

        console.table(alumnos);


        console.log(
            "===== APROBADOS ====="
        );

        const alumnosAprobados =
        obtenerAprobados(alumnos);

        console.table(alumnosAprobados);


        console.log(
            "===== DESAPROBADOS ====="
        );

        const alumnosDesaprobados =
        obtenerDesaprobados(alumnos);

        console.table(alumnosDesaprobados);


        console.log(
            "===== ORDENADOS POR NOTA ====="
        );

        const alumnosOrdenados =
        ordenarPorNota(alumnos);

        console.table(alumnosOrdenados);


        console.log(
            "===== BUSCAR ALUMNO ====="
        );

        const alumno =
        buscarAlumno(
            alumnos,
            "89012345"
        );

        console.table([alumno]);


        console.log(
            "===== DESTRUCTURING ====="
        );

        const
        {
            nombre,
            apellido,
            nota_final
        }
        =
        alumnos[0];

        console.log(nombre);
        console.log(apellido);
        console.log(nota_final);


        console.log(
            "===== JSON ====="
        );

        const jsonAlumnos =
        JSON.stringify(alumnos);

        console.log(jsonAlumnos);

        const alumnosParseados =
        JSON.parse(jsonAlumnos);

        console.log(alumnosParseados);


        console.log(
            "===== CONTAR APROBADOS IF ====="
        );

        console.log(
            contarAprobadosIf(alumnos)
        );


        console.log(
            "===== CONTAR APROBADOS TERNARIO ====="
        );

        console.log(
            contarAprobadosTernario(alumnos)
        );


        resultado.innerHTML =
        `
        <h3 class="text-green-600 font-bold">
            Trabajo ejecutado correctamente
        </h3>

        <p>
            Total de alumnos: ${alumnos.length}
        </p>

        <p>
            Aprobados: ${contarAprobadosIf(alumnos)}
        </p>

        <p>
            Desaprobados:
            ${alumnos.length - contarAprobadosIf(alumnos)}
        </p>

        <p>
            Revise la consola del navegador (F12)
        </p>
        `;
    }
);