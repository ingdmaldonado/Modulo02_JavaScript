
/* 

Ejercicio Nro. 08: Estructuras condicionales 
if/else
Realizar un programa que permita introducir 
tres valores y determine si la suma de los dos primeros es igual al tercer valor ingresado.

*/

{

    /* declaro e inicializo tres variables y les asigno el valor
    cero */

    let n1 = 0;
    let n2 = 0;
    let n3 = 0,suma = 0;


    n1 = Number(prompt("Ingrese el numero 1"));
    n2 = Number(prompt("Ingrese el numero 2"));
    n3 = Number(prompt("Ingrese el numero 3"));

    suma = n1 + n2;

    console.log(n1,n2,n3);
    
    if((n1 + n2)=== n3)
    {
        console.log("la suma de n1 + n2 es igual a n3");
    }
    else
    {
        console.log("la suma de n1 + n2 NO ES IGUAL A n3");
    }




}