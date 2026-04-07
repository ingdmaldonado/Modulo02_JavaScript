/*
Ejercicio Nro. 04: Estructuras Condicionales (if/else)
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y también resuelva el mismo problema utilizando un operador ternario.

*/

{
    let NumeroIngresado = 0;

    NumeroIngresado = Number(prompt(`Ingrese un Numero`));
    console.log(`El numero ingresado es ${NumeroIngresado}`);

    if(NumeroIngresado > 0)
    {
        console.log(`El numero que ingreso (if/else) es POSITIVO`);
        NumeroIngresado = NumeroIngresado > 0? `El numero que ingreso (Op Ternario) es POSITIVO`:`El numero que ingreso  (Op Ternario) es NEGATIVO`;
        console.log(`${NumeroIngresado}`);
    }
    else
    {
        if(NumeroIngresado < 0)
        {
            console.log(`El numero que ingreso (if/else) es NEGATIVO`);
            NumeroIngresado = NumeroIngresado > 0? `El numero que ingreso (Op Ternario) es POSITIVO`:`El numero que ingreso  (Op Ternario) es NEGATIVO`;
            console.log(`${NumeroIngresado}`);
        }
        else
        {
            console.log(`El numero que ingreso (if/else) es CERO - (Neutro)`);
        }
            
    }    

      


}