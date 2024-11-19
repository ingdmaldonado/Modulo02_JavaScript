

/*

Un banco de plaza local, desea realizar
un simulador de plazos fijos, con la intención
de captar clientes y fomentar el ahorro,
para ello contratará un programador FULL STACK
que permita construir una aplicación web con 
el objetivo de simular las siguientes reglas de negocio

El gerente del Banco nos indica que la aplicación 
debería solicitar que ingrese

	1) El capital a Ingresar
	2) La cantidad de meses en los que realizará el plazo fijo

para Montos de Capital de:
 
 - 500.000 a 1.500.000 la rentabilidad será del 6% mensual
 - 1.500.000 hasta 5.000.000 la rentabilidad será del 7,5% mensual
 - 5.000.000 hasta 25.000.000 la rentabilidad será del 8,5% mensual
 - para valores que superen esa magnitud la tasa mensual será del 9,5%


    Recibe Depositos e Plazo fijo => paga una tasa. tasa pasiva

    Prestamos (compra autos, compras casas, ...) => tasa activa.

    Diferencia => Diferencia (tasa activa - tasa pasiva)

*/

{
    console.log("funcionando");

    // aqui declaro las variables y las inicializo //
    let capitalADepositar = 0; // declaro e inicializo
    let cantidadMesesDelPlazoFijo = 0; // declaro e inicializo
    let rentabilidadMensual = 0; 

    // aqui solicito que el usuario ingrese los datos //
    capitalADepositar = Number(prompt("Ingrese el capital a invertir"));
    cantidadMesesDelPlazoFijo = Number(prompt("Cantidad de Meses del Plazo fijo"));

    console.log(`Dinero a Invertir ${capitalADepositar} y la cantidad de meses ${cantidadMesesDelPlazoFijo}`);
    
    // evaluo el primer rango. entre 500 mil y 1.500 mil //
    if((capitalADepositar >= 500000) && (capitalADepositar <= 1500000))
    {
        rentabilidadMensual = capitalADepositar * 6/100;
        console.log("caso 1");
    }   

    if((capitalADepositar >= 1500000) && (capitalADepositar <= 5000000))
    {
        rentabilidadMensual = capitalADepositar * 7.5/100;
        console.log("caso 2");
    }

    if((capitalADepositar > 5000000) && (capitalADepositar <= 25000000))
    {
        rentabilidadMensual = capitalADepositar * 8.5/100;
        console.log("caso 3");
    }

    if(capitalADepositar > 25000000)
    {
        rentabilidadMensual = capitalADepositar * 9.5/100;
        console.log("caso 4");
    }

    /* este esquema. a simple vista es sencillo
    de realizar, pero en la práctica en el testing
    es muy probable que si no puse bien los límites
    de los intervalos. es muy probable que
    me equivoque y entre por varios condicionales
    simultaneamente */

    console.log(`Para su Capital Ingresado ${capitalADepositar} la rentabilidad mensual será ${rentabilidadMensual}`);


}