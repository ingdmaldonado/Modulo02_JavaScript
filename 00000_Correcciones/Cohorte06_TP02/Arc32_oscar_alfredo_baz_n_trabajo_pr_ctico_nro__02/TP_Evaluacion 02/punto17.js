/*Ejercicio Nro. 17:
Una Frigorífico posee una cinta transportadora y clasificadora de huevos para consumo humano. La cinta no tan solo los transporta sino también los clasifica según su peso. es decir, al final de la cinta existe una balanza electrónica de alta precisión que evalúa su peso y los clasifica.

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

Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt. */

{

    let pesoHuevo = 0;

    let contadorXL = 0;
    let contadorL = 0;
    let contadorM = 0;
    let contadorDescarte = 0;
    let cargar=`S`;

    

    porcentajeXL=0;
    porcentajeL=0;
    porcentajeM=0;
    porcentajeDescarte=0;


    cargar=prompt(`Desea ingresar huevos: S/N`);

    while(cargar===`S` || cargar===`s`)
    {


    

    pesoHuevo = Number(prompt(`INGRESE EL PESO DEL HUEVO: 
        
        a) XL, súper grandes: peso ≥ 73 gramos.
        b) L, grandes: peso ≥ 63 gramos y < 73 gramos.
        c) M, medianos: peso ≥ 53 gramos y < 63 gramos.`));


    

    if (pesoHuevo >= 73) {
        console.log(`El huevo ingresado de peso ${pesoHuevo} es XL`);
        contadorXL = contadorXL + 1;
    }

    else if (pesoHuevo >= 63 && pesoHuevo < 73) {
        console.log(`El huevo ingresado de peso ${pesoHuevo} es L`);
        contadorL = contadorL + 1;

    }

    else if (pesoHuevo >= 53 && pesoHuevo < 63) {
        console.log(`El huevo ingresado de peso ${pesoHuevo} es M`);
        contadorM = contadorM + 1;
    }

    else {
        console.log(`El huevo ingresado de peso ${pesoHuevo} fue DESCARTADO`);
        contadorDescarte = contadorDescarte + 1;
    }

    cargar=prompt(`Desea ingresar huevos: S/N`);
}


    console.log(`Conteo de huevos descartados: ${contadorDescarte}`);
    console.log(`Conteo de huevos XL: ${contadorXL}`);
    console.log(`Conteo de huevos L: ${contadorL}`);
    console.log(`Conteo de huevos M: ${contadorM}`);
    
    let totalHuevos=contadorDescarte + contadorXL + contadorL + contadorM;

    porcentajeDescarte=(contadorDescarte*100)/totalHuevos;
    porcentajeXL=(contadorXL*100)/totalHuevos;
    porcentajeL=(contadorL*100)/totalHuevos;
    porcentajeM=(contadorM*100)/totalHuevos;


    console.log(`La cantidad total de huevos contabilizados es de: ${totalHuevos}`);
    console.log(`El porcentaje de huevos DESCARTADOS es: ${porcentajeDescarte}`);
    console.log(`El porcentaje de huevos XL  es: ${porcentajeXL}`);
    console.log(`El porcentaje de huevos L es: ${porcentajeL}`);
    console.log(`El porcentaje de huevos M es: ${porcentajeM}`);





}