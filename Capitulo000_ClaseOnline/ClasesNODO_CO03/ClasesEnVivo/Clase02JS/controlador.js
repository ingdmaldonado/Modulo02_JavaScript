
/*
Ejercicio Nro. 2:
Realizar un programa que permita el Ingreso de 2 (dos números) (A y B) utilizando variables y realice las siguientes operaciones.
- Muestre la suma de ambos (A + B)
- Muestre la resta del primero (A – B)
- Muestre el Producto de ambos (A * B)
- Muestre el Cociente entre ambos (A / B)
Nota: En este último caso, verificar que sucede cuando B es igual a cero. Que sucede con el programa ¿?.
*/

{
    /* siempre declarar e inicializar las variables */

    let A = 0; // declarando e inicializando un valor
    let B = 0; // declarando e inicializando un valor

    // con prompt permito que el usuario ingrese el valor por teclado

    // con Number() lo que hago es convertir ese valor en numero
    A = Number(prompt("Por favor ingrese el primer valor"));

    console.log("El primer valor ingresado por el usuario",A);

    B = Number(prompt("Por favor ingrese el segundo valor"));

    console.log("El segundo valor ingreado por el usuario",B);

    console.log("Primer Valor Ingresado",A,"Segundo Valor Ingresado",B);

    /* aqui estoy creando 
    y declarando variables e incialializandolas.
    a todas con el valor 0 */

    let SUMA = 0;
    let RESTA = 0;
    let MULTIPLICACION = 0;
    let DIVISION = 0;

    /* aqui estoy haciendo las 4 operaciones
    aritméticas simples. las basicas */

    SUMA = A + B;
    RESTA = A - B;
    MULTIPLICACION = A * B;
    DIVISION = A / B;

    /* Debería mostrar las Salidas */

    console.log("La Suma es",SUMA); // javasCript es caseSensitive.  

    console.log("La Resta es",RESTA);

    console.log("La Multiplicacion",MULTIPLICACION);

    console.log("La Division es",DIVISION);

    /* INTERPOLACIÓN DE STRING */

    /* Los Backticks se consigu8en con ALT + 96 */

    
    console.log(`La suma es: ${SUMA} La resta es:${RESTA} La multiplicacion es:${MULTIPLICACION} La división es : ${DIVISION}`);


}