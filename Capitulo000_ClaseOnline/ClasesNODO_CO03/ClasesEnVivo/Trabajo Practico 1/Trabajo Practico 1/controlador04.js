

/* 
Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
también resuelva el mismo problema utilizando un operador ternario. 
*/

{
    let numero =0;
    numero = prompt("Ingrese un número por favor");
     if (numero == 0){
        console.log(numero + " es un numero neutro")
     }
     else if (numero > 0){
        console.log(numero + " es un numero POSITIVO")  
     }
     else{
        console.log(numero + " es un numero negativo")
     }
}
