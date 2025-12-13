import {fnEjercicio1} from "./modelo.js"
import {cohorte01,cohorte02,cohorte03,cohorte04} from "./datos.js";



window.onload = () => {

    const btncohorte1 = document.querySelector("#btncohorte1");
    const btncohorte2 = document.querySelector("#btncohorte2");
    const btncohorte3 = document.querySelector("#btncohorte3");
    const btncohorte4 = document.querySelector("#btncohorte4");
    const btnAlumnosAprobados = document.querySelector("#btnAlumnosAprobados");
    const btnAlumnosDesaprobados = document.querySelector("#btnAlumnosDesaprobados");
    const btnOrdernarNotas = document.querySelector("#btnOrdernarNotas");
    const filtrarDNI = document.querySelector("#filtrarDNI");
    const btnFindDNI = document.querySelector("#btnFindDNI");
    const btnAprobadosIfElse = document.querySelector("#btnAprobadosIfElse");
    const btnAprobadosTernario = document.querySelector("#btnAprobadosTernario");

    

    /************** EJERCICIO 1 ***************/

    btncohorte1.onclick = ()=>{

        fnEjercicio1(cohorte01);

    }

    btncohorte2.onclick = ()=>{

        fnEjercicio1(cohorte02);

    }

    btncohorte3.onclick = ()=>{

        fnEjercicio1(cohorte03);

    }

    btncohorte4.onclick = ()=>{

        fnEjercicio1(cohorte04);

    }




    /************** EJERCICIO 2 ***************/

    console.log("--------------------------------")
    console.log("EJERCICIO 2 - VECTOR DE ALUMNOS UNIFICADOS")
    const alumnosCuatroCohortes = [...cohorte01,...cohorte02,...cohorte03,...cohorte04];
    console.log(alumnosCuatroCohortes);
    console.log("--------------------------------")




    /************** EJERCICIO 3 ***************/

    btnAlumnosAprobados.onclick = () => {

        const alumnosAprobados = alumnosCuatroCohortes.filter(nota => nota.nota_final > 5);

        console.log(alumnosAprobados);

    }


    btnAlumnosDesaprobados.onclick = () => {

        const alumnosDesaprobados = alumnosCuatroCohortes.filter(nota => nota.nota_final <= 5);

        console.log(alumnosDesaprobados);
    
    }
    

    /************** EJERCICIO 4 ***************/

    btnOrdernarNotas.onclick = () => {

        const ordenarNotas = alumnosCuatroCohortes.sort((nota1, nota2) => nota1.nota_final - nota2.nota_final);
        console.log(ordenarNotas);


    }



    /************** EJERCICIO 5 ***************/

    btnFindDNI.onclick = () => {

        const dniIngresado = filtrarDNI.value;

        const alumnoBuscado = alumnosCuatroCohortes.find(alumno => alumno.dni === dniIngresado);

        console.log(alumnoBuscado)

    }
    


    /************** EJERCICIO 6 ***************/

    btnAprobadosIfElse.onclick = () => { 

        const contadorAlumnosAprobados = alumnosCuatroCohortes.reduce((contador,alumno) => {

            if(alumno.nota_final > 5)
            {
                contador = contador + 1;
            }

            return contador;
        },0)

        console.log(contadorAlumnosAprobados)
    }
    


    btnAprobadosTernario.onclick = () => { 

        const contadorAlumnosAprobados2 = alumnosCuatroCohortes.reduce((contador,alumno) => alumno.nota_final > 5 ? contador + 1 : contador, 0);
        
        console.log(contadorAlumnosAprobados2);

    }
}