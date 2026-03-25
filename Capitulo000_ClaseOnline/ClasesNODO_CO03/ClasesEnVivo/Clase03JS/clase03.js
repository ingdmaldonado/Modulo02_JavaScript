
/*
    Ejercicio Nro. 08: Estructuras condicionales if/else
	Realizar un programa que permita ingresar dos números 
    y que realice todas las comparaciones 
    lógicas que se pueden realizar entre ellos. 
    Como ser
	Numero1 > Numero2
	Numero1 < Numero2
	Numero1 == Numero2

*/

{
    /* declaración de variables,
    calculo y operaciones entre variables
    (sumas,restas, multiplicacion, division)
    calculo de porcentajes */

    let numero1 = 0;
    let numero2 = 0;

    /* 
        numero1 == numero2 // comparación para saber si los dos numeros son iguales
        numero1 > numero2 // si el numero1 es mayor al numero2
        numero1 < numero2 // si el numero1 es menor al numero2
        numero1 >= numero2 // si es mayor o igual
        numero1 <= numero2 
    */

    numero1 = Number(prompt("Ingrese el numero 1"));

    numero2 = Number(prompt("Ingrese el numero 2"));

    console.log(numero1,numero2);

    /* EVALUAMOS POR EL SIMBOLO MAYOR 

    if(numero1 > numero2) 
    { // lado verdadero de la expresión y comparación
        console.log(`El numero1 es mayor al numero 2`);
    }
    else
    { // lado falso de la expresión
        console.log(`El numero1 NO ES mayor al numero2`);
        // andres, virginia, 
    }

    */

    if(numero1 >= numero2) 
        { // lado verdadero de la expresión y comparación
            console.log(`El numero1 es mayor ó igual al numero 2`);
        }
        else
        { // lado falso de la expresión
            console.log(`El numero1 NO es mayor o igual al numero 2`);
            
        }


}