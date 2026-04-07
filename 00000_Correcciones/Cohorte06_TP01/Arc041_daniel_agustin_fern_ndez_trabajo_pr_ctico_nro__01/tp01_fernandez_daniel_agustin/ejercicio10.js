/*

Un comercio aplica descuentos sobre el importe de compra según forma de pago:

1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento

Calcular el descuento y Mostrar total final. Utilizar estructura switch

*/

{
    let importeDeCompra = 0;
    let metodoDePago = 0;

    metodoDePago = Number(prompt(`1 = Efectivo, 2 = Débito, 3 = Crédito`));
    importeDeCompra = Number(prompt(`Ingrese el importe total`));

    switch(metodoDePago)
    {
        case 1: {
                    let descuento = (importeDeCompra * 10)/100;
                    console.log(`El importe total es: ${importeDeCompra-descuento}`);
                    break;
                }

        case 2: {
                    let descuento = (importeDeCompra * 5)/100;
                    console.log(`El importe total es: ${importeDeCompra-descuento}`);
                    break;
                }
                
        case 3: {
                    console.log(`El importe total es: ${importeDeCompra}`);
                    break;
                }
                
        default: {console.log(`La opcion es incorrecta`);}
    }
}