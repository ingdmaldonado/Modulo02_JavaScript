{
    let diaCompra = 0;
    let importeCompra = 0;

    diaCompra = Number(prompt(`Ingrese el dia de la compra
        1- Lunes
        2- Martes
        3- Miercoles
        4- Jueves
        5- Viernes
        6- Sabado
        7- Domingo`))

    importeCompra = Number(prompt(`Ingrese el importe de la compra`))

    let descuento = 0;
    let tope = 80000;
    let reintegro = 0;
    let diaElegido = ``
    let totalCompra = 0;

    switch(diaCompra)
    {
        case 1:
        {
            diaElegido = `Lunes`
            descuento = 0
            totalCompra = importeCompra
            break;
        }
        case 2:
        {
            diaElegido = `Martes`
            descuento = 0
            totalCompra = importeCompra
            break;
        }
        case 3:
        {
            diaElegido = `Miercoles`
            descuento = 0
            totalCompra = importeCompra
            break;
        }
        case 4:
        {
            diaElegido = `Jueves`
            descuento = 0
            totalCompra = importeCompra
            break;
        }
        case 5:
        {
            diaElegido = `Viernes`
            descuento = (importeCompra * 50) / 100 
            break;
        }
        case 6:
        {
            diaElegido = `Sabado`
            descuento = (importeCompra * 50) / 100 
            break;
        }
        case 7:
        {
            diaElegido = `Domingo`
            descuento = (importeCompra * 50) / 100 
            break;
        }
        default:
        {
            console.log(`Dia elegido incorrecto, intente nuevamente`)
        }
    }

    reintegro = descuento > tope ? tope : descuento
    totalCompra = importeCompra - reintegro



    console.log(`Usted compro un dia: ${diaElegido} reintegro: $${reintegro} total sin descuento: $${importeCompra} total a pagar: $${totalCompra}`)



}