/*Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios
Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es
un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function.
Nota: Debe devolver un número*/

import {fnCalcularTasaSubsuelo} from "./module24.js";

window.onload =() => {
    console.log(`corriendo`);

    const estadoAplicacion ={
        numero : 0,
        
    };

    const idNumero=document.querySelector("#idNumero");
    const idBtnAceptar=document.querySelector("#idBtnAceptar");

    const idBtnGuardar=document.querySelector("#idBtnGuardar");
    const idBtnRecuperar=document.querySelector("#idBtnRecuperar");

    const idResultado=document.querySelector("#idResultado");


    idNumero.oninput = () => {

        estadoAplicacion.numero = Number(idNumero.value);
        console.log(estadoAplicacion);
    };

    idBtnAceptar.onclick = () => {

        let resultado = fnCalcularTasaSubsuelo(estadoAplicacion.numero);
        console.log(resultado);

        idResultado.textContent=`monto ingraso ${estadoAplicacion.numero} resultado ${resultado} `;
    };

    idBtnGuardar.onclick = () => {

        let datosJSON = JSON.stringify(estadoAplicacion);
        
        console.log(datosJSON);

        localStorage.setItem("datosAPP", datosJSON);
    };

    idBtnRecuperar.onclick = () => {

        let datosJSON = localStorage.getItem("datosAPP");
        
        let datosObjeto = JSON.parse(datosJSON);

        console.log(datosJSON);
        console.log(datosObjeto);

        idNumero.value = datosObjeto.numero;
    };
};