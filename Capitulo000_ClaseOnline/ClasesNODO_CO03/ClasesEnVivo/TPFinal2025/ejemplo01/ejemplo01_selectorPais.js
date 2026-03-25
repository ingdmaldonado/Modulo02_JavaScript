
import {paises} from "../datos.js";
import {fnTransformarPaises,fnCompletarSelector} from "./vista_selectorPais.js";


/*

    vectores
    destructuring
    map
    forEach
    renderizacion dinamica del DOM
    arrow function
    funciones => encapsulación de lógica dentro de funciones
        CAJA NEGRA

    

    REACT => RENDERIZACION DINAMICA DE TODOS LOS COMPONENTES 

    JAVASCRIPT PURO => 


*/

window.addEventListener("load",()=>
    {
      
        const idSelectorDestino = document.querySelector("#idSelectorDestino");
        const idBtnConfirmar = document.querySelector("#idBtnConfirmar");

        const idNombrePais = document.querySelector("#idNombrePais");
        const idCapital = document.querySelector("#idCapital");
        const idContinente = document.querySelector("#idContinente");


        /* aqui llame a la función que transforma y 
        devuelve el vector de opcionesDinamicas */
        let opcionesDinamicas = fnTransformarPaises(paises);
 
        /* voy a llamar a la segunda función que se
        encarga de dibujar las opciones en el DOM */
        fnCompletarSelector(opcionesDinamicas,idSelectorDestino);

        /* tranquilamente puedo agregarle comportamiento al selector */

        idBtnConfirmar.addEventListener("click",()=>
            {
                // aqui saco el ID del pais //
                const idPaisElegido = Number(idSelectorDestino.value);
                // aqui lo muestro por consola //
                console.log(idPaisElegido);

                // Buscar el pais por el id elegido ? //

                const paisEncontrado = paises.find((pais) => 
                    {
                        if(pais.id === idPaisElegido)
                        {
                            return true;
                        }
                        else
                        {
                            return false;
                        }
                    })

                // ahora estaria en condiciones de mostrarlo //

                console.log(paisEncontrado);

                // ahora mostramos estos datos en el DOM //

                idNombrePais.textContent = paisEncontrado.nombrePais;
                idCapital.textContent = paisEncontrado.capital;
                idContinente.textContent = paisEncontrado.continentePais;

                /* 
                    map
                    filter
                    reduce
                    find
                    forEach
                */

            })
    })