

/*
Realizar un programa utilizando JavaScript que permita ingresar 
dos números a través de la sentencia prompt y determinar mediante 
estructuras condicionales (if/else).
Cuál de los dos números ingresados es mayor y mostrar el caso
que ambos sean iguales.
*/

{
    /* declaramos e inicializamos los dos números*/

    let Numero1 = 0;
    let Numero2 = 0;
    
    /* solicitamos que ingrese el número 1 por teclado */
    Numero1 = Number(prompt("Ingrese el número 1"));

    /* solicitamos que ingrese el número 2 por teclado */
    Numero2 = Number(prompt("Ingrese el número 2"));

    if(Numero1 > Numero2) // Si el Numero1 es mayor al Numero2
    {
        // si la condición se cumple se ejecuta este código
        console.log("El número mayor es el Numero1 ",Numero1," El menor es ",Numero2);

    }
    else
    {
        if(Numero2 > Numero1) // si el Numero 2 es mayor al Numero 1
        {
            console.log("El número mayor es el Numero2 ",Numero2, "El menor es ",Numero1);
        }
        else // por defecto, por descarte son iguales
        {
            console.log("Los números son iguales");
        }
    }
}