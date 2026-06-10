import { cohorte01,cohorte02,cohorte03,cohorte04 } from "./module.js";


function funAlumnos(vectoralumnos) {

    vectoralumnos.forEach(alumno  => {
    console.log(`Apellido: ${alumno.apellido}, Nombre: ${alumno.nombre}`);
  });
}


const CohorteUnificadas = [...cohorte01,...cohorte02,...cohorte03,...cohorte04];

CohorteUnificadas.sort((alumnoA,alumnoB) => alumnoA.nota_final - alumnoB.nota_final)


const AlumnosAprobados = (CohorteUnificadas) => CohorteUnificadas.filter(alumno => alumno.nota_final > 5);
       

const AlumnosDesaprobados = (CohorteUnificadas) => CohorteUnificadas.filter(alumno => alumno.nota_final <= 5);


const dniBuscado = "23456789";
const alumnoBuscado = CohorteUnificadas.find(alumno => alumno.dni === dniBuscado);



const totalAprobadosIfElse = CohorteUnificadas.reduce((contador, alumno) => {
    if (alumno.nota_final > 5) {
        return contador + 1;
    } else {
        return contador;
    }
}, 0);


const totalAprobadosTernario = CohorteUnificadas.reduce(
    (contador, alumno) => contador + (alumno.nota_final > 5 ? 1 : 0),
    0
);


window.onload = () => {


    const idVectorALumnos = document.querySelector("#idVectorAlumnos");
    const idCohorteUnificadas = document.querySelector("#idCohorteUnificadas");
    const idAlumnosAprobados = document.querySelector("#idAlumnosAprobados");
    const idAlumnosDesaprobados = document.querySelector("#idAlumnosDesaprobados");
    const idalumnoBuscado = document.querySelector("#idalumnoBuscado");
    const idtotalAprobadosIfElse = document.querySelector("#idtotalAprobadosIfElse");
    const idtotalAprobadosTernario = document.querySelector("#idtotalAprobadosTernario"); 



    idVectorALumnos.onclick = () => {

        console.log("-- Vector de Nombres y Apellidos de Alumnos Cohorte 1 --");

        console.log(funAlumnos(cohorte01));

        console.log("-- Vector de Nombres y Apellidos de Alumnos Cohorte 2 --");

        console.log(funAlumnos(cohorte02));

        console.log("-- Vector de Nombres y Apellidos de Alumnos Cohorte 3 --");

        console.log(funAlumnos(cohorte03));

        console.log("-- Vector de Nombres y Apellidos de Alumnos Cohorte 4 --");

        console.log(funAlumnos(cohorte04));

        }

    idCohorteUnificadas.onclick = () => {
        
        console.log(CohorteUnificadas);

    }

    idAlumnosAprobados.onclick = () => {
        console.log(AlumnosAprobados(CohorteUnificadas));
    }
        idAlumnosDesaprobados.onclick = () => {
        console.log(AlumnosDesaprobados(CohorteUnificadas));
    }
    idalumnoBuscado.onclick = () => {
        console.log(alumnoBuscado);
    }
    idtotalAprobadosIfElse.onclick = () => {
        console.log(totalAprobadosIfElse);

    }
    idtotalAprobadosTernario.onclick = () => {
        console.log(totalAprobadosTernario);
    }

    



}