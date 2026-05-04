import {fnCalculoPrecioVenta} from "./modelo19.js"

/* 
Ejercicio Nro. 19: 
Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de 
compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función 
debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar 
el precio de venta (sin impuestos). 
Nota: Debe devolver un número
*/


const fnGuardarEstado = (estadoAplicacion)=>{

    // convierte el estado a JSON   
    let estadoApp = JSON.stringify(estadoAplicacion);

    // persiste en el navegador en el localStorage
    localStorage.setItem(`estadoApp`,estadoApp);

};

const fnRecuperarEstado = (estadoAplicacion)=>{

    // aqui recupero
    let datoRecuperado = localStorage.getItem("estadoApp");

    if(datoRecuperado)
    {
        let estadoOBJETO = JSON.parse(datoRecuperado);

        console.log(datoRecuperado);

        console.log(estadoOBJETO);

        /* aqui tendria que actualizar los datos
            en el input 
        */

        // recupero los datos en los inputs
        idImporteCompra.value = Number(estadoOBJETO.importeCompra);
        idMargen.value = Number(estadoOBJETO.margen);

        //actualizo el estado aplicación
        estadoAplicacion.importeCompra = Number(estadoOBJETO.importeCompra);
        estadoAplicacion.margen = Number(estadoOBJETO.margen);

    }
};


window.onload = ()=>{
    
    console.log(`aplicacíon corriendo`);
    //console.log(fnCalculoPrecioVenta(1000,45));

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

    // recupero los datos automaticamente, sin necesidad de darle al boton recuperar
    fnRecuperarEstado(estadoAplicacion);

    //console.log(idImporteCompra,idMargen,idBtnCalcular,idResultado);


    idImporteCompra.oninput = ()=>{
        estadoAplicacion.importeCompra = Number(idImporteCompra.value);
        fnGuardarEstado(estadoAplicacion);
        //console.log(estadoAplicacion);
     };

    idMargen.oninput = ()=>{
        estadoAplicacion.margen = Number(idMargen.value);
        fnGuardarEstado(estadoAplicacion);
        //console.log(estadoAplicacion);
     };


    idBtnCalcular.onclick = ()=>{

        // aqui obtengo los datos de los inputs
        //let importeCompra = Number(idImporteCompra.value);
        //let margen = Number(idMargen.value);

        // aqui realizo el calculo pasandole los valores capturados en los inputs
        let resultado = fnCalculoPrecioVenta(estadoAplicacion.importeCompra,estadoAplicacion.margen);

        // aqui muestro el resultado por consola y tambien por DOM
        console.log(resultado.toFixed(2));

        // aqui muestro en el DOM en cualquier etiqueta que me permita mostrar texto
        /*
            <p>
            <h1> ... <h6>
            <label>
        */
        idResultado.textContent = `Importe Compra $${estadoAplicacion.importeCompra}, Margen ${estadoAplicacion.margen}% - Total $${resultado}`;

    };


    // click del boton guardar
    idBtnGuardar.onclick = ()=>{

        // 1_ aqui muestro el estado de la aplicación
        console.log(estadoAplicacion);

        // 2_ Convertir a JSON 
        let estadoJSON = JSON.stringify(estadoAplicacion);

        console.log(estadoJSON);

        /* 3_ persistencia en el navegador 
            - cookies => 
                .almacenamiento por aplicación 
                .se auto envian en el encabezado de la página
                .desaparecen cuando se borra el historial
            - sessionStorage =>
                .cada html renderizado tiene su propia sesion
                .permanecen mientras la sesion esta activa
            - localStorage =>
                .almacenamiento de la apliación completa en un solo lugar
                .y estan ahí hasta que uno los limpe o hasta que un usuario borre el historial
                .independiente del navegador
            - indexDB =>
                .
        */

            // aqui persisto los datos
        localStorage.setItem("estadoApp",estadoJSON);

    };


    // click del boton recuperar
    idBtnRecuperar.onclick = ()=>{

       fnRecuperarEstado(estadoAplicacion);

    };
};
