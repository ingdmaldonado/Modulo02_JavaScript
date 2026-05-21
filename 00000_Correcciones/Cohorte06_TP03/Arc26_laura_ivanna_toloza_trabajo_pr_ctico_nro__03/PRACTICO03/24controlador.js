/* Realizar una arrow function que reciba como parámetro el Importe Base de una factura de 
“Servicios Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, 
que es un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function.
Nota: Debe devolver un número */

import { calcularTasaSubsuelo } from "./24modelo.js";

window.onload = () => {

const idImporteBase = document.querySelector("#idImporteBase");
const idBtnCalcular = document.querySelector("#idBtnCalcular");
const idBtnGuardar = document.querySelector("#idBtnGuardar");
const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
const idResultado = document.querySelector("#idResultado");

const estadoAplicacion = {
    importeBase: 0,
    tasaSubsuelo: 0,
};

idImporteBase.oninput = () => {
        estadoAplicacion.importeBase = Number(idImporteBase.value);
    };

idBtnCalcular.onclick = () => {
    let resultado = calcularTasaSubsuelo(estadoAplicacion.importeBase);
    estadoAplicacion.tasaSubsuelo = resultado;
    idResultado.textContent = `La Tasa de Subsuelo es: $ ${resultado.toFixed(2)}`;
};

idBtnGuardar.onclick = () => {
    let datosJSON = JSON.stringify(estadoAplicacion);
    localStorage.setItem("datosAPP", datosJSON);
};

idBtnRecuperar.onclick = () => {

    let datosJSON = localStorage.getItem("datosAPP");
    let datosObjeto = JSON.parse(datosJSON);
    estadoAplicacion.importeBase = datosObjeto.importeBase;
    estadoAplicacion.tasaSubsuelo = datosObjeto.tasaSubsuelo;
    idImporteBase.value = estadoAplicacion.importeBase;
    idResultado.textContent = `La Tasa de Subsuelo es: $ ${estadoAplicacion.tasaSubsuelo.toFixed(2)}`;
};

}