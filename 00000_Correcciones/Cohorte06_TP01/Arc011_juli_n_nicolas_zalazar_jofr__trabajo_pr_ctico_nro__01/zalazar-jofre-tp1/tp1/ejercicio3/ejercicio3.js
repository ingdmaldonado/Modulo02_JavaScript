//ejercicio3


let gastosLuz = parseFloat(prompt("Ingrese el gasto de luz"));
let gastosInternet = parseFloat(prompt("Ingrese el gasto de internet"));
let gastosAgua = parseFloat(prompt("Ingrese el gasto de agua"));

let aumentoLuz = gastosLuz + gastosLuz * 0.125;
let aumentoInternet = gastosInternet + gastosInternet * 0.07;
let aumentoAgua = gastosAgua + gastosAgua * 0.03;


console.log("El gasto de luz con aumento para el siguiente mes es: " + aumentoLuz);
console.log("El gasto de internet con aumento para el siguiente mes es: " + aumentoInternet);
console.log("El gasto de agua con aumento para el siguiente mes es: " + aumentoAgua);