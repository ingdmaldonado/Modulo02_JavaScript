/* 19 - Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar el precio de venta (sin impuestos).
*/

import { fnMensajeDevolucion } from "./modelo.js";

const fnGuardarEstado = (estadoAplicacion)=>{

    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp",estadoApp);
};

const fnRecuperarEstado = (notasPromedio)=>{
    let datoRecuperado = localStorage.getItem("estadoApp");

    if(datoRecuperado){
        let estadoOBJETO = JSON.parse(datoRecuperado);
        console.log(datoRecuperado);
        console.log(estadoOBJETO);
        notasPromedio.value = estadoOBJETO.notasPromedio;
    }
}

window.onload = () => {

    const estadoAplicacion = {
        notasPromedio: 0
    };

    const notasPromedio = document.querySelector("#notasPromedio");
    const btnCalcular = document.querySelector("#btnCalcular");
    const btnGuardar = document.querySelector("#btnGuardar");
    const btnRecuperar = document.querySelector("#btnRecuperar");
    const idResultado = document.querySelector("#resultado");

    fnRecuperarEstado(notasPromedio);

    notasPromedio.oninput = () => {
        estadoAplicacion.notasPromedio = Number(notasPromedio.value);
        console.log(estadoAplicacion);
    };

    btnCalcular.onclick = ()=>{
        let resultado = fnMensajeDevolucion(estadoAplicacion.notasPromedio);
        idResultado.textContent = `${resultado}`;
    };

    btnGuardar.onclick = ()=>{
        console.log(estadoAplicacion);
        let estadoJSON = JSON.stringify(estadoAplicacion);
        console.log(estadoJSON);
        localStorage.setItem("estadoApp",estadoJSON);
    };

    btnRecuperar.onclick = ()=>{
        fnRecuperarEstado(notasPromedio);    
    };
}

