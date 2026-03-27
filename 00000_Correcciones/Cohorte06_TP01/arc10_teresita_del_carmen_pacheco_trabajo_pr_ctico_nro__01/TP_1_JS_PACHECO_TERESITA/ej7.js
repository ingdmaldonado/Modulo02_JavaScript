// Ingreso de datos
let codigo = parseInt(prompt("Ingrese código (1, 2 o 3):"));
let cantidad = parseInt(prompt("Ingrese cantidad:"));

let precio = 0;

// Determinar precio según código y cantidad
if (codigo === 1) {
    if (cantidad >= 11) {
        precio = 34000;
    } else if (cantidad >= 5) {
        precio = 36000;
    } else {
        precio = 38000;
    }
} else if (codigo === 2) {
    if (cantidad >= 11) {
        precio = 27000;
    } else if (cantidad >= 5) {
        precio = 29000;
    } else {
        precio = 31000;
    }
} else if (codigo === 3) {
    if (cantidad >= 11) {
        precio = 42000;
    } else if (cantidad >= 5) {
        precio = 44000;
    } else {
        precio = 46000;
    }
}

// Cálculo del total (fórmula)
let total = precio * cantidad;

// Mostrar resultado
console.log("Precio por unidad:", precio);
console.log("Cantidad:", cantidad);
console.log("Total a pagar:", total);