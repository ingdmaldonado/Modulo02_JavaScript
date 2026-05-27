/* 19 - Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar el precio de venta (sin impuestos).
*/

import { fnContarVocales } from "./modelo.js";

const fnGuardarEstado = (estadoAplicacion)=>{

    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp",estadoApp);
};

const fnRecuperarEstado = (cadena)=>{
    let datoRecuperado = localStorage.getItem("estadoApp");

    if(datoRecuperado){
        let estadoOBJETO = JSON.parse(datoRecuperado);
        console.log(datoRecuperado);
        console.log(estadoOBJETO);
        cadena.value = estadoOBJETO.cadena;
    }
}

window.onload = () => {

    const estadoAplicacion = {
        cadena: ""
    };

    const cadena = document.querySelector("#cadena");
    const btnCalcular = document.querySelector("#btnCalcular");
    const btnGuardar = document.querySelector("#btnGuardar");
    const btnRecuperar = document.querySelector("#btnRecuperar");
    const idResultado = document.querySelector("#resultado");
    let vocales = "aeiouAEIOU";

    fnRecuperarEstado(cadena);

    cadena.oninput = () => {
        estadoAplicacion.cadena = cadena.value;
        console.log(estadoAplicacion);
    };

    btnCalcular.onclick = ()=>{
        let resultado = fnContarVocales(estadoAplicacion.cadena, vocales);
        idResultado.textContent = `La cadena ${cadena.value} tiene ${resultado} vocales`;
    };

    btnGuardar.onclick = ()=>{
        console.log(estadoAplicacion);
        let estadoJSON = JSON.stringify(estadoAplicacion);
        console.log(estadoJSON);
        localStorage.setItem("estadoApp",estadoJSON);
    };

    btnRecuperar.onclick = ()=>{
        fnRecuperarEstado(cadena);    
    };
}

