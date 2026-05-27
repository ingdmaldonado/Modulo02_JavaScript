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
    importeDeCompra = Number(prompt(`Ingrese el importe de la Compra`));

    let formaDePago = 0;
    formaDePago = Number(prompt(`Ingrese la forma de Pago: 1) Efectivo | 2) Débito | 3) Crédito`));

    let descuento = 0;

    let operacionCorrecta = true;

    switch(formaDePago){
        case 1: // Efectivo
        {
            descuento = (importeDeCompra * 10)/100;

            console.log(`Forma de Pago: Efectivo`);

            let totalAPagar = importeDeCompra - descuento;

            console.log(`Importe de Compra: $${importeDeCompra} | Descuento: $${descuento} | Total a Pagar: $${totalAPagar}`);

            break;
        }

        case 2: // Débito
        {
            descuento = (importeDeCompra * 5)/100;

            console.log(`Forma de Pago: Débito`);

            let totalAPagar = importeDeCompra - descuento;

            console.log(`Importe de Compra: $${importeDeCompra} | Descuento: $${descuento} | Total a Pagar: $${totalAPagar}`);

            break;
        }

        case 3: // Crédito
        {
            descuento = 0;

            console.log(`Forma de Pago: Crédito`);

            let totalAPagar = importeDeCompra - descuento;

            console.log(`Importe de Compra: $${importeDeCompra} | Descuento: $${descuento} | Total a Pagar: $${totalAPagar}`);

            break;
        }

        default: // Forma de Pago NO Válido
        {
            console.log(`Forma de Pago NO Válido. Por favor, intente nuevamente.`);

            operacionCorrecta = false;

            break;
        }
    }
}