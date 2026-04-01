{
    let cantidadPasajes = 0;
    let precioPasaje = 0;

    cantidadPasajes = Number(prompt(`Ingrese la cantidad de pasajes`))
    precioPasaje = Number(prompt(`Ingrese el precio del pasaje`))

    let totalCompra = 0;
    let descuento = 0;
    let importeTotalCompra = precioPasaje * cantidadPasajes

    if((cantidadPasajes > 3) && (importeTotalCompra > 500000))
    {
        descuento = (importeTotalCompra * 15) / 100
    }
    else if((cantidadPasajes > 3) && (importeTotalCompra > 250000))
    {
        descuento = (importeTotalCompra * 11) / 100
    }

    totalCompra = importeTotalCompra - descuento

    console.log(`Precio sin descuento: $${importeTotalCompra}`)
    console.log(`Descuento aplicado: $${descuento}`)
    console.log(`Total compra con descuento: $${totalCompra}`)

}