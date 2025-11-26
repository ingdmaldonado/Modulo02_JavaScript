
// Arrow function que calcula el precio de venta con margen de ganancia
export const calcularPrecioVenta = (importeCompra, margenGanancia) => {
    let precioVenta = importeCompra + (importeCompra * margenGanancia / 100);
    return precioVenta;
}