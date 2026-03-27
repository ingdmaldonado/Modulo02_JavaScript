// iNGRESAR EL IMPORTE 
let importeTotal = parseFloat(prompt("Ingrese el valor final, por favor"));

// CALCULAR DESCUENTO
let descuento = importeTotal * 0.15;

// CALCUAR VALOR TOTAL
let importeFinal = importeTotal - descuento ;

console.log("Importe original: ", importeTotal);
console.log("Descuento del 15%: ", descuento);
console.log("Precio final: ", importeFinal)