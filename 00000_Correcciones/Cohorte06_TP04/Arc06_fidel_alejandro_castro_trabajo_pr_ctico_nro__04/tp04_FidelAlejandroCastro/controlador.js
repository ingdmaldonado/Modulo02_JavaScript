import { cohorte01, cohorte02, cohorte03, cohorte04 } from "./modelo.js";

window.onload = function () {
    console.log(`Aplicación Iniciada Correctamente`);

    const ejerUnoOpciones = document.querySelector("#opciones");
    const btnUno = document.querySelector("#btnUno");
    const btnDos = document.querySelector("#btnDos");
    const btnTres = document.querySelector("#btnTres");
    const btnCuatro = document.querySelector("#btnCuatro");
    const btnCinco = document.querySelector("#btnCinco");
    const btnSeis = document.querySelector("#btnSeis");
    const dniAlumno = document.querySelector("#dniAlumno");
    const avisoDos = document.querySelector("#aviso2");

    btnUno.onclick = () => {
        let resultado = ejerUnoOpciones.value;
        let cohorte = 0;
        switch (resultado) {
            case "opcion1":
                cohorte = 1;
                mostrarAlumnos(cohorte01, cohorte);
                break;
            case "opcion2":
                cohorte = 2;
                mostrarAlumnos(cohorte02, cohorte);
                break;
            case "opcion3":
                cohorte = 3;
                mostrarAlumnos(cohorte03, cohorte);
                break;
            case "opcion4":
                cohorte = 4;
                mostrarAlumnos(cohorte04, cohorte);
                break;
            default:
                console.warn("Opción no válida seleccionada");
                break;
        }
    };

    function mostrarAlumnos(vectorAlumnos, cohorte) {
        console.log(`------------- Cohorte ${cohorte} -------------`);

        vectorAlumnos.forEach(alumno => {
            console.log(`${alumno.apellido} ${alumno.nombre}`);
        });
    }
    //------------- Unificación de Cohortes (spread de objetos)-------------");
    const AlumnosTodasCohortes = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

    btnTres.onclick = () => {
        console.log(`------------- Alumnos Aprobados -------------`);
        const aprobados = AlumnosTodasCohortes.filter(alumno => alumno.nota_final > 5).sort((a, b) => a.nota_final - b.nota_final);
        console.log(aprobados);
    };

    btnCuatro.onclick = () => {
        console.log(`------------- Alumnos Desaprobados -------------`);
        const aprobados = AlumnosTodasCohortes.filter(alumno => alumno.nota_final <= 5).sort((a, b) => a.nota_final - b.nota_final);
        console.log(aprobados);
    };

    btnCinco.onclick = () => {
        let dniIngresado = (dniAlumno.value);
        let buscarAlumno = AlumnosTodasCohortes.find(item => item.dni === dniIngresado);

        console.log(dniIngresado);

        if (buscarAlumno) {
            aviso2.textContent = `${buscarAlumno.nombre} ${buscarAlumno.apellido}`;
        }
        else {
            aviso2.textContent = "Alumno no encontrado";
        }
    };

    btnSeis.onclick = () => {
        console.log(`------------- Reduce con if/else-------------`);
        const cantidadAprobados = AlumnosTodasCohortes.reduce(
            (contador, alumno) => {
                if (alumno.nota_final > 5) {
                    return contador + 1;
                } else {
                    return contador;
                }
            }, 0
        );
        console.log(`Cant. de Alumnos Aprobados: ${cantidadAprobados}`);
        console.log(`------------- Reduce con operador ternario-------------`);
        const cantidadAprobadosDos = AlumnosTodasCohortes.reduce(
            (contador, alumno) =>
                alumno.nota_final > 5 ? contador + 1 : contador, 0
        );
        console.log(`Cant. de Alumnos Aprobados: ${cantidadAprobadosDos}`);
    };
}