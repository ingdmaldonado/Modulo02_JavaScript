
/* 
desde el archivo model03.js incorpora o importa la funcion
que se llama fnContarVocalesDeCadena
*/

import {fnContarVocalesDeCadena} from "./modelo03.js";



window.addEventListener("load",()=>
    {
        console.log(`application is running`);

        const idTextoIngresado = document.querySelector("#idTextoIngresado");
        const idTextoIngresado1 = document.querySelector("#idTextoIngresado1");
        const idBtnCalcular = document.querySelector("#idBtnCalcular");
        const idBtnCalcular1 = document.querySelector("#idBtnCalcular1");

        console.log(idTextoIngresado,idTextoIngresado1,idBtnCalcular,idBtnCalcular1);

        /* aqui le agregue comportamiento click al boton que ya tenía */

        idBtnCalcular.addEventListener("click",()=>{

            // aqui estoy declarando una variable y poniendola en vacio //
            let fraseIngresada = ``;

            // estoy guardando el valor del input 1 en la frase //
            fraseIngresada = idTextoIngresado.value;

            // estoy convirtiendo toda la cadena a mayusculas //
            fraseIngresada = fraseIngresada.toUpperCase();

            // aqui estoy declarando una variable para guardar la cantidad de vocales //
            let contadorDeVocales = 0;

            // aqui estoy invocando la función que se encarga específicamente de contar las vocales //
            contadorDeVocales = fnContarVocalesDeCadena(fraseIngresada);

            console.log(`La Cantidad de vocales es: ${contadorDeVocales}`);

        });


        idBtnCalcular1.addEventListener("click",()=>
            {

               // aqui estoy declarando una variable y poniendola en vacio //
                let fraseIngresada1 = ``;

                // estoy guardando el valor del input 1 en la frase //
                fraseIngresada1 = idTextoIngresado1.value;

                // estoy convirtiendo toda la cadena a mayusculas //
                fraseIngresada1 = fraseIngresada1.toUpperCase();

                let contadorDeVocales = 0;

                contadorDeVocales = fnContarVocalesDeCadena(fraseIngresada1);

                console.log(`La Cantidad de vocales es: ${contadorDeVocales}`);

          
            })

    })

    /* javaScript => Standard de la WEB => todos los navegadores.

        PHP => BackEnd 
        JAVA => estos eran del BackEnd + aplicaciones de escritorio
        C# => estos eran del BackEnd + aplicaciones de escritorio

        FULL STACK => lenguaje de programción FRONT (javaScrip)

        FRONT END => javaScript
        BACK END => Node JS => Servidor Web (BackEnd) => javascript

        PHYTON
    
    */

    /*

    HTML => ESTRUCTURA DE LOS COMPONENTES VISUALES = OBJETOS

    CSS => APLICA LOS ESTILOS

    JAVASCRIPT =>

        CONTROLADOR => CAPTURAR LOS EVENTOS E INGRESOS DE DATOS EN LA INTERFAZ (DOCUMENTO HTML)

            - CAPTURA DEL EVENTO LOAD
            - CAPTURA DE LOS EVENTOS CLICK
            - OBTENER LOS VALORES INGRESADOS EN LOS INPUT
            - PASAR LOS VALORES A FUNCIONES QUE ANALICEN ESOS DATOS
            - OBTENER RESULTADOS Y MOSTRARLOS POR PANTALLA

        MODELO => 

            - CONJUNTO DE FUNCIONALIDADES (FUNCIONES) QUE 
            DEBERÍAN ENCARGARSE DE RESOLVER EL PROBLEMA PUNTUAL
            PARA LO QUE ESTA DISEÑADA LA APLICACIÓN.

                Contar la cantidad de vocales de una cadena ?.



    */

    /* PRINCIPIOS:

        - No debo repetir lógica en botones. tampoco
        el boton o la función del boton tiene que tener
        la lógica que resuelve el problema.

        - le estoy delegando una funcionalidad al boton que no le corresponde

        FUNCIONES => 

    */



