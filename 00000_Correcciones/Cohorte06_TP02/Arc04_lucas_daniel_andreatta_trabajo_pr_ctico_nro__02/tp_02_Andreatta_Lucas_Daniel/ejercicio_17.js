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

    let continua = `S`;

    let pesoProducto = 0;

    let cantidadM = 0;
    let cantidadL = 0;
    let cantidadXL = 0;
    let descartes = 0;


    while (continua === `S` || continua === `s`) 
    {
        pesoProducto = Number(prompt(`Ing. el peso del producto`));

        /*
        a) XL, súper grandes: peso ≥ 73 gramos.
        b) L, grandes: peso ≥ 63 gramos y < 73 gramos.
        c) M, medianos: peso ≥ 53 gramos y < 63 gramos.
        */

        // cantidad de medianos
        cantidadM = pesoProducto >= 53 && pesoProducto < 63 ? cantidadM+1 : cantidadM;
        // cantidad de grandes
        cantidadL = pesoProducto >= 63 && pesoProducto < 73 ? cantidadL+1 : cantidadL;
        // cantidad de super grandes
        cantidadXL = pesoProducto >= 73 ? cantidadXL+1 : cantidadXL;
        // cantidad de descartados
        descartes = pesoProducto < 53 ? descartes+1 : descartes;

        /* Realizado con If 

        if ((pesoProducto >= 53) && (pesoProducto<63)) {
            
            cantidadM++;
        }

        if ((pesoProducto >=63) && (pesoProducto < 73)) {
            
            cantidadL++;// cantidad de grandes
        }

        if (pesoProducto >= 73) {
            
            cantidadXL++; // cantidad de super grandes
        }

        if (pesoProducto < 53) {
            
            descartes++; // cantidad de descartados
        }*/

        /*
        console.log(`peso producto: ${pesoProducto}`);
        console.log(`cantidad M: ${cantidadM}`);
        console.log(`cantidad L: ${cantidadL}`);
        console.log(`cantidad XL: ${cantidadXL}`);
        console.log(`cantidad descartes: ${descartes}`);
        */
        continua = prompt(`Desea continuar? (S/N)`);

    }

    let totalHuevos = cantidadM + cantidadL + cantidadXL + descartes;

    let proporcionM = 0;
    let proporcionL = 0;
    let proporcionXL = 0;
    let proporcionDescarte = 0;

    // calculo de las proporciones
    proporcionM = (cantidadM / totalHuevos)* 100;
    proporcionL = (cantidadL / totalHuevos)* 100;
    proporcionXL = (cantidadXL / totalHuevos)* 100;
    proporcionDescarte = (descartes / totalHuevos)* 100;

    // Muestro datos de cantidades y proporciones de los huevos
    console.log(`cantidad M: ${cantidadM}`);
    console.log(`cantidad L: ${cantidadL}`);
    console.log(`cantidad XL: ${cantidadXL}`);
    console.log(`cantidad descartes: ${descartes}`);
    console.log(`Cantidad Total Huevos: ${totalHuevos}`);
    console.log(`Proporción M: ${proporcionM}`);
    console.log(`Proporción L: ${proporcionL}`);
    console.log(`Proporción XL: ${proporcionXL}`);
    console.log(`Proporción descarte: ${proporcionDescarte}`);

}