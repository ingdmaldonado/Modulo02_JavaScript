function ejecutar() {
    let luz = Number(prompt("Luz:"));
    let internet = Number(prompt("Internet:"));
    let agua = Number(prompt("Agua:"));

    let total = (luz * 1.125) + (internet * 1.07) + (agua * 1.03);

    console.log("Total futuro:", total);
}