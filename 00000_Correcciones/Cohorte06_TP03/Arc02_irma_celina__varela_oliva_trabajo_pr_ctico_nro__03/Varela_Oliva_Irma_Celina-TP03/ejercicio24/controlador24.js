import {fnCalcularTasaSubsuelo} from "./modelo24.js";

/*

Ejercicio Nro. 24: 

Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios 
Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es 
un importe que corresponde al 3% del importe Base ingresado como parámetro de la arrow function. 

Nota: Debe devolver un número  

*/

window.onload=()=>{

    const estadoAplicacion ={

        importeBase:0,

    };

    const idImporteBase = document.querySelector("#idImporteBase");
    const idResultado = document.querySelector("#idResultado");
    const idBtnCalcular = document.querySelector("#idBtnCalcular");


    idImporteBase.oninput=()=>{

        estadoAplicacion.importeBase=Number(idImporteBase.value);

        console.log(estadoAplicacion);

    };

    idBtnCalcular.onclick=()=>{

        let resultado = fnCalcularTasaSubsuelo(estadoAplicacion.importeBase);

        console.log(resultado);

        idResultado.textContent= `Importe Base: ${estadoAplicacion.importeBase} - Tasa Subsuelo: ${resultado}`;

    };


};
