// Ingreso de datos
let importe = parseFloat(prompt("Ingrese importe:"));
let forma = prompt("Forma de pago (efectivo/debito/credito):");

let descuento = 0;

// Estructura switch
switch (forma) {
    case "efectivo":
        descuento = importe * 0.10; // 10% de descuento
        break;

    case "debito":
        descuento = importe * 0.05; // 5% de descuento
        break;

    case "credito":
        descuento = 0; // sin descuento
        break;

    default:
        console.log("Forma de pago no válida");
        break;
}

// Cálculo del total final (fórmula)
let totalFinal = importe - descuento;

// Mostrar resultados
console.log("Importe:", importe);
console.log("Descuento aplicado:", descuento);
console.log("Total final a pagar:", totalFinal);