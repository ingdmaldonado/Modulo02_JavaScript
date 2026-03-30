{
    let importeCompra=0;

    let descuento=0;

    let totalPagar=0;

    importeCompra=Number(prompt(`Ingrese el importe de la compra: ${importeCompra}`));
    if (importeCompra <= 160000) {
      descuento = importeCompra /2 ;
      totalPagar = importeCompra - descuento;
    }
    else {
        descuento = 80000;
       totalPagar = importeCompra -descuento ;

    }
    console.log(`El Importe de la compra es :$${importeCompra}`);

   console.log(`El total a pagar es: $${totalPagar}`);

}