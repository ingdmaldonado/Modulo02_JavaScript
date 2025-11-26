//ejercicio 13
export const determinarPrecioDeVenta = (importeDeCompra, margenDeGanancia) => 
    {
        let precioDeVenta = 0;
        precioDeVenta = importeDeCompra + ((importeDeCompra * margenDeGanancia) / 100);
        return precioDeVenta;
    }
