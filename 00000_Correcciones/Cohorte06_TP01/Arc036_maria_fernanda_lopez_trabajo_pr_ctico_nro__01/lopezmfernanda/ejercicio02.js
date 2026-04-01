/* Ejercicio Nro. 02:
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 15% como así también el importe restante final. */

{
    let importeCompra= 0;
    importeCompra= Number(prompt(`Ingrese importe de su compra $`));
    console.log(`Importe de Compra $ ${importeCompra}`);

    let totalAPagar= 0; 
    let descuento= 0;

    descuento= (importeCompra * 15)/100;
    console.log(`El descuento es de $`, descuento);

    totalAPagar= importeCompra - descuento;
    console.log(`El total a pagar es de $ ${totalAPagar}`);

}