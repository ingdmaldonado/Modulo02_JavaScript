function ejecutar() {
    let compra = Number(prompt("Importe compra:"));
    let zona = Number(prompt("1-Centro 2-Oeste 3-Norte 4-Sur 5-Este"));

    let envio = 0;

    switch (zona) {
        case 1:
            envio = 2500;
            break;
        case 2:
            envio = 3750;
            break;
        case 3:
            envio = 4225;
            break;
        case 4:
            envio = 5222.5;
            break;
        case 5:
            envio = 4288.5;
            break;
        default:
            console.log("Zona inválida");
    }

    let total = compra + envio;

    console.log("Costo envío:", envio);
    console.log("Total final:", total);
}