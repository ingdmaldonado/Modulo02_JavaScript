// 1. Definición de vehículos y precios
const precios = {
    1: 65000000, // Amarok V6
    2: 53000000, // TAOS
    3: 47000000  // Polo Nuevo
};

// 2. Selección del vehículo
let seleccion = prompt(
    "Seleccione el vehículo de su interés:\n1 - Amarok V6 ($65.000.000)\n2 - TAOS ($53.000.000)\n3 - Polo Nuevo ($47.000.000)"
);

let valorVehiculo = precios[seleccion];

if (!valorVehiculo) {
    alert("Selección inválida. Reinicie el proceso.");
} else {
    // 3. Ingreso de dinero disponible y validación (30% < entrega < 100%)
    let entrega = parseFloat(prompt("Ingrese el dinero disponible para la entrega:"));
    let minimoEntrega = valorVehiculo * 0.30;

    if (entrega > minimoEntrega && entrega < valorVehiculo) {
        let saldoAFinanciar = valorVehiculo - entrega;
        
        // 4. Selección de cuotas
        let cuotas = prompt(
            "Seleccione el plan de financiación para los $" + saldoAFinanciar + " restantes:\n" +
            "1 - 12 cuotas (9.9% ANUAL)\n" +
            "2 - 24 cuotas (22% ANUAL)\n" +
            "3 - 36 cuotas (33% ANUAL)"
        );

        let interesAnual = 0;
        let cantidadMeses = 0;

        switch (cuotas) {
            case "1":
                interesAnual = 0.099;
                cantidadMeses = 12;
                break;
            case "2":
                interesAnual = 0.22;
                cantidadMeses = 24;
                break;
            case "3":
                interesAnual = 0.33;
                cantidadMeses = 36;
                break;
            default:
                alert("Opción de cuotas no válida.");
        }

        if (cantidadMeses > 0) {
            // Cálculo: Saldo + Interés (proporcional al tiempo)
            // Nota: El ejercicio menciona interés anual, lo aplicaremos sobre el saldo total.
            let totalConInteres = saldoAFinanciar * (1 + (interesAnual * (cantidadMeses / 12)));
            let valorCuota = totalConInteres / cantidadMeses;

            alert(
                "Resumen de Financiación:\n" +
                "Saldo a financiar: $" + saldoAFinanciar.toLocaleString() + "\n" +
                "Total con intereses: $" + totalConInteres.toLocaleString() + "\n" +
                "Usted pagará " + cantidadMeses + " cuotas de: $" + valorCuota.toFixed(2)
            );
        }
    } else {
        alert("El monto de entrega no cumple con los requisitos (debe ser mayor al 30% y menor al total).");
    }
}