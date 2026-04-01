{
    let importeCompra = 0;
    let formaPago = 0;

    importeCompra = Number(prompt(`Ingrese el importe de la compra`))
    formaPago = Number(prompt(`Ingrese forma de pago:
        1 - Efectivo
        2 - Debito
        3 - Credito`))

    let descuento = 0;
    let totalAPagar = 0;
    let metodoPago = ``

    switch(formaPago)
    {
        case 1: // EFECTIVO 10 %
        {
            descuento = (importeCompra * 10 / 100)
            metodoPago = `Efectivo`
            break;
        }
        case 2: // DEBITO 5 %
        {
            descuento = (importeCompra * 5 / 100)
            metodoPago = `Debito`
            break;
        }   
        case 3: // CREDITO SIN DESCUENTO
        {
            descuento = 0
            metodoPago = `Credito`
            break;
        }
        default:
        {
            console.log(`Metodo de pago no disponible`)
            break;
        }
    }

    totalAPagar = importeCompra - descuento

    console.log(`Importe de la compra: $${importeCompra} forma de pago elegida: ${metodoPago} Descuento: $${descuento} Total a pagar: $${totalAPagar}`)

}