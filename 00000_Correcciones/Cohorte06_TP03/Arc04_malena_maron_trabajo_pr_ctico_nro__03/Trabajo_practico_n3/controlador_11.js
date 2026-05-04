/*Definir una arrow function que reciba una palabra y determine si contiene al menos dos letras “s” 
(mayúsculas o minúsculas). 
La función debe recorrer la palabra con un ciclo for, utilizando un contador o una bandera booleana.
Debe devolver true si se cumplen las dos apariciones y false en caso contrario. 
No puede utilizar métodos como includes() o indexOf(). */

import { letra } from "./modulo_11.js";

window.onload = ()=>{
    const estadoDAplicacion ={
        palabra:"s,S"
    }

    const palabra= document.querySelector("#idPalabra");
    const idResultado=document.querySelector("#idResultado");
    const btnCalcular= document.querySelector("#btnCalcular");
    const btnGuardar=document.querySelector("#btnGuardar");
    const btnRecuperar=document.querySelector("#btnRecuperar");

    console.log(palabra)

    palabra.oninput=()=>{
        estadoDAplicacion.palabra =(palabra.value)
        console.log(palabra.value)

    }

    btnCalcular.onclick=()=>{
        let resultadoFinal=letra(
            estadoDAplicacion.palabra
        )

        console.log(`Resultado `, resultadoFinal)
        idResultado.textContent=`Las letras contadas son: ${resultadoFinal}`
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
         idResultado.textContent = `Letras contadas: ${datosR.palabra} `;
   
    };
}