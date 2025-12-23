import { cohorte01, cohorte02, cohorte03, cohorte04 } from "./datos.js";
import { fnRecorrerCohorte, fnRecorrerCohorteV3 } from "./modelo.js";
import { fnBuscarAlumnopordni } from "./modelo.js";
import { fnContarAlumnosAprobados } from "./modelo.js";
import { fnContarAlumnosAprobados1 } from "./modelo.js";


window.onload = () => {

    //console.log(`Aplicación corriendo`);

    //Ejercicio 18- Punto 1//
    /*Enunciado:
    1) Realice una función, que reciba como parámetro un vector de alumnos (puede ser de cualquier 
    cohorte) los recorra con un forEach y muestre por consola, el apellido y el nombre. 
    Invoque esa misma función, pasándole como parámetro el vector de la cohorte01, luego el vector de 
    la cohorte02 y así sucesivamente hasta la cuarta cohorte. */

    const idCohorte = document.querySelector("#idCohorte");
    const idBtnForEach = document.querySelector("#idBtnForEach");

    idBtnForEach.onclick = () => {

        console.log(`---------------------------------------------------------------------`)
        console.log(` TP N°4-Punto 1- Mostrar por consola Alumnos de la Cohorte Ingresada `)
        console.log(`---------------------------------------------------------------------`)

        //Versión 1- Ingresando la cohorte por codigo-
        console.log(`-----Version Ingresando por Código------`);
        console.log(`---Ej.Cohorte N°1:---`);
        fnRecorrerCohorte(cohorte01);

        /*console.log(`---Cohorte N°2:---`);
        console.log(cohorte02);
        fnRecorrerCohorteV3(cohorte02);

        console.log(`---Cohorte N°3:---`);
        console.log(cohorte03);
        fnRecorrerCohorteV3(cohorte03);

        console.log(`---Cohorte N°4:---`);
        console.log(cohorte04);
        fnRecorrerCohorteV3(cohorte04);*/

        //Version 2- Tomando datos del DOM
        console.log(`-----Version Tomando del DOM------`);

        const cohorteIngresada = idCohorte.value;
        console.log(`Cohorte Ingresada:${cohorteIngresada}`)
        // Aplicando switch
        switch (cohorteIngresada) {
            case 'cohorte01':
                let cohorte1 = cohorte01;
                fnRecorrerCohorte(cohorte1);
                break;
            case 'cohorte02':
                let cohorte2 = cohorte02;
                fnRecorrerCohorte(cohorte2);
                break;
            case 'cohorte03':
                let cohorte3 = cohorte03;
                fnRecorrerCohorte(cohorte3);
                break;
            case 'cohorte04':
                let cohorte4 = cohorte04;
                fnRecorrerCohorte(cohorte4);
                break;
            default:
                // Opcional: Código a ejecutar si cohorteIngresada no coincide con ningún case
                console.log(`Cohorte ${cohorteIngresada} no reconocida.`);
                // También podrías lanzar un error o no hacer nada.
                break;
        }

    }

    //verifo si ingreso la cohorte:
    idBtnForEach.addEventListener('click', function () {

        // Obtener el valor del campo y eliminar espacios en blanco al inicio/final
        const valorCampo = idCohorte.value.trim();
        //console.log(valorCampo);

        // 3. Control: Verificar si el campo está vacío
        if (valorCampo === "") {
            // EL CONTROL FALLA: El campo está vacío

            alert("¡Debe ingresar un valor válido de COHORTE para continuar!");
            idCohorte.style.borderColor = "green"; // Opcional: Resaltar el borde del campo
            idCohorte.focus();

        }
    });
    ///
    idBtnForEach.addEventListener("click", () => {

        alert("¡Revisar Consola!!");

    });


    //Ejercicio 18- Punto 2//
    /*Enunciado:
    2) El profesor desea unificar todos los alumnos en un solo vector, dado que estructuralmente son 
    iguales, utilice spread operator para “unificar el contenido de las cuatro cohortes” en un solo 
    vector. Muestre por consola el vector resultante.    
    */
    //Tomamos datos del documento

    idBtUnificar.onclick = () => {
        console.log(`-----------------------------------------------------------------------`)
        console.log(` TP N°4- Ej. 18- Punto 2- Aplico función a la union de las 4 cohortes  `)
        console.log(`-----------------------------------------------------------------------`)
        const unificacion = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
        console.log(`Vector Resultado de aplicar Spread Operator- Unificación:`)
        console.log(unificacion);

    }
    ///
    idBtUnificar.addEventListener("click", () => {

        alert("¡Revisar Consola!!");

    });

    //Opción Prueba Mostrar por Pantalla
    //Tomamos datos del documento
    const idMostrarPorPantalla = document.querySelector("#idMostrarPorPantalla");
    const idContenedorAlumnos = document.querySelector("#idContenedorAlumnos");
    //console.log("Valor de idcontenedorAlumnos:", idContenedorAlumnos); // ¡Revisa la Consola!


    idMostrarPorPantalla.onclick = () => {
        const unificacion = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
        console.log(`Mostrar por pantalla`);
        console.log(unificacion);
        const contenedoresAlumnos = unificacion.map(alumno => {

            // Generamos el Contenedor de Alumno 

            const contenedorAlumno = document.createElement("div");
            const nombreAlumno = document.createElement("h3");
            nombreAlumno.textContent = `Apellido: ${alumno.apellido} - Nombre: ${alumno.nombre} `;
            // aqui al contenedor de alumno le agrego un hijo que sería el nombre
            contenedorAlumno.appendChild(nombreAlumno);
            //Incrustamos los contendores de Alumnos al dom   
            console.log(contenedorAlumno);
            return contenedorAlumno;
        })

        // Ahora, insertamos los elementos del array contenedoresAlumnos 
        // dentro del elemento padre idcontenedorAlumnos

        if (idContenedorAlumnos) {
            // Limpiamos el contenedor antes de agregar nuevos elementos 
            // para evitar duplicados en cada click.
            idContenedorAlumnos.innerHTML = '';

            // Iteramos sobre el array de nuevos divs y los agregamos al DOM
            contenedoresAlumnos.forEach(contenedor => {
                idContenedorAlumnos.appendChild(contenedor);
            });
        } else {
            // Si la variable es null, se debe a que el ID no existe en el HTML o el JS se carga antes.
            console.error("Error: No se encontró el elemento con ID '#idContenedorAlumnos' en el documento.");
        }

    }


    //////////////////////////

    //Ejercicio 18- Punto 3//
    /*Enunciado:
    Sobre los datos unificados, cree dos vectores nuevos, uno puede llamarse alumnosAprobados y el 
    otro alumnosDesaprobados.*/

    //////////////////////////

    //Tomamos datos del documento- Mostramos por Consola

    const idBtnFilter = document.querySelector("#idBtnFilter");

    idBtnFilter.onclick = () => {
        console.log(`-----------------------------------------------------------------------`)
        console.log(` TP N°4- Ej. 18 Punto 3- Mostrar Alumnos Aprobados y Desaprobados      `)
        console.log(`-----------------------------------------------------------------------`)

        const unificacion = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

        const AlumnosAprobados = unificacion.filter(alumno => alumno.nota_final > 5);
        const AlumnosDesaprobados = unificacion.filter(alumno => alumno.nota_final <= 5);

        console.log(`---Alumnos Aprobados (Nota >5)`);
        fnRecorrerCohorteV3(AlumnosAprobados);

        console.log(`---Alumnos Desaprobados (Notas <=5)`);
        fnRecorrerCohorteV3(AlumnosDesaprobados);
    }
    idBtnFilter.addEventListener("click", () => {

        alert("¡Revisar Consola!!");

    });

    /// Mostrar por Pantalla Aprobados
    const idBtnMostrarEstadoAlumno = document.querySelector("#idBtnMostrarEstadoAlumno");
    const unificacion = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

    idBtnMostrarEstadoAlumno.onclick = () => {
        const AlumnosAprobados = unificacion.filter(alumno => alumno.nota_final > 5);
        const AlumnosDesaprobados = unificacion.filter(alumno => alumno.nota_final <= 5);

        //console.log(`---Alumnos Aprobados (Nota >5)`);
        //Ejecutamos Función para Recorrer Aprobados
        fnRecorrerCohorteV3(AlumnosAprobados);

        //Creamos contenedor con los alumnos aprobados 
        const contenedoresAlumnosAprobados = AlumnosAprobados.map(alumno => {
            // Generamos el Contenedor de Alumno 
            const contenedorAlumno = document.createElement("div");
            const nombreAlumno = document.createElement("h3");
            nombreAlumno.textContent = `Apellido: ${alumno.apellido} - Nombre: ${alumno.nombre} -Nota:${alumno.nota_final}`;
            // aqui al contenedor de alumno le agrego un hijo que sería el nombre
            contenedorAlumno.appendChild(nombreAlumno);
            //Incrustamos los contendores de Alumnos al dom   
            console.log(contenedorAlumno);
            return contenedorAlumno;
        })

        // Ahora, insertamos los elementos del array contenedoresAlumnosAprobados 
        // dentro del elemento padre idContenedorAprobados (en el DOM)
        const idContenedorAprobados = document.querySelector("#idContenedorAprobados");

        if (idContenedorAprobados) {
            // Limpiamos el contenedor antes de agregar nuevos elementos 
            // para evitar duplicados en cada click.
            idContenedorAprobados.innerHTML = '';
      
            // Iteramos sobre el array de nuevos divs y los agregamos al DOM
            contenedoresAlumnosAprobados.forEach(contenedor => {
            idContenedorAprobados.appendChild(contenedor);
            });

        } else {
            // Si la variable es null, se debe a que el ID no existe en el HTML o el JS se carga antes.
            console.error("Error: No se encontró el elemento con ID '#idContenedorAprobados por Nota' en el documento.");
        }
        //console.log(`---Alumnos Desaprobados (Notas <=5)`);
        
        //Mostrar por Pantalla Alumnos Desaprobados
        
        const idContenedorDesaprobados = document.querySelector("#idContenedorDesaprobados");
        //Ejecutamos Función para Recorrer Desaprobados
        fnRecorrerCohorteV3(AlumnosDesaprobados);

        //Creamos contenedor con los alumnos desaprobados 
        const contenedoresDesaprobados = AlumnosDesaprobados.map(alumno => {
            // Generamos el Contenedor de Alumno 
            const contenedorAlumno = document.createElement("div");
            const nombreAlumno = document.createElement("h3");
            nombreAlumno.textContent = `Apellido: ${alumno.apellido} - Nombre: ${alumno.nombre} -Nota:${alumno.nota_final}`;
            // aqui al contenedor de alumno le agrego un hijo que sería el nombre
            contenedorAlumno.appendChild(nombreAlumno);
            //Incrustamos los contendores de Alumnos al dom   
            console.log(contenedorAlumno);
            return contenedorAlumno;
        })
        // Ahora, insertamos los elementos del array contenedoresDesaprobados 
        // dentro del elemento padre idContenedorDesaprobados
        if (idContenedorDesaprobados) {
            // Limpiamos el contenedor antes de agregar nuevos elementos 
            // para evitar duplicados en cada click.
            idContenedorDesaprobados.innerHTML = '';
      
            // Iteramos sobre el array de nuevos divs y los agregamos al DOM
            contenedoresDesaprobados.forEach(contenedor => {
            idContenedorDesaprobados.appendChild(contenedor);
            });

        } else {
            // Si la variable es null, se debe a que el ID no existe en el HTML o el JS se carga antes.
            console.error("Error: No se encontró el elemento con ID '#idContenedorDesaprobados por Nota' en el documento.");
        }
        console.log(`---Alumnos Desaprobados (Notas <=5)`);
    }
        
        
    //////////////////////////
    //Ejercicio 18- Punto 4
    /*Enunciado:Sobre el vector Total de alumnos (cuatro cohortes), aplique el método “sort” = ordenar y ordene los 
    datos de todos esos alumnos por nota de menor a mayor. */
    //////////////////////////

    //Tomamos datos del documento
    const idBtnSort = document.querySelector("#idBtnSort");

    idBtnSort.onclick = () => {
        console.log(`-----------------------------------------------------------------------`)
        console.log(` TP N°4- Ej. 18 Punto 4- Alumnos por nota, de menor a mayor            `)
        console.log(`-----------------------------------------------------------------------`)

        const unificacion = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

        unificacion.sort((a, b) => a.nota_final - b.nota_final);
        console.log("Array de Alumnos Unficado Ordenados por Nota:", unificacion);
    }
    idBtnSort.addEventListener("click", () => {

        alert("¡Revisar Consola!!");

    });
    //Tomamos contenedor de la vista
    const idContenedorAlumnosPorNota = document.querySelector("#idContenedorAlumnosPorNota");

    // Opción Mostrar por Pantalla
    const idMostrarAlumnosporNota = document.querySelector("#idMostrarAlumnosporNota");
    idMostrarAlumnosporNota.onclick = () => {
        const unificacion = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
        unificacion.sort((a, b) => a.nota_final - b.nota_final);
        console.log("Array de Alumnos Unficado Ordenados por Nota:", unificacion);
        const contenedoresAlumnosporNota = unificacion.map(alumno => {

            // Generamos el Contenedor de Alumno 
            const contenedorAlumno = document.createElement("div");
            const nombreAlumno = document.createElement("h3");
            nombreAlumno.textContent = `Apellido: ${alumno.apellido} - Nombre: ${alumno.nombre} -Nota:${alumno.nota_final}`;
            // aqui al contenedor de alumno le agrego un hijo que sería el nombre
            contenedorAlumno.appendChild(nombreAlumno);
            //Incrustamos los contendores de Alumnos al dom   
            console.log(contenedorAlumno);
            return contenedorAlumno;
        })

        // Ahora, insertamos los elementos del array contenedoresAlumnosporNota 
        // dentro del elemento padre idcontenedorAlumnosporNota
        if (idContenedorAlumnosPorNota) {
            // Limpiamos el contenedor antes de agregar nuevos elementos 
            // para evitar duplicados en cada click.
            idContenedorAlumnosPorNota.innerHTML = '';

            // Iteramos sobre el array de nuevos divs y los agregamos al DOM
            contenedoresAlumnosporNota.forEach(contenedor => {
                idContenedorAlumnosPorNota.appendChild(contenedor);
            });
        } else {
            // Si la variable es null, se debe a que el ID no existe en el HTML o el JS se carga antes.
            console.error("Error: No se encontró el elemento con ID '#idContenedorAlumnosPorNota por Nota' en el documento.");
        }

    }

    //Ejercicio 18- Punto 5//
    /*Enunciado:
     Sobre el vector Total de alumnos, realice una búsqueda de los siguientes alumnos aplicando el 
    método “find” que tienen los vectores incorporados y busque algún alumno por su “dni”. El que ud. 
    Desee.
     
    */

    //Tomamos datos del documento
    const idBtnFind = document.querySelector("#idBtnFind");

    idBtnFind.onclick = () => {
        //Unifico todas las cohortes en un vector
        const unificacion = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];

        //Buscar Alumno por dni Llamando a la función. Prueba dni:
        console.log(`Buscar Alumno por dni- Ej.: DNI ingresado por codigo: 12345678`);
        fnBuscarAlumnopordni(unificacion, `12345678`);

        //Tomamos los elementos del DOM
        const idDni = document.querySelector("#idDni");
        const dniIngresado = idDni.value;
        console.log(`Buscar Alumno por dni- Ej.: DNI tomando del DOCUMENTO: ${dniIngresado}`);

        let dniEncontrado = fnBuscarAlumnopordni(unificacion, dniIngresado);
    }

    idBtnFind.addEventListener('click', function () {
        // Obtener el valor del campo y eliminar espacios en blanco al inicio/final
        const valorCampo = idDni.value.trim();
        //console.log(valorCampo);

        // 3. Control: Verificar si el campo está vacío
        if (valorCampo === "") {
            // EL CONTROL FALLA: El campo está vacío

            alert("¡Debe ingresar dni para continuar!");
            idDni.style.borderColor = "red"; // Opcional: Resaltar el borde del campo
            idDni.focus();

        }
    });
    idBtnFind.addEventListener("click", () => {
        alert("¡Revisar Consola!!");
    });

    /* */

    //Ejercicio 18- Punto 6//
    /*Enunciado:
    Sobre el vector Total de alumnos, deseamos “contabilizar” la cantidad de alumnos aprobados, es 
    decir la cantidad de alumnos que tienen nota > 5; para ello utilicen el método reduce que tienen los 
    vectores incorporados para contabilizar. Realice esto de dos formas 
        a. Usando una arrow function que a dentro utilice un condicional if/else para saber si la nota > 
            5 y por lo tanto contabilizar los aprobados; 
        b. Usando una arrow function que a dentro utilice un operador ternario para saber si la nota > 
            5 y por lo tanto contabilizar los aprobados; 
            Ambas formas deben llegar al mismo resultado, únicamente que se implementaron de dos formas 
            diferentes.
     
    */
    //Tomamos elementos del DOM    

    const idBtnReduce = document.querySelector("#idBtnReduce");
    const idBtnReduce1 = document.querySelector("#idBtnReduce1");


    //Contabilizar alumnos aprobados Usamos REDUCE-con if
    idBtnReduce.onclick = () => {
        console.log(`click en contar aprobados`);
        //Unifico todas las cohortes en un vector
        const unificacion = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
        console.log(`Muestro Vector de Alumnos de Todas las Cohortes`, unificacion)

        //Muestro datos del Ejercicio
        console.log(`-------------------------------------------------`)
        console.log(` TP N°4-Punto 6 -a Contabilizar Alumnos Aprobados `)
        console.log(`-------------------------------------------------`)

        //Llamo función para contar alumnos aprobados
        fnContarAlumnosAprobados(unificacion);
    }
    idBtnReduce.addEventListener("click", () => {

        alert("¡Revisar Consola!!");

    });
    //Contabilizar alumnos aprobados//probar si no tiene aprobados- con operador ternario

    idBtnReduce1.onclick = () => {
        //Unifico todas las cohortes en un vector
        const unificacion = [...cohorte01, ...cohorte02, ...cohorte03, ...cohorte04];
        console.log(`Muestro Vector de Alumnos de Todas las Cohortes`, unificacion)

        console.log(`-------------------------------------------------`)
        console.log(` TP N°4-Punto 6 -b Contabilizar Alumnos Aprobados `)
        console.log(`-------------------------------------------------`)

        //Llamo función para contar alumnos aprobados
        fnContarAlumnosAprobados1(unificacion);
    }
    idBtnReduce1.addEventListener("click", () => {

        alert("¡Revisar Consola!!");

    });
};