{
    let importeDeCompra = 0;
    let descuento = 0;
    let totalAPagar = 0;



    importeDeCompra = Number (prompt(`Ingrese importe de su compra`));

    console.log(importeDeCompra);

    descuento = (importeDeCompra * 50 )/100;

    console.log(descuento);

    if(descuento){
        descuento = descuento > 80000 ? 80000: descuento;
        console.log(`El descuento es de:  $`, descuento);
    }
    else
    {
        console.log(`Vuelva a Intentarlo`);
    }

    totalAPagar = importeDeCompra - descuento;

    console.log(`El total a pagar con el descuento aplicado es de:`, totalAPagar);

   
}
