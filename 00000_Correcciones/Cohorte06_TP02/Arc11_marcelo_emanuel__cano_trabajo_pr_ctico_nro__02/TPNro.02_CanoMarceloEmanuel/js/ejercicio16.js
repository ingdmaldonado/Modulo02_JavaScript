{
    const precioAmarok = 65000000;
    const precioTaos = 53000000;
    const precioPolo = 47000000;

    let dineroDisponible = 0;
    let tipovehiculo = 0;
    let diferenciaFinancial = 0;
    let numeroCuotas = 0;
    let fin = 's';

    while (fin != 'n' ) {

        tipovehiculo = Number(prompt("Ingrese el tipo de vehículo que desea comprar (1->Amarok, 2->Taos, 3->Polo):"));
        dineroDisponible = Number(prompt("Ingrese el dinero disponible para la compra:"));
        
        switch (tipovehiculo) {
            case 1:
                if (dineroDisponible >= (precioAmarok *0.30) && dineroDisponible < precioAmarok) {
                    diferenciaFinancial = precioAmarok - dineroDisponible;
                    numeroCuotas = Number(prompt(`1) 12 cuotas - 9.9% anual, 2) 24 cuotas - 22% anual, 3) 36 cuotas - 33% anual. Ingrese el número de cuotas deseado:`));
                    switch (numeroCuotas) {
                        case 1:
                            alert(`Amarok 12 cuotas $: ${(diferenciaFinancial * 1.099) / 12}`);
                            break;
                        case 2:
                            alert(`Amarok 24 cuotas $: ${(diferenciaFinancial * 1.22) / 24}`);
                            break;
                        case 3:
                            alert(`Amarok 36 cuotas $: ${(diferenciaFinancial * 1.33) / 36}`);
                            break;
                    }
                } else {
                    alert(`Minima entrega 30% = ${precioAmarok*0.30} y financiar el resto.`);
                }
                break;
            case 2:
                if (dineroDisponible >= (precioTaos *0.30) && dineroDisponible < precioTaos) {
                    diferenciaFinancial = precioTaos - dineroDisponible;
                    numeroCuotas = Number(prompt(`1) 12 cuotas - 9.9% anual, 2) 24 cuotas - 22% anual, 3) 36 cuotas - 33% anual. Ingrese el número de cuotas deseado:`));
                    switch (numeroCuotas) {
                        case 1:
                            alert(`12 cuotas $: ${(diferenciaFinancial * 1.099) / 12}`);
                            break;
                        case 2:
                            alert(`24 cuotas $: ${(diferenciaFinancial * 1.22) / 24}`);
                            break;
                        case 3:
                            alert(`36 cuotas $: ${(diferenciaFinancial * 1.33) / 36}`);
                            break;
                    }
                } else {
                    alert(`Minima entrega 30% = ${precioTaos*0.30} y financiar el resto.`);
                }
                break;
            case 3:
                if (dineroDisponible >= (precioPolo *0.30) && dineroDisponible < precioPolo) {
                    diferenciaFinancial = precioPolo - dineroDisponible;
                    numeroCuotas = Number(prompt(`1) 12 cuotas - 9.9% anual, 2) 24 cuotas - 22% anual, 3) 36 cuotas - 33% anual. Ingrese el número de cuotas deseado:`));
                    switch (numeroCuotas) {
                        case 1:
                            alert(`12 cuotas $: ${(diferenciaFinancial * 1.099) / 12}`);
                            break;
                        case 2:
                            alert(`24 cuotas $: ${(diferenciaFinancial * 1.22) / 24}`);
                            break;
                        case 3:
                            alert(`36 cuotas $: ${(diferenciaFinancial * 1.33) / 36}`);
                            break;
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