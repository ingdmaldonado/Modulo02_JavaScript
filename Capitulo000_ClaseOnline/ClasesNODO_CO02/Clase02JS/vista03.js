
/*

Ejercicio Nro. 03:
	Realizar un programa que permita introducir tres valores y 
determine si la suma de los dos primeros es igual al tercer valor ingresado.
*/

{
    console.log("esto funcionando");

    // primera parte - declaramos e inicializamos variables //

    let numero1 = 0;
    let numero2 = 0;
    let numero3 = 0;

    let sumaDosPrimeros = 0;

    // segunda parte - capturamos los datos desde el teclado //

    numero1 = Number(prompt("ingrese el numero 1"));

    numero2 = Number(prompt("ingrese el numero 2"));

    numero3 = Number(prompt("ingrese el numero 3"));

    sumaDosPrimeros = numero1 + numero2;

    // tercera parte - mostramos los resultados por consola //

    console.log(`El numero 1 es ${numero1}`);
    console.log(`El numero 2 es ${numero2}`);
    console.log(`El numero 3 es ${numero3}`);

    // cuarta parte - evaluar las condiciones establecidas por el enunciado //


    // estructura condicional => if

    if(sumaDosPrimeros === numero3)
    {
        console.log(`El numero 1 es ${numero1}, el numero 2 es ${numero2} y el tercer valor es ${numero3} y se cumple la condición`);
    }
    else
    {
        console.log(`No se cumple la condición`);
    }

    // esto sería otra forma //

    if(numero1 + numero2 === numero3)
    {
        console.log(`El numero 1 es ${numero1}, el numero 2 es ${numero2} y el tercer valor es ${numero3} y se cumple la condición`);
    }
       

    /*

    uso = cuando declaro e inicializo una variable

    uso == cuando quiero hacer una comparación lógica y no me importa el tipo
    de dato.

    uso === cuando quiero hacer una comparación lógica
    donde evaluo no tan solo el valor, sino también 
    el tipo de datos.

    */

    let a = 20; // es un numero
    let b = "20"; // esto es un string o cadena de caracteres 
    let c = 10;

    if(a === b && b === c)
    {
        console.log("cuando ambas condiciones sean verdaderas");
    }

    if((a === b) || (a === c))
    {
        console.log("por este lado entrara cuando a sea igual a b ó a sea igual a c")
    }

    if(a === b)
    {
        console.log("son iguales");
    }
    else
    {
        console.log("son distintos");
    }

   

    /*
    
    - Las operaciones de comparación lógicas básicas >, <, =, >=, <=
 	. A > B => se lee A es mayor a B
	. A < B => se lee A es menor a B
	. A === B => se lee A es igual a B
	. A >= B => se lee A es mayor o igual que B
	. A <= B => se lee A es menor o igual que B
	. A == B => se lee A es igual a B sin importarle el tipo de datos
	. A === B => se lee A es igual a B considerando ademas del valor el tipo
	. A!=B => Compara solo el valor, no importa el tipo.
	. A!==B => Compara el valor y el tipo de dato (comparación estricta).

    */

    if(a > b)
    {
        console.log("a es mayor a b");
    }

    if(a < b)
    {
        console.log("a es menor que b");
    }

    if(a <= b)
    {
        console.log("a es menor o igual a b");
    }





    // modulo 02 => conceptos y fundamentos de programación con JS


    /* vanila javasCript */


    // modulo 3 => backe end node js

    // modulo 4 => programació front end con React




}