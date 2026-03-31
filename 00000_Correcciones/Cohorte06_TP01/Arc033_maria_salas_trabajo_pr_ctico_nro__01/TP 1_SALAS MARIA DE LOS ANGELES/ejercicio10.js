/*
Un comercio aplica descuentos sobre el importe de compra según forma de pago: 
1) Efectivo → 10% descuento 
2) Débito → 5% descuento 
3) Crédito → Sin descuento 
Calcular el descuento y Mostrar total final. Utilizar estructura switch{{{{{}}}}}
*/

{
    let tipoDePago = 0;
    let importeDeCompra = 0;
    let totalAPagar = 0;
    let descuento = 0;
    let operacionCorrecta = false;

    importeDeCompra = Number(prompt(`ingrese el monto de la compra`))
    tipoDePago = Number(prompt(`ingrese: 1- efectivo, 2- débito, 3- crédito`))

    switch(tipoDePago)
    {
        case 1:
            {
                console.log(`usted seleccionó efectivo`)
                descuento = (importeDeCompra*10)/100;
                totalAPagar = importeDeCompra - descuento;
                console.log(`se aplicó un descuento de: $${descuento}, el total a pagar es de: $${totalAPagar}`)
                operacionCorrecta = true;
                break;
            }
        case 2:
            {
                console.log(`usted seleccionó débito`)
                descuento = (importeDeCompra*5)/100;
                totalAPagar = importeDeCompra - descuento;
                console.log(`se aplicó un descuento de: $${descuento}, el total a pagar es de: $${totalAPagar}`)
                operacionCorrecta = true;
                break;
            }
        case 3:
            {
                console.log(`usted seleccionó crédito`)
                totalAPagar = importeDeCompra
                console.log(`el total a pagar es de: $${totalAPagar}`)
                operacionCorrecta = true;
                break;
            }
        default:
            {
                console.log(`ingrese un número valido`)
                operacionCorrecta = false;
                break;
            }
    }
}