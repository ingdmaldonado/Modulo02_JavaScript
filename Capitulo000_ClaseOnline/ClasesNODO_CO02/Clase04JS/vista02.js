
/* un programa que permita
a un cajero de un local comercial
realizar cobros con tarjeta de crédito.
deberá ingresar el importe a cobrar
e indicar conque tarjeta de crédito abonara.

    1 - VISA BNA - Tarjeta de Banco Nacion - 0% recargo
    2 - VISA FRANCES - Tarjeta - 5% recargo
    3 - MASTERCARD MACRO - 12,5% recargo
    4 - NARANJA - 17% recargo.
*/
{
    // estas variables son globales a todo este bloque de codigo//
    let importeFacturado = 0; // ingresar el importe
    let tarjetaDePago = 0; // indicar la tarjeta de credito
    let recargoTarjeta = 0; // aqui voy a almacenar el recargo dependiendo de la tarjeta de credito

    importeFacturado = Number(prompt("Indique el importe facturado"));
    tarjetaDePago = Number(prompt("por favor indique tarjeta 1.visa bna 2.visa frances. 3. master macro."));

    console.log(importeFacturado);
    console.log(tarjetaDePago);

    switch(tarjetaDePago)
    {
        case 1:
            {
                console.log("visa del banco nacion");
                recargoTarjeta = 0;
                break;
            }
        case 2:
            {
                console.log("visa del banco frances");
                recargoTarjeta = (importeFacturado * 5)/100;
                break;
            }
        case 3:
            {
                console.log("mastercard del banco macro");
                recargoTarjeta = (importeFacturado * 12.5)/100;
                break;
            }
        case 4:
            {
                console.log("tarjeta naranja");
                recargoTarjeta = (importeFacturado * 17)/100;
                break;
            }
        default:
            {
                console.log("tarjeta o medio no aceptado");
                recargoTarjeta = 0;
            }
    }

    let totalACobrar = importeFacturado + recargoTarjeta;
    console.log(`El importe facturado es ${importeFacturado} el recargo es ${recargoTarjeta} y total a pagar ${totalACobrar}`);
}