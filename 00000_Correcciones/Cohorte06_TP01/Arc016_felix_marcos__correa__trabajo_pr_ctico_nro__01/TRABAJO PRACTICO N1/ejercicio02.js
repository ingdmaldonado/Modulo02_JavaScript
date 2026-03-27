{ let importeDeCompra = 0; 

    importeDeCompra = Number( prompt(`señor ingrese el importe de la compra`));

    let descuento = importeDeCompra * 0.15;
    let importeFinal = importeDeCompra - descuento;
    let textoFinal = `importe total de la compra ${importeDeCompra} descuento ${descuento} importe a pagar ${importeFinal}`;
    
    console.log(textoFinal)

}
