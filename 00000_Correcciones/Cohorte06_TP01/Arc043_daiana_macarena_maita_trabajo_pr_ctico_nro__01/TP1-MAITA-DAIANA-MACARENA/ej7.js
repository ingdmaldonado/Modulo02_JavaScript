function ejecutar() {
    let codigo = Number(prompt("1-Dogui 2-Tiernitos 3-Dogpro"));
    let cantidad = Number(prompt("Cantidad:"));

    let precio = 0;

    switch (codigo) {
        case 1:
            if (cantidad >= 11) {
                precio = 34000;
            } else if (cantidad >= 5) {
                precio = 36000;
            } else {
                precio = 38000;
            }
            break;
        case 2:
            if (cantidad >= 11) {
                precio = 27000;
            } else if (cantidad >= 5) {
                precio = 29000;
            } else {
                precio = 31000;
            }
            break;
        case 3:
            if (cantidad >= 11) {
                precio = 42000;
            } else if (cantidad >= 5) {
                precio = 44000;
            } else {
                precio = 46000;
            }
            break;
        default:
            console.log("Código inválido");
    }

    console.log("Total:", precio * cantidad);
}