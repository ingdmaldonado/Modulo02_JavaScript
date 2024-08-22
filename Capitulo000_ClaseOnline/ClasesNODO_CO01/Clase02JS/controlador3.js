
/*
Ejercicio Nro. 04:
Realizar un programa que permita introducir tres valores y determine si la suma de los dos primeros es igual al tercer valor ingresado.
*/

{
    let Numero1 = 0;
    let Numero2 = 0;
    let Numero3 = 0;
    let suma = 0;

    Numero1 = Number(prompt("Ingrese el valor 1"));
    console.log("El Valor Ingresado 1 es ",Numero1);

    Numero2 = Number(prompt("Ingrese el valor 2"));
    console.log("El Valor Ingresado 2 es ",Numero2);
    
    suma = Numero1 + Numero2;
    console.log("La suma de los dos valores es ",suma);

    Numero3 = Number(prompt("Ingrese el valor 3"));
    console.log("El Valor Ingresado 3 es ",Numero3);

    /*
        = (unicamente esto se utiliza para asignar valores)
        == (comparacion lógica entre dos valores)
        === (comparacion logica entre dos valores pero ademas se fija que sean del mismo tipo)
    */

    if((Numero1 + Numero2) === Numero3)
    {
        console.log("La suma de los dos primeros valores es igual al tercer valor ");
    }
    else
    {
        console.log("La suma de los dos primeros valores no es igual al tercer valor");
    }


    if("2" === 2)
    {
        console.log("son iguales");
    }
    else
    {
        console.log("son distintos");
    }


}