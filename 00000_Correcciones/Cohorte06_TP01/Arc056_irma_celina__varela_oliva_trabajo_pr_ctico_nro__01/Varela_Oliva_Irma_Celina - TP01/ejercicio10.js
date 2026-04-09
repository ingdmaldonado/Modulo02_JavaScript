/* Ejercicio Nro. 10: 

Estructuras Condicionales (if/else) 
Un comercio aplica descuentos sobre el importe de compra según forma de pago: 
1) Efectivo → 10% descuento 
2) Débito → 5% descuento 
3) Crédito → Sin descuento 
Calcular el descuento y Mostrar total final. Utilizar estructura switch 

*/


{
    let importeDeCompra = 0;

    let tipoDePago = 0; 

    importeDeCompra = Number(prompt(`Sr. indique el importe de compra`));

    tipoDePago = Number(prompt(`Indique tipo de pago: 1 - efectivo, 2 - debito, 3 - credito`));

    let operacionCorrecta = false;

    let descuento = 0;

    switch(tipoDePago)
    {
        case 1: // contado 10%
            {
                console.log(`Usted elegio contado`);

                descuento = (importeDeCompra * 10) / 100;

                operacionCorrecta = true;

                break;
            }

        case 2: // debito 5%
            {
                console.log(`Usted elegio debito`);

                descuento = (importeDeCompra * 5) / 100;

                operacionCorrecta = true;

                break;
            }

        case 3: // credito sin descuento
            {
                console.log(`Usted elegio tarjeta`);

                descuento = 0;

                operacionCorrecta = true;

                break;
            }

        default: // un valor no definido 
            {
                console.log(`Seleccione una opcion correcta`);

                descuento = 0;

                operacionCorrecta = false;

                break;
            }

    }

    let totalAPagar=0;

    if(operacionCorrecta)
    {
        totalAPagar = importeDeCompra - descuento;

        console.log(`Importe de la compra: ${importeDeCompra} - Descuento: ${descuento} - Total a pagar: ${totalAPagar}`)
    }
    else{
        console.log(`Sr. usted elegio una opcion incorrecta. intente nuevamente.`);
    }
    

}