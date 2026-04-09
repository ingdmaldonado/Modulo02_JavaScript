{
    
    let descuento = 0;
    let precioFinal = 0;
    
    let totalCompra = parseFloat(prompt("Ingrese el total de la compra:"));

    descuento = totalCompra * 0.50;

    if(descuento > 80000)
    {
        precioFinal = totalCompra - 80000;
        console.log(`descuento del ${((80000 *100 )/ totalCompra)}% - Total a pagar: ${precioFinal}`);
        
    }
    else {
        precioFinal = totalCompra - descuento;
        console.log(" descuento del 50% - Total a pagar: " + precioFinal);
    }

   

}