/*Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma no 
contiene ningún dígito numérico (del 0 al 9). 
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. Durante el recorrido, analizar 
cada carácter y comprobar si se encuentra dentro del rango de los números '0' a '9'. 
Si se detecta algún número, se debe interrumpir inmediatamente el bucle con break y devolver el valor 
lógico false, ya que la cadena deja de cumplir la condición “no contiene números”. 
En caso de recorrer la cadena completa sin encontrar ningún número, la función deberá devolver true. 
Nota: Debe devolver un boolean (true ó false).*/

import { contieneNumeros } from "./modulo_13.js";

window.onload =()=>{

    const estadoDApliacion={
        texto:"",
    }

    const texto=document.querySelector("#idTexto");
    const idResultado=document.querySelector("#idResultado");
    const btnCalcular= document.querySelector("#btnCalcular");
    const btnGuardar=document.querySelector("#btnGuardar");
    const btnRecuperar=document.querySelector("#btnRecuperar");

    console.log(texto)

    texto.oninput=()=>{
        estadoDApliacion.texto=(texto.value)
        console.log(texto.value)
    };
    btnCalcular.onclick=()=>{
        let resultadoFinal=contieneNumeros(
            estadoDApliacion.texto
        )
        console.log(`Resultado`, resultadoFinal)
        idResultado.textContent=`El valor devuelto: ${resultadoFinal}`
    };
    btnGuardar.onclick = ()=>{
        console.log(estadoDApliacion)
        let datos = JSON.stringify(estadoDApliacion)
        console.log(datos)
        localStorage.setItem("datos",datos)
   };

   btnRecuperar.onclick=()=>{
         let datos=localStorage.getItem("datos")
         let datosR= JSON.parse(datos)
         console.log("Recuperado:",datosR);
         idResultado.textContent = `El valor devuelto: : ${datosR.texto} `;
   
    };



}