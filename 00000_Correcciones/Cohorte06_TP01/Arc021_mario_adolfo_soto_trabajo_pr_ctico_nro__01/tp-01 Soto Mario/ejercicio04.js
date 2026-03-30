/*Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y
también resuelva el mismo problema utilizando un operador ternario */
{
let numero = Number(prompt(`ingrese un numero`));

if(numero>0){ console.log(`El numero ${numero} es positivo `);

}
else{
    console.log(`El numero ${numero} es negativo `)
}
//operador ternario 
let resultado = (numero>0)? `El numero ${numero} es positivo` : `El numero ${numero} es negativo `;
console.log=(resultado);
}