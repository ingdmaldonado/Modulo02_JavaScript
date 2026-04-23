{
    let amarok = 1000;
    let taos = 2000;
    let poloNuevo = 3000;

    let continuar = "s";

    while (continuar.toLowerCase() === "s") {
        let tipo = prompt("Ingrese el tipo de vehículo (1-amarok, 2-taos, 3-polo nuevo):");
        let precioVehiculo = 0;
        switch (tipo) {
            case "1":
                precioVehiculo = amarok;
                break;
            case "2":
                precioVehiculo = taos;
                break;
            case "3":
                precioVehiculo = poloNuevo;
                break;
            default:
                alert("Tipo de vehículo inválido.");
                continue;
        
        }

        let cuotaAnual = 0;
        let dinero = parseFloat(prompt("Ingrese la cantidad de dinero que tiene:"));
        let precio = precioVehiculo - dinero;
        if (dinero > (precio * 0.3) && dinero < precioVehiculo) {
            alert("Puede adquirir el vehículo.");
            let cuotas = Number(prompt("Ingrese la cantidad de cuotas (12, 24 o 36):"));
            
            if (cuotas === 12) {
                cuotaAnual = (precio * 0.099);
            } else if (cuotas === 24) {
                cuotaAnual = (precio * 0.22);
            } else if (cuotas === 36) {
                cuotaAnual = (precio * 0.33);
            } else {
                alert("Cantidad de cuotas inválida.");
                continue;
            }
            
            if (tipo === "1") {
                tipo = "Amarok";
            } else if (tipo === "2") {
                tipo = "Taos";
            } else if (tipo === "3") {
                tipo = "Polo Nuevo";
            }
            alert('Resultados:\n' +
            'Tipo de vehículo: ' + tipo + '\n' +
            `Precio del vehículo: ${precioVehiculo}\n` +
            'Cuota anual: ' + cuotaAnual / 12 + '\n' +
            'Cantidad de cuotas: ' + cuotas + '\n' +
            'El precio de la cuota mensual es: ' + (cuotaAnual / cuotas ) + '\n' +
            'EL precio total a pagar es: ' + (cuotaAnual + precioVehiculo) + '\n' +
            'Programa finalizado.');

            console.log("Resultado:");
            console.log("Tipo de vehículo: " + tipo);
            console.log(`Precio del vehículo: ${precioVehiculo}`);
            console.log("Cuota anual: " + cuotaAnual);
            console.log("El precio de la cuota mensual es: " + (cuotaAnual / cuotas));
            console.log("EL precio total a pagar es: " + (cuotaAnual + precioVehiculo));
            console.log("Programa finalizado.");
        } else {
            alert("No puede adquirir el vehículo.");
        }
        continuar = prompt("¿Desea ingresar otro vehículo? (s/n):");   
    }
}