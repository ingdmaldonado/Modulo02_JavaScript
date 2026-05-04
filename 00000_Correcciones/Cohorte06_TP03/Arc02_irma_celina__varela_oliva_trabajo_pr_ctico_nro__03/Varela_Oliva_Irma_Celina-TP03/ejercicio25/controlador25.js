import {fnCalcularTasaFiscalizacionENRE} from "./modelo25.js";

/*

Ejercicio Nro. 25: 

Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios 
Públicos de Aguas de Catamarca” y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE 
(Ente Regulador de Servicios Públicos) que corresponde al 1,2 % del importe Base ingresado como parámetro de 
la arrow function. 

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

        let resultado = fnCalcularTasaFiscalizacionENRE(estadoAplicacion.importeBase);

        console.log(resultado);

        idResultado.textContent= `Importe Base: ${estadoAplicacion.importeBase} - Tasa Subsuelo: ${resultado}`;

    };


};

