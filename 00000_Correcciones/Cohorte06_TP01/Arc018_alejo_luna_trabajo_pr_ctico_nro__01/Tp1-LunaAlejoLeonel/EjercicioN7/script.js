let codigo = Number(prompt("Ingrese código de producto (1, 2 o 3)"));
let cantidad = Number(prompt("Ingrese cantidad"));

let precio;

// determinar precio según producto y cantidad, todos estos datos están cargados en la tabla del trabajo práctico
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
} else {
    console.log("Código inválido");
}

// aquí calculo el total
let total = precio * cantidad;

console.log("Precio por unidad: " + precio);
console.log("Total a pagar: " + total);