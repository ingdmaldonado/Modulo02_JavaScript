function ejecutar() {
    let total = Number(prompt("Importe total:"));

    let descuento = total * 0.15;
    let final = total - descuento;

    console.log("Total:", total);
    console.log("Descuento:", descuento);
    console.log("Final:", final);
}