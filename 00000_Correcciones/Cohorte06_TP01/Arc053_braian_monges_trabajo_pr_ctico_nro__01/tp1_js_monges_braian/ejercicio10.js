{
    let importeDeCompra = 0;
    importeDeCompra = Number(prompt(`ingrese importe de compra`));

    let tipoDePago = Number(prompt(`eliga metodo de pago: 1 - efectivo, 2 - debito, 3 - credito`));

    let descuento = 0;
    let total = 0;
    let opcionValida = true; 

    switch(tipoDePago)
    {
        case 1: // efectivo
        {
            descuento = (importeDeCompra * 10)/100;
            console.log(`usted eligio efectivo`);
            break;
        }

        case 2: // debito
        {
            descuento = (importeDeCompra * 5)/100;
            console.log(`usted eligio debito`);
            break;
        }

        case 3: // credito
        {
            descuento = 0;
            console.log(`usted eligio credito`);
            break;
        }

        default:
        {
            console.log(`seleccione una opcion correcta`);
            opcionValida = false; 
            break;
        }
    }

    if(opcionValida)
    {
        total = importeDeCompra - descuento;
        console.log(`total a pagar: ${total}`);
    }
}
