

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

import {fnCalculoPrecioVenta, fnGuardarEstado, fnRecuperarEstado} from "./modelo.js";

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

       console.log(estadoAplicacion.importeCompra) 
       console.log(estadoAplicacion.margen) 
       let resultado = fnCalculoPrecioVenta(estadoAplicacion.importeCompra,estadoAplicacion.margen);

        idResultado.textContent = `Importe Compra ${estadoAplicacion.importeCompra} - Margen ${estadoAplicacion.margen} - Total:= ${resultado}`;

    };

    /* click del boton guardar */
    idBtnGuardar.onclick = ()=>{

        fnGuardarEstado(estadoAplicacion);

        /* (1) convertir a JSON */
        let estadoJSON = JSON.stringify(estadoAplicacion);
        console.log(estadoJSON);

        localStorage.setItem("estadoApp",estadoJSON);
    };

    /* click del boton recuperar */
    idBtnRecuperar.onclick = ()=>{
        let DatosRecuperados = fnRecuperarEstado(estadoAplicacion);   
        console.log(DatosRecuperados)    

        idImporteCompra.value = DatosRecuperados.importeCompra;
        idMargen.value = DatosRecuperados.margen;
        estadoAplicacion.importeCompra = Number(idImporteCompra.value);
        estadoAplicacion.margen = Number(idMargen.value);
     
    };
   
    
};

 