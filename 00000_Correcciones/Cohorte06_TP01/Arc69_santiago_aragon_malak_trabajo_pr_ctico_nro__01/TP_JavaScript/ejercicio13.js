// ============================================
// EJERCICIO 13 - Marcatón (Catamarca)
// ============================================
//
// Tabla de descuentos:
// Rubro              | Descuento | Tope máximo
// Vestimenta         |    20%    |  $80.000
// Perfumería         |    20%    |  $80.000
// Librería           |    30%    |  $90.000
// Electrodomésticos  |    15%    |  $70.000
// Calzado            |    20%    |  $80.000

let rubro   = prompt("Ingrese el rubro del comercio:\n1) Vestimenta\n2) Perfumería\n3) Librería\n4) Electrodomésticos\n5) Calzado");
let importe = parseFloat(prompt("Ingrese el importe de la compra:"));

let porcentajeDescuento;
let topeMaximo;
let nombreRubro;

if (rubro === "1" || rubro.toLowerCase() === "vestimenta") {
    nombreRubro         = "Vestimenta";
    porcentajeDescuento = 0.20;
    topeMaximo          = 80000;
} else if (rubro === "2" || rubro.toLowerCase() === "perfumeria" || rubro.toLowerCase() === "perfumería") {
    nombreRubro         = "Perfumería";
    porcentajeDescuento = 0.20;
    topeMaximo          = 80000;
} else if (rubro === "3" || rubro.toLowerCase() === "libreria" || rubro.toLowerCase() === "librería") {
    nombreRubro         = "Librería";
    porcentajeDescuento = 0.30;
    topeMaximo          = 90000;
} else if (rubro === "4" || rubro.toLowerCase() === "electrodomesticos" || rubro.toLowerCase() === "electrodomésticos") {
    nombreRubro         = "Electrodomésticos";
    porcentajeDescuento = 0.15;
    topeMaximo          = 70000;
} else if (rubro === "5" || rubro.toLowerCase() === "calzado") {
    nombreRubro         = "Calzado";
    porcentajeDescuento = 0.20;
    topeMaximo          = 80000;
} else {
    console.log("Rubro inválido.");
}

if (porcentajeDescuento) {
    let descuentoCalculado = importe * porcentajeDescuento;
    let descuentoAplicado;

    if (descuentoCalculado > topeMaximo) {
        descuentoAplicado = topeMaximo;
        console.log("El descuento supera el tope del rubro. Se aplica el tope máximo.");
    } else {
        descuentoAplicado = descuentoCalculado;
    }

    let importeFinal = importe - descuentoAplicado;

    console.log("=== EJERCICIO 13 - MARCATÓN ===");
    console.log("Rubro:                  ", nombreRubro);
    console.log("Importe de la compra:  $", importe);
    console.log("Descuento aplicado:    $", descuentoAplicado);
    console.log("Importe final a pagar: $", importeFinal);
}
