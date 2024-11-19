
/* Este ejercicio tiene como objetivo
que el usuario ingrese dos numeros
y realice la evaluación para determinar
cual de los dos es el mayor, menor o igual
*/
{
    // a > b
    // a === b
    // a < b

    let numero1 = 0; 
    let numero2 = 0;

    numero1 = Number(prompt("ingrese el numero 1"));
    numero2 = Number(prompt("ingrese el numero 2"));

    // interpolación de string => javaScript 2015 adelante
    console.log(`El numero 1 ingresado es ${numero1}`);
    console.log(`El numero 2 ingresado es ${numero2}`);

    if(numero1 > numero2) // cuando numero1 sea el mas grande
    {
        console.log(`El numero 1: ${numero1} es mayor al numero 2: ${numero2}`);
    }
    else
    {
        if(numero1 < numero2) // cuando el numero2 sea el mas grande
        {
            console.log(`El numero 1: ${numero1} es menor al numero 2: ${numero2}`);
        }
        else
        {
            console.log(`ambos numeros son iguales ${numero1}`);
        }
    }


}

