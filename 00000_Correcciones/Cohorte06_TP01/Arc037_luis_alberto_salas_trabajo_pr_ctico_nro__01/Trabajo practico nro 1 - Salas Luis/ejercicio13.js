{
    let rubroComercio = 0;
    rubroComercio = Number(prompt(`Ingrese el rubro del comercio
        1 - vestimenta
        2 - perfumeria
        3 - libreria
        4 - electrodomesticos
        5 - calzado`))

    let importeCompra = 0;
    importeCompra = Number(prompt(`Ingrese el importe de la compra`))

    let descuento = 0;
    let tope = 0;
    let reintegro = 0;
    let rubroElegido = ``

    switch(rubroComercio)
    {
        case 1: // vestimenta 20% tope 80000
        {
            rubroElegido = `Vestimenta`
            descuento = (importeCompra * 20) / 100
            tope = 80000
            reintegro = descuento > tope ? tope : descuento
            break;
        }
        case 2: // perfumeria 20% tope 80000
        {
            rubroElegido = `Perfumeria`
            descuento = (importeCompra * 20) / 100
            tope = 80000
            reintegro = descuento > tope ? tope : descuento
            break;
        }
        case 3: // libreria 30% tope 90000;
        {
            rubroElegido = `Libreria`
            descuento = (importeCompra * 30) / 100
            tope = 90000
            reintegro = descuento > tope ? tope : descuento
            break;
        }
        case 4: // electro 15% tope 70000
        {
            rubroElegido = `Electro`
            descuento = (importeCompra * 15) / 100
            tope = 70000
            reintegro = descuento > tope ? tope : descuento
            break;
        }
        case 5: // calzado 20% tope 80000
        {
            rubroElegido = `Calzado`
            descuento = (importeCompra * 20) / 100
            tope = 80000
            reintegro = descuento > tope ? tope : descuento
            break;
        }
        default:
        {
            console.log(`Numero de rubro equivocado`)
            break;
        }
    }

    let totalAPagar = importeCompra - reintegro

    console.log(`Usted eligio rubro: ${rubroElegido} Importe de la compra: $${importeCompra} Descuento: $${reintegro} Total a pagar: $${totalAPagar}`)

}