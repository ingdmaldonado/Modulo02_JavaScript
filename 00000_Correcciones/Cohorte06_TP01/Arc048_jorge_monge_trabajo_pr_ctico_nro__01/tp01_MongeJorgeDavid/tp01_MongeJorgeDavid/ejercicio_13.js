// Pedir datos al usuario
let rubro = prompt("Ingrese el rubro del comercio (Vestimenta, Perfumería, Librería, Electrodomésticos, Calzado):").toLowerCase();
let importe = parseFloat(prompt("Ingrese el importe de la compra:"));

// Inicializar variables de descuento
let porcentajeDescuento = 0;
let tope = 0;

// Determinar porcentaje de descuento y tope según rubro
switch (rubro) {
    case "vestimenta":
        porcentajeDescuento = 0.20;
        tope = 80000;
        break;
    case "perfumería":
    case "perfumeria": // por si no usan tilde
        porcentajeDescuento = 0.20;
        tope = 80000;
        break;
    case "librería":
    case "libreria":
        porcentajeDescuento = 0.30;
        tope = 90000;
        break;
    case "electrodomésticos":
    case "electrodomesticos":
        porcentajeDescuento = 0.15;
        tope = 70000;
        break;
    case "calzado":
        porcentajeDescuento = 0.20;
        tope = 80000;
        break;
    default:
        console.log("Rubro inválido");
}

// Calcular descuento y total si el rubro es válido
if (porcentajeDescuento > 0) {
    let descuento = importe * porcentajeDescuento;
    
    // Aplicar tope máximo
    if (descuento > tope) {
        descuento = tope;
    }
    
    let totalFinal = importe - descuento;
    
    // Mostrar resultados
    console.log("Rubro: " + rubro);
    console.log("Importe de la compra: $" + importe.toFixed(2));
    console.log("Descuento aplicado: $" + descuento.toFixed(2));
    console.log("Importe final a pagar: $" + totalFinal.toFixed(2));
}