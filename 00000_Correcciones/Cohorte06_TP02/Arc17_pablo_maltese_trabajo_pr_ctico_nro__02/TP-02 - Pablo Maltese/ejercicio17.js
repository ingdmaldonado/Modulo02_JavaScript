/*
Ejercicio Nro. 17:

Una Frigorífico posee una cinta transportadora y clasificadora de huevos para consumo humano. La cinta no tan solo 
los transporta sino también los clasifica según su peso. es decir, al final de la cinta existe una balanza electrónica 
de alta precisión que evalúa su peso y los clasifica.

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
Consideraciones: para realizar el ejercicio debe utilizar solamente código JavaScript, sin interacción con el DOM y 
cargar los datos de entrada por medio de prompt.
*/

{
    let continuaCargaProducto = `S`;
    let pesoProducto = 0;

    let cantidadXL = 0;
    let cantidadL = 0;
    let cantidadM = 0;
    let cantidadDescartes = 0;

    while( continuaCargaProducto === 'S' || continuaCargaProducto === 's')
    {
        pesoProducto = Number(prompt(`Ingrese el peso (gramo) del producto`));

        cantidadXL = (pesoProducto >= 73? cantidadXL + 1: cantidadXL);
        cantidadL = ((pesoProducto >= 63) && (pesoProducto < 73)? cantidadL + 1: cantidadL);
        cantidadM = ((pesoProducto >= 53) && (pesoProducto < 63)? cantidadM + 1: cantidadM);
        cantidadDescartes = (pesoProducto < 53? cantidadDescartes + 1: cantidadDescartes);

        //Preguntamos si desea continuar
        continuaCargaProducto = prompt(`Desea continuar? S/N`);
    }

    //Visualizacion de los datos en pantalla
    let cantidadTotalProducto = ( cantidadXL + cantidadL + cantidadM + cantidadDescartes );
    let porcentajeXL = 0;
    let porcentajeL = 0;
    let porcentajeM = 0;

    porcentajeXL = (cantidadXL/cantidadTotalProducto)*100;
    porcentajeL = (cantidadL/cantidadTotalProducto)*100;
    porcentajeM = (cantidadM/cantidadTotalProducto)*100;

    console.log(`Cantidad total de productos: ${cantidadTotalProducto}`);
    console.log(`Cantidad de producto XL: ${cantidadXL}`);
    console.log(`Cantidad de producto L: ${cantidadL}`);
    console.log(`Cantidad de producto M: ${cantidadM}`);
    console.log(`Cantidad de producto descartados: ${cantidadDescartes}`);
    console.log(`Proporción de producto XL: ${porcentajeXL}%`);
    console.log(`Proporción de producto L: ${porcentajeL}%`);
    console.log(`Proporción de producto M: ${porcentajeM}%`);
}