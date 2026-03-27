/*

Ejercicio Nro. 10: Estructuras Condicionales (if/else) 
Un comercio aplica descuentos sobre el importe de compra según forma de pago: 
1) Efectivo → 10% descuento 
2) Débito → 5% descuento 
3) Crédito → Sin descuento 
Calcular el descuento y Mostrar total final. Utilizar estructura switch

*/

{

    let impoteCompra = Number(prompt(`Ingrese el importe`));
    let opcionPago = prompt(`Elija una opcion de pago: 1-Efectivo 2-Débito 3-Credito`);
    let descuento = 0;
    let totalDescuento = 0;
    let totalPagar = 0;

    switch (opcionPago) {
        case "1":
            descuento = 10;
            totalPagar = impoteCompra - (impoteCompra * descuento) / 100;
            totalDescuento = impoteCompra * descuento / 100;
            break;
        case "2":
            descuento = 5;
            totalPagar = impoteCompra - (impoteCompra * descuento) / 100;
            totalDescuento = impoteCompra * descuento / 100;
            break;
        case "3":
            totalPagar = impoteCompra;
            totalDescuento = 0;
            break;
        default:
            console.log(`Ingrese una opcion valida`);
            break;
    }

    console.log(`El importe a pagar es: $`, totalPagar);
    console.log(`El descuento es de: $`, totalDescuento);

}