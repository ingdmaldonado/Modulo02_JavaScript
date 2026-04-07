function ejecutar() {
    let num = Number(prompt("Número:"));

    if (num >= 0) {
        console.log("Positivo");
    } else {
        console.log("Negativo");
    }

    console.log(num >= 0 ? "Positivo (ternario)" : "Negativo (ternario)");
}