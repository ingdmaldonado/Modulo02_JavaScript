/*
---------Ejercicio Nro. 10----------- 
---------Estructuras Condicionales (if/else)----
Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch

*/

{
    let importeCompra = 0;
    let medioDePago = 0;

    importeCompra = Number(prompt(`Ingresar importe de compra:`));
    medioDePago = Number(prompt(`Indicar su medio de pago: 
        1) Efectivo → 10% descuento
        2) Débito → 5% descuento
        3) Crédito → Sin descuento`));

    let totalPago = 0;
    let descuento = 0;

    switch (medioDePago)
    {
        case 1:
            {
                descuento = (importeCompra * 10)/100;
                totalPago = importeCompra - descuento;

                console.log(`Total a pagar $${totalPago} su descuento es $${descuento}`);
                break;
            }
        case 2:
            {
                descuento = (importeCompra * 5)/100;
                totalPago = importeCompra - descuento;

                console.log(`Total a pagar $${totalPago} su descuento es $${descuento}`);
                break;
            }
        case 3:
            {
                descuento = 0;
                totalPago = importeCompra - descuento;

                console.log(`Total a pagar $${totalPago} su descuento es $${descuento}`);
                break;
            }
        default:
        {
            console.log(`Elegir una opcion válida`)
            break;
        }
    }

}