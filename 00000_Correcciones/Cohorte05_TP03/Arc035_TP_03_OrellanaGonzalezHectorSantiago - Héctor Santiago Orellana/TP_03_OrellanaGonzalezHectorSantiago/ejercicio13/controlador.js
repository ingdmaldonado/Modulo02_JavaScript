/*Ejercicio Nro. 13:
Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, 
la función debe retornar el precio de venta
 que será igual a aplicarle el % de margen de ganancia. La función debe retornar el precio de venta (sin impuestos).
Nota: Debe devolver un número*/

  export const fnretornarPrecioDeVenta=(importeDeCompraDeProducto,margenDeGanancia)=>

{
    let precioDeVentaFinal= 0;

    precioDeVentaFinal= importeDeCompraDeProducto + (importeDeCompraDeProducto * margenDeGanancia)/100;

 return precioDeVentaFinal;
 
 };


 


