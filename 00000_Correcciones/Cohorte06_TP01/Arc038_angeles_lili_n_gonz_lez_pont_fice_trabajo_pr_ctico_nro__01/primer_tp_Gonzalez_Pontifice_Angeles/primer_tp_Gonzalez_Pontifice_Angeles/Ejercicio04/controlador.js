/* 
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
también resuelva el mismo problema utilizando un operador ternario.
*/

//solicitar el numero de usuario//
let numero = 0;
numero = Number(prompt("Ingrese un número:"));
//visualización de if/else//
if(numero >= 0){
    console.log(`El número ingresado es positivo ${numero}`);
}
else{
    console.log(`El número ingresado es negativo ${numero}`);
}
//operador ternario//
let resultadoTernario = (numero > 0) ? "POSITIVO" : (numero < 0) ? "NEGATIVO" : "CERO";
console.log(`Usando operador ternario  El número es: ${resultadoTernario}`);