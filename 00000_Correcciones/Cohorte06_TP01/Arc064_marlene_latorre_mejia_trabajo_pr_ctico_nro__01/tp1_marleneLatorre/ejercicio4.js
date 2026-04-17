/*
Ejercicio Nro. 04: Estructuras Condicionales (if/else)
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y también resuelva el mismo problema utilizando un operador ternario.


*/
// estructura condicionales (if/else)
{
    let numero = 0;

    numero = Number(prompt(`Ingrese un numero`));

    console.log(`El numero es: ${numero}`);

    if(numero > 0)
    {
        console.log(`Este numero es positivo`);
        
    }
    else 
    {
        if(numero === 0)
        {
            console.log(`Este numero es cero`);
        }
        else 
        {
        console.log (`Este numero es negativo`);
        }
    }

    // operador ternario

   let resultado = "";

   resultado = numero > 0? "positivo": numero < 0? "negativo": "cero"
   
   console.log(`Con operador ternario el numero es ${resultado}`);

}



