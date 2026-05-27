// Ejercicio Nro. 07: Venta de Alimentos para Mascotas

// Catálogo de productos
const productos = {
    1: { nombre: "Dogui x 21 kil.", precios: { normal: 38000, "5-10": 36000, "11+": 34000 } },
    2: { nombre: "Tiernitos x 21 kil", precios: { normal: 31000, "5-10": 29000, "11+": 27000 } },
    3: { nombre: "Dogpro x 21 kil", precios: { normal: 46000, "5-10": 44000, "11+": 42000 } }
};

// Solicitar código de producto
let codigoProducto = parseInt(prompt("Ingrese el código del producto (1: Dogui, 2: Tiernitos, 3: Dogpro):"));

// Verificar si el código es válido
if (!productos[codigoProducto]) {
    console.log("Código de producto inválido.");
} else {
    // Solicitar cantidad de bolsas
    let cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas a comprar:"));

    let precioUnitario;
    if (cantidadBolsas >= 11) {
        precioUnitario = productos[codigoProducto].precios["11+"];
    } else if (cantidadBolsas >= 5 && cantidadBolsas <= 10) {
        precioUnitario = productos[codigoProducto].precios["5-10"];
    } else {
        precioUnitario = productos[codigoProducto].precios.normal;
    }

    let importeTotal = precioUnitario * cantidadBolsas;

    console.log("Producto seleccionado:", productos[codigoProducto].nombre);
    console.log("Cantidad de bolsas:", cantidadBolsas);
    console.log("Precio unitario aplicado:", precioUnitario.toFixed(2));
    console.log("Importe total a pagar:", importeTotal.toFixed(2));
}