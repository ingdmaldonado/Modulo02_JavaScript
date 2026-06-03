import { cohorte01, cohorte02, 
    cohorte03, cohorte04, mostrarCohorte, 
    unificarCohortes, alumnosAprobados, alumnosDesaprobados, 
    alumnosOrdenados, buscarAlumnoPorDNI, 
    cantidadAlumnosAprobados, cantidadAlumnosAprobadosTernario } from "./modelos.js";


window.onload = () => {

    const selectCohorte = document.querySelector("#selectCohorte");
    const btnMostrar = document.querySelector("#btnMostrar");
    const contenedorResultados = document.querySelector("#contenedorResultados");
    const mostrarAlumnos = document.querySelector("#mostrarAlumnos");
    const btnMostrarAlumnos = document.querySelector("#btnMostrarAlumnos");
    const contenedorResultadosAlumnos = document.querySelector("#contenedorResultadosAlumnos");
    const inputDni = document.querySelector("#inputDni");
    const btnBuscar = document.querySelector("#btnBuscar");
    const contenedorResultadoBusqueda = document.querySelector("#contenedorResultadoBusqueda");
    const mostrarCantidadAprobados = document.querySelector("#mostrarCantidadAprobados");
    const btnMostrarCantidadAprobados = document.querySelector("#btnMostrarCantidadAprobados");
    const contenedorCantidadAprobados = document.querySelector("#contenedorCantidadAprobados");
    


    btnMostrar.onclick = () => { 

        contenedorResultados.innerHTML = "";
        contenedorResultadosAlumnos.innerHTML = "";
        contenedorResultadoBusqueda.innerHTML = "";
        contenedorCantidadAprobados.innerHTML = "";

        const cohorteSeleccionada = selectCohorte.value;
        let cohorte;
        switch (cohorteSeleccionada) {
            case "cohorte01":
                cohorte = cohorte01;
                break;
            case "cohorte02":
                cohorte = cohorte02;
                break;
            case "cohorte03":  
                cohorte = cohorte03;
                break;
            case "cohorte04":
                cohorte = cohorte04;
                break;
            case "cohorteUnificadas":
                cohorte = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
                break;
        };

        mostrarCohorte(cohorte);

        if (cohorte) {
            const listaMostrar = document.createElement("ul");
            
            cohorte.forEach(estudiante => {
                const item = document.createElement("li");
                item.textContent = `DNI: ${estudiante.dni}, Nombre: ${estudiante.nombre} ${estudiante.apellido}`;
                listaMostrar.appendChild(item);
            });
            
            contenedorResultados.appendChild(listaMostrar);

        };
    };

    btnMostrarAlumnos.onclick = () => {

        contenedorResultadosAlumnos.innerHTML = "";
        contenedorResultados.innerHTML = "";
        contenedorResultadoBusqueda.innerHTML = "";
        contenedorCantidadAprobados.innerHTML = "";

        const cohorteUnificadas = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
        const aprobados = alumnosAprobados(cohorteUnificadas);
        const desaprobados = alumnosDesaprobados(cohorteUnificadas);
        const ordenados = alumnosOrdenados(cohorteUnificadas);
        

        const lista = mostrarAlumnos.value;
        let listaAlumnos;

        switch (lista) {
            case "aprobados":
                listaAlumnos = aprobados;
                break;
            case "desaprobados":
                listaAlumnos = desaprobados;
                break;
            case "ordenados":
                listaAlumnos = ordenados;
                break;
        };
        const listaMostrarAlumnos = document.createElement("ul");
        listaAlumnos.forEach(estudiante => {
            console.log(`DNI: ${estudiante.dni}, Nombre: ${estudiante.nombre} ${estudiante.apellido} Nota Final: ${estudiante.nota_final}`);
        });

        if (listaAlumnos) {
            listaAlumnos.forEach(estudiante => {
                const item = document.createElement("li");
                item.textContent = `DNI: ${estudiante.dni}, Nombre: ${estudiante.nombre} ${estudiante.apellido}, Nota Final: ${estudiante.nota_final}`;
                listaMostrarAlumnos.appendChild(item);
            });
            contenedorResultadosAlumnos.appendChild(listaMostrarAlumnos);
        };
    };

    btnBuscar.onclick = () => {

        contenedorResultadoBusqueda.innerHTML = "";
        contenedorResultadosAlumnos.innerHTML = "";
        contenedorResultados.innerHTML = "";
        contenedorCantidadAprobados.innerHTML = "";

        const cohorteUnificadas = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);
        const dni = inputDni.value;
        const alumno = buscarAlumnoPorDNI(cohorteUnificadas, dni);
        if (alumno) {
            const resultadoBusqueda = document.createElement("p");
            console.log(`DNI: ${alumno.dni}, Nombre: ${alumno.nombre} ${alumno.apellido}, Nota Final: ${alumno.nota_final}`);
            resultadoBusqueda.textContent = `DNI: ${alumno.dni}, Nombre: ${alumno.nombre} ${alumno.apellido}, Nota Final: ${alumno.nota_final}`;
            contenedorResultadoBusqueda.appendChild(resultadoBusqueda);
        } else {
            const resultadoBusqueda = document.createElement("p");
            console.log("Alumno no encontrado.");
            resultadoBusqueda.textContent = "Alumno no encontrado.";
            contenedorResultadoBusqueda.appendChild(resultadoBusqueda);
        };
    }; 


    btnMostrarCantidadAprobados.onclick = () => {
        contenedorCantidadAprobados.innerHTML = "";
        contenedorResultadoBusqueda.innerHTML = "";
        contenedorResultadosAlumnos.innerHTML = "";
        contenedorResultados.innerHTML = "";

        const cohorteUnificadas = unificarCohortes(cohorte01, cohorte02, cohorte03, cohorte04);

        const cantidadAprobados = cantidadAlumnosAprobados(cohorteUnificadas);
        const cantidadAprobadosTernario = cantidadAlumnosAprobadosTernario(cohorteUnificadas);

        const aprobados = mostrarCantidadAprobados.value;
        
        switch (aprobados) {
            case "metodo1":
                console.log(`Cantidad de alumnos aprobados: ${cantidadAprobados}`);
                break;
            case "metodo2":
                console.log(`Cantidad de alumnos aprobados (ternario): ${cantidadAprobadosTernario}`);
                break;
        };
    

        const resultadoCantidadAprobados = document.createElement("p");
        
        if (aprobados === "metodo1") {
            resultadoCantidadAprobados.textContent = `Cantidad de alumnos aprobados (Con If): ${cantidadAprobados}`;
            contenedorCantidadAprobados.appendChild(resultadoCantidadAprobados);
        } else if (aprobados === "metodo2") { 
            resultadoCantidadAprobados.textContent = `Cantidad de alumnos aprobados (Ternario): ${cantidadAprobadosTernario}`;
            contenedorCantidadAprobados.appendChild(resultadoCantidadAprobados);
        } else {
            resultadoCantidadAprobados.textContent = `Error: El value del select es "${aprobados}" y no coincide con el switch.`;
            contenedorCantidadAprobados.appendChild(resultadoCantidadAprobados);
        }
        
    };

}




