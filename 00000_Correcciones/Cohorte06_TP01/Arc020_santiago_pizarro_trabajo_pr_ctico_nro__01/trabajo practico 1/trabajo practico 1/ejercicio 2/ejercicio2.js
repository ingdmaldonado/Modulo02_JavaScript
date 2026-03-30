{
    let importeTotal = Number(prompt("Ingrese el importe total de la compra:"));

    let descuento = (importeTotal * 15)/ 100;

    let importeFinal = importeTotal - descuento;

    console.log(`Importe total: $${importeTotal.toFixed(2)}`);

    console.log(`El importe final a pagar junto con un descuento aplicado del 15% en la compra es de: $${importeFinal.toFixed(2)}`)

}