

/* 
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del
15% como así también el importe restante final. 
*/

{
 let importeTotalCompra = 0;

 importeTotalCompra = Number(prompt("Por favor ingrese el monto de la compra"));


 let descuento15PorCiento = 0; 
 descuento15PorCiento = (importeTotalCompra * 15) / 100; 
 
 let totalAPagar = 0; 

 totalAPagar = importeTotalCompra - descuento15PorCiento;


 console.log(`El total ingresado es ${importeTotalCompra}`);

 console.log(`Total de Compra: ${importeTotalCompra} descuento ${descuento15PorCiento} total a pagar ${totalAPagar}`);

}