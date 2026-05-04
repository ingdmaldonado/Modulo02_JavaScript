/*Realizar una arrow function que reciba como parámetro una cadena de texto y devuelva cuántas 
consonantes contiene (mayúsculas o minúsculas). Es decir consideramos consonante a todo carácter que NO 
SEA VOCAL. 
Debe recorrer la cadena con un ciclo for, analizar cada carácter y determinar si es una letra que no sea vocal. 
No debe utilizar métodos de strings como replace(), split() o expresiones regulares. 
Nota: Debe devolver un número.*/

import { cadenaText } from "./modulo_10.js";

window.onload =()=>{

    const estadoDAplicacion ={
        texto:""
    }

    const texto = document.querySelector("#idTexto");
    const btnCalcular=document.querySelector("#btnCalcular");
    const idResultado=document.querySelector("#idResultado");
    const btnGuardar=document.querySelector("#btnGuardar");
    const btnRecuperar=document.querySelector("#btnRecuperar");

    console.log(texto)

    texto.oninput=()=>{
        estadoDAplicacion.texto= (texto.value)
        console.log(texto.value)
    }

    btnCalcular.onclick=()=>{
        let resultadoFinal= cadenaText(
            estadoDAplicacion.texto
        )
        console.log(`Resultado`, resultadoFinal)
        idResultado.textContent=`Conteo de consonantes ${resultadoFinal}`

    }

    
    btnGuardar.onclick = ()=>{

        console.log(estadoDAplicacion)
        let datos = JSON.stringify(estadoDAplicacion)
        console.log(datos)
        localStorage.setItem("datos",datos)
   };

   btnRecuperar.onclick=()=>{
         let datos=localStorage.getItem("datos")
         let datosR= JSON.parse(datos)
         console.log("Recuperado:",datosR);
         idResultado.textContent = `Conteo de consonantes ${datosR.texto} `;
   
    };
}





    
