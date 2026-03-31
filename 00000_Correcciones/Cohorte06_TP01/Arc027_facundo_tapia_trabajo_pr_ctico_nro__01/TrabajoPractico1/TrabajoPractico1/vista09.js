/*Ejercicio Nro. 09: Estructuras Condicionales (if/else)
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
 total compra = cantidad de pasajes * importe pasaje*/

{
    let cantidadDePasajes = 0; 

    cantidadDePasajes = Number(prompt(`Ingrese la cantidad de pasajes`));

    let  importePasaje = 0;
    importePasaje = Number(prompt(`Ingrese el importe del pasaje`));

    let totalCompra = cantidadDePasajes * importePasaje;
    let descuento = 0;
    let totalFinal = totalCompra;

    if(cantidadDePasajes > 3)
    {
        if(totalCompra > 250000)
        {
            descuento = (totalCompra * 11) / 100;
        }
        else
        {
            if(cantidadDePasajes > 5)
            {
                descuento = (totalCompra * 15) /100;
            }
        }
    }

    totalFinal = totalCompra - descuento;

    console.log(`la cantidad de pasajes ${cantidadDePasajes},importe de pasajes ${importePasaje},Total de compra ${totalCompra}, el descuento ${descuento}, total a pagar es ${totalFinal}`);

}