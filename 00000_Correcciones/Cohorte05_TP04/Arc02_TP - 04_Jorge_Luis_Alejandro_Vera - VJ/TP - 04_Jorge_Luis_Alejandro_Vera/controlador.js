import { cohorte01, cohorte02, cohorte03,cohorte04, fnRecorrerCohorte, fnBuscarAlumnoConDNI } from "./modulo.js"

//Constantes

const idVisorResultados = document.querySelector("#idVisorResultados");

const idMostrarCohorte01 = document.querySelector("#idMostrarCohorte01");
const idMostrarCohorte02 = document.querySelector("#idMostrarCohorte02");
const idMostrarCohorte03 = document.querySelector("#idMostrarCohorte03");
const idMostrarCohorte04 = document.querySelector("#idMostrarCohorte04");

const idBuscadorDNI = document.querySelector("#idBuscadorDNI");
const idBtnBuscarDni = document.querySelector("#idBtnBuscarDni");

const idFiltroAprobados = document.querySelector("#idFiltroAprobados");
const idFiltroDesaprobados = document.querySelector("#idFiltroDesaprobados");

const idMayorNota = document.querySelector("#idMayorNota");
const idMenorNota = document.querySelector("#idMenorNota");

const idContadorAprobados = document.querySelector("#idContadorAprobados");
const idContadorDesaprobados = document.querySelector("#idContadorDesaprobados");

const idUnirCohortes = document.querySelector("#idUnirCohortes");

window.onload = ()=> 

{

    //Botones para mostrar las cohortes

        idMostrarCohorte01.addEventListener("click",()=> 
        {   
            idVisorResultados.value = fnRecorrerCohorte(cohorte01);

            console.log(cohorte01);
        });

        idMostrarCohorte02.addEventListener("click",()=> 
        {   
            idVisorResultados.value = fnRecorrerCohorte(cohorte02);

            console.log(cohorte02);
        });

        idMostrarCohorte03.addEventListener("click",()=> 
        {   
            idVisorResultados.value = fnRecorrerCohorte(cohorte03);

            console.log(cohorte03);
        });

        idMostrarCohorte04.addEventListener("click",()=> 
        {   
            idVisorResultados.value = fnRecorrerCohorte(cohorte04);

            console.log(cohorte04);
        });

    //Prompt para buscar alumnos por DNI

        idBtnBuscarDni.addEventListener("click",()=>
        {
            const dni = idBuscadorDNI.value;

            idVisorResultados.value = fnBuscarAlumnoConDNI(dni);
        });

    //Filtros de Aprobados

        idFiltroAprobados.addEventListener("click",()=>
        {
            const cohortes = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

            const alumnosAprobados = cohortes.filter(alumno => alumno.nota_final > 5);

            idVisorResultados.value = fnRecorrerCohorte(alumnosAprobados);
        });

    //Filtros de Desaprobados.

        idFiltroDesaprobados.addEventListener("click",()=>
        {
            const cohortes = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

            const alumnosDesaprobados = cohortes.filter(alumno => alumno.nota_final <= 5);

            idVisorResultados.value = fnRecorrerCohorte(alumnosDesaprobados);
        });


    //Organizador de notas de menor a mayor

        idMenorNota.addEventListener("click", ()=>
        {
            const cohortes = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

            const ordenMenorAMayor = cohortes.sort((a,b) => a.nota_final - b.nota_final);

            return idVisorResultados.value = fnRecorrerCohorte(ordenMenorAMayor);
        });
        
    //De mayor a menor

        idMayorNota.addEventListener("click", () => 
            {
                const cohortes = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

                const ordenMayorAMenor = cohortes.sort((a,b) => b.nota_final - a.nota_final);

                return idVisorResultados.value = fnRecorrerCohorte(ordenMayorAMenor);
            });

    //Contador de aprobados

        idContadorAprobados.addEventListener("click",()=>
        {
            const cohortes = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

            const contadorAprobados = cohortes.reduce((contador, alumno)=>
            {
                if(alumno.nota_final > 5)
                {
                    contador = contador + 1;
                }
                
                return idVisorResultados.value = contador //intenté hacer concatenación con string pero no funcionó asi que muestro unicamente el contador
            },0);

            //con op ternario

            const contadorAprobadosConOpTernario = cohortes.reduce((contador, alumno)=>
            {
                return alumno.nota_final > 5 ? contador + 1 : contador;
            },0);
            //este va por consola
            console.log(contadorAprobadosConOpTernario);
        });

    //contador de desaprobados

        idContadorDesaprobados.addEventListener("click",()=>
        {
            const cohortes = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

            //con if else
            const contadorAprobados = cohortes.reduce((contador, alumno)=>
            {
                if(alumno.nota_final <= 5)
                {
                    contador = contador + 1;
                }
                
                return idVisorResultados.value = contador //intenté hacer concatenación con string pero no funcionó asi que muestro unicamente el contador
            },0);

            //con op ternario

            const contadorAprobadosConOpTernario = cohortes.reduce((contador, alumno)=>
            {
                return alumno.nota_final <= 5 ? contador + 1 : contador;
            },0);
            //este va por consola
            console.log(contadorAprobadosConOpTernario);

        });

    //Unir todas las cohortes

        idUnirCohortes.addEventListener("click",()=>
        {
            const cohortes = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

            idVisorResultados.value = fnRecorrerCohorte(cohortes);

            console.log(cohortes);
        })
}