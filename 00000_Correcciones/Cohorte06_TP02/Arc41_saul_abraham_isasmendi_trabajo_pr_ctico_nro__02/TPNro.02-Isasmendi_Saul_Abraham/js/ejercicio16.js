// Programa que calcula cuotas de financiamiento para compra de vehículos con diferentes opciones de pago
{
    // Precios de los vehículos disponibles
    const precioAmarok = 65000000;
    const precioTaos = 53000000;
    const precioPolo = 47000000;

    // Variables para el cálculo de cuotas
    let dineroDisponible = 0;
    let tipovehiculo = 0;
    let diferenciaFinancial = 0;
    let numeroCuotas = 0;
    let fin = 's';

    // Bucle para procesar múltiples cálculos de financiamiento
    while (fin != 'n' ) {

        // Solicita el tipo de vehículo y dinero disponible
        tipovehiculo = Number(prompt("Ingrese el tipo de vehículo que desea comprar (1->Amarok, 2->Taos, 3->Polo):"));
        dineroDisponible = Number(prompt("Ingrese el dinero disponible para la compra:"));
        
        // Procesa el vehículo seleccionado
        switch (tipovehiculo) {
            case 1:
                if (dineroDisponible >= (precioAmarok * 0.30) && dineroDisponible < precioAmarok) {
                    diferenciaFinancial = precioAmarok - dineroDisponible;
                    numeroCuotas = Number(prompt(`1) 12 cuotas - 9.9% anual, 2) 24 cuotas - 22% anual, 3) 36 cuotas - 33% anual. Ingrese el número de cuotas deseado:`));
                    let interesTotal, totalFinanciado, valorCuota;
                    switch (numeroCuotas) {
                        case 1:
                            interesTotal = diferenciaFinancial * (9.9 / 100);
                            totalFinanciado = diferenciaFinancial + interesTotal;
                            valorCuota = totalFinanciado / 12;
                            alert(`Amarok 12 cuotas de $${valorCuota.toFixed(2)} (total financiado $${totalFinanciado.toFixed(2)})`);
                            break;
                        case 2:
                            interesTotal = diferenciaFinancial * (22 / 100);
                            totalFinanciado = diferenciaFinancial + interesTotal;
                            valorCuota = totalFinanciado / 24;
                            alert(`Amarok 24 cuotas de $${valorCuota.toFixed(2)} (total financiado $${totalFinanciado.toFixed(2)})`);
                            break;
                        case 3:
                            interesTotal = diferenciaFinancial * (33 / 100);
                            totalFinanciado = diferenciaFinancial + interesTotal;
                            valorCuota = totalFinanciado / 36;
                            alert(`Amarok 36 cuotas de $${valorCuota.toFixed(2)} (total financiado $${totalFinanciado.toFixed(2)})`);
                            break;
                        default:
                            alert("Opción de cuotas no válida");
                    }
                } else {
                    alert(`Minima entrega 30% = ${precioAmarok*0.30} y financiar el resto.`);
                }
                break;
            case 2:
                if (dineroDisponible >= (precioTaos * 0.30) && dineroDisponible < precioTaos) {
                    diferenciaFinancial = precioTaos - dineroDisponible;
                    numeroCuotas = Number(prompt(`1) 12 cuotas - 9.9% anual, 2) 24 cuotas - 22% anual, 3) 36 cuotas - 33% anual. Ingrese el número de cuotas deseado:`));
                    let interesTotal, totalFinanciado, valorCuota;
                    switch (numeroCuotas) {
                        case 1:
                            interesTotal = diferenciaFinancial * (9.9 / 100);
                            totalFinanciado = diferenciaFinancial + interesTotal;
                            valorCuota = totalFinanciado / 12;
                            alert(`Taos 12 cuotas de $${valorCuota.toFixed(2)} (total financiado $${totalFinanciado.toFixed(2)})`);
                            break;
                        case 2:
                            interesTotal = diferenciaFinancial * (22 / 100);
                            totalFinanciado = diferenciaFinancial + interesTotal;
                            valorCuota = totalFinanciado / 24;
                            alert(`Taos 24 cuotas de $${valorCuota.toFixed(2)} (total financiado $${totalFinanciado.toFixed(2)})`);
                            break;
                        case 3:
                            interesTotal = diferenciaFinancial * (33 / 100);
                            totalFinanciado = diferenciaFinancial + interesTotal;
                            valorCuota = totalFinanciado / 36;
                            alert(`Taos 36 cuotas de $${valorCuota.toFixed(2)} (total financiado $${totalFinanciado.toFixed(2)})`);
                            break;
                        default:
                            alert("Opción de cuotas no válida");
                    }
                } else {
                    alert(`Minima entrega 30% = ${precioTaos*0.30} y financiar el resto.`);
                }
                break;
            case 3:
                if (dineroDisponible >= (precioPolo * 0.30) && dineroDisponible < precioPolo) {
                    diferenciaFinancial = precioPolo - dineroDisponible;
                    numeroCuotas = Number(prompt(`1) 12 cuotas - 9.9% anual, 2) 24 cuotas - 22% anual, 3) 36 cuotas - 33% anual. Ingrese el número de cuotas deseado:`));
                    let interesTotal, totalFinanciado, valorCuota;
                    switch (numeroCuotas) {
                        case 1:
                            interesTotal = diferenciaFinancial * (9.9 / 100);
                            totalFinanciado = diferenciaFinancial + interesTotal;
                            valorCuota = totalFinanciado / 12;
                            alert(`Polo 12 cuotas de $${valorCuota.toFixed(2)} (total financiado $${totalFinanciado.toFixed(2)})`);
                            break;
                        case 2:
                            interesTotal = diferenciaFinancial * (22 / 100);
                            totalFinanciado = diferenciaFinancial + interesTotal;
                            valorCuota = totalFinanciado / 24;
                            alert(`Polo 24 cuotas de $${valorCuota.toFixed(2)} (total financiado $${totalFinanciado.toFixed(2)})`);
                            break;
                        case 3:
                            interesTotal = diferenciaFinancial * (33 / 100);
                            totalFinanciado = diferenciaFinancial + interesTotal;
                            valorCuota = totalFinanciado / 36;
                            alert(`Polo 36 cuotas de $${valorCuota.toFixed(2)} (total financiado $${totalFinanciado.toFixed(2)})`);
                            break;
                        default:
                            alert("Opción de cuotas no válida");
                    }
                } else {
                    alert(`Minima entrega 30% = ${precioPolo*0.30} y financiar el resto.`);
                }
                break;
            default:
                alert("Opción no válida.");
        }        
        fin = prompt("¿Desea realizar otra consulta? (s/n): ");                
    }
}