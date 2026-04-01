{
    let facturaLuz = 0;
    let facturaInternet = 0;
    let facturaAgua = 0;

    facturaLuz = Number(prompt(`Por favor, ingrese el monto de su factura de luz`));
    facturaInternet = Number(prompt(`Por favor, ingrese el monto de su factura de Internet`));
    facturaAgua = Number(prompt(`Por favor, ingrese el monto de su factura de agua`));

    let sumaFacturasSinAumento = facturaLuz + facturaInternet + facturaAgua
    console.log(`Gastos del mes actual: $${sumaFacturasSinAumento}`);

    let facturaConAumentoLuz = (facturaLuz * 12.5) / 100;
    facturaConAumentoLuz = facturaConAumentoLuz + facturaLuz;
    let facturaConAumentoInternet = (facturaInternet * 7) / 100;
    facturaConAumentoInternet = facturaConAumentoInternet + facturaInternet;
    let facturaConAumentoAgua = (facturaAgua * 3) / 100;
    facturaConAumentoAgua = facturaConAumentoAgua + facturaAgua;

    let sumaFacturasConAumento = facturaConAumentoLuz + facturaConAumentoInternet + facturaConAumentoAgua;
    console.log(`El gasto futuro estimado a pagar es: $${sumaFacturasConAumento}`);
}