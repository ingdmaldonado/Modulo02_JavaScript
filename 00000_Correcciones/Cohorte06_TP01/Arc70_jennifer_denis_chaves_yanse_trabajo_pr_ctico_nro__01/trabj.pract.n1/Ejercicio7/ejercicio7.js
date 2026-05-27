let codigo = parseInt(prompt("codigo (1 dogui, 2 tiernitos, 3 dogpro):"));
let cantidad = parseInt(prompt("cantidad:"));
let precio;

if (codigo === 1) {
    if (cantidad >= 11) precio = 34000;
    else if (cantidad >= 5) precio = 36000;
    else precio = 38000;
}
else if (codigo === 2) {
    if (cantidad >= 11) precio = 27000;
    else if (cantidad >= 5) precio = 29000;
    else precio = 31000;
}
else if (codigo === 3) {
    if (cantidad >= 11) precio = 42000;
    else if (cantidad >= 5) precio = 44000;
    else precio = 46000;
}

let total = precio * cantidad;
console.log("total a pagar:", total);