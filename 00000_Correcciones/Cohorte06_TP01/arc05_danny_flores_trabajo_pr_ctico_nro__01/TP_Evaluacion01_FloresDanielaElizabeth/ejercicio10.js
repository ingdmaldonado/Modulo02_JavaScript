/* TP - EJERCICIO NRO. 10
   Un comercio aplica descuentos sobre el importe de compra según forma de pago:
   1) Efectivo → 10% descuento
   2) Débito → 5% descuento
   3) Crédito → Sin descuento
   Calcular el descuento y Mostrar total final. Utilizar estructura switch
*/

{
    let importeDeCompra = 0;
    let tipoDePago      = 0;

    importeDeCompra = Number(prompt(`Sr. Indique el Importe de Compra`));
    tipoDePago = Number(prompt(`Indique Tipo de Pago: 1 - Efectivo, 2 - Debito, 3 - Credito`));

    let operacionCorrecta = false;
    let descuento         = 0;

    switch(tipoDePago)
    {
        case 1:
            {
                console.log(`Ud. eligió Efectivo`);
                operacionCorrecta = true;
                descuento = (importeDeCompra * 10) / 100;
                break;
            }
        case 2:
            {
                console.log(`Ud. eligió Débito`);
                operacionCorrecta = true;
                descuento = (importeDeCompra * 5) / 100;
                break;
            }
        case 3:
            {
                console.log(`Ud. eligió Tarjeta`);
                operacionCorrecta = true;
                descuento = 0;
                break;
            }
        default:
            {
                console.log(`Ingrese una opción correcta`);
                operacionCorrecta = false;
                descuento = 0;
                break;
            }
    }

    let totalAPagar = 0;

    if(operacionCorrecta)
    {
        totalAPagar = importeDeCompra - descuento;
        console.log(`Importe Compra: ${importeDeCompra} Descuento: ${descuento} Total a Pagar: ${totalAPagar}`);
    }
    else
    {
        console.log(`Sr. Ud. eligió una opción incorrecta. Intente nuevamente`);
    }
}
