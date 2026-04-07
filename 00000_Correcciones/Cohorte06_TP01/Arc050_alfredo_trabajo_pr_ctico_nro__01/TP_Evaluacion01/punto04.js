/*Ejercicio Nro. 04: Estructuras Condicionales (if/else)
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y también resuelva el mismo problema utilizando un operador ternario. */

{



    let numero=0;


    numero=Number(prompt(`Ingrese un numero.`));


    if (numero > 0)
    {
        console.log(`El numero ${numero} es positivo.`);    
    }
    else if (numero < 0)
    {
       console.log(`El numero ${numero} es negativo.`);  
    }
    else 
    {
        console.log(`El numero  es cero: ${numero}`);
    }



}


/*Operador ternario */


{

    let numero=0;
    let resultado=0;


    numero=Number(prompt(`Ingrese un numero:`));

    resultado=numero>0?`El numero es positivo`: numero<0? `El numero es negativo`: `El numero es cero`;


    console.log(`${resultado}`);

   
}