let monto = parseFloat(prompt("importe de la compra:"));
let descuento = monto * 30;

if (descuento > 80000) {
    descuento = 80000;
}

let total = monto - descuento;

console.log("descuento:", descuento);
console.log("total a pagar:", total);