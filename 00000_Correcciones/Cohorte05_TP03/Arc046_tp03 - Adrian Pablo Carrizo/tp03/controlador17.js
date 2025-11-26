
/* 
Una empresa de distribución de agua potable "Aguas de Catamarca ECSAPEM" utiliza un esquema de
facturación por bloques de consumo, donde el precio por metro cúbico aumenta a medida que el usuario consume
más. Este tipo de sistema se aplica con el objetivo de promover el uso responsable del recurso y penalizar el
consumo excesivo.
El cálculo del importe base se realiza a partir de los metros cúbicos leídos en el medidor del cliente. Para
ello, la empresa define tres bloques de facturación. El primer bloque corresponde a los primeros 50 metros
cúbicos, que se facturan a razón de 350 pesos por metro cúbico. El segundo bloque comprende los siguientes 20
metros cúbicos, es decir desde el metro cúbico número 51 hasta el 70, los cuales se facturan a un valor de 555,20
pesos por metro cúbico. Finalmente, todo consumo que supere los 70 metros cúbicos se considera dentro del
bloque excedente o de castigo, y se factura a razón de 1.552,20 pesos por metro cúbico.
Cabe aclarar que los clientes cuyo consumo mensual sea inferior a 50 metros cúbicos igualmente abonan
un mínimo de 50 metros cúbicos, de modo que ese sea el valor base de cálculo.
La tarea consiste en definir una arrow function llamada calcularImporteAgua que reciba como parámetro
el total de metros cúbicos leídos y devuelva el importe base a pagar por el cliente según el esquema tarifario antes
descripto.
Consumo (m3) Cálculo aplicado Importe final ($)
30 50 × 350,00 17.500,00
55 (50 × 350,00) + (5 × 555,20) 20.276,00
85 (50 × 350,00) + (20 × 555,20) + (15 × 1.552,20) 57.214,00

Nota: Debe devolver un número

*/

import {calcularImporteAgua} from "./datos17.js";
window.onload = () => {
    console.log(`inicio del programa`);
    
    const idMetrosCubicos = document.querySelector("#idMetrosCubicos");  
    const idBtnCalcularImporte = document.querySelector("#idBtnCalcularImporte");
    const idResultadoImporte = document.querySelector("#idResultadoImporte");    
    console.log(idMetrosCubicos, idBtnCalcularImporte, idResultadoImporte);
    idBtnCalcularImporte.onclick = () => {
        let metrosCubicos = Number(idMetrosCubicos.value);
        let importe = calcularImporteAgua(metrosCubicos);
        idResultadoImporte.textContent = `El Importe a Pagar es: ${importe}`;
        console.log(`importe a pagar: ${importe}`);
    };
}