/*Un comercio aplica descuentos sobre el importe de compra según forma de pago:
1) Efectivo → 10% descuento
2) Débito → 5% descuento
3) Crédito → Sin descuento
Calcular el descuento y Mostrar total final. Utilizar estructura switch
*/

{
let importeCompra = 0;
let formaPago = 0;
let descuento = 0;

importeCompra = Number(prompt(`Ingrese el Importe de la Compra:`));
formaPago = Number(prompt(`Indique la fomra de Pago: 1-Efectivo, 2-Débito, 3-Crédito`));

switch(formaPago)
{
    case 1: 
        {
            descuento = (importeCompra * 10)/100;
            break;
        }

    case 2:
        {
            descuento = (importeCompra * 5)/100;
            break;
        }

    case 3: 
        {
            descuento = 0;
            break;
        }   
    
    default:
        {
            descuento = 0;
            break;
        }
}

console.log (`Importe de Compra ${importeCompra}, Descuento: ${descuento}, Total a Pagar: ${importeCompra - descuento}`);



}