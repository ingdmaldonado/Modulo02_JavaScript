/*Realizar una arrow function que reciba como parámetro el Importe Base de una factura de “Servicios 
Públicos de Aguas de Catamarca” y partir de ese importe base calcule y devuelva la Tasa de Fiscalización ENRE 
(Ente Regulador de Servicios Públicos) que corresponde al 1,2 % del importe Base ingresado como parámetro de 
la arrow function.*/
import { calculo } from "./modulo_7.js"; 
window.onload = ()=>{

    const estadoAplicacion ={
        importeBase:0,
    }

    const importeBase = document.querySelector("#idImporte");
    const resultado = document.querySelector("#idResultado");
    const btnCalcular = document.querySelector("#btnCalcular");
    const btnGuardar= document.querySelector("#btnGuardar");
    const btnRecuperar=document.querySelector("#btnRecuperar");

    console.log(importeBase,resultado,btnCalcular);

    importeBase.oninput = ()=>{
        estadoAplicacion.importeBase= Number(importeBase.value);
        console.log(importeBase.value)
    };

    btnCalcular.onclick =()=>{

        let resultadoFinal = calculo (
            estadoAplicacion.importeBase
        );
         resultado.textContent = `Tasa de fiscalizacion ${resultadoFinal}`
    };
    btnGuardar.onclick=()=>{
       console.log( estadoAplicacion)
       let datos = JSON.stringify(estadoAplicacion);
       console.log(datos);
       localStorage.setItem("datos",datos)
    };
    btnRecuperar.onclick=()=>{
         let datos=localStorage.getItem("datos")
         let datosR= JSON.parse(datos)
         console.log("Recuperado:",datosR);
         resultado.textContent= `Taza de fiscalización : ${datosR.importeBase} `;
   
   };


}