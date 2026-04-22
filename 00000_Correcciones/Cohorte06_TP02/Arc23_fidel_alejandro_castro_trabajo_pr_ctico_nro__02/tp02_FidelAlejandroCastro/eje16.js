{
    let auto = "";
    let precioAuto = 0
    let entrada = 1;
    let porcentajeMinimo = 0.30;
    let cuotas = 0;
    let porcentajeAnual = 0;
    
    while (entrada === 1){
        autoEleccion = Number(prompt(`Elige el Vehiculo 1. Amarok V6 | 2. TAOS | 3. Polo Nuevo`));
        console.log(`Coche elegido: ${autoEleccion}`)
        dineroEntregado = Number(prompt(`Ingrese Dinero disponible: `));
        entrada = 0;
        switch (autoEleccion) {
            case 1: //Amarok V6
                auto = "Amarok V6";
                precioAuto = 65000000;
                break;
            case 2: //TAOS
                auto = "Taos";
                precioAuto = 53000000;
                break;
            case 3: //Polo Nuevo
                auto = "Polo Nuevo";
                precioAuto = 47000000;
                break;
            default:
                console.log(`Vehiculo inexistente`);
                entrada = 1;
                break;
        }

        if (dineroEntregado >= (precioAuto * porcentajeMinimo) && dineroEntregado < precioAuto) {
            financiacion = Number(prompt(`Elige la finaciación 1. 12 Cuotas | 2. 24 Cuotas | 3. 36 Cuotas`));
            switch (financiacion) {
                case 1:
                    cuotas = 12;
                    porcentajeAnual = 0.099;
                    break;
                case 2:
                    cuotas = 24;
                    porcentajeAnual = 0.22;
                    break;
                case 3:
                    cuotas = 36;
                    porcentajeAnual = 0.33;
                    break;
                default:
                    console.log(`Cuotas no disponible`);
                    break;
            }
            let dineroRestante = precioAuto - dineroEntregado;
            let interes = (dineroRestante * porcentajeAnual)
            let valorCuotas = (dineroRestante + interes) / cuotas;
            console.log(`----- Financiación en ${cuotas} cuotas -----`)
            console.log(`Vehiculo: ${auto} ($${precioAuto/1000000}M)`)
            console.log (`Dinero Entregado: $${dineroEntregado}`)
            console.log(`Debes pagar por mes: $${valorCuotas}`)
        }else{
            console.log(`El monto debe ser mayor al 30% del valor del vehículo y menor al valor total.`)
            entrada = 1;
        }

    }
}
