/*
Ejercicio Nro. 11: Estructuras Condicionales (if/else)
Local de comida rápida, suma costo de envío según zona:
1) Centro = $2500,00 | 2) Oeste = $3750,00 | 3) Norte = $4225,00 | 4) Sur = $5222,50 | 5) Este = $4288,50
*/
{
    let costoCentro = 2500.00;
    let costoOeste = 3750.00;
    let costoNorte = 4225.00;
    let costoSur = 5222.50;
    let costoEste = 4288.50;

    let importeCompra = 0;
    let zona = 0;

    importeCompra = Number(prompt("Ingrese el importe de la compra:"));
    zona = Number(prompt("Ingrese su zona de envío (1-Centro, 2-Oeste, 3-Norte, 4-Sur, 5-Este):"));

    let costoEnvio = 0;
    let totalPagar = 0;

    if (zona === 1) { costoEnvio = costoCentro; }
    else if (zona === 2) { costoEnvio = costoOeste; }
    else if (zona === 3) { costoEnvio = costoNorte; }
    else if (zona === 4) { costoEnvio = costoSur; }
    else if (zona === 5) { costoEnvio = costoEste; }
    
    totalPagar = importeCompra + costoEnvio;

    if (costoEnvio === 0) {
        console.log("Zona ingresada inválida.");
    } else {
        console.log(`Importe comida: $${importeCompra}. Costo envío: $${costoEnvio}. Total final a pagar: $${totalPagar}`);
    }
}