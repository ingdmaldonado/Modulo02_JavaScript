function ejecutar() {
    let rubro = Number(prompt("1-Vestimenta 2-Perfumería 3-Librería 4-Electro 5-Calzado"));
    let importeCompra = Number(prompt("Ingrese importe:"));

    let descuentoCompra = 0;
    let totalApagar = 0;

    switch (rubro) {
        case 1:
        case 2:
        case 5:
            descuentoCompra = (importeCompra * 20) / 100;
            if (descuentoCompra > 80000) descuentoCompra = 80000;
            break;

        case 3:
            descuentoCompra = (importeCompra * 30) / 100;
            if (descuentoCompra > 90000) descuentoCompra = 90000;
            break;

        case 4:
            descuentoCompra = (importeCompra * 15) / 100;
            if (descuentoCompra > 70000) descuentoCompra = 70000;
            break;

        default:
            console.log("Rubro inválido");
    }

    totalApagar = importeCompra - descuentoCompra;

    console.log(`Importe: ${importeCompra}`);
    console.log(`Descuento: ${descuentoCompra}`);
    console.log(`Total a pagar: ${totalApagar}`);
}