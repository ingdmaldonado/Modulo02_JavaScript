// Ingreso de datos
let codigo = Number(prompt("Ingrese el código del producto (1: Dogui, 2: Tiernitos, 3: Dogpro)"));
let cantidad = Number(prompt("Ingrese la cantidad de bolsas a comprar"));

// Variable para guardar el precio que le toca
let precio = 0;

// Evaluamos que codigo ingresó el cliente
if (codigo === 1) {
    //Dogui
    if (cantidad >= 11) {
        precio = 34000;
    } else if (cantidad >= 5) {
        precio = 36000;
    } else {
        precio = 38000;
    }
} else if (codigo === 2) {
    //Tiernitos
    if (cantidad >= 11) {
        precio = 27000;
    } else if (cantidad >= 5) {
        precio = 29000;
    } else {
        precio = 31000;
    }
} else if (codigo === 3) {
    //Dogpro
    if (cantidad >= 11) {
        precio = 42000;
    } else if (cantidad >= 5) {
        precio = 44000;
    } else {
        precio = 46000;
    }
} else {
    console.log("Error: El código ingresado no existe.");
}

//calculamos el total
if (precio > 0) {
    let totalPagar = precio * cantidad;
    console.log("Cantidad de bolsas: " + cantidad);
    console.log("Precio por unidad aplicado: $" + precio);
    console.log("El importe TOTAL a pagar es: $" + totalPagar);
}