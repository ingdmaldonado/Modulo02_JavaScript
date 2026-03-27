{
let importeDeLaCompra = 0;  
let TipoDePago = 0; 

importeDeLaCompra = prompt(`señor indique imoporte de la compra`);
TipoDePago = Number(prompt(`indique tipo de pago 1-Efectivo, 2 - debito, 3- credito `));

let OperacionCorrecta = false; 
let descuento = 0; 

switch(TipoDePago)

{
    case 1:
        {
            console.log(`ud. elegio efectivo`);
            OperacionCorrecta = true;
            descuento = (importeDeLaCompra * 10)/100;
            break;
        }

    case 2:
        {
            console.log(`ud. elegio debito`);
            OperacionCorrecta = true;
            descuento = (importeDeLaCompra * 5)/100;
            break;
        }

    case 3:
        {
            console.log(`ud. elegio credito`);
            OperacionCorrecta = true;
            descuento = 0;
            break;
        }
    default:
        {
            console.log(`ingrese una opcion correcta`);
            OperacionCorrecta = false;
            descuento = 0;
            break;
        }
}
let totalAPagar = 0;

if(OperacionCorrecta)
{
    totalAPagar = importeDeLaCompra - descuento;

    console.log(`importe de la compra: ${importeDeLaCompra} Descuento: ${descuento} Total a pagar: ${totalAPagar}`);
}
else
{
    console.log(`opcion incorrecta, intente nuevamente`)
}

}
