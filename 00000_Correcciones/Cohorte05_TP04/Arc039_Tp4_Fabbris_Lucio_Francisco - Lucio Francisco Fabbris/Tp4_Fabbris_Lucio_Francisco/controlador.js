
import {cohorte01,cohorte02,cohorte03,cohorte04} from "./modelo.js";
import {mostrarCohorte} from "./modelo.js";
import {unificarCohortes} from "./modelo.js";
import {alumnosAprobados,alumnosDesaprobados} from "./modelo.js";
import {ordenarPorNota} from "./modelo.js";
import {buscarAlumno} from "./modelo.js";
import {contarAprobados} from "./modelo.js";

window.onload = ()=>{

const btnMostrar   = document.querySelector("#btnMostrar");

const btnUnificar  = document.querySelector("#btnUnificar");

const btnAprobados = document.querySelector("#btnAprobados");

const btnOrdenar   = document.querySelector("#btnOrdenar");

const btnBuscar    = document.querySelector("#btnBuscar");

const btnContar    = document.querySelector("#btnContar");
// Punto 1
btnMostrar.onclick = () => {
    console.log("COHORTE 1");
    mostrarCohorte(cohorte01);

    console.log("COHORTE 2");
    mostrarCohorte(cohorte02);

    console.log("COHORTE 3");
    mostrarCohorte(cohorte03);

    console.log("COHORTE 4");
    mostrarCohorte(cohorte04);

    console.log(`---------------------------------------------------`);
};

// Punto 2
btnUnificar.onclick = () => {
    const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
    total.forEach(alumno => {
        console.log(alumno.apellido + ", " + alumno.nombre);
    });

    console.log(`---------------------------------------------------`);
};

// Punto 3
btnAprobados.onclick = () => {
    const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);

    console.log("APROBADOS");
    alumnosAprobados(total).forEach(a => {
        console.log(a.apellido + " " + a.nombre);
    });

    console.log("DESAPROBADOS");
    alumnosDesaprobados(total).forEach(a => {
        console.log(a.apellido + " " + a.nombre);
    });

    console.log(`---------------------------------------------------`);
};

// Punto 4
btnOrdenar.onclick = () => {
    const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
    ordenarPorNota(total).forEach(a => {
        console.log(a.apellido + " - Nota: " + a.nota_final);
    });

    console.log(`---------------------------------------------------`);
};

// Punto 5
btnBuscar.onclick = () => {
    const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
    const dni = prompt("Ingrese DNI a buscar");
    const alumno = buscarAlumno(total, dni);

    alumno
        ? console.log(alumno.apellido + " " + alumno.nombre)
        : console.log("Alumno no encontrado");

        console.log(`---------------------------------------------------`);
};

// Punto 6
btnContar.onclick = () => {
    const total = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
    console.log("Cantidad de aprobados: " + contarAprobados(total));

    console.log(`---------------------------------------------------`);
};


};