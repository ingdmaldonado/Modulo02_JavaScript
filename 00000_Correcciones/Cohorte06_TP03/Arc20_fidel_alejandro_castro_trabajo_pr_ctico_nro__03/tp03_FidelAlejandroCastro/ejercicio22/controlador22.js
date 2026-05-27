/* 19 - Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar el precio de venta (sin impuestos).
*/

import { fnSobreTasa } from "./modelo.js";

const fnGuardarEstado = (estadoAplicacion)=>{

    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp",estadoApp);
};

const fnRecuperarEstado = (opciones, importeBase)=>{
    let datoRecuperado = localStorage.getItem("estadoApp");

    if(datoRecuperado){
        let estadoOBJETO = JSON.parse(datoRecuperado);
        console.log(datoRecuperado);
        console.log(estadoOBJETO);
        opciones.value = estadoOBJETO.opciones;
        importeBase.value = estadoOBJETO.importeBase;
    }
}

window.onload = () => {

    const estadoAplicacion = {
        opciones: 0,
        importeBase: 0
    };

    const opciones = document.querySelector("#opciones");
    const importeBase = document.querySelector("#importeBase");
    const btnCalcular = document.querySelector("#btnCalcular");
    const btnGuardar = document.querySelector("#btnGuardar");
    const btnRecuperar = document.querySelector("#btnRecuperar");
    const idResultado = document.querySelector("#resultado");

    fnRecuperarEstado(opciones, importeBase);

    importeBase.oninput = () => {
        estadoAplicacion.importeBase = Number(importeBase.value);
        console.log(estadoAplicacion);
    };
    opciones.onchange = () => {
        estadoAplicacion.opciones = Number(opciones.value);
        console.log(estadoAplicacion);
    };

    btnCalcular.onclick = ()=>{
        let resultado = fnSobreTasa(estadoAplicacion.opciones, estadoAplicacion.importeBase);
        idResultado.textContent = `${resultado}`;
    };

    btnGuardar.onclick = ()=>{
        console.log(estadoAplicacion);
        let estadoJSON = JSON.stringify(estadoAplicacion);
        console.log(estadoJSON);
        localStorage.setItem("estadoApp",estadoJSON);
    };

    btnRecuperar.onclick = ()=>{
        fnRecuperarEstado(opciones, importeBase);    
    };
}

