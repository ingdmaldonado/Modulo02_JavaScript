{

    let precioVehiculoAmarok = 65000000;
    let precioVehiculoTaos = 53000000;
    let precioVehiculoPolo = 47000000;
    
    let opcionVehiculoSeleccionado = prompt("Bienvenido a la concesionaria. Seleccione el vehículo de su interés ingresando el número correspondiente:\n1) Amarok V6 ($65.000.000)\n2) TAOS ($53.000.000)\n3) Polo Nuevo ($47.000.000)");
    
    let precioDelVehiculoElegido = 0;
    let nombreDelVehiculoElegido = "";
    
    if (opcionVehiculoSeleccionado === "1") {
        precioDelVehiculoElegido = precioVehiculoAmarok;
        nombreDelVehiculoElegido = "Volkswagen Amarok V6";
    } else if (opcionVehiculoSeleccionado === "2") {
        precioDelVehiculoElegido = precioVehiculoTaos;
        nombreDelVehiculoElegido = "Volkswagen TAOS";
    } else if (opcionVehiculoSeleccionado === "3") {
        precioDelVehiculoElegido = precioVehiculoPolo;
        nombreDelVehiculoElegido = "Volkswagen Polo Nuevo";
    } else {
        console.log("La opción ingresada no corresponde a un vehículo disponible en nuestro catálogo.");
    }
    
    if (precioDelVehiculoElegido > 0) {
        let porcentajeAnticipoMinimo = 0.30;
        let montoAnticipoMinimoRequerido = precioDelVehiculoElegido * porcentajeAnticipoMinimo;
        
        let dineroDisponibleEntregadoPorCliente = parseFloat(prompt(`Ha seleccionado el vehículo ${nombreDelVehiculoElegido} con un valor total de $${precioDelVehiculoElegido}.\nEl anticipo mínimo requerido (30%) es de $${montoAnticipoMinimoRequerido}.\nPor favor, ingrese el monto de dinero que desea entregar como anticipo:`));
    
        if (dineroDisponibleEntregadoPorCliente > montoAnticipoMinimoRequerido && dineroDisponibleEntregadoPorCliente < precioDelVehiculoElegido) {
            
            let diferenciaRestanteAFinanciar = precioDelVehiculoElegido - dineroDisponibleEntregadoPorCliente;
            
            // Cálculo de intereses simples anuales
            let totalFinanciadoDoceCuotas = diferenciaRestanteAFinanciar + (diferenciaRestanteAFinanciar * 0.099 * 1);
            let totalFinanciadoVeinticuatroCuotas = diferenciaRestanteAFinanciar + (diferenciaRestanteAFinanciar * 0.22 * 2);
            let totalFinanciadoTreintaYSeisCuotas = diferenciaRestanteAFinanciar + (diferenciaRestanteAFinanciar * 0.33 * 3);
    
            console.log(`
     PLAN DE FINANCIACIÓN PARA ${nombreDelVehiculoElegido.toUpperCase()} ---
    Valor Total del Vehículo: $${precioDelVehiculoElegido}
    Anticipo Entregado: $${dineroDisponibleEntregadoPorCliente}
    Capital Restante a Financiar: $${diferenciaRestanteAFinanciar}
    
    Opciones de pago en cuotas:
    - Plan 12 Cuotas (Interés 9.9% anual): 12 pagos fijos de $${(totalFinanciadoDoceCuotas / 12).toFixed(2)} (Monto total financiado: $${totalFinanciadoDoceCuotas})
    - Plan 24 Cuotas (Interés 22% anual): 24 pagos fijos de $${(totalFinanciadoVeinticuatroCuotas / 24).toFixed(2)} (Monto total financiado: $${totalFinanciadoVeinticuatroCuotas})
    - Plan 36 Cuotas (Interés 33% anual): 36 pagos fijos de $${(totalFinanciadoTreintaYSeisCuotas / 36).toFixed(2)} (Monto total financiado: $${totalFinanciadoTreintaYSeisCuotas})
            `);
        } else {
            console.log("Operación denegada: El importe entregado debe ser estrictamente mayor al 30% del valor del vehículo y menor al valor total del mismo.");
        }
    }
    }