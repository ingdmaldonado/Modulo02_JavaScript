import {
    cohorte01,
    cohorte02,
    cohorte03,
    cohorte04,
    fnMostrarAlumnos,
    fnUnificarCohortes,
    fnAprobados,
    fnDesaprobados,
    fnOrdenarPorNota,
    fnBuscarAlumno,
    fnContarAprobadosIfElse,
    fnContarAprobadosTernario,
    fnCantidadAlumnos,
    fnConvertirJSON,
    Alumno
} from "./modelo.js";

window.onload = ()=>{

    const idBotonProcesar =
        document.querySelector("#idBotonProcesar");

    idBotonProcesar.onclick = ()=>{

        /* =====================================
           PUNTO 1
           Mostrar alumnos con forEach
        ===================================== */

        console.log("PUNTO 1");

        fnMostrarAlumnos(cohorte01);
        fnMostrarAlumnos(cohorte02);
        fnMostrarAlumnos(cohorte03);
        fnMostrarAlumnos(cohorte04);

        /* =====================================
           PUNTO 2
           Unificar cohortes con Spread Operator
        ===================================== */

        console.log("PUNTO 2");

        const totalAlumnos = fnUnificarCohortes(
            cohorte01,
            cohorte02,
            cohorte03,
            cohorte04
        );

        console.log(totalAlumnos);

        /* =====================================
           PUNTO 3
           Filtrar aprobados y desaprobados
        ===================================== */

        console.log("PUNTO 3");

        const aprobados =
            fnAprobados(totalAlumnos);

        const desaprobados =
            fnDesaprobados(totalAlumnos);

        console.log(aprobados);
        console.log(desaprobados);

        /* =====================================
           PUNTO 4
           Ordenar por nota
        ===================================== */

        console.log("PUNTO 4");

        const ordenados =
            fnOrdenarPorNota(totalAlumnos);

        console.log(ordenados);

        /* =====================================
           PUNTO 5
           Buscar alumno por DNI
        ===================================== */

        console.log("PUNTO 5");

        const alumno =
            fnBuscarAlumno(
                totalAlumnos,
                "12345678"
            );

        console.log(alumno);

        /* =====================================
           PUNTO 6A
           Reduce con if/else
        ===================================== */

        console.log("PUNTO 6A");

        const cantidad1 =
            fnContarAprobadosIfElse(
                totalAlumnos
            );

        console.log(cantidad1);

        /* =====================================
           PUNTO 6B
           Reduce con operador ternario
        ===================================== */

        console.log("PUNTO 6B");

        const cantidad2 =
            fnContarAprobadosTernario(
                totalAlumnos
            );

        console.log(cantidad2);

                /* =====================================
           CLASES
        ===================================== */

        console.log("CLASES");

        const alumnoClase = new Alumno(
            "99999999",
            "Lorena",
            "Diaz",
            10
        );

        console.log(alumnoClase);

        /* =====================================
           REST OPERATOR
        ===================================== */

        console.log("REST OPERATOR");

        const cantidad =
            fnCantidadAlumnos(
                cohorte01[0],
                cohorte01[1],
                cohorte01[2]
            );

        console.log(cantidad);

        /* =====================================
           CONVERSION A JSON
        ===================================== */

        console.log("CONVERSION A JSON");

        const json =
            fnConvertirJSON(totalAlumnos);

        console.log(json);
        
        document.querySelector("#idResultado").innerHTML =
        "Procesamiento finalizado. Ver consola para resultados.";
    };

};