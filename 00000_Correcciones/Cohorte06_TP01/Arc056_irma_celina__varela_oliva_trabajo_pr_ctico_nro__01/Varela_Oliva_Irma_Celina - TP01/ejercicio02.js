/*  Ejercicio Nro. 02: 

    Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre 
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 15% como así también el importe restante final. 

*/

{
    let importeTotal = 0;
    importeTotal = Number(prompt(`Ingrese el importe total de la compra:`));
    console.log(`Importe de la compra:`, importeTotal);

    let descuento = 0;
    descuento = (importeTotal * 15) / 100;
    console.log(`Descuento: `, descuento);

    let importeFinal = 0;
    importeFinal = importeTotal - descuento;
    console.log(`El Importe final a pagar es: `, importeFinal);

}