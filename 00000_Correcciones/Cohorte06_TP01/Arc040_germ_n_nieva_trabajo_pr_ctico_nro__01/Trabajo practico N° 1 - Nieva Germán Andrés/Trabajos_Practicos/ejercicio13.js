/* Ejercicio Nro. 13: Estructuras Condicionales (if/else)
El programa Marcatón, realizado en Catamarca junto al Banco Nación, ofrece descuentos en distintos rubros comerciales.

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
 - importe final a pagar */

let topeVestimenta= 80000;
let topePerfumeria= 80000;
let topeLibreria= 90000;
let topeElectrodomesticos= 70000;
let topeCalzado= 80000;
let rubro= prompt("Ingrese el rubro del comercio: Vestimenta, Perfumería, Librería, Electrodomésticos, Calzado");
let importe= Number(prompt("Ingrese el importe de la compra:"));
let descuento=0;
let importeFinal=0;

if (rubro === "Vestimenta") {
    descuento = importe * 0.2;
    if (descuento > topeVestimenta) {
        descuento = topeVestimenta;
    }
} else if (rubro === "Perfumería") {
    descuento = importe * 0.2;
    if (descuento > topePerfumeria) {
        descuento = topePerfumeria;
    }
} else if (rubro === "Librería") {
    descuento = importe * 0.3;
    if (descuento > topeLibreria) {
        descuento = topeLibreria;
    }
} else if (rubro === "Electrodomésticos") {
    descuento = importe * 0.15;
    if (descuento > topeElectrodomesticos) {
        descuento = topeElectrodomesticos;
    }
} else if (rubro === "Calzado") {
    descuento = importe * 0.2;
    if (descuento > topeCalzado) {
        descuento = topeCalzado;
    }
}

importeFinal = importe - descuento;
console.log(`Rubro: ${rubro} \n
    Importe de la compra: $${importe} \n
    Descuento aplicado: $${descuento} \n
    Importe final a pagar: $${importeFinal}`);
