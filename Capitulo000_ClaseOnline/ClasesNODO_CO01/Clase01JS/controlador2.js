

/* Realizar un programa que me permita ingresar
dos variables numericas y que con ellas realice
la suma, la resta, la multiplicación, y la división 
*/


    let numero1 = 0; // declaro e inicializo

    let numero2; // declaro unicamente y su valor es indefinido.
    numero2 = 0; // aqui recién le asigno un valor.

    numero1 = Number(prompt("Ingrese el valor 1")); 
    numero2 = Number(prompt("Ingrese el valor 2"));

    /*
    let Nombre = "Daniel";
    let Apellido = "MESSI";
    let nombreCompleto = Nombre + Apellido;
    console.log(nombreCompleto);
    */




    let suma = 0;
    let resta = 0;
    let multiplicacion = 0;
    let division = 0;

    suma = numero1 + numero2;
    resta = numero1 - numero2;
    multiplicacion = numero1 * numero2;
    division = numero1 / numero2;

    console.log("El Numero1 ingresado es :",numero1);
    console.log("El Numero2 ingresado es :",numero2);

    console.log("El resultado de la suma es :",suma);
    console.log("El resultado de la resta es :",resta);
    console.log("El resultado de la multiplicación es :",multiplicacion);
    console.log("El resultado de la division es :",division);





