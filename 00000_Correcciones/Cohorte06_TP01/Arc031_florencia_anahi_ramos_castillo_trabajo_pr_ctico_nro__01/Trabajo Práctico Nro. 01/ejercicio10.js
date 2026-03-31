/* Ejercicio Nro. 10: 
Estructuras Condicionales (if/else)
Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch
*/


function calcularPago() {

    // Ingreso de datos
    let importe = Number(prompt("Ingrese el importe de la compra"));
    let formaPago = Number(prompt("Forma de pago: 1-Efectivo, 2-Débito, 3-Crédito"));

    let descuento = 0;

    // Uso switch para la forma de pago
    switch (formaPago) {

        case 1:
            descuento = importe * 10 / 100;
            console.log("Pago en efectivo");
            break;

        case 2:
            descuento = importe * 5 / 100;
            console.log("Pago con débito");
            break;

        case 3:
            descuento = 0;
            console.log("Pago con crédito");
            break;

        default:
            console.log("Forma de pago inválida");
            return;
    }

    // Calculo total final
    let totalFinal = importe - descuento;

    // Muestro resultados
    console.log(`Importe: ${importe}`);
    console.log(`Descuento: ${descuento}`);
    console.log(`Total a pagar: ${totalFinal}`);
}