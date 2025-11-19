export const calcularPrecioVenta = (importe, margen) => {
    return importe * (1 + margen / 100);
};
