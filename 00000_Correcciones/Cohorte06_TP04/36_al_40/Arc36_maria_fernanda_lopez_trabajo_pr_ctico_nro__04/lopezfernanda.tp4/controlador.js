import {alumnos,mostrarAlumnos, alumnosAprobados, alumnosDesaprobados, cohorte01,cohorte02,cohorte03,cohorte04, notasGenerales,buscarAlumnoXDni, cantidadAprobadosIf,cantidadAprobadosTernario} from "./modelo.js";

window.onload = ()=>{
    
    const IdBtnCohorte1 = document.querySelector ("#IdBtnCohorte1");
    const IdBtnCohorte2 = document.querySelector ("#IdBtnCohorte2");
    const IdBtnCohorte3 = document.querySelector ("#IdBtnCohorte3");
    const IdBtnCohorte4 = document.querySelector ("#IdBtnCohorte4");
    const IdBtnTotalAlumnos = document.querySelector ("#IdBtnTotalAlumnos");
    const IdBtnAprobados = document.querySelector ("#IdBtnAprobados");
    const IdBtnDesaprobados = document.querySelector ("#IdBtnDesaprobados");
    const IdBtnOrdenNotas = document.querySelector ("#IdBtnOrdenNotas");
    const IdBtnBuscarAlumnos = document.querySelector ("#IdBtnBuscarAlumnos");
    const IdBtnDni = document.querySelector ("#IdBtnDni");
    const IdResultado = document.querySelector ("#IdResultado");
    const IdBtnCondicionDelAlumno =document.querySelector ("#IdBtnCondicionDelAlumno");

    //Ejercicio Nº 1//

   const mostrarAlumnosHTML = (cohorte)=>{

    IdResultado.innerHTML = "";

    cohorte.forEach(({dni,nombre,apellido, nota_final})=>{

        const alumnoHTML = document.createElement("p");

        alumnoHTML.textContent = (`Alumno: ${apellido}, ${nombre}, DNI Nº ${dni}, Nota Final: ${nota_final}`);

        IdResultado.appendChild(alumnoHTML);});
    };
   
    
    IdBtnCohorte1.onclick = ()=>{
        mostrarAlumnos(cohorte01);

        mostrarAlumnosHTML(cohorte01)
    };

    IdBtnCohorte2.onclick = ()=>{
        mostrarAlumnos(cohorte02);

        mostrarAlumnosHTML (cohorte02);
    };

    IdBtnCohorte3.onclick = ()=>{
        mostrarAlumnos(cohorte03);

        mostrarAlumnosHTML (cohorte03);
    };
    
    IdBtnCohorte4.onclick = ()=>{
        mostrarAlumnos(cohorte04);

        mostrarAlumnosHTML (cohorte04);
    };

    //Ejercicio Nº 2//

    IdBtnTotalAlumnos.onclick = () =>{
        mostrarAlumnosHTML (alumnos);

        console.log(alumnos);
    };

    //Ejercicio Nº 3//

    IdBtnAprobados.onclick = () => {

        mostrarAlumnosHTML (alumnosAprobados);
        console.log (alumnosAprobados);
        
    };

    IdBtnDesaprobados.onclick = () =>
    {
        
        mostrarAlumnosHTML (alumnosDesaprobados);
        console.log (alumnosDesaprobados);
    };

    //Ejercicio Nº 4//

    IdBtnOrdenNotas.onclick = () =>{

        mostrarAlumnosHTML(notasGenerales);
        console.log(notasGenerales);
    };

    //Ejercicio Nº 5//
    IdBtnBuscarAlumnos.onclick = () =>{

        const dniBuscado = IdBtnDni.value;

        const alumno = buscarAlumnoXDni(dniBuscado);

        if (alumno) {
            
            IdResultado.innerHTML = "";
            const alumnoHTML = document.createElement("p");

            alumnoHTML.textContent =(`${alumno.apellido}, ${alumno.nombre} - DNI: ${alumno.dni} - Nota: ${alumno.nota_final}`);

            IdResultado.appendChild(alumnoHTML);

        
            console.log("Alumno encontrado:", alumno);
        } 
        else {

            IdResultado.innerHTML = "";

            const mensaje = document.createElement("p");
            
            mensaje.textContent = ("DNI no encontrado");
            
            IdResultado.appendChild(mensaje);

            console.log("No se encontró el alumno");
        };
        };

        //Ejercicio Nº 6//

        IdBtnCondicionDelAlumno.onclick = ()=>{

        IdResultado.innerHTML = "";

        const mensaje = document.createElement("p");

        mensaje.textContent =(`Alumnos Aprobados (If/Else): ${cantidadAprobadosIf} - Alunnos Aprobados (Ternario): ${cantidadAprobadosTernario}`);

        IdResultado.appendChild(mensaje);

        console.log("Aprobados (if/else):", cantidadAprobadosIf);
        console.log("Aprobados (ternario):", cantidadAprobadosTernario);
    
    };
    };





    




