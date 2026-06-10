import {
    cohorte01,
    cohorte02,
    cohorte03,
    cohorte04,
    mostrarAlumnos,
    unificarCohortes,
    obtenerAprobados,
    obtenerDesaprobados,
    ordenarPorNota,
    buscarAlumno,
    contarAprobadosIf,
    contarAprobadosTernario
} from "./Modelo.js";

window.onload = () => {

    const btnProcesar = document.querySelector("#procesar");
    const resultado = document.querySelector("#resultado");

    btnProcesar.onclick = () => {

        mostrarAlumnos(cohorte01);
        mostrarAlumnos(cohorte02);
        mostrarAlumnos(cohorte03);
        mostrarAlumnos(cohorte04);

        const alumnos = unificarCohortes();

        console.log("TODOS LOS ALUMNOS");
        console.log(alumnos);

        const aprobados = obtenerAprobados(alumnos);
        const desaprobados = obtenerDesaprobados(alumnos);

        console.log("APROBADOS");
        console.log(aprobados);

        console.log("DESAPROBADOS");
        console.log(desaprobados);

        const ordenados = ordenarPorNota(alumnos);

        console.log("ORDENADOS");
        console.log(ordenados);

        const alumnoBuscado = buscarAlumno(alumnos, "89012345");

        console.log("ALUMNO ENCONTRADO");
        console.log(alumnoBuscado);

        const cantidadIf = contarAprobadosIf(alumnos);

        const cantidadTernario = contarAprobadosTernario(alumnos);

        resultado.innerHTML = `Total alumnos: ${alumnos.length}<br>
            Aprobados: ${aprobados.length}<br>
            Desaprobados: ${desaprobados.length}<br>
            Aprobados (IF): ${cantidadIf}<br>
            Aprobados (Ternario): ${cantidadTernario}`;
    };
};