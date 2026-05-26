/* Ejercicio N3 */


let gastoenergia = Number(prompt("Ingrese el gasto de energia en pesos:"));

let gastoComunicacion = Number(prompt("Ingrese el gasto de comunicacion en pesos:"));

let gastoAgua = Number(prompt("Ingrese el gasto de agua en pesos:"));


let incrementoenergia = gastoenergia * 0.12;

let incrementoComunicacion = gastoComunicacion * 0.7;

let incrementoAgua = gastoAgua * 0.3;

console.log("El gasto total de energia del proximo mes es: " + incrementoenergia);
console.log("El gasto total de comunicacion del proximo mes es: " + incrementoComunicacion);
console.log("El gasto total de agua del proximo mes es: " + incrementoAgua);
