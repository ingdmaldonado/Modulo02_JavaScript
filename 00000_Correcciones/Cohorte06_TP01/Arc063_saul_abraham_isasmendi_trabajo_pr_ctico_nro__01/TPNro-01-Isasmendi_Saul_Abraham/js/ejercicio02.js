{
    let totalCompra = 0;
    let descuento = 0;

    totalCompra = Number(prompt("Ingrese el total de la compra: "));
    descuento = totalCompra * 0.15;

    console.log("El total a pagar sin el descuento  es: " + totalCompra);
    console.log("El descuento aplicado es: " + descuento);
    console.log("El total a pagar con el descuento es: " + (totalCompra - descuento));
}