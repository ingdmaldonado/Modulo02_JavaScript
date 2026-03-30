{
    let precios = {
    1: { // Dogui
        unitario: 38000,
        rango1: { min: 5, max: 10, precio: 36000 },
        rango2: { min: 11, precio: 34000 }
    },
    2: { // Tierritos
        unitario: 31000,
        rango1: { min: 5, max: 10, precio: 29000 },
        rango2: { min: 11, precio: 27000 }
    },
    3: { // Dogpro
        unitario: 46000,
        rango1: { min: 5, max: 10, precio: 44000 },
        rango2: { min: 11, precio: 42000 }
    }
};

let codigo = Number(prompt("Ingrese código del producto (1, 2 o 3):"));
let cantidad = Number(prompt("Ingrese cantidad de bolsas:"));

if (!precios[codigo]) {
    console.log("Código de producto inválido.");
} else {
    let precioUnitario;
    if (cantidad >= 11) {
        precioUnitario = precios[codigo].rango2.precio;
    } else if (cantidad >= 5 && cantidad <= 10) {
        precioUnitario = precios[codigo].rango1.precio;
    } else {
        precioUnitario = precios[codigo].unitario;
    }
    let total = cantidad * precioUnitario;
    let nombre = codigo === 1 ? "Dogui" : codigo === 2 ? "Tierritos" : "Dogpro";
    console.log(`Producto: ${nombre}`);
    console.log(`Cantidad: ${cantidad}`);
    console.log(`Precio unitario: $${precioUnitario.toFixed(2)}`);
    console.log(`Total a pagar: $${total.toFixed(2)}`);
}

}