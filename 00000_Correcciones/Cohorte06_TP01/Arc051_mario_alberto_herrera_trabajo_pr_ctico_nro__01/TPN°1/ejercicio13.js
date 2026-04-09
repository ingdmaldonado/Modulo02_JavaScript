/*
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos
rubros comerciales.
Tabla de descuentos:
Rubro Descuento Tope máximo
Vestimenta 20% $80.000
Perfumería 20% $80.000
Librería 30% $90.000
Electrodomésticos 15% $70.000
Calzado 20% $80.000
El programa debe:
1. Solicitar el rubro del comercio.
2. Solicitar el importe de la compra.
3. Calcular el descuento correspondiente.
4. Verificar si el descuento supera el tope del rubro. Si lo supera, aplicar solo el tope.
5. Mostrar:
 - rubro
 - importe de la compra
 - descuento aplicado
 - importe final a pagar.
*/

let rubro = prompt("Ingrese el rubro (Vestimenta, Perfumería, Librería, Electrodomésticos, Calzado)");
let importecompra = Number(prompt("Ingrese el importe de la compra"));

let descuento = 0;
let tope = 0;

if (rubro === "Vestimenta") {
    descuento = importecompra * 0.20;
    tope = 80000;

} else if (rubro === "Perfumería") {
    descuento = importecompra * 0.20;
    tope = 80000;

} else if (rubro === "Librería") {
    descuento = importecompra * 0.30;
    tope = 90000;

} else if (rubro === "Electrodomésticos") {
    descuento = importecompra * 0.15;
    tope = 70000;

} else if (rubro === "Calzado") {
    descuento = importecompra * 0.20;
    tope = 80000;

} else {
    console.log("Rubro inválido");
}

if (descuento > tope) {
    descuento = tope;
}

let totalfinal = importecompra - descuento;

console.log("Rubro:", rubro);
console.log("Importe:", importecompra);
console.log("Descuento:", descuento);
console.log("Total a pagar:", totalfinal);