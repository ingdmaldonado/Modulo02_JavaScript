/*
Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que
permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando de promover las ventas.
 Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos,se aplicará un descuento del 11% sobre el total de la compra.
 Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos,se aplicará un descuento del 15% sobre el total de la compra.
El Sistema debe registrar mínimamente estas variables:
 cantidad de pasajes
 importe pasaje
 total compra = cantidad de pasajes * importe pasaje
*/

{

let cantidadPasajes = 0;
let precioPasaje = 0;
let descuento = 0;
let totalCompra = 0;
 
cantidadPasajes = Number(prompt('Ingrese la cantidad de pasajes a comprar:'));
console.log('Cantidad de Pasajes:',cantidadPasajes);

precioPasaje = Number(prompt('Ingrese el precio del pasaje:'));
console.log('Precio del pasaje:',precioPasaje);

totalCompra = (cantidadPasajes * precioPasaje);

if((cantidadPasajes <= 3) && (precioPasaje <= 250000))
    {
    console.log('Total a pagar:', totalCompra);
    }    
else
{
        if((cantidadPasajes > 3) && (precioPasaje > 250000) &&(precioPasaje <= 500000))
        {
        let descuento = (precioPasaje * 11)/100;
        let totalCompra = (precioPasaje - descuento);
        console.log('Descuento:', descuento);
        console.log('Total a Pagar:', totalCompra);    
        };

        if((cantidadPasajes > 3) && (precioPasaje > 500000))
        {
        let descuento = (precioPasaje * 15)/100;
        let totalCompra = (precioPasaje - descuento);
        console.log('Descuento:', descuento);
        console.log('Total a Pagar:', totalCompra);    
        };               
}

}