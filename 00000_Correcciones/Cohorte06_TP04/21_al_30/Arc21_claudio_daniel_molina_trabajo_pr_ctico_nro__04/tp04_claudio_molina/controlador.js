
import { cohorte01, cohorte02, cohorte03, cohorte04 } from "./module.js";
import { todosLosAlumnos } from "./module.js";
import { mostrarAlumnos } from "./module.js";


window.onload = ()=>{

const btnMostrarAlumnos01 = document.querySelector("#btnMostrarAlumnos01");
const btnMostrarAlumnos02 = document.querySelector("#btnMostrarAlumnos02");
const btnMostrarAlumnos03 = document.querySelector("#btnMostrarAlumnos03");
const btnMostrarAlumnos04 = document.querySelector("#btnMostrarAlumnos04");
const btnMostrartodos = document.querySelector("#btnMostrartodos");
const btnMostrarAprobados = document.querySelector("#btnMostrarAprobados");
const btnMostrarDesaprobados = document.querySelector("#btnMostrarDesaprobados");
const btnMostrarOrdenadosNotas = document.querySelector("#btnMostrarOrdenadosNotas");
const inputDni = document.querySelector("#inputDni");
const btnAprobados1 = document.querySelector("#btnAprobados1");
const btnAprobados2 = document.querySelector("#btnAprobados2");


btnMostrarAlumnos01.onclick = () => {
    mostrarAlumnos(cohorte01);
};

btnMostrarAlumnos02.onclick = () => {
    mostrarAlumnos(cohorte02);
};

btnMostrarAlumnos03.onclick = () => {
    mostrarAlumnos(cohorte03);
};

btnMostrarAlumnos04.onclick = () => {
    mostrarAlumnos(cohorte04);
};

btnMostrartodos.onclick = () => {
    mostrarAlumnos(todosLosAlumnos);
};


btnMostrarAprobados.onclick = () => {
    const alumnosAprobados = todosLosAlumnos.filter(alumno => alumno.nota_final > 5);
    console.log(alumnosAprobados);
};

btnMostrarDesaprobados.onclick = () => {
    const alumnosDesaprobados = todosLosAlumnos.filter(alumno => alumno.nota_final <= 5);
    console.log(alumnosDesaprobados);
};

btnMostrarOrdenadosNotas.onclick = () => {

    const alumnosOrdenados = todosLosAlumnos.sort((a, b) => a.nota_final - b.nota_final);
    console.log(alumnosOrdenados);
};


inputDni.oninput = () => {

    const dniBuscado = inputDni.value;
    const alumnoEncontrado = todosLosAlumnos.find(alumno => alumno.dni === dniBuscado);
    console.log(alumnoEncontrado);
};

btnAprobados1.onclick = () => {
    const cantidadAprobados = todosLosAlumnos.reduce((contador, alumno) => {
        if (alumno.nota_final > 5) 
        {
            return contador + 1;
        }
        return contador;
    }, 0);
    console.log(`Cantidad de alumnos aprobados: ${cantidadAprobados}`);
};

btnAprobados2.onclick = () => {
    const cantidadAprobados = todosLosAlumnos.reduce((contador, alumno) => 
    {return alumno.nota_final > 5 ? contador + 1 : contador;}, 0);
    console.log(`Cantidad de alumnos aprobados: ${cantidadAprobados}`);
};

};


