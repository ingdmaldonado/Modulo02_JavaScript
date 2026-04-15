/*
Ejercicio Nro. 02:
Realizar un programa que permita ingresar el importe total de una compra que realiza un cliente y sobre
el mismo aplicarle un descuento del 15%.
Mostrar por consola el importe total de la compra y el descuento del
15% como así también el importe restante final.
*/
{
    let importeTotal = 0;
    
    importeTotal = Number(prompt("Ingrese el importe total de la compra:"));
    
    let descuento = 0;
    let importeFinal = 0;
    
    descuento = importeTotal * 0.15;
    importeFinal = importeTotal - descuento;
    
    console.log(`El importe total de la compra es $${importeTotal}, el descuento aplicado del 15% es $${descuento} y el importe restante final a pagar es $${importeFinal}`);
}