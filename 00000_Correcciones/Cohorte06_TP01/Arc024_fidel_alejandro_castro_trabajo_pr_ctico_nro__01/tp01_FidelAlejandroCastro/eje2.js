{
    let descuento = 15/100;
    let importeCliente = Number(prompt("Ingrese importe total de la compra: "));

    console.log(`Importe total: $${importeCliente}`);
    let descuentoTotal = importeCliente*descuento

    console.log(`Se le aplica un descuento del ${descuento*100}%: $${descuentoTotal}`);
    console.log(`Importe a pagar: $${importeCliente-descuentoTotal}`);

}