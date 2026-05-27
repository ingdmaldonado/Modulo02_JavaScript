/* 19 - Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar el precio de venta (sin impuestos).
*/

import { fnPrecioDeVenta } from "./modelo.js";

const fnGuardarEstado = (estadoAplicacion)=>{

    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp",estadoApp);
};

const fnRecuperarEstado = (importeProducto,margenGanancia)=>{
    let datoRecuperado = localStorage.getItem("estadoApp");

    if(datoRecuperado){
        let estadoOBJETO = JSON.parse(datoRecuperado);
        console.log(datoRecuperado);
        console.log(estadoOBJETO);
        importeProducto.value = estadoOBJETO.importeProducto;
        margenGanancia.value = estadoOBJETO.margenGanancia;
    }
}

window.onload = () => {

    const estadoAplicacion = {
        importeProducto: 0,
        margenGanancia: 0,
    };

    const importeProducto = document.querySelector("#importeProducto");
    const margenGanancia = document.querySelector("#margenGanancia");
    const btnCalcular = document.querySelector("#btnCalcular");
    const btnGuardar = document.querySelector("#btnGuardar");
    const btnRecuperar = document.querySelector("#btnRecuperar");
    const idResultado = document.querySelector("#resultado");

    fnRecuperarEstado(importeProducto, margenGanancia);

    importeProducto.oninput = () => {
        estadoAplicacion.importeProducto = Number(importeProducto.value);
        console.log(estadoAplicacion);
    };

    margenGanancia.oninput = () => {
        estadoAplicacion.margenGanancia = Number(margenGanancia.value);
        console.log(estadoAplicacion);
    };

    btnCalcular.onclick = ()=>{
        let resultado = fnPrecioDeVenta(estadoAplicacion.importeProducto,estadoAplicacion.margenGanancia);
        idResultado.textContent = `${resultado.toFixed(2)}`;
    };

    btnGuardar.onclick = ()=>{
        console.log(estadoAplicacion);
        let estadoJSON = JSON.stringify(estadoAplicacion);
        console.log(estadoJSON);
        localStorage.setItem("estadoApp",estadoJSON);
    };

    btnRecuperar.onclick = ()=>{
        fnRecuperarEstado(importeProducto, margenGanancia);    
    };
}

