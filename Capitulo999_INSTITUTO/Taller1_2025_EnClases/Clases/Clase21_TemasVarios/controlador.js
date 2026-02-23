
import {fnCalcularCuadrado,fnCalcularCubo,versionDelSistema} from "./funciones.js";

// esta es una importación por defecto //
import equipoProgramadores from "./creadoraplicacion.js";

import equipodirecciongeneral from "./equipodirecciongeneral.js";


/* 

    El controlador, debe capturar los eventos
    que suceden en la pagina. no debe elaborar
    ningún resultado.

    captura los datos (DOM)

    lógica de negocios => MODELO = MODULO

        - funciones que se encarguen específicamente
        de resolver el problema.


    muestra los resultados (DOM)

    TODO lo que hace a la lógica de la aplicación
    no sería correcto que esté o que el controlador
    se encargue de hacer eso.

    para ello debería tener un conjunto de funciones,
    funcionalidades que se encarguen de la logica.

*/

/* CONCEPTO DE CAJA NEGRA => que una función
desconoce todo el ámbito exterior a la función.
lo unico que sabe, es que recibe un parametro x
y a ese parametro x, lo tiene que multiplicar por si
mismo y devolverlo.

    como se llame ese valor a fueera de la función
    a la función no le importa.

*/

window.onload = function()
{
    console.log("running");

    const idVersion = this.document.querySelector("#idVersion");

    idVersion.textContent = versionDelSistema;

    console.log(equipodirecciongeneral);


    const idNumero = this.document.querySelector("#idNumero");
    const idBtnCuadrado = this.document.querySelector("#idBtnCuadrado");
    const idResultado = this.document.querySelector("#idResultado");

    console.log(idNumero,idBtnCuadrado,idResultado);


    idBtnCuadrado.onclick = ()=>
        {
            let numeroIngresado = Number(idNumero.value);
            console.log(numeroIngresado);

            // esto no lo debería hacer el controlador //
           // let cuadrado = numeroIngresado * numeroIngresado;

            let cuadrado = fnCalcularCuadrado(numeroIngresado);

            idResultado.textContent = `El cuadrado es ${cuadrado}`;


        }


}

/* SEPARACIÓN LÓGICA DE LA APLICACIÓN 

    vista => html + css + talwind

    controlador => codigo javaScript que captura los eventos
        - onload => pagina se carga
        - click => cuando se hace click en cualquier parte del com
        - onchange => cuando un input cambia de estado o valor
        - checked => 

    modelo: conjunto de funciones que se encargan
        de resolver la lógica pura y exclusivamente
        del problema que la aplicación viene a resolver.

        NO PUEDEN ESTAR DECLARADAS NI DEFINIDAS EN EL CONTROLADOR

        NO TIENE QUE CAPTURAR NADA DEL DOM

        NO TIENE QUE MOSTRAR NADA DEL DOM



*/