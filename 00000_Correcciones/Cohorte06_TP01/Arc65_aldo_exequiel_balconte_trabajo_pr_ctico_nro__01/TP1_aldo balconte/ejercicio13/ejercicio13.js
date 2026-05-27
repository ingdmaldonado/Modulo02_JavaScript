// Ejercicio Nro. 13: Programa "Marcatón" (Catamarca)

// Tabla de descuentos
const descuentosMarcaton = {
    "vestimenta": { porcentaje: 0.20, tope: 80000 },
    "perfumeria": { porcentaje: 0.20, tope: 80000 },
    "libreria": { porcentaje: 0.30, tope: 90000 },
    "electrodomesticos": { porcentaje: 0.15, tope: 70000 },
    "calzado": { porcentaje: 0.20, tope: 80000 }
};

// Solicitar el rubro del comercio
let rubro = prompt("Ingrese el rubro del comercio (Vestimenta, Perfumeria, Libreria, Electrodomésticos, Calzado):").toLowerCase();

// Solicitar el importe de la compra
let importeCompra = parseFloat(prompt("Ingrese el importe de la compra:"));

let descuentoAplicado = 0;
let importeFinal = importeCompra;
let rubroValido = false;

// Verificar si el rubro es válido y aplicar descuento
if (descuentosMarcaton[rubro]) {
    rubroValido = true;
    const infoRubro = descuentosMarcaton[rubro];

    let descuentoCalculado = importeCompra * infoRubro.porcentaje;

    if (descuentoCalculado > infoRubro.tope) {
        descuentoAplicado = infoRubro.tope; // Aplicar solo el tope
    } else {
        descuentoAplicado = descuentoCalculado;
    }

    importeFinal = importeCompra - descuentoAplicado;

} else {
    console.log("Rubro no reconocido. No se aplicará descuento del programa Marcatón.");
}

// Mostrar resultados
console.log("Rubro:", rubroValido ? rubro.charAt(0).toUpperCase() + rubro.slice(1) : "No reconocido");
console.log("Importe de la compra:", importeCompra.toFixed(2));
console.log("Descuento aplicado:", descuentoAplicado.toFixed(2));
console.log("Importe final a pagar:", importeFinal.toFixed(2));