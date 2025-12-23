
import {devolverNombreyApellido, cohorte01, cohorte02, cohorte03, cohorte04, unificarAlumnos, alumnosAprobados, alumnosDesaprobados, ordenarNotas, buscarAlumno, contarAlumnosForma1, contarAlumnosForma2} from "./modelo.js"

window.onload = () => {
    console.log("running");

    const btnNombresYApellidos = document.querySelector("#btnNombresYApellidos");
    const btnUnificarAlumnos = document.querySelector("#btnUnificarAlumnos");
    const btnAprobados = document.querySelector("#btnAprobados");
    const btnDesaprobados = document.querySelector("#btnDesaprobados");
    const btnOrdenarNotas = document.querySelector("#btnOrdenarNotas");
    const btnBuscarAlumno = document.querySelector("#btnBuscarAlumno");
    const btnContarAprobados1 = document.querySelector("#btnContarAprobados1");
    const btnContarAprobados2 = document.querySelector("#btnContarAprobados2");

    const idResultado = document.querySelector("#idResultado");

    //boton para el ejercicio 1
    btnNombresYApellidos.onclick = () =>{
        console.log(`Cohorte 1`);
        devolverNombreyApellido(cohorte01);
        console.log('Cohorte 2');
        devolverNombreyApellido(cohorte02);
        console.log('Cohorte 3');
        devolverNombreyApellido(cohorte03);
        console.log('Cohorte 4');
        devolverNombreyApellido(cohorte04);


    };

    //boton para el ejercicio 2
    btnUnificarAlumnos.onclick = () =>{
       let vectorNuevoAlumnos = unificarAlumnos(cohorte01,cohorte02,cohorte03,cohorte04);
       console.log(vectorNuevoAlumnos);
    };

    //botones para el ejercicio 3
    btnAprobados.onclick = () => {
        console.log(alumnosAprobados(unificarAlumnos(cohorte01,cohorte02,cohorte03,cohorte04)));
       idResultado.textContent = '';
       alumnosAprobados(unificarAlumnos(cohorte01,cohorte02,cohorte03,cohorte04)).forEach(elemento => {
            idResultado.textContent += `\n nombre: ${elemento.nombre} | apellido: ${elemento.apellido} | APROBADO`;
       });
    };

    btnDesaprobados.onclick = () =>{
        console.log(alumnosDesaprobados(unificarAlumnos(cohorte01, cohorte02,cohorte03, cohorte04)));
        idResultado.textContent = '';
       alumnosDesaprobados(unificarAlumnos(cohorte01,cohorte02,cohorte03,cohorte04)).forEach(elemento => {
            idResultado.textContent += `\n nombre: ${elemento.nombre} | apellido: ${elemento.apellido} | DESAPROBADO`;
       });
    };

    //boton para el ejercicio 4
    btnOrdenarNotas.onclick = () => {
        console.log(ordenarNotas(unificarAlumnos(cohorte01, cohorte02,cohorte03, cohorte04)));
    };

    //boton para el ejercicio 5
    btnBuscarAlumno.onclick = () => {
        let alumnoAEncontrar = prompt('ingrese el dni del alumno que desea encontrar');
        let alumno = buscarAlumno(unificarAlumnos(cohorte01, cohorte02,cohorte03, cohorte04), alumnoAEncontrar);
        idResultado.textContent = `${alumno.nombre} ${alumno.apellido} ${alumno.dni}`;
    };

    //botones para el ejercicio 6
    btnContarAprobados1.onclick = () => {
        let cantidadAprovados = contarAlumnosForma1(unificarAlumnos(cohorte01, cohorte02,cohorte03, cohorte04));
        idResultado.textContent = `${cantidadAprovados}`;
    };

    btnContarAprobados1.onclick = () => {
        let cantidadAprovados = contarAlumnosForma1(unificarAlumnos(cohorte01, cohorte02,cohorte03, cohorte04));
        idResultado.textContent = `${cantidadAprovados}`;
    };

    btnContarAprobados2.onclick = () => {
        let cantidadAprobados = contarAlumnosForma2(unificarAlumnos(cohorte01, cohorte02,cohorte03, cohorte04));
        idResultado.textContent = `${cantidadAprobados}`;
    };
};