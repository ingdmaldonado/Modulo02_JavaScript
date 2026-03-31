/*Ejercicio Nro. 10: Estructuras Condicionales (if/else)
Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch
*/

{

    let importeCompra = 0;
    importeCompra = Number(prompt(`Ingrese el importe de la compra`));




    let formaPago = 0;
    formaPago = Number(prompt(`Ingrese  su metodo de pago (1 - Efectivo , 2 - debito , 3 - credito )`));


    let efectivo = 0;
    let debito = 0;
    let credito = 0;
    let descuento = 0;
    let totalfinal = 0;




    switch(formaPago)
    {
        case 1:
        {
            descuento =  (importeCompra * 10)/100;
            break;
        }
        case 2:
        {
            descuento ( importeCompra * 15)/100;
            break;
        }
        case 3:
        {
            descuento = 0;
            break;
        }
        default:
        {
            console.log(`Ingrese una forma correcta de pago`);
        }
    }

    totalfinal = importeCompra - descuento; 

    console.log(`El importe de la compra ${importeCompra}, el descuento es ${descuento}, el total  a pagar ${totalfinal}`);
    
    
}