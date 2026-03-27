// INGRESAR GASTOS 
let luz = parseFloat(prompt("Ingrese valor de la Luz"));
let internet = parseFloat(prompt("Ingrese valor del Internet"));
let agua = parseFloat(prompt("Ingrese valor del Agua"))

// AGREGAR IMPUESTOS
let luzAumento = luz * 0.125;
let internetAumento = internet * 0.07;
let aguaAumento = agua * 0.03;

// NUEVOS VALORES
let luzFinal = luz + luzAumento;
let internetFinal = internet + internetAumento;
let aguaFinal = agua + aguaAumento;

// VALOR FINAL
let total = luzFinal + internetFinal + aguaFinal

console.log("Luz con aumento: $" + luzFinal.toFixed(2));
console.log("Internet con aumento: $" + internetFinal.toFixed(2));
console.log("Agua con aumento: $" + aguaFinal.toFixed(2));
console.log("Total a pagar el próximo mes: $" + total.toFixed(2));