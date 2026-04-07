// Pedir datos al usuario
let codigo = parseInt(prompt("Ingrese el código del producto ((1) Dogui x 21 kg // (2) Tiernitos x 21 kg // (3) Dogpro x 21 kg:"));
let cantidad = parseInt(prompt("Ingrese la cantidad de bolsas a comprar:"));

// Inicializar precio unitario
let precioUnitario;

// Determinar precio según código y cantidad
if (codigo === 1) { // Dogui x 21kg
    if (cantidad >= 11) {
        precioUnitario = 34000;
    } else if (cantidad >= 5) {
        precioUnitario = 36000;
    } else {
        precioUnitario = 38000;
    }
} else if (codigo === 2) { // Tiernitos x 21kg
    if (cantidad >= 11) {
        precioUnitario = 27000;
    } else if (cantidad >= 5) {
        precioUnitario = 29000;
    } else {
        precioUnitario = 31000;
    }
} else if (codigo === 3) { // Dogpro x 21kg
    if (cantidad >= 11) {
        precioUnitario = 42000;
    } else if (cantidad >= 5) {
        precioUnitario = 44000;
    } else {
        precioUnitario = 46000;
    }
} else {
    console.log("Código de producto inválido");
}

// Calcular total si el código es válido
if (precioUnitario) {
    let total = precioUnitario * cantidad;
    console.log("Precio unitario: $" + precioUnitario.toLocaleString());
    console.log("Cantidad de bolsas: " + cantidad);
    console.log("Importe total a pagar: $" + total.toLocaleString());
}