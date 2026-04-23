// Precios de vehículos
const AMAROK = 65000000;
const TAOS = 53000000;
const POLO = 47000000;

// Selección del vehículo
let opcion = prompt(
    "Seleccione un vehículo:\n1-Amarok V6 ($65.000.000)\n2-TAOS ($53.000.000)\n3-Polo ($47.000.000)"
);

let precio = 0;
let nombre = "";

// Determinar vehículo
switch (opcion) {
    case "1":
        precio = AMAROK;
        nombre = "Amarok V6";
        break;
    case "2":
        precio = TAOS;
        nombre = "TAOS";
        break;
    case "3":
        precio = POLO;
        nombre = "Polo";
        break;
    default:
        console.log("Opción inválida");
}

// Si el vehículo es válido
if (precio > 0) {

    let entrega = parseFloat(prompt("Ingrese el dinero disponible para la compra:"));

    let minimo = precio * 0.30;

    // Validación de entrega
    if (entrega <= minimo || entrega >= precio) {
        console.log("El monto ingresado no cumple con las condiciones (mínimo 30% y menor al total)");
    } else {

        let montoFinanciar = precio - entrega;

        // Elegir plan
        let cuotas = prompt("Seleccione plan de financiación:\n12 cuotas\n24 cuotas\n36 cuotas");

        let interes = 0;
        let cantidadCuotas = parseInt(cuotas);

        switch (cantidadCuotas) {
            case 12:
                interes = 0.099;
                break;
            case 24:
                interes = 0.22;
                break;
            case 36:
                interes = 0.33;
                break;
            default:
                console.log("Plan inválido");
        }

        if (interes > 0) {
            // Calcular total financiado
            let totalFinanciado = montoFinanciar + (montoFinanciar * interes);

            let valorCuota = totalFinanciado / cantidadCuotas;

            // Mostrar resultados
            console.log("Vehículo seleccionado: " + nombre);
            console.log("Precio: $" + precio.toLocaleString());
            console.log("Entrega: $" + entrega.toLocaleString());
            console.log("Monto a financiar: $" + montoFinanciar.toLocaleString());
            console.log("Plan: " + cantidadCuotas + " cuotas");
            console.log("Total financiado: $" + totalFinanciado.toLocaleString());
            console.log("Valor de cada cuota: $" + valorCuota.toFixed(2));
        }
    }
}