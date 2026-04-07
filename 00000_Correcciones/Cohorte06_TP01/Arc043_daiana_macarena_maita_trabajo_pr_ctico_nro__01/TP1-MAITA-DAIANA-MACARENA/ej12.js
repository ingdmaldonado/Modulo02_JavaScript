function ejecutar() {
    let dia = prompt("Ingrese día:");
    let compra = Number(prompt("Importe compra:"));

    let reintegro = 0;

    if (dia == "viernes" || dia == "sabado" || dia == "domingo") {
        reintegro = compra * 0.5;

        if (reintegro > 80000) {
            reintegro = 80000;
        }
    } else {
        console.log("No aplica beneficio");
    }

    let final = compra - reintegro;

    console.log("Día:", dia);
    console.log("Reintegro:", reintegro);
    console.log("Total final:", final);
}