/* Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios Públicos de Aguas de Catamarca”
y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE (Ente Regulador de Servicios Públicos)
que corresponde al 1,2 % del importe Base ingresado como parámetro de la arrow function.
Nota: Debe devolver un número */

import {fncalcularTasa} from "./25modelo.js";

window.onload = () => {

    const idImporteBase = document.querySelector(`#idImporteBase`);
    const idTasa = document.querySelector("#idTasa");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");
    const idBtnGuardar = document.querySelector("#idBtnGuardar");
    const idBtnRecuperar = document.querySelector("#idBtnRecuperar");
    const idResultado = document.querySelector("#idResultado");

    const estadoAplicacion = {
        importeBase: 0,
        tasa: 0,
    };

    idImporteBase.oninput = () => {
        estadoAplicacion.importeBase = Number(idimporteBase.value);
    };

    idBtnCalcular.onclick =() => {
        let resultado = fncalcularTasa(estadoAplicacion.importeBase); 
    };

    estadoAplicacion.tasa = resultado;

    idResultado.textContent = `La Tasa ENRE es: $ ${resultado.toFixed(2)}`;
    };

    idBtnGuardar.onclick = () => {
        let datosJSON = JSON.stringify(estadoAplicacion);
        localStorage.setItem("datosAPP",datosJSON);
};

    idBtnRecuperar.onclick = () => {
        let datosJSON = localStorage.getItem("datosAPP");
        let datosObjeto = JSON.parse(datosJSON);

    estadoAplicacion.importeBase = datosObjeto.importeBase;
    estadoAplicacion.tasa = datosObjeto.tasa;
    idImporteBase.value = estadoAplicacion.importeBase;
    idResultado.textContent = `La Tasa ENRE es: $ ${estadoAplicacion.importeBase.toFixed(2)}`;

};
