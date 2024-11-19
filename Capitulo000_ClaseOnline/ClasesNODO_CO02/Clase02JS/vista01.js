/*
Ejercicio Nro. 01: Desarrollar un programa con
javaScript que me permita ingresar por teclado
dos valores y que con esos valores realice las
operaciones matemáticas básicas como ser

	- operaciones de cálculo básicas con variables
		* suma
		* resta
		* multiplicación
		* división. (no se puede dividir por cero).

*/

{
    console.log("estamos vinculados");

    // declarando e inicializando los valores //
    let numero1 = 0; //declaro e inicializo en cero
    let numero2 = 0; // declaro e inicializo en cero

    // en esta parte estoy capturando esos valores //
    numero1 = Number(prompt("Por favor ingrese el numero 1"));
    numero2 = Number(prompt("Por favor ingrese el numero 2"));

    // en esta parte quiero verificar que realmente se ingresaron los datos //
    console.log(numero1);
    console.log(numero2);

    // inteporlación de string => con ALT + 96 //

    console.log(`El primer valor ingresado es ${numero1}`);
    console.log(`El segundo valor ingresado es ${numero2}`);

    // en esta parte crearemos variables de cálculo auxiliar //

    let suma = 0;
    let resta = 0;
    let producto = 0;
    let division = 0;

    // en esta parte lo que haremos es realizar los calculos propiamente dichos //

    suma = numero1 + numero2;
    resta = numero1 - numero2;
    producto = numero1 * numero2;
    division = numero1 / numero2 ;

    // aqui vamos a mostrar las salidas //

    console.log(`los numeros ingresados son ${numero1} y ${numero2} y la suma es: ${suma}`);
    console.log(`los numeros ingresados son ${numero1} y ${numero2} y la resta es: ${resta}`);
    console.log(`los numeros ingresados son ${numero1} y ${numero2} y la multiplicación es: ${producto}`);
    console.log(`los numeros ingresados son ${numero1} y ${numero2} y la division es: ${division}`);

}