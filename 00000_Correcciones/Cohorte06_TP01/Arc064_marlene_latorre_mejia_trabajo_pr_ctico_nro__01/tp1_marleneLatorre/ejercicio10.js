/*
Ejercicio Nro. 10: Estructuras Condicionales (if/else)
Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch
*/

{
    let importeDeCompra = 0;
    let formaPago = 0; 

    importeDeCompra = Number(prompt(`Ingrese el importe de compra`));

    formaPago = Number(prompt(`Ingrese forma de pago: 1-efectivo 2-Debito 3-Credito`));



    let descuento = 0;
    let operacionCorrecta = false;

    switch(formaPago)
    {
        case 1: //Efectivo
        {
            operacionCorrecta = true;
            console.log(`Pago con efectivo un descuento del 10%`);
            descuento= (importeDeCompra*10) /100;
            break;
        }
        case 2: //Debito
        {
            operacionCorrecta = true;
            console.log(`Pago con debito un descuento del 5%`);
            descuento = (importeDeCompra *5)/100;
            break;
        }
        case 3: // credito
        {
            operacionCorrecta = true;
            console.log(`Pago con credito sin descuento`);
            descuento = 0;
            break;
        }
        default:
            {
                operacionCorrecta = false;
                console.log(`Ingrese una opcion correcta`);
                break;
            }
    }

    let totalAPagar = 0; 

    if(operacionCorrecta)
    {
        totalAPagar = importeDeCompra - descuento;
        console.log (`El importe es ${importeDeCompra} Descuento: ${descuento} El importe total a pagar $ ${totalAPagar}`);
    }
    else
    {
        console.log(`Valor incorrecto. Ingrese nuevamente`);
    }
}