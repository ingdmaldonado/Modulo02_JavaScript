{
    let importeCompra = Number(prompt("Importe de compra: "));
    let metodoPago = Number(prompt("Método de pago: "));
    let descuento = 0;

    switch (metodoPago) {
        case 1:
            descuento = 10/100;
            break;
        case 2:
            descuento = 5/100;
            break;
        case 3:
            break;
    
        default:
            console.log(`Método de pago invalido`);
            break;
    }

    let totalDescuento = importeCompra*descuento;

    console.log (`1- Efectivo (10% descuento)\n2- Débito (5% descuento)\n3- Crédito (Sin descuento)`);
    console.log(`Importe de compra: $${importeCompra}`)
    console.log(`Descuento: $${totalDescuento}`);
    console.log(`Total final: $${importeCompra-totalDescuento}`);
}

