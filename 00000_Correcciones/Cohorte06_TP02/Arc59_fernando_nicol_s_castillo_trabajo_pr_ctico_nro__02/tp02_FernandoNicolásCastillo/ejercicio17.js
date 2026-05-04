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
*/
{
let continua = "s";
let pesoProducto = 0;
let huevos = 0;
let cantidadM = 0;
let cantidadL = 0;
let cantidadXL = 0;
let cantidadDescartes = 0;
let cantidadHuevos = 0;

while (continua === 'S' || continua === 's')
{
    pesoProducto = Number(prompt(`Ingrese el peso:`));
    console.log(`Peso del Producto: ${pesoProducto}`);

    if((pesoProducto >= 53) && (pesoProducto< 63))
    {
        cantidadM = cantidadM +1;
        cantidadHuevos = cantidadHuevos +1;

    }
    else if((pesoProducto >= 63) && (pesoProducto < 73))
    {
        cantidadL = cantidadL +1;
        cantidadHuevos = cantidadHuevos +1;
    }
    else if((pesoProducto >= 73))
    {
        cantidadXL = cantidadXL +1;
        cantidadHuevos = cantidadHuevos +1;
    }
    if (pesoProducto < 53)
    {
        cantidadDescartes = cantidadDescartes +1;
        cantidadHuevos = cantidadHuevos +1;
    }
    console.log(`Cantidad de Huevos: ${cantidadHuevos}`);
    console.log(`Cantidad y % de Huevos M:${cantidadM}, ${((cantidadM/cantidadHuevos)*100)}%`);
    console.log(`Cantidad y % de Huevos L:${cantidadL}, ${((cantidadL/cantidadHuevos)*100)}%`);
    console.log(`Cantidad y % de Huevos XL:${cantidadXL}, ${((cantidadXL/cantidadHuevos)*100)}%`);
    console.log(`Cantidad y % de Huevos descartados:${cantidadDescartes}, ${((cantidadDescartes/cantidadHuevos)*100)}%`);
    
    continua = prompt(`Desea continuar? (S/N)`);

   
}

}