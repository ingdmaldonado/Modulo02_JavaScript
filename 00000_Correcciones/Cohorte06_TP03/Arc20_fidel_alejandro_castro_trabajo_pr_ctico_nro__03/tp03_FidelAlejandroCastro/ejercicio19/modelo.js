export const fnPrecioDeVenta = (importeProducto, margenGanancia) =>{
    return (importeProducto * (margenGanancia/100) + importeProducto);
};