/* Ejercicio Nro. 06: Estructuras Condicionales (if/else)
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente,
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil
pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento
sabiendo que no se puede pasar el límite establecido. */

{
    let importeCompra= 0;
    importeCompra= Number(prompt( `Ingrese su importe de compra`));
    console.log (`Importe de Compra $`, importeCompra);

    let descuento= 0;
    descuento= (importeCompra * 50)/100;
    console.log (`El descuento de su compra es de $`, descuento);

    if (descuento >80000)
        descuento= 80000;
    console.log (`El descuento aplicado es de $`,descuento);

    let totalPagar= 0;
    totalPagar= importeCompra - descuento;
    console.log (`El total a pagar es de $`, totalPagar);
}