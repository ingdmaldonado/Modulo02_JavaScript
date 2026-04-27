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
    
    let totalHuevosXl = 0;
    let totalHuevosL = 0;
    let totalHuevosM = 0;
    let totalHuevosDescartados = 0;
    let totalHuevos = 0;
    let continuar ="S"

    while(continuar ==="S" || continuar==="s")
    {
        let entrada = prompt(`Ingrese el peso del huevo`);
        let peso = parseFloat(entrada);
        
        while((isNaN(peso) || peso < 0))
        {
            console.log(`Error el peso ${entrada} no es valido`);
            entrada = prompt(`Entrada incorrecta. Por favor ingrese un peso valido`);
            
            peso = parseFloat(entrada);
        }
       
        console.log(`Peso registrado: ${peso} gramos`);           
            
        if(peso>=73)
        {
            totalHuevosXl = totalHuevosXl +1;
        }
        else
        {
            if((peso>=63) && (peso< 73))
            {
                totalHuevosL++;
            }
            else
            {
                if( (peso>=53) && (peso<63))
                {
                    totalHuevosM = totalHuevosM+1;
                }
                else 
                {
                    totalHuevosDescartados ++;
                }
            }
        }
        totalHuevos = totalHuevosXl+ totalHuevosL + totalHuevosM + totalHuevosDescartados;

        continuar = prompt(`Desea pasar otro huevo por la cinta? (S/N)`);

    }
    if(totalHuevos > 0)
    {
        let proporcHuevosXL = (totalHuevosXl / totalHuevos) * 100;
        let proporcHuevosL = (totalHuevosL / totalHuevos)*100;
        let proporcHuevosM = (totalHuevosM / totalHuevos)*100;
        let proporcHuevosdesc = (totalHuevosDescartados / totalHuevos)*100;  
        
        console.log(`CLASIFICACION DE HUEVOS`);
        console.log(`Cantidad de huevos XL: ${totalHuevosXl}`);
        console.log(`Cantidad de huevos L: ${totalHuevosL}`);
        console.log(`Cantidad de huevos M: ${totalHuevosM}`);
        console.log(`Cantidad de huevos descartados: ${totalHuevosDescartados}`);
        console.log(`El total de huevos registrados es: ${totalHuevos}`);
        console.log(`LOS PORCENTAJES TOTAL DE HUEVOS POR CATEGORIA`);
        console.log(`% de huevos XL: ${proporcHuevosXL.toFixed(2)}`);
        console.log(`% de huevos L: ${proporcHuevosL.toFixed(2)}`);
        console.log(`% de huevos M: ${proporcHuevosM.toFixed(2)}`);
        console.log(`% de huevos descartados: ${proporcHuevosdesc.toFixed(2)}`);
    }
    else
    {
        console.log (`No se registraron datos`);
    }

}