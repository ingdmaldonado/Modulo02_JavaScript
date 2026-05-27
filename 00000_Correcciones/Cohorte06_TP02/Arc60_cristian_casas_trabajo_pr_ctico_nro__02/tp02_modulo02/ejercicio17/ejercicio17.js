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

// Variables para totales y categorias.
let totalHuevos=0;
let totalHuevosXL=0;
let totalHuevosL=0;
let totalHuevosM=0;
let totalHuevosDescartados=0;

// Proceso y clasificacion.
let peso=0;
let respuesta;

do {
    peso=Number(prompt(`Peso del huevo en gramos:`));
    
    if (peso > 0) {
        totalHuevos++;
        if (peso >= 73) {
            totalHuevosXL++;
        } 
        else if (peso >= 63) {
            totalHuevosL++;
        } 
        else if (peso >= 53) {
            totalHuevosM++;
        } 
        else {
            totalHuevosDescartados++;
        }
        
        // Pregunto si quiere agregar más huevos
        respuesta = prompt(`¿Deseas agregar otro huevo? (s)=Sí o (n)=No`).toLowerCase();
    } else {
        alert('Por favor ingresa un peso válido mayor a 0');
        respuesta = 's';
    }
} while (respuesta === 's');

// Aqui los resultados.
console.log(`==== CANTIDADES ====`);
console.log(`Cantidad total de Huevos: ${totalHuevos}`);
console.log(`Cantidad total de Huevos XL: ${totalHuevosXL}`);
console.log(`Cantidad total de Huevos L: ${totalHuevosL}`);
console.log(`Cantidad total de Huevos M: ${totalHuevosM}`);
console.log(`Cantidad total de Huevos descartados: ${totalHuevosDescartados}`);
console.log(`==== PORCENTAJES ====`);
console.log(`% de Huevos XL sobre el Total: ${(totalHuevosXL/totalHuevos*100).toFixed(2)}%`);
console.log(`% de Huevos L sobre el Total: ${(totalHuevosL/totalHuevos*100).toFixed(2)}%`);
console.log(`% de Huevos M sobre el Total: ${(totalHuevosM/totalHuevos*100).toFixed(2)}%`);
