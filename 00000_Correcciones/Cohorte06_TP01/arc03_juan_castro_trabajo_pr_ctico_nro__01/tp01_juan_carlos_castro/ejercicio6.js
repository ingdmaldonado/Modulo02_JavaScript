/*

Ejercicio Nro. 06: Estructuras Condicionales (if/else) 
 Banco  Nación  de  la  República  Argentina,  tiene  una  promoción  muy  importante  para  sus  clientes 
denominada “one shot” que consta en realizar un importante de descuento del 50% en las compras del cliente, 
teniendo en cuenta que el descuento máximo a otorgar (descuento tope) es equivalente a 80.000,00 (ochenta mil 
pesos argentinos). 
 Realice un programa que permita introducir el valor de la compra y calcular el porcentaje de descuento 
sabiendo que no se puede pasar el límite establecido. 

*/

{

    let importeCompra = 0;
    let descuento = 50;
    let totalDescuento = 0;
    let totalPagar = 0;


    importeCompra = Number(prompt(`Ingrese el monto de compra:`));

    totalDescuento = (importeCompra * descuento) / 100;

    if (totalDescuento > 80000) {
        totalDescuento = 80000
        totalPagar = importeCompra - totalDescuento;
    } else {
        totalPagar = importeCompra - totalDescuento;
    }

    console.log(`El importe a pagar es: ${totalPagar}, el importe de la compra es ${importeCompra}, el todal del descuento es: ${totalDescuento}`)

}