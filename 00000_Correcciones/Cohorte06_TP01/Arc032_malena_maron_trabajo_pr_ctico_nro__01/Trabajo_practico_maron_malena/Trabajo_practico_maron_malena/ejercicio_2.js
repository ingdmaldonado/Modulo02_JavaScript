/* Ejercicio Nro. 02: 
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre 
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 
15% como así también el importe restante final. */


{
    let importeTotal = 0;
    let descuento = 0;
    let importeRestante = 0;
    descuento = (importeTotal * 15)/100;
    importeRestante= importeTotal - descuento;
    importeTotal= Number(prompt`Ingrese importe de la compra`)

    descuento = (importeTotal * 15)/100;
    importeRestante= importeTotal - descuento;
    

    console.log(`Importe de la compra ${importeTotal}`)
    console.log(`Descuento ${descuento}`);
    console.log(`Importe restante ${importeRestante}`);


}