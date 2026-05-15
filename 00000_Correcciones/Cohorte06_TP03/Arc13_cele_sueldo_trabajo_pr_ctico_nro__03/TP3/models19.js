export const calcularPrecioVenta = (importeCompra, margenGanancia) => {
// saco la ganancia
let ganancia = importeCompra * (margenGanancia / 100);
// sumo la ganancia al importe
let precioFinal = importeCompra + ganancia;
return precioFinal;
};