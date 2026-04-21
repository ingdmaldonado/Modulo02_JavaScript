// PRECIOS
const AMAROK = 65000000;
const TAOS = 53000000;
const POLO = 47000000;

let opcion;
let precio = 0;
let vehiculo = "";

// SELECCIÓN DE VEHÍCULO
opcion = prompt(
    "Seleccione un vehículo:\n" +
    "1 - Amarok V6 ($65.000.000)\n" +
    "2 - TAOS ($53.000.000)\n" +
    "3 - Polo Nuevo ($47.000.000)"
);

switch(opcion) {
    case "1":
        precio = AMAROK;
        vehiculo = "Amarok V6";
        break;
    case "2":
        precio = TAOS;
        vehiculo = "TAOS";
        break;
    case "3":
        precio = POLO;
        vehiculo = "Polo Nuevo";
        break;
    default:
        alert("Opción inválida");
}

// CONTINÚA SI ES VÁLIDO
if (precio > 0) {

    let entrega = parseFloat(prompt("Ingrese dinero disponible para la entrega:"));
    let minimo = precio * 0.30;

    if (entrega < minimo || entrega >= precio || isNaN(entrega)) {
        alert("Monto inválido. Debe ser mayor al 30% y menor al total.");
    } else {

        let saldo = precio - entrega;

        // PLAN DE CUOTAS
        let plan = prompt(
            "Seleccione financiación:\n" +
            "1 - 12 cuotas (9.9% anual)\n" +
            "2 - 24 cuotas (22% anual)\n" +
            "3 - 36 cuotas (33% anual)"
        );

        let cuotas = 0;
        let interes = 0;

        switch(plan) {
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

        if (cuotas > 0) {

            let interesTotal = saldo * interes;
            let totalFinanciado = saldo + interesTotal;
            let valorCuota = totalFinanciado / cuotas;

            alert(
                "=== DETALLE DE COMPRA ===\n\n" +
                "Vehículo: " + vehiculo + "\n" +
                "Precio: $" + precio + "\n" +
                "Entrega: $" + entrega + "\n" +
                "Saldo: $" + saldo + "\n\n" +
                "Plan: " + cuotas + " cuotas\n" +
                "Interés: " + (interes * 100) + "% anual\n\n" +
                "Total financiado: $" + totalFinanciado.toFixed(2) + "\n" +
                "Cuota mensual: $" + valorCuota.toFixed(2)
            );
        }
    }
}
