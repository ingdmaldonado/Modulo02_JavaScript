
/*
    Ingrese un número y determine si es positivo o negativo usando una estructura condicional if/else y también resuelva el mismo problema utilizando un operador ternario. 
*/

let numero1 = 0;
let numero2 =0;

numero1 = Number (prompt (`Ingrese el numero 1:`))
numero2 = Number (prompt (`Ingrese el numero 2:`))

/*aca lo hago con condicionales*/
if (numero1 > 0) {
    console.log (`El numero 1 es Positivo `)
}else {
    console.log (`El numero 1 es Negativo`)
}

/*aca lo hago con el operador ternario*/

numero2 > 0 ? console.log (`El numero 2 es Positivo `): console.log (`El numero 2 es Negativo `);