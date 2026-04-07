/*
Ejercicio Nro. 05: Estructuras Condicionales (if/else)
Realizar un programa que permita introducir un valor (X) y determinar si el mismo es PAR ó IMPAR.
*/

{

    let NumeroIngresado = 0;


    NumeroIngresado = Number(prompt(`Por favor ingrese el numero deseado:`));
    console.log(`El Nro ingresado es: ${NumeroIngresado}`);

      
    if(NumeroIngresado % 2 === 0 )
        {
            console.log(`El Nro ingresado evaluado por if/else ${NumeroIngresado} es PAR`);
        }
    else
        {
            console.log(`El Nro ingresado  evaluado por if/else ${NumeroIngresado} es IMPAR`);
        }    


        NumeroIngresado  = (NumeroIngresado % 2 === 0)? `El Nro ingresado evaluado Op Ternario ${NumeroIngresado} es PAR`:`El Nro ingresado evaluado Op Ternario ${NumeroIngresado} es IMPAR`;        
        console.log(NumeroIngresado)

    }

