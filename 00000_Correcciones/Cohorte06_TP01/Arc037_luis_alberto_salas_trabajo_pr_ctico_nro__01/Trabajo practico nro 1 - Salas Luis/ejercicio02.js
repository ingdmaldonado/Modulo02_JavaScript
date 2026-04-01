{
    let importeCompra = 0;
    let descuentoCompra = 0;
    importeCompra = Number(prompt(`Ingrese el importe de la compra`))
    
    descuentoCompra = (importeCompra * 15) / 100

    let totalAPagar = importeCompra - descuentoCompra

    console.log(`Importe de la compra: ${importeCompra} Descuento: ${descuentoCompra} Total de la compra: $${totalAPagar}`)
}