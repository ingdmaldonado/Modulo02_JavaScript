{
    let costoEnvio = 0;
    let totalMasEnvio = 0;
    let compraTotal = parseFloat(prompt("Ingrese el monto de la compra:"));
    let zona = prompt("Ingrese la zona del envío (1->Centro, 2->Oeste, 3->Norte, 4->Sur, 5->Este):");

    if (zona === "1") {
        totalMasEnvio = compraTotal + 2500;
    }
    else if (zona === "2") {
        totalMasEnvio = compraTotal + 3750;
    }
    else if (zona === "3") {
        totalMasEnvio = compraTotal + 4225;        
    }
    else if (zona === "4") {
        totalMasEnvio = compraTotal + 5222.50;        
    }
    else if (zona === "5") {
        totalMasEnvio = compraTotal + 4288.50;        
    }
    else {
        console.log("Zona no válida, ingrese un número del 1 al 5.");
    }

    console.log("El costo total de la compra más el envío es: $" + totalMasEnvio);

}