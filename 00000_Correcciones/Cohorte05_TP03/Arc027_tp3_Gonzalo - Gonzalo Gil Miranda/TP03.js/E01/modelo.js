export const calcularPrecioVenta = (importeCompra, margenPorc) =>
Number((importeCompra * (1 + margenPorc / 100)).valueOf());