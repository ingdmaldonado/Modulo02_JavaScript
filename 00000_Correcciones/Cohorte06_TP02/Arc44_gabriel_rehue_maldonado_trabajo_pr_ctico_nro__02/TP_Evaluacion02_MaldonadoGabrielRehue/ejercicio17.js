/* TP2 - EJERCICIO NRO. 17

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

*/

{
    /* ANTES */
    let cantidadM   = 0;
    let cantidadL   = 0;
    let cantidadXL  = 0;
    let descartes   = 0;

    let continua = `S`;

    /* DURANTE */
    while(continua === `S` || continua === `s`)
    {
        let pesoProducto = 0;
        pesoProducto = Number(prompt(`Ing. el Peso del Producto (en gramos)`));

        if((pesoProducto >= 53) && (pesoProducto < 63))
        {
            cantidadM++;  // es M
        }
        else
        {
            if((pesoProducto >= 63) && (pesoProducto < 73))
            {
                cantidadL++;  // es L
            }
            else
            {
                if(pesoProducto >= 73)
                {
                    cantidadXL++;  // es XL
                }
                else
                {
                    descartes++;  // peso < 53 => descartado
                }
            }
        }

        console.log(`Peso registrado: ${pesoProducto}`);
        console.log(`Cantidad M: ${cantidadM}`);
        console.log(`Cantidad L: ${cantidadL}`);
        console.log(`Cantidad XL: ${cantidadXL}`);
        console.log(`Cantidad Descartes: ${descartes}`);

        continua = prompt(`Desea Continuar? (S/N)`);
    }

    /* FINAL */

    let totalHuevos = cantidadM + cantidadL + cantidadXL + descartes;

    let proporcionM       = (cantidadM  / totalHuevos) * 100;
    let proporcionL       = (cantidadL  / totalHuevos) * 100;
    let proporcionXL      = (cantidadXL / totalHuevos) * 100;
    let proporcionDescarte= (descartes  / totalHuevos) * 100;

    console.log(`--- RESULTADOS FINALES ---`);
    console.log(`Total Huevos procesados: ${totalHuevos}`);
    console.log(`Cantidad XL: ${cantidadXL}`);
    console.log(`Cantidad L:  ${cantidadL}`);
    console.log(`Cantidad M:  ${cantidadM}`);
    console.log(`Descartados: ${descartes}`);
    console.log(`% XL sobre el total:        ${proporcionXL}`);
    console.log(`% L  sobre el total:        ${proporcionL}`);
    console.log(`% M  sobre el total:        ${proporcionM}`);
    console.log(`% Descartados sobre el total: ${proporcionDescarte}`);
}
