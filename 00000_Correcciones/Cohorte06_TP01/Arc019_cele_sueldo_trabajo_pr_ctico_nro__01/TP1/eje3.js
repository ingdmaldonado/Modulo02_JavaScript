{


let luz = Number(prompt("Ingrese el gasto de luz"));
let internet = Number(prompt("Ingrese el gasto de internet"));
let agua = Number(prompt("Ingrese el gasto de agua"));

let nuevaLuz = luz * 1.125;
let nuevoInternet = internet * 1.07;
let nuevaAgua = agua * 1.03;

let total = nuevaLuz + nuevoInternet + nuevaAgua;

console.log("Gasto futuro de luz:", nuevaLuz);
console.log("Gasto futuro de internet:", nuevoInternet);
console.log("Gasto futuro de agua:", nuevaAgua);
console.log("Total futuro a pagar:", total);




}