/* Ejercicio Nro. 08: Estructuras Condicionales (if/else)
Realizar un programa que permita ingresar la edad de una persona y determine si es niño (0 a 12 años),
adolescente (13 a 17 años), adulto (18 a 64 años), adulto mayor (más de 64 años).
 */


let edad= Number(prompt("ingrese la edad de la persona:"))
let categoria="";

edad >= 0 && edad <=12? categoria="niño": edad >13 && edad <=17? categoria="adolecente": edad >18 && edad <=64? categoria="adulto": categoria="adulto mayor";

console.log(`Tu edad es de ${edad} años y perteneces a la categoria: ${categoria}`);



