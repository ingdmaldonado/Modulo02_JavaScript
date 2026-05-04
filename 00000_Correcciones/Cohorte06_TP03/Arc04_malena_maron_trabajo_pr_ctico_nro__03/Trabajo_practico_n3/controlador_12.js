/*Definir una arrow function que reciba como parámetro una cadena de texto y determine si la misma 
contiene al menos tres espacios en blanco. 
La función debe recorrer la cadena carácter por carácter utilizando un ciclo for. 
Durante el recorrido, deberá contar la cantidad de espacios que se encuentren. 
En el momento en que se detecte el tercer espacio en blanco, la función debe interrumpir inmediatamente el 
ciclo mediante la instrucción break y devolver el valor lógico true. 
Si al finalizar el recorrido completo no se encontraron tres espacios, la función debe devolver false. 
Nota: Debe devolver un boolean (true ó false). */
import { espacio } from "./modulo_12.js";

window.onload = () =>{
    const estadoDAplicacion={
        texto :"",
    }

    const texto = document.querySelector("#idTexto");
    const idResultado=document.querySelector("#idResultado");
    const btnCalcular= document.querySelector("#btnCalcular");
    const btnGuardar=document.querySelector("#btnGuardar");
    const btnRecuperar=document.querySelector("#btnRecuperar");

    console.log(texto)

    texto.oninput=()=>{
        estadoDAplicacion.texto=( texto.value)
        console.log(texto.value)
    }

    btnCalcular.onclick=()=>{
        let resultadoFinal = espacio (
            estadoDAplicacion.texto
        )
        console.log(`Resultado`,resultadoFinal)
        idResultado.textContent=`El conteo de espacio es : ${resultadoFinal}`

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
         idResultado.textContent = ` El conteo de espaio es : ${datosR.texto} `;
   
    };


}