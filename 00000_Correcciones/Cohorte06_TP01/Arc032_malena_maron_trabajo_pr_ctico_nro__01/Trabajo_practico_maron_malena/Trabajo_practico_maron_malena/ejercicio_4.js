/*Ejercicio Nro. 04: Estructuras Condicionales (if/else) 
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y 
también resuelva el mismo problema utilizando un operador ternario.*/
{
    let numero=0;
    let resultado=0;

    numero= Number(prompt`Ingrese un número`);
    if (numero >= 0 )
    {
        console.log(`El número ingresado es positivo`);
       

    }
    else 
        {
        console.log(`El número ingresado es negativo`)
    }
    resultado= (numero >=0) ? "El número es positivo" : "El número es negativo";
    console.log(numero);
    

    

     

}