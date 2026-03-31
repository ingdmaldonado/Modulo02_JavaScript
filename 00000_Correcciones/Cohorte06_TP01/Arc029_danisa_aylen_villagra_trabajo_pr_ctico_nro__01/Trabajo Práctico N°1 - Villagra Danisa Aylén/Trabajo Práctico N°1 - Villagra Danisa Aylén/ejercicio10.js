/*Ejercicio Nro. 10: Estructuras Condicionales (if/else) 
Un comercio aplica descuentos sobre el importe de compra según forma de pago: 
1) Efectivo → 10% descuento 
2) Débito → 5% descuento 
3) Crédito → Sin descuento 
Calcular el descuento y Mostrar total final. Utilizar estructura switch.*/

{
    let importe = Number(prompt(`Ingrese el monto de compra:`));
    let medioPago = Number(prompt(`Ingrese el medio de pago: 1 - Efectivo; 2 - Débito; 3 - Crédito.`));

    switch(medioPago)
    {
        case 1:
            {
                console.log(`Importe: ${importe}`);
                console.log(`Medio de pago: Efectivo`);
                let descuento = (importe * 10) / 100;
                let totalAPagar = importe - descuento;
                console.log(`Descuento: ${descuento}`);
                console.log(`Total a pagar: ${totalAPagar}`);
                break;
            }
        case 2:
            {
                console.log(`Importe: ${importe}`);
                console.log(`Medio de pago: Débito`);
                let descuento = (importe * 5) / 100;
                let totalAPagar = importe - descuento;
                console.log(`Descuento: ${descuento}`);
                console.log(`Total a pagar: ${totalAPagar}`);
                break;
            }
        case 3:
            {
                console.log(`Importe: ${importe}`);
                console.log(`Medio de pago: Crédito`);
                let descuento = 0;
                let totalAPagar = importe - descuento;
                console.log(`No aplica descuento`);
                console.log(`Total a pagar: ${totalAPagar}`);
                break;
            }
        default:
            {
                console.log(`Ingrese un medio de pago válido.`);
            }
    }
}