/*Realizar una arrow function que reciba como parámetro una nota promedio y que según la nota recibida 
como parámetro devuelva un texto que diga los siguientes mensajes. 
• Si la nota <= 4 debe devolver “Desaprobado” 
• Si la nota > 4 y nota <= 7 debe devolver “Aprobado” 
• Si la nota >7 y nota <=9 debe devolver “Muy Bueno” 
• Si la nota = 10 debe devolver “Excelente” 
Nota: Debe Devolver un Texto*/
import { promedio } from "./modulo_3.js";
 window.onload =()=>{

    const estadoDAplicacion={
        nota:"",
    }


    const nota=(document.querySelector("#idNota"));
    const btnCalcular=(document.querySelector("#btnCalcular"));
    const resultado=(document.querySelector("#idResultado"));
    const btnGuardar=(document.querySelector("#btnGuardar"));
    const btnRecuperar=(document.querySelector("#btnRecuperar"));


    console.log(nota,btnCalcular,resultado)

    nota.oninput = () => {
        estadoDAplicacion.nota= Number (nota.value)
    console.log(nota.value);
    };


    
    btnCalcular.onclick = () => {
        let resultadoFinal = promedio(
            estadoDAplicacion.nota
        );
        console.log("Resultado:", resultadoFinal);

        resultado.textContent = `Devolución de notas: ${resultadoFinal}`;
    };
            
            
        
         
    btnGuardar.onclick=()=>{
        console.log(estadoDAplicacion)
        let datos = JSON.stringify(estadoDAplicacion)
        console.log(datos);
        localStorage.setItem("datos", datos);
       };
    btnRecuperar.onclick=()=>{
        let datos=localStorage.getItem("datos")
        let datosR= JSON.parse(datos)
        console.log("Recuperado:",datosR);
        resultado.textContent= `Devolución de nota ${datosR.nota} `;
   
       };
    }
