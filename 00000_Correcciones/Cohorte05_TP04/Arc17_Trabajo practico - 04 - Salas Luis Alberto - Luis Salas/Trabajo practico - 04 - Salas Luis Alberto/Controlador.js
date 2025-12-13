import {cohorte01,cohorte02,cohorte03,cohorte04} from "./DatosAlumnos.js"

import {FuncionRecorrer} from "./modulo.js"

const idFindDni = document.querySelector("#idFindDni")
const idBuscarDni = document.querySelector("#idBuscarDni")

const idBotonReduceIfElse = document.querySelector("#idBotonReduceIfElse")
const idBotonOperadorTernario = document.querySelector("#idBotonOperadorTernario")

window.onload = () =>
{
    /* ------------ PUNTO 1 --------------- */

    console.log(`Alumnos Cohorte 1`)
    FuncionRecorrer(cohorte01)

    console.log(`Alumnos Cohorte 2`)
    FuncionRecorrer(cohorte02)

    console.log(`Alumnos Cohorte 3`)
    FuncionRecorrer(cohorte03)

    console.log(`Alumnos Cohorte 4`)
    FuncionRecorrer(cohorte04)

    /* ------------ PUNTO 2 --------------- */

    const unificacionCohortes = [...cohorte01,...cohorte02,...cohorte03,...cohorte04]

    console.log(unificacionCohortes)

    /* ------------ PUNTO 3 --------------- */

    const alumnosAprobados = unificacionCohortes.filter(alumno => alumno.nota_final > 5)
    console.log(alumnosAprobados)

    const alumnosDesaprobados = unificacionCohortes.filter(alumno => alumno.nota_final <= 5)
    console.log(alumnosDesaprobados)

    /* ------------ PUNTO 4 --------------- */

    const notaMenorAMayor = [...unificacionCohortes]
    notaMenorAMayor.sort((a, b) => a.nota_final - b.nota_final)
    console.log(notaMenorAMayor)

    /* ------------ PUNTO 5 --------------- */

    idFindDni.onclick = () => {

        const buscarDni = idBuscarDni.value

        const alumnoEncontrado = unificacionCohortes.find(alumno => alumno.dni === buscarDni);

        console.log(alumnoEncontrado)
    }

    /* ------------ PUNTO 6 --------------- */

    idBotonReduceIfElse.onclick = () =>{

        let contadorDeAprobados = unificacionCohortes.reduce((contador, alumno)=>{

            if(alumno.nota_final > 5)
            {
                contador = contador + 1;
            }

            return contador
        },0)

        console.log(`La cantidad de alumnos aprobados son: ${contadorDeAprobados}`)
        
    }
    
    idBotonOperadorTernario.onclick = () =>{

        let contadorAprobados2 = unificacionCohortes.reduce((contador, alumno)=>alumno.nota_final > 5 ? contador + 1: contador,0)

        console.log(`La cantidad de alumnos aprobados son: ${contadorAprobados2}`)
    }
}