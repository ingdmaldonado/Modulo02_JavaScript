
import {fnCuadrado,fnCalcularPromedioDeServicios} from "./modelo.js"

import {fnChangeidProvincia,fnChangeidJubilado,fnChangeidAgua} from "./controladorfunciones.js";

//import {estadoAplicacion} from "./estadoApp.js";

/* PATRON MODELO / VISTA / CONTROLADOR 

VISTA : ELEMENTOS ESTATICOS HTML5 + CSS
+ TODO CODIGO JAVASCRIPT QUE SE ENCARGUE
DE RENDERIZAR DINAMICAMENTE COMPONENTES
EN EL DOM.

CONTROLADOR: CODIGO JAVASCRIPT QUE SE ENCARGA
DE CAPTURAR EL ESTADO DE LA APLICACIÓN, 
EL EVENTO LOAD DE LA PAGINA, LA INTERACCIÓN
DEL USUARIO CON LA INTERFAZ

MODELO : EL CONJUNTO DE FUNCIONALIDADES
QUE SE ENCARGAN DE RESOLVER LA LOGICA DE NEGOCIOS
DE LA APLICACIÓN

MODULOS => ARCHIVOS QUE ME PERMITEN EXCLUIR
O SEPARAR FUNCIONES, CONSTANTES, VECTORES
EN OTRO ARCHIVO SEPARADO QUE SE PUEDE IMPORTAR
DENTRO DE UN PROGRAMA PRINCIPAL

*/



/* ESTADO DE LA APLICACIÓN. 
el estado de la aplicación. apunta
a que una página web. una interfaz,
tenga la posibilidad en cualquier
instante de acceder al valor de los atributos
o inputs que tiene, sin necesidad de estar
capturando esos valores dentro del click del boton
*/

/* las constantes son INMODIFICABLES a excepción
de  de los vectores y los objetos literales */

const estadoAplicacion = 
    {
        valorAgua:0,
        valorEnergia:0,
        valorGas:0,
        provincia:0,
        esJubilado:false,
    }


/*
una función que resuelve lógica de negocios.
porque no es una función que maneja el DOM, 
no es una función que controla la interacción
de los usuarios, sino que engloba lógica pura
de negocios.
El programador, entiende que esta función
tiene que ser parte del MODELO. y 
la penso de forma generica para que reciba
multiples parametros. por eso uso rest
multiples parametros. rest operator 
*/

/* REFACTORIZAR => es ir MEJORANDO 
Y SEPARANDO LA LOGICA EN CAPAS */



window.addEventListener("load",()=>{

    console.log("running");

    /* Capturamos los elementos del DOM que
    necesitamos controlar */

    const idProvincia = document.querySelector("#idProvincia");
    const idJubilado = document.querySelector("#idJubilado");
    const idAgua = document.querySelector("#idAgua");
    const idGas = document.querySelector("#idGas");
    const idEnergia = document.querySelector("#idEnergia");

    const idBtnPromedio = document.querySelector("#idBtnPromedio");
    const idBtnInflacion = document.querySelector("#idBtnInflacion");

    console.log(idAgua,idGas,idEnergia,idBtnPromedio,idBtnInflacion,idJubilado);

    /* el input agua se tiene que encargar de registrar su 
    valor en el estado de la aplicación */

    

    idProvincia.addEventListener("change",fnChangeidProvincia);

    /*
    idProvincia.addEventListener("change",()=>{
        estadoAplicacion.provincia = Number(idProvincia.value);
        console.log(estadoAplicacion);
    })
    */


    idJubilado.addEventListener("change",fnChangeidJubilado);

    idAgua.addEventListener("input",fnChangeidAgua);


    idGas.addEventListener("input",()=>{

        estadoAplicacion.valorGas = Number(idGas.value);
        console.log(estadoAplicacion);

    })

    idEnergia.addEventListener("input",()=>
        {
            estadoAplicacion.valorEnergia = Number(idEnergia.value);
            console.log(estadoAplicacion);
        })

    idBtnPromedio.addEventListener("click",
        ()=>{

            /*
            let valorAgua = Number(idAgua.value);
            let valorEnergia = Number(idEnergia.value);
            let valorGas = Number(idGas.value);
            */

            /*
            let valorAgua = estadoAplicacion.valorAgua;
            let valorEnergia = estadoAplicacion.valorEnergia;
            let valorGas = estadoAplicacion.valorGas;
            */

            /* vamos a aplicar destructuring del objeto
            estadoAplicacion */

            let {valorAgua,valorEnergia,valorGas } = estadoAplicacion;

           // let promedioServicios = (valorAgua + valorEnergia + valorGas)/3;

            let promedioServicios = fnCalcularPromedioDeServicios(valorAgua,valorEnergia,valorGas);


            console.log(`El promedio es: ${promedioServicios.toFixed(2)}`);

        })

    idBtnInflacion.addEventListener("click",()=>
        {
            /*
            let valorAgua = Number(idAgua.value);
            let valorEnergia = Number(idEnergia.value);
            let valorGas = Number(idGas.value);
            */

            let {valorAgua,valorEnergia,valorGas } = estadoAplicacion;


            let sumaDeServicios = valorAgua + valorEnergia + valorGas;

            let inflacionMensual = (sumaDeServicios * 3.4)/100;

            let serviciosConInflacion = sumaDeServicios + inflacionMensual;

            console.log(`Servicios con inflacion ${serviciosConInflacion}`)


        })

})