{
    let valorCompra = Number(prompt("Ingrese el valor de la compra: "));

    let descuento = 50/100;
    let descuentoTope = 80000;
    let calculoDescuento = valorCompra * descuento;
    let totalPagar = 0;


    if(calculoDescuento <= descuentoTope){
        totalPagar = calculoDescuento;
    }else{
        totalPagar = valorCompra - descuentoTope;
        calculoDescuento = descuentoTope
    }

    console.log(`Valor de compra: $${valorCompra}`);
    console.log(`Total a pagar: $${totalPagar} | descuento de $${calculoDescuento}`);
}