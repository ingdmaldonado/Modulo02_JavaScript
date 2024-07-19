
/* EJERCICIO NRO. 09

    Una Frigorífico posee una cinta transportadora y clasificadora de 
    huevos para consumo humano. La cinta no tan solo los transporta sino también 
    los clasifica según su peso. es decir, al final de la cinta existe una balanza 
    electrónica de alta precisión que evalúa su peso y los clasifica.

    a) XL, super grandes: peso ≥ 73 gramos. 
    b) L, grandes: peso ≥ 63 gramos y < 73 gramos. 
    c) M, medianos: peso ≥ 53 gramos y < 63 gramos.

     
    Determinar lo siguiente:

    1)	Cantidad total de Huevos (Todas las categorías)
    2)	Cantidad total de Huevos XL
    3)	Cantidad total de Huevos L
    4)	Cantidad total de Huevos M
    5)	Cantidad total de Huevos descartados
    6)	Determinar el % de Huevos XL sobre el Total
    7)	Determinar el % de Huevos L sobre el Total
    8)	Determinar el % de Huevos M sobre el Total

*/


{

    let cantidadXL = 0;
    let cantidadL = 0;
    let cantidadM = 0;
    let cantidadDescarte = 0;
    let cantidadTotal = 0;

    let porcentajeXL = 0;
    let porcentajeL = 0;
    let porcentajeM = 0;
    let porcentajeDescarte = 0;
    

    for(let i = 1;i <=5;i++)
    {
        /* Dentro del Ciclo debería ir registrando el peso de cada huevo */

        /* declaro e inicializo la variable donde
        leeré el peso de cada huevo */

        let pesoDeHuevo = 0; 

        /* leo desde el teclado el Peso de cada
        huevo y lo convierto a número */
        pesoDeHuevo =  Number(prompt(`Ingrese el peso del huevo ${i}`)); 

        /* muestro el peso del huevo registrado*/
        console.log(`Huevo Registrado Nro. ${i} con peso ${pesoDeHuevo}`);


        /*--------------------------------------- 
        comenzamos a analizar en que categoría 
        cae en función de su peso 
        ---------------------------------------*/

        /* Si el peso del huevo es mayor o igual que 73 gramos es XL */
        if(pesoDeHuevo >= 73)
        {
            //cuento la cantidad de XL en su contador //
            cantidadXL = cantidadXL + 1;
            console.log(`Cantidad de XL := ${cantidadXL}`);
        }
        else
        {
            /* si el peso es mayor o igual a 63 gramos y menor
            o a 73  es L*/
            if((pesoDeHuevo >= 63) && (pesoDeHuevo < 73))
                {
                    cantidadL = cantidadL + 1;
                    console.log(`cantidad de L := ${cantidadL}`)
                }
                else
                {
                    /* Si el peso es mayor a 53 y menor a 63 es M */
                    if((pesoDeHuevo >= 53) && (pesoDeHuevo < 63))
                    {
                        cantidadM = cantidadM + 1;
                        console.log(`cantidad de M:= ${cantidadM}`);
                    }
                    else
                    { // los que no ingresan a ninguna categoría son descartes //
                        cantidadDescarte = cantidadDescarte + 1;
                        console.log(`cantidad de descartes: ${cantidadDescarte}`);
                    }
                }
        }
    }

    /* obtengo la cantidad total de huevos
    sumando las cantidades parciales
    de cada categoria */

    cantidadTotal = cantidadXL + cantidadL + cantidadM + cantidadDescarte;

    /* muestro las cantidades de cada huevo */
    console.log(`total de huevos XL: ${cantidadXL}`);
    console.log(`total de huevos L:  ${cantidadL}`);
    console.log(`total de huevos M:  ${cantidadM}`);
    console.log(`cantidad de descartes: ${cantidadDescarte}`);

    /* obtengo el porcentaje de huevos XL sobre el total */
    if(cantidadXL > 0)
        {
            porcentajeXL = (cantidadXL/cantidadTotal)*100;
        }
    
    /* obtengo el porcentaje de huevos L sobre el total */
    if(cantidadL > 0)
        {
            porcentajeL = (cantidadL/cantidadTotal)*100;
        }

     /* obtengo el porcentaje de huevos M sobre el total */
    if(cantidadM > 0)
        {
            porcentajeM = (cantidadM/cantidadTotal)*100;
        }
    
    /* obtengo el porcentaje de huevos M sobre el total */
    if(cantidadDescarte > 0)
        {
            porcentajeDescarte = (cantidadDescarte/cantidadTotal)*100;
        }

    /* visualizo los porcentajes */
    console.log(`-------------------------------------`);
    console.log(`el porcentaje de XL ${porcentajeXL} %`);
    console.log(`el porcentaje de L ${porcentajeL} %`);
    console.log(`el porcentaje de M ${porcentajeM} %`);
    console.log(`el porcentaje de Descartes ${porcentajeDescarte} %`);


}