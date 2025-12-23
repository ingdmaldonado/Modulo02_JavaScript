import {cohorte01, cohorte02, cohorte03, cohorte04} from "./datos.js";
import { RecorreCohorte, alumnosAprobados, alumnosDesaprobados, busquedaAlumno, contabilizarAprobados1, contabilizarAprobados2, ordenarPorNotas} from "./modelo.js";

window.onload=()=>{
    console.log("El programa esta corriendo");
    const AlumnoPorCohorte=document.querySelector("#btnMostrar");
    const UnificarCohortes=document.querySelector("#btnUnificar");
    const AprobadosYDesaprobados=document.querySelector("#btnAprobadosDesaprobados");
    const OrdenarNotas=document.querySelector("#btnOrdenar");
    const BuscarAlumno=document.querySelector("#btnBuscar");
    const ContarAprobados=document.querySelector("#btnContar");

    //EJERCICIO N°1 - recorrido de las cohortes y muetra del Apellido y Nombre.
    AlumnoPorCohorte.onclick=()=>{
        console.log("----------MOSTRAR ALUMNOS----------");
        console.log("----Alumnos de la Cohorte 1:----");
        RecorreCohorte(cohorte01);
        console.log("----Alumnos de la Cohorte 2:----");
        RecorreCohorte(cohorte02);
        console.log("----Alumnos de la Cohorte 3:----");
        RecorreCohorte(cohorte03);
        console.log("----Alumnos de la Cohorte 4:----");
        RecorreCohorte(cohorte04);
    }
    
    //EJERCICIO N°2 - unificacion de las 4 cohortes.
    const Unificados=[...cohorte01,...cohorte02,...cohorte03,...cohorte04];
    UnificarCohortes.onclick=()=>{
        console.log("----------TODAS LAS COHORTES UNIFICADAS----------");
        console.log(Unificados);
    }

    //EJERCICIO N°3 - ver aprobados y desaprobados del vector unificado.
    AprobadosYDesaprobados.onclick=()=>{
        const Aprobados=alumnosAprobados(Unificados);
        console.log("----------APROBADOS----------");
        console.log(Aprobados);
        const Desaprobados=alumnosDesaprobados(Unificados);
        console.log("----------DESAPROBADOS----------");
        console.log(Desaprobados);
    }

    //EJERCICIO N°4 - ordenar por nota de menor a mayor.
    OrdenarNotas.onclick=()=>{
        console.log("----------ORDEN POR NOTA----------");
        ordenarPorNotas(Unificados);
    }

    //EJERCICIO N°5 - buscar el alumno por su DNI del vector unificado.
    BuscarAlumno.onclick=()=>{
        let dniBuscar=prompt("Ingrese el numero de DNI que desea buscar:");
        let encontrado=busquedaAlumno(Unificados, dniBuscar);
        console.log(encontrado);
    }

    //EJERCICIO N°6 - contabilizar la cantidad de alumnos aprobados.
    ContarAprobados.onclick=()=>{
        console.log("----------ALUMNOS APROBADOS---------");
        console.log("1)con condicional if/else:");
        contabilizarAprobados1(Unificados);

        console.log("2)con operadores ternario:");
        contabilizarAprobados2(Unificados);
    }
};