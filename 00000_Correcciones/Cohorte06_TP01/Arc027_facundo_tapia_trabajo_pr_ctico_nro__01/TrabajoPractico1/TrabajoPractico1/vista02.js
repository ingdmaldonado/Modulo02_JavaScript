/*Ejercicio Nro. 02:
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del
15% como así también el importe restante final.*/

{
    let  importeCompra = 0;
    
    importeCompra = Number(prompt(`Por favor ingrese el importe de la compra`));


    let descuento = 0;

    let = importeRestante = 0 

    descuento = (importeCompra * 15) /100;

    importeRestante = importeCompra - descuento;

    console.log(`El importe de la compra es: ${importeCompra}, el descuento : ${descuento}, el importe restante ${importeRestante}`);



}