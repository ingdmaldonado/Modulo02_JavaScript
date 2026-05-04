/*Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los 
distintos trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas 
Nota: Debe devolver un número*/

import { calcula } from "./modulo_2.js";
    


window.onload =() => {
 
    const estadoAplicacion={
        nota1 :0,
        nota2:0,
        nota3:0,
        

    }

    const nota1 = (document.querySelector("#idNota1"));
    const nota2 =(document.querySelector("#idNota2"));
    const nota3 = (document.querySelector("#idNota3"));
    const btnCalcular=(document.querySelector("#btnCalcular"));
    const resultado= (document.querySelector("#resultado"));
    const btnGuardar =(document.querySelector("#btnGuardar"));
    const btnRecuperar=(document.querySelector("#btnRecuperar"));


    console.log(nota1,nota2,nota3,btnCalcular,resultado);

    nota1.oninput=()=>{
        estadoAplicacion.nota1 = Number(nota1.value);
        console.log(nota1.value);
    };
    nota2.oninput =()=>{
        estadoAplicacion.nota2 = Number(nota2.value);
        console.log(nota2.value);
    };
    nota3.oninput=()=>{
        estadoAplicacion.nota3= Number(nota3.value);
        console.log(nota3.value);
    };

    btnCalcular.onclick=()=>{
        let resultadoFinal = calcula(
            estadoAplicacion.nota1,
            estadoAplicacion.nota2,
            estadoAplicacion.nota3,

        );
        
        resultado.textContent=`Promedio de notas = ${resultadoFinal.toFixed(2)}`
    };

    btnGuardar.onclick = ()=>{

        console.log(estadoAplicacion)
        let datos = JSON.stringify(estadoAplicacion)
        console.log(datos)
        localStorage.setItem("datos",datos)
   };

   btnRecuperar.onclick=()=>{
         let datos=localStorage.getItem("datos")
         let datosR= JSON.parse(datos)
         console.log("Recuperado:",datosR);
         resultado.textContent = `Promedio de notas ${datosR.resultadoFinal} `;
   
    };

}