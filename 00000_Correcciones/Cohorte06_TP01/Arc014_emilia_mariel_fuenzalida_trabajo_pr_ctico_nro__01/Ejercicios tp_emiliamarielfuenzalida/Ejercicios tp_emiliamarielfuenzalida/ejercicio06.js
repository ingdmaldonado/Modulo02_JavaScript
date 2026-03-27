/*
---------Ejercicio Nro. 06----------
-----------Estructuras Condicionales (if/else)----------


Banco Nación de la República Argentina, tiene una promoción 
muy importante para sus clientes 
denominada “one shot” que consta en realizar 
un importante de descuento del 50% en las compras del cliente, 
teniendo en cuenta que el descuento máximo a otorgar 
(descuento tope) es equivalente a 80.000,00 (ochenta mil 
pesos argentinos). 
Realice un programa que permita introducir el valor 
de la compra y calcular el porcentaje de descuento 
sabiendo que no se puede pasar el límite establecido. 


*/

{
    let importeDeCompra = 0;
    let descuento = 0;
    let totalAPagar = 0;

    importeDeCompra = Number(prompt(`Ingresar importe de compra:`));

    if ((importeDeCompra <= 160000) && (importeDeCompra > 0))
    {
        descuento = (importeDeCompra * 50) / 100;
        totalAPagar = importeDeCompra - descuento;
    }
    else {
        if (importeDeCompra > 160000) 
        {
            descuento = 80000;
            totalAPagar = importeDeCompra - descuento;
        }
        else
        {
            console.log(`Monto inválido`);
        }

    }

    console.log(`Importe de compra: $${importeDeCompra} Descuento: $${descuento} Total a pagar: $${totalAPagar}`);
}