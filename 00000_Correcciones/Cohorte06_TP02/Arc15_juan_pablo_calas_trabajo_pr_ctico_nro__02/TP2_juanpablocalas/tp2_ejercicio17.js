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
    let PesoProducto = 0;
    
    let CantProdXL = 0;
    let CantProdL = 0;
    let CantProdM = 0;
    let CantProdDescartados = 0;
    let CantTotalProducto = 0;

    let PorcProdXL = 0;
    let PorcProdL = 0;
    let PorcProdM = 0;
    let PorcDescartados = 0;

    let ContinuaIngresando = 'S';

    while((ContinuaIngresando === 'S') || (ContinuaIngresando === 's'))
    {
        PesoProducto = Number(prompt(`Ingrese el Peso del Producto`));
        if(PesoProducto >= 73)
        {
            CantProdXL++;
            console.log(`Peso = ${PesoProducto}  -- Producto XL`);             
        }
        if((PesoProducto >= 63) && (PesoProducto < 73))
        {
            CantProdL++;
            console.log(`Peso = ${PesoProducto}  -- Producto L`);                    
        }
        if((PesoProducto >= 53) && (PesoProducto < 63))
        {
            CantProdM++;
            console.log(`Peso = ${PesoProducto}  -- Producto M`);                    
        } 
        if(PesoProducto < 53) 
        {
            CantProdDescartados++;
            console.log(`Peso = ${PesoProducto}  -- Descartado`);        
        }       
        ContinuaIngresando = prompt(`Continua Ingresando Productos? (S/N)`)        
    }
    CantTotalProducto = CantProdXL + CantProdL + CantProdM + CantProdDescartados;
    PorcProdXL = (CantProdXL * 100) / CantTotalProducto;
    PorcProdL = (CantProdL * 100) / CantTotalProducto;
    PorcProdM = (CantProdM * 100) / CantTotalProducto;
    PorcDescartados = (CantProdDescartados * 100) / CantTotalProducto;

    console.log(`La Cantidad Total de Productos Ingresados es ${CantTotalProducto}`);
    console.log(`La Cantidad Total de Productos L es ${CantProdL} -- El ${PorcProdL} %`);
    console.log(`La Cantidad Total de Productos XL es ${CantProdXL} -- El ${PorcProdXL} %`);
    console.log(`La Cantidad Total de Productos M es ${CantProdM} -- El ${PorcProdM} %`);
    console.log(`La Cantidad Total de Productos Descartados es ${CantProdDescartados} -- El ${PorcDescartados} %`);
}