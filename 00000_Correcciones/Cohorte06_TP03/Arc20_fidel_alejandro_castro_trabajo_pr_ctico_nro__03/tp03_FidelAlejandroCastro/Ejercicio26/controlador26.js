/* 19 - Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar el precio de venta (sin impuestos).
*/

import { fnDosisRecomendada } from "./modelo.js";

const fnGuardarEstado = (estadoAplicacion) => {

    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);
};

const fnRecuperarEstado = (nivelDeGlucosa, pesoCorporal, opciones) => {
    let datoRecuperado = localStorage.getItem("estadoApp");

    if (datoRecuperado) {
        let estadoOBJETO = JSON.parse(datoRecuperado);
        console.log(datoRecuperado);
        console.log(estadoOBJETO);
        nivelDeGlucosa.value = estadoOBJETO.nivelDeGlucosa;
        pesoCorporal.value = estadoOBJETO.pesoCorporal;
        opciones.value = estadoOBJETO.opciones;
    }
}

window.onload = () => {

    const estadoAplicacion = {
        nivelDeGlucosa: 0,
        pesoCorporal: 0,
        opciones: 0
    };
    const nivelDeGlucosa = document.querySelector("#nivelDeGlucosa");
    const pesoCorporal = document.querySelector("#pesoCorporal");
    const opciones = document.querySelector("#opciones");
    const btnCalcular = document.querySelector("#btnCalcular");
    const btnGuardar = document.querySelector("#btnGuardar");
    const btnRecuperar = document.querySelector("#btnRecuperar");
    const idResultado = document.querySelector("#resultado");

    fnRecuperarEstado(nivelDeGlucosa, pesoCorporal, opciones);

    nivelDeGlucosa.oninput = () => {
        estadoAplicacion.nivelDeGlucosa = Number(nivelDeGlucosa.value);
        console.log(estadoAplicacion);
    };

    pesoCorporal.oninput = () => {
        estadoAplicacion.pesoCorporal = Number(pesoCorporal.value);
        console.log(estadoAplicacion);
    };

    opciones.onchange = () => {
        estadoAplicacion.opciones = Number(opciones.value);
        console.log(estadoAplicacion);
    };

    btnCalcular.onclick = () => {
        let resultado = fnDosisRecomendada(estadoAplicacion.nivelDeGlucosa, estadoAplicacion.pesoCorporal, estadoAplicacion.opciones);
        idResultado.textContent = `${resultado}`;
    };

    btnGuardar.onclick = () => {
        console.log(estadoAplicacion);
        let estadoJSON = JSON.stringify(estadoAplicacion);
        console.log(estadoJSON);
        localStorage.setItem("estadoApp", estadoJSON);
    };

    btnRecuperar.onclick = () => {
        fnRecuperarEstado(nivelDeGlucosa, pesoCorporal, opciones);
    };
}

