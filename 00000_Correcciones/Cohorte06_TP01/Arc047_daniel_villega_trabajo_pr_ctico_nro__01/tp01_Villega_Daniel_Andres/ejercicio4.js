/*Ejercicio Nro. 04:
 Estructuras Condicionales (if/else)
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
también resuelva el mismo problema utilizando un operador ternario.*/

{

    let numero = 0; 
     numero = Number(prompt(`igrese un numero`));


if (numero >= 0)
     {
    console.log("El número es positivo ");
} 
else 
    {
    console.log("El número es negativo");
}


let resultado = (numero >= 0) ? "Positivo " : "Negativo";
console.log(resultado);
}