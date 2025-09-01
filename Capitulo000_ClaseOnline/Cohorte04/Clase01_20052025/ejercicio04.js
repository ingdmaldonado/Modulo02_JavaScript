
/* 
Ejercicio Nro. 4: Introducción y conceptos básicos
Realizar un programa que permita ingresar el importe 
total de una compra que realiza un cliente y 
sobre el mismo aplicarle un descuento del 15%. 
Mostrar por consola el importe total de la compra
 y el descuento del 15% como así también el importe
 restante final.
*/

{
    // bloque de codigos del programa //

    console.log(`la aplicación esta corriendo`);

    let importeDeLaCompra = 100000; // declarando e inicializando una variable

    console.log(importeDeLaCompra);

    /* las variables numericas no llevan el separador
    de miles y el separador decimal es el . 
    
        let total = 22800.40; 

    */


    let descuento = 0; // declarar e inicializar en cero
 
    descuento = (importeDeLaCompra * 15)/100;  // calculando el descuento a pagar
   
    console.log(descuento);

    let totalAPagar = 0; // declarando una variable para determinar el total a pagar

    totalAPagar = importeDeLaCompra - descuento; // el total a pagar es igual al importe de la compra menos el descuento

    console.log(totalAPagar);

    /* SINTAXIS Y SEMANTICA DEL LENGUAJE
        +
        LOGICA DE PROGRAMACIÓN => ORDEN LOGICO DE LOS PASOS
        que tengo que seguir para resolver un problema.

        LOGICA DE PROGRAMCIÓN => aprender
        a usar toda la sintaxis con un propósito.

            DESARROLLADORES FULL STACK => 

                logica de programación
                    +
                javaScript
                    +
                HTML5
                    +
                CSS
                    +
                BackEnd
                    +
                React 
    */

    console.log(`El importe de la compra es ${importeDeLaCompra} el descuento es ${descuento} y su total a pagar es ${totalAPagar}`);


}