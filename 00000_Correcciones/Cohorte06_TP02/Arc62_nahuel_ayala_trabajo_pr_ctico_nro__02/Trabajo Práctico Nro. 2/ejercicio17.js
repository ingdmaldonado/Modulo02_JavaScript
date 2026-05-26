/*
    Ejercicio Nro. 17:
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
    Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y cargar los datos de entrada por medio de prompt.
*/

{
    let cantidadXL = 0; // Contador
    let cantidadL = 0; // Contador
    let cantidadM = 0; // Contador
    let descartados = 0; // Contador

    let pesoProducto = 0; // Variable para preguntar el peso de los items.

    let continua = `S`;

    while(continua === `S` || continua === `s`)
    {
        pesoProducto = Number(prompt(`Ingrese el Peso del Huevo en g (Gramos)`));

        // Identificador para Clasificar los Huevos.
        if(pesoProducto >= 53 && pesoProducto < 63)
        {
            cantidadM = cantidadM + 1;
        }
        else{
            if(pesoProducto >= 63 && pesoProducto <73)
            {
                cantidadL = cantidadL + 1;
            }
            else{
                if(pesoProducto >= 73)
                {
                    cantidadXL = cantidadXL +1;
                }
                else{
                    descartados = descartados + 1;
                }
            }
        }

        console.log(`Peso del Producto: ${pesoProducto}g`);

        continua = prompt(`Desea pesar otro item? (S/N)`);
    }

    let totalDeHuevos = cantidadXL + cantidadL + cantidadM + descartados; // Contador para totabilizar los Huevos.

    console.log(`Cantidad M: ${cantidadM} | Cantidad L: ${cantidadL} | CantidadXL: ${cantidadXL} | Descartados: ${descartados}`);
    console.log(`Cantidad Total de Huevos Pesados y Registrados: ${totalDeHuevos}`);

    let porcentajeM = (cantidadM / totalDeHuevos)*100;
    let porcentajeL = (cantidadL / totalDeHuevos)*100;
    let porcentajeXL = (cantidadXL / totalDeHuevos)*100;
    let porcentajeDescartados = (descartados / totalDeHuevos)*100;

    console.log(`Porcentaje de M: ${porcentajeM} | Porcentaje de L: ${porcentajeL} | Porcentaje de XL: ${porcentajeXL} | Porcentaje Descartados: ${porcentajeDescartados}`);
}