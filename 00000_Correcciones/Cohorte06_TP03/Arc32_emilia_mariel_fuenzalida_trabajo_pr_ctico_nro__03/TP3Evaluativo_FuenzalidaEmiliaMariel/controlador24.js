import { fnCalcularTasaSubsuelo } from "./modelo.js";
import { fnGuardar, fnRecuperar } from "./storage.js";
/*
Realizar una arrow function que reciba como parámetro 
el Importe Base de una factura de “Servicios Públicos de Aguas 
de Catamarca” y a partir de ese importe base calcule 
y devuelva la Tasa de Subsuelo, que es un importe que corresponde 
al 3% del importe Base ingresado como parámetro de la arrow function. 


*/

window.onload = () => {

    const estadoAplicacion = {
        importeBase: 0
    };

    const idImporteBase = document.querySelector("#idImporteBase");
    const idCalcular = document.querySelector("#idCalcular");
    const idResultado = document.querySelector("#idResultado");

    const idGuardar = document.querySelector("#idGuardar");
    const idRecuperar = document.querySelector("#idRecuperar");

    let datos = fnRecuperar("ejercicio24");

    idImporteBase.oninput = () => {

        estadoAplicacion.importeBase = idImporteBase.value;

        fnGuardar("ejercicio24", estadoAplicacion);

        console.log(estadoAplicacion);
    };

    idCalcular.onclick = () => {

        let tasaSubsuelo = fnCalcularTasaSubsuelo(
            Number(estadoAplicacion.importeBase)
        );

        idResultado.textContent =
        `La tasa de subsuelo es: $${tasaSubsuelo}`;
    };

    /* GUARDAR */
    idGuardar.onclick = () => {

        fnGuardar("ejercicio24", estadoAplicacion);
    };

    /* RECUPERAR */
    idRecuperar.onclick = () => {

        let datos = fnRecuperar("ejercicio24");

        if (datos) {

            estadoAplicacion.importeBase = datos.importeBase;

            idImporteBase.value = datos.importeBase;
        }
    };
};