{
    let descuento = 0;

    let importeFinal =0;

    let importeTotal = Number(prompt(`ingrese el importe del producto`));

    descuento = (importeTotal *15) /100;

    importeFinal = importeTotal - descuento;

    console.log(`El importe de la compra es:${importeTotal} pesos`);

    console.log(`Su compra tiene un descuento del 15 % de:${descuento} pesos`);

    console.log(`El total a pagar es:${importeFinal} pesos `);


    
}