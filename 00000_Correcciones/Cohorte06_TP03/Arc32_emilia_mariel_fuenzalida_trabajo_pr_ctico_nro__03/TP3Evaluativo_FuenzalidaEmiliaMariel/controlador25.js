import { fnTasaFiscalizacion } from "./modelo.js";
import { fnGuardar, fnRecuperar } from "./storage.js";
/*
----Ejercicio Nro. 25----- 


Realizar una arrow function que reciba 
como parámetro el Importe Base de una factura de “Servicios 
Públicos de Aguas de Catamarca” y partir de ese 
importe base calcule y devuelva la Tasa de Fiscalización ENRE 
(Ente Regulador de Servicios Públicos) que corresponde al 1,2 % 
del importe Base ingresado como parámetro de 
la arrow function. 

*/

window.onload = () => {

    const estadoAplicacion = {
        importeBase: 0
    };

    const idImporteBase = document.querySelector("#idImporteBase");
    const idCalculoTasa = document.querySelector("#idCalculoTasa");
    const idResultadoTasa = document.querySelector("#idResultadoTasa");

    const idGuardar = document.querySelector("#idGuardar");
    const idRecuperar = document.querySelector("#idRecuperar");

    let datos = fnRecuperar("ejercicio25");

    idImporteBase.oninput = () => {

        estadoAplicacion.importeBase = Number(idImporteBase.value);
        fnGuardar("ejercicio25", estadoAplicacion);

    };

    idCalculoTasa.onclick = () => {

        let tasaFiscalizacion = fnTasaFiscalizacion(estadoAplicacion.importeBase);


        idResultadoTasa.textContent = `------Tasa de fiscalizacion ENRE: ${tasaFiscalizacion}-------`;
    };
    /* GUARDAR */
    idGuardar.onclick = () => {

        fnGuardar("ejercicio25", estadoAplicacion);
    };

    /* RECUPERAR */
    idRecuperar.onclick = () => {

        let datos = fnRecuperar("ejercicio25");

        if (datos) {

            estadoAplicacion.importeBase = datos.importeBase;

            idImporteBase.value = datos.importeBase;
        }
    };
};