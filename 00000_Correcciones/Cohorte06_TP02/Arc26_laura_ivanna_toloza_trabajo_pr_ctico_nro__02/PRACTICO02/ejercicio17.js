/* Ejercicio Nro. 17:
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
8) Determinar el % de Huevos M sobre el Total */

let cantidadTotalHuevos = 0;
let cantidadHuevosXL = 0;
let cantidadHuevosL = 0;
let cantidadHuevosM = 0;
let cantidadHuevosDescartados = 0;  
let continuar = true;

while (continuar) {
    let peso = Number(prompt("Ingrese el peso del huevo en gramos:"));
    if (peso >= 73) {
        cantidadHuevosXL++;
    }
    else if (peso >= 63 && peso < 73) {
        cantidadHuevosL++;
    }
    else if (peso >= 53 && peso < 63) {
        cantidadHuevosM++;
    }
    else {
        cantidadHuevosDescartados++;
    }
    cantidadTotalHuevos++;
    continuar = prompt("¿Desea ingresar otro huevo? (s/n)").toLowerCase() === "s";
    if (continuar === `n`) {
        continuar = false;
    };
}
console.log(`El total de Huevos es: ${cantidadTotalHuevos} la cantidad de huevos XL es: ${cantidadHuevosXL} la cantida de huevos L es: ${cantidadHuevosL} la cantidad de huevos M es: ${cantidadHuevosM} y la cantida de huevos descartados es: ${cantidadHuevosDescartados} `);
console.log(`el porcentaje de huevos XL es: ${(cantidadHuevosXL / cantidadTotalHuevos) * 100} el porcentaje de huevos L es: ${(cantidadHuevosL / cantidadTotalHuevos) * 100} el porcentaje de huevos M es: ${(cantidadHuevosM / cantidadTotalHuevos) * 100} el porcentaje de huevos descartados es: ${(cantidadHuevosDescartados / cantidadTotalHuevos) * 100} `);

