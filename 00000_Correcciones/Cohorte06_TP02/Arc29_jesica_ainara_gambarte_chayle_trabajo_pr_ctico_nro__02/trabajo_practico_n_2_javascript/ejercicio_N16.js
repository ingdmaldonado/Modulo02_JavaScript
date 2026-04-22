

// Variables
let opcion;
let precio = 0;
let vehiculo = "";


//Precios
const precios = {
    1: 65000000, // Amarok V6
    2: 53000000, // TAOS
    3: 47000000  // Polo Nuevo
};

// Selección del vehículo
opcion = prompt(
    "=== CONCESIONARIA ===\n\n" +
    "Seleccione un vehículo:\n" +
    "1 - Amarok V6 ($65.000.000)\n" +
    "2 - TAOS ($53.000.000)\n" +
    "3 - Polo Nuevo ($47.000.000)"
);

switch (opcion) {
    case "1":
        vehiculo = "Amarok V6";
        precio = 65000000;
        break;

    case "2":
        vehiculo = "TAOS";
        precio = 53000000;
        break;

    case "3":
        vehiculo = "Polo Nuevo";
        precio = 47000000;
        break;

    default:
        alert("Opción inválida");
}

// Ingreso de dinero disponible
let entrega = parseFloat(prompt("Ingrese el dinero disponible para la entrega:"));

// Validación (mínimo 30% y menor al total)
let minimo = precio * 0.30;

if (entrega < minimo || entrega >= precio || isNaN(entrega)) {
    alert("Error: el monto ingresado no es válido.\nDebe ser mayor al 30% y menor al total del vehículo.");
} else {

    // Cálculo de deuda
    let restante = precio - entrega;

    // Selección de financiación
    let plan = prompt(
        "Seleccione plan de financiación:\n" +
        "1 - 12 cuotas (9.9% anual)\n" +
        "2 - 24 cuotas (22% anual)\n" +
        "3 - 36 cuotas (33% anual)"
    );

    let cuotas = 0;
    let interes = 0;

    switch (plan) {
        case "1":
            cuotas = 12;
            interes = 0.099;
            break;

        case "2":
            cuotas = 24;
            interes = 0.22;
            break;

        case "3":
            cuotas = 36;
            interes = 0.33;
            break;

        default:
            alert("Plan inválido");
    }

    // Cálculo con interés
    let totalFinanciado = restante + (restante * interes);
    let valorCuota = totalFinanciado / cuotas;

    // Resultado
    alert(
        "=== RESUMEN DE COMPRA ===\n\n" +
        "Vehículo: " + vehiculo + "\n" +
        "Precio: $" + precio + "\n" +
        "Entrega: $" + entrega + "\n" +
        "Saldo a financiar: $" + restante + "\n\n" +
        "Plan: " + cuotas + " cuotas\n" +
        "Total con interés: $" + totalFinanciado.toFixed(2) + "\n" +
        "Valor por cuota: $" + valorCuota.toFixed(2)
    );
}