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
    let tipoPago = 0;
    let descuento = 0;
    let operacionCorrecta = false;

    importeCompra = Number(prompt(`Ingrese importe de compra:`));

    tipoPago = Number(prompt(`Ingrese tipo de pago, (1-efectivo, 2-debito, 3-credito):`));


    console.log(`Importe de la compra: ${importeCompra}`);
    console.log(`Tipo de pago: ${tipoPago}`);

    

    let totalCompra = 0;


    switch (tipoPago) {
        case 1: // efectivo, 10% descuento
            {   
                console.log(`Descuento del 10%`);
                descuento = (importeCompra*10)/100;
                operacionCorrecta = true;
                break;
            }
        case 2: // debito, 5% descuento
            {
                console.log(`Descuento del 5%`);
                descuento = (importeCompra*5)/100;
                operacionCorrecta = true;
                break;
            }
        case 3: // credito, sin descuento
            {
                console.log(`Sin descuento`);
                descuento = 0;
                operacionCorrecta = true;
                break;
            }
        default:
            console.log(`Ingrese una opción correcta`);

            operacionCorrecta = false;

            descuento = 0;
                
            break;
    }


    if (operacionCorrecta) {
        totalCompra = importeCompra - descuento;
        console.log(`El total de la compra es: ${totalCompra}`);
    }
}
