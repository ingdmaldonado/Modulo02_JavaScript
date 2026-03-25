
/* 
Banco Nación de la República Argentina, tiene una promoción muy importante para sus clientes
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente,
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil
pesos argentinos).
Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento
sabiendo que no se puede pasar el límite establecido.
 */

/* {
    let importeDeCompra = 0;
    importeDeCompra = Number(prompt("Ingrese el Importe de la Compra 2"));

    let descuentoDefinitivo = importeDeCompra >= 160000 ? 80000:(importeDeCompra*50)/100;

    let netoAPagar = importeDeCompra - descuentoDefinitivo;

    console.log(`Importe: ${importeDeCompra} descuento ${descuentoDefinitivo} neto a pagar ${netoAPagar}`);
} */

{
    let importeDeCompra = 0;
    importeDeCompra = Number(prompt("Ingrese el Importe de la Compra 1"));

    let descuentoOneShot = 0;
    descuentoOneShot = (importeDeCompra * 50)/100;

    let descuentoDefinitivo = 0;

    const TOPE = 80000 

    if(descuentoOneShot > TOPE)
    {
        descuentoDefinitivo = TOPE;
    }
    else
    {
        descuentoDefinitivo = descuentoOneShot;
    }

    let importeNetoAPagar = 0;
    importeNetoAPagar = importeDeCompra - descuentoDefinitivo;

    console.log(`compra: ${importeDeCompra} descuento:${descuentoDefinitivo} neto a pagar: ${importeNetoAPagar}`);
}