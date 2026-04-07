/*

Ejercicio Nro. 10: Estructuras Condicionales (if/else) 
    Un comercio aplica descuentos sobre el importe de compra según forma de pago: 
    1) Efectivo → 10% descuento 
    2) Débito → 5% descuento 
    3) Crédito → Sin descuento 
    
    Calcular el descuento y Mostrar total final. Utilizar estructura switch 

*/
{

    let MontoDeCompra = 0;
    let FormaDePago = 0;
    
    let DescuentoEfectivo = 10;
    let DescuentoDebito = 5;
    let DescuentoCredito = 0;

    let MontoDescuento = 0;
    let TotalAPagar = 0;

    MontoDeCompra = Number(prompt(`Por favor ingrese el monto de la Compra`));
    FormaDePago = Number(prompt(`Por favor ingrese Forma de Pago: 1: EFECTIVO - 2: DEBITO - 3: CREDITO`))

    FormaDePagoCorrecta = true;

    switch(FormaDePago)
    {
        case 1: // EFECTIVO
            console.log(`Ingreso Forma de pago 1 - EFECTIVO - El Descuento a aplicar es ${DescuentoEfectivo} %`);
            MontoDescuento = MontoDeCompra * (DescuentoEfectivo / 100);
            break;
        case 2: // DEBITO
            console.log(`Ingreso Forma de pago 2 - DEBITO - El Descuento a aplicar es ${DescuentoDebito} %`);
            MontoDescuento = MontoDeCompra * (DescuentoDebito / 100);
            break;
        case 3: // TARJETA DE CREDITO
            console.log(`Ingreso Forma de pago 3 - CREDITO - El Descuento a aplicar es ${DescuentoCredito} %`);
            MontoDescuento = MontoDeCompra * (DescuentoCredito / 100);        
            break;
        default:
            FormaDePagoCorrecta = false;
            break;
    }

    if(FormaDePagoCorrecta === true)
    {
        TotalAPagar = MontoDeCompra - MontoDescuento;
        console.log(`El Monto de compra es $ ${MontoDeCompra} Ingreso Forma de pago ${FormaDePago} - El Descuento es de $ ${MontoDescuento} - El TOTAL a Pagar es ${TotalAPagar}`);
    }
    else
    {
        console.log(`La FORMA DE PAGO ingresada no corresponde - Ingrese Nuevamente Forma de Pago`);
    }
}