import {fnNotaPromedio} from "./modelo21.js";

/*
Ejercicio Nro. 21: 

Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida 
como parámetro devuelva un texto que diga los siguientes mensajes. 
• Si la nota <= 4 debe devolver “Desaprobado” 
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado” 
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno” 
• Si la nota = 10 debe devolver “Excelente” 

Nota: Debe Devolver un Texto 

*/


window.onload =()=>{

    console.log(`funcionando`);

    const estadoAplicacion ={

        nota:0,

    };
    
    const idNotaPromedio = document.querySelector("#idNotaPromedio");
    const idTexto = document.querySelector("#idTexto");
    const idBtnNota = document.querySelector("#idBtnNota");

    idNotaPromedio.oninput = ()=>{
        estadoAplicacion.nota = Number(idNotaPromedio.value);
        
        console.log(estadoAplicacion);
    };

    idBtnNota.onclick = ()=>{
        
        let resultado = fnNotaPromedio(estadoAplicacion.nota);
        
        console.log(resultado);
        
        idTexto.textContent = `Nota: ${estadoAplicacion.nota} - Estado: ${resultado}`;
        
    };


};