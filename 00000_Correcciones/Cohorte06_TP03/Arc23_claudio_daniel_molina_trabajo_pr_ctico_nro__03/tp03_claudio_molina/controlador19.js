/* Acá importo la función que quiero usar del modelo */

import {calcularPrecioVenta} from "./modelo.js";

/*Funciones para guardar y recuperar el estado*/

export const fnGuardarEstado = (estadoAplicacion)=>{

/* Acá convierto el estado a JSON */

    let estadoApp = JSON.stringify(estadoAplicacion);

/* Acá persiste (se mantiene la información) en el navegador en el local Storage */

    localStorage.setItem("estadoApp",estadoApp);

};

export const fnRecuperarEstado = ()=>{

      // aqui recupero //
        let datoRecuperado = localStorage.getItem("estadoApp");
       
        if(datoRecuperado)
        {
            let estadoOBJETO = JSON.parse(datoRecuperado);

            console.log(datoRecuperado);

            console.log(estadoOBJETO);

            /* aqui tendria que actualizar los datos
            en el input */

            idImporteCompra.value = estadoOBJETO.importeCompra;
            idMargen.value = estadoOBJETO.margen;

        }

}

window.onload = ()=>{

    console.log(`la aplicación corriendo`);

    const estadoAplicacion = {
        importeCompra:0,
        margen:0,
    };

    const idImporteCompra = document.querySelector("#idImporteCompra");
    const idMargen = document.querySelector("#idMargen");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    fnRecuperarEstado();

    console.log(idImporteCompra,idMargen,idBtnCalcular,idResultado);

    idImporteCompra.oninput = ()=>{
        estadoAplicacion.importeCompra = Number(idImporteCompra.value);
        fnGuardarEstado(estadoAplicacion);
        console.log(estadoAplicacion);
    };

    idMargen.oninput = ()=>{
        estadoAplicacion.margen = Number(idMargen.value);
        fnGuardarEstado(estadoAplicacion);
        console.log(estadoAplicacion);
    };

    // delegando el evento click del boton en una arrow function //
    idBtnCalcular.onclick = ()=>{

        
        /* aqui invoco la función y le paso los valores que capture
        de los inputs */
        let resultado = calcularPrecioVenta(estadoAplicacion.importeCompra,estadoAplicacion.margen);

        /* aqui muestro el resultado por consola
        y también lo voy a mostrar en el DOM */

        console.log(resultado.toFixed(2));

        
        idResultado.textContent = `Importe Compra ${estadoAplicacion.importeCompra} - Margen ${estadoAplicacion.margen} - Total:= ${resultado}`;

    };

    /* click del boton guardar */
    idBtnGuardar.onclick = ()=>{

        /* (1) aqui muestro el estado 
        de la aplicación */

        console.log(estadoAplicacion);

        /* (2) convertir a JSON */

        let estadoJSON = JSON.stringify(estadoAplicacion);
        console.log(estadoJSON);

        
        // aqui persisto //
        localStorage.setItem("estadoApp",estadoJSON);

    };

    /* click del boton recuperar */
    idBtnRecuperar.onclick = ()=>{
      
        fnRecuperarEstado();       
 
    };
     
};

 