/* Una Frigorífico posee una cinta transportadora y clasificadora de huevos para consumo humano. La cinta 
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

// Variables 

let continuar = "si";

let huevosXL = 0;
let huevosL = 0;
let huevosM = 0;
let descartados = 0;

let totalHuevos = 0;

// Ciclo

do {

    let ingresarGramos = parseInt(prompt("Ingrese el peso del huevo en gramos:")
    );
    totalHuevos++;

    if (ingresarGramos >= 53 && ingresarGramos < 63) {

        console.log("Huevo tipo M");
        huevosM++;

    } else if (
        ingresarGramos >= 63 && ingresarGramos < 73
    ) {

        console.log("Huevo tipo L");
        huevosL++;

    } else if (ingresarGramos >= 73) {

        console.log("Huevo tipo XL");
        huevosXL++;

    } else {

        console.log("Huevo descartado");
        descartados++;

    }

    continuar = prompt("¿Desea ingresar otro huevo? SI/NO").toLowerCase();

} while (continuar === "si");


// Resultados

console.log("TOTAL HUEVOS: " + totalHuevos);
console.log("Huevos XL: " + huevosXL);
console.log("Huevos L: " + huevosL);
console.log("Huevos M: " + huevosM);
console.log("Descartados: " + descartados);


// Porcentajes

let porcentajeXL =
    (huevosXL * 100) / totalHuevos;
let porcentajeL =
    (huevosL * 100) / totalHuevos;
let porcentajeM =
    (huevosM * 100) / totalHuevos;


console.log("% XL: " + porcentajeXL);

console.log("% L: " + porcentajeL);

console.log("% M: " + porcentajeM);