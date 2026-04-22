/**
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

 */
{
    pesoHuevo = 0;
    cantidadXL = 0;
    cantidadL = 0;
    cantidadM = 0;
    cantidadHuevos = 0;
    cantidadDescarte = 0;
    continuaAtendiendo = `S`;

    while(continuaAtendiendo === `S` || continuaAtendiendo === `s`)

        {
            Number(prompt(`ingrese peso del huevo`));
            if(pesoHuevo >= 53 && pesoHuevo < 63)
            {
               
                cantidadHuevos += 1;
                console.log(`huevo M`);
            }
            else if(pesoHuevo >= 63 && pesoHuevo < 73)
            {
                
                cantidadL += 1;
                console.log(`huevo L`);
            }
            else if(pesoHuevo >= 73)
            {
                
                cantidadXL += 1;
                console.log(`huevo XL`);
            }
            else
            {
              
                cantidadDescarte +=1;
                console.log(`huevo descarte`);
            }
            continuaAtendiendo = prompt(`continua atendiendo: (S/N)`);
        }
        cantidadHuevos = cantidadDescarte + cantidadM + cantidadL + cantidadXL;

        let porcentajeXl = 0;
        let porcentajeL = 0;
        let porcenajeM = 0;
        let porcentajeDescarte = 0;

        porcentajeXl = (cantidadHuevos * cantidadXL)/100;
        porcentajeL = (cantidadHuevos * cantidadL)/100;
        porcentajeM = (cantidadHuevos * cantidadM)/100;
        porcentajeDescarte = (cantidadHuevos * cantidadDescarte)/100;

        console.log(`porcentaje huevos XL: ${cantidadXL}`);
        console.log(`porcentaje huevos L: ${porcentajeL}`);
        console.log(`porcentaje huevos M: ${porcentajeM}`);
        console.log(`porcentaje huevos descarte: ${porcentajeDescarte}`);
}