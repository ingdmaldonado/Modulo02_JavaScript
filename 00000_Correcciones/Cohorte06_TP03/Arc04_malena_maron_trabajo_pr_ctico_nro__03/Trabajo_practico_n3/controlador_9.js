/*Realizar una arrow function que reciba como parámetro una cadena de texto y que devuelva la cantidad 
de vocales “mayúsculas y/o minúsculas” que tiene la misma.  
Debe recorrer la cadena con un ciclo for, desde el primer carácter hasta el último, analizar cada uno de 
los caracteres y determinar si es una vocal o no. No debe utilizar métodos de strings como replace(), split() o 
expresiones regulares. 
Nota: Debe devolver un número.*/
import { contarVocales } from "./modulo_9.js";

 window.onload = ()=>{

    const estadoDAplicacion={
        idTexto:"",
    }

    

    const idTexto = document.querySelector("#idTexto");
    const btnCalcular= document.querySelector("#btnCalcular");
    const idResultado= document.querySelector("#idResultado");
    const btnGuardar=document.querySelector("#btnGuardar");
    const btnRecuperar=document.querySelector("#btnRecuperar")


    console.log(idTexto,idResultado,btnCalcular)

    idTexto.oninput = ()=>{

        estadoDAplicacion.idTexto = (idTexto.value)
        console.log(idTexto.value)
    }


 btnCalcular.onclick=()=>{
    let resultadoFinal= contarVocales(
        estadoDAplicacion.idTexto
    )
    console.log(`Resultado`, resultadoFinal)
    idResultado.textContent=`Resultado del conteo ${resultadoFinal}`
 };

 
btnGuardar.onclick=()=>{

    console.log(estadoDAplicacion)
    let datos = JSON.stringify(estadoDAplicacion)
    console.log(datos)
    localStorage.setItem("datos",datos)
};
 btnRecuperar.onclick=()=>{
         let datos=localStorage.getItem("datos")
         let datosR= JSON.parse(datos)
         console.log("Recuperado:",datosR);
        idResultado.textContent= `Conteo de vocales : ${datosR.idTexto} `;
   
   };
}