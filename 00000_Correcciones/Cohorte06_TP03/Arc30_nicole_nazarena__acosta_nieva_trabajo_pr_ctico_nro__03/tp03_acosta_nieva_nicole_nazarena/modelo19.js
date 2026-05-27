export const calcularPrecioVenta = ( importeCompra , margenGanancia) => {
    let precioVenta = 0;

     precioVenta = importeCompra + ( importeCompra * margenGanancia/100)

     return precioVenta};

