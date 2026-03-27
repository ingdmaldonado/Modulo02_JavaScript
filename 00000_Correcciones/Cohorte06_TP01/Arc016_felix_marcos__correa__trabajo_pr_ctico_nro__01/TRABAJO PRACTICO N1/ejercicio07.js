{
let codigo = prompt("Ingrese el código del producto (1, 2 o 3)");
let cantidad = prompt("Ingrese la cantidad de bolsas");

// Variable para el precio //
let precio = 0;

// Determinar precio según código y cantidad //

if (codigo == 1) 
    { if (cantidad >= 11) {precio = 34000;

    } else if (cantidad >= 5) {precio = 36000;

    } else {precio = 38000;}

} else if (codigo == 2)
     {if (cantidad >= 11) {precio = 27000;
    } else if (cantidad >= 5) {
        precio = 29000;
    } else {
        precio = 31000;
    }
} else if (codigo == 3) {
    if (cantidad >= 11) {
        precio = 42000;
    } else if (cantidad >= 5) {
        precio = 44000;
    } else {
        precio = 46000;
    }
}

let total = precio * cantidad;

console.log("El importe total a pagar es: $" + total);
}