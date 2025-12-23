
import { cohorte01, cohorte02, cohorte03, cohorte04, copiaUnificacion, Unificacion } from "./datos.js";
import {
    recorrerCohorte, recorrerVectorUnificado, Aprobados,
    Desaprobados, ordenarNotas, busquedaPorDNI, contarAprobados, operadorTernario
} from "./modulo.js";


window.onload = () => {

    console.log(`running`);


    /******************** CAPTURA DE ELEMENTOS ********************/

    // Incisos --------------------------------------------------

    const idPunto1 = document.querySelector(`#idPunto1`);
    const idPunto2 = document.querySelector(`#idPunto2`);
    const idPunto3A = document.querySelector(`#idPunto3A`);
    const idPunto3B = document.querySelector(`#idPunto3B`);
    const idPunto4 = document.querySelector(`#idPunto4`);
    const idPunto5 = document.querySelector(`#idPunto5`);
    const idPunto6A = document.querySelector(`#idPunto6A`);
    const idPunto6B = document.querySelector(`#idPunto6B`);


    console.log(idPunto1, idPunto2, idPunto3A, idPunto3B, idPunto4, idPunto5, idPunto6A, idPunto6B);




    /******************** PUNTO 1 ****************************/
    /**
        Se crean un boton para mostrar cada cohorte
    */

    // boton cohorte 1  -----------------------------------------
    const boton1A = document.createElement("button");
    boton1A.textContent = `Cohorte 1`;
    // estilo boton
    boton1A.classList.add("botonesPunto1");

    boton1A.addEventListener("click", () => {

        // titulo de la cohorte
        const titulo = document.createElement("h2");
        titulo.textContent = `Cohorte N° 1 `;

        // hr o divisor
        const linea = document.createElement("hr");

        // funcion
        const recorrido1 = recorrerCohorte(cohorte01, 1);


        // consola
        console.log(`1) Cohorte 1`);
        console.log(recorrido1);

        idPunto1.appendChild(titulo);
        idPunto1.appendChild(linea);
        idPunto1.appendChild(recorrido1);

    });

    // boton cohorte 2 -----------------------------------------
    const boton1B = document.createElement("button");
    boton1B.textContent = `Cohorte 2`;
    // estilo boton
    boton1B.classList.add("botonesPunto1");

    boton1B.addEventListener("click", () => {

        // titulo de la cohorte
        const titulo = document.createElement("h2");
        titulo.textContent = `Cohorte N° 2`;

        // hr o divisor
        const linea = document.createElement("hr");

        // funcion
        const recorrido2 = recorrerCohorte(cohorte02, 2);

        // consola
        console.log(`1) Cohorte 2`);
        console.log(recorrido2);

        idPunto1.appendChild(titulo);
        idPunto1.appendChild(linea);
        idPunto1.appendChild(recorrido2);
    });


    // boton cohorte 3  -----------------------------------------
    const boton1C = document.createElement("button");
    boton1C.textContent = `Cohorte 3`;
    // estilo boton
    boton1C.classList.add("botonesPunto1");

    boton1C.addEventListener("click", () => {

        // titulo de la cohorte
        const titulo = document.createElement("h2");
        titulo.textContent = `Cohorte N° 3 `;

        // hr o divisor
        const linea = document.createElement("hr");

        // funcion
        const recorrido3 = recorrerCohorte(cohorte03, 3);

        // consola
        console.log(`1) Cohorte 3`);
        console.log(recorrido3);

        idPunto1.appendChild(titulo);
        idPunto1.appendChild(linea);
        idPunto1.appendChild(recorrido3);

    });

    // boton cohorte 4  -----------------------------------------
    const boton1D = document.createElement("button");
    boton1D.textContent = `Cohorte 4`;
    // estilo boton
    boton1D.classList.add("botonesPunto1");

    boton1D.addEventListener("click", () => {

        // titulo de la cohorte
        const titulo = document.createElement("h2");
        titulo.textContent = `Cohorte N° 4 `;

        // hr o divisor
        const linea = document.createElement("hr");

        // funcion
        const recorrido4 = recorrerCohorte(cohorte04, 4);

        // consola
        console.log(`1) Cohorte 4`);
        console.log(recorrido4);

        idPunto1.appendChild(titulo);
        idPunto1.appendChild(linea);
        idPunto1.appendChild(recorrido4);
    });

    // Mostrar por pantalla
    idPunto1.appendChild(boton1A);
    idPunto1.appendChild(boton1B);
    idPunto1.appendChild(boton1C);
    idPunto1.appendChild(boton1D);



    /******************** PUNTO 2 ****************************/

    /**
        Se crean un boton para mostrar las cohortes unificadas
    */

    // boton unificar
    const boton2 = document.createElement("button");
    boton2.textContent = `Vector Unificado`;
    // estilo boton
    boton2.classList.add("botones");

    boton2.addEventListener("click", () => {

        // titulo de la cohorte
        const titulo = document.createElement("h2");
        titulo.textContent = `Vector Unificado`;

        // hr o divisor
        const linea = document.createElement("hr");
        linea.style.marginBottom = " 8px";

        const alumnosEnTotal = recorrerVectorUnificado(Unificacion);

        console.log(`2) Todos los alumnos`);
        console.log(alumnosEnTotal);

        idPunto2.appendChild(titulo);
        idPunto2.appendChild(linea);
        idPunto2.appendChild(alumnosEnTotal);

    });

    idPunto2.appendChild(boton2);



    /******************** PUNTO 3 ****************************/

    /**
        Se filtran los alumnos, segun las notas. 
        Un boton para mostrar a los aprobados, y otro
        para mostrar los desaprobados
    */

    // 3) A - boton aprobados -------------------------------
    const boton3A = document.createElement("button");
    boton3A.textContent = `Aprobados`;
    // estilo boton
    boton3A.classList.add("botones");

    boton3A.addEventListener("click", () => {

        // titulo 
        const titulo = document.createElement("h2");
        titulo.textContent = `Alumnos Aprobados`;

        // hr o divisor
        const linea = document.createElement("hr");
        linea.style.marginBottom = " 8px";

        // funcion
        const alumnosAprobados = Aprobados(Unificacion);

        console.log(`3) a - Alumnos aprobados`);
        console.log(alumnosAprobados);

        idPunto3A.appendChild(titulo);
        idPunto3A.appendChild(linea);
        idPunto3A.appendChild(alumnosAprobados);

    });


    // 3) B - boton desaprobados -----------------------------
    const boton3B = document.createElement("button");
    boton3B.textContent = `Desaprobados`;
    // estilo boton
    boton3B.classList.add("botones");

    boton3B.addEventListener("click", () => {

        // titulo 
        const titulo = document.createElement("h2");
        titulo.textContent = `Alumnos Desaprobados`;

        // hr o divisor
        const linea = document.createElement("hr");
        linea.style.marginBottom = " 8px";

        const alumnosDesaprobados = Desaprobados(Unificacion);

        console.log(`3) b - Alumnos desaprobados`);
        console.log(alumnosDesaprobados);

        idPunto3B.appendChild(titulo);
        idPunto3B.appendChild(linea);
        idPunto3B.appendChild(alumnosDesaprobados);

    });

    idPunto3A.appendChild(boton3A);
    idPunto3B.appendChild(boton3B);




    /******************** PUNTO 4 ****************************/

    /**
        Se utilizan las notas finales para ordenar el vector.
    */

    const boton4 = document.createElement("button");
    boton4.textContent = `Ordenar notas de menor a mayor`;
    // estilo boton
    boton4.classList.add("botonPunto4");

    boton4.addEventListener("click", () => {

        // titulo 
        const titulo = document.createElement("h2");
        titulo.textContent = `Lista de notas ordenadas de menor a mayor`;

        // hr o divisor
        const linea = document.createElement("hr");
        linea.style.marginBottom = " 8px";

        // funcion
        const listaOrdenada = ordenarNotas(copiaUnificacion);
        console.log(`4) Lista ordenada`);
        console.log(listaOrdenada);  



        // se agregan los elementos hijos al elemento padre
        idPunto4.appendChild(titulo);
        idPunto4.appendChild(linea);
        idPunto4.appendChild(listaOrdenada);

    });

    idPunto4.appendChild(boton4);


    /******************** PUNTO 5 ****************************/
    /**
        Se busca un alumno mediante DNI
    */

    // ejemplos 
    const ejemplos = document.createElement("div");
    ejemplos.textContent = `Ejemplos: 
${cohorte01[0].apellido}, ${cohorte01[0].nombre} => ${cohorte01[0].dni}; ${cohorte02[0].apellido}, ${cohorte02[0].nombre} => ${cohorte02[0].dni}`;
    // estilo ejemplos
    ejemplos.classList.add("ejemplos"); 

    // label
    const label = document.createElement("label");
    label.textContent = `Ingrese el DNI del alumno/a`;
    // estilo label
    label.classList.add("label");

    // creo un input = donde se escribira el DNI
    const input = document.createElement("input");
    // estilo input
    input.classList.add("input-dni");

    const boton5 = document.createElement("button");
    boton5.textContent = `Buscar`;
    // estilo boton
    boton5.classList.add("botones");

    boton5.addEventListener("click", () => {

        // valor del input
        const buscarDNI = input.value;

        // funcion
        const respuesta = busquedaPorDNI(Unificacion, buscarDNI);

        // se guarda la respuesta en un parrafo
        const parrafo = document.createElement("p");
        parrafo.textContent = `Respuesta => ${respuesta}`;

        console.log(`Punto 5) - Busqueda por DNI => ${respuesta}`);

        idPunto5.appendChild(parrafo);

    });

    idPunto5.appendChild(ejemplos);
    idPunto5.appendChild(label);
    idPunto5.appendChild(input);
    idPunto5.appendChild(boton5);



    /******************** PUNTO 6 ****************************/

    /**
        Se contabilizan los alumnos aprobados.
    */

    // 6) A - estructura if / else
    const boton6A = document.createElement("button");
    boton6A.textContent = `Contabilizar Aprobados - If/Else`;
    // estilo boton
    boton6A.classList.add("botones");

    boton6A.addEventListener("click", () => {

        // titulo 
        const titulo = document.createElement("h2");
        titulo.textContent = `Estructura If / Else`;

        // hr o divisor
        const linea = document.createElement("hr");

        const numeroAprobados = contarAprobados(Unificacion);

        const parrafo = document.createElement("p");
        parrafo.textContent = `La cantidad de alumnos aprobados es: ${numeroAprobados}`;

        console.log(`6) a- IF/ELSE => La cantidad de alumnos aprobados es: ${numeroAprobados}`);

        idPunto6A.appendChild(titulo);
        idPunto6A.appendChild(linea);
        idPunto6A.appendChild(parrafo);
    });



    // 6) B - estructura operador ternario
    const boton6B = document.createElement("button");
    boton6B.textContent = `Contabilizar Aprobados - Operador Ternario`;
    // estilo boton
    boton6B.classList.add("botones");

    boton6B.addEventListener("click", () => {

        // titulo 
        const titulo = document.createElement("h2");
        titulo.textContent = `Estructura Operador Ternario`;

        // hr o divisor
        const linea = document.createElement("hr");

        const numeroAprobados2 = operadorTernario(Unificacion);

        const parrafo = document.createElement("p");
        parrafo.textContent = `6) b- La cantidad de alumnos aprobados es: ${numeroAprobados2}`;

        console.log(`6) b- OP => La cantidad de alumnos aprobados es: ${numeroAprobados2}`);

        idPunto6B.appendChild(titulo);
        idPunto6B.appendChild(linea);
        idPunto6B.appendChild(parrafo);
    });

    idPunto6A.appendChild(boton6A);
    idPunto6B.appendChild(boton6B);


}; 
