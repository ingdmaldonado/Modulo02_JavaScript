
/* Importar cohortes */
import { cohorte01, cohorte02, cohorte03, cohorte04 } from './modulo.js'

/* Importar funciones */
import {
    mostrarApellidoNombre, crearVectorAlumnosAprobados, crearVectorAlumnosDesaprobados,
    mostrarVectorAlumnos, ordenarAlumnosPorNota, buscarAlumnoPorDni, contarAlumnosAprobados,
    contarAlumnosAprobadosOt, listarApellidosNombres, limpiarConsola, mostrarListaOrdenada, listarAlumnosAprobados, listarAlumnosDesaprobados,
    mostrarAlumnoEncontrado,mostrarCantidadAlumnosAprobados
} from "./modulo.js";


window.onload = () => {

    /* Punto 01 -  Mostrar por consola apellido y nombre de los alumnos de cada cohorte */
    console.log('----------------------------------- Listado de Apellido y nombres de los alumnos -----------------------------------------');
    console.log('------------- COHORTE 01 ---------');
    mostrarApellidoNombre(cohorte01);
    console.log('------------- COHORTE 02 ----------');
    mostrarApellidoNombre(cohorte02);
    console.log('------------- COHORTE 03 ----------');
    mostrarApellidoNombre(cohorte03);
    console.log('------------- COHORTE 04 ----------');
    mostrarApellidoNombre(cohorte04);
    

    /* Punto 02 - Unificar todos los alumnos en un solo vector Y mostrarlo por consola */
    const totalAlumnos = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
    console.log('------------ Vector Unificado de alumnos -------------');
    mostrarVectorAlumnos(totalAlumnos);

    const salida = document.querySelector('#output');

    /* Mostrar en el DOM apellido y nombre de los alumnos de cada cohorte */
    const btnListarCohortes = document.querySelector('#btn-listar');
    btnListarCohortes.addEventListener('click', () => {
        limpiarConsola(salida);
        listarApellidosNombres(cohorte01, 1, salida);
        listarApellidosNombres(cohorte02, 2, salida);
        listarApellidosNombres(cohorte03, 3, salida);
        listarApellidosNombres(cohorte04, 4, salida);
    });


    /* Punto 03 - Crear un vector de alumnos aprobados y otro de alumnos desaprobados */
    const btnListarAprobados = document.querySelector('#btn-listar-aprobados');
    btnListarAprobados.addEventListener('click', () => {
        limpiarConsola(salida);
        const alumnosAprobados = crearVectorAlumnosAprobados(totalAlumnos);
        listarAlumnosAprobados(alumnosAprobados, salida);
    });
        
    const btnListarDesaprobados = document.querySelector('#btn-listar-desaprobados');
    btnListarDesaprobados.addEventListener('click', () => {
        limpiarConsola(salida);
        const alumnosDesaprobados = crearVectorAlumnosDesaprobados(totalAlumnos);
        listarAlumnosDesaprobados(alumnosDesaprobados, salida);
    });

    /* Punto 04 - Ordenar alumnos por notas de menor a mayor */
    const btnOrdenarTotalAlumnos = document.querySelector('#btn-ordenar');
    btnOrdenarTotalAlumnos.addEventListener('click', () => {
        limpiarConsola(salida);
        const alumnosOrdenados = ordenarAlumnosPorNota(totalAlumnos);
        mostrarListaOrdenada(alumnosOrdenados, salida);
    });

    /* Punto 05 - Buscar alumno por dni */
    const bntBuscarPorDni = document.querySelector('#btn-buscar');
    bntBuscarPorDni.addEventListener('click', () => {
        limpiarConsola(salida);
        const inputDni = document.querySelector('#dni-buscar');
        const alumnoEncontrado = buscarAlumnoPorDni(totalAlumnos, inputDni.value);
        mostrarAlumnoEncontrado(alumnoEncontrado, salida);
    });

    /* Punto 06 - Contar cantidad de alumnos aprobados con if/else y operador ternario */
    const btnContarAprobados = document.querySelector('#btn-contar');
    btnContarAprobados.addEventListener('click', () => {
        limpiarConsola(salida);
        // Contar alumnos aprobados con if/else
        let cantidadAlumnosAprobados = contarAlumnosAprobados(totalAlumnos);
        mostrarCantidadAlumnosAprobados(cantidadAlumnosAprobados, salida);
        // Contar alumnos aprobados con operador ternario
        let cantidadAlumnosAprobadosOt = contarAlumnosAprobadosOt(totalAlumnos);
        mostrarCantidadAlumnosAprobados(cantidadAlumnosAprobadosOt, salida);
    });
};
