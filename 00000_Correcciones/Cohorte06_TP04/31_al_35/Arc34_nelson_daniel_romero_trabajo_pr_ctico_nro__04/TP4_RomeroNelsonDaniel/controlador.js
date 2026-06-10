import {cohorte01, cohorte02, cohorte03, cohorte04, mostrarAlumnos} from "./modelo.js";

const listadoCohortes = [cohorte01, cohorte02, cohorte03, cohorte04];

//unifica todas las cohortes en un solo array
const totalAlumnos = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

const estadoApp = {dni:0};

const guardarEstado = () => {
    let datosJSON = JSON.stringify(estadoApp);
    localStorage.setItem("estadoAplicacion", datosJSON);
}

const recuperarEstado = () => {
    let datosJSON = localStorage.getItem("estadoAplicacion");
    let datosMemoria = JSON.parse(datosJSON);
    if(datosMemoria){
        estadoApp.dni = datosMemoria.dni;
        dni.value = datosMemoria.dni;
    }
}

window.onload = () => {
    const selector = document.querySelector("#selector");
    const botonMostrarAlumnos = document.querySelector("#botonMostrarAlumnos");
    const botonMostrarAprobados = document.querySelector("#botonMostrarAprobados");
    const botonMostrarDesaprobados = document.querySelector("#botonMostrarDesaprobados");
    const botonOrdenar = document.querySelector("#botonOrdenar");
    const dni = document.querySelector("#dni");
    const botonBuscarAlumno = document.querySelector("#botonBuscarAlumno");
    const botonContarAlumnos = document.querySelector("#botonContarAlumnos");

    //crea los options del select
    listadoCohortes.forEach((cohorte, indice) => {
        let option = document.createElement("option");
        option.textContent = `Cohorte ${ indice + 1 }`;
        option.value = indice;
        selector.appendChild(option);
    })

    recuperarEstado();

    //muestra los alumnos de la cohorte seleccionada
    selector.addEventListener("change", ()=>{
        console.clear();
        let seleccion = Number(selector.value);
        mostrarAlumnos(listadoCohortes[seleccion], seleccion + 1);
    })

    //muestra los alumnos de todas las cohortes
    botonMostrarAlumnos.addEventListener("click", () => {
        console.clear();
        console.log(totalAlumnos);
    })

    //filtra todos los alumnos por nota y los muestra
    botonMostrarAprobados.addEventListener("click", () => {
        console.clear();
        console.log("Alumnos aprobados");
        let alumnosAprobados = totalAlumnos.filter(alumno => alumno.nota_final > 5);
        console.log(alumnosAprobados);
    });

    //filtra todos los alumnos por nota y los muestra
    botonMostrarDesaprobados.addEventListener("click", () => {
        console.clear();
        console.log("Alumnos desaprobados");
        let alumnosDesaprobados = totalAlumnos.filter(alumno => alumno.nota_final <= 5);
        console.log(alumnosDesaprobados);
    });
    
    //crea un nuevo array, ordena sus datos por nota y lo muestra
    botonOrdenar.addEventListener("click", () => {
        console.clear();
        let alumnosOrdenados = [...totalAlumnos].sort((alumno1, alumno2) => alumno1.nota_final - alumno2.nota_final);
        console.log(alumnosOrdenados);
    })

    dni.addEventListener("change", () => {
        estadoApp.dni = dni.value;
        guardarEstado();
    })

    //busca un alumno por dni y lo muestra
    botonBuscarAlumno.addEventListener("click", () => {
        console.clear();
        let numeroDNI = dni.value;
        let alumnoEncontrado = totalAlumnos.find(alumno => alumno.dni === numeroDNI);
        console.log(alumnoEncontrado);
    })

    //cuenta los alumnos usando estructira if/else y operador ternario
    botonContarAlumnos.addEventListener("click", () => {
        console.clear();
        let alumnosAprobados = totalAlumnos.reduce((contador, alumno) => {
            if(alumno.nota_final > 5){
                return ++contador;
            }
            else
            {
                return contador;
            }
        },0)
        console.log("Alumnos contados usando if/else:", alumnosAprobados);

        alumnosAprobados = totalAlumnos.reduce((contador, alumno) => {
            return alumno.nota_final > 5 ? ++contador : contador;
        },0)
        console.log("Alumnos contados usando operador ternario:", alumnosAprobados);
    })

}