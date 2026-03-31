/*Ejercicio Nro. 09: Estructuras Condicionales (if/else) 
Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando de promover las ventas. 
- Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos, se aplicará un descuento del 11% sobre el total de la compra. 
- Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos, se aplicará un descuento del 15% sobre el total de la compra. 
El Sistema debe registrar mínimamente estas variables: 
- cantidad de pasajes 
- importe pasaje 
- total compra = cantidad de pasajes * importe pasaje.*/

{
    let precioPasaje = Number(prompt(`Ingrese precio unitario del pasaje:`));
    let cantidadPasajes = Number(prompt(`Ingrese cantidad de pasajes:`));
    let totalDeCompra = precioPasaje * cantidadPasajes;

    console.log(`Precio unitario: ${precioPasaje}`);
    console.log(`Cantidad: ${cantidadPasajes}`);
    console.log(`Importe de compra: ${totalDeCompra}`);

    if(cantidadPasajes > 3)
    {
        if(totalDeCompra > 50000)
        {
            let descuento = (totalDeCompra * 15) / 100;
            let totalAPagar = totalDeCompra - descuento;
            console.log(`Descuento: ${descuento}`);
            console.log(`Total a pagar: ${totalAPagar}`);
        }
        else if(totalDeCompra > 25000)
        {
            let descuento = (totalDeCompra * 11) / 100;
            let totalAPagar = totalDeCompra - descuento;
            console.log(`Descuento: ${descuento}`);
            console.log(`Total a pagar: ${totalAPagar}`);
        }
    }
    else
    {
        console.log(`No aplica descuento`);
        console.log(`Total a pagar: ${totalDeCompra}`);
    }
}