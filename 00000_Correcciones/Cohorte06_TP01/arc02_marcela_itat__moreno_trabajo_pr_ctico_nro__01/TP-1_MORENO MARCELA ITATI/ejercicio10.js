
let importeDeCompra = 0;

let tipoDePago = 0;

let operacionCorrecta = false;

let descuento =0;

let totalAPagar = 0;

importeDeCompra = Number(prompt(`Ingrese Importe de Compra`));

tipoDePago = Number(prompt(`Ingrese forma de pago: 1 - EFECTIVO --- 2 - DEBITO --- 3 - CREDITO`));


console.log(importeDeCompra, tipoDePago);

switch(tipoDePago)
{
    case 1: // EFECTIVO 10%
        {
            console.log(`Usted elegio la opcion 1 - EFECTIVO - 10%`);

            operacionCorrecta = true;

            descuento = (importeDeCompra * 10)/100;

            break;

        }
    case 2: // DEBITO - 5%
        {
            console.log(`Usted elegio la opcion 2 - DEBITO - 5%`);

            operacionCorrecta = true;

            descuento = (importeDeCompra * 5)/100;

            break;

        }
    case 3: // CREDITO - SIN DESCUENTO
        {
            console.log(`Usted elegio la opcion 3 - CREDITO - sin descuento`);

            operacionCorrecta = true;

            descuento = 0;

            break;

        }
    default:        
        {
            console.log(`Ingrese una opcion incorrecta`);
            
            descuento = 0;

            break;
        }
}

if(operacionCorrecta)
{
    totalAPagar = importeDeCompra - descuento;

    console.log(`Importe de compra: ${importeDeCompra} Descuento: ${descuento} Total a pagar ${totalAPagar}`);
    
}
else
{
    console.log(`Ud ingreso una opción incorrecta, intentelo nuevamente`)
}
