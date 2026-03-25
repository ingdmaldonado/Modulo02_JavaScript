
import {paises,costoPasajes} from "../datos.js";
import {fnGenerarFilas,fnDibujarFilasEnDOM} from "./vista_tablaDinamica.js";

/* 
    primero => map => transformas los objetos literales en algo que se 
    pueda agregar al DOM

    segundo => a ese vector de resultado del paso anterior, lo recorro
    con forEach y los agrego al DOM
*/

/* un objeto global a toda la aplicación
donde cada input, o cada elemento del html
reportará de forma automática el valor 
que tiene. de esa manera, en cualquier
instante podré acceder a los valores de
los input */

const estadoAplicacion = 
    {
        nombreCompleto:"",
        filasGeneradas:[], // aqui estaria el vector de filas,
        costoTotalDeIDA:0,
        costoTotalDeVUELTA:0,
        costoTotalDeIDAyVUELTA:0,
    }

window.addEventListener("load",()=>
    {
        console.log("ejemplo 02 andando",paises);

        /* CUANDO TENGO ELEMENTOS ESTÁTICOS LOS VINCULO
        POR MEDIO DE CONSTANTES */

        const idTableBody = document.querySelector("#idTableBody");
        const idBtnAceptar = document.querySelector("#idBtnAceptar");
        const idNombreCompleto = document.querySelector("#idNombreCompleto");

        /* aqui estoy invocando a la función de transformación
        solamente para ir viendo como se generan las filas 
        invocarla y que el resultado lo guarde en filasGeneradas.
        */

       // const filasGeneradas = fnGenerarFilas(paises);

        /* la funcion fnGenerarFilas es la que recorre las
        filas del vector de paises y las convierte en filas
        que posteriormente se agregaran al DOM */

        estadoAplicacion.filasGeneradas = fnGenerarFilas(paises);

        /* llamar la segunda funcion que es la que dibuja los elementos
        en el DOM */

        fnDibujarFilasEnDOM(estadoAplicacion.filasGeneradas,idTableBody);


        /* esto se dispara cuando el input
        cambia de valor */
        idNombreCompleto.addEventListener("input",()=>
            {
                estadoAplicacion.nombreCompleto = idNombreCompleto.value;
            })

        /* esto es el click del boton.
        donde estoy ahora mostrando el estado
        de la aplicación */

        idBtnAceptar.addEventListener("click",()=>{

           console.log(estadoAplicacion.filasGeneradas);

           estadoAplicacion.costoTotalDeIDA = 0;

           // lo que estoy haciendo aqui es recorrer las filas generadas por map
           estadoAplicacion.filasGeneradas.forEach(fila => 
            {
                //console.log(fila); // me va a mostrar toda la fila completa 

                const celda0 = fila.children[0];

                const idPaisElegido = Number(celda0.textContent);

                const celda1 = fila.children[1];

                const celda2 = fila.children[2];

                const celda3 = fila.children[3];
               
                /* agregamos el checkbox
                agregamos el input a la celda 4
                */

                const celda4 = fila.children[4];

                /* aqui estoy accediendo al primer hijo de la celda 4
                que en este caso es el checkbox */

                const checkbox = celda4.children[0]; // tengo separado el checkbox

                const boton = celda4.children[1]; // tengo separado el boton

                if(checkbox.checked) // es decir me fijo unicamente en los checkbox que tienen la propiedad checked en true
                {
                    // aqui van quedando los paises elegidos //

                    console.log(idPaisElegido);

                    /* con estos (ID) debería buscar para cada uno de estos los precios */

                    const pasajeEncontrado = costoPasajes.find(costo => 
                        {
                            if(costo.idPais === idPaisElegido)
                            {
                                return true;
                            }
                            else
                            {
                                return false;
                            }
                        })

                    console.log(pasajeEncontrado);

                    // aqui lo que estoy haciendo es un acumulador de los precios //
                    estadoAplicacion.costoTotalDeIDA = estadoAplicacion.costoTotalDeIDA + pasajeEncontrado.precioIda;

                    //console.log(checkbox);
                }

                console.log(`Total PASAJES IDA: ${estadoAplicacion.costoTotalDeIDA}`);

            })


           
           

        })

    })