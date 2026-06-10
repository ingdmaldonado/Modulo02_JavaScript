import {cohorte01, cohorte02, cohorte03, cohorte04, todasLasCohortes, mostrarAlumnos, cohorteXTipo,alumnosAprobados,alumnosDesaprobados,ordenarPorNotas,mostrarAlumnosConNota,busquedaPorDNI,cantidadAprobadosReduce,cantidadAprobadosTernario} from "./modelo.js";

window.onload = ()=>{

    console.log(`esta funcionando`);

    
    const idCohorte = document.querySelector("#idCohorte");
    const btnAprobados = document.querySelector("#btnAprobados");
    const btnDesaprobados = document.querySelector("#btnDesaprobados");
    const btnNotas = document.querySelector("#btnNotas");
    const btnBuscarDNI = document.querySelector("#btnBuscarDNI");
    const aprobados1 = document.querySelector("#aprobados1");
    const aprobados2 = document.querySelector("#aprobados2");

    idCohorte.onchange = ()=>{

        
        let cohorte = Number(idCohorte.value);

        const alumnos = cohorteXTipo(cohorte);

            mostrarAlumnos(alumnos);
             
        
    };

    btnAprobados.onclick =()=>{

        const alumnosA = alumnosAprobados();
        mostrarAlumnos(alumnosA);
    };

    btnDesaprobados.onclick = ()=>{
        const alumnosD = alumnosDesaprobados();
        mostrarAlumnos(alumnosD);

    };
    
    btnNotas.onclick = ()=>{
        const notas = ordenarPorNotas();
        mostrarAlumnosConNota(notas);
    };

    btnBuscarDNI.onclick = ()=>{
        const alumno = busquedaPorDNI();

            console.log(alumno);
    };

    aprobados1.onclick = ()=>{
        const aprobado = cantidadAprobadosReduce();
        console.log(aprobado);
    };

    aprobados2.onclick = ()=>{
        const aprobado2 = cantidadAprobadosTernario();
        console.log(aprobado2);
    };








};