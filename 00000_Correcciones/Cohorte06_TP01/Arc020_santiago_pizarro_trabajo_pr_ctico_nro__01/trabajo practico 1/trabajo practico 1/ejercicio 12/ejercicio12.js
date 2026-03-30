{
    let dia = prompt("Ingrese el día de la compra (sin acentos) (ej: lunes, martes, etc.):").toLowerCase();
    let importeCompra = Number(prompt("Ingrese el importe de la compra:"));
    let topeReintegro = 80000;
    let reintegro = 0;
    let importeFinal = importeCompra;
    
    if (dia === "viernes" || dia === "sabado" || dia === "domingo") {
        let reintegroCalculado = importeCompra * 0.5;
        reintegro = (reintegroCalculado > topeReintegro) ? topeReintegro : reintegroCalculado;
        importeFinal = importeCompra - reintegro;
        console.log(`Día de compra: ${dia} (aplica reintegro)`);
    } else {
        console.log(`Día de compra: ${dia} (no aplica reintegro)`);
    }
    
    console.log(`Importe compra: $${importeCompra.toFixed(2)}`);
    console.log(`Reintegro obtenido: $${reintegro.toFixed(2)}`);
    console.log(`Importe final pagado: $${importeFinal.toFixed(2)}`);

}