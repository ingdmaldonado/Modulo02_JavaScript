import { cohorte01, cohorte02, cohorte03, cohorte04 } from "./modelo.js";


/* 1) Realice una función, que reciba como parámetro un vector de alumnos (puede ser de cualquier 
cohorte) los recorra con un forEach y muestre por consola, el apellido y el nombre.  */

function mostrar(alumnos){

    alumnos.forEach(alumno =>{
        console.log(`${alumno.apellido}, ${alumno.nombre}`);
    });

}

window.onload=()=>{

    const idBtnForEach = document.querySelector("#idBtnForEach");
    const idBtnUnificar = document.querySelector("#idBtnUnificar");
    const idBtnFilter = document.querySelector("#idBtnFilter");
    const idBtnSort = document.querySelector("#idBtnSort");
    const idBtnFind = document.querySelector("#idBtnFind");
    const idBtnReduce = document.querySelector("#idBtnReduce");


    idBtnForEach.onclick = ()=>{

        // console.log(cohorte01,cohorte02,cohorte03,cohorte04);

        mostrar(cohorte01);
        mostrar(cohorte02);
        mostrar(cohorte03);
        mostrar(cohorte04);

    };


    /* 2) El profesor desea unificar todos los alumnos en un solo vector, dado que estructuralmente son 
    iguales, utilice spread operator para “unificar el contenido de las cuatro cohortes” en un solo 
    vector. Muestre por consola el vector resultante.  */

    const unificar= [
            ...cohorte01,
            ...cohorte02,
            ...cohorte03,
            ...cohorte04
    ];

    idBtnUnificar.onclick=()=>{

        console.log(unificar);

    };

    /* 3) Sobre los datos unificados, cree dos vectores nuevos, uno puede llamarse alumnosAprobados y el 
    otro alumnosDesaprobados. 

    Para crear el vector de alumnos aprobados, aplique el método filter sobre el Vector que tiene todos 
    los alumnos cuando la nota > 5; 

    Para crear el vector de alumnos desaprobados, aplique el método filter sobre el Vector que tiene 
    todos los alumnos cuando la nota <= 5;  */

    idBtnFilter.onclick=()=>{

        const alumnosAprobados = unificar.filter(alumno =>
        alumno.nota_final > 5
        );

        const alumnosDesaprobados = unificar.filter(alumno=> alumno.nota_final <= 5);

        console.log(alumnosAprobados);
        console.log(alumnosDesaprobados);

    };

    /* 4) Sobre el vector Total de alumnos (cuatro cohortes), aplique el método “sort” = ordenar y ordene los datos de todos esos alumnos por nota de menor a mayor.  */

    idBtnSort.onclick = () => {

        const ordenar = unificar.sort((a,b) =>
        
            a.nota_final - b.nota_final

        );

        console.log(ordenar);

    };

    /* 5) Sobre el vector Total de alumnos, realice una búsqueda de los siguientes alumnos aplicando el 
    método “find” que tienen los vectores incorporados y busque algún alumno por su “dni”. El que ud. 
    Desee. */
    
    idBtnFind.onclick = () => {

        const buscarAlumnoDNI = unificar.find(alumno =>
            alumno.dni === "90123456"
        );

        console.log(buscarAlumnoDNI);

    };

    /* 6) Sobre el vector Total de alumnos, deseamos “contabilizar” la cantidad de alumnos aprobados, es 
    decir la cantidad de alumnos que tienen nota > 5; para ello utilicen el método reduce que tienen los 
    vectores incorporados para contabilizar. Realice esto de dos formas

    a. Usando una arrow function que a dentro utilice un condicional if/else para saber si la nota > 
    5 y por lo tanto contabilizar los aprobados;

    b. Usando una arrow function que a dentro utilice un operador ternario para saber si la nota > 
    5 y por lo tanto contabilizar los aprobados; 

    Ambas formas deben llegar al mismo resultado, únicamente que se implementaron de dos formas 
    diferentes. */

    idBtnReduce.onclick = ()=>{

        // forma A
        const formaA = unificar.reduce((contar, alumno) =>{
            
            if(alumno.nota_final > 5){
                return contar + 1;
            }
            else{
                return contar;
            }


        }, 0);

        // forma B
        const formaB = unificar.reduce((contar, alumno)=>
            
            alumno.nota_final > 5? contar + 1 : contar

        ,0);

        console.log(formaA);
        console.log(formaB);
        
    };



};