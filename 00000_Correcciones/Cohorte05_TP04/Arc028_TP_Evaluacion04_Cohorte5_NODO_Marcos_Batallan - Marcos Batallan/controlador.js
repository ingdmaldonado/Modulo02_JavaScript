

/* Aquí importo los 4 vectores desde el módulo de funciones */
import {cohorte01,cohorte02,cohorte03,cohorte04, fnAlumnoDni} from "./modulo.js"

/* Aquí importo las funciones (Ver.1, 2 y 3) que recorren los alumnos de una Cohorte "N" */
import {fnAlumnosCohortesVer1,fnAlumnosCohortesVer2,fnAlumnosCohorteVer3} from "./modulo.js"

import {fnTodasLasCohortes} from "./modulo.js"


window.onload = ()=>{

/* Probando que el html levante los script
console.log(`App is now running`);

console.log(cohorte01);
console.log(cohorte02);
console.log(cohorte03);
console.log(cohorte04);
*/


    /***********************************************************************************
    Esta función me permite mostrar el resultado de cada Cohorte dentro de un cuadro
    o tarjeta en el HTML. Además voy a utilizar este formato de cuadro para la salida de
    todos los ejercicos.
    ************************************************************************************/

    function cuadroResultado(titulo, contenido) {
        return `
            <div class="bg-white shadow-lg rounded-lg p-6 mx-auto text-center border border-gray-200 mb-6">
                <h2 class="text-xl font-semibold text-gray-700 mb-4">${titulo}</h2>
                <p class="text-gray-600 whitespace-pre-line">${contenido}</p>
            </div>`;
    }


    /***************** EJERCICIO 18 - Punto 1 **********************/

    const idBtnForEachC1 = document.querySelector("#idBtnForEachC1");
    const idBtnForEachC2 = document.querySelector("#idBtnForEachC2");
    const idBtnForEachC3 = document.querySelector("#idBtnForEachC3");
    const idBtnForEachC4 = document.querySelector("#idBtnForEachC4");
    
    const idResulCohorte1 = document.querySelector("#idResulCohorte1");
    const idResulCohorte2 = document.querySelector("#idResulCohorte2");
    const idResulCohorte3 = document.querySelector("#idResulCohorte3");
    const idResulCohorte4 = document.querySelector("#idResulCohorte4");

    //Método forEach para alumnos de las Cohortes 1, 2, 3 y 4

    idBtnForEachC1.addEventListener("click", ()=>{

        //aquí creo esta constante que contiene la función
        const verCohorte1 = fnAlumnosCohortesVer1(cohorte01); //función Versión 1 (clásica)

        //aquí inserto en el archivo HTML el cuadro con el resultado de alumnos de la Cohorte 1
        idResultadoCohorteN.innerHTML = cuadroResultado(
        "Alumnos de la Cohorte 1", verCohorte1
        );
    });

    idBtnForEachC2.addEventListener("click", ()=>{

        const verCohorte2 = fnAlumnosCohortesVer2(cohorte02); //función Versión 2 (con destructuring en el encabezado)

        idResultadoCohorteN.innerHTML = cuadroResultado(
        "Alumnos de la Cohorte 2", verCohorte2
        );
    });
    
    idBtnForEachC3.addEventListener("click", ()=>{

        const verCohorte3 = fnAlumnosCohorteVer3(cohorte03); //función Versión 3 (con destructuring en el cuerpo)

        idResultadoCohorteN.innerHTML = cuadroResultado(
        "Alumnos de la Cohorte 3", verCohorte3
        );
    });

    idBtnForEachC4.addEventListener("click", ()=>{

        const verCohorte4 = fnAlumnosCohortesVer2(cohorte04); //repetí la Función Versión 2

        idResultadoCohorteN.innerHTML = cuadroResultado(
        "Alumnos de la Cohorte 4", verCohorte4
        );
    });


    /**************************************************************************
    Aquí creo un nuevo vector en donde se agruparan los 4 vectores existentes,
    para ello utilizo Spread Operator (...)
    ***************************************************************************/

    let cohortesAgrupadas = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];


    /***************** EJERCICIO 18 - Punto 2 **********************/

    const idBtnSpreadOp = document.querySelector("#idBtnSpreadOp");

    idBtnSpreadOp.addEventListener("click", ()=>{

        /* Aquí muestro el resultado del nuevo vector agrupado.
        Para ello, reciclo la función utilizada en el ejercicio anterior */

        const verTodasCohortes = fnAlumnosCohortesVer2(cohortesAgrupadas);

        idResultadoCohortes.innerHTML = cuadroResultado(
        "Cohortes Unificadas", verTodasCohortes
        );
    });


    /***************** EJERCICIO 18 - Punto 3 **********************/

    const idBtnFilterAprobados = document.querySelector("#idBtnFilterAprobados");
    const idBtnFilterDesprobados = document.querySelector("#idBtnFilterDesprobados");

    idBtnFilterAprobados.addEventListener("click", ()=>{

        /* Aquí defino esta variable para aplicar un filtro al nuevo vector
        que agrupa todas las cohortes, y me muestre los alumnos aprobados. */

        let alumnosAprobados = cohortesAgrupadas.filter(alumno => alumno.nota_final > 5);

        //aquí utilizo la función definida con los datos de nombre, apellido y notas
        let verAprobados = fnTodasLasCohortes(alumnosAprobados);

        idEstadoAlumnos.innerHTML = cuadroResultado(
            "Alumnos Aprobados", verAprobados
        );
    });

    idBtnFilterDesprobados.addEventListener("click", ()=>{

        /* Aquí creo la otra variable para los alumnos desaprobados. */
        let alumnosDesaprobados = cohortesAgrupadas.filter(alumno => alumno.nota_final <= 5);

        let verDesaprobados = fnTodasLasCohortes(alumnosDesaprobados);

        idEstadoAlumnos.innerHTML = cuadroResultado(
            "Alumnos Desaprobados", verDesaprobados
        );
    });    


    /***************** EJERCICIO 18 - Punto 4 **********************/

    const idBtnSort = document.querySelector("#idBtnSort");

    idBtnSort.addEventListener("click", ()=>{

        /* Aquí aplico el método "sort" sobre el vector para que me ordene la lista
        de alumnos de menor a meyor, en función a la nota final */

        cohortesAgrupadas.sort((a,b) => a.nota_final - b.nota_final);

        /* Me costó un poco resolver esta parte, es decir, que el método sort
        ordene la lista en función a las notas. Consulte en varios video tutoriales
        sobre la aplicación de este método hasta que comprendí que necesitaba 
        indicar que los parámetros "a" y "b" debían relacionarse con la propiedad
        nota_final del vector */

        let verNotasOrdenadas = fnTodasLasCohortes(cohortesAgrupadas);

        idNotasOrdenadas.innerHTML = cuadroResultado(
            "Notas de menor a mayor", verNotasOrdenadas
        );
    });


    /***************** EJERCICIO 18 - Punto 5 **********************/

    const idDniAlumno = document.querySelector("#idDniAlumno");
    const idBtnFind = document.querySelector("#idBtnFind");

    idBtnFind.addEventListener("click", ()=>{

        /* Aquí defino la constante en donde se validará si el número de DNI ingresado
        por el usuario, se corresponde con alguno del vector */

        const dniAlumno = idDniAlumno.value;

        /* Aquí aplico el método FIND sobre el vector de todas las Cohortes, usando
        una fn callback que recorra el vector hasta que encuentre el número de DNI
        ingresado por el ususario */

        const dniBuscado = cohortesAgrupadas.find(alumno => alumno.dni === dniAlumno);

            if(dniBuscado){
                console.log(dniBuscado); //Si encuentra el dato, se muestra por consola

                //y también muestro en el HTML los datos completos del alumno encontrado
                idAlumnoDni.innerHTML = cuadroResultado(
                "Datos del Amlumno", `${dniBuscado.apellido} ${dniBuscado.nombre}\n` +
                `DNI: ${dniBuscado.dni}\n` + `Nota final: ${dniBuscado.nota_final}`
                 );
            }
            else{
                alert(`El DNI ingresado no corresponde a un Alumno de las Cohortes`);
                //si no lo encuentra, devuelve una alerta
            }
    });


    /***************** EJERCICIO 18 - Punto 6 **********************/

    const idBtnIfElse = document.querySelector("#idBtnIfElse");
    const idBtnOpTernario = document.querySelector("#idBtnOpTernario");

    idBtnIfElse.addEventListener("click", ()=>{

        /* Aquí defino la variable para contar los alumnos aprobados. Luego aplico
        el método "reduce" sobre el vector de todas las Cohortes */

        let contadorAprobados1 = cohortesAgrupadas.reduce((contador,alumno)=>{

            /* Aplico el condicional IF para determinar si el alumno cumple
            con la condición necesaria para ser aprobado */
            if(alumno.nota_final > 5){

                contador = contador + 1; //si cumple la condición, acumulo.
            }
            return contador; //regreso el valor acumulado.
        },0);

        console.log(`Cantidad de Alumnos Aprobados: ${contadorAprobados1}`); //muestro por consola el total de alumnos aprobados.

        //y también muestro el resultado en el HTML
        idResultadoAprobados.innerHTML = cuadroResultado(
            "Aprobados (If/Else)",
            `Cantidad de alumnos aprobados: ${contadorAprobados1}`
        );
    });

    idBtnOpTernario.addEventListener("click", ()=>{

        /* Realizo el mismo procedimiento anterior */

        let contadorAprobados2 = cohortesAgrupadas.reduce((contador,alumno)=>{

            /* En este caso, utilizo un operador ternario para el condicional */
            alumno.nota_final > 5 ? contador = contador + 1 : contador;

            return contador;
        },0);

        console.log(`Cantidad de Alumnos Aprobados: ${contadorAprobados2}`);

        idResultadoAprobados.innerHTML = cuadroResultado(
            "Aprobados (Operador Ternario)",
            `Cantidad de alumnos aprobados: ${contadorAprobados2}`
        );
    });

}