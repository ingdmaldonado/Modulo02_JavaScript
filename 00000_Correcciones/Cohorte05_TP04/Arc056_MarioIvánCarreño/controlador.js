import { cohorte01, cohorte02, cohorte03, cohorte04 } from "./datos.js"
import { fnMostrarAlumnos } from "./modulo.js"

window.onload = () => {

    console.log("LA APLICACION ESTA FUNCIONANDO");

    /*1) Realice una función, que reciba como parámetro un vector de alumnos (puede ser de cualquier cohorte) los recorra con un forEach y muestre por consola, el apellido y el nombre.
    Invoque esa misma función, pasándole como parámetro el vector de la cohorte01, luego el vector de la cohorte02 y así sucesivamente hasta la cuarta cohorte.
    */

    let boton1 = document.getElementById("boton1");
    boton1.addEventListener("click", () => {
        console.log("ALUMNOS DE LA COHORTE 1");
        fnMostrarAlumnos(cohorte01);
        console.log("ALUMNOS DE LA COHORTE 2");
        fnMostrarAlumnos(cohorte02);
        console.log("ALUMNOS DE LA COHORTE 3");
        fnMostrarAlumnos(cohorte03);
        console.log("ALUMNOS DE LA COHORTE 4");
        fnMostrarAlumnos(cohorte04);
    });

    /*2) El profesor desea unificar todos los alumnos en un solo vector, dado que estructuralmente son iguales, utilice spread operator para “unificar el contenido de las cuatro cohortes” en un solo vector. Muestre por consola el vector resultante.
    */

    let vectorUnion = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
    let boton2 = document.getElementById("boton2");
    boton2.addEventListener("click", () => {
        console.log("TODOS LOS ALUMNOS");
        fnMostrarAlumnos(vectorUnion);
    });

    /*3) Sobre los datos unificados, cree dos vectores nuevos, uno puede llamarse alumnosAprobados y el otro alumnosDesaprobados.
    Para crear el vector de alumnos aprobados, aplique el método filter sobre el Vector que tiene todos los alumnos cuando la nota > 5;
    Para crear el vector de alumnos desaprobados, aplique el método filter sobre el Vector que tiene todos los alumnos cuando la nota <= 5;
    */

    let boton3 = document.getElementById("boton3");
    boton3.addEventListener("click", () => {
        let alumnosAprobados = vectorUnion.filter(alumno => alumno.nota_final > 5);
        console.log("ALUMNOS APROBADOS");
        fnMostrarAlumnos(alumnosAprobados);

        let alumnosDesaprobados = vectorUnion.filter(alumno => alumno.nota_final <= 5);
        console.log("ALUMNOS DESAPROBADOS");
        fnMostrarAlumnos(alumnosDesaprobados);
    });

    /*4) Sobre el vector Total de alumnos (cuatro cohortes), aplique el método “sort” = ordenar y ordene los datos de todos esos alumnos por nota de menor a mayor.
    */

    let boton4 = document.getElementById("boton4");
    boton4.addEventListener("click", () => {
        let alumnosOrdenadosXNota = vectorUnion.sort((alumno1, alumno2) => alumno1.nota_final - alumno2.nota_final);
        console.log("ALUMNOS ORDENADOS POR NOTA");
        fnMostrarAlumnos(alumnosOrdenadosXNota);
    });

    /*5) Sobre el vector Total de alumnos, realice una búsqueda de los siguientes alumnos aplicando el método “find” que tienen los vectores incorporados y busque algún alumno por su “dni”. El que ud. Desee.
    */

    let dni = document.getElementById("dni");
    let boton5 = document.getElementById("boton5");

    boton5.addEventListener("click", () => {
        let alumnoBuscado = vectorUnion.find(alumno => alumno.dni == dni.value);
        console.log("ALUMNO BUSCADO");
        console.log(alumnoBuscado);
    });

    /*6) Sobre el vector Total de alumnos, deseamos “contabilizar” la cantidad de alumnos aprobados, es decir la cantidad de alumnos que tienen nota > 5; para ello utilicen el método reduce que tienen los vectores incorporados para contabilizar. Realice esto de dos formas
    a. Usando una arrow function que a dentro utilice un condicional if/else para saber si la nota > 5 y por lo tanto contabilizar los aprobados;
    b. Usando una arrow function que a dentro utilice un operador ternario para saber si la nota > 5 y por lo tanto contabilizar los aprobados;
    Ambas formas deben llegar al mismo resultado, únicamente que se implementaron de dos formas diferentes.
    */

    let boton6 = document.getElementById("boton6");

    boton6.addEventListener("click", () => {
        let nAlumnosAprobadosA = vectorUnion.reduce((acumulador, alumno) => {
            if (alumno.nota_final > 5) {
                acumulador++;
            }
            return acumulador;
        }, 0);
        console.log(nAlumnosAprobadosA);

        let nAlumnosAprobadosB = vectorUnion.reduce((acumulador, alumno) => {
        alumno.nota_final > 5 ? acumulador++ : acumulador;
        return acumulador;
    }, 0);

    console.log(nAlumnosAprobadosB);
    });

};