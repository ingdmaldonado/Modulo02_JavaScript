{
    let importeCompra = 0;
    importeCompra = Number(prompt(`Ingrese el importe de la compra`))

    let descuento = 0;
    let tope = 80000;
    let totalAPagar = 0;

    descuento = (importeCompra * 50) / 100
    
    descuento = descuento > tope ? tope : descuento

    totalAPagar = importeCompra - descuento

    console.log(`El importe de la compra es: $${importeCompra} el descuento: $${descuento} total a pagar: $${totalAPagar}`)
}
