import {fnCalcularPromedio} from "./modelo20.js";

/*

Ejercicio Nro. 20: 

Realizar una arrow function que reciba como parámetro las 3 notas que obtuvo un alumno en los 
distintos trabajos prácticos de una materia y que a partir de esas notas obtenga el promedio de las mismas 

Nota: Debe devolver un número 

*/


window.onload=()=>{

    console.log(`funcionando`);

    const estadoAplicacion = {

        nota1: 0,
        nota2: 0,
        nota3: 0,

    };

    const idNota1 = document.querySelector("#idNota1");
    const idNota2 = document.querySelector("#idNota2");
    const idNota3 = document.querySelector("#idNota3");
    const idCalcular = document.querySelector("#idCalcular");
    const idPromedio = document.querySelector("#idPromedio");

    idNota1.oninput = ()=>{
        estadoAplicacion.nota1 = Number(idNota1.value);
        
        console.log(estadoAplicacion);
    };

    idNota2.oninput = ()=>{
        estadoAplicacion.nota2 = Number(idNota2.value);
        
        console.log(estadoAplicacion);
    };

    idNota3.oninput = ()=>{
        estadoAplicacion.nota3 = Number(idNota3.value);
        
        console.log(estadoAplicacion);
    };

    idCalcular.onclick = ()=>{
    
        let resultado = fnCalcularPromedio(estadoAplicacion.nota1, estadoAplicacion.nota2, estadoAplicacion.nota3);
    
        console.log(resultado.toFixed(2));
    
        idPromedio.textContent = `Nota1: ${estadoAplicacion.nota1} - Nota2: ${estadoAplicacion.nota2} - Nota3: ${estadoAplicacion.nota3} - Promedio: ${resultado.toFixed(2)}`;
    
    };






};