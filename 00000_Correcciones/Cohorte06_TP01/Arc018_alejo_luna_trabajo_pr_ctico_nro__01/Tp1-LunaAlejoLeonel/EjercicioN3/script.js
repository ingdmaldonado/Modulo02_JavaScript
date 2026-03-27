let luz = Number(prompt("Ingrese el gasto de luz"));
let internet = Number(prompt("Ingrese el gasto de internet"));
let agua = Number(prompt("Ingrese el gasto de agua"));

// calculo los aumentos
let luzFinal = luz * 1.125;
let internetFinal = internet * 1.07;
let aguaFinal = agua * 1.03;

// calculo la suma total
let total = luzFinal + internetFinal + aguaFinal;

console.log("Total a pagar el próximo mes es: " + total);