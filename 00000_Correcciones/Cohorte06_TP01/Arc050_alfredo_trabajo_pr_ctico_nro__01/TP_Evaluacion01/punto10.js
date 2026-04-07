/*Ejercicio Nro. 10: Estructuras Condicionales (if/else)
Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch */

{
    let importeCompra = 0;
    let tipoDePago

    importeCompra = Number(prompt('Ingrese importe de compra:'));
    tipoDePago = Number(prompt('indique el tipo de pago 1-Efectivo, 2-Debito, 3-Credito'));

    let caracterValido = false;
    let descuento = 0;
    switch (tipoDePago) 
    {
        case 1:
            {
                console.log('Usted selecciono contado');
                caracterValido = true;
                descuento = (importeCompra * 10) / 100;
                break;
            }
        case 2:
            {
                console.log('Usted selecciono Débito');
                caracterValido = true;
                descuento = (importeCompra * 5) / 100;
                break;
            }
        case 3:
            {
                console.log('Usted selecciono Credito');
                caracterValido = false;
                descuento = 0;
                break;
            }
        default:
            {
                console.log('Ingrese un valor correcto');
                caracterValido = false;
                descuento = 0;
                break;

            }
    }
    totalAPagar = 0;
    if (caracterValido) {
        totalAPagar = importeCompra - descuento;
        console.log(`Importe Compra: ${importeCompra} Descuento: ${descuento} Total a Pagar: ${totalAPagar}`);
    }
    else {
        console.log(`Sr. Ud. eligió una opción incorrecta. intente nuevamente`);
    }

}