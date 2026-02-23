
/* 

    Ejercicio Nro.11: Estructuras condicionales 
    if/else / operador ternario
    Ingrese un número y determine si es positivo 
    o negativo usando una estructura condicional 
    if/else y también resuelva el mismo problema 
    utilizando un operador ternario.

*/

{
    let numero = 5;

    let esPar = numero % 2 === 0 ? true:false;

    console.log(`es un numero par ${esPar}`);

}

{
    let numero = 8;

    let esPar = numero % 2 === 0 ? "par":"impar";

    console.log(`es un numero ${esPar}`);

}

/*
Ejercicio Nro.19: Estructuras condicionales if/else, 
módulos.
Escribir un algoritmo que determine si un número 
N es divisible por M.

*/

{
    let dividendo = 7;

    let divisor = 7;

    let esMultiploDe = dividendo % divisor === 0 ? true:false;

    console.log(`es multiplo de ${esMultiploDe}`);

}

/* 
    Ejercicio Nro.21: Estructuras condicionales if/else / 
    Operadores ternarios

    Realizar un programa que permita el ingreso de dos números 
    (A,B) y realizar el producto entre ambos (A * B); 
    si el resultado del producto es mayor a 100 
    calcular el 10% del resultado y
    mostrarlo por pantalla; caso contrario calcular 
    el 5% del producto y mostrarlo por pantalla.
    
    Ejemplo1: Si al programa le ingresamos los números (10 y 15) el resultado del producto será igual a 150 (como el resultado supera los 100 debemos obtener el 10% y mostrarlo por pantalla); en este caso el 10% de 150 es igual a 15.
    Ejemplo2: Si al programa le ingresamos los números (8 y 5) el resultado del producto será igual a 40 (como el resultado NO SUPERA los 100 debemos obtener el  5% y mostrarlo por pantalla); en este caso el 5% de 40 es igual a 2.

*/

    {
        let A = 20;
        let B = 2;

        let descuento = A * B > 100 ? (A*B)*10/100:(A*B)*5/100;

        console.log(`el descuento es ${descuento}`);

    }

/*
    Ejercicio Nro. 22: Estructura condicional switch
	Realizar un programa que permita ingresar el número 
    de día en formato numérico, es decir 1,2,3 … 7 y que 
    el programa indique si es 
    LUNES, MARTES, MIERCOLES … DOMINGO.
	Utilizar la estructura switch
*/

    {
        let numeroDeDia = 3;

        switch(numeroDeDia)
        {
            case 1:
                {
                    console.log("lunes");
                    break;
                }
            case 2:
                {
                    console.log("martes");
                    break;
                }
            case 3:
                {
                    console.log("miercoles");
                    break;
                }
            case 4:
                {
                    console.log("jueves");
                    break;
                }
            case 5:
                {
                    console.log("viernes");
                    break;
                }
            case 6:
                {
                    console.log("sabado");
                    break;
                }
            case 7:
                {
                    console.log("domingo");
                    break;
                }
            default:
                {
                    console.log("dia no válido");
                    break;
                }
        }
    }

    /* Descuento del OneShoot del 50% */
    {
        let importeDeCompra = 250000;

        const topeCompra = 160000

        let descuentoOneShoot = importeDeCompra >= topeCompra ? 80000:(importeDeCompra * 50)/100;

        let totalAPagar = importeDeCompra - descuentoOneShoot;

        console.log(`importe compra ${importeDeCompra} descuento ${descuentoOneShoot} total a pagar ${totalAPagar}`);

    }

    /* Descuentos por tipo de Servicio */

    {
        let tipoDeServicio = "STANDARD";
        let precio = (tipoDeServicio === "BASICA") ? 5 :
                     (tipoDeServicio === "STANDARD") ? 10 :
                     (tipoDeServicio === "PREMIUM") ? 15 : 20;
        
        console.log(`El precio de la suscripción es: $${precio}/mes`);

    }

    /* 
    
        Ejercicio Nro. 25: Estructuras condicionales if/else / 
        operadores ternarios
        Realizar una aplicación web que permita ingresar la nota que obtuvo un alumno en una evaluación y a partir de ella determinar una calificación con letras siguiendo la siguiente tabla de 
        A (9-10)
        B (7-8)
        C (5-6)
        D (3-4)
        F (1-2)
    */
   
    {
        let nota = 7;

        let calificacionEnLetras = 
            nota >= 0 && nota <= 2 ? 'F':
            nota >= 3 && nota <= 4 ? 'D':
            nota >= 5 && nota <= 6 ? 'C':
            nota >= 7 && nota <= 8 ? 'B':
            nota >= 9 && nota <= 10 ? 'A':'NO VALIDO';
            
        console.log(`nota ${nota} y calificacion ${calificacionEnLetras}`);



    }
