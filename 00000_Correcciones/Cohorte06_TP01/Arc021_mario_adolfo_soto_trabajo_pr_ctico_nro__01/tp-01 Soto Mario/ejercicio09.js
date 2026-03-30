/*Una plataforma de venta de pasajes (terrestres) desea realizar una aplicación web que
permita realizar la venta de los mismos, para ello el dueño propone las siguientes reglas tratando
de promover las ventas.
 Si la cantidad de Pasajes es mayor a 3 y el importe total de la compra es mayor a 250.000,00 pesos,
se aplicará un descuento del 11% sobre el total de la compra.
 Si la cantidad de pasajes es mayor a 3 y el importe total de la compra es mayor a 500.000,00 pesos,
se aplicará un descuento del 15% sobre el total de la compra.
El Sistema debe registrar mínimamente estas variables:
 cantidad de pasajes
 importe pasaje
 total compra = cantidad de pasajes * importe pasaje */

{
let cantidadDePasajes =0;
cantidadDePasajes=Number(prompt(`ingrese la cantidad de pasajes que desea comprar`));
console.log(`ud compro ${cantidadDePasajes} pasaje`);
let importeDePasaje =0;
importeDePasaje=Number(prompt(`ingrese el precio del pasaje`));
console.log(`importe pasaje${importeDePasaje}`);

let importeTotalCompra = 0;
importeTotalCompra = cantidadDePasajes * importeDePasaje;
let descuento = 0;

if ((cantidadDePasajes > 3) && (importeTotalCompra > 250000))

    { descuento = (importeTotalCompra * 11)/100;

    }
else ((cantidadDePasajes > 3) && (importeTotalCompra > 500000))
    { descuento = (importeTotalCompra * 15)/100;

    }
//total a pagar
let totalApagar = importeTotalCompra - descuento;
console.log(`el importe total a pagar${totalApagar}`);
}
