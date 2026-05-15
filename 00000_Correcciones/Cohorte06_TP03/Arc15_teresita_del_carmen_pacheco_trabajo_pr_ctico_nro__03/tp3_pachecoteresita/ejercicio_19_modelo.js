export const calcularPrecioVenta = (importeCompra, margenGanancia) => {
    let ganancia = importeCompra * (margenGanancia / 100);
    return importeCompra + ganancia;
};