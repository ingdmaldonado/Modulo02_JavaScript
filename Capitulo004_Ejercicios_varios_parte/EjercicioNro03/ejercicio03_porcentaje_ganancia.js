

/*

Realizar un programa que permita calcular el precio de venta 
de los artículos de un negocio (comercio) sabiendo que en líneas
generales el margen de ganancia es igual al 45%. Es decir, 
si un comerciante compra por mayor “ventanas” y las adquiere a $ 250.000,00 
pesos cada una (precio de costo), el precio de venta será de $ 362.500,00 
dado que tiene el 45% aplicado. Siendo la ganancia neta de $ 112.500,00. 

*/

{
    /* Declaramos e Inicializamos las variables */
    let valorCompra = 250000;
    valorCompra = Number(prompt("Ingrese el valor de Compra"));

    /* Realizamos una operación de cálculo de variables */
    let porcentajeGanancia = (valorCompra * 45) /100;

    /* Calculamos el valor de venta */
    let valorVenta = valorCompra + porcentajeGanancia;

    /* Mostramos los resultados de la operación */
    console.log("El Valor de Compra: ",valorCompra);
    console.log("El porcentaje de Ganancia: ",porcentajeGanancia);
    console.log("El valor de Venta :",valorVenta);

}

