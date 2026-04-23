/*Ejercicio Nro. 17: 
Una Frigorífico posee una cinta transportadora y clasificadora de huevos para consumo humano. La cinta no tan solo los transporta sino también los clasifica según su peso. Es decir, al final de la cinta existe una balanza electrónica de alta precisión que evalúa su peso y los clasifica. 
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
DOM y cargar los datos de entrada por medio de prompt.*/

{
    let continuar = "si";

    let total = 0;
    let xl = 0;
    let l = 0;
    let m = 0;
    let descartados = 0;

    while (continuar === "si")
    {
        let peso = Number(prompt("Ingrese el peso del huevo en gramos:"));

        total = total + 1;

        if (peso >= 73)
        {
            xl = xl + 1;
        }
        else
        {
            if (peso >= 63 && peso < 73)
            {
                l = l + 1;
            }
            else
            {
                if (peso >= 53 && peso < 63)
                {
                    m = m + 1;
                }
                else
                {
                    descartados = descartados + 1;
                }
            }
        }

        continuar = prompt("¿Desea ingresar otro huevo? (si/no)");
    }

    let porcentajeXL = (xl * 100) / total;
    let porcentajeL = (l * 100) / total;
    let porcentajeM = (m * 100) / total;

    console.log("Total de huevos:", total);
    console.log("Huevos XL:", xl);
    console.log("Huevos L:", l);
    console.log("Huevos M:", m);
    console.log("Huevos descartados:", descartados);

    console.log(`Porcentaje XL: ${porcentajeXL}%`);
    console.log(`Porcentaje L: ${porcentajeL}%`);
    console.log(`Porcentaje M: ${porcentajeM}%`);
}