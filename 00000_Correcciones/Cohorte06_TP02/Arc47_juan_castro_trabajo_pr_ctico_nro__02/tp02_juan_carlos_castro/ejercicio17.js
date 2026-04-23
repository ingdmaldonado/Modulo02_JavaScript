/*

Ejercicio Nro. 17: 
 
Una Frigorífico posee una cinta transportadora y clasificadora de huevos para consumo humano. La cinta 
no tan solo los transporta sino también los clasifica según su peso. es decir, al final de la cinta existe una balanza 
electrónica de alta precisión que evalúa su peso y los clasifica. 
 
a) XL, súper grandes: peso ≥ 73 gramos.  
b) L, grandes: peso ≥ 63 gramos y < 73 gramos.  
c) M, medianos: peso ≥ 53 gramos y < 63 gramos. 
 
Nota: considere como descartados aquellos que no estén dentro del rango de valores aceptables. 
 
Determinar lo siguiente: 
 
1) Cantidad total de Huevos (Todas las categorías) 
2) Cantidad total de Huevos XL 
3) Cantidad total de Huevos L 
4) Cantidad total de Huevos M 
5) Cantidad total de Huevos descartados 
6) Determinar el % de Huevos XL sobre el Total 
7) Determinar el % de Huevos L sobre el Total 
8) Determinar el % de Huevos M sobre el Total 
 
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el 
DOM y cargar los datos de entrada por medio de prompt.

*/

{

let tipoHuevo = 0;

let totalHuevos = 0;
let cantidadXL = 0;
let cantidadL = 0;
let cantidadM = 0;
let huevoDescartado = 0;
let totalPorcentajeXL = 0;
let totalPorcentajeL = 0;
let totalPorcentajeM = 0;

let continuar = `S`;

while (continuar === `S` || continuar === `s`) {
    
    tipoHuevo = Number(prompt(`Ingrese el peso del huevo:`));

    if(tipoHuevo >= 73){
        cantidadXL = cantidadXL + 1;
    }else if(tipoHuevo < 73 && tipoHuevo >= 63){
        cantidadL = cantidadL + 1;
    } else if(tipoHuevo < 63 && tipoHuevo >= 53){
        cantidadM = cantidadM + 1;
    } else{
        huevoDescartado = huevoDescartado + 1;
    }

    continuar = prompt(`Seguir pesando? S/N`);

}


totalHuevos = cantidadXL + cantidadL + cantidadM;
totalPorcentajeXL = (cantidadXL * 100) / totalHuevos;
totalPorcentajeL = (cantidadL * 100) / totalHuevos;
totalPorcentajeM = (cantidadM * 100) / totalHuevos;

console.log(`La cantidad total de huevos es: ${totalHuevos}`);
console.log(`La cantidad de huevos descartados es: ${huevoDescartado}`);
console.log(`La cantidad de huevos XL es: ${cantidadXL}`);
console.log(`La cantidad de huevos L es: ${cantidadL}`);
console.log(`La cantidad de huevos M es: ${cantidadM}`);
console.log(`El porcentaje de huevos XL es: ${totalPorcentajeXL}`);
console.log(`El porcentaje de huevos L es: ${totalPorcentajeL}`);
console.log(`El porcentaje de huevos M es: ${totalPorcentajeM}`);

}