/*Realizar una arrow function que reciba dos parámetros de entrada. El parámetro 1 será el importe de
compra de un producto, el segundo será el margen de ganancia que se aplicará sobre ese producto, la función
debe retornar el precio de venta que será igual a aplicarle el % de margen de ganancia. La función debe retornar
el precio de venta (sin impuestos).
Nota: Debe devolver un número*/

export const calcularPrecioVenta= (importeCompra, margenGanancia)=>{ //exporta la funcion.
    // se declara la constante y se hace la operacion correspondiente.
    const precioVenta=importeCompra+(importeCompra*(margenGanancia/100));
    return precioVenta; // se retorna la constante.
};