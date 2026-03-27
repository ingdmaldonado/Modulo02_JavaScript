// Ingreso de datos
let rubro = prompt("Ingrese rubro:");
let compra = parseFloat(prompt("Ingrese importe de la compra:"));

let descuento = 0;
let tope = 0;

// Determinar descuento y tope según rubro
switch (rubro) {
    case "vestimenta":
    case "perfumeria":
    case "calzado":
        descuento = compra * 0.20; // 20%
        tope = 80000;
        break;

    case "libreria":
        descuento = compra * 0.30; // 30%
        tope = 90000;
        break;

    case "electrodomesticos":
        descuento = compra * 0.15; // 15%
        tope = 70000;
        break;

    default:
        console.log("Rubro no válido");
        break;
}

// Aplicar tope máximo
if (descuento > tope) {
    descuento = tope;
}

// Cálculo del total final (fórmula)
let totalFinal = compra - descuento;

// Mostrar resultados (como pide la consigna)
console.log("Rubro:", rubro);
console.log("Importe de la compra:", compra);
console.log("Descuento aplicado:", descuento);
console.log("Total final a pagar:", totalFinal);