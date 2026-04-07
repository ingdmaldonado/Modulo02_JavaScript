function ejecutar() {
    let cantidad = Number(prompt("Cantidad de pasajes:"));
    let importe = Number(prompt("Precio por pasaje:"));

    let total = cantidad * importe;
    let descuento = 0;

    if (cantidad > 3 && total > 500000) {
        descuento = total * 0.15;
    } else if (cantidad > 3 && total > 250000) {
        descuento = total * 0.11;
    }

    let final = total - descuento;

    console.log("Total:", total);
    console.log("Descuento:", descuento);
    console.log("Final:", final);
}