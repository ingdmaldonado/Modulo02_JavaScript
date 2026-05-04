/*Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios 
Públicos de Aguas de Catamarca” y a partir de ese importe base calcule y devuelva la Tasa de Subsuelo, que es 
un importe que corresponde al   3% del importe Base ingresado como parámetro de la arrow function. 
Nota: Debe devolver un número  */

import { factura } from "./modulo_6.js";


window.onload = ()=>{

     const estadoAplicacion={
        importeBase:0,
        
        
    }

    const importeBase = document.querySelector("#idImporte");
    const resultado= document.querySelector("#idResultado");
    const btnCalcular = document.querySelector("#btnCalcular");
    const btnGuardar= document.querySelector("#btnGuardar");
    const btnRecuperar= document.querySelector("#btnRecuperar")

    console.log(importeBase,resultado)
    
    importeBase.oninput =()=>{
        estadoAplicacion.importeBase= Number(importeBase.value)
        console.log(importeBase.value)
    };


    btnCalcular.onclick = ()=>{

        let resultadoFinal = factura(
            estadoAplicacion.importeBase,
            
        );
        resultado.textContent=`Importe de tasa de subsuelo $ ${resultadoFinal}`
    };

    btnGuardar.onclick=()=>{
        console.log(estadoAplicacion)
        let datos = JSON.stringify(estadoAplicacion)
        console.log(datos);
        localStorage.setItem("datos", datos)
    };
    btnRecuperar.onclick=()=>{
         let datos=localStorage.getItem("datos")
         let datosR= JSON.parse(datos)
         console.log("Recuperado:",datosR);
         resultado.textContent= `Importe : ${datosR.importeBase} `;
   
   };
}
   