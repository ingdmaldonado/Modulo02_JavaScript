/*
Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que 
permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando 
de promover las ventas.

 Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos, 
se aplicará un descuento del 11% sobre el total de la compra. 

 Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos, 
se aplicará un descuento del 15% sobre el total de la compra. 

El Sistema debe registrar mínimamente estas variables: 
 cantidad de pasajes 
 importe pasaje 
 total compra = cantidad de pasajes * importe pasaje
*/

{
    let cantidadBoletos = 0;
    let importeBoletos = 0;
    let descuento = 0;
    let totalCompra = 0;
    let totalAPagar = 0;

    cantidadBoletos = Number(prompt(`ingrese la cantidad de boletos que desea comprar`))
    importeBoletos = Number(prompt(`ingrese el precio del boleto`))

    totalCompra = cantidadBoletos * importeBoletos;

    if(cantidadBoletos > 3 && totalCompra > 500000)
    {
        console.log(`usted seleccionó 3 boletos con un precio de: $${importeBoletos}`)
        descuento = (totalCompra*15)/100;
        totalAPagar = totalCompra - descuento;
        console.log(`se aplicó un descuento de $${descuento}, el total a pagar es de: $${totalAPagar}`)
    }
    else
    {
        if(cantidadBoletos > 3 && totalCompra > 250000)
        {
        console.log(`usted seleccionó 3 boletos con un precio de: $${importeBoletos}`)
        descuento = (totalCompra*11)/100;
        totalAPagar = totalCompra - descuento;
        console.log(`se aplicó un descuento de $${descuento}, el total a pagar es de: $${totalAPagar}`)
        }
        else
        {
            totalAPagar = totalCompra;
            console.log(`el precio a pagar es de: $${totalAPagar}`)
        }
    }
        
}