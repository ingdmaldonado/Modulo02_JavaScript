/*
Ejercicio Nro. 16:
Promoción de venta de vehículos 0 km.
1) Amarok V6 (65.000.000) | 2) TAOS (53.000.000) | 3) Polo Nuevo (47.000.000)
Ingresar dinero disponible (debe ser >30% y < al valor total).
Calcular financiación del resto: 12 cuotas (9.9% ANUAL), 24 cuotas (22% ANUAL), 36 cuotas (33% ANUAL).
*/
{
    let precioAmarok = 65000000;
    let precioTaos = 53000000;
    let precioPolo = 47000000;

    let opcion = 0;
    let precioVehiculo = 0;
    let nombreVehiculo = "";

    opcion = Number(prompt("Seleccione el vehículo:\n1: Amarok V6\n2: TAOS\n3: Polo Nuevo"));

    if (opcion === 1) {
        precioVehiculo = precioAmarok;
        nombreVehiculo = "Amarok V6";
    } else if (opcion === 2) {
        precioVehiculo = precioTaos;
        nombreVehiculo = "TAOS";
    } else if (opcion === 3) {
        precioVehiculo = precioPolo;
        nombreVehiculo = "Polo Nuevo";
    }

    if (precioVehiculo > 0) {
        let minimoEntrega = precioVehiculo * 0.30;
        let entrega = 0;
        
        entrega = Number(prompt(`El valor del ${nombreVehiculo} es $${precioVehiculo}.\nLa entrega mínima (30%) es $${minimoEntrega}.\nIngrese el dinero a entregar:`));

        if (entrega > minimoEntrega && entrega < precioVehiculo) {
            let aFinanciar = precioVehiculo - entrega;
            
            // Cálculos para 12 cuotas
            let interes12 = aFinanciar * 0.099;
            let total12 = aFinanciar + interes12;
            let cuota12 = total12 / 12;

            // Cálculos para 24 cuotas
            let interes24 = aFinanciar * 0.22;
            let total24 = aFinanciar + interes24;
            let cuota24 = total24 / 24;

            // Cálculos para 36 cuotas
            let interes36 = aFinanciar * 0.33;
            let total36 = aFinanciar + interes36;
            let cuota36 = total36 / 36;

            console.log(`--- FINANCIACIÓN PARA ${nombreVehiculo} ---`);
            console.log(`Valor del vehículo: $${precioVehiculo}`);
            console.log(`Dinero entregado: $${entrega}`);
            console.log(`Capital a financiar: $${aFinanciar}`);
            console.log(`Opciones de cuotas:`);
            console.log(`- 12 cuotas de $${cuota12.toFixed(2)} (Total a pagar financiado: $${total12})`);
            console.log(`- 24 cuotas de $${cuota24.toFixed(2)} (Total a pagar financiado: $${total24})`);
            console.log(`- 36 cuotas de $${cuota36.toFixed(2)} (Total a pagar financiado: $${total36})`);
        } else {
            console.log("El dinero a entregar no cumple con los requisitos (debe ser mayor al 30% y menor al total).");
        }
    } else {
        console.log("Opción de vehículo incorrecta.");
    }
}