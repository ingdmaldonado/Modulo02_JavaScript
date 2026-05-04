/*Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM" utiliza un esquema de 
facturación por bloques de consumo, donde el precio por metro cúbico aumenta a medida que el usuario consume 
más. Este tipo de sistema se aplica con el objetivo de promover el uso responsable del recurso y penalizar el 
consumo excesivo. 
El cálculo del importe base se realiza a partir de los metros cúbicos leídos en el medidor del cliente. Para 
ello, la empresa define tres bloques de facturación. El primer bloque corresponde a los primeros 50 metros 
cúbicos, que se facturan a razón de 350 pesos por metro cúbico. El segundo bloque comprende los siguientes 20metros cúbicos, es decir desde el metro cúbico número 51 hasta el 70, los cuales se facturan a un valor de 555,20 
pesos por metro cúbico. Finalmente, todo consumo que supere los 70 metros cúbicos se considera dentro del 
bloque excedente o de castigo, y se factura a razón de 1.552,20 pesos por metro cúbico. 
Cabe aclarar que los clientes cuyo consumo mensual sea inferior a 50 metros cúbicos igualmente abonan 
un mínimo de 50 metros cúbicos, de modo que ese sea el valor base de cálculo. 
La tarea consiste en definir una arrow function llamada calcularImporteAgua que reciba como parámetro 
el total de metros cúbicos leídos y devuelva el importe base a pagar por el cliente según el esquema tarifario antes 
descripto. 
Consumo (m³) Cálculo aplicado 
30 
55 
85 
50 × 350,00 
(50 × 350,00) + (5 × 555,20) 
Importe final ($) 
17.500,00 
20.276,00 
(50 × 350,00) + (20 × 555,20) + (15 × 1.552,20) 57.214,00 
Nota: Debe devolver un número 


*/
import { calcularImporteAgua } from "./modulo_5.js";

window.onload=()=>{
    

    const estadoDAplicacion={
        metroCubico:0,
     
        
    }



const metroCubico=(document.querySelector("#idMetroCubico"));
const btnCalcular=(document.querySelector("#btnCalcular"));
const resultado=(document.querySelector("#idResultado"));
const btnGuardar=(document.querySelector("#btnGuardar"));
const btnRecuperar=(document.querySelector("#btnRecuperar"));



console.log(metroCubico,btnCalcular,resultado);






metroCubico.oninput=()=>{
    estadoDAplicacion.metroCubico=Number(metroCubico.value)
    console.log(metroCubico.value)
}


btnCalcular.onclick=()=>{
    
    let resultadoFinal= calcularImporteAgua(
        estadoDAplicacion.metroCubico,
    )
    console.log(`Resultado`,resultadoFinal)
    resultado.textContent = `Importe Final ${resultadoFinal}`;
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
        idResultado.textContent= `Importe final ${datosR.metroCubico} `;
   
       };
}










