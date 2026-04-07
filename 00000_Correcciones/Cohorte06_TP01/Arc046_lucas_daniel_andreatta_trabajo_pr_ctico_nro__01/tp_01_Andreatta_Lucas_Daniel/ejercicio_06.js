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
    let descuento = 0;

    importeCompra = Number(prompt(`Ingrese importe de la compra`));

    descuento = (importeCompra*50)/100;
    descuento = descuento <= 80000 ? descuento : 80000; 

    importeFinal = importeCompra-descuento;

    console.log(`El importe inicial es ${importeCompra}, el descuento es ${descuento}, el importe final es ${importeFinal}`);

}