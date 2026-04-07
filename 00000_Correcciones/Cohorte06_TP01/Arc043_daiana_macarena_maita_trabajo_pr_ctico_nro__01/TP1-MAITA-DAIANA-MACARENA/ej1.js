function ejecutar() {
    let A = Number(prompt("Ingrese A:"));
    let B = Number(prompt("Ingrese B:"));

    console.log("Suma:", A + B);
    console.log("Resta:", A - B);
    console.log("Producto:", A * B);

    if (B !== 0) {
        console.log("División:", A / B);
    } else {
        console.log("No se puede dividir por 0");
    }
}