/*
Ejercicio Nro. 10: Estructuras Condicionales (if/else)
Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo -> 10% descuento
2) Débito -> 5% descuento
3) Crédito -> Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch.
*/
{
    let importeCompra = 0;
    let formaPago = 0;

    importeCompra = Number(prompt("Ingrese el importe total de la compra:"));
    formaPago = Number(prompt("Ingrese forma de pago (1-Efectivo, 2-Débito, 3-Crédito):"));

    let descuento = 0;
    let totalFinal = 0;

    switch(formaPago) {
        case 1:
            descuento = importeCompra * 0.10;
            break;
        case 2:
            descuento = importeCompra * 0.05;
            break;
        case 3:
            descuento = 0;
            break;
        default:
            console.log("Forma de pago ingresada incorrecta.");
            break;
    }

    totalFinal = importeCompra - descuento;

    if (formaPago >= 1 && formaPago <= 3) {
        console.log(`El descuento calculado es de $${descuento}. El total final a pagar es $${totalFinal}`);
    }
}