let codigo = Number(prompt("Ingrese el código del producto (1, 2 o 3)"));
let cantidad = Number(prompt("Ingrese la cantidad de bolsas"));

let precio = 0;

// Producto 1
if (codigo === 1) {
    if (cantidad >= 11) {
        precio = 34000;
    } else if (cantidad >= 5 && cantidad <= 10) {
        precio = 36000;
    } else {
        precio = 38000;
    }
}

// Producto 2
else if (codigo === 2) {
    if (cantidad >= 11) {
        precio = 27000;
    } else if (cantidad >= 5 && cantidad <= 10) {
        precio = 29000;
    } else {
        precio = 31000;
    }
}

// Producto 3
else if (codigo === 3) {
    if (cantidad >= 11) {
        precio = 42000;
    } else if (cantidad >= 5 && cantidad <= 10) {
        precio = 44000;
    } else {
        precio = 46000;
    }
}

let total = precio * cantidad;

console.log("Código del producto:", codigo);
console.log("Cantidad de bolsas:", cantidad);
console.log("Precio por unidad:", precio);
console.log("Importe total a pagar:", total);