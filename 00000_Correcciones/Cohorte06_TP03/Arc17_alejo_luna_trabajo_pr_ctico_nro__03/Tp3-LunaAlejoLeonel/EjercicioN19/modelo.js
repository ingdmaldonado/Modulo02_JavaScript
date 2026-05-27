export const calcularPrecioVenta = (importe, margen) => {
    return importe + (importe * margen / 100);
}