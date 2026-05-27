/* función que calcula el precio de venta */

export const fnCalcularPrecioVenta = (importeCompra,margen)=>{

    let precioVenta = 0;

    precioVenta = importeCompra + (importeCompra * margen)/100;

    return precioVenta;

};