function ejecutar() {
    let total = Number(prompt("Total compra:"));
    let forma = Number(prompt("1-Efectivo 2-Débito 3-Crédito"));

    let descuento = 0;

    switch (forma) {
        case 1:
            descuento = total * 0.10;
            break;
        case 2:
            descuento = total * 0.05;
            break;
        case 3:
            descuento = 0;
            break;
        default:
            console.log("Forma inválida");
    }

    let final = total - descuento;

    console.log("Descuento:", descuento);
    console.log("Total final:", final);
}