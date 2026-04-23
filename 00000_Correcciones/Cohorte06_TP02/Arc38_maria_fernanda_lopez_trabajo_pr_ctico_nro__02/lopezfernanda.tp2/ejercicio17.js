/* 
Ejericicio 17

Un Frigorífico posee una cinta transportadora y clasificadora de huevos para consumo humano. La cinta
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
    let pesoProducto= 0;
    let cantidadM= 0;
    let cantidadL= 0;
    let cantidadXl= 0; 
    let descartes= 0;

    while (continua === `S` || continua === `s`)
    {
        pesoProducto= Number(prompt(`Ingrese el peso del producto`));


        if((pesoProducto >= 53) && (pesoProducto < 63))
        {
            cantidadM = cantidadM + 1; 

        }
        if ((pesoProducto >= 63) && (pesoProducto <73))
        {
            cantidadL= cantidadL + 1; 
        }
        if (pesoProducto >= 73)
        {
            cantidadXl= cantidadXl + 1; 
        }
        if(pesoProducto < 53)
        {
            descartes= descartes +1;
        }

        console.log (pesoProducto);
        console.log (`Cantidad de M ${cantidadM}`);
        console.log (`Cantidad de L ${cantidadL}`);
        console.log (`Cantidad de XL ${cantidadXl}`);
        console.log (`Cantidad de Descartes ${descartes}`);


        continua= prompt (`Desea continuar?. (S/N)`);

    }
    
    let totalHuevos = cantidadM + cantidadL + cantidadXl + descartes;

    let proporcionM= 0; 
    let proporcionL= 0;
    let proporcionXl= 0;
    let proporcionDescartes= 0;

    proporcionM= (cantidadM / totalHuevos) *100 ;
    proporcionL = (cantidadL / totalHuevos)*100;
    proporcionXl= (cantidadXl / totalHuevos) *100;
    proporcionDescartes = (descartes / totalHuevos)*100;

    console.log ( `Proporcion M ${proporcionM}`);
    console.log ( `Proporcion L ${proporcionL}`);
    console.log ( `Proporcion Xl ${proporcionXl}`);
    console.log ( `Descartes ${proporcionDescartes}`);

}