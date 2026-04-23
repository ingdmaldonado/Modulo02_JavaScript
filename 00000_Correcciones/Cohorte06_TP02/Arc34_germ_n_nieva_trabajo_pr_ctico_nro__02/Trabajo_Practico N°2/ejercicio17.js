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
8) Determinar el % de Huevos M sobre el Total
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el
DOM y cargar los datos de entrada por medio de prompt.
*/

huevosxl=0;
huevosl=0;
huevosm=0;
huevosdescartados=0;
let continuar=true;

while (continuar) {
    let pesohuevos=Number(prompt("ingrese el peso del huevo en gramos"));
    if (pesohuevos >= 73) {
        console.log("El huevo es XL");
        huevosxl++;
    }
    else if (pesohuevos >= 63 && pesohuevos < 73) {
        console.log("El huevo es L");
        huevosl++;
    }
    else if (pesohuevos >= 53 && pesohuevos < 63) {
        console.log("El huevo es M");
        huevosm++;
    }
    else {
        console.log("El huevo es descartado");
        huevosdescartados++;
    }
    continuar=prompt("¿Desea ingresar otro huevo? (1: sí / 0: no)");
        if (continuar === "0") {
         continuar=false;
    }
}
let totalhuevos = huevosxl+huevosl+huevosm+huevosdescartados;
console.log("Cantidad total de huevos: " + totalhuevos);
console.log("Cantidad total de huevos XL: " + huevosxl);
console.log("Cantidad total de huevos L: " + huevosl);
console.log("Cantidad total de huevos M: " + huevosm);
console.log("Cantidad total de huevos descartados: " + huevosdescartados);
let porcentajehuevosxl = (huevosxl / totalhuevos) * 100;
let porcentajehuevosl = (huevosl / totalhuevos) * 100;
let porcentajehuevosm = (huevosm / totalhuevos) * 100;
let porcentajehuevosdescartados = (huevosdescartados / totalhuevos) * 100;
console.log(`Porcentaje de huevos XL: ${porcentajehuevosxl.toFixed(2)}%`);
console.log(`Porcentaje de huevos L: ${porcentajehuevosl.toFixed(2)}%`);
console.log(`Porcentaje de huevos M: ${porcentajehuevosm.toFixed(2)}%`);
console.log(`Porcentaje de huevos descartados: ${porcentajehuevosdescartados.toFixed(2)}%`);
