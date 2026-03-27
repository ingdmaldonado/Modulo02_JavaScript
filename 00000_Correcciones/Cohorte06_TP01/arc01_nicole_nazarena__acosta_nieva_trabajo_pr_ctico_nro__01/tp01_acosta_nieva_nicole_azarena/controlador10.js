/*Ejercicio Nro. 10: Estructuras Condicionales (if/else)
Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch*/

{
    let importeCompra = Number(prompt(`ingrese importe de la compra`));

    let formaDePago = prompt(`ingrese la forma del pago 1) Efectivo 2) Débito 3) Crédito`);

    let descuento = 0;

    let totalAPagar = 0;

    switch (formaDePago) {

        case "1":

            descuento = 10;

            totalAPagar = importeCompra - (importeCompra * descuento)/100;

            break;

        case "2":

            descuento = 5;

            totalAPagar = importeCompra - (importeCompra * descuento)/100;

            break;

        case "3":

            totalAPagar = importeCompra;
            descuento = 0;

            break

        default: console.log(`la forma de pago es incorrecta`)

            break;

    }
    console.log(`el importe de la compra es ${importeCompra}`);

    console.log(`el descuento es ${descuento}`);

    console.log(`el total a pagar es ${totalAPagar}`);


}