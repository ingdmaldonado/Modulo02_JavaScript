/*
    Ejercicio Nro. 10: Estructuras Condicionales (if/else)
    Un comercio aplica descuentos sobre el importe de compra según forma de pago:
        1) Efectivo → 10% descuento
        2) Débito → 5% descuento
        3) Crédito → Sin descuento
    Calcular el descuento y Mostrar total final. Utilizar estructura switch
*/

{
    let importeCompra = 0;
    let formaPago = 0;
    let descuento = 0;
    let seleccionTipoPago = true;

    importeCompra = Number(prompt(`Ingrese el importe total de la compra:`));
    formaPago = Number(prompt(`Selecciones la forma de pago 1- Efectivo; 2- Débito; 3- Crédito`));

    switch(formaPago)
    {
        case 1: {
            console.log('Usted seleccionó la forma de pago en efectivo. Tiene un descuento del 10%');
            descuento = (importeCompra*10)/100;
            break;
        }
        case 2: {
            console.log('Usted seleccionó la forma de pago en débito. Tiene un descuento del 5%');
            descuento = (importeCompra*5)/100;;
            break;
        }
        case 3: {
            console.log('Usted seleccionó la forma de pago en crédito. No tiene descuento');
            descuento = 0;
            break;
        }
        default: {
            console.log('Selección del tipo de pago inválida');
            seleccionTipoPago = false;
            break;
        }
    }

    //Validamos el tipo de descuento
    if( seleccionTipoPago === true )
    {
        console.log(`Importe total de la compra sin descuento $${importeCompra}`)
        console.log(`Descuento de la compra $${descuento}`);
        console.log(`Importe total final de la compra: $${importeCompra = importeCompra - descuento}`);
    }
}