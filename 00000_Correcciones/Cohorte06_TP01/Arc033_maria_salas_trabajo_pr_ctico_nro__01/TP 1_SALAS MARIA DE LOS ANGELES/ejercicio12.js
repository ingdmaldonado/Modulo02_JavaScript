{
    let diaDeCompra = 0;
    let montoCompra = 0;
    let reintegro = 0;
    let operacionCorrecta = false;
    let topeMaximo = 80000;


    montoCompra = Number(prompt(`ingrese el monto de la compra`))
    diaDeCompra = Number(prompt(`ingrese el dia de compra: 1- viernes, 2-sábado, 3- domingo`))

    switch(diaDeCompra)
    {
        case 1:
            {
                console.log(`la compra se realizó el dia viernes`)
                let descuento = (montoCompra*50)/100;
                reintegro = descuento > topeMaximo ? topeMaximo : descuento;
                console.log(`el reintegro fué de: $${reintegro}`)
                operacionCorrecta = true;
                break;                
            }
        case 2:
            {
                console.log(`la compra se realizó el dia sábado`)
                let descuento = (montoCompra*50)/100;
                reintegro = descuento > topeMaximo ? topeMaximo : descuento;
                console.log(`el reintegro fué de: $${reintegro}`)
                operacionCorrecta = true;
                break;                
            }
        case 3:
            {
                console.log(`la compra se realizó el dia domingo`)
                let descuento = (montoCompra*50)/100;
                reintegro = descuento > topeMaximo ? topeMaximo : descuento;
                console.log(`el reintegro fué de: $${reintegro}`)
                operacionCorrecta = true;
                break;                
            }
        default:
            {
                console.log(`no hay beneficio disponible`)
                let totalAPagar = montoCompra;
                operacionCorrecta = false;
                break;
            }
    }
}