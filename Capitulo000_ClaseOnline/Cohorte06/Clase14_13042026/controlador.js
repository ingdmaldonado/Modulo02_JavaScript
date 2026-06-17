import {fnCalculoPrecioVenta} from "./modelo.js";

/*

Ejercicio Nro. 19:
Realizar una arrow function que reciba 
dos parámetros de entrada. 
El parámetro 1 será el importe de compra 
de un producto, el segundo será el margen
de ganancia que se aplicará sobre 
ese producto, 
la función debe retornar el precio de 
venta que será igual a aplicarle el % de 
margen de ganancia. La función debe retornar 
el precio de venta (sin impuestos).

*/

/* 
    1000 => importe de compra
    45% => margen de ganancia

    1450 => esta debería ser la salida
*/

/* aqui estoy haciendo una arrow function
que recibe como parametro dos valores,
uno se llama importeCompra, margen
y dentro la funcion resuelve el problema */

 const fnGuardarEstado = (estadoAplicacion)=>{

    // convierte el estado a JSON //
    let estadoApp = JSON.stringify(estadoAplicacion);

    // persiste en el navegador en el local Storage //
    localStorage.setItem("estadoApp",estadoApp);

};

const fnRecuperarEstado = ()=>{

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

    //console.log(idImporteCompra,idMargen,idBtnCalcular,idResultado);

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

        /* aqui obtengo los valores de los input */
       // let importeCompra = Number(idImporteCompra.value);
       // let margen = Number(idMargen.value);

        /* aqui invoco la función y le paso los valores que capture
        de los inputs */
        let resultado = fnCalculoPrecioVenta(estadoAplicacion.importeCompra,estadoAplicacion.margen);

        /* aqui muestro el resultado por consola
        y también lo voy a mostrar en el DOM */

        console.log(resultado.toFixed(2));

        /* aqui muestro en el DOM, en cualquier
        etiqueta que me permita mostrar texto 
        
        <p>
        <h1> ... <h6>
        <label>
        
        */
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

        /* (3) Persistencia en el Navegador 
        
            - cookies => 
                    almacenamiento por apliación
                    se auto envian en el encabezado la pagina
                    desaparecen cuando se borra el historial
            - sessionStorage => 
                    cada html renderizado tiene su propia sesion
                    permanecen mientras la sesion esta abierta
            - localStorage =>
                    almacenamiento de la aplicación completa
                    en un solo lugar

                    los datos se persisten en el navegador
                    y están ahí hasta que uno los limpie
                    o hasta que un usuario borre el historial

                    independiente del navegador

            - indexDB => 
        */

        // aqui persisto //
        localStorage.setItem("estadoApp",estadoJSON);

    };

    /* click del boton recuperar */
    idBtnRecuperar.onclick = ()=>{

      
        fnRecuperarEstado();       
       
      

    };
   
    
};

 
/*

 // Momento 2 => de la Invocación de la Función

    let resultado1 = fnCalculoPrecioVenta(1000,45);
    console.log(resultado1);

    let importe1 = 255486.20;
    let margen1 = 27.2;

    let resultado2 = fnCalculoPrecioVenta(importe1,margen1);
    console.log(resultado2);
    */