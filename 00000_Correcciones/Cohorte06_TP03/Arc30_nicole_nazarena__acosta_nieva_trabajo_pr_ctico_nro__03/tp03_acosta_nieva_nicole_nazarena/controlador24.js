/*Ejercicio Nro. 24:
Realizar una arrow function que reciba como parámetro el Importe Base 
de una factura de “Servicios Públicos de Aguas de Catamarca”
y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, 
que es un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function. */

import { calcularTasaSubsuelo } from "./modelo24.js";
const guardarEstado = (estadoAplicacion) => {
    let estadoApp = JSON.stringify(estadoAplicacion);
    localStorage.setItem("estadoApp", estadoApp);
};

const recuperarEstado = () => {
    let datoRecuperado = localStorage.getItem("estadoApp");
    if (datoRecuperado) {
        let estadoObjeto = JSON.parse(datoRecuperado);
        idImporteBase.value = estadoObjeto.importeBase;
    }
};

window.onload = () => {
const estadoAplicacion = {
    importeBase: 0
};
const idImporteBase = document.querySelector("#idImporteBase");
const idBtnCalcular = document.querySelector("#idBtnCalcular");
const idResultado = document.querySelector("#idResultado");

recuperarEstado();

 idImporteBase.oninput = () => {
    estadoAplicacion.importeBase = Number(idImporteBase.value);

}

idBtnCalcular.onclick = () => {
    let resultado = calcularTasaSubsuelo(estadoAplicacion.importeBase);
 
    idResultado.textContent = `La tasa de subsuelo es:${resultado}`;
};
};