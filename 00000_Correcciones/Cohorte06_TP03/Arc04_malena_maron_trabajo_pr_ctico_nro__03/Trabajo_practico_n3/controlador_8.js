/*Realizar una aplicación web que permita calcular y determinar la dosis de insulina recomendada para un 
paciente diabético; Basada en tres datos importantes para el cálculo. 
1) 
Nivel de glucosa en sangre 2) 
3) 
Peso Corporal (en kilogramos) 
Tipo de diabetes 
a. 
b. 
Tipo 1 
Tipo 2 
Para Tipo 1: El cálculo es el 50% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre,  
este último término solamente si la glucosa es mayor a 180. 
Para Tipo 2: El cálculo es el 20% del Peso corporal del paciente + el 50% del nivel de glucosa en sangre, 
este último término solamente si la glucosa es mayor a  180. 
La función debe retornar la dosis de insulina recomendada y recibir como parámetros de entrada 
(argumentos) nivel de glucosa, peso corporal y tipo de diabetes.  
Salidas de la aplicación: la aplicación debe indicar la insulina recomendada para el paciente. */
import { calcular } from "./modulo_8.js";
    window.onload = ()=>{

        const estadoAplicacion = {
            pesoCorporal:0,
            nivelGlucosa:0,
            
           

        }

        const pesoCorporal = document.querySelector("#idPeso");
        const nivelGlucosa = document.querySelector("#idGlucosa");
        const tipo = document.querySelector("#idTipo");
        const btnCalcular = document.querySelector("#btnCalcular");
        const resultado = document.querySelector("#idResultado");
        const btnGuardar=document.querySelector("#btnGuardar");
        const btnRecuperar=document.querySelector("#btnRecuperar");

        console.log(pesoCorporal,nivelGlucosa,tipo,btnCalcular,resultado);

        pesoCorporal.oninput= ()=>{
           estadoAplicacion.pesoCorporal=Number(pesoCorporal.value)
           console.log(pesoCorporal.value)
        };
        nivelGlucosa.oninput=()=>{
            estadoAplicacion.nivelGlucosa=Number(nivelGlucosa.value)
            console.log(nivelGlucosa.value)
        };
        tipo.oninput=()=>{
            estadoAplicacion.tipo=Number(tipo.value)
            console.log(tipo.value)
        };
        
     
     
       
        btnCalcular.onclick = ()=>{
            let resultadoFinal = calcular(
                estadoAplicacion.pesoCorporal,
                estadoAplicacion.nivelGlucosa,
                estadoAplicacion.tipo,
            );
            console.log(`Resultado`,resultadoFinal);
            resultado.textContent= `Dosis recomendada ${resultadoFinal}`
        };

        
            
        btnGuardar.onclick=()=>{
        console.log(estadoAplicacion)
        let datos = JSON.stringify(estadoAplicacion)
        console.log(datos);
        localStorage.setItem("datos", datos)
       };
        btnRecuperar.onclick=()=>{
         let datos=localStorage.getItem("datos")
         let datosR= JSON.parse(datos)
         console.log("Recuperado:",datosR);
         resultado.textContent= `Dosis recomendada ${datosR.resultadoFinal} `;
   
       };
}
        
  




    
