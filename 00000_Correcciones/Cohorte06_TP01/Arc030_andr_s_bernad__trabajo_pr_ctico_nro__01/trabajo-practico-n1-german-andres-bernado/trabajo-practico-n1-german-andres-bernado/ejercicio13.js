/* Ejercicio Nro. 13: Estructuras Condicionales (if/else)
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
 - importe final a pagar. */

 
let local = Number(prompt("Seleccione el rubro: 1) Vestimenta, 2) Perfumeria, 3) Librería, 4) Electrodomésticos, 5) Calzado"));

let importeCompra = Number(prompt("Ingrese el importe de la compra:"));

let descuento = 0;
let tope = 0;
let rubro = "";


if (local === 1 || local === 2) {
    descuento = importeCompra * 0.20;
    tope = 80000;
    rubro = (local === 1) ? "Vestimenta" : "Perfumería";
} else if (local === 3) {
    descuento = importeCompra * 0.30;
    tope = 90000;
    rubro = "Librería";
} else if (local === 4) {
    descuento = importeCompra * 0.15;
    tope = 70000;
    rubro = "Electrodomésticos";
} else if (local === 5) {
    descuento = importeCompra * 0.20;
    tope = 80000;
    rubro = "Calzado";
} else {
    console.log("Opción inválida");
}


if (descuento > tope) {
    descuento = tope;
}

let totalFinal = importeCompra - descuento;

console.log("Rubro:", rubro);
console.log("Importe de la compra:", importeCompra);
console.log("Descuento aplicado:", descuento);
console.log("Total a pagar:", totalFinal);