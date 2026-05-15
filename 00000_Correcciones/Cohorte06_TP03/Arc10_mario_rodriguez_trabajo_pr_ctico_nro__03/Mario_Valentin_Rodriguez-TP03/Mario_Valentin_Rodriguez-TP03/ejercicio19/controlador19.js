import {fnCalculoPrecioVenta} from "./modelo19.js";


/*

Ejercicio Nro. 19: 

Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de 
compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función 
debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar 
el precio de venta (sin impuestos). 

Nota: Debe devolver un número  


*/


// aqui estoy haciendo una arrow function que recibe como parametro dos valores, uno se llama importeCompra, margen y dentro la funcion resuelve el problema


window.onload = ()=>{

    console.log(`la aplicacion corriendo`);

    const estadoAplicacion = {

        importeCompra: 0,
        margen: 0,

    };

    const idImporteCompra = document.querySelector("#idImporteCompra");
    const idMargen = document.querySelector("#idMargen");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idRecuperar = document.querySelector("#idRecuperar");

    // console.log(idImporteCompra, idMargen, idBtnCalcular, idResultado);

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

        // aqui obtengo los valores de los input //
       // let importeCompra = Number(idImporteCompra.value);
       // let margen = Number(idMargen.value);

        // aqui invoco la funcion y le paso los valores que capture de los inputs //
        let resultado = fnCalculoPrecioVenta(estadoAplicacion.importeCompra, estadoAplicacion.margen);

        // aqui muestro el resultado por consola y tambien lo voy a mostrar en el DOM //
        console.log(resultado.toFixed(2));

        //aqui muestro en el DOM en cualquier etiqueta que me permita mostrar tecto (p, h1, h6, label, etc) //
        idResultado.textContent = `importe compra: ${estadoAplicacion.importeCompra} - margen: ${estadoAplicacion.margen} - total: ${resultado.toFixed(2)}`;


    };
    


};

