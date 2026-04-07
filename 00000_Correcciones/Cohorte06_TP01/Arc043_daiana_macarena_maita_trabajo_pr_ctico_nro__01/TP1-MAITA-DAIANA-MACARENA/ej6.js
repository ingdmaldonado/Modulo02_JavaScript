function ejecutar() {
    let compra = Number(prompt("Compra:"));

    let descuento = compra * 0.5;

    if (descuento > 80000) {
        descuento = 80000;
    }

    let final = compra - descuento;

    console.log("Descuento:", descuento);
    console.log("Final:", final);
}