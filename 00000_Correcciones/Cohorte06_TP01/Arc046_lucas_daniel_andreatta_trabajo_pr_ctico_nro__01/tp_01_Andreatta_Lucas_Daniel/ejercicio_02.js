/*

Ejercicio Nro. 02: 
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre 
el mismo aplicarle un descuento del 15%. Mostrar por consola el importe total de la compra y el descuento del 
15% como así también el importe restante final. 

*/

{

    let importeTotal = 0;
    let descuento = 0;
    let importeFinal= 0;

    importeTotal = Number(prompt(`Ingrese importe de la compra:`));

    if (importeTotal>0) {
        
        descuento = (importeTotal * 15)/100;

        importeFinal = importeTotal-descuento;

        console.log(`El importe de la compra es ${importeTotal}, el descuento es ${descuento}, y el importe final ${importeFinal}`);

    }else{
        
        console.log(`Error, ingrese un valor numerico y positivo`);
    }



}