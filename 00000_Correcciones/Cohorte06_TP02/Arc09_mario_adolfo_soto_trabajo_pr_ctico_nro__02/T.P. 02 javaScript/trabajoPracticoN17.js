/*
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
DOM y cargar los datos de entrada por medio de promp
*/
{ let continua = `s`;
  let pesoProducto = 0;
  let cantidadHuevosM =0;
  let cantidadHuevosL =0;
  let cantidadHuevosXL=0;
  let descartes = 0;
  let total=0;


    while(continua ===`s` || continua === `S`)
    {
        pesoProducto = Number(prompt(`Ingrese el peso del producto`));
        if ((pesoProducto >=53) && (pesoProducto<63))
        {
            cantidadHuevosM ++;
        }
        else if ((pesoProducto >=63) && (pesoProducto<73))
        {
            cantidadHuevosL  ++;
        }
        else if (pesoProducto >=73)
        {
            cantidadHuevosXL ++;
        }
        else if(pesoProducto <53)
        {
            descartes ++;
        }



        continua = prompt(`quiere continuar cargando productos ? (S/N)`)
    }

    console.log(`cantidad total ${cantidadHuevosM} huevos tamaño M`);
    console.log(`cantidad total ${cantidadHuevosL} huevos tamaño L`);
    console.log(`cantidad total ${cantidadHuevosXL} huevos tamaño XL`);
    console.log(`cantidad total ${descartes} descartes`);

    total = cantidadHuevosM + cantidadHuevosL + cantidadHuevosXL + descartes;
    
    if (total > 0) {
    let porcentajeXL = (cantidadHuevosXL / total) * 100;
    let porcentajeL = (cantidadHuevosL / total) * 100;
    let porcentajeM = (cantidadHuevosM / total) * 100;
    }

    console.log(`% XL: ${porcentajeXL}`);
    console.log(`% L: ${porcentajeL}`);
    console.log(`% M: ${porcentajeM}`);






}