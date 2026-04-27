{
    // Precios de los vehículos según el STOCK
    const PRECIO_AMAROK = 65000000; 
    const PRECIO_TAOS = 53000000; 
    const PRECIO_POLO = 47000000; 

    // Selección del vehículo
    let seleccion = prompt(
        "Seleccione el vehículo de su interés:\n" +
        "1 - Amarok V6 ($65.000.000)\n" +
        "2 - TAOS ($53.000.000)\n" +
        "3 - Polo Nuevo ($47.000.000)"
    ); 

    let precioVehiculo = 0;
    let nombreVehiculo = "";

    switch (seleccion) {
        case "1":
            precioVehiculo = PRECIO_AMAROK;
            nombreVehiculo = "Amarok V6";
            break;
        case "2":
            precioVehiculo = PRECIO_TAOS;
            nombreVehiculo = "TAOS";
            break;
        case "3":
            precioVehiculo = PRECIO_POLO;
            nombreVehiculo = "Polo Nuevo";
            break;
        default:
            alert("Opción no válida.");
    }

    if (precioVehiculo > 0) {
        // Ingreso de dinero disponible
        let dineroDisponible = Number(prompt("Ingrese el dinero disponible para la entrega:")); 
        
        let entregaMinima = precioVehiculo * 0.30;

        // Validación de la entrega (Mayor al 30% y menor al total)
        if (dineroDisponible > entregaMinima && dineroDisponible < precioVehiculo) {
            let saldoAPagar = precioVehiculo - dineroDisponible; 
            
            let plan = prompt(
                "Seleccione el plan de financiación para el saldo de $" + saldoAPagar + ":\n" +
                "1 - 12 cuotas (9.9% ANUAL)\n" +
                "2 - 24 cuotas (22% ANUAL)\n" +
                "3 - 36 cuotas (33% ANUAL)"
            ); 

            let cuotas = 0;
            let interesAnual = 0;

            if (plan === "1") {
                cuotas = 12;
                interesAnual = 0.099; 
            } else if (plan === "2") {
                cuotas = 24;
                interesAnual = 0.22; 
            } else if (plan === "3") {
                cuotas = 36;
                interesAnual = 0.33; 
            }

            if (cuotas > 0) {
                // Cálculo de interés 
                let años = cuotas / 12;
                let montoConInteres = saldoAPagar + (saldoAPagar * interesAnual * años);
                let valorCuota = montoConInteres / cuotas;

                console.log("--- RESUMEN DE OPERACIÓN ---");
                console.log("Vehículo: " + nombreVehiculo);
                console.log("Precio Total: $" + precioVehiculo);
                console.log("Entrega realizada: $" + dineroDisponible);
                console.log("Saldo financiado: $" + saldoAPagar);
                console.log("Plan: " + cuotas + " meses");
                console.log("Monto total a pagar financiado: $" + montoConInteres.toFixed(2));
                console.log("Valor de cada cuota: $" + valorCuota.toFixed(2));
            } else {
                alert("Plan de financiación no válido.");
            }

        } else {
            alert("Error: El dinero a entregar debe ser mayor al 30% ($" + entregaMinima + ") y menor al total.");
        }
    }
}