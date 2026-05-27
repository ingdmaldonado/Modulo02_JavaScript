/*Ejercicio Nro. 24:
Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios
Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es
un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function.
Nota: Debe devolver un número*/


import { calcularTasaSubsuelo } from "./modelo.js";

    window.onload = () => {

        const estadoAplicacion = {
            importeBase : 0
        };

        const idImporteBase = document.querySelector("#idImporteBase");
        const idBtnCalcular = document.querySelector("#idBtnCalcular");
        const idBtnGuardar = document.querySelector("#idBtnGuardar");
        const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
        const idResultado = document.querySelector("#idResultado");


        idImporteBase.oninput = () => {
            estadoAplicacion.importeBase = Number(idImporteBase.value);
        };

        idBtnCalcular.onclick = () => {
            let resultado = calcularTasaSubsuelo(estadoAplicacion.importeBase);

            idResultado.textContent = "tasa de Subsuelo:" +resultado;
        };

        idBtnGuardar.onclick = () => {
            let datosJSON = JSON.stringify(estadoAplicacion);

            localStorage.setItem("datosAPP",datosJSON);
        };


        idBtnRecuperar.onclick = () => {
            let datosJSON = localStorage.getItem("datosAPP");
            let datosObjeto = JSON.parse(datosJSON);

            idImporteBase.value = datosObjeto.importeBase;

            estadoAplicacion.importeBase = datosObjeto.importeBase;
        };

















    }