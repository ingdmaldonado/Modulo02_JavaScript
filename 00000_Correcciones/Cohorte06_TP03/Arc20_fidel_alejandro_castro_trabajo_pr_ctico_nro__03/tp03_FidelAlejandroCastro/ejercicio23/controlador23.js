/* 19 - Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar el precio de venta (sin impuestos).
*/

import { fnCalcularImporteAgua } from "./modelo.js";

const fnGuardarEstado = (estadoAplicacion)=>{

    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp",estadoApp);
};

const fnRecuperarEstado = (consumoAgua)=>{
    let datoRecuperado = localStorage.getItem("estadoApp");

    if(datoRecuperado){
        let estadoOBJETO = JSON.parse(datoRecuperado);
        console.log(datoRecuperado);
        console.log(estadoOBJETO);
        consumoAgua.value = estadoOBJETO.consumoAgua;
    }
}

window.onload = () => {

    const estadoAplicacion = {
        consumoAgua: 0
    };

    const consumoAgua = document.querySelector("#consumoAgua");
    const btnCalcular = document.querySelector("#btnCalcular");
    const btnGuardar = document.querySelector("#btnGuardar");
    const btnRecuperar = document.querySelector("#btnRecuperar");
    const idResultado = document.querySelector("#resultado");

    fnRecuperarEstado(consumoAgua);

    consumoAgua.oninput = () => {
        estadoAplicacion.consumoAgua = Number(consumoAgua.value);
        console.log(estadoAplicacion);
    };

    btnCalcular.onclick = ()=>{
        let resultado = fnCalcularImporteAgua(estadoAplicacion.consumoAgua);
        idResultado.textContent = `$${resultado}`;
    };

    btnGuardar.onclick = ()=>{
        console.log(estadoAplicacion);
        let estadoJSON = JSON.stringify(estadoAplicacion);
        console.log(estadoJSON);
        localStorage.setItem("estadoApp",estadoJSON);
    };

    btnRecuperar.onclick = ()=>{
        fnRecuperarEstado(consumoAgua);    
    };
}

