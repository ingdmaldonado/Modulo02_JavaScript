
/*

Sobre la base del ejercicio anterior, realizaremos a pedido del 
propietario del comercio un cambio muy importante, donde nos indica 
las siguientes reglas de negocio.

	El porcentaje de ganancia estará en función del precio de compra, 
    y nos indica las siguientes reglas que quiere que se apliquen.

-	Los precios de aquellos productos donde el precio sea menor 
    a 250.000 mil pesos, el porcentaje de ganancia será de 45% por ciento.
    
-	En precios que sean iguales o mayores a 250.000 mil pesos el porcentaje 
    de ganancia será el 65%.

*/


{
    /* Declaramos e Inicializamos las variables */
    let valorCompra = 0;
    valorCompra = Number(prompt("Ingrese el valor de Compra"));

    /* Realizamos una operación de cálculo de variables */
    let porcentajeGanancia = 0;

     /* Realizamos una operación de cálculo de variables condicional */
    if(valorCompra < 250000)
    {
        console.log("el valor de costo es inferior a 250.000,00 pesos");
        porcentajeGanancia = (valorCompra * 45) /100;
    }
    else
    {
        console.log("el valor de costo es mayor o igual a 250.000,00 pesos");
        porcentajeGanancia = (valorCompra * 65) /100;
    }

    /* Calculamos el valor de venta */
    let valorVenta = valorCompra + porcentajeGanancia;

    /* Mostramos los resultados de la operación */
    console.log("El Valor de Compra: ",valorCompra);
    console.log("El porcentaje de Ganancia: ",porcentajeGanancia);
    console.log("El valor de Venta :",valorVenta);
}