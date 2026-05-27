import {FnPrecioDeVenta,} from "./modelo.js";
/*Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de
compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función
debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar
el precio de venta (sin impuestos).
Nota: Debe devolver un número */


window.onload  = ()=>{
    console.log(`la pagina esta cargada`);

    const estadoAplicacion = {
        importeCompra:0,
        margen:0,
        };
    const idImporteCompra = document.querySelector("#idImporteCompra");
    const idMargen = document.querySelector("#idMargen");
    const bTnCalcular = document.querySelector("#bTnCalcular");
    const idResultado =document.querySelector("#idResultado");


    //estado de la aplicacion 
    idImporteCompra.oninput = ()=>{
        estadoAplicacion.importeCompra = Number(idImporteCompra.value);
        console.log(estadoAplicacion);
    };
    idMargen.oninput = ()=>{
        estadoAplicacion.margen =Number(idMargen.value);
        console.log(estadoAplicacion);
    };


    //boton click
    bTnCalcular.onclick = ()=>{
        /*let importeCompra = Number (idImporteCompra.value);
        let margen = Number (idMargen.value);*/
       
        let resultado =FnPrecioDeVenta(estadoAplicacion.importeCompra, estadoAplicacion.margen );

        idResultado.textContent = `El importe compra es, ${estadoAplicacion.importeCompra} - margen ${estadoAplicacion.margen} -total ${resultado}`;

    };


    


};
