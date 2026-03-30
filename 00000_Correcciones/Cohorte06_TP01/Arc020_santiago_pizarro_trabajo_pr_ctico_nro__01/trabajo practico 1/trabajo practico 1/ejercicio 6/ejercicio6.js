{
    let compra = Number(prompt("Ingrese el valor de la compra:"));

    let descuentoCalculado = (compra * 50) / 100;
    let tope = 80000;
    let descuentoAplicado;
    let totalFinal;

    if (descuentoCalculado > tope) {
        descuentoAplicado = tope;
        totalFinal = compra - tope;
        console.log(`El descuento supera el tope, se aplica el tope de $${tope}.`);
    } 
    
    else {
        descuentoAplicado = descuentoCalculado;
        totalFinal = compra - descuentoCalculado;
        console.log(`El descuento no supera el tope, se aplica el 50% de descuento.`);
    }

    console.log(`Importe de la compra: $${compra.toFixed(2)}`);
    console.log(`Descuento aplicado: $${descuentoAplicado.toFixed(2)}`);
    console.log(`Importe final a pagar: $${totalFinal.toFixed(2)}`);
}