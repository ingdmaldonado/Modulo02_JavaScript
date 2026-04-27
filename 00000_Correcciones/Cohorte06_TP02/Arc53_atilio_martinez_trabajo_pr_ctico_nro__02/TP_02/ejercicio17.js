/* Ejercicio Nro. 17: 
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
    let totalHuevos = 0;
    let huevosXL = 0;
    let huevosL = 0;
    let huevosM = 0;
    let descartados = 0;

    let continua = "S";

    while (continua === "S" || continua === "s") 
    {
        let entrada = prompt("Ingrese el peso del huevo en gramos:");
        let peso = Number(entrada);
        if (peso >= 73) 
        {
            huevosXL++;
            totalHuevos++;
        } 
        else 
        {
            if (peso >= 63 && peso < 73) 
            {
                huevosL++;
                totalHuevos++;
            } 
            else
            {
                if (peso >= 53 && peso < 63) 
                {
                    huevosM++;
                    totalHuevos++;
                } 
                else 
                {
                    descartados++;
                }
            }
        }

        continua = prompt("¿Desea continuar? (S/N)");
    }

    /* Calcular porcentajes */
    let porcentajeXL = totalHuevos > 0 ? (huevosXL / totalHuevos) * 100 : 0;
    let porcentajeL = totalHuevos > 0 ? (huevosL / totalHuevos) * 100 : 0;
    let porcentajeM = totalHuevos > 0 ? (huevosM / totalHuevos) * 100 : 0;

    /* Mostrar resultados */
    console.log("=== RESULTADOS CLASIFICACIÓN DE HUEVOS ===");
    console.log(`Cantidad total de Huevos (válidos): ${totalHuevos}`);
    console.log(`Cantidad de Huevos XL: ${huevosXL}`);
    console.log(`Cantidad de Huevos L: ${huevosL}`);
    console.log(`Cantidad de Huevos M: ${huevosM}`);
    console.log(`Cantidad de Huevos descartados: ${descartados}`);
    console.log(`Porcentaje de Huevos XL sobre el total: ${porcentajeXL}%`);
    console.log(`Porcentaje de Huevos L sobre el total: ${porcentajeL}%`);
    console.log(`Porcentaje de Huevos M sobre el total: ${porcentajeM}%`);
}