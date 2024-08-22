/*
Ejercicio Nro.13:
Realizar un programa que permita introducir cuatro números (A,B,C,D)  y determinar si la suma de los dos primeros (A + B) es mayor a la suma de los dos segundos (C + D).
*/

{
    let A = 0;
    let B = 0;
    let C = 0;
    let D = 0;

    A = Number(prompt("Ingrese el valor de A"));
    B = Number(prompt("Ingrese el valor de B"));
    C = Number(prompt("Ingrese el valor de C"));
    D = Number(prompt("Ingrese el valor de D"));

    /*
    let Suma1 = A + B;
    let Suma2 = C + D;*/

    if (A+B > C+D)
    {
        // A + B son mayores que C + D
        console.log(`La Suma A ${A} y B ${B} es mayor a la suma de C ${C} y D ${D}`);
    }
    else
    {
        if (A+B === C+D)
        {
            // por aqui serian iguales           
            console.log(`La Suma A ${A} y B ${B} son IGUALES a la suma de C ${C} y D ${D}`);
   
        }
        else
        {
            // por aqui A + B sería menor que C + D           
            console.log(`La Suma A ${A} y B ${B} es menor a la suma de C ${C} y D ${D}`);
        }

    }


}
