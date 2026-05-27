// ============================================
// EJERCICIO 07 - Alimentos para mascotas
// ============================================
//
// Catálogo:
// Cód | Producto        | 1-4 u.    | 5-10 u.   | 11+ u.
//  1  | Dogui x21 kg    | $38.000   | $36.000   | $34.000
//  2  | Tiernitos x21kg | $31.000   | $29.000   | $27.000
//  3  | Dogpro x21 kg   | $46.000   | $44.000   | $42.000

let codigo   = parseInt(prompt("Ingrese el código del producto (1, 2 o 3):"));
let cantidad = parseInt(prompt("Ingrese la cantidad de bolsas a comprar:"));

let precioUnitario;
let nombreProducto;

if (codigo === 1) {
    nombreProducto = "Dogui x21 kg";
    if (cantidad >= 11) {
        precioUnitario = 34000;
    } else if (cantidad >= 5) {
        precioUnitario = 36000;
    } else {
        precioUnitario = 38000;
    }
} else if (codigo === 2) {
    nombreProducto = "Tiernitos x21 kg";
    if (cantidad >= 11) {
        precioUnitario = 27000;
    } else if (cantidad >= 5) {
        precioUnitario = 29000;
    } else {
        precioUnitario = 31000;
    }
} else if (codigo === 3) {
    nombreProducto = "Dogpro x21 kg";
    if (cantidad >= 11) {
        precioUnitario = 42000;
    } else if (cantidad >= 5) {
        precioUnitario = 44000;
    } else {
        precioUnitario = 46000;
    }
} else {
    console.log("Código de producto inválido. Debe ser 1, 2 o 3.");
}

if (precioUnitario) {
    let importeTotal = precioUnitario * cantidad;

    console.log("=== EJERCICIO 07 - ALIMENTOS MASCOTAS ===");
    console.log("Producto:         ", nombreProducto);
    console.log("Cantidad:         ", cantidad, "bolsas");
    console.log("Precio unitario:  $", precioUnitario);
    console.log("Importe total:    $", importeTotal);
}
