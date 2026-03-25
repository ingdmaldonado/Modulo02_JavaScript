
/*

Ejercicio Nro. 4:
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 15% como así también el importe restante final.

*/

{

    /* Primer Bloque => las ENTRADAS */
    let importeTotalCompra = 0; // camel case

    importeTotalCompra = Number(prompt("Por favor ingrese el monto de la compra"));

    /* Segundo Bloque => Proceso */
    let descuento15PorCiento = 0; // declaro e inicializo 
    descuento15PorCiento = (importeTotalCompra * 15) / 100; // hago el calculo del descuento
    
    let totalAPagar = 0; // declaro e inicializo

    totalAPagar = importeTotalCompra - descuento15PorCiento;

    /* Tercer Bloque => Salidas */

    console.log(`El total ingresado es ${importeTotalCompra}`);

    console.log(`Total de Compra: ${importeTotalCompra} descuento ${descuento15PorCiento} total a pagar ${totalAPagar}`)

}

{
    //let miClubDeFutbol = "CLUB ATLETICO BOCA JUNIORS";

    var elOtroClub = "CLUB ATLETICO RIVER PLATE";
}

