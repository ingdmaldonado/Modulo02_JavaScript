/*Ejercicio Nro. 19:
Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de compra de un producto, 
el segundo será el margen de ganancia que se aplicará sobre ese producto, la función debe retornar 
el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar el precio de venta (sin impuestos).
Nota: Debe devolver un número*/

import {fnCalcular} from "./19modelo.js";

window.onload = ()=>{
        
    const estadoAplicacion = {
        importeDeCompra:0,
        margen:0,
        resultadofinal:0,
    };

    const idImporteCompra = document.querySelector("#idImporteCompra");
    const idMargen = document.querySelector("#idMargen");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idResultado = document.querySelector("#idResultado");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

    idImporteCompra.oninput = ()=>{
        estadoAplicacion.importeDeCompra = Number(idImporteCompra.value);
    };

    idMargen.oninput = ()=>{
        estadoAplicacion.margen = Number(idMargen.value);
    };

    idBtnCalcular.onclick = ()=>{
        const resultado = fnCalcular(estadoAplicacion.importeDeCompra, estadoAplicacion.margen);
        estadoAplicacion.resultadofinal = resultado;
        idResultado.textContent = `Precio de venta: $ ${resultado.toFixed(2)}`;
    };

    idBtnGuardar.onclick = ()=>{
        let datosJSON = JSON.stringify(estadoAplicacion);
        localStorage.setItem("datosAPP", datosJSON);
    };

    idBtnRecuperar.onclick = ()=>{
        let datosJSON = localStorage.getItem("datosAPP");
        let datosObjeto = JSON.parse(datosJSON);

        estadoAplicacion.importeDeCompra = datosObjeto.importeDeCompra;
        estadoAplicacion.margen = datosObjeto.margen;
        estadoAplicacion.resultadofinal = datosObjeto.resultadofinal;
        idImporteCompra.value = estadoAplicacion.importeDeCompra;
        idMargen.value = estadoAplicacion.margen;
        idResultado.textContent = `Precio de venta: $ ${estadoAplicacion.resultadofinal.toFixed(2)}`;
    };
};