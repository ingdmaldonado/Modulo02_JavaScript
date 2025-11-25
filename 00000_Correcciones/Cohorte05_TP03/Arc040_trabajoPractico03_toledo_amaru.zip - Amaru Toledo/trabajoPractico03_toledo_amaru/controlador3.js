/**
 * EJERCICIO NRO. 16
 * Calcula la sobre Tasa (impuesto) a las bebidas según su clasificación y tipo.
 * @param {number} importeBase El importe base de la bebida.
 * @param {number} clasificacion El número de clasificación de la bebida (1 a 6).
 * @returns {number} El monto de la sobre Tasa.
 */
window.addEventListener('load', () => {
    console.log('controlador3 cargado y listo.');
});

// VARIABLE PRINCIPAL
export const calcularSobreTasaBebidas = (importeBase, clasificacion) => {
    let tasaPorMil = 0; // Tasa en "por mil"

    switch (clasificacion) {
        case 1: // Agua en envases plásticos = 5 por mil [cite: 39]
            tasaPorMil = 5;
            break;
        case 2: // Agua en envases retornables = 1 por mil [cite: 40]
            tasaPorMil = 1;
            break;
        case 3: // Gaseosas Azucaradas en envases plásticos = 7 por mil [cite: 41]
            tasaPorMil = 7;
            break;
        case 4: // Gaseosas Azucaradas en envases retornables = 2 por mil [cite: 42]
            tasaPorMil = 2;
            break;
        case 5: // Bebidas Energéticas = 15 por mil [cite: 43]
            tasaPorMil = 15;
            break;
        case 6: // Cualquier otra bebida no clasificada = 1 por mil [cite: 44]
        default:
            tasaPorMil = 1;
            break;
    }
    console.log(`Clasificación: ${clasificacion}, Tasa por mil: ${tasaPorMil}`);

    // La tasa en porcentaje es (tasaPorMil / 1000)
    const sobreTasa = importeBase * (tasaPorMil / 1000);
    return sobreTasa;
};